import { callStructuredLLM } from "../llm";
import type { WritingTask, LexicalProfile, GrammarProfile } from "../types";

const WRITING_SYSTEM_PROMPT = `You are LingoQuest Writing Specialist.
Your task is to generate a realistic guided paragraph writing task (80-120 words) for Vietnamese high school students, incorporating the unit's vocabulary and grammar, plus a standard 4-criterion analytic rubric (Total: 10.0 points).

RUBRIC CRITERIA (each max 2.5 points):
1. TASK_ACHIEVEMENT (2.5 pts): Answers all parts of the prompt, relevant ideas.
2. LEXICAL_RESOURCE (2.5 pts): Accurate and varied use of unit vocabulary and collocations.
3. GRAMMAR (2.5 pts): Accurate use of target grammar structures and complex clauses.
4. COHERENCE (2.5 pts): Clear organization, logical sequence, and transition signals.

Return valid JSON:
{
  "promptEn": "Write a short paragraph (80-120 words) proposing 2-3 practical ways your class can adopt a greener lifestyle at school.",
  "supportVi": "Gợi ý: Nêu rõ các hành động cụ thể (như phân loại rác, mang bình nước cá nhân, tắt điện), sử dụng các từ vựng đã học và cấu trúc câu bị động hoặc câu điều kiện.",
  "minWords": 80,
  "maxWords": 120,
  "requiredVocabularyIds": ["v-1", "v-2", "v-3"],
  "requiredGrammarIds": ["g-1"],
  "planningQuestions": [
    "What is the main environmental challenge at your school?",
    "Which practical steps can each student take daily?",
    "What positive changes will occur if everyone joins in?"
  ],
  "rubric": [
    {
      "criterion": "TASK_ACHIEVEMENT",
      "maxScore": 2.5,
      "bands": [
        { "score": 2.5, "descriptorVi": "Trả lời đầy đủ yêu cầu đề bài, ý tưởng thực tế và phát triển rõ ràng." },
        { "score": 2.0, "descriptorVi": "Trả lời được các ý chính, có giải thích cơ bản." },
        { "score": 1.5, "descriptorVi": "Chưa trả lời đủ các yêu cầu hoặc ý tưởng còn sơ sài." },
        { "score": 1.0, "descriptorVi": "Lạc đề hoặc nội dung quá ngắn dưới 60 từ." }
      ]
    },
    {
      "criterion": "LEXICAL_RESOURCE",
      "maxScore": 2.5,
      "bands": [
        { "score": 2.5, "descriptorVi": "Sử dụng chính xác và tự nhiên ít nhất 3-4 từ vựng/collocations của bài học." },
        { "score": 2.0, "descriptorVi": "Có sử dụng từ vựng bài học, đôi chỗ dùng từ chưa hoàn toàn tự nhiên." },
        { "score": 1.5, "descriptorVi": "Vốn từ hạn chế, lặp từ, ít dùng từ vựng theo chủ đề." },
        { "score": 1.0, "descriptorVi": "Sai từ vựng nghiêm trọng gây khó hiểu." }
      ]
    },
    {
      "criterion": "GRAMMAR",
      "maxScore": 2.5,
      "bands": [
        { "score": 2.5, "descriptorVi": "Áp dụng chính xác cấu trúc ngữ pháp trọng tâm (bị động/câu điều kiện), ít lỗi ngữ pháp." },
        { "score": 2.0, "descriptorVi": "Có sử dụng cấu trúc ngữ pháp bài học nhưng còn một vài lỗi nhỏ." },
        { "score": 1.5, "descriptorVi": "Chủ yếu dùng câu đơn, lỗi chia động từ hoặc thì xuất hiện thường xuyên." },
        { "score": 1.0, "descriptorVi": "Cấu trúc câu sai nhiều làm ảnh hưởng ý nghĩa." }
      ]
    },
    {
      "criterion": "COHERENCE",
      "maxScore": 2.5,
      "bands": [
        { "score": 2.5, "descriptorVi": "Bố cục đoạn văn mạch lạc, sử dụng tốt các từ nối (First, Moreover, In conclusion)." },
        { "score": 2.0, "descriptorVi": "Đoạn văn có kết nối ý tương đối tốt, có dùng từ nối cơ bản." },
        { "score": 1.5, "descriptorVi": "Các câu rời rạc, thiếu liên kết logic giữa các ý." },
        { "score": 1.0, "descriptorVi": "Không có tính liên kết, cấu trúc đoạn văn lộn xộn." }
      ]
    }
  ]
}`;

export async function generateWritingTask(params: {
  lexicalProfiles: LexicalProfile[];
  grammarProfiles: GrammarProfile[];
  topicTitle: string;
}): Promise<WritingTask> {
  const userPrompt = JSON.stringify({
    topicTitle: params.topicTitle,
    vocabulary: params.lexicalProfiles.slice(0, 5).map((p, idx) => ({
      id: `v-${idx + 1}`,
      term: p.displayForm,
    })),
    grammar: params.grammarProfiles.map((g, idx) => ({
      id: g.id || `g-${idx + 1}`,
      label: g.label,
    })),
  });

  const response = await callStructuredLLM<WritingTask>({
    systemPrompt: WRITING_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.3,
  });

  const data = response.data;
  return {
    ...data,
    minWords: 80,
    maxWords: 120,
    requiredVocabularyIds: params.lexicalProfiles.slice(0, 3).map((_, i) => `v-${i + 1}`),
    requiredGrammarIds: params.grammarProfiles.slice(0, 1).map((_, i) => `g-${i + 1}`),
  };
}
