### 1 — Identificación de la vista principal
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: mc
opciones_explicitas: ["Vista Lateral", "Vista Superior", "Vista Frontal", "Vista Posterior"]

enunciado: "La vista que se obtiene al observar el objeto de frente y que representa su mayor detalle o forma principal se denomina vista ___."

respuesta: "Vista Frontal"

explicacion: |
  La vista frontal es la proyección principal de un objeto, elegida generalmente por ser la que contiene más información relevante para su representación.
```

### 2 — Verdadero o Falso: Orientación de la vista superior
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: vf

enunciado: "En el sistema de proyección ortogonal, la vista superior representa la cara del objeto que se encuentra en la parte más alta respecto al plano de proyección horizontal."

respuesta: falso

explicacion: |
  La vista superior representa la cara del objeto que se ve desde arriba (plano horizontal), no la cara más alta, sino la proyección de la parte superior sobre el plano.
```

### 3 — Completar: Terminología de las vistas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

variables:
  escenario: uno_de([["izquierda", "derecha"], ["frontal", "posterior"], ["superior", "inferior"]])

tipo: completar
respuestas_validas: ["izquierda", "derecha", "frontal", "posterior", "superior", "inferior"]

enunciado: "Si el objeto se observa desde un costado, la vista resultante se conoce como vista ___."

respuesta: escenario[0]

explicacion: |
  Dependiendo de qué lado se elija, la vista lateral puede ser derecha o izquierda, pero siempre se denomina vista lateral.
```

### 4 — Ordenar: Proceso de proyección
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["proyeccion", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Definir el objeto 3D", "Elegir la vista principal", "Proyectar las vistas en el plano", "Dibujar las líneas de construcción"]

respuesta: ["Definir el objeto 3D", "Elegir la vista principal", "Proyectar las vistas en el plano", "Dibujar las líneas de construcción"]

enunciado: "Ordena los pasos lógicos para representar correctamente las vistas de un objeto técnico:"

explicacion: |
  Primero se entiende el objeto, luego se selecciona la vista frontal para orientar el dibujo, se proyectan las dimensiones y finalmente se trazan las líneas.
```

### 5 — Identificación de la vista lateral
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: mc
opciones_explicitas: ["Vista Superior", "Vista Frontal", "Vista Lateral", "Vista Isométrica"]

enunciado: "La vista que muestra el perfil del objeto (visto de lado) se denomina:"

respuesta: "Vista Lateral"

explicacion: |
  La vista lateral (o de perfil) muestra la altura y la profundidad del objeto, pero no su ancho frontal.
```