#!/usr/bin/env bash
# Copia la CA propia del servidor al proyecto Android (no se versiona: cambia cuando haya dominio).
#   VB_CA=/ruta/ca.crt scripts/preparar-android.sh
set -euo pipefail
CA="${VB_CA:-$HOME/proyectos/monolitico/config/tls/ca.crt}"
DEST="$(dirname "$0")/../src-tauri/gen/android/app/src/main/res/raw/virtualbook_ca.crt"
openssl x509 -in "$CA" -noout -subject >/dev/null
mkdir -p "$(dirname "$DEST")"
cp "$CA" "$DEST"
echo "CA copiada en $DEST"
