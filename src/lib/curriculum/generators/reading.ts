import { callStructuredLLM } from "../llm";
import type { UnitBlueprint, LexicalProfile, GrammarProfile, ReadingContent } from "../types";

const READING_SYSTEM_PROMPT = `You are LingoQuest Reading Passage Specialist.
Your task is to craft an engaging, natural reading passage for Vietnamese high school students (Grades 10-12).
STRICT RULES:
1. WORD COUNT: The passage MUST be between 150 and 250 English words. Count accurately.
2. NATURAL VOCABULARY EMBEDDING: Embed at least 80% of the required vocabulary list. Do NOT keyword-stuff. Use words naturally in appropriate syntactic positions and morphology.
3. GRAMMAR INSTANTIATION: Naturally weave in the required grammar structures (e.g., passive voice, conditionals, relative clauses).
4. THEME & REGISTER: Age-appropriate high school context (school life, youth environment campaigns, technology in education, local community).
5. COVERAGE REPORT:
   - For every covered vocabulary item, list its vocabId, the exact surfaceForm used in the text, and the quote sentence.
   - List any missingVocabulary items.
   - Provide grammarEvidence showing where each grammar target was used.

Return valid JSON matching:
{
  "title": "Adopting a Greener Lifestyle at School",
  "genre": "ARTICLE",
  "passage": "In recent years, many high schools across Vietnam have launched meaningful eco-campaigns to protect our surrounding environment...",
  "wordCount": 185,
  "coverage": {
    "vocabularyCoverage": 0.88,
    "grammarCoverage": 1.0,
    "coveredVocabulary": [
      { "vocabId": "v-1", "surfaceForm": "carbon footprint", "quote": "Students are encouraged to walk or cycle to minimize their carbon footprint." }
    ],
    "missingVocabulary": [],
    "grammarEvidence": [
      { "grammarId": "g-1", "quote": "Recycling bins are placed in every classroom by the youth union." }
    ]
  }
}`;

export async function generateContextualReading(params: {
  blueprint: UnitBlueprint;
  lexicalProfiles: LexicalProfile[];
  grammarProfiles: GrammarProfile[];
}): Promise<Omit<ReadingContent, "questions">> {
  const vocabMap = params.lexicalProfiles.map((p, idx) => ({
    id: `v-${idx + 1}`,
    term: p.displayForm,
    lemma: p.lemma,
    intendedSense: p.intendedSenseEn,
    pos: p.partOfSpeech,
  }));

  const grammarMap = params.grammarProfiles.map((g, idx) => ({
    id: g.id || `g-${idx + 1}`,
    label: g.label,
    canonicalForm: g.canonicalForm,
  }));

  const userPrompt = JSON.stringify({
    readingPlan: params.blueprint.readingPlan,
    requiredVocabulary: vocabMap,
    grammarTargets: grammarMap,
  });

  const response = await callStructuredLLM<Omit<ReadingContent, "questions">>({
    systemPrompt: READING_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.45,
    maxTokens: 3000,
  });

  const data = response.data;
  // Calculate real word count from passage
  const words = data.passage.trim().split(/\s+/).filter(Boolean);
  const actualWordCount = words.length;

  return {
    ...data,
    wordCount: actualWordCount,
  };
}
