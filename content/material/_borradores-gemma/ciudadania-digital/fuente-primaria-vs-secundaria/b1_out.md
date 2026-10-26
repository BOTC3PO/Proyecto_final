### 1 — Concepto de fuente primaria
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["definicion", "fuentes"]

respuesta: verdadero
tipo: vf

enunciado: "Una fuente primaria es un documento o testimonio original que fue creado en el momento exacto en que ocurrió el evento estudiado."

explicacion: |
  Las fuentes primarias son registros directos (diarios, fotos, entrevistas, documentos oficiales) sin interpretaciones externas.
```

### 2 — Identificación de fuentes
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Carta de un soldado en la guerra", "Un libro de historia escrito en 2023"], ["Video de un discurso presidencial", "Un artículo de opinión sobre el discurso"]]]

respuesta: escenarios[escenario_idx][0][0]
tipo: mc
opciones_explicitas: ["escenarios[escenario_idx][0][0]", "escenarios[escenario_idx][1][0]", "escenarios[escenario_idx][0][1]", "escenarios[escenario_idx][1][1]"]

enunciado: "Si estamos analizando el escenario {escenarios[escenario_idx][0]}, ¿cuál de los siguientes elementos actúa como una fuente primaria?"

explicacion: |
  La fuente primaria es el objeto original (la carta o el video), mientras que el libro o el artículo son fuentes secundarias porque interpretan el original.
```

### 3 — La función de la fuente secundaria
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["secundaria"]

respuesta: "interpreta o analiza"
tipo: completar
respuestas_validas: ["interpreta o analiza", "comenta el original"]

enunciado: "A diferencia de la fuente primaria, una fuente secundaria tiene como función principal ___ la información de la fuente original."

explicacion: |
  Las fuentes secundarias (enciclopedias, libros de texto, críticas) se basan en fuentes primarias para ofrecer una interpretación o resumen.
```

### 4 — Relación entre fuentes
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["relacion"]

respuesta: ["Evento original", "Fuente primaria", "Fuente secundaria"]
tipo: ordenar

enunciado: "Ordena la cadena de producción de la información, desde el hecho hasta el análisis interpretativo:"

pasos:
  - "El suceso ocurre"
  - "Se crea un documento directo"
  - "Se escribe un libro sobre el suceso"

explicacion: |
  El orden lógico es: 1. El evento, 2. El registro directo (primaria), 3. El análisis posterior (secundaria).
```

### 5 — Verdad o Falso: Relación de dependencia
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["dependencia"]

respuesta: falso

tipo: vf

enunciado: "¿Es posible que una fuente secundaria exista sin que exista una fuente primaria previa que la haya originado?"

explicacion: |
  Falso. La fuente secundaria siempre requiere de una fuente primaria (o un conjunto de ellas) para poder realizar su labor de interpretación o análisis.
```