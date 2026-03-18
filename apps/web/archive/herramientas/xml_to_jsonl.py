#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import re
import json
import unicodedata
from pathlib import Path
from typing import Dict, Optional, List, Tuple
import xml.etree.ElementTree as ET

# -------- Config --------

# Idiomas donde NO conviene "por letra" (usan alfabetos no latinos)
NON_LATIN_BUCKET_LANGS = {"ja", "zh", "ar", "ru", "hi"}

# regex simple para capturar definiciones en wikitext: líneas que empiezan con "# "
DEF_RE = re.compile(r"^\#(?!\#)\s+(.*)$")  # "# ..." pero no "## ..."

# -------- Utilidades --------

def wiktionary_url(lang: str, title: str) -> str:
    from urllib.parse import quote
    return f"https://{lang}.wiktionary.org/wiki/{quote(title)}"

def normalize_for_bucket_latin(word: str) -> str:
    """
    Normaliza para determinar bucket (letra inicial) de forma razonable.
    - Mantiene 'ñ' como 'ñ'
    - Remueve acentos: á -> a, é -> e, etc.
    - Lowercase
    - Soporta caracteres especiales de portugués y francés (ç, à, etc.)
    """
    w = word.strip().lower()
    if not w:
        return "_"

    first = w[0]

    # Mantener caracteres especiales latinos comunes
    special_chars = {
        'ñ': 'ñ',
        'ç': 'c',
        'ø': 'o',
        'æ': 'a',
        'œ': 'o',
        'ß': 's'
    }
    
    if first in special_chars:
        return special_chars[first]

    # Decomponer y sacar diacríticos (á -> a, é -> e, etc.)
    decomposed = unicodedata.normalize("NFKD", first)
    base = "".join(ch for ch in decomposed if not unicodedata.combining(ch))

    # Si quedó vacío o raro, fallback
    if not base:
        return "_"

    return base

def sanitize_bucket_name(bucket: str) -> str:
    """
    Sanitiza el nombre del bucket para que sea válido en sistemas de archivos.
    Windows no permite: < > : " / \ | ? *
    """
    # Caracteres prohibidos en Windows
    forbidden = ['<', '>', ':', '"', '/', '\\', '|', '?', '*']
    
    for char in forbidden:
        if char in bucket:
            # Reemplazar con guión bajo
            bucket = bucket.replace(char, '_')
    
    # Si quedó vacío después de sanitizar
    if not bucket or bucket.isspace():
        return "_"
    
    return bucket.strip()

def bucket_for(lang: str, title: str) -> str:
    t = title.strip()
    if not t:
        return "_"

    if lang in NON_LATIN_BUCKET_LANGS:
        # bucket = primer carácter (kanji/kana/hanzi/cirílico/devanagari/árabe/etc.)
        bucket = t[0]
        return sanitize_bucket_name(bucket)

    # bucket "por letra" para idiomas latinos
    b = normalize_for_bucket_latin(t)

    # Opcional: agrupar todo lo no alfabético en "_"
    # Expandido para incluir caracteres de portugués, francés, español
    if not re.fullmatch(r"[a-zñçàáâãäåèéêëìíîïòóôõöùúûüýÿ]", b):
        return "_"

    return sanitize_bucket_name(b)

DEF_HASH = re.compile(r"^\#(?!\#)[\:\*]?\s+(.*)$")   # #, #:, #*
DEF_SEMI = re.compile(r"^\;\s*(.*)$")                # ;
DEF_STAR = re.compile(r"^\*\s+(.*)$")                # *
LANG_HEADER = re.compile(r"^==\s*.*\s*==\s*$")
SUB_HEADER = re.compile(r"^===\s*.*\s*===\s*$")

def _clean_wikitext_line(d: str) -> str:
    d = d.strip()
    if not d:
        return ""

    # [[link|texto]] -> texto, [[link]] -> link
    d = re.sub(r"\[\[([^|\]]+)\|([^\]]+)\]\]", r"\2", d)
    d = re.sub(r"\[\[([^\]]+)\]\]", r"\1", d)

    # quitar negritas/itálicas
    d = re.sub(r"''+", "", d)

    # plantillas simples {{tpl|texto}} -> texto (cuando ayuda)
    d = re.sub(r"\{\{([^{}|]+)\|([^{}]+)\}\}", r"\2", d)
    # resto de plantillas afuera
    d = re.sub(r"\{\{[^}]+\}\}", "", d)

    # tags html
    d = re.sub(r"<[^>]+>", "", d)

    # espacios
    d = re.sub(r"\s+", " ", d).strip()
    return d

def extract_definitions_basic(lang: str, wikitext: str, max_defs: int = 10) -> List[str]:
    """
    Extrae definiciones de wikitext con soporte mejorado para múltiples idiomas.
    """
    if not wikitext:
        return []

    defs: List[str] = []
    lines = [ln.strip() for ln in wikitext.splitlines()]

    for ln in lines:
        if not ln:
            continue
        # ignorar headers
        if LANG_HEADER.match(ln) or SUB_HEADER.match(ln):
            continue

        d = None

        # 1) definiciones tipo "#" (común en en, es, fr, pt, etc.)
        m = DEF_HASH.match(ln)
        if m:
            d = m.group(1)

        # 2) definiciones tipo ";" (usado en algunos formatos)
        if d is None:
            m = DEF_SEMI.match(ln)
            if m:
                d = m.group(1)
                d = re.sub(r"^\d+\s*:\s*", "", d).strip()

        # 3) definiciones tipo "*" (común en ar, ru, hi)
        if d is None:
            m = DEF_STAR.match(ln)
            if m:
                d = m.group(1)

        # 4) fallbacks especiales por idioma
        if d is None:
            # Árabe: líneas que contienen palabras clave definitoria
            if lang == "ar":
                if ln.startswith("{{") or ln.startswith("[[") or "تصنيف" in ln:
                    continue
                if len(ln) <= 2:
                    continue
                if "تعني" in ln or "معنى" in ln or "هو" in ln or "هي" in ln:
                    d = ln
            
            # Ruso: puede usar patrones similares a inglés/español
            # (generalmente bien cubierto por los patrones anteriores)
            
            # Hindi: puede necesitar patrones especiales
            elif lang == "hi":
                # Hindi wiktionary a menudo usa # y * también
                # pero puede tener formatos únicos
                if len(ln) > 5 and not ln.startswith("{{") and not ln.startswith("[["):
                    # Si contiene devanagari y parece definitorio
                    if any('\u0900' <= c <= '\u097F' for c in ln):
                        # Patrones comunes: "का अर्थ", "मतलब", etc.
                        if "अर्थ" in ln or "मतलब" in ln or "का" in ln:
                            d = ln

        if not d:
            continue

        d = _clean_wikitext_line(d)
        if d and len(d) > 3:  # filtrar definiciones muy cortas
            defs.append(d)
        if len(defs) >= max_defs:
            break

    return defs



# -------- Writer con cache de archivos abiertos --------

class BucketWriters:
    def __init__(self, out_root: Path, max_open: int = 64):
        self.out_root = out_root
        self.max_open = max_open
        self._files: Dict[Tuple[str, str], object] = {}  # (lang, bucket) -> handle
        self._lru: List[Tuple[str, str]] = []

    def _touch(self, key: Tuple[str, str]) -> None:
        if key in self._lru:
            self._lru.remove(key)
        self._lru.append(key)

    def _evict_if_needed(self) -> None:
        while len(self._lru) > self.max_open:
            old = self._lru.pop(0)
            fh = self._files.pop(old, None)
            if fh:
                fh.close()

    def write(self, lang: str, bucket: str, obj: dict) -> None:
        dirpath = self.out_root / lang / bucket
        dirpath.mkdir(parents=True, exist_ok=True)
        filepath = dirpath / f"{bucket}.jsonl"

        key = (lang, bucket)
        fh = self._files.get(key)
        if fh is None:
            fh = open(filepath, "a", encoding="utf-8")
            self._files[key] = fh

        self._touch(key)
        self._evict_if_needed()

        fh.write(json.dumps(obj, ensure_ascii=False) + "\n")

    def close_all(self) -> None:
        for fh in self._files.values():
            fh.close()
        self._files.clear()
        self._lru.clear()

# -------- Parseo XML streaming --------

def iter_pages(xml_path: Path):
    """
    Itera páginas del dump XML sin cargarlo entero.
    Soporta namespaces típicos de MediaWiki.
    """
    # Detectar namespace leyendo el root
    context = ET.iterparse(xml_path, events=("start", "end"))
    _, root = next(context)

    # Extraer namespace si existe
    m = re.match(r"\{(.*)\}", root.tag)
    ns = m.group(1) if m else ""
    def tag(name: str) -> str:
        return f"{{{ns}}}{name}" if ns else name

    page_tag = tag("page")
    title_tag = tag("title")
    rev_tag = tag("revision")
    text_tag = tag("text")

    for event, elem in context:
        if event == "end" and elem.tag == page_tag:
            title_el = elem.find(title_tag)
            title = title_el.text if title_el is not None else None

            rev_el = elem.find(rev_tag)
            text_el = rev_el.find(text_tag) if rev_el is not None else None
            text = text_el.text if text_el is not None else ""

            yield title, text

            # liberar memoria
            elem.clear()
            root.clear()

# -------- Main --------

def convert_lang_dump(lang: str, base_dir: Path, out_dir: Path, dump_date: str = "20260101") -> None:
    """
    Convierte un dump XML de Wiktionary a JSONL por bucket.
    Soporta: en, es, fr, zh, pt, ru, hi, ar, ja
    """
    # detectar carpeta correcta del proyecto
    candidates = [
        base_dir / f"{lang}wiktionary",
        base_dir / f"{lang}wikitionary",  # tolera typo
    ]

    project_dir = next((p for p in candidates if p.exists()), None)
    if project_dir is None:
        raise FileNotFoundError(
            "No encontré carpeta del idioma. Probé: "
            + ", ".join(str(p) for p in candidates)
        )

    # detectar fecha
    date_dir = project_dir / dump_date
    if not date_dir.exists():
        date_dirs = [
            d for d in project_dir.iterdir()
            if d.is_dir() and re.fullmatch(r"\d{8}", d.name)
        ]
        if not date_dirs:
            raise FileNotFoundError(f"No encontré carpetas de fecha en {project_dir}")
        date_dir = sorted(date_dirs, key=lambda d: d.name)[-1]
        print(f"[{lang}] dump-date {dump_date} no existe, uso {date_dir.name}")

    # buscar XML
    xml_files = list(date_dir.glob("*.xml"))
    if not xml_files:
        raise FileNotFoundError(f"No encontré .xml en {date_dir}")

    preferred = [x for x in xml_files if "pages-articles" in x.name]
    xml_path = preferred[0] if preferred else xml_files[0]

    print(f"[{lang}] usando XML: {xml_path}")

    writers = BucketWriters(out_dir, max_open=64)

    count = 0
    kept = 0

    try:
        for title, wikitext in iter_pages(xml_path):
            count += 1
            if not title:
                continue

            title = title.strip()
            if ":" in title:
                continue

            defs = extract_definitions_basic(lang, wikitext, max_defs=10)

            entry = {
                "word": title,
                "definitions": defs,
                "source": wiktionary_url(lang, title),
                "raw": wikitext or ""
            }


            b = bucket_for(lang, title)
            writers.write(lang, b, entry)
            kept += 1

            if count % 5000 == 0:
                print(f"[{lang}] procesadas {count:,}, guardadas {kept:,}")

    finally:
        writers.close_all()

    print(f"[{lang}] listo. total {kept:,} entradas")


if __name__ == "__main__":
    # Ejemplo:
    #   python xml_to_jsonl.py --base data --out diccionarios --langs en es fr ja zh pt ru hi ar
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="data", help="base folder, ej: data/")
    ap.add_argument("--out", default="diccionarios", help="output folder")
    ap.add_argument("--dump-date", default="20260101", help="YYYYMMDD")
    ap.add_argument("--langs", nargs="+", required=True, 
                    help="langs, ej: en es fr ja zh pt ru hi ar")
    args = ap.parse_args()

    base = Path(args.base)
    out = Path(args.out)

    for lang in args.langs:
        print(f"\n{'='*60}")
        print(f"Procesando idioma: {lang}")
        print(f"{'='*60}")
        convert_lang_dump(lang=lang, base_dir=base, out_dir=out, dump_date=args.dump_date)