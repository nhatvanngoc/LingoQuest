/* ============================================================
   Hiệu ứng âm thanh nhỏ bằng Web Audio API (không cần file mp3).
   Chỉ chạy phía trình duyệt. Dùng cho game: bắn, trúng, sai, thua.
   ============================================================ */

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  // Trình duyệt yêu cầu resume sau cử chỉ người dùng
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

type SfxName = "shoot" | "hit" | "correct" | "wrong" | "lose" | "win" | "place" | "level";

const PRESET: Record<SfxName, { freq: number; type: OscillatorType; dur: number; ramp?: number }> = {
  shoot: { freq: 660, type: "square", dur: 0.08, ramp: 220 },
  hit: { freq: 880, type: "triangle", dur: 0.12, ramp: 1320 },
  correct: { freq: 523, type: "sine", dur: 0.18, ramp: 1046 },
  wrong: { freq: 200, type: "sawtooth", dur: 0.2, ramp: 90 },
  lose: { freq: 300, type: "sawtooth", dur: 0.5, ramp: 80 },
  win: { freq: 523, type: "triangle", dur: 0.4, ramp: 1568 },
  place: { freq: 440, type: "square", dur: 0.06 },
  level: { freq: 660, type: "triangle", dur: 0.25, ramp: 1320 },
};

export function playSfx(name: SfxName) {
  const ac = getCtx();
  if (!ac) return;
  const p = PRESET[name];
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = p.type;
  osc.frequency.setValueAtTime(p.freq, ac.currentTime);
  if (p.ramp) osc.frequency.exponentialRampToValueAtTime(p.ramp, ac.currentTime + p.dur);
  gain.gain.setValueAtTime(0.0001, ac.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, ac.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + p.dur);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start();
  osc.stop(ac.currentTime + p.dur);
}

/** Đọc to từ tiếng Anh (phát âm) — dùng cho Word Defender khi tiêu diệt từ */
export function speakWord(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}
