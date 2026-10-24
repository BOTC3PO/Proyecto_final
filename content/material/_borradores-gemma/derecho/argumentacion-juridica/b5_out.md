### 1 — Validez del argumento por jerarquía
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["jerarquia_normativa", "constitucionalidad"]

variables:
  escenario: uno_de([
    ["Una ley provincial contradice la Constitución Nacional.", "inconstitucional"],
    ["Un decreto reglamentario contradice la Ley Nacional.", "ilegal"],
    ["Un reglamento municipal contradice una Ley Provincial.", "inválido"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["inconstitucional", "ilegal", "inválido"]

enunciado: "De acuerdo al principio de jerarquía normativa, si {escenario[idx][0]}, el argumento jurídico debe concluir que la norma inferior es ___."

explicacion: |
  En el sistema jurídico, la norma de mayor rango (como la Constitución) prevalece sobre las de menor rango. Un argumento sólido debe identificar la norma superior para invalidar la inferior.
```

### 2 — Estructura del Silogismo Jurídico
```
metadata:
  materia: "derecho"
  tema: "logica_juridica"
  nivel: "basico"
  tags: ["silogismo", "premisa_mayor", "premisa_menor"]

variables:
  silogismo: uno_de([
    ["La norma establece una sanción para el robo. Juan robó. Por tanto, Juan debe ser sancionado.", "premisa_menor"],
    ["El contrato exige firma para ser válido. El contrato no tiene firma. Por tanto, es nulo.", "premisa_mayor"],
    ["La ley prohíbe conducir sin licencia. Pedro no tiene licencia. Por tanto, Pedro infringe la ley.", "premisa_menor"]
  ])
  idx: uno_de([0,1,2])

respuesta: "premisa_menor"
tipo: vf

enunciado: "En el siguiente silogismo: '{silogismo[idx][0]}', el elemento '{silogismo[idx][1]}' actúa como la ___ (la subsunción del hecho a la norma)."

explicacion: |
  El silogismo jurídico se compone de la premisa mayor (la norma), la premisa menor (el hecho) y la conclusión. La subsunción es el proceso de encuadrar el hecho en la norma.
```

### 3 — Uso de Precedentes
```
metadata:
  materia: "derecho"
  tema: "precedentes_judiciales"
  nivel: "avanzado"
  tags: ["stare_decisis", "argumentacion"]

variables:
  caso: uno_de([
    ["Un fallo de la Corte Suprema sobre libertad de expresión.", "obligatorio"],
    ["Una sentencia de un juzgado de primera instancia sobre un contrato.", "persuasivo"],
    ["Un dictamen de un tribunal administrativo sobre un trámite.", "persuasivo"]
  ])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["obligatorio", "persuasivo", "irrelevante"]

enunciado: "Al construir un argumento basado en la jurisprudencia, si se cita {caso[idx][0]}, el valor del precedente para el juez es ___."

explicacion: |
  Los precedentes de tribunales superiores (como la Corte) suelen tener carácter obligatorio (stare decisis), mientras que los de instancias inferiores o administrativas sirven como argumento persuasivo.
```

### 4 — Elementos de la Argumentación
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["argumentos", "autoridad", "razonamiento"]

respuesta: ["Premisa Mayor", "Premisa Menor", "Conclusión"]
tipo: ordenar

enunciado: "Ordene los elementos necesarios para construir un argumento jurídico deductivo sólido, desde la norma general hasta el caso concreto:"

pasos:
  - "El hecho concreto aplicado a la norma."
  - "La consecuencia jurídica derivada."
  - "La norma o precepto legal general."

explicacion: |
  El orden lógico deductivo requiere primero la norma (mayor), luego el hecho (menor) y finalmente la consecuencia (conclusión).
```

### 5 — Identificación de la Falacia
```
metadata:
  materia: "derecho"
  tema: "fallos_en_la_argumentacion"
  nivel: "intermedio"
  tags: ["falacias", "argumentacion_logica"]

variables:
  falacia: uno_de([
    ["El abogado dice: 'Es culpable porque siempre miente'.", "ad_hominem"],
    ["El abogado dice: 'Es culpable porque todos los vecinos dicen que es malo'.", "ad_populum"],
  ])
  idx: uno_de([0,1])

respuesta: falacia[idx][1]
tipo: completar
respuestas_validas: ["ad_hominem", "ad_populum"]

enunciado: "Si un abogado argumenta que: '{falacia[idx][0]}', está incurriendo en una falacia de tipo ___."

explicacion: |
  La falacia ad hominem ataca a la persona y no al argumento, mientras que la ad populum apela a la mayoría para validar una conclusión.
```