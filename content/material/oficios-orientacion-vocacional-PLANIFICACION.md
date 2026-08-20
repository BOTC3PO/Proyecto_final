# Oficios / Orientación vocacional: planificación por oficio

> Documento de planificación, NO generar nada hasta confirmar. Mismo
> formato que `idiomas-extranjeros-PLANIFICACION.md`: diseñar todos los
> oficios primero, generar después. Materia: `orientacion-vocacional`
> (ver [[idea-oficios-orientacion-vocacional]] en memoria — decisiones
> de producto ya cerradas: teoría extendida, cuestionario NO obligatorio,
> entrega práctica con tutor sin implementar todavía, sistema NO
> certifica).
>
> **CORRECCIÓN 2026-08-09**: `troncos.md` ya tiene la sección "Oficios y
> trabajo técnico" completa (línea 2932) — **16 oficios reales** con
> nodos `OF1`-`OF18` y prerrequisitos ya enlazados a Física/Química/
> Geometría/Informática existentes: Construcción e infraestructura (7),
> Metalurgia y mecánica (5, incluye Técnico en Automatización y
> Robótica = `OF16`), Agro y alimentos (4). Los otros 15 que había
> contado ("Ciencias exactas y naturales", "Tecnología/ingeniería/
> investigación", "Sociales y humanidades") son **"profesiones
> académicas"** (sección aparte, línea 3105): cuelgan directo del nodo
> más avanzado de su tronco de origen, **sin contenido nuevo** — un
> Médico ya está cubierto por Biología/Química, no necesita
> `orientacion-vocacional/medico/`. + **Cocina/Gastronomía**, agregada
> por Javier, genuinamente nueva (seria oficio #17, no está en
> `troncos.md` todavía).
>
> `troncos.md` también trae la **tabla de logros/credenciales** por
> oficio (línea 3080) — nombres reales del mercado argentino
> (Electricista Matriculado, Soldador Certificado IRAM/IAS, Maestro
> Mayor de Obra, etc.), no badges inventados. Ya define el *nombre* del
> logro; falta el mecanismo (schema de Prisma) para otorgarlo.
>
> **Principio central (Javier + GPT, 2026-08-09): un solo grafo de
> competencias compartido, no 32 cursos aislados.** Las bases de
> partida son distintas por oficio (un Abogado no necesita Torque; un
> Electricista no necesita Derecho Civil), pero cuando dos oficios
> comparten un nodo (ej. "Electricidad básica" en Electricista Y
> Técnico Electromecánico Y Robótica), **es el mismo nodo, no una copia
> reescrita tres veces** — mismo patrón que ya usa todo `troncos.md`
> para las materias académicas.
>
> **Antes de generar cualquier nodo, chequear si ya existe como tema de
> tronco** (buena parte de electricidad/mecánica/control/automatización
> ya está generada en Troncos 9-13 de este proyecto). Si existe, el
> oficio lo referencia como prerrequisito; si no, se genera como nodo
> nuevo dentro de `orientacion-vocacional`.
>
> **Matriz de competencias** (en vez de teoría+cuestionario plano):
> cada nodo se etiqueta Teoría / Cuestionario / Casos / Práctica, con
> "Práctica: no evaluada" explícito donde corresponda — evita que el
> sistema implique que aprobar cuestionarios habilita profesionalmente.

---

## Electricista — diseñado (GPT, revisado 2026-08-09)

14 categorías, secuencial con alguna ramificación al final. Temas
atómicos (1 tema = 1 carpeta de generación, no lumped):

1. **Fundamentos** — qué-es-la-electricidad, carga-eléctrica,
   corriente-eléctrica, tensión, resistencia-eléctrica, potencia-eléctrica,
   energía-eléctrica, corriente-continua-vs-alterna,
   conductores-y-aislantes, circuito-abierto-y-cerrado, cortocircuito,
   circuitos-serie-vs-paralelo, ley-de-ohm, unidades-eléctricas,
   lectura-de-magnitudes-eléctricas.
2. **Seguridad eléctrica** (examen obligatorio antes de avanzar) —
   contacto-directo-e-indirecto, arco-eléctrico, sobrecarga-e-incendio,
   epp-para-electricista, herramientas-aisladas,
   señalización-de-riesgo-eléctrico, bloqueo-y-etiquetado-loto,
   emergencias-eléctricas, principios-de-trabajo-seguro.
3. **Herramientas e instrumentos** — destornilladores-y-pinzas,
   pelacables-y-crimpeadoras, multímetro, pinza-amperométrica,
   detector-de-tensión, megóhmetro, telurómetro (para cada instrumento:
   qué mide, cómo funciona, cómo se lee, errores comunes).
4. **Materiales** — conductores-cobre-y-aluminio, secciones-de-cable,
   tipos-de-aislación, canalizaciones-eléctricas, conexiones-y-empalmes,
   elementos-de-instalación.
5. **Circuitos eléctricos** — circuito-de-iluminación,
   circuito-de-tomacorrientes, circuitos-mixtos,
   circuitos-independientes, circuito-de-mando,
   interpretación-de-esquemas-eléctricos.
6. **Instalaciones domiciliarias** — arquitectura-de-una-instalación
   (alimentación→medición→tablero→protecciones→circuitos→cargas→tierra),
   diseño-conceptual-de-instalación-por-casos.
7. **Protecciones** — protección-de-sobrecorriente,
   protección-diferencial, puesta-a-tierra,
   coordinación-de-protecciones-ante-fallas.
8. **Cálculo eléctrico** — cálculo-de-corriente, cálculo-de-potencia,
   caída-de-tensión, sección-de-conductor-por-carga,
   factores-de-demanda, problemas-integradores-de-cálculo-eléctrico.
9. **Tableros eléctricos** — estructura-de-tablero, barras-y-distribución,
   esquemas-unifilares, fallas-típicas-de-tablero (ejercicios "encontrá
   los N errores").
10. **Lectura de planos** — simbología-eléctrica,
    plano-unifilar-vs-multifilar, diagrama-de-mando,
    diagrama-de-potencia, detección-de-errores-en-plano,
    diseño-de-plano-eléctrico-simple.
11. **Diagnóstico de fallas** — diagnóstico-por-casos-eléctrico
    (escenarios con datos progresivos: síntoma→hipótesis→nuevo
    dato→hipótesis refinada, no definiciones; varios temas con distinto
    escenario cada uno, no uno solo).
12. **Instalaciones especiales** — motores-eléctricos-instalación,
    bombas-eléctricas, automatismos-básicos, contactores, relés,
    sensores-de-instalación, variadores-de-velocidad.
13. **Electricidad industrial** — sistema-trifásico,
    transformadores-industriales, control-por-contactores-y-relés,
    introducción-a-plc, diagnóstico-industrial-por-casos.
14. **Normativa** — riesgo-eléctrico-y-norma-iram,
    reglamentaciones-locales-de-instalación,
    diferencia-entre-saber-y-estar-habilitado (concepto→instalación→
    riesgo→norma, nunca artículo a memorizar).

**Nodos candidatos a compartir** con Técnico Electromecánico/Robótica:
Fundamentos, Seguridad eléctrica, Electricidad industrial (parcial).

---

## Técnico Electromecánico — diseñado (GPT, revisado 2026-08-09)

Más grande que Electricista — conecta mecánica, electricidad,
electrónica, automatización, control, mantenimiento y diseño. Eje
transversal: `energía → máquina → movimiento → control →
automatización → mantenimiento` (vs. el eje de Electricista:
`electricidad → instalación → protección → medición → diagnóstico`).

18 categorías, temas atómicos por categoría (1 tema = 1 carpeta):

1. **Fundamentos** — matemática-técnica-aplicada, física-técnica-base,
   metrología-y-tolerancias, dibujo-técnico-industrial (=parcial con
   Tronco 14).
2. **Mecánica** — estática-de-cuerpos, dinámica-aplicada,
   cinemática-de-mecanismos, torque-y-momento (=`EST1a`),
   vibraciones-mecánicas.
3. **Materiales** — metales-y-aleaciones, tratamientos-térmicos,
   corrosión (=parcial con `CM3`/`CM4`).
4. **Mecanizado** — torno-básico, fresadora-básica, cnc-fundamentos,
   tolerancias-dimensionales.
5. **Elementos de máquinas** — ejes-y-chavetas, rodamientos, engranajes,
   acoplamientos.
6. **Hidráulica** — principios-de-hidráulica, componentes-hidráulicos,
   circuitos-hidráulicos-básicos.
7. **Neumática** — principios-de-neumática, componentes-neumáticos,
   circuitos-neumáticos-básicos.
8. **Electricidad** (=nodo compartido con Electricista, ver arriba).
9. **Máquinas eléctricas** — transformadores-industriales,
   motores-cc, motores-ca, generadores-eléctricos.
10. **Electrónica** — semiconductores-básicos (=parcial `EL1d`),
    amplificadores-operacionales, electrónica-de-potencia.
11. **Control** — relés-y-contactores-de-control, sensores-industriales
    (=`EL5`), control-pid (=`CTRL1`-`CTRL3a`).
12. **Automatización** — plc-fundamentos (=`CTRL4`),
    programación-ladder, hmi-interfaz-de-operador, scada-fundamentos,
    redes-industriales.
13. **Instrumentación** — instrumentación-de-temperatura,
    instrumentación-de-presión, instrumentación-de-caudal,
    instrumentación-de-nivel.
14. **Mantenimiento** — mantenimiento-preventivo, mantenimiento-correctivo,
    mantenimiento-predictivo, termografía-industrial.
15. **Diagnóstico integral** — diagnóstico-multivariable-por-casos
    (varios temas, cada uno con su propio escenario de síntomas
    cruzados).
16. **Diseño** — cad-fundamentos, lectura-de-planos-industriales,
    esquemas-eléctricos-y-mecánicos.
17. **Seguridad** — seguridad-industrial-electromecánica (variante
    extendida de la de Electricista).
18. **Gestión técnica** — gestión-de-orden-de-trabajo,
    documentación-técnica-básica.

**Niveles de competencia** (no materia-tras-materia): Auxiliar técnico
→ Técnico básico → Técnico → Técnico avanzado → Diseño/ingeniería
aplicada. Cada nivel define qué puede *hacer* el alumno (interpretar,
analizar, resolver, diseñar), no qué "vio".

**Cuestionarios de diagnóstico multivariable**: dar síntomas parciales
(temperatura elevada + corriente normal + vibración axial elevada) y
pedir qué hipótesis gana probabilidad — más rico que preguntar
definiciones sueltas.

**Nodos candidatos a compartir**: Fundamentos (parcial con Electricista
y otros técnicos), Electricidad (=Electricista), Control/Automatización
(=Robótica), Seguridad (variante extendida de la de Electricista).

---

## Robótica — diseñado (GPT, revisado 2026-08-09)

Integración de mecánica + electrónica + control + programación +
percepción + automatización — NO "electrónica + programación" solo.
Se construye tomando prestado buena parte de Técnico Electromecánico
(mecánica, electrónica, control) y sumando lo específicamente robótico.

19 categorías, temas atómicos:

1. **Fundamentos** — matemática-para-robótica, vectores-y-matrices,
   sistemas-de-coordenadas.
2. **Mecánica** (=parcial con Electromecánico).
3. **Electricidad** (=Electricista).
4. **Electrónica** (=parcial con Electromecánico).
5. **Microcontroladores** — gpio-digital, entrada-analógica-adc,
   salida-pwm, comunicación-uart, comunicación-i2c, comunicación-spi.
6. **Programación** — algoritmos-para-robótica, programación-orientada-a-
   objetos-aplicada, programación-de-sistemas-embebidos.
7. **Actuadores** — servomotores, motores-paso-a-paso, motores-bldc.
8. **Sensores** — encoders, imu-unidad-inercial, cámaras-para-robótica,
   lidar-fundamentos.
9. **Control** (=Electromecánico) + control-de-trayectoria.
10. **Cinemática** — cinemática-directa, cinemática-inversa,
    matrices-homogéneas.
11. **Dinámica** — dinámica-de-manipuladores.
12. **Robótica industrial** — robots-scara, robots-delta,
    cobots-fundamentos.
13. **Visión artificial** — procesamiento-de-imagen-básico,
    detección-de-objetos-fundamentos.
14. **Inteligencia artificial** — machine-learning-fundamentos,
    redes-neuronales-básicas, aprendizaje-por-refuerzo-fundamentos.
15. **ROS/software robótico** — ros-fundamentos, nodos-y-tópicos.
16. **Navegación** — slam-fundamentos, planificación-de-trayectoria.
17. **Comunicaciones** — protocolos-de-comunicación-robótica.
18. **Diagnóstico** — diagnóstico-de-robot-por-casos.
19. **Seguridad** — seguridad-en-robótica-industrial.

**Cadena de convergencia**: tres ramas independientes (matemática→
cinemática, electricidad→microcontroladores→control de motores,
programación→sensores→control) convergen en el nodo `ROBOT`.

**Consecuencia para el sistema**: alguien que ya completó Técnico
Electromecánico tiene gran parte del camino de Robótica desbloqueado
automáticamente — sólo estudia los nodos nuevos (cinemática, sensores
específicos, ROS, IA). Esto es la prueba de que el grafo compartido
funciona, no una excepción.

---

## Plomero (`OF2`) — diseñado 2026-08-09

Logro: **Plomero Matriculado**. Prerrequisitos troncos.md: `Volumen y
capacidad` (Geometría), `Caudal` (Física).

1. **Fundamentos** — presión-en-fluidos (=`FLU1`), caudal (=`FLU3`),
   volumen-y-capacidad (=`M4P`), unidades-de-caudal-y-presión.
2. **Seguridad** — riesgo-de-agua-a-presión, gas-residual-en-cañerías-
   viejas, epp-para-plomero, espacios-confinados-cámaras-y-pozos.
3. **Herramientas** — llaves-y-cortatubos, soldadura-de-cañería-a-soplete,
   termofusión-de-cañería, detectores-de-fugas.
4. **Materiales** — cañería-de-pvc, cañería-de-cobre,
   cañería-de-hierro-galvanizado, cañería-de-polipropileno,
   uniones-y-válvulas, sellos-y-juntas.
5. **Instalaciones** — instalación-de-agua-fría, instalación-de-agua-
   caliente, desagües-domiciliarios, ventilación-de-desagües,
   pendientes-mínimas-de-cañería, artefactos-sanitarios.
6. **Cálculo** — dimensionar-cañería-por-caudal-simultáneo,
   pérdida-de-carga, dimensionar-tanque-y-bomba.
7. **Diagnóstico por casos** — diagnóstico-de-plomería-por-casos (varios
   temas: baja presión en un punto, olor a gas de desagüe, humedad en
   pared — cada uno su propio escenario progresivo, mismo patrón que
   Electricista).
8. **Normativa** — código-de-edificación-local, habilitación-matriculada-
   de-plomero, frontera-entre-gasista-y-plomero.

---

## Gasista (`OF6`) — diseñado 2026-08-09

Logro: **Gasista Matriculado (categoría habilitante)**. Prerrequisitos:
`Gases ideales` (Química, `QZ1P`), `Presión` (Física, `FLU1P`).

1. **Fundamentos** — gases-ideales (=`QZ1`), presión-y-su-medición,
   poder-calorífico, combustión-completa-e-incompleta.
2. **Seguridad — el nivel más crítico del oficio** — monóxido-de-carbono
   (síntomas, por qué mata sin avisar), detección-de-fuga-de-gas,
   ventilación-de-seguridad, qué-no-hacer-ante-olor-a-gas (nunca
   accionar un interruptor eléctrico), tiro-balanceado-vs-natural.
3. **Herramientas e instrumentos** — detector-de-gas, manómetro,
   llaves-específicas-de-gasista, prueba-de-hermeticidad.
4. **Materiales** — cañería-de-gas-cobre, cañería-de-gas-polietileno,
   cañería-de-gas-hierro-negro, reguladores-de-gas, válvulas-de-gas,
   artefactos-a-gas (cocina, calefón, caldera).
5. **Instalaciones** — trazado-de-cañería-interna-de-gas,
   ventilación-de-locales-con-artefactos,
   categorías-de-artefactos-a-b-c-según-evacuación.
6. **Cálculo** — dimensionar-cañería-por-caudal-de-gas,
   pérdida-de-carga-en-gas, selección-de-regulador.
7. **Diagnóstico por casos** — diagnóstico-de-gasista-por-casos (olor
   persistente pese a ventilar, artefacto no enciende, llama amarilla
   en vez de azul — cada uno su propio tema).
8. **Normativa** — categoría-de-habilitación-de-gasista (la que más
   restringe legalmente de las 16 — remarcar con el disclaimer estándar
   de que sin matrícula no se puede ejercer).

**Nota**: es el oficio con mayor distancia entre "aprender la teoría"
y "estar habilitado a trabajar" de los 16 — el disclaimer legal pesa
más acá que en cualquier otro.

---

## Técnico en Refrigeración y Climatización (`OF7`) — diseñado 2026-08-09

Logro: **Técnico en Refrigeración y Climatización**. Prerrequisitos:
`Cambios de estado` (Física, `TER4P`), `Presión` (`FLU1P`), `Generador/
motor/transformador` (`FIS13P`) — es el más compuesto de Construcción,
junta el piso térmico y el eléctrico.

1. **Fundamentos termodinámicos** — cambios-de-estado (=`TER4`),
   calor-latente, ciclo-de-refrigeración
   (compresión-condensación-expansión-evaporación).
2. **Fundamentos eléctricos** (=nodo compartido con Electricista) —
   motor-del-compresor, arranque-de-compresor, protecciones-térmicas.
3. **Seguridad** — gases-refrigerantes-presión-y-toxicidad,
   normativa-ambiental-hfc-hfo, trabajo-con-presión,
   riesgo-eléctrico-en-refrigeración.
4. **Herramientas** — manómetros-de-refrigeración, bomba-de-vacío,
   detector-de-fugas-de-gas, recuperadora-de-gas.
5. **Instalación** — instalación-de-split, instalación-central,
   cámaras-frigoríficas, carga-de-gas, prueba-de-hermeticidad.
6. **Diagnóstico por casos** — diagnóstico-de-refrigeración-por-casos
   (no enfría, enfría poco, se congela el evaporador, consumo eléctrico
   anormal — cada uno su propio tema).
7. **Normativa** — protocolo-de-montreal-y-kigali (impacto ambiental
   real, no sólo técnico), habilitación-de-refrigeración.

---

## Albañil / Constructor (`OF3`) — diseñado 2026-08-09, fuentes confirmadas 2026-08-13

Logro: **Maestro Mayor de Obra**. Prerrequisitos: `Área de polígonos`
(Geometría, `GO7P`), `Volumen y capacidad` (`M4P`).

**7 libros reales bajados y revisados** (`tareas_pendientes/libros/oficios/albañil/`),
de Perú, Chile, Argentina y República Dominicana — la técnica de
albañilería es prácticamente universal a este nivel, así que la
heterogeneidad de país no es problema salvo en `9. Normativa` (ver
nota al final). Ninguno se superpone inútilmente con otro; cada uno
cubre un ángulo real:

1. **Fundamentos geométricos** — área-de-polígonos (=`GO7P`),
   volumen-y-capacidad (=`M4P`, compartido con Plomero), escalas-de-plano,
   replanteo-en-terreno. Confirmado por los 4 manuales grandes (trazado,
   topografía general — *Manual del Constructor* 1.3.4, replanteo —
   *Módulo Educativo* 2.7).
2. **Seguridad** — caídas-de-altura, andamios, epp-de-obra,
   seguridad-en-excavaciones. Fuente rica: *Manual de construcción para
   maestros de obra* cap. 4 completo (EPP desglosado por parte del
   cuerpo, sílice y polvo, derribo de muros, andamios) — más detallado
   que lo que pedía el plan.
3. **Materiales** — cemento, arena-y-áridos, ladrillo, hierro-de-obra,
   hormigón-dosaje, fraguado-y-curado. Fuente definitiva: *Manual del
   Albañil de Ladrillos Cerámicos* (ICH Chile) — normas NCh reales,
   grados de ladrillo por resistencia/absorción, componentes y control
   de calidad del mortero. *Preparación de Mortero* (Cementos Argos) es
   la fuente dedicada de dosificación (tabla real cemento/arena/agua
   por tipo de mortero). *Manual del Constructor* (Polpaico, 237 pág.)
   es más profundo todavía en hormigón (relación agua/cemento, curado,
   control con probetas ASTM/EN) — **de nivel más alto que lo que
   necesita un albañil**, mismo caso que *Materiales en la Edificación*
   señalado la semana pasada: usar sólo para el piso básico
   (dosificación, curado, dos-tres días de plazo), no para el análisis
   de laboratorio.
4. **Herramientas** — nivel-y-plomada, regla-de-obra, mezcladora.
   *Manual del Albañil de Ladrillos Cerámicos* las enumera con
   ilustración una por una (huincha, plomada, lienza, manguera con
   nivel, nivel de burbuja, hachuela, regla de escantillón, plana,
   batea, tambor) — mejor cobertura que la lista original de 3 ítems.
5. **Técnicas constructivas** — cimientos, mampostería, revoques,
   estructura-de-obra, cubiertas. Confirmado a fondo por los 4 manuales
   grandes, con vocabulario técnico real (hilada, llaga, tendel,
   escantillón, tipos de aparejo: soga/tizón/pandereta/sardinel).
   **2 candidatos nuevos que el plan original no nombraba**:
   `terminaciones-de-obra` (pisos, pintura, puertas y ventanas — *Módulo
   Educativo* 4.5-4.9) y `aislacion-termica-e-hidrofuga` (*Manual
   Técnico de Mampostería de BH*, cap. 3 — acondicionamiento térmico y
   aislación hidrófuga, ausente de los libros de ladrillo cerámico
   porque es una ventaja específica del sistema de bloques). También
   confirmado: **bloque de hormigón es un sistema constructivo propio**,
   no intercambiable con ladrillo cerámico (mampostería encadenada vs.
   armada, norma IRAM 11556/11561 argentina) — candidato a
   `mamposteria-de-bloques-de-hormigon` como técnica hermana, no
   reemplazo, de `mamposteria` genérica.
6. **Cálculo** — cómputo-métrico, dosaje-de-hormigón-por-resistencia,
   cargas-básicas-sobre-estructura. Confirmado: *Construcción y
   Mantenimiento* trae dosificaciones reales por elemento ("1 lata
   cemento, 2 latas arena, 4 latas piedra chancada" para losas y
   escaleras), *Manual Maestros de Obra* la misma lógica en proporción
   ("1 bolsa cemento por 1 buggy arena, 1 buggy piedra").
7. **Lectura de planos** — plano-de-obra, cortes-de-obra,
   replanteo-desde-plano. Confirmado por *Manual del Constructor* y
   *Módulo Educativo* (1.7), y *Construcción y Mantenimiento* cap. 5
   trae 2 propuestas de vivienda completas con planos reales a escala
   1:100 — buen material de ejemplo.
8. **Diagnóstico por casos** — diagnóstico-de-albañilería-por-casos
   (fisuras estructurales vs. estéticas, humedad, asentamiento — cada
   uno su propio tema). **Era el único sub-tema sin fuente concreta —
   ahora la tiene, y es excelente**: *Construcción y Mantenimiento de
   Viviendas de Albañilería* (PUCP/SENCICO, institución oficial
   peruana), capítulo 4 completo, 4 casos reales con procedimiento
   paso a paso y dosaje de reparación (mortero 1:4 y 1:5
   cemento:arena): muros agrietados, corrosión del acero de refuerzo,
   eflorescencia, humedad en muros. El *Manual Técnico de Mampostería
   de BH* suma un 5º caso específico de bloques de hormigón
   ("Patologías más comunes y cómo evitarlas", cap. 5.2) — distinto del
   de ladrillo cerámico, mismo patrón de "cada material, su propia
   patología" que ya se usó en Química (petróleo vs. hidrocarburos).
9. **Normativa** — código-de-edificación, habilitaciones-municipales.
   Confirmado: *Manual del Constructor* (trámites del permiso de
   edificación, Ordenanza chilena), *Módulo Educativo* (examen de
   licencia oficial MOPC en Rep. Dominicana). **Nota**: a diferencia de
   1-8, que son técnica universal, este punto sí es por país — cuando
   se genere el contenido real conviene default a normativa argentina
   (Código de Edificación municipal, habilitación de Maestro Mayor de
   Obra vía CPAU/consejos profesionales provinciales), usando estos
   libros sólo como referencia de qué tipo de trámite existe, no de
   cuál es el trámite argentino exacto.

---

## Montador de Estructuras (`OF10`) — diseñado 2026-08-09

Logro: **Montador de Estructuras Metálicas**. Prerrequisitos: `Dinámica:
fuerzas concurrentes` (Física, `F5P`), `Teorema de Pitágoras`
(Geometría, `M6P`).

1. **Fundamentos** — fuerzas-concurrentes (=`F5`),
   equilibrio-de-estructuras, pitágoras-aplicado-a-escuadrado (=`M6P`).
2. **Seguridad — el más crítico junto con Gasista** — trabajo-en-altura,
   uso-de-arnés, líneas-de-vida, izaje-de-cargas,
   zona-de-riesgo-bajo-carga-suspendida.
3. **Herramientas** — soldadura-estructural (comparte nodo con Soldador
   `OF8`), grúas-y-aparejos, torque-de-bulonado.
4. **Materiales** — perfiles-metálicos, uniones-soldadas-vs-abulonadas.
5. **Montaje** — secuencia-de-armado-estructural,
   plomado-y-nivelación-de-estructura, arriostramiento-temporal.
6. **Diagnóstico por casos** — diagnóstico-de-montaje-por-casos
   (estructura desalineada, unión con holgura, vibración anormal — cada
   uno su propio tema).
7. **Normativa** — certificación-de-soldadura-estructural,
   habilitación-para-trabajo-en-altura.

---

## Carpintero (`OF4`) — diseñado 2026-08-09

Logro: **Carpintero Oficial**. Prerrequisito: `Rectas y ángulos`
(Geometría analítica, `GA6P`).

1. **Fundamentos** — rectas-y-ángulos (=`GA6`), escuadre, medición-de-
   carpintería.
2. **Seguridad** — herramientas-de-corte-sierra, ingletadora,
   epp-de-carpintero, polvo-de-madera-riesgo-respiratorio.
3. **Materiales** — maderas-duras, maderas-blandas, tableros-de-madera,
   adhesivos-de-carpintería, herrajes.
4. **Herramientas** — herramientas-manuales-de-carpintería,
   sierra-eléctrica, cepillo-eléctrico, router.
5. **Técnicas** — unión-cola-de-milano, unión-de-espiga,
   unión-de-ensamble, lijado, barnizado.
6. **Lectura de planos** — plano-de-mueble, despiece-de-mueble,
   escalas-de-carpintería.
7. **Diagnóstico por casos** — diagnóstico-de-carpintería-por-casos
   (madera que se alabea/raja, unión que falla, humedad en la madera —
   cada uno su propio tema).
8. **Normativa** — estándares-de-calidad-de-carpintería (sin
   habilitación matriculada obligatoria, a diferencia de Gasista/
   Electricista — marcar esta diferencia explícitamente).

---

## Soldador (`OF8`) — diseñado 2026-08-09

Logro: **Soldador Certificado (IRAM/IAS)**. Prerrequisitos: `Calor:
Q=m·c·ΔT` (Física, `TER2P`), `Metalurgia` (Historia profunda, `TEC1P`
— de dónde viene la técnica).

1. **Fundamentos** — calor-y-temperatura (=`TER2`, compartido con
   Refrigeración y Procesador de Alimentos), metalurgia-básica (=`TEC1`).
2. **Seguridad — la más específica de EPP de los 16** — arco-eléctrico-
   de-soldadura, radiación-uv-de-soldadura, humos-metálicos,
   riesgo-de-incendio-en-soldadura, epp-de-soldador (careta, guantes,
   delantal ignífugo).
3. **Procesos de soldadura** — soldadura-smaw-eléctrica, soldadura-mig-
   mag, soldadura-tig, soldadura-autógena (cuándo usar cada una).
4. **Materiales** — metales-base-para-soldar, electrodos, gases-de-
   protección.
5. **Defectos de soldadura** — porosidad, falta-de-fusión, socavado
   (identificar en imagen, mismo patrón que "encontrá los errores" de
   tableros en Electricista).
6. **Diagnóstico por casos** — diagnóstico-de-soldadura-por-casos
   (junta que falla, soldadura porosa, deformación por calor — cada uno
   su propio tema).
7. **Normativa** — certificación-iram-ias-por-proceso-y-posición,
   inspección-de-soldadura.

---

## Metalúrgico (`OF9`) — diseñado 2026-08-09

Logro: **Operario Metalúrgico Calificado**. Prerrequisitos: `Oxidación
y reducción` (Química, `QWP`), `Calor: Q=m·c·ΔT` (=compartido con
Soldador).

1. **Fundamentos** — oxidación-reducción (=`QWP`), calor (=`TER2`),
   propiedades-de-metales.
2. **Seguridad** — riesgo-de-altas-temperaturas, quemaduras,
   humos-metalúrgicos, epp-industrial-metalúrgico.
3. **Procesos** — fundición, laminado, forjado, temple, revenido,
   recocido.
4. **Materiales** — aleaciones-ferrosas, aleaciones-no-ferrosas,
   aceros-según-uso.
5. **Control de calidad** — dureza-de-metales, propiedades-mecánicas-
   resultantes-del-proceso (=comparte nodo `CM3`/`CM4` con Soldador/
   Mecánico).
6. **Diagnóstico por casos** — diagnóstico-metalúrgico-por-casos (pieza
   quebradiza, dureza fuera de rango, defecto de fundición — cada uno
   su propio tema).
7. **Normativa** — normas-de-calidad-de-proceso-metalúrgico.

---

## Mecánico (`OF5`) — diseñado 2026-08-09 (el que más pone a prueba el grafo)

Logro: **Mecánico Automotor**. Prerrequisitos: `Trabajo de una fuerza`
(Física, `F7P`), `Conservación de la energía mecánica` (`ENE3P`).

Confirmado el solapamiento esperado con Técnico Electromecánico
(`OF11`): comparten Fundamentos mecánicos casi enteros. La diferencia
real es de alcance, no de base — Mecánico se especializa en el
automotor específicamente, Electromecánico generaliza a cualquier
máquina industrial.

1. **Fundamentos mecánicos** (=nodo compartido con Electromecánico) —
   trabajo-de-una-fuerza (=`F7`), energía-mecánica (=`ENE3`),
   fuerzas-y-torque-automotor.
2. **Seguridad** — elevación-de-vehículos, fluidos-a-presión-automotor,
   riesgo-eléctrico-de-batería, epp-de-mecánico.
3. **Motor** — ciclo-otto, ciclo-diésel, sistema-de-distribución,
   lubricación-de-motor, refrigeración-de-motor.
4. **Transmisión** — embrague, caja-de-cambios, diferencial, tracción.
5. **Sistemas eléctricos del vehículo** (=comparte base con
   Electricista, alcance 12V/24V, no instalación domiciliaria) —
   batería-automotor, alternador, motor-de-arranque,
   electrónica-de-a-bordo-básica.
6. **Frenos y suspensión** — sistema-hidráulico-de-frenos,
   amortiguación.
7. **Diagnóstico por casos** (el corazón del oficio moderno) —
   diagnóstico-automotor-por-scanner-obd (código de falla → hipótesis
   → verificación → hipótesis refinada — varios temas con distinto
   escenario cada uno).
8. **Mantenimiento** — mantenimiento-preventivo-por-kilometraje,
   fluidos-y-filtros.
9. **Normativa** — verificación-técnica-vehicular, emisiones-vehiculares.

**Confirma la arquitectura**: el nodo "Fundamentos mecánicos" resultó
ser, en efecto, el mismo entre Mecánico y Electromecánico — un solo
nodo, no dos copias, tal como predijo GPT.

**Decisión de Javier 2026-08-13 — 2 ramas nuevas confirmadas**:
- **`mecanico-de-motos`** — cuelga de "Fundamentos mecánicos"
  compartido, mismo patrón que `OF17a-d` cuelgan de Agricultor. Fuente:
  *Manual Reparación de Motocicletas* (INATEC) + motor de dos tiempos +
  carburación 2T/4T (ver hallazgo arriba en la sección de seguimiento
  de oficios nuevos).
- **`vehiculo-electrico-fundamentos`** — tema moderno que suma al `OF5`
  100%-combustión existente (ciclo Otto/Diésel, embrague, caja de
  cambios no aplican): motor único, reductora, sin embrague, freno
  regenerativo, batería de alta tensión. Mismo patrón que `OF18`
  (modelos de producción) sumó lo contemporáneo a Agricultor. Fuente:
  `funcionamiento-de-un-auto-electrico` (carpeta Mecánica Automotriz).

---

## Agricultor (`OF12`) — diseñado 2026-08-09

Logro: **Productor Agropecuario**. Prerrequisitos: `Fotosíntesis y
respiración celular` (Biología, `BFP`), `Ácido-base y pH` (Química,
`QNP`). Decide qué y cuándo plantar (a diferencia de Operario Agrícola,
que ejecuta).

1. **Fundamentos biológicos** — fotosíntesis (=`BFP`), ciclo-del-agua,
   nutrientes-del-suelo.
2. **Fundamentos químicos** — ph-del-suelo (=`QNP`), fertilización-básica.
3. **Seguridad** — manejo-de-agroquímicos, epp-agrícola,
   tiempo-de-reingreso-post-aplicación, seguridad-de-maquinaria-agrícola.
4. **Suelo** — tipos-de-suelo, estructura-del-suelo, análisis-de-suelo,
   rotación-de-cultivos.
5. **Cultivo** — siembra, riego, control-integrado-de-plagas, cosecha.
6. **Cálculo** — dosis-de-fertilizante-por-hectárea,
   dosis-de-agroquímico-por-hectárea, rendimiento-esperado.
7. **Diagnóstico por casos** — diagnóstico-agrícola-por-casos (hoja
   amarilla/manchada/marchita → carencia nutricional vs. plaga vs.
   enfermedad vs. estrés hídrico — varios temas, cada uno su escenario).
8. **Especializaciones** (`OF17a-d`, ya marcadas en troncos.md como
   "marcador inicial") — ganadería-de-rumiantes, avicultura,
   producción-porcina, apicultura, horticultura, fruticultura.
9. **Modelos de producción** (`OF18`, neutral) — agroindustria-como-
   modelo, agroecología-como-modelo (mismo tratamiento que otras
   corrientes de pensamiento del proyecto: describir lógica y argumento
   de cada uno sin bajar línea).

---

## Operario Agrícola (`OF13`) — diseñado 2026-08-09

Logro: **Operario Agrícola Calificado**. Prerrequisitos:
`Proporcionalidad` (Matemáticas, `N10P3`), Mecánico (`OF5P` — comparte
base mecánica). Ejecuta y mantiene maquinaria (vs. Agricultor, que
decide qué/cuándo plantar).

1. **Fundamentos** — proporcionalidad-directa (=`N10P3`, para
   dosificar), base-mecánica-compartida-con-mecánico (`OF5`).
2. **Seguridad** — seguridad-de-tractor, seguridad-de-cosechadora,
   toma-de-fuerza-riesgo, manejo-de-agroquímicos-operario.
3. **Maquinaria** — operación-de-tractor, operación-de-implementos,
   mantenimiento-básico-de-maquinaria-agrícola.
4. **Dosificación** — cálculo-de-dosis-por-proporcionalidad-directa.
5. **Diagnóstico por casos** — diagnóstico-de-maquinaria-agrícola-por-
   casos (máquina no arranca, pierde potencia, implemento no dosifica
   bien — cada uno su propio tema).

---

## Panadero (`OF14`) — diseñado 2026-08-09

Logro: **Maestro Panadero**. Prerrequisitos: `Escalar una receta` (Vida
Cotidiana, `E8P`), `Temperatura y equilibrio térmico` (Física, `TER1P`).

1. **Fundamentos** — escalar-una-receta (=`E8`, proporcionalidad
   aplicada), temperatura-y-fermentación (=`TER1`).
2. **Seguridad e higiene alimentaria** — manipulación-de-alimentos,
   temperatura-de-conservación, alergenos-alimentarios.
3. **Materia prima** — tipos-de-harina, gluten, levaduras, grasas-para-
   panificación.
4. **Procesos** — amasado, fermentación-panadera, horneado,
   tipos-de-pan.
5. **Cálculo** — escalado-de-receta-por-cantidad,
   tiempos-de-fermentación-según-temperatura.
6. **Diagnóstico por casos** — diagnóstico-de-panadería-por-casos (pan
   no leva, queda denso, se quema por fuera crudo por dentro — cada uno
   su propio tema con hipótesis: levadura vencida, temperatura, tiempo
   de horneado).
7. **Normativa** — habilitación-bromatológica, rotulado-de-alimentos.

---

## Procesador de Alimentos (`OF15`) — diseñado 2026-08-09

Logro: **Técnico en Procesamiento de Alimentos**. Prerrequisitos: `Calor
Q=m·c·ΔT` (=compartido con Soldador/Metalúrgico), `Soluciones y
concentración` (Química, `QMP`).

1. **Fundamentos** — calor (=`TER2`), concentración-de-soluciones
   (=`QMP` — salmueras, almíbares).
2. **Seguridad e higiene** — cadena-de-frío, contaminación-cruzada,
   haccp-básico.
3. **Procesos** — pasteurización, conservación-de-alimentos, envasado,
   deshidratación.
4. **Cálculo** — concentración-de-solución-conservante,
   tiempo-y-temperatura-de-proceso-térmico.
5. **Diagnóstico por casos** — diagnóstico-de-procesamiento-por-casos
   (producto contaminado, vida útil corta — cada uno su propio tema
   sobre en qué punto de la cadena falló).
6. **Normativa** — habilitación-bromatológica-industrial, trazabilidad-
   alimentaria.

---

## Jardinero / Paisajista (`OF20`) — diseñado 2026-08-13

Logro: **Jardinero / Técnico en Paisajismo**. Prerrequisito: `Partes de
una planta y germinación` (Biología, `BA1P`).

Fuente: *Iniciación a la Jardinería* (Ministerio de Educación, España —
14 archivos en la carpeta, éste es el más completo y estructurado).
Distinto de `OF12` Agricultor (produce alimento) y de `OF17c`
Horticultura (también alimento) — acá el producto es ornamental/
paisajístico, no comestible.

1. **Fundamentos botánicos** — morfología-de-la-planta (=`BA1`),
   fisiología-de-la-planta, condicionantes-de-especies-vegetales
   (suelo/clima/luz), identificación-de-especies-y-sistemática.
2. **Seguridad** — epp-de-jardinero, riesgo-de-herramientas-de-corte,
   riesgo-de-productos-fitosanitarios.
3. **Materiales** — sustratos-y-tierras, abonos-y-fertilizantes,
   productos-fitosanitarios.
4. **Herramientas y maquinaria** — herramientas-manuales-de-jardinería,
   cortadora-de-césped, motosierra-de-poda, sistemas-de-riego.
5. **Técnicas** — multiplicación-de-plantas (esquejes, semilla,
   injerto), poda-de-árboles-y-arbustos-ornamentales,
   implantación-y-mantenimiento-de-praderas, diseño-de-canteros.
6. **Diagnóstico por casos** — diagnóstico-de-jardinería-por-casos
   (plaga, enfermedad, planta que no prende — cada uno su escenario).
7. **Normativa** — sin habilitación matriculada obligatoria, salvo poda
   de arbolado en espacio público (ordenanza municipal — mismo
   disclaimer que `OF4` Carpintero).

---

## Tapicero (`OF21`) — diseñado 2026-08-13

Logro: **Tapicero Oficial**. Prerrequisito: `Perímetro y área`
(Geometría, `M3P` — cortar tela a medida es, en el fondo, la misma
cuenta).

Fuente: *Manual de Tecnología de la Tapicería* (ONUDI/Naciones Unidas,
100 pág., real e institucional).

1. **Fundamentos** — tipos-de-armazón (madera, metálico, moldeado en
   plástico), medición-y-escuadre (=`M3`).
2. **Seguridad** — epp-de-tapicero, riesgo-de-grapadora-neumática,
   manejo-de-espumas-y-adhesivos.
3. **Materiales** — sistemas-de-suspensión (muelles, cinchas,
   gomaespuma), acojinado, tipos-de-tela (tejidos, punto, recubiertas,
   poliuretano), cuero-y-guarniciones-decorativas.
4. **Herramientas** — grapadora-de-tapicero, tensores-de-tela,
   aguja-curva, máquina-de-coser-industrial.
5. **Técnicas** — extendido-marcado-y-corte-de-tela,
   cosido-de-tapicería, acolchado-y-abotonado, montaje-del-tapizado.
6. **Diagnóstico por casos** — diagnóstico-de-tapicería-por-casos
   (muelle que suena, tela destensada, espuma degradada).
7. **Normativa** — sin habilitación matriculada obligatoria; nota de
   inflamabilidad de tela para uso comercial/público donde aplique.

---

## Modista / Corte y Confección (`OF22`) — diseñado 2026-08-13

Logro: **Modista / Técnico en Indumentaria**. Prerrequisito: `Razón y
proporción` (Matemáticas, `N9P` — el sistema de tallas escala un patrón
base con la misma lógica).

Fuente: 7 archivos, todos institucionales reales — SENA Colombia
(patronaje básico, corte de cuellos, ensamble de blusa), SENATI/IPACE
(confección industrial de ropa interior), MINEDU (textil y confección),
Fundación Crear Puentes (curso básico de costura).

1. **Fundamentos** — toma-de-medidas-corporales, sistema-de-tallas
   (=`N9`).
2. **Seguridad** — epp-de-modista, riesgo-de-máquina-de-coser.
3. **Materiales** — tipos-de-tela-para-confección, hilos-y-avíos,
   entretelas.
4. **Herramientas** — máquina-de-coser-doméstica,
   máquina-de-coser-industrial, overlock, patrones-y-moldes.
5. **Técnicas** — patronaje-básico, corte-de-tela, costuras-básicas,
   ensamble-de-prenda, acabados-de-prenda (dobladillos, cuellos,
   ojales).
6. **Diagnóstico por casos** — diagnóstico-de-confección-por-casos
   (prenda que no ajusta, costura que se abre).
7. **Normativa** — etiquetado-de-composición-textil.

---

## Carpintero de Aluminio / Aluminero (`OF23`) — diseñado 2026-08-13

Logro: **Carpintero de Aluminio**. Prerrequisito: `Rectas y ángulos`
(Geometría analítica, `GA6P` — mismo prerrequisito que `OF4` Carpintero,
distinto material, mismo fundamento geométrico).

Fuente: *Manual de Capacitación en Carpintería de Aluminio* (**ALUAR**
— Aluminio Argentino S.A., fuente argentina real, 244 pág.) + curso de
instalación de ventanas de aluminio y PVC (Fundación Laboral de la
Construcción) + manual de diseño de estructuras de aluminio + manual de
seguridad en carpinterías metálicas (FREMAP).

1. **Fundamentos** — historia-y-propiedades-del-aluminio,
   perfiles-de-aluminio.
2. **Seguridad** — epp-de-carpintero-metálico, riesgo-de-corte-con-
   perfiles, manejo-de-vidrio.
3. **Materiales** — perfiles-estructurales-vs-arquitectónicos,
   vidrio-dvh, burletes-y-selladores, herrajes-de-aberturas.
4. **Herramientas** — sierra-de-ingletar-para-aluminio,
   fresadora-de-aluminio, remachadora.
5. **Técnicas** — corte-y-ensamble-de-perfiles,
   instalación-de-ventana-corrediza, instalación-de-ventana-abatible,
   sellado-e-impermeabilización.
6. **Cálculo** — cómputo-de-perfiles, cálculo-estructural-básico-de-
   aberturas.
7. **Lectura de planos** — plano-de-abertura, despiece-de-perfiles.
8. **Diagnóstico por casos** — diagnóstico-de-aberturas-por-casos
   (filtración de agua, dificultad para correr, vidrio roto).
9. **Normativa** — estándares-de-calidad-iram-para-aluminio.

---

## Tornero (`OF24`) — diseñado 2026-08-13

Logro: **Tornero / Operador de Torno**. Prerrequisito: `MRU: v = d/t`
(Física, `F2P` — la velocidad de corte en torno es, literalmente, la
velocidad lineal de un punto de una pieza que gira).

Fuente: *Maestro Tornero* (CEAC, clásico técnico, 1311 pág.) + *Curso
Operador Básico de Torno Paralelo* (real, apunte de alumno) + normas
ACHS (organismo chileno de seguridad laboral, real).

1. **Fundamentos** — conocimientos-generales-de-mecánica,
   partes-del-torno-paralelo.
2. **Seguridad** — epp-de-tornero, riesgo-de-viruta-y-atrapamiento,
   normas-de-trabajo-en-tornos (=ACHS).
3. **Materiales** — metales-para-mecanizado, propiedades-de-corte.
4. **Herramientas** — herramientas-de-corte-para-mecanizado,
   ángulos-característicos-de-herramientas-cortantes,
   útiles-de-sujeción.
5. **Técnicas** — cilindrado, refrentado, roscado-en-torno,
   taladrado-en-torno.
6. **Cálculo** — velocidad-de-corte (=`F2`), avance-del-torno,
   ajuste-de-velocidades.
7. **Lectura de planos** — plano-de-pieza-mecanizada,
   tolerancias-dimensionales.
8. **Diagnóstico por casos** — diagnóstico-de-mecanizado-por-casos
   (pieza fuera de medida, acabado superficial deficiente, vibración).
9. **Normativa** — protocolo-de-trabajo-en-tornos.

---

## Cerrajero (`OF25`) — diseñado 2026-08-13

Logro: **Cerrajero Oficial**. Prerrequisito: `Rectas y ángulos`
(Geometría analítica, `GA6P` — mismo que Carpintero/Aluminero, un
mecanismo de cerradura es geometría de piezas en movimiento).

Fuente: `cerrajeria-adefec.pdf` (catálogo técnico real de herrajes:
cilindros, cerraduras de embutir madera/metal, cierrapuertas,
equipamiento antipánico) + `curso-de-cerrajeria-anonimo` (fuente no
institucional, 211 pág., usar con el mismo criterio que la de ganzúas
abajo).

1. **Fundamentos** — mecanismo-de-una-cerradura, tipos-de-cerradura
   (embutir madera/metal, sobreponer, pomo).
2. **Seguridad** — epp-de-cerrajero.
3. **Materiales** — cilindros-y-escudos-de-seguridad,
   cerrojos-y-picaportes, cierrapuertas,
   equipamiento-antipánico-y-cortafuegos.
4. **Herramientas** — extractor-de-cilindros,
   juego-de-llaves-de-cerrajero, taladro-para-cerrajería.
5. **Técnicas** — instalación-de-cerradura-de-embutir,
   colocación-en-puertas-metálicas, cambio-de-combinación,
   reparación-de-cerraduras.
6. **Diagnóstico por casos** — diagnóstico-de-cerrajería-por-casos
   (cerradura trabada, llave rota en el bombín, cerrojo que no cierra).
7. **Apertura de emergencia sin destrucción** (**avanzado — último tema
   de la progresión, decisión de Javier 2026-08-13**) —
   apertura-sin-destrucción-fundamentos, tratado a nivel conceptual:
   cuándo se usa profesionalmente (cliente que se quedó afuera),
   obligación ética/legal de verificar identidad y propiedad antes de
   abrir, tipos de mecanismos vulnerables. Fuente de referencia (no
   citada textualmente en el contenido): `Guía del Uso de Ganzúas
   Avanzado` — se usa para entender el panorama del tema, no como
   manual de técnica paso a paso a reproducir.
8. **Normativa** — sin habilitación matriculada obligatoria en general
   (como `OF4` Carpintero), salvo cajas fuertes/blindados.

---

## Herrero / Forjador (`OF26`) — diseñado 2026-08-13

Logro: **Herrero / Forjador Artístico**. Prerrequisitos: `Calor: Q =
m·c·ΔT` (Física, `TER2P` — compartido con Soldador) y `Metalurgia`
(Historia profunda, `TEC1P` — compartido con Soldador).

Fuente: *Manual de Herrería* (Ingemecánica, 135 pág.) + *La Forja
Artística* (Guillermo García Prados, maestro forjador real) + *Forja en
el Siglo XXI* (trabajo académico sobre el rol del oficio en la
edificación).

1. **Fundamentos** — calor-y-temperatura-del-metal (=`TER2`),
   metalurgia-básica (=`TEC1`, compartido con `OF8` Soldador),
   tipos-de-hierro-y-acero-para-forja.
2. **Seguridad** — epp-de-herrero (mandil de cuero, guantes,
   protección ocular), riesgo-de-quemaduras, riesgo-de-fragua.
3. **Materiales** — hierro-dulce, acero-al-carbono,
   carbón-y-combustible-de-fragua.
4. **Herramientas** — fragua, yunque, martillos-de-forja, tenazas,
   estampas-y-cinceles.
5. **Técnicas** — calentamiento-y-color-del-metal (escala de color =
   temperatura), estirado, recalcado, doblado-en-caliente,
   soldadura-por-forja, forja-artística-vs-funcional.
6. **Diagnóstico por casos** — diagnóstico-de-forja-por-casos (pieza
   que se agrieta, soldadura de forja que no prende).
7. **Normativa** — sin habilitación obligatoria en general, salvo
   estructural (rejas de seguridad según código de edificación local).

---

## Relojero (`OF27`) — diseñado 2026-08-13

Logro: **Relojero**. Prerrequisito: `Conservación de la energía
mecánica` (Física, `ENE3P` — el resorte real que guarda y libera
energía a través del tren de engranajes es exactamente ese concepto, a
escala miniatura).

Fuente: 4 archivos, más chicos que el resto (artículos técnicos, no
manuales completos, pero con vocabulario real de mecanismo): *Las
partes de un reloj mecánico*, *Desmontaje de un reloj mecánico simple*
(movimiento Unitas 6497), *Limpieza y mantenimiento de relojes*.

1. **Fundamentos** — partes-de-un-reloj-mecánico (motor, rodaje,
   escape, órgano regulador — =`ENE3` aplicado), tipos-de-movimiento
   (mecánico manual, automático, cuarzo).
2. **Seguridad** — epp-de-relojero, manejo-de-solventes-de-limpieza
   (bencina, amoníaco diluido).
3. **Materiales** — aceites-y-lubricantes-de-relojería,
   solventes-de-limpieza.
4. **Herramientas** — destornilladores-de-relojero,
   pinzas-de-precisión, limpiador-de-ultrasonido, lupa-de-relojero.
5. **Técnicas** — desmontaje-de-movimiento-mecánico,
   limpieza-por-ultrasonido, engrase-de-piezas, montaje-y-ajuste.
6. **Diagnóstico por casos** — diagnóstico-de-relojería-por-casos
   (reloj atrasa/adelanta, no arranca, corona trabada).
7. **Normativa** — oficio artesanal libre, sin habilitación obligatoria.

---

## Cocina/Gastronomía (oficio #17, agregado por Javier — NO está en troncos.md)

Logro: a definir (no hay credencial de mercado tan estandarizada como
las 16 de INET — candidato: "Cocinero Profesional"). **Pendiente sumar
como `OF19` en troncos.md si se formaliza.**

**Dos rutas separadas** (Javier, 2026-08-10): cocina tiene teoría real,
no es sólo "seguir una receta" — separar "qué cocinar" (recetas, ruta
práctica progresiva) de "cosas importantes" (técnica/teoría, ruta seria
evaluable) evita mezclar dos tipos de contenido distintos en una sola
lista.

### Ruta A — Técnica y teoría (seria, evaluable con matriz de competencias)

1. **Fundamentos** — escalar-una-receta (=`E8`), temperatura-en-cocina
   (=`TER1`) — comparte piso con Panadero, distinto oficio.
2. **Seguridad e higiene alimentaria** — manipulación-de-alimentos-en-
   cocina, cadena-de-frío-en-cocina, alergenos-en-cocina, haccp-básico
   (=comparte con Procesador de Alimentos).
3. **Técnicas de cocción** — métodos-de-cocción, puntos-de-cocción,
   mise-en-place.
4. **Materia prima** — cortes-de-cocina, técnicas-de-conservación,
   productos-de-temporada.
5. **Cálculo** — escalado-de-receta-de-cocina, costeo-de-plato.
6. **Diagnóstico por casos** — diagnóstico-de-cocina-por-casos (plato
   no liga, se corta, queda soso — cada uno su propio tema).

### Ruta B — Recetas (qué cocinar, progresiva, entrega práctica)

No es cuestionario tipo VBLang — es la ruta de "hacer" (misma vía de
entrega práctica con tutor que el resto de oficios, foto/video de
evidencia). Progresión de simple a compleja, terminando en la receta
más difícil (ya lista). **Ruta especial** (Javier, 2026-08-10): son
recetas particulares/poco convencionales, no recetas estándar de
manual — a propósito. Incluye también la **sección opcional de recetas
de los devs** — no evaluada, cultura de equipo insertada en el
contenido real.

**Prerrequisitos concretos para la receta final** (Javier, 2026-08-10):
llegar directo a la receta final sin base no alcanza — hace falta
entender panadería antes, no sólo seguir los pasos. Cadena real:
1. **Harina**: tipos (0000, 000, con levadura ya incorporada vs. sin),
   contenido de gluten, por qué importa para panificación.
2. **Panificación básica**: fermentación, levadura vs. polvo leudante,
   amasado, punto de la masa.
3. **Tipos de pan**: clasificación general (magro vs. enriquecido,
   con/sin grasa, con/sin huevo) — dónde encaja cada tipo.
4. **Pan brioche específicamente**: masa enriquecida (manteca, huevo,
   azúcar), técnica de amasado más larga, por qué lleva más fermentación
   que un pan común — la receta final es, en esencia, una variante de
   brioche relleno.
5. **Recién ahí, la receta final** (medallón + masa de pan) tiene
   sentido como síntesis de todo lo anterior, no como receta aislada.

### Catálogo de hasta 150 recetas (Javier, 2026-08-10) — categorías, no recetas escritas todavía

Gastronomía es rentable como salida laboral real, justifica el volumen.
Categorías sacadas de currícula real de escuelas de gastronomía (Instituto
Campechano, UABJO, UCASAL, Cocineros Patagónicos — ver fuentes), no
inventadas: fondos/salsas, técnicas de carnes, panadería, repostería,
cocina regional/internacional, coctelería. Esto es la **estructura**
(cuántas recetas por área y en qué nivel), no las recetas en sí — esas
se generan/curan después, mismo criterio que el resto del proyecto
(planificar primero, generar después).

| Categoría | Cantidad | Nivel |
|---|---:|---|
| Fondos, salsas y guarniciones clásicas | 15 | básico→intermedio |
| Cortes y técnicas de carnes | 10 | básico→intermedio |
| Parrilla y asado (fuerte en Argentina) | 15 | básico→avanzado |
| Pastas caseras | 12 | básico→intermedio |
| Panificación (conecta con la cadena harina→brioche ya definida) | 15 | básico→avanzado |
| Repostería y pastelería | 15 | intermedio→avanzado |
| Cocina regional argentina | 15 | básico→avanzado |
| Cocina internacional (por región) | 20 | intermedio→avanzado |
| Vegetales y guarniciones | 10 | básico |
| Fiambres, embutidos y conservas | 8 | intermedio |
| Bebidas **sin alcohol** (mate, malta como sustituto histórico del café, mocktails) | 8 | básico |
| Postres helados y fríos | 7 | intermedio |
| **Total** | **150** | |

**Nota importante**: coctelería queda limitada a **sin alcohol** — la
plataforma tiene alumnos menores de edad, no corresponde enseñar
preparación de bebidas alcohólicas como contenido educativo regular
(Javier: si no fuera por eso, entraría algo como Yegua Negra). En
cambio sí entra cultura real sin ese problema: mate, malta como
sustituto histórico del café (costumbre real, poco conocida hoy),
mocktails.

**Fermentación/maceración como teoría, no como receta** (Javier,
2026-08-10): las únicas bebidas con alcohol realmente reconocidas en
Argentina son limoncello y Hesperidina (licor de naranja) — sirven como
ejemplo real y reconocible para explicar **qué pasa químicamente al
fermentar/macerar algo** (extracción de aceites esenciales de cáscara
cítrica en alcohol, fermentación de azúcares), como contenido de
ciencia/historia, NO como receta ejecutable por el alumno — mismo
criterio que otros temas sensibles del mapa: se explica el proceso, no
se enseña a producir ni consumir.

**Primer ejemplo real de mocktail (Javier, 2026-08-10) — Mojito de cereza (sin alcohol)**

Ingredientes: 1/4 taza de cerezas dulces, 1/2 vaso de jugo de lima
fresco, 4 hojas de menta fresca, 1/2 vaso de agua con gas.

Preparación:
1. Lavar y cortar las cerezas en trozos que pasen por el popote/pajilla.
2. Agregar al vaso el jugo de lima y las cerezas picadas.
3. Mezclar con cuchara de madera, triturando un poco la cereza.
4. Aplastar la menta fresca lavada con la mano (para liberar aroma) y
   agregar al vaso.
5. Incorporar hielo y completar con agua con gas.

**Balance conocido/desconocido en Cocina regional argentina**: el
asado es lo más sabido de lejos — la categoría no debería ser sólo
asado repetido, sino usar el margen para meter platos regionales menos
conocidos (más allá de lo obvio), con el mismo criterio de trasfondo
histórico que ya usa el resto del mapa (Historia profunda, corrientes
de pensamiento).

Fuentes de referencia para la estructura curricular (no para las
recetas puntuales, que son criterio propio/de los devs):
[Instituto Campechano](https://transparencia.instcamp.edu.mx/wp-content/uploads/2017/01/PLAN-DE-ESTUDIOS_GASTRONOMIA.pdf),
[UABJO](https://gastronomia.uabjo.mx/media/5/2017/02/MapaCurricularLG.pdf),
[UCASAL](https://www.ucasal.edu.ar/wp-content/uploads/2025/11/PLAN-DE-ESTUDIO-LICENCIATURA-EN-GASTRONOMIA.pdf),
[Cocineros Patagónicos](https://cocinerospatagonicos.com/landing-informativa/tec-superior-en-gastronomia/).

### Receta final de la Ruta B (corregida, sin rediseñar — Javier, 2026-08-10)

**Medallones de hamburguesa**

Ingredientes:
- Carne picada especial 82%
- Mostaza
- 2 cebollas chicas (o 1 mediana)
- Pan rallado (aglutinante)
- Sal
- Provenzal

Preparación:
1. En un recipiente, mezclar la carne picada con la cebolla picada
   fina, mostaza a gusto, sal entre 1% y 1.5% del peso de la carne (en
   este ejemplo, para 1kg de carne: 10g a 15g), pan rallado entre 30g y
   50g, y provenzal a gusto.
2. Pesar y dividir en bollos de aproximadamente 80g.
3. Cocinar los medallones a la plancha o sartén, retirando/desgrasando
   bien durante la cocción.
4. Retirar del fuego y dejar enfriar completamente antes del armado
   (para no transmitir calor a la masa cruda).

Enlaces: Picada Especial - Los Prados.

**Masa para pan (bollos rellenos)**

Ingredientes:
- 1kg de harina con levadura, especial para panes caseros
- 400ml de leche tibia
- 200g de manteca pomada
- 110g de azúcar
- 7 huevos (3 enteros, 3 yemas y 1 para pincelar)
- 20g de sal
- Semillas a elección

Preparación:
1. En un recipiente poner la harina, la sal y el azúcar; agregar los 3
   huevos y las 3 yemas, y la leche tibia; agregar la manteca y
   empezar a integrar amasando entre 5 y 8 minutos.
2. Dejar fermentar entre 30 minutos y 1 hora.
3. Dividir en la misma cantidad de bollos que medallones se hayan hecho.
4. Estirar la masa de cada bollo, poner en el medio el medallón de
   carne (y lo que se quiera agregar, por ejemplo queso).
5. Dejar fermentar los bollos entre 30 y 40 minutos.
6. Pincelar con huevo la superficie y agregar las semillas.
7. Hornear a 180°C durante 15 a 18 minutos.
8. Retirar del horno y dejar enfriar.

---

## Guía Turístico (oficio #18, agregado por Javier — NO está en troncos.md)

Movido acá desde `examen-jefe-gamificacion-PLANIFICACION.md`: los 4
temas ya generados en `material/turismo/` (circuitos e itinerarios,
planificación de destino, estrategias de comunicación para promoción
turística, patrimonio turístico natural y cultural) encajan mejor como
práctica de oficio que como contenido de examen académico — es otro
punto de vista para el mismo contenido, no una duplicación.

Logro: a definir (candidato: "Guía Turístico Habilitado" — en Argentina
existe matrícula real de guía de turismo por provincia). **Pendiente
sumar como `OF20` en troncos.md si se formaliza.**

1. **Fundamentos** — los 4 temas ya generados en `material/turismo/`
   (circuitos-e-itinerarios, planificación-de-destino,
   patrimonio-turístico-natural-y-cultural, comunicación-para-promoción-
   turística).
2. **Seguridad y protocolo** — primeros-auxilios-básicos-en-grupo,
   manejo-de-emergencias-en-excursión, protocolo-con-grupos-turísticos.
3. **Comunicación con el visitante** — oratoria-para-guías,
   manejo-de-grupo-turístico, atención-a-necesidades-especiales,
   multilingüismo-para-guías (conecta con Tronco 18 si el guía atiende
   turistas extranjeros).
4. **Diagnóstico por casos** — diagnóstico-turístico-por-casos (grupo
   se dispersa, imprevisto climático, reclamo de un visitante — cada
   uno su propio tema sobre cómo priorizar y resolver).
5. **Normativa** — habilitación-de-guía-de-turismo (matrícula
   provincial en Argentina), responsabilidad-civil-del-guía.

---

## Finales de ruta técnicos/informáticos — diseñado (2026-08-10)

Los "finales de ruta" no tienen que ser oficios tradicionales — un
lenguaje de programación específico o una habilidad técnica puntual son
destinos tan legítimos como Electricista o Plomero (mismo patrón: nodo
final colgando de un tronco).

### Bash / Shell scripting

Cuelga de Informática (Tronco 10, variables/control de flujo ya vistos).
1. **Fundamentos**: sintaxis de shell, variables, comillas, expansión.
2. **Control de flujo**: condicionales, bucles, funciones en bash.
3. **Procesamiento de texto**: grep, sed, awk, pipes y redirecciones.
4. **Automatización**: scripts ejecutables, permisos, cron/tareas
   programadas.
5. **Diagnóstico por casos**: script falla silenciosamente/permiso
   denegado/variable vacía → hipótesis, mismo patrón de diagnóstico
   progresivo que oficios.

### PowerShell

Mismo piso de Fundamentos/Control de flujo que Bash, pero remarcando la
diferencia real: PowerShell pasa **objetos** por la tubería, Bash pasa
**texto** — no es "lo mismo pero para Windows".
1. **Fundamentos y cmdlets**: verbo-sustantivo, get-help, pipeline de
   objetos (vs. texto de Bash).
2. **Control de flujo**: condicionales, bucles, funciones.
3. **Administración básica**: procesos, servicios, sistema de archivos.
4. **Scripts** (.ps1): automatización, políticas de ejecución.
5. **Diagnóstico por casos**: mismo patrón que Bash.

### QA / Testing

Nodo compartido entre Automatización (Tronco 20) e Informática — es una
disciplina transversal, no exclusiva de un lenguaje.
1. **Fundamentos**: qué es testear, tipos de testing (unitario,
   integración, end-to-end, manual vs. automatizado).
2. **Diseño de casos de prueba**: caso feliz, casos borde, casos
   negativos.
3. **Reporte de bugs**: cómo documentar un defecto reproducible
   (pasos, esperado vs. real, severidad).
4. **Testing exploratorio**: heurísticas, sin script previo.
5. **Diagnóstico por casos**: bug intermitente/no reproducible →
   hipótesis sobre qué variable no se está controlando.

### Informática ramificada (mismo título "Informático", varias rutas)

No se cambia el nombre del nodo — se agregan ramas debajo, mismo
criterio de granularidad que ya usa Oficios (16 ramas de un tronco).
Cada rama comparte el piso de programación (Tronco 10) y diverge según
especialidad. **Atomizado 2026-08-11** (cada rama era 1 solo tema
"overview" — mismo anti-patrón que Bash/SQL antes del fix, un módulo
intentando cubrir 4-5 conceptos distintos en un cuestionario). Lista
completa de slugs en `temas_materias_nuevas.py`; acá sólo el resumen
por rama, grounded en los libros de `tareas_pendientes/libros/` donde
había uno específico:
- **Backend** (3 temas): APIs REST, arquitectura de servidores,
  autenticación y autorización (conecta con el nodo SQL más abajo).
- **Frontend** (6 temas, grounded en `HTML5-ARKAITZ-GARRO`,
  `CSS3-y-JavaScript-Avanzado`, `CSSNotesForProfessionals`,
  `JAVASCRIPT-eloquente`, `JavaScript-para-Gatos`,
  `orientacion-a-objetos-en-javascript`, `typescript-es`): HTML
  semántico, CSS y maquetación, JavaScript fundamentos, JavaScript
  orientado a objetos, TypeScript fundamentos, experiencia de usuario
  básica (conecta con Diseño gráfico/UX más abajo).
- **DevOps/SRE** (4 temas, grounded en `progit`, `gitmagic`,
  `introduction-to-docker-light`): control de versiones (Git),
  contenedores (Docker), CI/CD fundamentos, infraestructura como
  código (conecta con Bash/PowerShell de arriba).
- **Ciencia de Datos** (4 temas, grounded en
  `estadistica-probabilidad-e-inferencia`, `introduccion-a-la-
  estadistica`, `Basic-Statistics-Using-R-JChoi`,
  `R-intro-1.1.0-espanol`): estadística descriptiva, probabilidad
  aplicada, limpieza de datos, visualización de datos.
- **Ciberseguridad** (4 temas, grounded en `curso-de-criptografia-
  aplicada`, `manual-ciberseguridad-para-organizaciones-de-la-
  sociedad-civil`, `Seguridad_por_Niveles_V-001`, `passwords`,
  `homesec`): vulnerabilidades comunes, criptografía básica, gestión
  de contraseñas, hardening básico — mismo disclaimer que otros
  oficios sensibles: uso defensivo/educativo, no herramientas
  ofensivas reales.
- **QA/Testing**: =nodo compartido ya definido arriba, no se duplica.
- **DBA** (4 temas, suma `mongodb.pdf` como contraste NoSQL):
  administración de usuarios y permisos, backups y recuperación,
  optimización de performance, bases de datos NoSQL — conecta con SQL
  más abajo.

### Ofimática (3 rutas confirmadas + 1 agregada)

Bases confirmadas sin cambios — procesador de texto, planilla de
cálculo, presentaciones. Se agrega una 4ª ruta por pedido de Javier
(herramientas tipo "Project"):
1. **Procesador de texto**: formato, estilos, plantillas, combinación
   de correspondencia.
2. **Planilla de cálculo**: fórmulas, referencias relativas/absolutas,
   tablas dinámicas, gráficos.
3. **Presentaciones**: estructura de una presentación, diseño de
   diapositivas (no confundir con Diseño gráfico — acá es armar, no
   crear arte).
4. **Gestión de proyectos** (nueva, tipo MS Project/Trello/Asana):
   cronogramas, diagrama de Gantt, dependencias entre tareas, asignación
   de recursos — herramienta útil real, mismo criterio "una herramienta
   = una ruta".
5. **Macros básicas** (agregado 2026-08-11, dentro de Planilla de
   cálculo): confirmado por `CURSO EXPERTO MICROSOFT EXCEL 2013.pdf`
   (unidad 18 de 19, propia) + 2 libros dedicados en
   `tareas_pendientes/libros/` (`Curso de Programación de Macros en
   Excel`, `Introducción en Excel con VBA`).

**Granularidad real (2026-08-11)**: la lista de arriba es la vista de
categorías; la lista completa de temas atómicos (1 concepto = 1
carpeta, mismo criterio aplicado a oficios) para Bash/PowerShell/QA/
Ofimática/SQL/Redes vive en `temas_materias_nuevas.py`
(scratchpad de la sesión) — 86 temas nuevos en total, contra los 43
generados en la primera pasada con menos granularidad (esa primera
pasada se descartó y se regenera desde cero con los slugs finos).

### Diseño gráfico (3 rutas, Tronco 21 UX/Diseño)

1. **Edición de imagen** (tipo Photoshop): capas, selección, retoque,
   formatos de exportación.
2. **Vectorial** (tipo Illustrator): trazado, curvas Bézier, tipografía
   vectorial, escalabilidad sin pérdida.
3. **Prototipado** (tipo Figma): wireframes, componentes reusables,
   prototipos interactivos, handoff a desarrollo (conecta con
   Frontend de Informática).

### Edición audiovisual (2 rutas)

1. **Edición de video**: cortes, transiciones, corrección de color,
   exportación por formato/plataforma.
2. **Edición de audio**: niveles, ecualización, reducción de ruido,
   mezcla básica.

### SQL / Bases de datos

**Corrección 2026-08-11**: "Fundamentos" (modelo relacional, tablas,
claves primarias/foráneas) sacado — duplica exacto lo que ya está
generado en `material/informatica/` (Tronco 10.a:
`modelo-relacional-tabla-registro-clave-primaria`,
`relaciones-y-claves-foraneas`). SQL ahora tiene ese tema como
**prerrequisito** en vez de repetirlo.
1. **Consultas**: SELECT, WHERE, JOIN, agregaciones (GROUP BY),
   **subconsultas** (agregado 2026-08-11, confirmado por
   `structured-query-language.pdf` — Wikibooks SQL Standard Track,
   unidad propia entre Join y Set operations).
2. **Modificación de datos**: INSERT, UPDATE, DELETE, transacciones.
3. **Diseño de esquema**: normalización, índices básicos.
4. **Diagnóstico por casos**: consulta lenta/resultado inesperado →
   hipótesis (falta índice, JOIN mal armado, condición ambigua).

### Redes / Administración de redes

Tipo certificación CCNA — distinto de programar, sin nodo propio hoy.
**Corrección 2026-08-11**: "Fundamentos" (modelo OSI/TCP-IP, IP y
máscaras, DNS, DHCP) y "Seguridad de red" sacados — duplican
`tcp-ip-capas-enrutamiento`, `direccionamiento-ip-dns` y
`seguridad-de-red-firewall-vpn-cifrado`, ya generados en
`material/informatica/`. Quedan como prerrequisito.
1. **Dispositivos**: routers, switches, firewalls — qué hace cada uno
   (hardware concreto, no lo cubre Informática).
2. **Configuración básica**: subredes, VLANs, NAT (configuración
   paso a paso, práctica, no lo cubre Informática).
3. **Diagnóstico por casos**: "no hay internet pero la red local anda"
   → hipótesis (DNS, gateway, DHCP) — mismo patrón de diagnóstico
   progresivo que el resto del documento.

### Operadores (nuevo, 2026-08-11 — va a Tronco 10.a, no es ruta nueva)

Gap real detectado por Javier: ni `variables-y-tipos-de-dato` ni
`estructuras-de-control-condicionales` nombran los operadores aparte,
y en la enseñanza real (PSeInt, escuela técnica argentina) es una
unidad propia. Se suma a `material/informatica/` existente, no es un
oficio ni una ruta nueva.
1. `operadores-aritmeticos`, `operadores-relacionales`,
   `operadores-logicos`.

### PSeInt (nuevo, 2026-08-11)

La puerta de entrada real a programación en la escuela técnica
argentina — pseudocódigo en español + diagramas de flujo, antes de un
lenguaje real (Bash/PowerShell/SQL). Mismo patrón "una herramienta =
una ruta" que Ofimática/Mecanografía. Cuelga de Informática (Tronco 10,
Algoritmo/Variables/Estructuras de control/Funciones ya vistos como
concepto — acá se practica con la sintaxis y el diagrama de flujo real
de la herramienta).
1. **Sintaxis y pseudocódigo**: estructura de un algoritmo en PSeInt.
2. **Diagramas de flujo**: representación gráfica del algoritmo.
3. **Variables y tipos**: declaración, asignación, entrada/salida
   (`Leer`/`Escribir`).
4. **Estructuras de control**: `Si`/`Mientras`/`Para` en sintaxis
   PSeInt.
5. **Funciones**: subprocesos en PSeInt.
6. **Tablas/arreglos** (agregado 2026-08-11, confirmado por
   `aprender-a-programar-ejemplos-en-pseint.pdf` cap. 3, unidad propia
   junto a Estructuras de control): declaración, recorrido, uso típico.
7. **Diagnóstico por casos**: algoritmo no da el resultado esperado →
   hipótesis (mismo patrón de diagnóstico progresivo que el resto).

### Scratch (nuevo, 2026-08-11)

Puerta de entrada visual/bloques, nivel inicial — más chico que PSeInt,
mismo lugar en el árbol (previo a un lenguaje real). Útil para el
alumno que todavía no lee bien sintaxis de texto.
1. **Bloques y eventos**: qué dispara la ejecución.
2. **Secuencias y bucles**: bloques de repetición.
3. **Condicionales**: bloques `si`/`si-no`.
4. **Variables**: crear y usar una variable en Scratch.
5. **Proyecto simple**: armar un mini-proyecto integrador (animación o
   juego simple) con lo anterior.

### Mecanografía

Prerrequisito real de casi cualquier otro final de ruta de computación,
ninguna escuela lo enseña explícito como habilidad en sí.
1. **QWERTY Español** (con Ñ, tildes, ¿¡): posición de dedos, teclas
   base, progresión por fila.
2. **QWERTY Inglés** (US, sin Ñ/tildes nativas): mismo método, remarcar
   las diferencias de layout con el Español.
3. **Velocidad y precisión**: ejercicios progresivos, medición de
   palabras por minuto sin mirar el teclado.

(QWERTY Portugués anotado como variante rara pero disponible, no
prioritaria; AZERTY francés descartado, no se consigue en Argentina.)

---

## Profesiones académicas (15) — sin trabajo pendiente

Matemático, Físico, Químico, Biólogo, Médico, Informático/Programador,
Ingeniero, Investigador científico, Administrador, Abogado, Economista,
Historiador, Geógrafo, Escritor/Periodista, Docente. `troncos.md` ya las
cuelga del nodo más avanzado de su tronco de origen — cubiertas por el
contenido académico existente, sin necesidad de `orientacion-vocacional/`
propia. Cierran acá, no vuelven a esta lista.

## Diseño completo — los 16 + Cocina + Guía Turístico (2026-08-09)

Los 16 oficios reales de `troncos.md` (Electricista, Técnico
Electromecánico, Técnico en Automatización y Robótica, Plomero,
Gasista, Técnico en Refrigeración y Climatización, Albañil/Constructor,
Montador de Estructuras, Carpintero, Soldador, Metalúrgico, Mecánico,
Agricultor, Operario Agrícola, Panadero, Procesador de Alimentos) +
Cocina/Gastronomía + Guía Turístico (18 en total) quedaron todos
diseñados arriba, con temas atómicos (1 tema = 1 carpeta, ver "Temas
separados en atómicos" en Decisiones confirmadas), prerrequisitos
reales de `troncos.md` y nombre de logro. **Ninguno generado todavía**
— sigue pendiente de confirmación antes de tocar el pipeline de crudos.

## Arquitectura aprobada (2026-08-09, Javier + revisión GPT)

- ✅ Un grafo de competencias, no 32 cursos aislados.
- ✅ Nodos compartidos realmente únicos (mismo nodo, no copias).
- ✅ Prerrequisitos entre competencias.
- ✅ Teoría / Cuestionario / Casos / Práctica como dimensiones
  independientes, no un combo fijo.
- ✅ Práctica explícitamente NO evaluada por el sistema.
- ✅ El sistema no certifica profesionalmente.
- ✅ Rutas profesionales = caminos distintos sobre el mismo grafo.
- ✅ Competencias adquiridas en un oficio desbloquean nodos de otro.
- ✅ Diagnóstico basado en casos con datos progresivos, no definiciones.
- ✅ Diferenciar nodo común de su extensión/contextualización por oficio.
- ✅ Reutilizar primero lo que ya existe en `troncos.md` antes de
  generar un nodo nuevo.

**Resuelto**: "Técnico en Automatización y Robótica" (cluster
Metalurgia y mecánica) NO es un oficio #33 nuevo — es el mismo que ya
diseñamos como "Robótica" más arriba, sólo con el nombre largo del
listado original. Cluster Metalurgia y mecánica queda: Técnico
Electromecánico ✅, Técnico en Automatización y Robótica ✅ (=Robótica),
pendientes Soldador, Metalúrgico, Mecánico.

**Orden de trabajo confirmado**: registro maestro de nodos compartidos
primero (ver abajo) → luego Mecánico (el que más pone a prueba si el
grafo está bien diseñado, por su solapamiento con Electromecánico).

## Registro maestro de nodos compartidos (borrador inicial)

Extraído de los 3 oficios ya diseñados. Falta cruzar cada uno contra
`troncos.md` para confirmar cuáles ya existen como tema de tronco vs
cuáles son nuevos de `orientacion-vocacional`.

| Nodo | Compartido por | ¿Existe en troncos.md? |
|---|---|---|
| Ley de Ohm / electricidad básica | Electricista (`OF1`), Electromecánico (`OF11`), Robótica | ✅ `FIS5` (Física) |
| Circuitos, Generador/motor/transformador | Electricista, Electromecánico | ✅ `FIS9`, `FIS13` (Física) |
| Seguridad de laboratorio / EPP | (variante genérica, no específica de eléctrico) | ✅ `QSAFE` (Química) — falta una variante de seguridad ELÉCTRICA específica, esta es de laboratorio |
| Torque / momento de una fuerza | Electromecánico (`OF11` vía `ENE1`/`ENE3`), Mecánico (`OF5` vía `F7`) | ✅ `EST1a` (Física) |
| Trabajo de una fuerza, energía cinética/mecánica | Mecánico (`OF5`), Electromecánico (`OF11`) | ✅ `F7`, `ENE1`, `ENE3` (Física) |
| Control: lazo abierto/cerrado, proporcional, PID | Electromecánico (`OF11`), Robótica/`OF16` | ✅ `CTRL1`-`CTRL3a` (rama Sistemas de Control ya construida) |
| PLC / servomecanismos | Electromecánico, `OF16` | ✅ `CTRL4`, `CTRL5` (retoma Estructuras de control de Informática) |
| Sensores y actuadores | Electromecánico, `OF16` | ✅ `EL5` (Electrónica) — ya es prerrequisito directo de `CTRL1` |
| Transistor / semiconductores | Electromecánico, `OF16` | ✅ `EL1d` y cadena `EL4` (Electrónica) |
| Fatiga y fractura / propiedades de materiales | Soldador (`OF8`), Metalúrgico (`OF9`), Mecánico (`OF5`) | ✅ `CM3`, `CM4` (rama de materiales, Química) |
| Calor Q=m·c·ΔT | Soldador (`OF8`), Procesador de Alimentos (`OF15`) | ✅ `TER2` (Física) |
| Oxidación y reducción | Metalúrgico (`OF9`) | ✅ `QWP` (Química) |
| Diagnóstico de fallas (metodología de casos progresivos) | todos los oficios técnicos | nuevo — patrón de pregunta, no tema de tronco existente |
| Dibujo técnico / lectura de planos | Electricista, Electromecánico | ✅ Tronco 14 (Dibujo Técnico y Arquitectura) |

**Conclusión del cruce**: la enorme mayoría de los nodos "compartidos"
que proponía GPT YA EXISTEN como temas de tronco, con los IDs
(`FIS5`, `CTRL1`-`CTRL5`, `EL1d`-`EL5`, `EST1a`, `CM3`-`CM4`, etc.) ya
enlazados como prerrequisito directo de los `OFn` correspondientes en
`troncos.md`. Lo que falta generar de verdad es angosto: la seguridad
ELÉCTRICA específica (no la de laboratorio), y el patrón de preguntas
de diagnóstico por casos (nuevo, no es un tema de tronco, es un formato
de cuestionario a definir dentro de `orientacion-vocacional`).

**Nodos NO compartidos (específicos de un solo oficio, no van al
registro maestro)**: Cinemática/Dinámica/ROS/Visión artificial/IA
(Robótica), Mecanizado/torno/CNC (Electromecánico), Normativa eléctrica
(Electricista).

## Decisiones confirmadas (2026-08-10)

1. **Orden de ejecución — Oficios va AL FINAL.** Necesita todo el
   contenido básico (Tronco 1-21 + idiomas) terminado y corregido
   primero. Estructura de los 18 revisada de nuevo, sin cambios — queda
   confirmada tal cual.
2. **Mismo pipeline que idiomas** (crudos vía qwen, 20-40 preguntas,
   `completar`/`mc`), **mientras el DSL alcance** — si algún oficio
   necesita algo que el DSL no tiene (ej. evaluar una instalación real),
   ese punto queda `abierta` con corrección de instructor, como ya
   estaba previsto.
3. **Cocina formalizada como `OF19` en `troncos.md`** — hecho
   (2026-08-10): nodo agregado al cluster Agro y alimentos (mismo piso
   que Panadero: `E8` escalar receta + `TER1` temperatura), sumado a la
   tabla de logros ("Cocinero Profesional").
4. **Recetas de los devs = ruta especial**, confirmado — recetas
   particulares/poco convencionales a propósito, no manual estándar.
   Receta final (la más difícil) ya corregida arriba; pueden sumarse
   intermedias más simples antes de llegar a ella cuando se retome esta
   sección.
5. **Temas separados en atómicos (2026-08-11)** — cada categoría de
   cada oficio (los 16 reales + Cocina Ruta A + Guía Turístico) quedó
   explotada de "un nivel = 5 a 15 conceptos juntos en una frase" a "un
   tema = un concepto = una carpeta de generación", sin recortar
   cobertura (extensión no importa, cubrir la base teórica completa sí).
   Los `slugs` listados en cada oficio son la unidad real de generación
   futura (1 `teoria_crudo.md` + 1 `cuestionario_crudo.md` por slug),
   mismo criterio de granularidad que ya usan Troncos 1-21 y
   `orientacion-vocacional`. **No aplicado** a "Finales de ruta
   técnicos/informáticos" (Bash/PowerShell/QA/Ofimática/etc.) porque esa
   sección ya se generó con la granularidad vieja (43 temas,
   `gen_materias_nuevas.py`, ver [[idea-oficios-orientacion-vocacional]]
   y la sesión del 2026-08-11) — cambiarla ahora invalidaría contenido
   ya generado.

---

## Oficios nuevos encontrados en biblioteca (2026-08-13) — ✅ diseñados, ver secciones propias arriba (`OF20`-`OF27`)

Historial de cómo se encontró cada uno y por qué es oficio nuevo. El
diseño completo (6-9 secciones, logro, prerrequisito de tronco, fuentes)
ya está escrito arriba junto al resto de los `OF`, y ya aplicado a
`troncos.md` (nuevo cluster "Textil y oficios de precisión" + 2 oficios
sumados a "Construcción e infraestructura" + 2 a "Metalurgia y mecánica"
+ 1 a "Agro y alimentos", más las 8 filas nuevas en la tabla de logros).

Javier armó `tareas_pendientes/libros/oficios/` con carpetas por oficio
(Albañil ya diseñado arriba, ver fuentes en su sección). El resto está
en investigación: confirmar que la carpeta revela un oficio genuinamente
nuevo (no rama de uno de los 17 existentes) antes de diseñarlo. Hasta
ahora:

**Confirmados como oficio nuevo, con fuente real** (ninguno pisa un
`OF` existente — verificado contra los 17 diseños de arriba):
- **Jardinero/Paisajista** — *Iniciación a la Jardinería* (Ministerio
  de Educación España). Distinto de `OF12` Agricultor (alimento) y de
  `OF17c` Horticultura (también alimento) — jardinería es ornamental/
  paisajismo urbano.
- **Tapicero** — *Manual de Tecnología de la Tapicería* (ONUDI). Nada
  parecido en los 17 oficios actuales.
- **Modista / Corte y Confección** — *Patronaje básico e
  interpretación de diseños* (SENA Colombia). Nada parecido existe.
- **Carpintero de Aluminio / Aluminero** — *Manual de Capacitación en
  Carpintería de Aluminio* (**ALUAR**, fuente argentina real). `OF4`
  Carpintero es 100% madera — cero superposición.
- **Tornero** — *Maestro Tornero* (CEAC) + *Curso Operador Básico de
  Torno Paralelo* (real, con normas ACHS). Distinto de `OF9`
  Metalúrgico (fundición) y de `OF8` Soldador.
- **Cerrajero** — 3 de 4 archivos son curso de oficio real
  (instalación de cerraduras/cilindros, equipamiento antipánico,
  ADEFEC). El 4º (*Guía del Uso de Ganzúas Avanzado*, fuente de
  comunidad hobby, no institucional) **decisión de Javier
  2026-08-13**: entra igual, pero como el último tema de la
  progresión del oficio — requiere práctica y paciencia, encaja con
  la lógica de "lo avanzado va al final" del resto de los oficios, y
  de paso queda naturalmente detrás de todo el resto del contenido
  del oficio en vez de ser lo primero que se enseña.

**Revisado 2026-08-13 — carpetas de refuerzo, contra los diseños ya
hechos de `OF4`/`OF5`/`OF2`/`OF8`/`OF7`**:

- **Carpintería** (6 archivos): confirma y enriquece — CONFEMADERA
  (España) para instalación, glosario técnico, proyectos de ejemplo.
  Nada nuevo, `OF4` ya cubre bien.
- **Fontanería y Plomería** (14 archivos): confirma — la termofusión ya
  estaba (`termofusión-de-cañería`). Mejora real: *Guía práctica de
  plomería para tu casa* es de **AYSA** (Aguas y Saneamientos
  Argentinos, la empresa real de agua de Buenos Aires) — primera fuente
  explícitamente argentina para este oficio, buena para cuando se
  genere contenido. Sin nodo nuevo.
- **Soldadura** (6 archivos): confirma — 3 son de la UNLP (amperaje,
  electrodos, posiciones), buena fuente académica argentina. Sin nodo
  nuevo (posición de soldadura ya estaba implícita en
  `certificación-iram-ias-por-proceso-y-posición`).
- **Refrigeración** (12 archivos): confirma y enriquece bien
  (compresores, evaporadores/condensadores a fondo, Danfoss como marca
  real). Sin nodo nuevo.
- **Mecánica Automotriz** (9 archivos): confirma la mayoría (Bosch para
  inyección electrónica, INACAP para lectura de planos). **1 hallazgo
  real**: `funcionamiento-de-un-auto-eléctrico` — `OF5` está diseñado
  100% a combustión (ciclo Otto/Diésel, embrague, caja de cambios,
  diferencial — nada de eso aplica a un eléctrico: motor único,
  reductora, sin embrague, freno regenerativo, batería de alta
  tensión). Candidato a sumar `fundamentos-de-vehiculo-electrico` como
  tema moderno, mismo patrón que `OF18` (modelos de producción) sumó
  lo contemporáneo a Agricultor.

**Confirmado — Mecánica de Motos amerita rama propia**: `Manual
Reparación de Motocicletas` (INATEC, Nicaragua — curso de oficio
formal real con unidad de competencia) más `motor-de-dos-tiempos` y
`Carburación y gases en motos 2T y 4T` — tecnología que **no existe en
autos** (`OF5` sólo tiene 4 tiempos, embrague/caja para transmisión de
4 ruedas). Moto usa cadena de transmisión en vez de diferencial, motor
2 tiempos frecuente en modelos chicos, sistema eléctrico distinto
(CDI). Candidato: rama `mecanico-de-motos` colgando de "Fundamentos
mecánicos" compartido de `OF5`, mismo patrón que `OF17a-d` cuelgan de
Agricultor — no oficio nuevo aparte, especialización real dentro de
Mecánico.

**Revisado 2026-08-13 (ronda 2) — 11 carpetas más, cubren casi todos
los oficios existentes**: Agricultura, Electricista, gasista,
gastronomia, herreria, Metalúrgico, Montador de Estructuras, operario
agricola, panaderia, Relojería, Técnico Electromecánico.

**2 oficios nuevos más, ambos reales y distintos de los 17**:
- **Herrero / Forjador** — *Manual de Herrería* (Ingemecánica, 135
  pág.) + *La Forja Artística* (Guillermo García Prados, maestro de
  forja real) — fragua, martillo, yunque, tenazas, forja artística vs.
  funcional. Distinto de `OF9` Metalúrgico (fundición/metalurgia
  industrial), `OF8` Soldador (unir metal con calor, no darle forma a
  martillazos) y `OF10` Montador de Estructuras (ensamblar perfiles ya
  fabricados) — forjar es transformar el metal a mano, oficio con
  tradición e identidad propia.
- **Relojero** — 4 archivos, más chico que el resto (artículos, no
  manuales completos) pero real: mecanismo de reloj mecánico (motor,
  rodaje, escape, órgano regulador), desmontaje y mantenimiento. Nada
  parecido en los 17 oficios existentes.

**Reinforcement confirmado, con 2 mejoras de fuente que vale la pena
marcar**:
- **Gasista**: la carpeta trae **NAG-200** — el Reglamento Técnico
  argentino real y oficial (234 pág., en consulta pública 2019) para
  instalaciones internas domiciliarias de gas. Es la fuente definitiva
  para `categoría-de-habilitación-de-gasista` — mejor que cualquier
  normativa genérica, porque es literalmente la que rige en Argentina.
- **Técnico Electromecánico**: trae 2 documentos de currícula real
  argentina — *Modelo Programa EEST Nº1, 7mo año, Mantenimiento y
  Montaje Electromecánico* (Escuela de Educación Secundaria Técnica) —
  además de máquinas eléctricas, automatismos/PLC, sensores y
  actuadores industriales, sistemas hidráulicos/neumáticos. Muy rico,
  sin huecos nuevos, pero la fuente EEST es la más valiosa por ser
  currícula oficial de secundaria técnica argentina.
- Agricultura, Electricista, gastronomia, Metalúrgico, Montador de
  Estructuras, operario agrícola, panadería: confirman y enriquecen
  los diseños ya hechos (`OF1`/`OF9`/`OF10`/`OF12`/`OF13`/`OF14`/
  `OF19`), sin huecos nuevos.

**Nota al pasar**: no hay carpeta todavía para `OF15` (Procesador de
Alimentos) ni para Robótica/Automatización (`OF16`, diseñado como
"Robótica" arriba en este documento) — son las categorías más técnicas/
industriales de las 17, probablemente las más difíciles de saber qué
libro buscar.
