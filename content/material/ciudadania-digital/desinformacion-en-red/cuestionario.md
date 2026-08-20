# Ciudadania Digital — Desinformacion en red (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de desinformación

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

tipo: mc
opciones_explicitas: ["Información verídica compartida con buena intención", "Información falsa o engañosa difundida deliberadamente", "Información técnica de difícil comprensión", "Opiniones personales en foros de debate"]

respuesta: "Información falsa o engañosa difundida deliberadamente"

enunciado: "La desinformación se define principalmente como:"

explicacion: |
  La desinformación es información falsa o engañosa que se difunde, muchas veces con la intención de engañar o manipular, a diferencia de la información errónea (misinformation) que puede ser un error sin mala intención.
```

### 2 — Identificación de intención

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["intencionalidad", "caracteristicas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un error involuntario al compartir un dato", "Error involuntario"], ["un video editado para cambiar el sentido de un discurso", "Desinformación"]]

tipo: mc
opciones_explicitas: ["Error involuntario", "Desinformación", "Noticia real", "Sátira"]

respuesta: escenarios[escenario_idx][1]

enunciado: "Si una persona comparte un dato falso sin saber que lo es, según el escenario: {escenarios[escenario_idx][0]}, se trata de un caso de:"

explicacion: |
  Cuando no hay intención de engañar, se considera error o desinformación involuntaria. La desinformación propiamente dicha requiere la intención de manipular.
```

### 3 — Elementos de una noticia falsa

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["componentes", "verificacion"]

tipo: completar
respuestas_validas:
  - "titulares"
  - "sensacionalismo"
  - "fuentes"

enunciado: "Para detectar desinformación, es vital revisar los ___ exagerados, el uso de ___ para captar atención y la falta de ___ confiables."

explicacion: |
  Las noticias falsas suelen usar titulares impactantes, lenguaje emocional o sensacionalista y carecen de fuentes verificables o expertos que respalden la información.
```

### 4 — El proceso de propagación

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["difusion", "redes_sociales"]

tipo: ordenar
opciones_explicitas: ["Creación del contenido falso", "Difusión viral en redes sociales", "Impacto en la opinión pública", "Reacción de los usuarios (compartir/comentar)"]

enunciado: "Ordena cronológicamente el proceso típico de propagación de una campaña de desinformación:"

explicacion: |
  El ciclo comienza con la creación del engaño, seguido de su viralización masiva, lo que genera una reacción en cadena de usuarios que lo comparten, terminando en un impacto social real.
respuesta_orden: ["Creación del contenido falso", "Difusión viral en redes sociales", "Impacto en la opinión pública", "Reacción de los usuarios (compartir/comentar)"]
```

### 5 — Verificación de datos

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["fact_checking", "herramientas"]

variables:
  metodo_idx: uno_de([0, 1, 2, 3])
  metodos: ["Buscar la noticia en sitios oficiales", "Verificar en sitios de fact-checking", "Revisar la fecha de publicación", "Analizar la fuente original"]

tipo: mc
opciones_explicitas: ["Buscar la noticia en sitios oficiales", "Verificar en sitios de fact-checking", "Revisar la fecha de publicación", "Analizar la fuente original"]

respuesta: metodos[metodo_idx]

enunciado: "Ante una noticia sospechosa, una de las acciones más efectivas es: {metodos[metodo_idx]}"

explicacion: |
  El uso de herramientas de fact-checking (verificación de hechos) es una de las defensas más robustas contra la desinformación en la era digital.
```

### 6 — Desinformación vs Error

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["conceptos_clave", "veracidad"]

tipo: mc
opciones_explicitas: ["Desinformación", "Mala información (Error honesto)", "Noticia real"]

enunciado: "Si una persona comparte una noticia falsa con la intención deliberada de engañar a la audiencia y causar daño, estamos ante un caso de:"

respuesta: "Desinformación"

explicacion: |
  La desinformación implica intención de engaño. Si no hay intención de engañar, sino un error involuntario, se considera mala información o error honesto.
```

### 7 — Identificación de intención

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["intencionalidad", "analisis"]

variables:
  caso: uno_de([["Un usuario comparte un meme con datos falsos porque cree que es verdad.", "Error honesto"], ["Un bot difunde una noticia falsa para manipular una elección.", "Desinformación"], ["Un periodista comete un error tipográfico en un número sin querer.", "Error honesto"]])

tipo: mc
opciones_explicitas: ["Desinformación", "Error honesto"]

enunciado: "Analiza el siguiente escenario: {caso[0]}. ¿Qué tipo de contenido es?"

respuesta: caso[1]

explicacion: |
  En el caso de {caso[0]}, la clave es que el usuario cree que es verdad, por lo tanto, carece de la intención de engañar, clasificándose como error honesto.
```

### 8 — Elementos de la desinformación

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["caracteristicas"]

tipo: completar
respuestas_validas:
  - "intencionalidad"
  - "veracidad"

enunciado: "La diferencia fundamental entre la desinformación y el error honesto radica en la _______, ya que la desinformación carece de _______."

respuesta: "intencionalidad"

explicacion: |
  La desinformación se define por la voluntad de engañar (intencionalidad), mientras que el error honesto es accidental.
```

### 9 — Clasificación de escenarios

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["clasificacion", "escenarios"]

variables:
  escenario: uno_de([["Un sitio web crea una noticia falsa para ganar dinero con publicidad.", "Desinformación"], ["Un familiar reenvía un mensaje de WhatsApp que leyó sin verificar.", "Error honesto"]])

tipo: mc
opciones_explicitas: ["Desinformación", "Error honesto"]

enunciado: "Escenario: {escenario[0]}. Clasifica este comportamiento:"

respuesta: escenario[1]

explicacion: |
  Si el objetivo es el lucro mediante el engaño, existe una intención clara de manipular, lo que constituye desinformación.
```

### 10 — Secuencia de verificación

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["prevencion", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Dudar de la fuente", "Contrastar con medios oficiales", "Verificar la fecha de publicación", "No compartir hasta confirmar"]

respuesta_orden: ["Dudar de la fuente", "Contrastar con medios oficiales", "Verificar la fecha de publicación", "No compartir hasta confirmar"]

enunciado: "Para evitar propagar desinformación o errores, sigue este orden lógico de verificación de una noticia sospechosa:"

explicacion: |
  El proceso ideal comienza con la duda crítica, sigue con la contrastación de fuentes, la revisión de metadatos (como la fecha) y culmina con la acción de no difundir hasta la certeza.
```

### 11 — El motor de la viralidad

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["algoritmos", "viralidad"]

tipo: mc
opciones_explicitas: ["La veracidad de la información", "El compromiso (engagement) y la emoción", "La calidad técnica del contenido", "El rigor periodístico"]

respuesta: "El compromiso (engagement) y la emoción"

enunciado: "Los algoritmos de las redes sociales están diseñados principalmente para maximizar el tiempo de permanencia del usuario. Por ello, suelen priorizar contenido que genera un alto nivel de ___."

explicacion: |
  Los algoritmos de recomendación priorizan contenidos que provocan reacciones fuertes (ira, sorpresa, miedo) porque esto genera más 'engagement' (likes, compartidos, comentarios), permitiendo que la desinformación se propague más rápido que los hechos neutrales.
```

### 12 — El fenómeno de la cámara de eco

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["camaras_de_eco", "sesgo_confirmacion"]

variables:
  escenario: uno_de([["un usuario que solo ve noticias que refuerzan sus prejuicios", "cámaras de eco"], ["un periodista que verifica cada dato antes de publicar", "periodismo tradicional"], ["un sistema de moderación de contenidos automático", "moderación algorítmica"]])

tipo: completar
respuestas_validas:
  - "cámaras de eco"
  - "periodismo tradicional"
  - "moderación algorítmica"

enunciado: "Cuando los algoritmos nos muestran únicamente información que coincide con nuestras creencias previas, creando un entorno donde nuestras opiniones se ven constantemente reforzadas y aisladas de opiniones contrarias, estamos ante el fenómeno de las {escenario[0]}."

explicacion: |
  Las cámaras de eco ocurren cuando los filtros de personalización nos encierran en burbujas informativas, impidiéndonos ver la diversidad de perspectivas y facilitando que la desinformación que confirma nuestros sesgos se acepte sin cuestionar.
```

### 13 — Verificación vs. Inmediatez

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["verificacion", "editorial"]

tipo: mc
opciones_explicitas: ["Falta de verificación editorial", "Exceso de regulación estatal", "Aumento de la alfabetización digital", "Uso de fuentes primarias"]

respuesta: "Falta de verificación editorial"

enunciado: "A diferencia de los medios de comunicación tradicionales, donde un editor revisa la información antes de su publicación, en las redes sociales la ausencia de ___ permite que noticias falsas se difundan de forma masiva e inmediata."

explicacion: |
  En las redes sociales, cualquier usuario puede publicar contenido sin pasar por un proceso de edición, contrastación de fuentes o verificación de hechos, lo que permite que la desinformación viaje a la misma velocidad que la información real.
```

### 14 — El impacto emocional

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["emociones", "psicologia"]

tipo: mc
opciones_explicitas: ["Neutralidad", "Indiferencia", "Alta carga emocional", "Aburrimiento"]

respuesta: "Alta carga emocional"

enunciado: "La desinformación suele ser diseñada para apelar a las emociones del usuario. ¿Qué tipo de contenido suele tener mayor probabilidad de volverse viral debido a su carga emocional?"

explicacion: |
  El contenido que genera indignación o miedo es el que más rápido se comparte. La carga emocional actúa como un combustible para la propagación algorítmica, haciendo que la desinformación sea mucho más "contagiosa" que la información factual.
```

### 15 — El ciclo de la desinformación

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["proceso", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Creación de noticia falsa con carga emocional", "Difusión masiva por algoritmos de engagement", "Formación de cámaras de eco en usuarios", "Refuerzo de sesgos y polarización social"]

enunciado: "Ordena la secuencia lógica de cómo la desinformación escala desde su creación hasta su impacto en la sociedad:"

explicacion: |
  El proceso comienza con la creación de un mensaje diseñado para impactar emocionalmente; el algoritmo lo detecta y lo impulsa para ganar engagement; esto crea burbujas donde solo se escucha lo mismo (cámaras de eco), culminando en una sociedad polarizada que acepta la mentira como verdad.
respuesta_orden: ["Creación de noticia falsa con carga emocional", "Difusión masiva por algoritmos de engagement", "Formación de cámaras de eco en usuarios", "Refuerzo de sesgos y polarización social"]
```

### 16 — El titular alarmista

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["titulares", "emocionalidad"]

tipo: mc
opciones_explicitas: ["Un titular que usa mayúsculas excesivas y signos de exclamación para generar miedo", "Un titular que resume la noticia de forma neutra y objetiva", "Un titular que cita una fuente oficial de noticias"]

respuesta: "Un titular que usa mayúsculas excesivas y signos de exclamación para generar miedo"

enunciado: "Al navegar por redes sociales, ¿cuál de los siguientes tipos de titulares suele ser una señal de alerta de posible desinformación?"

explicacion: |
  Los titulares diseñados para provocar una respuesta emocional fuerte (miedo, ira o sorpresa) suelen ser herramientas de 'clickbait' para propagar noticias falsas o desinformación.
```

### 17 — Verificación de la fuente

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["fuente", "verificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un mensaje de WhatsApp que dice 'Científicos de una universidad desconocida descubren la cura de todo'", "fuente_falsa"], ["Un artículo en el sitio web oficial de la ONU sobre cambio climático", "fuente_confiable"]]

tipo: mc
opciones_explicitas: ["Verificar si la fuente es una institución reconocida o un sitio oficial", "Compartir la información inmediatamente para que otros la vean", "Creer la noticia solo porque tiene muchos 'likes'"]

respuesta: "Verificar si la fuente es una institución reconocida o un sitio oficial"

enunciado: "Si recibes la siguiente información: {escenarios[escenario_idx][0]}, ¿cuál es la primera acción recomendada para verificar su veracidad?"

explicacion: |
  La verificación de la fuente es el primer paso fundamental. Si la fuente es anónima o no tiene reputación, la probabilidad de que sea desinformación es muy alta.
```

### 18 — El efecto eco

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["triangulacion", "medios"]

tipo: completar
respuestas_validas:
  - "otros medios confiables"

enunciado: "Para confirmar si una noticia es real, una estrategia efectiva es buscar si ___ reportan la misma información."

explicacion: |
  La triangulación de la información mediante el uso de múltiples medios de comunicación con estándares periodísticos probados ayuda a descartar noticias falsas que solo circulan en redes sociales.
```

### 19 — Pasos para el chequeo de datos

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
respuesta_orden: ["Leer el contenido completo de la noticia", "Verificar la fecha de publicación de la información", "Contrastar la noticia en buscadores y medios oficiales"]
```

### 20 — Análisis de sesgo

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["sesgo", "emocion"]

tipo: completar
respuestas_validas:
  - "emocional"

enunciado: "Si una noticia utiliza un lenguaje altamente cargado de adjetivos negativos o positivos para influir en tu opinión, estás ante un contenido con sesgo ___."

explicacion: |
  El lenguaje emocional y cargado de adjetivos es una técnica para anular el pensamiento crítico del lector y dirigirlo hacia una postura específica, característica de la desinformación.
```

### 21 — El titular sensacionalista

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["clickbait", "identificacion"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["¡Increíble! Un alimento común cura todas las enfermedades según un video viral sin fuentes.", "clickbait"], ["Científicos de la NASA confirman el descubrimiento de agua líquida en Marte.", "informativo"]]

tipo: mc

opciones_explicitas: ["clickbait", "informativo"]

respuesta: datos[escenario_idx][1]

enunciado: "Lees un post en redes sociales que dice: {datos[escenario_idx][0]}. ¿Qué tipo de contenido es?"

explicacion: |
  El contenido es {datos[escenario_idx][1]} porque utiliza lenguaje exagerado y promesas sin sustento científico para captar la atención.
```

### 22 — Verificación de fuentes

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["fuentes", "verificacion"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["Un sitio web llamado 'noticias-reales-ya.xyz' publica una noticia bomba.", "sitio_no_confiable"], ["Un hilo de Twitter de un periodista reconocido con trayectoria.", "fuente_confiable"], ["Un mensaje de WhatsApp reenviado muchas veces sin autor claro.", "fuente_no_confiable"]]

tipo: mc

opciones_explicitas: ["sitio_no_confiable", "fuente_confiable", "fuente_no_confiable"]

respuesta: casos[caso_idx][1]

enunciado: "Se presenta el siguiente escenario: {casos[caso_idx][0]}. ¿Cuál es la categoría de la fuente?"

explicacion: |
  Identificar la procedencia es clave. El caso analizado es una {casos[caso_idx][1]}.
```

### 23 — La fecha de la noticia

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["contexto", "temporalidad"]

tipo: completar

respuestas_validas:
  - "descontextualizado"

enunciado: "Si una noticia antigua se presenta como actual para generar alarma, decimos que el contenido está ___."

explicacion: |
  El contenido está descontextualizado porque se le ha quitado su marco temporal original.
```

### 24 — Pasos para verificar

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion"]

tipo: ordenar

opciones_explicitas: ["Leer el titular", "Buscar la noticia en buscadores", "Contrastar con medios oficiales", "Decidir si es real"]

respuesta_orden: ["Leer el titular", "Buscar la noticia en buscadores", "Contrastar con medios oficiales", "Decidir si es real"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia de redes sociales es verdadera:"

explicacion: |
  La verificación requiere un proceso crítico: primero captar la información, luego investigar su origen y finalmente contrastar antes de concluir.
```

### 25 — El sesgo de confirmación

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["sesgo", "psicologia"]

tipo: completar

respuestas_validas:
  - "sesgo de confirmación"

enunciado: "Cuando una persona tiende a aceptar como verdaderas solo las informaciones que refuerzan sus propias creencias, está siendo víctima del ___."

explicacion: |
  El fenómeno se llama sesgo de confirmación. Es un error cognitivo que facilita la propagación de la desinformación.
```
