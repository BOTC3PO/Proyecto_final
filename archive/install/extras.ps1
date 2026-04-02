<# install\extras.ps1
   Pasos opcionales: herramientas, linters, pre-commit, etc.
#>
[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot

Write-Host "==> [extras] Ejecutando extras..." -ForegroundColor Cyan

# Ejemplos:
# npm i -g pnpm
# pip install pre-commit
# pre-commit install

Write-Host "==> [extras] OK" -ForegroundColor Green
