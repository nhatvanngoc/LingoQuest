import Phaser from "phaser";
import { COLORS, drawStarfield, GAME_H, GAME_W, roundedBg, txtStyle } from "./helpers";
import { GAME_SENTENCES, type GameSentence } from "@/lib/game/content";
import { playSfx } from "@/lib/game/sfx";

/* ============================================================
   SENTENCE BUILDER — Game xếp câu bắc cầu.
   - Cho nghĩa tiếng Việt + các từ đang bị xáo trộn.
   - Người chơi nhắp vào từ để xếp thành câu đúng (theo ô xây).
   - Nhắp lại từ trong ô xây để trả về vùng chọn.
   Có bộ đếm giờ mỗi câu, mạng, điểm, combo. Khi sai → hiện đáp án.
   ============================================================ */

interface Tile extends Phaser.GameObjects.Container {
  word: string;
  w: number;
}

export class SentenceBuilderScene extends Phaser.Scene {
  private rounds: GameSentence[] = [];
  private idx = 0;
  private remaining: string[] = [];
  private placed: string[] = [];

  private poolTiles: Tile[] = [];
  private barTiles: Tile[] = [];
  private hint?: Phaser.GameObjects.Text;

  private score = 0;
  private combo = 0;
  private lives = 3;
  private timeLeft = 20;
  private locked = false; // khoá input khi đang chờ chuyển câu
  private gameOver = false;

  // HUD
  private scoreText!: Phaser.GameObjects.Text;
  private progressText!: Phaser.GameObjects.Text;
  private livesText!: Phaser.GameObjects.Text;
  private comboText!: Phaser.GameObjects.Text;
  private viText!: Phaser.GameObjects.Text;
  private timerBar!: Phaser.GameObjects.Graphics;
  private barPanel!: Phaser.GameObjects.Graphics;
  private onGameOver?: (score: number, cleared: number) => void;

  constructor() {
    super("SentenceBuilder");
  }

  init(data: { onGameOver?: (score: number, cleared: number) => void }) {
    this.onGameOver = data.onGameOver;
  }

  create() {
    drawStarfield(this);
    this.setupHUD();
    this.rounds = Phaser.Utils.Array.Shuffle([...GAME_SENTENCES]).slice(0, 6);
    this.idx = 0;
    this.score = 0;
    this.combo = 0;
    this.lives = 3;
    this.gameOver = false;
    this.loadSentence();
  }

  setupHUD() {
    const bar = this.add.graphics();
    bar.fillStyle(COLORS.panel, 0.7);
    bar.fillRoundedRect(12, 12, GAME_W - 24, 44, 14);

    this.scoreText = this.add.text(30, 34, "⭐ 0", txtStyle("#fbbf24", "20px")).setOrigin(0, 0.5).setDepth(2);
    this.progressText = this.add.text(GAME_W / 2 - 50, 34, "Câu 1/6", txtStyle("#94a3b8", "18px")).setOrigin(0.5, 0.5).setDepth(2);
    this.comboText = this.add.text(GAME_W / 2 + 60, 34, "", txtStyle("#10b981", "18px")).setOrigin(0.5, 0.5).setDepth(2);
    this.livesText = this.add.text(GAME_W - 30, 34, "❤️❤️❤️", txtStyle("#ef4444", "20px")).setOrigin(1, 0.5).setDepth(2);
  }

  /* ---------------- Nạp một câu mới ---------------- */
  loadSentence() {
    this.timeLeft = 20;
    this.locked = false;

    // Nghĩa tiếng Việt (gợi ý)
    this.viText?.destroy();
    this.viText = this.add
      .text(GAME_W / 2, 92, `📝 “${this.rounds[this.idx].vi}”`, txtStyle("#fbbf24", "20px"))
      .setOrigin(0.5)
      .setDepth(2);

    this.progressText.setText(`Câu ${this.idx + 1}/${this.rounds.length}`);

    // Ô xây câu (bar)
    this.barPanel?.destroy();
    this.barPanel = this.add.graphics();
    this.barPanel.fillStyle(COLORS.panel, 0.6);
    this.barPanel.lineStyle(2, COLORS.brand, 0.5);
    this.barPanel.fillRoundedRect(40, 130, GAME_W - 80, 110, 18);
    this.barPanel.strokeRoundedRect(40, 130, GAME_W - 80, 110, 18);
    this.add
      .text(54, 142, "XẾP CÂU Ở ĐÂY", txtStyle("#64748b", "12px", false))
      .setOrigin(0, 0)
      .setDepth(2);

    // Thanh đếm giờ
    this.timerBar?.destroy();
    this.timerBar = this.add.graphics().setDepth(2);

    // Xáo trộn từ cho vùng chọn
    this.placed = [];
    this.remaining = Phaser.Utils.Array.Shuffle([...this.rounds[this.idx].words]);
    this.renderTiles();
  }

  /* ---------------- Vẽ lại các tile ---------------- */
  renderTiles() {
    this.poolTiles.forEach((t) => t.destroy());
    this.barTiles.forEach((t) => t.destroy());
    this.poolTiles = [];
    this.barTiles = [];
    this.hint?.destroy();
    this.hint = undefined;

    // Tile trong ô xây (placed) — màu xanh lá
    this.layoutRow(this.placed, 185, "bar");
    // Tile vùng chọn (remaining) — màu xanh dương
    this.layoutRow(this.remaining, 360, "pool");
  }

  /** Bố trí một hàng tile canh giữa, gắn sự kiện nhắp */
  layoutRow(words: string[], y: number, kind: "bar" | "pool") {
    const gap = 12;
    const tiles: Tile[] = words.map((word) => this.makeTile(word, kind));
    const total = tiles.reduce((s, t) => s + t.w, 0) + gap * Math.max(0, tiles.length - 1);
    let x = (GAME_W - total) / 2;
    for (const t of tiles) {
      t.x = x + t.w / 2;
      t.y = y;
      x += t.w + gap;
    }
    if (kind === "bar") this.barTiles = tiles;
    else this.poolTiles = tiles;

    if (tiles.length === 0 && kind === "bar") {
      this.hint = this.add
        .text(GAME_W / 2, 185, "Nhắp các từ bên dưới để xếp ↑", txtStyle("#475569", "15px", false))
        .setOrigin(0.5)
        .setDepth(3);
    }
  }

  /** Tạo một tile (container: nền bo góc + chữ + vùng click).
   *  Dùng một Rectangle trong suốt LÀ CON của container làm hit target:
   *  vùng nhận click luôn khít toàn bộ nút và tự bám theo khi nút dịch chuyển
   *  (không dùng custom Geom tĩnh như trước — đó là nguyên nhân click lạc). */
  makeTile(word: string, kind: "bar" | "pool"): Tile {
    const color = kind === "bar" ? COLORS.success : COLORS.brand;
    const text = this.add.text(0, 0, word, txtStyle("#ffffff", "22px")).setOrigin(0.5).setDepth(1);
    const w = text.width + 44;
    const h = 56;
    const bg = roundedBg(this, w, h, color, 1, 14).setDepth(0);

    const container = this.add.container(0, 0, [bg, text]) as Tile;
    container.word = word;
    container.w = w;
    container.setSize(w, h);
    container.setDepth(6);

    // Vùng click: Rectangle vô hình đặt làm con của container → di chuyển theo container
    const hit = this.add.rectangle(0, 0, w, h, 0xffffff, 0.001);
    container.add(hit);
    // setInteractive trên Rectangle dùng chính hình chữ nhật làm hit area, rất ổn định
    hit.setInteractive({ useHandCursor: true });

    // KHÔNG scale khi hover (tránh nút to ra khỏi vùng click & làm chữ kế bên "nhảy").
    // Chỉ phản hồi khi nhấn để bấm thấy rõ.
    hit.on("pointerdown", () => {
      if (this.locked || this.gameOver) return;
      this.tweens.add({ targets: container, scaleX: 0.92, scaleY: 0.92, duration: 70, yoyo: true });
      this.onTileClick(kind, word);
    });

    this.children.bringToTop(container);
    return container;
  }

  /* ---------------- Xử lý nhắp tile ---------------- */
  onTileClick(kind: "bar" | "pool", word: string) {
    if (this.locked || this.gameOver) return;
    if (kind === "pool") {
      // Đưa từ vùng chọn vào ô xây
      const i = this.remaining.indexOf(word);
      if (i !== -1) this.remaining.splice(i, 1);
      this.placed.push(word);
      playSfx("place");
    } else {
      // Trả từ ô xây về vùng chọn
      const i = this.placed.indexOf(word);
      if (i !== -1) this.placed.splice(i, 1);
      this.remaining.push(word);
      playSfx("place");
    }
    this.renderTiles();

    // Khi xếp hết tất cả từ → kiểm tra (nộp)
    if (this.remaining.length === 0) this.checkAnswer(true);
  }

  /* ---------------- Kiểm tra câu ----------------
   * submitted = true khi học sinh xếp đủ từ; false khi hết giờ (chưa xếp xong). */
  checkAnswer(submitted: boolean) {
    if (this.locked || this.gameOver) return;
    this.locked = true;
    const correct = this.rounds[this.idx].words;
    // Đúng khi: đã nộp, đủ số từ và đúng thứ tự từng chữ
    const ok = submitted && this.placed.length === correct.length && this.placed.every((w, i) => w === correct[i]);

    if (ok) {
      // Đúng: điểm thưởng + combo + chuyển câu
      this.combo += 1;
      const timeBonus = Math.round(this.timeLeft) * 3;
      const gain = 100 + timeBonus + (this.combo - 1) * 20;
      this.score += gain;
      this.scoreText.setText(`⭐ ${this.score}`);
      this.flashBar(COLORS.success);
      playSfx("correct");
      this.bumpCombo();
      this.barTiles.forEach((t, i) => {
        this.tweens.add({ targets: t, scaleX: 1.25, scaleY: 1.25, duration: 150, delay: i * 40, yoyo: true, ease: "back.out" });
      });

      this.time.delayedCall(900, () => this.nextRound(true));
    } else {
      // Sai: mất mạng, hiện đáp án đúng
      this.combo = 0;
      this.comboText.setText("");
      this.lives -= 1;
      this.livesText.setText("❤️".repeat(Math.max(0, this.lives)));
      this.flashBar(COLORS.danger);
      playSfx("wrong");
      this.cameras.main.shake(150, 0.008);
      this.revealCorrect();

      this.time.delayedCall(1400, () => (this.lives <= 0 ? this.endGame(false) : this.nextRound(false)));
    }
  }

  revealCorrect() {
    // Đặt lại ô xây theo thứ tự đúng (đỏ) để học sinh thấy
    this.placed = [...this.rounds[this.idx].words];
    this.remaining = [];
    this.renderTiles();
    this.barTiles.forEach((t) => {
      t.getAll().forEach((obj) => {
        if (obj instanceof Phaser.GameObjects.Text) obj.setColor("#fecaca");
      });
    });
  }

  bumpCombo() {
    if (this.combo >= 2) {
      this.comboText.setText(`x${this.combo} 🔥`);
      this.tweens.killTweensOf(this.comboText);
      this.comboText.setScale(1.3);
      this.tweens.add({ targets: this.comboText, scale: 1, duration: 200, ease: "back.out" });
    }
  }

  flashBar(color: number) {
    const f = this.add.rectangle(GAME_W / 2, 185, GAME_W - 80, 110, color, 0.35).setDepth(1);
    this.tweens.add({ targets: f, alpha: 0, duration: 400, onComplete: () => f.destroy() });
  }

  nextRound(wasCorrect: boolean) {
    if (this.idx >= this.rounds.length - 1) {
      // Đã hết câu → hoàn thành
      this.endGame(wasCorrect || this.lives > 0);
      return;
    }
    this.idx += 1;
    this.loadSentence();
  }

  /* ---------------- Kết thúc ---------------- */
  endGame(completed: boolean) {
    if (this.gameOver) return;
    this.gameOver = true;
    this.locked = true;
    playSfx(completed ? "win" : "lose");

    this.add.rectangle(GAME_W / 2, GAME_H / 2, GAME_W, GAME_H, 0x000000, 0.55).setDepth(20);
    roundedBg(this, 420, 230, COLORS.bg2, 0.98, 22).setPosition(GAME_W / 2, GAME_H / 2).setDepth(21);

    const title = completed ? "🏆 Hoàn thành!" : "💥 Hết máu!";
    const titleColor = completed ? "#fbbf24" : "#ef4444";
    this.add.text(GAME_W / 2, GAME_H / 2 - 70, title, txtStyle(titleColor, "34px")).setOrigin(0.5).setDepth(22);
    this.add.text(GAME_W / 2, GAME_H / 2 - 22, `Điểm: ${this.score}`, txtStyle("#fbbf24", "28px")).setOrigin(0.5).setDepth(22);
    this.add
      .text(GAME_W / 2, GAME_H / 2 + 18, `Xếp đúng ${this.score >= 100 ? Math.min(this.rounds.length, Math.ceil(this.score / 120)) : 0}/${this.rounds.length} câu`, txtStyle("#94a3b8", "15px", false))
      .setOrigin(0.5)
      .setDepth(22);
    this.add.text(GAME_W / 2, GAME_H / 2 + 62, "Nhấn “Chơi lại” bên dưới 👇", txtStyle("#3b82f6", "15px")).setOrigin(0.5).setDepth(22);

    const cleared = completed ? this.rounds.length : Math.max(0, this.idx);
    this.onGameOver?.(this.score, cleared);
  }

  /* ---------------- Vòng lặp: đếm giờ ---------------- */
  update(_time: number, delta: number) {
    if (this.gameOver || this.locked) return;
    this.timeLeft -= delta / 1000;

    // Vẽ thanh đếm giờ
    const pct = Math.max(0, this.timeLeft / 20);
    this.timerBar.clear();
    const bw = GAME_W - 80;
    this.timerBar.fillStyle(0x1e293b, 0.8);
    this.timerBar.fillRoundedRect(40, 250, bw, 10, 5);
    const c = pct > 0.5 ? COLORS.success : pct > 0.25 ? COLORS.accent : COLORS.danger;
    this.timerBar.fillStyle(c, 1);
    this.timerBar.fillRoundedRect(40, 250, bw * pct, 10, 5);

    if (this.timeLeft <= 0) {
      // Hết giờ → chưa xếp xong coi như sai
      this.timeLeft = 0;
      this.checkAnswer(false);
    }
  }
}
