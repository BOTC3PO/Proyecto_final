### 1 — Identificación de la vista principal
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

enunciado: "En un sistema de proyección ortogonal, la vista que muestra el objeto de frente y que se utiliza como referencia para ubicar las demás vistas se denomina vista ___."

respuestas_validas: ["frontal", "alzada", "principal"]
tipo: completar

explicacion: |
  La vista frontal (también llamada alzada) es la vista principal que define la orientación del objeto y sirve de base para proyectar la vista superior (planta) y las vistas laterales.
```

### 2 — Relación de vistas (Caso: Cubo)
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["cubo", "vistas"]

variables:
  escenario: uno_de([
    ["frontal", "superior", "lateral"],
    ["cuadrado", "cuadrado", "cuadrado"],
    ["visto de frente", "visto desde arriba", "visto de costado"]
  ])

enunciado: "Si tenemos un cubo perfecto, la vista {escenario[2]} será un ___ que representa la cara ___."

opciones_explicitas: ["cuadrado", "triángulo", "rectángulo"]
tipo: mc

respuesta: "cuadrado"

explicacion: |
  Dado que un cubo tiene todas sus caras iguales y perpendiculares entre sí, cualquier vista ortogonal (frontal, superior o lateral) resultará en la proyección de un cuadrado.
```

### 3 — Verdad o Falso: Proyección y Dimensión
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["proyeccion", "dimensiones"]

enunciado: "¿Es correcto afirmar que la vista lateral de un objeto tridimensional es una representación bidimensional (2D) del mismo?"

tipo: vf

respuesta: verdadero

explicacion: |
  Correcto. Las vistas ortogonales son proyecciones bidimensionales que representan una de las caras del objeto, eliminando la profundidad para facilitar la medición y fabricación.
```

### 4 — Ordenar proceso de trazado
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "intermedio"
  tags: ["metodo", "trazado"]

opciones_explicitas: ["Dibujar la vista frontal", "Proyectar líneas auxiliares", "Dibujar la vista superior", "Dibujar la vista lateral"]
tipo: ordenar

respuesta: ["Dibujar la vista frontal", "Proyectar líneas auxiliares", "Dibujar la vista superior", "Dibujar la vista lateral"]

explicacion: |
  El método estándar consiste en establecer primero la vista principal (frontal), luego trazar líneas de proyección (auxiliares) hacia arriba para la planta (superior) y hacia los lados para las laterales, asegurando la correspondencia de dimensiones.
```

### 5 — Cálculo de dimensiones en vistas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "intermedio"
  tags: ["dimensiones", "proyeccion"]

variables:
  objeto: uno_de([
    [10, 5, 2, 20],
    [15, 8, 3, 30],
    [12, 6, 4, 25]
  ])

enunciado: "Un prisma rectangular tiene las siguientes dimensiones: Largo = {objeto[0]}mm, Ancho = {objeto[1]}mm y Alto = {objeto[2]}mm. Si la vista superior muestra el largo y el ancho, ¿cuál es el área de dicha vista?"

tipo: input
respuesta: 50
tolerancia_abs: 0.1

pasos:
  - "Identificar las dimensiones de la vista superior (Largo y Ancho)."
  - "Multiplicar Largo por Ancho: {objeto[0]} * {objeto[1]}."

explicacion: |
  La vista superior representa la planta del objeto. En este caso, el área es el producto del largo por el ancho: {objeto[0]} * {objeto[1]} = {objeto[0]*objeto[1]}.
```