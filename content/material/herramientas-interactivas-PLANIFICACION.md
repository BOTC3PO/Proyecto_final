# Herramientas interactivas: catálogo y planificación

> Documento de planificación, NO tocar código todavía. Origen: pedido
> de Javier 2026-08-12 de mapear qué herramientas interactivas existen
> en el proyecto (además de teoría/cuestionario) y qué módulos las usan,
> en paralelo al plan de [[libros-teoria-extendida-PLANIFICACION]].

## §1. Herramientas VIVAS hoy (`VisualizerRenderer`, 6 tipos)

`apps/web/src/components/modulos/VisualizerRenderer.tsx` (224 líneas),
tipo `VisualSpec` en `apps/web/src/generadoresV2/core/types.ts`. Soporta
6 `kind`:

| kind | Qué renderiza |
|---|---|
| `static-image` | Imagen simple (src/alt) |
| `latex` | Fórmula matemática vía KaTeX |
| `line-chart` | Gráfico de línea (recharts) |
| `vector-diagram` | Diagrama vectorial |
| `timeline` | Línea de tiempo |
| `circuit` | Circuito eléctrico simple (`{elements: {id,type,value?,unit?}[]}`) |

**Quién lo usa** (6 archivos, todos en `apps/web/src/components/modulos/`
o `pages/quizzes/`):
- `QuizAttempt.tsx` — el alumno rindiendo un cuestionario, si una
  pregunta trae `VisualSpec` adjunto.
- `QuizEditorManual.tsx` — Tiza, al armar preguntas con visual.
- `SlidePresenter.tsx` — Diapositivas.
- `TheorySlideEditor.tsx` — editor de teoría en bloques (el que
  `bookEditor/` NO integra, ver nota en memoria
  [[idea-editor-bloques-en-libros]] — esto es relevante directo para el
  plan de Libros: si el editor de bloques no llega a `Libro`, la teoría
  extendida generada tampoco puede traer visuales embebidos hasta que
  se resuelva).
- `tools/ToolPreview.tsx` — vista previa reusable, normaliza el spec
  antes de pasarlo al renderer (único punto de entrada para preview).
- `VisualizerRenderer.tsx` mismo (tests).

## §2. Herramientas ARCHIVADAS (`archive/visualizadores/`, 54 más)

**Estado real, confirmado en código** (no sólo memoria): 17 carpetas
por materia, 56 archivos `.tsx`, ~15.575 líneas. Detalle por carpeta:

| Carpeta | Archivos | Materia/uso probable |
|---|---:|---|
| matematicas | 10 | Matemática |
| fisica | 8 | Física |
| graficos | 6 | Transversal (gráficos genéricos) |
| quimica | 5 | Química |
| biologia | 4 | Biología |
| estadistica | 4 | Estadística (Economía/Ciencia de Datos) |
| informatica | 4 | Informática |
| ambiente | 3 | Ambiental/Geografía |
| arte | 3 | Arte |
| civica | 3 | Cívica |
| cocina | 3 | Cocina/Gastronomía (oficio `OF19`) |
| filosofia | 3 | Filosofía |
| musica | 3 | Música |
| naturales | 3 | Ciencias Naturales |
| politica | 3 | Cívica/Historia |
| social | 3 | Ciencias Sociales |
| vida | 3 | Vida Cotidiana |

**Por qué siguen archivadas** (`PLAN-N-repatriacion-archive-capacidades-varadas.md`
§1, confirmado vigente — no se implementó desde 2026-07-07): el archive
tiene su **propio `VisualSpec`** (`archive/visualizadores/types.ts`, 57
`kind` distintos) — un sistema de tipos completamente separado del
`VisualSpec` vivo (6 `kind`). Colisión real de nombres: `"circuit"` y
`"timeline"` existen en ambos lados con forma **incompatible**
(el circuit del archive es un grafo completo con mediciones; el vivo es
un circuito simple en serie). Fusionar los dos tipos rompe por el
discriminante `kind` duplicado sin antes decidir la estrategia de
reconciliación (PLAN-N sugiere namespacing por materia: `physics-circuit`
en vez de `circuit`).

**Hallazgo nuevo (2026-08-12, no estaba en PLAN-N, ya verificado)**:
`ToolPreview.tsx` importa `normalizeSpec`/`validateSpec` de
`archive/visualizadores/`, pero revisado el archivo real
(`normalizeSpec.ts`, 48 líneas) **sólo enriquece 2 de los 57 `kind`**
del archive (`stat-distribution`, `stat-regression` — calcula la curva
antes de graficar). No es una repatriación general, es una función
puntual de estadística. No cambia el esfuerzo estimado en PLAN-N §1 —
sigue siendo trabajo pendiente completo para las demás 55.

## §3. Cruce con el plan de Libros (qué herramienta le sirve a qué materia)

Para las materias que SÍ entran en teoría extendida
([[libros-teoria-extendida-PLANIFICACION]]):

| Materia (Libro) | Herramienta archivada que le pega bien | Vive hoy |
|---|---|---|
| Historia profunda | `politica/`, `social/` (líneas de tiempo, mapas de proceso) | No — archivada |
| Geografía | `ambiente/` (mapas, biomas) | No — archivada |
| Cívica | `civica/`, `politica/` | No — archivada |
| Economía | `estadistica/` (gráficos de series, distribución) | No — archivada |
| Derecho | ninguna específica archivada — usaría `timeline` vivo para líneas de tiempo legales | Sí (parcial) |
| Psicología | ninguna específica — `social/` podría servir con adaptación | No — archivada |
| Arte | `arte/`, `musica/` | No — archivada |
| Biología (parcial) | `biologia/`, `naturales/` | No — archivada |
| Informática (parcial) | `informatica/` | No — archivada |

**Conclusión**: la mayoría de las materias del plan de Libros se
beneficiarían de herramientas que **hoy están archivadas**, no de las
6 vivas. Repatriar aunque sea las categorías relevantes (`politica`,
`social`, `civica`, `estadistica`, `arte`, `biologia`) sería un
complemento natural de la fase de Libros — pero **son dos iniciativas
independientes**, no bloquea una a la otra: el Libro se puede generar y
publicar en texto plano/Markdown sin visuales, y sumarles herramientas
después no rompe nada (mismo patrón "capa adicional" que ya se usa acá).

## Pendiente de decidir

- ¿Vale la pena, en paralelo a Libros, resolver primero el hallazgo
  del §2 (confirmar si `normalizeSpec` ya repatría algo) antes de
  estimar cuánto cuesta repatriar las 6 categorías relevantes?
- Si se repatría, el orden sugerido por PLAN-N sigue siendo válido:
  empezar por un visualizador sin colisión de `kind` (ninguna de las 6
  categorías de la tabla del §3 tiene colisión con `circuit`/`timeline`
  salvo si alguna de `politica`/`social` define su propio `timeline` —
  hay que revisarlo antes de tocar código).
- No se tocó código en esta sesión — sólo catálogo y cruce con Libros.
