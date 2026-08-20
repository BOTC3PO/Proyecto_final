# Automatizacion — Realimentacion feedback (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Realimentación

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["definicion", "control"]

tipo: mc
respuesta: "El uso de la salida de un sistema para ajustar su propia entrada"
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
respuestas_validas:
  - "sensor"
  - "actuador"
  - "error"
  - "setpoint"

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
respuesta: "Realimentación Positiva"
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
respuesta_orden: ["Setpoint (Referencia)", "Comparador (Error)", "Controlador", "Actuador", "Proceso", "Sensor"]
```

### 6 — Concepto de Realimentación

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

### 7 — El sensor en un sistema de temperatura

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

### 8 — Cálculo del Error de Control

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["calculo", "error"]

variables:
  escenarios: [[25.0, 22.0], [100.0, 105.0], [10.0, 10.0]]
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

### 9 — Lazo de Control Cerrado

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["procesos", "flujo"]

respuesta_orden: ["Medición de salida", "Comparación con setpoint", "Cálculo de error", "Acción de control"]
tipo: ordenar

opciones_explicitas: ["Medición de salida", "Comparación con setpoint", "Cálculo de error", "Acción de control"]

enunciado: "Ordene las etapas lógicas de un lazo de realimentación desde que se obtiene la información de la salida hasta que se actúa sobre el proceso:"

explicacion: |
  El ciclo comienza con la medición, sigue con la comparación del error y termina con la acción correctiva del actuador.
```

### 10 — Clasificación de Sistemas

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  casos: [["Un tostador que se apaga por tiempo sin medir el color del pan", "lazo_abierto"], ["Un aire acondicionado que apaga el compresor al llegar a 24°C", "lazo_cerrado"]]
  idx: uno_de([0,1])

respuesta: casos[idx][1]
tipo: mc
opciones_explicitas: ["lazo_abierto", "lazo_cerrado"]

enunciado: "Analice el siguiente caso: {casos[idx][0]}. ¿A qué tipo de sistema pertenece?"

explicacion: |
  Si el sistema no utiliza la salida para corregir la entrada, es de lazo abierto. Si utiliza la medición para ajustar la entrada, es de lazo cerrado (realimentado).
```

### 11 — Propósito de la realimentación

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["conceptos", "control"]

respuesta: "corregir"
tipo: completar
respuestas_validas:
  - "corregir"
  - "ajustar"

enunciado: "El objetivo principal de un sistema de control con realimentación es utilizar la señal de salida para ___ el error entre el valor medido y el valor de consigna."

explicacion: |
  La realimentación permite comparar la salida real con la deseada para realizar ajustes que minimicen la diferencia (error).
```

### 12 — Realimentación Positiva vs Negativa

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["estabilidad", "tipos_de_control"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un amplificador que aumenta la señal de salida basándose en la entrada original, provocando saturación.", "inestable"], ["Un termostato que apaga la calefacción cuando la temperatura alcanza el setpoint.", "estable"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["inestable", "estable", "lineal", "no aplica"]

enunciado: "En un sistema de realimentación positiva, la salida se suma a la entrada en la misma dirección, lo que generalmente produce un comportamiento {escenarios[escenario_idx][0]}."

explicacion: |
  La realimentación positiva refuerza la desviación, lo que suele llevar a la inestabilidad o saturación del sistema.
```

### 13 — Componentes de un lazo de control

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

### 14 — Flujo de información en el lazo

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta_orden: ["Setpoint", "Comparador", "Controlador", "Actuador", "Proceso", "Sensor"]
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

### 15 — Estabilidad y Error

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

### 16 — Diferencia fundamental: Lazo Abierto vs Lazo Cerrado

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["control", "lazo_abierto", "lazo_cerrado"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas:
  - "realimentacion"
  - "feedback"

enunciado: "Mientras que un sistema de lazo abierto actúa según una consigna preestablecida sin importar el resultado, un sistema de lazo cerrado utiliza la ___ para corregir la desviación entre la salida y el valor deseado."

explicacion: |
  La realimentación es el proceso de medir la salida de un sistema y devolver parte de esa información a la entrada para ajustar el comportamiento y minimizar el error.
```

### 17 — Característica de la Realimentación Negativa

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

### 18 — Comparación de respuesta ante perturbaciones

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["perturbaciones", "lazo_cerrado"]

respuesta: "El lazo cerrado es más robusto ante perturbaciones"
tipo: mc
opciones_explicitas: ["Es igual en ambos tipos de lazo", "El lazo cerrado es más robusto ante perturbaciones", "El lazo abierto es más robusto ante perturbaciones", "No hay diferencia en la respuesta"]

enunciado: "Considerando un sistema que enfrenta una perturbación externa imprevista, ¿cuál es la principal diferencia en su comportamiento entre lazo abierto y lazo cerrado?"

pasos:
  - "Identificar si el sistema tiene sensor de salida (lazo cerrado) o solo actuador (lazo abierto)."
  - "Evaluar la capacidad de corrección ante el cambio en la salida."

explicacion: |
  El lazo cerrado detecta la perturbación a través del sensor y ajusta la entrada, mientras que el lazo abierto no puede reaccionar ante cambios no modelados en el proceso.
```

### 19 — Componentes de un lazo de control

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "arquitectura"]

respuesta_orden: ["Consigna", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar

opciones_explicitas: ["Consigna", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los componentes de un sistema de control con realimentación siguiendo el flujo de la señal desde la intención hasta la medición de la salida:"

explicacion: |
  El flujo comienza con el setpoint (consigna), pasa por la lógica de decisión (controlador), la acción física (actuador), la transformación (proceso) y finalmente la detección (sensor) que cierra el lazo.
```

### 20 — Realimentación Positiva vs Negativa

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "avanzado"
  tags: ["estabilidad", "ganancia"]

variables:
  tipo_lazo: uno_de([0, 1])
  tipo_lazo_texto: ["negativa", "positiva"][tipo_lazo]
  tabla: ["Aumenta la estabilidad del sistema", "Provoca una respuesta divergente o inestable"]

respuesta: tabla[tipo_lazo]
tipo: mc
opciones_explicitas: ["Aumenta la estabilidad del sistema", "Provoca una respuesta divergente o inestable", "Reduce el error de estado estacionario", "Elimina la necesidad de un sensor"]

enunciado: "Si analizamos el efecto de la realimentación en la ganancia de lazo, un sistema con realimentación {tipo_lazo_texto} tiende a ser:"

explicacion: |
  La realimentación positiva refuerza la desviación (la salida aumenta la entrada en la misma dirección), lo que suele llevar a la inestabilidad o saturación. La negativa la contrarresta.
```

### 21 — Control de temperatura en un horno

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

### 22 — Componentes de un lazo cerrado

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["componentes", "lazo_cerrado"]

respuesta: "sensor"
tipo: completar
respuestas_validas:
  - "sensor"
  - "actuador"
  - "controlador"

enunciado: "En un sistema de realimentación, el componente encargado de medir la salida para compararla con la referencia se denomina: ___"

explicacion: |
  El sensor es el elemento de medición que cierra el lazo de control al proveer información sobre el estado real de la salida.
```

### 23 — Lógica de la señal de error

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

### 24 — Flujo de información en el lazo

```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "basico"
  tags: ["flujo", "diagrama"]

respuesta_orden: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]
tipo: ordenar
opciones_explicitas: ["Setpoint", "Controlador", "Actuador", "Proceso", "Sensor"]

enunciado: "Ordene los componentes de un sistema de control de lazo cerrado siguiendo el flujo de la señal desde la referencia hasta la medición de la salida:"

explicacion: |
  El flujo típico es: Referencia (Setpoint) -> Controlador -> Actuador -> Proceso -> Salida (medida por el Sensor que retorna al inicio).
```

### 25 — Estabilidad en sistemas con exceso de ganancia

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
