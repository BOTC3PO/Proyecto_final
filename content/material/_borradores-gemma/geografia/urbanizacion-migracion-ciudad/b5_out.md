### 1 — Causas de la migración rural
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["migracion", "causas"]

variables:
  escenario: uno_de([["La falta de infraestructura sanitaria y servicios de salud en el campo", "Mejorar la calidad de vida"], ["La mecanización de la agricultura que reduce la demanda de mano de obra", "Búsqueda de empleo"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Mejorar la calidad de vida", "Búsqueda de empleo", "Aumento de la densidad poblacional", "Contaminación acústica"]

enunciado: "En el siguiente caso: {escenario[idx][0]}, ¿cuál es la causa principal que impulsa la migración hacia la ciudad?"

explicacion: |
  La migración suele ser motivada por factores de "expulsión" en el origen (falta de servicios o empleo) y factores de "atracción" en el destino.
```

### 2 — Consecuencias de la urbanización rápida
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["consecuencias", "urbanismo"]

variables:
  caso: uno_de([["El crecimiento descontrolado de la periferia urbana", "Crecimiento de asentamientos informales"], ["La llegada masiva de personas en un corto periodo", "Saturación de los servicios públicos"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Crecimiento de asentamientos informales", "Saturación de los servicios públicos", "Reducción de la contaminación", "Descentralización económica"]

enunciado: "Analice el siguiente fenómeno: {caso[idx][0]}. ¿Cuál es una consecuencia directa de este proceso?"

explicacion: |
  Cuando la urbanización supera la capacidad de planificación de la ciudad, se producen problemas de infraestructura y servicios.
```

### 3 — Factores de atracción urbana
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["factores_atracción"]

respuesta: "oferta educativa"
tipo: completar
respuestas_validas: ["oferta educativa", "centros de salud", "empleo industrial"]

enunciado: "Uno de los principales factores de atracción de las grandes urbes para la población joven es la mayor ___."

explicacion: |
  Las ciudades concentran instituciones de enseñanza superior y técnica que no están disponibles en zonas rurales.
```

### 4 — Procesos de urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["procesos", "secuencia"]

respuesta: ["Éxodo rural", "Crecimiento de la ciudad", "Expansión de la periferia"]
tipo: ordenar
opciones_explicitas: ["Éxodo rural", "Crecimiento de la ciudad", "Expansión de la periferia"]

enunciado: "Ordene cronológicamente los procesos que caracterizan un proceso de urbanización acelerado:"

explicacion: |
  Primero ocurre el movimiento de población (éxodo), luego la ciudad se densifica y finalmente se expande hacia los bordes.
```

### 5 — Impacto ambiental urbano
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["impacto_ambiental"]

variables:
  impacto: uno_de([["La impermeabilización de suelos por el asfalto", "Aumento de la temperatura urbana"], ["La concentración de vehículos en el centro", "Creación de islas de calor"]])
  idx: uno_de([0, 1])

respuesta: impacto[idx][1]
tipo: mc
opciones_explicitas: ["Aumento de la temperatura urbana", "Creación de islas de calor", "Disminución de la huella de carbono", "Aumento de la biodiversidad"]

enunciado: "Si observamos que {impacto[idx][0]}, el fenómeno climático urbano resultante es el/la ___."

explicacion: |
  La sustitución de vegetación por materiales urbanos retiene el calor, generando el efecto de isla de calor.
```