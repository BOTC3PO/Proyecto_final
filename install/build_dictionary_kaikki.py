#!/usr/bin/env python3
"""
build_dictionary_kaikki.py
──────────────────────────
Construye el Diccionario.sqlite final que consume la API
(SqliteDictionaryService) desde los extractos pre-parseados de
kaikki.org (wiktextract) — SIN parsear wikitext a mano y SIN el
intermedio de ~40GB del pipeline viejo (build_wiktionary_sqlite.py +
build_dictionary_final.py, que quedan como legado).

Cada idioma sale de SU PROPIA edición de Wiktionary (definiciones en
el idioma nativo), igual que el pipeline viejo:

  es, pt, fr, it, de, ja, ko, zh ← kaikki.org/dictionary/downloads/<lang>/
  ru                             ← edición rusa de kaikki (definiciones en ruso)
  en, eo, la, ar, hi             ← raw-wiktextract-data.jsonl.gz
                                   (edición inglesa; eo, la, ar y hi no
                                   tienen edición propia en kaikki — glosas
                                   en inglés. Upgrade futuro: ReVo XML
                                   para eo.)

Espacio requerido: ~4GB de descargas + ~2-3GB de sqlite (staging incluido).
El archivo más pesado es la edición inglesa (2.8GB comprimido); si no
necesitás en/eo usá --langs para saltearla.

Uso:
  python3 build_dictionary_kaikki.py                        # todo
  python3 build_dictionary_kaikki.py --langs es,pt          # subconjunto
  python3 build_dictionary_kaikki.py --langs es --limit 5000  # prueba rápida

Salida por defecto: install/data/Diccionario.sqlite
Después copiala a api/src/diccionarios/Diccionario.sqlite (con la API
apagada) y reiniciá el server.

Esquema de salida (el que autodetecta sqliteDictionary.ts):
  words(lang TEXT, word TEXT, definitions TEXT, synonyms TEXT,
        translations TEXT, PRIMARY KEY (lang, word))
"""

import argparse
import re
import gzip
import json
import sqlite3
import sys
import time
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen

BASE = "https://kaikki.org/dictionary/"

# (código, url, idiomas a extraer de ese archivo)
# Las ediciones nativas describen MUCHOS idiomas (eswiktionary tiene
# entradas de inglés glosadas en español, etc.) — filtramos por
# lang_code == el idioma de la edición para quedarnos con el
# diccionario monolingüe nativo.
SOURCES: list[tuple[str, str, set[str]]] = [
    ("es", BASE + "downloads/es/es-extract.jsonl.gz", {"es"}),
    ("pt", BASE + "downloads/pt/pt-extract.jsonl.gz", {"pt"}),
    ("fr", BASE + "downloads/fr/fr-extract.jsonl.gz", {"fr"}),
    ("it", BASE + "downloads/it/it-extract.jsonl.gz", {"it"}),
    ("de", BASE + "downloads/de/de-extract.jsonl.gz", {"de"}),
    ("ja", BASE + "downloads/ja/ja-extract.jsonl.gz", {"ja"}),
    ("ko", BASE + "downloads/ko/ko-extract.jsonl.gz", {"ko"}),
    ("zh", BASE + "downloads/zh/zh-extract.jsonl.gz", {"zh"}),
    ("ru", BASE + "downloads/ru/ru-extract.jsonl.gz", {"ru"}),
    # La edición inglesa es una sola bola gigante con todos los idiomas;
    # de ahí salen en (nativo) + eo y la (sin edición kaikki propia;
    # el latín es la 2ª lengua más grande de la edición inglesa, ~1M
    # sentidos — el diccionario viejo de la API también lo tenía).
    ("en", BASE + "raw-wiktextract-data.jsonl.gz", {"en", "eo", "la", "ar", "hi"}),
]

# E4 — árabe e hindi con definiciones en su propio idioma (ver wikidump_ar_hi.py). Se suman a las glosas en
# inglés de la edición inglesa y van primero.
WIKIDUMPS: list[tuple[str, str]] = [
    ("ar-wiki", "https://dumps.wikimedia.org/arwiktionary/latest/arwiktionary-latest-pages-articles.xml.bz2"),
    ("hi-wiki", "https://dumps.wikimedia.org/hiwiktionary/latest/hiwiktionary-latest-pages-articles.xml.bz2"),
]
PUNTAJE_NATIVO = 10_000

ALL_LANGS = {"es", "en", "pt", "fr", "it", "de", "ja", "ko", "zh", "ru", "eo", "la", "ar", "hi"}

MAX_DEFS = 10
MAX_SYNS = 20


# ── Descarga con resume ────────────────────────────────────────────────────────

def download(url: str, dest: Path) -> None:
    """Baja `url` a `dest`. Un archivo ya descargado NO se toca: antes se "reanudaba" con Range sobre el archivo
    completo y, si la fuente había cambiado, se le pegaba al final un pedazo de la versión nueva (archivo roto).
    La descarga va a `dest.parcial` (esa sí se reanuda) y se renombra al terminar."""
    if dest.exists():
        print(f"  ✓ ya descargado: {dest.name} (borralo para bajar la versión nueva)")
        return
    parcial = dest.with_name(dest.name + ".parcial")
    existing = parcial.stat().st_size if parcial.exists() else 0
    req = Request(url, headers={"User-Agent": "VirtualBook-Dict/1.0"})
    if existing:
        req.add_header("Range", f"bytes={existing}-")
    try:
        resp_ctx = urlopen(req, timeout=60)
    except HTTPError as e:
        if e.code == 416 and existing:
            parcial.rename(dest)
            print(f"  ✓ descargado: {dest.name}")
            return
        raise
    with resp_ctx as resp:
        if existing and resp.status == 200:
            existing = 0  # el server no soporta resume: arrancar de cero
        total = int(resp.headers.get("Content-Length", 0)) + existing
        dest.parent.mkdir(parents=True, exist_ok=True)
        mode = "ab" if existing else "wb"
        done = existing
        last = time.time()
        with open(parcial, mode) as f:
            while True:
                chunk = resp.read(1 << 20)
                if not chunk:
                    break
                f.write(chunk)
                done += len(chunk)
                if time.time() - last >= 1:
                    pct = f" ({100 * done / total:.0f}%)" if total else ""
                    print(f"\r  bajando {dest.name}: {done // (1 << 20)}MB{pct}   ",
                          end="", flush=True)
                    last = time.time()
    parcial.rename(dest)
    print(f"\r  ✓ descargado: {dest.name} ({done // (1 << 20)}MB){' ' * 20}")


# ── Parseo de una línea wiktextract ────────────────────────────────────────────

def parse_line(d: dict, target_langs: set[str]) -> tuple[str, str, list, list, dict] | None:
    word = d.get("word")
    lang = d.get("lang_code")
    if not word or lang not in target_langs or "redirect" in d:
        return None
    if len(word) > 100:
        return None

    defs: list[str] = []
    syns: list[str] = []
    trans: dict[str, str] = {}

    for sense in d.get("senses") or []:
        glosses = sense.get("glosses") or []
        if glosses:
            g = glosses[-1].strip()  # la más específica de la jerarquía
            # No filtrar por largo: en la edición inglesa las glosas de
            # otros idiomas son una sola palabra ("dog" para eo hundo,
            # "cat" para kato) — un mínimo de largo >3 se comía esos
            # lemas enteros y dejaba sólo las formas flexionadas.
            if g:
                defs.append(g)
        for s in sense.get("synonyms") or []:
            w = (s.get("word") or "").strip()
            if 1 < len(w) < 64:
                syns.append(w)
        for t in sense.get("translations") or []:
            code = t.get("lang_code") or t.get("code")
            w = (t.get("word") or "").strip()
            if code in ALL_LANGS and code != lang and w and code not in trans:
                trans[code] = w

    for s in d.get("synonyms") or []:
        w = (s.get("word") or "").strip()
        if 1 < len(w) < 64:
            syns.append(w)
    for t in d.get("translations") or []:
        code = t.get("lang_code") or t.get("code")
        w = (t.get("word") or "").strip()
        if code in ALL_LANGS and code != lang and w and code not in trans:
            trans[code] = w

    if not defs:
        return None
    return lang, word, defs, syns, trans, puntaje_entrada(d, defs)


def traducciones_invertidas(d: dict) -> list[tuple]:
    palabra_en = d.get("word")
    if not palabra_en or len(palabra_en) > 64:
        return []
    por_idioma: dict[str, str] = {}
    for t in d.get("translations") or []:
        code = t.get("lang_code") or t.get("code")
        w = (t.get("word") or "").strip()
        if code in ALL_LANGS and code != "en" and w and len(w) < 64 and code not in por_idioma:
            por_idioma[code] = w
    filas = []
    for code, w in por_idioma.items():
        trans = {"en": palabra_en, **{c: x for c, x in por_idioma.items() if c != code}}
        filas.append((code, w, "[]", None, json.dumps(trans, ensure_ascii=False), -1e9))
    return filas


# E4 — orden de las entradas de una misma palabra (homógrafos y categorías). Antes se mezclaban en el orden del
# archivo: en portugués «cão» empezaba por «cruel, brutal» y en japonés «犬» por su lectura «いぬ。».
# Primero la que trae traducciones, después la que tiene más acepciones; las formas flexionadas («plural de»,
# «feminino de»...) al final.
FORMA_DE = re.compile(
    r"^(?:\(.*?\)\s*)?(?:(?:primera|segunda|tercera|primeira|segunda|terceira)\s+persona\s+)?"
    r"(?:plural|feminin[oa]|femenin[oa]|masculin[oa]|féminin|femminile|pluriel|plurale|forma|flexión|inflexión|"
    r"variante|participio|particípio|gerundio|gerúndio|diminutivo|aumentativo|Plural|Nominativ|Genitiv|Dativ|"
    r"Akkusativ|Partizip|form of|plural of|alternative form|inflection of|past tense|present participle)\b",
    re.IGNORECASE,
)


def puntaje_entrada(d: dict, defs: list[str]) -> float:
    senses = d.get("senses") or []
    forma = bool(senses) and all(
        s.get("form_of") or s.get("alt_of") or set(s.get("tags") or []) & {"form-of", "alt-of", "inflection-of"}
        for s in senses
    )
    if not forma and defs and all(FORMA_DE.match(g) for g in defs):
        forma = True
    # La entrada principal es la que tiene más acepciones de uso general (sin marca de registro, región o sentido
    # figurado): en español «perro» sustantivo va antes que el adjetivo coloquial «desdichado, indigno», aunque este
    # tenga más acepciones. Pesa sobre todo que la PRIMERA acepción sea de uso general; después, cuántas lo son, la
    # tabla de traducciones y la cantidad total.
    neutras = sum(1 for s in senses if es_neutra(s))
    primera_neutra = bool(senses) and es_neutra(senses[0])
    tiene_traducciones = bool(d.get("translations")) or any(s.get("translations") for s in senses)
    return (1000 if primera_neutra else 0) + 10 * neutras + (5 if tiene_traducciones else 0) + len(defs) - (10_000 if forma else 0)


MARCAS = {
    "colloquial", "informal", "slang", "vulgar", "derogatory", "pejorative", "offensive", "figuratively",
    "figurative", "archaic", "obsolete", "dated", "rare", "humorous", "literary", "outdated", "lunfardismo", "euphemistic", "regional", "dialectal",
    "coloquial", "figurado", "despectivo", "anticuado", "desusado", "poco usado", "vulgar", "jerga", "lunfardo",
    "figuré", "familier", "populaire", "vieilli", "figurato", "familiare", "antiquato", "umgangssprachlich",
    "übertragen", "veraltet", "abwertend", "разговорное", "переносное", "устаревшее", "隠語", "俗語", "比喩",
}


def es_neutra(s: dict) -> bool:
    # En `tags` (normalizadas) las regiones van con mayúscula («Spain», «Río-de-la-Plata»); en `raw_tags` las
    # mayúsculas suelen ser temas («Bebidas»), así que ahí solo cuentan las marcas conocidas.
    for t in s.get("tags") or []:
        t = str(t)
        if t.lower() in MARCAS or t[:1].isupper():
            return False
    return not any(str(t).lower() in MARCAS for t in s.get("raw_tags") or [])


# ── Base de salida ─────────────────────────────────────────────────────────────

def open_db(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(path))
    conn.execute("PRAGMA journal_mode = OFF")
    conn.execute("PRAGMA synchronous = OFF")
    conn.execute("PRAGMA cache_size = -131072")
    # Staging: una fila por línea del JSONL; se mergea al final.
    # Columnas con nombres crípticos A PROPÓSITO: si el build se corta a
    # la mitad y este archivo llega a la API, el autodetector de esquema
    # (sqliteDictionary.ts busca cols lang+word) no debe confundir la
    # staging con la tabla real.
    conn.execute("""
        CREATE TABLE IF NOT EXISTS _staging (
            l TEXT NOT NULL, w TEXT NOT NULL, d TEXT, s TEXT, t TEXT, o REAL
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS words (
            lang TEXT NOT NULL, word TEXT NOT NULL,
            definitions TEXT, synonyms TEXT, translations TEXT,
            PRIMARY KEY (lang, word)
        )
    """)
    conn.commit()
    return conn


def process_source(conn: sqlite3.Connection, gz_path: Path, target_langs: set[str],
                   limit: int | None) -> int:
    ins = 0
    skipped = 0
    batch: list[tuple] = []
    per_lang: dict[str, int] = {}
    start = time.time()

    with gzip.open(gz_path, "rt", encoding="utf-8") as f:
        for line in f:
            try:
                d = json.loads(line)
            except json.JSONDecodeError:
                skipped += 1
                continue
            # E4 — las tablas de traducción de la edición inglesa, al revés: «cat» lista ja 猫, es gato… y eso le da a
            # 猫 sus traducciones (en «cat», es «gato»...). Solo completan: no crean palabras ni cambian definiciones.
            if "en" in target_langs and d.get("lang_code") == "en":
                batch.extend(traducciones_invertidas(d))
            parsed = parse_line(d, target_langs)
            if not parsed:
                skipped += 1
                continue
            lang, word, defs, syns, trans, puntaje = parsed
            if limit and per_lang.get(lang, 0) >= limit:
                continue
            per_lang[lang] = per_lang.get(lang, 0) + 1
            batch.append((
                lang, word,
                json.dumps(defs, ensure_ascii=False),
                json.dumps(syns, ensure_ascii=False) if syns else None,
                json.dumps(trans, ensure_ascii=False) if trans else None,
                puntaje,
            ))
            if len(batch) >= 2000:
                conn.executemany("INSERT INTO _staging VALUES (?,?,?,?,?,?)", batch)
                conn.commit()
                ins += len(batch)
                batch.clear()
                rate = ins / max(time.time() - start, 1)
                print(f"\r  filas: {ins:,} | saltadas: {skipped:,} | {rate:.0f}/s   ",
                      end="", flush=True)
            if limit and all(per_lang.get(lg, 0) >= limit for lg in target_langs):
                break

    if batch:
        conn.executemany("INSERT INTO _staging VALUES (?,?,?,?,?,?)", batch)
        conn.commit()
        ins += len(batch)
    print(f"\r  ✓ {ins:,} filas de staging ({time.time() - start:.0f}s){' ' * 25}")
    return ins


def process_wikidump(conn: sqlite3.Connection, code: str, path: Path, limit: int | None) -> int:
    """E4 — árabe/hindi desde el volcado de su propia Wiktionary (definiciones en el idioma)."""
    import wikidump_ar_hi as wd
    lector = wd.leer_ar if code == "ar-wiki" else wd.leer_hi
    batch = []
    for n, (lang, word, defs, syns, trans) in enumerate(lector(str(path)), 1):
        if limit and n > limit:
            break
        batch.append((
            lang, word,
            json.dumps(defs, ensure_ascii=False),
            json.dumps(syns, ensure_ascii=False) if syns else None,
            json.dumps(trans, ensure_ascii=False) if trans else None,
            PUNTAJE_NATIVO + len(defs),
        ))
    conn.executemany("INSERT INTO _staging VALUES (?,?,?,?,?,?)", batch)
    conn.commit()
    print(f"  ✓ {len(batch):,} filas de staging ({code})")
    return len(batch)


def merge(conn: sqlite3.Connection) -> int:
    """Colapsa _staging (una fila por línea/POS) en words (una por palabra)."""
    print("Mergeando staging → words...")
    cur = conn.cursor()
    read = conn.cursor()
    written = 0
    key = None
    defs: list[str] = []
    syns: list[str] = []
    trans: dict[str, str] = {}
    batch: list[tuple] = []

    def flush():
        nonlocal written
        if key is None:
            return
        if not defs:
            return  # solo había traducciones invertidas: la palabra no existe en el diccionario de ese idioma
        merged_syns = list(dict.fromkeys(syns))[:MAX_SYNS]
        batch.append((
            key[0], key[1],
            json.dumps(list(dict.fromkeys(defs))[:MAX_DEFS], ensure_ascii=False),
            json.dumps(merged_syns, ensure_ascii=False) if merged_syns else None,
            json.dumps(trans, ensure_ascii=False) if trans else None,
        ))
        written += 1
        if len(batch) >= 2000:
            cur.executemany("INSERT OR REPLACE INTO words VALUES (?,?,?,?,?)", batch)
            conn.commit()
            batch.clear()
            print(f"\r  palabras: {written:,}   ", end="", flush=True)

    # Dentro de cada palabra, primero la entrada de mayor puntaje (ver puntaje_entrada).
    for l, w, d, s, t in read.execute("SELECT l, w, d, s, t FROM _staging ORDER BY l, w, o DESC, rowid"):
        if (l, w) != key:
            flush()
            key = (l, w)
            defs, syns, trans = [], [], {}
        defs.extend(json.loads(d) if d else [])
        syns.extend(json.loads(s) if s else [])
        for code, word_t in (json.loads(t) if t else {}).items():
            trans.setdefault(code, word_t)
    flush()
    if batch:
        cur.executemany("INSERT OR REPLACE INTO words VALUES (?,?,?,?,?)", batch)
        conn.commit()
    print(f"\r  ✓ {written:,} palabras{' ' * 20}")

    conn.execute("DROP TABLE _staging")
    conn.commit()
    return written


KANA_REMISION = re.compile(r"^([\u3041-\u3096\u30A1-\u30FA\u30FC]+)[。.]?$")


def resolver_remisiones_ja(conn: sqlite3.Connection) -> int:
    """E4 — en la Wiktionary japonesa la entrada completa está bajo la lectura en kana («いぬ»): la del kanji
    («犬») solo dice «いぬ。». Esas remisiones toman las acepciones y traducciones de la entrada en kana."""
    cambios = []
    for word, defs_json, trans_json in conn.execute("SELECT word, definitions, translations FROM words WHERE lang = 'ja'"):
        defs = json.loads(defs_json or "[]")
        if not defs:
            continue
        m = KANA_REMISION.match(defs[0].strip())
        if not m or m.group(1) == word:
            continue
        destino = conn.execute(
            "SELECT definitions, translations FROM words WHERE lang = 'ja' AND word = ?", (m.group(1),)
        ).fetchone()
        if not destino:
            continue
        nuevas = list(dict.fromkeys(json.loads(destino[0] or "[]") + defs[1:]))[:MAX_DEFS]
        trans = json.loads(trans_json) if trans_json else {}
        for code, w in (json.loads(destino[1]) if destino[1] else {}).items():
            trans.setdefault(code, w)
        cambios.append((json.dumps(nuevas, ensure_ascii=False), json.dumps(trans, ensure_ascii=False) if trans else None, word))
    conn.executemany("UPDATE words SET definitions = ?, translations = ? WHERE lang = 'ja' AND word = ?", cambios)
    conn.commit()
    print(f"  ✓ {len(cambios):,} remisiones japonesas resueltas (kanji → kana)")
    return len(cambios)


def finalize(conn: sqlite3.Connection, out: Path):
    print("Optimizando (ANALYZE + VACUUM)...")
    conn.execute("PRAGMA journal_mode = WAL")
    conn.execute("PRAGMA synchronous = NORMAL")
    conn.execute("ANALYZE")
    conn.execute("VACUUM")

    print("\nResumen por idioma:")
    for lang, count in conn.execute(
        "SELECT lang, COUNT(*) FROM words GROUP BY lang ORDER BY lang"
    ):
        print(f"  {lang}: {count:,}")

    print("\nMuestra aleatoria:")
    for lang, word, defs in conn.execute(
        "SELECT lang, word, definitions FROM words ORDER BY RANDOM() LIMIT 5"
    ):
        first = (json.loads(defs) or [""])[0][:90]
        print(f"  [{lang}] {word}: {first}")

    size_mb = out.stat().st_size / (1 << 20)
    print(f"\nTamaño final: {size_mb:.0f} MB → {out}")


# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description="Diccionario.sqlite desde kaikki.org")
    default_out = Path(__file__).parent / "data" / "Diccionario.sqlite"
    ap.add_argument("--out", type=Path, default=default_out)
    ap.add_argument("--workdir", type=Path,
                    default=Path(__file__).parent / "data" / "kaikki")
    ap.add_argument("--langs", default=",".join(src[0] for src in SOURCES),
                    help="códigos de edición a procesar (en incluye eo)")
    ap.add_argument("--limit", type=int, default=None,
                    help="máx. palabras por idioma (prueba rápida)")
    ap.add_argument("--force", action="store_true",
                    help="sobreescribir el sqlite de salida si ya existe")
    args = ap.parse_args()

    wanted = {code.strip() for code in args.langs.split(",") if code.strip()}
    unknown = wanted - {src[0] for src in SOURCES} - {c for c, _ in WIKIDUMPS} - {"ar", "hi"}
    if unknown:
        print(f"ERROR: ediciones desconocidas: {', '.join(sorted(unknown))}")
        sys.exit(1)

    if args.out.exists():
        if not args.force:
            print(f"ERROR: ya existe {args.out} — usá --force para sobreescribir")
            sys.exit(1)
        args.out.unlink()

    conn = open_db(args.out)
    total = 0
    for code, url, target_langs in SOURCES:
        if code not in wanted:
            continue
        print(f"\n── {code} ({', '.join(sorted(target_langs))}) " + "─" * 40)
        gz_path = args.workdir / url.rsplit("/", 1)[-1]
        download(url, gz_path)
        total += process_source(conn, gz_path, target_langs, args.limit)

    for code, url in WIKIDUMPS:
        if code.split("-")[0] not in wanted and code not in wanted and "en" not in wanted:
            continue
        print(f"\n── {code} " + "─" * 40)
        dump_path = args.workdir / url.rsplit("/", 1)[-1]
        download(url, dump_path)
        total += process_wikidump(conn, code, dump_path, args.limit)

    print(f"\nTotal staging: {total:,} filas")
    merge(conn)
    resolver_remisiones_ja(conn)
    finalize(conn, args.out)
    conn.close()
    print("\n✓ Listo. Copiá el archivo a api/src/diccionarios/Diccionario.sqlite "
          "(con la API apagada) y reiniciá el server.")


if __name__ == "__main__":
    main()
