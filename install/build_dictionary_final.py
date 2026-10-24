#!/usr/bin/env python3
"""
build_dictionary_final.py  v2
─────────────────────────────
Convierte el SQLite producido por build_wiktionary_sqlite.py en el SQLite
final que consume la API (SqliteDictionaryService).

Correcciones v2:
- Extrae solo la sección del idioma correcto del artículo
  (el Wiktionario en español mezcla múltiples idiomas por artículo)
- Secciones de definición detectadas por templates {{adjetivo|es}},
  {{sustantivo|es}}, etc. — no por texto plano
- Traducciones con parámetro nombrado t1= además de posicional
- Resolución básica de {{plm|palabra}} en definiciones
- Sinónimos desde templates inline {{sinónimo|palabra1|palabra2}}

Uso:
  python build_dictionary_final.py \\
    --in  data/dictionaries.sqlite \\
    --out data/Diccionario.sqlite \\
    --langs es,en,pt,fr,it,la

  # Prueba rápida:
  python build_dictionary_final.py \\
    --in  data/dictionaries.sqlite \\
    --out data/test.sqlite \\
    --langs es --limit 2000

Requiere: pip install wikitextparser
"""

import argparse
import json
import re
import sqlite3
import sys
import time
import zlib
from pathlib import Path
from typing import Optional

try:
    import wikitextparser as wtp
except ImportError:
    print("ERROR: wikitextparser no está instalado.")
    print("Instalalo con: pip install wikitextparser")
    sys.exit(1)


# ── Configuración por idioma ───────────────────────────────────────────────────

SUPPORTED_LANGS = {"es", "en", "pt", "fr", "it", "la"}

# Marcadores de sección de idioma por fuente de Wiktionary.
# Cada Wiktionary usa su propia convención:
#   eswiktionary → == {{lengua|es}} ==
#   enwiktionary → == English ==
#   frwiktionary → == {{langue|fr}} == o == {{S|...|fr}} ==
#   ptwiktionary → == {{-pt-}} == o == Português ==
#   itwiktionary → == {{-it-}} == o == Italiano ==
#   lawiktionary → == {{-la-}} == o == Latina ==
LANG_SECTION_NAMES: dict[str, list[str]] = {
    "es": ["lengua|es", "español"],
    "en": ["english"],
    # PT usa ={-pt-}= (nivel 1) — el regex en extract_lang_section lo captura
    "pt": ["pt"],
    "fr": ["langue|fr", "français"],
    "it": ["-it-", "italiano"],
    # LA usa =={{-la-|word}}== o =={{-lingua-|la|word}}==
    "la": ["la"],
}

# Templates que marcan categorías gramaticales en el Wiktionario en español
DEFINITION_TEMPLATES_ES = {
    "sustantivo", "sustantivo masculino", "sustantivo femenino",
    "sustantivo masculino y femenino", "sustantivo ambiguo",
    "verbo", "adjetivo", "adverbio", "artículo", "pronombre",
    "preposición", "conjunción", "interjección", "locución",
    "prefijo", "sufijo", "partícula",
}

# Palabras clave en títulos de sección por Wiktionary fuente
# FR y PT usan {{S|nom|fr}} → hay que extraer el primer argumento posicional
DEFINITION_SECTIONS_BY_LANG: dict[str, list[str]] = {
    "en": ["noun", "verb", "adjective", "adverb", "article", "pronoun",
           "preposition", "conjunction", "interjection", "determiner",
           "numeral", "particle", "prefix", "suffix"],
    "pt": ["substantivo", "verbo", "adjetivo", "advérbio", "subst", "nome"],
    "fr": ["nom", "verbe", "adjectif", "adverbe", "loc nom", "loc verb"],
    "it": ["sostantivo", "verbo", "aggettivo", "avverbio"],
    "la": ["noun", "verb", "adjective", "adverb", "substantivum", "verbum", "nomen", "nomen-subst", "nomen subst"],
}

# FR usa {{S|nom|fr}}, {{S|synonymes}}, etc. como títulos de sección
# Hay que extraer el primer argumento del template
SECTION_TEMPLATE_BASED = {"fr", "pt", "la"}
# PT también usa {{Substantivo|pt}}, {{Verbo|pt}}, etc. como títulos
PT_GRAM_TEMPLATES = {"substantivo", "verbo", "adjetivo", "advérbio",
                     "artigo", "pronome", "preposição", "conjunção",
                     "interjeição", "nome"}

SYNONYM_SECTION_NAMES = ["sinónimos", "sinónimo", "synonyms", "synonym",
                         "sinonimi", "synonymes", "sinônimos", "sinônimo", "syn",
                         # PT usa {{PEPB|Sinónimos|Sinônimos}} — se resuelve por plain_text
                         "pepb"]

TRANSLATION_TEMPLATES = {"t", "t+", "t-", "trad", "l"}


# ── Helpers ────────────────────────────────────────────────────────────────────

def decompress_text(value) -> Optional[str]:
    if value is None:
        return None
    if isinstance(value, bytes):
        try:
            return zlib.decompress(value).decode("utf-8")
        except Exception:
            try:
                return value.decode("utf-8")
            except Exception:
                return None
    return str(value)


def resolve_plm(text: str) -> str:
    """Resuelve {{plm|palabra}} → 'Palabra', {{plm}} → ''"""
    def replacer(m):
        args = m.group(1).split("|")
        words = [a for a in args if "=" not in a and a.strip()]
        return words[0].capitalize() if words else ""
    return re.sub(r"\{\{plm\|?([^}]*)\}\}", replacer, text)


def clean_definition(text: str) -> str:
    """Limpia una línea de definición."""
    text = resolve_plm(text)
    # Quitar templates {{...}}
    text = re.sub(r"\{\{[^}]*\}\}", "", text)
    # Quitar enlaces [[texto|visible]] → visible, [[texto]] → texto
    text = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]+)\]\]", r"\1", text)
    # Quitar referencias
    text = re.sub(r"<ref[^>]*>.*?</ref>", "", text, flags=re.DOTALL)
    text = re.sub(r"<ref[^/]*/?>", "", text)
    # Quitar formato wiki
    text = re.sub(r"'{2,3}", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"^[,;.\s]+", "", text)
    return text.strip()


# ── Extracción de sección por idioma ──────────────────────────────────────────

def extract_lang_section(wikitext: str, lang: str) -> Optional[str]:
    """
    Extrae la sección del idioma correcto del wikitext.

    Cada Wiktionary usa su propia convención:
      eswiktionary → == {{lengua|es}} ==
      enwiktionary → == English ==
      frwiktionary → == {{langue|fr}} ==
      ptwiktionary → ={{-pt-}}=   (nivel 1, un solo =)
      itwiktionary → == {{-it-}} ==
      lawiktionary → == {{-la-|word}} == o == {{-lingua-|la|word}} ==
    """
    lang_markers = LANG_SECTION_NAMES.get(lang, [lang])

    start = -1
    for marker in lang_markers:
        patterns = [
            # PT: ={{-pt-}}= (nivel 1, un = a cada lado)
            rf"=\{{{{-{re.escape(marker)}-(?:\|[^}}]*)?\}}\}}=(?!=)",
            # LA variante: =={{-lingua-|la|word}}==
            rf"==\s*\{{\{{-lingua-\|{re.escape(marker)}(?:\|[^}}]*)?\}}\}}\s*==",
            # Template nivel 2: == {{-it-}} == o == {{langue|fr}} == o == {{lengua|es}} ==
            rf"==\s*\{{\{{[^}}]*{re.escape(marker)}[^}}]*\}}\}}\s*==",
            # Texto plano nivel 2: == English == o == Português ==
            rf"==\s*{re.escape(marker)}\s*==",
        ]
        for pattern in patterns:
            m = re.search(pattern, wikitext, re.IGNORECASE)
            if m:
                start = m.start()
                break
        if start >= 0:
            break

    if start < 0:
        return None

    rest = wikitext[start:]

    # Buscar el próximo encabezado de idioma: nivel 1 (=X=, convención PT) o
    # nivel 2 (==X==, el resto). El patrón viejo (`\n=(?!==[^=])[^=\n]`) sólo
    # matcheaba nivel 1: para cualquier artículo con encabezados =={{lengua|xx}}==
    # (es/en/fr/it/la) nunca encontraba el límite y devolvía TODO el resto del
    # artículo, mezclando las definiciones de los idiomas siguientes con las
    # del idioma pedido. `(={1,2})[^=\n]...\1(?!=)` exige que abra y cierre con
    # la MISMA cantidad de "=" (1 o 2), así nunca corta en una subsección de
    # nivel 3+ (===Sustantivo===, ===Sinónimos===) del propio idioma.
    next_section = re.search(r"\n(={1,2})[^=\n][^\n]*\1(?!=)", rest[2:])
    if next_section:
        return rest[:next_section.start() + 2]
    return rest


# ── Extracción de definiciones ─────────────────────────────────────────────────

def resolve_section_title(section_title: str, lang: str) -> str:
    """
    Normaliza el título de una sección para comparar con keywords.
    Maneja templates como título:
      FR: {{S|nom|fr}} → "nom"
      PT: {{Substantivo|pt}} → "substantivo", {{-pt-}} → "pt"
      LA: {{int:wikt-nomen-subst}} → "nomen subst" (ignorar, no es categoría útil)
    """
    title = (section_title or "").strip()
    if lang in SECTION_TEMPLATE_BASED:
        # FR: {{S|nom|fr}} → primer arg posicional
        m = re.search(r"\{\{[Ss]\|([^|}\s]+)", title)
        if m:
            return m.group(1).lower()
        # PT: {{Substantivo|pt}} → nombre del template
        # PT: {{PEPB|Sinónimos|Sinônimos}} → primer argumento
        m = re.match(r"\{\{([^|}\s]+)", title)
        if m:
            name = m.group(1).lower()
            # Para templates con primer arg en texto plano (PEPB, etc.)
            # extraer ese arg si existe
            arg_m = re.search(r"\{\{[^|]+\|([^|}\n]+)", title)
            if arg_m and not name.startswith("int:") and not name.startswith("-"):
                first_arg = arg_m.group(1).strip().lower()
                # Si el primer arg parece una palabra gramatical, usarlo
                if re.match(r"^[a-záéíóúãõâêîôûàèùäëïöüñç\s]+$", first_arg, re.IGNORECASE):
                    return first_arg
            if not name.startswith("int:") and not name.startswith("-"):
                return name
        # {{-pt-}} → "pt"
        m = re.search(r"\{\{-([a-z]+)-\}\}", title)
        if m:
            return m.group(1).lower()
    return title.lower()


def is_definition_section(section_title: str, lang: str) -> bool:
    title = resolve_section_title(section_title, lang)
    if lang == "es":
        for tmpl_name in DEFINITION_TEMPLATES_ES:
            if tmpl_name in title:
                return True
        return False
    if lang == "pt":
        # Maneja tanto texto plano (==Substantivo==) como
        # templates (=={{Substantivo|pt}}==) — resolve_section_title
        # extrae el nombre del template si existe
        for tmpl_name in PT_GRAM_TEMPLATES:
            if tmpl_name in title:
                return True
        return False
    keywords = DEFINITION_SECTIONS_BY_LANG.get(lang, [])
    return any(kw in title for kw in keywords)


def extract_definitions(lang_wikitext: str, lang: str) -> list[str]:
    defs = []
    parsed = wtp.parse(lang_wikitext)

    for section in parsed.sections:
        if not is_definition_section(section.title, lang):
            continue

        text = section.string
        for line in text.split("\n"):
            line = line.strip()

            # Formato ;N: definición (es, fr, it, la)
            m = re.match(r"^;(\d+)\s*(?:\{\{[^}]*\}\})*\s*[:.]\s*(.+)", line)
            if m:
                d = clean_definition(m.group(2))
                if d and len(d) > 5:
                    defs.append(d)
                continue

            # Formato # definición (en, pt)
            if re.match(r"^#\s+[^*:#]", line):
                d = clean_definition(line[1:])
                if d and len(d) > 5:
                    defs.append(d)

    return defs[:10]


# ── Extracción de sinónimos ───────────────────────────────────────────────────

def extract_synonyms(lang_wikitext: str, lang: str) -> list[str]:
    syns = []
    parsed = wtp.parse(lang_wikitext)

    # 1. Templates inline {{sinónimo|palabra1|palabra2|...}}
    for tmpl in parsed.templates:
        name = tmpl.name.strip().lower()
        if "sinónimo" in name or "sinonimo" in name or "synonym" in name:
            for arg in tmpl.arguments:
                if not arg.name:  # solo posicionales
                    w = arg.value.strip()
                    if w and 1 < len(w) < 64:
                        syns.append(w)

    # 2. Secciones de sinónimos con listas *
    for section in parsed.sections:
        title_resolved = resolve_section_title(section.title or "", lang)
        if not any(kw in title_resolved for kw in SYNONYM_SECTION_NAMES):
            continue
        text = section.plain_text()
        for line in text.split("\n"):
            line = line.strip()
            if line.startswith("*"):
                clean = re.sub(r"\([^)]*\)\s*:\s*", "", line[1:])
                words = [w.strip() for w in re.split(r"[,;]", clean)]
                for w in words:
                    w = re.sub(r"['\[\]{}]", "", w).strip()
                    if w and 1 < len(w) < 64:
                        syns.append(w)

    return list(dict.fromkeys(syns))[:20]


# ── Extracción de traducciones ─────────────────────────────────────────────────

def extract_translations(lang_wikitext: str, source_lang: str) -> dict[str, str]:
    """
    Soporta {{t|en|t1=Japan}}, {{t|en|Japan}}, {{trad|en|Japan}}.
    Filtra valores numéricos o rangos (son referencias de acepción, no palabras).
    """
    trans: dict[str, str] = {}
    target_langs = SUPPORTED_LANGS - {source_lang}

    parsed = wtp.parse(lang_wikitext)
    for tmpl in parsed.templates:
        name = tmpl.name.strip().lower()
        if name not in TRANSLATION_TEMPLATES:
            continue

        args = tmpl.arguments
        if not args:
            continue

        lang_code = args[0].value.strip().lower()
        if lang_code not in target_langs:
            continue

        word = None
        # Buscar t1= primero, luego segundo argumento (posicional o numerado '2')
        for arg in args[1:]:
            arg_name = (arg.name or "").strip()
            if arg_name == "t1":
                word = arg.value.strip()
                break
            # arg_name puede ser '' (posicional) o '2' (numerado por wikitextparser)
            if not arg_name or arg_name == "2":
                word = arg.value.strip()
                break

        if not word:
            continue
        # Filtrar valores que son referencias de acepción (números, rangos, letras sueltas)
        if re.match(r"^[\d\s,;–\-]+$", word) or len(word) <= 1:
            continue

        if lang_code not in trans:
            trans[lang_code] = word

    return trans


# ── Parseo completo de entrada ─────────────────────────────────────────────────

def parse_entry(wikitext: str, lang: str) -> Optional[dict]:
    if not wikitext or len(wikitext) < 20:
        return None
    if wikitext.strip().lower().startswith(("#redirect", "#redirección")):
        return None

    lang_section = extract_lang_section(wikitext, lang)
    if not lang_section:
        return None

    defs = extract_definitions(lang_section, lang)
    if not defs:
        return None

    syns = extract_synonyms(lang_section, lang)
    trans = extract_translations(lang_section, lang)

    return {"definitions": defs, "synonyms": syns, "translations": trans}


# ── Base de datos de salida ────────────────────────────────────────────────────

def create_output_db(path: Path) -> sqlite3.Connection:
    conn = sqlite3.connect(str(path))
    conn.execute("PRAGMA journal_mode = WAL")
    conn.execute("PRAGMA synchronous = NORMAL")
    conn.execute("PRAGMA cache_size = -65536")
    conn.execute("""
        CREATE TABLE IF NOT EXISTS words (
            lang         TEXT NOT NULL,
            word         TEXT NOT NULL,
            definitions  TEXT,
            synonyms     TEXT,
            translations TEXT,
            PRIMARY KEY (lang, word)
        )
    """)
    conn.execute("CREATE INDEX IF NOT EXISTS idx_words_lang_word ON words(lang, word)")
    conn.commit()
    return conn


# ── Procesamiento ──────────────────────────────────────────────────────────────

def process(in_path: Path, out_path: Path, langs: list[str],
            batch_size: int, limit: Optional[int]):

    print("=" * 65)
    print("Dictionary Builder v2")
    print("=" * 65)
    print(f"  Entrada : {in_path}")
    print(f"  Salida  : {out_path}")
    print(f"  Idiomas : {', '.join(langs)}")
    if limit:
        print(f"  Límite  : {limit:,} por idioma")
    print()

    src = sqlite3.connect(str(in_path))
    src.row_factory = sqlite3.Row
    dst = create_output_db(out_path)

    total_written = total_skipped = 0

    for lang in langs:
        print(f"── {lang} ──────────────────────────────────────────────────")

        count = src.execute(
            "SELECT COUNT(*) FROM entries WHERE source = ? AND is_redirect = 0",
            (lang,)
        ).fetchone()[0]

        if count == 0:
            print(f"  ⚠ Sin entradas para '{lang}'")
            continue

        cap = min(count, limit) if limit else count
        print(f"  Disponibles: {count:,} → procesando: {cap:,}")

        cursor = src.execute(
            "SELECT title, text FROM entries "
            "WHERE source = ? AND is_redirect = 0 LIMIT ?",
            (lang, cap)
        )

        written = skipped = 0
        batch: list[tuple] = []
        start = time.time()

        for row in cursor:
            word = row["title"]
            raw_text = decompress_text(row["text"])

            if not word or not raw_text:
                skipped += 1
                continue

            # Filtrar títulos no lexicales
            if len(word) > 100 or (
                ":" in word and not word.startswith("Appendix:")
            ):
                skipped += 1
                continue

            parsed = parse_entry(raw_text, lang)
            if not parsed:
                skipped += 1
                continue

            batch.append((
                lang, word,
                json.dumps(parsed["definitions"], ensure_ascii=False),
                json.dumps(parsed["synonyms"], ensure_ascii=False)
                    if parsed["synonyms"] else None,
                json.dumps(parsed["translations"], ensure_ascii=False)
                    if parsed["translations"] else None,
            ))

            if len(batch) >= batch_size:
                dst.executemany(
                    "INSERT OR REPLACE INTO words "
                    "(lang, word, definitions, synonyms, translations) "
                    "VALUES (?, ?, ?, ?, ?)",
                    batch
                )
                dst.commit()
                written += len(batch)
                total_written += len(batch)
                batch.clear()

                elapsed = time.time() - start
                rate = written / elapsed if elapsed > 0 else 0
                eta = (cap - written - skipped) / rate if rate > 0 else 0
                print(
                    f"\r  Escritas: {written:,} | Saltadas: {skipped:,} | "
                    f"{rate:.0f}/s | ETA: {eta:.0f}s   ",
                    end="", flush=True
                )

        if batch:
            dst.executemany(
                "INSERT OR REPLACE INTO words "
                "(lang, word, definitions, synonyms, translations) "
                "VALUES (?, ?, ?, ?, ?)",
                batch
            )
            dst.commit()
            written += len(batch)
            total_written += len(batch)

        total_skipped += skipped
        elapsed = time.time() - start
        print(
            f"\r  ✓ {written:,} escritas, {skipped:,} saltadas "
            f"en {elapsed:.1f}s{' ' * 30}"
        )

    src.close()

    print("\nOptimizando...")
    dst.execute("ANALYZE")
    dst.execute("VACUUM")

    print("\nMuestra aleatoria:")
    rows = dst.execute(
        "SELECT lang, word, definitions, synonyms, translations "
        "FROM words ORDER BY RANDOM() LIMIT 6"
    ).fetchall()
    for lang, word, defs, syns, trans in rows:
        d = json.loads(defs) if defs else []
        s = json.loads(syns) if syns else []
        t = json.loads(trans) if trans else {}
        print(f"  [{lang}] {word}")
        print(f"    def : {d[0][:80] if d else '(vacío)'}")
        if s:
            print(f"    sin : {s[:4]}")
        if t:
            print(f"    tra : {dict(list(t.items())[:3])}")

    dst.close()

    size_mb = out_path.stat().st_size / (1024 * 1024)
    print(f"\n{'=' * 65}")
    print("COMPLETADO")
    print(f"  Total escritas : {total_written:,}")
    print(f"  Total saltadas : {total_skipped:,}")
    print(f"  Tamaño final   : {size_mb:.2f} MB")
    print(f"  Archivo        : {out_path}")


# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(
        description="Convierte dump de Wiktionary en SQLite para la API"
    )
    ap.add_argument("--in", dest="inp", required=True)
    ap.add_argument("--out", dest="out", required=True)
    ap.add_argument("--langs", default="es,en,pt,fr,it,la")
    ap.add_argument("--batch", type=int, default=500)
    ap.add_argument("--limit", type=int, default=None)
    args = ap.parse_args()

    in_path = Path(args.inp)
    out_path = Path(args.out)

    if not in_path.exists():
        print(f"ERROR: No encontrado: {in_path}")
        sys.exit(1)
    if out_path.exists():
        print(f"ERROR: Ya existe: {out_path} — borralo o elegí otro nombre")
        sys.exit(1)

    langs = [l.strip() for l in args.langs.split(",") if l.strip()]
    invalid = [l for l in langs if l not in SUPPORTED_LANGS]
    if invalid:
        print(f"ERROR: Idiomas no soportados: {', '.join(invalid)}")
        sys.exit(1)

    process(in_path, out_path, langs, args.batch, args.limit)


if __name__ == "__main__":
    main()