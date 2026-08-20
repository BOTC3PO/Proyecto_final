### 1 — El motor de la urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["historia", "revolucion_industrial"]

respuesta: "Revolución Industrial"
tipo: completar
respuestas_validas: ["Revolución Industrial"]

enunciado: "El proceso de crecimiento acelerado de las ciudades, conocido como urbanización, se vio fuertemente impulsado por la ___."

explicacion: |
  La Revolución Industrial provocó un éxodo masivo del campo a la ciudad debido a la mecanización de la agricultura y la creación de fábricas en los núcleos urbanos.
```

### 2 — Causas de la migración rural-urbana
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["migracion", "causas"]

variables:
  caso: uno_de([
    ["falta de tierras y mecanización agrícola", "atracción por empleos industriales"],
    ["escasez de servicios en el campo", "búsqueda de mejores oportunidades educativas"],
    ["crisis de subsistencia rural", "promesa de salarios fijos en la ciudad"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: [caso[0], caso[1], "Crecimiento natural de la población urbana", "Políticas de vivienda"]

enunciado: "En un contexto de urbanización acelerada, una causa principal de la migración desde el campo hacia la ciudad es: {caso[0]}."

explicacion: |
  La migración suele responder a un factor de "expulsión" (lo que sucede en el origen) y un factor de "atracción" (lo que ofrece el destino).
```

### 3 — Conceptos de densidad poblacional
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["demografia", "densidad"]

respuesta: 85
tipo: input
tolerancia_abs: 5

enunciado: "Si una ciudad tiene una superficie de 100 km² y una población de 8500 habitantes, ¿cuál es su densidad de población (habitantes por km²)? (Redondea al entero más cercano)"

pasos:
  - "Identificar la población total: 8500"
  - "Identificar la superficie: 100 km²"
  - "Dividir población / superficie: 8500 / 100"

explicacion: |
  La densidad de población se calcula dividiendo el número total de habitantes por la superficie territorial: 8500 / 100 = 85 hab/km².
```

### 4 — Etapas del crecimiento urbano
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["procesos", "urbanismo"]

respuesta: ["Expansión de la periferia", "Densificación del centro", "Crecimiento de la zona industrial", "Consolidación del núcleo urbano"]
tipo: ordenar
opciones_explicitas: ["Expansión de la periferia", "Densificación del centro", "Crecimiento de la zona industrial", "Consolidación del núcleo urbano"]

enunciado: "Ordena cronológicamente las fases típicas de una ciudad que experimenta un crecimiento acelerado por la industrialización:"

explicacion: |
  El proceso suele comenzar con un núcleo consolidado, seguido por la creación de zonas industriales, la densificación del centro para albergar trabajadores y, finalmente, la expansión hacia la periferia.
```

### 5 — Impacto de la urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["consecuencias", "social"]

variables:
  impacto: uno_de([
    ["Problemas de infraestructura", "Desigualdad social"],
    ["Contaminación ambiental", "Hacinamiento"],
    ["Escasez de servicios", "Crecimiento de asentamientos informales"]
  ])

respuesta: impacto[1]
tipo: mc
opciones_explicitas: ["Crecimiento demográfico natural", impacto[1], "Despoblación de las metrópolis", "Migración estacional"]

enunciado: "Un efecto común de la urbanización rápida y descontrolada es: {impacto[0]}."

explicacion: |
  Cuando la población urbana crece más rápido que la capacidad de la ciudad para proveer servicios y vivienda, surgen problemas como el hacinamiento o la falta de infraestructura.
```