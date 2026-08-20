# Matemática — Área de polígonos regulares y figuras compuestas (cuestionario, 27 preguntas VBLang)

> Tema: `GO7`. Ver `teoria.md` en esta misma carpeta. Usa la constante `pi`.

---

### 1 — Qué es el apotema

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["apotema", "vocabulario"]

enunciado: "¿Qué es el apotema de un polígono regular?"
tipo: mc
opciones_explicitas:
  - "La distancia perpendicular desde el centro hasta el punto medio de un lado"
  - "La distancia desde el centro hasta un vértice"
  - "La longitud de un lado cualquiera"
respuesta: "La distancia perpendicular desde el centro hasta el punto medio de un lado"

explicacion: |
  No es lo mismo que el radio (centro a vértice): el apotema va del
  centro al punto medio de un lado.
```

### 2 — Sólo los polígonos regulares tienen apotema bien definido

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El apotema, como una única distancia constante del centro a cada lado, sólo está bien definido en polígonos regulares."

explicacion: |
  En un polígono irregular la distancia del centro a cada lado varía —
  no hay un único apotema.
```

### 3 — Cómo se deduce la fórmula del área

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "vocabulario"]

enunciado: "¿Cómo se deduce la fórmula del área de un polígono regular a partir del apotema?"
tipo: mc
opciones_explicitas:
  - "Se divide el polígono en n triángulos iguales desde el centro, cada uno con base un lado y altura el apotema"
  - "Se lo compara directamente con un círculo de igual perímetro"
  - "No tiene deducción, es una fórmula empírica"
respuesta: "Se divide el polígono en n triángulos iguales desde el centro, cada uno con base un lado y altura el apotema"

explicacion: |
  Sumando el área de esos n triángulos (cada uno lado×apotema/2) se llega
  a (perímetro × apotema) / 2.
```

### 4 — Completar: fórmula de área con apotema

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "completar"]

tipo: completar
enunciado: "Completá: Área de un polígono regular = (Perímetro × ___) / 2."
respuestas_validas:
  - "apotema"
  - "Apotema"

explicacion: |
  El área se calcula con el perímetro y el apotema.
```

### 5 — Problema: perímetro de un polígono regular

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["apotema", "problema"]

variables:
  n: uno_de([5, 6, 8, 9, 10, 12])
  lado: random(4, 20)

respuesta: n * lado
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene {n} lados de {lado} cm cada uno. ¿Cuál es su perímetro?"

pasos:
  - "{n} × {lado} = {n * lado} cm"

explicacion: |
  El perímetro de un polígono regular es la cantidad de lados por la
  medida de cada lado.
```

### 6 — Problema: área a partir de n, lado y apotema

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema", "problema"]

variables:
  n: uno_de([5, 6, 8, 10])
  lado: random(4, 15)
  apotema: 2 * random(2, 10)

respuesta: (n * lado * apotema) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene {n} lados de {lado} cm, y su apotema mide {apotema} cm. ¿Cuál es su área (en cm²)?"

pasos:
  - "Perímetro = {n} × {lado} = {n * lado} cm"
  - "Área = ({n * lado} × {apotema}) ÷ 2 = {(n * lado * apotema) / 2} cm²"

explicacion: |
  Primero se calcula el perímetro, y con él y el apotema se aplica la
  fórmula del área.
```

### 7 — Problema: área a partir del perímetro y el apotema

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "problema"]

variables:
  perimetro: uno_de([24, 30, 36, 40, 48, 54, 60])
  apotema: 2 * random(2, 12)

respuesta: (perimetro * apotema) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene un perímetro de {perimetro} cm y un apotema de {apotema} cm. ¿Cuál es su área (en cm²)?"

pasos:
  - "({perimetro} × {apotema}) ÷ 2 = {(perimetro * apotema) / 2} cm²"

explicacion: |
  Se aplica directo la fórmula: no hace falta calcular el perímetro
  porque ya está dado.
```

### 8 — Problema: despejar el apotema

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema", "problema"]

variables:
  perimetro: uno_de([24, 30, 36, 40, 48, 60])
  apotema_real: uno_de([4, 5, 6, 8, 10])
  area_dada: (perimetro * apotema_real) / 2

respuesta: apotema_real
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene un perímetro de {perimetro} cm y un área de {area_dada} cm². ¿Cuánto mide su apotema?"

pasos:
  - "Área = (Perímetro × Apotema) ÷ 2, entonces Apotema = (2 × Área) ÷ Perímetro"
  - "(2 × {area_dada}) ÷ {perimetro} = {(2 * area_dada) / perimetro} cm"

explicacion: |
  Se despeja el apotema invirtiendo la fórmula del área.
```

### 9 — Qué es una figura compuesta

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas", "vocabulario"]

enunciado: "¿Qué es una figura compuesta?"
tipo: mc
opciones_explicitas:
  - "Una figura formada por dos o más figuras simples combinadas"
  - "Cualquier figura con más de 4 lados"
  - "Una figura que no tiene fórmula de área"
respuesta: "Una figura formada por dos o más figuras simples combinadas"

explicacion: |
  Como una habitación en forma de L, o una ventana rectangular con un
  semicírculo arriba.
```

### 10 — Estrategia general para figuras compuestas

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas", "vocabulario"]

enunciado: "¿Cuál es la estrategia general para calcular el área de una figura compuesta?"
tipo: mc
opciones_explicitas:
  - "Descomponerla en figuras simples, calcular cada área por separado, y sumar o restar según corresponda"
  - "Usar siempre la fórmula del rectángulo, sea cual sea la forma"
  - "Medir directamente la superficie total sin descomponer nada"
respuesta: "Descomponerla en figuras simples, calcular cada área por separado, y sumar o restar según corresponda"

explicacion: |
  No hace falta una fórmula nueva: se reusan las fórmulas de las figuras
  simples ya conocidas.
```

### 11 — Cuándo se resta en vez de sumar

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "vocabulario"]

enunciado: "¿Cuándo hay que restar el área de una figura simple en vez de sumarla?"
tipo: mc
opciones_explicitas:
  - "Cuando esa figura queda recortada o hueca dentro de otra, como una fuente en el medio de un patio"
  - "Nunca hay que restar, siempre se suma"
  - "Cuando la figura simple es un círculo"
respuesta: "Cuando esa figura queda recortada o hueca dentro de otra, como una fuente en el medio de un patio"

explicacion: |
  Si la figura no forma parte de la superficie útil, se descuenta del
  total.
```

### 12 — Para figuras compuestas no hace falta fórmula nueva

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el área de una figura compuesta no hace falta ninguna fórmula nueva: alcanza con las fórmulas de las figuras simples ya conocidas."

explicacion: |
  La clave es descomponer bien la figura, no memorizar una fórmula
  distinta.
```

### 13 — Problema: habitación en L (suma)

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "problema"]

variables:
  a1: random(4, 8)
  b1: random(3, 6)
  a2: random(3, 6)
  b2: random(2, 5)

respuesta: (a1 * b1) + (a2 * b2)
tipo: input
tolerancia_abs: 0

enunciado: "Una habitación en forma de L se arma con un rectángulo de {a1}×{b1} m pegado a otro rectángulo de {a2}×{b2} m. ¿Cuál es el área total (en m²)?"

pasos:
  - "Rectángulo 1: {a1} × {b1} = {a1 * b1} m²"
  - "Rectángulo 2: {a2} × {b2} = {a2 * b2} m²"
  - "{a1 * b1} + {a2 * b2} = {(a1 * b1) + (a2 * b2)} m²"

explicacion: |
  La L se descompone en dos rectángulos y se suman sus áreas.
```

### 14 — Problema: rectángulo con esquina recortada (resta)

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "problema"]

variables:
  ancho: random(10, 20)
  alto: random(10, 20)
  corte_ancho: random(2, 6)
  corte_alto: random(2, 6)

respuesta: (ancho * alto) - (corte_ancho * corte_alto)
tipo: input
tolerancia_abs: 0

enunciado: "A un terreno rectangular de {ancho}×{alto} m se le recorta, en una esquina, un rectángulo de {corte_ancho}×{corte_alto} m. ¿Cuál es el área útil restante (en m²)?"

pasos:
  - "Área total: {ancho} × {alto} = {ancho * alto} m²"
  - "Área recortada: {corte_ancho} × {corte_alto} = {corte_ancho * corte_alto} m²"
  - "{ancho * alto} − {corte_ancho * corte_alto} = {(ancho * alto) - (corte_ancho * corte_alto)} m²"

explicacion: |
  Se calcula como si no faltara nada, y después se resta la parte
  recortada.
```

### 15 — Problema: patio cuadrado con fuente circular (resta con círculo)

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["figuras_compuestas", "problema"]

variables:
  lado: random(8, 20)
  r: random(1, 3)

respuesta: redondear((lado * lado) - (pi * r * r), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un patio cuadrado de {lado} m de lado tiene una fuente circular de radio {r} m en el medio. ¿Cuál es el área útil del patio, sin contar la fuente (en m²)? Redondeá a 2 decimales."

pasos:
  - "Área del cuadrado: {lado} × {lado} = {lado * lado} m²"
  - "Área de la fuente: π × {r}² = {redondear(pi * r * r, 2)} m²"
  - "{lado * lado} − {redondear(pi * r * r, 2)} = {redondear((lado * lado) - (pi * r * r), 2)} m²"

explicacion: |
  El área de la fuente (un círculo) se resta del área total del cuadrado.
```

### 16 — Problema: ventana con semicírculo (suma con círculo)

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["figuras_compuestas", "problema"]

variables:
  base: random(6, 20)
  altura: random(6, 20)

respuesta: redondear((base * altura) + ((pi * (base / 2) * (base / 2)) / 2), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una ventana tiene forma de rectángulo de {base}×{altura} cm, coronado por un semicírculo cuyo diámetro coincide con el lado de {base} cm. ¿Cuál es el área total de la ventana (en cm²)? Redondeá a 2 decimales."

pasos:
  - "Área del rectángulo: {base} × {altura} = {base * altura} cm²"
  - "Radio del semicírculo: {base} ÷ 2 = {base / 2} cm"
  - "Área del semicírculo: (π × {base / 2}²) ÷ 2 = {redondear((pi * (base / 2) * (base / 2)) / 2, 2)} cm²"
  - "{base * altura} + {redondear((pi * (base / 2) * (base / 2)) / 2, 2)} = {redondear((base * altura) + ((pi * (base / 2) * (base / 2)) / 2), 2)} cm²"

explicacion: |
  Se suman el área del rectángulo y la del semicírculo (la mitad del
  área de un círculo completo).
```

### 17 — Un hexágono regular se puede pensar en triángulos

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema"]

respuesta: verdadero
tipo: vf

enunciado: "Un hexágono regular se puede descomponer en 6 triángulos iguales trazando segmentos desde su centro hasta cada vértice."

explicacion: |
  Es la misma idea que da la fórmula del apotema, aplicada a n = 6.
```

### 18 — Problema: área comparando dos polígonos regulares

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema", "problema"]

variables:
  lado: random(5, 10)
  apotema: 2 * random(3, 8)

tipo: mc
opciones_explicitas:
  - "El hexágono (6 lados)"
  - "El pentágono (5 lados)"
  - "Tienen la misma área"
respuesta: "El hexágono (6 lados)"

enunciado: "Un pentágono regular y un hexágono regular tienen el mismo lado ({lado} cm) y el mismo apotema ({apotema} cm). ¿Cuál tiene mayor área?"

explicacion: |
  A igual lado y apotema, a más lados más perímetro, y el área depende
  del perímetro: el hexágono (más lados) tiene mayor área.
```

### 19 — Completar: fórmula del perímetro de un polígono regular

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["apotema", "completar"]

tipo: completar
enunciado: "Completá: Perímetro de un polígono regular = número de lados × ___."
respuestas_validas:
  - "lado"
  - "el lado"

explicacion: |
  Como todos los lados miden lo mismo, alcanza con multiplicar la
  cantidad de lados por la medida de uno solo.
```

### 20 — Ordenar: pasos para el área de un polígono regular

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "ordenar"]

enunciado: "Ordená los pasos para calcular el área de un polígono regular, conociendo la cantidad de lados, la medida de cada lado y el apotema."
tipo: ordenar
opciones_explicitas:
  - "Dividir ese resultado por 2 para obtener el área"
  - "Calcular el perímetro: cantidad de lados × medida de cada lado"
  - "Multiplicar el perímetro por el apotema"
respuesta_orden: ["Calcular el perímetro: cantidad de lados × medida de cada lado", "Multiplicar el perímetro por el apotema", "Dividir ese resultado por 2 para obtener el área"]
explicacion: |
  Área = (Perímetro × Apotema) / 2, en ese orden de operaciones.
```

### 21 — Ordenar: pasos para una figura compuesta con resta

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "ordenar"]

enunciado: "Ordená los pasos para calcular el área de un patio cuadrado con una fuente circular en el medio."
tipo: ordenar
opciones_explicitas:
  - "Restar el área del círculo al área del cuadrado"
  - "Calcular el área del cuadrado completo"
  - "Calcular el área del círculo (la fuente)"
respuesta_orden: ["Calcular el área del cuadrado completo", "Calcular el área del círculo (la fuente)", "Restar el área del círculo al área del cuadrado"]
explicacion: |
  Primero se calcula como si no hubiera fuente, y recién después se
  descuenta el hueco.
```

### 22 — Problema: figura compuesta de triángulo y rectángulo

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "problema"]

variables:
  base: random(6, 15)
  altura_rect: random(4, 10)
  altura_tri: random(3, 8)

respuesta: (base * altura_rect) + ((base * altura_tri) / 2)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un frente de casa combina un rectángulo de base {base} m y altura {altura_rect} m, coronado por un techo triangular de la misma base {base} m y altura {altura_tri} m. ¿Cuál es el área total del frente (en m²)?"

pasos:
  - "Área del rectángulo: {base} × {altura_rect} = {base * altura_rect} m²"
  - "Área del triángulo: ({base} × {altura_tri}) ÷ 2 = {(base * altura_tri) / 2} m²"
  - "{base * altura_rect} + {(base * altura_tri) / 2} = {(base * altura_rect) + ((base * altura_tri) / 2)} m²"

explicacion: |
  Se suman el área del cuerpo rectangular y la del techo triangular.
```

### 23 — El apotema no es lo mismo que el radio

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En un polígono regular, el apotema y el radio (centro a vértice) son siempre exactamente la misma medida."

explicacion: |
  El apotema llega hasta el punto medio de un lado; el radio llega hasta
  un vértice — son distancias distintas (el apotema es siempre más
  corto).
```

### 24 — Problema: dos figuras compuestas restando dos veces

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["figuras_compuestas", "problema"]

variables:
  lado: random(10, 20)
  r1: random(1, 2)
  r2: random(1, 2)

respuesta: redondear((lado * lado) - (pi * r1 * r1) - (pi * r2 * r2), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un patio cuadrado de {lado} m de lado tiene dos fuentes circulares, de radios {r1} m y {r2} m. ¿Cuál es el área útil del patio (en m²)? Redondeá a 2 decimales."

pasos:
  - "Área del cuadrado: {lado} × {lado} = {lado * lado} m²"
  - "Área de las dos fuentes: π×{r1}² + π×{r2}² = {redondear((pi * r1 * r1) + (pi * r2 * r2), 2)} m²"
  - "{lado * lado} − {redondear((pi * r1 * r1) + (pi * r2 * r2), 2)} = {redondear((lado * lado) - (pi * r1 * r1) - (pi * r2 * r2), 2)} m²"

explicacion: |
  Cuando hay más de un hueco, se resta el área de cada uno por separado.
```

### 25 — A mayor apotema, mayor área (a igual perímetro)

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema"]

respuesta: verdadero
tipo: vf

enunciado: "Entre dos polígonos regulares con el mismo perímetro, el que tiene mayor apotema también tiene mayor área."

explicacion: |
  Área = (Perímetro × Apotema) / 2: con el perímetro fijo, el área crece
  directamente con el apotema.
```

### 26 — Descomponer bien es la parte difícil

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas"]

enunciado: "¿Cuál es la parte más difícil de resolver el área de una figura compuesta?"
tipo: mc
opciones_explicitas:
  - "Identificar bien qué figuras simples la forman y si corresponde sumar o restar cada una"
  - "Recordar una fórmula especial para figuras compuestas"
  - "Convertir las unidades de medida"
respuesta: "Identificar bien qué figuras simples la forman y si corresponde sumar o restar cada una"

explicacion: |
  El cálculo de cada parte ya está resuelto en las fórmulas simples: lo
  nuevo es descomponer bien la figura.
```

### 27 — Cierre: para qué sirve

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber calcular áreas de polígonos regulares y figuras compuestas?"
tipo: mc
opciones_explicitas:
  - "Para calcular materiales reales en espacios con forma irregular, y para diseños con simetría radial"
  - "Sólo para resolver ejercicios de geometría sin aplicación práctica"
  - "Sólo sirve para figuras con menos de 4 lados"
respuesta: "Para calcular materiales reales en espacios con forma irregular, y para diseños con simetría radial"

explicacion: |
  Desde calcular piso o pintura para un ambiente en L, hasta diseñar
  mosaicos y señales con forma de polígono regular.
```
