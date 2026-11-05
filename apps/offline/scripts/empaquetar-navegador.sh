#!/usr/bin/env bash
# «Modo navegador» para Linux (Huayra 5 y 6, y cualquier Linux sin la libwebkit2gtk-4.1 de Tauri 2).
#
# Compila el programa estático (musl) y arma, en dist/:
#   - virtualbook-sin-conexion-<versión>-linux-<arq>.tar.gz: se instala sin contraseña de administrador (instalar.sh);
#   - virtualbook-sin-conexion_<versión>_<arq>.deb: para instalar en todo el equipo.
#
# Uso: scripts/empaquetar-navegador.sh [x86_64|i686]   (antes: pnpm run web, para tener dist-web)
#
# VB_MANTENEDOR («Nombre <correo>») va en el campo Maintainer del .deb.
#
# Para compilar estático hace falta cargo-zigbuild con zig, o el compilador de musl (paquete musl-tools, solo x86_64).
set -euo pipefail
cd "$(dirname "$0")/.."

ARQ="${1:-x86_64}"
case "$ARQ" in
  x86_64) TARGET=x86_64-unknown-linux-musl; DEB_ARQ=amd64 ;;
  i686) TARGET=i686-unknown-linux-musl; DEB_ARQ=i386 ;;
  *) echo "arquitectura desconocida: $ARQ (x86_64 o i686)" >&2; exit 1 ;;
esac
[ -f dist-web/index.html ] || { echo "falta dist-web: correr antes «pnpm run web»" >&2; exit 1; }
VERSION="$(node -p 'require("./src-tauri/tauri.conf.json").version')"

if command -v cargo-zigbuild >/dev/null; then
  cargo zigbuild -p vb-navegador --release --target "$TARGET"
else
  cargo build -p vb-navegador --release --target "$TARGET"
fi
BIN="target/$TARGET/release/virtualbook-sin-conexion"
file "$BIN" | grep -q "statically linked" || { echo "el programa no quedó estático" >&2; exit 1; }

mkdir -p dist
NOMBRE="virtualbook-sin-conexion-$VERSION-linux-$DEB_ARQ"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --- tar.gz ---
D="$TMP/$NOMBRE"
mkdir -p "$D"
install -m 755 "$BIN" "$D/virtualbook-sin-conexion"
cp -r dist-web "$D/web"
install -m 644 src-tauri/icons/128x128.png "$D/virtualbook-sin-conexion.png"
install -m 755 empaque/linux/instalar.sh empaque/linux/desinstalar.sh "$D/"
sed "s/@VERSION@/$VERSION/" empaque/linux/LEEME.txt > "$D/LEEME.txt"
find "$D" -type d -exec chmod 755 {} + && find "$D" -type f ! -perm -u+x -exec chmod 644 {} +
tar -C "$TMP" --owner=0 --group=0 --sort=name --mtime='@0' -czf "dist/$NOMBRE.tar.gz" "$NOMBRE"

# --- .deb ---
R="$TMP/deb"
mkdir -p "$R/DEBIAN" "$R/opt/virtualbook-sin-conexion" "$R/usr/bin" "$R/usr/share/applications" "$R/usr/share/icons/hicolor/128x128/apps"
install -m 755 "$BIN" "$R/opt/virtualbook-sin-conexion/virtualbook-sin-conexion"
cp -r dist-web "$R/opt/virtualbook-sin-conexion/web"
ln -s /opt/virtualbook-sin-conexion/virtualbook-sin-conexion "$R/usr/bin/virtualbook-sin-conexion"
install -m 644 src-tauri/icons/128x128.png "$R/usr/share/icons/hicolor/128x128/apps/virtualbook-sin-conexion.png"
sed "s|@EXEC@|/opt/virtualbook-sin-conexion/virtualbook-sin-conexion|; s|@ICONO@|virtualbook-sin-conexion|" \
  empaque/linux/virtualbook-sin-conexion.desktop > "$R/usr/share/applications/virtualbook-sin-conexion.desktop"
cat > "$R/DEBIAN/control" <<CONTROL
Package: virtualbook-sin-conexion
Version: $VERSION
Architecture: $DEB_ARQ
Maintainer: ${VB_MANTENEDOR:-Virtual Book}
Section: education
Priority: optional
Installed-Size: $(du -sk "$R/opt" | cut -f1)
Recommends: firefox-esr | firefox | chromium | x-www-browser
Description: Virtual Book sin conexión (modo navegador)
 Módulos, prácticas y evaluaciones de Virtual Book sin internet. Se abre en el
 navegador del equipo; los datos quedan en la carpeta personal de cada usuario.
CONTROL
find "$R" -type d -exec chmod 755 {} + && find "$R" -type f ! -perm -u+x -exec chmod 644 {} +
dpkg-deb --root-owner-group -Zxz --build "$R" "dist/virtualbook-sin-conexion_${VERSION}_$DEB_ARQ.deb" >/dev/null

ls -la "dist/$NOMBRE.tar.gz" "dist/virtualbook-sin-conexion_${VERSION}_$DEB_ARQ.deb"
