### 1 — Identificación de la vista frontal
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["vistas", "frontal", "proyeccion"]

variables:
  escenario: uno_de([["pieza_L_derecha", "frontal_L"], ["pieza_T_izquierda", "frontal_T"], ["bloque_centro", "frontal_B"]])
  idx: uno_de([0, 1, 2])

enunciado: "Se tiene una pieza con forma de {escenario[idx][0]}. La vista que muestra el contorno principal de la pieza desde la perspectiva de mayor detalle se denomina vista ___."

respuestas_validas: ["frontal", "superior", "lateral"]

respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  En dibujo técnico, la vista frontal es la vista principal que define la forma básica del objeto.
```

### 2 — Relación de vistas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["vistas", "relacion"]

variables:
  caso: uno_de([["superior", "frontal"], ["frontal", "lateral"], ["lateral", "superior"]])

enunciado: "Si estamos proyectando un objeto y la vista que estamos dibujando es la vista {caso[0]}, la vista que se encuentra inmediatamente debajo de ella en un sistema de proyección diédrico estándar es la vista ___."

opciones_explicitas: ["frontal", "lateral", "superior"]

respuesta: caso[1]
tipo: mc

explicacion: |
  En el sistema de proyección diédrico, la vista frontal se sitúa en el plano vertical, y la vista superior se proyecta debajo de ella.
```

### 3 — Análisis de simetría
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "intermedio"
  tags: ["simetria", "vistas"]

variables:
  objeto: uno_de([["cilindro_vertical", "circular"], ["cubo_perfecto", "cuadrada"]])

enunciado: "Para un {objeto[0]}, la vista lateral y la vista frontal presentan la misma forma geométrica, la cual es ___."

opciones_explicitas: ["circular", "cuadrada", "rectangular"]

respuesta: objeto[1]
tipo: mc

explicacion: |
  Un cilindro tiene una sección transversal circular; por lo tanto, sus vistas laterales y frontales (si el eje es vertical) son rectángulos, pero si el eje es horizontal, muestran la forma circular. En este caso, se define la forma de la sección.
```

### 4 — Veracidad de proyecciones
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["verdadero", "falso"]

enunciado: "En una proyección ortogonal, la vista superior representa la planta del objeto vista desde arriba."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La vista superior (o planta) es la proyección del objeto sobre un plano horizontal situado por encima de este.
```

### 5 — Secuencia de proyección
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

variables:
  secuencia: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]

enunciado: "Ordene las vistas de un objeto estándar siguiendo el orden de lectura convencional en un plano de proyección (de arriba hacia abajo y de izquierda a derecha):"

opciones_explicitas: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]

respuesta: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]
tipo: ordenar

explicacion: |
  El orden estándar de disposición de vistas permite una lectura lógica y coherente de la geometría del objeto.
```