import { callStructuredLLM } from "../llm";
import type { LexicalProfile, FlashcardItem } from "../types";

const FLASHCARDS_SYSTEM_PROMPT = `You are LingoQuest Master Vocabulary Pedagogy Specialist.
Your task is to generate high-retention 3D flashcards following the Teacher's Deep Imprint Methodology:
1. SEMANTIC SCAFFOLDING (Đoán nghĩa qua ngữ cảnh -> Định nghĩa Anh-Anh -> Cầu nối Anh-Việt -> Khắc sâu Anh-Anh).
2. EAR-FIRST ACOUSTIC IMPRINTING (Nghe thấm 5 lần từ tổng thể, trọng âm, âm đuôi đến cụm từ trước khi nói).
3. MEMORABLE & TIERED EXAMPLES (Câu ví dụ A2 đời thường, B1/B2 học thuật thi THPT, và ví dụ riêng cho từng collocation).

STRICT GENERATION RULES:
1. CONTEXTUAL GUESSING (contextSentence):
   - "en": A vivid sentence naturally using the term in a high-school context.
   - "clueVi": A guiding hint in Vietnamese that nudges the student to deduce the meaning without directly giving it away.
   - "blankSentence": The exact context sentence but with the term replaced by "[___]" for retrieval testing.

2. ENGLISH-ENGLISH FIRST (meaningEn):
   - Clear, concise Cambridge/Oxford style definition using accessible English (no overly obscure dictionary jargon).

3. VIETNAMESE BRIDGE (meaningVi):
   - Accurate, natural Vietnamese meaning used in Vietnam's high school curriculum (GDPT 2018).

4. PHONETICS & 5-STAGE ACOUSTIC IMPRINTING:
   - "ipaUS" & "ipaUK": Accurate IPA with primary and secondary stress marks.
   - "syllables": Syllabified with dots (e.g., "car·bon foot·print" or "sus·tain·a·ble").
   - "stressPattern": Clear Vietnamese explanation of stress placement (e.g. "Trọng âm rơi vào âm tiết thứ 2").
   - "acousticStages": Array of exactly 5 stages:
     * Stage 1: Speed 1.0, focus "overview", instructionVi "Nghe tổng thể bắt nhịp âm điệu tự nhiên của từ."
     * Stage 2: Speed 1.0, focus "stress", instructionVi "Lắng nghe trọng âm chính được nhấn mạnh và ngân dài hơn."
     * Stage 3: Speed 0.85, focus "ending_sounds", instructionVi "Tập trung nghe rõ âm đuôi và bật hơi chính xác."
     * Stage 4: Speed 0.85, focus "linking", instructionVi "Chú ý độ mở của nguyên âm và liên kết phụ âm."
     * Stage 5: Speed 0.95, focus "collocation_sentence", instructionVi "Nghe từ được lồng ghép tự nhiên trong cụm câu hoàn chỉnh."

5. RICH TIERED EXAMPLES & COLLOCATIONS:
   - "a2": Concrete, short, daily life situation with natural Vietnamese translation.
   - "b1b2": High school graduation exam standard (relative clause, passive voice, formal register) with "feature" describing the grammatical point.
   - "collocations": 2 to 4 high-value collocations frequently tested in the THPT exam. Every collocation MUST have its own practical example sentence!

6. LEARNER TIP (learnerTipVi):
   - Practical tip warning against common mistakes by Vietnamese students (e.g., nuốt âm đuôi /t/, /s/, sai trọng âm, nhầm giới từ).

Return valid JSON:
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
      "syllables": "car·bon foot·print",
      "stressPattern": "Trọng âm rơi vào âm tiết đầu tiên của mỗi từ ('CAR-bon 'FOOT-print)",
      "audioHint": {
        "text": "carbon footprint",
        "locale": "en-US",
        "speed": 0.9,
        "stressHint": "Stress 'car' in carbon and 'foot' in footprint"
      },
      "acousticStages": [
        { "stage": 1, "speed": 1.0, "focus": "overview", "instructionVi": "Nghe tổng thể bắt nhịp âm điệu tự nhiên của từ." },
        { "stage": 2, "speed": 1.0, "focus": "stress", "instructionVi": "Lắng nghe trọng âm chính được nhấn mạnh ở âm 'car' và 'foot'." },
        { "stage": 3, "speed": 0.85, "focus": "ending_sounds", "instructionVi": "Tập trung nghe rõ âm đuôi /t/ ở cuối từ footprint." },
        { "stage": 4, "speed": 0.85, "focus": "linking", "instructionVi": "Lắng nghe độ chuyển mượt mà giữa hai từ đơn." },
        { "stage": 5, "speed": 0.95, "focus": "collocation_sentence", "instructionVi": "Nghe từ lồng ghép trong cụm câu: Cycling to school helps reduce your carbon footprint." }
      ],
      "contextSentence": {
        "en": "By cycling to school every morning, students actively minimize their carbon footprint.",
        "clueVi": "Hành động đạp xe thay vì xe máy giúp giảm bớt lượng khí độc hại mà con người thải ra môi trường.",
        "blankSentence": "By cycling to school every morning, students actively minimize their [___]."
      },
      "meaningEn": "The total amount of greenhouse gases, especially carbon dioxide, produced by human activities.",
      "meaningVi": "Dấu chân carbon (tổng lượng khí thải nhà kính do hoạt động của một cá nhân hay tổ chức thải ra).",
      "collocations": [
        {
          "phrase": "reduce one's carbon footprint",
          "meaningVi": "cắt giảm dấu chân carbon",
          "example": "Turning off air conditioners when not needed is an easy way to reduce your carbon footprint."
        },
        {
          "phrase": "industrial carbon footprint",
          "meaningVi": "dấu chân carbon công nghiệp",
          "example": "Heavy factories must adopt cleaner technology to control their industrial carbon footprint."
        }
      ],
      "examples": {
        "a2": {
          "en": "We can plant trees to reduce our carbon footprint.",
          "vi": "Chúng ta có thể trồng thêm cây xanh để giảm bớt dấu chân carbon."
        },
        "b1b2": {
          "en": "Adopting renewable solar energy is regarded as an indispensable measure for communities striving to minimize their overall carbon footprint.",
          "vi": "Áp dụng năng lượng mặt trời tái tạo được xem là giải pháp không thể thiếu đối với các cộng đồng đang nỗ lực giảm thiểu tổng lượng dấu chân carbon.",
          "feature": "Cấu trúc bị động khách quan (is regarded as) kết hợp mệnh đề phân từ hiện tại (striving to minimize)"
        }
      },
      "learnerTipVi": "Lưu ý bật âm đuôi /t/ ở cuối từ 'footprint'. Học sinh Việt Nam hay phát âm nhầm thành 'phút-rin' do nuốt phụ âm đuôi."
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
    temperature: 0.25,
  });

  return (response.data.flashcards || []).map((fc, i) => {
    // Default fallback stages if model omitted them
    const defaultStages = [
      { stage: 1, speed: 1.0, focus: "overview" as const, instructionVi: "Nghe tổng thể bắt nhịp âm điệu tự nhiên của từ." },
      { stage: 2, speed: 1.0, focus: "stress" as const, instructionVi: "Lắng nghe trọng âm chính được nhấn mạnh và ngân dài hơn." },
      { stage: 3, speed: 0.85, focus: "ending_sounds" as const, instructionVi: "Tập trung nghe rõ âm đuôi và bật hơi chính xác." },
      { stage: 4, speed: 0.85, focus: "linking" as const, instructionVi: "Chú ý độ mở của nguyên âm và sự liên kết phụ âm." },
      { stage: 5, speed: 0.95, focus: "collocation_sentence" as const, instructionVi: "Nghe từ lồng ghép tự nhiên trong cụm câu hoàn chỉnh." },
    ];

    return {
      ...fc,
      id: `fc-${i + 1}`,
      vocabId: `v-${i + 1}`,
      acousticStages: fc.acousticStages && fc.acousticStages.length >= 5 ? fc.acousticStages : defaultStages,
    };
  });
}
