import Phaser from "phaser";
import { COLORS, drawStarfield, GAME_H, GAME_W, roundedBg, txtStyle } from "./helpers";
import { wordsByDifficulty, type GameWord } from "@/lib/game/content";
import { playSfx, speakWord } from "@/lib/game/sfx";

/* ============================================================
   WORD DEFENDER — Game gõ từ bắn quái (kiểu ZType) + GHI NHỚ NGHĨA.

   3 chế độ học (mode):
   - "meaning": Thấy NGHĨA tiếng Việt → gõ TỪ tiếng Anh (active recall —
     mạnh nhất để nhớ cả từ lẫn nghĩa). Hiện số chấm = độ dài từ làm gợi ý.
   - "both"   : Thấy cả từ + nghĩa → gõ lại từ (ôn tập nhẹ, ghi nhớ qua lặp).
   - "word"   : Thấy từ tiếng Anh → gõ lại (luyện chính tả thuần tuý).

   Khi tiêu diệt từ → hiện cặp "word = nghĩa" + phát âm để củng cố liên kết.
   Hết máu → gọi callback onGameOver(score, cleared).
   ============================================================ */

export type WordMode = "word" | "meaning" | "both";

interface FallingWord {
  id: number;
  word: GameWord;
  typedLen: number;
  x: number;
  y: number;
  speed: number;
  container: Phaser.GameObjects.Container;
  meaningText: Phaser.GameObjects.Text;
  typedText: Phaser.GameObjects.Text;
  restText: Phaser.GameObjects.Text;
  bg: Phaser.GameObjects.Graphics;
}

let wordId = 1;

export class WordDefenderScene extends Phaser.Scene {
  private words: FallingWord[] = [];
  private buffer = ""; // các ký tự đã gõ cho mục tiêu hiện tại
  private target: FallingWord | null = null;

  private mode: WordMode = "meaning";

  private score = 0;
  private combo = 0;
  private maxCombo = 0;
  private cleared = 0;
  private lives = 3;
  private level = 1;

  // HUD
  private scoreText!: Phaser.GameObjects.Text;
  private comboText!: Phaser.GameObjects.Text;
  private levelText!: Phaser.GameObjects.Text;
  private livesText!: Phaser.GameObjects.Text;
  private bufferText!: Phaser.GameObjects.Text;

  private ship!: Phaser.GameObjects.Container;
  private laser!: Phaser.GameObjects.Graphics;
  private spawnTimer!: Phaser.Time.TimerEvent;
  private flash!: Phaser.GameObjects.Rectangle;
  private gameOver = false;
  private onGameOver?: (score: number, cleared: number) => void;

  constructor() {
    super("WordDefender");
  }

  init(data: { onGameOver?: (score: number, cleared: number) => void; mode?: WordMode }) {
    this.onGameOver = data.onGameOver;
    this.mode = data.mode ?? "meaning";
    // reset trạng thái (khi restart lại scene)
    this.words = [];
    this.buffer = "";
    this.target = null;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.cleared = 0;
    this.lives = 3;
    this.level = 1;
    this.gameOver = false;
  }

  create() {
    drawStarfield(this);
    this.setupHUD();
    this.setupShip();
    this.laser = this.add.graphics().setDepth(4).setAlpha(0);

    // Vùng "vạch phòng thủ" ở đáy
    const line = this.add.graphics();
    line.lineStyle(2, COLORS.danger, 0.4);
    line.lineBetween(0, GAME_H - 90, GAME_W, GAME_H - 90);
    line.fillStyle(COLORS.danger, 0.08);
    line.fillRect(0, GAME_H - 90, GAME_W, 90);

    // Chớp đỏ khi mất máu
    this.flash = this.add.rectangle(GAME_W / 2, GAME_H / 2, GAME_W, GAME_H, COLORS.danger, 0).setDepth(10);

    this.input.keyboard?.on("keydown", (ev: KeyboardEvent) => this.onKey(ev.key));

    this.startSpawning();
  }

  /* ---------------- HUD ---------------- */
  setupHUD() {
    const bar = this.add.graphics();
    bar.fillStyle(COLORS.panel, 0.7);
    bar.fillRoundedRect(12, 12, GAME_W - 24, 44, 14);

    this.scoreText = this.add.text(30, 34, "⭐ 0", txtStyle("#fbbf24", "20px")).setOrigin(0, 0.5).setDepth(2);
    this.levelText = this.add.text(GAME_W / 2, 34, "Màn 1", txtStyle("#94a3b8", "18px")).setOrigin(0.5, 0.5).setDepth(2);
    this.comboText = this.add.text(GAME_W / 2 + 70, 34, "", txtStyle("#10b981", "18px")).setOrigin(0.5, 0.5).setDepth(2);
    this.livesText = this.add.text(GAME_W - 30, 34, "❤️❤️❤️", txtStyle("#ef4444", "20px")).setOrigin(1, 0.5).setDepth(2);

    // Ô hiển thị chữ đang gõ
    this.bufferText = this.add
      .text(GAME_W / 2, GAME_H - 40, this.bufferHint(), txtStyle("#64748b", "16px", false))
      .setOrigin(0.5, 0.5)
      .setDepth(2);
  }

  /** Câu gợi ý thay đổi theo chế độ */
  private bufferHint() {
    if (this.mode === "meaning") return "Đọc nghĩa → nhớ từ tiếng Anh → gõ chữ cái đầu để nhắm 🎯";
    if (this.mode === "both") return "Gõ chữ cái đầu của từ tiếng Anh để nhắm 🎯";
    return "Gõ chữ cái đầu của từ để nhắm →";
  }

  /* ---------------- Tàu người chơi ---------------- */
  setupShip() {
    const g = this.add.graphics();
    g.fillStyle(COLORS.brand, 1);
    g.beginPath();
    g.moveTo(0, -26);
    g.lineTo(20, 16);
    g.lineTo(-20, 16);
    g.closePath();
    g.fillPath();
    g.fillStyle(COLORS.brandLight, 1);
    g.fillCircle(0, -4, 7);

    const glow = this.add.graphics();
    glow.fillStyle(COLORS.brand, 0.18);
    glow.fillCircle(0, 0, 34);

    this.ship = this.add.container(GAME_W / 2, GAME_H - 60, [glow, g]).setDepth(3);
  }

  /* ---------------- Sinh quái ---------------- */
  startSpawning() {
    this.spawnTimer?.remove();
    // Tốc độ sinh chậm hơn, giảm dần theo màn nhưng có sàn cao để không quá đông
    const delay = Math.max(1100, 2400 - this.level * 90);
    this.spawnTimer = this.time.addEvent({
      delay,
      callback: () => this.spawnWord(),
      loop: true,
    });
  }

  /** Chọn hoành độ x không bị đè lên các từ đang rơi gần đỉnh (chống overlap) */
  private pickSpawnX(): number {
    const margin = 95;
    const minGap = 150; // khoảng cách tối thiểu tới các từ còn ở phía trên
    for (let tries = 0; tries < 10; tries++) {
      const x = Phaser.Math.Between(margin, GAME_W - margin);
      const tooClose = this.words.some((w) => w.y < 130 && Math.abs(w.x - x) < minGap);
      if (!tooClose) return x;
    }
    return Phaser.Math.Between(margin, GAME_W - margin);
  }

  spawnWord() {
    if (this.gameOver) return;
    // Chỉ giữ tối đa 5 từ trên màn hình để tránh rối
    if (this.words.length >= 5) return;
    // Chọn từ theo độ khó của màn
    const pool =
      this.level <= 2
        ? wordsByDifficulty(3, 5)
        : this.level <= 4
          ? wordsByDifficulty(3, 6)
          : wordsByDifficulty(3, 8);
    const pick = Phaser.Utils.Array.GetRandom(pool);

    // Nghĩa tiếng Việt (hiện ở chế độ meaning / both)
    const meaningText = this.add
      .text(0, 0, pick.vi, txtStyle("#fde68a", this.mode === "meaning" ? "20px" : "13px"))
      .setOrigin(0.5, 0.5)
      .setDepth(1)
      .setVisible(this.mode !== "word");

    const typedText = this.add.text(0, 0, "", txtStyle("#10b981", "24px")).setOrigin(0, 0.5).setDepth(1);
    const restText = this.add.text(0, 0, pick.en, txtStyle("#cbd5e1", "24px")).setOrigin(0, 0.5).setDepth(1);
    const bg = roundedBg(this, 80, 46, COLORS.panel, 0.94).setDepth(0);
    const container = this.add.container(this.pickSpawnX(), -50, [bg, meaningText, restText, typedText]);

    const fw: FallingWord = {
      id: wordId++,
      word: pick,
      typedLen: 0,
      x: container.x,
      y: container.y,
      // Tốc độ rơi chậm hơn, sai số nhẹ cho tự nhiên
      speed: 20 + this.level * 4 + Phaser.Math.Between(0, 6),
      container,
      meaningText,
      typedText,
      restText,
      bg,
    };
    this.words.push(fw);
    this.layoutWord(fw);
  }

  /** Sắp lại vị trí text & nền theo số ký tự đã gõ VÀ chế độ học.
   *  Box co dãn vừa khít nội dung, chỉ dư một chút padding cho dễ nhìn. */
  layoutWord(fw: FallingWord) {
    const en = fw.word.en;
    const typed = en.slice(0, fw.typedLen);
    const restChars = en.slice(fw.typedLen);
    const showMeaning = this.mode !== "word";

    // Nghĩa (nếu có) luôn hiện đầy đủ
    fw.meaningText.setText(showMeaning ? fw.word.vi : "");
    // Phần đã gõ (xanh lá)
    fw.typedText.setText(typed);
    // Phần chưa gõ: meaning → dấu chấm gợi ý độ dài (không cách); else hiện chữ
    fw.restText.setText(this.mode === "meaning" ? restChars.replace(/./g, "•") : restChars);

    const tw = fw.typedText.width;
    const rw = fw.restText.width;
    const wordW = tw + rw;
    const meaningW = showMeaning ? fw.meaningText.width : 0;

    // Padding nhỏ: box chỉ to hơn nội dung một chút
    const padX = 18;
    const contentW = Math.max(wordW, meaningW);
    const bgW = contentW + padX * 2;
    const bgH = showMeaning ? 64 : 46;

    fw.bg.clear();
    fw.bg.fillStyle(fw === this.target ? COLORS.brand : COLORS.panel, 0.95);
    fw.bg.fillRoundedRect(-bgW / 2, -bgH / 2, bgW, bgH, 14);
    if (fw === this.target) {
      fw.bg.lineStyle(2, COLORS.accent, 1);
      fw.bg.strokeRoundedRect(-bgW / 2, -bgH / 2, bgW, bgH, 14);
    }

    // Căn giữa khối chữ: hàng từ ở giữa (1 hàng) hoặc dưới (khi có nghĩa phía trên)
    const rowY = showMeaning ? 15 : 0;
    fw.typedText.setPosition(-wordW / 2, rowY);
    fw.restText.setPosition(-wordW / 2 + tw, rowY);
    fw.meaningText.setPosition(0, showMeaning ? -15 : 0);

    fw.restText.setColor(fw === this.target ? "#e2e8f0" : "#94a3b8");
  }

  /* ---------------- Xử lý phím ---------------- */
  onKey(key: string) {
    if (this.gameOver) return;
    if (key === "Backspace") {
      if (this.buffer.length <= 1) {
        this.buffer = "";
        this.target = null;
      } else {
        this.buffer = this.buffer.slice(0, -1);
      }
      if (this.target) {
        this.target.typedLen = this.buffer.length;
        this.layoutWord(this.target);
      }
      this.syncBuffer();
      return;
    }
    if (!/^[a-zA-Z]$/.test(key)) return;
    const ch = key.toLowerCase();

    if (this.target && this.words.includes(this.target)) {
      // Đã khoá mục tiêu → chỉ nhận ký tự đúng tiếp theo
      const expected = this.target.word.en;
      if (expected.startsWith(this.buffer + ch)) {
        this.buffer += ch;
        this.target.typedLen = this.buffer.length;
        this.layoutWord(this.target);
        playSfx("shoot");
        if (this.buffer === expected) {
          this.destroyWord(this.target);
        }
      } else {
        // Gõ sai → rung nhẹ (không phạt máu)
        this.cameras.main.shake(60, 0.002);
        playSfx("wrong");
      }
      this.syncBuffer();
      return;
    }

    // Chưa khoá mục tiêu → tìm từ bắt đầu bằng ký tự này (ưu tiên thấp nhất)
    const cand = this.words
      .filter((w) => w.word.en.startsWith(ch))
      .sort((a, b) => b.y - a.y)[0];
    if (cand) {
      this.target = cand;
      this.buffer = ch;
      cand.typedLen = 1;
      this.layoutWord(cand);
      playSfx("shoot");
    }
    this.syncBuffer();
  }

  syncBuffer() {
    if (!this.target || this.buffer.length === 0) {
      this.bufferText.setText(this.words.length ? this.bufferHint() : "Chờ quái xuất hiện…");
      this.bufferText.setColor("#64748b");
    } else {
      this.bufferText.setText(`🎯 Đang bắn: ${this.buffer.toUpperCase()}`);
      this.bufferText.setColor("#3b82f6");
    }
  }

  /* ---------------- Tiêu diệt từ ---------------- */
  destroyWord(fw: FallingWord) {
    const idx = this.words.indexOf(fw);
    if (idx === -1) return;

    // Hiệu ứng tia laser từ tàu tới quái
    this.fireLaser(fw.x, fw.y);

    // Vụ nổ
    const boom = this.add.circle(fw.x, fw.y, 8, COLORS.accent, 1).setDepth(5);
    this.tweens.add({
      targets: boom,
      scale: 4,
      alpha: 0,
      duration: 350,
      ease: "power2",
      onComplete: () => boom.destroy(),
    });

    // Cặp "word = nghĩa" bay lên — củng cố liên kết từ–nghĩa
    this.popPairing(fw);

    // Điểm + combo
    this.combo += 1;
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    const gain = 10 + Math.min(this.combo - 1, 9) * 2 + fw.word.en.length + (this.mode === "meaning" ? 5 : 0);
    this.score += gain;
    this.cleared += 1;
    this.scoreText.setText(`⭐ ${this.score}`);

    // Hiện combo
    if (this.combo >= 2) {
      this.comboText.setText(`x${this.combo} 🔥`);
      this.tweens.killTweensOf(this.comboText);
      this.comboText.setScale(1.3);
      this.tweens.add({ targets: this.comboText, scale: 1, duration: 200, ease: "back.out" });
    }

    // Lên màn mới mỗi 8 từ
    if (this.cleared % 8 === 0) {
      this.levelUp();
    }

    playSfx("hit");
    speakWord(fw.word.en);

    // Dọn dẹp
    fw.container.destroy();
    this.words.splice(idx, 1);
    if (this.target === fw) {
      this.target = null;
      this.buffer = "";
    }
    this.syncBuffer();
  }

  /** Hiện cặp từ–nghĩa bay lên khi tiêu diệt (ghi nhớ qua phản hồi tức thì) */
  popPairing(fw: FallingWord) {
    const t = this.add
      .text(fw.x, fw.y, `✓ ${fw.word.en}  =  ${fw.word.vi}`, txtStyle("#10b981", "16px"))
      .setOrigin(0.5)
      .setDepth(6);
    this.tweens.add({
      targets: t,
      y: fw.y - 46,
      alpha: 0,
      duration: 950,
      ease: "power1",
      onComplete: () => t.destroy(),
    });
  }

  fireLaser(toX: number, toY: number) {
    this.laser.clear();
    this.laser.lineStyle(3, COLORS.accent, 1);
    this.laser.lineBetween(this.ship.x, this.ship.y - 10, toX, toY);
    this.laser.setAlpha(1);
    this.tweens.add({ targets: this.laser, alpha: 0, duration: 160 });
  }

  levelUp() {
    this.level += 1;
    this.levelText.setText(`Màn ${this.level}`);
    playSfx("level");
    // thông báo
    const t = this.add
      .text(GAME_W / 2, GAME_H / 2 - 40, `MÀN ${this.level}!`, txtStyle("#fbbf24", "40px"))
      .setOrigin(0.5)
      .setDepth(8)
      .setAlpha(0);
    this.tweens.add({
      targets: t,
      alpha: 1,
      scale: { from: 0.6, to: 1 },
      duration: 250,
      yoyo: true,
      hold: 500,
      onComplete: () => t.destroy(),
    });
    this.startSpawning(); // tăng tốc độ sinh quái
  }

  /* ---------------- Mất máu ---------------- */
  loseLife(fw: FallingWord) {
    this.lives -= 1;
    this.combo = 0;
    this.comboText.setText("");
    this.livesText.setText("❤️".repeat(Math.max(0, this.lives)));
    playSfx("lose");
    this.cameras.main.shake(150, 0.01);
    this.flash.setAlpha(0.35);
    this.tweens.add({ targets: this.flash, alpha: 0, duration: 300 });

    // Ở chế độ "meaning": khi quái thoát, tiết lộ từ–nghĩa để học sinh khắc sâu
    if (this.mode === "meaning") {
      const miss = this.add
        .text(fw.x, Math.min(fw.y, GAME_H - 110), `💥 ${fw.word.en} = ${fw.word.vi}`, txtStyle("#ef4444", "16px"))
        .setOrigin(0.5)
        .setDepth(6);
      this.tweens.add({ targets: miss, alpha: 0, duration: 1400, onComplete: () => miss.destroy() });
      speakWord(fw.word.en);
    }

    const idx = this.words.indexOf(fw);
    if (idx !== -1) {
      fw.container.destroy();
      this.words.splice(idx, 1);
    }
    if (this.target === fw) {
      this.target = null;
      this.buffer = "";
    }
    this.syncBuffer();

    if (this.lives <= 0) this.endGame();
  }

  /* ---------------- Kết thúc ---------------- */
  endGame() {
    this.gameOver = true;
    this.spawnTimer?.remove();
    playSfx("lose");
    this.words.forEach((w) => w.container.destroy());
    this.words = [];

    this.add.rectangle(GAME_W / 2, GAME_H / 2, GAME_W, GAME_H, 0x000000, 0.55).setDepth(20);
    roundedBg(this, 420, 230, COLORS.bg2, 0.98, 22).setPosition(GAME_W / 2, GAME_H / 2).setDepth(21);
    this.add.text(GAME_W / 2, GAME_H / 2 - 70, "💥 Hết máu!", txtStyle("#ef4444", "34px")).setOrigin(0.5).setDepth(22);
    this.add
      .text(GAME_W / 2, GAME_H / 2 - 22, `Điểm: ${this.score}`, txtStyle("#fbbf24", "28px"))
      .setOrigin(0.5)
      .setDepth(22);
    this.add
      .text(GAME_W / 2, GAME_H / 2 + 18, `Tiêu diệt ${this.cleared} từ · Combo cao nhất x${this.maxCombo}`, txtStyle("#94a3b8", "15px", false))
      .setOrigin(0.5)
      .setDepth(22);
    this.add
      .text(GAME_W / 2, GAME_H / 2 + 62, "Nhấn “Chơi lại” bên dưới 👇", txtStyle("#3b82f6", "15px"))
      .setOrigin(0.5)
      .setDepth(22);

    this.onGameOver?.(this.score, this.cleared);
  }

  /* ---------------- Vòng lặp ---------------- */
  update(_time: number, delta: number) {
    if (this.gameOver) return;
    const dt = delta / 1000;
    for (const fw of [...this.words]) {
      fw.y += fw.speed * dt;
      fw.container.y = fw.y;
      // Dao động nhẹ theo trục x cho sinh động
      fw.container.x = fw.x + Math.sin((fw.y + fw.id * 40) * 0.02) * 18;
      if (fw.y >= GAME_H - 90) {
        this.loseLife(fw);
      }
    }

    // Tàu hướng về mục tiêu
    if (this.target && this.words.includes(this.target)) {
      const ang = Phaser.Math.Angle.Between(this.ship.x, this.ship.y, this.target.x, this.target.y);
      this.ship.rotation = Phaser.Math.Angle.RotateTo(this.ship.rotation, ang, 0.2);
    } else {
      this.ship.rotation = Phaser.Math.Angle.RotateTo(this.ship.rotation, 0, 0.1);
    }
  }
}
