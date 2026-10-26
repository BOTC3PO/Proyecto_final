### 1 — Concepto de Ritmo
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "definicion"]

tipo: mc
opciones_explicitas: ["La repetición de movimientos en el tiempo", "La velocidad constante de un bailarín", "La expresión de sentimientos mediante gestos", "El uso de música para acompañar un baile"]

respuesta: "La repetición de movimientos en el tiempo"

enunciado: "En el contexto de la danza, el ritmo se define fundamentalmente como:"

explicacion: |
  El ritmo es la organización de los movimientos en el tiempo, creando patrones de acentos y pausas que estructuran la danza.
```

### 2 — El Tiempo en la Danza
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["tiempo", "duracion"]

tipo: vf

enunciado: "¿El tiempo en la danza se refiere exclusivamente a la duración de una pieza musical?"

respuesta: falso

explicacion: |
  Falso. El tiempo en la danza involucra la duración, el tempo, el ritmo y la relación del cuerpo con la temporalidad de la acción.
```

### 3 — Elementos de la Expresión Corporal
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje"]

variables:
  escenario: uno_de([["gesto", "movimiento", "postura"], ["emoción", "acción", "forma"], ["espacio", "energía", "tiempo"]])

tipo: completar
respuestas_validas: ["gesto", "movimiento", "postura", "emoción", "acción", "forma", "espacio", "energía", "tiempo"]

enunciado: "La expresión corporal utiliza el ________ como unidad mínima de comunicación para transmitir significados."

respuesta: "gesto"

explicacion: |
  El gesto es la unidad básica de la expresión corporal que permite comunicar estados de ánimo o ideas sin necesidad de palabras.
```

### 4 — Secuencia de la Acción Danzada
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Inspiración", "Movimiento", "Expresión", "Postura"]

respuesta: ["Inspiración", "Movimiento", "Postura", "Expresión"]

enunciado: "Ordene los elementos según la progresión lógica de una acción corporal expresiva, desde la preparación hasta el resultado final:"

explicacion: |
  La danza comienza con la preparación (inspiración), sigue con la ejecución (movimiento), la estabilización (postura) y culmina en la intención comunicativa (expresión).
```

### 5 — Relación Ritmo-Cuerpo
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "pulso"]

variables:
  caso: uno_de([
    ["pulso", "ritmo"],
    ["ritmo", "pulso"]
  ])

tipo: completar
respuestas_validas: ["pulso", "ritmo"]

enunciado: "Si el ________ es la unidad básica y constante de la música, el ________ es la organización de acentos sobre esa base."

respuesta: "pulso"

explicacion: |
  El pulso es la unidad de medida constante, mientras que el ritmo es la combinación de duraciones que crea un patrón sobre ese pulso.
```