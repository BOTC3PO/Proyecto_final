#!/usr/bin/env python3
"""Uso: python3 validate_file.py <ruta cuestionario.md>
Imprime OK/FAIL por bloque, y el contenido completo de cada bloque FAIL."""
import subprocess, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from block_extract import extract_blocks

TSX = "/home/javier/Proyecto_final/api/node_modules/.bin/tsx"
CWD = "/home/javier/Proyecto_final"

def validate(path):
    text = open(path, encoding="utf-8").read()
    blocks = extract_blocks(text)
    ok = fail = 0
    fails = []
    for i, b in enumerate(blocks, 1):
        r = subprocess.run([TSX, "content/material/_validate_dsl.ts"],
                            input=b, capture_output=True, text=True, cwd=CWD)
        out = (r.stdout + r.stderr).strip()
        if out.startswith("OK"):
            ok += 1
        else:
            fail += 1
            fails.append((i, out, b))
    print(f"{len(blocks)} bloques: {ok} OK, {fail} FAIL")
    for i, out, b in fails:
        print(f"\n=== BLOQUE {i} ===\n{out}\n---\n{b}")
    return ok, fail

if __name__ == "__main__":
    validate(sys.argv[1])
