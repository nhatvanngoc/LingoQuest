/* ============================================================
   prompt.ts — Prompt engineer preset cho Groq tạo bài tập LingoQuest
   Hỗ trợ Unified Assignment (Video + Flashcards + Trắc nghiệm + Điền từ + Tự luận)
   ============================================================ */

export const UNIFIED_SYSTEM_PROMPT = `Bạn là chuyên gia thiết kế bài học tiếng Anh cho học sinh Việt Nam lớp 10-12 (CEFR A2-B1).
Nhiệm vụ: Tạo 1 bài tập hoàn chỉnh 5 trong 1 theo định dạng JSON hợp lệ duy nhất.

CẤU TRÚC JSON BẮT BUỘC:
{
  "title": "Tiêu đề bài tập ngắn gọn, cuốn hút bằng tiếng Việt",
  "description": "Mô tả mục tiêu bài tập 1-2 câu tiếng Việt",
  "suggestedVideoQuery": "Từ khóa tìm kiếm video tiếng Anh trên YouTube",
  "vocabulary": [
    {
      "word": "từ tiếng Anh",
      "phonetic": "/phiên âm IPA/",
      "meaning": "nghĩa tiếng Việt",
      "example": "Câu ví dụ tiếng Anh",
      "exampleVi": "Dịch nghĩa ví dụ tiếng Việt"
    }
  ],
  "quizQuestions": [
    {
      "question": "Câu hỏi trắc nghiệm tiếng Anh",
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
      "answer": "A",
      "explanation": "Giải thích ngắn gọn bằng tiếng Việt"
    }
  ],
  "fillQuestions": [
    {
      "sentence": "Câu có vị trí khuyết [___] để học sinh điền từ",
      "answer": "từ chính xác cần điền",
      "hint": "Gợi ý dạng từ hoặc nghĩa",
      "explanation": "Giải thích ngữ pháp/ngữ cảnh tiếng Việt"
    }
  ],
  "writingPrompt": {
    "prompt": "Đề bài viết đoạn văn ngắn (80-120 từ) bằng tiếng Việt",
    "minWords": 80,
    "outline": ["Gợi ý ý 1", "Gợi ý ý 2", "Gợi ý ý 3"]
  }
}

QUY TẮC:
- Chỉ trả về duy nhất 1 JSON object hợp lệ, không bọc markdown fence, không kèm lời bình luận.
- vocabulary: 6 đến 8 từ tiêu biểu.
- quizQuestions: 3 đến 5 câu hỏi 4 lựa chọn (A, B, C, D).
- fillQuestions: 3 đến 5 câu hỏi điền từ vào vị trí [___].
- writingPrompt: 1 đề bài thực hành ứng dụng các từ vựng và cấu trúc trên.`;

export function buildUnifiedPrompt(input: string, level: string = "A2-B1"): string {
  return `CHỦ ĐỀ / YÊU CẦU: ${input}
TRÌNH ĐỘ MỤC TIÊU: ${level}
Hãy tạo gói bài tập hoàn chỉnh 5 trong 1 (Video, Vocabulary, Quiz trắc nghiệm, Điền từ, Viết tự luận) dưới dạng JSON chuẩn.`;
}

export function buildMoreVocabPrompt(topic: string, count: number = 4): string {
  return `CHỦ ĐỀ: ${topic}
Hãy gợi ý thêm ${count} từ vựng mới liên quan. Trả về JSON:
{
  "vocabulary": [
    { "word": "...", "phonetic": "/.../", "meaning": "...", "example": "...", "exampleVi": "..." }
  ]
}`;
}

export function buildMoreQuizPrompt(topic: string, vocab: string[], count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
CÁC TỪ VỰNG: ${vocab.join(", ")}
Hãy tạo ${count} câu hỏi trắc nghiệm 4 lựa chọn. Trả về JSON:
{
  "quizQuestions": [
    { "question": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "answer": "A", "explanation": "..." }
  ]
}`;
}

export function buildMoreFillPrompt(topic: string, vocab: string[], count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
CÁC TỪ VỰNG: ${vocab.join(", ")}
Hãy tạo ${count} câu hỏi điền từ khuyết [___]. Trả về JSON:
{
  "fillQuestions": [
    { "sentence": "...", "answer": "...", "hint": "...", "explanation": "..." }
  ]
}`;
}

export function buildWritingPrompt(topic: string): string {
  return `CHỦ ĐỀ: ${topic}
Hãy tạo 1 đề bài viết tự luận (80-120 từ). Trả về JSON:
{
  "writingPrompt": {
    "prompt": "...",
    "minWords": 80,
    "outline": ["...", "..."]
  }
}`;
}
