# Plan de temas faltantes — materias técnicas y de diseño

> Documento de planificación (NO se generó nada). Alcance: UX/Diseño (`diseño/`), Electrónica, Automatización, Dibujo técnico y Ciencia de Materiales (`materiales/`).
> Método: se leyeron los `teoria.md` existentes (cada materia tiene 5-6 temas de 4-5 secciones), `dependencias.md` de cada una, los troncos 14, 17, 19, 20 y 21 de `troncos.md` y los oficios vecinos (`oficios/electricista`, `tecnico-electromecanico`, `tecnico-en-automatizacion-y-robotica`, `tecnico-en-refrigeracion`) para no duplicar.
> Convenciones: carpeta en kebab-case; los prerrequisitos son carpetas que **existen hoy** (ruta relativa a `material/`) o temas **(nuevo)** de este mismo plan. Fuentes: sugeridas, hay que verificarlas contra el original antes de generar; no se hardcodean cifras que cambian (normas con versión, precios, tarifas). Antes de generar, repetir la comprobación de PLAN-REPARACIONES-TRONCOS.md: que el nodo no exista ya con otro nombre en `troncos.md`.
> Cada tema nuevo exige el flujo de `PROCEDIMIENTO.md` (fila en `dependencias.md`, `teoria.md`, `cuestionario.md` de al menos 20 preguntas validadas) y, si entra en examen jefe, rehacer los clusters (`_qa_tools/gen_examen_jefe_prereq_clusters.py`).

## Hallazgos transversales

- Las cinco materias tienen una **sola rama lineal de 5-6 nodos** (`A --> B --> C ...`): lo que existe es una introducción, no una materia. Ninguna tiene un tema de práctica, de cálculo con números ni de caso integrador.
- Los `teoria.md` existentes son de tipo "Presentación" conceptual. Faltan en las cinco los temas **cuantitativos** (con parámetros sorteables en VBLang), que son los que mejor rinden en cuestionario.
- Las ramas de Electrónica y Automatización están repetidas, a nivel oficio, en `oficios/tecnico-electromecanico` y `oficios/tecnico-en-automatizacion-y-robotica`. Los temas nuevos de acá son el **nivel académico de base**; los oficios deberían apuntarles como prerrequisito (`../../electronica/...`) en vez de repetir teoría. Hoy no lo hacen.
- Hay solapamientos con otras materias que se resuelven con prerrequisitos cruzados, no copiando: `fisica/` (ley de Ohm, potencia eléctrica, inducción de Faraday, circuitos serie/paralelo/mixtos), `informatica/` (álgebra booleana, sistemas de numeración, operadores lógicos), `quimica/` (oxidación-reducción, enlace químico, polímeros naturales/sintéticos), `matematica/` (derivada, integral, trigonometría, volumen).

---

## 1. UX / Diseño de interfaces (`diseño/`) — hoy 5 temas

**Qué cubre hoy.** Heurísticas de Nielsen (solo 4 de las 10 se mencionan: visibilidad del estado, prevención y recuperación de errores, consistencia), WCAG (contraste y semántica HTML, sin niveles A/AA/AAA ni teclado/foco), jerarquía visual (contraste y proximidad de Gestalt, sin tipografía ni color), prototipado (wireframe/mockup/prototipo) y pruebas de usuario (moderador, sesgo, tareas, 5-8 participantes).

**Lagunas reales.** No hay investigación previa al diseño (usuarios, personas, entrevistas), ni arquitectura de información, ni tipografía, ni color, ni sistemas de diseño, ni diseño responsive, ni métricas posteriores al lanzamiento. Los propios `teoria.md` anuncian temas que no existen: `tipografia`, `colores`, `evaluacion de usabilidad`, `analisis de datos`, `niveles wcag`, `flujo de trabajo`. Esos seis nombres son los primeros huecos confirmados.

| Tema nuevo | Prerrequisitos | Contenido (1 línea) | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `investigacion-de-usuarios-entrevistas-y-personas` | `usabilidad-heuristicas-de-nielsen/`, `../investigacion/tecnicas-de-investigacion-social/` | Entrevistas, observación, encuestas, personas y escenarios; qué se pregunta y qué no. | Alta | Nielsen Norman Group (artículos de user research); Cooper, *About Face*. |
| `heuristicas-de-nielsen-las-diez-completas` | `usabilidad-heuristicas-de-nielsen/` | Completa las seis heurísticas no vistas (control del usuario, reconocer antes que recordar, flexibilidad, minimalismo, ayuda, correspondencia con el mundo real) con casos de evaluación heurística. | Alta | Nielsen, "10 Usability Heuristics for User Interface Design". |
| `arquitectura-de-informacion-y-navegacion` | `jerarquia-visual-e-informacion/` | Mapas de sitio, card sorting, etiquetado y patrones de navegación (menú, migas, pestañas). | Alta | Rosenfeld y Morville, *Information Architecture*. |
| `tipografia-en-interfaces` | `jerarquia-visual-e-informacion/` | Familias, escala tipográfica, interlineado, longitud de línea, legibilidad en pantalla. | Alta | Bringhurst, *Elements of Typographic Style*; Material Design (documentación pública). |
| `color-en-interfaces` | `jerarquia-visual-e-informacion/`, `../arte/principios-de-diseno/` | Paleta, rol semántico del color (éxito, error), daltonismo, modo oscuro. | Alta | Material Design; guías de color de WCAG. |
| `niveles-wcag-a-aa-aaa-y-navegacion-por-teclado` | `accesibilidad-wcag-contraste-lectores-de-pantalla/` | Principios POUR, niveles de conformidad, foco visible, orden de tabulación, alternativas de texto. | Alta | W3C, WCAG 2 (versión vigente al generar); Ley 26.653 de accesibilidad web. |
| `diseno-responsive-y-mobile-first` | `prototipado-wireframe-mockup-prototipo-interactivo/` | Puntos de quiebre, grillas fluidas, tamaño mínimo táctil, prioridad de contenido en pantalla chica. | Media | Marcotte, *Responsive Web Design*; Material Design. |
| `formularios-y-microinteracciones` | `usabilidad-heuristicas-de-nielsen/` | Validación en línea, mensajes de error útiles, estados de carga y vacíos, retroalimentación. | Media | Wroblewski, *Web Form Design*. |
| `sistemas-de-diseno-y-componentes` | `prototipado-wireframe-mockup-prototipo-interactivo/`, `color-en-interfaces` (nuevo), `tipografia-en-interfaces` (nuevo) | Tokens, librería de componentes, documentación y consistencia entre equipos. | Media | Frost, *Atomic Design*; documentación pública de sistemas de diseño abiertos. |
| `evaluacion-heuristica-y-metodos-sin-usuarios` | `heuristicas-de-nielsen-las-diez-completas` (nuevo) | Cómo se hace una inspección heurística y un recorrido cognitivo, severidad de problemas. | Media | Nielsen, *Usability Inspection Methods*. |
| `analisis-de-datos-de-uso-y-metricas-ux` | `pruebas-de-usuario/`, `../matematica/media-mediana-y-moda/` | Tasa de éxito, tiempo en tarea, SUS, pruebas A/B; convertir hallazgos en prioridades. | Media | Tullis y Albert, *Measuring the User Experience*. |
| `diseno-centrado-en-el-usuario-flujo-de-trabajo` | `investigacion-de-usuarios-entrevistas-y-personas` (nuevo), `prototipado-wireframe-mockup-prototipo-interactivo/` | Ciclo investigar-idear-prototipar-probar-iterar; roles; Design Thinking y su crítica. | Media | Norman, *The Design of Everyday Things*. |
| `diseno-de-interfaces-para-voz-y-conversacion` | `usabilidad-heuristicas-de-nielsen/` | Principios de interfaces conversacionales y de voz; accesibilidad auditiva. | Baja | Documentación pública de diseño conversacional. |
| `etica-del-diseno-patrones-oscuros` | `usabilidad-heuristicas-de-nielsen/`, `../ciudadania-digital/` (carpeta de la materia) | Patrones oscuros, consentimiento, privacidad por diseño, impacto en usuarios vulnerables. | Baja | Brignull, *Deceptive Patterns* (sitio público). |

Total propuesto: 14 (6 de prioridad alta).

---

## 2. Electrónica (`electronica/`) — hoy 5 temas

**Qué cubre hoy.** Resistencia, capacitor, diodo y transistor (todos en una sola carpeta, sin valores), leyes de Kirchhoff (KCL, KVL), puertas AND/OR/NOT con tablas de verdad, diferencia microcontrolador/microprocesador y sensores/actuadores (ciclo básico).

**Lagunas reales.** El tema de componentes junta cuatro dispositivos en cuatro secciones: no hay cálculo (código de colores, divisor de tensión, constante RC, polarización del diodo, ganancia). Faltan inductores y bobinas, fuentes y rectificación, amplificador operacional, temporizador 555, puertas NAND/NOR/XOR, lógica combinacional y secuencial (flip-flops, contadores), conversión analógico-digital, medición (multímetro, osciloscopio), prototipado y soldadura, seguridad. Es la materia donde más se nota que el nivel oficio (`tecnico-electromecanico/maquinas-electricas-y-electronica`, `tecnico-en-automatizacion-y-robotica/microcontroladores-y-programacion-embebida`) tiene más detalle que el nivel académico base.

| Tema nuevo | Prerrequisitos | Contenido (1 línea) | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `divisor-de-tension-y-codigo-de-colores` | `componentes-resistencia-capacitor-diodo-transistor/`, `../fisica/ley-de-ohm/` | Código de colores, series de valores, divisor de tensión, potencia disipada. | Alta | Horowitz y Hill, *The Art of Electronics*. |
| `capacitor-rc-carga-y-descarga` | `componentes-resistencia-capacitor-diodo-transistor/`, `../matematica/ecuaciones-exponenciales-logaritmicas/` | Constante de tiempo, curva de carga y descarga, filtros RC simples. | Alta | Horowitz y Hill; Sadiku, *Fundamentos de circuitos eléctricos*. |
| `inductores-y-bobinas` | `../fisica/induccion-electromagnetica-faraday-lenz/`, `circuitos-y-leyes-de-kirchhoff/` | Autoinducción, comportamiento en continua y alterna, usos en fuentes y filtros. | Media | Sadiku. |
| `diodo-polarizacion-rectificacion-y-fuentes` | `componentes-resistencia-capacitor-diodo-transistor/` | Polarización directa e inversa, rectificador de media onda y onda completa, filtro, regulador. | Alta | Floyd, *Dispositivos electrónicos*. |
| `transistor-como-interruptor-y-amplificador` | `componentes-resistencia-capacitor-diodo-transistor/`, `divisor-de-tension-y-codigo-de-colores` (nuevo) | Polarización del BJT, corte-saturación, ganancia, resistencia de base. | Alta | Floyd. |
| `amplificador-operacional` | `transistor-como-interruptor-y-amplificador` (nuevo) | Configuraciones inversora, no inversora, seguidor, sumador y comparador. | Media | Horowitz y Hill; Floyd. |
| `senales-analogicas-y-digitales-adc-dac` | `sensores-y-actuadores/`, `logica-digital-puertas-and-or-not/` | Muestreo, resolución en bits, cuantización; ADC y DAC. | Alta | Proakis; manuales de fabricante. |
| `compuertas-nand-nor-xor-y-universalidad` | `logica-digital-puertas-and-or-not/`, `../informatica/algebra-booleana/` | NAND/NOR como universales, XOR, De Morgan en circuitos. | Alta | Mano, *Diseño digital*. |
| `logica-combinacional-sumadores-multiplexores` | `compuertas-nand-nor-xor-y-universalidad` (nuevo), `../informatica/sistemas-numeracion/` | Semisumador, sumador completo, multiplexor, decodificador. | Alta | Mano. |
| `logica-secuencial-flip-flops-y-contadores` | `logica-combinacional-sumadores-multiplexores` (nuevo) | Latch, flip-flop D y JK, registros, contadores, reloj. | Media | Mano. |
| `temporizador-555-y-osciladores` | `capacitor-rc-carga-y-descarga` (nuevo) | Modos astable y monoestable, cálculo de frecuencia y ciclo de trabajo. | Media | Hoja de datos pública del 555. |
| `microcontrolador-entradas-y-salidas-digitales` | `microcontroladores-y-microprocesadores/`, `../informatica/estructuras-de-control-bucles/` | Pines digitales, pull-up/pull-down, rebote, PWM básico. | Alta | Documentación de Arduino (pública). |
| `comunicacion-serie-uart-i2c-spi` | `microcontrolador-entradas-y-salidas-digitales` (nuevo) | Protocolos de comunicación entre chips, direcciones, velocidad. | Media | Manuales de fabricante. |
| `instrumentos-de-medicion-multimetro-y-osciloscopio` | `circuitos-y-leyes-de-kirchhoff/` | Medir tensión, corriente, resistencia; leer una traza de osciloscopio; incertidumbre. | Alta | Manuales de fabricante; Horowitz y Hill. |
| `prototipado-protoboard-soldadura-y-seguridad` | `instrumentos-de-medicion-multimetro-y-osciloscopio` (nuevo) | Armado en protoboard, soldadura de componentes, descarga electrostática, seguridad. | Media | Guías IPC públicas; `oficios/electricista/seguridad-electricista` como referencia cruzada. |

Total propuesto: 15 (8 de prioridad alta).

---

## 3. Automatización (`automatizacion/`) — hoy 5 temas

**Qué cubre hoy.** Lazo abierto vs. cerrado, realimentación y tipos, PID (P, I y D en un solo tema), PLC (componentes y ciclo de scan) y servomecanismos (error de seguimiento).

**Lagunas reales.** Es una materia de control sin matemática de control: no hay modelos de sistemas, respuesta transitoria, estabilidad ni sintonía de PID. Del PLC solo hay el panorama, sin lenguajes (ladder, bloques, texto estructurado), temporizadores, contadores, GRAFCET ni E/S. Faltan neumática e hidráulica, motores y variadores, instrumentación industrial, SCADA y redes industriales, seguridad funcional, mantenimiento. Ya existe un tema `ladder` sólo dentro de oficios y no a nivel académico.

| Tema nuevo | Prerrequisitos | Contenido (1 línea) | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `modelado-de-sistemas-dinamicos-primer-orden` | `lazo-abierto-vs-lazo-cerrado/`, `../matematica/derivada/` | Sistema de primer orden, constante de tiempo, ganancia, respuesta al escalón. | Alta | Ogata, *Ingeniería de control moderna*. |
| `respuesta-transitoria-y-regimen-permanente` | `modelado-de-sistemas-dinamicos-primer-orden` (nuevo) | Tiempo de subida, sobreimpulso, tiempo de establecimiento, error en régimen. | Alta | Ogata. |
| `estabilidad-de-sistemas-de-control` | `respuesta-transitoria-y-regimen-permanente` (nuevo) | Qué es la estabilidad, polos y su efecto, criterio de Routh (nivel introductorio). | Media | Ogata; Dorf y Bishop. |
| `sintonia-de-pid-metodos-practicos` | `control-pid-proporcional-integral-derivativo/`, `respuesta-transitoria-y-regimen-permanente` (nuevo) | Ziegler-Nichols, ajuste por prueba y error, ventana de integración (windup). | Alta | Åström y Hägglund, *PID Controllers*. |
| `control-on-off-con-histeresis` | `lazo-abierto-vs-lazo-cerrado/` | Control todo-nada, banda de histéresis, ejemplos de termostato. | Alta | Ogata; manuales de controladores. |
| `plc-lenguaje-ladder-contactos-y-bobinas` | `plc-logica-de-control-industrial/`, `../electronica/logica-digital-puertas-and-or-not/` | Contactos NA/NC, bobinas, enclavamiento, arranque-parada. | Alta | IEC 61131-3 (resumen público); manuales de fabricantes. |
| `plc-temporizadores-contadores-y-secuencias` | `plc-lenguaje-ladder-contactos-y-bobinas` (nuevo) | TON, TOF, contadores, secuencias simples. | Alta | IEC 61131-3. |
| `grafcet-y-automatismos-secuenciales` | `plc-lenguaje-ladder-contactos-y-bobinas` (nuevo) | Etapas, transiciones, acciones; de la descripción al programa. | Media | Norma IEC 60848; Balcells y Romeral, *Autómatas programables*. |
| `neumatica-e-hidraulica-basica` | `../fisica/presion-f-sobre-a/`, `plc-logica-de-control-industrial/` | Cilindros, válvulas distribuidoras, esquemas FluidSIM, diferencias aire-aceite. | Media | Festo (material didáctico público). |
| `motores-electricos-y-variadores-de-frecuencia` | `../fisica/induccion-electromagnetica-faraday-lenz/`, `servomecanismos/` | Motor CC, paso a paso y trifásico; arranque; para qué sirve un variador. | Media | Chapman, *Máquinas eléctricas*. |
| `instrumentacion-industrial-y-lazos-4-20-ma` | `../electronica/sensores-y-actuadores/`, `realimentacion-feedback/` | Transmisores, señal 4-20 mA, calibración, P&ID básico. | Media | Creus, *Instrumentación industrial*. |
| `redes-industriales-y-scada` | `plc-logica-de-control-industrial/`, `../informatica/protocolo-http-peticion-respuesta/` (no hay tema de redes industriales previo; verificar si conviene un tema de redes más general) | Modbus, buses de campo, HMI y SCADA a nivel conceptual. | Baja | Documentación pública de protocolos. |
| `seguridad-funcional-y-paradas-de-emergencia` | `plc-logica-de-control-industrial/` | Parada de emergencia, enclavamientos, categorías de seguridad (conceptual). | Media | Norma ISO 13849 (resumen público). |
| `mantenimiento-y-diagnostico-de-sistemas-automatizados` | `instrumentacion-industrial-y-lazos-4-20-ma` (nuevo) | Búsqueda de fallas en lazos y PLC, mantenimiento predictivo vs. preventivo. | Baja | `oficios/tecnico-electromecanico/mantenimiento-e-instrumentacion` como referencia cruzada. |

Total propuesto: 14 (6 de prioridad alta).

---

## 4. Dibujo técnico (`dibujo-tecnico/`) — hoy 5 temas

**Qué cubre hoy.** Sistemas de proyección (ortogonal, axonométrica, oblicua), vistas (frontal, superior, lateral), perspectivas isométrica y caballera, escalas (numéricas y gráficas) y acotación normalizada.

**Lagunas reales.** Es toda la geometría de representación pero ninguno de los elementos que hacen un plano: instrumentos y trazos, tipos de línea normalizados, rotulado y formatos de papel, cortes y secciones, vistas auxiliares, tolerancias y ajustes, rugosidad, planos de conjunto, despieces, símbolos de soldadura, y dibujo asistido por computadora. Tampoco hay dibujo arquitectónico, a pesar de que el Tronco 14 se titula "Dibujo Técnico y Arquitectura". `ingenieria/comunicar-la-solucion` menciona los planos pero remite a algo que acá no está.

| Tema nuevo | Prerrequisitos | Contenido (1 línea) | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `instrumentos-de-dibujo-y-trazos-basicos` | `sistemas-de-proyeccion/` | Escuadras, compás, lápices y durezas, trazado a mano alzada. | Media | Giesecke, *Dibujo técnico*. |
| `tipos-de-linea-formatos-y-rotulo` | `instrumentos-de-dibujo-y-trazos-basicos` (nuevo) | Línea continua, de trazos, de eje; formatos A0-A4; cajetín y lista de piezas. | Alta | Normas IRAM e ISO de dibujo técnico (versión vigente al generar). |
| `geometria-constructiva-tangencias-y-enlaces` | `instrumentos-de-dibujo-y-trazos-basicos` (nuevo), `../matematica/angulos/` | Perpendiculares, bisectrices, polígonos regulares, tangencias y empalmes. | Alta | Giesecke; Jensen y Helsel. |
| `cortes-y-secciones` | `vistas-frontal-superior-lateral/` | Corte total, medio corte, sección abatida, rayado; cuándo cortar. | Alta | Giesecke; IRAM 4505. |
| `vistas-auxiliares-y-detalles` | `cortes-y-secciones` (nuevo) | Vistas auxiliares, de detalle y parciales de piezas con caras inclinadas. | Media | Giesecke. |
| `interpretar-planos-de-piezas-y-conjuntos` | `acotacion-normalizada/`, `cortes-y-secciones` (nuevo) | Pasar de varias vistas a la pieza mental; leer un despiece y un conjunto. | Alta | Giesecke. |
| `tolerancias-y-ajustes` | `acotacion-normalizada/` | Tolerancia dimensional, ajustes con juego e interferencia, sistema ISO. | Alta | ISO 286 (resumen público); Giesecke. |
| `rugosidad-y-acabado-superficial` | `tolerancias-y-ajustes` (nuevo) | Rugosidad (Ra), símbolos de acabado, relación con el proceso de fabricación. | Media | ISO 1302 (resumen público). |
| `representacion-de-roscas-tornillos-y-uniones` | `cortes-y-secciones` (nuevo) | Roscas, pernos, tuercas y su representación normalizada. | Media | Giesecke. |
| `simbolos-de-soldadura-y-uniones` | `interpretar-planos-de-piezas-y-conjuntos` (nuevo), `../oficios/soldador/` (referencia cruzada; los oficios no están en la ruta `../` de la materia, ajustar al cargar) | Símbolos de soldadura normalizados; lectura de un plano soldado. | Baja | ISO 2553 (resumen público); `oficios/soldador` como referencia cruzada. |
| `geometria-descriptiva-punto-recta-plano` | `sistemas-de-proyeccion/`, `../matematica/rectas-paralelas-y-perpendiculares/` | Proyección de puntos, rectas y planos (método de Monge), verdadera magnitud. | Media | Texto universitario de geometría descriptiva. |
| `dibujo-asistido-por-computadora-cad` | `acotacion-normalizada/`, `escalas-numericas-y-graficas/` | Del papel al CAD 2D y 3D: capas, bloques, plantillas, modelado y exportación a plano. | Alta | Documentación pública de CAD libre. |
| `dibujo-arquitectonico-plantas-cortes-y-fachadas` | `escalas-numericas-y-graficas/`, `tipos-de-linea-formatos-y-rotulo` (nuevo) | Plantas, cortes, vistas, simbología de muros, puertas y ventanas, cotas de obra. | Alta | Ching, *Arquitectura: forma, espacio y orden*; `oficios/albanil-constructor` como referencia cruzada. |
| `croquis-y-relevamiento-de-medidas` | `acotacion-normalizada/` | Croquis acotados a mano, relevamiento de una pieza y de un local. | Media | Giesecke. |
| `dibujo-electrico-y-esquemas-de-instalaciones` | `tipos-de-linea-formatos-y-rotulo` (nuevo), `../electronica/circuitos-y-leyes-de-kirchhoff/` | Símbolos eléctricos, esquema unifilar y multifilar, planos de instalaciones. | Baja | `oficios/electricista/lectura-de-planos-electricos` como referencia cruzada; norma IRAM. |

Total propuesto: 15 (6 de prioridad alta).

---

## 5. Ciencia de Materiales (`materiales/`) — hoy 6 temas

**Qué cubre hoy.** Dureza, tenacidad y ductilidad; elasticidad (ley de Hooke y módulo de Young); plasticidad y punto de fluencia (curva tensión-deformación); fatiga y fractura; corrosión (electroquímica, factores); familias de materiales (metales, cerámicos, polímeros, compuestos) en cuatro secciones.

**Lagunas reales.** Hoy se conocen **propiedades y fallas** pero no **por qué** los materiales las tienen: falta la estructura interna (enlaces, cristales, defectos, microestructura, diagramas de fase) y el procesamiento (tratamientos térmicos, aleaciones, conformado). Cada familia de materiales merece su propio tema, no un párrafo. Tampoco hay propiedades térmicas, eléctricas ni magnéticas, ni ensayos normalizados, ni selección de materiales, ni sostenibilidad. Falta un tema obvio del currículo clásico: el diagrama hierro-carbono.

| Tema nuevo | Prerrequisitos | Contenido (1 línea) | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `enlaces-y-estructura-atomica-de-los-materiales` | `../quimica/enlace-quimico-polaridad/`, `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | Enlace metálico, iónico, covalente y secundario, y cómo explican las propiedades de cada familia. | Alta | Callister, *Introducción a la ciencia e ingeniería de los materiales*. |
| `estructuras-cristalinas-y-celdas-unitarias` | `enlaces-y-estructura-atomica-de-los-materiales` (nuevo) | Redes cristalinas (cúbica centrada en el cuerpo y en las caras, hexagonal), factor de empaquetamiento, densidad. | Alta | Callister; Askeland. |
| `defectos-cristalinos-y-dislocaciones` | `estructuras-cristalinas-y-celdas-unitarias` (nuevo), `plasticidad-y-punto-de-fluencia/` | Vacancias, dislocaciones, bordes de grano; por qué los metales se deforman y se endurecen. | Alta | Callister. |
| `diagramas-de-fase-y-aleaciones` | `estructuras-cristalinas-y-celdas-unitarias` (nuevo) | Solubilidad, solución sólida, diagrama binario, regla de la palanca. | Alta | Callister; Askeland. |
| `diagrama-hierro-carbono-y-aceros` | `diagramas-de-fase-y-aleaciones` (nuevo) | Ferrita, austenita, cementita, perlita; aceros y fundiciones. | Alta | Callister; manuales públicos de aceros. |
| `tratamientos-termicos-temple-revenido-recocido` | `diagrama-hierro-carbono-y-aceros` (nuevo) | Temple, revenido, recocido, normalizado; efecto sobre dureza y tenacidad. | Alta | Callister; `oficios/metalurgico`. |
| `endurecimiento-y-conformado-de-metales` | `defectos-cristalinos-y-dislocaciones` (nuevo) | Trabajo en frío, recristalización, laminado, forja, extrusión. | Media | Callister. |
| `ensayos-de-materiales-traccion-dureza-impacto` | `plasticidad-y-punto-de-fluencia/`, `../ingenieria/ensayo-y-medicion/` | Ensayo de tracción normalizado, escalas de dureza, ensayo Charpy; cómo leer los resultados. | Alta | Normas ASTM/IRAM (versión vigente al generar); Callister. |
| `ceramicos-y-vidrios` | `familias-de-materiales-metales-ceramicos-polimeros-compuestos/`, `enlaces-y-estructura-atomica-de-los-materiales` (nuevo) | Estructura, fragilidad, procesamiento, vidrio y cemento. | Media | Callister. |
| `polimeros-termoplasticos-termoestables-elastomeros` | `../quimica/polimeros-naturales-sinteticos/`, `enlaces-y-estructura-atomica-de-los-materiales` (nuevo) | Cadenas, temperatura de transición vítrea, familias y reciclado. | Media | Callister. |
| `materiales-compuestos-fibras-y-matrices` | `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | Fibra de vidrio y carbono, matrices, laminados, regla de las mezclas. | Media | Callister; Askeland. |
| `propiedades-termicas-dilatacion-y-conductividad` | `../fisica/transmision-calor-conduccion-conveccion-radiacion/` | Dilatación térmica, conductividad, choque térmico, resistencia a alta temperatura y fluencia lenta. | Media | Callister. |
| `propiedades-electricas-y-magneticas-de-los-materiales` | `../fisica/resistencia-electrica/`, `../fisica/campo-magnetico-imanes-corrientes/`, `enlaces-y-estructura-atomica-de-los-materiales` (nuevo) | Conductores, aislantes y semiconductores; materiales ferromagnéticos. | Media | Callister. |
| `prevencion-de-la-corrosion-y-proteccion-superficial` | `corrosion/` | Recubrimientos, protección catódica, pintura, galvanizado y pasivación. | Alta | Callister; `oficios/herrero-forjador` y `oficios/soldador` como referencia cruzada. |
| `seleccion-de-materiales-y-sostenibilidad` | `ensayos-de-materiales-traccion-dureza-impacto` (nuevo), `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | Criterios de selección (propiedad, costo, peso, proceso), ciclo de vida, reciclado. | Media | Ashby, *Materials Selection in Mechanical Design*. |

Total propuesto: 15 (7 de prioridad alta).

---

## Resumen y orden sugerido

| Materia | Hoy | Propuestos | De prioridad alta |
|---|---:|---:|---:|
| UX/Diseño | 5 | 14 | 6 |
| Electrónica | 5 | 15 | 8 |
| Automatización | 5 | 14 | 6 |
| Dibujo técnico | 5 | 15 | 6 |
| Ciencia de Materiales | 6 | 15 | 7 |
| **Total** | **26** | **73** | **33** |

Orden sugerido: (1) los seis temas de UX que los propios `teoria.md` anuncian y no existen; (2) la base de Electrónica (código de colores, RC, diodo y fuentes, transistor, lógica combinacional) porque Automatización y los oficios dependen de ella; (3) los temas de Dibujo técnico que cierran el plano (tipos de línea, cortes, tolerancias, interpretación); (4) la cadena estructura-fases-hierro-carbono de Materiales; (5) PID/Ladder en Automatización, que ya tienen su par de oficio.

Pendientes de decisión (no se resuelven acá): si los temas de Dibujo arquitectónico entran como parte de esta materia o como una materia propia (el Tronco 14 los junta); si Electrónica y Automatización se subdividen por clusters de examen jefe (hoy cada una tiene un solo cluster); y si los oficios pasan a tomar estos temas como prerrequisito.
