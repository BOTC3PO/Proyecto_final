### 1 — Diferencia entre planta y vista superior
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

respuesta: "planta"
tipo: completar
respuestas_validas: ["planta", "vista_superior"]

enunciado: "En el lenguaje técnico, la vista que se obtiene al observar un objeto desde arriba se denomina comúnmente vista ____."

explicacion: |
  La vista superior es la representación de la cara superior del objeto, y en dibujo técnico se le denomina frecuentemente 'planta'.
```

### 2 — Relación entre vista frontal y alzada
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["terminologia", "vistas"]

variables:
  es_sinonimo: true

respuesta: es_sinonimo
tipo: vf

enunciado: "En el sistema de proyección ortogonal, el término 'vista frontal' es sinónimo de 'alzada'."

explicacion: |
  Es correcto. La vista frontal (o alzada) es la vista principal que define la forma y dimensiones básicas del objeto.
```

### 3 — Identificación de la vista lateral
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["vistas", "proyeccion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["perfil_izquierdo", "izquierda"], ["perfil_derecho", "derecha"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["izquierda", "derecha", "superior", "frontal"]

enunciado: "Si la vista principal es la frontal, la vista que se obtiene al observar el objeto desde su lado ____ es la vista lateral izquierda."

explicacion: |
  La vista lateral izquierda se obtiene proyectando la cara lateral izquierda del objeto sobre un plano paralelo.
```

### 4 — Orden de proyección ortogonal
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

respuesta: ["frontal", "superior", "lateral"]
tipo: ordenar
opciones_explicitas: ["frontal", "superior", "lateral", "isométrica", "perspectiva"]

enunciado: "Ordene las siguientes vistas de un objeto siguiendo la disposición estándar de una proyección ortogonal (Alzada, Planta y Perfil):"

explicacion: |
  El orden estándar para organizar las vistas en un plano es: la frontal (alzada) arriba, la superior (planta) abajo y la lateral (perfil) al lado.
```

### 5 — Distinción entre vista y perspectiva
```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["proyeccion", "perspectiva"]

respuesta: "proyeccion_ortogonal"
tipo: completar
respuestas_validas: ["proyeccion_ortogonal", "perspectiva"]

enunciado: "A diferencia de una perspectiva, que muestra el objeto con profundidad visual, las vistas frontal, superior y lateral son representaciones de ____."

explicacion: |
  Las vistas principales son proyecciones ortogonales, lo que significa que no tienen fuga y mantienen las proporciones reales de las caras proyectadas.
```