### 1 — El error de la pregunta cerrada
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "errores_comunes"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [
    ["¿Las plantas crecen más con música clásica?", "cerrada"],
    ["¿Cómo afecta la frecuencia de riego al crecimiento de la planta?", "investigable"]
  ]

respuesta: escenarios[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["cerrada", "investigable", "subjetiva", "imposible"]

enunciado: "Si observo que las plantas de mi salón están más verdes que las del pasillo y me pregunto: '{escenarios[ejemplo_idx][0]}', el tipo de pregunta que he formulado es una pregunta ___."

explicacion: |
  Una pregunta investigable debe permitir la recolección de datos medibles. Las preguntas que se responden con un simple "sí" o "no" (como la del ejemplo) son preguntas cerradas y no permiten desarrollar un proceso de investigación experimental completo.
```

### 2 — La variable en la pregunta
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["variables", "diseño_experimental"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["¿La temperatura influye en la velocidad de disolución de la sal?", "temperatura"],
    ["¿El color del recipiente afecta la rapidez con la que se disuelve el azúcar?", "color"]
  ]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas: ["temperatura", "color"]

enunciado: "Para que una observación se transforme en una pregunta investigable, es necesario identificar una variable independiente. En el caso de: '{casos[caso_idx][0]}', la variable que el investigador debe manipular es el/la ___."

explicacion: |
  La variable independiente es el factor que el investigador cambia deliberadamente para observar su efecto. En el primer caso es la temperatura; en el segundo, el color.
```

### 3 — Verdad o Falso: La subjetividad
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["subjetividad", "objetividad"]

respuesta: falso
tipo: vf

enunciado: "Una pregunta que contenga términos subjetivos como '¿Cuál es la flor más bonita del jardín?' es considerada una pregunta investigable porque la belleza es una propiedad física medible."

explicacion: |
  Falso. Los términos subjetivos (bonito, feo, increíble, mejor) dependen del observador y no pueden ser medidos de forma objetiva mediante instrumentos o datos estandarizados. Una pregunta investigable debe ser objetiva.
```

### 4 — El proceso de transformación
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta: ["Observación", "Identificación de variables", "Formulación de pregunta"]
tipo: ordenar

opciones_explicitas: ["Observación", "Identificación de variables", "Formulación de pregunta"]

enunciado: "Ordena los pasos lógicos para convertir una curiosidad en una pregunta de investigación científica:"

pasos:
  - "Notar un fenómeno en el entorno."
  - "Determinar qué factores pueden estar influyendo (causa-efecto)."
  - "Redactar el interrogante de forma clara, precisa y medible."

explicacion: |
  El método científico comienza con la observación de un fenómeno, seguido por el análisis de las variables involucradas y culmina con la formulación de una pregunta que pueda ser sometida a prueba.
```

### 5 — La pregunta imposible
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["viabilidad", "limitaciones"]

variables:
  pregunta_idx: uno_de([0, 1])
  preguntas: [
    ["¿Cómo influye el tipo de suelo en el crecimiento de las semillas?", "posible"],
    ["¿Por qué las plantas tienen sentimientos cuando no las riego?", "imposible"]
  ]

respuesta: preguntas[pregunta_idx][1]
tipo: mc
opciones_explicitas: ["posible", "imposible"]

enunciado: "Al evaluar la viabilidad de una pregunta de investigación, si nos planteamos: '{preguntas[pregunta_idx][0]}', la clasificación correcta es que la pregunta es ___."

explicacion: |
  Una pregunta es imposible de investigar científicamente si su objeto de estudio no es observable o medible (como los 'sentimientos' de una planta), o si requiere tecnología que no existe. Una pregunta sobre el suelo es posible porque el crecimiento y el tipo de suelo son variables medibles.
```