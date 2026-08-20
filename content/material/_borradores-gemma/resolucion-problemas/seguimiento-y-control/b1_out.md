### 1 — Definición de seguimiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos", "gestion"]

respuesta: "monitoreo"
tipo: completar
respuestas_validas: ["monitoreo", "seguimiento"]

enunciado: "El proceso de recolectar, analizar y utilizar información para verificar que las actividades del proyecto se estén realizando según lo planificado se denomina ___."

explicacion: |
  El monitoreo (o seguimiento) es la función de recolectar datos sobre el estado actual del proyecto para compararlos con la línea base.
```

### 2 — Diferencia entre seguimiento y control
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos", "diferenciacion"]

variables:
  es_control: true

respuesta: es_control
tipo: vf

enunciado: "Si el proceso de seguimiento detecta una desviación significativa entre lo planificado y lo ejecutado, la acción de implementar medidas correctivas para volver al plan original se denomina 'Control'."

explicacion: |
  Correcto. El seguimiento observa la realidad, mientras que el control actúa sobre ella para corregir desviaciones.
```

### 3 — Elementos del control
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["procesos", "ciclo"]

variables:
  escenario: uno_de([
    ["Desviación detectada", "Acción correctiva"],
    ["Meta alcanzada", "Continuar monitoreo"],
    ["Error en reporte", "Revisar recolección de datos"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Acción correctiva", "Continuar monitoreo", "Revisar recolección de datos"]

enunciado: "En un proyecto, se observa que el costo real es un 20% superior al presupuesto planificado para la fase actual. ¿Cuál es la respuesta inmediata del proceso de control?"

explicacion: |
  Cuando se identifica una desviación (costo alto), el control debe ejecutar una {escenario[0]} para mitigar el impacto.
```

### 4 — Ciclo de gestión de desviaciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

respuesta: ["Identificar", "Analizar", "Actuar"]
tipo: ordenar
opciones_explicitas: ["Identificar", "Analizar", "Actuar"]

enunciado: "Ordene las etapas lógicas del proceso de control cuando se detecta un problema en un proyecto:"

explicacion: |
  Primero se identifica la desviación, luego se analiza la causa raíz y finalmente se actúa para corregirla.
```

### 5 — Indicadores de desempeño
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["indicadores", "KPI"]

variables:
  caso: uno_de([
    ["desviación", "retraso"],
    ["desviación", "sobrecosto"],
    ["desviación", "falta de calidad"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["retraso", "sobrecosto", "falta de calidad"]

enunciado: "Si el seguimiento indica que el cronograma muestra una {caso[0]} respecto a la fecha de entrega original, el control debe enfocarse en mitigar un ___."

explicacion: |
  Una desviación en el cronograma se traduce directamente en un retraso en la ejecución del proyecto.
```