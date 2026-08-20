### 1 — El costo de la deuda técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "mantenimiento"]

variables:
  es_mantenimiento_preventivo: falso

respuesta: es_mantenimiento_preventivo
tipo: vf

enunciado: "Si un equipo de desarrollo decide no refactorizar un módulo complejo para cumplir con una fecha de entrega, está acumulando deuda técnica. Esta acción, si no se paga pronto, aumenta el costo de mantenimiento futuro. ¿Es el refactorizado una forma de mantenimiento preventivo? {es_mantenimiento_preventivo}"

explicacion: |
  El refactorizado busca mejorar la estructura interna del código sin cambiar su comportamiento externo, lo cual es una actividad de mantenimiento preventivo para evitar la acumulación de deuda técnica.
```

### 2 — Identificación de deuda técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["deuda_tecnica", "conceptos"]

opciones_explicitas: ["Código mal documentado", "Cambio de requerimientos", "Nueva funcionalidad", "Actualización de dependencias"]

respuesta: "Código mal documentado"
tipo: mc

enunciado: "Un desarrollador nota que el sistema funciona correctamente, pero la lógica de negocio está dispersa y no hay comentarios en las funciones críticas, lo que dificultará cambios futuros. ¿Cuál de estos es un ejemplo claro de deuda técnica?"

explicacion: |
  La falta de documentación y la mala estructura del código (código espagueti) son formas de deuda técnica que incrementan el esfuerzo necesario para realizar mantenimientos correctivos o evolutivos.
```

### 3 — Ciclo de vida del mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: ordenar

opciones_explicitas: ["Detectar error", "Corregir error", "Implementar nueva función", "Optimizar rendimiento", "Documentar sistema"]

enunciado: "Se presenta un caso de mantenimiento según el escenario seleccionado:"

pasos:
  - "Escenario A: El sistema falla al procesar un pago (Mantenimiento Correctivo)."
  - "Escenario B: El cliente solicita un nuevo reporte de ventas (Mantenimiento Evolutivo)."

explicacion: |
  El orden depende del tipo de mantenimiento: el correctivo requiere detectar y corregir; el evolutivo requiere implementar nuevas funciones.
  
  Tabla de referencia:
  [ ["Detectar error", "Corregir error", "Implementar nueva función", "Optimizar rendimiento", "Documentar sistema"], ["Detectar error", "Corregir error", "Implementar nueva función", "Optimizar rendimiento", "Documentar sistema"] ]
  (Nota: Para el ejercicio de ordenar, el usuario debe seguir la secuencia lógica del escenario asignado).
```
*(Nota: Debido a la restricción de `ordenar` en el DSL para casos de "escenarios", se reajusta a un formato de completar para asegurar validez técnica del DSL)*

### 3 — (Rehecha) Tipos de mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

variables:
  tipo_mantenimiento_idx: uno_de([0, 1])

respuesta: tabla[tipo_mantenimiento_idx][1]
tipo: completar

enunciado: "Si el objetivo es mejorar la velocidad de una consulta SQL que tarda 10 segundos, estamos realizando un mantenimiento de tipo ___."

pasos:
  - "Identificar el cuello-de-bote en la base de datos."
  - "Aplicar índices o reescribir la consulta."

opciones_explicitas: ["correctivo", "evolutivo", "adaptativo", "perfectivo"]
respuestas_validas: ["perfectivo"]

explicacion: |
  El mantenimiento perfectivo se encarga de mejorar el rendimiento o la eficiencia de un software que ya funciona correctamente.
  
  Tabla de referencia:
  [ ["correctivo", "correctivo"], ["evolutivo", "evolutivo"], ["adaptativo", "adaptativo"], ["perfectivo", "perfectivo"] ]
  *Nota: El ejemplo usa el índice para validar la respuesta correcta según el enunciado de optimización.*
```

### 4 — El impacto de la deuda técnica
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["deuda_tecnica", "costos"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: tabla[caso_idx][1]
tipo: completar

enunciado: "En el caso seleccionado, el equipo decide ignorar las pruebas unitarias para lanzar una versión hoy. Esto genera una deuda técnica que se traduce en ___."

pasos:
  - "Se lanza el producto con deuda técnica."
  - "Aparecen bugs en producción debido a la falta de tests."
  - "El tiempo de desarrollo de la siguiente funcionalidad aumenta drásticamente."

respuestas_validas: ["intereses"]

explicacion: |
  La deuda técnica funciona como un préstamo financiero: el 'principal' es el tiempo ahorrado hoy, y los 'intereses' es el tiempo extra que se perderá mañana arreglando errores o lidiando con código complejo.

  Tabla de referencia:
  [ ["intereses", "intereses"], ["intereses", "intereses"] ]
```

### 5 — Mantenimiento Adaptativo
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "adaptativo"]

opciones_explicitas: ["Cambio de Sistema Operativo", "Arreglar un crash", "Añadir un botón", "Cambiar el color de la interfaz"]

respuesta: "Cambio de Sistema Operativo"
tipo: mc

enunciado: "Una aplicación de escritorio debe actualizarse para ser compatible con la nueva versión de Windows que salió este mes. ¿Qué tipo de mantenimiento es este?"

explicacion: |
  El mantenimiento adaptativo ocurre cuando el software debe ajustarse a cambios en su entorno (sistema operativo, hardware, bases de datos o leyes externas) para seguir siendo funcional.
```