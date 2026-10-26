# Resolucion Problemas — Cierre y lecciones aprendidas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
  escenarios: [["El equipo no cumplió con los plazos debido a una mala estimación de recursos", "Falta de planificación de recursos"], ["La comunicación con el cliente fue fluida y los requerimientos no cambiaron", "Comunicación efectiva"]]

tipo: completar
respuestas_validas:
  - "Falta de planificación de recursos"
  - "Comunicación efectiva"
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
respuesta_orden: ["Validación de entregables con el cliente", "Reunión de retrospectiva con el equipo", "Análisis de lecciones aprendidas", "Archivo de documentación y liberación de recursos"]

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

### 6 — El cierre del proyecto "Alpha"

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion", "cierre"]

enunciado: "Al finalizar el proyecto 'Alpha', el equipo detectó que el uso de metodologías ágiles permitió una entrega 2 semanas antes de lo previsto. Sin embargo, la falta de documentación técnica generó retrasos en el mantenimiento. ¿Cuál es la acción principal en esta etapa de cierre?"

opciones_explicitas: ["Realizar una reunión de retrospectiva para registrar lecciones aprendidas", "Entregar el producto y disolver el equipo inmediatamente", "Ignorar los errores para mantener la moral alta"]

respuesta: "Realizar una reunión de retrospectiva para registrar lecciones aprendidas"
tipo: mc

explicacion: |
  El cierre formal no es solo entregar el producto, sino capturar el conocimiento (lecciones aprendidas) para mejorar procesos futuros.
```

### 7 — Identificación de causas

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "causa_raiz"]

variables:
  datos: [["Falta de comunicación", "Retraso en aprobaciones"], ["Error de presupuesto", "Compra de materiales"], ["Falta de capacitación", "Lentitud en ejecución"]]
  idx: uno_de([0,1,2])

enunciado: "En el caso analizado, se identificó que la consecuencia observada fue: {datos[idx][1]}. El problema principal (causa raíz) que la originó fue: ___"

respuesta: datos[idx][0]
respuestas_validas:
  - datos[idx][0]
tipo: completar

explicacion: |
  Identificar la causa raíz y su consecuencia es vital para que la lección aprendida sea accionable en el siguiente proyecto.
```

### 8 — Veracidad de la gestión de lecciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["verdadero_falso"]

enunciado: "Si las lecciones aprendidas de un proyecto no se documentan en un repositorio accesible, se dice que el proceso de cierre ha sido efectivo para la organización."

respuesta: falso
tipo: vf

explicacion: |
  Un cierre es ineficaz si el conocimiento se pierde con la disolución del equipo; la documentación es clave para la mejora continua.
```

### 9 — Secuencia de cierre formal

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Entrega final y aceptación del cliente", "Reunión de retrospectiva y registro de lecciones", "Archivo de documentación y liberación de recursos", "Análisis de cumplimiento de objetivos"]

respuesta_orden: ["Entrega final y aceptación del cliente", "Análisis de cumplimiento de objetivos", "Reunión de retrospectiva y registro de lecciones", "Archivo de documentación y liberación de recursos"]
tipo: ordenar

enunciado: "Ordene las fases lógicas del cierre de un proyecto:"

explicacion: |
  El orden lógico implica primero validar el éxito con el cliente, analizar el desempeño, extraer el conocimiento y finalmente liberar los recursos.
```

### 10 — El valor de los errores

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["mejora_continua"]

variables:
  escenario: uno_de([["Error en estimación de tiempos", "Mejorar uso de software de gestión"], ["Conflicto de roles", "Definir matrices de responsabilidad"]])

enunciado: "Durante el cierre, se detectó: {escenario[0]}. La acción correctiva para el próximo proyecto será: ___"

respuesta: escenario[1]
respuestas_validas:
  - escenario[1]
tipo: completar

explicacion: |
  Las lecciones aprendidas deben transformarse en acciones concretas (acciones correctivas) para evitar la repetición de errores.
```

### 11 — El propósito de la lección aprendida

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "mejora_continua"]

tipo: mc
opciones_explicitas: ["Documentar errores para buscar culpables", "Identificar procesos para mejorar futuros proyectos", "Cerrar el proyecto para que no se repitan errores", "Hacer una lista de tareas pendientes"]
respuesta: "Identificar procesos para mejorar futuros proyectos"
enunciado: "El objetivo principal de una sesión de lecciones aprendidas es:"
explicacion: |
  El propósito no es buscar culpables, sino identificar qué procesos, herramientas o decisiones funcionaron o fallaron para optimizar la ejecución de proyectos futuros.
```

### 12 — El momento del registro

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

### 13 — Elementos de una lección aprendida efectiva

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "calidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El equipo no comunicó un retraso en la entrega de un proveedor", "Falta de comunicación proactiva"], ["Se utilizó una herramienta de gestión que nadie sabía usar", "Falta de capacitación técnica"]]

tipo: completar
respuestas_validas:
  - "Falta de comunicación proactiva"
  - "Falta de capacitación técnica"
respuesta: escenarios[escenario_idx][1]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}. La causa raíz identificada es: ___"

explicacion: |
  Una buena lección aprendida debe desglosar el problema en una causa raíz clara para que la acción correctiva sea efectiva.
```

### 14 — Flujo de la sesión de cierre

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos y hechos del proyecto", "Analizar causas raíz de éxitos y fracasos", "Definir acciones preventivas y correctivas", "Integrar lecciones en la base de conocimientos"]

enunciado: "Ordene los pasos lógicos para realizar un proceso de cierre y lecciones aprendidas efectivo:"

respuesta_orden: ["Recopilar datos y hechos del proyecto", "Analizar causas raíz de éxitos y fracasos", "Definir acciones preventivas y correctivas", "Integrar lecciones en la base de conocimientos"]

explicacion: |
  No se pueden proponer soluciones sin antes haber analizado las causas, y no sirve de nada analizar si la información no se almacena para el futuro.
```

### 15 — El error de la subjetividad

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "sesgos"]

tipo: mc
respuesta: "Basarse en datos y métricas objetivas"
opciones_explicitas: ["Basarse en opiniones personales", "Basarse en datos y métricas objetivas", "Basarse en la percepción del cliente únicamente", "Basarse en la memoria de los participantes"]

enunciado: "Para evitar sesgos durante la fase de lecciones aprendidas, la información debe basarse en:"

explicacion: |
  Las opiniones son valiosas, pero para que una lección aprendida sea útil y replicable, debe estar respaldada por datos (tiempos, costos, cantidad de errores, etc.) que demuestren la tendencia.
```

### 16 — Cierre vs. Entrega

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "terminacion"]

enunciado: "Mientras que la 'entrega' se refiere al traspaso del producto al cliente, el ___ se refiere al proceso administrativo y formal de finalizar todas las actividades del proyecto."

respuestas_validas:
  - "cierre"
tipo: completar

explicacion: |
  El cierre es el proceso administrativo que asegura que todos los contratos se hayan completado, los recursos se hayan liberado y la documentación esté lista, independientemente de si el producto fue entregado con éxito.
```

### 17 — Lecciones Aprendidas vs. Reporte de Estado

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "mejora_continua"]

variables:
  es_correcta: verdadero

enunciado: "El propósito principal de un 'Reporte de Estado' es informar el progreso actual, mientras que el propósito de las 'Lecciones Aprendidas' es ___."

opciones_explicitas: ["mejorar procesos futuros", "notificar retrasos", "justificar el presupuesto"]
respuesta: "mejorar procesos futuros"
tipo: mc

explicacion: |
  El reporte de estado es una herramienta de control de ejecución, mientras que las lecciones aprendidas son una herramienta de gestión del conocimiento para la mejora continua.
```

### 18 — Retrospectiva vs. Auditoría

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["control", "calidad"]

enunciado: "¿Es correcto afirmar que una 'Auditoría de Proyecto' busca identificar errores para el aprendizaje, mientras que una 'Retrospectiva' busca verificar el cumplimiento de estándares y normativas?"

respuesta: falso
tipo: vf
explicacion: |
  Es al revés: la Retrospectiva (común en metodologías ágiles) se enfoca en el aprendizaje y la mejora del equipo, mientras que la Auditoría es un proceso formal para verificar el cumplimiento de procesos, normas o estándares.
```

### 19 — Flujo de Cierre de Proyecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

enunciado: "Ordene los pasos lógicos para un cierre de proyecto efectivo, desde la finalización técnica hasta la liberación de recursos."

opciones_explicitas: ["Aceptación formal del cliente", "Documentación de lecciones aprendidas", "Liberación de equipo y recursos", "Cierre administrativo y contractual"]
respuesta_orden: ["Aceptación formal del cliente", "Documentación de lecciones aprendidas", "Liberación de equipo y recursos", "Cierre administrativo y contractual"]
tipo: ordenar

explicacion: |
  Primero se valida el éxito con el cliente, luego se extrae el conocimiento (lecciones), después se libera el capital humano/material y finalmente se cierran los aspectos legales y administrativos.
```

### 20 — Registro de Lecciones Aprendidas

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conocimiento", "archivo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un error en la comunicación", "mejorar la reunión diaria"], ["un retraso en el proveedor", "revisar la cadena de suministro"]]

enunciado: "Si el problema detectado fue {escenario[idx][0]}, la acción correctiva para el próximo proyecto debería ser: ___"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["mejorar la reunión diaria", "revisar la cadena de suministro"]

explicacion: |
  Las lecciones aprendidas deben ser específicas para el problema detectado para que la acción correctiva sea efectiva en el futuro.
```

### 21 — El registro de lecciones aprendidas

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion", "post_mortem"]

variables:
  escenario: uno_de([["El equipo no documentó los errores técnicos en el repositorio.", "falta_documentacion"], ["Se detectó que el presupuesto se excedió por un 20% por falta de previsión.", "desvio_presupuestario"], ["El cliente recibió el producto con retraso de dos semanas.", "retraso_entrega"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["falta_documentacion", "desvio_presupuestario", "retraso_entrega", "exito_total"]

enunciado: "En un análisis post-mortem, se identifica que: {escenario[0]}. ¿Cuál es la categoría principal de la lección aprendida?"

explicacion: |
  El registro de lecciones aprendidas debe categorizar el problema para facilitar la búsqueda de soluciones en proyectos futuros.
```

### 22 — ¿Es necesario un cierre formal?

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

### 23 — Secuencia de cierre de proyecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]
respuesta_orden: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]
tipo: ordenar

enunciado: "Ordena cronológicamente las actividades recomendadas para un cierre de proyecto estructurado:"

explicacion: |
  Primero se cumple con el entregable, luego se analiza lo sucedido con el equipo, se guarda la información y finalmente se libera al personal para nuevos proyectos.
```

### 24 — El componente crítico del aprendizaje

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "mejora_continua"]

variables:
  caso: uno_de([["El software funcionó pero el costo de mantenimiento es altísimo.", "costo"], ["El código es excelente pero no cumple con los requisitos del usuario.", "alcance"], ["El proyecto terminó a tiempo pero el equipo está agotado (burnout).", "recursos"]])

respuesta: caso[1]
tipo: completar

enunciado: "Analizando el siguiente caso: {caso[0]}. La lección aprendida debe centrarse en la gestión de: ___"

explicacion: |
  Identificar el área afectada (costo, alcance o recursos) permite aplicar la corrección específica en la planificación del próximo proyecto.
```

### 25 — Veracidad de la documentación

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["calidad", "datos"]

respuesta: verdadero
tipo: vf
enunciado: "Para que una lección aprendida sea útil para la organización, debe estar registrada en un formato accesible y consultable, no solo discutida verbalmente. ¿Es esto verdadero?"

explicacion: |
  Si la información no es persistente y accesible, el conocimiento se pierde cuando el equipo cambia, invalidando el proceso de mejora continua.
```
