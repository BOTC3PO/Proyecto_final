### 1 — Impacto en servicios básicos
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["servicios", "urbanismo"]

respuesta: "saturación"
tipo: completar
respuestas_validas: ["saturación", "colapso"]

enunciado: "Cuando la migración hacia las ciudades es más rápida de lo que el Estado puede planificar, se produce una ___ de los servicios públicos como el agua potable y el transporte."

explicacion: |
  La urbanización acelerada genera una demanda de infraestructura que supera la capacidad de respuesta de la ciudad, provocando la saturación de los servicios básicos.
```

### 2 — Consecuencias de la urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["consecuencias", "barrios_precarios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["crecimiento de asentamientos informales", "falta de planificación urbana"],
    ["aumento de la contaminación", "congestión vehicular"]
  ]

respuesta: uno_de(escenarios[escenario_idx])
tipo: mc
opciones_explicitas: ["crecimiento de asentamientos informales", "falta de planificación urbana", "aumento de la contaminación", "congestión vehicular"]

enunciado: "La expansión descontrolada de la mancha urbana hacia las periferias suele derivar en {escenarios[escenario_idx][0]}."

explicacion: |
  La falta de regulación y el rápido crecimiento demográfico llevan a la formación de barrios precarios o asentamientos informales en zonas no planificadas.
```

### 3 — Ventajas de la vida urbana
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["oportunidades", "empleo"]

respuesta: "empleo"
tipo: mc
opciones_explicitas: ["empleo", "aislamiento", "subsistencia", "degradación"]

enunciado: "Uno de los principales motores de la migración campo-ciudad es la búsqueda de mejores oportunidades de _________ y acceso a servicios especializados."

explicacion: |
  Las ciudades concentran la mayor parte de la actividad económica, ofreciendo una mayor diversidad de empleo en comparación con las zonas rurales.
```

### 4 — Procesos de urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["procesos", "secuencia"]

respuesta: ["migración rural", "crecimiento demográfico", "expansión urbana", "asentamientos informales"]
tipo: ordenar
opciones_explicitas: ["migración rural", "crecimiento demográfico", "expansión urbana", "asentamientos informales"]

enunciado: "Ordena cronológicamente los elementos que suelen caracterizar un proceso de urbanización acelerada no planificada:"

pasos:
  - "Movimiento de personas desde el campo a la ciudad."
  - "Aumento de la población en el área metropolitana."
  - "Ocupación de terrenos periféricos por la ciudad."
  - "Formación de barrios con servicios deficientes."

explicacion: |
  El proceso suele iniciar con la migración, seguido por el aumento de población, la expansión física de la ciudad y, finalmente, la consolidación de barrios precarios por la falta de servicios.
```

### 5 — El dilema urbano
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["dualidad", "urbanismo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["positiva", "acceso a educación"],
    ["negativa", "hacinamiento"]
  ]

respuesta: uno_de(casos[caso_idx])
tipo: mc
opciones_explicitas: ["positiva", "acceso a educación", "negativa", "hacinamiento"]

enunciado: "La urbanización es un proceso dual: puede tener una consecuencia {casos[caso_idx][0]} como el {casos[caso_idx][1]}."

explicacion: |
  La urbanización presenta una dualidad: por un lado, ofrece ventajas como el acceso a educación y salud; por otro, presenta desafíos como el hacinamiento y la falta de servicios.
```