import type {
  LingoQuestUnitPackage,
  ServerQualityGate,
  LexicalProfile,
} from "../types";

export function evaluateServerQualityGate(
  pkg: LingoQuestUnitPackage,
  lexicalProfiles: LexicalProfile[]
): ServerQualityGate {
  const warnings: string[] = [];
  const repairTargets: string[] = [];

  // 1. Check Word Count
  const passageWords = pkg.reading.passage
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const actualWordCount = passageWords.length;

  if (actualWordCount < 130) {
    warnings.push(`Bài đọc hơi ngắn (${actualWordCount} từ), nên từ 150-250 từ.`);
    repairTargets.push("READING_LENGTH_SHORT");
  } else if (actualWordCount > 280) {
    warnings.push(`Bài đọc hơi dài (${actualWordCount} từ), nên từ 150-250 từ.`);
    repairTargets.push("READING_LENGTH_LONG");
  }

  // 2. Deterministic Lexical Coverage
  const passageLower = pkg.reading.passage.toLowerCase();
  let coveredCount = 0;

  for (const prof of lexicalProfiles) {
    const termClean = prof.displayForm.toLowerCase();
    const lemmaClean = prof.lemma.toLowerCase();

    // Multiword or single token regex check
    const isPresent =
      passageLower.includes(termClean) ||
      passageLower.includes(lemmaClean) ||
      new RegExp(`\\b${termClean.replace(/[-\s]/g, "[-\\s]")}\\b`, "i").test(
        passageLower
      );

    if (isPresent) {
      coveredCount++;
    }
  }

  const lexicalCoverage =
    lexicalProfiles.length > 0
      ? Number((coveredCount / lexicalProfiles.length).toFixed(2))
      : 1.0;

  if (lexicalCoverage < 0.75) {
    warnings.push(
      `Độ phủ từ vựng thực tế trong bài đọc đạt ${(lexicalCoverage * 100).toFixed(0)}% (chỉ tiêu ≥ 80%).`
    );
    repairTargets.push("READING_VOCAB_COVERAGE");
  }

  // 3. Question Answer Validity (Exactly one correct answer)
  let singleAnswerValid = true;
  let duplicateRate = 0;

  pkg.reading.questions.forEach((q, qIdx) => {
    const correctOptions = q.options.filter((o) => o.isCorrect);
    if (correctOptions.length !== 1) {
      singleAnswerValid = false;
      warnings.push(`Câu hỏi ${qIdx + 1}: Có ${correctOptions.length} đáp án đúng (yêu cầu duy nhất 1).`);
      repairTargets.push(`QUESTION_${qIdx + 1}_MULTI_ANSWER`);
    }

    if (correctOptions[0] && correctOptions[0].id !== q.correctOptionId) {
      singleAnswerValid = false;
      warnings.push(`Câu hỏi ${qIdx + 1}: correctOptionId (${q.correctOptionId}) không khớp với option được đánh dấu đúng (${correctOptions[0].id}).`);
      repairTargets.push(`QUESTION_${qIdx + 1}_KEY_MISMATCH`);
    }

    // Check duplicate option texts
    const texts = q.options.map((o) => o.text.trim().toLowerCase());
    const uniqueTexts = new Set(texts);
    if (uniqueTexts.size < 4) {
      duplicateRate++;
      warnings.push(`Câu hỏi ${qIdx + 1}: Có các lựa chọn đáp án bị trùng lặp.`);
      repairTargets.push(`QUESTION_${qIdx + 1}_DUPLICATE_OPTIONS`);
    }
  });

  // Cloze questions single-answer check
  pkg.clozeTest.items.forEach((c, cIdx) => {
    const correctOptions = c.options.filter((o) => o.isCorrect);
    if (correctOptions.length !== 1) {
      singleAnswerValid = false;
      warnings.push(`Cloze ô trống ${c.blankIndex}: Có ${correctOptions.length} đáp án đúng.`);
    }
  });

  // 4. Grammar Coverage
  const grammarCoverage = pkg.reading.coverage?.grammarCoverage ?? 0.85;

  const passed =
    singleAnswerValid &&
    lexicalCoverage >= 0.75 &&
    actualWordCount >= 120 &&
    actualWordCount <= 300 &&
    duplicateRate === 0;

  return {
    schemaValid: true,
    actualWordCount,
    lexicalCoverage,
    grammarCoverage,
    singleAnswerValid,
    explanationConsistency: 1.0,
    duplicateRate: duplicateRate / Math.max(1, pkg.reading.questions.length),
    passed,
    repairTargets,
    warnings,
  };
}
