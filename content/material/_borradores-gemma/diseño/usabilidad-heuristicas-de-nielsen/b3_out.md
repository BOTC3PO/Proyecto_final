### 1 — Consistencia y estándares
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["consistencia", "nielsen", "usabilidad"]

respuesta: "consistencia"
tipo: completar
respuestas_validas: ["consistencia"]

enunciado: "Cuando una interfaz utiliza elementos que no siguen las convenciones de la plataforma o que cambian su comportamiento en diferentes secciones, se está violando la heurística de ___."

explicacion: |
  La consistencia asegura que el usuario no tenga que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.
```

### 2 — Visibilidad del estado del sistema
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["visibilidad", "feedback", "nielsen"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un usuario hace clic en 'Subir archivo' y no aparece ningún indicador de carga.", "falso"],
    ["Una barra de progreso muestra el avance de una descarga de software.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: vf

enunciado: "En el siguiente caso: '{escenarios[escenario_idx][0]}', ¿se está cumpliendo la heurística de 'Visibilidad del estado del sistema'?"

pasos:
  - "Identificar si existe feedback inmediato sobre la acción realizada."
  - "Evaluar si el usuario sabe qué está pasando en el sistema."

explicacion: |
  La visibilidad del estado del sistema requiere que el sistema mantenga informados a los usuarios sobre lo que está ocurriendo, mediante feedback apropiado y en un tiempo razonable.
```

### 3 — Prevención de errores vs. Mensajes de error
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["prevencion_errores", "nielsen"]

opciones_explicitas: ["Prevenir el error antes de que ocurra", "Informar sobre el error una vez cometido", "Ambas son correctas y complementarias"]
respuesta: uno_de(["Prevenir el error antes de que ocurra", "Informar sobre el error una vez cometido", "Ambas son correctas y complementarias"])
tipo: mc

enunciado: "Según Nielsen, la heurística de 'Prevención de errores' es más efectiva cuando se logra: "

explicacion: |
  Aunque los mensajes de error son necesarios, la prevención (como deshabilitar un botón hasta que el formulario esté completo) es una práctica de diseño superior para evitar la frustración del usuario.
```

### 4 — Control y libertad del usuario
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["control", "libertad", "nielsen"]

opciones_explicitas: ["Botón de cancelar", "Botón de aceptar", "Botón de ayuda", "Botón de cerrar sesión"]
respuesta: "Botón de cancelar"
tipo: mc

enunciado: "Para cumplir con la heurística de 'Control y libertad del usuario', ante una acción accidental, la interfaz debe ofrecer una salida clara, como por ejemplo un: "

explicacion: |
  Los usuarios a menudo eligen funciones por error y necesitan una "salida de emergencia" claramente marcada para abandonar el estado no deseado sin tener que pasar por un proceso largo.
```

### 5 — Reconocimiento antes que recuerdo
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["memoria", "reconocimiento", "nielsen"]

respuesta: 1
tipo: mc
opciones_explicitas: ["Aumentar la carga cognitiva del usuario", "Minimizar la carga cognitiva del usuario", "Hacer que el usuario aprenda más rápido"]

enunciado: "La heurística de 'Reconocimiento antes que recuerdo' busca que la información necesaria para realizar una acción esté visible o sea fácilmente recuperable, con el fin de: "

explicacion: |
  El cerebro humano es mucho mejor reconociendo patrones visuales que recordando información de memoria. Reducir la carga cognitiva mejora la eficiencia y la satisfacción.
```