import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
  "postgresql://neondb_owner:npg_sZ3qJDQwaLU6@ep-cool-wave-a5fh1vs5.us-east-2.aws.neon.tech/SBT?sslmode=require"
);
const db = drizzle({ client: sql });
