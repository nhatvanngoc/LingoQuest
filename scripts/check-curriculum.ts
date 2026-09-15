import { GRADE_10_CURRICULUM } from '../src/lib/curriculum/grade10-data';
import { GRADE_11_CURRICULUM } from '../src/lib/curriculum/grade11-data';
import { GRADE_12_CURRICULUM } from '../src/lib/curriculum/grade12-data';

console.log('=== GRADE 10 ===');
GRADE_10_CURRICULUM.forEach(u => console.log(`${u.slug}: ${u.vocabulary?.length || 0} từ`));

console.log('\n=== GRADE 11 ===');
GRADE_11_CURRICULUM.forEach(u => console.log(`${u.slug}: ${u.vocabulary?.length || 0} từ`));

console.log('\n=== GRADE 12 ===');
GRADE_12_CURRICULUM.forEach(u => console.log(`${u.slug}: ${u.vocabulary?.length || 0} từ`));
