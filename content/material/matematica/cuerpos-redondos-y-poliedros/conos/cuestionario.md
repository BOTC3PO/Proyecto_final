# Matemática — Conos (cuestionario, 26 preguntas VBLang)

> Tema: `M4Bd`. Ver `teoria.md` en esta misma carpeta. Usa la constante
> `pi` del DSL.

---

### 1 — Qué es un cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

enunciado: "¿Qué es un cono?"
tipo: mc
opciones_explicitas:
  - "Un cuerpo redondo con una sola base circular y una superficie lateral que termina en un vértice"
  - "Un cuerpo redondo con dos bases circulares"
  - "Un poliedro con base circular"
respuesta: "Un cuerpo redondo con una sola base circular y una superficie lateral que termina en un vértice"

explicacion: |
  Es el equivalente redondo de la pirámide: una sola base, terminado en
  punta.
```

### 2 — El cono es el equivalente redondo de la pirámide

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "piramide", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cono es al cilindro lo que la pirámide es al prisma: una sola base en vez de dos, y un tercio del volumen del cuerpo equivalente."

explicacion: |
  Es exactamente el mismo patrón de relación, con base circular en vez de
  poligonal.
```

### 3 — Elementos del cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

enunciado: "¿Cuáles son los dos datos principales que definen el tamaño de un cono?"
tipo: mc
opciones_explicitas:
  - "El radio de la base y la altura"
  - "El perímetro y el área"
  - "La cantidad de caras y aristas"
respuesta: "El radio de la base y la altura"

explicacion: |
  Con radio y altura alcanza para calcular el volumen.
```

### 4 — Qué es la generatriz

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "vocabulario"]

enunciado: "¿Qué es la generatriz de un cono?"
tipo: mc
opciones_explicitas:
  - "La distancia desde el vértice hasta cualquier punto del borde de la base"
  - "El radio de la base"
  - "El diámetro de la base"
respuesta: "La distancia desde el vértice hasta cualquier punto del borde de la base"

explicacion: |
  Es el "lado inclinado" del cono, distinto de la altura (que es
  perpendicular a la base).
```

### 5 — Generatriz y altura NO son lo mismo

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La generatriz de un cono y su altura miden siempre lo mismo."

explicacion: |
  La altura es perpendicular a la base; la generatriz va en diagonal
  desde el vértice hasta el borde — la generatriz siempre es mayor que la
  altura (excepto en un cono "aplastado" imposible).
```

### 6 — Fórmula del volumen del cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de un cono?"
tipo: mc
opciones_explicitas:
  - "(π × r² × h) ÷ 3"
  - "π × r² × h"
  - "(π × r × h) ÷ 3"
respuesta: "(π × r² × h) ÷ 3"

explicacion: |
  Es un tercio del volumen de un cilindro con el mismo radio y altura.
```

### 7 — Volumen de un cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear((pi * r * r * h) / 3, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cono de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "(π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³"

explicacion: |
  Se aplica (π × r² × h) ÷ 3 directamente.
```

### 8 — Volumen de un cono a partir del diámetro

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "volumen"]

variables:
  d: random(4, 24)
  h: random(3, 20)
  r: d / 2

respuesta: redondear((pi * r * r * h) / 3, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cono de diámetro {d} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: (π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³."

explicacion: |
  Primero se pasa de diámetro a radio (dividir por 2) antes de aplicar
  la fórmula.
```

### 9 — Comparar cono y cilindro de igual base y altura

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "cilindro", "problema"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un cono de radio {r} cm y altura {h} cm tiene un volumen de {redondear((pi * r * r * h) / 3, 2)} cm³. ¿Cuál sería el volumen de un CILINDRO con ese mismo radio y esa misma altura?"

pasos:
  - "El cilindro tiene 3 veces el volumen del cono: {redondear((pi * r * r * h) / 3, 2)} × 3 = {redondear(pi * r * r * h, 2)} cm³."

explicacion: |
  El cilindro tiene exactamente el triple de volumen que el cono de
  igual radio y altura.
```

### 10 — Altura de un cono a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: (pi * r * r * h) / 3

respuesta: redondear(h, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cono de radio {r} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su altura?"

pasos:
  - "({redondear(volumen, 2)} × 3) ÷ (π × {r}²) = {redondear((volumen * 3) / (pi * r * r), 2)} cm"

explicacion: |
  Se despeja la altura: (volumen × 3) ÷ (π × radio²).
```

### 11 — Radio de un cono a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: (pi * r * r * h) / 3

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cono de altura {h} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "sqrt(({redondear(volumen, 2)} × 3) ÷ (π × {h})) = {redondear(sqrt((volumen * 3) / (pi * h)), 2)} cm"

explicacion: |
  Se despeja el radio² y después se saca la raíz cuadrada.
```

### 12 — Área lateral del cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "superficie"]

variables:
  r: random(2, 10)
  g: random(6, 20)

restricciones:
  - g > r

respuesta: redondear(pi * r * g, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de la superficie lateral de un cono de radio {r} cm y generatriz {g} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r} × {g} = {redondear(pi * r * g, 2)} cm²"

explicacion: |
  El área lateral del cono es π × radio × generatriz.
```

### 13 — Área total del cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "superficie"]

variables:
  r: random(2, 10)
  g: random(6, 20)

restricciones:
  - g > r

respuesta: redondear((pi * r * g) + (pi * r * r), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área total (lateral + base) de un cono de radio {r} cm y generatriz {g} cm? Redondeá a 2 decimales."

pasos:
  - "Lateral: π × {r} × {g} = {redondear(pi * r * g, 2)} cm². Base: π × {r}² = {redondear(pi * r * r, 2)} cm². Total: {redondear((pi * r * g) + (pi * r * r), 2)} cm²."

explicacion: |
  Se suma el área lateral más el área de la base circular.
```

### 14 — Problema: cantidad de helado en un cucurucho

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "capacidad", "problema"]

variables:
  r: random(2, 4)
  h: random(8, 14)

respuesta: redondear(((pi * r * r * h) / 3) / 1000, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cucurucho de helado con forma de cono tiene {r} cm de radio y {h} cm de altura. ¿Cuántos litros de helado entran, como máximo? Redondeá a 3 decimales."

pasos:
  - "Volumen: (π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³. En litros: {redondear((pi * r * r * h) / 3, 2)} ÷ 1000 = {redondear(((pi * r * r * h) / 3) / 1000, 3)}."

explicacion: |
  Se calcula el volumen del cono en cm³ y se convierte a litros.
```

### 15 — Cuerpo redondo, con una base

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cono tiene una sola base circular, no dos."

explicacion: |
  Igual que la pirámide (una base), a diferencia del cilindro (dos
  bases).
```

### 16 — Duplicar el radio de un cono multiplica el volumen por 4

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: falso
tipo: vf

enunciado: "Si el radio de un cono de {r} cm y altura {h} cm se duplica (manteniendo la misma altura), su volumen también se duplica."

pasos:
  - "Volumen original: (π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³. Con el radio doble: (π × {2 * r}² × {h}) ÷ 3 = {redondear((pi * (2 * r) * (2 * r) * h) / 3, 2)} cm³."

explicacion: |
  Como el radio está al cuadrado en la fórmula, duplicarlo multiplica el
  volumen por 4, igual que en el cilindro.
```

### 17 — Comparar volúmenes de dos conos

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "comparacion"]

variables:
  r1: random(2, 10)
  h1: random(3, 15)
  r2: random(2, 10)
  h2: random(3, 15)

restricciones:
  - (r1 * r1 * h1) != (r2 * r2 * h2)

respuesta: (r1 * r1 * h1) > (r2 * r2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un cono de radio {r1} cm y altura {h1} cm, que otro de radio {r2} cm y altura {h2} cm?"

pasos:
  - "Alcanza con comparar r² × h (el resto de la fórmula es igual para los dos): {r1}² × {h1} = {r1 * r1 * h1} contra {r2}² × {h2} = {r2 * r2 * h2}."

explicacion: |
  Como ambos comparten el factor π ÷ 3, comparar los volúmenes es lo
  mismo que comparar r² × h.
```

### 18 — Elegir la fórmula correcta del área lateral

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula del área lateral de un cono (radio r, generatriz g)?"
tipo: mc
opciones_explicitas:
  - "π × r × g"
  - "π × r² × g"
  - "2 × π × r × g"
respuesta: "π × r × g"

explicacion: |
  Área lateral = π por radio por generatriz.
```

### 19 — Completar: fórmula del volumen

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "completar"]

tipo: completar
enunciado: "Completá: el volumen de un cono es π por el radio al cuadrado, por la altura, dividido ___."
respuestas_validas:
  - 3

explicacion: |
  V = (π × r² × h) ÷ 3, igual que la pirámide con base circular.
```

### 20 — Completar: volumen de un cono concreto

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "completar"]

variables:
  r: random(2, 8)
  h: random(3, 12)

tipo: completar
enunciado: "Completá: el volumen de un cono de radio {r} cm y altura {h} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear((pi * r * r * h) / 3, 2)

explicacion: |
  V = (π × r² × h) ÷ 3.
```

### 21 — Elegir el cono de mayor volumen

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "comparacion"]

enunciado: "¿Cuál de estos conos tiene mayor volumen: uno de radio 6 cm y altura 9 cm, o uno de radio 4 cm y altura 20 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 6 cm y altura 9 cm"
  - "Radio 4 cm y altura 20 cm"
respuesta: "Radio 6 cm y altura 9 cm"

pasos:
  - "r²×h: 6² × 9 = 324 contra 4² × 20 = 320."

explicacion: |
  El radio al cuadrado pesa más que la altura: 324 > 320.
```

### 22 — Ordenar conos por volumen

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "orden"]

tipo: ordenar
enunciado: "Ordená estos conos de menor a mayor volumen (comparando r²×h): radio 2 y altura 30; radio 6 y altura 3; radio 4 y altura 8; radio 3 y altura 15."
opciones_explicitas:
  - "Radio 4 y altura 8"
  - "Radio 6 y altura 3"
  - "Radio 3 y altura 15"
  - "Radio 2 y altura 30"
respuesta_orden: ["Radio 6 y altura 3", "Radio 2 y altura 30", "Radio 4 y altura 8", "Radio 3 y altura 15"]
pasos:
  - "r²×h: 2²×30=120; 6²×3=108; 4²×8=128; 3²×15=135."

explicacion: |
  Se calcula r²×h de cada uno antes de comparar: 108 < 120 < 128 < 135.
```

### 23 — El vértice del cono

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El vértice de un cono es el único punto donde termina la superficie lateral curva."

explicacion: |
  Toda la superficie lateral converge en ese único punto.
```

### 24 — La generatriz siempre es mayor que la altura

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier cono real, la generatriz siempre es mayor que la altura."

explicacion: |
  La altura va derecho (perpendicular a la base); la generatriz va en
  diagonal desde el vértice hasta el borde — el camino diagonal siempre
  es más largo que el camino recto perpendicular.
```

### 25 — Problema: verificar un cálculo de volumen (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "verificacion"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  correcto: redondear((pi * r * r * h) / 3, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de un cono de radio {r} cm y altura {h} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula (π × r² × h) ÷ 3 y se compara con el valor mostrado.
```

### 26 — Cierre: cono, pirámide y el factor 1/3

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "piramide", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El factor 1/3 en la fórmula del volumen aparece siempre que un cuerpo termina en un único vértice en vez de tener una segunda base — sea la base un polígono (pirámide) o un círculo (cono)."

explicacion: |
  Es el patrón central que conecta `../piramides/` con este módulo.
```
