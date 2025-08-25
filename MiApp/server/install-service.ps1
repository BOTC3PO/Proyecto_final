$ErrorActionPreference = 'Stop'
$mongod = "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
if (-not (Test-Path $mongod)) { Write-Error 'mongod.exe no encontrado. No se puede instalar el servicio.'; exit 1 }
$serviceName = 'MongoDB-MiApp'
$conf = (Resolve-Path .\native\mongod.conf).Path
Write-Host "Instalando servicio $serviceName ..." -ForegroundColor Green
& $mongod --config "$conf" --install --serviceName "$serviceName"
Start-Sleep -Seconds 1
Start-Service "$serviceName"
Get-Service "$serviceName"
