### 1 — Naturaleza de la imagen en un espejo plano
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imagen_virtual"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un espejo plano", "virtual"], ["una lupa (lupa)", "virtual"]]

enunciado: "Al colocar un objeto frente a {datos[escenario_idx][0]}, la imagen que se observa es de tipo ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["virtual", "real"]

explicacion: |
  En un espejo plano, los rayos de luz parecen provenir de un punto detrás del espejo, por lo que la imagen es virtual.
```

### 2 — El caso del proyector de cine
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["proyeccion", "imagen_real"]

variables:
  tipo_proyector_idx: uno_de([0,1])
  configuracion: [["objeto entre F y 2F", "real"], ["objeto más allá de 2F", "real"]]

enunciado: "Para que un proyector de cine pueda formar una imagen en la pantalla, la imagen debe ser de tipo ___."

opciones_explicitas: ["real", "virtual", "derecha", "invertida"]
respuesta: "real"
tipo: mc

explicacion: |
  Para que una imagen pueda ser proyectada en una pantalla física, los rayos de luz deben converger realmente en un punto, lo que define a una imagen real.
```

### 3 — Lupa y la imagen ampliada
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["lupa", "lente_convergente"]

variables:
  distancia_idx: uno_de([0,1])
  caso: [["objeto entre F y l", "virtual"], ["objeto más allá de 2F", "real"]]

enunciado: "Si usamos una lupa (lente convergente) y colocamos el objeto a una distancia ___, la imagen resultante será ___."

opciones_explicitas: ["virtual", "real"]
respuesta: "virtual"
tipo: mc

explicacion: |
  Cuando el objeto está entre el foco (F) y el centro óptico (l), los rayos divergen tras la lente y la imagen es virtual, derecha y de mayor tamaño.
```

### 4 — Propiedades de la imagen real
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["propiedades_imagen"]

enunciado: "Una imagen real se caracteriza por ser ___ respecto a la dirección de los rayos de luz."

opciones_explicitas: ["derecha", "invertida"]
respuesta: "invertida"
tipo: mc

explicacion: |
  Las imágenes reales formadas por una sola lente o espejo siempre presentan una inversión respecto al objeto.
```

### 5 — Veracidad de la imagen en un espejo convexo
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejo_convexo", "seguridad"]

enunciado: "¿Es cierto que un espejo convexo (como los de los autos) siempre produce una imagen virtual?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Los espejos convexos siempre divergen los rayos, por lo que la imagen siempre es virtual, derecha y de menor tamaño.
```