### 1 — El modelo de transmisión
```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

enunciado: "En el modelo de transmisión (Shannon y Weaver), si un emisor envía un mensaje a un receptor a través de un canal con ruido, el proceso se describe como una línea directa donde el objetivo es la eficacia de la transmisión. ¿Es este modelo considerado un modelo lineal?"

respuesta: verdadero
tipo: vf

explicacion: |
  El modelo de transmisión se centra en la eficacia del envío de información desde un origen a un destino, asumiendo una estructura lineal de comunicación.
```

### 2 — El poder de los medios
```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "hegemonia", "teoria_critica"]

variables:
  escenario: uno_de([
    ["Un conglomerado mediático decide la agenda política de un país", "control"],
    ["Un programa de TV refuerza estereotipos de clase para mantener el status quo", "control"]
  ])

enunciado: "Desde la perspectiva de la Teoría Crítica, si ocurre que {escenario[0]}, el medio está ejerciendo una función de ___ sobre la sociedad."

pasos:
  - "Identificar la relación entre el medio y la estructura de poder."
  - "Determinar si el medio actúa como herramienta de dominación o de liberación."

respuestas_validas: ["control"]
respuesta: escenario[1]
tipo: completar

explicacion: |
  La Teoría Crítica sostiene que los medios no son neutrales, sino instrumentos de poder que pueden perpetuar la hegemonía de ciertos grupos sociales.
```

### 3 — La audiencia activa
```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "intermedio"
  tags: ["audiencia", "decodificacion", "estudios_culturales"]

enunciado: "En los Estudios Culturales, se postula que la audiencia no es un receptor pasivo. Si un espectador ve un anuncio publicitario y decide ignorar su mensaje por considerarlo falso, está realizando una interpretación activa. ¿Cuál es la postura de los Estudios Culturales frente a la audiencia?"

opciones_explicitas: ["Pasiva y receptiva", "Activa e interpretativa", "Meramente técnica", "Inexistente"]
respuesta: "Activa e interpretativa"
tipo: mc

explicacion: |
  A diferencia del funcionalismo, los Estudios Culturales enfatizan que los receptores decodifican los mensajes según su contexto cultural y posición social.
```

### 4 — Evolución de las corrientes
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "avanzado"
  tags: ["ordenar", "historia_comunicacion"]

enunciado: "Ordene cronológicamente las corrientes de la comunicación, desde la visión más centrada en el mensaje/efecto hacia la visión más centrada en el contexto/cultura."

opciones_explicitas: ["Funcionalismo (Transmisión)", "Teoría Crítica (Poder)", "Estudios Culturales (Interpretación)"]
respuesta: ["Funcionalismo (Transmisión)", "Teoría Crítica (Poder)", "Estudios Culturales (Interpretación)"]
tipo: ordenar

explicacion: |
  La evolución parte de la preocupación por la transmisión técnica (Funcionalismo), pasa por la crítica a la ideología mediática (Teoría Crítica) y llega a la complejidad de la recepción cultural (Estudios Culturales).
```

### 5 — El efecto de los medios
```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "basico"
  tags: ["efecto", "teoria_critica"]

enunciado: "En la Teoría Crítica, se analiza cómo los medios pueden actuar como herramientas para mantener la estructura de poder establecida. ¿Es la comunicación un proceso neutral y sin implicancias políticas según esta corriente?"

respuesta: falso
tipo: vf

explicacion: |
  Para la Teoría Crítica, toda comunicación está atravesada por intereses de clase y estructuras de poder, por lo que la neutralidad es una ilusión.
```