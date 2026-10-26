### 1 — Desviación de cronograma
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["cronograma", "desviacion", "gestion"]

variables:
  escenario: uno_de([["Planificado: 10 días, Real: 12 días", "retraso"], ["Planificado: 15 días, Real: 15 días", "en_tiempo"], ["Planificado: 20 días, Real: 18 días", "adelanto"]])
  idx: uno_de([0, 1, 2])

enunciado: "En la fase de ejecución, se observa la siguiente situación: {escenario[idx][0]}. El estado actual del proyecto es: ___."

respuestas_validas: ["retraso", "en_tiempo", "adelanto"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  El seguimiento consiste en comparar el progreso real contra la línea base planificada para identificar desviaciones.
```

### 2 — Acción correctiva inmediata
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["acciones", "control"]

enunciado: "Si durante el control de calidad se detecta que el costo de los materiales ha superado el presupuesto en un 15%, ¿cuál es la acción de control adecuada?"

opciones_explicitas: ["Aceptar el sobrecosto sin intervenir", "Rediseñar procesos para optimizar recursos", "Suspender el proyecto indefinidamente", "Aumentar el presupuesto sin investigar la causa"]
respuesta: "Rediseñar procesos para optimizar recursos"
tipo: mc

explicacion: |
  El control no solo implica detectar el error, sino implementar acciones correctivas para realinear el proyecto con los objetivos.
```

### 3 — Veracidad del control preventivo
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["prevencion", "verdadero_falso"]

enunciado: "El seguimiento y control debe realizarse únicamente al finalizar todas las fases del proyecto para asegurar que el resultado sea el esperado."

respuesta: falso
tipo: vf

explicacion: |
  El control debe ser continuo y preventivo. Esperar al final del proyecto para controlar impide realizar correcciones a tiempo, aumentando el riesgo de fracaso.
```

### 4 — Secuencia de gestión de desviaciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["procesos", "metodologia"]

enunciado: "Ordene los pasos lógicos que debe seguir un gestor de proyectos al detectar una desviación significativa en el alcance:"

opciones_explicitas: ["Identificar la causa raíz de la desviación", "Evaluar el impacto de la desviación en el cronograma y costo", "Implementar la acción correctiva necesaria", "Documentar la desviación y el cierre de la acción"]
respuesta: ["Identificar la causa raíz de la desviación", "Evaluar el impacto de la desviación en el cronograma y costo", "Implementar la acción correctiva necesaria", "Documentar la desviación y el cierre de la acción"]
tipo: ordenar

explicacion: |
  Un control efectivo requiere un análisis sistemático: primero entender por qué ocurrió, luego ver cuánto afecta, actuar y finalmente registrar para evitar repeticiones.
```

### 5 — Cálculo de variación de presupuesto
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["presupuesto", "calculo"]

variables:
  datos: [["Presupuesto: $1000, Real: $1200", 20.0], ["Presupuesto: $500, Real: $450", -10.0], ["Presupuesto: $2000, Real: $2000", 0.0]]
  idx: uno_de([0, 1, 2])

enunciado: "Se ha realizado el seguimiento financiero. Los datos son: {datos[idx][0]}. El porcentaje de variación presupuestaria es de: ___%."

respuestas_validas: ["20.0", "-10.0", "0.0"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La variación se calcula como ((Real - Planificado) / Planificado) * 100. Un valor positivo indica sobrecosto y uno negativo ahorro.
```