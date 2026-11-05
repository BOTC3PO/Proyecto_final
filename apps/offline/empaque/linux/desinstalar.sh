#!/bin/sh
# Quita Virtual Book sin conexión de este usuario. Los datos se conservan salvo que se pida lo contrario.
set -eu
DATOS="${XDG_DATA_HOME:-$HOME/.local/share}"
rm -rf "$DATOS/virtualbook-sin-conexion"
rm -f "$DATOS/applications/virtualbook-sin-conexion.desktop" "$DATOS/icons/hicolor/128x128/apps/virtualbook-sin-conexion.png"
for d in "$(xdg-user-dir DESKTOP 2>/dev/null || true)" "$HOME/Escritorio" "$HOME/Desktop"; do
  if [ -n "$d" ] && [ "$d" != "$HOME" ]; then rm -f "$d/virtualbook-sin-conexion.desktop"; fi
done
if [ "${1:-}" = "--borrar-datos" ]; then
  rm -rf "$DATOS/ar.virtualbook.offline"
  echo "Se quitaron el programa y todos sus datos (perfiles, progreso y paquetes)."
else
  echo "Se quitó el programa. Los datos siguen en $DATOS/ar.virtualbook.offline"
  echo "(para borrarlos también: sh desinstalar.sh --borrar-datos)."
fi
