### 1 — El impacto de la inclusión
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["democracia", "sufragio"]

respuesta: "profundización"
tipo: completar
respuestas_validas: ["profundización"]

enunciado: "La ampliación del sufragio, pasando de un modelo restringido a uno universal, se considera un indicador clave de la _______ democrática."

explicacion: |
  Al incluir a más ciudadanos en el proceso de decisión, el sistema deja de ser una oligarquía o una democracia censitaria para convertirse en una democracia más representativa y profunda.
```

### 2 — Representación política
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["representacion", "derechos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Solo propietarios", "Solo hombres con renta"],
    ["Solo personas con estudios", "Solo militares"]
  ]

respuesta: "tener más personas con voz política formal en las decisiones colectivas"
tipo: mc
opciones_explicitas: [
  "reducir la participación ciudadana",
  "tener más personas con voz política formal en las decisiones colectivas",
  "centralizar el poder en una sola élite",
  "eliminar la necesidad de leyes"
]

enunciado: "Si comparamos un sistema de sufragio restringido con uno universal, el principal cambio en la legitimidad del Estado es {escenarios[escenario_idx][0]} frente al derecho de {escenarios[escenario_idx][1]}."

explicacion: |
  La democracia se profundiza cuando la voluntad popular no es un privilegio de una minoría económica o social, sino un derecho que integra la diversidad de la sociedad en la toma de decisiones.
```

### 3 — Elementos de la democracia moderna
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["conceptos", "sufragio"]

respuesta: "universal"
tipo: mc
opciones_explicitas: [
  "limitado",
  "universal",
  "censitario",
  "indirecto"
]

enunciado: "Cuando el derecho al voto se extiende a todos los ciudadanos adultos sin distinción de sexo, renta o instrucción, hablamos de sufragio _______."

explicacion: |
  El sufragio universal es el pilar que permite que la soberanía popular sea real y no una ficción controlada por grupos de interés.
```

### 4 — Evolución histórica
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "avanzado"
  tags: ["historia", "derechos"]

respuesta: ["Sufragio censitario", "Sufragio masculino", "Sufragio universal"]
tipo: ordenar
opciones_explicitas: [
  "Sufragio censitario",
  "Sufragio masculino",
  "Sufragio universal"
]

enunciado: "Ordene cronológicamente los modelos de sufragio según la evolución histórica de la profundización democrática:"

explicacion: |
  La historia política muestra una expansión gradual: primero se limitó por propiedad (censitario), luego se excluyó a las mujeres (masculino) y finalmente se buscó la inclusión total (universal).
```

### 5 — Consecuencia de la exclusión
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["legitimidad", "participacion"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Si en un sistema de sufragio restringido solo puede votar el 10% de la población, y en uno universal vota el 90%, ¿cuántas veces más personas tienen voz política en el segundo modelo respecto al primero? (Indique el número entero)"

pasos:
  - "Identificar el porcentaje de participación en ambos modelos."
  - "Dividir el porcentaje del sufragio universal por el del sufragio restringido."

explicacion: |
  En este ejemplo hipotético, el sufragio universal permite que la participación sea 9 veces mayor (90/10 = 9), lo que demuestra una expansión masiva de la representatividad.
```