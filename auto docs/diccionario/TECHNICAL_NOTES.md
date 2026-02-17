# Notas Técnicas - Wiktionary SQLite Builder

## Arquitectura del Sistema

### Flujo de Datos

```
Wikimedia Dumps (.bz2)
        ↓
    Download
        ↓
    BZ2 Stream
        ↓
  XML Streaming Parser (iterparse)
        ↓
   Page Extraction
        ↓
  Namespace Filter (ns=0)
        ↓
    Size Filters
        ↓
   Batch Insert (1000 rows)
        ↓
  SQLite Database
        ↓
    VACUUM
        ↓
   Final Database
```

### Optimizaciones de Memoria

1. **Streaming XML:** No carga el XML completo en memoria
2. **Element.clear():** Libera nodos procesados inmediatamente
3. **Sibling cleanup:** Elimina elementos previos del árbol XML
4. **Batch inserts:** Agrupa 1000 filas antes de commit
5. **BZ2 streaming:** Descomprime on-the-fly sin archivo temporal

### Optimizaciones SQLite

**Durante Build:**
```sql
PRAGMA journal_mode=OFF;       -- Sin journal (más rápido, no seguro)
PRAGMA synchronous=OFF;        -- Sin fsync (más rápido, no seguro)
PRAGMA temp_store=MEMORY;      -- Temporales en RAM
PRAGMA cache_size=-200000;     -- 200MB de cache
```

**Post-Build:**
```sql
PRAGMA journal_mode=WAL;       -- Write-Ahead Log (mejor concurrencia)
PRAGMA synchronous=NORMAL;     -- Balance seguridad/velocidad
VACUUM;                        -- Compacta y reorganiza
```

---

## Estructura de Dumps Wikimedia

### URL Pattern

```
https://dumps.wikimedia.org/{wiki}wiktionary/{date}/{wiki}wiktionary-{date}-pages-articles.xml.bz2
```

Ejemplos:
- https://dumps.wikimedia.org/eswiktionary/20250101/eswiktionary-20250101-pages-articles.xml.bz2
- https://dumps.wikimedia.org/itwiktionary/20250101/itwiktionary-20250101-pages-articles.xml.bz2

### Estructura XML

```xml
<mediawiki>
  <page>
    <title>palabra</title>
    <ns>0</ns>                    <!-- Namespace -->
    <id>12345</id>                <!-- Page ID -->
    <redirect title="destino"/>   <!-- Solo si es redirect -->
    <revision>
      <id>67890</id>              <!-- Revision ID -->
      <parentid>67889</parentid>  <!-- Parent revision -->
      <timestamp>2025-01-15T10:30:00Z</timestamp>
      <model>wikitext</model>
      <format>text/x-wiki</format>
      <text>{{definición}}...</text>
      <sha1>abc123def456...</sha1>
    </revision>
  </page>
  ...
</mediawiki>
```

### Namespaces

| NS | Nombre | Descripción |
|----|--------|-------------|
| 0 | Main | Artículos principales (palabras) |
| 1 | Talk | Discusión de artículos |
| 2 | User | Páginas de usuario |
| 4 | Wiktionary | Páginas del proyecto |
| 6 | File | Archivos multimedia |
| 10 | Template | Plantillas |
| 14 | Category | Categorías |
| ... | ... | ... |

**Solo ns=0 contiene las definiciones de palabras.**

---

## Decisiones de Diseño

### ¿Por qué una sola tabla?

**Pros:**
- Simplicidad en queries
- Menos joins
- Fácil de distribuir
- Mejor para lookups rápidos

**Cons:**
- Denormalización (model, format repetidos)
- No hay separación de idiomas en tablas

**Decisión:** Para un diccionario de lectura rápida, la simplicidad gana.

### ¿Por qué guardar wikitext crudo?

**Alternativas consideradas:**
1. Parsear wikitext → Estructurado (JSON/XML)
2. Extraer solo definiciones
3. Pre-renderizar a HTML

**Decisión:** Guardar crudo porque:
- Parsing wikitext es complejo y propenso a errores
- Diferentes clientes pueden querer diferentes formatos
- Permite post-procesamiento flexible
- Mantiene fidelidad al original

### ¿Por qué no normalizar metadatos?

**Campos repetitivos:**
- `model` casi siempre = "wikitext"
- `format` casi siempre = "text/x-wiki"

**Decisión:** Guardarlos igual porque:
- El overhead es mínimo (<0.1% del tamaño)
- Mantiene compatibilidad con el esquema oficial
- Facilita debugging
- Posible futura variabilidad

### ¿Por qué streaming?

**Tamaños típicos:**
- eswiktionary dump: ~500 MB comprimido, ~4 GB XML
- Cargar todo en memoria = 8-16 GB RAM
- Streaming = ~100-500 MB RAM máximo

---

## Formatos de Compresión

### Comparación

| Formato | Ratio | Velocidad Compresión | Velocidad Descompresión | Compatibilidad |
|---------|-------|---------------------|------------------------|----------------|
| zstd -19 | 35-40% | Media | Muy rápida | Requiere zstd |
| 7z -mx9 | 30-35% | Lenta | Media | Requiere 7-Zip |
| zip -9 | 45-50% | Rápida | Rápida | Universal |
| gzip -9 | 40-45% | Rápida | Rápida | Universal |

**Recomendación:** 
- **Distribución moderna:** zstd -19 (mejor ratio + rápida descompresión)
- **Compatibilidad máxima:** zip -9

### Comandos

```bash
# zstd
zstd -19 --ultra db.sqlite -o db.sqlite.zst
zstd -d db.sqlite.zst

# 7z
7z a -t7z -m0=lzma2 -mx=9 db.sqlite.7z db.sqlite
7z x db.sqlite.7z

# zip (Windows PowerShell)
Compress-Archive -Path db.sqlite -DestinationPath db.sqlite.zip -CompressionLevel Optimal
Expand-Archive -Path db.sqlite.zip -DestinationPath .

# gzip
gzip -9 db.sqlite
gunzip db.sqlite.gz
```

---

## Limitaciones Conocidas

### 1. Memoria Mínima

- **Sin lxml:** ~300-500 MB RAM
- **Con lxml:** ~100-300 MB RAM
- **Picos temporales:** Hasta 1 GB en dumps muy grandes

### 2. Tiempo de Procesamiento

- **Parser XML:** ~50-200 MB/min (depende de CPU y lxml)
- **SQLite writes:** ~10-50k inserts/segundo
- **Bottleneck:** Típicamente el parsing, no SQLite

### 3. Espacio en Disco

Durante build necesitas:
- Dump comprimido: ~100 MB - 2 GB
- Database temporal: 2x tamaño final
- Database final: Variable

**Ejemplo:** Para es+it+eo LITE (200 MB final):
- Dumps: ~500 MB
- Temp: ~400 MB
- Final: ~200 MB
- **Total:** ~1.1 GB

### 4. No Hay Índice Full-Text

El esquema actual no incluye FTS (Full-Text Search) porque:
- Aumentaría ~2-3x el tamaño
- No es necesario para lookup exacto por título
- Se puede agregar después si se necesita:

```sql
CREATE VIRTUAL TABLE entries_fts USING fts5(
    title, text, content=entries, content_rowid=rowid
);
```

---

## Extensiones Futuras

### 1. Soporte para FTS (Full-Text Search)

```python
def create_fts_index(db_path):
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    
    cur.execute("""
        CREATE VIRTUAL TABLE IF NOT EXISTS entries_fts 
        USING fts5(title, text, content='entries')
    """)
    
    cur.execute("""
        INSERT INTO entries_fts(rowid, title, text)
        SELECT rowid, title, text FROM entries
    """)
    
    conn.commit()
    conn.close()
```

### 2. Parsing Estructurado

Para extraer secciones (etimología, definiciones, ejemplos):

```python
# Requerirá: pip install wikitextparser
import wikitextparser as wtp

def parse_wikitext(text):
    parsed = wtp.parse(text)
    sections = {}
    
    for section in parsed.sections:
        title = section.title.strip() if section.title else "intro"
        sections[title] = section.contents
    
    return sections
```

### 3. Multi-Language Lookup Helper

```python
class WiktionaryDB:
    def __init__(self, db_path):
        self.conn = sqlite3.connect(db_path)
    
    def lookup(self, word, sources=None):
        cur = self.conn.cursor()
        
        if sources:
            placeholders = ','.join('?' * len(sources))
            query = f"""
                SELECT source, text FROM entries 
                WHERE title=? AND source IN ({placeholders})
            """
            cur.execute(query, [word] + sources)
        else:
            cur.execute("SELECT source, text FROM entries WHERE title=?", (word,))
        
        return cur.fetchall()
    
    def search_prefix(self, prefix, source, limit=20):
        cur = self.conn.cursor()
        cur.execute("""
            SELECT title FROM entries 
            WHERE source=? AND title LIKE ? 
            LIMIT ?
        """, (source, f"{prefix}%", limit))
        
        return [row[0] for row in cur.fetchall()]
```

### 4. Incremental Updates

Para actualizar solo páginas modificadas:

```python
def update_entries(db_path, dump_path, source):
    # Parsear dump
    # Para cada página:
    #   - Si existe en DB y timestamp es igual → skip
    #   - Si timestamp es más nuevo → UPDATE
    #   - Si no existe → INSERT
    pass
```

---

## Debugging

### Verificar Progreso Durante Build

```bash
# En otra terminal
watch -n 5 'sqlite3 data/dictionaries.sqlite "SELECT COUNT(*) FROM entries"'
```

### Ver Últimas Inserciones

```bash
sqlite3 data/dictionaries.sqlite \
  "SELECT source, title, timestamp FROM entries ORDER BY rowid DESC LIMIT 10"
```

### Analizar Tamaño

```bash
sqlite3 data/dictionaries.sqlite "
  SELECT 
    source,
    COUNT(*) as entries,
    ROUND(SUM(LENGTH(text))/1024.0/1024.0, 2) as text_mb
  FROM entries
  GROUP BY source
"
```

### Encontrar Páginas Grandes

```bash
sqlite3 data/dictionaries.sqlite "
  SELECT source, title, LENGTH(text) as size
  FROM entries
  ORDER BY size DESC
  LIMIT 20
"
```

---

## Licencias y Atribución

### Contenido de Wiktionary

- **Licencia:** Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0)
- **URL:** https://creativecommons.org/licenses/by-sa/3.0/
- **Fuente:** https://dumps.wikimedia.org/

### Este Script

- Herramienta de procesamiento, no incluye contenido
- Usar libremente para construir bases de datos locales
- Respetar licencia CC BY-SA 3.0 del contenido extraído

### Atribución Requerida

Si distribuyes bases de datos generadas con este script:

```
Este diccionario contiene datos de Wiktionary (wiktionary.org),
disponibles bajo licencia Creative Commons BY-SA 3.0.
Fuente: https://dumps.wikimedia.org/
```
