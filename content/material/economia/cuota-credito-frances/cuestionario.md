# Economía — Cuota de un crédito, sistema francés (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `Cuota = C × i × (1 +
> i)^n / ((1 + i)^n - 1)`, con `i` la tasa por período (decimal) y `n`
> la cantidad de cuotas.

---

### 1 — Qué es el sistema francés

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

### 2 — La cuota es constante

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

### 3 — Lo que compone cada cuota cambia con el tiempo

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

### 4 — Qué predomina al principio del préstamo

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

### 5 — Qué predomina al final del préstamo

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

### 6 — Calcular la cuota fija

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

### 7 — Calcular el total pagado

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

### 8 — Calcular el interés total pagado

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

### 9 — Mayor tasa, mayor cuota

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

### 10 — Mayor capital, mayor cuota

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

### 11 — Más cuotas, cuota mensual más baja

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

### 12 — Más cuotas, más interés total

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

### 13 — Despejar el capital

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

### 14 — Completar el interés total pagado

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

### 15 — El sistema francés no es el único que existe

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

### 16 — Qué se mantiene fijo en el sistema alemán

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

### 17 — Cómo es la cuota en el sistema alemán

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

### 18 — Cómo funciona el sistema americano

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

### 19 — El sistema americano es el menos común

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

### 20 — El sistema francés es el más usado en Argentina

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

### 21 — Ordenar cuotas por proporción de amortización de capital

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

### 22 — Verificar un cálculo de cuota (con error a veces)

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

### 23 — Sistema francés (cierre)

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
