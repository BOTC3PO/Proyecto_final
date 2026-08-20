# Matemática — Logaritmos (cuestionario, 26 preguntas VBLang)

> Tema: `N15`. Ver `teoria.md` en esta misma carpeta. Usa el builtin
> `log10(n)` del DSL (logaritmo en base 10 — distinto de `log()`, que es
> logaritmo natural).

---

### 1 — Qué es un logaritmo

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

enunciado: "¿Qué es log₁₀ x?"
tipo: mc
opciones_explicitas:
  - "El exponente al que hay que elevar 10 para obtener x"
  - "x dividido 10"
  - "10 elevado a x"
respuesta: "El exponente al que hay que elevar 10 para obtener x"

explicacion: |
  log_b x = y significa que bʸ = x: el logaritmo despeja el exponente.
```

### 2 — Calcular un logaritmo (potencia exacta de 10)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀({x})?"

pasos:
  - "{x} = 10^{n}, así que log₁₀({x}) = {n}"

explicacion: |
  El logaritmo en base 10 de una potencia exacta de 10 es, directamente,
  el exponente.
```

### 3 — Calcular un logaritmo (otra potencia de 10)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(2, 9)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀({x})?"

explicacion: |
  Alcanza con contar cuántos ceros tiene {x} después del 1.
```

### 4 — Verificar la relación potencia-logaritmo

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "vocabulario"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: ((10 ^ n) == x)
tipo: vf

enunciado: "Sabiendo que log₁₀({x}) = {n}, ¿es cierto que 10^{n} = {x}?"

explicacion: |
  El logaritmo y la potencia son operaciones inversas: si log_b x = y,
  entonces bʸ = x.
```

### 5 — Logaritmo de 1

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "casos_especiales"]

respuesta: 0
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(1)?"

explicacion: |
  Cualquier base elevada a 0 da 1: por eso el logaritmo de 1, en
  cualquier base, siempre es 0.
```

### 6 — Logaritmo de la propia base

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "casos_especiales"]

respuesta: 1
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(10)?"

explicacion: |
  Cualquier base elevada a 1 da esa misma base: por eso log_b(b) siempre
  es 1.
```

### 7 — Propiedad del logaritmo de un producto

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

respuesta: (abs(log10(a * b) - (log10(a) + log10(b))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} × {b}) da lo mismo que log₁₀({a}) + log₁₀({b})?"

explicacion: |
  Es la propiedad del logaritmo de un producto: se convierte en una suma
  de logaritmos.
```

### 8 — Propiedad del logaritmo de un cociente

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(20, 900)
  b: random(2, 19)

respuesta: (abs(log10(a / b) - (log10(a) - log10(b))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} ÷ {b}) da lo mismo que log₁₀({a}) - log₁₀({b})?"

explicacion: |
  Es la propiedad del logaritmo de un cociente: se convierte en una resta
  de logaritmos.
```

### 9 — Propiedad del logaritmo de una potencia

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  n: random(2, 4)

respuesta: (abs(log10(a ^ n) - (n * log10(a))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a}^{n}) da lo mismo que {n} × log₁₀({a})?"

explicacion: |
  Es la propiedad del logaritmo de una potencia: el exponente pasa a
  multiplicar.
```

### 10 — Aplicar la propiedad del producto con potencias de 10

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  n1: random(1, 4)
  n2: random(1, 4)

respuesta: n1 + n2
tipo: input
tolerancia_abs: 0.001

enunciado: "Sabiendo que log₁₀(10^{n1}) = {n1} y log₁₀(10^{n2}) = {n2}, ¿cuánto es log₁₀(10^{n1} × 10^{n2})?"

pasos:
  - "log₁₀(10^{n1} × 10^{n2}) = {n1} + {n2} = {n1 + n2}"

explicacion: |
  El logaritmo de un producto es la suma de los logaritmos.
```

### 11 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: n
tipo: mc
opciones_explicitas:
  - n
  - x / 10
  - n + 1

enunciado: "¿Cuánto es log₁₀({x})?"

explicacion: |
  Las otras opciones confunden el logaritmo con dividir por 10, o se
  equivocan por poco.
```

### 12 — Verificar un logaritmo (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "verificacion"]

variables:
  n: random(1, 6)
  x: 10 ^ n
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: n + error

respuesta: (mostrado == n)
tipo: vf

enunciado: "¿Está bien calculado esto? log₁₀({x}) = {mostrado}"

explicacion: |
  Se verifica comprobando que 10 elevado al resultado dado sea igual a
  {x}.
```

### 13 — Completar el exponente que falta

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)

tipo: completar
enunciado: "Completá: log₁₀(10^___) = {n}."
respuestas_validas:
  - n

explicacion: |
  Hay que encontrar a qué exponente hay que elevar 10 para que el
  logaritmo dé {n}.
```

### 14 — Cuántas cifras tiene un número (usando logaritmo)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

variables:
  n: random(100, 98765)

respuesta: floor(log10(n)) + 1
tipo: input
tolerancia_abs: 0

enunciado: "Usando que la cantidad de cifras de un número es floor(log₁₀(n)) + 1, ¿cuántas cifras tiene {n}?"

explicacion: |
  El logaritmo en base 10 de un número dice, aproximadamente, cuántas
  cifras tiene: tomar la parte entera y sumarle 1 da la cantidad exacta.
```

### 15 — Comparar dos logaritmos

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "comparacion"]

variables:
  a: random(2, 999)
  b: random(2, 999)

restricciones:
  - a != b

respuesta: (log10(a) > log10(b))
tipo: vf

enunciado: "¿Es log₁₀({a}) mayor que log₁₀({b})?"

explicacion: |
  Con base mayor a 1, a mayor argumento, mayor el logaritmo — no hace
  falta calcular los dos logaritmos exactos para saber cuál es mayor.
```

### 16 — Problema: escala de magnitud (terremotos)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

variables:
  n1: random(2, 6)
  n2: n1 + 1

respuesta: 10
tipo: input
tolerancia_abs: 0.01

enunciado: "La escala Richter es logarítmica en base 10: un sismo de magnitud {n2} libera 10 veces más energía que uno de magnitud {n1}. ¿Cuántas veces más energía libera cada punto de diferencia?"

explicacion: |
  En una escala logarítmica de base 10, cada unidad de diferencia
  representa multiplicar por 10.
```

### 17 — Logaritmo de un número menor a 1

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "casos_especiales"]

variables:
  n: random(1, 4)

respuesta: -n
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(1 ÷ 10^{n})?"

pasos:
  - "1 ÷ 10^{n} = 10^(-{n}), así que su logaritmo es -{n}"

explicacion: |
  El logaritmo de un número menor a 1 (pero mayor a 0) siempre da
  negativo.
```

### 18 — Ordenar logaritmos

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "orden"]

tipo: ordenar
enunciado: "Calculá estos logaritmos y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "log₁₀(1000)"
  - "log₁₀(10)"
  - "log₁₀(100000)"
  - "log₁₀(1)"
respuesta_orden: ["log₁₀(1)", "log₁₀(10)", "log₁₀(1000)", "log₁₀(100000)"]

explicacion: |
  log₁₀(1)=0, log₁₀(10)=1, log₁₀(1000)=3, log₁₀(100000)=5.
```

### 19 — Logaritmo de un número que no es potencia de 10

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos"]

variables:
  n: random(2, 999)

respuesta: log10(n)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es (aproximadamente) log₁₀({n})?"

explicacion: |
  No todos los logaritmos dan un número entero exacto: cuando no es
  potencia exacta de la base, el resultado es un decimal.
```

### 20 — Relación entre logaritmo y notación científica

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La parte entera de log₁₀(n) está directamente relacionada con el exponente que tendría n escrito en notación científica."

explicacion: |
  Para un número entre 1×10ⁿ y 10×10ⁿ, log₁₀ del número da un valor
  entre n y n+1 — la parte entera coincide con el exponente de la
  notación científica.
```

### 21 — El logaritmo es la inversa de la potenciación

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El logaritmo es la operación inversa de la potenciación, igual que la resta es inversa de la suma."

explicacion: |
  Aplicar la potenciación y después el logaritmo (en la misma base)
  vuelve al exponente original.
```

### 22 — log(a×b) NO es log(a)×log(b)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} × {b}) da lo mismo que log₁₀({a}) × log₁₀({b})?"

explicacion: |
  Es un error común: el logaritmo de un producto es la SUMA de los
  logaritmos, no el producto.
```

### 23 — Diferencia entre log, ln y log10

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "vocabulario"]

enunciado: "Cuando se escribe \"log x\" sin ninguna base aclarada, ¿a qué base se suele referir en el nivel secundario?"
tipo: mc
opciones_explicitas:
  - "Base 10"
  - "Base 2"
  - "Siempre hay que aclarar la base, nunca se sobreentiende"
respuesta: "Base 10"

explicacion: |
  "log" sin base es, por convención en este nivel, el logaritmo decimal
  (base 10) — distinto de "ln", que es el logaritmo natural (base e).
```

### 24 — Elegir cuál logaritmo es mayor (sin calcular exacto)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "comparacion"]

variables:
  a: random(100, 999)
  b: random(10, 99)

respuesta: verdadero
tipo: vf

enunciado: "Sin calcular el valor exacto: ¿es cierto que log₁₀({a}) es mayor que log₁₀({b}), sabiendo que {a} tiene más cifras que {b}?"

explicacion: |
  Más cifras significa mayor magnitud, y el logaritmo en base 10 crece
  junto con la magnitud del número.
```

### 25 — Problema: pH (aplicación logarítmica)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "El pH de una solución se calcula con un logaritmo en base 10: por eso, una solución de pH 3 es 10 veces más ácida que una de pH 4."

explicacion: |
  Es otra aplicación real de una escala logarítmica, igual que la escala
  Richter de terremotos.
```

### 26 — Qué es un logaritmo (cierre)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El logaritmo despeja el exponente de una potencia, sabiendo la base y el resultado."

explicacion: |
  Es la idea central de todo el tema: log_b x = y ⟺ bʸ = x.
```
