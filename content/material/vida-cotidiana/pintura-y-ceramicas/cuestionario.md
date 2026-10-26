# Vida Cotidiana — Pintura y cerámicas para un ambiente (cuestionario, 25 preguntas VBLang)

> Tema: `V2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué hace falta calcular primero

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["pintura", "vocabulario"]

enunciado: "¿Qué hay que calcular primero para saber cuánta pintura o cuántos cerámicos comprar para un ambiente?"
tipo: mc
opciones_explicitas:
  - "El área de la superficie a cubrir (paredes o piso)"
  - "El precio del producto en distintos comercios"
  - "El color que se va a usar"
respuesta: "El área de la superficie a cubrir (paredes o piso)"

explicacion: |
  Todo el cálculo parte del área, ya visto en
  `../../matematica/perimetro-y-area/`.
```

### 2 — Problema: área de las paredes de un ambiente

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["pintura", "problema"]

variables:
  perimetro: random(12, 30)
  altura: uno_de([2.4, 2.6, 2.8, 3])

respuesta: perimetro * altura
tipo: input
tolerancia_abs: 0.1

enunciado: "Un ambiente tiene un perímetro de {perimetro} m, y sus paredes miden {altura} m de altura. ¿Cuál es el área total de las paredes (sin descontar puertas ni ventanas)?"

pasos:
  - "{perimetro} × {altura} = {perimetro * altura} m²"

explicacion: |
  El área de las paredes es el perímetro del ambiente por la altura.
```

### 3 — Problema: área de pared descontando puerta y ventana

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["pintura", "problema"]

variables:
  area_bruta: random(30, 60)
  area_puerta: uno_de([1.6, 1.8, 2])
  area_ventana: uno_de([1.2, 1.5, 2])

respuesta: redondear(area_bruta - area_puerta - area_ventana, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Las paredes de un ambiente suman {area_bruta} m² en total. Tienen una puerta de {area_puerta} m² y una ventana de {area_ventana} m². ¿Cuál es el área real a pintar?"

pasos:
  - "{area_bruta} − {area_puerta} − {area_ventana} = {redondear(area_bruta - area_puerta - area_ventana, 2)} m²"

explicacion: |
  Las puertas y ventanas no se pintan: se restan del área bruta, como
  cualquier figura compuesta con resta.
```

### 4 — Problema: litros de pintura para una mano

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["pintura", "problema"]

variables:
  area: uno_de([40, 60, 80, 100, 120])
  rendimiento: uno_de([10, 12])

respuesta: redondear(area / rendimiento, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Hay que pintar {area} m² de pared. La pintura rinde {rendimiento} m² por litro. ¿Cuántos litros hacen falta para dar UNA mano?"

pasos:
  - "{area} ÷ {rendimiento} = {redondear(area / rendimiento, 2)} litros"

explicacion: |
  Se divide el área a pintar por el rendimiento declarado del producto.
```

### 5 — Problema: litros de pintura con dos manos

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["pintura", "problema"]

variables:
  area: uno_de([40, 60, 80, 100, 120])
  rendimiento: uno_de([10, 12])

respuesta: redondear((area / rendimiento) * 2, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Hay que pintar {area} m² de pared con DOS manos de pintura, que rinde {rendimiento} m² por litro por mano. ¿Cuántos litros hacen falta en total?"

pasos:
  - "Una mano: {area} ÷ {rendimiento} = {redondear(area / rendimiento, 2)} litros"
  - "Dos manos: {redondear(area / rendimiento, 2)} × 2 = {redondear((area / rendimiento) * 2, 2)} litros"

explicacion: |
  Cada mano adicional se suma al cálculo: dos manos son el doble de
  litros que una sola.
```

### 6 — Por qué se necesitan dos manos de pintura

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["pintura", "vocabulario"]

enunciado: "¿Por qué casi siempre se recomiendan dos manos de pintura, y no una sola?"
tipo: mc
opciones_explicitas:
  - "Para lograr una cobertura pareja y un color uniforme en toda la superficie"
  - "Porque la pintura se seca antes de terminar de aplicarla"
  - "Es sólo una tradición, con una mano alcanza igual"
respuesta: "Para lograr una cobertura pareja y un color uniforme en toda la superficie"

explicacion: |
  Con una sola mano suelen quedar zonas más finas o transparentes que
  otras.
```

### 7 — El rendimiento de la pintura no es siempre el mismo

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["pintura"]

respuesta: falso
tipo: vf

enunciado: "El rendimiento de una pintura (cuántos m² cubre por litro) es siempre exactamente el mismo, sin importar la marca, el color o la textura de la pared."

explicacion: |
  Varía según esos factores — una pared texturada o con revoque nuevo
  consume bastante más pintura que una pared lisa ya pintada.
```

### 8 — Qué factor reduce el rendimiento de la pintura

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["pintura", "vocabulario"]

enunciado: "¿Cuál de estas situaciones REDUCE el rendimiento (m² por litro) de una pintura?"
tipo: mc
opciones_explicitas:
  - "Pintar sobre una pared con textura o un revoque recién hecho"
  - "Pintar con un rodillo nuevo"
  - "Usar una pintura de un color más claro"
respuesta: "Pintar sobre una pared con textura o un revoque recién hecho"

explicacion: |
  Una superficie más porosa o irregular absorbe más pintura por metro
  cuadrado.
```

### 9 — Problema: redondear la compra de pintura hacia arriba

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["pintura", "problema"]

variables:
  area: uno_de([45, 55, 65, 75, 85])
  rendimiento: 10

respuesta: ceil(area / rendimiento)
tipo: input
tolerancia_abs: 0

enunciado: "El cálculo da que hacen falta {redondear(area / rendimiento, 2)} litros de pintura, pero se vende sólo en latas de 1 litro. ¿Cuántas latas hay que comprar como mínimo?"

pasos:
  - "Se redondea hacia arriba: {ceil(area / rendimiento)} latas"

explicacion: |
  No se puede comprar una fracción de lata: siempre se redondea hacia
  arriba, aunque sobre un poco.
```

### 10 — Por qué se redondea hacia arriba al comprar pintura

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["pintura", "vocabulario"]

enunciado: "¿Por qué la cantidad de pintura a comprar se redondea siempre hacia arriba?"
tipo: mc
opciones_explicitas:
  - "Porque se vende en envases de tamaño fijo, y comprar de menos deja el trabajo sin terminar"
  - "Porque la pintura se vence rápido"
  - "Es sólo una costumbre sin motivo práctico"
respuesta: "Porque se vende en envases de tamaño fijo, y comprar de menos deja el trabajo sin terminar"

explicacion: |
  Sobra un poco de pintura, pero es preferible a quedarse corto a mitad
  del trabajo.
```

### 11 — Problema: área de piso a revestir con cerámicos

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["ceramicos", "problema"]

variables:
  largo: random(3, 8)
  ancho: random(3, 6)

respuesta: largo * ancho
tipo: input
tolerancia_abs: 0

enunciado: "Un ambiente rectangular mide {largo} m de largo por {ancho} m de ancho. ¿Cuál es el área de piso a revestir con cerámicos?"

pasos:
  - "{largo} × {ancho} = {largo * ancho} m²"

explicacion: |
  Es el área del rectángulo, ya visto en
  `../../matematica/perimetro-y-area/`.
```

### 12 — Qué es el desperdicio en la instalación de cerámicos

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["ceramicos", "vocabulario"]

enunciado: "¿Qué es el 'desperdicio' al calcular cuántos cerámicos comprar?"
tipo: mc
opciones_explicitas:
  - "El material extra que se compra de más, para cubrir los cortes en bordes y esquinas que se pierden"
  - "Los cerámicos que sobran porque se compró de más por error"
  - "Un impuesto que se paga al comprar materiales de construcción"
respuesta: "El material extra que se compra de más, para cubrir los cortes en bordes y esquinas que se pierden"

explicacion: |
  Al cortar cerámicos para ajustarlos a los bordes, una parte del
  material se pierde.
```

### 13 — Problema: área a comprar con 10% de desperdicio

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["ceramicos", "problema"]

variables:
  area: uno_de([20, 30, 40, 50, 60])

respuesta: redondear(area * 1.10, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Hay que revestir {area} m² de piso, en un ambiente rectangular simple (sin diagonales). Se recomienda sumar un 10% de desperdicio. ¿Cuántos m² de cerámicos hay que comprar?"

pasos:
  - "{area} × 1,10 = {redondear(area * 1.10, 2)} m²"

explicacion: |
  El 10% adicional cubre los cortes de los bordes y esquinas.
```

### 14 — Problema: área a comprar con 15% de desperdicio (diseño con diagonales)

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["ceramicos", "problema"]

variables:
  area: uno_de([20, 30, 40, 50])

respuesta: redondear(area * 1.15, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Hay que revestir {area} m² de piso, con un diseño que tiene varios cortes en diagonal. Se recomienda sumar un 15% de desperdicio en este caso. ¿Cuántos m² de cerámicos hay que comprar?"

pasos:
  - "{area} × 1,15 = {redondear(area * 1.15, 2)} m²"

explicacion: |
  Cuantos más cortes y diagonales tiene el diseño, más material se
  pierde en los recortes.
```

### 15 — Instalaciones con diagonales necesitan más desperdicio

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["ceramicos"]

respuesta: verdadero
tipo: vf

enunciado: "Una instalación de cerámicos con diseño en diagonal o con muchos cortes necesita un porcentaje de desperdicio mayor que una instalación simple y recta."

explicacion: |
  Más cortes irregulares significan más piezas que no se pueden
  aprovechar enteras.
```

### 16 — Problema: cantidad de cajas de cerámicos necesarias

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["ceramicos", "problema"]

variables:
  area_a_comprar: uno_de([33, 44, 55, 66, 77])
  area_por_caja: 1.1

respuesta: ceil(area_a_comprar / area_por_caja)
tipo: input
tolerancia_abs: 0

enunciado: "Hace falta comprar {area_a_comprar} m² de cerámicos (ya con el desperdicio incluido). Cada caja cubre {area_por_caja} m². ¿Cuántas cajas hay que comprar como mínimo?"

pasos:
  - "{area_a_comprar} ÷ {area_por_caja} = {redondear(area_a_comprar / area_por_caja, 2)}, se redondea hacia arriba: {ceil(area_a_comprar / area_por_caja)} cajas"

explicacion: |
  No se puede comprar una fracción de caja: se redondea siempre hacia
  arriba.
```

### 17 — Ordenar: pasos para calcular la pintura necesaria

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["pintura", "ordenar"]

enunciado: "Ordená los pasos para calcular cuánta pintura comprar para un ambiente."
tipo: ordenar
opciones_explicitas:
  - "Redondear el resultado hacia arriba, al envase disponible más conveniente"
  - "Calcular el área de las paredes y restar puertas y ventanas"
  - "Dividir esa área por el rendimiento del producto, y multiplicar por la cantidad de manos"
respuesta_orden: ["Calcular el área de las paredes y restar puertas y ventanas", "Dividir esa área por el rendimiento del producto, y multiplicar por la cantidad de manos", "Redondear el resultado hacia arriba, al envase disponible más conveniente"]
explicacion: |
  El área siempre se calcula primero; el redondeo a envase comercial es
  siempre el último paso.
```

### 18 — Ordenar: pasos para calcular los cerámicos necesarios

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["ceramicos", "ordenar"]

enunciado: "Ordená los pasos para calcular cuántos cerámicos comprar para un piso."
tipo: ordenar
opciones_explicitas:
  - "Dividir por el área que cubre cada caja, y redondear hacia arriba"
  - "Calcular el área del piso a revestir"
  - "Sumarle el porcentaje de desperdicio esperado"
respuesta_orden: ["Calcular el área del piso a revestir", "Sumarle el porcentaje de desperdicio esperado", "Dividir por el área que cubre cada caja, y redondear hacia arriba"]
explicacion: |
  El desperdicio se suma ANTES de calcular la cantidad de cajas, no
  después.
```

### 19 — Las puertas y ventanas se restan del área de pared

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["pintura"]

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el área de pared a pintar, hay que restar el área de las puertas y ventanas, porque esas superficies no se pintan."

explicacion: |
  Es la misma lógica de las figuras compuestas con resta.
```

### 20 — Riesgo de subestimar los cerámicos a comprar

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["ceramicos", "vocabulario"]

enunciado: "¿Cuál es el riesgo de calcular de menos la cantidad de cerámicos a comprar, y tener que volver a comprar después?"
tipo: mc
opciones_explicitas:
  - "Que el nuevo lote de fabricación tenga un tono levemente distinto al ya colocado"
  - "Que los cerámicos nuevos sean más baratos"
  - "No hay ningún riesgo real, siempre se puede volver a comprar igual"
respuesta: "Que el nuevo lote de fabricación tenga un tono levemente distinto al ya colocado"

explicacion: |
  Es una razón práctica fuerte para calcular bien de entrada, incluyendo
  el desperdicio.
```

### 21 — Problema avanzado: pintura combinando área neta, rendimiento y manos

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["pintura", "problema"]

variables:
  area_bruta: uno_de([50, 60, 70, 80])
  area_huecos: uno_de([4, 6, 8])
  rendimiento: 10

respuesta: ceil(((area_bruta - area_huecos) / rendimiento) * 2)
tipo: input
tolerancia_abs: 0

enunciado: "Las paredes de un ambiente suman {area_bruta} m², con {area_huecos} m² de puertas y ventanas. La pintura rinde {rendimiento} m² por litro por mano, se van a dar 2 manos, y se vende en latas de 1 litro. ¿Cuántas latas hay que comprar como mínimo?"

pasos:
  - "Área neta: {area_bruta} − {area_huecos} = {area_bruta - area_huecos} m²"
  - "Litros por mano: {area_bruta - area_huecos} ÷ {rendimiento} = {redondear((area_bruta - area_huecos) / rendimiento, 2)}"
  - "Dos manos: {redondear((area_bruta - area_huecos) / rendimiento, 2)} × 2 = {redondear(((area_bruta - area_huecos) / rendimiento) * 2, 2)} litros"
  - "Redondeando hacia arriba: {ceil(((area_bruta - area_huecos) / rendimiento) * 2)} latas"

explicacion: |
  Es la cadena completa: área neta, después litros por mano, después
  total con las dos manos, y por último el redondeo a envases enteros.
```

### 22 — No se pueden comprar cerámicos por metro cuadrado exacto

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["ceramicos"]

respuesta: verdadero
tipo: vf

enunciado: "Los cerámicos se venden por caja (con una cantidad fija de m² cada una), no por metro cuadrado exacto y suelto."

explicacion: |
  Por eso el resultado final siempre se redondea hacia arriba, a la
  cantidad de cajas completas.
```

### 23 — Instalaciones simples necesitan menos desperdicio

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "intermedio"
  tags: ["ceramicos"]

respuesta: verdadero
tipo: vf

enunciado: "Un ambiente rectangular simple, sin diagonales ni cortes complicados, necesita un porcentaje de desperdicio menor que uno con un diseño más elaborado."

explicacion: |
  Menos cortes irregulares significa menos material perdido.
```

### 24 — Por qué conviene revisar el envase concreto que se va a usar

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "avanzado"
  tags: ["pintura", "vocabulario"]

enunciado: "¿Por qué conviene revisar el rendimiento declarado en el envase concreto de pintura que se va a comprar, en vez de usar siempre el mismo número de memoria?"
tipo: mc
opciones_explicitas:
  - "Porque el rendimiento varía según la marca, la fórmula del producto y el tipo de superficie"
  - "Porque el envase siempre miente sobre el rendimiento real"
  - "No hace falta revisarlo, todas las pinturas rinden exactamente igual"
respuesta: "Porque el rendimiento varía según la marca, la fórmula del producto y el tipo de superficie"

explicacion: |
  Los 10-12 m²/litro son sólo una referencia típica, no un valor fijo
  para cualquier producto.
```

### 25 — Cierre: para qué sirve este cálculo

```
metadata:
  materia: "vida_cotidiana"
  tema: "pintura_y_ceramicas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular bien el área, el rendimiento y el desperdicio antes de comprar pintura o cerámicos?"
tipo: mc
opciones_explicitas:
  - "Para evitar quedarse corto a mitad del trabajo, o gastar de más comprando innecesariamente"
  - "Sólo para cumplir con un trámite municipal"
  - "No tiene ninguna utilidad práctica real"
respuesta: "Para evitar quedarse corto a mitad del trabajo, o gastar de más comprando innecesariamente"

explicacion: |
  Es la misma habilidad de aplicar área y proporciones a una decisión de
  compra real.
```
