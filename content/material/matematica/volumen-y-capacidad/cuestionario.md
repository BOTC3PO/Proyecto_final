# Matemática — Volumen y capacidad (cuestionario, 30 preguntas VBLang)

> Tema: `M4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el volumen

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el volumen de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "La medida del espacio que ocupa en tres dimensiones"
  - "La medida de su contorno"
  - "La cantidad de caras que tiene"
respuesta: "La medida del espacio que ocupa en tres dimensiones"

explicacion: |
  Se mide en unidades cúbicas: cm³, m³.
```

### 2 — El cubo unitario

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el cubo unitario que se usa para medir volumen?"
tipo: mc
opciones_explicitas:
  - "Un cubo de 1 unidad de lado, con volumen 1"
  - "Cualquier cubo, sin importar su tamaño"
  - "Un cubo con 6 caras cuadradas"
respuesta: "Un cubo de 1 unidad de lado, con volumen 1"

explicacion: |
  Medir un volumen es, en el fondo, contar cuántos cubos unitarios entran
  adentro del cuerpo.
```

### 3 — Volumen de un prisma rectangular

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 20)
  a: random(2, 15)
  h: random(2, 10)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de una caja de {l} cm de largo, {a} cm de ancho y {h} cm de alto?"

pasos:
  - "{l} × {a} × {h} = {l * a * h} cm³"

explicacion: |
  El volumen de un prisma rectangular es largo × ancho × alto.
```

### 4 — Volumen de un cubo

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 15)

respuesta: l * l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de un cubo de {l} cm de lado?"

pasos:
  - "{l} × {l} × {l} = {l * l * l} cm³"

explicacion: |
  El volumen del cubo es el lado elevado al cubo.
```

### 5 — Altura de una caja a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 10)
  a: random(2, 8)
  h: random(2, 10)
  volumen: l * a * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Una caja de {l} cm de largo y {a} cm de ancho tiene {volumen} cm³ de volumen. ¿Cuánto mide su altura?"

pasos:
  - "{volumen} ÷ ({l} × {a}) = {volumen / (l * a)} cm"

explicacion: |
  La altura se despeja dividiendo el volumen por el área de la base
  (largo × ancho).
```

### 6 — Lado de un cubo a partir del volumen

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 10)
  volumen: l * l * l

respuesta: l
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cubo tiene {volumen} cm³ de volumen. ¿Cuánto mide su lado?"

pasos:
  - "raiz({volumen}, 3) = {raiz(volumen, 3)} cm"

explicacion: |
  El lado es la raíz cúbica del volumen (la operación inversa de
  elevarlo al cubo).
```

### 7 — Qué es la capacidad

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "vocabulario"]

enunciado: "¿Qué es la capacidad de un recipiente?"
tipo: mc
opciones_explicitas:
  - "Cuánto líquido puede contener"
  - "Cuánto pesa el recipiente vacío"
  - "El área de su superficie exterior"
respuesta: "Cuánto líquido puede contener"

explicacion: |
  Se mide en litros y sus derivados (ml).
```

### 8 — 1 litro es 1 dm³

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro equivale exactamente a 1 decímetro cúbico (1 dm³)."

explicacion: |
  Es la equivalencia central entre volumen y capacidad.
```

### 9 — 1 ml es 1 cm³

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 mililitro equivale exactamente a 1 centímetro cúbico (1 cm³)."

explicacion: |
  Es la misma equivalencia que 1 l = 1 dm³, pero a escala mil veces más
  chica.
```

### 10 — Convertir cm³ a ml

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  cm3: random(50, 900)

respuesta: cm3
tipo: input
tolerancia_abs: 0

enunciado: "Un envase tiene un volumen de {cm3} cm³. ¿Cuántos ml de líquido le entran?"

explicacion: |
  1 cm³ = 1 ml: el número no cambia, sólo el nombre de la unidad.
```

### 11 — Convertir cm³ a litros

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  litros: random(1, 9)
  cm3: litros * 1000

respuesta: litros
tipo: input
tolerancia_abs: 0.01

enunciado: "Un recipiente tiene un volumen de {cm3} cm³. ¿Cuántos litros le entran?"

pasos:
  - "{cm3} cm³ = {cm3} ml = {cm3 / 1000} l (porque 1 l = 1000 ml)"

explicacion: |
  Se convierte cm³ a ml (1 a 1) y después ml a litros (÷1000).
```

### 12 — Convertir m³ a litros

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["capacidad", "conversion"]

variables:
  m3: random(1, 8)

respuesta: m3 * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque tiene {m3} m³ de volumen. ¿Cuántos litros de agua puede contener?"

pasos:
  - "1 m³ = 1000 litros, así que {m3} × 1000 = {m3 * 1000} litros"

explicacion: |
  1 metro cúbico equivale a 1000 litros.
```

### 13 — Problema: capacidad de una pecera

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "capacidad", "problema"]

variables:
  l: random(20, 60)
  a: random(15, 40)
  h: random(15, 30)

respuesta: (l * a * h) / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pecera con forma de caja mide {l} cm de largo, {a} cm de ancho y {h} cm de alto. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l} × {a} × {h} = {l * a * h} cm³. Como 1000 cm³ = 1 litro, {l * a * h} ÷ 1000 = {(l * a * h) / 1000} litros."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros usando la
  equivalencia 1000 cm³ = 1 litro.
```

### 14 — Problema: volumen de una caja de zapatos

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "problema"]

variables:
  l: random(25, 35)
  a: random(15, 20)
  h: random(10, 15)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "Una caja de zapatos mide {l} cm × {a} cm × {h} cm. ¿Cuál es su volumen?"

explicacion: |
  Se aplica directamente largo × ancho × alto.
```

### 15 — Problema: cuántos cubos entran en una caja

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "problema"]

variables:
  l: random(2, 6)
  a: random(2, 6)
  h: random(2, 6)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos cubos de 1 cm de lado entran en una caja de {l} cm × {a} cm × {h} cm, si se apilan sin dejar huecos?"

explicacion: |
  Cada cubo de 1 cm de lado ocupa 1 cm³, así que la cantidad de cubos
  coincide con el volumen de la caja en cm³.
```

### 16 — Comparar volúmenes de dos cajas

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l1: random(2, 10)
  a1: random(2, 10)
  h1: random(2, 10)
  l2: random(2, 10)
  a2: random(2, 10)
  h2: random(2, 10)

restricciones:
  - (l1 * a1 * h1) != (l2 * a2 * h2)

respuesta: (l1 * a1 * h1) > (l2 * a2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen una caja de {l1}×{a1}×{h1} cm, que otra de {l2}×{a2}×{h2} cm?"

pasos:
  - "Caja 1: {l1 * a1 * h1} cm³. Caja 2: {l2 * a2 * h2} cm³."

explicacion: |
  Se calcula el volumen de cada una y se compara.
```

### 17 — El volumen se mide en unidades cúbicas

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen se mide en unidades cúbicas, como cm³ o m³."

explicacion: |
  Es consecuencia de medir tres dimensiones a la vez (largo × ancho ×
  alto).
```

### 18 — Volumen y área NO son lo mismo

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: falso
tipo: vf

enunciado: "El volumen y el área miden exactamente lo mismo, sólo que con distinto nombre."

explicacion: |
  El área mide superficie (2 dimensiones, unidades cuadradas); el volumen
  mide espacio (3 dimensiones, unidades cúbicas). Son magnitudes
  distintas.
```

### 19 — Un cubo es un caso particular de prisma rectangular

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cubo es un caso particular de prisma rectangular, donde los tres lados son iguales."

explicacion: |
  Por eso su fórmula (l³) es la misma que largo×ancho×alto, con los tres
  valores iguales.
```

### 20 — Elegir la fórmula correcta del prisma rectangular

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del volumen de un prisma rectangular?"
tipo: mc
opciones_explicitas:
  - "largo × ancho × alto"
  - "largo + ancho + alto"
  - "2 × (largo + ancho)"
respuesta: "largo × ancho × alto"

explicacion: |
  Se multiplican las tres dimensiones.
```

### 21 — Completar: volumen del cubo

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "completar"]

variables:
  l: random(2, 12)

tipo: completar
enunciado: "Completá: el volumen de un cubo de lado {l} cm es ___ cm³."
respuestas_validas:
  - l * l * l

explicacion: |
  Volumen = lado³.
```

### 22 — Completar: litros en un m³

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "completar"]

tipo: completar
enunciado: "Completá: 1 metro cúbico equivale a ___ litros."
respuestas_validas:
  - 1000

explicacion: |
  1 m³ = 1000 litros.
```

### 23 — Verificar un cálculo de volumen (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "verificacion"]

variables:
  l: random(2, 15)
  a: random(2, 12)
  h: random(2, 10)
  correcto: l * a * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de una caja de {l}×{a}×{h} cm es {mostrado} cm³."

explicacion: |
  Se recalcula largo × ancho × alto y se compara con lo mostrado.
```

### 24 — Problema: llenar un tanque cúbico

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "capacidad", "problema"]

variables:
  l_m: random(1, 4)

respuesta: (l_m * l_m * l_m) * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque cúbico mide {l_m} m de lado. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l_m}³ = {l_m * l_m * l_m} m³. Como 1 m³ = 1000 litros, {l_m * l_m * l_m} × 1000 = {(l_m * l_m * l_m) * 1000} litros."

explicacion: |
  Primero se calcula el volumen en m³, y después se convierte a litros.
```

### 25 — Doblar el lado de un cubo NO duplica el volumen

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "vocabulario"]

variables:
  l: random(2, 8)

respuesta: falso
tipo: vf

enunciado: "Si el lado de un cubo de {l} cm se duplica, su volumen también se duplica."

pasos:
  - "Volumen original: {l}³ = {l * l * l} cm³. Volumen con el lado doble: {2 * l}³ = {(2 * l) * (2 * l) * (2 * l)} cm³."

explicacion: |
  El volumen se multiplica por 2³ = 8, no por 2: al duplicar el lado, el
  volumen queda ocho veces más grande, no el doble.
```

### 26 — Problema: cuántas cajas chicas entran en una grande

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "problema"]

variables:
  l_chica: random(2, 5)
  factor: random(2, 4)
  l_grande: l_chica * factor

respuesta: factor * factor * factor
tipo: input
tolerancia_abs: 0

enunciado: "Una caja cúbica grande mide {l_grande} cm de lado y una caja cúbica chica mide {l_chica} cm de lado. ¿Cuántas cajas chicas entran exactamente en la grande?"

pasos:
  - "Volumen grande: {l_grande}³ = {l_grande * l_grande * l_grande} cm³. Volumen chica: {l_chica}³ = {l_chica * l_chica * l_chica} cm³. {l_grande * l_grande * l_grande} ÷ {l_chica * l_chica * l_chica} = {(l_grande * l_grande * l_grande) / (l_chica * l_chica * l_chica)}."

explicacion: |
  Se divide el volumen grande por el volumen chico.
```

### 27 — Elegir el recipiente de mayor capacidad

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

enunciado: "¿Cuál de estas capacidades es mayor?"
tipo: mc
opciones_explicitas:
  - "2000 ml"
  - "1 litro"
  - "500 ml"
respuesta: "2000 ml"

explicacion: |
  2000 ml = 2 litros, más que 1 litro o 500 ml.
```

### 28 — Ordenar capacidades de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["orden", "capacidad"]

tipo: ordenar
enunciado: "Ordená estas capacidades de menor a mayor: 3 litros, 250 ml, 1500 ml, 0,5 litros."
opciones_explicitas:
  - "3 litros"
  - "1500 ml"
  - "250 ml"
  - "0,5 litros"
respuesta_orden: ["250 ml", "0,5 litros", "1500 ml", "3 litros"]

pasos:
  - "En ml: 3 litros = 3000 ml; 250 ml; 1500 ml; 0,5 litros = 500 ml."

explicacion: |
  Conviene pasar todo a la misma unidad antes de comparar: 250 < 500 <
  1500 < 3000.
```

### 29 — Volumen de un cubo de 1 metro de lado

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "capacidad"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo de 1 metro de lado tiene un volumen de 1 m³. ¿A cuántos litros equivale eso?"

explicacion: |
  1 m³ = 1000 litros.
```

### 30 — Cierre: la relación volumen-capacidad

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular cuántos litros de líquido entran en un recipiente es, en el fondo, calcular su volumen y después convertirlo a litros."

explicacion: |
  Volumen y capacidad son el mismo concepto físico, medido con distintas
  unidades — por eso 1 dm³ = 1 litro.
```
