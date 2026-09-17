#!/usr/bin/env python3
"""Fixer mecánico general para cuestionario_crudo.md de idiomas.
Aplica sólo fixes seguros (no toca contenido pedagógico):
  1. `explicacion: "...'` que cierra con comilla simple en vez de doble -> "
  2. Ítems de `pasos:` sin comillas -> agregadas
  3. `---` suelto como única línea dentro de un fence -> eliminado
  4. `"texto".` (punto pegado fuera de la comilla de cierre) -> `"texto."`

Uso: mechanical_fix.py <archivo_crudo.md> <archivo_salida.md>
"""
import re
import sys


def fix_unclosed_explicacion(text: str) -> str:
    return re.sub(r'^(explicacion: ".*\.)\'\s*$', r'\1"', text, flags=re.M)


def quote_bare_pasos(text: str) -> str:
    def repl(m):
        indent, content = m.group(1), m.group(2).rstrip()
        if content.startswith('"'):
            return m.group(0)
        return f'{indent}"{content}"'
    return re.sub(r'^(\s*-\s+)(.+)$', repl, text, flags=re.M)


def strip_stray_dashes(text: str) -> str:
    # línea que es SOLO "---" (con espacio opcional) entre dos líneas de fence
    lines = text.split("\n")
    out = []
    for line in lines:
        if line.strip() == "---":
            continue
        out.append(line)
    return "\n".join(out)


def fix_trailing_punct_outside_quote(text: str) -> str:
    return re.sub(r'("[^"\n]*)"(\s*)([.,])\s*$', r'\1\3"', text, flags=re.M)


def fix_mc_respuestas_validas(text: str) -> str:
    # tipo: mc requiere `respuesta:` (singular), no `respuestas_validas:` (lista)
    return re.sub(
        r'respuestas_validas:\n(\s*)- "([^"\n]+)"\n(\s*)opciones_explicitas:',
        r'respuesta: "\2"\n\3opciones_explicitas:',
        text,
    )


def process(text: str) -> str:
    text = strip_stray_dashes(text)
    text = fix_unclosed_explicacion(text)
    text = fix_trailing_punct_outside_quote(text)
    text = quote_bare_pasos(text)
    text = fix_mc_respuestas_validas(text)
    return text


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    text = open(src, encoding="utf-8").read()
    open(dst, "w", encoding="utf-8").write(process(text))
