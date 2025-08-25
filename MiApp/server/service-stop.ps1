$serviceName = 'MongoDB-MiApp'
Write-Host "Deteniendo servicio $serviceName ..." -ForegroundColor Yellow
Stop-Service $serviceName
Get-Service $serviceName
