import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_sZ3qJDQwaLU6@ep-cool-wave-a5fh1vs5.us-east-2.aws.neon.tech/SBT?sslmode=require",
  },
});
