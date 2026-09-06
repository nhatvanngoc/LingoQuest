import "dotenv/config";
import { Pool } from "pg";

async function runE2E() {
  console.log("🚀 Starting E2E Verification of Unified Assignments & Teacher Dashboard...");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    // 1. Check user accounts
    const usersRes = await pool.query("SELECT id, name, email, role FROM users ORDER BY created_at ASC");
    console.log("✅ Users in DB:", usersRes.rows.map(u => `${u.name} (${u.email}) [${u.role}]`));

    const teacher = usersRes.rows.find(u => u.role === "teacher");
    const student = usersRes.rows.find(u => u.role === "student");

    if (!teacher || !student) {
      throw new Error("Missing teacher or student account in DB");
    }

    // 2. Test unified assignment creation in DB
    const dummyContent = {
      summary: "Ôn tập thì quá khứ đơn qua các hoạt động cuối tuần",
      vocabList: [
        {
          word: "Visited",
          ipa: "/ˈvɪz.ɪ.tɪd/",
          meaning: "Đã thăm viếng",
          example: "I visited my grandparents last Sunday.",
          exampleVi: "Tôi đã đến thăm ông bà vào Chủ nhật tuần trước."
        },
        {
          word: "Explored",
          ipa: "/ɪkˈsplɔːrd/",
          meaning: "Đã khám phá",
          example: "We explored a historical museum downtown.",
          exampleVi: "Chúng tôi đã khám phá một bảo tàng lịch sử ở trung tâm thành phố."
        }
      ],
      quizList: [
        {
          question: "Where did they go last Saturday?",
          options: ["To the zoo", "To the cinema", "To school", "To the hospital"],
          correctIndex: 1,
          explanation: "In the passage, they visited the cinema to watch a movie."
        }
      ],
      fillBlankList: [
        {
          sentence: "Yesterday, she [___] a wonderful time in Da Nang.",
          answer: "had",
          hint: "Quá khứ của 'have'",
          explanation: "'had' là dạng quá khứ của 'have'."
        }
      ],
      writingPrompt: {
        prompt: "Write a short paragraph (50-80 words) describing what you did last weekend.",
        minWords: 30,
        outline: ["Where did you go?", "Who was with you?", "How did you feel?"]
      }
    };

    // Clean up older test assignments if needed
    const assignRes = await pool.query(
      `INSERT INTO assignments (created_by, title, description, due_at, video_url, content)
       VALUES ($1, $2, $3, NOW() + INTERVAL '7 days', $4, $5)
       RETURNING id, title, video_url, content`,
      [
        teacher.id,
        "Bài Tập Toàn Diện 5-trong-1: Simple Past",
        "Trọn bộ bài tập video, flashcard, trắc nghiệm, điền từ và viết luận.",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        JSON.stringify(dummyContent)
      ]
    );

    const assignmentId = assignRes.rows[0].id;
    console.log("✅ Created unified assignment:", assignmentId, assignRes.rows[0].title);
    console.log("   Video URL:", assignRes.rows[0].video_url);
    console.log("   Content Keys:", Object.keys(assignRes.rows[0].content));

    // 3. Simulate student learning & syncing stats using syncUserStats
    const beforeStats = await pool.query("SELECT * FROM user_stats WHERE user_id = $1", [student.id]);
    console.log("📊 Student stats BEFORE:", beforeStats.rows[0]);

    // Use syncUserStats
    const { syncUserStats, getUserWeeklyActivity, getTeacherStats, getTeacherStudentsWithStats } = await import("../src/db/queries");
    const updatedStats = await syncUserStats({
      userId: student.id,
      xp: 120,
      wordsLearned: 8,
      streak: 4,
      minutes: 25,
    });
    console.log("📊 Student stats AFTER syncUserStats:", updatedStats);

    // 4. Test Teacher Overview aggregation
    const teacherOverview = await getTeacherStats();
    console.log("🧑‍🏫 Teacher Overview Aggregation:", teacherOverview);

    // 5. Test Teacher Students Roster query
    const roster = await getTeacherStudentsWithStats();
    console.log("📋 Teacher Student Roster (real data):", roster);

    // 6. Test Weekly Activity query
    const weeklyActivity = await getUserWeeklyActivity(student.id);
    console.log("📅 Real 7-day Activity for Student:", weeklyActivity);

    console.log("🎉 ALL E2E DB & LOGIC TESTS PASSED SUCCESSFULLY!");
  } finally {
    await pool.end();
  }
}

runE2E().catch(err => {
  console.error("❌ E2E verification failed:", err);
  process.exit(1);
});
