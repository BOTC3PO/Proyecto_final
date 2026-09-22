#!/usr/bin/env python3
"""
Prueba del criterio de agrupamiento propuesto en
examen-jefe-REDISEÑO-PLANIFICACION.md: en vez de cortar por orden
alfabético de carpeta, ordenar topológicamente el grafo real de
`<materia>/dependencias.md` y partir esa lista en tramos de 5-15.

No genera nada en content/material/examen-jefe/ - es sólo una prueba
de que el algoritmo funciona sobre datos reales, para un puñado de
materias de tamaño y forma distinta (chica/mediana/grande, con y sin
sub-troncos con nombre propio):
  - Matemática (161 temas, la más grande y con la cadena de Análisis
    ya documentada como caso roto por el corte alfabético actual).
  - Economía (77 temas, tronco que sufrió más drift/atomización
    reciente - buen caso de estrés).
  - Cívica (31 temas, chica, para confirmar que el algoritmo también
    da resultados razonables con pocos temas).

Uso:
    python3 test_examen_jefe_topo_clusters.py [materia ...]
    (sin argumentos: corre las 3 de arriba)
"""
import re
import sys
from collections import defaultdict, deque
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
MATERIAS_DEFAULT = ["matematica", "economia", "civica"]

TOKEN_RE = re.compile(r"`([^`]+?)/?`")


def _cols(line):
    line = line.strip()
    if not (line.startswith("|") and line.endswith("|")):
        return None
    parts = line[1:-1].split("|")
    return [p.strip() for p in parts]


def parse_dependencias(materia: str):
    """-> (temas: list[str] en orden de archivo, edges: dict[tema] = set(deps intra-materia))

    Formato de tabla NO es fijo entre materias: Matemática tiene 4
    columnas (Tema | Nodo MAPA | Depende de | Por qué), Economía/Cívica
    tienen 3 (Tema | Depende de | Por qué) - se detecta el índice real
    de "Depende de" leyendo la fila de encabezado en vez de asumir una
    posición fija."""
    path = REPO / "content/material" / materia / "dependencias.md"
    temas, edges = [], {}
    dep_idx = None
    past_separator = False
    for line in path.read_text(encoding="utf-8").splitlines():
        cols = _cols(line)
        if cols is None:
            continue
        if dep_idx is None:
            for i, c in enumerate(cols):
                if "depende" in c.lower():
                    dep_idx = i
                    break
            continue  # esta es la fila de encabezado, no datos
        if not past_separator:
            if all(set(c) <= {"-", ":", ""} for c in cols):
                past_separator = True
            continue
        if len(cols) <= dep_idx:
            continue
        toks1 = TOKEN_RE.findall(cols[0])
        if not toks1:
            continue
        tema = toks1[0].strip()
        if tema in edges:
            continue  # fila duplicada/repetida (pasa en algún materia), quedarse con la primera
        deps = set()
        for raw in TOKEN_RE.findall(cols[dep_idx]):
            raw = raw.strip()
            if raw.startswith("..") or raw in ("", "—", "-"):
                continue  # dependencia cruzada a otra materia, o raíz sin dependencia
            deps.add(raw)
        temas.append(tema)
        edges[tema] = deps
    return temas, edges


def topo_order(temas, edges):
    """Kahn, con desempate alfabético entre nodos sin prelación entre sí."""
    indeg = {t: 0 for t in temas}
    out = defaultdict(set)
    temaset = set(temas)
    for t, deps in edges.items():
        for d in deps:
            if d not in temaset:
                continue  # dependencia declarada a un tema que no está en la tabla (typo/drift) - se ignora, ver reporte
            out[d].add(t)
            indeg[t] += 1
    ready = deque(sorted(t for t in temas if indeg[t] == 0))
    order, missing_refs = [], []
    for t, deps in edges.items():
        for d in deps:
            if d not in temaset:
                missing_refs.append((t, d))
    while ready:
        t = ready.popleft()
        order.append(t)
        nxt = sorted(out[t] - set(order))
        for n in nxt:
            indeg[n] -= 1
        ready = deque(sorted(ready) + [n for n in nxt if indeg[n] == 0 and n not in ready])
    return order, missing_refs


def partition(order, lo=5, hi=15, target=5):
    """Tramos consecutivos de la lista topológica - preserva la propiedad
    de que ningún tema entra a un cluster antes que sus prerrequisitos."""
    clusters, i = [], 0
    while i < len(order):
        size = min(target, len(order) - i)
        # si el resto no llega al mínimo, se pega al último cluster en vez de crear uno chico
        if len(order) - i - size < lo and len(order) - i - size > 0:
            size = len(order) - i
        clusters.append(order[i:i + size])
        i += size
    return clusters


def verify_no_forward_violation(clusters, edges):
    """La prueba real: para cada tema, todos sus prerrequisitos deben estar
    en su mismo cluster o en uno anterior - nunca en uno posterior."""
    cluster_of = {t: i for i, c in enumerate(clusters) for t in c}
    violations = []
    for t, deps in edges.items():
        if t not in cluster_of:
            continue
        for d in deps:
            if d in cluster_of and cluster_of[d] > cluster_of[t]:
                violations.append((t, d, cluster_of[t], cluster_of[d]))
    return violations


def run(materia):
    temas, edges = parse_dependencias(materia)
    order, missing_refs = topo_order(temas, edges)
    assert len(order) == len(temas), (
        f"{materia}: {len(temas)} temas en la tabla pero {len(order)} en el orden "
        "topológico - probablemente hay un ciclo (dependencia circular real)")
    clusters = partition(order)
    violations = verify_no_forward_violation(clusters, edges)

    print(f"\n=== {materia}: {len(temas)} temas, {len(clusters)} clusters ===")
    if missing_refs:
        print(f"  aviso: {len(missing_refs)} tokens entre backticks en la columna \"Depende de\" "
              "que no matchean ningún tema de la tabla, ignorados (mayormente prosa citando "
              "`materia/`/`troncos.md` entre backticks, no dependencias reales - revisar a mano "
              f"si se usa en serio): {missing_refs[:5]}{' ...' if len(missing_refs) > 5 else ''}")
    for i, c in enumerate(clusters, 1):
        print(f"  Cluster {i} ({len(c)}): {', '.join(c)}")
    assert not violations, f"{materia}: {len(violations)} violaciones de prerrequisito: {violations[:5]}"
    print(f"  OK: 0 violaciones de prerrequisito en {len(clusters)} clusters "
          f"(ningún tema antes que su prerrequisito)")
    return clusters


def demo():
    """Caso puntual citado en el plan: la cadena de Análisis de Matemática
    (familias-exponencial-logaritmica -> limite -> continuidad -> derivada)
    debe terminar en el mismo cluster o en clusters consecutivos, nunca
    separada por 5-11 clusters como pasa hoy con el corte alfabético."""
    temas, edges = parse_dependencias("matematica")
    order, _ = topo_order(temas, edges)
    cadena = ["familias-exponencial-logaritmica", "limite", "continuidad", "derivada"]
    posiciones = {t: order.index(t) for t in cadena if t in order}
    print("\n=== Caso puntual: cadena de Análisis en Matemática ===")
    print("  posición en el orden topológico:", posiciones)
    assert list(posiciones.values()) == sorted(posiciones.values()), (
        "la cadena no quedó en orden de prerrequisito - revisar dependencias.md")
    clusters = partition(order)
    cluster_of = {t: i for i, c in enumerate(clusters) for t in c}
    dist = max(cluster_of[t] for t in cadena) - min(cluster_of[t] for t in cadena)
    print(f"  clusters ocupados por la cadena: {sorted(set(cluster_of[t] for t in cadena))} "
          f"(distancia {dist}, hoy con el corte alfabético es 11)")
    # la restricción real no es "distancia <=1" (eso depende de dónde cae el
    # corte de 5 en 5) sino que sean *consecutivos* - lo primero que
    # verify_no_forward_violation ya garantiza en general; acá sólo se chequea
    # que no vuelva a pasar lo de hoy (partes de la cadena a 11 clusters de
    # distancia, mezcladas con temas sin relación).
    ocupados = sorted(set(cluster_of[t] for t in cadena))
    assert ocupados == list(range(ocupados[0], ocupados[-1] + 1)), (
        f"la cadena quedó en clusters no consecutivos: {ocupados}")
    assert dist <= 2, f"la cadena quedó repartida en más clusters de lo esperable (distancia {dist})"
    print(f"  OK: la cadena completa queda en {len(ocupados)} clusters consecutivos "
          "(nunca salteados), no separada por accidente de letra como con el corte actual")


if __name__ == "__main__":
    materias = sys.argv[1:] or MATERIAS_DEFAULT
    for m in materias:
        run(m)
    if "matematica" in materias:
        demo()
    print("\nTodas las pruebas pasaron.")
