#!/usr/bin/env python3
"""Arma el libro de teoría extendida de una materia a partir de sus capítulos en Markdown.

Uso:  python3 build_teoria_extendida.py <materia> "<Título de la materia>" [subtítulo]
Lee   content/material/teoria-extendida/_raw/<materia>/cluster-N.md   (N numérico)
Escribe content/material/teoria-extendida/<materia>.json            (schema book.pages@1.1)

Formato de cada capítulo (un archivo = una página del libro):
  ## Título del capítulo        (obligatorio, primera línea)
  párrafo...                    (separados por línea en blanco)
  ### Subtítulo de sección
  párrafo...

Reglas (el lector del libro, `apps/web/src/bookEditor/BookReader.tsx`, muestra el texto TAL CUAL):
  - Sin Markdown inline: ni **negritas** ni *cursivas* (se verían los asteriscos), ni listas, ni tablas.
  - Solo títulos (## y ###) y párrafos.
El script rechaza lo que no cumpla y valida ids, anclas e índice como `validate.ts` del editor.
"""
import json, re, sys, glob, os

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "teoria-extendida")


def construir(materia, titulo, subtitulo=None):
    archivos = sorted(glob.glob(os.path.join(RAIZ, "_raw", materia, "cluster-*.md")),
                      key=lambda f: int(re.search(r"cluster-(\d+)\.md$", f).group(1)))
    if not archivos:
        sys.exit(f"No hay capítulos en _raw/{materia}/")
    paginas, indice, errores = [], [], []
    palabras_total = 0
    for n, f in enumerate(archivos, 1):
        texto = open(f, encoding="utf-8").read().strip("\n")
        bloques_md = [b.strip() for b in re.split(r"\n\s*\n", texto) if b.strip()]
        if not bloques_md or not bloques_md[0].startswith("## "):
            errores.append(f"{os.path.basename(f)}: debe empezar con '## Título'")
            continue
        cap = f"cap-{n}"
        contenido, k = [], 0
        pal = 0
        for b in bloques_md:
            k += 1
            if re.search(r"\*\*|(?<!\w)\*(?!\s)|^\s*[-*+] |^\|", b, flags=re.M):
                errores.append(f"{os.path.basename(f)}: Markdown inline/lista/tabla en «{b[:50]}…»")
            if b.startswith("### "):
                contenido.append({"type": "heading", "id": f"{cap}-h{k}", "level": 3, "text": b[4:].strip()})
            elif b.startswith("## "):
                contenido.append({"type": "heading", "id": f"{cap}-h{k}", "level": 2, "text": b[3:].strip()})
            elif b.startswith("#"):
                errores.append(f"{os.path.basename(f)}: nivel de título no permitido «{b[:30]}»")
            else:
                contenido.append({"type": "paragraph", "id": f"{cap}-p{k}", "text": " ".join(b.split())})
            pal += len(b.split())
        palabras_total += pal
        if pal < 1200:
            print(f"AVISO {os.path.basename(f)}: solo {pal} palabras", file=sys.stderr)
        titulo_cap = contenido[0]["text"]
        paginas.append({
            "id": cap, "number": n, "title": titulo_cap,
            "anchors": [{"id": "inicio", "label": "Inicio"}],
            "content": contenido, "meta": {"chapterId": cap},
        })
        indice.append({"id": cap, "title": titulo_cap, "pageStart": n, "anchor": f"{cap}:inicio"})
    if errores:
        print("\n".join(errores), file=sys.stderr)
        sys.exit(1)
    libro = {
        "schema": "book.pages@1.1",
        "metadata": {"id": f"teoria-extendida-{materia}", "title": f"{titulo} — Teoría extendida", "language": "es"},
        "structure": {"index": indice},
        "pages": paginas,
    }
    if subtitulo:
        libro["metadata"]["subtitle"] = subtitulo
    # validaciones equivalentes a validate.ts
    ids = set()
    for p in paginas:
        if p["id"] in ids: sys.exit(f"page id repetido {p['id']}")
        ids.add(p["id"])
        bids = [b["id"] for b in p["content"]]
        if len(bids) != len(set(bids)): sys.exit(f"bloque repetido en {p['id']}")
    salida = os.path.join(RAIZ, f"{materia}.json")
    with open(salida, "w", encoding="utf-8") as fh:
        json.dump(libro, fh, ensure_ascii=False, indent=2)
        fh.write("\n")
    print(f"{materia}: {len(paginas)} capítulos, {palabras_total} palabras -> {os.path.relpath(salida)}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    construir(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else None)
