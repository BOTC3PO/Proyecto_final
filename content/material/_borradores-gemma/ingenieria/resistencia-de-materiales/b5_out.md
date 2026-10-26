### 1 — Tensión en un cable de soporte
```
metadata:
  materia: "ingenieria"
  tema: "tension_axial"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "ingenieria"]

variables:
  datos: [[5000, 0.01], [8000, 0.02], [12000, 0.015]]
  idx: uno_de([0, 1, 2])
  fuerza: datos[idx][0]
  area: datos[idx][1]
  esfuerzo: fuerza / area

respuesta: esfuerzo
tipo: input
tolerancia_abs: 0.1

enunciado: "Un cable de acero soporta una carga axial de {fuerza} N. Si su sección transversal es de {area} m², ¿cuál es el esfuerzo axial (tensión) en Pa?"

explicacion: |
  El esfuerzo axial ($\sigma$) se calcula como la fuerza aplicada dividida por el área de la sección transversal: $\sigma = F / A$.
```

### 2 — Compresión en un pilar
```
metadata:
  materia: "ingenieria"
  tema: "compresion_axial"
  nivel: "basico"
  tags: ["compresion", "esfuerzo"]

variables:
  escenario: [[15000, "compresion"], [20000, "compresion"]]
  idx: uno_de([0, 1])
  fuerza: escenario[idx][0]
  tipo_esfuerzo: escenario[idx][1]

respuesta: tipo_esfuerzo
tipo: mc
opciones_explicitas: ["tension", "compresion", "cizalladura"]

enunciado: "Si una carga de {fuerza} N actúa sobre un pilar reduciendo su longitud, el tipo de esfuerzo predominante es..."

explicacion: |
  Cuando las fuerzas actúan hacia el interior del cuerpo, tendiendo a acortarlo, el esfuerzo se denomina compresión.
```

### 3 — Rigidez del triángulo
```
metadata:
  materia: "ingenieria"
  tema: "geometria_estructural"
  nivel: "intermedio"
  tags: ["triangulo", "rigidez", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el triángulo una forma geométrica intrínsecamente rígida, ya que sus tres lados definen una única forma sin necesidad de uniones articuladas para mantener su geometría?"

explicacion: |
  A diferencia de un cuadrilátero, que puede deformarse en un paralelogramo manteniendo la longitud de sus lados, un triángulo es rígido porque sus ángulos están fijados por la longitud de sus lados.
```

### 4 — Componentes de la estructura
```
metadata:
  materia: "ingenieria"
  tema: "geometria_estructural"
  nivel: "basico"
  tags: ["triangulo", "elementos"]

respuesta: ["Vértice", "Vértice", "Vértice"]
tipo: ordenar
opciones_explicitas: ["Vértice", "Vértice", "Vértice"]

enunciado: "Ordene los elementos de un triángulo según su jerarquía de construcción (puntos de unión, líneas de conexión, espacio interno):"

pasos:
  - "Identificar los puntos de unión (nodos)."
  - "Identificar las líneas que los unen (barras)."
  - "Identificar el área encerrada (superficie)."

explicacion: |
  En el análisis de estructuras tipo truss (celosías), primero definimos los nodos (vértices), luego los elementos (barras) y finalmente el área resultante.
```

### 5 — Análisis de deformación
```
metadata:
  materia: "ingenieria"
  tema: "deformacion_axial"
  nivel: "intermedio"
  tags: ["deformacion", "ley_de_hooke"]

variables:
  casos: [[0.005, "elongacion"], [0.002, "elongacion"]]
  idx: uno_de([0, 1])
  deformacion: casos[idx][0]
  tipo_deformacion: casos[idx][1]

respuesta: tabla_deformacion[idx][1]
tipo: completar

variables_extra:
  tabla_deformacion: [["0.005", "elongacion"], ["0.002", "elongacion"]]

respuestas_validas: ["elongacion"]

enunciado: "Si un material experimenta una deformación unitaria de {deformacion}, el fenómeno físico observado es una ___."

explicacion: |
  La deformación unitaria ($\epsilon$) positiva indica un aumento en la longitud del elemento, lo que se conoce como elongación.
```