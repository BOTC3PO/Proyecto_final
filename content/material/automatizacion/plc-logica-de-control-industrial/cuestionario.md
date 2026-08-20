# Automatizacion — Plc logica de control industrial (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de PLC

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["definicion", "hardware"]

respuesta: "controlador_logico_programable"
tipo: completar
respuestas_validas:
  - "controlador_logico_programable"

enunciado: "El dispositivo electrónico diseñado para controlar procesos industriales mediante la ejecución de una lógica programada se denomina ___."

explicacion: |
  El PLC (Programmable Logic Controller) es la unidad central de control en la automatización industrial, capaz de operar en entornos hostiles.
```

### 2 — Componentes de un sistema PLC

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["componentes", "hardware"]

respuesta: "Memoria/CPU/Fuente"
tipo: mc
opciones_explicitas: ["Entradas/Salidas (I/O)", "Memoria/CPU/Fuente", "Pantalla/Teclado", "Sensores/Actuadores"]

enunciado: "De acuerdo a la arquitectura estándar, el elemento que procesa la información y ejecuta la lógica es la:"

explicacion: |
  La CPU es el cerebro del PLC que procesa la lógica, mientras que las I/O permiten la comunicación con el mundo físico.
```

### 3 — Ciclo de Scan del PLC

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["ciclo_scan", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿El ciclo de scan de un PLC consiste en leer las entradas, ejecutar la lógica del programa y actualizar las salidas de forma cíclica?"

explicacion: |
  El ciclo de scan es un proceso repetitivo y determinístico que garantiza que el PLC responda a los cambios en el proceso de manera constante.
```

### 4 — Flujo de señales en la planta

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["flujo_señal", "sensores_actuadores"]

respuesta_orden: ["Sensores", "PLC", "Actuadores"]
tipo: ordenar

opciones_explicitas: ["Sensores", "PLC", "Actuadores"]

enunciado: "Ordene el flujo lógico de información y acción en un sistema automatizado, desde la captura de la variable física hasta la ejecución de la acción."

explicacion: |
  Los sensores captan la señal (entrada), el PLC procesa la lógica y los actuadores ejecutan la acción (salida).
```

### 5 — Tipos de entradas/salidas

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["io", "digital_analogo"]

respuesta: "Analógica"
tipo: mc
opciones_explicitas: ["Digital", "Analógica", "Binaria", "Proporcional"]

enunciado: "Si un sensor envía una señal de 4-20 mA para representar una temperatura, estamos ante una entrada de tipo:"

explicacion: |
  Las señales digitales son discretas (encendido/apagado), mientras que las analógicas representan un rango continuo de valores.
```

### 6 — El ciclo de escaneo del PLC

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
respuestas_validas:
  - "Lectura de entradas"
  - "Ejecución de programa"
  - "Escritura de salidas"

enunciado: "En un PLC, el primer paso del ciclo de escaneo (scan cycle) consiste en la ___."

explicacion: |
  El ciclo de escaneo es el proceso repetitivo del PLC que consta de tres fases principales: 1) Lectura de estados de entradas, 2) Ejecución de la lógica del programa y 3) Actualización de las salidas físicas.
```

### 7 — Lógica de enclavamiento (Interlock)

```
metadata:
  materia: "automatizacion"
  tema: "logica_de_enclavamiento"
  nivel: "intermedio"
  tags: ["seguridad", "logica_digital", "plc"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Motor_A_ON", "Motor_A_OFF"], ["Motor_B_ON", "Motor_B_OFF"]]
  estados: ["ON", "OFF"]

respuesta: "Motor_B_OFF"
tipo: mc
opciones_explicitas: ["Motor_A_ON", "Motor_A_OFF", "Motor_B_ON", "Motor_B_OFF"]

enunciado: "Se tiene un sistema de enclavamiento eléctrico para evitar que dos motores funcionen simultáneamente. Si el motor {escenarios[escenario_idx][0]} está activo, el PLC debe asegurar que el motor {escenarios[escenario_idx][1]} se mantenga en estado ___."

explicacion: |
  El enclavamiento (interlock) es una medida de seguridad donde la activación de una salida impide la activación de otra, garantizando que procesos incompatibles no ocurran al mismo tiempo.
```

### 8 — Resolución de falla en cinta transportadora

```
metadata:
  materia: "automatizacion"
  tema: "diagnostico_de_fallas_plc"
  tema_secundario: "sensores"
  nivel: "avanzado"
  tags: ["mantenimiento", "sensores", "diagnostico"]

respuesta: "Falla de alimentación"
tipo: mc
opciones_explicitas: ["Falla de alimentación", "Objeto bloqueado en el sensor", "Error de programación", "Salida de motor quemada"]

enunciado: "Un operario reporta que la cinta transportadora no arranca. El PLC muestra en su diagnóstico que el sensor de presencia de caja está siempre en estado 0, incluso cuando hay cajas pasando. ¿Cuál es el diagnóstico más probable?"

pasos:
  - "Verificar voltaje en la alimentación del sensor."
  - "Comprobar si el LED del sensor se enciende al pasar un objeto."
  - "Revisar la continuidad del cableado hacia la entrada del PLC."

explicacion: |
  Si un sensor que debería cambiar de estado (0 a 1) permanece permanentemente en 0 a pesar de la presencia de un objeto, es probable que no esté recibiendo energía o que el cable de señal esté cortado.
```

### 9 — Secuencia de llenado de tanque

```
metadata:
  materia: "automatizacion"
  tema: "secuencia_de_operacion"
  nivel: "intermedio"
  tags: ["secuencia", "proceso", "logica"]

variables:
  pasos_llenado: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]

respuesta_orden: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]
tipo: ordenar
opciones_explicitas: ["Abrir válvula de llenado", "Esperar nivel alto", "Cerrar válvula de llenado", "Activar alarma de proceso terminado"]

enunciado: "Ordene la secuencia lógica de control para un proceso de llenado automático de un tanque mediante un sensor de nivel alto:"

explicacion: |
  Para un proceso de llenado seguro, primero se debe permitir la entrada del fluido, esperar la señal del sensor de nivel para detener el flujo y, finalmente, dar por concluida la tarea.
```

### 10 — Lógica de salida de un sensor de proximidad

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

### 11 — Ciclo de Scan del PLC

```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_scan"
  nivel: "intermedio"
  tags: ["plc", "ciclo_scan", "procesos"]

variables:
  pasos_ciclo: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]

respuesta_orden: pasos_ciclo
tipo: ordenar

enunciado: "Para que un PLC funcione correctamente, debe seguir un ciclo repetitivo de ejecución. Ordene las etapas del ciclo de scan en el orden correcto:"

pasos:
  - "El PLC lee el estado de los sensores físicos."
  - "El procesador ejecuta la lógica de las instrucciones programadas."
  - "El PLC actualiza el estado de los actuadores según la lógica procesada."

explicacion: |
  El ciclo de scan es fundamental: primero se capturan las entradas, luego se procesa la lógica en la CPU y finalmente se escriben las salidas. Si este orden se altera, el control no sería determinista.
opciones_explicitas: pasos_ciclo
```

### 12 — Diferencia entre Entrada Digital y Analógica

```
metadata:
  materia: "automatizacion"
  tema: "entradas_discretas_vs_analogicas"
  nivel: "basico"
  tags: ["sensores", "entradas", "plc"]

respuesta: "analógica"
tipo: completar
respuestas_validas:
  - "analógica"

enunciado: "Un sensor de proximidad que solo indica si un objeto está presente o no es una entrada digital, mientras que un sensor de temperatura que varía su voltaje según el calor es una entrada ___."

explicacion: |
  Las entradas digitales son binarias (0 o 1 / encendido o apagado), mientras que las analógicas representan una magnitud continua dentro de un rango (ej. 4-20mA o 0-10V).
```

### 13 — El concepto de "Scan Time" y la velocidad de proceso

```
metadata:
  materia: "automatizacion"
  tema: "scan_time_impacto"
  nivel: "avanzado"
  tags: ["rendimiento", "tiempo_ciclo"]

respuesta: falso
tipo: vf

enunciado: "Si el tiempo de ciclo (scan time) de un PLC es extremadamente lento, esto no afecta la capacidad del sistema para responder a eventos de alta velocidad en el mundo real."

explicacion: |
  Falso. Si un evento físico ocurre más rápido que el tiempo de scan del PLC, el PLC podría 'perderse' el cambio de estado de la entrada, provocando fallos en el control.
```

### 14 — Programación de Salidas en Lógica de Contactos

```
metadata:
  materia: "automatizacion"
  tema: "lógica_de_salidas"
  nivel: "intermedio"
  tags: ["ladder", "lógica", "salidas"]

variables:
  escenario: [["Si la condición A y la condición B son verdaderas, la salida Q1 se activa.", "Q1"], ["Si la condición A es verdadera y la condición B es falsa, la salida Q1 se mantiene apagada.", "Q1"]]
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Q1", "Q0", "Q2", "Ninguna"]

enunciado: "Analice el escenario: {escenario[idx][0]}"

explicacion: |
  En la lógica de contactos (Ladder), las condiciones en serie actúan como una conexión AND. Si todas las condiciones se cumplen, la energía llega a la bobina de salida.
```

### 15 — Memoria de Marcadores (Flags)

```
metadata:
  materia: "automatizacion"
  tema: "memoria_interna"
  nivel: "basico"
  tags: ["memoria", "bits", "marcadores"]

respuesta: "intermedia"
tipo: mc
opciones_explicitas: ["entrada", "salida", "intermedia"]

enunciado: "Los bits de memoria interna (también llamados marcadores o flags), que no están conectados a ninguna terminal física del PLC, se utilizan para almacenar estados lógicos dentro del programa. Su función principal es servir como variable ___."

explicacion: |
  Los marcadores permiten guardar estados intermedios de la lógica para ser usados en otras partes del programa sin necesidad de una salida física real.
```

### 16 — PLC vs Microcontrolador

```
metadata:
  materia: "automatizacion"
  tema: "diferencias_plc_microcontrolador"
  nivel: "basico"
  tags: ["hardware", "control"]

variables:
  es_industrial: verdadero

respuesta: "robustez"
tipo: mc
opciones_explicitas: ["velocidad de reloj", "robustez", "tamaño", "costo"]

enunciado: "A diferencia de un microcontrolador convencional, el PLC se distingue principalmente por su {es_industrial} ante entornos con ruido electromagnético y vibraciones."

explicacion: |
  Los PLC están diseñados con hardware industrial para resistir condiciones extremas (temperatura, humedad, ruido eléctrico), mientras que los microcontroladores requieren circuitos de protección adicionales para operar en la misma planta.
```

### 17 — Ciclo de Scan del PLC

```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_scan"
  nivel: "intermedio"
  tags: ["funcionamiento", "software"]

variables:
  fases: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]

respuesta_orden: fases
tipo: ordenar
opciones_explicitas: fases

enunciado: "Un PLC opera mediante un ciclo repetitivo de tres fases principales. Ordene el proceso de ejecución estándar:"

pasos:
  - "El PLC lee el estado de los sensores físicos."
  - "El procesador resuelve la lógica de la red de control."
  - "El PLC actualiza el estado de los actuadores físicos."

explicacion: |
  El ciclo de scan es fundamental: primero se captura la imagen de entradas, luego se procesa la lógica y finalmente se escriben los resultados en las salidas.
```

### 18 — Lógica de Control: PLC vs Relés

```
metadata:
  materia: "automatizacion"
  tema: "comparacion_logica_reles"
  nivel: "basico"
  tags: ["logica", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un sistema de control basado puramente en relés electromecánicos, un PLC permite realizar cambios en la lógica de control sin necesidad de recablear físicamente el hardware."

explicacion: |
  Esta es la principal ventaja de la automatización programable: la flexibilidad de cambiar la secuencia de operación mediante software en lugar de mover cables.
```

### 19 — Salidas del PLC

```
metadata:
  materia: "automatizacion"
  tema: "tipos_de_salida"
  nivel: "intermedio"
  tags: ["hardware", "electrica"]

respuesta: "transistor"
tipo: mc
opciones_explicitas: ["transistor", "relé", "luz"]

enunciado: "Si necesitamos una salida de alta velocidad para conmutar señales de muy baja potencia (como para un sensor de alta frecuencia), el tipo de salida preferido es el de tipo:"

explicacion: |
  Las salidas a transistor son mucho más rápidas que las de relé, pero tienen menos capacidad de corriente. Los relés son más lentos pero manejan más carga.
```

### 20 — Estructura de un Programa PLC

```
metadata:
  materia: "automatizacion"
  tema: "programacion_ladder"
  nivel: "intermedio"
  tags: ["lenguaje", "ladder"]

variables:
  es_grafico: verdadero

respuesta: "Ladder"
tipo: completar
respuestas_validas:
  - "Ladder"
  - "Grafcet"

enunciado: "El lenguaje de programación más utilizado en la industria para representar la lógica de contactos eléctricos en un PLC es el lenguaje ___."

explicacion: |
  El lenguaje Ladder (escalera) es el estándar debido a que su representación visual es muy similar a los esquemas de diagramas de contactos eléctricos tradicionales.
```

### 21 — Estado de una bomba en un sistema de llenado

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["plc", "logica_booleana", "sensores"]

variables:
  datos: [["Nivel_Bajo", "encender"], ["Nivel_Alto", "apagar"], ["Nivel_Medio", "mantener"]]
  idx: uno_de([0, 1, 2])
  estado_actual: datos[idx][0]
  accion_plc: datos[idx][1]

respuesta: accion_plc
tipo: mc
opciones_explicitas: ["encender", "apagar", "mantener", "detener"]

enunciado: "En un sistema de control de nivel, si el sensor detecta un estado de {estado_actual}, el PLC debe ejecutar la siguiente acción: ___"

explicacion: |
  El PLC recibe la señal del sensor de nivel y, según la lógica programada, decide la salida hacia el actuador. En este caso, para {estado_actual}, la salida es {accion_plc}.
```

### 22 — Lógica de seguridad: Parada de Emergencia

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["seguridad", "entradas_digitales"]

tipo: vf
respuesta: falso
enunciado: "Si el botón de parada de emergencia es presionado, el contacto de seguridad se abre (el valor lógico de la entrada al PLC pasa a ser 'falso'). ¿Está la condición de 'Seguridad Activa' cumpliéndose en este momento?"

explicacion: |
  En sistemas industriales, la parada de emergencia suele ser un contacto normalmente cerrado (NC). Al presionarlo, el circuito se abre y la entrada digital al PLC pasa a ser 'falso'.
```

### 23 — Secuencia de arranque de una cinta transportadora

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["secuencia", "pasos_lógicos"]

respuesta_orden: ["Motor_Principal", "Cinta_Transportadora", "Sensor_Presencia_Producto"]
tipo: ordenar
opciones_explicitas: ["Motor_Principal", "Cinta_Transportadora", "Sensor_Presencia_Producto"]

enunciado: "Ordene la secuencia lógica de activación para un proceso de transporte automatizado: primero se energiza el motor, luego se activa la cinta y finalmente se verifica la presencia de producto."

explicacion: |
  Un proceso automatizado requiere una secuencia lógica para evitar daños mecánicos o fallos de proceso.
```

### 24 — Cálculo de tiempo de llenado

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "avanzado"
  tags: ["calculo", "temporizadores"]

variables:
  caudal: uno_de([10, 20, 50])
  volumen: uno_de([100, 200, 500])
  tiempo_seg: volumen / caudal

respuesta: tiempo_seg
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un PLC controla una válvula de llenado con un caudal constante de {caudal} L/min. Si el tanque debe llenarse hasta alcanzar un volumen de {volumen} L, ¿cuántos minutos tardará el proceso?"

explicacion: |
  El tiempo se calcula mediante la relación entre el volumen objetivo y el caudal: T = V / Q. En este caso, {tiempo_seg} minutos.
```

### 25 — Lógica de salida según sensor de temperatura

```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["control_temperatura", "salidas_digitales"]

variables:
  temp_actual: uno_de([45, 85, 110])
  status: temp_actual > 100

tipo: vf
respuesta: status

enunciado: "Si el sensor de temperatura marca {temp_actual} °C y la condición de alarma es 'Temperatura > 100', ¿la salida de alarma se activa?"

explicacion: |
  El PLC evalúa la expresión lógica. Como {temp_actual} es mayor o menor a 100, el resultado booleano es {status}.
```
