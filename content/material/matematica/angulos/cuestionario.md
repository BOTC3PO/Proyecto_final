# Matemática — Ángulos: tipos, medida y relaciones (cuestionario, 34 preguntas VBLang)

> Tema: `GO1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un ángulo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

enunciado: "¿Qué es un ángulo?"
tipo: mc
opciones_explicitas:
  - "La abertura entre dos semirrectas que comparten un mismo origen"
  - "La distancia entre dos puntos"
  - "El área encerrada por un polígono"
respuesta: "La abertura entre dos semirrectas que comparten un mismo origen"

explicacion: |
  Ese punto de origen común es el vértice; las dos semirrectas son los
  lados del ángulo.
```

### 2 — Cómo se mide un ángulo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

enunciado: "¿En qué unidad se mide un ángulo, y con qué instrumento?"
tipo: mc
opciones_explicitas:
  - "En grados, con el transportador"
  - "En metros, con una regla"
  - "En litros, con una probeta"
respuesta: "En grados, con el transportador"

explicacion: |
  Ver `../magnitud-unidad-instrumento/`: el grado es la unidad, el
  transportador el instrumento.
```

### 3 — Una vuelta completa

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

respuesta: 360
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide una vuelta completa?"

explicacion: |
  360° es el ángulo completo.
```

### 4 — Clasificar un ángulo agudo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(1, 89)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Agudo"
  - "Obtuso"
  - "Recto"
respuesta: "Agudo"

explicacion: |
  Mide menos de 90°: es agudo.
```

### 5 — Clasificar un ángulo recto

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

enunciado: "Un ángulo mide 90°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Recto"
  - "Agudo"
  - "Obtuso"
respuesta: "Recto"

explicacion: |
  Exactamente 90°: es recto.
```

### 6 — Clasificar un ángulo obtuso

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(91, 179)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Obtuso"
  - "Agudo"
  - "Llano"
respuesta: "Obtuso"

explicacion: |
  Mide más de 90° y menos de 180°: es obtuso.
```

### 7 — Clasificar un ángulo llano

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

enunciado: "Un ángulo mide 180°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Llano"
  - "Obtuso"
  - "Completo"
respuesta: "Llano"

explicacion: |
  Exactamente 180°: sus dos lados forman una línea recta.
```

### 8 — Clasificar un ángulo reflejo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(181, 359)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Reflejo"
  - "Obtuso"
  - "Completo"
respuesta: "Reflejo"

explicacion: |
  Mide más de 180° y menos de 360°: es reflejo.
```

### 9 — Qué son ángulos complementarios

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "complementarios", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son complementarios?"
tipo: mc
opciones_explicitas:
  - "Cuando sus medidas suman 90°"
  - "Cuando sus medidas suman 180°"
  - "Cuando miden exactamente lo mismo"
respuesta: "Cuando sus medidas suman 90°"

explicacion: |
  30° y 60° son complementarios, por ejemplo.
```

### 10 — Calcular el complemento de un ángulo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "complementarios"]

variables:
  a: random(10, 80)

respuesta: 90 - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el complemento de un ángulo de {a}°?"

pasos:
  - "90 − {a} = {90 - a}°"

explicacion: |
  El complemento es lo que le falta a un ángulo para llegar a 90°.
```

### 11 — Verificar si dos ángulos son complementarios

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "complementarios"]

variables:
  a: random(10, 80)
  b: uno_de([90 - a, random(10, 80)])

respuesta: (a + b == 90)
tipo: vf

enunciado: "¿Son complementarios un ángulo de {a}° y otro de {b}°?"

pasos:
  - "{a} + {b} = {a + b}"

explicacion: |
  Son complementarios sólo si la suma da exactamente 90°.
```

### 12 — Qué son ángulos suplementarios

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "suplementarios", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son suplementarios?"
tipo: mc
opciones_explicitas:
  - "Cuando sus medidas suman 180°"
  - "Cuando sus medidas suman 90°"
  - "Cuando uno es el doble del otro"
respuesta: "Cuando sus medidas suman 180°"

explicacion: |
  110° y 70° son suplementarios, por ejemplo.
```

### 13 — Calcular el suplemento de un ángulo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "suplementarios"]

variables:
  a: random(10, 170)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el suplemento de un ángulo de {a}°?"

pasos:
  - "180 − {a} = {180 - a}°"

explicacion: |
  El suplemento es lo que le falta a un ángulo para llegar a 180°.
```

### 14 — Verificar si dos ángulos son suplementarios

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "suplementarios"]

variables:
  a: random(10, 170)
  b: uno_de([180 - a, random(10, 170)])

respuesta: (a + b == 180)
tipo: vf

enunciado: "¿Son suplementarios un ángulo de {a}° y otro de {b}°?"

pasos:
  - "{a} + {b} = {a + b}"

explicacion: |
  Son suplementarios sólo si la suma da exactamente 180°.
```

### 15 — Qué son ángulos adyacentes

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "adyacentes", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son adyacentes?"
tipo: mc
opciones_explicitas:
  - "Cuando comparten el vértice y un lado, quedando uno al lado del otro"
  - "Cuando están opuestos por el vértice"
  - "Cuando miden exactamente lo mismo"
respuesta: "Cuando comparten el vértice y un lado, quedando uno al lado del otro"

explicacion: |
  No se superponen: quedan "pegados" por un lado en común.
```

### 16 — Ángulos adyacentes que forman un ángulo llano

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "adyacentes"]

variables:
  a: random(20, 160)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "Dos ángulos adyacentes forman entre los dos un ángulo llano (180°). Si uno mide {a}°, ¿cuánto mide el otro?"

pasos:
  - "180 − {a} = {180 - a}°"

explicacion: |
  Cuando dos ángulos adyacentes forman un llano, también son
  suplementarios entre sí.
```

### 17 — Qué son ángulos opuestos por el vértice

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "opuestos_por_el_vertice", "vocabulario"]

enunciado: "Cuando dos rectas se cruzan, ¿cómo se llaman los ángulos que quedan enfrentados en diagonal?"
tipo: mc
opciones_explicitas:
  - "Opuestos por el vértice"
  - "Adyacentes"
  - "Complementarios"
respuesta: "Opuestos por el vértice"

explicacion: |
  Se forman cuando dos rectas se cortan; quedan uno frente al otro, en
  diagonal.
```

### 18 — Los ángulos opuestos por el vértice son iguales

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "opuestos_por_el_vertice"]

respuesta: verdadero
tipo: vf

enunciado: "Los ángulos opuestos por el vértice siempre son iguales entre sí."

explicacion: |
  Es una propiedad que se cumple siempre, sin importar el ángulo que
  formen las dos rectas.
```

### 19 — Problema: dos rectas que se cruzan

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "opuestos_por_el_vertice", "problema"]

variables:
  a: random(20, 160)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "Dos rectas se cruzan y uno de los cuatro ángulos formados mide {a}°. ¿Cuánto mide el ángulo opuesto por el vértice a ese?"

explicacion: |
  Los ángulos opuestos por el vértice son iguales: mide lo mismo,
  {a}°.
```

### 20 — Problema: el ángulo adyacente al cruce de rectas

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "adyacentes", "problema"]

variables:
  a: random(20, 160)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "Dos rectas se cruzan y uno de los cuatro ángulos formados mide {a}°. ¿Cuánto mide cualquiera de los dos ángulos ADYACENTES a ese (los que están a su lado, no el opuesto)?"

pasos:
  - "180 − {a} = {180 - a}°, porque son suplementarios (juntos forman un ángulo llano)."

explicacion: |
  Los ángulos adyacentes al cruce son suplementarios del ángulo dado.
```

### 21 — Ángulos alrededor de un punto suman 360°

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los ángulos formados alrededor de un mismo punto (sin superponerse) suman en total 360°."

explicacion: |
  Es una vuelta completa repartida entre todos esos ángulos.
```

### 22 — Problema: ángulo que falta alrededor de un punto

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "problema"]

variables:
  a: random(60, 120)
  b: random(60, 120)
  c: random(60, 120)

respuesta: 360 - (a + b + c)
tipo: input
tolerancia_abs: 0

enunciado: "Alrededor de un punto hay 4 ángulos que no se superponen. Tres de ellos miden {a}°, {b}° y {c}°. ¿Cuánto mide el cuarto?"

pasos:
  - "360 − ({a} + {b} + {c}) = {360 - (a + b + c)}°"

explicacion: |
  Los 4 ángulos alrededor de un punto suman 360° en total.
```

### 23 — Un ángulo recto NO es agudo ni obtuso

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Un ángulo recto (90°) se clasifica como agudo."

explicacion: |
  El recto es su propia categoría (exactamente 90°): no es agudo (menos
  de 90°) ni obtuso (más de 90°).
```

### 24 — El ángulo complementario es siempre agudo

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "complementarios"]

respuesta: verdadero
tipo: vf

enunciado: "El complemento de cualquier ángulo agudo (entre 0° y 90°) siempre es también un ángulo agudo."

explicacion: |
  Si el ángulo original mide entre 0° y 90°, 90° menos ese valor da otro
  número entre 0° y 90°.
```

### 25 — El suplemento puede ser agudo, recto u obtuso

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "suplementarios"]

respuesta: verdadero
tipo: vf

enunciado: "El suplemento de un ángulo puede ser agudo, recto u obtuso, dependiendo de cuánto mida el ángulo original."

explicacion: |
  Si el original es obtuso, el suplemento es agudo (y viceversa); si el
  original mide 90°, el suplemento también mide 90°.
```

### 26 — Comparar dos ángulos

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "comparacion"]

variables:
  a: random(10, 170)
  b: random(10, 170)

restricciones:
  - a != b

respuesta: a > b
tipo: vf

enunciado: "¿Es mayor un ángulo de {a}° que uno de {b}°?"

explicacion: |
  Se comparan directamente los valores en grados.
```

### 27 — Elegir el ángulo mayor

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "comparacion"]

variables:
  a: random(10, 89)
  b: random(91, 179)

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos ángulos es mayor: {a}° o {b}°?"

explicacion: |
  Se comparan los valores directamente.
```

### 28 — Completar: complemento

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "completar"]

variables:
  a: random(10, 80)

tipo: completar
enunciado: "Completá: el complemento de un ángulo de {a}° es ___°."
respuestas_validas:
  - 90 - a

explicacion: |
  90° menos el ángulo dado.
```

### 29 — Completar: suplemento

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "completar"]

variables:
  a: random(10, 170)

tipo: completar
enunciado: "Completá: el suplemento de un ángulo de {a}° es ___°."
respuestas_validas:
  - 180 - a

explicacion: |
  180° menos el ángulo dado.
```

### 30 — Ordenar ángulos de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "orden"]

tipo: ordenar
enunciado: "Ordená estos ángulos de menor a mayor: 120°, 45°, 90°, 15°."
opciones_explicitas:
  - "90°"
  - "15°"
  - "120°"
  - "45°"
respuesta_orden: ["15°", "45°", "90°", "120°"]

explicacion: |
  Se comparan directamente los valores en grados.
```

### 31 — Verificar una clasificación (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "verificacion"]

variables:
  medida: random(91, 179)
  clasificacion_mostrada: uno_de(["obtuso", "obtuso", "obtuso", "agudo"])

respuesta: (clasificacion_mostrada == "obtuso")
tipo: vf

enunciado: "¿Está bien esta clasificación? Un ángulo de {medida}° es {clasificacion_mostrada}."

explicacion: |
  Entre 90° y 180° (sin llegar a 180°), el ángulo es obtuso.
```

### 32 — Ángulo recto y perpendicularidad

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando dos rectas se cruzan formando ángulos rectos (90°), se dice que son perpendiculares."

explicacion: |
  Es la definición de perpendicularidad en términos de ángulos.
```

### 33 — Problema: ángulo de un reloj

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "problema"]

variables:
  horas: uno_de([3, 6, 9])

respuesta: (horas / 12) * 360
tipo: input
tolerancia_abs: 0

enunciado: "En un reloj analógico, las 12 horas están repartidas en 360° a su alrededor. ¿Cuántos grados recorre el minutero desde las 12 hasta marcar las {horas} en punto (pensando la esfera del reloj completa, no la posición del horario)?"

pasos:
  - "({horas} ÷ 12) × 360 = {(horas / 12) * 360}°"

explicacion: |
  Cada hora representa 360° ÷ 12 = 30° del total de la esfera del reloj.
```

### 34 — Cierre: las relaciones entre ángulos permiten calcular sin medir

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer las relaciones entre ángulos (complementarios, suplementarios, opuestos por el vértice) permite calcular la medida de un ángulo sin necesidad de medirlo con el transportador."

explicacion: |
  Es la utilidad central de este módulo, y la base para
  `../triangulos/`.
```
