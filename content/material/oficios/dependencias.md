# Oficios — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva (2026-08-13, decisión de Javier): mismo patrón
`teoria.md`/`cuestionario.md` que el resto de las materias, no el
formato Ruta A/B de `Cocina/Gastronomía` (ver nota en
`../PROCEDIMIENTO.md`). Cada oficio (`OF1`-`OF16`, `OF20`-`OF27` de
`troncos.md` — `OF17`/`OF18` son sub-ramas de Agricultor `OF12`, no
oficios propios; `OF19` Cocina/Gastronomía usa el formato Ruta A/B
aparte) es una subcarpeta; dentro, un tema por **sección numerada**
del diseño en `../oficios-orientacion-vocacional-PLANIFICACION.md` (no
un tema por cada sub-ítem — las secciones "Materiales"/"Herramientas"/
etc. se tratan como una sola lección cohesiva, mismo criterio de "dos
caras de la misma cosa" del Paso 2 de `../PROCEDIMIENTO.md`, para no
explotar en 150+ carpetas un contenido que por diseño es más liviano
que las materias académicas — esto reemplaza la decisión #5, más
atómica, de la propia `PLANIFICACION.md`, 2026-08-11).

**Confirmado 2026-09-15 (decisión de Javier)**: dentro de cada oficio,
las lecciones son **informativas** (sólo `teoria.md`) — la evaluación
(`cuestionario.md`) se concentra en la última sección, típicamente
`diagnostico-<oficio>-por-casos/`. Algunos de los oficios `OF20`-`OF27`
generados antes de esta decisión tienen `cuestionario.md` en más de una
sección (inconsistencia histórica, no se corrigió retroactivamente);
los oficios `OF1`-`OF16` que se generen de acá en adelante siguen el
criterio nuevo: un solo `cuestionario.md` por oficio, al cierre.

El "Nodo MAPA" de cada fila es `OFxx.slug-de-la-seccion` (no hay ID de
mermaid por sub-sección, sólo el `OFxx` del oficio entero en
`troncos.md`). `teoria.md` generado con qwen/qwen3.6-35b-a3b, "revisión
pendiente" en el header de cada uno.

## Electricista (`OF1`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `electricista/fundamentos-electricidad/` | `../fisica/ley-de-ohm/` | Sección 1. Magnitudes básicas (carga, corriente, tensión, resistencia), Ley de Ohm, CC vs. CA, serie/paralelo. |
| `electricista/seguridad-electricista/` | `fundamentos-electricidad/` | Sección 2. |
| `electricista/herramientas-electricista/` | `seguridad-electricista/` | Sección 3. |
| `electricista/materiales-electricista/` | `herramientas-electricista/` | Sección 4. |
| `electricista/calculo-electrico/` | `materiales-electricista/` | Sección 5. |
| `electricista/lectura-de-planos-electricos/` | `calculo-electrico/` | Sección 6. |
| `electricista/tecnicas-electricista/` | `lectura-de-planos-electricos/` | Sección 7. |
| `electricista/diagnostico-electricidad-por-casos/` | `tecnicas-electricista/` | Sección 8, cierre — única sección con `cuestionario.md` (evaluación concentrada al final, decisión de Javier 2026-09-15; el resto son lecciones informativas, sólo `teoria.md`). |

## Plomero (`OF2`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `plomero/fundamentos-plomeria/` | `../fisica/caudal/`, `../matematica/volumen-y-capacidad/` | Sección 1. Presión, caudal, volumen y capacidad, unidades. |
| `plomero/seguridad-plomeria/` | `fundamentos-plomeria/` | Sección 2. |
| `plomero/herramientas-plomeria/` | `seguridad-plomeria/` | Sección 3. |
| `plomero/materiales-plomeria/` | `herramientas-plomeria/` | Sección 4. |
| `plomero/instalaciones-plomeria/` | `materiales-plomeria/` | Sección 5. Agua fría/caliente, desagües, ventilación, pendientes, artefactos + normativa y frontera con gasista (categoría 8 del diseño original, plegada acá). |
| `plomero/calculo-plomeria/` | `instalaciones-plomeria/` | Sección 6. |
| `plomero/diagnostico-plomeria-por-casos/` | `calculo-plomeria/` | Sección 7, cierre — única sección con `cuestionario.md`. |

## Albañil / Constructor (`OF3`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `albanil-constructor/fundamentos-albanileria/` | `../geografia/area-de-poligonos-regulares-y-compuestas/`, `../matematica/volumen-y-capacidad/` | Sección 1. Área de polígonos, volumen y capacidad, escalas de plano, replanteo en terreno. |
| `albanil-constructor/seguridad-albanileria/` | `fundamentos-albanileria/` | Sección 2. |
| `albanil-constructor/herramientas-albanileria/` | `seguridad-albanileria/` | Sección 3. |
| `albanil-constructor/materiales-albanileria/` | `herramientas-albanileria/` | Sección 4. |
| `albanil-constructor/tecnicas-albanileria/` | `materiales-albanileria/` | Sección 5. Cimientos, mampostería, revoques, estructura, cubiertas, terminaciones, aislación térmica/hidrófuga, mampostería de bloques de hormigón + normativa (categoría 9 del diseño original, plegada acá, defaulteada a Argentina). |
| `albanil-constructor/calculo-albanileria/` | `tecnicas-albanileria/` | Sección 6. |
| `albanil-constructor/lectura-de-planos-albanileria/` | `calculo-albanileria/` | Sección 7. |
| `albanil-constructor/diagnostico-albanileria-por-casos/` | `lectura-de-planos-albanileria/` | Sección 8, cierre — única sección con `cuestionario.md`. |

## Carpintero (`OF4`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `carpintero/fundamentos-carpinteria/` | `../geometria-analitica/rectas-y-angulos/` | Sección 1. Distinto de `../carpintero-de-aluminio/` (`OF23`, perfiles de aluminio para aberturas) — este oficio trabaja madera maciza y tableros. |
| `carpintero/seguridad-carpinteria/` | `fundamentos-carpinteria/` | Sección 2. |
| `carpintero/herramientas-carpinteria/` | `seguridad-carpinteria/` | Sección 3. |
| `carpintero/materiales-carpinteria/` | `herramientas-carpinteria/` | Sección 4. |
| `carpintero/tecnicas-carpinteria/` | `materiales-carpinteria/` | Sección 5. Cola de milano, espiga, ensamble, lijado, barnizado + normativa (categoría 8 del diseño original, plegada acá — a diferencia de Gasista/Electricista, sin habilitación matriculada obligatoria). |
| `carpintero/lectura-de-planos-carpinteria/` | `tecnicas-carpinteria/` | Sección 6. |
| `carpintero/diagnostico-carpinteria-por-casos/` | `lectura-de-planos-carpinteria/` | Sección 7, cierre — única sección con `cuestionario.md`. |

## Gasista (`OF6`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `gasista/fundamentos-gasista/` | `../quimica/gases-ideales/`, `../fisica/presion/` | Sección 1. Gases ideales, presión, poder calorífico, combustión completa/incompleta. |
| `gasista/seguridad-gasista/` | `fundamentos-gasista/` | Sección 2 — la más crítica del oficio (monóxido de carbono, qué no hacer ante olor a gas). |
| `gasista/herramientas-gasista/` | `seguridad-gasista/` | Sección 3. |
| `gasista/materiales-gasista/` | `herramientas-gasista/` | Sección 4. |
| `gasista/instalaciones-gasista/` | `materiales-gasista/` | Sección 5. Trazado, ventilación, categorías A/B/C + normativa (categoría 8 del diseño original, plegada acá — la habilitación más restrictiva de los 16 oficios, disclaimer explícito de que el material no habilita a ejercer). |
| `gasista/calculo-gasista/` | `instalaciones-gasista/` | Sección 6. |
| `gasista/diagnostico-gasista-por-casos/` | `calculo-gasista/` | Sección 7, cierre — única sección con `cuestionario.md`. |

## Técnico en Refrigeración y Climatización (`OF7`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tecnico-en-refrigeracion/fundamentos-termodinamicos-refrigeracion/` | `../fisica/cambios-de-estado-calor-latente/` | Sección 1. Ciclo de refrigeración (compresión-condensación-expansión-evaporación). El más compuesto del cluster de construcción: junta piso térmico y eléctrico. |
| `tecnico-en-refrigeracion/fundamentos-electricos-refrigeracion/` | `fundamentos-termodinamicos-refrigeracion/` | Sección 2. Comparte base con `../electricista/fundamentos-electricidad/`. |
| `tecnico-en-refrigeracion/seguridad-refrigeracion/` | `fundamentos-electricos-refrigeracion/` | Sección 3. |
| `tecnico-en-refrigeracion/herramientas-refrigeracion/` | `seguridad-refrigeracion/` | Sección 4. |
| `tecnico-en-refrigeracion/instalaciones-refrigeracion/` | `herramientas-refrigeracion/` | Sección 5. Split/central/cámaras frigoríficas + normativa (categoría 7 del diseño original, plegada acá: Protocolo de Montreal y Enmienda de Kigali). |
| `tecnico-en-refrigeracion/diagnostico-refrigeracion-por-casos/` | `instalaciones-refrigeracion/` | Sección 6, cierre — única sección con `cuestionario.md`. |

## Mecánico (`OF5`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `mecanico/fundamentos-mecanicos-automotor/` | `../fisica/trabajo-de-una-fuerza/`, `../fisica/conservacion-energia-mecanica/` | Sección 1. Comparte piso conceptual con `../tecnico-electromecanico/` (`OF11`) — la diferencia es de alcance, no de base. |
| `mecanico/seguridad-mecanica-automotor/` | `fundamentos-mecanicos-automotor/` | Sección 2. |
| `mecanico/motor/` | `seguridad-mecanica-automotor/` | Sección 3. Ciclo Otto/Diésel + nota sobre motos (2 tiempos) y vehículos eléctricos. |
| `mecanico/transmision/` | `motor/` | Sección 4. |
| `mecanico/sistemas-electricos-vehiculo/` | `transmision/` | Sección 5. Comparte base con `../electricista/fundamentos-electricidad/`, alcance 12V/24V. |
| `mecanico/frenos-y-suspension/` | `sistemas-electricos-vehiculo/` | Sección 6. |
| `mecanico/mantenimiento-mecanico/` | `frenos-y-suspension/` | Sección 7. Mantenimiento preventivo + normativa (categoría 9 del diseño original, plegada acá: VTV y emisiones vehiculares). |
| `mecanico/diagnostico-automotor-por-casos/` | `mantenimiento-mecanico/` | Sección 8, cierre — única sección con `cuestionario.md`. El corazón del oficio moderno (diagnóstico por scanner OBD). |

## Soldador (`OF8`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `soldador/fundamentos-soldadura/` | `../fisica/calor-q-m-c-deltat/`, metalurgia de Historia profunda | Sección 1. Comparte el piso térmico con `../tecnico-en-refrigeracion/` y con Procesador de Alimentos. |
| `soldador/seguridad-soldadura/` | `fundamentos-soldadura/` | Sección 2 — la más específica de EPP de los 16 oficios (arco eléctrico, radiación UV, humos metálicos). |
| `soldador/procesos-soldadura/` | `seguridad-soldadura/` | Sección 3. SMAW, MIG/MAG, TIG, autógena. |
| `soldador/materiales-soldadura/` | `procesos-soldadura/` | Sección 4. |
| `soldador/defectos-y-normativa-soldadura/` | `materiales-soldadura/` | Sección 5. Porosidad, falta de fusión, socavado + normativa (categoría 7 del diseño original, plegada acá: certificación IRAM/IAS por proceso y posición). |
| `soldador/diagnostico-soldadura-por-casos/` | `defectos-y-normativa-soldadura/` | Sección 6, cierre — única sección con `cuestionario.md`. |

## Metalúrgico (`OF9`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `metalurgico/fundamentos-metalurgia/` | `../quimica/oxidacion-y-reduccion/`, `../fisica/calor-q-m-c-deltat/` | Sección 1. Comparte el piso térmico con `../soldador/`. |
| `metalurgico/seguridad-metalurgia/` | `fundamentos-metalurgia/` | Sección 2. |
| `metalurgico/procesos-metalurgicos/` | `seguridad-metalurgia/` | Sección 3. Fundición, laminado, forjado, temple, revenido, recocido. |
| `metalurgico/materiales-metalurgicos/` | `procesos-metalurgicos/` | Sección 4. Aleaciones ferrosas/no ferrosas, aceros según uso. |
| `metalurgico/control-de-calidad-metalurgico/` | `materiales-metalurgicos/` | Sección 5. Dureza, propiedades mecánicas + normativa (categoría 7 del diseño original, plegada acá). |
| `metalurgico/diagnostico-metalurgico-por-casos/` | `control-de-calidad-metalurgico/` | Sección 6, cierre — única sección con `cuestionario.md`. |

## Montador de Estructuras (`OF10`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `montador-de-estructuras/fundamentos-montaje-estructuras/` | `../fisica/dinamica-fuerzas-concurrentes/`, `../matematica/teorema-de-pitagoras/` | Sección 1. |
| `montador-de-estructuras/seguridad-montaje-estructuras/` | `fundamentos-montaje-estructuras/` | Sección 2 — junto con Gasista, el más crítico de los 16 (trabajo en altura, izaje de cargas, zona de riesgo bajo carga suspendida). |
| `montador-de-estructuras/herramientas-montaje-estructuras/` | `seguridad-montaje-estructuras/` | Sección 3. Comparte soldadura estructural con `../soldador/`. |
| `montador-de-estructuras/materiales-montaje-estructuras/` | `herramientas-montaje-estructuras/` | Sección 4. |
| `montador-de-estructuras/tecnicas-montaje-estructuras/` | `materiales-montaje-estructuras/` | Sección 5. Secuencia de armado, plomado/nivelación, arriostramiento temporal + normativa (categoría 7 del diseño original, plegada acá). |
| `montador-de-estructuras/diagnostico-montaje-por-casos/` | `tecnicas-montaje-estructuras/` | Sección 6, cierre — única sección con `cuestionario.md`. |

## Jardinero / Paisajista (`OF20`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `jardinero-paisajista/fundamentos-botanicos/` | `../biologia/partes-de-una-planta-y-germinacion/` | Sección 1. Morfología/fisiología de la planta, condicionantes, identificación y sistemática. |
| `jardinero-paisajista/seguridad-jardineria/` | `fundamentos-botanicos/` | Sección 2. |
| `jardinero-paisajista/materiales-jardineria/` | `seguridad-jardineria/` | Sección 3. |
| `jardinero-paisajista/herramientas-y-maquinaria-jardineria/` | `materiales-jardineria/` | Sección 4. |
| `jardinero-paisajista/tecnicas-jardineria/` | `herramientas-y-maquinaria-jardineria/` | Sección 5. |
| `jardinero-paisajista/diagnostico-jardineria-por-casos/` | `tecnicas-jardineria/` | Sección 6, cierre. |

## Tapicero (`OF21`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tapicero/fundamentos-tapiceria/` | `../matematica/perimetro-y-area/` | Sección 1. |
| `tapicero/seguridad-tapiceria/` | `fundamentos-tapiceria/` | Sección 2. |
| `tapicero/materiales-tapiceria/` | `seguridad-tapiceria/` | Sección 3. |
| `tapicero/herramientas-tapiceria/` | `materiales-tapiceria/` | Sección 4. |
| `tapicero/tecnicas-tapiceria/` | `herramientas-tapiceria/` | Sección 5. |
| `tapicero/diagnostico-tapiceria-por-casos/` | `tecnicas-tapiceria/` | Sección 6, cierre. |

## Modista / Corte y Confección (`OF22`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `modista-corte-y-confeccion/fundamentos-confeccion/` | `../matematica/razon-y-proporcion/` | Sección 1. |
| `modista-corte-y-confeccion/seguridad-confeccion/` | `fundamentos-confeccion/` | Sección 2. |
| `modista-corte-y-confeccion/materiales-confeccion/` | `seguridad-confeccion/` | Sección 3. |
| `modista-corte-y-confeccion/herramientas-confeccion/` | `materiales-confeccion/` | Sección 4. |
| `modista-corte-y-confeccion/tecnicas-confeccion/` | `herramientas-confeccion/` | Sección 5. |
| `modista-corte-y-confeccion/diagnostico-confeccion-por-casos/` | `tecnicas-confeccion/` | Sección 6, cierre. |

## Carpintero de Aluminio (`OF23`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `carpintero-de-aluminio/fundamentos-carpinteria-aluminio/` | `../matematica/rectas-paralelas-y-perpendiculares/` (mismo prerrequisito que `../carpinteria/`) | Sección 1. |
| `carpintero-de-aluminio/seguridad-carpinteria-aluminio/` | `fundamentos-carpinteria-aluminio/` | Sección 2. |
| `carpintero-de-aluminio/materiales-carpinteria-aluminio/` | `seguridad-carpinteria-aluminio/` | Sección 3. |
| `carpintero-de-aluminio/herramientas-carpinteria-aluminio/` | `materiales-carpinteria-aluminio/` | Sección 4. |
| `carpintero-de-aluminio/tecnicas-carpinteria-aluminio/` | `herramientas-carpinteria-aluminio/` | Sección 5. |
| `carpintero-de-aluminio/calculo-carpinteria-aluminio/` | `tecnicas-carpinteria-aluminio/` | Sección 6. |
| `carpintero-de-aluminio/lectura-de-planos-carpinteria-aluminio/` | `calculo-carpinteria-aluminio/` | Sección 7. |
| `carpintero-de-aluminio/diagnostico-aberturas-por-casos/` | `lectura-de-planos-carpinteria-aluminio/` | Sección 8, cierre. |

## Tornero (`OF24`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tornero/fundamentos-torneria/` | `../fisica/mru/` | Sección 1. Velocidad de corte = velocidad lineal de un punto que gira. |
| `tornero/seguridad-torneria/` | `fundamentos-torneria/` | Sección 2. |
| `tornero/materiales-torneria/` | `seguridad-torneria/` | Sección 3. |
| `tornero/herramientas-torneria/` | `materiales-torneria/` | Sección 4. |
| `tornero/tecnicas-torneria/` | `herramientas-torneria/` | Sección 5. |
| `tornero/calculo-torneria/` | `tecnicas-torneria/` | Sección 6. |
| `tornero/lectura-de-planos-torneria/` | `calculo-torneria/` | Sección 7. |
| `tornero/diagnostico-mecanizado-por-casos/` | `lectura-de-planos-torneria/` | Sección 8, cierre. |

## Cerrajero (`OF25`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `cerrajero/fundamentos-cerrajeria/` | `../matematica/rectas-paralelas-y-perpendiculares/` | Sección 1. |
| `cerrajero/seguridad-cerrajeria/` | `fundamentos-cerrajeria/` | Sección 2. |
| `cerrajero/materiales-cerrajeria/` | `seguridad-cerrajeria/` | Sección 3. |
| `cerrajero/herramientas-cerrajeria/` | `materiales-cerrajeria/` | Sección 4. |
| `cerrajero/tecnicas-cerrajeria/` | `herramientas-cerrajeria/` | Sección 5. |
| `cerrajero/diagnostico-cerrajeria-por-casos/` | `tecnicas-cerrajeria/` | Sección 6. |
| `cerrajero/apertura-de-emergencia-sin-destruccion/` | `diagnostico-cerrajeria-por-casos/` | Sección 7, **último tema a propósito** (decisión de Javier 2026-08-13: lo avanzado va al final, requiere práctica y paciencia). Tratado a nivel conceptual — ver `../oficios-orientacion-vocacional-PLANIFICACION.md` sección Cerrajero para el alcance exacto (qué NO incluir). |

## Herrero / Forjador (`OF26`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `herrero-forjador/fundamentos-herreria/` | `../fisica/calor-q-mc-deltat/`, `../historia-profunda/metalurgia/` | Sección 1. Compartido con `../soldadura/` (si existe la carpeta). |
| `herrero-forjador/seguridad-herreria/` | `fundamentos-herreria/` | Sección 2. |
| `herrero-forjador/materiales-herreria/` | `seguridad-herreria/` | Sección 3. |
| `herrero-forjador/herramientas-herreria/` | `materiales-herreria/` | Sección 4. |
| `herrero-forjador/tecnicas-herreria/` | `herramientas-herreria/` | Sección 5. |
| `herrero-forjador/diagnostico-forja-por-casos/` | `tecnicas-herreria/` | Sección 6, cierre. |

## Relojero (`OF27`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `relojero/fundamentos-relojeria/` | `../fisica/conservacion-de-la-energia-mecanica/` | Sección 1. El resorte que guarda/libera energía es ese concepto a escala miniatura. |
| `relojero/seguridad-relojeria/` | `fundamentos-relojeria/` | Sección 2. |
| `relojero/materiales-relojeria/` | `seguridad-relojeria/` | Sección 3. |
| `relojero/herramientas-relojeria/` | `materiales-relojeria/` | Sección 4. |
| `relojero/tecnicas-relojeria/` | `herramientas-relojeria/` | Sección 5. |
| `relojero/diagnostico-relojeria-por-casos/` | `tecnicas-relojeria/` | Sección 6, cierre. |
