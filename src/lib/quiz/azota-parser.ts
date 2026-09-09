export interface ParsedQuestion {
  id: string;
  questionNumber: number;
  questionText: string;
  options: {
    key: "A" | "B" | "C" | "D";
    text: string;
  }[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation?: string;
  difficulty?: "easy" | "medium" | "hard" | "expert";
}

export interface ParseResult {
  title: string;
  questions: ParsedQuestion[];
  totalQuestions: number;
  errors: string[];
}

/**
 * Smart Azota-style text parser.
 * Automatically parses raw exam text containing questions like:
 * Câu 1: ...
 * A. ...
 * B. ...
 * C. ...
 * D. ...
 * Đáp án: A
 * Lời giải: ...
 */
export function parseAzotaExamText(rawText: string): ParseResult {
  const lines = rawText.split(/\r?\n/);
  const questions: ParsedQuestion[] = [];
  const errors: string[] = [];

  let currentTitle = "Đề kiểm tra trắc nghiệm tiếng Anh";
  let currentQuestion: Partial<ParsedQuestion> | null = null;
  let currentOptionKey: "A" | "B" | "C" | "D" | null = null;
  let qCounter = 0;

  // Question start pattern: "Câu 1:", "Câu 1.", "1.", "1:", "Question 1:"
  const questionRegex = /^(?:Câu|Question|\b)\s*(\d+)[\.\:\-\)]\s*(.*)/i;
  // Option start pattern: "A.", "A)", "A:", "(A)"
  const optionRegex = /^[(\[]?([A-D])[)\]\.\:]\s*(.*)/i;
  // Answer start pattern: "Đáp án: A", "ĐA: A", "Key: A", "Answer: A"
  const answerRegex = /^(?:Đáp án|ĐA|Key|Answer)[\s\:\-\=]+([A-D])/i;
  // Explanation start pattern: "Lời giải:", "Giải thích:", "Explanation:"
  const explanationRegex = /^(?:Lời giải|Giải thích|Explanation)[\s\:\-\=]+(.*)/i;

  const finalizeQuestion = () => {
    if (currentQuestion && currentQuestion.questionText) {
      // Validate options
      const opts = currentQuestion.options || [];
      if (opts.length < 2) {
        errors.push(`Câu ${currentQuestion.questionNumber || qCounter}: Chưa đủ ít nhất 2 đáp án lựa chọn.`);
      }

      // Default correct answer to A if not specified
      if (!currentQuestion.correctAnswer) {
        currentQuestion.correctAnswer = "A";
      }

      questions.push({
        id: `q-${Date.now()}-${questions.length + 1}`,
        questionNumber: currentQuestion.questionNumber || questions.length + 1,
        questionText: currentQuestion.questionText.trim(),
        options: opts,
        correctAnswer: currentQuestion.correctAnswer,
        explanation: currentQuestion.explanation?.trim() || "Chưa có lời giải chi tiết.",
        difficulty: currentQuestion.difficulty || "medium",
      });
    }
    currentQuestion = null;
    currentOptionKey = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Check if line is title
    if (i === 0 && !questionRegex.test(line) && line.length < 100) {
      currentTitle = line;
      continue;
    }

    // Check Question Start
    const qMatch = line.match(questionRegex);
    if (qMatch && !optionRegex.test(line)) {
      finalizeQuestion();
      qCounter++;
      const qNum = parseInt(qMatch[1], 10);
      const qText = qMatch[2] || "";
      currentQuestion = {
        questionNumber: isNaN(qNum) ? qCounter : qNum,
        questionText: qText,
        options: [],
        correctAnswer: undefined,
        explanation: "",
      };
      continue;
    }

    // Check Option
    const optMatch = line.match(optionRegex);
    if (optMatch && currentQuestion) {
      const optKey = optMatch[1].toUpperCase() as "A" | "B" | "C" | "D";
      const optText = optMatch[2] || "";
      currentOptionKey = optKey;
      currentQuestion.options = currentQuestion.options || [];

      // Avoid duplicates
      const existingIdx = currentQuestion.options.findIndex((o) => o.key === optKey);
      if (existingIdx >= 0) {
        currentQuestion.options[existingIdx].text = optText;
      } else {
        currentQuestion.options.push({ key: optKey, text: optText });
      }
      continue;
    }

    // Check Answer
    const ansMatch = line.match(answerRegex);
    if (ansMatch && currentQuestion) {
      currentQuestion.correctAnswer = ansMatch[1].toUpperCase() as "A" | "B" | "C" | "D";
      continue;
    }

    // Check Explanation
    const expMatch = line.match(explanationRegex);
    if (expMatch && currentQuestion) {
      currentQuestion.explanation = expMatch[1] || "";
      continue;
    }

    // Append to current option or question text
    if (currentQuestion) {
      if (currentOptionKey && currentQuestion.options) {
        const opt = currentQuestion.options.find((o) => o.key === currentOptionKey);
        if (opt) {
          opt.text += " " + line;
        }
      } else if (currentQuestion.explanation) {
        currentQuestion.explanation += " " + line;
      } else {
        currentQuestion.questionText += " " + line;
      }
    }
  }

  finalizeQuestion();

  return {
    title: currentTitle,
    questions,
    totalQuestions: questions.length,
    errors,
  };
}

export const SAMPLE_AZOTA_EXAM = `Đề thi kiểm tra 15 phút Tiếng Anh 11 - Unit 1: A Long and Healthy Life

Câu 1: Regular exercise and a balanced diet help people maintain physical ________ and live longer.
A. fitness
B. fit
C. fitting
D. fitted
Đáp án: A
Lời giải: Sau tính từ 'physical' cần một danh từ. 'fitness' (thể lực, sự khỏe khoắn) là danh từ phù hợp nhất.

Câu 2: Many bacteria have developed resistance ________ common antibiotics.
A. to
B. with
C. at
D. for
Đáp án: A
Lời giải: Cấu trúc: 'resistance to something' nghĩa là sự kháng lại cái gì.

Câu 3: Sharing household chores helps ________ family bonds and creates mutual understanding.
A. strengthen
B. weaken
C. destroy
D. break
Đáp án: A
Lời giải: 'strengthen family bonds' là cụm từ cố định mang nghĩa thắt chặt tình cảm gia đình.

Câu 4: She ________ as a volunteer doctor for over five years.
A. has worked
B. worked
C. is working
D. had worked
Đáp án: A
Lời giải: Dấu hiệu 'for over five years' diễn tả hành động bắt đầu trong quá khứ kéo dài đến hiện tại nên dùng thì hiện tại hoàn thành.

Câu 5: Which word has the underlined part pronounced differently?
A. muscle
B. nutrient
C. suffer
D. cut
Đáp án: B
Lời giải: 'nutrient' phát âm là /juː/, các từ còn lại phát âm là /ʌ/.`;
