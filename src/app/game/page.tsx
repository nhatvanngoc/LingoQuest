"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Play,
  ChevronLeft,
  Crown,
  Medal,
  RotateCcw,
  Gamepad2,
  Keyboard,
  Check,
  Sparkles,
  TrendingUp,
  Target,
  MousePointerClick,
  Brain,
  LetterText,
  PartyPopper,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { GameCanvas } from "@/components/game/GameCanvas";
import { Confetti } from "@/components/Confetti";
import { Mascot } from "@/components/brand/Mascot";
import { GAMES } from "@/lib/mock/data";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";
import type { GameId, WordMode } from "@/components/game/PhaserGame";
import type { LeaderRow } from "@/lib/types";

/* 3 chế độ học của Word Defender — để học sinh nhớ cả TỪ lẫn NGHĨA */
const MODES: { id: WordMode; icon: typeof Brain; title: string; desc: string; recommended?: boolean }[] = [
  {
    id: "meaning",
    icon: Brain,
    title: "Đoán từ (xem nghĩa)",
    desc: "Thấy nghĩa tiếng Việt, nhớ và gõ từ tiếng Anh — nhớ từ & nghĩa tốt nhất",
    recommended: true,
  },
  {
    id: "both",
    icon: LetterText,
    title: "Hiện cả hai",
    desc: "Thấy cả từ và nghĩa, gõ lại từ — ôn nhẹ, ghi nhớ qua lặp lại",
  },
  {
    id: "word",
    icon: Keyboard,
    title: "Gõ từ (xem từ)",
    desc: "Thấy từ tiếng Anh, gõ lại — luyện chính tả thuần tuý",
  },
];

/* Trang Game — Hub + luồng chơi đầy đủ (bắt đầu → chơi → kết quả) */

const HOW_TO: Record<GameId, { steps: string[]; control: string }> = {
  "word-defender": {
    control: "Bàn phím",
    steps: [
      "Các từ tiếng Anh (quái) đang rơi xuống.",
      "Gõ chữ cái đầu của một từ để khoá mục tiêu.",
      "Gõ nốt phần còn lại để bắn hạ quái đó.",
      "Quái chạm vạch đỏ = mất 1 mạng. Đừng để qua!",
      "Gõ liên tiếp đúng để tăng combo và điểm thưởng.",
    ],
  },
  "sentence-builder": {
    control: "Chuột / chạm",
    steps: [
      "Sắp xếp các từ đang xáo trộn thành câu đúng.",
      "Nhắp từ để đưa vào ô xây, nhắp lại để trả về.",
      "Mỗi câu có 20 giây — nhanh tay nhé!",
      "Sai sẽ mất 1 mạng và hiện đáp án đúng để học.",
    ],
  },
};

/* Icon hiển thị cho từng game (thay emoji khổng lồ, hiển thị ổn định mọi thiết bị) */
const GAME_ICON: Record<GameId, typeof Keyboard> = {
  "word-defender": Keyboard,
  "sentence-builder": MousePointerClick,
};

/** Đọc điểm cao nhất THẬT từ localStorage (0 = chưa chơi, không nhét số mock giả) */
function loadBest(): Record<GameId, number> {
  const fallback: Record<GameId, number> = { "word-defender": 0, "sentence-builder": 0 };
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem("lingoquest:best");
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

/** Đọc/kết hợp điểm cao nhất từ localStorage với dữ liệu mock */


export default function GamePage() {
  const [view, setView] = useState<"hub" | "playing">("hub");
  const [activeGame, setActiveGame] = useState<GameId>("word-defender");
  const [started, setStarted] = useState(false);
  const [runId, setRunId] = useState(0); // ép remount Phaser khi chơi lại
  const [result, setResult] = useState<{ score: number; cleared: number } | null>(null);
  const [best, setBest] = useState<Record<GameId, number>>(loadBest);
  const [board, setBoard] = useState<LeaderRow[]>([]);
  const [mode, setMode] = useState<WordMode>("meaning"); // chế độ học Word Defender
  const { addXp, recordGame } = useApp();
  const rewardedRun = useRef(0); // runId đã thưởng XP (tránh cộng nhiều lần)

  const game = GAMES.find((g) => g.id === activeGame)!;

  useEffect(() => {
    let active = true;
    fetch("/api/classroom/leaderboard")
      .then((r) => r.json())
      .then((data: { rows?: { id: string; name: string; xp: number }[] }) => {
        if (!active) return;
        setBoard((data.rows ?? []).map((r) => ({ ...r, me: false })));
      })
      .catch(() => {
        if (!active) return;
        setBoard([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const openGame = (id: string) => {
    setActiveGame(id as GameId);
    setResult(null);
    setStarted(false);
    setRunId((n) => n + 1);
    setView("playing");
  };

  const handleGameOver = (score: number, cleared: number) => {
    setResult({ score, cleared });
    // Cộng XP đúng 1 lần mỗi lượt chơi (theo runId)
    if (rewardedRun.current !== runId) {
      rewardedRun.current = runId;
      addXp(score, cleared > 0 ? "Điểm game" : "Chơi game");
      recordGame(score); // → nhiệm vụ "đạt 50 XP từ game"
    }
    // Cập nhật điểm cao nhất
    if (score > best[activeGame]) {
      const nextBest = { ...best, [activeGame]: score };
      setBest(nextBest);
      try {
        window.localStorage.setItem("lingoquest:best", JSON.stringify(nextBest));
      } catch {
        /* bỏ qua */
      }
    }
    // Cập nhật bảng xếp hạng (hàng của mình)
    setBoard((prev) => {
      const updated = prev.map((r) => (r.me ? { ...r, xp: Math.max(r.xp, score) } : r));
      return [...updated].sort((a, b) => b.xp - a.xp);
    });
  };

  const replay = () => {
    setResult(null);
    setStarted(false);
    setRunId((n) => n + 1);
  };

  const isBest = result ? result.score >= best[activeGame] && result.score > 0 : false;

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        <Link
          href="/dashboard"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" /> Quay lại
        </Link>

        {/* ===== HUB ===== */}
        {view === "hub" && (
          <>
            <h1 className="flex items-center gap-2.5 text-2xl font-extrabold text-slate-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
                <Gamepad2 className="h-5 w-5" />
              </span>
              Hub Game luyện từ
            </h1>
            <p className="mt-1 text-slate-500">Học từ vựng và ngữ pháp qua mini-game 2D vui nhộn.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {GAMES.map((g) => (
                <motion.button
                  key={g.id}
                  onClick={() => openGame(g.id)}
                  whileHover={{ y: -4 }}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white text-left shadow-soft"
                >
                  <div className={cn("relative flex h-36 items-center justify-center", g.accent)}>
                    <motion.span
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/80 text-slate-800 shadow-lift backdrop-blur"
                    >
                      {(() => { const GIcon = GAME_ICON[g.id as GameId]; return <GIcon className="h-8 w-8" />; })()}
                    </motion.span>
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-extrabold text-amber-600 shadow-soft">
                      <Trophy className="h-3 w-3" /> Kỷ lục: {best[g.id as GameId] > 0 ? best[g.id as GameId] : "—"}
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 text-[11px] font-bold text-white">
                      {HOW_TO[g.id as GameId].control}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-slate-900">{g.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{g.desc}</p>
                    <span className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand py-3 font-extrabold text-white transition-colors group-hover:bg-brand-700">
                      <Play className="h-4 w-4" /> Chơi ngay
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}

        {/* ===== ĐANG CHƠI ===== */}
        {view === "playing" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={runId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" onClick={() => setView("hub")}>
                    <ChevronLeft className="h-4 w-4" /> Game khác
                  </Button>
                  <h1 className="flex items-center gap-2 text-xl font-extrabold text-slate-900">
                    {(() => { const GIcon = GAME_ICON[activeGame]; return <GIcon className="h-5 w-5 text-brand" />; })()} {game.title}
                  </h1>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-sm font-extrabold text-amber-600">
                  <Trophy className="h-4 w-4" /> Kỷ lục: {best[activeGame] > 0 ? best[activeGame] : "—"}
                </span>
              </div>

              {/* Khu vực canvas + lớp phủ bắt đầu/kết quả */}
              <div className="relative rounded-3xl border border-slate-100 bg-white p-3 shadow-soft sm:p-4">
                <GameCanvas
                  key={runId}
                  gameId={activeGame}
                  mode={mode}
                  onGameOver={handleGameOver}
                />

                {/* Lớp phủ BẮT ĐẦU (chưa chơi) */}
                <AnimatePresence>
                  {!started && !result && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center rounded-3xl bg-slate-950/70 p-4 backdrop-blur-sm"
                    >
                      <StartScreen
                        game={game}
                        howto={HOW_TO[activeGame]}
                        mode={mode}
                        onModeChange={setMode}
                        onStart={() => setStarted(true)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Lớp phủ KẾT QUẢ */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center rounded-3xl bg-slate-950/80 p-4 backdrop-blur-sm"
                    >
                      <ResultScreen
                        score={result.score}
                        cleared={result.cleared}
                        best={best[activeGame]}
                        isBest={isBest}
                        onReplay={replay}
                        onHub={() => setView("hub")}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ghi chú + bảng xếp hạng */}
              {!result && (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <Keyboard className="h-3.5 w-3.5" />
                  {activeGame === "word-defender"
                    ? "Dùng bàn phím để gõ. Đảm bảo con trỏ không đang ở ô nhập nào khác."
                    : "Nhắp/touch các từ để xếp. Tốc độ quyết định điểm thưởng!"}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ===== Bảng xếp hạng (luôn hiện ở cuối) ===== */}
        <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
          <h3 className="mb-4 flex items-center gap-2 font-extrabold text-slate-900">
            <Crown className="h-5 w-5 text-accent" /> Bảng xếp hạng tuần
          </h3>
          <div className="flex flex-col gap-2">
            {board.length === 0 ? (
              <div className="rounded-2xl bg-slate-50 p-6 text-center text-sm font-semibold text-slate-400">
                Chưa có học sinh trong lớp nên chưa có bảng xếp hạng tuần.
              </div>
            ) : (
              board.map((row, i) => (
                <div
                  key={row.id}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl p-2.5",
                    row.me ? "bg-brand-50" : "bg-slate-50",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold",
                      i === 0 ? "bg-accent text-slate-900" : i === 1 ? "bg-slate-300 text-slate-700" : i === 2 ? "bg-amber-700 text-white" : "bg-slate-200 text-slate-500",
                    )}
                  >
                    {i < 3 ? <Medal className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  <span className={cn("flex-1 truncate text-sm font-bold", row.me ? "text-brand" : "text-slate-700")}>
                    {row.name} {row.me && "(Bạn)"}
                  </span>
                  <span className="text-sm font-extrabold text-slate-500">{row.xp}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

/* ---------------- Màn hình bắt đầu ---------------- */
function StartScreen({
  game,
  howto,
  mode,
  onModeChange,
  onStart,
}: {
  game: (typeof GAMES)[number];
  howto: { steps: string[]; control: string };
  mode: WordMode;
  onModeChange: (m: WordMode) => void;
  onStart: () => void;
}) {
  const isWordDefender = game.id === "word-defender";
  return (
    <div className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white/95 p-6 text-slate-900 shadow-lift no-scrollbar">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
          {(() => { const GIcon = GAME_ICON[game.id as GameId]; return <GIcon className="h-6 w-6" />; })()}
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand">Cách chơi</p>
          <h2 className="text-xl font-extrabold">{game.title}</h2>
        </div>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {howto.steps.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-slate-600">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-extrabold text-brand">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ul>

      {/* Chọn chế độ học (chỉ Word Defender) — để nhớ cả từ lẫn nghĩa */}
      {isWordDefender && (
        <div className="mt-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-slate-500">
            Chế độ học
          </p>
          <div className="flex flex-col gap-2">
            {MODES.map((m) => {
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => onModeChange(m.id)}
                  className={cn(
                    "flex items-start gap-3 rounded-2xl border-2 p-3 text-left transition-colors",
                    active ? "border-brand bg-brand-50" : "border-slate-200 hover:border-brand-100",
                  )}
                >
                  <span className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl", active ? "bg-brand text-white" : "bg-slate-100 text-slate-500")}>
                    <m.icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-slate-900">{m.title}</span>
                      {m.recommended && (
                        <span className="rounded-full bg-success px-2 py-0.5 text-[10px] font-extrabold text-white">
                          NÊN DÙNG
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-slate-500">{m.desc}</span>
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                      active ? "border-brand bg-brand text-white" : "border-slate-300",
                    )}
                  >
                    {active && <Check className="h-3 w-3" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500">
        <Keyboard className="h-4 w-4" /> Điều khiển: {howto.control}
      </div>

      <Button size="lg" className="mt-5 w-full" onClick={onStart}>
        <Sparkles className="h-4 w-4" /> Bắt đầu chơi
      </Button>
    </div>
  );
}

/* ---------------- Màn hình kết quả ---------------- */
function ResultScreen({
  score,
  cleared,
  best,
  isBest,
  onReplay,
  onHub,
}: {
  score: number;
  cleared: number;
  best: number;
  isBest: boolean;
  onReplay: () => void;
  onHub: () => void;
}) {
  const good = score >= 100;
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-lift">
      <Confetti fire={good} />

      <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200 }}>
        <Mascot mood={good ? "happy" : "think"} size={110} className="mx-auto" />
      </motion.div>

      <h2 className="mt-2 text-2xl font-extrabold text-slate-900">{good ? "Tuyệt vời! 🎉" : "Cố lên nhé! 💪"}</h2>

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
        className="mx-auto mt-3 w-fit"
      >
        <p className="text-5xl font-extrabold text-brand">{score}</p>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">điểm</p>
      </motion.div>

      {isBest && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-extrabold text-slate-900"
        >
          <Trophy className="h-3.5 w-3.5" /> Kỷ lục mới!
        </motion.div>
      )}

      <div className="mt-3 flex items-center justify-center gap-4 text-sm font-bold text-slate-500">
        <span className="flex items-center gap-1">
          <Check className="h-4 w-4 text-success" /> {cleared} lần
        </span>
        <span className="flex items-center gap-1">
          <TrendingUp className="h-4 w-4 text-amber-500" /> Kỷ lục: {best}
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button className="flex-1" onClick={onReplay}>
          <RotateCcw className="h-4 w-4" /> Chơi lại
        </Button>
        <Button variant="outline" className="flex-1" onClick={onHub}>
          <Gamepad2 className="h-4 w-4" /> Game khác
        </Button>
      </div>
    </div>
  );
}
