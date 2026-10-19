# Examen jefe — Maestro de Áreas y Distribución Normal

> Logro #608. Calculaste áreas de polígonos compuestos, volumen y capacidad, y dominaste la distribución normal, la dispersión y las variables aleatorias. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **117 preguntas totales** en 5/5 secciones.

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

## Sección: volumen-y-capacidad (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el volumen de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "La medida del espacio que ocupa en tres dimensiones"
  - "La medida de su contorno"
  - "La cantidad de caras que tiene"
respuesta: "La medida del espacio que ocupa en tres dimensiones"

explicacion: |
  Se mide en unidades cúbicas: cm³, m³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el cubo unitario que se usa para medir volumen?"
tipo: mc
opciones_explicitas:
  - "Un cubo de 1 unidad de lado, con volumen 1"
  - "Cualquier cubo, sin importar su tamaño"
  - "Un cubo con 6 caras cuadradas"
respuesta: "Un cubo de 1 unidad de lado, con volumen 1"

explicacion: |
  Medir un volumen es, en el fondo, contar cuántos cubos unitarios entran
  adentro del cuerpo.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 20)
  a: random(2, 15)
  h: random(2, 10)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de una caja de {l} cm de largo, {a} cm de ancho y {h} cm de alto?"

pasos:
  - "{l} × {a} × {h} = {l * a * h} cm³"

explicacion: |
  El volumen de un prisma rectangular es largo × ancho × alto.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 15)

respuesta: l * l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de un cubo de {l} cm de lado?"

pasos:
  - "{l} × {l} × {l} = {l * l * l} cm³"

explicacion: |
  El volumen del cubo es el lado elevado al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 10)
  a: random(2, 8)
  h: random(2, 10)
  volumen: l * a * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Una caja de {l} cm de largo y {a} cm de ancho tiene {volumen} cm³ de volumen. ¿Cuánto mide su altura?"

pasos:
  - "{volumen} ÷ ({l} × {a}) = {volumen / (l * a)} cm"

explicacion: |
  La altura se despeja dividiendo el volumen por el área de la base
  (largo × ancho).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 10)
  volumen: l * l * l

respuesta: l
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cubo tiene {volumen} cm³ de volumen. ¿Cuánto mide su lado?"

pasos:
  - "raiz({volumen}, 3) = {raiz(volumen, 3)} cm"

explicacion: |
  El lado es la raíz cúbica del volumen (la operación inversa de
  elevarlo al cubo).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "vocabulario"]

enunciado: "¿Qué es la capacidad de un recipiente?"
tipo: mc
opciones_explicitas:
  - "Cuánto líquido puede contener"
  - "Cuánto pesa el recipiente vacío"
  - "El área de su superficie exterior"
respuesta: "Cuánto líquido puede contener"

explicacion: |
  Se mide en litros y sus derivados (ml).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro equivale exactamente a 1 decímetro cúbico (1 dm³)."

explicacion: |
  Es la equivalencia central entre volumen y capacidad.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 mililitro equivale exactamente a 1 centímetro cúbico (1 cm³)."

explicacion: |
  Es la misma equivalencia que 1 l = 1 dm³, pero a escala mil veces más
  chica.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  cm3: random(50, 900)

respuesta: cm3
tipo: input
tolerancia_abs: 0

enunciado: "Un envase tiene un volumen de {cm3} cm³. ¿Cuántos ml de líquido le entran?"

explicacion: |
  1 cm³ = 1 ml: el número no cambia, sólo el nombre de la unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  litros: random(1, 9)
  cm3: litros * 1000

respuesta: litros
tipo: input
tolerancia_abs: 0.01

enunciado: "Un recipiente tiene un volumen de {cm3} cm³. ¿Cuántos litros le entran?"

pasos:
  - "{cm3} cm³ = {cm3} ml = {cm3 / 1000} l (porque 1 l = 1000 ml)"

explicacion: |
  Se convierte cm³ a ml (1 a 1) y después ml a litros (÷1000).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["capacidad", "conversion"]

variables:
  m3: random(1, 8)

respuesta: m3 * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque tiene {m3} m³ de volumen. ¿Cuántos litros de agua puede contener?"

pasos:
  - "1 m³ = 1000 litros, así que {m3} × 1000 = {m3 * 1000} litros"

explicacion: |
  1 metro cúbico equivale a 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "capacidad", "problema"]

variables:
  l: random(20, 60)
  a: random(15, 40)
  h: random(15, 30)

respuesta: (l * a * h) / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pecera con forma de caja mide {l} cm de largo, {a} cm de ancho y {h} cm de alto. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l} × {a} × {h} = {l * a * h} cm³. Como 1000 cm³ = 1 litro, {l * a * h} ÷ 1000 = {(l * a * h) / 1000} litros."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros usando la
  equivalencia 1000 cm³ = 1 litro.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "problema"]

variables:
  l: random(25, 35)
  a: random(15, 20)
  h: random(10, 15)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "Una caja de zapatos mide {l} cm × {a} cm × {h} cm. ¿Cuál es su volumen?"

explicacion: |
  Se aplica directamente largo × ancho × alto.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "problema"]

variables:
  l: random(2, 6)
  a: random(2, 6)
  h: random(2, 6)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos cubos de 1 cm de lado entran en una caja de {l} cm × {a} cm × {h} cm, si se apilan sin dejar huecos?"

explicacion: |
  Cada cubo de 1 cm de lado ocupa 1 cm³, así que la cantidad de cubos
  coincide con el volumen de la caja en cm³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l1: random(2, 10)
  a1: random(2, 10)
  h1: random(2, 10)
  l2: random(2, 10)
  a2: random(2, 10)
  h2: random(2, 10)

restricciones:
  - (l1 * a1 * h1) != (l2 * a2 * h2)

respuesta: (l1 * a1 * h1) > (l2 * a2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen una caja de {l1}×{a1}×{h1} cm, que otra de {l2}×{a2}×{h2} cm?"

pasos:
  - "Caja 1: {l1 * a1 * h1} cm³. Caja 2: {l2 * a2 * h2} cm³."

explicacion: |
  Se calcula el volumen de cada una y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen se mide en unidades cúbicas, como cm³ o m³."

explicacion: |
  Es consecuencia de medir tres dimensiones a la vez (largo × ancho ×
  alto).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: falso
tipo: vf

enunciado: "El volumen y el área miden exactamente lo mismo, sólo que con distinto nombre."

explicacion: |
  El área mide superficie (2 dimensiones, unidades cuadradas); el volumen
  mide espacio (3 dimensiones, unidades cúbicas). Son magnitudes
  distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cubo es un caso particular de prisma rectangular, donde los tres lados son iguales."

explicacion: |
  Por eso su fórmula (l³) es la misma que largo×ancho×alto, con los tres
  valores iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del volumen de un prisma rectangular?"
tipo: mc
opciones_explicitas:
  - "largo × ancho × alto"
  - "largo + ancho + alto"
  - "2 × (largo + ancho)"
respuesta: "largo × ancho × alto"

explicacion: |
  Se multiplican las tres dimensiones.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "completar"]

variables:
  l: random(2, 12)

tipo: completar
enunciado: "Completá: el volumen de un cubo de lado {l} cm es ___ cm³."
respuestas_validas:
  - l * l * l

explicacion: |
  Volumen = lado³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "completar"]

tipo: completar
enunciado: "Completá: 1 metro cúbico equivale a ___ litros."
respuestas_validas:
  - 1000

explicacion: |
  1 m³ = 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "verificacion"]

variables:
  l: random(2, 15)
  a: random(2, 12)
  h: random(2, 10)
  correcto: l * a * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de una caja de {l}×{a}×{h} cm es {mostrado} cm³."

explicacion: |
  Se recalcula largo × ancho × alto y se compara con lo mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "capacidad", "problema"]

variables:
  l_m: random(1, 4)

respuesta: (l_m * l_m * l_m) * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque cúbico mide {l_m} m de lado. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l_m}³ = {l_m * l_m * l_m} m³. Como 1 m³ = 1000 litros, {l_m * l_m * l_m} × 1000 = {(l_m * l_m * l_m) * 1000} litros."

explicacion: |
  Primero se calcula el volumen en m³, y después se convierte a litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "vocabulario"]

variables:
  l: random(2, 8)

respuesta: falso
tipo: vf

enunciado: "Si el lado de un cubo de {l} cm se duplica, su volumen también se duplica."

pasos:
  - "Volumen original: {l}³ = {l * l * l} cm³. Volumen con el lado doble: {2 * l}³ = {(2 * l) * (2 * l) * (2 * l)} cm³."

explicacion: |
  El volumen se multiplica por 2³ = 8, no por 2: al duplicar el lado, el
  volumen queda ocho veces más grande, no el doble.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "problema"]

variables:
  l_chica: random(2, 5)
  factor: random(2, 4)
  l_grande: l_chica * factor

respuesta: factor * factor * factor
tipo: input
tolerancia_abs: 0

enunciado: "Una caja cúbica grande mide {l_grande} cm de lado y una caja cúbica chica mide {l_chica} cm de lado. ¿Cuántas cajas chicas entran exactamente en la grande?"

pasos:
  - "Volumen grande: {l_grande}³ = {l_grande * l_grande * l_grande} cm³. Volumen chica: {l_chica}³ = {l_chica * l_chica * l_chica} cm³. {l_grande * l_grande * l_grande} ÷ {l_chica * l_chica * l_chica} = {(l_grande * l_grande * l_grande) / (l_chica * l_chica * l_chica)}."

explicacion: |
  Se divide el volumen grande por el volumen chico.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

enunciado: "¿Cuál de estas capacidades es mayor?"
tipo: mc
opciones_explicitas:
  - "2000 ml"
  - "1 litro"
  - "500 ml"
respuesta: "2000 ml"

explicacion: |
  2000 ml = 2 litros, más que 1 litro o 500 ml.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["orden", "capacidad"]

tipo: ordenar
enunciado: "Ordená estas capacidades de menor a mayor: 3 litros, 250 ml, 1500 ml, 0,5 litros."
opciones_explicitas:
  - "3 litros"
  - "1500 ml"
  - "250 ml"
  - "0,5 litros"
respuesta_orden: ["250 ml", "0,5 litros", "1500 ml", "3 litros"]

pasos:
  - "En ml: 3 litros = 3000 ml; 250 ml; 1500 ml; 0,5 litros = 500 ml."

explicacion: |
  Conviene pasar todo a la misma unidad antes de comparar: 250 < 500 <
  1500 < 3000.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "capacidad"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo de 1 metro de lado tiene un volumen de 1 m³. ¿A cuántos litros equivale eso?"

explicacion: |
  1 m³ = 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular cuántos litros de líquido entran en un recipiente es, en el fondo, calcular su volumen y después convertirlo a litros."

explicacion: |
  Volumen y capacidad son el mismo concepto físico, medido con distintas
  unidades — por eso 1 dm³ = 1 litro.
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

## Sección: variable-aleatoria-discreta-continua (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["variable_aleatoria", "vocabulario"]

enunciado: "¿Qué es una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"
  - "Un valor que siempre es el mismo, sin importar el experimento"
  - "Otro nombre para la media de un conjunto de datos"
respuesta: "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"

explicacion: |
  Antes del experimento no se sabe qué valor va a tomar, pero sí cómo
  se reparten las probabilidades entre los valores posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea DISCRETA?"
tipo: mc
opciones_explicitas:
  - "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"
  - "Que sólo pueda tomar el valor 0 o el valor 1"
  - "Que su valor esperado sea siempre un número entero"
respuesta: "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda, o la cantidad
  de llamadas en una hora.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea CONTINUA?"
tipo: mc
opciones_explicitas:
  - "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"
  - "Que nunca pueda tomar valores negativos"
  - "Que siempre esté relacionada con el tiempo"
respuesta: "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"

explicacion: |
  Como la altura de una persona o el tiempo de espera de un colectivo
  — siempre hay un valor más preciso posible entre dos cualesquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de hijos de una familia elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"

explicacion: |
  No existe "2,5 hijos" como resultado posible del conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'altura de una persona elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"
  - "Discreta: sólo puede valer números enteros de metros"
respuesta: "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"

explicacion: |
  Siempre existe una medición más precisa posible entre dos alturas
  cualesquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de llamadas que recibe un call center en una hora' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-de-poisson/`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿El 'tiempo de espera hasta que llega el próximo colectivo' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"
  - "Discreta: sólo puede valer una cantidad entera de minutos"
respuesta: "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-exponencial/`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "continua"]

respuesta: verdadero
tipo: vf

enunciado: "Los valores posibles de una variable discreta se pueden enumerar uno por uno (aunque sean infinitos), mientras que los de una variable continua no — siempre hay un valor intermedio más preciso entre dos cualesquiera."

explicacion: |
  Esa es la diferencia central entre ambos tipos.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria discreta, tiene sentido preguntar directamente P(X = k) (la probabilidad de un valor exacto) y armar una tabla con la probabilidad de cada valor posible."

explicacion: |
  Es exactamente lo que hace `../distribucion-binomial/` con `P(X=k)`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria continua, la probabilidad de que tome un valor EXACTO (por ejemplo, que una persona mida exactamente 1,730000... m) es esencialmente cero — hay que preguntar por intervalos en cambio."

explicacion: |
  Por eso con variables continuas se pregunta P(a ≤ X ≤ b), no
  P(X = un valor puntual).
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua", "completar"]

tipo: completar
enunciado: "Completá: para una variable continua, en vez de preguntar por un valor exacto, se pregunta por la probabilidad de que caiga dentro de un ___."
respuestas_validas:
  - "intervalo"
  - "rango"

explicacion: |
  Como "¿cuál es la probabilidad de que el colectivo tarde entre 5 y
  10 minutos?".
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "problema"]

variables:
  p0: uno_de([0.2, 0.3, 0.25])
  p1: uno_de([0.4, 0.45, 0.5])

respuesta: redondear(1 - p0 - p1, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una variable aleatoria discreta X toma los valores 0, 1 y 2, con P(X=0)={p0} y P(X=1)={p1}. Como la suma de todas las probabilidades debe dar 1, ¿cuánto vale P(X=2)?"

pasos:
  - "P(X=2) = 1 − {p0} − {p1} = {redondear(1 - p0 - p1, 2)}"

explicacion: |
  Las probabilidades de todos los valores posibles de una variable
  discreta siempre suman exactamente 1.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las probabilidades de TODOS los valores posibles de una variable aleatoria discreta siempre da exactamente 1."

explicacion: |
  Porque la variable necesariamente toma alguno de esos valores.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable DISCRETA?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
  - "La distribución normal (campana de Gauss)"
respuesta: "La distribución binomial (P(X=k), cantidad de éxitos)"

explicacion: |
  La binomial cuenta un número entero de éxitos — siempre enumerable.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable CONTINUA?"
tipo: mc
opciones_explicitas:
  - "La distribución normal (campana de Gauss)"
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
respuesta: "La distribución normal (campana de Gauss)"

explicacion: |
  La normal describe una magnitud que puede tomar cualquier valor
  real, no un conteo de éxitos.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

enunciado: "Para el tiempo de espera de un colectivo (variable continua), ¿cuál de estas preguntas tiene sentido hacer?"
tipo: mc
opciones_explicitas:
  - "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"
  - "¿Cuál es la probabilidad de que tarde EXACTAMENTE 7,000000... minutos?"
respuesta: "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"

explicacion: |
  La segunda pregunta, para una variable continua, tiene probabilidad
  esencialmente cero.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "La cantidad de autos que pasan por un peaje en una hora, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"
  - "Continua — puede tomar cualquier valor decimal"
respuesta: "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"

explicacion: |
  Contar cuántos autos pasan es siempre un número entero.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "El tiempo que pasa entre la llegada de un cliente y la del siguiente a un local, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"
  - "Discreta — sólo puede valer una cantidad entera de minutos"
respuesta: "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"

explicacion: |
  El tiempo entre eventos siempre se puede medir con más precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene preguntarse primero 'discreta o continua' antes de elegir qué distribución usar para modelar un problema?"
tipo: mc
opciones_explicitas:
  - "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"
  - "No importa cuál se elija, todas las distribuciones dan el mismo resultado"
  - "Sólo importa para variables continuas, nunca para las discretas"
respuesta: "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"

explicacion: |
  Es el criterio que organiza las cuatro distribuciones de esta cadena
  en dos pares (discretas / continuas).
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir entre variable aleatoria discreta y continua?"
tipo: mc
opciones_explicitas:
  - "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"
  - "Es sólo una diferencia de vocabulario, sin consecuencias prácticas"
  - "Sólo se usa para clasificar problemas de Física, no de estadística"
respuesta: "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"

explicacion: |
  Es el puente hacia `../distribucion-exponencial/` y
  `../distribucion-de-poisson/`, los dos módulos que siguen.
```

