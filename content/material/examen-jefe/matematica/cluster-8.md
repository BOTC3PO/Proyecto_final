# Examen jefe — [PENDIENTE #608]

> Logro #608. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **112 preguntas totales** en 5/5 secciones.

---

## Sección: area-poligonos-regulares-y-compuestas (27 preguntas)

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

## Sección: dispersion-rango-y-desvio (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["rango", "vocabulario"]

enunciado: "¿Qué mide el rango de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "La distancia entre el valor máximo y el valor mínimo"
  - "El promedio de todos los valores"
  - "El valor que más se repite"
respuesta: "La distancia entre el valor máximo y el valor mínimo"

explicacion: |
  Rango = máximo − mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["rango", "completar"]

tipo: completar
enunciado: "Completá: rango = máximo − ___."
respuestas_validas:
  - "mínimo"

explicacion: |
  Es la distancia entre los dos valores extremos del conjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["rango", "problema"]

variables:
  a: random(10, 20)
  b: random(21, 35)
  c: random(1, 9)
  d: random(36, 50)

respuesta: max(a, b, c, d) - min(a, b, c, d)
tipo: input

enunciado: "Cuatro edades registradas: {a}, {b}, {c}, {d}. ¿Cuál es el rango de este conjunto?"

pasos:
  - "Máximo = {max(a, b, c, d)}, mínimo = {min(a, b, c, d)}"
  - "Rango = {max(a, b, c, d)} − {min(a, b, c, d)} = {max(a, b, c, d) - min(a, b, c, d)}"

explicacion: |
  Sólo hacen falta el mayor y el menor valor — el resto de los datos no
  interviene en el cálculo del rango.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["rango"]

respuesta: verdadero
tipo: vf

enunciado: "El rango sólo usa los dos valores extremos del conjunto (máximo y mínimo) e ignora por completo cómo se distribuyen los datos entre medio."

explicacion: |
  Por eso dos conjuntos con formas de dispersión muy distintas pueden
  tener exactamente el mismo rango.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["rango", "atipicos"]

enunciado: "¿Por qué un solo valor atípico (muy alto o muy bajo) puede distorsionar mucho el rango?"
tipo: mc
opciones_explicitas:
  - "Porque el rango depende sólo del máximo y el mínimo — un único dato extremo cambia uno de esos dos valores, sin que el resto del conjunto haya cambiado"
  - "Porque el rango es un promedio de todos los datos, y un valor extremo pesa más que los demás"
  - "El rango no se ve afectado por valores atípicos"
respuesta: "Porque el rango depende sólo del máximo y el mínimo — un único dato extremo cambia uno de esos dos valores, sin que el resto del conjunto haya cambiado"

explicacion: |
  Es la misma debilidad que ya tenía el promedio frente a la mediana en
  `../cual-miente-y-cuando/`, aplicada acá a una medida de dispersión.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["rango", "atipicos", "problema"]

variables:
  a: random(8, 12)
  b: random(8, 12)
  c: random(8, 12)
  atipico: random(80, 100)

respuesta: max(a, b, c, atipico) - min(a, b, c, atipico)
tipo: input

enunciado: "Cuatro valores: {a}, {b}, {c}, {atipico} (el último es un valor atípico, muy distinto del resto). ¿Cuál es el rango del conjunto?"

pasos:
  - "Máximo = {atipico}, mínimo = {min(a, b, c)}"
  - "Rango = {atipico} − {min(a, b, c)} = {max(a, b, c, atipico) - min(a, b, c, atipico)}"

explicacion: |
  El valor atípico por sí solo dispara el rango, aunque los otros tres
  valores estén todos muy cerca entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["desvio", "vocabulario"]

enunciado: "¿Qué es el desvío estándar de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "La raíz cuadrada de la varianza"
  - "El cuadrado de la varianza"
  - "La distancia entre el máximo y el mínimo"
respuesta: "La raíz cuadrada de la varianza"

explicacion: |
  desvío estándar = √varianza.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["desvio", "completar"]

tipo: completar
enunciado: "Completá: el desvío estándar es la raíz cuadrada de la ___."
respuestas_validas:
  - "varianza"

explicacion: |
  Ya definida en `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio", "problema"]

variables:
  varianza: uno_de([4, 9, 16, 25, 36])

respuesta: sqrt(varianza)
tipo: input

enunciado: "La varianza de un conjunto de datos es {varianza}. ¿Cuál es su desvío estándar?"

pasos:
  - "desvío = √{varianza} = {sqrt(varianza)}"

explicacion: |
  Sacar la raíz cuadrada devuelve el resultado a las unidades
  originales de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio", "problema"]

variables:
  varianza: uno_de([2, 3, 5, 8, 10])

respuesta: redondear(sqrt(varianza), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "La varianza de un conjunto de datos es {varianza}. ¿Cuál es su desvío estándar, redondeado a 2 decimales?"

pasos:
  - "desvío = √{varianza} ≈ {redondear(sqrt(varianza), 2)}"

explicacion: |
  No todas las varianzas dan una raíz exacta — acá hace falta redondear.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["desvio", "varianza"]

respuesta: verdadero
tipo: vf

enunciado: "El desvío estándar queda en las mismas unidades que los datos originales, mientras que la varianza queda en esas unidades elevadas al cuadrado."

explicacion: |
  Por eso el desvío estándar es el que se reporta e interpreta
  directamente, y la varianza es más bien un paso intermedio del
  cálculo.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio", "varianza"]

enunciado: "Si la varianza ya mide dispersión, ¿para qué calcular además el desvío estándar?"
tipo: mc
opciones_explicitas:
  - "Porque el desvío está en las mismas unidades que los datos originales, y por eso es más fácil de interpretar que la varianza (que queda en unidades al cuadrado)"
  - "Porque la varianza no mide dispersión, sólo el desvío la mide"
  - "No hay ninguna diferencia práctica entre los dos"
respuesta: "Porque el desvío está en las mismas unidades que los datos originales, y por eso es más fácil de interpretar que la varianza (que queda en unidades al cuadrado)"

explicacion: |
  "Los datos se apartan en promedio 1,63 unidades de la media" tiene
  sentido directo; "2,67 unidades al cuadrado" no se interpreta igual
  de fácil.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["desvio", "problema"]

variables:
  a: uno_de([2, 3, 4])
  b: uno_de([6, 7, 8])
  c: uno_de([10, 11, 12])
  media: (a + b + c) / 3
  varianza: ((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2) / 3

respuesta: redondear(sqrt(varianza), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Tres valores: {a}, {b}, {c}. Calculá el desvío estándar completo (media, varianza y su raíz)."

pasos:
  - "Media = ({a}+{b}+{c})/3 = {redondear(media, 2)}"
  - "Varianza = (({a}−{redondear(media,2)})² + ({b}−{redondear(media,2)})² + ({c}−{redondear(media,2)})²)/3 = {redondear(varianza, 2)}"
  - "Desvío estándar = √{redondear(varianza, 2)} ≈ {redondear(sqrt(varianza), 2)}"

explicacion: |
  El mismo procedimiento completo de `../tablas-de-frecuencia-.../`,
  terminado con la raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["rango", "desvio"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos de datos pueden tener exactamente el mismo rango y, sin embargo, tener desvíos estándar muy distintos (por ejemplo, si en uno los datos se agrupan cerca del centro y en el otro se reparten parejo entre los extremos)."

explicacion: |
  El rango sólo mira los dos extremos; el desvío estándar sí toma en
  cuenta la posición de cada dato — por eso distingue casos que el
  rango no puede distinguir.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["coeficiente_variacion", "vocabulario"]

enunciado: "¿Qué es el coeficiente de variación (CV)?"
tipo: mc
opciones_explicitas:
  - "El desvío estándar dividido por la media — mide dispersión relativa, sin unidades, útil para comparar conjuntos de escalas distintas"
  - "El desvío estándar multiplicado por la media"
  - "Otro nombre para el rango"
respuesta: "El desvío estándar dividido por la media — mide dispersión relativa, sin unidades, útil para comparar conjuntos de escalas distintas"

explicacion: |
  CV = desvío estándar / media.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["coeficiente_variacion", "problema"]

variables:
  media: uno_de([50, 80, 100])
  desvio: uno_de([5, 10, 15])

respuesta: redondear(desvio / media * 100, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Un conjunto de datos tiene media {media} y desvío estándar {desvio}. ¿Cuál es su coeficiente de variación, expresado como porcentaje?"

pasos:
  - "CV = {desvio}/{media} × 100 = {redondear(desvio / media * 100, 1)}%"

explicacion: |
  Al dividir por la media, el resultado queda sin unidades — se puede
  comparar directo contra el CV de otro conjunto, aunque mida algo
  totalmente distinto.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["coeficiente_variacion", "aplicacion"]

enunciado: "Una empresa A tiene sueldos con media $500.000 y desvío $50.000; una empresa B tiene sueldos con media $2.000.000 y desvío $150.000. ¿Cómo se compara realmente la dispersión relativa de sueldos entre las dos, sin que la diferencia de escala engañe?"
tipo: mc
opciones_explicitas:
  - "Calculando el coeficiente de variación de cada una (desvío/media) y comparando esos dos números, no los desvíos en pesos directamente"
  - "Comparando directo los desvíos en pesos: la empresa B tiene más dispersión porque $150.000 > $50.000"
  - "No se puede comparar la dispersión entre dos empresas con sueldos tan distintos"
respuesta: "Calculando el coeficiente de variación de cada una (desvío/media) y comparando esos dos números, no los desvíos en pesos directamente"

explicacion: |
  CV(A) = 50.000/500.000 = 10%; CV(B) = 150.000/2.000.000 = 7,5% — en
  términos relativos, la empresa A tiene MÁS dispersión salarial que
  la B, aunque su desvío en pesos sea menor.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "intermedio"
  tags: ["desvio"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos conjuntos de datos tienen la misma media pero distinto desvío estándar, el que tiene mayor desvío es el que tiene los datos más dispersos alrededor de esa media."

explicacion: |
  Es exactamente lo que el desvío estándar mide: qué tan lejos, en
  promedio, están los datos de su propia media.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "avanzado"
  tags: ["desvio"]

respuesta: verdadero
tipo: vf

enunciado: "El desvío estándar nunca puede dar un valor negativo, porque es la raíz cuadrada de la varianza, que a su vez es un promedio de valores elevados al cuadrado (siempre positivos o cero)."

explicacion: |
  Como mucho el desvío estándar da 0, y eso pasa sólo cuando todos los
  datos son exactamente iguales entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "dispersion_rango_y_desvio"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven el rango y el desvío estándar?"
tipo: mc
opciones_explicitas:
  - "Para responder 'qué tan dispersos están los datos': el rango da una idea rápida y grosera, el desvío estándar es la medida que realmente se usa en estadística"
  - "Sólo sirven para calcular la media de un conjunto de datos"
  - "Sólo se pueden calcular si los datos ya están ordenados en una tabla de frecuencia"
respuesta: "Para responder 'qué tan dispersos están los datos': el rango da una idea rápida y grosera, el desvío estándar es la medida que realmente se usa en estadística"

explicacion: |
  Media y desvío estándar son, además, los dos números que definen por
  completo una distribución normal — el módulo que sigue.
```

## Sección: teorema-de-bolzano (20 preguntas)

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "continuidad", "signos"]

variables:
  a: random(1, 5)
  b: random(6, 10)
  f_a: random(-10, -1)
  f_b: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Si una función continua $f$ cumple $f({a}) = {f_a}$ y $f({b}) = {f_b}$, ¿se puede garantizar que existe al menos un cero en el intervalo $[{a}, {b}]$?"

explicacion: |
  Dado que $f$ es continua en $[{a}, {b}]$ y $f(a)$ y $f(b)$ tienen signos opuestos (uno negativo y otro positivo), el Teorema de Bolzano garantiza la existencia de al menos un $c \in (a, b)$ tal que $f(c) = 0$.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "gráfico", "interpretación"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Si graficamos una función continua desde $x={a}$ hasta $x={b}$, y los puntos extremos están a distinta altura respecto al eje horizontal (uno arriba y otro abajo), la curva debe cortar el eje X."

explicacion: |
  Correcto. Geométricamente, una línea continua que une un punto por debajo del eje con uno por encima debe intersectar el eje en algún punto intermedio.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "discontinuidad", "contraejemplo"]

variables:
  a: random(0, 2)
  b: random(3, 5)

respuesta: falso
tipo: vf

enunciado: "El Teorema de Bolzano asegura la existencia de un cero en $[{a}, {b}]$ incluso si la función tiene una discontinuidad de salto en el interior del intervalo, siempre que los extremos tengan signos opuestos."

explicacion: |
  Falso. La continuidad en el intervalo cerrado es una hipótesis indispensable. Si hay una discontinuidad, la función podría "saltar" por encima del eje sin tocarlo.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "polinomios", "cuadrática"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  coef: random(1, 2)
  c_const: random(-10, -1)

respuesta: verdadero
tipo: vf

enunciado: "Para $f(x) = {coef}x^2 + {c_const}$, evaluada en $[{a}, {b}]$, si $f(a)$ y $f(b)$ tienen signos opuestos, existe un cero en ese intervalo."

explicacion: |
  Verdadero. Los polinomios son funciones continuas en todo $\mathbb{R}$. Por lo tanto, se cumple la hipótesis de continuidad y, sumada la condición de signos opuestos, Bolzano aplica.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "análisis", "hipótesis"]

variables:
  a: random(0, 2)
  b: random(3, 5)

respuesta: "continuidad"
tipo: completar

enunciado: "Si una función tiene $f({a}) < 0$ y $f({b}) > 0$, pero no se puede asegurar que existe un cero en $({a}, {b})$, la hipótesis que probablemente falla es la _______ de la función."

respuestas_validas:
  - "continuidad"
  - "continua"

explicacion: |
  La continuidad es la hipótesis clave. Sin ella, la función puede presentar saltos que eviten el cruce por el eje X.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "signos", "lógica"]

variables:
  a: random(1, 4)
  b: random(5, 8)
  f_a: random(-10, -1)

respuesta: "positivo"
tipo: completar

enunciado: "Para garantizar un cero en $[{a}, {b}]$ mediante Bolzano, si $f({a}) = {f_a}$ (negativo), entonces $f({b})$ debe ser _______."

respuestas_validas:
  - "positivo"
  - "mayor que cero"
  - "> 0"

explicacion: |
  Deben tener signos opuestos. Si $f(a)$ es negativo, $f(b)$ debe ser positivo para que el producto sea menor que cero.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "no aplicación", "condiciones"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: random(1, 5)
  f_b: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$ y $f({a}) = {f_a}$, $f({b}) = {f_b}$ (ambos positivos), el Teorema de Bolzano garantiza un cero."

explicacion: |
  Falso. Ambos valores positivos no garantizan que la función cruce el eje. Podría permanecer siempre por encima del eje X.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "búsqueda", "intervalos"]

variables:
  a: random(0, 2)
  b: random(3, 5)
  f_a: -random(10, 20)
  f_b: random(10, 20)

respuesta: "(" + a + ", " + b + ")"
tipo: completar

enunciado: "Si $f$ es continua, $f({a}) = {f_a}$ y $f({b}) = {f_b}$, el cero $c$ se encuentra en el intervalo abierto _______."

respuestas_validas:
  - "(" + a + ", " + b + ")"
  - "(" + b + ", " + a + ")"
  - "entre " + a + " y " + b

explicacion: |
  El teorema garantiza que $c$ está estrictamente entre $a$ y $b$, es decir, $c \in (a, b)$.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "lineal", "aplicación"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  m: random(1, 3)
  c: random(-10, -1)

respuesta: verdadero
tipo: vf

enunciado: "La función $f(x) = {m}x + {c}$ es continua. Si $f({a})$ y $f({b})$ tienen signos opuestos, existe un cero único en $({a}, {b})$."

explicacion: |
  Verdadero. Las funciones lineales son continuas. Al tener signos opuestos en los extremos, cruzan el eje exactamente una vez.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "TVI", "teoría"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "caso particular"
tipo: completar

enunciado: "El Teorema de Bolzano es un _______ del Teorema del Valor Intermedio."

respuestas_validas:
  - "caso particular"
  - "caso_particular"
  - "específico"

explicacion: |
  Bolzano se enfoca específicamente en el valor intermedio $k=0$. El TVI es más general para cualquier $k$ entre $f(a)$ y $f(b)$.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "error", "mito"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$ y tiene un cero en ese intervalo, entonces $f(a)$ y $f(b)$ necesariamente tienen signos opuestos."

explicacion: |
  Falso. La función podría tocar el eje y volver al mismo lado (ej. $f(x)=x^2$ en $[-1, 1]$ tiene cero en 0, pero $f(-1)=f(1)=1 > 0$). La implicación inversa no es cierta.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "máximo", "forma"]

variables:
  a: random(-2, -1)
  b: random(1, 2)
  f_a: -random(1, 5)
  f_b: -random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$, $f({a}) < 0$, $f({b}) < 0$, y $f$ tiene un máximo local positivo en el interior, Bolzano garantiza un cero."

explicacion: |
  Falso. Bolzano requiere signos opuestos en los extremos. Aunque haya un cero (porque sube y baja), la condición de *hipótesis* de Bolzano ($f(a)f(b)<0$) no se cumple, por lo que no podemos usar *este* teorema para garantizarlo directamente (aunque el cero exista por otros motivos).
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "lógica", "variables"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: "signos"
tipo: completar

enunciado: "La conclusión de Bolzano depende críticamente de los _______ de los valores en los extremos."

respuestas_validas:
  - "signos"
  - "signos opuestos"
  - "signos distintos"

explicacion: |
  La condición clave es que los signos sean distintos (opuestos).
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "unicidad", "concepto"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: falso
tipo: vf

enunciado: "El Teorema de Bolzano garantiza que el cero encontrado en $({a}, {b})$ es único."

explicacion: |
  Falso. Bolzano solo garantiza la *existencia* de al menos un cero. La unicidad requiere condiciones adicionales (como derivada estrictamente positiva).
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "cálculo", "intermedio"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: "0"
tipo: completar

enunciado: "El teorema asegura que existe $c$ tal que $f(c) =$ _______."

respuestas_validas:
  - "0"
  - "cero"
  - "el cero"

explicacion: |
  La conclusión es que la función toma el valor cero en algún punto del intervalo.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "constante", "caso trivial"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  k: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f(x) = {k}$ (constante positiva) en $[{a}, {b}]$, Bolzano garantiza un cero."

explicacion: |
  Falso. $f(a) = f(b) = k > 0$. No hay signos opuestos. La función nunca toca el eje X.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "geometría", "eje"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "corta"
tipo: completar

enunciado: "Gráficamente, si se cumplen las condiciones de Bolzano en $[{a}, {b}]$, la curva _______ el eje de las abcisas."

respuestas_validas:
  - "corta"
  - "cruza"
  - "intercepta"

explicacion: |
  La curva debe cruzar o cortar el eje horizontal al menos una vez.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "continuidad", "hipótesis"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "cerrado"
tipo: completar

enunciado: "La continuidad debe verificarse en el intervalo _______ $[{a}, {b}]$."

respuestas_validas:
  - "cerrado"
  - "cerrado ["
  - "[" + a + ", " + b + "]"

explicacion: |
  El teorema exige continuidad en el intervalo cerrado $[a, b]$, incluyendo los extremos.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "conclusión", "lógica"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "al menos uno"
tipo: completar

enunciado: "El Teorema de Bolzano garantiza la existencia de _______ cero en $({a}, {b})$."

respuestas_validas:
  - "al menos uno"
  - "al menos un"
  - "uno o más"

explicacion: |
  La conclusión es la existencia de al menos un cero. No se descarta la posibilidad de más de uno.
```

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "discontinuidad", "contraejemplo"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: random(-5, -1)
  f_b: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si una función $f$ no es continua en $[{a}, {b}]$, pero cumple que $f({a})={f_a}$ y $f({b})={f_b}$ tienen signos opuestos, el Teorema de Bolzano garantiza que existe un cero en $(a, b)$."

explicacion: |
  Falso. La continuidad en el intervalo cerrado es una condición necesaria (hipótesis). Si la función es discontinua, el teorema no aplica y no se puede garantizar la existencia del cero.
```

## Sección: distribucion-normal (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["normal", "vocabulario"]

enunciado: "¿Qué forma tiene la distribución normal (campana de Gauss)?"
tipo: mc
opciones_explicitas:
  - "Simétrica, con la mayoría de los casos agrupados cerca del centro y cada vez menos casos hacia los extremos"
  - "Una línea recta con la misma cantidad de casos en todos los valores"
  - "Siempre inclinada hacia un solo lado"
respuesta: "Simétrica, con la mayoría de los casos agrupados cerca del centro y cada vez menos casos hacia los extremos"

explicacion: |
  Es simétrica respecto de la media, con forma de campana.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["normal", "vocabulario"]

enunciado: "¿Qué dos números definen por completo una distribución normal?"
tipo: mc
opciones_explicitas:
  - "La media (dónde está el centro) y el desvío estándar (qué tan ancha es)"
  - "El máximo y el mínimo"
  - "La moda y el rango"
respuesta: "La media (dónde está el centro) y el desvío estándar (qué tan ancha es)"

explicacion: |
  Los mismos dos números construidos en `../dispersion-rango-y-desvio/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["normal"]

respuesta: verdadero
tipo: vf

enunciado: "En una distribución normal perfecta, media, mediana y moda coinciden en el mismo valor."

explicacion: |
  Es el caso ideal en el que un solo promedio sí representa bien a
  todo el conjunto de datos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "completar"]

tipo: completar
enunciado: "Completá la regla empírica: aproximadamente el 68% de los datos cae dentro de ___ desvío(s) estándar de la media."
respuestas_validas:
  - "1"
  - "un"

explicacion: |
  μ ± 1σ contiene aproximadamente el 68% de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "completar"]

tipo: completar
enunciado: "Completá la regla empírica: aproximadamente el 95% de los datos cae dentro de ___ desvíos estándar de la media."
respuestas_validas:
  - "2"
  - "dos"

explicacion: |
  μ ± 2σ contiene aproximadamente el 95% de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "completar"]

tipo: completar
enunciado: "Completá la regla empírica: aproximadamente el 99,7% de los datos cae dentro de ___ desvíos estándar de la media."
respuestas_validas:
  - "3"
  - "tres"

explicacion: |
  Es la regla "68-95-99,7" completa.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "regla_empirica", "problema"]

variables:
  media: uno_de([50, 60, 70, 100])
  desvio: uno_de([5, 8, 10])

respuesta: media - desvio
tipo: input

enunciado: "Las notas de un examen tienen media {media} y desvío estándar {desvio}. Según la regla empírica, ¿cuál es el límite INFERIOR del rango que contiene aproximadamente al 68% de los alumnos?"

pasos:
  - "Límite inferior = media − 1 desvío = {media} − {desvio} = {media - desvio}"

explicacion: |
  El rango completo del 68% va de (media − 1σ) a (media + 1σ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal", "regla_empirica", "problema"]

variables:
  media: uno_de([50, 60, 70, 100])
  desvio: uno_de([5, 8, 10])

respuesta: media + desvio * 2
tipo: input

enunciado: "Las notas de un examen tienen media {media} y desvío estándar {desvio}. Según la regla empírica, ¿cuál es el límite SUPERIOR del rango que contiene aproximadamente al 95% de los alumnos?"

pasos:
  - "Límite superior = media + 2 desvíos = {media} + 2×{desvio} = {media + desvio * 2}"

explicacion: |
  El rango completo del 95% va de (media − 2σ) a (media + 2σ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score", "vocabulario"]

enunciado: "¿Qué indica el z-score de un valor?"
tipo: mc
opciones_explicitas:
  - "A cuántos desvíos estándar de la media está ese valor"
  - "El porcentaje exacto de datos que son mayores a ese valor"
  - "La media del conjunto de datos"
respuesta: "A cuántos desvíos estándar de la media está ese valor"

explicacion: |
  z = (x − media) / desvío.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score", "completar"]

tipo: completar
enunciado: "Completá: z = (x − media) / ___."
respuestas_validas:
  - "desvío"
  - "desvio"
  - "desvío estándar"
  - "desvio estandar"

explicacion: |
  Se divide la distancia a la media por el desvío estándar.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["z_score", "problema"]

variables:
  media: uno_de([50, 60, 100])
  desvio: uno_de([5, 10])
  pasos_z: uno_de([1, 2, -1, -2])
  x: media + desvio * pasos_z

respuesta: redondear((x - media) / desvio, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una distribución tiene media {media} y desvío estándar {desvio}. ¿Cuál es el z-score del valor {x}?"

pasos:
  - "z = ({x} − {media}) / {desvio} = {redondear((x - media) / desvio, 2)}"

explicacion: |
  El z-score indica directamente cuántos desvíos estándar separan al
  valor de la media.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["z_score", "problema"]

variables:
  media: uno_de([50, 60, 100])
  desvio: uno_de([5, 10])
  z: uno_de([1, 2, -1])

respuesta: media + z * desvio
tipo: input

enunciado: "Una distribución tiene media {media} y desvío estándar {desvio}. ¿Qué valor tiene un z-score de {z}?"

pasos:
  - "x = media + z × desvío = {media} + {z}×{desvio} = {media + z * desvio}"

explicacion: |
  Es la fórmula del z-score despejada para `x` en vez de para `z`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score"]

respuesta: verdadero
tipo: vf

enunciado: "Un z-score negativo significa que el valor está por debajo de la media."

explicacion: |
  z < 0 ocurre cuando x < media, porque el numerador (x − media) da
  negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["z_score", "aplicacion"]

enunciado: "Un alumno sacó 8 en Matemática (media 6, desvío 1) y 80 en Lengua (media 65, desvío 10). ¿Cómo se puede comparar en cuál de las dos materias le fue relativamente mejor?"
tipo: mc
opciones_explicitas:
  - "Calculando el z-score de cada nota y comparando esos dos números, no las notas directamente"
  - "Comparando las notas directo: 80 > 8, así que le fue mejor en Lengua"
  - "No se puede comparar el desempeño en dos materias distintas"
respuesta: "Calculando el z-score de cada nota y comparando esos dos números, no las notas directamente"

explicacion: |
  z(Matemática) = (8−6)/1 = 2; z(Lengua) = (80−65)/10 = 1,5 — en
  términos relativos a cada distribución, le fue mejor en Matemática.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el desvío estándar, más ancha (más 'aplastada') es la campana de la distribución normal, porque los datos están más dispersos alrededor de la media."

explicacion: |
  Un desvío chico da una campana angosta y alta (datos muy
  concentrados cerca de la media); un desvío grande la aplasta y
  ensancha.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal", "aplicacion"]

enunciado: "¿Por qué fenómenos tan distintos (alturas de personas, errores de medición, tiempos de reacción) suelen aproximarse a una distribución normal?"
tipo: mc
opciones_explicitas:
  - "Porque son el resultado de sumar muchos factores pequeños e independientes — cuando eso pasa, el resultado tiende a distribuirse en forma normal"
  - "Porque todos los fenómenos naturales son normales por definición, sin ninguna razón matemática detrás"
  - "Porque se los mide siempre con el mismo instrumento"
respuesta: "Porque son el resultado de sumar muchos factores pequeños e independientes — cuando eso pasa, el resultado tiende a distribuirse en forma normal"

explicacion: |
  Es la intuición central detrás del teorema central del límite, un
  módulo más adelante en esta misma cadena.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal", "regla_empirica", "problema"]

variables:
  media: 70
  desvio: 10
  nota: uno_de([65, 75, 55, 95])

respuesta: abs(nota - media) <= desvio
tipo: vf

enunciado: "Un examen tiene media 70 y desvío estándar 10. Un alumno sacó {nota}. ¿Esa nota cae dentro de 1 desvío estándar de la media (entre 60 y 80)?"

explicacion: |
  Alcanza con comparar la distancia a la media (|{nota} − 70|) contra
  el desvío estándar (10).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "intermedio"
  tags: ["normal", "vocabulario"]

enunciado: "¿La distribución normal es un ejemplo de variable aleatoria discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor dentro de un intervalo, no sólo números enteros contables"
  - "Discreta: sólo puede tomar valores enteros"
  - "Ninguna de las dos categorías se aplica a la normal"
respuesta: "Continua: puede tomar cualquier valor dentro de un intervalo, no sólo números enteros contables"

explicacion: |
  A diferencia de la binomial (discreta, cuenta éxitos), la normal
  describe una magnitud que puede tomar cualquier valor real.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "avanzado"
  tags: ["normal"]

enunciado: "Dos exámenes distintos tienen la misma media (70), pero el Examen A tiene desvío 5 y el Examen B tiene desvío 20. ¿Qué diferencia real hay entre ambos grupos de notas?"
tipo: mc
opciones_explicitas:
  - "En el Examen A las notas están mucho más concentradas cerca de 70; en el B están mucho más dispersas, con más alumnos lejos de la media"
  - "No hay ninguna diferencia real, porque la media es igual en los dos"
  - "El Examen B tiene, en promedio, notas más altas que el A"
respuesta: "En el Examen A las notas están mucho más concentradas cerca de 70; en el B están mucho más dispersas, con más alumnos lejos de la media"

explicacion: |
  La media dice dónde está el centro; el desvío dice qué tan
  agrupados o dispersos están los datos alrededor de ese centro — son
  dos preguntas distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_normal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer la distribución normal?"
tipo: mc
opciones_explicitas:
  - "Para describir y predecir la proporción de datos que cae en cierto rango, en fenómenos que resultan de sumar muchos factores pequeños e independientes"
  - "Sólo sirve para calcular la media de un conjunto de datos"
  - "Sólo se aplica a exámenes escolares"
respuesta: "Para describir y predecir la proporción de datos que cae en cierto rango, en fenómenos que resultan de sumar muchos factores pequeños e independientes"

explicacion: |
  Es la base de muestreo, intervalos de confianza y tests de
  hipótesis — todos los módulos que siguen en esta cadena.
```

## Sección: teorema-del-seno-y-del-coseno (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Qué es un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un triángulo que no tiene ningún ángulo de 90°"
  - "Un triángulo con los tres lados iguales"
  - "Otro nombre para el triángulo rectángulo"
respuesta: "Un triángulo que no tiene ningún ángulo de 90°"

explicacion: |
  Ahí ni Pitágoras ni las razones trigonométricas simples se pueden
  aplicar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Por qué el teorema de Pitágoras no se puede usar directamente en un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"
  - "Porque los triángulos oblicuos no tienen hipotenusa nombrada"
  - "En realidad sí se puede usar exactamente igual"
respuesta: "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"

explicacion: |
  Por eso hacen falta el teorema del seno y del coseno.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "completar"]

tipo: completar
enunciado: "Completá el teorema del seno: a / sen(A) = b / sen(B) = ___."
respuestas_validas:
  - "c / sen(C)"
  - "c/sen(C)"

explicacion: |
  Los tres cocientes lado/seno(ángulo opuesto) son siempre iguales entre
  sí.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Qué dice el teorema del seno?"
tipo: mc
opciones_explicitas:
  - "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"
  - "Que la suma de los tres lados es igual al seno del ángulo mayor"
  - "Que sólo aplica a triángulos rectángulos"
respuesta: "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"

explicacion: |
  Vale para cualquier triángulo, no sólo los rectángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  a: uno_de([10, 20, 30, 40])
  sen_A: 0.5
  sen_B: 1

respuesta: (a / sen_A) * sen_B
tipo: input
tolerancia_abs: 0.5

enunciado: "En un triángulo, el lado a = {a} es opuesto al ángulo A = 30° (sen 30° = 0,5). El lado b es opuesto al ángulo B = 90° (sen 90° = 1). ¿Cuánto mide el lado b?"

pasos:
  - "{a} ÷ 0,5 = {a / sen_A} (la razón constante del triángulo)"
  - "b = {a / sen_A} × 1 = {(a / sen_A) * sen_B}"

explicacion: |
  Se usa la razón a/sen(A), que es la misma para los tres lados del
  triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  b: uno_de([10, 14, 20])
  sen_B: 0.71
  sen_A: 0.5

respuesta: redondear((b / sen_B) * sen_A, 1)
tipo: input
tolerancia_abs: 1

enunciado: "En un triángulo, el lado b = {b} es opuesto al ángulo B = 45° (sen 45° ≈ 0,71). El lado a es opuesto al ángulo A = 30° (sen 30° = 0,5). ¿Cuánto mide el lado a, aproximadamente?"

pasos:
  - "{b} ÷ 0,71 ≈ {redondear(b / sen_B, 2)} (razón constante)"
  - "a ≈ {redondear(b / sen_B, 2)} × 0,5 ≈ {redondear((b / sen_B) * sen_A, 1)}"

explicacion: |
  Mismo procedimiento: primero se halla la razón constante, después se
  aplica al ángulo del lado buscado.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del seno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"
  - "Cuando se conocen sólo los tres lados, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"

explicacion: |
  Ese par lado-ángulo opuesto es lo que permite fijar la razón
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "completar"]

tipo: completar
enunciado: "Completá el teorema del coseno: c² = a² + b² − ___."
respuestas_validas:
  - "2ab·cos(C)"
  - "2ab cos(C)"
  - "2*a*b*cos(C)"

explicacion: |
  C es el ángulo comprendido entre los lados a y b.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Qué relación tiene el teorema del coseno con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"
  - "No tienen ninguna relación entre sí"
  - "El teorema del coseno reemplaza completamente a Pitágoras, que ya no se usa"
respuesta: "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"

explicacion: |
  Con cos(90°) = 0, el último término del teorema del coseno desaparece.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo C de un triángulo es 90°, el teorema del coseno se reduce exactamente a c² = a² + b² (el teorema de Pitágoras)."

explicacion: |
  Porque cos(90°) = 0, y el término -2ab·cos(C) se anula.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 3
  b: 4
  cos_90: 0

respuesta: 25
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados a = 3 y b = 4, con el ángulo C entre ellos de 90° (cos 90° = 0). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "c² = 3² + 4² − 2×3×4×0 = 9 + 16 − 0 = 25"

explicacion: |
  Da exactamente el mismo resultado que Pitágoras: 3² + 4² = 25.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 6, 8])
  b: uno_de([4, 6, 8])
  cos_60: 0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_60)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo C = 60° entre ellos (cos 60° = 0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"

explicacion: |
  Se reemplazan los valores directamente en la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 5, 6])
  b: uno_de([4, 5, 6])
  cos_120: -0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_120)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo obtuso C = 120° entre ellos (cos 120° = -0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×(-0,5) = {(a * a) + (b * b) - (2 * a * b * cos_120)}"

explicacion: |
  Con coseno negativo, el término se SUMA en vez de restarse: el lado c
  queda más largo que si el ángulo fuera agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del coseno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"
  - "Cuando se conoce sólo un lado, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"

explicacion: |
  Es el caso LAL (lado-ángulo-lado) o LLL (los tres lados).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre cuándo usar el teorema del seno y cuándo el del coseno?"
tipo: mc
opciones_explicitas:
  - "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"
  - "El seno sólo sirve para ángulos agudos; el coseno sólo para obtusos"
  - "Son intercambiables, da lo mismo cuál se use"
respuesta: "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"

explicacion: |
  Es la clave para decidir cuál aplicar según los datos disponibles.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del coseno funciona igual de bien con ángulos obtusos (mayores a 90°), no sólo con agudos."

explicacion: |
  El coseno de un ángulo obtuso es simplemente negativo, y la fórmula
  lo maneja sin ningún ajuste extra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 6
  b: 8
  cos_60: 0.5

respuesta: redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un terreno triangular tiene dos lados de {a} m y {b} m, con un ángulo de 60° entre ellos. ¿Cuánto mide el tercer lado? Redondeá a 2 decimales."

pasos:
  - "c² = {a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"
  - "c = √{(a * a) + (b * b) - (2 * a * b * cos_60)} ≈ {redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)} m"

explicacion: |
  Se calcula c² con el teorema del coseno, y recién al final se saca
  raíz cuadrada para obtener c.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "ordenar"]

enunciado: "Ordená los pasos para hallar el lado c con el teorema del coseno, conociendo a, b y el ángulo C entre ellos."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de c² para obtener c"
  - "Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)"
  - "Calcular el valor numérico de c²"
respuesta_orden: ["Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)", "Calcular el valor numérico de c²", "Sacar raíz cuadrada de c² para obtener c"]
explicacion: |
  La raíz cuadrada siempre va al final, no antes de tener c² completo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "ordenar"]

enunciado: "Ordená los pasos para hallar un lado desconocido con el teorema del seno."
tipo: ordenar
opciones_explicitas:
  - "El resultado es el lado buscado"
  - "Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido"
  - "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado"
respuesta_orden: ["Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido", "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado", "El resultado es el lado buscado"]
explicacion: |
  La razón constante es el puente entre el par conocido y el
  desconocido.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno también se puede usar al revés: para hallar un ángulo desconocido, si se conocen los dos lados involucrados y un ángulo opuesto ya conocido."

explicacion: |
  La misma proporción se puede despejar para cualquiera de sus cuatro
  términos (dos lados, dos ángulos).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Para qué se usan estos dos teoremas en topografía?"
tipo: mc
opciones_explicitas:
  - "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"
  - "Sólo para calcular el área de un terreno cuadrado"
  - "No tienen ninguna aplicación práctica fuera del aula"
respuesta: "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"

explicacion: |
  Es la base de la triangulación: no hace falta que el triángulo
  formado tenga un ángulo recto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno y del coseno también son válidos para triángulos rectángulos, aunque ahí ya alcance con Pitágoras y las razones trigonométricas simples."

explicacion: |
  Son herramientas más generales; simplemente no hace falta usarlas
  cuando hay una forma más rápida disponible.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado: 5

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo equilátero tiene los tres lados iguales a {lado}, y sus tres ángulos son de 60°. ¿Es consistente que la razón lado/sen(ángulo opuesto) dé el mismo valor para los tres lados (teorema del seno)?"

explicacion: |
  Al ser equilátero, los tres pares lado-ángulo son idénticos entre sí:
  la razón tiene que coincidir por simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "Si se conocen los tres lados de un triángulo (LLL) pero ningún ángulo, ¿qué teorema conviene usar para hallar un ángulo?"
tipo: mc
opciones_explicitas:
  - "El teorema del coseno, despejando cos(C) de la fórmula"
  - "El teorema del seno, porque siempre es más simple"
  - "Ninguno de los dos sirve sin conocer al menos un ángulo de entrada"
respuesta: "El teorema del coseno, despejando cos(C) de la fórmula"

explicacion: |
  cos(C) = (a² + b² − c²) / (2ab): se puede despejar sin conocer ningún
  ángulo de entrada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven el teorema del seno y del coseno en conjunto?"
tipo: mc
opciones_explicitas:
  - "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"
  - "Sólo sirven para triángulos equiláteros"
  - "Son redundantes entre sí, alcanza con saber uno solo"
respuesta: "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"

explicacion: |
  Entre los dos, y sumados a Pitágoras para el caso rectángulo, cubren
  cualquier triángulo posible.
```

