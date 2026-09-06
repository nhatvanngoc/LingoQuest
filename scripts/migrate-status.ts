import "dotenv/config";
import { Pool } from "pg";

async function run() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    console.log("Checking and altering columns in PostgreSQL...");
    await pool.query(`
      ALTER TABLE assignments ADD COLUMN IF NOT EXISTS status varchar(20) DEFAULT 'published';
      ALTER TABLE lessons ADD COLUMN IF NOT EXISTS status varchar(20) DEFAULT 'published';
    `);
    console.log("✅ Successfully ensured 'status' column exists in 'assignments' and 'lessons' tables!");
  } finally {
    await pool.end();
  }
}

run().catch(console.error);
