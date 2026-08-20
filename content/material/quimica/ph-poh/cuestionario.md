# Química — pH y pOH (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. `pH = -log10[H+]`, `pOH =
> -log10[OH-]`, `pH + pOH = 14` (a 25°C).

---

### 1 — Qué mide el pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

enunciado: "¿Qué mide el pH de una solución?"
tipo: mc
opciones_explicitas:
  - "Qué tan ácida o básica es, a partir de la concentración de iones hidrógeno (H+)"
  - "La temperatura de la solución"
  - "Cuánta sal tiene disuelta la solución"
respuesta: "Qué tan ácida o básica es, a partir de la concentración de iones hidrógeno (H+)"

explicacion: |
  Es una medida de acidez/basicidad, no de temperatura ni de salinidad.
```

### 2 — La fórmula del pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pH se calcula como pH = -log₁₀[H⁺], el logaritmo en base 10 de la concentración de H⁺, con el signo cambiado."

explicacion: |
  Es la fórmula que conecta el pH con la concentración real de iones
  hidrógeno.
```

### 3 — La escala va de 0 a 14

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de pH va de 0 a 14."

explicacion: |
  Es el rango habitual usado para clasificar soluciones acuosas.
```

### 4 — pH menor a 7 es ácido

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH menor a 7 es ácida."

explicacion: |
  A menor pH, mayor concentración de H⁺, más ácida.
```

### 5 — pH igual a 7 es neutro

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH igual a 7 es neutra, como el agua pura a 25°C."

explicacion: |
  Es el punto medio de la escala de 0 a 14.
```

### 6 — pH mayor a 7 es básico

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH mayor a 7 es básica (o alcalina)."

explicacion: |
  A mayor pH, menor concentración de H⁺.
```

### 7 — Calcular el pH dada la concentración de H+

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  exponente: random(1, 6)
  concentracion_h: 1 / 10 ^ exponente

respuesta: -log10(concentracion_h)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una solución tiene una concentración de H⁺ de {concentracion_h} mol/L. ¿Cuál es su pH?"

pasos:
  - "pH = -log₁₀({concentracion_h})"

explicacion: |
  Se aplica la fórmula del pH directamente sobre la concentración dada.
```

### 8 — Qué mide el pOH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

enunciado: "¿Qué mide el pOH de una solución?"
tipo: mc
opciones_explicitas:
  - "La concentración de iones hidroxilo (OH-), con la misma lógica logarítmica que el pH"
  - "Lo mismo que el pH, con otro nombre"
  - "La cantidad de oxígeno disuelto"
respuesta: "La concentración de iones hidroxilo (OH-), con la misma lógica logarítmica que el pH"

explicacion: |
  Es la contraparte del pH, para el otro ion relevante del agua.
```

### 9 — La fórmula del pOH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pOH se calcula como pOH = -log₁₀[OH⁻]."

explicacion: |
  Misma estructura que la fórmula del pH, aplicada al ion hidroxilo.
```

### 10 — pH + pOH = 14

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A 25°C, el pH y el pOH de cualquier solución acuosa siempre suman 14."

explicacion: |
  Conociendo uno de los dos, el otro se obtiene directamente sin
  necesitar la concentración de iones.
```

### 11 — Calcular el pOH dado el pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  ph: random(1, 13)

respuesta: 14 - ph
tipo: input
tolerancia_abs: 0

enunciado: "Una solución tiene un pH de {ph}. ¿Cuál es su pOH?"

explicacion: |
  Se resta el pH de 14.
```

### 12 — Calcular el pH dado el pOH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  poh: random(1, 13)

respuesta: 14 - poh
tipo: input
tolerancia_abs: 0

enunciado: "Una solución tiene un pOH de {poh}. ¿Cuál es su pH?"

explicacion: |
  Se resta el pOH de 14.
```

### 13 — Cada unidad de pH es 10 veces

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada unidad de diferencia en el pH representa un cambio de 10 veces en la concentración de H⁺."

explicacion: |
  Es consecuencia directa de que la escala de pH es logarítmica en base
  10.
```

### 14 — Comparar cuántas veces más H+ tiene una solución

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "avanzado"
  tags: ["ph", "calculo"]

enunciado: "Una solución de pH 3 comparada con una de pH 5 (dos unidades más de pH), ¿cuántas veces más concentración de H⁺ tiene la de pH 3?"
tipo: mc
opciones_explicitas:
  - "100 veces más"
  - "2 veces más"
  - "10 veces más"
respuesta: "100 veces más"

explicacion: |
  Dos unidades de diferencia son 10 × 10 = 100 veces, no una simple
  resta.
```

### 15 — Despejar la concentración de H+ a partir del pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "avanzado"
  tags: ["ph", "calculo"]

variables:
  ph: random(1, 8)

respuesta: 1 / 10 ^ ph
tipo: input
tolerancia_abs: 0.001

enunciado: "Una solución tiene un pH de {ph}. ¿Cuál es su concentración de H⁺, en mol/L?"

pasos:
  - "[H⁺] = 10^(-{ph})"

explicacion: |
  Se despeja la concentración invirtiendo la fórmula del pH.
```

### 16 — El agua pura tiene pH cercano a 7

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El agua pura tiene un pH cercano a 7, a 25°C — el punto neutro de la escala."

explicacion: |
  Es el ejemplo de referencia más habitual para \"neutro\".
```

### 17 — A menor pH, mayor concentración de H+

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La relación entre pH y concentración de H⁺ es inversa: a menor pH, mayor concentración de H⁺ (más ácido)."

explicacion: |
  Es por el signo negativo en la fórmula del pH — un punto que suele
  confundir si no se lo tiene en cuenta.
```

### 18 — Menor pH es más ácido

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "comparacion"]

variables:
  ph_a: random(1, 4)
  ph_b: random(8, 13)

respuesta: (ph_a < ph_b)
tipo: vf

enunciado: "Una solución con pH {ph_a} y otra con pH {ph_b}: ¿la primera es más ácida que la segunda?"

explicacion: |
  Cuanto menor el número de pH, más ácida es la solución.
```

### 19 — Ordenar sustancias por pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "orden"]

tipo: ordenar
enunciado: "Ordená estas sustancias de menor a mayor pH (de más ácida a más básica)."
opciones_explicitas:
  - "Agua pura (pH 7)"
  - "Lejía (pH 13)"
  - "Jugo de limón (pH 2)"
respuesta_orden: ["Jugo de limón (pH 2)", "Agua pura (pH 7)", "Lejía (pH 13)"]

explicacion: |
  A menor pH, más ácida; a mayor pH, más básica.
```

### 20 — Verificar un cálculo de pH (con error a veces)

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "verificacion"]

variables:
  ph: random(1, 13)
  correcto: 14 - ph
  error: uno_de([0, 0, 0, 2, -2])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? pH de {ph}, pOH informado: {mostrado}."

explicacion: |
  Se vuelve a calcular 14 - pH y se compara con el valor informado.
```

### 21 — Completar el pOH

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph"]

variables:
  ph: random(1, 13)
  poh: 14 - ph

tipo: completar
enunciado: "Una solución tiene pH {ph}. Completá: ___ (pOH) = 14 - {ph}."
respuestas_validas:
  - poh

explicacion: |
  Se resta el pH de 14 para obtener el pOH.
```

### 22 — Es una escala logarítmica, no lineal

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de pH es logarítmica, no lineal: \"bajar 2 puntos de pH\" es un cambio de 100 veces en la concentración de H⁺, no un cambio chico."

explicacion: |
  Es el mismo tipo de escala logarítmica que aparece en decibeles y en
  la escala Richter.
```

### 23 — pH y pOH (cierre)

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pH mide la acidez con una escala logarítmica de 0 a 14, el pOH hace lo mismo con el ion hidroxilo, y ambos suman siempre 14 a 25°C."

explicacion: |
  Es la idea central de todo el tema.
```
