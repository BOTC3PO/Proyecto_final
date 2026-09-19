#!/usr/bin/env python3
"""
Arma el pool de examen-jefe (certificación C1) de un idioma a partir de
examen_jefe_idiomas/<idioma>.txt  ->  content/material/examen-jefe-idiomas/<idioma>.md

Formato del .txt (una pregunta por línea, campos separados por " | "):
  # gramatica | reading | listening | writing | speaking      (cambia de sección)
  @R texto ...   pasaje de lectura que se antepone ("Texto: «…»") a las preguntas siguientes
  @L texto ...   transcripción de audio ("Audio: «…»")
  @@             cierra el pasaje
  Q | enunciado | correcta | distractor1 | distractor2 | distractor3 | explicación
Cuotas por pool de 500: gramatica 150, reading 125, listening 100, writing 75, speaking 50
(cada intento sortea 100 respetando la proporción: 30/25/20/15/10).
Uso: python3 gen_examen_jefe_idiomas.py <idioma> [...]   (sin args: todos los que tengan .txt)
"""
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent / "examen-jefe-idiomas"
CUOTA = {"gramatica": 150, "reading": 125, "listening": 100, "writing": 75, "speaking": 50}
NOMBRE = {"gramatica": "Vocabulario y gramática (Use of English)", "reading": "Lectura", "listening": "Comprensión auditiva",
          "writing": "Escritura", "speaking": "Expresión oral (situaciones)"}
INFO = {  # idioma: (nombre, id logro, examen de referencia)
    "ingles": ("Inglés", 41, "Cambridge C1 Advanced"), "aleman": ("Alemán", 42, "Goethe-Zertifikat C1"),
    "japones": ("Japonés", 43, "JLPT N1"), "frances": ("Francés", 44, "DALF C1"), "chino": ("Chino", 45, "HSK 5-6"),
    "italiano": ("Italiano", 46, "CELI 4 / CILS C1"), "coreano": ("Coreano", 47, "TOPIK II"),
    "portugues-br": ("Portugués (Brasil)", 48, "Celpe-Bras"), "portugues-pt": ("Portugués (Portugal)", 49, "CAPLE C1"),
    "esperanto": ("Esperanto", 50, "KER C1"), "arabe": ("Árabe", 217, "nivel C1 (árabe estándar moderno)"),
    "ruso": ("Ruso", 218, "ТРКИ-3"), "hindi": ("Hindi", 219, "nivel C1")}
NIVEL = {"japones": "N1", "chino": "HSK5-6", "coreano": "TOPIK-II", "ruso": "TRKI-3"}


def parse(path):
    sec, pas, items = None, None, []
    for raw in path.read_text(encoding="utf-8").split("\n"):
        l = raw.strip()
        if not l or l.startswith("//"):
            continue
        if l.startswith("# "):
            sec, pas = l[2:].strip(), None
        elif l.startswith("@@"):
            pas = None
        elif l.startswith("@R ") or l.startswith("@L "):
            pas = ("Texto" if l[1] == "R" else "Audio", l[3:].strip())
        elif l.startswith("Q | "):
            f = [x.strip() for x in l[4:].split(" | ")]
            assert len(f) == 6, f"campos={len(f)}: {l[:80]}"
            q, ok, d, ex = f[0], f[1], f[2:5], f[5]
            en = f"{pas[0]}: «{pas[1]}» {q}" if pas else q
            items.append((sec, en, ok, d, ex))
        else:
            raise SystemExit(f"línea no reconocida: {l[:80]}")
    return items


def bloque(idioma, sec, i, en, ok, d, ex):
    en, ok, ex, d = (en.replace('"', "'"), ok.replace('"', "'"), ex.replace('"', "'"), [x.replace('"', "'") for x in d])
    ops = list(d)
    ops.insert(i % 4, ok)
    assert len(set(ops)) == 4 and ok in ops, en[:70]
    return f'''```
metadata:
  materia: "idiomas-extranjeros/{idioma}"
  tema: "examen-jefe"
  nivel: "{NIVEL.get(idioma, 'C1')}"
  tags: ["{sec}", "examen-jefe"]
pasos:
  - "Leer con atención y elegir la opción correcta."
enunciado: "{en}"
opciones_explicitas:
''' + "\n".join(f'  - "{o}"' for o in ops) + f'''
respuesta: "{ok}"
tipo: mc
explicacion: "{ex}"
```
'''


def build(idioma):
    items = parse(HERE / "examen_jefe_idiomas" / f"{idioma}.txt")
    por = {s: [x for x in items if x[0] == s] for s in CUOTA}
    for s, n in CUOTA.items():
        assert len(por[s]) == n, f"{idioma} {s}: {len(por[s])} != {n}"
    ens = [(x[1], x[2]) for x in items]
    assert len(set(ens)) == len(ens), "enunciados duplicados"
    nombre, lid, ref = INFO[idioma]
    out = [f"# Examen jefe — Certificación de {nombre}\n",
           f"> Logro #{lid} (certificación C1; formato de referencia: {ref}). Pool de **500 preguntas** en 5 secciones; "
           f"cada intento sortea 100 respetando la proporción 30 gramática / 25 lectura / 20 audición / 15 escritura / 10 oral. "
           f"Sin teoría asociada: sólo cuestionario. Escrito directamente para el examen (no reutiliza los cuestionarios por tema).\n", "---\n"]
    for s, n in CUOTA.items():
        out.append(f"## Sección: {s} — {NOMBRE[s]} ({n} preguntas)\n")
        for k, (_, en, ok, d, ex) in enumerate(por[s]):
            out.append(bloque(idioma, s, k, en, ok, d, ex))
    (OUT / f"{idioma}.md").write_text("\n".join(out), encoding="utf-8")
    print(f"OK {idioma}: {len(items)} preguntas")


if __name__ == "__main__":
    for i in sys.argv[1:] or sorted(p.stem for p in (HERE / "examen_jefe_idiomas").glob("*.txt")):
        build(i)
