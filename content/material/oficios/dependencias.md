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
| `electricista/normativa-electrica-aea-iram/` | `seguridad-electricista/`, `tecnicas-electricista/` | `OF1 §14`: AEA 90364 e IRAM, categorías de habilitación según jurisdicción, saber vs. estar habilitado. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `electricista/instalaciones-especiales-motores-y-bombas/` | `tecnicas-electricista/` | `OF1 §12`: motores monofásicos, contactores, relés térmicos, bombas y variadores. Tema compartido con `../tecnico-electromecanico/`. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `electricista/electricidad-trifasica-y-baja-tension-industrial/` | `fundamentos-electricidad/` | `OF1 §13`: sistema trifásico, estrella-triángulo, potencia trifásica. **Tema compartido**: `../tecnico-electromecanico/` lo toma como referencia en vez de reescribirlo. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `electricista/tableros-electricos/` | `tecnicas-electricista/` | `OF1 §9` (hoy un apartado de `lectura-de-planos-electricos/`): componentes, fallas típicas, revisión. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `electricista/instalacion-de-iluminacion-y-tomas/` | `tecnicas-electricista/` | `OF1 §5`: circuitos IUG/TUG/TUE, llaves, tomas, locales húmedos. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |

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
| `plomero/agua-caliente-sanitaria/` | `instalaciones-plomeria/` | `OF2 §5`: equipos, materiales, dilatación, válvulas de seguridad, riesgo de quemaduras y de Legionella. Frontera con gasista y electricista. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `plomero/sellos-juntas-y-uniones/` | `materiales-plomeria/` | `OF2 §4`: sellos de roscas, juntas, uniones por material y prueba hidráulica. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `plomero/normativa-plomeria-y-matricula/` | `instalaciones-plomeria/` | `OF2 §8`: reglamentos de prestadoras, matrícula según jurisdicción, frontera con gasista. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |

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
| `albanil-constructor/terminaciones-de-obra/` | `tecnicas-albanileria/` | Candidato de `OF3 §5` nunca generado: orden de ejecución, contrapisos y carpetas, pisos, aberturas y pintura. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `albanil-constructor/aislacion-termica-e-hidrofuga/` | `materiales-albanileria/` | Candidato de `OF3 §5`: tipos de humedad, capa aisladora, membranas y aislación térmica. No cita valores de transmitancia (dependen de norma y jurisdicción). Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `albanil-constructor/mamposteria-de-bloques-de-hormigon/` | `tecnicas-albanileria/` | Candidato de `OF3 §5`: mampostería encadenada vs. armada, patologías propias. No cita números de norma IRAM (sin verificar). Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `albanil-constructor/fraguado-y-curado-del-hormigon/` | `materiales-albanileria/` | Sub-ítem de `OF3 §3` sin lección propia: hidratación, fraguado, relación agua/cemento, curado y desencofrado. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `albanil-constructor/normativa-y-habilitaciones-de-obra/` | `diagnostico-albanileria-por-casos/` | `OF3 §9`: código de edificación, permiso de obra, profesionales matriculados, Ley 19.587 y Decreto 911/96, Res. SRT 62/23. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |

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
| `carpintero/estandares-de-calidad-y-normativa-carpinteria/` | `tecnicas-carpinteria/` | `OF4 §8`: controles de calidad, ausencia de matrícula obligatoria (a confirmar), Ley 24.240, Ley 19.587, Ley 26.331. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `carpintero/instalacion-de-carpinteria/` | `materiales-carpinteria/`, `lectura-de-planos-carpinteria/` | Colocación de puertas, ventanas y muebles a medida; ajuste a obra. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `carpintero/secado-y-estabilizacion-de-la-madera/` | `materiales-carpinteria/` | Humedad de equilibrio, contracción anisotrópica, secado natural vs. cámara. Valores de humedad orientativos. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |

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
| `gasista/normativa-gasista-categorias-y-habilitacion/` | `instalaciones-gasista/` | `OF6 §8` (la más crítica): ENARGAS, NAG-200, matrícula por categoría, circuito del trabajo habilitado. No enumera categorías ni horas (fuentes contradictorias). Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `gasista/prueba-de-hermeticidad-paso-a-paso/` | `herramientas-gasista/` | Lógica de la prueba de hermeticidad; **sin valores de presión ni tiempo** (los fija la norma vigente). Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |
| `gasista/artefactos-a-gas-instalacion-y-puesta-en-marcha/` | `materiales-gasista/`, `seguridad-gasista/` | `OF6 §4-5`: conexión, ventilación, evacuación y verificación de artefactos. Propuesto en `../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`. Decisión de Claude, no pedida: dependencia deducida. Solo `teoria.md` (la evaluación sigue concentrada en el `diagnostico-*`). |

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

## Técnico Electromecánico (`OF11`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tecnico-electromecanico/fundamentos-electromecanica/` | `../fisica/generador-motor-transformador/`, `../fisica/energia-cinetica/` | Sección 1. Metrología, estática/dinámica/cinemática, torque, vibraciones, dibujo técnico industrial. Comparte piso mecánico con `../mecanico/`. |
| `tecnico-electromecanico/seguridad-electromecanica/` | `fundamentos-electromecanica/` | Sección 2. Variante extendida de `../electricista/seguridad-electricista/` + riesgos mecánicos/energías residuales. |
| `tecnico-electromecanico/materiales-y-mecanizado-electromecanica/` | `seguridad-electromecanica/` | Sección 3. Comparte materiales con `../metalurgico/`. |
| `tecnico-electromecanico/elementos-de-maquinas-y-fluidos/` | `materiales-y-mecanizado-electromecanica/` | Sección 4. Ejes/rodamientos/engranajes, hidráulica, neumática. |
| `tecnico-electromecanico/maquinas-electricas-y-electronica/` | `elementos-de-maquinas-y-fluidos/` | Sección 5. Comparte fundamentos con `../electricista/fundamentos-electricidad/`. |
| `tecnico-electromecanico/control-y-automatizacion/` | `maquinas-electricas-y-electronica/` | Sección 6. Comparte base con la rama de Sistemas de Control ya construida. |
| `tecnico-electromecanico/mantenimiento-e-instrumentacion/` | `control-y-automatizacion/` | Sección 7. Contenido confirmado contra currícula real de EEST argentina (7° año, 144 hs) + gestión técnica (categoría 18 del diseño original, plegada acá). |
| `tecnico-electromecanico/diagnostico-electromecanico-por-casos/` | `mantenimiento-e-instrumentacion/` | Sección 8, cierre — única sección con `cuestionario.md`. Diagnóstico multivariable (varios síntomas cruzados a la vez), distinto del diagnóstico de síntoma único de otros oficios. |

## Agricultor (`OF12`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `agricultor/fundamentos-agricultura/` | `../biologia/fotosintesis-y-respiracion-celular/`, `../quimica/acido-base-y-ph/` | Sección 1. A diferencia de `../operario-agricola/` (`OF13`), que ejecuta, el Agricultor decide qué y cuándo plantar. |
| `agricultor/seguridad-agricultura/` | `fundamentos-agricultura/` | Sección 2. |
| `agricultor/suelo-y-cultivo/` | `seguridad-agricultura/` | Sección 3. |
| `agricultor/calculo-agricola/` | `suelo-y-cultivo/` | Sección 4. |
| `agricultor/modelos-de-produccion-agricola/` | `calculo-agricola/` | Sección 5 (`OF18`, tratado con neutralidad como las corrientes de `../../economia/`) + especializaciones `OF17a`-`OF17d` (ganadería, apicultura, horticultura, fruticultura) mencionadas como cierre, sin sub-secciones propias. |
| `agricultor/diagnostico-agricola-por-casos/` | `modelos-de-produccion-agricola/` | Sección 6, cierre — única sección con `cuestionario.md`. |
| `agricultor/ganaderia-rumiantes-aves-y-cerdos/` | `fundamentos-agricultura/` | Nodo `OF17a`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Especialización del Agricultor (`troncos.md`), confirmada por Javier y nunca generada. |
| `agricultor/apicultura/` | `fundamentos-agricultura/` | Nodo `OF17b`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Especialización (`troncos.md`). Sanidad apícola y registros SENASA verificados por búsqueda web; requisitos de traslado a confirmar. |
| `agricultor/horticultura/` | `suelo-y-cultivo/` | Nodo `OF17c`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Especialización (`troncos.md`). |
| `agricultor/fruticultura/` | `suelo-y-cultivo/` | Nodo `OF17d`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Especialización (`troncos.md`). |
| `agricultor/control-integrado-de-plagas/` | `suelo-y-cultivo/`, `seguridad-agricultura/` | Nodo `OF12 §5`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Sub-ítem del diseño plegado en otra lección. Cruza con Ley 27.279 (envases). |
| `agricultor/cosecha-y-poscosecha/` | `suelo-y-cultivo/` | Nodo `OF12 §5`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Sub-ítem del diseño plegado en otra lección. |

## Operario Agrícola (`OF13`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `operario-agricola/fundamentos-operario-agricola/` | `../matematica/proporcionalidad-funcion/`, base mecánica compartida con `../mecanico/` | Sección 1. A diferencia de `../agricultor/` (`OF12`), que decide, el Operario Agrícola ejecuta y mantiene la maquinaria. |
| `operario-agricola/seguridad-operario-agricola/` | `fundamentos-operario-agricola/` | Sección 2. |
| `operario-agricola/maquinaria-agricola/` | `seguridad-operario-agricola/` | Sección 3. |
| `operario-agricola/dosificacion-agricola/` | `maquinaria-agricola/` | Sección 4. |
| `operario-agricola/diagnostico-maquinaria-agricola-por-casos/` | `dosificacion-agricola/` | Sección 5, cierre — única sección con `cuestionario.md`. |
| `operario-agricola/calibracion-de-sembradora-y-pulverizadora/` | `dosificacion-agricola/`, `maquinaria-agricola/` | Nodo `OF13`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Complementa dosificación con la calibración paso a paso (sin dosis de producto). |
| `operario-agricola/mantenimiento-de-maquinaria-agricola/` | `maquinaria-agricola/` | Nodo `OF13 §3`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Era un apartado de la lección de maquinaria; ahora tiene lección propia. |

## Panadero (`OF14`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `panadero/fundamentos-panaderia/` | `../matematica/proporcionalidad-funcion/` | Sección 1. Escalado de receta (proporcionalidad) y temperatura/fermentación. |
| `panadero/seguridad-e-higiene-panaderia/` | `fundamentos-panaderia/` | Sección 2. Manipulación de alimentos, conservación, alérgenos. |
| `panadero/materia-prima-panaderia/` | `seguridad-e-higiene-panaderia/` | Sección 3. Harinas, gluten, levaduras, grasas. |
| `panadero/procesos-panaderia/` | `materia-prima-panaderia/` | Sección 4. Amasado, fermentación, horneado, tipos de pan, normativa. |
| `panadero/calculo-panaderia/` | `procesos-panaderia/` | Sección 5. Escalado por cantidad, tiempos de fermentación según temperatura. |
| `panadero/diagnostico-panaderia-por-casos/` | `calculo-panaderia/` | Sección 6, cierre — única sección con `cuestionario.md`. |
| `panadero/habilitacion-bromatologica-y-rotulado/` | `procesos-panaderia/` | Nodo `OF14 §7`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Compartida con Procesador de alimentos: acá el ángulo de panadería (rotulado, alérgenos, etiquetado frontal); el detalle de registros y trazabilidad está en `../procesador-de-alimentos/habilitacion-bromatologica-y-trazabilidad/`. |
| `panadero/masa-madre-y-prefermentos/` | `procesos-panaderia/` | Nodo `OF14`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Complementa la fermentación panadera. |
| `panadero/panificados-de-factura-y-pasteleria-basica/` | `procesos-panaderia/` | Nodo `OF14`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Ampliación opcional del plan; la planificación solo cubre tipos de pan. |

## Procesador de Alimentos (`OF15`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `procesador-de-alimentos/fundamentos-procesamiento-alimentos/` | `../fisica/calor-q-m-c-deltat/`, `../quimica/concentracion-de-una-solucion/` | Sección 1. Calor y concentración de soluciones aplicados a la conservación. |
| `procesador-de-alimentos/seguridad-e-higiene-procesamiento-alimentos/` | `fundamentos-procesamiento-alimentos/` | Sección 2. Cadena de frío, contaminación cruzada, HACCP básico. |
| `procesador-de-alimentos/procesos-procesamiento-alimentos/` | `seguridad-e-higiene-procesamiento-alimentos/` | Sección 3. Pasteurización, conservación, envasado, deshidratación, normativa. |
| `procesador-de-alimentos/calculo-procesamiento-alimentos/` | `procesos-procesamiento-alimentos/` | Sección 4. Concentración de solución conservante, tiempo y temperatura de proceso térmico. |
| `procesador-de-alimentos/diagnostico-procesamiento-alimentos-por-casos/` | `calculo-procesamiento-alimentos/` | Sección 5, cierre — única sección con `cuestionario.md`. |
| `procesador-de-alimentos/buenas-practicas-de-manufactura-bpm/` | `seguridad-e-higiene-procesamiento-alimentos/` | Nodo `OF15`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. BPM y POES; tema compartido con Panadero. |
| `procesador-de-alimentos/habilitacion-bromatologica-y-trazabilidad/` | `procesos-procesamiento-alimentos/` | Nodo `OF15 §6`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Habilitación industrial, RNE/RNPA y trazabilidad; compartida con Panadero. |
| `procesador-de-alimentos/haccp-aplicado-a-un-proceso/` | `seguridad-e-higiene-procesamiento-alimentos/` | Nodo `OF15`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Antes era el apartado «HACCP básico»; acá se desarrolla con un caso. |

## Técnico en Automatización y Robótica (`OF16`)

Se construye tomando prestado buena parte de `../tecnico-electromecanico/`
(`OF11` — mecánica, electricidad, electrónica, control) y agregando
sólo lo específicamente robótico por encima: matemática espacial,
microcontroladores, sensores/actuadores propios, cinemática, visión,
IA/software y seguridad. Quien ya completó `OF11` tiene gran parte del
camino desbloqueado.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tecnico-en-automatizacion-y-robotica/fundamentos-robotica/` | `../tecnico-electromecanico/diagnostico-electromecanico-por-casos/`, `../informatica/estructuras-de-control-bucles/`, `../electronica/sensores-y-actuadores/` | Sección 1. Matemática para robótica (vectores/matrices), sistemas de coordenadas, bucles como base del control robótico. |
| `tecnico-en-automatizacion-y-robotica/microcontroladores-y-programacion-embebida/` | `fundamentos-robotica/` | Sección 5 del diseño. GPIO/ADC/PWM, UART/I2C/SPI, algoritmos y POO aplicados a sistemas embebidos. |
| `tecnico-en-automatizacion-y-robotica/actuadores-y-sensores-robotica/` | `microcontroladores-y-programacion-embebida/` | Secciones 7-8. Servomotores/paso a paso/BLDC, encoders/IMU/cámaras/LIDAR. |
| `tecnico-en-automatizacion-y-robotica/cinematica-y-dinamica-robotica/` | `actuadores-y-sensores-robotica/` | Secciones 9-11. Cinemática directa/inversa, matrices homogéneas, dinámica de manipuladores, control de trayectoria. |
| `tecnico-en-automatizacion-y-robotica/robotica-industrial-y-vision/` | `cinematica-y-dinamica-robotica/` | Secciones 12-13. SCARA/delta/cobots, procesamiento de imagen y detección de objetos. |
| `tecnico-en-automatizacion-y-robotica/ia-y-software-robotico/` | `robotica-industrial-y-vision/` | Secciones 14-16. Machine learning/redes neuronales/aprendizaje por refuerzo, ROS (nodos/tópicos), SLAM y planificación de trayectoria. |
| `tecnico-en-automatizacion-y-robotica/seguridad-y-comunicaciones-robotica/` | `ia-y-software-robotico/` | Secciones 17-19 salvo diagnóstico. Seguridad en robótica industrial, protocolos de comunicación. |
| `tecnico-en-automatizacion-y-robotica/diagnostico-robotica-por-casos/` | `seguridad-y-comunicaciones-robotica/` | Sección 18, cierre — única sección con `cuestionario.md`. Diagnóstico multivariable, mismo patrón que `../tecnico-electromecanico/diagnostico-electromecanico-por-casos/`. |

## Jardinero / Paisajista (`OF20`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `jardinero-paisajista/fundamentos-botanicos/` | `../biologia/partes-de-una-planta-y-germinacion/` | Sección 1. Morfología/fisiología de la planta, condicionantes, identificación y sistemática. |
| `jardinero-paisajista/seguridad-jardineria/` | `fundamentos-botanicos/` | Sección 2. |
| `jardinero-paisajista/materiales-jardineria/` | `seguridad-jardineria/` | Sección 3. |
| `jardinero-paisajista/herramientas-y-maquinaria-jardineria/` | `materiales-jardineria/` | Sección 4. |
| `jardinero-paisajista/tecnicas-jardineria/` | `herramientas-y-maquinaria-jardineria/` | Sección 5. |
| `jardinero-paisajista/diagnostico-jardineria-por-casos/` | `tecnicas-jardineria/` | Sección 6, cierre. |
| `jardinero-paisajista/fisiologia-de-la-planta/` | | `fundamentos-botanicos/` | Cómo funciona la planta: base para regar, abonar y podar con criterio. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/identificacion-de-especies-y-sistematica/` | | `fundamentos-botanicos/` | Reconocer y nombrar plantas es la base para elegir qué plantar. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/sustratos-y-tierras/` | | `materiales-jardineria/` | Profundiza el suelo y los sustratos, fundidos en materiales. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/abonos-y-fertilizantes/` | | `sustratos-y-tierras/` | Cómo nutrir las plantas: tipos, dosis y momentos. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/productos-fitosanitarios-y-control-integrado/` | | `abonos-y-fertilizantes/`, `seguridad-jardineria/` | Control de plagas y enfermedades, con foco en seguridad y normativa. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/sistemas-de-riego/` | | `herramientas-y-maquinaria-jardineria/` | Riego manual, por goteo y por aspersión, con programación. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/motosierra-y-cortadora-de-cesped/` | | `seguridad-jardineria/` | Uso seguro y mantenimiento de las máquinas de mayor riesgo del oficio. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/multiplicacion-de-plantas/` | | `fisiologia-de-la-planta/` | Semilla, esqueje, acodo, división e injerto. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/poda-de-arboles-y-arbustos/` | | `multiplicacion-de-plantas/` | Tipos, épocas y cortes correctos. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/implantacion-y-mantenimiento-de-praderas/` | | `sustratos-y-tierras/` | Siembra, corte, resiembra y malezas del césped. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/diseno-de-canteros-y-jardines/` | | `identificacion-de-especies-y-sistematica/` | Composición, estilos y plano de planta. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/normativa-y-arbolado-publico/` | | `poda-de-arboles-y-arbustos/` | Qué se puede y qué no se puede hacer con los árboles de la vía pública. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/calculo-de-jardineria/` | | `sistemas-de-riego/`, `abonos-y-fertilizantes/` | Superficies, volúmenes, dosis y caudales: la matemática del oficio. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `jardinero-paisajista/compostaje/` | | `abonos-y-fertilizantes/` | Hacer abono con los restos del jardín. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |

## Tapicero (`OF21`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tapicero/fundamentos-tapiceria/` | `../matematica/perimetro-y-area/` | Sección 1. |
| `tapicero/seguridad-tapiceria/` | `fundamentos-tapiceria/` | Sección 2. |
| `tapicero/materiales-tapiceria/` | `seguridad-tapiceria/` | Sección 3. |
| `tapicero/herramientas-tapiceria/` | `materiales-tapiceria/` | Sección 4. |
| `tapicero/tecnicas-tapiceria/` | `herramientas-tapiceria/` | Sección 5. |
| `tapicero/diagnostico-tapiceria-por-casos/` | `tecnicas-tapiceria/` | Sección 6, cierre. |
| `tapicero/normativa-e-inflamabilidad-en-tapiceria/` | `materiales-tapiceria/` | Nodo `OF21 §7`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Sin números de norma: depende de la jurisdicción y del uso (a confirmar). |
| `tapicero/sistemas-de-suspension-y-acojinado/` | `materiales-tapiceria/` | Nodo `OF21`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Fuente sugerida: *Manual de Tecnología de la Tapicería* (ONUDI). |
| `tapicero/tapizado-de-automotor-y-cuero/` | `tecnicas-tapiceria/` | Nodo `OF21`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Ampliación opcional. |

## Modista / Corte y Confección (`OF22`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `modista-corte-y-confeccion/fundamentos-confeccion/` | `../matematica/razon-y-proporcion/` | Sección 1. |
| `modista-corte-y-confeccion/seguridad-confeccion/` | `fundamentos-confeccion/` | Sección 2. |
| `modista-corte-y-confeccion/materiales-confeccion/` | `seguridad-confeccion/` | Sección 3. |
| `modista-corte-y-confeccion/herramientas-confeccion/` | `materiales-confeccion/` | Sección 4. |
| `modista-corte-y-confeccion/tecnicas-confeccion/` | `herramientas-confeccion/` | Sección 5. |
| `modista-corte-y-confeccion/diagnostico-confeccion-por-casos/` | `tecnicas-confeccion/` | Sección 6, cierre. |
| `modista-corte-y-confeccion/patronaje-basico/` | | `fundamentos-confeccion/` | Los moldes son la base de la prenda y salen de las medidas de `fundamentos-confeccion/`. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/corte-de-tela/` | | `patronaje-basico/`, `materiales-confeccion/` | Del molde a las piezas: tendido, encaje y corte. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/costuras-basicas-y-ensamble/` | | `corte-de-tela/` | Unir piezas: tipos de costura y orden de armado. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/acabados-de-prenda/` | | `costuras-basicas-y-ensamble/` | Terminaciones que distinguen una prenda prolija. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/maquina-de-coser-ajuste-y-mantenimiento/` | | `herramientas-confeccion/` | Fallas típicas y cuidados de la herramienta central del oficio. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/entretelas-e-interfaces/` | | `materiales-confeccion/` | Telas de refuerzo que dan estructura a cuellos, puños y aberturas. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/etiquetado-de-composicion-textil/` | | `materiales-confeccion/` | Qué debe informar una prenda al venderse y cómo cuidarla. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `modista-corte-y-confeccion/confeccion-industrial-y-produccion-en-serie/` | | `costuras-basicas-y-ensamble/` | Del molde único a la serie: tiempos, calidad y organización. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |

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
| `carpintero-de-aluminio/vidrio-y-dvh/` | | `materiales-carpinteria-aluminio/` | Profundiza la sección de vidrios, hoy fundida en materiales. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `carpintero-de-aluminio/herrajes-y-burletes/` | | `materiales-carpinteria-aluminio/` | Desarrolla herrajes, felpas y burletes que hoy son sección de materiales. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `carpintero-de-aluminio/instalacion-de-ventana-corrediza/` | | `tecnicas-carpinteria-aluminio/` | Pasa del taller a la obra: replanteo, colocación y sellado. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `carpintero-de-aluminio/instalacion-de-ventana-abatible-y-puertas/` | | `instalacion-de-ventana-corrediza/` | Extiende la instalación a aberturas con herrajes de giro y de cierre en varios puntos. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `carpintero-de-aluminio/sellado-e-impermeabilizacion/` | | `instalacion-de-ventana-corrediza/` | Selladores y puntos de filtración, que la instalación solo menciona. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `carpintero-de-aluminio/normas-de-calidad-iram-para-aluminio/` | | `calculo-carpinteria-aluminio/` | Qué se ensaya en una abertura y qué norma lo define. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `carpintero-de-aluminio/presupuesto-y-computo-de-obra/` | | `calculo-carpinteria-aluminio/` | Del cálculo de cortes y materiales al presupuesto que se entrega al cliente. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |

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
| `tornero/cilindrado-y-refrentado/` | | `tecnicas-torneria/`, `herramientas-torneria/` | Desarrolla las dos operaciones base que `tecnicas-torneria/` apenas nombra. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/roscado-en-torno/` | | `cilindrado-y-refrentado/`, `calculo-torneria/` | El roscado usa el paso y el avance calculados en `calculo-torneria/` y exige dominar el cilindrado. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/taladrado-y-mandrinado/` | | `cilindrado-y-refrentado/` | Operaciones de agujeros: partir de una cara refrentada. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/torneado-conico-y-operaciones-especiales/` | | `cilindrado-y-refrentado/` | Operaciones que suman al cilindrado y al refrentado: conos, tronzado, moleteado y ranurado. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/avance-y-ajuste-de-velocidades/` | | `calculo-torneria/` | Aplica los cálculos de `calculo-torneria/` para elegir parámetros de corte. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/acabado-superficial-y-metrologia/` | | `lectura-de-planos-torneria/` | Medición y rugosidad que `lectura-de-planos-torneria/` pide y el diagnóstico solo menciona. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/refrigeracion-y-lubricacion-de-corte/` | | `materiales-torneria/` | Fluidos de corte según el material de la pieza. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/mantenimiento-del-torno/` | | `fundamentos-torneria/` | Cuidados de rutina que alargan la vida y la precisión de la máquina. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |
| `tornero/protocolo-de-trabajo-en-tornos/` | | `seguridad-torneria/` | Checklist de arranque y parada, que ordena lo visto en seguridad. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`). |

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

## Cocina / Gastronomía (`OF19`)

Ruta A (técnica y teoría, evaluable) del diseño de
`../oficios-orientacion-vocacional-PLANIFICACION.md`. Mismo piso que
`../panadero/` (`OF14`) — escalar receta (`E8`) y temperatura/equilibrio
térmico (`TER1`) — pero destino laboral distinto (cocinero vs. panadero,
oficios reales separados en la práctica). La Ruta B (recetas, entrega
práctica) no usa este patrón `teoria.md`/`cuestionario.md` — queda fuera
de esta tabla.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `cocina-gastronomia/fundamentos-cocina/` | `../../vida-cotidiana/escalar-una-receta/`, `../../fisica/temperatura-equilibrio-termico/` | Sección 1. Escalado de receta por comensales (ficha técnica) y temperatura de cocción/servicio — comparte piso con `../panadero/fundamentos-panaderia/`. |
| `cocina-gastronomia/seguridad-e-higiene-cocina/` | `fundamentos-cocina/` | Sección 2. Manipulación de alimentos, cadena de frío, alérgenos, HACCP básico — comparte base con `../procesador-de-alimentos/seguridad-e-higiene-procesamiento-alimentos/`, aplicada a cocina de restaurante en vez de industria alimentaria. |
| `cocina-gastronomia/tecnicas-de-coccion/` | `seguridad-e-higiene-cocina/` | Sección 3. Mise en place, métodos de cocción húmeda/seca/combinada, puntos de cocción. |
| `cocina-gastronomia/materia-prima-cocina/` | `tecnicas-de-coccion/` | Sección 4. Cortes de verdura y de carne, técnicas de conservación, productos de temporada. |
| `cocina-gastronomia/calculo-cocina/` | `materia-prima-cocina/` | Sección 5. Escalado de receta por comensales, rendimiento y merma, costeo de plato (food cost). |
| `cocina-gastronomia/diagnostico-cocina-por-casos/` | `calculo-cocina/` | Sección 6, cierre — única sección con `cuestionario.md` (salsa cortada, guiso soso, carne dura). |
| `cocina-gastronomia/manipulacion-de-alimentos-y-cadena-de-frio/` | `fundamentos-cocina/` | Desarrolla el apartado de manipulación y cadena de frío de `seguridad-e-higiene-cocina/`. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/alergenos-en-cocina/` | `manipulacion-de-alimentos-y-cadena-de-frio/` | Desarrolla el apartado de alérgenos. La lista oficial vigente se consulta en el Código Alimentario (no se fija acá). Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/haccp-basico/` | `alergenos-en-cocina/` | Desarrolla el apartado de HACCP; comparte base con `../procesador-de-alimentos/seguridad-e-higiene-procesamiento-alimentos/`. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/metodos-de-coccion-y-puntos-de-coccion/` | `haccp-basico/` | Separa húmedo, seco y combinado y los puntos de cocción que `tecnicas-de-coccion/` resume en un solo tema. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/cortes-de-cocina/` | `tecnicas-de-coccion/` | Desarrolla los cortes de verdura y carne de `materia-prima-cocina/`. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/tecnicas-de-conservacion/` | `cortes-de-cocina/` | Desarrolla la conservación de `materia-prima-cocina/`; alineada con el criterio de conservas de la Ruta B (solo dulces y pickles de heladera). Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/compras-inventario-y-gestion-de-cocina/` | `calculo-cocina/` | Tema nuevo (no figuraba en la planificación): ficha técnica, recepción, stock y punto de pedido. Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |
| `cocina-gastronomia/maridaje-y-servicio/` | `tecnicas-de-coccion/` | Tema nuevo, prioridad baja. Maridaje solo con bebidas sin alcohol (la plataforma tiene menores). Decisión de Claude, no pedida (plan en `../_plan-faltantes/oficios-a.md`, sección 9). Lección ampliada de Ruta A, con cuestionario no obligatorio; no cambia la cadena que cierra el logro (secciones 1 a 6 y diagnóstico). |

## Relojero (`OF27`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `relojero/fundamentos-relojeria/` | `../fisica/conservacion-de-la-energia-mecanica/` | Sección 1. El resorte que guarda/libera energía es ese concepto a escala miniatura. |
| `relojero/seguridad-relojeria/` | `fundamentos-relojeria/` | Sección 2. |
| `relojero/materiales-relojeria/` | `seguridad-relojeria/` | Sección 3. |
| `relojero/herramientas-relojeria/` | `materiales-relojeria/` | Sección 4. |
| `relojero/tecnicas-relojeria/` | `herramientas-relojeria/` | Sección 5. |
| `relojero/diagnostico-relojeria-por-casos/` | `tecnicas-relojeria/` | Sección 6, cierre. |
| `relojero/tipos-de-movimiento-manual-automatico-y-cuarzo/` | `fundamentos-relojeria/` | Nodo `OF27 §1`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Antes un ítem. |
| `relojero/complicaciones-cronografo-y-calendario/` | `tecnicas-relojeria/` | Nodo `OF27`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Ampliación sugerida. |
| `relojero/oficio-artesanal-y-mercado/` | `diagnostico-relojeria-por-casos/` | Nodo `OF27 §7`. Decisión de Claude, no pedida (plan `../_plan-faltantes/oficios-b.md`). Lección informativa. Oficio libre sin habilitación específica, presupuesto y repuestos. |

---

## Finales de ruta técnicos/informáticos — Bash (agregado 2026-10-13)

Ruta "Bash / Shell scripting" de `oficios-orientacion-vocacional-PLANIFICACION.md` (sección "Finales de ruta técnicos/informáticos"): cuelga de `../informatica/` (Tronco 10), sin certificación profesional (el sistema no certifica). *Decisión de Claude, no pedida:* la ruta vive en `material/oficios/bash/` y no en una materia nueva, porque la planificación la lista como "final de ruta" del mismo tipo que los oficios; el nombre de materia de los cuestionarios es `bash`. Los 14 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/bash/` (que se borraron: tenían errores de contenido y de sintaxis). Orden de la ruta: el de la tabla. **Nota:** `awk` y `sed` dependen de `grep/` solo por las expresiones regulares (ver su teoría).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `bash/sintaxis-de-shell/` | `../informatica/sistema-de-archivos/`, `../informatica/permisos-y-usuarios/` | Raíz de la ruta. Qué es la shell, cómo se arma un comando, códigos de salida y encadenado (`;`, `&&`, `||`). |
| `bash/variables-en-bash/` | `sintaxis-de-shell/`, `../informatica/variables-y-tipos-de-dato/` | Asignación sin espacios, `$`, llaves, `$(...)`, aritmética entera, variables especiales (`$?`, `$1`, `$#`). |
| `bash/comillas-en-bash/` | `variables-en-bash/` | Simples, dobles y escapes: controlan cómo se corta y se expande lo que se escribe. |
| `bash/expansion-de-shell/` | `comillas-en-bash/` | Llaves, tilde, comodines y sustituciones: qué reemplaza la shell antes de ejecutar. |
| `bash/pipes-y-redirecciones/` | `expansion-de-shell/` | stdin, stdout y stderr, `>`, `>>`, `2>&1`, `|`, `tee`, `xargs`. |
| `bash/grep/` | `pipes-y-redirecciones/` | Búsqueda de líneas con expresiones regulares básicas y extendidas. |
| `bash/sed/` | `grep/` | Edición de flujos: `s///`, `d`, `p`, direcciones y `-i`. Usa las expresiones regulares de `grep/`. |
| `bash/awk/` | `sed/` | Procesamiento por columnas y condiciones; `BEGIN`/`END`, arreglos asociativos. |
| `bash/condicionales-en-bash/` | `variables-en-bash/`, `../informatica/estructuras-de-control-condicionales/` | `if`, `[ ]`, `[[ ]]`, `(( ))`, `case`; la condición es un código de salida. |
| `bash/bucles-en-bash/` | `condicionales-en-bash/`, `../informatica/estructuras-de-control-bucles/` | `for`, `while`, `until`, `break`, `continue` y lectura de archivos línea por línea. |
| `bash/funciones-en-bash/` | `bucles-en-bash/`, `../informatica/funciones-y-modularidad/` | Definir, argumentos, `local`, `return` (código) y captura con `$( )`. |
| `bash/scripts-ejecutables-y-permisos/` | `funciones-en-bash/`, `../informatica/permisos-y-usuarios/` | Shebang, `chmod`, `source`, `set -euo pipefail`, `bash -n`/`-x`. |
| `bash/cron-y-tareas-programadas/` | `scripts-ejecutables-y-permisos/` | `crontab`, los cinco campos, entorno mínimo de cron y registros. |
| `bash/diagnostico-por-casos/` | `cron-y-tareas-programadas/` y todos los temas anteriores de Bash | Cierre de la ruta (patrón de diagnóstico por casos del resto de los oficios): síntomas, hipótesis y herramientas. |

## Finales de ruta técnicos/informáticos — PowerShell (agregado 2026-10-14)

Ruta "PowerShell" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Igual que Bash: vive en `material/oficios/powershell/`, cuelga de `../informatica/` y no certifica. Los 12 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/powershell/` (borrados). Nombre de materia de los cuestionarios: `powershell`.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `powershell/sintaxis-verbo-sustantivo/` | `../informatica/variables-y-tipos-de-dato/`, `../informatica/sistema-de-archivos/` | Raíz: cmdlets, parámetros, alias, variables y tipos. |
| `powershell/get-help-y-descubribilidad/` | `sintaxis-verbo-sustantivo/` | `Get-Help`, `Get-Command`, `Get-Member`. |
| `powershell/pipeline-de-objetos/` | `get-help-y-descubribilidad/` | Tubería de objetos, `Where-Object`, `Select-Object`, `Sort-Object`. |
| `powershell/sistema-de-archivos-powershell/` | `pipeline-de-objetos/`, `../informatica/sistema-de-archivos/` | Listar, copiar, mover, borrar, leer y escribir. |
| `powershell/gestion-de-procesos-powershell/` | `sistema-de-archivos-powershell/` | `Get-Process`, `Start-Process`, `Stop-Process`. |
| `powershell/gestion-de-servicios-powershell/` | `gestion-de-procesos-powershell/` | `Get-Service` y compañía; estados e inicio. |
| `powershell/condicionales-powershell/` | `pipeline-de-objetos/`, `../informatica/estructuras-de-control-condicionales/` | `if`, operadores `-eq`/`-gt`, `switch`. |
| `powershell/bucles-powershell/` | `condicionales-powershell/`, `../informatica/estructuras-de-control-bucles/` | `foreach`, `for`, `while`, `ForEach-Object`. |
| `powershell/funciones-powershell/` | `bucles-powershell/`, `../informatica/funciones-y-modularidad/` | `function`, `param`, valores devueltos. |
| `powershell/politicas-de-ejecucion/` | `funciones-powershell/` | Qué scripts se pueden ejecutar y por qué. |
| `powershell/automatizacion-ps1/` | `politicas-de-ejecucion/`, `funciones-powershell/` | Scripts `.ps1`, errores con `try/catch`, tareas programadas. |
| `powershell/diagnostico-por-casos/` | `automatizacion-ps1/` y los temas anteriores | Cierre de la ruta: diagnóstico por síntomas. |

## Finales de ruta técnicos/informáticos — SQL (agregado 2026-10-14)

Ruta "SQL" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/sql/`, cuelga de `../informatica/` y no certifica. Los 9 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/sql/` (borrados). Nombre de materia de los cuestionarios: `sql`. Los ejemplos usan SQL estándar y señalan las diferencias entre motores (`LIMIT`/`TOP`, `FULL JOIN`).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `sql/select-y-where/` | `../informatica/modelo-relacional-tabla-registro-clave-primaria/` | Raíz: `SELECT`, filtros, `NULL`, orden. |
| `sql/insert-update-delete/` | `select-y-where/` | Modificar datos y restricciones que los protegen. |
| `sql/join/` | `select-y-where/`, `../informatica/relaciones-y-claves-foraneas/` | Combinar tablas por clave. |
| `sql/agregaciones-group-by/` | `select-y-where/` | `COUNT`, `SUM`, `GROUP BY`, `HAVING`. |
| `sql/subconsultas/` | `agregaciones-group-by/`, `join/` | `IN`, `EXISTS`, CTE; subconsulta vs `JOIN`. |
| `sql/indices-basicos/` | `select-y-where/`, `../informatica/modelo-relacional-tabla-registro-clave-primaria/` | Qué acelera un índice y qué cuesta; `EXPLAIN`. |
| `sql/normalizacion-de-esquema/` | `join/`, `../informatica/normalizacion-bases-datos/` | Formas normales y diseño de tablas. |
| `sql/transacciones-sql/` | `insert-update-delete/`, `../informatica/transacciones-acid/` | `BEGIN`/`COMMIT`/`ROLLBACK`, ACID, bloqueos. |
| `sql/diagnostico-por-casos/` | `transacciones-sql/` y los temas anteriores | Cierre de la ruta: diagnóstico por síntomas. |

## Finales de ruta técnicos/informáticos — QA y Testing (agregado 2026-10-14)

Ruta "QA / Testing" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/qa-testing/`, cuelga de `../informatica/` y no certifica. Los 7 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/qa-testing/` (borrados). Nombre de materia de los cuestionarios: `qa-testing`.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `qa-testing/que-es-testear/` | `../informatica/requisitos-funcionales-no-funcionales/` | Raíz: vocabulario (error, defecto, falla), QA vs testing, principios. |
| `qa-testing/tipos-de-testing/` | `que-es-testear/`, `../informatica/pruebas-unitarias-integracion/` | Niveles, objetivos, caja negra/blanca, manual vs automático. |
| `qa-testing/caso-feliz-y-casos-borde/` | `tipos-de-testing/` | Valores límite y clases de equivalencia. |
| `qa-testing/casos-negativos/` | `caso-feliz-y-casos-borde/` | Entradas inválidas, permisos, fallas del entorno, manejo de errores. |
| `qa-testing/testing-exploratorio/` | `casos-negativos/` | Sesiones con carta, heurísticas, registro. |
| `qa-testing/reporte-de-bugs/` | `testing-exploratorio/` | Qué incluye un reporte; severidad vs prioridad; ciclo de vida. |
| `qa-testing/diagnostico-por-casos/` | `reporte-de-bugs/` y los temas anteriores | Cierre de la ruta: aislar, clasificar, priorizar. |

## Finales de ruta técnicos/informáticos — Redes (agregado 2026-10-14)

Ruta "Redes" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/redes/`, cuelga de `../informatica/` y no certifica. Los 7 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/redes/` (borrados). Nombre de materia de los cuestionarios: `redes`.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `redes/subredes/` | `../informatica/direccionamiento-ip-dns/` | Raíz: máscara, CIDR, equipos por subred, direcciones privadas. |
| `redes/switches/` | `subredes/`, `../informatica/tcp-ip-capas-enrutamiento/` | Capa 2: MAC, tabla de direcciones, STP, cableado. |
| `redes/routers/` | `switches/`, `../informatica/tcp-ip-capas-enrutamiento/` | Capa 3: tabla de rutas, gateway, TTL, seguridad básica. |
| `redes/vlans/` | `switches/`, `subredes/` | Redes lógicas, puertos de acceso y troncales. |
| `redes/nat/` | `routers/`, `subredes/` | Traducción de direcciones, PAT, redirección de puertos. |
| `redes/firewalls-de-red/` | `nat/`, `../informatica/seguridad-de-red-firewall-vpn-cifrado/` | Reglas, estado, DMZ. |
| `redes/diagnostico-por-casos/` | `firewalls-de-red/` y los temas anteriores | Cierre de la ruta: diagnóstico por capas. |

## Finales de ruta técnicos/informáticos — Ofimática (agregado 2026-10-14)

Ruta "Ofimática" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/ofimatica/`, cuelga de `../informatica/ofimatica-planilla-de-calculo/` y no certifica. Los 8 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/ofimatica/` (borrados). Nombre de materia de los cuestionarios: `ofimatica`. Los temas son neutrales respecto del programa (Microsoft Office, LibreOffice, Google); las fórmulas se muestran en español con aviso de las diferencias de idioma y separadores.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `ofimatica/formato-y-estilos/` | `../informatica/ofimatica-planilla-de-calculo/` | Raíz: estilos vs formato directo, página, formato en planillas, accesibilidad. |
| `ofimatica/formulas-y-referencias/` | `formato-y-estilos/` | Fórmulas, referencias relativas/absolutas, funciones, errores. |
| `ofimatica/tablas-dinamicas-y-graficos/` | `formulas-y-referencias/` | Resumir datos y elegir gráficos. |
| `ofimatica/presentaciones/` | `formato-y-estilos/` | Diseño de diapositivas y exposición. |
| `ofimatica/plantillas-y-combinacion-de-correspondencia/` | `formato-y-estilos/` | Plantillas y documentos personalizados; datos personales. |
| `ofimatica/macros-basicas/` | `formulas-y-referencias/`, `../informatica/estructuras-de-control-bucles/` | Grabar y leer macros; seguridad. |
| `ofimatica/cronogramas-y-diagrama-de-gantt/` | `formulas-y-referencias/` | Planificación en el tiempo y camino crítico. |
| `ofimatica/dependencias-y-asignacion-de-recursos/` | `cronogramas-y-diagrama-de-gantt/` | Dependencias, recursos, sobreasignación y costos. |

## Finales de ruta técnicos/informáticos — PSeInt (agregado 2026-10-14)

Ruta "PSeInt / pseudocódigo" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/pseint/`, cuelga de `../informatica/` y no certifica. Los 7 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/pseint/` (borrados; el de `funciones` tenía 12 bloques). Nombre de materia de los cuestionarios: `pseint`. Los ejemplos usan la sintaxis de PSeInt con el perfil por defecto (índices desde 1).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `pseint/sintaxis-y-pseudocodigo/` | `../informatica/algoritmo-secuencia-de-pasos/` | Raíz: estructura de un algoritmo, `Leer`/`Escribir`, operadores, funciones incorporadas. |
| `pseint/variables-y-tipos/` | `sintaxis-y-pseudocodigo/`, `../informatica/variables-y-tipos-de-dato/` | `Definir`, tipos, contadores, acumuladores. |
| `pseint/estructuras-de-control/` | `variables-y-tipos/`, `../informatica/estructuras-de-control-condicionales/` | `Si`, `Segun`, `Para`, `Mientras`, `Repetir`. |
| `pseint/tablas-arreglos/` | `estructuras-de-control/`, `../informatica/estructuras-de-datos-listas-pilas-colas/` | Vectores, matrices, búsqueda y burbuja. |
| `pseint/funciones/` | `tablas-arreglos/`, `../informatica/funciones-y-modularidad/` | `Funcion` y `SubProceso`, parámetros, alcance. |
| `pseint/diagramas-de-flujo/` | `sintaxis-y-pseudocodigo/`, `estructuras-de-control/` | Símbolos y traducción a pseudocódigo. |
| `pseint/diagnostico-por-casos/` | `diagramas-de-flujo/` y los temas anteriores | Cierre de la ruta: prueba de escritorio y diagnóstico. |

## Finales de ruta técnicos/informáticos — Scratch (agregado 2026-10-14)

Ruta "Scratch" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/scratch/`, cuelga de `../informatica/` y no certifica. Los 5 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/scratch/` (borrados). Nombre de materia de los cuestionarios: `scratch`. Los nombres de bloques siguen la traducción al español de Scratch 3.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `scratch/bloques-y-eventos/` | `../informatica/algoritmo-secuencia-de-pasos/` | Raíz: pantalla, objetos, coordenadas, eventos. |
| `scratch/secuencias-y-bucles/` | `bloques-y-eventos/`, `../informatica/estructuras-de-control-bucles/` | Orden de ejecución y repetición. |
| `scratch/condicionales/` | `secuencias-y-bucles/`, `../informatica/estructuras-de-control-condicionales/` | `si`, `si no`, operadores lógicos, sensores. |
| `scratch/variables-scratch/` | `condicionales/`, `../informatica/variables-y-tipos-de-dato/` | Variables, operadores y listas. |
| `scratch/proyecto-simple/` | `variables-scratch/` y los temas anteriores | Cierre de la ruta: un juego completo paso a paso. |

## Finales de ruta técnicos/informáticos — Mecanografía (agregado 2026-10-14)

Ruta "Mecanografía" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Vive en `material/oficios/mecanografia/`, cuelga de `../informatica/` y no certifica. Los 3 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/mecanografia/` (borrados). Nombre de materia de los cuestionarios: `mecanografia`. Aviso: la ubicación de algunos signos varía según la distribución (España, Latinoamérica, US); los temas lo advierten y no dan posiciones que no sean comunes a las tres.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `mecanografia/qwerty-espanol/` | `../informatica/ofimatica-planilla-de-calculo/` | Raíz: postura, fila base, dedos, ñ y tildes. |
| `mecanografia/qwerty-ingles/` | `qwerty-espanol/` | Diferencias con el teclado US, símbolos y atajos universales. |
| `mecanografia/velocidad-y-precision/` | `qwerty-espanol/`, `qwerty-ingles/` | PPM bruta/neta, precisión, técnicas, ergonomía. |

## Finales de ruta técnicos/informáticos — Diseño gráfico y Audiovisual (agregado 2026-10-14)

Rutas "Diseño gráfico" y "Audiovisual" de la sección "Finales de ruta técnicos/informáticos" de `oficios-orientacion-vocacional-PLANIFICACION.md`. Viven en `material/oficios/diseno-grafico/` y `material/oficios/audiovisual/`, cuelgan de `../informatica/` y no certifican. Los 5 temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/{diseno-grafico,audiovisual}/` (borrados; el de `edicion-de-imagen` tenía una teoría mínima). Nombres de materia de los cuestionarios: `diseno-grafico` y `audiovisual`. Los temas son neutrales respecto del programa (se mencionan alternativas libres: GIMP, Inkscape, Penpot, Audacity, Kdenlive).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `diseno-grafico/edicion-de-imagen/` | `../informatica/unidades-almacenamiento/` | Raíz: píxeles, color, formatos, capas y edición no destructiva. |
| `diseno-grafico/vectorial/` | `edicion-de-imagen/` | Trazados, Bézier, booleanas, logotipos. |
| `diseno-grafico/prototipado/` | `vectorial/` | Wireframes, prototipos interactivos, principios de interfaz y pruebas con usuarios. |
| `diseno-grafico/tipografia/` | `vectorial/`, `../diseño/jerarquia-visual-e-informacion/` | Familias, jerarquía, interlineado, legibilidad y pares tipográficos. Cierra el enlace a «tipografia» que dejaba `diseño/jerarquia-visual-e-informacion`. Decisión de Claude, no pedida. |
| `diseno-grafico/teoria-del-color-y-paletas/` | `edicion-de-imagen/` | RGB, CMYK, HSL, círculo cromático, armonías, contraste y accesibilidad. Cierra el enlace a «colores» que dejaba `diseño/jerarquia-visual-e-informacion`. Decisión de Claude, no pedida. |
| `diseno-grafico/composicion-y-layout/` | `tipografia/`, `../arte/composicion-y-proporcion/` | Grillas, márgenes, alineación y espacio en blanco aplicados a piezas. Decisión de Claude, no pedida. |
| `diseno-grafico/identidad-visual-y-branding/` | `vectorial/`, `tipografia/`, `teoria-del-color-y-paletas/` | Logo, manual de marca, aplicaciones y coherencia. Decisión de Claude, no pedida. |
| `diseno-grafico/preimpresion-y-produccion-grafica/` | `teoria-del-color-y-paletas/` | Sangrado, CMYK, resolución y formatos de entrega a imprenta. Las medidas se dan como referencias comunes y se confirman con cada imprenta. Decisión de Claude, no pedida. |
| `diseno-grafico/componentes-y-sistemas-de-diseno/` | `prototipado/` | Componentes reutilizables, variantes, tokens y entrega a desarrollo (handoff). La planificación (línea 1277) lo mencionaba dentro del prototipado. |
| `diseno-grafico/diagnostico-diseno-por-casos/` | `tipografia/`, `teoria-del-color-y-paletas/`, `composicion-y-layout/`, `identidad-visual-y-branding/`, `preimpresion-y-produccion-grafica/`, `componentes-y-sistemas-de-diseno/` | Cierre de la ruta con el patrón de «diagnóstico por casos»: síntoma, causa probable, verificación y solución. Decisión de Claude, no pedida. |
| `audiovisual/edicion-de-audio/` | `../informatica/unidades-almacenamiento/` | Muestreo, niveles, ruido, EQ, compresión, voz. |
| `audiovisual/edicion-de-video/` | `edicion-de-audio/` | Cuadros, códec, organización, montaje, exportación y derechos. |
| `audiovisual/correccion-de-color-en-video/` | `edicion-de-video/` | Exposición, balance de blancos, curvas y LUT; coherencia entre planos. La planificación lo listaba (línea 1282) sin tema propio. |
| `audiovisual/transiciones-y-efectos/` | `edicion-de-video/` | Cuándo usar corte, fundido o efecto; velocidad, títulos y rotulación (planificación, línea 1282). |
| `audiovisual/ecualizacion-y-reduccion-de-ruido/` | `edicion-de-audio/` | EQ, filtros, compresión y limpieza de ruido y eco (planificación, línea 1285). |
| `audiovisual/mezcla-y-masterizacion-basica/` | `ecualizacion-y-reduccion-de-ruido/` | Balance de pistas, panorama, niveles finales y normalización. Los valores de loudness se tratan como referencias a verificar con la plataforma de destino. |
| `audiovisual/captura-de-audio-y-microfonos/` | `../informatica/unidades-almacenamiento/` | Tipos de micrófono, distancia, entorno y grabar limpio desde el origen. Decisión de Claude, no pedida (laguna detectada en el plan de oficios). |
| `audiovisual/captura-de-video-luz-y-encuadre/` | `../arte/narrativa-audiovisual/` | Cámara, luz natural y artificial, y encuadre aplicado al rodaje; reutiliza lo ya escrito en Arte. Decisión de Claude, no pedida. |
| `audiovisual/exportacion-por-plataforma-y-subtitulos/` | `edicion-de-video/` | Formatos y relaciones de aspecto por plataforma, y subtitulado y accesibilidad (planificación: exportación por plataforma; subtítulos como aporte nuevo). |
| `audiovisual/diagnostico-audiovisual-por-casos/` | `correccion-de-color-en-video/`, `ecualizacion-y-reduccion-de-ruido/`, `mezcla-y-masterizacion-basica/`, `captura-de-audio-y-microfonos/`, `captura-de-video-luz-y-encuadre/`, `exportacion-por-plataforma-y-subtitulos/` | Cierre de la ruta con el patrón de «diagnóstico por casos»: síntoma, hipótesis, verificación. Decisión de Claude, no pedida. |

## Informática ramificada — Backend (agregado 2026-10-14)

Primera de las 6 ramas de "Informática ramificada" (sección homónima de `oficios-orientacion-vocacional-PLANIFICACION.md`): Backend, Frontend, DevOps, Ciencia de datos, Ciberseguridad y DBA. Cada rama vive en `material/oficios/<rama>/`, cuelga de `../informatica/` y no certifica. Los temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/informatica-ramas/<rama>-<tema>/` (borrados). Nombre de materia de los cuestionarios: el de la rama (`backend`, `frontend`, `devops`, `ciencia-de-datos`, `ciberseguridad`, `dba`).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `backend/apis-rest/` | `../informatica/protocolo-http-peticion-respuesta/` | Raíz: recursos, métodos, códigos de estado, buenas prácticas. |
| `backend/arquitectura-de-servidores/` | `apis-rest/`, `../informatica/diseno-y-arquitectura-de-software/` | Capas, caché, colas, escalado, disponibilidad. |
| `backend/autenticacion-y-autorizacion/` | `arquitectura-de-servidores/`, `../informatica/permisos-y-usuarios/` | Contraseñas, sesiones y tokens, MFA, roles. Enfoque defensivo. |
| `backend/acceso-a-datos-desde-el-backend/` | `apis-rest/`, `../sql/select-y-where/`, `../sql/transacciones-sql/` | Cómo el servidor habla con la base: conexión, consultas parametrizadas, ORM, transacciones y migraciones. La planificación solo decía «conecta con SQL». Decisión de Claude, no pedida: dependencia deducida. |
| `backend/validacion-y-manejo-de-errores/` | `apis-rest/` | Validar la entrada, distinguir errores esperados de inesperados y responder con códigos y mensajes coherentes. Decisión de Claude, no pedida (laguna detectada en el plan de oficios). |
| `backend/logs-y-monitoreo/` | `arquitectura-de-servidores/` | Qué registrar, niveles de log, métricas básicas y alertas; puente con la rama DevOps. Decisión de Claude, no pedida (laguna detectada en el plan de oficios). |
| `backend/asincronia-y-colas-de-trabajo/` | `arquitectura-de-servidores/` | Tareas en segundo plano, colas, reintentos e idempotencia. `arquitectura-de-servidores` menciona «colas» sin desarrollarlas. Decisión de Claude, no pedida. |
| `backend/diagnostico-backend-por-casos/` | `autenticacion-y-autorizacion/`, `acceso-a-datos-desde-el-backend/`, `validacion-y-manejo-de-errores/`, `logs-y-monitoreo/`, `asincronia-y-colas-de-trabajo/` | Cierre de la ruta, con el patrón de «diagnóstico por casos» que tienen los demás oficios: síntoma, hipótesis, verificación. Decisión de Claude, no pedida. |

## Informática ramificada — Frontend (agregado 2026-10-14)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `frontend/html-semantico/` | `../informatica/protocolo-http-peticion-respuesta/` | Raíz: estructura, elementos semánticos, formularios, accesibilidad. |
| `frontend/css-y-maquetacion/` | `html-semantico/` | Selectores, cascada, caja, Flexbox, Grid, diseño adaptable. |
| `frontend/javascript-fundamentos/` | `css-y-maquetacion/`, `../informatica/estructuras-de-control-condicionales/` | Variables, funciones, arreglos, DOM, eventos, `fetch`. |
| `frontend/javascript-orientado-a-objetos/` | `javascript-fundamentos/`, `../informatica/poo-clases-y-objetos/` | Objetos, clases, herencia, encapsulamiento, `this`. |
| `frontend/typescript-fundamentos/` | `javascript-orientado-a-objetos/` | Tipos, interfaces, uniones, genéricos, `strict`. |
| `frontend/experiencia-de-usuario-basica/` | `css-y-maquetacion/`, `html-semantico/` | Principios de UX/UI, accesibilidad, pruebas con usuarios, ética. Conecta con `diseno-grafico/prototipado/`. |

## Informática ramificada — DevOps (agregado 2026-10-14)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `devops/control-de-versiones-git/` | `../informatica/control-de-versiones/`, `bash/sintaxis-de-shell/` | Raíz: commits, ramas, conflictos, remotos, deshacer, secretos. |
| `devops/contenedores-docker/` | `control-de-versiones-git/`, `../informatica/virtualizacion-maquina-virtual-contenedor/` | Imágenes, contenedores, Dockerfile, volúmenes, Compose, seguridad. |
| `devops/ci-cd-fundamentos/` | `control-de-versiones-git/`, `contenedores-docker/` | Pipelines, pruebas automáticas, estrategias de despliegue, secretos. |
| `devops/infraestructura-como-codigo/` | `ci-cd-fundamentos/`, `bash/scripts-ejecutables-y-permisos/` | Declarativo vs imperativo, idempotencia, Terraform y Ansible. |

## Informática ramificada — Ciencia de datos (agregado 2026-10-14)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `ciencia-de-datos/estadistica-descriptiva/` | `../informatica/variables-y-tipos-de-dato/` | Raíz: tipos de variables, media/mediana/moda, dispersión, atípicos. |
| `ciencia-de-datos/probabilidad-aplicada/` | `estadistica-descriptiva/` | Reglas, condicional, Bayes, esperanza, sesgos. |
| `ciencia-de-datos/limpieza-de-datos/` | `estadistica-descriptiva/`, `../informatica/archivos-y-persistencia/` | Faltantes, duplicados, tipos, validación, privacidad. |
| `ciencia-de-datos/visualizacion-de-datos/` | `limpieza-de-datos/`, `estadistica-descriptiva/` | Elegir y diseñar gráficos con honestidad. Conecta con `ofimatica/tablas-dinamicas-y-graficos/`. |

## Informática ramificada — Ciberseguridad (agregado 2026-10-14)

Enfoque **defensivo y educativo** (como pide la planificación): cada tema avisa que probar sistemas ajenos sin autorización es ilegal, y no incluye herramientas ni cargas ofensivas.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `ciberseguridad/vulnerabilidades-comunes/` | `../informatica/seguridad-informatica/` | Raíz: CIA, OWASP, ingeniería social, malware, respuesta a incidentes. |
| `ciberseguridad/criptografia-basica/` | `vulnerabilidades-comunes/`, `../informatica/criptografia-clave-simetrica-asimetrica-hash/` | Simétrico, asimétrico, hash, firmas, certificados, claves. |
| `ciberseguridad/gestion-de-contrasenas/` | `criptografia-basica/` | Ataques a claves, frases de paso, gestores, MFA, passkeys. |
| `ciberseguridad/hardening-basico/` | `gestion-de-contrasenas/`, `../informatica/seguridad-de-red-firewall-vpn-cifrado/` | Reducir superficie de ataque: actualizaciones, cuentas, red, datos, registros. |

## Informática ramificada — DBA (agregado 2026-10-14)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `dba/administracion-de-usuarios-y-permisos/` | `sql/insert-update-delete/`, `../informatica/permisos-y-usuarios/` | Raíz: roles, `GRANT`/`REVOKE`, mínimo privilegio, auditoría (ejemplos en PostgreSQL). |
| `dba/backups-y-recuperacion/` | `administracion-de-usuarios-y-permisos/`, `../informatica/transacciones-acid/` | RPO/RTO, tipos de copia, PITR, regla 3-2-1, simulacros. |
| `dba/bases-de-datos-nosql/` | `backups-y-recuperacion/`, `sql/normalizacion-de-esquema/` | Tipos, documentos, ACID vs BASE, CAP, cuándo conviene. |
| `dba/optimizacion-de-performance/` | `bases-de-datos-nosql/`, `sql/indices-basicos/` | Medir, `EXPLAIN`, índices, N+1, mantenimiento y arquitectura. |

## Guía Turístico — secciones 2 a 5 (agregado 2026-10-16)

Oficio #18 de `oficios-orientacion-vocacional-PLANIFICACION.md`. La **sección 1 (Fundamentos)** son los 4 temas que ya estaban en `../turismo/` (circuitos e itinerarios, planificación de destino, patrimonio turístico natural y cultural, estrategias de comunicación para la promoción turística). Las secciones 2 a 5 viven en `material/oficios/guia-turistico/`, se escribieron desde cero (no había borradores) y **citan fuentes oficiales leídas en bruto**: Ministerio de Salud (primeros auxilios, argentina.gob.ar, CC BY 4.0), Ministerio de Seguridad (turismo aventura), Ley 1264 de CABA, Ley 25.997, Código Civil y Comercial, Ley 24.240 y el manual de accesibilidad turística de Uruguay (2019). **Lo que no tiene fuente oficial leída está rotulado "criterio general"** (oratoria, manejo de grupo, multilingüismo y los casos del diagnóstico). Nombre de materia de los cuestionarios: `guia-turistico`. Faltan: examen jefe, traducciones y la revisión por una guía habilitada y un abogado (los temas de normativa y responsabilidad son educativos, no asesoramiento legal).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `guia-turistico/primeros-auxilios-basicos-en-grupo/` | `../turismo/circuitos-e-itinerarios-turisticos/` | Sección 2: RCP, DEA, Heimlich, calor, botiquín. |
| `guia-turistico/manejo-de-emergencias-en-excursion/` | `primeros-auxilios-basicos-en-grupo/` | Sección 2: prevención, números de emergencia, fuego, qué hacer y comunicar. |
| `guia-turistico/protocolo-con-grupos-turisticos/` | `manejo-de-emergencias-en-excursion/` | Sección 2: recepción, conteo, obligaciones de la Ley 1264, cierre. |
| `guia-turistico/oratoria-para-guias/` | `../turismo/estrategias-de-comunicacion-para-la-promocion-turistica/` | Sección 3: interpretación del patrimonio, voz, cuerpo, preguntas. |
| `guia-turistico/manejo-de-grupo-turistico/` | `oratoria-para-guias/`, `protocolo-con-grupos-turisticos/` | Sección 3: liderazgo, tipos de grupo, conflictos. |
| `guia-turistico/atencion-a-necesidades-especiales/` | `protocolo-con-grupos-turisticos/` | Sección 3: trato a personas con discapacidad (manual de Uruguay) y accesibilidad (Ley 25.997). |
| `guia-turistico/multilinguismo-para-guias/` | `oratoria-para-guias/` | Sección 3: guiar en otro idioma, MCER, interculturalidad. |
| `guia-turistico/diagnostico-turistico-por-casos/` | todos los anteriores de la ruta | Sección 4: 11 casos con método. |
| `guia-turistico/habilitacion-de-guia-de-turismo/` | `protocolo-con-grupos-turisticos/` | Sección 5: Ley 1264 de CABA, otras jurisdicciones, formación. |
| `guia-turistico/responsabilidad-civil-del-guia/` | `habilitacion-de-guia-de-turismo/`, `manejo-de-emergencias-en-excursion/` | Sección 5: artículos del CCyC y la Ley 24.240 aplicados al guía. |

## Temas agregados 2026-10-19 (plan `oficios-b`, lote taller y técnicos)

Decisión de Claude, no pedida: las dependencias son deducidas. Nodos propuestos en `../_plan-faltantes/oficios-b.md`; ninguno tiene ID en `troncos.md` todavía.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `mecanico/vehiculo-electrico-fundamentos/` | `sistemas-electricos-vehiculo/, frenos-y-suspension/` | Rama confirmada por Javier (2026-08-13) y nunca generada. Motor único, reductora, frenado regenerativo y batería de alta tensión con su seguridad. |
| `mecanico/inyeccion-electronica-y-sensores/` | `motor/, sistemas-electricos-vehiculo/` | Sub-ítem del diseño sin lección propia; enlaza con los códigos del escáner de `diagnostico-automotor-por-casos/`. |
| `mecanico/emisiones-y-verificacion-tecnica/` | `mantenimiento-mecanico/` | Hoy era un apartado de mantenimiento; catalizador, ensayo de gases y VTV. |
| `mecanico/motos-motor-2-y-4-tiempos/` | `motor/` | Rama `mecanico-de-motos` (confirmada 2026-08-13, nunca generada), lección 1 de 5. Parte de la nota sobre motos que ya trae `motor/`. |
| `mecanico/motos-carburacion-y-alimentacion/` | `motos-motor-2-y-4-tiempos/` | Rama motos, lección 2 de 5. |
| `mecanico/motos-encendido-y-sistema-electrico/` | `motos-motor-2-y-4-tiempos/, sistemas-electricos-vehiculo/` | Rama motos, lección 3 de 5. Encendido CDI/bobina, magneto, regulador. |
| `mecanico/motos-transmision-y-cadena/` | `motos-motor-2-y-4-tiempos/, transmision/` | Rama motos, lección 4 de 5. Embrague multidisco, caja, cadena. |
| `mecanico/motos-frenos-y-suspension/` | `motos-motor-2-y-4-tiempos/, frenos-y-suspension/` | Rama motos, lección 5 de 5. |
| `soldador/certificacion-iram-ias-por-proceso-y-posicion/` | `defectos-y-normativa-soldadura/` | Normativa que quedaba plegada en defectos. WPS/PQR, calificación de soldadores y posiciones. |
| `soldador/inspeccion-y-ensayos-de-soldadura/` | `defectos-y-normativa-soldadura/` | Sección 7 del diseño sin lección propia. Inspección visual y ensayos. |
| `soldador/parametros-de-soldadura-amperaje-y-electrodos/` | `procesos-soldadura/` | Selección de amperaje, electrodo y velocidad. |
| `soldador/soldadura-estructural/` | `defectos-y-normativa-soldadura/, procesos-soldadura/` | Tema COMPARTIDO con Montador de estructuras (el Montador lo referencia, no lo repite). |
| `metalurgico/fundicion-moldeo-y-colada/` | `procesos-metalurgicos/` | Apoya el caso «defecto de fundición» del diagnóstico. |
| `metalurgico/tratamientos-termicos-en-detalle/` | `procesos-metalurgicos/` | Compartido con `../ciencia-de-materiales` (nodos CM3/CM4): acá la mirada de taller, sin repetir diagramas. |
| `metalurgico/normas-de-calidad-de-proceso-metalurgico/` | `control-de-calidad-metalurgico/` | Normas de producto y ensayo, certificados y trazabilidad. |
| `montador-de-estructuras/izaje-y-aparejos-en-detalle/` | `seguridad-montaje-estructuras/` | Seguridad crítica: eslingas, ángulos, señales de maniobra. |
| `montador-de-estructuras/certificacion-y-habilitacion-trabajo-en-altura/` | `tecnicas-montaje-estructuras/` | Normativa que quedaba dentro de técnicas. Referencia la soldadura estructural del Soldador. |
| `montador-de-estructuras/uniones-abulonadas-y-torque/` | `materiales-montaje-estructuras/` | Bulones estructurales, pretensado y torque. |
| `tecnico-en-refrigeracion/habilitacion-y-normativa-refrigeracion/` | `seguridad-refrigeracion/` | Habilitación casi sin tratar; Montreal, Kigali y manejo de refrigerantes. |
| `tecnico-en-refrigeracion/compresores-evaporadores-y-condensadores/` | `fundamentos-termodinamicos-refrigeracion/` | Componentes a fondo. |
| `tecnico-en-refrigeracion/calculo-de-carga-termica-y-climatizacion/` | `fundamentos-termodinamicos-refrigeracion/` | Carga térmica y dimensionamiento; antes solo como instalación. |
| `tecnico-en-refrigeracion/carga-de-gas-y-vacio-procedimiento/` | `herramientas-refrigeracion/, habilitacion-y-normativa-refrigeracion/` | Procedimiento de vacío, carga, recuperación y prueba. |
| `tecnico-electromecanico/hidraulica-industrial/` | `elementos-de-maquinas-y-fluidos/` | Sección condensada en `elementos-de-maquinas-y-fluidos/`. |
| `tecnico-electromecanico/neumatica-industrial/` | `elementos-de-maquinas-y-fluidos/` | Idem. |
| `tecnico-electromecanico/plc-y-automatismos/` | `control-y-automatizacion/` | Tema COMPARTIDO con Técnico en automatización y robótica; el PID vive en `../tecnico-en-automatizacion-y-robotica/control-lazo-cerrado-y-pid-en-robotica/`. Las máquinas eléctricas (motores, trifásica) se referencian desde `../electricista/electricidad-trifasica-y-baja-tension-industrial/` e `../electricista/instalaciones-especiales-motores-y-bombas/`; el mecanizado, desde `../tornero/`. No se duplicaron `maquinas-electricas-motores-y-transformadores` ni `mecanizado-torno-fresadora-cnc` del plan. |
| `tecnico-electromecanico/mantenimiento-predictivo-y-gestion-de-ordenes/` | `mantenimiento-e-instrumentacion/` | Apartado actual ampliado: termografía, vibraciones, órdenes de trabajo, repuestos. |
| `tecnico-en-automatizacion-y-robotica/seguridad-en-robotica-industrial/` | `robotica-industrial-y-vision/` | Separada de comunicaciones (compartían 310 palabras). Cobots, zonas, paradas. |
| `tecnico-en-automatizacion-y-robotica/protocolos-de-comunicacion-robotica/` | `microcontroladores-y-programacion-embebida/` | Separada de seguridad. |
| `tecnico-en-automatizacion-y-robotica/servomotores-paso-a-paso-y-bldc/` | `actuadores-y-sensores-robotica/` | Cada tipo de motor, su driver y su lazo. |
| `tecnico-en-automatizacion-y-robotica/encoders-imu-y-camaras/` | `actuadores-y-sensores-robotica/` | Sensores propioceptivos y exteroceptivos. |
| `tecnico-en-automatizacion-y-robotica/planificacion-de-trayectoria-y-navegacion/` | `cinematica-y-dinamica-robotica/` | Planificación, odometría/SLAM y evitación de obstáculos. |
| `tecnico-en-automatizacion-y-robotica/control-lazo-cerrado-y-pid-en-robotica/` | `cinematica-y-dinamica-robotica/` | Tema COMPARTIDO con Electromecánico (nodos CTRL1–3a): acá vive el PID. |
