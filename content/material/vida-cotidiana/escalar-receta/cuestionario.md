# Vida Cotidiana — Escalar una receta (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `factor_escala =
> porciones_deseadas / porciones_original`, `nueva_cantidad =
> cantidad_original × factor_escala` — regla de tres directa.

---

### 1 — Qué es escalar una receta

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "vocabulario"]

enunciado: "¿Qué significa escalar una receta?"
tipo: mc
opciones_explicitas:
  - "Ajustar las cantidades de los ingredientes para hacer más o menos porciones que las originales"
  - "Cambiar los ingredientes de la receta por otros más baratos"
  - "Medir los ingredientes con una balanza en vez de con tazas"
respuesta: "Ajustar las cantidades de los ingredientes para hacer más o menos porciones que las originales"

explicacion: |
  El objetivo es mantener el mismo sabor y la misma textura, sólo que en
  otra cantidad de porciones.
```

### 2 — Es proporcionalidad directa

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Escalar una receta es una aplicación de la regla de tres directa: si se necesita el doble de porciones, se necesita el doble de cada ingrediente."

explicacion: |
  La cantidad de ingrediente y la cantidad de porciones son
  directamente proporcionales.
```

### 3 — Calcular el factor de escala

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "calculo"]

variables:
  porciones_original: random(2, 6)
  porciones_deseadas: random(7, 20)

respuesta: porciones_deseadas / porciones_original
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta rinde {porciones_original} porciones, y se quieren hacer {porciones_deseadas} porciones. ¿Cuál es el factor de escala?"

pasos:
  - "factor = porciones deseadas ÷ porciones original = {porciones_deseadas} ÷ {porciones_original}"

explicacion: |
  El factor de escala es la razón entre las porciones que se quieren
  hacer y las porciones originales de la receta.
```

### 4 — Calcular la nueva cantidad de un ingrediente

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "calculo"]

variables:
  porciones_original: random(2, 6)
  porciones_deseadas: random(7, 20)
  cantidad_original: random(50, 500)

respuesta: cantidad_original * (porciones_deseadas / porciones_original)
tipo: input
tolerancia_abs: 1

enunciado: "Una receta para {porciones_original} porciones usa {cantidad_original} g de harina. ¿Cuántos gramos de harina hacen falta para {porciones_deseadas} porciones?"

pasos:
  - "nueva cantidad = {cantidad_original} × ({porciones_deseadas} ÷ {porciones_original})"

explicacion: |
  Se multiplica la cantidad original por el factor de escala.
```

### 5 — Reducir una receta a la mitad

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "problema"]

variables:
  cantidad_original: random(100, 800)

respuesta: cantidad_original / 2
tipo: input
tolerancia_abs: 1

enunciado: "Una receta usa {cantidad_original} ml de leche para 8 porciones. Se quiere hacer sólo la mitad de porciones (4). ¿Cuántos ml de leche hacen falta?"

explicacion: |
  Con la mitad de porciones, el factor de escala es 0,5: se usa la mitad
  de cada ingrediente.
```

### 6 — Triplicar una receta

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "problema"]

variables:
  cantidad_original: random(50, 300)

respuesta: cantidad_original * 3
tipo: input
tolerancia_abs: 1

enunciado: "Una receta para 3 porciones usa {cantidad_original} g de azúcar. ¿Cuántos gramos de azúcar hacen falta para 9 porciones?"

explicacion: |
  Triplicar las porciones (de 3 a 9) significa triplicar cada
  ingrediente.
```

### 7 — Despejar las porciones originales

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "avanzado"
  tags: ["escalar_receta", "calculo"]

variables:
  porciones_original: random(2, 6)
  cantidad_original: random(50, 300)
  porciones_deseadas: random(7, 20)
  cantidad_escalada: cantidad_original * (porciones_deseadas / porciones_original)

respuesta: porciones_original
tipo: input
tolerancia_abs: 0.1

enunciado: "Una receta usaba {cantidad_original} g de un ingrediente para cierta cantidad de porciones. Escalada a {porciones_deseadas} porciones, ese ingrediente pasó a {redondear(cantidad_escalada, 1)} g. ¿Para cuántas porciones era la receta original?"

explicacion: |
  Se despeja de la fórmula del factor de escala, con la cantidad
  original y la escalada ya conocidas.
```

### 8 — No todo escala igual

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No todos los ingredientes de una receta deben escalarse de forma estrictamente proporcional al factor de escala."

explicacion: |
  Los condimentos fuertes, los leudantes y el tiempo de cocción son
  excepciones importantes a la regla de tres directa simple.
```

### 9 — Condimentos fuertes

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La sal y las especias fuertes no conviene escalarlas de forma estrictamente proporcional al factor de escala: mejor agregarlas gradualmente y probar."

explicacion: |
  La intensidad percibida de un condimento fuerte no crece al mismo
  ritmo que la cantidad de comida.
```

### 10 — Leudantes en recetas muy grandes o muy chicas

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los leudantes (levadura, polvo de hornear, bicarbonato) no siempre escalan de forma perfectamente lineal en recetas muy grandes o muy chicas."

explicacion: |
  Su efecto químico no es perfectamente proporcional fuera de cierto
  rango de cantidades.
```

### 11 — El tiempo de cocción no escala proporcional

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo de cocción NO escala en la misma proporción que la cantidad de comida: duplicar la masa de un pan no duplica el tiempo que tarda en hornearse."

explicacion: |
  Es la excepción más importante a la regla de tres directa al escalar
  una receta.
```

### 12 — Qué mirar en vez del tiempo de cocción

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

enunciado: "Al escalar una receta hacia una cantidad mucho mayor, ¿qué conviene mirar para saber si algo ya está cocido, en vez de calcular el tiempo con una regla de tres?"
tipo: mc
opciones_explicitas:
  - "La temperatura interna o señales visuales/de textura"
  - "El tiempo original multiplicado por el mismo factor de escala de los ingredientes"
  - "La cantidad de porciones que rinde la receta"
respuesta: "La temperatura interna o señales visuales/de textura"

explicacion: |
  El tiempo de cocción depende de cómo se transmite el calor hacia el
  centro, no de una simple multiplicación por el factor de escala.
```

### 13 — La proporción entre ingredientes no cambia

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque las cantidades absolutas de cada ingrediente cambien al escalar una receta, la proporción entre dos ingredientes de esa misma receta se mantiene igual."

explicacion: |
  Si originalmente había el doble de harina que de azúcar, esa relación
  2:1 se mantiene sin importar el factor de escala aplicado.
```

### 14 — Verificar la proporción entre dos ingredientes

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "avanzado"
  tags: ["escalar_receta", "comparacion"]

variables:
  harina_original: random(200, 400)
  azucar_original: random(50, 150)
  porciones_original: random(2, 6)
  porciones_deseadas: random(7, 20)
  harina_escalada: harina_original * (porciones_deseadas / porciones_original)
  azucar_escalada: azucar_original * (porciones_deseadas / porciones_original)

respuesta: (abs(harina_escalada / azucar_escalada - harina_original / azucar_original) < 0.01)
tipo: vf

enunciado: "Receta original: {harina_original} g de harina y {azucar_original} g de azúcar. Escalada a {porciones_deseadas} porciones (desde {porciones_original}), queda en {redondear(harina_escalada, 1)} g de harina y {redondear(azucar_escalada, 1)} g de azúcar. ¿La proporción harina/azúcar es la misma en ambas versiones?"

explicacion: |
  Como los dos ingredientes se multiplicaron por el mismo factor de
  escala, la razón entre ellos no cambia.
```

### 15 — Completar el factor de escala

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta"]

variables:
  cantidad_original: random(50, 300)
  factor: uno_de([0.5, 1.5, 2, 2.5, 3])
  cantidad_nueva: cantidad_original * factor

tipo: completar
enunciado: "Un ingrediente pasó de {cantidad_original} g a {cantidad_nueva} g al escalar la receta. Completá: ___ (factor de escala) = {cantidad_nueva} (cantidad nueva) ÷ {cantidad_original} (cantidad original)."
respuestas_validas:
  - factor

explicacion: |
  El factor de escala es la razón entre la cantidad nueva y la cantidad
  original de cualquier ingrediente de la receta.
```

### 16 — Ordenar por cantidad resultante

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "orden"]

tipo: ordenar
enunciado: "Una receta original usa 100 g de un ingrediente. Ordená estos factores de escala de menor a mayor cantidad resultante de ese ingrediente."
opciones_explicitas:
  - "Factor 2 (200 g)"
  - "Factor 0,5 (50 g)"
  - "Factor 3 (300 g)"
  - "Factor 1,5 (150 g)"
respuesta_orden: ["Factor 0,5 (50 g)", "Factor 1,5 (150 g)", "Factor 2 (200 g)", "Factor 3 (300 g)"]

explicacion: |
  A mayor factor de escala, mayor la cantidad resultante de cada
  ingrediente.
```

### 17 — Verificar un cálculo de escalado (con error a veces)

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "verificacion"]

variables:
  porciones_original: random(2, 6)
  porciones_deseadas: random(7, 20)
  cantidad_original: random(50, 500)
  correcto: cantidad_original * (porciones_deseadas / porciones_original)
  error: uno_de([0, 0, 0, 30, -30])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Receta para {porciones_original} porciones con {cantidad_original} g de un ingrediente, escalada a {porciones_deseadas} porciones: {redondear(mostrado, 1)} g."

explicacion: |
  Se vuelve a calcular con el factor de escala y se compara con el valor
  mostrado.
```

### 18 — Qué hacer cuando el resultado no es un número práctico

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "intermedio"
  tags: ["escalar_receta", "vocabulario"]

enunciado: "Al escalar una receta, el cálculo exacto da \"1,33 huevos\". ¿Qué es razonable hacer en la práctica?"
tipo: mc
opciones_explicitas:
  - "Redondear a una cantidad manejable, o ajustar el número de porciones objetivo para que dé un número más práctico"
  - "Descartar la receta porque no se puede escalar con ese número de porciones"
  - "Usar exactamente 1,33 huevos, partiendo un huevo con precisión"
respuesta: "Redondear a una cantidad manejable, o ajustar el número de porciones objetivo para que dé un número más práctico"

explicacion: |
  La cocina no siempre necesita la precisión matemática exacta: ajustar
  un poco el resultado (o el objetivo de porciones) suele ser lo más
  práctico.
```

### 19 — Ajustar las porciones objetivo

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A veces conviene ajustar el número de porciones objetivo (por ejemplo, hacer para 8 en vez de 10) para que las cantidades de ingredientes den números más prácticos de medir."

explicacion: |
  No siempre hay que quedarse con el número de porciones exacto que se
  pensó al principio.
```

### 20 — Escalar es la misma familia que regla de tres directa

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Escalar una receta usa la misma lógica matemática que la regla de tres directa: dos cantidades que crecen o decrecen siempre en la misma proporción."

explicacion: |
  Es una aplicación concreta y muy cotidiana de ese tipo de
  proporcionalidad.
```

### 21 — Un factor de escala menor a 1 reduce la receta

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "vocabulario"]

variables:
  porciones_original: random(8, 12)
  porciones_deseadas: random(2, 6)

respuesta: (porciones_deseadas / porciones_original < 1)
tipo: vf

enunciado: "Una receta rinde {porciones_original} porciones, y se quieren hacer sólo {porciones_deseadas}. ¿El factor de escala en este caso es menor a 1?"

explicacion: |
  Cuando las porciones deseadas son menos que las originales, el factor
  de escala siempre da menor a 1.
```

### 22 — Escalar una receta (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "escalar_receta"
  nivel: "basico"
  tags: ["escalar_receta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Escalar una receta multiplica cada ingrediente por el mismo factor de escala (regla de tres directa), pero condimentos fuertes, leudantes y sobre todo el tiempo de cocción no siguen esa misma proporción de forma automática."

explicacion: |
  Es la idea central de todo el tema.
```
