# Química — Concentración de una solución (cuestionario, 32 preguntas VBLang)

> Tema: `Q3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una solución

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Qué es una solución en química?"
tipo: mc
opciones_explicitas:
  - "Una mezcla homogénea de un soluto disuelto en un solvente"
  - "Cualquier mezcla, homogénea o no"
  - "Un compuesto químico puro"
respuesta: "Una mezcla homogénea de un soluto disuelto en un solvente"

explicacion: |
  Homogénea significa que se ve como una sola sustancia, sin partes
  distinguibles.
```

### 2 — Soluto vs. solvente

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "En agua salada, ¿cuál es el soluto y cuál el solvente?"
tipo: mc
opciones_explicitas:
  - "La sal es el soluto; el agua es el solvente"
  - "El agua es el soluto; la sal es el solvente"
  - "Ambos son solventes"
respuesta: "La sal es el soluto; el agua es el solvente"

explicacion: |
  El soluto es lo que se disuelve; el solvente es el medio, generalmente
  en mayor cantidad.
```

### 3 — El solvente suele estar en mayor cantidad

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "En una solución, el solvente suele estar en mayor cantidad que el soluto."

explicacion: |
  Es la sustancia "de fondo" en la que se disuelve el soluto.
```

### 4 — Qué es la concentración

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Qué indica la concentración de una solución?"
tipo: mc
opciones_explicitas:
  - "Cuánto soluto hay por cada cantidad de solución"
  - "Cuántos átomos tiene el soluto"
  - "El color de la solución"
respuesta: "Cuánto soluto hay por cada cantidad de solución"

explicacion: |
  Es la misma idea de "cantidad por unidad de volumen o masa" que la
  densidad, aplicada a una mezcla.
```

### 5 — Completar: fórmula de %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "completar"]

tipo: completar
enunciado: "Completá: %m/V = (masa del soluto en g / volumen de la solución en mL) × ___."
respuestas_validas:
  - "100"

explicacion: |
  Multiplicar por 100 convierte la razón en un porcentaje.
```

### 6 — Problema: calcular %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "problema"]

variables:
  volumen: uno_de([100, 200, 250, 500])
  masa: uno_de([2, 4, 5, 8, 10])

respuesta: redondear((masa / volumen) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se disuelven {masa} g de sal en agua hasta completar {volumen} mL de solución. ¿Cuál es la concentración %m/V?"

pasos:
  - "({masa} ÷ {volumen}) × 100 = {redondear((masa / volumen) * 100, 2)} %m/V"

explicacion: |
  Se divide la masa del soluto por el volumen total de la solución, y se
  multiplica por 100.
```

### 7 — Problema: hallar la masa de soluto dado %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  volumen: uno_de([100, 200, 500, 1000])
  porcentaje: uno_de([1, 2, 5, 10])

respuesta: (porcentaje / 100) * volumen
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuántos gramos de soluto hacen falta para preparar {volumen} mL de una solución al {porcentaje}% m/V?"

pasos:
  - "({porcentaje} ÷ 100) × {volumen} = {(porcentaje / 100) * volumen} g"

explicacion: |
  Se despeja la masa invirtiendo la fórmula: Masa = (%m/V ÷ 100) ×
  Volumen.
```

### 8 — Problema: hallar el volumen de solución dado %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  porcentaje: uno_de([2, 4, 5, 10])
  volumen_real: uno_de([100, 200, 500])
  masa: (porcentaje / 100) * volumen_real

respuesta: volumen_real
tipo: input
tolerancia_abs: 0.5

enunciado: "Se disuelven {masa} g de soluto para preparar una solución al {porcentaje}% m/V. ¿Cuántos mL de solución se obtienen?"

pasos:
  - "{masa} ÷ ({porcentaje} ÷ 100) = {volumen_real} mL"

explicacion: |
  Se despeja el volumen invirtiendo la fórmula.
```

### 9 — Completar: fórmula de %m/m

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "completar"]

tipo: completar
enunciado: "Completá: %m/m = (masa del soluto / masa de la ___) × 100."
respuestas_validas:
  - "solución"
  - "solucion"

explicacion: |
  Ambas masas (soluto y solución total) en la misma unidad.
```

### 10 — Problema: calcular %m/m

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "problema"]

variables:
  masa_solucion: uno_de([100, 200, 500])
  masa_soluto: uno_de([5, 10, 20])

respuesta: redondear((masa_soluto / masa_solucion) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Una aleación de {masa_solucion} g contiene {masa_soluto} g de un metal disuelto en otro. ¿Cuál es su concentración %m/m?"

pasos:
  - "({masa_soluto} ÷ {masa_solucion}) × 100 = {redondear((masa_soluto / masa_solucion) * 100, 2)} %m/m"

explicacion: |
  Acá se comparan dos masas, no masa contra volumen.
```

### 11 — Completar: fórmula de %V/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "completar"]

tipo: completar
enunciado: "Completá: %V/V = (volumen del soluto / volumen de la solución) × ___."
respuestas_validas:
  - "100"

explicacion: |
  Mismo patrón que %m/V y %m/m, pero comparando volúmenes.
```

### 12 — Problema: calcular %V/V (alcohol en una bebida)

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "problema"]

variables:
  volumen_bebida: uno_de([250, 500, 1000])
  porcentaje: uno_de([5, 8, 10])

respuesta: (porcentaje / 100) * volumen_bebida
tipo: input
tolerancia_abs: 0.5

enunciado: "Una botella de {volumen_bebida} mL de cerveza tiene una graduación del {porcentaje}% V/V de alcohol. ¿Cuántos mL de alcohol puro contiene?"

pasos:
  - "({porcentaje} ÷ 100) × {volumen_bebida} = {(porcentaje / 100) * volumen_bebida} mL"

explicacion: |
  El %V/V indica directamente cuántos mL de soluto líquido hay por cada
  100 mL de solución.
```

### 13 — %V/V se usa para mezclas de dos líquidos

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "La concentración %V/V se usa típicamente cuando tanto el soluto como el solvente son líquidos."

explicacion: |
  Como el alcohol disuelto en agua de una bebida.
```

### 14 — Ejemplo real de %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "El suero fisiológico es una solución de cloruro de sodio al 0,9% m/V. ¿Qué significa eso?"
tipo: mc
opciones_explicitas:
  - "Que hay 0,9 g de sal por cada 100 mL de solución"
  - "Que el suero es 0,9% agua"
  - "Que hay 9 g de sal por cada mL de solución"
respuesta: "Que hay 0,9 g de sal por cada 100 mL de solución"

explicacion: |
  El %m/V siempre se lee como "gramos de soluto cada 100 mL de
  solución".
```

### 15 — Qué son las partes por millón (ppm)

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Para qué se usa la unidad ppm (partes por millón) en vez del porcentaje?"
tipo: mc
opciones_explicitas:
  - "Para expresar concentraciones muy chicas (como contaminantes), donde el porcentaje daría números incómodos"
  - "Para concentraciones muy altas, cercanas al 100%"
  - "Es exactamente lo mismo que el porcentaje, sólo un nombre distinto"
respuesta: "Para expresar concentraciones muy chicas (como contaminantes), donde el porcentaje daría números incómodos"

explicacion: |
  1 ppm equivale a 0,0001% — mucho más cómodo de leer que un porcentaje
  con muchos ceros.
```

### 16 — Problema: convertir a ppm

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  masa_solucion: uno_de([1000, 2000, 5000])
  masa_soluto: uno_de([1, 2, 4])

respuesta: (masa_soluto / masa_solucion) * 1000000
tipo: input
tolerancia_abs: 1

enunciado: "Una muestra de agua de {masa_solucion} g contiene {masa_soluto} g de un contaminante disuelto. ¿Cuál es su concentración en ppm?"

pasos:
  - "({masa_soluto} ÷ {masa_solucion}) × 1 000 000 = {(masa_soluto / masa_solucion) * 1000000} ppm"

explicacion: |
  Mismo cálculo que %m/m, pero multiplicando por 1 000 000 en vez de
  por 100.
```

### 17 — A mayor concentración, más soluto por cantidad de solución

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la concentración de una solución, más soluto hay por cada cantidad de solución."

explicacion: |
  Es la definición misma de concentración.
```

### 18 — Qué es diluir una solución

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Qué significa diluir una solución?"
tipo: mc
opciones_explicitas:
  - "Agregarle más solvente, sin agregar ni quitar soluto"
  - "Agregarle más soluto"
  - "Evaporar parte del solvente"
respuesta: "Agregarle más solvente, sin agregar ni quitar soluto"

explicacion: |
  La cantidad de soluto no cambia; lo que cambia es el volumen total de
  solución.
```

### 19 — Diluir baja la concentración

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Diluir una solución (agregarle solvente) siempre reduce su concentración."

explicacion: |
  La misma cantidad de soluto queda repartida en más volumen de
  solución.
```

### 20 — Problema: efecto de diluir en la concentración

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  masa: uno_de([10, 20])
  volumen_inicial: uno_de([100, 200])
  volumen_final: uno_de([400, 500])

respuesta: redondear((masa / volumen_final) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Una solución tiene {masa} g de soluto en {volumen_inicial} mL. Se le agrega agua hasta completar {volumen_final} mL, sin agregar más soluto. ¿Cuál es la nueva concentración %m/V?"

pasos:
  - "La masa de soluto sigue siendo {masa} g, pero ahora en {volumen_final} mL"
  - "({masa} ÷ {volumen_final}) × 100 = {redondear((masa / volumen_final) * 100, 2)} %m/V"

explicacion: |
  El soluto no cambia, pero al haber más volumen total la concentración
  baja.
```

### 21 — Ordenar: pasos para calcular %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "ordenar"]

enunciado: "Ordená los pasos para calcular la concentración %m/V de una solución."
tipo: ordenar
opciones_explicitas:
  - "Dividir la masa por el volumen y multiplicar por 100"
  - "Medir la masa del soluto (en gramos)"
  - "Medir el volumen total de la solución (en mL)"
respuesta_orden: ["Medir la masa del soluto (en gramos)", "Medir el volumen total de la solución (en mL)", "Dividir la masa por el volumen y multiplicar por 100"]
explicacion: |
  %m/V = (masa del soluto / volumen de la solución) × 100.
```

### 22 — La concentración es como la densidad, pero de una mezcla

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿En qué se parece la concentración a la densidad?"
tipo: mc
opciones_explicitas:
  - "Ambas son una cantidad de algo (masa) dividida un volumen (o masa total)"
  - "Ambas sólo se pueden medir con un densímetro"
  - "No tienen ninguna relación entre sí"
respuesta: "Ambas son una cantidad de algo (masa) dividida un volumen (o masa total)"

explicacion: |
  La densidad es masa/volumen de una sustancia pura; la concentración es
  masa de soluto/volumen (o masa) de la solución completa.
```

### 23 — %m/m no depende de la unidad de volumen

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "La concentración %m/m, al comparar dos masas, no depende de ninguna unidad de volumen."

explicacion: |
  Por eso conviene usarla para sólidos o mezclas donde medir el volumen
  exacto es más difícil que medir la masa.
```

### 24 — Problema combinado: soluto, solvente y solución total

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  masa_soluto: uno_de([10, 20, 30])
  masa_solvente: uno_de([190, 180, 270])

respuesta: redondear((masa_soluto / (masa_soluto + masa_solvente)) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se mezclan {masa_soluto} g de soluto con {masa_solvente} g de solvente. ¿Cuál es la concentración %m/m de la solución resultante?"

pasos:
  - "Masa total de la solución: {masa_soluto} + {masa_solvente} = {masa_soluto + masa_solvente} g"
  - "({masa_soluto} ÷ {masa_soluto + masa_solvente}) × 100 = {redondear((masa_soluto / (masa_soluto + masa_solvente)) * 100, 2)} %m/m"

explicacion: |
  La masa de la solución total es soluto + solvente, no sólo uno de los
  dos.
```

### 25 — Concentración 0% significa que no hay soluto

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Una concentración de 0% significa que la 'solución' es en realidad sólo solvente puro, sin nada de soluto."

explicacion: |
  Sin soluto no hay nada que concentrar.
```

### 26 — Cierre: para qué sirve la concentración

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular la concentración de una solución?"
tipo: mc
opciones_explicitas:
  - "Para dosificar correctamente medicamentos, productos de limpieza o bebidas, y controlar contaminantes"
  - "Sólo para calcular el color de una mezcla"
  - "Sólo aplica a mezclas sólidas"
respuesta: "Para dosificar correctamente medicamentos, productos de limpieza o bebidas, y controlar contaminantes"

explicacion: |
  Desde el suero fisiológico hasta el límite legal de contaminantes en
  agua potable, todo se expresa en concentración.
```

### 27 — Calcular el %m/V

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["calculo", "m_v"]

variables:
  V: uno_de([100, 200, 250, 500])
  c: random(1, 20)
  m: c * V / 100

respuesta: c
tipo: input
unidad: "%m/V"
tolerancia: 1%

enunciado: "Se disuelven {m} g de una sal en agua hasta completar {V} mL de solución. ¿Cuál es la concentración en %m/V?"

pasos:
  - "%m/V = (masa de soluto / volumen de solución) × 100"
  - "%m/V = ({m} / {V}) × 100 = {c} %m/V"

explicacion: |
  El %m/V dice cuántos gramos de soluto hay en cada 100 mL de solución.
```

### 28 — Masa de soluto necesaria

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["calculo", "m_v"]

variables:
  V: uno_de([100, 250, 500, 1000])
  c: uno_de([0.9, 2, 5, 10, 15])

respuesta: c * V / 100
tipo: input
unidad: "g"
tolerancia: 1%

enunciado: "¿Cuántos gramos de soluto hacen falta para preparar {V} mL de una solución al {c} %m/V?"

pasos:
  - "masa = %m/V × volumen / 100"
  - "masa = {c} × {V} / 100 = {c * V / 100} g"

explicacion: |
  Se despeja la masa de la fórmula del porcentaje.
```

### 29 — Calcular el %m/m

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["calculo", "m_m"]

variables:
  ms: random(5, 50)
  mag: random(50, 400)

respuesta: ms / (ms + mag) * 100
tipo: input
unidad: "%m/m"
tolerancia: 1%

enunciado: "Se disuelven {ms} g de soluto en {mag} g de agua. ¿Cuál es la concentración en %m/m? (podés redondear a un decimal)"

pasos:
  - "Masa de la solución = soluto + solvente = {ms} + {mag} = {ms + mag} g"
  - "%m/m = ({ms} / {ms + mag}) × 100 ≈ {ms / (ms + mag) * 100 | 1} %m/m"

explicacion: |
  Ojo: se divide por la masa de la solución, no por la del agua sola.
```

### 30 — Alcohol en una bebida (%V/V)

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["calculo", "v_v", "cotidiano"]

variables:
  V: uno_de([330, 473, 750, 1000])
  g: uno_de([5, 12, 14, 40])

respuesta: V * g / 100
tipo: input
unidad: "mL"
tolerancia: 1%

enunciado: "Una bebida de {V} mL tiene una graduación de {g} %V/V. ¿Cuántos mL de alcohol contiene?"

pasos:
  - "volumen de alcohol = %V/V × volumen total / 100"
  - "{g} × {V} / 100 = {V * g / 100} mL"

explicacion: |
  La graduación alcohólica de las etiquetas es un %V/V.
```

### 31 — Partes por millón en el agua

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["calculo", "ppm", "cotidiano"]

variables:
  mg: random(1, 30)
  L: uno_de([1, 2, 5, 10])

respuesta: mg / L
tipo: input
unidad: "ppm"
tolerancia: 1%

enunciado: "En {L} litro(s) de agua de la canilla se encontraron {mg} mg de cloro. ¿Cuántas ppm de cloro tiene? (en agua, 1 ppm equivale a 1 mg por litro)"

pasos:
  - "1 L de agua pesa 1 kg = 1 000 000 mg, así que 1 mg/L = 1 ppm."
  - "ppm = {mg} mg / {L} L = {mg / L} ppm"

explicacion: |
  Las normas de agua potable fijan los límites de cloro, arsénico o nitratos en ppm (mg/L).
```

### 32 — ¿Cuál está más concentrada?

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["comparacion", "verdadero_falso"]

variables:
  m1: random(5, 30)
  V1: uno_de([100, 200])
  m2: random(5, 30)
  V2: uno_de([250, 500])

respuesta: (m1 / V1) > (m2 / V2)
tipo: vf

enunciado: "La solución A tiene {m1} g de sal en {V1} mL; la B, {m2} g en {V2} mL. ¿A está más concentrada que B?"

pasos:
  - "A: {m1} / {V1} × 100 = {m1 / V1 * 100 | 2} %m/V"
  - "B: {m2} / {V2} × 100 = {m2 / V2 * 100 | 2} %m/V"

explicacion: |
  Para comparar concentraciones hay que llevar las dos a la misma escala, no mirar solo los gramos.
```
