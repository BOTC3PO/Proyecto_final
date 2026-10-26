### 1 — Desinformación vs Error
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

### 2 — Identificación de intención
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["intencionalidad", "analisis"]

variables:
  caso: uno_de([
    ["Un usuario comparte un meme con datos falsos porque cree que es verdad.", "Error honesto"],
    ["Un bot difunde una noticia falsa para manipular una elección.", "Desinformación"],
    ["Un periodista comete un error tipográfico en un número sin querer.", "Error honesto"]
  ])

tipo: mc
opciones_explicitas: ["Desinformación", "Error honesto"]

enunciado: "Analiza el siguiente escenario: {caso[0]}. ¿Qué tipo de contenido es?"

respuesta: caso[1]

explicacion: |
  En el caso de {caso[0]}, la clave es que el usuario cree que es verdad, por lo tanto, carece de la intención de engañar, clasificándose como error honesto.
```

### 3 — Elementos de la desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["caracteristicas"]

tipo: completar
respuestas_validas: ["intencionalidad", "veracidad"]

enunciado: "La diferencia fundamental entre la desinformación y el error honesto radica en la _______, ya que la desinformación carece de _______."

respuesta: "intencionalidad"

explicacion: |
  La desinformación se define por la voluntad de engañar (intencionalidad), mientras que el error honesto es accidental.
```

### 4 — Clasificación de escenarios
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["clasificacion", "escenarios"]

variables:
  escenario: uno_de([
    ["Un sitio web crea una noticia falsa para ganar dinero con publicidad.", "Desinformación"],
    ["Un familiar reenvía un mensaje de WhatsApp que leyó sin verificar.", "Error honesto"]
  ])

tipo: mc
opciones_explicitas: ["Desinformación", "Error honesto"]

enunciado: "Escenario: {escenario[0]}. Clasifica este comportamiento:"

respuesta: escenario[1]

explicacion: |
  Si el objetivo es el lucro mediante el engaño, existe una intención clara de manipular, lo que constituye desinformación.
```

### 5 — Secuencia de verificación
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["prevencion", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Dudar de la fuente", "Contrastar con medios oficiales", "Verificar la fecha de publicación", "No compartir hasta confirmar"]

respuesta: ["Dudar de la fuente", "Contrastar con medios oficiales", "Verificar la fecha de publicación", "No compartir hasta confirmar"]

enunciado: "Para evitar propagar desinformación o errores, sigue este orden lógico de verificación de una noticia sospechosa:"

explicacion: |
  El proceso ideal comienza con la duda crítica, sigue con la contrastación de fuentes, la revisión de metadatos (como la fecha) y culmina con la acción de no difundir hasta la certeza.
```