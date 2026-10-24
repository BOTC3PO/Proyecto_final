### 1 — Circuito vs. Itinerario
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["conceptos_basicos", "diseño_de_recorridos"]

respuesta: "itinerario"
tipo: "mc"
opciones_explicitas: ["circuito", "itinerario", "paquete_turistico"]

enunciado: "Mientras que un circuito es un recorrido cerrado que une varios puntos de interés, un ___ se define como la descripción detallada de la secuencia de actividades y tiempos de un viaje."

explicacion: |
  El circuito es la estructura espacial/geográfica de la ruta, mientras que el itinerario es la organización temporal y de actividades de ese recorrido.
```

### 2 — Característica del Circuito
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["definiciones"]

variables:
  es_cerrado: falso

respuesta: es_cerrado
tipo: "vf"

enunciado: "Un circuito turístico se caracteriza por ser un recorrido con un inicio y un fin determinados que permite volver al punto de partida o conectar puntos de forma secuencial."

explicacion: |
  Correcto. La naturaleza cíclica o de conexión lógica de puntos es lo que define la estructura de un circuito.
```

### 3 — Elementos del Diseño
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["diseño", "planificacion"]

variables:
  escenario: uno_de([
    ["Atractivo natural", "Transporte", "Alojamiento"],
    ["Museo", "Guía", "Restaurante"]
  ])

respuesta: escenario[idx][1]
tipo: "completar"
respuestas_validas: ["Transporte", "Guía"]

enunciado: "Para diseñar un circuito, es fundamental considerar el {escenario[idx][0]} y el {escenario[idx][1]} para garantizar la movilidad del turista."

explicacion: |
  El diseño de un itinerario requiere la coordinación de los recursos logísticos (transporte/guía) con los puntos de interés.
```

### 4 — Secuencia de Planificación
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["metodologia", "pasos"]

respuesta: ["Identificación de atractivos", "Establecimiento de rutas", "Cálculo de tiempos", "Asignación de servicios"]
tipo: "ordenar"
opciones_explicitas: ["Identificación de atractivos", "Establecimiento de rutas", "Cálculo de tiempos", "Asignación de servicios"]

enunciado: "Ordene los pasos lógicos para el diseño de un nuevo circuito turístico:"

explicacion: |
  Primero se define el qué (atractivos), luego el cómo (rutas), después el cuánto (tiempos) y finalmente el con qué (servicios/logística).
```

### 5 — Diferencia en la Flexibilidad
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["flexibilidad", "gestion"]

variables:
  caso: uno_de([
    ["itinerario_flexible", "itinerario_fijo"],
    ["itinerario_fijo", "itinerario_flexible"]
  ])
  es_flexible: falso

respuesta: es_flexible
tipo: "vf"

enunciado: "En un {caso[idx][0]}, la secuencia de actividades puede modificarse según las necesidades del grupo sin perder la esencia del recorrido, a diferencia de un {caso[idx][1]}."

explicacion: |
  La flexibilidad es la capacidad de adaptación de un itinerario frente a imprevistos o preferencias, algo que no posee un itinerario rígido o fijo.
```