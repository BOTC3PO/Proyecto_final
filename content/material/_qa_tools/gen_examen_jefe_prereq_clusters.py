#!/usr/bin/env python3
"""
Ejecuta de verdad el rediseño descrito en
examen-jefe-REDISEÑO-PLANIFICACION.md para UNA materia: recalcula los
clusters por orden de conocimientos previos (no alfabético), regenera
los .md de pool de esa materia agregando los cuestionario.md reales de
cada tema, actualiza la sección de esa materia en
examen-jefe-clusters.md y las filas de examen-jefe/_resumen.json.

NO escribe logros-examen-jefe.json ni sus 11 traducciones -- eso
necesita texto de logro (nombre/descripción) por cluster, que es
trabajo de redacción, no mecánico. Este script deja un
`<materia>-clusters-nuevos.json` en _qa_tools/_rediseno/ con
id/cluster/temas/preguntas por cluster nuevo, listo para que se
escriban esos nombres encima.

Uso:
    python3 gen_examen_jefe_prereq_clusters.py <materia> <id_inicial>
    (id_inicial = primer id del bloque reservado para esa materia,
    ver la tabla de bloques en examen-jefe-REDISEÑO-PLANIFICACION.md)
"""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from block_extract import extract_blocks
from test_examen_jefe_topo_clusters import parse_dependencias, topo_order, partition, verify_no_forward_violation

REPO = Path(__file__).resolve().parents[3]
CLUSTERS_MD = REPO / "content/material/examen-jefe-clusters.md"
RESUMEN_JSON = REPO / "content/material/examen-jefe/_resumen.json"
OUT_DIR = REPO / "content/material/_qa_tools/_rediseno"


def official_topics(materia_titulo):
    """Sólo para el reporte de drift al final - ya NO es la fuente de verdad
    del set de temas (ver build_order): examen-jefe-clusters.md puede haber
    quedado desactualizado contra el `material/` real (drift documentado,
    ver examen-jefe-clustering-no-cumple-requisito), así que se usa sólo
    para comparar y avisar, no para decidir qué temas entran."""
    txt = CLUSTERS_MD.read_text(encoding="utf-8")
    m = re.search(rf"## {re.escape(materia_titulo)} \(\d+ temas.*?\n\n(.*?)\n\n##", txt, re.S)
    if not m:
        return None
    temas = []
    for line in m.group(1).splitlines():
        mm = re.search(r"\((\d+)\): (.+)$", line)
        if mm:
            temas.extend(t.strip() for t in mm.group(2).split(", "))
    return temas


def filesystem_topics(materia):
    """Fuente de verdad real: toda carpeta bajo content/material/<materia>/
    que tenga teoria.md o cuestionario.md, ruta relativa a esa raíz."""
    base = REPO / "content/material" / materia
    temas = []
    for p in sorted(base.rglob("teoria.md")) + sorted(base.rglob("cuestionario.md")):
        rel = p.parent.relative_to(base).as_posix()
        if rel not in temas:
            temas.append(rel)
    return sorted(set(temas))


def build_order(materia, materia_titulo):
    temas_tabla, edges = parse_dependencias(materia)
    reales = filesystem_topics(materia)
    faltantes = [t for t in reales if t not in edges]
    for t in faltantes:
        edges[t] = set()  # hoja sin prerrequisito documentado, no bloquea a nadie
    extra_en_tabla = [t for t in edges if t not in reales]
    for t in extra_en_tabla:
        del edges[t]  # tema en dependencias.md que ya no existe en el filesystem (drift)
    # IMPORTANTE: los "faltantes" tienen que entrar a topo_order JUNTO con el
    # resto, no concatenarse después del orden ya calculado - si entran
    # después, cualquier tema real que dependa de un "faltante" pierde esa
    # arista en silencio (temaset no lo contenía todavía) y puede terminar
    # ordenado ANTES que su propio prerrequisito. edges.keys() ya es
    # exactamente el set `reales` a esta altura (agregados los faltantes,
    # borrados los extra).
    orden, _ = topo_order(list(edges.keys()), edges)
    assert set(orden) == set(reales), (set(reales) ^ set(orden), "no cubre 1 a 1 el filesystem real")

    oficiales = official_topics(materia_titulo)
    drift = None
    if oficiales is not None and set(oficiales) != set(reales):
        drift = {
            "en_clusters_md_no_en_filesystem": sorted(set(oficiales) - set(reales)),
            "en_filesystem_no_en_clusters_md": sorted(set(reales) - set(oficiales)),
        }
    return orden, edges, drift


def aggregate_cluster(materia, temas):
    secciones, total_preguntas, completas = [], 0, 0
    for tema in temas:
        f = REPO / "content/material" / materia / tema / "cuestionario.md"
        if not f.exists():
            secciones.append((tema, 0, None))
            continue
        blocks = extract_blocks(f.read_text(encoding="utf-8"))
        secciones.append((tema, len(blocks), blocks))
        total_preguntas += len(blocks)
        completas += 1
    return secciones, total_preguntas, completas


def render_cluster_md(materia, cluster_id, nombre_placeholder, secciones, total_preguntas, completas):
    total = len(secciones)
    head = (f"# Examen jefe — {nombre_placeholder}\n\n"
            f"> Logro #{cluster_id}. [PENDIENTE: descripción del logro]. "
            f"Pool agregado de los `cuestionario.md` ya validados de sus {total} temas "
            f"(orden por conocimientos previos, no alfabético — ver "
            f"`../../examen-jefe-REDISEÑO-PLANIFICACION.md`). "
            f"**{total_preguntas} preguntas totales** en {completas}/{total} secciones.\n\n---\n\n")
    parts = [head]
    for tema, n, blocks in secciones:
        parts.append(f"## Sección: {tema} ({n} preguntas)\n\n")
        if blocks is None:
            parts.append("*(sin `cuestionario.md` en este tema — sección vacía, no se cuenta en el pool)*\n\n")
            continue
        for b in blocks:
            parts.append(f"```\n{b}\n```\n\n")
    return "".join(parts)


def run(materia, materia_titulo, id_inicial):
    orden, edges, drift = build_order(materia, materia_titulo)
    if drift:
        print(f"  AVISO drift {materia}: examen-jefe-clusters.md estaba desactualizado contra "
              f"el filesystem real -> {drift}")
    clusters = partition(orden)
    violations = verify_no_forward_violation(clusters, edges)
    assert not violations, f"violaciones de prerrequisito: {violations}"

    materia_dir = REPO / "content/material/examen-jefe" / materia
    # limpiar los cluster-N.md viejos (van a ser reemplazados por la nueva numeración/tamaño)
    for old in materia_dir.glob("cluster-*.md"):
        old.unlink()

    nuevos = []
    resumen_filas = []
    for i, temas in enumerate(clusters, 1):
        cluster_id = id_inicial + i - 1
        secciones, total_preguntas, completas = aggregate_cluster(materia, temas)
        placeholder = f"[PENDIENTE #{cluster_id}]"
        md = render_cluster_md(materia, cluster_id, placeholder, secciones, total_preguntas, completas)
        (materia_dir / f"cluster-{i}.md").write_text(md, encoding="utf-8")
        nuevos.append({"id": cluster_id, "cluster": i, "temas": temas, "preguntas": total_preguntas})
        resumen_filas.append({
            "id": cluster_id, "materia": materia_titulo, "cluster": i,
            "preguntas": total_preguntas, "secciones_completas": completas,
            "secciones_totales": len(temas),
        })

    OUT_DIR.mkdir(exist_ok=True)
    out_path = OUT_DIR / f"{materia}-clusters-nuevos.json"
    out_path.write_text(json.dumps(nuevos, ensure_ascii=False, indent=1), encoding="utf-8")

    # actualizar la seccion de esta materia en examen-jefe-clusters.md
    txt = CLUSTERS_MD.read_text(encoding="utf-8")
    nueva_seccion = f"## {materia_titulo} ({len(orden)} temas, {len(clusters)} clusters)\n\n" + "\n".join(
        f"- **Cluster {i}** ({len(t)}): {', '.join(t)}" for i, t in enumerate(clusters, 1))
    patron = rf"## {re.escape(materia_titulo)} \(\d+ temas.*?\n\n.*?(?=\n\n##)"
    assert re.search(patron, txt, re.S), f"no encontré la sección '## {materia_titulo}' para reemplazar"
    txt2 = re.sub(patron, nueva_seccion.replace("\\", "\\\\"), txt, count=1, flags=re.S)
    CLUSTERS_MD.write_text(txt2, encoding="utf-8")

    # actualizar _resumen.json: sacar las filas viejas de esta materia, poner las nuevas
    resumen = json.loads(RESUMEN_JSON.read_text(encoding="utf-8"))
    resumen = [r for r in resumen if r["materia"] != materia_titulo]
    # insertar en el lugar donde estaban (buscar primer indice de una materia con id mayor, o al final)
    idx = next((i for i, r in enumerate(resumen) if r["id"] > id_inicial), len(resumen))
    resumen[idx:idx] = resumen_filas
    RESUMEN_JSON.write_text(json.dumps(resumen, ensure_ascii=False, indent=1), encoding="utf-8")

    print(f"{materia}: {len(clusters)} clusters nuevos, ids {id_inicial}-{id_inicial + len(clusters) - 1}")
    print(f"  -> {out_path} (para escribir nombre/descripcion/icono por cluster)")
    print(f"  -> {materia_dir}/cluster-1.md .. cluster-{len(clusters)}.md regenerados")
    print(f"  -> examen-jefe-clusters.md y examen-jefe/_resumen.json actualizados")
    return nuevos


if __name__ == "__main__":
    if len(sys.argv) < 4:
        raise SystemExit("uso: gen_examen_jefe_prereq_clusters.py <carpeta_materia> <Título En Clusters.md> <id_inicial>")
    run(sys.argv[1], sys.argv[2], int(sys.argv[3]))
