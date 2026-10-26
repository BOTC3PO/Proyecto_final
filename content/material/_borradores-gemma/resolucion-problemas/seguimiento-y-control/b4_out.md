### 1 — Seguimiento vs. Control
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["gestion", "planificacion"]

variables:
  es_control_preventivo: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El seguimiento se centra en la recolección de datos sobre el estado actual, mientras que el control implica la toma de decisiones para corregir desviaciones. Si el objetivo es evitar que un error ocurra antes de que suceda, estamos ante un enfoque de control {es_control_preventivo}."

explicacion: |
  El seguimiento es la fase de observación y medición, mientras que el control es la acción correctiva. El control preventivo actúa sobre los riesgos antes de que se conviertan en problemas reales.
```

### 2 — La esencia del Seguimiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "comparar"
tipo: completar
respuestas_validas: ["comparar"]

enunciado: "La función principal del seguimiento en un proyecto es ___ el desempeño real con el desempeño planificado para identificar desviaciones."

explicacion: |
  El seguimiento no solo observa, sino que debe contrastar lo que está sucediendo contra la línea base establecida en la planificación.
```

### 3 — Diferencia en la gestión de desviaciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["desviaciones"]

variables:
  escenario: uno_de([
    ["se detecta un retraso en la entrega de materiales", "reprogramar tareas"],
    ["el presupuesto se excede un 5%", "ajustar costos"],
    ["la calidad es inferior a la requerida", "reprocesar el producto"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reprogramar tareas", "ajustar costos", "reprocesar el producto"]

enunciado: "En el siguiente escenario de control: '{escenario[0]}', la acción correctiva inmediata más adecuada es: ___"

explicacion: |
  El control requiere una acción específica que mitigue la desviación detectada en el seguimiento. En este caso, el problema es de presupuesto, por lo que se deben ajustar costos.
```

### 4 — Ciclo de mejora continua
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["ciclo_phva"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para que el seguimiento y control sean efectivos, deben integrarse en un ciclo de mejora continua. Ordene las etapas del Ciclo PDCA (Deming) en su secuencia lógica de ejecución:"

explicacion: |
  El ciclo comienza con la planificación (Plan), sigue con la ejecución (Do), continúa con el seguimiento/verificación (Check) y finaliza con la acción correctiva (Act).
```

### 5 — El rol de la línea base
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["linea_base"]

variables:
  es_indispensable: verdadero

respuesta: es_indispensable
tipo: vf

enunciado: "Para poder ejercer el control de un proyecto, es indispensable contar con una 'Línea Base' (plan original). Sin un punto de referencia, el seguimiento no puede determinar si existe una desviación. ¿Es esto verdadero o falso? {es_indispensable}"

explicacion: |
  Sin una línea base (alcance, tiempo y costo), el seguimiento solo nos daría datos aislados, pero no nos permitiría saber si estamos cumpliendo o no con lo prometido.
```