# Vida Cotidiana — Comparar productos: costo real, no precio de góndola (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Precio por unidad de medida:
> `(precio del paquete / contenido neto) × unidad de referencia`.

---

### 1 — Qué es el precio de góndola

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "basico"
  tags: ["comparar_productos", "vocabulario"]

enunciado: "¿Qué es el \"precio de góndola\"?"
tipo: mc
opciones_explicitas:
  - "El precio del paquete tal como se muestra en el estante, sin ajustar por su contenido"
  - "El precio por kilogramo o litro de un producto"
  - "El precio con descuento aplicado"
respuesta: "El precio del paquete tal como se muestra en el estante, sin ajustar por su contenido"

explicacion: |
  Es el número más visible, pero no siempre el más útil para comparar.
```

### 2 — Puede ser engañoso por el tamaño del paquete

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "basico"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar sólo el precio de góndola puede ser engañoso, porque dos paquetes del mismo producto pueden tener tamaños (contenido neto) distintos."

explicacion: |
  El paquete más caro en pesos puede, en realidad, salir más barato por
  unidad de medida.
```

### 3 — Qué es el precio por unidad de medida

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "basico"
  tags: ["comparar_productos", "vocabulario"]

enunciado: "¿Qué es el precio por unidad de medida (PPUM)?"
tipo: mc
opciones_explicitas:
  - "El precio que le correspondería a una cantidad estándar del producto (1 kg, 1 L), sin importar el tamaño real del paquete"
  - "El precio total que se paga en la caja del supermercado"
  - "El descuento que se aplica por comprar varias unidades"
respuesta: "El precio que le correspondería a una cantidad estándar del producto (1 kg, 1 L), sin importar el tamaño real del paquete"

explicacion: |
  Es lo que permite comparar productos de forma pareja, más allá del
  tamaño de cada paquete.
```

### 4 — Calcular el precio por kilogramo

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "calculo"]

variables:
  precio_paquete: random(500, 3000)
  gramos: random(100, 900)

respuesta: (precio_paquete / gramos) * 1000
tipo: input
tolerancia_abs: 1

enunciado: "Un paquete de {gramos} g cuesta ${precio_paquete}. ¿Cuál es el precio por kilogramo?"

pasos:
  - "PPUM = ({precio_paquete} ÷ {gramos}) × 1000"

explicacion: |
  Se divide el precio por el contenido en gramos, y se multiplica por
  1000 para expresarlo por kilogramo.
```

### 5 — Calcular el precio por litro

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "calculo"]

variables:
  precio_paquete: random(500, 3000)
  mililitros: random(200, 1500)

respuesta: (precio_paquete / mililitros) * 1000
tipo: input
tolerancia_abs: 1

enunciado: "Una botella de {mililitros} ml cuesta ${precio_paquete}. ¿Cuál es el precio por litro?"

explicacion: |
  Se divide el precio por el contenido en mililitros, y se multiplica
  por 1000 para expresarlo por litro.
```

### 6 — Comparar dos paquetes por precio por kilo

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "avanzado"
  tags: ["comparar_productos", "comparacion"]

variables:
  precio_a: random(800, 1500)
  gramos_a: random(200, 300)
  precio_b: random(1200, 2500)
  gramos_b: random(400, 600)

respuesta: (((precio_b / gramos_b) * 1000) < ((precio_a / gramos_a) * 1000))
tipo: vf

enunciado: "Producto A: {gramos_a} g por ${precio_a}. Producto B: {gramos_b} g por ${precio_b}. ¿El producto B es más barato por kilogramo que el A, aunque cueste más en pesos el paquete?"

pasos:
  - "PPUM A: ({precio_a} ÷ {gramos_a}) × 1000"
  - "PPUM B: ({precio_b} ÷ {gramos_b}) × 1000"

explicacion: |
  Hay que calcular el precio por kilo de cada uno y comparar — el precio
  del paquete solo no alcanza.
```

### 7 — Es obligación legal en Argentina

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, mostrar el precio por unidad de medida junto al precio del paquete es una obligación legal para supermercados y autoservicios, no sólo una buena práctica."

explicacion: |
  Está fijado por la Resolución 87/2003, que amplía la Resolución
  55/2002.
```

### 8 — El objetivo es simplificar la comparación

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo de exigir el precio por unidad de medida en el cartel es que el consumidor pueda comparar sin tener que calcularlo por su cuenta en el supermercado."

explicacion: |
  Aunque en este cuestionario se practique el cálculo, en la vida real
  el cartel ya debería traerlo hecho.
```

### 9 — Presentaciones chicas se referencian cada 100 g

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "avanzado"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para presentaciones de 50 g/ml o menos, la referencia del precio por unidad de medida se hace cada 100 g/ml, en vez de cada kilogramo o litro."

explicacion: |
  Es un caso especial de la norma, pensado para presentaciones muy
  chicas.
```

### 10 — Calcular el precio cada 100 g en una presentación chica

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "avanzado"
  tags: ["comparar_productos", "calculo"]

variables:
  precio_paquete: random(200, 800)
  gramos: random(20, 50)

respuesta: (precio_paquete / gramos) * 100
tipo: input
tolerancia_abs: 1

enunciado: "Un sobre de {gramos} g cuesta ${precio_paquete}. Por ser una presentación chica (50 g o menos), ¿cuál es el precio cada 100 g?"

explicacion: |
  Se divide el precio por el contenido en gramos, y se multiplica por
  100 en vez de por 1000.
```

### 11 — El paquete más caro no siempre es el más caro por unidad

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El paquete que cuesta más en pesos no siempre es el más caro por unidad de medida — puede ser una presentación más grande que, calculada por kilo, sale más barata."

explicacion: |
  Es justamente el motivo por el que el precio de góndola solo puede
  engañar.
```

### 12 — El paquete más barato no siempre es el más barato por unidad

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El paquete que cuesta menos en pesos tampoco es siempre el más barato por unidad de medida — puede ser una presentación tan chica que, por kilo, sale más cara."

explicacion: |
  Es el mismo problema mirado desde el otro extremo.
```

### 13 — Despejar el contenido neto

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "avanzado"
  tags: ["comparar_productos", "calculo"]

variables:
  precio_paquete: random(500, 3000)
  gramos: random(100, 900)
  ppum: (precio_paquete / gramos) * 1000

respuesta: gramos
tipo: input
tolerancia_abs: 1

enunciado: "Un paquete cuesta ${precio_paquete}, y su precio por kilogramo es ${redondear(ppum, 1)}. ¿Cuántos gramos tiene ese paquete?"

explicacion: |
  Se despeja el contenido neto de la fórmula del precio por unidad de
  medida.
```

### 14 — Despejar el precio del paquete

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "avanzado"
  tags: ["comparar_productos", "calculo"]

variables:
  gramos: random(100, 900)
  ppum: random(2000, 8000)

respuesta: (ppum / 1000) * gramos
tipo: input
tolerancia_abs: 1

enunciado: "Un producto tiene un precio por kilogramo de ${ppum}. Un paquete de ese producto contiene {gramos} g. ¿Cuánto cuesta ese paquete?"

explicacion: |
  Se despeja el precio del paquete a partir del precio por kilogramo y
  el contenido neto.
```

### 15 — El costo real puede incluir más que el PPUM

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El precio por unidad de medida es el punto de partida para comparar, pero el costo real de una compra puede incluir otros factores, como cuánto rinde el producto o si hay descuentos por cantidad."

explicacion: |
  El PPUM compara el precio en sí; el resto son factores adicionales
  según cada caso concreto.
```

### 16 — El paquete "familiar" no siempre ahorra

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un paquete etiquetado como \"familiar\" o \"ahorro\" no siempre resulta más barato por unidad de medida que la presentación chica del mismo producto."

explicacion: |
  El nombre del paquete no garantiza nada: hay que calcular (o mirar) el
  precio por unidad de medida para saberlo con certeza.
```

### 17 — Ordenar productos por precio por kilo

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "basico"
  tags: ["comparar_productos", "orden"]

tipo: ordenar
enunciado: "Ordená estos tres productos de menor a mayor precio por kilogramo."
opciones_explicitas:
  - "$3.500 por kg"
  - "$2.000 por kg"
  - "$5.100 por kg"
respuesta_orden: ["$2.000 por kg", "$3.500 por kg", "$5.100 por kg"]

explicacion: |
  Una vez calculado el precio por unidad de medida, comparar es directo.
```

### 18 — Verificar un cálculo de PPUM (con error a veces)

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos", "verificacion"]

variables:
  precio_paquete: random(500, 3000)
  gramos: random(100, 900)
  correcto: (precio_paquete / gramos) * 1000
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Paquete de {gramos} g por ${precio_paquete}, precio por kilo informado: ${redondear(mostrado, 1)}."

explicacion: |
  Se vuelve a calcular el precio por kilo y se compara con el valor
  informado.
```

### 19 — Completar el precio por kilo

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "intermedio"
  tags: ["comparar_productos"]

variables:
  precio_paquete: random(500, 3000)
  gramos: random(100, 900)
  ppum: (precio_paquete / gramos) * 1000

tipo: completar
enunciado: "Un paquete de {gramos} g cuesta ${precio_paquete}. Completá: ___ (precio por kg) = ({precio_paquete} ÷ {gramos}) × 1000."
respuestas_validas:
  - ppum

explicacion: |
  Es la aplicación directa de la fórmula del precio por unidad de
  medida.
```

### 20 — Comparar dos marcas distintas

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "avanzado"
  tags: ["comparar_productos", "problema"]

variables:
  precio_marca_a: random(1000, 2000)
  ml_marca_a: random(500, 750)
  precio_marca_b: random(1500, 3000)
  ml_marca_b: random(900, 1500)

respuesta: (((precio_marca_a / ml_marca_a) * 1000) < ((precio_marca_b / ml_marca_b) * 1000))
tipo: vf

enunciado: "Marca A: {ml_marca_a} ml por ${precio_marca_a}. Marca B: {ml_marca_b} ml por ${precio_marca_b}. ¿La marca A tiene un precio por litro menor que la marca B?"

explicacion: |
  Comparar por litro es lo que permite decidir cuál es realmente más
  barata, más allá del tamaño de cada botella.
```

### 21 — El precio del paquete solo no define qué es más barato

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "basico"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber cuál de dos productos es realmente más barato, no alcanza con mirar el precio del paquete: hace falta compararlos por la misma unidad de medida."

explicacion: |
  Es la idea de fondo de todo el tema: comparar peras con peras, no
  paquetes de tamaños distintos.
```

### 22 — Comparar productos (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "comparar_productos"
  nivel: "basico"
  tags: ["comparar_productos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El precio de góndola puede engañar por el tamaño del paquete; el precio por unidad de medida (kg, L) es el costo real para comparar, y en Argentina es obligatorio mostrarlo junto al precio del paquete."

explicacion: |
  Es la idea central de todo el tema.
```
