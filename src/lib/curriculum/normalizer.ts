/**
 * Stage A — Normalizer (Deterministic Input Parser)
 * Parses raw teacher input, cleans noise, extracts multiwords, notes, and tags source indices.
 */

export interface NormalizedItem {
  sourceIndex: number;
  rawText: string;
  term: string;
  normalizedTerm: string;
  note?: string;
  isMultiword: boolean;
  isInvalid: boolean;
  invalidReason?: string;
}

export interface NormalizationResult {
  vocabulary: NormalizedItem[];
  grammarTargets: string[];
  warnings: string[];
}

export function normalizeUnicode(str: string): string {
  return str.normalize("NFC").trim();
}

export function cleanPunctuation(str: string): string {
  return str.replace(/^[•\-\*\d\.\,\;\:\s]+/, "").trim();
}

/**
 * Parses raw vocabulary and grammar text inputs from teacher
 */
export function normalizeTeacherInput(
  rawVocabulary: string,
  rawGrammar: string
): NormalizationResult {
  const warnings: string[] = [];
  const normalizedVocab: NormalizedItem[] = [];
  const seenTerms = new Set<string>();

  // 1. Tách dòng & dấu phẩy
  const rawLines = rawVocabulary
    .split(/[\r\n]+/)
    .flatMap((line) => line.split(/[,;\t]+/))
    .map((item) => normalizeUnicode(cleanPunctuation(item)))
    .filter((item) => item.length > 0);

  rawLines.forEach((raw, idx) => {
    let term = raw;
    let note: string | undefined;

    // Tách ghi chú trong ngoặc: adopt (a green lifestyle)
    const parenMatch = term.match(/^(.+?)\s*\((.+?)\)$/);
    if (parenMatch) {
      const base = parenMatch[1].trim();
      const parenContent = parenMatch[2].trim();
      note = parenContent;
      // Nếu ngoặc chứa phần mở rộng của collocate thì giữ nguyên ngữ nghĩa
      if (base.toLowerCase().startsWith("be ") || base.toLowerCase().startsWith("take ")) {
        term = `${base} ${parenContent}`.trim();
      } else {
        term = `${base} (${parenContent})`.trim();
      }
    }

    const cleanTerm = term.replace(/[()]/g, "").replace(/\s+/g, " ").trim();
    const normalizedKey = cleanTerm.toLowerCase().replace(/[-_]/g, " ");

    // Validation checks
    let isInvalid = false;
    let invalidReason: string | undefined;

    // Quá dài (> 60 ký tự hoặc > 8 từ -> có thể dán nhầm câu)
    const wordCount = cleanTerm.split(/\s+/).length;
    if (cleanTerm.length > 80 || wordCount > 8) {
      isInvalid = true;
      invalidReason = "Độ dài quá lớn, có thể là câu bài tập bị dán nhầm";
      warnings.push(`Dòng ${idx + 1}: Bỏ qua "${cleanTerm.slice(0, 30)}..." do quá dài.`);
    }

    // Kiểm tra URL
    if (/https?:\/\/[^\s]+/i.test(cleanTerm)) {
      isInvalid = true;
      invalidReason = "Chứa URL";
      warnings.push(`Dòng ${idx + 1}: Phát hiện URL trong danh sách từ vựng.`);
    }

    // Dò trùng lặp (ví dụ: environment-friendly vs environmentally friendly)
    if (seenTerms.has(normalizedKey)) {
      return; // Bỏ qua trùng lặp
    }
    seenTerms.add(normalizedKey);

    normalizedVocab.push({
      sourceIndex: idx + 1,
      rawText: raw,
      term: cleanTerm,
      normalizedTerm: normalizedKey,
      note,
      isMultiword: wordCount > 1,
      isInvalid,
      invalidReason,
    });
  });

  // 2. Parse grammar targets
  const grammarTargets = rawGrammar
    .split(/[\r\n,;]+/)
    .map((g) => normalizeUnicode(cleanPunctuation(g)))
    .filter((g) => g.length >= 2);

  return {
    vocabulary: normalizedVocab.filter((v) => !v.isInvalid),
    grammarTargets,
    warnings,
  };
}
