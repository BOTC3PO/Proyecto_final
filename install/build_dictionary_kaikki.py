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
  en, eo, la                     ← raw-wiktextract-data.jsonl.gz
                                   (edición inglesa; eo y la no tienen
                                   edición propia en kaikki — glosas en
                                   inglés. Upgrade futuro: ReVo XML
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
    # La edición inglesa es una sola bola gigante con todos los idiomas;
    # de ahí salen en (nativo) + eo y la (sin edición kaikki propia;
    # el latín es la 2ª lengua más grande de la edición inglesa, ~1M
    # sentidos — el diccionario viejo de la API también lo tenía).
    ("en", BASE + "raw-wiktextract-data.jsonl.gz", {"en", "eo", "la"}),
]

ALL_LANGS = {"es", "en", "pt", "fr", "it", "de", "ja", "ko", "zh", "eo", "la"}

MAX_DEFS = 10
MAX_SYNS = 20


# ── Descarga con resume ────────────────────────────────────────────────────────

def download(url: str, dest: Path) -> None:
    existing = dest.stat().st_size if dest.exists() else 0
    req = Request(url, headers={"User-Agent": "VirtualBook-Dict/1.0"})
    if existing:
        req.add_header("Range", f"bytes={existing}-")
    try:
        resp_ctx = urlopen(req, timeout=60)
    except HTTPError as e:
        if e.code == 416 and existing:
            # Range desde el final del archivo = ya está completo.
            print(f"  ✓ ya descargado: {dest.name}")
            return
        raise
    with resp_ctx as resp:
        if existing and resp.status == 200:
            existing = 0  # el server no soporta resume: arrancar de cero
        total = int(resp.headers.get("Content-Length", 0)) + existing
        if existing and existing == total:
            print(f"  ✓ ya descargado: {dest.name}")
            return
        dest.parent.mkdir(parents=True, exist_ok=True)
        mode = "ab" if existing else "wb"
        done = existing
        last = time.time()
        with open(dest, mode) as f:
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
    return lang, word, defs, syns, trans


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
            l TEXT NOT NULL, w TEXT NOT NULL, d TEXT, s TEXT, t TEXT
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
            parsed = parse_line(d, target_langs)
            if not parsed:
                skipped += 1
                continue
            lang, word, defs, syns, trans = parsed
            if limit and per_lang.get(lang, 0) >= limit:
                continue
            per_lang[lang] = per_lang.get(lang, 0) + 1
            batch.append((
                lang, word,
                json.dumps(defs, ensure_ascii=False),
                json.dumps(syns, ensure_ascii=False) if syns else None,
                json.dumps(trans, ensure_ascii=False) if trans else None,
            ))
            if len(batch) >= 2000:
                conn.executemany("INSERT INTO _staging VALUES (?,?,?,?,?)", batch)
                conn.commit()
                ins += len(batch)
                batch.clear()
                rate = ins / max(time.time() - start, 1)
                print(f"\r  filas: {ins:,} | saltadas: {skipped:,} | {rate:.0f}/s   ",
                      end="", flush=True)
            if limit and all(per_lang.get(lg, 0) >= limit for lg in target_langs):
                break

    if batch:
        conn.executemany("INSERT INTO _staging VALUES (?,?,?,?,?)", batch)
        conn.commit()
        ins += len(batch)
    print(f"\r  ✓ {ins:,} filas de staging ({time.time() - start:.0f}s){' ' * 25}")
    return ins


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
        merged_syns = list(dict.fromkeys(syns))[:MAX_SYNS]
        batch.append((
            key[0], key[1],
            json.dumps(defs[:MAX_DEFS], ensure_ascii=False),
            json.dumps(merged_syns, ensure_ascii=False) if merged_syns else None,
            json.dumps(trans, ensure_ascii=False) if trans else None,
        ))
        written += 1
        if len(batch) >= 2000:
            cur.executemany("INSERT OR REPLACE INTO words VALUES (?,?,?,?,?)", batch)
            conn.commit()
            batch.clear()
            print(f"\r  palabras: {written:,}   ", end="", flush=True)

    for l, w, d, s, t in read.execute("SELECT l, w, d, s, t FROM _staging ORDER BY l, w"):
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
    unknown = wanted - {src[0] for src in SOURCES}
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

    print(f"\nTotal staging: {total:,} filas")
    merge(conn)
    finalize(conn, args.out)
    conn.close()
    print("\n✓ Listo. Copiá el archivo a api/src/diccionarios/Diccionario.sqlite "
          "(con la API apagada) y reiniciá el server.")


if __name__ == "__main__":
    main()
