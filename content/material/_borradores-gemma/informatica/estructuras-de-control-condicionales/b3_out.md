### 1 — El error del bloque vacío
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["error_comun", "if_else"]

variables:
  escenario: uno_de([
    ["if (x > 0) \n  print('Positivo')", "error_sintaxis"],
    ["if (x > 0) \n  print('Positivo') \n print('Siempre sale')", "error_logica"]
  ])

enunciado: "Observa el siguiente código: {escenario[0]}. Si el programador quería que el segundo 'print' SOLO se ejecute si x > 0, pero lo escribió fuera de la indentación, ¿qué tipo de error ha cometido?"

opciones_explicitas: ["error_de_sintaxis", "error_de_logica", "error_de_tipo", "no hay error"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  El código es sintácticamente correcto (no dará error al compilar), pero la lógica es errónea porque el segundo comando se ejecutará siempre, independientemente de la condición.
```

### 2 — Comparación vs Asignación
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["confusión_operadores"]

variables:
  caso: uno_de([
    ["if (edad = 18) { ... }", "error_sintaxis"],
    ["if (edad == 18) { ... }", "correcto"]
  ])

enunciado: "En muchos lenguajes de programación, intentar usar un solo signo de igual '{caso[0]}' dentro de una condición 'if' en lugar de un doble signo de igual suele provocar un error de tipo {caso[0][0]} o un comportamiento inesperado. ¿Cuál es el operador correcto para comparar igualdad?"

opciones_explicitas: ["=", "==", "!=", "<=>"]
respuesta: "=="
tipo: mc

explicacion: |
  El signo '=' se usa para asignación (dar un valor a una variable), mientras que '==' se usa para comparación (verificar si dos valores son iguales).
```

### 3 — El valor de verdad de un objeto
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["truthy_falsy"]

enunciado: "En lenguajes como Python o JavaScript, una lista vacía [] o el número 0 se evalúan como ___ en una estructura condicional 'if'. (Escribe 'falso' o 'verdadero')"

respuestas_validas: ["falso"]
respuesta: "falso"
tipo: completar

explicacion: |
  En la evaluación de contextos booleanos (truthy/falsy), los valores vacíos, el cero y el valor null/none se consideran falsos.
```

### 4 — Evaluación de condiciones compuestas
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["lógica_booleana"]

variables:
  test: uno_de([
    [10, 20, 30],
    [5, 15, 25]
  ])
  idx: uno_de([0, 1])

enunciado: "Si tenemos la expresión: 'if (x > 5 && x < 15)'. Si x es {test[idx][1]}, ¿cuál es el resultado booleano de la condición?"

opciones_explicitas: [verdadero, falso]
respuesta: falso
tipo: mc

explicacion: |
  Como el operador '&&' (AND) requiere que AMBAS condiciones sean verdaderas, y 20 no es menor que 15, el resultado es falso.
```

### 5 — Flujo de ejecución en estructuras anidadas
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "avanzado"
  tags: ["anidamiento"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al evaluar una estructura 'if-elif-else' para encontrar la primera coincidencia verdadera:"

opciones_explicitas: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
respuesta: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
tipo: ordenar

explicacion: |
  Las estructuras condicionales múltiples se evalúan de arriba hacia abajo. En cuanto se encuentra una condición verdadera, se ejecuta su bloque y se salta el resto de la estructura.
```