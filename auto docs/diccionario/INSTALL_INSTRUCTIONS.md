# INSTRUCCIONES DE INSTALACIÓN - IMPORTANTE

## ⚠️ Problema Detectado

Estás ejecutando una **versión antigua del script** que tiene el bug de parsing.

## ✅ Solución

Debes **reemplazar** el archivo `build_wiktionary_sqlite.py` en tu directorio con la versión corregida.

### Pasos:

1. **Elimina el archivo antiguo:**
   ```bash
   # Windows
   del build_wiktionary_sqlite.py
   ```

2. **Copia el archivo corregido desde la carpeta `tools/`:**
   ```bash
   # Windows
   copy wiktionary_builder\tools\build_wiktionary_sqlite.py .
   ```

3. **Verifica que sea la versión correcta:**
   ```bash
   python build_wiktionary_sqlite.py --help
   ```

4. **Re-ejecuta el build:**
   ```bash
   python build_wiktionary_sqlite.py ^
     --out data/dictionaries.sqlite ^
     --sources es ^
     --mode full ^
     --workdir temp ^
     --skip-download
   ```

## Verificación Rápida

Para verificar que tienes la versión correcta, abre `build_wiktionary_sqlite.py` y busca la línea ~232:

### ❌ Versión INCORRECTA (antigua):
```python
for event, elem in context:
    tag = strip_ns(elem.tag)
    if tag != 'page':
        continue
    page_count += 1

# Extract page data
page_data = {}  # <-- Esto está FUERA del bucle (mal)
```

### ✅ Versión CORRECTA (nueva):
```python
for event, elem in context:
    tag = strip_ns(elem.tag)
    if tag != 'page':
        continue
    page_count += 1
    
    # Extract page data
    page_data = {}  # <-- Esto está DENTRO del bucle (bien)
```

## Test Rápido

Una vez que reemplaces el archivo, ejecuta el test:

```bash
python tools/test_build.py
```

Debes ver:
```
=== ALL TESTS PASSED ===
✓ Parsed 3 pages
✓ Inserted: 2
```

Si ves "Parsed 0 pages" es que aún tienes la versión antigua.

## Ubicación de Archivos

La estructura correcta debe ser:

```
tu_directorio/
├── build_wiktionary_sqlite.py      ← Reemplazar este archivo
├── data/
│   └── dictionaries.sqlite
├── temp/
│   └── dumps/
│       ├── eswiktionary-20260201-pages-articles.xml.bz2
│       ├── itwiktionary-20260201-pages-articles.xml.bz2
│       └── ... (otros dumps)
└── wiktionary_builder/             ← Carpeta descargada
    ├── tools/
    │   └── build_wiktionary_sqlite.py  ← Archivo CORRECTO
    └── ...
```

## ¿Por qué pasó esto?

El archivo original que descargaste tenía un bug de indentación. He corregido el bug en la versión dentro de `wiktionary_builder/tools/`, pero necesitas copiar esa versión corregida a tu directorio de trabajo.
