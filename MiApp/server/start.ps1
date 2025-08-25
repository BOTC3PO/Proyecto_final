$mongod = "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
if (-not (Test-Path $mongod)) { Write-Error 'mongod.exe no encontrado. Edita start.ps1 con la ruta correcta.'; exit 1 }
Write-Host 'Iniciando MongoDB (nativo, primer plano)...' -ForegroundColor Green
& $mongod --config "C:\Users\javie\tesis final\Final_react\MiApp\server\native\mongod.conf"
