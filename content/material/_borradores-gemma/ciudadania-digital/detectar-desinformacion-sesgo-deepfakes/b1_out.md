### 1 — Concepto de Deepfake
```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "deepfake", "desinformacion"]

respuesta: "deepfake"
tipo: completar
respuestas_validas: ["deepfake"]

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
  escenarios: [
    ["Un titular dice: 'Científicos confirman que el chocolate cura el acné'", "Científicos confirman que el chocolate cura el acné"],
    ["Un titular dice: 'El 90% de los expertos afirma que el chocolate es malo'", "El 90% de los expertos afirma que el chocolate es malo"]
  ]

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["Presentación objetiva (datos neutrales)", "Sesgo de confirmación o manipulación"]

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

respuesta: ["Identificar la fuente", "Contrastar con otros medios", "Analizar el contenido y sesgos"]
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