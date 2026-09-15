#!/usr/bin/env python3
"""Promueve temas de idiomas YA validados 0 FAIL desde
_borradores-gemma/idiomas-extranjeros/<idioma>/<tema>/{teoria_crudo.md,cuestionario_crudo.md}
a content/material/idiomas-extranjeros/<idioma>/<tema>/{teoria.md,cuestionario.md}.

Sólo limpieza mecánica (header, fence ```yaml -> ```, título del cuestionario),
CERO cambio de contenido. Uso: promote_clean.py <idioma> <tema> <tema> ...
"""
import re
import sys
from pathlib import Path

SRC_ROOT = Path("content/material/_borradores-gemma/idiomas-extranjeros")
DST_ROOT = Path("content/material/idiomas-extranjeros")

NOMBRE_IDIOMA = {
    "ingles": "Inglés", "aleman": "Alemán", "frances": "Francés",
    "italiano": "Italiano", "portugues-br": "Portugués (Brasil)",
    "portugues-pt": "Portugués (Portugal)", "japones": "Japonés",
    "coreano": "Coreano", "chino": "Chino mandarín", "esperanto": "Esperanto",
}


def clean_cuestionario(text: str, idioma: str, tema: str) -> str:
    text = re.sub(r'```[ \t]*yaml[ \t]*\n', '```\n', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    nombre = NOMBRE_IDIOMA.get(idioma, idioma)
    header = (
        f"# Idiomas — {nombre} — {tema} (cuestionario)\n\n"
        f"> Promovido desde el borrador "
        f"(`../../../_borradores-gemma/idiomas-extranjeros/{idioma}/{tema}/cuestionario_crudo.md`), "
        f"ya validaba 0 FAIL, sin cambios de contenido.\n\n---\n\n"
    )
    return header + text.strip() + "\n"


def clean_teoria(text: str, idioma: str, tema: str) -> str:
    nombre = NOMBRE_IDIOMA.get(idioma, idioma)
    header = (
        f"> Tema del MAPA: `idiomas-extranjeros/{idioma}/{tema}`. "
        f"Ver `../dependencias.md`.\n\n"
        f"## Tipo de teoría (si esto se carga al sistema)\n\n"
        f"**`Presentación`**\n\n---\n\n"
    )
    lines = text.split("\n")
    # primera línea es el título '# ...'; lo mantenemos, insertamos header después
    if lines and lines[0].startswith("#"):
        titulo = lines[0].rstrip()
        resto = "\n".join(lines[1:]).lstrip("\n")
        out = f"{titulo}\n\n{header}{resto}"
    else:
        out = header + text
    out = re.sub(r'  \n', '\n', out)  # trailing doble-espacio markdown -> limpio
    out = re.sub(r'\n{3,}', '\n\n', out)
    return out.strip() + "\n"


def main():
    idioma = sys.argv[1]
    temas = sys.argv[2:]
    for tema in temas:
        src_dir = SRC_ROOT / idioma / tema
        dst_dir = DST_ROOT / idioma / tema
        dst_dir.mkdir(parents=True, exist_ok=True)

        teoria_dst = dst_dir / "teoria.md"
        teoria_src = src_dir / "teoria_crudo.md"
        if teoria_src.exists() and not teoria_dst.exists():
            t = clean_teoria(teoria_src.read_text(encoding="utf-8"), idioma, tema)
            teoria_dst.write_text(t, encoding="utf-8")
        elif teoria_dst.exists():
            print(f"  (teoria.md ya existe, NO se pisa: {dst_dir})")

        cuest_dst = dst_dir / "cuestionario.md"
        cuest_src = src_dir / "cuestionario_crudo.md"
        if cuest_src.exists() and not cuest_dst.exists():
            c = clean_cuestionario(cuest_src.read_text(encoding="utf-8"), idioma, tema)
            cuest_dst.write_text(c, encoding="utf-8")
        elif cuest_dst.exists():
            print(f"  (cuestionario.md ya existe, NO se pisa: {dst_dir})")
        print(f"promovido: {idioma}/{tema}")


if __name__ == "__main__":
    main()
