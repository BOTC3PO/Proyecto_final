### 1 — Eficacia vs Eficiencia
```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["indicadores", "eficacia", "eficiencia"]

variables:
  escenario: uno_de([
    ["La empresa produjo 100 unidades con 10 horas de trabajo, pero su objetivo era 120 unidades.", "eficacia"],
    ["La empresa produjo 100 unidades usando 8 horas de trabajo, cumpliendo su objetivo de 100 unidades.", "eficiencia"],
    ["La empresa produjo 120 unidades usando 15 horas de trabajo, superando su objetivo de 100 unidades.", "ambos"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el escenario donde la empresa {escenario[idx][0]}, el indicador de {escenario[idx][1]} es..."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["eficacia", "eficiencia", "ambos", "ninguno"]

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados.
```

### 2 — Cálculo de Desviación Presupuestaria
```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["presupuesto", "desviacion", "calculo"]

variables:
  datos: [
    ["Presupuesto: $5000, Real: $4500", "-10%"],
    ["Presupuesto: $8000, Real: $9200", "+15%"],
    ["Presupuesto: $1000, Real: $1000", "0%"]
  ]
  idx: uno_de([0, 1, 2])

enunciado: "Si el presupuesto asignado fue de {datos[idx][0].split(':')[1].split(',')[0].strip()} y el gasto real fue de {datos[idx][0].split(':')[1].split(',')[1].strip()}, la desviación porcentual respecto al presupuesto es de ___."

pasos:
  - "Identificar el valor presupuestado (P) y el valor real (R)."
  - "Calcular la diferencia: (R - P) / P."
  - "Multiplicar por 100 para obtener el porcentaje."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["-10%", "+15%", "0%"]

explicacion: |
  La desviación presupuestaria indica la diferencia entre lo planificado y lo ejecutado. Una desviación positiva indica sobre-ejecución (gasto mayor al previsto).
```

### 3 — Indicadores de Calidad (KPIs)
```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "basico"
  tags: ["kpi", "calidad", "verdadero_falso"]

enunciado: "Un KPI (Key Performance Indicator) de calidad que mide el porcentaje de productos defectuosos sobre el total producido es un indicador de proceso."

respuesta: verdadero
tipo: vf

explicacion: |
  Los indicadores de calidad suelen medir la efectividad de los procesos internos para asegurar que el output cumpla con los estándares establecidos.
```

### 4 — Ciclo de Control de Gestión (PDCA)
```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["pdca", "deming", "procesos"]

enunciado: "Ordene las etapas del ciclo de mejora continua (PDCA) en su secuencia lógica de ejecución:"

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

explicacion: |
  El ciclo PDCA consiste en: Planificar (establecer objetivos), Hacer (implementar), Verificar (comparar resultados con objetivos) y Actuar (ajustar para mejorar).
```

### 5 — Análisis de Rentabilidad
```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["rentabilidad", "margen", "calculo"]

variables:
  caso: uno_de([
    ["Ventas: 1000, Costos: 700", "300"],
    ["Ventas: 500, Costos: 100", "400"],
    ["Ventas: 2000, Costos: 1800", "200"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si una unidad de negocio presenta los siguientes datos: {caso[idx][0]}, su margen de contribución absoluto es de ___."

pasos:
  - "Identificar el total de ventas."
  - "Identificar los costos variables/directos."
  - "Restar los costos de las ventas."

respuesta: caso[idx][1]
tipo: input
tolerancia_abs: 0

explicacion: |
  El margen de contribución es la diferencia entre las ventas y los costos variables, indicando cuánto aporta cada unidad a cubrir los costos fijos y generar utilidad.
```