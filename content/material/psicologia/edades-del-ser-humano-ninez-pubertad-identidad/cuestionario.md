# Psicologia — Edades del ser humano ninez pubertad identidad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Etapas del desarrollo

```
metadata:
  materia: "psicologia"
  tema: "edades_del_ser_humano"
  nivel: "basico"
  tags: ["desarrollo", "etapas"]

tipo: mc
opciones_explicitas: ["Niñez", "Pubertad", "Adultez", "Senectud"]

enunciado: "La etapa caracterizada por el crecimiento físico acelerado y la maduración de los órganos reproductores se denomina ________."

respuesta: "Pubertad"

explicacion: |
  La pubertad es el periodo de transición entre la niñez y la edad adulta, marcado por cambios hormonales y físicos significativos.
```

### 2 — Cambios biológicos

```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos"
  nivel: "basico"
  tags: ["biologia", "pubertad"]

tipo: vf

enunciado: "Durante la pubertad, los cambios físicos son exclusivamente externos y no afectan el sistema endocrino."

respuesta: falso

explicacion: |
  Falso. La pubertad es impulsada precisamente por cambios en el sistema endocrino (hormonas) que provocan cambios tanto internos como externos.
```

### 3 — Desarrollo de la identidad

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Búsqueda de pertenencia a grupos", "Construcción de la autonomía personal"], ["Dependencia de la opinión parental", "Definición de valores propios"]]
  claves: ["autonomía", "valores"]

tipo: completar
respuestas_validas:
  - "autonomía"
  - "valores"

enunciado: "En la etapa de la adolescencia, el individuo suele transitar desde una etapa de {escenarios[escenario_idx][0]} hacia una fase de {escenarios[escenario_idx][1]}."

respuesta: claves[escenario_idx]

explicacion: |
  La identidad se construye mediante el proceso de diferenciación de las figuras de autoridad y la búsqueda de un sentido de autonomía.
```

### 4 — Secuencia del desarrollo

```
metadata:
  materia: "psicologia"
  tema: "secuencia_desarrollo"
  nivel: "basico"
  tags: ["orden", "etapas"]

tipo: ordenar
opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

enunciado: "Ordene cronológicamente las etapas del desarrollo humano desde el nacimiento hasta la madurez."

respuesta_orden: ["Infancia", "Niñez", "Pubertad", "Adultez"]

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible de etapas sucesivas.
```

### 5 — Concepto de identidad

```
metadata:
  materia: "psicologia"
  tema: "identidad_personal"
  nivel: "intermedio"
  tags: ["identidad", "autoconcepto"]

tipo: mc
opciones_explicitas: ["Autoconcepto", "Identidad", "Personalidad", "Temperamento"]

enunciado: "El proceso mediante el cual una persona reconoce sus propios rasgos, valores y la continuidad de su 'yo' a través del tiempo se conoce como ________."

respuesta: "Identidad"

explicacion: |
  La identidad es la conciencia de ser uno mismo y la integración de los cambios experimentados durante el desarrollo.
```

### 6 — La etapa de la niñez

```
metadata:
  materia: "psicologia"
  tema: "niñez"
  nivel: "basico"
  tags: ["desarrollo", "niñez"]

enunciado: "Durante la niñez, el desarrollo se caracteriza por un crecimiento físico constante y el perfeccionamiento de habilidades motoras. Si un niño de 7 años desarrolla la capacidad de seguir reglas complejas en un juego, estamos observando un avance en su desarrollo ___."

respuestas_validas:
  - "cognitivo"
  - "motor"
  - "emocional"

respuesta: "cognitivo"
tipo: completar

explicacion: |
  El desarrollo cognitivo se refiere a la evolución de los procesos mentales como el pensamiento, la lógica y la comprensión de reglas.
```

### 7 — Cambios en la pubertad

```
metadata:
  materia: "psicologia"
  tema: "pubertad"
  nivel: "intermedio"
  tags: ["cambios_fisicos", "hormonas"]

variables:
  escenario: uno_de([["Aumento de estatura y vello corporal", "cambios físicos"], ["Cambios en el tono de voz y estructura ósea", "cambios físicos"], ["Desarrollo de caracteres sexuales secundarios", "cambios físicos"]])

enunciado: "En la pubertad, el sistema endocrino libera hormonas que provocan el proceso descrito como: {escenario[0]}."

opciones_explicitas: ["cambios físicos", "cambios psicológicos", "cambios sociales"]

respuesta: escenario[1]
tipo: mc

explicacion: |
  La pubertad es la etapa de transición biológica donde las hormonas activan los caracteres sexuales secundarios.
```

### 8 — Identidad y autoconcepto

```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "avanzado"
  tags: ["identidad", "adolescencia"]

variables:
  caso: uno_de([["Un adolescente que busca activamente sus valores y metas", "identidad_estable"], ["Un adolescente que experimenta crisis de roles constantes", "identidad_en_crisis"], ["Un adolescente que adopta la identidad de sus padres sin cuestionar", "identidad_difusa"]])

enunciado: "Analizamos el caso de un individuo que se encuentra en la etapa de formación de la identidad. Según el modelo de desarrollo, el perfil de: {caso[0]} se clasifica como ___."

opciones_explicitas: ["identidad_estable", "identidad_en_crisis", "identidad_difusa"]

respuesta: caso[1]
tipo: mc

explicacion: |
  La formación de la identidad implica la integración de la personalidad y la exploración de valores propios frente a los sociales.
```

### 9 — Secuencia del desarrollo humano

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

respuesta_orden: ["Infancia", "Niñez", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del desarrollo humano según la psicología evolutiva:"

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible desde el nacimiento hasta la madurez.
```

### 10 — Verdad o Falso: Identidad

```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "basico"
  tags: ["identidad", "falso"]

enunciado: "La identidad es un concepto estático que se define completamente al finalizar la niñez y no sufre cambios durante la adolescencia."

respuesta: falso
tipo: vf

explicacion: |
  La identidad es un proceso dinámico y continuo que se reconfigura constantemente, especialmente durante la transición de la pubertad a la adolescencia.
```

### 11 — El mito de la pubertad y la identidad

```
metadata:
  materia: "psicologia"
  tema: "desarrollo_identidad"
  nivel: "basico"
  tags: ["pubertad", "identidad", "desarrollo"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que la identidad personal se consolida completamente durante la pubertad debido a los cambios hormonales, sin necesidad de procesos cognitivos posteriores."

explicacion: |
  La identidad es un proceso continuo que se extiende durante la adolescencia y la adultez joven. Si bien la pubertad aporta cambios biológicos que influyen en la autopercepción, la consolidación de la identidad requiere procesos psicológicos y sociales complejos que trascienden lo hormonal.
```

### 12 — Secuencia del desarrollo físico y cognitivo

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "intermedio"
  tags: ["niñez", "pubertad", "secuencia"]

variables:
  etapas: ["Niñez", "Pubertad", "Adolescencia"]

opciones_explicitas: ["Niñez", "Pubertad", "Adolescencia"]

respuesta_orden: ["Niñez", "Pubertad", "Adolescencia"]

tipo: ordenar

enunciado: "Ordena las siguientes etapas del desarrollo humano de acuerdo a su aparición cronológica típica, considerando los cambios biológicos y la maduración de la identidad."

explicacion: |
  El desarrollo sigue una secuencia biológica y psicológica: primero la niñez (desarrollo motor y cognitivo básico), luego la pubertad (estirón y maduración sexual) y finalmente la adolescencia (reorganización de la identidad y pensamiento abstracto).
```

### 13 — Confusión entre cambios físicos y psicosociales

```
metadata:
  materia: "psicologia"
  tema: "pubertad_cambios"
  nivel: "basico"
  tags: ["pubertad", "cambios_fisicos"]

variables:
  escenario: [["el aumento de la estatura y vello corporal", "cambios físicos"], ["la búsqueda de autonomía y pertenencia grupal", "cambios psicosociales"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas:
  - "cambios físicos"
  - "cambios psicosociales"
  - "cambios cognitivos"

enunciado: "Un error común es confundir los procesos biológicos con los procesos de identidad. Si un individuo experimenta {escenario[idx][0]}, está atravesando principalmente ___."

explicacion: |
  Es fundamental distinguir entre la maduración biológica (pubertad/cambios físicos) y la maduración de la identidad y el rol social (adolescencia/cambios psicosociales).
```

### 14 — La naturaleza de la identidad en la niñez

```
metadata:
  materia: "psicologia"
  tema: "niñez_identidad"
  nivel: "intermedio"
  tags: ["niñez", "identidad", "autoestima"]

respuesta: "en construcción"
tipo: completar

respuestas_validas:
  - "en construcción"
  - "en desarrollo"

enunciado: "A diferencia de la identidad consolidada del adulto, la identidad en la etapa de la niñez se encuentra ___."

explicacion: |
  En la niñez, la identidad es fluida y se construye principalmente a través de la interacción con los cuidadores primarios y el juego, siendo una base que se transformará profundamente en la pubertad.
```

### 15 — El impacto de la pubertad en la percepción de sí mismo

```
metadata:
  materia: "psicologia"
  tema: "pubertad_percepcion"
  nivel: "avanzado"
  tags: ["pubertad", "autoimagen", "psicologia"]

respuesta: verdadero
tipo: vf
enunciado: "Durante la pubertad, debido a los cambios en la imagen corporal, es común que la percepción de la autopercepción se vuelva más crítica y sensible. ¿Es esto cierto?"

explicacion: |
  La combinación de cambios físicos rápidos y el desarrollo de la capacidad de pensamiento abstracto (metacognición) hace que el individuo sea mucho más consciente de su apariencia y de cómo es visto por los demás.
```

### 16 — La distinción entre niñez y pubertad

```
metadata:
  materia: "psicologia"
  tema: "desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "pubertad", "desarrollo"]

respuesta: "pubertad"
tipo: mc
opciones_explicitas: ["niñez", "pubertad", "adolescencia", "vejez"]

enunciado: "Mientras que la niñez se caracteriza por un crecimiento físico y cognitivo constante, la etapa que se distingue principalmente por la maduración de los órganos reproductivos es la ___."

explicacion: |
  La pubertad es el proceso biológico de cambios físicos y hormonales que marca el inicio de la capacidad reproductiva, diferenciándose de la niñez en su enfoque en la maduración sexual.
```

### 17 — Cambios en la identidad durante la adolescencia

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

respuesta: falso
tipo: vf
enunciado: "Durante la transición de la pubertad a la adolescencia, la identidad del individuo suele ser un proceso dinámico y en constante búsqueda. ¿Es la identidad un constructo estático e inmutable durante este periodo?"

explicacion: |
  La identidad en la adolescencia es un proceso de exploración. No es un estado fijo, sino una construcción que se moldea a través de la interacción social y la introspección.
```

### 18 — Secuencia de hitos del desarrollo

```
metadata:
  materia: "psicologia"
  tema: "etapas_del_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Pubertad", "Adultez"]
respuesta_orden: ["Infancia", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las siguientes etapas del desarrollo humano, desde la más temprana a la más tardía:"

pasos:
  - "Identificar la etapa de dependencia y aprendizaje motor."
  - "Identificar la etapa de cambios hormonales y búsqueda de autonomía."
  - "Identificar la etapa de consolidación de la identidad y roles sociales."

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible: primero la infancia (crecimiento), luego la pubertad (maduración sexual) y finalmente la adultez (estabilidad).
```

### 19 — El concepto de maduración vs. crecimiento

```
metadata:
  materia: "psicologia"
  tema: "maduracion_biologica"
  nivel: "intermedio"
  tags: ["maduracion", "crecimiento"]

respuesta: "maduración"
tipo: completar

enunciado: "En el contexto del desarrollo, el crecimiento se refiere al aumento de tamaño físico, mientras que la ___ se refiere a la adquisición de funciones complejas a través de la maduración del sistema nervioso."

pasos:
  - "Diferenciar entre aumento cuantitativo (crecimiento) y aumento cualitativo (maduración)."

explicacion: |
  La maduración es un proceso cualitativo que permite la aparición de nuevas capacidades (como el lenguaje o el razonamiento abstracto), mientras que el crecimiento es cuantitativo.
```

### 20 — Características de la identidad en la pubertad

```
metadata:
  materia: "psicologia"
  tema: "identidad_y_cuerpo"
  nivel: "avanzado"
  tags: ["identidad", "cambios_fisicos"]

respuesta: verdadero
tipo: vf
enunciado: "Durante la pubertad, el egocentrismo adolescente suele aumentar, lo que lleva al individuo a sentir que es el centro de atención de los demás (el 'público imaginario'). ¿Es este fenómeno una característica distintiva de la identidad en esta etapa?"

explicacion: |
  El egocentrismo adolescente es un fenómeno psicológico donde el joven siente que sus experiencias y su apariencia son observadas constantemente por los demás, marcando un cambio en su autoconcepto.
```

### 21 — El despertar de la pubertad

```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "pubertad"]

variables:
  datos: [["Mateo experimenta un cambio en su voz y un aumento de estatura repentino", "pubertad"], ["Lucía siente una mayor sensibilidad emocional y cambios en su ciclo menstrual", "pubertad"], ["Santi nota un crecimiento acelerado y la aparición de acné", "pubertad"]]
  idx: uno_de([0,1,2])

enunciado: "Un adolescente presenta el siguiente caso: {datos[idx][0]}. Este conjunto de cambios biológicos caracteriza la etapa de la {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "pubertad"

explicacion: |
  La pubertad es la etapa de transición donde ocurren cambios hormonales significativos que derivan en el desarrollo de caracteres sexuales secundarios.
```

### 22 — Identidad en construcción

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescencia"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  datos: [["Busca grupos sociales con intereses similares para reafirmar quién es", "identidad"], ["Se siente confundido sobre su rol en el mundo y sus valores", "identidad"], ["Experimenta crisis de pertenencia y prueba diferentes estilos de vestimenta", "identidad"]]
  idx: uno_de([0,1,2])

enunciado: "En el desarrollo de la personalidad, cuando un individuo se encuentra en el proceso de {datos[idx][0]}, está trabajando activamente en la formación de su ________."

respuesta: "identidad"
tipo: completar
respuestas_validas:
  - "identidad"

explicacion: |
  Según Erikson, la búsqueda de identidad es la tarea central de la adolescencia, donde el individuo integra sus experiencias para formar un sentido del 'yo'.
```

### 23 — Hitos del desarrollo infantil

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "hitos"]

enunciado: "¿Es correcto afirmar que durante la niñez temprana el pensamiento es predominantemente egocéntrico y centrado en el 'aquí y ahora'?"

respuesta: verdadero
tipo: vf

explicacion: |
  En la etapa de la niñez temprana (según Piaget), el niño tiene dificultades para ver las perspectivas de los demás, centrando su percepción en su propia experiencia.
```

### 24 — Secuencia del desarrollo físico

```
metadata:
  materia: "psicologia"
  tema: "secuencia_crecimiento"
  nivel: "intermedio"
  tags: ["crecimiento", "desarrollo"]

opciones_explicitas: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]

enunciado: "Ordena los procesos de desarrollo físico y psicológico en el orden cronológico/direccional correcto para un ser humano en desarrollo:"

pasos:
  - "El desarrollo ocurre de la cabeza hacia los pies."
  - "El desarrollo ocurre del centro del cuerpo hacia las extremidades."
  - "La consolidación de la personalidad adulta."

respuesta_orden: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]
tipo: ordenar

explicacion: |
  El desarrollo humano sigue patrones biológicos (cefalocaudal y proximodistal) antes de llegar a la maduración psicológica compleja.
```

### 25 — El cambio en la percepción social

```
metadata:
  materia: "psicologia"
  tema: "socializacion_adolescencia"
  nivel: "intermedio"
  tags: ["socializacion", "grupo_pares"]

variables:
  datos: [["El grupo de amigos se vuelve el referente principal de normas", "amigos"], ["La familia sigue siendo el núcleo de valores absolutos", "familia"], ["El individuo se aísla de toda influencia externa", "aislamiento"]]
  idx: uno_de([0,1,2])

enunciado: "En la transición de la niñez a la adolescencia, el foco de influencia social suele cambiar. Si observamos que {datos[idx][0]}, esto indica un desplazamiento hacia el grupo de ________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "amigos"
  - "familia"
  - "aislamiento"

explicacion: |
  Durante la adolescencia, el grupo de pares (amigos) adquiere una relevancia crucial para la socialización, compitiendo con la autoridad familiar en la formación de la identidad.
```
