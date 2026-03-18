# run.ps1 — Script de ejecución rápida para Auto-Docs Ollama
# Uso: .\run.ps1 [-Modelo "deepseek-coder"] [-Proyecto ".."] [-Salida "auto docs"]

param(
    [string]$Modelo = "llama3",
    [string]$Proyecto = "..",
    [string]$Salida = "auto docs",
    [string]$OllamaUrl = "http://localhost:11434",
    [int]$MaxTokens = 4096,
    [double]$Temperatura = 0.3
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "  === Auto-Docs Ollama ===" -ForegroundColor Cyan
Write-Host "  Modelo:   $Modelo"
Write-Host "  Proyecto: $Proyecto"
Write-Host "  Salida:   $Salida/$Modelo"
Write-Host ""

# Verificar que Ollama esté corriendo
try {
    $response = Invoke-RestMethod -Uri "$OllamaUrl/api/tags" -Method Get -TimeoutSec 5
    Write-Host "  [OK] Ollama conectado" -ForegroundColor Green
} catch {
    Write-Host "  [ERROR] No se pudo conectar a Ollama en $OllamaUrl" -ForegroundColor Red
    Write-Host "  Asegurate de que Ollama este corriendo: ollama serve" -ForegroundColor Yellow
    exit 1
}

# Verificar que el binario existe
$binPath = ".\target\release\auto-docs-ollama.exe"
if (-not (Test-Path $binPath)) {
    Write-Host "  Compilando proyecto..." -ForegroundColor Yellow
    cargo build --release
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  [ERROR] Error compilando" -ForegroundColor Red
        exit 1
    }
}

# Ejecutar
Write-Host "  Iniciando documentacion..." -ForegroundColor Cyan
Write-Host ""

& $binPath `
    --proyecto $Proyecto `
    --modelo $Modelo `
    --ollama-url $OllamaUrl `
    --salida $Salida `
    --max-tokens $MaxTokens `
    --temperatura $Temperatura

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "  Listo! Revisa la carpeta: $Salida\$Modelo" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "  Hubo errores. Revisa la salida arriba." -ForegroundColor Red
}
