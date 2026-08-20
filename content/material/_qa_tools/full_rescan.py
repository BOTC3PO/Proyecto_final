#!/usr/bin/env python3
"""Rescan completo de todos los cuestionario.md en content/material/,
paralelo, con progreso incremental real. Uso: full_rescan.py [max_workers]"""
import glob, json, re, subprocess, concurrent.futures, time, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from block_extract import extract_blocks

REPO = "/home/javier/Proyecto_final"
TSX = f"{REPO}/api/node_modules/.bin/tsx"
VALIDATOR = "content/material/_validate_dsl.ts"
SCRATCH = os.path.dirname(os.path.abspath(__file__))
LOG = f"{SCRATCH}/full_rescan_progress.log"
WORKERS = int(sys.argv[1]) if len(sys.argv) > 1 else 4

files = sorted(glob.glob(f"{REPO}/content/material/*/*/cuestionario.md"))


def validate_file(path):
    text = open(path, encoding="utf-8").read()
    blocks = extract_blocks(text)
    fails = []
    for i, b in enumerate(blocks, 1):
        r = subprocess.run([TSX, VALIDATOR], input=b, capture_output=True, text=True, cwd=REPO, timeout=30)
        out = (r.stdout + r.stderr).strip()
        if not out.startswith("OK"):
            fails.append({"idx": i, "error": out[:300], "block": b})
    return path, len(blocks), fails


logf = open(LOG, "w", encoding="utf-8")
logf.write(f"START {time.strftime('%H:%M:%S')} — {len(files)} archivos, {WORKERS} workers\n")
logf.flush()

total_blocks = 0
total_fails = 0
files_clean = 0
all_fails = []

with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as ex:
    futs = {ex.submit(validate_file, p): p for p in files}
    done = 0
    for fut in concurrent.futures.as_completed(futs):
        path, nblocks, fails = fut.result()
        done += 1
        total_blocks += nblocks
        total_fails += len(fails)
        rel = path.replace(REPO + "/", "")
        if fails:
            for f in fails:
                f["path"] = path
            all_fails.extend(fails)
            if done % 10 == 0 or len(fails) > 0:
                logf.write(f"[{done}/{len(files)}] {rel}: {len(fails)} FAIL de {nblocks}\n")
                logf.flush()
        else:
            files_clean += 1

logf.write(f"\nDONE {time.strftime('%H:%M:%S')}\n")
logf.write(f"Archivos totales: {len(files)}, limpios: {files_clean}\n")
logf.write(f"Bloques totales: {total_blocks}, bloques rotos: {total_fails}\n")
logf.close()

json.dump(all_fails, open(f"{SCRATCH}/all_fails_current.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"Archivos: {len(files)}, limpios: {files_clean}")
print(f"Bloques: {total_blocks}, rotos: {total_fails}")
