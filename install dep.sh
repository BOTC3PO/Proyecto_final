#beta not found

#!/bin/bash

# URL del repositorio a clonar
repoUrl="https://github.com/BOTC3PO/Proyecto_final"

# Directorio actual
destino=$(pwd)

# Crear carpeta temporal única
tempPath=$(mktemp -d -t repo_temp_XXXXXXXX)

# Clonar el repositorio
echo "Clonando repositorio..."
git clone "$repoUrl" "$tempPath"
if [ $? -ne 0 ]; then
    echo "❌ Error al clonar el repositorio."
    exit 1
fi

# Copiar archivos, excluyendo .git
echo "Copiando archivos..."
rsync -av --exclude='.git' "$tempPath/" "$destino/"

# Eliminar carpeta temporal
rm -rf "$tempPath"

echo "✅ Repositorio clonado y copiado correctamente en: $destino"

# Verificar si Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "❌ Python no está instalado o no está en PATH."
    exit 1
fi

# Crear entorno virtual
python3 -m venv entorno
if [ $? -ne 0 ]; then
    echo "❌ Error al crear el entorno virtual."
    exit 1
fi

# Activar entorno virtual
source entorno/bin/activate

# Actualizar pip
python -m pip install --upgrade pip

# Instalar requerimientos
pip install -r requirements.txt

# Desactivar entorno virtual
deactivate

# Instalar Tailwind CSS CLI
npm install tailwindcss @tailwindcss/cli

# Crear input.css
mkdir -p ./app/static/css
echo '@import "tailwindcss";' > ./app/static/css/input.css

# Generar start-dev.sh
cat << 'EOF' > start-dev.sh
#!/bin/bash

# Activar entorno virtual
source entorno/bin/activate

# Lanzar Flask en terminal separada
gnome-terminal -- bash -c "python3 ./app/app.py; exec bash"

# Lanzar Tailwind CSS en terminal separada
gnome-terminal -- bash -c "npx tailwindcss -i ./app/static/css/input.css -o ./app/static/css/output.css --watch; exec bash"

# Preguntar si se desea iniciar ngrok
read -p "¿Deseas iniciar ngrok en el puerto 5000? (s/n): " response
if [[ "$response" == "s" || "$response" == "S" ]]; then
    gnome-terminal -- bash -c "ngrok http 5000; exec bash"
fi
EOF

chmod +x start-dev.sh
echo "✅ Archivo start-dev.sh generado correctamente."
echo "✅ Instalación completada."
