### 1 — El rol del término Proporcional
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "control", "proporcional"]

variables:
  escenario: uno_de([
    ["Un motor cuya velocidad es menor a la consigna", "aumentar"],
    ["Un horno cuya temperatura es mayor a la consigna", "disminuir"],
    ["Un tanque cuyo nivel es menor al deseado", "aumentar"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["aumentar", "disminuir", "mantener"]

enunciado: "En un sistema de control, el término Proporcional actúa sobre el error actual. Si el error es positivo (según el escenario: {escenario[idx][0]}), la acción de control debe ser para {escenario[idx][1]} la variable de proceso."

explicacion: |
  El término proporcional reacciona instantáneamente al error actual. Si hay un error, la acción de control es proporcional a la magnitud de dicho error para intentar llevar el sistema al setpoint.
```

### 2 — La acción del término Integral
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "error_offset"]

variables:
  caso: uno_de([
    ["El error persiste en un valor constante de 5 unidades", "eliminar"],
    ["El sistema se estabiliza con un error de estado estacionario", "eliminar"],
    ["La temperatura no alcanza el setpoint por una perturbación", "eliminar"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["aumentar", "eliminar", "amplificar"]

enunciado: "El término Integral tiene la función principal de acumular el error a lo largo del tiempo para ___ el error de estado estacionario (offset)."

explicacion: |
  A diferencia del proporcional, la integral suma los errores pasados. Esto permite que, incluso si el error es pequeño, la acción de control crezca hasta que el error sea exactamente cero.
```

### 3 — El efecto del término Derivativo
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "avanzado"
  tags: ["pid", "derivativo", "prediccion"]

variables:
  escenario: uno_de([
    ["El error está disminuyendo muy rápidamente", "frenar"],
    ["El sistema se aproxima al setpoint con mucha inercia", "frenar"],
    ["La variable de proceso cambia bruscamente", "frenar"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "El término Derivativo actúa sobre la velocidad de cambio del error. Si el escenario es que {escenario[idx][0]}, la acción derivativa tiende a ___ la acción de control para evitar el sobreimpulso (overshoot)."

explicacion: |
  El término derivativo es una acción predictiva. Al detectar la rapidez con la que el error cambia, puede anticipar que el sistema llegará al setpoint y reducir la acción de control antes de que ocurra el sobreimpulso.
```

### 4 — Comportamiento del error
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_logica"
  nivel: "basico"
  tags: ["pid", "error", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si la variable de proceso es exactamente igual al setpoint (error = 0), el término Proporcional generará una acción de control nula."

explicacion: |
  Como la acción proporcional es $K_p \cdot error$, si el error es cero, el resultado de la multiplicación es cero.
```

### 5 — Secuencia de respuesta del controlador
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_secuencia"
  nivel: "intermedio"
  tags: ["pid", "secuencia", "accion"]

opciones_explicitas: ["Reacciona al error actual", "Acumula el error pasado", "Predice el error futuro"]
respuesta: ["Reacciona al error actual", "Acumula el error pasado", "Predice el error futuro"]
tipo: ordenar

enunciado: "Ordene las funciones de los términos del PID (P, I, D) según su naturaleza de respuesta:"

explicacion: |
  1. Proporcional: Reacciona al presente (error actual).
  2. Integral: Reacciona al pasado (acumulación de error).
  3. Derivativo: Reacciona al futuro (tendencia/derivada del error).
```