$serviceName = 'MongoDB-MiApp'
if (Get-Service -Name $serviceName -ErrorAction SilentlyContinue) {
  Write-Host "Deteniendo servicio $serviceName ..." -ForegroundColor Yellow
  Stop-Service $serviceName -ErrorAction SilentlyContinue
  Start-Sleep -Seconds 1
  Write-Host "Desinstalando servicio $serviceName ..." -ForegroundColor Yellow
  sc.exe delete "$serviceName" | Out-Null
} else {
  Write-Host "Servicio $serviceName no encontrado." -ForegroundColor Yellow
}
