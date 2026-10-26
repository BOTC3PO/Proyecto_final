### 1 — El concepto de itinerario vs. circuito
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["conceptos_basicos", "planificacion"]

respuesta: "itinerario"
tipo: mc
opciones_explicitas: ["circuito", "itinerario", "paquete", "excursión"]

enunciado: "Un ___ es una descripción detallada de la ruta y los tiempos de un viaje, mientras que un circuito es un conjunto de destinos conectados que se recorren de forma circular o lineal."

explicacion: |
  El itinerario es la herramienta de planificación que detalla el 'cómo' y 'cuándo' (tiempos, traslados, paradas), mientras que el circuito define la estructura de los destinos que se visitan.
```

### 2 — La falacia de la saturación de atractivos
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["diseño", "errores_comunes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["A", "B", "C", "D", "E"], ["X", "Y", "Z", "W", "V"]]
  error_tipo: ["exceso de actividades", "falta de tiempos de descanso"]
  escenario_texto: [
    "Se intenta visitar 10 museos en un solo día sin considerar los tiempos de traslado.",
    "Se programan actividades de alto impacto físico sin dejar espacios para el descanso."
  ]
  respuestas_error: ["exceso de actividades", "falta de tiempos de descanso"]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["exceso de actividades", "falta de tiempos de descanso", "falta de presupuesto", "mala elección de transporte"]

enunciado: "En el diseño de un itinerario, el error de {escenario_texto[escenario_idx]} suele llevar a la insatisfacción del cliente por el agotamiento físico o mental."

explicacion: |
  Un error común es la 'hiperactividad' en el itinerario. Un buen diseño debe equilibrar la carga de actividades con tiempos de transición y descanso para evitar el agotamiento del turista.
```

### 3 — La importancia de la lógica de transporte
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["logistica", "transporte"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto diseñar un circuito que conecte puntos geográficos basándose únicamente en la belleza de los atractivos, ignorando la eficiencia de las rutas de transporte y los tiempos de traslado?"

explicacion: |
  Falso. La logística de transporte es el eje vertebral de un circuito. Un itinerario con atractivos increíbles pero con traslados imposibles o ineficientes es un producto inviable.
```

### 4 — Secuencia lógica de diseño de un circuito
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["metodologia", "pasos_diseño"]

respuesta: ["Selección de atractivos", "Establecimiento de la ruta", "Cálculo de tiempos", "Presupuestación"]
tipo: ordenar
opciones_explicitas: ["Establecimiento de la ruta", "Selección de atractivos", "Cálculo de tiempos", "Presupuestación", "Marketing del producto"]

enunciado: "Ordene los pasos lógicos para el diseño técnico de un nuevo circuito turístico, desde la fase de ideación hasta la fase de costos."

explicacion: |
  Primero se define qué se va a ver (atractivos), luego cómo se conectan (ruta), cuánto se tarda (tiempos) y finalmente cuánto cuesta (presupuesto).
```

### 5 — El error de la "distancia lineal"
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["logistica", "tiempos"]

variables:
  distancia_km: random_float(100, 500)
  tiempo_estimado_min: 120

respuesta: "tiempo real"
tipo: completar
respuestas_validas: ["tiempo real", "distancia física"]

enunciado: "Al planificar un itinerario, un error crítico es calcular la duración de un tramo basándose en la ___ entre dos puntos, sin considerar el ___ (tráfico, clima, estado de rutas)."

explicacion: |
  La distancia física (km) no es equivalente al tiempo de viaje. Un itinerario profesional debe basarse en el tiempo real de tránsito para garantizar la viabilidad del cronograma.
```