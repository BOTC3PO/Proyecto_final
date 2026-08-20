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
respuestas_validas: ["="]

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

respuesta: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

enunciado: "Ordena los siguientes elementos según la jerarquía de prioridad de operaciones en una fórmula de planilla de cálculo, de mayor a menor importancia:"

explicacion: |
  La jerarquía matemática se respeta en las planillas: primero lo que está entre paréntesis, luego potencias, luego multiplicación/división y finalmente suma/resta.
```