### 1 — Concepto de Heurística
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["definicion", "evaluacion"]

respuesta: "reglas generales"
tipo: completar
respuestas_validas: ["reglas generales", "guías de diseño", "estándares rígidos"]

enunciado: "Las heurísticas de Nielsen se definen como ___ que sirven para evaluar la usabilidad de una interfaz."

explicacion: |
  Las heurísticas no son reglas estrictas, sino principios o guías generales que ayudan a identificar problemas de usabilidad.
```

### 2 — Visibilidad del estado del sistema
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["visibilidad", "estado_sistema"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Una barra de progreso que indica la carga de un archivo", "verdadero"],
    ["Un botón que no cambia de color al hacer clic", "falso"]
  ]

respuesta: escenarios[caso_idx][1]
tipo: vf

enunciado: "En el siguiente caso: '{escenarios[caso_idx][0]}', ¿se está cumpliendo la heurística de 'Visibilidad del estado del sistema'?"

explicacion: |
  La visibilidad del estado del sistema requiere que el sistema mantenga informado al usuario sobre lo que está sucediendo, mediante retroalimentación apropiada y en un tiempo razonable.
```

### 3 — Prevención de errores vs. Mensajes de error
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "intermedio"
  tags: ["prevencion", "errores"]

respuesta: "Prevención de errores"
tipo: mc
opciones_explicitas: ["Prevención de errores", "Recuperación de errores", "Consistencia y estándares"]

enunciado: "Diseñar un sistema que impida que el usuario cometa un error (por ejemplo, deshabilitando un botón hasta que se completen los campos) es un ejemplo de:"

explicacion: |
  La heurística de 'Prevención de errores' busca evitar que el error ocurra, en lugar de solo mostrar un mensaje cuando ya ha sucedido.
```

### 4 — Consistencia y estándares
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["consistencia", "estándares"]

respuesta: "Consistencia y estándares"
tipo: mc
opciones_explicitas: ["Consistencia y estándares", "Control y libertad del usuario", "Relación entre el sistema y el mundo real"]

enunciado: "Si un usuario espera que el icono de una lupa sirva para buscar porque lo ha visto en otras aplicaciones, la interfaz está respetando la heurística de:"

explicacion: |
  La consistencia permite que el usuario aplique conocimientos previos de otras interfaces al sistema actual, reduciendo la carga cognitiva.
```

### 5 — Orden de los principios de evaluación
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "intermedio"
  tags: ["evaluacion", "metodologia"]

respuesta: ["Identificar problemas", "Priorizar problemas", "Proponer soluciones"]
tipo: ordenar
opciones_explicitas: ["Identificar problemas", "Priorizar problemas", "Proponer soluciones"]

enunciado: "En un proceso de inspección heurística, el orden lógico de las acciones es:"

explicacion: |
  Primero se detectan los problemas de usabilidad, luego se clasifican según su severidad (priorización) y finalmente se sugieren mejoras.
```