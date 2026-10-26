### 1 — Error de seguimiento en servomotor
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["control", "error", "realimentacion"]

variables:
  escenario: uno_de([["setpoint: 90", "actual: 85", "error: 5"], ["setpoint: 45", "actual: 50", "error: -5"], ["setpoint: 10", "actual: 10", "error: 0"]])
  idx: uno_de([0, 1, 2])
  valor_error: escenario[idx][2]

enunciado: "En un sistema de control de posición, si el valor de consigna es {escenario[idx][0]} y la posición actual es {escenario[idx][1]}, el error de seguimiento es ___."

respuestas_validas: ["5", "-5", "0"]
respuesta: escenario[idx][2]
tipo: completar

explicacion: |
  El error de seguimiento se define como la diferencia entre el valor deseado (setpoint) y el valor real medido.
```

### 2 — Componente de realimentación
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

### 3 — Estabilidad del sistema
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "avanzado"
  tags: ["estabilidad", "ganancia"]

variables:
  caso: uno_de([["ganancia muy alta", "inestable"], ["ganancia moderada", "estable"], ["ganancia nula", "lento"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si aumentamos la ganancia de un lazo de control de forma excesiva, el sistema tiende a ser ___."

opciones_explicitas: ["estable", "inestable", "lineal"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Una ganancia excesiva en el lazo de realimentación puede provocar oscilaciones crecientes que llevan a la inestabilidad.
```

### 4 — Lógica de control de posición
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

### 5 — Ciclo de operación del servomecanismo
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