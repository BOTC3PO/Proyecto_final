### 1 — El propósito del cierre
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "terminacion"]

tipo: mc
opciones_explicitas: ["Finalizar las tareas pendientes únicamente", "Documentar el conocimiento para futuros proyectos", "Entregar el producto al cliente y olvidar el proceso", "Eliminar toda la documentación técnica"]

respuesta: "Documentar el conocimiento para futuros proyectos"

enunciado: "El objetivo principal de una sesión de lecciones aprendidas es ___."

explicacion: |
  El cierre formal no solo implica entregar el producto, sino capturar el conocimiento adquirido para evitar repetir errores y replicar éxitos en futuros proyectos.
```

### 2 — ¿Es el cierre un proceso formal?
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conceptos_clave"]

tipo: vf

respuesta: verdadero

enunciado: "El cierre formal de un proyecto es un proceso administrativo que debe realizarse independientemente de si el proyecto fue exitoso o no."

explicacion: |
  Incluso en proyectos fallidos, la fase de cierre es crucial para entender las causas del fracaso y evitar que se repitan en el futuro.
```

### 3 — Componentes de la lección aprendida
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El equipo no cumplió con los plazos debido a una mala estimación de recursos", "Falta de planificación de recursos"],
    ["La comunicación con el cliente fue fluida y los requerimientos no cambiaron", "Comunicación efectiva"]
  ]

tipo: completar
respuestas_validas: ["Falta de planificación de recursos", "Comunicación efectiva"]
respuesta: escenarios[escenario_idx][1]

enunciado: "Analizando el siguiente caso: '{escenarios[escenario_idx][0]}', la lección aprendida principal es: ___."

explicacion: |
  Una lección aprendida debe identificar la causa raíz (lo que pasó) y la acción correctiva o positiva (la lección) de forma clara y accionable.
```

### 4 — Secuencia del proceso de cierre
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Validación de entregables con el cliente", "Reunión de retrospectiva con el equipo", "Archivo de documentación y liberación de recursos", "Análisis de lecciones aprendidas"]
respuesta: ["Validación de entregables con el cliente", "Reunión de retrospectiva con el equipo", "Análisis de lecciones aprendidas", "Archivo de documentación y liberación de recursos"]

enunciado: "Ordene cronológicamente las etapas lógicas para el cierre formal de un proyecto:"

explicacion: |
  Primero se debe asegurar que el cliente acepte el trabajo, luego se analiza el desempeño con el equipo, se extraen las lecciones y finalmente se formaliza el archivo de documentos y la liberación de recursos.
```

### 5 — El valor de la documentación
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conocimiento", "activos"]

tipo: mc
opciones_explicitas: ["Es una pérdida de tiempo si el proyecto fue exitoso", "Es un activo de la organización", "Solo es necesaria si el cliente lo exige", "Es un documento opcional que no debe guardarse"]

respuesta: "Es un activo de la organización"

enunciado: "Desde la perspectiva de la gestión del conocimiento, las lecciones aprendidas se consideran ___."

explicacion: |
  Las lecciones aprendidas forman parte de los 'activos de los procesos de la organización', permitiendo que el conocimiento no se pierda cuando el equipo se disuelve.
```