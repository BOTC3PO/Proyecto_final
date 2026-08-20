### 1 — Comportamiento de la puerta NOT
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["not", "logica_digital"]

variables:
  escenario: uno_de([["0", "1"], ["1", "0"]])
  idx: uno_de([0, 1])

enunciado: "Si aplicamos una señal de entrada de valor {escenario[idx][0]} a una puerta lógica NOT, la salida obtenida será ___."

respuestas_validas: ["0", "1"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La puerta NOT es un inversor: si la entrada es 0, la salida es 1; si la entrada es 1, la salida es 0.
```

### 2 — Análisis de puerta AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["and", "logica_digital"]

variables:
  entradas: uno_de([["0", "0"], ["0", "1"], ["1", "0"], ["1", "1"]])
  idx: uno_de([0, 1, 2, 3])

enunciado: "Dadas las entradas de una puerta AND representadas por el par {entradas[idx][0]} y {entradas[idx][1]}, ¿cuál es el valor de la salida?"

opciones_explicitas: ["0", "1"]
respuesta: if(entradas[idx][0] == "1" && entradas[idx][1] == "1", "1", "0")
tipo: mc

explicacion: |
  La puerta AND solo devuelve un 1 (verdadero) cuando todas sus entradas son 1.
```

### 3 — Lógica de la puerta OR
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["or", "logica_digital"]

variables:
  caso: uno_de([["0", "1"], ["1", "0"], ["1", "1"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si la puerta OR recibe las señales {caso[idx][0]} y {caso[idx][1]}, el resultado de la operación lógica es verdadero."

respuesta: verdadero
tipo: vf

explicacion: |
  La puerta OR devuelve 1 si al menos una de sus entradas es 1. En los casos sorteados, siempre hay al menos un 1.
```

### 4 — Combinación de puertas (NOT y AND)
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["combinacional", "logica_digital"]

variables:
  entrada_a: uno_de(["0", "1"])
  entrada_b: uno_de(["0", "1"])
  idx_a: uno_de([0, 1])
  idx_b: uno_de([0, 1])

enunciado: "Se tiene un circuito compuesto por una puerta AND cuyas entradas son A y B, pero la entrada B pasa primero por una puerta NOT. Si A es {entrada_a} y B es {entrada_b}, el valor de la salida es ___."

respuestas_validas: ["0", "1"]
respuesta: if(entrada_a == "1" && entrada_b == "0", "1", "0")
tipo: completar

explicacion: |
  La salida es 1 solo si A es 1 y la inversión de B es 1 (es decir, B es 0).
```

### 5 — Secuencia de estados en un contador simple
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["secuencia", "logica_digital"]

opciones_explicitas: ["00", "01", "10", "11"]
respuesta: ["00", "01", "10", "11"]
tipo: ordenar

enunciado: "Ordene las posibles combinaciones de salida de una puerta AND de dos entradas, empezando desde el valor binario más bajo hasta el más alto."

explicacion: |
  El orden correcto de las combinaciones binarias de dos bits es 00, 01, 10 y 11.
```