import * as fs from "fs";
import * as path from "path";
import { RICH_VOCAB_GRADE10 } from "./data-grade10-rich";
import { RICH_VOCAB_GRADE12 } from "./data-grade12-rich";
import { GRADE_10_CURRICULUM } from "../src/lib/curriculum/grade10-data";
import { GRADE_12_CURRICULUM } from "../src/lib/curriculum/grade12-data";

// 1. Merge Grade 10
const updatedG10 = GRADE_10_CURRICULUM.map((unit) => {
  const extra = RICH_VOCAB_GRADE10[unit.slug];
  if (!extra || extra.length === 0) return unit;

  const existingIds = new Set(unit.vocabulary.map((v) => v.id));
  const newItems = extra.filter((v) => !existingIds.has(v.id));

  return {
    ...unit,
    vocabulary: [...unit.vocabulary, ...newItems],
  };
});

// 2. Merge Grade 12
const updatedG12 = GRADE_12_CURRICULUM.map((unit) => {
  const extra = RICH_VOCAB_GRADE12[unit.slug];
  if (!extra || extra.length === 0) return unit;

  const existingIds = new Set(unit.vocabulary.map((v) => v.id));
  const newItems = extra.filter((v) => !existingIds.has(v.id));

  return {
    ...unit,
    vocabulary: [...unit.vocabulary, ...newItems],
  };
});

// Helper to format output TypeScript file
function formatCurriculumFile(gradeNum: number, curriculumData: any[]) {
  return `/* Grade ${gradeNum} Global Success Curriculum Data
   Syllabus: Bộ Giáo dục và Đào tạo • Global Success (Kết nối tri thức)
   Extracted & Curated via Playwright MCP from Loigiaihay, VietJack & Tech12h
   10 Units + 4 Reviews with full vocabulary, IPA, audio, examples & grammar.
*/

export interface Grade${gradeNum}VocabItem {
  id: string;
  word: string;
  partOfSpeech: string;
  meaningVi: string;
  ipa: string;
  audioUrl: string;
  imageUrl?: string;
  exampleEn: string;
  exampleVi: string;
  collocations?: string[];
}

export interface Grade${gradeNum}Section {
  id: string;
  title: string;
  description: string;
  url?: string;
}

export interface Grade${gradeNum}Unit {
  id: string;
  slug: string;
  unitNumber: number;
  isReview?: boolean;
  titleEn: string;
  titleVi: string;
  topic: string;
  cefrLevel: string;
  term: 1 | 2;
  vocabUrl?: string;
  grammarUrl?: string;
  grammarTitle: string;
  grammarSummary: string;
  grammarHtml?: string;
  sections: Grade${gradeNum}Section[];
  vocabulary: Grade${gradeNum}VocabItem[];
}

export const GRADE_${gradeNum}_CURRICULUM: Grade${gradeNum}Unit[] = ${JSON.stringify(curriculumData, null, 2)};

export function getGrade${gradeNum}UnitBySlug(slug: string): Grade${gradeNum}Unit | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();

  // 1. Exact match by slug or id
  const exact = GRADE_${gradeNum}_CURRICULUM.find((u) => u.slug.toLowerCase() === clean || u.id.toLowerCase() === clean);
  if (exact) return exact;

  // 2. Unit number match (e.g. "unit-1", "unit1", "u1", "1")
  const unitNumMatch = clean.match(/^(?:unit-?|u)?(\\d+)$/i);
  if (unitNumMatch) {
    const num = parseInt(unitNumMatch[1], 10);
    const byNum = GRADE_${gradeNum}_CURRICULUM.find((u) => !u.isReview && u.unitNumber === num);
    if (byNum) return byNum;
  }

  // 3. Review match (e.g. "review-1", "review1", "r1")
  const reviewMatch = clean.match(/^(?:review-?|r)(\\d+)$/i);
  if (reviewMatch) {
    const revNum = parseInt(reviewMatch[1], 10);
    const byRev = GRADE_${gradeNum}_CURRICULUM.find((u) => u.isReview && (u.id.endsWith(\`r\${revNum}\`) || u.slug.includes(\`review-\${revNum}\`)));
    if (byRev) return byRev;
  }

  // 4. Prefix or containment match
  const byPrefix = GRADE_${gradeNum}_CURRICULUM.find((u) => u.slug.toLowerCase().startsWith(clean + "-") || clean.startsWith(u.slug.toLowerCase() + "-"));
  if (byPrefix) return byPrefix;

  return undefined;
}

export function getGrade${gradeNum}UnitsByTerm(term: 1 | 2): Grade${gradeNum}Unit[] {
  return GRADE_${gradeNum}_CURRICULUM.filter((u) => u.term === term);
}
`;
}

// Write files
const g10Path = path.join(__dirname, "../src/lib/curriculum/grade10-data.ts");
fs.writeFileSync(g10Path, formatCurriculumFile(10, updatedG10), "utf8");
console.log("✅ Đã cập nhật xong Grade 10");

const g12Path = path.join(__dirname, "../src/lib/curriculum/grade12-data.ts");
fs.writeFileSync(g12Path, formatCurriculumFile(12, updatedG12), "utf8");
console.log("✅ Đã cập nhật xong Grade 12");
