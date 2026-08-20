### 1 — Control de temperatura en un horno
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "intermedio"
  tags: ["control", "sensor", "setpoint"]

variables:
  escenario: uno_de([["El horno debe estar a 200°C, pero el sensor marca 180°C", "aumentar", "reducir"], ["El horno debe estar a 200°C, pero el sensor marca 220°C", "reducir", "aumentar"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["aumentar", "reducir", "mantener"]

enunciado: "En un sistema de control de temperatura, si {escenario[idx][0]}, la acción de control debe ser: ___"

explicacion: |
  La realimentación compara la variable de proceso (salida) con el setpoint (referencia). Si hay un error, el controlador actúa para minimizarlo.
```

### 2 — Componentes de un lazo cerrado
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

### 3 — Lógica de la señal de error
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

### 4 — Flujo de información en el lazo
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

### 5 — Estabilidad en sistemas con exceso de ganancia
```
metadata:
  materia: "automatizacion"
  tema: "realimentacion_feedback"
  nivel: "avanzado"
  tags: ["estabilidad", "oscilacion"]

variables:
  caso: uno_de([["un sistema con ganancia excesiva", "inestable", "estable"], ["un sistema con ganancia muy baja", "estable", "inestable"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["estable", "inestable"]

enunciado: "Si analizamos {caso[idx][0]}, el comportamiento resultante del sistema tiende a ser: ___"

explicacion: |
  Un exceso de ganancia en un lazo de realimentación puede provocar que las correcciones sean demasiado grandes, causando oscilaciones que llevan a la inestabilidad.
```