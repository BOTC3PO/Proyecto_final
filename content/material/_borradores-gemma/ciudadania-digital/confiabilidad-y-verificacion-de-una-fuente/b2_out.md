### 1 — El criterio de la autoría
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["autoría", "verificación", "fuentes"]

respuesta: "anónimo"
tipo: mc
opciones_explicitas: ["experto en la materia", "anónimo", "un usuario de redes sociales", "un bot de noticias"]

enunciado: "Estás leyendo un artículo sobre un nuevo descubrimiento médico. El texto no indica quién lo escribió, no tiene firma ni biografía del autor, y el sitio web es un blog personal sin referencias. Según los criterios de confiabilidad, este contenido es de autoría ___."

explicacion: |
  Para que una fuente sea confiable, debe permitir la identificación clara del autor o la institución responsable. Si el autor es anónimo o no está acreditado, no podemos verificar su experiencia o posibles sesgos.
```

### 2 — Verificación de la fecha
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["actualidad", "temporalidad"]

variables:
  escenario: uno_de([
    ["Un artículo sobre el clima de 2015", "2015"],
    ["Una noticia sobre la pandemia de 2020", "2020"],
    ["Un reporte sobre una ley de 2023", "2023"]
  ])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["2015", "2020", "2023"]

enunciado: "Si estás investigando la situación climática actual para un trabajo escolar, pero encuentras un artículo que fue publicado en el año {escenario[1]}, la información podría estar desactualizada."

pasos:
  - "Identificar la fecha de publicación en el encabezado del artículo."
  - "Comparar la fecha con el tema de investigación (actualidad vs. pasado)."
  - "Evaluar si los datos presentados siguen siendo vigentes."

explicacion: |
  La temporalidad es clave. Una fuente puede ser confiable en su momento, pero estar obsoleta para temas que cambian rápidamente, como medicina, tecnología o política.
```

### 3 — El sesgo de la fuente
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["sesgo", "objetividad"]

respuesta: falso
tipo: vf

enunciado: "Si un sitio web de noticias solo presenta información que favorece a un único partido político y utiliza adjetivos muy emocionales para atacar a otros, se considera una fuente objetiva y neutral."

explicacion: |
  La objetividad implica presentar hechos y contrastar diferentes puntos de vista. El uso de lenguaje cargado emocionalmente y la falta de pluralidad son señales de sesgo informativo.
```

### 4 — Pasos para la verificación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodología", "verificación"]

respuesta: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor"]
tipo: ordenar
opciones_explicitas: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor"]

enunciado: "Has recibido un mensaje de WhatsApp con una noticia impactante. ¿Cuál es el orden lógico para verificar si es real antes de compartirla?"

explicacion: |
  El proceso ideal comienza identificando de dónde salió la información (fuente original), luego comprobando si otros medios serios lo reportan (contraste) y finalmente revisando la vigencia y autoría (contexto).
```

### 5 — La prueba de las fuentes externas
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["referencias", "evidencia"]

variables:
  caso: uno_de([
    ["El artículo cita un estudio de la NASA", "verdadero"],
    ["El artículo dice 'científicos dicen' sin nombres", "falso"],
    ["El artículo incluye enlaces a documentos oficiales", "verdadero"]
  ])

respuesta: caso[1]

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "En un informe sobre el cambio climático, el texto afirma que 'un grupo de científicos internacionales asegura que el hielo se está derritiendo', pero no proporciona nombres, instituciones ni enlaces a los estudios mencionados. ¿Es esta una evidencia sólida? {caso[1]}"

explicacion: |
  Una fuente confiable debe permitir la trazabilidad. Si una noticia menciona "expertos" o "estudios" de forma genérica sin dar datos específicos para que el lector pueda comprobarlos, es una señal de alerta de desinformación.
```