### 1 — Definición de Escala
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "escala"
tipo: completar
respuestas_validas: ["escala"]

enunciado: "La relación matemática entre las dimensiones de un objeto representado en un plano y las dimensiones reales del objeto se denomina ___."

explicacion: |
  La escala es la razón de proporción que permite representar objetos de gran tamaño o muy pequeños en un formato manejable.
```

### 2 — Escala de Reducción
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["reduccion", "conceptos"]

variables:
  escenario: uno_de([["1:50", "reducción"], ["2:1", "ampliación"], ["1:1", "natural"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reducción", "ampliación", "natural"]

enunciado: "Si un dibujo tiene una escala de {escenario[0]}, esto significa que estamos ante una escala de ___."

explicacion: |
  En una escala de reducción (ej. 1:50), el dibujo es más pequeño que el objeto real. En una de ampliación (ej. 2:1), el dibujo es más grande.
```

### 3 — Representación de Escala Natural
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala_natural", "verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que una escala 1:1 representa un objeto en su tamaño real, sin aumentarlo ni reducirlo?"

explicacion: |
  Verdadero. La escala 1:1 se conoce como escala natural, donde las dimensiones del dibujo coinciden con las del objeto real.
```

### 4 — Componentes de la Escala
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["notacion", "escala_numerica"]

respuesta: "1:5"
tipo: completar
respuestas_validas: ["1:5"]

enunciado: "En la notación de escala numérica 1:5, el primer número representa la medida en el ___ y el segundo número la medida en la realidad."

pasos:
  - "Identificar que el primer término es la dimensión del dibujo."
  - "Identificar que el segundo término es la dimensión real."

explicacion: |
  En la escala 1:5, una unidad en el papel equivale a 5 unidades en la realidad.
```

### 5 — Orden de los procesos de escalado
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta: ["Medir objeto real", "Aplicar factor de escala", "Dibujar en papel"]
tipo: ordenar
opciones_explicitas: ["Dibujar en papel", "Medir objeto real", "Aplicar factor de escala"]

enunciado: "Ordena los pasos lógicos para representar un objeto real mediante una escala de reducción:"

explicacion: |
  Primero se obtiene la medida real, luego se calcula la dimensión correspondiente usando la escala y finalmente se traza el dibujo.
```