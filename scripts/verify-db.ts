import "dotenv/config";
import { Pool } from "pg";

async function check() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    const users = await pool.query(
      "SELECT id, name, email, role, avatar_color, created_at FROM users ORDER BY created_at ASC"
    );
    console.log("=== USERS IN DATABASE ===");
    console.table(users.rows);

    const stats = await pool.query("SELECT * FROM user_stats");
    console.log("=== USER STATS ===");
    console.table(stats.rows);

    const countRes = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM users) as users_count,
        (SELECT COUNT(*) FROM lessons) as lessons_count,
        (SELECT COUNT(*) FROM decks) as decks_count,
        (SELECT COUNT(*) FROM assignments) as assignments_count,
        (SELECT COUNT(*) FROM submissions) as submissions_count
    `);
    console.log("=== TABLE COUNTS ===");
    console.table(countRes.rows);

    const tablesRes = await pool.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public'"
    );
    console.log("=== ALL PUBLIC TABLES ===");
    console.log(tablesRes.rows.map((r) => r.table_name));

    const assignCols = await pool.query(
      "SELECT column_name, data_type FROM information_schema.columns WHERE table_name='assignments'"
    );
    console.log("=== ASSIGNMENTS COLUMNS ===");
    console.table(assignCols.rows);
  } finally {
    await pool.end();
  }
}

check().catch(console.error);
