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

# Pedir la URL del repositorio
$repoUrl = "https://github.com/BOTC3PO/Proyecto_final.git"

# Preguntar nombre de carpeta destino (opcional)
$destino = "."

# Ejecutar git clone
if ($destino -eq "") {
    git clone $repoUrl
} else {
    git clone $repoUrl $destino
}

# Instalar tailwind-py (o el paquete equivalente)
npm install tailwindcss @tailwindcss/cli

#crear input.css
New-Item -ItemType Directory -Force -Path .\app\static\css | Out-Null
'@import "tailwindcss";' | Set-Content -Encoding UTF8 .\app\static\css\input.css

@"
# start-dev.ps1

# Rutas
\$pythonCommand = "`. .\venv\Scripts\Activate.ps1`npython .\app\app\app.py"
\$tailwindCommand = "npx @tailwindcss/cli -i ./app/static/css/input.css -o ./app/static/css/output.css --watch"

# Crear archivo temporal para consola Python
\$pythonScriptPath = "\$env:TEMP\run_python.ps1"
Set-Content -Path \$pythonScriptPath -Value \$pythonCommand -Encoding UTF8

# Crear archivo temporal para consola Tailwind
\$tailwindScriptPath = "\$env:TEMP\run_tailwind.ps1"
Set-Content -Path \$tailwindScriptPath -Value \$tailwindCommand -Encoding UTF8

# Abrir consola con Python
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", \$pythonScriptPath

# Abrir consola con Tailwind
Start-Process powershell -ArgumentList "-NoExit", "-ExecutionPolicy", "Bypass", "-File", \$tailwindScriptPath

# Preguntar si se quiere iniciar ngrok
\$response = Read-Host "¿Deseas iniciar ngrok en el puerto 5000? (s/n)"

if (\$response -eq "s" -or \$response -eq "S") {
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "ngrok http 5000"
}
"@ | Set-Content -Path .\start-dev.ps1 -Encoding UTF8






Write-Host "Instalación completada."