### 1 — Cronología de interrupciones
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "siglo_xx", "democracia"]

tipo: ordenar
opciones_explicitas: ["1930", "1943", "1955", "1966", "1976"]
respuesta: ["1930", "1943", "1955", "1966", "1976"]

enunciado: "Ordená cronológicamente los siguientes golpes de Estado que afectaron la institucionalidad argentina en el siglo XX:"

explicacion: |
  La secuencia cronológica de las interrupciones al orden constitucional fue: 1930, 1943, 1955, 1966 y 1976.
```

### 2 — El primer quiebre
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["historia", "argentina"]

tipo: mc
opciones_explicitas: ["1930", "1945", "1955", "1976"]
respuesta: "1930"

enunciado: "¿En qué año se produjo el primer golpe de Estado que interrumpió el orden constitucional en la Argentina del siglo XX?"

explicacion: |
  El golpe de Estado de 1930 derrocó al presidente Hipólito Yrigoyen, marcando el inicio de una era de inestabilidad institucional.
```

### 3 — Identificación de periodos
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["1955", "la Revolución Sojera"],
    ["1966", "la Revolución Argentina"]
  ]

tipo: mc
opciones_explicitas: ["1955", "1962", "1966", "1976"]
respuesta: escenarios[escenario_idx][0]

enunciado: "Identificá el año correspondiente al golpe conocido como {escenarios[escenario_idx][1]}."

explicacion: |
  El escenario seleccionado fue el de {escenarios[escenario_idx][1]}, que ocurrió en el año {escenarios[escenario_idx][0]}.
```

### 4 — Completar términos
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

tipo: completar
respuestas_validas: ["1976"]
respuesta: "1976"

enunciado: "El golpe de Estado más violento y de mayor duración en términos de represión sistemática ocurrió en el año ___."

explicacion: |
  El golpe de Estado de 1976 dio inicio al proceso de dictadura militar más sangriento de la historia argentina.
```

### 5 — Análisis de frecuencia
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["historia", "argentina", "estadistica"]

variables:
  lista_golpes: ["1930", "1943", "1955", "1962", "1966", "1976"]

tipo: input
respuesta: 6

enunciado: "Considerando la lista de golpes mencionados en el texto: {lista_golpes}, ¿cuántas interrupciones al orden democrático se enumeran en total?"

pasos:
  - "Identificar cada año mencionado en el enunciado."
  - "Contar la cantidad de elementos en la lista proporcionada."

explicacion: |
  Se enumeran 6 golpes de Estado en la lista: 1930, 1943, 1955, 1962, 1966 y 1976.
```