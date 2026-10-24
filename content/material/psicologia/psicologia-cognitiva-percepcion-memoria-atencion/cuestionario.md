# Psicologia — Psicologia cognitiva percepcion memoria atencion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de percepción

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_percepcion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: "percepción"
tipo: completar
respuestas_validas:
  - "percepción"
  - "percepcion"

enunciado: "El proceso mediante el cual el cerebro organiza e interpreta la información sensorial para darle un significado es la ___."

explicacion: |
  La percepción no es solo recibir estímulos (sensación), sino el proceso cognitivo de interpretación de esos datos.
```

### 2 — Memoria y su capacidad

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "basico"
  tags: ["memoria", "modelo_multialmacen"]

opciones_explicitas: ["Memoria Sensorial", "Memoria a Corto Plazo", "Memoria a Largo Plazo"]
respuesta: "Memoria a Corto Plazo"
tipo: mc

enunciado: "Según el modelo de Atkinson y Shiffrin, el sistema que permite retener una cantidad limitada de información durante un periodo breve es la ___."

explicacion: |
  La memoria a corto plazo actúa como un espacio de trabajo temporal antes de que la información sea consolidada en la memoria a largo plazo.
```

### 3 — Atención selectiva

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_atencion"
  nivel: "intermedio"
  tags: ["atencion", "foco"]

respuesta: verdadero
tipo: vf

enunciado: "¿La atención selectiva es la capacidad de concentrarse en un estímulo específico ignorando otros estímulos irrelevantes?"

explicacion: |
  Efectivamente, la atención selectiva permite filtrar la información para evitar la sobrecarga cognitiva.
```

### 4 — Procesos de la memoria

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "intermedio"
  tags: ["codificacion", "almacenamiento", "recuperacion"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso de memoria desde la entrada del estímulo hasta su salida:"

explicacion: |
  El ciclo de la memoria requiere primero transformar el estímulo (codificación), guardarlo (almacenamiento) y luego acceder a él (recuperación).
```

### 5 — Aprendizaje y cambio

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_aprendizaje"
  nivel: "basico"
  tags: ["aprendizaje", "cambio"]

tipo: mc

opciones_explicitas: ["Un cambio relativamente permanente en la conducta o las representaciones mentales como resultado de la experiencia", "Un cambio temporal debido a la fatiga o el estado de ánimo", "Una respuesta puramente refleja sin participación cognitiva", "Un proceso exclusivamente biológico sin relación con la experiencia"]

pasos:
  - "Identificar la definición clásica de aprendizaje."

enunciado: "En psicología cognitiva, ¿cómo se define fundamentalmente el aprendizaje?"

respuesta: "Un cambio relativamente permanente en la conducta o las representaciones mentales como resultado de la experiencia"

explicacion: |
  El aprendizaje implica un cambio relativamente permanente en la conducta o en las representaciones mentales como resultado de la experiencia.
```

### 6 — El proceso de la memoria de trabajo

```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["cognicion", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El sujeto debe retener una secuencia de números para realizar una operación mental.", "retener"], ["El sujeto debe manipular mentalmente una lista de palabras para categorizarlas.", "manipular"]]

enunciado: "Un estudiante está realizando una tarea de {datos[escenario_idx][0]}. En este proceso, la capacidad de mantener la información activa para su procesamiento inmediato se denomina memoria de trabajo. La función principal de este componente es ___ la información."

respuestas_validas:
  - "manipular"
  - "procesar"
respuesta: "manipular"
tipo: completar

explicacion: |
  La memoria de trabajo no es solo un almacén pasivo, sino un sistema dinámico que permite la manipulación de la información necesaria para tareas cognitivas complejas.
```

### 7 — Percepción y Bottom-up vs Top-down

```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "intermedio"
  tags: ["percepcion", "atencion"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplos: [["Ver una mancha roja en un papel blanco y reconocerla como una manzana debido a la experiencia previa.", "top-down"], ["Detectar el color rojo de un objeto basándose únicamente en la estimulación de los fotorreceptores.", "bottom-up"]]

enunciado: "Analicemos el siguiente caso: {ejemplos[caso_idx][0]}. Este tipo de procesamiento, donde los conocimientos previos y las expectativas influyen en la interpretación de los estímulos, se denomina procesamiento ___."

opciones_explicitas: ["top-down", "bottom-up", "perceptual", "sensorial"]
respuesta: "top-down"
tipo: mc

explicacion: |
  El procesamiento top-down (de arriba hacia abajo) ocurre cuando nuestros procesos cognitivos de alto nivel (conocimiento, expectativas) guían la percepción de los estímulos sensoriales.
```

### 8 — Atención Selectiva y el Efecto Stroop

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "basico"
  tags: ["atencion", "interferencia"]

enunciado: "En el Test de Stroop, se presenta la palabra 'AZUL' escrita en tinta de color rojo. El sujeto debe decir el color de la tinta, no leer la palabra. Esto genera una interferencia porque la lectura es un proceso automático que compite con la atención selectiva al color. ¿Es verdadero que este fenómeno demuestra la existencia de procesos automáticos que interfieren con procesos controlados?"

respuesta: verdadero
tipo: vf

explicacion: |
  El efecto Stroop es un ejemplo clásico de cómo la automatización de procesos (como la lectura) puede dificultar la ejecución de una tarea controlada (nombrar el color).
```

### 9 — Fases del Aprendizaje en la Memoria

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "avanzado"
  tags: ["aprendizaje", "codificacion"]

enunciado: "Para que un aprendizaje sea consolidado, la información debe atravesar una serie de etapas secuenciales. Ordene el proceso desde que el estímulo llega al sistema hasta que se estabiliza en la memoria a largo plazo:"

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

explicacion: |
  El proceso de memoria sigue una secuencia lógica: primero se codifica la información (transformación del estímulo), luego se almacena (mantenimiento) y finalmente se recupera (acceso a la información).
```

### 10 — El Modelo de Memoria de Atkinson-Shiffrin

```
metadata:
  materia: "psicologia"
  tema: "modelos_memoria"
  nivel: "intermedio"
  tags: ["memoria", "procesamiento"]

variables:
  tarea_idx: uno_de([0, 1])
  escenarios: ["el reflejo visual que queda unos milisegundos tras ver un flash de luz", "el eco de un sonido que persiste apenas un instante después de escucharlo"]

enunciado: "Un sujeto experimenta {escenarios[tarea_idx]}. Si el sujeto no presta atención a este estímulo, la información se pierde casi instantáneamente de la memoria ___."

opciones_explicitas: ["sensorial", "a corto plazo", "a largo plazo", "semántica"]
respuesta: "sensorial"
tipo: mc

explicacion: |
  La memoria sensorial es el primer nivel de procesamiento; retiene la información física del estímulo por un tiempo extremadamente breve (milisegundos a segundos) antes de que pase a la memoria de corto plazo mediante la atención.
```

### 11 — Percepción vs Sensación

```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: falso
tipo: vf

enunciado: "La percepción es un proceso puramente fisiológico que ocurre exclusivamente en los órganos sensoriales, sin intervención de los procesos mentales superiores."

explicacion: |
  La sensación es el proceso fisiológico de captar estímulos, mientras que la percepción es el proceso psicológico de organizar e interpretar dicha información sensorialmente captada.
```

### 12 — El mito de la memoria fotográfica

```
metadata:
  materia: "psicologia"
  tema: "memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "errores_comunes"]

opciones_explicitas: ["memoria_sensorial", "memoria_de_trabajo", "memoria_a_largo_plazo", "memoria_episodica"]

respuesta: "memoria_sensorial"
tipo: mc

enunciado: "Si una persona es capaz de retener una imagen visual por apenas unos milisegundos antes de que se desvanezca, ¿qué tipo de memoria está utilizando?"

explicacion: |
  La memoria sensorial es el sistema que retiene la información sensorial por un periodo muy breve (milisegundos) antes de que sea procesada o perdida.
```

### 13 — Atencion Selectiva y el efecto de filtro

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "filtro"]

respuesta: "El filtro atencional"
tipo: completar
respuestas_validas:
  - "El filtro atencional"
  - "Filtro atencional"
  - "filtro atencional"

enunciado: "En el modelo de atención de Broadbent, la capacidad de procesar solo una parte de la información sensorial mientras se ignoran otros estímulos se debe a la existencia de ___."

explicacion: |
  El modelo de filtro sugiere que existe un mecanismo que selecciona la información relevante y bloquea el resto para evitar la sobrecarga cognitiva.
```

### 14 — Fases del aprendizaje según el modelo de procesamiento de información

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_procesamiento"
  nivel: "avanzado"
  tags: ["aprendizaje", "memoria"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas necesarias para que un proceso de aprendizaje sea efectivo en el sistema de memoria:"

explicacion: |
  El aprendizaje requiere primero codificar la información, luego almacenarla en la memoria y, finalmente, ser capaz de recuperarla cuando sea necesario.
```

### 15 — Memoria y la distorsión de recuerdos

```
metadata:
  materia: "psicologia"
  tema: "memoria_reconstruccion"
  nivel: "intermedio"
  tags: ["memoria", "errores"]

respuesta: "falso"
tipo: completar
enunciado: "La memoria humana funciona como una grabación de video exacta que permite reproducir los eventos pasados sin alteraciones ni distorsiones."

explicacion: |
  La memoria es un proceso reconstructivo, no reproductivo. Esto significa que cada vez que recordamos, reconstruimos la información, lo que la hace susceptible a errores, sesgos y falsos recuerdos.
```

### 16 — Percepción vs Sensación

```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "sensacion", "procesos_mentales"]

tipo: mc
opciones_explicitas: ["La sensación es la interpretación de los estímulos, mientras que la percepción es la recepción de energía física.", "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física.", "Ambos términos son sinónimos en la psicología cognitiva.", "La sensación requiere procesos cognitivos superiores y la percepción es puramente fisiológica."]

respuesta: "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física."

enunciado: "En psicología cognitiva, ¿cuál es la distinción fundamental entre sensación y percepción?"

explicacion: |
  La sensación es el proceso fisiológico de recibir estímulos a través de los receptores sensoriales, mientras que la percepción es el proceso psicológico de organizar e interpretar esa información para darle significado.
```

### 17 — Memoria de Trabajo vs Memoria a Largo Plazo

```
metadata:
  materia: "psicologia"
  tema: "memoria_cognitiva"
  nivel: "intermedio"
  tags: ["memoria", "atencion", "carga_cognitiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["manteniendo activamente en mente el número de teléfono de un amigo mientras lo marca", "memoria de trabajo"], ["recordando el nombre de la capital de un país que aprendió hace años", "memoria a largo plazo"]]

tipo: completar
respuestas_validas:
  - "memoria de trabajo"
  - "memoria a largo plazo"
respuesta: escenarios[escenario_idx][1]

enunciado: "Si una persona está {escenarios[escenario_idx][0]}, el proceso mental predominante que está utilizando para gestionar esa información es la ___."

explicacion: |
  La memoria de trabajo es un sistema de capacidad limitada que mantiene y manipula la información necesaria para tareas cognitivas complejas en el momento presente.
```

### 18 — Atención Selectiva vs Atención Dividida

```
metadata:
  materia: "psicologia"
  tema: "atencion_procesos"
  nivel: "basico"
  tags: ["atencion", "filtro", "multitarea"]

tipo: vf
respuesta: falso

enunciado: "¿Es cierto que la atención dividida es la capacidad de procesar un único estímulo de manera profunda mientras se ignoran otros estímulos irrelevantes?"

explicacion: |
  Falso. La capacidad de enfocarse en un solo estímulo ignorando otros es la atención selectiva. La atención dividida es la capacidad de procesar múltiples fuentes de información o realizar dos o más tareas simultáneamente.
```

### 19 — Aprendizaje por Condicionamiento Clásico vs Operante

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_conductual"
  nivel: "intermedio"
  tags: ["aprendizaje", "condicionamiento", "conducta"]

tipo: mc
opciones_explicitas: ["El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta.", "El operante se basa en la asociación de estímulos, mientras que el clásico se basa en las consecuencias de la conducta.", "El clásico requiere refuerzos para ocurrir, mientras que el operante es automático.", "Ambos requieren la presencia de un estímulo incondicionado."]

respuesta: "El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta."

enunciado: "Al comparar ambos procesos, ¿qué distingue fundamentalmente al condicionamiento operante del condicionamiento clásico?"

explicacion: |
  En el condicionamiento clásico, el sujeto es pasivo y aprende por asociación de estímulos; en el operante, el sujeto es activo y la probabilidad de la conducta cambia según las consecuencias (refuerzos o castigos) que le siguen.
```

### 20 — Fases del Procesamiento de la Información

```
metadata:
  materia: "psicologia"
  tema: "procesamiento_informacion"
  nivel: "avanzado"
  tags: ["memoria", "codificacion", "recuperacion"]

tipo: ordenar
opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]

enunciado: "Ordene cronológicamente las etapas del proceso de memoria según el modelo de procesamiento de la información:"

explicacion: |
  El proceso comienza con la codificación (transformación del estímulo en un código mental), seguido del almacenamiento (mantenimiento de la información en el sistema) y finaliza con la recuperación (acceso a la información almacenada).
```

### 21 — El fenómeno de la atención selectiva

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "percepcion"]

variables:
  datos: [["Estás en una fiesta ruidosa y logras seguir la conversación de tu amigo", "atencion_selectiva"], ["Estás leyendo un libro y de repente escuchas tu nombre a lo lejos", "atencion_involuntaria"], ["Estás buscando tus llaves en una mesa desordenada", "atencion_sostenida"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
enunciado: "En el escenario donde {datos[idx][0]}, el proceso cognitivo predominante es la ___."

explicacion: |
  La atención selectiva permite filtrar estímulos irrelevantes para concentrarse en uno específico, como en el efecto 'cocktail party'.
```

### 22 — Memoria de trabajo y carga cognitiva

```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["memoria", "carga_cognitiva"]

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"
  - "7 ± 2"
  - "5 a 9"

enunciado: "Según el 'número mágico' propuesto por Miller, la capacidad promedio de elementos que la memoria de trabajo puede retener simultáneamente es de ___ (más o menos 2)."

explicacion: |
  La memoria de trabajo tiene una capacidad limitada: el número mágico de Miller es 7 ± 2 elementos.
```

### 23 — Procesamiento Bottom-up vs Top-down

```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "avanzado"
  tags: ["percepcion", "procesamiento"]

respuesta: "top_down"
respuestas_validas:
  - "top_down"
  - "top-down"
tipo: completar
enunciado: "Si el sujeto está interpretando una sombra como un animal debido a sus expectativas o estados emocionales previos, el procesamiento es de tipo ___."

explicacion: |
  El procesamiento Top-down (de arriba hacia abajo) ocurre cuando los conocimientos previos, expectativas o motivaciones influyen en la percepción.
```

### 24 — Etapas del aprendizaje según el modelo de memoria

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "intermedio"
  tags: ["aprendizaje", "memoria"]

respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar
opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]

enunciado: "Ordena correctamente las etapas del proceso de memoria que permiten el aprendizaje de una nueva habilidad:"

explicacion: |
  Para que ocurra el aprendizaje, la información debe ser codificada (transformada), almacenada (mantenida) y finalmente recuperada (evocada).
```

### 25 — Reconocimiento de patrones y percepción

```
metadata:
  materia: "psicologia"
  tema: "percepcion_reconocimiento"
  nivel: "basico"
  tags: ["percepcion", "gestalt"]

variables:
  datos: [["una letra 'A' formada por líneas separadas", "ley_cierre"], ["un círculo perfecto", "ley_continuidad"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ley_cierre", "ley_continuidad", "ley_figura_fondo"]

enunciado: "Si el sujeto percibe {datos[idx][0]} como una unidad completa a pesar de que los elementos no estén conectados, está aplicando la {datos[idx][1]}."

explicacion: |
  La Ley de Cierre de la Gestalt establece que nuestra mente tiende a completar figuras incompletas para darles sentido.
```
