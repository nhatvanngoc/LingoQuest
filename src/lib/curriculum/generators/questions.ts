import { callStructuredLLM } from "../llm";
import type { ReadingQuestion, ReadingGenre, CefrLevel } from "../types";

const QUESTIONS_SYSTEM_PROMPT = `You are LingoQuest Exam Question Creator (Assessment Specialist).
Your task is to generate 4 high-quality multiple choice questions based on the provided reading passage, aligned with the 2018 Vietnamese High School Graduation Exam format.

RULES:
1. Question progression:
   - Question 1 (A2 / DETAIL): Direct factual recall from passage.
   - Question 2 (B1 / SYNONYM or REFERENCE): Identifies what a pronoun refers to or closest meaning of a key vocabulary item.
   - Question 3 (B1 / MAIN_IDEA or PURPOSE): Overall topic, author's intent, or central takeaway.
   - Question 4 (B2 / INFERENCE): Deep inference requiring synthesis of 2+ clues, with subtle but fair distractors.
2. OPTIONS VALIDITY:
   - Exactly 4 options (A, B, C, D).
   - EXACTLY ONE option must have "isCorrect": true. The other three MUST have "isCorrect": false.
   - Every single option MUST have a detailed "rationaleVi" explaining specifically why it is correct or incorrect.
3. EVIDENCE: Quote the exact sentence or clause from the passage that justifies the key.
4. SCAFFOLDING: Provide "keywordHintVi" (clue in Vietnamese for struggling learners), "simplifiedStem" (easier A2 wording), and "advancedExtension" (extension question for high achievers).

Return valid JSON:
{
  "questions": [
    {
      "id": "q-1",
      "level": "A2",
      "skill": "DETAIL",
      "stem": "According to paragraph 1, what can students do to minimize environmental harm?",
      "options": [
        { "id": "A", "text": "Cycle or walk to school", "isCorrect": true, "rationaleVi": "Đoạn 1 nêu rõ: 'Students are encouraged to walk or cycle to minimize their carbon footprint.'" },
        { "id": "B", "text": "Buy more single-use plastic bottles", "isCorrect": false, "rationaleVi": "Sai vì đồ nhựa dùng một lần gây hại môi trường, trái với bài đọc." },
        { "id": "C", "text": "Leave electrical appliances on overnight", "isCorrect": false, "rationaleVi": "Sai vì bài đọc khuyên nên tắt thiết bị điện để tiết kiệm năng lượng." },
        { "id": "D", "text": "Burn household waste in the backyard", "isCorrect": false, "rationaleVi": "Sai vì hành động này thải ra khí độc hại." }
      ],
      "correctOptionId": "A",
      "evidence": "Students are encouraged to walk or cycle to minimize their carbon footprint.",
      "explanationVi": "Dựa vào câu thứ hai của đoạn 1: học sinh được khuyến khích đi bộ hoặc đạp xe.",
      "scaffold": {
        "keywordHintVi": "Tìm từ khóa 'walk or cycle' trong đoạn 1.",
        "simplifiedStem": "How do students go to school to help the environment?",
        "advancedExtension": "Why is active commuting preferable to electric vehicles for short school trips?"
      }
    }
  ]
}`;

export async function generateReadingQuestions(params: {
  passage: string;
  genre: ReadingGenre;
  topicTitle: string;
}): Promise<ReadingQuestion[]> {
  const userPrompt = JSON.stringify({
    passage: params.passage,
    genre: params.genre,
    topicTitle: params.topicTitle,
  });

  const response = await callStructuredLLM<{ questions: ReadingQuestion[] }>({
    systemPrompt: QUESTIONS_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.25,
  });

  return (response.data.questions || []).map((q, idx) => ({
    ...q,
    id: `q-${idx + 1}`,
  }));
}
