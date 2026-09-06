import { AppShell } from "@/components/AppShell";
import { LessonLibrary } from "@/components/LessonLibrary";
import { getLessonsWithVocab, getOverview } from "@/db/queries";

/* Trang Thư viện bài học — SERVER COMPONENT đọc từ PostgreSQL thật (Production-Ready).
   Không mock dữ liệu. */

export const dynamic = "force-dynamic";

export default async function LearnLibraryPage() {
  let lessons: {
    slug: string;
    title: string;
    titleVi: string;
    description: string;
    thumbnail: string;
    durationLabel: string;
    vocabCount: number;
    progress: number;
  }[] = [];

  try {
    const rows = await getLessonsWithVocab();
    lessons = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      titleVi: r.titleVi,
      description: r.description,
      thumbnail: r.thumbnail,
      durationLabel: r.durationLabel,
      vocabCount: r.vocabCount,
      progress: 0,
    }));
  } catch (e) {
    console.error("Failed to load lessons from DB:", e);
    lessons = [];
  }

  let overview = { lessons: 0, vocab: 0, decks: 0, users: 0, assignments: 0 };
  try {
    overview = await getOverview();
  } catch (e) {
    console.error("Failed to load DB overview:", e);
  }

  return (
    <AppShell>
      <LessonLibrary lessons={lessons} overview={overview} />
    </AppShell>
  );
}
