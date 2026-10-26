### 1 — Proyección Ortogonal vs. Axonométrica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "axonométrica"]

tipo: mc
opciones_explicitas: ["Representación de la realidad en un plano con escalas variables", "Representación de la realidad en un plano con escalas constantes", "Representación de la realidad sin perspectiva", "Representación de la realidad con puntos de fuga"]

enunciado: "La principal diferencia entre la proyección ortogonal y la proyección axonométrica es que en la axonométrica..."

respuesta: "Representación de la realidad en un plano con escalas constantes"

explicacion: |
  En la proyección ortogonal (vistas diédricas), se representan planos perpendiculares al plano de proyección. En la axonométrica, se proyecta un objeto tridimensional sobre un plano, manteniendo la proporción de las dimensiones (escala) a lo largo de los ejes.
```

### 2 — Naturaleza de la Proyección Oblicua
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "proyecciones"]

tipo: vf
respuesta: falso

enunciado: "En una proyección oblicua, los rayos proyectantes son paralelos entre sí y caen perpendicularmente sobre el plano de proyección."

explicacion: |
  Falso. Esa es la definición de la proyección ortogonal. En la proyección oblicua, los rayos son paralelos entre sí, pero caen de forma oblicua (no perpendicular) sobre el plano de proyección.
```

### 3 — Orden de representación de vistas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["orden", "vistas"]

tipo: ordenar
opciones_explicitas: ["Alzado", "Planta", "Perfil"]

respuesta: ["Alzado", "Planta", "Perfil"]

enunciado: "Ordene las vistas principales de un objeto según el orden estándar de lectura en un sistema de proyección diédrico (de arriba hacia abajo/izquierda a derecha):"

explicacion: |
  El orden estándar suele comenzar con el alzado (frente), seguido de la planta (vista superior) y el perfil (vista lateral).
```

### 4 — Componentes de la Proyección Axonométrica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["axonométrica", "ejes"]

variables:
  datos: [["isométrica", "todos los ejes iguales"], ["dimétrica", "dos ejes iguales"], ["trimétrica", "tres ejes distintos"]]
  idx: uno_de([0,1,2])

tipo: completar
respuestas_validas: ["isométrica", "dimétrica", "trimétrica"]
respuesta: datos[idx][0]

enunciado: "Si en una proyección axonométrica los tres ejes principales tienen la misma inclinación y la misma escala, estamos ante una proyección ___________."

explicacion: |
  La proyección isométrica es un caso particular de la axonométrica donde los tres ejes están a 120 grados entre sí y las escalas son idénticas.
```

### 5 — Diferencia de escala en Oblicua
```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["oblicua", "escala"]

tipo: completar
respuestas_validas: ["1", "menor que 1", "mayor que 1"]
respuesta: "menor que 1"

enunciado: "A diferencia de la proyección ortogonal, en la proyección oblicua (como la caballera), la escala en el eje de profundidad suele ser ___________ para evitar la distorsión visual de la profundidad."

explicacion: |
  En la proyección caballera, se aplica un coeficiente de reducción (comúnmente 2/3 o 0.5) al eje de profundidad para que el objeto no parezca deformado o excesivamente largo ante el ojo humano.
```