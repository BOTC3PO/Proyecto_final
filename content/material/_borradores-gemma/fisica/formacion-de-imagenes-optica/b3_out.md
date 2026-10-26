### 1 — Naturaleza de la imagen virtual
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "espejos", "imágenes"]

respuesta: falso
tipo: vf

enunciado: "Una imagen es siempre real si los rayos de luz convergen en un punto físico después de reflejarse o refractarse."

explicacion: |
  Una imagen es real cuando los rayos de luz se cruzan físicamente en el espacio. Una imagen es virtual cuando los rayos parecen provenir de un punto, pero no pasan por él (como en un espejo plano).
```

### 2 — El error de la imagen invertida
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos_curvos", "imágenes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, "real", "invertida"], [5, "virtual", "derecha"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["real", "virtual"]

enunciado: "Si un objeto se coloca entre el foco y el centro de curvatura de un espejo cóncavo, la imagen resultante es de tipo ___."

explicacion: |
  Para un espejo cóncavo, cuando el objeto está más allá del foco (entre F y C), los rayos convergen frente al espejo, formando una imagen real e invertida.
```

### 3 — Relación posición y tipo de imagen
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes"]

variables:
  caso: uno_de([0, 1])
  datos: [[15, "grande"], [5, "pequeña"]]

respuesta: datos[caso][1]
tipo: completar
respuestas_validas: ["grande", "pequeña"]

enunciado: "En un espejo convexo, la imagen siempre es ___ respecto al objeto."

explicacion: |
  Los espejos convexos siempre producen imágenes virtuales, derechas y de menor tamaño que el objeto, independientemente de la posición.
```

### 4 — Propiedades de la imagen en espejo plano
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos_planos"]

respuesta: "derecha"
tipo: completar
respuestas_validas: ["derecha", "invertida"]

enunciado: "En un espejo plano, la imagen que se observa es siempre de orientación ___."

explicacion: |
  En un espejo plano, la imagen es virtual, de igual tamaño y mantiene la misma orientación (derecha), aunque presenta inversión lateral (enantiomorfismo).
```

### 5 — Secuencia de formación de imagen (Lente Convergente)
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["lentes", "proceso"]

opciones_explicitas: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos divergentes", "Formación de imagen real"]
respuesta: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos divergentes", "Formación de imagen real"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos para la formación de una imagen real con una lente convergente cuando el objeto está fuera del foco:"

explicacion: |
  Primero el objeto emite luz, luego la lente refracta esos rayos, estos se cruzan en un punto real y finalmente se percibe la imagen.
```