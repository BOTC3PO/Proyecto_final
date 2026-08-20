# Examen jefe — Maestro del Control PID y PLC

> Logro #212. Has dominado los fundamentos de los servomecanismos, la lógica industrial y los lazos de control jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: control-pid-proporcional-integral-derivativo (25 preguntas)

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

respuesta: escenario[0][0
tipo: "mc"
opciones_explicitas: ["Proporcional", "Integral", "Derivativo"]

enunciado: "Si queremos corregir un error que persiste en el tiempo (error de estado estacionario) y que la acción proporcional no logra eliminar por sí sola, debemos aumentar la ganancia del término: {escenario[1]}."

explicacion: |
  La acción integral es la encargada de "empujar" el sistema hasta que el error sea exactamente cero, corrigiendo el offset que la acción proporcional suele dejar.
```

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

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "proporcional", "control"]

respuesta: "error_actual"
tipo: completar
respuestas_validas: ["error_actual", "error_pasado", "error_futuro"]

enunciado: "En un controlador PID, el término proporcional actúa basándose principalmente en el {error_actual}."

explicacion: |
  El término proporcional (P) genera una acción de control que es directamente proporcional a la magnitud del error presente en el instante actual.
```

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

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_comparacion"
  nivel: "avanzado"
  tags: ["pid", "estabilidad", "transitorio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Aumento brusco de la carga", "el_derivativo_suaviza"],
    ["Error constante pequeño", "el_integral_corrige"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["el_derivativo_suaviza", "el_integral_corrige", "el_proporcional_estabiliza"]

enunciado: "Si el sistema experimenta un {escenarios[escenario_idx][0]}, la acción principal del término derivativo es que {escenarios[escenario_idx][1]}."

explicacion: |
  El término derivativo es sensible a la velocidad de cambio; ante un cambio brusco (alta derivada), reacciona rápidamente para contrarrestar la tendencia.
```

```
metadata:
  materia: "automatizacion"
  tema: "control_pid_secuencia"
  nivel: "intermedio"
  tags: ["pid", "tiempo", "historia"]

respuesta: ["proporcional", "integral", "derivativo"]
tipo: ordenar
opciones_explicitas: ["proporcional", "integral", "derivativo"]

enunciado: "Ordene los términos del controlador PID según el horizonte temporal en el que se basan: desde el presente inmediato hasta la tendencia futura."

explicacion: |
  1. Proporcional: Mira el error actual (presente).
   2. Integral: Mira la suma de errores pasados (pasado).
   3. Derivativo: Mira la velocidad de cambio (futuro/tendencia).
```

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

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["aumentar", "disminuir", "mantener"]

enunciado: "En un sistema de control, el término Proporcional actúa sobre el error actual. Si el error es positivo (según el escenario: {escenario[idx][0]}), la acción de control debe ser para {escenario[idx][1]} la variable de proceso."

explicacion: |
  El término proporcional reacciona instantáneamente al error actual. Si hay un error, la acción de control es proporcional a la magnitud de dicho error para intentar llevar el sistema al setpoint.
```

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

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["aumentar", "eliminar", "amplificar"]

enunciado: "El término Integral tiene la función principal de acumular el error a lo largo del tiempo para ___ el error de estado estacionario (offset)."

explicacion: |
  A diferencia del proporcional, la integral suma los errores pasados. Esto permite que, incluso si el error es pequeño, la acción de control crezca hasta que el error sea exactamente cero.
```

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

respuesta: escenario[idx][1
tipo: completar
enunciado: "El término Derivativo actúa sobre la velocidad de cambio del error. Si el escenario es que {escenario[idx][0]}, la acción derivativa tiende a ___ la acción de control para evitar el sobreimpulso (overshoot)."

explicacion: |
  El término derivativo es una acción predictiva. Al detectar la rapidez con la que el error cambia, puede anticipar que el sistema llegará al setpoint y reducir la acción de control antes de que ocurra el sobreimpulso.
```

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

## Sección: lazo-abierto-vs-lazo-cerrado (25 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentación"
tipo: completar
respuestas_validas: ["realimentación", "retroalimentación"]

enunciado: "La diferencia fundamental entre un sistema de lazo abierto y uno de lazo cerrado es la presencia o ausencia de una señal de ___."

explicacion: |
  En un sistema de lazo cerrado, la salida se mide y se compara con la entrada mediante una señal de realimentación para corregir errores.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["clasificacion", "lazo_abierto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["un tostador de pan", "no mide el color del pan"], ["un ventilador con velocidad fija", "no detecta la temperatura"]]]

respuesta: uno_de(["lazo abierto", "lazo cerrado"])
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Un dispositivo que opera según una consigna preestablecida sin verificar si se ha alcanzado el objetivo (como {escenarios[escenario_idx][0]}) se clasifica como un sistema de ___."

explicacion: |
  Al no tener un sensor que verifique el estado real de la salida para ajustar la entrada, el sistema es de lazo abierto.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["perturbaciones", "estabilidad"]

respuesta: falso
tipo: vf

enunciado: "Un sistema de lazo abierto es inherentemente más robusto ante perturbaciones externas que un sistema de lazo cerrado."

explicacion: |
  Falso. Los sistemas de lazo cerrado son más robustos porque pueden detectar la desviación causada por una perturbación y actuar para compensarla.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: completar
respuestas_validas: ["sensor", "actuador", "controlador"]

enunciado: "Para que un sistema pase de lazo abierto a lazo cerrado, es indispensable la incorporación de un ___ que permita medir la variable de salida."

explicacion: |
  El sensor es el componente encargado de capturar la información de la salida para cerrar el lazo de control.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["flujo", "proceso"]

respuesta: ["referencia", "controlador", "actuador", "planta", "sensor"]
tipo: ordenar
opciones_explicitas: ["referencia", "controlador", "actuador", "planta", "sensor"]

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo de la señal desde la consigna hasta la medición de la salida:"

pasos:
  - "Se establece el valor deseado (setpoint)."
  - "Se procesa el error resultante."
  - "Se aplica la acción correctiva."
  - "Se produce el cambio en el proceso físico."
  - "Se mide la salida para cerrar el ciclo."

explicacion: |
  El flujo correcto es: Referencia (entrada) -> Controlador -> Actuador -> Planta (proceso) -> Sensor (realimentación) -> vuelve al controlador.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: falso
tipo: vf

enunciado: "En un sistema de control de lazo abierto, la salida del sistema es medida y comparada con la referencia para corregir el error."

explicacion: |
  La característica definitoria de un sistema de lazo cerrado es la presencia de un sensor que mide la salida y proporciona realimentación. En lazo abierto, no hay medición de la salida para corregir la acción de control.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["ejemplos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un tostador de pan que funciona por tiempo fijo sin sensor de color de pan", "lazo abierto", "no utiliza la salida para ajustar la entrada"],
    ["Un aire acondicionado con termostato que apaga el compresor al llegar a la temperatura seteada", "lazo cerrado", "utiliza un sensor para comparar la salida con el valor deseado"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Identifica el tipo de control del siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  El caso {escenarios[escenario_idx][0]} es de tipo {escenarios[escenario_idx][1]} porque {escenarios[escenario_idx][2]}.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: completar
respuestas_validas: ["sensor", "actuador", "controlador"]

enunciado: "En un sistema de control de lazo cerrado, el componente encargado de medir la variable de salida para enviarla al controlador se denomina ___."

explicacion: |
  El sensor es el elemento de realimentación. Sin el sensor, el sistema no puede conocer el estado real de la salida y, por lo tanto, no puede actuar sobre el error, convirtiéndose en un lazo abierto.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "secuencia"]

respuesta: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

opciones_explicitas: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordena los elementos de un sistema de lazo cerrado siguiendo el flujo de señal desde la consigna hasta la realimentación:"

explicacion: |
  El flujo correcto es: 1. Referencia (setpoint) -> 2. Controlador (decide la acción) -> 3. Actuador (ejecuta la acción) -> 4. Proceso (cambia la variable) -> 5. Sensor (mide la salida y vuelve al controlador).
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["perturbaciones", "estabilidad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un sistema de lazo abierto es ___ ante perturbaciones externas.", "más vulnerable"],
    ["Un sistema de lazo cerrado es ___ ante perturbaciones externas.", "más robusto"]
  ]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["más vulnerable", "más robusto"]

enunciado: "Considerando la respuesta ante una perturbación que altera la salida: {casos[caso_idx][0]}"

explicacion: |
  En lazo abierto, si una perturbación cambia la salida, el sistema no lo nota y no puede corregirlo. En lazo cerrado, el sensor detecta el cambio y el controlador compensa la perturbación para volver al setpoint.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia fundamental entre un sistema de lazo abierto y uno de lazo cerrado es la presencia de un sensor que permite la realimentación de la variable de salida hacia la entrada."

explicacion: |
  En un sistema de lazo abierto, la acción de control es independiente de la salida (no hay sensor de error). En un lazo cerrado, la salida se mide y se compara con la referencia para corregir la acción de control.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["error", "perturbaciones"]

variables:
  escenario: uno_de([["un tostador de pan", "el tiempo de tostado es fijo"], ["un ventilador común", "la velocidad es constante"], ["un semáforo", "el ciclo de luces es predeterminado"]])

respuesta: "el tiempo de tostado es fijo"
tipo: mc
opciones_explicitas: ["el tiempo de tostado es fijo", "el nivel de quemado del pan", "la temperatura interna del pan", "la humedad del aire"]

enunciado: "En un sistema de lazo abierto, como {escenario[0]}, el sistema no puede compensar una perturbación porque su acción de control es ___."

explicacion: |
  Al no tener realimentación, el sistema de lazo abierto no "sabe" si el objetivo se cumplió o si una perturbación (como un pan más grueso) afectó el resultado.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["sensores", "componentes"]

respuestas_validas: ["sensor", "actuador", "controlador", "referencia"]
respuesta: "sensor"
tipo: completar

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable añadir un ___ que mida la variable de salida."

explicacion: |
  El sensor es el componente encargado de captar la variable de salida y convertirla en una señal que el controlador pueda procesar para calcular el error.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["arquitectura", "flujo"]

opciones_explicitas: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
respuesta: ["Referencia", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo lógico desde la entrada hasta la medición de la salida:"

explicacion: |
  El flujo típico es: se establece una Referencia -> el Controlador decide la acción -> el Actuador ejecuta -> el Proceso cambia la variable -> el Sensor mide la salida para cerrar el lazo.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["estabilidad", "perturbaciones"]

variables:
  caso: uno_de([["un sistema de control de temperatura de un horno", "la temperatura ambiente sube repentinamente"], ["un sistema de crucero en un auto", "una pendiente fuerte en la carretera"], ["un sistema de llenado de un tanque", "la presión de entrada de agua varía"]])

respuesta: "falso"
tipo: completar
enunciado: "Un sistema de lazo cerrado es inherentemente inmune a las perturbaciones externas, independientemente de su diseño."

explicacion: |
  Falso. Aunque el lazo cerrado tiene la *capacidad* de compensar perturbaciones (como {caso[0]}), su éxito depende del diseño del controlador y la precisión del sensor. Un mal diseño puede incluso causar inestabilidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

tipo: mc
opciones_explicitas: ["La presencia de un sensor que mide la salida", "La velocidad de procesamiento del controlador", "El uso de actuadores de alta potencia", "La conexión a una fuente de alimentación externa"]

enunciado: "La diferencia clave que distingue a un sistema de lazo cerrado de uno de lazo abierto es ___"

respuesta: "La presencia de un sensor que mide la salida"

explicacion: |
  En un sistema de lazo cerrado, la salida se mide constantemente y se compara con la referencia para corregir errores. En lazo abierto, el sistema actúa sin conocer el resultado real de su acción.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["perturbaciones", "estabilidad"]

tipo: vf

enunciado: "Un sistema de control de lazo abierto es capaz de compensar automáticamente las perturbaciones que afectan a la variable de proceso."

respuesta: falso

explicacion: |
  Falso. Al no tener realimentación (lazo abierto), el sistema no detecta si una perturbación desvió la salida de su objetivo, por lo que no puede realizar ajustes correctivos.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["componentes", "sensores"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un termostato simple", "sensor de temperatura"], ["un horno industrial", "termocupla"]]

tipo: completar
respuestas_validas: ["sensor de temperatura", "termocupla"]

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable añadir un ___ que detecte el estado de la variable."

respuesta: datos[escenario_idx][1

explicacion: |
  El elemento de medición (sensor) es el componente que cierra el lazo al proporcionar información sobre la salida real.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Referencia (Set-point)", "Comparación (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

respuesta: ["Referencia (Set-point)", "Comparación (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene correctamente el flujo de información en un sistema de control de lazo cerrado, desde la intención hasta la medición de la salida:"

explicacion: |
  El ciclo comienza con el valor deseado (referencia), se calcula el error, el controlador actúa, el actuador modifica el proceso, y el sensor cierra el ciclo midiendo el resultado.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["costo", "complejidad"]

tipo: mc
opciones_explicitas: ["Lazo abierto es más complejo y costoso", "Lazo cerrado es más simple y económico", "Lazo abierto es más preciso ante cambios externos", "Lazo cerrado es más propenso a errores por falta de sensores"]

enunciado: "Al comparar ambos sistemas, se puede afirmar que un sistema de lazo abierto es generalmente ___ que uno de lazo cerrado."

respuesta: "Lazo abierto es más simple y económico"

explicacion: |
  Debido a que no requiere sensores de retroalimentación ni algoritmos de comparación de error, los sistemas de lazo abierto son más sencillos y económicos de implementar.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

variables:
  escenarios: [["un tostador de pan que funciona por tiempo", "lazo abierto"], ["un aire acondicionado con termostato", "lazo cerrado"]]
  idx: uno_de([0,1])

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Si el sistema descrito es {escenarios[idx][0]}, ¿qué tipo de control está utilizando?"

explicacion: |
  La diferencia fundamental es la realimentación. Un tostador solo mide el tiempo (lazo abierto), mientras que un aire acondicionado mide la temperatura real para ajustar su salida (lazo cerrado).
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["error", "control"]

variables:
  casos: [["lazo abierto", falso], ["lazo cerrado", verdadero]]
  idx: uno_de([0,1])

respuesta: casos[idx][1
tipo: completar
enunciado: "En un sistema de {casos[idx][0]}, el controlador puede calcular la diferencia entre el valor deseado (setpoint) y la salida real (error) para ajustar la acción de control."

explicacion: |
  En el lazo cerrado, el sensor permite conocer la salida real, permitiendo calcular el error. En el lazo abierto, el sistema no sabe si la salida es la correcta.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: completar
respuestas_validas: ["sensor", "actuador", "controlador"]

enunciado: "Para transformar un sistema de lazo abierto en uno de lazo cerrado, es indispensable la incorporación de un ___ que mida la variable de salida."

explicacion: |
  El sensor es el elemento encargado de la realimentación, permitiendo que la información de la salida regrese al controlador.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["flujo", "proceso"]

respuesta: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar
opciones_explicitas: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los elementos de un sistema de control de lazo cerrado siguiendo el flujo de información desde la referencia hasta la medición de la salida:"

explicacion: |
  El flujo comienza con el valor deseado (Setpoint), pasa por el cerebro (Controlador), la acción (Actuador), la ejecución (Proceso) y finalmente la medición (Sensor) que cierra el lazo.
```

```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["perturbaciones", "estabilidad"]

variables:
  ejemplos: [["Un sistema de lazo abierto es ___ ante perturbaciones externas.", "más"], ["Un sistema de lazo cerrado es ___ ante perturbaciones externas.", "menos"]]
  idx: uno_de([0,1])

respuesta: ejemplos[idx][1
tipo: mc
opciones_explicitas: ["más", "menos"]

enunciado: "Considerando la capacidad de compensar cambios no deseados en el entorno, un sistema de {ejemplos[idx][0]} es ___ capaz de corregir su error automáticamente."

explicacion: |
  El lazo cerrado es más robusto ante perturbaciones porque detecta el desvío y actúa para corregirlo. El lazo abierto simplemente sigue su programa sin importar el resultado.
```

## Sección: plc-logica-de-control-industrial (25 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["definicion", "hardware"]

respuesta: "controlador_logico_programable"
tipo: completar
respuestas_validas: ["controlador_logico_programable"]

enunciado: "El dispositivo electrónico diseñado para controlar procesos industriales mediante la ejecución de una lógica programada se denomina ___."

explicacion: |
  El PLC (Programmable Logic Controller) es la unidad central de control en la automatización industrial, capaz de operar en entornos hostiles.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["componentes", "hardware"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Entradas/Salidas (I/O)", "Memoria/CPU/Fuente", "Pantalla/Teclado", "Sensores/Actuadores"]

enunciado: "De acuerdo a la arquitectura estándar, el elemento que procesa la información y ejecuta la lógica es la {datos[idx][0]}."

datos:
  - ["Interfaz de usuario", "Pantalla/Teclado"]
  - ["Unidad de procesamiento", "Memoria/CPU/Fuente"]

explicacion: |
  La CPU es el cerebro del PLC que procesa la lógica, mientras que las I/O permiten la comunicación con el mundo físico.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["ciclo_scan", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿El ciclo de scan de un PLC consiste en leer las entradas, ejecutar la lógica del programa y actualizar las salidas de forma cíclica?"

explicacion: |
  El ciclo de scan es un proceso repetitivo y determinístico que garantiza que el PLC responda a los cambios en el proceso de manera constante.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["flujo_señal", "sensores_actuadores"]

respuesta: ["Sensores", "PLC", "Actuadores"]
tipo: ordenar

opciones_explicitas: ["Sensores", "PLC", "Actuadores"]

enunciado: "Ordene el flujo lógico de información y acción en un sistema automatizado, desde la captura de la variable física hasta la ejecución de la acción."

explicacion: |
  Los sensores captan la señal (entrada), el PLC procesa la lógica y los actuadores ejecutan la acción (salida).
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["io", "digital_analogo"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Digital", "Analógica", "Binaria", "Proporcional"]

enunciado: "Si un sensor envía una señal de 4-20 mA para representar una temperatura, estamos ante una entrada de tipo {datos[idx][0]}."

datos:
  - ["Digital", "Digital"]
  - ["Analógica", "Analógica"]

explicacion: |
  Las señales digitales son discretas (encendido/apagado), mientras que las analógicas representan un rango continuo de valores.
```

```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_escaneo_plc"
  nivel: "basico"
  tags: ["plc", "ciclo_de_escaneo", "control"]

variables:
  fases: ["Lectura de entradas", "Ejecución de programa", "Escritura de salidas"]

respuesta: "Lectura de entradas"
tipo: completar
respuestas_validas: ["Lectura de entradas", "Ejecución de programa", "Escritura de salidas"]

enunciado: "En un PLC, el primer paso del ciclo de escaneo (scan cycle) consiste en la ___."

explicacion: |
  El ciclo de escaneo es el proceso repetitivo del PLC que consta de tres fases principales: 1) Lectura de estados de entradas, 2) Ejecución de la lógica del programa y 3) Actualización de las salidas físicas.
```

```
metadata:
  materia: "automatizacion"
  tema: "logica_de_enclavamiento"
  nivel: "intermedio"
  tags: ["seguridad", "logica_digital", "plc"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Motor_A_ON", "Motor_A_OFF"],
    ["Motor_B_ON", "Motor_B_OFF"]
  ]
  estados: ["ON", "OFF"]

respuesta: "Motor_B_OFF"
tipo: mc
opciones_explicitas: ["Motor_A_ON", "Motor_A_OFF", "Motor_B_ON", "Motor_B_OFF"]

enunciado: "Se tiene un sistema de enclavamiento eléctrico para evitar que dos motores funcionen simultáneamente. Si el motor {escenarios[escenario_idx][0]} está activo, el PLC debe asegurar que el motor {escenarios[escenario_idx][1]} se mantenga en estado ___."

explicacion: |
  El enclavamiento (interlock) es una medida de seguridad donde la activación de una salida impide la activación de otra, garantizando que procesos incompatibles no ocurran al mismo tiempo.
```

```
metadata:
  materia: "automatizacion"
  tema: "diagnostico_de_fallas_plc"
  tema_secundario: "sensores"
  nivel: "avanzado"
  tags: ["mantenimiento", "sensores", "diagnostico"]

variables:
  falla_tipo: uno_de([0, 1])
  fallas: [
    ["El sensor no detecta el objeto (entrada siempre 0)", "El sensor detecta presencia constante (entrada siempre 1)"]
  ]
  causa: ["Falla de alimentación", "Objeto bloqueado en el sensor"]

respuesta: "Falla de alimentación"
tipo: mc
opciones_explicitas: ["Falla de alimentación", "Objeto bloqueado en el sensor", "Error de programación", "Salida de motor quemada"]

enunciado: "Un operario reporta que la cinta transportadora no arranca. El PLC muestra en su diagnóstico que el sensor de presencia de caja está siempre en estado 0, incluso cuando hay cajas pasando. Si la causa es {causas[falla_tipo][0]}, ¿cuál es el diagnóstico más probable?"

pasos:
  - "Verificar voltaje en la alimentación del sensor."
  - "Comprobar si el LED del sensor se enciende al pasar un objeto."
  - "Revisar la continuidad del cableado hacia la entrada del PLC."

explicacion: |
  Si un sensor que debería cambiar de estado (0 a 1) permanece permanentemente en 0 a pesar de la presencia de un objeto, es probable que no esté recibiendo energía o que el cable de señal esté cortado.
```

```
metadata:
  materia: "automatizacion"
  tema: "secuencia_de_operacion"
  nivel: "intermedio"
  tags: ["secuencia", "proceso", "logica"]

variables:
  pasos_llenado: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]

respuesta: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]
tipo: ordenar
opciones_explicitas: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado", "Limpiar tanque"]

enunciado: "Ordene la secuencia lógica de control para un proceso de llenado automático de un tanque mediante un sensor de nivel alto:"

explicacion: |
  Para un proceso de llenado seguro, primero se debe permitir la entrada del fluido, esperar la señal del sensor de nivel para detener el flujo y, finalmente, dar por concluida la tarea.
```

```
metadata:
  materia: "automatizacion"
  tema: "sensores_industriales"
  nivel: "basico"
  tags: ["sensores", "digital", "booleano"]

respuesta: falso
tipo: vf

enunciado: "Si un sensor inductivo de tipo PNP está configurado para enviar una señal de 24V (HIGH) cuando detecta metal, y el PLC recibe una señal de 0V (LOW), ¿es verdadero que el sensor ha detectado un objeto metálico?"

explicacion: |
  En un sensor PNP, la detección se traduce en la presencia de voltaje en la línea de señal. Si la señal es de 0V (LOW), el sensor no está detectando el objeto o está en estado de reposo.
```

```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_scan"
  nivel: "intermedio"
  tags: ["plc", "ciclo_scan", "procesos"]

variables:
  pasos_ciclo: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]

respuesta: pasos_ciclo
tipo: ordenar

enunciado: "Para que un PLC funcione correctamente, debe seguir un ciclo repetitivo de ejecución. Ordene las etapas del ciclo de scan en el orden correcto:"

pasos:
  - "El PLC lee el estado de los sensores físicos."
  - "El procesador ejecuta la lógica de las instrucciones programadas."
  - "El PLC actualiza el estado de los actuadores según la lógica procesada."

explicacion: |
  El ciclo de scan es fundamental: primero se capturan las entradas, luego se procesa la lógica en la CPU y finalmente se escriben las salidas. Si este orden se altera, el control no sería determinista.
```

```
metadata:
  materia: "automatizacion"
  tema: "entradas_discretas_vs_analogicas"
  nivel: "basico"
  tags: ["sensores", "entradas", "plc"]

respuesta: "analógica"
tipo: completar
respuestas_validas: ["analógica"]

enunciado: "Un sensor de proximidad que solo indica si un objeto está presente o no es una entrada digital, mientras que un sensor de temperatura que varía su voltaje según el calor es una entrada ___."

explicacion: |
  Las entradas digitales son binarias (0 o 1 / encendido o apagado), mientras que las analógicas representan una magnitud continua dentro de un rango (ej. 4-20mA o 0-10V).
```

```
metadata:
  materia: "automatizacion"
  tema: "scan_time_impacto"
  nivel: "avanzado"
  tags: ["rendimiento", "tiempo_ciclo"]

respuesta: falso
tipo: vf

enunciado: "Si el tiempo de ciclo (scan time) de un PLC es extremadamente lento, esto no afecta la capacidad del sistema para responder a eventos de alta velocidad en el mundo real."

explicacion: |
  Falso. Si un evento físico ocurre más rápido que el tiempo de scan del PLC, el PLC podría 'perderse' el cambio de estado de la entrada, provocando fallos en el control.
```

```
metadata:
  materia: "automatizacion"
  tema: "lógica_de_salidas"
  nivel: "intermedio"
  tags: ["ladder", "lógica", "salidas"]

variables:
  escenario: [
    ["Si la condición A y la condición B son verdaderas, la salida Q1 se activa.", "Q1"],
    ["Si la condición A es verdadera y la condición B es falsa, la salida Q1 se mantiene apagada.", "Q1"]
  ]
  idx: uno_de([0,1])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Q1", "Q0", "Q2", "Ninguna"]

enunciado: "Analice el escenario: {escenario[idx][0]}"

explicacion: |
  En la lógica de contactos (Ladder), las condiciones en serie actúan como una conexión AND. Si todas las condiciones se cumplen, la energía llega a la bobina de salida.
```

```
metadata:
  materia: "automatizacion"
  tema: "memoria_interna"
  nivel: "basico"
  tags: ["memoria", "bits", "marcadores"]

respuesta: "intermedia"
tipo: mc
opciones_explicitas: ["entrada", "salida", "intermedia"]

enunciado: "Los bits de memoria interna (también llamados marcadores o flags), que no están conectados a ninguna terminal física del PLC, se utilizan para almacenar estados lógicos dentro del programa. Su función principal es servir como variable ___."

explicacion: |
  Los marcadores permiten guardar estados intermedios de la lógica para ser usados en otras partes del programa sin necesidad de una salida física real.
```

```
metadata:
  materia: "automatizacion"
  tema: "diferencias_plc_microcontrolador"
  nivel: "basico"
  tags: ["hardware", "control"]

variables:
  es_industrial: verdadero

respuesta: "robustez"
tipo: mc
opciones_explicitas: ["velocidad de reloj", "robustez", "tamaño", "costo"]

enunciado: "A diferencia de un microcontrolador convencional, el PLC se distingue principalmente por su {es_industrial} ante entornos con ruido electromagnético y vibraciones."

explicacion: |
  Los PLC están diseñados con hardware industrial para resistir condiciones extremas (temperatura, humedad, ruido eléctrico), mientras que los microcontroladores requieren circuitos de protección adicionales para operar en la misma planta.
```

```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_scan"
  nivel: "intermedio"
  tags: ["funcionamiento", "software"]

variables:
  fases: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]

respuesta: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]
tipo: ordenar

enunciado: "Un PLC opera mediante un ciclo repetitivo de tres fases principales. Ordene el proceso de ejecución estándar:"

pasos:
  - "El PLC lee el estado de los sensores físicos."
  - "El procesador resuelve la lógica de la red de control."
  - "El PLC actualiza el estado de los actuadores físicos."

explicacion: |
  El ciclo de scan es fundamental: primero se captura la imagen de entradas, luego se procesa la lógica y finalmente se escriben los resultados en las salidas.
```

```
metadata:
  materia: "automatizacion"
  tema: "comparacion_logica_reles"
  nivel: "basico"
  tags: ["logica", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un sistema de control basado puramente en relés electromecánicos, un PLC permite realizar cambios en la lógica de control sin necesidad de recablear físicamente el hardware."

explicacion: |
  Esta es la principal ventaja de la automatización programable: la flexibilidad de cambiar la secuencia de operación mediante software en lugar de mover cables.
```

```
metadata:
  materia: "automatizacion"
  tema: "tipos_de_salida"
  nivel: "intermedio"
  tags: ["hardware", "electrica"]

variables:
  tipo_salida_idx: uno_de([0, 1])
  tipos: [["transistor", "DC"], ["relé", "AC/DC"]]

respuesta: "transistor"
tipo: mc
opciones_explicitas: ["transistor", "relé", "luz"]

enunciado: "Si necesitamos una salida de alta velocidad para conmutar señales de muy baja potencia (como para un sensor de alta frecuencia), el tipo de salida preferido es el de tipo {tipo_salida_idx[0]}."

explicacion: |
  Las salidas a transistor son mucho más rápidas que las de relé, pero tienen menos capacidad de corriente. Los relés son más lentos pero manejan más carga.
```

```
metadata:
  materia: "automatizacion"
  tema: "programacion_ladder"
  nivel: "intermedio"
  tags: ["lenguaje", "ladder"]

variables:
  es_grafico: verdadero

respuesta: "Ladder"
tipo: completar
respuestas_validas: ["Ladder", "Grafcet"]

enunciado: "El lenguaje de programación más utilizado en la industria para representar la lógica de contactos eléctricos en un PLC es el lenguaje ___."

explicacion: |
  El lenguaje Ladder (escalera) es el estándar debido a que su representación visual es muy similar a los esquemas de diagramas de contactos eléctricos tradicionales.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["plc", "logica_booleana", "sensores"]

variables:
  datos: [["Nivel_Bajo", "encender"], ["Nivel_Alto", "apagar"], ["Nivel_Medio", "mantener"]]
  idx: uno_de([0, 1, 2])
  estado_actual: datos[idx][0]
  accion_plc: datos[idx][1]

respuesta: accion_plc
tipo: mc
opciones_explicitas: ["encender", "apagar", "mantener", "detener"]

enunciado: "En un sistema de control de nivel, si el sensor detecta un estado de {estado_actual}, el PLC debe ejecutar la siguiente acción: ___"

explicacion: |
  El PLC recibe la señal del sensor de nivel y, según la lógica programada, decide la salida hacia el actuador. En este caso, para {estado_actual}, la salida es {accion_plc}.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["seguridad", "entradas_digitales"]

variables:
  sensor_emergencia: uno_de([true, false])
  estado_seguridad: sensor_emergencia == true

respuesta: estado_seguridad
tipo: completar
enunciado: "Si el botón de parada de emergencia es presionado, el contacto de seguridad se abre (el valor lógico de la entrada al PLC pasa a ser 'falso'). ¿Está la condición de 'Seguridad Activa' (entrada = true) cumpliéndose en este momento?"

explicacion: |
  En sistemas industriales, la parada de emergencia suele ser un contacto normalmente cerrado (NC). Al presionarlo, el circuito se abre y la entrada digital al PLC pasa a ser 'falso'.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["secuencia", "pasos_lógicos"]

respuesta: ["Motor_Principal", "Cinta_Transportadora", "Sensor_Presencia_Producto"]
tipo: ordenar
opciones_explicitas: ["Motor_Principal", "Cinta_Transportadora", "Sensor_Presencia_Producto"]

enunciado: "Ordene la secuencia lógica de activación para un proceso de transporte automatizado: primero se energiza el motor, luego se activa la cinta y finalmente se verifica la presencia de producto."

explicacion: |
  Un proceso automatizado requiere una secuencia lógica para evitar daños mecánicos o fallos de proceso.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "avanzado"
  tags: ["calculo", "temporizadores"]

variables:
  caudal: uno_de([10, 20, 50])
  volumen: uno_de([100, 200, 500])
  idx: uno_de([0, 1, 2])
  v_real: volumen[idx][0]
  c_real: caudal[idx][0]
  tiempo_seg: v_real / c_real

respuesta: tiempo_seg
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un PLC controla una válvula de llenado con un caudal constante de {c_real} L/min. Si el tanque debe llenarse hasta alcanzar un volumen de {v_real} L, ¿cuántos minutos tardará el proceso?"

explicacion: |
  El tiempo se calcula mediante la relación entre el volumen objetivo y el caudal: T = V / Q. En este caso, {tiempo_seg} minutos.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["control_temperatura", "salidas_digitales"]

variables:
  temp_actual: uno_de([45, 85, 110])
  idx: uno_de([0, 1, 2])
  t_real: temp_actual[idx][0]
  status: temp_actual[idx][0] > 100

respuesta: status
tipo: completar
respuestas_validas: [true, false]

enunciado: "Si el sensor de temperatura marca {t_real} °C y la condición de alarma es 'Temperatura > 100', el valor lógico de la salida de alarma es ___"

explicacion: |
  El PLC evalúa la expresión lógica. Como {t_real} es mayor o menor a 100, el resultado booleano es {status}.
```

## Sección: realimentacion-feedback (25 preguntas)

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

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["conceptos", "control"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de control con realimentación, la salida se mide y se compara con el valor deseado para ajustar la entrada."
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "sensores"]

variables:
  sensores: [["termistor", "mide temperatura"], ["presostato", "mide presión"], ["encoder", "mide posición"]]
  idx: uno_de([0,1,2])

respuesta: sensores[idx][0
tipo: mc
opciones_explicitas: ["termistor", "presostato", "encoder"]

enunciado: "Para controlar la temperatura de un horno mediante realimentación, el componente encargado de enviar la señal de la variable medida al controlador es un ___."

explicacion: |
  El sensor (en este caso, el termistor) es el elemento que permite cerrar el lazo de control al informar la variable real al controlador.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["calculo", "error"]

variables:
  escenarios: [
    [25.0, 22.0],
    [100.0, 105.0],
    [10.0, 10.0]
  ]
  idx: uno_de([0,1,2])
  setpoint: escenarios[idx][0]
  medida: escenarios[idx][1]

respuesta: setpoint - medida
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un sistema de control de temperatura, el 'error' se define como la diferencia entre el valor deseado (setpoint) y el valor medido. Si el setpoint es {setpoint} y la medida actual es {medida}, ¿cuál es el valor del error?"

pasos:
  - "Identificar el setpoint (valor objetivo)."
  - "Identificar la variable medida (valor real)."
  - "Restar: Error = Setpoint - Medida."

explicacion: |
  El error es la desviación que el controlador debe intentar eliminar. Si el error es positivo, el sistema debe aumentar la variable; si es negativo, debe disminuirla.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["procesos", "flujo"]

respuesta: ["Medición de salida", "Comparación con setpoint", "Cálculo de error", "Acción de control"]
tipo: ordenar

opciones_explicitas: ["Medición de salida", "Comparación con setpoint", "Cálculo de error", "Acción de control", "Inyección de energía"]

enunciado: "Ordene las etapas lógicas de un lazo de realimentación desde que se obtiene la información de la salida hasta que se actúa sobre el proceso:"

explicacion: |
  El ciclo comienza con la medición, sigue con la comparación del error y termina con la acción correctiva del actuador.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  casos: [
    ["Un tostador que se apaga por tiempo sin medir el color del pan", "lazo_abierto"],
    ["Un aire acondicionado que apaga el compresor al llegar a 24°C", "lazo_cerrado"]
  ]
  idx: uno_de([0,1,2])

respuesta: casos[idx][1
tipo: mc
opciones_explicitas: ["lazo_abierto", "lazo_cerrado"]

enunciado: "Analice el siguiente caso: {casos[idx][0]}. ¿A qué tipo de sistema pertenece?"

explicacion: |
  Si el sistema no utiliza la salida para corregir la entrada, es de lazo abierto. Si utiliza la medición para ajustar la entrada, es de lazo cerrado (realimentado).
```

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

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["inestable", "estable", "lineal", "no aplica"]

enunciado: "En un sistema de realimentación positiva, la salida se suma a la entrada en la misma dirección, lo que generalmente produce un comportamiento {escenarios[escenario_idx][0]}."

explicacion: |
  La realimentación positiva refuerza la desviación, lo que suele llevar a la inestabilidad o saturación del sistema.
```

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

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["control", "lazo_abierto", "lazo_cerrado"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas: ["realimentacion", "feedback"]

enunciado: "Mientras que un sistema de lazo abierto actúa según una consigna preestablecida sin importar el resultado, un sistema de lazo cerrado utiliza la ___ para corregir la desviación entre la salida y el valor deseado."

explicacion: |
  La realimentación es el proceso de medir la salida de un sistema y devolver parte de esa información a la entrada para ajustar el comportamiento y minimizar el error.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["estabilidad", "control"]

variables:
  es_negativa: verdadero

respuesta: es_negativa
tipo: completar
enunciado: "En un sistema de control, la realimentación negativa tiene como objetivo principal reducir la diferencia entre la variable de proceso y el setpoint, contribuyendo a la estabilidad del sistema."

explicacion: |
  La realimentación negativa actúa en sentido opuesto a la perturbación, lo que permite estabilizar el sistema y compensar errores.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["perturbaciones", "lazo_cerrado"]

variables:
  escenario: uno_de([0, 1])

respuesta: datos[escenario][1
tipo: mc
opciones_explicitas: ["Es igual en ambos tipos de lazo", "El lazo cerrado es más robusto ante perturbaciones", "El lazo abierto es más robusto ante perturbaciones", "No hay diferencia en la respuesta"]

enunciado: "Considerando un sistema que enfrenta una perturbación externa imprevista, ¿cuál es la principal diferencia en su comportamiento según el escenario?"

pasos:
  - "Identificar si el sistema tiene sensor de salida (lazo cerrado) o solo actuador (lazo abierto)."
  - "Evaluar la capacidad de corrección ante el cambio en la salida."

explicacion: |
  El lazo cerrado detecta la perturbación a través del sensor y ajusta la entrada, mientras que el lazo abierto no puede reaccionar ante cambios no modelados en el proceso.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "arquitectura"]

respuesta: ["Consigna", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

opciones_explicitas: ["Consigna", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los componentes de un sistema de control con realimentación siguiendo el flujo de la señal desde la intención hasta la medición de la salida:"

explicacion: |
  El flujo comienza con el setpoint (consigna), pasa por la lógica de decisión (controlador), la acción física (actuador), la transformación (proceso) y finalmente la detección (sensor) que cierra el lazo.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "avanzado"
  tags: ["estabilidad", "ganancia"]

variables:
  tipo_lazo: uno_de([0, 1])

respuesta: tabla[tipo_lazo][1
tipo: mc
opciones_explicitas: ["Aumenta la estabilidad del sistema", "Provoca una respuesta divergente o inestable", "Reduce el error de estado estacionario", "Elimina la necesidad de un sensor"]

enunciado: "Si analizamos el efecto de la realimentación en la ganancia de lazo, un sistema con realimentación {tipo_lazo_texto} tiende a ser:"

variables:
  tipo_lazo_texto: uno_de(["negativa", "positiva"])

tabla:
  - ["negativa", "Aumenta la estabilidad del sistema"]
  - ["positiva", "Provoca una respuesta divergente o inestable"]

explicacion: |
  La realimentación positiva refuerza la desviación (la salida aumenta la entrada en la misma dirección), lo que suele llevar a la inestabilidad o saturación. La negativa la contrarresta.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["control", "sensor", "setpoint"]

variables:
  datos: [["El horno debe estar a 200°C, pero el sensor marca 180°C", "aumentar", "reducir"], ["El horno debe estar a 200°C, pero el sensor marca 220°C", "reducir", "aumentar"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["aumentar", "reducir", "mantener"]

enunciado: "En un sistema de control de temperatura, si {datos[idx][0]}, la acción de control debe ser: ___"

explicacion: |
  La realimentación compara la variable de proceso (salida) con el setpoint (referencia). Si hay un error, el controlador actúa para minimizarlo.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "lazo_cerrado"]

respuesta: "sensor"
tipo: completar
respuestas_validas: ["sensor", "actuador", "controlador"]

enunciado: "En un sistema de realimentación, el componente encargado de medir la salida para compararla con la referencia se denomina: ___"

explicacion: |
  El sensor es el elemento de medición que cierra el lazo de control al proveer información sobre el estado real de la salida.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["error", "comparador"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de control de lazo cerrado, ¿la señal de error es la diferencia entre el valor de referencia (setpoint) y el valor medido por el sensor?"

explicacion: |
  Correcto. La ecuación básica es Error = Setpoint - Salida (o viceversa según la convención), y es la base para la acción del controlador.
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["flujo", "diagrama"]

respuesta: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar
opciones_explicitas: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo de la señal desde la referencia hasta la medición de la salida:"

explicacion: |
  El flujo típico es: Referencia (Setpoint) -> Controlador -> Actuador -> Proceso -> Salida (medida por el Sensor que retorna al inicio).
```

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "avanzado"
  tags: ["estabilidad", "oscilacion"]

variables:
  datos: [["un sistema con ganancia excesiva", "inestable", "estable"], ["un sistema con ganancia muy baja", "estable", "inestable"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["estable", "inestable"]

enunciado: "Si analizamos {datos[idx][0]}, el comportamiento resultante del sistema tiende a ser: ___"

explicacion: |
  Un exceso de ganancia en un lazo de realimentación puede provocar que las correcciones sean demasiado grandes, causando oscilaciones que llevan a la inestabilidad.
```

## Sección: servomecanismos (25 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["definicion", "control"]

respuesta: "realimentación"
tipo: "completar"
respuestas_validas: ["realimentación", "retroalimentación"]

enunciado: "Un servomecanismo es un sistema de control automático que utiliza la ___ para corregir el error entre la posición deseada y la posición real."

explicacion: |
  La realimentación (o feedback) permite al sistema comparar la salida con la referencia y actuar para minimizar la diferencia.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["componentes", "sensores"]

variables:
  idx: uno_de([0, 1])

respuesta: uno_de(["sensor", "actuador"])[idx]
tipo: "mc"
opciones_explicitas: ["sensor", "actuador", "procesador", "fuente"]

enunciado: "En un lazo de control, el componente encargado de medir la variable de salida y enviar la información al controlador es el ___."

explicacion: |
  El sensor detecta la condición actual del sistema (posición, velocidad, etc.) y la convierte en una señal eléctrica para el controlador.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["error", "control"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que el 'error de seguimiento' es la diferencia entre la señal de referencia (setpoint) y la señal de la variable medida?"

explicacion: |
  Exactamente. El objetivo del control es que el error tienda a cero para que la salida siga fielmente a la referencia.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["lazo_abierto", "lazo_cerrado"]

respuesta: "lazo cerrado"
tipo: "mc"
opciones_explicitas: ["lazo abierto", "lazo cerrado", "lazo simple", "lazo múltiple"]

enunciado: "Un sistema que no posee un mecanismo de medición para corregir su salida se denomina sistema de ___."

explicacion: |
  Los sistemas de lazo abierto no reaccionan a las perturbaciones porque no conocen el estado real de la salida.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["flujo", "ordenar"]

respuesta: ["referencia", "controlador", "actuador", "planta"]
tipo: "ordenar"
opciones_explicitas: ["referencia", "controlador", "actuador", "planta"]

enunciado: "Ordene los elementos según el flujo de señal típico en un sistema de control de lazo cerrado:"

pasos:
  - "La señal de entrada o consigna."
  - "El elemento que procesa el error."
  - "El elemento que ejecuta la acción física."
  - "El proceso físico que se desea controlar."

explicacion: |
  El flujo comienza con la referencia, pasa por el controlador, luego al actuador, que modifica la planta, cuya salida es medida para volver al inicio.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_conceptos_basicos"
  nivel: "basico"
  tags: ["control", "realimentacion", "error"]

respuesta: "error"
tipo: "completar"
respuestas_validas: ["error"]

enunciado: "En un sistema de control de posición, la diferencia entre el valor de consigna (setpoint) y el valor real medido por el sensor se denomina ___."

explicacion: |
  El error es la variable fundamental en el control por realimentación. El controlador actúa para minimizar este valor hasta que sea cero o despreciable.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_componentes"
  nivel: "basico"
  tags: ["componentes", "lazo_cerrado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["brazo_robotico", "motor_paso_a_paso"],
    ["sistema_giroscopico", "actuador_lineal"]
  ]
  sensores: [
    ["encoder_optical", "giroscopio_digital"],
    ["potenciometro", "sensor_de_proximidad"]
  ]

respuesta: uno_de(["sensor", "actuador", "controlador"])
tipo: "mc"
opciones_explicitas: ["sensor", "actuador", "controlador"]

enunciado: "En un {escenarios[escenario_idx][0]} que utiliza un {sensores[escenario_idx][0]} para detectar su posición, el componente encargado de recibir la señal de corrección y mover la estructura se llama ___."

explicacion: |
  El ciclo de un servomecanismo requiere: 1. Referencia, 2. Controlador, 3. Actuador, 4. Planta, 5. Sensor. El componente que ejecuta el movimiento físico es el actuador.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_estabilidad"
  nivel: "intermedio"
  tags: ["estabilidad", "ganancia"]

respuesta: falso
tipo: "vf"

enunciado: "¿Un aumento excesivo en la ganancia de un controlador en un servomecanismo siempre garantiza que el sistema alcance la posición deseada más rápido sin oscilaciones?"

explicacion: |
  Falso. Si la ganancia es demasiado alta, el sistema puede sobrepasarse (overshoot) y entrar en oscilaciones sostenidas o incluso volverse inestable, perdiendo el control de la posición.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_puesta_en_marcha"
  nivel: "intermedio"
  tags: ["proceso", "ajuste"]

respuesta: ["identificar_planta", "medir_respuesta", "ajustar_parametros", "validar_estabilidad"]
tipo: "ordenar"
opciones_explicitas: ["identificar_planta", "medir_respuesta", "ajustar_parametros", "validar_estabilidad"]

enunciado: "Ordene los pasos lógicos para el sintonizado de un servomecanismo industrial:"

pasos:
  - "Determinar las características dinámicas del motor y la carga."
  - "Observar cómo reacciona el sistema ante un escalón de entrada."
  - "Modificar la ganancia (P) o la derivación (D) del controlador."
  - "Comprobar que el sistema no oscile ante cambios de consigna."

explicacion: |
  El proceso de sintonización requiere primero conocer la planta, luego observar su comportamiento, aplicar cambios y finalmente verificar que el sistema sea estable.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_calculo_error"
  nivel: "intermedio"
  tags: ["calculo", "error_posicion"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [100.0, 98.5],
    [45.0, 45.2]
  ]

respuesta: abs(datos[idx][0] - datos[idx][1])
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Un servomecanismo tiene como consigna (setpoint) una posición de {datos[idx][0]} grados. El sensor reporta que la posición actual es de {datos[idx][1]} grados. ¿Cuál es el valor absoluto del error de posición?"

pasos:
  - "Calcular la diferencia entre el setpoint y la posición medida."
  - "Aplicar el valor absoluto para obtener la magnitud del error."

explicacion: |
  El error se calcula como $e = \text{setpoint} - \text{medida}$. En este caso, el valor absoluto nos da la magnitud de la desviación respecto al objetivo.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_conceptos_basicos"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas: ["realimentacion"]

enunciado: "La característica fundamental que distingue a un servomecanismo de un sistema de control de lazo abierto es la presencia de una señal de ___."

explicacion: |
  Un sistema de lazo abierto actúa según una consigna sin verificar el resultado. Un servomecanismo (lazo cerrado) utiliza la realimentación para comparar la salida con la entrada y corregir el error.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_error"
  nivel: "intermedio"
  tags: ["error", "consigna"]

variables:
  escenario: uno_de([
    ["consiga_10", "10", "12"],
    ["consiga_50", "50", "48"]
  ])

respuesta: escenario[0][2
tipo: mc
opciones_explicitas: ["12", "48", "10", "50"]

enunciado: "En un servomecanismo, si la consigna es {escenario[0][1]} y el sensor detecta que la posición actual es {escenario[0][2]}, el valor del error (consigna - medida) es:"

explicacion: |
  El error es la diferencia entre el valor deseado (setpoint) y el valor real medido. En este caso: 12 - 10 = 2 (o la diferencia correspondiente según el escenario sorteado).
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_componentes"
  nivel: "basico"
  tags: ["sensores", "actuadores"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un servomecanismo requiere obligatoriamente de un elemento sensor para cerrar el lazo de control?"

explicacion: |
  Verdadero. Sin un sensor que mida la variable de salida, el sistema no puede conocer el error y, por lo tanto, no puede realizar ajustes automáticos, convirtiéndose en un sistema de lazo abierto.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_flujo_señal"
  nivel: "intermedio"
  tags: ["flujo", "proceso"]

respuesta: ["consigna", "comparador", "controlador", "actuador", "planta", "sensor"]
tipo: ordenar
opciones_explicitas: ["consigna", "comparador", "controlador", "actuador", "planta", "sensor"]

enunciado: "Ordene los elementos de un lazo de control típico siguiendo el flujo de la señal desde la entrada hasta la medición de la salida:"

explicacion: |
  El flujo comienza con la consigna (setpoint), pasa por el comparador (donde se calcula el error), el controlador que procesa el error, el actuador que mueve la planta, y finalmente el sensor que mide la salida para volver al comparador.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_error_estado_estacionario"
  nivel: "avanzado"
  tags: ["estabilidad", "error"]

variables:
  caso: uno_de([
    ["P", "Proporcional", "error_persistente"],
    ["PI", "Proporcional-Integral", "error_cero"]
  ])

respuesta: caso[1][2
tipo: mc
opciones_explicitas: ["error_persistente", "error_cero", "error_infinito"]

enunciado: "En un sistema de control de posición, un controlador puramente Proporcional (P) suele presentar un ___ cuando se le exige mantener un valor constante frente a una carga."

explicacion: |
  El control Proporcional puro a menudo no puede eliminar el error de estado estacionario (offset) porque requiere un error no nulo para generar una señal de corrección. El control Integral (I) es el encargado de eliminar este error.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas: ["realimentacion", "feedback"]

enunciado: "La característica principal que distingue a un servomecanismo de un sistema de control de lazo abierto es la presencia de una señal de ___."

explicacion: |
  Un servomecanismo utiliza la realimentación para comparar la salida con la entrada (setpoint) y corregir el error, mientras que un sistema de lazo abierto no tiene forma de saber si alcanzó el objetivo.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["lazo_abierto", "lazo_cerrado"]

variables:
  es_lazo_cerrado: true

respuesta: es_lazo_cerrado
tipo: completar
enunciado: "Si un sistema de control utiliza un sensor para medir la posición actual y compararla con la posición deseada para corregir el error, ¿se trata de un sistema de lazo cerrado?"

explicacion: |
  Correcto. La medición constante de la variable de salida para ajustar la entrada es la definición de un sistema de lazo cerrado o servomecanismo.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["sensor de posición", "error"], ["encoder", "desviación"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["datos[escenario_idx][0]", "datos[escenario_idx][1]", "señal de mando", "actuador"]

enunciado: "En un servomecanismo, el dispositivo que detecta la diferencia entre la posición real y la deseada permite calcular el ___."

explicacion: |
  El sensor (como un encoder) proporciona la información necesaria para que el controlador determine el error o desviación existente.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta: ["setpoint", "comparador", "controlador", "actuador", "proceso", "sensor"]
tipo: ordenar

opciones_explicitas: ["setpoint", "comparador", "controlador", "actuador", "proceso", "sensor"]

enunciado: "Ordene los componentes de un servomecanismo según el flujo lógico de la señal en un lazo de control cerrado:"

explicacion: |
  El flujo comienza con el valor deseado (setpoint), pasa por el comparador con la realimentación, el controlador actúa sobre el actuador que mueve el proceso, y el sensor cierra el lazo.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "avanzado"
  tags: ["precision", "error"]

variables:
  caso_error: uno_de([0, 1])
  valores: [[0.05, "bajo"], [0.5, "alto"]]

respuesta: valores[caso_error][1
tipo: mc
opciones_explicitas: ["valores[caso_error][0]", "valores[caso_error][1]", "nulo", "infinito"]

enunciado: "Si un servomecanismo tiene un error de posición de {valores[caso_error][0]} unidades, su nivel de precisión se considera ___ en comparación con un sistema sin realimentación."

explicacion: |
  Un error de {valores[caso_error][0]} indica una precisión {valores[caso_error][1]} en el contexto de este ejercicio de comparación.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["control", "error", "realimentacion"]

variables:
  datos: [["setpoint: 90", "actual: 85", "error: 5"], ["setpoint: 45", "actual: 50", "error: -5"], ["setpoint: 10", "actual: 10", "error: 0"]]
  idx: uno_de([0, 1, 2])
  valor_error: datos[idx][2]

enunciado: "En un sistema de control de posición, si el valor de consigna es {datos[idx][0]} y la posición actual es {datos[idx][1]}, el error de seguimiento es ___."

respuestas_validas: ["5", "-5", "0"]
respuesta: datos[idx][2]
tipo: completar

explicacion: |
  El error de seguimiento se define como la diferencia entre el valor deseado (setpoint) y el valor real medido.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["componentes", "sensores"]

enunciado: "¿Cuál es el componente encargado de medir la salida del sistema para compararla con la referencia en un servomecanismo?"

opciones_explicitas: ["Actuador", "Controlador", "Sensor", "Referencia"]
respuesta: "Sensor"
tipo: mc

explicacion: |
  El sensor proporciona la información del estado actual (realimentación) para que el controlador pueda actuar.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "avanzado"
  tags: ["estabilidad", "ganancia"]

variables:
  datos: [["ganancia muy alta", "inestable"], ["ganancia moderada", "estable"], ["ganancia nula", "lento"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si aumentamos la ganancia de un lazo de control de forma excesiva, el sistema tiende a ser ___."

opciones_explicitas: ["estable", "inestable", "lineal"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Una ganancia excesiva en el lazo de realimentación puede provocar oscilaciones crecientes que llevan a la inestabilidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["logica", "booleano"]

enunciado: "En un servomecanismo de lazo cerrado, si el error es exactamente cero, ¿se considera que el sistema ha alcanzado su estado estacionario de consigna? (Respuesta: verdadero/falso)"

respuesta: verdadero
tipo: vf

explicacion: |
  Cuando el error es cero, la salida coincide con la entrada, indicando que el objetivo se ha cumplido.
```

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["proceso", "secuencia"]

enunciado: "Ordene los pasos lógicos de un ciclo de control de un servomecanismo:"

opciones_explicitas: ["Medir la salida", "Comparar con la referencia", "Calcular el error", "Actuar sobre el proceso"]
respuesta: ["Medir la salida", "Comparar con la referencia", "Calcular el error", "Actuar sobre el proceso"]
tipo: ordenar

explicacion: |
  El ciclo clásico consiste en: Medición -> Comparación -> Cálculo de error -> Acción correctiva.
```
