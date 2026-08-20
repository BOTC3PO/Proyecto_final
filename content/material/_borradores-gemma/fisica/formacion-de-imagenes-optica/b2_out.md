### 1 — Naturaleza de la imagen
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imágenes", "virtual"]

enunciado: "Si un objeto se coloca a una distancia mayor que el doble de la distancia focal de un espejo cóncavo (d > 2f), la imagen formada es ___."

opciones_explicitas: ["real", "virtual", "imaginaria"]
respuestas_validas: ["real"]

respuesta: "real"
tipo: "mc"

explicacion: |
  Cuando el objeto está más allá del centro de curvatura (2f), los rayos reflejados divergen después de cruzarse, formando una imagen real, invertida y de menor tamaño.
```

### 2 — Cálculo de la distancia de imagen
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "convergentes", "calculo"]

variables:
  f: 15
  d_objeto: 30

enunciado: "Un objeto se sitúa a {d_objeto} cm de un espejo cóncavo con una distancia focal de {f} cm. ¿A qué distancia del espejo se forma la imagen?"

pasos:
  - "Utilizar la ecuación de los espejos: 1/f = 1/d_objeto + 1/d_imagen"
  - "Despejar la distancia de la imagen: d_imagen = (f * d_objeto) / (d_objeto - f)"
  - "Calcular: (15 * 30) / (30 - 15) = 450 / 15 = 30"

respuesta: 30
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Aplicando la fórmula: 1/15 = 1/30 + 1/d_imagen. 
  Esto nos da 1/d_imagen = 1/15 - 1/30 = 1/30. 
  Por lo tanto, d_imagen = 30 cm.
```

### 3 — Verdad o Falso: Imágenes Virtuales
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["conceptos", "espejos"]

enunciado: "¿Una imagen virtual puede ser proyectada sobre una pantalla?"

respuesta: falso
tipo: "vf"

explicacion: |
  Las imágenes virtuales se forman por la intersección de rayos prolongados y no por la intersección de rayos reales, por lo que no pueden ser proyectadas.
```

### 4 — Magnificación de la imagen
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["magnitud", "espejos"]

variables:
  f: 10
  d_obj: 5

enunciado: "Un objeto de 5 cm de altura se coloca a {d_obj} cm de un espejo cóncavo con foco de {f} cm. ¿Cuál es la altura de la imagen formada?"

pasos:
  - "Calcular la distancia de la imagen: 1/10 = 1/5 + 1/d_img => d_img = -10 cm"
  - "Calcular la magnificación (m): m = -d_img / d_obj = -(-10) / 5 = 2"
  - "Calcular la altura de la imagen (h_img): h_img = m * h_objeto = 2 * 5 = 10"

respuesta: 10
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Como el objeto está entre el foco y el espejo, la imagen es virtual y derecha.
  d_img = (10 * 5) / (5 - 10) = 50 / -5 = -10 cm.
  m = -(-10) / 5 = 2.
  Altura = 2 * 5 = 10 cm.
```

### 5 — Orden de formación de imagen
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["procesos", "óptica"]

enunciado: "Ordena los pasos para determinar si una imagen es real o virtual usando el signo de la distancia de la imagen (d_img):"

opciones_explicitas: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]

respuesta: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene el valor numérico de la distancia, luego se analiza su signo (positivo para real, negativo para virtual) y finalmente se da la conclusión.
```