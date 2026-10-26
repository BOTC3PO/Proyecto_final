### 1 — El avance hacia el Río de la Plata
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["conquista", "expediciones"]

variables:
  escenario: uno_de([
    ["La expedición de Pedro de Mendoza (1536) se estableció en un asentamiento que luego fue abandonado debido a las condiciones climáticas y los ataques de los nativos.", "Asentamiento de Buenos Aires"],
    ["La expedición de Juan de Garay (1554) fue fundamental para la consolidación de la presencia española en la región.", "Fundación de la segunda Buenos Aires"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Asentamiento de Buenos Aires", "Fundación de la segunda Buenos Aires", "Fundación de Asunción", "Expedición de Solís"]

enunciado: "De acuerdo con la cronología de la conquista, ¿cuál fue el hito principal del escenario descrito: {escenario[idx][0]}?"

explicacion: |
  El proceso de colonización fue errático. Mendoza fundó el primer asentamiento en 1536, pero fracasó, siendo Garay quien consolidó la presencia española años después.
```

### 2 — La organización administrativa virreinal
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["instituciones", "virreinato"]

variables:
  caso: uno_de([
    ["El Virreinato del Río de la Plata fue creado para mejorar la defensa y administración del territorio frente a las potencias europeas.", "España"],
    ["La administración de las colonias dependía directamente de la corona de...", "España"]
  ])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["España"]

enunciado: "Complete la siguiente afirmación basada en el contexto: {caso[idx][0]}"

explicacion: |
  La creación del Virreinato del Río de la Plata en 1776 fue una respuesta de la corona española a las presiones de Portugal y Gran Bretaña en el Atlántico Sur.
```

### 3 — Secuencia de la conquista del interior
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["cronologia", "conquista"]

respuesta: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]
tipo: ordenar
opciones_explicitas: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de expansión y consolidación en el actual territorio argentino:"

explicacion: |
  Primero se exploró el litoral (Solís/Mendoza), luego se penetró el interior hacia el Tucumán y finalmente se consolidó la red de caminos y comercio colonial.
```

### 4 — El rol de las instituciones coloniales
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["instituciones", "cabildo"]

variables:
  situacion: uno_de([
    ["El órgano encargado de la administración de justicia y gobierno en las ciudades coloniales era el...", "Cabildo"],
    ["La institución de gobierno local más importante en las ciudades del Virreinato era el...", "Cabildo"]
  ])
  idx: uno_de([0, 1])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["Cabildo", "Real Audiencia", "Consejo de Indias", "Corregimiento"]

enunciado: "Identifique la institución mencionada en el siguiente contexto: {situacion[idx][0]}"

explicacion: |
  El Cabildo era la institución de gobierno local que permitía la participación de los vecinos en la administración de la ciudad.
```

### 5 — Economía colonial y monopolio
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["economia", "monopolio"]

variables:
  modelo: uno_de([
    ["El sistema económico impuesto por la metrópoli que prohibía el comercio con otras naciones era el...", "Monopolio comercial"],
    ["La política de comercio exclusivo de España con sus colonias se denominaba...", "Monopolio comercial"]
  ])
  idx: uno_de([0, 1])

respuesta: modelo[idx][1]
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "El sistema de {modelo[idx][0]} fue el eje de la economía virreinal, limitando el crecimiento de puertos como Buenos Aires hasta la creación de la Capitanía General de Buenos Aires.", "verdadero"

explicacion: |
  El monopolio comercial obligaba a que todo el comercio pasara por puertos autorizados (como Sevilla o Cádiz), lo que fomentó el contrabando en el Río de la Plata.
```