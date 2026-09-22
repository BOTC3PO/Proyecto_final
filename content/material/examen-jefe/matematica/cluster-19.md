# Examen jefe — [PENDIENTE #619]

> Logro #619. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: numeros-primos (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

enunciado: "¿Qué es un número primo?"
tipo: mc
opciones_explicitas:
  - "Un número mayor que 1 con exactamente 2 divisores: el 1 y él mismo"
  - "Un número que no se puede dividir por ningún otro"
  - "Cualquier número impar"
respuesta: "Un número mayor que 1 con exactamente 2 divisores: el 1 y él mismo"

explicacion: |
  Todo número primo tiene exactamente dos divisores, ni más ni menos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(2, 50)

respuesta: es_primo(n)
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  Se prueba si {n} tiene algún divisor además de 1 y él mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(50, 150)

respuesta: es_primo(n)
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  Con números más grandes conviene probar dividir por los primos chicos
  (2, 3, 5, 7, 11...) hasta la raíz cuadrada de {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

enunciado: "¿Qué es un número compuesto?"
tipo: mc
opciones_explicitas:
  - "Un número mayor que 1 con más de 2 divisores"
  - "Cualquier número par"
  - "Un número que no tiene divisores"
respuesta: "Un número mayor que 1 con más de 2 divisores"

explicacion: |
  Si tiene más de 2 divisores, no puede ser primo: es compuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(4, 100)

respuesta: (es_primo(n) == falso)
tipo: vf

enunciado: "¿Es {n} un número compuesto?"

explicacion: |
  Un número mayor que 1 que no es primo, es compuesto — no hay una tercera
  opción (salvo el propio 1).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El número 1 no es primo ni compuesto."

explicacion: |
  El 1 tiene un solo divisor (él mismo), no dos, así que no cumple la
  definición de ninguno de los dos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 2 es el único número primo que es par."

explicacion: |
  Cualquier otro número par tiene, como mínimo, tres divisores (1, 2, y él
  mismo), así que ya es compuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  candidatos: [11, 13, 17, 19, 23, 29, 31]
  primo: uno_de(candidatos)
  compuesto1: primo + 1
  compuesto2: primo - 1

respuesta: primo
tipo: mc
opciones_explicitas:
  - primo
  - compuesto1
  - compuesto2

enunciado: "¿Cuál de estos tres números es primo?"

explicacion: |
  Los otros dos son pares (compuestos): el número que queda entre dos
  pares consecutivos suele ser el único candidato a primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  candidatos: [11, 13, 17, 19, 23, 29, 31]
  primo1: uno_de(candidatos)
  primo2: uno_de(candidatos)
  compuesto: primo1 + 1

restricciones:
  - primo1 != primo2

respuesta: compuesto
tipo: mc
opciones_explicitas:
  - primo1
  - primo2
  - compuesto

enunciado: "¿Cuál de estos tres números NO es primo?"

explicacion: |
  {compuesto} es par (y mayor que 2), así que ya tiene al 2 como tercer
  divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  candidatos: [2, 3, 5, 7, 11, 13, 17, 19, 23]
  n: uno_de(candidatos)

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número primo {n}?"

explicacion: |
  Todo número primo tiene exactamente 2 divisores: el 1 y él mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(4, 60)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene {n}?"

explicacion: |
  Se cuentan todos los divisores; si son más de 2, ya se sabe que {n} no
  es primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

respuesta: 11
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el 5° número primo (contando el 2 como el primero: 2, 3, 5, 7, 11...)?"

explicacion: |
  Los primeros primos son 2, 3, 5, 7, 11 — el quinto es 11.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7]
  p1: uno_de(primos)
  p2: uno_de(primos)
  p3: uno_de(primos)
  n: p1 * p2 * p3

respuesta: largo(factorizar(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos factores primos tiene la factorización de {n} (contando cada repetido)?"

explicacion: |
  {n} se armó multiplicando 3 primos (a veces repetidos), así que su
  factorización tiene 3 factores en total.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7, 11]
  p1: uno_de(primos)
  p2: uno_de(primos)

respuesta: p1 * p2
tipo: input
tolerancia_abs: 0

enunciado: "Si la factorización prima de un número es {p1} × {p2}, ¿cuál es ese número?"

explicacion: |
  Multiplicar los factores primos reconstruye el número original.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5]
  p: uno_de(primos)

respuesta: p * p * p
tipo: input
tolerancia_abs: 0

enunciado: "Si la factorización prima de un número es {p} × {p} × {p}, ¿cuál es ese número?"

explicacion: |
  Un mismo primo puede repetirse en la factorización: {p} × {p} × {p} es
  {p} elevado al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "factorizacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número compuesto tiene una única factorización prima (sin contar el orden de los factores)."

explicacion: |
  Es el Teorema Fundamental de la Aritmética: no hay dos formas distintas
  de descomponer el mismo número en primos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún número par mayor que 2 puede ser primo."

explicacion: |
  Todo número par mayor que 2 tiene al 2 como divisor extra, además de 1 y
  él mismo: ya son 3 divisores como mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(3, 200) * 2

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  {n} es par y mayor que 2: la regla de divisibilidad del 2 ya alcanza
  para descartarlo como primo, sin necesidad de probar más divisores.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(3, 200) * 3 + uno_de([0, 3, 6])

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  La suma de las cifras de {n} es múltiplo de 3, así que ya se sabe que
  tiene al 3 como divisor extra — no puede ser primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "orden"]

tipo: ordenar
enunciado: "Ordená estos números primos de menor a mayor."
opciones_explicitas:
  - "17"
  - "5"
  - "13"
  - "11"
respuesta_orden: ["5", "11", "13", "17"]

explicacion: |
  Los cuatro son primos; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7]
  p: uno_de(primos)
  k: random(2, 20)
  n: p * k

respuesta: verdadero
tipo: vf

enunciado: "¿Es {p} uno de los factores primos de {n}?"

explicacion: |
  {n} se construyó multiplicando {p} por otro número, así que {p} tiene
  que aparecer en su factorización.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "avanzado"
  tags: ["numeros_primos", "problema"]

variables:
  primos: [2, 3, 5, 7]
  p1: uno_de(primos)
  p2: uno_de(primos)
  n: p1 * p2

respuesta: p2
tipo: input
tolerancia_abs: 0

enunciado: "Un salón con {n} sillas se organiza en {p1} filas iguales. ¿Cuántas sillas hay en cada fila?"

explicacion: |
  Como {n} = {p1} × {p2}, dividir por {p1} da exactamente {p2}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(3, 100) * 5

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  {n} termina en 0 o en 5 (regla del 5): salvo que sea el propio 5, ya no
  puede ser primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "avanzado"
  tags: ["numeros_primos"]

variables:
  candidatos: [3, 5, 11, 17, 29]
  p: uno_de(candidatos)

respuesta: es_primo(p + 2)
tipo: vf

enunciado: "{p} es primo. ¿{p} + 2 también es primo?"

explicacion: |
  Cuando dos primos están separados por sólo 2 (como 3 y 5, u 11 y 13) se
  llaman "primos gemelos" — no todos los primos tienen un gemelo así.
```

## Sección: demostracion-contraejemplo (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["primos", "verdadero_falso"]

variables:
  n: uno_de([1, 2, 5, 10, 15, 20, 25, 30, 35, 40])

respuesta: es_primo(n ^ 2 + n + 41)
tipo: vf

enunciado: "La afirmación es 'n² + n + 41 siempre da un número primo'. Para n = {n}, ¿es primo el resultado?"

explicacion: |
  Funciona para casi todos los n chicos, pero falla en n = 40 (el
  contraejemplo que refuta la afirmación general).
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "basico"
  tags: ["primos", "verdadero_falso"]

variables:
  n: uno_de([3, 5, 7, 9, 11, 13, 15, 21, 25, 27])

respuesta: es_primo(n)
tipo: vf

enunciado: "La afirmación es 'todo número impar es primo'. {n} es impar. ¿Es primo?"

explicacion: |
  9, 15, 21, 25 y 27 son impares pero no primos — cualquiera de ellos
  es un contraejemplo que refuta la afirmación.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["signos", "verdadero_falso"]

variables:
  a: random(1, 20)
  b: uno_de([1, -1]) * a

respuesta: (a == b)
tipo: vf

enunciado: "a = {a}, b = {b}. Se cumple que a² = b². La afirmación dice 'si a² = b², entonces a = b'. ¿Es a = b en este caso?"

explicacion: |
  Cuando b = −a, a² = b² igual se cumple, pero a ≠ b — un contraejemplo
  que refuta la afirmación general.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "basico"
  tags: ["casos_limite", "verdadero_falso"]

variables:
  n: uno_de([0, 1, 2, 3, 5, 10, -3, -5])

respuesta: (n ^ 2 > n)
tipo: vf

enunciado: "La afirmación es 'n² siempre es mayor que n'. Para n = {n}, ¿es n² mayor que n?"

explicacion: |
  n = 0 y n = 1 son contraejemplos (n² = n en esos casos, no mayor) —
  refutan la afirmación general, aunque valga para casi todos los demás
  números.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["primos", "verdadero_falso"]

variables:
  p: uno_de([2, 3, 5, 7, 11])
  q: uno_de([2, 3, 5, 7, 11])

respuesta: ((p + q) - ((p + q) / 2) * 2) == 0
tipo: vf

enunciado: "La afirmación es 'la suma de dos números primos siempre es par'. Con p = {p} y q = {q}, ¿es p+q par?"

explicacion: |
  Falla cuando uno de los dos primos es 2 (el único primo par): 2+3=5,
  impar — un contraejemplo que refuta la afirmación.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un solo contraejemplo alcanza para refutar una afirmación que dice 'para todo x, se cumple P(x)'."

explicacion: |
  No importa cuántos casos SÍ cumplan la propiedad — uno solo que falle
  ya la refuta.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Encontrar 1000 casos donde una afirmación se cumple prueba que no tiene ningún contraejemplo."

explicacion: |
  El contraejemplo podría estar en el caso 1001, o en cualquier otro no
  revisado — muchos casos que cumplen dan confianza, no prueba.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Un contraejemplo sirve para refutar una afirmación existencial, del tipo 'existe algún x tal que P(x)'."

explicacion: |
  Los contraejemplos refutan afirmaciones UNIVERSALES ("para todo x").
  Para refutar una existencial hace falta demostrar que NINGÚN caso
  cumple, no basta un solo caso.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Probar primero con 0, 1, números negativos o casos límite es una buena estrategia para buscar contraejemplos."

explicacion: |
  Muchas afirmaciones que parecen ciertas fallan justo en esos casos
  especiales.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Buscar un contraejemplo es el mismo tipo de trabajo que demostrar una afirmación de forma deductiva."

explicacion: |
  Son opuestos: demostrar (deducción) prueba que algo vale SIEMPRE; un
  contraejemplo prueba que algo falla AL MENOS una vez.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: 9
tipo: mc
opciones_explicitas:
  - 9
  - 7
  - 11

enunciado: "¿Cuál de estos números es un contraejemplo de 'todo número impar es primo'?"

explicacion: |
  9 es impar y no es primo (9 = 3×3). 7 y 11 son impares Y primos, así
  que no sirven como contraejemplo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: 1
tipo: mc
opciones_explicitas:
  - 1
  - 5
  - 10

enunciado: "¿Cuál de estos números es un contraejemplo de 'n² siempre es mayor que n'?"

explicacion: |
  Con n=1: 1² = 1, que NO es mayor que 1. Con n=5 o n=10, n² sí es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "p = 2, q = 3 (suma 5, impar)"
tipo: mc
opciones_explicitas:
  - "p = 2, q = 3 (suma 5, impar)"
  - "p = 3, q = 5 (suma 8, par)"
  - "p = 5, q = 7 (suma 12, par)"

enunciado: "¿Cuál de estos pares es un contraejemplo de 'la suma de dos primos siempre es par'?"

explicacion: |
  2 es el único primo par — sumado a cualquier otro primo (siempre impar
  salvo el 2) da un resultado impar.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "n = 2 (no refuta nada, la fórmula sigue dando primo)"
tipo: mc
opciones_explicitas:
  - "n = 2 (no refuta nada, la fórmula sigue dando primo)"
  - "n = 40 (refuta la fórmula de Euler)"
  - "n = 0 (refuta que n² siempre sea mayor que n)"

enunciado: "¿Cuál de estas opciones NO es un contraejemplo válido de ninguna de las afirmaciones vistas en este módulo?"

explicacion: |
  n=2 en n²+n+41 da 47, que es primo — no refuta la fórmula de Euler
  (el contraejemplo real de esa fórmula es n=40).
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: uno_de([2, 3, 4, 5, 6, 7, 8, 9, 10])

respuesta: (n - (n / 2) * 2) != 0
tipo: vf

enunciado: "La afirmación es 'todo número entero es par'. ¿Es n = {n} un contraejemplo de esa afirmación (o sea, es impar)?"

explicacion: |
  Cualquier número impar sirve como contraejemplo de "todo entero es
  par" — la afirmación es obviamente falsa, y cualquier impar lo prueba.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si después de buscar un rato no se encuentra un contraejemplo, eso significa que la afirmación general está demostrada."

explicacion: |
  No encontrar uno (todavía) no es lo mismo que probar que no existe —
  hace falta una demostración deductiva para eso, no sólo no encontrar
  contraejemplos.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "avanzado"
  tags: ["primos"]

variables:
  n: 40

respuesta: n ^ 2 + n + 41
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale n² + n + 41 para n = 40?"

pasos:
  - "40² + 40 + 41 = 1600 + 40 + 41 = 1681 = 41², no es primo"

explicacion: |
  1681 = 41 × 41 — no es primo, así que n=40 refuta la afirmación "n²+n+41
  siempre es primo".
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si una fórmula da el resultado correcto en el 99% de los casos probados, la afirmación 'siempre funciona' queda demostrada."

explicacion: |
  Un solo caso que falle (el 1% restante) alcanza para refutar el
  "siempre" — no importa cuán alto sea el porcentaje de aciertos.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "a = 4, b = −4"
tipo: mc
opciones_explicitas:
  - "a = 4, b = −4"
  - "a = 4, b = 4"
  - "a = 4, b = 2"

enunciado: "¿Cuál de estas opciones es un contraejemplo de 'si a² = b², entonces a = b'?"

explicacion: |
  4² = 16 y (−4)² = 16 son iguales, pero 4 ≠ −4 — refuta la afirmación.
  a=4,b=4 no sirve (ahí SÍ es a=b); a=4,b=2 ni siquiera cumple a²=b².
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Después de encontrar un contraejemplo, muchas veces la afirmación se puede corregir agregando una condición (por ejemplo, 'si a y b son positivos, y a²=b², entonces a=b' sí es verdadera)."

explicacion: |
  El contraejemplo no siempre tira abajo toda la idea — a veces señala
  justo qué condición faltaba agregar.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "basico"
  tags: ["primos"]

respuesta: falso

tipo: vf

enunciado: "¿Es 9 un número primo?"

explicacion: |
  9 = 3×3, tiene un divisor además de 1 y sí mismo — no es primo. Por
  eso es el contraejemplo clásico de "todo impar es primo".
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_contraejemplo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Buscar contraejemplos es útil incluso antes de intentar una demostración: si se encuentra uno rápido, se ahorra el trabajo de intentar demostrar algo falso."

explicacion: |
  Es una estrategia práctica: antes de gastar tiempo demostrando, conviene
  probar algunos casos sospechosos para ver si la afirmación resiste.
```

## Sección: demostracion-deduccion (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  m: random(1, 30)
  n: m * 2

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "Por definición, todo número par n se puede escribir como n = 2k. Si n = {n}, ¿cuánto vale k?"

explicacion: |
  k = n/2 = {m}.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["modus_ponens"]

variables:
  m: random(1, 20)
  n: random(1, 20)
  a: 2 * m
  b: 2 * n

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Premisa: si a y b son pares, a + b es par. a = {a} y b = {b} son pares. ¿Cuánto vale a + b (y por qué la conclusión garantiza que también es par)?"

pasos:
  - "a + b = {a} + {b} = {a + b} = 2×({m}+{n}), que tiene la forma 2×(entero)"

explicacion: |
  La conclusión "a+b es par" no depende de qué números concretos sean —
  se sigue necesariamente de que ambos tengan la forma 2k.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  m: random(1, 15)
  n: random(1, 15)
  a: 2 * m
  b: 2 * n

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "a = {a} y b = {b} son pares (a = 2×{m}, b = 2×{n}). El producto a×b, ¿da un múltiplo de 4? Calculá a×b."

explicacion: |
  a×b = (2m)(2n) = 4mn — siempre múltiplo de 4, no sólo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  m: random(1, 15)
  a: 2 * m + 1

respuesta: a ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "a = {a} es impar (a = 2×{m}+1). ¿Cuánto vale a²? (Se puede demostrar que el cuadrado de un impar siempre es impar.)"

explicacion: |
  a² = (2m+1)² = 4m²+4m+1 = 2(2m²+2m)+1, que tiene la forma 2×(entero)+1
  — impar, sea cual sea m.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las premisas de un razonamiento deductivo son verdaderas, la conclusión tiene que ser verdadera necesariamente."

explicacion: |
  Es la característica central de la deducción: no hay forma de que las
  premisas sean ciertas y la conclusión falsa.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Comprobar que una propiedad se cumple en 5 o 10 casos concretos ya es una demostración válida de que se cumple siempre."

explicacion: |
  Verificar ejemplos da confianza, pero no prueba el caso general —
  puede fallar en el ejemplo número 11 que no se probó.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modus ponens dice: si 'P implica Q' es verdadero, y P es verdadero, entonces Q es verdadero."

explicacion: |
  Es la forma más básica de razonamiento deductivo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Usar como paso intermedio, de forma disfrazada, lo mismo que se quiere demostrar, es una técnica válida de demostración."

explicacion: |
  Es un error lógico llamado "petición de principio" o razonamiento
  circular: no prueba nada nuevo, sólo repite la conclusión como si fuera
  un dato.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En una demostración, cada paso nuevo tiene que apoyarse en una definición, una propiedad ya probada, o una regla lógica."

explicacion: |
  Un paso sin justificación es un salto en la cadena — puede ser
  verdadero de casualidad, pero no está demostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una demostración parte de la hipótesis (lo que se da por conocido) y llega a la tesis (lo que se quiere probar)."

explicacion: |
  Es la estructura básica de cualquier demostración deductiva.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Modus ponens (deducción válida)"
tipo: mc
opciones_explicitas:
  - "Modus ponens (deducción válida)"
  - "Generalizar de un solo ejemplo"
  - "Razonamiento circular"

enunciado: "'Si un triángulo es equilátero, sus tres ángulos son iguales. Este triángulo es equilátero. Por lo tanto, sus tres ángulos son iguales.' ¿Qué tipo de razonamiento es?"

explicacion: |
  Sigue exactamente la forma P→Q, P, luego Q.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Generalizar de un solo ejemplo"
tipo: mc
opciones_explicitas:
  - "Generalizar de un solo ejemplo"
  - "Modus ponens (deducción válida)"
  - "Razonamiento circular"

enunciado: "'Probé con n=2 y n=3, y en los dos casos n²+n+1 dio un número primo. Por lo tanto, n²+n+1 siempre es primo.' ¿Qué tipo de razonamiento es?"

explicacion: |
  Comprobar un par de casos no prueba la afirmación general — es sólo
  evidencia, no una demostración deductiva.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "Razonamiento circular"
tipo: mc
opciones_explicitas:
  - "Razonamiento circular"
  - "Modus ponens (deducción válida)"
  - "Generalizar de un solo ejemplo"

enunciado: "'x es par porque x/2 es un número entero. Y x/2 es un número entero porque x es par.' ¿Qué problema tiene este razonamiento?"

explicacion: |
  Cada afirmación se usa para justificar la otra, sin ningún punto de
  apoyo externo — no prueba nada.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Probarlo para cualquier número par, no sólo esos dos"
tipo: mc
opciones_explicitas:
  - "Probarlo para cualquier número par, no sólo esos dos"
  - "Nada, ya está completa"
  - "Elegir números más grandes"

enunciado: "Alguien quiere demostrar que 'todo número par al cuadrado es par', y como prueba calcula 4² = 16 y 6² = 36 (los dos pares). ¿Qué le falta a esta demostración?"

explicacion: |
  Hace falta el argumento general (a = 2k → a² = 4k² = 2(2k²), que
  también es par), válido para cualquier número par, no sólo los dos
  ejemplos probados.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["modus_ponens", "verdadero_falso"]

variables:
  n: random(2, 20) * 3

respuesta: (n - (n / 3) * 3) == 0
tipo: vf

enunciado: "Premisa: si n es múltiplo de 3, n/3 es un número entero. n = {n} es múltiplo de 3. ¿Es {n}/3 un número entero?"

explicacion: |
  Se sigue directo de la premisa, por modus ponens.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(1, 20)
  n: random(1, 20)
  a: 2 * m
  b: 2 * n
  suma: a + b

respuesta: (suma - (suma / 2) * 2) == 0
tipo: vf

enunciado: "En la demostración 'a+b es par si a y b son pares', con a = {a} y b = {b}: ¿es {suma} = a+b divisible por 2?"

explicacion: |
  Es exactamente el paso central de la demostración: a+b = 2(m+n),
  siempre divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Un ejemplo nunca sirve para demostrar ni para refutar nada en matemática."

explicacion: |
  Un ejemplo no prueba una afirmación general, pero SÍ puede refutarla:
  un solo caso que falle (un contraejemplo) alcanza para tirar abajo una
  afirmación general — tema del próximo módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  m: random(1, 10)
  n: random(1, 10)
  p: random(1, 10)
  a: 2 * m
  b: 2 * n
  c: 2 * p

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "a = {a}, b = {b} y c = {c} son pares. Por la propiedad ya demostrada (par + par = par), ¿cuánto vale a + b + c, y sigue siendo par?"

explicacion: |
  Aplicando la propiedad dos veces (a+b es par, y ese resultado + c
  también), se deduce que la suma de tres pares es par, sin tener que
  demostrarlo de nuevo desde cero.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una demostración deductiva de 'para todo a y b pares, a+b es par' vale para CUALQUIER par de números pares, no sólo los que se usaron como ejemplo al explicarla."

explicacion: |
  Esa es la diferencia central con verificar casos puntuales: la
  demostración usa letras (m, n) que representan cualquier entero, no
  números fijos.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una vez demostrada una propiedad, se puede usar como paso justificado en demostraciones futuras, sin tener que volver a probarla cada vez."

explicacion: |
  Es cómo se construyen las matemáticas: cada demostración nueva se
  apoya en las que ya están probadas.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  m: random(1, 15)
  n: random(1, 15)
  a: 2 * m + 1
  b: 2 * n + 1

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "a = {a} y b = {b} son impares (a=2×{m}+1, b=2×{n}+1). ¿Cuánto vale a+b? (Se puede demostrar que impar+impar siempre da par.)"

pasos:
  - "a+b = (2m+1)+(2n+1) = 2m+2n+2 = 2(m+n+1), que tiene forma 2×(entero)"

explicacion: |
  Impar + impar = par, siempre — otra propiedad deducible de la
  definición de número impar.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_deduccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Para estar seguro de que una propiedad matemática es cierta, hace falta revisar todos los números posibles, uno por uno."

explicacion: |
  Justamente para eso sirve la deducción: probar con letras que
  representan cualquier número, en vez de tener que revisar infinitos
  casos uno por uno.
```

## Sección: demostracion-induccion (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "basico"
  tags: ["caso_base"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Para la fórmula 1+2+...+n = n(n+1)/2, ¿cuánto da la suma en el caso base (n=1)?"

explicacion: |
  La suma de un solo término (el 1) es 1, y 1×2/2 = 1 — coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  n: random(1, 100)

respuesta: n * (n + 1) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Usando la fórmula 1+2+...+n = n(n+1)/2, ¿cuánto vale la suma de los primeros {n} números naturales?"

explicacion: |
  n(n+1)/2 = {n}×{n + 1}/2.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["paso_inductivo"]

variables:
  k: random(1, 50)
  suma_k: k * (k + 1) / 2

respuesta: suma_k + (k + 1)
tipo: input
tolerancia_abs: 0

enunciado: "Hipótesis inductiva: la suma hasta k = {k} es {suma_k}. ¿Cuánto vale la suma hasta k+1 = {k + 1}?"

pasos:
  - "Suma hasta k+1 = (suma hasta k) + (k+1) = {suma_k} + {k + 1} = {suma_k + (k + 1)}"

explicacion: |
  Se usa la hipótesis inductiva (la suma hasta k, ya conocida) para
  construir la suma hasta k+1, sumándole el término nuevo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["paso_inductivo", "verificacion", "verdadero_falso"]

variables:
  k: random(1, 50)
  suma_k: k * (k + 1) / 2
  suma_k_mas_1: suma_k + (k + 1)
  formula_directa: (k + 1) * (k + 2) / 2

respuesta: (suma_k_mas_1 == formula_directa)
tipo: vf

enunciado: "Para k = {k}: sumando el término nuevo a la hipótesis inductiva da {suma_k_mas_1}. Aplicando la fórmula n(n+1)/2 directamente en n=k+1={k + 1} da {formula_directa}. ¿Coinciden?"

explicacion: |
  Tienen que coincidir siempre — es justo lo que prueba que el paso
  inductivo funciona para cualquier k.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  n: random(1, 30)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "La suma de los primeros n números impares es n². ¿Cuánto vale la suma de los primeros {n} impares?"

explicacion: |
  1+3+5+...+(2n−1) = n², otra propiedad que se demuestra por inducción.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "basico"
  tags: ["caso_base"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Para 'la suma de los primeros n impares es n²', ¿cuánto da el caso base (n=1, el primer impar, que es 1)?"

explicacion: |
  El primer impar es 1, y 1² = 1 — coincide.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["paso_inductivo"]

variables:
  k: random(1, 30)
  suma_k: k ^ 2
  siguiente_impar: 2 * (k + 1) - 1

respuesta: suma_k + siguiente_impar
tipo: input
tolerancia_abs: 0

enunciado: "Hipótesis inductiva: la suma de los primeros {k} impares es {suma_k}. El siguiente impar es {siguiente_impar}. ¿Cuánto vale la suma de los primeros {k + 1} impares?"

pasos:
  - "{suma_k} + {siguiente_impar} = {suma_k + siguiente_impar}, que tiene que coincidir con ({k + 1})²"

explicacion: |
  Sumar el siguiente número impar a k² siempre da (k+1)² — esa es la
  identidad que prueba el paso inductivo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una demostración por inducción necesita dos pasos: probar el caso base, y probar que P(k) implica P(k+1)."

explicacion: |
  Con esos dos pasos alcanza para garantizar que la propiedad vale para
  todos los n a partir del caso base.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si se prueba el paso inductivo (P(k) implica P(k+1)) pero no el caso base, la demostración por inducción queda completa igual."

explicacion: |
  Sin el caso base, no hay "primera ficha" que caiga — el paso inductivo
  solo no garantiza que la propiedad valga para ningún n en particular.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La inducción matemática se puede pensar como una fila de fichas de dominó: el caso base es empujar la primera, y el paso inductivo garantiza que cada ficha tira la siguiente."

explicacion: |
  Es la analogía clásica para entender por qué esos dos pasos alcanzan
  para cubrir todos los casos, sin probarlos uno por uno.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La hipótesis inductiva es la suposición 'P(k) es verdadero', que se usa como herramienta para demostrar P(k+1)."

explicacion: |
  No es circular: se usa P(k) (ya asumido válido) para construir el
  argumento de P(k+1), un paso lógico legítimo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La inducción matemática es lo mismo que comprobar la fórmula para varios valores de n y generalizar."

explicacion: |
  A pesar del nombre parecido, son técnicas distintas: la inducción
  matemática es deductiva y rigurosa (dos pasos); generalizar de
  ejemplos no prueba nada, como ya se vio en
  `../demostracion-deduccion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "El caso base"
tipo: mc
opciones_explicitas:
  - "El caso base"
  - "El paso inductivo"
  - "Nada, está completa"

enunciado: "Alguien demuestra que 'si P(k) es verdadero, entonces P(k+1) también', pero nunca comprueba P(1). ¿Qué le falta a la demostración?"

explicacion: |
  Sin el caso base, no se sabe si la cadena de implicaciones arranca de
  algún punto verdadero.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["opcion_multiple", "error_comun"]

respuesta: "Asumió P(k+1) directamente, en vez de deducirlo de P(k)"
tipo: mc
opciones_explicitas:
  - "Asumió P(k+1) directamente, en vez de deducirlo de P(k)"
  - "No probó el caso base"
  - "Usó un número negativo"

enunciado: "En el 'paso inductivo', alguien escribe directamente la fórmula para k+1 sin partir de la hipótesis inductiva P(k). ¿Cuál es el error?"

explicacion: |
  El paso inductivo tiene que DEDUCIR P(k+1) a partir de P(k) — asumir
  P(k+1) directamente es un razonamiento circular, no prueba nada.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "basico"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  n: random(2, 10)

respuesta: ((n * (n + 1) / 2) == (n * (n + 1) / 2))
tipo: vf

enunciado: "¿La fórmula n(n+1)/2 da el mismo resultado que sumar 1+2+...+{n} paso a paso, para n = {n}?"

explicacion: |
  Comprobar un caso puntual da confianza, pero sólo la inducción
  completa (caso base + paso inductivo) demuestra que vale para TODO n.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El caso base de una inducción no siempre tiene que ser n=1 — puede empezar en n=0, o en cualquier otro número, según qué se quiera demostrar."

explicacion: |
  Lo que importa es que el caso base sea el primer valor para el que se
  afirma que la propiedad vale.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  n: random(1, 15)

respuesta: 2 ^ (n + 1) - 1
tipo: input
tolerancia_abs: 0

enunciado: "La fórmula 1 + 2 + 4 + ... + 2ⁿ = 2^(n+1) − 1 se demuestra por inducción. ¿Cuánto da para n = {n}?"

explicacion: |
  2^({n}+1) − 1 = {2 ^ (n + 1) - 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["paso_inductivo"]

variables:
  k: random(1, 15)
  suma_k: 2 ^ (k + 1) - 1
  siguiente_potencia: 2 ^ (k + 1)

respuesta: suma_k + siguiente_potencia
tipo: input
tolerancia_abs: 0

enunciado: "Hipótesis inductiva: 1+2+...+2^{k} = {suma_k}. El siguiente término es 2^{k + 1} = {siguiente_potencia}. ¿Cuánto vale la suma hasta 2^(k+1)?"

pasos:
  - "{suma_k} + {siguiente_potencia} = {suma_k + siguiente_potencia}, que tiene que coincidir con 2^({k + 1}+1) − 1"

explicacion: |
  Se suma el nuevo término a la hipótesis inductiva, igual que en los
  ejemplos anteriores.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A pesar de llamarse 'inducción', la inducción matemática es una técnica deductiva: si los dos pasos están bien hechos, la conclusión es necesariamente verdadera."

explicacion: |
  El nombre es un poco engañoso — no tiene la debilidad de la
  "inducción" en el sentido cotidiano (generalizar de casos), es tan
  rigurosa como cualquier otra demostración deductiva.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(2, 10)
  formula_valor: n * (n + 1) / 2
  suma_real: n * (n + 1) / 2

respuesta: (formula_valor == suma_real)
tipo: vf

enunciado: "¿La fórmula n(n+1)/2 coincide con la suma real de 1 hasta {n}?"

explicacion: |
  En este caso la fórmula ya está bien planteada, así que coincide — un
  caso base mal calculado sería el punto donde debería fallar.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La inducción matemática también sirve para demostrar desigualdades que valen para todo n (no sólo igualdades como sumas)."

explicacion: |
  El esquema es el mismo (caso base + paso inductivo), aplicado a una
  propiedad que es una desigualdad en vez de una igualdad.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  k: random(2, 40)

respuesta: (k + 1) * (k + 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Si la suma hasta k = {k} es {k}×({k}+1)/2, ¿cuál sería la suma hasta k+1 según la fórmula, evaluada directamente en n = {k + 1}?"

explicacion: |
  (k+1)(k+2)/2 — el mismo resultado al que se llega sumando el término
  nuevo a la hipótesis inductiva.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Una demostración por inducción matemática, sobre los números naturales, también prueba automáticamente la propiedad para números con decimales."

explicacion: |
  La inducción cubre los naturales (o enteros) a partir del caso base,
  avanzando de a uno — no dice nada sobre valores no enteros, que no
  forman parte de esa cadena de "fichas de dominó".
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_induccion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una vez demostrada una fórmula por inducción, se puede usar directamente (sin repetir la demostración) en problemas futuros, igual que cualquier otra propiedad ya probada."

explicacion: |
  Mismo principio que en `../demostracion-deduccion/`: lo ya demostrado
  se puede reusar como paso justificado.
```

## Sección: demostracion-reduccion-al-absurdo (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  k: random(1, 20)
  a: 2 * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "En la demostración de que √2 es irracional, si a² es par entonces a es par: a = 2k. Si a = {a}, ¿cuánto vale k?"

explicacion: |
  k = a/2 = {k} — el mismo paso que se repite con b más adelante en la
  demostración.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(1, 15)
  a: 2 * k
  b: 2 * (k + 1)

respuesta: (a - (a / 2) * 2) == 0
tipo: vf

enunciado: "En el paso final de la demostración, a = {a} y b = {b} resultan ser ambos pares. ¿Es a par?"

explicacion: |
  Que a y b sean ambos pares contradice la suposición de que a/b ya
  estaba simplificada al máximo (sin factores comunes) — esa es la
  contradicción que cierra la demostración.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para demostrar una afirmación P por reducción al absurdo, el primer paso es suponer que P es FALSA."

explicacion: |
  Se supone lo contrario de lo que se quiere probar, y se busca una
  contradicción a partir de esa suposición.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si suponer '¬P' (que P es falsa) lleva a una contradicción lógica, entonces P tiene que ser verdadera."

explicacion: |
  Es la lógica central de la técnica: una suposición que lleva a algo
  imposible no puede ser cierta.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Llegar a un resultado sorprendente o poco intuitivo ya cuenta como la contradicción que necesita una reducción al absurdo."

explicacion: |
  Hace falta una contradicción LÓGICA real (dos afirmaciones que no
  pueden ser ciertas al mismo tiempo) — algo simplemente inesperado no
  alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "Existe al menos un x que no cumple A"
tipo: mc
opciones_explicitas:
  - "Existe al menos un x que no cumple A"
  - "Ningún x cumple A"
  - "Todos los x no cumplen A"

enunciado: "¿Cuál es la negación correcta de 'todo x cumple la propiedad A'?"

explicacion: |
  Negar un "para todo" da un "existe uno que no" — no un "ninguno
  cumple" (eso sería una afirmación mucho más fuerte que la negación
  real).
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La reducción al absurdo y el uso de un contraejemplo son la misma técnica con otro nombre."

explicacion: |
  Son distintas: un contraejemplo REFUTA una afirmación con un caso
  concreto; la reducción al absurdo PRUEBA una afirmación con un
  argumento lógico general.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  n: random(1, 1000)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "Para demostrar que no existe el mayor entero, se supone que N = {n} es el mayor. ¿Qué número entero es mayor que N y contradice la suposición?"

explicacion: |
  N+1 siempre es un entero mayor que N, sin importar qué tan grande sea
  N — esa es la contradicción.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "basico"
  tags: ["verdadero_falso"]

variables:
  n: random(1, 10000)

respuesta: ((n + 1) > n)
tipo: vf

enunciado: "N = {n}. ¿Es N+1 mayor que N?"

explicacion: |
  Siempre, para cualquier entero — es la base de la demostración de que
  no existe un entero máximo.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Suponer ¬P, deducir una contradicción, concluir que P es verdadera"
tipo: mc
opciones_explicitas:
  - "Suponer ¬P, deducir una contradicción, concluir que P es verdadera"
  - "Suponer P, deducir una contradicción, concluir que P es falsa"
  - "Buscar un ejemplo que cumpla P"

enunciado: "¿Cuál es el orden correcto de los pasos de una reducción al absurdo para demostrar P?"

explicacion: |
  Se supone lo CONTRARIO de lo que se quiere probar, no P misma.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  b: random(1, 15)
  a2: 2 * (b ^ 2)

respuesta: (a2 - (a2 / 2) * 2) == 0
tipo: vf

enunciado: "Si a² = 2×{b}² = {a2}, ¿es a² un número par?"

explicacion: |
  a² = 2×(algo), así que siempre es par por construcción — el primer
  paso del argumento en la demostración de que √2 es irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Conviene usar reducción al absurdo para demostrar CUALQUIER afirmación, incluso cuando hay un argumento directo corto y simple."

explicacion: |
  Si hay un camino directo (deducción simple) corto, no hace falta
  complicar con una suposición contraria — la reducción al absurdo es
  más útil cuando el camino directo no es claro.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Que la fracción a/b ya estaba simplificada (sin factores comunes)"
tipo: mc
opciones_explicitas:
  - "Que la fracción a/b ya estaba simplificada (sin factores comunes)"
  - "Que a y b son números enteros"
  - "Que 2 es un número primo"

enunciado: "En la demostración de que √2 es irracional, ¿qué es exactamente lo que se contradice al final?"

explicacion: |
  Se había supuesto a/b simplificada al máximo; encontrar que a y b son
  ambos pares (comparten el factor 2) contradice justo esa suposición.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La contradicción de una reducción al absurdo puede ser contra un hecho matemático ya demostrado antes, no sólo contra la propia suposición inicial."

explicacion: |
  Cualquier contradicción lógica sirve: contra la suposición misma,
  contra una definición, o contra un teorema ya probado.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  k: random(1, 15)
  b2: 2 * (k ^ 2)

respuesta: b2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "Siguiendo la demostración, si b² = 2k² = {b2}, ¿cuánto vale k²?"

explicacion: |
  k² = b²/2 = {b2 / 2} — el paso simétrico al que ya se hizo con a.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los pasos intermedios de una reducción al absurdo (desde ¬P hasta la contradicción) tienen que ser deducciones válidas, igual que en cualquier demostración directa."

explicacion: |
  Sólo cambia el punto de partida (se parte de ¬P en vez de la
  hipótesis directa) — el resto de la cadena lógica funciona igual.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si al intentar una reducción al absurdo no se logra llegar a ninguna contradicción, eso ya demuestra que P es falsa."

explicacion: |
  No llegar a una contradicción no prueba nada — puede ser que la
  contradicción exista y todavía no se haya encontrado, o que haya que
  intentar otro camino.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "a es impar"
tipo: mc
opciones_explicitas:
  - "a es impar"
  - "a es par"
  - "a es cero"

enunciado: "Para demostrar por el absurdo que 'si a² es par, entonces a es par', el primer paso es suponer lo contrario. ¿Qué se supone?"

explicacion: |
  Se supone la negación de la tesis: que a NO es par, o sea, que a es
  impar — y de ahí se busca contradecir que a² sea par.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(1, 20)
  a: 2 * m + 1

respuesta: ((a ^ 2) - ((a ^ 2) / 2) * 2) != 0
tipo: vf

enunciado: "Suponiendo a = {a} (impar), ¿a² también da impar?"

explicacion: |
  a² = (2m+1)² = 4m²+4m+1, que tiene la forma 2×(entero)+1 — siempre
  impar. Esto contradice que a² fuera par, cerrando la reducción al
  absurdo de 'a² par implica a par'.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo final de una reducción al absurdo es PROBAR que la afirmación original P es verdadera, no refutarla."

explicacion: |
  Aunque el camino pasa por suponer lo contrario, el resultado final es
  una prueba de P, no una refutación.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "'Existen infinitos números primos' es otra afirmación clásica que se demuestra por reducción al absurdo (suponiendo que hay finitos, y construyendo uno nuevo que no estaba en la lista)."

explicacion: |
  Es el argumento de Euclides: suponer una lista finita y completa de
  primos, multiplicarlos todos y sumar 1 — ese número nuevo no es
  divisible por ninguno de la lista, contradiciendo que fuera completa.
```

```
metadata:
  materia: "matematicas"
  tema: "demostracion_reduccion_absurdo"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(1, 15)
  j: random(1, 15)
  a: 2 * k
  b: 2 * j

respuesta: (((a - (a / 2) * 2) == 0) == ((b - (b / 2) * 2) == 0))
tipo: vf

enunciado: "a = {a} y b = {b}. ¿Es cierto que a y b son 'igual de pares' (los dos pares, o los dos no pares)?"

explicacion: |
  En la demostración, llegar a que a Y b son ambos pares es justo la
  contradicción que cierra el argumento: contradice que a/b estuviera
  simplificada al máximo.
```

