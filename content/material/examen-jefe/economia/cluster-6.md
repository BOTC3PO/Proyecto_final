# Examen jefe — [PENDIENTE #771]

> Logro #771. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: cft-vs-tasa-nominal (23 preguntas)

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

## Sección: cuota-credito-frances (23 preguntas)

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "¿Qué caracteriza al sistema francés de amortización de un crédito?"
tipo: mc
opciones_explicitas:
  - "La cuota es siempre la misma en pesos durante todo el préstamo"
  - "El capital se devuelve entero recién en la última cuota"
  - "La cantidad de cuotas cambia según cuánto se pague cada mes"
respuesta: "La cuota es siempre la misma en pesos durante todo el préstamo"

explicacion: |
  Es el sistema más usado en Argentina para préstamos personales y
  créditos hipotecarios, justamente por esa cuota fija y predecible.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema francés, el monto de la cuota es el mismo en cada uno de los pagos, asumiendo tasa fija."

explicacion: |
  Ese es el rasgo que define al sistema francés frente a otros sistemas
  de amortización.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la cuota total no cambia, la proporción de interés y de amortización de capital dentro de cada cuota sí cambia mes a mes."

explicacion: |
  El interés se calcula sobre el saldo adeudado, que va bajando; la
  amortización es lo que queda de la cuota después de pagar ese interés.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En las primeras cuotas de un préstamo con sistema francés, ¿qué componente de la cuota es mayor?"
tipo: mc
opciones_explicitas:
  - "El interés"
  - "La amortización de capital"
  - "Los dos son siempre iguales"
respuesta: "El interés"

explicacion: |
  Al principio el saldo adeudado es alto, así que el interés calculado
  sobre ese saldo también lo es.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En las últimas cuotas de un préstamo con sistema francés, ¿qué componente de la cuota es mayor?"
tipo: mc
opciones_explicitas:
  - "La amortización de capital"
  - "El interés"
  - "Los dos son siempre iguales"
respuesta: "La amortización de capital"

explicacion: |
  Con el saldo adeudado ya bajo, el interés de esa cuota es chico, y casi
  toda la cuota amortiza capital.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "calculo"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)

respuesta: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)
tipo: input
tolerancia_abs: 2

enunciado: "Un préstamo de ${capital}, a una tasa mensual del {tasa}%, se paga en {n} cuotas con sistema francés. ¿Cuál es el monto de cada cuota?"

pasos:
  - "Cuota = C × i × (1+i)^n / ((1+i)^n - 1), con C = {capital}, i = {tasa/100}, n = {n}"

explicacion: |
  Se aplica la fórmula del sistema francés con la tasa mensual en forma
  decimal.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "calculo"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)

respuesta: cuota * n
tipo: input
tolerancia_abs: 2

enunciado: "Un préstamo con sistema francés tiene una cuota fija de ${redondear(cuota, 2)}, a pagar en {n} cuotas. ¿Cuánto se paga en total al final del préstamo?"

explicacion: |
  El total pagado es la cuota multiplicada por la cantidad de cuotas.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "calculo"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)

respuesta: cuota * n - capital
tipo: input
tolerancia_abs: 2

enunciado: "Un préstamo de ${capital} con sistema francés tiene una cuota fija de ${redondear(cuota, 2)}, en {n} cuotas. ¿Cuánto interés total se termina pagando (sin contar el capital)?"

pasos:
  - "Total pagado: {redondear(cuota, 2)} × {n} = {redondear(cuota * n, 2)}"
  - "Interés total: {redondear(cuota * n, 2)} - {capital}"

explicacion: |
  El interés total es la diferencia entre todo lo pagado y el capital
  originalmente prestado.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "comparacion"]

variables:
  capital: random(100, 2000) * 1000
  n: random(6, 36)
  tasa_a: random(2, 5)
  tasa_b: random(6, 10)

respuesta: ((capital * (tasa_b / 100) * (1 + tasa_b / 100) ^ n / ((1 + tasa_b / 100) ^ n - 1)) > (capital * (tasa_a / 100) * (1 + tasa_a / 100) ^ n / ((1 + tasa_a / 100) ^ n - 1)))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma cantidad de {n} cuotas, ¿una tasa mensual del {tasa_b}% da una cuota más alta que una del {tasa_a}%?"

explicacion: |
  A mayor tasa, mayor cuota, con capital y cantidad de cuotas fijos.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "comparacion"]

variables:
  tasa: random(2, 8)
  n: random(6, 36)
  capital_a: random(100, 500) * 1000
  capital_b: random(501, 1000) * 1000

respuesta: ((capital_b * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)) > (capital_a * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)))
tipo: vf

enunciado: "A la misma tasa mensual del {tasa}% y las mismas {n} cuotas, ¿un préstamo de ${capital_b} tiene una cuota mayor que uno de ${capital_a}?"

explicacion: |
  A mayor capital prestado, mayor cuota, con tasa y cantidad de cuotas
  fijas.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "comparacion"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n_a: random(6, 12)
  n_b: random(24, 36)

respuesta: ((capital * (tasa / 100) * (1 + tasa / 100) ^ n_b / ((1 + tasa / 100) ^ n_b - 1)) < (capital * (tasa / 100) * (1 + tasa / 100) ^ n_a / ((1 + tasa / 100) ^ n_a - 1)))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma tasa mensual del {tasa}%, ¿pagar en {n_b} cuotas da una cuota mensual más baja que pagar en {n_a} cuotas?"

explicacion: |
  A más cuotas, el mismo capital se reparte en más pagos, así que cada
  cuota individual es más baja.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "comparacion"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n_a: random(6, 12)
  n_b: random(24, 36)

respuesta: (((capital * (tasa / 100) * (1 + tasa / 100) ^ n_b / ((1 + tasa / 100) ^ n_b - 1)) * n_b - capital) > ((capital * (tasa / 100) * (1 + tasa / 100) ^ n_a / ((1 + tasa / 100) ^ n_a - 1)) * n_a - capital))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma tasa mensual del {tasa}%, ¿pagar en {n_b} cuotas termina generando más interés total que pagar en {n_a} cuotas?"

explicacion: |
  Aunque la cuota mensual sea más baja con más cuotas, se paga durante
  más tiempo, y cada mes extra suma interés sobre el saldo que todavía
  no se amortizó — el interés total termina siendo mayor.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "calculo"]

variables:
  tasa: random(2, 8)
  n: random(6, 36)
  capital: random(100, 2000) * 1000
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)

respuesta: capital
tipo: input
tolerancia_abs: 5

enunciado: "Un préstamo con sistema francés, a una tasa mensual del {tasa}% en {n} cuotas, tiene una cuota fija de ${redondear(cuota, 2)}. ¿Cuál fue el capital prestado?"

explicacion: |
  Se despeja C de la fórmula de la cuota, con la tasa y la cantidad de
  cuotas ya conocidas.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)
  total_pagado: cuota * n
  interes_total: total_pagado - capital

tipo: completar
enunciado: "Un préstamo de ${capital} terminó pagando ${redondear(total_pagado, 2)} en total. Completá: ___ (interés total) = {redondear(total_pagado, 2)} (total pagado) - {capital} (capital)."
respuestas_validas:
  - interes_total

explicacion: |
  El interés total es lo que se pagó de más, por encima del capital
  prestado.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además del sistema francés, existen otros sistemas de amortización de créditos, como el alemán y el americano."

explicacion: |
  El francés es el más común en Argentina, pero no el único que usan los
  bancos en el mundo.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En el sistema alemán de amortización, ¿qué es lo que se mantiene constante en cada cuota?"
tipo: mc
opciones_explicitas:
  - "La amortización de capital (no la cuota total)"
  - "La cuota total (no la amortización de capital)"
  - "El interés (no la amortización de capital)"
respuesta: "La amortización de capital (no la cuota total)"

explicacion: |
  Es al revés que en el sistema francés: ahí lo fijo es la cuota; en el
  alemán, lo fijo es cuánto capital se amortiza cada vez.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "Como en el sistema alemán la amortización de capital es siempre la misma, y el interés se calcula sobre un saldo que baja siempre igual, ¿cómo resulta la cuota total a lo largo del préstamo?"
tipo: mc
opciones_explicitas:
  - "Decreciente: arranca más alta y termina más baja"
  - "Constante: igual en todas las cuotas"
  - "Creciente: arranca más baja y termina más alta"
respuesta: "Decreciente: arranca más alta y termina más baja"

explicacion: |
  El interés de cada cuota decrece mes a mes (porque el saldo baja
  siempre lo mismo), así que la cuota total también decrece.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En el sistema americano de amortización, ¿qué se paga durante el préstamo y qué pasa con el capital?"
tipo: mc
opciones_explicitas:
  - "Sólo se pagan intereses en cada cuota; el capital completo se devuelve de una vez al final"
  - "Se paga capital e interés en partes iguales cada cuota, como en el francés"
  - "El capital se devuelve en la primera cuota y después sólo quedan intereses"
respuesta: "Sólo se pagan intereses en cada cuota; el capital completo se devuelve de una vez al final"

explicacion: |
  Es el sistema donde el capital no se va amortizando de a poco: queda
  entero hasta el vencimiento.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De los tres sistemas de amortización (francés, alemán, americano), el americano es el menos común en préstamos personales que ofrecen los bancos."

explicacion: |
  Se usa en algunos bonos e instrumentos financieros puntuales, pero rara
  vez un banco se lo ofrece a una persona para un préstamo personal.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el sistema francés es el más común para préstamos personales y créditos hipotecarios."

explicacion: |
  Por eso es el que corresponde estudiar en detalle, aunque no sea el
  único que existe.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "orden"]

tipo: ordenar
enunciado: "En un préstamo con sistema francés, ordená estos momentos del préstamo de menor a mayor proporción de amortización de capital dentro de la cuota."
opciones_explicitas:
  - "Última cuota"
  - "Cuota 1"
  - "Cuota del medio del préstamo"
respuesta_orden: ["Cuota 1", "Cuota del medio del préstamo", "Última cuota"]

explicacion: |
  La amortización de capital empieza baja (predomina el interés) y crece
  cuota a cuota, hasta ser casi toda la cuota al final del préstamo.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "verificacion"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  correcto: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)
  error: uno_de([0, 0, 0, 5000, -5000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 10)
tipo: vf

enunciado: "¿Está bien calculada esta cuota? Préstamo de ${capital}, tasa mensual {tasa}%, {n} cuotas, cuota mostrada: ${redondear(mostrado, 2)}."

explicacion: |
  Se vuelve a calcular con la fórmula del sistema francés y se compara
  con el valor mostrado.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema francés la cuota es fija, pero dentro de cada cuota la proporción de interés baja y la de amortización de capital sube a medida que avanza el préstamo — y no es el único sistema de amortización que existe."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: interes-compuesto-funcion (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  c0: random(2, 20)
  t: random(1, 4)
  C: c0 * (2 ^ t)

respuesta: c0 * (3 ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1.5)^t (capital {C}, tasa 50% por período). ¿Cuánto vale M({t})?"

pasos:
  - "M({t}) = {C}×1.5^{t} = {c0 * (3 ^ t)}"

explicacion: |
  Se evalúa la función exponencial en t={t}.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  c0: random(2, 15)
  t: random(1, 4)
  C: c0 * (2 ^ t)

respuesta: c0 * (3 ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1.5)^t. ¿Cuánto vale M({t})?"

explicacion: |
  M({t}) = {C}×1.5^{t} = {c0 * (3 ^ t)}.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["dominio"]

variables:
  C: random(1000, 50000)

respuesta: C
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1+r)^t. ¿Cuánto vale M(0)?"

explicacion: |
  Cualquier base elevada a 0 da 1: M(0) = {C}×1 = {C}, el capital
  inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  r_por_mil: random(20, 200)

respuesta: 1000 + r_por_mil
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa r={r_por_mil}/1000 por período, ¿cuánto vale (1+r) multiplicado por 1000 (para trabajar sin decimales)?"

explicacion: |
  (1+r)×1000 = 1000+{r_por_mil} = {1000 + r_por_mil} — la base de la
  función exponencial, escalada por 1000 para evitar decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["comparacion", "verdadero_falso"]

variables:
  C: random(1000, 50000)
  r_pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "C={C}, r={r_pct}%. ¿Dan el mismo monto el interés simple y el compuesto, para t=1 período?"

explicacion: |
  Para un solo período, todavía no hubo oportunidad de que el interés
  generado gane su propio interés — coinciden exactamente.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  C: 10000
  r_pct: random(5, 30)

respuesta: (((100 + r_pct) ^ 2) > (100 * (100 + 2 * r_pct)))
tipo: vf

enunciado: "C={C}, r={r_pct}%, t=2 períodos. ¿Da el interés compuesto un monto mayor que el interés simple?"

explicacion: |
  A partir de t>1, el compuesto siempre supera al simple, con la misma
  tasa y capital.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M(t)=C(1+r)^t tiene la misma forma que cualquier función exponencial f(x)=a·bˣ, con a=C y b=(1+r)."

explicacion: |
  Es exactamente la conexión con
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M(t)=C(1+rt) (interés simple) es una función lineal de t, con pendiente C·r y ordenada al origen C."

explicacion: |
  A diferencia del compuesto, acá t no está en el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con una tasa de interés positiva (r>0), la base (1+r) de la función M(t) siempre es mayor que 1."

explicacion: |
  Por eso M(t) es siempre creciente — es la misma condición a>1 de
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Sin importar qué tan alta sea la tasa de interés simple, a la larga el interés compuesto (con la misma tasa) siempre termina dando un monto mayor."

explicacion: |
  Es el mismo principio general: cualquier exponencial con base>1
  termina superando a cualquier función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["duplicacion"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa del 100% por período (la base es 1+1=2), ¿cuántos períodos tardan en duplicar el capital?"

explicacion: |
  2 = 2^t → t=1 — con 100% de tasa, se duplica en un solo período, por
  definición.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["duplicacion"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa del 100% por período (base 2), ¿cuántos períodos tardan en CUADRUPLICAR el capital?"

pasos:
  - "4 = 2^t → t=2"

explicacion: |
  Cuadruplicar es 2², así que hacen falta 2 períodos de duplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Encontrar el tiempo de duplicación de un capital a interés compuesto es resolver una ecuación exponencial, del mismo tipo que `../../matematica/ecuaciones-exponenciales-logaritmicas/`."

explicacion: |
  2 = (1+r)^t se resuelve aplicando logaritmo a los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el contexto financiero, el dominio útil de M(t) se restringe a t≥0 — no tiene sentido un período de tiempo negativo."

explicacion: |
  El modelo matemático permitiría evaluar en t negativo, pero no
  representaría nada real en este contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  C: random(1000, 20000)

respuesta: "C×(1+r)^t"
tipo: mc
opciones_explicitas:
  - "C×(1+r)^t"
  - "C×r^t"
  - "C×(1+r×t)"

enunciado: "¿Cuál es la fórmula correcta del monto a interés compuesto, como función del tiempo?"

explicacion: |
  La base es (1+r), no r solo — olvidar el "+1" es un error común. La
  tercera opción es la fórmula de interés SIMPLE, no compuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c0: random(2, 20)
  t: random(1, 4)
  C: c0 * (2 ^ t)
  real: c0 * (3 ^ t)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "M(t) = {C}×(1.5)^t. ¿Es correcto que M({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El monto a interés compuesto no sólo crece: crece cada vez MÁS RÁPIDO a medida que pasa el tiempo (a diferencia del interés simple, que suma siempre lo mismo por período)."

explicacion: |
  Es la característica distintiva de cualquier crecimiento exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  c0_a: random(2, 10)
  c0_b: random(11, 20)
  t: random(1, 4)

respuesta: ((c0_b * (3 ^ t)) > (c0_a * (3 ^ t)))
tipo: vf

enunciado: "Dos capitales, {c0_a * (2 ^ t)} y {c0_b * (2 ^ t)}, crecen a la misma tasa del 50% por período durante {t} períodos. ¿Termina siendo mayor el monto del capital que partió más grande?"

explicacion: |
  Con la misma tasa, el capital inicial mayor siempre da un monto final
  mayor — la proporción se mantiene.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El interés compuesto es uno de los ejemplos clásicos del modelo dy/dt=ky (crecimiento proporcional a lo que ya se tiene), estudiado formalmente en `../../matematica/ecuaciones-diferenciales/`."

explicacion: |
  Es el mismo fenómeno matemático mirado, más adelante en el tronco, con
  la herramienta de derivadas.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  C: 1000
  t_sol: random(1, 5)

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×2^t (tasa 100%). ¿Para qué valor de t es M(t) = {C * (2 ^ t_sol)}?"

pasos:
  - "2^t = {2 ^ t_sol} → t = {t_sol}"

explicacion: |
  Se reconoce la potencia de 2 acumulada.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier tasa r, M(0) siempre es igual al capital inicial C, sin importar cuál sea r."

explicacion: |
  (1+r)⁰=1 siempre, sea cual sea r — mismo principio que f(0)=1 en
  cualquier exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El gráfico de M(t) a interés compuesto es una recta, igual que el de interés simple."

explicacion: |
  Es una curva exponencial, no una recta — sólo el interés SIMPLE da una
  recta.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto"]

variables:
  C: random(1000, 50000)
  t: random(1, 10)

respuesta: C
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1+0)^t (tasa 0%). ¿Cuánto vale M({t})?"

explicacion: |
  Con r=0, la base es 1, y 1 elevado a cualquier exponente da 1 — el
  capital nunca cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M=C(1+r)^t es la misma fórmula en `../interes-compuesto/` y acá — lo que cambia es la lectura: antes, una cuenta puntual; ahora, una función completa de t, con dominio, comparación de crecimiento y tiempo de duplicación."

explicacion: |
  Es el resumen del módulo: mismo contenido matemático, otra manera de
  mirarlo.
```

## Sección: mejora-continua (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "incremental"
tipo: completar
respuestas_validas:
  - "incremental"
  - "progresiva"
  - "constante"

enunciado: "La mejora continua se basa en la idea de optimizar procesos de forma constante e __________, en lugar de buscar cambios drásticos y únicos."

explicacion: |
  La mejora continua (Kaizen) se enfoca en pequeños cambios constantes (incrementales) que, sumados en el tiempo, generan grandes transformaciones.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["kaizen", "filosofia"]

respuesta: verdadero
tipo: vf
enunciado: "El término japonés 'Kaizen' se traduce comúnmente como 'cambio para mejor' y es el pilar fundamental de la mejora continua."

explicacion: |
  Efectivamente, Kaizen es el concepto de mejora continua aplicada a procesos, productos o actividades.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

enunciado: "Ordene las etapas del Ciclo de Deming (PDCA), herramienta esencial para la mejora continua:"

pasos:
  - "Definir objetivos y procesos necesarios para obtener resultados."
  - "Implementar los procesos y realizar el trabajo."
  - "Realizar el seguimiento y medir los procesos respecto a los objetivos."
  - "Tomar acciones para mejorar los resultados de los procesos."

explicacion: |
  El ciclo PDCA es: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["enfoque", "estrategia"]

opciones_explicitas: ["Un evento único de gran escala", "Un proceso de optimización constante", "Un cambio estructural de una sola vez"]

respuesta: "Un proceso de optimización constante"
tipo: mc

enunciado: "¿Cuál es la característica principal de la mejora continua en una organización?"

explicacion: |
  La mejora continua no es un proyecto con fecha de fin, sino una cultura de optimización permanente.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["muda", "desperdicio"]

respuesta: "Muda"
tipo: mc

opciones_explicitas: ["Muda", "Kaizen", "Poka-Yoke", "Kanban"]

enunciado: "En la metodología de mejora continua, el término japonés utilizado para referirse a cualquier tipo de desperdicio en el proceso es: ___"

explicacion: |
  'Muda' es el término utilizado para referirse a las actividades que no agregan valor (desperdicio) y que deben eliminarse.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "eficiencia"]

respuesta: "incremental"
tipo: "completar"
respuestas_validas:
  - "incremental"
  - "gradual"
  - "constante"

enunciado: "La mejora continua se define como un enfoque de optimización que busca cambios de carácter ___ en lugar de realizar una única transformación radical."

explicacion: |
  La mejora continua (Kaizen) se basa en pequeños cambios constantes que, acumulados, generan grandes resultados. No se trata de un evento aislado, sino de un proceso sostenido.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "phva"]

variables:
  pasos_phva: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta: "Planificar"
tipo: "mc"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "En un proceso de optimización de una línea de ensamblaje, el primer paso del ciclo PHVA consiste en establecer los objetivos y los procesos necesarios para lograr resultados. Este paso es: {pasos_phva[0]}."

explicacion: |
  El ciclo PHVA (Planificar, Hacer, Verificar, Actuar) es la base de la mejora continua. Siempre se debe comenzar con la fase de planificación para establecer la hoja de ruta.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["calidad", "variabilidad"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la mejora continua busca reducir la variabilidad de los procesos para asegurar la calidad constante?"

explicacion: |
  La variabilidad es el enemigo de la eficiencia. Al estandarizar y mejorar procesos, se busca que los resultados sean predecibles y constantes.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["calculo", "eficiencia"]

variables:
  escenario: [["Tiempo actual: 100 min, Tiempo meta: 85 min", 15], ["Tiempo actual: 50 min, Tiempo meta: 48 min", 2], ["Tiempo actual: 200 min, Tiempo meta: 180 min", 20]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: "completar"
tolerancia_abs: 0

enunciado: "Una empresa de logística aplica mejora continua. Si su tiempo de despacho actual es de {escenario[idx][0]}, ¿cuántos minutos de reducción debe lograr para alcanzar su meta establecida?"

pasos:
  - "Identificar el tiempo actual."
  - "Identificar el tiempo meta."
  - "Calcular la diferencia: Actual - Meta."

explicacion: |
  La mejora continua se mide a menudo a través de la reducción de tiempos o desperdicios. En este caso, la diferencia entre el estado actual y el objetivo representa la mejora buscada.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar un programa de mejora continua en un departamento de atención al cliente, se deben seguir los pasos del ciclo de Deming en el siguiente orden lógico:"

explicacion: |
  El orden correcto es: 1. Planificar (diseñar la mejora), 2. Hacer (implementar el cambio), 3. Verificar (medir resultados) y 4. Actuar (estandarizar si fue exitoso).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "filosofia_gestion"]

respuesta: falso
tipo: vf

enunciado: "La mejora continua (Kaizen) se define como un proyecto de optimización masiva que se ejecuta una sola vez para alcanzar un estado ideal de eficiencia."

explicacion: |
  Falso. La mejora continua se basa en cambios incrementales, constantes y sostenidos en el tiempo, no en intervenciones únicas o aisladas.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["errores_comunes", "gestion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una empresa implementa un software de gestión avanzado para resolver todos sus problemas de eficiencia de un solo golpe.", "software"], ["Un equipo de producción identifica pequeñas fallas diarias y ajusta sus procesos cada semana.", "ajustes"]]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, ¿cuál es el enfoque predominante?"

opciones_explicitas: ["optimización puntual", "mejora continua"]

respuesta: "optimización puntual"
tipo: mc

explicacion: |
  El primer escenario describe un intento de solución única y masiva, lo cual es un error común que ignora la naturaleza incremental de la mejora continua.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["terminologia", "procesos"]

respuesta: "incremental"
tipo: completar
respuestas_validas:
  - "incremental"

enunciado: "A diferencia de la innovación disruptiva, la mejora continua se caracteriza por ser de carácter ___________, buscando optimizar procesos mediante pequeños pasos sucesivos."

explicacion: |
  La mejora continua es incremental porque se enfoca en pequeñas mejoras constantes en lugar de cambios radicales o estructurales de una sola vez.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para que la mejora sea continua, se debe seguir el ciclo PDCA. Ordene las fases de este ciclo en su secuencia lógica de ejecución:"

explicacion: |
  El ciclo PDCA (Plan-Do-Check-Act) es la base de la mejora continua: se planea, se ejecuta, se verifica el resultado y se actúa para estandarizar o ajustar.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["mentalidad", "eficiencia"]

enunciado: "Si un gerente cree que una vez que el proceso es eficiente, el trabajo de mejora ha terminado, ¿está aplicando correctamente la filosofía de mejora continua?"

opciones_explicitas: ["Sí, la eficiencia es un estado de llegada.", "No, la mejora es un proceso cíclico sin fin."]

respuesta: "No, la mejora es un proceso cíclico sin fin."
tipo: mc

explicacion: |
  Uno de los errores más graves es pensar que la mejora tiene un punto final. La mejora continua asume que siempre hay una forma de optimizar un poco más.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "estrategia"]

tipo: mc
opciones_explicitas: ["La mejora continua busca cambios incrementales y constantes en procesos existentes.", "La innovación disruptiva busca cambios radicales que transforman el mercado.", "La mejora continua se enfoca en productos nuevos, mientras que la innovación en procesos.", "Ambas son conceptos idénticos en la práctica empresarial."]

respuesta: "La mejora continua busca cambios incrementales y constantes en procesos existentes."

enunciado: "¿Cuál es la distinción fundamental entre la mejora continua y la innovación disruptiva?"

explicacion: |
  La mejora continua (Kaizen) se centra en optimizar lo que ya existe de forma gradual, mientras que la innovación disruptiva busca crear algo totalmente nuevo que desplace a lo anterior.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["filosofia_empresarial"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una empresa que implementa un cambio masivo de software una vez cada 5 años.", "Un equipo que realiza pequeñas ajustes diarios en su línea de producción para reducir desperdicios."], ["Un evento único de reestructuración organizacional.", "Un ciclo constante de revisión y optimización de tareas."]]

tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]
respuesta: escenarios[escenario_idx][1]

enunciado: "¿Cuál de los siguientes escenarios representa verdaderamente la filosofía de mejora continua?"

explicacion: |
  La mejora continua no es un evento aislado o un proyecto con fecha de finalización, sino un ciclo perpetuo de optimización.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_deming"]

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordena correctamente las etapas del ciclo PHVA (Ciclo de Deming) utilizado en la mejora continua:"

explicacion: |
  El ciclo PHVA es la base de la mejora continua: se Planifica un cambio, se Hace (se implementa), se Verifica (se mide el resultado) y se Actúa (se estandariza el cambio).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas:
  - "incremental"
  - "gradual"
  - "pequeño"

respuesta: "incremental"

enunciado: "A diferencia de la reingeniería de procesos, que busca cambios drásticos, la mejora continua se caracteriza por ser de tipo ___."

explicacion: |
  La mejora continua se basa en la acumulación de pequeñas mejoras (cambios incrementales) que, sumadas, generan grandes resultados a largo plazo.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["cultura_organizacional"]

tipo: mc
opciones_explicitas: ["El error es un fracaso que debe ser castigado para evitar su repetición.", "El error es una oportunidad de aprendizaje para identificar fallas en el proceso.", "El error es irrelevante si el producto final es de buena calidad.", "El error solo es aceptable si se compensa con un aumento de producción."]

respuesta: "El error es una oportunidad de aprendizaje para identificar fallas en el proceso."

enunciado: "¿Cómo se percibe un error o desviación en un sistema de mejora continua en comparación con un modelo de gestión tradicional basado en el control punitivo?"

explicacion: |
  En la mejora continua, el error es una señal de que el proceso actual tiene una oportunidad de optimización; se busca la causa raíz en el proceso, no la culpa en la persona.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "optimización"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Una fábrica de calzado que cambia toda su maquinaria de golpe cada 5 años.", "Una línea de producción que ajusta pequeños detalles cada semana para reducir desperdicios."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: vf
enunciado: "La mejora continua se define como un proceso de optimización constante e incremental. Analice el siguiente escenario: {textos[escenario_idx]}. ¿Es este un ejemplo de mejora continua?"

explicacion: |
  La mejora continua (Kaizen) se basa en cambios incrementales y constantes, no en transformaciones disruptivas o únicas de gran escala.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "Mejora continua"
tipo: mc

opciones_explicitas: ["Optimización puntual", "Mejora continua", "Cambio radical", "Estancamiento"]

enunciado: "Si una empresa decide que su objetivo es mejorar sus procesos de forma constante, paso a paso, en lugar de esperar a un gran cambio estructural, está aplicando el concepto de: ___"

explicacion: |
  La mejora continua busca la excelencia a través de pequeños cambios sostenidos en el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_pdca"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar la mejora continua de forma efectiva, se utiliza el ciclo PDCA. Ordene las siguientes etapas en la secuencia lógica correcta:"

explicacion: |
  El ciclo de Deming (PDCA) sigue el orden: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["eficiencia", "costos"]

respuesta: "5%"
tipo: completar

respuestas_validas:
  - "5%"

enunciado: "En un programa de mejora continua, una empresa logra reducir el ___ de desperdicio de materia prima cada mes mediante ajustes en la maquinaria."

pasos:
  - "Identificar el valor del desperdicio en el escenario."
  - "Escribir el porcentaje exacto."

explicacion: |
  La mejora continua se manifiesta en la reducción progresiva de indicadores negativos como el desperdicio o el tiempo de espera.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["estrategia", "mentalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["El enfoque de la empresa es reactivo: solo actúa cuando hay crisis.", "El enfoque de la empresa es proactivo: busca fallas antes de que ocurran."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: vf
enunciado: "Un pilar de la mejora continua es la proactividad. Analice el siguiente enfoque: {textos[escenario_idx]}. ¿Este enfoque es compatible con la filosofía de mejora continua?"

explicacion: |
  La mejora continua requiere una mentalidad proactiva para identificar oportunidades de mejora antes de que los problemas se conviertan en crisis.
```

## Sección: mvp-producto-minimo-viable (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup", "lean_startup"]

respuesta: "aprendizaje"
tipo: completar
respuestas_validas:
  - "aprendizaje"
  - "validar hipótesis"

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender un producto final, sino obtener ___ sobre las preferencias y comportamientos de los usuarios reales."

explicacion: |
  El MVP es una herramienta de experimentación diseñada para maximizar el aprendizaje validado con el menor esfuerzo posible.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["estrategia", "validación"]

respuesta: falso
tipo: vf

enunciado: "Un MVP debe contener todas las características que el cliente final espera de un producto completo para asegurar su éxito."

explicacion: |
  Falso. Un MVP debe contener solo las características mínimas necesarias para cumplir su propósito de aprendizaje. Incluir demasiado puede desperdiciar recursos.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["desarrollo", "iteración"]

respuesta: "Landing Page"
tipo: mc
opciones_explicitas: ["Landing Page", "Mago de Oz", "Conserje"]

enunciado: "Si una startup lanza una página web simple para ver cuántas personas hacen clic en un botón de 'comprar' antes de tener el producto desarrollado, ¿qué modelo de MVP está utilizando?"

explicacion: |
  La Landing Page es uno de los MVPs más rápidos para validar la demanda de una idea antes de invertir en desarrollo técnico.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["lean_startup", "ciclo_feedback"]

opciones_explicitas: ["Construir", "Medir", "Aprender"]
respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que se utiliza para iterar sobre un MVP:"

explicacion: |
  El ciclo es iterativo: se construye un experimento, se miden los resultados y se aprende para decidir si pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "el producto más simple que permite aprender de usuarios reales"
tipo: completar
respuestas_validas:
  - "el producto más simple que permite aprender de usuarios reales"
  - "una versión completa pero barata"

enunciado: "Se define al MVP como ___."

explicacion: |
  El MVP busca el equilibrio entre el valor para el usuario y el esfuerzo de desarrollo, priorizando el aprendizaje sobre la perfección técnica.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup"]

respuesta: "aprender"
tipo: "completar"
respuestas_validas:
  - "aprender"
  - "aprendizaje"

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender una versión incompleta, sino permitir que el emprendedor pueda ___ de los usuarios reales con el menor esfuerzo posible."

explicacion: |
  El MVP es una estrategia de aprendizaje validado. Su fin no es la perfección técnica, sino la recolección de datos sobre el comportamiento del usuario para decidir si pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ejemplo", "validacion"]

variables:
  escenario: uno_de([["App de comida con sistema de pagos integrado", "Software complejo"], ["Un grupo de WhatsApp para tomar pedidos manualmente", "Concierge MVP"], ["Un sitio web con fotos de productos sin carrito", "Landing Page"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["Software complejo", "Concierge MVP", "Landing Page"]

enunciado: "Un emprendedor quiere validar si la gente en un barrio específico quiere un servicio de delivery de comida casera. ¿Cuál de estos ejemplos representa mejor un MVP de tipo 'Concierge' (donde el servicio se realiza manualmente para entender el proceso)?"

explicacion: |
  El MVP de tipo Concierge sustituye la automatización por procesos manuales. En el ejemplo, usar WhatsApp y tomar pedidos a mano permite entender la demanda sin haber programado una aplicación compleja.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso

tipo: "vf"

enunciado: "Un MVP debe ser un producto con todas las funcionalidades básicas pero con una calidad técnica deficiente que no sea útil para el usuario."

explicacion: |
  Falso. Un MVP debe ser "viable". Esto significa que, aunque tenga pocas funciones, debe resolver el problema central del usuario con una calidad mínima aceptable para que el aprendizaje sea real.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]
tipo: "ordenar"
opciones_explicitas: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]

enunciado: "Ordena los pasos lógicos para validar si un nuevo concepto de café temático tendrá éxito mediante un MVP:"

explicacion: |
  El ciclo de Lean Startup comienza con la hipótesis (qué creemos que pasará), sigue con la construcción del experimento (MVP), el contacto con el mercado y, finalmente, el análisis de los datos obtenidos para iterar.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["metricas", "analisis"]

variables:
  datos: uno_de([[100, 5, 0.05], [200, 20, 0.10], [50, 1, 0.02]])

respuesta: datos[2]
tipo: "completar"
tolerancia_abs: 0.001

enunciado: "Se lanza un MVP de una plataforma de cursos online. Los datos obtenidos son: Visitas totales: {datos[0]}, Usuarios que se registran: {datos[1]}. ¿Cuál es la tasa de conversión (registrados/visitas) expresada en decimal?"

pasos:
  - "Identificar el número de usuarios registrados."
  - "Identificar el número de visitas totales."
  - "Dividir los registrados por las visitas."

explicacion: |
  La tasa de conversión es una métrica clave en un MVP para entender si la propuesta de valor es atractiva. En este caso: 20 / 200 = 0.10.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave", "metodologia_lean"]

respuesta: "aprender"
tipo: mc
opciones_explicitas: ["construir", "aprender", "vender", "perfeccionar"]

enunciado: "Un error común es pensar que el objetivo principal de un MVP es lanzar un producto final con pocas funciones. En realidad, el objetivo fundamental de un MVP es ___ de los usuarios reales."

explicacion: |
  El MVP no es un producto "incompleto" para salir rápido al mercado, sino una herramienta de aprendizaje validado. Su fin es probar hipótesis de negocio con el menor esfuerzo posible.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["errores_comunes", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Un Producto Mínimo Viable (MVP) puede ser un producto de mala calidad o con una experiencia de usuario deficiente, siempre y cuando cumpla con la función básica."

explicacion: |
  Falso. Un MVP debe ser "viable". Si la calidad es tan baja que el usuario no puede completar la tarea principal, no estás probando tu idea, estás probando que tu producto es malo. La funcionalidad es mínima, pero la calidad debe ser suficiente para generar aprendizaje.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_feedback", "lean_startup"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que el MVP sea efectivo, se debe seguir el ciclo de feedback de la metodología Lean Startup. Ordena los pasos correctamente:"

explicacion: |
  El ciclo es: Construir (MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "errores_comunes"]

variables:
  escenario: [["un prototipo de baja fidelidad", "una versión con todas las funciones pero sin marketing"], ["un prototipo de baja fidelidad", "un producto incompleto que no resuelve el problema principal"], ["un prototipo de baja fidelidad", "una campaña de publicidad sin producto"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - escenario[idx][1]

enunciado: "Un error crítico es confundir un MVP con ___."

explicacion: |
  Un MVP debe resolver el problema central. Si lanzas algo que no resuelve el problema principal, no estás validando tu propuesta de valor, solo estás lanzando un producto inútil.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["caracteristicas", "definicion"]

respuesta: "una función principal"
tipo: completar
respuestas_validas:
  - "una función principal"

enunciado: "Para evitar el exceso de funciones (feature creep) en un MVP, el equipo debe centrarse en desarrollar ___ que aporte valor real."

explicacion: |
  El enfoque debe estar en el "Core Value Proposition". Si intentas incluir demasiadas funciones, dejas de tener un producto "mínimo" y te pierdes en el desarrollo de características que quizás nadie necesita.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["gestion_producto", "metodologias_agiles"]

respuesta: "prototipo"
tipo: "completar"
respuestas_validas:
  - "prototipo"

enunciado: "Mientras que un MVP está diseñado para ser lanzado al mercado y recolectar datos de usuarios reales, un ___ se utiliza generalmente para validar conceptos técnicos o de diseño de forma interna o con usuarios muy controlados, sin necesidad de ser una versión funcional para el mercado."

explicacion: |
  El MVP es una versión funcional que busca aprendizaje validado en el mercado real, mientras que el prototipo es una representación (puede ser de baja fidelidad) para probar una idea o flujo específico.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["aprendizaje", "validacion"]

tipo: "mc"
opciones_explicitas: ["Maximizar las funcionalidades para satisfacer a todos los clientes", "Maximizar el aprendizaje validado con el mínimo esfuerzo"]

respuesta: "Maximizar el aprendizaje validado con el mínimo esfuerzo"

enunciado: "De acuerdo a la metodología Lean Startup, ¿cuál es el objetivo primordial de un MVP?"

explicacion: |
  El MVP no busca ser un producto completo, sino la versión más simple que permita entrar en el ciclo de 'Construir-Medir-Aprender'.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "desarrollo"]

respuesta: falso
tipo: "vf"

enunciado: "Un Producto Mínimo Viable (MVP) debe contener todas las características que el cliente final ha solicitado en su lista de deseos para asegurar su satisfacción inicial."

explicacion: |
  Falso. Incluir todas las características contradice la esencia del MVP, que es construir solo lo estrictamente necesario para aprender sobre el valor que el producto aporta.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "lean_startup"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: "ordenar"
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que un MVP cumpla su función de aprendizaje, debe seguir el ciclo iterativo de la metodología Lean Startup. Ordene los pasos en el orden correcto:"

explicacion: |
  El ciclo es circular: se construye algo mínimo, se mide el comportamiento del usuario y se aprende para decidir si se pivota o se persevera.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "producto"]

tipo: "mc"
opciones_explicitas: ["El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica", "El MVP es una versión de prueba interna y el MMP es el producto final para la venta masiva"]

respuesta: "El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica"

enunciado: "¿Cuál es la diferencia principal entre MVP (Minimum Viable Product) y MMP (Minimum Marketable Product)?"

explicacion: |
  El MVP es una herramienta de aprendizaje (puede ser muy rudimentaria), mientras que el MMP es la versión mínima que ya tiene suficiente valor para ser comercializada con éxito.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["emprendimiento", "metodologia_lean"]

variables:
  datos: [["Una app de comida que solo permite pedir por WhatsApp", "validar_demanda"], ["Un prototipo de papel de una app de viajes", "validar_interes"], ["Una landing page con un botón de 'Próximamente'", "validar_interes"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["validar_demanda", "validar_interes", "validar_tecnologia"]

enunciado: "Un emprendedor decide lanzar {datos[idx][0]} con el objetivo principal de: ___"

explicacion: |
  El MVP busca la menor cantidad de esfuerzo para obtener la máxima cantidad de aprendizaje validado sobre los clientes.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "El objetivo principal de un MVP es lanzar un producto incompleto y de mala calidad para ahorrar costos de desarrollo."

explicacion: |
  Falso. El MVP debe ser funcional y aportar valor; su objetivo es el aprendizaje validado, no la falta de calidad.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_lean", "metodologia"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que permite iterar sobre un MVP:"

explicacion: |
  El ciclo es: Construir (producto/MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metricas", "validacion"]

variables:
  datos: [["una landing page con 100 visitas y 5 registros", "5%"], ["un bot de Telegram con 10 usuarios y 2 pedidos", "20%"], ["un prototipo de baja fidelidad sin usuarios", "0%"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "5%"
  - "20%"
  - "0%"

enunciado: "Si el MVP consiste en {datos[idx][0]}, la tasa de conversión (métrica de validación) es de ___."

explicacion: |
  La tasa de conversión permite medir el interés real de los usuarios frente a la propuesta de valor del MVP.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "pivot"]

variables:
  datos: [["Los usuarios usan el MVP pero no están dispuestos a pagar", "pivotar"], ["Los usuarios ignoran el MVP por completo", "pivotar"], ["Los usuarios aman la función extra que no era el core", "pivotar"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["perseverar", "pivotar"]

enunciado: "Ante la situación: {datos[idx][0]}, la acción estratégica recomendada según la metodología Lean es: ___"

explicacion: |
  Si los datos del MVP indican que el modelo de negocio o el problema planteado no es el correcto, se debe 'pivotar' (cambiar la estrategia).
```

