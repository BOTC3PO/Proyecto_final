# extras_integration_example.ps1
# Ejemplo de integración con extras.ps1 para Wiktionary DB

param(
    [Parameter(Mandatory=$true)]
    [string]$DataDir,
    
    [Parameter(Mandatory=$false)]
    [ValidateSet("download", "build")]
    [string]$Strategy = "download"
)

$ErrorActionPreference = "Stop"

# ==============================================================================
# ESTRATEGIA A: DESCARGAR BASE DE DATOS PRE-CREADA (COMPRIMIDA)
# ==============================================================================

function Install-PrebuiltDatabase {
    param([string]$DataDir)
    
    Write-Host "=== Installing Prebuilt Wiktionary Database ===" -ForegroundColor Cyan
    
    # Configuración
    $dbUrl = "https://your-server.com/dictionaries.sqlite.zst"
    $expectedHash = "PUT_YOUR_SHA256_HASH_HERE"
    $compressedFile = Join-Path $DataDir "dictionaries.sqlite.zst"
    $dbFile = Join-Path $DataDir "dictionaries.sqlite"
    
    # Si ya existe, validar y salir
    if (Test-Path $dbFile) {
        Write-Host "✓ Database already exists: $dbFile" -ForegroundColor Green
        return
    }
    
    # Crear directorio si no existe
    if (-not (Test-Path $DataDir)) {
        New-Item -ItemType Directory -Path $DataDir -Force | Out-Null
    }
    
    # Descargar archivo comprimido
    Write-Host "Downloading compressed database..."
    try {
        Invoke-WebRequest -Uri $dbUrl -OutFile $compressedFile -UseBasicParsing
        Write-Host "✓ Download complete" -ForegroundColor Green
    }
    catch {
        Write-Error "Failed to download database: $_"
        exit 1
    }
    
    # Verificar hash
    Write-Host "Verifying integrity..."
    $actualHash = (Get-FileHash $compressedFile -Algorithm SHA256).Hash
    if ($actualHash -ne $expectedHash) {
        Write-Error "Hash verification failed!"
        Write-Error "Expected: $expectedHash"
        Write-Error "Actual:   $actualHash"
        Remove-Item $compressedFile -Force
        exit 1
    }
    Write-Host "✓ Hash verified" -ForegroundColor Green
    
    # Descomprimir
    Write-Host "Decompressing database..."
    
    # Opción 1: Con zstd
    if (Get-Command zstd -ErrorAction SilentlyContinue) {
        zstd -d $compressedFile -o $dbFile
        if ($LASTEXITCODE -ne 0) {
            Write-Error "Decompression failed"
            exit 1
        }
    }
    # Opción 2: Con 7-Zip (si el archivo es .7z)
    elseif (Get-Command 7z -ErrorAction SilentlyContinue) {
        7z x $compressedFile -o"$DataDir"
        if ($LASTEXITCODE -ne 0) {
            Write-Error "Decompression failed"
            exit 1
        }
    }
    # Opción 3: Si es .zip, usar built-in
    elseif ($compressedFile -like "*.zip") {
        Expand-Archive -Path $compressedFile -DestinationPath $DataDir -Force
    }
    else {
        Write-Error "No decompression tool found (zstd or 7z required)"
        exit 1
    }
    
    Write-Host "✓ Decompression complete" -ForegroundColor Green
    
    # Limpiar archivo comprimido
    Remove-Item $compressedFile -Force
    
    # Verificar resultado
    if (Test-Path $dbFile) {
        $sizeMB = [math]::Round((Get-Item $dbFile).Length / 1MB, 2)
        Write-Host "✓ Database installed successfully: $dbFile ($sizeMB MB)" -ForegroundColor Green
    }
    else {
        Write-Error "Database file not found after decompression"
        exit 1
    }
}

# ==============================================================================
# ESTRATEGIA B: GENERAR BASE DE DATOS DURANTE INSTALACIÓN
# ==============================================================================

function Build-DatabaseLocally {
    param([string]$DataDir)
    
    Write-Host "=== Building Wiktionary Database Locally ===" -ForegroundColor Cyan
    
    $dbFile = Join-Path $DataDir "dictionaries.sqlite"
    
    # Si ya existe, saltar
    if (Test-Path $dbFile) {
        Write-Host "✓ Database already exists: $dbFile" -ForegroundColor Green
        return
    }
    
    # Verificar Python
    Write-Host "Checking Python..."
    if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
        Write-Error "Python is required but not found. Please install Python 3.7+"
        Write-Error "Download from: https://www.python.org/downloads/"
        exit 1
    }
    
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Found: $pythonVersion" -ForegroundColor Green
    
    # Verificar pip
    if (-not (Get-Command pip -ErrorAction SilentlyContinue)) {
        Write-Error "pip not found. Please ensure pip is installed with Python"
        exit 1
    }
    
    # Instalar dependencias
    Write-Host "Installing Python dependencies..."
    pip install --quiet lxml
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "lxml installation failed, will use fallback (slower)"
    }
    else {
        Write-Host "✓ Dependencies installed" -ForegroundColor Green
    }
    
    # Ubicar script
    $scriptPath = Join-Path $PSScriptRoot "tools\build_wiktionary_sqlite.py"
    if (-not (Test-Path $scriptPath)) {
        Write-Error "Build script not found: $scriptPath"
        exit 1
    }
    
    # Ejecutar build
    Write-Host ""
    Write-Host "Building database (this may take 30-60 minutes)..." -ForegroundColor Yellow
    Write-Host ""
    
    $buildArgs = @(
        $scriptPath,
        "--out", $dbFile,
        "--sources", "es,it,eo",
        "--mode", "lite",
        "--max-pages", "50000",
        "--max-text-bytes", "100000",
        "--workdir", $DataDir
    )
    
    python @buildArgs
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Database build failed"
        exit 1
    }
    
    # Verificar resultado
    if (Test-Path $dbFile) {
        $sizeMB = [math]::Round((Get-Item $dbFile).Length / 1MB, 2)
        Write-Host ""
        Write-Host "✓ Database built successfully: $dbFile ($sizeMB MB)" -ForegroundColor Green
    }
    else {
        Write-Error "Database file not found after build"
        exit 1
    }
}

# ==============================================================================
# MAIN
# ==============================================================================

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Wiktionary Database Setup" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

switch ($Strategy) {
    "download" {
        Install-PrebuiltDatabase -DataDir $DataDir
    }
    "build" {
        Build-DatabaseLocally -DataDir $DataDir
    }
}

Write-Host ""
Write-Host "✓ Setup complete!" -ForegroundColor Green
Write-Host ""
