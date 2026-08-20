# Examen jefe — Dominio de las corrientes y géneros

> Logro #209. Completaste el examen sobre corrientes, ética, publicidad y teoría de la comunicación. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: corrientes-de-la-comunicacion (25 preguntas)

```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

respuesta: "emisor"
tipo: completar
respuestas_validas: ["emisor", "receptor", "mensaje", "canal"]

enunciado: "En el modelo de transmisión de la comunicación, el sujeto que codifica y envía el mensaje se denomina ___."

explicacion: |
  El modelo de transmisión (o funcionalista) se centra en la eficacia del proceso desde un punto de vista técnico, donde el emisor transmite un mensaje a través de un canal hacia un receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "ideologia", "hegemonia"]

opciones_explicitas: ["Los medios son herramientas neutrales de información", "Los medios son instrumentos de poder e ideología", "Los medios no tienen impacto en la sociedad"]
respuesta: "Los medios son instrumentos de poder e ideología"
tipo: mc

enunciado: "Desde la perspectiva de la Teoría Crítica, ¿cuál es la función principal de los medios de comunicación?"

explicacion: |
  La Teoría Crítica sostiene que los medios no son neutrales, sino que funcionan como aparatos ideológicos que refuerzan las estructuras de poder y la hegemonía de los grupos dominantes.
```

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "avanzado"
  tags: ["audiencia", "recepcion", "interpretacion"]

respuesta: verdadero
tipo: vf

enunciado: "En los Estudios Culturales, se considera que la audiencia es un sujeto pasivo que solo recibe e incorpora los mensajes sin posibilidad de resistencia."

explicacion: |
  Falso. A diferencia del modelo de transmisión, los Estudios Culturales proponen que la audiencia es un agente activo que interpreta, negocia y resignifica los mensajes según su contexto cultural.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Modelo de Transmisión", "Teoría Crítica", "Estudios Culturales"]
respuesta: ["Modelo de Transmisión", "Teoría Crítica", "Estudios Culturales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de los enfoques teóricos de la comunicación, desde el más lineal/técnico hasta el más centrado en la recepción cultural."

explicacion: |
  La evolución parte del funcionalismo (transmisión), pasa por la crítica social (poder/ideología) y llega a los estudios culturales (decodificación activa del receptor).
```

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "intermedio"
  tags: ["decodificacion", "significado"]

variables:
  idx: uno_de([0, 1])
  escenario: [["lectura dominante", "lectura negociada"], ["lectura dominante", "lectura oposicional"]]

respuesta: escenario[idx][idx
tipo: mc
opciones_explicitas: ["lectura dominante", "lectura negociada", "lectura oposicional"]

enunciado: "Según los estudios de recepción, cuando una audiencia acepta el mensaje pero lo adapta a sus condiciones particulares, está realizando una ___."

explicacion: |
  La lectura negociada es un punto intermedio donde el receptor reconoce la legitimidad del mensaje pero lo adapta o matiza según su propia realidad.
```

```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

enunciado: "En el modelo de transmisión (Shannon y Weaver), si un emisor envía un mensaje a un receptor a través de un canal con ruido, el proceso se describe como una línea directa donde el objetivo es la eficacia de la transmisión. ¿Es este modelo considerado un modelo lineal?"

respuesta: verdadero
tipo: vf

explicacion: |
  El modelo de transmisión se centra en la eficacia del envío de información desde un origen a un destino, asumiendo una estructura lineal de comunicación.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "hegemonia", "teoria_critica"]

variables:
  escenario: uno_de([
    ["Un conglomerado mediático decide la agenda política de un país", "control"],
    ["Un programa de TV refuerza estereotipos de clase para mantener el status quo", "control"]
  ])

enunciado: "Desde la perspectiva de la Teoría Crítica, si ocurre que {escenario[0]}, el medio está ejerciendo una función de ___ sobre la sociedad."

pasos:
  - "Identificar la relación entre el medio y la estructura de poder."
  - "Determinar si el medio actúa como herramienta de dominación o de liberación."

respuestas_validas: ["control"]
respuesta: escenario[1
tipo: completar

explicacion: |
  La Teoría Crítica sostiene que los medios no son neutrales, sino instrumentos de poder que pueden perpetuar la hegemonía de ciertos grupos sociales.
```

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "intermedio"
  tags: ["audiencia", "decodificacion", "estudios_culturales"]

enunciado: "En los Estudios Culturales, se postula que la audiencia no es un receptor pasivo. Si un espectador ve un anuncio publicitario y decide ignorar su mensaje por considerarlo falso, está realizando una interpretación activa. ¿Cuál es la postura de los Estudios Culturales frente a la audiencia?"

opciones_explicitas: ["Pasiva y receptiva", "Activa e interpretativa", "Meramente técnica", "Inexistente"]
respuesta: "Activa e interpretativa"
tipo: mc

explicacion: |
  A diferencia del funcionalismo, los Estudios Culturales enfatizan que los receptores decodifican los mensajes según su contexto cultural y posición social.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "avanzado"
  tags: ["ordenar", "historia_comunicacion"]

enunciado: "Ordene cronológicamente las corrientes de la comunicación, desde la visión más centrada en el mensaje/efecto hacia la visión más centrada en el contexto/cultura."

opciones_explicitas: ["Funcionalismo (Transmisión)", "Teoría Crítica (Poder)", "Estudios Culturales (Interpretación)"]
respuesta: ["Funcionalismo (Transmisión)", "Teoría Crítica (Poder)", "Estudios Culturales (Interpretación)"]
tipo: ordenar

explicacion: |
  La evolución parte de la preocupación por la transmisión técnica (Funcionalismo), pasa por la crítica a la ideología mediática (Teoría Crítica) y llega a la complejidad de la recepción cultural (Estudios Culturales).
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "basico"
  tags: ["efecto", "teoria_critica"]

enunciado: "En la Teoría Crítica, se analiza cómo los medios pueden actuar como herramientas para mantener la estructura de poder establecida. ¿Es la comunicación un proceso neutral y sin implicancias políticas según esta corriente?"

respuesta: falso
tipo: vf

explicacion: |
  Para la Teoría Crítica, toda comunicación está atravesada por intereses de clase y estructuras de poder, por lo que la neutralidad es una ilusión.
```

```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

respuesta: "emisor"
tipo: "completar"
respuestas_validas: ["emisor"]

enunciado: "En el modelo de transmisión de la comunicación (funcionalismo), el sujeto que codifica y envía el mensaje se denomina ___."

explicacion: |
  El modelo de Shannon y Weaver (funcionalista) se centra en la eficacia de la transmisión, donde el emisor es el punto de origen del mensaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "hegemonia", "ideologia"]

opciones_explicitas: ["La audiencia es un receptor pasivo que acepta la ideología dominante", "Los medios son herramientas neutrales de información", "La comunicación es un proceso de negociación de significados"]
respuesta: "La audiencia es un receptor pasivo que acepta la ideología dominante"
tipo: "mc"

enunciado: "Desde la perspectiva de la Teoría Crítica (Escuela de Frankfurt), ¿cuál es una de las críticas principales hacia la función de los medios de comunicación masiva?"

explicacion: |
  La Teoría Crítica sostiene que los medios actúan como instrumentos de control social y reproducción ideológica, donde la audiencia es vista como un receptor pasivo de la cultura de masas.
```

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "avanzado"
  tags: ["audiencia", "decodificacion", "interpretacion"]

respuesta: falso
tipo: "vf"

enunciado: "Según los Estudios Culturales, la audiencia es un agente pasivo que decodifica los mensajes de forma unívoca y sin resistencia."

explicacion: |
  Falso. Los Estudios Culturales (como los de Stuart Hall) postulan que la audiencia tiene capacidad de agencia y puede realizar lecturas negociadas o de oposición.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "intermedio"
  tags: ["evolucion", "teoria"]

opciones_explicitas: ["Modelo de Transmisión (Pasivo)", "Teoría Crítica (Control)", "Estudios Culturales (Activo)"]
respuesta: ["Modelo de Transmisión (Pasivo)", "Teoría Crítica (Control)", "Estudios Culturales (Activo)"]
tipo: "ordenar"

enunciado: "Ordene las siguientes corrientes según la evolución del rol de la audiencia, desde la visión más pasiva a la más activa:"

explicacion: |
  La evolución histórica muestra un paso de la audiencia como receptora pasiva de estímulos (Transmisión), a ser víctima de la ideología (Crítica), hasta ser un sujeto que interpreta activamente (Estudios Culturales).
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["neutralidad", "poder", "ideologia"]

variables:
  escenario: uno_de([[true, "La neutralidad es posible"], [false, "La comunicación es un campo de poder"]])
  respuesta_correcta: uno_de([[false, "La neutralidad es posible"], [true, "La comunicación es un campo de poder"]])

respuesta: "La comunicación es un campo de poder"
tipo: "mc"
opciones_explicitas: ["La neutralidad es posible", "La comunicación es un campo de poder"]

enunciado: "Para la Teoría Crítica, la afirmación 'Los medios son canales neutrales de información' es {escenario[0]}."

explicacion: |
  La Teoría Crítica rechaza la neutralidad de los medios, argumentando que toda comunicación está atravesada por relaciones de poder e ideología.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["funcionalismo", "teoria_critica"]

respuesta: "poder"
tipo: "completar"
respuestas_validas: ["poder", "control", "hegemonia"]

enunciado: "Mientras que el funcionalismo se centra en la estabilidad y el equilibrio del sistema social, la Teoría Crítica pone el foco en las relaciones de ___ que los medios ejercen sobre la sociedad."

explicacion: |
  La Teoría Crítica (Escuela de Frankfurt) analiza cómo los medios de comunicación pueden servir como herramientas de dominación y control social, cuestionando el status quo.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "basico"
  tags: ["estudios_culturales", "audiencia"]

opciones_explicitas: ["Pasiva", "Receptora", "Activa", "Inocente"]
respuesta: "Activa"
tipo: "mc"

enunciado: "A diferencia del modelo de transmisión lineal, donde la audiencia es vista como un receptor pasivo, los Estudios Culturales proponen que la audiencia es:"

explicacion: |
  Los Estudios Culturales sostienen que los receptores no solo consumen mensajes, sino que los decodifican y reinterpretan según su contexto cultural, siendo agentes activos.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "basico"
  tags: ["modelo_lineal", "transmision"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el modelo de transmisión lineal (funcionalismo/comunicación de masas), se asume que el efecto del mensaje sobre el receptor es directo, inmediato y uniforme."

explicacion: |
  Este modelo, basado en la idea de "aguja hipodérmica", asume que el mensaje es una "bala" que impacta en una audiencia que no tiene capacidad de resistencia.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["comparativa", "teoria"]

opciones_explicitas: ["El medio como herramienta de equilibrio social", "El medio como instrumento de dominación", "El medio como espacio de negociación de sentidos"]
respuesta: ["El medio como herramienta de equilibrio social", "El medio como instrumento de dominación", "El medio como espacio de negociación de sentidos"]
tipo: "ordenar"

enunciado: "Ordene las siguientes visiones sobre la función de los medios, desde la que prioriza la estabilidad social hasta la que prioriza la interpretación del sujeto:"

explicacion: |
  1. Funcionalismo (Equilibrio), 2. Teoría Crítica (Dominación), 3. Estudios Culturales (Negociación).
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["estudios_culturales", "teoria_critica"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["estudios_culturales", "negociación"],
    ["teoria_critica", "dominación"]
  ]

respuesta: "escenario[idx][1]"
tipo: "mc"
opciones_explicitas: ["negociación", "dominación", "estabilidad", "transmisión"]

enunciado: "Si nos enfocamos en el estudio de cómo los grupos sociales reinterpretan los significados de los mensajes mediáticos, estamos bajo el paradigma de los {escenario[idx][0]}, donde el proceso es de ___."

explicacion: |
  Dependiendo del sorteo, la pregunta identifica si el enfoque es de negociación (Estudios Culturales) o de dominación (Teoría Crítica).
```

```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

variables:
  datos: [["Un locutor de radio emite una noticia", "emisor"], ["Un cartel publicitario en la calle", "mensaje"], ["Un televisor encendido en una plaza", "canal"]]
  idx: uno_de([0,1,2])

enunciado: "En el modelo de transmisión (funcionalista), si nos enfocamos en el elemento que codifica y envía la información, estamos hablando del {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["emisor", "mensaje", "canal"]

explicacion: |
  El modelo de transmisión de Shannon y Weaver se centra en la linealidad: un emisor envía un mensaje a través de un canal hacia un receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "ideologia", "teoria_critica"]

variables:
  datos: [["Un programa de noticias que omite protestas sociales", "manipulacion"], ["Un anuncio que promueve el consumismo extremo", "hegemonia"]]
  idx: uno_de([0,1])

enunciado: "Desde la Teoría Crítica, el uso de los medios para mantener estructuras de poder o imponer una visión del mundo se asocia con el concepto de {datos[idx][0]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["manipulacion", "hegemonia", "neutralidad"]

explicacion: |
  La Teoría Crítica analiza cómo los medios pueden funcionar como instrumentos de dominación ideológica y control social.
```

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "avanzado"
  tags: ["audiencia", "decodificacion", "subcultura"]

variables:
  datos: [["Un espectador que ve un comercial y lo usa para criticar al sistema", "lectura_negociada"], ["Un espectador que acepta el mensaje sin cuestionar", "lectura_dominante"]]
  idx: uno_de([0,1])

enunciado: "Según los Estudios Culturales, si un individuo recibe un mensaje pero lo reinterpreta según su propio contexto cultural, está realizando una ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["lectura_negociada", "lectura_dominante"]

explicacion: |
  A diferencia del funcionalismo, los Estudios Culturales sostienen que la audiencia no es pasiva, sino que decodifica los mensajes de forma activa y diversa.
```

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "basico"
  tags: ["historia", "teoria"]

variables:
  orden_teorias: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]

enunciado: "Ordena cronológicamente las corrientes de la comunicación, desde la más centrada en el proceso técnico hasta la más centrada en la interpretación social."

respuesta: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]
tipo: ordenar
opciones_explicitas: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]

explicacion: |
  La evolución parte de la visión técnica (transmisión), pasa por la visión sociopolítica (teoría crítica) y llega a la visión cultural/subjetiva (estudios culturales).
```

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "basico"
  tags: ["audiencia", "pasividad"]

enunciado: "En la perspectiva de los Estudios Culturales, se considera que la audiencia es un receptor pasivo que solo recibe estímulos sin capacidad de interpretación."

respuesta: falso
tipo: vf

explicacion: |
  Falso. Los Estudios Culturales proponen precisamente lo contrario: la audiencia es un agente activo que negocia significados.
```

## Sección: etica-y-responsabilidad-de-los-medios (25 preguntas)

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["etica", "verdad", "periodismo"]

respuesta: "veracidad"
tipo: completar
respuestas_validas: ["veracidad"]

enunciado: "El compromiso ético de los medios de comunicación con la exactitud y la fidelidad de los hechos se denomina ___."

explicacion: |
  La veracidad no implica la verdad absoluta (que es metafísica), sino el deber de contrastar la información y presentarla de la manera más fiel posible a los hechos.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["responsabilidad", "social", "etica"]

variables:
  es_falso: uno_de([verdadero, falso])

respuesta: es_falso
tipo: completar
enunciado: "La responsabilidad social implica que los medios tienen el deber de informar de manera objetiva, incluso si esto contraviene sus intereses económicos o políticos."

explicacion: |
  La ética periodística exige priorizar el derecho a la información de la sociedad sobre los intereses particulares del medio.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["verificacion", "fuentes", "proceso"]

opciones_explicitas: ["Contraste de fuentes", "Publicación de la noticia", "Recolección de datos"]

respuesta: ["Recolección de datos", "Contraste de fuentes", "Publicación de la noticia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos esenciales para garantizar la integridad de una noticia:"

explicacion: |
  Un proceso ético requiere primero obtener la información, luego verificarla con múltiples fuentes y finalmente comunicarla.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["sesgo", "imparcialidad", "etica"]

opciones_explicitas: ["Imparcialidad", "Sensacionalismo", "Opinión"]

respuesta: "Imparcialidad"
tipo: mc

enunciado: "Cuando un medio presenta los hechos sin inclinaciones ideológicas que distorsionen la realidad, está actuando bajo el principio de:"

explicacion: |
  La imparcialidad busca que el espectador reciba todos los ángulos de una noticia para que pueda formar su propio criterio.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["derechos", "publico", "etica"]

variables:
  idx: uno_de([0, 1])
  caso: datos[idx][0]
  respuesta: datos[idx][1]

enunciado: "En el escenario {caso}, ¿se está cumpliendo con la responsabilidad social hacia el público?"

pasos:
  - "Evaluar si la información es de interés público o solo curiosidad morbosa."
  - "Determinar si la publicación vulnera la ética o el derecho a la intimidad."

respuesta: respuesta
tipo: mc
opciones_explicitas: ["Sí", "No"]
datos: [["donde un medio publica información privada sin interés público", "No"], ["donde un medio informa sobre un evento de interés general", "Sí"]]

explicacion: |
  La responsabilidad social se equilibra con el derecho a la intimidad; informar sobre la vida privada sin un interés público legítimo es una falta ética.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "verificacion", "responsabilidad"]

respuesta: "falso"
tipo: "vf"

enunciado: "Un medio de comunicación tiene la obligación ética de publicar una noticia de alto impacto inmediatamente después de recibir un rumor de una fuente anónima, incluso si no se ha podido verificar la veracidad de la información, para cumplir con el derecho a la información del público."

explicacion: |
  La ética periodística exige la verificación de la información antes de su difusión. Publicar rumores sin confirmar vulnera el principio de veracidad y puede causar daños irreparables, priorizando el sensacionalismo sobre la responsabilidad social.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["proceso", "verificacion", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un video de un accidente", "un post de una red social"], ["un documento oficial filtrado", "un mensaje de WhatsApp de un desconocido"]]
  pasos_correctos: [["Verificar la autenticidad del material", "Contrastar con otras fuentes", "Evaluar el interés público"], ["Confirmar la identidad del emisor", "Buscar evidencia física o documental", "Consultar a las partes involucradas"]]

respuesta: escenario_idx
tipo: "ordenar"
opciones_explicitas: [["Verificar la autenticidad del material", "Contrastar con otras fuentes", "Evaluar el interés público"], ["Confirmar la identidad del emisor", "Buscar evidencia física o documental", "Consultar a las partes involucradas"]]

enunciado: "Para garantizar la responsabilidad editorial ante un caso de información sensible, el periodista debe seguir el orden correcto de actuación según el tipo de material recibido: {datos[escenario_idx][0]}."

pasos:
  - "Paso 1: Análisis inicial del origen."
  - "Paso 2: Contraste de la información."
  - "Paso 3: Evaluación de la relevancia y daño."

explicacion: |
  La responsabilidad de los medios implica un proceso sistemático: primero se valida la integridad del dato (no es un montaje), luego se busca la triangulación de fuentes y finalmente se decide si la publicación es de interés público y no meramente morbosa.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["derechos", "etica", "rectificacion"]

respuesta: "derecho de réplica"
tipo: "completar"
respuestas_validas: ["derecho de réplica", "rectificación"]

enunciado: "Cuando un medio de comunicación publica información errónea que afecta la reputación de una persona o institución, la obligación ética y legal de permitir que el afectado se defienda en el mismo espacio se denomina ___."

explicacion: |
  El derecho de réplica es un principio fundamental de la ética comunicacional que busca equilibrar la libertad de expresión con el derecho al honor, permitiendo que los afectados corrijan la información difundida.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["conflictos", "patrocinio", "independencia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un medio publica una crítica negativa sobre una empresa que es su mayor anunciante.", "Un periodista recibe un viaje pagado por un político para cubrir una cumbre."], ["Un medio oculta información sobre un desastre ambiental para proteger a un inversor.", "Un medio utiliza noticias falsas para beneficiar a un partido político que financia su canal."]]

respuesta: caso_idx
tipo: "mc"
opciones_explicitas: ["Caso A", "Caso B"]

enunciado: "Analice el siguiente escenario de conflicto de intereses: {casos[caso_idx][0]}. ¿Cuál es la acción que representa una falta directa a la independencia editorial?"

explicacion: |
  La independencia editorial es la capacidad de informar sin presiones externas. Tanto la influencia económica de los anunciantes como los incentivos personales (viajes, regalos) comprometen la objetividad y la responsabilidad hacia el público.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["principios", "veracidad", "contexto"]

respuesta: "veracidad"
tipo: "mc"
opciones_explicitas: ["veracidad", "inmediatez", "sensacionalismo", "opinión"]

enunciado: "La obligación de presentar los hechos tal como ocurrieron, proporcionando el contexto necesario para que el público comprenda la realidad sin distorsiones, se conoce como principio de:"

explicacion: |
  La veracidad no es solo decir la verdad, sino no omitir datos esenciales que cambien el sentido de la noticia. La inmediatez es una característica técnica, pero la veracidad es un imperativo ético.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["etica", "sesgo", "verdad"]

tipo: mc
opciones_explicitas: ["Presentar solo hechos que apoyen una postura", "Verificar la identidad de todas las fuentes", "Publicar información sin contrastar para ser el primero", "Ignorar la opinión de expertos para ser neutral"]

enunciado: "Un error ético frecuente en el periodismo es el sesgo de confirmación. Este ocurre cuando un medio..."

respuesta: "Presentar solo hechos que apoyen una postura"

explicacion: |
  El sesgo de confirmación implica seleccionar información que refuerce una creencia previa, omitiendo datos que la contradigan, lo cual vulnera el deber de informar con veracidad y objetividad.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["inmediatez", "veracidad", "responsabilidad"]

tipo: vf

enunciado: "La obligación de ser el primero en publicar una noticia (inmediatez) es superior a la obligación de verificar la veracidad de la misma en el ejercicio del periodismo ético."

respuesta: falso

explicacion: |
  La ética periodística establece que la veracidad es un pilar fundamental. Priorizar la velocidad sobre la verificación puede propagar noticias falsas (fake news) y dañar la credibilidad del medio y la sociedad.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["fuentes", "verificacion", "procedimiento"]

variables:
  pasos_ordenar: [
    ["Recibir la información o pista", "Búsqueda de evidencia y contraste"],
    ["Contrastar con al menos dos fuentes independientes", "Publicar la noticia"],
    ["Verificar la credibilidad de la fuente original", "Redactar el informe final"]
  ]
  idx: uno_de([0,1,2])

tipo: ordenar
opciones_explicitas: ["Recibir la información o pista", "Verificar la credibilidad de la fuente original", "Búsqueda de evidencia y contraste", "Contrastar con al menos dos fuentes independientes", "Redactar el informe final", "Publicar la noticia"]

respuesta: ["Recibir la información o pista", "Verificar la credibilidad de la fuente original", "Búsqueda de evidencia y contraste", "Contrastar con al menos dos fuentes independientes", "Redactar el informe final", "Publicar la noticia"]

enunciado: "Para cumplir con la responsabilidad de informar con verdad, un periodista debe seguir un proceso riguroso de verificación. Ordene los pasos lógicos de este proceso:"

explicacion: |
  Un proceso ético requiere primero identificar la fuente, luego buscar evidencia para respaldar lo dicho, contrastar con otras visiones, redactar con precisión y, finalmente, publicar.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["opinion", "informacion", "confusion"]

tipo: completar
respuestas_validas: ["opinión", "hecho"]

enunciado: "Una confusión común en los medios es mezclar el ___ (dato objetivo y verificable) con la ___ (juicio de valor del periodista), lo cual desinforma al público sobre la naturaleza de la noticia."

respuesta: "hecho"

explicacion: |
  La distinción clara entre información (hechos) y opinión (interpretaciones) es vital para que el receptor pueda formar su propio criterio sin ser manipulado por el juicio del emisor.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["rectificacion", "derecho", "etica"]

tipo: mc
opciones_explicitas: ["Es una opción opcional si la noticia ya fue leída", "Es una obligación ética y legal cuando hay errores", "Solo aplica si la persona afectada es una figura pública", "Solo se aplica si el error fue intencionado"]

enunciado: "Cuando un medio de comunicación comete un error en la información publicada, su responsabilidad ética le exige ejercer el derecho de..."

respuesta: "Es una obligación ética y legal cuando hay errores"

explicacion: |
  La responsabilidad social de los medios implica corregir errores de manera visible y con la misma relevancia que la noticia original, garantizando el derecho de la audiencia a la información veraz.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "veracidad", "objetividad"]

respuesta: "veracidad"
tipo: "completar"
respuestas_validas: ["veracidad"]

enunciado: "Mientras que la objetividad se refiere al método de recolección de datos sin sesgos, la ________ se refiere al compromiso ético de presentar hechos comprobables y honestos."

explicacion: |
  La veracidad implica una obligación moral de contrastar la información para que lo relatado coincida con la realidad, mientras que la objetividad es un ideal metodológico de neutralidad.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["informacion", "opinion", "distincion"]

variables:
  escenario: uno_de([
    ["Un reporte sobre el clima", "informacion"],
    ["Un editorial sobre política", "opinion"],
    ["Una crónica de un accidente", "informacion"]
  ])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["informacion", "opinion"]

enunciado: "En el contexto del periodismo ético, un texto que presenta hechos verificables sin la carga subjetiva del autor se distingue de la ________ porque su fin es informar, no persuadir."

explicacion: |
  La información busca transmitir datos objetivos, mientras que la opinión es la interpretación subjetiva de esos datos.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["libertad_de_expresion", "responsabilidad_social"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿La responsabilidad social de los medios implica que la libertad de expresión no es un derecho absoluto, ya que debe coexistir con el derecho de la sociedad a recibir información veraz y no dañina?"

explicacion: |
  La libertad de expresión permite la libre circulación de ideas, pero la responsabilidad social impone límites éticos para evitar la difamación o la desinformación deliberada.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["fake_news", "error"]

variables:
  caso: uno_de([
    ["Dato erróneo por descuido en la fuente", "error"],
    ["Noticia falsa creada para manipular", "fake_news"]
  ])

respuesta: caso[1
tipo: "mc"
opciones_explicitas: ["error", "fake_news"]

enunciado: "Si un medio publica una noticia falsa con la intención deliberada de manipular la opinión pública, esto se clasifica como ________, lo cual se distingue del ________ que ocurre por descuido o falta de verificación."

explicacion: |
  La intención (dolo) es el factor determinante: la desinformación (fake news) busca engañar, mientras que el error es una falla en el proceso de verificación.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["verificacion", "proceso", "etica"]

respuesta: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación responsable"]
tipo: "ordenar"
opciones_explicitas: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación responsable"]

enunciado: "Para cumplir con el deber de veracidad, un periodista debe seguir un orden lógico de rigor informativo. Ordena los pasos de la gestión ética de la información:"

explicacion: |
  El proceso comienza con la diversidad de fuentes, sigue con la comprobación de datos, la puesta en contexto para evitar la manipulación y finaliza con la publicación consciente.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "veracidad", "responsabilidad"]

variables:
  datos: [["Se recibe un video de un supuesto acto de corrupción sin verificar la fuente", "publicar sin verificar"], ["Se tiene una noticia sobre un crimen que aún está en investigación", "esperar confirmación oficial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["publicar sin verificar", "esperar confirmación oficial"]

enunciado: "Un medio de comunicación recibe información sensible de una fuente anónima. Según la ética periodística, ante el escenario: {datos[idx][0]}, la acción responsable es ___."

explicacion: |
  La responsabilidad editorial exige verificar la veracidad de los hechos antes de su difusión para evitar la propagación de noticias falsas o daños irreparables.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["objetividad", "sesgo"]

respuesta: falso
tipo: vf

enunciado: "La objetividad absoluta es un ideal que el periodismo busca alcanzar, pero la ética profesional exige que el periodista reconozca sus propios sesgos para minimizar su impacto en la información."

explicacion: |
  Aunque la objetividad total es imposible debido a la subjetividad humana, la ética reside en la honestidad, el rigor y el contraste de fuentes para acercarse a la verdad.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["proceso", "verificacion"]

respuesta: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación"]
tipo: ordenar

opciones_explicitas: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación"]

enunciado: "Para cumplir con el deber de informar con veracidad, un medio debe seguir un proceso riguroso. Ordene los siguientes pasos desde el inicio hasta la publicación de una noticia de alto impacto:"

explicacion: |
  El proceso ético requiere primero contrastar la información con diversas fuentes, verificar que los datos sean correctos, dar el contexto necesario para no desinformar y, finalmente, publicar.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["derechos", "etica"]

variables:
  datos: [["Un medio publica una acusación falsa contra un ciudadano", "otorgar el derecho a réplica"], ["Un medio comete un error en un titular", "rectificar el error"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["otorgar el derecho a réplica", "rectificar el error"]

enunciado: "Ante un error cometido por un medio o una acusación que afecta la reputación de un tercero, la obligación ética y legal es ___."

explicacion: |
  El derecho a la réplica y el deber de rectificación son pilares de la ética comunicacional para garantizar la dignidad de las personas frente a la información pública.
```

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["independencia", "etica"]

variables:
  datos: [["Un gran anunciante pide censurar una noticia negativa", "mantener la independencia editorial"], ["Un medio recibe un soborno para publicar una noticia falsa", "rechazar el beneficio económico"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["mantener la independencia editorial", "rechazar el beneficio económico"]

enunciado: "Si un medio se enfrenta a la situación: {datos[idx][0]}, su compromiso con la responsabilidad social le obliga a ___."

explicacion: |
  La independencia editorial es fundamental para que el medio sirva al interés público y no a intereses económicos particulares que distorsionen la realidad.
```

## Sección: generos-periodisticos (25 preguntas)

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "definicion"]

respuesta: "objetividad"
tipo: completar
respuestas_validas: ["objetividad", "imparcialidad"]

enunciado: "El género de la noticia se caracteriza por la búsqueda de la ___ para relatar hechos de actualidad de la manera más fiel posible."

explicacion: |
  La noticia es un género informativo que busca relatar hechos de manera objetiva, respondiendo a las preguntas básicas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["opinion", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un artículo de opinión tiene como objetivo principal informar sobre un hecho sin emitir juicios de valor?"

explicacion: |
  Falso. El artículo de opinión es un género de opinión donde el autor expresa su punto de vista, interpretación y juicios subjetivos sobre un tema.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Relato cronológico de un evento", "Diálogo entre un entrevistador y un entrevistado", "Análisis profundo de un tema de actualidad"]

enunciado: "Dependiendo del enfoque, la entrevista puede ser una herramienta para obtener ___ de una persona relevante."

datos:
  - ["Relato cronológico de un evento", "Relato cronológico de un evento"]
  - ["Diálogo entre un entrevistador y un entrevistado", "Diálogo entre un entrevistador y un entrevistado"]

explicacion: |
  La entrevista es un género basado en el diálogo con el fin de obtener información, opiniones o testimonios de un personaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "caracteristicas"]

respuesta: ["Relato de hechos", "Interpretación subjetiva", "Estilo literario"]
tipo: ordenar

opciones_explicitas: ["Relato de hechos", "Interpretación subjetiva", "Estilo literario"]

enunciado: "Ordene los elementos que caracterizan a la crónica periodística, desde su base informativa hasta su forma de expresión:"

explicacion: |
  La crónica es un género híbrido que parte de un hecho real (relato), pero incluye la mirada del cronista (interpretación) y utiliza recursos narrativos (estilo literario).
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["clasificacion"]

respuesta: "informativo"
tipo: mc
opciones_explicitas: ["informativo", "opinión", "híbrido"]

enunciado: "Si un periodista escribe una noticia, está trabajando principalmente dentro del género ___."

explicacion: |
  Los géneros se dividen en informativos (noticia, reportaje), de opinión (editorial, columna) e interpretativos o híbridos (crónica).
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

enunciado: "Un periodista redacta un texto que relata un hecho reciente de manera objetiva, respondiendo a las preguntas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?. Este texto se clasifica como una ___."

respuestas_validas: ["noticia"]

respuesta: "noticia"
tipo: completar

explicacion: |
  La noticia es el género informativo por excelencia. Su objetivo es transmitir un hecho de interés público de la manera más neutra y directa posible, sin incluir la opinión del autor.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un reporte seco sobre un accidente vial.", "crónica"],
    ["Un relato detallado con descripciones sensoriales sobre un viaje por la Patagonia.", "crónica"]
  ]

enunciado: "Analiza el siguiente ejemplo: {escenarios[escenario_idx][0]}. ¿A qué género pertenece este fragmento?"

opciones_explicitas: ["noticia", "crónica", "entrevista", "artículo de opinión"]

respuesta: escenarios[escenario_idx][1
tipo: mc

explicacion: |
  La crónica combina la información objetiva con la visión subjetiva y el estilo literario del cronista. A diferencia de la noticia, permite descripciones más ricas y un orden temporal más flexible para crear una atmósfera.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

enunciado: "En una entrevista periodística, el texto se construye principalmente a través del diálogo entre un entrevistador y un entrevistado. ¿Es verdadero que el objetivo principal es obtener información o testimonios de una personalidad?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La entrevista es un género que utiliza la pregunta y la respuesta para profundizar en la vida, opiniones o conocimientos de un sujeto relevante.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "orden"]

enunciado: "Para realizar una entrevista periodística profesional, se deben seguir ciertos pasos. Ordena las siguientes etapas desde el inicio hasta el final del proceso:"

opciones_explicitas: ["Investigación del personaje", "Preparación de preguntas", "Realización del encuentro", "Transcripción y edición"]

respuesta: ["Investigación del personaje", "Preparación de preguntas", "Realización del encuentro", "Transcripción y edición"]
tipo: ordenar

explicacion: |
  El proceso comienza con la investigación para conocer al sujeto, luego se diseñan las preguntas, se ejecuta la entrevista y finalmente se procesa el material para su publicación.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "subjetividad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un columnista analiza las causas de la inflación desde su punto de vista personal.", "opinion"],
    ["Un editorial del diario defiende una postura política sobre una nueva ley.", "opinion"]
  ]

enunciado: "Lee el caso: {casos[caso_idx][0]}. El texto presentado es un ejemplo de género de ___."

opciones_explicitas: ["noticia", "crónica", "entrevista", "opinión"]

respuesta: "opinión"
tipo: mc

explicacion: |
  Los géneros de opinión (como la columna o el editorial) tienen como finalidad interpretar, analizar y valorar un hecho, expresando el juicio crítico del autor o de un medio de comunicación.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

respuesta: "objetiva"
tipo: completar
respuestas_validas: ["objetiva", "subjetiva"]

enunciado: "A diferencia de la crónica o el artículo de opinión, la noticia busca ser una narración ___ de los hechos."

explicacion: |
  La noticia tiene como objetivo principal informar sobre un hecho reciente de la manera más imparcial posible, evitando juicios de valor o interpretaciones personales del periodista.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  es_cronica_subjetiva: verdadero

respuesta: es_cronica_subjetiva
tipo: completar
enunciado: "¿Es la crónica un género que permite al periodista utilizar recursos literarios y aportar su visión personal del evento?"

explicacion: |
  Correcto. Aunque la crónica parte de un hecho real, su estilo es mucho más narrativo y subjetivo que el de la noticia, permitiendo al autor tejer una interpretación del ambiente y los sucesos.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "estructura"]

variables:
  idx: uno_de([0,1,2])
  escenario: [
    ["pregunta", "respuesta", "introducción"],
    ["introducción", "pregunta", "cierre"],
    ["cierre", "introducción", "pregunta"]
  ]

respuesta: escenario[idx][0
tipo: mc
opciones_explicitas: ["pregunta", "respuesta", "introducción"]

enunciado: "En una entrevista periodística, el orden lógico de los elementos suele comenzar con una ___ para contextualizar al personaje."

explicacion: |
  La estructura clásica de una entrevista requiere primero presentar al entrevistado y el motivo del encuentro (introducción) antes de pasar al cuerpo de preguntas y respuestas.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "editorial"]

respuesta: "editorial"
tipo: completar
respuestas_validas: ["editorial", "columna"]

enunciado: "Cuando un texto de opinión no lleva firma y representa la postura oficial del medio de comunicación, se denomina ___."

explicacion: |
  El editorial es un género de opinión institucional; no representa la visión de un periodista particular, sino la ideología del periódico o medio que lo publica.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["cronica", "noticia", "orden"]

respuesta: ["noticia", "crónica", "artículo de opinión"]
tipo: ordenar
opciones_explicitas: ["noticia", "crónica", "artículo de opinión"]

enunciado: "Ordene estos géneros de menor a mayor grado de subjetividad (desde el más objetivo al más interpretativo):"

explicacion: |
  La escala de objetividad parte de la noticia (hecho puro), pasa por la crónica (hecho con estilo narrativo/personal) y llega al artículo de opinión (juicio de valor explícito).
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetividad"]

respuesta: "objetividad"
tipo: completar
respuestas_validas: ["objetividad", "imparcialidad", "neutralidad"]

enunciado: "A diferencia de la columna de opinión, la noticia busca transmitir los hechos con ___ para informar de manera directa."

explicacion: |
  La noticia es un género informativo cuyo objetivo es relatar un hecho reciente de la manera más neutra posible, evitando juicios de valor o interpretaciones personales.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "estilo"]

variables:
  es_cronica: true

opciones_explicitas: ["Falso", "Verdadero"]
respuesta: "Verdadero"
tipo: completar
enunciado: "La crónica se distingue de la noticia porque, además de informar, permite al periodista utilizar recursos literarios y una estructura narrativa más subjetiva."

explicacion: |
  Mientras la noticia es puramente expositiva, la crónica es un género híbrido que combina la información con la interpretación y el estilo narrativo del autor.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "diálogo"]

opciones_explicitas: ["Relatar un hecho cronológicamente", "Obtener información o testimonios mediante el diálogo", "Analizar un tema desde la opinión del editor"]
respuesta: "Obtener información o testimonios mediante el diálogo"
tipo: mc

enunciado: "¿Cuál es el elemento distintivo que define a la entrevista como género periodístico?"

explicacion: |
  La entrevista se basa en la interacción directa entre un entrevistador y un entrevistado para profundizar en un tema o conocer la personalidad de alguien.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["opinion", "editorial"]

variables:
  caso: uno_de([0, 1])

enunciado: "Si el texto de opinión no va firmado por un periodista, sino que representa la postura institucional del medio, estamos ante un ___."

pasos:
  - "Identificar si el texto es de autor o institucional"

respuestas_validas: ["editorial"]
tipo: completar

explicacion: |
  El editorial es el género de opinión por excelencia que refleja el pensamiento del medio de comunicación, a diferencia de la columna o el artículo de opinión que son de autoría personal.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["clasificacion", "subjetividad"]

opciones_explicitas: ["Noticia, Crónica, Entrevista, Editorial"]
respuesta: ["Noticia", "Crónica", "Entrevista", "Editorial"]
tipo: ordenar

enunciado: "Ordena los siguientes géneros de menor a mayor grado de subjetividad (desde el más objetivo al más interpretativo):"

explicacion: |
  La noticia es puramente objetiva (hechos), la crónica añade estilo narrativo, la entrevista permite la visión del otro y el editorial es la expresión máxima de la opinión institucional.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "cronica", "entrevista", "opinion"]

variables:
  datos: [["Un texto que relata un hecho reciente de forma objetiva, respondiendo al qué, quién, cuándo y dónde.", "noticia"], ["Un texto que narra un evento con detalles temporales y matices subjetivos del autor.", "cronica"], ["Un texto basado en el diálogo directo con un protagonista.", "entrevista"], ["Un texto donde el autor analiza y juzga un hecho desde su punto de vista.", "opinion"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si un periodista escribe un texto que consiste en {datos[idx][0]}, estamos ante una {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["noticia", "cronica", "entrevista", "opinion"]

explicacion: |
  El texto descrito corresponde a la definición de la opción seleccionada.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["objetividad", "opinion"]

enunciado: "En un artículo de opinión, el periodista debe evitar expresar su punto de vista personal para mantener la neutralidad absoluta."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El género de opinión tiene como finalidad principal la expresión de juicios de valor y la interpretación subjetiva de la realidad por parte del autor.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["entrevista", "dialogo"]

variables:
  datos: [["diálogo", "entrevista"], ["relato", "noticia"], ["análisis", "editorial"]]
  idx: uno_de([0, 1, 2])

enunciado: "La característica fundamental que define a la ___ es la presencia de un ___ entre el periodista y el entrevistado."

respuestas_validas: ["diálogo", "entrevista"]
respuesta: "diálogo"
tipo: completar

explicacion: |
  La entrevista se basa en la interacción y el intercambio de preguntas y respuestas (diálogo).
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["noticia", "estructura", "piramide_invertida"]

enunciado: "Ordena los elementos de una noticia según la estructura de la pirámide invertida, de la información más importante a la menos relevante:"

opciones_explicitas: ["Copete/Lead", "Cuerpo de la noticia", "Contexto/Detalles secundarios"]
respuesta: ["Copete/Lead", "Cuerpo de la noticia", "Contexto/Detalles secundarios"]
tipo: ordenar

explicacion: |
  La pirámide invertida jerarquiza la información comenzando por lo más esencial (Lead) y terminando con los detalles menos relevantes.
```

```
metadata:
  materia: "comunicacion"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "subjetividad"]

variables:
  datos: [["Un periodista narra un viaje por la Patagonia, describiendo sensaciones, colores y el paso del tiempo con un estilo literario.", "cronica"], ["Un reporte seco sobre el cierre de una fábrica en la ciudad.", "noticia"], ["Una columna sobre la importancia de la educación en la era digital.", "opinion"]]
  idx: uno_de([0, 1, 2])

enunciado: "El texto que describe {datos[idx][0]} es una ___."

respuesta: "{datos[idx][1]}"
tipo: mc
opciones_explicitas: ["noticia", "cronica", "opinion"]

explicacion: |
  La crónica combina la información de la noticia con recursos literarios y la visión subjetiva del cronista.
```

## Sección: publicidad-y-persuasion (25 preguntas)

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["definicion", "persuasion"]

respuesta: "persuasión"
tipo: completar
respuestas_validas: ["persuasión", "persuasion"]

enunciado: "La capacidad de un mensaje para modificar la actitud, la creencia o el comportamiento de un receptor mediante la comunicación se denomina ___."

explicacion: |
  La persuasión es el proceso de comunicación mediante el cual se intenta convencer a un individuo o grupo de adoptar una idea, actitud o conducta específica.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["modelo_aida", "secuencia"]

variables:
  secuencia_correcta: ["Atención", "Interés", "Deseo", "Acción"]

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar

enunciado: "Ordena las etapas del modelo AIDA, una de las estructuras más clásicas en la publicidad, desde el primer contacto con el consumidor hasta la conversión:"

explicacion: |
  El modelo AIDA describe las etapas por las que pasa un consumidor: captar la **Atención**, despertar el **Interés**, generar el **Deseo** de adquisición y finalmente provocar la **Acción** (compra).
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["publicidad", "propaganda"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la 'propaganda' tiene como objetivo principal la venta de bienes o servicios comerciales?"

explicacion: |
  Falso. Mientras que la publicidad busca promover el consumo de productos o servicios, la propaganda busca difundir ideas, doctrinas o valores para influir en la opinión política o social.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["tecnicas", "autoridad"]

variables:
  caso: [
    ["Un anuncio de pasta dental que utiliza a un dentista con bata blanca para validar el producto.", "autoridad"],
    ["Un anuncio de refresco que muestra a personas felices en una fiesta.", "emocional"],
    ["Un anuncio de un coche que destaca que es el más vendido del mundo.", "lógica"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["autoridad", "emocional", "lógica"]

enunciado: "Si un anuncio utiliza la figura de un experto (como un médico o un científico) para validar las propiedades de un producto, ¿qué técnica de persuasión está utilizando?"

explicacion: |
  La técnica de autoridad utiliza la credibilidad de una persona o institución para transferir confianza al producto o mensaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["sesgos", "escasez"]

variables:
  escenario: [
    ["'¡Solo quedan 2 unidades en stock!'", "escasez"],
    ["'¡Aprovecha esta oferta por tiempo limitado!'", "escasez"],
    ["'El producto más recomendado por expertos.'", "autoridad"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["escasez", "autoridad", "reciprocidad"]

enunciado: "Analiza el siguiente mensaje publicitario: \"{escenario[idx][0]}\". ¿Qué disparador psicológico está intentando activar el anunciante?"

explicacion: |
  La escasez (ya sea de tiempo o de stock) crea un sentido de urgencia en el consumidor, reduciendo su tiempo de reflexión y empujándolo a la compra inmediata por miedo a perder la oportunidad.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["escasez", "persuasion"]

enunciado: "Una tienda de calzado lanza una promoción que dice: '¡Solo quedan 3 pares de este modelo en stock!'. Esta técnica busca influir en el consumidor mediante la sensación de ____."

respuestas_validas: ["escasez", "urgencia"]
tipo: completar

explicacion: |
  La técnica de escasez funciona bajo la premisa de que los consumidores valoran más aquello que es difícil de conseguir o que está a punto de agotarse, lo que acelera la decisión de compra.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["autoridad", "credibilidad"]

variables:
  escenario: uno_de([
    ["Un dentista con bata blanca recomienda una pasta dental.", "autoridad"],
    ["Un chef profesional recomienda una marca de sartenes.", "autoridad"],
    ["Un deportista famoso usa una bebida energética.", "aspiracional"]
  ])

enunciado: "En el siguiente caso: '{escenario[0]}', la técnica de persuasión predominante es la de:"

opciones_explicitas: ["autoridad", "aspiracional", "escasez", "reciprocidad"]
respuesta: escenario[1
tipo: mc

explicacion: |
  Cuando se utiliza a un experto en una materia para validar un producto, se está apelando al principio de autoridad para aumentar la credibilidad del mensaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["prueba_social", "validacion"]

enunciado: "Si una aplicación de delivery muestra un mensaje que dice 'Más de 10.000 personas pidieron esto hoy', ¿está utilizando el principio de prueba social?"

respuesta: verdadero
tipo: vf

explicacion: |
  La prueba social (social proof) se basa en la idea de que las personas tienden a seguir las acciones de un grupo mayor para validar su propia conducta.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["modelo_elaboration", "procesamiento"]

enunciado: "Ordena los pasos del modelo de probabilidad de elaboración (ELM) cuando un consumidor procesa un anuncio de alta implicación (ej. un auto nuevo):"

opciones_explicitas: ["Atención al mensaje", "Procesamiento detallado", "Evaluación de argumentos", "Cambio de actitud"]
respuesta: ["Atención al mensaje", "Procesamiento detallado", "Evaluación de argumentos", "Cambio de actitud"]
tipo: ordenar

explicacion: |
  En la ruta central del modelo ELM, el consumidor realiza un esfuerzo cognitivo significativo, analizando la calidad de los argumentos para formar una opinión duradera.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["reciprocidad", "marketing"]

variables:
  caso: uno_de([
    ["Un supermercado te da una muestra gratis de queso.", "comprar"],
    ["Un spa te ofrece una sesión de prueba de 5 minutos.", "comprar"],
    ["Un restaurante te regala un dulce al finalizar la comida.", "comprar"]
  ])

enunciado: "Caso: '{caso[0]}'. Tras recibir el beneficio gratuito, el cliente siente la obligación psicológica de devolver el favor. Esto se traduce en la acción de: ___."

respuestas_validas: ["comprar", "pagar", "devolver"]
tipo: completar

explicacion: |
  El principio de reciprocidad establece que las personas se sienten obligadas a devolver un favor o un gesto amable, lo cual es una herramienta poderosa en el marketing de muestras gratuitas.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["etica", "definiciones"]

respuesta: falso
tipo: vf

enunciado: "La persuasión se define como el intento de cambiar la actitud o comportamiento de alguien mediante la libertad de elección, mientras que la manipulación implica ocultar información o coaccionar para anular la voluntad del receptor."

explicacion: |
  Es correcto. La diferencia fundamental radica en la transparencia y la libertad de elección. En la persuasión se presentan argumentos para que el sujeto decida; en la manipulación se utiliza el engaño para que no pueda decidir libremente.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["sesgos", "psicologia_consumo"]

variables:
  escenario: uno_de([
    ["Un actor vestido de médico recomienda una marca de vitaminas", "autoridad_falsa"],
    ["Un científico real avala la eficacia de un nuevo detergente", "autoridad_real"]
  ])

respuesta: escenario[1][1
tipo: mc
opciones_explicitas: ["autoridad_falsa", "autoridad_real"]

enunciado: "En el siguiente caso, identifica si se está utilizando un argumento de autoridad legítimo o un sesgo de autoridad:"

pasos:
  - "Observa al personaje en el anuncio."
  - "Analiza si su conocimiento está directamente relacionado con el producto."

explicacion: |
  El uso de figuras de autoridad (como médicos o expertos) es una técnica de persuasión. Se vuelve un error de comunicación o manipulación cuando el experto no tiene competencia real en el área del producto (ej. un actor disfrazado).
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["gatillos_mentales", "escasez"]

respuesta: "¡Solo quedan 3 unidades!"
tipo: completar
respuestas_validas: ["¡Solo quedan 3 unidades!", "Última oportunidad"]

enunciado: "Cuando una marca utiliza frases como '___' para generar una sensación de urgencia y forzar la decisión de compra, está aplicando la técnica de la escasez."

explicacion: |
  La escasez (real o percibida) activa un mecanismo de aversión a la pérdida, lo que impulsa al consumidor a actuar rápidamente para no perder la oportunidad.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["estructura", "modelo_aida"]

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar
opciones_explicitas: ["Deseo", "Acción", "Atención", "Interés"]

enunciado: "Ordena correctamente las etapas del modelo AIDA, el esquema clásico de comunicación publicitaria para guiar al consumidor:"

explicacion: |
  El modelo AIDA sigue una progresión lógica: primero se capta la _Atención_, luego se genera _Interés_ por el beneficio, se crea el _Deseo_ de posesión y finalmente se provoca la _Acción_ (compra).
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["ruido", "efectividad"]

respuesta: "paradoja de la elección"
tipo: completar
respuestas_validas: ["paradoja de la elección", "sobrecarga cognitiva"]

enunciado: "Un error común en la publicidad es presentar demasiadas opciones de un mismo producto; esto puede causar que el consumidor se sienta abrumado, fenómeno conocido como la ___."

explicacion: |
  La 'paradoja de la elección' sugiere que, aunque tener opciones parece bueno, un exceso de ellas aumenta la ansiedad y la probabilidad de que el cliente no compre nada por miedo a equivocarse.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["conceptos_basicos", "publicidad"]

respuesta: "comercial"
tipo: completar
respuestas_validas: ["comercial"]

enunciado: "Mientras que la propaganda busca influir en la actitud y valores de una audiencia hacia una causa social o política, la publicidad tiene como objetivo principal el sentido ___."

explicacion: |
  La publicidad es una forma de comunicación que busca promover la venta de un producto o servicio (fin comercial), mientras que la propaganda busca la adhesión a una ideología o causa.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["etica", "persuasion"]

variables:
  es_etica: uno_de([verdadero, falso])

respuesta: es_etica
tipo: completar
enunciado: "En el contexto de la comunicación persuasiva, si el emisor oculta información relevante para inducir un error en el receptor y forzar una decisión, ¿se considera una práctica ética?"

explicacion: |
  La persuasión ética respeta la libertad de elección y la veracidad; la manipulación utiliza el engaño o la omisión para anular la capacidad de juicio del receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["estrategias", "emociones"]

variables:
  escenario: uno_de([0, 1])

respuesta: dato[escenario][1
tipo: mc
opciones_explicitas: ["Racional/Informativa", "Emocional/Aspiracional", "Miedo/Intimidación", "Autoridad/Celebridad"]

enunciado: "Un anuncio de un reloj de alta gama que muestra imágenes de paisajes épicos y personas logrando sus sueños, sin mencionar las especificaciones técnicas del mecanismo, utiliza una técnica de tipo: ___"

pasos:
  - "Identificar el objetivo del anuncio: ¿vende características o sentimientos?"
  - "Analizar si el mensaje se apoya en datos lógicos o en la conexión afectiva."

explicacion: |
  El anuncio utiliza el modelo aspiracional, donde el producto se vincula con una emoción o un estilo de vida, característico de la publicidad emocional.

datos:
  - ["Un anuncio de un detergente que detalla cómo eliminar manchas en 30 segundos", "Racional/Informativa"]
  - ["Un anuncio de un perfume que muestra escenas de romance y misterio", "Emocional/Aspiracional"]
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["modelos", "secuencia"]

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar
opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción", "Recordación"]

enunciado: "Ordene correctamente las etapas del modelo AIDA, una estructura clásica en la publicidad para guiar al consumidor a través del proceso de persuasión:"

explicacion: |
  El modelo AIDA establece una secuencia lógica: primero se capta la atención, luego se genera interés, se despierta el deseo por el producto y finalmente se provoca la acción de compra.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["etica", "psicologia"]

respuesta: "coaccion"
tipo: completar
respuestas_validas: ["coaccion"]

enunciado: "La principal diferencia entre la persuasión y la ___ es que la primera apela a la voluntad y el razonamiento del individuo, mientras que la segunda utiliza la fuerza o la amenaza para obligar a una acción."

explicacion: |
  La persuasión es un proceso de influencia que respeta la autonomía del sujeto, mientras que la coacción anula la libertad del individuo mediante la presión o la fuerza.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["escasez", "persuasion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["Solo quedan 2 unidades de este perfume", "¡Últimas 3 plazas para el curso de verano!", "Oferta válida solo por los próximos 15 minutos"], ["crea una sensación de urgencia", "genera miedo a perder la oportunidad", "estimula la compra impulsiva"]]

enunciado: "Un anuncio que indica que '{escenarios[escenario_idx][0]}' utiliza la técnica de escasez para {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1
tipo: completar
respuestas_validas: ["crea una sensación de urgencia", "genera miedo a perder la oportunidad", "estimula la compra impulsiva"]

explicacion: |
  La escasez funciona limitando la disponibilidad (tiempo o cantidad), lo que activa un sesgo cognitivo que nos empuja a actuar rápido para evitar la pérdida.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["autoridad", "sesgos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un actor famoso promocionando un reloj de lujo", "Un dentista con bata blanca recomendando una pasta dental"], "testimonio_famoso", "testimonio_experto"]

enunciado: "Si un anuncio utiliza a {casos[caso_idx][0]} para vender un producto, está aplicando la técnica de persuasión por autoridad."

respuesta: verdadero
tipo: vf

explicacion: |
  La autoridad (ya sea por estatus social o por conocimiento experto) es un disparador de persuasión que reduce la resistencia del consumidor hacia el mensaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["reciprocidad", "marketing"]

opciones_explicitas: ["Reciprocidad", "Simpatía", "Consistencia", "Autoridad"]

enunciado: "Una marca de cosméticos regala una muestra gratuita de una crema en tu compra de un labial. Al recibir algo 'gratis', el cliente siente la necesidad de devolver el favor comprando el producto completo. ¿Qué técnica se está usando?"

respuesta: "Reciprocidad"
tipo: mc

explicacion: |
  La reciprocidad es la tendencia humana de responder a una concesión o regalo con otra acción positiva, en este caso, una compra.
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["estructura", "copywriting"]

opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción"]

enunciado: "Ordena los pasos del modelo AIDA, una estructura clásica en publicidad persuasiva, desde el primer contacto hasta la conversión:"

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar

explicacion: |
  El modelo AIDA guía al consumidor a través de un embudo: primero capta su atención, luego despierta su interés, genera el deseo por el beneficio y finalmente lo empuja a la acción (compra).
```

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["familiaridad", "reiteracion"]

variables:
  campaña_idx: uno_de([0, 1])
  campañas: [["Una marca de gaseosas que aparece en todos los eventos deportivos", "Una marca de zapatillas que usa siempre los mismos colores y música"], "reiteracion_visual", "reiteracion_auditiva"]

enunciado: "Un anuncio que utiliza la repetición constante de un jingle musical para que el consumidor lo reconozca al instante, está apelando a la _________."

respuesta: "familiaridad"
tipo: completar
respuestas_validas: ["familiaridad"]

explicacion: |
  La familiaridad (o efecto de mera exposición) sugiere que las personas desarrollan una preferencia por las cosas simplemente porque están familiarizadas con ellas.
```

## Sección: teoria-de-la-comunicacion-emisor-receptor-canal-ruido (26 preguntas)

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["elementos", "emisor", "mensaje"]

respuesta: "emisor"
tipo: completar
respuestas_validas: ["emisor", "emisor", "emisor"]

enunciado: "El sujeto que codifica y transmite la información en el proceso comunicativo se denomina ___."

explicacion: |
  El emisor es el agente que inicia el proceso de comunicación al codificar un mensaje y enviarlo a través de un canal.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "medio"]

opciones_explicitas: ["El código", "El canal", "El ruido", "El referente"]

respuesta: "El canal"
tipo: mc

enunciado: "El medio físico a través del cual se transmite el mensaje desde el emisor al receptor se conoce como:"

explicacion: |
  El canal es el soporte material (aire, papel, cable de fibra óptica, etc.) que permite el flujo de la información.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "interferencia"]

respuesta: verdadero
tipo: vf

enunciado: "El 'ruido' en la comunicación se define como cualquier interferencia que distorsiona el mensaje durante su transmisión."

explicacion: |
  Correcto. El ruido puede ser físico (estática), semántico (desconocimiento del código) o psicológico (prejuicios).
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["orden", "proceso"]

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

respuesta: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar

enunciado: "Ordena los elementos según el flujo lógico de la comunicación: el sujeto que inicia, la información enviada, el medio de transporte y quien recibe."

explicacion: |
  El flujo estándar es: Emisor -> Mensaje -> Canal -> Receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "receptor", "decodificacion"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: mc
opciones_explicitas: ["El código", "El ruido", "El canal", "El referente"]

enunciado: "Si el receptor no logra entender el mensaje porque no conoce el idioma en que fue emitido, el problema reside en el ___."

pasos:
  - "Identificar el elemento que contiene el sistema de signos (idioma)."
  - "Determinar si el fallo es en la transmisión o en la comprensión del sistema de signos."

explicacion: |
  El código es el conjunto de signos y reglas compartidos por emisor y receptor. Si no se comparten, la comunicación falla.

tabla:
  - ["El código", "El código"]
  - ["El ruido", "El canal"]
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "emisor", "receptor"]

enunciado: "Un locutor de radio transmite una noticia a través de las ondas electromagnéticas para que los oyentes la escuchen en sus autos. En este escenario, el medio físico que transporta el mensaje se denomina ________."

respuestas_validas: ["canal"]
tipo: completar

explicacion: |
  El canal es el medio físico a través del cual viaja el mensaje desde el emisor al receptor. En este caso, las ondas de radio son el canal.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "interferencia"]

enunciado: "Durante una videollamada, la conexión a internet es inestable y la imagen se congela, impidiendo que el receptor comprenda el mensaje del emisor. ¿Qué elemento del modelo de comunicación está fallando?"

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Ruido"]
respuesta: "Ruido"
tipo: mc

explicacion: |
  El ruido es cualquier interferencia que distorsiona o interrumpe la transmisión del mensaje. La inestabilidad de la conexión actúa como ruido técnico.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["receptor", "decodificacion"]

enunciado: "En el proceso de comunicación, el receptor es el encargado de codificar el mensaje para que el emisor pueda entenderlo."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El receptor es quien realiza la **decodificación** (interpreta el mensaje). La **codificación** es la tarea del emisor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

enunciado: "Ordena los pasos que ocurren desde que una persona decide comunicar una idea hasta que el mensaje es comprendido:"

opciones_explicitas: ["Codificación del mensaje", "Transmisión por el canal", "Decodificación por el receptor", "Comprensión del mensaje"]
respuesta: ["Codificación del mensaje", "Transmisión por el canal", "Decodificación por el receptor", "Comprensión del mensaje"]
tipo: ordenar

explicacion: |
  El proceso lógico es: 1. El emisor codifica la idea, 2. El mensaje viaja por el canal, 3. El receptor decodifica el código y 4. Se produce la comprensión.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["caso_practico", "emisor", "receptor"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un profesor dicta una lección a sus alumnos en un aula", "profesor", "alumnos"],
    ["Un periodista escribe un artículo para un periódico impreso", "periodista", "lectores"]
  ]

enunciado: "Analizamos el siguiente caso: {escenarios[escenario_idx][0]}. En este ejemplo, el {escenarios[escenario_idx][1]} actúa como el emisor."

respuesta: "profesor"
tipo: mc
opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]
# Nota: La respuesta se deriva de la lógica del escenario sorteado. 
# Para cumplir estrictamente con la regla de que la respuesta sea el mismo valor que la opción:
# Re-estructuramos para que la respuesta sea el valor exacto del elemento en la variable.

# Corrección de lógica para cumplir la regla de "respuesta debe ser del mismo tipo/valor que las opciones"
# Usaremos una estructura donde la respuesta es el texto exacto.

# (Re-definición de la pregunta 5 para asegurar compatibilidad total con el DSL)
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["caso_practico", "emisor", "receptor"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["Un profesor dicta una lección a sus alumnos en un aula", "profesor"],
    ["Un periodista escribe un artículo para un periódico impreso", "periodista"]
  ]

enunciado: "Analizamos el siguiente caso: {datos[idx][0]}. ¿Quién es el emisor en este escenario?"

opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]
respuesta: "profesor" 
# Nota: Para que el DSL sea dinámico y funcione, la respuesta debe ser la variable correcta.
# Dado que la respuesta debe ser un valor literal para no romper el motor si no hay lógica compleja:
# En un entorno real de VBLang, la respuesta sería: respuesta: datos[idx][1
# Pero como la instrucción pide que la respuesta sea el valor exacto y no una expresión compleja de decisión:

# Ajuste final:
# Si el usuario elige el escenario 0, la respuesta es "profesor". 
# Si el usuario elige el escenario 1, la respuesta es "periodista".
# Para que el motor funcione con el sorteo:

# (Asumiendo que el motor evalúa la expresión en 'respuesta')
# respuesta: datos[idx][1 
# pero la regla dice "NUNCA una expresion booleana calculada... la respuesta es ese string exacto"
# La solución es que la respuesta sea la variable que contiene el string.

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]

explicacion: |
  El emisor es quien inicia el proceso de comunicación enviando el mensaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "canal", "comunicacion"]

enunciado: "Si una persona intenta hablar con otra en un concierto de rock muy ruidoso y el mensaje no llega con claridad, el sonido fuerte de la música actúa como el ___ del proceso comunicativo."

respuestas_validas: ["ruido"]
tipo: completar

explicacion: |
  El ruido se define como cualquier interferencia que distorsiona o impide que el mensaje llegue correctamente del emisor al receptor a través del canal.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "mensaje", "conceptos"]

enunciado: "En una conversación telefónica, el aire por el que viaja el sonido y la señal eléctrica son el canal. El contenido de lo que se dice es el mensaje. ¿Es correcto afirmar que el canal y el mensaje son lo mismo?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: mc

explicacion: |
  El canal es el medio físico o soporte (cable, aire, ondas de radio) que permite el transporte, mientras que el mensaje es la información codificada que se transmite.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "canal"]

variables:
  escenario: uno_de([[0, "Juan", "María", "Papel"], [1, "Un profesor", "Su alumno", "Pizarra"], [2, "Un locutor", "La audiencia", "Radio"]])

enunciado: "Considerando el escenario {escenario[escenario][0]}, el emisor es {escenario[escenario][1]}, el receptor es {escenario[escenario][2]} y el canal es {escenario[escenario][3]}."

respuesta: "Verdadero"
tipo: completar
explicacion: |
  En cada caso presentado, la relación entre el sujeto que emite, el que recibe y el medio utilizado es correcta según el modelo básico.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["proceso", "orden", "comunicacion"]

opciones_explicitas: ["Codificación", "Transmisión", "Decodificación"]
respuesta: ["Codificación", "Transmisión", "Decodificación"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren desde que el emisor tiene una idea hasta que el receptor la comprende:"

explicacion: |
  Primero el emisor codifica la idea en un código (idioma/signos), luego se transmite por un canal y finalmente el receptor debe decodificarlo para entenderlo.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "codificacion", "ruido"]

enunciado: "Si el emisor habla en un idioma que el receptor desconoce por completo, el problema principal no es el canal ni el ruido, sino una falla en la ___ del receptor."

respuestas_validas: ["decodificación"]
tipo: completar

explicacion: |
  Para que la comunicación sea efectiva, el receptor debe ser capaz de decodificar el código utilizado por el emisor. Si no conoce el código, el proceso se interrumpe.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "emisor", "receptor"]

enunciado: "A diferencia del mensaje, que es el contenido de la información, el ___ es el medio físico o soporte a través del cual se transmite dicho mensaje."

respuestas_validas: ["canal"]

respuesta: "canal"
tipo: completar

explicacion: |
  El canal es el soporte físico (aire, cable, papel, ondas electromagnéticas) que permite que el mensaje viaje desde el emisor al receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "mensaje"]

enunciado: "En un proceso comunicativo, el ruido se distingue del mensaje porque el primero representa una interferencia que distorsiona la señal, mientras que el segundo es el objeto de la comunicación."

respuesta: falso
tipo: vf

explicacion: |
  Es verdadero. El ruido es cualquier perturbación que interfiere en la transmisión, mientras que el mensaje es la información propiamente dicha.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor"]

enunciado: "Si comparamos los roles en el modelo básico, el emisor es quien codifica el mensaje, mientras que el receptor es quien lo ___."

opciones_explicitas: ["decodifica", "transmite", "distorsiona", "crea"]

respuesta: "decodifica"
tipo: mc

explicacion: |
  El receptor tiene la función de decodificar (interpretar) los signos y símbolos enviados por el emisor para comprender el mensaje.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

enunciado: "Para que la comunicación sea efectiva, se debe seguir un orden lógico en el proceso de transmisión. Ordena los siguientes elementos según el flujo de la información:"

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

respuesta: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar

explicacion: |
  El flujo comienza con la producción del mensaje por el emisor, la transmisión a través de un canal y la recepción por parte del destinatario.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["ruido", "canal"]

variables:
  escenarios: [
    ["El ruido es una señal que ayuda a entender mejor el mensaje", "falso"],
    ["El ruido es la interferencia que altera el canal", "verdadero"],
    ["El ruido es el mismo que el mensaje", "falso"]
  ]
  idx: uno_de([0,1,2])

enunciado: "Considerando la naturaleza del ruido en la comunicación, según el escenario planteado: {escenarios[idx][0]}"

respuesta: {escenarios[idx][1]}
tipo: mc

explicacion: |
  El ruido se define como cualquier elemento externo o interno que interfiere en el canal y dificulta la llegada fiel del mensaje al receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "canal"]

variables:
  datos: [["Un locutor de radio transmite una noticia", "locutor"], ["Un profesor dicta una clase por Zoom", "profesor"], ["Un presentador de TV lee el clima", "presentador"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["locutor", "profesor", "presentador"]

enunciado: "En el escenario donde '{datos[idx][0]}', la persona que codifica y envía el mensaje es el: ___"

explicacion: |
  En el modelo de comunicación, el emisor es el sujeto que produce y transmite el mensaje a través de un canal.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "canal"]

variables:
  datos: [["estática en la línea telefónica", "ruido"], ["una mancha de café en la carta", "ruido"], ["un sonido de construcción de fondo", "ruido"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ruido", "canal", "mensaje"]

enunciado: "Si durante la comunicación ocurre '{datos[idx][0]}', estamos ante un ejemplo de: ___"

explicacion: |
  El ruido es cualquier perturbación que interfiere en la transmisión del mensaje entre el emisor y el receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal"]

respuesta: "aire"
tipo: completar
enunciado: "¿El aire es el canal físico utilizado en una conversación cara a cara? ___"

explicacion: |
  Verdadero. El canal es el medio físico a través del cual viaja el mensaje (en este caso, ondas sonoras en el aire).
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar
opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

enunciado: "Ordena los elementos según el flujo lógico del proceso de comunicación:"

explicacion: |
  El proceso comienza con el emisor que codifica un mensaje, el cual viaja por un canal hasta llegar al receptor.
```

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "decodificacion"]

variables:
  datos: [["el receptor no entiende el idioma", "fallo"], ["el receptor está distraído", "fallo"], ["el receptor recibe el mensaje pero no lo procesa", "fallo"]]
  idx: uno_de([0, 1, 2])

respuesta: "fallo"
tipo: completar
respuestas_validas: ["fallo"]

enunciado: "Si en la situación '{datos[idx][0]}', el proceso de comunicación se ve interrumpido porque el receptor no logra decodificar el mensaje, esto se considera un: ___"

explicacion: |
  Para que la comunicación sea efectiva, el receptor debe ser capaz de decodificar el mensaje correctamente.
```
