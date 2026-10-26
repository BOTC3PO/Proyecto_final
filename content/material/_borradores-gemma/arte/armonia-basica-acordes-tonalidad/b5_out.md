### 1 — El acorde fundamental
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

variables:
  escenario: uno_de([["Do-Mi-Sol", "tríada de Do"], ["Re-Fa-La", "tríada de Re"], ["Mi-Sol-Si", "tríada de Mi"]])
  idx: uno_de([0, 1, 2])

enunciado: "Un músico está practicando una escala y toca las notas {escenario[idx][0]}. Según la teoría musical, este conjunto de notas forma una {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["tríada de Do", "tríada de Re", "tríada de Mi"]

explicacion: |
  Un acorde se forma al superponer tres o más notas distintas. En este caso, las notas pertenecen a la estructura de una tríada básica.
```

### 2 — Identificación de tonalidad
```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  caso: uno_de([["La menor", "la menor"], ["Sol mayor", "Sol mayor"], ["Do mayor", "Do mayor"]])
  idx: uno_de([0, 1, 2])

enunciado: "Una pieza musical suena melancólica y su nota de reposo (tónica) es {caso[idx][0]}. ¿En qué tonalidad se encuentra la pieza?"

opciones_explicitas: ["la menor", "Sol mayor", "Do mayor"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  La tonalidad está determinada por la nota fundamental (tónica) que actúa como centro gravitacional de la obra.
```

### 3 — Estructura de un acorde
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

enunciado: "Si un acorde se construye con la raíz, su tercera y su quinta, y la tercera es una tercera mayor, ¿el acorde es mayor?"

respuesta: verdadero
tipo: vf

explicacion: |
  La relación entre la primera y la tercera nota define si el acorde es mayor o menor. Si la tercera es mayor, el acorde es mayor.
```

### 4 — Orden de construcción armónica
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

enunciado: "Para construir un acorde de Do Mayor de forma ascendente, ¿cuál es el orden correcto de sus notas?"

opciones_explicitas: ["Do, Mi, Sol", "Sol, Mi, Do", "Do, Sol, Mi"]
respuesta: ["Do, Mi, Sol", "Sol, Mi, Do", "Do, Sol, Mi"]
tipo: ordenar

explicacion: |
  Un acorde se construye por intervalos superpuestos (terceras) partiendo desde la nota raíz hacia arriba.
```

### 5 — El centro tonal
```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  contexto: uno_de([["La pieza termina en Do", "Do"], ["La pieza termina en Sol", "Sol"], ["La pieza termina en Fa", "Fa"]])
  idx: uno_de([0, 1, 2])

enunciado: "En una composición, {contexto[idx][0]}. Si la última nota es la tónica, ¿cuál es la tonalidad probable?"

opciones_explicitas: ["Do mayor", "Sol mayor", "Fa mayor"]
respuesta: contexto[idx][1]
tipo: mc

explicacion: |
  La resolución final en la tónica es el indicador más fuerte para identificar la tonalidad de una pieza musical.
```