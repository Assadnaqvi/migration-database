import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString =
  "postgres://default:xVkmLca25jDI@ep-red-union-894982.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb";
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

async function main() {
  await migrate(db, { migrationsFolder: "drizzle" });
}
main();