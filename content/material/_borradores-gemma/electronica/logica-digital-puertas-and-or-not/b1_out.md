### 1 — La puerta NOT
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_not"]

respuesta: falso
tipo: vf

enunciado: "Si la entrada de una puerta lógica NOT es 1 (verdadero), su salida será 1 (verdadero)."

explicacion: |
  La puerta NOT es un inversor. Si la entrada es 1, la salida es 0 (falso). Si la entrada es 0, la salida es 1 (verdadero).
```

### 2 — El operador AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_and"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, 1], [1, 1]]
  resultados: [[0, 1], [1, 1]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "Considera una puerta lógica AND con las siguientes entradas: A = {datos[escenario_idx][0]} y B = {datos[escenario_idx][1]}. ¿Cuál es el valor de la salida?"

explicacion: |
  La puerta AND solo devuelve 1 (verdadero) cuando todas sus entradas son 1. En el caso seleccionado, la salida es {resultados[escenario_idx][0]}.
```

### 3 — La puerta OR
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_or"]

respuesta: "1"
tipo: completar
respuestas_validas: ["1"]

enunciado: "La puerta lógica OR devuelve un valor de ___ si al menos una de sus entradas es 1."

explicacion: |
  La función OR (O lógica) es verdadera si existe al menos un 1 en las entradas.
```

### 4 — Tabla de verdad de la puerta AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and", "tabla_verdad"]

respuesta: ["0", "0", "0", "1"]
tipo: ordenar

opciones_explicitas: ["0", "0", "0", "1"]

enunciado: "Ordena los resultados de la salida de una puerta AND para las combinaciones de entrada (0,0), (0,1), (1,0) y (1,1) respectivamente:"

explicacion: |
  La secuencia correcta es 0, 0, 0 y finalmente 1 cuando ambas entradas son altas.
```

### 5 — Identificación de funciones
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "definiciones"]

respuesta: "inversor"
tipo: completar
respuestas_validas: ["inversor"]

enunciado: "A la puerta lógica NOT se le conoce comúnmente como ___."

explicacion: |
  Se le llama inversor porque cambia el estado de la señal: lo que es 0 pasa a ser 1, y lo que es 1 pasa a ser 0.
```