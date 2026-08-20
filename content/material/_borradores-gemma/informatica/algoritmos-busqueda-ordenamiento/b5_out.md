### 1 — Búsqueda en una lista desordenada
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

variables:
  escenario: [[ [12, 45, 7, 23, 56], 23 ], [ [5, 18, 2, 9, 31], 9 ], [ [10, 40, 20, 50, 30], 40 ]]
  idx: uno_de([0, 1, 2])
  lista: escenario[idx][0]
  objetivo: escenario[idx][1]

respuesta: "lineal"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Si queremos encontrar el elemento {objetivo} en la lista {lista} sin saber si está ordenada, ¿qué tipo de búsqueda es la única garantizada para encontrarlo?"

explicacion: |
  En una lista desordenada, la búsqueda binaria no funciona porque requiere que los elementos sigan un orden. Por lo tanto, debemos recorrer la lista elemento por elemento, lo que se conoce como búsqueda lineal.
```

### 2 — Requisito de la búsqueda binaria
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda_binaria", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar el algoritmo de búsqueda binaria de manera eficiente, la lista de datos debe estar previamente ordenada."

explicacion: |
  La búsqueda binaria funciona dividiendo el rango de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, es indispensable que los elementos estén ordenados.
```

### 3 — Pasos del ordenamiento de burbuja
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]
tipo: ordenar

enunciado: "Indica el orden lógico de las operaciones básicas que realiza el algoritmo de ordenamiento de burbuja (Bubble Sort) para ordenar una lista de menor a mayor:"

explicacion: |
  El método de burbuja compara parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este ciclo hasta que no haya más intercambios necesarios.
```

### 4 — Completa el concepto de complejidad
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["complejidad", "big_o"]

variables:
  caso: [[ "O(n)", "lineal" ], [ "O(log n)", "logarítmica" ]]
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas: ["lineal", "logarítmica"]

enunciado: "La complejidad temporal de la búsqueda binaria en el mejor de los casos de éxito (encontrar el elemento justo en el medio) se describe como ___."

explicacion: |
  Aunque en el peor caso la búsqueda binaria es O(log n), si el elemento está justo en la posición central de la primera división, la complejidad es constante, pero el término general para su eficiencia comparada con la lineal es logarítmica.
```

### 5 — Comparación de algoritmos
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "eficiencia"]

variables:
  datos: [[ 10, 5, 8, 2 ], [ 3, 1, 4, 2 ], [ 7, 9, 6, 5 ]]
  idx: uno_de([0, 1, 2])
  lista: datos[idx]

respuesta: "burbuja"
tipo: mc
opciones_explicitas: ["burbuja", "quicksort", "merge"]

enunciado: "Si aplicamos el algoritmo de burbuja a la lista {lista}, ¿cuál es el número de intercambios realizados si comparamos solo el primer par de elementos en la primera pasada?"

pasos:
  - "Comparar el primer elemento con el segundo."
  - "Si el primero es mayor que el segundo, intercambiarlos."
  - "Contar los intercambios realizados."

explicacion: |
  En el algoritmo de burbuja, se comparan elementos adyacentes. Si el elemento de la izquierda es mayor que el de la derecha, se realiza un intercambio para ir moviendo el valor más grande hacia el final de la lista.
```