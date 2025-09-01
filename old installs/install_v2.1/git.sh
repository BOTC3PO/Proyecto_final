#!/bin/bash

# descargar-repo.sh
# Descarga la última versión (master/main) de un repositorio de GitHub,
# lo extrae y limpia el archivo .zip.

set -e

repo_url="$1"
dest_dir="${2:-"$(dirname "$(readlink -f "$0")")/downloads"}"
zip_file_name="${3:-"repo.zip"}"

if [ -z "$repo_url" ]; then
    echo "ERROR: Se requiere una URL de repositorio de GitHub."
    exit 1
fi

# Construir la URL de descarga del .zip
download_url="$repo_url/archive/refs/heads/main.zip"
if [[ "$repo_url" == */ ]]; then
  download_url="$repo_url/archive/refs/heads/main.zip"
fi

# Asegurar que el directorio de destino existe
mkdir -p "$dest_dir"

zip_path="$dest_dir/$zip_file_name"
temp_path="$dest_dir/temp"

echo "Descargando de $download_url..."
if ! curl -L -o "$zip_path" "$download_url"; then
    echo "ERROR: Falló la descarga del archivo ZIP."
    exit 1
fi

echo "Extrayendo archivos a $dest_dir..."
mkdir -p "$temp_path"
if ! unzip -q "$zip_path" -d "$temp_path"; then
    echo "ERROR: Falló la extracción del archivo ZIP."
    exit 1
fi

# Mover el contenido del subdirectorio extraído al directorio de destino final
extracted_dir=$(find "$temp_path" -maxdepth 1 -type d -name "*-main" | head -n 1)
if [ -n "$extracted_dir" ]; then
  mv "$extracted_dir"/* "$dest_dir"/
  rm -rf "$temp_path"
fi

# Limpiar el archivo .zip
rm "$zip_path"

echo "✅ Repositorio descargado y extraído en: $dest_dir"