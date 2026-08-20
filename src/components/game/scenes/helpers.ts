import Phaser from "phaser";

/* ============================================================
   Tiện ích vẽ dùng chung cho các scene Phaser.
   ============================================================ */

export const GAME_W = 800;
export const GAME_H = 500;

export const COLORS = {
  bg: 0x0b1220,
  bg2: 0x111c33,
  panel: 0x16233f,
  brand: 0x2563eb,
  brandLight: 0x3b82f6,
  success: 0x10b981,
  accent: 0xfbbf24,
  danger: 0xef4444,
  white: 0xf8fafc,
  slate: 0x94a3b8,
  slateDark: 0x64748b,
};

const FONT = "Nunito, Arial, sans-serif";

/** Vẽ nền có lưới chấm nhẹ kiểu không gian */
export function drawStarfield(scene: Phaser.Scene) {
  const g = scene.add.graphics();
  for (let i = 0; i < 70; i++) {
    const x = Phaser.Math.Between(0, GAME_W);
    const y = Phaser.Math.Between(0, GAME_H);
    const r = Phaser.Math.FloatBetween(0.6, 1.8);
    const a = Phaser.Math.FloatBetween(0.15, 0.5);
    g.fillStyle(0xffffff, a);
    g.fillCircle(x, y, r);
  }
  // Lớp sao nhấp nháy
  const tw = scene.add.graphics();
  for (let i = 0; i < 14; i++) {
    const x = Phaser.Math.Between(0, GAME_W);
    const y = Phaser.Math.Between(0, GAME_H);
    const s = tw.fillStyle(0xfbbf24, 0.8).fillCircle(x, y, 1.6);
    scene.tweens.add({
      targets: s,
      alpha: { from: 0.2, to: 0.9 },
      duration: Phaser.Math.Between(800, 1800),
      yoyo: true,
      repeat: -1,
      delay: i * 120,
    });
  }
}

/** Tạo một tile bo góc (Graphics) kích thước cho trước */
export function roundedBg(
  scene: Phaser.Scene,
  w: number,
  h: number,
  fill: number,
  alpha = 1,
  radius = 14,
): Phaser.GameObjects.Graphics {
  const g = scene.add.graphics();
  g.fillStyle(fill, alpha);
  g.fillRoundedRect(-w / 2, -h / 2, w, h, radius);
  return g;
}

/** Style chữ chuẩn */
export function txtStyle(color = "#f8fafc", size = "20px", bold = true) {
  return { fontFamily: FONT, fontSize: size, color, fontStyle: bold ? "bold" : "normal" };
}

export { FONT };
