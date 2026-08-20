"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { DailyTask } from "@/lib/types";

/* ============================================================
   Nhiệm vụ hằng ngày — tự đếm theo hoạt động thật (không tự tick).
   - "lesson": hoàn thành 1 bài học (video→flashcard→kiểm tra)
   - "cards" : số thẻ đã ôn (flashcard / trong bài học)
   - "game"  : XP đạt được từ game
   Tự reset mỗi ngày; thưởng XP + toast khi đạt mục tiêu lần đầu.
   ============================================================ */
type TaskKey = "lesson" | "cards" | "game";
type TaskProgress = Record<TaskKey, number>;

const TASK_META: { id: TaskKey; label: string; target: number; reward: number }[] = [
  { id: "lesson", label: "Hoàn thành 1 bài học video", target: 1, reward: 30 },
  { id: "cards", label: "Ôn 12 thẻ flashcard", target: 12, reward: 20 },
  { id: "game", label: "Đạt 50 XP từ game", target: 50, reward: 25 },
];

const todayStr = () => new Date().toISOString().slice(0, 10);

/* ============================================================
   AppState — Kho trạng thái chung của ứng dụng (lưu localStorage).
   Gồm: tiến trình (XP / cấp độ / streak / từ đã thuộc),
        lặp ngắt quãng flashcard (SRS), và hệ thống toast.
   Giúp toàn bộ app "sống động": làm bài/ chơi game/ ôn thẻ
   → cộng XP thật, lên cấp, nhắc nhở, cập nhật số từ cần ôn.
   ============================================================ */

export interface Toast {
  id: number;
  title: string;
  desc?: string;
  icon: string;
  tone: "xp" | "badge" | "info" | "warn";
}

/** Bản ghi SRS mỗi thẻ: hộp (box) 0..4 — càng cao càng thuộc. */
type SrsMap = Record<string, number>;

/** XP kiếm được theo từng ngày (khóa = yyyy-mm-dd) — nguồn THẬT cho biểu đồ 7 ngày. */
type XpByDay = Record<string, number>;

/** Một cột trong biểu đồ hoạt động 7 ngày (dữ liệu thật, không mock). */
export interface DayActivity {
  date: string; // yyyy-mm-dd
  label: string; // T2..T7, CN
  xp: number;
}

const DAY_LABELS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]; // Date.getDay(): 0=CN

const XP_PER_LEVEL = 600;

/** Giá trị khởi tạo = TÀI KHOẢN MỚI hoàn toàn trống (0 XP, 0 streak, 0 từ).
 *  Học sinh sẽ bắt đầu từ con số 0 và tự tích lũy khi học/ôn/chơi. */
const SEED_XP = 0;
const SEED_STREAK = 0;
const SEED_WORDS = 0;
const SEED_SRS: SrsMap = {};

// Phiên bản cấu trúc dữ liệu — đổi khi muốn reset toàn bộ localStorage của người dùng
const STORAGE_VERSION = "v3";

export function cardKey(deckId: string, cardId: string) {
  return `${deckId}:${cardId}`;
}

interface AppStateValue {
  xp: number;
  streak: number;
  wordsLearned: number;
  srs: SrsMap;
  toasts: Toast[];

  // Trích xuất cấp độ
  level: number;
  xpIntoLevel: number;
  xpForNext: number;
  levelPct: number;

  hydrated: boolean;

  /** Hoạt động 7 ngày gần nhất (XP thật kiếm được mỗi ngày). */
  weekActivity: DayActivity[];

  addXp: (amount: number, reason?: string) => void;
  recordCard: (deckId: string, cardId: string, known: boolean) => void;
  needsReviewCount: (keys: string[]) => number;
  deckLearnedCount: (keys: string[]) => number;
  pushToast: (t: Omit<Toast, "id">) => void;
  dismissToast: (id: number) => void;

  // Nhiệm vụ hằng ngày (tự theo dõi)
  dailyTasks: DailyTask[];
  markLessonDone: () => void;
  recordGame: (score: number) => void;
}

const AppContext = createContext<AppStateValue | null>(null);

let toastSeq = 1;

export function AppProvider({ children }: { children: ReactNode }) {
  const [xp, setXp] = useState(SEED_XP);
  const [streak] = useState(SEED_STREAK);
  const [wordsLearned, setWordsLearned] = useState(SEED_WORDS);
  const [srs, setSrs] = useState<SrsMap>(SEED_SRS);
  const [xpByDay, setXpByDay] = useState<XpByDay>({});
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Nhiệm vụ hằng ngày
  const [tasks, setTasks] = useState<TaskProgress>({ lesson: 0, cards: 0, game: 0 });
  const [taskDay, setTaskDay] = useState<string>("");
  const [claimed, setClaimed] = useState<Record<TaskKey, boolean>>({ lesson: false, cards: false, game: false });

  // Ref đọc giá trị mới nhất (tránh side-effect bên trong updater)
  const xpRef = useRef(xp);
  xpRef.current = xp;
  const srsRef = useRef(srs);
  srsRef.current = srs;
  const tasksRef = useRef(tasks);
  tasksRef.current = tasks;
  const claimedRef = useRef(claimed);
  claimedRef.current = claimed;
  const taskDayRef = useRef(taskDay);
  taskDayRef.current = taskDay;

  // Đọc trạng thái đã lưu khi tải trang
  useEffect(() => {
    try {
      const ver = window.localStorage.getItem("lingoquest:app-ver");
      const raw = window.localStorage.getItem("lingoquest:app");
      // Chỉ khôi phục nếu cùng phiên bản cấu trúc; khác phiên bản → coi như tài khoản mới
      if (ver === STORAGE_VERSION && raw) {
        const data = JSON.parse(raw);
        if (typeof data.xp === "number") setXp(data.xp);
        if (typeof data.wordsLearned === "number") setWordsLearned(data.wordsLearned);
        if (data.srs && typeof data.srs === "object") setSrs(data.srs);
        if (data.xpByDay && typeof data.xpByDay === "object") setXpByDay(data.xpByDay);
        // Khôi phục nhiệm vụ — nhưng reset nếu sang ngày mới
        const sameDay = data.taskDay === todayStr();
        if (sameDay && data.tasks) setTasks(data.tasks);
        if (sameDay && data.claimed) setClaimed(data.claimed);
        setTaskDay(todayStr());
      } else {
        window.localStorage.setItem("lingoquest:app-ver", STORAGE_VERSION);
        setTaskDay(todayStr());
      }
    } catch {
      /* bỏ qua */
    }
    setHydrated(true);
  }, []);

  // Lưu khi thay đổi
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        "lingoquest:app",
        JSON.stringify({ xp, streak, wordsLearned, srs, xpByDay, tasks, taskDay, claimed }),
      );
    } catch {
      /* bỏ qua */
    }
  }, [xp, streak, wordsLearned, srs, xpByDay, tasks, taskDay, claimed, hydrated]);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const pushToast = useCallback(
    (t: Omit<Toast, "id">) => {
      const id = toastSeq++;
      setToasts((prev) => [...prev.slice(-3), { ...t, id }]); // giữ tối đa 4 toast
      window.setTimeout(() => dismissToast(id), 4000);
    },
    [dismissToast],
  );

  const addXp = useCallback(
    (amount: number, reason?: string) => {
      const prev = xpRef.current;
      const next = prev + amount;
      const oldLevel = Math.floor(prev / XP_PER_LEVEL) + 1;
      const newLevel = Math.floor(next / XP_PER_LEVEL) + 1;
      setXp(next);
      // Ghi nhận XP kiếm được vào NGÀY HÔM NAY (nguồn thật cho biểu đồ 7 ngày)
      const today = todayStr();
      setXpByDay((prev) => {
        const updated: XpByDay = { ...prev, [today]: (prev[today] ?? 0) + amount };
        // Chỉ giữ 14 ngày gần nhất để localStorage không phình to
        const keys = Object.keys(updated).sort();
        while (keys.length > 14) delete updated[keys.shift()!];
        return updated;
      });
      pushToast({ title: `+${amount} XP`, desc: reason, icon: "⚡", tone: "xp" });
      if (newLevel > oldLevel) {
        pushToast({ title: `Lên cấp ${newLevel}!`, desc: "Tiếp tục phát huy nhé!", icon: "🎉", tone: "badge" });
      }
    },
    [pushToast],
  );

  const recordCard = useCallback(
    (deckId: string, cardId: string, known: boolean) => {
      const key = cardKey(deckId, cardId);
      const prevBox = srsRef.current[key] ?? 0;
      const nextBox = known ? Math.min(4, prevBox + 1) : 0;
      setSrs((prev) => ({ ...prev, [key]: nextBox }));
      // Lần đầu thẻ được đánh dấu "đã nhớ" (từ hộp 0 lên hộp ≥1) → tăng số từ đã thuộc
      if (prevBox === 0 && nextBox >= 1) {
        setWordsLearned((w) => w + 1);
      }
      // Mỗi thẻ ôn → cộng tiến trình nhiệm vụ "ôn flashcard"
      trackTask("cards", 1);
    },
    // trackTask được định nghĩa ngay dưới đây (useCallback ổn định)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  /** Theo dõi tiến trình một nhiệm vụ — tự reset mỗi ngày, thưởng XP khi đạt mục tiêu */
  const trackTask = useCallback(
    (key: TaskKey, amount: number) => {
      const today = todayStr();
      // Qua ngày mới → reset toàn bộ nhiệm vụ
      if (taskDayRef.current !== today) {
        const zero: TaskProgress = { lesson: 0, cards: 0, game: 0 };
        const fresh: Record<TaskKey, boolean> = { lesson: false, cards: false, game: false };
        taskDayRef.current = today;
        tasksRef.current = zero;
        claimedRef.current = fresh;
        setTaskDay(today);
        setTasks(zero);
        setClaimed(fresh);
      }
      const meta = TASK_META.find((m) => m.id === key);
      if (!meta) return;
      const prev = tasksRef.current[key] ?? 0;
      const nextVal = Math.min(meta.target, prev + amount);
      tasksRef.current = { ...tasksRef.current, [key]: nextVal };
      setTasks((p) => ({ ...p, [key]: nextVal }));
      // Đạt mục tiêu lần đầu trong ngày → thưởng XP + toast
      if (!claimedRef.current[key] && nextVal >= meta.target) {
        claimedRef.current = { ...claimedRef.current, [key]: true };
        setClaimed((c) => ({ ...c, [key]: true }));
        pushToast({ title: "🎉 Nhiệm vụ hoàn thành!", desc: meta.label, icon: "✅", tone: "badge" });
        addXp(meta.reward, `Nhiệm vụ: ${meta.label}`);
      }
    },
    [addXp, pushToast],
  );

  /** Đánh dấu hoàn thành 1 bài học (gọi khi xong bài kiểm tra cuối bài) */
  const markLessonDone = useCallback(() => trackTask("lesson", 1), [trackTask]);

  /** Ghi nhận điểm game vào nhiệm vụ "đạt XP từ game" */
  const recordGame = useCallback((score: number) => trackTask("game", score), [trackTask]);

  const needsReviewCount = useCallback(
    (keys: string[]) => keys.filter((k) => (srs[k] ?? 0) < 3).length,
    [srs],
  );

  const deckLearnedCount = useCallback(
    (keys: string[]) => keys.filter((k) => (srs[k] ?? 0) >= 1).length,
    [srs],
  );

  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpIntoLevel = xp % XP_PER_LEVEL;
  const xpForNext = XP_PER_LEVEL;
  const levelPct = (xpIntoLevel / XP_PER_LEVEL) * 100;

  // Danh sách nhiệm vụ hằng ngày (đã điền tiến trình thật)
  const dailyTasks = useMemo<DailyTask[]>(
    () =>
      TASK_META.map((m) => ({
        id: m.id,
        label: m.label,
        current: Math.min(tasks[m.id] ?? 0, m.target),
        target: m.target,
        reward: m.reward,
      })),
    [tasks],
  );

  // Hoạt động 7 ngày gần nhất (kết thúc hôm nay) — dữ liệu XP thật theo ngày
  const weekActivity = useMemo<DayActivity[]>(() => {
    const days: DayActivity[] = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      days.push({ date: key, label: DAY_LABELS[d.getDay()], xp: xpByDay[key] ?? 0 });
    }
    return days;
  }, [xpByDay]);

  const value = useMemo<AppStateValue>(
    () => ({
      xp,
      streak,
      wordsLearned,
      srs,
      toasts,
      level,
      xpIntoLevel,
      xpForNext,
      levelPct,
      hydrated,
      weekActivity,
      addXp,
      recordCard,
      needsReviewCount,
      deckLearnedCount,
      pushToast,
      dismissToast,
      dailyTasks,
      markLessonDone,
      recordGame,
    }),
    [xp, streak, wordsLearned, srs, toasts, level, xpIntoLevel, xpForNext, levelPct, hydrated, weekActivity, addXp, recordCard, needsReviewCount, deckLearnedCount, pushToast, dismissToast, dailyTasks, markLessonDone, recordGame],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp phải được dùng bên trong <AppProvider>");
  return ctx;
}
