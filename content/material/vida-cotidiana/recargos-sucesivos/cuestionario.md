# Vida Cotidiana — Recargos sucesivos (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Usa la situación real vigente
> desde enero de 2026 (percepción de Ganancias del 30% en compras en
> dólares con tarjeta, tras el fin del Impuesto PAIS) e intereses
> resarcitorios de AFIP por mora — investigado con búsqueda web.

---

### 1 — Qué es un recargo

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "basico"
  tags: ["recargos_sucesivos", "vocabulario"]

enunciado: "¿Qué es un recargo?"
tipo: mc
opciones_explicitas:
  - "Un porcentaje que se agrega al monto original, aumentándolo"
  - "Un porcentaje que se resta del monto original"
  - "Otro nombre para un descuento"
respuesta: "Un porcentaje que se agrega al monto original, aumentándolo"

explicacion: |
  Es lo opuesto a un descuento: en vez de restar, suma.
```

### 2 — Calcular un recargo simple

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "basico"
  tags: ["recargos_sucesivos"]

variables:
  monto: random(5, 50) * 1000
  p: uno_de([10, 15, 20, 30])

respuesta: monto * (1 + p / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un monto de ${monto} tiene un recargo del {p}%. ¿Cuánto queda?"

explicacion: |
  Se multiplica por (1 + p/100).
```

### 3 — Calcular dos recargos sucesivos

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos"]

variables:
  monto: random(5, 50) * 1000
  p1: uno_de([10, 15])
  p2: uno_de([5, 10])

respuesta: monto * (1 + p1 / 100) * (1 + p2 / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "${monto} con un recargo del {p1}% y después otro del {p2}% (sobre el monto ya recargado). ¿Cuánto queda?"

pasos:
  - "{monto} × (1+{p1}/100) × (1+{p2}/100) = {monto * (1 + p1 / 100) * (1 + p2 / 100)}"

explicacion: |
  Cada recargo se aplica sobre el resultado del anterior, igual que con
  los descuentos sucesivos.
```

### 4 — Recargo sucesivo vs. suma ingenua

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos"]

variables:
  monto: random(10, 50) * 1000
  p1: 10
  p2: 10
  resultado_real: monto * (1 + p1 / 100) * (1 + p2 / 100)
  resultado_ingenuo: monto * (1 + (p1 + p2) / 100)

respuesta: resultado_real
tipo: mc
opciones_explicitas:
  - resultado_real
  - resultado_ingenuo

enunciado: "${monto} con 10% de recargo y después 10% más (sucesivos). ¿Cuál de estos dos resultados es el correcto?"

explicacion: |
  Dos recargos del 10% sucesivos dan un poco MÁS que sumar 20% directo:
  el segundo recargo también se aplica sobre el primer recargo ya
  sumado.
```

### 5 — Problema real: percepción de Ganancias en compras en dólares

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "problema"]

variables:
  dolares: random(10, 200)
  cotizacion: random(900, 1300)

respuesta: dolares * cotizacion * 1.30
tipo: input
tolerancia_abs: 5

enunciado: "Comprás US$ {dolares} con tarjeta, con el dólar oficial a ${cotizacion}. Desde 2026 se suma una Percepción de Ganancias del 30% sobre ese monto. ¿Cuántos pesos pagás en total?"

pasos:
  - "{dolares} × {cotizacion} × 1,30 = {dolares * cotizacion * 1.30}"

explicacion: |
  Es el recargo real vigente en compras en moneda extranjera con
  tarjeta, después de que terminó el Impuesto PAIS en enero de 2026.
```

### 6 — La percepción de Ganancias se puede recuperar

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del viejo Impuesto PAIS, la Percepción de Ganancias del 30% en compras en dólares con tarjeta se puede recuperar, descontándola de Ganancias o Bienes Personales en la declaración del período siguiente."

explicacion: |
  Es una diferencia real importante: no es una pérdida definitiva, es un
  pago a cuenta de un impuesto que la persona va a tener que pagar de
  todos modos.
```

### 7 — El Impuesto PAIS ya no existe

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "basico"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Impuesto PAIS dejó de aplicarse desde enero de 2026, porque había sido creado con una vigencia legal de 5 años."

explicacion: |
  Es importante no confundirlo con la Percepción de Ganancias actual, que
  es un recargo distinto (y recuperable).
```

### 8 — Problema: costo total en pesos de una compra en dólares

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "avanzado"
  tags: ["recargos_sucesivos", "problema"]

variables:
  dolares: random(50, 500)
  cotizacion: random(900, 1300)
  total_con_recargo: dolares * cotizacion * 1.30

respuesta: total_con_recargo - (dolares * cotizacion)
tipo: input
tolerancia_abs: 5

enunciado: "Comprás US$ {dolares} a ${cotizacion} el dólar, con 30% de percepción. ¿Cuántos pesos de más pagás respecto de comprar al dólar oficial sin ningún recargo?"

explicacion: |
  Es, directamente, el 30% del monto en pesos al tipo de cambio oficial.
```

### 9 — Interés por mora en un servicio

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "problema"]

variables:
  factura: random(5, 30) * 1000
  recargo_mora: uno_de([5, 8, 10])

respuesta: factura * (1 + recargo_mora / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una factura de servicio de ${factura}, pagada fuera de término, tiene un recargo por mora del {recargo_mora}%. ¿Cuánto hay que pagar?"

explicacion: |
  Es el mismo mecanismo que los intereses resarcitorios de AFIP, pero
  aplicado por la empresa de servicios.
```

### 10 — Los intereses resarcitorios son por pago fuera de término

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "AFIP aplica intereses resarcitorios cuando una obligación impositiva se paga después de su fecha de vencimiento."

explicacion: |
  Se calculan según el artículo 37 de la Ley de Procedimiento Tributario,
  por cada período de mora.
```

### 11 — Recargo que se recupera vs. recargo que no

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "vocabulario"]

enunciado: "¿Cuál de estos dos recargos es una pérdida DEFINITIVA (no se recupera nunca)?"
tipo: mc
opciones_explicitas:
  - "Un interés por pagar una factura fuera de término"
  - "La Percepción de Ganancias en una compra en dólares (se descuenta de un impuesto futuro)"
respuesta: "Un interés por pagar una factura fuera de término"

explicacion: |
  El interés por mora no se recupera de ninguna forma; la percepción sí,
  como pago a cuenta.
```

### 12 — Combinar un recargo con un descuento del mismo porcentaje

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "avanzado"
  tags: ["recargos_sucesivos"]

variables:
  monto: random(10, 50) * 1000
  p: uno_de([10, 15, 20])

respuesta: monto * (1 + p / 100) * (1 - p / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "${monto} recibe primero un recargo del {p}%, y después un descuento del mismo {p}% (sobre el monto ya recargado). ¿Vuelve exactamente a {monto}?"

pasos:
  - "{monto} × (1+{p}/100) × (1-{p}/100) = {monto * (1 + p / 100) * (1 - p / 100)}"

explicacion: |
  No vuelve exactamente al original: queda un poquito por debajo, porque
  el descuento se calcula sobre un monto ya más grande que el original.
```

### 13 — Recargo y descuento del mismo % no se cancelan

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Aplicar un recargo del 20% y después un descuento del 20% (sobre el monto ya recargado) devuelve exactamente el monto original."

explicacion: |
  No es cierto: 100 × 1,20 × 0,80 = 96, no 100. El descuento se calcula
  sobre una base más grande que la original.
```

### 14 — Verificar un recargo sucesivo (con error a veces)

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "verificacion"]

variables:
  monto: random(10, 50) * 1000
  p1: uno_de([10, 15])
  p2: uno_de([5, 10])
  correcto: monto * (1 + p1 / 100) * (1 + p2 / 100)
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? ${monto} con {p1}% y después {p2}% de recargo sucesivo da ${mostrado}."

explicacion: |
  Se vuelve a aplicar la fórmula en cadena y se compara.
```

### 15 — Elegir el resultado correcto

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos"]

variables:
  monto: random(10, 50) * 1000
  p: uno_de([10, 20, 30])
  correcto: monto * (1 + p / 100)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - monto * p / 100
  - monto - (monto * p / 100)

enunciado: "${monto} con un recargo del {p}%. ¿Cuál es el monto final?"

explicacion: |
  La segunda opción es sólo el recargo (no el total); la tercera resta en
  vez de sumar.
```

### 16 — Completar el segundo recargo que falta

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "avanzado"
  tags: ["recargos_sucesivos"]

variables:
  monto: 10000
  p1: 10
  p2: uno_de([5, 10, 15])
  resultado: monto * (1 + p1 / 100) * (1 + p2 / 100)

tipo: completar
enunciado: "${monto} con 10% de recargo y después ___% más da ${resultado}. Completá el segundo porcentaje."
respuestas_validas:
  - p2

explicacion: |
  Se despeja probando el segundo porcentaje contra el resultado final.
```

### 17 — Problema: dos meses de mora seguidos

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "avanzado"
  tags: ["recargos_sucesivos", "problema"]

variables:
  deuda: random(10, 50) * 1000
  recargo_mensual: uno_de([3, 5])

respuesta: deuda * (1 + recargo_mensual / 100) * (1 + recargo_mensual / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una deuda de ${deuda} acumula {recargo_mensual}% de interés por mora cada mes, durante 2 meses seguidos (sobre el saldo ya recargado del mes anterior). ¿Cuánto se debe al final?"

pasos:
  - "{deuda} × (1+{recargo_mensual}/100)² = {deuda * (1 + recargo_mensual / 100) * (1 + recargo_mensual / 100)}"

explicacion: |
  Cada mes de mora recarga sobre el saldo YA recargado del mes anterior,
  no sobre la deuda original.
```

### 18 — Ordenar recargos por su resultado final

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "orden"]

tipo: ordenar
enunciado: "Sobre un mismo monto de $10.000, calculá el resultado de cada recargo y ordená de menor a mayor."
opciones_explicitas:
  - "30%"
  - "10%"
  - "20%"
  - "5%"
respuesta_orden: ["5%", "10%", "20%", "30%"]

explicacion: |
  A mayor porcentaje de recargo, mayor el monto final — en este caso,
  coincide con el orden de los porcentajes mismos.
```

### 19 — Costo con y sin percepción recuperable

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "avanzado"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la Percepción de Ganancias se pague por adelantado en el momento de la compra en dólares, el costo REAL a largo plazo es menor que un recargo del mismo porcentaje que no se pueda recuperar nunca."

explicacion: |
  Recuperarlo después (descontándolo de un impuesto futuro) hace que el
  costo financiero final sea menor que el de un recargo definitivo,
  aunque en el momento de pagar la tarjeta se vea igual de caro.
```

### 20 — Problema: recargo por pagar en cuotas con tarjeta

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "problema"]

variables:
  precio_contado: random(10, 50) * 1000
  recargo_cuotas: uno_de([15, 20, 25])

respuesta: precio_contado * (1 + recargo_cuotas / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto cuesta ${precio_contado} al contado, pero pagar en cuotas con tarjeta tiene un recargo financiero del {recargo_cuotas}%. ¿Cuánto se termina pagando en total, en cuotas?"

explicacion: |
  El recargo por financiar en cuotas es otro caso habitual de recargo en
  la vida cotidiana.
```

### 21 — El orden de los recargos no cambia el resultado

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "vocabulario"]

variables:
  monto: random(10, 50) * 1000
  p1: uno_de([10, 20])
  p2: uno_de([5, 15])

respuesta: ((monto * (1 + p1 / 100) * (1 + p2 / 100)) == (monto * (1 + p2 / 100) * (1 + p1 / 100)))
tipo: vf

enunciado: "¿Da lo mismo aplicar primero el recargo del {p1}% y después el {p2}%, que al revés?"

explicacion: |
  Multiplicar es conmutativo: el orden de los recargos no cambia el
  resultado final.
```

### 22 — Recargo del 0% no cambia nada

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "basico"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un recargo del 0% deja el monto exactamente igual."

explicacion: |
  Multiplicar por (1+0/100)=1 no cambia nada.
```

### 23 — Comparar dos recargos

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "intermedio"
  tags: ["recargos_sucesivos", "comparacion"]

variables:
  monto: random(10, 50) * 1000
  p1: uno_de([10, 20])
  p2: uno_de([5, 15])

restricciones:
  - p1 != p2

respuesta: ((monto * (1 + p1 / 100)) > (monto * (1 + p2 / 100)))
tipo: vf

enunciado: "¿Un recargo del {p1}% deja un monto final mayor que uno del {p2}%, sobre el mismo ${monto}?"

explicacion: |
  A mayor porcentaje de recargo, mayor el monto final.
```

### 24 — Problema: percepción sobre un gasto en el exterior

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "avanzado"
  tags: ["recargos_sucesivos", "problema"]

variables:
  dolares: random(20, 100)
  cotizacion: random(950, 1250)

respuesta: dolares * cotizacion * 0.30
tipo: input
tolerancia_abs: 5

enunciado: "Gastás US$ {dolares} en el exterior con tarjeta, dólar a ${cotizacion}. ¿Cuántos pesos son sólo la percepción del 30% (sin contar el gasto en sí)?"

explicacion: |
  Es el monto que, más adelante, se puede descontar de Ganancias o
  Bienes Personales.
```

### 25 — Los recargos y descuentos usan la misma lógica matemática

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "basico"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Recargos y descuentos sucesivos usan la misma lógica matemática (multiplicar factores en cadena), sólo que unos suman y otros restan del 100%."

explicacion: |
  (1+p/100) para recargos, (1-p/100) para descuentos: la misma mecánica,
  signo distinto.
```

### 26 — Recargos sucesivos (cierre)

```
metadata:
  materia: "vida_cotidiana"
  tema: "recargos_sucesivos"
  nivel: "basico"
  tags: ["recargos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la vida cotidiana argentina hay recargos para situaciones bien específicas (compras en dólares, mora en pagos, cuotas con tarjeta), y algunos se recuperan más adelante mientras que otros son una pérdida definitiva."

explicacion: |
  Es la idea central de todo el tema: la fórmula matemática de los
  recargos sucesivos, aplicada a casos reales bien distintos entre sí.
```
