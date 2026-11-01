"""
wikidump_ar_hi.py
─────────────────
E4 — definiciones en el propio idioma para árabe e hindi, que kaikki.org no publica como edición propia (el
diccionario las tomaba de la edición inglesa, con glosas en inglés).

  ar ← arwiktionary (dumps.wikimedia.org): sección «{{اللغة|عربية}}», acepciones con «#», traducciones y
       sinónimos. Los títulos vienen vocalizados (شَخْص): la clave se guarda sin diacríticos (شخص), que es como
       se escribe y se busca.
  hi ← hiwiktionary: el «Hindi Shabdasagar» (शब्दसागर, de dominio público) que trae casi cada página, más las
       acepciones con «#» de la sección en hindi.

Licencia del texto de Wiktionary: CC BY-SA (igual que el resto del diccionario).

Cada función devuelve tuplas (lang, word, defs, syns, trans) como `parse_line` de build_dictionary_kaikki.py.
"""

import bz2
import html
import re
from typing import Iterator

MAX_LARGO = 300

# ── lectura del volcado XML (línea por línea, sin cargarlo entero) ─────────────

def paginas(path: str) -> Iterator[tuple[str, str]]:
    titulo = None
    ns = None
    dentro = False
    buf: list[str] = []
    with bz2.open(path, "rt", encoding="utf-8") as f:
        for linea in f:
            if not dentro:
                m = re.search(r"<title>(.*)</title>", linea)
                if m:
                    titulo = html.unescape(m.group(1))
                    continue
                m = re.search(r"<ns>(\d+)</ns>", linea)
                if m:
                    ns = m.group(1)
                    continue
                if "<text" in linea:
                    resto = linea.split(">", 1)[1]
                    if "</text>" in resto:
                        if ns == "0" and titulo:
                            yield titulo, html.unescape(resto.split("</text>")[0])
                        continue
                    dentro = True
                    buf = [resto]
            else:
                if "</text>" in linea:
                    buf.append(linea.split("</text>")[0])
                    dentro = False
                    if ns == "0" and titulo:
                        yield titulo, html.unescape("".join(buf))
                else:
                    buf.append(linea)


# ── limpieza de wikitexto ──────────────────────────────────────────────────────

# Plantillas que son ejemplos, citas o notas: se descartan enteras.
DESCARTAR_AR = {"مض", "أبيات", "شاهد", "مثال", "حديث", "قرآن", "آية", "ص", "مصدر", "مرجع"}
DESCARTAR_HI = {"उदाहरण", "उ", "sense", "rfex"}


def _plantillas(texto: str, descartar: set[str]) -> str:
    # Reemplaza desde las más internas: {{nombre|a|b}} → "a b" ; {{nombre}} → "(nombre)" ; descartadas → "".
    patron = re.compile(r"\{\{([^{}]*)\}\}")
    for _ in range(8):
        nuevo = patron.sub(lambda m: _una_plantilla(m.group(1), descartar), texto)
        if nuevo == texto:
            break
        texto = nuevo
    return re.sub(r"\{\{|\}\}", "", texto)


def _una_plantilla(cuerpo: str, descartar: set[str]) -> str:
    partes = [p.strip() for p in cuerpo.split("|")]
    nombre = partes[0]
    if nombre in descartar:
        return ""
    args = [p for p in partes[1:] if p and "=" not in p]
    if not args:
        return f"({nombre})" if nombre and len(nombre) < 30 else ""
    # El nombre de la plantilla suele ser la relación ({{جمع|كاتب}} = plural de كاتب): se conserva si es corto y
    # está en el alfabeto del idioma (los nombres técnicos en inglés se omiten).
    if len(nombre) < 20 and re.search(r"[\u0600-\u06FF\u0900-\u097F]", nombre):
        return f"{nombre} {' '.join(args)}"
    return " ".join(args)


def limpiar(texto: str, descartar: set[str]) -> str:
    t = re.sub(r"<ref[^>]*/>|<ref[^>]*>.*?</ref>", "", texto, flags=re.S)
    t = re.sub(r"<br\s*/?>", " ", t)
    t = re.sub(r"<[^>]+>", "", t)
    t = _plantillas(t, descartar)
    t = re.sub(r"\[\[(?:[^\]|]*\|)?([^\]]*)\]\]", r"\1", t)  # [[a|b]] → b ; [[a]] → a
    t = re.sub(r"\[https?://\S+\s*([^\]]*)\]", r"\1", t)
    t = re.sub(r"'{2,}", "", t)
    t = re.sub(r"\s+", " ", t).strip(" :;،,.-—")
    return t


# ── árabe ──────────────────────────────────────────────────────────────────────

TASHKEEL = re.compile(r"[ؐ-ًؚ-ٰٟۖ-ۭـ]")
SOLO_ARABE = re.compile(r"^[؀-ۿ\s]+$")
CODIGO_CONJUGACION = re.compile(r"^[\u0600-\u06FF]{1,3}(?:-[\u0600-\u06FF]{1,4}){2,}")

IDIOMAS_AR = {
    "الإنجليزية": "en", "الإنكليزية": "en", "الإنجليزي": "en", "الفرنسية": "fr", "الألمانية": "de",
    "الإيطالية": "it", "اليابانية": "ja", "الكورية": "ko", "الصينية": "zh", "البرتغالية": "pt",
    "الإسبانية": "es", "الأسبانية": "es", "الروسية": "ru", "الهندية": "hi", "الإسبرانتو": "eo",
    "اللاتينية": "la",
}


def sin_diacriticos(palabra: str) -> str:
    return TASHKEEL.sub("", palabra).strip()


def _seccion(texto: str, inicio: re.Pattern) -> str | None:
    m = inicio.search(texto)
    if not m:
        return None
    resto = texto[m.end():]
    fin = re.search(r"^==[^=].*?==\s*$", resto, re.M)  # siguiente idioma (nivel 2)
    return resto[: fin.start()] if fin else resto


INICIO_AR = re.compile(r"^==\s*(?:\{\{اللغة\|عربية\}\}|\[\[عربية\]\]|العربية|اللغة العربية)\s*==\s*$", re.M)


def leer_ar(path: str) -> Iterator[tuple[str, str, list[str], list[str], dict[str, str]]]:
    for titulo, texto in paginas(path):
        if not SOLO_ARABE.match(titulo):
            continue
        seccion = _seccion(texto, INICIO_AR)
        if seccion is None:
            continue
        # Las páginas de formas conjugadas traen códigos («مع-ض-مث-ذ-خ-رفع صَرَّخَ»), no significados.
        defs = [d for d in _acepciones(seccion, DESCARTAR_AR) if not CODIGO_CONJUGACION.match(d)]
        if not defs:
            continue
        trans: dict[str, str] = {}
        for nombre, valor in re.findall(r"^\*\s*([^:：]+?)\s*[:：]\s*(.+)$", texto, re.M):
            codigo = IDIOMAS_AR.get(nombre.strip())
            palabra = limpiar(valor, DESCARTAR_AR).split("،")[0].split(",")[0].strip()
            if codigo and palabra and codigo not in trans and len(palabra) < 64:
                trans[codigo] = palabra
        syns = _sinonimos(seccion, r"مرادف")
        yield "ar", sin_diacriticos(titulo), defs, syns, trans


def _util(d: str) -> bool:
    # Fuera lo que quedó vacío o es solo una nota entre corchetes («[वि॰ घराऊ]»).
    return len(d) > 1 and not re.fullmatch(r"[\[(].*[\])]", d)


def _acepciones(seccion: str, descartar: set[str]) -> list[str]:
    defs = []
    for linea in re.findall(r"^#(?![:*#])\s*(.+)$", seccion, re.M):
        d = limpiar(linea, descartar)
        if _util(d):
            defs.append(d[:MAX_LARGO])
    return list(dict.fromkeys(defs))


def _sinonimos(seccion: str, titulo: str) -> list[str]:
    m = re.search(rf"^===+\s*[^=\n]*{titulo}[^=\n]*===+\s*$(.*?)(?=^==)", seccion + "\n==", re.M | re.S)
    if not m:
        return []
    return [w.strip() for w in re.findall(r"\[\[(?:[^\]|]*\|)?([^\]]+)\]\]", m.group(1)) if 1 < len(w.strip()) < 64][:20]


# ── hindi ──────────────────────────────────────────────────────────────────────

SOLO_DEVANAGARI = re.compile(r"^[ऀ-ॿ]+(?: [ऀ-ॿ]+)?$")
INICIO_HI = re.compile(r"^(?:\{\{-hi-\}\}|==\s*(?:हिन्दी|हिंदी|\{\{हिन्दी\}\})\s*==)\s*$", re.M)
SENTIDO_NUM = re.compile(r"(?:^|\s)[१२३४५६७८९][०-९]*\.\s")


def _shabdasagar(texto: str) -> list[str]:
    m = re.search(r"===\s*शब्दसागर\s*===\s*\n(.*?)(?=\n==|\Z)", texto, re.S)
    if not m:
        return []
    bloque = re.sub(r"<br\s*/?>", "\n", m.group(1))
    defs: list[str] = []
    # Cada homógrafo empieza con «palabra ^n categoría [etimología]»; el texto útil va después de la primera línea.
    for parrafo in re.split(r"\n\s*\n", bloque):
        lineas = [ln for ln in parrafo.split("\n") if ln.strip()]
        if not lineas:
            continue
        cuerpo = " ".join(lineas[1:]) if len(lineas) > 1 else re.sub(r"^.*?\]\s*", "", lineas[0])
        partes = SENTIDO_NUM.split(" " + cuerpo) if SENTIDO_NUM.search(" " + cuerpo) else [cuerpo]
        for p in partes:
            p = re.split(r"उ॰\s*—|मुहा॰\s*—|यौ॰\s*—", p)[0]  # sin ejemplos, modismos ni compuestos
            d = limpiar(p, DESCARTAR_HI).strip(" ।|")
            if _util(d):
                defs.append(d[:MAX_LARGO])
    return defs


def leer_hi(path: str) -> Iterator[tuple[str, str, list[str], list[str], dict[str, str]]]:
    for titulo, texto in paginas(path):
        if not SOLO_DEVANAGARI.match(titulo):
            continue
        defs: list[str] = []
        seccion = _seccion(texto, INICIO_HI)
        if seccion is not None:
            defs.extend(_acepciones(seccion, DESCARTAR_HI))
        defs.extend(_shabdasagar(texto))
        defs = list(dict.fromkeys(defs))
        if not defs:
            continue
        trans: dict[str, str] = {}
        for codigo, valor in re.findall(r"^:?\*\s*\{\{([a-z]{2})\}\}\s*:\s*(.+)$", texto, re.M):
            palabra = re.sub(r"\[\[:[a-z]{2}:[^\]]*\]\]", "", valor)
            palabra = limpiar(palabra, DESCARTAR_HI).split(",")[0].strip()
            if codigo != "hi" and palabra and codigo not in trans and len(palabra) < 64:
                trans[codigo] = palabra
        yield "hi", titulo, defs, [], trans
