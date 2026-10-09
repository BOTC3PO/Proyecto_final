#!/usr/bin/env python3
"""Chequeo de estructura de las recetas de la Ruta B de Cocina/Gastronomia
(content/material/oficios/cocina-gastronomia/recetas/<categoria>/{basicas,intermedias,avanzadas}/).

Verifica SOLO estructura, no que la receta salga bien: secciones en orden, "Escalado y
costeo" solo en las avanzadas, "Estado: no probada", dificultad dentro del rango del nivel,
ingredientes con lista, alcohol en ingredientes, fuentes con URL/PDF, archivo no truncado.

Uso:  python3 check_recetas_ruta_b.py                 # todas las categorias
      python3 check_recetas_ruta_b.py pastas-caseras  # algunas
Las alertas de alcohol pueden ser falsos positivos cuando la receta dice que lo quito
(revisar la linea): el script ya ignora "vinagre de vino", "sin vino", "sin licor", "omit", "reemplaza", "opcional" y "en lugar del".
"""
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parents[1] / "oficios/cocina-gastronomia/recetas"
SECC = ["## Ingredientes", "## Antes de empezar", "## Pasos", "## Lista de cotejo",
        "## Error común", "## Conservación", "## Verificación", "## Fuentes"]
SECC_A = SECC[:3] + ["## Escalado y costeo"] + SECC[3:]
RANGO = {"basicas": (1, 2.5), "intermedias": (2, 3), "avanzadas": (3, 5)}
ALC = re.compile(r"(?i)\b(vino|cerveza|whisky|ron|vodka|licor|co[ñn]ac|fernet|aguardiente|grappa|brandy|champ[aá]n|mirin|sake)\b")
OKALC = re.compile(r"(?i)vinagre de vino|sin vino|sin licor|omit|en lugar del|reemplaza|opcional")


def revisar(path, nivel):
    t = path.read_text(encoding="utf-8")
    sec = SECC_A if nivel == "avanzadas" else SECC
    pos = [t.find(s) for s in sec]
    p = []
    if -1 in pos:
        p.append("faltan: " + ", ".join(s[3:] for s, q in zip(sec, pos) if q == -1))
    elif pos != sorted(pos):
        p.append("secciones fuera de orden")
    if nivel != "avanzadas" and "## Escalado y costeo" in t:
        p.append("trae Escalado y costeo (solo van en avanzadas)")
    if "Estado: no probada" not in t:
        p.append("sin 'Estado: no probada'")
    m = re.search(r"Dificultad ([\d,\.]+) de 5", t)
    if not m:
        p.append("sin dificultad")
    else:
        v, (lo, hi) = float(m.group(1).replace(",", ".")), RANGO[nivel]
        if not lo <= v <= hi:
            p.append(f"dificultad {v} fuera de {lo}-{hi}")
    ing = t[t.find("## Ingredientes"):t.find("## Antes de empezar")] if "## Antes de empezar" in t else ""
    lines = [l for l in ing.splitlines() if l.strip().startswith(("- ", "| "))]
    if not lines:
        p.append("sin ingredientes")
    al = [l.strip()[:60] for l in lines if ALC.search(l) and not OKALC.search(l)]
    if al:
        p.append(f"alcohol en ingredientes: {al[:2]}")
    fu = t[t.find("## Fuentes"):] if "## Fuentes" in t else ""
    if "http" not in fu and "pdf" not in fu.lower() and "pág" not in fu.lower():
        p.append("fuentes sin URL/PDF")
    if len(t) < 5000:
        p.append(f"corta ({len(t)} bytes, posible truncado)")
    return (m.group(1) if m else "?"), p


def main():
    cats = sys.argv[1:] or sorted(d.name for d in BASE.iterdir() if d.is_dir())
    total = bad = 0
    for c in cats:
        for nivel in RANGO:
            d = BASE / c / nivel
            if not d.is_dir():
                continue
            for f in sorted(d.glob("*.md")):
                dif, p = revisar(f, nivel)
                total += 1
                bad += bool(p)
                if p:
                    print(f"{c}/{nivel}/{f.name} (dif {dif}) -> " + " | ".join(p))
    print(f"{total} recetas revisadas, {bad} con alertas")


if __name__ == "__main__":
    main()
