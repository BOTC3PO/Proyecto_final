### 1 — El modelo de transmisión
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

### 2 — Poder y medios
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

### 3 — La audiencia activa
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

### 4 — Evolución de la visión de la audiencia
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

### 5 — El error de la neutralidad
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