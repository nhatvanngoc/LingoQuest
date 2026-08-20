import { AppShell } from "@/components/AppShell";
import { LessonLibrary } from "@/components/LessonLibrary";
import { getLessonsWithVocab, getOverview, seedIfEmpty } from "@/db/queries";
import { LESSONS } from "@/lib/mock/data";

/* Trang Thư viện bài học — SERVER COMPONENT đọc từ PostgreSQL.
   Tự seed dữ liệu mẫu nếu CSDL trống (chạy lần đầu). */

export const dynamic = "force-dynamic";

// Tiến độ demo theo slug (thực tế sẽ lưu bảng lesson_progress theo user)
const PROGRESS: Record<string, number> = { "lesson-1": 40, "lesson-2": 0 };

export default async function LearnLibraryPage() {
  let lessons;
  try {
    await seedIfEmpty();
    const rows = await getLessonsWithVocab();
    lessons = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      titleVi: r.titleVi,
      description: r.description,
      thumbnail: r.thumbnail,
      durationLabel: r.durationLabel,
      vocabCount: r.vocabCount,
      progress: PROGRESS[r.slug] ?? 0,
    }));
  } catch {
    // Không có DB (demo) → dùng LESSONS mock để thư viện không trống
    lessons = LESSONS.map((l) => ({
      slug: l.id,
      title: l.title,
      titleVi: l.titleVi,
      description: l.description,
      thumbnail: l.thumbnail,
      durationLabel: l.durationLabel,
      vocabCount: (l.vocab ?? []).length,
      progress: PROGRESS[l.id] ?? 0,
    }));
  }

  let overview = { lessons: 0, vocab: 0, decks: 0, users: 0, assignments: 0 };
  try {
    overview = await getOverview();
  } catch {
    overview = {
      lessons: lessons.length,
      vocab: LESSONS.reduce((n, l) => n + (l.vocab?.length ?? 0), 0),
      decks: 0,
      users: 0,
      assignments: 0,
    };
  }

  return (
    <AppShell>
      <LessonLibrary lessons={lessons} overview={overview} />
    </AppShell>
  );
}
