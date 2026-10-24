### 1 — El modelo de transmisión
```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

variables:
  escenario: uno_de([["Un locutor de radio emite una noticia", "emisor"], ["Un cartel publicitario en la calle", "mensaje"], ["Un televisor encendido en una plaza", "canal"]])
  idx: uno_de([0,1,2])

enunciado: "En el modelo de transmisión (funcionalista), si nos enfocamos en el elemento que codifica y envía la información, estamos hablando del {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["emisor", "mensaje", "canal"]

explicacion: |
  El modelo de transmisión de Shannon y Weaver se centra en la linealidad: un emisor envía un mensaje a través de un canal hacia un receptor.
```

### 2 — La influencia de los medios
```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "ideologia", "teoria_critica"]

variables:
  caso: uno_de([["Un programa de noticias que omite protestas sociales", "manipulacion"], ["Un anuncio que promueve el consumismo extremo", "hegemonia"]])
  idx: uno_de([0,1])

enunciado: "Desde la Teoría Crítica, el uso de los medios para mantener estructuras de poder o imponer una visión del mundo se asocia con el concepto de {caso[idx][0]}."

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["manipulacion", "hegemonia", "neutralidad"]

explicacion: |
  La Teoría Crítica analiza cómo los medios pueden funcionar como instrumentos de dominación ideológica y control social.
```

### 3 — La audiencia activa
```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "avanzado"
  tags: ["audiencia", "decodificacion", "subcultura"]

variables:
  situacion: uno_de([["Un espectador que ve un comercial y lo usa para criticar al sistema", "lectura_negociada"], ["Un espectador que acepta el mensaje sin cuestionar", "lectura_dominante"]])
  idx: uno_de([0,1])

enunciado: "Según los Estudios Culturales, si un individuo recibe un mensaje pero lo reinterpreta según su propio contexto cultural, está realizando una ___."

respuesta: situacion[idx][1]
tipo: completar
respuestas_validas: ["lectura_negociada", "lectura_dominante"]

explicacion: |
  A diferencia del funcionalismo, los Estudios Culturales sostienen que la audiencia no es pasiva, sino que decodifica los mensajes de forma activa y diversa.
```

### 4 — Evolución de los enfoques
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "basico"
  tags: ["historia", "teoria"]

variables:
  orden_teorias: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]

enunciado: "Ordena cronológicamente las corrientes de la comunicación, desde la más centrada en el proceso técnico hasta la más centrada en la interpretación social."

respuesta: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]
tipo: ordenar
opciones_explicitas: ["Modelo de transmisión", "Teoría Crítica", "Estudios Culturales"]

explicacion: |
  La evolución parte de la visión técnica (transmisión), pasa por la visión sociopolítica (teoría crítica) y llega a la visión cultural/subjetiva (estudios culturales).
```

### 5 — Verdad o Falso: El receptor pasivo
```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "basico"
  tags: ["audiencia", "pasividad"]

enunciado: "En la perspectiva de los Estudios Culturales, se considera que la audiencia es un receptor pasivo que solo recibe estímulos sin capacidad de interpretación."

respuesta: falso
tipo: vf

explicacion: |
  Falso. Los Estudios Culturales proponen precisamente lo contrario: la audiencia es un agente activo que negocia significados.
```