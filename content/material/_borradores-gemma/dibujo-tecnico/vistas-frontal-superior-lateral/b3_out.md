### 1 — Proyección ortogonal y la vista frontal
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["proyeccion", "vistas"]

respuesta: "frontal"
tipo: mc
opciones_explicitas: ["frontal", "superior", "lateral", "isométrica"]

enunciado: "En el sistema de proyección diédrico, la vista que se elige como principal para definir la orientación y escala del objeto se denomina vista ___."

explicacion: |
  La vista frontal (o alzado) es la vista principal de un objeto; de ella dependen la ubicación y dimensiones de las demás vistas (superior y lateral).
```

### 2 — Relación espacial entre vistas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["relacion_vistas", "proyeccion"]

variables:
  idx: uno_de([0, 1])
  escenario: [["superior", "lateral"], ["lateral", "superior"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["superior", "lateral"]

enunciado: "Si estamos trabajando en el sistema de proyección europeo (ISO E), la vista {escenario[idx][0]} se sitúa debajo de la vista frontal, mientras que la vista {escenario[idx][1]} se sitúa a su derecha."

explicacion: |
  En el sistema europeo, la vista superior se proyecta debajo de la frontal, y la lateral izquierda se proyecta a la derecha de la frontal (y viceversa en el sistema americano).
```

### 3 — El error de la escala en vistas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["escala", "error_comun"]

respuesta: falso
tipo: vf

enunciado: "En un conjunto de vistas ortogonales de una misma pieza, la escala de la vista lateral debe ser diferente a la escala de la vista frontal si el objeto es asimétrico."

explicacion: |
  Falso. Todas las vistas de un mismo objeto deben mantener la misma escala para permitir la interpretación correcta de las dimensiones y proporciones.
```

### 4 — Secuencia de proyección
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

respuesta: ["frontal", "superior", "lateral"]
tipo: ordenar
opciones_explicitas: ["frontal", "superior", "lateral"]

enunciado: "Ordena las vistas de un objeto siguiendo el orden estándar de lectura de un plano técnico (de arriba hacia abajo y de izquierda a derecha en el sistema europeo):"

pasos:
  - "Identificar la cara principal (alzado)"
  - "Proyectar la cara de arriba (planta)"
  - "Proyectar la cara de perfil (perfil)"

explicacion: |
  El orden estándar permite una lectura lógica de la geometría del objeto, partiendo de la vista principal.
```

### 5 — Coincidencia de dimensiones
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["dimensiones", "coincidencia"]

variables:
  dim_x: 50
  dim_y: 30

respuesta: dim_x
tipo: completar
respuestas_validas: [50, "50"]

enunciado: "Si la vista frontal de un cubo tiene una base que mide {dim_x} mm de ancho, la vista superior debe tener obligatoriamente un ancho de ___ mm para mantener la coherencia geométrica."

explicacion: |
  La dimensión de ancho en la vista frontal debe coincidir exactamente con la dimensión de ancho en la vista superior, ya que representan la misma arista del objeto.
```