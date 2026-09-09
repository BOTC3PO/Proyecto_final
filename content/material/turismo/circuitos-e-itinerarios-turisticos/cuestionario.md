# Turismo — Circuitos e itinerarios turisticos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: Q2/Q5/Q17 declarativas sin hueco con respuesta
> booleana fija invertida respecto al hecho real (Q17 además con la
> propia explicación diciendo "Correcto" sobre una respuesta `falso`),
> convertidas a `tipo: vf` con la clave correcta; Q3 enunciado
> autorrevelador (afirmaba la respuesta como hecho en vez de preguntar)
> reescrito como pregunta real; Q8 índices de array completamente
> desplazados (asignaba la etiqueta "A"/"B"/"C" a `distancia_km` en vez
> del valor numérico) y `velocidad_promedio` fijada al dato crudo en vez
> de calculada, reescrito con datos numéricos reales y fórmula dinámica;
> Q10 respuesta fija "3" sólo correcta para una de las tres ramas
> sorteadas, corregida a fórmula dinámica; Q13 clave invertida (pregunta
> "¿es correcto ignorar la eficiencia?" con `respuesta: verdadero`
> cuando la propia explicación dice "Falso"); Q15 enunciado con dos
> blancos y una sola `respuesta` ambigua, colapsado a un blanco; Q21
> interpolaba un par de ciudades donde se esperaba un concepto de
> prioridad, produciendo una oración sin sentido, corregido; Q22
> pregunta sí/no con `respuesta: "fijo"` (palabra que no responde nada),
> convertida a `tipo: vf`; Q24/Q25 respuesta fija sólo correcta para una
> de las ramas sorteadas, corregidas a fórmulas/mapeos dinámicos.

---

### 1 — Definición de itinerario

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["conceptos_clave", "planificacion"]

respuesta: "itinerario"
tipo: completar
respuestas_validas:
  - "itinerario"

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

respuesta: verdadero
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

tipo: mc
respuesta: "secuencia de paradas"
opciones_explicitas: ["secuencia de paradas", "punto de interés", "logística de movilidad"]

enunciado: "¿Qué elemento define el orden cronológico de las visitas en el diseño de un circuito?"

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

respuesta_orden: ["Inventario de recursos", "Selección de atractivos", "Diseño de la ruta", "Cálculo de tiempos"]
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

respuesta: verdadero
tipo: vf
enunciado: "Un itinerario que respeta la capacidad de carga de un destino para evitar la degradación del entorno se considera un diseño sostenible."

explicacion: |
  La sostenibilidad en el diseño de itinerarios es fundamental para asegurar que el flujo de turistas no exceda la capacidad de los atractivos.
```

### 6 — El componente clave del diseño

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

### 7 — Secuencia de diseño de un circuito

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

variables:
  pasos_correctos: ["Selección de atractivos", "Trazado de rutas", "Cálculo de tiempos", "Presupuestación"]

respuesta_orden: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Selección de atractivos", "Trazado de rutas", "Cálculo de tiempos", "Presupuestación"]

enunciado: "Ordene los pasos lógicos para el diseño de un nuevo circuito de montaña:"

explicacion: |
  El proceso debe ser deductivo: primero se elige qué mostrar, luego cómo conectar los puntos, después cuánto tarda el viajero y finalmente el costo.
```

### 8 — Análisis de viabilidad temporal

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["logistica", "tiempos"]

variables:
  escenario: uno_de([[120, 90], [100, 60], [150, 120]])
  distancia_km: escenario[0]
  tiempo_minutos: escenario[1]
  velocidad_promedio: distancia_km / (tiempo_minutos / 60)

respuesta: velocidad_promedio
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un transfer debe recorrer {distancia_km} km en un tiempo total de {tiempo_minutos} minutos, la velocidad promedio requerida para cumplir el itinerario es de ___ km/h."

pasos:
  - "Convertir minutos a horas: {tiempo_minutos} / 60"
  - "Dividir distancia por tiempo en horas: {distancia_km} / (tiempo_minutos / 60)"

explicacion: |
  La velocidad se calcula como Distancia / Tiempo. En el caso {distancia_km} km en {tiempo_minutos} min, la velocidad es {velocidad_promedio} km/h.
```

### 9 — El concepto de itinerario circular

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

### 10 — Cálculo de capacidad de carga

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad"]

variables:
  datos: [[15, 5], [20, 4], [10, 2]]
  idx: uno_de([0,1,2])
  capacidad_max: datos[idx][0]
  grupos_max: datos[idx][1]

respuesta: capacidad_max / grupos_max
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si la capacidad de carga de un sendero es de {capacidad_max} personas y se permite un máximo de {grupos_max} grupos simultáneos, el tamaño máximo de cada grupo debe ser de ___ personas para no exceder el límite."

explicacion: |
  Para no sobrepasar la capacidad, dividimos la capacidad total por el número de grupos: {capacidad_max} / {grupos_max}.
```

### 11 — El concepto de itinerario vs. circuito

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

### 12 — La falacia de la saturación de atractivos

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["diseño", "errores_comunes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_texto: ["Se intenta visitar 10 museos en un solo día sin considerar los tiempos de traslado.", "Se programan actividades de alto impacto físico sin dejar espacios para el descanso."]
  respuestas_error: ["exceso de actividades", "falta de tiempos de descanso"]

respuesta: respuestas_error[escenario_idx]
tipo: mc
opciones_explicitas: ["exceso de actividades", "falta de tiempos de descanso", "falta de presupuesto", "mala elección de transporte"]

enunciado: "En el diseño de un itinerario se comete el siguiente error: '{escenario_texto[escenario_idx]}'. Esto suele llevar a la insatisfacción del cliente por agotamiento físico o mental. ¿Qué tipo de error de planificación representa esta situación?"

explicacion: |
  Un error común es la 'hiperactividad' en el itinerario. Un buen diseño debe equilibrar la carga de actividades con tiempos de transición y descanso para evitar el agotamiento del turista.
```

### 13 — La importancia de la lógica de transporte

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["logistica", "transporte"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto diseñar un circuito que conecte puntos geográficos basándose únicamente en la belleza de los atractivos, ignorando la eficiencia de las rutas de transporte y los tiempos de traslado?"

explicacion: |
  Falso. La logística de transporte es el eje vertebral de un circuito. Un itinerario con atractivos increíbles pero con traslados imposibles o ineficientes es un producto inviable.
```

### 14 — Secuencia lógica de diseño de un circuito

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["metodologia", "pasos_diseño"]

respuesta_orden: ["Selección de atractivos", "Establecimiento de la ruta", "Cálculo de tiempos", "Presupuestación"]
tipo: ordenar
opciones_explicitas: ["Establecimiento de la ruta", "Selección de atractivos", "Cálculo de tiempos", "Presupuestación"]

enunciado: "Ordene los pasos lógicos para el diseño técnico de un nuevo circuito turístico, desde la fase de ideación hasta la fase de costos."

explicacion: |
  Primero se define qué se va a ver (atractivos), luego cómo se conectan (ruta), cuánto se tarda (tiempos) y finalmente cuánto cuesta (presupuesto).
```

### 15 — El error de la "distancia lineal"

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["logistica", "tiempos"]

respuesta: "tiempo real"
tipo: completar
respuestas_validas:
  - "tiempo real"

enunciado: "Al planificar un itinerario, un error crítico es calcular la duración de un tramo basándose únicamente en la distancia física entre dos puntos, sin considerar el ___ (tráfico, clima, estado de rutas)."

explicacion: |
  La distancia física (km) no es equivalente al tiempo de viaje. Un itinerario profesional debe basarse en el tiempo real de tránsito para garantizar la viabilidad del cronograma.
```

### 16 — Circuito vs. Itinerario

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

### 17 — Característica del Circuito

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["definiciones"]

respuesta: verdadero
tipo: "vf"

enunciado: "Un circuito turístico se caracteriza por ser un recorrido con un inicio y un fin determinados que permite volver al punto de partida o conectar puntos de forma secuencial."

explicacion: |
  Correcto. La naturaleza cíclica o de conexión lógica de puntos es lo que define la estructura de un circuito.
```

### 18 — Elementos del Diseño

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["diseño", "planificacion"]

variables:
  escenario: uno_de([["Atractivo natural", "Transporte", "Alojamiento"], ["Museo", "Guía", "Restaurante"]])

respuesta: escenario[1]
tipo: "completar"
respuestas_validas:
  - "Transporte"
  - "Guía"

enunciado: "Para diseñar un circuito, es fundamental considerar el {escenario[0]} y el {escenario[1]} para garantizar la movilidad del turista."

explicacion: |
  El diseño de un itinerario requiere la coordinación de los recursos logísticos (transporte/guía) con los puntos de interés.
```

### 19 — Secuencia de Planificación

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificación de atractivos", "Establecimiento de rutas", "Cálculo de tiempos", "Asignación de servicios"]
tipo: "ordenar"
opciones_explicitas: ["Identificación de atractivos", "Establecimiento de rutas", "Cálculo de tiempos", "Asignación de servicios"]

enunciado: "Ordene los pasos lógicos para el diseño de un nuevo circuito turístico:"

explicacion: |
  Primero se define el qué (atractivos), luego el cómo (rutas), después el cuánto (tiempos) y finalmente el con qué (servicios/logística).
```

### 20 — Diferencia en la Flexibilidad

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["flexibilidad", "gestion"]

variables:
  idx: uno_de([0, 1])
  primero: ["itinerario flexible", "itinerario fijo"]
  segundo: ["itinerario fijo", "itinerario flexible"]
  es_correcto: [verdadero, falso]

respuesta: es_correcto[idx]
tipo: "vf"

enunciado: "En un {primero[idx]}, la secuencia de actividades puede modificarse según las necesidades del grupo sin perder la esencia del recorrido, a diferencia de un {segundo[idx]}."

explicacion: |
  La flexibilidad es la capacidad de adaptación de un itinerario frente a imprevistos o preferencias, algo que no posee un itinerario rígido o fijo.
```

### 21 — El desafío de la logística

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["logistica", "diseño_de_recorridos"]

variables:
  destinos: ["Circuito de los Lagos", "Ruta del Vino", "Circuito de las Cataratas"]
  idx: uno_de([0,1,2])

opciones_explicitas: ["Optimización de tiempos", "Reducción de costos", "Aumento de la experiencia del cliente"]

enunciado: "Para diseñar el {destinos[idx]}, el agente debe priorizar principalmente la ___ para asegurar que el itinerario sea viable y fluido."

respuesta: "Optimización de tiempos"
tipo: mc

explicacion: |
  En el diseño de circuitos, la gestión de los tiempos de traslado es el factor crítico para que el itinerario sea funcional.
```

### 22 — Elementos de un itinerario

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "basico"
  tags: ["conceptos", "diseño"]

respuesta: verdadero
tipo: vf
enunciado: "¿Es el 'tiempo de pernocte' un componente esencial en la planificación de un itinerario de varios días?"

explicacion: |
  Un itinerario debe contemplar no solo los traslados y visitas, sino también los tiempos de descanso y alojamiento.
```

### 23 — Secuencia de planificación

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Selección de atractivos", "Diseño de rutas de transporte", "Cálculo de costos y tiempos", "Armado del itinerario final"]

respuesta_orden: ["Selección de atractivos", "Diseño de rutas de transporte", "Cálculo de costos y tiempos", "Armado del itinerario final"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas lógicas para el diseño de un nuevo circuito turístico:"

explicacion: |
  Primero se define qué se va a visitar, luego cómo se llega, después cuánto cuesta y finalmente se presenta el producto.
```

### 24 — El factor de la modularidad

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "avanzado"
  tags: ["estrategia", "producto"]

variables:
  datos: [["itinerario_cerrado", "cerrado"], ["itinerario_abierto", "abierto"]]
  idx: uno_de([0,1])

opciones_explicitas: ["cerrado", "abierto"]

enunciado: "Un circuito diseñado con un esquema {datos[idx][0]} se caracteriza por ser ___."

respuesta: datos[idx][1]
tipo: completar

respuestas_validas:
  - datos[0][1]
  - datos[1][1]

explicacion: |
  En el caso de un itinerario abierto, la flexibilidad es la característica principal que permite al turista modificar partes del recorrido.
```

### 25 — Análisis de la densidad de puntos

```
metadata:
  materia: "turismo"
  tema: "circuitos_e_itinerarios_turisticos"
  nivel: "intermedio"
  tags: ["análisis", "distancias"]

variables:
  ejemplos: ["30 km", "2 horas", "50 USD"]
  categorias: ["Distancia", "Tiempo", "Costo"]
  idx: uno_de([0,1,2])

opciones_explicitas: ["Distancia", "Tiempo", "Costo"]

enunciado: "Si un diseñador está evaluando la variable de {ejemplos[idx]}, está analizando la ___ entre los puntos del circuito."

respuesta: categorias[idx]
tipo: mc

explicacion: |
  La distancia física es una de las variables fundamentales para determinar la viabilidad de un circuito.
```
