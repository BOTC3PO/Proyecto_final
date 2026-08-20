### 1 — Referencias relativas vs. absolutas
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias", "formulas"]

variables:
  idx: uno_de([0, 1])
  datos: [["A1", "A2"], ["B5", "B6"]]

enunciado: "Si arrastras la fórmula {$datos[idx][0]} hacia abajo una fila, la referencia cambiará a {$datos[idx][1]} si la referencia es relativa."

respuesta: verdadero
tipo: vf

explicacion: |
  Las referencias relativas (sin $) cambian automáticamente al copiar la fórmula a otra celda. Las referencias absolutas (con $) permanecen fijas.
```

### 2 — El error del operador de texto
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["errores", "sintaxis"]

opciones_explicitas: ["=SUMA(A1:A5)", "SUMA(A1:A5)", "SUMA(A1;A5)", "SUMA(A1,A5)"]

respuesta: "=SUMA(A1:A5)"
tipo: mc

explicacion: |
  En una planilla de cálculo, toda fórmula o función debe comenzar obligatoriamente con el signo igual (=).
```

### 3 — Orden de precedencia de operadores
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

### 4 — Error de referencia circular
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["errores", "logica"]

enunciado: "Si en la celda A1 escribes la fórmula =A1+10, el programa detectará un error de tipo ___."

respuestas_validas: ["circular", "referencia"]

respuesta: "circular"
tipo: completar

explicacion: |
  Una referencia circular ocurre cuando una fórmula intenta calcular su propio valor, creando un bucle infinito.
```

### 5 — El uso del símbolo de dólar
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["referencias", "absolutas"]

enunciado: "Para fijar la columna A pero permitir que la fila cambie al arrastrar hacia abajo, la referencia correcta es ___."

respuestas_validas: ["$A1", "A$1", "$A$1", "A1"]

respuesta: "$A1"
tipo: completar

explicacion: |
  El signo $ antes de la letra fija la columna, mientras que el signo $ antes del número fija la fila.
```