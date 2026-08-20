# Ciudadania Digital — Confiabilidad y verificacion de una fuente (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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

respuesta_orden: ["Identificar la fuente original", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Evaluar la reputación del autor"]

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
respuestas_validas:
  - "autoría"
  - "URL"
  - "fecha"
  - "reputación"

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

tipo: mc
opciones_explicitas: ["Desinformación", "Error periodístico", "Opinión editorial", "Satirismo"]

respuesta: "Desinformación"

enunciado: "Cuando se crea y difunde información falsa con el objetivo deliberado de causar daño o manipular la opinión pública, estamos ante un caso de:"

explicacion: |
  La desinformación se diferencia del error periodístico en la intención: la desinformación busca engañar activamente.
```

### 6 — El criterio de la autoría

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

### 7 — Verificación de la fecha

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["actualidad", "temporalidad"]

variables:
  escenario: uno_de([["Un artículo sobre el clima de 2015", "2015"], ["Una noticia sobre la pandemia de 2020", "2020"], ["Un reporte sobre una ley de 2023", "2023"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "2015"
  - "2020"
  - "2023"

enunciado: "Si estás investigando la situación climática actual para un trabajo escolar, pero encuentras un artículo que fue publicado en el año {escenario[1]}, la información podría estar desactualizada."

pasos:
  - "Identificar la fecha de publicación en el encabezado del artículo."
  - "Comparar la fecha con el tema de investigación (actualidad vs. pasado)."
  - "Evaluar si los datos presentados siguen siendo vigentes."

explicacion: |
  La temporalidad es clave. Una fuente puede ser confiable en su momento, pero estar obsoleta para temas que cambian rápidamente, como medicina, tecnología o política.
```

### 8 — El sesgo de la fuente

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

### 9 — Pasos para la verificación

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodología", "verificación"]

respuesta_orden: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor"]
tipo: ordenar
opciones_explicitas: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor"]

enunciado: "Has recibido un mensaje de WhatsApp con una noticia impactante. ¿Cuál es el orden lógico para verificar si es real antes de compartirla?"

explicacion: |
  El proceso ideal comienza identificando de dónde salió la información (fuente original), luego comprobando si otros medios serios lo reportan (contraste) y finalmente revisando la vigencia y autoría (contexto).
```

### 10 — La prueba de las fuentes externas

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["referencias", "evidencia"]

variables:
  caso: uno_de([["El artículo cita un estudio de la NASA", "verdadero"], ["El artículo dice 'científicos dicen' sin nombres", "falso"], ["El artículo incluye enlaces a documentos oficiales", "verdadero"]])

respuesta: caso[1]

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "En un informe sobre el cambio climático, el texto afirma que 'un grupo de científicos internacionales asegura que el hielo se está derritiendo', pero no proporciona nombres, instituciones ni enlaces a los estudios mencionados. ¿Es esta una evidencia sólida? {caso[1]}"

explicacion: |
  Una fuente confiable debe permitir la trazabilidad. Si una noticia menciona "expertos" o "estudios" de forma genérica sin dar datos específicos para que el lector pueda comprobarlos, es una señal de alerta de desinformación.
```

### 11 — El sesgo de confirmación

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["sesgo", "verificacion", "pensamiento_critico"]

respuesta: verdadero
tipo: vf

enunciado: "El sesgo de confirmación ocurre cuando tendemos a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice."

explicacion: |
  Efectivamente. El sesgo de confirmación es uno de los mayores obstáculos para la verificación de fuentes, ya que nos hace aceptar información falsa solo porque "encaja" con lo que ya pensamos.
```

### 12 — El mito de la apariencia profesional

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["fuentes", "diseño", "desinformacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un sitio web con diseño moderno, tipografía elegante y sin anuncios molestos.", "Es una fuente confiable solo por su estética."], ["Un blog de opinión con diseño simple, pero que cita fuentes académicas y autores expertos.", "Su diseño simple no determina su falta de confiabilidad."]]

opciones_explicitas: ["Es una fuente confiable solo por su estética.", "Su diseño simple no determina su falta de confiabilidad.", "La apariencia visual es el único indicador de veracidad."]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Si analizamos el siguiente caso: {escenarios[escenario_idx][0]} ¿Cuál es la conclusión correcta sobre su confiabilidad?"

explicacion: |
  La estética de un sitio web (colores, logos, diseño) es fácilmente replicable y no garantiza que la información sea verídica. La confiabilidad se basa en la evidencia, las fuentes y la autoría, no en el diseño gráfico.
```

### 13 — Pasos para la verificación

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion", "pasos"]

opciones_explicitas: ["Verificar la autoría y sus credenciales", "Buscar la misma noticia en otras fuentes", "Analizar la fecha de publicación para evitar noticias viejas"]

respuesta_orden: ["Verificar la autoría y sus credenciales", "Buscar la misma noticia en otras fuentes", "Analizar la fecha de publicación para evitar noticias viejas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia sospechosa antes de compartirla:"

explicacion: |
  El proceso correcto implica: 1. Ver quién lo dice (autoría), 2. Ver si otros lo confirman (triangulación) y 3. Ver si la información es actual (temporalidad). Compartir sin verificar es parte del problema de la desinformación.
```

### 14 — El uso de la fecha en la desinformación

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["contexto", "temporalidad", "fake_news"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Una noticia real de hace 5 años sobre un desastre natural.", "falsa"], ["Una noticia real de ayer sobre un desastre natural.", "verdadera"]]

respuesta: casos[caso_idx][1]
tipo: completar

pasos:
  - "Identifica el contenido de la noticia."
  - "Observa la fecha de publicación."

enunciado: "{casos[caso_idx][0]} Si se está difundiendo hoy como si describiera algo actual, la información es considerada ___ para el contexto presente."

respuestas_validas:
  - "falsa"
  - "verdadera"

explicacion: |
  La descontextualización temporal es una técnica común de desinformación. Una noticia puede ser real en su momento, pero si se presenta como actual para manipular la opinión, pierde su veracidad contextual.
```

### 15 — La trampa de los titulares sensacionalistas

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["clickbait", "titulares", "verificacion"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["'¡Increíble! Científicos descubren la cura definitiva para todo con solo un limón.'", "Clickbait"], ["'Estudio de la Universidad de Oxford analiza el impacto del consumo de cítricos en la salud.'", "Informativo"]]

opciones_explicitas: ["Clickbait", "Informativo"]

respuesta: ejemplos[ejemplo_idx][1]
tipo: mc

enunciado: "Analiza el siguiente titular: {ejemplos[ejemplo_idx][0]}. ¿Qué tipo de contenido representa principalmente?"

explicacion: |
  Los titulares que usan lenguaje hiperbólico, exclamaciones o promesas de soluciones mágicas suelen ser 'clickbait'. Su objetivo es generar clics mediante la emoción, no informar con precisión.
```

### 16 — Fuente confiable vs. Opinión

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["verificacion", "fuentes"]

tipo: mc
opciones_explicitas: ["Una fuente confiable presenta datos verificables y evidencia, mientras que una opinión es una visión subjetiva sin necesidad de pruebas.", "Una fuente confiable es siempre un libro, mientras que una opinión es siempre un comentario en redes sociales.", "No hay diferencia, ambas deben ser tomadas como verdades absolutas.", "Una fuente confiable solo la tiene un experto, la opinión es de cualquier persona."]

respuesta: "Una fuente confiable presenta datos verificables y evidencia, mientras que una opinión es una visión subjetiva sin necesidad de pruebas."

enunciado: "Al evaluar la calidad de la información, ¿cuál es la principal distinción entre una fuente confiable y una simple opinión?"

explicacion: |
  La confiabilidad se basa en la evidencia, el método y la capacidad de ser contrastada, mientras que la opinión refleja un punto de vista personal que no necesariamente requiere sustento empírico.
```

### 17 — Veracidad vs. Credibilidad

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["conceptos", "verificacion"]

variables:
  escenario: uno_de([["un sitio web con diseño profesional pero noticias falsas", "falso"], ["un blog de un experto con datos citados", "verdadero"]])

tipo: completar
respuesta: escenario[1]

enunciado: "Si un sitio web tiene una apariencia profesional y un diseño impecable, ¿podemos afirmar que su información es necesariamente verdadera?"

explicacion: |
  No. La apariencia (credibilidad visual) no garantiza la veracidad de los contenidos. La veracidad requiere verificar los datos y las fuentes citadas.
```

### 18 — Información vs. Desinformación

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["desinformacion", "fake_news"]

tipo: completar
respuestas_validas:
  - "desinformación"

enunciado: "A diferencia de la información errónea (que puede ser un error involuntario), la ___ es información falsa creada deliberadamente para engañar o manipular."

explicacion: |
  La desinformación tiene una intención maliciosa de causar daño o manipular la opinión pública, mientras que el error es una equivocación sin dolo.
```

### 19 — Pasos para la verificación

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["metodologia", "verificacion"]

tipo: ordenar
opciones_explicitas: ["Identificar la fuente y el autor", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Analizar la intención del mensaje"]

respuesta_orden: ["Identificar la fuente y el autor", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Analizar la intención del mensaje"]

enunciado: "Ordena los pasos lógicos para realizar un proceso de verificación de una noticia antes de compartirla:"

explicacion: |
  Un proceso de verificación efectivo comienza por saber quién lo dice, luego ver si otros lo confirman, revisar la actualidad del dato y finalmente entender por qué se publica.
```

### 20 — Fuente Primaria vs. Secundaria

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["tipos_de_fuente", "investigacion"]

tipo: mc
opciones_explicitas: ["La fuente primaria es el testimonio directo del hecho, mientras que la secundaria es una interpretación o análisis de ese hecho.", "La fuente primaria siempre es digital y la secundaria es siempre en papel.", "La fuente primaria es la que tiene más seguidores en redes sociales.", "La fuente secundaria es siempre más confiable que la primaria."]

respuesta: "La fuente primaria es el testimonio directo del hecho, mientras que la secundaria es una interpretación o análisis de ese hecho."

enunciado: "¿Qué distingue fundamentalmente a una fuente primaria de una fuente secundaria en un proceso de investigación?"

explicacion: |
  La fuente primaria es el objeto o testimonio original (un video del evento, un documento oficial), mientras que la secundaria es el contenido que habla sobre esa fuente (una noticia que analiza el video).
```

### 21 — Verificación de autoría

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["autoría", "fuentes", "verificación"]

variables:
  datos: [["Un post de un influencer sin biografía en un blog personal", "falso"], ["Un artículo de una revista científica con autores académicos", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Analiza el siguiente escenario: {datos[idx][0]}. ¿Es esta una fuente de información confiable para un trabajo académico?"

explicacion: |
  Para que una fuente sea confiable, debe tener un autor identificable, respaldo institucional o académico y una trayectoria comprobable en el tema.
```

### 22 — El método de triangulación

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["triangulación", "verificación"]

variables:
  datos: [["Encuentras una noticia impactante en una red social que nadie más reporta", "falso"], ["Encuentras la misma noticia en tres medios de comunicación con prestigio y diferentes perspectivas", "verdadero"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["falso", "verdadero"]

enunciado: "Si te encuentras en la siguiente situación: {datos[idx][0]}. ¿Se está cumpliendo el principio de triangulación de información para verificar la veracidad?"

explicacion: |
  La triangulación consiste en contrastar una información con múltiples fuentes independientes y confiables para confirmar su veracidad.
```

### 23 — Pasos para evaluar una web

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodología", "evaluación"]

respuesta_orden: ["Revisar la fecha de publicación", "Verificar la autoría y sus credenciales", "Contrastar la información con otras fuentes"]
tipo: ordenar

opciones_explicitas: ["Revisar la fecha de publicación", "Verificar la autoría y sus credenciales", "Contrastar la información con otras fuentes"]

enunciado: "Ordena los pasos lógicos para evaluar la confiabilidad de un artículo digital antes de compartirlo:"

explicacion: |
  Primero se mira la actualidad (fecha), luego quién lo dice (autor) y finalmente si otros lo confirman (contraste).
```

### 24 — Identificación de sesgos

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["sesgo", "objetividad"]

variables:
  datos: [["Un sitio web de noticias que usa solo adjetivos de opinión extrema y no cita fuentes", "sesgado"], ["Un reporte técnico que presenta datos estadísticos y cita estudios previos", "objetivo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar

respuestas_validas:
  - "sesgado"
  - "objetivo"

enunciado: "Observa el siguiente ejemplo: {datos[idx][0]}. La información presentada es de carácter _______."

explicacion: |
  La presencia de lenguaje cargado emocionalmente o la falta de evidencia externa son indicadores claros de sesgo informativo.
```

### 25 — El dominio de la URL

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["url", "seguridad"]

variables:
  datos: [["Un sitio que termina en .edu.ar o .gov.ar", "confiable"], ["Un sitio que imita a un diario famoso pero termina en .xyz", "no confiable"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["confiable", "no confiable"]

enunciado: "Si accedes a un sitio web con la siguiente característica: {datos[idx][0]}. ¿Qué nivel de confianza inicial le otorgas al dominio?"

explicacion: |
  Los dominios institucionales (.edu, .gov) suelen tener mayor rigor y control de contenido que dominios genéricos o de bajo costo (.xyz, .info).
```
