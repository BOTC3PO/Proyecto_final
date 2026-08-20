### 1 — Naturaleza de las lentes
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Una lente que hace que los rayos de luz paralelos que pasan a través de ella se separen (diverjan) se denomina lente ________."

explicacion: |
  Las lentes divergentes (cóncavas) separan los rayos de luz, mientras que las convergentes (convexas) los enfocan en un punto.
```

### 2 — Signo de la distancia focal
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["distancia_focal", "signos"]

variables:
  escenario: uno_de([["convergente", "positiva"], ["divergente", "negativa"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["positiva", "negativa"]

enunciado: "En el convenio de signos estándar para la óptica, si nos encontramos con una lente ________, su distancia focal se considera como ________."

explicacion: |
  Por convención, las lentes convergentes tienen distancia focal positiva y las divergentes tienen distancia focal negativa.
```

### 3 — Imagen en lentes divergentes
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["naturaleza_imagen"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que una lente divergente forme una imagen real para un objeto situado en el infinito (rayos paralelos)?"

explicacion: |
  Falso. Las lentes divergentes siempre forman imágenes virtuales, derechas y de menor tamaño para objetos reales.
```

### 4 — El error de la imagen "invertida"
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["confusion_comun", "imagen_virtual"]

variables:
  caso: uno_de([["convergente", "real"], ["divergente", "virtual"]])

respuesta: caso[1]
tipo: completar
respuestas_validas: ["real", "virtual"]

enunciado: "Un error común es pensar que todas las imágenes que vemos a través de una lupa son invertidas. Sin embargo, si usamos una lente ________, la imagen que vemos es de tipo ________."

explicacion: |
  Las lentes divergentes solo producen imágenes virtuales (derechas), mientras que las convergentes pueden producir imágenes reales (invertidas) o virtuales (derechas) dependiendo de la posición del objeto.
```

### 5 — Formación de la imagen (Pasos)
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["proceso_optico"]

respuesta: ["emisión", "refracción", "enfoque"]
tipo: ordenar
opciones_explicitas: ["emisión", "refracción", "enfoque", "reflexión"]

enunciado: "Ordena los pasos lógicos que ocurren cuando un objeto real es proyectado por una lente convergente sobre una pantalla:"

pasos:
  - "El objeto emite rayos de luz."
  - "La luz atraviesa la lente y cambia de dirección."
  - "Los rayos se cruzan en un punto sobre la pantalla."

explicacion: |
  Primero el objeto emite la luz, luego la lente refracta los rayos y finalmente estos convergen en un punto para formar la imagen.
```