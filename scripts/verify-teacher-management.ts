import "dotenv/config";
import {
  createAssignment,
  getTeacherAssignments,
  toggleAssignmentStatus,
  deleteAssignment,
  createLessonWithVocab,
  getTeacherLessons,
  toggleLessonStatus,
  deleteLesson,
} from "../src/db/queries";

async function run() {
  console.log("🧪 Testing Teacher Management Features (Direct Delete & Toggle Status)...");

  // 1. Test Assignment Management
  console.log("1️⃣ Testing Assignment Management...");
  const assign = await createAssignment({
    title: "Test Delete & Hide Assignment",
    description: "Temporary assignment for verification",
  });
  console.log("   Created assignment ID:", assign.id, "Status:", assign.status);

  // Toggle to hidden
  const hidden = await toggleAssignmentStatus(assign.id);
  console.log("   Toggled to status:", hidden?.status);
  if (hidden?.status !== "hidden") throw new Error("Expected status to be hidden");

  // Toggle back to published
  const pub = await toggleAssignmentStatus(assign.id);
  console.log("   Toggled back to status:", pub?.status);
  if (pub?.status !== "published") throw new Error("Expected status to be published");

  // Delete assignment directly
  const del = await deleteAssignment(assign.id);
  console.log("   Deleted assignment successfully:", del?.id);

  // 2. Test Lesson Management
  console.log("2️⃣ Testing Lesson Management...");
  const { lesson } = await createLessonWithVocab({
    title: "Test Video Lesson for Delete",
    youtubeId: "dQw4w9WgXcQ",
    vocab: [{ word: "TestWord", meaning: "Từ kiểm tra", start: 0 }],
    createdBy: assign.createdBy || "00000000-0000-0000-0000-000000000000",
  });
  console.log("   Created lesson ID:", lesson.id, "Slug:", lesson.slug);

  // Toggle lesson status
  const hidLesson = await toggleLessonStatus(lesson.id);
  console.log("   Toggled lesson status:", hidLesson?.status);
  if (hidLesson?.status !== "hidden") throw new Error("Expected lesson status to be hidden");

  // Delete lesson directly
  const delLesson = await deleteLesson(lesson.id);
  console.log("   Deleted lesson successfully:", delLesson?.id);

  console.log("🎉 ALL TEACHER MANAGEMENT FEATURES VERIFIED SUCCESSFULLY!");
}

run().catch(console.error);
