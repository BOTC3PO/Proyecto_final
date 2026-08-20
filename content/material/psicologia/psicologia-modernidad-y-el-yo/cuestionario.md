# Psicologia — Psicologia modernidad y el yo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de sujeto moderno

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["sujeto", "modernidad", "individualismo"]

respuesta: "individualismo"
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo", "dualismo", "determinismo"]

enunciado: "La modernidad promovió la idea de que la identidad se construye a partir de un ___ creciente, desplazando las identidades grupales o estamentales."

explicacion: |
  La modernidad se caracteriza por el surgimiento del individuo como unidad básica de la sociedad, con derechos y una conciencia propia, separada de su comunidad o estamento.
```

### 2 — ¿Es el 'yo' una noción eterna?

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "sujeto"]

respuesta: falso

tipo: vf

enunciado: "La noción de un 'yo' o sujeto individual y autónomo es una construcción histórica que se consolidó con la modernidad, y no ha existido de la misma forma en todas las épocas de la humanidad."

explicacion: |
  Históricamente, en muchas culturas premodernas, la identidad estaba definida por el rol social, la familia o la religión, y no por una esencia interna e individualista.
```

### 3 — Componentes de la identidad moderna

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["autonomia", "razon"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["autonomía", "razón"], ["colectividad", "tradición"]]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas:
  - "autonomía"
  - "razón"

enunciado: "En el pensamiento moderno, el sujeto se define por su capacidad de ___ y su capacidad de actuar según su propia ________."

explicacion: |
  La modernidad sitúa a la razón y la autonomía como los pilares que permiten al individuo desprenderse de las imposiciones externas para ser dueño de sus actos.
```

### 4 — Evolución de la noción de sujeto

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta_orden: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]
tipo: ordenar
opciones_explicitas: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad/sujeto en la historia occidental:"

explicacion: |
  La historia muestra una transición desde la identidad fija por pertenencia grupal, pasando por el individuo soberano de la modernidad, hasta la identidad fluida y múltiple de la posmodernidad.
```

### 5 — El papel de la introspección

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["introspeccion", "conciencia"]

respuesta: 1

tipo: mc
opciones_explicitas: [0, 1]

enunciado: "En el contexto de la modernidad, ¿es la introspección una herramienta fundamental para el descubrimiento del 'yo' interior?\n(0 = No, 1 = Sí)"

explicacion: |
  La modernidad fomenta la idea de que el sujeto puede conocerse a sí mismo mediante la observación de sus propios procesos mentales y sentimientos internos.
```

### 6 — El origen del sujeto moderno

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "modernidad", "subjetividad"]

variables:
  periodo_transicion: uno_de(["Edad Media", "Renacimiento", "Edad Moderna"])
  concepto_yo: uno_de(["colectivo", "individual", "divino"])

respuesta: "periodo_transicion == \"Renacimiento\" && concepto_yo == \"individual\""
tipo: completar
enunciado: "En la transición de la Edad Media al {periodo_transicion}, la noción de identidad se desplaza desde un sentido {concepto_yo} hacia la idea de un sujeto autónomo."

explicacion: |
  Históricamente, la modernidad marca el paso de un sujeto definido por su posición en un orden social y religioso (colectivo) a un 'yo' centrado en la introspección y la autonomía individual.
```

### 7 — El experimento de la autoconciencia

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["filosofia", "subjetividad"]

variables:
  filosofo: uno_de(["Descartes", "Spinoza", "Locke"])
  premisas: [["Pienso, luego existo", "el yo es una ilusión"], ["Pienso, luego existo", "el yo es social"], ["El yo es una construcción", "el yo es una ilusión"]]

respuesta: premisas[0][0]
tipo: mc

opciones_explicitas: ["Pienso, luego existo", "El yo es una construcción social", "El yo es una ilusión", "El yo es una función del lenguaje"]

enunciado: "Consideremos el caso del pensamiento de {filosofo}. Si aplicamos su método de duda metódica para encontrar una base sólida para el conocimiento, la conclusión fundamental sobre el 'yo' es: ___"

pasos:
  - "Dudar de todo lo que pueda ser falso."
  - "Encontrar una verdad que sea indudable."
  - "Identificar el acto de dudar como prueba de la existencia del sujeto."

explicacion: |
  Descartes establece que el acto de pensar requiere un sujeto que piense, consolidando la idea del 'yo' como una entidad separada y racional.
```

### 8 — Evolución de la noción de identidad

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "identidad"]

respuesta_orden: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]
tipo: ordenar

opciones_explicitas: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]

enunciado: "Ordena cronológicamente la evolución de la noción de 'yo' desde la pre-modernidad hasta la consolidación de la subjetividad moderna:"

explicacion: |
  La trayectoria va desde la pertenencia a un grupo/estamento, pasando por la razón ilustrada, hasta llegar al énfasis moderno en la psique y la historia personal.
```

### 9 — El Yo como construcción histórica

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["postmodernidad", "sujeto"]

respuesta: ["estable y esencial", "cambiante y construida"]

tipo: completar

enunciado: "En la modernidad tardía y la posmodernidad, el 'yo' deja de ser visto como una entidad ___ y pasa a entenderse como algo ___."

respuestas_validas:
  - "estable y esencial"
  - "cambiante y construida"

explicacion: |
  La modernidad temprana creía en un 'yo' esencial y permanente; la visión contemporánea lo entiende como un proceso dinámico y situado.
```

### 10 — Análisis de la autonomía

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "moral"]

respuesta: "Sujeto autónomo"
tipo: mc

opciones_explicitas: ["Sujeto autónomo", "Sujeto heterónomo", "Sujeto colectivo", "Sujeto biológico"]

enunciado: "Si un individuo toma decisiones basadas exclusivamente en sus propias leyes internas y su razón, independientemente de las presiones externas, estamos ante un modelo de: ___"

explicacion: |
  La noción de autonomía es el pilar del 'yo' moderno: la capacidad del sujeto para ser legislador de su propia conducta.
```

### 11 — El origen del "Yo" moderno

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "subjetividad", "modernidad"]

tipo: mc
opciones_explicitas: ["La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad.", "El concepto de 'yo' ha sido inmutable y constante en toda la historia de la humanidad.", "El 'yo' es una entidad biológica que no depende de contextos culturales.", "La psicología moderna descubrió el 'yo', pero este siempre existió de la misma forma."]

enunciado: "Un error común es creer que la experiencia de la individualidad es una constante biológica. Sin embargo, la noción de un 'yo' centrado en la autonomía y la introspección es:"

respuesta: "La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad."

explicacion: |
  La modernidad, con el giro subjetivo (Descartes, etc.), consolidó la idea de un sujeto separado del cosmos y de la comunidad, algo que no era la norma en las cosmologías pre-modernas.
```

### 12 — ¿Es el 'yo' una esencia fija?

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["subjetividad", "esencia"]

tipo: vf

enunciado: "Desde la perspectiva de la psicología moderna y la construcción del sujeto, se considera que el 'yo' es una esencia inmutable y preexistente que la psicología debe 'descubrir'."

respuesta: falso

explicacion: |
  La psicología moderna entiende al 'yo' como un proceso dinámico y una construcción, no como una esencia fija o una sustancia metafísica que permanece igual a lo largo de la vida.
```

### 13 — Evolución del concepto de sujeto

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "subjetividad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La subjetividad pre-moderna", "La subjetividad moderna"], ["Se basaba en el lugar social y el orden cósmico.", "Se basa en la introspección y la autonomía individual."]]

tipo: ordenar
opciones_explicitas: ["La subjetividad pre-moderna", "La subjetividad moderna"]
respuesta_orden: ["La subjetividad pre-moderna", "La subjetividad moderna"]

enunciado: "Ordene cronológicamente los modelos de subjetividad según la evolución histórica del concepto de 'yo':"

pasos:
  - "Identifique el modelo basado en la pertenencia a un orden social/cósmico."
  - "Identifique el modelo basado en la autonomía del individuo."

explicacion: |
  En la pre-modernidad, el sujeto se definía por su lugar en un orden dado (Dios, la naturaleza, la comunidad). La modernidad desplaza ese centro hacia el individuo autónomo.
```

### 14 — El error de la "naturaleza humana" única

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["errores_conceptuales", "cultura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un sujeto medieval", "un sujeto contemporáneo"], ["se define por su rol en la comunidad y la tradición.", "se define por su identidad personal y deseos internos."]]

tipo: completar
respuestas_validas:
  - "se define por su rol en la comunidad y la tradición."
  - "se define por su identidad personal y deseos internos."
respuesta: casos[caso_idx][1]

enunciado: "Para entender el error de la universalización del 'yo', comparemos: mientras que ___ , ___"

explicacion: |
  Confundir la psicología moderna con una verdad universal es un error: lo que hoy llamamos 'identidad' es un producto de la modernidad y no necesariamente una constante humana universal.
```

### 15 — La paradoja de la autonomía

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["modernidad", "sujeto"]

tipo: mc
opciones_explicitas: ["La idea de un 'yo' totalmente aislado de la cultura.", "La idea de que el 'yo' es una construcción social e histórica.", "La idea de que el 'yo' es una entidad puramente biológica.", "La idea de que la psicología no tiene relación con la historia."]

enunciado: "Un error conceptual frecuente en la psicología es tratar al sujeto como si su identidad fuera independiente de su contexto histórico. Esto implica ignorar que el 'yo' es:"

respuesta: "La idea de que el 'yo' es una construcción social e histórica."

explicacion: |
  La noción de individuo es un producto histórico. No se puede estudiar la psicología ignorando que las categorías de 'persona' y 'sujeto' cambian según la época.
```

### 16 — El Yo Moderno vs. El Yo Premoderno

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["modernidad", "identidad", "historia_psicologia"]

respuesta: "individualismo"
tipo: "completar"
respuestas_validas:
  - "individualismo"

enunciado: "Mientras que en la era premoderna la identidad estaba definida por el estatus social y el grupo, la modernidad introdujo la noción de un yo basado en el ___________."

explicacion: |
  La modernidad desplazó la identidad colectiva (estatus, linaje, gremio) hacia una identidad centrada en el individuo autónomo y su subjetividad interna.
```

### 17 — La autonomía del sujeto moderno

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "sujeto"]

respuesta: verdadero
tipo: "vf"

enunciado: "La noción moderna de 'yo' presupone que el individuo es un agente autónomo capaz de autogobernarse, diferenciándose de la visión medieval donde el orden era dictado por la tradición y la divinidad."

explicacion: |
  La autonomía es un pilar de la modernidad; el sujeto se reconoce como origen de sus propias leyes y decisiones.
```

### 18 — Contraste de la identidad histórica

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["identidad", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["identidad colectiva", "identidad individual"], ["orden social estático", "orden social dinámico"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["identidad colectiva", "identidad individual", "orden social estático", "orden social dinámico"]

enunciado: "En el contexto de la transición a la modernidad, el cambio fundamental radica en el paso de una {datos[escenario_idx][0]} a una {datos[escenario_idx][1]}."

explicacion: |
  El paso de lo colectivo a lo individual es el núcleo del cambio en la construcción del 'yo' moderno.
```

### 19 — Evolución del concepto de identidad

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta_orden: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]
tipo: "ordenar"
opciones_explicitas: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad según el proceso de modernización:"

explicacion: |
  La secuencia lógica parte de la pertenencia al grupo, pasa por el proceso de individuación y culmina en la autonomía del sujeto moderno.
```

### 20 — El Yo frente a la Tradición

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["tradicion", "modernidad"]

respuesta: "La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo."
tipo: "mc"
opciones_explicitas: ["La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo.", "La tradición enfatiza la subjetividad interna, mientras que la modernidad enfatiza el rol social externo.", "Ambos conceptos consideran que la identidad es puramente externa.", "La modernidad y la tradición son conceptos idénticos en la psicología."]

enunciado: "¿Cuál es el contraste principal entre la concepción tradicional y la moderna de la identidad?"

explicacion: |
  El contraste principal es que la modernidad "interioriza" la identidad, buscando la verdad en el yo, mientras que la tradición la encontraba en el lugar que el individuo ocupaba en el orden social.
```

### 21 — El Yo en la Modernidad

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un individuo que busca su esencia interna", "subjetividad"], ["un sujeto definido por sus roles sociales", "colectividad"]]

enunciado: "Según la transición de la modernidad, el paso de un yo definido por la comunidad a un yo basado en la {datos[escenario_idx][1]} marca el nacimiento de la subjetividad moderna."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "subjetividad"
  - "colectividad"

explicacion: |
  La modernidad desplaza el eje de la identidad desde el grupo (familia, gremio, religión) hacia el individuo como centro de su propio universo psíquico.
```

### 22 — La noción de individuo

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["modernidad", "sujeto"]

enunciado: "¿Es la noción de un 'yo' individual y autónomo una característica que ha existido de la misma forma en todas las épocas de la historia humana?"

respuesta: falso
tipo: vf

explicacion: |
  Históricamente, la identidad estaba ligada a la pertenencia a un cuerpo social. El 'yo' individual es una construcción de la modernidad.
```

### 23 — Identidades en transición

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["identidad", "sociedad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["identidad ligada a la tradición", "colectivismo"], ["identidad ligada a la elección personal", "individualismo"]]

enunciado: "En un análisis histórico, si comparamos un sistema basado en el {casos[caso_idx][0]} con uno basado en el {casos[caso_idx][1]}, el segundo representa el ideal de la modernidad."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo"]

explicacion: |
  El individualismo moderno postula que el sujeto es el arquitecto de su propia identidad, separándose de las estructuras predeterminadas.
```

### 24 — Factores del Yo Moderno

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "filosofia"]

enunciado: "Ordena cronológicamente las etapas que influyeron en la consolidación del 'yo' moderno, desde la estructura más externa a la más interna:"

pasos:
  - "Estructuras comunitarias y religiosas medievales"
  - "Surgimiento de la razón individualista"
  - "Consolidación de la subjetividad psicológica"

respuesta_orden: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]
tipo: ordenar
opciones_explicitas: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]

explicacion: |
  La evolución va desde la pertenencia a un orden social dado hacia la introspección y la autonomía del sujeto.
```

### 25 — El sujeto de la modernidad

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["sujeto", "autonomia"]

variables:
  perfil_idx: uno_de([0, 1])
  perfiles: [["el sujeto es un reflejo de su linaje", "determinismo"], ["el sujeto es un agente de su propia historia", "autonomía"]]

enunciado: "En la psicología moderna, el concepto central es la {perfiles[perfil_idx][1]}, donde el individuo se percibe como un ___ de su propia historia."

respuesta: "agente"
tipo: completar
respuestas_validas:
  - "agente"
  - "esclavo"
  - "reflejo"

explicacion: |
  La modernidad introduce la idea de agencia, donde el sujeto tiene la capacidad de decidir y actuar sobre su propio destino psíquico.
```
