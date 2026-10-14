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

## Operario Agrícola (`OF13`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `operario-agricola/fundamentos-operario-agricola/` | `../matematica/proporcionalidad-funcion/`, base mecánica compartida con `../mecanico/` | Sección 1. A diferencia de `../agricultor/` (`OF12`), que decide, el Operario Agrícola ejecuta y mantiene la maquinaria. |
| `operario-agricola/seguridad-operario-agricola/` | `fundamentos-operario-agricola/` | Sección 2. |
| `operario-agricola/maquinaria-agricola/` | `seguridad-operario-agricola/` | Sección 3. |
| `operario-agricola/dosificacion-agricola/` | `maquinaria-agricola/` | Sección 4. |
| `operario-agricola/diagnostico-maquinaria-agricola-por-casos/` | `dosificacion-agricola/` | Sección 5, cierre — única sección con `cuestionario.md`. |

## Panadero (`OF14`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `panadero/fundamentos-panaderia/` | `../matematica/proporcionalidad-funcion/` | Sección 1. Escalado de receta (proporcionalidad) y temperatura/fermentación. |
| `panadero/seguridad-e-higiene-panaderia/` | `fundamentos-panaderia/` | Sección 2. Manipulación de alimentos, conservación, alérgenos. |
| `panadero/materia-prima-panaderia/` | `seguridad-e-higiene-panaderia/` | Sección 3. Harinas, gluten, levaduras, grasas. |
| `panadero/procesos-panaderia/` | `materia-prima-panaderia/` | Sección 4. Amasado, fermentación, horneado, tipos de pan, normativa. |
| `panadero/calculo-panaderia/` | `procesos-panaderia/` | Sección 5. Escalado por cantidad, tiempos de fermentación según temperatura. |
| `panadero/diagnostico-panaderia-por-casos/` | `calculo-panaderia/` | Sección 6, cierre — única sección con `cuestionario.md`. |

## Procesador de Alimentos (`OF15`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `procesador-de-alimentos/fundamentos-procesamiento-alimentos/` | `../fisica/calor-q-m-c-deltat/`, `../quimica/concentracion-de-una-solucion/` | Sección 1. Calor y concentración de soluciones aplicados a la conservación. |
| `procesador-de-alimentos/seguridad-e-higiene-procesamiento-alimentos/` | `fundamentos-procesamiento-alimentos/` | Sección 2. Cadena de frío, contaminación cruzada, HACCP básico. |
| `procesador-de-alimentos/procesos-procesamiento-alimentos/` | `seguridad-e-higiene-procesamiento-alimentos/` | Sección 3. Pasteurización, conservación, envasado, deshidratación, normativa. |
| `procesador-de-alimentos/calculo-procesamiento-alimentos/` | `procesos-procesamiento-alimentos/` | Sección 4. Concentración de solución conservante, tiempo y temperatura de proceso térmico. |
| `procesador-de-alimentos/diagnostico-procesamiento-alimentos-por-casos/` | `calculo-procesamiento-alimentos/` | Sección 5, cierre — única sección con `cuestionario.md`. |

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

## Relojero (`OF27`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `relojero/fundamentos-relojeria/` | `../fisica/conservacion-de-la-energia-mecanica/` | Sección 1. El resorte que guarda/libera energía es ese concepto a escala miniatura. |
| `relojero/seguridad-relojeria/` | `fundamentos-relojeria/` | Sección 2. |
| `relojero/materiales-relojeria/` | `seguridad-relojeria/` | Sección 3. |
| `relojero/herramientas-relojeria/` | `materiales-relojeria/` | Sección 4. |
| `relojero/tecnicas-relojeria/` | `herramientas-relojeria/` | Sección 5. |
| `relojero/diagnostico-relojeria-por-casos/` | `tecnicas-relojeria/` | Sección 6, cierre. |

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
| `audiovisual/edicion-de-audio/` | `../informatica/unidades-almacenamiento/` | Muestreo, niveles, ruido, EQ, compresión, voz. |
| `audiovisual/edicion-de-video/` | `edicion-de-audio/` | Cuadros, códec, organización, montaje, exportación y derechos. |

## Informática ramificada — Backend (agregado 2026-10-14)

Primera de las 6 ramas de "Informática ramificada" (sección homónima de `oficios-orientacion-vocacional-PLANIFICACION.md`): Backend, Frontend, DevOps, Ciencia de datos, Ciberseguridad y DBA. Cada rama vive en `material/oficios/<rama>/`, cuelga de `../informatica/` y no certifica. Los temas se escribieron a mano a partir de los borradores crudos de `_borradores-gemma/materias-nuevas/informatica-ramas/<rama>-<tema>/` (borrados). Nombre de materia de los cuestionarios: el de la rama (`backend`, `frontend`, `devops`, `ciencia-de-datos`, `ciberseguridad`, `dba`).

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `backend/apis-rest/` | `../informatica/protocolo-http-peticion-respuesta/` | Raíz: recursos, métodos, códigos de estado, buenas prácticas. |
| `backend/arquitectura-de-servidores/` | `apis-rest/`, `../informatica/diseno-y-arquitectura-de-software/` | Capas, caché, colas, escalado, disponibilidad. |
| `backend/autenticacion-y-autorizacion/` | `arquitectura-de-servidores/`, `../informatica/permisos-y-usuarios/` | Contraseñas, sesiones y tokens, MFA, roles. Enfoque defensivo. |

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
