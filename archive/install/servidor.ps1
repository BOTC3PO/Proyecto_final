<# install\servidor.ps1
   Configura backend y MongoDB (archivos y arranque en primer plano).
#>
[CmdletBinding()]
param(
  [string]$MongoConfigName = 'mongod.conf',
  [int]$MongoPort = 27017,
  [string]$NativeDbDir = "data\db",
  [string]$NativeLogDir = "logs"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# --- Paths base ---
$Root       = $PSScriptRoot                  # carpeta 'install'
$Proj       = Split-Path $Root -Parent       # raíz del repo
$ServerDir  = Join-Path $Proj 'server'
$NativeDir  = Join-Path $ServerDir 'native'  # carpeta para conf/binarios locales
$DataDir    = Join-Path $ServerDir $NativeDbDir
$LogsDir    = Join-Path $ServerDir $NativeLogDir
$LogFile    = Join-Path $LogsDir 'mongod.log'
$ConfPath   = Join-Path $NativeDir $MongoConfigName

Write-Host "==> [servidor] Preparando carpetas en: $ServerDir" -ForegroundColor Cyan

# Crear estructura necesaria (idempotente)
$dirs = @($ServerDir, $NativeDir, $DataDir, $LogsDir)
foreach ($d in $dirs) {
  if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d -Force | Out-Null }
}
if (-not (Test-Path $LogFile)) { New-Item -ItemType File -Path $LogFile -Force | Out-Null }

# --- Generar mongod.conf si no existe ---
if (-not (Test-Path $ConfPath)) {
  Write-Host "==> [servidor] Generando $MongoConfigName en $NativeDir" -ForegroundColor Yellow

  # Normalizar a / para YAML de Mongo
  $dbPath  = $DataDir.Replace('\','/')
  $logPath = $LogFile.Replace('\','/')

  @"
# MongoDB config basica
systemLog:
  destination: file
  path: "$logPath"
  logAppend: true
storage:
  dbPath: "$dbPath"
net:
  bindIp: 127.0.0.1
  port: $MongoPort
"@ | Out-File -Encoding UTF8 -FilePath $ConfPath
} else {
  Write-Host "==> [servidor] Ya existe $MongoConfigName en $NativeDir (no se sobreescribe)" -ForegroundColor DarkYellow
}

# --- Resolver mongod.exe ---
function Get-MongoBinaryPath {
  $candidatos = @(
    (Join-Path $NativeDir 'mongodb\bin\mongod.exe'),
    'C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe',
    'C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe',
    'C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe',
    'C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe'
  )
  foreach($p in $candidatos) { if (Test-Path $p) { return $p } }
  return $null
}

$mongodPath = Get-MongoBinaryPath
if (-not $mongodPath) {
  Write-Warning "No se encontro mongod.exe. Colocalo en $NativeDir\mongodb\bin\ o instala MongoDB y re-ejecuta este paso."
} else {
  Write-Host "==> [servidor] mongod encontrado en: $mongodPath" -ForegroundColor Green

  # --- Crear server\start.ps1 para arrancar mongod con esta conf ---
  $StartScript = Join-Path $ServerDir 'start.ps1'
  @"
`$mongod = `"$mongodPath`"
if (-not (Test-Path `$mongod)) { Write-Error 'mongod.exe no encontrado.'; exit 1 }

`$conf = Join-Path `$PSScriptRoot 'native\$MongoConfigName'
if (-not (Test-Path `$conf)) { Write-Error 'mongod.conf no encontrado en `$PSScriptRoot\native'; exit 1 }

Write-Host 'Iniciando MongoDB (primer plano)...' -ForegroundColor Green
& `"$mongodPath`" --config `"`$conf`"
if (`$LASTEXITCODE -ne 0) { Write-Error "mongod salio con codigo `$LASTEXITCODE"; exit `$LASTEXITCODE }
"@ | Out-File -Encoding UTF8 -FilePath $StartScript

  Write-Host "==> [servidor] start.ps1 generado en $ServerDir" -ForegroundColor Green
}

Write-Host "==> [servidor] OK" -ForegroundColor Green
