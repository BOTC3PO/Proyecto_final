#!/bin/bash

set -e

root=$(dirname "$(dirname "$(readlink -f "$0")")")
api_dir="$root/api"

echo "==> [api] Preparando entorno en: $api_dir"
mkdir -p "$api_dir"

# package.json
cat > "$api_dir/package.json" << EOF
{
  "name": "api",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "helmet": "^7.1.0",
    "mongodb": "^6.8.0",
    "morgan": "^1.10.0",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.12.7",
    "@types/morgan": "^1.9.9",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5"
  }
}
EOF

# tsconfig.json
cat > "$api_dir/tsconfig.json" << EOF
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
EOF

# nodemon.json
cat > "$api_dir/nodemon.json" << EOF
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
EOF

# .env
cat > "$api_dir/.env" << EOF
PORT=5050
MONGO_URI=mongodb://localhost:27017
DB_NAME=educational_platform
CORS_ORIGIN=http://localhost:5173
MAX_PAGE_MB=30
EOF

# Estructura de src
src_dir="$api_dir/src"
lib_dir="$src_dir/lib"
routes_dir="$src_dir/routes"
schema_dir="$src_dir/schema"

mkdir -p "$src_dir" "$lib_dir" "$routes_dir" "$schema_dir"

# src/lib/env.ts
cat > "$lib_dir/env.ts" << EOF
import * as dotenv from "dotenv";
dotenv.config();
export const ENV = {
  PORT: Number(process.env.PORT ?? 5050),
  MONGO_URI: process.env.MONGO_URI ?? "mongodb://localhost:27017",
  DB_NAME: process.env.DB_NAME ?? "educational_platform",
  CORS_ORIGIN: (process.env.CORS_ORIGIN ?? "http://localhost:5173").split(","),
  MAX_PAGE_MB: Number(process.env.MAX_PAGE_MB ?? 30)
};
EOF

# src/lib/db.ts
cat > "$lib_dir/db.ts" << EOF
import { MongoClient } from "mongodb";
import { ENV } from "./env";
let client: MongoClient;
export async function getDb() {
  if (!client) { client = new MongoClient(ENV.MONGO_URI); await client.connect(); }
  return client.db(ENV.DB_NAME);
}
EOF

# src/schema/page.ts
cat > "$schema_dir/page.ts" << EOF
import { z } from "zod";
export const AssetSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["image","audio","video","font"]).optional(),
  src: z.string().min(1)
}).strict();
export const TuesdayProjectSchema = z.object({
  version: z.string().max(20),
  title: z.string().max(200),
  width: z.number().positive().max(10000),
  height: z.number().positive().max(10000),
  background: z.string().optional(),
  assets: z.array(AssetSchema).default([]),
  scene: z.array(z.any())
}).strict();
export type TuesdayProject = z.infer<typeof TuesdayProjectSchema>;
EOF

# src/routes/health.ts
cat > "$routes_dir/health.ts" << EOF
import { Router } from "express";
import { getDb } from "../lib/db";
export const health = Router();
health.get("/health", async (_req, res) => {
  try { const db = await getDb(); await db.command({ ping: 1 }); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ ok: false, error: String(e) }); }
});
EOF

# src/routes/pages.ts
cat > "$routes_dir/pages.ts" << EOF
import { Router } from "express";
import { TuesdayProjectSchema } from "../schema/page";
import { getDb } from "../lib/db";
import express from "express";
export const pages = Router();
function bodyLimitMB(maxMb: number) { return [express.json({ limit: \`\${maxMb}mb\` })]; }
pages.post("/api/pages", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  try {
    const parsed = TuesdayProjectSchema.parse(req.body);
    const db = await getDb();
    const doc = { ...parsed, createdAt: new Date() };
    const result = await db.collection("pages").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
pages.get("/api/pages/:id", async (req, res) => {
  const db = await getDb();
  const { ObjectId } = await import("mongodb");
  const page = await db.collection("pages").findOne({ _id: new ObjectId(req.params.id) });
  if (!page) return res.status(404).json({ error: "not found" });
  res.json(page);
});
EOF

# src/index.ts
cat > "$src_dir/index.ts" << EOF
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { ENV } from "./lib/env";
import { health } from "./routes/health";
import { pages } from "./routes/pages";
const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: ENV.CORS_ORIGIN, credentials: true }));
app.use(morgan("tiny"));
app.use(health);
app.use(pages);
app.use((_req, res) => res.status(404).json({ error: "not found" }));
app.listen(ENV.PORT, () => { console.log(\`API on http://localhost:\${ENV.PORT}\`); });
EOF

# Instalar dependencias
cd "$api_dir"
npm install
cd ..

echo "==> [api] OK"