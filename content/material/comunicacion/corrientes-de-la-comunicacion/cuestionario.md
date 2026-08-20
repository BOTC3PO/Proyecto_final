# Comunicacion — Corrientes de la comunicacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El modelo de transmisión

```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

respuesta: "emisor"
tipo: completar
respuestas_validas:
  - "emisor"
  - "receptor"
  - "mensaje"
  - "canal"

enunciado: "En el modelo de transmisión de la comunicación, el sujeto que codifica y envía el mensaje se denomina ___."

explicacion: |
  El modelo de transmisión (o funcionalista) se centra en la eficacia del proceso desde un punto de vista técnico, donde el emisor transmite un mensaje a través de un canal hacia un receptor.
```

### 2 — Teoría Crítica y Poder

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

### 3 — La audiencia en los Estudios Culturales

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

### 4 — Evolución de los enfoques

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Modelo de Transmisión", "Teoría Crítica", "Estudios Culturales"]
respuesta_orden: ["Modelo de Transmisión", "Teoría Crítica", "Estudios Culturales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de los enfoques teóricos de la comunicación, desde el más lineal/técnico hasta el más centrado en la recepción cultural."

explicacion: |
  La evolución parte del funcionalismo (transmisión), pasa por la crítica social (poder/ideología) y llega a los estudios culturales (decodificación activa del receptor).
```

### 5 — El concepto de decodificación

```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "intermedio"
  tags: ["decodificacion", "significado"]

variables:
  idx: uno_de([0, 1])
  escenario: [["lectura dominante", "lectura negociada"], ["lectura dominante", "lectura oposicional"]]

respuesta: escenario[idx][idx]
tipo: mc
opciones_explicitas: ["lectura dominante", "lectura negociada", "lectura oposicional"]

enunciado: "Según los estudios de recepción, cuando una audiencia acepta el mensaje pero lo adapta a sus condiciones particulares, está realizando una ___."

explicacion: |
  La lectura negociada es un punto intermedio donde el receptor reconoce la legitimidad del mensaje pero lo adapta o matiza según su propia realidad.
```

### 6 — El modelo de transmisión

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

### 7 — El poder de los medios

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "hegemonia", "teoria_critica"]

variables:
  escenario: uno_de([["Un conglomerado mediático decide la agenda política de un país", "control"], ["Un programa de TV refuerza estereotipos de clase para mantener el status quo", "control"]])

enunciado: "Desde la perspectiva de la Teoría Crítica, si ocurre que {escenario[0]}, el medio está ejerciendo una función de ___ sobre la sociedad."

pasos:
  - "Identificar la relación entre el medio y la estructura de poder."
  - "Determinar si el medio actúa como herramienta de dominación o de liberación."

respuestas_validas:
  - "control"
respuesta: escenario[1]
tipo: completar

explicacion: |
  La Teoría Crítica sostiene que los medios no son neutrales, sino instrumentos de poder que pueden perpetuar la hegemonía de ciertos grupos sociales.
```

### 8 — La audiencia activa

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

### 9 — Evolución de las corrientes

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "avanzado"
  tags: ["ordenar", "historia_comunicacion"]

enunciado: "Ordene cronológicamente las corrientes de la comunicación, desde la visión más centrada en el mensaje/efecto hacia la visión más centrada en el contexto/cultura."

opciones_explicitas: ["Funcionalismo (Transmisión)", "Teoría Crítica (Poder)", "Estudios Culturales (Interpretación)"]
respuesta_orden: ["Funcionalismo (Transmisión)", "Teoría Crítica (Poder)", "Estudios Culturales (Interpretación)"]
tipo: ordenar

explicacion: |
  La evolución parte de la preocupación por la transmisión técnica (Funcionalismo), pasa por la crítica a la ideología mediática (Teoría Crítica) y llega a la complejidad de la recepción cultural (Estudios Culturales).
```

### 10 — El efecto de los medios

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

### 11 — El modelo de transmisión

```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

respuesta: "emisor"
tipo: "completar"
respuestas_validas:
  - "emisor"

enunciado: "En el modelo de transmisión de la comunicación (funcionalismo), el sujeto que codifica y envía el mensaje se denomina ___."

explicacion: |
  El modelo de Shannon y Weaver (funcionalista) se centra en la eficacia de la transmisión, donde el emisor es el punto de origen del mensaje.
```

### 12 — Poder y medios

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

### 13 — La audiencia activa

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

### 14 — Evolución de la visión de la audiencia

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "intermedio"
  tags: ["evolucion", "teoria"]

opciones_explicitas: ["Modelo de Transmisión (Pasivo)", "Teoría Crítica (Control)", "Estudios Culturales (Activo)"]
respuesta_orden: ["Modelo de Transmisión (Pasivo)", "Teoría Crítica (Control)", "Estudios Culturales (Activo)"]
tipo: "ordenar"

enunciado: "Ordene las siguientes corrientes según la evolución del rol de la audiencia, desde la visión más pasiva a la más activa:"

explicacion: |
  La evolución histórica muestra un paso de la audiencia como receptora pasiva de estímulos (Transmisión), a ser víctima de la ideología (Crítica), hasta ser un sujeto que interpreta activamente (Estudios Culturales).
```

### 15 — El error de la neutralidad

```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["neutralidad", "poder", "ideologia"]

respuesta: "La comunicación es un campo de poder"
tipo: "mc"
opciones_explicitas: ["La neutralidad es posible", "La comunicación es un campo de poder"]

enunciado: "Para la Teoría Crítica, la afirmación 'Los medios son canales neutrales de información' es rechazada. ¿Cuál de las siguientes describe mejor su postura?"

explicacion: |
  La Teoría Crítica rechaza la neutralidad de los medios, argumentando que toda comunicación está atravesada por relaciones de poder e ideología.
```

### 16 — Funcionalismo vs. Teoría Crítica

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["funcionalismo", "teoria_critica"]

respuesta: "poder"
tipo: "completar"
respuestas_validas:
  - "poder"
  - "control"
  - "hegemonia"

enunciado: "Mientras que el funcionalismo se centra en la estabilidad y el equilibrio del sistema social, la Teoría Crítica pone el foco en las relaciones de ___ que los medios ejercen sobre la sociedad."

explicacion: |
  La Teoría Crítica (Escuela de Frankfurt) analiza cómo los medios de comunicación pueden servir como herramientas de dominación y control social, cuestionando el status quo.
```

### 17 — El rol de la audiencia

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

### 18 — Modelo de transmisión lineal

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

### 19 — Evolución de la perspectiva de los medios

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["comparativa", "teoria"]

opciones_explicitas: ["El medio como herramienta de equilibrio social", "El medio como instrumento de dominación", "El medio como espacio de negociación de sentidos"]
respuesta_orden: ["El medio como herramienta de equilibrio social", "El medio como instrumento de dominación", "El medio como espacio de negociación de sentidos"]
tipo: "ordenar"

enunciado: "Ordene las siguientes visiones sobre la función de los medios, desde la que prioriza la estabilidad social hasta la que prioriza la interpretación del sujeto:"

explicacion: |
  1. Funcionalismo (Equilibrio), 2. Teoría Crítica (Dominación), 3. Estudios Culturales (Negociación).
```

### 20 — Contraste de enfoques

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["estudios_culturales", "teoria_critica"]

variables:
  idx: uno_de([0, 1])
  escenario: [["estudios_culturales", "negociación"], ["teoria_critica", "dominación"]]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["negociación", "dominación", "estabilidad", "transmisión"]

enunciado: "Si nos enfocamos en el estudio de cómo los grupos sociales reinterpretan los significados de los mensajes mediáticos, estamos bajo el paradigma de los {escenario[idx][0]}, donde el proceso es de ___."

explicacion: |
  Dependiendo del sorteo, la pregunta identifica si el enfoque es de negociación (Estudios Culturales) o de dominación (Teoría Crítica).
```

### 21 — El modelo de transmisión

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

### 22 — La influencia de los medios

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

### 23 — La audiencia activa

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
respuestas_validas:
  - "lectura_negociada"
  - "lectura_dominante"

explicacion: |
  A diferencia del funcionalismo, los Estudios Culturales sostienen que la audiencia no es pasiva, sino que decodifica los mensajes de forma activa y diversa.
```

### 24 — Evolución de los enfoques

```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "basico"
  tags: ["historia", "teoria"]

variables:
  orden_teorias: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]

enunciado: "Ordena cronológicamente las corrientes de la comunicación, desde la más centrada en el proceso técnico hasta la más centrada en la interpretación social."

respuesta_orden: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]
tipo: ordenar
opciones_explicitas: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]

explicacion: |
  La evolución parte de la visión técnica (transmisión), pasa por la visión sociopolítica (teoría crítica) y llega a la visión cultural/subjetiva (estudios culturales).
```

### 25 — Verdad o Falso: El receptor pasivo

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
