### 1 — Visibilidad del estado del sistema
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "heuristicas", "visibilidad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un usuario sube un archivo pesado y no aparece ningún indicador de carga.", "Visibilidad del estado del sistema"], ["Un usuario borra un correo y el elemento desaparece instantáneamente sin aviso.", "Visibilidad del estado del sistema"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Visibilidad del estado del sistema", "Consistencia y estándares", "Prevención de errores", "Control y libertad del usuario"]

enunciado: "En el siguiente caso: '{escenarios[escenario_idx][0]}' ¿Qué heurística de Nielsen se está incumpliendo?"

explicacion: |
  La heurística de 'Visibilidad del estado del sistema' exige que el sistema mantenga siempre informados a los usuarios sobre lo que está sucediendo, mediante retroalimentación apropiada en un tiempo razonable.
```

### 2 — Prevención de errores
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "prevencion_errores"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["El sistema permite que un usuario haga clic en 'Eliminar cuenta' sin confirmar la acción.", "prevencion"], ["El sistema muestra un mensaje de error genérico que no explica cómo solucionar el problema.", "error"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas: ["prevencion", "error"]

enunciado: "Analiza el siguiente escenario: '{casos[caso_idx][0]}'. El diseño falla en la heurística de ___."

explicacion: |
  Una buena prevención de errores implica diseñar la interfaz de modo que se eviten errores comunes antes de que ocurran, como pedir una confirmación antes de una acción destructiva.
```

### 3 — Consistencia y estándares
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "consistencia"]

variables:
  elemento_idx: uno_de([0,1])
  elementos: [["El botón de 'Aceptar' es azul en una pantalla y rojo en la siguiente.", "Consistencia y estándares"], ["El icono de una lupa se usa para 'Buscar' en todo el sitio.", "Consistencia y estándares"]]

respuesta: elementos[elemento_idx][1]
tipo: mc
opciones_explicitas: ["Consistencia y estándares", "Relación entre el sistema y el mundo real", "Reconocimiento antes que recuerdo", "Estética y diseño minimalista"]

enunciado: "Si en una aplicación '{elementos[elemento_idx][0]}', estamos violando la heurística de: "

explicacion: |
  La consistencia asegura que el usuario no tenga que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.
```

### 4 — Control y libertad del usuario
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "control_libertad"]

variables:
  accion_idx: uno_de([0,1])
  acciones: [["El usuario cometió un error y necesita deshacer la última acción.", "true"], ["El usuario quiere salir de un modo de edición sin guardar cambios.", "true"]]

respuesta: acciones[accion_idx][0]
tipo: vf

enunciado: "Si un usuario necesita poder 'deshacer' o 'rehacer' acciones para corregir errores accidentales, ¿se está cumpliendo la heurística de 'Control y libertad del usuario'? "

explicacion: |
  Los usuarios a menudo eligen funciones del sistema por error. Deben tener una "salida de emergencia" claramente marcada para abandonar el estado no deseado sin tener que pasar por un proceso largo.
```

### 5 — Ayuda y documentación
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["nielsen", "ayuda_documentacion"]

variables:
  contexto_idx: uno_de([0,1])
  contextos: [["Un usuario experto busca comandos rápidos mediante atajos de teclado.", "Ayuda y documentación"], ["Un usuario nuevo no sabe cómo realizar una tarea compleja y busca un manual.", "Ayuda y documentación"]]

respuesta: contextos[contexto_idx][1]
tipo: ordenar
opciones_explicitas: ["Ayuda y documentación"]

enunciado: "Para que un sistema sea usable, cuando el usuario no puede recordar cómo realizar una tarea, debe poder consultar la ___."

explicacion: |
  Aunque es lo ideal que el sistema sea intuitivo, siempre debe haber información disponible (documentación o ayuda) que sea fácil de buscar y enfocada en la tarea del usuario.
```