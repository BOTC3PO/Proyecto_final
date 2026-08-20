### 1 — El inicio de la dictadura
```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "dictadura", "1976"]

respuesta: "24 de marzo de 1976"
tipo: completar
respuestas_validas: ["24 de marzo de 1976"]

enunciado: "El golpe de Estado que dio inicio a la última dictadura militar en Argentina ocurrió el día ___."

explicacion: |
  El 24 de marzo de 1976 se produjo el golpe de Estado que instauró un proceso de autodenominado 'Reorganización Nacional', marcando el inicio del período dictatorial más prolongado y violento de la historia argentina reciente.
```

### 2 — Características del proceso
```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["derechos_humanos", "terrorismo_de_estado"]

opciones_explicitas: ["Violación sistemática de derechos humanos", "Retorno inmediato a la democracia", "Estabilidad económica sostenida", "Pluralismo político"]

respuesta: "Violación sistemática de derechos humanos"
tipo: mc

enunciado: "Una de las características centrales y más graves del proceso de la última dictadura militar (1976-1983) fue la:"

explicacion: |
  El Estado implementó un plan sistemático de represión que incluyó la desaparición forzada de personas, la tortura y el robo de bebés, constituyendo un crimen de lesa humanidad.
```

### 3 — Cronología de la dictadura
```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

variables:
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Fin de la dictadura militar", "Guerra de Malvinas", "Retorno a la democracia"]

enunciado: "Ordená cronológicamente los siguientes hitos relacionados con el período 1976-1983:"

pasos:
  - "Identificar el año de inicio del golpe."
  - "Identificar el año del fin del proceso dictatorial."

explicacion: |
  El proceso comenzó en 1976 y finalizó en 1983, tras la derrota en la Guerra de Malvinas y la crisis del régimen.
```

*(Nota: Para la pregunta 3, debido a la estructura del DSL para 'ordenar', se asume que el usuario debe ordenar los elementos de la lista `opciones_explicitas` para que coincidan con la secuencia histórica real. Para cumplir con la lógica de la instrucción de 'ordenar' donde la respuesta es la lista completa en orden correcto, reestructuraré para asegurar validez técnica).*

### 3 — Cronología de la dictadura (Corregida)
```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

respuesta: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]

enunciado: "Ordená cronológicamente los eventos del período dictatorial:"

explicacion: |
  El orden correcto es: Inicio del golpe (1976), Guerra de Malvinas (1982) y Fin de la dictadura (1983).
```

### 4 — El concepto de terrorismo de Estado
```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["conceptos", "derechos_humanos"]

variables:
  escenario: uno_de([0,1])
  datos: [["El uso de la estructura estatal para la represión ilegal", "terrorismo de Estado"], ["La participación en elecciones libres", "democracia representativa"]]

respuesta: datos[escenario][1]
tipo: mc
opciones_explicitas: ["terrorismo de Estado", "democracia representativa"]

enunciado: "Cuando el Estado utiliza sus instituciones y fuerzas de seguridad para cometer delitos contra la población, como la desaparición de personas, se denomina:"

explicacion: |
  El término 'terrorismo de Estado' describe la acción de los gobiernos de facto para sembrar terror en la sociedad mediante la represión sistemática.
```

### 5 — Duración del proceso
```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["duracion", "fechas"]

respuesta: 7
tipo: input
tolerancia_abs: 0

enunciado: "Si la última dictadura militar en Argentina duró desde 1976 hasta 1983, ¿cuántos años duró aproximadamente este proceso de interrupción democrática?"

explicacion: |
  El proceso duró 7 años, desde el golpe de 1976 hasta la asunción de la presidencia de Raúl Alfonsín en 1983.
```