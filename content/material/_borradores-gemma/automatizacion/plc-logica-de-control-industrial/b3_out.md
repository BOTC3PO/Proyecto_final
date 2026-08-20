### 1 — Ciclo de Scan del PLC
```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_scan"
  nivel: "intermedio"
  tags: ["plc", "ciclo_scan", "procesos"]

variables:
  pasos_ciclo: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]

respuesta: pasos_ciclo
tipo: ordenar

enunciado: "Para que un PLC funcione correctamente, debe seguir un ciclo repetitivo de ejecución. Ordene las etapas del ciclo de scan en el orden correcto:"

pasos:
  - "El PLC lee el estado de los sensores físicos."
  - "El procesador ejecuta la lógica de las instrucciones programadas."
  - "El PLC actualiza el estado de los actuadores según la lógica procesada."

explicacion: |
  El ciclo de scan es fundamental: primero se capturan las entradas, luego se procesa la lógica en la CPU y finalmente se escriben las salidas. Si este orden se altera, el control no sería determinista.
```

### 2 — Diferencia entre Entrada Digital y Analógica
```
metadata:
  materia: "automatizacion"
  tema: "entradas_discretas_vs_analogicas"
  nivel: "basico"
  tags: ["sensores", "entradas", "plc"]

respuesta: "analógica"
tipo: completar
respuestas_validas: ["analógica"]

enunciado: "Un sensor de proximidad que solo indica si un objeto está presente o no es una entrada digital, mientras que un sensor de temperatura que varía su voltaje según el calor es una entrada ___."

explicacion: |
  Las entradas digitales son binarias (0 o 1 / encendido o apagado), mientras que las analógicas representan una magnitud continua dentro de un rango (ej. 4-20mA o 0-10V).
```

### 3 — El concepto de "Scan Time" y la velocidad de proceso
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

### 4 — Programación de Salidas en Lógica de Contactos
```
metadata:
  materia: "automatizacion"
  tema: "lógica_de_salidas"
  nivel: "intermedio"
  tags: ["ladder", "lógica", "salidas"]

variables:
  escenario: [
    ["Si la condición A y la condición B son verdaderas, la salida Q1 se activa.", "Q1"],
    ["Si la condición A es verdadera y la condición B es falsa, la salida Q1 se mantiene apagada.", "Q1"]
  ]
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Q1", "Q0", "Q2", "Ninguna"]

enunciado: "Analice el escenario: {escenario[idx][0]}"

explicacion: |
  En la lógica de contactos (Ladder), las condiciones en serie actúan como una conexión AND. Si todas las condiciones se cumplen, la energía llega a la bobina de salida.
```

### 5 — Memoria de Marcadores (Flags)
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