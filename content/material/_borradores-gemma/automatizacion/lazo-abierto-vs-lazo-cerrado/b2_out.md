### 1 — Concepto fundamental de realimentación
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

### 2 — Identificación de sistemas
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["ejemplos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un tostador de pan que funciona por tiempo fijo sin sensor de color de pan", "lazo abierto"],
    ["Un aire acondicionado con termostato que apaga el compresor al llegar a la temperatura seteada", "lazo cerrado"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Identifica el tipo de control del siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  El caso {escenarios[escenario_idx][0]} es de tipo {escenarios[escenario_idx][1]} porque {escenarios[escenario_idx][1] == "lazo abierto" ? "no utiliza la salida para ajustar la entrada" : "utiliza un sensor para comparar la salida con el valor deseado"}.
```

### 3 — Análisis de componentes
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

### 4 — Flujo de señales en lazo cerrado
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

### 5 — Impacto de perturbaciones
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

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["más vulnerable", "más robusto"]

enunciado: "Considerando la respuesta ante una perturbación que altera la salida: {casos[caso_idx][0]}"

explicacion: |
  En lazo abierto, si una perturbación cambia la salida, el sistema no lo nota y no puede corregirlo. En lazo cerrado, el sensor detecta el cambio y el controlador compensa la perturbación para volver al setpoint.
```