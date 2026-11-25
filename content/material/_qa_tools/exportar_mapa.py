#!/usr/bin/env python3
"""Exporta el mapa del temario oficial por caminos (página «Mapa del temario» de la web y de la app sin conexión).

Los caminos son los troncos de `content/troncos.md` (y sus secciones). Cada tema se ubica así, en orden:
  1. por el nodo del MAPA que cita su fila en el `dependencias.md` de la materia (`Nodo F2`, `` `NEWTON1a` ``…);
  2. por su título, si coincide con la etiqueta de un nodo;
  3. Idiomas extranjeros y Oficios se agrupan por idioma y por oficio (su primera carpeta);
  4. el resto toma el camino más común entre sus prerrequisitos y los temas que dependen de él (misma materia primero);
  5. lo que quede, en un camino por materia.
Los exámenes jefe van al camino donde están la mayoría de sus temas.

Uso: python3 content/material/_qa_tools/exportar_mapa.py [SALIDA.json]
     (por omisión, apps/web/public/temario/mapa.json). No toca ninguna base. Con el mismo temario, el mismo archivo.
"""
import collections, json, re, subprocess, sys, tempfile, unicodedata
from pathlib import Path

MAT = Path(__file__).resolve().parents[1]
REPO = MAT.parents[1]
TRONCOS = MAT.parent / "troncos.md"
SALIDA = REPO / "apps/web/public/temario/mapa.json"

# Encabezados de troncos.md que no son caminos (tablas, notas, logros, profesiones).
NO_CAMINO = re.compile(r"Tabla de cruces|Cruces inversos|Cómo se reparte|Qué de esto|Logros|Lo que este tronco|Y lo que este tronco|"
                       r"El renderer|Profesiones académicas|Ciencias exactas|Tecnología, ingeniería e investigación|Sociales y humanidades|"
                       r"Troncos nuevos|Los cuatro ciclos|Materias que le dan sentido|banda por banda|Oficios y trabajo técnico|"
                       r"Construcción e infraestructura|Metalurgia y mecánica|Agro y alimentos|Textil y oficios")
IDIOMAS = {"aleman": "Alemán", "arabe": "Árabe", "chino": "Chino", "coreano": "Coreano", "esperanto": "Esperanto", "frances": "Francés",
           "hindi": "Hindi", "ingles": "Inglés", "italiano": "Italiano", "japones": "Japonés", "latin": "Latín", "portugues-br": "Portugués (Brasil)",
           "portugues-pt": "Portugués (Portugal)", "portugues": "Portugués", "ruso": "Ruso"}


def norm(s):
    s = unicodedata.normalize("NFKD", re.sub(r"<br\s*/?>", " ", s).lower())
    return re.sub(r"[^a-z0-9]+", " ", "".join(c for c in s if not unicodedata.combining(c))).strip()


def sin_formato(s):
    """Saca las marcas de Markdown de un título (`**There is**`, `*an*`, `` `x` ``)."""
    return re.sub(r"\s+", " ", re.sub(r"[*_`]+", "", s)).strip()


def slug(s):
    return norm(s).replace(" ", "-")


def titulo_limpio(encabezado):
    """`Tronco 1 — Numérico: de contar…` → `Numérico: de contar…`; `3.a — Geometría…` → `Geometría…`."""
    return re.sub(r"^(Tronco\s+\d+|\d+(\.\d+)?(\.[a-z0-9]+)?)\s*[—-]\s*", "", encabezado).strip()


def leer_troncos():
    """Nodo del MAPA → (camino, sección) y etiqueta; y el orden de los caminos y de sus secciones."""
    camino = seccion = None
    nodo_sec, etiqueta, orden = {}, {}, []
    en_bloque = False
    for linea in TRONCOS.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^(#{2,4})\s+(.*)", linea)
        if m:
            nivel, texto = len(m.group(1)), m.group(2).strip()
            if re.match(r"Tronco\s+\d+", texto) or (nivel == 2 and not NO_CAMINO.search(texto)):
                camino, seccion = titulo_limpio(texto), None
                if camino not in [c for c, _ in orden]:
                    orden.append((camino, []))
            elif NO_CAMINO.search(texto):
                if nivel == 2:
                    camino = None
                seccion = None if nivel == 2 else "__fuera__"
            elif camino:
                seccion = titulo_limpio(texto)
                secs = dict(orden)[camino]
                if seccion not in secs:
                    secs.append(seccion)
            continue
        if linea.strip().startswith("```mermaid"):
            en_bloque = True
            continue
        if en_bloque and linea.strip().startswith("```"):
            en_bloque = False
            continue
        if en_bloque and camino and seccion != "__fuera__":
            for nid, lab in re.findall(r'([A-Za-z0-9_]+)\["([^"]+)"\]', linea):
                if nid not in nodo_sec:
                    nodo_sec[nid] = (camino, seccion)
                    etiqueta[nid] = lab
    return nodo_sec, etiqueta, orden


def nombres_de_oficios():
    """Carpeta del oficio → su nombre, de los títulos de `oficios/dependencias.md` (`## Albañil / Constructor (`OF3`)`)."""
    nombres, titulo = {}, None
    for linea in (MAT / "oficios/dependencias.md").read_text(encoding="utf-8").splitlines():
        m = re.match(r"^##\s+(.+?)\s*(\(`[^`]+`\))?\s*$", linea)
        if m:
            # «Finales de ruta técnicos/informáticos — Bash (agregado 2026-10-13)» → «Bash»;
            titulo = re.sub(r"\s*\(agregado[^)]*\)", "", m.group(1)).strip()
            # «Guía Turístico — secciones 2 a 5» → «Guía Turístico».
            if "—" in titulo:
                antes, despues = [x.strip() for x in titulo.split("—", 1)]
                titulo = despues if antes.lower().startswith("finales de ruta") else antes
            continue
        m = re.match(r"^\|\s*`([^`/]+)/", linea)
        if m and titulo:
            nombres.setdefault(m.group(1), titulo)
    return nombres


OFICIOS = {}


def ubicar(temas, nodo_sec, etiqueta):
    def idmod(materia, rel):
        return "cont-" + materia + "--" + rel.replace("/", "--")

    asig = {}
    for dep in sorted(MAT.glob("*/dependencias.md")):
        materia = dep.parent.name
        for fila in dep.read_text(encoding="utf-8").splitlines():
            m = re.match(r"^\|\s*`([^`]+)/`\s*\|", fila)
            if not m:
                continue
            nodos = [n for n in re.findall(r"`([A-Za-z0-9_]+)`", fila) if n in nodo_sec]
            mid = idmod(materia, m.group(1))
            if nodos and mid in temas and temas[mid]["materia"] not in ("idiomas-extranjeros", "oficios"):
                asig.setdefault(mid, nodo_sec[nodos[0]])
    por_etiqueta = collections.defaultdict(list)
    for nid, lab in etiqueta.items():
        por_etiqueta[norm(re.sub(r"\(.*?\)", "", lab))].append(nid)
    for mid, t in temas.items():
        if mid in asig or t["materia"] in ("idiomas-extranjeros", "oficios"):
            continue
        c = por_etiqueta.get(norm(t["titulo"]))
        if c:
            asig[mid] = nodo_sec[sorted(c)[0]]
    for mid, t in temas.items():
        if t["materia"] == "idiomas-extranjeros":
            carpeta = t["ruta"].split("/")[0]
            asig[mid] = ("Idiomas extranjeros", IDIOMAS.get(carpeta, carpeta.replace("-", " ").capitalize()))
        elif t["materia"] == "oficios":
            carpeta = t["ruta"].split("/")[0]
            asig[mid] = ("Oficios", OFICIOS.get(carpeta) or carpeta.replace("-", " ").capitalize())
    vecinos = collections.defaultdict(list)
    for mid, t in temas.items():
        for d in t["dependencias"]:
            if d in temas:
                vecinos[mid].append(d)
                vecinos[d].append(mid)
    while True:
        nuevos = {}
        for mid in sorted(temas):
            if mid in asig:
                continue
            t = temas[mid]
            cands = [asig[v] for v in vecinos[mid] if v in asig and temas[v]["materia"] == t["materia"]] or [asig[v] for v in vecinos[mid] if v in asig]
            if cands:
                cuenta = collections.Counter(cands)
                nuevos[mid] = sorted(cuenta, key=lambda k: (-cuenta[k], k[0], k[1] or ""))[0]
        if not nuevos:
            break
        asig.update(nuevos)
    # Sin camino: uno por materia (el nombre lo pone la web con nombreMateria).
    for mid, t in temas.items():
        asig.setdefault(mid, ("materia:" + t["materia"], None))
    return asig


def main():
    salida = Path(sys.argv[1]) if len(sys.argv) > 1 else SALIDA
    # exportar_manifiesto.py corre al importarlo: se usa como programa aparte.
    with tempfile.TemporaryDirectory() as tmp:
        ruta = Path(tmp) / "manifiesto.json"
        subprocess.run([sys.executable, str(Path(__file__).parent / "exportar_manifiesto.py"), str(ruta)], check=True, stdout=subprocess.DEVNULL)
        man = json.loads(ruta.read_text(encoding="utf-8"))
    temas = {t["id"]: t for t in man["temas"]}
    nodo_sec, etiqueta, orden = leer_troncos()
    OFICIOS.update(nombres_de_oficios())
    asig = ubicar(temas, nodo_sec, etiqueta)

    examenes = {}
    for e in man["examenes"]:
        cuenta = collections.Counter(asig[t] for t in e["temas"] if t in asig)
        if cuenta:
            examenes[e["id"]] = (e, sorted(cuenta, key=lambda k: (-cuenta[k], k[0], k[1] or ""))[0])

    # Caminos en el orden de troncos.md; después idiomas, oficios y los de materia.
    orden_caminos = [c for c, _ in orden] + ["Idiomas extranjeros", "Oficios"]
    secciones_de = dict(orden)
    usados = collections.defaultdict(lambda: collections.defaultdict(list))
    for mid, (camino, seccion) in asig.items():
        usados[camino][seccion].append(mid)
    for eid, (_, (camino, seccion)) in examenes.items():
        usados[camino][seccion].append(eid)
    extra = sorted(c for c in usados if c not in orden_caminos)

    caminos = []
    for camino in [c for c in orden_caminos if c in usados] + extra:
        secs = usados[camino]
        nombres = [s for s in secciones_de.get(camino, []) if s in secs] + sorted(s for s in secs if s and s not in secciones_de.get(camino, []))
        lista = []
        if None in secs:
            lista.append({"id": "general", "titulo": None, "modulos": sorted(secs[None])})
        for s in nombres:
            lista.append({"id": slug(s), "titulo": s, "modulos": sorted(secs[s])})
        if camino.startswith("materia:"):
            caminos.append({"id": slug(camino), "materia": camino.split(":", 1)[1], "secciones": lista})
        else:
            caminos.append({"id": slug(camino), "titulo": camino, "secciones": lista})

    modulos = {}
    for mid in sorted(temas):
        t = temas[mid]
        modulos[mid] = {"t": sin_formato(t["titulo"]), "m": t["materia"], **({"n": t["nivel"]} if t["nivel"] else {}),
                        **({"d": sorted(set(t["dependencias"]))} if t["dependencias"] else {})}
    for eid in sorted(examenes):
        e = examenes[eid][0]
        modulos[eid] = {"t": sin_formato(e["titulo"]), "m": e["materia"], "x": 1, "d": sorted(set(e["temas"]))}

    datos = {"formato": 1, "caminos": caminos, "modulos": modulos}
    salida.parent.mkdir(parents=True, exist_ok=True)
    salida.write_text(json.dumps(datos, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    por_regla = len(temas)
    print(f"{salida}: {len(caminos)} caminos, {sum(len(c['secciones']) for c in caminos)} secciones, "
          f"{por_regla} temas y {len(examenes)} exámenes, {salida.stat().st_size / 1e3:.0f} KB", file=sys.stderr)


if __name__ == "__main__":
    main()
