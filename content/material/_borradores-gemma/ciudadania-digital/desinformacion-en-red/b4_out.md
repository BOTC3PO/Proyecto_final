### 1 — El titular alarmista
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["titulares", "emocionalidad"]

tipo: mc
opciones_explicitas: ["Un titular que usa mayúsculas excesivas y signos de exclamación para generar miedo", "Un titular que resume la noticia de forma neutra y objetiva", "Un titular que cita una fuente oficial de noticias"]

enunciado: "Al navegar por redes sociales, ¿cuál de los siguientes tipos de titulares suele ser una señal de alerta de posible desinformación?"

explicacion: |
  Los titulares diseñados para provocar una respuesta emocional fuerte (miedo, ira o sorpresa) suelen ser herramientas de 'clickbait' para propagar noticias falsas o desinformación.
```

### 2 — Verificación de la fuente
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["fuente", "verificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un mensaje de WhatsApp que dice 'Científicos de una universidad desconocida descubren la cura de todo'", "fuente_falsa"],
    ["Un artículo en el sitio web oficial de la ONU sobre cambio climático", "fuente_confiable"]
  ]

tipo: mc
opciones_explicitas: ["Verificar si la fuente es una institución reconocida o un sitio oficial", "Compartir la información inmediatamente para que otros la vean", "Creer la noticia solo porque tiene muchos 'likes'"]

enunciado: "Si recibes la siguiente información: {escenarios[escenario_idx][0]}, ¿cuál es la primera acción recomendada para verificar su veracidad?"

explicacion: |
  La verificación de la fuente es el primer paso fundamental. Si la fuente es anónima o no tiene reputación, la probabilidad de que sea desinformación es muy alta.
```

### 3 — El efecto eco
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["triangulacion", "medios"]

tipo: completar
respuestas_validas: ["otros medios confiables"]

enunciado: "Para confirmar si una noticia es real, una estrategia efectiva es buscar si ___ reportan la misma información."

explicacion: |
  La triangulación de la información mediante el uso de múltiples medios de comunicación con estándares periodísticos probados ayuda a descartar noticias falsas que solo circulan en redes sociales.
```

### 4 — Pasos para el chequeo de datos
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Leer el contenido completo de la noticia", "Verificar la fecha de publicación de la información", "Contrastar la noticia en buscadores y medios oficiales"]

enunciado: "Ordena los pasos lógicos para realizar un chequeo de veracidad de una noticia que te parece sospechosa:"

explicacion: |
  Primero se debe analizar el contenido (no quedarse solo con el título), luego verificar si es actual (muchas noticias falsas son viejas) y finalmente contrastar con fuentes externas.
```

### 5 — Análisis de sesgo
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["sesgo", "emocion"]

tipo: input
tolerancia_abs: 0

enunciado: "Si una noticia utiliza un lenguaje altamente cargado de adjetivos negativos o positivos para influir en tu opinión, estás ante un contenido con sesgo ___."

explicacion: |
  El lenguaje emocional y cargado de adjetivos es una técnica para anular el pensamiento crítico del lector y dirigirlo hacia una postura específica, característica de la desinformación.
```