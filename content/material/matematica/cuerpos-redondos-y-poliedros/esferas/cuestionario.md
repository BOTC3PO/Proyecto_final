# Matemática — Esferas (cuestionario, 24 preguntas VBLang)

> Tema: `M4Be`. Ver `teoria.md` en esta misma carpeta. Usa la constante
> `pi` del DSL.

---

### 1 — Qué es una esfera

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

enunciado: "¿Qué es una esfera?"
tipo: mc
opciones_explicitas:
  - "El conjunto de puntos del espacio a la misma distancia de un centro"
  - "Un cuerpo con una base circular y un vértice"
  - "Un cuerpo con dos bases circulares"
respuesta: "El conjunto de puntos del espacio a la misma distancia de un centro"

explicacion: |
  Esa distancia constante es el radio.
```

### 2 — La esfera no tiene base ni vértice

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del cilindro y el cono, la esfera no tiene ninguna base ni vértice: es una única superficie curva cerrada."

explicacion: |
  Es el más simple de los cuerpos redondos en ese sentido.
```

### 3 — Fórmula del volumen de la esfera

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de una esfera?"
tipo: mc
opciones_explicitas:
  - "(4 ÷ 3) × π × r³"
  - "(4 ÷ 3) × π × r²"
  - "π × r³"
respuesta: "(4 ÷ 3) × π × r³"

explicacion: |
  Es una fórmula propia de la esfera, distinta de "área de la base ×
  algo" porque no tiene base.
```

### 4 — Volumen de una esfera

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "volumen"]

variables:
  r: random(2, 15)

respuesta: redondear((4 / 3) * pi * r * r * r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuál es el volumen de una esfera de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "(4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³"

explicacion: |
  Se aplica (4÷3) × π × r³ directamente.
```

### 5 — Volumen de una esfera a partir del diámetro

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "volumen"]

variables:
  d: random(4, 30)
  r: d / 2

respuesta: redondear((4 / 3) * pi * r * r * r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuál es el volumen de una esfera de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³."

explicacion: |
  Primero se pasa de diámetro a radio antes de aplicar la fórmula.
```

### 6 — Fórmula de la superficie de la esfera

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula de la superficie de una esfera?"
tipo: mc
opciones_explicitas:
  - "4 × π × r²"
  - "(4 ÷ 3) × π × r³"
  - "2 × π × r²"
respuesta: "4 × π × r²"

explicacion: |
  Área de la superficie = 4πr².
```

### 7 — Superficie de una esfera

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "superficie"]

variables:
  r: random(2, 15)

respuesta: redondear(4 * pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la superficie de una esfera de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "4 × π × {r}² = {redondear(4 * pi * r * r, 2)} cm²"

explicacion: |
  Se aplica 4 × π × r² directamente.
```

### 8 — Radio de una esfera a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "volumen"]

variables:
  r: random(2, 10)
  volumen: (4 / 3) * pi * r * r * r

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una esfera tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "raiz(({redondear(volumen, 2)} × 3) ÷ (4 × π), 3) = {redondear(raiz((volumen * 3) / (4 * pi), 3), 2)} cm"

explicacion: |
  Se despeja r³ y después se saca la raíz cúbica (con `raiz(x, 3)`).
```

### 9 — Volumen de una media esfera (hemisferio)

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "hemisferio", "volumen"]

variables:
  r: random(2, 15)

respuesta: redondear(((4 / 3) * pi * r * r * r) / 2, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuál es el volumen de una media esfera (hemisferio) de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "Esfera completa: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³. La mitad: {redondear(((4 / 3) * pi * r * r * r) / 2, 2)} cm³."

explicacion: |
  Un hemisferio tiene exactamente la mitad del volumen de la esfera
  completa.
```

### 10 — Problema: capacidad de una pelota inflable

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "capacidad", "problema"]

variables:
  r: random(5, 15)

respuesta: redondear(((4 / 3) * pi * r * r * r) / 1000, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pelota inflable tiene {r} cm de radio. ¿Cuántos litros de aire hacen falta para llenarla por completo? Redondeá a 3 decimales."

pasos:
  - "Volumen: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³. En litros: {redondear((4 / 3) * pi * r * r * r, 2)} ÷ 1000 = {redondear(((4 / 3) * pi * r * r * r) / 1000, 3)}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros.
```

### 11 — Duplicar el radio de una esfera multiplica el volumen por 8

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "volumen"]

variables:
  r: random(2, 8)

respuesta: falso
tipo: vf

enunciado: "Si el radio de una esfera de {r} cm se duplica, su volumen también se duplica."

pasos:
  - "Volumen original: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³. Con el radio doble: (4 ÷ 3) × π × {2 * r}³ = {redondear((4 / 3) * pi * (2 * r) * (2 * r) * (2 * r), 2)} cm³."

explicacion: |
  Como el radio está al cubo en la fórmula, duplicarlo multiplica el
  volumen por 8, no por 2.
```

### 12 — Comparar volúmenes de dos esferas

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "comparacion"]

variables:
  r1: random(2, 10)
  r2: random(2, 10)

restricciones:
  - r1 != r2

respuesta: r1 > r2
tipo: vf

enunciado: "¿Tiene mayor volumen una esfera de radio {r1} cm, que otra de radio {r2} cm?"

pasos:
  - "Como el volumen depende de r³ (siempre creciente), alcanza con comparar los radios: {r1} contra {r2}."

explicacion: |
  A mayor radio, siempre mayor volumen: no hace falta calcular el
  volumen completo para comparar dos esferas.
```

### 13 — Elegir la esfera de mayor volumen

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "comparacion"]

enunciado: "¿Cuál de estas esferas tiene mayor volumen: una de radio 4 cm, o una de radio 6 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 6 cm"
  - "Radio 4 cm"
respuesta: "Radio 6 cm"

explicacion: |
  A mayor radio, mayor volumen.
```

### 14 — La esfera NO tiene aristas

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La esfera no tiene aristas, porque no tiene caras planas que se encuentren entre sí."

explicacion: |
  Una arista es el borde donde se juntan dos caras planas — la esfera no
  tiene ninguna cara plana.
```

### 15 — Relación entre esfera, cono y cilindro (Arquímedes)

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "cilindro", "cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un mismo radio r, si el cilindro y el cono tienen altura 2r, el volumen de la esfera queda entre el del cono (el menor) y el del cilindro (el mayor)."

explicacion: |
  Es la relación 1:2:3 (cono:esfera:cilindro) que ya había descubierto
  Arquímedes.
```

### 16 — Problema: radio de una esfera a partir de su superficie

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "superficie"]

variables:
  r: random(2, 10)
  superficie: 4 * pi * r * r

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una esfera tiene una superficie de {redondear(superficie, 2)} cm². ¿Cuál es su radio?"

pasos:
  - "sqrt({redondear(superficie, 2)} ÷ (4 × π)) = {redondear(sqrt(superficie / (4 * pi)), 2)} cm"

explicacion: |
  Se despeja r² dividiendo la superficie por 4π, y después se saca la
  raíz cuadrada.
```

### 17 — Comparar hemisferio con esfera completa

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "hemisferio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un hemisferio (media esfera) tiene exactamente la mitad del volumen de la esfera completa del mismo radio."

explicacion: |
  Es simplemente cortar la esfera al medio.
```

### 18 — Completar: fórmula del volumen

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "completar"]

tipo: completar
enunciado: "Completá: el volumen de una esfera es 4 tercios por π por el radio elevado a la ___."
respuestas_validas:
  - 3

explicacion: |
  V = (4/3) × π × r³.
```

### 19 — Completar: volumen de una esfera concreta

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "completar"]

variables:
  r: random(2, 10)

tipo: completar
enunciado: "Completá: el volumen de una esfera de radio {r} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear((4 / 3) * pi * r * r * r, 2)

explicacion: |
  V = (4/3) × π × r³.
```

### 20 — Ordenar esferas por volumen

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "orden"]

tipo: ordenar
enunciado: "Ordená estas esferas de menor a mayor volumen, según su radio: 7 cm, 2 cm, 5 cm, 3 cm."
opciones_explicitas:
  - "Radio 5 cm"
  - "Radio 2 cm"
  - "Radio 7 cm"
  - "Radio 3 cm"
respuesta_orden: ["Radio 2 cm", "Radio 3 cm", "Radio 5 cm", "Radio 7 cm"]
explicacion: |
  Como el volumen crece siempre con el radio, alcanza con ordenar los
  radios directamente.
```

### 21 — Verificar un cálculo de volumen (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "verificacion"]

variables:
  r: random(2, 10)
  correcto: redondear((4 / 3) * pi * r * r * r, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de una esfera de radio {r} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula (4/3) × π × r³ y se compara con el valor mostrado.
```

### 22 — Ejemplos de esferas en la vida real

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

enunciado: "¿Cuál de estos objetos tiene aproximadamente forma de esfera?"
tipo: mc
opciones_explicitas:
  - "Una pelota de fútbol"
  - "Una lata de gaseosa"
  - "Una caja de zapatos"
respuesta: "Una pelota de fútbol"

explicacion: |
  La lata es un cilindro y la caja un prisma rectangular; la pelota se
  aproxima a una esfera.
```

### 23 — La esfera no tiene caras planas

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La esfera es un poliedro, porque tiene una superficie cerrada."

explicacion: |
  Un poliedro necesita caras PLANAS; la esfera es puramente curva, así
  que se clasifica como cuerpo redondo, no como poliedro.
```

### 24 — Cierre: la esfera es el cuerpo más simple de describir

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De todos los cuerpos vistos en esta rama (prismas, pirámides, cilindros, conos, esferas), la esfera es el único que se describe completamente con un solo dato: el radio."

explicacion: |
  Los demás cuerpos necesitan al menos dos datos (base y altura); la
  esfera queda totalmente determinada por su radio.
```
