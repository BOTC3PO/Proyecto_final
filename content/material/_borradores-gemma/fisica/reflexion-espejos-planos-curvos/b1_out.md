### 1 — Concepto de reflexión
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["reflexion", "luz"]

respuesta: verdadero
tipo: vf

enunciado: "La reflexión especular ocurre cuando la luz rebota en una superficie lisa, como un espejo plano."

explicacion: |
  La reflexión especular mantiene la dirección de los rayos de luz, permitiendo la formación de imágenes claras.
```

### 2 — Ley de la reflexión
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["ley_reflexion", "angulos"]

variables:
  angulo_incidencia: 45

respuesta: 45
tipo: input
tolerancia_abs: 0.1

enunciado: "Si un rayo de luz incide sobre un espejo plano con un ángulo de incidencia de {angulo_incidencia} grados respecto a la normal, el ángulo de reflexión será de ___ grados."

pasos:
  - "Identificar el ángulo de incidencia respecto a la normal."
  - "Aplicar la ley de la reflexión: ángulo de incidencia = ángulo de reflexión."

explicacion: |
  Según la ley de la reflexión, el ángulo de incidencia es siempre igual al ángulo de reflexión.
```

### 3 — Tipos de espejos según su forma
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "basico"
  tags: ["espejos", "concavo", "convexo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["cóncavo", "hacia adentro"], ["convexo", "hacia afuera"]]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["cóncavo", "convexo"]

enunciado: "Un espejo cuya superficie reflectante está orientada hacia el interior de la curva se denomina espejo ___."

explicacion: |
  Los espejos cóncavos tienen la superficie curva hacia el observador (como una cuchara), mientras que los convexos la tienen hacia afuera.
```

### 4 — Características de la imagen en espejo plano
```
metadata:
  materia: "fisica"
  tema: "espejos_planos"
  nivel: "intermedio"
  tags: ["imagen", "espejo_plano"]

respuesta: "derecha"
tipo: completar
respuestas_validas: ["derecha", "izquierda"]

enunciado: "En un espejo plano, la imagen es virtual, de igual tamaño y tiene la misma orientación, pero la imagen es ___ respecto al objeto."

explicacion: |
  La imagen en un espejo plano es simétrica respecto al plano del espejo, lo que se conoce como imagen lateralmente invertida o derecha (en términos de orientación vertical).
```

### 5 — Secuencia de formación de la imagen
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "intermedio"
  tags: ["proceso", "luz"]

respuesta: ["emisión", "incidencia", "reflexión", "percepción"]
tipo: ordenar
opciones_explicitas: ["emisión", "incidencia", "reflexión", "percepción"]

enunciado: "Ordena los pasos físicos que permiten que veamos nuestra imagen en un espejo:"

pasos:
  - "La fuente de luz emite fotones."
  - "La luz llega a la superficie del espejo."
  - "La luz rebota siguiendo las leyes de la reflexión."
  - "La luz llega a nuestros ojos."

explicacion: |
  Para ver una imagen, primero debe haber una fuente de luz, luego la luz debe incidir en el objeto, reflejarse hacia el espejo y finalmente llegar al observador.
```