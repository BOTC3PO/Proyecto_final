#!/usr/bin/env python3
"""Genera idiomas-extranjeros/dependencias.md a partir del ORDEN de idiomas-extranjeros-PLANIFICACION.md.

Reglas (un solo criterio para los 13 idiomas, ver el encabezado del archivo generado):
- Escritura: el primer tema es raíz; los demás cuelgan del primero. Todo lo demás depende de la escritura.
- Gramática, por grupos de nivel en el orden del plan: el PRIMER tema de un grupo es su ancla; depende del
  ÚLTIMO tema del grupo anterior (o de la escritura, en el primer grupo). El resto del grupo depende del ancla.
- Destrezas (reading/writing/listening/speaking) de un nivel: dependen de la MISMA destreza del nivel anterior y del
  ancla del grupo de gramática de su nivel.
- Carpetas que no están en el plan (chino y esperanto agregaron temas después) se ubican por `nivel:` de su cuestionario.
Uso: python3 content/material/_qa_tools/gen_dependencias_idiomas.py [--check]
"""
import re, sys
from pathlib import Path
MAT = Path(__file__).resolve().parents[1]
BASE = MAT / "idiomas-extranjeros"
LANGS = {"en": "ingles", "de": "aleman", "fr": "frances", "it": "italiano", "pt-BR": "portugues-br", "pt-PT": "portugues-pt",
         "ja": "japones", "ko": "coreano", "zh": "chino", "ru": "ruso", "ar": "arabe", "hi": "hindi", "eo": "esperanto"}
SKILLS = ("reading", "writing", "listening", "speaking")
# nivel declarado en el cuestionario -> índice de grupo de gramática (solo para carpetas que el plan no lista)
NIVEL_GRUPO = {"zh": {"HSK1": 0, "HSK2": 1, "HSK1-2": 1, "HSK3-4": 2, "HSK3-6": 2, "HSK5-6": 3},
               "eo": {"A2": 0, "B1": 1, "B2": 2, "C1": 2}}
# destreza de un nivel -> grupo de gramática (por defecto, el mismo índice)
SKILL_NIVEL_GRUPO = {"eo": {"a2": 0, "b1": 1, "b2": 2, "c1": 2}}

def parse_plan():
    plan = (MAT / "idiomas-extranjeros-PLANIFICACION.md").read_text(encoding="utf-8")
    out = {}
    for sec in re.split(r"^## ", plan, flags=re.M)[1:]:
        m = re.search(r"\(`([A-Za-z-]+)`\)", sec.split("\n")[0])
        if not m or m.group(1) not in LANGS: continue
        escritura, gram, destr = [], [], []
        for sub in re.split(r"^### ", sec, flags=re.M)[1:]:
            title, _, body = sub.partition("\n")
            slugs = re.findall(r"`([a-z0-9][a-z0-9-]*)`", body)
            t = title.lower()
            if t.startswith("destrezas"): destr = slugs
            elif t.startswith(("sistema", "escritura")): escritura += slugs
            else: gram.append(slugs)
        out[LANGS[m.group(1)]] = (m.group(1), escritura, gram, destr)
    return out

def nivel_de(folder):
    q = (folder / "cuestionario.md").read_text(encoding="utf-8")
    m = re.search(r'nivel:\s*"([^"]+)"', q)
    return m.group(1).strip() if m else None

def build():
    plan = parse_plan(); filas = []; todos = set()
    for carpeta, (code, escritura, gram, destr) in plan.items():
        d = BASE / carpeta
        existentes = {p.name for p in d.iterdir() if p.is_dir()}
        listados = set(escritura) | {s for g in gram for s in g} | set(destr)
        gram = [list(g) for g in gram]
        extras_skill = []
        for ex in sorted(existentes - listados):
            if ex.split("-")[0] in SKILLS: extras_skill.append(ex); continue
            niv = nivel_de(d / ex); gi = NIVEL_GRUPO.get(code, {}).get(niv)
            if gi is None: raise SystemExit(f"{carpeta}/{ex}: sin grupo para nivel {niv!r}")
            gram[gi].append(ex)
        P = lambda t: f"{carpeta}/{t}"
        fila = {}
        raiz = escritura[0] if escritura else None
        for t in escritura[1:]: fila[t] = ([P(raiz)], "Sistema de escritura: se aprende después del primero.")
        if raiz: fila[raiz] = ([], "Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás.")
        previo = [P(t) for t in escritura]  # lo que debe estar antes del primer grupo
        anclas = []
        for gi, g in enumerate(gram):
            ancla = g[0]; anclas.append(ancla)
            fila[ancla] = (previo, "Ancla del nivel: abre el grupo y exige haber cerrado el anterior." if gi else ("Primer tema de gramática." if not escritura else "Primer tema de gramática, tras la escritura."))
            for t in g[1:]: fila[t] = ([P(ancla)], "Tema del grupo de gramática; parte del ancla de su nivel.")
            previo = [P(g[-1])]
        # destrezas
        niveles = []
        for s in list(destr) + extras_skill:
            lv = s.split("-", 1)[1]
            if lv not in niveles: niveles.append(lv)
        if code == "eo": niveles = [x for x in ("a2", "b1", "b2", "c1") if x in niveles]
        else: niveles = [n for n in niveles]
        for s in list(destr) + extras_skill:
            sk, lv = s.split("-", 1)
            k = niveles.index(lv)
            gi = SKILL_NIVEL_GRUPO.get(code, {}).get(lv, k)
            deps = [P(anclas[min(gi, len(anclas) - 1)])]
            if k > 0:
                prev = f"{sk}-{niveles[k-1]}"
                if prev in existentes: deps.append(P(prev))
            fila[s] = (deps, "Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel.")
        assert set(fila) == existentes, (carpeta, sorted(existentes ^ set(fila)))
        for t in sorted(existentes, key=lambda x: list(fila).index(x)):
            filas.append((P(t), fila[t][0], fila[t][1])); todos.add(P(t))
    return filas

def check_acyclic(filas):
    g = {t: set(d) for t, d, _ in filas}
    for t, ds in g.items():
        for x in ds: assert x in g, f"dependencia inexistente {x} (de {t})"
    estado = {}
    def dfs(u):
        estado[u] = 1
        for v in g[u]:
            if estado.get(v) == 1: raise SystemExit(f"ciclo en {u} -> {v}")
            if v not in estado: dfs(v)
        estado[u] = 2
    for u in g:
        if u not in estado: dfs(u)

def main():
    filas = build(); check_acyclic(filas)
    enc = f"""# Idiomas extranjeros — Dependencias entre temas

> **Generado** por `_qa_tools/gen_dependencias_idiomas.py` a partir del orden de `../idiomas-extranjeros-PLANIFICACION.md`. No editar a mano:
> cambiar el plan o las reglas y volver a generar. **Decisión de Claude, no pedida**: el plan fija el orden de los temas por nivel pero no sus
> prerrequisitos; estas reglas son un criterio de trabajo, para revisar con quien enseña cada idioma.

Reglas, iguales en los 13 idiomas:
- **Escritura** (japonés, coreano, chino, árabe, ruso, hindi): el primer tema es raíz; todo lo demás depende de la escritura.
- **Gramática**, por grupos de nivel en el orden del plan: el primer tema de cada grupo es su *ancla* y depende del último tema del grupo anterior; el resto del grupo depende del ancla.
- **Destrezas** (reading, writing, listening, speaking): dependen de la misma destreza del nivel anterior y del ancla de la gramática de su nivel.
- Los temas que el plan no lista (chino y esperanto agregaron varios después) se ubican por el `nivel` de su cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
"""
    cuerpo = "".join(f"| `{t}/` | " + (", ".join(f"`{x}/`" for x in d) if d else "Ninguna — raíz") + f" | {w} |\n" for t, d, w in filas)
    destino = BASE / "dependencias.md"
    if "--check" in sys.argv:
        ok = destino.exists() and destino.read_text(encoding="utf-8") == enc + cuerpo
        print("dependencias.md de idiomas", "al día" if ok else "DESACTUALIZADO"); sys.exit(0 if ok else 1)
    destino.write_text(enc + cuerpo, encoding="utf-8"); print(f"{len(filas)} temas, {sum(len(d) for _, d, _ in filas)} dependencias")
main()
