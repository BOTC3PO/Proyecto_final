### 1 — El objeto de estudio del Psicoanálisis
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "concepto"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas: ["inconsciente"]

enunciado: "A diferencia de otras corrientes que se centran en la conducta observable, el psicoanálisis postula que el motor principal de la conducta humana son los procesos del ___."

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la mayor parte de nuestra vida mental ocurre en el inconsciente, influyendo en nuestras decisiones y emociones sin que nos demos cuenta.
```

### 2 — Conductismo vs. Cognitivismo
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["conductismo", "cognitivismo"]

variables:
  es_conductista: uno_de([verdadero, falso])

respuesta: es_conductista == falso
tipo: vf

enunciado: "Un psicólogo conductista clásico se centraría exclusivamente en los procesos mentales internos (como el pensamiento o la memoria) para explicar la conducta, ignorando el estímulo y la respuesta."

explicacion: |
  Falso. El conductismo se centra en la conducta observable y la relación entre estímulo y respuesta, rechazando (en sus versiones más estrictas) el estudio de los procesos mentales internos por no ser medibles objetivamente.
```

### 3 — El enfoque del Humanismo
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "enfoque"]

opciones_explicitas: ["Determinismo biológico/ambiental", "Autorrealización y potencial humano", "Procesamiento de información"]

respuesta: opciones_explicitas[1]
tipo: mc

enunciado: "El humanismo se distingue de otras corrientes por su visión optimista del ser humano, centrándose en la capacidad de ___."

explicacion: |
  A diferencia del psicoanálisis (motivado por impulsos inconscientes) o el conductismo (motivado por el entorno), el humanismo pone el foco en la capacidad de crecimiento y autorrealización del individuo.
```

### 4 — Evolución del modelo cognitivo
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas: ["procesamiento de información"]

enunciado: "La revolución cognitiva introdujo la metáfora del ordenador para entender la mente, comparando la actividad mental con el ___."

explicacion: |
  El cognitivismo estudia cómo la mente codifica, almacena y recupera la información, de manera análoga a como un ordenador procesa datos.
```

### 5 — Orden de aparición histórica
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["historia", "cronologia"]

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]

respuesta: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

enunciado: "Ordene cronológicamente las corrientes psicológicas según su surgimiento y predominio en la historia de la psicología:"

explicacion: |
  El Psicoanálisis surgió a finales del siglo XIX; el Conductismo dominó la primera mitad del XX; el Humanismo emergió a mediados del XX como reacción al determinismo; y el Cognitivismo se consolidó en la segunda mitad del siglo XX.
```