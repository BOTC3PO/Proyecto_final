$mongod = "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
if (-not (Test-Path $mongod)) { Write-Error 'mongod.exe no encontrado.'; exit 1 }

$conf = Join-Path $PSScriptRoot 'native\mongod.conf'
if (-not (Test-Path $conf)) { Write-Error 'mongod.conf no encontrado en $PSScriptRoot\native'; exit 1 }

Write-Host 'Iniciando MongoDB (primer plano)...' -ForegroundColor Green
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --config "$conf"
if ($LASTEXITCODE -ne 0) { Write-Error "mongod salio con codigo $LASTEXITCODE"; exit $LASTEXITCODE }
