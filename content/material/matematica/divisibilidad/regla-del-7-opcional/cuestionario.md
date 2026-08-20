# Matematica — regla del 7 opcional (cuestionario, 28 preguntas VBLang)

> Tema: `matematica/divisibilidad/regla-del-7-opcional`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "duplicar"
tipo: completar
respuestas_validas:
  - "duplicar"
  - "duplicarlo"
  - "doblar"

enunciado: "En la regla del 7, tras separar la última cifra, hay que ___ esa cifra por 2."

explicacion: |
  El algoritmo requiere multiplicar por 2 la cifra separada.
```

### 2 — pregunta 2

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "restar"
tipo: completar
respuestas_validas:
  - "restar"
  - "restarle"

enunciado: "Una vez duplicada la última cifra, se debe ___ ese valor al número que queda sin la última cifra."

explicacion: |
  La operación clave es la resta del valor duplicado al resto truncado.
```

### 3 — pregunta 3

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "completar"]

variables:
  numero: random(100, 999)

respuesta: "multiplo"
tipo: completar
respuestas_validas:
  - "multiplo"
  - "múltiplo"
  - "multiplo de 7"
  - "múltiplo de 7"

enunciado: "Si el resultado final del algoritmo es 0 o un ___, el número original es divisible por 7."

explicacion: |
  La condición de divisibilidad se cumple si el residuo final es múltiplo de 7.
```

### 4 — pregunta 4

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 140
  u1: 0
  r1: 14
  d1: 0
  res1: 14
  u2: 4
  r2: 1
  d2: 8
  res2: -7

respuesta: "si"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 14 - 0 = 14. Paso 2: 1 - 8 = -7. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -7 es múltiplo de 7, por lo tanto 140 también lo es.
```

### 5 — pregunta 5

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 210
  u1: 0
  r1: 21
  d1: 0
  res1: 21
  u2: 1
  r2: 2
  d2: 2
  res2: 0

respuesta: "si"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 21 - 0 = 21. Paso 2: 2 - 2 = 0. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  0 es múltiplo de 7, por lo tanto 210 también lo es.
```

### 6 — pregunta 6

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 15
  u1: 5
  r1: 1
  d1: 10
  res1: -9

respuesta: "no"
tipo: input

enunciado: "Aplicá la regla del 7 a {numero}. Paso 1: 1 - 10 = -9. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -9 no es múltiplo de 7, por lo tanto 15 no lo es.
```

### 7 — pregunta 7

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 301
  u1: 1
  r1: 30
  d1: 2
  res1: 28

respuesta: 28
tipo: input

enunciado: "Para el número {numero}, ¿cuál es el resultado tras restar el doble de la última cifra al resto?"

explicacion: |
  30 - 2 = 28.
```

### 8 — pregunta 8

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 301
  res1: 28
  u2: 8
  r2: 2
  d2: 16
  res2: -14

respuesta: -14
tipo: input

enunciado: "Continuando con {res1}, ¿cuál es el siguiente resultado al restar el doble de la última cifra (8) al resto (2)?"

explicacion: |
  2 - 16 = -14.
```

### 9 — pregunta 9

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "decision"]

variables:
  resultado: -14

respuesta: "si"
tipo: input

enunciado: "Si el resultado del algoritmo es {resultado}, ¿es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  -14 es múltiplo de 7 (-2 * 7), por lo tanto sí.
```

### 10 — pregunta 10

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"
  - "siete"

enunciado: "La regla que consiste en duplicar la última cifra y restarla al resto se aplica para verificar la divisibilidad por el número ___."

explicacion: |
  Es la regla específica para el divisor 7.
```

### 11 — pregunta 11

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "separar"
tipo: completar
respuestas_validas:
  - "separar"
  - "aislar"

enunciado: "El primer paso de la regla del 7 es ___ la última cifra del número."

explicacion: |
  Se debe aislar la unidad para procesarla.
```

### 12 — pregunta 12

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "2"
tipo: completar
respuestas_validas:
  - "2"
  - "dos"

enunciado: "La última cifra se multiplica por el número ___."

explicacion: |
  El factor de multiplicación es 2.
```

### 13 — pregunta 13

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "resta"
tipo: completar
respuestas_validas:
  - "resta"
  - "restar"

enunciado: "El valor duplicado se ___ al número que queda sin la última cifra."

explicacion: |
  La operación es una resta.
```

### 14 — pregunta 14

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_7", "teoria"]

respuesta: "multiplo"
tipo: completar
respuestas_validas:
  - "multiplo"
  - "múltiplo"

enunciado: "Si el resultado final es 0 o un ___, la divisibilidad está confirmada."

explicacion: |
  La condición es ser múltiplo de 7.
```

### 15 — pregunta 15

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  numero: 931
  u1: 1
  r1: 93
  d1: 2
  res1: 91

respuesta: 91
tipo: input

enunciado: "Para {numero}, calculá {r1} - {d1}."

explicacion: |
  93 - 2 = 91.
```

### 16 — pregunta 16

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "ejercicio"]

variables:
  res1: 91
  u2: 1
  r2: 9
  d2: 2
  res2: 7

respuesta: 7
tipo: input

enunciado: "Para {res1}, calculá {r2} - {d2}."

explicacion: |
  9 - 2 = 7.
```

### 17 — pregunta 17

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_7", "decision"]

variables:
  resultado: 7

respuesta: "si"
tipo: input

enunciado: "El resultado final es {resultado}. ¿Es divisible por 7? (escribí 'si' o 'no')"

explicacion: |
  7 es múltiplo de 7.
```

### 18 — pregunta 18

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "basico"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Para verificar si un número es divisible por 7, aplicamos la regla:
  1. Separamos la última cifra.
  2. Duplicamos esa cifra.
  3. Restamos el doble al número restante.
  Si el resultado es divisible por 7, el original también lo es.
  En este caso, {n} no lo es.
```

### 19 — pregunta 19

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "algoritmo"]

variables:
  cifra_ultima: random(1, 9)
  resto: random(10, 99)
  numero: resto * 10 + cifra_ultima
  doble: cifra_ultima * 2
  nuevo_numero: resto - doble
  es_divisible: (nuevo_numero % 7 == 0)

respuesta: verdadero
tipo: vf

enunciado: "Si aplicamos la regla del 7 al número {numero}, el resultado intermedio es {nuevo_numero}, que es divisible por 7."

explicacion: |
  La regla del 7 consiste en restar el doble de la última cifra al resto del número.
  Aquí: {numero} -> {resto} - {doble} = {nuevo_numero}.
  Como {nuevo_numero} es múltiplo de 7, {numero} también lo es.
```

### 20 — pregunta 20

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(1000, 9999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Aplicamos la regla iterativa. Si el resultado final no es 0 o múltiplo de 7, el número original no es divisible.
  En este caso, {n} no lo es.
```

### 21 — pregunta 21

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla de divisibilidad por 7, el resultado final no es 0 ni múltiplo de 7.
  Por lo tanto, {n} no es divisible por 7.
```

### 22 — pregunta 22

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es el producto de {base} por 7, por lo tanto es múltiplo de 7.
  La regla del 7 confirma esto al dar un resultado final múltiplo de 7.
```

### 23 — pregunta 23

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "concepto"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "La regla del 7 solo se aplica a números positivos."

explicacion: |
  Falso. La regla de divisibilidad por 7 se aplica a cualquier entero.
  Para negativos, se puede aplicar la regla al valor absoluto o considerar el signo al final.
```

### 24 — pregunta 24

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  base: random(100, 142)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es {base} × 7, por lo tanto es divisible.
  La regla del 7 confirmará esto tras iterar.
```

### 25 — pregunta 25

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es un múltiplo de 7."

explicacion: |
  {n} se obtiene multiplicando {base} por 7, por lo tanto es múltiplo de 7.
```

### 26 — pregunta 26

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla del 7, el resultado final no es 0 ni múltiplo de 7.
```

### 27 — pregunta 27

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "identificacion"]

variables:
  base: random(10, 20)
  n: base * 7
  es_divisible: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  {n} es múltiplo de 7.
```

### 28 — pregunta 28

```
metadata:
  materia: "matematica"
  tema: "divisibilidad_regla_del_7_opcional"
  nivel: "intermedio"
  tags: ["regla_del_7", "verificacion"]

variables:
  n: random(100, 999)
  es_divisible: (n % 7 == 0)

respuesta: falso
tipo: vf

enunciado: "El número {n} es divisible por 7."

explicacion: |
  Al aplicar la regla del 7, el resultado final no es 0 ni múltiplo de 7.
```
