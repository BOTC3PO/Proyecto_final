# Matemática — Cilindros (cuestionario, 26 preguntas VBLang)

> Tema: `M4Bc`. Ver `teoria.md` en esta misma carpeta. Usa la constante
> `pi` del DSL.

---

### 1 — Qué es un cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Qué es un cilindro?"
tipo: mc
opciones_explicitas:
  - "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"
  - "Un poliedro con caras triangulares"
  - "Un cuerpo con una sola base circular terminada en punta"
respuesta: "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"

explicacion: |
  Es el equivalente "redondo" de un prisma: base circular en vez de
  polígono.
```

### 2 — Elementos del cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Cuáles son los dos datos que definen el tamaño de un cilindro?"
tipo: mc
opciones_explicitas:
  - "El radio de la base y la altura"
  - "El perímetro y el área"
  - "La cantidad de caras y de vértices"
respuesta: "El radio de la base y la altura"

explicacion: |
  Con el radio (r) y la altura (h) alcanza para calcular volumen y
  superficie.
```

### 3 — Fórmula del volumen del cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de un cilindro?"
tipo: mc
opciones_explicitas:
  - "π × r² × h"
  - "π × r × h"
  - "2 × π × r × h"
respuesta: "π × r² × h"

explicacion: |
  Área de la base circular (π × r²) por la altura.
```

### 4 — Volumen de un cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 15)
  h: random(3, 20)

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³"

explicacion: |
  Se aplica π × r² × h directamente.
```

### 5 — Volumen de un cilindro a partir del diámetro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  d: random(4, 30)
  h: random(3, 20)
  r: d / 2

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de diámetro {d} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³."

explicacion: |
  Primero hay que pasar de diámetro a radio (dividir por 2) antes de
  aplicar la fórmula.
```

### 6 — Altura de un cilindro a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(h, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de radio {r} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su altura?"

pasos:
  - "{redondear(volumen, 2)} ÷ (π × {r}²) = {redondear(volumen / (pi * r * r), 2)} cm"

explicacion: |
  Se despeja la altura dividiendo el volumen por el área de la base
  circular (π × r²).
```

### 7 — Radio de un cilindro a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de altura {h} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "sqrt({redondear(volumen, 2)} ÷ (π × {h})) = {redondear(sqrt(volumen / (pi * h)), 2)} cm"

explicacion: |
  Se despeja: primero se divide el volumen por (π × altura), y después
  se saca la raíz cuadrada (porque el radio está al cuadrado).
```

### 8 — Área lateral del cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear(2 * pi * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de la superficie lateral (curva) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm²"

explicacion: |
  Es la circunferencia de la base (2πr) multiplicada por la altura —
  como "desenrollar" la parte curva en un rectángulo.
```

### 9 — Área total del cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 10)
  h: random(3, 15)

respuesta: redondear((2 * pi * r * h) + (2 * pi * r * r), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área total (lateral + las dos bases) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Lateral: 2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm². Bases: 2 × π × {r}² = {redondear(2 * pi * r * r, 2)} cm². Total: {redondear((2 * pi * r * h) + (2 * pi * r * r), 2)} cm²."

explicacion: |
  Se suma el área lateral más las dos bases circulares.
```

### 10 — Problema: capacidad de una lata cilíndrica

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "capacidad", "problema"]

variables:
  r: random(3, 6)
  h: random(8, 15)

respuesta: redondear((pi * r * r * h) / 1000, 3)
tipo: input
tolerancia_abs: 0.005

enunciado: "Una lata cilíndrica tiene {r} cm de radio y {h} cm de altura. ¿Cuántos litros de líquido puede contener? Redondeá a 3 decimales."

pasos:
  - "Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. En litros: {redondear(pi * r * r * h, 2)} ÷ 1000 = {redondear((pi * r * r * h) / 1000, 3)}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros (1000 cm³ = 1
  litro).
```

### 11 — Cuerpo redondo, no poliedro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cilindro NO es un poliedro, porque tiene una superficie curva (no todas sus caras son planas)."

explicacion: |
  Prismas y pirámides son poliedros (todas sus caras son polígonos
  planos); el cilindro tiene una superficie lateral curva, así que se
  clasifica como cuerpo redondo.
```

### 12 — Las dos bases del cilindro

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cilindro tiene dos bases circulares, iguales y paralelas."

explicacion: |
  Es la misma idea que las dos bases de un prisma, pero circulares en
  vez de poligonales.
```

### 13 — El cilindro es el "primo redondo" del prisma

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen del cilindro se calcula con la misma lógica que el de un prisma (área de la base por altura), sólo que la base es un círculo."

explicacion: |
  V = π×r²×h es exactamente área de la base (π×r²) por altura, igual
  patrón que `../prismas/`.
```

### 14 — Duplicar el radio NO duplica el volumen

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: falso
tipo: vf

enunciado: "Si el radio de un cilindro de {r} cm y altura {h} cm se duplica (manteniendo la misma altura), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con el radio doble: π × {2 * r}² × {h} = {redondear(pi * (2 * r) * (2 * r) * h, 2)} cm³."

explicacion: |
  Como el radio está al cuadrado en la fórmula, duplicarlo multiplica el
  volumen por 4, no por 2.
```

### 15 — Duplicar la altura sí duplica el volumen

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: verdadero
tipo: vf

enunciado: "Si la altura de un cilindro de radio {r} cm y altura {h} cm se duplica (manteniendo el mismo radio), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con la altura doble: π × {r}² × {2 * h} = {redondear(pi * r * r * (2 * h), 2)} cm³."

explicacion: |
  A diferencia del radio, la altura NO está al cuadrado en la fórmula:
  duplicarla sí duplica el volumen.
```

### 16 — Comparar volúmenes de dos cilindros

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "comparacion"]

variables:
  r1: random(2, 10)
  h1: random(3, 15)
  r2: random(2, 10)
  h2: random(3, 15)

restricciones:
  - (r1 * r1 * h1) != (r2 * r2 * h2)

respuesta: (r1 * r1 * h1) > (r2 * r2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un cilindro de radio {r1} cm y altura {h1} cm, que otro de radio {r2} cm y altura {h2} cm?"

pasos:
  - "Como ambos multiplican por π, alcanza con comparar r² × h: {r1}² × {h1} = {r1 * r1 * h1} contra {r2}² × {h2} = {r2 * r2 * h2}."

explicacion: |
  Se puede comparar sin calcular π × r² × h completo, porque el factor π
  es el mismo en los dos.
```

### 17 — Elegir la fórmula correcta del área lateral

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula del área lateral (curva) de un cilindro?"
tipo: mc
opciones_explicitas:
  - "2 × π × r × h"
  - "π × r²"
  - "π × r² × h"
respuesta: "2 × π × r × h"

explicacion: |
  Es la circunferencia de la base (2πr) por la altura — como
  "desenrollar" la superficie curva en un rectángulo.
```

### 18 — La superficie lateral "desenrollada" es un rectángulo

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se \"desenrolla\" la superficie lateral de un cilindro, queda un rectángulo cuyo largo es la circunferencia de la base y cuyo ancho es la altura del cilindro."

explicacion: |
  Se retoma en detalle en `../desarrollo-plano/`.
```

### 19 — Completar: fórmula del volumen

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "completar"]

tipo: completar
enunciado: "Completá: el volumen del cilindro es π por el radio al cuadrado, por la ___."
respuestas_validas:
  - "altura"

explicacion: |
  V = π × r² × h.
```

### 20 — Completar: volumen de un cilindro concreto

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "completar"]

variables:
  r: random(2, 8)
  h: random(3, 12)

tipo: completar
enunciado: "Completá: el volumen de un cilindro de radio {r} cm y altura {h} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear(pi * r * r * h, 2)

explicacion: |
  V = π × r² × h.
```

### 21 — Problema: comparar cilindro y prisma de igual base y altura

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "prisma", "problema"]

variables:
  r: random(3, 10)
  h: random(3, 15)

respuesta: (r * r) * h
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma de base cuadrada tiene {r} cm de lado y {h} cm de altura. ¿Cuál es su volumen?"

explicacion: |
  Volumen del prisma cuadrado: lado² × altura — sirve como referencia
  para comparar con un cilindro de radio equivalente en el próximo
  ejercicio.
```

### 22 — Problema: verificar un cálculo de volumen (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "verificacion"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  correcto: redondear(pi * r * r * h, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de un cilindro de radio {r} cm y altura {h} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula π × r² × h y se compara con el valor mostrado.
```

### 23 — Elegir el cilindro de mayor capacidad

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "comparacion"]

enunciado: "¿Cuál de estos cilindros tiene mayor volumen: uno de radio 4 cm y altura 10 cm, o uno de radio 5 cm y altura 6 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 4 cm y altura 10 cm"
  - "Radio 5 cm y altura 6 cm"
respuesta: "Radio 4 cm y altura 10 cm"

pasos:
  - "r²×h: 4² × 10 = 160 contra 5² × 6 = 150."

explicacion: |
  Aunque el segundo tiene mayor radio, el primero gana porque el radio
  al cuadrado no compensa la diferencia de altura en este caso.
```

### 24 — Ordenar cilindros por volumen

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "orden"]

tipo: ordenar
enunciado: "Ordená estos cilindros de menor a mayor volumen (comparando r²×h, ya que todos comparten el factor π): radio 2 y altura 20; radio 5 y altura 2; radio 3 y altura 8; radio 4 y altura 6."
opciones_explicitas:
  - "Radio 3 y altura 8"
  - "Radio 2 y altura 20"
  - "Radio 4 y altura 6"
  - "Radio 5 y altura 2"
respuesta_orden: ["Radio 5 y altura 2", "Radio 3 y altura 8", "Radio 2 y altura 20", "Radio 4 y altura 6"]
pasos:
  - "r²×h: 2²×20=80; 5²×2=50; 3²×8=72; 4²×6=96."

explicacion: |
  Se calcula r²×h para cada uno (el factor π es común a todos, así que
  no hace falta calcularlo) y se ordena: 50 < 72 < 80 < 96.
```

### 25 — Radio y diámetro en la fórmula

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del volumen del cilindro usa el diámetro al cuadrado, no el radio al cuadrado."

explicacion: |
  Usa el RADIO al cuadrado (V = π × r² × h). Si sólo se conoce el
  diámetro, hay que dividirlo por 2 primero para obtener el radio.
```

### 26 — Cierre: el cilindro combina círculo y altura

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que hace falta saber para calcular el volumen o la superficie de un cilindro es el radio de su base circular y su altura."

explicacion: |
  Con esos dos datos alcanza para aplicar todas las fórmulas del cilindro
  vistas en este módulo.
```
