# Diseño — Usabilidad heuristicas de nielsen (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Heurística

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["definicion", "evaluacion"]

respuesta: "reglas generales"
tipo: completar
respuestas_validas:
  - "reglas generales"
  - "guías de diseño"
  - "estándares rígidos"

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
  escenarios: [["Una barra de progreso que indica la carga de un archivo", "verdadero"], ["Un botón que no cambia de color al hacer clic", "falso"]]

respuesta: escenarios[caso_idx][1]
tipo: completar
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

respuesta_orden: ["Identificar problemas", "Priorizar problemas", "Proponer soluciones"]
tipo: ordenar
opciones_explicitas: ["Identificar problemas", "Priorizar problemas", "Proponer soluciones"]

enunciado: "En un proceso de inspección heurística, el orden lógico de las acciones es:"

explicacion: |
  Primero se detectan los problemas de usabilidad, luego se clasifican según su severidad (priorización) y finalmente se sugieren mejoras.
```

### 6 — Visibilidad del estado del sistema

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "usabilidad", "feedback"]

enunciado: "Un usuario está subiendo un archivo de 500MB a una plataforma en la nube. La interfaz muestra una barra de progreso que avanza lentamente y un indicador de 'Subiendo...'. ¿Qué heurística de Nielsen se está aplicando correctamente en este caso?"

opciones_explicitas: ["Prevención de errores", "Visibilidad del estado del sistema", "Consistencia y estándares", "Control y libertad del usuario"]

respuesta: "Visibilidad del estado del sistema"
tipo: "mc"

explicacion: |
  La heurística de 'Visibilidad del estado del sistema' establece que el sistema debe mantener siempre informados a los usuarios sobre lo que está sucediendo, mediante feedback apropiado en un tiempo razonable. La barra de progreso es el ejemplo clásico.
```

### 7 — Prevención de errores

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "prevencion_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema pregunta '¿Estás seguro de que quieres borrar este archivo?' antes de ejecutar la acción.", "prevencion"], ["El sistema muestra un mensaje de error después de que el usuario hizo clic en un botón inexistente.", "error_post"]]

enunciado: "Analizamos el siguiente caso: {escenarios[escenario_idx][0]}. Según la heurística de 'Prevención de errores', esta acción es: ___"

respuestas_validas:
  - "correcta"
  - "incorrecta"

respuesta: "correcta"
tipo: "completar"

explicacion: |
  La prevención de errores es preferible a un buen mensaje de error. Al pedir confirmación antes de una acción destructiva, el diseño evita que el error ocurra, cumpliendo con la heurística.
```

### 8 — Consistencia y estándares

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "consistencia"]

enunciado: "En una aplicación de e-commerce, el botón de 'Confirmar compra' es de color verde en la pantalla de carrito, pero en la pantalla de pago es de color rojo y está ubicado en la esquina superior izquierda. ¿Esta interfaz cumple con la heurística de 'Consistencia y estándares'?"

opciones_explicitas: [falso, verdadero]

respuesta: falso
tipo: "vf"

explicacion: |
  La consistencia asegura que los elementos con la misma función tengan la misma apariencia y comportamiento en toda la aplicación, evitando la confusión del usuario.
```

### 9 — Reconocimiento antes que recuerdo

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["nielsen", "carga_cognitiva"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un buscador que muestra los términos de búsqueda recientes justo debajo del campo de texto.", "reconocimiento"], ["Un sistema que obliga al usuario a recordar un código de 8 dígitos que apareció hace 5 pantallas para completar un formulario.", "recuerdo"]]

enunciado: "Se presenta el siguiente caso de uso: {casos[caso_idx][0]}. ¿Este diseño favorece el 'Reconocimiento antes que recuerdo'?"

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: "vf"

explicacion: |
  Minimizar la carga de la memoria de trabajo del usuario mediante pistas visuales o historial de acciones es clave para la usabilidad. El reconocimiento es más fácil y rápido que el recuerdo.
```

### 10 — Flujo de recuperación de errores

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "control_usuario"]

enunciado: "Un usuario comete un error al llenar un formulario de registro y, tras presionar 'Enviar', la página se recarga borrando todos los campos. Para cumplir con la heurística de 'Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de errores', el sistema debería seguir este orden lógico de acción:"

opciones_explicitas: ["1. Mostrar un mensaje de error claro", "2. Indicar qué campos están mal", "3. Permitir la corrección sin perder los datos ya ingresados"]

respuesta_orden: ["1. Mostrar un mensaje de error claro", "2. Indicar qué campos están mal", "3. Permitir la corrección sin perder los datos ya ingresados"]
tipo: "ordenar"

explicacion: |
  La recuperación de errores debe ser sencilla. Un buen diseño no solo dice que algo salió mal, sino que señala exactamente dónde está el error y permite al usuario corregirlo sin tener que empezar de cero.
```

### 11 — Consistencia y estándares

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["consistencia", "nielsen", "usabilidad"]

respuesta: "consistencia"
tipo: completar
respuestas_validas:
  - "consistencia"

enunciado: "Cuando una interfaz utiliza elementos que no siguen las convenciones de la plataforma o que cambian su comportamiento en diferentes secciones, se está violando la heurística de ___."

explicacion: |
  La consistencia asegura que el usuario no tenga que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.
```

### 12 — Visibilidad del estado del sistema

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["visibilidad", "feedback", "nielsen"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un usuario hace clic en 'Subir archivo' y no aparece ningún indicador de carga.", "falso"], ["Una barra de progreso muestra el avance de una descarga de software.", "verdadero"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
enunciado: "En el siguiente caso: '{escenarios[escenario_idx][0]}', ¿se está cumpliendo la heurística de 'Visibilidad del estado del sistema'?"

pasos:
  - "Identificar si existe feedback inmediato sobre la acción realizada."
  - "Evaluar si el usuario sabe qué está pasando en el sistema."

explicacion: |
  La visibilidad del estado del sistema requiere que el sistema mantenga informados a los usuarios sobre lo que está ocurriendo, mediante feedback apropiado y en un tiempo razonable.
```

### 13 — Prevención de errores vs. Mensajes de error

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

### 14 — Control y libertad del usuario

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

### 15 — Reconocimiento antes que recuerdo

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["memoria", "reconocimiento", "nielsen"]

respuesta: "Minimizar la carga cognitiva del usuario"
tipo: mc
opciones_explicitas: ["Aumentar la carga cognitiva del usuario", "Minimizar la carga cognitiva del usuario", "Hacer que el usuario aprenda más rápido"]

enunciado: "La heurística de 'Reconocimiento antes que recuerdo' busca que la información necesaria para realizar una acción esté visible o sea fácilmente recuperable, con el fin de: "

explicacion: |
  El cerebro humano es mucho mejor reconociendo patrones visuales que recordando información de memoria. Reducir la carga cognitiva mejora la eficiencia y la satisfacción.
```

### 16 — Consistencia y estándares

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["consistencia", "estándares", "nielsen"]

enunciado: "La heurística de 'Consistencia y estándares' se diferencia de la 'Consistencia interna' en que la primera se refiere a seguir convenciones externas (como el icono de un carrito para compras), mientras que la segunda se refiere a que ___ dentro de la misma aplicación."

pasos:
  - "Identificar la diferencia entre normas externas y coherencia interna."

respuestas_validas:
  - "los elementos se comporten de la misma manera"

respuesta: "los elementos se comporten de la misma manera"
tipo: completar

explicacion: |
  La consistencia externa asegura que el usuario no tenga que aprender nuevas reglas al usar tu app (usar patrones conocidos), mientras que la consistencia interna asegura que si un botón de 'Aceptar' es azul en una pantalla, no sea rojo en otra.
```

### 17 — Control y libertad del usuario

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["control", "libertad", "nielsen"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: ["El usuario hace clic en un enlace por error y necesita volver atrás.", "El usuario está completando un formulario largo y quiere borrar un campo sin reiniciar todo.", "El usuario borró un archivo importante por accidente."]

enunciado: "Considerando el escenario: {escenarios[escenario_idx]}, la heurística de 'Control y libertad del usuario' se aplica mediante la provisión de una función de ___."

opciones_explicitas:
  - "Deshacer"
  - "Confirmación de salida"
  - "Carga automática"

respuesta: "Deshacer"
tipo: mc

explicacion: |
  La libertad del usuario requiere que existan "salidas de emergencia" claras, como el botón de deshacer (undo) o el botón de atrás, para que el usuario pueda revertir acciones involuntarias.
```

### 18 — Prevención de errores vs. Mensajes de error

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["prevencion_errores", "mensajes_error", "nielsen"]

variables:
  caso_idx: uno_de([0, 1])
  casos: ["Mostrar una advertencia antes de que el usuario borre una cuenta.", "Mostrar un mensaje de 'Contraseña incorrecta' después de intentar loguearse."]

enunciado: "Si la interfaz presenta el caso: {casos[caso_idx]}, está aplicando la heurística de 'Prevención de errores'. Si en su lugar presenta un mensaje explicativo tras un fallo, está aplicando la heurística de: ___."

opciones_explicitas:
  - "Ayuda de usuario"
  - "Ayuda para reconocer, diagnosticar y recuperarse de errores"
  - "Visibilidad del estado del sistema"

respuesta: "Ayuda para reconocer, diagnosticar y recuperarse de errores"
tipo: mc

explicacion: |
  La prevención de errores busca evitar que el error ocurra (ej. un diálogo de confirmación). La otra heurística se activa cuando el error ya ocurrió, proporcionando un mensaje claro para solucionarlo.
```

### 19 — Visibilidad del estado del sistema

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["estado_sistema", "feedback", "nielsen"]

enunciado: "¿Es correcto afirmar que la 'Visibilidad del estado del sistema' se distingue de la 'Ayuda y documentación' porque la primera se enfoca en el feedback inmediato y la segunda en la resolución de dudas complejas?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La visibilidad del estado (como una barra de carga) es feedback constante sobre lo que está pasando, mientras que la ayuda es un recurso de consulta para problemas específicos.
```

### 20 — Reconocimiento vs. Recuerdo

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["reconocimiento", "recuerdo", "carga_cognitiva", "nielsen"]

enunciado: "Para minimizar la carga cognitiva, la heurística de 'Reconocimiento antes que recuerdo' propone que el usuario debe ___ en lugar de tener que ___ la información de una pantalla anterior."

pasos:
  - "Diferenciar entre procesos cognitivos de reconocimiento y memoria."

respuestas_validas:
  - "reconocer elementos visuales"
  - "recordar datos"

respuesta: "reconocer elementos visuales"
tipo: completar

explicacion: |
  Es más fácil reconocer un icono o una opción en una lista (reconocimiento) que tener que memorizar un comando o un dato para escribirlo después (recuerdo).
```

### 21 — Visibilidad del estado del sistema

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

### 22 — Prevención de errores

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
respuestas_validas:
  - "prevencion"
  - "error"

enunciado: "Analiza el siguiente escenario: '{casos[caso_idx][0]}'. El diseño falla en la heurística de ___."

explicacion: |
  Una buena prevención de errores implica diseñar la interfaz de modo que se eviten errores comunes antes de que ocurran, como pedir una confirmación antes de una acción destructiva.
```

### 23 — Consistencia y estándares

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

### 24 — Control y libertad del usuario

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
tipo: completar
enunciado: "Si un usuario necesita poder 'deshacer' o 'rehacer' acciones para corregir errores accidentales, ¿se está cumpliendo la heurística de 'Control y libertad del usuario'? "

explicacion: |
  Los usuarios a menudo eligen funciones del sistema por error. Deben tener una "salida de emergencia" claramente marcada para abandonar el estado no deseado sin tener que pasar por un proceso largo.
```

### 25 — Ayuda y documentación

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["nielsen", "ayuda_documentacion"]

respuesta: "Ayuda y documentación"
tipo: completar
respuestas_validas:
  - "Ayuda y documentación"

enunciado: "Para que un sistema sea usable, cuando el usuario no puede recordar cómo realizar una tarea, debe poder consultar la ___."

explicacion: |
  Aunque es lo ideal que el sistema sea intuitivo, siempre debe haber información disponible (documentación o ayuda) que sea fácil de buscar y enfocada en la tarea del usuario.
```
