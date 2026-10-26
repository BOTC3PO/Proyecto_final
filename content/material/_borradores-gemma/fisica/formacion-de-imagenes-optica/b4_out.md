### 1 — Naturaleza de la imagen
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "imagen_real", "imagen_virtual"]

respuesta: "real"
tipo: "mc"
opciones_explicitas: ["real", "virtual"]

enunciado: "Una imagen que puede ser proyectada sobre una pantalla porque los rayos de luz realmente convergen en un punto se denomina imagen _______."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos de luz y pueden proyectarse. Las imágenes virtuales se forman cuando los rayos parecen provenir de un punto, pero no pasan por él.
```

### 2 — Características de la imagen virtual
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "imagen_virtual"]

variables:
  es_derecha: uno_de([verdadero, falso])

respuesta: es_derecha
tipo: "vf"

enunciado: "En el caso de una imagen virtual formada por un espejo plano, la imagen es siempre derecha respecto al objeto."

explicacion: |
  Las imágenes virtuales producidas por espejos planos son siempre derechas y de igual tamaño que el objeto, pero se encuentran detrás del espejo.
```

### 3 — Comparación de orientación
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "orientacion"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1]
tipo: "completar"
tabla: [["derecha", "derecha"], ["invertida", "invertida"]]

enunciado: "Si una imagen es real, su orientación respecto al objeto será _______, mientras que si la imagen es virtual en un espejo plano, será _______."

explicacion: |
  Las imágenes reales suelen ser invertidas (en lentes o espejos convexos/cóncavos según posición), mientras que las imágenes virtuales en espejos planos son siempre derechas.
```

### 4 — Orden de formación de rayos
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
respuesta: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
tipo: "ordenar"

enunciado: "Ordene los procesos físicos que describen la formación de una imagen real, una imagen virtual y la propagación de la luz, respectivamente."

explicacion: |
  1. La imagen real requiere convergencia de rayos en un punto físico.
  2. La imagen virtual ocurre cuando los rayos divergen pero su prolongación parece originar un punto.
  3. La propagación es la base de la trayectoria de los rayos.
```

### 5 — Distinción por proyección
```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "proyeccion"]

respuesta: 0
tipo: "mc"
opciones_explicitas: ["0", "1"]

enunciado: "Si una imagen NO puede ser capturada en una pantalla física, ¿qué valor representa si la imagen es virtual? (1 para Sí, 0 para No)"

explicacion: |
  La capacidad de proyección es la diferencia fundamental: las imágenes reales se proyectan, las virtuales no.
```