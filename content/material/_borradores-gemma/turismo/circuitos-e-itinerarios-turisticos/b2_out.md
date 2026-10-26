### 1 — El componente clave del diseño
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["diseño", "conceptos"]

respuesta: "nodo"
tipo: mc
opciones_explicitas: ["nodo", "flujo", "itinerario", "atractivo"]

enunciado: "En el diseño de un circuito turístico, los puntos de interés o lugares de parada se denominan técnicamente ___."

explicacion: |
  En la teoría de redes aplicada al turismo, los atractivos actúan como 'nodos' que se conectan mediante rutas o enlaces.
```

### 2 — Secuencia de diseño de un circuito
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

variables:
  pasos_correctos: ["Selección de atractivos", "Trazado de rutas", "Cálculo de tiempos", "Presupuestación"]

respuesta: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Selección de atractivos", "Trazado de rutas", "Cálculo de tiempos", "Presupuestación"]

enunciado: "Ordene los pasos lógicos para el diseño de un nuevo circuito de montaña:"

explicacion: |
  El proceso debe ser deductivo: primero se elige qué mostrar, luego cómo conectar los puntos, después cuánto tarda el viajero y finalmente el costo.
```

### 3 — Análisis de viabilidad temporal
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["logistica", "tiempos"]

variables:
  escenario: uno_de([
    ["A", "4", "120"],
    ["B", "6", "180"],
    ["C", "2", "60"]
  ])
  distancia_km: escenario[0]
  tiempo_minutos: escenario[1]
  velocidad_promedio: escenario[2]

respuesta: velocidad_promedio
tipo: input
tolerancia_abs: 0.1

enunciado: "Si un transfer debe recorrer {distancia_km} km en un tiempo total de {tiempo_minutos} minutos, la velocidad promedio requerida para cumplir el itinerario es de ___ km/h."

pasos:
  - "Convertir minutos a horas: {tiempo_minutos} / 60"
  - "Dividir distancia por tiempo en horas: {distancia_km} / (tiempo_minutos / 60)"

explicacion: |
  La velocidad se calcula como Distancia / Tiempo. En el caso {distancia_km} km en {tiempo_minutos} min, la velocidad es {velocidad_promedio} km/h.
```

### 4 — El concepto de itinerario circular
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["tipologia"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un itinerario circular es aquel que comienza y termina en el mismo punto de origen?"

explicacion: |
  Correcto. A diferencia del itinerario lineal, el circuito circular optimiza el retorno al punto de partida o base operativa.
```

### 5 — Cálculo de capacidad de carga
```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad"]

variables:
  datos: [
    ["15", "5", "3"],
    ["20", "4", "5"],
    ["10", "2", "2"]
  ]
  idx: uno_de([0,1,2])
  capacidad_max: datos[idx][0]
  grupos_max: datos[idx][1]
  personas_por_grupo: datos[idx][2]

respuesta: "3"
tipo: completar
respuestas_validas: ["3"]

enunciado: "Si la capacidad de carga de un sendero es de {capacidad_max} personas y se permite un máximo de {grupos_max} grupos simultáneos, el tamaño máximo de cada grupo debe ser de ___ personas para no exceder el límite."

explicacion: |
  Para no sobrepasar la capacidad, dividimos la capacidad total por el número de grupos: {capacidad_max} / {grupos_max} = 3 (en este escenario).
```