### 1 — El Monopolio Comercial
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["monopolio", "espana", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas: ["monopolio"]

enunciado: "El sistema impuesto por la corona española que obligaba a las colonias a comerciar exclusivamente con la metrópoli se denominaba ________."

explicacion: |
  El monopolio comercial impedía que Buenos Aires comerciara con otras potencias (como Gran Bretaña), limitando el crecimiento de la élite criolla.
```

### 2 — Tensiones en el Puerto
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["puerto", "aduana", "impuestos"]

variables:
  escenario: uno_de([["Monopolio Español", "Libre Comercio"], ["Restricción", "Apertura"]])
  respuesta_correcta: uno_de(["Monopolio Español", "Libre Comercio"])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Monopolio Español", "Libre Comercio"]

enunciado: "Si un comerciante de Buenos Aires desea vender sus productos directamente a Inglaterra sin pasar por España, se enfrenta a la prohibición del sistema de ________."

explicacion: |
  La imposición del monopolio generaba un enorme descontento en los comerciantes locales, quienes veían perder oportunidades de lucro con el libre comercio.
```

### 3 — Causas de la Revolución
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["causas", "revolucion", "economia"]

respuesta: "Libre Comercio"
tipo: mc
opciones_explicitas: ["Libre Comercio", "Proteccionismo Español", "Aumento de la Minería", "Unión con Portugal"]

enunciado: "La principal demanda económica de la élite criolla de Buenos Aires que alimentó el descontento hacia el Virreinato fue la instauración del:"

explicacion: |
  La apertura de los puertos al libre comercio era la aspiración de los sectores comerciales que buscaban eliminar los altos costos y la exclusividad española.
```

### 4 — El Proceso de Descontento
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["secuencia", "tensiones", "revolucion"]

respuesta: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]
tipo: ordenar
opciones_explicitas: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]

enunciado: "Ordena cronológicamente los factores y consecuencias que explican la crisis del sistema colonial en el Río de la Plata:"

explicacion: |
  El monopolio fomentó el contrabando como vía de escape; la presión por el libre comercio aumentó con las invasiones inglesas y la crisis de la corona, culminando en la Revolución.
```

### 5 — Impacto de las Invasiones Inglesas
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["invasiones_inglesas", "comercio"]

variables:
  datos: [["Inglesas", "Libre Comercio"], ["Españolas", "Monopolio"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Libre Comercio", "Monopolio"]

enunciado: "Las invasiones inglesas demostraron la vulnerabilidad de España y abrieron la posibilidad de un sistema de ________ en el puerto de Buenos Aires."

explicacion: |
  Al ver que Gran Bretaña podía desembarcar en el Río de la Plata, los criollos comprendieron que el monopolio español ya no era sostenible ni seguro.
```