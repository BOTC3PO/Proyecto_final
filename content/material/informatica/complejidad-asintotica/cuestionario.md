# Informática — Complejidad asintótica (cuestionario, 26 preguntas VBLang)

> Tema: `I1` (puente Álgebra → Informática). Ver `teoria.md` en esta
> misma carpeta.

---

### 1 — Evaluar el crecimiento: O(n)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  n: random(10, 1000)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(n) hace exactamente n operaciones. ¿Cuántas operaciones hace con n={n}?"

explicacion: |
  O(n): el trabajo crece en proporción directa a n.
```

### 2 — Evaluar el crecimiento: O(n²)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  n: random(5, 100)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(n²) hace n² operaciones. ¿Cuántas operaciones hace con n={n}?"

explicacion: |
  O(n²): el trabajo crece con el cuadrado de n.
```

### 3 — Evaluar el crecimiento: O(2ⁿ)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  n: random(3, 15)

respuesta: 2 ^ n
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(2ⁿ) hace 2ⁿ operaciones. ¿Cuántas operaciones hace con n={n}?"

explicacion: |
  O(2ⁿ): el trabajo se duplica por cada elemento más en la entrada —
  crece muchísimo más rápido que cualquier polinomio.
```

### 4 — Comparar O(n) vs O(n²) para n grande

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["comparacion", "verdadero_falso"]

variables:
  n: random(50, 500)

respuesta: ((n ^ 2) > n)
tipo: vf

enunciado: "Para n={n}, ¿un algoritmo O(n²) hace más operaciones que uno O(n)?"

explicacion: |
  n² supera a n para cualquier n>1 — y la diferencia se agranda cuanto
  más grande es n.
```

### 5 — Comparar O(n²) vs O(2ⁿ) para n grande

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  n: random(15, 25)

respuesta: ((2 ^ n) > (n ^ 2))
tipo: vf

enunciado: "Para n={n}, ¿un algoritmo O(2ⁿ) hace más operaciones que uno O(n²)?"

explicacion: |
  A partir de cierto n, la exponencial siempre termina superando a
  cualquier polinomio — mismo principio de
  `../../matematica/familias-exponencial-logaritmica/`.
```

### 6 — Comparar O(n²) vs O(2ⁿ) para n chico (contraejemplo intuitivo)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  n: uno_de([2, 3])

respuesta: ((2 ^ n) > (n ^ 2))
tipo: vf

enunciado: "Para n={n} (chico), ¿un algoritmo O(2ⁿ) hace más operaciones que uno O(n²)?"

explicacion: |
  Para n muy chico, la comparación puede no seguir el patrón habitual —
  Big O describe el comportamiento para n GRANDE, no para cualquier n.
```

### 7 — Identificar la notación: búsqueda binaria

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(log n)"
tipo: mc
opciones_explicitas:
  - "O(log n)"
  - "O(n)"
  - "O(n²)"

enunciado: "La búsqueda binaria en una lista ordenada descarta la mitad de las opciones en cada paso. ¿Qué notación Big O le corresponde?"

explicacion: |
  Descartar la mitad en cada paso es exactamente el patrón logarítmico
  — el número de pasos crece muy despacio, aunque la lista sea enorme.
```

### 8 — Identificar la notación: recorrer una lista

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(n)"
tipo: mc
opciones_explicitas:
  - "O(n)"
  - "O(1)"
  - "O(n²)"

enunciado: "Un algoritmo que recorre una lista de n elementos una sola vez, mirando cada uno. ¿Qué notación Big O le corresponde?"

explicacion: |
  Una pasada por cada uno de los n elementos: O(n).
```

### 9 — Identificar la notación: comparar todos los pares

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(n²)"
tipo: mc
opciones_explicitas:
  - "O(n²)"
  - "O(n)"
  - "O(log n)"

enunciado: "Un algoritmo que compara cada elemento de una lista con todos los demás (todos los pares posibles). ¿Qué notación Big O le corresponde?"

explicacion: |
  Comparar todos los pares de n elementos da, aproximadamente, n×n
  comparaciones: O(n²).
```

### 10 — Identificar la notación: acceso directo

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(1)"
tipo: mc
opciones_explicitas:
  - "O(1)"
  - "O(n)"
  - "O(log n)"

enunciado: "Acceder a un elemento de un array por su índice (por ejemplo, arr[5]). ¿Qué notación Big O le corresponde?"

explicacion: |
  No importa el tamaño del array: acceder por índice tarda lo mismo
  siempre — O(1), constante.
```

### 11 — Identificar la notación: probar todos los subconjuntos

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(2ⁿ)"
tipo: mc
opciones_explicitas:
  - "O(2ⁿ)"
  - "O(n²)"
  - "O(n)"

enunciado: "Un algoritmo que prueba todos los subconjuntos posibles de un conjunto de n elementos. ¿Qué notación Big O le corresponde?"

explicacion: |
  Un conjunto de n elementos tiene 2ⁿ subconjuntos posibles —
  exponencial.
```

### 12 — Simplificar: ignorar constantes

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["simplificar", "opcion_multiple"]

variables:
  k: random(2, 9)
  c: random(1, 20)

respuesta: "O(n)"
tipo: mc
opciones_explicitas:
  - "O(n)"
  - "O(n²)"
  - "O(1)"

enunciado: "Un algoritmo hace {k}n + {c} operaciones (por ejemplo, {k} pasadas por la lista más un paso final). ¿Cuál es su notación Big O simplificada?"

explicacion: |
  Se ignoran la constante multiplicativa ({k}) y el término independiente
  ({c}) — sólo importa el orden de crecimiento: O(n).
```

### 13 — Simplificar: el término dominante

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["simplificar", "opcion_multiple"]

respuesta: "O(n²)"
tipo: mc
opciones_explicitas:
  - "O(n²)"
  - "O(n)"
  - "O(n² + n)"

enunciado: "Un algoritmo hace n² + n operaciones. ¿Cuál es su notación Big O simplificada?"

explicacion: |
  n² domina sobre n cuando n crece mucho — el término de menor orden se
  descarta.
```

### 14 — Concepto: qué describe la complejidad

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La complejidad de un algoritmo describe cómo crece el trabajo que hace a medida que crece el tamaño de la entrada, no el tiempo en segundos de reloj."

explicacion: |
  Los segundos de reloj dependen de la computadora; el orden de
  crecimiento no.
```

### 15 — Concepto: la jerarquía de crecimiento

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "O(log n) crece más lento que O(n), que a su vez crece más lento que O(n²), que a su vez crece más lento que O(2ⁿ)."

explicacion: |
  Es la jerarquía central del tema, de menor a mayor crecimiento.
```

### 16 — Concepto: Big O describe el comportamiento para n grande

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Un algoritmo O(n²) siempre es más lento que uno O(n), para cualquier valor de n, sin excepción."

explicacion: |
  Para n muy chico, las constantes ocultas pueden invertir esa relación
  en la práctica — Big O describe el comportamiento asintótico (n
  grande), no cada caso puntual.
```

### 17 — Concepto: se ignoran constantes

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "O(5n) y O(n) se consideran la misma complejidad — la constante multiplicativa no cambia el orden de crecimiento."

explicacion: |
  Big O agrupa por orden de crecimiento, no por el número exacto de
  operaciones.
```

### 18 — Verificación con error

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(5, 100)
  real: n ^ 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un algoritmo O(n²) procesa n={n}. ¿Es correcto que haga {propuesto} operaciones?"

explicacion: |
  El valor correcto es n² = {real}.
```

### 19 — Concepto: peor caso vs. comportamiento típico

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La notación Big O suele describir el PEOR caso de un algoritmo — en la práctica, puede comportarse mejor en casos promedio o favorables."

explicacion: |
  Es una distinción importante: "peor caso O(n²)" no significa "siempre
  tarda exactamente eso".
```

### 20 — Aplicar: elegir el algoritmo más eficiente para n grande

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "El O(n log n), para una lista suficientemente grande"
tipo: mc
opciones_explicitas:
  - "El O(n log n), para una lista suficientemente grande"
  - "El O(n²), siempre, sin importar el tamaño"
  - "Da exactamente lo mismo cuál se elija"

enunciado: "Para ordenar una lista muy grande, ¿qué algoritmo conviene más: uno O(n log n) o uno O(n²)?"

explicacion: |
  Para listas grandes, O(n log n) escala mucho mejor — la diferencia se
  vuelve enorme a medida que crece n.
```

### 21 — Concepto: notación asintótica y n muy grande

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra 'asintótica' en el nombre del tema hace referencia a mirar el comportamiento del algoritmo cuando n se acerca al infinito, no a un valor puntual chico."

explicacion: |
  Es el mismo concepto de comportamiento en el infinito ya visto en
  `../../matematica/limite/` (límites en el infinito).
```

### 22 — Aplicar: doblar el tamaño de la entrada en O(n)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  n: random(50, 500)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(n) tarda {n} operaciones con una entrada de tamaño {n}. Si se duplica el tamaño de la entrada, ¿cuántas operaciones tarda?"

explicacion: |
  En O(n), duplicar la entrada duplica el trabajo — relación
  proporcional directa.
```

### 23 — Aplicar: doblar el tamaño de la entrada en O(n²)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  n: random(10, 100)

respuesta: (((2 * n) ^ 2) == (4 * (n ^ 2)))
tipo: vf

enunciado: "Un algoritmo O(n²) tarda {n ^ 2} operaciones con entrada {n}. Si se duplica el tamaño de la entrada, ¿el trabajo se CUADRUPLICA (no se duplica)?"

explicacion: |
  (2n)² = 4n² — duplicar la entrada cuadruplica el trabajo en un
  algoritmo cuadrático, el mismo patrón ya visto en
  `../../vida-cotidiana/distancia-frenado/`.
```

### 24 — Concepto: O(log n) crece muy despacio

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un algoritmo O(log n) apenas nota la diferencia entre procesar 1.000 elementos y 1.000.000 — el logaritmo crece muchísimo más despacio que n."

explicacion: |
  log₂(1.000.000) es apenas unas 20 veces log₂(1.000) — a pesar de que
  la entrada creció 1000 veces.
```

### 25 — Simplificar: descartar el término de menor orden en un caso más complejo

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["simplificar", "opcion_multiple"]

respuesta: "O(2ⁿ)"
tipo: mc
opciones_explicitas:
  - "O(2ⁿ)"
  - "O(n²)"
  - "O(2ⁿ + n²)"

enunciado: "Un algoritmo hace 2ⁿ + n² operaciones. ¿Cuál es su notación Big O simplificada?"

explicacion: |
  2ⁿ crece mucho más rápido que n² — domina completamente para n
  grande, así que el término n² se descarta.
```

### 26 — Concepto: cierre — Big O reusa la comparación exponencial/lineal

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Entender por qué O(2ⁿ) es mucho peor que O(n²) para n grande usa exactamente la misma idea matemática de `../../matematica/familias-exponencial-logaritmica/`: una exponencial siempre termina superando a un polinomio."

explicacion: |
  Es el resumen del módulo: la teoría de funciones ya construida en
  Álgebra explica directamente por qué la jerarquía de complejidad es
  como es.
```
