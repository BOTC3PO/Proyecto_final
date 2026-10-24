### 1 — Concepto de Realimentación
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["definicion", "control"]

tipo: mc
opciones_explicitas: ["Un proceso que ignora la salida para evitar errores", "El uso de la salida de un sistema para ajustar su propia entrada", "Un sistema que solo funciona de forma lineal", "La eliminación total de la variable de control"]

enunciado: "En sistemas de control, la realimentación (feedback) se define como:"

explicacion: |
  La realimentación consiste en medir la salida de un sistema y utilizar esa información para modificar la señal de entrada, permitiendo corregir desviaciones respecto al valor deseado.
```

### 2 — Componentes del Lazo
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "lazo_cerrado"]

variables:
  escenario: uno_de([["sensor", "error"], ["actuador", "setpoint"]])

tipo: completar
respuestas_validas: ["sensor", "actuador", "error", "setpoint"]

enunciado: "En un lazo de control cerrado, el dispositivo encargado de medir la variable de salida para compararla con el valor deseado es el ___."

explicacion: |
  El sensor es el elemento de medición que detecta la salida real y la envía al comparador para determinar la diferencia (error).
```

### 3 — Verdad o Falso: Estabilidad
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["estabilidad", "lazo_cerrado"]

tipo: vf

enunciado: "Un sistema con realimentación negativa tiene como objetivo principal aumentar la desviación del error para que el sistema sea más rápido."

respuesta: falso

explicacion: |
  Falso. La realimentación negativa busca reducir el error, contrarrestando la perturbación para estabilizar el sistema en el punto de consigna.
```

### 4 — Tipos de Realimentación
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["positiva", "negativa"]

tipo: mc
opciones_explicitas: ["Realimentación Negativa", "Realimentación Positiva", "Realimentación Nula"]

enunciado: "Si la señal de salida se suma a la señal de entrada de modo que amplifica la perturbación inicial, estamos ante una:"

explicacion: |
  La realimentación positiva refuerza la tendencia de la salida, lo que suele llevar a la inestabilidad o al crecimiento exponencial de la variable.
```

### 5 — Flujo de un Lazo de Control
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["secuencia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Setpoint (Referencia)", "Comparador (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los elementos de un lazo de control cerrado siguiendo el flujo lógico desde la consigna hasta la medición de la salida:"

explicacion: |
  El flujo estándar es: se define el objetivo (Setpoint), se compara con la medición actual (Error), el controlador decide la acción, el actuador ejecuta el cambio, el proceso cambia su estado y el sensor mide el resultado para cerrar el ciclo.
```