### 1 — Estado de una bomba en un sistema de llenado
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["plc", "logica_booleana", "sensores"]

variables:
  escenario: uno_de([["Nivel_Bajo", "encender"], ["Nivel_Alto", "apagar"], ["Nivel_Medio", "mantener"]])
  idx: uno_de([0, 1, 2])
  estado_actual: escenario[idx][0]
  accion_plc: escenario[idx][1]

respuesta: accion_plc
tipo: mc
opciones_explicitas: ["encender", "apagar", "mantener", "detener"]

enunciado: "En un sistema de control de nivel, si el sensor detecta un estado de {estado_actual}, el PLC debe ejecutar la siguiente acción: ___"

explicacion: |
  El PLC recibe la señal del sensor de nivel y, según la lógica programada, decide la salida hacia el actuador. En este caso, para {estado_actual}, la salida es {accion_plc}.
```

### 2 — Lógica de seguridad: Parada de Emergencia
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["seguridad", "entradas_digitales"]

variables:
  sensor_emergencia: uno_de([true, false])
  estado_seguridad: sensor_emergencia == true

respuesta: estado_seguridad
tipo: vf

enunciado: "Si el botón de parada de emergencia es presionado, el contacto de seguridad se abre (el valor lógico de la entrada al PLC pasa a ser 'falso'). ¿Está la condición de 'Seguridad Activa' (entrada = true) cumpliéndose en este momento?"

explicacion: |
  En sistemas industriales, la parada de emergencia suele ser un contacto normalmente cerrado (NC). Al presionarlo, el circuito se abre y la entrada digital al PLC pasa a ser 'falso'.
```

### 3 — Secuencia de arranque de una cinta transportadora
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["secuencia", "pasos_lógicos"]

respuesta: ["Motor_Principal", "Cinta_Transportadora", "Sensor_Presencia_Producto"]
tipo: ordenar
opciones_explicitas: ["Motor_Principal", "Cinta_Transportadora", "Sensor_Presencia_Producto"]

enunciado: "Ordene la secuencia lógica de activación para un proceso de transporte automatizado: primero se energiza el motor, luego se activa la cinta y finalmente se verifica la presencia de producto."

explicacion: |
  Un proceso automatizado requiere una secuencia lógica para evitar daños mecánicos o fallos de proceso.
```

### 4 — Cálculo de tiempo de llenado
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "avanzado"
  tags: ["calculo", "temporizadores"]

variables:
  caudal: uno_de([10, 20, 50])
  volumen: uno_de([100, 200, 500])
  idx: uno_de([0, 1, 2])
  v_real: volumen[idx][0]
  c_real: caudal[idx][0]
  tiempo_seg: v_real / c_real

respuesta: tiempo_seg
tipo: input
tolerancia_abs: 0.1

enunciado: "Un PLC controla una válvula de llenado con un caudal constante de {c_real} L/min. Si el tanque debe llenarse hasta alcanzar un volumen de {v_real} L, ¿cuántos minutos tardará el proceso?"

explicacion: |
  El tiempo se calcula mediante la relación entre el volumen objetivo y el caudal: T = V / Q. En este caso, {tiempo_seg} minutos.
```

### 5 — Lógica de salida según sensor de temperatura
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["control_temperatura", "salidas_digitales"]

variables:
  temp_actual: uno_de([45, 85, 110])
  idx: uno_de([0, 1, 2])
  t_real: temp_actual[idx][0]
  status: temp_actual[idx][0] > 100

respuesta: status
tipo: completar
respuestas_validas: [true, false]

enunciado: "Si el sensor de temperatura marca {t_real} °C y la condición de alarma es 'Temperatura > 100', el valor lógico de la salida de alarma es ___"

explicacion: |
  El PLC evalúa la expresión lógica. Como {t_real} es mayor o menor a 100, el resultado booleano es {status}.
```