### 1 — Fuente confiable vs. Opinión
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["verificacion", "fuentes"]

tipo: mc
opciones_explicitas: ["Una fuente confiable presenta datos verificables y evidencia, mientras que una opinión es una visión subjetiva sin necesidad de pruebas.", "Una fuente confiable es siempre un libro, mientras que una opinión es siempre un comentario en redes sociales.", "No hay diferencia, ambas deben ser tomadas como verdades absolutas.", "Una fuente confiable solo la tiene un experto, la opinión es de cualquier persona."]

enunciado: "Al evaluar la calidad de la información, ¿cuál es la principal distinción entre una fuente confiable y una simple opinión?"

explicacion: |
  La confiabilidad se basa en la evidencia, el método y la capacidad de ser contrastada, mientras que la opinión refleja un punto de vista personal que no necesariamente requiere sustento empírico.
```

### 2 — Veracidad vs. Credibilidad
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["conceptos", "verificacion"]

variables:
  escenario: uno_de([["un sitio web con diseño profesional pero noticias falsas", "falso"], ["un blog de un experto con datos citados", "verdadero"]])

tipo: vf
respuesta: escenario[1]

enunciado: "Si un sitio web tiene una apariencia profesional y un diseño impecable, ¿podemos afirmar que su información es necesariamente verdadera?"

explicacion: |
  No. La apariencia (credibilidad visual) no garantiza la veracidad de los contenidos. La veracidad requiere verificar los datos y las fuentes citadas.
```

### 3 — Información vs. Desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["desinformacion", "fake_news"]

tipo: completar
respuestas_validas: ["desinformación"]

enunciado: "A diferencia de la información errónea (que puede ser un error involuntario), la ___ es información falsa creada deliberadamente para engañar o manipular."

explicacion: |
  La desinformación tiene una intención maliciosa de causar daño o manipular la opinión pública, mientras que el error es una equivocación sin dolo.
```

### 4 — Pasos para la verificación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["metodologia", "verificacion"]

tipo: ordenar
opciones_explicitas: ["Identificar la fuente y el autor", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Analizar la intención del mensaje"]

respuesta: ["Identificar la fuente y el autor", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Analizar la intención del mensaje"]

enunciado: "Ordena los pasos lógicos para realizar un proceso de verificación de una noticia antes de compartirla:"

explicacion: |
  Un proceso de verificación efectivo comienza por saber quién lo dice, luego ver si otros lo confirman, revisar la actualidad del dato y finalmente entender por qué se publica.
```

### 5 — Fuente Primaria vs. Secundaria
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["tipos_de_fuente", "investigacion"]

tipo: mc
opciones_explicitas: ["La fuente primaria es el testimonio directo del hecho, mientras que la secundaria es una interpretación o análisis de ese hecho.", "La fuente primaria siempre es digital y la secundaria es siempre en papel.", "La fuente primaria es la que tiene más seguidores en redes sociales.", "La fuente secundaria es siempre más confiable que la primaria."]

enunciado: "¿Qué distingue fundamentalmente a una fuente primaria de una fuente secundaria en un proceso de investigación?"

explicacion: |
  La fuente primaria es el objeto o testimonio original (un video del evento, un documento oficial), mientras que la secundaria es el contenido que habla sobre esa fuente (una noticia que analiza el video).
```