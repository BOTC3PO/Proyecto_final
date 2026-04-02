<#
.SYNOPSIS
  Instalador de Virtual Book — clona el repo, instala
  dependencias y construye el diccionario.

.DESCRIPTION
  Uso:
    .\composer.ps1                        # Instalación completa
    .\composer.ps1 -SkipDict              # Sin diccionario
    .\composer.ps1 -SkipDict -SkipClone   # Solo dependencias
    .\composer.ps1 -WhatIf                # Simulación
    .\composer.ps1 -Langs "es,en"         # Idiomas del diccionario
#>

[CmdletBinding(SupportsShouldProcess = $true)]
param(
  [switch]$SkipClone,
  [switch]$SkipDict,
  [string]$Langs = "es,en,pt,fr,it,la",
  [string]$RepoUrl = "https://github.com/tu-usuario/virtual-book.git",
  [string]$Branch = "main",
  [string]$InstallDir = ".\virtual-book"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

# ── Colores y log ──────────────────────────────────────────

function Write-Step  { param($msg) Write-Host "==> $msg" -ForegroundColor Cyan }
function Write-OK    { param($msg) Write-Host "    OK  $msg" -ForegroundColor Green }
function Write-Warn  { param($msg) Write-Host "    WARN $msg" -ForegroundColor Yellow }
function Write-Fail  { param($msg) Write-Host "    ERR  $msg" -ForegroundColor Red }

function Assert-ExitCode {
  param([int]$Code, [string]$Ctx)
  if ($Code -ne 0) {
    Write-Fail "$Ctx salió con código $Code"
    exit $Code
  }
}

# ── Requisitos ─────────────────────────────────────────────

Write-Step "Verificando requisitos"

# Node.js >= 18
try {
  $nodeVer = (node --version 2>&1).ToString().TrimStart("v")
  $nodeMajor = [int]($nodeVer.Split(".")[0])
  if ($nodeMajor -lt 18) {
    Write-Fail "Node.js >= 18 requerido (encontrado: v$nodeVer)"
    exit 1
  }
  Write-OK "Node.js v$nodeVer"
} catch {
  Write-Fail "Node.js no encontrado. Instalalo desde https://nodejs.org"
  exit 1
}

# npm
try {
  $npmVer = (npm --version 2>&1).ToString().Trim()
  Write-OK "npm v$npmVer"
} catch {
  Write-Fail "npm no encontrado."
  exit 1
}

# Git
try {
  $gitVer = (git --version 2>&1).ToString().Trim()
  Write-OK $gitVer
} catch {
  Write-Fail "Git no encontrado. Instalalo desde https://git-scm.com"
  exit 1
}

# Python >= 3.10 (solo si se va a construir el diccionario)
if (-not $SkipDict) {
  try {
    $pyVer = (python --version 2>&1).ToString().Trim()
    $pyMajor = [int]($pyVer -replace "Python (\d+)\..*", '$1')
    $pyMinor = [int]($pyVer -replace "Python \d+\.(\d+)\..*", '$1')
    if ($pyMajor -lt 3 -or ($pyMajor -eq 3 -and $pyMinor -lt 10)) {
      Write-Fail "Python >= 3.10 requerido (encontrado: $pyVer)"
      exit 1
    }
    Write-OK $pyVer
  } catch {
    Write-Fail "Python no encontrado. Instalalo desde https://python.org"
    Write-Warn "Podés saltar el diccionario con -SkipDict y agregarlo después."
    exit 1
  }
}

# ── Clonar o actualizar repo ───────────────────────────────

if (-not $SkipClone) {
  Write-Step "Obteniendo código fuente"

  if (Test-Path (Join-Path $InstallDir ".git")) {
    Write-Warn "Repositorio ya existe en $InstallDir — actualizando"
    Push-Location $InstallDir
    if ($PSCmdlet.ShouldProcess("git pull", "Actualizar repositorio")) {
      git pull origin $Branch
      Assert-ExitCode $LASTEXITCODE "git pull"
    }
    Pop-Location
  } else {
    if ($PSCmdlet.ShouldProcess($RepoUrl, "Clonar repositorio")) {
      git clone --branch $Branch --depth 1 $RepoUrl $InstallDir
      Assert-ExitCode $LASTEXITCODE "git clone"
    }
  }
  Write-OK "Código fuente listo en $InstallDir"
} else {
  # Si se salta el clone, trabajar desde el directorio actual
  $InstallDir = $PSScriptRoot
  Write-Warn "SkipClone activo — usando directorio actual: $InstallDir"
}

# Cambiar al directorio del proyecto para el resto del proceso
Push-Location $InstallDir

# ── Dependencias Node — API ────────────────────────────────

Write-Step "Instalando dependencias de la API"
$ApiDir = Join-Path $InstallDir "api"
if (-not (Test-Path $ApiDir)) {
  Write-Fail "No se encontró la carpeta api/ en $InstallDir"
  exit 1
}
Push-Location $ApiDir
if ($PSCmdlet.ShouldProcess("api/", "npm install")) {
  npm install
  Assert-ExitCode $LASTEXITCODE "npm install (api)"
}
Pop-Location
Write-OK "Dependencias de API instaladas"

# ── Dependencias Node — Web ────────────────────────────────

Write-Step "Instalando dependencias del cliente web"
$WebDir = Join-Path $InstallDir "apps\web"
if (-not (Test-Path $WebDir)) {
  Write-Fail "No se encontró la carpeta apps/web/ en $InstallDir"
  exit 1
}
Push-Location $WebDir
if ($PSCmdlet.ShouldProcess("apps/web/", "npm install")) {
  npm install
  Assert-ExitCode $LASTEXITCODE "npm install (web)"
}
Pop-Location
Write-OK "Dependencias web instaladas"

# ── Archivo .env ───────────────────────────────────────────

Write-Step "Configurando variables de entorno"
$EnvPath = Join-Path $ApiDir ".env"

if (Test-Path $EnvPath) {
  Write-Warn ".env ya existe en api/ — no se sobreescribe"
} else {
  if ($PSCmdlet.ShouldProcess($EnvPath, "Crear .env")) {
    $EnvContent = @"
# ── Servidor ──────────────────────────────────────────────
PORT=5050
NODE_ENV=development

# ── Base de datos ──────────────────────────────────────────
MONGO_URI=mongodb://localhost:27017
DB_NAME=virtual_book
SQLITE_CORE_PATH=./src/base/core_schema.sqlite
SQLITE_PATH=./src/diccionarios/Diccionario.sqlite

# ── CORS ───────────────────────────────────────────────────
CORS_ORIGIN=http://localhost:5173

# ── JWT ────────────────────────────────────────────────────
JWT_SECRET=cambiar-en-produccion
JWT_REFRESH_SECRET=cambiar-en-produccion
JWT_ACCESS_TTL_SECONDS=3600

# ── MercadoPago (opcional) ─────────────────────────────────
PAYMENTS_ENABLED=false
MP_ACCESS_TOKEN=
MP_PUBLIC_KEY=
MP_WEBHOOK_SECRET=

# ── Precios en ARS ─────────────────────────────────────────
PRECIO_ALUMNO_MENSUAL=1000
PRECIO_STAFF_MENSUAL=300
PRECIO_EXPANSION_PROFESOR=150

# ── Admin ──────────────────────────────────────────────────
BOOTSTRAP_ADMIN_KEY=cambiar-en-produccion
"@
    $Enc = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($EnvPath, $EnvContent, $Enc)
  }
  Write-OK ".env generado en api/"
  Write-Warn "Revisá api/.env y completá los valores antes de iniciar."
}

# ── Migraciones SQLite ─────────────────────────────────────

Write-Step "Ejecutando migraciones SQLite"
Push-Location $ApiDir
if ($PSCmdlet.ShouldProcess("api/", "npm run db:sqlite:migrate")) {
  npm run db:sqlite:migrate
  Assert-ExitCode $LASTEXITCODE "db:sqlite:migrate"
}
Pop-Location
Write-OK "Migraciones aplicadas (user_version = 12)"

# ── Seed de tienda ─────────────────────────────────────────

Write-Step "Aplicando seed de tienda"
$SeedPath = Join-Path $ApiDir "sql\seed_tienda.sql"
$CoreDbPath = Join-Path $ApiDir "src\base\core_schema.sqlite"

if (-not (Test-Path $SeedPath)) {
  Write-Warn "No se encontró sql/seed_tienda.sql — omitiendo seed"
} elseif ($PSCmdlet.ShouldProcess($CoreDbPath, "Aplicar seed_tienda.sql")) {
  $SeedScript = @"
const Database = require('better-sqlite3');
const fs = require('fs');
const db = new Database('${CoreDbPath.Replace("\","\\")}');
const sql = fs.readFileSync('${SeedPath.Replace("\","\\")}', 'utf8');
db.exec(sql);
console.log('Seed de tienda aplicado.');
"@
  $SeedScript | node --input-type=commonjs
  Assert-ExitCode $LASTEXITCODE "seed tienda"
  Write-OK "Seed de tienda aplicado"
}

# ── Calendario económico ───────────────────────────────────

Write-Step "Generando calendario económico"
$CalScript = Join-Path $ApiDir "scripts\generar_calendario_economico.js"
if (-not (Test-Path $CalScript)) {
  Write-Warn "No se encontró scripts/generar_calendario_economico.js — omitiendo"
} elseif ($PSCmdlet.ShouldProcess($CalScript, "Generar calendario")) {
  Push-Location $ApiDir
  node $CalScript
  Assert-ExitCode $LASTEXITCODE "generar_calendario_economico"
  Pop-Location
  Write-OK "Calendario económico generado (1481 ciclos 2024-2100)"
}

# ── Diccionario ────────────────────────────────────────────

if (-not $SkipDict) {
  Write-Step "Construyendo diccionario Wiktionary"

  $InstallScripts = Join-Path $InstallDir "install"
  $DataDir        = Join-Path $InstallDir "data"
  $DumpsDir       = Join-Path $DataDir "dumps"
  $DictRaw        = Join-Path $DataDir "dictionaries.sqlite"
  $DictFinal      = Join-Path $DataDir "Diccionario.sqlite"
  $DictDest       = Join-Path $ApiDir "src\diccionarios\Diccionario.sqlite"
  $VenvDir        = Join-Path $InstallDir ".venv_dict"
  $ReqFile        = Join-Path $InstallScripts "requirements.txt"
  $BuildScript    = Join-Path $InstallScripts "build_wiktionary_sqlite.py"
  $FinalScript    = Join-Path $InstallScripts "build_dictionary_final.py"

  # Crear directorios necesarios
  foreach ($d in @($DataDir, $DumpsDir, (Split-Path $DictDest -Parent))) {
    if (-not (Test-Path $d)) {
      New-Item -ItemType Directory -Path $d -Force | Out-Null
    }
  }

  # Crear entorno virtual Python
  Write-Step "Creando entorno virtual Python"
  if (-not (Test-Path $VenvDir)) {
    if ($PSCmdlet.ShouldProcess($VenvDir, "python -m venv")) {
      python -m venv $VenvDir
      Assert-ExitCode $LASTEXITCODE "python -m venv"
    }
  } else {
    Write-Warn "Entorno virtual ya existe en $VenvDir"
  }

  $PipExe = Join-Path $VenvDir "Scripts\pip.exe"
  $PyExe  = Join-Path $VenvDir "Scripts\python.exe"

  # Instalar dependencias Python
  Write-Step "Instalando dependencias Python (lxml, wikitextparser)"
  if ($PSCmdlet.ShouldProcess($ReqFile, "pip install")) {
    & $PipExe install --upgrade pip | Out-Null
    & $PipExe install -r $ReqFile
    Assert-ExitCode $LASTEXITCODE "pip install"
  }
  Write-OK "Dependencias Python instaladas"

  # Paso 1 — Descargar dumps y construir SQLite crudo
  if (Test-Path $DictRaw) {
    Write-Warn "dictionaries.sqlite ya existe — saltando descarga"
  } else {
    Write-Step "Descargando dumps de Wiktionary ($Langs)"
    Write-Warn "Este proceso puede tardar 30-90 minutos según la conexión."
    if ($PSCmdlet.ShouldProcess($DictRaw, "build_wiktionary_sqlite.py")) {
      & $PyExe $BuildScript `
        --out $DictRaw `
        --sources $Langs `
        --workdir $DataDir `
        --mode full
      Assert-ExitCode $LASTEXITCODE "build_wiktionary_sqlite"
    }
    Write-OK "SQLite crudo generado: $DictRaw"
  }

  # Paso 2 — Construir diccionario final
  if (Test-Path $DictFinal) {
    Write-Warn "Diccionario.sqlite ya existe — saltando construcción"
  } else {
    Write-Step "Construyendo diccionario final"
    Write-Warn "Este proceso puede tardar 10-30 minutos."
    if ($PSCmdlet.ShouldProcess($DictFinal, "build_dictionary_final.py")) {
      & $PyExe $FinalScript `
        --in  $DictRaw `
        --out $DictFinal `
        --langs $Langs
      Assert-ExitCode $LASTEXITCODE "build_dictionary_final"
    }
    Write-OK "Diccionario final generado: $DictFinal"
  }

  # Paso 3 — Copiar a la API
  Write-Step "Copiando diccionario a api/src/diccionarios/"
  if ($PSCmdlet.ShouldProcess($DictDest, "Copiar Diccionario.sqlite")) {
    Copy-Item -Path $DictFinal -Destination $DictDest -Force
  }
  Write-OK "Diccionario copiado a $DictDest"

  # Paso 4 — Limpiar archivos temporales
  Write-Step "Limpiando archivos temporales"
  if ($PSCmdlet.ShouldProcess($DictRaw, "Borrar SQLite crudo")) {
    Remove-Item -Path $DictRaw -Force -ErrorAction SilentlyContinue
    Write-OK "dictionaries.sqlite eliminado"
  }
  if ($PSCmdlet.ShouldProcess($DumpsDir, "Borrar dumps descargados")) {
    Remove-Item -Path $DumpsDir -Recurse -Force -ErrorAction SilentlyContinue
    Write-OK "Dumps de Wiktionary eliminados"
  }

} else {
  Write-Warn "Diccionario omitido (-SkipDict). Para construirlo después:"
  Write-Warn "  .\composer.ps1 -SkipClone -Only dict"
}

# ── Resumen final ──────────────────────────────────────────

Pop-Location  # Volver del InstallDir

Write-Host ""
Write-Host "══════════════════════════════════════════════" -ForegroundColor Green
Write-Host "  Virtual Book instalado correctamente" -ForegroundColor Green
Write-Host "══════════════════════════════════════════════" -ForegroundColor Green
Write-Host ""
Write-Host "  Para iniciar el proyecto:" -ForegroundColor White
Write-Host "    cd $InstallDir" -ForegroundColor Gray
Write-Host "    cd api  && npm run dev   # Puerto 5050" -ForegroundColor Gray
Write-Host "    cd apps/web && npm run dev  # Puerto 5173" -ForegroundColor Gray
Write-Host ""
Write-Warn "Revisá api/.env antes de iniciar en producción."
Write-Host ""
