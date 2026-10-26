# Matemática — Potencias (cuestionario, 28 preguntas VBLang)

> Tema: `N12`. Ver `teoria.md` en esta misma carpeta. Usa el operador `^`
> del DSL (confirmado en `matematicas-aritmetica-oficiales.ts`,
> `POTENCIAS_DSL`).

---

### 1 — Qué es una potencia

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

enunciado: "¿Qué es 2⁴?"
tipo: mc
opciones_explicitas:
  - "2 multiplicado por sí mismo 4 veces"
  - "2 multiplicado por 4"
  - "2 sumado 4 veces"
respuesta: "2 multiplicado por sí mismo 4 veces"

explicacion: |
  Una potencia es multiplicar la base por sí misma tantas veces como
  indica el exponente.
```

### 2 — Calcular una potencia

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  base: random(2, 10)
  exponente: random(2, 4)

respuesta: base ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

pasos:
  - "{base}^{exponente} = {base} multiplicado por sí mismo {exponente} veces = {base ^ exponente}"

explicacion: |
  Se multiplica la base por sí misma, tantas veces como el exponente.
```

### 3 — Calcular una potencia (base más grande)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 20)
  exponente: random(2, 3)

respuesta: base ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

explicacion: |
  El procedimiento es el mismo con bases más grandes.
```

### 4 — Exponente 1

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(1, 999)

respuesta: base
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}¹?"

explicacion: |
  Elevar a la 1 no cambia el número: es multiplicarlo por sí mismo "una
  sola vez", o sea, dejarlo igual.
```

### 5 — Exponente 0

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 999)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}⁰?"

explicacion: |
  Cualquier número (distinto de 0) elevado a la 0 da 1. Es una convención
  que hace que las propiedades de las potencias funcionen sin
  excepciones.
```

### 6 — Exponente negativo

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 10)
  exponente: random(1, 3)

respuesta: 1 / (base ^ exponente)
tipo: input
tolerancia_abs: 0.0001

enunciado: "¿Cuánto es {base}^(-{exponente})?"

pasos:
  - "{base}^(-{exponente}) = 1 ÷ {base}^{exponente} = 1 ÷ {base ^ exponente} = {1 / (base ^ exponente)}"

explicacion: |
  El exponente negativo manda la potencia al denominador de una fracción.
```

### 7 — Producto de potencias de igual base

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 5)
  m: random(2, 5)

respuesta: base ^ (n + m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{n} × {base}^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se suman los exponentes: {n} + {m} = {n + m} → {base}^{n + m}"

explicacion: |
  Al multiplicar potencias de igual base, se suman los exponentes.
```

### 8 — Cociente de potencias de igual base

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(4, 8)
  m: random(1, n - 1)

respuesta: base ^ (n - m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{n} ÷ {base}^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se restan los exponentes: {n} - {m} = {n - m} → {base}^{n - m}"

explicacion: |
  Al dividir potencias de igual base, se restan los exponentes.
```

### 9 — Potencia de una potencia

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 4)
  m: random(2, 3)

respuesta: base ^ (n * m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({base}^{n})^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se multiplican los exponentes: {n} × {m} = {n * m} → {base}^{n * m}"

explicacion: |
  Al elevar una potencia a otro exponente, se multiplican los exponentes.
```

### 10 — Potencia de un producto

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  n: random(2, 3)

respuesta: (a * b) ^ n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} × {b})^{n}?"

pasos:
  - "El exponente se distribuye a cada factor: {a}^{n} × {b}^{n} = {a ^ n} × {b ^ n} = {(a * b) ^ n}"

explicacion: |
  La potencia de un producto es el producto de las potencias.
```

### 11 — El cuadrado de un número

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  n: random(2, 30)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el cuadrado de {n}?"

explicacion: |
  El cuadrado de un número es elevarlo a la 2.
```

### 12 — El cubo de un número

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  n: random(2, 15)

respuesta: n ^ 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el cubo de {n}?"

explicacion: |
  El cubo de un número es elevarlo a la 3.
```

### 13 — Cualquier número elevado a la 1 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número elevado a la 1 da como resultado ese mismo número."

explicacion: |
  a¹ = a, para cualquier a.
```

### 14 — Cualquier número elevado a la 0 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número (distinto de 0) elevado a la 0 da 1."

explicacion: |
  a⁰ = 1, para cualquier a ≠ 0.
```

### 15 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)
  correcto: base ^ exponente

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - base * exponente
  - correcto + base

enunciado: "¿Cuánto es {base}^{exponente}?"

explicacion: |
  La opción "base × exponente" es un error común: confunde potencia con
  multiplicación simple.
```

### 16 — Verificar una potencia (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "verificacion"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)
  correcto: base ^ exponente
  error: uno_de([0, 0, 0, base, -base])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? {base}^{exponente} = {mostrado}"

explicacion: |
  Se vuelve a calcular la potencia y se compara.
```

### 17 — Completar el exponente que falta

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)

tipo: completar
enunciado: "Completá: {base}^___ = {base ^ exponente}."
respuestas_validas:
  - exponente

explicacion: |
  Hay que encontrar a qué exponente hay que elevar {base} para obtener
  {base ^ exponente}.
```

### 18 — Problema: área de un cuadrado

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "problema"]

variables:
  lado: random(2, 30)

respuesta: lado ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene {lado} cm de lado. ¿Cuál es su área (en cm²)?"

explicacion: |
  El área de un cuadrado es el lado elevado al cuadrado.
```

### 19 — Problema: volumen de un cubo

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "problema"]

variables:
  arista: random(2, 15)

respuesta: arista ^ 3
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo tiene {arista} cm de arista. ¿Cuál es su volumen (en cm³)?"

explicacion: |
  El volumen de un cubo es la arista elevada al cubo.
```

### 20 — Potencia de un producto (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  n: random(2, 3)

respuesta: ((a * b) ^ n == (a ^ n) * (b ^ n))
tipo: vf

enunciado: "¿Es cierto que ({a} × {b})^{n} da lo mismo que {a}^{n} × {b}^{n}?"

explicacion: |
  Es la propiedad de la potencia de un producto: el exponente se
  distribuye a cada factor.
```

### 21 — Suma de exponentes en un producto (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 4)
  m: random(2, 4)

respuesta: ((base ^ n) * (base ^ m) == base ^ (n + m))
tipo: vf

enunciado: "¿Es cierto que {base}^{n} × {base}^{m} da lo mismo que {base}^({n} + {m})?"

explicacion: |
  Es la propiedad del producto de potencias de igual base.
```

### 22 — Ordenar potencias por su valor

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "orden"]

tipo: ordenar
enunciado: "Calculá estas potencias y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "2^5"
  - "3^3"
  - "5^2"
  - "2^3"
respuesta_orden: ["2^3", "5^2", "3^3", "2^5"]

explicacion: |
  2³=8, 5²=25, 3³=27, 2⁵=32: hay que calcular cada una antes de poder
  ordenarlas.
```

### 23 — Potencias de 10

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  exponente: random(2, 6)

respuesta: 10 ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 10^{exponente}?"

pasos:
  - "10 elevado a n es un 1 seguido de n ceros: {10 ^ exponente}"

explicacion: |
  Las potencias de 10 son la base de la notación científica, el próximo
  tema del mapa.
```

### 24 — Elegir cuál potencia es mayor

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "comparacion"]

variables:
  base1: random(2, 9)
  exp1: random(2, 4)
  base2: random(2, 9)
  exp2: random(2, 4)

restricciones:
  - (base1 ^ exp1) != (base2 ^ exp2)

respuesta: ((base1 ^ exp1) > (base2 ^ exp2))
tipo: vf

enunciado: "¿Es {base1}^{exp1} mayor que {base2}^{exp2}?"

explicacion: |
  Hay que calcular las dos potencias antes de poder compararlas — no
  alcanza con comparar sólo las bases o sólo los exponentes por separado.
```

### 25 — Problema: crecimiento que se duplica

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "problema"]

variables:
  inicial: random(1, 10)
  veces: random(3, 8)

respuesta: inicial * (2 ^ veces)
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {inicial} bacterias se duplica cada hora. ¿Cuántas bacterias hay después de {veces} horas?"

pasos:
  - "{inicial} × 2^{veces} = {inicial} × {2 ^ veces} = {inicial * (2 ^ veces)}"

explicacion: |
  Duplicarse varias veces seguidas es multiplicar por 2 elevado a la
  cantidad de veces que se duplicó.
```

### 26 — El exponente negativo da un resultado menor a 1

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 10)
  exponente: random(1, 3)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {base}^(-{exponente}) da como resultado un número menor a 1?"

explicacion: |
  Un exponente negativo con base mayor a 1 siempre da una fracción entre
  0 y 1.
```

### 27 — Potencia de un número negativo, exponente par

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 9)
  exponente: random(1, 3) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que (-{base})^{exponente} da como resultado un número positivo?"

explicacion: |
  Con exponente par, los signos negativos se van cancelando de a pares:
  el resultado siempre da positivo.
```

### 28 — Qué es una potencia (cierre)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una potencia es multiplicar la base por sí misma tantas veces como indica el exponente."

explicacion: |
  Es la idea central de todo el tema: potenciación es multiplicación
  repetida, igual que multiplicación es suma repetida.
```
