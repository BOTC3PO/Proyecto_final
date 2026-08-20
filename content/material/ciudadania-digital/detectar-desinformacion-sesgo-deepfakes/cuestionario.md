# Ciudadania Digital — Detectar desinformacion sesgo deepfakes (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Deepfake

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "deepfake", "desinformacion"]

respuesta: "deepfake"
tipo: completar
respuestas_validas:
  - "deepfake"

enunciado: "El término ___ se refiere a contenido audiovisual (video o audio) falsificado mediante inteligencia artificial para suplantar la identidad de una persona."

explicacion: |
  Un deepfake utiliza técnicas de aprendizaje profundo (deep learning) para crear contenido altamente realista que muestra a personas diciendo o haciendo cosas que nunca ocurrieron.
```

### 2 — Sesgo en la información

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "informacion", "critica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un titular dice: 'Científicos confirman que el chocolate cura el acné'", "Científicos confirman que el chocolate cura el acné"], ["Un titular dice: 'El 90% de los expertos afirma que el chocolate es malo'", "El 90% de los expertos afirma que el chocolate es malo"]]

tipo: mc
opciones_explicitas: ["Presentación objetiva (datos neutrales)", "Sesgo de confirmación o manipulación"]

respuesta: "Sesgo de confirmación o manipulación"

enunciado: "Analiza el siguiente titular: '{escenarios[escenario_idx][0]}'. ¿Qué tipo de sesgo o manipulación presenta?"

explicacion: |
  El sesgo en la presentación ocurre cuando se seleccionan datos o se redactan titulares de forma que se induce al lector hacia una conclusión específica, omitiendo el contexto o exagerando hechos.
```

### 3 — Veracidad de los Deepfakes

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "verdad", "falsedad"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que un video de un político diciendo algo polémico es siempre una prueba irrefutable de la verdad debido a la tecnología actual?"

explicacion: |
  Falso. Debido al avance de la IA generativa, los deepfakes pueden crear videos extremadamente realistas, por lo que siempre se debe verificar la fuente original.
```

### 4 — Pasos para verificar información

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["verificacion", "metodo", "ordenar"]

respuesta_orden: ["Identificar la fuente", "Contrastar con otros medios", "Analizar el contenido y sesgos"]
tipo: ordenar
opciones_explicitas: ["Identificar la fuente", "Contrastar con otros medios", "Analizar el contenido y sesgos"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia es desinformación:"

pasos:
  - "Verificar quién publica la información."
  - "Buscar la misma noticia en medios de comunicación confiables."
  - "Evaluar si el lenguaje es emocional o manipulador."

explicacion: |
  La verificación requiere un método sistemático: primero saber de dónde viene, luego ver si otros lo confirman y finalmente analizar la calidad del mensaje.
```

### 5 — Elementos de un Deepfake

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "tecnologia", "audio"]

respuesta: "audio"
tipo: mc
opciones_explicitas: ["audio", "texto", "impresión"]

enunciado: "Además de la imagen, ¿qué otro elemento puede ser falsificado mediante IA para crear un deepfake convincente?"

explicacion: |
  Los deepfakes pueden manipular tanto la imagen (video) como la voz (audio), permitiendo que una persona parezca decir algo que nunca dijo.
```

### 6 — Identificación de sesgo en titulares

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "basico"
  tags: ["sesgo", "titulares", "critica"]

enunciado: "Un portal de noticias publica el siguiente titular: 'El polémico candidato X propone medidas que podrían destruir la economía nacional'. Este titular presenta un ___ evidente, ya que utiliza adjetivos con carga emocional para influir en la opinión del lector."

respuestas_validas:
  - "sesgo de confirmación"
  - "sesgo de presentación"
  - "sesgo de encuadre"
respuesta: "sesgo de presentación"
tipo: completar

explicacion: |
  El titular utiliza palabras con fuerte carga negativa ('polémico', 'destruir') para guiar la interpretación del lector hacia una conclusión específica, lo cual es un ejemplo de sesgo en la presentación de la información.
```

### 7 — Verificación de Deepfakes

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "intermedio"
  tags: ["ia", "video", "falsificacion"]

enunciado: "Se observa un video de un líder político diciendo algo extremadamente inusual. Al analizarlo con cuidado, se nota que el parpadeo es irregular y los movimientos de la boca no coinciden perfectamente con el audio. ¿Es este video un Deepfake?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Los deepfakes son contenidos audiovisuales creados o manipulados mediante inteligencia artificial para que parezca que alguien dice o hace algo que nunca ocurrió. Las inconsistencias en el parpadeo o la sincronización labial son señales comunes de manipulación.
```

### 8 — Pasos para verificar una noticia sospechosa

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia viral en redes sociales es real o desinformación:"

opciones_explicitas: ["1. Buscar la noticia en fuentes oficiales o medios de prestigio", "2. Analizar el origen y la fecha de la publicación", "3. Verificar si la imagen o video tiene marcas de manipulación", "4. Contrastar la información con otros medios independientes"]
respuesta_orden: ["1. Buscar la noticia en fuentes oficiales o medios de prestigio", "2. Analizar el origen y la fecha de la publicación", "3. Verificar si la imagen o video tiene marcas de manipulación", "4. Contrastar la información con otros medios independientes"]
tipo: ordenar

explicacion: |
  Para combatir la desinformación, es fundamental seguir un proceso de triangulación: verificar la fuente, el contexto temporal, la integridad del contenido multimedia y la concordancia con otras fuentes confiables.
```

### 9 — El impacto de los algoritmos de personalización

```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_confirmacion"
  nivel: "avanzado"
  tags: ["algoritmos", "burbujas_filtro"]

variables:
  escenario_idx: uno_de([0, 1])
  casos: [["Usuario A recibe solo noticias que refuerzan su opinión política.", "Usuario B recibe noticias de una variedad de perspectivas distintas."], ["sesgo de confirmación", "pensamiento crítico"]]

enunciado: "En el caso del {casos[escenario_idx][0]}, el usuario está atrapado en una 'burbuja de filtro' que alimenta su {casos[escenario_idx][1]}."

respuesta: casos[escenario_idx][1]
tipo: completar

explicacion: |
  Los algoritmos de las redes sociales tienden a mostrarnos contenido similar a lo que ya nos gusta, creando una cámara de eco que refuerza nuestros prejuicios y nos impide ver otros puntos de vista.
```

### 10 — Verdad o Falso: IA Generativa

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "basico"
  tags: ["ia", "tecnologia"]

enunciado: "La tecnología de Deepfake requiere obligatoriamente que una persona real haya grabado el video original para luego ser manipulada por IA."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: completar
explicacion: |
  Aunque existen modelos que pueden generar rostros desde cero, la mayoría de los deepfakes conocidos se basan en la técnica de 'face-swapping' (intercambio de rostros) sobre un video de una persona real para lograr un realismo extremo.
```

### 11 — Sesgo de confirmación

```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_en_la_informacion"
  nivel: "basico"
  tags: ["sesgo", "desinformacion", "pensamiento_critico"]

respuesta: "sesgo de confirmación"
tipo: completar
respuestas_validas:
  - "sesgo de confirmación"

enunciado: "Cuando una persona tiende a buscar, interpretar y recordar únicamente la información que apoya sus creencias previas, ignorando las evidencias que las contradicen, está experimentando el ___."

explicacion: |
  El sesgo de confirmación es un error cognitivo que nos hace ver solo lo que queremos ver, reforzando nuestras ideas previas y dificultando el pensamiento crítico.
```

### 12 — Identificación de Deepfakes

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "intermedio"
  tags: ["ia", "deepfake", "video"]

variables:
  es_falso: uno_de([verdadero, falso])

respuesta: es_falso
tipo: completar
enunciado: "Si un video muestra a un líder político diciendo palabras que nunca pronunció, utilizando una técnica de IA para superponer su rostro y voz en otro cuerpo, ¿es este contenido un deepfake? {es_falso}"

explicacion: |
  Los deepfakes son contenidos audiovisuales generados o manipulados mediante inteligencia artificial para crear representaciones realistas de personas diciendo o haciendo cosas que nunca ocurrieron.
```

### 13 — El error de la "evidencia visual"

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "avanzado"
  tags: ["evidencia", "ia", "verificacion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Ante la existencia de los deepfakes, la premisa 'ver para creer' (asumir que un video es real solo por ser una imagen en movimiento) sigue siendo una regla de verificación confiable en la era de la IA."

explicacion: |
  En la era de la IA generativa, la evidencia visual ya no es garantía de verdad. Los deepfakes pueden replicar gestos, voces y expresiones con un realismo asombroso.
```

### 14 — Pasos para verificar una noticia

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_datos"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion", "pasos"]

respuesta_orden: ["buscar la fuente original", "contrastar con otros medios", "analizar posibles sesgos"]
tipo: ordenar
opciones_explicitas: ["buscar la fuente original", "contrastar con otros medios", "analizar posibles sesgos"]

enunciado: "Para verificar si una noticia es real o contiene un sesgo de presentación, se debe seguir este orden lógico de análisis:"

explicacion: |
  Primero se debe encontrar el origen (fuente), luego ver si otros medios serios lo reportan y finalmente analizar si el lenguaje usado intenta manipular la opinión del lector.
```

### 15 — Sesgo de presentación

```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_en_la_informacion"
  nivel: "basico"
  tags: ["lenguaje", "manipulacion", "sesgo"]

respuesta: "manipulación"
tipo: completar
respuestas_validas:
  - "manipulación"

enunciado: "Cuando un medio de comunicación utiliza adjetivos cargados de juicio o selecciona solo los datos que favorecen una postura para influir en la opinión pública, está realizando una ___ de la información."

explicacion: |
  La manipulación mediante el sesgo de presentación no siempre es una mentira directa, sino una selección parcial de la realidad para guiar la percepción del receptor.
```

### 16 — Sesgo de confirmación vs. Desinformación

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "basico"
  tags: ["sesgo", "desinformacion"]

tipo: mc
opciones_explicitas: ["La desinformación es el error involuntario de una persona, mientras que el sesgo es la manipulación deliberada de datos.", "El sesgo de confirmación es la tendencia a aceptar información que refuerza nuestras creencias, mientras que la desinformación es información falsa creada para engañar.", "El sesgo es siempre una mentira absoluta, mientras que la desinformación es solo una opinión subjetiva.", "No hay diferencia, ambos términos se refieren a noticias falsas en redes sociales."]

respuesta: "El sesgo de confirmación es la tendencia a aceptar información que refuerza nuestras creencias, mientras que la desinformación es información falsa creada para engañar."

enunciado: "¿Cuál es la distinción principal entre el sesgo de confirmación y la desinformación?"

explicacion: |
  El sesgo de confirmación es un proceso cognitivo donde filtramos la realidad según lo que ya creemos. La desinformación es un acto externo de crear contenido falso con el fin de manipular.
```

### 17 — Naturaleza de los Deepfakes

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["deepfakes", "ia"]

tipo: vf
respuesta: falso

enunciado: "¿Un deepfake se distingue de una edición de video tradicional (como un montaje de cine) principalmente porque el contenido es creado por un humano con herramientas de software sin intervención de algoritmos de aprendizaje profundo?"

explicacion: |
  Falso. Lo que define a un deepfake es precisamente el uso de Inteligencia Artificial (redes neuronales generativas) para crear o manipular contenido de forma hiperrealista.
```

### 18 — Elementos de una noticia manipulada

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["analisis", "noticias"]

tipo: completar
respuestas_validas:
  - "titular"
  - "contexto"
  - "fuente"

enunciado: "Para detectar sesgos en la presentación de una noticia, debemos verificar el ___ (que no sea sensacionalista), el ___ (que la información sea verídica) y la ___ (que sea un medio confiable)."

explicacion: |
  Analizar el titular, el contexto y la fuente es el método básico para identificar si una noticia intenta manipular emocionalmente al lector.
```

### 19 — El proceso de creación de un Deepfake

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "avanzado"
  tags: ["ia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Recolección de datos (imágenes/audio)", "Entrenamiento del modelo de IA", "Generación del contenido sintético", "Difusión del contenido"]

enunciado: "Ordena los pasos lógicos para la creación y propagación de un deepfake:"

explicacion: |
  Primero se necesitan los datos de entrenamiento, luego la IA aprende esos patrones, después se genera el video y finalmente se distribuye en la red.
respuesta_orden: ["Recolección de datos (imágenes/audio)", "Entrenamiento del modelo de IA", "Generación del contenido sintético", "Difusión del contenido"]
```

### 20 — Veracidad vs. Sesgo de presentación

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["sesgo", "veracidad"]

tipo: mc
opciones_explicitas: ["El sesgo de presentación altera la percepción de un hecho real sin necesidad de inventar datos falsos.", "El sesgo de presentación siempre implica que la información es 100% mentira.", "La diferencia es que el sesgo solo ocurre en medios escritos y la desinformación en video.", "No existe diferencia entre presentar un hecho con carga emocional y mentir."]

respuesta: "El sesgo de presentación altera la percepción de un hecho real sin necesidad de inventar datos falsos."

enunciado: "En el caso de un medio que utiliza adjetivos altamente subjetivos para describir un evento real, ¿qué está ocurriendo?"

explicacion: |
  Se está aplicando un sesgo de presentación. La información puede ser real (el hecho ocurrió), pero la forma de comunicarla está diseñada para inclinar la opinión del receptor.
```

### 21 — Identificación de Sesgo en Noticias

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "noticias", "critica"]

variables:
  datos: [["Un titular dice: 'Científicos confirman que el café es la cura de todo'", "Sesgo de generalización"], ["Un titular dice: 'El 90% de la gente odia esta nueva ley'", "Sesgo de generalización"], ["Un titular dice: 'Solo los que saben de política entenderán esto'", "Sesgo de exclusión"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sesgo de generalización", "Sesgo de exclusión", "Sesgo de confirmación", "Sesgo de autoridad"]

enunciado: "Analiza el siguiente titular: '{datos[idx][0]}'. ¿Qué tipo de sesgo presenta?"

explicacion: |
  El titular utiliza una afirmación extrema o excluyente para manipular la percepción del lector, lo cual es una característica del sesgo informativo.
```

### 22 — Concepto de Deepfakes

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "deepfakes", "video"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'deepfake' es un contenido audiovisual (video o audio) creado o manipulado mediante inteligencia artificial para que parezca que una persona dice o hace algo que nunca ocurrió."

explicacion: |
  Correcto. Los deepfakes utilizan redes neuronales para sustituir rostros o clonar voces de manera altamente realista.
```

### 23 — Análisis de Evidencia en Imágenes

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "avanzado"
  tags: ["verificacion", "ia", "pistas"]

variables:
  pista_falsa: uno_de(["parpadeo poco natural", "sombras inconsistentes", "bordes difusos en el cuello"])
  idx: uno_de([0, 1, 2])

respuesta: "pista_falsa"
tipo: completar
respuestas_validas:
  - "parpadeo poco natural"
  - "sombras inconsistentes"
  - "bordes difusos en el cuello"

enunciado: "Al verificar un video sospechoso de ser un deepfake, un detalle técnico común que delata la manipulación es el ___."

explicacion: |
  {pista_falsa} es una de las inconsistencias visuales más comunes producidas por algoritmos de generación de video actuales.
```

### 24 — Pasos para Verificar una Noticia

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_proceso"
  nivel: "intermedio"
  tags: ["verificacion", "metodo", "pasos"]

respuesta_orden: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor", "Analizar si el contenido apela a emociones extremas"]
tipo: ordenar
opciones_explicitas: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor", "Analizar si el contenido apela a emociones extremas"]

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia viral en redes sociales:"

explicacion: |
  La verificación efectiva requiere ir desde la fuente primaria hacia el análisis crítico del tono y la actualidad de la información.
```

### 25 — Identificación de Manipulación Visual

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "intermedio"
  tags: ["ia", "audio", "clonacion"]

variables:
  datos: [["Un audio de un político diciendo algo escandaloso", "audio"], ["Un video de un famoso recomendando una estafa", "video"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["audio", "video", "texto", "imagen"]

enunciado: "Si se utiliza IA para clonar la voz de un líder mundial con el fin de desinformar, estamos ante un deepfake de tipo {datos[idx][1]}."

explicacion: |
  El término deepfake se aplica tanto a la manipulación de imagen (video) como de la voz (audio).
```
