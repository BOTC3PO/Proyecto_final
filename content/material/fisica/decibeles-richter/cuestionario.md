# Física — Decibeles y escala Richter (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. `dB = 10×log10(I/I0)`. Richter:
> cada punto = 10x amplitud, ~31,6x (`10^1,5`) energía.

---

### 1 — Qué mide el decibel

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "vocabulario"]

enunciado: "¿Qué mide la escala de decibeles (dB)?"
tipo: mc
opciones_explicitas:
  - "La intensidad de un sonido, comparada con una intensidad de referencia"
  - "La frecuencia de un sonido (agudo o grave)"
  - "La duración de un sonido"
respuesta: "La intensidad de un sonido, comparada con una intensidad de referencia"

explicacion: |
  Es una escala de intensidad relativa, no de frecuencia ni de
  duración.
```

### 2 — La fórmula del decibel

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula del nivel de intensidad sonora es dB = 10 × log₁₀(I / I₀), con I₀ una intensidad de referencia fija."

explicacion: |
  Es una escala logarítmica, no lineal.
```

### 3 — +10 dB es 10 veces más intensidad física

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de 10 dB representa 10 veces más intensidad física del sonido."

explicacion: |
  Es consecuencia directa de que la escala usa un logaritmo en base 10.
```

### 4 — Calcular el nivel en dB

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "calculo"]

variables:
  exponente: random(1, 8)
  razon: 10 ^ exponente

respuesta: 10 * log10(razon)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un sonido tiene una intensidad {razon} veces mayor que la intensidad de referencia. ¿Cuántos decibeles representa?"

pasos:
  - "dB = 10 × log₁₀({razon})"

explicacion: |
  Se aplica la fórmula del decibel sobre la razón de intensidades dada.
```

### 5 — +10 dB se percibe como el doble de fuerte

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque un aumento de 10 dB representa 10 veces más intensidad física, el oído humano lo percibe aproximadamente como el doble de fuerte."

explicacion: |
  La percepción de sonoridad tiene su propia escala, distinta de la
  intensidad física medida.
```

### 6 — +3 dB duplica la intensidad física

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de aproximadamente 3 dB ya representa el doble de intensidad física del sonido."

explicacion: |
  10 elevado a (3/10) da aproximadamente 2 — de ahí sale esa
  aproximación tan citada.
```

### 7 — Comparar dos sonidos por dB

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "comparacion"]

variables:
  db_a: random(40, 70)
  db_b: random(80, 120)

respuesta: (db_b > db_a)
tipo: vf

enunciado: "Sonido A: {db_a} dB. Sonido B: {db_b} dB. ¿El sonido B tiene mayor intensidad física que el sonido A?"

explicacion: |
  A mayor cantidad de decibeles, mayor la intensidad física del sonido.
```

### 8 — Despejar la razón de intensidades

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "calculo"]

variables:
  db: uno_de([10, 20, 30, 40, 50, 60])

respuesta: 10 ^ (db / 10)
tipo: input
tolerancia_abs: 1

enunciado: "Un sonido tiene un nivel de {db} dB. ¿Cuántas veces más intenso es que la intensidad de referencia?"

explicacion: |
  Se despeja la razón de intensidades invirtiendo la fórmula del
  decibel.
```

### 9 — Ordenar sonidos por dB

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "orden"]

tipo: ordenar
enunciado: "Ordená estos sonidos de menor a mayor intensidad, según su nivel en decibeles."
opciones_explicitas:
  - "Una conversación normal (60 dB)"
  - "Un susurro (30 dB)"
  - "Un avión despegando (130 dB)"
respuesta_orden: ["Un susurro (30 dB)", "Una conversación normal (60 dB)", "Un avión despegando (130 dB)"]

explicacion: |
  A mayor número de decibeles, mayor la intensidad del sonido.
```

### 10 — Decibeles comprimen un rango enorme

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de decibeles comprime un rango enorme de intensidades físicas (de billones de veces de diferencia) en una escala de números manejables."

explicacion: |
  Es la razón de fondo por la que se usa una escala logarítmica en vez
  de la intensidad física directa.
```

### 11 — Verificar un cálculo de decibeles (con error a veces)

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "verificacion"]

variables:
  exponente: random(1, 8)
  razon: 10 ^ exponente
  correcto: 10 * log10(razon)
  error: uno_de([0, 0, 0, 10, -10])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Un sonido {razon} veces más intenso que la referencia, nivel informado: {mostrado} dB."

explicacion: |
  Se vuelve a calcular con la fórmula del decibel y se compara con el
  valor informado.
```

### 12 — Qué mide la escala Richter

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "vocabulario"]

enunciado: "¿Qué mide la escala Richter?"
tipo: mc
opciones_explicitas:
  - "La magnitud de un terremoto, relacionada con la energía liberada"
  - "La duración de un terremoto"
  - "La cantidad de réplicas de un terremoto"
respuesta: "La magnitud de un terremoto, relacionada con la energía liberada"

explicacion: |
  Es una medida de magnitud, no de duración ni de cantidad de eventos.
```

### 13 — La escala Richter es logarítmica

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala Richter es una escala logarítmica, igual que los decibeles y el pH."

explicacion: |
  Los tres usan la misma herramienta matemática: un logaritmo de una
  razón.
```

### 14 — Cada punto es 10 veces más amplitud

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada punto entero de magnitud Richter representa una amplitud de onda sísmica 10 veces mayor."

explicacion: |
  Es el mismo tipo de salto (factor de 10) que en la escala de pH.
```

### 15 — Cada punto es aproximadamente 31,6 veces más energía

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada punto entero de magnitud Richter representa, aproximadamente, 31,6 veces más energía liberada (10 elevado a 1,5)."

explicacion: |
  Es un factor distinto al de la amplitud (10 veces): la energía crece
  más rápido que la amplitud por cada punto.
```

### 16 — Calcular cuántas veces más amplitud

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "calculo"]

variables:
  diferencia_magnitud: random(1, 4)

respuesta: 10 ^ diferencia_magnitud
tipo: input
tolerancia_abs: 1

enunciado: "Dos terremotos difieren en {diferencia_magnitud} puntos de magnitud Richter. ¿Cuántas veces más amplitud de onda sísmica tiene el más fuerte?"

explicacion: |
  Se eleva 10 a la cantidad de puntos de diferencia.
```

### 17 — Calcular cuántas veces más energía

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "calculo"]

variables:
  diferencia_magnitud: random(1, 3)

respuesta: 10 ^ (1.5 * diferencia_magnitud)
tipo: input
tolerancia_abs: 5

enunciado: "Dos terremotos difieren en {diferencia_magnitud} puntos de magnitud Richter. ¿Aproximadamente cuántas veces más energía liberó el más fuerte?"

pasos:
  - "10^(1,5 × {diferencia_magnitud})"

explicacion: |
  Se usa el factor de energía por punto (10^1,5 ≈ 31,6), elevado a la
  cantidad de puntos de diferencia.
```

### 18 — Un terremoto de magnitud 7 vs. uno de magnitud 5

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un terremoto de magnitud 7 libera muchísima más energía que uno de magnitud 5 — no el doble, sino cientos de veces más."

explicacion: |
  Dos puntos de diferencia son aproximadamente 31,6 × 31,6 ≈ 1.000 veces
  más energía.
```

### 19 — Ordenar terremotos por energía liberada

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "orden"]

tipo: ordenar
enunciado: "Ordená estos terremotos de menor a mayor energía liberada, según su magnitud Richter."
opciones_explicitas:
  - "Magnitud 7,0"
  - "Magnitud 4,0"
  - "Magnitud 5,5"
respuesta_orden: ["Magnitud 4,0", "Magnitud 5,5", "Magnitud 7,0"]

explicacion: |
  A mayor magnitud, mayor la energía liberada — el orden de magnitud
  coincide con el orden de energía.
```

### 20 — La fórmula de energía de Gutenberg-Richter

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula log₁₀(E) = 4,8 + 1,5 × M relaciona la magnitud Richter (M) con la energía liberada (E, en joules) — de ahí sale el factor de aproximadamente 31,6 veces por punto."

explicacion: |
  10 elevado a 1,5 (el coeficiente de M en la fórmula) es,
  aproximadamente, 31,6.
```

### 21 — Completar la diferencia de magnitud

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter"]

variables:
  diferencia_magnitud: uno_de([1, 2, 3])
  amplitud_veces: 10 ^ diferencia_magnitud

tipo: completar
enunciado: "Dos terremotos tienen una diferencia de amplitud de {amplitud_veces} veces. Completá: ___ (diferencia de magnitud Richter) = log₁₀({amplitud_veces})."
respuestas_validas:
  - diferencia_magnitud

explicacion: |
  Se despeja la diferencia de magnitud tomando logaritmo en base 10 de
  la razón de amplitudes.
```

### 22 — Ambas escalas son parientes del pH

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Decibeles, escala Richter y pH comparten la misma lógica matemática: un logaritmo de una razón respecto a un valor de referencia, aplicado a fenómenos físicos distintos."

explicacion: |
  Cambia el fenómeno (sonido, energía sísmica, concentración de iones),
  no la herramienta matemática.
```

### 23 — Comprimen rangos enormes en escalas manejables

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El motivo de usar escalas logarítmicas como decibeles o Richter es comprimir rangos de valores físicos enormes en números chicos y manejables."

explicacion: |
  Sin el logaritmo, habría que manejar directamente números con muchos
  ceros de diferencia.
```

### 24 — Decibeles y escala Richter (cierre)

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los decibeles miden intensidad de sonido (dB = 10×log₁₀(I/I₀)) y la escala Richter mide magnitud sísmica (cada punto ≈ 10x amplitud, ≈31,6x energía) — dos aplicaciones distintas de la misma herramienta logarítmica."

explicacion: |
  Es la idea central de todo el tema.
```
