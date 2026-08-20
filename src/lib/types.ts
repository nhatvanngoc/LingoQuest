/* ============================================================
   LingoQuest — Kiểu dữ liệu dùng chung (mock trước, dễ thay API)
   ============================================================ */

export type Role = "student" | "teacher" | "pending";

export type AssignmentStatus = "ontrack" | "due" | "overdue" | "done";

/** Người dùng mô phỏng — 3 vai trò để test chuyển đổi giao diện */
export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatarColor: string;
  role: Role;
  className?: string;
  streak: number;
  xp: number;
  level: number;
}

/** Một từ vựng gắn với timestamp trong video */
export interface VocabItem {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  exampleVi: string;
  start: number; // giây
  image?: string; // minh hoạ
}

/** Bài học (Video + Deck flashcard + Bài kiểm tra) */
export interface Lesson {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  progress: number; // %
  durationLabel: string;
  vocab: VocabItem[];
}

export interface FlashCardData {
  id: string;
  front: string;
  phonetic: string;
  back: string;
  example: string;
  exampleVi: string;
  image?: string;
}

export interface Deck {
  id: string;
  title: string;
  total: number;
  learned: number;
  cards: FlashCardData[];
}

/** Trạng thái hạn nộp bài tập */
export interface Assignment {
  id: string;
  title: string;
  type: "exercise" | "deck";
  lessonTitle?: string;
  status: AssignmentStatus;
  dueLabel: string;
  progress: number;
}

/** Nhiệm vụ hằng ngày */
export interface DailyTask {
  id: string;
  label: string;
  current: number;
  target: number;
  reward: number; // XP
}

/** Câu trắc nghiệm */
export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explain: string;
}

export interface Badge {
  id: string;
  label: string;
  icon: string; // emoji
  earned: boolean;
  desc: string;
}

export interface LeaderRow {
  id: string;
  name: string;
  xp: number;
  me?: boolean;
}

export interface GameInfo {
  id: string;
  title: string;
  desc: string;
  emoji: string;
  best: number;
  accent: string; // tailwind class cho nền
}

/** Ô trạng thái trong ma trận tiến độ giáo viên */
export type MatrixStatus = "none" | "doing" | "submitted" | "graded";
