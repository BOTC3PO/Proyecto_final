### 1 — Diferencia entre Referencias Relativas y Absolutas
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

variables:
  tipo_ref: uno_de(["relativa", "absoluta"])

respuesta: tipo_ref == "absoluta"
tipo: vf

enunciado: "En una planilla de cálculo, la principal distinción de una referencia {tipo_ref} es que mantiene la posición de la celda fija aunque se copie la fórmula a otra ubicación, utilizando el signo $."

pasos:
  - "Identificar si la referencia cambia al arrastrar la fórmula."
  - "Observar la presencia del símbolo $ en la referencia."

explicacion: |
  Las referencias relativas (ej. A1) cambian según la posición donde se pegue la fórmula. Las referencias absolutas (ej. $A$1) permanecen constantes.
```

### 2 — El concepto de Rango de Celdas
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "rangos"]

respuesta: "A1:B2"
tipo: completar
respuestas_validas: ["A1:B2", "A1-B2", "A1...B2"]

enunciado: "Si queremos referirnos a un conjunto de celdas que abarca desde la celda A1 hasta la celda B2, la notación correcta para representar este rango es ___."

explicacion: |
  En las planillas de cálculo, los rangos se definen utilizando los dos puntos (:) para indicar el origen y el destino del área seleccionada.
```

### 3 — Fórmulas vs. Funciones
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

### 4 — Operadores de Comparación
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

### 5 — Orden de Precedencia de Operadores
```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "orden_operaciones"]

opciones_explicitas: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]

respuesta: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]
tipo: ordenar

enunciado: "Ordene los siguientes elementos según el orden de prioridad (precedencia) en el que la planilla de cálculo resuelve las operaciones en una fórmula:"

pasos:
  - "Observar los símbolos de agrupación."
  - "Observar las operaciones aritméticas básicas."

explicacion: |
  El orden de prioridad estándar sigue la jerarquía matemática: primero se resuelven los paréntesis, luego potencias, después multiplicación/división y finalmente suma/resta.
```