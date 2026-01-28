#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import re
import sys
import time
from urllib.parse import urljoin

import requests

USER_AGENT = "wiktionary-dump-downloader/1.0 (+https://example.invalid) Python requests"

DEFAULT_PROJECTS = [
    "https://dumps.wikimedia.org/enwiktionary/",
    "https://dumps.wikimedia.org/eswiktionary/",
    "https://dumps.wikimedia.org/frwiktionary/",
    "https://dumps.wikimedia.org/zhwiktionary/",
    "https://dumps.wikimedia.org/ptwiktionary/",
    "https://dumps.wikimedia.org/ruwiktionary/",
    "https://dumps.wikimedia.org/hiwiktionary/",
    "https://dumps.wikimedia.org/arwiktionary/",
    "https://dumps.wikimedia.org/bnwiktionary/",
    "https://dumps.wikimedia.org/urwiktionary/",
    "https://dumps.wikimedia.org/jawiktionary/",  # japonés extra
]

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": USER_AGENT})


def http_get(url: str, stream: bool = False, timeout: int = 60) -> requests.Response:
    r = SESSION.get(url, stream=stream, timeout=timeout)
    r.raise_for_status()
    return r


def pick_latest_dump_date(project_base_url: str) -> str:
    """
    Busca el último directorio YYYYMMDD/ dentro de la página del proyecto.
    """
    html = http_get(project_base_url).text
    # directorios tipo 20250101/
    dates = re.findall(r'href="(\d{8})/"', html)
    if not dates:
        raise RuntimeError(f"No pude encontrar fechas de dump en: {project_base_url}")
    return sorted(set(dates))[-1]


def find_pages_articles_filename(project_base_url: str, dump_date: str) -> str:
    """
    Encuentra el archivo *-pages-articles.xml.bz2 dentro del directorio de fecha.
    """
    dated_url = urljoin(project_base_url, f"{dump_date}/")
    html = http_get(dated_url).text

    # El prefijo suele ser enwiktionary, eswiktionary, etc.
    # Buscamos cualquier cosa que termine en pages-articles.xml.bz2
    m = re.findall(r'href="([^"]+-pages-articles\.xml\.bz2)"', html)
    if not m:
        raise RuntimeError(f"No pude encontrar pages-articles.xml.bz2 en: {dated_url}")
    # A veces hay más de uno (raro); elegimos el primero.
    return m[0]


def download_with_resume(url: str, out_path: str, chunk_size: int = 1024 * 1024, retries: int = 5) -> None:
    """
    Descarga con soporte de reanudación si el archivo parcial existe.
    """
    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)

    tmp_path = out_path + ".part"
    existing = os.path.getsize(tmp_path) if os.path.exists(tmp_path) else 0

    for attempt in range(1, retries + 1):
        try:
            headers = {}
            if existing > 0:
                headers["Range"] = f"bytes={existing}-"

            with SESSION.get(url, stream=True, headers=headers, timeout=120) as r:
                # 200 = descarga completa, 206 = parcial OK
                if existing > 0 and r.status_code not in (206, 200):
                    r.raise_for_status()
                elif existing == 0:
                    r.raise_for_status()

                total = r.headers.get("Content-Length")
                total = int(total) + existing if total is not None else None

                mode = "ab" if existing > 0 and r.status_code == 206 else "wb"
                if mode == "wb":
                    existing = 0  # empezamos de cero si el server no aceptó range

                downloaded = existing
                last_print = 0.0

                with open(tmp_path, mode) as f:
                    for chunk in r.iter_content(chunk_size=chunk_size):
                        if not chunk:
                            continue
                        f.write(chunk)
                        downloaded += len(chunk)

                        now = time.time()
                        if now - last_print > 1.0:
                            if total:
                                pct = downloaded * 100.0 / total
                                print(f"  {os.path.basename(out_path)}: {pct:6.2f}% ({downloaded}/{total} bytes)", end="\r")
                            else:
                                print(f"  {os.path.basename(out_path)}: {downloaded} bytes", end="\r")
                            last_print = now

                print()  # newline
                os.replace(tmp_path, out_path)
                return

        except Exception as e:
            print(f"  Error (intento {attempt}/{retries}): {e}")
            time.sleep(min(10 * attempt, 60))

            # recalcular tamaño parcial por si creció
            existing = os.path.getsize(tmp_path) if os.path.exists(tmp_path) else 0

    raise RuntimeError(f"No se pudo descargar tras {retries} intentos: {url}")


def project_code_from_url(project_base_url: str) -> str:
    # https://dumps.wikimedia.org/enwiktionary/  -> enwiktionary
    parts = project_base_url.rstrip("/").split("/")
    return parts[-1]


def main(output_dir: str = "wiktionary_dumps", projects=None):
    projects = projects or DEFAULT_PROJECTS
    os.makedirs(output_dir, exist_ok=True)

    print(f"Output: {os.path.abspath(output_dir)}\n")

    for base in projects:
        code = project_code_from_url(base)
        print(f"== {code} ==")

        dump_date = pick_latest_dump_date(base)
        print(f"  Última fecha: {dump_date}")

        filename = find_pages_articles_filename(base, dump_date)
        file_url = urljoin(urljoin(base, f"{dump_date}/"), filename)

        out_path = os.path.join(output_dir, code, dump_date, filename)
        if os.path.exists(out_path):
            print(f"  Ya existe: {out_path} (skip)\n")
            continue

        print(f"  Descargando: {file_url}")
        download_with_resume(file_url, out_path)
        print(f"  Guardado en: {out_path}\n")


if __name__ == "__main__":
    # Uso:
    #   python download_wiktionary_dumps.py
    #   python download_wiktionary_dumps.py /ruta/salida
    out = sys.argv[1] if len(sys.argv) > 1 else "wiktionary_dumps"
    main(output_dir=out)
