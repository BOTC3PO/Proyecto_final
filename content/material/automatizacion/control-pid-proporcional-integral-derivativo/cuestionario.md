# Automatizacion — Control pid proporcional integral derivativo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El término Proporcional

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["control", "pid", "proporcional"]

respuesta: "error"
tipo: "completar"
respuestas_validas:
  - "error"

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

tipo: vf
respuesta: verdadero

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

respuesta: "Integral"
tipo: mc
opciones_explicitas: ["Proporcional", "Integral", "Derivativo"]

enunciado: "Si queremos corregir un error que persiste en el tiempo (error de estado estacionario) y que la acción proporcional no logra eliminar por sí sola, debemos aumentar la ganancia del término:"

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

respuesta_orden: ["error_actual", "historial_error", "tendencia_error"]
tipo: ordenar
opciones_explicitas: ["error_actual", "historial_error", "tendencia_error"]

enunciado: "Ordene los conceptos según el orden en que los procesa cada término del controlador (Proporcional -> Integral -> Derivativo):"

explicacion: |
  1. Proporcional: Mira el error en el instante actual.
  2. Integral: Mira la suma de los errores pasados.
  3. Derivativo: Mira la velocidad de cambio (derivada) del error.
```

### 6 — El rol del término Proporcional

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "proporcional", "control"]

enunciado: "En un sistema de control de temperatura, el término Proporcional (P) actúa sobre el error actual. Si el error es la diferencia entre el setpoint y la variable de proceso, el término proporcional es ___ veces el error."

opciones_explicitas: ["K_p", "K_i", "K_d"]

respuesta: "K_p"
tipo: "mc"

explicacion: |
  El término proporcional multiplica el error actual por una constante de ganancia K_p. Su función es generar una respuesta proporcional a la magnitud del error actual.
```

### 7 — El efecto del error acumulado (Integral)

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "offset"]

variables:
  escenario: uno_de([["error_persistente", "elimina_offset"], ["error_transitorio", "no_hace_nada"]])

enunciado: "Un controlador PID presenta un error de estado estacionario (offset) constante en el setpoint. Para corregir este error acumulado, el término que debe actuar es el ___."

opciones_explicitas: ["Proporcional", "Integral", "Derivativo"]

respuesta: "Integral"
tipo: "mc"

explicacion: |
  El término Integral suma el error a lo largo del tiempo. Al acumular el error, incluso si este es pequeño, la acción integral crece hasta que el error se vuelve cero, eliminando así el offset.
```

### 8 — La acción predictiva (Derivativo)

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "intermedio"
  tags: ["pid", "derivativo", "estabilidad"]

enunciado: "Analiza la función del término derivativo en un sistema de control de velocidad. El término derivativo reacciona ante la ___ del error."

opciones_explicitas: ["magnitud", "velocidad de cambio", "acumulación"]

respuesta: "velocidad de cambio"
tipo: "mc"

explicacion: |
  El término derivativo calcula la derivada del error respecto al tiempo. Esto le permite 'predecir' la tendencia del error y actuar de forma preventiva para evitar sobrepasos (overshoot) y mejorar la estabilidad.
```

### 9 — Sintonización de un lazo de control

```
metadata:
  materia: "automatizacion"
  tema: "sintonizacion_pid"
  nivel: "avanzado"
  tags: ["pid", "sintonizacion", "proceso"]

enunciado: "Se desea sintonizar un controlador PID para un sistema térmico. Ordena los pasos lógicos para analizar el efecto de aumentar la ganancia integral (Ki) en un sistema que ya tiene una ganancia proporcional (Kp) estable."

opciones_explicitas: ["Aumentar Ki", "Observar el error de estado estacionario", "Evaluar la estabilidad y el overshoot"]

respuesta_orden: ["Aumentar Ki", "Observar el error de estado estacionario", "Evaluar la estabilidad y el overshoot"]
tipo: ordenar

explicacion: |
  Al aumentar la acción integral, primero se observa cómo se reduce el error residual (offset), pero el efecto secundario inmediato es el aumento de la oscilación y el riesgo de inestabilidad (overshoot).
```

### 10 — Verificación de conceptos PID

```
metadata:
  materia: "automatizacion"
  tema: "conceptos_pid"
  nivel: "basico"
  tags: ["pid", "logica"]

enunciado: "Si un controlador tiene una ganancia derivativa (Kd) muy alta en un sistema con mucho ruido de medición, el sistema se volverá ___."

opciones_explicitas: ["estable", "inestable", "lento"]

respuesta: "inestable"
tipo: "mc"

explicacion: |
  El término derivativo es muy sensible al ruido de alta frecuencia. Un ruido pequeño puede causar cambios bruscos en la derivada, lo que resulta en acciones de control erráticas e inestabilidad en el actuador.
```

### 11 — El rol del término Proporcional

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

### 12 — El efecto del término Integral

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "offset"]

variables:
  datos: [["error constante", "offset"], ["error cero", "estabilidad"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["offset", "estabilidad", "oscilacion", "saturacion"]

enunciado: "Si un sistema tiene un error de estado estacionario (offset) constante, el término integral tiene la función de eliminar dicho ___."

explicacion: |
  El término integral ($K_i$) acumula el error a lo largo del tiempo. Mientras exista un error, la integral seguirá creciendo, forzando al controlador a corregir hasta que el error sea cero.
```

### 13 — La función del término Derivativo

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

### 14 — Secuencia de acción en un error creciente

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_dinamica"
  nivel: "avanzado"
  tags: ["pid", "dinamica", "ordenar"]

respuesta_orden: ["Proporcional", "Integral", "Derivativo"]
tipo: ordenar
opciones_explicitas: ["Proporcional", "Integral", "Derivativo"]

enunciado: "Ordena los términos del PID según su naturaleza de respuesta ante un cambio brusco en el setpoint: primero reacciona la magnitud del error, luego la acumulación del error y finalmente la tendencia del error."

explicacion: |
  1. Proporcional: Reacción inmediata al valor actual del error.
  2. Integral: Reacción acumulada que busca eliminar el error residual.
  3. Derivativo: Reacción a la velocidad de cambio para estabilizar la trayectoria.
```

### 15 — Confusión común: El error de la Integral

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral_windup"
  nivel: "avanzado"
  tags: ["pid", "integral", "windup"]

respuesta: "saturacion"
tipo: "completar"
respuestas_validas:
  - "saturacion"
  - "error"
  - "ruido"

enunciado: "Cuando un actuador llega a su límite físico (ej. una válvula totalmente abierta) pero el error persiste, la acción integral sigue aumentando, provocando un fenómeno conocido como ___ del integrador."

explicacion: |
  El 'Integral Windup' ocurre cuando el error se acumula excesivamente durante un periodo de saturación del actuador. Esto causa que, cuando el error finalmente cambia de signo, el controlador tarde mucho en reaccionar, provocando grandes sobrepasos.
```

### 16 — Función del término Proporcional

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "proporcional", "control"]

respuesta: "error_actual"
tipo: completar
respuestas_validas:
  - "error_actual"
  - "error_pasado"
  - "error_futuro"

enunciado: "En un controlador PID, el término proporcional actúa basándose principalmente en el ___."

explicacion: |
  El término proporcional (P) genera una acción de control que es directamente proporcional a la magnitud del error presente en el instante actual.
```

### 17 — Diferencia entre Integral y Proporcional

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "error_offset"]

variables:
  es_integral_mejor: verdadero

respuesta: es_integral_mejor
tipo: completar
enunciado: "A diferencia del término proporcional, el término integral tiene la capacidad de eliminar el error de estado estacionario (offset) en el sistema."

explicacion: |
  El término integral suma los errores pasados, lo que permite que incluso un error pequeño acumulado genere una acción de control suficiente para llevar el error a cero.
```

### 18 — El rol del término Derivativo

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "intermedio"
  tags: ["pid", "derivativo", "prediccion"]

respuesta: "prediccion"
tipo: mc
opciones_explicitas: ["reaccion", "prediccion", "acumulacion"]

enunciado: "Mientras que el término Proporcional reacciona al error presente, el término Derivativo se distingue porque actúa como un elemento de ___ al evaluar la velocidad de cambio del error."

explicacion: |
  El término derivativo (D) analiza la pendiente (derivada) del error, permitiendo anticipar la tendencia del sistema y amortiguar la respuesta para evitar sobrepasos.
```

### 19 — Comportamiento ante cambios bruscos

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_comparacion"
  nivel: "avanzado"
  tags: ["pid", "estabilidad", "transitorio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Aumento brusco de la carga", "el_derivativo_suaviza"], ["Error constante pequeño", "el_integral_corrige"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["el_derivativo_suaviza", "el_integral_corrige", "el_proporcional_estabiliza"]

enunciado: "Si el sistema experimenta un {escenarios[escenario_idx][0]}, la acción principal del término derivativo es que {escenarios[escenario_idx][1]}."

explicacion: |
  El término derivativo es sensible a la velocidad de cambio; ante un cambio brusco (alta derivada), reacciona rápidamente para contrarrestar la tendencia.
```

### 20 — Secuencia de acción temporal

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_secuencia"
  nivel: "intermedio"
  tags: ["pid", "tiempo", "historia"]

respuesta_orden: ["proporcional", "integral", "derivativo"]
tipo: ordenar
opciones_explicitas: ["proporcional", "integral", "derivativo"]

enunciado: "Ordene los términos del controlador PID según el horizonte temporal en el que se basan: desde el presente inmediato hasta la tendencia futura."

explicacion: |
  1. Proporcional: Mira el error actual (presente).
   2. Integral: Mira la suma de errores pasados (pasado).
   3. Derivativo: Mira la velocidad de cambio (futuro/tendencia).
```

### 21 — El rol del término Proporcional

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "control", "proporcional"]

variables:
  escenario: uno_de([["Un motor cuya velocidad es menor a la consigna", "aumentar"], ["Un horno cuya temperatura es mayor a la consigna", "disminuir"], ["Un tanque cuyo nivel es menor al deseado", "aumentar"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["aumentar", "disminuir", "mantener"]

enunciado: "En un sistema de control, el término Proporcional actúa sobre el error actual. Si el error es positivo (según el escenario: {escenario[0]}), la acción de control debe ser para {escenario[1]} la variable de proceso."

explicacion: |
  El término proporcional reacciona instantáneamente al error actual. Si hay un error, la acción de control es proporcional a la magnitud de dicho error para intentar llevar el sistema al setpoint.
```

### 22 — La acción del término Integral

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "error_offset"]

variables:
  caso: uno_de([["El error persiste en un valor constante de 5 unidades", "eliminar"], ["El sistema se estabiliza con un error de estado estacionario", "eliminar"], ["La temperatura no alcanza el setpoint por una perturbación", "eliminar"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["aumentar", "eliminar", "amplificar"]

enunciado: "El término Integral tiene la función principal de acumular el error a lo largo del tiempo para ___ el error de estado estacionario (offset)."

explicacion: |
  A diferencia del proporcional, la integral suma los errores pasados. Esto permite que, incluso si el error es pequeño, la acción de control crezca hasta que el error sea exactamente cero.
```

### 23 — El efecto del término Derivativo

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "avanzado"
  tags: ["pid", "derivativo", "prediccion"]

variables:
  escenario: uno_de([["El error está disminuyendo muy rápidamente", "frenar"], ["El sistema se aproxima al setpoint con mucha inercia", "frenar"], ["La variable de proceso cambia bruscamente", "frenar"]])

respuesta: escenario[1]
tipo: completar
enunciado: "El término Derivativo actúa sobre la velocidad de cambio del error. Si el escenario es que {escenario[0]}, la acción derivativa tiende a ___ la acción de control para evitar el sobreimpulso (overshoot)."

explicacion: |
  El término derivativo es una acción predictiva. Al detectar la rapidez con la que el error cambia, puede anticipar que el sistema llegará al setpoint y reducir la acción de control antes de que ocurra el sobreimpulso.
```

### 24 — Comportamiento del error

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

### 25 — Secuencia de respuesta del controlador

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_secuencia"
  nivel: "intermedio"
  tags: ["pid", "secuencia", "accion"]

opciones_explicitas: ["Reacciona al error actual", "Acumula el error pasado", "Predice el error futuro"]
respuesta_orden: ["Reacciona al error actual", "Acumula el error pasado", "Predice el error futuro"]
tipo: ordenar

enunciado: "Ordene las funciones de los términos del PID (P, I, D) según su naturaleza de respuesta:"

explicacion: |
  1. Proporcional: Reacciona al presente (error actual).
  2. Integral: Reacciona al pasado (acumulación de error).
  3. Derivativo: Reacciona al futuro (tendencia/derivada del error).
```
