# Matemática — Prismas (cuestionario, 26 preguntas VBLang)

> Tema: `M4Ba`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un prisma

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

enunciado: "¿Qué es un prisma?"
tipo: mc
opciones_explicitas:
  - "Un poliedro con dos bases poligonales congruentes y paralelas, unidas por caras laterales rectangulares"
  - "Un cuerpo con una sola base y un vértice en la punta"
  - "Un cuerpo redondo sin caras planas"
respuesta: "Un poliedro con dos bases poligonales congruentes y paralelas, unidas por caras laterales rectangulares"

explicacion: |
  Las dos bases son iguales entre sí y quedan paralelas; los lados que
  las conectan son rectángulos.
```

### 2 — Las dos bases de un prisma

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un prisma, las dos bases son congruentes (iguales) y paralelas entre sí."

explicacion: |
  Es la condición que define a un prisma.
```

### 3 — Las caras laterales de un prisma recto

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un prisma recto, las caras laterales son rectángulos."

explicacion: |
  Es lo que distingue a un prisma recto de uno oblicuo.
```

### 4 — Cómo se nombra un prisma

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

enunciado: "¿Según qué se nombra un prisma (triangular, pentagonal, hexagonal...)?"
tipo: mc
opciones_explicitas:
  - "Según la forma de su base"
  - "Según la cantidad de caras laterales que tiene, sin importar la base"
  - "Según su color"
respuesta: "Según la forma de su base"

explicacion: |
  Un prisma triangular tiene base triangular, uno pentagonal tiene base
  pentagonal, y así.
```

### 5 — Fórmula general del volumen de un prisma

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula general del volumen de cualquier prisma recto?"
tipo: mc
opciones_explicitas:
  - "Área de la base × altura"
  - "Perímetro de la base × altura"
  - "Área de la base + altura"
respuesta: "Área de la base × altura"

explicacion: |
  Sin importar la forma de la base, el volumen siempre se calcula igual:
  área de la base por altura.
```

### 6 — Volumen de un prisma de base triangular

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "volumen"]

variables:
  b: random(4, 20)
  h_base: random(2, 15)
  altura: random(3, 20)

respuesta: ((b * h_base) / 2) * altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene base triangular (base {b} cm, altura del triángulo {h_base} cm) y una altura de {altura} cm. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: ({b} × {h_base}) ÷ 2 = {(b * h_base) / 2} cm². Volumen: {(b * h_base) / 2} × {altura} = {((b * h_base) / 2) * altura} cm³."

explicacion: |
  Primero se calcula el área de la base triangular, y después se
  multiplica por la altura del prisma.
```

### 7 — Volumen de un prisma de base trapezoidal

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "volumen"]

variables:
  B: random(10, 25)
  b: random(3, 9)
  h_base: random(2, 12)
  altura: random(3, 15)

respuesta: (((B + b) * h_base) / 2) * altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene base trapezoidal (base mayor {B} cm, base menor {b} cm, altura del trapecio {h_base} cm) y una altura de {altura} cm. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: (({B} + {b}) × {h_base}) ÷ 2 = {((B + b) * h_base) / 2} cm². Volumen: {((B + b) * h_base) / 2} × {altura} = {(((B + b) * h_base) / 2) * altura} cm³."

explicacion: |
  Se aplica la fórmula del área del trapecio para la base, y después se
  multiplica por la altura del prisma.
```

### 8 — Volumen de un prisma de base rectangular (repaso)

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "volumen"]

variables:
  l: random(3, 20)
  a: random(2, 15)
  h: random(2, 10)

respuesta: (l * a) * h
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma de base rectangular ({l} cm × {a} cm) tiene {h} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: {l} × {a} = {l * a} cm². Volumen: {l * a} × {h} = {(l * a) * h} cm³."

explicacion: |
  Es el mismo caso ya visto en `../../volumen-y-capacidad/`: acá se
  llega al mismo resultado partiendo de la fórmula general (área de la
  base × altura).
```

### 9 — Altura de un prisma a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "volumen"]

variables:
  area_base: random(10, 60)
  altura: random(2, 20)
  volumen: area_base * altura

respuesta: altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene {volumen} cm³ de volumen y su base mide {area_base} cm² de área. ¿Cuánto mide su altura?"

pasos:
  - "{volumen} ÷ {area_base} = {volumen / area_base} cm"

explicacion: |
  Se despeja la altura dividiendo el volumen por el área de la base.
```

### 10 — Área de la base a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "volumen"]

variables:
  area_base: random(10, 60)
  altura: random(2, 20)
  volumen: area_base * altura

respuesta: area_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene {volumen} cm³ de volumen y {altura} cm de altura. ¿Cuál es el área de su base?"

pasos:
  - "{volumen} ÷ {altura} = {volumen / altura} cm²"

explicacion: |
  Se despeja el área de la base dividiendo el volumen por la altura.
```

### 11 — Caras laterales de un prisma triangular

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "elementos"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas caras laterales tiene un prisma de base triangular?"

explicacion: |
  Un prisma tiene tantas caras laterales como lados tiene su base: el
  triángulo tiene 3 lados.
```

### 12 — Caras laterales de un prisma pentagonal

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "elementos"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas caras laterales tiene un prisma de base pentagonal (5 lados)?"

explicacion: |
  Tantas caras laterales como lados tiene la base.
```

### 13 — Vértices de un prisma según su base

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "elementos"]

variables:
  n: random(3, 8)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma tiene una base con {n} lados. ¿Cuántos vértices tiene el prisma en total (sumando las dos bases)?"

explicacion: |
  Cada base aporta {n} vértices: 2 × {n} = {2 * n}.
```

### 14 — Aristas de un prisma según su base

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "elementos"]

variables:
  n: random(3, 8)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma tiene una base con {n} lados. ¿Cuántas aristas tiene en total (las de las dos bases más las laterales)?"

pasos:
  - "{n} aristas de una base + {n} de la otra + {n} laterales = {3 * n}"

explicacion: |
  n aristas en cada base (2n) más n aristas laterales que conectan una
  base con la otra: 3n en total.
```

### 15 — Caras totales de un prisma según su base

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "elementos"]

variables:
  n: random(3, 8)

respuesta: n + 2
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma tiene una base con {n} lados. ¿Cuántas caras tiene en total (las 2 bases más las laterales)?"

explicacion: |
  {n} caras laterales más las 2 bases: {n} + 2 = {n + 2}.
```

### 16 — Fórmula de Euler

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "euler"]

variables:
  n: random(3, 8)
  vertices: 2 * n
  aristas: 3 * n
  caras: n + 2

respuesta: verdadero
tipo: vf

enunciado: "Para un prisma con base de {n} lados ({vertices} vértices, {aristas} aristas, {caras} caras), ¿se cumple que Vértices − Aristas + Caras = 2?"

pasos:
  - "{vertices} − {aristas} + {caras} = {vertices - aristas + caras}"

explicacion: |
  Es la fórmula de Euler para poliedros convexos: se cumple siempre en un
  prisma, sin importar la cantidad de lados de la base.
```

### 17 — El cubo es un prisma

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cubo es un caso particular de prisma, con base cuadrada y altura igual al lado de la base."

explicacion: |
  Le aplica exactamente la misma fórmula general (área de la base ×
  altura), sólo que con una base muy simple.
```

### 18 — Un prisma tiene sólo UNA base

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Un prisma tiene una sola base; el resto de las caras son laterales."

explicacion: |
  Un prisma tiene DOS bases (congruentes y paralelas), no una sola —
  tener una sola base es otra figura (la pirámide, ver
  `../piramides/`).
```

### 19 — Problema: capacidad de un envase con base triangular

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "capacidad", "problema"]

variables:
  b: random(4, 10)
  h_base: random(3, 8)
  altura: random(10, 20)

respuesta: (((b * h_base) / 2) * altura) / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Un envase con forma de prisma triangular tiene base de {b} cm y altura de base {h_base} cm, y {altura} cm de alto. ¿Cuántos litros de líquido puede contener?"

pasos:
  - "Volumen: (({b} × {h_base}) ÷ 2) × {altura} = {((b * h_base) / 2) * altura} cm³. En litros: {((b * h_base) / 2) * altura} ÷ 1000 = {(((b * h_base) / 2) * altura) / 1000}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros (1000 cm³ = 1
  litro), igual que en `../../volumen-y-capacidad/`.
```

### 20 — Comparar volúmenes de dos prismas

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "comparacion"]

variables:
  area1: random(10, 40)
  h1: random(2, 15)
  area2: random(10, 40)
  h2: random(2, 15)

restricciones:
  - (area1 * h1) != (area2 * h2)

respuesta: (area1 * h1) > (area2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un prisma con base de {area1} cm² y altura {h1} cm, que otro con base de {area2} cm² y altura {h2} cm?"

pasos:
  - "Volumen 1: {area1} × {h1} = {area1 * h1} cm³. Volumen 2: {area2} × {h2} = {area2 * h2} cm³."

explicacion: |
  Se compara el producto área de la base × altura de cada uno.
```

### 21 — Elegir el prisma según su base

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

enunciado: "¿Cómo se llama un prisma cuya base es un hexágono?"
tipo: mc
opciones_explicitas:
  - "Prisma hexagonal"
  - "Prisma triangular"
  - "Hexaedro"
respuesta: "Prisma hexagonal"

explicacion: |
  Se nombra según la forma de la base: hexágono → prisma hexagonal.
```

### 22 — Completar: fórmula general

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "completar"]

tipo: completar
enunciado: "Completá: el volumen de cualquier prisma recto es el área de la ___ multiplicada por la altura."
respuestas_validas:
  - "base"

explicacion: |
  Es la fórmula general, sin importar la forma de la base.
```

### 23 — Completar: caras laterales según la base

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "completar"]

variables:
  n: random(3, 9)

tipo: completar
enunciado: "Completá: un prisma con base de {n} lados tiene ___ caras laterales."
respuestas_validas:
  - n

explicacion: |
  Tantas caras laterales como lados tiene la base.
```

### 24 — Ordenar prismas por volumen

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "orden"]

tipo: ordenar
enunciado: "Ordená estos prismas de menor a mayor volumen: base 20 cm² y altura 5 cm; base 15 cm² y altura 10 cm; base 8 cm² y altura 12 cm; base 30 cm² y altura 3 cm."
opciones_explicitas:
  - "Base 15 cm² y altura 10 cm"
  - "Base 30 cm² y altura 3 cm"
  - "Base 8 cm² y altura 12 cm"
  - "Base 20 cm² y altura 5 cm"
respuesta_orden: ["Base 8 cm² y altura 12 cm", "Base 20 cm² y altura 5 cm", "Base 30 cm² y altura 3 cm", "Base 15 cm² y altura 10 cm"]
pasos:
  - "Volúmenes: 20×5=100 cm³; 15×10=150 cm³; 8×12=96 cm³; 30×3=90 cm³."

explicacion: |
  Se calcula cada volumen (área de la base × altura) antes de poder
  ordenarlos: 90 < 96 < 100 < 150.
```

### 25 — Prisma oblicuo (mención)

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En TODOS los prismas, sin excepción, las caras laterales son rectángulos perpendiculares a las bases."

explicacion: |
  Eso sólo es cierto en un prisma RECTO. En un prisma oblicuo las caras
  laterales están inclinadas — este módulo trabaja siempre con prismas
  rectos, que son el caso que se usa en la práctica.
```

### 26 — Cierre: la base define casi todo

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el volumen de cualquier prisma, lo único que cambia según la forma de la base es la fórmula usada para calcular el área de esa base."

explicacion: |
  La estructura del cálculo (área de la base × altura) es siempre la
  misma; lo que cambia es cómo se calcula esa área según la forma.
```
