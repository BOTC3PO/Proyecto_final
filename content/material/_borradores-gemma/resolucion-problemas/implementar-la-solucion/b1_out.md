### 1 — Definición de Implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["definicion", "etapas"]

respuesta: "implementar"
tipo: completar
respuestas_validas: ["implementar"]

enunciado: "La etapa de ___ consiste en llevar a la práctica la solución que ha sido seleccionada tras el proceso de evaluación de alternativas."

explicacion: |
  La implementación es la fase donde se ejecutan las acciones planificadas para resolver el problema original.
```

### 2 — El rol de la planificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["planificacion", "recursos"]

variables:
  es_correcta: verdadero

respuesta: es_correcta
tipo: vf

enunciado: "¿Es necesario realizar una asignación de recursos y una planificación de tareas antes de iniciar la implementación de una solución?"

pasos:
  - "Identificar los recursos necesarios (tiempo, personas, herramientas)."
  - "Establecer un cronograma de actividades."

explicacion: |
  Para que la implementación sea exitosa, es fundamental contar con una hoja de ruta que defina qué, cuándo y con qué se ejecutará la solución.
```

### 3 — Identificación de obstáculos
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["riesgos", "monitoreo"]

variables:
  escenario: uno_de([
    ["imprevistos", "ajustar la solución"],
    ["éxito total", "finalizar el proceso"],
    ["falta de recursos", "replanificar"]
  ])
  idx: uno_de([0, 1, 2])
  dato: escenario[idx]

respuesta: dato[1]
tipo: mc
opciones_explicitas: ["ajustar la solución", "finalizar el proceso", "replanificar"]

enunciado: "Durante la implementación, si se detectan {dato[0]}, la acción inmediata debe ser ___."

explicacion: |
  La implementación no es un proceso estático; requiere flexibilidad para adaptarse a los cambios o dificultades que surjan en el entorno.
```

### 4 — Secuencia de la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["orden", "proceso"]

respuesta: ["asignar", "ejecutar", "monitorear", "evaluar"]
tipo: ordenar
opciones_explicitas: ["asignar", "ejecutar", "monitorear", "evaluar"]

enunciado: "Ordene cronológicamente las acciones típicas de un proceso de implementación de una solución técnica:"

explicacion: |
  Primero se asignan los recursos, luego se ejecuta la acción, se monitorea el progreso y finalmente se evalúa el resultado obtenido.
```

### 5 — El concepto de monitoreo
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["monitoreo", "control"]

variables:
  tipo_monitoreo: uno_de([
    ["proactivo", "prevenir errores"],
    ["reactivo", "corregir errores"]
  ])
  idx: uno_de([0, 1])
  dato: tipo_monitoreo[idx]

respuesta: dato[1]
tipo: mc
opciones_explicitas: ["prevenir errores", "corregir errores"]

enunciado: "Si el monitoreo se realiza de forma {dato[0]}, el objetivo principal es ___."

explicacion: |
  El monitoreo puede ser proactivo (para anticiparse a fallos) o reactivo (para responder cuando el fallo ya ocurrió).
```