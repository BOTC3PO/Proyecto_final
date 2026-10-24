### 1 — Diferencia fundamental
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

### 2 — Clasificación de sistemas
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "basico"
  tags: ["lazo_abierto", "lazo_cerrado"]

variables:
  es_lazo_cerrado: true

respuesta: es_lazo_cerrado
tipo: vf

enunciado: "Si un sistema de control utiliza un sensor para medir la posición actual y compararla con la posición deseada para corregir el error, ¿se trata de un sistema de lazo cerrado?"

explicacion: |
  Correcto. La medición constante de la variable de salida para ajustar la entrada es la definición de un sistema de lazo cerrado o servomecanismo.
```

### 3 — Componentes del lazo
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos"
  nivel: "intermedio"
  tags: ["componentes", "sensores"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["sensor de posición", "error"], ["encoder", "desviación"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["datos[escenario_idx][0]", "datos[escenario_idx][1]", "señal de mando", "actuador"]

enunciado: "En un servomecanismo, el dispositivo que detecta la diferencia entre la posición real y la deseada permite calcular el ___."

explicacion: |
  El sensor (como un encoder) proporciona la información necesaria para que el controlador determine el error o desviación existente.
```

### 4 — Flujo de información
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

### 5 — Comparación de precisión
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
opciones_explicitas: ["valores[caso_error][0]", "valores[caso_error][1]", "nulo", "infinito"]

enunciado: "Si un servomecanismo tiene un error de posición de {valores[caso_error][0]} unidades, su nivel de precisión se considera ___ en comparación con un sistema sin realimentación."

explicacion: |
  Un error de {valores[caso_error][0]} indica una precisión {valores[caso_error][1]} en el contexto de este ejercicio de comparación.
```