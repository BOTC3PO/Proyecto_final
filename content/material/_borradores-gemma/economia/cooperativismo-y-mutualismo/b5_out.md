### 1 — Identificación de la naturaleza jurídica
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "organizacion"]

variables:
  escenario: uno_de([["Un grupo de agricultores se une para comprar insumos por menor precio y vender su cosecha sin intermediarios", "cooperativa"], ["Un grupo de vecinos se une para prestar servicios de asistencia sanitaria y farmacia con fines de ayuda mutua", "mutual"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual"]

enunciado: "Un grupo de personas se organiza bajo el modelo de economía social. Si el objetivo principal es la gestión de servicios de ayuda mutua y asistencia, estamos ante una: ___"

explicacion: |
  Según la normativa, las cooperativas buscan satisfacer necesidades de sus socios mediante la explotación de una actividad económica, mientras que las mutuales se centran en la ayuda mutua y servicios de asistencia.
```

### 2 — Principios de gestión democrática
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

respuesta: verdadero
tipo: vf

enunciado: "En una organización cooperativa, el principio de 'una persona, un voto' implica que el poder de decisión es proporcional al capital aportado por cada socio."

explicacion: |
  Falso. El principio fundamental de las cooperativas es la gestión democrática: cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado.
```

### 3 — Elementos de la estructura asociativa
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["estructura", "socios"]

variables:
  datos: [["Asamblea de Socios", "Máximo órgano de decisión"], ["Consejo de Administración", "Órgano de gobierno y dirección"], ["Sindicatura", "Control de legalidad"]]

respuesta: "Asamblea de Socios"
tipo: completar
respuestas_validas: ["Asamblea de Socios", "Consejo de Administración", "Sindicatura"]

enunciado: "En la estructura de una cooperativa, el ___ es el órgano máximo de gobierno donde se toman las decisiones fundamentales por parte de los asociados."

explicacion: |
  La Asamblea de Socios es el órgano supremo donde se ejerce la soberanía de los miembros.
```

### 4 — Diferencia en el fin de lucro
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["fin_lucro", "economia_social"]

respuesta: falso
tipo: vf

enunciado: "Las entidades de la economía social, como cooperativas y mutuales, tienen como objetivo primordial la maximización de beneficios económicos para sus accionistas externos."

explicacion: |
  Falso. El fin es satisfacer necesidades de los asociados y promover el bienestar de la comunidad; no buscan el lucro para terceros, sino el beneficio de sus propios miembros.
```

### 5 — Proceso de formación de una cooperativa
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "pasos"]

respuesta: ["Reunión de interesados y definición de objeto social", "Redacción del contrato social y estatutos", "Inscripción en el registro de cooperativas"]
tipo: ordenar
opciones_explicitas: ["Redacción del contrato social y estatutos", "Reunión de interesados y definición de objeto social", "Inscripción en el registro de cooperativas", "Elección de autoridades"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa:"

explicacion: |
  Primero se define el objeto y los socios, luego se formaliza en un estatuto y finalmente se inscribe ante la autoridad de aplicación para obtener personería jurídica.
```