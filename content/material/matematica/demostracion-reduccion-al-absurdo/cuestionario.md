# Matemática — Demostración matemática: reducción al absurdo (cuestionario, 22 preguntas VBLang)

> Tema: `DEM1c` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Aplicar el paso clave: a² par implica a par

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

### 2 — Verificar la contradicción: a y b ambos pares

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

### 3 — Concepto: qué se supone al empezar

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

### 4 — Concepto: qué prueba que P es verdadera

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

### 5 — Concepto: contradicción real vs. algo raro

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

### 6 — Concepto: negar correctamente "todo x cumple A"

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

### 7 — Concepto: reducción al absurdo vs. contraejemplo

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

### 8 — Aplicar: no existe el mayor entero

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

### 9 — Concepto: verificar que N+1 > N

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

### 10 — Concepto: estructura completa

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

### 11 — Aplicar: a² = 2b², verificar paridad

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

### 12 — Concepto: cuándo conviene usar esta técnica

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

### 13 — Concepto: √2 es irracional, qué se contradice

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

### 14 — Concepto: la contradicción puede ser con un hecho ya sabido

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

### 15 — Aplicar: verificar b también par

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

### 16 — Concepto: reducción al absurdo es un tipo de deducción

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

### 17 — Concepto: qué pasa si no se llega a contradicción

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

### 18 — Aplicar: número entero par, negación

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

### 19 — Verificar: cuadrado de un impar es impar

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

### 20 — Concepto: reducción al absurdo prueba, no refuta

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

### 21 — Concepto: ejemplo clásico adicional

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

### 22 — Aplicar: verificar la contradicción final numéricamente

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
