# Vida Cotidiana — Etiqueta nutricional: azúcares agregados (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Octógono "EXCESO EN AZÚCARES"
> (Ley 27.642): azúcares ≥ 10% de las calorías del producto (20% en
> transición para PyMEs). 1 g de azúcar ≈ 4 kcal.

---

### 1 — Diferencia entre azúcares totales y agregados

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre \"azúcares totales\" y \"azúcares agregados\" en una etiqueta?"
tipo: mc
opciones_explicitas:
  - "Los totales incluyen los naturales del alimento más los agregados; los agregados son sólo los que se sumaron al procesarlo"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "Los agregados son los naturales, y los totales son sólo los que se sumaron al procesarlo"
respuesta: "Los totales incluyen los naturales del alimento más los agregados; los agregados son sólo los que se sumaron al procesarlo"

explicacion: |
  Los azúcares totales son la suma de ambos; los agregados son
  únicamente lo que se sumó durante la elaboración del producto.
```

### 2 — Los azúcares totales incluyen los naturales

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los azúcares totales de un producto incluyen tanto los que el alimento ya tenía naturalmente (como la fructosa de una fruta) como los que se agregaron al procesarlo."

explicacion: |
  Es la suma completa, sin distinguir el origen de cada azúcar.
```

### 3 — Los azúcares agregados son sólo los del procesamiento

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los azúcares agregados son sólo la azúcar que se sumó durante el procesamiento del producto, no la que el alimento ya tenía de forma natural."

explicacion: |
  Azúcar de mesa, jarabe de maíz de alta fructosa o miel agregada son
  ejemplos típicos de azúcares agregados.
```

### 4 — Calcular los azúcares agregados

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "calculo"]

variables:
  azucares_naturales: random(2, 15)
  azucares_agregados_real: random(3, 20)
  azucares_totales: azucares_naturales + azucares_agregados_real

respuesta: azucares_totales - azucares_naturales
tipo: input
tolerancia_abs: 0.1

enunciado: "Un producto tiene {azucares_totales} g de azúcares totales por porción, de los cuales {azucares_naturales} g son naturales del alimento. ¿Cuántos gramos son azúcares agregados?"

explicacion: |
  Se restan los azúcares naturales del total, para obtener sólo los
  agregados.
```

### 5 — Se declaran en gramos, sin %VD

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, los azúcares (totales y agregados) se declaran en gramos en la etiqueta, aunque no tienen un %VD definido como otros nutrientes."

explicacion: |
  Es una excepción frente a nutrientes como sodio, grasas o proteínas,
  que sí tienen un %VD calculable.
```

### 6 — La recomendación de la OMS

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La Organización Mundial de la Salud recomienda que los azúcares libres/agregados representen menos del 10% de las calorías diarias totales, con un beneficio adicional si se baja a menos del 5%."

explicacion: |
  Es la referencia internacional que también usa la reglamentación
  argentina del octógono de azúcares.
```

### 7 — Calcular el límite de azúcar al 10%

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "avanzado"
  tags: ["azucares_agregados", "calculo"]

variables:
  calorias_diarias: uno_de([1800, 2000, 2200, 2500])

respuesta: (calorias_diarias * 0.10) / 4
tipo: input
tolerancia_abs: 1

enunciado: "Para una dieta de {calorias_diarias} kcal diarias, ¿cuántos gramos de azúcar representan el límite del 10% recomendado por la OMS? (1 g de azúcar ≈ 4 kcal)"

pasos:
  - "Calorías del 10%: {calorias_diarias} × 0,10 = {calorias_diarias * 0.10}"
  - "Gramos: {calorias_diarias * 0.10} ÷ 4"

explicacion: |
  Se calcula el 10% de las calorías diarias, y se divide por 4 (kcal que
  aporta cada gramo de azúcar) para pasar a gramos.
```

### 8 — Calcular el límite de azúcar al 5%

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "avanzado"
  tags: ["azucares_agregados", "calculo"]

variables:
  calorias_diarias: uno_de([1800, 2000, 2200, 2500])

respuesta: (calorias_diarias * 0.05) / 4
tipo: input
tolerancia_abs: 1

enunciado: "Para una dieta de {calorias_diarias} kcal diarias, ¿cuántos gramos de azúcar representan el límite más estricto del 5% recomendado por la OMS?"

explicacion: |
  Es la mitad del límite del 10%, calculado de la misma forma.
```

### 9 — Un gramo de azúcar aporta 4 kcal

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un gramo de azúcar aporta aproximadamente 4 kcal, el mismo valor energético que cualquier otro carbohidrato."

explicacion: |
  Es el factor de conversión que se usa para pasar de gramos de azúcar
  a calorías.
```

### 10 — Calcular el % de calorías que viene del azúcar

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "avanzado"
  tags: ["azucares_agregados", "calculo"]

variables:
  azucar_g: random(5, 40)
  calorias_totales: random(150, 500)

respuesta: (azucar_g * 4 / calorias_totales) * 100
tipo: input
tolerancia_abs: 1

enunciado: "Un producto tiene {azucar_g} g de azúcar y {calorias_totales} kcal en total. ¿Qué porcentaje de esas calorías viene del azúcar?"

pasos:
  - "% = ({azucar_g} × 4 ÷ {calorias_totales}) × 100"

explicacion: |
  Se convierten los gramos de azúcar a calorías (× 4), y se calcula qué
  porción representan del total.
```

### 11 — El octógono aplica al 10% de las calorías

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El octógono \"EXCESO EN AZÚCARES\" de la Ley 27.642 aplica cuando los azúcares aportan 10% o más de las calorías totales del producto."

explicacion: |
  Es el mismo umbral que recomienda la OMS para el consumo diario,
  aplicado acá al producto en sí.
```

### 12 — El límite de transición para PyMEs

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Durante un período de transición, el límite para pequeñas y medianas empresas (PyMEs) fue del 20% de las calorías, en vez del 10% general."

explicacion: |
  Fue una excepción temporal para dar más tiempo de adaptación a las
  empresas más chicas.
```

### 13 — Verificar si un producto lleva el octógono de azúcares

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "avanzado"
  tags: ["azucares_agregados", "problema"]

variables:
  azucar_g: random(5, 40)
  calorias_totales: random(150, 500)
  porcentaje_azucar: (azucar_g * 4 / calorias_totales) * 100

respuesta: (porcentaje_azucar >= 10)
tipo: vf

enunciado: "Un producto tiene {azucar_g} g de azúcar y {calorias_totales} kcal en total (el azúcar representa {redondear(porcentaje_azucar, 1)}% de esas calorías). ¿Debería llevar el octógono de \"EXCESO EN AZÚCARES\"?"

explicacion: |
  El umbral general es que los azúcares representen 10% o más de las
  calorías totales del producto.
```

### 14 — Comparar dos productos por % de calorías de azúcar

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "avanzado"
  tags: ["azucares_agregados", "comparacion"]

variables:
  azucar_g: random(10, 20)
  calorias_a: random(100, 200)
  calorias_b: random(400, 600)

respuesta: (((azucar_g * 4 / calorias_a) * 100) > ((azucar_g * 4 / calorias_b) * 100))
tipo: vf

enunciado: "Producto A: {azucar_g} g de azúcar en {calorias_a} kcal totales. Producto B: los mismos {azucar_g} g de azúcar, pero en {calorias_b} kcal totales. ¿El producto A tiene un mayor porcentaje de sus calorías provenientes del azúcar?"

explicacion: |
  Con la misma cantidad de azúcar mas pocas calorías totales, el
  porcentaje que representa el azúcar es mayor.
```

### 15 — Fruta natural no es lo mismo que azúcar agregada

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fruta entera con azúcares totales altos (todos naturales, sin nada agregado) no es nutricionalmente lo mismo que un producto procesado con azúcar agregada además de la que ya tenía."

explicacion: |
  Por eso la distinción entre azúcares totales y agregados importa más
  allá del número total en gramos.
```

### 16 — Ejemplo de azúcar agregada

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de azúcar agregada en un producto procesado?"
tipo: mc
opciones_explicitas:
  - "Jarabe de maíz de alta fructosa sumado durante la elaboración"
  - "La fructosa que ya tiene naturalmente una manzana entera"
  - "La lactosa que ya tiene naturalmente la leche sin procesar"
respuesta: "Jarabe de maíz de alta fructosa sumado durante la elaboración"

explicacion: |
  Las otras dos opciones son azúcares naturales del alimento, no
  agregados durante un procesamiento.
```

### 17 — Verificar un cálculo de % de azúcar (con error a veces)

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados", "verificacion"]

variables:
  azucar_g: random(5, 40)
  calorias_totales: random(150, 500)
  correcto: (azucar_g * 4 / calorias_totales) * 100
  error: uno_de([0, 0, 0, 8, -8])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Producto con {azucar_g} g de azúcar y {calorias_totales} kcal totales, porcentaje de calorías de azúcar informado: {redondear(mostrado, 1)}%."

explicacion: |
  Se vuelve a calcular (gramos de azúcar × 4 ÷ calorías totales) × 100 y
  se compara con el valor informado.
```

### 18 — Completar los azúcares totales

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "intermedio"
  tags: ["azucares_agregados"]

variables:
  azucares_naturales: random(2, 15)
  azucares_agregados: random(3, 20)
  azucares_totales: azucares_naturales + azucares_agregados

tipo: completar
enunciado: "Un producto tiene {azucares_naturales} g de azúcares naturales y {azucares_agregados} g de azúcares agregados. Completá: ___ (azúcares totales) = {azucares_naturales} (naturales) + {azucares_agregados} (agregados)."
respuestas_validas:
  - azucares_totales

explicacion: |
  Los azúcares totales son la suma de los naturales más los agregados.
```

### 19 — Ordenar productos por % de calorías de azúcar

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "orden"]

tipo: ordenar
enunciado: "Ordená estos productos de menor a mayor porcentaje de calorías provenientes del azúcar."
opciones_explicitas:
  - "45% de las calorías del azúcar"
  - "5% de las calorías del azúcar"
  - "20% de las calorías del azúcar"
respuesta_orden: ["5% de las calorías del azúcar", "20% de las calorías del azúcar", "45% de las calorías del azúcar"]

explicacion: |
  Ordenar directamente por el porcentaje ya calculado.
```

### 20 — Consumo excesivo de azúcar y salud

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Superar de forma habitual el límite de azúcar recomendado por la OMS se asocia, según el consenso de salud pública, a un mayor riesgo de problemas como caries, obesidad y diabetes tipo 2."

explicacion: |
  Es la base de por qué existe una recomendación de límite diario y un
  octógono de advertencia para el exceso de azúcares.
```

### 21 — El octógono evita el cálculo al consumidor

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo del octógono de \"EXCESO EN AZÚCARES\" es dar una señal directa y visible, sin que el consumidor tenga que calcular el porcentaje de calorías de azúcar por su cuenta."

explicacion: |
  Es el mismo principio que el resto del etiquetado frontal: simplificar
  la decisión en la góndola.
```

### 22 — Azúcares agregados (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_azucares_agregados"
  nivel: "basico"
  tags: ["azucares_agregados", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los azúcares agregados son sólo los sumados al procesar un producto (no los naturales del alimento); la OMS recomienda que los azúcares no superen el 10% de las calorías diarias, y en Argentina el mismo umbral define el octógono de \"EXCESO EN AZÚCARES\"."

explicacion: |
  Es la idea central de todo el tema.
```
