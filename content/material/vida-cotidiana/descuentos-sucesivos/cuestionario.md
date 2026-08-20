# Vida Cotidiana — Descuentos sucesivos (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Escenarios basados en el esquema
> real de descuentos bancarios argentinos investigado en agosto 2026
> (Cuenta DNI martes, Carrefour miércoles, Changomás jueves, Vea/Jumbo
> sábados — con topes de reintegro), sin fijar montos que van a quedar
> viejos: los porcentajes y topes se sortean dentro de rangos realistas.

---

### 1 — Por qué no se suman los descuentos sucesivos

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Aplicar un descuento del 20% y después uno del 15% (sobre el precio ya descontado) es lo mismo que aplicar un único descuento del 35%."

explicacion: |
  El segundo descuento se calcula sobre un precio más chico (el ya
  descontado), así que el descuento total real es menor a la suma
  ingenua de los dos porcentajes.
```

### 2 — Calcular un descuento sucesivo

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos"]

variables:
  precio: random(5, 50) * 1000
  p1: uno_de([10, 15, 20])
  p2: uno_de([5, 10])

respuesta: precio * (1 - p1 / 100) * (1 - p2 / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto cuesta ${precio}. Se le aplica primero un {p1}% de descuento, y después un {p2}% más (sobre el precio ya descontado). ¿Cuánto queda?"

pasos:
  - "{precio} × (1-{p1}/100) × (1-{p2}/100) = {precio * (1 - p1 / 100) * (1 - p2 / 100)}"

explicacion: |
  Cada descuento se aplica sobre el resultado del anterior, no sobre el
  precio original.
```

### 3 — Calcular un descuento sucesivo (otro caso)

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos"]

variables:
  precio: random(5, 80) * 1000
  p1: uno_de([25, 30])
  p2: uno_de([10, 15])

respuesta: precio * (1 - p1 / 100) * (1 - p2 / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto cuesta ${precio}, con {p1}% de descuento y después {p2}% más. ¿Cuánto queda?"

explicacion: |
  Mismo procedimiento, con otros porcentajes.
```

### 4 — Descuento sucesivo real vs. suma ingenua

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos"]

variables:
  precio: random(10, 50) * 1000
  p1: 20
  p2: 15
  resultado_real: precio * (1 - p1 / 100) * (1 - p2 / 100)
  resultado_ingenuo: precio * (1 - (p1 + p2) / 100)

respuesta: resultado_real
tipo: mc
opciones_explicitas:
  - resultado_real
  - resultado_ingenuo

enunciado: "Producto de ${precio}, con 20% de descuento y después 15% más (sucesivos). ¿Cuál de estos dos resultados es el correcto?"

explicacion: |
  El correcto es aplicar los descuentos uno tras otro; sumar los
  porcentajes (35%) da un resultado distinto (y menor descuento real del
  que parece).
```

### 5 — Problema real: descuento bancario de un día puntual

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(5, 15) * 1000

respuesta: compra * 0.85
tipo: input
tolerancia_abs: 0.5

enunciado: "Un banco ofrece 15% de descuento los martes en el supermercado (sin llegar al tope de reintegro). Comprando ${compra}, ¿cuánto pagás?"

explicacion: |
  Es un descuento bancario típico de un día puntual de la semana.
```

### 6 — Problema real: descuento bancario + efectivo combinados

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(5, 15) * 1000
  descuento_dia: 15
  descuento_efectivo: 10

respuesta: compra * (1 - descuento_dia / 100) * (1 - descuento_efectivo / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Comprás ${compra} un martes con {descuento_dia}% de descuento bancario, y además pagás en efectivo con otro {descuento_efectivo}% de descuento del comercio (sucesivo, sobre el precio ya rebajado por el banco). ¿Cuánto pagás en total?"

explicacion: |
  Son dos descuentos de origen distinto (banco + comercio) aplicados en
  cadena, como pasa seguido en la vida real.
```

### 7 — Qué es un tope de reintegro

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "vocabulario"]

enunciado: "¿Qué es un \"tope de reintegro\" en una promoción de descuento?"
tipo: mc
opciones_explicitas:
  - "El monto máximo que se puede descontar, aunque el porcentaje aplicado a una compra más grande daría más"
  - "El precio mínimo que hay que gastar para acceder al descuento"
  - "Otro nombre para el descuento total"
respuesta: "El monto máximo que se puede descontar, aunque el porcentaje aplicado a una compra más grande daría más"

explicacion: |
  Es un límite real que casi todas las promociones bancarias argentinas
  tienen, por día y por persona/tarjeta.
```

### 8 — Aplicar el tope: compra que lo supera

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(60, 150) * 1000
  porcentaje: 30
  tope: 15000

respuesta: min(compra * porcentaje / 100, tope)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un descuento del {porcentaje}% tiene un tope de reintegro de ${tope}. Comprando ${compra}, ¿cuánto es el descuento REAL que recibís?"

pasos:
  - "El {porcentaje}% de {compra} sería {compra * porcentaje / 100}, pero el tope es {tope}: se aplica lo menor de los dos"

explicacion: |
  Cuando el descuento calculado supera el tope, se recibe sólo el tope,
  no el porcentaje completo.
```

### 9 — Aplicar el tope: compra que NO lo supera

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(10, 30) * 1000
  porcentaje: 30
  tope: 15000

respuesta: min(compra * porcentaje / 100, tope)
tipo: input
tolerancia_abs: 0.5

enunciado: "Mismo descuento del {porcentaje}% con tope de ${tope}. Comprando ${compra}, ¿cuánto es el descuento real?"

explicacion: |
  Acá el {porcentaje}% de {compra} no llega al tope, así que se aplica el
  porcentaje completo, sin recorte.
```

### 10 — Superado el tope, comprar más no sigue descontando igual

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una vez que una compra supera el monto que hace tope el descuento, seguir comprando más no sigue descontando al mismo ritmo porcentual."

explicacion: |
  El descuento se queda fijo en el tope; lo que se compra de más ya no
  tiene descuento adicional.
```

### 11 — Elegir el resultado correcto con tope

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos"]

variables:
  compra: random(60, 150) * 1000
  porcentaje: 20
  tope: 10000
  correcto: compra - min(compra * porcentaje / 100, tope)
  incorrecto: compra * (1 - porcentaje / 100)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - incorrecto

enunciado: "Comprás ${compra}, con {porcentaje}% de descuento y tope de ${tope}. ¿Cuál es el precio final correcto?"

explicacion: |
  Ignorar el tope (aplicar el {porcentaje}% completo sin límite) da un
  precio final más bajo del que realmente corresponde.
```

### 12 — Problema: descuento para jubilados

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(5, 20) * 1000
  descuento_jubilados: uno_de([10, 15, 20])

respuesta: compra * (1 - descuento_jubilados / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un supermercado ofrece {descuento_jubilados}% de descuento para jubilados en ciertos días. Comprando ${compra}, ¿cuánto paga un jubilado?"

explicacion: |
  Son programas reales, algunos vinculados a ANSES, con condiciones que
  varían según el supermercado y el mes.
```

### 13 — Verificar un descuento sucesivo (con error a veces)

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "verificacion"]

variables:
  precio: random(10, 50) * 1000
  p1: uno_de([10, 20])
  p2: uno_de([5, 10])
  correcto: precio * (1 - p1 / 100) * (1 - p2 / 100)
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? ${precio} con {p1}% y después {p2}% de descuento sucesivo da ${mostrado}."

explicacion: |
  Se vuelve a aplicar la fórmula en cadena y se compara.
```

### 14 — Completar el segundo descuento

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos"]

variables:
  precio: 10000
  p1: 20
  p2: uno_de([10, 20, 25])
  resultado: precio * (1 - p1 / 100) * (1 - p2 / 100)

tipo: completar
enunciado: "${precio} con 20% de descuento y después ___% más da ${resultado}. Completá el segundo porcentaje."
respuestas_validas:
  - p2

explicacion: |
  Se despeja el segundo porcentaje probando contra el resultado final.
```

### 15 — Descuento total efectivo vs. nominal

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos"]

variables:
  precio: random(10, 50) * 1000
  p1: 20
  p2: 15
  final: precio * (1 - p1 / 100) * (1 - p2 / 100)
  descuento_efectivo_pct: (1 - final / precio) * 100

respuesta: descuento_efectivo_pct
tipo: input
tolerancia_abs: 0.5

enunciado: "Con 20% y después 15% de descuento sucesivo, ¿cuál es el porcentaje de descuento TOTAL efectivo (no la suma ingenua de 35%)?"

pasos:
  - "El precio final queda en el {final / precio * 100}% del original: eso es un {descuento_efectivo_pct}% de descuento real"

explicacion: |
  El descuento efectivo de dos descuentos sucesivos siempre es menor a
  la suma de los dos porcentajes por separado.
```

### 16 — Ordenar combinaciones de descuentos por su resultado final

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos", "orden"]

tipo: ordenar
enunciado: "Sobre un mismo precio de $10.000, calculá el resultado final de cada combinación de descuentos sucesivos y ordená de menor a mayor precio final."
opciones_explicitas:
  - "30% y después 10%"
  - "10% y después 10%"
  - "20% y después 20%"
  - "5% y después 5%"
respuesta_orden: ["30% y después 10%", "20% y después 20%", "10% y después 10%", "5% y después 5%"]

explicacion: |
  Precios finales: 6.300, 6.400, 8.100, 9.025 — a mayores descuentos
  combinados, menor el precio final.
```

### 17 — Problema: tres descuentos sucesivos

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  precio: random(10, 30) * 1000
  p1: 15
  p2: 10
  p3: 5

respuesta: precio * (1 - p1 / 100) * (1 - p2 / 100) * (1 - p3 / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto de ${precio} tiene {p1}% de descuento bancario, {p2}% más por pagar en efectivo, y {p3}% más por un cupón — los tres sucesivos. ¿Cuánto queda?"

pasos:
  - "{precio} × (1-{p1}/100) × (1-{p2}/100) × (1-{p3}/100) = {precio * (1 - p1 / 100) * (1 - p2 / 100) * (1 - p3 / 100)}"

explicacion: |
  Con tres descuentos, se encadenan los tres factores, uno detrás del
  otro.
```

### 18 — El orden de los descuentos no cambia el resultado

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "vocabulario"]

variables:
  precio: random(10, 50) * 1000
  p1: uno_de([10, 20])
  p2: uno_de([5, 15])

respuesta: ((precio * (1 - p1 / 100) * (1 - p2 / 100)) == (precio * (1 - p2 / 100) * (1 - p1 / 100)))
tipo: vf

enunciado: "¿Da lo mismo aplicar primero el {p1}% y después el {p2}%, que aplicar primero el {p2}% y después el {p1}%?"

explicacion: |
  Multiplicar es conmutativo: el orden de los factores no cambia el
  resultado final, aunque los pasos intermedios sean distintos.
```

### 19 — Comparar dos promociones de distintos días

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos", "comparacion"]

variables:
  compra: random(5, 12) * 1000
  descuento_martes: 15
  descuento_sabado: 30

respuesta: (compra * (1 - descuento_sabado / 100)) < (compra * (1 - descuento_martes / 100))
tipo: vf

enunciado: "Con ${compra} de compra (sin llegar a ningún tope), ¿conviene más comprar el sábado ({descuento_sabado}% de descuento) que el martes ({descuento_martes}%)?"

explicacion: |
  A mayor porcentaje de descuento, menor precio final: el sábado sale más
  barato en este caso.
```

### 20 — Problema: ahorro real limitado por el tope

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(80, 200) * 1000
  porcentaje: 25
  tope: 12000
  ahorro_teorico: compra * porcentaje / 100
  ahorro_real: min(ahorro_teorico, tope)

respuesta: ahorro_teorico - ahorro_real
tipo: input
tolerancia_abs: 0.5

enunciado: "Con {porcentaje}% de descuento y tope de ${tope}, comprando ${compra}: ¿cuánto MENOS ahorrás por culpa del tope, comparado con lo que ahorrarías sin ningún límite?"

pasos:
  - "Sin tope ahorrarías {ahorro_teorico}; con tope, sólo {ahorro_real}. La diferencia es {ahorro_teorico - ahorro_real}"

explicacion: |
  El tope recorta el ahorro en compras grandes: cuanto más se compra por
  encima del punto donde se alcanza el tope, más se nota la diferencia.
```

### 21 — Problema: descuento bancario sin llegar al tope

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "problema"]

variables:
  compra: random(3, 8) * 1000
  descuento: 20

respuesta: compra * descuento / 100
tipo: input
tolerancia_abs: 0.5

enunciado: "Comprás ${compra} con {descuento}% de descuento bancario (bien por debajo del tope). ¿Cuánto es el descuento en pesos?"

explicacion: |
  Sin acercarse al tope, el porcentaje se aplica completo.
```

### 22 — Un descuento del 100% deja el precio en 0

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un descuento del 100% deja el precio final en $0."

explicacion: |
  100% de descuento es no pagar nada.
```

### 23 — Dos descuentos chicos combinados

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "intermedio"
  tags: ["descuentos_sucesivos"]

variables:
  precio: random(10, 50) * 1000
  p1: 5
  p2: 5

respuesta: precio * (1 - p1 / 100) * (1 - p2 / 100)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto de ${precio} tiene dos descuentos sucesivos del {p1}% cada uno. ¿Cuánto queda?"

explicacion: |
  Aunque los porcentajes sean chicos, siguen sin sumarse directo: 5% y
  5% sucesivos no dan 10% de descuento total (dan un poco menos).
```

### 24 — Elegir cuál combinación de descuentos conviene más

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "avanzado"
  tags: ["descuentos_sucesivos", "comparacion"]

variables:
  precio: 10000
  opcion_a: precio * (1 - 30 / 100)
  opcion_b: precio * (1 - 20 / 100) * (1 - 10 / 100)

respuesta: opcion_a
tipo: mc
opciones_explicitas:
  - opcion_a
  - opcion_b

enunciado: "Sobre $10.000: ¿cuál conviene más, un único descuento del 30%, o dos sucesivos del 20% y el 10%?"

explicacion: |
  Un único 30% da $7.000; el 20% y 10% sucesivos dan $7.200 — el
  descuento único, cuando el porcentaje total nominal es el mismo, suele
  convenir más que partirlo en dos sucesivos.
```

### 25 — Los topes son habituales en promociones bancarias argentinas

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, la mayoría de las promociones bancarias de descuento en supermercados tienen un tope de reintegro por día y por persona o tarjeta."

explicacion: |
  Es una característica real y muy habitual de este tipo de promoción,
  no la excepción.
```

### 26 — Descuentos sucesivos (cierre)

```
metadata:
  materia: "vida_cotidiana"
  tema: "descuentos_sucesivos"
  nivel: "basico"
  tags: ["descuentos_sucesivos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la vida cotidiana argentina, es común combinar varios descuentos sucesivos (banco, efectivo, cupón), y casi siempre con algún tope que limita el ahorro máximo."

explicacion: |
  Es la idea central de todo el tema: la fórmula matemática de los
  descuentos sucesivos, aplicada a situaciones reales y frecuentes.
```
