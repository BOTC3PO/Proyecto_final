<#
  Scaffold:
  - apps/web   : Vite + React + TypeScript + Tailwind v4 (@tailwindcss/vite) + react-router-dom
  - apps/mobile: Expo + NativeWind (Tailwind v3) con presets y babel.config solicitado
  - api        : Express + TS + Mongo + Zod + Helmet + CORS
  - server     : MongoDB (native o docker) + seed.ps1 + init/
  - imports    : img/, sounds/, pages/
  - sync-pages.ps1, .gitignore, README.md
#>

[CmdletBinding()]
param(
  [string]$ProjectName = "fullstack-app",
  [ValidateSet("docker","native")][string]$MongoMode = "native",
  [int]$MongoPort = 27017,
  [int]$MongoExpressPort = 8081,
  [string]$NativeDbDir = "",
  [string]$NativeLogDir = ""
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Test-Cmd($name) { return $null -ne (Get-Command $name -ErrorAction SilentlyContinue) }
function Ensure-Directory($path) { if (-not (Test-Path $path)) { New-Item -ItemType Directory -Force -Path $path | Out-Null } }
function NoBOM($path, $content) {
  $dir = Split-Path -Parent $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $enc = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($path, $content, $enc)
}
function Get-MongoBinaryPath {
  $candidates = @(
    "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
  )
  foreach ($p in $candidates) { if (Test-Path $p) { return $p } }
  $found = Get-ChildItem "C:\Program Files\MongoDB\Server\*\bin\mongod.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($found) { return $found.FullName }
  return $null
}

Write-Host "==> Preparando entorno..." -ForegroundColor Cyan
if (-not (Test-Cmd "node")) { Write-Warning "Node no encontrado. Instalalo desde https://nodejs.org"; }
if (-not (Test-Cmd "npm"))  { Write-Warning "npm no encontrado (suele venir con Node)."; }
if (-not (Test-Cmd "git"))  { Write-Warning "git no encontrado. https://git-scm.com"; }

# Raíz del proyecto
$root = Join-Path (Get-Location) $ProjectName
if (Test-Path $root) { throw "La carpeta '$ProjectName' ya existe. Elegí otro nombre o borralá." }
Ensure-Directory $root

# Subcarpetas base
Ensure-Directory (Join-Path $root "apps")
Ensure-Directory (Join-Path $root "server")
Ensure-Directory (Join-Path $root "imports")
Ensure-Directory (Join-Path $root "api")

# Atajos de rutas absolutas
$webDir    = Join-Path $root "apps\web"
$mobileDir = Join-Path $root "apps\mobile"

# ---------- IMPORTS ----------
Write-Host "==> Estructura de imports..." -ForegroundColor Cyan
Ensure-Directory (Join-Path $root "imports\img")
Ensure-Directory (Join-Path $root "imports\sounds")
Ensure-Directory (Join-Path $root "imports\pages")

# ---------- WEB ----------
Write-Host "==> Creando apps/web (Vite + React + TS + Tailwind v4)..." -ForegroundColor Cyan
Push-Location $root
npx --yes create-vite@latest apps/web -- --template react-ts | Out-Null

# Dependencias web
Push-Location $webDir
npm install | Out-Null
npm i tailwindcss @tailwindcss/vite | Out-Null
npm i -D @vitejs/plugin-react | Out-Null
npm i react-router-dom | Out-Null

# --- NUEVO: asegurar carpetas ---
$webSrc     = Join-Path $webDir "src"
$webPages   = Join-Path $webDir "src\pages"
$webLayouts = Join-Path $webDir "src\layouts"

Ensure-Directory $webSrc
Ensure-Directory $webPages
Ensure-Directory $webLayouts


# vite.config.ts (Tailwind v4)
NoBOM (Join-Path $webDir  "vite.config.ts") @"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({ plugins: [react(), tailwindcss()] });
"@

# CSS de entrada (Tailwind v4)
NoBOM (Join-Path $webSrc "index.css") '@import "tailwindcss";'

# Páginas y layout mínimos
Ensure-Directory (Join-Path $webDir "src\pages")
Ensure-Directory (Join-Path $webDir "src\layouts")

NoBOM (Join-Path $webPages "Landing.tsx") 'export default function Landing(){return <h1 className="text-2xl font-bold">Landing pública</h1>;}'
NoBOM (Join-Path $webPages "About.tsx")   'export default function About(){return <h1 className="text-xl">Acerca</h1>;}'
NoBOM (Join-Path $webPages "Pricing.tsx") 'export default function Pricing(){return <h1 className="text-xl">Precios</h1>;}'
NoBOM (Join-Path $webPages "Contact.tsx") 'export default function Contact(){return <h1 className="text-xl">Contacto</h1>;}'
NoBOM (Join-Path $webPages "NotFound.tsx") 'export default function NotFound(){return <h1 className="text-xl text-red-600">404</h1>;}'


# layout
NoBOM (Join-Path $webLayouts "GuestLayout.tsx") @"
import { Link, Outlet } from "react-router-dom";
export default function GuestLayout(){
  return (
    <div className="min-h-dvh">
      <nav className="border-b p-4 flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <Link to="/pricing">Precios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <main className="max-w-4xl mx-auto p-4"><Outlet/></main>
    </div>
  );
}
"@

# router y main
NoBOM (Join-Path $webSrc "router.tsx") @"
import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
export const router = createBrowserRouter([
  { element: <GuestLayout/>, children: [
    { path: "/", element: <Landing/> },
    { path: "/about", element: <About/> },
    { path: "/pricing", element: <Pricing/> },
    { path: "/contact", element: <Contact/> },
    { path: "/404", element: <NotFound/> },
  ]},
  { path: "*", element: <Navigate to="/404" replace /> }
]);
"@

NoBOM (Join-Path $webSrc "main.tsx") @"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={router}/></React.StrictMode>
);
"@
# Ajuste scripts web
$pkg = Get-Content (Join-Path $webDir "package.json") -Raw | ConvertFrom-Json
$pkg.scripts.dev = "vite"
$pkg.scripts.build = "tsc -b && vite build"
$pkg.scripts.preview = "vite preview"
$pkg | ConvertTo-Json -Depth 10 | NoBOM (Join-Path $webDir "package.json")
Pop-Location   # apps/web

# ---------- MOBILE ----------
Write-Host "==> Creando apps/mobile (Expo + NativeWind/Tailwind v3)..." -ForegroundColor Cyan
npx --yes create-expo-app@latest apps/mobile --template blank-typescript --yes | Out-Null

# Dependencias base (Expo ajusta pares)
Push-Location $mobileDir
npx expo install expo expo-status-bar react react-native | Out-Null
npm i nativewind tailwindcss@3 | Out-Null

# tailwind.config.js con preset de NativeWind + paths
NoBOM (Join-Path $mobileDir "tailwind.config.js") @"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
"@

# metro.config.js
NoBOM (Join-Path $mobileDir "metro.config.js") @"
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './global.css' });
"@

# global.css
NoBOM (Join-Path $mobileDir "global.css") "@tailwind base;`n@tailwind components;`n@tailwind utilities;"

# babel.config.js con jsxImportSource y preset de nativewind (como pediste)
NoBOM (Join-Path $mobileDir "babel.config.js") @"
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
"@

# Entry index.js para Expo
NoBOM (Join-Path $mobileDir "index.js") @"
import { registerRootComponent } from 'expo';
import App from './App';
registerRootComponent(App);
"@

# Ajustar package.json (main y scripts), limpiando posible BOM
$mpRaw = (Get-Content (Join-Path $mobileDir "package.json") -Raw) -replace "^\uFEFF",""
$mp = $mpRaw | ConvertFrom-Json
$mp.main = "index.js"
$mp.scripts.start = "expo start"
$mp.scripts.android = "expo run:android"
$mp.scripts.ios = "expo run:ios"
$mp.scripts.web = "expo start --web"
$mp | ConvertTo-Json -Depth 10 | NoBOM (Join-Path $mobileDir "package.json")

# App.tsx demo (si no existe)
if (-not (Test-Path (Join-Path $mobileDir "App.tsx"))) {
  NoBOM (Join-Path $mobileDir "App.tsx") @"
import { Text, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const scheme = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-semibold dark:text-white">
        Expo + NativeWind listo ({scheme})
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
"@
}
Pop-Location   # apps/mobile

# ---------- SERVER (Mongo) ----------
Write-Host "==> Configurando server/MongoDB ($MongoMode)..." -ForegroundColor Cyan
Push-Location (Join-Path $root "server")

if ($MongoMode -eq "docker") {
  NoBOM ".\.env" @"
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
MONGO_PORT=$MongoPort
MONGO_EXPRESS_PORT=$MongoExpressPort
"@
  NoBOM ".\docker-compose.yml" @"
services:
  mongo:
    image: mongo:7
    restart: unless-stopped
    ports:
      - `${MONGO_PORT:-27017}`:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: `${MONGO_INITDB_ROOT_USERNAME:-root}`
      MONGO_INITDB_ROOT_PASSWORD: `${MONGO_INITDB_ROOT_PASSWORD:-example}`
    volumes:
      - mongo_data:/data/db
  mongo-express:
    image: mongo-express:1.0.2-20
    restart: unless-stopped
    ports:
      - `${MONGO_EXPRESS_PORT:-8081}`:8081
    environment:
      ME_CONFIG_MONGODB_SERVER: mongo
      ME_CONFIG_MONGODB_ADMINUSERNAME: `${MONGO_INITDB_ROOT_USERNAME:-root}`
      ME_CONFIG_MONGODB_ADMINPASSWORD: `${MONGO_INITDB_ROOT_PASSWORD:-example}`
    depends_on:
      - mongo
volumes:
  mongo_data:
"@
  NoBOM ".\start.ps1" @"
param([switch]`$Detach = `$true)
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) { Write-Error 'Docker no está instalado.'; exit 1 }
Write-Host 'Levantando MongoDB (Docker)...' -ForegroundColor Green
if (`$Detach) { docker compose up -d } else { docker compose up }
"@
  NoBOM ".\stop.ps1" @"
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) { Write-Error 'Docker no está instalado.'; exit 1 }
Write-Host 'Deteniendo MongoDB (Docker)...' -ForegroundColor Yellow
docker compose down
"@
}
else {
# Asegurar que la carpeta existe
$mongoDir = Join-Path $PSScriptRoot "native"
if (!(Test-Path $mongoDir)) {
    New-Item -ItemType Directory -Path $mongoDir | Out-Null
}
$mongoConfPath = Join-Path $mongoDir "mongod.conf"


  $serviceName = "MongoDB-$ProjectName"
  if (-not $NativeDbDir)  { $NativeDbDir  = "C:\MongoDB\data\$ProjectName" }
  if (-not $NativeLogDir) { $NativeLogDir = "C:\MongoDB\log\$ProjectName" }
  Ensure-Directory (Split-Path $NativeDbDir -Parent)
  Ensure-Directory (Split-Path $NativeLogDir -Parent)
  Ensure-Directory $NativeDbDir
  Ensure-Directory $NativeLogDir
  Ensure-Directory ".\native\init"

  $mongodPath = Get-MongoBinaryPath
  if (-not $mongodPath -and (Test-Cmd "winget")) {
    Write-Host "==> Instalando MongoDB Server y Shell con winget..." -ForegroundColor Cyan
    try { winget install --id MongoDB.Server -e --accept-package-agreements --accept-source-agreements | Out-Null } catch {}
    try { winget install --id MongoDB.Shell  -e --accept-package-agreements --accept-source-agreements | Out-Null } catch {}
    $mongodPath = Get-MongoBinaryPath
  }

$mongoConfContent = @"
systemLog:
  destination: file
  path: $NativeLogDir\mongod.log
storage:
  dbPath: $NativeDbDir
net:
  bindIp: 127.0.0.1
  port: $MongoPort
"@

Set-Content -Path $mongoConfPath -Value $mongoConfContent
Write-Host "Archivo mongod.conf creado en: $mongoConfPath"

  NoBOM ".\start.ps1" @"
`$mongod = `"$mongodPath`"
if (-not (Test-Path `$mongod)) { Write-Error 'mongod.exe no encontrado.'; exit 1 }
Write-Host 'Iniciando MongoDB (nativo, primer plano)...' -ForegroundColor Green
& `$mongod --config `"$((Resolve-Path .\native\mongod.conf).Path)`"
"@

  NoBOM ".\install-service.ps1" @"
`$ErrorActionPreference = 'Stop'
`$mongod = `"$mongodPath`"
if (-not (Test-Path `$mongod)) { Write-Error 'mongod.exe no encontrado.'; exit 1 }
`$serviceName = '$serviceName'
`$conf = (Resolve-Path .\native\mongod.conf).Path
Write-Host "Instalando servicio `$serviceName ..." -ForegroundColor Green
& `$mongod --config "`$conf" --install --serviceName "`$serviceName"
Start-Sleep -Seconds 1
Start-Service "`$serviceName"
Get-Service "`$serviceName"
"@

  NoBOM ".\service-start.ps1" @"
`$serviceName = '$serviceName'
Start-Service `$serviceName
Get-Service `$serviceName
"@

  NoBOM ".\service-stop.ps1" @"
`$serviceName = '$serviceName'
Stop-Service `$serviceName
Get-Service `$serviceName
"@

  NoBOM ".\native\init\seed.ps1" @"
param(
  [string]`$MongoUri = "mongodb://localhost:$MongoPort",
  [string]`$File = ".\native\init\educational_platform.seed.js"
)
`$ErrorActionPreference = "Stop"
if (-not (Get-Command mongosh -ErrorAction SilentlyContinue)) {
  Write-Host "mongosh no está instalado. Instalalo o usa winget." -ForegroundColor Yellow
  exit 1
}
if (-not (Test-Path `$File)) { Write-Warning "No existe `$File"; exit 1 }
Write-Host "Sembrando base con `$File en `$MongoUri ..." -ForegroundColor Cyan
mongosh `$MongoUri --file `$File
"@

  if (-not (Test-Path ".\native\init\educational_platform.seed.js")) {
    NoBOM ".\native\init\educational_platform.seed.js" "// db = db.getSiblingDB('educational_platform');`n// pegá aquí tu script de colecciones/índices/datos"
  }
}
Pop-Location   # server

# ---------- API (Express + TS + Mongo) ----------
Write-Host "==> Creando api (Express + TypeScript + Mongo + Zod)..." -ForegroundColor Cyan
Push-Location (Join-Path $root "api")
NoBOM ".\package.json" @"
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
NoBOM ".\tsconfig.json" @"
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
NoBOM ".\nodemon.json" @"
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
"@
NoBOM ".\.env" @"
PORT=5050
MONGO_URI=mongodb://localhost:$MongoPort
DB_NAME=educational_platform
CORS_ORIGIN=http://localhost:5173
MAX_PAGE_MB=30
"@
Ensure-Directory ".\src\lib"
Ensure-Directory ".\src\routes"
Ensure-Directory ".\src\schema"

NoBOM ".\src\lib\env.ts" @"
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
NoBOM ".\src\lib\db.ts" @"
import { MongoClient } from "mongodb";
import { ENV } from "./env";
let client: MongoClient;
export async function getDb() {
  if (!client) { client = new MongoClient(ENV.MONGO_URI); await client.connect(); }
  return client.db(ENV.DB_NAME);
}
"@
NoBOM ".\src\schema\page.ts" @"
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
NoBOM ".\src\routes\health.ts" @"
import { Router } from "express";
import { getDb } from "../lib/db";
export const health = Router();
health.get("/health", async (_req, res) => {
  try { const db = await getDb(); await db.command({ ping: 1 }); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ ok: false, error: String(e) }); }
});
"@
NoBOM ".\src\routes\pages.ts" @"
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
NoBOM ".\src\index.ts" @"
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
npm install | Out-Null
Pop-Location   # api

# ---------- SYNC PAGES ----------
NoBOM (Join-Path $root "sync-pages.ps1") @"
param(
  [string]`$Source = ".\imports\pages",
  [string]`$Dest   = ".\apps\web\public\pages"
)
`$ErrorActionPreference = "Stop"
if (-not (Test-Path `$Source)) { Write-Error "No existe `$Source"; exit 1 }
if (-not (Test-Path `$Dest))   { New-Item -ItemType Directory -Force -Path `$Dest | Out-Null }
robocopy `$Source `$Dest /E /NFL /NDL /NJH /NJS /NC | Out-Null
Write-Host "Sincronizado: `$Source -> `$Dest" -ForegroundColor Green
"@

# ---------- .gitignore ----------
NoBOM (Join-Path $root ".gitignore") @"
node_modules/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.pnpm-store/

dist/
build/
web-build/
.expo/
.expo-shared/
.vite/
.cache/
out/
*.tsbuildinfo

.DS_Store
Thumbs.db
ehthumbs.db
Icon?
Desktop.ini
.vscode/
.idea/
*.swp
*.swo

.env
.env.*.local

server/native/log/
server/native/data/
mongod.pid
*.lock
dump/

coverage/
.nyc_output/

*.bak
*.tmp
*.temp
*.old
*.orig
"@

# ---------- README ----------
$readme = @"
# $ProjectName

## Estructura
- apps/web — React + TS + Tailwind v4 (@tailwindcss/vite) + Router
- apps/mobile — Expo + NativeWind (Tailwind v3) con preset y babel config
- api — Express + TS + Mongo + Zod
- server — MongoDB ($MongoMode)
- imports — img/, sounds/, pages/
- sync-pages.ps1 — copia imports/pages -> apps/web/public/pages

## Comandos
Web:
  cd apps/web
  npm run dev

Mobile:
  cd apps/mobile
  npm install
  npx expo start -c

API:
  cd api
  npm run dev

Mongo ($MongoMode):
  cd server
"@
NoBOM (Join-Path $root "README.md") $readme
if ($MongoMode -eq "docker") {
  Add-Content -Value @"
./start.ps1     # inicia (usa -Detach:`$false para adjunto)
./stop.ps1      # detiene
Conexión: mongodb://root:example@localhost:$MongoPort/?authSource=admin
"@ -Path (Join-Path $root "README.md")
} else {
  Add-Content -Value @"
./start.ps1                   # primer plano
./install-service.ps1         # instala servicio Windows
./service-start.ps1           # inicia servicio
./service-stop.ps1            # detiene servicio
Seed:
./native/init/seed.ps1
Conexión: mongodb://localhost:$MongoPort
"@ -Path (Join-Path $root "README.md")
}

Write-Host "`n✅ Listo. Proyecto creado en: $root" -ForegroundColor Green
Write-Host "• Web:     cd `"$ProjectName`\apps\web`"; npm run dev"
Write-Host "• Mobile:  cd `"$ProjectName`\apps\mobile`"; npx expo start -c"
Write-Host "• API:     cd `"$ProjectName`\api`"; npm run dev"
if ($MongoMode -eq "docker") {
  Write-Host "• MongoDB: cd `"$ProjectName`\server`"; .\start.ps1"
} else {
  Write-Host "• MongoDB: cd `"$ProjectName`\server`"; .\install-service.ps1  (o .\start.ps1)"
}
Write-Host "• Sync pages: .\sync-pages.ps1"
