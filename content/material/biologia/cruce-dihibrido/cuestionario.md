# Biología — Cruce dihíbrido (cuestionario, 31 preguntas VBLang)

> Tema: `BDIHIB`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en **8 lotes, corridos en 6+2
> hilos concurrentes** (el server tenía `Max Concurrent Predictions: 8`
> pero 8 a la vez saturó el timeout de la herramienta — 6 concurrentes
> anduvo bien) — para cubrir bien por encima de las 20 preguntas
> mínimas en una sola tanda. Corregido a mano. Bug de esta tanda: array
> de un solo elemento indexado con un `idx` de rango 0-3 (fuera de
> rango para idx≠0).

---

### 1 — Cruce monohíbrido

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "En un cruce monohíbrido se estudia la herencia de un solo gen a la vez."

explicacion: |
  Correcto. "Mono" indica un solo par de alelos bajo estudio.
```

### 2 — Cruce dihíbrido

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Un cruce dihíbrido es aquel en el que se estudian dos genes distintos simultáneamente."

explicacion: |
  Correcto, el prefijo "di-" indica dos genes a la vez.
```

### 3 — Ejemplo de cruce dihíbrido

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "color y forma de la semilla"
tipo: mc
opciones_explicitas: ["color y forma de la semilla", "solo el color de la semilla", "solo la forma de la semilla", "ningún rasgo"]

enunciado: "Si se estudia la herencia del color Y la forma de la semilla al mismo tiempo, ¿qué tipo de cruce es?"

explicacion: |
  Dos características a la vez: cruce dihíbrido.
```

### 4 — Complejidad del cruce

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "El cruce dihíbrido es más simple que el cruce monohíbrido porque involucra menos genes."

explicacion: |
  Falso, es más complejo: involucra dos pares de genes en vez de uno.
```

### 5 — Segregación independiente

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos genes están en cromosomas distintos, se heredan de forma independiente uno del otro."

explicacion: |
  Correcto. Segundo principio de Mendel.
```

### 6 — Influencia entre genes

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "Que un descendiente reciba el alelo dominante del gen 1 influye en el alelo que recibe del gen 2."

explicacion: |
  Falso, si los genes son independientes no se influyen.
```

### 7 — Nombre de la ley

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "independiente"
tipo: completar
respuestas_validas:
  - "independiente"

enunciado: "La ley que dice que los genes en cromosomas distintos se heredan sin influirse entre sí se llama ley de segregación ___."

explicacion: |
  Ley de segregación independiente (2ª ley de Mendel).
```

### 8 — Cálculo de probabilidades

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segregación independiente permite tratar cada gen como un sorteo aparte y combinar sus probabilidades multiplicándolas."

explicacion: |
  Correcto, es la regla del producto para eventos independientes.
```

### 9 — Gametos de un individuo AaBb

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "Un individuo con genotipo AaBb puede producir 4 tipos de gametos diferentes."

explicacion: |
  Combina A/a con B/b: AB, Ab, aB, ab.
```

### 10 — Tipos de gametos de un individuo AaBb

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: "AB, Ab, aB, ab"
tipo: mc
opciones_explicitas: ["AB, Ab, aB, ab", "Solo AB y ab", "Aa y Bb", "AABB y aabb"]

enunciado: "Un individuo AaBb produce los siguientes tipos de gametos:"

explicacion: |
  Las 4 combinaciones posibles: AB, Ab, aB, ab.
```

### 11 — Gametos de un individuo homocigota

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "Un individuo AABB (homocigota para ambos genes) produce un solo tipo de gameto (AB)."

explicacion: |
  Al ser homocigota, todos sus gametos llevan A y B.
```

### 12 — Cantidad de gametos según número de genes

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "combinatoria"]

variables:
  genes: uno_de([1, 2, 3])

respuesta: 2 ^ genes
tipo: input
tolerancia_abs: 0.01

enunciado: "Un individuo heterocigoto para {genes} genes produce 2 elevado a n tipos de gametos. ¿Cuántos tipos produce?"

pasos:
  - "2^n, con n = {genes}"

explicacion: |
  2^{genes}.
```

### 13 — Tamaño del cuadro dihíbrido

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "punnett"]

respuesta: verdadero
tipo: vf

enunciado: "El cuadro de Punnett para un cruce dihíbrido tiene 16 casillas (matriz 4×4)."

explicacion: |
  Cada progenitor aporta 4 tipos de gametos: 4×4=16.
```

### 14 — Comparación con cruce monohíbrido

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "punnett"]

respuesta: falso
tipo: vf

enunciado: "El cuadro de Punnett para un cruce monohíbrido tiene 16 casillas, igual que el dihíbrido."

explicacion: |
  Falso. El monohíbrido tiene 4 casillas (2×2); 16 es exclusivo del dihíbrido.
```

### 15 — Origen de las dimensiones del cuadro

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "punnett"]

respuesta: "Cada progenitor produce 4 tipos de gametos diferentes"
tipo: mc
opciones_explicitas: ["Cada progenitor produce 4 tipos de gametos diferentes", "Hay 4 alelos en total en el sistema", "El cruce siempre produce 4 hijos en la descendencia", "No tiene una razón particular, es una convención"]

enunciado: "¿Por qué el cuadro de Punnett de un cruce dihíbrido tiene 4 filas y 4 columnas?"

explicacion: |
  Porque cada progenitor produce 4 tipos de gametos posibles.
```

### 16 — Proporción fenotípica clásica

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Al cruzar AaBb × AaBb, la proporción fenotípica clásica es 9:3:3:1."

explicacion: |
  Correcto, es la proporción clásica del cruce dihíbrido.
```

### 17 — Interpretación del 9/16

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "En la proporción 9:3:3:1, el 9/16 corresponde a dominante en ambos genes."

explicacion: |
  Correcto, es el grupo mayoritario.
```

### 18 — Interpretación del 1/16

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "En la proporción 9:3:3:1, el 1/16 corresponde a dominante en ambos genes."

explicacion: |
  Falso, el 1/16 es recesivo en ambos genes.
```

### 19 — Fracción recesiva

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "1"
tipo: completar
respuestas_validas:
  - "1"
  - "un"

enunciado: "En la proporción 9:3:3:1, la fracción recesiva en ambos genes es ___ dieciseisavos."

explicacion: |
  1/16 es la fracción doble recesiva.
```

### 20 — Sumatoria de la proporción

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las 4 fracciones de la proporción 9:3:3:1 (9+3+3+1) da 16."

explicacion: |
  Correcto, es el total de casillas del cuadro dihíbrido.
```

### 21 — Atajo de multiplicar probabilidades

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Como los genes son independientes, se puede resolver cada gen por separado (3:1) y multiplicar, en vez de armar las 16 casillas."

explicacion: |
  Correcto, es un atajo válido por la segregación independiente.
```

### 22 — Cálculo de probabilidad combinada

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["probabilidad", "genetica"]

variables:
  p1: uno_de([3, 1])
  p2: uno_de([3, 1])

respuesta: (p1 / 4) * (p2 / 4)
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb, P(dominante gen1) = {p1}/4 y P(dominante gen2) = {p2}/4. ¿Cuál es la probabilidad combinada?"

pasos:
  - "Multiplicar ambas probabilidades"

explicacion: |
  ({p1}/4) × ({p2}/4).
```

### 23 — Probabilidad compuesta

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar probabilidades de eventos independientes es la misma lógica de la probabilidad compuesta."

explicacion: |
  Correcto — ver ../../matematica/probabilidad-compuesta/.
```

### 24 — Proporciones monohíbridas

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["mendel", "monohibridismo"]

respuesta: "3/4"
tipo: mc
opciones_explicitas: ["3/4", "1/4", "1/2", "1"]

enunciado: "En Aa × Aa, ¿cuál es la probabilidad de fenotipo dominante en un descendiente?"

explicacion: |
  AA (1/4) + Aa (2/4) = 3/4 con fenotipo dominante.
```

### 25 — Fenotipo dominante en ambos genes

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 9 / 16
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo dominante en ambos genes?"

explicacion: |
  {total} × 9/16.
```

### 26 — Fenotipo recesivo en ambos genes

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 1 / 16
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo recesivo en ambos genes?"

explicacion: |
  {total} × 1/16.
```

### 27 — Fenotipo mixto (dominante gen1, recesivo gen2)

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 3 / 16
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo dominante en el gen 1 y recesivo en el gen 2?"

explicacion: |
  {total} × 3/16.
```

### 28 — Característica de los guisantes de Mendel

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Mendel usó guisantes con forma de semilla (lisa/rugosa) y color (amarillo/verde) como los 2 genes de su cruce dihíbrido clásico."

explicacion: |
  Correcto, es el experimento clásico de Mendel.
```

### 29 — Proporción fenotípica dominante en el ejemplo

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "proporciones"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla lisa y amarilla (dominante en ambos) es el fenotipo más común, con 9/16 de la descendencia."

explicacion: |
  Correcto, es la proporción mayoritaria.
```

### 30 — Proporción fenotípica recesiva en el ejemplo

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "proporciones"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla rugosa y verde (recesiva en ambos) es la menos común, con 1/16 de la descendencia."

explicacion: |
  Correcto, es la proporción minoritaria.
```

### 31 — Ley de la segregación independiente confirmada

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "avanzado"
  tags: ["mendel", "segregacion_independiente"]

respuesta: falso
tipo: vf

enunciado: "El cruce dihíbrido de Mendel confirmó que los genes de forma y color se heredan de manera dependiente entre sí."

explicacion: |
  Falso. Confirmó que se heredan de forma INDEPENDIENTE.
```
