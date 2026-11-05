#!/bin/sh
# Instala Virtual Book sin conexión para este usuario, sin contraseña de administrador.
# El programa queda en ~/.local/share/virtualbook-sin-conexion y aparece en el menú de aplicaciones (Educación).
set -eu
ORIGEN="$(cd "$(dirname "$0")" && pwd)"
DATOS="${XDG_DATA_HOME:-$HOME/.local/share}"
DESTINO="$DATOS/virtualbook-sin-conexion"
APLICACIONES="$DATOS/applications"
ICONOS="$DATOS/icons/hicolor/128x128/apps"

if [ ! -x "$ORIGEN/virtualbook-sin-conexion" ] || [ ! -f "$ORIGEN/web/index.html" ]; then
  echo "Este script tiene que estar en la carpeta descomprimida de Virtual Book sin conexión." >&2
  exit 1
fi

# Si ya estaba instalado, se reemplaza el programa; los datos (perfiles, progreso, paquetes) no se tocan.
rm -rf "$DESTINO.nuevo"
mkdir -p "$DESTINO.nuevo" "$APLICACIONES" "$ICONOS"
cp "$ORIGEN/virtualbook-sin-conexion" "$DESTINO.nuevo/"
cp -r "$ORIGEN/web" "$DESTINO.nuevo/web"
cp "$ORIGEN/desinstalar.sh" "$DESTINO.nuevo/"
chmod 755 "$DESTINO.nuevo/virtualbook-sin-conexion" "$DESTINO.nuevo/desinstalar.sh"
rm -rf "$DESTINO"
mv "$DESTINO.nuevo" "$DESTINO"

cp "$ORIGEN/virtualbook-sin-conexion.png" "$ICONOS/virtualbook-sin-conexion.png"
cat > "$APLICACIONES/virtualbook-sin-conexion.desktop" <<DESKTOP
[Desktop Entry]
Type=Application
Name=Virtual Book sin conexión
GenericName=Estudiar sin internet
Comment=Módulos, prácticas y evaluaciones de Virtual Book sin internet
Exec="$DESTINO/virtualbook-sin-conexion"
Icon=virtualbook-sin-conexion
Terminal=false
Categories=Education;
StartupNotify=false
DESKTOP
command -v update-desktop-database >/dev/null && update-desktop-database "$APLICACIONES" 2>/dev/null || true

# Acceso en el escritorio, si hay uno.
ESCRITORIO=""
for d in "$(xdg-user-dir DESKTOP 2>/dev/null || true)" "$HOME/Escritorio" "$HOME/Desktop"; do
  if [ -n "$d" ] && [ "$d" != "$HOME" ] && [ -d "$d" ]; then ESCRITORIO="$d"; break; fi
done
if [ -n "$ESCRITORIO" ]; then
  cp "$APLICACIONES/virtualbook-sin-conexion.desktop" "$ESCRITORIO/"
  chmod 755 "$ESCRITORIO/virtualbook-sin-conexion.desktop"
  command -v gio >/dev/null && gio set "$ESCRITORIO/virtualbook-sin-conexion.desktop" metadata::trusted true 2>/dev/null || true
fi

echo "Listo. Abrí «Virtual Book sin conexión» desde el menú de aplicaciones (Educación)."
