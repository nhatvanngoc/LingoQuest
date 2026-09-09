import { callStructuredLLM } from "../llm";
import type { LexicalProfile, FlashcardItem } from "../types";

const FLASHCARDS_SYSTEM_PROMPT = `You are LingoQuest Flashcard Generator.
Your task is to generate pedagogical 3D tactile flashcards for Vietnamese high school students.
RULES:
1. For each lexical profile, generate accurate US and UK IPA.
2. Provide audioHint with speed (0.85-0.95), locale, and explicit stress hints (e.g. "Stress on 1st syllable").
3. Provide 2-4 high-value collocations frequently tested in the Vietnamese THPT graduation exam.
4. Include exactly two tiered example sentences:
   - "a2": A simple, concrete sentence (short clause, high-frequency words, clear Vietnamese translation).
   - "b1b2": An academic or exam-like sentence (compound/complex, relative clause or passive voice, highlighting collocations).
5. Output valid JSON matching:
{
  "flashcards": [
    {
      "id": "fc-1",
      "vocabId": "v-1",
      "term": "carbon footprint",
      "lemma": "carbon footprint",
      "partOfSpeech": "noun",
      "cefrLevel": "B1",
      "ipaUS": "/ˈkɑːrbən ˈfʊtprɪnt/",
      "ipaUK": "/ˈkɑːbən ˈfʊtprɪnt/",
      "audioHint": {
        "text": "carbon footprint",
        "locale": "en-US",
        "speed": 0.9,
        "stressHint": "Stress on 'car' in carbon and 'foot' in footprint"
      },
      "meaningEn": "The total amount of greenhouse gases produced by human activities.",
      "meaningVi": "Dấu chân carbon (lượng khí thải carbon thải ra môi trường).",
      "collocations": [
        {
          "phrase": "reduce one's carbon footprint",
          "meaningVi": "cắt giảm dấu chân carbon",
          "example": "Cycling to school helps reduce your carbon footprint."
        }
      ],
      "examples": {
        "a2": {
          "en": "We can walk to school to reduce our carbon footprint.",
          "vi": "Chúng ta có thể đi bộ đến trường để giảm lượng khí thải carbon."
        },
        "b1b2": {
          "en": "Adopting renewable energy sources is essential for nations striving to minimize their industrial carbon footprint.",
          "vi": "Áp dụng các nguồn năng lượng tái tạo là điều thiết yếu đối với các quốc gia đang nỗ lực giảm thiểu dấu chân carbon công nghiệp.",
          "feature": "Complex clause with gerund subject and adjective complement"
        }
      }
    }
  ]
}`;

export async function generateFlashcardSuite(
  profiles: LexicalProfile[]
): Promise<FlashcardItem[]> {
  const payload = profiles.map((p, idx) => ({
    vocabId: `v-${idx + 1}`,
    term: p.displayForm,
    lemma: p.lemma,
    partOfSpeech: p.partOfSpeech,
    intendedSenseEn: p.intendedSenseEn,
    meaningVi: p.meaningVi,
    cefrLevel: p.cefrLevel,
  }));

  const response = await callStructuredLLM<{ flashcards: FlashcardItem[] }>({
    systemPrompt: FLASHCARDS_SYSTEM_PROMPT,
    userPrompt: JSON.stringify({ items: payload }),
    temperature: 0.2,
  });

  return (response.data.flashcards || []).map((fc, i) => ({
    ...fc,
    id: `fc-${i + 1}`,
    vocabId: `v-${i + 1}`,
  }));
}
