"use client";

import { Play } from "lucide-react";
import type { VocabItem } from "@/lib/types";
import { cn } from "@/lib/utils";

/* ============================================================
   VideoTimestampList — Danh sách từ vựng kèm timestamp.
   Bấm vào từ để tua video (gọi onSeek với số giây).
   ============================================================ */

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoTimestampList({
  vocab,
  activeId,
  onSeek,
  horizontal,
}: {
  vocab: VocabItem[];
  activeId?: string;
  onSeek: (item: VocabItem) => void;
  horizontal?: boolean;
}) {
  if (vocab.length === 0) {
    return (
      <div className="rounded-2xl bg-slate-50 p-6 text-center text-sm font-semibold text-slate-400">
        Bài học này chưa có từ vựng.
      </div>
    );
  }

  return (
    <ul className={cn("flex gap-2", horizontal ? "flex-wrap" : "flex-col")}>
      {vocab.map((v) => {
        const active = v.id === activeId;
        return (
          <li key={v.id}>
            <button
              onClick={() => onSeek(v)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-bold transition-colors",
                active
                  ? "border-brand bg-brand-50 text-brand"
                  : "border-slate-100 bg-white text-slate-700 hover:border-brand-100 hover:bg-slate-50",
                !horizontal && "w-full",
        horizontal && "shrink-0",
              )}
            >
              {horizontal ? (
                <>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      active ? "bg-brand text-white" : "bg-slate-100 text-slate-500",
                    )}
                  >
                    {fmt(v.start)}
                  </span>
                  <span className="whitespace-nowrap text-slate-900">{v.word}</span>
                </>
              ) : (
                <>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      active ? "bg-brand text-white" : "bg-slate-100 text-slate-500",
                    )}
                  >
                    {fmt(v.start)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-slate-900">{v.word}</span>
                    <span className="block truncate text-xs text-slate-400">{v.meaning}</span>
                  </span>
                  <Play
                    className={cn("h-4 w-4 shrink-0", active ? "text-brand" : "text-slate-300")}
                    fill="currentColor"
                  />
                </>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
