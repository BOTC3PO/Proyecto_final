### 1 — Ejes en perspectiva isométrica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["ejes", "isometria", "proyeccion"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) forman ángulos de ___ grados entre sí en el plano de proyección."

respuestas_validas: ["120"]
tipo: completar

explicacion: |
  En la perspectiva isométrica, la escala es la misma en todas las direcciones y los ejes están separados por un ángulo de 120°, lo que permite una representación equilibrada de la profundidad.
```

### 2 — Ángulo de la línea de fuga en caballera
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_caballeras"
  nivel: "basico"
  tags: ["caballera", "ejes", "profundidad"]

variables:
  angulo_fuga: uno_de([45, 30, 60])

opciones_explicitas: ["45°", "30°", "60°", "90°"]
respuesta: ["45°"][angulo_fuga == 45] + ["30°"][angulo_fuga == 30] + ["60°"][angulo_fuga == 60]
tipo: mc

enunciado: "En la perspectiva caballera, mientras que el eje vertical y el horizontal se mantienen perpendiculares, el eje de profundidad (eje de fuga) se suele representar con un ángulo de {angulo_fuga}° para facilitar el dibujo manual."

explicacion: |
  La perspectiva caballera mantiene la ortogonalidad de los ejes frontal y vertical, pero utiliza un ángulo de fuga (comúnmente 45°) para representar la profundidad, aplicando usualmente un coeficiente de reducción en ese eje.
```

### 3 — Veracidad de la escala en isometría
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

### 4 — Proceso de dibujo de un cubo en perspectiva
```
metadata:
  materia: "dibujo-tecnico"
  tema: "proceso_dibujo"
  nivel: "intermedio"
  tags: ["pasos", "dibujo", "isometria"]

opciones_explicitas: ["Dibujar la cara frontal", "Trazar las líneas de fuga", "Dibujar la cara posterior"]
respuesta: ["Dibujar la cara frontal", "Trazar las líneas de fuga", "Dibujar la cara posterior"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para construir un cubo en perspectiva isométrica partiendo de una cara frontal:"

pasos:
  - "Dibujar el rectángulo que representa la cara frontal."
  - "Trazar líneas paralelas a los ejes isométricos desde cada vértice hacia la profundidad."
  - "Unir los vértices traseros para cerrar la cara posterior."

explicacion: |
  El proceso correcto implica establecer primero la base frontal, proyectar la profundidad mediante líneas paralelas y finalmente cerrar el volumen uniendo los puntos de fuga.
```

### 5 — Diferencia de profundidad (Caballera vs Isométrica)
```
metadata:
  materia: "dibujo-tecnico"
  tema: "comparativa_perspectivas"
  nivel: "avanzado"
  tags: ["comparativa", "escala", "profundidad"]

variables:
  escenario: uno_de(["caballera", "isometria"])

opciones_explicitas: ["Se aplica reducción en profundidad", "No se aplica reducción en profundidad"]
respuesta: ["Se aplica reducción en profundidad"][escenario == "caballera"] + ["No se aplica reducción en profundidad"][escenario == "isometria"]
tipo: mc

enunciado: "En el caso de la perspectiva {escenario}, la representación de la profundidad se caracteriza por: ___"

explicacion: |
  En la perspectiva caballera, para evitar el efecto de distorsión visual, se suele aplicar un coeficiente de reducción (como 0.5) en el eje de fuga. En la isométrica, la escala es constante en los tres ejes.
```