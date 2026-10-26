### 1 — Definición de servomecanismo
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

### 2 — Componentes de un sistema de control
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