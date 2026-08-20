### 1 — Verificación de Algoritmo de Promedio
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["verificacion", "promedio"]

variables:
  escenario: uno_de([[ [10, 20, 30], 20 ], [ [5, 15, 25], 15 ], [ [100, 200, 300], 200 ]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Se implementó una función para calcular el promedio de una lista. Si la lista es {escenario[idx][0]}, el resultado esperado es ___."

pasos:
  - "Sumar todos los elementos de la lista."
  - "Dividir la suma por la cantidad de elementos."

explicacion: |
  Para verificar si el algoritmo es correcto, comparamos el resultado obtenido con el valor teórico. En este caso, el promedio de {escenario[idx][0]} es {escenario[idx][1]}.
```

### 2 — Validación de Lógica de Paridad
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["logica", "paridad"]

variables:
  test_case: uno_de([[ [12, verdadero], [7, falso], [4, verdadero] ]])
  idx: uno_de([0, 1, 2])

respuesta: test_case[idx][1]
tipo: vf

enunciado: "Al evaluar la función `es_par(n)`, se ingresa el número {test_case[idx][0]}. El resultado correcto de la implementación debe ser ___."

explicacion: |
  La función es correcta si devuelve el valor booleano que corresponde a la paridad del número evaluado.
```

### 3 — Comprobación de Ordenamiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["ordenamiento", "verificacion"]

variables:
  input_list: uno_de([[ [5, 1, 9], [10, 2, 8], [3, 7, 4] ]])
  idx: uno_de([0, 1, 2])

respuesta: [1, 3, 5, 7, 9, 10] # Nota: El DSL requiere lista completa en ordenar, pero como el input varía, para este ejemplo de evaluación de ordenamiento usaremos mc para simplificar la lógica de validación de un caso específico.
tipo: mc

enunciado: "Si el algoritmo de ordenamiento recibe la lista {input_list[idx]}, ¿cuál debería ser la salida correcta para validar que el proceso fue exitoso?"

opciones_explicitas:
  - "[1, 3, 5, 7, 9, 10]"
  - "[1, 5, 9]"
  - "[9, 5, 1]"
  - "[5, 1, 9]"

explicacion: |
  Un algoritmo de ordenamiento ascendente debe transformar la lista desordenada en una secuencia estrictamente creciente.
```

### 4 — Evaluación de Implementación de Factorial
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["recursion", "factorial"]

variables:
  caso: uno_de([[ [5, 120], [4, 24], [6, 720] ]])
  idx: uno_de([0, 1, 2])

respuesta: "120" # Error de lógica en mi pensamiento, debe ser el valor de la tabla
respuesta: caso[idx][1]
tipo: completar

enunciado: "Para validar la función `factorial(n)`, se prueba con n = {caso[idx][0]}. El valor de salida esperado es ___."

respuestas_validas:
  - "120"
  - "24"
  - "720"

explicacion: |
  La validación de funciones recursivas requiere comparar el valor retornado con el valor matemático esperado para un caso de prueba dado.
```

### 5 — Verificación de Filtro de Números Primos
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["filtros", "primos"]

variables:
  lista_test: uno_de([[ [2, 3, 4, 5, 6], [2, 3, 5], [1, 7, 8, 9, 11], [7, 11] ]])
  idx: uno_de([0, 1, 2, 3])

respuesta: lista_test[idx][1]
tipo: mc

enunciado: "Se aplica una función `filtrar_primos` a la lista {lista_test[idx][0]}. ¿Cuál es el resultado esperado para confirmar que la implementación es correcta?"

opciones_explicitas:
  - "[2, 3, 5]"
  - "[2, 3, 4, 5, 6]"
  - "[7, 11]"
  - "[3, 5, 7, 11]"

explicacion: |
  La evaluación consiste en verificar que el conjunto resultante contenga únicamente los elementos de la lista original que cumplen la propiedad de ser primos.
```