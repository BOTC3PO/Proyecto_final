# Matemática — Demostración matemática: inducción (cuestionario, 24 preguntas VBLang)

> Tema: `DEM1d` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Verificar la fórmula de la suma: caso base

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

### 2 — Aplicar la fórmula de la suma

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

### 3 — Verificar el paso inductivo: de k a k+1

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

### 4 — Verificar que el paso inductivo coincide con la fórmula

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

### 5 — Suma de los primeros n impares

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

### 6 — Caso base de la suma de impares

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

### 7 — Paso inductivo de la suma de impares

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

### 8 — Concepto: los dos pasos de la inducción

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

### 9 — Concepto: qué pasa sin el caso base

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

### 10 — Concepto: la analogía del dominó

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

### 11 — Concepto: hipótesis inductiva

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

### 12 — Concepto: inducción matemática vs. generalizar de ejemplos

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

### 13 — Identificar qué falta en una "demostración" incompleta

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

### 14 — Identificar el error: circularidad en el paso inductivo

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

### 15 — Verificar la fórmula en varios casos concretos (sin ser suficiente)

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

### 16 — Concepto: a partir de qué n arranca

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

### 17 — Aplicar: suma de potencias de 2

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

### 18 — Paso inductivo de la suma de potencias de 2

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

### 19 — Concepto: por qué "matemática" en el nombre

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

### 20 — Verificar un caso base incorrecto

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

### 21 — Concepto: inducción para desigualdades

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

### 22 — Aplicar: verificar el paso inductivo con números concretos

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

### 23 — Concepto: la inducción no prueba para números no naturales

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

### 24 — Concepto: reutilizar una propiedad demostrada por inducción

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
