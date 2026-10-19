# Electrónica — Compuertas NAND, NOR, XOR y universalidad (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — NAND

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nand"]

enunciado: "Una compuerta NAND de dos entradas da salida 0 cuando..."
tipo: mc
opciones_explicitas:
  - "Ambas entradas son 1"
  - "Alguna entrada es 1"
  - "Ambas entradas son 0"
respuesta: "Ambas entradas son 1"

explicacion: |
  Es un AND seguido de un NOT.
```

### 2 — NOR

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nor"]

enunciado: "Una compuerta NOR de dos entradas da salida 1 cuando..."
tipo: mc
opciones_explicitas:
  - "Ambas entradas son 0"
  - "Alguna entrada es 1"
  - "Ambas entradas son 1"
respuesta: "Ambas entradas son 0"

explicacion: |
  Es un OR seguido de un NOT.
```

### 3 — XOR

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["xor"]

enunciado: "Una compuerta XOR da salida 1 cuando..."
tipo: mc
opciones_explicitas:
  - "Las entradas son diferentes"
  - "Las entradas son iguales"
  - "Ambas entradas son 0"
respuesta: "Las entradas son diferentes"

explicacion: |
  Es el OR exclusivo.
```

### 4 — XNOR

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor"]

enunciado: "Una compuerta XNOR da salida 1 cuando..."
tipo: mc
opciones_explicitas:
  - "Las entradas son iguales"
  - "Las entradas son diferentes"
  - "Alguna entrada es 0"
respuesta: "Las entradas son iguales"

explicacion: |
  Es la negación de la XOR.
```

### 5 — NAND (1 y 1)

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nand", "calculo"]

variables:
  a: 1
  b: 1
  s: 1 - a * b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una NAND cuando A = {a} y B = {b}?"

pasos:
  - "NAND = NOT (A AND B)"

explicacion: |
  1 AND 1 = 1, negado da 0.
```

### 6 — NAND con entradas sorteadas

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nand", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: 1 - a * b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una NAND cuando A = {a} y B = {b}?"

pasos:
  - "NAND = NOT (A AND B)"

explicacion: |
  La NAND da 0 solo si ambas entradas son 1.
```

### 7 — NOR con entradas sorteadas

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["nor", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: 1 - max(a, b)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una NOR cuando A = {a} y B = {b}?"

pasos:
  - "NOR = NOT (A OR B)"

explicacion: |
  La NOR da 1 solo si ambas entradas son 0.
```

### 8 — XOR con entradas sorteadas

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["xor", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: abs(a - b)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una XOR cuando A = {a} y B = {b}?"

pasos:
  - "XOR = 1 si las entradas son distintas"

explicacion: |
  La salida es 1 cuando difieren.
```

### 9 — XNOR con entradas sorteadas

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: 1 - abs(a - b)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale la salida (0 o 1) de una XNOR cuando A = {a} y B = {b}?"

pasos:
  - "XNOR = NOT XOR"

explicacion: |
  La salida es 1 cuando son iguales.
```

### 10 — Cantidad de combinaciones

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["tabla_verdad", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  f: 2 ^ n

respuesta: f
tipo: input
tolerancia_abs: 0

enunciado: "Una función lógica tiene {n} entradas. ¿Cuántas filas tiene su tabla de verdad?"

pasos:
  - "Filas = 2^n"

explicacion: |
  Cada entrada duplica las combinaciones.
```

### 11 — NAND universal

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["universalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Con compuertas NAND se puede construir cualquier función lógica."

explicacion: |
  Por eso la NAND es una compuerta universal.
```

### 12 — NOR universal

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "basico"
  tags: ["universalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Con compuertas NOR se puede construir cualquier función lógica."

explicacion: |
  La NOR también es universal.
```

### 13 — AND universal

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["universalidad"]

respuesta: falso
tipo: vf

enunciado: "Con compuertas AND solamente se puede construir cualquier función lógica."

explicacion: |
  Con AND no se puede obtener la negación.
```

### 14 — NOT con NAND

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["universalidad"]

enunciado: "Para obtener un NOT con una compuerta NAND se..."
tipo: mc
opciones_explicitas:
  - "Unen sus dos entradas"
  - "Deja una entrada sin conectar"
  - "Conecta una entrada a masa y otra a la alimentación"
respuesta: "Unen sus dos entradas"

explicacion: |
  NAND(A, A) = NOT A.
```

### 15 — De Morgan 1

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["demorgan"]

enunciado: "Según De Morgan, NOT (A · B) es igual a..."
tipo: mc
opciones_explicitas:
  - "NOT A + NOT B"
  - "NOT A · NOT B"
  - "A + B"
respuesta: "NOT A + NOT B"

explicacion: |
  La negación de un producto es la suma de las negaciones.
```

### 16 — De Morgan 2

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["demorgan"]

enunciado: "Según De Morgan, NOT (A + B) es igual a..."
tipo: mc
opciones_explicitas:
  - "NOT A · NOT B"
  - "NOT A + NOT B"
  - "A · B"
respuesta: "NOT A · NOT B"

explicacion: |
  La negación de una suma es el producto de las negaciones.
```

### 17 — NAND como OR

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "avanzado"
  tags: ["demorgan"]

enunciado: "Una compuerta NAND equivale a un OR con..."
tipo: mc
opciones_explicitas:
  - "Las entradas invertidas"
  - "La salida a masa"
  - "Las entradas puestas en cero"
respuesta: "Las entradas invertidas"

explicacion: |
  Es consecuencia de De Morgan.
```

### 18 — Circuito integrado

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["nand", "aplicaciones"]

enunciado: "El circuito integrado 7400 contiene..."
tipo: mc
opciones_explicitas:
  - "Cuatro compuertas NAND de dos entradas"
  - "Un microcontrolador"
  - "Un amplificador operacional"
respuesta: "Cuatro compuertas NAND de dos entradas"

explicacion: |
  Es un ejemplo clásico de la familia TTL.
```

### 19 — Simplificar

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["algebra"]

respuesta: verdadero
tipo: vf

enunciado: "Simplificar una expresión booleana permite implementarla con menos compuertas."

explicacion: |
  Baja el costo, el consumo y los retardos.
```

### 20 — Absorción

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "avanzado"
  tags: ["algebra"]

respuesta: verdadero
tipo: vf

enunciado: "La expresión A + A·B es equivalente a A."

explicacion: |
  Es la ley de absorción.
```

### 21 — XOR y suma

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de dos bits, sin considerar el acarreo, se obtiene con una compuerta XOR."

explicacion: |
  0+0=0, 0+1=1, 1+0=1 y 1+1=0 con acarreo 1.
```

### 22 — Compuerta comparadora

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "intermedio"
  tags: ["xor"]

tipo: completar
enunciado: "La compuerta que da 1 cuando las dos entradas son iguales se llama ___."
respuestas_validas:
  - "XNOR"
  - "xnor"

explicacion: |
  Se usa como comparador de igualdad.
```

### 23 — Equivalencia de expresiones

```
metadata:
  materia: "electronica"
  tema: "compuertas_nand_nor_xor_y_universalidad"
  nivel: "avanzado"
  tags: ["tabla_verdad"]

enunciado: "Dos expresiones lógicas son equivalentes si..."
tipo: mc
opciones_explicitas:
  - "Dan la misma salida para todas las combinaciones de entrada"
  - "Tienen la misma cantidad de compuertas"
  - "Usan las mismas variables en el mismo orden"
respuesta: "Dan la misma salida para todas las combinaciones de entrada"

explicacion: |
  Se verifica con la tabla de verdad.
```
