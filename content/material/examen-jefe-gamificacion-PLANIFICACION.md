# Examen "jefe" + gamificación por materia: planificación

> Documento de planificación, NO generar nada hasta confirmar. Extiende
> a la rama base (Tronco 1-21) el mismo patrón ya diseñado y confirmado
> para idiomas (`idiomas-extranjeros-PLANIFICACION.md`, sección
> "Especificación confirmada" + "Modo 'prueba jefe' opcional"): pool
> grande de preguntas por área, sorteo por intento, tiers de logro por
> nota, monedas de recompensa usando la economía que ya existe en el
> schema (`SaldoUsuario`/`EconomiaSaldo`, `LedgerMovimiento`/
> `EconomiaTransaccion`, `EconomiaRecompensa`).
>
> **Alcance confirmado (2026-08-09)**: Tronco 1-21, **menos Tronco 18**
> (idiomas — ya tiene su propio sistema, no se duplica acá) y **menos
> Oficios y trabajo técnico** (sección aparte de troncos.md, línea
> 2932 — no aplica: el sistema no certifica profesionalmente, un tier
> "Platino" ahí sonaría a habilitación real, ver
> `oficios-orientacion-vocacional-PLANIFICACION.md`).

## Mecánica (idéntica a la de idiomas)

- **Pool grande por área**, dividido por sección/sub-tema real del área
  (no preguntas sueltas sin estructura).
- **Cada intento sortea un subconjunto** del pool, respetando la
  proporción por sección — no las 500 de una sola vez.
- **Opcional, modo "prueba jefe"**: no reemplaza el cuestionario normal
  por tema, es una instancia aparte que el alumno elige rendir.
- **Tiers por nota**: Común 60-79%, Dorado 80-94%, Platino 95-100%.
- **Monedas = respuestas correctas × multiplicador de tier** (Común
  ×1.0, Dorado ×1.2, Platino ×1.5) — mismo cálculo que idiomas.
- Se conecta a la economía existente vía `EconomiaRecompensa`
  (`referenciaId` = el examen), sin infraestructura nueva.

## Diferencia importante con idiomas: el tamaño del pool NO es fijo en 500

Los 10 idiomas comparten profundidad pareja (todos a C1), así que 500
por idioma tenía sentido parejo. Las áreas de Tronco 1-21 NO tienen el
mismo volumen de contenido entre sí — Matemática (Tronco 1-4) es
enorme, Dibujo Técnico (Tronco 14, 5 temas) es chico. Forzar 500 en
todas infla artificialmente las chicas o deja cortas las grandes.

**Regla actualizada (2026-08-09)**: en vez de una sola pool grande por
materia, se agrupan los temas en **clusters tipo "unidad escolar" de
5-15 temas cada uno** — más parecido a un parcial por capítulo que a un
final acumulativo. Cada cluster es su propio "examen jefe" chico (pool
propio, sorteo propio, logro propio), no una sola pool gigante por
materia.

## Cálculo real (regenerado 2026-08-14 contra `examen-jefe-clusters.md`)

> La tabla original (2026-08-09) quedó vieja: +190 temas nuevos entre
> las materias de acá abajo desde entonces (Historia profunda, Lengua,
> Matemática y Economía son las que más crecieron), más `historia`
> (Tronco 6, Argentina) que en 2026-08-09 todavía no tenía contenido y
> por eso no entraba en el cálculo aunque siempre estuvo en el alcance
> textual (Tronco 1-21). Se agrega acá.

| Materia | Temas | Clusters (5-15 c/u) | Temas/cluster prom. | % del mapa |
|---|---:|---:|---:|---:|
| Matemática | 161 | 32 | 5.0 | 19.3% |
| Lengua | 75 | 15 | 5.0 | 9.0% |
| Historia profunda | 109 | 22 | 5.0 | 13.0% |
| Historia | 28 | 6 | 4.7 | 3.3% |
| Física | 77 | 15 | 5.1 | 9.2% |
| Economía | 77 | 15 | 5.1 | 9.2% |
| Geografía | 40 | 8 | 5.0 | 4.8% |
| Informática | 59 | 12 | 4.9 | 7.1% |
| Química | 42 | 8 | 5.3 | 5.0% |
| Biología | 37 | 7 | 5.3 | 4.4% |
| Cívica | 31 | 6 | 5.2 | 3.7% |
| Derecho | 21 | 4 | 5.3 | 2.5% |
| Arte | 15 | 3 | 5.0 | 1.8% |
| Investigación | 12 | 2 | 6.0 | 1.4% |
| Ingeniería | 11 | 2 | 5.5 | 1.3% |
| Psicología | 10 | 2 | 5.0 | 1.2% |
| Ciencia de Materiales | 6 | 1 | 6.0 | 0.7% |
| Dibujo Técnico | 5 | 1 | 5.0 | 0.6% |
| Comunicación | 5 | 1 | 5.0 | 0.6% |
| Electrónica | 5 | 1 | 5.0 | 0.6% |
| Automatización | 5 | 1 | 5.0 | 0.6% |
| UX/Diseño | 5 | 1 | 5.0 | 0.6% |
| **Total** | **836** | **165** | | **100%** |

## Materias con contenido real pero fuera de esta tabla — pendiente de decisión

No estaban en el alcance original (Tronco 1-21) y no tienen cluster
armado todavía: **Antropología** (5), **Ciudadanía Digital** (7),
**Vida Cotidiana** (28), **Sociología** (3), **Aprendizaje** (2),
**Resolución de Problemas** (15), **Salud** (1), **ESI** (8),
**Ed. Física** (16). Antes de generar hay que decidir cuáles entran —
ESI en particular podría excluirse a propósito, mismo criterio que
Oficios (no certifica nada, un tier "Platino" en un tema de salud
sexual suena raro).

Nota (2026-08-09, corrección): Turismo (4 temas) **NO** se fusiona con
Comunicación — Javier lo movió a Oficios (`Guía Turístico`, ver
`oficios-orientacion-vocacional-PLANIFICACION.md`), porque es más una
práctica que contenido académico de examen. Comunicación queda sola
(5 temas, 1 cluster). Los números de "temas/cluster" son promedio de un
primer cálculo automático; al diseñar cada materia en detalle, los
clusters reales se ajustan a los cortes naturales del tronco (ej. por
sub-tronco 8.a/8.b/8.c en Historia profunda), no a una división
matemática ciega.

**115 clusters = 115 exámenes-jefe chicos** en total, cada uno con su
propio pool/sorteo/tiers/logro — no 21 pools gigantes.

## Áreas candidatas (a partir de troncos.md, agrupadas por materia real)

| Tronco(s) | Materia(s) | Nota |
|---|---|---|
| 1-4 | Matemática (Numérico, Algebraico, Geometría, Combinatoria/datos) | la más grande, probable pool más grande o dividida en 2 (Aritmética/Álgebra vs. Geometría/Datos) |
| 5 | Lengua | |
| 6 | Historia/Geografía/Sociedad (Tiempo, espacio y sociedad) | posible fusión con Tronco 8 |
| 7 | Química + Biología (Materia, energía y vida) | probable 2 pools separados (son 2 materias distintas hoy en `material/`) |
| 8 | Historia profunda (Big Bang a hoy) | evaluar si funde con Tronco 6 o queda aparte |
| 9 | Física | |
| 10 | Informática | |
| 11 | Ingeniería | |
| 12 | Investigación científica | |
| 13 | Administración y Derecho | probable 2 pools (son disciplinas distintas) |
| 14 | Dibujo Técnico y Arquitectura | pool chico, tronco corto |
| 15 | Psicología | |
| 16 | Comunicación Social, Turismo y Emprendedorismo | probable varios pools, son 3 disciplinas juntas en un tronco |
| 17 | Electrónica | comparte nodos con Oficios (Electricista/Electromecánico) — el pool acá es de la materia académica, no del oficio |
| 19 | Ciencia de Materiales | |
| 20 | Sistemas de Control y Automatización | idem 17, nodos compartidos con Oficios pero pool separado |
| 21 | UX y Diseño de Interfaces | |

## Decisiones confirmadas (2026-08-09)

1. **Agrupación**: respeta la materia real, se agrupan sólo cuando hace
   falta para armar la pool (mismo criterio ya reflejado en la tabla de
   arriba — fusionar Tronco 6+8 si corresponde, separar Química/
   Biología del Tronco 7, separar Administración/Derecho del Tronco 13).
2. **Tamaño de pool**: proporcional a la **importancia del tema y el
   porcentaje real que ocupa** esa materia dentro del total del mapa —
   no un número fijo por área. **Techo: ninguna pool puede superar a
   las demás por más de un 10%** (evita que Matemática, por ser la más
   grande, desbalancee tanto que el resto quede sin peso relativo).
3. **Orden de trabajo**: indistinto — hay que hacer las preguntas de
   todas igual, no hay ganancia en arrancar por una en particular.

## Nota de infraestructura (Javier, 2026-08-09)

qwen lleva 4 días corriendo sin parar en la GPU del servidor — después
de que termine el lote de los 9 idiomas restantes, se le da un
descanso antes de arrancar cualquier generación nueva (idiomas
faltantes, oficios, o esto). Este doc puede seguir avanzando en
planificación mientras tanto, sin tocar el pipeline de generación.
