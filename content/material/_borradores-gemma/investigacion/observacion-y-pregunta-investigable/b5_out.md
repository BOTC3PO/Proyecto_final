### 1 — De la curiosidad al problema
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Observo que las plantas de mi balcón crecen más rápido cuando las riego con té de banana.", "El efecto de la concentración de potasio en el crecimiento de la planta de interior."],
    ["Noto que mis amigos se ven más cansados los lunes que los viernes.", "La relación entre el ciclo semanal de sueño y los niveles de energía percibida."]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: [
    "¿Por qué las plantas son verdes?",
    datos[escenario_idx][1],
    "¿Me gusta el té de banana?",
    "¿Cómo se cuidan las plantas?"
]

enunciado: "Dada la siguiente observación: '{datos[escenario_idx][0]}', ¿cuál de las siguientes opciones representa una pregunta de investigación científica válida y delimitada?"

explicacion: |
  Una buena pregunta de investigación debe ser específica, medible y establecer una relación entre variables, evitando generalidades o juicios de valor.
```

### 2 — Identificación de variables
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["variables", "metodologia"]

variables:
  caso_idx: uno_de([0])
  casos: [
    ["Observación: El uso de música clásica durante el estudio parece mejorar la retención de vocabulario en estudiantes de inglés.", "música clásica", "retención de vocabulario"]
  ]

respuesta: "música clásica"
tipo: completar
respuestas_validas: ["música clásica"]

enunciado: "En la observación: '{casos[caso_idx][0]}', la variable independiente (la que el investigador manipula) es la ___."

pasos:
  - "Identifica qué factor se está variando o estudiando como causa."
  - "Identifica qué efecto se está midiendo."

explicacion: |
  La variable independiente es el factor que se presume causa un efecto; en este caso, la música clásica.
```

### 3 — ¿Es investigable?
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["criterios", "validacion"]

variables:
  pregunta_idx: uno_de([0, 1])
  preguntas: [
    ["¿Es el color azul el color más bonito de todos los colores?", falso],
    ["¿Influye la temperatura del agua en la velocidad de disolución de la sal?", verdadero]
  ]

respuesta: preguntas[pregunta_idx][1]
tipo: vf

enunciado: "Analiza la siguiente pregunta: '{preguntas[pregunta_idx][0]}'. ¿Es esta una pregunta que puede ser investigada mediante el método científico? (responde con verdadero o falso)"

explicacion: |
  Para ser investigable, una pregunta no debe basarse en opiniones subjetivas ("lo más bonito"), sino en hechos que puedan ser observados y medidos objetivamente.
```

### 4 — Estructura de la pregunta
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["estructura", "metodologia"]

variables:
  escenario_idx: uno_de([0])
  escenarios: [
    ["Observación: Los perros corren más rápido cuando hay un estímulo sonoro fuerte.", "¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "El ruido hace que los perros corran."]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: ordenar
opciones_explicitas: [
    "De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?",
    "El ruido hace que los perros corran.",
    "¿Por qué los perros corren rápido?",
    "¿Los perros corren con ruido?"
]

enunciado: "Ordena los siguientes enunciados desde la pregunta de investigación más técnica y bien estructurada hasta la más informal o vaga, basándote en la observación: '{escenarios[escenario_idx][0]}'."

explicacion: |
  Una pregunta científica debe ser precisa, evitar términos ambiguos y establecer claramente la relación entre la variable independiente y la dependiente.
```

### 5 — Delimitación del objeto
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["delimitacion", "metodologia"]

variables:
  item_idx: uno_de([0])
  items: [
    ["Observación: El crecimiento de los moños en el pan depende de la humedad.", "Humedad relativa", "Tiempo de fermentación", "Temperatura ambiente"]
  ]

respuesta: "Humedad relativa"
tipo: mc
opciones_explicitas: [
    "Humedad relativa",
    "Temperatura ambiente",
    "Tiempo de fermentación",
    "Todas las anteriores"
]

enunciado: "Si queremos investigar la observación: '{items[item_idx][0]}', y decidimos enfocarnos únicamente en la variable ambiental que se puede medir con un higrómetro, ¿cuál sería nuestra variable principal?"

explicacion: |
  El higrómetro es el instrumento diseñado específicamente para medir la humedad (relativa o absoluta) del aire.
```