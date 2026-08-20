### 1 — Concepto de fuente confiable
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["fuente", "verificacion", "informacion"]

tipo: mc
opciones_explicitas: ["Una fuente que presenta información sesgada o sin sustento", "Una fuente que permite verificar la autoría y la actualidad de los datos", "Una fuente que solo publica opiniones personales sin referencias", "Una fuente que utiliza lenguaje excesivamente emocional para convencer"]

respuesta: "Una fuente que permite verificar la autoría y la actualidad de los datos"

enunciado: "En el contexto de la alfabetización mediática, una fuente de información se considera confiable cuando..."

explicacion: |
  La confiabilidad se basa en la capacidad de rastrear el origen de la información (autoría), verificar que los datos sean actuales y que existan evidencias que los respalden.
```

### 2 — El proceso de verificación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["verificacion", "pasos"]

variables:
  pasos_ordenados: ["Identificar la fuente original", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Evaluar la reputación del autor"]

tipo: ordenar
opciones_explicitas: ["Identificar la fuente original", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Evaluar la reputación del autor"]

respuesta: ["Identificar la fuente original", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Evaluar la reputación del autor"]

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia antes de compartirla:"

explicacion: |
  Para una verificación efectiva, primero debemos saber de dónde viene la información, luego ver si otros medios la confirman, chequear que no sea noticia vieja y finalmente analizar quién es el autor.
```

### 3 — Sesgo de información
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["sesgo", "neutralidad"]

tipo: vf

respuesta: falso

enunciado: "Si un sitio web de noticias utiliza exclusivamente adjetivos cargados de emoción y solo presenta un punto de vista sin mencionar contraargumentos, se dice que la fuente es neutral y altamente confiable."

explicacion: |
  El uso de lenguaje emocional y la falta de pluralidad de perspectivas son indicadores claros de sesgo informativo, lo cual resta confiabilidad a la fuente.
```

### 4 — Elementos de una fuente
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["vocabulario", "autoría"]

tipo: completar
respuestas_validas: ["autoría", "URL", "fecha", "reputación"]

respuesta: "autoría"

enunciado: "El proceso de verificar la ___________ consiste en investigar quién es el responsable de la creación del contenido para determinar su credibilidad."

explicacion: |
  La autoría es un pilar fundamental; saber si el autor es un experto en la materia o una organización reconocida es clave para la validación.
```

### 5 — El fenómeno de la desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["fake_news", "desinformacion"]

variables:
  escenario: [["noticia falsa con intención de engañar", "error involuntario de un periodista"], ["desinformación", "error"]]
  idx: uno_de([0,1])

tipo: mc
opciones_explicitas: ["Desinformación", "Error periodístico", "Opinión editorial", "Satirismo"]

respuesta: "desinformación"

enunciado: "Cuando se crea y difunde información falsa con el objetivo deliberado de causar daño o manipular la opinión pública, estamos ante un caso de {escenario[idx][0]}."

explicacion: |
  La desinformación se diferencia del error periodístico en la intención: la desinformación busca engañar activamente.
```