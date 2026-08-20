### 1 — Definición de alternativas
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["definicion", "alternativas"]

tipo: mc
opciones_explicitas: ["Un conjunto de soluciones únicas y finales", "Un conjunto de diversos caminos o propuestas para resolver un problema", "Una lista de errores cometidos durante el proceso"]

enunciado: "En el proceso de resolución de problemas, diseñar posibles soluciones implica generar ___________ para abordar el desafío de distintas maneras."

respuesta: "Un conjunto de diversos caminos o propuestas para resolver un problema"

explicacion: |
  Diseñar alternativas significa expandir el abanico de opciones antes de tomar una decisión, evitando el sesgo de quedarse con la primera idea que surge.
```

### 2 — El valor de la divergencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["pensamiento-divergente", "creatividad"]

tipo: vf
respuesta: verdadero

enunciado: "El pensamiento divergente es una técnica fundamental durante la fase de diseño de soluciones, ya que busca generar la mayor cantidad de ideas posible sin juzgarlas inicialmente."

explicacion: |
  El pensamiento divergente permite la exploración libre, mientras que el pensamiento convergente se usa más adelante para filtrar y elegir la mejor opción.
```

### 3 — Fases del diseño de soluciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar las opciones", "Implementar la solución elegida"]

respuesta: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar las opciones", "Implementar la solución elegida"]

enunciado: "Ordena cronológicamente las etapas lógicas para pasar de un problema a una solución efectiva:"

explicacion: |
  No se puede evaluar algo que no se ha generado, y no se debe implementar sin haber evaluado previamente las alternativas.
```

### 4 — El riesgo de la solución única
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["riesgo", "sesgo"]

tipo: mc
opciones_explicitas: ["Aumentar la eficiencia", "Reducir el riesgo de error", "Ahorrar tiempo de ejecución"]

enunciado: "El objetivo principal de generar varias alternativas antes de elegir una es ___________."

respuesta: "Reducir el riesgo de error"

explicacion: |
  Al tener múltiples opciones, si la primera no funciona o tiene fallos ocultos, contamos con planes de contingencia o mejores rutas.
```

### 5 — Criterios de selección
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["evaluacion", "criterios"]

variables:
  escenario: uno_de([
    ["Bajo costo / Alta complejidad", "Costo"],
    ["Alta velocidad / Baja calidad", "Velocidad"],
    ["Máxima calidad / Alto costo", "Calidad"]
  ])

tipo: completar
respuestas_validas: ["Costo", "Velocidad", "Calidad"]
respuesta: escenario[1]

enunciado: "Si al evaluar una solución priorizamos que sea la más económica posible, el criterio de evaluación principal es el ___________."

pasos:
  - "Identificar el parámetro de prioridad en el enunciado."
  - "Relacionar el parámetro con el criterio de evaluación correspondiente."

explicacion: |
  Cada solución debe ser evaluada bajo criterios específicos (tiempo, dinero, calidad, esfuerzo) para poder compararlas objetivamente.
```