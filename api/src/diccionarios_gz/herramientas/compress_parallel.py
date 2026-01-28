import argparse
import gzip
import os
import re
import shutil
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

LANGS = {"ar", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh"}

REPO_ROOT = Path(__file__).resolve().parents[4]
DEFAULT_SRC_ROOT = REPO_ROOT / "diccionarios"
DEFAULT_DST_ROOT = REPO_ROOT / "api" / "src" / "diccionarios_gz"

SRC_ROOT = DEFAULT_SRC_ROOT
DST_ROOT = DEFAULT_DST_ROOT

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

def _resolve_root(value: str | None, default: Path) -> Path:
    if value:
        return Path(value).expanduser()
    return default

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src-root", default=os.getenv("SRC_ROOT"))
    ap.add_argument("--dst-root", default=os.getenv("DST_ROOT"))
    ap.add_argument("--workers", type=int, default=min(os.cpu_count() or 4, 12))
    ap.add_argument("--level", type=int, default=6)
    args = ap.parse_args()

    global SRC_ROOT, DST_ROOT
    SRC_ROOT = _resolve_root(args.src_root, DEFAULT_SRC_ROOT)
    DST_ROOT = _resolve_root(args.dst_root, DEFAULT_DST_ROOT)

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
