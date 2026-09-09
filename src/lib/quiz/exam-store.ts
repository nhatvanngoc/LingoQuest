import { ParsedQuestion, parseAzotaExamText, SAMPLE_AZOTA_EXAM } from "./azota-parser";

export interface ExamData {
  id: string;
  title: string;
  description: string;
  grade: string;
  subject: string;
  unitSlug?: string;
  durationMinutes: number; // 0 = unlimited
  pinCode: string;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  antiCheatEnabled: boolean;
  showAnswersAfterSubmit: boolean;
  questions: ParsedQuestion[];
  createdAt: string;
  authorName: string;
}

const STORAGE_KEY = "lingoquest_exams_db";

const DEFAULT_EXAMS: ExamData[] = [
  {
    id: "exam-u1-15m",
    title: "Đề kiểm tra 15 phút: Unit 1 - A Long and Healthy Life",
    description: "Đề kiểm tra trắc nghiệm từ vựng, collocations, phát âm IPA và thì hiện tại hoàn thành chuẩn SGK Tiếng Anh 11.",
    grade: "11",
    subject: "Tiếng Anh",
    unitSlug: "unit-1-a-long-and-healthy-life",
    durationMinutes: 15,
    pinCode: "839201",
    shuffleQuestions: true,
    shuffleOptions: true,
    antiCheatEnabled: true,
    showAnswersAfterSubmit: true,
    questions: parseAzotaExamText(SAMPLE_AZOTA_EXAM).questions,
    createdAt: new Date().toISOString(),
    authorName: "Thầy Nguyễn Hoàng (Tổ Ngoại Ngữ)",
  },
  {
    id: "exam-u2-45m",
    title: "Bài kiểm tra 1 tiết: Unit 2 - The Generation Gap",
    description: "Kiểm tra chuyên đề Khoảng cách thế hệ, động từ khuyết thiếu (modal verbs) và kỹ năng đọc hiểu.",
    grade: "11",
    subject: "Tiếng Anh",
    unitSlug: "unit-2-the-generation-gap",
    durationMinutes: 45,
    pinCode: "492105",
    shuffleQuestions: true,
    shuffleOptions: true,
    antiCheatEnabled: true,
    showAnswersAfterSubmit: true,
    questions: [
      {
        id: "q2-1",
        questionNumber: 1,
        questionText: "Parents and children often have conflicts because of the ________ gap.",
        options: [
          { key: "A", text: "generation" },
          { key: "B", text: "age" },
          { key: "C", text: "distance" },
          { key: "D", text: "time" },
        ],
        correctAnswer: "A",
        explanation: "'generation gap' là cụm từ cố định chỉ khoảng cách giữa các thế hệ.",
        difficulty: "easy",
      },
      {
        id: "q2-2",
        questionNumber: 2,
        questionText: "You ________ stay out past 10 PM. That is our strict family curfew.",
        options: [
          { key: "A", text: "mustn't" },
          { key: "B", text: "don't have to" },
          { key: "C", text: "should" },
          { key: "D", text: "can" },
        ],
        correctAnswer: "A",
        explanation: "Dùng 'mustn't' để diễn tả sự cấm đoán nghiêm khắc trong gia đình.",
        difficulty: "medium",
      },
      {
        id: "q2-3",
        questionNumber: 3,
        questionText: "An extended family usually consists of ________.",
        options: [
          { key: "A", text: "grandparents, parents, and children living together" },
          { key: "B", text: "only parents and children" },
          { key: "C", text: "friends and neighbors" },
          { key: "D", text: "classmates" },
        ],
        correctAnswer: "A",
        explanation: "'extended family' (gia đình nhiều thế hệ) bao gồm ông bà, bố mẹ và con cháu chung sống.",
        difficulty: "easy",
      },
    ],
    createdAt: new Date().toISOString(),
    authorName: "Cô Trần Thị Mai (THPT Chuyên)",
  },
];

export function getAllExams(): ExamData[] {
  if (typeof window === "undefined") return DEFAULT_EXAMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EXAMS));
      return DEFAULT_EXAMS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_EXAMS;
  } catch {
    return DEFAULT_EXAMS;
  }
}

export function getExamById(id: string): ExamData | undefined {
  const exams = getAllExams();
  return exams.find((e) => e.id === id || e.pinCode === id);
}

export function saveExam(exam: ExamData): void {
  if (typeof window === "undefined") return;
  const exams = getAllExams();
  const index = exams.findIndex((e) => e.id === exam.id);
  if (index >= 0) {
    exams[index] = exam;
  } else {
    exams.unshift(exam);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exams));
}

export function generatePinCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
