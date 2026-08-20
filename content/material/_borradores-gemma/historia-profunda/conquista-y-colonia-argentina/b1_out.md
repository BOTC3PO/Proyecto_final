### 1 — Fundaciones de ciudades
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["conquista", "fundaciones"]

variables:
  escenario: uno_de([
    ["Santiago del Estero", "1553"],
    ["Córdoba", "1609"],
    ["Buenos Aires (segunda)", "1580"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Santiago del Estero", "Córdoba", "Buenos Aires (segunda)"]

enunciado: "La ciudad de {escenario[0]} fue fundada en el año {escenario[1]}."

explicacion: |
  La fundación de {escenario[0]} en {escenario[1]} marcó un hito en la organización territorial de la región.
```

### 2 — Cronología de asentamientos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]

respuesta: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos de la conquista y colonización:"

pasos:
  - "Identificar la fecha de Santiago del Estero (1553)"
  - "Identificar la fecha de la segunda Buenos Aires (1580)"
  - "Identificar la fecha de Córdoba (1609)"

explicacion: |
  El orden cronológico correcto es: Santiago del Estero (1553), Buenos Aires (1580) y Córdoba (1609).
```

### 3 — La importancia de Buenos Aires
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["buenos_aires", "conquista"]

respuesta: "Juan de Garay"
tipo: completar
respuestas_validas: ["Juan de Garay"]

enunciado: "La segunda fundación de la ciudad de Buenos Aires en 1580 fue liderada por ___."

explicacion: |
  Tras el fracaso de la primera fundación de Pedro de Mendoza, Juan de Garay estableció la segunda fundación en 1580.
```

### 4 — El rol de Córdoba
```
metadata:
  materia: "historia_profucha"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cordoba", "fundacion"]

respuesta: "1609"
tipo: input
tolerancia_abs: 0

enunciado: "La ciudad de Córdoba fue fundada en el año ___."

explicacion: |
  Córdoba fue fundada en 1609, convirtiéndose en un centro neurálgico para la educación y la administración colonial.
```

### 5 — Identificación de capitales
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["geografia_historica"]

variables:
  datos: [
    ["Santiago del Estero", "1553"],
    ["Córdoba", "1609"],
    ["Buenos Aires", "1580"]
  ]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1553", "1609", "1580"]

enunciado: "Si nos referimos a la fundación de {datos[idx][0]}, el año correspondiente es ___."

explicacion: |
  La fecha correcta para la fundación de {datos[idx][0]} es {datos[idx][1]}.
```