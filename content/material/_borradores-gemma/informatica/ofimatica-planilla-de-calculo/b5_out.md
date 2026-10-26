### 1 — Referencias relativas vs absolutas
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["excel", "celdas", "referencias"]

variables:
  escenario: uno_de([["A1", "A2", "B1"], ["C5", "C6", "D5"], ["F10", "F11", "G10"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si en la celda B1 escribimos la fórmula ={escenario[idx][0]}*{escenario[idx][1]} y arrastramos el controlador de relleno hacia abajo una fila, la fórmula en la celda B2 será ___."

respuestas_validas:
  - "A2*A2"
  - "C6*C6"
  - "F11*F11"

tipo: completar

explicacion: |
  Al arrastrar una referencia relativa (sin $) hacia abajo, la fila aumenta automáticamente. Como el primer término es una referencia a una celda, esta cambia de A1 a A2, C5 a C6, o F10 a F11.
```

### 2 — Operaciones aritméticas básicas
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "operaciones"]

variables:
  valores: [[10, 5, 2], [20, 4, 3], [50, 2, 10]]
  idx: uno_de([0, 1, 2])

enunciado: "En una planilla, la celda A1 tiene el valor {valores[idx][0]}, la A2 tiene {valores[idx][1]} y la A3 tiene {valores[idx][2]}. Si en A4 escribimos la fórmula ={valores[idx][0]} + {valores[idx][1]} * {valores[idx][2]}, ¿cuál es el resultado?"

tipo: input
tolerancia_abs: 0

explicacion: |
  Por la jerarquía de operaciones, la multiplicación se realiza antes que la suma. 
  En el caso actual: {valores[idx][0]} + ({valores[idx][1]} * {valores[idx][2]}).
```

### 3 — Uso de la función SUMA
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["funciones", "suma"]

variables:
  datos: [[10, 20, 30], [5, 5, 5], [100, 200, 300]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos los valores {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en las celdas A1, A2 y A3 respectivamente, ¿cuál es el resultado de aplicar la función =SUMA(A1:A3)?"

opciones_explicitas:
  - "30"
  - "60"
  - "65"
  - "90"
  - "600"

tipo: mc

explicacion: |
  La función SUMA con el operador de rango ':' suma todos los valores comprendidos entre la celda inicial y la final.
```

### 4 — Verdadero o Falso: Caracteres de texto
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formato", "texto"]

enunciado: "En una planilla de cálculo, si queremos que una celda muestre el texto 'Hola Mundo' como parte de una fórmula, debemos escribirlo entre comillas, por ejemplo: =CONCATENAR(""Hola"", "" "", ""Mundo"")."

tipo: vf

respuesta: verdadero

explicacion: |
  Para que una planilla de cálculo interprete una cadena de caracteres como texto y no como una función o nombre de variable, los valores textuales deben ir entre comillas dobles.
```

### 5 — Orden lógico de evaluación
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["jerarquia", "operadores"]

enunciado: "Para resolver una fórmula compleja que combina sumas, multiplicaciones y paréntesis, ¿cuál es el orden correcto de ejecución que sigue el motor de la planilla?"

opciones_explicitas:
  - "1. Paréntesis, 2. Potencias, 3. Multiplicación/División, 4. Suma/Resta"
  - "1. Suma/Resta, 2. Multiplicación/División, 3. Paréntesis"
  - "1. Multiplicación, 2. Paréntesis, 3. Suma"

tipo: ordenar

respuesta: ["1. Paréntesis, 2. Potencias, 3. Multiplicación/División, 4. Suma/Resta"]

explicacion: |
  Las hojas de cálculo siguen la jerarquía matemática estándar (PEMDAS/BODMAS): primero se resuelven los paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```