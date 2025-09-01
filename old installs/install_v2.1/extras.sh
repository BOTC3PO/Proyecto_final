#!/bin/bash

# extras.sh
# Pasos opcionales: herramientas, linters, pre-commit, etc.

set -e

root=$(dirname "$(dirname "$(readlink -f "$0")")")

echo "==> [extras] Ejecutando extras..."

# Ejemplos:
# npm i -g pnpm
# pip install pre-commit
# pre-commit install

echo "==> [extras] OK"