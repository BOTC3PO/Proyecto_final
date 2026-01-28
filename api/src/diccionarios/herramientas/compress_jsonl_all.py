import gzip
import shutil
from pathlib import Path

# Idiomas a procesar
LANGS = {"ar", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh"}

# Carpeta origen (jsonl)
SRC_ROOT = Path(
    r"C:\Users\javie\tesis final\Nueva carpeta\diccionario\diccionarios"
)

# Carpeta destino (jsonl.gz)
DST_ROOT = Path(
    r"C:\Users\javie\tesis final\Nueva carpeta\diccionario\diccionarios_gz"
)

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

def main():
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
