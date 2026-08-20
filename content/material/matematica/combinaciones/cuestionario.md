# Matemática — Combinaciones (cuestionario, 25 preguntas VBLang)

> Tema: `CJ7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una combinación

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "vocabulario"]

enunciado: "¿Qué es una combinación de k elementos elegidos de un conjunto de n elementos (k ≤ n)?"
tipo: mc
opciones_explicitas:
  - "Cada forma distinta de elegir k elementos, sin repetir ninguno, donde el ORDEN NO importa"
  - "Cada forma distinta de elegir Y ordenar k elementos"
  - "Cada forma de ordenar TODOS los n elementos"
respuesta: "Cada forma distinta de elegir k elementos, sin repetir ninguno, donde el ORDEN NO importa"

explicacion: |
  Elegir A y B es lo mismo que elegir B y A — es la misma combinación.
```

### 2 — Completar: la fórmula de combinaciones

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "completar"]

tipo: completar
enunciado: "Completá: C(n, k) = n! / (___ × (n−k)!)."
respuestas_validas:
  - "k!"

explicacion: |
  Se divide por k! para no contar cada combinación una vez por cada
  orden posible de sus elementos.
```

### 3 — Problema: combinación directa

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([6, 7, 8, 9, 10])
  k: uno_de([2, 3])

respuesta: combinations(n, k)
tipo: input

enunciado: "¿Cuántas combinaciones de {k} elementos se pueden formar a partir de un conjunto de {n} elementos?"

pasos:
  - "C({n}, {k}) = {n}! / ({k}! × ({n}−{k})!) = {combinations(n, k)}"

explicacion: |
  Se divide la variación correspondiente por las formas de ordenar los
  {k} elementos elegidos.
```

### 4 — En una combinación, AB y BA son la misma elección

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una combinación, elegir A y luego B es exactamente lo mismo que elegir B y luego A — cuentan como UNA sola combinación."

explicacion: |
  Es la diferencia clave con las variaciones, donde sí se
  distinguen.
```

### 5 — Las combinaciones no permiten repetir elementos

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones"]

respuesta: falso
tipo: vf

enunciado: "En una combinación (en el sentido clásico de este módulo), se permite elegir el mismo elemento más de una vez."

explicacion: |
  Es falso: cada elemento se elige como máximo una vez, igual que en
  variaciones y permutaciones.
```

### 6 — Problema: comité de personas

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  candidatos: uno_de([8, 9, 10, 12])
  comite: uno_de([2, 3])

respuesta: combinations(candidatos, comite)
tipo: input

enunciado: "Entre {candidatos} candidatos, se va a formar un comité de {comite} personas, sin roles distintos (no importa el orden en que se elijan). ¿Cuántos comités distintos son posibles?"

pasos:
  - "C({candidatos}, {comite}) = {combinations(candidatos, comite)}"

explicacion: |
  A diferencia de elegir presidente y vicepresidente (variación), acá
  ningún miembro del comité tiene un rol distinto de los demás.
```

### 7 — Problema: elegir cartas de un mazo

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  mazo: uno_de([10, 12, 15])
  mano: uno_de([2, 3])

respuesta: combinations(mazo, mano)
tipo: input

enunciado: "De un mazo de {mazo} cartas distintas, ¿de cuántas formas se pueden elegir {mano} cartas (sin importar el orden en que se las reciba)?"

pasos:
  - "C({mazo}, {mano}) = {combinations(mazo, mano)}"

explicacion: |
  Una mano de cartas es el ejemplo clásico de combinación: no importa
  en qué orden llegaron a la mano.
```

### 8 — Propiedad simétrica: C(n,k) = C(n, n−k)

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "C(n, k) es siempre igual a C(n, n−k) — elegir k para incluir es lo mismo que elegir n−k para dejar afuera."

explicacion: |
  Son la misma partición del conjunto en dos partes, mirada desde
  cualquiera de los dos lados.
```

### 9 — Problema: verificar la propiedad simétrica

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([8, 9, 10])
  k: uno_de([2, 3])

respuesta: combinations(n, n - k)
tipo: input

enunciado: "Si C({n}, {k}) = {combinations(n, k)}, ¿cuánto es C({n}, {n}−{k})?"

pasos:
  - "Por la propiedad simétrica, C({n}, {n}−{k}) = C({n}, {k}) = {combinations(n, n - k)}"

explicacion: |
  Elegir {k} para incluir de un total de {n} es lo mismo que elegir
  {n}−{k} para dejar afuera.
```

### 10 — Ordenar: pasos para calcular una combinación

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular C(n, k) a partir de la variación correspondiente."
tipo: ordenar
opciones_explicitas:
  - "Dividir esa variación por k! (las formas de ordenar los k elementos elegidos)"
  - "Calcular la variación V(n, k) = n! / (n−k)!"
  - "El resultado de esa división es C(n, k)"
respuesta_orden: ["Calcular la variación V(n, k) = n! / (n−k)!", "Dividir esa variación por k! (las formas de ordenar los k elementos elegidos)", "El resultado de esa división es C(n, k)"]
explicacion: |
  La combinación se obtiene corrigiendo la variación por el
  sobre-conteo de los distintos órdenes.
```

### 11 — Problema: relación entre variación y combinación

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])
  k: uno_de([2, 3])

respuesta: combinations(n, k) * factorial(k)
tipo: input

enunciado: "Si C({n}, {k}) = {combinations(n, k)}, ¿cuánto vale la variación V({n}, {k}) (multiplicando la combinación por las formas de ordenar los {k} elementos)?"

pasos:
  - "V({n}, {k}) = C({n}, {k}) × {k}! = {combinations(n, k)} × {factorial(k)} = {combinations(n, k) * factorial(k)}"

explicacion: |
  Es la relación inversa a la fórmula de combinaciones: V = C × k!.
```

### 12 — Por qué se divide por k!

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

enunciado: "¿Por qué la fórmula de combinaciones divide la variación por k!?"
tipo: mc
opciones_explicitas:
  - "Porque cada combinación de k elementos corresponde a k! variaciones distintas (todos los órdenes posibles de esos mismos elementos), y hay que corregir ese sobre-conteo"
  - "Porque k! siempre es un número muy grande y hay que reducir el resultado"
  - "No hay ninguna razón matemática, es sólo una convención arbitraria"
respuesta: "Porque cada combinación de k elementos corresponde a k! variaciones distintas (todos los órdenes posibles de esos mismos elementos), y hay que corregir ese sobre-conteo"

explicacion: |
  Sin dividir, se estaría contando la misma combinación una vez por
  cada orden posible de sus elementos.
```

### 13 — Problema: combinación de 1 elemento

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: n
tipo: input

enunciado: "¿Cuántas combinaciones de 1 solo elemento hay en un conjunto de {n} elementos?"

pasos:
  - "C({n}, 1) = {n} (elegir uno solo, sin nada más que decidir)"

explicacion: |
  Con k=1 no hay orden ni repetición que considerar: el resultado es
  simplemente n.
```

### 14 — Problema: elegir todos los elementos

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: 1
tipo: input

enunciado: "¿Cuántas combinaciones de {n} elementos hay en un conjunto de {n} elementos (elegirlos todos)?"

explicacion: |
  Sólo hay una forma de 'elegir a todos' — no hay ninguna decisión
  real que tomar.
```

### 15 — Problema: elegir ningún elemento

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: 1
tipo: input

enunciado: "Por convención, ¿cuántas combinaciones de 0 elementos hay en un conjunto de {n} elementos?"

explicacion: |
  C(n, 0) = 1 — hay exactamente una forma de 'no elegir nada' (el
  conjunto vacío).
```

### 16 — La combinación nunca supera a la variación correspondiente

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para los mismos n y k, C(n,k) siempre es menor o igual que V(n,k)."

explicacion: |
  La combinación es la variación dividida por k! (que es 1 o mayor),
  así que nunca puede ser mayor.
```

### 17 — Aplicación real: lotería

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "aplicacion"]

enunciado: "En una lotería donde se elige un grupo de números sin importar el orden en que salen, ¿qué hay que calcular para saber cuántos resultados distintos son posibles?"
tipo: mc
opciones_explicitas:
  - "Una combinación: no importa el orden en que salen los números, sólo cuáles salen"
  - "Una variación, porque el orden de salida sí importa"
  - "Una simple multiplicación de la cantidad de números por sí misma"
respuesta: "Una combinación: no importa el orden en que salen los números, sólo cuáles salen"

explicacion: |
  Ganar con los números 5-12-23 es lo mismo que ganar con 23-5-12: el
  orden de salida no cambia el resultado del sorteo.
```

### 18 — Problema: lotería con números concretos

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  total_numeros: uno_de([20, 25, 30])
  elegidos: uno_de([3, 4])

respuesta: combinations(total_numeros, elegidos)
tipo: input

enunciado: "Una lotería sortea {elegidos} números distintos de un total de {total_numeros} números posibles (sin importar el orden). ¿Cuántos resultados de sorteo distintos son posibles?"

pasos:
  - "C({total_numeros}, {elegidos}) = {combinations(total_numeros, elegidos)}"

explicacion: |
  Es exactamente el mismo cálculo que un comité o una mano de cartas.
```

### 19 — Aplicación real: probabilidad compuesta y genética

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "aplicacion"]

enunciado: "¿Para qué se usan las combinaciones en problemas de probabilidad compuesta (por ejemplo, probabilidades genéticas en Biología)?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántos casos favorables y cuántos casos totales hay, sin necesidad de enumerarlos todos, y así calcular la probabilidad como un cociente"
  - "Sólo sirven para calcular promedios de datos"
  - "No tienen ninguna aplicación en probabilidad"
respuesta: "Para contar cuántos casos favorables y cuántos casos totales hay, sin necesidad de enumerarlos todos, y así calcular la probabilidad como un cociente"

explicacion: |
  Es el puente directo hacia Probabilidad compuesta (Tronco 4.b).
```

### 20 — Problema: triángulos formados por puntos

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  puntos: uno_de([6, 7, 8, 9])

respuesta: combinations(puntos, 3)
tipo: input

enunciado: "Hay {puntos} puntos marcados en una hoja, ninguno alineado con otros dos. ¿Cuántos triángulos distintos se pueden formar uniendo 3 de esos puntos?"

pasos:
  - "Cada triángulo es un grupo de 3 puntos, sin importar el orden en que se los nombre: C({puntos}, 3) = {combinations(puntos, 3)}"

explicacion: |
  Un triángulo con vértices A, B, C es el mismo triángulo sin importar
  en qué orden se mencionen los vértices — por eso es combinación, no
  variación.
```

### 21 — Combinaciones y variaciones sólo coinciden cuando k=1 (o k=n con n=1)

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para k=1, la combinación C(n,1) y la variación V(n,1) dan exactamente el mismo resultado (ambas son n)."

explicacion: |
  Con un solo elemento elegido no hay ningún orden que definir, así
  que dividir por 1! (=1) no cambia nada.
```

### 22 — Problema: comparar combinación con y sin cierto elemento fijo

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([9, 10, 11])
  k: uno_de([3, 4])

respuesta: combinations(n - 1, k - 1)
tipo: input

enunciado: "De un grupo de {n} personas, se va a elegir un comité de {k}, con la condición de que una persona específica (el director) SIEMPRE tiene que estar incluida. ¿Cuántos comités distintos son posibles?"

pasos:
  - "El director ya está incluido: sólo hay que elegir los {k}−1 restantes entre las otras {n}−1 personas"
  - "C({n}−1, {k}−1) = {combinations(n - 1, k - 1)}"

explicacion: |
  Fijar un elemento reduce el problema a elegir el resto entre los que
  quedan disponibles.
```

### 23 — Sin combinaciones, la probabilidad compuesta quedaría atada a enumerar

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Sin la fórmula de combinaciones, calcular la probabilidad de sucesos compuestos (como extraer varias cartas de un mismo color) quedaría condenado a enumerar caso por caso."

explicacion: |
  Para conjuntos grandes, enumerar deja de ser viable — combinaciones
  resuelve el conteo sin listar nada.
```

### 24 — Problema: dos comités distintos de un mismo grupo

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([10, 12, 14])

respuesta: combinations(n, 2) + combinations(n, 3)
tipo: input

enunciado: "De un grupo de {n} personas, se quiere saber cuántos comités posibles hay en total, contando tanto los comités de 2 personas como los de 3 personas (cada tamaño por separado, sumados al final). ¿Cuál es ese total?"

pasos:
  - "Comités de 2: C({n}, 2) = {combinations(n, 2)}"
  - "Comités de 3: C({n}, 3) = {combinations(n, 3)}"
  - "Total = {combinations(n, 2)} + {combinations(n, 3)} = {combinations(n, 2) + combinations(n, 3)}"

explicacion: |
  Como son comités de tamaños distintos (no se solapan entre sí), se
  suman directo las dos cantidades.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular combinaciones?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántas formas hay de elegir una parte de un conjunto SIN importar el orden, sin repetir elementos"
  - "Sólo sirve cuando el orden de la elección es importante"
  - "Sólo aplica a conjuntos de cartas de juego"
respuesta: "Para contar cuántas formas hay de elegir una parte de un conjunto SIN importar el orden, sin repetir elementos"

explicacion: |
  Cierra el tronco de Conjuntos y combinatoria (4.a), y es la puerta
  directa hacia Probabilidad compuesta (Tronco 4.b).
```
