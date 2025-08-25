<#
Crea:
- apps/web (Vite + React + TS + Tailwind + React Router v7)
- apps/mobile (Expo + NativeWind/Tailwind)
- server (MongoDB docker o nativo, elegible)
- imports (clonado opcional GitHub)

Ejemplos:
powershell -ExecutionPolicy Bypass -File .\new-fullstack.ps1 -ProjectName MiApp
powershell -ExecutionPolicy Bypass -File .\new-fullstack.ps1 -ProjectName MiApp -MongoMode native -MongoPort 27018
#>

[CmdletBinding()]
param(
  [string]$ProjectName = "fullstack-app",
  [string]$GitRepoUrl = "",
  [ValidateSet("docker","native")][string]$MongoMode = "docker",
  [int]$MongoPort = 27017,
  [int]$MongoExpressPort = 8081,
  [string]$NativeDbDir = "",
  [string]$NativeLogDir = ""
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Test-Cmd($name) { $cmd = Get-Command $name -ErrorAction SilentlyContinue; return $null -ne $cmd }
function Ensure-Directory($path) { if (-not (Test-Path $path)) { New-Item -ItemType Directory -Force -Path $path | Out-Null } }
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
if (-not (Test-Cmd "node")) { Write-Warning "Node.js no encontrado. https://nodejs.org/"; }
if (-not (Test-Cmd "npm"))  { Write-Warning "npm no encontrado. Reinstala Node.js o agrega npm al PATH."; }
if (-not (Test-Cmd "git"))  { Write-Warning "git no encontrado. https://git-scm.com/"; }
if ($MongoMode -eq "docker" -and -not (Test-Cmd "docker")) { Write-Warning "Docker no encontrado (requerido para modo docker)."; }

# Raíz
$root = Join-Path (Get-Location) $ProjectName
if (Test-Path $root) { throw "La carpeta '$ProjectName' ya existe. Bórrala o usa otro nombre." }
Ensure-Directory $root
Ensure-Directory (Join-Path $root "apps")
Ensure-Directory (Join-Path $root "server")
Ensure-Directory (Join-Path $root "imports")

# ---------- WEB ----------
Write-Host "==> Creando apps/web (Vite + React + TS + Tailwind + React Router v7)..." -ForegroundColor Cyan
Push-Location $root
npx --yes create-vite@latest apps/web -- --template react-ts | Out-Null

Push-Location (Join-Path $root "apps\web")
# 1) Instalar deps base del template primero
npm install | Out-Null

# 2) Tailwind (evitamos npx para el init)
npm i tailwindcss @tailwindcss/vite | Out-Null
npm i -D @vitejs/plugin-react | Out-Null

# Crear/reescribir vite.config.ts con el plugin de Tailwind v4
@"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
"@ | Set-Content -Encoding utf8NoBOM .\vite.config.ts

# CSS de entrada minimal
@"
@import "tailwindcss";
"@ | Set-Content -Encoding utf8NoBOM .\src\index.css

# Asegurar que NO queden configs antiguas que rompan
Remove-Item .\postcss.config.* -ErrorAction SilentlyContinue
Remove-Item .\tailwind.config.* -ErrorAction SilentlyContinue
# Pages
Ensure-Directory .\src\pages
@"
export default function Home() {
  return (
    <section className=\"space-y-2\">
      <h1 className=\"text-2xl font-bold\">Home</h1>
      <p className=\"text-sm opacity-80\">React + TS + Tailwind + React Router v7</p>
    </section>
  );
}
"@ | Set-Content -Encoding UTF8 .\src\pages\Home.tsx
@"
export default function About() {
  return (
    <section className=\"space-y-2\">
      <h1 className=\"text-2xl font-bold\">About</h1>
      <p className=\"text-sm opacity-80\">Página de ejemplo</p>
    </section>
  );
}
"@ | Set-Content -Encoding UTF8 .\src\pages\About.tsx

# main.tsx
@"
import React from \"react\";
import ReactDOM from \"react-dom/client\";
import { createBrowserRouter, RouterProvider, Link, Outlet } from \"react-router\";
import Home from \"./pages/Home\";
import About from \"./pages/About\";
import \"./index.css\";

function RootLayout() {
  return (
    <div className=\"min-h-dvh\">
      <nav className=\"border-b p-4 flex gap-4\">
        <Link to=\"/\" className=\"font-medium\">Home</Link>
        <Link to=\"/about\" className=\"font-medium\">About</Link>
      </nav>
      <main className=\"p-4 max-w-4xl mx-auto\">
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  { path: \"/\", element: <RootLayout />, children: [
      { index: true, element: <Home /> },
      { path: \"about\", element: <About /> },
  ]},
]);

ReactDOM.createRoot(document.getElementById(\"root\")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
"@ | Set-Content -Encoding UTF8 .\src\main.tsx

# scripts
$pkg = Get-Content package.json -Raw | ConvertFrom-Json
$pkg.scripts.dev = "vite"
$pkg.scripts.build = "tsc -b && vite build"
$pkg.scripts.preview = "vite preview"
$pkg | ConvertTo-Json -Depth 10 | Set-Content -Encoding UTF8 package.json
Pop-Location   # apps/web

# ---------- MOBILE ----------
Write-Host "==> Creando apps/mobile (Expo + NativeWind/Tailwind)..." -ForegroundColor Cyan
# Forzamos npm para evitar choques con pnpm/yarn
#npx --yes create-expo-app@latest apps/mobile --template blank-typescript --yes --use-npm | Out-Null
npx --yes create-expo-app@latest apps/mobile --template blank-typescript --yes | Out-Null

Push-Location (Join-Path $root "apps\mobile")

# instalar deps base del template
npm install | Out-Null

# NativeWind + Tailwind
npm install nativewind | Out-Null
npm install -D tailwindcss | Out-Null
#node .\node_modules\tailwindcss\lib\cli.js init | Out-Null
$twBin = Join-Path (Get-Location) "node_modules\.bin\tailwindcss.cmd"
if (Test-Path $twBin) {
  & $twBin init | Out-Null
} else {
  npx -y -p tailwindcss tailwindcss init | Out-Null
}


# tailwind.config.js (RN)
@"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [\"./App.{js,jsx,ts,tsx}\", \"./app/**/*.{js,jsx,ts,tsx}\", \"./components/**/*.{js,jsx,ts,tsx}\"],
  theme: { extend: {} },
  plugins: [],
};
"@ | Set-Content -Encoding UTF8 .\tailwind.config.js

# global.css para NativeWind
@"
@tailwind base;
@tailwind components;
@tailwind utilities;
"@ | Set-Content -Encoding UTF8 .\global.css

# metro.config.js
@"
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './global.css' });
"@ | Set-Content -Encoding UTF8 .\metro.config.js

# Asegurar babel.config.js; si no existe, crearlo
$babelPath = Join-Path (Get-Location) "babel.config.js"
if (-not (Test-Path $babelPath)) {
  @"
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [],
  };
};
"@ | Set-Content -Encoding UTF8 $babelPath
}

# Inyectar plugin nativewind si no está
$babel = Get-Content $babelPath -Raw
if ($babel -notmatch "nativewind/babel") {
  $babel = $babel -replace "plugins:\s*\[\s*\]", "plugins: ['nativewind/babel']"
  $babel | Set-Content -Encoding UTF8 $babelPath
}

# App.tsx base
@"
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className=\"flex-1 items-center justify-center bg-white dark:bg-black\">
      <Text className=\"text-xl font-semibold dark:text-white\">Expo + NativeWind listo</Text>
      <StatusBar style=\"auto\" />
    </View>
  );
}
"@ | Set-Content -Encoding UTF8 .\App.tsx

# scripts
$pkgm = Get-Content package.json -Raw | ConvertFrom-Json
$pkgm.scripts.start = "expo start"
$pkgm.scripts.android = "expo run:android"
$pkgm.scripts.ios = "expo run:ios"
$pkgm.scripts.web = "expo start --web"
$pkgm | ConvertTo-Json -Depth 10 | Set-Content -Encoding UTF8 package.json
Pop-Location   # apps/mobile

# ---------- SERVER ----------
Write-Host "==> Configurando server/MongoDB ($MongoMode)..." -ForegroundColor Cyan
Push-Location (Join-Path $root "server")

if ($MongoMode -eq "docker") {
  @"
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
MONGO_PORT=$MongoPort
MONGO_EXPRESS_PORT=$MongoExpressPort
"@ | Set-Content -Encoding UTF8 .\.env

  @"
services:
  mongo:
    image: mongo:7
    restart: unless-stopped
    ports:
      - `$\{MONGO_PORT:-27017}`:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: `$\{MONGO_INITDB_ROOT_USERNAME:-root}`
      MONGO_INITDB_ROOT_PASSWORD: `$\{MONGO_INITDB_ROOT_PASSWORD:-example}`
    volumes:
      - mongo_data:/data/db

  mongo-express:
    image: mongo-express:1.0.2-20
    restart: unless-stopped
    ports:
      - `$\{MONGO_EXPRESS_PORT:-8081}`:8081
    environment:
      ME_CONFIG_MONGODB_SERVER: mongo
      ME_CONFIG_MONGODB_ADMINUSERNAME: `$\{MONGO_INITDB_ROOT_USERNAME:-root}`
      ME_CONFIG_MONGODB_ADMINPASSWORD: `$\{MONGO_INITDB_ROOT_PASSWORD:-example}`
    depends_on:
      - mongo

volumes:
  mongo_data:
"@ | Set-Content -Encoding UTF8 .\docker-compose.yml

  @"
param([switch]`$Detach = `$true)
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) { Write-Error 'Docker no está instalado o no está en PATH.'; exit 1 }
Write-Host 'Levantando MongoDB (Docker)...' -ForegroundColor Green
if (`$Detach) { docker compose up -d } else { docker compose up }
"@ | Set-Content -Encoding UTF8 .\start.ps1

  @"
Write-Host 'Deteniendo MongoDB (Docker)...' -ForegroundColor Yellow
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) { Write-Error 'Docker no está instalado o no está en PATH.'; exit 1 }
docker compose down
"@ | Set-Content -Encoding UTF8 .\stop.ps1
}
else {
  # Nativo
  $serviceName = "MongoDB-$ProjectName"
  if (-not $NativeDbDir)  { $NativeDbDir  = "C:\MongoDB\data\$ProjectName" }
  if (-not $NativeLogDir) { $NativeLogDir = "C:\MongoDB\log\$ProjectName" }

  Ensure-Directory (Split-Path $NativeDbDir -Parent)
  Ensure-Directory (Split-Path $NativeLogDir -Parent)
  Ensure-Directory $NativeDbDir
  Ensure-Directory $NativeLogDir
  Ensure-Directory ".\native"

  $mongodPath = Get-MongoBinaryPath
  if (-not $mongodPath) {
    if (Test-Cmd "winget") {
      Write-Host "==> Instalando MongoDB Server y Shell con winget..." -ForegroundColor Cyan
      try { winget install --id MongoDB.Server -e --accept-package-agreements --accept-source-agreements | Out-Null } catch {}
      try { winget install --id MongoDB.Shell  -e --accept-package-agreements --accept-source-agreements | Out-Null } catch {}
      $mongodPath = Get-MongoBinaryPath
    } else {
      Write-Warning "No se encontró MongoDB ni 'winget'. Instálalo manualmente: https://www.mongodb.com/try/download/community"
    }
  }

  $confPath = Join-Path (Get-Location) "native\mongod.conf"
  @"
systemLog:
  destination: file
  path: $NativeLogDir\mongod.log
storage:
  dbPath: $NativeDbDir
net:
  bindIp: 127.0.0.1
  port: $MongoPort
#security:
#  authorization: enabled
"@ | Set-Content -Encoding UTF8 $confPath

  @"
`$mongod = `"$mongodPath`"
if (-not (Test-Path `$mongod)) { Write-Error 'mongod.exe no encontrado. Edita start.ps1 con la ruta correcta.'; exit 1 }
Write-Host 'Iniciando MongoDB (nativo, primer plano)...' -ForegroundColor Green
& `$mongod --config `"$((Resolve-Path .\native\mongod.conf).Path)`"
"@ | Set-Content -Encoding UTF8 .\start.ps1

  @"
`$ErrorActionPreference = 'Stop'
`$mongod = `"$mongodPath`"
if (-not (Test-Path `$mongod)) { Write-Error 'mongod.exe no encontrado. No se puede instalar el servicio.'; exit 1 }
`$serviceName = '$serviceName'
`$conf = (Resolve-Path .\native\mongod.conf).Path
Write-Host "Instalando servicio `$serviceName ..." -ForegroundColor Green
& `$mongod --config "`$conf" --install --serviceName "`$serviceName"
Start-Sleep -Seconds 1
Start-Service "`$serviceName"
Get-Service "`$serviceName"
"@ | Set-Content -Encoding UTF8 .\install-service.ps1

  @"
`$serviceName = '$serviceName'
if (Get-Service -Name `$serviceName -ErrorAction SilentlyContinue) {
  Write-Host "Deteniendo servicio `$serviceName ..." -ForegroundColor Yellow
  Stop-Service `$serviceName -ErrorAction SilentlyContinue
  Start-Sleep -Seconds 1
  Write-Host "Desinstalando servicio `$serviceName ..." -ForegroundColor Yellow
  sc.exe delete "`$serviceName" | Out-Null
} else {
  Write-Host "Servicio `$serviceName no encontrado." -ForegroundColor Yellow
}
"@ | Set-Content -Encoding UTF8 .\uninstall-service.ps1

  @"
`$serviceName = '$serviceName'
Write-Host "Iniciando servicio `$serviceName ..." -ForegroundColor Green
Start-Service `$serviceName
Get-Service `$serviceName
"@ | Set-Content -Encoding UTF8 .\service-start.ps1

  @"
`$serviceName = '$serviceName'
Write-Host "Deteniendo servicio `$serviceName ..." -ForegroundColor Yellow
Stop-Service `$serviceName
Get-Service `$serviceName
"@ | Set-Content -Encoding UTF8 .\service-stop.ps1
}
Pop-Location   # server

# ---------- IMPORTADOR GITHUB ----------
if ($GitRepoUrl -and $GitRepoUrl.Trim() -ne "") {
  Write-Host "==> Clonando repositorio: $GitRepoUrl" -ForegroundColor Cyan
  Push-Location (Join-Path $root "imports")
  $name = $GitRepoUrl -replace '\.git$', '' -replace '.*/', ''
  git clone $GitRepoUrl $name | Out-Null
  Pop-Location
}

# ---------- README ----------
@"
# $ProjectName

## Estructura
- apps/web — React + TypeScript + Tailwind + React Router v7
- apps/mobile — Expo (React Native) + NativeWind (Tailwind RN)
- server — MongoDB ($MongoMode)
- imports — repos clonados (opcional)

## Comandos
### Web
cd apps/web
npm install
npm run dev

### Mobile
cd apps/mobile
npm install
# si algo se ve raro con NativeWind:
# npx expo start -c
npm run start

### MongoDB ($MongoMode)
cd server
"@ | Set-Content -Encoding UTF8 (Join-Path $root "README.md")

if ($MongoMode -eq "docker") {
  Add-Content -Encoding UTF8 (Join-Path $root "README.md") @"
./start.ps1     # inicia (usa -Detach:`$false para modo adjunto)
./stop.ps1      # detiene
Conexión: mongodb://root:example@localhost:$MongoPort/?authSource=admin
"@
} else {
  Add-Content -Encoding UTF8 (Join-Path $root "README.md") @"
# Primer plano:
./start.ps1

# Servicio de Windows (recomendado):
./install-service.ps1
./service-start.ps1
./service-stop.ps1
./uninstall-service.ps1

Conexión: mongodb://localhost:$MongoPort
(Para habilitar auth, edita server/native/mongod.conf y descomenta 'security.authorization')
"@
}

# ---------- INIT SCRIPT ----------
if ($MongoMode -eq "native") {
  $initDir = Join-Path (Get-Location) "native\init"
  Ensure-Directory $initDir

  # Crear seed.ps1
  @"
param(
  [string]`$MongoUri = "mongodb://localhost:$MongoPort",
  [string]`$File = ".\native\init\educational_platform.seed.js"
)

`$ErrorActionPreference = "Stop"

if (-not (Get-Command mongosh -ErrorAction SilentlyContinue)) {
  Write-Host "MongoDB Shell (mongosh) no está instalado. ¿Querés que lo instale ahora con winget?" -ForegroundColor Yellow
  # Podrías descomentar para instalar directamente:
  # winget install --id MongoDB.Shell -e --accept-package-agreements --accept-source-agreements
  exit 1
}

if (-not (Test-Path `$File)) {
  Write-Warning "El archivo de seed `$File no existe. ¿Ya copiaste tu .js de colecciones ahí?"
  exit 1
}

Write-Host "Ejecutando semilla `$File en `$MongoUri ..." -ForegroundColor Cyan
mongosh `$MongoUri --file `$File
"@ | Set-Content -Encoding UTF8 (Join-Path $initDir "seed.ps1")

  # .gitignore para no subir semillas sin querer
  @"
*.log
*.bak
"@ | Set-Content -Encoding UTF8 (Join-Path $initDir ".gitignore")
}


Write-Host "`n✅ Listo. Proyecto creado en: $root" -ForegroundColor Green
Write-Host "• Web:     cd `"$ProjectName`\apps\web`"; npm run dev"
Write-Host "• Mobile:  cd `"$ProjectName`\apps\mobile`"; npm run start"
if ($MongoMode -eq "docker") {
  Write-Host "• MongoDB (Docker): cd `"$ProjectName`\server`"; .\start.ps1"
} else {
  Write-Host "• MongoDB (Nativo): cd `"$ProjectName`\server`"; .\install-service.ps1  (o .\start.ps1)"
}
if ($GitRepoUrl) { Write-Host "• Importado: $GitRepoUrl => .\imports" }
Pop-Location
