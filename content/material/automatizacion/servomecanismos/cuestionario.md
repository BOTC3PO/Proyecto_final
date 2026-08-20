# Automatizacion — Servomecanismos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de servomecanismo

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["definicion", "control"]

respuesta: "realimentación"
tipo: "completar"
respuestas_validas:
  - "realimentación"
  - "retroalimentación"

enunciado: "Un servomecanismo es un sistema de control automático que utiliza la ___ para corregir el error entre la posición deseada y la posición real."

explicacion: |
  La realimentación (o feedback) permite al sistema comparar la salida con la referencia y actuar para minimizar la diferencia.
```

### 2 — Componentes de un sistema de control

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["componentes", "sensores"]

respuesta: "sensor"
tipo: mc
opciones_explicitas: ["sensor", "actuador", "procesador", "fuente"]

enunciado: "En un lazo de control, el componente encargado de medir la variable de salida y enviar la información al controlador es el ___."

explicacion: |
  El sensor detecta la condición actual del sistema (posición, velocidad, etc.) y la convierte en una señal eléctrica para el controlador.
```

### 3 — Error de seguimiento

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

### 4 — Lazo de control cerrado

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

### 5 — Flujo de información en un servomecanismo

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["flujo", "ordenar"]

respuesta_orden: ["referencia", "controlador", "actuador", "planta"]
tipo: ordenar
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

### 6 — El concepto de error en un servomecanismo

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_conceptos_basicos"
  nivel: "basico"
  tags: ["control", "realimentacion", "error"]

respuesta: "error"
tipo: "completar"
respuestas_validas:
  - "error"

enunciado: "En un sistema de control de posición, la diferencia entre el valor de consigna (setpoint) y el valor real medido por el sensor se denomina ___."

explicacion: |
  El error es la variable fundamental en el control por realimentación. El controlador actúa para minimizar este valor hasta que sea cero o despreciable.
```

### 7 — Componentes de un lazo de control cerrado

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_componentes"
  nivel: "basico"
  tags: ["componentes", "lazo_cerrado"]

variables:
  escenario: uno_de([["brazo_robotico", "motor_paso_a_paso", "encoder_optical"], ["sistema_giroscopico", "actuador_lineal", "potenciometro"]])

respuesta: "actuador"
tipo: mc
opciones_explicitas: ["sensor", "actuador", "controlador"]

enunciado: "En un {escenario[0]} que utiliza un {escenario[2]} para detectar su posición, el componente encargado de recibir la señal de corrección y mover la estructura se llama ___."

explicacion: |
  El ciclo de un servomecanismo requiere: 1. Referencia, 2. Controlador, 3. Actuador, 4. Planta, 5. Sensor. El componente que ejecuta el movimiento físico es el actuador.
```

### 8 — Análisis de estabilidad en un servomecanismo

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

### 9 — Pasos para el ajuste de un lazo de control

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_puesta_en_marcha"
  nivel: "intermedio"
  tags: ["proceso", "ajuste"]

respuesta_orden: ["identificar_planta", "medir_respuesta", "ajustar_parametros", "validar_estabilidad"]
tipo: ordenar
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

### 10 — Cálculo de error de posición

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_calculo_error"
  nivel: "intermedio"
  tags: ["calculo", "error_posicion"]

variables:
  idx: uno_de([0, 1])
  datos: [[100.0, 98.5], [45.0, 45.2]]

respuesta: abs(datos[idx][0] - datos[idx][1])
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un servomecanismo tiene como consigna (setpoint) una posición de {datos[idx][0]} grados. El sensor reporta que la posición actual es de {datos[idx][1]} grados. ¿Cuál es el valor absoluto del error de posición?"

pasos:
  - "Calcular la diferencia entre el setpoint y la posición medida."
  - "Aplicar el valor absoluto para obtener la magnitud del error."

explicacion: |
  El error se calcula como e = setpoint - medida. En este caso, el valor absoluto nos da la magnitud de la desviación respecto al objetivo.
```

### 11 — Diferencia entre Lazo Abierto y Lazo Cerrado

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_conceptos_basicos"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas:
  - "realimentacion"

enunciado: "La característica fundamental que distingue a un servomecanismo de un sistema de control de lazo abierto es la presencia de una señal de ___."

explicacion: |
  Un sistema de lazo abierto actúa según una consigna sin verificar el resultado. Un servomecanismo (lazo cerrado) utiliza la realimentación para comparar la salida con la entrada y corregir el error.
```

### 12 — El rol del Error en el Control

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_error"
  nivel: "intermedio"
  tags: ["error", "consigna"]

variables:
  escenario: uno_de([[10, 12], [50, 48]])

respuesta: escenario[0] - escenario[1]
tipo: completar
tolerancia_abs: 0

enunciado: "En un servomecanismo, si la consigna es {escenario[0]} y el sensor detecta que la posición actual es {escenario[1]}, el valor del error (consigna - medida) es:"

explicacion: |
  El error es la diferencia entre el valor deseado (setpoint) y el valor real medido. En este caso: 12 - 10 = 2 (o la diferencia correspondiente según el escenario sorteado).
```

### 13 — Componentes de un Servomecanismo

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

### 14 — Secuencia de la Realimentación

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_flujo_señal"
  nivel: "intermedio"
  tags: ["flujo", "proceso"]

respuesta_orden: ["consigna", "comparador", "controlador", "actuador", "planta", "sensor"]
tipo: ordenar
opciones_explicitas: ["consigna", "comparador", "controlador", "actuador", "planta", "sensor"]

enunciado: "Ordene los elementos de un lazo de control típico siguiendo el flujo de la señal desde la entrada hasta la medición de la salida:"

explicacion: |
  El flujo comienza con la consigna (setpoint), pasa por el comparador (donde se calcula el error), el controlador que procesa el error, el actuador que mueve la planta, y finalmente el sensor que mide la salida para volver al comparador.
```

### 15 — Error de Estado Estacionario

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_error_estado_estacionario"
  nivel: "avanzado"
  tags: ["estabilidad", "error"]

respuesta: "error_persistente"
tipo: mc
opciones_explicitas: ["error_persistente", "error_cero", "error_infinito"]

enunciado: "En un sistema de control de posición, un controlador puramente Proporcional (P) suele presentar un ___ cuando se le exige mantener un valor constante frente a una carga."

explicacion: |
  El control Proporcional puro a menudo no puede eliminar el error de estado estacionario (offset) porque requiere un error no nulo para generar una señal de corrección. El control Integral (I) es el encargado de eliminar este error.
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["control", "realimentacion"]

respuesta: "realimentacion"
tipo: completar
respuestas_validas:
  - "realimentacion"
  - "feedback"

enunciado: "La característica principal que distingue a un servomecanismo de un sistema de control de lazo abierto es la presencia de una señal de ___."

explicacion: |
  Un servomecanismo utiliza la realimentación para comparar la salida con la entrada (setpoint) y corregir el error, mientras que un sistema de lazo abierto no tiene forma de saber si alcanzó el objetivo.
```

### 17 — Clasificación de sistemas

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["lazo_abierto", "lazo_cerrado"]

tipo: vf
respuesta: verdadero
enunciado: "Si un sistema de control utiliza un sensor para medir la posición actual y compararla con la posición deseada para corregir el error, ¿se trata de un sistema de lazo cerrado?"

explicacion: |
  Correcto. La medición constante de la variable de salida para ajustar la entrada es la definición de un sistema de lazo cerrado o servomecanismo.
```

### 18 — Componentes del lazo

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

respuesta: "error"
tipo: mc
opciones_explicitas: ["error", "desviación", "señal de mando", "actuador"]

enunciado: "En un servomecanismo, el dispositivo que detecta la diferencia entre la posición real y la deseada permite calcular el ___."

explicacion: |
  El sensor (como un encoder) proporciona la información necesaria para que el controlador determine el error o desviación existente.
```

### 19 — Flujo de información

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta_orden: ["setpoint", "comparador", "controlador", "actuador", "proceso", "sensor"]
tipo: ordenar

opciones_explicitas: ["setpoint", "comparador", "controlador", "actuador", "proceso", "sensor"]

enunciado: "Ordene los componentes de un servomecanismo según el flujo lógico de la señal en un lazo de control cerrado:"

explicacion: |
  El flujo comienza con el valor deseado (setpoint), pasa por el comparador con la realimentación, el controlador actúa sobre el actuador que mueve el proceso, y el sensor cierra el lazo.
```

### 20 — Comparación de precisión

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "avanzado"
  tags: ["precision", "error"]

variables:
  caso_error: uno_de([0, 1])
  valores: [[0.05, "bajo"], [0.5, "alto"]]

respuesta: valores[caso_error][1]
tipo: mc
opciones_explicitas: ["bajo", "alto", "nulo", "infinito"]

enunciado: "Si un servomecanismo tiene un error de posición de {valores[caso_error][0]} unidades, su nivel de precisión se considera ___ en comparación con un sistema sin realimentación."

explicacion: |
  Un error de {valores[caso_error][0]} indica una precisión {valores[caso_error][1]} en el contexto de este ejercicio de comparación.
```

### 21 — Error de seguimiento en servomotor

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

respuestas_validas:
  - "5"
  - "-5"
  - "0"
respuesta: datos[idx][2]
tipo: completar

explicacion: |
  El error de seguimiento se define como la diferencia entre el valor deseado (setpoint) y el valor real medido.
```

### 22 — Componente de realimentación

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

### 23 — Estabilidad del sistema

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "avanzado"
  tags: ["estabilidad", "ganancia"]

enunciado: "Si aumentamos la ganancia de un lazo de control de forma excesiva, el sistema tiende a ser ___."

opciones_explicitas: ["estable", "inestable", "lineal"]
respuesta: "inestable"
tipo: mc

explicacion: |
  Una ganancia excesiva en el lazo de realimentación puede provocar oscilaciones crecientes que llevan a la inestabilidad.
```

### 24 — Lógica de control de posición

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

### 25 — Ciclo de operación del servomecanismo

```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["proceso", "secuencia"]

enunciado: "Ordene los pasos lógicos de un ciclo de control de un servomecanismo:"

opciones_explicitas: ["Medir la salida", "Comparar con la referencia", "Calcular el error", "Actuar sobre el proceso"]
respuesta_orden: ["Medir la salida", "Comparar con la referencia", "Calcular el error", "Actuar sobre el proceso"]
tipo: ordenar

explicacion: |
  El ciclo clásico consiste en: Medición -> Comparación -> Cálculo de error -> Acción correctiva.
```
