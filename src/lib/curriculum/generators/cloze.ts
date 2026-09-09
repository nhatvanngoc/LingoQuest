import { callStructuredLLM } from "../llm";
import type { ClozeTest, LexicalProfile, GrammarProfile } from "../types";

const CLOZE_SYSTEM_PROMPT = `You are LingoQuest Contextual Cloze Test Generator.
Your task is to generate a realistic English Notice, Leaflet, or Email with 4 blanks, testing vocabulary collocations and grammatical forms in meaningful contexts (aligned with the 2018 Vietnamese High School Graduation Exam format).

RULES:
1. "genre": Choose NOTICE, LEAFLET, or EMAIL.
2. "textWithBlanks": Text containing blanks marked as (1), (2), (3), (4).
3. "items": Exactly 4 items corresponding to blanks 1, 2, 3, 4.
4. Each item MUST have:
   - 4 options (A, B, C, D) where EXACTLY ONE is correct.
   - Distractors must be plausible (e.g. common collocations, preposition choices, or verb forms).
   - "explanationVi": Clear rationale explaining why the chosen word/grammar fits the context.
   - "hintType" & "hint": Contextual or Vietnamese clue.

Return valid JSON:
{
  "genre": "NOTICE",
  "textWithBlanks": "SCHOOL ECO-CAMPAIGN ANNOUNCEMENT\\nAll students are invited to take part in our green week. Please remember to (1) ___ off the lights when leaving classrooms. We are striving to reduce our collective carbon (2) ___ by 30%. Reusable containers are (3) ___ at the cafeteria entrance. Let us work together for a (4) ___ community!",
  "items": [
    {
      "id": "clz-1",
      "level": "A2",
      "blankIndex": 1,
      "hintType": "CONTEXT",
      "hint": "Cụm động từ tắt thiết bị điện",
      "options": [
        { "id": "A", "text": "turn", "isCorrect": true, "rationaleVi": "turn off the lights: tắt đèn (cụm động từ cố định)." },
        { "id": "B", "text": "take", "isCorrect": false, "rationaleVi": "take off mang nghĩa cởi đồ hoặc máy bay cất cánh." },
        { "id": "C", "text": "make", "isCorrect": false, "rationaleVi": "make off không đi với the lights." },
        { "id": "D", "text": "put", "isCorrect": false, "rationaleVi": "put off mang nghĩa trì hoãn." }
      ],
      "correctOptionId": "A",
      "explanationVi": "Cụm động từ 'turn off' dùng cho việc tắt đèn hoặc thiết bị điện."
    }
  ]
}`;

export async function generateClozeTest(params: {
  lexicalProfiles: LexicalProfile[];
  grammarProfiles: GrammarProfile[];
  topicTitle: string;
}): Promise<ClozeTest> {
  const vocabSample = params.lexicalProfiles.slice(0, 8).map((p) => ({
    term: p.displayForm,
    level: p.cefrLevel,
    meaningVi: p.meaningVi,
  }));

  const userPrompt = JSON.stringify({
    topicTitle: params.topicTitle,
    vocabulary: vocabSample,
    grammar: params.grammarProfiles.map((g) => g.label),
  });

  const response = await callStructuredLLM<ClozeTest>({
    systemPrompt: CLOZE_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.3,
  });

  return response.data;
}
