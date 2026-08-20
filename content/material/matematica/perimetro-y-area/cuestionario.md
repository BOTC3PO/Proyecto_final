# Matemática — Perímetro y área: figuras simples (cuestionario, 38 preguntas VBLang)

> Tema: `M3`. Ver `teoria.md` en esta misma carpeta. Usa la constante `pi`
> del DSL para circunferencia y área del círculo.

---

### 1 — Qué es el perímetro

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["perimetro", "vocabulario"]

enunciado: "¿Qué es el perímetro de una figura?"
tipo: mc
opciones_explicitas:
  - "La longitud total de su contorno"
  - "La superficie que ocupa"
  - "La cantidad de lados que tiene"
respuesta: "La longitud total de su contorno"

explicacion: |
  Es la suma de todos los lados (o la vuelta completa, en el círculo).
```

### 2 — Qué es el área

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["area", "vocabulario"]

enunciado: "¿Qué es el área de una figura?"
tipo: mc
opciones_explicitas:
  - "La medida de la superficie que ocupa"
  - "La longitud de su contorno"
  - "La cantidad de vértices que tiene"
respuesta: "La medida de la superficie que ocupa"

explicacion: |
  Se mide en unidades cuadradas: cm², m².
```

### 3 — Perímetro del cuadrado

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "perimetro"]

variables:
  l: random(2, 40)

respuesta: 4 * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un cuadrado de lado {l} cm?"

pasos:
  - "4 × {l} = {4 * l} cm"

explicacion: |
  El perímetro del cuadrado es 4 veces el lado.
```

### 4 — Área del cuadrado

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "area"]

variables:
  l: random(2, 40)

respuesta: l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un cuadrado de lado {l} cm?"

pasos:
  - "{l} × {l} = {l * l} cm²"

explicacion: |
  El área del cuadrado es el lado al cuadrado.
```

### 5 — Lado del cuadrado a partir del área

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["cuadrado", "area"]

variables:
  l: random(2, 20)
  area: l * l

respuesta: l
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene {area} cm² de área. ¿Cuánto mide su lado?"

pasos:
  - "sqrt({area}) = {sqrt(area)}"

explicacion: |
  El lado es la raíz cuadrada del área (la operación inversa de
  elevarlo al cuadrado).
```

### 6 — Perímetro del rectángulo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rectangulo", "perimetro"]

variables:
  b: random(3, 40)
  h: random(2, 30)

restricciones:
  - b != h

respuesta: 2 * (b + h)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un rectángulo de base {b} cm y altura {h} cm?"

pasos:
  - "2 × ({b} + {h}) = {2 * (b + h)} cm"

explicacion: |
  El perímetro suma los cuatro lados: dos bases y dos alturas.
```

### 7 — Área del rectángulo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rectangulo", "area"]

variables:
  b: random(3, 40)
  h: random(2, 30)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un rectángulo de base {b} cm y altura {h} cm?"

pasos:
  - "{b} × {h} = {b * h} cm²"

explicacion: |
  El área del rectángulo es base por altura.
```

### 8 — Altura del rectángulo a partir del área

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "area"]

variables:
  b: random(2, 15)
  h: random(2, 15)
  area: b * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Un rectángulo tiene {area} cm² de área y {b} cm de base. ¿Cuánto mide su altura?"

pasos:
  - "{area} ÷ {b} = {area / b} cm"

explicacion: |
  La altura se despeja dividiendo el área por la base.
```

### 9 — Perímetro del triángulo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "perimetro"]

variables:
  a: random(3, 20)
  b: random(3, 20)
  c: random(3, 20)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Cuál es su perímetro?"

explicacion: |
  El perímetro de cualquier polígono es la suma de todos sus lados.
```

### 10 — Área del triángulo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "area"]

variables:
  b: random(4, 40)
  h: random(2, 30)

respuesta: (b * h) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuál es el área de un triángulo de base {b} cm y altura {h} cm?"

pasos:
  - "({b} × {h}) ÷ 2 = {(b * h) / 2} cm²"

explicacion: |
  El área del triángulo es base por altura, dividido 2.
```

### 11 — Base del triángulo a partir del área

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["triangulo", "area"]

variables:
  b: random(2, 20)
  h: random(2, 20)
  area: (b * h) / 2

respuesta: b
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo tiene {area} cm² de área y {h} cm de altura. ¿Cuánto mide su base?"

pasos:
  - "({area} × 2) ÷ {h} = {(area * 2) / h} cm"

explicacion: |
  Se despeja la base: (área × 2) ÷ altura.
```

### 12 — Área del paralelogramo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["paralelogramo", "area"]

variables:
  b: random(4, 40)
  h: random(2, 30)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un paralelogramo de base {b} cm y altura {h} cm?"

explicacion: |
  Igual que el rectángulo: base por altura (la altura es perpendicular a
  la base, no un lado inclinado).
```

### 13 — Perímetro del paralelogramo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["paralelogramo", "perimetro"]

variables:
  b: random(4, 30)
  l: random(2, 20)

respuesta: 2 * (b + l)
tipo: input
tolerancia_abs: 0

enunciado: "Un paralelogramo tiene lados de {b} cm y {l} cm. ¿Cuál es su perímetro?"

explicacion: |
  Un paralelogramo tiene dos pares de lados iguales: el perímetro es
  2 × (lado1 + lado2).
```

### 14 — Área del trapecio

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["trapecio", "area"]

variables:
  B: random(10, 40)
  b: random(3, 9)
  h: random(2, 20)

respuesta: ((B + b) * h) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un trapecio tiene base mayor {B} cm, base menor {b} cm y altura {h} cm. ¿Cuál es su área?"

pasos:
  - "(({B} + {b}) × {h}) ÷ 2 = {((B + b) * h) / 2} cm²"

explicacion: |
  El área del trapecio es la semisuma de las bases, por la altura.
```

### 15 — Área del rombo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rombo", "area"]

variables:
  D: random(10, 40)
  d: random(4, 9)

respuesta: (D * d) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un rombo tiene diagonales de {D} cm y {d} cm. ¿Cuál es su área?"

pasos:
  - "({D} × {d}) ÷ 2 = {(D * d) / 2} cm²"

explicacion: |
  El área del rombo es el producto de las diagonales, dividido 2.
```

### 16 — Perímetro del rombo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rombo", "perimetro"]

variables:
  l: random(3, 30)

respuesta: 4 * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un rombo de lado {l} cm?"

explicacion: |
  Los 4 lados del rombo miden lo mismo: perímetro = 4 × lado.
```

### 17 — Circunferencia del círculo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "circunferencia"]

variables:
  r: random(2, 20)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la circunferencia (el perímetro) de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  La circunferencia es 2 × π × radio.
```

### 18 — Área del círculo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "area"]

variables:
  r: random(2, 20)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² = {redondear(pi * r * r, 2)} cm²"

explicacion: |
  El área del círculo es π por el radio al cuadrado.
```

### 19 — Circunferencia a partir del diámetro

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "circunferencia"]

variables:
  d: random(4, 40)

respuesta: redondear(pi * d, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la circunferencia de un círculo de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "π × {d} = {redondear(pi * d, 2)} cm"

explicacion: |
  Como el diámetro es el doble del radio, la fórmula 2×π×r se puede
  escribir directamente como π × diámetro.
```

### 20 — El diámetro es el doble del radio

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un círculo, el diámetro es siempre el doble del radio."

explicacion: |
  d = 2r: el diámetro cruza todo el círculo pasando por el centro, el
  radio es sólo la mitad de ese trayecto.
```

### 21 — π es una constante

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) es siempre el mismo número, sin importar el tamaño del círculo."

explicacion: |
  π es la razón entre la circunferencia y el diámetro de cualquier
  círculo: ese cociente da siempre el mismo valor (≈ 3,14159...).
```

### 22 — Perímetro y área son magnitudes distintas

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El perímetro y el área de una figura son magnitudes independientes: no se puede calcular una a partir de la otra sin conocer la forma completa."

explicacion: |
  Dos figuras pueden compartir perímetro y tener áreas muy distintas (o
  viceversa).
```

### 23 — Comparar dos rectángulos con igual perímetro

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "comparacion"]

variables:
  b1: random(2, 5)
  h1: random(15, 20)
  suma: b1 + h1
  b2: suma - random(1, 3)
  h2: suma - b2

restricciones:
  - b2 != h2
  - b2 > 0
  - h2 > 0

respuesta: (b1 * h1) != (b2 * h2)
tipo: vf

enunciado: "Un rectángulo mide {b1} cm × {h1} cm, y otro mide {b2} cm × {h2} cm. Ambos tienen el mismo perímetro. ¿Es cierto que sus áreas son distintas?"

pasos:
  - "Área 1: {b1} × {h1} = {b1 * h1} cm². Área 2: {b2} × {h2} = {b2 * h2} cm²."

explicacion: |
  Compartir perímetro no implica compartir área: la forma del rectángulo
  (más alargado o más parecido a un cuadrado) cambia cuánta superficie
  encierra.
```

### 24 — El cuadrado maximiza el área a igual perímetro

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "De todos los rectángulos con un perímetro dado, el cuadrado es el que tiene mayor área."

explicacion: |
  A medida que un rectángulo se "alarga" (manteniendo el mismo
  perímetro), su área se achica; la forma más "compacta" — el cuadrado —
  es la que más superficie encierra.
```

### 25 — Elegir la fórmula correcta del área del triángulo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un triángulo?"
tipo: mc
opciones_explicitas:
  - "(base × altura) ÷ 2"
  - "base × altura"
  - "base + altura"
respuesta: "(base × altura) ÷ 2"

explicacion: |
  El triángulo es "medio rectángulo": su área es la mitad de base ×
  altura.
```

### 26 — Elegir la fórmula correcta del área del trapecio

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["trapecio", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un trapecio (bases B y b, altura h)?"
tipo: mc
opciones_explicitas:
  - "((B + b) × h) ÷ 2"
  - "B × b × h"
  - "(B + b) × 2"
respuesta: "((B + b) × h) ÷ 2"

explicacion: |
  Es la semisuma de las bases, multiplicada por la altura.
```

### 27 — Elegir la fórmula correcta del área del rombo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rombo", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un rombo (diagonales D y d)?"
tipo: mc
opciones_explicitas:
  - "(D × d) ÷ 2"
  - "D × d"
  - "D + d"
respuesta: "(D × d) ÷ 2"

explicacion: |
  El producto de las diagonales, dividido 2.
```

### 28 — Problema: cercar un terreno rectangular

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "problema"]

variables:
  b: random(10, 60)
  h: random(5, 40)

respuesta: 2 * (b + h)
tipo: input
tolerancia_abs: 0

enunciado: "Un terreno rectangular mide {b} m de largo y {h} m de ancho. ¿Cuántos metros de alambre hacen falta para cercarlo por completo?"

explicacion: |
  Cercar el contorno es calcular el perímetro.
```

### 29 — Problema: pintar una pared rectangular

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "problema"]

variables:
  b: random(3, 8)
  h: random(2, 4)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "Una pared mide {b} m de ancho y {h} m de alto. ¿Cuántos m² hay que pintar?"

explicacion: |
  La superficie a pintar es el área de la pared.
```

### 30 — Problema: césped de un jardín circular

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["circulo", "problema"]

variables:
  r: random(3, 15)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un jardín circular tiene {r} m de radio. ¿Cuántos m² de césped hacen falta para cubrirlo? Redondeá a 2 decimales."

explicacion: |
  Es el área del círculo: π × r².
```

### 31 — Verificar un cálculo de área (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "verificacion"]

variables:
  b: random(3, 20)
  h: random(2, 15)
  correcto: b * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El área de un rectángulo de {b} cm × {h} cm es {mostrado} cm²."

explicacion: |
  Se vuelve a calcular base × altura y se compara con el valor mostrado.
```

### 32 — Completar: perímetro del cuadrado

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "completar"]

variables:
  l: random(3, 30)

tipo: completar
enunciado: "Completá: el perímetro de un cuadrado de lado {l} cm es ___ cm."
respuestas_validas:
  - 4 * l

explicacion: |
  Perímetro = 4 × lado.
```

### 33 — Completar: área del triángulo

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["triangulo", "completar"]

variables:
  b: random(4, 20)
  h: random(2, 20)

tipo: completar
enunciado: "Completá: el área de un triángulo de base {b} cm y altura {h} cm es ___ cm²."
respuestas_validas:
  - (b * h) / 2

explicacion: |
  Área = (base × altura) ÷ 2.
```

### 34 — Ordenar áreas de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["orden"]

tipo: ordenar
enunciado: "Ordená estas figuras de menor a mayor área: cuadrado de lado 5 cm, rectángulo de 3×10 cm, triángulo de base 8 y altura 6 cm, círculo de radio 3 cm (usá π ≈ 3,14)."
opciones_explicitas:
  - "Círculo de radio 3 cm"
  - "Cuadrado de lado 5 cm"
  - "Triángulo de base 8 y altura 6 cm"
  - "Rectángulo de 3×10 cm"
respuesta_orden: ["Triángulo de base 8 y altura 6 cm", "Círculo de radio 3 cm", "Cuadrado de lado 5 cm", "Rectángulo de 3×10 cm"]
pasos:
  - "Triángulo: (8×6)÷2 = 24 cm². Círculo: 3,14×3² = 28,26 cm². Cuadrado: 5×5 = 25 cm². Rectángulo: 3×10 = 30 cm²."

explicacion: |
  Hay que calcular cada área con su propia fórmula antes de poder
  compararlas: 24 (triángulo) < 25 (cuadrado) < 28,26 (círculo) < 30
  (rectángulo).
```

### 35 — Elegir la figura de mayor perímetro

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l_cuadrado: random(8, 15)
  b_rect: random(3, 6)
  h_rect: l_cuadrado * 2 - b_rect

respuesta: "Rectángulo"
tipo: mc
opciones_explicitas:
  - "Rectángulo"
  - "Cuadrado"

enunciado: "¿Cuál tiene mayor perímetro: un cuadrado de lado {l_cuadrado} cm, o un rectángulo de {b_rect} cm × {h_rect} cm?"

pasos:
  - "Perímetro cuadrado: 4 × {l_cuadrado} = {4 * l_cuadrado} cm. Perímetro rectángulo: 2 × ({b_rect} + {h_rect}) = {2 * (b_rect + h_rect)} cm."

explicacion: |
  Se calcula el perímetro de cada uno y se compara.
```

### 36 — El área del círculo NO usa el diámetro directamente

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del área del círculo es π por el diámetro al cuadrado."

explicacion: |
  Es π por el RADIO al cuadrado (A = π × r²), no el diámetro — un error
  común es confundir los dos.
```

### 37 — Problema: baldosas para un piso rectangular

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "problema"]

variables:
  b: random(4, 10)
  h: random(3, 8)
  lado_baldosa: 1

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "Un piso rectangular mide {b} m × {h} m, y se va a cubrir con baldosas cuadradas de {lado_baldosa} m de lado. ¿Cuántas baldosas hacen falta?"

pasos:
  - "Área del piso: {b} × {h} = {b * h} m². Cada baldosa cubre 1 m², así que hacen falta {b * h} baldosas."

explicacion: |
  Como cada baldosa cubre exactamente 1 m², la cantidad de baldosas
  coincide con el área del piso en m².
```

### 38 — Cierre: perímetro se mide en unidades lineales, área en cuadradas

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El perímetro se mide en unidades lineales (m, cm), y el área se mide en unidades cuadradas (m², cm²)."

explicacion: |
  Es una consecuencia directa de lo que representa cada uno: una
  longitud (el contorno) y una superficie (lo que encierra ese
  contorno).
```
