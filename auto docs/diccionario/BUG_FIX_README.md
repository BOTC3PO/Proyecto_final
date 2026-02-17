# Bug Fix - Parser XML

## Problema Identificado

El script descargaba correctamente los dumps pero **no parseaba ninguna página** (0 entries importadas).

### Causa Raíz

El código original tenía un error de indentación crítico en la rama `else` (cuando lxml no está disponible):

```python
# INCORRECTO (código original)
for event, elem in context:
    tag = strip_ns(elem.tag)
    if tag != 'page':
        continue
    page_count += 1

# El código de extracción estaba FUERA del bucle for
page_data = {}  # ❌ Esto solo se ejecutaba una vez al final
for child in elem:
    ...
```

### Solución

El código de extracción de datos debe estar **dentro** del bucle for:

```python
# CORRECTO (código corregido)
for event, elem in context:
    tag = strip_ns(elem.tag)
    if tag != 'page':
        continue
    page_count += 1
    
    # ✓ Ahora está dentro del bucle
    page_data = {}
    for child in elem:
        ...
    
    yield page_data  # Retorna cada página
```

## Verificación

El test unitario ahora pasa correctamente:

```bash
$ python tools/test_build.py
=== ALL TESTS PASSED ===
✓ Parsed 3 pages
✓ Inserted: 2
✓ Redirects: 1
```

## Re-ejecutar el Build

Para procesar los dumps que ya descargaste, ejecuta con `--skip-download`:

```bash
python tools/build_wiktionary_sqlite.py \
  --out data/dictionaries.sqlite \
  --sources es,it,eo,fr,pt,en,ja,zh,de,ru,la \
  --mode full \
  --workdir temp \
  --skip-download
```

Esto usará los dumps ya descargados y ahora sí los parseará correctamente.

## Tiempo Estimado

Con 11 idiomas en modo FULL:

- **Español**: ~780k páginas, ~45-60 min
- **Italiano**: ~650k páginas, ~40-50 min  
- **Esperanto**: ~300k páginas, ~20-30 min
- **Francés**: ~4.5M páginas, ~3-4 horas
- **Portugués**: ~500k páginas, ~30-40 min
- **Inglés**: ~6.8M páginas, ~4-6 horas
- **Japonés**: ~400k páginas, ~30-40 min
- **Chino**: ~300k páginas, ~20-30 min
- **Alemán**: ~700k páginas, ~45-60 min
- **Ruso**: ~600k páginas, ~40-50 min
- **Latín**: ~100k páginas, ~10-15 min

**Total estimado**: 10-15 horas de procesamiento

**Tamaño final esperado**: 15-20 GB sin comprimir

## Recomendación

Dado el tamaño esperado (15-20 GB), considera:

### Opción 1: Modo LITE con límites
```bash
python tools/build_wiktionary_sqlite.py \
  --out data/dictionaries.sqlite \
  --sources es,it,eo,fr,pt,en,ja,zh,de,ru,la \
  --mode lite \
  --max-pages 100000 \
  --max-text-bytes 100000 \
  --workdir temp \
  --skip-download
```
→ ~1-2 GB, ~2-3 horas

### Opción 2: Solo idiomas clave
```bash
python tools/build_wiktionary_sqlite.py \
  --out data/dictionaries.sqlite \
  --sources es,en,de \
  --mode full \
  --workdir temp \
  --skip-download
```
→ ~4-5 GB, ~6-8 horas

### Opción 3: Un idioma a la vez
Procesar cada idioma en una DB separada para más flexibilidad.
