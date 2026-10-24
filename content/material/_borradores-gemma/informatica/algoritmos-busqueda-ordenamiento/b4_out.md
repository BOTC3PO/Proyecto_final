### 1 — Búsqueda Lineal vs Binaria
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "eficiencia"]

variables:
  es_ordenado: true

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Para que un algoritmo de búsqueda sea más eficiente que la búsqueda lineal, aprovechando la estructura de los datos, el arreglo debe estar previamente {es_ordenado} y el algoritmo utilizado sería la búsqueda ___."

explicacion: |
  La búsqueda binaria requiere que el conjunto de datos esté ordenado para poder dividir el espacio de búsqueda a la mitad en cada paso, logrando una complejidad de O(log n), mientras que la lineal siempre recorre uno por uno.
```

### 2 — Complejidad de Burbuja
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "complejidad"]

variables:
  n_elementos: 10

respuesta: 100
tipo: input
tolerancia_abs: 0

enunciado: "En el peor de los casos, un algoritmo de ordenamiento de burbuja (Bubble Sort) realiza aproximadamente {n_elementos * n_elementos} comparaciones para un arreglo de tamaño {n_elementos}."

pasos:
  - "Identificar que el peor caso ocurre cuando el arreglo está en orden inverso."
  - "Calcular el número de comparaciones como n^2."

explicacion: |
  El algoritmo de burbuja compara pares adyacentes. En el peor de los casos, realiza n*(n-1)/2 comparaciones, lo cual es asimptóticamente O(n^2). Para n=10, el valor aproximado es 100.
```

### 3 — Requisito de la Búsqueda Binaria
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda_binaria", "requisitos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es necesario que un arreglo esté ordenado para aplicar el algoritmo de búsqueda binaria?"

explicacion: |
  La búsqueda binaria funciona dividiendo el rango de búsqueda basándose en la comparación del elemento medio con el objetivo. Si el arreglo no está ordenado, la decisión de ir a la izquierda o a la derecha no es válida.
```

### 4 — Pasos del Bubble Sort
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos fundamentales para la ejecución de una iteración estándar de un algoritmo de burbuja:"

explicacion: |
  El algoritmo recorre la lista comparando parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este proceso hasta que el arreglo esté ordenado.
```

### 5 — Eficiencia de Búsqueda
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["eficiencia", "comparacion"]

variables:
  idx_caso: uno_de([0, 1])
  es_mejor_binaria: ["verdadero", "falso"][idx_caso]
  tipo_busqueda: ["binaria", "lineal"][idx_caso]

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria"]

enunciado: "Si comparamos la eficiencia de búsqueda en un arreglo de un millón de elementos, la búsqueda {tipo_busqueda} es preferible sobre la búsqueda lineal porque su complejidad es menor. El nombre de la búsqueda más eficiente es ___."

explicacion: |
  La búsqueda binaria tiene una complejidad logarítmica O(log n), lo que significa que para un millón de elementos solo requiere unos 20 pasos, mientras que la lineal podría requerir un millón.
```