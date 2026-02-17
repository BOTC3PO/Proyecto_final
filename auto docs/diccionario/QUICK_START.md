# Quick Start Guide

## Instalación Rápida

```bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Generar base de datos LITE (recomendado para empezar)
python tools/build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode lite \
  --max-pages 10000

# 3. Verificar resultado
sqlite3 ./data/dictionaries.sqlite "SELECT source, COUNT(*) FROM entries GROUP BY source"
```

**Tiempo estimado:** 15-30 minutos  
**Tamaño resultado:** ~30-50 MB

---

## Comandos Esenciales

### Build LITE (Producción - Tamaño Controlado)
```bash
python tools/build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es,it,eo \
  --mode lite \
  --max-pages 50000 \
  --max-text-bytes 100000
```
→ ~200 MB, ~1 hora

### Build FULL (Máxima Cobertura - Un Idioma)
```bash
python tools/build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources eo \
  --mode full
```
→ ~500 MB, ~2-3 horas

### Usar Dumps Existentes
```bash
python tools/build_wiktionary_sqlite.py \
  --out ./data/dictionaries.sqlite \
  --sources es \
  --mode lite \
  --max-pages 50000 \
  --skip-download
```

### Comprimir para Distribución
```powershell
# Windows (requiere zstd)
zstd -19 data\dictionaries.sqlite -o dictionaries.sqlite.zst

# O con PowerShell script
.\tools\compress_sqlite.ps1 -InputDb data\dictionaries.sqlite -Method zstd -GenerateHash
```

---

## Verificar Instalación

```bash
# Test rápido
python tools/test_build.py

# Ver ayuda
python tools/build_wiktionary_sqlite.py --help
```

---

## Consultar la Base de Datos

### Python
```python
import sqlite3

conn = sqlite3.connect('data/dictionaries.sqlite')
cur = conn.cursor()

# Buscar palabra
cur.execute("SELECT text FROM entries WHERE source='es' AND title='hola'")
print(cur.fetchone()[0])

# Estadísticas
cur.execute("SELECT source, COUNT(*) FROM entries GROUP BY source")
for source, count in cur.fetchall():
    print(f"{source}: {count:,}")

conn.close()
```

### SQLite CLI
```bash
sqlite3 data/dictionaries.sqlite

sqlite> SELECT COUNT(*) FROM entries;
sqlite> SELECT text FROM entries WHERE title='casa' LIMIT 1;
sqlite> .quit
```

---

## Integración con extras.ps1

Ver `tools/extras_integration_example.ps1` para dos estrategias:

1. **Descargar pre-creada** (rápido, requiere hosting)
2. **Generar durante instalación** (lento, siempre actualizado)

---

## Tamaños Esperados

| Configuración | Resultado | Comprimido (zstd) |
|---------------|-----------|-------------------|
| eo LITE 10k | ~20 MB | ~8 MB |
| es+it+eo LITE 50k | ~200 MB | ~80 MB |
| eo FULL | ~500 MB | ~200 MB |
| es FULL | ~1.5 GB | ~600 MB |

---

## Troubleshooting

| Problema | Solución |
|----------|----------|
| `lxml not found` | `pip install lxml` (o ignora, funcionará más lento) |
| Download muy lento | Usa `--skip-download` y descarga manualmente |
| Out of memory | Reduce `--max-pages` o usa `--mode lite` |
| Database muy grande | Usa `--max-text-bytes 50000` |

---

## Próximos Pasos

1. ✅ **Generar DB de prueba** (LITE, 10k páginas)
2. ✅ **Verificar queries funcionan**
3. ✅ **Decidir estrategia:** ¿Pre-creada o generar en instalación?
4. ✅ **Si pre-creada:** Comprimir y hostear
5. ✅ **Integrar en extras.ps1**

---

## Documentación Completa

- **README.md** - Guía principal completa
- **docs/USAGE_EXAMPLES.md** - Casos de uso y ejemplos
- **docs/TECHNICAL_NOTES.md** - Detalles técnicos y arquitectura

---

## Soporte

Para problemas o preguntas, revisa:
1. La sección Troubleshooting en README.md
2. Los ejemplos en docs/USAGE_EXAMPLES.md
3. Las notas técnicas en docs/TECHNICAL_NOTES.md
