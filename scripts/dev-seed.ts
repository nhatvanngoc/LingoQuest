// Chạy seed thủ công trong môi trường dev tách biệt (KHÔNG dùng trong app).
// Cách chạy:  npx tsx scripts/dev-seed.ts
import "dotenv/config";
import { seedIfEmpty } from "../src/db/queries";

seedIfEmpty()
  .then(() => {
    console.log("✅ Seed hoàn tất");
    process.exit(0);
  })
  .catch((e) => {
    console.error("❌ Seed lỗi:", e);
    process.exit(1);
  });
