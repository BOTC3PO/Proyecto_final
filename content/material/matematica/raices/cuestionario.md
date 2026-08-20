# Matemática — Raíces (cuestionario, 26 preguntas VBLang)

> Tema: `N14`. Ver `teoria.md` en esta misma carpeta. Usa los builtins
> `sqrt(n)` y `raiz(radicando, indice)` del DSL (confirmados en
> `packages/vblang/src/validator/builtin-signatures.ts`).

---

### 1 — Qué es una raíz

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

enunciado: "¿Qué es la raíz cuadrada de un número a?"
tipo: mc
opciones_explicitas:
  - "El número b tal que b² = a"
  - "El número a dividido 2"
  - "El número a multiplicado por sí mismo"
respuesta: "El número b tal que b² = a"

explicacion: |
  La raíz cuadrada es la operación inversa de elevar al cuadrado.
```

### 2 — Raíz cuadrada exacta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices"]

variables:
  k: random(2, 15)
  n: k ^ 2

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

pasos:
  - "{n} es {k}², así que su raíz cuadrada es {k}"

explicacion: |
  Cuando el radicando es un cuadrado perfecto, la raíz da exacta.
```

### 3 — Raíz cuadrada exacta (número más grande)

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(10, 30)
  n: k ^ 2

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: buscar qué número
  elevado al cuadrado da {n}.
```

### 4 — Raíz cúbica exacta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 10)
  n: k ^ 3

respuesta: raiz(n, 3)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cúbica de {n}?"

pasos:
  - "{n} es {k}³, así que su raíz cúbica es {k}"

explicacion: |
  La raíz cúbica busca qué número, elevado al cubo, da el radicando.
```

### 5 — Verificar la relación entre potencia y raíz

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "vocabulario"]

variables:
  b: random(2, 20)
  a: b ^ 2

respuesta: (sqrt(a) == b)
tipo: vf

enunciado: "Sabiendo que {b}² = {a}, ¿es cierto que √{a} = {b}?"

explicacion: |
  La raíz cuadrada deshace lo que hizo elevar al cuadrado.
```

### 6 — Raíz cuarta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  k: random(2, 6)
  n: k ^ 4

respuesta: raiz(n, 4)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuarta de {n}?"

explicacion: |
  Con índice 4, se busca qué número elevado a la 4 da el radicando.
```

### 7 — Aproximar una raíz no exacta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  n: random(2, 99)

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es (aproximadamente) √{n}?"

explicacion: |
  No todos los números tienen raíz cuadrada exacta: cuando no la tiene,
  el resultado es un decimal con infinitas cifras, y se acepta una
  aproximación.
```

### 8 — Raíz de un producto

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "propiedades"]

variables:
  a: random(2, 20) ^ 2
  b: random(2, 20) ^ 2

respuesta: (sqrt(a * b) == sqrt(a) * sqrt(b))
tipo: vf

enunciado: "¿Es cierto que √({a} × {b}) da lo mismo que √{a} × √{b}?"

explicacion: |
  Es la propiedad de la raíz de un producto: se puede separar en la raíz
  de cada factor.
```

### 9 — Raíz de un cociente

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "propiedades"]

variables:
  b: random(2, 15) ^ 2
  k: random(2, 10) ^ 2
  a: b * k

respuesta: (sqrt(a / b) == sqrt(a) / sqrt(b))
tipo: vf

enunciado: "¿Es cierto que √({a} ÷ {b}) da lo mismo que √{a} ÷ √{b}?"

explicacion: |
  Es la propiedad de la raíz de un cociente: se puede separar en la raíz
  del numerador dividida por la raíz del denominador.
```

### 10 — Aplicar la propiedad del producto

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices", "propiedades"]

variables:
  a: random(2, 15) ^ 2
  b: random(2, 15) ^ 2

respuesta: sqrt(a) * sqrt(b)
tipo: input
tolerancia_abs: 0

enunciado: "Usando la propiedad de la raíz de un producto, ¿cuánto es √({a} × {b})?"

pasos:
  - "√{a} × √{b} = {sqrt(a)} × {sqrt(b)} = {sqrt(a) * sqrt(b)}"

explicacion: |
  Separar el producto en dos raíces cuadradas perfectas hace la cuenta
  más fácil.
```

### 11 — La raíz cuadrada de un negativo

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dentro de los números reales, la raíz cuadrada de un número negativo no tiene solución."

explicacion: |
  Ningún número real, elevado al cuadrado, puede dar un resultado
  negativo: el cuadrado de cualquier número real es siempre positivo o
  cero.
```

### 12 — Raíz cúbica de un negativo

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 10)
  n: -(k ^ 3)

respuesta: -k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cúbica de {n}?"

pasos:
  - "(-{k})³ = {n}, así que la raíz cúbica de {n} es -{k}"

explicacion: |
  A diferencia de la raíz cuadrada, la raíz cúbica de un negativo sí tiene
  solución (negativa): un número negativo elevado a un exponente impar
  sigue dando negativo.
```

### 13 — Potencia y raíz son operaciones inversas

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La raíz cuadrada es la operación inversa de elevar al cuadrado, igual que la resta es inversa de la suma."

explicacion: |
  Aplicar una y después la otra vuelve al número original.
```

### 14 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 20)
  n: k ^ 2

respuesta: k
tipo: mc
opciones_explicitas:
  - k
  - n / 2
  - k + 1

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

explicacion: |
  Las otras opciones confunden la raíz con dividir por 2, o se equivocan
  por poco.
```

### 15 — Verificar una raíz (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "verificacion"]

variables:
  k: random(2, 20)
  n: k ^ 2
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: k + error

respuesta: (mostrado * mostrado == n)
tipo: vf

enunciado: "¿Está bien calculado esto? √{n} = {mostrado}"

explicacion: |
  Se verifica elevando {mostrado} al cuadrado y comparando con {n}.
```

### 16 — Completar el índice que falta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  k: random(2, 8)
  indice: uno_de([2, 3, 4])
  n: k ^ indice

tipo: completar
enunciado: "___√{n} = {k}. Completá el índice de la raíz (2, 3 o 4)."
respuestas_validas:
  - indice

explicacion: |
  Hay que encontrar a qué índice hay que elevar {k} para llegar a {n}.
```

### 17 — Completar el radicando que falta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 20)

tipo: completar
enunciado: "Completá: √___ = {k}."
respuestas_validas:
  - k ^ 2

explicacion: |
  El radicando que falta es {k} elevado al cuadrado (para deshacer la
  raíz).
```

### 18 — Problema: lado de un cuadrado

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "problema"]

variables:
  lado: random(2, 30)
  area: lado ^ 2

respuesta: lado
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene un área de {area} cm². ¿Cuánto mide su lado?"

pasos:
  - "El lado es la raíz cuadrada del área: √{area} = {lado}"

explicacion: |
  Como el área de un cuadrado es lado², el lado se encuentra con la raíz
  cuadrada del área.
```

### 19 — Problema: arista de un cubo

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "problema"]

variables:
  arista: random(2, 15)
  volumen: arista ^ 3

respuesta: arista
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo tiene un volumen de {volumen} cm³. ¿Cuánto mide su arista?"

pasos:
  - "La arista es la raíz cúbica del volumen: ∛{volumen} = {arista}"

explicacion: |
  Como el volumen de un cubo es arista³, la arista se encuentra con la
  raíz cúbica del volumen.
```

### 20 — Ordenar raíces por su valor

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "orden"]

tipo: ordenar
enunciado: "Calculá estas raíces y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "√81"
  - "√16"
  - "√49"
  - "√4"
respuesta_orden: ["√4", "√16", "√49", "√81"]

explicacion: |
  √4=2, √16=4, √49=7, √81=9: hay que calcular cada una antes de poder
  ordenarlas.
```

### 21 — Comparar dos raíces

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "comparacion"]

variables:
  a: random(2, 99)
  b: random(2, 99)

restricciones:
  - a != b

respuesta: (sqrt(a) > sqrt(b))
tipo: vf

enunciado: "¿Es √{a} mayor que √{b}?"

explicacion: |
  A mayor radicando, mayor la raíz cuadrada: no hace falta calcular las
  dos raíces exactas para saber cuál es mayor.
```

### 22 — Reconocer una raíz exacta

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  n: random(2, 99)
  k: floor(sqrt(n))

respuesta: (k * k == n)
tipo: vf

enunciado: "¿Es exacta la raíz cuadrada de {n} (da como resultado un número entero)?"

explicacion: |
  Es exacta sólo cuando el radicando es un cuadrado perfecto (1, 4, 9, 16,
  25...).
```

### 23 — Raíz de 0 y de 1

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "casos_especiales"]

respuesta: verdadero
tipo: vf

enunciado: "La raíz cuadrada de 0 es 0, y la raíz cuadrada de 1 es 1."

explicacion: |
  0² = 0 y 1² = 1: los dos son casos especiales donde el número y su raíz
  coinciden.
```

### 24 — Simplificar la raíz de una potencia par

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  base: random(2, 20)

respuesta: base
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es √({base}²)?"

pasos:
  - "La raíz cuadrada deshace el cuadrado: √({base}²) = {base}"

explicacion: |
  Elevar al cuadrado y después sacar raíz cuadrada son operaciones
  inversas: se cancelan entre sí.
```

### 25 — Raíces no exactas también son números reales

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque √2 no tenga una cantidad finita de cifras decimales, sigue siendo un número real, ubicable en la recta numérica."

explicacion: |
  No tener un valor "exacto y corto" no significa que no sea un número
  real de verdad — es el adelanto del próximo tema, irracionales.
```

### 26 — Qué es una raíz (cierre)

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sacar raíz es la operación inversa de elevar a una potencia: buscar qué número, elevado al índice de la raíz, da el radicando."

explicacion: |
  Es la idea central de todo el tema.
```
