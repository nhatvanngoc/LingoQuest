/* ============================================================
   prompt.ts — Prompt engineering preset cho Groq tạo bài tập LingoQuest
   Hỗ trợ Unified Assignment đa tầng (Video + Flashcards + Trắc nghiệm + Điền từ + Đọc hiểu + Ghép câu + Tự luận)
   Thiết kế chuyên sâu cho Học sinh THPT Lớp 10, 11, 12 (Chuẩn GDPT mới & Đề thi THPT Quốc Gia)
   Phân cấp độ khó: B1 (Lớp 10) -> B2 (Lớp 11-12) -> B2+/C1 (Phân hóa THPTQG 8.5+ & IELTS 6.5+)
   ============================================================ */

export const UNIFIED_SYSTEM_PROMPT = `Bạn là chuyên gia sư phạm tiếng Anh hàng đầu, am hiểu sâu sắc chương trình GDPT mới (bộ sách Global Success, Friends Global, Bright...) cho học sinh THPT Lớp 10, 11, 12 và cấu trúc ma trận đề thi Tốt nghiệp THPT Quốc Gia.
Nhiệm vụ: Tạo 1 bài tập hoàn chỉnh, chuẩn hóa sư phạm bám sát kiến thức THPT theo cấp độ được yêu cầu dưới định dạng JSON duy nhất.

CÁC CẤP ĐỘ ĐỘ KHÓ (DÀNH CHO HỌC SINH THPT LỚP 10 - 12):
1. "B1" (Lớp 10 · Nền tảng THPT):
   - Đối tượng: Học sinh lớp 10 củng cố nền tảng, bám sát các chủ điểm SGK Global Success 10 (Family Life, Humans & The Environment, Music, For A Better Community, Inventions, Gender Equality, Viet Nam & International Organisations, New Ways to Learn, Protecting the Environment, Ecotourism).
   - Ngữ pháp: Quá khứ đơn & Tiếp diễn, Hiện tại hoàn thành, Câu bị động (Passive voice), Động từ khuyết thiếu (Modals), Mệnh đề quan hệ xác định, Từ nối liên kết câu cơ bản.
   - Độ dài bài đọc: 120-160 từ; đề bài tự luận: 80-100 từ.

2. "B2" (Lớp 11-12 · Trọng tâm THPT):
   - Đối tượng: Học sinh lớp 11 và 12 ôn tập kiến thức trọng tâm (SGK 11-12: A Long and Healthy Life, The Generation Gap, Cities of the Future, ASEAN & Viet Nam, Global Warming, Preserving Our Heritage, Education Options, The World of Work, Career Paths, Artificial Intelligence).
   - Ngữ pháp & Cấu trúc: Phrasal verbs phổ biến, Collocations thực tế, Mệnh đề phân từ (Participle clauses), Câu điều kiện loại 1, 2, 3 và hỗn hợp, Danh động từ & Động từ nguyên mẫu, So sánh kép (The more... the more...).
   - Độ dài bài đọc: 180-240 từ; đề bài tự luận: 120-150 từ.

3. "B2+ / C1 Phân hóa" (Luyện thi THPTQG 8.5+ & IELTS 6.5+):
   - LƯU Ý SƯ PHẠM CỐT LÕI: Dành cho học sinh chinh phục điểm 9+ và 10 trong kỳ thi tốt nghiệp THPTQG. "Không hẳn là C1 hàn lâm thuần túy hay triết học xa rời thực tế". Tuyệt đối KHÔNG ra các từ vựng C1 cổ ngữ, từ ngữ lý thuyết chuyên sâu không liên quan đến thi cử.
   - Trọng tâm: Thành ngữ (Idioms) thông dụng thường gặp trong đề thi (take something for granted, burn the midnight oil, cost an arm and a leg, hit the books...), Collocations phân hóa cao (bear in mind, strike a balance, make allowance for...), Đảo ngữ (Inversion with negative adverbs: Not only..., Hardly/Scarcely...), Câu chẻ (Cleft sentences: It is... that...), Thể giả định (Subjunctive), Bẫy câu hỏi đọc hiểu suy luận hàm ý (Inference / Author's attitude).
   - Độ dài bài đọc: 260-320 từ; đề bài tự luận: 150-200 từ.

CẤU TRÚC JSON BẮT BUỘC:
{
  "title": "Tiêu đề bài tập ngắn gọn, cuốn hút bằng tiếng Việt (phù hợp học sinh THPT)",
  "description": "Mô tả mục tiêu sư phạm 1-2 câu tiếng Việt (nêu rõ cấp độ và chủ điểm)",
  "difficultyLevel": "B1 | B2 | B2+ / C1 Phân hóa",
  "suggestedVideoQuery": "Từ khóa tìm kiếm video tiếng Anh chất lượng trên YouTube/Drive",
  "vocabulary": [
    {
      "word": "từ hoặc cụm từ tiếng Anh chuẩn",
      "phonetic": "/phiên âm IPA/",
      "meaning": "nghĩa tiếng Việt chính xác bám sát ngữ cảnh",
      "example": "Câu ví dụ tiếng Anh tự nhiên phù hợp lứa tuổi học sinh",
      "exampleVi": "Dịch nghĩa ví dụ tiếng Việt"
    }
  ],
  "quizQuestions": [
    {
      "question": "Câu hỏi trắc nghiệm tiếng Anh (phù hợp độ khó và ma trận đề THPT)",
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
    "passage": "Đoạn văn tiếng Anh (B1: 120-160 từ, B2: 180-240 từ, B2+/C1: 260-320 từ)",
    "levelTag": "B1 Foundation | B2 Intermediate | B2+/C1 Advanced",
    "questions": [
      {
        "question": "Câu hỏi đọc hiểu tiếng Anh",
        "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
        "answer": "A",
        "explanation": "Dẫn chứng cụ thể từ đoạn văn và giải thích bằng tiếng Việt"
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
- vocabulary: 5 đến 7 từ/cụm từ bám sát chủ điểm.
- quizQuestions: 3 đến 5 câu có tính phân loại rõ ràng.
- fillQuestions: 3 đến 5 câu.
- readingPassage: 1 đoạn văn kèm 2 đến 3 câu hỏi đọc hiểu (có câu hỏi suy luận ý chính/từ vựng).
- syntaxRearrange: 2 đến 3 câu luyện sắp xếp cấu trúc trọng tâm (đảo ngữ, bị động, mệnh đề phân từ...).
- writingPrompt: 1 đề bài phù hợp cấp độ (B1: 80-100 từ, B2: 120-150 từ, B2+/C1: 150-200 từ).`;

export function buildUnifiedPrompt(input: string, level: string = "B1"): string {
  return `CHỦ ĐỀ / CHỦ ĐIỂM BÀI HỌC: ${input}
TRÌNH ĐỘ MỤC TIÊU: ${level} (Dành cho học sinh THPT Lớp 10, 11, 12 - không dùng C1 hàn lâm thuần túy)
Hãy thiết kế gói bài tập toàn diện chuẩn hóa (Video query, Từ vựng, Trắc nghiệm, Điền từ khuyết, Bài đọc hiểu Reading Comprehension, Luyện cấu trúc câu Syntax Rearrange, và Viết tự luận) dưới dạng JSON chuẩn.`;
}

export function buildReadingPrompt(topic: string, level: string = "B1"): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level} (Học sinh THPT Lớp 10-12)
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

export function buildSyntaxPrompt(topic: string, level: string = "B1", count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level} (Học sinh THPT Lớp 10-12)
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

export function buildMoreVocabPrompt(topic: string, level: string = "B1", count: number = 4): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level} (Học sinh THPT Lớp 10-12)
Hãy gợi ý thêm ${count} từ vựng mới liên quan. Trả về JSON:
{
  "vocabulary": [
    { "word": "...", "phonetic": "/.../", "meaning": "...", "example": "...", "exampleVi": "..." }
  ]
}`;
}

export function buildMoreQuizPrompt(topic: string, vocab: string[], level: string = "B1", count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level} (Học sinh THPT Lớp 10-12)
CÁC TỪ VỰNG: ${vocab.join(", ")}
Hãy tạo ${count} câu hỏi trắc nghiệm 4 lựa chọn có tính phân hóa phù hợp trình độ ${level}. Trả về JSON:
{
  "quizQuestions": [
    { "question": "...", "options": ["A. ...", "B. ...", "C. ...", "D. ..."], "answer": "A", "explanation": "..." }
  ]
}`;
}

export function buildMoreFillPrompt(topic: string, vocab: string[], level: string = "B1", count: number = 3): string {
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level} (Học sinh THPT Lớp 10-12)
CÁC TỪ VỰNG: ${vocab.join(", ")}
Hãy tạo ${count} câu hỏi điền từ khuyết [___]. Trả về JSON:
{
  "fillQuestions": [
    { "sentence": "...", "answer": "...", "hint": "...", "explanation": "..." }
  ]
}`;
}

export function buildWritingPrompt(topic: string, level: string = "B1"): string {
  const minWords = level.includes("C1") || level.includes("THPT") ? 150 : level.includes("B2") ? 120 : 80;
  return `CHỦ ĐỀ: ${topic}
TRÌNH ĐỘ: ${level} (Học sinh THPT Lớp 10-12)
Hãy tạo 1 đề bài viết tự luận (khoảng ${minWords} từ) kích thích tư duy người học bám sát chương trình THPT. Trả về JSON:
{
  "writingPrompt": {
    "prompt": "...",
    "minWords": ${minWords},
    "outline": ["...", "..."]
  }
}`;
}
