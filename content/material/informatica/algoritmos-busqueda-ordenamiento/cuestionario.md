# Informatica — Algoritmos busqueda ordenamiento (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Búsqueda Lineal

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

tipo: mc
opciones_explicitas: ["Compara elemento por elemento", "Divide la lista a la mitad", "Ordena de mayor a menor", "Busca solo en listas ordenadas"]
respuesta: "Compara elemento por elemento"

enunciado: "El algoritmo de búsqueda lineal funciona de la siguiente manera:"

explicacion: |
  La búsqueda lineal recorre cada elemento de la lista secuencialmente hasta encontrar el objetivo o terminar la lista.
```

### 2 — Requisito de la Búsqueda Binaria

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: completar

enunciado: "Para que un algoritmo de búsqueda binaria sea efectivo, la lista de datos debe estar previamente ___."

respuesta: "ordenada"

explicacion: |
  La búsqueda binaria utiliza la propiedad de orden para descartar la mitad de los elementos en cada paso. Sin orden, no se puede determinar qué mitad descartar.
```

### 3 — Eficiencia de Búsqueda

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "intermedio"
  tags: ["complejidad", "busqueda"]

variables:
  datos: [["10, 20, 30, 40, 50", "50"], ["5, 15, 25, 35", "5"]]
  escenario_idx: uno_de([0, 1])

tipo: mc
respuesta: "O(n)"
opciones_explicitas: ["O(1)", "O(n)", "O(log n)", "O(n^2)"]

enunciado: "En el escenario {datos[escenario_idx][0]}, ¿cuál es la complejidad en el peor de los casos para una búsqueda lineal?"

explicacion: |
  En el peor de los casos, la búsqueda lineal debe revisar todos los elementos 'n', por lo tanto su complejidad es O(n).
```

### 4 — Pasos del Ordenamiento Burbuja

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["ordenamiento", "burbuja"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si están desordenados", "Repetir hasta que no haya cambios"]

enunciado: "Ordena los pasos lógicos para completar una pasada del algoritmo de ordenamiento de burbuja (Bubble Sort):"

explicacion: |
  El algoritmo compara pares de elementos contiguos e intercambia sus posiciones si están en el orden incorrecto, repitiendo el proceso hasta que la lista esté lista.
respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si están desordenados", "Repetir hasta que no haya cambios"]
```

### 5 — Verdad o Falso: Complejidad Burbuja

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["ordenamiento", "burbuja"]

tipo: vf

enunciado: "El algoritmo de ordenamiento de burbuja tiene una complejidad temporal de O(n^2) en su peor caso."

respuesta: verdadero

explicacion: |
  Es correcto, ya que requiere dos bucles anidados (uno para las pasadas y otro para las comparaciones), resultando en n * n comparaciones en el peor escenario.
```

### 6 — Búsqueda Lineal en un Array

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

### 7 — Búsqueda Binaria: Requisito Previo

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

enunciado: "Para que un algoritmo de búsqueda binaria funcione correctamente sobre un conjunto de datos, es indispensable que los datos estén previamente ___."

respuestas_validas:
  - "ordenados"

respuesta: "ordenados"
tipo: completar

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, el conjunto debe estar ordenado.
```

### 8 — Ordenamiento Burbuja (Bubble Sort)

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

variables:
  idx: uno_de([0, 1])
  arrays_iniciales: ["[5, 2, 8]", "[3, 1, 4]"]
  resultados: ["[2, 5, 8]", "[1, 3, 4]"]

enunciado: "Considera el array {arrays_iniciales[idx]}. Tras completar la primera pasada completa del algoritmo de ordenamiento burbuja (comparando pares adyacentes de izquierda a derecha), ¿cuál es el estado del array?"

opciones_explicitas: [resultados[idx], "[8, 5, 2]", "[4, 3, 1]", "[2, 8, 5]"]

respuesta: resultados[idx]
tipo: mc

explicacion: |
  En la primera pasada del Bubble Sort, el elemento más grande 'flota' hacia la última posición mediante intercambios sucesivos de pares adyacentes.
```

### 9 — Eficiencia de la Búsqueda Binaria

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "binaria"]

enunciado: "Si buscamos un elemento en un array de 1024 elementos usando búsqueda binaria, ¿cuál es el número máximo de comparaciones que se realizarán en el peor de los casos?"

respuesta: 10
tipo: completar
tolerancia_abs: 0

explicacion: |
  La búsqueda binaria tiene una complejidad de O(log2(n)). 
  Como 2^10 = 1024, el número máximo de divisiones necesarias para reducir el espacio a un solo elemento es 10.
```

### 10 — Pasos del Algoritmo de Ordenamiento Burbuja

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["ordenar", "burbuja"]

enunciado: "Ordena los siguientes pasos que describe el funcionamiento del algoritmo de burbuja para ordenar un array de n elementos:"

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]
tipo: ordenar

explicacion: |
  El algoritmo burbuja funciona comparando pares de elementos contiguos y moviendo el mayor hacia la derecha, repitiendo este ciclo hasta que la lista esté totalmente ordenada.
```

### 11 — Búsqueda Binaria y Requisito Previo

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

### 12 — Complejidad de la Búsqueda Lineal

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "lineal"]

variables:
  n: 1000

tipo: completar
respuestas_validas:
  - "O(n)"

enunciado: "En el peor de los casos, si tenemos un arreglo de tamaño {n}, la complejidad temporal de una búsqueda lineal es ___."

respuesta: "O(n)"

explicacion: |
  En la búsqueda lineal, en el peor de los casos (cuando el elemento es el último o no está), debemos comparar el elemento buscado con cada uno de los {n} elementos del arreglo.
```

### 13 — El Error del Índice en Búsqueda Binaria

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

### 14 — Pasos del Ordenamiento Burbuja

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

enunciado: "Ordena los pasos lógicos de una implementación estándar del algoritmo de ordenamiento burbuja (Bubble Sort):"

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

explicacion: |
  El método de burbuja funciona comparando pares de elementos contiguos y moviendo el más grande hacia el final en cada iteración.
```

### 15 — Comparación de Eficiencia

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["eficiencia", "comparacion"]

tipo: mc
opciones_explicitas: ["log2(n)", "n"]

enunciado: "Si comparamos la eficiencia teórica de una búsqueda binaria frente a una búsqueda lineal, la búsqueda binaria tiene una complejidad de ___ en el peor de los casos."

respuesta: "log2(n)"

explicacion: |
  La búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso, lo que resulta en una complejidad logarítmica, mucho más eficiente que la lineal para conjuntos de datos grandes.
```

### 16 — Búsqueda Lineal vs Binaria

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "eficiencia"]

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Para que un algoritmo de búsqueda sea más eficiente que la búsqueda lineal, aprovechando la estructura de los datos, el arreglo debe estar previamente ordenado y el algoritmo utilizado sería la búsqueda ___."

explicacion: |
  La búsqueda binaria requiere que el conjunto de datos esté ordenado para poder dividir el espacio de búsqueda a la mitad en cada paso, logrando una complejidad de O(log n), mientras que la lineal siempre recorre uno por uno.
```

### 17 — Complejidad de Burbuja

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "complejidad"]

variables:
  n_elementos: 10

respuesta: 100
tipo: completar
tolerancia_abs: 0

enunciado: "En el peor de los casos, un algoritmo de ordenamiento de burbuja (Bubble Sort) realiza aproximadamente {n_elementos * n_elementos} comparaciones para un arreglo de tamaño {n_elementos}."

pasos:
  - "Identificar que el peor caso ocurre cuando el arreglo está en orden inverso."
  - "Calcular el número de comparaciones como n^2."

explicacion: |
  El algoritmo de burbuja compara pares adyacentes. En el peor de los casos realiza exactamente n*(n-1)/2 comparaciones (45 para n=10), pero esa cifra crece asintóticamente como n^2, por lo que decimos que su complejidad es O(n^2). Usando n^2 como aproximación, para n=10 el valor es 100.
```

### 18 — Requisito de la Búsqueda Binaria

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

### 19 — Pasos del Bubble Sort

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos fundamentales para la ejecución de una iteración estándar de un algoritmo de burbuja:"

explicacion: |
  El algoritmo recorre la lista comparando parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este proceso hasta que el arreglo esté ordenado.
```

### 20 — Eficiencia de Búsqueda

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["eficiencia", "comparacion"]

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria"]

enunciado: "Si comparamos la eficiencia de búsqueda en un arreglo de un millón de elementos, una de las dos es preferible sobre la otra porque su complejidad es menor. El nombre de la búsqueda más eficiente es ___."

explicacion: |
  La búsqueda binaria tiene una complejidad logarítmica O(log n), lo que significa que para un millón de elementos solo requiere unos 20 pasos, mientras que la lineal podría requerir un millón.
```

### 21 — Búsqueda en una lista desordenada

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

### 22 — Requisito de la búsqueda binaria

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

### 23 — Pasos del ordenamiento de burbuja

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]
tipo: ordenar

enunciado: "Indica el orden lógico de las operaciones básicas que realiza el algoritmo de ordenamiento de burbuja (Bubble Sort) para ordenar una lista de menor a mayor:"

explicacion: |
  El método de burbuja compara parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este ciclo hasta que no haya más intercambios necesarios.
```

### 24 — Completa el concepto de complejidad

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["complejidad", "big_o"]

respuesta: "logarítmica"
tipo: completar
respuestas_validas:
  - "logarítmica"
  - "logaritmica"

enunciado: "La complejidad temporal de la búsqueda binaria en el peor de los casos se describe como ___."

explicacion: |
  La búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso, por lo que en el peor de los casos su complejidad es O(log n), es decir, logarítmica (nunca lineal, ni siquiera en escenarios favorables).
```

### 25 — Comparación de algoritmos

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "eficiencia"]

variables:
  datos: [[ 10, 5, 8, 2 ], [ 3, 1, 4, 2 ], [ 7, 9, 6, 5 ]]
  intercambios_primer_par: [1, 1, 0]
  idx: uno_de([0, 1, 2])
  lista: datos[idx]

respuesta: intercambios_primer_par[idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si aplicamos el algoritmo de burbuja a la lista {lista}, ¿cuántos intercambios se realizan si comparamos solo el primer par de elementos (el primero con el segundo) en la primera pasada?"

pasos:
  - "Comparar el primer elemento con el segundo."
  - "Si el primero es mayor que el segundo, intercambiarlos."
  - "Contar los intercambios realizados."

explicacion: |
  En el algoritmo de burbuja, se comparan elementos adyacentes: si el de la izquierda es mayor que el de la derecha, se intercambian (1 intercambio); si no, no se realiza ninguno (0 intercambios). Para {lista}, comparando solo el primer par, el resultado depende de si ese par está o no en el orden correcto.
```
