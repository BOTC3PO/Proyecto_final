### 1 — El diseño de una estructura
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "estructuras"]

enunciado: "Un equipo debe diseñar el esqueleto de un puente colgante para soportar el peso de camiones pesados. El profesional encargado de calcular las cargas, la resistencia de los materiales y la estabilidad de la estructura es el ingeniero ___."

respuestas_validas: ["civil"]
tipo: completar

explicacion: |
  La ingeniería civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, carreteras y edificios.
```

### 2 — Optimización de procesos
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["optimizar la línea de ensamblaje de una fábrica de autos", "reducir costos de producción"],
    ["gestionar el flujo de inventario en un centro logístico", "mejorar la eficiencia de la cadena de suministro"]
  ]

enunciado: "Un profesional es contratado para {escenarios[escenario_idx][0]} con el fin de {escenarios[escenario_idx][1]}. ¿Qué disciplina está aplicando principalmente?"

opciones_explicitas: ["Mecánica", "Industrial", "Química", "Eléctrica"]
respuesta: "Industrial"
tipo: mc

explicacion: |
  La ingeniería industrial se enfoca en la optimización de sistemas complejos, procesos y recursos para mejorar la productividad.
```

### 3 — Propulsión y vuelo
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

### 4 — El proceso de refinación
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["quimica", "procesos"]

variables:
  reaccion_idx: uno_de([0, 1])
  reacciones: [
    ["la conversión de petróleo crudo en gasolina", "la producción de polímeros a partir de gas natural"],
    ["la obtención de fertilizantes mediante procesos térmicos", "la síntesis de fármacos complejos"]
  ]

enunciado: "Para llevar a cabo {reacciones[reaccion_idx][0]}, se requiere un ingeniero que comprenda las transformaciones moleculares y las reacciones termodinámicas. Este es un ingeniero ___."

respuestas_validas: ["químico"]
tipo: completar

explicacion: |
  La ingeniería química utiliza procesos químicos, físicos y biológicos para transformar materias primas en productos útiles a gran escala.
```

### 5 — El ciclo de vida de un dispositivo médico
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["biomedica", "ordenar"]

enunciado: "Para desarrollar un brazo robótico controlado por señales neuronales, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
respuesta: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
tipo: ordenar

explicacion: |
  La ingeniería biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones tecnológicas aplicadas a la salud.
```