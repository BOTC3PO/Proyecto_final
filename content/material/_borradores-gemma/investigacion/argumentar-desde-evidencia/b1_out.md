### 1 — Concepto de evidencia científica
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["definicion", "evidencia"]

respuesta: "datos"
tipo: completar
respuestas_validas: ["datos", "información empírica"]

enunciado: "Para construir un argumento científico sólido, es necesario apoyarse en ___ que permitan validar o refutar una hipótesis."

explicacion: |
  La evidencia en ciencia se compone de datos u observaciones sistemáticas que sirven de base para el razonamiento.
```

### 2 — La objeción en el debate científico
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["objecion", "debate"]

variables:
  escenario: uno_de([
    ["Un científico presenta un estudio sobre el cambio climático.", "una observación contradictoria"],
    ["Un investigador propone una nueva vacuna.", "un estudio que muestra efectos secundarios"],
    ["Un biólogo afirma que una especie está en peligro.", "un censo que muestra población estable"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["una observación contradictoria", "un estudio que muestra efectos secundarios", "un censo que muestra población estable"]

enunciado: "Si un investigador presenta una conclusión, la respuesta a una ___ es un componente clave del proceso de refutación o validación científica."

pasos:
  - "Identificar la conclusión del argumento original."
  - "Analizar la naturaleza de la objeción presentada."
  - "Buscar evidencia que responda directamente a esa objeción."

explicacion: |
  Una objeción es un argumento o dato que desafía la validez de una conclusión previa; responderle con evidencia es la base de la argumentación científica.
```

### 3 — Veracidad de la evidencia
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["veracidad", "booleano"]

respuesta: verdadero

tipo: vf

enunciado: "¿Es suficiente presentar una opinión personal para defender una conclusión científica ante una objeción?"

explicacion: |
  Falso. En la ciencia, la opinión no constituye evidencia; se requieren datos, mediciones o hechos verificables.
```

### 4 — Componentes de un argumento sólido
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumentacion"]

respuesta: ["Premisa", "Evidencia", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa", "Evidencia", "Conclusión", "Opinión", "Duda"]

enunciado: "Ordene los elementos de un argumento científico estándar, desde el punto de partida hasta el cierre lógico:"

explicacion: |
  Un argumento científico parte de una premisa (afirmación), se sostiene mediante evidencia (datos) y culmina en una conclusión lógica.
```

### 5 — El rol de la evidencia ante la objeción
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["defensa", "argumentacion"]

variables:
  caso: uno_de([
    ["La hipótesis es falsa", "la evidencia es insuficiente"],
    ["La conclusión es correcta", "los datos son erróneos"],
    ["El método es válido", "la muestra es sesgada"]
  ])

respuesta: caso[1]

tipo: mc
opciones_explicitas: ["la evidencia es insuficiente", "los datos son erróneos", "la muestra es sesgada"]

enunciado: "Cuando se enfrenta una objeción que cuestiona la validez de un dato, la defensa más efectiva consiste en demostrar que ___."

explicacion: |
  Si la objeción ataca la calidad de la información, la defensa debe centrarse en la robustez y representatividad de los datos utilizados.
```