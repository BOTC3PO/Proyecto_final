### 1 — La Gran Oxidación
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["precambrico", "oxigeno"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [
    ["La acumulación de oxígeno atmosférico tras la fotosíntesis de cianobacterias", "oxigenación"],
    ["El impacto de un gran asteroide en la Tierra primitiva", "impacto"],
    ["Intensas erupciones volcánicas masivas", "vulcanismo"]
  ]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["oxigenación", "impacto", "vulcanismo"]

enunciado: "La extinción del evento del Gran Oxígeno fue causada principalmente por la {escenarios[idx][0]}."

explicacion: |
  El aumento de oxígeno libre en la atmósfera fue tóxico para la mayoría de los organismos anaerobios de la época.
```

### 2 — El Ordovícico-Devónico
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["paleozoico", "clima"]

variables:
  idx: uno_de([0,1,2])
  datos: [
    ["El grupo más afectado fue el de los...", "trilobites"],
    ["El principal agente causante fue el...", "enfriamiento"],
    ["La causa principal fue el cambio en el...", "nivel_del_mar"]
  ]
  respuestas: [
    ["trilobites", "enfriamiento", "nivel_del_mar"]
  ]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["trilobites", "enfriamiento", "nivel_del_mar"]

enunciado: "Durante la extinción del Ordovícico-Devónico, el factor determinante fue el {datos[idx][1]}."

explicacion: |
  Cambios climáticos y fluctuaciones en el nivel del mar afectaron drásticamente la vida marina.
```

### 3 — El Pérmico-Triásico
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["la_gran_muerte", "trapp"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [
    ["La gran muerte del Pérmico-Triásico fue causada por...", "vulcanismo"],
    ["El grupo que sufrió la mayor pérdida fue el de los...", "insectos"],
    ["El efecto invernadero fue provocado por...", "metano"]
  ]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["vulcanismo", "insectos", "metano"]

enunciado: "En el evento del Pérmico-Triásico, {escenarios[idx][0]}."

explicacion: |
  Conocida como "La Gran Muerte", fue la extinción más severa de la historia de la Tierra.
```

### 4 — El Triásico-Jurásico
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["dinosaurios", "pangea"]

variables:
  idx: uno_de([0,1,2])
  datos: [
    ["La fragmentación de Pangea liberó gases que causaron...", "calentamiento"],
    ["El grupo que comenzó a dominar tras la extinción fue el de los...", "dinosaurios"],
    ["La causa principal fue un aumento en el...", "CO2"]
  ]
  respuestas: [
    ["calentamiento", "dinosaurios", "CO2"]
  ]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["calentamiento", "dinosaurios", "CO2"]

enunciado: "Tras la extinción del Triásico-Jurásico, el mundo cambió debido al {datos[idx][1]}."

explicacion: |
  La ruptura del supercontinente Pangea alteró el clima global y permitió la expansión de los dinosaurios.
```

### 5 — El Cretácico-Paleógeno
```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [
    ["El asteroide Chicxulub causó la extinción de...", "dinosaurios"],
    ["El impacto masivo provocó un cambio en la...", "luz_solar"],
    ["La extinción del Cretácico afectó principalmente a...", "reptiles"]
  ]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["dinosaurios", "luz_solar", "reptiles"]

enunciado: "El evento del Cretácico-Paleógeno se caracteriza por la reducción de la {escenarios[idx][0]}."

explicacion: |
  El impacto de un asteroide bloqueó la luz solar, colapsando la fotosíntesis y las cadenas alimentarias.
```