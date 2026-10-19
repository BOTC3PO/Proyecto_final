#!/usr/bin/env python3
"""Verifica que los exámenes jefe (clusters) estén en la dependencia adecuada.

Fuente de verdad de la composición de cada examen: `logros-examen-jefe.json` (campo `temas`).
Se compara contra:
  1. `<materia>/dependencias.md` (grafo intra-materia): ningún tema puede estar en un examen
     POSTERIOR a algún tema que depende de él... es decir: el examen de un tema nunca viene antes que el de
     sus prerrequisitos (mismo examen = válido).
  2. El filesystem real: todo tema con teoria/cuestionario está en exactamente un examen, y no hay temas inexistentes.
  3. `examen-jefe/<materia>/cluster-N.md` (secciones), `examen-jefe/_resumen.json` y `examen-jefe-clusters.md`.
  4. Dependencias cruzadas entre materias (informativo).
Uso:  python3 verificar_examen_jefe.py [--json]
Sale con código 1 si hay errores.
"""
import json, re, sys, unicodedata
from collections import defaultdict
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))


def _cols(line):
    line = line.strip()
    if not (line.startswith("|") and line.endswith("|")):
        return None
    return [p.strip() for p in line[1:-1].split("|")]


def parse_dependencias(materia):
    """Como el parser de test_examen_jefe_topo_clusters.py, pero soporta VARIAS tablas por archivo,
    cada una con su propio encabezado (algunas materias agregan una segunda tabla de 3 columnas debajo de la
    de 4: el parser original usaba el índice de 'Depende de' de la primera y leía mal las filas de la segunda)."""
    path = MAT / materia / "dependencias.md"
    temas, edges = [], {}
    dep_idx = None
    sep = False
    for line in path.read_text(encoding="utf-8").splitlines():
        cols = _cols(line)
        if cols is None:
            # una línea en blanco NO corta la tabla (matematica/dependencias.md tiene filas separadas por blancos);
            # solo un encabezado nuevo cambia la columna de dependencias
            continue
        if any("depende" in c.lower() for c in cols) and any(c.lower().startswith("tema") for c in cols):
            dep_idx = next(i for i, c in enumerate(cols) if "depende" in c.lower())
            sep = False
            continue
        if dep_idx is None:
            continue
        if not sep:
            if all(set(c) <= {"-", ":", ""} for c in cols):
                sep = True
            continue
        if len(cols) <= dep_idx:
            continue
        toks = TOKEN.findall(cols[0])
        if not toks:
            continue
        tema = toks[0].strip()
        deps = set()
        if cols[dep_idx].lower().startswith("ninguna"):
            raw_list = []
        else:
            raw_list = TOKEN.findall(cols[dep_idx])
        for raw in raw_list:
            raw = raw.strip()
            if raw.startswith("./"):
                raw = raw[2:]
            if raw.startswith("..") or raw in ("", "—", "-") or " " in raw or raw.endswith(".md"):
                continue
            deps.add(raw)
        if tema in edges:
            edges[tema] |= deps
        else:
            temas.append(tema)
            edges[tema] = deps
    return temas, edges

REPO = Path(__file__).resolve().parents[3]
MAT = REPO / "content/material"
TOKEN = re.compile(r"`([^`]+?)/?`")

def slug(t):
    t = unicodedata.normalize("NFD", t).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")

CARPETAS = {"Ciencia de Materiales": "materiales", "UX/Diseño": "diseño", "Dibujo Técnico": "dibujo-tecnico"}

def carpeta(materia):
    return CARPETAS.get(materia) or slug(materia)

def fs_topics(m):
    base = MAT / m
    out = set()
    for f in list(base.rglob("teoria.md")) + list(base.rglob("cuestionario.md")):
        out.add(f.parent.relative_to(base).as_posix())
    return out

def main():
    logros = json.load(open(MAT / "logros-examen-jefe.json", encoding="utf-8"))
    resumen = {r["id"]: r for r in json.load(open(MAT / "examen-jefe/_resumen.json", encoding="utf-8"))}
    md = (MAT / "examen-jefe-clusters.md").read_text(encoding="utf-8")
    por_materia = defaultdict(list)
    for l in logros:
        por_materia[l["materia"]].append(l)
    errores, avisos, info = [], [], []
    ids_vistos = set()
    for materia, ls in por_materia.items():
        c = carpeta(materia)
        ls.sort(key=lambda x: x["cluster"])
        # cluster contiguo desde 1
        if [x["cluster"] for x in ls] != list(range(1, len(ls) + 1)):
            errores.append(f"{materia}: numeración de clusters no contigua {[x['cluster'] for x in ls]}")
        pos = {}
        for l in ls:
            if l["id"] in ids_vistos: errores.append(f"id repetido {l['id']}")
            ids_vistos.add(l["id"])
            for t in l["temas"]:
                if t in pos: errores.append(f"{materia}: tema '{t}' en clusters {pos[t]} y {l['cluster']}")
                pos[t] = l["cluster"]
            n = len(l["temas"])
            if not (1 <= n <= 15): avisos.append(f"{materia} cluster {l['cluster']}: {n} temas (fuera de 5-15)")
        real = fs_topics(c)
        for t in sorted(set(pos) - real): errores.append(f"{materia}: el examen incluye '{t}', que no existe en material/{c}/")
        for t in sorted(real - set(pos)): errores.append(f"{materia}: el tema '{t}' existe pero no está en ningún examen jefe")
        # dependencias
        try:
            _, edges = parse_dependencias(c)
        except FileNotFoundError:
            avisos.append(f"{materia}: sin dependencias.md"); edges = {}
        for t, deps in edges.items():
            if t not in pos: continue
            for d in deps:
                if d in pos and pos[d] > pos[t]:
                    errores.append(f"{materia}: '{t}' (examen {pos[t]}) depende de '{d}' que está en un examen POSTERIOR ({pos[d]})")
                if d not in real and d not in pos:
                    avisos.append(f"{materia}: '{t}' depende de '{d}', que no existe (dependencias.md desactualizado)")
        for t in real:
            if t not in edges: avisos.append(f"{materia}: '{t}' sin fila en dependencias.md (se asume sin prerrequisito)")
        # archivos de pool
        d = MAT / "examen-jefe" / c
        for l in ls:
            f = d / f"cluster-{l['cluster']}.md"
            if not f.exists():
                errores.append(f"{materia}: falta {f.relative_to(MAT)}"); continue
            txt = f.read_text(encoding="utf-8")
            secc = re.findall(r"^## Sección: (\S+) \(", txt, flags=re.M)
            if secc != l["temas"]:
                errores.append(f"{materia} cluster {l['cluster']}: secciones del pool {secc} != temas del logro {l['temas']}")
            m = re.search(r"Logro #(\d+)", txt)
            if not m or int(m.group(1)) != l["id"]:
                errores.append(f"{materia} cluster {l['cluster']}: el pool dice logro #{m.group(1) if m else '?'} y el logro es #{l['id']}")
            if "[PENDIENTE" in txt: avisos.append(f"{f.relative_to(MAT)}: título/descripcion del pool con [PENDIENTE]")
            r = resumen.get(l["id"])
            if not r: errores.append(f"{materia} cluster {l['cluster']}: id {l['id']} no está en _resumen.json")
            elif r["materia"] != materia or r["cluster"] != l["cluster"]:
                errores.append(f"_resumen.json id {l['id']}: {r['materia']}/{r['cluster']} != {materia}/{l['cluster']}")
        sobrantes = [p.name for p in d.glob("cluster-*.md")
                     if int(re.search(r"(\d+)", p.name).group(1)) > len(ls)]
        if sobrantes: errores.append(f"{materia}: pools sobrantes {sobrantes}")
        # clusters.md
        m = re.search(rf"## {re.escape(materia)} \((\d+) temas, (\d+) clusters\)(.*?)(?=\n## |\Z)", md, re.S)
        if not m: errores.append(f"{materia}: sin sección en examen-jefe-clusters.md")
        else:
            cl = {int(a): [x.strip() for x in b.split(", ")] for a, b in re.findall(r"\*\*Cluster (\d+)\*\* \(\d+\): (.+)", m.group(3))}
            for l in ls:
                if cl.get(l["cluster"]) != l["temas"]:
                    errores.append(f"{materia} cluster {l['cluster']}: examen-jefe-clusters.md no coincide con logros-examen-jefe.json")
            if int(m.group(2)) != len(ls): errores.append(f"{materia}: clusters.md dice {m.group(2)} clusters y hay {len(ls)}")
        # cruzadas (info)
        cruz = defaultdict(set)
        base = MAT / c / "dependencias.md"
        if base.exists():
            for line in base.read_text(encoding="utf-8").splitlines():
                for tok in TOKEN.findall(line):
                    mm = re.match(r"\.\./([^/]+)/", tok + "/")
                    if mm and mm.group(1) != c and (MAT / mm.group(1)).is_dir():
                        cruz[mm.group(1)].add(tok)
        if cruz: info.append(f"{materia}: depende de otras materias: {', '.join(sorted(cruz))}")
    # resumen sin logro
    for i in resumen:
        if i not in ids_vistos: errores.append(f"_resumen.json id {i} sin logro")
    if "--json" in sys.argv:
        print(json.dumps({"errores": errores, "avisos": avisos, "info": info}, ensure_ascii=False, indent=1)); return 1 if errores else 0
    print(f"{len(logros)} exámenes jefe en {len(por_materia)} materias")
    for k, v in (("ERROR", errores), ("AVISO", avisos), ("INFO", info)):
        for x in v: print(f"{k}: {x}")
    print(f"\n{len(errores)} errores, {len(avisos)} avisos")
    return 1 if errores else 0

if __name__ == "__main__":
    sys.exit(main())
