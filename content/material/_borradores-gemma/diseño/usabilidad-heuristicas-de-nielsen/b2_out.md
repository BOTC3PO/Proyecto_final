### 1 — Visibilidad del estado del sistema
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

### 2 — Prevención de errores
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "prevencion_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema pregunta '¿Estás seguro de que quieres borrar este archivo?' antes de ejecutar la acción.", "prevencion"],
    ["El sistema muestra un mensaje de error después de que el usuario hizo clic en un botón inexistente.", "error_post"]
  ]

enunciado: "Analizamos el siguiente caso: {escenarios[escenario_idx][0]}. Según la heurística de 'Prevención de errores', esta acción es: ___"

respuestas_validas: ["correcta", "incorrecta"]

respuesta: "correcta"
tipo: "completar"

explicacion: |
  La prevención de errores es preferible a un buen mensaje de error. Al pedir confirmación antes de una acción destructiva, el diseño evita que el error ocurra, cumpliendo con la heurística.
```

### 3 — Consistencia y estándares
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

### 4 — Reconocimiento antes que recuerdo
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["nielsen", "carga_cognitiva"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un buscador que muestra los términos de búsqueda recientes justo debajo del campo de texto.", "reconocimiento"],
    ["Un sistema que obliga al usuario a recordar un código de 8 dígitos que apareció hace 5 pantallas para completar un formulario.", "recuerdo"]
  ]

enunciado: "Se presenta el siguiente caso de uso: {casos[caso_idx][0]}. ¿Este diseño favorece el 'Reconocimiento antes que recuerdo'?"

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: "vf"

explicacion: |
  Minimizar la carga de la memoria de trabajo del usuario mediante pistas visuales o historial de acciones es clave para la usabilidad. El reconocimiento es más fácil y rápido que el recuerdo.
```

### 5 — Flujo de recuperación de errores
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "control_usuario"]

enunciado: "Un usuario comete un error al llenar un formulario de registro y, tras presionar 'Enviar', la página se recarga borrando todos los campos. Para cumplir con la heurística de 'Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de errores', el sistema debería seguir este orden lógico de acción:"

opciones_explicitas: ["1. Mostrar un mensaje de error claro", "2. Indicar qué campos están mal", "3. Permitir la corrección sin perder los datos ya ingresados"]

respuesta: ["1. Mostrar un mensaje de error claro", "2. Indicar qué campos están mal", "3. Permitir la corrección sin perder los datos ya ingresados"]
tipo: "ordenar"

explicacion: |
  La recuperación de errores debe ser sencilla. Un buen diseño no solo dice que algo salió mal, sino que señala exactamente dónde está el error y permite al usuario corregirlo sin tener que empezar de cero.
```