# URL del repositorio a clonar
$repoUrl = "https://github.com/BOTC3PO/Proyecto_final"

# Directorio actual donde se ejecuta el script
$destino = Get-Location

# Crear carpeta temporal única
$tempPath = Join-Path -Path $env:TEMP -ChildPath ("repo_temp_" + [guid]::NewGuid().ToString())

# Ejecutar git clone y esperar a que termine
Write-Host "Clonando repositorio..."
$clone = Start-Process -FilePath "git" -ArgumentList "clone", "$repoUrl", "$tempPath" -NoNewWindow -Wait -PassThru

# Verificar que el clone fue exitoso
if ($clone.ExitCode -ne 0) {
    Write-Error "Error al clonar el repositorio. Código de salida: $($clone.ExitCode)"
    exit 1
}

# Copiar archivos (excluyendo .git) al destino
Write-Host "Copiando archivos..."
$sourceItems = Get-ChildItem -Path $tempPath -Recurse -Force | Where-Object {
    $_.FullName -notmatch '\\\.git($|\\)'
}

foreach ($item in $sourceItems) {
    $relativePath = $item.FullName.Substring($tempPath.Length).TrimStart('\')
    $targetPath = Join-Path -Path $destino -ChildPath $relativePath

    if ($item.PSIsContainer) {
        if (!(Test-Path -Path $targetPath)) {
            New-Item -ItemType Directory -Path $targetPath | Out-Null
        }
    } else {
        $targetDir = Split-Path -Path $targetPath
        if (!(Test-Path -Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        }
        Copy-Item -Path $item.FullName -Destination $targetPath -Force
    }
}

# Eliminar la carpeta temporal
Remove-Item -Path $tempPath -Recurse -Force

Write-Host "✅ Repositorio clonado y copiado correctamente en: $destino"


#verificar python
try{
    python --version | Out-Null
}catch{
    Write-Error "Python no está instalado o no se encuentra en las variables de entorno."
    exit 1
}
# Crear entorno 
python -m venv entorno 
if($LASTEXITCODE -ne 0){
    Write-Error "Error al crear el entorno virtual."
    exit 1
}

# Activar el entorno virtual
. .\entorno\Scripts\Activate.ps1

# Actualizar pip
python -m pip install --upgrade pip

#requierements
pip install -r requirements.txt

#cerrar python
.\entorno\Scripts\deactivate.bat


# Instalar tailwind-py (o el paquete equivalente)
npm install tailwindcss @tailwindcss/cli

#crear input.css
New-Item -ItemType Directory -Force -Path .\app\static\css | Out-Null
'@import "tailwindcss";' | Set-Content -Encoding UTF8 .\app\static\css\input.css

# start-dev-generator.ps1 (este es el script que genera start-dev.ps1)

$startDevContent = @'
# start-dev.ps1

# Rutas
$pythonCommand = ". .\entorno\Scripts\Activate.ps1`npython .\app\app.py"
$tailwindCommand = "npx @tailwindcss/cli -i ./app/static/css/input.css -o ./app/static/css/output.css --watch"

# Crear archivo temporal para consola Python
$pythonScriptPath = "$env:TEMP\run_python.ps1"
Set-Content -Path $pythonScriptPath -Value $pythonCommand -Encoding UTF8

# Crear archivo temporal para consola Tailwind
$tailwindScriptPath = "$env:TEMP\run_tailwind.ps1"
Set-Content -Path $tailwindScriptPath -Value $tailwindCommand -Encoding UTF8

# Abrir consola con Python
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", $pythonScriptPath

# Abrir consola con Tailwind
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", $tailwindScriptPath

# Preguntar si se quiere iniciar ngrok
$response = Read-Host "¿Deseas iniciar ngrok en el puerto 5000? (s/n)"

if ($response -eq "s" -or $response -eq "S") {
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "ngrok http 5000"
}
'@

# Guardar el contenido en start-dev.ps1
Set-Content -Path .\start-dev.ps1 -Value $startDevContent -Encoding UTF8
Write-Host "✅ Archivo start-dev.ps1 generado correctamente."


Write-Host "Instalación completada."