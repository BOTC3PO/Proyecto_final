### 1 — Naturaleza de la imagen en espejos planos
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["optica", "espejos"]

respuesta: "virtual"
tipo: completar
respuestas_validas: ["virtual", "real"]

enunciado: "A diferencia de una imagen real que puede proyectarse en una pantalla, la imagen formada por un espejo plano es de naturaleza ___."

explicacion: |
  En un espejo plano, los rayos de luz divergen tras la reflexión, por lo que sus prolongaciones se interceptan detrás del espejo, creando una imagen virtual que no puede ser proyectada.
```

### 2 — Comparación de divergencia: Convexo vs Cóncavo
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "reflexion"]

variables:
  es_convexo: uno_de([verdadero, falso])

respuesta: es_convexo == verdadero
tipo: vf

enunciado: "Considerando la desviación de los rayos de luz tras la reflexión: ¿Es cierto que un espejo convexo siempre produce una imagen virtual y divergente, a diferencia de un espejo cóncavo que puede producir imágenes reales?"

explicacion: |
  Los espejos convexos siempre divergen los rayos, resultando en imágenes virtuales, derechas y de menor tamaño. Los cóncavos, según la posición del objeto, pueden converger rayos y formar imágenes reales.
```

### 3 — Formación de imágenes en espejos cóncavos
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "avanzado"
  tags: ["optica", "espejos_concavos"]

variables:
  caso: uno_de([0, 1])
  distancia_objeto: uno_de([2, 5]) # 2 es > radio, 5 es < radio

respuesta: caso == 0

opciones_explicitas: ["Real e invertida", "Virtual y derecha"]
tipo: mc

enunciado: "Si colocamos un objeto a una distancia de {distancia_objeto} cm de un espejo cóncavo de radio de curvatura de 4 cm, la imagen resultante será:"

explicacion: |
  Si el objeto está más allá del foco (distancia > radio/2), la imagen es real e invertida. Si el objeto está entre el foco y el espejo (distancia < radio/2), la imagen es virtual y derecha.
```

### 4 — Orden de elementos en un sistema de reflexión
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "intermedio"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Incidencia", "Reflexión", "Propagación"]
respuesta: ["Incidencia", "Reflexión", "Propagación"]
tipo: ordenar

enunciado: "Ordene cronológicamente los fenómenos que ocurren cuando un rayo de luz se encuentra con un espejo plano:"

explicacion: |
  El rayo primero viaja por el medio (propagación), llega a la superficie (incidencia) y luego cambia de dirección (reflexión).
```

### 5 — Diferencia entre imagen real y virtual
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["optica", "imágenes"]

variables:
  es_real: uno_de([verdadero, falso])

respuesta: es_real == verdadero

opciones_explicitas: ["Verdadero", "Falso"]
tipo: mc

enunciado: "Una imagen se denomina 'real' si los rayos de luz que la forman convergen físicamente en un punto, a diferencia de la imagen 'virtual' donde solo se produce la intersección de las prolongaciones de los rayos. ¿Es esto correcto?"

explicacion: |
  Efectivamente, la distinción fundamental radica en si los rayos convergen físicamente en el espacio (real) o si la imagen es una construcción visual de las trayectorias (virtual).
```