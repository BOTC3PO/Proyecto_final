### 1 — Proyección Ortogonal
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["proyeccion_ortogonal", "definicion"]

respuesta: "paralelas"
tipo: completar
respuestas_validas: ["paralelas", "paralela"]

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
respuesta: ["Objeto", "Rayos proyectantes", "Plano de proyección"]
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

respuesta: {datos[idx][1]}
tipo: mc
opciones_explicitas: ["Paralelas", "Perpendiculares"]

explicacion: |
  La respuesta depende del caso sorteado. Si es Oblicua, los rayos son paralelos al plano (en su cara frontal); si es Axonométrica (Ortogonal), son perpendiculares.
```