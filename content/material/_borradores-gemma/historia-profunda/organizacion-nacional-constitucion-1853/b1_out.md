### 1 — La sanción de la Constitución
```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "argentina", "federalismo"]

respuesta: "1853"
tipo: "vf"

enunciado: "La Constitución Nacional Argentina fue sancionada en el año ___."

explicacion: |
  Tras la caída de Juan Manuel de Rosas en la batalla de Caseros, se procedió a la organización institucional del país, culminando con la sanción de la Constitución en 1853.
```

### 2 — Forma de gobierno
```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["forma_de_gobierno", "republica", "federal"]

respuesta: "República Federal"
tipo: "mc"

opciones_explicitas: ["Monarquía Unitaria", "República Federal", "Confederación Centralista", "Dictadura Provisoria"]

enunciado: "La Constitución de 1853 estableció que la forma de gobierno de la Nación Argentina es una:"

explicacion: |
  La Constitución de 1853 adoptó la forma Republicana y el sistema Federal, garantizando la autonomía de las provincias pero bajo un gobierno central.
```

### 3 — División de poderes
```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poderes", "legislativo", "ejecutivo", "judicial"]

variables:
  orden_correcta: ["Ejecutivo", "Legislativo", "Judicial"]

respuesta: ["Ejecutivo", "Legislativo", "Judicial"]
tipo: "ordenar"

opciones_explicitas: ["Ejecutivo", "Legislativo", "Judicial"]

enunciado: "Ordene los tres poderes del Estado establecidos por la Constitución de 1853, partiendo desde el poder que ejerce la función administrativa/política principal:"

explicacion: |
  La división de poderes es un principio fundamental de la democracia republicana adoptada en 1853 para evitar la concentración del mando.
```

### 4 — El rol de las provincias
```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["provincias", "autonomia"]

variables:
  escenario: uno_de([
    ["autónomas", "tienen sus propias autoridades y leyes"],
    ["dependientes", "están subordinadas totalmente al gobierno central"]
  ])

respuesta: "autónomas"
tipo: "completar"

respuestas_validas: ["autónomas"]

enunciado: "Según el sistema federal adoptado, las provincias argentinas son ___ porque ___."

explicacion: |
  El federalismo implica que las provincias conservan todo el poder no delegado a la Nación, manteniendo su propia autonomía.
```

### 5 — El proceso de sanción
```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["sanacion", "congreso", "constituyente"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["Sanctioned", "Sancionada"],
    ["Promulgated", "Promulgada"]
  ]

respuesta: "Sancionada"
tipo: "mc"

opciones_explicitas: ["Sancionada", "Promulgada", "Derogada", "Reformada"]

enunciado: "El proceso de la Constitución de 1853 comenzó cuando la Carta Magna fue ___ por el Congreso Constituyente en Santa Fe."

explicacion: |
  La Constitución fue sancionada por el Congreso Constituyente en Santa Fe en 1853, marcando el inicio de la organización institucional definitiva.
```