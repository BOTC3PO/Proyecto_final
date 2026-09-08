# ESI — Anatomía y pubertad (cuestionario, 25 preguntas VBLang)

> Tema: `ES2`. Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); dos
> preguntas con **dos** blancos en el `enunciado` pero una sola
> `respuesta:` — recortadas a un solo blanco; una pregunta cuya
> `respuesta:`/`respuestas_validas` eran literalmente el string
> `"datos[idx][1]"` (la expresión sin evaluar, no el valor) —
> corregida; varias preguntas con `variables:`/`uno_de` ya devolviendo
> el par elegido, indexado de nuevo con un `escenario_idx`
> independiente (doble indexado inválido) — corregidas a un solo
> sorteo; algunos bloques `mc`/`vf` sin campo `explicacion:` —
> agregado.

---

### 1 — El inicio de la pubertad

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["hormonas", "hipofisis"]

respuesta: "hipófisis"
tipo: completar
respuestas_validas:
  - "hipófisis"
  - "hipofisis"

enunciado: "La pubertad se inicia cuando una glándula situada en la base del cerebro, llamada ___, comienza a secretar hormonas que estimulan a las gónadas."

explicacion: |
  La hipófisis actúa como la 'glándula maestra', enviando señales químicas a los ovarios o testículos para iniciar el desarrollo sexual.
```

### 2 — El rol de las gónadas femeninas

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "intermedio"
  tags: ["gonadas", "hormonas"]

respuesta: "estrógenos"
tipo: completar
respuestas_validas:
  - "estrógenos"
  - "estrogenos"

enunciado: "Las gónadas responden a las señales de la hipófisis produciendo hormonas sexuales. En cuerpos con ovarios, la producción principal es de ___."

explicacion: |
  Las gónadas (ovarios o testículos) son las encargadas de producir las hormonas que provocan los cambios físicos de la pubertad.
```

### 3 — El mecanismo de retroalimentación

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "avanzado"
  tags: ["mecanismo_hormonal", "eje_hipotalamo_hipofisis"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de la pubertad funciona como un sistema de comunicación: la hipófisis envía señales a las gónadas y éstas, a su vez, liberan hormonas que afectan otros procesos del cuerpo."

explicacion: |
  Este mecanismo de comunicación es esencial para regular los ciclos reproductivos y los cambios en el desarrollo corporal.
```

### 4 — Hormonas y desarrollo mamario

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["cambios_fisicos", "hormonas"]

respuesta: "estrógenos"
tipo: completar
respuestas_validas:
  - "estrógenos"
  - "estrogenos"

enunciado: "El desarrollo mamario en la pubertad está relacionado principalmente con la acción de los ___."

explicacion: |
  Cada hormona tiene funciones específicas que desencadenan características sexuales secundarias en el cuerpo.
```

### 5 — El eje hormonal

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "intermedio"
  tags: ["hipofisis", "gonadas", "hormonas"]

respuesta: "hormonas sexuales"
tipo: completar
respuestas_validas:
  - "hormonas sexuales"

enunciado: "La pubertad es disparada por la liberación de una señal por parte de la hipófisis que activa a las gónadas para que éstas produzcan ___, las cuales viajan por la sangre al resto del cuerpo."

explicacion: |
  Las hormonas actúan como mensajeros químicos que viajan a través del torrente sanguíneo para dar instrucciones a los órganos reproductores.
```

### 6 — El estirón de crecimiento

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["crecimiento", "desarrollo"]

tipo: mc
opciones_explicitas: ["Un aumento rápido en la estatura y cambios en la composición corporal", "Una disminución en la masa muscular", "Un cambio en el color de la piel solamente", "No tiene relación con el crecimiento"]

respuesta: "Un aumento rápido en la estatura y cambios en la composición corporal"

enunciado: "Durante la pubertad, el 'estirón' se refiere a..."

explicacion: |
  El estirón de crecimiento es un proceso de desarrollo donde se produce un aumento acelerado de la estatura y cambios en la estructura ósea y muscular.
```

### 7 — Glándulas sebáceas y piel

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["piel", "acné"]

tipo: vf
respuesta: verdadero

enunciado: "La aparición de acné durante la pubertad se debe principalmente a la mayor actividad de las glándulas sebáceas, que producen más grasa (sebo) en la piel."

explicacion: |
  Las hormonas estimulan las glándulas sebáceas, lo que aumenta la producción de grasa y puede obstruir los poros, causando acné.
```

### 8 — Vello corporal

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["vello", "cambios_fisicos"]

tipo: mc
opciones_explicitas: ["Aparece vello en axilas y zona púbica", "El vello desaparece por completo", "Sólo aparece vello en los brazos", "No hay cambios en el vello corporal"]

respuesta: "Aparece vello en axilas y zona púbica"

enunciado: "Un cambio físico común en la pubertad relacionado con el vello es..."

explicacion: |
  El desarrollo de folículos pilosos en zonas como las axilas y el área púbica es un signo característico de la pubertad, compartido por todos los cuerpos.
```

### 9 — Cambios emocionales

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["emociones", "salud_mental"]

tipo: vf
respuesta: verdadero

enunciado: "Los cambios hormonales durante la pubertad pueden provocar mayor sensibilidad, cambios de humor o variaciones en las emociones."

explicacion: |
  Las fluctuaciones en los niveles hormonales influyen directamente en el sistema nervioso, lo que puede afectar la regulación emocional.
```

### 10 — Desarrollo general

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "pubertad"]

tipo: mc
opciones_explicitas: ["Todos los cuerpos pasan por cambios físicos y emocionales", "Sólo algunos cuerpos experimentan cambios", "Los cambios son idénticos en todas las personas", "Los cambios ocurren sólo después de los 20 años"]

respuesta: "Todos los cuerpos pasan por cambios físicos y emocionales"

enunciado: "Sobre los cambios en la pubertad, es correcto afirmar que..."

explicacion: |
  La pubertad es un proceso biológico universal que involucra transformaciones físicas, hormonales y emocionales en todos los cuerpos, aunque el detalle varíe según cada uno.
```

### 11 — Cambios en la voz

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["hormonas", "testosterona", "cambios_fisicos"]

respuesta: "engrosamiento"
tipo: completar
respuestas_validas:
  - "engrosamiento"

enunciado: "Durante la pubertad, el aumento de los niveles de testosterona provoca el crecimiento de la laringe y el ___ de las cuerdas vocales, lo que resulta en un cambio en el tono de voz."

explicacion: |
  La testosterona estimula el crecimiento de la laringe y el engrosamiento de las cuerdas vocales, lo que produce el cambio característico hacia una voz más grave.
```

### 12 — Desarrollo mamario (mecanismo)

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["estrogenos", "desarrollo_mamario"]

respuesta: "estrógenos"
tipo: completar
respuestas_validas:
  - "estrógenos"
  - "estrogenos"

enunciado: "El desarrollo de las glándulas mamarias es uno de los primeros signos de la pubertad y está mediado principalmente por la acción de los ___."

explicacion: |
  Los estrógenos son las hormonas responsables de la maduración de los tejidos mamarios durante la pubertad.
```

### 13 — Vello facial

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["testosterona", "vello_facial"]

respuesta: "vello facial"
tipo: completar
respuestas_validas:
  - "vello facial"

enunciado: "La aparición de ___ en la zona del labio superior y la barbilla es un cambio físico típico de la pubertad en cuerpos con predominio de testosterona."

explicacion: |
  La testosterona estimula el crecimiento de los folículos pilosos en la cara, dando lugar a la aparición del vello facial.
```

### 14 — El ciclo menstrual

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "intermedio"
  tags: ["menarca", "hormonas", "progesterona"]

respuesta: "menarca"
tipo: completar
respuestas_validas:
  - "menarca"
  - "menarquia"

enunciado: "La primera menstruación, que marca el inicio de la maduración del eje hormonal reproductivo, se llama ___."

explicacion: |
  La menarca es el primer episodio de sangrado menstrual y marca el inicio de la capacidad reproductiva, regulada por la interacción de estrógenos y progesterona.
```

### 15 — Caracteres sexuales secundarios

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["hormonas", "cambios_fisicos"]

respuesta: "testosterona"
tipo: completar
respuestas_validas:
  - "testosterona"

enunciado: "Mientras que los estrógenos promueven cambios en el desarrollo mamario, la ___ es la hormona predominante en la aparición de caracteres sexuales secundarios en cuerpos con testículos."

explicacion: |
  La testosterona es el principal andrógeno responsable de la redistribución de la grasa corporal, el aumento de masa muscular y el vello corporal.
```

### 16 — Ritmos de desarrollo

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "ritmos"]

enunciado: "Sobre el inicio de la pubertad, ¿cuál de las siguientes afirmaciones es correcta?"

opciones_explicitas: ["La pubertad comienza siempre a la misma edad para todos", "La pubertad tiene un rango de edad amplio y cada cuerpo tiene su propio ritmo", "Sólo ocurre si se realizan cambios en la alimentación", "Es un proceso que se puede controlar mediante el ejercicio"]

respuesta: "La pubertad tiene un rango de edad amplio y cada cuerpo tiene su propio ritmo"
tipo: mc

explicacion: |
  El rango normal para el inicio de la pubertad es amplio (típicamente entre los 8 y los 14 años) y varía de cuerpo a cuerpo.
```

### 17 — Comparación corporal

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["comparacion", "autoestima"]

enunciado: "Si comparamos nuestro desarrollo físico con el de nuestros compañeros/as, ¿qué conclusión es la más adecuada?"

opciones_explicitas: ["Si ellos crecieron más, es porque somos más lentos", "Compararse con otros no es un buen indicador de salud o normalidad", "La comparación es la única forma de saber si estamos creciendo bien", "El ritmo de los demás es el estándar que debemos seguir"]

respuesta: "Compararse con otros no es un buen indicador de salud o normalidad"
tipo: mc

explicacion: |
  Cada cuerpo tiene su propio ritmo de desarrollo; compararse no aporta información útil sobre si algo anda bien o mal.
```

### 18 — Terminología correcta

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["terminologia", "respeto"]

enunciado: "Al referirnos a las partes íntimas de nuestro cuerpo, lo más adecuado es..."

opciones_explicitas: ["Usar eufemismos para evitar la incomodidad", "Usar nombres coloquiales o 'de broma'", "Usar los nombres anatómicos correctos", "Evitar hablar de ellas para no causar confusión"]

respuesta: "Usar los nombres anatómicos correctos"
tipo: mc

explicacion: |
  Usar el nombre anatómico correcto permite comunicarse con claridad con un profesional de salud si algo genera duda o preocupación.
```

### 19 — Nombres anatómicos

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["anatomia", "vocabulario"]

enunciado: "Usar nombres técnicos para los órganos genitales ayuda a hablar de salud y autocuidado de forma clara y precisa."

respuesta: verdadero
tipo: vf

explicacion: |
  Conocer el vocabulario correcto es parte de la alfabetización en salud, y es la base para entender temas que siguen (ITS, consentimiento).
```

### 20 — Diversidad en el crecimiento

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "diversidad"]

enunciado: "La pubertad ocurre de forma idéntica en todas las personas, al mismo ritmo y con los mismos tiempos."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El momento y la velocidad de los cambios de la pubertad varían mucho de persona a persona.
```

### 21 — Cambios físicos: vello vs. mamas

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["cambios_corporales", "hormonas"]

variables:
  idx: uno_de([0, 1])
  cambio_texto: [["aparición de vello en las axilas", "cambio general"], ["crecimiento de las mamas", "cambio específico"]]

respuesta: cambio_texto[idx][1]
tipo: mc
opciones_explicitas: ["cambio general", "cambio específico"]

enunciado: "Se observa la {cambio_texto[idx][0]}. ¿Esto se clasifica como un cambio general (compartido por todos los cuerpos) o un cambio específico (según el predominio hormonal)?"

explicacion: |
  Los cambios en el vello corporal son parte del desarrollo general, mientras que el crecimiento de las mamas es un cambio específico del desarrollo con predominio de estrógenos.
```

### 22 — El desarrollo de la voz

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["voz", "cambios_corporales"]

variables:
  idx: uno_de([0, 1])
  cambio_texto: [["engrosamiento de las cuerdas vocales", "cambio específico"], ["aumento de estatura", "cambio general"]]

respuesta: cambio_texto[idx][1]
tipo: mc
opciones_explicitas: ["cambio general", "cambio específico"]

enunciado: "Se observa {cambio_texto[idx][0]}. ¿Esto es un cambio general o un cambio específico?"

explicacion: |
  El cambio de voz es un cambio específico relacionado con la maduración hormonal en cuerpos con predominio de testosterona; el aumento de estatura es un cambio general.
```

### 23 — La piel en la pubertad

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "basico"
  tags: ["piel", "acné"]

variables:
  idx: uno_de([0, 1])
  cambio_texto: [["aparición de acné", "cambio general"], ["cambio en la estructura ósea (estirón)", "cambio general"]]

respuesta: cambio_texto[idx][1]
tipo: mc
opciones_explicitas: ["cambio general", "cambio específico"]

enunciado: "El/la joven presenta {cambio_texto[idx][0]}. ¿Este es un cambio general o específico?"

explicacion: |
  Tanto la aparición de acné como el estirón de crecimiento son cambios generales que afectan a todos los cuerpos durante la pubertad.
```

### 24 — Ciclo menstrual y desarrollo

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "intermedio"
  tags: ["menstruación", "hormonas"]

variables:
  idx: uno_de([0, 1])
  cambio_texto: [["inicio de la menstruación", "cambio específico"], ["aumento de la sudoración", "cambio general"]]

respuesta: cambio_texto[idx][1]
tipo: mc
opciones_explicitas: ["cambio general", "cambio específico"]

enunciado: "El/la adolescente manifiesta {cambio_texto[idx][0]}. ¿Esto se considera un cambio general o específico?"

explicacion: |
  La menstruación es un proceso biológico específico del desarrollo con predominio de estrógenos/progesterona; el aumento de sudoración es un cambio general.
```

### 25 — Identificación de cambios: caderas vs. hombros

```
metadata:
  materia: "esi"
  tema: "anatomia_y_pubertad"
  nivel: "intermedio"
  tags: ["repaso", "biologia"]

variables:
  idx: uno_de([0, 1])
  cambio_texto: [["ensanchamiento de hombros (predominio de testosterona)", "cambio específico"], ["ensanchamiento de caderas (predominio de estrógenos)", "cambio específico"]]

respuesta: cambio_texto[idx][1]
tipo: completar
respuestas_validas:
  - "cambio específico"

enunciado: "Si ocurre {cambio_texto[idx][0]}, estamos ante un ___ (general o específico según predominio hormonal)."

explicacion: |
  Es fundamental distinguir entre cambios que afectan el crecimiento general y aquellos que dependen de qué hormona predomina en cada cuerpo.
```
