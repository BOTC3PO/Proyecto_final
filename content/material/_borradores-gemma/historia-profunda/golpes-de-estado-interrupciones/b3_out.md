### 1 — El fin de la primera presidencia radical
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "democracia", "irrigoyen"]

respuesta: "1930"
tipo: "completar"
respuestas_validas: ["1930"]

enunciado: "El primer golpe de Estado del siglo XX en Argentina, que derrocó al presidente Hipólito Yrigoyen, ocurrió en el año ___."

explicacion: |
  El golpe de 1930 marcó el inicio de un ciclo de interrupciones al orden constitucional en Argentina, rompiendo la estabilidad de la Ley Sáenz Peña.
```

### 2 — El patrón de las intervenciones
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["patrones", "militarismo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El golpe de 1930 inició un ___ de intervenciones militares recurrentes.", "patrón"],
    ["El derrocamiento de Yrigoyen inauguró un ___ de inestabilidad política.", "ciclo"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["patrón", "ciclo", "acuerdo", "proceso"]

enunciado: "{escenarios[escenario_idx][0]}"

explicacion: |
  El golpe de 1930 no fue un evento aislado, sino que inauguró un patrón de intervenciones militares que se repetiría durante gran parte del siglo XX.
```

### 3 — El contexto del derrocamiento
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["contexto", "crisis"]

respuesta: "crisis económica mundial"
tipo: "mc"
opciones_explicitas: ["crisis económica mundial", "guerra civil", "revolución industrial", "independencia"]

enunciado: "El golpe de Estado de 1930 se produjo en un contexto de profunda ___ que afectó la estabilidad del gobierno de Yrigoyen."

explicacion: |
  La crisis económica de 1929 (Gran Depresión) debilitó la estructura política y social, facilitando el levantamiento militar contra el radicalismo.
```

### 4 — Secuencia de la ruptura institucional
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["secuencia", "orden"]

respuesta: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]
tipo: "ordenar"
opciones_explicitas: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la estabilidad democrática argentina del siglo XX:"

explicacion: |
  Primero se establece la democracia con la Ley Sáenz Peña (1912), luego ocurre el primer golpe (1930) y esto deriva en la práctica de intervenciones militares.
```

### 5 — Consecuencia política inmediata
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["consecuencias", "democracia"]

respuesta: falso
tipo: "vf"

enunciado: "¿El golpe de 1930 fue un evento aislado que no influyó en la política argentina posterior?"

explicacion: |
  Falso. El golpe de 1930 fue el primer eslabón de una serie de interrupciones que marcaron la historia política argentina durante décadas.
```