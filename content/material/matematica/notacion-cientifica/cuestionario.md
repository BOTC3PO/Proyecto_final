# Matemática — Notación científica (cuestionario, 26 preguntas VBLang)

> Tema: `N13`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la notación científica

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

enunciado: "¿Cómo se escribe un número en notación científica?"
tipo: mc
opciones_explicitas:
  - "a × 10ⁿ, con a entre 1 y 10"
  - "Cualquier número multiplicado por 10"
  - "Un número con muchos ceros"
respuesta: "a × 10ⁿ, con a entre 1 y 10"

explicacion: |
  El coeficiente a siempre tiene que estar entre 1 y 10 (1 ≤ a < 10).
```

### 2 — Número grande: hallar el coeficiente

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el coeficiente (la parte \"a\")?"

explicacion: |
  Se corre la coma hasta que quede un solo dígito antes de ella: ese
  número (con su parte decimal) es el coeficiente.
```

### 3 — Número grande: hallar el exponente

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el exponente de 10?"

explicacion: |
  El exponente es la cantidad de lugares que se corrió la coma hacia la
  izquierda.
```

### 4 — Número chico: hallar el coeficiente

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 6)
  numero: (a_entero + a_decimal / 10) / (10 ^ n)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el coeficiente?"

explicacion: |
  Igual que con números grandes: se corre la coma hasta dejar un solo
  dígito antes de ella.
```

### 5 — Número chico: hallar el exponente (negativo)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 6)
  numero: (a_entero + a_decimal / 10) / (10 ^ n)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el exponente de 10?"

explicacion: |
  Con números menores a 1, el exponente da negativo: la coma se corrió
  hacia la derecha.
```

### 6 — De notación científica a número normal (exponente positivo)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a: random(1, 9)
  n: random(3, 7)

respuesta: a * (10 ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué número equivale {a} × 10^{n}?"

pasos:
  - "{a} × 10^{n} corre la coma {n} lugares a la derecha: {a * (10 ^ n)}"

explicacion: |
  Un exponente positivo corre la coma hacia la derecha, agregando ceros.
```

### 7 — De notación científica a número normal (exponente negativo)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a: random(1, 9)
  n: random(2, 5)

respuesta: a / (10 ^ n)
tipo: input
tolerancia_abs: 0.00001

enunciado: "¿A qué número equivale {a} × 10^(-{n})?"

pasos:
  - "Un exponente negativo corre la coma {n} lugares a la izquierda: {a / (10 ^ n)}"

explicacion: |
  Un exponente negativo corre la coma hacia la izquierda.
```

### 8 — El coeficiente tiene que estar entre 1 y 10

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la notación científica a × 10ⁿ, el coeficiente \"a\" siempre tiene que cumplir 1 ≤ a < 10."

explicacion: |
  Es la regla que define la forma correcta: ni con más de un dígito antes
  de la coma, ni con la coma antes del primer dígito.
```

### 9 — Reconocer una notación mal escrita (coeficiente grande)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "35 × 10⁶ está bien escrito como notación científica."

explicacion: |
  El coeficiente 35 es mayor o igual a 10: no cumple la regla. La forma
  correcta sería 3,5 × 10⁷.
```

### 10 — Comparar números en notación científica (distinto exponente)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  a1: random(1, 9)
  n1: random(2, 8)
  a2: random(1, 9)
  n2: random(2, 8)

restricciones:
  - n1 != n2

respuesta: (n1 > n2)
tipo: vf

enunciado: "¿Es {a1} × 10^{n1} mayor que {a2} × 10^{n2}?"

explicacion: |
  Con exponentes distintos, alcanza con comparar los exponentes: gana el
  mayor, sin importar el coeficiente.
```

### 11 — Comparar números en notación científica (mismo exponente)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  n: random(2, 8)
  a1: random(1, 8)
  a2: a1 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {a1} × 10^{n} mayor que {a2} × 10^{n}?"

explicacion: |
  Con el mismo exponente, se compara el coeficiente: {a1} es menor que
  {a2}.
```

### 12 — Elegir la notación científica correcta

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)
  correcto: a_entero + a_decimal / 10

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - correcto * 10
  - correcto / 10

enunciado: "¿Cuál es el coeficiente correcto para escribir {numero} en notación científica?"

explicacion: |
  Las otras opciones no cumplen la regla de que el coeficiente esté entre
  1 y 10.
```

### 13 — Verificar una conversión (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "verificacion"]

variables:
  a: random(1, 9)
  n: random(3, 7)
  correcto: a * (10 ^ n)
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien convertido esto? {a} × 10^{n} = {mostrado}"

explicacion: |
  Se vuelve a calcular corriendo la coma y se compara.
```

### 14 — Completar el exponente que falta

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica"]

variables:
  a: random(1, 9)
  n: random(3, 7)

tipo: completar
enunciado: "Completá: {a} × 10^___ = {a * (10 ^ n)}."
respuestas_validas:
  - n

explicacion: |
  Se cuenta cuántos lugares hay que correr la coma para llegar de {a} al
  número completo.
```

### 15 — Problema: distancia astronómica

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "problema"]

variables:
  a: random(1, 9)
  n: random(6, 9)

respuesta: a * (10 ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "La distancia a una estrella es {a} × 10^{n} km. ¿Cuántos km son, escritos en forma normal?"

explicacion: |
  Las distancias astronómicas son un caso típico donde conviene la
  notación científica.
```

### 16 — Problema: tamaño microscópico

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "problema"]

variables:
  a: random(1, 9)
  n: random(6, 9)

respuesta: a / (10 ^ n)
tipo: input
tolerancia_abs: 0.000000001

enunciado: "El diámetro de una célula es {a} × 10^(-{n}) metros. ¿Cuántos metros son, escritos en forma normal?"

explicacion: |
  Las medidas microscópicas también se escriben cómodas en notación
  científica, con exponente negativo.
```

### 17 — Cuántos ceros representa un exponente

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica"]

variables:
  n: random(2, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ceros tiene 10^{n} escrito en forma normal (después del 1)?"

explicacion: |
  10 elevado a n se escribe como un 1 seguido de n ceros.
```

### 18 — Reconocer notación mal escrita (coeficiente menor a 1)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "0,35 × 10⁸ está bien escrito como notación científica."

explicacion: |
  El coeficiente 0,35 es menor a 1: no cumple la regla. La forma correcta
  sería 3,5 × 10⁷.
```

### 19 — Ida y vuelta: convertir y reconvertir

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 7)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)
  a: a_entero + a_decimal / 10

respuesta: verdadero
tipo: vf

enunciado: "{numero} en notación científica es {a} × 10^{n}. ¿Es cierto que convertir {a} × 10^{n} de vuelta a forma normal da otra vez {numero}?"

explicacion: |
  Convertir y volver a convertir tiene que devolver el número original:
  son dos formas de escribir la misma cantidad.
```

### 20 — Ordenar números en notación científica

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "5 × 10^4"
  - "2 × 10^6"
  - "9 × 10^3"
  - "1 × 10^5"
respuesta_orden: ["9 × 10^3", "5 × 10^4", "1 × 10^5", "2 × 10^6"]

explicacion: |
  Primero se compara el exponente; entre exponentes iguales (acá no hay
  ninguno repetido), recién se compararía el coeficiente.
```

### 21 — Elegir el mayor entre varios en notación científica

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  a1: random(1, 9)
  n1: random(2, 8)
  a2: random(1, 9)
  n2: random(2, 8)
  a3: random(1, 9)
  n3: random(2, 8)

restricciones:
  - n1 != n2
  - n1 != n3
  - n2 != n3

respuesta: max(n1, n2, n3)
tipo: mc
opciones_explicitas:
  - n1
  - n2
  - n3

enunciado: "Entre {a1}×10^{n1}, {a2}×10^{n2} y {a3}×10^{n3}, ¿cuál exponente corresponde al número mayor?"

explicacion: |
  Con exponentes todos distintos, gana el mayor exponente sin importar el
  coeficiente.
```

### 22 — Notación científica de un número exacto (potencia de 10)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica"]

variables:
  n: random(3, 9)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir 10^{n} (un 1 seguido de {n} ceros) en notación científica, ¿cuál es el coeficiente?"

explicacion: |
  Cuando el número ya es una potencia exacta de 10, el coeficiente es 1.
```

### 23 — Problema: población

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "problema"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "La población mundial es aproximadamente {a_entero},{a_decimal} × 10⁹ personas. ¿Cuál es el coeficiente de esa notación?"

explicacion: |
  El coeficiente es, directamente, la parte antes de la potencia de 10.
```

### 24 — Multiplicar dos potencias de 10 (repaso de potencias)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "potencias"]

variables:
  n1: random(2, 6)
  n2: random(2, 6)

respuesta: n1 + n2
tipo: input
tolerancia_abs: 0

enunciado: "10^{n1} × 10^{n2} = 10^x. ¿Cuánto vale x?"

explicacion: |
  Al multiplicar potencias de igual base (acá, 10), se suman los
  exponentes — la misma propiedad de `../potencias/`.
```

### 25 — Por qué sirve la notación científica

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La notación científica sirve para escribir cómodo números muy grandes o muy chicos, sin tener que contar montones de ceros."

explicacion: |
  Es la razón de ser de esta notación: comparar y operar con magnitudes
  extremas sin perderse entre los ceros.
```

### 26 — Qué es la notación científica (cierre)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En a × 10ⁿ, un exponente positivo representa un número grande, y un exponente negativo representa un número menor a 1."

explicacion: |
  Es la idea central de todo el tema: el signo del exponente dice si el
  número original era grande o chico.
```
