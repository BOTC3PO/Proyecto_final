# Matemática — Variaciones (cuestionario, 24 preguntas VBLang)

> Tema: `CJ6`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una variación

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["variaciones", "vocabulario"]

enunciado: "¿Qué es una variación de k elementos elegidos de un conjunto de n elementos (k ≤ n)?"
tipo: mc
opciones_explicitas:
  - "Cada forma distinta de elegir y ORDENAR k elementos, sin repetir ninguno, donde el orden importa"
  - "Cada forma de elegir k elementos sin importar el orden"
  - "Cada forma de ordenar TODOS los n elementos"
respuesta: "Cada forma distinta de elegir y ORDENAR k elementos, sin repetir ninguno, donde el orden importa"

explicacion: |
  Se usa sólo una parte (k de n), y el orden en que se elige sí hace
  una diferencia.
```

### 2 — Completar: la fórmula de variaciones

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "completar"]

tipo: completar
enunciado: "Completá: V(n, k) = n! / ___."
respuestas_validas:
  - "(n-k)!"
  - "(n−k)!"

explicacion: |
  Se divide por el factorial de lo que NO se usa (los n−k elementos
  que quedan afuera).
```

### 3 — Problema: variación directa

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([5, 6, 7, 8])
  k: uno_de([2, 3])

respuesta: factorial(n) / factorial(n - k)
tipo: input

enunciado: "¿Cuántas variaciones de {k} elementos se pueden formar a partir de un conjunto de {n} elementos?"

pasos:
  - "V({n}, {k}) = {n}! / ({n}−{k})! = {factorial(n)} / {factorial(n - k)} = {factorial(n) / factorial(n - k)}"

explicacion: |
  Se divide el factorial de todos por el factorial de los que no se
  usan.
```

### 4 — El orden importa en una variación

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una variación, elegir A y luego B se cuenta como distinto de elegir B y luego A."

explicacion: |
  Es la diferencia clave con las combinaciones, donde AB y BA
  cuentan como la misma elección.
```

### 5 — Las variaciones no permiten repetir elementos

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: falso
tipo: vf

enunciado: "En una variación (en el sentido clásico de este módulo), se permite elegir el mismo elemento más de una vez."

explicacion: |
  Es falso: cada elemento se usa como máximo una vez, igual que en
  permutaciones.
```

### 6 — Problema: podio de 3 puestos

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  participantes: uno_de([6, 7, 8, 9])

respuesta: factorial(participantes) / factorial(participantes - 3)
tipo: input

enunciado: "En una carrera con {participantes} participantes, ¿de cuántas formas distintas se pueden repartir el 1°, 2° y 3° puesto del podio?"

pasos:
  - "V({participantes}, 3) = {participantes}! / ({participantes}−3)! = {factorial(participantes) / factorial(participantes - 3)}"

explicacion: |
  Importa el orden (no es lo mismo salir 1° que 3°), y una vez que
  alguien ocupa un puesto no puede ocupar otro.
```

### 7 — Problema: código sin repetir símbolos

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  disponibles: uno_de([8, 9, 10])
  longitud: uno_de([3, 4])

respuesta: factorial(disponibles) / factorial(disponibles - longitud)
tipo: input

enunciado: "Hay {disponibles} símbolos disponibles. ¿Cuántos códigos distintos de {longitud} símbolos (sin repetir ninguno, importa el orden) se pueden formar?"

pasos:
  - "V({disponibles}, {longitud}) = {disponibles}! / ({disponibles}−{longitud})! = {factorial(disponibles) / factorial(disponibles - longitud)}"

explicacion: |
  Es la misma fórmula que el podio, con otros números.
```

### 8 — La permutación es el caso k=n de la variación

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Una permutación es el caso particular de una variación donde k = n (se usan todos los elementos)."

explicacion: |
  V(n,n) = n!/(n−n)! = n!/0! = n!/1 = n! — exactamente la fórmula de
  permutaciones.
```

### 9 — Ordenar: pasos para calcular una variación

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular V(n, k) usando la fórmula de factoriales."
tipo: ordenar
opciones_explicitas:
  - "Dividir n! por (n−k)!"
  - "Calcular n! (el factorial de todos los elementos disponibles)"
  - "Calcular (n−k)! (el factorial de los que NO se usan)"
respuesta_orden: ["Calcular n! (el factorial de todos los elementos disponibles)", "Calcular (n−k)! (el factorial de los que NO se usan)", "Dividir n! por (n−k)!"]
explicacion: |
  El orden de los dos factoriales no importa para calcularlos, pero
  la división siempre va al final.
```

### 10 — Problema: verificar con el principio multiplicativo directo

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([6, 7, 8])

respuesta: n * (n - 1) * (n - 2)
tipo: input

enunciado: "Usando el principio multiplicativo directo (sin pasar por factoriales), ¿cuántas variaciones de 3 elementos hay en un conjunto de {n} elementos? (primer lugar: {n} opciones, segundo: {n}−1, tercero: {n}−2)"

pasos:
  - "V({n}, 3) = {n} × ({n}−1) × ({n}−2) = {n * (n - 1) * (n - 2)}"

explicacion: |
  Da exactamente el mismo resultado que n!/(n−3)! — son la misma
  cuenta escrita de dos formas.
```

### 11 — Diferencia con las combinaciones

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "combinaciones"]

enunciado: "¿Qué diferencia a una variación de una combinación (ambas eligen k de n elementos)?"
tipo: mc
opciones_explicitas:
  - "En la variación el orden importa (AB y BA son distintas); en la combinación no (AB y BA son la misma elección)"
  - "La variación permite repetir elementos y la combinación no"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "En la variación el orden importa (AB y BA son distintas); en la combinación no (AB y BA son la misma elección)"

explicacion: |
  Por eso la variación siempre da un número mayor o igual que la
  combinación para los mismos n y k.
```

### 12 — Problema: variación de 1 elemento

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: n
tipo: input

enunciado: "¿Cuántas variaciones de 1 solo elemento hay en un conjunto de {n} elementos?"

pasos:
  - "V({n}, 1) = {n}! / ({n}−1)! = {n} (elegir uno solo, no hay nada que ordenar)"

explicacion: |
  Con k=1 no hay orden que definir — el resultado es simplemente n.
```

### 13 — Problema: variación con k=n

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([4, 5, 6])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuántas variaciones de {n} elementos hay en un conjunto de {n} elementos (usando todos)?"

pasos:
  - "V({n}, {n}) = {n}! / 0! = {n}! / 1 = {factorial(n)}"

explicacion: |
  Coincide exactamente con la permutación de {n} elementos.
```

### 14 — Problema: presidente y vicepresidente

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  candidatos: uno_de([5, 6, 7, 8])

respuesta: candidatos * (candidatos - 1)
tipo: input

enunciado: "Entre {candidatos} candidatos, se va a elegir un presidente y un vicepresidente (dos cargos distintos, nadie puede ocupar los dos). ¿Cuántos resultados distintos son posibles?"

pasos:
  - "V({candidatos}, 2) = {candidatos} × ({candidatos}−1) = {candidatos * (candidatos - 1)}"

explicacion: |
  Presidente y vicepresidente son roles distintos: elegir a X de
  presidente e Y de vice es distinto de elegir a Y de presidente e X
  de vice.
```

### 15 — La variación siempre es mayor o igual que la combinación

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para los mismos n y k, V(n,k) siempre es mayor o igual que la combinación correspondiente C(n,k)."

explicacion: |
  La variación cuenta cada combinación tantas veces como formas de
  ordenar sus k elementos (k!) — por eso siempre es mayor o igual.
```

### 16 — Aplicación real: clave con letras distintas y orden importante

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["variaciones", "aplicacion"]

enunciado: "Si una clave usa 3 letras distintas (sin repetir) elegidas de un alfabeto de 26, y el orden en que se escriben importa, ¿qué hay que calcular para contar cuántas claves son posibles?"
tipo: mc
opciones_explicitas:
  - "Una variación: V(26, 3)"
  - "Una permutación de las 26 letras completas"
  - "Una simple multiplicación de 26 por 3"
respuesta: "Una variación: V(26, 3)"

explicacion: |
  Se usa sólo una parte (3 de 26 letras), sin repetir, y el orden
  importa — exactamente la definición de variación.
```

### 17 — La fórmula requiere k ≤ n

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula V(n,k) = n!/(n−k)! sólo tiene sentido cuando k ≤ n (no se puede elegir, sin repetir, más elementos de los que hay disponibles)."

explicacion: |
  Si k > n, (n−k)! implicaría el factorial de un número negativo, que
  no está definido en este contexto.
```

### 18 — Problema: comparar variaciones con distinto k

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])

respuesta: redondear((factorial(n) / factorial(n - 3)) / (factorial(n) / factorial(n - 2)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un conjunto de {n} elementos, ¿cuál es el cociente V({n},3) / V({n},2)?"

pasos:
  - "V({n},3) = {factorial(n) / factorial(n - 3)}"
  - "V({n},2) = {factorial(n) / factorial(n - 2)}"
  - "Cociente = {redondear((factorial(n) / factorial(n - 3)) / (factorial(n) / factorial(n - 2)), 3)}"

explicacion: |
  El cociente da exactamente (n−2): agregar un elemento más al orden
  multiplica por las opciones que quedan para ese lugar extra.
```

### 19 — Qué pasa con k=0

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: 1
tipo: input

enunciado: "Por convención, ¿cuánto es V(n, 0) (elegir y ordenar cero elementos)?"

explicacion: |
  V(n,0) = n!/n! = 1 — hay exactamente una forma de "no elegir nada".
```

### 20 — Problema: código de 4 símbolos de un teclado reducido

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  simbolos: uno_de([6, 7, 8])

respuesta: factorial(simbolos) / factorial(simbolos - 4)
tipo: input

enunciado: "Un teclado reducido tiene {simbolos} símbolos distintos disponibles. ¿Cuántos códigos de 4 símbolos (sin repetir, importa el orden) se pueden formar?"

pasos:
  - "V({simbolos}, 4) = {simbolos}! / ({simbolos}−4)! = {factorial(simbolos) / factorial(simbolos - 4)}"

explicacion: |
  Mismo procedimiento que las preguntas anteriores, con otro contexto.
```

### 21 — Cada variación usa como máximo una vez cada elemento

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una variación clásica, ningún elemento del conjunto original puede aparecer más de una vez en la selección ordenada."

explicacion: |
  Es la misma restricción de 'sin repetir' que tienen las
  permutaciones, aplicada ahora a sólo una parte de los elementos.
```

### 22 — Problema: medallas de oro, plata y bronce

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  atletas: uno_de([8, 9, 10])

respuesta: factorial(atletas) / factorial(atletas - 3)
tipo: input

enunciado: "En una competencia con {atletas} atletas, ¿de cuántas formas distintas se pueden entregar las medallas de oro, plata y bronce (una por atleta, no se repite medalla)?"

pasos:
  - "V({atletas}, 3) = {atletas}! / ({atletas}−3)! = {factorial(atletas) / factorial(atletas - 3)}"

explicacion: |
  Es el mismo problema del podio, en otro contexto.
```

### 23 — La cantidad de variaciones nunca supera al principio multiplicativo simple

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "V(n,k) siempre es menor o igual que n^k (elegir k veces entre n opciones PERMITIENDO repetir)."

explicacion: |
  Prohibir la repetición sólo puede reducir la cantidad de opciones
  disponibles en cada paso, nunca aumentarla.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular variaciones?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántas formas hay de elegir y ORDENAR una parte de un conjunto, sin repetir elementos"
  - "Sólo sirve cuando se usan todos los elementos del conjunto"
  - "Sólo aplica cuando el orden no importa"
respuesta: "Para contar cuántas formas hay de elegir y ORDENAR una parte de un conjunto, sin repetir elementos"

explicacion: |
  Es el paso intermedio entre permutaciones (usar todos, con orden) y
  combinaciones (usar una parte, sin orden) — el próximo módulo.
```
