# Matemática — Demostración matemática: contraejemplo (cuestionario, 22 preguntas VBLang)

> Tema: `DEM1b` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — La fórmula de Euler: ¿sigue dando primo?

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

### 2 — Todo número impar, ¿es primo?

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

### 3 — Si a² = b², ¿entonces a = b?

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

### 4 — ¿n² siempre es mayor que n?

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

### 5 — ¿La suma de dos primos siempre es par?

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

### 6 — Concepto: cuántos contraejemplos hacen falta

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

### 7 — Concepto: muchos casos que cumplen no prueban nada

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

### 8 — Concepto: contraejemplo vs. afirmación existencial

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

### 9 — Concepto: buscar en los bordes

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

### 10 — Concepto: contraejemplo vs. demostración

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

### 11 — Elegir el contraejemplo correcto: "todo impar es primo"

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

### 12 — Elegir el contraejemplo correcto: "n² > n siempre"

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

### 13 — Elegir el contraejemplo correcto: suma de primos par

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

### 14 — Elegir la opción que NO es contraejemplo

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

### 15 — Verificar si un caso propuesto es contraejemplo

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

### 16 — Concepto: la dificultad de encontrar un contraejemplo

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

### 17 — Aplicar: buscar si n=40 realmente falla en la fórmula de Euler

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

### 18 — Concepto: contraejemplo y "casi siempre"

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

### 19 — Elegir el contraejemplo correcto: a²=b²

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

### 20 — Concepto: refutar vs. corregir

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

### 21 — Aplicar: ¿9 es primo?

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

### 22 — Concepto: contraejemplo como herramienta de exploración

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
