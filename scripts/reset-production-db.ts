import "dotenv/config";
import { Pool } from "pg";
import { scryptSync, randomBytes } from "crypto";

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

async function resetDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set in .env");
  }

  const pool = new Pool({ connectionString });
  const client = await pool.connect();

  try {
    console.log("🔄 Bắt đầu dọn sạch toàn bộ database về trạng thái Production trống...");

    // Xoá toàn bộ dữ liệu demo theo đúng thứ tự ràng buộc khóa ngoại
    const tables = [
      "srs",
      "attempts",
      "submissions",
      "lesson_progress",
      "daily_activity",
      "user_stats",
      "assignments",
      "cards",
      "vocab",
      "decks",
      "class_members",
      "classes",
      "lessons",
      "users",
    ];

    for (const tbl of tables) {
      await client.query(`TRUNCATE TABLE "${tbl}" CASCADE;`);
      console.log(`  - Đã làm trống bảng: ${tbl}`);
    }

    // Tạo 1 tài khoản Admin duy nhất
    const adminEmail = "admin@lingoquest.app";
    const adminPass = "Admin@123456";
    const adminName = "Quản trị viên";
    const adminRole = "teacher"; // Role quản trị/giảng dạy cao nhất trong hệ thống
    const hashedPass = hashPassword(adminPass);

    const userRes = await client.query(
      `INSERT INTO users (name, email, role, password, avatar_color, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())
       RETURNING id, name, email, role;`,
      [adminName, adminEmail, adminRole, hashedPass, "#2563EB"]
    );

    const admin = userRes.rows[0];
    console.log("✅ Đã tạo tài khoản Admin duy nhất thành công:");
    console.log(`   - ID: ${admin.id}`);
    console.log(`   - Tên: ${admin.name}`);
    console.log(`   - Email: ${admin.email}`);
    console.log(`   - Mật khẩu: ${adminPass}`);
    console.log(`   - Role: ${admin.role}`);

    // Khởi tạo bảng thống kê cho Admin
    await client.query(
      `INSERT INTO user_stats (user_id, xp, streak, words_learned, level)
       VALUES ($1, 0, 0, 0, 1);`,
      [admin.id]
    );
    console.log("  - Đã khởi tạo bảng user_stats cho admin (xp: 0, streak: 0, words: 0, level: 1)");

    // Kiểm tra tổng số bản ghi các bảng
    const countRes = await client.query(`
      SELECT 
        (SELECT COUNT(*) FROM users) as users_count,
        (SELECT COUNT(*) FROM lessons) as lessons_count,
        (SELECT COUNT(*) FROM decks) as decks_count,
        (SELECT COUNT(*) FROM assignments) as assignments_count,
        (SELECT COUNT(*) FROM submissions) as submissions_count
    `);
    console.log("📊 Trạng thái Database sau khi reset:", countRes.rows[0]);

  } finally {
    client.release();
    await pool.end();
  }
}

resetDb()
  .then(() => {
    console.log("🎉 Hoàn tất đặt lại Database từ đầu! Sẵn sàng cho production.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Lỗi khi reset database:", err);
    process.exit(1);
  });
