#!/usr/bin/env python3
"""
copiar_temario_oficial.py
─────────────────────────
Copia del temario oficial con solo la teoría y los exámenes, para guardarla en su propio repositorio git
(`temario-oficial`). Es la fuente de los paquetes de la app sin conexión y permite corregir o actualizar el temario
aunque la plataforma deje de estar en producción.

  python3 install/copiar_temario_oficial.py DESTINO [--version 1.0]

Copia de `content/material`:
  - <materia>/<tema>/teoria.md, cuestionario.md y herramientas/*.json (teoría, preguntas y herramientas del tema);
  - <materia>/dependencias.md (prerrequisitos entre temas);
  - logros-examen-jefe.json y examen-jefe-idiomas/*.md (definición de los exámenes jefe);
  - teoria-extendida/*.json (libros de teoría);
  - el exportador del manifiesto (`_herramientas/`), para poder importar el temario desde la copia.
Y de `apps/web/public/temario/imagenes`: las imágenes que usa la teoría, con FUENTES.json (autor y licencia).

No copia borradores, audio generado, planificaciones ni notas internas. Borra del destino lo que ya no existe en el
origen, salvo `.git`.
"""

import argparse
import shutil
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
MAT = REPO / "content/material"
IMAGENES = REPO / "apps/web/public/temario/imagenes"


def archivos_del_temario() -> list[tuple[Path, str]]:
    """(origen, ruta en la copia) de todo lo que entra."""
    salida: list[tuple[Path, str]] = []
    for materia in sorted(p for p in MAT.iterdir() if p.is_dir() and not p.name.startswith("_")):
        if materia.name == "examen-jefe":  # agrupaciones de trabajo; los exámenes salen de logros-examen-jefe.json
            continue
        if materia.name == "examen-jefe-idiomas":
            salida += [(f, f"temario/{materia.name}/{f.name}") for f in sorted(materia.glob("*.md"))]
            continue
        if materia.name == "teoria-extendida":
            salida += [(f, f"temario/{materia.name}/{f.name}") for f in sorted(materia.glob("*.json"))]
            continue
        dep = materia / "dependencias.md"
        if dep.exists():
            salida.append((dep, f"temario/{materia.name}/dependencias.md"))
        for f in sorted(materia.rglob("*")):
            if not f.is_file() or any(p.startswith("_") for p in f.relative_to(materia).parts):
                continue
            if f.name in ("teoria.md", "cuestionario.md") or (f.parent.name == "herramientas" and f.suffix == ".json"):
                salida.append((f, f"temario/{f.relative_to(MAT).as_posix()}"))
    salida.append((MAT / "logros-examen-jefe.json", "temario/logros-examen-jefe.json"))
    for nombre in ("exportar_manifiesto.py", "verificar_examen_jefe.py"):
        salida.append((MAT / "_qa_tools" / nombre, f"temario/_herramientas/{nombre}"))
    salida += [(f, f"imagenes/{f.name}") for f in sorted(IMAGENES.iterdir()) if f.is_file()]
    return salida


LEEME = """# Temario oficial de Virtual Book

Versión {version}. Teoría y exámenes del temario oficial, separados del resto del proyecto, para poder corregirlos
y actualizarlos por su cuenta. De acá salen los paquetes de la app sin conexión.

## Qué hay

- `temario/<materia>/<tema>/teoria.md`: la teoría del tema.
- `temario/<materia>/<tema>/cuestionario.md`: las preguntas en VBLang, una por bloque de código.
- `temario/<materia>/<tema>/herramientas/*.json`: herramientas interactivas del tema.
- `temario/<materia>/dependencias.md`: qué temas hay que aprobar antes de cada uno.
- `temario/logros-examen-jefe.json`: los exámenes jefe de cada materia (qué temas juntan).
- `temario/examen-jefe-idiomas/*.md`: los exámenes jefe de idiomas, con preguntas propias.
- `temario/teoria-extendida/*.json`: los libros de teoría extendida.
- `imagenes/`: las imágenes de la teoría (Wikimedia Commons). En la teoría aparecen como `/temario/imagenes/…`.
  `FUENTES.json` indica el origen; cada imagen lleva al pie su autor y su licencia.
- `temario/_herramientas/exportar_manifiesto.py`: arma el manifiesto que importa la plataforma.

## Totales de esta versión

{totales}

## Cómo actualizar

1. Corregir los archivos de `temario/`.
2. Subir la versión en `VERSION` (1.0 → 1.1 para correcciones, 2.0 si cambian temas o exámenes) y anotar el cambio
   en `CAMBIOS.md`.
3. Hacer el commit y la etiqueta: `git tag v<versión>`.
4. Comprobar que el manifiesto se arma sin errores:
   `python3 temario/_herramientas/exportar_manifiesto.py /tmp/manifiesto.json`.

Si la plataforma sigue en producción, los cambios se llevan también a `content/material` del repositorio principal.

## Licencia

El texto del temario tiene la misma licencia que el repositorio principal de Virtual Book. Las imágenes tienen la
licencia libre que indica cada una.
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("destino")
    ap.add_argument("--version", default="1.0")
    a = ap.parse_args()
    dest = Path(a.destino).expanduser().resolve()
    dest.mkdir(parents=True, exist_ok=True)

    archivos = archivos_del_temario()
    rutas = {r for _, r in archivos}
    for origen, rel in archivos:
        d = dest / rel
        d.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(origen, d)

    propios = {"LEEME.md", "VERSION", "CAMBIOS.md", ".gitattributes"}
    for f in sorted(dest.rglob("*"), reverse=True):
        rel = f.relative_to(dest).as_posix()
        if rel.split("/")[0] == ".git" or rel in propios:
            continue
        if f.is_file() and rel not in rutas:
            f.unlink()
        elif f.is_dir() and not any(f.iterdir()):
            f.rmdir()

    teorias = sum(r.endswith("/teoria.md") for r in rutas)
    cuest = sum(r.endswith("/cuestionario.md") for r in rutas)
    jefe = len(__import__("json").loads((MAT / "logros-examen-jefe.json").read_text(encoding="utf-8")))
    jefe_idiomas = sum(r.startswith("temario/examen-jefe-idiomas/") for r in rutas)
    libros = sum(r.startswith("temario/teoria-extendida/") for r in rutas)
    imgs = sum(r.startswith("imagenes/") and r.endswith(".webp") for r in rutas)
    totales = (f"- {teorias} teorías y {cuest} cuestionarios.\n"
               f"- {jefe} exámenes jefe de materias y {jefe_idiomas} de idiomas.\n"
               f"- {libros} libros de teoría extendida.\n- {imgs} imágenes.")
    (dest / "VERSION").write_text(a.version + "\n", encoding="utf-8")
    (dest / "LEEME.md").write_text(LEEME.format(version=a.version, totales=totales), encoding="utf-8")
    cambios = dest / "CAMBIOS.md"
    if not cambios.exists():
        cambios.write_text(f"# Cambios\n\n## {a.version}\n\nPrimera versión: el temario tal como se publicó en la plataforma.\n",
                           encoding="utf-8")
    (dest / ".gitattributes").write_text("*.webp binary\n", encoding="utf-8")
    print(f"{len(archivos)} archivos copiados en {dest}")
    print(totales)
    return 0


if __name__ == "__main__":
    sys.exit(main())
