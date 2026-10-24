### 1 — El término Proporcional
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["control", "pid", "proporcional"]

respuesta: "error"
tipo: "completar"
respuestas_validas: ["error"]

enunciado: "En un controlador PID, la acción proporcional actúa de forma directa sobre el ___ actual para generar una respuesta inmediata."

explicacion: |
  El término proporcional ($K_p$) multiplica el error actual ($e(t) = setpoint - variable$) por una constante. Si el error es grande, la acción es grande.
```

### 2 — La acción Integral
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "basico"
  tags: ["control", "pid", "integral"]

variables:
  es_error_acumulado: true

respuesta: es_error_acumulado
tipo: "vf"

enunciado: "El término integral tiene como función principal eliminar el error de estado estacionario mediante la suma (acumulación) de los errores pasados a lo largo del tiempo."

explicacion: |
  A diferencia del proporcional, la acción integral ($K_i$) mira el historial del error. Al sumar el error en el tiempo, incluso un error pequeño persistente terminará por mover la salida para corregirlo.
```

### 3 — El término Derivativo
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "basico"
  tags: ["control", "pid", "derivativo"]

respuesta: "velocidad_de_cambio"
tipo: "mc"
opciones_explicitas: ["velocidad_de_cambio", "valor_promedio", "acumulacion_total", "estado_estacionario"]

enunciado: "El término derivativo ($K_d$) reacciona ante la ___ del error, permitiendo predecir la tendencia futura y amortiguar la respuesta del sistema."

explicacion: |
  La acción derivativa actúa sobre la pendiente (derivada) del error. Si el error está cambiando rápidamente hacia el setpoint, la acción derivativa frena la salida para evitar el sobreimpulso (overshoot).
```

### 4 — Componentes del PID
```
metadata:
  materia: "automatizacion"
  tema: "componentes_pid"
  nivel: "basico"
  tags: ["control", "pid", "conceptos"]

variables:
  escenario: uno_de([
    ["Proporcional", "Error actual", "Reacción inmediata"],
    ["Integral", "Error acumulado", "Elimina error residual"],
    ["Derivativo", "Cambio del error", "Predice tendencia"]
  ])

respuesta: escenario[0][0]
tipo: "mc"
opciones_explicitas: ["Proporcional", "Integral", "Derivativo"]

enunciado: "Si queremos corregir un error que persiste en el tiempo (error de estado estacionario) y que la acción proporcional no logra eliminar por sí sola, debemos aumentar la ganancia del término: {escenario[1]}."

explicacion: |
  La acción integral es la encargada de "empujar" el sistema hasta que el error sea exactamente cero, corrigiendo el offset que la acción proporcional suele dejar.
```

### 5 — Secuencia de acción del error
```
metadata:
  materia: "automatizacion"
  tema: "secuencia_pid"
  nivel: "intermedio"
  tags: ["control", "pid", "orden"]

respuesta: ["error_actual", "historial_error", "tendencia_error"]
tipo: "ordenar"
opciones_explicitas: ["error_actual", "historial_error", "tendencia_error"]

enunciado: "Ordene los conceptos según el orden en que los procesa cada término del controlador (Proporcional $\rightarrow$ Integral $\rightarrow$ Derivativo):"

explicacion: |
  1. Proporcional: Mira el error en el instante actual.
  2. Integral: Mira la suma de los errores pasados.
  3. Derivativo: Mira la velocidad de cambio (derivada) del error.
```