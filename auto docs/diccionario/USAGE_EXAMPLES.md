# Ejemplos de Uso - Wiktionary SQLite Builder

## Escenarios Comunes

### 1. Build Rápido para Desarrollo (LITE)

Genera una base de datos pequeña para pruebas y desarrollo:

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources eo \
  --mode lite \
  --max-pages 10000 \
  --max-text-bytes 50000
```

**Resultado esperado:** ~15-20 MB, ~10 minutos

---

### 2. Base de Datos Mediana (Multi-idioma LITE)

Para un producto que necesita varios idiomas pero tamaño controlado:

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode lite \
  --max-pages 50000 \
  --max-text-bytes 100000
```

**Resultado esperado:** ~150-200 MB, ~1 hora

---

### 3. Base de Datos Completa (Un Solo Idioma)

Para máxima cobertura en un idioma:

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources eo \
  --mode full
```

**Resultado esperado:** ~300-500 MB para Esperanto, ~2-3 horas

---

### 4. Base de Datos FULL Multi-idioma (Grande)

Para aplicaciones que necesitan cobertura completa:

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo,pt,fr \
  --mode full
```

**Resultado esperado:** ~3-5 GB, ~8-12 horas

⚠️ **IMPORTANTE:** Este tamaño requiere compresión o generación durante instalación.

---

### 5. Usar Dumps Existentes (Sin Re-descargar)

Si ya descargaste los dumps previamente:

```bash
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode full \
  --skip-download
```

Los dumps deben estar en `./data/dumps/` con el formato:  
`{lang}wiktionary-YYYYMMDD-pages-articles.xml.bz2`

---

## Consultas de Ejemplo

Una vez creada la base de datos, puedes consultarla:

### Python

```python
import sqlite3

conn = sqlite3.connect('data/dictionaries.sqlite')
cur = conn.cursor()

# Buscar definición
cur.execute("""
    SELECT text FROM entries 
    WHERE source='es' AND title='casa'
""")
result = cur.fetchone()
if result:
    print(result[0])

# Estadísticas
cur.execute("""
    SELECT source, COUNT(*) as count 
    FROM entries 
    GROUP BY source
""")
for source, count in cur.fetchall():
    print(f"{source}: {count:,} palabras")

# Búsqueda parcial
cur.execute("""
    SELECT title FROM entries 
    WHERE source='es' AND title LIKE 'cas%' 
    LIMIT 10
""")
for (title,) in cur.fetchall():
    print(title)

conn.close()
```

### SQLite CLI

```bash
sqlite3 data/dictionaries.sqlite

# Contar entradas
SELECT source, COUNT(*) FROM entries GROUP BY source;

# Buscar palabra
SELECT text FROM entries WHERE source='es' AND title='perro';

# Listar redirects
SELECT title, redirect_title 
FROM entries 
WHERE is_redirect=1 
LIMIT 10;

# Buscar por patrón
SELECT title FROM entries 
WHERE source='es' AND title GLOB 'auto*' 
LIMIT 20;
```

---

## Estimaciones de Tamaño por Idioma

Basado en dumps de enero 2025:

| Idioma | Código | Páginas (ns=0) | FULL | LITE (50k) |
|--------|--------|----------------|------|------------|
| Español | es | ~780,000 | ~1.5 GB | ~80 MB |
| Italiano | it | ~650,000 | ~1.2 GB | ~70 MB |
| Esperanto | eo | ~300,000 | ~500 MB | ~50 MB |
| Francés | fr | ~4,500,000 | ~8 GB | ~100 MB |
| Portugués | pt | ~500,000 | ~900 MB | ~65 MB |
| Inglés | en | ~6,800,000 | ~12 GB | ~120 MB |

---

## Compresión para Distribución

### Con zstd (recomendado)

```bash
# Comprimir
zstd -19 --ultra dictionaries.sqlite

# Resultado: dictionaries.sqlite.zst (~60-70% del tamaño original)

# Descomprimir
zstd -d dictionaries.sqlite.zst
```

### Con 7-Zip

```bash
# Comprimir
7z a -t7z -m0=lzma2 -mx=9 dictionaries.sqlite.7z dictionaries.sqlite

# Resultado: dictionaries.sqlite.7z (~65-75% del tamaño original)

# Descomprimir
7z x dictionaries.sqlite.7z
```

### Ejemplos de Tamaños Comprimidos

| Config | Sin Comprimir | zstd | 7z |
|--------|---------------|------|-----|
| eo LITE (10k) | 20 MB | 8 MB | 7 MB |
| es+it+eo LITE (50k each) | 200 MB | 80 MB | 70 MB |
| eo FULL | 500 MB | 200 MB | 180 MB |
| es FULL | 1.5 GB | 600 MB | 550 MB |

---

## Integración con Instaladores

### requirements.txt

```
lxml>=4.9.0
```

### Durante CI/CD

```bash
# Generar DB
python build_wiktionary_sqlite.py \
  --out dist/dictionaries.sqlite \
  --sources es,it,eo \
  --mode lite \
  --max-pages 50000

# Comprimir
zstd -19 dist/dictionaries.sqlite -o dist/dictionaries.sqlite.zst

# Generar hash
sha256sum dist/dictionaries.sqlite.zst > dist/dictionaries.sqlite.zst.sha256
```

### Durante Instalación de Usuario

Opción A: Descargar pre-compilada
```powershell
Invoke-WebRequest -Uri "https://releases.myapp.com/dictionaries.sqlite.zst" `
  -OutFile "dictionaries.sqlite.zst"
zstd -d dictionaries.sqlite.zst
```

Opción B: Generar localmente
```powershell
python tools/build_wiktionary_sqlite.py `
  --out data/dictionaries.sqlite `
  --sources es,it,eo `
  --mode lite `
  --max-pages 50000
```

---

## Troubleshooting

### "Download too slow"

- Los dumps son grandes (100MB-2GB comprimidos)
- Usar `--skip-download` y descargar manualmente
- O construir de manera incremental (un idioma a la vez)

### "Out of disk space"

- Modo FULL puede necesitar 5-10 GB temporales
- Usar modo LITE
- Limpiar `./data/dumps/` después de cada idioma

### "Process killed / Out of memory"

- Reducir `--max-pages`
- Aumentar swap
- Procesar un idioma a la vez

### "lxml installation failed"

```bash
# Ubuntu/Debian
sudo apt-get install python3-lxml

# Windows
# Descargar wheel desde: https://www.lfd.uci.edu/~gohlke/pythonlibs/#lxml

# El script funciona sin lxml, solo más lento
```

---

## Performance Tips

1. **Usa lxml:** ~3x más rápido que xml.etree
2. **SSD recomendado:** Las escrituras SQLite son intensivas
3. **Modo LITE primero:** Prueba con LITE antes de hacer FULL
4. **Paralelización:** Puedes construir múltiples DBs en paralelo (una por idioma) y luego fusionarlas manualmente
5. **Compresión online:** Para distribución, siempre comprime con zstd nivel 19

---

## Mantenimiento

### Actualizar Dumps

Los dumps de Wikimedia se actualizan mensualmente. Para actualizar:

```bash
# Limpiar dumps viejos
rm -rf ./data/dumps/*

# Re-ejecutar sin --skip-download
python build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode lite \
  --max-pages 50000
```

### Verificar Integridad

```bash
# Contar entradas
sqlite3 dictionaries.sqlite "SELECT COUNT(*) FROM entries;"

# Ver últimas actualizaciones
sqlite3 dictionaries.sqlite \
  "SELECT source, MAX(timestamp) FROM entries GROUP BY source;"

# Verificar no hay corrupción
sqlite3 dictionaries.sqlite "PRAGMA integrity_check;"
```
