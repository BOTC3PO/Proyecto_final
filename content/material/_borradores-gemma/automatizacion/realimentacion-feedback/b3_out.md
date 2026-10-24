### 1 — Propósito de la realimentación
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["conceptos", "control"]

respuesta: "corregir"
tipo: completar
respuestas_validas: ["corregir", "ajustar"]

enunciado: "El objetivo principal de un sistema de control con realimentación es utilizar la señal de salida para ___ el error entre el valor medido y el valor de consigna."

explicacion: |
  La realimentación permite comparar la salida real con la deseada para realizar ajustes que minimicen la diferencia (error).
```

### 2 — Realimentación Positiva vs Negativa
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["estabilidad", "tipos_de_control"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un amplificador que aumenta la señal de salida basándose en la entrada original, provocando saturación.", "inestable"],
    ["Un termostato que apaga la calefacción cuando la temperatura alcanza el setpoint.", "estable"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["inestable", "estable", "lineal", "no aplica"]

enunciado: "En un sistema de realimentación positiva, la salida se suma a la entrada en la misma dirección, lo que generalmente produce un comportamiento {escenarios[escenario_idx][0]}."

explicacion: |
  La realimentación positiva refuerza la desviación, lo que suele llevar a la inestabilidad o saturación del sistema.
```

### 3 — Componentes de un lazo de control
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "arquitectura"]

respuesta: "sensor"
tipo: mc
opciones_explicitas: ["actuador", "sensor", "controlador", "setpoint"]

enunciado: "En un lazo de control cerrado, el componente encargado de medir la variable de salida y enviarla de vuelta al controlador es el ___."

explicacion: |
  Sin un sensor, el sistema no tiene forma de conocer la salida real y, por lo tanto, no puede realizar realimentación.
```

### 4 — Flujo de información en el lazo
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta: ["Setpoint", "Comparador", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar
opciones_explicitas: ["Setpoint", "Comparador", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los elementos de un sistema de control con realimentación siguiendo el flujo lógico desde la consigna hasta la medición de la salida:"

pasos:
  - "Se define el valor deseado."
  - "Se calcula la diferencia con la medida."
  - "Se procesa la decisión de acción."
  - "Se ejecuta la acción física."
  - "Ocurre la dinámica del sistema."
  - "Se captura el estado actual."

explicacion: |
  El flujo estándar es: Consigna (Setpoint) -> Comparación (Error) -> Decisión (Controlador) -> Acción (Actuador) -> Fenómeno (Proceso) -> Medición (Sensor).
```

### 5 — Estabilidad y Error
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "avanzado"
  tags: ["estabilidad", "error_estado_estacionario"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que un sistema con realimentación negativa siempre garantiza la eliminación total del error de estado estacionario?"

explicacion: |
  Falso. Aunque la realimentación negativa mejora la precisión y la estabilidad, el error de estado estacionario puede persistir dependiendo de la ganancia del sistema y el tipo de controlador.
```