### 1 — Búsqueda Binaria y Requisito Previo
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: mc
opciones_explicitas: ["El arreglo debe estar desordenado", "El arreglo debe estar ordenado", "El arreglo debe tener un tamaño impar", "No requiere ninguna condición"]

enunciado: "Para que el algoritmo de búsqueda binaria funcione correctamente y garantice encontrar el elemento (si existe), el arreglo de entrada debe estar ___."

respuesta: "El arreglo debe estar ordenado"

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, es indispensable que los elementos sigan un orden establecido.
```

### 2 — Complejidad de la Búsqueda Lineal
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "lineal"]

variables:
  n: 1000

tipo: completar
respuestas_validas: ["O(n)", "O(1)", "O(log n)", "O(n^2)"]

enunciado: "En el peor de los casos, si tenemos un arreglo de tamaño {n}, la complejidad temporal de una búsqueda lineal es ___."

respuesta: "O(n)"

explicacion: |
  En la búsqueda lineal, en el peor de los casos (cuando el elemento es el último o no está), debemos comparar el elemento buscado con cada uno de los {n} elementos del arreglo.
```

### 3 — El Error del Índice en Búsqueda Binaria
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["errores", "indices"]

tipo: vf

enunciado: "Si un algoritmo de búsqueda binaria utiliza un cálculo de punto medio como `medio = (inicio + fin) / 2` en un lenguaje con desbordamiento de enteros, puede fallar si la suma de `inicio` y `fin` supera el valor máximo permitido para un entero."

respuesta: verdadero

explicacion: |
  Este es un error clásico. Para evitar el desbordamiento (overflow), se recomienda usar `medio = inicio + (fin - inicio) / 2`.
```

### 4 — Pasos del Ordenamiento Burbuja
```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

enunciado: "Ordena los pasos lógicos de una implementación estándar del algoritmo de ordenamiento burbuja (Bubble Sort):"

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

explicacion: |
  El método de burbuja funciona comparando pares de elementos contiguos y moviendo el más grande hacia el final en cada iteración.
```

### 5 — Comparación de Eficiencia
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["eficiencia", "comparacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 7], [100, 100]]
  valor_buscado: uno_de(["log2(n)", "n"])

tipo: mc
opciones_explicitas: ["log2(n)", "n"]

enunciado: "Si comparamos la eficiencia teórica de una búsqueda binaria frente a una búsqueda lineal, la búsqueda binaria tiene una complejidad de ___ en el peor de los casos."

respuesta: "log2(n)"

explicacion: |
  La búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso, lo que resulta en una complejidad logarítmica, mucho más eficiente que la lineal para conjuntos de datos grandes.
```