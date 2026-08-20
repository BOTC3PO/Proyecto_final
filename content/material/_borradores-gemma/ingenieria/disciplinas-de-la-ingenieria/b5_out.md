### 1 — El diseño de un nuevo motor
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "motores"]

variables:
  escenario: uno_de([["diseño de engranajes y pistones", "Mecánica"], ["diseño de circuitos de encendido", "Eléctrica"], ["diseño de sistemas de combustible", "Química"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica", "Eléctrica", "Química"]

enunciado: "Un ingeniero está trabajando en el diseño de un nuevo motor de combustión interna, enfocándose específicamente en el movimiento de los engranajes y pistones. ¿Qué disciplina lidera este trabajo?"

explicacion: |
  El diseño de sistemas mecánicos, movimiento y máquinas es el campo principal de la Ingeniería Mecánica.
```

### 2 — Infraestructura urbana
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "construccion"]

variables:
  escenario: uno_de([["puentes y túneles", "Civil"], ["procesos de refinación", "Química"], ["redes de distribución", "Eléctrica"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][0]
tipo: completar
respuestas_validas: ["Civil", "Química", "Eléctrica"]

enunciado: "El proyecto consiste en la construcción de ___ y túneles para mejorar la conectividad de una ciudad."

explicacion: |
  La Ingeniería Civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, túneles y carreteras.
```

### 3 — Optimización de procesos
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "logistica"]

variables:
  escenario: uno_de([["optimizar una línea de producción", "Industrial"], ["diseñar un satélite", "Aeroespacial"], ["crear una prótesis", "Biomédica"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][0]
tipo: vf

enunciado: "Un ingeniero es contratado para optimizar una línea de producción en una fábrica de automóviles para reducir desperdicios y tiempos de espera. ¿Es esta una tarea típica de la Ingeniería Industrial?"

explicacion: |
  Verdadero. La Ingeniería Industrial se enfoca en la optimización de procesos, sistemas y recursos para mejorar la eficiencia.
```

### 4 — El futuro de la medicina
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "salud"]

variables:
  escenario: uno_de([["un sensor de glucosa implantable", "Biomédica"], ["un reactor nuclear", "Química"], ["un avión de carga", "Aeroespacial"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["Biomédica", "Química", "Aeroespacial"]

enunciado: "Se requiere desarrollar un sensor de glucosa implantable que interactúe con el cuerpo humano. ¿Qué disciplina es la más adecuada para este desarrollo?"

explicacion: |
  La Ingeniería Biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones médicas.
```

### 5 — El viaje al espacio
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "ordenar"]

variables:
  pasos_orden: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

respuesta: pasos_orden
tipo: ordenar
opciones_explicitas: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

enunciado: "Ordena cronológicamente las etapas lógicas para el desarrollo de un nuevo vehículo de exploración espacial:"

explicacion: |
  Primero se debe diseñar la aerodinámica, luego construir la estructura física y finalmente realizar el lanzamiento.
```