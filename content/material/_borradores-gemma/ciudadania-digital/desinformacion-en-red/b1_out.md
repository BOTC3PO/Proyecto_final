### 1 — Definición de desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

tipo: mc
opciones_explicitas: ["Información verídica compartida con buena intención", "Información falsa o engañosa difundida deliberadamente", "Información técnica de difícil comprensión", "Opiniones personales en foros de debate"]

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
  escenarios: [[["un error involuntario al compartir un dato"], "error"], [["un video editado para cambiar el sentido de un discurso"], "desinformación"]]

tipo: mc
opciones_explicitas: ["Error involuntario", "Desinformación", "Noticia real", "Sátira"]

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
respuestas_validas: ["titulares", "sensacionalismo", "fuentes"]

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
```

### 5 — Verificación de datos
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["fact_checking", "herramientas"]

variables:
  metodo_idx: uno_de([0, 1])
  metodos: [["buscar la noticia en sitios oficiales"], "verificar en sitios de fact-checking", "revisar la fecha de publicación", "analizar la fuente original"]

tipo: mc
opciones_explicitas: ["Buscar la noticia en sitios oficiales", "Verificar en sitios de fact-checking", "Revisar la fecha de publicación", "Analizar la fuente original"]

enunciado: "Ante una noticia sospechosa, una de las acciones más efectivas es: {metodos[metodo_idx]}"

explicacion: |
  El uso de herramientas de fact-checking (verificación de hechos) es una de las defensas más robustas contra la desinformación en la era digital.
```