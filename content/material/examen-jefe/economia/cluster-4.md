# Examen jefe — [PENDIENTE #769]

> Logro #769. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **111 preguntas totales** en 5/5 secciones.

---

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

## Sección: dex-swap (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cómo funciona un exchange centralizado (CEX) de criptomonedas?"
tipo: mc
opciones_explicitas:
  - "La empresa custodia el dinero de los usuarios y hace de intermediaria en cada operación"
  - "No existe ninguna empresa: todo pasa directo entre dos usuarios"
  - "Sólo permite comprar, nunca vender"
respuesta: "La empresa custodia el dinero de los usuarios y hace de intermediaria en cada operación"

explicacion: |
  Funciona parecido a un banco o casa de cambio tradicional.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un DEX (exchange descentralizado)?"
tipo: mc
opciones_explicitas:
  - "Un conjunto de contratos inteligentes que permite intercambiar criptomonedas directo desde la wallet de cada persona, sin custodio"
  - "Una empresa que reemplaza a los bancos tradicionales"
  - "Un tipo especial de criptomoneda"
respuesta: "Un conjunto de contratos inteligentes que permite intercambiar criptomonedas directo desde la wallet de cada persona, sin custodio"

explicacion: |
  Es la definición central: contratos inteligentes, sin custodia de
  una empresa.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un \"swap\"?"
tipo: mc
opciones_explicitas:
  - "La operación de intercambiar un token por otro dentro de un DEX"
  - "El nombre de una wallet especial para DEX"
  - "Un tipo de contrato inteligente distinto de los demás"
respuesta: "La operación de intercambiar un token por otro dentro de un DEX"

explicacion: |
  El DEX es la plataforma; el swap es la operación puntual que se
  hace en ella.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un swap no es un concepto distinto de un DEX: es, literalmente, la acción que un DEX ejecuta."

explicacion: |
  Son el mismo objeto visto desde dos nombres: la plataforma y la
  operación.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En un DEX, ¿quién custodia los fondos de un usuario mientras NO está haciendo un swap?"
tipo: mc
opciones_explicitas:
  - "El propio usuario, en su wallet"
  - "La empresa que creó el DEX"
  - "Un banco asociado al DEX"
respuesta: "El propio usuario, en su wallet"

explicacion: |
  Ninguna empresa custodia los fondos: siguen en la wallet del usuario
  hasta el instante del intercambio.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Cuando alguien hace un swap en un DEX, ¿contra quién intercambia sus tokens?"
tipo: mc
opciones_explicitas:
  - "Contra un pool de liquidez, un fondo compartido aportado por muchos usuarios"
  - "Contra otra persona específica, elegida de un libro de órdenes"
  - "Contra el banco central del país donde vive"
respuesta: "Contra un pool de liquidez, un fondo compartido aportado por muchos usuarios"

explicacion: |
  A diferencia de un CEX (que empareja compradores y vendedores), un
  DEX intercambia contra un pool automático.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre operar en un CEX y operar en un DEX?"
tipo: mc
opciones_explicitas:
  - "En el CEX se confía la custodia de los fondos a una empresa; en el DEX los fondos quedan en la wallet propia salvo en el instante del swap"
  - "El DEX sólo permite operar con una sola criptomoneda"
  - "El CEX no tiene ningún costo por operar"
respuesta: "En el CEX se confía la custodia de los fondos a una empresa; en el DEX los fondos quedan en la wallet propia salvo en el instante del swap"

explicacion: |
  Es la diferencia estructural central entre los dos modelos.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ventaja central de un DEX es que nadie más controla los fondos de un usuario en ningún momento, salvo el instante exacto del intercambio."

explicacion: |
  Elimina la necesidad de confiar en una empresa custodia.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "Si un usuario comete un error operando en un DEX (por ejemplo, aprueba mal una operación), ¿a quién puede reclamarle para revertirla?"
tipo: mc
opciones_explicitas:
  - "A nadie: no hay una empresa ni soporte técnico que pueda revertir la operación"
  - "Al soporte técnico del DEX, que revierte cualquier error"
  - "Al banco central del país"
respuesta: "A nadie: no hay una empresa ni soporte técnico que pueda revertir la operación"

explicacion: |
  Es la contracara del mismo mecanismo que da la ventaja de no
  depender de una empresa custodia.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un usuario que prefiere no dejar sus fondos en manos de un exchange tradicional suele operar directamente en un DEX, para mantener el control de sus propias claves."

explicacion: |
  Es la misma idea de autocustodia ya vista en el tema de wallets,
  aplicada a la elección de dónde operar.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué ejecuta materialmente el intercambio de tokens en un DEX?"
tipo: mc
opciones_explicitas:
  - "El código del contrato inteligente"
  - "Un empleado de la plataforma, de forma manual"
  - "Un banco intermediario"
respuesta: "El código del contrato inteligente"

explicacion: |
  Un DEX es, en esencia, un conjunto de contratos inteligentes que
  ejecutan la operación.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es una práctica habitual comparar el precio de un mismo par de tokens entre distintos DEX antes de operar, porque cada pool puede tener un precio levemente distinto en un momento dado."

explicacion: |
  Cada pool fija su propio precio según su propia composición interna
  (tema siguiente: `pools-liquidez-amm/`).
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "problema"]

enunciado: "Alguien intercambia 100 unidades de un token por otro token distinto, directamente desde su wallet, sin pasar por ninguna empresa. ¿Cómo se llama esa operación?"
tipo: mc
opciones_explicitas:
  - "Un swap"
  - "Un depósito en garantía (escrow)"
  - "Una devaluación"
respuesta: "Un swap"

explicacion: |
  Es exactamente la definición de swap: intercambiar un token por
  otro dentro de un DEX.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo funciona un swap en un DEX."
opciones_explicitas:
  - "El usuario recibe el nuevo token directo en su wallet"
  - "El contrato inteligente intercambia los tokens contra el pool de liquidez"
  - "El usuario elige qué token quiere entregar y cuál quiere recibir"
  - "El usuario aprueba la operación desde su propia wallet"
respuesta_orden: ["El usuario elige qué token quiere entregar y cuál quiere recibir", "El usuario aprueba la operación desde su propia wallet", "El contrato inteligente intercambia los tokens contra el pool de liquidez", "El usuario recibe el nuevo token directo en su wallet"]

explicacion: |
  Cada paso depende del anterior: sin elección no hay nada que
  aprobar, sin aprobación el contrato no puede ejecutar el swap.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un CEX, un DEX no necesita emparejar la orden de un comprador con la de un vendedor específico: intercambia directo contra el pool."

explicacion: |
  Es la diferencia con el libro de órdenes tradicional de un exchange
  centralizado.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un DEX es, en su base, un conjunto de contratos inteligentes que corren sobre una blockchain."

explicacion: |
  Reutiliza directo el concepto ya visto en `contratos-inteligentes/`.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Una plataforma te pide transferir tus criptomonedas a una cuenta que ella administra antes de poder operar. ¿Es un DEX o un CEX?"
tipo: mc
opciones_explicitas:
  - "Un CEX: te está pidiendo custodiar tus fondos"
  - "Un DEX: los fondos siempre quedan en tu propia wallet"
  - "Ninguno de los dos: ese modelo no existe"
respuesta: "Un CEX: te está pidiendo custodiar tus fondos"

explicacion: |
  Pedir custodia de los fondos es justamente lo que caracteriza a un
  exchange centralizado, no a un DEX.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Por qué operar en un DEX no requiere confiar en una empresa, a diferencia de un CEX?"
tipo: mc
opciones_explicitas:
  - "Porque el código del contrato inteligente, público y verificable, ejecuta la operación en vez de una empresa"
  - "Porque los DEX son gratis y los CEX no"
  - "Porque los DEX sólo operan con una moneda estable"
respuesta: "Porque el código del contrato inteligente, público y verificable, ejecuta la operación en vez de una empresa"

explicacion: |
  Reemplaza la confianza en una empresa por confianza en un código
  auditable.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá: el DEX es la ___ (plataforma), y el swap es la operación que se hace en ella."
respuestas_validas:
  - "plataforma"

explicacion: |
  Es la relación central entre los dos términos del tema.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué reemplaza al \"libro de órdenes\" de un exchange tradicional, dentro de un DEX?"
tipo: mc
opciones_explicitas:
  - "El pool de liquidez, que actúa como contraparte automática de cualquier swap"
  - "Un empleado que empareja manualmente cada operación"
  - "Nada: los DEX también usan un libro de órdenes idéntico"
respuesta: "El pool de liquidez, que actúa como contraparte automática de cualquier swap"

explicacion: |
  Es el puente hacia el tema siguiente: cómo ese pool fija el precio
  se explica en `pools-liquidez-amm/`.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un DEX permite hacer swap de un token por otro directo desde la propia wallet, sin que ninguna empresa custodie los fondos, intercambiando contra un pool de liquidez en vez de contra otra persona específica."

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

## Sección: partida-doble (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué establece el principio de partida doble?"
tipo: mc
opciones_explicitas:
  - "Que todo movimiento económico afecta a dos o más cuentas al mismo tiempo, nunca a una sola"
  - "Que todo movimiento se registra dos veces, en dos libros distintos"
  - "Que las empresas tienen que llevar doble contabilidad, una oficial y otra interna"
respuesta: "Que todo movimiento económico afecta a dos o más cuentas al mismo tiempo, nunca a una sola"

explicacion: |
  Es la regla base de toda la contabilidad moderna.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún movimiento económico de una empresa se registra en una sola cuenta: siempre afecta a dos o más."

explicacion: |
  Es la regla de oro de la partida doble.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier asiento contable, la suma de los importes del Debe tiene que ser exactamente igual a la suma de los importes del Haber."

explicacion: |
  Es lo que mantiene equilibrada la ecuación contable después de cada
  movimiento.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es un asiento contable?"
tipo: mc
opciones_explicitas:
  - "El registro de un movimiento: qué cuentas se debitan, qué cuentas se acreditan, y con qué importe"
  - "El balance final de toda la empresa"
  - "Un documento legal que reemplaza a una factura"
respuesta: "El registro de un movimiento: qué cuentas se debitan, qué cuentas se acreditan, y con qué importe"

explicacion: |
  Es la unidad básica de registro en contabilidad.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

variables:
  importe: random(50, 500) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Un asiento registra ${importe} en el Debe de \"Mercadería\" y ${importe} en el Haber de \"Caja\". ¿Está balanceado (Debe = Haber)?"

explicacion: |
  Los dos importes son exactamente iguales, así que el asiento respeta
  la partida doble.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

variables:
  debe: random(100, 500) * 1000
  haber: random(100, 500) * 1000

respuesta: (debe == haber)
tipo: vf

enunciado: "Un asiento registra ${debe} en el Debe y ${haber} en el Haber. ¿Está balanceado?"

explicacion: |
  Hay que comparar directamente ambos totales — si no coinciden, el
  asiento tiene un error.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 300) * 1000
  debe_2: random(50, 300) * 1000
  haber_conocido: random(50, 300) * 1000

respuesta: debe_1 + debe_2 - haber_conocido
tipo: input
tolerancia_abs: 0

enunciado: "Un asiento tiene dos líneas en el Debe: ${debe_1} y ${debe_2}. En el Haber ya hay una línea de ${haber_conocido}. ¿Cuál debe ser el importe de la segunda línea del Haber, para que el asiento quede balanceado?"

pasos:
  - "Total del Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Falta en el Haber: {debe_1 + debe_2} - {haber_conocido}"

explicacion: |
  El total del Haber tiene que igualar al total del Debe.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al comprar mercadería pagando en efectivo, tanto \"Mercadería\" como \"Caja\" son cuentas de Activo."

explicacion: |
  El activo total no cambia: sólo cambia de forma, de efectivo a
  mercadería.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando se compra mercadería pagando en efectivo, el activo total de la empresa no cambia: \"Mercadería\" sube en la misma cantidad que baja \"Caja\"."

explicacion: |
  Es un movimiento dentro del mismo grupo (Activo), no una ganancia ni
  una pérdida.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el Debe y el Haber de un asiento no coinciden, hay un error en el registro contable."

explicacion: |
  Es la primera revisión que hace cualquier contador ante un balance
  que \"no cierra\".
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La partida doble registra, en el mismo asiento, de dónde sale un recurso y a dónde va — nunca sólo una de las dos partes."

explicacion: |
  Es la razón del nombre \"doble\": las dos caras de cada movimiento se
  anotan juntas.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "comparacion"]

variables:
  debe_a: random(100, 400) * 1000
  haber_a: random(100, 400) * 1000
  debe_b: random(100, 400) * 1000

respuesta: (debe_a == haber_a)
tipo: vf

enunciado: "Asiento A: Debe ${debe_a}, Haber ${haber_a}. ¿El asiento A está balanceado?"

explicacion: |
  Se comparan directamente los dos totales del mismo asiento.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto registrar un pago en efectivo anotando sólo la salida de dinero de \"Caja\", sin registrar a qué cuenta fue ese dinero?"

explicacion: |
  Violaría la partida doble: todo movimiento necesita su contrapartida
  registrada en otra cuenta.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un asiento contable puede tener más de dos líneas (por ejemplo, dos cuentas en el Debe y una en el Haber), siempre que el total del Debe siga igualando al total del Haber."

explicacion: |
  \"Doble\" significa \"al menos dos\", no exactamente dos líneas
  siempre.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "problema"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 200) * 1000
  haber_2: random(50, 200) * 1000

respuesta: ((debe_1 + debe_2) == (haber_1 + haber_2))
tipo: vf

enunciado: "Un asiento tiene dos líneas en el Debe (${debe_1} y ${debe_2}) y dos líneas en el Haber (${haber_1} y ${haber_2}). ¿Está balanceado?"

explicacion: |
  Hay que sumar todas las líneas de cada lado antes de comparar.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos en el orden lógico para registrar un asiento contable."
opciones_explicitas:
  - "Verificar que el total del Debe sea igual al total del Haber"
  - "Identificar qué cuentas se ven afectadas por el movimiento"
  - "Anotar el importe correspondiente en el Debe o el Haber de cada cuenta"
respuesta_orden: ["Identificar qué cuentas se ven afectadas por el movimiento", "Anotar el importe correspondiente en el Debe o el Haber de cada cuenta", "Verificar que el total del Debe sea igual al total del Haber"]

explicacion: |
  Primero se identifican las cuentas, después se anotan los importes, y
  al final se verifica el balance.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  importe: random(50, 500) * 1000
  error: uno_de([0, 0, 0, 10000, -10000])
  haber_mostrado: importe + error

respuesta: (importe == haber_mostrado)
tipo: vf

enunciado: "¿Está bien registrado este asiento? Debe: ${importe}. Haber: ${haber_mostrado}."

explicacion: |
  Se comparan directamente los dos importes: si no coinciden, el
  asiento no respeta la partida doble.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  importe: random(50, 500) * 1000

tipo: completar
enunciado: "Un asiento tiene ${importe} en el Debe de \"Mercadería\". Para que el asiento quede balanceado, el Haber de \"Caja\" tiene que ser: ___ = {importe}."
respuestas_validas:
  - importe

explicacion: |
  El Haber tiene que igualar exactamente al Debe.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La partida doble no es sólo un trámite formal: es lo que permite detectar errores, porque si el Debe y el Haber no coinciden en algún punto, algo está mal registrado."

explicacion: |
  Es una herramienta de control, no sólo una regla administrativa.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los asientos armados con partida doble son la base de lo que después se organiza en el libro diario y el libro mayor."

explicacion: |
  Es la conexión directa con el próximo tema.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo asiento contable afecta al menos dos cuentas, y la suma del Debe siempre tiene que ser igual a la suma del Haber — es la regla de oro de la partida doble."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: plazo-fijo-vs-inflacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

enunciado: "¿Qué es el rendimiento real de una inversión?"
tipo: mc
opciones_explicitas:
  - "Cuánto creció el poder adquisitivo del dinero, descontando la inflación del período"
  - "La tasa de interés que informa el banco, sin ajustar por nada más"
  - "La diferencia entre dos bancos distintos que ofrecen la misma inversión"
respuesta: "Cuánto creció el poder adquisitivo del dinero, descontando la inflación del período"

explicacion: |
  Es la diferencia entre "cuántos pesos más tengo" (nominal) y "cuánto
  más puedo comprar con esos pesos" (real).
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La tasa nominal es la que informa el banco: cuántos pesos de más da la inversión, sin ajustar por la inflación del período."

explicacion: |
  Es el punto de partida del cálculo, pero por sí sola no dice si el
  dinero ganó o perdió poder de compra.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "calculo"]

variables:
  tasa_nominal: random(20, 150)
  inflacion: random(20, 150)

respuesta: ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
tipo: input
tolerancia_abs: 0.3

enunciado: "Un plazo fijo pagó una tasa nominal anual del {tasa_nominal}%, en un año con una inflación del {inflacion}%. ¿Cuál fue el rendimiento real, en porcentaje?"

pasos:
  - "rendimiento_real = (1 + {tasa_nominal/100}) / (1 + {inflacion/100}) - 1"

explicacion: |
  Se aplica la ecuación de Fisher: se divide (1 + tasa nominal) por
  (1 + inflación), y se le resta 1.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

variables:
  inflacion: random(50, 150)
  tasa_nominal: random(20, 49)

respuesta: (((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) < 0)
tipo: vf

enunciado: "Un plazo fijo pagó una tasa nominal anual del {tasa_nominal}%, en un año con una inflación del {inflacion}%. ¿El rendimiento real fue negativo?"

explicacion: |
  Cuando la inflación supera a la tasa nominal, el rendimiento real
  siempre da negativo.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible tener un rendimiento real negativo aunque el saldo en pesos de la cuenta haya crecido: el dinero es \"más\" en pesos, pero compra menos que antes."

explicacion: |
  Eso es justamente lo que revela el rendimiento real, que la sola tasa
  nominal no muestra.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real"]

enunciado: "¿Cuál es la fórmula correcta del rendimiento real (ecuación de Fisher)?"
tipo: mc
opciones_explicitas:
  - "(1 + tasa_nominal) / (1 + inflación) - 1"
  - "tasa_nominal / inflación"
  - "tasa_nominal + inflación"
respuesta: "(1 + tasa_nominal) / (1 + inflación) - 1"

explicacion: |
  La segunda y la tercera opción no son la fórmula de Fisher: no
  reflejan cómo se combinan tasa nominal e inflación.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Rendimiento real ≈ tasa nominal − inflación\" es sólo una aproximación de la ecuación de Fisher, válida cuando ambas tasas son chicas — no es el cálculo exacto."

explicacion: |
  El cálculo exacto es (1 + tasa_nominal) / (1 + inflación) - 1, no la
  resta directa.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con tasas de interés e inflación altas (como suele pasar en Argentina), la aproximación \"tasa nominal − inflación\" se aleja bastante del resultado exacto de la ecuación de Fisher."

explicacion: |
  La aproximación ignora el término que divide por (1 + inflación); ese
  error se vuelve grande cuando la inflación no es chica.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  tasa_nominal: random(60, 150)
  inflacion: random(60, 150)

respuesta: (tasa_nominal - inflacion) - ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
tipo: input
tolerancia_abs: 0.5

enunciado: "Con una tasa nominal del {tasa_nominal}% y una inflación del {inflacion}%, ¿cuántos puntos porcentuales de diferencia hay entre la aproximación simple (resta directa) y el resultado exacto de Fisher?"

pasos:
  - "Aproximación: {tasa_nominal} - {inflacion} = {tasa_nominal - inflacion}"
  - "Exacto: (1 + {tasa_nominal/100}) / (1 + {inflacion/100}) - 1, en porcentaje"

explicacion: |
  Con tasas de esta magnitud, la diferencia entre ambos cálculos ya no
  es despreciable.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "comparacion"]

variables:
  tasa_nominal: random(20, 150)
  inflacion_a: random(20, 60)
  inflacion_b: random(61, 150)

respuesta: (((1 + tasa_nominal / 100) / (1 + inflacion_b / 100) - 1) < ((1 + tasa_nominal / 100) / (1 + inflacion_a / 100) - 1))
tipo: vf

enunciado: "Con la misma tasa nominal del {tasa_nominal}%, ¿una inflación del {inflacion_b}% da un rendimiento real menor que una inflación del {inflacion_a}%?"

explicacion: |
  A mayor inflación, con la misma tasa nominal, menor el rendimiento
  real — la inflación erosiona más el poder de compra.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "comparacion"]

variables:
  inflacion: random(20, 150)
  tasa_a: random(20, 60)
  tasa_b: random(61, 150)

respuesta: (((1 + tasa_b / 100) / (1 + inflacion / 100) - 1) > ((1 + tasa_a / 100) / (1 + inflacion / 100) - 1))
tipo: vf

enunciado: "Con la misma inflación del {inflacion}%, ¿una tasa nominal del {tasa_b}% da un rendimiento real mayor que una del {tasa_a}%?"

explicacion: |
  A igual inflación, a mayor tasa nominal, mayor el rendimiento real.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  inflacion: random(20, 150)

respuesta: inflacion
tipo: input
tolerancia_abs: 0.01

enunciado: "Si la inflación de un año fue del {inflacion}%, ¿qué tasa nominal anual necesitaba pagar una inversión para que el rendimiento real diera exactamente 0%?"

explicacion: |
  Por la ecuación de Fisher, el rendimiento real da 0% sólo cuando la
  tasa nominal es exactamente igual a la inflación.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  inflacion: random(30, 150)
  rendimiento_real_objetivo: random(5, 20)
  tasa_nominal: (1 + rendimiento_real_objetivo / 100) * (1 + inflacion / 100) * 100 - 100

respuesta: tasa_nominal
tipo: input
tolerancia_abs: 0.5

enunciado: "En un año con {inflacion}% de inflación, ¿qué tasa nominal anual hace falta para lograr un rendimiento real del {rendimiento_real_objetivo}%?"

pasos:
  - "tasa_nominal = (1 + rendimiento_real) × (1 + inflación) - 1"

explicacion: |
  Se despeja la tasa nominal de la ecuación de Fisher: (1 + tasa_nominal)
  = (1 + rendimiento_real) × (1 + inflación).
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "problema"]

variables:
  capital: random(100, 1000) * 1000
  tasa_nominal: random(30, 150)
  inflacion: random(30, 150)
  monto_nominal: capital * (1 + tasa_nominal / 100)

respuesta: monto_nominal / (1 + inflacion / 100)
tipo: input
tolerancia_abs: 5

enunciado: "Un capital de ${capital} se puso a plazo fijo un año, a una tasa nominal anual del {tasa_nominal}%, en un año con {inflacion}% de inflación. El monto nominal al final es ${redondear(monto_nominal, 2)}. ¿Cuánto vale eso en poder de compra de hoy (valor real, en los pesos de hace un año)?"

pasos:
  - "Valor real = monto nominal ÷ (1 + inflación) = {redondear(monto_nominal, 2)} ÷ {1 + inflacion/100}"

explicacion: |
  Se divide el monto nominal final por (1 + inflación) para expresarlo
  en el poder de compra del momento en que se empezó a invertir.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Elegir un plazo fijo sólo por tener la tasa nominal más alta, sin comparar contra la inflación esperada, puede llevar a un resultado real peor que otra opción con tasa nominal más baja pero rendimiento real mayor."

explicacion: |
  Lo mismo que ya pasaba al comparar créditos por CFT en vez de por TNA:
  el número nominal más llamativo no siempre es el mejor dato para
  decidir.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real"]

variables:
  tasa_nominal: random(20, 60)
  inflacion: random(20, 60)
  aproximado: tasa_nominal - inflacion

tipo: completar
enunciado: "Con una tasa nominal del {tasa_nominal}% y una inflación del {inflacion}%, completá la aproximación simple: {tasa_nominal} (tasa nominal) - {inflacion} (inflación) = ___ (rendimiento real aproximado, en puntos porcentuales)."
respuestas_validas:
  - aproximado

explicacion: |
  Es la aproximación simple (válida sólo con tasas chicas) — no la
  ecuación de Fisher exacta.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La inflación reduce el rendimiento real de una inversión, incluso si esa inversión paga intereses positivos."

explicacion: |
  Los intereses suman pesos; la inflación resta poder de compra a esos
  mismos pesos — el resultado neto es lo que mide el rendimiento real.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que el rendimiento real dé exactamente 0% es un caso muy puntual: sólo pasa cuando la tasa nominal coincide exactamente con la inflación del mismo período."

explicacion: |
  Cualquier diferencia entre ambas, para cualquier lado, ya da un
  rendimiento real distinto de cero.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "orden"]

tipo: ordenar
enunciado: "Con una inflación anual del 50% fija, ordená estos rendimientos nominales de menor a mayor rendimiento real."
opciones_explicitas:
  - "Nominal 80%"
  - "Nominal 40%"
  - "Nominal 60%"
respuesta_orden: ["Nominal 40%", "Nominal 60%", "Nominal 80%"]

explicacion: |
  A igual inflación, a mayor tasa nominal, mayor rendimiento real — el
  orden de la tasa nominal es el mismo que el del rendimiento real.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "verificacion"]

variables:
  tasa_nominal: random(20, 150)
  inflacion: random(20, 150)
  correcto: ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? Tasa nominal {tasa_nominal}%, inflación {inflacion}%, rendimiento real informado: {redondear(mostrado, 2)}%."

explicacion: |
  Se vuelve a aplicar la ecuación de Fisher y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de sueldo que queda por debajo de la inflación del mismo período es, en términos reales, una pérdida de poder adquisitivo — aunque el número en el recibo de sueldo sea más alto que antes."

explicacion: |
  Es el mismo concepto de rendimiento real aplicado a un sueldo en vez
  de a una inversión.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El rendimiento real se calcula con (1 + tasa nominal) / (1 + inflación) - 1: mide cuánto cambió el poder de compra del dinero, no sólo cuántos pesos de más hay."

explicacion: |
  Es la idea central de todo el tema.
```

