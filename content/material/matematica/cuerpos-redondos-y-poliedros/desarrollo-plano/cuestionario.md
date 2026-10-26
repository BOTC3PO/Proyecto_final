# Matemática — Desarrollo plano: la figura 2D que arma el cuerpo 3D (cuestionario, 26 preguntas VBLang)

> Tema: `M4Bf`. Ver `teoria.md` en esta misma carpeta. Usa como ejemplos
> los 5 cuerpos ya vistos: prismas, pirámides, cilindros, conos y
> esferas.

---

### 1 — Qué es un desarrollo plano

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "vocabulario"]

enunciado: "¿Qué es el desarrollo plano de un cuerpo 3D?"
tipo: mc
opciones_explicitas:
  - "La figura plana que, al doblarse, arma exactamente ese cuerpo"
  - "La sombra que proyecta el cuerpo"
  - "Un dibujo en perspectiva del cuerpo"
respuesta: "La figura plana que, al doblarse, arma exactamente ese cuerpo"

explicacion: |
  Es como desarmar una caja de cartón hasta que queda plana, o al revés.
```

### 2 — Desarrollo del prisma: piezas

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "prisma"]

enunciado: "¿De qué piezas se compone el desarrollo de un prisma?"
tipo: mc
opciones_explicitas:
  - "Las dos bases (el polígono) más un rectángulo por cada cara lateral"
  - "Una sola base más triángulos"
  - "Sólo rectángulos, sin ninguna base"
respuesta: "Las dos bases (el polígono) más un rectángulo por cada cara lateral"

explicacion: |
  Un prisma tiene dos bases (ver `../prismas/`), así que su desarrollo
  también las incluye a las dos.
```

### 3 — Desarrollo de la pirámide: piezas

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "piramide"]

enunciado: "¿De qué piezas se compone el desarrollo de una pirámide?"
tipo: mc
opciones_explicitas:
  - "Una base (el polígono) más un triángulo por cada cara lateral"
  - "Dos bases más rectángulos"
  - "Sólo triángulos, sin ninguna base"
respuesta: "Una base (el polígono) más un triángulo por cada cara lateral"

explicacion: |
  La pirámide tiene una sola base (ver `../piramides/`), y sus caras
  laterales son triángulos.
```

### 4 — Desarrollo del cilindro: piezas

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cilindro"]

enunciado: "¿De qué piezas se compone el desarrollo de un cilindro?"
tipo: mc
opciones_explicitas:
  - "Dos círculos (las bases) más un rectángulo para la superficie lateral"
  - "Un círculo más un sector circular"
  - "Sólo un rectángulo, sin círculos"
respuesta: "Dos círculos (las bases) más un rectángulo para la superficie lateral"

explicacion: |
  El cilindro tiene dos bases circulares (ver `../cilindros/`), y su
  superficie curva se "desenrolla" en un rectángulo.
```

### 5 — Desarrollo del cono: piezas

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cono"]

enunciado: "¿De qué piezas se compone el desarrollo de un cono?"
tipo: mc
opciones_explicitas:
  - "Un círculo (la base) más un sector circular para la superficie lateral"
  - "Dos círculos más un rectángulo"
  - "Un triángulo más un círculo"
respuesta: "Un círculo (la base) más un sector circular para la superficie lateral"

explicacion: |
  El cono tiene una sola base circular (ver `../conos/`), y su
  superficie lateral "desenrollada" queda como una porción de círculo.
```

### 6 — La esfera NO tiene desarrollo plano exacto

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "esfera"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del prisma, la pirámide, el cilindro y el cono, la esfera no se puede desenrollar en una figura plana sin deformarla."

explicacion: |
  Una superficie curvada en dos direcciones a la vez no puede aplanarse
  sin estirar o cortar algo — ver `../esferas/`.
```

### 7 — Por qué la esfera no tiene desarrollo plano

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "esfera"]

enunciado: "¿Por qué la esfera no tiene un desarrollo plano exacto, a diferencia de los demás cuerpos de este grupo?"
tipo: mc
opciones_explicitas:
  - "Porque su superficie está curvada en dos direcciones a la vez, y eso no se puede aplanar sin deformar"
  - "Porque es demasiado grande"
  - "Porque no tiene volumen"
respuesta: "Porque su superficie está curvada en dos direcciones a la vez, y eso no se puede aplanar sin deformar"

explicacion: |
  El cilindro y el cono también son curvos, pero se curvan en una sola
  dirección — por eso sí se pueden "desenrollar" sin deformación.
```

### 8 — Los mapas del mundo y la esfera

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "esfera"]

respuesta: verdadero
tipo: vf

enunciado: "Todo mapa plano del mundo tiene que deformar algo, por la misma razón matemática que impide desenrollar una esfera sin distorsión."

explicacion: |
  La Tierra es (aproximadamente) una esfera; ningún mapa plano puede
  representarla sin algún tipo de distorsión (de área, de forma o de
  distancia).
```

### 9 — Ancho del rectángulo lateral del cilindro

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cilindro"]

variables:
  h: random(3, 20)

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "En el desarrollo de un cilindro de altura {h} cm, ¿cuánto mide el ancho del rectángulo de la superficie lateral?"

explicacion: |
  El ancho del rectángulo coincide con la altura del cilindro.
```

### 10 — Largo del rectángulo lateral del cilindro

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cilindro"]

variables:
  r: random(2, 15)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "En el desarrollo de un cilindro de radio {r} cm, ¿cuánto mide el largo del rectángulo de la superficie lateral? Redondeá a 2 decimales."

pasos:
  - "El largo coincide con la circunferencia de la base: 2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  Al enrollar el rectángulo, ese lado largo tiene que darle la vuelta
  completa al círculo de la base.
```

### 11 — Cantidad de rectángulos laterales en el desarrollo de un prisma

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "prisma"]

variables:
  n: random(3, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de un prisma con base de {n} lados, ¿cuántos rectángulos laterales tiene?"

explicacion: |
  Uno por cada lado de la base.
```

### 12 — Cantidad de triángulos en el desarrollo de una pirámide

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "piramide"]

variables:
  n: random(3, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de una pirámide con base de {n} lados, ¿cuántos triángulos laterales tiene?"

explicacion: |
  Uno por cada lado de la base.
```

### 13 — Total de piezas en el desarrollo de un prisma

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "prisma"]

variables:
  n: random(3, 9)

respuesta: n + 2
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de un prisma con base de {n} lados, ¿cuántas piezas tiene en total (bases más rectángulos laterales)?"

explicacion: |
  {n} rectángulos laterales más 2 bases = {n + 2}.
```

### 14 — Total de piezas en el desarrollo de una pirámide

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "piramide"]

variables:
  n: random(3, 9)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de una pirámide con base de {n} lados, ¿cuántas piezas tiene en total (la base más los triángulos laterales)?"

explicacion: |
  {n} triángulos laterales más 1 base = {n + 1}.
```

### 15 — Total de piezas en el desarrollo del cilindro

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "cilindro"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas piezas tiene en total el desarrollo de un cilindro?"

explicacion: |
  Dos círculos (las bases) más un rectángulo (la superficie lateral) =
  3 piezas.
```

### 16 — Total de piezas en el desarrollo del cono

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "cono"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas piezas tiene en total el desarrollo de un cono?"

explicacion: |
  Un círculo (la base) más un sector circular (la superficie lateral) =
  2 piezas.
```

### 17 — Radio del sector circular del desarrollo del cono

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cono"]

variables:
  g: random(6, 25)

respuesta: g
tipo: input
tolerancia_abs: 0

enunciado: "En el desarrollo de un cono con generatriz {g} cm, ¿cuánto mide el radio del sector circular de la superficie lateral?"

explicacion: |
  El radio del sector coincide con la generatriz del cono.
```

### 18 — El arco del sector coincide con la circunferencia de la base

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "cono"]

respuesta: verdadero
tipo: vf

enunciado: "En el desarrollo de un cono, la longitud del arco del sector circular lateral coincide exactamente con la circunferencia de la base."

explicacion: |
  Por eso, al enrollar el sector, cierra perfecto sobre el borde del
  círculo de la base — si no coincidieran, el cono no podría armarse
  bien.
```

### 19 — Problema: superficie total de un prisma desde su desarrollo

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "prisma", "problema"]

variables:
  l: random(4, 15)
  a: random(3, 12)
  h: random(3, 20)

respuesta: (2 * (l * a)) + (2 * (l + a) * h)
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma rectangular mide {l} cm × {a} cm de base, y {h} cm de altura. Sumando las piezas de su desarrollo (2 bases + 4 rectángulos laterales), ¿cuál es su superficie total?"

pasos:
  - "Bases: 2 × ({l} × {a}) = {2 * (l * a)} cm². Laterales: perímetro de la base × altura = (2 × ({l} + {a})) × {h} = {(2 * (l + a)) * h} cm². Total: {(2 * (l * a)) + ((2 * (l + a)) * h)} cm²."

explicacion: |
  Sumar el área de cada pieza del desarrollo da la superficie total del
  cuerpo.
```

### 20 — Problema: superficie total de una pirámide desde su desarrollo

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "piramide", "problema"]

variables:
  area_base: random(15, 50)
  area_triangulo: random(10, 30)
  n: 4

respuesta: area_base + (n * area_triangulo)
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide cuadrangular tiene una base de {area_base} cm² de área, y cada una de sus 4 caras triangulares mide {area_triangulo} cm². ¿Cuál es su superficie total?"

pasos:
  - "{area_base} + ({n} × {area_triangulo}) = {area_base + (n * area_triangulo)} cm²"

explicacion: |
  Se suma el área de la base más el área de las 4 caras laterales
  triangulares del desarrollo.
```

### 21 — Problema: superficie total de un cilindro desde su desarrollo

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "cilindro", "problema"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear((2 * pi * r * r) + (2 * pi * r * h), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Sumando las 3 piezas del desarrollo de un cilindro de radio {r} cm y altura {h} cm (2 círculos + 1 rectángulo), ¿cuál es su superficie total? Redondeá a 2 decimales."

pasos:
  - "2 círculos: 2 × π × {r}² = {redondear(2 * pi * r * r, 2)} cm². Rectángulo: 2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm². Total: {redondear((2 * pi * r * r) + (2 * pi * r * h), 2)} cm²."

explicacion: |
  Es exactamente la fórmula de superficie total ya vista en
  `../cilindros/`, ahora entendida como la suma de las piezas del
  desarrollo.
```

### 22 — Problema: superficie total de un cono desde su desarrollo

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "cono", "problema"]

variables:
  r: random(2, 10)
  g: random(6, 20)

restricciones:
  - g > r

respuesta: redondear((pi * r * r) + (pi * r * g), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Sumando las 2 piezas del desarrollo de un cono de radio {r} cm y generatriz {g} cm (1 círculo + 1 sector), ¿cuál es su superficie total? Redondeá a 2 decimales."

pasos:
  - "Círculo: π × {r}² = {redondear(pi * r * r, 2)} cm². Sector: π × {r} × {g} = {redondear(pi * r * g, 2)} cm². Total: {redondear((pi * r * r) + (pi * r * g), 2)} cm²."

explicacion: |
  Es la misma fórmula de superficie total vista en `../conos/`, ahora
  entendida como suma de las piezas del desarrollo.
```

### 23 — Elegir cuál cuerpo NO tiene desarrollo plano exacto

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "esfera"]

enunciado: "¿Cuál de estos 5 cuerpos NO tiene un desarrollo plano exacto?"
tipo: mc
opciones_explicitas:
  - "La esfera"
  - "El cilindro"
  - "El cono"
respuesta: "La esfera"

explicacion: |
  Prisma, pirámide, cilindro y cono sí se pueden desenrollar sin
  deformación; la esfera no.
```

### 24 — Completar: piezas del desarrollo del prisma

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "prisma", "completar"]

tipo: completar
enunciado: "Completá: el desarrollo de un prisma tiene 2 bases más un ___ por cada cara lateral."
respuestas_validas:
  - "rectángulo"

explicacion: |
  Cada cara lateral de un prisma recto es un rectángulo.
```

### 25 — Completar: piezas del desarrollo de la pirámide

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "piramide", "completar"]

tipo: completar
enunciado: "Completá: el desarrollo de una pirámide tiene 1 base más un ___ por cada cara lateral."
respuestas_validas:
  - "triángulo"

explicacion: |
  Cada cara lateral de una pirámide es un triángulo.
```

### 26 — Cierre: el desarrollo plano y la superficie total

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar el área de cada pieza del desarrollo plano de un cuerpo da directamente su superficie total."

explicacion: |
  Es la idea central del módulo: pasar un problema 3D (superficie de un
  cuerpo) a varios problemas 2D más simples (área de cada pieza plana).
```
