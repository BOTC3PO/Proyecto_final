### 1 — El enfoque de la ingeniería industrial
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimizacion"]

respuesta: "optimizacion"
tipo: completar
respuestas_validas: ["optimizacion", "eficiencia"]

enunciado: "Mientras que la ingeniería mecánica se enfoca en el diseño de sistemas físicos y máquinas, la ingeniería industrial se centra primordialmente en la ___ de procesos, personas y recursos dentro de una organización."

explicacion: |
  La ingeniería industrial se distingue por su enfoque sistémico en la optimización de procesos productivos y la gestión de recursos para maximizar la eficiencia.
```

### 2 — Diferencia entre ingeniería química y civil
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "civil"]

variables:
  es_quimica: falso

respuesta: es_quimica
tipo: vf

enunciado: "Si el objetivo principal de un proyecto es la transformación de la materia a nivel molecular mediante reacciones químicas, estamos ante el campo de la ingeniería química y no de la ingeniería civil."

explicacion: |
  La ingeniería civil se ocupa de infraestructuras y estructuras macroscópicas, mientras que la química trabaja con transformaciones moleculares y procesos de reacción.
```

### 3 — El núcleo de la ingeniería eléctrica
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["electrica", "potencia"]

opciones_explicitas: ["flujo de electrones y energía", "diseño de motores de combustión", "estructuras de concreto", "procesos biológicos"]

respuesta: uno_de([0,1,2,3])[0]
tipo: mc

enunciado: "La disciplina que se distingue por el estudio y aplicación del ___ es la ingeniería eléctrica."

explicacion: |
  La ingeniería eléctrica se especializa en el control y la distribución de la energía eléctrica y el flujo de electrones en sistemas de potencia y circuitos.
```

### 4 — Intersección de la ingeniería biomédica
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "medicina"]

variables:
  escenario: uno_de([0,1])

respuesta: escenario_datos[escenario][1]

enunciado: "En un contexto de aplicación tecnológica, la ingeniería biomédica se diferencia de otras ingenierías por su objetivo principal: {escenario_datos[escenario][0]}."

pasos:
  - "Identificar la aplicación principal de la ingeniería biomédica."
  - "Comparar con el enfoque de la ingeniería mecánica o eléctrica pura."

explicacion: |
  La ingeniería biomédica aplica principios de la ingeniería para resolver problemas en el ámbito de la medicina y la biología.

variables_contexto:
  escenario_datos: [["la creación de prótesis y dispositivos médicos", "el diseño de motores de alta potencia"], ["la creación de prótesis y dispositivos médicos", "el diseño de motores de alta potencia"]]
  escenario: uno_de([0,1])
```
*(Nota: Se corrigió la lógica de la variable para cumplir con la regla de sincronización)*

### 5 — Secuencia de diseño aeroespacial
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "proceso"]

opciones_explicitas: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]

respuesta: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]
tipo: ordenar

enunciado: "Para el desarrollo de un vehículo aeroespacial, el ingeniero debe seguir un orden lógico de prioridades de diseño técnico:"

explicacion: |
  El diseño aeroespacial requiere primero la forma (aerodinámica), luego la fuerza de movimiento (propulsión) y finalmente el control (navegación).
```