"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";

const MEDALS = ["🥇", "🥈", "🥉"];

interface LeaderboardItem {
  id: string;
  name: string;
  xp: number;
  me?: boolean;
}

export function MiniLeaderboard() {
  const { xp } = useApp();
  const [board, setBoard] = useState<LeaderboardItem[]>([]);

  useEffect(() => {
    let active = true;
    fetch("/api/classroom/leaderboard")
      .then((r) => r.json())
      .then((d) => {
        if (!active) return;
        if (d.ok && Array.isArray(d.rows)) {
          const mapped: LeaderboardItem[] = d.rows.map((r: any) => ({
            id: r.id,
            name: r.name,
            xp: r.xp || 0,
          }));
          mapped.sort((a, b) => b.xp - a.xp);
          setBoard(mapped);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);



  const top3 = board.slice(0, 3);
  const myRank = board.findIndex((item) => item.me) + 1;
  const me = board.find((item) => item.me);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:shadow-md hover:border-amber-300/50 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500 shadow-sm">
            <Trophy className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Bảng vàng lớp</h3>
            <p className="text-[11px] text-slate-400 font-semibold">Tuần này</p>
          </div>
        </div>
        <Link
          href="/progress"
          className="group flex items-center gap-1 text-xs font-bold text-brand hover:underline"
        >
          Chi tiết <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {board.length === 0 ? (
          <div className="py-4 text-center">
            <p className="text-xs font-semibold text-slate-400">
              Chưa có dữ liệu bảng vàng tuần này. Hãy học bài để nhận XP đầu tiên!
            </p>
          </div>
        ) : (
          top3.map((student, idx) => (
            <motion.div
              key={student.id}
              whileHover={{ scale: 1.01 }}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-colors",
                student.me
                  ? "border border-brand-200 bg-brand-50/70 font-bold text-brand-900 shadow-sm"
                  : "border border-gray-100 bg-slate-50/60 font-semibold text-slate-700"
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-sm">{MEDALS[idx] ?? `#${idx + 1}`}</span>
                <span className="truncate">{student.name}</span>
                {student.me && (
                  <span className="rounded bg-brand text-white px-1 text-[9px] font-extrabold">BẠN</span>
                )}
              </div>
              <span className="shrink-0 font-extrabold text-brand tabular-nums">
                {student.xp.toLocaleString()} XP
              </span>
            </motion.div>
          ))
        )}

        {/* If user is not in top 3, show user's rank */}
        {myRank > 3 && me && (
          <div className="mt-1 pt-2 border-t border-dashed border-gray-200">
            <div className="flex items-center justify-between rounded-xl border border-brand-200 bg-brand-50/70 px-3 py-2 text-xs font-bold text-brand-900 shadow-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-slate-400 font-extrabold text-xs">#{myRank}</span>
                <span className="truncate">{me.name}</span>
                <span className="rounded bg-brand text-white px-1 text-[9px] font-extrabold">BẠN</span>
              </div>
              <span className="shrink-0 font-extrabold text-brand tabular-nums">{me.xp.toLocaleString()} XP</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
