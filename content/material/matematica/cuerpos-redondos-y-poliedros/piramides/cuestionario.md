# Matemática — Pirámides (cuestionario, 26 preguntas VBLang)

> Tema: `M4Bb`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Qué es una pirámide?"
tipo: mc
opciones_explicitas:
  - "Un poliedro con una sola base y caras laterales triangulares que se juntan en un vértice"
  - "Un poliedro con dos bases congruentes y paralelas"
  - "Un cuerpo redondo sin caras planas"
respuesta: "Un poliedro con una sola base y caras laterales triangulares que se juntan en un vértice"

explicacion: |
  A diferencia del prisma (dos bases), la pirámide tiene una sola base y
  termina en una punta.
```

### 2 — Cuántas bases tiene una pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas bases tiene una pirámide?"

explicacion: |
  Una sola — es lo que la distingue del prisma, que tiene dos.
```

### 3 — Forma de las caras laterales de una pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Qué forma tienen las caras laterales de una pirámide?"
tipo: mc
opciones_explicitas:
  - "Triangular"
  - "Rectangular"
  - "Circular"
respuesta: "Triangular"

explicacion: |
  Cada cara lateral conecta un lado de la base con el vértice, formando
  un triángulo.
```

### 4 — El vértice de la pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Qué es el vértice (o ápice) de una pirámide?"
tipo: mc
opciones_explicitas:
  - "El punto donde se juntan todas las caras laterales"
  - "El centro de la base"
  - "Cualquiera de los lados de la base"
respuesta: "El punto donde se juntan todas las caras laterales"

explicacion: |
  Es la "punta" de la pirámide.
```

### 5 — Cómo se nombra una pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Según qué se nombra una pirámide (triangular, cuadrangular, pentagonal...)?"
tipo: mc
opciones_explicitas:
  - "Según la forma de su base"
  - "Según su altura"
  - "Según la cantidad de vértices que tiene"
respuesta: "Según la forma de su base"

explicacion: |
  Base cuadrada → pirámide cuadrangular, como las de Egipto.
```

### 6 — Fórmula del volumen de la pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de una pirámide?"
tipo: mc
opciones_explicitas:
  - "(Área de la base × altura) ÷ 3"
  - "Área de la base × altura"
  - "(Área de la base × altura) ÷ 2"
respuesta: "(Área de la base × altura) ÷ 3"

explicacion: |
  Es un tercio del volumen de un prisma con la misma base y altura.
```

### 7 — La pirámide es un tercio del prisma

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una pirámide y un prisma con la misma base y la misma altura tienen: la pirámide, un tercio del volumen del prisma."

explicacion: |
  Es la relación clave del módulo: V_pirámide = V_prisma ÷ 3.
```

### 8 — Volumen de una pirámide de base cuadrada

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "volumen"]

variables:
  l: random(3, 15)
  altura: random(3, 20)

respuesta: ((l * l) * altura) / 3
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene base cuadrada de {l} cm de lado y {altura} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: {l} × {l} = {l * l} cm². Volumen: ({l * l} × {altura}) ÷ 3 = {((l * l) * altura) / 3} cm³."

explicacion: |
  Se calcula el área de la base cuadrada, se multiplica por la altura, y
  se divide por 3.
```

### 9 — Volumen de una pirámide de base rectangular

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "volumen"]

variables:
  b: random(4, 20)
  a: random(3, 15)
  altura: random(3, 20)

respuesta: ((b * a) * altura) / 3
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene base rectangular de {b} cm × {a} cm y {altura} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: {b} × {a} = {b * a} cm². Volumen: ({b * a} × {altura}) ÷ 3 = {((b * a) * altura) / 3} cm³."

explicacion: |
  Misma fórmula general, con el área de un rectángulo como base.
```

### 10 — Volumen de una pirámide de base triangular

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "volumen"]

variables:
  b: random(4, 16)
  h_base: random(2, 12)
  altura: random(3, 18)

respuesta: (((b * h_base) / 2) * altura) / 3
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene base triangular (base {b} cm, altura del triángulo {h_base} cm) y {altura} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: ({b} × {h_base}) ÷ 2 = {(b * h_base) / 2} cm². Volumen: ({(b * h_base) / 2} × {altura}) ÷ 3 = {(((b * h_base) / 2) * altura) / 3} cm³."

explicacion: |
  Primero el área de la base triangular, después aplicar la fórmula
  general de la pirámide.
```

### 11 — Altura de una pirámide a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "volumen"]

variables:
  area_base: random(10, 50)
  altura: random(3, 15)
  volumen: (area_base * altura) / 3

respuesta: altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene {volumen} cm³ de volumen y su base mide {area_base} cm² de área. ¿Cuánto mide su altura?"

pasos:
  - "({volumen} × 3) ÷ {area_base} = {(volumen * 3) / area_base} cm"

explicacion: |
  Se despeja la altura: (volumen × 3) ÷ área de la base.
```

### 12 — Comparar el volumen de una pirámide y su prisma

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "prisma", "problema"]

variables:
  l: random(4, 15)
  altura: random(4, 15)

respuesta: (l * l) * altura
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide de base cuadrada de {l} cm de lado y {altura} cm de altura tiene un volumen de {((l * l) * altura) / 3} cm³. ¿Cuál sería el volumen de un PRISMA con esa misma base y esa misma altura?"

pasos:
  - "El prisma tiene 3 veces el volumen de la pirámide: {((l * l) * altura) / 3} × 3 = {l * l * altura} cm³ (o, directamente, {l} × {l} × {altura})."

explicacion: |
  El prisma tiene exactamente el triple de volumen que la pirámide de
  igual base y altura.
```

### 13 — Caras laterales de una pirámide pentagonal

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "elementos"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas caras laterales tiene una pirámide de base pentagonal (5 lados)?"

explicacion: |
  Tantas caras laterales triangulares como lados tiene la base.
```

### 14 — Vértices de una pirámide según su base

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "elementos"]

variables:
  n: random(3, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide tiene una base con {n} lados. ¿Cuántos vértices tiene en total (los de la base más el ápice)?"

explicacion: |
  {n} vértices de la base + 1 vértice superior = {n + 1}.
```

### 15 — Aristas de una pirámide según su base

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "elementos"]

variables:
  n: random(3, 8)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide tiene una base con {n} lados. ¿Cuántas aristas tiene en total (las de la base más las laterales)?"

pasos:
  - "{n} aristas de la base + {n} aristas laterales = {2 * n}"

explicacion: |
  n aristas de la base más n aristas que suben hasta el vértice.
```

### 16 — Caras totales de una pirámide según su base

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "elementos"]

variables:
  n: random(3, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide tiene una base con {n} lados. ¿Cuántas caras tiene en total (la base más las laterales)?"

explicacion: |
  {n} caras laterales más 1 base = {n + 1}.
```

### 17 — Fórmula de Euler en la pirámide

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "euler"]

variables:
  n: random(3, 8)
  vertices: n + 1
  aristas: 2 * n
  caras: n + 1

respuesta: verdadero
tipo: vf

enunciado: "Para una pirámide con base de {n} lados ({vertices} vértices, {aristas} aristas, {caras} caras), ¿se cumple que Vértices − Aristas + Caras = 2?"

pasos:
  - "{vertices} − {aristas} + {caras} = {vertices - aristas + caras}"

explicacion: |
  Se cumple, igual que en el prisma: es la fórmula de Euler para
  poliedros convexos.
```

### 18 — La pirámide de Egipto es cuadrangular

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las pirámides de Egipto tienen base cuadrada, así que se clasifican como pirámides cuadrangulares."

explicacion: |
  Base de 4 lados (cuadrado) → pirámide cuadrangular.
```

### 19 — Una pirámide tiene dos bases (falso)

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Una pirámide tiene dos bases congruentes y paralelas, igual que un prisma."

explicacion: |
  Tener dos bases es justamente lo que define a un prisma, no a una
  pirámide (que tiene una sola).
```

### 20 — Elegir la pirámide según su base

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Cómo se llama una pirámide cuya base es un triángulo?"
tipo: mc
opciones_explicitas:
  - "Pirámide triangular"
  - "Pirámide cuadrangular"
  - "Prisma triangular"
respuesta: "Pirámide triangular"

explicacion: |
  Se nombra según la base: triángulo → pirámide triangular (también
  llamada tetraedro si además es regular).
```

### 21 — Completar: fórmula del volumen

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "completar"]

tipo: completar
enunciado: "Completá: el volumen de una pirámide es el área de la base por la altura, dividido ___."
respuestas_validas:
  - 3

explicacion: |
  V = (área de la base × altura) ÷ 3.
```

### 22 — Completar: relación con el prisma

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "completar"]

variables:
  volumen_prisma: random(30, 300)

tipo: completar
enunciado: "Completá: si un prisma tiene {volumen_prisma} cm³ de volumen, una pirámide con la misma base y altura tiene ___ cm³."
respuestas_validas:
  - volumen_prisma / 3

explicacion: |
  La pirámide siempre tiene un tercio del volumen del prisma equivalente.
```

### 23 — Comparar dos pirámides

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "comparacion"]

variables:
  area1: random(10, 40)
  h1: random(3, 15)
  area2: random(10, 40)
  h2: random(3, 15)

restricciones:
  - (area1 * h1) != (area2 * h2)

respuesta: (area1 * h1) > (area2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen una pirámide con base de {area1} cm² y altura {h1} cm, que otra con base de {area2} cm² y altura {h2} cm?"

pasos:
  - "Volumen 1: ({area1} × {h1}) ÷ 3 = {(area1 * h1) / 3} cm³. Volumen 2: ({area2} × {h2}) ÷ 3 = {(area2 * h2) / 3} cm³."

explicacion: |
  Como ambas se dividen por el mismo 3, comparar los volúmenes finales es
  lo mismo que comparar área × altura de cada una.
```

### 24 — Ordenar pirámides por volumen

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "orden"]

tipo: ordenar
enunciado: "Ordená estas pirámides de menor a mayor volumen: base 20 cm² y altura 6 cm; base 18 cm² y altura 9 cm; base 24 cm² y altura 3 cm; base 12 cm² y altura 15 cm."
opciones_explicitas:
  - "Base 18 cm² y altura 9 cm"
  - "Base 20 cm² y altura 6 cm"
  - "Base 24 cm² y altura 3 cm"
  - "Base 12 cm² y altura 15 cm"
respuesta_orden: ["Base 24 cm² y altura 3 cm", "Base 20 cm² y altura 6 cm", "Base 18 cm² y altura 9 cm", "Base 12 cm² y altura 15 cm"]
pasos:
  - "Volúmenes (÷3): 20×6÷3=40; 18×9÷3=54; 24×3÷3=24; 12×15÷3=60."

explicacion: |
  Se calcula cada volumen (área × altura ÷ 3) antes de poder ordenarlos:
  24 < 40 < 54 < 60.
```

### 25 — Problema: cuánto volumen "ahorra" tallar una pirámide de un prisma

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "prisma", "problema"]

variables:
  l: random(4, 12)
  altura: random(4, 12)

respuesta: ((l * l) * altura) - (((l * l) * altura) / 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se talla una pirámide de base cuadrada de {l} cm de lado y {altura} cm de altura a partir de un bloque prismático de la misma base y altura. ¿Cuántos cm³ de material se descartan (el volumen del prisma menos el de la pirámide)?"

pasos:
  - "Prisma: {l}×{l}×{altura} = {(l * l) * altura} cm³. Pirámide: {(l * l) * altura} ÷ 3 = {((l * l) * altura) / 3} cm³. Diferencia: {((l * l) * altura) - (((l * l) * altura) / 3)} cm³."

explicacion: |
  Como la pirámide es un tercio del prisma, se descartan los otros dos
  tercios.
```

### 26 — Cierre: pirámide y prisma comparten la lógica de "área de base"

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto el prisma como la pirámide calculan su volumen a partir del área de la base y la altura — la única diferencia es que la pirámide divide ese producto por 3."

explicacion: |
  Es el mismo patrón visto en `../prismas/`, con un factor extra por
  tener una sola base en vez de dos.
```
