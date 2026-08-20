### 1 — El desafío de la logística
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["logistica", "diseño_de_recorridos"]

variables:
  escenario: uno_de([["Circuito de los Lagos", "Bariloche-Villa La Angostura"], ["Ruta del Vino", "Mendoza-San Juan"], ["Circuito de las Cataratas", "Puerto Iguazú-Iguazú"]])
  idx: uno_de([0,1,2])

opciones_explicitas: ["Optimización de tiempos", "Reducción de costos", "Aumento de la experiencia del cliente"]

enunciado: "Para diseñar el {escenario[idx][0]}, el agente debe priorizar la {escenario[idx][1]} para asegurar que el itinerario sea viable y fluido."

respuesta: "Optimización de tiempos"
tipo: mc

explicacion: |
  En el diseño de circuitos, la gestión de los tiempos de traslado es el factor crítico para que el itinerario sea funcional.
```

### 2 — Elementos de un itinerario
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["conceptos", "diseño"]

respuesta: "fijo"
tipo: vf

enunciado: "¿Es el 'tiempo de pernocte' un componente esencial en la planificación de un itinerario de varios días?"

explicacion: |
  Un itinerario debe contemplar no solo los traslados y visitas, sino también los tiempos de descanso y alojamiento.
```

### 3 — Secuencia de planificación
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Selección de atractivos", "Diseño de rutas de transporte", "Cálculo de costos y tiempos", "Armado del itinerario final"]

respuesta: ["Selección de atractivos", "Diseño de rutas de transporte", "Cálculo de costos y tiempos", "Armado del itinerario final"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas lógicas para el diseño de un nuevo circuito turístico:"

explicacion: |
  Primero se define qué se va a visitar, luego cómo se llega, después cuánto cuesta y finalmente se presenta el producto.
```

### 4 — El factor de la modularidad
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["estrategia", "producto"]

variables:
  caso: uno_de([["itinerario_cerrado", "No permite cambios"], ["itinerario_abierto", "Permite flexibilidad"]])
  idx: uno_de([0,1])

opciones_explicitas: ["cerrado", "abierto"]

enunciado: "Un circuito diseñado con un esquema {caso[idx][0]} se caracteriza por ser ___."

respuesta: "abierto"
tipo: completar

respuestas_validas: ["abierto"]

explicacion: |
  En el caso de un itinerario abierto, la flexibilidad es la característica principal que permite al turista modificar partes del recorrido.
```

### 5 — Análisis de la densidad de puntos
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["análisis", "distancias"]

variables:
  datos: [["30 km", "15 km", "100 km"], ["2 horas", "45 min", "5 horas"], ["50 USD", "20 USD", "200 USD"]]
  idx: uno_de([0,1,2])

opciones_explicitas: ["Distancia", "Tiempo", "Costo"]

enunciado: "Si un diseñador está evaluando la variable de {datos[idx][0]}, está analizando la ___ entre los puntos del circuito."

respuesta: "Distancia"
tipo: mc

explicacion: |
  La distancia física es una de las variables fundamentales para determinar la viabilidad de un circuito.
```