/* ============================================================
   Nội dung học dùng cho Game — từ vựng + câu mẫu có nghĩa Việt.
   Dễ thay bằng API thật (theo trình độ học sinh) sau.
   ============================================================ */

export interface GameWord {
  en: string;
  vi: string;
}

/** Ngân hàng từ cho Word Defender — chia độ khó theo độ dài từ */
export const GAME_WORDS: GameWord[] = [
  // Dễ (3–4 chữ cái)
  { en: "cat", vi: "mèo" },
  { en: "dog", vi: "chó" },
  { en: "run", vi: "chạy" },
  { en: "eat", vi: "ăn" },
  { en: "book", vi: "sách" },
  { en: "rain", vi: "mưa" },
  { en: "sun", vi: "mặt trời" },
  { en: "moon", vi: "mặt trăng" },
  { en: "tree", vi: "cây" },
  { en: "fish", vi: "cá" },
  { en: "bird", vi: "chim" },
  { en: "star", vi: "ngôi sao" },
  { en: "blue", vi: "xanh dương" },
  { en: "cold", vi: "lạnh" },
  // Trung bình (5–6 chữ cái)
  { en: "happy", vi: "vui vẻ" },
  { en: "water", vi: "nước" },
  { en: "house", vi: "ngôi nhà" },
  { en: "music", vi: "âm nhạc" },
  { en: "friend", vi: "bạn bè" },
  { en: "school", vi: "trường học" },
  { en: "green", vi: "xanh lá" },
  { en: "sleep", vi: "ngủ" },
  { en: "cloud", vi: "đám mây" },
  { en: "river", vi: "dòng sông" },
  { en: "summer", vi: "mùa hè" },
  { en: "winter", vi: "mùa đông" },
  { en: "yellow", vi: "vàng" },
  { en: "orange", vi: "màu cam" },
  { en: "purple", vi: "màu tím" },
  // Khó (7+ chữ cái)
  { en: "morning", vi: "buổi sáng" },
  { en: "evening", vi: "buổi tối" },
  { en: "weather", vi: "thời tiết" },
  { en: "holiday", vi: "kỳ nghỉ" },
  { en: "kitchen", vi: "nhà bếp" },
  { en: "garden", vi: "khu vườn" },
  { en: "teacher", vi: "giáo viên" },
  { en: "student", vi: "học sinh" },
  { en: "pencil", vi: "bút chì" },
  { en: "window", vi: "cửa sổ" },
  { en: "delicious", vi: "ngon miệng" },
  { en: "relaxing", vi: "thư giãn" },
  { en: "adventure", vi: "phiêu lưu" },
];

/** Lọc từ theo khoảng độ dài (dùng để tăng dần độ khó theo màn) */
export function wordsByDifficulty(min: number, max: number): GameWord[] {
  return GAME_WORDS.filter((w) => w.en.length >= min && w.en.length <= max);
}

export interface GameSentence {
  words: string[]; // thứ tự đúng
  vi: string;
}

/** Ngân hàng câu cho Sentence Builder */
export const GAME_SENTENCES: GameSentence[] = [
  { words: ["I", "love", "learning", "English"], vi: "Tôi thích học tiếng Anh." },
  { words: ["She", "reads", "a", "book", "every", "night"], vi: "Cô ấy đọc sách mỗi đêm." },
  { words: ["We", "play", "football", "after", "school"], vi: "Chúng tôi chơi bóng đá sau giờ học." },
  { words: ["The", "cat", "is", "sleeping", "on", "the", "sofa"], vi: "Con mèo đang ngủ trên ghế sofa." },
  { words: ["My", "mother", "cooks", "delicious", "food"], vi: "Mẹ tôi nấu đồ ăn ngon." },
  { words: ["They", "went", "to", "the", "park", "yesterday"], vi: "Họ đã đến công viên hôm qua." },
  { words: ["He", "wants", "to", "be", "a", "doctor"], vi: "Anh ấy muốn làm bác sĩ." },
  { words: ["It", "is", "a", "beautiful", "sunny", "day"], vi: "Đó là một ngày nắng đẹp." },
];
