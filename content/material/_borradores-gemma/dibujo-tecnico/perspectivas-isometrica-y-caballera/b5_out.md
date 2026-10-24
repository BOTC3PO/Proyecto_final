### 1 — Identificación de ejes isométricos
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "basico"
  tags: ["ejes", "isometria", "angulos"]

variables:
  escenario: uno_de([["30 grados", "30 grados"], ["45 grados", "45 grados"], ["60 grados", "60 grados"]])
  idx: uno_de([0, 1, 2])

enunciado: "En una proyección isométrica, los ejes principales (X, Y, Z) forman un ángulo de ___ entre sí respecto a la horizontal para representar la profundidad de forma equilibrada."

respuestas_validas: ["30 grados"]
tipo: completar

explicacion: |
  En la perspectiva isométrica, los tres ejes principales se disponen con un ángulo de 120° entre sí. Esto se traduce en el plano de dibujo como ángulos de 30° respecto a la línea de horizonte.
```

### 2 — Profundidad en perspectiva caballera
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "intermedio"
  tags: ["profundidad", "reduccion", "caballera"]

variables:
  config: uno_de([["45 grados", "0.5"], ["60 grados", "0.5"], ["30 grados", "0.5"]])
  idx: uno_de([0, 1, 2])

enunciado: "En una perspectiva caballera, la profundidad se representa en el eje de fuga. Si el ángulo de inclinación es de {config[idx][0]}, se suele aplicar un coeficiente de reducción de ___ para evitar la distorsión visual."

opciones_explicitas: ["0.5", "0.7", "1.0", "1.5"]
respuesta: "0.5"
tipo: mc

explicacion: |
  En la perspectiva caballera, el eje de profundidad se inclina (comúnmente 45°) y se aplica un coeficiente de reducción (típicamente 0.5) para compensar la distorsión óptica que hace que las líneas paralelas parezcan más largas de lo que son.
```

### 3 — Diferencia de representación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "basico"
  tags: ["proyeccion", "isometria"]

variables:
  caso: uno_de([["isométrica", "isométrica"], ["caballera", "caballera"]])
  idx: uno_de([0, 1])

enunciado: "En una perspectiva de tipo {caso[idx][0]}, las dimensiones en los tres ejes principales se mantienen en la misma escala, lo que permite medir directamente sobre el dibujo."

respuesta: verdadero
tipo: vf

explicacion: |
  La perspectiva isométrica es una proyección ortogonal donde la escala es constante en los tres ejes, a diferencia de la caballera que requiere reducción en el eje de fuga.
```

### 4 — Secuencia de construcción (Caballera)
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Dibujar la cara frontal", "Trazar el eje de fuga inclinado", "Aplicar reducción en la profundidad", "Dibujar las caras laterales"]
respuesta: ["Dibujar la cara frontal", "Trazar el eje de fuga inclinado", "Aplicar reducción en la profundidad", "Dibujar las caras laterales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para construir un cubo en perspectiva caballera partiendo desde el plano frontal:"

explicacion: |
  Primero se define la cara frontal (verdadera magnitud), luego se establece la inclinación del eje de fuga (eje Z), se aplica el coeficiente de reducción y finalmente se cierran las caras laterales.
```

### 5 — Comparación de ejes
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "avanzado"
  tags: ["angulos", "isometria"]

variables:
  val: uno_de([["120", "120"], ["90", "90"], ["60", "60"]])
  idx: uno_de([0, 1, 2])

enunciado: "En la proyección isométrica, el ángulo real que existe entre los ejes X, Y y Z en el espacio tridimensional es de {val[idx][0]} grados."

respuesta: "120"
tipo: input
tolerancia_abs: 0

explicacion: |
  La palabra 'isométrica' proviene del griego: 'iso' (igual) y 'metría' (medida). Los ejes están separados uniformemente por 120 grados en el espacio.
```