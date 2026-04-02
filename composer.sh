#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# composer.sh — Instalador de Virtual Book para Linux
#
# Distros soportadas: Ubuntu/Debian (apt), Arch (pacman)
#
# Uso:
#   ./composer.sh                        # Instalación completa
#   ./composer.sh --skip-dict            # Sin diccionario
#   ./composer.sh --skip-clone           # Solo dependencias
#   ./composer.sh --langs "es,en"        # Idiomas del diccionario
#   ./composer.sh --dry-run              # Simulación
#   ./composer.sh --help                 # Ayuda
# ─────────────────────────────────────────────────────────────

set -euo pipefail

# ── Parámetros por defecto ──────────────────────────────────

SKIP_CLONE=false
SKIP_DICT=false
DRY_RUN=false
LANGS="es,en,pt,fr,it,la"
REPO_URL="https://github.com/tu-usuario/virtual-book.git"
BRANCH="main"
INSTALL_DIR="./virtual-book"

# ── Colores ─────────────────────────────────────────────────

C_CYAN="\033[0;36m"
C_GREEN="\033[0;32m"
C_YELLOW="\033[0;33m"
C_RED="\033[0;31m"
C_RESET="\033[0m"

step()  { echo -e "${C_CYAN}==> $*${C_RESET}"; }
ok()    { echo -e "${C_GREEN}    OK  $*${C_RESET}"; }
warn()  { echo -e "${C_YELLOW}    WARN $*${C_RESET}"; }
fail()  { echo -e "${C_RED}    ERR  $*${C_RESET}"; exit 1; }

run() {
  if [[ "$DRY_RUN" == "true" ]]; then
    echo -e "${C_YELLOW}    DRY  $*${C_RESET}"
  else
    eval "$@"
  fi
}

# ── Ayuda ───────────────────────────────────────────────────

usage() {
  echo ""
  echo "Uso: ./composer.sh [opciones]"
  echo ""
  echo "Opciones:"
  echo "  --skip-clone          No clonar/actualizar el repo"
  echo "  --skip-dict           No construir el diccionario"
  echo "  --langs LANGS         Idiomas del diccionario (default: es,en,pt,fr,it,la)"
  echo "  --repo-url URL        URL del repositorio git"
  echo "  --branch BRANCH       Rama a clonar (default: main)"
  echo "  --install-dir DIR     Directorio de instalación (default: ./virtual-book)"
  echo "  --dry-run             Simulación sin ejecutar nada"
  echo "  --help                Mostrar esta ayuda"
  echo ""
  exit 0
}

# ── Parseo de argumentos ────────────────────────────────────

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-clone)  SKIP_CLONE=true ;;
    --skip-dict)   SKIP_DICT=true ;;
    --dry-run)     DRY_RUN=true ;;
    --help)        usage ;;
    --langs)       LANGS="$2"; shift ;;
    --repo-url)    REPO_URL="$2"; shift ;;
    --branch)      BRANCH="$2"; shift ;;
    --install-dir) INSTALL_DIR="$2"; shift ;;
    *) warn "Argumento desconocido: $1" ;;
  esac
  shift
done

# ── Detectar distro ─────────────────────────────────────────

detect_distro() {
  if command -v apt &>/dev/null; then
    echo "debian"
  elif command -v pacman &>/dev/null; then
    echo "arch"
  else
    echo "unknown"
  fi
}

DISTRO=$(detect_distro)

if [[ "$DISTRO" == "unknown" ]]; then
  warn "Distro no reconocida. Solo se soporta Ubuntu/Debian y Arch."
  warn "Asegurate de tener instalado: git, node >= 18, npm, python >= 3.10"
fi

# ── Instalar dependencia del sistema si falta ───────────────

ensure_pkg() {
  local cmd="$1"      # comando a verificar (ej: git)
  local pkg="$2"      # nombre del paquete (ej: git)
  local pkg_arch="${3:-$pkg}"  # nombre en arch (si difiere)

  if command -v "$cmd" &>/dev/null; then
    return 0
  fi

  warn "$cmd no encontrado. Intentando instalar..."

  if [[ "$DISTRO" == "debian" ]]; then
    run "sudo apt-get update -qq"
    run "sudo apt-get install -y $pkg"
  elif [[ "$DISTRO" == "arch" ]]; then
    run "sudo pacman -Sy --noconfirm $pkg_arch"
  else
    fail "$cmd no encontrado y no se puede instalar automáticamente en esta distro."
  fi
}

# ── Verificar requisitos ────────────────────────────────────

step "Verificando requisitos"

# Git
ensure_pkg git git git

# Node.js >= 18
if ! command -v node &>/dev/null; then
  warn "Node.js no encontrado. Instalando via NodeSource..."
  if [[ "$DISTRO" == "debian" ]]; then
    run "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
    run "sudo apt-get install -y nodejs"
  elif [[ "$DISTRO" == "arch" ]]; then
    run "sudo pacman -Sy --noconfirm nodejs npm"
  else
    fail "Node.js no encontrado. Instalalo desde https://nodejs.org"
  fi
fi

NODE_VER=$(node --version 2>/dev/null | tr -d 'v' || echo "0.0.0")
NODE_MAJOR=$(echo "$NODE_VER" | cut -d. -f1)
if [[ "$NODE_MAJOR" -lt 18 ]]; then
  fail "Node.js >= 18 requerido (encontrado: v$NODE_VER). Actualizá Node.js."
fi
ok "Node.js v$NODE_VER"

# npm
NPM_VER=$(npm --version 2>/dev/null || echo "")
if [[ -z "$NPM_VER" ]]; then
  fail "npm no encontrado."
fi
ok "npm v$NPM_VER"

# Python >= 3.10 (solo si se construye el diccionario)
if [[ "$SKIP_DICT" == "false" ]]; then
  if ! command -v python3 &>/dev/null; then
    if [[ "$DISTRO" == "debian" ]]; then
      run "sudo apt-get install -y python3 python3-pip python3-venv"
    elif [[ "$DISTRO" == "arch" ]]; then
      run "sudo pacman -Sy --noconfirm python python-pip"
    else
      fail "Python3 no encontrado. Instalalo desde https://python.org"
    fi
  fi

  PY_VER=$(python3 --version 2>/dev/null | awk '{print $2}' || echo "0.0.0")
  PY_MAJOR=$(echo "$PY_VER" | cut -d. -f1)
  PY_MINOR=$(echo "$PY_VER" | cut -d. -f2)
  if [[ "$PY_MAJOR" -lt 3 ]] || [[ "$PY_MAJOR" -eq 3 && "$PY_MINOR" -lt 10 ]]; then
    fail "Python >= 3.10 requerido (encontrado: $PY_VER)"
  fi
  ok "Python $PY_VER"
fi

# ── Clonar o actualizar repo ────────────────────────────────

if [[ "$SKIP_CLONE" == "false" ]]; then
  step "Obteniendo código fuente"

  if [[ -d "$INSTALL_DIR/.git" ]]; then
    warn "Repositorio ya existe en $INSTALL_DIR — actualizando"
    run "git -C \"$INSTALL_DIR\" pull origin \"$BRANCH\""
  else
    run "git clone --branch \"$BRANCH\" --depth 1 \"$REPO_URL\" \"$INSTALL_DIR\""
  fi
  ok "Código fuente listo en $INSTALL_DIR"
else
  INSTALL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  warn "SkipClone activo — usando directorio actual: $INSTALL_DIR"
fi

API_DIR="$INSTALL_DIR/api"
WEB_DIR="$INSTALL_DIR/apps/web"

# ── Dependencias Node — API ─────────────────────────────────

step "Instalando dependencias de la API"
if [[ ! -d "$API_DIR" ]]; then
  fail "No se encontró la carpeta api/ en $INSTALL_DIR"
fi
run "npm --prefix \"$API_DIR\" install"
ok "Dependencias de API instaladas"

# ── Dependencias Node — Web ─────────────────────────────────

step "Instalando dependencias del cliente web"
if [[ ! -d "$WEB_DIR" ]]; then
  fail "No se encontró la carpeta apps/web/ en $INSTALL_DIR"
fi
run "npm --prefix \"$WEB_DIR\" install"
ok "Dependencias web instaladas"

# ── Archivo .env ────────────────────────────────────────────

step "Configurando variables de entorno"
ENV_PATH="$API_DIR/.env"

if [[ -f "$ENV_PATH" ]]; then
  warn ".env ya existe en api/ — no se sobreescribe"
else
  if [[ "$DRY_RUN" == "false" ]]; then
    cat > "$ENV_PATH" << 'EOF'
# ── Servidor ──────────────────────────────────────────────
PORT=5050
NODE_ENV=development

# ── Base de datos ──────────────────────────────────────────
MONGO_URI=mongodb://localhost:27017
DB_NAME=virtual_book
SQLITE_CORE_PATH=./src/base/core_schema.sqlite
SQLITE_PATH=./src/diccionarios/Diccionario.sqlite

# ── CORS ───────────────────────────────────────────────────
CORS_ORIGIN=http://localhost:5173

# ── JWT ────────────────────────────────────────────────────
JWT_SECRET=cambiar-en-produccion
JWT_REFRESH_SECRET=cambiar-en-produccion
JWT_ACCESS_TTL_SECONDS=3600

# ── MercadoPago (opcional) ─────────────────────────────────
PAYMENTS_ENABLED=false
MP_ACCESS_TOKEN=
MP_PUBLIC_KEY=
MP_WEBHOOK_SECRET=

# ── Precios en ARS ─────────────────────────────────────────
PRECIO_ALUMNO_MENSUAL=1000
PRECIO_STAFF_MENSUAL=300
PRECIO_EXPANSION_PROFESOR=150

# ── Admin ──────────────────────────────────────────────────
BOOTSTRAP_ADMIN_KEY=cambiar-en-produccion
EOF
  else
    warn "DRY  Crear $ENV_PATH"
  fi
  ok ".env generado en api/"
  warn "Revisá api/.env y completá los valores antes de iniciar."
fi

# ── Migraciones SQLite ──────────────────────────────────────

step "Ejecutando migraciones SQLite"
run "npm --prefix \"$API_DIR\" run db:sqlite:migrate"
ok "Migraciones aplicadas (user_version = 12)"

# ── Seed de tienda ──────────────────────────────────────────

step "Aplicando seed de tienda"
SEED_PATH="$API_DIR/sql/seed_tienda.sql"
CORE_DB="$API_DIR/src/base/core_schema.sqlite"

if [[ ! -f "$SEED_PATH" ]]; then
  warn "No se encontró sql/seed_tienda.sql — omitiendo seed"
else
  run "node --input-type=commonjs << 'SEED_EOF'
const Database = require('better-sqlite3');
const fs = require('fs');
const db = new Database('$CORE_DB');
const sql = fs.readFileSync('$SEED_PATH', 'utf8');
db.exec(sql);
console.log('Seed de tienda aplicado.');
SEED_EOF"
  ok "Seed de tienda aplicado"
fi

# ── Calendario económico ────────────────────────────────────

step "Generando calendario económico"
CAL_SCRIPT="$API_DIR/scripts/generar_calendario_economico.js"

if [[ ! -f "$CAL_SCRIPT" ]]; then
  warn "No se encontró scripts/generar_calendario_economico.js — omitiendo"
else
  run "node \"$CAL_SCRIPT\""
  ok "Calendario económico generado (1481 ciclos 2024-2100)"
fi

# ── Diccionario ─────────────────────────────────────────────

if [[ "$SKIP_DICT" == "false" ]]; then
  step "Construyendo diccionario Wiktionary"

  INSTALL_SCRIPTS="$INSTALL_DIR/install"
  DATA_DIR="$INSTALL_DIR/data"
  DUMPS_DIR="$DATA_DIR/dumps"
  DICT_RAW="$DATA_DIR/dictionaries.sqlite"
  DICT_FINAL="$DATA_DIR/Diccionario.sqlite"
  DICT_DEST="$API_DIR/src/diccionarios/Diccionario.sqlite"
  VENV_DIR="$INSTALL_DIR/.venv_dict"
  REQ_FILE="$INSTALL_SCRIPTS/requirements.txt"
  BUILD_SCRIPT="$INSTALL_SCRIPTS/build_wiktionary_sqlite.py"
  FINAL_SCRIPT="$INSTALL_SCRIPTS/build_dictionary_final.py"

  # Crear directorios necesarios
  run "mkdir -p \"$DATA_DIR\" \"$DUMPS_DIR\" \"$(dirname \"$DICT_DEST\")\""

  # Crear entorno virtual Python
  step "Creando entorno virtual Python"
  if [[ ! -d "$VENV_DIR" ]]; then
    run "python3 -m venv \"$VENV_DIR\""
  else
    warn "Entorno virtual ya existe en $VENV_DIR"
  fi

  PIP="$VENV_DIR/bin/pip"
  PY="$VENV_DIR/bin/python"

  # Instalar dependencias Python
  step "Instalando dependencias Python (lxml, wikitextparser)"
  run "\"$PIP\" install --upgrade pip -q"
  run "\"$PIP\" install -r \"$REQ_FILE\" -q"
  ok "Dependencias Python instaladas"

  # Paso 1 — Descargar dumps y construir SQLite crudo
  if [[ -f "$DICT_RAW" ]]; then
    warn "dictionaries.sqlite ya existe — saltando descarga"
  else
    step "Descargando dumps de Wiktionary ($LANGS)"
    warn "Este proceso puede tardar 30-90 minutos según la conexión."
    run "\"$PY\" \"$BUILD_SCRIPT\" \
      --out \"$DICT_RAW\" \
      --sources \"$LANGS\" \
      --workdir \"$DATA_DIR\" \
      --mode full"
    ok "SQLite crudo generado: $DICT_RAW"
  fi

  # Paso 2 — Construir diccionario final
  if [[ -f "$DICT_FINAL" ]]; then
    warn "Diccionario.sqlite ya existe — saltando construcción"
  else
    step "Construyendo diccionario final"
    warn "Este proceso puede tardar 10-30 minutos."
    run "\"$PY\" \"$FINAL_SCRIPT\" \
      --in  \"$DICT_RAW\" \
      --out \"$DICT_FINAL\" \
      --langs \"$LANGS\""
    ok "Diccionario final generado: $DICT_FINAL"
  fi

  # Paso 3 — Copiar a la API
  step "Copiando diccionario a api/src/diccionarios/"
  run "cp \"$DICT_FINAL\" \"$DICT_DEST\""
  ok "Diccionario copiado a $DICT_DEST"

  # Paso 4 — Limpiar temporales
  step "Limpiando archivos temporales"
  run "rm -f \"$DICT_RAW\""
  ok "dictionaries.sqlite eliminado"
  run "rm -rf \"$DUMPS_DIR\""
  ok "Dumps de Wiktionary eliminados"

else
  warn "Diccionario omitido (--skip-dict). Para construirlo después:"
  warn "  ./composer.sh --skip-clone --langs \"$LANGS\""
fi

# ── Resumen final ───────────────────────────────────────────

echo ""
echo -e "${C_GREEN}══════════════════════════════════════════════${C_RESET}"
echo -e "${C_GREEN}  Virtual Book instalado correctamente${C_RESET}"
echo -e "${C_GREEN}══════════════════════════════════════════════${C_RESET}"
echo ""
echo "  Para iniciar el proyecto:"
echo -e "    ${C_CYAN}cd $INSTALL_DIR${C_RESET}"
echo -e "    ${C_CYAN}cd api       && npm run dev   # Puerto 5050${C_RESET}"
echo -e "    ${C_CYAN}cd apps/web  && npm run dev   # Puerto 5173${C_RESET}"
echo ""
warn "Revisá api/.env antes de iniciar en producción."
echo ""
