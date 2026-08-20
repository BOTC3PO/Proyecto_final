# Matemática — Porcentaje (cuestionario, 28 preguntas VBLang)

> Tema: `N11`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un porcentaje

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

enunciado: "¿Qué es un porcentaje?"
tipo: mc
opciones_explicitas:
  - "Una razón con denominador 100"
  - "Cualquier número decimal"
  - "La mitad de un número"
respuesta: "Una razón con denominador 100"

explicacion: |
  p% significa "p de cada 100": es una fracción con denominador fijo
  en 100.
```

### 2 — Calcular un porcentaje

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "calcular"]

variables:
  v: random(10, 90) * 10
  p: uno_de([10, 20, 25, 50])

respuesta: v * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {p}% de {v}?"

pasos:
  - "{v} × {p} ÷ 100 = {v * p / 100}"

explicacion: |
  Se multiplica el valor por el porcentaje y se divide por 100.
```

### 3 — Calcular un porcentaje (otro caso)

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  v: random(20, 900)
  p: random(1, 99)

respuesta: v * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {p}% de {v}?"

explicacion: |
  El procedimiento es el mismo, aunque el porcentaje no sea uno
  "redondo".
```

### 4 — Hallar qué porcentaje representa una parte

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50, 75])
  parte: t * p / 100

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Qué porcentaje de {t} representa {parte}?"

pasos:
  - "({parte} ÷ {t}) × 100 = {(parte / t) * 100}"

explicacion: |
  Se divide la parte por el total y se multiplica por 100.
```

### 5 — Hallar el total, dado un porcentaje y una parte

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50])
  parte: t * p / 100

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "{parte} es el {p}% de un número. ¿Cuál es ese número?"

pasos:
  - "{parte} × 100 ÷ {p} = {(parte * 100) / p}"

explicacion: |
  Se multiplica la parte por 100 y se divide por el porcentaje.
```

### 6 — Porcentaje y fracción

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

enunciado: "¿A qué fracción equivale el 25%?"
tipo: mc
opciones_explicitas:
  - "1/4"
  - "1/2"
  - "1/3"
respuesta: "1/4"

explicacion: |
  25% = 25/100, que simplificado da 1/4.
```

### 7 — Porcentaje y decimal

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

variables:
  p: random(1, 99)

respuesta: p / 100
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {p}% en decimal?"

explicacion: |
  Se divide el porcentaje por 100 (se corre la coma dos lugares a la
  izquierda).
```

### 8 — Decimal a porcentaje

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

variables:
  centesimos: random(1, 99)
  n: centesimos / 100

respuesta: centesimos
tipo: input
tolerancia_abs: 0.01

enunciado: "¿A qué porcentaje equivale {n}?"

explicacion: |
  Se multiplica el decimal por 100 (se corre la coma dos lugares a la
  derecha).
```

### 9 — Aumento porcentual

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "aumento"]

variables:
  v: random(20, 900)
  p: uno_de([5, 10, 15, 20, 25])

respuesta: v * (1 + p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Aumentá {v} en un {p}%. ¿Cuánto queda?"

pasos:
  - "{v} × (1 + {p}/100) = {v} × {1 + p / 100} = {v * (1 + p / 100)}"

explicacion: |
  Aumentar en p% es multiplicar por (1 + p/100).
```

### 10 — Descuento porcentual

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "descuento"]

variables:
  v: random(20, 900)
  p: uno_de([5, 10, 15, 20, 25])

respuesta: v * (1 - p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Descontá un {p}% a {v}. ¿Cuánto queda?"

pasos:
  - "{v} × (1 - {p}/100) = {v} × {1 - p / 100} = {v * (1 - p / 100)}"

explicacion: |
  Descontar p% es multiplicar por (1 − p/100).
```

### 11 — Descuentos sucesivos

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "descuento"]

variables:
  v: random(100, 900)
  p1: uno_de([10, 20])
  p2: uno_de([10, 20])

respuesta: v * (1 - p1 / 100) * (1 - p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "A {v} se le aplica primero un {p1}% de descuento, y después otro {p2}% de descuento (sobre el nuevo precio). ¿Cuánto queda?"

pasos:
  - "{v} × (1 - {p1}/100) × (1 - {p2}/100) = {v * (1 - p1 / 100) * (1 - p2 / 100)}"

explicacion: |
  El segundo descuento se aplica sobre el precio YA descontado, no sobre
  el original.
```

### 12 — Aumentos sucesivos

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "aumento"]

variables:
  v: random(100, 900)
  p1: uno_de([10, 20])
  p2: uno_de([10, 20])

respuesta: v * (1 + p1 / 100) * (1 + p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "{v} recibe primero un aumento del {p1}%, y después otro aumento del {p2}% (sobre el nuevo valor). ¿Cuánto queda?"

explicacion: |
  El segundo aumento se aplica sobre el valor ya aumentado.
```

### 13 — Problema: precio final con IVA

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(100, 900)

respuesta: precio * 1.21
tipo: input
tolerancia_abs: 0.01

enunciado: "Un producto cuesta ${precio} sin IVA. Con un IVA del 21%, ¿cuál es el precio final?"

explicacion: |
  El precio final es el precio original más el 21% de aumento.
```

### 14 — Problema: descuento en una oferta

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(100, 900)
  p: uno_de([10, 15, 20, 25, 30])

respuesta: precio * (1 - p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una remera cuesta ${precio} y está en oferta con {p}% de descuento. ¿Cuánto sale ahora?"

explicacion: |
  El precio de oferta es el precio original menos el porcentaje de
  descuento.
```

### 15 — Problema: comisión de venta

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  venta: random(1000, 9000)
  comision: uno_de([2, 5, 8, 10])

respuesta: venta * comision / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "Un vendedor cobra {comision}% de comisión sobre cada venta. Si vendió ${venta}, ¿cuánto cobra de comisión?"

explicacion: |
  La comisión es un porcentaje calculado sobre el monto vendido.
```

### 16 — Problema: propina

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "problema"]

variables:
  cuenta: random(1000, 9000)

respuesta: cuenta * 0.1
tipo: input
tolerancia_abs: 0.01

enunciado: "La cuenta de un restaurante da ${cuenta}. Dejando un 10% de propina, ¿cuánto es la propina?"

explicacion: |
  Calcular una propina es calcular el porcentaje de un valor.
```

### 17 — 100% es el total completo

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 100% de cualquier cantidad es esa misma cantidad completa."

explicacion: |
  100% = 100/100 = 1: multiplicar por 1 no cambia nada.
```

### 18 — 50% es la mitad

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 50% de cualquier cantidad es la mitad de esa cantidad."

explicacion: |
  50% = 50/100 = 1/2.
```

### 19 — 0% es nada

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0% de cualquier cantidad es 0."

explicacion: |
  0% = 0/100 = 0: no queda nada.
```

### 20 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25, 50])
  correcto: v * p / 100

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - v * p
  - v / p

enunciado: "¿Cuál es el {p}% de {v}?"

explicacion: |
  Las otras opciones se olvidan de dividir por 100, o confunden la
  operación.
```

### 21 — Verificar un cálculo de porcentaje (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "verificacion"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25, 50])
  correcto: v * p / 100
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El {p}% de {v} es {mostrado}."

explicacion: |
  Se vuelve a calcular (valor × porcentaje ÷ 100) y se compara.
```

### 22 — Completar el porcentaje que falta

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50, 75])
  parte: t * p / 100

tipo: completar
enunciado: "Completá: el ___% de {t} es {parte}."
respuestas_validas:
  - p

explicacion: |
  Se despeja el porcentaje: (parte ÷ total) × 100.
```

### 23 — Comparar dos descuentos: cuál conviene más

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(500, 2000)
  descuento_alto: 30
  descuento_bajo: 20

respuesta: (precio * (1 - descuento_alto / 100)) < (precio * (1 - descuento_bajo / 100))
tipo: vf

enunciado: "¿Es cierto que un descuento del {descuento_alto}% deja un precio final más barato que un descuento del {descuento_bajo}%, sobre el mismo precio de ${precio}?"

explicacion: |
  A mayor porcentaje de descuento, menor el precio final.
```

### 24 — Aumentar y después descontar el mismo porcentaje NO vuelve al original

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "vocabulario"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25])

respuesta: falso
tipo: vf

enunciado: "Si a {v} se le aumenta un {p}% y después se le descuenta ese mismo {p}%, el resultado vuelve a ser {v}."

explicacion: |
  No vuelve al original: el aumento y el descuento se calculan sobre
  valores distintos (el segundo, sobre el ya aumentado), así que el
  resultado final queda un poco por debajo de {v}.
```

### 25 — Porcentaje mayor a 100%

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  v: random(50, 500)

respuesta: v * 1.5
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el 150% de {v}?"

explicacion: |
  Un porcentaje mayor a 100% da un resultado mayor que el valor original
  — 150% es "una vez y media" el valor.
```

### 26 — Ordenar resultados de distintos porcentajes

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "orden"]

tipo: ordenar
enunciado: "Calculá estos porcentajes de 200, y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "10% de 200"
  - "50% de 200"
  - "25% de 200"
  - "5% de 200"
respuesta_orden: ["5% de 200", "10% de 200", "25% de 200", "50% de 200"]

explicacion: |
  A mayor porcentaje del mismo valor, mayor el resultado: 10, 20, 50,
  100.
```

### 27 — Problema: cuánto ahorra en una oferta

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(500, 3000)
  p: uno_de([10, 20, 30])

respuesta: precio * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "Un producto de ${precio} tiene {p}% de descuento. ¿Cuántos pesos te ahorrás (no el precio final, el ahorro)?"

explicacion: |
  El ahorro es, directamente, el porcentaje de descuento calculado sobre
  el precio original.
```

### 28 — Qué es un porcentaje (cierre)

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Porcentaje, fracción con denominador 100 y decimal son tres formas distintas de escribir la misma cantidad."

explicacion: |
  25%, 25/100 y 0,25 representan exactamente el mismo valor.
```
