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

variables:
  escenario_idx: uno_de([0, 1])

variables:
  datos: [
    ["transformación de materias primas en productos útiles mediante procesos químicos", "procesos químicos"],
    ["diseño de circuitos integrados y microchips", "procesos electrónicos"]
  ]

tipo: vf
enunciado: "La ingeniería química se centra en la transformación de materias primas en productos útiles mediante {datos[escenario_idx][0]}."

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
respuestas_validas: ["sistemas de máquinas", "sistemas de máquinas", "motores térmicos"]

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

respuesta: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

enunciado: "Ordena las siguientes disciplinas de acuerdo a su escala de aplicación, desde la que opera en el espacio exterior hasta la que aplica tecnología en el cuerpo humano:"

explicacion: |
  El orden solicitado va desde la escala macro/espacial (Aeroespacial) hacia la escala micro/biológica (Biomédica), pasando por sistemas de energía (Eléctrica) y sistemas físicos/mecánicos (Mecánica).
```