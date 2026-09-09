import { callStructuredLLM } from "./llm";
import type {
  GradeLevel,
  TextbookSeries,
  LexicalProfile,
  GrammarProfile,
  UnitBlueprint,
  ReadingGenre,
} from "./types";

const BLUEPRINT_SYSTEM_PROMPT = `You are LingoQuest Unit Architect.
Your task is to design a cohesive UnitBlueprint from the teacher's input and profiled lexical/grammar targets.
The blueprint determines:
1. topicSummaryVi: Concise Vietnamese topic overview.
2. objectives: 3-4 CEFR Can-Do descriptors covering vocabulary, grammar, reading, and writing.
3. requiredVocabularyIds vs optionalVocabularyIds.
4. readingPlan:
   - genre: One of ARTICLE, NOTICE, LEAFLET, EMAIL, BLOG_POST, REPORT (favor formats from the 2018 Vietnamese graduation exam).
   - thesis: Central main idea connecting the vocabulary and grammar naturally.
   - paragraphFunctions: Sequence of 2-3 paragraph goals (e.g. Introduction of issue -> Actionable community steps -> Future outlook).
   - requiredVocabularyIds: Array of vocab IDs that MUST appear in the passage.
   - requiredGrammarTargetIds: Array of grammar IDs to embed.
5. difficultyDistribution: Percentage or ratio of A2, B1, B2 expectations.

Return valid JSON:
{
  "unitId": "unit-1",
  "topicSummaryVi": "Tóm tắt chủ đề bài học bằng tiếng Việt...",
  "objectives": [
    { "id": "obj-1", "level": "B1", "skill": "VOCABULARY", "canDo": "Hiểu và sử dụng được các từ vựng về lối sống xanh trong văn cảnh gia đình và học đường." }
  ],
  "requiredVocabularyIds": ["v-1", "v-2", "v-3"],
  "optionalVocabularyIds": [],
  "grammarTargetIds": ["g-1"],
  "readingPlan": {
    "genre": "ARTICLE",
    "thesis": "Các hành động thiết thực mà học sinh THPT có thể thực hiện để giảm thiểu rác thải sinh hoạt.",
    "paragraphFunctions": [
      "Thực trạng rác thải gia đình tại các đô thị",
      "Các giải pháp phân loại rác và tái chế",
      "Kêu gọi hành động và lợi ích bền vững"
    ],
    "requiredVocabularyIds": ["v-1", "v-2", "v-3"],
    "requiredGrammarTargetIds": ["g-1"],
    "interleavedVocabularyIds": []
  },
  "difficultyDistribution": {
    "A2": 30,
    "B1": 50,
    "B2": 20
  }
}`;

export async function buildUnitBlueprint(params: {
  unitId: string;
  grade: GradeLevel;
  textbookSeries: TextbookSeries;
  unitNumber: number;
  unitTitle: string;
  lexicalProfiles: LexicalProfile[];
  grammarProfiles: GrammarProfile[];
}): Promise<UnitBlueprint> {
  const vocabItems = params.lexicalProfiles.map((p, idx) => ({
    id: `v-${idx + 1}`,
    term: p.displayForm,
    cefr: p.cefrLevel,
    meaningVi: p.meaningVi,
  }));

  const grammarItems = params.grammarProfiles.map((g, idx) => ({
    id: g.id || `g-${idx + 1}`,
    label: g.label,
    canonicalForm: g.canonicalForm,
    cefr: g.cefrLevel,
  }));

  const userPrompt = JSON.stringify({
    unitId: params.unitId,
    grade: params.grade,
    textbookSeries: params.textbookSeries,
    unitNumber: params.unitNumber,
    unitTitle: params.unitTitle,
    vocabulary: vocabItems,
    grammar: grammarItems,
  });

  const response = await callStructuredLLM<UnitBlueprint>({
    systemPrompt: BLUEPRINT_SYSTEM_PROMPT,
    userPrompt,
    temperature: 0.3,
  });

  const data = response.data;
  return {
    ...data,
    unitId: params.unitId,
    requiredVocabularyIds: vocabItems.map((v) => v.id),
    grammarTargetIds: grammarItems.map((g) => g.id),
    readingPlan: {
      ...data.readingPlan,
      requiredVocabularyIds: vocabItems.map((v) => v.id),
      requiredGrammarTargetIds: grammarItems.map((g) => g.id),
      interleavedVocabularyIds: data.readingPlan?.interleavedVocabularyIds || [],
    },
  };
}
