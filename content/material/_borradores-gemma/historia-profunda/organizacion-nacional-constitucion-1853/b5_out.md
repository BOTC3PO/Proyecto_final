### 1 — El sistema de gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["constitucion", "gobierno"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un ciudadano propone que el poder debe dividirse en Ejecutivo, Legislativo y Judicial para evitar abusos.", "división de poderes"], ["Un grupo de provincias exige que el gobierno central no interfiera en sus leyes locales.", "federalismo"]]

enunciado: "En el contexto de la organización nacional, si se observa que {datos[escenario_idx][0]}, el principio constitucional que se está aplicando es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["división de poderes", "federalismo"]

explicacion: |
  La Constitución de 1853 establece la división de poderes como base del sistema republicano para garantizar la libertad y evitar la tiranía.
```

### 2 — Relaciones internacionales
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["relaciones_exteriores", "soberania"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El Presidente firma un tratado con Francia para fomentar el comercio.", "relaciones_exteriores"], ["La Corte Suprema resuelve un conflicto entre dos provincias.", "jurisdiccion_federal"]]

enunciado: "Si el Poder Ejecutivo actúa en el marco de la facultad de concertar tratados con otras potencias, está ejerciendo la competencia de {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["relaciones_exteriores", "jurisdiccion_federal", "legislacion_provincial"]

explicacion: |
  Según el Art. 99, inciso 11, es facultad del Presidente de la Nación celebrar tratados con otras potencias extranjeras.
```

### 3 — Derechos Civiles
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["derechos", "libertad"]

variables:
  derecho_idx: uno_de([0, 1])
  derechos: [["La libertad de culto es garantizada por la Constitución.", "libertad_religiosa"], ["El derecho de transitar libremente por el territorio.", "libertad_transito"]]

enunciado: "La Constitución de 1853 garantiza que ___ de culto es un derecho fundamental."

respuesta: "libertad_religiosa"
tipo: completar
respuestas_validas: ["libertad_religiosa", "libertad_transito"]

explicacion: |
  El Art. 20 establece que la religión de culto de la nación es la católica, pero garantiza la libertad de culto a los habitantes.
```

### 4 — Organización Territorial
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["federalismo", "provincias"]

variables:
  provincia_idx: uno_de([0, 1])
  puntos: [["Las provincias conservan todo el poder no delegado a la Nación.", "autonomia"], ["El gobierno nacional tiene facultades delegadas por las provincias.", "delegacion"]]

enunciado: "En un sistema federal como el de 1853, las provincias mantienen su ___ sobre los poderes que no han sido expresamente delegados a la Nación."

respuesta: "autonomia"
tipo: mc
opciones_explicitas: ["autonomia", "delegacion", "soberania_total"]

explicacion: |
  El principio de autonomía provincial es clave: las provincias mantienen todo el poder que no han delegado al gobierno federal.
```

### 5 — Orden de jerarquía normativa
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["jerarquia", "leyes"]

enunciado: "Ordene la jerarquía de las normas en el orden correcto, desde la más importante a la menos importante, según el espíritu constitucional de 1853:"

pasos:
  - "Identificar la norma suprema."
  - "Identificar la norma que emana del Congreso."
  - "Identificar la norma de aplicación local."

respuesta: ["Constitución Nacional", "Leyes Nacionales", "Constituciones Provinciales"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Leyes Nacionales", "Constituciones Provinciales"]

explicacion: |
  La Constitución es la ley suprema; de ella emanan las leyes nacionales y, en el sistema federal, las constituciones provinciales deben adecuarse a la nacional.
```