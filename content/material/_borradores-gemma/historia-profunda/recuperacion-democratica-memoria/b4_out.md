### 1 — El inicio de la democracia
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "argentina", "1983"]

respuesta: "1983"
tipo: completar
respuestas_validas: ["1983"]

enunciado: "El año en que se produjo el retorno a la democracia y se inició el período democrático ininterrumpido más largo de la historia argentina fue en ___."

explicacion: |
  En 1983, tras la dictadura militar, se llevaron a cabo elecciones que marcaron el inicio de la era democrática más extensa del país.
```

### 2 — El primer presidente tras la dictadura
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["presidencia", "democracia", "alfonsin"]

variables:
  idx: uno_de([0, 1])
  datos: [["Raúl Alfonsín", "Presidente de la Nación"], ["Raúl Alfonsín", "Dictador militar"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Dictador militar", "Juan Carlos Onganía", "Jorge Rafael Videla"]

enunciado: "El primer presidente elegido tras el fin de la dictadura militar fue {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} asumió la presidencia en 1983, marcando el inicio del proceso de recuperación democrática.
```

### 3 — Hitos de la transición
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]
tipo: ordenar

opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

pasos:
  - "Identifique el período de gobierno de facto."
  - "Identifique el proceso electoral de retorno."
  - "Identifique el proceso judicial emblemático de la post-dictadura."

explicacion: |
  Primero fue la dictadura, luego las elecciones de 1983 y finalmente el histórico Juicio a las Juntas.
```

### 4 — Naturaleza del período democrático
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "continuidad"]

respuesta: "largo"
tipo: mc
opciones_explicitas: ["largo", "corto", "inestable", "interrumpido"]

enunciado: "El período democrático iniciado en 1983 es el más ___ de la historia argentina hasta la actualidad."

explicacion: |
  A diferencia de los quiebres institucionales previos, este período se caracteriza por su continuidad y duración.
```

### 5 — El concepto de Memoria, Verdad y Justicia
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [
    ["El proceso de Memoria, Verdad y Justicia busca...", "reparar el tejido social y la verdad histórica"],
    ["El proceso de Memoria, Verdad y Justicia busca...", "la reconstrucción de la identidad democrática"],
    ["El proceso de Memoria, Verdad y Justicia busca...", "la aplicación de la justicia sobre los crímenes de lesa humanidad"]
  ]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: [
  "reparar el tejido social y la verdad histórica",
  "la reconstrucción de la identidad democrática",
  "la aplicación de la justicia sobre los crímenes de lesa humanidad",
  "la restauración del orden militar"
]

enunciado: "Dentro del marco de la recuperación democrática, el proceso de Memoria, Verdad y Justicia busca {escenarios[idx][1]}."

explicacion: |
  La reconstrucción de la identidad democrática es un pilar fundamental para consolidar el Estado de Derecho tras la dictadura.
```