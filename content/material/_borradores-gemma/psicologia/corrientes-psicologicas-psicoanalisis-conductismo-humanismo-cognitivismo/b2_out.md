### 1 — El caso de la fobia al desorden
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "condicionamiento"]

variables:
  escenario: uno_de([
    ["Un niño asocia el sonido de un timbre con un pinchazo en el brazo.", "condicionamiento_clasico"],
    ["Un estudiante estudia solo cuando hay silencio absoluto para evitar distracciones.", "condicionamiento_operante"],
    ["Un perro busca comida porque sabe que al sonar una campana recibirá un premio.", "condicionamiento_operante"]
  ])

enunciado: "En el caso de que {escenario[0]}, estamos ante un ejemplo de {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["condicionamiento_clasico", "condicionamiento_operante", "procesos_inconscientes"]

explicacion: |
  El conductismo clásico (Pavlov) se centra en la asociación de estímulos, mientras que el operante (Skinner) se centra en la consecuencia de la conducta.
```

### 2 — El análisis del síntoma inconsciente
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

### 3 — El proceso de procesamiento de información
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora_computacional"]

variables:
  ejemplo_cognitivo: uno_de([
    ["La forma en que una persona interpreta un gesto de un amigo como un insulto.", "interpretacion"],
    ["La forma en que un conductor procesa señales de tráfico para evitar un choque.", "procesamiento"]
  ])

enunciado: "En el modelo del cognitivismo, la mente es comparada con una computadora. Si analizamos {ejemplo_cognitivo[0]}, nos centramos en el ___ de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas: ["procesamiento"]

explicacion: |
  El cognitivismo estudia los procesos mentales internos (percepción, memoria, lenguaje) como flujos de información similares al procesamiento de datos.
```

### 4 — La jerarquía de necesidades en un paciente
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

variables:
  caso_humanista: uno_de([
    ["Un paciente busca terapia para alcanzar su máximo potencial personal.", "autorrealizacion"],
    ["Un paciente busca terapia para mejorar su autoestima y sentirse aceptado.", "pertenencia"]
  ])

enunciado: "Según el enfoque humanista, si el objetivo principal de una persona es {caso_humanista[0]}, está buscando la ___."

respuesta: "autorrealizacion"
tipo: completar
respuestas_validas: ["autorrealizacion"]

explicacion: |
  El humanismo se enfoca en la autorrealización y el crecimiento personal, viendo al individuo como alguien con tendencia innata hacia la plenitud.
```

### 5 — El método de análisis de una conducta
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["metodologia", "comparativa"]

variables:
  metodo_orden: uno_de([
    ["Observar la conducta, identificar el estímulo, analizar la respuesta", "paso1_paso2_paso3"],
    ["Escuchar el sueño, analizar el lapsus, buscar el trauma", "paso1_paso2_paso3"]
  ])

enunciado: "Para realizar un estudio clínico, un psicólogo debe seguir una secuencia lógica de pasos. Ordena los siguientes elementos según el enfoque conductista: 1. Estímulo, 2. Respuesta, 3. Consecuencia."

respuesta: ["Estímulo", "Respuesta", "Consecuencia"]
tipo: ordenar
opciones_explicitas: ["Estímulo", "Respuesta", "Consecuencia", "Inconsciente", "Trauma"]

explicacion: |
  El modelo conductista se basa en la secuencia E-R-C (Estímulo-Respuesta-Consecuencia).
```