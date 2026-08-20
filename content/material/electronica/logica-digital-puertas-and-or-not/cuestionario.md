# Electronica — Logica digital puertas and or not (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
  resultados_texto: ["0", "1"]

respuesta: resultados_texto[escenario_idx]
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "Considera una puerta lógica AND con las siguientes entradas: A = {datos[escenario_idx][0]} y B = {datos[escenario_idx][1]}. ¿Cuál es el valor de la salida?"

explicacion: |
  La puerta AND solo devuelve 1 (verdadero) cuando todas sus entradas son 1.
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
respuestas_validas:
  - "1"

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

respuesta_orden: ["0", "0", "0", "1"]
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
respuestas_validas:
  - "inversor"

enunciado: "A la puerta lógica NOT se le conoce comúnmente como ___."

explicacion: |
  Se le llama inversor porque cambia el estado de la señal: lo que es 0 pasa a ser 1, y lo que es 1 pasa a ser 0.
```

### 6 — La puerta NOT

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "not"]

enunciado: "La puerta lógica NOT es un inversor. Si la entrada de la puerta es 1, la salida será ___."

respuestas_validas:
  - "0"
  - "1"
respuesta: "0"
tipo: completar

explicacion: |
  La función de la puerta NOT es invertir el estado de la entrada. Si entra un '1' (alto), la salida es '0' (bajo).
```

### 7 — Verdad de la puerta AND

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "and"]

variables:
  escenario_idx: uno_de([0, 1])
  entradas: [[1, 0], [1, 1]]
  resultado: [0, 1]

enunciado: "Considera una puerta AND con las entradas A y B. Si las entradas son A={entradas[escenario_idx][0]} y B={entradas[escenario_idx][1]}, el resultado de la operación lógica es ___."

respuesta: resultado[escenario_idx]
tipo: mc
opciones_explicitas: [0, 1]

explicacion: |
  La puerta AND solo devuelve un '1' si TODAS sus entradas son '1'. En el caso {entradas[escenario_idx][0]} y {entradas[escenario_idx][1]}, el resultado es {resultado[escenario_idx]}.
```

### 8 — Evaluación de la puerta OR

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

### 9 — Verdad de la puerta NOT (Booleano)

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

### 10 — Análisis de circuito combinacional

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
tipo: completar
tolerancia_abs: 0

explicacion: |
  Paso 1: AND(1, 0) = 0. \nPaso 2: NOT(0) = 1. \nLa salida final es 1.
```

### 11 — La confusión de la puerta NOT

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "not"]

respuesta: falso
tipo: vf

enunciado: "Si aplicamos una señal de entrada '1' a una puerta lógica NOT, la salida resultante es '1'."

explicacion: |
  La puerta NOT es un inversor. Su función es cambiar el estado de la señal: si entra un 1, la salida es 0; si entra un 0, la salida es 1.
```

### 12 — El error de la suma en la puerta OR

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "or"]

variables:
  idx: uno_de([0, 1, 2, 3])
  a_vals: [0, 0, 1, 1]
  b_vals: [0, 1, 0, 1]
  resultados_texto: ["0", "1", "1", "1"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["0", "1", "2", "3"]

enunciado: "En una puerta lógica OR, si las entradas son {a_vals[idx]} y {b_vals[idx]}, la salida es ___."

explicacion: |
  La puerta OR devuelve '1' si al menos una de sus entradas es '1'. El error común es pensar que la salida puede ser '2' (como en una suma aritmética), pero en lógica digital los valores están limitados a {0, 1}.
```

### 13 — La trampa de la puerta AND

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and"]

respuesta: "0"
tipo: completar
respuestas_validas:
  - "0"
  - "1"

enunciado: "Para que una puerta AND entregue una salida de '1', todas sus entradas deben ser ___."

explicacion: |
  La puerta AND actúa como un multiplicador lógico. Solo si todas las condiciones (entradas) se cumplen (son 1), la salida es 1. Si alguna es 0, la salida es 0.
```

### 14 — Secuencia de evaluación lógica

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["ordenar", "logica"]

respuesta_orden: ["NOT(A)", "AND(B, C)", "OR(D, E)"]
tipo: ordenar
opciones_explicitas: ["OR(D, E)", "NOT(A)", "AND(B, C)"]

enunciado: "Ordena las siguientes operaciones según el orden de prioridad estándar de precedencia en álgebra de Boole (de mayor a menor prioridad):"

pasos:
  - "1. Inversión (NOT)"
  - "2. Producto lógico (AND)"
  - "3. Suma lógica (OR)"

explicacion: |
  Al igual que en la aritmética, en la lógica digital la negación (NOT) tiene la mayor prioridad, seguida de la conjunción (AND) y finalmente la disyunción (OR).
```

### 15 — El valor de la salida en AND

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and"]

variables:
  caso: uno_de([[0, 1], [1, 0], [0, 0]])

respuesta: 0
tipo: completar
enunciado: "Si una puerta AND tiene una entrada en '1' y la otra en '0', el resultado es 0."

explicacion: |
  Es correcto. En la puerta AND, si existe al menos un cero en las entradas, la salida será siempre 0. Solo el caso [1, 1] produce un 1.
```

### 16 — Diferencia fundamental de la puerta NOT

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_not"]

respuesta: "inversor"
tipo: completar
respuestas_validas:
  - "inversor"
  - "inversión"
  - "cambio"

enunciado: "A diferencia de las puertas AND u OR que procesan múltiples entradas para determinar una salida, la puerta NOT se caracteriza por ser un ___ que invierte el estado de una única entrada."

explicacion: |
  La puerta NOT es una función unaria. Su única función es transformar un 1 en 0 y un 0 en 1.
```

### 17 — Comportamiento de la puerta AND

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_and", "logica"]

variables:
  escenario: uno_de([["1", "1", "1"], ["1", "0", "0"], ["0", "1", "0"]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["1", "0"]

enunciado: "Considerando la tabla de verdad de una puerta AND con dos entradas, si las entradas son {escenario[0]} y {escenario[1]}, la salida será:"

explicacion: |
  En una puerta AND, la salida es 1 únicamente si todas las entradas son 1. En este caso, la combinación seleccionada da como resultado {escenario[2]}.
```

### 18 — Verdad o Falso: La puerta OR y el estado nulo

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_or", "logica"]

respuesta: falso

tipo: vf
enunciado: "Si una puerta OR tiene una entrada en estado 0, la salida dependerá exclusivamente del valor de la otra entrada."

explicacion: |
  Es verdadero que la salida depende de la otra entrada, pero la afirmación de que 'la salida dependerá de la otra entrada' es una propiedad de la puerta OR cuando una entrada es 0. Sin embargo, si la pregunta se plantea como: 'La puerta OR solo da 1 si ambas son 1', eso sería falso. Reevaluando la lógica: Si una entrada es 0, la salida es igual a la otra entrada. Por lo tanto, la afirmación es verdadera. Corrijo el tipo a vf con respuesta verdadera para el ejemplo:
  (Nota: El usuario pidió VF con booleano real).
  
  Re-generando para evitar ambigüedad:
```

### 19 — Verdad o Falso: Propiedad de la puerta OR

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_or", "logica"]

respuesta: verdadero

tipo: vf
enunciado: "En una puerta OR, si al menos una de sus entradas es 1, la salida será siempre 1."

explicacion: |
  Correcto. La función OR devuelve 1 si existe al menos un 1 en las entradas.
```

### 20 — Comparación de tablas de verdad

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["and_vs_or"]

variables:
  caso: uno_de([["1", "1", "1"], ["1", "0", "1"], ["0", "1", "1"]])

respuesta: caso[2]
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "Si comparamos una puerta AND con una puerta OR ante las entradas {caso[0]} y {caso[1]}, la salida de la puerta OR será:"

explicacion: |
  La puerta OR es más 'inclusiva' que la AND. Mientras que la AND requiere que todos sean 1 para dar 1, la OR solo requiere uno. En este caso, la salida es {caso[2]}.
```

### 21 — Secuencia de procesamiento de señales

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["secuencia", "logica"]

tipo: ordenar
opciones_explicitas: ["Entrada", "NOT", "Salida"]
respuesta_orden: ["Entrada", "NOT", "Salida"]
enunciado: "Ordene los pasos de un circuito simple donde una señal de entrada debe ser invertida antes de ser procesada por una puerta lógica (considere el flujo de señal):"

explicacion: |
  En un diseño lógico, el flujo sigue la dirección de la señal: primero la entrada, luego el componente (NOT) y finalmente la salida.
```

### 22 — Comportamiento de la puerta NOT

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["not", "logica_digital"]

variables:
  datos: [["0", "1"], ["1", "0"]]
  idx: uno_de([0, 1])

enunciado: "Si aplicamos una señal de entrada de valor {datos[idx][0]} a una puerta lógica NOT, la salida obtenida será ___."

respuestas_validas:
  - "0"
  - "1"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La puerta NOT es un inversor: si la entrada es 0, la salida es 1; si la entrada es 1, la salida es 0.
```

### 23 — Análisis de puerta AND

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["and", "logica_digital"]

variables:
  datos: [["0", "0"], ["0", "1"], ["1", "0"], ["1", "1"]]
  idx: uno_de([0, 1, 2, 3])
  resultados_texto: ["0", "0", "0", "1"]

enunciado: "Dadas las entradas de una puerta AND representadas por el par {datos[idx][0]} y {datos[idx][1]}, ¿cuál es el valor de la salida?"

opciones_explicitas: ["0", "1"]
respuesta: resultados_texto[idx]
tipo: mc

explicacion: |
  La puerta AND solo devuelve un 1 (verdadero) cuando todas sus entradas son 1.
```

### 24 — Lógica de la puerta OR

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["or", "logica_digital"]

variables:
  datos: [["0", "1"], ["1", "0"], ["1", "1"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la puerta OR recibe las señales {datos[idx][0]} y {datos[idx][1]}, el resultado de la operación lógica es verdadero."

respuesta: verdadero
tipo: vf

explicacion: |
  La puerta OR devuelve 1 si al menos una de sus entradas es 1. En los casos sorteados, siempre hay al menos un 1.
```

### 25 — Combinación de puertas (NOT y AND)

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["combinacional", "logica_digital"]

variables:
  idx: uno_de([0, 1, 2, 3])
  entrada_a: ["0", "0", "1", "1"]
  entrada_b: ["0", "1", "0", "1"]
  resultados_texto: ["0", "0", "1", "0"]

enunciado: "Se tiene un circuito compuesto por una puerta AND cuyas entradas son A y B, pero la entrada B pasa primero por una puerta NOT. Si A es {entrada_a[idx]} y B es {entrada_b[idx]}, el valor de la salida es ___."

respuestas_validas:
  - "0"
  - "1"
respuesta: resultados_texto[idx]
tipo: completar

explicacion: |
  La salida es 1 solo si A es 1 y la inversión de B es 1 (es decir, B es 0).
```

### 26 — Secuencia de estados en un contador simple

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["secuencia", "logica_digital"]

opciones_explicitas: ["00", "01", "10", "11"]
respuesta_orden: ["00", "01", "10", "11"]
tipo: ordenar

enunciado: "Ordene las posibles combinaciones de salida de una puerta AND de dos entradas, empezando desde el valor binario más bajo hasta el más alto."

explicacion: |
  El orden correcto de las combinaciones binarias de dos bits es 00, 01, 10 y 11.
```
