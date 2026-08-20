### 1 — La puerta NOT
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "not"]

enunciado: "La puerta lógica NOT es un inversor. Si la entrada de la puerta es 1, la salida será ___."

respuestas_validas: ["0", "1"]
respuesta: "0"
tipo: completar

explicacion: |
  La función de la puerta NOT es invertir el estado de la entrada. Si entra un '1' (alto), la salida es '0' (bajo).
```

### 2 — Verdad de la puerta AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "and"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1, 0], [1, 1]]
  esperado: [0, 1]

enunciado: "Considera una puerta AND con las entradas A y B. Si las entradas son A={datos[escenario_idx][0]} y B={datos[escenario_idx][1]}, el resultado de la operación lógica es ___."

respuesta: "esperado[escenario_idx]"
tipo: mc
opciones_explicitas: ["0", "1"]

explicacion: |
  La puerta AND solo devuelve un '1' si TODAS sus entradas son '1'. En el caso {datos[escenario_idx][0]} y {datos[escenario_idx][1]}, el resultado es {esperado[escenario_idx]}.
```

### 3 — Evaluación de la puerta OR
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "or"]

enunciado: "Dada una puerta OR con entradas A = 0 y B = 1, ¿cuál es el valor de la salida?"

respuesta: "1"
tipo: mc
opciones_explicitas: ["0", "1"]

explicacion: |
  La puerta OR devuelve '1' si al menos una de sus entradas es '1'. Como B es 1, la salida es 1.
```

### 4 — Verdad de la puerta NOT (Booleano)
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "not"]

enunciado: "¿Es verdadero que la salida de una puerta NOT con entrada 0 es 1?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La puerta NOT invierte el valor: el inverso de 0 es 1.
```

### 5 — Análisis de circuito combinacional
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["combinacional", "and", "not"]

variables:
  entrada_a: 1
  entrada_b: 0

enunciado: "Se tiene un circuito compuesto por una puerta AND seguida de una puerta NOT. Si las entradas al circuito son A={entrada_a} y B={entrada_b}, sigue estos pasos:\n1. Calcular la salida de la puerta AND con A y B.\n2. Aplicar la puerta NOT al resultado obtenido.\n¿Cuál es la salida final del circuito?"

pasos:
  - "La salida de la puerta AND con 1 y 0 es 0."
  - "La salida de la puerta NOT aplicada a 0 es 1."

respuesta: "1"
tipo: input
tolerancia_abs: 0

explicacion: |
  Paso 1: AND(1, 0) = 0. \nPaso 2: NOT(0) = 1. \nLa salida final es 1.
```