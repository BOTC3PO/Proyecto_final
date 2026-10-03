# Examen jefe — [PENDIENTE #779]

> Logro #779. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

---

## Sección: cooperativismo-y-mutualismo (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "democráticamente"
tipo: completar
respuestas_validas:
  - "democráticamente"

enunciado: "Según los principios de la economía social, las cooperativas son organizaciones gestionadas ________ por sus miembros."

explicacion: |
  El principio de gestión democrática es fundamental: cada miembro tiene un voto, independientemente del capital aportado.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["principios", "gestion"]

respuesta: falso
tipo: vf
enunciado: "En una cooperativa, el poder de decisión se distribuye de manera proporcional a la cantidad de acciones o capital aportado por cada socio."

pasos:
  - "Analizar el principio de 'una persona, un voto'."

explicacion: |
  Falso. En las cooperativas rige el principio de gestión democrática (un socio, un voto), a diferencia de las sociedades de capital donde el voto depende de las acciones.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["diferencias", "objetivo"]

tipo: mc
opciones_explicitas: ["ayuda_mutua", "servicios_comunes", "prestamos_y_ayuda", "excedentes_y_servicios"]

respuesta: "ayuda_mutua"

enunciado: "Si nos enfocamos en el objetivo principal de una mutual, estamos hablando de la práctica de la ________."

explicacion: |
  Mientras las cooperativas buscan satisfacer necesidades de sus socios mediante la prestación de servicios, el mutualismo se centra en la ayuda mutua entre sus integrantes.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "socios"
tipo: completar
respuestas_validas:
  - "socios"

enunciado: "Las cooperativas están compuestas por un grupo de ________ que se unen voluntariamente para satisfacer sus necesidades económicas, sociales y culturales."

explicacion: |
  Los socios son la base fundamental de cualquier organización de economía social.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta_orden: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro"]
tipo: ordenar
opciones_explicitas: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro"]

enunciado: "Ordene cronológicamente los pasos básicos para la formación legal de una cooperativa:"

explicacion: |
  Primero se debe realizar la reunión de fundadores, luego redactar los estatutos que regirán la entidad y finalmente inscribirse en el registro correspondiente para obtener la personería jurídica.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "gestion_democratica"]

respuesta: verdadero
tipo: vf
enunciado: "En una cooperativa de trabajo, según el principio de gestión democrática, cada asociado tiene un voto, independientemente del capital aportado."

explicacion: |
  Correcto. A diferencia de una sociedad anónima donde el poder depende de la cantidad de acciones, en las cooperativas rige el principio de 'un asociado, un voto', garantizando la gestión democrática.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["caracteristicas", "economia_social"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una agrupación de productores de leche que se unen para procesar su materia prima y distribuir sus productos bajo una marca común, compartiendo excedentes según el uso de servicios.", "cooperativa"], ["Un grupo de vecinos que crean un fondo común para prestarse dinero entre ellos con tasas sociales, sin fines de lucro.", "mutual"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual", "sociedad_anónima", "s.r.l."]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La respuesta es {escenarios[escenario_idx][1]}. Las cooperativas buscan satisfacer necesidades de sus miembros mediante la producción o comercialización de bienes/servicios, mientras que las mutuales se centran en la prestación de servicios sociales y ayuda recíproca.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedentes", "distribucion"]

variables:
  excedente_total: 1000
  porcentaje_reserva_legal: 0.05
  porcentaje_fondo_educacion: 0.05
  porcentaje_reparto_asociados: 0.90

respuesta: redondear(excedente_total * porcentaje_reparto_asociados, 2)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una cooperativa de consumo al cierre de su ejercicio obtiene un excedente neto de ${excedente_total}. Tras destinar el 5% a la reserva legal y el 5% al fondo de educación, el resto se distribuye entre los asociados proporcionalmente al consumo realizado. ¿Cuánto dinero se reparte entre los asociados?"

pasos:
  - "Calcular el monto para reserva legal: ${excedente_total} * {porcentaje_reserva_legal}"
  - "Calcular el monto para el fondo de educación: ${excedente_total} * {porcentaje_fondo_educacion}"
  - "Restar ambos montos al excedente total para obtener el remanente a repartir."

explicacion: |
  El cálculo es: ${excedente_total} - (${excedente_total} * 0.05) - (${excedente_total} * 0.05) = ${excedente_total} * 0.90 = ${redondear(excedente_total * porcentaje_reparto_asociados, 2)}.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "constitucion"]

respuesta_orden: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]
tipo: ordenar
opciones_explicitas: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa de trabajo en Argentina:"

explicacion: |
  Primero se reúnen los interesados, luego se redacta el estatuto que regirá la entidad, se celebra la asamblea donde se aprueba dicho estatuto y finalmente se inscribe ante el ente regulador (INAES).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["capital", "asociados"]

respuesta: "variable"
tipo: completar
respuestas_validas:
  - "variable"

enunciado: "En el cooperativismo, el capital social es de naturaleza ___, ya que su monto cambia con la entrada y salida de nuevos asociados."

explicacion: |
  El capital es variable porque no está representado por acciones de libre negociación en bolsa, sino que depende de la integración de los asociados a la entidad.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["cooperativas", "diferencias"]

respuesta: "sin fines de lucro"
tipo: completar
respuestas_validas:
  - "sin fines de lucro"
  - "no lucrativa"

enunciado: "A diferencia de las sociedades comerciales tradicionales, las cooperativas se rigen por el principio de que su actividad es ___."

explicacion: |
  Las cooperativas son entidades de economía social cuyo objetivo principal es satisfacer las necesidades de sus asociados y no la maximización de beneficios para terceros. Aunque pueden generar excedentes, estos se reinvierten o distribuyen según el uso de servicios, no como lucro comercial puro.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

respuesta: falso
tipo: vf
enunciado: "En una cooperativa, el poder de decisión se distribuye según el capital aportado por cada socio (a más capital, más votos)."

explicacion: |
  Falso. El principio de democracia cooperativa establece que cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado. Esto es lo que las distingue de las sociedades anónimas.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["mutualismo", "ayuda_mutua"]

respuesta: "ayuda mutua"
tipo: mc
opciones_explicitas: ["ayuda mutua", "maximización de dividendos", "especulación financiera", "competencia de mercado"]

enunciado: "El principio fundamental que distingue al mutualismo de otras formas de asociación es la ___ entre sus miembros para satisfacer necesidades comunes."

explicacion: |
  El mutualismo se basa en el principio de ayuda mutua, donde los asociados se asocian para prestarse servicios de previsión, asistencia o ayuda recíproca.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["ley_26206", "marco_legal"]

respuesta: "sociedad de personas"
tipo: mc
opciones_explicitas: ["sociedad de personas", "sociedad de capitales"]

enunciado: "Según el marco legal de las cooperativas, estas se definen esencialmente como una ___."

explicacion: |
  Las cooperativas son sociedades de personas, ya que lo fundamental es la calidad de los asociados y su voluntad de cooperación, no la cuantía de su capital.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["principios", "valores"]

respuesta_orden: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]
tipo: ordenar
opciones_explicitas: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]

enunciado: "Ordene los siguientes principios cooperativos según la lógica de constitución de una organización: primero la apertura, luego la gestión y finalmente la distribución."

explicacion: |
  Para que exista una cooperativa, primero deben ingresar los socios libremente (apertura), luego deben decidir cómo gestionarse (democracia) y finalmente cómo gestionar sus recursos (participación económica).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["gestion", "democracia"]

tipo: mc
opciones_explicitas: ["La búsqueda de lucro máximo para accionistas externos", "La gestión democrática por parte de sus miembros", "La propiedad estatal de los medios de producción", "La primacía del capital sobre el trabajo"]

respuesta: "La gestión democrática por parte de sus miembros"

enunciado: "A diferencia de las sociedades de capital tradicionales, donde el poder de voto depende de la cantidad de acciones, las cooperativas se distinguen por un modelo de gestión donde cada miembro tiene un voto, independientemente de su aporte. Esto se conoce como:"

explicacion: |
  En el cooperativismo, rige el principio de 'un hombre, un voto', asegurando que el control sea democrático y no dependa de la riqueza de los socios.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["mutualismo", "ayuda_mutua"]

tipo: vf

enunciado: "El mutualismo se distingue del cooperativismo principalmente en que su fin primordial es la ayuda mutua para satisfacer necesidades comunes, sin tener como objetivo principal la distribución de excedentes entre sus miembros."

respuesta: verdadero

explicacion: |
  Correcto. Las cooperativas suelen distribuir excedentes entre sus socios según el uso de servicios, mientras que las mutuales no distribuyen ganancias: su propósito es cubrir gastos comunes o brindar asistencia recíproca.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["ley_26206", "principios"]

tipo: completar
respuestas_validas:
  - "ayuda mutua"

enunciado: "Según el espíritu de la Ley 26.206, una organización que se distingue de una empresa comercial por su fin social debe basarse en el principio de ___."

pasos:
  - "Identificar el principio fundamental de la economía social."

explicacion: |
  La ayuda mutua es el pilar que diferencia a estas organizaciones de las empresas de capital, donde el fin es el lucro.

respuesta: "ayuda mutua"
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["principios", "orden"]

tipo: ordenar
opciones_explicitas: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

respuesta_orden: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

enunciado: "Para que una organización sea considerada cooperativa bajo los estándares de la economía social, debe seguir una secuencia lógica de principios. Ordene los siguientes principios según la estructura clásica de la identidad cooperativa (desde la pertenencia hasta la gestión):"

explicacion: |
  Primero se define quién puede entrar (Ingreso libre), luego cómo se decide (Gestión democrática) y finalmente cómo se gestionan los recursos (Participación económica).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedente", "lucro"]

tipo: mc
opciones_explicitas: ["El excedente es igual al lucro de una empresa comercial", "El excedente se distribuye según el capital aportado", "El excedente se distribuye según el uso de los servicios", "El excedente se reinvierte íntegramente en el Estado"]

respuesta: "El excedente se distribuye según el uso de los servicios"

enunciado: "Una diferencia clave entre el 'lucro' de una sociedad comercial y el 'excedente' de una cooperativa es que el segundo se distribuye en función de la ___ realizada por los socios."

explicacion: |
  En las cooperativas, el retorno de excedentes no depende de cuánto capital puso cada uno, sino de cuánto utilizó los servicios de la cooperativa (retorno cooperativo).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "organizacion"]

variables:
  datos: [["Un grupo de agricultores se une para comprar insumos por menor precio y vender su cosecha sin intermediarios", "cooperativa"], ["Un grupo de vecinos se une para prestar servicios de asistencia sanitaria y farmacia con fines de ayuda mutua", "mutual"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual"]

enunciado: "Un grupo de personas se organiza bajo el modelo de economía social. Si el objetivo principal es la gestión de servicios de ayuda mutua y asistencia, estamos ante una: ___"

explicacion: |
  Según la normativa, las cooperativas buscan satisfacer necesidades de sus socios mediante la explotación de una actividad económica, mientras que las mutuales se centran en la ayuda mutua y servicios de asistencia.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

respuesta: falso
tipo: vf

enunciado: "En una organización cooperativa, el principio de 'una persona, un voto' implica que el poder de decisión es proporcional al capital aportado por cada socio."

explicacion: |
  Falso. El principio fundamental de las cooperativas es la gestión democrática: cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["estructura", "socios"]

variables:
  datos: [["Asamblea de Socios", "Máximo órgano de decisión"], ["Consejo de Administración", "Órgano de gobierno y dirección"], ["Sindicatura", "Control de legalidad"]]

respuesta: "Asamblea de Socios"
tipo: completar
respuestas_validas:
  - "Asamblea de Socios"
  - "Consejo de Administración"
  - "Sindicatura"

enunciado: "En la estructura de una cooperativa, el ___ es el órgano máximo de gobierno donde se toman las decisiones fundamentales por parte de los asociados."

explicacion: |
  La Asamblea de Socios es el órgano supremo donde se ejerce la soberanía de los miembros.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["fin_lucro", "economia_social"]

respuesta: falso
tipo: vf

enunciado: "Las entidades de la economía social, como cooperativas y mutuales, tienen como objetivo primordial la maximización de beneficios económicos para sus accionistas externos."

explicacion: |
  Falso. El fin es satisfacer necesidades de los asociados y promover el bienestar de la comunidad; no buscan el lucro para terceros, sino el beneficio de sus propios miembros.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "pasos"]

respuesta_orden: ["Reunión de interesados y definición de objeto social", "Redacción del contrato social y estatutos", "Inscripción en el registro de cooperativas"]
tipo: ordenar
opciones_explicitas: ["Redacción del contrato social y estatutos", "Reunión de interesados y definición de objeto social", "Inscripción en el registro de cooperativas"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa:"

explicacion: |
  Primero se define el objeto y los socios, luego se formaliza en un estatuto y finalmente se inscribe ante la autoridad de aplicación para obtener personería jurídica.
```

## Sección: planificacion-administrativa (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_basicos", "gestion"]

tipo: mc
opciones_explicitas: ["El proceso de tomar decisiones anticipadas para alcanzar objetivos", "La ejecución de tareas diarias sin un orden previo", "El análisis de los resultados obtenidos tras una crisis", "La asignación de recursos basada en la intuición"]
respuesta: "El proceso de tomar decisiones anticipadas para alcanzar objetivos"

enunciado: "La planificación administrativa se define como ___________."

explicacion: |
  La planificación es la función administrativa que consiste en establecer metas y elegir los medios para alcanzarlas, actuando de forma anticipada.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["elementos", "objetivos"]

respuesta: "objetivos"
tipo: completar
respuestas_validas:
  - "objetivos"

enunciado: "Para que una planificación sea efectiva, debe definir claramente los ___________ que se desean alcanzar, así como las estrategias para lograrlos y los recursos necesarios para llevar a cabo las acciones."

explicacion: |
  La planificación requiere de objetivos (el qué), estrategias (el cómo) y recursos (con qué).
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["temporalidad", "cronograma"]

tipo: vf
enunciado: "La planificación implica determinar el momento exacto (cuándo) en que deben ejecutarse las acciones para asegurar la eficiencia operativa."

respuesta: verdadero

explicacion: |
  La dimensión temporal es fundamental; sin un cronograma o tiempos definidos, la planificación carece de control y seguimiento.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["proceso_administrativo", "orden"]

tipo: ordenar
opciones_explicitas: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

enunciado: "Ordene cronológicamente las etapas lógicas de un proceso de planificación administrativa:"

respuesta_orden: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

explicacion: |
  Aunque los modelos varían, la lógica administrativa requiere primero saber a dónde ir (objetivos), dónde estamos (diagnóstico), cómo llegaremos (planes) y cómo nos aseguramos de haber llegado (control).
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["niveles", "estrategia"]

variables:
  datos: [["estratégica", "largo plazo"], ["operativa", "corto plazo"]]
  idx: uno_de([0, 1])
  tipo_planificacion: datos[idx][0]
  horizonte: datos[idx][1]

tipo: completar
respuesta: tipo_planificacion
respuestas_validas:
  - tipo_planificacion
enunciado: "La planificación que se realiza a nivel de alta dirección, enfocándose en la organización como un todo y con un horizonte de {horizonte}, es la planificación ___."
explicacion: |
  La planificación estratégica es global y de largo plazo, mientras que la operativa es específica y de corto plazo.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: "establecer objetivos"
tipo: completar
respuestas_validas:
  - "establecer objetivos"
  - "definir metas"

enunciado: "La primera etapa fundamental de la planificación administrativa consiste en ___ para saber hacia dónde se dirige la organización."

explicacion: |
  La planificación comienza con la definición de los objetivos o metas. Sin un norte claro, los demás pasos (cómo, cuándo y con qué recursos) carecen de propósito.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["toma_de_decisiones", "estrategia"]

respuesta: "aumentar costos fijos"
tipo: mc
opciones_explicitas: ["aumentar costos fijos", "reducir costos de envío", "maximizar beneficios", "reducir personal"]

enunciado: "Una empresa decide expandirse mediante la apertura de una nueva sucursal física. Según la planificación estratégica, esta acción implica principalmente: ___"

explicacion: |
  Al abrir una sucursal física, la empresa está planificando un crecimiento que conlleva un aumento en sus costos fijos (alquiler, servicios, salarios fijos), como se indica en la opción seleccionada.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "La planificación administrativa es un proceso estático que, una vez definido, no debe ser revisado aunque el entorno cambie."

explicacion: |
  Falso. La planificación debe ser flexible. Si el entorno (economía, competencia, leyes) cambia, la planificación debe ajustarse para asegurar el cumplimiento de los objetivos.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma"]
tipo: ordenar
opciones_explicitas: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma"]

enunciado: "Para implementar un nuevo proyecto de producción, un gerente debe seguir un orden lógico de planificación. Ordene los siguientes pasos de forma secuencial:"

explicacion: |
  Primero se define el 'qué' (metas), luego el 'cómo' (acciones), después el 'con qué' (recursos) y finalmente el 'cuándo' (cronograma). La evaluación es un paso posterior al proceso de ejecución.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["presupuesto", "calculo"]

variables:
  datos: [[5000, 1200, 3000], [8000, 2500, 5500], [3000, 900, 2100]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] - datos[idx][1] - datos[idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la fase de planificación de presupuesto, una empresa proyecta los siguientes valores para el próximo trimestre: Ingresos estimados: ${datos[idx][0]}, Gastos operativos: ${datos[idx][1]}, Impuestos proyectados: ${datos[idx][2]}. ¿Cuál es el beneficio neto planificado?"

pasos:
  - "Identificar los ingresos proyectados."
  - "Restar los gastos operativos."
  - "Restar los impuestos proyectados del resultado anterior."

explicacion: |
  El beneficio neto planificado se obtiene restando todos los costos y gastos proyectados de los ingresos totales previstos.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos", "administracion"]

respuesta: falso
tipo: vf

enunciado: "La planificación es un proceso que ocurre exclusivamente después de la ejecución de las actividades para corregir errores."

explicacion: |
  La planificación es un proceso proactivo que se realiza antes de la acción. El proceso de comparar lo ejecutado con lo planificado es lo que se denomina 'control'.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["elementos", "objetivos"]

variables:
  datos: [["definir el rumbo", "qué hacer"], ["establecer métodos", "cómo hacerlo"], ["fijar plazos", "cuándo hacerlo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "qué hacer"
  - "cómo hacerlo"
  - "cuándo hacerlo"

enunciado: "En la etapa de planificación, cuando una empresa decide establecer los procedimientos y recursos necesarios para alcanzar sus metas, está definiendo ___."

explicacion: |
  La planificación implica determinar las acciones (qué), los métodos (cómo) y los tiempos (cuándo).
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["flexibilidad", "errores"]

respuesta: "Planificación excesivamente rígida"
tipo: mc
opciones_explicitas: ["Planificación excesivamente rígida", "Falta de objetivos", "Exceso de control", "Delegación ineficiente"]

enunciado: "Un error común en la planificación es diseñar planes que no permiten ajustes ante cambios en el entorno, lo que se conoce como:"

explicacion: |
  Una planificación efectiva debe ser flexible para adaptarse a las contingencias del mercado sin perder de vista el objetivo final.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos", "orden"]

respuesta_orden: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las etapas del proceso administrativo en su secuencia lógica estándar:"

explicacion: |
  El proceso administrativo comienza con la planificación (establecer metas), seguido de la organización (asignar recursos), la dirección (ejecutar/guiar) y el control (evaluar).
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "avanzado"
  tags: ["incertidumbre", "riesgo"]

variables:
  caso: uno_de([[0.90, "baja"], [0.50, "moderada"], [0.15, "alta"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["alta", "baja", "moderada"]

enunciado: "Si una empresa planifica basándose en un entorno con una probabilidad de éxito del {caso[0]}, la incertidumbre asociada a su planificación es ___."

explicacion: |
  A mayor probabilidad de éxito o mayor control sobre las variables, menor es la incertidumbre. Sin embargo, la planificación siempre busca reducir la incertidumbre, pero nunca puede eliminarla por completo.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos_administrativos", "gestion"]

respuesta: "control"
tipo: "completar"
respuestas_validas:
  - "control"
  - "Control"

enunciado: "Mientras que la planificación establece los objetivos y los medios para alcanzarlos, el proceso de ___ se encarga de verificar que las actividades se realicen conforme a lo planeado."

explicacion: |
  La planificación es la fase de diseño y establecimiento de metas, mientras que el control es la fase de monitoreo y corrección de desviaciones.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: "vf"

enunciado: "La planificación administrativa se caracteriza por ser un proceso reactivo que solo se inicia una vez que los problemas han ocurrido en la organización."

explicacion: |
  Falso. La planificación es un proceso proactivo y preventivo que busca anticipar situaciones y establecer un curso de acción antes de que los eventos ocurran.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["elementos", "metas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["establecer un objetivo", "definir el camino"], ["determinar una meta", "asignar recursos"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: [datos[escenario_idx][0], datos[escenario_idx][1], "evaluar resultados", "ejecutar órdenes"]

enunciado: "En el proceso de planificación, una vez que se ha logrado {datos[escenario_idx][0]}, la siguiente etapa lógica es {datos[escenario_idx][1]}."

explicacion: |
  La planificación requiere primero la definición del 'qué' (objetivo) y luego el 'cómo' (estrategia o asignación de recursos).
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["jerarquia", "niveles"]

respuesta_orden: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]
tipo: "ordenar"
opciones_explicitas: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]

enunciado: "Ordene los niveles de planificación de la organización desde el alcance más global y a largo plazo hasta el más específico y de corto plazo:"

explicacion: |
  La jerarquía administrativa comienza con la Estratégica (toda la empresa/largo plazo), sigue con la Táctica (departamentos/mediano plazo) y finaliza con la Operativa (tareas específicas/corto plazo).
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["procesos_administrativos"]

respuesta: "organizar"
tipo: "completar"
respuestas_validas:
  - "organizar"
  - "Organizar"

enunciado: "La planificación determina qué se va a hacer y qué recursos se necesitan; por el contrario, la función de ___ se encarga de distribuir esos recursos y asignar responsabilidades entre los miembros de la empresa."

explicacion: |
  La planificación es el diseño de la acción, mientras que la organización es la estructura que permite ejecutar dicha acción mediante la asignación de tareas y autoridad.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: "definir_metas"
tipo: mc
opciones_explicitas: ["definir_metas", "distribuir_insumos", "fijar_tiempos", "evaluar_desempeño"]

enunciado: "En el proceso de planificación, el primer paso fundamental consiste en ___."

explicacion: |
  La planificación comienza con la definición de objetivos o metas que la organización desea alcanzar.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La planificación administrativa implica decidir por adelantado qué se va a hacer, cómo se va a hacer y cuándo se va a hacer."

explicacion: |
  Correcto. La esencia de la planificación es la anticipación de acciones para alcanzar objetivos.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Diagnóstico", "Objetivos", "Estrategias", "Control"]
tipo: ordenar
opciones_explicitas: ["Diagnóstico", "Objetivos", "Estrategias", "Control"]

enunciado: "Ordene cronológicamente las etapas de un proceso de planificación estándar:"

explicacion: |
  La secuencia lógica siempre parte del análisis de la situación actual para luego proyectar metas y acciones.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["componentes"]

variables:
  datos: [["recursos_humanos", "personal"], ["presupuesto", "dinero"], ["maquinaria", "equipos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "personal"
  - "dinero"
  - "equipos"

enunciado: "Para ejecutar el plan de producción, la empresa debe planificar la asignación de ___."

explicacion: |
  La planificación requiere la asignación de recursos (humanos, financieros o materiales) para que los planes sean realizables.
```

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  datos: [["corto plazo", "1 año"], ["mediano plazo", "3 años"], ["largo plazo", "5 años"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 año", "3 años", "5 años", "10 años"]

enunciado: "Si una empresa está realizando una planificación de {datos[idx][0]}, su horizonte temporal suele ser de ___."

explicacion: |
  El horizonte temporal define si la planificación es operativa (corto), táctica (mediano) o estratégica (largo).
```

## Sección: tipos-de-sociedades (27 preguntas)

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

variables:
  num_socios_min: 2

respuesta: "dos"
tipo: input

enunciado: "Para constituir una sociedad, se requiere como mínimo la participación de {num_socios_min} personas."

explicacion: |
  Por definición legal y económica, una sociedad implica la reunión de dos o más personas que aportan bienes o trabajo para realizar una actividad económica común. El comercio individual, en cambio, es ejercido por una sola persona.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["utilidades", "reparto"]

variables:
  total_utilidad: random(100000, 1000000)
  porcentaje_socio_a: random(30, 60)
  porcentaje_socio_b: 100 - porcentaje_socio_a

respuesta: "{redondear(total_utilidad * porcentaje_socio_a / 100, 0)}"
tipo: input

enunciado: "Si una sociedad obtiene {total_utilidad} en utilidades y el Socio A tiene un {porcentaje_socio_a}% de participación, ¿cuánto le corresponde recibir (valor entero)?"

explicacion: |
  Las utilidades se reparten generalmente en proporción al capital aportado o según lo establecido en el contrato social. El cálculo es directo: Total * Porcentaje. Esto ilustra cómo la estructura societaria define el flujo de beneficios.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["gestion", "administracion"]

variables:
  tipo_sociedad: uno_de(["S.A.", "S.R.L."])

respuesta: "S.A."
tipo: completar

enunciado: "En la sociedad {tipo_sociedad}, es común que los propietarios (accionistas/socios) deleguen la administración diaria en un directorio o gerente profesional, separando la propiedad de la gestión."

explicacion: |
  En las S.A., especialmente las grandes, la propiedad (acciones) y la gestión (directorio) suelen estar separadas. En las S.R.L., es más frecuente que los socios participen directamente en la gestión o la controlen de forma más directa.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["srl", "socios"]

variables:
  min_socios: 2
  max_socios: 50

respuesta: "entre " + min_socios + " y " + max_socios
tipo: completar

enunciado: "La ley argentina establece que una S.R.L. debe tener un número de socios comprendido entre {min_socios} y {max_socios}."

explicacion: |
  La Ley General de Sociedades (y su precursora) regula que las S.R.L. deben tener entre 2 y 50 socios. Si quedan con uno solo, debe transformarse en sociedad unipersonal o disolverse. Si supera el límite, debe convertirse en S.A.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["sa", "inversion"]

variables:
  cantidad_inversores: random(10, 100)

respuesta: "muchos"
tipo: completar

enunciado: "Las S.A. son ideales cuando se necesita atraer a {cantidad_inversores} inversores que no participan en la gestión diaria."

explicacion: |
  La estructura accionaria permite dispersar la propiedad entre muchos inversores. Estos aportan capital pero delegan la gestión operativa en profesionales (directorios), lo que es crucial para proyectos que requieren grandes capitales pero no cuentan con la confianza personal entre todos los aportantes.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["sociedad", "definicion", "concepto"]

variables:
  socios: random(2, 5)

respuesta: "sociedad"
tipo: completar

enunciado: "Cuando {socios} o más personas deciden trabajar juntas para obtener ganancias, se constituyen en una ________."

explicacion: |
  La unión de dos o más personas con fines lucrativos se denomina sociedad. Esto permite reunir capitales y conocimientos.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SRL", "responsabilidad", "limitada"]

variables:
  capital: random(100000, 500000)

respuesta: "limitado"
tipo: completar

enunciado: "En una S.R.L., la responsabilidad de los socios se limita al {capital} pesos que han aportado como capital."

explicacion: |
  La característica clave de la S.R.L. es que los socios no responden con su patrimonio personal, solo con lo aportado a la empresa.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["unipersonal", "patrimonio", "riesgo"]

variables:
  escenario: uno_de(["unipersonal", "SRL"])

respuesta: "todo su patrimonio personal"
tipo: completar

enunciado: "Si el negocio es de un comerciante unipersonal, responde por las deudas con {escenario}."

explicacion: |
  El comerciante unipersonal responde con todo su patrimonio personal. En cambio, en una S.R.L. la responsabilidad está limitada al capital aportado.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["capital", "participacion", "calculos"]

variables:
  capital_total: random(100, 1000) * 1000
  aporte_socio: random(10, 50) * 1000
  porcentaje: redondear((aporte_socio / capital_total) * 100, 0)

respuesta: porcentaje
tipo: input

enunciado: "Si el capital total de una S.R.L. es {capital_total} pesos y un socio aporta {aporte_socio} pesos, ¿qué porcentaje de la sociedad posee?"

explicacion: |
  El porcentaje se calcula dividiendo el aporte individual por el capital total y multiplicando por 100.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["SA", "inversion", "escala"]

variables:
  monto: random(1000000, 5000000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Para un proyecto que requiere una inversión inicial de {monto} pesos y atrae a muchos inversores, la estructura más adecuada es una ________."

explicacion: |
  Las Sociedades Anónimas (S.A.) son ideales para grandes proyectos que requieren mucha inversión y permiten la negociación de acciones.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["gestion", "directores", "SA"]

variables:
  rol: uno_de(["accionistas", "directores"])

respuesta: "directores"
tipo: completar

enunciado: "En una S.A., los inversores suelen delegar la administración diaria en los {rol}."

explicacion: |
  En las S.A., los accionistas no participan necesariamente en la gestión diaria; esta queda a cargo de un directorio.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["ventajas", "recursos", "capital"]

variables:
  recurso: uno_de(["capitales", "conocimientos", "recursos"])

respuesta: "reunir"
tipo: completar

enunciado: "Una ventaja principal de la sociedad es la capacidad de ________ {recurso} de varios actores."

explicacion: |
  La sociedad permite reunir capitales, conocimientos y recursos de varios actores, facilitando proyectos de mayor envergadura.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["unipersonal", "definicion", "legal"]

variables:
  numero_socios: 1

respuesta: "una sola persona"
tipo: completar

enunciado: "La sociedad unipersonal permite que ________ constituya una sociedad, combinando flexibilidad y protección patrimonial."

explicacion: |
  La sociedad unipersonal es una figura legal que permite a una sola persona constituir una sociedad con patrimonio separado.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["identificacion", "responsabilidad", "SRL"]

variables:
  tipo_respuesta: uno_de(["limitada", "ilimitada"])

respuesta: "limitada"
tipo: completar

enunciado: "Si la responsabilidad de los socios es {tipo_respuesta} al capital aportado, es probable que se trate de una S.R.L."

explicacion: |
  La S.R.L. se caracteriza por la responsabilidad limitada de los socios al capital que han aportado.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["perdida", "capital", "SRL"]

variables:
  aporte: random(5000, 50000)

respuesta: aporte
tipo: input

enunciado: "En una S.R.L., si el socio aporta {aporte} pesos y la empresa quiebra con deudas impagables, ¿cuál es su pérdida máxima?"

explicacion: |
  En una S.R.L., la pérdida máxima del socio es el capital que aportó. No responde con su patrimonio personal.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SA", "capital", "acciones"]

variables:
  capital: random(1000000, 10000000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Una empresa con capital dividido en acciones y un monto superior a {capital} pesos suele constituirse como ________."

explicacion: |
  Las Sociedades Anónimas (S.A.) son el formato estándar para grandes capitales divididos en acciones negociables.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["accionistas", "gestion", "SA"]

variables:
  participacion: uno_de(["directa", "indirecta"])

respuesta: "indirecta"
tipo: completar

enunciado: "En una S.A., los accionistas suelen tener participación ________ en la gestión diaria."

explicacion: |
  Los accionistas de una S.A. generalmente no participan directamente en la gestión; delegan esa función a los directores.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["ganancias", "fines", "sociedad"]

variables:
  fin: uno_de(["lucro", "filantropia"])

respuesta: "lucro"
tipo: completar

enunciado: "Las sociedades se constituyen con el fin de obtener ________."

explicacion: |
  El propósito fundamental de una sociedad económica es la obtención de ganancias o lucro.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["utilidades", "distribucion", "calculos"]

variables:
  utilidad: random(100000, 1000000)
  porcentaje_socio: random(10, 50)
  monto_socio: redondear(utilidad * (porcentaje_socio / 100), 0)

respuesta: monto_socio
tipo: input

enunciado: "Si la sociedad obtuvo {utilidad} pesos de utilidad y un socio tiene el {porcentaje_socio}% de participación, ¿cuánto le corresponde?"

explicacion: |
  Se calcula el porcentaje de la utilidad total según la participación accionaria o societaria del socio.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["gestion", "diferencia", "SRL", "SA"]

variables:
  tipo_sociedad: uno_de(["SRL", "SA"])

respuesta: "socios"
tipo: completar

enunciado: "En una {tipo_sociedad}, la gestión suele estar más directamente vinculada a los socios o administradores designados, a diferencia de la S.A."

explicacion: |
  En la S.R.L., la gestión es más cercana a los socios, mientras que en la S.A. hay una separación clara entre propiedad (accionistas) y gestión (directores).
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["acciones", "identificacion", "SA"]

variables:
  instrumento: uno_de(["acciones", "cuotas"])

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Si el capital se divide en {instrumento}, la sociedad es una Sociedad Anónima."

explicacion: |
  La división del capital en acciones es la característica distintiva de las Sociedades Anónimas (S.A.).
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["riesgo", "unipersonal", "patrimonio"]

variables:
  activo: uno_de(["casa", "ahorros", "auto"])

respuesta: "todo su patrimonio"
tipo: completar

enunciado: "En el comercio unipersonal, el dueño responde con {activo} y el resto de su patrimonio por las deudas."

explicacion: |
  El comerciante unipersonal responde ilimitadamente con todo su patrimonio personal por las deudas del negocio.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["capital", "resta", "SRL"]

variables:
  total: random(200000, 1000000)
  aportado: random(50000, total - 10000)
  restante: total - aportado

respuesta: restante
tipo: input

enunciado: "Si el capital de una S.R.L. es {total} y un socio aportó {aportado}, ¿cuánto falta para completar el capital?"

explicacion: |
  Se resta el aporte realizado del capital total para determinar el monto restante a completar.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["separacion", "patrimonio", "proteccion"]

variables:
  beneficio: uno_de(["proteger", "ocultar"])

respuesta: "proteger"
tipo: completar

enunciado: "La separación patrimonial en sociedades como la S.R.L. sirve para ________ el patrimonio personal de los socios."

explicacion: |
  La separación patrimonial protege los bienes personales de los socios de las deudas de la empresa.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SA", "inversores", "escala"]

variables:
  cantidad: random(100, 1000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Para atraer a {cantidad} inversores que no participan en la gestión, se utiliza una ________."

explicacion: |
  Las S.A. permiten la captación de gran cantidad de inversores mediante la emisión de acciones, sin que estos participen en la gestión.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["socios", "minimo", "definicion"]

variables:
  minimo: 2

respuesta: minimo
tipo: input

enunciado: "¿Cuál es el número mínimo de socios para constituir una sociedad (excluyendo la sociedad unipersonal)?"

explicacion: |
  Por definición, una sociedad requiere dos o más personas. La sociedad unipersonal es una excepción legal específica.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["comparacion", "SRL", "SA", "estructura"]

variables:
  estructura: uno_de(["SRL", "SA"])

respuesta: "SRL"
tipo: completar

enunciado: "La ________ es más flexible y común para PYMES, mientras que la S.A. es más compleja y para grandes capitales."

explicacion: |
  La S.R.L. es más ágil y adecuada para pequeñas y medianas empresas, mientras que la S.A. está diseñada para grandes proyectos y capital abierto.
```

## Sección: coordinar-personas-y-recursos (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "coordinacion"
tipo: completar
respuestas_validas:
  - "coordinacion"

enunciado: "El proceso de integrar las actividades de diversos departamentos y asegurar que se dirijan hacia el cumplimiento de los objetivos organizacionales se denomina ___."

explicacion: |
  La coordinación es el proceso de asegurar que las actividades de los distintos miembros de una organización se realicen de manera armoniosa para alcanzar los objetivos comunes.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["recursos", "factores_produccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["capital", "recursos financieros y maquinaria"], ["humanos", "conocimientos y habilidades de las personas"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["capital", "humanos", "tecnología", "materias primas"]

enunciado: "En el contexto de la coordinación de recursos, ¿qué factor se refiere a {datos[escenario_idx][1]}?"

explicacion: |
  Las organizaciones deben coordinar diversos recursos. El tipo seleccionado en este ejercicio es {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["division_trabajo", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "La división del trabajo consiste en descomponer una tarea compleja en tareas más pequeñas y especializadas para aumentar la eficiencia."

explicacion: |
  Efectivamente, la especialización mediante la división del trabajo es una herramienta fundamental para optimizar la productividad en la coordinación de equipos.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta_orden: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las cuatro funciones administrativas del proceso de gestión en el orden lógico de su ciclo de ejecución:"

explicacion: |
  El proceso administrativo clásico sigue la secuencia: primero se establece lo que se quiere hacer (Planificación), luego se asignan recursos (Organización), se guía a las personas (Dirección) y finalmente se verifica el cumplimiento (Control).
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["control", "supervision"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["se detecta una desviación en la producción", "corregir la desviación"], ["se comparan los resultados con los objetivos", "verificar el desempeño"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["corregir la desviación", "verificar el desempeño", "asignar tareas", "contratar personal"]

enunciado: "Si en una empresa {casos[caso_idx][0]}, ¿cuál es la acción inmediata que corresponde a la función de control?"

explicacion: |
  El control implica comparar el desempeño real con los estándares planeados y, si hay diferencias, tomar medidas para corregirlas.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["gestion", "equipo"]

enunciado: "Una empresa de desarrollo de software tiene dos programadores (A y B) y dos tareas (X e Y). El programador A es más eficiente en la tarea X, mientras que el programador B es más eficiente en la tarea Y. Para maximizar la productividad total, la asignación óptima es que el programador ___ realice la tarea ___."

pasos:
  - "Identificar la especialización de cada recurso."
  - "Asignar cada tarea al recurso con mayor ventaja comparativa."

opciones_explicitas: ["A, X", "A, Y", "B, X", "B, Y"]
respuesta: "A, X"
tipo: "mc"

explicacion: |
  La coordinación eficiente busca la especialización. Si asignamos a cada persona la tarea donde su productividad es mayor, la producción total del equipo será máxima.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "decision"]

enunciado: "Si una empresa decide utilizar todo su presupuesto disponible para contratar más personal de producción en lugar de invertir en publicidad, el costo de oportunidad es el ___ que se dejó de obtener."

respuestas_validas:
  - "beneficio de la publicidad"
  - "incremento de ventas"
  - "crecimiento de marca"
respuesta: "beneficio de la publicidad"
tipo: "completar"

explicacion: |
  El costo de oportunidad no es solo el dinero gastado, sino el valor de la mejor alternativa sacrificada al tomar una decisión de asignación.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["rendimientos", "escala"]

enunciado: "Al duplicar la cantidad de trabajadores en una cocina pequeña sin aumentar el espacio físico ni el número de hornos, la producción total no se duplica, sino que aumenta de forma desproporcionada hacia abajo debido a la falta de coordinación y el exceso de gente en el mismo espacio. Este fenómeno se conoce como rendimientos decrecientes a escala."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La coordinación de recursos físicos es tan importante como la de recursos humanos. Si los recursos físicos (capital) no crecen al mismo ritmo que el trabajo, la eficiencia cae.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["flujo_trabajo", "procesos"]

enunciado: "Para coordinar la producción de una silla de madera, se deben seguir los pasos lógicos de transformación de recursos. Ordena los siguientes pasos desde la adquisición de insumos hasta el producto final:"

opciones_explicitas: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
respuesta_orden: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
tipo: ordenar

explicacion: |
  La coordinación de procesos requiere una secuencia lógica donde la salida de una etapa sea la entrada de la siguiente para evitar cuellos de botella.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "avanzado"
  tags: ["tecnologia", "productividad"]

enunciado: "Una fábrica decide implementar un software de gestión para coordinar mejor sus turnos de trabajo. Si esta implementación reduce el tiempo de inactividad de los trabajadores en un 15%, la productividad laboral total de la empresa ___."

respuestas_validas:
  - "aumentará"
  - "disminuirá"
  - "se mantendrá igual"
respuesta: "aumentará"
tipo: "completar"

explicacion: |
  La tecnología actúa como un multiplicador de la coordinación. Al reducir los tiempos muertos (desperdicio de recursos), se produce más con la misma cantidad de insumos y horas hombre.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "eficiencia"]

respuesta: "ineficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "ineficiencia", "especializacion", "productividad"]

enunciado: "Cuando un gestor asigna a un trabajador altamente capacitado a una tarea que requiere habilidades mínimas, ignorando el costo de oportunidad de su talento, está provocando una ___ en la organización."

explicacion: |
  La asignación ineficiente de recursos humanos (especialmente el talento especializado) genera un costo de oportunidad elevado, reduciendo la productividad global del equipo.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: falso
tipo: vf

enunciado: "En la gestión de equipos, la coordinación se limita exclusivamente a la supervisión directa y el control de horarios de los empleados."

explicacion: |
  Falso. La coordinación implica también la sincronización de flujos de información, la alineación de objetivos y la gestión de la interdependencia entre tareas y recursos.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["planificacion", "logistica"]

respuesta_orden: ["Identificar necesidades", "Asignar recursos", "Monitorear ejecución"]
tipo: ordenar
opciones_explicitas: ["Monitorear ejecución", "Identificar necesidades", "Asignar recursos"]

enunciado: "Para coordinar eficazmente un proyecto, se debe seguir un orden lógico de gestión de recursos. Ordene los siguientes pasos:"

pasos:
  - "Determinar qué materiales y personas se requieren para el objetivo."
  - "Distribuir los insumos y el personal a las tareas específicas."
  - "Verificar que el uso de los recursos coincida con lo planificado."

explicacion: |
  La planificación requiere primero el diagnóstico de necesidades, luego la distribución (asignación) y finalmente el control para corregir desviaciones.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["especializacion", "costos"]

respuesta: "exceso"
tipo: completar
respuestas_validas:
  - "exceso"

enunciado: "Si una empresa asigna demasiados trabajadores a una misma tarea de modo que se estorben entre sí, se produce un ___ de recursos humanos."

explicacion: |
  El exceso de recursos en una tarea específica genera rendimientos marginales decrecientes y aumenta los costos de coordinación.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["informacion", "asimetria"]

respuesta: 56
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un equipo de 10 personas debe completar 200 unidades. Si la capacidad actual es de 7 unidades por persona al día, pero la coordinación falla y la productividad cae un 20% por falta de comunicación, ¿cuántas unidades producirá el equipo en un día?"

pasos:
  - "Calcular la producción teórica: 10 personas * 7 unidades = 70 unidades."
  - "Aplicar la reducción por falta de coordinación: 70 * (1 - 0.20) = 56."

explicacion: |
  La falta de coordinación actúa como una fricción que reduce la productividad real por debajo de la capacidad teórica de los recursos individuales.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "basico"
  tags: ["coordinacion", "division_trabajo"]

respuesta: "coordinacion"
tipo: "completar"
respuestas_validas:
  - "coordinacion"

enunciado: "Mientras que la división del trabajo se encarga de fragmentar una tarea compleja en actividades simples, la ___ es el proceso de asegurar que estas tareas fragmentadas se integren de manera coherente para alcanzar el objetivo común."

explicacion: |
  La división del trabajo aumenta la eficiencia mediante la especialización, pero genera la necesidad de la coordinación para evitar que los esfuerzos individuales se desvíen o choquen entre sí.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["administracion", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un equipo de producción de automóviles", "gestionar la cadena de suministros"], ["una clínica médica", "coordinar turnos de especialistas"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["gestionar la cadena de suministros", "coordinar turnos de especialistas", "eliminar la necesidad de supervisión", "maximizar la autonomía individual sin control"]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, ¿cuál es la función principal de la coordinación de recursos?"

explicacion: |
  La coordinación busca sincronizar los recursos (humanos o materiales) con la demanda o el flujo de trabajo para evitar cuellos de botella.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["eficiencia", "eficacia"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un equipo logra alcanzar la meta de producción establecida (eficacia) pero utiliza el doble de la materia prima presupuestada debido a una mala organización de los recursos, se ha fallado en la eficiencia de la coordinación."

explicacion: |
  La eficacia se refiere al cumplimiento del objetivo, mientras que la eficiencia se refiere al uso óptimo de los recursos para alcanzar dicho objetivo.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "avanzado"
  tags: ["procesos", "organizacion"]

respuesta_orden: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]
tipo: "ordenar"
opciones_explicitas: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]

enunciado: "Para coordinar eficazmente un equipo de trabajo, un gestor debe seguir este orden lógico de organización de recursos:"

explicacion: |
  Primero se descompone el trabajo (identificación), luego se distribuyen los roles (asignación) y finalmente se verifica el cumplimiento (control).
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["estructura", "decision"]

variables:
  tipo_estructura: uno_de(["centralizada", "descentralizada"])

respuesta: tipo_estructura
tipo: "mc"
opciones_explicitas: ["centralizada", "descentralizada"]

enunciado: "En una estructura organizacional {tipo_estructura}, la coordinación se logra mediante la jerarquía y la toma de decisiones concentrada en la parte superior, a diferencia de la estructura opuesta."

explicacion: |
  La centralización busca uniformidad y control estricto, mientras que la descentralización busca agilidad y empoderamiento en los niveles operativos.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "productividad"]

variables:
  escenario: uno_de([["La empresa A tiene 10 operarios y cada uno produce 5 unidades/hora.", 50], ["La empresa B tiene 12 operarios y cada uno produce 4 unidades/hora.", 48], ["La empresa C tiene 8 operarios y cada uno produce 6 unidades/hora.", 48]])
  valor_total: escenario[0]
  resultado_esperado: escenario[1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa cuenta con {escenario[0]}, ¿cuál es la capacidad de producción total de unidades por hora?"

explicacion: |
  La capacidad total se calcula multiplicando el número de operarios por la productividad individual de cada uno.

respuesta: resultado_esperado
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["costos", "decision"]

variables:
  idx: uno_de([0, 1])
  casos: ["El costo de contratar un nuevo empleado es de $500 y el aumento en ingresos es de $600.", "El costo de contratar un nuevo empleado es de $700 y el aumento en ingresos es de $650."]
  valores: [verdadero, falso]

respuesta: valores[idx]
tipo: vf

enunciado: "Si el costo marginal de contratar a un nuevo trabajador es menor al ingreso marginal que este genera, la decisión de contratar es rentable. En el escenario actual: {casos[idx]}"

explicacion: |
  En economía, una acción es rentable si el beneficio marginal es mayor al costo marginal.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar

opciones_explicitas: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]
respuesta_orden: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]

enunciado: "Ordene cronológicamente las etapas lógicas para coordinar un equipo de trabajo en una línea de producción:"

explicacion: |
  Para una coordinación eficiente, primero se debe planificar, luego asignar los recursos necesarios, ejecutar la tarea y finalmente controlar los resultados.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

tipo: mc

opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual"]

enunciado: "Considerando la teoría de la división del trabajo de Adam Smith, si aplicamos la especialización en un taller, ¿qué ocurre con la eficiencia?"

respuesta: "Aumenta"

explicacion: |
  La especialización permite que los trabajadores se vuelvan más hábiles en tareas específicas, reduciendo tiempos de transición y aumentando la productividad.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["inventario", "recursos"]

variables:
  datos: [["El stock actual es de 150 unidades y el consumo diario es de 30 unidades. Faltan ___ días para agotar el stock.", "5"], ["El stock actual es de 200 unidades y el consumo diario es de 50 unidades. Faltan ___ días para agotar el stock.", "4"], ["El stock actual es de 100 unidades y el consumo diario de 10 unidades. Faltan ___ días para agotar el stock.", "10"]]
  idx: uno_de([0, 1, 2])

tipo: completar

respuestas_validas:
  - "5"
  - "4"
  - "10"
respuesta: datos[idx][1]

enunciado: "Si el stock actual es de {datos[idx][0]}, ¿cuántos días faltan para agotar el stock?"

explicacion: |
  El tiempo de agotamiento se calcula dividiendo el stock total disponible por la tasa de consumo diaria.
```

## Sección: presupuesto-administrativo (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"
  - "estimación de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar los recursos que entrarán (ingresos) y los que saldrán (gastos) de una organización.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes", "ingresos", "gastos"]

opciones_explicitas: ["Ingresos y Gastos", "Activos y Pasivos", "Oferta y Demanda"]
respuesta: "Ingresos y Gastos"
tipo: mc

enunciado: "Un presupuesto se compone fundamentalmente de dos tipos de flujos: los ___."

explicacion: |
  Los ingresos representan las entradas de dinero, mientras que los gastos representan las salidas de recursos necesarias para la operación.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["naturaleza", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El presupuesto tiene un carácter preventivo, ya que se elabora antes de que ocurran los hechos económicos."

explicacion: |
  Correcto. Al ser una herramienta de planificación, su objetivo es anticiparse a los eventos para tomar decisiones informadas.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestario"]

opciones_explicitas: ["Elaboración", "Ejecución", "Control"]
respuesta_orden: ["Elaboración", "Ejecución", "Control"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas principales del ciclo presupuestario:"

explicacion: |
  Primero se planifica (elaboración), luego se pone en marcha (ejecución) y finalmente se compara lo real con lo proyectado (control).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["desviaciones", "control"]

respuesta: "Desfavorable"
tipo: mc
opciones_explicitas: ["Favorable", "Desfavorable"]

enunciado: "Si los ingresos reales son menores a los presupuestados, la desviación se considera: ___"

pasos:
  - "Comparar el valor real obtenido con el valor estimado."
  - "Determinar si la diferencia impacta positivamente o negativamente en el saldo."

explicacion: |
  Una desviación es favorable cuando el resultado real mejora la posición financiera respecto al plan, y desfavorable cuando la empeora.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar la situación financiera de una organización mediante la cuantificación de sus ingresos y gastos esperados.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["calculo", "saldo"]

variables:
  datos: [["Ingresos: 5000, Gastos: 4200", "800"], ["Ingresos: 3000, Gastos: 3500", "-500"], ["Ingresos: 1000, Gastos: 1000", "0"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["800", "-500", "0", "1000"]

enunciado: "Si una empresa tiene un escenario de {datos[idx][0]}, ¿cuál es el saldo presupuestario resultante?"

explicacion: |
  El saldo se calcula restando los gastos a los ingresos: {datos[idx][0]}. El resultado es {datos[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso

tipo: vf

enunciado: "Un presupuesto es un documento de carácter histórico que solo registra los movimientos financieros que ya han ocurrido."

explicacion: |
  Falso. El presupuesto es una herramienta de planificación hacia el futuro (proyectiva), no un registro de hechos pasados (contabilidad histórica).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]
tipo: ordenar
opciones_explicitas: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]

enunciado: "Ordene los pasos lógicos para la gestión de un presupuesto administrativo:"

explicacion: |
  Primero se definen las metas, luego se proyecta lo que entrará de dinero, se distribuye para cubrir las necesidades y finalmente se controla que se cumpla lo planeado.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["calculo", "déficit"]

variables:
  escenario: [["Ingresos: 12000, Gastos: 15000", "3000"], ["Ingresos: 8000, Gastos: 8500", "500"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "En el escenario de {escenario[idx][0]}, ¿cuál es el monto del déficit (valor absoluto de la diferencia negativa)?"

pasos:
  - "Identificar ingresos y gastos según el escenario"
  - "Calcular la diferencia: Ingresos - Gastos"
  - "Obtener el valor absoluto del resultado"

explicacion: |
  El déficit ocurre cuando los gastos superan a los ingresos. En este caso, el déficit es de {escenario[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"
  - "estimación de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ realizada para un período determinado."

explicacion: |
  El presupuesto es una herramienta de planificación que proyecta los recursos que entrarán (ingresos) y los que saldrán (gastos) de una entidad.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["diferencia_conceptos"]

variables:
  es_proyectivo: verdadero

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la contabilidad, que registra hechos ya ocurridos, el presupuesto es una herramienta de carácter proyectivo."

explicacion: |
  Correcto. La contabilidad es histórica (mira hacia atrás), mientras que el presupuesto es una herramienta de planificación (mira hacia adelante).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["gestion", "errores"]

tipo: mc
opciones_explicitas: ["El presupuesto es una norma inamovible que no admite cambios ante contingencias", "El presupuesto debe ser flexible para adaptarse a cambios en el entorno", "Un presupuesto rígido es siempre el ideal para una empresa"]

respuesta: "El presupuesto debe ser flexible para adaptarse a cambios en el entorno"

enunciado: "Respecto a la flexibilidad presupuestaria, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  Un error común es creer que el presupuesto es una "camisa de fuerza". Para que sea útil, debe permitir ajustes (reprogramaciones) ante cambios significativos en el mercado o la economía.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes"]

respuesta_orden: ["Ingresos", "Gastos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Gastos", "Resultado"]

enunciado: "Ordene los elementos fundamentales que conforman la estructura básica de un presupuesto para determinar el saldo final:"

explicacion: |
  Para determinar la situación financiera proyectada, se deben listar primero los ingresos, luego los gastos y finalmente el resultado (superávit o déficit).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["confusiones_comunes"]

respuesta: verdadero
tipo: vf
enunciado: "Es posible que una organización presente un presupuesto de ingresos positivo pero experimente problemas de liquidez, si esas ventas presupuestadas son a crédito y el dinero aún no ingresó a caja."

explicacion: |
  Este es un error clásico. El presupuesto puede mostrar ingresos por ventas (devengado), pero si esas ventas son a crédito, el dinero no está disponible inmediatamente en caja (flujo de efectivo).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos_clave", "flujo_de_caja"]

respuesta: "flujo de caja"
tipo: "completar"
respuestas_validas:
  - "flujo de caja"
  - "cash flow"

enunciado: "Mientras que el presupuesto es una planificación de ingresos y gastos proyectados, el ___ es el registro de las entradas y salidas reales de efectivo en un periodo determinado."

explicacion: |
  El presupuesto es una herramienta de planificación (estimación), mientras que el flujo de caja (cash flow) se enfoca en la liquidez real y el movimiento efectivo de dinero.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["contabilidad", "planificacion"]

respuesta: verdadero
tipo: "vf"

enunciado: "El presupuesto se distingue de la contabilidad financiera principalmente porque el presupuesto tiene un carácter prospectivo (hacia el futuro), mientras que la contabilidad es histórica (registra lo ya ocurrido)."

explicacion: |
  Correcto. El presupuesto mira hacia adelante para la toma de decisiones, la contabilidad mira hacia atrás para rendir cuentas.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["control_presupuestal", "desviaciones"]

respuesta: "desfavorable"
tipo: "mc"
opciones_explicitas: ["favorable", "desfavorable"]

enunciado: "Si en el control presupuestario se detecta que un gasto real es mayor al gasto presupuestado, la desviación se considera: ___"

explicacion: |
  Un gasto mayor al previsto consume más recursos de los planeados, por lo tanto, es una desviación desfavorable.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestal"]

respuesta_orden: ["elaboración", "ejecución", "control", "evaluación"]
tipo: "ordenar"
opciones_explicitas: ["elaboración", "ejecución", "control", "evaluación"]

enunciado: "Ordene cronológicamente las etapas del ciclo presupuestario de una organización:"

explicacion: |
  El ciclo comienza con la planificación (elaboración), sigue con la puesta en marcha (ejecución), se monitorea el proceso (control) y finalmente se analizan los resultados (evaluación).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["base_cero", "incremental"]

variables:
  idx: uno_de([0, 1])
  # 0: Base Cero, 1: Incremental
  # datos: [ [nombre, caracteristica], [nombre, caracteristica] ]
  datos: [["Base Cero", "requiere justificar cada gasto desde cero"], ["Incremental", "se basa en los saldos del periodo anterior"]]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["requiere justificar cada gasto desde cero", "se basa en los saldos del periodo anterior", "no considera la inflación", "es de aplicación automática"]

enunciado: "Si una empresa decide aplicar el método de presupuesto de tipo {datos[idx][0]}, su característica principal es que: ___"

explicacion: |
  El presupuesto incremental simplemente ajusta los valores del año pasado, mientras que el Base Cero obliga a justificar cada partida como si fuera la primera vez.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["presupuesto", "ingresos", "gastos"]

variables:
  escenarios: [["Ventas: 5000, Gastos: 3200", "Superávit"], ["Ventas: 4500, Gastos: 4600", "Déficit"], ["Ventas: 3000, Gastos: 2500", "Superávit"]]
  caso: uno_de(escenarios)
  enunciado_caso: caso[0]
  resultado_correcto: caso[1]

tipo: mc
respuesta: resultado_correcto
opciones_explicitas: ["Superávit", "Déficit", "Equilibrio"]

enunciado: "Si una organización proyecta un escenario donde {enunciado_caso}, el resultado presupuestario es un ___."

explicacion: |
  El resultado se obtiene restando los gastos de los ingresos. Si el resultado es positivo, hay superávit; si es negativo, hay déficit.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definiciones", "teoria"]

tipo: vf
respuesta: verdadero

enunciado: "El presupuesto es una herramienta de planificación que permite estimar los recursos económicos necesarios para alcanzar objetivos en un periodo determinado."

explicacion: |
  Efectivamente, el presupuesto actúa como una hoja de ruta financiera para la gestión administrativa.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["ingresos", "egresos", "clasificacion"]

variables:
  item: uno_de([["Alquiler de oficina", "Gasto"], ["Venta de servicios", "Ingreso"], ["Pago de salarios", "Gasto"]])

tipo: completar
respuestas_validas:
  - "Ingreso"
  - "Gasto"
respuesta: item[1]

enunciado: "El concepto '{item[0]}' se clasifica contablemente como un ___."

explicacion: |
  Los ingresos representan entradas de recursos, mientras que los gastos representan salidas o consumos de recursos.
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "etapas"]

tipo: ordenar
opciones_explicitas: ["Planificación", "Ejecución", "Control y Evaluación"]
respuesta_orden: ["Planificación", "Ejecución", "Control y Evaluación"]

enunciado: "Ordene las etapas lógicas del proceso presupuestario en una organización:"

explicacion: |
  Primero se planifica (se estima), luego se ejecuta (se gasta/ingresa) y finalmente se controla (se compara lo real vs lo presupuestado).
```

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["desvio", "calculo", "analisis"]

variables:
  idx: uno_de([0, 1])
  presupuestados: [1000, 500]
  reales: [1200, 450]
  desvios_texto: ["200", "-50"]

respuesta: desvios_texto[idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si el presupuesto para un proyecto era de {presupuestados[idx]} y lo ejecutado fue {reales[idx]}, el desvío (real menos presupuestado) es de ___."

pasos:
  - "Identificar el valor presupuestado."
  - "Identificar el valor real ejecutado."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El desvío mide la diferencia entre lo que se planeó y lo que realmente ocurrió, permitiendo ajustar la gestión.
```

