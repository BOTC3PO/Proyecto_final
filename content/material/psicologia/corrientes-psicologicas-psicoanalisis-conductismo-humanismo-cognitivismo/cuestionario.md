# Psicologia — Corrientes psicologicas psicoanalisis conductismo humanismo cognitivismo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El enfoque del inconsciente

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "psicoanalisis"
tipo: completar
respuestas_validas:
  - "psicoanalisis"

enunciado: "La corriente psicológica que postula la existencia de procesos mentales inconscientes que determinan la conducta humana se denomina ___."

explicacion: |
  El psicoanálisis, fundado por Sigmund Freud, sostiene que gran parte de nuestra conducta está impulsada por deseos, recuerdos y conflictos alojados en el inconsciente.
```

### 2 — El objeto de estudio del conductismo

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "estímulo", "respuesta"]

respuesta: "estímulo"
tipo: mc
opciones_explicitas: ["estímulo", "respuesta", "pensamiento", "emoción"]

enunciado: "En el conductismo radical, la unidad básica de análisis es la relación entre un ___ y una respuesta observada."

explicacion: |
  El conductismo se centra en la conducta observable y la relación entre un estímulo (E) y una respuesta (R), dejando de lado los procesos mentales internos por no ser medibles.
```

### 3 — El enfoque centrado en la autorrealización

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "autorrealizacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿El humanismo psicológico se caracteriza por centrarse en el potencial de crecimiento personal y la autorrealización del individuo?"

explicacion: |
  A diferencia de otras corrientes, el humanismo (Maslow, Rogers) tiene una visión positiva del ser humano, enfocándose en su capacidad de alcanzar su máximo potencial.
```

### 4 — Procesamiento de la información

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora", "computación"]

respuesta: "metáfora del ordenador"
tipo: completar
respuestas_validas:
  - "metáfora del ordenador"
  - "metáfora de la máquina"
enunciado: "El cognitivismo utiliza la ___ para explicar cómo la mente recibe, codifica, almacena y recupera la información."

explicacion: |
  La psicología cognitiva surge con la idea de que la mente funciona de manera análoga a un procesador de información, utilizando la metáfora del ordenador.
```

### 5 — Evolución de las corrientes

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta_orden: ["conductismo", "humanismo", "cognitivismo"]
tipo: ordenar
opciones_explicitas: ["conductismo", "humanismo", "cognitivismo"]

enunciado: "Ordena cronológicamente estas corrientes según su predominio o surgimiento principal en la historia de la psicología moderna (del más antiguo al más reciente):"

pasos:
  - "Identifica el predominio del conductismo en la primera mitad del siglo XX."
  - "Considera el auge del enfoque humanista como la 'tercera fuerza' a mediados de siglo."
  - "Ubica la revolución cognitiva consolidándose en los años 60."

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; el humanismo se consolidó a mediados de siglo como la 'tercera fuerza' alternativa al psicoanálisis y al conductismo; y el cognitivismo tomó el relevo con la revolución cognitiva de los años 60.
```

### 6 — El caso de la fobia al desorden

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "condicionamiento"]

variables:
  escenario: uno_de([["Un niño asocia el sonido de un timbre con un pinchazo en el brazo.", "condicionamiento_clasico"], ["Un estudiante estudia solo cuando hay silencio absoluto para evitar distracciones.", "condicionamiento_operante"], ["Un perro saliva al escuchar una campana porque la asocia con la comida que recibirá después.", "condicionamiento_clasico"]])

enunciado: "En el caso de que {escenario[0]}, estamos ante un ejemplo de {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["condicionamiento_clasico", "condicionamiento_operante", "procesos_inconscientes"]

explicacion: |
  El conductismo clásico (Pavlov) se centra en la asociación de estímulos, mientras que el operante (Skinner) se centra en la consecuencia de la conducta.
```

### 7 — El análisis del síntoma inconsciente

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva del psicoanálisis, un síntoma como un olvido repentino de un nombre importante puede ser interpretado como una manifestación de un deseo o conflicto reprimido en el inconsciente."

explicacion: |
  El psicoanálisis postula que gran parte de la conducta humana está determinada por procesos inconscientes y conflictos no resueltos.
```

### 8 — El proceso de procesamiento de información

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora_computacional"]

variables:
  ejemplo_cognitivo: uno_de([["La forma en que una persona interpreta un gesto de un amigo como un insulto.", "interpretacion"], ["La forma en que un conductor procesa señales de tráfico para evitar un choque.", "procesamiento"]])

enunciado: "En el modelo del cognitivismo, la mente es comparada con una computadora. Si analizamos {ejemplo_cognitivo[0]}, nos centramos en el ___ de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas:
  - "procesamiento"

explicacion: |
  El cognitivismo estudia los procesos mentales internos (percepción, memoria, lenguaje) como flujos de información similares al procesamiento de datos.
```

### 9 — La jerarquía de necesidades en un paciente

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

variables:
  caso_humanista: uno_de([["Un paciente busca terapia para alcanzar su máximo potencial personal.", "autorrealizacion"], ["Un paciente busca terapia para sentirse aceptado y formar vínculos significativos con otros.", "pertenencia"]])

enunciado: "Según el enfoque humanista, si el objetivo principal de una persona es {caso_humanista[0]}, está buscando la ___."

respuesta: caso_humanista[1]
tipo: completar
respuestas_validas:
  - "autorrealizacion"
  - "pertenencia"

explicacion: |
  El humanismo se enfoca en la autorrealización y el crecimiento personal, viendo al individuo como alguien con tendencia innata hacia la plenitud.
```

### 10 — El método de análisis de una conducta

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["metodologia", "comparativa"]

enunciado: "Para realizar un estudio clínico, un psicólogo debe seguir una secuencia lógica de pasos. Ordena los siguientes elementos según el enfoque conductista: 1. Estímulo, 2. Respuesta, 3. Consecuencia."

respuesta_orden: ["Estímulo", "Respuesta", "Consecuencia"]
tipo: ordenar
opciones_explicitas: ["Estímulo", "Respuesta", "Consecuencia"]

explicacion: |
  El modelo conductista se basa en la secuencia E-R-C (Estímulo-Respuesta-Consecuencia).
```

### 11 — El objeto de estudio del Psicoanálisis

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "concepto"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas:
  - "inconsciente"

enunciado: "A diferencia de otras corrientes que se centran en la conducta observable, el psicoanálisis postula que el motor principal de la conducta humana son los procesos del ___."

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la mayor parte de nuestra vida mental ocurre en el inconsciente, influyendo en nuestras decisiones y emociones sin que nos demos cuenta.
```

### 12 — Conductismo vs. Cognitivismo

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["conductismo", "cognitivismo"]

respuesta: falso
tipo: vf
enunciado: "Un psicólogo conductista clásico se centraría exclusivamente en los procesos mentales internos (como el pensamiento o la memoria) para explicar la conducta, ignorando el estímulo y la respuesta. ¿Es correcta esta afirmación?"

explicacion: |
  Falso. El conductismo se centra en la conducta observable y la relación entre estímulo y respuesta, rechazando (en sus versiones más estrictas) el estudio de los procesos mentales internos por no ser medibles objetivamente.
```

### 13 — El enfoque del Humanismo

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "enfoque"]

opciones_explicitas: ["Determinismo biológico/ambiental", "Autorrealización y potencial humano", "Procesamiento de información"]

respuesta: "Autorrealización y potencial humano"
tipo: mc

enunciado: "El humanismo se distingue de otras corrientes por su visión optimista del ser humano, centrándose en la capacidad de ___."

explicacion: |
  A diferencia del psicoanálisis (motivado por impulsos inconscientes) o el conductismo (motivado por el entorno), el humanismo pone el foco en la capacidad de crecimiento y autorrealización del individuo.
```

### 14 — Evolución del modelo cognitivo

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas:
  - "procesamiento de información"

enunciado: "La revolución cognitiva introdujo la metáfora del ordenador para entender la mente, comparando la actividad mental con el ___."

explicacion: |
  El cognitivismo estudia cómo la mente codifica, almacena y recupera la información, de manera análoga a como un ordenador procesa datos.
```

### 15 — Orden de aparición histórica

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["historia", "cronologia"]

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]

respuesta_orden: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

enunciado: "Ordene cronológicamente las corrientes psicológicas según su surgimiento y predominio en la historia de la psicología:"

explicacion: |
  El Psicoanálisis surgió a finales del siglo XIX; el Conductismo dominó la primera mitad del XX; el Humanismo emergió a mediados del XX como reacción al determinismo; y el Cognitivismo se consolidó en la segunda mitad del siglo XX.
```

### 16 — El objeto de estudio del Psicoanálisis

```
metadata:
  materia: "psicologia"
  tema: "psicoanalisis"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas:
  - "inconsciente"

enunciado: "A diferencia de la psicología de la conciencia, el psicoanálisis postula que la mayor parte de la actividad mental ocurre en el ___."

explicacion: |
  El psicoanálisis, fundado por Freud, se centra en los procesos mentales que no son accesibles a la conciencia inmediata, denominándolos procesos inconscientes.
```

### 17 — El enfoque del Conductismo

```
metadata:
  materia: "psicologia"
  tema: "conductismo"
  nivel: "basico"
  tags: ["conductismo", "conducta"]

respuesta: verdadero
tipo: vf
enunciado: "El conductismo radical se distingue de otras corrientes por centrarse exclusivamente en la conducta observable, rechazando el estudio de los procesos mentales internos como objeto de la psicología científica. ¿Es correcta esta afirmación?"

explicacion: |
  El conductismo (especialmente el de Watson) sostiene que para que la psicología sea una ciencia objetiva, debe limitarse al estudio de la conducta observable y su relación con el entorno, evitando la introspección.
```

### 18 — Diferencias entre Humanismo y Psicoanálisis

```
metadata:
  materia: "psicologia"
  tema: "humanismo"
  nivel: "intermedio"
  tags: ["humanismo", "psicoanalisis", "comparacion"]

variables:
  escenario: uno_de([["una visión determinista del pasado", "una visión optimista del potencial humano"], ["un énfasis en la patología", "un énfasis en el crecimiento personal"], ["un foco en los impulsos reprimidos", "un foco en la autorrealización"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [escenario[0], escenario[1]]

enunciado: "Mientras que el psicoanálisis suele tener una visión determinista basada en los conflictos del pasado, el humanismo se distingue por ___."

explicacion: |
  El humanismo (Rogers, Maslow) se enfoca en la capacidad del individuo para el crecimiento y la autorrealización, contrastando con el enfoque clínico-patológico del psicoanálisis.
```

### 19 — El procesamiento de información en el Cognitivismo

```
metadata:
  materia: "psicologia"
  tema: "cognitivismo"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora-computacional"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas:
  - "procesamiento de información"

enunciado: "El cognitivismo se diferencia del conductismo al proponer que entre el estímulo y la respuesta existen procesos mentales complejos, utilizando la metáfora del ___."

explicacion: |
  La psicología cognitiva utiliza la analogía de la computadora para explicar cómo la mente recibe, codifica, almacena y recupera información.
```

### 20 — Evolución de la Psicología: Del Conductismo al Cognitivismo

```
metadata:
  materia: "psicologia"
  tema: "evolucion_corrientes"
  nivel: "avanzado"
  tags: ["historia", "conductismo", "cognitivismo"]

respuesta_orden: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]
tipo: ordenar
opciones_explicitas: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]

enunciado: "Ordene cronológicamente el predominio de estas corrientes/enfoques en la psicología científica, desde el inicio del siglo XX hasta la actualidad:"

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; la revolución cognitiva surgió en los años 50-60; y la neurociencia cognitiva es el enfoque contemporáneo que integra procesos mentales con bases biológicas.
```

### 21 — El enfoque del comportamiento

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "aprendizaje"]

variables:
  datos: [["Un niño recibe un dulce cada vez que recoge sus juguetes.", "refuerzo positivo"], ["Un estudiante deja de jugar videojuegos tras recibir un regaño constante.", "castigo"]]
  idx: uno_de([0, 1])

enunciado: "En el escenario donde {datos[idx][0]}, estamos ante un proceso de {datos[idx][1]} según el conductismo."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "refuerzo positivo"
  - "castigo"

explicacion: |
  El conductismo se enfoca en la relación entre estímulos y respuestas. En este caso, la consecuencia aumenta la probabilidad de la conducta (refuerzo) o la disminuye (castigo).
```

### 22 — El inconsciente en la clínica

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

enunciado: "Un terapeuta que busca interpretar los sueños de un paciente y analizar los lapsus linguae para acceder a contenidos reprimidos está aplicando el método de:"

opciones_explicitas: ["Conductismo", "Psicoanálisis", "Humanismo", "Cognitivismo"]
respuesta: "Psicoanálisis"
tipo: mc

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la conducta humana está determinada por impulsos y deseos inconscientes.
```

### 23 — La autorrealización humana

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

enunciado: "¿Es el enfoque humanista una corriente que se centra en la capacidad de crecimiento personal y la autorrealización del individuo?"

respuesta: verdadero
tipo: vf

explicacion: |
  El humanismo (Rogers, Maslow) se diferencia por su visión optimista del ser humano y su enfoque en la autorrealización.
```

### 24 — Procesamiento de la información

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "procesos_mentales"]

variables:
  datos: [["Cómo la memoria almacena datos", "procesamiento"], ["Cómo el lenguaje decodifica símbolos", "procesamiento"]]
  idx: uno_de([0, 1])

enunciado: "Si un psicólogo estudia {datos[idx][0]}, su enfoque principal es el {datos[idx][1]} de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas:
  - "procesamiento"

explicacion: |
  El cognitivismo utiliza la metáfora del ordenador para entender cómo la mente codifica, almacena y recupera la información.
```

### 25 — Evolución del estudio de la mente

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["historia", "orden_cronologico"]

enunciado: "Ordena cronológicamente estas corrientes desde su surgimiento histórico (del más antiguo al más reciente):"

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
respuesta_orden: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

explicacion: |
  El Psicoanálisis (finales XIX), el Conductismo (principios XX), el Humanismo (mediados XX) y el Cognitivismo (revolución cognitiva años 50-60).
```
