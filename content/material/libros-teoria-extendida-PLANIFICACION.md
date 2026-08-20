# Libros / Teoría extendida: planificación

> Documento de planificación, NO generar nada hasta confirmar. Origen:
> conversación 2026-08-12 — Javier quiere una capa de teoría larga
> (formato `Libro`, no reemplaza `teoria.md` corto de cada tema) para
> las materias narrativas/conceptuales, aprovechando que Qwen3.6-35B-A3B
> puede escribir mucho más por llamada que los 400-700 palabras de la
> teoría de presentación actual. **No reemplaza nada** — los Módulos ya
> soportan puntos de teoría ilimitados, así que esto es una capa
> adicional, no una reescritura.

## Confirmado con Javier (2026-08-12)

1. **No reemplaza** `teoria.md` — capa adicional. El Módulo/Libro con
   teoría extendida convive con la teoría corta + cuestionario que ya
   existen por tema.
2. **No rompe el grafo de prerrequisitos**: verificado en el código
   (`api/src/lib/module-dependencies.ts` + `api/src/routes/progreso.ts`)
   — el desbloqueo depende del **ID del módulo**, no de si tiene
   cuestionario. La finalización (`ProgresoModulo.status = "completado"`)
   tiene un camino vía cuestionario (`quiz-attempts.ts`) y otro genérico
   (`POST/PATCH /api/progreso`) que no depende de tener quiz — un Libro
   sin cuestionario, prerrequisito de un tema con cuestionario, funciona
   exactamente igual que cualquier otro par de módulos hoy. No hay nada
   que construir para esto.
3. **Orden de ejecución**: se arranca cuando termine la corrida de
   materias nuevas (`gen_materias_nuevas.py`, 105 temas con Qwen3.6) +
   la revisión de calidad — no antes. Alternativa a esa misma fecha:
   arrancar con examen-jefe en su lugar, se decide esa noche.
4. **Requiere reiniciar LM Studio** con el context límite subido (hoy
   32768) para aprovechar la capacidad real de escritura larga del
   modelo — esto corta la corrida en curso (resumible, no se pierde
   nada) y se hace recién cuando se arranca esta fase, no antes.
5. **Mecanismo de agrupación = el mismo que examen-jefe** (Javier,
   2026-08-12: "tendría que hacer lo mismo que las evaluaciones jefe").
   Se reusan los clusters ya armados en `examen-jefe-clusters.md` —
   mismo agrupamiento de temas por materia, pero acá cada cluster se
   convierte en un **capítulo de Libro** (narrativa larga y conectada)
   en vez de un pool de preguntas. No hay que rediseñar el agrupamiento
   desde cero.

## Alcance: qué materias entran (analizado 2026-08-12, números actualizados 2026-08-14)

Criterio (mismo que usó Javier para excluir Matemática): **procedural/
fórmula** (la "teoría" es la fórmula + cómo aplicarla, el volumen real
está en la práctica) vs. **conceptual/narrativo** (cadenas causales,
contexto, debate — se beneficia de una explicación larga y conectada).

> Los conteos de temas/clusters se regeneraron 2026-08-14 contra
> `examen-jefe-clusters.md` (la versión que este doc citaba originalmente
> era de 2026-08-11, quedó vieja por +190 temas nuevos). También se
> agrega `Historia` (Tronco 6, Argentina) que en el análisis original no
> tenía contenido todavía.

### Adentro — narrativas, entran completas

| Materia | Temas | Clusters (`examen-jefe-clusters.md`) | Libro = clusters como capítulos |
|---|---:|---:|---|
| Historia profunda | 109 | 22 | 22 capítulos |
| Historia | 28 | 6 | 6 capítulos |
| Economía | 77 | 15 | 15 capítulos |
| Lengua | 75 | 15 | 15 capítulos |
| Geografía | 40 | 8 | 8 capítulos |
| Cívica | 31 | 6 | 6 capítulos |
| Derecho | 21 | 4 | 4 capítulos |
| Arte | 15 | 3 | 3 capítulos |
| Psicología | 10 | 2 | 2 capítulos |
| **Total adentro completas** | **406** | **81** | **81 capítulos** |

### Adentro parcial — narrativa mezclada con procedural, curar por tema

| Materia | Temas totales | Clusters | Qué entra | Qué queda exento |
|---|---:|---:|---|---|
| Biología | 37 | 7 | Evolución, ecosistemas, genética conceptual (mecanismos, no cálculo), biotecnología/bioética | Punnett/cruce dihíbrido (cálculo), enzimas cinética (fórmula) |
| Informática | 59 | 12 | Ética de IA, historia de la computación, redes/protocolos (contexto), IA de reglas a aprendizaje | Estructuras de control, sintaxis, algoritmos de ordenamiento (procedural) |

Curación real: al armar cada capítulo de Biología/Informática, filtrar
los temas de `examen-jefe-clusters.md` que sean genuinamente narrativos
antes de agruparlos — no meter un cluster entero si mezcla ambos tipos.
Esto es trabajo manual chico (revisar los clusters reales, no todos los
temas sueltos), se hace al arrancar esta fase, no ahora.

### Afuera — procedural/fórmula, quedan sólo con teoría corta

Matemática (161 temas), Química (42, mayoría), Física (77, mayoría),
Electrónica (5), Ciencia de Materiales (6), Automatización (5), Dibujo
Técnico (5), Ingeniería (11, 2 clusters, insuficiente volumen),
Investigación (12, 2 clusters), Comunicación (5, 1 cluster), UX/Diseño
(5, 1 cluster).

### Sin decidir — materias nuevas fuera del alcance de `examen-jefe-clusters.md`

Antropología (5), Ciudadanía Digital (7), Vida Cotidiana (28),
Sociología (3), Aprendizaje (2), Resolución de Problemas (15), Salud
(1), ESI (8), Ed. Física (16) — mismo pendiente que en
`examen-jefe-gamificacion-PLANIFICACION.md`: no tienen cluster armado
todavía porque no estaban en el alcance original. Al menos Vida
Cotidiana y Ed. Física son claramente narrativas/conceptuales
(candidatas naturales a "adentro" si se confirma que entran al mapa de
examen-jefe); ESI probablemente afuera del sistema de logros por el
mismo motivo que Oficios (no es apto para gamificar con tiers).

## Mecánica de generación (a definir al arrancar la fase)

- **1 capítulo de Libro = 1 cluster** de `examen-jefe-clusters.md` (los
  mismos 5-15 temas ya agrupados, reusados tal cual).
- El prompt por capítulo no es "concatenar N teorías cortas" — es
  pedirle al modelo una narrativa larga y conectada que cubra los N
  temas del cluster como una unidad coherente (con la ventaja de
  contexto grande de Qwen3.6, puede razonar sobre todo el cluster de
  una sola pasada en vez de fragmentarlo).
- Formato de salida: Markdown largo → se carga al campo `json` del
  modelo `Libro` (`api/prisma/schema.prisma:1247`), mismo patrón que
  usa el editor de libros existente (ver [[idea-editor-bloques-en-libros]]
  en memoria — nota pendiente: `bookEditor/` no integra el editor de
  bloques interactivo que sí usan Módulo/Diapositivas, revisar si eso
  afecta cómo se carga contenido largo generado).
- **Prerrequisito del Libro completo** = unión de prerrequisitos reales
  de los temas de todos sus capítulos (ya están en `troncos.md`, no hay
  que inventar nada nuevo).
- Timeout/contexto: reiniciar LM Studio con context bien por encima de
  32768 antes de arrancar (Javier decide el valor exacto según VRAM
  disponible al momento).

## Pendiente de decidir antes de generar

- ¿Un `Libro` por materia (8-9 libros grandes, con capítulos = clusters)
  o un `Libro` por cluster (46+ libros chicos)? Afecta cómo se navega
  en la UI — pendiente de decisión de producto, no de generación.
- Curación fina de Biología/Informática (ver arriba).
- Nombre/branding de cada libro (¿"Historia profunda — teoría extendida"
  o un título propio por capítulo temático?).
