import { defineConfig } from "prisma/config";

export default defineConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL ?? "postgresql://user:password@localhost:5432/virtualbook"
    }
  }
});
