# Economía — Elasticidad: cociente de variaciones relativas (cuestionario, 24 preguntas VBLang)

> Tema: `E16B` (puente Álgebra → Economía). Ver `teoria.md` en esta
> misma carpeta.

Las cantidades iniciales se construyen como múltiplos de 100 para que
los cambios porcentuales den siempre números enteros limpios.

---

### 1 — Calcular la elasticidad: caso elástico

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. ¿Cuál es el valor absoluto de la elasticidad?"

pasos:
  - "|E| = {pct_cantidad}%/{pct_precio}% = {k}"

explicacion: |
  |E| = (%ΔQ)/(%ΔP), tomando los valores absolutos de cada variación.
```

### 2 — Calcular la elasticidad: caso inelástico

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: pct_cantidad
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. Sin dividir todavía, ¿cuál es el numerador (%ΔQ, en valor absoluto) del cociente de elasticidad?"

explicacion: |
  El numerador de |E| es directamente %ΔQ = {pct_cantidad}%.
```

### 3 — Clasificar: demanda elástica

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: "Elástica"
tipo: mc
opciones_explicitas:
  - "Elástica"
  - "Inelástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}% (|E|={k}). ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E|={k} > 1 → elástica.
```

### 4 — Clasificar: demanda inelástica

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: "Inelástica"
tipo: mc
opciones_explicitas:
  - "Inelástica"
  - "Elástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E| = {pct_cantidad}/{pct_precio} < 1 → inelástica.
```

### 5 — Clasificar: elasticidad unitaria

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "verdadero_falso"]

variables:
  pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct}% y la cantidad baja exactamente {pct}%. ¿Es unitaria la elasticidad?"

explicacion: |
  |E| = {pct}/{pct} = 1 → elasticidad unitaria.
```

### 6 — Calcular variación porcentual: cantidad

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  cantidad_inicial: k * 100
  pct: random(5, 40)
  cantidad_final: cantidad_inicial - k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada baja de {cantidad_inicial} a {cantidad_final} unidades. ¿Cuál es la variación porcentual (en valor absoluto)?"

pasos:
  - "%Δ = ({cantidad_inicial}−{cantidad_final})/{cantidad_inicial} × 100 = {pct}%"

explicacion: |
  Se compara el cambio con el valor INICIAL, no el final.
```

### 7 — Calcular variación porcentual: precio

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  precio_inicial: k * 100
  pct: random(5, 40)
  precio_final: precio_inicial + k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube de {precio_inicial} a {precio_final}. ¿Cuál es la variación porcentual?"

explicacion: |
  %Δ = ({precio_final}−{precio_inicial})/{precio_inicial} × 100 =
  {pct}%.
```

### 8 — Calcular la elasticidad completa desde valores absolutos

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  k: random(1, 5)
  precio_inicial: k * 100
  pct_precio: random(5, 20)
  precio_final: precio_inicial + k * pct_precio
  cantidad_inicial: k * 100
  m: random(2, 4)
  pct_cantidad: pct_precio * m
  cantidad_final: cantidad_inicial - k * pct_cantidad

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "El precio pasa de {precio_inicial} a {precio_final}, y la cantidad de {cantidad_inicial} a {cantidad_final}. ¿Cuál es |E|?"

pasos:
  - "%ΔP = {pct_precio}%, %ΔQ = {pct_cantidad}% → |E| = {pct_cantidad}/{pct_precio} = {m}"

explicacion: |
  Primero se calcula cada variación porcentual, y después se dividen.
```

### 9 — Concepto: qué mide la elasticidad

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad mide cuánto responde (en términos porcentuales) la cantidad demandada ante un cambio porcentual en el precio."

explicacion: |
  Es la definición central: un cociente de variaciones RELATIVAS, no
  absolutas.
```

### 10 — Concepto: elasticidad no es lo mismo que pendiente

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La elasticidad de la demanda es exactamente lo mismo que la pendiente de la curva de demanda."

explicacion: |
  La pendiente usa variaciones absolutas (ΔP/ΔQ); la elasticidad usa
  variaciones porcentuales — son cálculos relacionados pero distintos.
```

### 11 — Concepto: por qué la elasticidad permite comparar productos distintos

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Como la elasticidad usa porcentajes (no unidades), permite comparar la sensibilidad al precio de productos completamente distintos entre sí (por ejemplo, pan vs. autos)."

explicacion: |
  La pendiente sola no permitiría esa comparación, porque depende de las
  unidades de cada producto.
```

### 12 — Concepto: bienes esenciales tienden a ser inelásticos

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes esenciales, sin sustitutos cercanos (como medicamentos), suelen tener demanda inelástica."

explicacion: |
  La gente sigue comprándolos casi igual aunque suba el precio, porque
  no tiene alternativa.
```

### 13 — Concepto: bienes con sustitutos tienden a ser elásticos

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes con sustitutos cercanos (por ejemplo, una marca de gaseosa cuando hay otras parecidas) suelen tener demanda elástica."

explicacion: |
  Si sube el precio, es fácil cambiar a otra opción — la cantidad
  demandada responde fuerte.
```

### 14 — Concepto: signo de la elasticidad

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por la ley de demanda (precio sube, cantidad baja), la elasticidad suele dar un número negativo, aunque se clasifique según su valor absoluto."

explicacion: |
  El signo refleja la dirección opuesta entre precio y cantidad; la
  magnitud (valor absoluto) es lo que importa para clasificar.
```

### 15 — Concepto: comparar dos elasticidades negativas

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una elasticidad de −3 representa una demanda MÁS elástica que una de −2, aunque −3 sea 'más negativo' — lo que importa es el valor absoluto (3 > 2)."

explicacion: |
  Es el error de comparación más común: hay que comparar magnitudes, no
  el signo.
```

### 16 — Elasticidad puntual: usando la derivada

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["elasticidad_puntual"]

variables:
  pendiente_demanda: -random(1, 5)
  precio: random(10, 50)
  cantidad: random(10, 50)

respuesta: (pendiente_demanda * precio) / cantidad
tipo: input
tolerancia_abs: 0.01

enunciado: "La función de demanda tiene dQ/dP = {pendiente_demanda} en el punto (P={precio}, Q={cantidad}). ¿Cuál es la elasticidad puntual E = (dQ/dP)×(P/Q)?"

explicacion: |
  Es la versión con derivada de la misma fórmula — la elasticidad
  exacta en un punto específico, no un promedio entre dos puntos.
```

### 17 — Concepto: elasticidad puntual usa derivada

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad puntual, calculada con la derivada dQ/dP, es la versión 'instantánea' de la elasticidad, igual que la derivada es la versión instantánea de una pendiente promedio."

explicacion: |
  Misma relación ya vista entre velocidad media e instantánea, o entre
  costo promedio y marginal.
```

### 18 — Verificación con error: clasificación

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto clasificar esta demanda como elástica?"

explicacion: |
  |E| = {k} > 1 → elástica, correcto.
```

### 19 — Verificación con error: cálculo de elasticidad

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto que |E| sea {propuesto}?"

explicacion: |
  El valor correcto es {pct_cantidad}/{pct_precio} = {k}.
```

### 20 — Concepto: elasticidad y estrategia de precios

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una empresa que vende un producto con demanda inelástica puede subir el precio sin perder demasiadas ventas — a diferencia de un producto con demanda elástica."

explicacion: |
  Es una de las aplicaciones prácticas de conocer la elasticidad de lo
  que se vende.
```

### 21 — Concepto: elasticidad depende del producto, no es universal

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Todos los productos tienen la misma elasticidad, así que una vez calculada para uno, sirve para cualquier otro."

explicacion: |
  Cada producto tiene su propia elasticidad, según tenga o no
  sustitutos, sea esencial o no, etc.
```

### 22 — Aplicar: elasticidad exactamente 1

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar"]

variables:
  pct_precio: random(5, 30)

respuesta: pct_precio
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}%. ¿Qué variación porcentual de la cantidad daría elasticidad unitaria (|E|=1)?"

explicacion: |
  Para |E|=1, %ΔQ tiene que ser exactamente igual a %ΔP.
```

### 23 — Concepto: relación con costo marginal

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Elasticidad y costo marginal son la misma familia de idea (una razón de cambio) aplicada a dos preguntas distintas: una a cuánto cuesta producir más, la otra a cuánto responde la demanda al precio."

explicacion: |
  Es el resumen de por qué `../costo-marginal/` es el prerrequisito de
  este módulo.
```

### 24 — Concepto: cierre — variación relativa vs. absoluta

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea central de la elasticidad es usar variaciones RELATIVAS (porcentuales) en vez de ABSOLUTAS, lo que permite comparar sensibilidades entre magnitudes de escalas muy distintas."

explicacion: |
  Es el resumen del módulo: el mismo principio de 'porcentaje' ya
  trabajado en Tronco 1, aplicado ahora a comparar dos tasas de cambio
  entre sí.
```
