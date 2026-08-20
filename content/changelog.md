# Changelog — Mapa de temas y prerrequisitos

Parte de un documento dividido en 3 archivos: [`introduccion.md`](introduccion.md) ·
**`changelog.md`** (este archivo) · [`troncos.md`](troncos.md).

Historial completo de parches, del v1 (no versionado, el punto de partida) al
v3.0 actual. Cada patch documenta qué entró, qué se descartó y por qué —
para no repetir el mismo debate en la próxima ronda de revisión.

---

## Qué cambió en esta revisión (v2)

Esta versión incorpora el informe de revisión y el análisis cruzado sobre el
v1 (huecos de dependencia, troncos disciplinares ausentes y sesgos
estructurales). Resumen de lo que entra:

- **Dentro de troncos existentes** (mismo diagrama, nodos insertados en su
  lugar pedagógico): números enteros (Tronco 1); geometría básica completa y
  geometría analítica (Tronco 3, reestructurado en 3.a/3.b/3.c); conjuntos y
  combinatoria (Tronco 4); comunicación profesional (Tronco 5); química
  orgánica, electroquímica, ecología avanzada y evolución moderna (Tronco 7);
  astronomía de posición y el hilo continuo de tecnología histórica (Tronco 8).
- **Troncos nuevos completos**: Física (9), Informática (10), Ingeniería (11),
  Investigación científica (12), Administración y Derecho (13).
- **Meta-troncos transversales**, mismo tratamiento que la comprensión
  lectora: modelización matemática (al principio), resolución de problemas,
  toma de decisiones y gestión de proyectos (después del Tronco 13).
- **Oficios y trabajo técnico**: mini-sección aparte, marcando a propósito que
  es la zona de menor cobertura posible del DSL.
- **Cruces inversos y loops**: el v1 era casi puramente `Matemática -->
  Materia` y acíclico. Esta versión deja explícitos los cruces en la otra
  dirección (Historia, Química y Biología dándose sentido entre sí; Ingeniería
  e Investigación devolviéndole un "para qué" a Matemáticas) y cuatro loops
  reales de iteración (Modelización, Ingeniería, Investigación, Resolución
  de problemas).
- Las tablas de cruces, el reparto en 11 años y la sección de qué evalúa el
  DSL se actualizaron con todo lo anterior.

Prioridad de profundidad: los ítems de prioridad máxima y media del informe
(Informática, Investigación, Ingeniería, Electricidad, Geometría, Combinatoria,
Administración, Comunicación, Derecho, Astronomía) tienen el mismo tratamiento
que el resto del mapa — diagrama Mermaid completo más párrafo de insight. Los
de prioridad baja (Oficios, Gestión de proyectos, Toma de decisiones, Química
orgánica avanzada) están más comprimidos a propósito, para no inflar el
documento con contenido que hoy es secundario para la tesis.

---

## Qué cambió en el parche v2.1

Ronda de revisión cruzada con tres modelos externos (informes completos en
`tareas_pendientes/consejo/`). La mayoría de las observaciones ya estaban
resueltas en el v2 sin que quien las escribió lo notara (dependencia fuerte
vs. contextual, cuadrática→MRUV, conjuntos→bases de datos, exponencial/
logaritmo, derivada — todo ya estaba); lo que sí era nuevo y real:

- **Bug de dependencia corregido**: en 8.a, `Eclipses` dependía de `Formación
  de imágenes (Óptica, Tronco 9.c)` — una materia que pedagógicamente se
  enseña *después* de la astronomía básica. Ahora depende sólo de
  `Circunferencia` y `Rotación y traslación`, que es lo que un eclipse
  necesita en realidad (geometría de esferas alineadas, no lentes).
- **Matrices y álgebra lineal** (Tronco 2): sin esto, `Inteligencia
  artificial` (Tronco 10) colgaba sólo de regresión lineal — un piso real
  pero incompleto para lo que hoy se entiende por Machine Learning.
- **Inducción electromagnética** (Tronco 9.a): la Electricidad llegaba hasta
  la Ley de Ohm y los circuitos, y de ahí saltaba directo a la Historia de
  la Electrificación (Tronco 8.b) sin el eslabón real — ni un generador ni
  un motor eléctrico funcionan sin inducción.
- **Gases ideales** (Tronco 7): la tabla de cruces ya tenía la fila "Leyes
  de los gases → proporcionalidad directa e inversa" desde el v1, sin que
  existiera nodo del que colgarla — el mismo patrón que "Enteros" en el
  Tronco 1.

**Lo que se descartó a propósito**: una de las tres críticas proponía seis
troncos nuevos completos (Filosofía/Ética, Diseño y Cultura Digital, Ciencia
de Datos y Pensamiento Sistémico, Finanzas Personales, Salud Integral,
Geografía Aplicada/GIS). No entran acá: el propio v2 ya decidió mantener
comprimido lo que es secundario para no inflar el documento, y la mayoría de
ese contenido cae en evaluación `abierta` humana, no en un hueco del DAG.

---

## Qué cambió en el parche v2.2

Segunda ronda de las mismas tres críticas, ahora sobre el v2.1 (algunas
observaciones volvieron a fallar contra contenido que ya estaba: cuadrática
ya tiene número complejo desde acá, conjuntos→BD seguía bien ubicado pese a
que una crítica insistió en que no). Lo nuevo y real de esta ronda se
cruzó, además, contra las plantillas oficiales ya sembradas en
`packages/vblang/src/templates/*-oficiales.ts` — el criterio fue usar el
**título** de cada colección de plantillas como señal de que el tema existe
de verdad en la plataforma (una plantilla es sólo un ejercicio de un tema,
no el tema completo, así que no se creó un nodo por plantilla).

- **El bug de `F8` resuelto de verdad**: en la ronda anterior se detectó
  que `Termodinámica` era consumida por Historia sin tener desarrollo
  propio en Física. Ahora tiene su cadena real (9.e) y encima está
  respaldada por plantillas ya sembradas (calor, cambios de estado,
  dilatación, conversión de escalas).
- **Energía y su conservación** (9.d, nuevo): tres lecturas distintas
  (conservación general, energía mecánica, distancia de frenado)
  señalaban el mismo hueco. `F7` (Trabajo de una fuerza) existía desde el
  v2 sin continuación — ahora sigue a energía cinética/potencial,
  conservación y potencia.
- **Mecánica de fluidos** (9.f, nuevo): densidad sin presión quedaba
  huérfana. Ahora conecta con presión arterial (Biología), presión
  atmosférica (Geografía) y plomería (Oficios).
- **Números primos** (Tronco 1) antes de MCD/MCM — sin esto, Criptografía
  (`IN11`) no tiene piso.
- **Números complejos** (Tronco 2) — el otro hijo de la ecuación
  cuadrática, ya evaluado por el DSL.
- **Secciones cónicas** (Tronco 3.b) — la circunferencia es la cuadrática
  leída en dos variables.
- **Análisis dimensional** (Tronco 3.a) — verificar una ecuación por sus
  unidades, la continuación real de `Sistema métrico`.
- **Distribución binomial y esperanza matemática** (Tronco 4.b) — ya
  sembradas como plantillas, sin nodo.
- **Dilución de soluciones** (Tronco 7) — operación de laboratorio más
  común después de preparar una solución.
- **Recibo de sueldo, descuentos obligatorios y Monotributo** (Tronco 1) —
  el "para qué" de porcentaje con nombre y letra chica reales.
- **Administración con contenido concreto** (13.a) — estado de resultados,
  márgenes y punto de equilibrio, todos ya sembrados como plantillas,
  reemplazando lo que era un `Presupuesto → Control de gestión` puramente
  abstracto.

**Lo que se dejó afuera**: temas que aparecían como plantilla suelta sin
ser un tema con prerrequisito propio (Ley de Hooke, fricción, plano
inclinado ya caben dentro de `F5` Dinámica; identidad pitagórica y
ecuaciones trigonométricas ya caben dentro de `M7`). Y lo mismo que la
ronda anterior: los meta-troncos especulativos (Modelos, Abstracción,
Representación, Información, Lenguaje formal) no entran — son ideas
válidas pero ninguna está respaldada por una plantilla real ni por un hueco
de dependencia, es contenido nuevo sin más señal que "sería lindo tenerlo".

---

## Qué cambió en el parche v2.4

El patch más grande hasta ahora: aplica lo acumulado en una ronda de
investigación individual, materia por materia (34 secciones, 162 huecos
documentados en `tareas_pendientes/investigacion/*.md`), más dos rondas
de detección externa ya verificadas contra ese corpus. Sólo entran acá
los huecos de **grafo** (concepto o cruce que faltaba) — los huecos de
**contenido** (nodo que ya existe pero sigue en 0% de plantillas) quedan
documentados en `investigacion/` para la etapa de implementación, no en
este mapa conceptual.

- **Tronco 1**: `N17`-`N19` (Vida Cotidiana ampliada); `E26`-`E32`
  (oferta/demanda, PBI/inflación, corrientes de pensamiento económico con
  principio de neutralidad, blockchain/contratos inteligentes/DEX/pools);
  `E8B`-`E8E` (Maillard, presupuesto, gestión de tiempo, cuidado de ropa).
- **Tronco 2**: `A16` (Inecuaciones), `A17` (Ecuaciones diferenciales).
- **Tronco 3.a**: `AR5`/`AR6` (elementos del arte y principios de diseño,
  antes sólo `Composición y proporción` sin desarrollo).
- **Tronco 3.b**: `F10`-`F14` (tiro oblicuo, gravitación universal, ley
  de Coulomb, movimiento circular, máquinas simples).
- **Tronco 4**: `D18` (Teorema del binomio).
- **Tronco 5**: `P4B`/`P4C`/`P7B`/`P7C` (conjugación, concordancia, voz,
  tipos de oración — generador ya existía sin nodo); `FI4`-`FI8`
  (Filosofía: metafísica, ética, estética, historia de la filosofía y
  corrientes con neutralidad, dilemas éticos — Filosofía tenía sólo 2
  nodos prestados antes de esto); `AR8` (Teatro); lista de lectura
  obligatoria de dominio público (Ley 11.723).
- **Tronco 6**: `T8`-`T10` (los 3 conceptos del marco "Big Six" que
  faltaban); `G5B` (Región); **bug de duplicación corregido** entre
  Tronco 6 y 8.c (`H3`/`H4` retirados, `H2` apunta a `AH11`-`AH13` como
  única fuente); `C5B`/`C5C` (Constitución Nacional: Preámbulo, parte
  dogmática); `C9B`/`C9C` (símbolos y marchas patrias).
- **Tronco 7**: Química `QG2`, `QCOLIG`, `QDALTON`, `QKSP`, `QGIBBS`,
  `QTIPOS`, `QSAFE`; Biología `BA0`-`BA3`, `BMICRO`, `BENZ`, `BDIHIB`;
  Educación Física `EF3`-`EF8` (incl. top de deportes); ESI `ES3`-`ES8`
  (Ley 26.150, Ley 27.610, Ley 26.743, línea 144).
- **Tronco 9.b**: `OND6` (Resonancia — Tacoma Narrows, encontrado
  investigando Ingeniería, no Física); `AR7` (Danza).
- **Tronco 11 (Ingeniería)**: `ING0` (investigar soluciones existentes),
  `ING7` (comunicar la solución), `ING8` (resistencia de materiales),
  `ING9` (disciplinas de la ingeniería) — comparado contra el Engineering
  Design Process.
- **Tronco 12 (Investigación)**: `INV7` (construir y usar un modelo
  científico), `INV8` (argumentar desde evidencia) — comparado contra las
  8 prácticas NGSS.
- **Tronco 13.a (Administración)**: `ADM10` (Coordinar, la función de
  Fayol sin nodo); documentada la mezcla Administración general/de
  Empresas bajo un solo nombre (los 11 templates ya sembrados son todos
  de la capa de empresa) y la ausencia total de Administración Pública.
- **Tronco 13.b (Derecho)**: `DER0` (Ramas del derecho).
- **Meta-troncos**: **Alfabetización Mediática e Informacional**
  (`AMI1`-`AMI4`) — nombre nuevo para un hilo que ya estaba disperso sin
  conectar en Historia (`T9`), Cívica (`C1`-`C4`) e Investigación
  (`INV8`); resuelta la decisión materia-vs-meta-tronco a favor de
  meta-tronco, con el mismo criterio que `Resolución de problemas`.
- **Oficios**: `OF16` (Técnico en Automatización y Robótica, Res. CFE
  343/18); `OF17` (especializaciones agropecuarias — rumiantes, aves,
  apicultura, horticultura, fruticultura); domótica confirmada como
  contenido de `OF1`/`OF11`, no oficio aparte.
- **Profesiones académicas**: `CON1`-`CON5` (Carrera del Investigador
  CONICET, 5 categorías) colgando de `PROF8`.
- **Cuatro troncos completamente nuevos**, detectados por dos rondas de
  revisión externa y verificados contra las 34 investigaciones antes de
  aceptarlos (dos candidatos más de esas rondas, Educación Ambiental y
  Automatización Industrial, ya estaban resueltos en otro lado y no
  generaron tronco):
  - **Tronco 14 — Dibujo Técnico y Arquitectura** (`DT1`-`DT5`): distinto
    de Geometría y del dibujo artístico de Arte, con reglas objetivas y
    evaluables por `mc`.
  - **Tronco 15 — Psicología** (`PS1`-`PS6`): orientación real de
    Ciencias Sociales, solapa parcial con ESI/Filosofía sin ser
    redundante.
  - **Tronco 16 — Comunicación Social, Turismo y Emprendedorismo**
    (16.a `CS1`-`CS4`, 16.b `TUR1`-`TUR4`, 16.c `EMP1`-`EMP5`): tres
    orientaciones NES/INET reales, ninguna considerada antes.
  - **Tronco 17 — Electrónica** (`EL1`-`EL5`): especialidad INET con Res.
    CFE 15/07 propia, distinta de Física (teoría) e Informática
    (software); cierra en `OF16`.

**Lo que se dejó documentado pero no se aplicó acá, a propósito**: los
huecos de puro contenido (pirámide de Kelsen y estructura del Poder
Judicial en `DER2`/`DER5`; visualizadores archivados sin repatriar de
Educación Ambiental, Economía y Administración; el nombre definitivo
"Administración" vs. "Administración de Empresas"; si Música se separa
de Arte como lenguaje propio) — todos viven en `investigacion/*.md`,
listos para la próxima etapa, sin inflar este mapa con decisiones de
producto que todavía no se tomaron.

---

## Qué cambió en el parche v2.5

Tercera ronda de revisión externa, esta vez sobre el v2.4 ya aplicado (tres
modelos — GPT, Gemma, Z — informes completos en `tareas_pendientes/consejo/`).
A diferencia de las rondas v2.1/v2.2, la mayoría de lo que señalaron **Gemma**
y **Z** ya estaba documentado palabra por palabra en el propio v2.4 (huecos de
contenido en Derecho, `OF17` como marcador inicial, las brechas de DSL de la
sección final, los seis troncos descartados en v2.1) — confirmaron el
autodiagnóstico sin aportar nada nuevo, y una observación de Z (Ley de Hooke
sin nodo propio) repetía algo ya resuelto en v2.2. El único informe con
hallazgos genuinamente nuevos fue **GPT**; de sus 17 candidatos, éstos son los
que no estaban ni resueltos ni descartados en ninguna ronda anterior:

**Cuatro troncos completamente nuevos** (ninguno tenía dónde colgarse en el
mapa existente):

- **Tronco 18 — Idiomas Extranjeros** (`LE1`-`LE6`): el DAG genérico de
  aprender una L2 (fonética, vocabulario, gramática contrastiva,
  comprensión, producción), reusando el mismo armazón gramatical de Lengua
  (`P4B`/`P4C`) en vez de re-enseñarlo.
- **Tronco 19 — Ciencia de Materiales** (`CM1`-`CM6`): elasticidad (Ley de
  Hooke leída como módulo de Young, no como fuerza de resorte — la lectura
  de resorte/rozamiento sigue resuelta en `F5`/`F6` desde v2.2, esto es
  otra cosa), plasticidad, fatiga, corrosión, familias de materiales.
  Puente real entre Física, Ingeniería y los oficios metalúrgicos.
- **Tronco 20 — Sistemas de Control y Automatización** (`CTRL1`-`CTRL5`):
  lazo abierto/cerrado, realimentación, PID, PLC. `OF16` (Técnico en
  Automatización y Robótica) y `EL5` (Sensores y actuadores) ya tenían el
  oficio y el componente; faltaba la teoría de control que los conecta.
- **Tronco 21 — UX y Diseño de Interfaces** (`UX1`-`UX5`): usabilidad,
  accesibilidad, jerarquía visual, prototipado. Cruza Arte (principios de
  diseño), Comunicación Social e Ingeniería de Software sin ser ninguna de
  las tres.

**Ampliaciones dentro de troncos existentes** (mismo criterio que `N17`-`N19`
o `E26`-`E32` en v2.4 — el tema ya tenía un lugar pedagógico, sólo faltaba el
desarrollo):

- **Tronco 1**: `E33`-`E37` (Economía Internacional: balanza comercial, tipo
  de cambio, banco central, ventaja comparativa, deuda pública).
- **Tronco 4.b**: `D19`-`D21` (variable aleatoria discreta/continua,
  distribución exponencial, distribución de Poisson — el puente que
  faltaba entre binomial/normal y "probabilidad continua" en general).
- **Tronco 6**: Meteorología (`MET1`-`MET5` — presión atmosférica, masas de
  aire, frentes, nubes, precipitación, tormentas). El mapa ya narraba el
  resultado (`clima`, dentro de `G6`) sin el mecanismo.
- **Tronco 8.a**: Geología (`MIN1`-`MIN3` — minerales, rocas, ciclo de las
  rocas, colgando de `Tierra primitiva` y alimentando la `Tectónica de
  placas` que ya existía) y Astronomía Moderna (`COS1`-`COS5` — galaxias,
  corrimiento al rojo, Ley de Hubble, materia oscura, agujeros negros,
  extendiendo `Formación de estrellas`).
- **Tronco 10**: reestructurado en subsecciones (`10.a` núcleo existente sin
  cambios, `10.b` Redes `RED1`-`RED4` desde `IN10`, `10.c` Sistemas
  Operativos `SO1`-`SO6`, `10.d` Bases de Datos `BD2`-`BD6` desde `IN9`,
  `10.e` Ingeniería de Software `ISW1`-`ISW6`). Informática pasa de un
  único diagrama a 5 subsecciones porque, como advertía GPT, "ya dejó de
  ser un tronco pequeño".
- **Tronco 13.b**: `13.c` — Derecho Procesal (`DPR1`-`DPR5`: denuncia,
  investigación, juicio, apelación, ejecución), distinto de `DER0`-`DER5`
  (derecho sustantivo e interpretativo) porque es el trámite real de un
  caso, no la norma ni el argumento.

**Dos bugs reales encontrados al escribir esto, sin relación con el
consejo**:

- **`BD1` duplicaba `IN9`**: Tronco 4.a tenía `CJ2 --> BD1["Bases de datos:
  álgebra relacional (Informática)"]` como si fuera un nodo propio de
  Conjuntos, cuando el nodo real (con el mismo prerrequisito `CJ2`) ya
  existía en Tronco 10 como `IN9`. Mismo concepto, dos IDs. `BD1` se
  retira; Tronco 4.a ahora cruza directo a `IN9P`.
- **`G6P` con dos etiquetas distintas**: Tronco 9.f (`FLU2 --> G6P`) lo
  llamaba "Presión atmosférica", pero el `G6` real (Tronco 6) es "Relieve,
  clima y biomas" — la flecha prometía un nodo de presión atmosférica que
  no existía en ningún lado del mapa. Con Meteorología (`MET1`) ya
  resuelto, la flecha se corrige para apuntar ahí.

**Lo que se sigue dejando afuera, y por qué**: `Estadística experimental`
(propuesta por GPT como "puente entre Estadística e Investigación") ya es,
en la práctica, `INV3` ("Diseño experimental: variables y control", Tronco
12) — no es un hueco, es el mismo nodo con otro nombre bajo otra materia.
`Música`, `Administración Pública` y los huecos de contenido de Derecho
(`DER2`/`DER5`) siguen exactamente donde v2.4 los dejó: documentados como
decisión pendiente, no resueltos acá a propósito — agregarlos ahora sería
repetir un debate ya cerrado, no responder al consejo.

---

## Qué cambió en el parche v2.5.1

No vino del consejo — vino de verificar el v2.5 recién aplicado contra
`MAPA-materias-investigacion.md` (el índice de las 34 secciones
investigadas materia por materia, 162 huecos documentados en
`investigacion/*.md`, la ronda que dio origen a todo lo aplicado en v2.4).
Javier pidió confirmar que cada tema investigado individualmente estuviera
bien aplicado y que no quedara ninguno suelto. Cruzando las 34 tablas de
"resumen: qué agregar" de cada archivo contra el MAPA actual, la enorme
mayoría ya estaba — pero aparecieron 4 huecos reales que se habían
investigado, priorizado y documentado con dónde colgar, y que sin embargo
nunca entraron a ninguna versión del MAPA (v2 a v2.5) ni quedaron
registrados como decisión pendiente (a diferencia de Música o
Administración Pública, que sí tienen esa nota explícita):

- **`MAG1` — Imanes y magnetismo básico** (Tronco 9.a): hueco #8 de
  `investigacion/fisica.md`. `FIS11` seguía siendo el único nodo de
  magnetismo y ya arrancaba en nivel avanzado (paso hacia la inducción),
  sin punto de entrada de primaria.
- **`MOM1`-`MOM3` — Momento lineal, impulso y choques** (Tronco 9.d):
  hueco #4 de 8 de la misma investigación, con currícula estándar de
  respaldo y lugar claro para colgar (`F5`, `ENE1`), nunca aplicado.
- **`NUC1`-`NUC3` — Física atómica y nuclear** (Tronco 9.g, subsección
  nueva): hueco #3 de 8 de la misma investigación — la quinta de las 5
  áreas estándar de Física de secundaria, ausente en toda versión previa.
  Mismo patrón "Historia narra sin mecanismo" que ya se había resuelto
  dos veces (Nucleosíntesis→Tabla periódica, Revolución industrial→
  Máquina térmica) y quedó sin resolver una tercera vez, justo donde
  `DAT` (datación radiométrica, Tronco 8.a) lo necesitaba.
- **`AR9`/`AR10` — Comunicación Audiovisual y Multimedial** (Tronco 3.a):
  candidato #4 de 8 de `investigacion/materias-adicionales-competidor.md`
  — 2 de los 7 lenguajes artísticos NAP que seguían sin cubrir después de
  que v2.4 agregara Teatro y Danza. A diferencia de Música, nunca quedó
  ni aplicado ni marcado como decisión pendiente.

**Por qué estos 4 y no otros**: los ~30 huecos restantes revisados en esta
pasada resultaron, sin excepción, en una de tres categorías correctas de
"no aplicar": CODE-GAP (nodo que ya existe, falta la plantilla —
documentado a propósito sólo en `investigacion/`, nunca en el MAPA
conceptual), decisión de diseño ya trackeada (Música, Administración
Pública, nombre de Administración, `DER2`/`DER5`), o contenido de
implementación que no es un nodo conceptual (qué lenguaje de programación
usar para enseñar Informática, por ejemplo). Sólo estos 4 eran huecos de
**grafo** genuinos —el mismo criterio MAP-GAP vs. CODE-GAP que ya usa todo
el documento— que se quedaron afuera por descuido, no por decisión.

---

## Qué cambió en el parche v2.5.2

Sin informe externo nuevo — no hay forma de generar una ronda genuina del
"consejo" (GPT/Gemma/Z) sin que Javier pegue el documento actualizado en
esos 3 servicios externos y traiga la respuesta. En su lugar, esta ronda
usó las dos fuentes que quedaban sin verificar: una **auditoría
estructural del propio grafo** (cada referencia cruzada con sufijo `P`
contra el nodo real que dice representar) y un cruce contra
`PROPUESTA-materias-nuevas-biblioteca.md` (la fuente #2 que
`MAPA-materias-investigacion.md` decía haber cruzado, pero que nadie
había revisado línea por línea contra el MAPA ya aplicado).

**Un tercer bug de la misma familia que `BD1`/`G6P` (v2.5)**:
- **`E25` no existía**: Tronco 4.b tenía `D17 --> E25P["Valor esperado de
  una inversión y riesgo (Economía)"]` apuntando a un nodo que nunca se
  creó en Tronco 1 — la secuencia saltaba de `E24` (Monotributo) a `E26`
  (Oferta y demanda) directo. Bug pre-existente (de antes de esta sesión,
  no introducido por v2.5), encontrado recién ahora por la auditoría de
  referencias cruzadas. Ahora `E25` cuelga de `E7` (rendimiento real de
  una inversión sin riesgo) y de `Esperanza matemática` (`D17`,
  Matemáticas) — el mismo concepto que decide si una inversión de riesgo
  conviene, ya mencionado en el propio Tronco 4 pero sin nodo del otro
  lado.

**Dos huecos reales de `PROPUESTA-materias-nuevas-biblioteca.md` nunca
aplicados**:
- **`EF9` — Primeros auxilios** (Tronco 7, Educación Física): la
  propuesta asignaba explícitamente RCP/atragantamiento/quemadura/golpe
  de calor/signos de alarma al eje de `Prevención y cuidado`
  ("es seguridad concreta, no trivia"); al aplicar `EF3`-`EF5` en v2.4
  quedó sólo el tramo de lesión deportiva (`RICE`, entrada en calor,
  sobreentrenamiento). El propio DSL ya usaba "RCP" como ejemplo de
  `ordenar` en la sección final del mapa sin que el nodo existiera en
  ningún lado. De paso, `EF4` suma `ergonomía` y `sueño` a su etiqueta,
  los otros dos sub-ejes de la misma propuesta que faltaban.
- **`C14`/`C15` — Impuestos y Documentos/trámites** (Tronco 6, Cívica):
  la propuesta los proponía explícitamente para Educación Cívica.
  Distinto de `E2` (IVA, Tronco 1): ese calcula el impuesto de una compra
  puntual, `C14` es la pregunta cívica de fondo (quién cobra qué y qué
  financia). `C15` es alfabetización práctica (DNI, CUIL, voto, historia
  clínica).

**Verificado y ya cubierto, sin acción**: el art. 92(f) de la Ley 26.206
("igualdad, solidaridad y respeto entre los sexos") que la propuesta
marcaba textualmente como "⚠️ sin lugar" en 2026-07-27 — ya está cubierto
por `C9` ("Derechos: del niño, indígenas, de género, art. 92 d, e, f") y
por `ES5`/`ES7` (violencia de género, diversidad e identidad de género),
agregados después de que se escribiera esa propuesta. `LISTA-temas-
biblioteca-oficial.md` también se revisó completa — es un inventario de
plantillas existentes, no propone contenido nuevo, no generó huecos.

**Dónde para esta ronda**: se agotaron las fuentes verificables sin
input externo nuevo — 3 informes del consejo (v2.5), 34 investigaciones
individuales (v2.5.1), el grafo mismo y las 2 fuentes cruzadas que
`MAPA-materias-investigacion.md` citaba (v2.5.2). La próxima ronda real
necesita que Javier traiga una revisión externa nueva.

---

## Qué cambió en el parche v2.6

Ronda externa nueva: Javier volvió a pegar el `troncos.md` (ya en v2.5.2)
en Gemma y trajo la respuesta actualizada a
`tareas_pendientes/consejo/Gemma.md` (GPT y Z quedaron vacíos esta vez).
De los 5 puntos del informe, el patrón se repite parcialmente: 2 ya
estaban resueltos y Gemma no los vio (Dibujo Técnico y Arquitectura,
Tronco 14, ya cubre exactamente lo que pedía de "vistas ortogonales,
acotación, escalas"; la sección de Oficios sí existe como tronco
dedicado, con 3 subsecciones y 15 nodos — Gemma sólo vio las referencias
cruzadas hacia ella desde Física, no la sección en sí), y 2 eran
decisiones ya documentadas explícitamente como pendientes (Administración
Pública, Música). Pero **3 de los 5 puntos tenían un hallazgo real
adentro**, más uno secundario:

- **`PS7`/`PS8` — Psicología cognitiva y sesgos** (Tronco 15): `PS1`-`PS6`
  son la lectura humanística de Psicología (el yo, la cultura, el
  inconsciente); Gemma señaló, con razón, que falta la otra mitad real de
  la disciplina — percepción, memoria, atención y aprendizaje en sentido
  cognitivo/conductual, distinto del psicoanalítico de `PS4`. `Sesgos
  cognitivos` (`PS8`) es además el puente que le faltaba a
  `Alfabetización Mediática` (por qué el cerebro cae en desinformación) y
  a `Toma de decisiones` (`TD3`, por qué se sobreestima un riesgo raro).
- **`FI2B` — Lógica de predicados** (Tronco 5): `FI1`/`FI2` son lógica
  proposicional; faltaba el nivel de cuantificadores (`∀`/`∃`) y
  deducción formal, la extensión estándar de cualquier curso de lógica
  después de proposicional.
- **Tronco 4.c — Teoría de grafos** (`GRAF1`-`GRAF5`): ausente en
  cualquier lado pese a que `Redes` (enrutamiento, Tronco 10.b) y
  `Árboles` (`IN6`, `BO` en Biología, `SO4` en Sistemas Operativos) ya lo
  necesitaban sin nombrarlo. Cruza a `Enrutamiento` con `BFS`/`DFS` como
  el algoritmo real detrás.
- **`CM6 → Carpintero`/`Albañil`** (hallazgo secundario, dentro del punto
  de Oficios): Ciencia de Materiales (v2.5) ya cruzaba a Metalúrgico mas
  no a los otros dos oficios que también eligen material por familia
  (madera, hormigón/ladrillo) — 2 flechas que faltaban, no un nodo nuevo.

**Confirmado ya resuelto, sin acción**: Dibujo Técnico y Arquitectura
(Tronco 14, desde v2.4); la sección de Oficios existe íntegra desde v2 —
"Mecánica Automotriz" (transmisión, motores, frenos) no se expande dentro
de `OF5` porque contradice la decisión de diseño ya documentada de que
los oficios son nodos terminales, no sub-troncos. Administración Pública
y Música siguen exactamente donde estaban — señaladas otra vez, sin
resolver a propósito, mismo criterio que v2.5.

---

## Qué cambió en el parche v2.7

Javier trajo también la respuesta de GPT y Z sobre el mismo `troncos.md`
(v2.6) a `tareas_pendientes/consejo/`. El patrón de siempre se repite,
esta vez con volumen alto: GPT tiene ~17 puntos, Z tiene ~10 (organizados
en 3 categorías). De los dos, filtrando lo ya resuelto y lo ya trackeado
como decisión pendiente, quedaron **11 hallazgos reales** — el lote más
grande desde v2.4:

- **`M4B` — Geometría espacial** (Tronco 3.a): prismas, pirámides,
  cilindros, conos, esferas y su desarrollo plano. Señalado
  **independientemente por GPT y Z en la misma ronda** — la confirmación
  cruzada más fuerte de todo el proceso. Puente directo hacia `Sistemas
  de proyección`/`Perspectivas` (Dibujo Técnico, Tronco 14).
- **`A13B` — Optimización** (Tronco 2): máximos y mínimos, la aplicación
  más usada de la derivada, que el mapa nunca nombraba explícitamente.
- **`FI9` — Epistemología** (Tronco 5): Z citó el propio texto del mapa,
  que ya nombraba las "5 ramas clásicas" de Filosofía sin haber
  desarrollado la epistemología — la única de las 5 que se había quedado
  afuera.
- **`P11B` — Movimientos literarios** (Tronco 5): Romanticismo, Realismo,
  Modernismo, Generación del 98, Boom latinoamericano — currícula
  estándar de Lengua y Literatura que faltaba entre `Recursos literarios`
  y el texto argumentativo.
- **`COM6` — Escritura profesional** (Tronco 5): CV, correo formal,
  informe técnico — el género de escritura que un egresado usa primero
  en la vida real, ausente pese a que `Producción escrita compleja` ya
  existía.
- **`G12` — Sistemas de Información Geográfica** (Tronco 6): mapas
  digitales, GPS, imágenes satelitales — la herramienta real con la que
  hoy se leen coordenadas, que `G4` nunca nombraba.
- **`BIOTEC1`/`BIOTEC2` — Biotecnología** (Tronco 7): PCR, ADN
  recombinante, CRISPR, organismos transgénicos y bioética (con el mismo
  principio de neutralidad que ya aplican corrientes económicas y
  filosóficas). Ausente pese a ser contenido de altísima frecuencia
  mediática hoy.
- **`NUC4`, `FISM1`, `FISM2` — Física moderna** (Tronco 9.g): fisión y
  fusión nuclear (`NUC1`-`NUC3` de v2.5.1 cubrían estructura y
  decaimiento, no las reacciones que producen energía), dualidad
  onda-partícula y relatividad especial conceptual — mismo nivel de
  "narrar el mecanismo sin exigir el cálculo" que ya usa Astronomía
  Moderna para materia oscura.
- **Tronco 10.f — Arquitectura de Computadoras** (`ARQ1`-`ARQ5`): CPU,
  memoria/caché, buses, ciclo de instrucción, almacenamiento. El hueco de
  mayor prioridad que señaló GPT (5 estrellas, junto con Redes y Sistemas
  Operativos, que ya estaban resueltos desde v2.5 sin que GPT lo notara)
  — Informática cubría el software completo sin nunca tocar la máquina
  física que lo ejecuta.
- **`E25B`-`E25D` — Finanzas personales avanzadas** (Tronco 1): seguros,
  fondo de emergencia y diversificación, jubilación — `E25` (valor
  esperado de una inversión, agregado en v2.5.2) se quedaba corto frente
  a la vida financiera completa de una persona.
- **`E8F` — Defensa del consumidor** (Tronco 1, Vida Cotidiana):
  garantías, contratos simples, comparar productos — misma familia de
  contenido "seguridad concreta" que ya justificaba `E8E`.

**Menor, dentro del mismo lote**: `EF9` sumó "uso de DEA" a su etiqueta
(GPT lo pidió explícito; el resto del nodo ya existía desde v2.5.2).

**Confirmado ya resuelto, sin acción — GPT no registró estas 3
adiciones**: Sistemas Operativos (`10.c`, desde v2.5), Redes (`10.b`,
desde v2.5) y Primeros auxilios/RCP (`EF9`, desde v2.5.2) — las tres
aparecen en el informe de GPT como huecos de máxima prioridad, y las tres
ya estaban aplicadas antes de esta ronda.

**Descartado, con la razón que dio el propio GPT**: Química industrial
(Haber-Bosch, refinación, acero) — el informe mismo aclara "no son
imprescindibles para secundaria". **Descartado por redundancia de
diseño**: "Historia de la ciencia" como tronco/hilo propio — es
exactamente la función que Tronco 8 ya cumple por diseño ("Y lo que este
tronco le da a los demás" ya lista Química/Biología/Geografía/Física
recibiendo su "para qué" histórico). **Descartado por ser refinamiento
menor de algo ya bueno**: Concurrencia (hilos/sincronización, extensión
posible de `SO1`/`SO3`) y Evolución humana específica (ya cubierta por la
síntesis `H10` + `BJ`-`BO`) — quedan anotados acá por si en una futura
ronda se justifica el detalle, pero no ameritan nodo propio todavía.

---

## Qué cambió en el parche v2.8

Sexta ronda externa, y la más grande de todas: Javier sumó **Opus 5**
como cuarto modelo del consejo y volvió a pedir la vuelta completa a
GPT/Gemma/Z sobre el `troncos.md` de v2.7. Con un aviso explícito suyo
antes de arrancar: *"ya no hay materias que agregar, sólo temas"* — y el
propio GPT llegó a la misma conclusión de forma independiente ("a partir
de este punto, los faltantes ya no son huecos evidentes sino decisiones
de alcance... la próxima revisión útil sería una auditoría de
dependencias, no buscar más temas"). Este patch respeta esa instrucción:
ningún hallazgo se aplicó como tronco nuevo, todo entró como nodo dentro
de un tronco existente.

**Nota sobre Gemma esta ronda**: recibió el documento truncado (sólo
Troncos 1 a 13.a, sin Oficios/Profesiones/tablas de cierre) y su informe
completo es, en consecuencia, inválido — reporta como "faltante" contenido
que sí existe pero que no llegó a ver. No se aplicó nada de ese archivo.

### Tier 1 — confirmado por 2 o 3 modelos independientes

- **`GO8` — Transformaciones geométricas** (Tronco 3.a): traslación,
  rotación, reflexión, homotecia. **Señalado de forma independiente por
  los tres modelos válidos de esta ronda** (Opus 5, GPT y Z) — la
  confirmación cruzada más fuerte de todo el proceso hasta ahora. Corrige
  además que `Rosetones y simetría` (`AR3`) y `Sistemas de proyección`
  (`DT1`, Tronco 14) daban por sabido el concepto sin que existiera.
- **`E20B`-`E20D` — Contabilidad** (Tronco 1): partida doble, libro
  diario y mayor, ciclo contable completo. Confirmado por GPT y Opus 5 —
  la orientación real de Economía y Administración tiene tres planos
  (contabilidad, administración, economía); el mapa cubría dos, con la
  punta (`E20`) y la cola (`ADM6`) ya escritas y el medio vacío.
- **`SOC1`/`ANTRO1` — Sociología y Antropología** (Tronco 6): confirmado
  por Opus 5 y Z — la Res. CFE 84/09 reconoce diez orientaciones, el mapa
  cubría nueve. Agregadas como nodos dentro de Cívica/Historia, no como
  troncos nuevos, siguiendo la instrucción de esta ronda.
- **`C18` — Educación vial normativa** (Tronco 6): confirmado por Opus 5
  y Z. Con el matiz que trajo Opus 5: el Decreto 436/2025 derogó la
  obligatoriedad nacional (Ley 27.214), hoy es decisión provincial — el
  nodo entra igual porque sigue siendo currícula real donde se dicta.

### Bugs estructurales (mismo patrón que `BD1`/`G6P`/`E25`)

Opus 5 hizo lo que ninguna ronda anterior había hecho: auditó
mecánicamente la **tabla de cruces** contra los diagramas, buscando filas
citadas ahí que nunca tuvieran nodo real. Encontró 7:

- **`E8G`/`E8H`** — Etiqueta nutricional, Seguridad alimentaria (Tronco 1).
- **`EF10`/`EF11`** — Zonas de entrenamiento, IMC (Tronco 7).
- **`BH2`** — Pirámide de biomasas (Tronco 7) — el caso más llamativo:
  **ya es una plantilla oficial sembrada** (`piramide_biomasas`) sin nodo
  en el grafo, el mismo caso que `Distribución binomial` en v2.2.
- **`E16B`** — Elasticidad económica (Tronco 2).
- **`RIT1`** — Ritmo y compás (Tronco 9.b): además de huérfana de tabla,
  era una flecha rota real — `AR7` (Danza) colgaba de "ritmo, tiempo" sin
  que ese concepto existiera en ningún nodo, la misma clase de bug que
  `FLU2 --> G6P` antes de Meteorología.

Más dos bugs de mecanismo faltante que Z encontró leyendo cadena por
cadena (no en la tabla, en la lógica del grafo):

- **`BKE` — Sistema endocrino** (Tronco 7): `Anatomía y pubertad` (`ES2`)
  colgaba de `Sistemas del cuerpo humano` sin pasar por lo que de hecho
  *causa* la pubertad — las hormonas.
- **`EST1` — Estática** (Tronco 3.b): `Máquinas simples` (`F14`) colgaba
  de `Dinámica: fuerzas concurrentes` (`F5`) — pero una palanca es el
  caso canónico de fuerzas **no** concurrentes. Mismo error de orden que
  "Pitágoras antes de clasificar triángulos" (v2), esta vez sin corregir
  hasta ahora.

### Tier 2 — hallazgos de un solo modelo, bien justificados

`TRIG1`/`TRIG2` (funciones trigonométricas con radianes, teorema del
seno/coseno — Z, y `TRIG1` además resuelve que `Oscilación y período`
dependía de una sinusoide inexistente), `FLU4`/`FLU5` (Arquímedes y
Pascal — Z), `QCM` (modelos atómicos Dalton→Bohr, cruza con `INV7` —
Z), `P10B`/`P10C` (géneros literarios y análisis narrativo — Z),
`P14B` (cohesión y coherencia — Z), `IN6B`/`OFIM1` (algoritmos de
búsqueda/ordenamiento, ofimática — Z), `N19B` (sucesiones aritméticas —
Z), `A6B` (Ruffini — Z), `N14B` (irracionales y reales — Opus 5, mismo
patrón que `Enteros` en v2), `A15B` (números complejos en forma polar —
GPT), `M5B` (error sistemático vs. aleatorio — GPT), `ADM11`
(cooperativismo y mutualismo, art. 90 Ley 26.206 — Opus 5, resuelve
parcialmente la decisión de nombre de Administración), `EF12`
(prevención de adicciones, Ley 26.586/Res. CFE 256/15, el hueco
normativo más fuerte de la ronda — Opus 5), `C16`/`C17` (Ciencia
Política y tratados internacionales, prerrequisito real de la pirámide
de Kelsen en `DER2` — Opus 5).

### Asimetría documentada, no resuelta

Opus 5 marcó que los 8 troncos nuevos (14-21) no tienen capstone
profesional propio, y que Oficios no tiene ningún nodo de salud o
servicios personales. Se agregó sólo **`PROF15` — Docente** (la ausencia
más llamativa: es la única profesión cuya presencia entre los usuarios
reales de la plataforma está garantizada). El resto (Arquitecto,
Traductor, Diseñador UX, Contador, Sociólogo, Filósofo, Enfermero,
Cocinero, Técnico en reparación de PC...) queda documentado para otra
ronda, mismo criterio que ya se aplicó a `OF17`.

### Confirmado ya resuelto, sin acción

Opus 5 verificó explícitamente y no encontró hueco en: Estadística
experimental (`INV3`), Educación Ambiental (`AM1`-`AM4` + `MET5`),
Automatización (`Tronco 20` + `OF16`), Domótica, Bullying/convivencia
(`RP` + `ES5`/`ES8` + Derecho), RCP (`EF9`), Genética no mendeliana
(`B3`/`BDIHIB`), Movimiento armónico (`OND1`). GPT repitió Sistemas
Operativos, Redes y Química nuclear como huecos de máxima prioridad — los
tres ya estaban aplicados desde v2.5/v2.7, cuarta vez que un modelo del
consejo no registra una adición reciente antes de reportarla como falta.

### Descartado con criterio explícito

Series de Taylor (GPT mismo: "si el objetivo termina en secundaria puede
omitirse"), Física moderna/química nuclear como pedido de GPT (ya
resuelto en v2.7, `NUC4`/`FISM1`/`FISM2`), Historia de la ciencia como
hilo propio (redundante con el diseño de Tronco 8, tercera vez que se
descarta por la misma razón), Filosofía Latinoamericana/Argentina y
Movimientos literarios argentinos (Z — reales pero de expansión de
contenido más que de grafo, quedan para la próxima ronda de contenido),
Computación distribuida y Comportamiento animal (GPT — nicho, baja
señal), Diseño como 7° lenguaje de Arte (Opus 5 — mismo tratamiento que
Música, decisión pendiente).

---

## Qué cambió en el parche v2.9

Séptima ronda, y la primera hecha sobre `lista-temas-plana.md` en vez de
`troncos.md` completo — Javier armó el inventario sin flechas ni prosa
para esquivar el límite de lectura de Gemma y se lo pasó a los 4 modelos.

**Lo que pasó, para que quede registrado**: sin el razonamiento y los
límites de alcance que trae `troncos.md` (las secciones "lo que NO
entra", las decisiones ya tomadas de no cubrir Análisis Real/Álgebra
Abstracta, relatividad general completa, etc.), los 4 modelos se fueron
mucho más lejos de lo que este mapa cubre — Bosón de Higgs, modelo
estándar, antimateria, cálculo multivariable, álgebra lineal completa
(autovalores, diagonalización), Kubernetes/Terraform/DevOps, ciclo de
Krebs con bioquímica operativa, historiografía comparada China/India/
mundo islámico, teoría de categorías. Es contenido universitario de
carrera específica, exactamente la misma categoría que el propio mapa ya
excluyó para Filosofía y Matemáticas en rondas anteriores. **Ninguno de
esos ítems se aplicó** — quedan documentados acá como la señal de que la
lista plana necesita, la próxima vez, un párrafo de alcance explícito
antes del inventario (algo como "contenido de secundaria + introductorio
universitario, no profundidad de carrera — ver ejemplos ya descartados"),
no sólo la lista de temas.

**La excepción fue Opus 5**, que en vez de proponer temas nuevos sin
criterio separó explícitamente **huecos estructurales** (algo en el mapa
depende de un concepto que no existe en ningún nodo) de **extensiones**
(temas que se podrían sumar pero no rompen nada) — la misma disciplina
que este documento ya venía aplicando. Los 14 huecos estructurales de
Opus 5 se verificaron uno por uno contra `troncos.md` antes de aplicar, y
los 14 dieron negativo en la búsqueda (cero apariciones del concepto en
ningún lado) — la tasa de acierto más alta de cualquier ronda hasta ahora.

### Huecos estructurales aplicados (los 14, todos de Opus 5, todos verificados)

- **`N3B`** — Jerarquía de operaciones (Tronco 1): prerrequisito de todo
  el Tronco 2, nunca nombrado.
- **`FUNC1`** — Concepto de función: dominio, imagen, inversa,
  composición (Tronco 2): había funciones específicas sin la definición
  general.
- **`A12B`** — Continuidad (Tronco 2): el escalón real entre `Límite` y
  `Derivada`.
- **`NEWTON1`** — Leyes de Newton (Tronco 3.b): `F5` ya las usaba sin
  nombrarlas.
- **`TER6`/`TER7`** — Transmisión de calor y Entropía (Tronco 9.e):
  `Energía libre de Gibbs` (Química) usaba entropía sin que Física la
  definiera nunca.
- **`D4B`** — Tablas de frecuencia, cuartiles y varianza (Tronco 4.b).
- **`D12B`** — Teorema central del límite (Tronco 4.b): sostiene
  `Intervalo de confianza` y `Test de hipótesis` sin estar nombrado.
- **`D9B`** — Independencia de eventos y diagrama de árbol (Tronco 4.b):
  prerrequisito real de `Probabilidad compuesta`/`condicional`.
- **`P4D`** — Signos de puntuación (Tronco 5).
- **`IN5B`** — Programación orientada a objetos (Tronco 10.a): puente
  real entre programación procedural y "diseño y arquitectura" (`ISW2`).
- **`DEM1`** — Demostración matemática: deducción, contraejemplo,
  reducción al absurdo, inducción (Tronco 2, cruza con `FI2`).
- **`TRIG3`** — Identidades y ecuaciones trigonométricas (Tronco 3.b).
- **`A11B`** — Ecuaciones exponenciales y logarítmicas (Tronco 2).
- **`AL1B`** — Determinante y matriz inversa (Tronco 2).

**Un decimoquinto, encontrado por auditoría propia y no por Opus 5**:
los tres modelos (GPT, Gemma, Opus 5) coincidieron en que el contenido de
criptografía era débil ("hash, clave pública/privada", "RSA/ECC/AES"),
pero ninguno señaló la causa exacta. Verificando el porqué apareció un
**bug de etiqueta contradictoria, cuarto de esta familia**: Tronco 1
citaba `IN11P["Criptografía"]`, pero `IN11` (Tronco 10.a) siempre fue
"Seguridad informática" — mismo patrón que `BD1`, `G6P`, `RIT1`. Ahora
existe `CRIPTO1` (clave simétrica/asimétrica, hash) entre `Redes` e
`IN11`, con la etiqueta corregida.

### Extensiones confirmadas por 2+ modelos

- **`PS9` — Salud mental** (Tronco 15): confirmado por Z y Opus 5.
- **`META1`/`META2` — Técnicas de estudio y metacognición** (Meta-
  troncos): un solo modelo (Opus 5) pero con el argumento más fuerte de
  la ronda — "todo el mapa es material de estudio" y nunca enseñó cómo
  estudiar.
- **`IN12B` — Ética de la IA** (Tronco 10.a): confirmado por GPT, Z y
  Opus 5 — los tres, de forma independiente.
- **`MUS1`/`MUS2` — Lenguaje musical y armonía** (Tronco 9.b): Música
  como decisión pendiente lleva **cinco rondas** reapareciendo (v2.4,
  v2.5, v2.8, y ahora GPT+Z+Opus 5 en la misma ronda). No se resolvió la
  pregunta de fondo (¿tronco propio?), pero ya tiene primer contenido
  real colgando de `Ritmo y compás` (`RIT1`, v2.8) y `Acústica` (`AR4`).

### Descartado explícitamente, con criterio

Todo el resto de los ~150 ítems sugeridos entre los 4 informes: contenido
de currícula universitaria de carrera específica (ver nota arriba),
duplicados de lo ya aplicado en v2.5-v2.8 (física moderna, química
nuclear, geometría espacial, biotecnología, transformaciones geométricas,
todos re-propuestos sin que el modelo los detectara ya resueltos —
sexta-séptima vez que pasa esto), y catálogos de "sería lindo tener"
sin urgencia estructural (electrónica digital completa, ciberseguridad
como tronco aparte, paradigmas de programación funcional, NoSQL,
oceanografía, geopolítica detallada). Ninguno rompe algo que ya esté en
el mapa — a diferencia de los 14 huecos estructurales, que si no se
completaban dejaban una flecha citando un concepto inexistente.

---

## Qué cambió en el parche v2.9.1

No vino de una ronda externa — vino de una pregunta de Javier: `AM1`-
`AM4` (Educación Ambiental) ¿están tomados desde el ambientalismo o el
ecologismo, porque cambia mucho el enfoque? Verificando el contenido
real: los 4 nodos son puramente científico-técnicos (huella de carbono,
línea de base climática, medición) — nunca entran en el terreno
ideológico. Es el mismo hueco de neutralidad que ya se había resuelto
para Economía (`E28`) y Filosofía (`FI7`), sin aplicar acá.

- **`AM5` — Corrientes del pensamiento ambiental** (Tronco 6): el
  espectro real, de conservacionismo/ambientalismo liberal (regulación,
  mercado de carbono, capitalismo verde — el ambiente se protege dentro
  del sistema económico existente) a ecologismo político (decrecimiento,
  ecosocialismo, ecofeminismo, derechos de la naturaleza, Buen Vivir/
  Pachamama — el ambiente exige repensar el sistema en sí). Cruza con
  `E28` y `FI7` porque la discusión decrecimiento/ecosocialismo **es**,
  en el fondo, una corriente económica y filosófico-política aplicada al
  límite ecológico — mismo principio de neutralidad que rige esos dos:
  describir qué sostiene cada postura, nunca evaluar cuál tiene razón.

---

## Qué cambió en el parche v2.9.2

Javier preguntó si "Salud" y "Tecnología" tenían el mismo hueco de
neutralidad que Ambiente. Verificado: **Salud sí, en dos lugares
concretos** (Tecnología quedó descartada por ahora — a diferencia de
economía/filosofía/ambiente/salud, "corrientes de pensamiento
tecnológico" no es una materia curricular establecida con escuelas de
siglos de trayectoria; la parte más ideológica de tecnología que sí tiene
tradición real, cripto/blockchain, ya vive dentro de `E28`).

- **`EF13` — Políticas de drogas** (Tronco 7): `EF12` (Ley 26.586)
  estaba parado de un solo lado — "prevención" ya asumía el enfoque
  prohibicionista sin nombrar reducción de daños ni despenalización/
  legalización regulada (modelos Portugal 2001, Uruguay 2013). Mismo
  tratamiento neutral que `E28`/`FI7`/`AM5`.
- **`C19` — Sistema de salud** (Tronco 6): no existía ni el nodo base.
  Espectro neutral: público universal, privado de mercado (incluida la
  crítica radical al modelo hospitalario centralizado, asociada a la
  escuela austriaca ya nombrada en `E28` — Javier trajo como referencia
  un video de economicpills, "Una sanidad sin hospitales", que argumenta
  que en un mercado sin regulación los servicios de salud se
  desagregarían en vez de concentrarse en el hospital) y mixto (el
  sistema argentino real: hospital público + obra social + prepaga).
  Cuelga de `Impuestos` (`C14`) y cruza con `Obra social` (`E23`).

La memoria del proyecto ya tiene la heurística general (revisar la capa
de "corrientes" cuando un tema mezcla ciencia dura con sistema de
valores) — con Salud son ya cuatro aplicaciones confirmadas del mismo
principio (Economía, Filosofía, Ambiente, Salud).

---

## Qué cambió en el parche v2.9.3

Javier pidió una revisión sistemática del resto del mapa con el mismo
criterio, más enriquecer el contenido existente con referencias reales y
libros de peso. Revisados y descartados por no llegar a la vara fijada
en v2.9.2 (tiene que existir tradición de corrientes con nombre propio,
no sólo "el tema genera debate"): trabajo/sindicalismo (ya cubierto por
el espectro de `E28`), vivienda/alquiler, corrientes dietéticas/
nutrición, política migratoria — los cuatro son reales pero sin escuelas
académicas con trayectoria curricular equivalente a economía o filosofía.

**Tres huecos reales, aplicados**:

- **`DER6`/`DER7` — Corrientes de interpretación jurídica y Política
  criminal** (Tronco 13.b): `DER2` ya citaba la pirámide de Kelsen sin
  nombrar que Kelsen es el padre de una corriente — el **iuspositivismo**
  (*Teoría pura del derecho*, 1934). Enfrente, **iusnaturalismo** y
  **realismo jurídico**. `DER7` es la misma tensión aplicada a política
  pública: **garantismo** (Ferrajoli, *Derecho y razón*, 1989) vs.
  **mano dura/populismo punitivo**.
- **`OF18` — Modelos de producción agrícola** (Oficios): `Agricultor`
  daba por sentado un solo modelo sin nombrarlo. **Modelo agroindustrial**
  (monocultivo, paquete tecnológico transgénico+agroquímico — el "modelo
  sojero" argentino real) vs. **agroecología** (Vandana Shiva, *¿Cosecha
  robada?*, 2003 — la crítica más citada al primero).
- **`T11` — Corrientes historiográficas** (Tronco 6): el marco Big Six
  enseña a pensar históricamente sin nombrar que los historiadores mismos
  discuten desde dónde se escribe la historia — **positivismo histórico**
  (Ranke), **materialismo histórico** (Marx), **Escuela de los Annales**
  (Bloch, *Apología para la historia*, 1949) e **historia cultural/
  microhistoria** (Ginzburg).

**Enriquecido, no nuevo**: `E28` (corrientes económicas) le faltaba
**economía feminista/del cuidado** en la lista — Marilyn Waring, *If
Women Counted* (1988), el libro que originó la crítica a que el trabajo
doméstico y de cuidado no cuente en el PBI. Mismo nodo, lista más
completa.

Con esto, la memoria del proyecto queda con 4 aplicaciones del principio
de neutralidad más 3 adicionales de esta ronda (7 en total): Economía,
Filosofía, Ambiente, Salud, Derecho, Agro, Historia.

---

## Qué cambió en el parche v2.9.4

Segunda pasada del barrido de neutralidad, pidiendo específicamente si
quedaba algo más. Descartados por no llegar a la vara: software
libre/propietario (más filosofía de licenciamiento que corriente
académica con la misma trayectoria), gestión/administración (Taylorismo
vs. relaciones humanas es evolución histórica de una disciplina, no
disenso de valores activo hoy), sistemas electorales (proporcional vs.
mayoritario es más ingeniería institucional que ideología).

**3 huecos reales, el mismo patrón que los anteriores — una escuela
presentada como si fuera *la* disciplina, sin nombrar que compite con
otras**:

- **`PS10` — Corrientes psicológicas** (Tronco 15): `PS4` enseñaba
  represión/inconsciente (psicoanálisis, Freud) como contenido asentado.
  Sumadas **conductismo** (Skinner, *Science and Human Behavior*, 1953)
  y **humanismo** (Maslow, *A Theory of Human Motivation*, 1943) —
  **cognitivismo** ya estaba como `PS7` desde v2.6, ahora nombrado como
  la cuarta escuela en competencia, no un tema aparte.
- **`INV9` — Corrientes de filosofía de la ciencia** (Tronco 12): `INV7`
  nunca decía que *cómo* progresa la ciencia es debate filosófico real —
  **falsacionismo** (Popper, 1934), **paradigmas** (Kuhn, *La estructura
  de las revoluciones científicas*, 1962), **anarquismo epistemológico**
  (Feyerabend, *Contra el método*, 1975). Cruza con `FI9` (Epistemología).
- **`CS5` — Corrientes de la comunicación** (Tronco 16.a): `CS1`
  enseñaba el modelo emisor/receptor/canal/ruido (Shannon-Weaver, 1949,
  diseñado para líneas telefónicas) como si fuera *la* teoría de la
  comunicación. Sumadas **teoría crítica** (Adorno/Horkheimer,
  *Dialéctica de la Ilustración*, 1944) y **estudios culturales**
  (Stuart Hall, *Codificar/decodificar*, 1973).

**Total acumulado: 10 aplicaciones** del principio de neutralidad
(Economía, Filosofía, Ambiente, Salud, Derecho, Agro, Historia,
Psicología, Investigación, Comunicación).

---

## Qué cambió en el parche v3.0

El salto de versión más grande desde el v2 original. Cierre de la ronda
de revisión de bibliotecas completas (`librosbibliotecadigitalcom15`,
`biblioteca_san_pedro`, `CABA`, `NAP` en `tareas_pendientes/libros/`)
contra `troncos.md` materia por materia — detalle completo del proceso
y las fuentes en `material/PLAN-REPARACIONES-TRONCOS.md`. Agrupa dos
parches internos:

**v2.9.5 — `E28` deja de ser un nodo lumped**: "Corrientes del
pensamiento económico (mercantilismo a economía feminista)" era un
único nodo cubriendo 9 escuelas reales en ~250 años de historia
económica. Atomizado en `E28a`-`E28i`, cada uno con fuente primaria
real (Smith/Hayek/Mises para liberalismo clásico, Marx para el
socialismo, Keynes, Röpke para ordoliberalismo, Friedman para
neoliberalismo, Marilyn Waring para economía feminista) y
prerrequisitos históricamente reales, no forzados — mercantilismo y
fisiocracia alimentan liberalismo clásico, que a su vez da lugar tanto
al socialismo utópico → marxismo como, por otro camino, al
keynesianismo → ordoliberalismo/neoliberalismo. De paso, precisó tres
cruces cross-tronco que antes apuntaban al `E28` genérico
(`AM5b-d` en Ambiente, `C19a-c` en Sistema de salud) para que cada uno
cite la corriente específica que de verdad lo fundamenta.

**v2.9.6 — ~104 nodos "listos" aplicados en 16 materias**: el resultado
de una revisión exhaustiva, biblioteca por biblioteca, con el mismo
criterio que ya usó Historia profunda (verificar contra el grafo antes
de proponer nodo nuevo, nunca forzar una conexión sin base pedagógica
real). Por tronco:

- **Geografía** (Tronco 6, 19 nodos: `GEOA1-GEOA6`, `GM1-GM8`, `GAM1-GAM4`,
  `IDH1`): de puro herramienta/concepto a contenido regional real —
  Argentina, Mundial y América Latina/Anglosajona.
- **Antropología** (Tronco 6, `ANTRO2`/`ANTRO3`): subcampos y
  parentesco.
- **Cívica** (Tronco 6, `C20-C23`): teoría del poder, tipos de Estado
  (cruza con `E28c`/`E28f`), proyecto ciudadano participativo,
  discriminación e INADI.
- **Lengua** (Tronco 5, 29 nodos: `LC1-LC7`, `SX1-SX19`, `ES1`, `TT1`,
  `TS1`): comunicación/pragmática y la atomización de `Oración
  compuesta` (`P8`), que aplastaba ~18 conceptos reales de sintaxis.
- **Historia Argentina** (Tronco 8.c, 8 nodos: `AH6B-C`, `AH7B-C`,
  `AH9B-C`, `ISI1`, `AH15B`): Rosas y la Confederación, economías
  regionales tempranas, Guerra del Paraguay, Conquista del Desierto,
  Reforma Universitaria 1918 (confirmada 4 veces en fuentes
  independientes), Semana Trágica 1919, industrialización por
  sustitución de importaciones, Crisis de 2001.
- **Historia Mundial** (Tronco 8.b, `HM9B`/`HM10B`): Revolución
  Mexicana, Guerra Civil Española.
- **Economía-Gestión/SIC** (18 nodos repartidos en Tronco 1 y 13.a:
  `ORG1-5`, `E20A1-A6`, `PROY1-3`, `ECF1-4`): Teoría de las
  Organizaciones, Sistemas de Información Contable extendiendo
  `E20B-D`, la instancia organizacional de `Gestión de proyectos`
  (mismo patrón que `C22` del lado cívico), y Economía formal
  (micro/macro, costo de oportunidad, sectores económicos) como
  materia distinta de las finanzas personales de `E1-E37`.
- **Educación Física** (Tronco 7, `EF8B-D`): Juegos Olímpicos, El Pato
  como deporte nacional argentino, el deporte como fenómeno cultural.
- **Biología** (Tronco 7, `BK1`, `BQUIMIO`, `BCHAGAS`): sistema
  nervioso (el hallazgo más significativo de la ronda — 0 resultados
  en grep para "neurona" en todo el documento), quimiosíntesis, Mal de
  Chagas.
- **Física** (Tronco 9.e, `FISM3`): física médica (rayos X, PET,
  radioterapia) — motivación real de `NUC1-NUC4` desde siempre, nunca
  convertida en nodo.
- **Química** (Tronco 7, `QNANO`, `QSUPERCOND`, `QPETROLEO`,
  `QANALIT`, `QATMOS`): 5 nodos de cierre de unidad, confirmado sin
  pared contra Chang (McGraw-Hill, 1173pp).
- **Matemática** (Tronco 2, `A12ASIN`, `A12BOL`, `A13CONC`, `A13LHOP`,
  `A14TEC`, `A14DEF`): Análisis Matemático nivel 2, mismo tratamiento
  que ya recibió Química.
- **Derecho** (Tronco 13.b, `DER1B`): fuentes del derecho.
- **Educación Tecnológica** (Tronco 10.0, `TEC0a-c`): materia que no
  existía en absoluto — el fundamento conceptual que precede a
  Informática e Ingeniería.
- **Investigación** (Tronco 12, `INVQ1-3`): metodología cualitativa,
  contrapeso completo a la rama cuantitativa que ya era sólida.
- **Filosofía** (Tronco 5, `FIB1`): bioética general, de la que
  `BIOTEC2` (transgénicos) pasa a ser una instancia particular.

**Deliberadamente fuera de este parche**: 5 sub-planes grandes que
necesitan decisión de alcance antes de diseñarse (Historia del Arte
—13 nodos—, atomización completa de `FI7` —~12 nodos, fuente Carpio ya
confirmada—, Historia de la Literatura Argentina/Latinoamericana —6
nodos—, profundidad de Derecho laboral/comercial —~15-20 nodos, fuente
Apolinar García—, Orientación Vocacional como materia nueva completa),
y 2 nodos de salud sensibles (`trastornos-alimentarios`,
`prevención-del-suicidio`) que existen como contenido real y valioso
pero requieren diseño cuidadoso siguiendo las guías de mensaje seguro
de la OMS antes de generarse — no agregados al grafo en este parche.
