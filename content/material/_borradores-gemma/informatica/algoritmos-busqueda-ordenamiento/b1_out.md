### 1 — Búsqueda Lineal
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

tipo: mc
opciones_explicitas: ["Compara elemento por elemento", "Divide la lista a la mitad", "Ordena de mayor a menor", "Busca solo en listas ordenadas"]

enunciado: "El algoritmo de búsqueda lineal funciona de la siguiente manera:"

explicacion: |
  La búsqueda lineal recorre cada elemento de la lista secuencialmente hasta encontrar el objetivo o terminar la lista.
```
respuesta: "Compara elemento por elemento"

### 2 — Requisito de la Búsqueda Binaria
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: vf

enunciado: "Para que un algoritmo de búsqueda binaria sea efectivo, la lista de datos debe estar previamente ___."

respuestas_validas: ["ordenada"]

explicacion: |
  La búsqueda binaria utiliza la propiedad de orden para descartar la mitad de los elementos en cada paso. Sin orden, no se puede determinar qué mitad descartar.
```
respuesta: "ordenada"

### 3 — Eficiencia de Búsqueda
```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "intermedio"
  tags: ["complejidad", "busqueda"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["10, 20, 30, 40, 50", "50"], ["5, 15, 25, 35", "5"]]

tipo: mc
opciones_explicitas: ["O(1)", "O(n)", "O(log n)", "O(n^2)"]

enunciado: "En el escenario {datos[escenario_idx][0]}, ¿cuál es la complejidad en el peor de los casos para una búsqueda lineal?"

explicacion: |
  En el peor de los casos, la búsqueda lineal debe revisar todos los elementos 'n', por lo tanto su complejidad es O(n).
```
respuesta: "O(n)"

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
```
respuesta: ["Comparar elementos adyacentes", "Intercambiar si están desordenados", "Repetir hasta que no haya cambios"]
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

explicacion: |
  Es correcto, ya que requiere dos bucles anidados (uno para las pasadas y otro para las comparaciones), resultando en n * n comparaciones en el peor escenario.
```
respuesta: verdadero