### 1 — El ciclo de escaneo del PLC
```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_escaneo_plc"
  nivel: "basico"
  tags: ["plc", "ciclo_de_escaneo", "control"]

variables:
  fases: ["Lectura de entradas", "Ejecución de programa", "Escritura de salidas"]

respuesta: "Lectura de entradas"
tipo: completar
respuestas_validas: ["Lectura de entradas", "Ejecución de programa", "Escritura de salidas"]

enunciado: "En un PLC, el primer paso del ciclo de escaneo (scan cycle) consiste en la ___."

explicacion: |
  El ciclo de escaneo es el proceso repetitivo del PLC que consta de tres fases principales: 1) Lectura de estados de entradas, 2) Ejecución de la lógica del programa y 3) Actualización de las salidas físicas.
```

### 2 — Lógica de enclavamiento (Interlock)
```
metadata:
  materia: "automatizacion"
  tema: "logica_de_enclavamiento"
  nivel: "intermedio"
  tags: ["seguridad", "logica_digital", "plc"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Motor_A_ON", "Motor_A_OFF"],
    ["Motor_B_ON", "Motor_B_OFF"]
  ]
  estados: ["ON", "OFF"]

respuesta: "Motor_B_OFF"
tipo: mc
opciones_explicitas: ["Motor_A_ON", "Motor_A_OFF", "Motor_B_ON", "Motor_B_OFF"]

enunciado: "Se tiene un sistema de enclavamiento eléctrico para evitar que dos motores funcionen simultáneamente. Si el motor {escenarios[escenario_idx][0]} está activo, el PLC debe asegurar que el motor {escenarios[escenario_idx][1]} se mantenga en estado ___."

explicacion: |
  El enclavamiento (interlock) es una medida de seguridad donde la activación de una salida impide la activación de otra, garantizando que procesos incompatibles no ocurran al mismo tiempo.
```

### 3 — Resolución de falla en cinta transportadora
```
metadata:
  materia: "automatizacion"
  tema: "diagnostico_de_fallas_plc"
  tema_secundario: "sensores"
  nivel: "avanzado"
  tags: ["mantenimiento", "sensores", "diagnostico"]

variables:
  falla_tipo: uno_de([0, 1])
  fallas: [
    ["El sensor no detecta el objeto (entrada siempre 0)", "El sensor detecta presencia constante (entrada siempre 1)"]
  ]
  causa: ["Falla de alimentación", "Objeto bloqueado en el sensor"]

respuesta: "Falla de alimentación"
tipo: mc
opciones_explicitas: ["Falla de alimentación", "Objeto bloqueado en el sensor", "Error de programación", "Salida de motor quemada"]

enunciado: "Un operario reporta que la cinta transportadora no arranca. El PLC muestra en su diagnóstico que el sensor de presencia de caja está siempre en estado 0, incluso cuando hay cajas pasando. Si la causa es {causas[falla_tipo][0]}, ¿cuál es el diagnóstico más probable?"

pasos:
  - "Verificar voltaje en la alimentación del sensor."
  - "Comprobar si el LED del sensor se enciende al pasar un objeto."
  - "Revisar la continuidad del cableado hacia la entrada del PLC."

explicacion: |
  Si un sensor que debería cambiar de estado (0 a 1) permanece permanentemente en 0 a pesar de la presencia de un objeto, es probable que no esté recibiendo energía o que el cable de señal esté cortado.
```

### 4 — Secuencia de llenado de tanque
```
metadata:
  materia: "automatizacion"
  tema: "secuencia_de_operacion"
  nivel: "intermedio"
  tags: ["secuencia", "proceso", "logica"]

variables:
  pasos_llenado: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]

respuesta: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]
tipo: ordenar
opciones_explicitas: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado", "Limpiar tanque"]

enunciado: "Ordene la secuencia lógica de control para un proceso de llenado automático de un tanque mediante un sensor de nivel alto:"

explicacion: |
  Para un proceso de llenado seguro, primero se debe permitir la entrada del fluido, esperar la señal del sensor de nivel para detener el flujo y, finalmente, dar por concluida la tarea.
```

### 5 — Lógica de salida de un sensor de proximidad
```
metadata:
  materia: "automatizacion"
  tema: "sensores_industriales"
  nivel: "basico"
  tags: ["sensores", "digital", "booleano"]

respuesta: falso
tipo: vf

enunciado: "Si un sensor inductivo de tipo PNP está configurado para enviar una señal de 24V (HIGH) cuando detecta metal, y el PLC recibe una señal de 0V (LOW), ¿es verdadero que el sensor ha detectado un objeto metálico?"

explicacion: |
  En un sensor PNP, la detección se traduce en la presencia de voltaje en la línea de señal. Si la señal es de 0V (LOW), el sensor no está detectando el objeto o está en estado de reposo.
```