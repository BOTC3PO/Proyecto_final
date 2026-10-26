### 1 — Proyección Ortogonal vs Axonométrica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["proyeccion_ortogonal", "axonometria"]

respuesta: "proyeccion_ortogonal"
tipo: mc

opciones_explicitas: ["proyeccion_ortogonal", "proyeccion_axonometrica", "proyeccion_oblicua"]

enunciado: "La principal diferencia es que en la {uno_de(['proyeccion_ortogonal', 'proyeccion_axonometrica', 'proyeccion_oblicua'])} las líneas de proyección son paralelas a un eje perpendicular al plano de proyección, mientras que en la axonometría se representan las tres dimensiones en un solo plano."

explicacion: |
  La proyección ortogonal se caracteriza por tener rayos proyectantes perpendiculares al plano de proyección, lo que permite representar las caras de un objeto sin distorsión de escala en sus caras principales.
```

### 2 — La escala en la proyección oblicua
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "escala"]

respuesta: "falso"
tipo: vf

enunciado: "En una proyección oblicua, las dimensiones de la cara frontal (la que es paralela al plano de proyección) se ven distorsionadas por un ángulo de inclinación, a diferencia de la proyección ortogonal."

explicacion: |
  Falso. En la proyección oblicua, la cara frontal se proyecta sin distorsión (escala real), mientras que las caras laterales o profundas son las que sufren la distorsión debido al ángulo de inclinación.
```

### 3 — Componentes de la Axonometría
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

respuestas_validas: ["dimensión igual", "dos dimensiones iguales", "tres dimensiones distintas"]

enunciado: "En la proyección axonometría de tipo {datos[idx][0]}, las tres escalas de las dimensiones en los ejes principales son la misma, lo que implica que la {datos[idx][1]}."

explicacion: |
  En la isometría, los tres ejes están a la misma distancia del observador, por lo que no hay deformación de escala entre ellos.
```

### 4 — Orden de complejidad de representación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["jerarquia", "sistemas"]

opciones_explicitas: ["proyeccion_ortogonal", "proyeccion_oblicua", "proyeccion_axonometrica"]
respuesta: ["proyeccion_ortogonal", "proyeccion_oblicua", "proyeccion_axonometrica"]
tipo: ordenar

enunciado: "Ordena estos sistemas de proyección desde el que ofrece la representación más técnica y precisa (bidimensional) hasta el que ofrece la representación más visual y tridimensional."

explicacion: |
  La ortogonal es la base del dibujo técnico para fabricación; la oblicua es un paso intermedio y la axonometría busca la visión espacial rápida.
```

### 5 — El error de la escala en axonometría
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonometria", "error_comun"]

respuesta: 0.7
tipo: input
tolerancia_abs: 0.01

enunciado: "Si en una proyección oblicua la cara frontal tiene una escala de 1:1, pero la profundidad se proyecta con un coeficiente de reducción de 0.7 para compensar la inclinación, ¿cuál es el valor del coeficiente de reducción?"

explicacion: |
  El coeficiente de reducción es el factor por el cual se multiplican las medidas de la profundidad para compensar la perspectiva visual en la proyección oblicua.
```