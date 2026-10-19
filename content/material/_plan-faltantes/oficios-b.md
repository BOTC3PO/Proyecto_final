# Plan de temas faltantes — Oficios de obra, taller, agro y alimentos (18 oficios)

> Generado 2026-10-19 leyendo `oficios/<oficio>/*/teoria.md`, `oficios/dependencias.md` y `oficios-orientacion-vocacional-PLANIFICACION.md`. **Solo plan: no se creó contenido.**
> Oficios cubiertos: Albañil, Carpintero, Electricista, Gasista, Mecánico, Plomero, Soldador, Metalúrgico, Montador de estructuras, Panadero, Procesador de alimentos, Refrigeración, Electromecánico, Automatización y robótica, Agricultor, Operario agrícola, Relojero, Tapicero.

## Cómo leer este plan

- **Por diseño** (`dependencias.md`), cada oficio tiene **un tema por sección numerada** del diseño, y cada tema agrupa los 3–6 sub-ítems de esa sección en una sola lección de ~350–750 palabras. Por eso la estructura de carpetas coincide con el diseño y **no hay secciones enteras faltantes**, salvo las que se listan abajo.
- Los huecos reales son de tres tipos:
  1. **Sub-ítems planificados que no tienen lección propia** y la lección que los agrupa los toca en un párrafo o ni los nombra.
  2. **Ramas ya confirmadas por Javier (2026-08-13) y nunca generadas** (Mecánico de motos, Vehículo eléctrico, Especializaciones del Agricultor, 2 candidatos de Albañil).
  3. **Normativa**: casi todos los diseños tienen una sección "Normativa" final; en el contenido quedó plegada como último subtítulo de otra lección (a veces ni eso).
- **Regla de evaluación vigente (2026-09-15)**: los temas nuevos son **solo `teoria.md`** (informativos). La evaluación va en un único `cuestionario.md` por oficio, en `diagnostico-<oficio>-por-casos/`. Los `diagnostico-*` actuales tienen **16–22 preguntas** (`PROCEDIMIENTO.md` pide mínimo 20): 16 en Soldador, Metalúrgico, Montador, Panadero, Procesador y Operario agrícola; 18 en Carpintero, Gasista, Mecánico, Plomero, Refrigeración, Electromecánico, Robótica y Agricultor. Subirlos a 20+ y sumar los casos nuevos es la tarea de evaluación de cada oficio.
- Nota de fuentes: la planificación cita libros en `tareas_pendientes/libros/oficios/<oficio>/`, pero **esa carpeta no está en este repositorio**; las fuentes de abajo son las que el documento de planificación ya nombra. Verificar disponibilidad antes de generar.
- Prioridad: **alta** = seguridad, normativa habilitante o rama ya confirmada; **media** = sub-ítem planificado sin lección propia; **baja** = ampliación opcional.

---

## 1. Albañil / Constructor (`OF3`) — 8 temas, 411–514 palabras salvo cálculo

**Cubre hoy**: fundamentos geométricos, seguridad (caídas, andamios, EPP, excavaciones), materiales, herramientas, técnicas (cimientos, mampostería, revoques, estructura, cubiertas), cálculo, planos, diagnóstico (4 casos). Es el oficio más completo.
**Lagunas**: faltan las dos técnicas que el diseño marcó como candidatas, la normativa argentina como lección, y fraguado/curado (aparece en un solo archivo).

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente / planificado |
|---|---|---|---|---|
| `terminaciones-de-obra` | `tecnicas-albanileria` | Pisos, pintura, puertas y ventanas, orden de ejecución de terminaciones | alta | *Módulo Educativo* 4.5–4.9. Planificado como "candidato" (OF3 §5), nunca generado |
| `aislacion-termica-e-hidrofuga` | `materiales-albanileria` | Aislación hidrófuga (capa aisladora, barreras de humedad), aislación térmica de muros y cubiertas | alta | *Manual Técnico de Mampostería de BH* cap. 3. Planificado como candidato |
| `mamposteria-de-bloques-de-hormigon` | `tecnicas-albanileria` | Bloque de hormigón como sistema propio: encadenada vs. armada, normas IRAM 11556/11561, patologías propias | media | BH cap. 5.2. Planificado como candidato |
| `fraguado-y-curado-del-hormigon` | `materiales-albanileria` | Fraguado, curado, plazos, efecto de temperatura y agua/cemento | media | *Manual del Constructor* (Polpaico), solo piso básico. Estaba en OF3 §3, hoy mencionado en una sola lección |
| `normativa-y-habilitaciones-de-obra` | `diagnostico-albanileria-por-casos` | Código de Edificación municipal, permiso de obra, Maestro Mayor de Obra vía consejos profesionales (default Argentina) | alta | OF3 §9, **sección sin lección propia** |

## 2. Carpintero (`OF4`) — 7 temas

**Cubre hoy**: fundamentos, seguridad, materiales, herramientas, técnicas (cola de milano, espiga, ensamble, lijado, barnizado), planos de mueble, diagnóstico.
**Lagunas**: sin sección de **normativa/calidad** como tal (el diseño pedía "sin habilitación obligatoria" marcado explícitamente), técnicas limitadas a uniones y acabado, nada de instalación.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `estandares-de-calidad-y-normativa-carpinteria` | `tecnicas-carpinteria` | Estándares de calidad, tolerancias de acabado, aclarar que no hay matrícula obligatoria | media | OF4 §8; sin lección propia |
| `instalacion-de-carpinteria` | `herrajes` (en `materiales-carpinteria`), `lectura-de-planos-carpinteria` | Colocación de puertas, ventanas, muebles a medida, nivelación | media | CONFEMADERA (España), citada en la planificación como enriquecimiento |
| `secado-y-estabilizacion-de-la-madera` | `materiales-carpinteria` | Humedad de equilibrio, secado natural vs. cámara, movimiento de la madera | baja | Ya tocado en diagnóstico (alabeo, humedad); no tiene lección previa |

## 3. Electricista (`OF1`) — 8 temas

**Cubre hoy**: fundamentos, seguridad, herramientas, materiales, técnicas (arquitectura, protecciones, tierra, circuitos), cálculo, planos, diagnóstico. El diseño original tenía **14 categorías**; 8 quedaron plegadas.
**Lagunas** (comprobado: sin menciones de AEA 90364 ni reglamentación local):

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `normativa-electrica-aea-iram` | `seguridad-electricista`, `tecnicas-electricista` | Reglamentación AEA 90364, categorías de habilitación, "saber vs. estar habilitado" | alta | OF1 §14; **sección sin lección** |
| `instalaciones-especiales-motores-y-bombas` | `tecnicas-electricista` | Motores monofásicos, bombas, contactores, relés, variadores | media | OF1 §12. Hoy solo mencionado |
| `electricidad-trifasica-y-baja-tension-industrial` | `fundamentos-electricidad` | Sistema trifásico, arranque directo vs. estrella-triángulo, tableros industriales | media | OF1 §13. Parcialmente compartido con Electromecánico (ver sección de compartidos) |
| `tableros-electricos` (lección propia) | `tecnicas-electricista` | Estructura, barras, unifilares, fallas típicas, ejercicios "encontrá los errores" | media | OF1 §9; hoy es un apartado de `lectura-de-planos-electricos` |
| `instalacion-de-iluminacion-y-tomas` | `tecnicas-electricista` | Circuito de iluminación, tomacorrientes, mixtos, independientes, luminarias | baja | OF1 §5 |

## 4. Gasista (`OF6`) — 7 temas

**Cubre hoy**: fundamentos, seguridad (CO, fugas, qué no hacer), herramientas, materiales, instalaciones, cálculo, diagnóstico.
**Lagunas**: la sección **8. Normativa** (categoría de habilitación) quedó solo como apartado de `instalaciones-gasista`. Es el oficio con mayor distancia teoría–habilitación; el diseño pide que pese más el disclaimer.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `normativa-gasista-categorias-y-habilitacion` | `instalaciones-gasista` | Categorías de habilitación, matrícula, disclaimer legal, quién puede hacer qué | **alta** | **NAG-200** (reglamento técnico argentino, 234 págs.), ya identificado como fuente definitiva |
| `prueba-de-hermeticidad-paso-a-paso` | `herramientas-gasista` | Procedimiento de prueba, registros, criterios de aprobación | media | Hoy es un apartado de herramientas |
| `artefactos-a-gas-instalacion-y-puesta-en-marcha` | `materiales-gasista`, `seguridad-gasista` | Cocina, calefón, caldera: conexión, ventilación, verificación | media | OF6 §4–5 |

## 5. Mecánico (`OF5`) — 9 temas (el más completo después de Albañil)

**Cubre hoy**: fundamentos, seguridad, motor, transmisión, eléctrico del vehículo, frenos y suspensión, diagnóstico (scanner), mantenimiento (con normativa VTV).
**Lagunas**: dos ramas **confirmadas por Javier el 2026-08-13** nunca generadas.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `vehiculo-electrico-fundamentos` | `sistemas-electricos-vehiculo`, `frenos-y-suspension` | Motor único, reductora, sin embrague, frenado regenerativo, batería de alta tensión y su seguridad | **alta** | Carpeta "Mecánica Automotriz" `funcionamiento-de-un-auto-electrico`. Confirmado, **no generado** (hoy solo aparece como nota en frenos) |
| `mecanico-de-motos` (rama, 4–6 temas) | `fundamentos-mecanicos-automotor` | Motor 2 tiempos y 4 tiempos, carburación, cadena de transmisión, encendido CDI, frenos y suspensión de moto | **alta** | *Manual Reparación de Motocicletas* (INATEC) + motor de dos tiempos + *Carburación y gases 2T/4T*. Confirmado, **no generado** |
| `inyeccion-electronica-y-sensores` | `motor`, `sistemas-electricos-vehiculo` | Inyección, sensores principales, relación con códigos OBD | media | Bosch (citado como fuente en la planificación) |
| `emisiones-y-verificacion-tecnica` | `mantenimiento-mecanico` | VTV, emisiones vehiculares, catalizador | media | OF5 §9; hoy un apartado |

## 6. Plomero (`OF2`) — 7 temas

**Cubre hoy**: fundamentos, seguridad, herramientas, materiales, instalaciones (con normativa y frontera con gasista), cálculo, diagnóstico.
**Lagunas** (comprobado: sin menciones de "código de edificación"): normativa plegada en `instalaciones-plomeria`; agua caliente casi sin tratar.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `agua-caliente-sanitaria` | `instalaciones-plomeria` | Termotanque, calefón, calentamiento solar, recirculación, riesgos | media | OF2 §5 ("instalación de agua caliente") |
| `sellos-juntas-y-uniones` | `materiales-plomeria` | Teflón, sellos, juntas, selección según material | media | OF2 §4; hoy un ítem de uniones |
| `normativa-plomeria-y-matricula` | `instalaciones-plomeria` | Código de edificación, matrícula, frontera gasista/plomero | media | OF2 §8; guía **AYSA** como fuente argentina |

## 7. Soldador (`OF8`) — 6 temas

**Cubre hoy**: fundamentos, seguridad, materiales, procesos (SMAW, MIG/MAG, TIG, autógena), defectos y normativa, diagnóstico.
**Lagunas**: la normativa/certificación está unida a defectos.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `certificacion-iram-ias-por-proceso-y-posicion` | `defectos-y-normativa-soldadura` | Calificación de soldadores, posiciones (1G–6G), alcance por proceso | alta | UNLP (3 archivos: amperaje, electrodos, posiciones) |
| `inspeccion-y-ensayos-de-soldadura` | `defectos-y-normativa-soldadura` | Inspección visual, líquidos penetrantes, ultrasonido, radiografía | media | OF8 §7 |
| `parametros-de-soldadura-amperaje-y-electrodos` | `procesos-soldadura` | Selección de amperaje, electrodo y velocidad | media | UNLP |

## 8. Metalúrgico (`OF9`) — 6 temas

**Cubre hoy**: fundamentos, seguridad, procesos (fundición, laminado, forjado, tratamientos), materiales, control de calidad (dureza, normativa), diagnóstico.
**Lagunas**: un único apartado por proceso; fundición sin moldeo ni colada.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `fundicion-moldeo-y-colada` | `procesos-metalurgicos` | Moldes de arena, coquilla, colada, defectos de fundición | media | OF9 §3; apoya el caso "defecto de fundición" del diagnóstico |
| `tratamientos-termicos-en-detalle` | `procesos-metalurgicos` | Temple, revenido y recocido con curvas y ejemplos | media | Compartido con `ciencia-de-materiales` |
| `normas-de-calidad-de-proceso-metalurgico` | `control-de-calidad-metalurgico` | IRAM/ASTM de composición y ensayos, trazabilidad | baja | OF9 §7 |

## 9. Montador de estructuras (`OF10`) — 6 temas

**Cubre hoy**: fundamentos, seguridad (altura, arnés, izaje), herramientas, materiales, técnicas (secuencia, plomado, arriostramiento, normativa), diagnóstico.
**Lagunas**: normativa dentro de técnicas; el diseño tiene 7 secciones y quedan 6 más diagnóstico.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `izaje-y-aparejos-en-detalle` | `seguridad-montaje-estructuras` | Tablas de carga, eslingas, señales de maniobra, inspección de equipos | alta | OF10 §2–3; seguridad crítica |
| `certificacion-y-habilitacion-trabajo-en-altura` | `tecnicas-montaje-estructuras` | Certificación de soldadura estructural, habilitación para altura | alta | OF10 §7 |
| `uniones-abulonadas-y-torque` | `materiales-montaje-estructuras` | Tipos de bulón, pretensado, torque, control | media | OF10 §3–4 |

## 10. Panadero (`OF14`) — 6 temas

**Cubre hoy**: fundamentos, seguridad e higiene, materia prima, procesos (con normativa), cálculo, diagnóstico.
**Lagunas**: nada de productos más allá del pan, masa madre apenas tocada, rotulado como apartado.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `habilitacion-bromatologica-y-rotulado` | `procesos-panaderia` | Habilitación municipal, Código Alimentario Argentino, rotulado, alérgenos en etiqueta | alta | OF14 §7. Compartida con Procesador de alimentos |
| `masa-madre-y-prefermentos` | `procesos-panaderia` | Masa madre, poolish, biga, mantenimiento del cultivo | media | Complementa `fermentacion-panadera` |
| `panificados-de-factura-y-pasteleria-basica` | `procesos-panaderia` | Facturas, medialunas, masas laminadas | baja | Ampliación opcional (la planificación solo cubre "tipos de pan") |

## 11. Procesador de alimentos (`OF15`) — 5 temas

**Cubre hoy**: fundamentos (calor y concentración), seguridad e higiene (HACCP), procesos (pasteurización, conservación, envasado, deshidratación con normativa), cálculo, diagnóstico.
**Lagunas**: BPM sin tratar; normativa y trazabilidad plegadas en procesos.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `buenas-practicas-de-manufactura-bpm` | `seguridad-e-higiene-procesamiento-alimentos` | BPM, POES, higiene de planta y personal | alta | Compartida con Panadero |
| `habilitacion-bromatologica-y-trazabilidad` | `procesos-procesamiento-alimentos` | Habilitación industrial, CAA, trazabilidad hacia atrás y adelante | alta | OF15 §6. Compartida con Panadero |
| `haccp-aplicado-a-un-proceso` | `seguridad-e-higiene-procesamiento-alimentos` | Peligros, puntos críticos, límites, monitoreo con un caso | media | Hoy es apartado "HACCP básico" |

## 12. Técnico en refrigeración y climatización (`OF7`) — 6 temas

**Cubre hoy**: termodinámica, eléctrico, seguridad (con normativa HFC/HFO), herramientas, instalación (split, central, cámaras, normativa Montreal/Kigali), diagnóstico (4 casos).
**Lagunas**: "habilitación de refrigeración" casi sin tratar; climatización (confort, carga térmica) solo como instalación.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `habilitacion-y-normativa-refrigeracion` | `seguridad-refrigeracion` | Matrícula, manejo de gases HFC/HFO, Protocolos de Montreal y Kigali, registros | alta | OF7 §7 |
| `compresores-evaporadores-y-condensadores` | `fundamentos-termodinamicos-refrigeracion` | Tipos de compresor, evaporador y condensador a fondo | media | Carpeta de Refrigeración (Danfoss, 12 archivos) |
| `calculo-de-carga-termica-y-climatizacion` | `fundamentos-termodinamicos-refrigeracion` | Carga térmica, dimensionamiento de equipo, confort | media | Calor latente/sensible ya tratado en fundamentos |
| `carga-de-gas-y-vacio-procedimiento` | `herramientas-refrigeracion` | Vacío, carga, recuperación, prueba | media | Hoy un apartado de instalaciones |

## 13. Técnico electromecánico (`OF11`) — 8 temas, **18 secciones en el diseño**

**Cubre hoy**: 8 lecciones de 359–600 palabras que condensan 18 secciones (fundamentos, mecánica, materiales/mecanizado, elementos de máquinas, hidráulica y neumática, máquinas eléctricas, control, instrumentación, mantenimiento, seguridad, diagnóstico).
**Lagunas**: densidad. Cada lección tiene 5 ítems en ~380 palabras. Es el oficio donde más se pierde del diseño.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `hidraulica-industrial` | `elementos-de-maquinas-y-fluidos` | Principios, bombas, válvulas, actuadores, circuitos | media | EEST Nº1 (programa 7° año), citado como fuente más valiosa |
| `neumatica-industrial` | `elementos-de-maquinas-y-fluidos` | Compresor, válvulas, cilindros, circuitos básicos | media | EEST Nº1 |
| `mecanizado-torno-fresadora-cnc` | `materiales-y-mecanizado-electromecanica` | Torno, fresadora, fundamentos CNC, tolerancias | media | Comparte con el oficio **Tornero** (ver compartidos) |
| `maquinas-electricas-motores-y-transformadores` | `fundamentos-electromecanica` | Motores CC/CA, generadores, transformadores, placa de características | alta | Comparte con Electricista §13 |
| `plc-y-automatismos` | `control-y-automatizacion` | PLC, lógica de contactos, HMI/SCADA | media | OF11 §12; compartido con Robótica |
| `mantenimiento-predictivo-y-gestion-de-ordenes` | `mantenimiento-e-instrumentacion` | Termografía, vibraciones, orden de trabajo, almacén de repuestos | baja | Apartado actual |

## 14. Técnico en automatización y robótica (`OF16`) — 8 temas, **19 secciones en el diseño**

**Cubre hoy**: fundamentos, actuadores y sensores, microcontroladores, cinemática y dinámica, robótica industrial y visión, IA y ROS, seguridad y comunicaciones, diagnóstico. Lecciones de 310–460 palabras. Es el oficio con teoría más corta de los 18.
**Lagunas**: sensores/actuadores de a pares; control y navegación sin lección propia; seguridad y comunicaciones en una sola.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `seguridad-en-robotica-industrial` (separada de comunicaciones) | `robotica-industrial-y-vision` | Zonas de trabajo, robots colaborativos (cobots), paradas de emergencia, normas | alta | Hoy comparte lección con comunicaciones (310 palabras) |
| `protocolos-de-comunicacion-robotica` | `microcontroladores-y-programacion-embebida` | Bus de campo, comunicación serie, protocolos industriales | media | Separar de la anterior |
| `servomotores-motores-paso-a-paso-y-bldc` | `actuadores-y-sensores-robotica` | Cada tipo de motor, driver y lazo de control | media | OF16 §7 |
| `encoders-imu-y-camaras` | `actuadores-y-sensores-robotica` | Sensores propioceptivos y exteroceptivos | media | OF16 §8 |
| `planificacion-de-trayectoria-y-navegacion` | `cinematica-y-dinamica-robotica` | Planificación, SLAM, evitación de obstáculos | baja | OF16 §16 |
| `control-lazo-cerrado-y-pid-en-robotica` | `cinematica-y-dinamica-robotica` | Control de trayectoria, PID aplicado | media | Comparte con Electromecánico (`CTRL1-3a`) |

## 15. Agricultor (`OF12`) — 6 temas

**Cubre hoy**: fundamentos, seguridad, suelo y cultivo, modelos de producción (OF18), cálculo, diagnóstico.
**Lagunas**: toda la sección **8. Especializaciones (OF17a–d)** está en `troncos.md` y nunca se generó; y **control integrado de plagas** y **cosecha** del diseño están plegados.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `ganaderia-rumiantes-aves-y-cerdos` (OF17a) | `fundamentos-agricultura` | Cría de bovinos/ovinos, avicultura, producción porcina, sanidad | alta | `troncos.md` OF17a. Planificado, **no generado** |
| `apicultura` (OF17b) | `fundamentos-agricultura` | Colmena, manejo, sanidad, cosecha de miel | alta | OF17b, no generado |
| `horticultura` (OF17c) | `suelo-y-cultivo` | Cultivos hortícolas, protegidos, riego | alta | OF17c, no generado |
| `fruticultura` (OF17d) | `suelo-y-cultivo` | Frutales, poda, sanidad, cosecha | alta | OF17d, no generado |
| `control-integrado-de-plagas` | `suelo-y-cultivo`, `seguridad-agricultura` | MIP, umbrales, control biológico y químico | media | OF12 §5; hoy un ítem |
| `cosecha-y-poscosecha` | `suelo-y-cultivo` | Momento de cosecha, pérdidas, almacenamiento | baja | OF12 §5 |

## 16. Operario agrícola (`OF13`) — 5 temas

**Cubre hoy**: fundamentos, seguridad, maquinaria, dosificación, diagnóstico.
**Lagunas**: pocas, el oficio es chico por diseño. Calibración de pulverizadora y sembradora como lección práctica.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `calibracion-de-sembradora-y-pulverizadora` | `dosificacion-agricola`, `maquinaria-agricola` | Calibración paso a paso con cálculo | media | Complementa dosificación |
| `mantenimiento-de-maquinaria-agricola` (lección propia) | `maquinaria-agricola` | Plan de mantenimiento por horas de uso | media | OF13 §3, hoy un apartado |

## 17. Relojero (`OF27`) — 6 temas

**Cubre hoy**: fundamentos, seguridad, materiales (aceites, solventes), herramientas, técnicas (desmontaje, ultrasonido, engrase, montaje), diagnóstico (22 preguntas). Fuente chica por naturaleza (4 artículos).
**Lagunas**: tipos de movimiento y complicaciones, normativa.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `tipos-de-movimiento-manual-automatico-y-cuarzo` | `fundamentos-relojeria` | Mecánico manual, automático, cuarzo: cómo se diferencian y se reparan | media | OF27 §1; hoy un ítem |
| `complicaciones-cronografo-y-calendario` | `tecnicas-relojeria` | Cronógrafo, calendario, reserva de marcha | baja | Ampliación sugerida |
| `oficio-artesanal-y-mercado` | `diagnostico-relojeria-por-casos` | Oficio libre sin habilitación, presupuesto, repuestos | baja | OF27 §7 |

## 18. Tapicero (`OF21`) — 6 temas

**Cubre hoy**: fundamentos, seguridad, materiales, herramientas, técnicas (corte, cosido, acolchado, montaje), diagnóstico (22 preguntas).
**Lagunas** (comprobado: sin menciones de inflamabilidad): normativa y sistemas de suspensión.

| Carpeta propuesta | Prerrequisitos | Contenido | Prioridad | Fuente |
|---|---|---|---|---|
| `normativa-e-inflamabilidad-en-tapiceria` | `materiales-tapiceria` | Telas ignífugas para uso público/comercial, sin habilitación matriculada | media | OF21 §7 |
| `sistemas-de-suspension-y-acojinado` | `materiales-tapiceria` | Muelles, cinchas, gomaespuma, densidades | media | *Manual de Tecnología de la Tapicería* (ONUDI) |
| `tapizado-de-automotor-y-cuero` | `tecnicas-tapiceria` | Cuero y guarniciones, trabajos de automotor | baja | ONUDI |

---

## Resumen: temas compartidos que se pueden escribir una sola vez

| Tema compartido | Oficios que lo usan | Nota |
|---|---|---|
| **Habilitación bromatológica, CAA y rotulado** | Panadero, Procesador de alimentos (y Cocina/Gastronomía) | Una lección única en `procesador-de-alimentos`, referenciada desde `panadero` |
| **Buenas prácticas de manufactura (BPM/POES)** | Panadero, Procesador de alimentos | Hoy ninguno la trata |
| **Soldadura estructural** | Soldador, Montador de estructuras | Ya está marcado como nodo compartido (OF10 §3) |
| **Calor, temperatura y calor latente** | Soldador, Metalúrgico, Procesador, Refrigeración | Viene de `fisica/` (`TER2`), no reescribir |
| **Tratamientos térmicos y propiedades mecánicas** | Metalúrgico, Soldador, Mecánico, Electromecánico | Nodos `CM3`/`CM4` en Ciencia de Materiales |
| **Electricidad básica y seguridad eléctrica** | Electricista, Refrigeración, Electromecánico, Robótica, Mecánico (12/24 V) | El diseño ya lo marca; falta la **seguridad ELÉCTRICA** específica (no la de laboratorio) |
| **Motores eléctricos, trifásica y contactores** | Electricista (§12–13), Electromecánico | Una sola lección `maquinas-electricas-...` |
| **PLC, sensores/actuadores y control PID** | Electromecánico, Robótica | Nodos `CTRL1`–`CTRL5`, `EL5` |
| **Mecanizado (torno, fresadora, CNC)** | Electromecánico, Tornero | Evitar duplicar con `oficios/tornero` |
| **Fundamentos mecánicos (trabajo, energía, torque)** | Mecánico, Electromecánico, Operario agrícola, Relojero | Un solo nodo ya declarado; Operario agrícola y Relojero lo toman por prerrequisito |
| **Normativa de habilitación como lección corta** | todos | Patrón común: concepto → riesgo → norma → "saber vs. estar habilitado". Se puede escribir con una plantilla y adaptar por oficio |
| **Instalaciones de agua y gas: frontera Plomero/Gasista** | Plomero, Gasista | Un solo párrafo común |

## Prioridad global sugerida (si se genera)

1. **Alta, rama ya confirmada**: `vehiculo-electrico-fundamentos`, `mecanico-de-motos`, OF17a–d del Agricultor.
2. **Alta, seguridad/habilitación**: normativa de Gasista (NAG-200), AEA para Electricista, habilitación de Refrigeración, izaje y altura del Montador, seguridad de robótica (separar de comunicaciones).
3. **Alta, compartidos**: BPM y habilitación bromatológica (Panadero + Procesador).
4. **Media**: lecciones propias de sub-ítems planificados (terminaciones y aislación del Albañil, hidráulica/neumática del Electromecánico, inspección de soldadura, etc.).
5. **Evaluación**: subir los 18 `diagnostico-*` a 20+ preguntas y sumar los casos de los temas nuevos.
