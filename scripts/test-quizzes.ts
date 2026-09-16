import { GRADE_10_CURRICULUM } from '../src/lib/curriculum/grade10-data';
import { GRADE_11_CURRICULUM } from '../src/lib/curriculum/grade11-data';
import { GRADE_12_CURRICULUM } from '../src/lib/curriculum/grade12-data';
import { generate50UnitQuizQuestions } from '../src/lib/curriculum/unit-quiz-generator';

console.log('=== TEST QUIZ GENERATION ACROSS GRADES ===');

const g10_u1 = generate50UnitQuizQuestions(GRADE_10_CURRICULUM[0]);
console.log(`Grade 10 Unit 1: ${g10_u1.length} questions | Categories: ${[...new Set(g10_u1.map(q => q.category))].join(', ')}`);

const g11_u1 = generate50UnitQuizQuestions(GRADE_11_CURRICULUM[0]);
console.log(`Grade 11 Unit 1: ${g11_u1.length} questions | Categories: ${[...new Set(g11_u1.map(q => q.category))].join(', ')}`);

const g12_u6 = GRADE_12_CURRICULUM.find(u => u.slug.includes('artificial-intelligence'))!;
const g12_q = generate50UnitQuizQuestions(g12_u6);
console.log(`Grade 12 Unit 6 (AI): ${g12_q.length} questions | Categories: ${[...new Set(g12_q.map(q => q.category))].join(', ')}`);

// Verify all questions have non-empty explanations
const allHaveExpl = [...g10_u1, ...g11_u1, ...g12_q].every(q => q.explanation && q.explanation.length > 10);
console.log('All questions have pedagogical explanations:', allHaveExpl);
console.log('Sample explanation:', g12_q[0].explanation);
