### 1 — Consistencia y estándares
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

### 2 — Control y libertad del usuario
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["control", "libertad", "nielsen"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "El usuario hace clic en un enlace por error y necesita volver atrás.", "El usuario está completando un formulario largo y quiere borrar un campo sin reiniciar todo.", "El usuario borró un archivo importante por accidente." ]]

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

### 3 — Prevención de errores vs. Mensajes de error
```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["prevencion_errores", "mensajes_error", "nielsen"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "Mostrar una advertencia antes de que el usuario borre una cuenta.", "Mostrar un mensaje de 'Contraseña incorrecta' después de intentar loguearse." ]]

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

### 4 — Visibilidad del estado del sistema
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

### 5 — Reconocimiento vs. Recuerdo
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