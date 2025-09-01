#!/bin/bash

set -e

root=$(dirname "$(dirname "$(readlink -f "$0")")")
server_dir="$root/server"
native_dir="$server_dir/native"
data_dir="$server_dir/data/db"
log_dir="$server_dir/logs"

mongo_config_name='mongod.conf'
mongo_port=27017

echo "==> [servidor] Preparando carpetas en: $server_dir"
mkdir -p "$server_dir" "$native_dir" "$data_dir" "$log_dir"

# Crear mongod.conf en server/native/
conf_path="$native_dir/$mongo_config_name"
if [ ! -f "$conf_path" ]; then
  echo "==> [servidor] Generando $mongo_config_name en $native_dir"
  cat > "$conf_path" << EOF
# MongoDB config básica
systemLog:
  destination: file
  path: $(realpath "$log_dir/mongod.log")
  logAppend: true
storage:
  dbPath: $(realpath "$data_dir")
net:
  bindIp: 127.0.0.1
  port: $mongo_port
EOF
else
  echo "==> [servidor] Ya existe $mongo_config_name en $native_dir (no se sobreescribe)"
fi

# Resolver mongod.exe
function get_mongo_binary_path {
  local candidates=(
    "$native_dir/mongodb/bin/mongod.exe"
    "/c/Program Files/MongoDB/Server/7.0/bin/mongod.exe"
    "/c/Program Files/MongoDB/Server/6.0/bin/mongod.exe"
    "/c/Program Files/MongoDB/Server/5.0/bin/mongod.exe"
  )
  for p in "${candidates[@]}"; do
    if [ -f "$p" ]; then
      echo "$p"
      return
    fi
  done
  echo ""
}

mongod_path=$(get_mongo_binary_path)
if [ -z "$mongod_path" ]; then
  echo "No se encontró mongod.exe. Colócalo en $native_dir/mongodb/bin/ o instala MongoDB y re-ejecuta este paso."
else
  echo "==> [servidor] mongod encontrado en: $mongod_path"

  # Crear start.sh en server/ para arrancar mongod con la conf local
  start_script="$server_dir/start.sh"
  cat > "$start_script" << EOF
#!/bin/bash
mongod_bin="$mongod_path"
if [ ! -f "\$mongod_bin" ]; then
  echo 'mongod.exe no encontrado.'
  exit 1
fi
conf_file="\$(realpath '$conf_path')"
if [ ! -f "\$conf_file" ]; then
  echo 'mongod.conf no encontrado en \$PWD/native'
  exit 1
fi
echo 'Iniciando MongoDB (primer plano)...'
"\$mongod_bin" --config "\$conf_file"
EOF
  chmod +x "$start_script"
  echo "==> [servidor] start.sh generado en $server_dir"
fi

echo "==> [servidor] OK"