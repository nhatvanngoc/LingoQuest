"use client";

import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { WordDefenderScene, type WordMode } from "./scenes/WordDefenderScene";
import { SentenceBuilderScene } from "./scenes/SentenceBuilderScene";
import { GAME_H, GAME_W } from "./scenes/helpers";

export type { WordMode };

/* ============================================================
   PhaserGame — Máy chủ Phaser chọn scene theo gameId.
   - "word-defender"   → game gõ từ bắn quái
   - "sentence-builder"→ game xếp câu
   Chạy phía client (bọc bằng next/dynamic ssr:false ở GameCanvas).
   Khi kết thúc gọi onGameOver(score, cleared).
   ============================================================ */

export type GameId = "word-defender" | "sentence-builder";

export default function PhaserGame({
  gameId,
  mode = "meaning",
  onGameOver,
}: {
  gameId: GameId;
  mode?: WordMode;
  onGameOver?: (score: number, cleared: number) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  // Giữ callback mới nhất tránh tạo lại game khi parent re-render.
  const cbRef = useRef(onGameOver);
  cbRef.current = onGameOver;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const sceneKey = gameId === "sentence-builder" ? "SentenceBuilder" : "WordDefender";
    const SceneClass = gameId === "sentence-builder" ? SentenceBuilderScene : WordDefenderScene;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: host,
      width: GAME_W,
      height: GAME_H,
      backgroundColor: "#0b1220",
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
      scene: [], // đăng ký thủ công để truyền data init an toàn
    });

    // Đăng ký scene (không tự khởi động), rồi start với callback.
    game.scene.add(sceneKey, SceneClass, false);
    game.scene.start(sceneKey, {
      mode,
      onGameOver: (score: number, cleared: number) => cbRef.current?.(score, cleared),
    });

    return () => {
      game.destroy(true);
    };
  }, [gameId, mode]);

  return <div ref={hostRef} className="aspect-[8/5] w-full" />;
}
