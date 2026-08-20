### 1 — El propósito de la lección aprendida
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "mejora_continua"]

tipo: mc
opciones_explicitas: ["Documentar errores para buscar culpables", "Identificar procesos para mejorar futuros proyectos", "Cerrar el proyecto para que no se repitan errores", "Hacer una lista de tareas pendientes"]

enunciado: "El objetivo principal de una sesión de lecciones aprendidas es:"

explicacion: |
  El propósito no es buscar culpables, sino identificar qué procesos, herramientas o decisiones funcionaron o fallaron para optimizar la ejecución de proyectos futuros.
```

### 2 — El momento del registro
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["timing", "gestion_proyectos"]

tipo: vf
enunciado: "La fase de lecciones aprendidas debe realizarse exclusivamente después de que el cliente haya firmado la aceptación final del proyecto, sin posibilidad de realizar cambios en el proceso actual."

respuesta: falso

explicacion: |
  Aunque el cierre formal es clave, realizar retrospectivas durante el proyecto (en fases o sprints) permite aplicar las lecciones aprendidas de forma inmediata, evitando que los errores se arrastren hasta el final.
```

### 3 — Elementos de una lección aprendida efectiva
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "calidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El equipo no comunicó un retraso en la entrega de un proveedor", "Falta de comunicación proactiva"],
    ["Se utilizó una herramienta de gestión que nadie sabía usar", "Falta de capacitación técnica"]
  ]

tipo: completar
respuestas_validas: ["Falta de comunicación proactiva", "Falta de capacitación técnica"]
respuesta: escenarios[escenario_idx][1]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}. La causa raíz identificada es: ___"

explicacion: |
  Una buena lección aprendida debe desglosar el problema en una causa raíz clara para que la acción correctiva sea efectiva.
```

### 4 — Flujo de la sesión de cierre
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos y hechos del proyecto", "Analizar causas raíz de éxitos y fracasos", "Definir acciones preventivas y correctivas", "Integrar lecciones en la base de conocimientos"]

enunciado: "Ordene los pasos lógicos para realizar un proceso de cierre y lecciones aprendidas efectivo:"

respuesta: ["Recopilar datos y hechos del proyecto", "Analizar causas raíz de éxitos y fracasos", "Definir acciones preventivas y correctivas", "Integrar lecciones en la base de conocimientos"]

explicacion: |
  No se pueden proponer soluciones sin antes haber analizado las causas, y no sirve de nada analizar si la información no se almacena para el futuro.
```

### 5 — El error de la subjetividad
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "sesgos"]

tipo: mc
opciones_explicitas: ["Basarse en opiniones personales", "Basarse en datos y métricas objetivas", "Basarse en la percepción del cliente únicamente", "Basarse en la memoria de los participantes"]

enunciado: "Para evitar sesgos durante la fase de lecciones aprendidas, la información debe basarse en:"

explicacion: |
  Las opiniones son valiosas, pero para que una lección aprendida sea útil y replicable, debe estar respaldada por datos (tiempos, costos, cantidad de errores, etc.) que demuestren la tendencia.
```