import argparse
import gzip
import os
import shutil
from pathlib import Path

# Idiomas a procesar
LANGS = {"ar", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh"}

REPO_ROOT = Path(__file__).resolve().parents[4]
DEFAULT_SRC_ROOT = REPO_ROOT / "diccionarios"
DEFAULT_DST_ROOT = REPO_ROOT / "api" / "src" / "diccionarios_gz"

SRC_ROOT = DEFAULT_SRC_ROOT
DST_ROOT = DEFAULT_DST_ROOT

COMPRESSLEVEL = 9

def compress_to_mirror(jsonl_path: Path) -> Path:
    """
    Comprime un .jsonl manteniendo la estructura relativa
    pero escribiendo en DST_ROOT como .jsonl.gz
    """
    rel = jsonl_path.relative_to(SRC_ROOT)
    gz_path = (DST_ROOT / rel).with_suffix(rel.suffix + ".gz")

    gz_path.parent.mkdir(parents=True, exist_ok=True)

    if gz_path.exists():
        return gz_path

    with open(jsonl_path, "rb") as f_in:
        with gzip.open(gz_path, "wb", compresslevel=COMPRESSLEVEL) as f_out:
            shutil.copyfileobj(f_in, f_out)

    return gz_path

def _resolve_root(value: str | None, default: Path) -> Path:
    if value:
        return Path(value).expanduser()
    return default

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src-root", default=os.getenv("SRC_ROOT"))
    ap.add_argument("--dst-root", default=os.getenv("DST_ROOT"))
    args = ap.parse_args()

    global SRC_ROOT, DST_ROOT
    SRC_ROOT = _resolve_root(args.src_root, DEFAULT_SRC_ROOT)
    DST_ROOT = _resolve_root(args.dst_root, DEFAULT_DST_ROOT)

    if not SRC_ROOT.exists():
        raise FileNotFoundError(f"No existe SRC_ROOT: {SRC_ROOT}")

    total = 0
    compressed = 0

    for lang_dir in SRC_ROOT.iterdir():
        if not lang_dir.is_dir():
            continue
        lang = lang_dir.name
        if lang not in LANGS:
            continue

        for jsonl in lang_dir.rglob("*.jsonl"):
            total += 1
            gz_path = compress_to_mirror(jsonl)
            compressed += 1

            if compressed % 200 == 0:
                print(f"Comprimidos {compressed} archivos...")

    print("====================================")
    print(f"Total .jsonl encontrados: {total}")
    print(f"Total comprimidos a .gz : {compressed}")
    print(f"Destino: {DST_ROOT}")

if __name__ == "__main__":
    main()
