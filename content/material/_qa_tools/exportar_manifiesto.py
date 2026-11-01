#!/usr/bin/env python3
"""Exporta el temario a un manifiesto JSON que consume `api/scripts/importar_contenido.ts`.

Un registro por tema (carpeta con teoria.md y/o cuestionario.md): título, teoría limpia, nivel, preguntas VBLang
(una por bloque ```), y dependencias resueltas a ids de módulo. No toca ninguna base.
Uso: python3 content/material/_qa_tools/exportar_manifiesto.py SALIDA.json [materia ...]
"""
import json, re, sys, hashlib
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
MAT = Path(__file__).resolve().parents[1]
EXCLUIR = ("_", "examen-jefe", "teoria-extendida")

def modulo_id(materia, rel):
    """Id seguro para URL (sin `:`, `/` ni `#`): cont-<materia>--<ruta con -- en vez de />."""
    return f"cont-{materia}--{rel.replace('/', '--')}"

IMG = re.compile(r"!\[([^\]]*)\]\((https://[^)\s]+)\)\s*\n\s*\n\*Imagen: (.*?)\. \[Wikimedia Commons\]\(([^)]+)\)\.\*\n?", re.S)

def extraer_imagenes(texto):
    """La app muestra la teoría como texto plano: las imágenes `![](url)` salen del texto y pasan a ser ítems
    "Herramienta" con un bloque de imagen (URL de Wikimedia Commons, sin descargar nada) y su atribución."""
    items = []
    def sacar(m):
        alt, url, cred, pagina = m.group(1), m.group(2), m.group(3).strip(), m.group(4)
        doc = {"version": 1, "blocks": [{"id": f"img{len(items) + 1}", "type": "image", "url": url, "alt": alt,
                                         "caption": f"{cred}. Fuente: {pagina}", "width": "full"}]}
        items.append({"title": (alt[:80] + "…") if len(alt) > 80 else alt, "doc": doc})
        return ""
    return re.sub(r"\n{3,}", "\n\n", IMG.sub(sacar, texto)), items

def herramientas_de(d):
    """Diagramas interactivos: `herramientas/*.json` con un BlockDocument ({version:1, blocks:[...]}) y `titulo`.
    Si el JSON trae `standalone` (p. ej. {"tool": "mapa", ...}) es una «Herramienta standalone» (mapa, línea de tiempo)."""
    out = []
    for f in sorted((d / "herramientas").glob("*.json")) if (d / "herramientas").is_dir() else []:
        j = json.loads(f.read_text(encoding="utf-8"))
        if "standalone" in j:
            out.append({"title": j.get("titulo", f.stem), "standalone": j["standalone"]})
        else:
            out.append({"title": j.get("titulo", f.stem), "doc": {"version": 1, "blocks": j["blocks"]}})
    return out

def limpiar_teoria(t, base=None):
    # La app muestra la teoría como texto plano: los comentarios HTML (placeholders de imagen, notas) se verían crudos.
    t = re.sub(r"[ \t]*<!--.*?-->\.?", "", t, flags=re.S)
    L = t.split("\n"); i = 0
    while i < len(L) and not L[i].startswith("# "): i += 1
    head = L[i][2:].strip() if i < len(L) else ""
    rest = L[i + 1:]; j = 0
    while j < len(rest) and not rest[j].strip(): j += 1
    if j < len(rest) and rest[j].startswith(">"):            # párrafo inicial de referencias internas
        while j < len(rest) and rest[j].strip(): j += 1
        rest = rest[j:]
    out, skip = [], False
    for l in rest:
        if re.match(r"^##\s+Tipo de teor[ií]a", l): skip = True; continue
        if skip:
            if l.startswith("## "): skip = False
            elif l.strip() == "---": skip = False; continue
            else: continue
        out.append(l)
    txt = "\n".join(out)
    # Plantilla de autoría: "## N. Conexión con lo que sigue" (la N es un número a completar): sin la "N.".
    txt = re.sub(r"^(#{2,4})\s+N\.\s+", r"\1 ", txt, flags=re.M)
    def rp(m):
        ruta = m.group(1)
        if ruta.endswith(".md") and not ruta.endswith("teoria.md"): return m.group(0)   # dependencias.md, fichas: nota interna
        if base is not None:
            dest = ruta.rsplit("/", 1)[0] + "/" if ruta.endswith(".md") else ruta
            if (base / dest).resolve().is_dir() and (base / dest / "teoria.md").resolve().exists():
                return "«" + titulo_de(base, dest) + "»"
        seg = [x for x in ruta.split("/") if x and x not in (".", "..") and not x.endswith(".md")]
        return "«" + (seg[-1].replace("-", " ") if seg else "tema") + "»"
    # Los enlaces entre temas se pasan a texto ANTES de filtrar notas internas: si no, el filtro (que busca
    # `teoria.md`) descartaba párrafos enteros de contenido sólo por tener un «ver `../mcd/teoria.md`».
    txt = re.sub(r"\[([^\]]+)\]\((?:\.\./|\./)(?:[^)\s]*/)?(?:teoria\.md)?(?:#[^)\s]*)?\)", r"\1", txt)
    txt = re.sub(r"`((?:\.\./|\./)[^`]*)`", rp, txt)
    INT = re.compile(r"_plan-faltantes|_borradores|troncos\.md|dependencias\.md|PROCEDIMIENTO|lista-temas-plana|\bMAPA\b|\bDSL\b|VBLang|Borrador de partida|propuesto en|ficha-de-bloque|cuestionario\.md|teoria\.md")
    txt = "\n\n".join(p for p in re.split(r"\n\s*\n", txt) if not INT.search(p))
    head = re.sub(r"\s*\((teor[ií]a|cuestionario)[^)]*\)\s*$", "", head)
    return head, txt.strip()

RUTA = re.compile(r"`((?:\.\./|\./)+[a-z0-9][a-z0-9\-/]*/)`")
_TITULOS = {}
def titulo_de(base, ruta):
    """Título del tema al que apunta una ruta relativa (`../sujeto-y-predicado/`); si no existe, el nombre de la carpeta."""
    destino = (base / ruta).resolve()
    if destino not in _TITULOS:
        t = destino / "teoria.md"
        nombre = destino.name.replace("-", " ")
        if t.exists():
            h, _ = limpiar_teoria(t.read_text(encoding="utf-8"))
            h = re.sub(r"^.*? — ", "", h) if " — " in h else h
            nombre = h or nombre
        _TITULOS[destino] = nombre[:1].upper() + nombre[1:]
    return _TITULOS[destino]
def humanizar_rutas(texto, base):
    """Cambia las rutas internas entre temas por el nombre del tema: `../tesis/` -> «Tesis»."""
    return RUTA.sub(lambda m: "«" + titulo_de(base, m.group(1)) + "»", texto)

def bloques(texto):
    L = texto.split("\n"); out = []; titulo = ""; i = 0
    while i < len(L):
        if re.match(r"^###\s", L[i]): titulo = re.sub(r"^###\s*", "", L[i])
        if re.match(r"^```\w*\s*$", L[i]):
            j = i + 1
            while j < len(L) and L[j].strip() != "```": j += 1
            if j < len(L): out.append((titulo, "\n".join(L[i + 1:j]))); i = j
        i += 1
    return out

def deps_de(materia):
    """{tema_rel: [(materia_dest, rel_dest)]} leyendo las tablas de dependencias.md (rutas relativas a la materia o al tema)."""
    p = MAT / materia / "dependencias.md"; res = {}
    if not p.exists(): return res
    dep_idx = 1   # columna "Depende de": cambia según la tabla (Matemática tiene una de 4 columnas con "Nodo" en el medio)
    for line in p.read_text(encoding="utf-8").splitlines():
        if not line.strip().startswith("|"): continue
        cols = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cols) < 2: continue
        if cols[0].lower().startswith("tema") and any("depende" in c.lower() for c in cols):
            dep_idx = next(i for i, c in enumerate(cols) if "depende" in c.lower()); continue
        t = re.findall(r"`([^`]+?)/?`", cols[0])
        if not t or set(cols[0]) <= set("-: "): continue
        if len(cols) <= dep_idx: continue
        tema = t[0].strip("/").lstrip("./")
        ds = []
        for tok in re.findall(r"`([^`\s]+?)/?`", cols[dep_idx]):
            tok = tok.strip("/")
            if tok.endswith(".md") or tok in ("", "—", "-") or " " in tok: continue
            for base in (MAT / materia / tema, MAT / materia):
                tgt = (base / tok).resolve()
                if tgt.exists() and tgt.is_dir():
                    try: rel = tgt.relative_to(MAT)
                    except ValueError: continue
                    parts = rel.parts
                    if len(parts) >= 2: ds.append((parts[0], "/".join(parts[1:])))
                    break
            else:
                # tema hermano dentro del mismo oficio/materia (nombre corto)
                par = Path(tema).parent
                for cand in (par / tok, Path(tok)):
                    if (MAT / materia / cand).is_dir(): ds.append((materia, cand.as_posix())); break
        res.setdefault(tema, [])
        for d in ds:
            if d not in res[tema] and d != (materia, tema): res[tema].append(d)
    return res

def main():
    salida = Path(sys.argv[1]); sel = sys.argv[2:]
    mats = [p.name for p in sorted(MAT.iterdir()) if p.is_dir() and not p.name.startswith(EXCLUIR) and (not sel or p.name in sel)]
    temas = []; existentes = set()
    for m in mats:
        for f in sorted((MAT / m).rglob("*.md")):
            if f.name in ("teoria.md", "cuestionario.md"): existentes.add((m, f.parent.relative_to(MAT / m).as_posix()))
    for m in mats:
        dd = deps_de(m)
        for (mm, rel) in sorted(x for x in existentes if x[0] == m):
            d = MAT / m / rel
            teo = d / "teoria.md"; cu = d / "cuestionario.md"
            titulo, texto = (limpiar_teoria(teo.read_text(encoding="utf-8"), d) if teo.exists() else (rel.split("/")[-1], ""))
            texto, herr = extraer_imagenes(texto); herr += herramientas_de(d)
            titulo = re.sub(r"^.*? — ", "", titulo) if " — " in titulo else titulo
            preguntas = []; nivel = None
            if cu.exists():
                src = cu.read_text(encoding="utf-8")
                for n, (t, b) in enumerate(bloques(src), 1):
                    # `A1` y similares son celdas de planilla en Ofimática, no ids del mapa de temas.
                    interno = r"\bMAPA\b|Tronco \d|troncos\.md|dependencias\.md|\bDSL\b|VBLang|_plan-faltantes|PROCEDIMIENTO" + ("" if "ofimatica" in rel else r"|`[A-Z]{1,6}\d+[a-z]?`")
                    if re.search(interno, b): continue
                    mn = re.search(r'nivel:\s*"([^"]+)"', b); nivel = nivel or (mn.group(1).strip() if mn else None)
                    preguntas.append({"titulo": humanizar_rutas(t, d), "dsl": humanizar_rutas(b, d)})
            deps = [modulo_id(*x) for x in dd.get(rel, []) if x in existentes]
            temas.append({"id": modulo_id(m, rel), "materia": m, "ruta": rel, "titulo": titulo or rel, "teoria": texto, "nivel": nivel,
                          "dependencias": deps, "preguntas": preguntas, "herramientas": herr})
    por_ruta = {(t["materia"], t["ruta"]): t for t in temas}
    def tema_de(materia, slug):
        c = [t for (m, r), t in por_ruta.items() if m == materia and (r == slug or r.endswith("/" + slug)) and t["preguntas"]]
        return c[0]["id"] if c else None
    EJMAP = {"UX/Diseño": "diseño", "Ciencia de Materiales": "materiales", "Resolución de Problemas": "resolucion-problemas", "Dibujo Técnico": "dibujo-tecnico",
             "Ciudadanía Digital": "ciudadania-digital", "Ed. Física": "ed-fisica"}
    examenes = []
    if not sel:
        # Exámenes jefe de materia: juntan las preguntas de varios temas (las mismas de sus cuestionarios).
        for l in json.load(open(MAT / "logros-examen-jefe.json", encoding="utf-8")):
            m = EJMAP.get(l["materia"]) or __import__("verificar_examen_jefe").slug(l["materia"])
            ids = [tema_de(m, x) for x in l["temas"]]
            examenes.append({"id": f"cont-examen-jefe--{l['id']}", "logro": l["id"], "materia": m, "titulo": l["nombre"], "descripcion": l["descripcion"],
                             "temas": [i for i in ids if i], "preguntas": []})
        # Exámenes jefe de idiomas: tienen preguntas propias (no salen de los temas).
        idi = MAT / "idiomas-extranjeros"
        for f in sorted((MAT / "examen-jefe-idiomas").glob("*.md")):
            src = f.read_text(encoding="utf-8"); h = re.search(r"^#\s*(.+)$", src, flags=re.M)
            lang = f.stem; mm = re.search(r"Logro\s*#(\d+)", src)
            rutas = [t for (m, r), t in por_ruta.items() if m == "idiomas-extranjeros" and r.startswith(lang + "/")]
            # La certificación pide todo hasta B2 (o su equivalente); el C1 es un extra y no entra en el logro.
            # Los temas no-C1 nunca dependen de uno C1, así que exigir los "finales" no-C1 exige todo lo demás (cierre transitivo).
            C1 = {"C1", "N1", "HSK5-6", "HSK56", "AVANZADO", "AVANZADA"}
            base = [t for t in rutas if (t["nivel"] or "").strip().upper() not in C1]
            ids_base = {t["id"] for t in base}
            deps_ids = {d for t in base for d in t["dependencias"] if d in ids_base}
            finales = [t["id"] for t in base if t["id"] not in deps_ids]
            examenes.append({"id": f"cont-examen-jefe-idiomas--{lang}", "logro": int(mm.group(1)) if mm else None, "materia": "idiomas-extranjeros",
                             "titulo": re.sub(r"^Examen jefe\s*[—-]\s*", "", h.group(1)).strip() if h else lang,
                             "descripcion": "Certificación del idioma. Para rendirla hay que completar todos los temas hasta el nivel B2 (o su equivalente); el nivel C1 es un extra y no forma parte del logro.",
                             "temas": finales, "preguntas": [{"titulo": t, "dsl": b} for t, b in bloques(src)]})
    libros = []
    if not sel:
        for f in sorted((MAT / "teoria-extendida").glob("*.json")):
            b = json.load(open(f, encoding="utf-8")); m = {"ux-diseno": "diseño"}.get(f.stem, f.stem)
            libros.append({"id": f"cont-libro--{m}", "materia": m, "titulo": b["metadata"]["title"], "libro": json.dumps(b, ensure_ascii=False)})
    salida.write_text(json.dumps({"version": 2, "temas": temas, "examenes": examenes, "libros": libros}, ensure_ascii=False), encoding="utf-8")
    print(f"{len(temas)} temas, {sum(len(t['preguntas']) for t in temas)} preguntas, {sum(len(t['dependencias']) for t in temas)} dependencias, {len(examenes)} exámenes jefe, {len(libros)} libros -> {salida}")
main()
