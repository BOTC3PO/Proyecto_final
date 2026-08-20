### 1 — El destino de las estrellas
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "evolucion_estelar"]

variables:
  escenario: uno_de([
    ["una estrella de baja masa", "enana blanca"],
    ["una estrella masiva", "estrella de neutrones"],
    ["una estrella supermasiva", "agujero negro"]
  ])

enunciado: "Dependiendo de su masa inicial, el destino de una estrella varía. Una {escenario[0]} puede evolucionar hacia una {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  Las estrellas pequeñas como nuestro Sol terminan su vida como enanas blancas. Solo las estrellas con masas extremadamente altas pueden colapsar hasta formar objetos más densos.
```

### 2 — Umbrales de masa
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "colapso"]

variables:
  tipo_colapso: uno_de([
    ["estrella de neutrones", "estrella de neutrones"],
    ["agujero negro", "agujero negro"]
  ])

enunciado: "Si el núcleo remanente de una supernova supera el límite de Tolman-Oppenheimer-Volkoff, el colapso gravitatorio no se detiene y se forma un/a {tipo_colapso[0]}."

respuesta: tipo_colapso[1]
tipo: completar
respuestas_validas: ["estrella de neutrones", "agujero negro"]

explicacion: |
  Cuando la presión de degeneración de neutrones no puede contrarrestar la gravedad, el objeto colapsa indefinidamente hacia una singularidad, formando un agujero negro.
```

### 3 — Secuencia de muerte estelar
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

enunciado: "Ordena el proceso de evolución de una estrella masiva que termina en un agujero negro:"

pasos:
  - "Secuencia principal (fusión de hidrógeno)"
  - "Supernova (colapso del núcleo)"
  - "Agujero negro (singularidad)"

opciones_explicitas: [
    "Secuencia principal (fusión de hidrógeno)",
    "Supernova (colapso del núcleo)",
    "Agujero negro (singularidad)"
  ]

respuesta: [
    "Secuencia principal (fusión de hidrógeno)",
    "Supernova (colapso del núcleo)",
    "Agujero negro (singularidad)"
  ]
tipo: ordenar

explicacion: |
  La evolución sigue un orden lógico: la fusión mantiene el equilibrio, la supernova es el evento explosivo de muerte y el agujero negro es el remanente final.
```

### 4 — ¿Qué queda después?
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["remanentes"]

enunciado: "Si una estrella tiene una masa inicial moderada (menor que el límite para una supernova masiva), el remanente final será una ___."

respuesta: enana blanca
tipo: completar
respuestas_validas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  Las estrellas de masa baja o media expulsan sus capas externas y dejan un núcleo denso llamado enana blanca.
```

### 5 — Clasificación de remanentes
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["clasificacion", "densidad"]

variables:
  objeto: uno_de([
    ["enana blanca", "enana blanca"],
    ["estrella de neutrones", "estrella de neutrones"],
    ["agujero negro", "agujero negro"]
  ])

enunciado: "El objeto con la mayor densidad teórica, donde la gravedad impide incluso la salida de la luz, es el/la {objeto[0]}."

respuesta: objeto[1]
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  El agujero negro representa el límite extremo de la densidad, donde la curvatura del espacio-tiempo es infinita en la singularidad.
```