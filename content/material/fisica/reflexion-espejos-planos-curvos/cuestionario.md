# Fisica — Reflexion espejos planos curvos (cuestionario, 27 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
tipo: completar
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
respuestas_validas:
  - "derecha"
  - "izquierda"

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

respuesta_orden: ["emisión", "incidencia", "reflexión", "percepción"]
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

### 6 — Relación de la distancia focal y el objeto

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["espejos", "foco", "distancia"]

variables:
  f: 15.0

respuesta: 30.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un espejo cóncavo tiene una distancia focal de {f} cm, ¿a qué distancia debe colocarse un objeto para que la imagen se forme exactamente en la misma posición que el objeto (imágenes infinitas)?"

pasos:
  - "Identificar la distancia focal: f = 15 cm."
  - "Para que la imagen sea virtual e infinita, el objeto debe estar en el foco."
  - "Por lo tanto, la distancia del objeto es 15 cm (pero el enunciado pide la posición de la imagen/objeto en el límite, en este caso se refiere a la distancia al foco para imágenes en el infinito, pero para este cálculo de posición de objeto para imagen en el infinito, la distancia es f)."
  - "Revisión: Si el objeto está en el foco, la imagen está en el infinito. Si el objeto está en el infinito, la imagen está en el foco. Si el objeto está en el centro de curvatura (2f), la imagen está en el centro de curvatura. Vamos a plantear una pregunta de posición de imagen para un objeto dado."

# Re-calculando para evitar ambigüedad:
# Si f=15, C=30. Si objeto en 30, imagen en 30.
# Si f=15, objeto en 10, 1/s + 1/s' = 1/f -> 1/10 + 1/s' = 1/15 -> 1/s' = 1/15 - 1/10 = -1/30 -> s' = -30.
```

### 7 — Distancia de la imagen en espejo cóncavo

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "calculo", "foco"]

variables:
  f: 20.0
  s: 30.0

respuesta: -60.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un espejo cóncavo tiene una distancia focal de {f} cm. Si colocamos un objeto a una distancia de {s} cm del espejo, ¿cuál es la posición de la imagen (s') en centímetros? (Indique valor negativo para imágenes virtuales)."

pasos:
  - "Usar la ecuación de los espejos: 1/s + 1/s' = 1/f"
  - "Sustituir valores: 1/30 + 1/s' = 1/20"
  - "Despejar 1/s': 1/s' = 1/20 - 1/30 = 3/60 - 2/60 = 1/60"
  - "Sin embargo, si el objeto está entre el foco y el espejo, la imagen es virtual. Probemos con s=12: 1/12 + 1/s' = 1/20 -> 1/s' = 1/20 - 1/12 = 3/60 - 5/60 = -2/60 -> s' = -30."
  - "Usemos s=12 para que sea virtual y requiera signo negativo."

# Ajuste final de variables para el ejemplo:
# f = 20, s = 12 -> s' = -30
```

### 8 — Distancia de la imagen en espejo cóncavo

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "calculo", "foco"]

variables:
  f: 20.0
  s: 12.0

respuesta: -30.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un espejo cóncavo tiene una distancia focal de {f} cm. Si colocamos un objeto a una distancia de {s} cm del espejo, ¿cuál es la posición de la imagen (s') en centímetros? (Indique valor negativo para imágenes virtuales)."

explicacion: |
  Usamos la ecuación de Gauss: 1/s + 1/s' = 1/f.
  1/12 + 1/s' = 1/20
  1/s' = 1/20 - 1/12 = (3 - 5) / 60 = -2 / 60
  s' = -60 / 2 = -30 cm.
```

### 9 — Naturaleza de la imagen en espejo convexo

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["espejos", "convexo", "imagen"]

respuesta: "virtual"
tipo: mc
opciones_explicitas: ["real", "virtual", "imaginaria", "doble"]

enunciado: "Un espejo convexo siempre produce imágenes de este tipo, independientemente de la posición del objeto."

explicacion: |
  Los espejos convexos siempre divergen los rayos de luz, por lo que la imagen siempre se forma detrás del espejo, siendo virtual, derecha y de menor tamaño.
```

### 10 — Orden de pasos para hallar la amplificación

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

opciones_explicitas: ["Calcular la distancia de la imagen (s') usando la ecuación de los espejos", "Determinar la distancia focal (f) a partir del radio de curvatura", "Calcular la amplificación lateral (m) usando m = -s'/s"]

respuesta_orden: ["Determinar la distancia focal (f) a partir del radio de curvatura", "Calcular la distancia de la imagen (s') usando la ecuación de los espejos", "Calcular la amplificación lateral (m) usando m = -s'/s"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la amplificación lateral de una imagen formada por un espejo curvo si solo conocemos el radio de curvatura y la posición del objeto."

explicacion: |
  Primero necesitas el foco (f = R/2), luego la posición de la imagen (s') con la ecuación de Gauss, y finalmente la relación de tamaños (m).
```

### 11 — Veracidad de la imagen en espejo plano

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["espejo_plano", "verdadero"]

respuesta: verdadero
tipo: vf

enunciado: "En un espejo plano, la distancia del objeto al espejo es igual a la distancia de la imagen al espejo."

explicacion: |
  Por definición de la reflexión en espejos planos, la imagen es simétrica respecto al plano del espejo.
```

### 12 — Cálculo de la distancia focal

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["foco", "radio"]

variables:
  R: 50.0

respuesta: 25.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un espejo esférico tiene un radio de curvatura de {R} cm, ¿cuál es su distancia focal (f)?"

explicacion: |
  La distancia focal (f) es la mitad del radio de curvatura (R): f = R / 2.
  f = 50 / 2 = 25 cm.
```

### 13 — Naturaleza de la imagen en espejo plano

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["espejos", "reflexion", "imagen"]

respuesta: "virtual"
tipo: mc
opciones_explicitas: ["real", "virtual", "imaginaria", "proyectable"]

enunciado: "En un espejo plano, la imagen que se forma detrás de la superficie reflectante se denomina imagen ___."

explicacion: |
  Una imagen es virtual cuando los rayos de luz parecen provenir de un punto detrás del espejo, pero no se cruzan físicamente en el espacio, por lo que no puede proyectarse en una pantalla.
```

### 14 — Relación de tamaño en espejos convexos

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_convexos"
  nivel: "intermedio"
  tags: ["convexo", "imagen", "tamaño"]

variables:
  escenario: uno_de([["espejo_convexo", "siempre menor", "siempre mayor", "igual"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["siempre menor", "siempre mayor", "igual"]

enunciado: "Un objeto se coloca frente a un espejo convexo. La imagen resultante será ___ que el objeto original."

explicacion: |
  Los espejos convexos (como los de los retrovisores de autos) siempre producen imágenes virtuales, derechas y de tamaño reducido para permitir un mayor campo de visión.
```

### 15 — El error de la imagen real en espejos cóncavos

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_concavos"
  nivel: "avanzado"
  tags: ["concavo", "imagen_real", "foco"]

respuesta: "frente"
tipo: completar
respuestas_validas:
  - "frente"
  - "detras"

enunciado: "Para que un espejo cóncavo produzca una imagen real que pueda ser proyectada en una pantalla, el objeto debe colocarse ___ al espejo."

explicacion: |
  Las imágenes reales solo se forman cuando los rayos de luz convergen físicamente. En un espejo cóncavo, esto ocurre solo si el objeto está más allá del foco.
```

### 16 — Propiedades de la imagen en espejo plano

```
metadata:
  materia: "fisica"
  tema: "espejos_planos"
  nivel: "basico"
  tags: ["simetria", "distancia"]

respuesta: verdadero
tipo: vf

enunciado: "En un espejo plano, la distancia del objeto al espejo es exactamente igual a la distancia de la imagen al espejo."

explicacion: |
  Una de las propiedades fundamentales de los espejos planos es que la imagen es simétrica respecto al plano del espejo.
```

### 17 — Secuencia de formación de imagen en espejo cóncavo

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_concavos"
  nivel: "avanzado"
  tags: ["orden", "enfoque", "distancia"]

respuesta_orden: ["Objeto muy lejos (más allá del foco)", "Objeto en el centro de curvatura", "Objeto muy cerca (entre foco y vértice)"]
tipo: ordenar
opciones_explicitas: ["Objeto muy lejos (más allá del foco)", "Objeto en el centro de curvatura", "Objeto muy cerca (entre foco y vértice)"]

enunciado: "Ordena las siguientes situaciones de un espejo cóncavo según el tipo de imagen que se forma (de imagen REAL a imagen VIRTUAL):"

explicacion: |
  1. Más allá del foco: Imagen real e invertida.
  2. En el centro de curvatura: Imagen real, invertida y de igual tamaño.
  3. Entre el foco y el vértice: Imagen virtual, derecha y de mayor tamaño.
```

### 18 — Naturaleza de la imagen en espejos planos

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["optica", "espejos"]

respuesta: "virtual"
tipo: completar
respuestas_validas:
  - "virtual"
  - "real"

enunciado: "A diferencia de una imagen real que puede proyectarse en una pantalla, la imagen formada por un espejo plano es de naturaleza ___."

explicacion: |
  En un espejo plano, los rayos de luz divergen tras la reflexión, por lo que sus prolongaciones se interceptan detrás del espejo, creando una imagen virtual que no puede ser proyectada.
```

### 19 — Comparación de divergencia: Convexo vs Cóncavo

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "reflexion"]

variables:
  es_convexo: uno_de([verdadero, falso])

respuesta: es_convexo == verdadero
tipo: completar
enunciado: "Considerando la desviación de los rayos de luz tras la reflexión: ¿Es cierto que un espejo convexo siempre produce una imagen virtual y divergente, a diferencia de un espejo cóncavo que puede producir imágenes reales?"

explicacion: |
  Los espejos convexos siempre divergen los rayos, resultando en imágenes virtuales, derechas y de menor tamaño. Los cóncavos, según la posición del objeto, pueden converger rayos y formar imágenes reales.
```

### 20 — Formación de imágenes en espejos cóncavos

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "avanzado"
  tags: ["optica", "espejos_concavos"]

variables:
  idx: uno_de([0, 1])
  distancias: [5, 1]
  resultados_texto: ["Real e invertida", "Virtual y derecha"]

respuesta: resultados_texto[idx]

opciones_explicitas: ["Real e invertida", "Virtual y derecha"]
tipo: mc

enunciado: "Si colocamos un objeto a una distancia de {distancias[idx]} cm de un espejo cóncavo de radio de curvatura de 4 cm, la imagen resultante será:"

explicacion: |
  Si el objeto está más allá del foco (distancia > radio/2), la imagen es real e invertida. Si el objeto está entre el foco y el espejo (distancia < radio/2), la imagen es virtual y derecha.
```

### 21 — Orden de elementos en un sistema de reflexión

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "intermedio"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Incidencia", "Reflexión", "Propagación"]
respuesta_orden: ["Incidencia", "Reflexión", "Propagación"]
tipo: ordenar

enunciado: "Ordene cronológicamente los fenómenos que ocurren cuando un rayo de luz se encuentra con un espejo plano:"

explicacion: |
  El rayo primero viaja por el medio (propagación), llega a la superficie (incidencia) y luego cambia de dirección (reflexión).
```

### 22 — Diferencia entre imagen real y virtual

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["optica", "imágenes"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen se denomina 'real' si los rayos de luz que la forman convergen físicamente en un punto, a diferencia de la imagen 'virtual' donde solo se produce la intersección de las prolongaciones de los rayos. ¿Es esto correcto?"

explicacion: |
  Efectivamente, la distinción fundamental radica en si los rayos convergen físicamente en el espacio (real) o si la imagen es una construcción visual de las trayectorias (virtual).
```

### 23 — Espejo de seguridad en supermercado

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["optica", "reflexion"]

variables:
  idx: uno_de([0,1])
  datos: [["espejo plano", "la imagen es del mismo tamaño que el objeto"], ["espejo plano", "la imagen es invertida lateralmente"]]
  escenario: uno_de([["un pasillo de supermercado", "espejo plano"], ["un baño", "espejo plano"]])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["la imagen es del mismo tamaño que el objeto", "la imagen es invertida lateralmente", "la imagen es siempre mayor", "la imagen es siempre menor"]

enunciado: "En {escenario[0]}, el uso de un {escenario[1]} permite ver el entorno. En este caso, la característica de la imagen es que ___."

explicacion: |
  En un espejo plano, la imagen es virtual, derecha y de igual tamaño que el objeto, aunque presenta inversión lateral.
```

### 24 — El reflejo en una cuchara

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos_curvos", "concavo"]

variables:
  tipo_lado: uno_de([0,1])
  lados: [["la parte interna (cóncava)", "se ve invertida"], ["la parte externa (convexa)", "se ve derecha"]]

respuesta: lados[tipo_lado][1]
tipo: mc
opciones_explicitas: ["se ve invertida", "se ve derecha", "se ve aumentada", "se ve reducida"]

enunciado: "Si observas tu rostro en una cuchara de metal, el efecto dependerá de qué parte uses. Si miras por {lados[tipo_lado][0]}, la imagen que percibes ___."

explicacion: |
  La parte interna de la cuchara actúa como un espejo cóncavo. Dependiendo de la distancia, la imagen puede ser real e invertida o virtual y aumentada.
```

### 25 — Espejos de seguridad en curvas

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos_convexos", "seguridad"]

variables:
  es_convexo: verdadero

respuesta: es_convexo
tipo: completar
enunciado: "Los espejos situados en las salidas de los estacionamientos o en curvas peligrosas suelen ser convexos para ampliar el campo visual. ¿Es cierto que un espejo convexo siempre produce imágenes virtuales y menores que el objeto?"

explicacion: |
  Verdadero. Los espejos convexos divergen los rayos de luz, lo que resulta en imágenes siempre virtuales, derechas y de menor tamaño, permitiendo un campo visual más amplio.
```

### 26 — Construcción de un sistema óptico

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_curvos"
  nivel: "avanzado"
  tags: ["espejos_curvos", "ordenar"]

respuesta_orden: ["Luz incidente", "Reflexión en la superficie curva", "Formación de la imagen"]
tipo: ordenar

enunciado: "Para entender cómo se forma una imagen en un espejo curvo, debemos seguir el camino de la luz. Ordena los siguientes eventos:"

pasos:
  - "La luz viaja hacia el espejo"
  - "Los rayos rebotan en el espejo"
  - "Los rayos convergen o divergen para crear la imagen"

opciones_explicitas: ["Luz incidente", "Reflexión en la superficie curva", "Formación de la imagen"]

explicacion: |
  El proceso óptico comienza con la incidencia de la luz, sigue con el fenómeno de la reflexión (segunda ley) y culmina con la percepción de la imagen.
```

### 27 — El efecto de la distancia en espejos cóncavos

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "avanzado"
  tags: ["espejos_concavos", "distancia"]

variables:
  distancia_tipo: uno_de([0,1])
  casos: [["muy cerca (dentro del foco)", "aumentada"], ["muy lejos (fuera del foco)", "invertida"]]

respuesta: casos[distancia_tipo][1]
tipo: completar

enunciado: "En un espejo cóncavo, si el objeto se coloca ___ , la imagen resultante será ___."

pasos:
  - "Identificar la posición del objeto respecto al foco"
  - "Determinar si la imagen es real o virtual"

respuestas_validas:
  - "aumentada"
  - "invertida"

explicacion: |
  Si el objeto está entre el foco y el espejo, la imagen es virtual, derecha y aumentada. Si el objeto está más allá del foco, la imagen es real e invertida.
```
