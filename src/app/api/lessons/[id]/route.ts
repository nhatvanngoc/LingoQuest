import { NextResponse } from "next/server";
import { getLessonBySlugOrId } from "@/db/queries";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Thiếu ID bài học" }, { status: 400 });
    }

    const lesson = await getLessonBySlugOrId(id);
    if (!lesson) {
      return NextResponse.json({ error: "Không tìm thấy bài học" }, { status: 404 });
    }

    // Sinh câu hỏi trắc nghiệm tự động từ danh sách từ vựng nếu có
    const vocabList = lesson.vocab || [];
    const questions = vocabList.map((v, i) => {
      // Chọn các đáp án sai từ các từ vựng khác
      const otherMeanings = vocabList
        .filter((_, idx) => idx !== i)
        .map((ov) => ov.meaning);

      const fallbackOptions = ["Thành công", "Nỗ lực", "Kỷ niệm", "Thử thách"];
      const options = [v.meaning];

      for (const m of otherMeanings) {
        if (options.length < 4 && !options.includes(m)) options.push(m);
      }
      for (const fo of fallbackOptions) {
        if (options.length < 4 && !options.includes(fo)) options.push(fo);
      }

      // Xáo trộn ngẫu nhiên vị trí đáp án đúng
      const shuffled = [...options].sort(() => 0.5 - Math.random());
      const answerIndex = shuffled.indexOf(v.meaning);

      return {
        id: `q-${v.id || i}`,
        prompt: `Từ "${v.word}" có nghĩa là gì?`,
        options: shuffled,
        answer: answerIndex >= 0 ? answerIndex : 0,
        explain: `"${v.word}" có nghĩa là: ${v.meaning}. ${v.example ? `Ví dụ: "${v.example}"` : ""}`,
      };
    });

    return NextResponse.json({
      ok: true,
      lesson: {
        id: lesson.id,
        slug: lesson.slug,
        title: lesson.title,
        titleVi: lesson.titleVi ?? "",
        description: lesson.description ?? "",
        youtubeId: lesson.youtubeId,
        thumbnail: lesson.thumbnail ?? "",
        durationLabel: lesson.durationLabel ?? "Video bài học",
        vocab: vocabList.map((v) => ({
          id: v.id,
          word: v.word,
          meaning: v.meaning,
          phonetic: v.phonetic ?? "",
          example: v.example ?? "",
          exampleVi: v.exampleVi ?? "",
          start: v.start,
        })),
        questions,
      },
    });
  } catch (e) {
    console.error("Get lesson detail error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi lấy bài học" }, { status: 500 });
  }
}
