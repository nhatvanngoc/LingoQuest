import { callStructuredLLM } from "./llm";
import type { NormalizedItem } from "./normalizer";
import type { LexicalProfile, GrammarProfile, GradeLevel, CefrLevel } from "./types";

const PROFILER_SYSTEM_PROMPT = `You are the LingoQuest Lexical & Grammar Profiler.
Your task is to analyze raw English vocabulary and grammar targets for Vietnamese High School students (Grades 10-12, Curriculum GDPT 2018).
For each vocabulary item:
1. Identify the canonical lemma, display form, part of speech.
2. Determine the intended pedagogical sense in Vietnamese high-school themes.
3. Assign a sense-specific CEFR level (A1, A2, B1, or B2) according to the English Vocabulary Profile (EVP) guidelines.
4. Provide an accurate, natural Vietnamese meaning suitable for students.
5. Rate your CEFR confidence (0.0 to 1.0) and brief rationale.

For each grammar target:
1. Provide the canonical form and label.
2. Determine CEFR level (A1, A2, B1, B2).
3. Identify 2-3 common mistakes made by Vietnamese learners.
4. Give 2 natural positive examples.

Return JSON matching this format:
{
  "lexicalProfiles": [
    {
      "sourceIndex": 1,
      "sourceText": "carbon footprint",
      "lemma": "carbon footprint",
      "displayForm": "carbon footprint",
      "partOfSpeech": "noun",
      "intendedSenseEn": "the amount of carbon dioxide released into the atmosphere as a result of activities of a person or group",
      "meaningVi": "dấu chân carbon (lượng khí thải carbon gây hại)",
      "cefrLevel": "B1",
      "cefrConfidence": 0.95,
      "cefrReason": "EVP B1 topic-specific environmental noun phrase",
      "reviewStatus": "AUTO_ACCEPTED",
      "curriculumFit": {
        "grade": 10,
        "unitRelevance": 0.95,
        "examUsefulness": 0.9
      }
    }
  ],
  "grammarProfiles": [
    {
      "id": "g-1",
      "label": "Passive Voice",
      "canonicalForm": "be + V3/ed",
      "cefrLevel": "B1",
      "prerequisites": ["Past simple", "Present simple"],
      "commonVietnameseLearnerErrors": ["Quên chia động từ to be", "Nhầm lẫn giữa by và with"],
      "positiveExamples": ["Reusable bags are used by many students.", "The campaign was launched yesterday."],
      "contrastWith": "Active voice"
    }
  ]
}`;

export async function profileVocabularyAndGrammar(params: {
  grade: GradeLevel;
  unitTitle: string;
  items: NormalizedItem[];
  grammarTargets: string[];
}): Promise<{
  lexicalProfiles: LexicalProfile[];
  grammarProfiles: GrammarProfile[];
}> {
  const userPrompt = JSON.stringify({
    grade: params.grade,
    unitTitle: params.unitTitle,
    itemsToProfile: params.items.map((it) => ({
      sourceIndex: it.sourceIndex,
      term: it.term,
      note: it.note,
      isMultiword: it.isMultiword,
    })),
    grammarTargets: params.grammarTargets,
  });

  const response = await callStructuredLLM<{
    lexicalProfiles: LexicalProfile[];
    grammarProfiles: GrammarProfile[];
  }>({
    systemPrompt: PROFILER_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.1,
  });

  return {
    lexicalProfiles: response.data.lexicalProfiles || [],
    grammarProfiles: response.data.grammarProfiles || [],
  };
}
