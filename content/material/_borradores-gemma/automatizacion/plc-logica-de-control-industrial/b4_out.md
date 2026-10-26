### 1 — PLC vs Microcontrolador
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

### 2 — Ciclo de Scan del PLC
```
metadata:
  materia: "automatizacion"
  tema: "ciclo_de_scan"
  nivel: "intermedio"
  tags: ["funcionamiento", "software"]

variables:
  fases: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]

respuesta: ["Lectura de entradas", "Ejecución de programa", "Actualización de salidas"]
tipo: ordenar

enunciado: "Un PLC opera mediante un ciclo repetitivo de tres fases principales. Ordene el proceso de ejecución estándar:"

pasos:
  - "El PLC lee el estado de los sensores físicos."
  - "El procesador resuelve la lógica de la red de control."
  - "El PLC actualiza el estado de los actuadores físicos."

explicacion: |
  El ciclo de scan es fundamental: primero se captura la imagen de entradas, luego se procesa la lógica y finalmente se escriben los resultados en las salidas.
```

### 3 — Lógica de Control: PLC vs Relés
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

### 4 — Salidas del PLC
```
metadata:
  materia: "automatizacion"
  tema: "tipos_de_salida"
  nivel: "intermedio"
  tags: ["hardware", "electrica"]

variables:
  tipo_salida_idx: uno_de([0, 1])
  tipos: [["transistor", "DC"], ["relé", "AC/DC"]]

respuesta: "transistor"
tipo: mc
opciones_explicitas: ["transistor", "relé", "luz"]

enunciado: "Si necesitamos una salida de alta velocidad para conmutar señales de muy baja potencia (como para un sensor de alta frecuencia), el tipo de salida preferido es el de tipo {tipo_salida_idx[0]}."

explicacion: |
  Las salidas a transistor son mucho más rápidas que las de relé, pero tienen menos capacidad de corriente. Los relés son más lentos pero manejan más carga.
```

### 5 — Estructura de un Programa PLC
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
respuestas_validas: ["Ladder", "Grafcet"]

enunciado: "El lenguaje de programación más utilizado en la industria para representar la lógica de contactos eléctricos en un PLC es el lenguaje ___."

explicacion: |
  El lenguaje Ladder (escalera) es el estándar debido a que su representación visual es muy similar a los esquemas de diagramas de contactos eléctricos tradicionales.
```