import { normalizeTeacherInput } from "../normalizer";
import { evaluateServerQualityGate } from "../validators/quality-gate";
import {
  GenerateUnitRequestSchema,
  LingoQuestUnitPackageSchema,
} from "../schemas";
import type { LingoQuestUnitPackage, LexicalProfile } from "../types";

async function runTests() {
  console.log("=== 1. Testing Normalizer (Deterministic Stage A) ===");
  const rawVocab = `adopt (a green lifestyle) [B1]
carbon footprint
eco-friendly [B1]
household appliances
litter
release (harmful gases)
reduce (waste)
raise awareness`;
  const rawGrammar = `Will vs. Be going to; Passive voice with modal verbs`;

  const norm = normalizeTeacherInput(rawVocab, rawGrammar);
  console.log(`- Extracted ${norm.vocabulary.length} vocab items:`);
  norm.vocabulary.forEach((v) => {
    console.log(`  * [${v.sourceIndex}] term="${v.term}", displayForm="${v.rawText}", isMultiword=${v.isMultiword}, note="${v.note || ""}"`);
  });
  console.log(`- Extracted grammar targets: ${JSON.stringify(norm.grammarTargets)}`);

  if (norm.vocabulary.length < 8) {
    throw new Error(`Expected at least 8 items, got ${norm.vocabulary.length}`);
  }

  console.log("\n=== 2. Testing Zod Request Schema Validation ===");
  const testRequest = {
    grade: 10,
    textbookSeries: "GLOBAL_SUCCESS",
    unitNumber: 2,
    unitTitle: "Humans and the Environment",
    rawVocabulary: rawVocab,
    rawGrammar: rawGrammar,
    teacherNotes: "Gợi ý ngữ cảnh thực tế Việt Nam",
    generationOptions: {
      locale: "vi-VN",
      targetExamProfile: "THPT_2018_CURRENT",
      passageWordCount: { min: 150, max: 250 },
      questionCount: 4,
    },
  };

  const parseReq = GenerateUnitRequestSchema.safeParse(testRequest);
  if (!parseReq.success) {
    throw new Error(`Request schema validation failed: ${JSON.stringify(parseReq.error.issues)}`);
  }
  console.log("✓ GenerateUnitRequestSchema validation passed!");

  console.log("\n=== 3. Testing Quality Gate & Conformance to 2018 GDPT Specifications ===");
  const mockLexical: LexicalProfile[] = [
    {
      sourceIndex: 1,
      sourceText: "carbon footprint",
      lemma: "carbon footprint",
      displayForm: "carbon footprint",
      partOfSpeech: "noun",
      intendedSenseEn: "amount of greenhouse gases produced",
      meaningVi: "dấu chân carbon",
      cefrLevel: "B1",
      cefrConfidence: 0.95,
      cefrReason: "EVP B1",
      reviewStatus: "AUTO_ACCEPTED",
      curriculumFit: { grade: 10, unitRelevance: 0.95, examUsefulness: 0.9 },
    },
    {
      sourceIndex: 2,
      sourceText: "eco-friendly",
      lemma: "eco-friendly",
      displayForm: "eco-friendly",
      partOfSpeech: "adjective",
      intendedSenseEn: "not harmful to the environment",
      meaningVi: "thân thiện với môi trường",
      cefrLevel: "B1",
      cefrConfidence: 0.9,
      cefrReason: "EVP B1",
      reviewStatus: "AUTO_ACCEPTED",
      curriculumFit: { grade: 10, unitRelevance: 0.95, examUsefulness: 0.9 },
    },
    {
      sourceIndex: 3,
      sourceText: "reduce",
      lemma: "reduce",
      displayForm: "reduce",
      partOfSpeech: "verb",
      intendedSenseEn: "make smaller or less in amount",
      meaningVi: "cắt giảm, làm giảm",
      cefrLevel: "A2",
      cefrConfidence: 0.95,
      cefrReason: "EVP A2",
      reviewStatus: "AUTO_ACCEPTED",
      curriculumFit: { grade: 10, unitRelevance: 0.9, examUsefulness: 0.95 },
    },
  ];

  const mockPassage = `In recent years, many high schools across Vietnam have taken inspiring actions to adopt a greener lifestyle within their campuses. Environmental education is now emphasized through hands-on clubs and community projects. Every student is encouraged to reduce their daily consumption of single-use plastics by bringing reusable water bottles, lunch boxes, and durable cloth bags. 

Moreover, several schools in major cities like Hanoi and Da Nang have successfully installed solar light systems and energy-efficient electrical appliances to transform their classrooms into eco-friendly learning spaces. By choosing to walk or cycle to school instead of traveling by private motorbikes, young teenagers can actively decrease their carbon footprint and keep the surrounding air fresh. 

Teachers also organize regular weekend workshops to raise awareness about proper waste segregation. When students understand how small daily actions create immense long-term benefits, they become passionate green ambassadors for their families. Such meaningful initiatives undoubtedly pave the way toward a cleaner, healthier, and truly sustainable future for the entire community.`;

  const wordCount = mockPassage.trim().split(/\s+/).length;
  console.log(`- Mock passage word count: ${wordCount} words (within 150-250 range)`);

  const mockPackage: LingoQuestUnitPackage = {
    schemaVersion: "1.0",
    metadata: {
      title: "Humans and the Environment",
      grade: 10,
      topic: "Bảo vệ môi trường học đường",
      targetLevels: ["A2", "B1"],
      learningObjectives: ["Hiểu từ vựng môi trường", "Sử dụng bị động"],
    },
    flashcards: [
      {
        id: "fc-1",
        vocabId: "v-1",
        term: "carbon footprint",
        lemma: "carbon footprint",
        partOfSpeech: "noun",
        cefrLevel: "B1",
        ipaUS: "/ˈkɑːrbən ˈfʊtprɪnt/",
        ipaUK: "/ˈkɑːbən ˈfʊtprɪnt/",
        audioHint: {
          text: "carbon footprint",
          locale: "en-US",
          speed: 0.9,
          stressHint: "Stress on carbon",
        },
        meaningEn: "Total carbon emissions",
        meaningVi: "Dấu chân carbon",
        collocations: [{ phrase: "reduce carbon footprint", meaningVi: "giảm khí thải", example: "We walk to reduce carbon footprint." }],
        examples: {
          a2: { en: "We reduce our carbon footprint.", vi: "Chúng tôi giảm dấu chân carbon." },
          b1b2: { en: "Adopting solar energy helps communities lower their carbon footprint.", vi: "Áp dụng năng lượng mặt trời giúp giảm dấu chân carbon.", feature: "Gerund" },
        },
      },
    ],
    reading: {
      title: "Green School Initiatives",
      genre: "ARTICLE",
      passage: mockPassage,
      wordCount,
      coverage: {
        vocabularyCoverage: 1.0,
        grammarCoverage: 1.0,
        coveredVocabulary: [
          { vocabId: "v-1", surfaceForm: "carbon footprint", quote: "decrease their carbon footprint" },
          { vocabId: "v-2", surfaceForm: "eco-friendly", quote: "eco-friendly learning spaces" },
          { vocabId: "v-3", surfaceForm: "reduce", quote: "reduce their daily consumption" },
        ],
        missingVocabulary: [],
        grammarEvidence: [{ grammarId: "g-1", quote: "have successfully installed" }],
      },
      questions: [
        {
          id: "q-1",
          level: "A2",
          skill: "DETAIL",
          stem: "According to paragraph 1, how can students reduce their daily plastic consumption?",
          options: [
            { id: "A", text: "By bringing reusable water bottles and cloth bags", isCorrect: true, rationaleVi: "Đoạn 1 nêu rõ mang bình nước và túi vải." },
            { id: "B", text: "By using more single-use plastic cups", isCorrect: false, rationaleVi: "Sai vì nhựa dùng một lần gây ô nhiễm." },
            { id: "C", text: "By purchasing new private motorbikes", isCorrect: false, rationaleVi: "Sai thông tin đoạn 1." },
            { id: "D", text: "By leaving classroom lights turned on all night", isCorrect: false, rationaleVi: "Sai thông tin đoạn 1." },
          ],
          correctOptionId: "A",
          evidence: "Every student is encouraged to reduce their daily consumption of single-use plastics by bringing reusable water bottles...",
          explanationVi: "Đoạn 1 chỉ rõ mang bình nước và túi vải để giảm tiêu thụ đồ nhựa.",
          scaffold: {
            keywordHintVi: "Tìm 'reduce their daily consumption'",
            simplifiedStem: "What should students bring to reduce plastic?",
            advancedExtension: "Why are reusable containers superior to disposable recycling?",
          },
        },
        {
          id: "q-2",
          level: "B1",
          skill: "SYNONYM",
          stem: "The word 'immense' in paragraph 3 is closest in meaning to:",
          options: [
            { id: "A", text: "huge", isCorrect: true, rationaleVi: "immense = huge (to lớn, bao la)." },
            { id: "B", text: "tiny", isCorrect: false, rationaleVi: "tiny mang nghĩa nhỏ bé, trái nghĩa." },
            { id: "C", text: "harmful", isCorrect: false, rationaleVi: "harmful là gây hại, không hợp ngữ cảnh." },
            { id: "D", text: "expensive", isCorrect: false, rationaleVi: "expensive là đắt đỏ, sai nghĩa." },
          ],
          correctOptionId: "A",
          evidence: "...small daily actions create immense long-term benefits...",
          explanationVi: "'Immense' đồng nghĩa với 'huge' (khổng lồ, rất lớn).",
          scaffold: {
            keywordHintVi: "Xem xét ngữ cảnh lợi ích dài hạn",
            simplifiedStem: "What does 'immense' mean in the passage?",
            advancedExtension: "Can you provide two other academic synonyms for immense?",
          },
        },
        {
          id: "q-3",
          level: "B2",
          skill: "INFERENCE",
          stem: "What can be inferred from the author's message in the passage?",
          options: [
            { id: "A", text: "Consistent individual student efforts create meaningful ecological transformation", isCorrect: true, rationaleVi: "Ý chính toàn bài kết luận những hành động nhỏ hàng ngày tạo nên tương lai bền vững." },
            { id: "B", text: "Only government legislation can solve school waste issues", isCorrect: false, rationaleVi: "Bài viết nhấn mạnh hành động từ học sinh và nhà trường." },
            { id: "C", text: "Solar energy is too difficult for Vietnamese schools to install", isCorrect: false, rationaleVi: "Trái ngược với bài: các trường tại Hà Nội và Đà Nẵng đã lắp đặt thành công." },
            { id: "D", text: "Students prefer driving motorbikes over cycling to school", isCorrect: false, rationaleVi: "Bài khuyên học sinh nên đi bộ hoặc đạp xe." },
          ],
          correctOptionId: "A",
          evidence: "When students understand how small daily actions create immense long-term benefits, they become passionate green ambassadors...",
          explanationVi: "Toàn bài truyền tải thông điệp những hành động cụ thể của từng học sinh sẽ lan tỏa và tạo chuyển biến to lớn.",
          scaffold: {
            keywordHintVi: "Đọc câu kết luận của đoạn 2 và đoạn 3",
            simplifiedStem: "What is the main lesson of the reading text?",
            advancedExtension: "How can these school models be scaled to rural communities?",
          },
        },
      ],
    },
    syntaxChunks: [
      {
        id: "syn-1",
        level: "B1",
        grammarTargetId: "g-1",
        chunks: ["Reusable bottles", "are used", "by students", "to cut down waste"],
        answer: "Reusable bottles are used by students to cut down waste.",
        explanationVi: "Cấu trúc câu bị động ở thì hiện tại đơn.",
        acceptableAnswers: ["To cut down waste, reusable bottles are used by students."],
      },
      {
        id: "syn-2",
        level: "B1",
        grammarTargetId: "g-1",
        chunks: ["Solar light systems", "have been installed", "in several classrooms"],
        answer: "Solar light systems have been installed in several classrooms.",
        explanationVi: "Cấu trúc bị động ở thì hiện tại hoàn thành.",
        acceptableAnswers: [],
      },
    ],
    clozeTest: {
      genre: "NOTICE",
      textWithBlanks: "SCHOOL ECO-ANNOUNCEMENT\\nPlease remember to (1) ___ off the electrical appliances before leaving. We strive to reduce our carbon (2) ___ by 25%. Solar panels have been (3) ___ on the library roof to promote renewable energy.",
      items: [
        {
          id: "clz-1",
          level: "A2",
          blankIndex: 1,
          hintType: "CONTEXT",
          hint: "Tắt thiết bị điện",
          options: [
            { id: "A", text: "turn", isCorrect: true, rationaleVi: "turn off = tắt thiết bị." },
            { id: "B", text: "take", isCorrect: false, rationaleVi: "take off = cất cánh hoặc cởi." },
            { id: "C", text: "get", isCorrect: false, rationaleVi: "get off = xuống xe." },
            { id: "D", text: "put", isCorrect: false, rationaleVi: "put off = hoãn lại." },
          ],
          correctOptionId: "A",
          explanationVi: "Cụm 'turn off' dùng cho việc tắt thiết bị điện.",
        },
        {
          id: "clz-2",
          level: "B1",
          blankIndex: 2,
          hintType: "CONTEXT",
          hint: "Dấu chân carbon",
          options: [
            { id: "A", text: "footprint", isCorrect: true, rationaleVi: "carbon footprint: dấu chân carbon." },
            { id: "B", text: "handprint", isCorrect: false, rationaleVi: "không dùng trong ngữ cảnh này." },
            { id: "C", text: "step", isCorrect: false, rationaleVi: "sai collocations." },
            { id: "D", text: "walk", isCorrect: false, rationaleVi: "sai collocations." },
          ],
          correctOptionId: "A",
          explanationVi: "'carbon footprint' là thuật ngữ chỉ lượng khí thải carbon.",
        },
        {
          id: "clz-3",
          level: "B1",
          blankIndex: 3,
          hintType: "CONTEXT",
          hint: "Được lắp đặt (thì hiện tại hoàn thành bị động)",
          options: [
            { id: "A", text: "installed", isCorrect: true, rationaleVi: "have been installed: đã được lắp đặt." },
            { id: "B", text: "install", isCorrect: false, rationaleVi: "sai dạng động từ sau been." },
            { id: "C", text: "installing", isCorrect: false, rationaleVi: "sai thì bị động." },
            { id: "D", text: "installs", isCorrect: false, rationaleVi: "sai thì." },
          ],
          correctOptionId: "A",
          explanationVi: "Cấu trúc bị động hiện tại hoàn thành: S + have/has been + V3/ed.",
        },
      ],
    },
    writingTask: {
      promptEn: "Write a short paragraph (80-120 words) proposing 2-3 practical actions your high school class can take to adopt an eco-friendly lifestyle.",
      supportVi: "Gợi ý: Đề cập việc mang bình nước tái sử dụng, tắt thiết bị điện khi ra khỏi lớp và đi bộ hoặc đi xe đạp.",
      minWords: 80,
      maxWords: 120,
      requiredVocabularyIds: ["v-1", "v-2", "v-3"],
      requiredGrammarIds: ["g-1"],
      planningQuestions: [
        "What is one major source of waste in your classroom?",
        "What specific action can students take every morning?",
        "How will this habit lower your community's carbon footprint?"
      ],
      rubric: [
        {
          criterion: "TASK_ACHIEVEMENT",
          maxScore: 2.5,
          bands: [
            { score: 2.5, descriptorVi: "Đạt đầy đủ yêu cầu đề bài, đề xuất 2-3 giải pháp thực tế." },
            { score: 2.0, descriptorVi: "Đạt hầu hết các yêu cầu, ý tưởng cơ bản." },
            { score: 1.5, descriptorVi: "Chưa đủ số từ hoặc đề xuất còn chung chung." },
          ],
        },
        {
          criterion: "LEXICAL_RESOURCE",
          maxScore: 2.5,
          bands: [
            { score: 2.5, descriptorVi: "Sử dụng chính xác và linh hoạt ít nhất 3 từ vựng chủ đề môi trường." },
            { score: 2.0, descriptorVi: "Có sử dụng từ vựng bài học, đôi chỗ còn gượng gạo." },
            { score: 1.5, descriptorVi: "Vốn từ hạn chế, lặp từ đơn giản." },
          ],
        },
        {
          criterion: "GRAMMAR",
          maxScore: 2.5,
          bands: [
            { score: 2.5, descriptorVi: "Áp dụng chính xác câu bị động hoặc câu điều kiện, không mắc lỗi chia thì." },
            { score: 2.0, descriptorVi: "Có sử dụng ngữ pháp trọng tâm, một vài lỗi chính tả nhỏ." },
            { score: 1.5, descriptorVi: "Nhiều lỗi ngữ pháp cơ bản làm ảnh hưởng tới câu." },
          ],
        },
        {
          criterion: "COHERENCE",
          maxScore: 2.5,
          bands: [
            { score: 2.5, descriptorVi: "Bố cục đoạn văn mạch lạc, liên kết ý tự nhiên (Firstly, In addition, Consequently)." },
            { score: 2.0, descriptorVi: "Có từ nối cơ bản, đoạn văn tương đối rõ ràng." },
            { score: 1.5, descriptorVi: "Thiếu từ nối, các câu còn rời rạc." },
          ],
        },
      ],
    },
    qualityReport: {
      schemaValid: true,
      answerConsistency: 1.0,
      vocabularyCoverage: 1.0,
      grammarCoverage: 1.0,
      naturalnessScore: 0.95,
      examAlignmentScore: 0.95,
      warnings: [],
    },
  };

  const gateResult = evaluateServerQualityGate(mockPackage, mockLexical);
  console.log("\n- Quality Gate Verification Results:");
  console.log(`  * Gate Passed: ${gateResult.passed}`);
  console.log(`  * Lexical Coverage: ${(gateResult.lexicalCoverage * 100).toFixed(0)}% (Standard >= 80%)`);
  console.log(`  * Grammar Coverage: ${(gateResult.grammarCoverage * 100).toFixed(0)}%`);
  console.log(`  * Single Answer Valid: ${gateResult.singleAnswerValid}`);
  console.log(`  * Word Count Verified: ${gateResult.actualWordCount} words`);
  console.log(`  * Warnings Count: ${gateResult.warnings.length}`);

  if (!gateResult.passed) {
    throw new Error(`Quality Gate failed: ${JSON.stringify(gateResult.warnings)}`);
  }

  console.log("\n=== 4. Testing Full Package Zod Schema Conformance ===");
  const parsePkg = LingoQuestUnitPackageSchema.safeParse(mockPackage);
  if (!parsePkg.success) {
    console.error("Zod Schema Issues:", parsePkg.error.issues);
    throw new Error("LingoQuestUnitPackageSchema failed on mock package");
  }
  console.log("✓ LingoQuestUnitPackageSchema validated 100% successfully!");

  console.log("\n🎉 ALL PIPELINE INTEGRATION TESTS PASSED! SPRINTS 1, 2, 3, 4 COMPLETED!");
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
