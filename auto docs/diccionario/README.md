# Wiktionary SQLite Database Builder

Este programa construye una base de datos SQLite única desde dumps recientes de Wiktionary/Wikcionario, procesando los archivos XML en modo streaming para evitar consumo excesivo de RAM.

## Requisitos

- **Python 3.7+**
- **Paquetes Python:**
  - `lxml` (recomendado para mejor rendimiento)
  
```bash
pip install lxml
```

Si lxml no está disponible, el script usará xml.etree (más lento pero funcional).

## Uso Básico

### Modo FULL (todas las páginas)

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode full
```

### Modo LITE (dataset reducido)

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode lite \
  --max-pages 50000 \
  --max-text-bytes 100000
```

## Opciones del CLI

- `--out PATH`: Ruta de salida para la base de datos SQLite (default: `./data/dictionaries.sqlite`)
- `--sources LANGS`: Lista separada por comas de wikis (ej: `es,it,eo,fr,pt,en`)
- `--mode MODE`: `full` (todas las páginas) o `lite` (limitado)
- `--max-pages N`: Máximo de páginas por fuente (solo modo lite)
- `--max-text-bytes N`: Excluir páginas con texto > N bytes
- `--workdir PATH`: Directorio de trabajo para descargas (default: `./data`)
- `--skip-download`: Saltar descarga (usar dumps existentes)

## Características

### Descarga Automática
- Detecta automáticamente el dump más reciente de dumps.wikimedia.org
- Resume descargas interrumpidas
- Usa cache local para evitar descargas duplicadas

### Procesamiento Streaming
- Parseo incremental de archivos XML
- Liberación progresiva de memoria
- Soporta archivos .bz2 gigantes sin descomprimir completamente

### Filtrado Inteligente
- Solo namespace principal (ns=0)
- Opcionalmente limita tamaño de texto
- Opcionalmente limita número de páginas

### Base de Datos Optimizada
- Índices para búsquedas rápidas
- Pragmas optimizados durante build
- VACUUM final para compactar

## Esquema de la Base de Datos

```sql
CREATE TABLE entries (
  source TEXT NOT NULL,          -- 'es', 'it', 'eo', etc
  title TEXT NOT NULL,           -- título de la página
  ns INTEGER,                    -- namespace
  page_id INTEGER,               -- ID de página
  rev_id INTEGER,                -- ID de revisión
  parent_id INTEGER,             -- ID de revisión padre
  timestamp TEXT,                -- timestamp de la revisión
  model TEXT,                    -- 'wikitext'
  format TEXT,                   -- 'text/x-wiki'
  text TEXT,                     -- contenido wikitext crudo
  sha1 TEXT,                     -- hash SHA1
  is_redirect INTEGER DEFAULT 0, -- 1 si es redirect
  redirect_title TEXT,           -- título del redirect
  PRIMARY KEY (source, title)
);
```

## Ejemplos de Consultas

```python
import sqlite3

conn = sqlite3.connect('data/dictionaries.sqlite')
cur = conn.cursor()

# Buscar una palabra en español
cur.execute("SELECT text FROM entries WHERE source='es' AND title='perro'")
result = cur.fetchone()
if result:
    print(result[0])

# Contar entradas por idioma
cur.execute("SELECT source, COUNT(*) FROM entries GROUP BY source")
for source, count in cur.fetchall():
    print(f"{source}: {count:,} entries")

# Buscar redirects
cur.execute("SELECT title, redirect_title FROM entries WHERE is_redirect=1 LIMIT 10")
for title, redirect in cur.fetchall():
    print(f"{title} → {redirect}")
```

## Integración con extras.ps1

### Opción A: Base de Datos Pre-creada (Distribuir Comprimida)

1. **Generar la base de datos:**
   ```bash
   python build_wiktionary_sqlite.py --out dictionaries.sqlite --sources es,it,eo --mode lite --max-pages 50000
   ```

2. **Comprimir (usando zstd):**
   ```powershell
   # Windows (con zstd instalado)
   zstd -19 dictionaries.sqlite -o dictionaries.sqlite.zst
   
   # O usar 7-Zip
   7z a -t7z -m0=lzma2 -mx=9 dictionaries.sqlite.7z dictionaries.sqlite
   ```

3. **Generar hash:**
   ```powershell
   Get-FileHash dictionaries.sqlite.zst -Algorithm SHA256 | Select-Object Hash
   ```

4. **En extras.ps1:**
   ```powershell
   # Descargar archivo comprimido
   $url = "https://tu-servidor.com/dictionaries.sqlite.zst"
   $destZst = "$dataDir\dictionaries.sqlite.zst"
   $dest = "$dataDir\dictionaries.sqlite"
   
   Invoke-WebRequest -Uri $url -OutFile $destZst
   
   # Verificar hash
   $hash = (Get-FileHash $destZst -Algorithm SHA256).Hash
   if ($hash -ne "HASH_ESPERADO") {
       throw "Hash verification failed"
   }
   
   # Descomprimir
   zstd -d $destZst -o $dest
   Remove-Item $destZst
   ```

### Opción B: Generar Durante la Instalación

En `extras.ps1`:

```powershell
# Verificar Python
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Error "Python is required but not found"
    exit 1
}

# Instalar dependencias
pip install lxml

# Generar base de datos
$scriptPath = "$PSScriptRoot\tools\build_wiktionary_sqlite.py"
python $scriptPath `
    --out "$dataDir\dictionaries.sqlite" `
    --sources es,it,eo `
    --mode lite `
    --max-pages 50000 `
    --max-text-bytes 100000

if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to build Wiktionary database"
    exit 1
}

Write-Host "✓ Wiktionary database built successfully"
```

## Consideraciones de Tamaño

### Tamaños Esperados (Aproximados)

| Config | Páginas | Tamaño Aprox |
|--------|---------|--------------|
| es FULL | ~780k | ~1.5 GB |
| es LITE (50k pages) | 50k | ~80 MB |
| it FULL | ~650k | ~1.2 GB |
| eo FULL | ~300k | ~500 MB |
| es+it+eo LITE (50k each) | 150k | ~200 MB |

### Estrategias para Reducir Tamaño

1. **Modo LITE con límite de páginas:**
   ```bash
   --mode lite --max-pages 30000
   ```

2. **Limitar tamaño de texto:**
   ```bash
   --max-text-bytes 50000
   ```

3. **Seleccionar menos idiomas:**
   ```bash
   --sources es,eo
   ```

4. **Compresión para distribución:**
   - `.zst`: ~60-70% reducción
   - `.7z`: ~65-75% reducción
   - `.zip`: ~50-60% reducción

## Solución de Problemas

### Error: "lxml not found"
```bash
pip install lxml
```
El script funcionará sin lxml pero más lento.

### Error: "Out of memory"
- Usa modo LITE con `--max-pages`
- Reduce `--max-text-bytes`
- Procesa un idioma a la vez

### Error: "Cannot download dump"
- Verifica conexión a internet
- Intenta descargar manualmente desde https://dumps.wikimedia.org/
- Usa `--skip-download` si ya tienes los dumps

### Base de datos muy grande
- Usa modo LITE
- Comprime para distribución
- Considera generar durante instalación

## Validación

El script ejecuta validación automática al finalizar:
- Cuenta de entradas por fuente
- Verificación de namespaces
- Conteo de redirects
- Muestra títulos de ejemplo
- Reporta tamaño final

## Performance

### Modo FULL
- Descarga: 10-30 min por dump (según tamaño)
- Procesamiento: 30-60 min por dump grande
- Total: ~2-3 horas para es+it+eo FULL

### Modo LITE (50k pages)
- Descarga: igual
- Procesamiento: ~5-10 min por dump
- Total: ~30-60 min para es+it+eo LITE

## Licencia y Atribución

Los dumps de Wiktionary están licenciados bajo Creative Commons BY-SA 3.0.
Fuente: https://dumps.wikimedia.org/

Este script es una herramienta de procesamiento y no incluye contenido de Wiktionary.
