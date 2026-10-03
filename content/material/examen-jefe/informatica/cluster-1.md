# Examen jefe — [PENDIENTE #816]

> Logro #816. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **116 preguntas totales** en 5/5 secciones.

---

## Sección: algebra-booleana (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["algebra_booleana", "binario"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El álgebra booleana usa sólo dos valores: 1 (verdadero/encendido) y 0 (falso/apagado)."

pasos:
  - "Es la misma lógica de verdadero/falso vista en Filosofía, aplicada a valores binarios."

explicacion: |
  Verdadero: 1 y 0 son los únicos valores del álgebra booleana.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación AND da resultado 1 sólo si AMBAS entradas son 1, igual que la conjunción lógica (∧) vista en Filosofía."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: AND es la versión binaria exacta de la conjunción."

explicacion: |
  Verdadero: AND requiere que las dos entradas sean verdaderas
  (1), igual que la conjunción.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación OR da resultado 1 si AL MENOS UNA entrada es 1, igual que la disyunción lógica (∨) vista en Filosofía."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: OR es la versión binaria exacta de la disyunción."

explicacion: |
  Verdadero: OR sólo da 0 cuando ambas entradas son 0.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["not"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación NOT invierte el valor de entrada: 1 se convierte en 0, y 0 se convierte en 1."

pasos:
  - "Es la versión binaria exacta de la negación (¬) vista en Filosofía."

explicacion: |
  Verdadero: NOT siempre invierte el valor recibido.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "1"
tipo: completar

enunciado: "Si A=1 y B=1, ¿cuál es el resultado de A AND B?"

pasos:
  - "AND da 1 sólo cuando ambas entradas son 1."

explicacion: |
  Con ambas entradas en 1, AND produce 1.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1 y B=0, ¿cuál es el resultado de A AND B?"

pasos:
  - "Basta con que UNA entrada sea 0 para que AND dé 0."

explicacion: |
  Con una entrada en 0, AND produce 0, sin importar el valor de la
  otra.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "1"
tipo: completar

enunciado: "Si A=1 y B=0, ¿cuál es el resultado de A OR B?"

pasos:
  - "OR da 1 si al menos una entrada es 1."

explicacion: |
  Con al menos una entrada en 1, OR produce 1.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=0 y B=0, ¿cuál es el resultado de A OR B?"

pasos:
  - "OR sólo da 0 cuando AMBAS entradas son 0."

explicacion: |
  Con ambas entradas en 0, OR produce 0.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["not", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1, ¿cuál es el resultado de NOT A?"

pasos:
  - "NOT siempre invierte el valor de entrada."

explicacion: |
  NOT de 1 es 0.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["xor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "XOR (\"o exclusivo\") da resultado 1 sólo cuando las dos entradas son DISTINTAS entre sí (una es 1 y la otra 0)."

pasos:
  - "A diferencia de OR, XOR da 0 cuando ambas entradas son iguales (las dos 1 o las dos 0)."

explicacion: |
  Verdadero: XOR exige diferencia entre las entradas, no basta con
  que al menos una sea 1.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["xor", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1 y B=1, ¿cuál es el resultado de A XOR B?"

pasos:
  - "XOR da 0 cuando las dos entradas son iguales, aunque ambas sean 1."

explicacion: |
  Con entradas iguales, XOR siempre da 0, a diferencia de OR (que
  daría 1).
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["or", "xor", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre OR y XOR es que OR da 1 cuando ambas entradas son 1, y XOR da 0 en ese mismo caso."

pasos:
  - "Con A=1 y B=1: OR da 1, XOR da 0. Es la única fila donde difieren en su tabla de verdad."

explicacion: |
  Verdadero: es la diferencia clave entre disyunción inclusiva (OR) y
  disyunción exclusiva (XOR).
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["compuertas_logicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada operación booleana (AND, OR, NOT) corresponde a una compuerta lógica, un componente físico real de un circuito electrónico dentro de un chip."

pasos:
  - "Millones de estas compuertas combinadas forman el procesador de cualquier computadora."

explicacion: |
  Verdadero: el álgebra booleana no es sólo teoría abstracta, tiene
  una implementación física directa en hardware.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["algebra_booleana", "programacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En casi cualquier lenguaje de programación, `&&` (AND), `||` (OR) y `!` (NOT) son los operadores lógicos usados en condicionales (\"if\")."

pasos:
  - "Es la misma álgebra booleana aplicada al código, en vez de a un circuito o una tabla de verdad abstracta."

explicacion: |
  Verdadero: estos operadores implementan directamente las
  operaciones booleanas en la mayoría de los lenguajes.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["and", "programacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un condicional como \"si (edad >= 18) AND (tiene_permiso)\" sólo se cumple si AMBAS condiciones son verdaderas al mismo tiempo."

pasos:
  - "Es el mismo comportamiento de AND aplicado a condiciones de programación en vez de a valores 1/0 sueltos."

explicacion: |
  Verdadero: AND en un condicional exige que todas las partes
  conectadas por AND sean verdaderas.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["algebra_booleana", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La misma estructura lógica que empezó como error de razonamiento en lenguaje cotidiano (falacias, Lengua) y se formalizó con proposiciones (Filosofía) termina siendo la base física y de código de una computadora (álgebra booleana, Informática)."

pasos:
  - "Es el \"cruce inesperado\" señalado en `troncos.md` (v2.6), la misma lógica vista en tres materias distintas."

explicacion: |
  Verdadero: es la síntesis completa de la cadena de tres temas en
  tres materias distintas.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["and", "tabla_de_verdad"]

variables:
  valores_a: [1, 1, 0, 0]
  valores_b: [1, 0, 1, 0]
  resultados: [1, 0, 0, 0]
  idx: uno_de([0, 1, 2, 3])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si A={valores_a[idx]} y B={valores_b[idx]}, ¿cuál es el resultado de A AND B?"

pasos:
  - "Sólo la combinación 1 y 1 da como resultado 1; el resto da 0."

explicacion: |
  Aplicando la regla de AND a cada combinación de entradas se obtiene
  el resultado correspondiente de la tabla de verdad.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["xor", "tabla_de_verdad"]

variables:
  valores_a: [1, 1, 0, 0]
  valores_b: [1, 0, 1, 0]
  resultados: [0, 1, 1, 0]
  idx: uno_de([0, 1, 2, 3])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si A={valores_a[idx]} y B={valores_b[idx]}, ¿cuál es el resultado de A XOR B?"

pasos:
  - "XOR da 1 sólo cuando las entradas son distintas entre sí."

explicacion: |
  Aplicando la regla de XOR (distinto=1, igual=0) a cada combinación
  se obtiene el resultado correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["algebra_booleana", "metodo"]

enunciado: "Ordená los pasos para construir una condición de programación que combine varias reglas con operadores booleanos."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada regla individual que debe cumplirse (o no)"
  - "Decidir si TODAS las reglas deben cumplirse a la vez (AND) o si basta con UNA (OR)"
  - "Agregar NOT donde haga falta invertir una condición"
  - "Verificar el resultado con al menos una combinación de valores de prueba"
respuesta_orden: ["Identificar cada regla individual que debe cumplirse (o no)", "Decidir si TODAS las reglas deben cumplirse a la vez (AND) o si basta con UNA (OR)", "Agregar NOT donde haga falta invertir una condición", "Verificar el resultado con al menos una combinación de valores de prueba"]
explicacion: |
  El proceso va de identificar las reglas individuales a combinarlas
  correctamente con los operadores booleanos adecuados.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["algebra_booleana", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para permitir el acceso a un sistema sólo si el usuario tiene contraseña correcta Y no está bloqueado, conviene usar AND (ambas condiciones deben cumplirse), no OR."

pasos:
  - "OR permitiría el acceso con que se cumpla sólo una de las dos condiciones, lo cual sería un error de seguridad grave."

explicacion: |
  Verdadero: elegir el operador booleano correcto (AND vs. OR) tiene
  consecuencias prácticas reales, como en este caso de seguridad de
  acceso.
```

## Sección: complejidad-asintotica (26 preguntas)

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

## Sección: ofimatica-planilla-de-calculo (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["conceptos", "celda"]

tipo: mc
opciones_explicitas: ["La intersección de una fila y una columna", "El espacio para escribir texto solamente", "Una función matemática predefinida", "El comando para guardar el archivo"]

respuesta: "La intersección de una fila y una columna"

enunciado: "En una planilla de cálculo, la unidad básica de información se denomina ___."

explicacion: |
  Cada celda se identifica por la combinación de su letra de columna y su número de fila (ej. A1).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["referencias", "celdas"]

tipo: vf

enunciado: "Si una celda tiene la referencia $A$1, esto significa que la columna A está fijada (referencia absoluta) y la fila 1 es relativa."

respuesta: falso

explicacion: |
  El símbolo $ antes de la letra fija la columna, y el símbolo $ antes del número fija la fila. En $A$1, ambos están fijados.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "sintaxis"]

tipo: completar
respuestas_validas:
  - "="

respuesta: "="

enunciado: "Para que una celda reconozca que el contenido ingresado es una fórmula y no un texto simple, el primer carácter debe ser ___."

explicacion: |
  Toda fórmula o función en una planilla de cálculo debe comenzar obligatoriamente con el signo igual (=).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores", "aritmética"]

tipo: mc
opciones_explicitas: ["*", "/", "+", "-"]

respuesta: "*"

enunciado: "En una planilla de cálculo, el operador utilizado para representar la multiplicación es ___."

explicacion: |
  Los operadores básicos son: + (suma), - (resta), * (multiplicación) y / (división).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["prioridad", "operaciones"]

tipo: ordenar

opciones_explicitas: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

respuesta_orden: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

enunciado: "Ordena los siguientes elementos según la jerarquía de prioridad de operaciones en una fórmula de planilla de cálculo, de mayor a menor importancia:"

explicacion: |
  La jerarquía matemática se respeta en las planillas: primero lo que está entre paréntesis, luego potencias, luego multiplicación/división y finalmente suma/resta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

respuesta: "absoluta"
tipo: completar
respuestas_validas:
  - "absoluta"

enunciado: "Si queremos fijar la celda A1 para que no cambie al arrastrar una fórmula hacia abajo, debemos usar una referencia tipo ___."

explicacion: |
  Para mantener una referencia fija (como el valor de un impuesto o un tipo de cambio), se utiliza el símbolo '$' antes de la letra y el número (ej. $A$1). Esto se conoce como referencia absoluta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas"]

variables:
  val1: 15
  val2: 25

respuesta: 40
tipo: completar
tolerancia_abs: 0

enunciado: "En una planilla, si la celda A1 contiene {val1} y la celda B1 contiene {val2}, ¿cuál es el resultado de la fórmula =SUMA(A1;B1)?"

pasos:
  - "Identificar los valores en las celdas A1 y B1."
  - "Sumar ambos valores: 15 + 25."

explicacion: |
  La función SUMA suma los valores de los rangos o celdas indicados. En este caso, 15 + 25 = 40.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores"]

variables:
  op_multi: "*"
  op_div: "/"

respuesta: "*"
tipo: mc
opciones_explicitas: ["+", "*", "/", "-"]

enunciado: "Para realizar una multiplicación entre la celda A1 y la celda B1 en una fórmula de planilla de cálculo, se debe utilizar el operador: ___."

explicacion: |
  En las hojas de cálculo, el asterisco (*) representa la multiplicación, el signo más (+) la suma, el signo menos (-) la resta y la barra diagonal (/) la división.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["logica", "celdas"]

variables:
  condicion: falso

respuesta: falso
tipo: vf

enunciado: "Si una celda A1 tiene el valor 10, la expresión lógica =A1>20 devuelve el valor booleano verdadero."

explicacion: |
  La expresión evalúa si 10 es mayor que 20. Como esto es falso, el resultado de la comparación es el booleano falso.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["orden_operaciones"]

variables:
  f_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

respuesta_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]
tipo: ordenar
opciones_explicitas: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

enunciado: "Ordena las operaciones según la jerarquía de precedencia matemática que siguen las fórmulas en una planilla de cálculo:"

explicacion: |
  Al igual que en la matemática, las hojas de cálculo resuelven primero lo que está entre paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias", "formulas"]

variables:
  datos: [["A1", "A2"], ["B5", "B6"]]
  idx: uno_de([0, 1])
  ref_origen: datos[idx][0]
  ref_destino: datos[idx][1]

enunciado: "Si arrastras la fórmula {ref_origen} hacia abajo una fila, la referencia cambiará a {ref_destino} si la referencia es relativa."

respuesta: verdadero
tipo: vf

explicacion: |
  Las referencias relativas (sin $) cambian automáticamente al copiar la fórmula a otra celda. Las referencias absolutas (con $) permanecen fijas.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["errores", "sintaxis"]

enunciado: |
  ¿Cuál es la forma correcta de escribir la función SUMA para sumar el rango A1:A5 en una planilla de cálculo?

opciones_explicitas: ["=SUMA(A1:A5)", "SUMA(A1:A5)", "SUMA(A1;A5)", "SUMA(A1,A5)"]

respuesta: "=SUMA(A1:A5)"
tipo: mc

explicacion: |
  En una planilla de cálculo, toda fórmula o función debe comenzar obligatoriamente con el signo igual (=).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "precedencia"]

enunciado: "Si en la celda A1 tenemos 10, en A2 tenemos 5 y en A3 tenemos 2, ¿cuál es el orden de evaluación de la fórmula =A1+A2*A3?"

pasos:
  - "Primero se identifica la multiplicación"
  - "Luego se identifica la suma"

opciones_explicitas: ["A1+A2 y luego *A3", "A2*A3 y luego +A1"]

respuesta: "A2*A3 y luego +A1"
tipo: mc

explicacion: |
  Siguiendo la jerarquía de operaciones matemáticas, la multiplicación tiene prioridad sobre la suma.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["errores", "logica"]

enunciado: "Si en la celda A1 escribes la fórmula =A1+10, el programa detectará un error de tipo ___."

respuestas_validas:
  - "circular"
  - "referencia"

respuesta: "circular"
tipo: completar

explicacion: |
  Una referencia circular ocurre cuando una fórmula intenta calcular su propio valor, creando un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["referencias", "absolutas"]

enunciado: "Para fijar la columna A pero permitir que la fila cambie al arrastrar hacia abajo, la referencia correcta es ___."

respuestas_validas:
  - "$A1"

respuesta: "$A1"
tipo: completar

explicacion: |
  El signo $ antes de la letra fija la columna, mientras que el signo $ antes del número fija la fila.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

respuesta: verdadero
tipo: vf
enunciado: "En una planilla de cálculo, la principal distinción de una referencia absoluta es que mantiene la posición de la celda fija aunque se copie la fórmula a otra ubicación, utilizando el signo $."

pasos:
  - "Identificar si la referencia cambia al arrastrar la fórmula."
  - "Observar la presencia del símbolo $ en la referencia."

explicacion: |
  Las referencias relativas (ej. A1) cambian según la posición donde se pegue la fórmula. Las referencias absolutas (ej. $A$1) permanecen constantes.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "rangos"]

respuesta: "A1:B2"
tipo: completar
respuestas_validas:
  - "A1:B2"
  - "A1-B2"
  - "A1...B2"

enunciado: "Si queremos referirnos a un conjunto de celdas que abarca desde la celda A1 hasta la celda B2, la notación correcta para representar este rango es ___."

explicacion: |
  En las planillas de cálculo, los rangos se definen utilizando los dos puntos (:) para indicar el origen y el destino del área seleccionada.
```

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

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "orden_operaciones"]

opciones_explicitas: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]

respuesta_orden: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]
tipo: ordenar

enunciado: "Ordene los siguientes elementos según el orden de prioridad (precedencia) en el que la planilla de cálculo resuelve las operaciones en una fórmula:"

pasos:
  - "Observar los símbolos de agrupación."
  - "Observar las operaciones aritméticas básicas."

explicacion: |
  El orden de prioridad estándar sigue la jerarquía matemática: primero se resuelven los paréntesis, luego potencias, después multiplicación/división y finalmente suma/resta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["excel", "celdas", "referencias"]

variables:
  datos: [["A1", "A2", "B1"], ["C5", "C6", "D5"], ["F10", "F11", "G10"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si en la celda B1 escribimos la fórmula ={datos[idx][0]}*{datos[idx][1]} y arrastramos el controlador de relleno hacia abajo una fila, la fórmula en la celda B2 será ___."

respuestas_validas:
  - "A2*A2"
  - "C6*C6"
  - "F11*F11"

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al arrastrar una referencia relativa (sin $) hacia abajo, la fila aumenta automáticamente. Como el primer término es una referencia a una celda, esta cambia de A1 a A2, C5 a C6, o F10 a F11.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "operaciones"]

variables:
  valores: [[10, 5, 2], [20, 4, 3], [50, 2, 10]]
  idx: uno_de([0, 1, 2])
  a: valores[idx][0]
  b: valores[idx][1]
  c: valores[idx][2]
  resultado: a + b * c

enunciado: "En una planilla, la celda A1 tiene el valor {a}, la A2 tiene {b} y la A3 tiene {c}. Si en A4 escribimos la fórmula ={a} + {b} * {c}, ¿cuál es el resultado?"

tipo: completar
respuesta: resultado
tolerancia_abs: 0

explicacion: |
  Por la jerarquía de operaciones, la multiplicación se realiza antes que la suma. 
  En el caso actual: {a} + ({b} * {c}).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["funciones", "suma"]

variables:
  datos: [[10, 20, 30], [10, 10, 10], [100, 200, 300]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos los valores {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en las celdas A1, A2 y A3 respectivamente, ¿cuál es el resultado de aplicar la función =SUMA(A1:A3)?"

opciones_explicitas: [30, 60, 65, 90, 600]

respuesta: datos[idx][0] + datos[idx][1] + datos[idx][2]
tipo: mc

explicacion: |
  La función SUMA con el operador de rango ':' suma todos los valores comprendidos entre la celda inicial y la final.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formato", "texto"]

enunciado: "En una planilla de cálculo, si queremos que una celda muestre el texto 'Hola Mundo' como parte de una fórmula, debemos escribirlo entre comillas, por ejemplo: =CONCATENAR(\"Hola\", \" \", \"Mundo\")."

tipo: vf

respuesta: verdadero

explicacion: |
  Para que una planilla de cálculo interprete una cadena de caracteres como texto y no como una función o nombre de variable, los valores textuales deben ir entre comillas dobles.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["jerarquia", "operadores"]

enunciado: "Para resolver una fórmula compleja que combina sumas, multiplicaciones y paréntesis, ¿cuál es el orden correcto de ejecución que sigue el motor de la planilla?"

opciones_explicitas:
  - "Paréntesis"
  - "Potencias"
  - "Multiplicación/División"
  - "Suma/Resta"

respuesta_orden: ["Paréntesis", "Potencias", "Multiplicación/División", "Suma/Resta"]

explicacion: |
  Las hojas de cálculo siguen la jerarquía matemática estándar (PEMDAS/BODMAS): primero se resuelven los paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```

## Sección: que-es-la-tecnica-y-la-tecnologia (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["caracteristicas", "tecnica"]

respuesta: verdadero
tipo: vf

enunciado: "La técnica se describe como un conjunto de procedimientos, métodos o habilidades específicas."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["caracteristicas", "tecnologia"]

respuesta: verdadero
tipo: vf

enunciado: "La tecnología es solo la herramienta física en sí misma, sin considerar el conocimiento detrás de ella."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["critica", "neutralidad"]

respuesta: falso
tipo: vf

enunciado: "La tecnología es neutral y está libre de sesgos culturales o objetivos de diseño."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["componentes", "informatica"]

respuesta: verdadero
tipo: vf

enunciado: "En informática, la tecnología incluye hardware, software y protocolos de comunicación."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["variabilidad", "tecnica"]

respuesta: verdadero
tipo: vf

enunciado: "Las técnicas pueden variar según el contexto o la herramienta disponible."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["interdependencia", "historia"]

respuesta: verdadero
tipo: vf

enunciado: "Las nuevas técnicas surgen como respuesta a las limitaciones de la tecnología existente."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["ciclo", "computacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el campo de la computación, el ciclo entre técnica y tecnología es acelerado."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["analisis", "critica"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la diferencia entre técnica y tecnología ayuda a analizar críticamente el mundo digital."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["definicion", "marco"]

respuesta: verdadero
tipo: vf

enunciado: "La tecnología define el marco de posibilidades y restricciones para la acción técnica."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["definicion", "herramienta"]

respuesta: verdadero
tipo: vf

enunciado: "La técnica es descrita como la herramienta que da poder de acción inmediato."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["diferencia", "naturaleza"]

variables:
  tipo_technica: "individual"
  tipo_tecnologia: "colectiva"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La técnica se caracteriza por ser individual y procedimental, mientras que la tecnología suele ser colectiva y sistémica."

explicacion: |
  La técnica es una habilidad o método que posee o aplica una persona (individual). La tecnología es un sistema complejo que involucra múltiples componentes, usuarios y procesos (colectivo).
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["neutralidad", "etica"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La tecnología es un elemento neutral, libre de sesgos culturales o objetivos de sus creadores."

explicacion: |
  La tecnología no es neutral. Está diseñada por personas con ciertos objetivos, sesgos y contextos culturales. Su diseño refleja las intenciones y valores de quienes la crean.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["interdependencia", "ciclo"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las nuevas técnicas surgen como respuesta a limitaciones tecnológicas existentes, y a su vez, nuevas tecnologías permiten técnicas más complejas."

explicacion: |
  Existe un ciclo dinámico. Las limitaciones de la tecnología actual impulsan la creación de nuevas técnicas, y el avance tecnológico abre puertas para desarrollar técnicas más sofisticadas.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["componentes", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En informática, la tecnología incluye solo el hardware y el software, pero no los protocolos de comunicación."

explicacion: |
  Falso. La tecnología informática incluye hardware, software, protocolos de comunicación e infraestructura. Todos estos elementos funcionan en conjunto para permitir la operación del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["contexto", "variabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las técnicas pueden variar según el contexto o la herramienta disponible."

explicacion: |
  Sí. Una misma tarea puede requerir diferentes técnicas dependiendo de las herramientas (software/hardware) o el entorno (contexto) en el que se realice.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["impacto", "sociedad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Es importante comprender el impacto de la tecnología en la sociedad para pasar de ser usuarios pasivos a ciudadanos conscientes."

explicacion: |
  El análisis crítico del impacto social, ético y cultural de la tecnología es fundamental para una ciudadanía digital responsable y activa.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La técnica se refiere al 'cómo' hacemos algo."

explicacion: |
  Correcto. La técnica define los métodos, procedimientos y habilidades para ejecutar una tarea. Es la parte procedimental del conocimiento.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La tecnología es el producto o sistema resultante de aplicar conocimiento y técnicas."

explicacion: |
  Correcto. La tecnología es el resultado tangible o sistémico de la aplicación del saber técnico y científico para resolver problemas.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["metacognicion", "evaluacion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Estudiar informática implica solo aprender a operar máquinas, sin necesidad de entender su diseño."

explicacion: |
  Falso. Estudiar informática implica entender la lógica detrás del diseño, los sesgos y el impacto, no solo la operación. Esto permite una ciudadanía digital crítica.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["ciudadania", "objetivo"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Entender la diferencia entre técnica y tecnología nos ayuda a analizar críticamente el mundo digital."

explicacion: |
  Sí. Esta distinción permite pasar de la mera operación (técnica) al análisis crítico del sistema (tecnología), fomentando una ciudadanía digital más consciente y capaz de innovar.
```

## Sección: revolucion-informatica (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "computadoras"]

respuesta: "ENIAC"
tipo: completar
respuestas_validas:
  - "ENIAC"

enunciado: "La primera computadora electrónica de propósito general, utilizada para cálculos balísticos durante la Segunda Guerra Mundial, fue la ___."

explicacion: |
  La ENIAC (Electronic Numerical Integrator and Computer) fue una de las primeras computadoras electrónicas de gran escala, marcando el inicio de la era de la computación moderna.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "transistores"]

variables:
  tecnologia_actual: "transistores"

respuesta: "transistores"
tipo: mc
opciones_explicitas: ["tubos de vacío", "transistores", "microprocesadores"]

enunciado: "La transición de la primera a la segunda generación de computadoras se caracterizó por el reemplazo de los tubos de vacío por una tecnología más pequeña y eficiente."

explicacion: |
  La primera generación usaba tubos de vacío (grandes y calientes), mientras que la segunda generación introdujo el transistor, permitiendo miniaturización y mayor fiabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["pc", "historia"]

respuesta: "Apple II"
tipo: mc
opciones_explicitas: ["ENIAC", "Altair 8800", "Apple II", "IBM PC"]

enunciado: "¿Cuál de estos dispositivos fue uno de los primeros en popularizar la computación personal masiva a finales de los años 70 y principios de los 80?"

explicacion: |
  El Apple II fue uno de los primeros computadores personales con gráficos a color y capacidad de uso doméstico, impulsando la revolución de la informática personal.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta_orden: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]
tipo: ordenar
opciones_explicitas: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]

enunciado: "Ordena cronológicamente las tecnologías que permitieron la miniaturización de las computadoras:"

explicacion: |
  La evolución siguió este orden: Tubos de vacío (1ra gen) -> Transistores (2da gen) -> Circuitos Integrados (3ra gen) -> Microprocesadores (4ta gen).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["ley_de_moore", "teoria"]

variables:
  valor_doble: 2

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "decreciente", "constante"]

enunciado: "La revolución informática se vio acelerada por la Ley de Moore, la cual predice que el número de transistores en un chip se duplica aproximadamente cada {valor_doble} años, lo que implica un crecimiento de tipo ___."

explicacion: |
  La Ley de Moore describe un crecimiento exponencial de la capacidad de procesamiento, lo que permitió pasar de máquinas que ocupaban habitaciones a dispositivos que caben en un bolsillo.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "historia"]

respuesta: "válvulas"
tipo: "mc"

opciones_explicitas: ["válvulas", "transistores", "circuitos integrados", "microprocesadores"]

enunciado: "Las primeras computadoras de gran escala, como la ENIAC, utilizaban principalmente ________ de vacío para realizar sus operaciones lógicas."

explicacion: |
  Las válvulas de vacío (o tubos de vacío) fueron los componentes fundamentales de la primera generación de computadoras, antes de la invención del transistor.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

respuesta: "Transistor"
tipo: "mc"

opciones_explicitas: ["Transistor", "Circuito Integrado", "Microprocesador", "CPU"]

enunciado: "La invención del ___ permitió reemplazar las válvulas de vacío, reduciendo drásticamente el tamaño y el calor de las máquinas."

explicacion: |
  El transistor permitió la segunda generación de computadoras, permitiendo que fueran más pequeñas y confiables que las de válvulas.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["hardware", "historia"]

respuesta: "1971"
tipo: "completar"

respuestas_validas:
  - "1971"
  - "1972"

enunciado: "El primer microprocesador comercial, el Intel 4004, fue lanzado en el año ___."

explicacion: |
  El Intel 4004 marcó el inicio de la era de la integración a gran escala, permitiendo que toda la unidad de procesamiento residiera en un solo chip.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["historia", "ordenar"]

tipo: ordenar

opciones_explicitas: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

respuesta_orden: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la evolución del hardware de computación:"

explicacion: |
  La evolución siguió este orden: Válvulas (1ra gen), Transistores (2da gen), Circuitos Integrados (3ra gen) y Microprocesadores (4ta gen).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["usuario", "historia"]

respuesta: verdadero
tipo: vf

enunciado: "¿La llegada de la computadora personal (PC) a los hogares en los años 70 y 80 fue posible gracias a la integración masiva de microprocesadores?"

explicacion: |
  Correcto. La capacidad de integrar la CPU en un solo chip permitió que las computadoras pasaran de ocupar habitaciones enteras a ser dispositivos de escritorio accesibles.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "hardware"]

tipo: mc
opciones_explicitas: ["La velocidad de procesamiento", "La capacidad de almacenamiento", "La densidad de transistores en un chip", "El costo de los componentes electrónicos"]

enunciado: "La Ley de Moore es una observación histórica que predice el aumento de la densidad de ___ en un circuito integrado cada dos años aproximadamente."

respuesta: "La densidad de transistores en un chip"

explicacion: |
  Gordon Moore, cofundador de Intel, observó que el número de transistores en un microchip se duplicaba aproximadamente cada dos años, lo que impulsó la miniaturización de la tecnología.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["calculo", "hardware"]

variables:
  idx: uno_de([0, 1])
  datos: [["1000", "2000"], ["500", "1000"]]
  base: datos[idx][0]
  doble: datos[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un chip tiene {base} transistores hoy, siguiendo la Ley de Moore, ¿cuántos transistores tendrá aproximadamente en el próximo ciclo de dos años?"

respuesta: doble

pasos:
  - "Identificar la cantidad actual de transistores."
  - "Aplicar el factor de duplicación (x2) según la ley."

explicacion: |
  La Ley de Moore establece que la cantidad de transistores se duplica. Por lo tanto, {base} * 2 = {doble}.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "procesadores"]

tipo: ordenar
opciones_explicitas: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

enunciado: "Ordena los efectos causados por la aplicación de la Ley de Moore en la tecnología, desde la causa técnica hasta el efecto en el consumidor final:"

respuesta_orden: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

explicacion: |
  La Ley de Moore describe un ciclo: más transistores en menos espacio permiten chips más potentes y, con la escala de producción, más económicos.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["teoria", "hardware"]

tipo: completar
respuestas_validas:
  - "potencia"
  - "capacidad"

enunciado: "Debido al aumento exponencial de transistores, la ___ de procesamiento de los ordenadores ha crecido de forma similar a lo largo de las últimas décadas."

respuesta: "potencia"

explicacion: |
  Al integrar más transistores en un mismo espacio, el procesador puede realizar más operaciones por segundo, aumentando su potencia.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La Ley de Moore es una ley física inmutable de la naturaleza, similar a la Ley de la Gravedad."

respuesta: "Falso"

explicacion: |
  No es una ley física, sino una observación empírica y una meta industrial que ha guiado la planificación de la industria de los semiconductores.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["internet", "economia"]

tipo: mc
opciones_explicitas: ["Descentralización de la información", "Aumento de la burocracia física", "Reducción de la velocidad de comunicación", "Eliminación del comercio electrónico"]
respuesta: "Descentralización de la información"

enunciado: "La combinación de la revolución informática y el internet ha permitido la ________ de la información, permitiendo el acceso global a datos en tiempo real."

explicacion: |
  La digitalización ha democratizado el acceso a la información, rompiendo las barreras geográficas y temporales que existían antes de la era de internet.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["economia_digital", "e-commerce"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["comercio_electronico", "servicios_streaming"], ["ventas_retail_fisico", "suscripciones_digitales"]]

tipo: completar
respuestas_validas:
  - "servicios_streaming"
  - "suscripciones_digitales"
respuesta: escenarios[escenario_idx][1]

enunciado: "Un ejemplo clave de la transformación económica es el paso de modelos basados en el ________ hacia modelos basados en las ________."

explicacion: |
  La economía ha migrado de la propiedad física y el comercio en locales hacia el consumo de servicios bajo demanda y plataformas digitales.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["comunicacion", "impacto_social"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si en la era industrial la comunicación se basaba en el telégrafo y el correo físico, en la era informática la comunicación es instantánea. Si comparamos la velocidad de un mensaje de texto con un correo físico que tarda 3 días, y el mensaje tarda 0 segundos, ¿cuántos segundos de ahorro representa el mensaje digital frente al correo?"

pasos:
  - "Convertir 3 días a segundos: 3 * 24 * 60 * 60 = 259200"
  - "Restar el tiempo del mensaje digital (0) al tiempo del correo (259200)"

respuesta: 259200

explicacion: |
  La inmediatez es una de las características fundamentales de la revolución informática, permitiendo la globalización de los mercados en tiempo real.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

tipo: ordenar
opciones_explicitas: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la integración de la informática en la vida cotidiana:"

respuesta_orden: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

explicacion: |
  La computación comenzó en grandes centros de datos corporativos, pasó a los escritorios de los hogares con la PC y finalmente se volvió ubicua con los smartphones.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["trabajo", "automatizacion"]

tipo: mc
opciones_explicitas: ["Automatización de tareas repetitivas", "Desaparición total del trabajo humano", "Aumento de la necesidad de archivos físicos", "Reducción de la conectividad global"]
respuesta: "Automatización de tareas repetitivas"

enunciado: "Un efecto crítico de la revolución informática en la economía laboral es la ________, lo que obliga a la fuerza de trabajo a especializarse en tareas de mayor valor cognitivo."

explicacion: |
  La automatización impulsada por software y algoritmos ha transformado la estructura del empleo, eliminando tareas mecánicas pero creando nuevas demandas tecnológicas.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["ENIAC", "Transistor", "PC"]
respuesta_orden: ["ENIAC", "Transistor", "PC"]

enunciado: "Ordena cronológicamente los siguientes hitos tecnológicos: ENIAC, Transistor y PC."

explicacion: |
  El orden cronológico correcto es:
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. PC (años 70/80).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["lenguajes", "historia"]

respuesta: "Ada Lovelace"
tipo: mc

opciones_explicitas: ["Ada Lovelace", "Grace Hopper", "John Backus", "Alan Turing"]

enunciado: "Identifica a la figura histórica reconocida por escribir los primeros algoritmos destinados a ser procesados por la Máquina Analítica de Charles Babbage."

explicacion: |
  Ada Lovelace es reconocida históricamente por haber escrito el primer algoritmo destinado a ser procesado por una máquina.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  casos: [["Disquete", "CD-ROM", "USB"], ["Cassette", "Disco Duro", "SSD"]]
  idx: uno_de([0,1])
  respuesta_correcta: casos[idx][0]

tipo: completar
respuesta: respuesta_correcta
respuestas_validas:
  - "Disquete"
  - "CD-ROM"
  - "USB"
  - "Disco Duro"
  - "Cassette"
  - "SSD"

enunciado: "En la evolución del almacenamiento magnético y óptico, el dispositivo que precede al siguiente es: ___."

explicacion: |
  El orden de evolución tecnológica en el escenario seleccionado es: {casos[idx][0]} -> {casos[idx][1]} -> {casos[idx][2]}.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["internet", "web"]

respuesta: "Tim Berners-Lee"
tipo: mc

opciones_explicitas: ["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen", "Steve Jobs"]

enunciado: "¿Quién es el creador de la World Wide Web (WWW) según el contexto de la revolución digital?"

explicacion: |
  Tim Berners-Lee inventó la WWW en el CERN, permitiendo la democratización de la información en la red.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["movilidad", "hardware"]

variables:
  tecnologias: [["Teléfono Fijo", "Teléfono Móvil", "Smartphone"], ["Radio", "Walkman", "iPod"]]
  idx: uno_de([0,1])

respuesta: tecnologias[idx][2]
tipo: mc

opciones_explicitas: ["Teléfono Fijo", "Teléfono Móvil", "Smartphone", "Radio", "Walkman", "iPod"]

enunciado: "Identifica el dispositivo que representa la etapa final de la evolución de la comunicación/reproducción en este escenario: ___."

explicacion: |
  La evolución tecnológica sigue una línea de miniaturización y conectividad: {tecnologias[idx][0]} -> {tecnologias[idx][1]} -> {tecnologias[idx][2]}.
```

