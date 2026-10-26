### 1 — El impacto de las enfermedades
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["demografia", "enfermedades"]

respuesta: "viruela"
tipo: completar
respuestas_validas: ["viruela", "viruela", "sarampión", "sarampión"]

enunciado: "Uno de los factores biológicos más devastadores durante la conquista fue la propagación de la ___, enfermedad que causó una mortalidad masiva en las poblaciones indígenas debido a la falta de inmunidad previa."

explicacion: |
  La viruela fue una de las principales causas del colapso demográfico, ya que los sistemas inmunológicos de los pueblos originarios no estaban preparados para virus provenientes de Eurasia y África.
```

### 2 — Causas de la caída demográfica
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["causas", "colapso"]

opciones_explicitas: ["Enfermedades", "Guerras de conquista", "Sistemas de explotación", "Todas las anteriores"]
respuesta: "Todas las anteriores"
tipo: mc

enunciado: "¿Cuáles fueron los factores principales que contribuyeron al descenso drástico de la población indígena durante el proceso de colonización?"

explicacion: |
  El colapso fue multicausal: la introducción de patógenos (viruela, sarampión), la violencia directa de las campañas militares y la explotación laboral (como la mita o la encomienda) actuaron de forma sinérgica.
```

### 3 — Secuencia de factores de mortalidad
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["proceso", "causas"]

opciones_explicitas: ["Llegada de patógenos", "Desestructuración social", "Colapso demográfico masivo"]
respuesta: ["Llegada de patógenos", "Desestructuración social", "Colapso demográfico masivo"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que explican la catástrofe demográfica en el continente americano:"

explicacion: |
  Primero llegaron los agentes biológicos que causaron epidemias rápidas; esto desarticuló la organización social y familiar (desestructuración), lo que finalmente derivó en una caída demográfica sin precedentes.
```

### 4 — Inmunidad y patógenos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["biologia", "historia"]

variables:
  escenario: uno_de([0, 1])

enunciado: "En el escenario {escenario == 0 ? 'epidémico' : 'de guerra'}, la falta de memoria inmunológica de los pueblos originarios ante virus como el sarampión fue un factor determinante para la mortalidad."

pasos:
  - "Analizar la interacción entre patógeno y sistema inmune."
  - "Relacionar la falta de inmunidad con la velocidad de propagación."

respuesta: "sarampión"
tipo: completar
respuestas_validas: ["sarampión", "sarampión"]

explicacion: |
  Al ser virus nuevos para estas poblaciones, no existían anticuerpos previos, lo que permitía que la enfermedad se propagara de forma explosiva entre comunidades enteras.
```

### 5 — Consecuencias de la explotación
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["explotacion", "demografia"]

opciones_explicitas: ["Aumento de la natalidad", "Reducción de la población", "Migración masiva a Europa"]
respuesta: "Reducción de la población"
tipo: mc

enunciado: "La combinación de enfermedades y los sistemas de trabajo forzado (como la encomienda) provocó principalmente una:"

explicacion: |
  La explotación extrema reducía la capacidad de recuperación de las poblaciones, agravando el impacto de las epidemias y llevando a una reducción poblacional constante.
```