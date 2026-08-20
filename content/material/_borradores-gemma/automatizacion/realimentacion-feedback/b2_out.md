### 1 — Concepto de Realimentación
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

### 2 — El sensor en un sistema de temperatura
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "sensores"]

variables:
  sensores: [["termistor", "mide temperatura"], ["presostato", "mide presión"], ["encoder", "mide posición"]]
  idx: uno_de([0,1,2])

respuesta: sensores[idx][0]
tipo: mc
opciones_explicitas: ["termistor", "presostato", "encoder"]

enunciado: "Para controlar la temperatura de un horno mediante realimentación, el componente encargado de enviar la señal de la variable medida al controlador es un ___."

explicacion: |
  El sensor (en este caso, el termistor) es el elemento que permite cerrar el lazo de control al informar la variable real al controlador.
```

### 3 — Cálculo del Error de Control
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
tipo: input
tolerancia_abs: 0.01

enunciado: "En un sistema de control de temperatura, el 'error' se define como la diferencia entre el valor deseado (setpoint) y el valor medido. Si el setpoint es {setpoint} y la medida actual es {medida}, ¿cuál es el valor del error?"

pasos:
  - "Identificar el setpoint (valor objetivo)."
  - "Identificar la variable medida (valor real)."
  - "Restar: Error = Setpoint - Medida."

explicacion: |
  El error es la desviación que el controlador debe intentar eliminar. Si el error es positivo, el sistema debe aumentar la variable; si es negativo, debe disminuirla.
```

### 4 — Lazo de Control Cerrado
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

### 5 — Clasificación de Sistemas
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

respuesta: casos[idx][1]
tipo: mc
opciones_explicitas: ["lazo_abierto", "lazo_cerrado"]

enunciado: "Analice el siguiente caso: {casos[idx][0]}. ¿A qué tipo de sistema pertenece?"

explicacion: |
  Si el sistema no utiliza la salida para corregir la entrada, es de lazo abierto. Si utiliza la medición para ajustar la entrada, es de lazo cerrado (realimentado).
```