# Química — Densidad (cuestionario, 26 preguntas VBLang)

> Tema: `Q2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Qué es la densidad de una sustancia?"
tipo: mc
opciones_explicitas:
  - "La relación entre su masa y el volumen que ocupa"
  - "El peso total de un objeto"
  - "La cantidad de átomos que tiene"
respuesta: "La relación entre su masa y el volumen que ocupa"

explicacion: |
  Densidad = Masa / Volumen.
```

### 2 — Completar: fórmula de la densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "completar"]

tipo: completar
enunciado: "Completá la fórmula: Densidad = Masa / ___."
respuestas_validas:
  - "Volumen"
  - "volumen"

explicacion: |
  Es la masa dividida el volumen que ocupa esa masa.
```

### 3 — Problema: calcular densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen: random(2, 20)
  densidad_real: uno_de([2, 3, 4, 5, 7, 8])
  masa: volumen * densidad_real

respuesta: densidad_real
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene una masa de {masa} g y ocupa un volumen de {volumen} cm³. ¿Cuál es su densidad (en g/cm³)?"

pasos:
  - "{masa} ÷ {volumen} = {densidad_real} g/cm³"

explicacion: |
  Se divide la masa por el volumen.
```

### 4 — Problema: hallar la masa dado la densidad y el volumen

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen: random(2, 30)
  densidad_dato: uno_de([2, 3, 4, 5, 7, 9])

respuesta: volumen * densidad_dato
tipo: input
tolerancia_abs: 0

enunciado: "Una sustancia tiene una densidad de {densidad_dato} g/cm³. ¿Cuál es la masa de {volumen} cm³ de esa sustancia?"

pasos:
  - "{densidad_dato} × {volumen} = {volumen * densidad_dato} g"

explicacion: |
  Se despeja la masa: Masa = Densidad × Volumen.
```

### 5 — Problema: hallar el volumen dado la masa y la densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen_real: random(2, 25)
  densidad_dato: uno_de([2, 3, 4, 5])
  masa: volumen_real * densidad_dato

respuesta: volumen_real
tipo: input
tolerancia_abs: 0

enunciado: "Una sustancia con densidad {densidad_dato} g/cm³ tiene una masa de {masa} g. ¿Cuál es su volumen?"

pasos:
  - "{masa} ÷ {densidad_dato} = {volumen_real} cm³"

explicacion: |
  Se despeja el volumen: Volumen = Masa / Densidad.
```

### 6 — La densidad es una propiedad intensiva

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad es una propiedad intensiva: no depende de la cantidad de material, sólo del tipo de sustancia."

explicacion: |
  Un vaso de agua y una pileta tienen distinta masa y volumen, pero la
  misma densidad.
```

### 7 — Qué significa que una propiedad sea intensiva

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Qué significa que la densidad sea una propiedad 'intensiva'?"
tipo: mc
opciones_explicitas:
  - "Que no cambia según la cantidad de sustancia que haya"
  - "Que sólo se puede medir con instrumentos muy precisos"
  - "Que cambia constantemente con el tiempo"
respuesta: "Que no cambia según la cantidad de sustancia que haya"

explicacion: |
  Por eso sirve para identificar de qué sustancia está hecho algo.
```

### 8 — Dos objetos de la misma sustancia tienen igual densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad"]

respuesta: verdadero
tipo: vf

enunciado: "Dos objetos hechos exactamente de la misma sustancia tienen la misma densidad, sin importar el tamaño de cada uno."

explicacion: |
  La densidad depende del tipo de sustancia, no de cuánto material haya.
```

### 9 — Unidades comunes de densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Cuáles son unidades comunes para medir densidad?"
tipo: mc
opciones_explicitas:
  - "g/cm³ o kg/m³"
  - "cm² o m²"
  - "solamente kg"
respuesta: "g/cm³ o kg/m³"

explicacion: |
  Siempre es una masa dividida un volumen.
```

### 10 — 1 mL equivale a 1 cm³

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "1 mililitro (mL) equivale exactamente a 1 centímetro cúbico (cm³), así que g/mL y g/cm³ son la misma unidad de densidad."

explicacion: |
  Es la misma equivalencia ya vista en
  `../../matematica/volumen-y-capacidad/`.
```

### 11 — Problema: densidad en g/mL

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen: random(5, 40)
  densidad_real: uno_de([1, 2, 3])
  masa: volumen * densidad_real

respuesta: densidad_real
tipo: input
tolerancia_abs: 0

enunciado: "Un líquido de {masa} g ocupa {volumen} mL. ¿Cuál es su densidad (en g/mL)?"

pasos:
  - "{masa} ÷ {volumen} = {densidad_real} g/mL"

explicacion: |
  Como 1 mL = 1 cm³, el cálculo es idéntico al de g/cm³.
```

### 12 — Densidad del agua

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Cuál es aproximadamente la densidad del agua líquida?"
tipo: mc
opciones_explicitas:
  - "1 g/cm³"
  - "10 g/cm³"
  - "0,1 g/cm³"
respuesta: "1 g/cm³"

explicacion: |
  Es el valor de referencia clásico: 1 g de agua ocupa 1 cm³.
```

### 13 — Si un objeto es menos denso que el líquido, flota

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "flotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si la densidad de un objeto es menor que la densidad del líquido en el que se sumerge, ese objeto flota."

explicacion: |
  Es el caso del corcho o el aceite en agua.
```

### 14 — Problema: predecir flotación comparando densidades

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "flotacion", "problema"]

variables:
  densidad_objeto: uno_de([0.5, 0.7, 0.9])

respuesta: verdadero
tipo: vf

enunciado: "Un objeto tiene una densidad de {densidad_objeto} g/cm³. Se lo sumerge en agua (densidad 1 g/cm³). ¿Flota?"

explicacion: |
  {densidad_objeto} g/cm³ es menor que 1 g/cm³ (la densidad del agua):
  el objeto flota.
```

### 15 — Problema: predecir hundimiento comparando densidades

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "flotacion", "problema"]

variables:
  densidad_objeto: uno_de([2, 5, 7, 11])

respuesta: falso
tipo: vf

enunciado: "Un objeto tiene una densidad de {densidad_objeto} g/cm³. Se lo sumerge en agua (densidad 1 g/cm³). ¿Flota?"

explicacion: |
  {densidad_objeto} g/cm³ es mayor que 1 g/cm³: el objeto se hunde.
```

### 16 — Por qué el hielo flota en el agua

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "flotacion"]

enunciado: "¿Por qué el hielo flota en el agua líquida?"
tipo: mc
opciones_explicitas:
  - "Porque el hielo es menos denso que el agua líquida"
  - "Porque el hielo pesa menos, sin importar su volumen"
  - "El hielo en realidad no flota, se hunde lentamente"
respuesta: "Porque el hielo es menos denso que el agua líquida"

explicacion: |
  Es una excepción notable: la mayoría de las sustancias son más densas
  en estado sólido que líquido, pero el agua se expande al congelarse.
```

### 17 — La densidad ayuda a detectar falsificaciones

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar la densidad medida de un objeto con la densidad conocida de un metal (por ejemplo, el oro) permite detectar si es una falsificación."

explicacion: |
  Si la densidad medida no coincide con la del oro puro (≈19,3 g/cm³),
  el objeto no es oro puro.
```

### 18 — Problema: identificar una sustancia por su densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "problema"]

variables:
  volumen: uno_de([5, 10, 20, 25])

respuesta: "Aluminio"
tipo: mc
opciones_explicitas:
  - "Aluminio"
  - "Hierro"
  - "Plomo"

enunciado: "Un bloque metálico de {volumen} cm³ tiene una masa de {2.7 * volumen} g. Sabiendo que el aluminio tiene densidad ≈2,7 g/cm³, el hierro ≈7,87 g/cm³ y el plomo ≈11,3 g/cm³, ¿de qué metal se trata?"

explicacion: |
  {2.7 * volumen} g ÷ {volumen} cm³ = 2,7 g/cm³, que coincide con la
  densidad del aluminio.
```

### 19 — Ordenar: pasos para calcular la densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "ordenar"]

enunciado: "Ordená los pasos para calcular la densidad de un objeto."
tipo: ordenar
opciones_explicitas:
  - "Dividir la masa por el volumen"
  - "Medir la masa del objeto (con una balanza)"
  - "Medir el volumen del objeto (por ejemplo, con una probeta)"
respuesta_orden: ["Medir la masa del objeto (con una balanza)", "Medir el volumen del objeto (por ejemplo, con una probeta)", "Dividir la masa por el volumen"]
explicacion: |
  Densidad = Masa / Volumen, en ese orden de cálculo.
```

### 20 — 1000 kg/m³ equivale a 1 g/cm³

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "1000 kg/m³ equivale a 1 g/cm³ (ambas expresan la densidad del agua)."

explicacion: |
  1 m³ = 1 000 000 cm³ y 1 kg = 1000 g: al dividir, los ceros se
  simplifican y da la misma densidad expresada en otra unidad.
```

### 21 — La densidad no depende de la forma del objeto

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad de una sustancia no depende de la forma que tenga el objeto (una esfera o un cubo de la misma sustancia tienen igual densidad)."

explicacion: |
  Sólo depende del tipo de sustancia, no de la forma ni el tamaño.
```

### 22 — Problema: comparar densidades de dos objetos con igual masa

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "problema"]

variables:
  masa: uno_de([20, 40, 60, 80])
  volumen_a: uno_de([2, 4])
  volumen_b: uno_de([8, 10])

respuesta: "El objeto A"
tipo: mc
opciones_explicitas:
  - "El objeto A"
  - "El objeto B"
  - "Tienen la misma densidad"

enunciado: "Dos objetos tienen la misma masa, {masa} g. El objeto A ocupa {volumen_a} cm³, y el objeto B ocupa {volumen_b} cm³ (un volumen mayor). ¿Cuál de los dos tiene mayor densidad?"

explicacion: |
  A igual masa, a menor volumen mayor densidad: el objeto A, al ocupar
  menos espacio con la misma masa, es más denso.
```

### 23 — Densidad relaciona masa y volumen, no masa y peso

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La densidad se calcula dividiendo la masa de un objeto por su peso."

explicacion: |
  La densidad relaciona masa y VOLUMEN, no masa y peso — el peso ni
  siquiera entra en la fórmula.
```

### 24 — Problema: densidad con decimales

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "problema"]

variables:
  masa: random(10, 200)
  volumen: random(3, 25)

respuesta: redondear(masa / volumen, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un mineral tiene una masa de {masa} g y ocupa un volumen de {volumen} cm³. ¿Cuál es su densidad (en g/cm³)? Redondeá a 2 decimales."

pasos:
  - "{masa} ÷ {volumen} = {redondear(masa / volumen, 2)} g/cm³"

explicacion: |
  No siempre la división da un número exacto: en ese caso se redondea.
```

### 25 — El oro es más denso que el hierro

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El oro (≈19,3 g/cm³) es más denso que el hierro (≈7,87 g/cm³)."

explicacion: |
  A igual volumen, un bloque de oro pesa más del doble que uno de
  hierro.
```

### 26 — Cierre: para qué sirve la densidad

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer la densidad de una sustancia?"
tipo: mc
opciones_explicitas:
  - "Para identificar de qué material está hecho un objeto y predecir si flota o se hunde en un líquido"
  - "Sólo sirve para calcular el peso de un objeto"
  - "Sólo aplica a los metales"
respuesta: "Para identificar de qué material está hecho un objeto y predecir si flota o se hunde en un líquido"

explicacion: |
  Desde detectar falsificaciones hasta explicar por qué el hielo flota,
  la densidad conecta masa, volumen y comportamiento en fluidos.
```
