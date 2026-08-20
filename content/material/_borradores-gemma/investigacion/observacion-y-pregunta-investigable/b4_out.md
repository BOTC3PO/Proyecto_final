### 1 — Diferencia entre observación y pregunta
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "conceptos_basicos"]

respuesta: "pregunta"
tipo: completar
respuestas_validas: ["pregunta"]

enunciado: "Mientras que una observación es la percepción de un fenómeno, una ___ es una interrogante que busca explicar o relacionar variables de forma empírica."

explicacion: |
  La observación es el punto de partida (notar algo), pero para iniciar el proceso científico se requiere transformar esa percepción en una pregunta investigable.
```

### 2 — Características de una pregunta investigable
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["criterios", "metodologia"]

variables:
  escenario: uno_de([
    ["¿Por qué el cielo es azul?", "falsa"],
    ["¿Cómo afecta la temperatura al crecimiento de una planta?", "verdadera"],
    ["¿Es el color azul el más bonito?", "falsa"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["¿Por qué el cielo es azul?", "¿Cómo afecta la temperatura al crecimiento de una planta?", "¿Es el color azul el más bonito?"]

enunciado: "De las siguientes opciones, ¿cuál representa una pregunta que puede ser investigada científicamente (es decir, que permite la recolección de datos empíricos)?"

explicacion: |
  Una pregunta investigable debe ser observable y medible. Las preguntas sobre opiniones ("más bonito") o causas metafísicas/filosóficas no se pueden probar mediante la experimentación directa.
```

### 3 — Distinción entre pregunta descriptiva y explicativa
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["tipos_de_pregunta", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "Una pregunta que busca determinar la relación de causa y efecto entre dos variables (ej. '¿Cómo influye X en Y?') se clasifica únicamente como una pregunta descriptiva."

explicacion: |
  Falso. Una pregunta descriptiva busca caracterizar un fenómeno (¿cómo es?, ¿cuántos hay?), mientras que la pregunta que busca la relación causa-efecto es de carácter explicativo o correlacional.
```

### 4 — El proceso de transformación
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["proceso", "pasos"]

respuesta: ["Observación", "Identificación de variables", "Formulación de la pregunta"]
tipo: ordenar
opciones_explicitas: ["Observación", "Identificación de variables", "Formulación de la pregunta"]

enunciado: "Ordena los pasos lógicos para transformar una curiosidad en un problema de investigación científica:"

explicacion: |
  Primero se observa el fenómeno, luego se identifican los elementos que intervienen (variables) y finalmente se redacta la pregunta que vincula dichos elementos.
```

### 5 — Comparación: Pregunta vs. Hipótesis
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["conceptos_relacionados", "metodologia"]

variables:
  caso: uno_de([
    ["¿Influye la luz en el crecimiento?", "pregunta"],
    ["La luz influye en el crecimiento.", "hipotesis"]
  ])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["¿Influye la luz en el crecimiento?", "La luz influye en el crecimiento."]

enunciado: "Si tenemos una observación sobre la luz y las plantas, ¿cuál de los siguientes enunciados representa la fase de 'pregunta investigable' y no una 'hipótesis'?"

explicacion: |
  La pregunta es una interrogación abierta que busca respuesta; la hipótesis es una afirmación provisional que intenta responder a dicha pregunta y que debe ser sometida a prueba.
```