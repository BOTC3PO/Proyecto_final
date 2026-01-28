import gzip
import shutil
import os
import re
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor, as_completed
import argparse

LANGS = {"ar", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh"}

SRC_ROOT = Path(r"C:\Users\javie\tesis final\Nueva carpeta\diccionario\diccionarios")
DST_ROOT = Path(r"C:\Users\javie\tesis final\Nueva carpeta\diccionario\diccionarios_gz")

# Cache por proceso (se inicializa en cada worker)
_created_dirs = set()
_level = 6

def _init_worker(level: int):
    global _level, _created_dirs
    _level = level
    _created_dirs = set()

def _ensure_dir(p: Path):
    # cache por proceso
    s = str(p)
    if s in _created_dirs:
        return
    p.mkdir(parents=True, exist_ok=True)
    _created_dirs.add(s)

def compress_one(jsonl_path_str: str) -> str:
    jsonl_path = Path(jsonl_path_str)
    rel = jsonl_path.relative_to(SRC_ROOT)
    gz_path = (DST_ROOT / rel).with_suffix(rel.suffix + ".gz")

    _ensure_dir(gz_path.parent)

    if gz_path.exists():
        return "SKIP"

    with open(jsonl_path, "rb") as f_in:
        with gzip.open(gz_path, "wb", compresslevel=_level) as f_out:
            shutil.copyfileobj(f_in, f_out)

    return "OK"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--workers", type=int, default=min(os.cpu_count() or 4, 12))
    ap.add_argument("--level", type=int, default=6)
    args = ap.parse_args()

    if not SRC_ROOT.exists():
        raise FileNotFoundError(f"No existe SRC_ROOT: {SRC_ROOT}")

    files = []
    for lang_dir in SRC_ROOT.iterdir():
        if not lang_dir.is_dir():
            continue
        if lang_dir.name not in LANGS:
            continue
        files.extend(str(p) for p in lang_dir.rglob("*.jsonl"))

    total = len(files)
    print(f"Archivos .jsonl: {total}")
    print(f"Workers: {args.workers} | gzip level: {args.level}")
    print(f"Destino: {DST_ROOT}")

    ok = 0
    skip = 0
    done = 0

    with ProcessPoolExecutor(max_workers=args.workers, initializer=_init_worker, initargs=(args.level,)) as ex:
        futures = [ex.submit(compress_one, f) for f in files]
        for fut in as_completed(futures):
            r = fut.result()
            done += 1
            if r == "OK":
                ok += 1
            else:
                skip += 1

            if done % 500 == 0 or done == total:
                print(f"Progreso: {done}/{total} | OK={ok} SKIP={skip}")

    print("Listo.")

if __name__ == "__main__":
    main()
