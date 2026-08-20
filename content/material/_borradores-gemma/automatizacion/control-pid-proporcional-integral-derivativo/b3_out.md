### 1 — El rol del término Proporcional
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "proporcional", "error"]

respuesta: "error"
tipo: "mc"
opciones_explicitas: ["error", "integral", "derivada", "setpoint"]

enunciado: "En un controlador PID, el término proporcional actúa directamente sobre el ___ actual para generar una acción de control."

explicacion: |
  El término proporcional ($K_p$) multiplica el error actual ($e(t) = SP - PV$) por una constante. Si el error es grande, la corrección es grande.
```

### 2 — El efecto del término Integral
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "offset"]

variables:
  escenario: uno_de([["error constante", "offset"], ["error cero", "estabilidad"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["offset", "estabilidad", "oscilacion", "saturacion"]]

enunciado: "Si un sistema tiene un error de estado estacionario (offset) constante, el término integral tiene la función de eliminar dicho ___."

explicacion: |
  El término integral ($K_i$) acumula el error a lo largo del tiempo. Mientras exista un error, la integral seguirá creciendo, forzando al controlador a corregir hasta que el error sea cero.
```

### 3 — La función del término Derivativo
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "intermedio"
  tags: ["pid", "derivativo", "prediccion"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿El término derivativo ayuda a predecir la tendencia del error basándose en la velocidad de cambio, actuando como un 'amortiguador'?"

explicacion: |
  Verdadero. El término derivativo ($K_d$) reacciona a la pendiente del error. Si el error está cambiando rápidamente hacia el setpoint, la derivada será negativa, lo que frena la acción de control para evitar sobrepasos (overshoot).
```

### 4 — Secuencia de acción en un error creciente
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_dinamica"
  nivel: "avanzado"
  tags: ["pid", "dinamica", "ordenar"]

respuesta: ["Proporcional", "Integral", "Derivativo"]
tipo: "ordenar"
opciones_explicitas: ["Proporcional", "Integral", "Derivativo"]

enunciado: "Ordena los términos del PID según su naturaleza de respuesta ante un cambio brusco en el setpoint: primero reacciona la magnitud del error, luego la acumulación del error y finalmente la tendencia del error."

explicacion: |
  1. Proporcional: Reacción inmediata al valor actual del error.
  2. Integral: Reacción acumulada que busca eliminar el error residual.
  3. Derivativo: Reacción a la velocidad de cambio para estabilizar la trayectoria.
```

### 5 — Confusión común: El error de la Integral
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral_windup"
  nivel: "avanzado"
  tags: ["pid", "integral", "windup"]

respuesta: "saturacion"
tipo: "completar"
respuestas_validas: ["saturacion", "error", "ruido"]

enunciado: "Cuando un actuador llega a su límite físico (ej. una válvula totalmente abierta) pero el error persiste, la acción integral sigue aumentando, provocando un fenómeno conocido como ___ del integrador."

explicacion: |
  El 'Integral Windup' ocurre cuando el error se acumula excesivamente durante un periodo de saturación del actuador. Esto causa que, cuando el error finalmente cambia de signo, el controlador tarde mucho en reaccionar, provocando grandes sobrepasos.
```