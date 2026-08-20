# Dibujo Tecnico — Perspectivas isometrica y caballera (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Isométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["definicion", "isometria"]

tipo: mc
opciones_explicitas: ["Una perspectiva donde los tres ejes tienen la misma inclinación y escala", "Una perspectiva donde un eje es paralelo al plano del papel", "Una perspectiva donde los ángulos entre ejes son de 90 grados", "Una perspectiva que utiliza puntos de fuga"]

respuesta: "Una perspectiva donde los tres ejes tienen la misma inclinación y escala"

enunciado: "La perspectiva isométrica se caracteriza principalmente por que sus ejes principales mantienen una relación de ___ entre ellos, lo que permite una representación proporcional del objeto."
```

### 2 — Ejes en Perspectiva Caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "basico"
  tags: ["ejes", "caballera"]

tipo: mc
opciones_explicitas: ["El eje de profundidad se dibuja con una inclinación de 45°", "El eje de profundidad se dibuja paralelo al plano del papel", "El eje de profundidad se dibuja con una inclinación de 30°", "Los tres ejes forman ángulos de 120° entre sí"]

respuesta: "El eje de profundidad se dibuja con una inclinación de 45°"

enunciado: "En la perspectiva caballera, ¿cómo se representa típicamente el eje de profundidad (eje Z) para dar sensación de tridimensionalidad?"
```

### 3 — Verdad o Falso: Escala en Caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "basico"
  tags: ["escala", "caballera"]

tipo: vf

respuesta: falso

enunciado: "En la perspectiva caballera, para evitar la distorsión visual, se suele aplicar una reducción de escala (coeficiente de reducción) al eje de profundidad."
```

### 4 — Componentes de la Proyección

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_generales"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: completar
respuestas_validas:
  - "ejes"
  - "planos"

respuesta: "ejes"

enunciado: "Para representar un objeto tridimensional en un plano bidimensional, las perspectivas utilizan ___ principales que definen la dirección de las aristas."
```

### 5 — Orden de construcción de una perspectiva

```
metadata:
  materia: "dibujo-tecnico"
  tema: "proceso_dibujo"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Trazar el eje vertical", "Definir los ejes de profundidad con la inclinación correspondiente", "Dibujar las caras frontales y laterales según la escala", "Unir los puntos para cerrar el volumen"]

respuesta_orden: ["Trazar el eje vertical", "Definir los ejes de profundidad con la inclinación correspondiente", "Dibujar las caras frontales y laterales según la escala", "Unir los puntos para cerrar el volumen"]

enunciado: "Ordene los pasos lógicos para construir un objeto en perspectiva (isométrica o caballera) partiendo desde el esqueleto básico:"
```

### 6 — Ejes en perspectiva isométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["ejes", "isometria", "proyeccion"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) forman ángulos de ___ grados entre sí en el plano de proyección."

respuestas_validas:
  - "120"
tipo: completar

explicacion: |
  En la perspectiva isométrica, la escala es la misma en todas las direcciones y los ejes están separados por un ángulo de 120°, lo que permite una representación equilibrada de la profundidad.
```

### 7 — Ángulo de la línea de fuga en caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_caballeras"
  nivel: "basico"
  tags: ["caballera", "ejes", "profundidad"]

variables:
  idx: uno_de([0, 1, 2])
  angulos: [45, 30, 60]
  angulos_texto: ["45°", "30°", "60°"]
  angulo_fuga: angulos[idx]

opciones_explicitas: ["45°", "30°", "60°", "90°"]
respuesta: angulos_texto[idx]
tipo: mc

enunciado: "En la perspectiva caballera, mientras que el eje vertical y el horizontal se mantienen perpendiculares, el eje de profundidad (eje de fuga) se suele representar con un ángulo de {angulo_fuga}° para facilitar el dibujo manual."

explicacion: |
  La perspectiva caballera mantiene la ortogonalidad de los ejes frontal y vertical, pero utiliza un ángulo de fuga (comúnmente 45°) para representar la profundidad, aplicando usualmente un coeficiente de reducción en ese eje.
```

### 8 — Veracidad de la escala en isometría

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "intermedio"
  tags: ["escala", "isometria", "proyeccion"]

enunciado: "¿Es cierto que en una perspectiva isométrica las medidas en todos los ejes se representan a escala real (1:1) sin necesidad de coeficientes de reducción?"

respuesta: verdadero
tipo: vf

explicacion: |
  A diferencia de la perspectiva caballera, la isométrica busca que la deformación sea nula en los tres ejes, por lo que las medidas se mantienen constantes en las tres direcciones principales.
```

### 9 — Proceso de dibujo de un cubo en perspectiva

```
metadata:
  materia: "dibujo-tecnico"
  tema: "proceso_dibujo"
  nivel: "intermedio"
  tags: ["pasos", "dibujo", "isometria"]

opciones_explicitas: ["Dibujar la cara frontal", "Trazar las líneas de fuga", "Dibujar la cara posterior"]
respuesta_orden: ["Dibujar la cara frontal", "Trazar las líneas de fuga", "Dibujar la cara posterior"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para construir un cubo en perspectiva isométrica partiendo de una cara frontal:"

pasos:
  - "Dibujar el rectángulo que representa la cara frontal."
  - "Trazar líneas paralelas a los ejes isométricos desde cada vértice hacia la profundidad."
  - "Unir los vértices traseros para cerrar la cara posterior."

explicacion: |
  El proceso correcto implica establecer primero la base frontal, proyectar la profundidad mediante líneas paralelas y finalmente cerrar el volumen uniendo los puntos de fuga.
```

### 10 — Diferencia de profundidad (Caballera vs Isométrica)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "comparativa_perspectivas"
  nivel: "avanzado"
  tags: ["comparativa", "escala", "profundidad"]

variables:
  idx: uno_de([0, 1])
  escenarios: ["caballera", "isometria"]
  respuestas: ["Se aplica reducción en profundidad", "No se aplica reducción en profundidad"]
  escenario: escenarios[idx]

opciones_explicitas: ["Se aplica reducción en profundidad", "No se aplica reducción en profundidad"]
respuesta: respuestas[idx]
tipo: mc

enunciado: "En el caso de la perspectiva {escenario}, la representación de la profundidad se caracteriza por: ___"

explicacion: |
  En la perspectiva caballera, para evitar el efecto de distorsión visual, se suele aplicar un coeficiente de reducción (como 0.5) en el eje de fuga. En la isométrica, la escala es constante en los tres ejes.
```

### 11 — Ángulos en la perspectiva isométrica

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "basico"
  tags: ["isometria", "angulos", "proyeccion"]

respuesta: "120"
tipo: completar
respuestas_validas:
  - "120"

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) se encuentran entre sí formando ángulos de ___ grados."

explicacion: |
  En la perspectiva isométrica, los ejes están separados por ángulos iguales de 120°, lo que permite que la escala sea la misma en las tres direcciones.
```

### 12 — Distorsión en la perspectiva caballera

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "intermedio"
  tags: ["caballera", "distorsion", "escala"]

respuesta: verdadero
tipo: vf
enunciado: "En la perspectiva caballera, si el eje de profundidad (eje Z) se dibuja con una escala de reducción (por ejemplo, 0.5), la representación de la profundidad será más realista que si se usa escala 1:1."

explicacion: |
  Verdadero. Debido a la distorsión visual de la perspectiva caballera, las medidas en el eje de profundidad deben reducirse para que el objeto no parezca deformado o "alargado" ante el ojo humano.
```

### 13 — Diferencia fundamental de ejes

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "basico"
  tags: ["isometria", "caballera", "ejes"]

respuesta: "Perspectiva Isométrica"
tipo: mc
opciones_explicitas: ["Perspectiva Isométrica", "Perspectiva Caballera", "Perspectiva de Punto de Fuga"]

enunciado: "Si un dibujo técnico presenta los ejes principales con ángulos de 120° entre sí y no utiliza puntos de fuga, estamos ante una: ___"

explicacion: |
  La perspectiva isométrica se caracteriza por la igualdad de ángulos entre los ejes principales (120°) y la ausencia de puntos de fuga, manteniendo la proporción en los tres ejes.
```

### 14 — Pasos para construir una perspectiva caballera

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "intermedio"
  tags: ["procedimiento", "caballera"]

respuesta_orden: ["Trazar ejes principales", "Aplicar ángulo de inclinación", "Aplicar factor de reducción"]
tipo: ordenar
opciones_explicitas: ["Trazar ejes principales", "Aplicar ángulo de inclinación", "Aplicar factor de reducción"]

enunciado: "Ordena los pasos lógicos para representar una arista en el eje de profundidad de una perspectiva caballera:"

explicacion: |
  Primero se definen los ejes, luego se establece el ángulo de inclinación (comúnmente 45°) y finalmente se aplica el coeficiente de reducción para compensar la distorsión visual.
```

### 15 — El error de la escala en Isométrica

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "avanzado"
  tags: ["isometria", "escala", "error"]

respuesta: "falso"
tipo: completar
enunciado: "Es un error común pensar que en la perspectiva isométrica se debe aplicar un coeficiente de reducción en los tres ejes para que el objeto se vea natural."

explicacion: |
  Falso. En la isométrica, la escala es 1:1 en los tres ejes (isométrica significa "igual medida"). El coeficiente de reducción es exclusivo de la perspectiva caballera.
```

### 16 — Diferencia de ejes en isométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["isométrica", "ejes"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) forman ángulos de ___ grados entre sí, lo que permite una representación proporcional de las tres dimensiones."

respuestas_validas:
  - "120"
tipo: completar

explicacion: |
  En la perspectiva isométrica, los ejes están separados por 120°, lo que garantiza que la escala sea la misma en las tres direcciones principales.
```

### 17 — Profundidad en perspectiva caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_caballeras"
  nivel: "basico"
  tags: ["caballera", "profundidad"]

enunciado: "En la perspectiva caballera, la profundidad se representa mediante un eje inclinado. ¿Es la escala de este eje de profundidad igual a 1:1 en un dibujo técnico estándar?"

respuesta: falso
tipo: vf

explicacion: |
  En la perspectiva caballera, para evitar la distorsión visual, se suele aplicar un coeficiente de reducción (como 0.5) al eje de profundidad.
```

### 18 — Comparación de ejes: Isométrica vs Caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "comparativa_perspectivas"
  nivel: "intermedio"
  tags: ["isométrica", "caballera"]

enunciado: "Selecciona la afirmación que describe correctamente la diferencia principal entre la perspectiva isométrica y la caballera respecto a sus ejes de profundidad."

opciones_explicitas: ["La isométrica usa ejes a 120° y la caballera usa ejes a 45° o 60°.", "La isométrica es una perspectiva oblicua y la caballera es axonométrica.", "La isométrica no tiene profundidad y la caballera sí.", "Ambas usan ejes a 90° pero con diferentes escalas."]
respuesta: "La isométrica usa ejes a 120° y la caballera usa ejes a 45° o 60°."
tipo: mc

explicacion: |
  La isométrica es una perspectiva axonométrica donde todos los ejes tienen la misma importancia y ángulos iguales, mientras que la caballera es oblicua y utiliza un eje de profundidad inclinado.
```

### 19 — Proyección de caras en isométrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "isométrica"
  nivel: "intermedio"
  tags: ["isométrica", "caras"]

enunciado: "En una perspectiva isométrica, las caras de un cubo que son paralelas a los planos de proyección se ven como:"

opciones_explicitas: ["Trapecios", "Paralelogramos", "Rectángulos", "Triángulos"]
respuesta: "Paralelogramos"
tipo: mc

explicacion: |
  Debido a la inclinación de los ejes a 30° respecto a la horizontal, las caras de los objetos se proyectan como paralelogramos en el plano.
```

### 20 — Orden de construcción de un objeto en caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "procedimiento_caballera"
  nivel: "intermedio"
  tags: ["pasos", "caballera"]

enunciado: "Ordena los pasos lógicos para dibujar un prisma rectangular en perspectiva caballera:"

opciones_explicitas: ["Dibujar la cara frontal", "Dibujar las líneas de profundidad inclinadas", "Dibujar las líneas de cierre de la cara posterior", "Unir los puntos para completar el objeto"]
respuesta_orden: ["Dibujar la cara frontal", "Dibujar las líneas de profundidad inclinadas", "Dibujar las líneas de cierre de la cara posterior", "Unir los puntos para completar el objeto"]
tipo: ordenar

explicacion: |
  Primero se establece la base (cara frontal), luego se proyecta la profundidad (eje inclinado) y finalmente se cierran las caras laterales y posteriores.
```

### 21 — Identificación de ejes isométricos

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "basico"
  tags: ["ejes", "isometria", "angulos"]

variables:
  datos: [["30 grados", "30 grados"], ["45 grados", "45 grados"], ["60 grados", "60 grados"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una proyección isométrica, los ejes principales (X, Y, Z) forman un ángulo de ___ entre sí respecto a la horizontal para representar la profundidad de forma equilibrada."

respuestas_validas:
  - datos[idx][0]
respuesta: datos[idx][0]
tipo: completar
tolerancia_abs: 0

explicacion: |
  En la perspectiva isométrica, los tres ejes principales se disponen con un ángulo de 120° entre sí. Esto se traduce en el plano de dibujo como ángulos de 30° respecto a la línea de horizonte.
```

### 22 — Profundidad en perspectiva caballera

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "intermedio"
  tags: ["profundidad", "reduccion", "caballera"]

variables:
  datos: [["45 grados", "0.5"], ["60 grados", "0.5"], ["30 grados", "0.5"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una perspectiva caballera, la profundidad se representa en el eje de fuga. Si el ángulo de inclinación es de {datos[idx][0]}, se suele aplicar un coeficiente de reducción de ___ para evitar la distorsión visual."

opciones_explicitas: ["0.5", "0.7", "1.0", "1.5"]
respuesta: "0.5"
tipo: mc

explicacion: |
  En la perspectiva caballera, el eje de profundidad se inclina (comúnmente 45°) y se aplica un coeficiente de reducción (típicamente 0.5) para compensar la distorsión óptica que hace que las líneas paralelas parezcan más largas de lo que son.
```

### 23 — Diferencia de representación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "basico"
  tags: ["proyeccion", "isometria"]

variables:
  datos: [["isométrica", "isométrica"], ["caballera", "caballera"]]
  idx: uno_de([0, 1])

enunciado: "En una perspectiva de tipo {datos[idx][0]}, las dimensiones en los tres ejes principales se mantienen en la misma escala, lo que permite medir directamente sobre el dibujo."

respuesta: verdadero
tipo: vf

explicacion: |
  La perspectiva isométrica es una proyección ortogonal donde la escala es constante en los tres ejes, a diferencia de la caballera que requiere reducción en el eje de fuga.
```

### 24 — Secuencia de construcción (Caballera)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Dibujar la cara frontal", "Trazar el eje de fuga inclinado", "Aplicar reducción en la profundidad", "Dibujar las caras laterales"]
respuesta_orden: ["Dibujar la cara frontal", "Trazar el eje de fuga inclinado", "Aplicar reducción en la profundidad", "Dibujar las caras laterales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para construir un cubo en perspectiva caballera partiendo desde el plano frontal:"

explicacion: |
  Primero se define la cara frontal (verdadera magnitud), luego se establece la inclinación del eje de fuga (eje Z), se aplica el coeficiente de reducción y finalmente se cierran las caras laterales.
```

### 25 — Comparación de ejes

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "avanzado"
  tags: ["angulos", "isometria"]

variables:
  datos: [["120", "120"], ["90", "90"], ["60", "60"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la proyección isométrica, el ángulo real que existe entre los ejes X, Y y Z en el espacio tridimensional es de {datos[idx][0]} grados."

respuestas_validas:
  - "120"
respuesta: "120"
tipo: completar
tolerancia_abs: 0

explicacion: |
  La palabra 'isométrica' proviene del griego: 'iso' (igual) y 'metría' (medida). Los ejes están separados uniformemente por 120 grados en el espacio.
```
