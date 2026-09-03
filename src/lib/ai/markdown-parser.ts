/* ============================================================
   markdown-parser.ts — Decode markdown do Groq tạo thành bài tập hoàn chỉnh
   Web script tự decode: parse # VOCAB / QUIZ / WRITING
   ============================================================ */

export interface ParsedVocab {
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  example_vi: string;
  start: number;
}

export interface ParsedQuiz {
  id: string;
  prompt: string;
  options: string[];
  answer: number; // 0-3
  explain: string;
}

export interface ParsedExercise {
  title: string;
  description: string;
  vocab: ParsedVocab[];
  quiz: ParsedQuiz[];
  writing: { prompt: string; hint: string } | null;
  rawMarkdown: string;
}

export function parseExerciseMarkdown(md: string): ParsedExercise {
  const raw = md.trim();
  const lines = raw.split("\n");

  // Title: first # 
  let title = "Bài tập mới";
  let description = "";
  const h1 = lines.find((l) => l.startsWith("# "));
  if (h1) title = h1.replace(/^#\s+/, "").trim();
  const quote = lines.find((l) => l.startsWith("> "));
  if (quote) description = quote.replace(/^>\s+/, "").trim();

  // VOCAB section
  const vocab: ParsedVocab[] = [];
  const vocabStart = lines.findIndex((l) => l.trim().toUpperCase().startsWith("## VOCAB"));
  const quizStart = lines.findIndex((l) => l.trim().toUpperCase().startsWith("## QUIZ"));
  const writingStart = lines.findIndex((l) => l.trim().toUpperCase().startsWith("## WRITING"));

  if (vocabStart !== -1) {
    const vocabEnd = quizStart !== -1 ? quizStart : writingStart !== -1 ? writingStart : lines.length;
    const vocabLines = lines.slice(vocabStart + 1, vocabEnd);
    for (const line of vocabLines) {
      if (!line.includes("|")) continue;
      if (line.includes("word") && line.includes("phonetic")) continue; // header
      if (line.trim().startsWith("|---")) continue;
      const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
      if (cols.length < 3) continue;
      // word | phonetic | meaning | example | example_vi | start
      vocab.push({
        word: cols[0] || "",
        phonetic: cols[1] || "",
        meaning: cols[2] || "",
        example: cols[3] || "",
        example_vi: cols[4] || "",
        start: parseInt(cols[5] || "0", 10) || 0,
      });
    }
  }

  // QUIZ section
  const quiz: ParsedQuiz[] = [];
  if (quizStart !== -1) {
    const quizEnd = writingStart !== -1 ? writingStart : lines.length;
    const quizLines = lines.slice(quizStart + 1, quizEnd);
    let current: Partial<ParsedQuiz> & { options: string[] } | null = null;
    let qIndex = 0;
    for (const rawLine of quizLines) {
      const line = rawLine.trim();
      if (line.startsWith("###")) {
        if (current && current.prompt) {
          quiz.push({
            id: `q${qIndex + 1}`,
            prompt: current.prompt,
            options: current.options.slice(0, 4),
            answer: current.answer ?? 0,
            explain: current.explain ?? "",
          });
          qIndex++;
        }
        current = { prompt: line.replace(/^###\s*(Q\d+:\s*)?/, "").trim(), options: [], answer: 0, explain: "" };
      } else if (line.match(/^-\s*[A-D]\./)) {
        if (!current) continue;
        const opt = line.replace(/^-\s*[A-D]\.\s*/, "").trim();
        current.options.push(opt);
      } else if (line.toLowerCase().startsWith("answer:")) {
        if (!current) continue;
        const ans = line.replace(/answer:\s*/i, "").trim().toUpperCase();
        const idx = "ABCD".indexOf(ans[0] ?? "A");
        current.answer = idx >= 0 ? idx : 0;
      } else if (line.toLowerCase().startsWith("explain:")) {
        if (!current) continue;
        current.explain = line.replace(/explain:\s*/i, "").trim();
      }
    }
    if (current && current.prompt) {
      quiz.push({
        id: `q${qIndex + 1}`,
        prompt: current.prompt,
        options: current.options.slice(0, 4),
        answer: current.answer ?? 0,
        explain: current.explain ?? "",
      });
    }
  }

  // WRITING
  let writing: ParsedExercise["writing"] = null;
  if (writingStart !== -1) {
    const wLines = lines.slice(writingStart + 1);
    let prompt = "";
    let hint = "";
    for (const l of wLines) {
      if (l.trim().toLowerCase().startsWith("prompt:")) prompt = l.replace(/prompt:\s*/i, "").trim();
      else if (l.trim().toLowerCase().startsWith("hint:")) hint = l.replace(/hint:\s*/i, "").trim();
    }
    if (prompt) writing = { prompt, hint };
  }

  return { title, description, vocab, quiz, writing, rawMarkdown: raw };
}

// Helper: validate markdown có đủ để tạo bài tập không
export function validateParsed(e: ParsedExercise): string | null {
  if (e.vocab.length < 3) return "VOCAB cần ít nhất 3 từ";
  if (e.quiz.length < 3) return "QUIZ cần ít nhất 3 câu";
  for (const q of e.quiz) {
    if (q.options.length !== 4) return `Câu "${q.prompt}" phải có 4 lựa chọn`;
    if (q.answer < 0 || q.answer > 3) return `Câu "${q.prompt}" đáp án không hợp lệ`;
  }
  return null;
}
