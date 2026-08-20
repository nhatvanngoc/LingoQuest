"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import type { GameId, WordMode } from "./PhaserGame";

/* Bọc PhaserGame bằng dynamic ssr:false — tránh import Phaser trên server. */
const PhaserGame = dynamic(() => import("./PhaserGame"), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-[8/5] w-full items-center justify-center rounded-2xl bg-slate-900 text-slate-400">
      <Loader2 className="h-6 w-6 animate-spin" /> <span className="ml-2 font-bold">Đang nạp game…</span>
    </div>
  ),
});

export function GameCanvas({
  gameId,
  mode,
  onGameOver,
}: {
  gameId: GameId;
  mode?: WordMode;
  onGameOver?: (score: number, cleared: number) => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <PhaserGame gameId={gameId} mode={mode} onGameOver={onGameOver} />
    </div>
  );
}
