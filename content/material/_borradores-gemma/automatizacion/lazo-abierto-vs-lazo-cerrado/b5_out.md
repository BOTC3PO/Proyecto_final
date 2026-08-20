### 1 — Identificación de lazo
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "basico"
  tags: ["control", "realimentacion"]

variables:
  escenarios: [["un tostador de pan que funciona por tiempo", "lazo abierto"], ["un aire acondicionado con termostato", "lazo cerrado"]]
  idx: uno_de([0,1])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["lazo abierto", "lazo cerrado"]

enunciado: "Si el sistema descrito es {escenarios[idx][0]}, ¿qué tipo de control está utilizando?"

explicacion: |
  La diferencia fundamental es la realimentación. Un tostador solo mide el tiempo (lazo abierto), mientras que un aire acondicionado mide la temperatura real para ajustar su salida (lazo cerrado).
```

### 2 — El rol de la variable de error
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "intermedio"
  tags: ["error", "control"]

variables:
  casos: [["lazo abierto", falso], ["lazo cerrado", verdadero]]
  idx: uno_de([0,1])

respuesta: casos[idx][1]
tipo: vf

enunciado: "En un sistema de {casos[idx][0]}, el controlador puede calcular la diferencia entre el valor deseado (setpoint) y la salida real (error) para ajustar la acción de control."

explicacion: |
  En el lazo cerrado, el sensor permite conocer la salida real, permitiendo calcular el error. En el lazo abierto, el sistema no sabe si la salida es la correcta.
```

### 3 — Componentes de un sistema cerrado
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

### 4 — Secuencia de un lazo cerrado
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

### 5 — Análisis de perturbaciones
```
metadata:
  materia: "automatizacion"
  tema: "lazo_abierto_vs_lazo_cerrado"
  nivel: "avanzado"
  tags: ["perturbaciones", "estabilidad"]

variables:
  ejemplos: [["Un sistema de lazo abierto es ___ ante perturbaciones externas.", "más"], ["Un sistema de lazo cerrado es ___ ante perturbaciones externas.", "menos"]]
  idx: uno_de([0,1])

respuesta: ejemplos[idx][1]
tipo: mc
opciones_explicitas: ["más", "menos"]

enunciado: "Considerando la capacidad de compensar cambios no deseados en el entorno, un sistema de {ejemplos[idx][0]} es ___ capaz de corregir su error automáticamente."

explicacion: |
  El lazo cerrado es más robusto ante perturbaciones porque detecta el desvío y actúa para corregirlo. El lazo abierto simplemente sigue su programa sin importar el resultado.
```