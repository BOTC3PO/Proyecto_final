### 1 — Sesgo de confirmación vs. Desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "basico"
  tags: ["sesgo", "desinformacion"]

tipo: mc
opciones_explicitas: ["La desinformación es el error involuntario de una persona, mientras que el sesgo es la manipulación deliberada de datos.", "El sesgo de confirmación es la tendencia a aceptar información que refuerza nuestras creencias, mientras que la desinformación es información falsa creada para engañar.", "El sesgo es siempre una mentira absoluta, mientras que la desinformación es solo una opinión subjetiva.", "No hay diferencia, ambos términos se refieren a noticias falsas en redes sociales."]

enunciado: "¿Cuál es la distinción principal entre el sesgo de confirmación y la desinformación?"

explicacion: |
  El sesgo de confirmación es un proceso cognitivo donde filtramos la realidad según lo que ya creemos. La desinformación es un acto externo de crear contenido falso con el fin de manipular.
```

### 2 — Naturaleza de los Deepfakes
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

### 3 — Elementos de una noticia manipulada
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["analisis", "noticias"]

tipo: completar
respuestas_validas: ["titular", "contexto", "fuente"]

enunciado: "Para detectar sesgos en la presentación de una noticia, debemos verificar el ___ (que no sea sensacionalista), el ___ (que la información sea verídica) y la ___ (que sea un medio confiable)."

explicacion: |
  Analizar el titular, el contexto y la fuente es el método básico para identificar si una noticia intenta manipular emocionalmente al lector.
```

### 4 — El proceso de creación de un Deepfake
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
```

### 5 — Veracidad vs. Sesgo de presentación
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["sesgo", "veracidad"]

variables:
  escenario: uno_de([
    ["Una noticia dice que 'El clima es agradable hoy' (Hecho)", "Verdadero"],
    ["Una noticia dice que 'El clima es maravilloso y perfecto' (Opinión con sesgo)", "Falso"]
  ])

tipo: mc
opciones_explicitas: ["El sesgo de presentación altera la percepción de un hecho real sin necesidad de inventar datos falsos.", "El sesgo de presentación siempre implica que la información es 100% mentira.", "La diferencia es que el sesgo solo ocurre en medios escritos y la desinformación en video.", "No existe diferencia entre presentar un hecho con carga emocional y mentir."]

enunciado: "En el caso de un medio que utiliza adjetivos altamente subjetivos para describir un evento real, ¿qué está ocurriendo?"

explicacion: |
  Se está aplicando un sesgo de presentación. La información puede ser real (el hecho ocurrió), pero la forma de comunicarla está diseñada para inclinar la opinión del receptor.
```