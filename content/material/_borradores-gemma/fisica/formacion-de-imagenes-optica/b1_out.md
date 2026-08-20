### 1 — Naturaleza de la imagen
```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "imagen-virtual", "imagen-real"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen es virtual cuando los rayos de luz parecen provenir de un punto situado detrás de la pantalla o plano de observación."

explicacion: |
  Las imágenes virtuales se forman por la intersección de las prolongaciones de los rayos de luz, por lo que no pueden proyectarse en una pantalla.
```

### 2 — Tipos de imágenes según su proyección
```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "terminologia"]

opciones_explicitas: ["real", "virtual", "imaginaria", "teórica"]
respuesta: "real"
tipo: mc

enunciado: "Cuando los rayos de luz realmente convergen en un punto y pueden ser captados por una pantalla, la imagen formada es de tipo ___."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos luminosos.
```

### 3 — Posición del objeto y tipo de imagen
```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes", "posicion-objeto"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[10, "virtual"], [5, "real"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["virtual", "real"]

enunciado: "Si un objeto se coloca a una distancia de {datos[escenario_idx][0]} cm de un espejo convexo, la imagen resultante será ___."

explicacion: |
  En los espejos convexos, la imagen siempre es virtual, derecha y de menor tamaño, sin importar la posición del objeto.
```

### 4 — Características de la imagen virtual
```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["propiedades", "imagen-virtual"]

respuesta: falso
tipo: vf

enunciado: "Una característica fundamental de las imágenes virtuales es que siempre son invertidas respecto al objeto."

explicacion: |
  Las imágenes virtuales suelen ser derechas (como en un espejo plano). Las imágenes invertidas suelen ser reales.
```

### 5 — Secuencia de formación de imagen real
```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["proceso", "formacion-imagen"]

opciones_explicitas: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
respuesta: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos necesarios para la formación de una imagen real mediante una lente convergente:"

explicacion: |
  Para que una imagen sea real, los rayos deben viajar desde el objeto, pasar por la lente, converger en un punto y finalmente ser captados por una superficie (pantalla).
```