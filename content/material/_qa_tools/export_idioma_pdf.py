#!/usr/bin/env python3
"""Genera un PDF de revisión externa de UN idioma de idiomas-extranjeros/:
portada, dependencias (orden documentado en idiomas-extranjeros-PLANIFICACION.md),
módulos teóricos (teoria.md) y ejercicios (cuestionario.md, con clave de respuestas).

Requiere WeasyPrint (+ markdown, pyyaml) y una fuente con escritura árabe
(Noto Naskh Arabic). Instalación sugerida, fuera del repo:
    python3 -m venv /tmp/wp && /tmp/wp/bin/pip install weasyprint markdown pyyaml

Uso:
    /tmp/wp/bin/python export_idioma_pdf.py arabe "Árabe estándar moderno" salida.pdf
(el 2.º argumento es el título de la sección "## ..." del plan).
No hay un grafo de dependencias tema a tema para los idiomas: el plan documenta
el orden por bloques y por niveles, y es eso lo que se vuelca en el PDF.
"""
import html
import re
import sys
from pathlib import Path

import markdown
import yaml
from weasyprint import HTML

sys.path.insert(0, str(Path(__file__).resolve().parent))
from block_extract import extract_blocks  # noqa: E402

MAT = Path(__file__).resolve().parents[1]
ARAB = "؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿"
PUNT = r"[.!?:\u061b\u060c\u061f]*"
ARAB_RUN = re.compile(rf"[{ARAB}]+{PUNT}(?:[ \u00a0]+[{ARAB}]+{PUNT})*")


def _span(m):
    s = m.group(0)
    cola = ""
    if len(s.split()) < 3:  # palabra o frase corta: el punto final es del texto en español, queda afuera
        mm = re.search(r"[.!?:]+$", s)
        if mm:
            s, cola = s[:mm.start()], mm.group(0)
    return f'<span class="ar" lang="ar" dir="rtl">{s}</span>{cola}'


def wrap_arabic(h):
    parts = re.split(r"(<[^>]+>)", h)
    for i, p in enumerate(parts):
        if not p.startswith("<"):
            parts[i] = ARAB_RUN.sub(_span, p)
    return "".join(parts)


def clean(s):
    return s.replace("❌", "✗").replace("✅", "✓")


def md(text):
    h = markdown.markdown(clean(text), extensions=["tables", "fenced_code", "sane_lists"])
    h = re.sub(r"<(/?)h3>", r"<\1h5>", h)
    h = re.sub(r"<(/?)h2>", r"<\1h4>", h)
    h = re.sub(r"<(/?)h1>", r"<\1h3>", h)
    return wrap_arabic(h)


def esc(s):
    return wrap_arabic(html.escape(clean(str(s))))


def leer_plan(titulo):
    t = (MAT / "idiomas-extranjeros-PLANIFICACION.md").read_text(encoding="utf-8")
    m = re.search(rf"^## [^\n]*{re.escape(titulo)}[^\n]*\n(.*?)(?=^## |\Z)", t, re.S | re.M)
    if not m:
        sys.exit(f"no encontré la sección '{titulo}' en el plan")
    cuerpo = m.group(1)
    nota = " ".join(l[2:] for l in cuerpo.splitlines() if l.startswith("> "))
    grupos = []
    for g in re.finditer(r"^### ([^\n]+)\n(.*?)(?=^### |^\*\*Total|^---|\Z)", cuerpo, re.S | re.M):
        slugs = re.findall(r"`([a-z0-9\-]+)`", g.group(2))
        if slugs:
            grupos.append((g.group(1).strip(), slugs))
    return nota, grupos


def tema_info(carpeta, slug):
    d = MAT / "idiomas-extranjeros" / carpeta / slug
    teoria = (d / "teoria.md").read_text(encoding="utf-8")
    lineas = teoria.splitlines()
    while lineas and (lineas[0].startswith("> ") or not lineas[0].strip()):
        lineas.pop(0)
    teoria = "\n".join(lineas)
    titulo = re.search(r"^# (.+)$", teoria, re.M).group(1)
    m = re.search(r"\(nivel ([A-C][12])\)", titulo)
    nivel = m.group(1) if m else ""
    preguntas = []
    for b in extract_blocks((d / "cuestionario.md").read_text(encoding="utf-8")):
        preguntas.append(yaml.safe_load(b))
    return titulo, nivel, teoria, preguntas


def render_pregunta(n, q):
    out = [f'<div class="q"><p class="enun"><b>{n}.</b> {esc(q["enunciado"])}</p>']
    if q.get("tipo") == "mc":
        out.append("<ol class='op' type='a'>")
        for o in q["opciones_explicitas"]:
            ok = str(o) == str(q["respuesta"])
            out.append(f"<li class='{'ok' if ok else ''}'>{esc(o)}{' ✓' if ok else ''}</li>")
        out.append("</ol>")
    else:
        vs = q.get("respuestas_validas") or []
        out.append(f"<p class='resp'>Respuesta(s) válida(s): {' · '.join(esc(v) for v in vs)}</p>")
    if q.get("explicacion"):
        out.append(f"<p class='expl'>{esc(q['explicacion'])}</p>")
    out.append("</div>")
    return "".join(out)


CSS = """
@page { size: A4; margin: 2cm 1.8cm 2cm 1.8cm;
  @bottom-center { content: "Árabe estándar moderno — material para revisión externa · página " counter(page); font: 8pt 'DejaVu Sans'; color:#666 } }
@page portada { margin: 0; @bottom-center { content: none } }
body { font-family: 'DejaVu Sans','Noto Naskh Arabic',sans-serif; font-size: 9.5pt; line-height: 1.45; color:#111 }
.ar { font-family: 'Noto Naskh Arabic','DejaVu Sans',serif; font-size: 1.18em; unicode-bidi: isolate }
h1 { font-size: 20pt; margin: 0 0 6pt } h2 { font-size: 15pt; border-bottom: 1.5pt solid #444; padding-bottom: 3pt; margin-top: 0 }
h3 { font-size: 13pt; margin: 0 0 4pt } h4 { font-size: 11pt; margin: 10pt 0 3pt } h5 { font-size: 10pt; margin: 8pt 0 2pt }
.portada { page: portada; page-break-after: always; padding: 5.5cm 2.5cm 0 2.5cm }
.portada h1 { font-size: 30pt } .portada .ar { font-size: 2em }
.portada .caja { margin-top: 1.2cm; padding: 8pt 12pt; border-left: 4pt solid #b8860b; background:#faf3df; font-size: 9.5pt }
.seccion { page-break-before: always }
.tema { page-break-before: always }
.nivel { display:inline-block; background:#223; color:#fff; border-radius:3pt; padding:1pt 6pt; font-size:8.5pt; margin-left:6pt }
table { border-collapse: collapse; width:100%; margin: 6pt 0 } th,td { border: .6pt solid #999; padding: 3pt 5pt; vertical-align: top; text-align:left }
th { background:#e8e8ee }
code { font-family:'DejaVu Sans Mono',monospace; font-size:.9em; background:#f1f1f1; padding:0 2pt }
.toc a { color:#111; text-decoration:none } .toc li { margin: 1pt 0 } .toc a::after { content: leader('.') target-counter(attr(href), page); }
.toc .blq { font-weight:bold; margin-top:7pt; list-style:none; margin-left:-12pt }
.flujo { display:flex; flex-wrap:wrap; gap:5pt; margin:6pt 0 }
.flujo div { border:1pt solid #223; border-radius:4pt; padding:4pt 7pt; background:#eef; font-size:8.5pt }
.flujo span { align-self:center; font-weight:bold }
.q { margin: 0 0 6pt; page-break-inside: avoid } .enun { margin: 0 0 2pt }
.op { margin: 0 0 2pt 0; padding-left: 18pt } .op li.ok { font-weight:bold; background:#e6f5e6 }
.expl { margin: 0; font-size: 8.3pt; color:#444 } .resp { margin:0 0 2pt; background:#e6f5e6 }
blockquote { margin: 4pt 0; padding-left: 8pt; border-left: 2pt solid #bbb; color:#333 }
"""


def main():
    carpeta, titulo_plan, salida = sys.argv[1:4]
    nota, grupos = leer_plan(titulo_plan)
    en_plan = [s for _, ss in grupos for s in ss]
    en_disco = sorted(p.name for p in (MAT / "idiomas-extranjeros" / carpeta).iterdir() if p.is_dir())
    extra, faltan = sorted(set(en_disco) - set(en_plan)), sorted(set(en_plan) - set(en_disco))
    if extra or faltan:
        print("AVISO plan vs disco -> en disco y no en plan:", extra, "| en plan y no en disco:", faltan)
    datos = {s: tema_info(carpeta, s) for s in en_plan if s in en_disco}
    nq = sum(len(v[3]) for v in datos.values())
    nmc = sum(1 for v in datos.values() for q in v[3] if q.get("tipo") == "mc")

    p = []
    p.append(f"""<section class="portada"><h1>{html.escape(titulo_plan)}</h1>
<p style="font-size:14pt">Material para revisión externa: dependencias, módulos teóricos y ejercicios</p>
<div class="caja"><b>Qué contiene.</b> {len(datos)} temas de la plataforma (carpeta <code>idiomas-extranjeros/{carpeta}</code>),
{nq} ejercicios ({nmc} de opción múltiple y {nq - nmc} de completar) con clave de respuestas.<br><br>
<b>Estado del contenido.</b> Generado con asistencia de IA a partir del currículo del plan; <b>no pasó por revisión de un hablante nativo</b>.
Lo más útil de esta lectura: errores de gramática o vocalización, ejemplos incorrectos o poco naturales, transliteración,
respuestas marcadas como correctas que no lo sean, y opciones ambiguas.<br><br>
<b>Qué NO contiene.</b> El examen de certificación C1 (pool de 500 preguntas) ni el audio.<br><br>
<b>Cómo leerlo.</b> 1) Dependencias · 2) Módulos teóricos · 3) Ejercicios. La respuesta correcta está resaltada con ✓.</div></section>""")

    # índice
    toc = ['<section class="seccion"><h2>Índice</h2><ul class="toc"><li class="blq"><a href="#dep">Dependencias</a></li>']
    for tit, ss in grupos:
        toc.append(f'<li class="blq">{esc(tit)}</li>')
        for s in ss:
            if s in datos:
                toc.append(f'<li>{esc(datos[s][0])}</li><li style="list-style:none;margin-left:10pt;font-size:8.5pt"><a href="#t-{s}">Teoría</a></li><li style="list-style:none;margin-left:10pt;font-size:8.5pt"><a href="#e-{s}">Ejercicios</a></li>')
    toc.append("</ul></section>")
    p.append("".join(toc))

    # dependencias
    p.append('<section class="seccion" id="dep"><h2>1. Dependencias</h2>')
    p.append(md(nota) if nota else "")
    p.append("""<p><b>Aviso:</b> para los idiomas no existe un grafo de prerrequisitos tema a tema (como el de Matemática o
Física). Lo documentado en el plan es el <b>orden por bloques y por niveles</b>; eso es lo que se muestra acá. Las flechas son
la lectura de ese orden, no aristas verificadas una por una.</p>""")
    nombres = [re.sub(r" \(.*?\)", "", tit) for tit, _ in grupos]
    p.append("<div class='flujo'>" + "<span>→</span>".join(f"<div>{esc(n)}</div>" for n in nombres) + "</div>")
    p.append("<table><tr><th>Orden</th><th>Bloque</th><th>Temas (en el orden del plan)</th><th>Presupone</th></tr>")
    for i, (tit, ss) in enumerate(grupos, 1):
        pres = "Es prerrequisito de todo lo demás." if "prerrequisito" in tit.lower() else (
            "Los bloques anteriores en este orden." if "destreza" not in tit.lower() else
            "Cada nivel (A2, B1, B2, C1) presupone la gramática de ese nivel y los anteriores (inferido del orden del plan).")
        lista = "<br>".join(f"{k}. <code>{s}</code>" for k, s in enumerate(ss, 1))
        p.append(f"<tr><td>{i}</td><td>{esc(tit)}</td><td>{lista}</td><td>{pres}</td></tr>")
    p.append("</table></section>")

    # teoría
    p.append('<section class="seccion"><h2>2. Módulos teóricos</h2><p>Un módulo por tema, en el orden de dependencias. '
             'Las líneas con ✓/✗ marcan lo correcto y lo incorrecto en los ejemplos.</p></section>')
    for tit, ss in grupos:
        for s in ss:
            if s not in datos:
                continue
            titulo, nivel, teoria, _ = datos[s]
            p.append(f'<section class="tema" id="t-{s}"><p style="font-size:8pt;color:#666">{esc(tit)} · <code>{s}</code></p>'
                     f'{md(teoria)}</section>')
    # ejercicios
    p.append('<section class="seccion"><h2>3. Ejercicios</h2><p>Opción múltiple (respuesta resaltada ✓) y completar '
             '(respuestas válidas). Cada ejercicio trae su explicación.</p></section>')
    for tit, ss in grupos:
        for s in ss:
            if s not in datos:
                continue
            titulo, nivel, _, qs = datos[s]
            p.append(f'<section class="tema" id="e-{s}"><h3>{esc(titulo)} <span class="nivel">{len(qs)} ejercicios</span></h3>')
            p.extend(render_pregunta(n, q) for n, q in enumerate(qs, 1))
            p.append("</section>")

    doc = f"<!doctype html><html lang='es'><head><meta charset='utf-8'><title>{html.escape(titulo_plan)}</title><style>{CSS}</style></head><body>{''.join(p)}</body></html>"
    HTML(string=doc).write_pdf(salida)
    print("OK", salida, "| temas:", len(datos), "| ejercicios:", nq)


if __name__ == "__main__":
    main()
