### 1 — ¿Qué es una galaxia?
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["definicion", "astronomia"]

tipo: mc
opciones_explicitas: ["Un conjunto de planetas que orbitan una estrella", "Un sistema masivo de estrellas, gas, polvo y materia oscura unidos por la gravedad", "Un cúmulo de agujeros negros en el centro del universo", "Una nube de gas que colapsa para formar una estrella"]

enunciado: "En términos astronómicos, ¿qué constituye fundamentalmente una galaxia?"

explicacion: |
  Una galaxia es un sistema masivo que contiene estrellas, gas, polvo y una gran cantidad de materia oscura, todo mantenido unido por la fuerza de la gravedad.
```

### 2 — Nuestra galaxia
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["via_lactea", "ubicacion"]

tipo: completar
respuestas_validas: ["Vía Láctea", "Andrómeda", "Sagitario"]

enunciado: "El nombre de nuestra galaxia, el sistema donde se encuentra el Sistema Solar, es la ___."

explicacion: |
  Nosotros habitamos la Vía Láctea, una galaxia de tipo espiral.
```

### 3 — Componentes galácticos
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["componentes", "gravedad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["estrellas", "gas", "polvo", "materia oscura"],
    ["estrellas", "planetas", "luna", "satélites"]
  ]

tipo: mc
opciones_explicitas: ["Solo estrellas y planetas", "Estrellas, gas, polvo y materia oscura", "Solo materia oscura y agujeros negros", "Solo gas y polvo estelar"]

enunciado: "Considerando los componentes de una galaxia según el escenario {datos[escenario_idx][0]}, {datos[escenario_idx][1]} y {datos[escenario_idx][2]}, ¿cuál es el cuarto elemento esencial que aporta la mayor parte de la masa?"

explicacion: |
  La materia oscura es un componente fundamental que no emite luz pero ejerce la gravedad necesaria para mantener la estructura galáctica.
```

### 4 — Escala de la materia
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Planeta", "Sistema Solar", "Galaxia", "Universo"]

enunciado: "Ordena los siguientes objetos astronómicos de menor a mayor escala jerárquica:"

explicacion: |
  La jerarquía correcta va desde el cuerpo celeste individual (planeta), pasando por su sistema de órbitas, el conjunto de sistemas (galaxia), hasta la totalidad del cosmos (universo).
```

### 5 — La fuerza de unión
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["gravedad", "fuerzas"]

tipo: input
tolerancia_abs: 0

enunciado: "La fuerza fundamental que mantiene unidos a los componentes de una galaxia (estrellas, gas, polvo) es la ___."

pasos:
  - "Identificar la fuerza que actúa a escala macroscópica en el espacio."

explicacion: |
  La gravedad es la fuerza de atracción que permite que la materia se agrupe en estructuras masivas como las galaxias.
```