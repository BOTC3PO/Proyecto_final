### 1 — Diferencia fundamental: Lazo Abierto vs Lazo Cerrado
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

### 2 — Característica de la Realimentación Negativa
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["estabilidad", "control"]

variables:
  es_negativa: verdadero

respuesta: es_negativa
tipo: vf

enunciado: "En un sistema de control, la realimentación negativa tiene como objetivo principal reducir la diferencia entre la variable de proceso y el setpoint, contribuyendo a la estabilidad del sistema."

explicacion: |
  La realimentación negativa actúa en sentido opuesto a la perturbación, lo que permite estabilizar el sistema y compensar errores.
```

### 3 — Comparación de respuesta ante perturbaciones
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["perturbaciones", "lazo_cerrado"]

variables:
  escenario: uno_de([0, 1])

respuesta: datos[escenario][1]
tipo: mc
opciones_explicitas: ["Es igual en ambos tipos de lazo", "El lazo cerrado es más robusto ante perturbaciones", "El lazo abierto es más robusto ante perturbaciones", "No hay diferencia en la respuesta"]

enunciado: "Considerando un sistema que enfrenta una perturbación externa imprevista, ¿cuál es la principal diferencia en su comportamiento según el escenario?"

pasos:
  - "Identificar si el sistema tiene sensor de salida (lazo cerrado) o solo actuador (lazo abierto)."
  - "Evaluar la capacidad de corrección ante el cambio en la salida."

explicacion: |
  El lazo cerrado detecta la perturbación a través del sensor y ajusta la entrada, mientras que el lazo abierto no puede reaccionar ante cambios no modelados en el proceso.
```

### 4 — Componentes de un lazo de control
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

### 5 — Realimentación Positiva vs Negativa
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "avanzado"
  tags: ["estabilidad", "ganancia"]

variables:
  tipo_lazo: uno_de([0, 1])

respuesta: tabla[tipo_lazo][1]
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