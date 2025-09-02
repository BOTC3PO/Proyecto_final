<#
  descargar-repo.ps1
  Descarga la última versión (master/main) de un repositorio de GitHub,
  lo extrae y limpia el archivo .zip.
  
  Ejemplo de uso:
  .\descargar-repo.ps1 -RepoUrl "https://github.com/microsoft/vscode"
  
  Ejemplo con directorio de destino:
  .\descargar-repo.ps1 -RepoUrl "https://github.com/microsoft/vscode" -DestDir "C:\proyectos\vscode-repo"
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl,
    [string]$DestDir = (Join-Path $PSScriptRoot "downloads"),
    [string]$ZipFileName = "repo.zip"
)

$ErrorActionPreference = "Stop"

function Test-GitHubRepoUrl {
    param([string]$url)
    $uri = New-Object System.Uri($url)
    return $uri.Host -eq 'github.com' -and $uri.Segments.Length -ge 2 -and ($uri.AbsolutePath -match '/[a-zA-Z0-9-._]+/[a-zA-Z0-9-._]+/?$')
}

if (-not (Test-GitHubRepoUrl $RepoUrl)) {
    Write-Error "URL de repositorio de GitHub no válida: $RepoUrl"
    return
}

# Construir la URL de descarga del .zip
$downloadUrl = "$RepoUrl/archive/refs/heads/main.zip"
if ($RepoUrl.EndsWith("/")) { $downloadUrl = "$($RepoUrl)archive/refs/heads/main.zip" }

# Asegurar que el directorio de destino existe
if (-not (Test-Path $DestDir)) {
    Write-Host "Creando directorio de destino: $DestDir"
    New-Item -ItemType Directory -Path $DestDir -Force | Out-Null
}

$zipPath = Join-Path $DestDir $ZipFileName
$tempPath = Join-Path $DestDir "temp"
$destinationPath = $DestDir

try {
    Write-Host "Descargando de $downloadUrl..."
    Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath

    Write-Host "Extrayendo archivos a $destinationPath..."
    Expand-Archive -Path $zipPath -DestinationPath $tempPath -Force

    # Mover el contenido del subdirectorio extraído al directorio de destino final
    # (por ejemplo, 'repo-main/' a 'downloads/')
    $extractedDir = (Get-ChildItem -Path $tempPath).FullName
    Move-Item -Path "$extractedDir\*" -Destination $destinationPath -Force
    Remove-Item -Path $tempPath -Recurse -Force

    # Limpiar el archivo .zip
    Remove-Item -Path $zipPath -Force

    Write-Host "✅ Repositorio descargado y extraído en: $destinationPath" -ForegroundColor Green

}
catch {
    Write-Error "Ocurrió un error durante la descarga o extracción: $($_.Exception.Message)"
}