import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as unknown as {
  __arenaNextJsPostgresqlPool?: Pool;
  __arenaNextJsDrizzle?: ReturnType<typeof drizzle>;
};

let pool: Pool | null = null;
let dbInstance: ReturnType<typeof drizzle> | null = null;

if (databaseUrl) {
  try {
    pool =
      globalForDb.__arenaNextJsPostgresqlPool ??
      new Pool({
        connectionString: databaseUrl,
      });

    if (process.env.NODE_ENV !== "production") {
      globalForDb.__arenaNextJsPostgresqlPool = pool;
    }

    dbInstance =
      globalForDb.__arenaNextJsDrizzle ??
      (drizzle(pool, { schema }) as any);

    if (process.env.NODE_ENV !== "production") {
      globalForDb.__arenaNextJsDrizzle = dbInstance as any;
    }
  } catch (e) {
    console.warn("[db] Failed to init pool, running in mock mode", e);
  }
}

export { pool };

// Proxy that throws meaningful error only when actually queried without DB
export const db = new Proxy(
  {},
  {
    get(_, prop) {
      if (!dbInstance) {
        // Return a function that throws when called in a query, but allow import to succeed
        if (prop === "select" || prop === "insert" || prop === "update" || prop === "delete" || prop === "execute") {
          return () => {
            throw new Error("DATABASE_URL is required - running in mock mode");
          };
        }
        // For other props, mimic empty to avoid crash at import time
        return () => {
          throw new Error("DATABASE_URL is required - running in mock mode");
        };
      }
      // @ts-ignore
      return dbInstance[prop as any];
    },
  }
) as unknown as ReturnType<typeof drizzle<typeof schema>>;
