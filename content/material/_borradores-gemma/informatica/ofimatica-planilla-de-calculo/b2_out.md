### 1 — Referencia absoluta en presupuestos
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
respuestas_validas: ["A1", "B2", "$A$1"]

enunciado: "Si queremos fijar la celda A1 para que no cambie al arrastrar una fórmula hacia abajo, debemos usar una referencia tipo ___."

explicacion: |
  Para mantener una referencia fija (como el valor de un impuesto o un tipo de cambio), se utiliza el símbolo '$' antes de la letra y el número (ej. $A$1). Esto se conoce como referencia absoluta.
```

### 2 — Operación básica de suma
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
tipo: input
tolerancia_abs: 0

enunciado: "En una planilla, si la celda A1 contiene {val1} y la celda B1 contiene {val2}, ¿cuál es el resultado de la fórmula =SUMA(A1;B1)?"

pasos:
  - "Identificar los valores en las celdas A1 y B1."
  - "Sumar ambos valores: 15 + 25."

explicacion: |
  La función SUMA suma los valores de los rangos o celdas indicados. En este caso, 15 + 25 = 40.
```

### 3 — Identificación de operadores
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

### 4 — Lógica de fórmulas (Verdadero/Falso)
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

### 5 — Orden de ejecución de fórmulas
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["orden_operaciones"]

variables:
  f_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

respuesta: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]
tipo: ordenar
opciones_explicitas: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

enunciado: "Ordena las operaciones según la jerarquía de precedencia matemática que siguen las fórmulas en una planilla de cálculo:"

explicacion: |
  Al igual que en la matemática, las hojas de cálculo resuelven primero lo que está entre paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```