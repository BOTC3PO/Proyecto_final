### 1 — El concepto de brecha digital
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["brecha_digital", "desigualdad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas: ["brecha digital"]

enunciado: "El término que describe la desigualdad en el acceso, uso y capacidades para utilizar las Tecnologías de la Información y la Comunicación (TIC) se denomina ___."

explicacion: |
  La brecha digital no solo se refiere a la falta de infraestructura física (hardware/conexión), sino también a la falta de habilidades digitales (brecha de uso) y de calidad en el aprovechamiento de la información.
```

### 2 — Dimensiones de la brecha digital
```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["dimensiones", "tecnologia"]

variables:
  escenario: uno_de([
    ["Acceso", "Brecha de acceso"],
    ["Uso", "Brecha de uso"],
    ["Competencia", "Brecha de competencias"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Brecha de acceso", "Brecha de uso", "Brecha de competencias"]

enunciado: "Cuando una persona tiene un dispositivo y conexión, pero no posee las habilidades cognitivas para navegar de forma crítica o productiva en la red, estamos ante una: {escenario[0]}."

explicacion: |
  La brecha de uso o de competencias se refiere a la capacidad real de transformar la información digital en conocimiento útil, independientemente de tener o no el dispositivo.
```

### 3 — Impacto de la globalización digital
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["globalizacion", "desarrollo"]

variables:
  caso: uno_de([
    ["País en desarrollo", "aumenta la desigualdad"],
    ["País desarrollado", "se consolida su ventaja"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["aumenta la desigualdad", "se consolida su ventaja"]

enunciado: "En el contexto de la globalización digital, la asimetría tecnológica suele provocar que, mientras en un {caso[0]} la brecha puede profundizar las desigualdades socioeconómicas, en un {caso[1]} la ventaja competitiva se consolide."

explicacion: |
  La globalización digital puede actuar como un motor de desarrollo o como un mecanismo de exclusión, dependiendo de la capacidad de integración tecnológica de cada nación.
```

### 4 — Factores de exclusión
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["factores", "sociedad"]

respuesta: 2
tipo: mc
opciones_explicitas: ["Geográfica", "Económica", "Social", "Todas las anteriores"]

enunciado: "¿Cuál de los siguientes factores es un determinante clave en la creación de la brecha digital?"

pasos:
  - "Analizar la infraestructura disponible en la zona."
  - "Considerar el poder adquisitivo de la población."
  - "Evaluar el nivel educativo y acceso a servicios básicos."

explicacion: |
  La brecha digital es un fenómeno multidimensional que involucra factores geográficos (zonas rurales vs urbanas), económicos (costo de equipos/datos) y sociales (educación).
```

### 5 — Orden de la evolución de la brecha
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["evolucion", "historia"]

respuesta: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]
tipo: ordenar
opciones_explicitas: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]

enunciado: "Ordena cronológicamente las etapas en las que se ha manifestado la brecha digital a medida que la tecnología avanzaba en la sociedad global:"

explicacion: |
  Primero la brecha se centraba en la existencia de cables y redes (infraestructura), luego en quién podía pagar el servicio (acceso), después en quién sabía usarlo (uso) y finalmente en quién puede generar valor con ello (apropiación).
```