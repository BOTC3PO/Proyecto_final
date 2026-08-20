# Informatica — Ofimatica planilla de calculo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de celda

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["conceptos", "celda"]

tipo: mc
opciones_explicitas: ["La intersección de una fila y una columna", "El espacio para escribir texto solamente", "Una función matemática predefinida", "El comando para guardar el archivo"]

respuesta: "La intersección de una fila y una columna"

enunciado: "En una planilla de cálculo, la unidad básica de información se denomina ___."

explicacion: |
  Cada celda se identifica por la combinación de su letra de columna y su número de fila (ej. A1).
```

### 2 — Referencias de celda

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["referencias", "celdas"]

tipo: vf

enunciado: "Si una celda tiene la referencia $A$1, esto significa que la columna A está fijada (referencia absoluta) y la fila 1 es relativa."

respuesta: falso

explicacion: |
  El símbolo $ antes de la letra fija la columna, y el símbolo $ antes del número fija la fila. En $A$1, ambos están fijados.
```

### 3 — Estructura de una fórmula

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "sintaxis"]

tipo: completar
respuestas_validas:
  - "="

respuesta: "="

enunciado: "Para que una celda reconozca que el contenido ingresado es una fórmula y no un texto simple, el primer carácter debe ser ___."

explicacion: |
  Toda fórmula o función en una planilla de cálculo debe comenzar obligatoriamente con el signo igual (=).
```

### 4 — Operadores aritméticos

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores", "aritmética"]

tipo: mc
opciones_explicitas: ["*", "/", "+", "-"]

respuesta: "*"

enunciado: "En una planilla de cálculo, el operador utilizado para representar la multiplicación es ___."

explicacion: |
  Los operadores básicos son: + (suma), - (resta), * (multiplicación) y / (división).
```

### 5 — Orden de operaciones

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["prioridad", "operaciones"]

tipo: ordenar

opciones_explicitas: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

respuesta_orden: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

enunciado: "Ordena los siguientes elementos según la jerarquía de prioridad de operaciones en una fórmula de planilla de cálculo, de mayor a menor importancia:"

explicacion: |
  La jerarquía matemática se respeta en las planillas: primero lo que está entre paréntesis, luego potencias, luego multiplicación/división y finalmente suma/resta.
```

### 6 — Referencia absoluta en presupuestos

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

variables:
  tipo_referencia: uno_de(["absoluta", "relativa"])
  valor_celda: 100

respuesta: "A1"
tipo: completar
respuestas_validas:
  - "A1"
  - "B2"
  - "$A$1"

enunciado: "Si queremos fijar la celda A1 para que no cambie al arrastrar una fórmula hacia abajo, debemos usar una referencia tipo ___."

explicacion: |
  Para mantener una referencia fija (como el valor de un impuesto o un tipo de cambio), se utiliza el símbolo '$' antes de la letra y el número (ej. $A$1). Esto se conoce como referencia absoluta.
```

### 7 — Operación básica de suma

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas"]

variables:
  val1: 15
  val2: 25

respuesta: 40
tipo: completar
tolerancia_abs: 0

enunciado: "En una planilla, si la celda A1 contiene {val1} y la celda B1 contiene {val2}, ¿cuál es el resultado de la fórmula =SUMA(A1;B1)?"

pasos:
  - "Identificar los valores en las celdas A1 y B1."
  - "Sumar ambos valores: 15 + 25."

explicacion: |
  La función SUMA suma los valores de los rangos o celdas indicados. En este caso, 15 + 25 = 40.
```

### 8 — Identificación de operadores

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores"]

variables:
  op_multi: "*"
  op_div: "/"

respuesta: "*"
tipo: mc
opciones_explicitas: ["+", "*", "/", "-"]

enunciado: "Para realizar una multiplicación entre la celda A1 y la celda B1 en una fórmula de planilla de cálculo, se debe utilizar el operador: ___."

explicacion: |
  En las hojas de cálculo, el asterisco (*) representa la multiplicación, el signo más (+) la suma, el signo menos (-) la resta y la barra diagonal (/) la división.
```

### 9 — Lógica de fórmulas (Verdadero/Falso)

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["logica", "celdas"]

variables:
  condicion: falso

respuesta: falso
tipo: vf

enunciado: "Si una celda A1 tiene el valor 10, la expresión lógica =A1>20 devuelve el valor booleano verdadero."

explicacion: |
  La expresión evalúa si 10 es mayor que 20. Como esto es falso, el resultado de la comparación es el booleano falso.
```

### 10 — Orden de ejecución de fórmulas

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["orden_operaciones"]

variables:
  f_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

respuesta_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]
tipo: ordenar
opciones_explicitas: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

enunciado: "Ordena las operaciones según la jerarquía de precedencia matemática que siguen las fórmulas en una planilla de cálculo:"

explicacion: |
  Al igual que en la matemática, las hojas de cálculo resuelven primero lo que está entre paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```

### 11 — Referencias relativas vs. absolutas

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias", "formulas"]

variables:
  datos: [["A1", "A2"], ["B5", "B6"]]
  idx: uno_de([0, 1])
  ref_origen: datos[idx][0]
  ref_destino: datos[idx][1]

enunciado: "Si arrastras la fórmula {ref_origen} hacia abajo una fila, la referencia cambiará a {ref_destino} si la referencia es relativa."

respuesta: verdadero
tipo: vf

explicacion: |
  Las referencias relativas (sin $) cambian automáticamente al copiar la fórmula a otra celda. Las referencias absolutas (con $) permanecen fijas.
```

### 12 — El error del operador de texto

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["errores", "sintaxis"]

enunciado: |
  ¿Cuál es la forma correcta de escribir la función SUMA para sumar el rango A1:A5 en una planilla de cálculo?

opciones_explicitas: ["=SUMA(A1:A5)", "SUMA(A1:A5)", "SUMA(A1;A5)", "SUMA(A1,A5)"]

respuesta: "=SUMA(A1:A5)"
tipo: mc

explicacion: |
  En una planilla de cálculo, toda fórmula o función debe comenzar obligatoriamente con el signo igual (=).
```

### 13 — Orden de precedencia de operadores

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "precedencia"]

enunciado: "Si en la celda A1 tenemos 10, en A2 tenemos 5 y en A3 tenemos 2, ¿cuál es el orden de evaluación de la fórmula =A1+A2*A3?"

pasos:
  - "Primero se identifica la multiplicación"
  - "Luego se identifica la suma"

opciones_explicitas: ["A1+A2 y luego *A3", "A2*A3 y luego +A1"]

respuesta: "A2*A3 y luego +A1"
tipo: mc

explicacion: |
  Siguiendo la jerarquía de operaciones matemáticas, la multiplicación tiene prioridad sobre la suma.
```

### 14 — Error de referencia circular

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["errores", "logica"]

enunciado: "Si en la celda A1 escribes la fórmula =A1+10, el programa detectará un error de tipo ___."

respuestas_validas:
  - "circular"
  - "referencia"

respuesta: "circular"
tipo: completar

explicacion: |
  Una referencia circular ocurre cuando una fórmula intenta calcular su propio valor, creando un bucle infinito.
```

### 15 — El uso del símbolo de dólar

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["referencias", "absolutas"]

enunciado: "Para fijar la columna A pero permitir que la fila cambie al arrastrar hacia abajo, la referencia correcta es ___."

respuestas_validas:
  - "$A1"
  - "A$1"
  - "$A$1"
  - "A1"

respuesta: "$A1"
tipo: completar

explicacion: |
  El signo $ antes de la letra fija la columna, mientras que el signo $ antes del número fija la fila.
```

### 16 — Diferencia entre Referencias Relativas y Absolutas

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

variables:
  tipo_ref: uno_de(["relativa", "absoluta"])

respuesta: tipo_ref == "absoluta"
tipo: completar
enunciado: "En una planilla de cálculo, la principal distinción de una referencia {tipo_ref} es que mantiene la posición de la celda fija aunque se copie la fórmula a otra ubicación, utilizando el signo $."

pasos:
  - "Identificar si la referencia cambia al arrastrar la fórmula."
  - "Observar la presencia del símbolo $ en la referencia."

explicacion: |
  Las referencias relativas (ej. A1) cambian según la posición donde se pegue la fórmula. Las referencias absolutas (ej. $A$1) permanecen constantes.
```

### 17 — El concepto de Rango de Celdas

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "rangos"]

respuesta: "A1:B2"
tipo: completar
respuestas_validas:
  - "A1:B2"
  - "A1-B2"
  - "A1...B2"

enunciado: "Si queremos referirnos a un conjunto de celdas que abarca desde la celda A1 hasta la celda B2, la notación correcta para representar este rango es ___."

explicacion: |
  En las planillas de cálculo, los rangos se definen utilizando los dos puntos (:) para indicar el origen y el destino del área seleccionada.
```

### 18 — Fórmulas vs. Funciones

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "funciones"]

opciones_explicitas: ["Una fórmula es una expresión escrita por el usuario, mientras que una función es una fórmula predefinida por el programa.", "Una fórmula es una función, mientras que una función es una fórmula.", "No existe diferencia entre ambas.", "Las fórmulas solo usan números y las funciones solo usan texto."]

respuesta: "Una fórmula es una expresión escrita por el usuario, mientras que una función es una fórmula predefinida por el programa."
tipo: mc

enunciado: "Al comparar el uso de fórmulas y funciones en una celda, ¿cuál es la distinción fundamental?"

explicacion: |
  Una fórmula es cualquier expresión que comienza con "=" (ej. =A1+A2), mientras que una función es un componente de la fórmula ya programado (ej. SUMA, PROMEDIO) que realiza un cálculo específico.
```

### 19 — Operadores de Comparación

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "logica"]

respuesta: falso
tipo: vf

enunciado: "En una fórmula de planilla de cálculo, el operador '=' se utiliza exclusivamente para asignar un valor a una celda, y no puede ser usado para comparar si dos valores son iguales."

explicacion: |
  El signo '=' tiene una doble función: inicia una fórmula y actúa como operador de comparación lógica para evaluar la igualdad entre dos expresiones.
```

### 20 — Orden de Precedencia de Operadores

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "orden_operaciones"]

opciones_explicitas: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]

respuesta_orden: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]
tipo: ordenar

enunciado: "Ordene los siguientes elementos según el orden de prioridad (precedencia) en el que la planilla de cálculo resuelve las operaciones en una fórmula:"

pasos:
  - "Observar los símbolos de agrupación."
  - "Observar las operaciones aritméticas básicas."

explicacion: |
  El orden de prioridad estándar sigue la jerarquía matemática: primero se resuelven los paréntesis, luego potencias, después multiplicación/división y finalmente suma/resta.
```

### 21 — Referencias relativas vs absolutas

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["excel", "celdas", "referencias"]

variables:
  datos: [["A1", "A2", "B1"], ["C5", "C6", "D5"], ["F10", "F11", "G10"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si en la celda B1 escribimos la fórmula ={datos[idx][0]}*{datos[idx][1]} y arrastramos el controlador de relleno hacia abajo una fila, la fórmula en la celda B2 será ___."

respuestas_validas:
  - "A2*A2"
  - "C6*C6"
  - "F11*F11"

respuesta: "{datos[idx][2]}"
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al arrastrar una referencia relativa (sin $) hacia abajo, la fila aumenta automáticamente. Como el primer término es una referencia a una celda, esta cambia de A1 a A2, C5 a C6, o F10 a F11.
```

### 22 — Operaciones aritméticas básicas

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "operaciones"]

variables:
  valores: [[10, 5, 2], [20, 4, 3], [50, 2, 10]]
  idx: uno_de([0, 1, 2])
  a: valores[idx][0]
  b: valores[idx][1]
  c: valores[idx][2]
  resultado: a + b * c

enunciado: "En una planilla, la celda A1 tiene el valor {a}, la A2 tiene {b} y la A3 tiene {c}. Si en A4 escribimos la fórmula ={a} + {b} * {c}, ¿cuál es el resultado?"

tipo: completar
respuesta: resultado
tolerancia_abs: 0

explicacion: |
  Por la jerarquía de operaciones, la multiplicación se realiza antes que la suma. 
  En el caso actual: {a} + ({b} * {c}).
```

### 23 — Uso de la función SUMA

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["funciones", "suma"]

variables:
  datos: [[10, 20, 30], [10, 10, 10], [100, 200, 300]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos los valores {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en las celdas A1, A2 y A3 respectivamente, ¿cuál es el resultado de aplicar la función =SUMA(A1:A3)?"

opciones_explicitas: [30, 60, 65, 90, 600]

respuesta: datos[idx][0] + datos[idx][1] + datos[idx][2]
tipo: mc

explicacion: |
  La función SUMA con el operador de rango ':' suma todos los valores comprendidos entre la celda inicial y la final.
```

### 24 — Verdadero o Falso: Caracteres de texto

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formato", "texto"]

enunciado: "En una planilla de cálculo, si queremos que una celda muestre el texto 'Hola Mundo' como parte de una fórmula, debemos escribirlo entre comillas, por ejemplo: =CONCATENAR(\"Hola\", \" \", \"Mundo\")."

tipo: vf

respuesta: verdadero

explicacion: |
  Para que una planilla de cálculo interprete una cadena de caracteres como texto y no como una función o nombre de variable, los valores textuales deben ir entre comillas dobles.
```

### 25 — Orden lógico de evaluación

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["jerarquia", "operadores"]

enunciado: "Para resolver una fórmula compleja que combina sumas, multiplicaciones y paréntesis, ¿cuál es el orden correcto de ejecución que sigue el motor de la planilla?"

opciones_explicitas:
  - "Paréntesis"
  - "Potencias"
  - "Multiplicación/División"
  - "Suma/Resta"

respuesta_orden: ["Paréntesis", "Potencias", "Multiplicación/División", "Suma/Resta"]

explicacion: |
  Las hojas de cálculo siguen la jerarquía matemática estándar (PEMDAS/BODMAS): primero se resuelven los paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```
