# Matemática — Demostración matemática: deducción (cuestionario, 22 preguntas VBLang)

> Tema: `DEM1a` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Aplicar una propiedad deducida: número par

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

### 2 — Aplicar modus ponens con una propiedad numérica

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

### 3 — Aplicar una propiedad deducida: producto de dos pares

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

### 4 — Aplicar una propiedad deducida: cuadrado de un impar

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

### 5 — Concepto: qué garantiza la deducción

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

### 6 — Concepto: comprobar ejemplos no es demostrar

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

### 7 — Concepto: modus ponens

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

### 8 — Concepto: razonamiento circular

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

### 9 — Concepto: cada paso necesita justificación

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

### 10 — Concepto: hipótesis y tesis

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

### 11 — Identificar la estructura: modus ponens aplicado

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

### 12 — Identificar la estructura: generalización apresurada

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

### 13 — Identificar la estructura: razonamiento circular

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

### 14 — Identificar qué falta para que sea una demostración completa

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

### 15 — Aplicar modus ponens: caso numérico directo

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

### 16 — Verificar un paso de una demostración

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

### 17 — Concepto: cuándo un ejemplo SÍ prueba algo

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

### 18 — Aplicar deducción: suma de tres pares

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

### 19 — Concepto: una demostración deductiva es universal

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

### 20 — Concepto: propiedades ya demostradas se pueden reusar

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

### 21 — Aplicar deducción: impar más impar

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

### 22 — Concepto: la deducción no necesita "probar suerte"

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
