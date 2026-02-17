$ErrorActionPreference = 'Stop'

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
Set-Location $projectRoot

New-Item -ItemType Directory -Force data | Out-Null

python -m venv .venv_dict

& ".venv_dict\Scripts\Activate.ps1"

python -m pip install --upgrade pip
python -m pip install -r (Join-Path $PSScriptRoot 'requirements.txt')

python (Join-Path $PSScriptRoot 'build_wiktionary_sqlite.py') --out data/dictionaries.sqlite --sources es,it,eo
python (Join-Path $PSScriptRoot 'optimize_sqlite_zlib.py') --in data/dictionaries.sqlite --out data/dictionaries.optimized.sqlite

Write-Host "Diccionario creado correctamente"
