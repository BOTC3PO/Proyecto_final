### 1 — El rol del término Proporcional
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

### 2 — El efecto del error acumulado (Integral)
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

### 3 — La acción predictiva (Derivativo)
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

### 4 — Sintonización de un lazo de control
```
metadata:
  materia: "automatizacion"
  tema: "sintonizacion_pid"
  nivel: "avanzado"
  tags: ["pid", "sintonizacion", "proceso"]

enunciado: "Se desea sintonizar un controlador PID para un sistema térmico. Ordena los pasos lógicos para analizar el efecto de aumentar la ganancia integral (Ki) en un sistema que ya tiene una ganancia proporcional (Kp) estable."

opciones_explicitas: ["Aumentar Ki", "Observar el error de estado estacionario", "Evaluar la estabilidad y el overshoot"]

respuesta: ["Aumentar Ki", "Observar el error de estado estacionario", "Evaluar la estabilidad y el overshoot"]
tipo: "ordenar"

explicacion: |
  Al aumentar la acción integral, primero se observa cómo se reduce el error residual (offset), pero el efecto secundario inmediato es el aumento de la oscilación y el riesgo de inestabilidad (overshoot).
```

### 5 — Verificación de conceptos PID
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