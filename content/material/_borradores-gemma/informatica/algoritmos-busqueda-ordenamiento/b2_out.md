### 1 — Búsqueda Lineal en un Array
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

enunciado: "Se tiene el siguiente array de enteros: [12, 45, 7, 23, 56, 10]. Si aplicamos un algoritmo de búsqueda lineal para encontrar el elemento 23, ¿cuál es el índice (empezando desde 0) donde se encuentra el elemento?"

opciones_explicitas: ["2", "3", "4", "5"]

respuesta: "3"
tipo: mc

explicacion: |
  La búsqueda lineal recorre el array elemento por elemento desde el inicio:
  - Índice 0: 12 (no es 23)
  - Índice 1: 45 (no es 23)
  - Índice 2: 7 (no es 23)
  - Índice 3: 23 (¡Encontrado!)
```

### 2 — Búsqueda Binaria: Requisito Previo
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

enunciado: "Para que un algoritmo de búsqueda binaria funcione correctamente sobre un conjunto de datos, es indispensable que los datos estén previamente ___."

respuestas_validas: ["ordenados"]

respuesta: "ordenados"
tipo: completar

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, el conjunto debe estar ordenado.
```

### 3 — Ordenamiento Burbuja (Bubble Sort)
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

variables:
  idx: uno_de([0, 1])
  escenario: [[[5, 2, 8], [2, 5, 8]], [[3, 1, 4], [1, 3, 4]]]

enunciado: "Considera el array {escenario[idx][0]}. Tras completar la primera pasada completa del algoritmo de ordenamiento burbuja (comparando pares adyacentes de izquierda a derecha), ¿cuál es el estado del array?"

opciones_explicitas: ["{escenario[idx][1]}", "[5, 8, 2]", "[2, 5, 8]", "[8, 5, 2]"]

respuesta: "{escenario[idx][1]}"
tipo: mc

explicacion: |
  En la primera pasada del Bubble Sort, el elemento más grande 'flota' hacia la última posición mediante intercambios sucesivos de pares adyacentes.
```

### 4 — Eficiencia de la Búsqueda Binaria
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "binaria"]

enunciado: "Si buscamos un elemento en un array de 1024 elementos usando búsqueda binaria, ¿cuál es el número máximo de comparaciones que se realizarán en el peor de los casos?"

respuesta: 10
tipo: input
tolerancia_abs: 0

explicacion: |
  La búsqueda binaria tiene una complejidad de O(log2(n)). 
  Como 2^10 = 1024, el número máximo de divisiones necesarias para reducir el espacio a un solo elemento es 10.
```

### 5 — Pasos del Algoritmo de Ordenamiento Burbuja
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["ordenar", "burbuja"]

enunciado: "Ordena los siguientes pasos que describe el funcionamiento del algoritmo de burbuja para ordenar un array de n elementos:"

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]
tipo: ordenar

explicacion: |
  El algoritmo burbuja funciona comparando pares de elementos contiguos y moviendo el mayor hacia la derecha, repitiendo este ciclo hasta que la lista esté totalmente ordenada.
```