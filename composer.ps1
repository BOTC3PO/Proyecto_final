# install.ps1
# Orquestador que ejecuta los sub-scripts de instalación:
#   install\web.ps1
#   install\mobile.ps1
#   install\servidor.ps1
#   install\extras.ps1
#
# Uso:
#   .\install.ps1                        # Ejecuta todo en orden
#   .\install.ps1 -Only web,servidor     # Ejecuta solo pasos seleccionados
#   .\install.ps1 -Skip extras           # Omite un paso
#   .\install.ps1 -WhatIf                # Modo simulacion
#   .\install.ps1 -Verbose               # Salida detallada

[CmdletBinding(SupportsShouldProcess = $true)]
param(
  [string[]]$Only,
  [string[]]$Skip,
  [switch]$StopOnError = $true,
  [ValidateSet('Quiet','Normal','Detailed')]
  [string]$LogLevel = 'Normal'
)

$ErrorActionPreference = 'Stop'

function Get-LogFile {
  $logDir = Join-Path $PSScriptRoot 'logs'
  if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir | Out-Null }
  $timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
  $logFilePath = Join-Path $logDir "composer_$timestamp.log"
  "## Log de instalacion: $(Get-Date)" | Out-File $logFilePath -Encoding UTF8
  return $logFilePath
}

$LogFilePath = Get-LogFile

function Write-Log {
  param(
    [Parameter(Mandatory)][string]$Message,
    [ValidateSet('INFO','WARN','ERROR')][string]$Level = 'INFO'
  )
  $timestamp = Get-Date -Format 'HH:mm:ss'
  $line = "[$timestamp] [$Level] $Message"

  switch ($LogLevel) {
    'Quiet' {
      if ($Level -in 'WARN','ERROR') { Write-Host $line -ForegroundColor Red }
    }
    'Normal' {
      if ($Level -eq 'INFO')  { Write-Host $line -ForegroundColor Cyan }
      if ($Level -eq 'WARN')  { Write-Host $line -ForegroundColor Yellow }
      if ($Level -eq 'ERROR') { Write-Host $line -ForegroundColor Red }
    }
    'Detailed' {
      Write-Host $line -ForegroundColor White
    }
  }

  Add-Content -Path $LogFilePath -Value $line -Encoding UTF8
}

function Invoke-Step {
  param(
    [Parameter(Mandatory)][string]$Name,
    [Parameter(Mandatory)][string]$ScriptRelPath
  )

  if ($Only -and (-not ($Only -contains $Name))) {
    Write-Log "Omitido por -Only: $Name" 'INFO'
    return
  }
  if ($Skip -and ($Skip -contains $Name)) {
    Write-Log "Omitido por -Skip: $Name" 'INFO'
    return
  }

  $scriptPath = Join-Path $PSScriptRoot $ScriptRelPath
  if (-not (Test-Path $scriptPath)) {
    Write-Log "No existe el script: $ScriptRelPath" 'ERROR'
    if ($StopOnError) { throw "El script $ScriptRelPath no se encontro." }
    return
  }

  Write-Log "==> Ejecutando paso: $Name ($ScriptRelPath)" 'INFO'
  $sw = [System.Diagnostics.Stopwatch]::StartNew()

  try {
    if ($PSCmdlet.ShouldProcess($scriptPath, 'Run')) {
      & $scriptPath
    }
    $sw.Stop()
    Write-Log ("OK Paso finalizado: {0} en {1}s" -f $Name, $sw.Elapsed.TotalSeconds.ToString('N2')) 'INFO'
  }
  catch {
    $sw.Stop()
    Write-Log ("ERROR en {0}: {1}" -f $Name, $_.Exception.Message) 'ERROR'
    if ($StopOnError) {
      throw ("Se detuvo la ejecucion por error en el paso {0}." -f $Name)
    } else {
      Write-Log "Se continua pese al error (-StopOnError:`$false)" 'WARN'
    }
  }
}

Write-Log "Iniciando instalacion en $PSScriptRoot" 'INFO'

# Ajusta las rutas reales aquí
Invoke-Step -Name 'servidor' -ScriptRelPath 'install\servidor.ps1'
Invoke-Step -Name 'api'      -ScriptRelPath 'install\api.ps1'
Invoke-Step -Name 'web'      -ScriptRelPath 'install\web.ps1'
Invoke-Step -Name 'mobile'   -ScriptRelPath 'install\mobile.ps1'
Invoke-Step -Name 'extras'   -ScriptRelPath 'install\extras.ps1'

Write-Log "Instalacion completa." 'INFO'

