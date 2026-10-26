#!/usr/bin/env python3
"""Uso: python3 validar_cuestionario.py <cuestionario.md> [...]
Valida cada bloque VBLang con _validate_dsl.ts (parse, lint, compile, 5 seeds).
Necesita tsx: TSX=/ruta/a/tsx (por defecto /home/user/scratch-tsx/node_modules/.bin/tsx).
Falla (exit 1) si algún bloque no pasa o si hay menos de 20 preguntas."""
import os, re, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from block_extract import extract_blocks

TSX = os.environ.get("TSX", "/home/user/scratch-tsx/node_modules/.bin/tsx")
RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", ".."))
mal = 0
for ruta in sys.argv[1:]:
    t = open(ruta, encoding="utf-8").read()
    n = len(re.findall(r"^### ", t, re.M))
    bs = extract_blocks(t)
    fallos = []
    for i, b in enumerate(bs, 1):
        r = subprocess.run([TSX, "content/material/_validate_dsl.ts"], input=b, capture_output=True, text=True, cwd=RAIZ)
        o = (r.stdout + r.stderr).strip()
        if not o.startswith("OK"):
            fallos.append((i, o[:200]))
    estado = "OK" if not fallos and n >= 20 and n == len(bs) else "FAIL"
    print(f"{estado} {ruta}: {n} preguntas, {len(bs)} bloques, {len(fallos)} fallos")
    for i, o in fallos:
        print(f"   bloque {i}: {o}")
    mal += estado != "OK"
sys.exit(1 if mal else 0)
