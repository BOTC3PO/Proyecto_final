### 1 — El mito del alcance masivo
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["marketing_turistico", "segmentacion"]

respuesta: "segmentacion"
tipo: "completar"
respuestas_validas: ["segmentacion"]

enunciado: "Un error común en la promoción de un destino es creer que la comunicación debe dirigirse a todo el mundo. Para que una estrategia sea efectiva, se debe realizar una correcta _________ para llegar al público objetivo."

explicacion: |
  Promover un destino para 'todo el mundo' suele desperdiciar presupuesto. La segmentación permite dirigir mensajes específicos a nichos con intereses afines (ej. turismo de aventura vs. turismo de lujo).
```

### 2 — Comunicación vs. Promoción
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "intermedio"
  tags: ["conceptos_clave", "marketing"]

opciones_explicitas: ["La comunicación es solo publicidad pagada", "La comunicación incluye la gestión de la imagen y reputación", "La comunicación es solo el uso de redes sociales", "La comunicación no tiene relación con el destino"]

respuesta: "La comunicación incluye la gestión de la imagen y reputación"
tipo: "mc"

enunciado: "En el marketing de destinos, existe la confusión de que la comunicación se limita únicamente a la publicidad pagada (anuncios). ¿Cuál es la premisa correcta?"

explicacion: |
  La comunicación turística es integral: abarca desde la identidad visual y el storytelling hasta la gestión de crisis y la experiencia del visitante en el destino.
```

### 3 — El orden de la estrategia
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comocacion_para_la_promocion_turistica"
  nivel: "intermedio"
  tags: ["planificacion", "metodologia"]

opciones_explicitas: ["Definir el público objetivo", "Elegir los canales de difusión", "Crear el mensaje creativo", "Lanzar la campaña"]

respuesta: "Definir el público objetivo, Elegir los canales de difusión, Crear el mensaje creativo, Lanzar la campaña"
tipo: "ordenar"

enunciado: "Para evitar errores de inversión en la promoción de un destino, se debe seguir un orden lógico en la planificación estratégica. Ordene los siguientes pasos:"

explicacion: |
  No se puede elegir un canal (Instagram, radio, folletos) ni un mensaje sin saber primero a quién nos dirigimos (segmentación).
```

### 4 — Veracidad en la promoción
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comocacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["etica", "reputacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una estrategia de comunicación basada en exagerar las cualidades de un destino (sobrepromoción) es sostenible a largo plazo porque garantiza la satisfacción del turista."

explicacion: |
  La sobrepromoción genera una brecha entre la expectativa y la realidad, lo que resulta en malas reseñas y daño a la reputación del destino.
```

### 5 — El rol de los influencers
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comocacion_para_la_promocion_turistica"
  nivel: "avanzado"
  tags: ["canales_digitales", "influencer_marketing"]

variables:
  idx: uno_de([0, 1])
  datos: [["alcance masivo pero poco engagement", "engagement alto pero nicho muy pequeño"], ["poca conversión", "alta conversión"]]

respuesta: "datos[idx][0]"
tipo: "mc"

opciones_explicitas: ["alcance masivo pero poco engagement", "engagement alto pero nicho muy pequeño"]

enunciado: "Al contratar influencers para promocionar un destino, un error común es elegir solo por el número de seguidores. Si un destino busca un impacto real en un nicho específico, el riesgo de elegir un perfil con {datos[idx][0]} es alto."

explicacion: |
  El éxito de la comunicación turística digital no reside solo en el alcance (cantidad de personas), sino en la relevancia y la interacción (engagement) con el público que realmente puede viajar al destino.
```