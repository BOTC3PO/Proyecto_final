# Economía — CFT vs. tasa nominal (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `TEA = (1 + TNA/n)^n -
> 1`, con `n` la cantidad de capitalizaciones por año. CFT modelado en
> este cuestionario como `TEA + costos adicionales` — simplificación
> pedagógica, no la fórmula oficial del BCRA (ver `teoria.md`).

---

### 1 — Qué es la TNA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

enunciado: "¿Qué es la TNA (Tasa Nominal Anual)?"
tipo: mc
opciones_explicitas:
  - "La tasa de interés anual \"de lista\", sin tener en cuenta cómo capitaliza durante el año"
  - "El costo total real de un préstamo, incluidos seguros y comisiones"
  - "El monto final que hay que devolver en un crédito"
respuesta: "La tasa de interés anual \"de lista\", sin tener en cuenta cómo capitaliza durante el año"

explicacion: |
  La TNA es sólo el porcentaje anual nominal, previo a considerar el
  efecto de la capitalización.
```

### 2 — Qué es la TEA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

enunciado: "¿Qué es la TEA (Tasa Efectiva Anual)?"
tipo: mc
opciones_explicitas:
  - "El costo anual real de la tasa, considerando el efecto de la capitalización"
  - "La tasa que cobra el Estado sobre los intereses"
  - "Un promedio entre la TNA y el CFT"
respuesta: "El costo anual real de la tasa, considerando el efecto de la capitalización"

explicacion: |
  La TEA es lo que la TNA se convierte una vez que se tiene en cuenta el
  interés compuesto de la capitalización dentro del año.
```

### 3 — Qué es el CFT

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

enunciado: "¿Qué es el CFT (Costo Financiero Total)?"
tipo: mc
opciones_explicitas:
  - "El costo final y real de un crédito: la TEA más comisiones, seguros e IVA sobre los intereses"
  - "Otro nombre para la TNA"
  - "El monto original prestado, sin intereses"
respuesta: "El costo final y real de un crédito: la TEA más comisiones, seguros e IVA sobre los intereses"

explicacion: |
  Es el número que el BCRA obliga a publicar en toda oferta de crédito
  en Argentina, justamente para poder comparar el costo real.
```

### 4 — La TNA no tiene en cuenta la capitalización

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TNA es sólo la tasa anual nominal: no tiene en cuenta cómo se capitaliza el interés durante el año."

explicacion: |
  Por eso la TNA sola no alcanza para saber el costo real de un crédito.
```

### 5 — La TEA sí tiene en cuenta la capitalización

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TEA considera el efecto de la capitalización (interés compuesto) dentro del año, a diferencia de la TNA."

explicacion: |
  Es exactamente la aplicación de interés compuesto a la TNA con la
  frecuencia de capitalización del producto.
```

### 6 — El CFT suma más que sólo la tasa

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El CFT incluye, además de la TEA, comisiones administrativas, seguros obligatorios y el IVA que se cobra sobre los intereses."

explicacion: |
  Es lo que lo convierte en el costo REAL del crédito, no sólo la tasa
  de interés.
```

### 7 — Calcular la TEA con capitalización mensual

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)

respuesta: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
tipo: input
tolerancia_abs: 0.2

enunciado: "Un préstamo tiene una TNA del {tna}%, con capitalización mensual (n = 12). ¿Cuál es la TEA aproximada, en porcentaje?"

pasos:
  - "TEA = (1 + {tna}/100/12)^12 - 1"

explicacion: |
  Se aplica la fórmula TEA = (1 + TNA/n)^n - 1, con n = 12 por ser
  mensual.
```

### 8 — Con capitalización mensual, la TEA es mayor que la TNA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "comparacion"]

variables:
  tna: random(20, 120)

respuesta: (((1 + tna / 100 / 12) ^ 12 - 1) * 100 > tna)
tipo: vf

enunciado: "Con una TNA del {tna}% capitalizada mes a mes, ¿la TEA resultante es mayor que el {tna}% nominal?"

explicacion: |
  Cuando capitaliza más de una vez al año, la TEA siempre supera a la
  TNA — es el mismo efecto de "interés sobre interés" del tema anterior.
```

### 9 — Calcular la TEA con capitalización trimestral

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)

respuesta: ((1 + tna / 100 / 4) ^ 4 - 1) * 100
tipo: input
tolerancia_abs: 0.2

enunciado: "Un plazo fijo tiene una TNA del {tna}%, con capitalización trimestral (n = 4). ¿Cuál es la TEA aproximada, en porcentaje?"

pasos:
  - "TEA = (1 + {tna}/100/4)^4 - 1"

explicacion: |
  Con menos capitalizaciones al año que en el caso mensual, la brecha
  entre TNA y TEA es más chica, pero sigue existiendo.
```

### 10 — Con capitalización anual, TNA y TEA coinciden

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un producto capitaliza una sola vez al año (n = 1), la TNA y la TEA dan exactamente el mismo número."

explicacion: |
  Con n = 1, (1 + TNA/1)^1 - 1 es simplemente TNA — recién con n > 1
  aparece la diferencia.
```

### 11 — Mayor frecuencia de capitalización, mayor TEA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "comparacion"]

variables:
  tna: random(20, 120)

respuesta: (((1 + tna / 100 / 12) ^ 12 - 1) > ((1 + tna / 100 / 4) ^ 4 - 1))
tipo: vf

enunciado: "Con la misma TNA del {tna}%, ¿capitalizar mes a mes (n = 12) da una TEA mayor que capitalizar trimestre a trimestre (n = 4)?"

explicacion: |
  A igual TNA, cuantas más veces capitaliza en el año, mayor es la TEA
  resultante.
```

### 12 — Comparar créditos por CFT, no por TNA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para comparar el costo real de dos ofertas de crédito, hay que mirar el CFT de cada una, no la TNA."

explicacion: |
  La TNA no incluye comisiones ni seguros, así que dos créditos con la
  misma TNA pueden terminar costando distinto.
```

### 13 — Misma TNA, distinto CFT

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos préstamos con exactamente la misma TNA pueden tener un CFT distinto, si uno cobra más comisiones o seguros que el otro."

explicacion: |
  El CFT depende de todos los costos del crédito, no sólo de la tasa de
  interés.
```

### 14 — Por qué se destaca la TNA en la publicidad

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TNA suele ser el número más bajo de los tres (TNA, TEA, CFT), por eso a veces se destaca más en la publicidad, aunque el CFT sea el dato regulado por el BCRA para comparar ofertas."

explicacion: |
  No es ilegal mostrar la TNA, pero por regulación el CFT tiene que estar
  igual publicado — es el número que conviene mirar.
```

### 15 — Calcular el CFT (modelo simplificado)

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)
  tea: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
  costos_extra: random(2, 10)

respuesta: tea + costos_extra
tipo: input
tolerancia_abs: 0.2

enunciado: "Un préstamo tiene una TEA de {redondear(tea, 2)}% (con TNA del {tna}% capitalizada mes a mes). Sumando comisiones, seguros e IVA sobre intereses, agrega {costos_extra} puntos porcentuales más. ¿Cuál es el CFT aproximado?"

explicacion: |
  En este modelo simplificado, el CFT es la TEA más los puntos
  porcentuales de costos adicionales.
```

### 16 — El CFT siempre es mayor o igual a la TEA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El CFT de un crédito siempre es mayor o igual a su TEA, nunca menor."

explicacion: |
  El CFT parte de la TEA y le suma costos adicionales (nunca los resta),
  así que como mínimo queda igual, y en la práctica casi siempre es
  mayor.
```

### 17 — Completar la TEA a partir del CFT

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft"]

variables:
  tna: random(20, 120)
  tea: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
  costos_extra: random(2, 10)
  cft: tea + costos_extra

tipo: completar
enunciado: "Un préstamo tiene un CFT de {redondear(cft, 2)}%, con {costos_extra} puntos porcentuales de costos adicionales sobre la TEA. Completá: ___ (TEA) = {redondear(cft, 2)} (CFT) - {costos_extra} (costos adicionales)."
respuestas_validas:
  - tea

explicacion: |
  Se despeja restando los costos adicionales del CFT.
```

### 18 — Despejar la TNA a partir de la TEA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)
  tea: (1 + tna / 100 / 12) ^ 12 - 1

respuesta: tna
tipo: input
tolerancia_abs: 0.1

enunciado: "Un producto capitaliza mes a mes (n = 12) y tiene una TEA de {redondear(tea * 100, 2)}%. ¿Qué TNA tiene?"

pasos:
  - "TNA = n × (raíz-n-ésima(1 + TEA) - 1) = 12 × ({raiz(1 + tea, 12)} - 1)"

explicacion: |
  Se despeja la TNA de TEA = (1 + TNA/n)^n - 1 usando la raíz n-ésima:
  TNA = n × (raíz-n-ésima(1 + TEA) - 1).
```

### 19 — Ordenar TNA, TEA y CFT de menor a mayor

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "orden"]

tipo: ordenar
enunciado: "Para un mismo crédito que capitaliza más de una vez al año y tiene costos adicionales, ordená estos tres números de menor a mayor."
opciones_explicitas:
  - "CFT"
  - "TNA"
  - "TEA"
respuesta_orden: ["TNA", "TEA", "CFT"]

explicacion: |
  La TNA es el número base; la TEA ya incluye la capitalización (es
  mayor o igual a la TNA); el CFT suma además los costos adicionales
  (es mayor o igual a la TEA).
```

### 20 — Verificar un cálculo de TEA (con error a veces)

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "verificacion"]

variables:
  tna: random(20, 120)
  correcto: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
  error: uno_de([0, 0, 0, 3, -3])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? TNA del {tna}% con capitalización mensual, TEA resultante: {redondear(mostrado, 2)}%."

explicacion: |
  Se vuelve a calcular TEA = (1 + TNA/12)^12 - 1 y se compara con el
  valor mostrado.
```

### 21 — El CFT es un dato obligatorio en Argentina

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el BCRA obliga a las entidades financieras a publicar el CFT en toda oferta de crédito."

explicacion: |
  Es justamente para que cualquiera pueda comparar el costo real entre
  distintas ofertas, más allá de qué número destaque cada publicidad.
```

### 22 — La frecuencia de capitalización afecta la TEA, no la TNA

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La TNA de un producto cambia según qué tan seguido capitaliza (mensual, trimestral, anual)."

explicacion: |
  Es al revés: la TNA es fija (el número "de lista"); lo que cambia
  según la frecuencia de capitalización es la TEA que resulta de esa
  TNA.
```

### 23 — TNA, TEA y CFT (cierre)

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TNA es la tasa nominal sin capitalizar, la TEA ya incluye el efecto de la capitalización, y el CFT suma a la TEA los demás costos del crédito — por eso el CFT es el número que hay que mirar para comparar ofertas."

explicacion: |
  Es la idea central de todo el tema.
```
