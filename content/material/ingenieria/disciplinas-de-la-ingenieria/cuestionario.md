# Ingenieria — Disciplinas de la ingenieria (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Ingeniería Civil

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "infraestructura"]

tipo: mc
opciones_explicitas: ["Diseño de sistemas de comunicación y redes eléctricas", "Diseño y construcción de infraestructuras como puentes, carreteras y represas", "Optimización de procesos de producción en fábricas", "Desarrollo de sistemas de propulsión para satélites"]

enunciado: "La ingeniería civil se encarga principalmente del diseño, construcción y mantenimiento de ___."

respuesta: "Diseño y construcción de infraestructuras como puentes, carreteras y represas"

explicacion: |
  La ingeniería civil se enfoca en el entorno construido, diseñando estructuras que soportan cargas y gestionan recursos naturales para la sociedad.
```

### 2 — Ingeniería Química

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

tipo: vf
enunciado: "La ingeniería química se centra en la transformación de materias primas en productos útiles mediante procesos químicos."

respuesta: verdadero

explicacion: |
  La ingeniería química utiliza la química, la física y la biología para transformar materias primas en productos con valor añadido a escala industrial.
```

### 3 — Ingeniería Mecánica

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "maquinas"]

tipo: completar
respuestas_validas:
  - "sistemas de máquinas"
  - "motores térmicos"

enunciado: "La ingeniería mecánica se dedica al estudio y diseño de ___ y sistemas de movimiento."

respuesta: "sistemas de máquinas"

explicacion: |
  La ingeniería mecánica aplica principios de la física y la ciencia de materiales para el diseño de maquinaria, motores y sistemas térmicos.
```

### 4 — Ingeniería Industrial

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimización"]

tipo: mc
opciones_explicitas: ["Optimización de procesos, recursos y sistemas para mejorar la eficiencia", "Diseño de fármacos y dispositivos médicos", "Análisis de la estabilidad de estructuras de acero", "Estudio de la dinámica de fluidos en cohetes"]

enunciado: "El objetivo principal de la ingeniería industrial es la ___."

respuesta: "Optimización de procesos, recursos y sistemas para mejorar la eficiencia"

explicacion: |
  A diferencia de otras ingenierías que se enfocan en productos específicos, la industrial se enfoca en la optimización de sistemas complejos (personas, dinero, tiempo, materiales).
```

### 5 — Secuencia de especialidades

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["ordenar", "especialidades"]

tipo: ordenar
opciones_explicitas: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

respuesta_orden: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

enunciado: "Ordena las siguientes disciplinas de acuerdo a su escala de aplicación, desde la que opera en el espacio exterior hasta la que aplica tecnología en el cuerpo humano:"

explicacion: |
  El orden solicitado va desde la escala macro/espacial (Aeroespacial) hacia la escala micro/biológica (Biomédica), pasando por sistemas de energía (Eléctrica) y sistemas físicos/mecánicos (Mecánica).
```

### 6 — El diseño de una estructura

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "estructuras"]

enunciado: "Un equipo debe diseñar el esqueleto de un puente colgante para soportar el peso de camiones pesados. El profesional encargado de calcular las cargas, la resistencia de los materiales y la estabilidad de la estructura es el ingeniero ___."

respuestas_validas:
  - "civil"
tipo: completar

explicacion: |
  La ingeniería civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, carreteras y edificios.
```

### 7 — Optimización de procesos

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos"]

variables:
  idx: uno_de([0, 1])
  datos: [["optimizar la línea de ensamblaje de una fábrica de autos", "reducir costos de producción"], ["gestionar el flujo de inventario en un centro logístico", "mejorar la eficiencia de la cadena de suministro"]]

enunciado: "Un profesional es contratado para {datos[idx][0]} con el fin de {datos[idx][1]}. ¿Qué disciplina está aplicando principalmente?"

opciones_explicitas: ["Mecánica", "Industrial", "Química", "Eléctrica"]
respuesta: "Industrial"
tipo: mc

explicacion: |
  La ingeniería industrial se enfoca en la optimización de sistemas complejos, procesos y recursos para mejorar la productividad.
```

### 8 — Propulsión y vuelo

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "vuelo"]

enunciado: "El diseño de un motor de reacción para un satélite requiere conocimientos avanzados de aerodinámica y sistemas de propulsión fuera de la atmósfera terrestre."

respuesta: verdadero
tipo: vf

explicacion: |
  La ingeniería aeroespacial se especializa en el diseño y construcción de vehículos que operan en el aire o en el espacio.
```

### 9 — El proceso de refinación

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["quimica", "procesos"]

variables:
  reaccion_idx: uno_de([0, 1])
  reacciones: [["la conversión de petróleo crudo en gasolina", "la producción de polímeros a partir de gas natural"], ["la obtención de fertilizantes mediante procesos térmicos", "la síntesis de fármacos complejos"]]

enunciado: "Para llevar a cabo {reacciones[reaccion_idx][0]}, se requiere un ingeniero que comprenda las transformaciones moleculares y las reacciones termodinámicas. Este es un ingeniero ___."

respuestas_validas:
  - "químico"
tipo: completar

explicacion: |
  La ingeniería química utiliza procesos químicos, físicos y biológicos para transformar materias primas en productos útiles a gran escala.
```

### 10 — El ciclo de vida de un dispositivo médico

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["biomedica", "ordenar"]

enunciado: "Para desarrollar un brazo robótico controlado por señales neuronales, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
respuesta_orden: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
tipo: ordenar

explicacion: |
  La ingeniería biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones tecnológicas aplicadas a la salud.
```

### 11 — Confusión de ámbitos: Civil vs. Mecánica

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "mecanica", "estructuras"]

respuesta: "mecanica"
tipo: mc
opciones_explicitas: ["civil", "mecanica", "electrica", "quimica"]

enunciado: "Un error común es pensar que el diseño de maquinaria con partes móviles y sistemas de combustión es competencia de la ingeniería {idx_disciplina[1]}, cuando en realidad pertenece a la ingeniería _________."

variables:
  idx_disciplina: uno_de([[0, "civil"], [2, "electrica"], [3, "quimica"]])

explicacion: |
  La ingeniería civil se enfoca principalmente en infraestructuras estáticas (puentes, carreteras, edificios), mientras que la ingeniería mecánica se especializa en sistemas con movimiento y transformación de energía.
```

### 12 — El rol de la Ingeniería Química

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que el objetivo principal de la ingeniería química es la síntesis de nuevos elementos en un laboratorio, tal como lo hace un químico puro."

explicacion: |
  Falso. La ingeniería química se enfoca en el diseño de procesos industriales para transformar materias primas en productos a gran escala, no en la síntesis de elementos químicos básicos.
```

### 13 — Ingeniería Industrial vs. Gestión

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos", "optimizacion"]

respuesta: "optimizar la cadena de suministro"
tipo: completar
respuestas_validas:
  - "optimizar la cadena de suministro"

enunciado: "A menudo se confunde la ingeniería industrial con la administración pura; sin embargo, la ingeniería industrial busca _________ para mejorar la productividad de un sistema."

explicacion: |
  La ingeniería industrial utiliza métodos matemáticos y estadísticos para optimizar procesos, logística y recursos, diferenciándose de la gestión administrativa en su enfoque técnico-operativo.
```

### 14 — El alcance de la Ingeniería Biomédica

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["biomedica", "medicina"]

respuesta: "biomédica"
tipo: mc
opciones_explicitas: ["biomédica", "química", "aeroespacial", "industrial"]

enunciado: "Si un profesional se dedica al diseño de prótesis inteligentes y equipos de soporte vital para hospitales, su especialidad es la ingeniería _________."

explicacion: |
  La ingeniería biomédica aplica los principios de la ingeniería (electrónica, mecánica, materiales) al ámbito de la medicina y la biología para mejorar la salud humana.
```

### 15 — Secuencia de desarrollo aeroespacial

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "secuencia", "desarrollo"]

respuesta_orden: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]
tipo: ordenar
opciones_explicitas: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]

enunciado: "En el desarrollo de un vehículo de transporte espacial, ordene lógicamente estas etapas de ingeniería:"

pasos:
  - "Primero se define la forma para vencer la resistencia del aire."
  - "Luego se construye el esqueleto que soporte las cargas."
  - "Finalmente se instalan los motores para generar empuje."

explicacion: |
  El desarrollo aeroespacial sigue una jerarquía lógica: primero la aerodinámica (forma), luego la estructura (soporte) y finalmente la propulsión (movimiento).
```

### 16 — El enfoque de la ingeniería industrial

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimizacion"]

respuesta: "optimizacion"
tipo: completar
respuestas_validas:
  - "optimizacion"
  - "eficiencia"

enunciado: "Mientras que la ingeniería mecánica se enfoca en el diseño de sistemas físicos y máquinas, la ingeniería industrial se centra primordialmente en la ___ de procesos, personas y recursos dentro de una organización."

explicacion: |
  La ingeniería industrial se distingue por su enfoque sistémico en la optimización de procesos productivos y la gestión de recursos para maximizar la eficiencia.
```

### 17 — Diferencia entre ingeniería química y civil

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "civil"]

respuesta: verdadero
tipo: vf
enunciado: "Si el objetivo principal de un proyecto es la transformación de la materia a nivel molecular mediante reacciones químicas, estamos ante el campo de la ingeniería química y no de la ingeniería civil."

explicacion: |
  La ingeniería civil se ocupa de infraestructuras y estructuras macroscópicas, mientras que la química trabaja con transformaciones moleculares y procesos de reacción.
```

### 18 — El núcleo de la ingeniería eléctrica

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["electrica", "potencia"]

opciones_explicitas: ["flujo de electrones y energía", "diseño de motores de combustión", "estructuras de concreto", "procesos biológicos"]

respuesta: "flujo de electrones y energía"
tipo: mc

enunciado: "¿Cuál es el fenómeno físico central que estudia y aplica la ingeniería eléctrica?"

explicacion: |
  La ingeniería eléctrica se especializa en el control y la distribución de la energía eléctrica y el flujo de electrones en sistemas de potencia y circuitos.
```

### 19 — Intersección de la ingeniería biomédica

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "medicina"]

tipo: mc
opciones_explicitas: ["La creación de prótesis y dispositivos médicos", "El diseño de motores de alta potencia"]
respuesta: "La creación de prótesis y dispositivos médicos"

enunciado: "En un contexto de aplicación tecnológica, ¿cuál es el objetivo principal que distingue a la ingeniería biomédica de otras ingenierías?"

pasos:
  - "Identificar la aplicación principal de la ingeniería biomédica."
  - "Comparar con el enfoque de la ingeniería mecánica o eléctrica pura."

explicacion: |
  La ingeniería biomédica aplica principios de la ingeniería para resolver problemas en el ámbito de la medicina y la biología.
```

### 20 — Secuencia de diseño aeroespacial

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "proceso"]

opciones_explicitas: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]

respuesta_orden: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]
tipo: ordenar

enunciado: "Para el desarrollo de un vehículo aeroespacial, el ingeniero debe seguir un orden lógico de prioridades de diseño técnico:"

explicacion: |
  El diseño aeroespacial requiere primero la forma (aerodinámica), luego la fuerza de movimiento (propulsión) y finalmente el control (navegación).
```

### 21 — El diseño de un nuevo motor

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "motores"]

variables:
  datos: [["diseño de engranajes y pistones", "Mecánica"], ["diseño de circuitos de encendido", "Eléctrica"], ["diseño de sistemas de combustible", "Química"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica", "Eléctrica", "Química"]

enunciado: "Un ingeniero está trabajando en el diseño de un nuevo motor de combustión interna, enfocándose específicamente en el movimiento de los engranajes y pistones. ¿Qué disciplina lidera este trabajo?"

explicacion: |
  El diseño de sistemas mecánicos, movimiento y máquinas es el campo principal de la Ingeniería Mecánica.
```

### 22 — Infraestructura urbana

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "construccion"]

variables:
  datos: [["puentes y túneles", "Civil"], ["procesos de refinación", "Química"], ["redes de distribución", "Eléctrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Civil"
  - "Química"
  - "Eléctrica"

enunciado: "El proyecto consiste en la construcción de ___ y túneles para mejorar la conectividad de una ciudad."

explicacion: |
  La Ingeniería Civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, túneles y carreteras.
```

### 23 — Optimización de procesos

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "logistica"]

variables:
  textos: ["optimizar una línea de producción", "diseñar un satélite", "crear una prótesis"]
  valores: [verdadero, falso, falso]
  idx: uno_de([0, 1, 2])

respuesta: valores[idx]
tipo: vf
enunciado: "Un ingeniero es contratado para {textos[idx]}. ¿Es esta una tarea típica de la Ingeniería Industrial?"

explicacion: |
  La Ingeniería Industrial se enfoca en la optimización de procesos, sistemas y recursos para mejorar la eficiencia — como optimizar una línea de producción. Diseñar un satélite es tarea de la Ingeniería Aeroespacial, y crear una prótesis es tarea de la Ingeniería Biomédica.
```

### 24 — El futuro de la medicina

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "salud"]

variables:
  datos: [["un sensor de glucosa implantable", "Biomédica"], ["un reactor nuclear", "Química"], ["un avión de carga", "Aeroespacial"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Biomédica", "Química", "Aeroespacial"]

enunciado: "Se requiere desarrollar un sensor de glucosa implantable que interactúe con el cuerpo humano. ¿Qué disciplina es la más adecuada para este desarrollo?"

explicacion: |
  La Ingeniería Biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones médicas.
```

### 25 — El viaje al espacio

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "ordenar"]

variables:
  pasos_orden: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

respuesta_orden: pasos_orden
tipo: ordenar
opciones_explicitas: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

enunciado: "Ordena cronológicamente las etapas lógicas para el desarrollo de un nuevo vehículo de exploración espacial:"

explicacion: |
  Primero se debe diseñar la aerodinámica, luego construir la estructura física y finalmente realizar el lanzamiento.
```
