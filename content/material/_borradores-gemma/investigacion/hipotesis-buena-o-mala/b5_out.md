### 1 — Calidad de la hipótesis
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "ciencia"]

variables:
  escenario: uno_de([
    ["Si el fertilizante X aumenta el crecimiento de las plantas de tomate en un 20% en 15 días.", "buena"],
    ["El clima afecta el estado de ánimo de las personas de forma variable.", "mala"],
    ["Los estudiantes rinden mejor si hay música clásica en el aula.", "mala"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["buena", "mala"]

enunciado: "Analiza el siguiente planteamiento: '{escenario[idx][0]}'. ¿Qué tipo de hipótesis es?"

explicacion: |
  Una hipótesis es buena cuando es específica, medible y falsable. Si es vaga o no permite una prueba empírica clara (como en los casos de "clima" o "música" sin parámetros), se considera una mala hipótesis.
```

### 2 — Falsabilidad
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "metodologia"]

variables:
  caso: uno_de([
    ["La hipótesis es 'Existe una fuerza invisible que empuja los objetos pero no se puede medir'.", falso],
    ["La hipótesis es 'Si aumento la temperatura, el gas se expande'.", verdadero]
  ])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: vf

enunciado: "Considera el siguiente caso: {caso[idx][0]}. ¿Es esta una hipótesis científica falsable (es decir, que puede ser refutada por la observación)?"

explicacion: |
  Para que una hipótesis sea científica, debe ser posible diseñar un experimento que pueda demostrar que es falsa. Si una afirmación es tan vaga o metafísica que no hay forma de contradecirla, no es científica.
```

### 3 — Atributos de la hipótesis
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta: ["especifica", "falsable", "medible"]
tipo: ordenar

enunciado: "Ordena los tres atributos fundamentales que debe poseer una hipótesis científica para ser considerada válida, desde el más general al más concreto: 1. La capacidad de ser refutada, 2. La claridad en su alcance, 3. La posibilidad de cuantificar sus variables."

pasos:
  - "Identificar la capacidad de ser refutada (falsabilidad)."
  - "Identificar la claridad en su alcance (especificidad)."
  - "Identificar la posibilidad de cuantificar (medibilidad)."

explicacion: |
  Una hipótesis científica debe ser primero falsable (poder ser sometida a prueba), luego específica (delimitar qué se estudia) y finalmente medible (permitir la recolección de datos cuantitativos o cualitativos claros).
```

### 4 — Identificación de errores
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["analisis"]

variables:
  ejemplo: uno_de([
    ["'Las plantas crecen mejor con luz solar'.", "vaga"],
    ["'El uso de la red social X reduce el tiempo de sueño en 30 minutos.'", "especifica"]
  ])
  idx: uno_de([0, 1])

respuesta: ejemplo[idx][1]
tipo: completar
respuestas_validas: ["vaga", "especifica"]

enunciado: "El siguiente enunciado es: '{ejemplo[idx][0]}'. Por su estructura, se clasifica como una hipótesis _________."

explicacion: |
  Si la hipótesis no define qué es "mejor" o cuánto es el cambio, es "vaga". Si define variables y magnitudes, es "especifica".
```

### 5 — Veracidad de conceptos
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que una hipótesis que no puede ser sometida a prueba empírica (es decir, que no es falsable) carece de valor científico, aunque sea una idea lógica?"

explicacion: |
  Exacto. La ciencia se basa en la capacidad de probar y, potencialmente, refutar una idea. Una idea que no puede ser puesta a prueba no pertenece al ámbito de la ciencia empírica.
```