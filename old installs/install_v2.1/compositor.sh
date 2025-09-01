#!/bin/bash

# Este script orquesta la ejecución de los sub-scripts de instalación.
# NOTA: La firma de código de PowerShell no tiene un equivalente directo en Bash.

set -e

declare -A scripts=(
  ["web"]="web.sh"
  ["mobile"]="mobile.sh"
  ["servidor"]="servidor.sh"
  ["api"]="api.sh"
  ["extras"]="extras.sh"
)

# Parámetros del script
only_steps=()
skip_steps=()
stop_on_error=true
log_level="Normal"
what_if=false

while [[ "$#" -gt 0 ]]; do
  case "$1" in
    -Only)
      shift
      IFS=',' read -r -a only_steps <<< "$1"
      ;;
    -Skip)
      shift
      IFS=',' read -r -a skip_steps <<< "$1"
      ;;
    -StopOnError)
      shift
      stop_on_error=$1
      ;;
    -LogLevel)
      shift
      log_level=$1
      ;;
    -WhatIf)
      what_if=true
      ;;
    *)
      echo "Parámetro desconocido: $1"
      exit 1
      ;;
  esac
  shift
done

log_file_path=""
function new_log_file {
  local log_dir="logs"
  mkdir -p "$log_dir"
  local timestamp=$(date +%Y%m%d_%H%M%S)
  log_file_path="$log_dir/install_$timestamp.log"
  echo "# Log de instalación: $(date)" > "$log_file_path"
}

function write_log {
  local message="$1"
  local level="${2:-INFO}"
  local line="[$(date +%H:%M:%S)] [$level] $message"
  case "$log_level" in
    "Quiet")
      if [[ "$level" == "ERROR" || "$level" == "WARN" ]]; then
        echo -e "\e[31m$line\e[0m" # Red
      fi
      ;;
    "Normal")
      if [[ "$level" == "ERROR" || "$level" == "WARN" || "$level" == "INFO" ]]; then
        echo "$line"
      fi
      ;;
    "Detailed")
      echo "$line"
      ;;
  esac
  echo "$line" >> "$log_file_path"
}

function invoke_step {
  local name="$1"
  local script_rel_path="${scripts[$name]}"

  if [[ " ${only_steps[@]} " =~ " ${name} " ]]; then
    write_log "Omitido por -Only: $name" 'INFO'
    return
  fi
  if [[ " ${skip_steps[@]} " =~ " ${name} " ]]; then
    write_log "Omitido por -Skip: $name" 'INFO'
    return
  fi
  
  if [ ! -f "$script_rel_path" ]; then
    write_log "No existe el script: $script_rel_path" 'ERROR'
    if $stop_on_error; then
      exit 1
    else
      return
    fi
  fi

  write_log "==> Ejecutando paso: $name ($script_rel_path)" 'INFO'
  start_time=$(date +%s)
  
  if $what_if; then
    echo "[WhatIf]: Ejecutando $script_rel_path"
    return
  fi
  
  if ! bash "$script_rel_path"; then
    write_log "✖ Error en $name" 'ERROR'
    if $stop_on_error; then
      exit 1
    else
      write_log "Continuando pese al error (-StopOnError:false)" 'WARN'
    fi
  else
    end_time=$(date +%s)
    duration=$((end_time - start_time))
    write_log "✔ Paso finalizado: $name en ${duration}s" 'INFO'
  fi
}

new_log_file
write_log "Iniciando instalación en $(pwd)" 'INFO'

# Orden recomendado
invoke_step 'web'
invoke_step 'mobile'
invoke_step 'servidor'
invoke_step 'api'
invoke_step 'extras'

write_log 'Instalación completa.' 'INFO'