#!/usr/bin/env python3
"""Valida una lista de archivos (uno por línea, pasada como argv[1]) en paralelo."""
import sys, os, subprocess, concurrent.futures
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from block_extract import extract_blocks

REPO = "/home/javier/Proyecto_final"
TSX = f"{REPO}/api/node_modules/.bin/tsx"
VALIDATOR = "content/material/_validate_dsl.ts"

def validate_file(path):
    text = open(path, encoding="utf-8").read()
    blocks = extract_blocks(text)
    fails = []
    for i, b in enumerate(blocks, 1):
        r = subprocess.run([TSX, VALIDATOR], input=b, capture_output=True, text=True, cwd=REPO, timeout=30)
        out = (r.stdout + r.stderr).strip()
        if not out.startswith("OK"):
            fails.append({"idx": i, "error": out[:200]})
    return path, len(blocks), fails

if __name__ == "__main__":
    files = [l.strip() for l in open(sys.argv[1]) if l.strip()]
    workers = int(sys.argv[2]) if len(sys.argv) > 2 else 6
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as ex:
        for path, n, fails in ex.map(validate_file, files):
            status = "OK" if not fails else f"{len(fails)} FAIL de {n}: " + "; ".join(f"[{f['idx']}] {f['error'][:80]}" for f in fails)
            print(f"{path} :: {status}", flush=True)
