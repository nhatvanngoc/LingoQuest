/* ============================================================
   prompt.ts — Prompt engineering preset cho Groq tạo bài tập LingoQuest
   Hỗ trợ Unified Assignment đa tầng (Video + Flashcards + Trắc nghiệm + Điền từ + Đọc hiểu + Ghép câu + Tự luận)
   Phân cấp độ khó chuẩn CEFR: A1-A2, B1-B2, C1 / THPT Quốc Gia & IELTS
   ============================================================ */

export const UNIFIED_SYSTEM_PROMPT = `Bạn là chuyên gia sư phạm tiếng Anh hàng đầu, am hiểu sâu sắc chương trình GDPT Việt Nam, đề thi tốt nghiệp THPT Quốc Gia và chuẩn quốc tế CEFR (A1 -> C1) & IELTS.
Nhiệm vụ: Tạo 1 bài tập hoàn chỉnh, chuẩn hóa sư phạm theo cấp độ được yêu cầu dưới định dạng JSON duy nhất.

CÁC CẤP ĐỘ ĐỘ KHÓ (CEFR & BENCHMARKS):
1. "A1-A2" (Foundation / Căn bản - Mất gốc):
   - Từ vựng thông dụng hằng ngày, phát âm rõ ràng, nghĩa tiếng Việt gần gũi.
   - Ngữ pháp: Hiện tại đơn, Quá khứ đơn, câu đơn, từ nối cơ bản (and, but, because).
   - Câu hỏi có gợi ý rõ ràng, giải thích tỉ mỉ.

2. "B1-B2" (Intermediate / Giao tiếp & Học thuật Trung cấp):
   - Từ vựng: Collocations, Phrasal verbs, từ vựng học đường & công việc.
   - Ngữ pháp: Mệnh đề quan hệ, Hiện tại hoàn thành, Câu điều kiện (1, 2), Bị động.
   - Đọc hiểu: Ngữ cảnh đời sống thực tế, câu hỏi kiểm tra ý chính và từ đồng nghĩa.

3. "C1" hoặc "THPTQG" (Advanced / Chuyên sâu & Phân hóa cao):
   - Từ vựng: C1/C2, Academic Word List, Idioms, Collocations nâng cao.
   - Ngữ pháp: Đảo ngữ (Inversion), Thể giả định (Subjunctive), Rút gọn mệnh đề, Cleft sentences, Câu điều kiện hỗn hợp.
   - Bẫy thi cử: Các phương án nhiễu (distractors) tinh vi, bài đọc học thuật phân tích tư duy phản biện (inference/tone).
   - Đề bài viết nghị luận xã hội hoặc phân tích học thuật (150-250 từ).

CẤU TRÚC JSON BẮT BUỘC:
{
  "title": "Tiêu đề bài tập ngắn gọn, cuốn hút bằng tiếng Việt",
  "description": "Mô tả mục tiêu sư phạm 1-2 câu tiếng Việt (nêu rõ cấp độ)",
  "difficultyLevel": "A1-A2 | B1-B2 | C1 / THPTQG",
  "suggestedVideoQuery": "Từ khóa tìm kiếm video tiếng Anh chất lượng trên YouTube",
  "vocabulary": [
    {
      "word": "từ tiếng Anh chuẩn",
      "phonetic": "/phiên âm IPA/",
      "meaning": "nghĩa tiếng Việt chính xác",
      "example": "Câu ví dụ tiếng Anh tự nhiên",
      "exampleVi": "Dịch nghĩa ví dụ tiếng Việt"
    }
  ],
  "quizQuestions": [
    {
      "question": "Câu hỏi trắc nghiệm tiếng Anh (phù hợp độ khó)",
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
      "answer": "A",
      "explanation": "Giải thích chi tiết ngữ pháp/ngữ cảnh và lý do các câu khác sai bằng tiếng Việt"
    }
  ],
  "fillQuestions": [
    {
      "sentence": "Câu có vị trí khuyết [___] để học sinh điền từ",
      "answer": "từ chính xác cần điền",
      "hint": "Gợi ý dạng từ, nghĩa hoặc thì ngữ pháp",
      "explanation": "Giải thích ngữ pháp ngữ cảnh tiếng Việt"
    }
  ],
  "readingPassage": {
    "title": "Tiêu đề bài đọc tiếng Anh",
    "passage": "Đoạn văn tiếng Anh (A1: 80-120 từ, B1-B2: 150-220 từ, C1/THPTQG: 250-350 từ)",
    "levelTag": "A1-A2 Basic | B1-B2 Reading | THPTQG Academic",
    "questions": [
      {
        "question": "Câu hỏi đọc hiểu tiếng Anh",
        "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
        "answer": "A",
        "explanation": "Dẫn chứng từ đoạn văn và giải thích bằng tiếng Việt"
      }
    ]
  },
  "syntaxRearrange": [
    {
      "promptVi": "Câu tiếng Việt yêu cầu diễn đạt",
      "words": ["danh", "sách", "từ", "tiếng", "Anh", "bị", "xáo", "trộn"],
      "correctSentence": "Câu tiếng Anh hoàn chỉnh chuẩn xác.",
      "explanation": "Giải thích trật tự từ và cấu trúc ngữ pháp."
    }
  ],
  "writingPrompt": {
    "prompt": "Đề bài viết thực hành bằng tiếng Việt",
    "minWords": 80,
    "outline": ["Gợi ý ý 1", "Gợi ý ý 2", "Gợi ý ý 3"]
  }
}

QUY TẮC BẮT BUỘC:
- Trả về DUY NHẤT 1 JSON object hợp lệ, tuyệt đối không bọc markdown block, không giải thích ngoài JSON.
- vocabulary: 5 đến 7 từ.
- quizQuestions: 3 đến 5 câu.
- fillQuestions: 3 đến 5 câu.
- readingPassage: 1 đoạn văn kèm 2 đến 3 câu hỏi đọc hiểu.
- syntaxRearrange: 2 đến 3 câu luyện sắp xếp cấu trúc.
- writingPrompt: 1 đề bài phù hợp cấp độ (A1: 60-80 từ, B1-B2: 100-140 từ, C1: 160-220 từ).`;

export function buildUnifiedPrompt(input: string, level: string = "A2-B1"): string {
  return `CHỦ ĐỀ / YÊU CẦU: ${input}
TRÌNH ĐỘ MỤC TIÊU: ${level}
Hãy thiết kế gói bài tập toàn diện chuẩn hóa (Video query, Từ vựng, Trắc nghiệm, Điền từ khuyết, Bài đọc hiểu Reading Comprehension, Luyện cấu trúc câu Syntax Rearrange, và Viết tự luận) dưới dạng JSON chuẩn.`;
}

export function buildReadingPrompt(topic: string, level: string = "B1-B2"): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level}
Hãy tạo 1 đoạn văn đọc hiểu (Reading Passage) kèm 3 câu hỏi đọc hiểu trắc nghiệm (có dẫn chứng giải thích). Trả về JSON:
{
  "readingPassage": {
    "title": "...",
    "passage": "...",
    "levelTag": "${level}",
    "questions": [
      { "question": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "answer": "A", "explanation": "..." }
    ]
  }
}`;
}

export function buildSyntaxPrompt(topic: string, level: string = "B1-B2", count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level}
Hãy tạo ${count} câu luyện cấu trúc (sắp xếp từ bị xáo trộn). Trả về JSON:
{
  "syntaxRearrange": [
    {
      "promptVi": "Dịch nghĩa câu tiếng Việt",
      "words": ["word1", "word2", "word3", "..."],
      "correctSentence": "Full correct English sentence.",
      "explanation": "Giải thích ngữ pháp"
    }
  ]
}`;
}

export function buildMoreVocabPrompt(topic: string, level: string = "A2-B1", count: number = 4): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level}
Hãy gợi ý thêm ${count} từ vựng mới liên quan. Trả về JSON:
{
  "vocabulary": [
    { "word": "...", "phonetic": "/.../", "meaning": "...", "example": "...", "exampleVi": "..." }
  ]
}`;
}

export function buildMoreQuizPrompt(topic: string, vocab: string[], level: string = "A2-B1", count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level}
CÁC TỪ VỰNG: ${vocab.join(", ")}
Hãy tạo ${count} câu hỏi trắc nghiệm 4 lựa chọn có tính phân hóa phù hợp trình độ ${level}. Trả về JSON:
{
  "quizQuestions": [
    { "question": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "answer": "A", "explanation": "..." }
  ]
}`;
}

export function buildMoreFillPrompt(topic: string, vocab: string[], level: string = "A2-B1", count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level}
CÁC TỪ VỰNG: ${vocab.join(", ")}
Hãy tạo ${count} câu hỏi điền từ khuyết [___]. Trả về JSON:
{
  "fillQuestions": [
    { "sentence": "...", "answer": "...", "hint": "...", "explanation": "..." }
  ]
}`;
}

export function buildWritingPrompt(topic: string, level: string = "A2-B1"): string {
  const minWords = level.includes("C1") || level.includes("THPT") ? 150 : level.includes("B") ? 100 : 70;
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level}
Hãy tạo 1 đề bài viết tự luận (khoảng ${minWords} từ) kích thích tư duy người học. Trả về JSON:
{
  "writingPrompt": {
    "prompt": "...",
    "minWords": ${minWords},
    "outline": ["...", "..."]
  }
}`;
}
