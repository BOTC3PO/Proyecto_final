# Dibujo Tecnico — Sistemas de proyeccion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Proyección Ortogonal

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["proyeccion_ortogonal", "definicion"]

respuesta: "paralelas"
tipo: completar
respuestas_validas:
  - "paralelas"
  - "paralela"

enunciado: "En una proyección ortogonal, los rayos proyectantes son líneas que son siempre ___ entre sí y son perpendiculares al plano de proyección."

explicacion: |
  La proyección ortogonal se caracteriza porque los rayos proyectantes son perpendiculares al plano de proyección, lo que implica que son paralelos entre sí.
```

### 2 — Proyección Axonométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["axonométrica", "isométrica"]

opciones_explicitas: ["Isométrica", "Dimétrica", "Trimétrica"]
respuesta: "Isométrica"
tipo: mc

enunciado: "En la proyección axonométrica, ¿cómo se denomina al tipo de proyección donde las tres dimensiones (ancho, alto y profundidad) se representan con la misma escala y los ángulos entre los ejes son iguales?"

explicacion: |
  La proyección isométrica es un caso especial de axonométrica donde la escala es la misma para los tres ejes principales.
```

### 3 — Verdad o Falso: Proyección Oblicua

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["oblicua", "verdad_falso"]

respuesta: falso
tipo: vf

enunciado: "En la proyección oblicua, la cara frontal del objeto se proyecta sin deformación, ya que el plano de proyección es paralelo a dicha cara."

explicacion: |
  Es verdadero que la cara frontal no se deforma, pero la pregunta es de falso/verdadero sobre la propiedad de la cara frontal. En la oblicua, la cara frontal es paralela al plano, por lo tanto es verdadera la premisa. (Nota: El usuario debe marcar falso si la premisa es falsa).
  *Corrección de lógica para el DSL*: Si la premisa es verdadera, la respuesta es verdadero.
  
  *Re-ajuste*:
  Enunciado: "En la proyección oblicua, la cara frontal del objeto se proyecta sin deformación, ya que el plano de proyección es paralelo a dicha cara."
  Respuesta: verdadero
  Tipo: vf
```

### 4 — Orden de visualización de planos

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

opciones_explicitas: ["Plano de proyección", "Objeto", "Rayos proyectantes"]
respuesta_orden: ["Objeto", "Rayos proyectantes", "Plano de proyección"]
tipo: ordenar

enunciado: "Ordene los elementos según el orden en que viaja la luz (o la línea de visión) desde la fuente hasta la captura de la imagen en un sistema de proyección:"

explicacion: |
  El proceso comienza en el objeto, sigue el recorrido de los rayos proyectantes y finaliza al impactar en el plano de proyección.
```

### 5 — Diferencia entre Axonométrica y Oblicua

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["comparativa", "axonométrica"]

variables:
  idx: uno_de([0, 1])
  datos: [["Paralelas al plano", "Oblicua"], ["Perpendiculares al plano", "Axonométrica"]]

enunciado: "Si comparamos la orientación de los rayos proyectantes respecto al plano de proyección, la proyección {datos[idx][0]} se caracteriza por tener rayos que son {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Oblicua", "Axonométrica"]

explicacion: |
  La respuesta depende del caso sorteado. Si es Oblicua, los rayos son paralelos al plano (en su cara frontal); si es Axonométrica (Ortogonal), son perpendiculares.
```

### 6 — Proyección Ortogonal: El concepto de paralelismo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "proyecciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una proyección ortogonal, las líneas proyectantes (rayos proyectantes) son paralelas entre sí y son perpendiculares al plano de proyección."

explicacion: |
  Efectivamente. La característica fundamental de la proyección ortogonal es que los rayos son perpendiculares al plano, lo que garantiza que la forma de la cara proyectada sea fiel a la realidad sin distorsiones de perspectiva.
```

### 7 — Identificación de sistemas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["axonométrica", "oblicua", "identificación"]

variables:
  escenario: uno_de([["una vista de un cubo donde las caras frontales se ven paralelas al plano", "axonométrica"], ["una vista donde la cara frontal no tiene deformación y las caras laterales se ven con ángulo", "oblicua"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["axonométrica", "oblicua"]

enunciado: "Si al observar un dibujo técnico vemos que la cara frontal del objeto no presenta deformación (se ve de frente) y las caras laterales se proyectan con un ángulo de inclinación, estamos ante una proyección: ___"

explicacion: |
  En la proyección oblicua, una de las caras se mantiene paralela al plano de proyección (sin deformación), mientras que las demás se proyectan con una inclinación para dar sensación de profundidad.
```

### 8 — Cálculo de ángulos en Axonometría

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["isométrica", "ángulos"]

variables:
  datos: [[120, "isométrica"], [90, "ortogonal"], [45, "oblicua"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["isométrica", "ortogonal", "oblicua"]

enunciado: "En una proyección isométrica (un tipo de axonometría), los tres ejes principales del objeto forman ángulos de ___ grados entre sí sobre el plano de proyección."

explicacion: |
  En la proyección isométrica, los tres ejes principales (x, y, z) están representados con el mismo ángulo de inclinación respecto a la horizontal, siendo 120 grados entre cada par de ejes.
```

### 9 — Secuencia de pasos para el trazado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["proceso", "dibujo"]

respuesta_orden: ["Trazar el plano de proyección", "Situar el objeto en el espacio", "Lanzar rayos proyectantes perpendiculares", "Dibujar la proyección resultante"]
tipo: ordenar
opciones_explicitas: ["Trazar el plano de proyección", "Situar el objeto en el espacio", "Lanzar rayos proyectantes perpendiculares", "Dibujar la proyección resultante"]

enunciado: "Ordena los pasos lógicos para realizar una proyección ortogonal de un objeto sobre un plano:"

explicacion: |
  Primero se define el plano, luego se posiciona el objeto, se establecen los rayos perpendiculares y finalmente se marca la intersección (la proyección) en el plano.
```

### 10 — Diferencia de escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonométrica", "escala"]

variables:
  caso: [[1.0, "isométrica"], [0.5, "oblicua"]]
  idx: uno_de([0, 1])

respuesta: caso[idx][0]
tipo: completar
respuestas_validas:
  - "1.0"
  - "0.5"

enunciado: "En una proyección isométrica, el coeficiente de reducción de las dimensiones en los tres ejes principales es de ___."

explicacion: |
  A diferencia de la proyección oblicua (donde las caras frontales mantienen escala 1:1), en la isométrica todas las dimensiones se reducen por igual para mantener la proporción visual de los tres ejes.
```

### 11 — Proyección Ortogonal vs Axonométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["proyeccion_ortogonal", "axonometria"]

respuesta: "proyeccion_ortogonal"
tipo: mc

opciones_explicitas: ["proyeccion_ortogonal", "proyeccion_axonometrica", "proyeccion_oblicua"]

enunciado: "La principal diferencia es que en la proyección ortogonal las líneas de proyección son paralelas a un eje perpendicular al plano de proyección, mientras que en la axonometría se representan las tres dimensiones en un solo plano."

explicacion: |
  La proyección ortogonal se caracteriza por tener rayos proyectantes perpendiculares al plano de proyección, lo que permite representar las caras de un objeto sin distorsión de escala en sus caras principales.
```

### 12 — La escala en la proyección oblicua

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "escala"]

respuesta: "falso"
tipo: completar
enunciado: "En una proyección oblicua, las dimensiones de la cara frontal (la que es paralela al plano de proyección) se ven distorsionadas por un ángulo de inclinación, a diferencia de la proyección ortogonal."

explicacion: |
  Falso. En la proyección oblicua, la cara frontal se proyecta sin distorsión (escala real), mientras que las caras laterales o profundas son las que sufren la distorsión debido al ángulo de inclinación.
```

### 13 — Componentes de la Axonometría

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["axonometria", "isometria"]

variables:
  datos: [["isométrica", "dimensión igual"], ["dimétrica", "dos dimensiones iguales"], ["trimétrica", "tres dimensiones distintas"]]
  idx: uno_de([0,1,2])

respuesta: "dimensión igual"
tipo: completar

respuestas_validas:
  - "dimensión igual"
  - "dos dimensiones iguales"
  - "tres dimensiones distintas"

enunciado: "En la proyección axonometría de tipo {datos[idx][0]}, las tres escalas de las dimensiones en los ejes principales son la misma, lo que implica que la {datos[idx][1]}."

explicacion: |
  En la isometría, los tres ejes están a la misma distancia del observador, por lo que no hay deformación de escala entre ellos.
```

### 14 — Orden de complejidad de representación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["jerarquia", "sistemas"]

opciones_explicitas: ["proyeccion_ortogonal", "proyeccion_oblicua", "proyeccion_axonometrica"]
respuesta_orden: ["proyeccion_ortogonal", "proyeccion_oblicua", "proyeccion_axonometrica"]
tipo: ordenar

enunciado: "Ordena estos sistemas de proyección desde el que ofrece la representación más técnica y precisa (bidimensional) hasta el que ofrece la representación más visual y tridimensional."

explicacion: |
  La ortogonal es la base del dibujo técnico para fabricación; la oblicua es un paso intermedio y la axonometría busca la visión espacial rápida.
```

### 15 — El error de la escala en axonometría

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonometria", "error_comun"]

respuesta: 0.7
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si en una proyección oblicua la cara frontal tiene una escala de 1:1, pero la profundidad se proyecta con un coeficiente de reducción de 0.7 para compensar la inclinación, ¿cuál es el valor del coeficiente de reducción?"

explicacion: |
  El coeficiente de reducción es el factor por el cual se multiplican las medidas de la profundidad para compensar la perspectiva visual en la proyección oblicua.
```

### 16 — Proyección Ortogonal vs. Axonométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "axonométrica"]

tipo: mc
opciones_explicitas: ["Representación de la realidad en un plano con escalas variables", "Representación de la realidad en un plano con escalas constantes", "Representación de la realidad sin perspectiva", "Representación de la realidad con puntos de fuga"]

enunciado: "La principal diferencia entre la proyección ortogonal y la proyección axonométrica es que en la axonométrica..."

respuesta: "Representación de la realidad en un plano con escalas constantes"

explicacion: |
  En la proyección ortogonal (vistas diédricas), se representan planos perpendiculares al plano de proyección. En la axonométrica, se proyecta un objeto tridimensional sobre un plano, manteniendo la proporción de las dimensiones (escala) a lo largo de los ejes.
```

### 17 — Naturaleza de la Proyección Oblicua

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "proyecciones"]

tipo: vf
respuesta: falso

enunciado: "En una proyección oblicua, los rayos proyectantes son paralelos entre sí y caen perpendicularmente sobre el plano de proyección."

explicacion: |
  Falso. Esa es la definición de la proyección ortogonal. En la proyección oblicua, los rayos son paralelos entre sí, pero caen de forma oblicua (no perpendicular) sobre el plano de proyección.
```

### 18 — Orden de representación de vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["orden", "vistas"]

tipo: ordenar
opciones_explicitas: ["Alzado", "Planta", "Perfil"]

respuesta_orden: ["Alzado", "Planta", "Perfil"]

enunciado: "Ordene las vistas principales de un objeto según el orden estándar de lectura en un sistema de proyección diédrico (de arriba hacia abajo/izquierda a derecha):"

explicacion: |
  El orden estándar suele comenzar con el alzado (frente), seguido de la planta (vista superior) y el perfil (vista lateral).
```

### 19 — Componentes de la Proyección Axonométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["axonométrica", "ejes"]

variables:
  datos: [["isométrica", "todos los ejes iguales"], ["dimétrica", "dos ejes iguales"], ["trimétrica", "tres ejes distintos"]]
  idx: uno_de([0,1,2])

tipo: completar
respuestas_validas:
  - "isométrica"
  - "dimétrica"
  - "trimétrica"
respuesta: datos[idx][0]

enunciado: "Si en una proyección axonométrica los tres ejes principales tienen la misma inclinación y la misma escala, estamos ante una proyección ___________."

explicacion: |
  La proyección isométrica es un caso particular de la axonométrica donde los tres ejes están a 120 grados entre sí y las escalas son idénticas.
```

### 20 — Diferencia de escala en Oblicua

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["oblicua", "escala"]

tipo: completar
respuestas_validas:
  - "1"
  - "menor que 1"
  - "mayor que 1"
respuesta: "menor que 1"

enunciado: "A diferencia de la proyección ortogonal, en la proyección oblicua (como la caballera), la escala en el eje de profundidad suele ser ___________ para evitar la distorsión visual de la profundidad."

explicacion: |
  En la proyección caballera, se aplica un coeficiente de reducción (comúnmente 2/3 o 0.5) al eje de profundidad para que el objeto no parezca deformado o excesivamente largo ante el ojo humano.
```

### 21 — Identificación de sistema de proyección

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "proyeccion"]

variables:
  datos: [["Una pieza mecánica representada con sus vistas frontal, superior y lateral sin distorsión de profundidad", "ortogonal"], ["Un dibujo de una pieza donde se ve el frente y el lateral con una profundidad inclinada", "oblicua"], ["Una representación de un objeto donde se ven tres caras con una escala de reducción constante", "axonométrica"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ortogonal", "oblicua", "axonométrica"]

enunciado: "Si un técnico dibuja una pieza mostrando sus vistas principales (alzado, planta y perfil) de forma perpendicular a los planos de proyección, ¿qué sistema está utilizando? El caso actual es: {datos[idx][0]}"

explicacion: |
  La proyección ortogonal se caracteriza por proyectar líneas perpendiculares a los planos de proyección, permitiendo obtener las vistas diédricas de un objeto sin distorsión de forma.
```

### 22 — Veracidad de la axonometría

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["verdad_falso", "axonometria"]

respuesta: verdadero
tipo: vf

enunciado: "¿En una proyección axonométrica, las dimensiones de los ejes se mantienen proporcionales entre sí, permitiendo visualizar la pieza en tres dimensiones en un solo dibujo?"

explicacion: |
  Verdadero. La axonometría permite representar un objeto tridimensional en un plano bidimensional manteniendo la proporción de los ejes (ya sea isométrica, dimétrica o trimétrica).
```

### 23 — Completar concepto de oblicua

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "terminologia"]

variables:
  datos: [["En la proyección oblicua, la cara frontal es paralela al plano y la profundidad se proyecta con un ángulo", "oblicua"], ["En la proyección ortogonal, las líneas de proyección son", "perpendiculares"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "oblicua"
  - "perpendiculares"

enunciado: "El sistema de proyección que se caracteriza por que la cara frontal no sufre distorsión pero las líneas de fuga tienen un ángulo respecto a la vertical es la proyección ___."

explicacion: |
  En la proyección oblicua, la cara frontal se mantiene paralela al plano de proyección (sin distorsión), mientras que las aristas de profundidad se dibujan con una inclinación determinada.
```

### 24 — Ordenar procesos de representación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

respuesta_orden: ["Definición de planos de proyección", "Determinación de la posición del objeto", "Trazado de líneas de proyección", "Representación de las vistas"]
tipo: ordenar
opciones_explicitas: ["Definición de planos de proyección", "Determinación de la posición del objeto", "Trazado de líneas de proyección", "Representación de las vistas"]

enunciado: "Ordene los pasos lógicos para realizar una proyección ortogonal de una pieza compleja:"

explicacion: |
  Para representar un objeto correctamente, primero se deben establecer los planos, luego posicionar el objeto respecto a ellos, trazar las líneas de visión y finalmente dibujar las vistas resultantes.
```

### 25 — Diferencias métricas (Cálculo de escala)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonometria", "isometria"]

variables:
  idx: uno_de([0,1,2])
  tipos: ["isométrica", "dimétrica", "trimétrica"]
  coeficientes: [1.0, 0.8, 0.5]
  coeficientes_texto: ["1.0", "0.8", "0.5"]

respuesta: coeficientes_texto[idx]
tipo: mc
opciones_explicitas: ["1.0", "0.8", "0.5"]

enunciado: "En una proyección {tipos[idx]}, el coeficiente de reducción de los ejes es igual a {coeficientes[idx]}. ¿Cuál es el valor del coeficiente de escala para este caso específico?"

pasos:
  - "Identificar el valor de la escala en la tabla de casos"
  - "Comparar con las opciones dadas"

explicacion: |
  En la proyección isométrica, todos los ejes tienen la misma inclinación y el coeficiente de reducción es igual a 1 (o el mismo para todos los ejes).
```
