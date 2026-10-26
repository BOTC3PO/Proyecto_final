### 1 — ¿Qué es el vacío para la luz?
```
metadata:
  materia: "fisica"
  tema: "onda_electromagnetica"
  nivel: "basico"
  tags: ["luz", "vacío", "propagación"]

respuesta: verdadero
tipo: vf

enunciado: "La luz puede propagarse a través del vacío sin necesidad de un medio material (como el aire o el agua)."

explicacion: |
  A diferencia de las ondas mecánicas (como el sonido), las ondas electromagnéticas como la luz consisten en campos eléctricos y magnéticos oscilantes que se auto-propagan en el vacío.
```

### 2 — Orden de las longitudes de onda
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["orden", "espectro", "longitud_de_onda"]

variables:
  orden_idx: uno_de([0, 1])

opciones_explicitas:
  - ["Ondas de radio", "Microondas", "Luz visible", "Rayos X"]
  - ["Rayos X", "Luz visible", "Microondas", "Ondas de radio"]

respuesta: ["Ondas de radio", "Microondas", "Luz visible", "Rayos X"]
tipo: ordenar

enunciado: "Ordena las siguientes radiaciones de la que tiene mayor longitud de onda a la que tiene menor longitud de onda:"

pasos:
  - "Identifica la radiación con mayor longitud de onda (menor frecuencia)."
  - "Identifica la radiación con menor longitud de onda (mayor frecuencia)."

explicacion: |
  En el espectro electromagnético, la longitud de onda es inversamente proporcional a la energía. Las ondas de radio tienen longitudes de onda kilométricas, mientras que los rayos X tienen longitudes de onda atómicas.
```

### 3 — El error de la velocidad de la luz
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["velocidad", "luz", "vacío"]

variables:
  caso: uno_de([0, 1])

enunciado: "Si la luz viaja por un medio transparente como el vidrio, su velocidad es ___ que la velocidad de la luz en el vacío ($c$)."

opciones_explicitas:
  - "mayor"
  - "menor"

respuesta: ["menor"][caso]
tipo: mc

explicacion: |
  Aunque la luz viaja a su velocidad máxima en el vacío, al interactuar con los átomos de un medio material (como el vidrio o el agua), su velocidad efectiva disminuye. Esto es lo que da origen al índice de refracción.
```

### 4 — El color de la luz visible
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["color", "visible", "frecuencia"]

variables:
  color_idx: uno_de([0, 1])

enunciado: "Dentro del espectro visible, el color que posee la mayor frecuencia (y por lo tanto la mayor energía por fotón) es el ___."

opciones_explicitas:
  - "rojo"
  - "violeta"

respuesta: ["violeta"][color_idx]
tipo: mc

explicacion: |
  El espectro visible va desde el rojo (baja frecuencia, larga longitud de onda) hasta el violeta (alta frecuencia, corta longitud de onda).
```

### 5 — Relación frecuencia y energía
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["frecuencia", "energía", "rayos_gamma"]

variables:
  tipo_ionizante: uno_de([0, 1])

enunciado: "Los rayos gamma tienen una frecuencia extremadamente ___ que la luz visible, lo que les permite ser altamente ionizantes."

opciones_explicitas:
  - "alta"
  - "baja"

respuesta: ["alta"][tipo_ionizante]
tipo: mc

explicacion: |
  La energía de un fotón es directamente proporcional a su frecuencia ($E = h \cdot f$). Por eso, los rayos gamma, al tener frecuencias altísimas, tienen una energía capaz de arrancar electrones de los átomos.
```