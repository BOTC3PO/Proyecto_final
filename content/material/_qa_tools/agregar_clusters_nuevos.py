#!/usr/bin/env python3
"""Agrega al examen jefe de UNA materia los temas nuevos como clusters NUEVOS al final, sin tocar los clusters
(ni los logros) que ya existen. Orden de los temas nuevos por prerrequisitos (dependencias.md), tramos de ~5.
Ningún tema nuevo entra antes que sus prerrequisitos: los viejos quedan en clusters anteriores.

Uso:  python3 agregar_clusters_nuevos.py <carpeta_materia> "<Título en examen-jefe-clusters.md>" <id_inicial> [--dry]
Escribe examen-jefe/<carpeta>/cluster-N.md (N continúa), actualiza examen-jefe-clusters.md y examen-jefe/_resumen.json
y deja _rediseno/<carpeta>-clusters-agregados.json (id, cluster, temas) para escribir nombre/descripción/ícono de los logros.
NO escribe logros-examen-jefe*.json (texto de redacción)."""
import json, re, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_examen_jefe_prereq_clusters import aggregate_cluster, render_cluster_md, filesystem_topics, CLUSTERS_MD, RESUMEN_JSON, OUT_DIR, REPO
from test_examen_jefe_topo_clusters import topo_order, partition
from verificar_examen_jefe import parse_dependencias


def clusters_existentes(materia_dir):
    out = []
    files = sorted(materia_dir.glob("cluster-*.md"), key=lambda p: int(re.search(r"cluster-(\d+)", p.name).group(1)))
    for f in files:
        out.append(re.findall(r"^## Sección: (.+?) \(\d+ preguntas\)", f.read_text(encoding="utf-8"), re.M))
    return out


def run(carpeta, titulo, id_inicial, dry=False):
    mdir = REPO / "content/material/examen-jefe" / carpeta
    viejos = clusters_existentes(mdir)
    ya = {t for c in viejos for t in c}
    reales = set(filesystem_topics(carpeta))
    nuevos = sorted(reales - ya)
    sobrantes = sorted(ya - reales)
    if sobrantes:
        print(f"  AVISO {carpeta}: el examen incluye temas que ya no existen: {sobrantes}")
    if not nuevos:
        print(f"{carpeta}: sin temas nuevos"); return []
    _, edges = parse_dependencias(carpeta)
    sub = {t: {d for d in edges.get(t, set()) if d in nuevos} for t in nuevos}
    orden, _ = topo_order(nuevos, sub)
    assert set(orden) == set(nuevos)
    tramos = partition(orden)
    # sin violaciones contra el total (viejos primero)
    pos = {t: i for i, c in enumerate(viejos) for t in c}
    for j, c in enumerate(tramos):
        for t in c: pos[t] = len(viejos) + j
    for t, deps in edges.items():
        for d in deps:
            if t in pos and d in pos and pos[d] > pos[t]:
                raise SystemExit(f"violación: {t} depende de {d} que queda en un cluster posterior")
    print(f"{carpeta}: {len(nuevos)} temas nuevos -> {len(tramos)} clusters (ids {id_inicial}-{id_inicial+len(tramos)-1}), cluster {len(viejos)+1}..{len(viejos)+len(tramos)}")
    if dry: return tramos
    agregados, filas = [], []
    for k, temas in enumerate(tramos, 1):
        n = len(viejos) + k
        cid = id_inicial + k - 1
        secs, total, comp = aggregate_cluster(carpeta, temas)
        (mdir / f"cluster-{n}.md").write_text(render_cluster_md(carpeta, cid, f"[PENDIENTE #{cid}]", secs, total, comp), encoding="utf-8")
        agregados.append({"id": cid, "cluster": n, "temas": temas, "preguntas": total})
        filas.append({"id": cid, "materia": titulo, "cluster": n, "preguntas": total, "secciones_completas": comp, "secciones_totales": len(temas)})
    OUT_DIR.mkdir(exist_ok=True)
    (OUT_DIR / f"{carpeta}-clusters-agregados.json").write_text(json.dumps(agregados, ensure_ascii=False, indent=1), encoding="utf-8")
    # examen-jefe-clusters.md
    txt = CLUSTERS_MD.read_text(encoding="utf-8")
    m = re.search(rf"## {re.escape(titulo)} \((\d+) temas, (\d+) clusters?\)\n\n(.*?)(?=\n\n##)", txt, re.S)
    assert m, f"no encontré la sección '## {titulo}'"
    lineas = m.group(3) + "".join(f"\n- **Cluster {len(viejos)+k}** ({len(t)}): {', '.join(t)}" for k, t in enumerate(tramos, 1))
    cabecera = f"## {titulo} ({len(reales)} temas, {len(viejos)+len(tramos)} clusters)\n\n"
    txt = txt[:m.start()] + cabecera + lineas + txt[m.end():]
    CLUSTERS_MD.write_text(txt, encoding="utf-8")
    # _resumen.json
    res = json.loads(RESUMEN_JSON.read_text(encoding="utf-8"))
    ult = max(i for i, r in enumerate(res) if r["materia"] == titulo)
    res[ult+1:ult+1] = filas
    RESUMEN_JSON.write_text(json.dumps(res, ensure_ascii=False, indent=1), encoding="utf-8")
    return agregados


if __name__ == "__main__":
    a = [x for x in sys.argv[1:] if x != "--dry"]
    if len(a) < 3: raise SystemExit(__doc__)
    run(a[0], a[1], int(a[2]), dry="--dry" in sys.argv)
