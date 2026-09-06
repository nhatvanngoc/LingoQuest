import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/auth/session";
import { createAssignment, createDeckWithCards } from "@/db/queries";
import { normalizeVideoUrl } from "@/lib/video";

export const dynamic = "force-dynamic";

/* Giao bài tập mới (giáo viên). */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được giao bài" }, { status: 403 });

    const body = (await req.json().catch(() => null)) as {
      title?: unknown;
      description?: unknown;
      videoUrl?: unknown;
      prompt?: unknown;
      lessonId?: unknown;
      dueAt?: unknown;
      content?: any;
    } | null;

    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const description = typeof body?.description === "string" ? body.description.trim() : "";
    const rawVideoUrl = typeof body?.videoUrl === "string" ? body.videoUrl.trim() : "";
    const videoUrl = normalizeVideoUrl(rawVideoUrl);
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : (body?.content?.writingPrompt?.prompt || "");
    const content = body?.content || null;
    if (content && typeof content.videoUrl === "string") {
      content.videoUrl = normalizeVideoUrl(content.videoUrl);
    }

    if (!title) return NextResponse.json({ error: "Thiếu tiêu đề bài tập" }, { status: 400 });

    let finalDeckId: string | null = null;

    // Nếu có danh sách từ vựng trong content, tự động tạo bộ flashcard tương ứng
    if (content && Array.isArray(content.vocabulary) && content.vocabulary.length > 0) {
      const validCards = content.vocabulary
        .filter((c: any) => typeof c.word === "string" && c.word.trim())
        .map((c: any) => ({
          front: c.word.trim(),
          back: (c.meaning || "").trim(),
          phonetic: (c.phonetic || "").trim(),
          example: (c.example || "").trim(),
          exampleVi: (c.exampleVi || "").trim(),
        }));

      if (validCards.length > 0) {
        const newDeck = await createDeckWithCards({
          title: `Từ vựng: ${title}`,
          createdBy: user.id,
          cards: validCards,
        });
        finalDeckId = newDeck.id;
      }
    }

    const row = await createAssignment({
      title,
      type: "exercise",
      description,
      prompt,
      videoUrl,
      content,
      lessonId: typeof body?.lessonId === "string" && body.lessonId ? body.lessonId : null,
      deckId: finalDeckId,
      dueAt: typeof body?.dueAt === "string" && body.dueAt ? new Date(body.dueAt) : null,
    });

    revalidatePath("/dashboard");
    revalidatePath("/teacher");
    revalidatePath("/learn");

    return NextResponse.json(
      { ok: true, id: row.id, deckId: finalDeckId },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (e) {
    console.error("Create assignment error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}

/* Lấy danh sách bài tập đã giao (giáo viên) */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới có quyền xem" }, { status: 403 });

    const { getTeacherAssignments } = await import("@/db/queries");
    const list = await getTeacherAssignments();
    return NextResponse.json(
      { ok: true, assignments: list },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (e) {
    console.error("Get teacher assignments error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}

/* Xóa bài tập trực tiếp trên web (không cần vào SQL) */
export async function DELETE(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới có quyền xóa" }, { status: 403 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Thiếu ID bài tập cần xóa" }, { status: 400 });

    const { deleteAssignment } = await import("@/db/queries");
    const deleted = await deleteAssignment(id);

    revalidatePath("/dashboard");
    revalidatePath("/teacher");
    revalidatePath("/learn");

    return NextResponse.json(
      { ok: true, deleted },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (e) {
    console.error("Delete assignment error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi xóa bài tập" }, { status: 500 });
  }
}

/* Bật / tắt ẩn hiện bài tập (published <-> hidden) */
export async function PATCH(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới có quyền thay đổi trạng thái" }, { status: 403 });

    const body = await req.json().catch(() => ({}));
    const { id, status } = body;
    if (!id) return NextResponse.json({ error: "Thiếu ID bài tập" }, { status: 400 });

    const { toggleAssignmentStatus } = await import("@/db/queries");
    const updated = await toggleAssignmentStatus(id, status);

    revalidatePath("/dashboard");
    revalidatePath("/teacher");
    revalidatePath("/learn");

    return NextResponse.json(
      { ok: true, assignment: updated },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (e) {
    console.error("Toggle assignment status error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi cập nhật trạng thái bài tập" }, { status: 500 });
  }
}

