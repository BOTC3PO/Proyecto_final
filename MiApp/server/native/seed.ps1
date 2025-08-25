param(
  [string]$MongoUri = "mongodb://localhost:27018",
  [string]$File = ".\native\init\educational_platform.seed.js"
)
$ErrorActionPreference = "Stop"
if (-not (Get-Command mongosh -ErrorAction SilentlyContinue)) {
  Write-Host "Instalando MongoDB Shell..." -ForegroundColor Yellow
  winget install --id MongoDB.Shell -e --accept-package-agreements --accept-source-agreements
}
Write-Host "Sembrando base con $File en $MongoUri ..." -ForegroundColor Cyan
mongosh $MongoUri --file $File
