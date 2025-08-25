$serviceName = 'MongoDB-MiApp'
Write-Host "Iniciando servicio $serviceName ..." -ForegroundColor Green
Start-Service $serviceName
Get-Service $serviceName
