import "dotenv/config";
import { Pool } from "pg";

async function migrate() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    console.log("Adding video_url and content jsonb to assignments table...");
    await pool.query(`
      ALTER TABLE assignments 
      ADD COLUMN IF NOT EXISTS video_url text DEFAULT '',
      ADD COLUMN IF NOT EXISTS content jsonb DEFAULT '{}'::jsonb;
    `);
    console.log("Migration complete!");
  } finally {
    await pool.end();
  }
}

migrate().catch(console.error);
