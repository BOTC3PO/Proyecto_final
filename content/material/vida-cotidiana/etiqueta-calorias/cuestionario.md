# Vida Cotidiana — Etiqueta nutricional: calorías (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Octógono "EXCESO EN CALORÍAS"
> (Ley 27.642): más de 300 kcal/100 g en sólidos, o 50 kcal o más/100 ml
> en líquidos.

---

### 1 — Qué mide la caloría en una etiqueta

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

enunciado: "En una etiqueta de alimentos, ¿qué mide la caloría (kcal)?"
tipo: mc
opciones_explicitas:
  - "Cuánta energía aporta ese alimento al comerlo"
  - "Cuánto pesa la porción declarada"
  - "Cuántos ingredientes distintos tiene el producto"
respuesta: "Cuánta energía aporta ese alimento al comerlo"

explicacion: |
  Es la unidad estándar para expresar el aporte energético de un
  alimento.
```

### 2 — Equivalencia con kilojoules

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 kcal equivale aproximadamente a 4,184 kJ (kilojoules), la otra unidad que a veces aparece en las etiquetas."

explicacion: |
  Algunas etiquetas declaran el valor energético en las dos unidades.
```

### 3 — Las calorías son por porción

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las calorías que declara la tabla de información nutricional son por porción, no necesariamente las de todo el envase."

explicacion: |
  Si el envase tiene varias porciones, hay que multiplicar para saber
  cuánto aporta el envase completo.
```

### 4 — Calcular las calorías totales del envase

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "calculo"]

variables:
  calorias_porcion: random(80, 300)
  porciones_envase: random(2, 8)

respuesta: calorias_porcion * porciones_envase
tipo: input
tolerancia_abs: 0

enunciado: "Un producto declara {calorias_porcion} kcal por porción, y el envase tiene {porciones_envase} porciones. ¿Cuántas kcal tiene el envase completo?"

explicacion: |
  Se multiplican las calorías de una porción por la cantidad de
  porciones del envase.
```

### 5 — Despejar las calorías por porción

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "calculo"]

variables:
  calorias_porcion: random(80, 300)
  porciones_envase: random(2, 8)
  calorias_envase: calorias_porcion * porciones_envase

respuesta: calorias_porcion
tipo: input
tolerancia_abs: 0.1

enunciado: "Un envase con {porciones_envase} porciones tiene un total de {calorias_envase} kcal. ¿Cuántas kcal tiene cada porción?"

explicacion: |
  Se divide el total de calorías del envase por la cantidad de
  porciones.
```

### 6 — Calcular las calorías por 100 g

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "avanzado"
  tags: ["etiqueta_nutricional", "calculo"]

variables:
  calorias_porcion: random(80, 400)
  gramos_porcion: random(20, 100)

respuesta: (calorias_porcion / gramos_porcion) * 100
tipo: input
tolerancia_abs: 1

enunciado: "Una porción de {gramos_porcion} g de un producto tiene {calorias_porcion} kcal. ¿Cuántas kcal tiene ese producto cada 100 g?"

pasos:
  - "kcal/100g = ({calorias_porcion} ÷ {gramos_porcion}) × 100"

explicacion: |
  Se expresa la densidad calórica en la unidad estándar de 100 g, para
  poder comparar contra otros productos.
```

### 7 — Comparar por 100 g, no por porción

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para comparar la densidad calórica de dos productos con tamaños de porción distintos, conviene mirar las calorías por 100 g (o 100 ml), no las calorías \"por porción\" de cada uno."

explicacion: |
  Si cada marca declara un tamaño de porción distinto, comparar
  directamente \"por porción\" puede ser engañoso.
```

### 8 — El octógono es parte de la Ley 27.642

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el sello de advertencia en forma de octógono negro en el frente de los envases es parte de la Ley 27.642 (Ley de Etiquetado Frontal)."

explicacion: |
  Advierte sobre el exceso de nutrientes críticos: calorías, azúcares,
  sodio, grasas totales y grasas saturadas.
```

### 9 — ANMAT fiscaliza el etiquetado frontal

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica) es el organismo que fiscaliza el cumplimiento del etiquetado frontal en Argentina."

explicacion: |
  Es el mismo tipo de organismo regulador que ya se vio con la
  Superintendencia de Seguros — cada área tiene el suyo.
```

### 10 — Límite de exceso de calorías en sólidos

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El octógono \"EXCESO EN CALORÍAS\" aplica a productos sólidos con más de 300 kcal cada 100 g."

explicacion: |
  Es el límite que fija la Resolución Conjunta 7/2022, basada en el
  modelo de perfil de nutrientes de la OPS/OMS.
```

### 11 — Límite de exceso de calorías en líquidos

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El octógono \"EXCESO EN CALORÍAS\" aplica a productos líquidos con 50 kcal o más cada 100 ml."

explicacion: |
  El límite para líquidos es distinto (y proporcionalmente más exigente)
  que el de los sólidos.
```

### 12 — Verificar si un sólido lleva el octógono

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "avanzado"
  tags: ["etiqueta_nutricional", "problema"]

variables:
  calorias_100g: random(280, 450)

respuesta: (calorias_100g > 300)
tipo: vf

enunciado: "Un producto sólido tiene {calorias_100g} kcal cada 100 g. ¿Debería llevar el octógono de \"EXCESO EN CALORÍAS\"?"

explicacion: |
  El límite para sólidos es más de 300 kcal por 100 g.
```

### 13 — Verificar si un líquido lleva el octógono

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "avanzado"
  tags: ["etiqueta_nutricional", "problema"]

variables:
  calorias_100ml: random(20, 80)

respuesta: (calorias_100ml >= 50)
tipo: vf

enunciado: "Una bebida tiene {calorias_100ml} kcal cada 100 ml. ¿Debería llevar el octógono de \"EXCESO EN CALORÍAS\"?"

explicacion: |
  El límite para líquidos es 50 kcal o más por 100 ml — bastante más
  bajo que el de los sólidos.
```

### 14 — Problema: calcular kcal/100g y verificar el octógono

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "avanzado"
  tags: ["etiqueta_nutricional", "problema"]

variables:
  calorias_porcion: random(150, 500)
  gramos_porcion: random(30, 100)
  calorias_100g: (calorias_porcion / gramos_porcion) * 100

respuesta: (calorias_100g > 300)
tipo: vf

enunciado: "Un producto sólido declara {calorias_porcion} kcal por una porción de {gramos_porcion} g (equivale a {redondear(calorias_100g, 1)} kcal cada 100 g). ¿Debería llevar el octógono de \"EXCESO EN CALORÍAS\"?"

pasos:
  - "kcal/100g = ({calorias_porcion} ÷ {gramos_porcion}) × 100 = {redondear(calorias_100g, 1)}"

explicacion: |
  Hay que convertir primero a kcal/100 g, porque el límite se aplica
  sobre esa unidad, no sobre la porción declarada.
```

### 15 — El límite se calcula sobre 100 g/ml, no sobre la porción

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El límite del octógono de calorías se calcula sobre 100 g o 100 ml del producto, no sobre el tamaño de porción que cada marca eligió declarar."

explicacion: |
  Por eso conviene saber leer el valor por 100 g/ml, más allá del que
  aparece \"por porción\" en la etiqueta.
```

### 16 — Misma caloría por porción, distinta densidad calórica

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "avanzado"
  tags: ["etiqueta_nutricional", "comparacion"]

variables:
  calorias_porcion: random(150, 250)
  gramos_a: random(20, 40)
  gramos_b: random(60, 100)

respuesta: ((calorias_porcion / gramos_a) * 100 > (calorias_porcion / gramos_b) * 100)
tipo: vf

enunciado: "Producto A: {calorias_porcion} kcal en una porción de {gramos_a} g. Producto B: las mismas {calorias_porcion} kcal, pero en una porción de {gramos_b} g. ¿El producto A tiene mayor densidad calórica (más kcal por 100 g)?"

explicacion: |
  Con las mismas calorías repartidas en menos gramos, la densidad
  calórica por 100 g es mayor.
```

### 17 — Ordenar productos por densidad calórica

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "orden"]

tipo: ordenar
enunciado: "Ordená estos productos de menor a mayor kcal cada 100 g."
opciones_explicitas:
  - "Producto con 250 kcal/100g"
  - "Producto con 90 kcal/100g"
  - "Producto con 400 kcal/100g"
respuesta_orden: ["Producto con 90 kcal/100g", "Producto con 250 kcal/100g", "Producto con 400 kcal/100g"]

explicacion: |
  Ordenar directamente por el valor de kcal/100 g ya declarado.
```

### 18 — Verificar un cálculo de calorías totales (con error a veces)

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional", "verificacion"]

variables:
  calorias_porcion: random(80, 300)
  porciones_envase: random(2, 8)
  correcto: calorias_porcion * porciones_envase
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Producto con {calorias_porcion} kcal por porción, envase de {porciones_envase} porciones, total informado: {mostrado} kcal."

explicacion: |
  Se vuelve a multiplicar las calorías por porción por la cantidad de
  porciones, y se compara.
```

### 19 — Completar la cantidad de porciones

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "intermedio"
  tags: ["etiqueta_nutricional"]

variables:
  calorias_porcion: random(80, 300)
  porciones_envase: random(2, 8)
  calorias_envase: calorias_porcion * porciones_envase

tipo: completar
enunciado: "Un envase tiene {calorias_envase} kcal en total, y cada porción tiene {calorias_porcion} kcal. Completá: ___ (cantidad de porciones) = {calorias_envase} (total) ÷ {calorias_porcion} (por porción)."
respuestas_validas:
  - porciones_envase

explicacion: |
  Se divide el total de calorías del envase por las calorías de cada
  porción.
```

### 20 — Subestimar el consumo real

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Mirar sólo las \"calorías por porción\" sin fijarse cuántas porciones tiene realmente el envase puede llevar a subestimar cuánto se consume si se come más de una porción."

explicacion: |
  Es un error común: comer todo el envase pensando que las calorías
  declaradas ya eran las del envase completo.
```

### 21 — El octógono ahorra tener que calcular

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El octógono de \"EXCESO EN CALORÍAS\" permite reconocer un producto con exceso de calorías con sólo mirarlo, sin tener que calcular las kcal por 100 g uno mismo."

explicacion: |
  Es justamente el objetivo del etiquetado frontal: dar una señal
  directa y regulada, sin exigirle el cálculo al consumidor.
```

### 22 — Etiqueta nutricional: calorías (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_calorias"
  nivel: "basico"
  tags: ["etiqueta_nutricional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las calorías de una etiqueta se declaran por porción, conviene compararlas por 100 g/ml entre productos, y en Argentina un octógono avisa cuando un sólido supera 300 kcal/100g o un líquido supera 50 kcal/100ml."

explicacion: |
  Es la idea central de todo el tema.
```
