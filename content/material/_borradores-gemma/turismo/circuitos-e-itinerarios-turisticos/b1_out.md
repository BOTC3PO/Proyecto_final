### 1 — Definición de itinerario
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["conceptos_clave", "planificacion"]

respuesta: "itinerario"
tipo: completar
respuestas_validas: ["itinerario"]

enunciado: "El conjunto de lugares, actividades y servicios que se planifican para ser visitados en un orden determinado durante un viaje se denomina ___."

explicacion: |
  El itinerario es la hoja de ruta que organiza la secuencia de paradas, tiempos y actividades de un viaje.
```

### 2 — Diferencia entre circuito y tour
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  es_circuito: falso

respuesta: es_circuito
tipo: vf

enunciado: "Un circuito turístico se caracteriza por tener un recorrido cerrado que inicia y termina en el mismo punto, a diferencia de un tour que puede ser lineal."

explicacion: |
  En la terminología técnica, el circuito suele implicar un retorno al punto de origen, mientras que el tour puede ser de punto A a punto B.
```

### 3 — Elementos de un diseño de recorrido
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["diseño", "logistica"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["itinerario", "secuencia de paradas", "planificación temporal"],
    ["atractivo", "punto de interés", "recurso turístico"],
    ["transporte", "medio de desplazamiento", "logística de movilidad"]
  ]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["secuencia de paradas", "punto de interés", "logística de movilidad"]

enunciado: "En el diseño de un circuito, el elemento que define el orden cronológico de las visitas es el {datos[idx][1]}."

explicacion: |
  El diseño de un itinerario requiere organizar la secuencia de paradas para optimizar los tiempos de traslado.
```

### 4 — Fases del diseño de un itinerario
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["metodologia", "pasos"]

respuesta: ["Inventario de recursos", "Selección de atractivos", "Diseño de la ruta", "Cálculo de tiempos"]
tipo: ordenar
opciones_explicitas: ["Inventario de recursos", "Selección de atractivos", "Diseño de la ruta", "Cálculo de tiempos"]

enunciado: "Ordene cronológicamente las etapas lógicas para el diseño de un nuevo circuito turístico:"

explicacion: |
  Primero se debe conocer qué recursos existen (inventario), luego elegir cuáles usar (selección), trazar el camino (diseño) y finalmente verificar la viabilidad temporal (cálculo de tiempos).
```

### 5 — Capacidad de carga en itinerarios
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad"]

variables:
  es_sostenible: verdadero

respuesta: es_sostenible
tipo: vf

enunciado: "Un itinerario que respeta la capacidad de carga de un destino para evitar la degradación del entorno se considera un diseño sostenible."

explicacion: |
  La sostenibilidad en el diseño de itinerarios es fundamental para asegurar que el flujo de turistas no exceda la capacidad de los atractivos.
```