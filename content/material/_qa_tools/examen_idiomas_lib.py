"""Lectura de los cuestionario.md de idiomas extranjeros para armar los pools de examen-jefe de idiomas."""
import re
from pathlib import Path
from block_extract import extract_blocks

SRC = Path(__file__).resolve().parent.parent / "idiomas-extranjeros"
IDIOMAS = ["ingles", "aleman", "frances", "italiano", "portugues-br", "portugues-pt", "coreano",
           "japones", "chino", "esperanto", "arabe", "ruso", "hindi"]
# temas de alfabeto / escritura inicial: fuera del examen (decisión de Javier: no entran en la evaluación jefe)
EXCLUIR = re.compile(r"^(hiragana|katakana|kanji-basicos|pinyin|alfabeto|hangul|caracteres-y-radicales|escritura|cirilico|abjad|devanagari)", re.I)
AVANZADO = re.compile(r"^(b2|c1|n1|n2|hsk-?5.?6|avanzad[oa]|intermedio-alto)$", re.I)
MEDIO = re.compile(r"^(b1|n3|hsk-?3.?4|intermedi[oa])$", re.I)


def seccion(tema):
    m = re.match(r"^(listening|reading|speaking|writing)-", tema)
    return m.group(1) if m else "gramatica"


def campo(b, k):
    m = re.search(rf'^{k}:\s*(.*)$', b, re.M)
    if not m:
        return None
    v = m.group(1).strip()
    if v in ("|", ">", "|-", ">-"):
        i = m.end()
        rest = b[i + 1:].split("\n")
        out = []
        for l in rest:
            if l.startswith("  ") or not l.strip():
                out.append(l.strip())
            else:
                break
        return " ".join(x for x in out if x)
    return v.strip('"')


def lista(b, k):
    m = re.search(rf'^{k}:\n((?:  - .*\n?)+)', b, re.M)
    if not m:
        return []
    return [re.sub(r'^  - ', '', l).strip().strip('"') for l in m.group(1).strip().split("\n")]


def bloques(idioma):
    """[(tema, seccion, nivel, tipo, enunciado, respuesta, opciones, texto_bloque)]"""
    res = []
    for d in sorted((SRC / idioma).iterdir()):
        f = d / "cuestionario.md"
        if not f.exists() or EXCLUIR.match(d.name):
            continue
        for b in extract_blocks("\n".join(l.rstrip() for l in f.read_text(encoding="utf-8").split("\n"))):
            tipo = campo(b, "tipo")
            en = campo(b, "enunciado")
            nivel = campo(b, "  nivel")
            if not (tipo and en):
                continue
            if tipo == "mc":
                ops, resp = lista(b, "opciones_explicitas"), campo(b, "respuesta")
            elif tipo == "completar":
                vs = lista(b, "respuestas_validas")
                ops, resp = [], (vs[0] if vs else None)
            else:
                continue
            res.append(dict(tema=d.name, sec=seccion(d.name), nivel=nivel or "", tipo=tipo, en=en, resp=resp, ops=ops, txt=b))
    return res
