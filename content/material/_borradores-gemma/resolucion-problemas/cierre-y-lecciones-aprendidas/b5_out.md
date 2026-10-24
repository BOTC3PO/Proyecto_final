### 1 — El registro de lecciones aprendidas
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion", "post_mortem"]

variables:
  escenario: uno_de([
    ["El equipo no documentó los errores técnicos en el repositorio.", "falta_documentacion"],
    ["Se detectó que el presupuesto se excedió por un 20% por falta de previsión.", "desvio_presupuestario"],
    ["El cliente recibió el producto con retraso de dos semanas.", "retraso_entrega"]
  ])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["falta_documentacion", "desvio_presupuestario", "retraso_entrega", "exito_total"]

enunciado: "En un análisis post-mortem, se identifica que: {escenario[idx][0]}. ¿Cuál es la categoría principal de la lección aprendida?"

explicacion: |
  El registro de lecciones aprendidas debe categorizar el problema para facilitar la búsqueda de soluciones en proyectos futuros.
```

### 2 — ¿Es necesario un cierre formal?
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["metodologia", "cierre"]

respuesta: verdadero

tipo: vf

enunciado: "Realizar una reunión de cierre formal al finalizar un proyecto ayuda a mitigar la repetición de errores en ciclos futuros."

explicacion: |
  El cierre formal permite institucionalizar el conocimiento adquirido y no dejarlo solo en la memoria individual de los miembros del equipo.
```

### 3 — Secuencia de cierre de proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

variables:
  pasos_correctos: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]

opciones_explicitas: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]
respuesta: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]
tipo: ordenar

enunciado: "Ordena cronológicamente las actividades recomendadas para un cierre de proyecto estructurado:"

explicacion: |
  Primero se cumple con el entregable, luego se analiza lo sucedido con el equipo, se guarda la información y finalmente se libera al personal para nuevos proyectos.
```

### 4 — El componente crítico del aprendizaje
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "mejora_continua"]

variables:
  caso: uno_de([
    ["El software funcionó pero el costo de mantenimiento es altísimo.", "costo"],
    ["El código es excelente pero no cumple con los requisitos del usuario.", "alcance"],
    ["El proyecto terminó a tiempo pero el equipo está agotado (burnout).", "recursos"]
  ])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["costo", "alcance", "recursos"]

enunciado: "Analizando el siguiente caso: {caso[idx][0]}. La lección aprendida debe centrarse en la gestión de: ___"

explicacion: |
  Identificar el área afectada (costo, alcance o recursos) permite aplicar la corrección específica en la planificación del próximo proyecto.
```

### 5 — Veracidad de la documentación
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["calidad", "datos"]

variables:
  evaluacion: uno_de([
    [true, "Las lecciones se registraron en una base de datos accesible."],
    [false, "Las lecciones se quedaron en una charla informal de café."]
  ])

respuesta: evaluacion[idx][0]
tipo: vf

enunciado: "Para que una lección aprendida sea útil para la organización, debe estar registrada en un formato accesible y consultable, no solo discutida verbalmente. ¿Es esto verdadero?"

explicacion: |
  Si la información no es persistente y accesible, el conocimiento se pierde cuando el equipo cambia, invalidando el proceso de mejora continua.
```