### 1 — El objeto de estudio del Psicoanálisis
```
metadata:
  materia: "psicologia"
  tema: "psicoanalisis"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas: ["inconsciente"]

enunciado: "A diferencia de la psicología de la conciencia, el psicoanálisis postula que la mayor parte de la actividad mental ocurre en el ___."

explicacion: |
  El psicoanálisis, fundado por Freud, se centra en los procesos mentales que no son accesibles a la conciencia inmediata, denominándolos procesos inconscientes.
```

### 2 — El enfoque del Conductismo
```
metadata:
  materia: "psicologia"
  tema: "conductismo"
  nivel: "basico"
  tags: ["conductismo", "conducta"]

variables:
  es_conductismo: verdadero

respuesta: es_conductismo
tipo: vf

enunciado: "El conductismo radical se distingue de otras corrientes por centrarse exclusivamente en la conducta observable, rechazando el estudio de los procesos mentales internos como objeto de la psicología científica."

explicacion: |
  El conductismo (especialmente el de Watson) sostiene que para que la psicología sea una ciencia objetiva, debe limitarse al estudio de la conducta observable y su relación con el entorno, evitando la introspección.
```

### 3 — Diferencias entre Humanismo y Psicoanálisis
```
metadata:
  materia: "psicologia"
  tema: "humanismo"
  nivel: "intermedio"
  tags: ["humanismo", "psicoanalisis", "comparacion"]

variables:
  escenario: uno_de([
    ["visión determinista del pasado", "visión optimista del potencial humano"],
    ["énfasis en la patología", "énfasis en el crecimiento personal"],
    ["foco en los impulsos reprimidos", "foco en la autorrealización"]
  ])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: [escenario[0][0], escenario[0][1]]

enunciado: "Mientras que el psicoanálisis suele tener una visión determinista basada en los conflictos del pasado, el humanismo se distingue por una ___."

explicacion: |
  El humanismo (Rogers, Maslow) se enfoca en la capacidad del individuo para el crecimiento y la autorrealización, contrastando con el enfoque clínico-patológico del psicoanálisis.
```

### 4 — El procesamiento de información en el Cognitivismo
```
metadata:
  materia: "psicologia"
  tema: "cognitivismo"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora-computacional"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas: ["procesamiento de información"]

enunciado: "El cognitivismo se diferencia del conductismo al proponer que entre el estímulo y la respuesta existen procesos mentales complejos, utilizando la metáfora del ___."

explicacion: |
  La psicología cognitiva utiliza la analogía de la computadora para explicar cómo la mente recibe, codifica, almacena y recupera información.
```

### 5 — Evolución de la Psicología: Del Conductismo al Cognitivismo
```
metadata:
  materia: "psicologia"
  tema: "evolucion_corrientes"
  nivel: "avanzado"
  tags: ["historia", "conductismo", "cognitivismo"]

respuesta: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]
tipo: ordenar
opciones_explicitas: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]

enunciado: "Ordene cronológicamente el predominio de estas corrientes/enfoques en la psicología científica, desde el inicio del siglo XX hasta la actualidad:"

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; la revolución cognitiva surgió en los años 50-60; y la neurociencia cognitiva es el enfoque contemporáneo que integra procesos mentales con bases biológicas.
```