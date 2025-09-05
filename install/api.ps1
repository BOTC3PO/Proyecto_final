<# install\api.ps1
   Configura el entorno de la API (Express + TS + Mongo).
#>
[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
$ApiDir = Join-Path $Root 'api'

Write-Host "==> [api] Preparando entorno en: $ApiDir" -ForegroundColor Cyan
if (-not (Test-Path $ApiDir)) { New-Item -ItemType Directory -Path $ApiDir | Out-Null }

# Archivos de configuración y código
function NoBOM($path, $content) {
  $dir = Split-Path -Parent $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $enc = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($path, $content, $enc)
}

# package.json
NoBOM (Join-Path $ApiDir "package.json") @"
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
"@

# tsconfig.json
NoBOM (Join-Path $ApiDir "tsconfig.json") @"
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
"@

# nodemon.json
NoBOM (Join-Path $ApiDir "nodemon.json") @"
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
"@

# .env
NoBOM (Join-Path $ApiDir ".env") @"
PORT=5050
MONGO_URI=mongodb://localhost:27017
DB_NAME=educational_platform
CORS_ORIGIN=http://localhost:5173
MAX_PAGE_MB=30
"@

# Estructura de src
$srcDir = Join-Path $ApiDir "src"
$libDir = Join-Path $srcDir "lib"
$routesDir = Join-Path $srcDir "routes"
$schemaDir = Join-Path $srcDir "schema"

if (-not (Test-Path $srcDir)) { New-Item -ItemType Directory -Path $srcDir -Force | Out-Null }
if (-not (Test-Path $libDir)) { New-Item -ItemType Directory -Path $libDir -Force | Out-Null }
if (-not (Test-Path $routesDir)) { New-Item -ItemType Directory -Path $routesDir -Force | Out-Null }
if (-not (Test-Path $schemaDir)) { New-Item -ItemType Directory -Path $schemaDir -Force | Out-Null }

# src/lib/env.ts
NoBOM (Join-Path $libDir "env.ts") @"
import * as dotenv from "dotenv";
dotenv.config();
export const ENV = {
  PORT: Number(process.env.PORT ?? 5050),
  MONGO_URI: process.env.MONGO_URI ?? "mongodb://localhost:27017",
  DB_NAME: process.env.DB_NAME ?? "educational_platform",
  CORS_ORIGIN: (process.env.CORS_ORIGIN ?? "http://localhost:5173").split(","),
  MAX_PAGE_MB: Number(process.env.MAX_PAGE_MB ?? 30)
};
"@

# src/lib/db.ts
NoBOM (Join-Path $libDir "db.ts") @"
import { MongoClient } from "mongodb";
import { ENV } from "./env";
let client: MongoClient;
export async function getDb() {
  if (!client) { client = new MongoClient(ENV.MONGO_URI); await client.connect(); }
  return client.db(ENV.DB_NAME);
}
"@

# src/schema/page.ts
NoBOM (Join-Path $schemaDir "page.ts") @"
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
"@

# src/routes/health.ts
NoBOM (Join-Path $routesDir "health.ts") @"
import { Router } from "express";
import { getDb } from "../lib/db";
export const health = Router();
health.get("/health", async (_req, res) => {
  try { const db = await getDb(); await db.command({ ping: 1 }); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ ok: false, error: String(e) }); }
});
"@

# src/routes/pages.ts
NoBOM (Join-Path $routesDir "pages.ts") @"
import { Router } from "express";
import { TuesdayProjectSchema } from "../schema/page";
import { getDb } from "../lib/db";
import express from "express";
export const pages = Router();
function bodyLimitMB(maxMb: number) { return [express.json({ limit: `${maxMb}mb` })]; }
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
"@

# src/index.ts
NoBOM (Join-Path $srcDir "index.ts") @"
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
app.listen(ENV.PORT, () => { console.log(`API on http://localhost:${ENV.PORT}`); });
"@

# Instalar dependencias
Push-Location $ApiDir
npm install | Out-Null
Pop-Location
Write-Host "==> [api] OK" -ForegroundColor Green