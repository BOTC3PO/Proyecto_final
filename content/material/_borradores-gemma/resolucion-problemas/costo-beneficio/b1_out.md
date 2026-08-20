### 1 — Concepto de Costo-Beneficio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["definicion", "decision"]

respuesta: "beneficio"
tipo: "completar"
respuestas_validas: ["beneficio"]

enunciado: "En un análisis de costo-beneficio, el objetivo es comparar los costos de una decisión contra el ___ que se espera obtener de ella."

explicacion: |
  El análisis de costo-beneficio busca determinar si los beneficios de una acción superan sus costos asociados.
```

### 2 — Identificación de Costos
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["costos", "conceptos"]

opciones_explicitas: ["Costos directos", "Costos indirectos", "Ambos son costos"]

respuesta: "Ambos son costos"
tipo: "mc"

enunciado: "En el contexto de la toma de decisiones, ¿qué tipo de gastos deben considerarse al calcular los costos totales?"

explicacion: |
  Para un análisis exhaustivo, se deben sumar tanto los costos directos (materiales, mano de obra) como los indirectos (alquiler, servicios).
```

### 3 — Veracidad del Análisis
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["logica", "evaluacion"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es verdadero o falso que el análisis de costo-beneficio solo debe considerar factores monetarios y nunca factores cualitativos (como la satisfacción del cliente)?"

explicacion: |
  Falso. Aunque los factores monetarios son más fáciles de cuantificar, los factores cualitativos son cruciales para una decisión integral.
```

### 4 — El Proceso de Decisión
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["proceso", "pasos"]

opciones_explicitas: ["Identificar costos", "Estimar beneficios", "Comparar resultados"]

respuesta: ["Identificar costos", "Estimar beneficios", "Comparar resultados"]
tipo: "ordenar"

enunciado: "Ordene los pasos lógicos para realizar un análisis de costo-beneficio básico:"

pasos:
  - "Estimar los beneficios esperados"
  - "Identificar todos los costos involucrados"
  - "Comparar los costos contra los beneficios"

explicacion: |
  Primero se deben listar los egresos, luego los ingresos/beneficios esperados, y finalmente se realiza la comparación para decidir.
```

### 5 — Resultado del Análisis
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["resultado", "decision"]

variables:
  escenario: uno_de([[100, 150], [200, 150]])
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: "mc"

enunciado: "Si los beneficios estimados son {escenario[idx][0]} y los costos son {escenario[idx][1]}, ¿cuál es la conclusión del análisis?"

opciones_explicitas: ["La decisión es rentable", "La decisión no es rentable"]

explicacion: |
  Si el beneficio es mayor al costo, la decisión es rentable. Si el costo es mayor, no lo es.
```