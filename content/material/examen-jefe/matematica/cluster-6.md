# Examen jefe — Maestro de Demostraciones

> Logro #57. Demostraste tu dominio sobre decimales y los distintos tipos de pruebas lógicas jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **116 preguntas totales** en 5/5 secciones.

---

## Sección: decimales (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

enunciado: "¿Qué es un número decimal?"
tipo: mc
opciones_explicitas:
  - "Una fracción con denominador potencia de 10, escrita con coma"
  - "Cualquier número que no sea entero"
  - "Un número negativo"
respuesta: "Una fracción con denominador potencia de 10, escrita con coma"

explicacion: |
  0,3 es otra forma de escribir 3/10; 0,25 es otra forma de escribir
  25/100.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  n: random(1, 9)

respuesta: n / 10
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {n}/10 en decimal?"

explicacion: |
  Cuando el denominador ya es una potencia de 10, se escribe directo con
  coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "conversion"]

variables:
  denominadores: [2, 4, 5, 8, 20, 25, 50]
  d: uno_de(denominadores)
  n: random(1, d - 1)

respuesta: n / d
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {n}/{d} en decimal?"

pasos:
  - "{n} ÷ {d} = {n / d}"

explicacion: |
  Cuando el denominador no es una potencia de 10, se divide el numerador
  por el denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(0, 9)
  decimal: t / 10 + h / 100

respuesta: t * 10 + h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de la fracción equivalente a {decimal} (sobre denominador 100)?"

explicacion: |
  El número decimal sin la coma es, directamente, el numerador sobre la
  potencia de 10 que corresponda.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(1, 9)
  m: random(0, 9)
  decimal: t / 10 + h / 100 + m / 1000

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "{decimal} tiene 3 cifras decimales. ¿Cuál es el denominador de su fracción equivalente?"

explicacion: |
  3 cifras decimales corresponden a milésimos: denominador 1.000.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "comparacion"]

variables:
  entero: random(1, 20)
  t1: random(0, 9)
  t2: random(0, 9)
  a: entero + t1 / 10
  b: entero + t2 / 10

restricciones:
  - t1 != t2

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Con la misma parte entera, se compara la primera cifra decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que 0,5 es mayor que 0,45?"

explicacion: |
  0,5 es lo mismo que 0,50: comparando cifra por cifra, 50 centésimos es
  más que 45 centésimos, aunque "0,45" tenga más cifras escritas.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "0,7 y 0,70 representan exactamente el mismo valor."

explicacion: |
  Agregar un cero al final de la parte decimal no cambia el valor del
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "suma"]

variables:
  e1: random(1, 20)
  t1: random(0, 9)
  e2: random(1, 20)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a + b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Se alinean las comas y se suma como siempre: {a} + {b} = {a + b}"

explicacion: |
  Sumar decimales es igual que sumar enteros, alineando la coma en vez de
  alinear las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "resta"]

variables:
  e1: random(5, 20)
  t1: random(0, 9)
  e2: random(1, 4)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a - b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Se alinean las comas y se resta como siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "multiplicacion"]

variables:
  t1: random(1, 9)
  t2: random(1, 9)
  a: t1 / 10
  b: t2 / 10

respuesta: a * b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} × {b}?"

pasos:
  - "Se multiplica como enteros ({t1} × {t2} = {t1 * t2}) y se pone la coma contando 2 cifras decimales (una de cada factor)"

explicacion: |
  Se multiplica ignorando la coma, y al resultado se le agrega una coma
  contando tantas cifras decimales como sumen los dos factores.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "multiplicacion"]

variables:
  cifras_a: random(1, 3)
  cifras_b: random(1, 3)

respuesta: cifras_a + cifras_b
tipo: input
tolerancia_abs: 0

enunciado: "Si un factor tiene {cifras_a} cifra(s) decimal(es) y el otro tiene {cifras_b}, ¿cuántas cifras decimales va a tener el producto (antes de simplificar ceros finales)?"

explicacion: |
  La cantidad de cifras decimales del producto es la suma de las cifras
  decimales de los dos factores.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "comparacion"]

variables:
  entero: random(1, 20)
  t1: random(0, 8)
  t2: t1 + 1

respuesta: entero + t2 / 10
tipo: mc
opciones_explicitas:
  - entero + t1 / 10
  - entero + t2 / 10

enunciado: "¿Cuál de estos dos números es mayor: {entero + t1 / 10} o {entero + t2 / 10}?"

explicacion: |
  Con la misma parte entera, gana la cifra decimal más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "2,5"
  - "2,05"
  - "2,55"
  - "2,1"
respuesta_orden: ["2,05", "2,1", "2,5", "2,55"]

explicacion: |
  Hay que comparar cifra por cifra después de la coma, sin dejarse
  engañar por la cantidad de cifras escritas.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "problema"]

variables:
  e1: random(50, 500)
  c1: random(0, 99)
  e2: random(10, 200)
  c2: random(0, 99)
  a: e1 + c1 / 100
  b: e2 + c2 / 100

respuesta: a + b
tipo: input
tolerancia_abs: 0.01

enunciado: "Compraste algo de ${a} y otra cosa de ${b}. ¿Cuánto gastaste en total?"

explicacion: |
  Los precios con centavos son decimales de 2 cifras: se suman alineando
  la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "problema"]

variables:
  e1: random(1, 5)
  t1: random(1, 9)
  e2: random(1, 5)
  t2: random(1, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a + b
tipo: input
tolerancia_abs: 0.01

enunciado: "Un caño mide {a} metros y otro mide {b} metros. Si se unen, ¿cuántos metros miden en total?"

explicacion: |
  Sumar longitudes decimales es sumar decimales, alineando la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "verificacion"]

variables:
  e1: random(1, 20)
  t1: random(0, 9)
  e2: random(1, 20)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10
  correcto: a + b
  error: uno_de([0, 0, 0, 0.1, -0.1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.001)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Un error típico es desalinear la coma al sumar; hay que verificar
  columna por columna, igual que con enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "conversion"]

variables:
  n: random(1, 99)

tipo: completar
enunciado: "0,{n} (con {n} como cifras decimales) es igual a la fracción {n}/___. Completá el denominador."
respuestas_validas:
  - 100

explicacion: |
  Dos cifras decimales corresponden a centésimos: denominador 100.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número decimal con una cantidad finita de cifras se puede escribir como una fracción con denominador potencia de 10."

explicacion: |
  Es la propia definición de número decimal: una fracción de denominador
  10, 100, 1.000... escrita con coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Todas las fracciones, al convertirlas a decimal, dan una cantidad finita de cifras decimales."

explicacion: |
  No es cierto: 1/3 = 0,333... tiene infinitas cifras que se repiten (un
  decimal periódico) — no todas las fracciones "cierran" en pocas cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 50)
  t: random(1, 9)
  n: entero + t / 10

respuesta: n * 10
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {n} × 10?"

pasos:
  - "Multiplicar por 10 corre la coma un lugar hacia la derecha: {n} → {n * 10}"

explicacion: |
  Multiplicar un decimal por una potencia de 10 corre la coma hacia la
  derecha, tantos lugares como ceros tenga la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 50)

respuesta: entero / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {entero} ÷ 10?"

pasos:
  - "Dividir por 10 corre la coma un lugar hacia la izquierda: {entero} → {entero / 10}"

explicacion: |
  Dividir por una potencia de 10 corre la coma hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 20)
  h: random(1, 9)
  n: entero + h / 100

respuesta: n * 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {n} × 100?"

explicacion: |
  Multiplicar por 100 corre la coma dos lugares hacia la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(0, 9)
  n: t * 10 + h

respuesta: n
tipo: mc
opciones_explicitas:
  - n
  - n + 1
  - n - 1

enunciado: "¿Cuál es el numerador de la fracción equivalente a 0,{t}{h} (sobre denominador 100)?"

explicacion: |
  El decimal sin la coma es el numerador: {t}{h} sobre 100.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

enunciado: "¿Cómo se llama la primera cifra después de la coma?"
tipo: mc
opciones_explicitas:
  - "Décimos"
  - "Centésimos"
  - "Unidades"
respuesta: "Décimos"

explicacion: |
  La primera cifra después de la coma son los décimos (÷10).
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un número decimal es otra forma de escribir una fracción, cuando el denominador es una potencia de 10."

explicacion: |
  Es la idea central de todo este tema: decimales y fracciones son la
  misma cosa, escritas de dos formas distintas.
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
