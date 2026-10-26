### 1 — Concepto de Historia Reciente
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["conceptos", "memoria"]

tipo: mc
opciones_explicitas: ["El estudio de procesos de larga duración como la formación del Estado", "El estudio de procesos cercanos con actores sociales presentes y memoria activa", "El estudio de la historia colonial y la independencia", "El estudio de la historia económica del siglo XIX"]

enunciado: "En el contexto historiográfico, ¿qué define principalmente al concepto de 'historia reciente'?"

explicacion: |
  La historia reciente se distingue de la historia tradicional porque los sujetos sociales (protagonistas) suelen estar vivos o haber dejado testimonios directos, y existe una memoria social que mantiene el debate en la agenda pública actual.
```

### 2 — El rol de la memoria
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["memoria", "sujetos"]

tipo: completar
respuestas_validas: ["memoria", "pasado", "archivo"]

enunciado: "A diferencia de la historia que analiza el ______, la historia reciente se nutre fundamentalmente de la ______ social y el testimonio."

explicacion: |
  La historia reciente no solo busca el dato objetivo, sino que interactúa con la memoria colectiva de las sociedades, donde los hechos aún tienen una carga emocional y política latente.
```

### 3 — Cronología y proximidad
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["temporalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["1976", "Dictadura Militar"], ["1983", "Retorno a la Democracia"]]

tipo: mc
opciones_explicitas: ["El escenario de la {escenarios[escenario_idx][1]}", "El escenario de la independencia", "El escenario de la conquista española"]

enunciado: "Un tema central de la historia reciente en Argentina es el proceso iniciado en el año {escenarios[escenario_idx][0]} relacionado con {escenarios[escenario_idx][1]}."

explicacion: |
  La delimitación temporal de la historia reciente es flexible, pero suele centrarse en los procesos de la segunda mitad del siglo XX que impactan en la identidad política actual.
```

### 4 — Elementos de análisis
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia"]

tipo: ordenar
opciones_explicitas: ["Recolección de testimonios orales", "Análisis de archivos estatales", "Construcción del relato historiográfico"]

enunciado: "Para abordar la historia reciente, un historiador suele seguir un orden metodológico que parte de la fuente directa hacia la síntesis. Ordena estos pasos:"

explicacion: |
  El trabajo con la historia reciente requiere primero capturar la voz de los protagonistas (oralidad), luego contrastarla con documentos oficiales (archivos) para finalmente construir un conocimiento histórico crítico.
```

### 5 — Sujetos de la historia
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["sujetos", "testimonio"]

tipo: input
tolerancia_abs: 0

enunciado: "Cuando un historiador entrevista a una persona que vivió un proceso político de hace 40 años, está utilizando una fuente primaria llamada ______."

explicacion: |
  El testimonio es la herramienta fundamental de la historia reciente, permitiendo que la subjetividad de los actores sociales sea parte del proceso de investigación.
```

*(Nota: Para la pregunta 5, la respuesta esperada es "testimonio")*