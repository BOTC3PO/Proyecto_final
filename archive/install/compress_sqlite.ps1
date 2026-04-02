# compress_sqlite.ps1
# Comprime la base de datos SQLite para distribución

param(
    [Parameter(Mandatory=$true)]
    [string]$InputDb,
    
    [Parameter(Mandatory=$false)]
    [string]$OutputArchive = "",
    
    [Parameter(Mandatory=$false)]
    [ValidateSet("zstd", "7z", "zip")]
    [string]$Method = "zstd",
    
    [Parameter(Mandatory=$false)]
    [switch]$GenerateHash
)

# Verificar que el archivo existe
if (-not (Test-Path $InputDb)) {
    Write-Error "Input file not found: $InputDb"
    exit 1
}

# Determinar nombre de salida si no se especificó
if ($OutputArchive -eq "") {
    switch ($Method) {
        "zstd" { $OutputArchive = "$InputDb.zst" }
        "7z"   { $OutputArchive = "$InputDb.7z" }
        "zip"  { $OutputArchive = "$InputDb.zip" }
    }
}

Write-Host "Compressing: $InputDb"
Write-Host "Output: $OutputArchive"
Write-Host "Method: $Method"
Write-Host ""

# Comprimir según el método
switch ($Method) {
    "zstd" {
        # Verificar que zstd está instalado
        if (-not (Get-Command zstd -ErrorAction SilentlyContinue)) {
            Write-Error "zstd not found. Install from: https://github.com/facebook/zstd/releases"
            Write-Host "Or use scoop: scoop install zstd"
            exit 1
        }
        
        Write-Host "Compressing with zstd (level 19, ultra)..."
        zstd -19 --ultra -f $InputDb -o $OutputArchive
        
        if ($LASTEXITCODE -ne 0) {
            Write-Error "Compression failed"
            exit 1
        }
    }
    
    "7z" {
        # Verificar que 7z está instalado
        if (-not (Get-Command 7z -ErrorAction SilentlyContinue)) {
            Write-Error "7z not found. Install 7-Zip from: https://www.7-zip.org/"
            exit 1
        }
        
        Write-Host "Compressing with 7-Zip (LZMA2, ultra)..."
        7z a -t7z -m0=lzma2 -mx=9 -mfb=64 -md=32m -ms=on $OutputArchive $InputDb
        
        if ($LASTEXITCODE -ne 0) {
            Write-Error "Compression failed"
            exit 1
        }
    }
    
    "zip" {
        Write-Host "Compressing with built-in ZIP (Optimal)..."
        Compress-Archive -Path $InputDb -DestinationPath $OutputArchive -CompressionLevel Optimal -Force
        
        if (-not (Test-Path $OutputArchive)) {
            Write-Error "Compression failed"
            exit 1
        }
    }
}

# Mostrar tamaños
$originalSize = (Get-Item $InputDb).Length
$compressedSize = (Get-Item $OutputArchive).Length
$ratio = [math]::Round(($compressedSize / $originalSize) * 100, 2)
$saved = [math]::Round((($originalSize - $compressedSize) / 1MB), 2)

Write-Host ""
Write-Host "✓ Compression complete"
Write-Host "Original size:   $([math]::Round($originalSize / 1MB, 2)) MB"
Write-Host "Compressed size: $([math]::Round($compressedSize / 1MB, 2)) MB"
Write-Host "Ratio:           $ratio%"
Write-Host "Saved:           $saved MB"

# Generar hash si se solicitó
if ($GenerateHash) {
    Write-Host ""
    Write-Host "Generating SHA256 hash..."
    $hash = (Get-FileHash $OutputArchive -Algorithm SHA256).Hash
    $hashFile = "$OutputArchive.sha256"
    $hash | Out-File -FilePath $hashFile -Encoding ASCII -NoNewline
    
    Write-Host "Hash: $hash"
    Write-Host "Saved to: $hashFile"
}

Write-Host ""
Write-Host "Output file: $OutputArchive"
