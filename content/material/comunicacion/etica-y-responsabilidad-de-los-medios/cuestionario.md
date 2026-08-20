# Comunicacion — Etica y responsabilidad de los medios (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de veracidad

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["etica", "verdad", "periodismo"]

respuesta: "veracidad"
tipo: completar
respuestas_validas:
  - "veracidad"

enunciado: "El compromiso ético de los medios de comunicación con la exactitud y la fidelidad de los hechos se denomina ___."

explicacion: |
  La veracidad no implica la verdad absoluta (que es metafísica), sino el deber de contrastar la información y presentarla de la manera más fiel posible a los hechos.
```

### 2 — Responsabilidad social

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["responsabilidad", "social", "etica"]

variables:
  es_falso: uno_de([verdadero, falso])

respuesta: es_falso
tipo: completar
enunciado: "La responsabilidad social implica que los medios tienen el deber de informar de manera objetiva, incluso si esto contraviene sus intereses económicos o políticos."

explicacion: |
  La ética periodística exige priorizar el derecho a la información de la sociedad sobre los intereses particulares del medio.
```

### 3 — El proceso de verificación

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["verificacion", "fuentes", "proceso"]

opciones_explicitas: ["Contraste de fuentes", "Publicación de la noticia", "Recolección de datos"]

respuesta_orden: ["Recolección de datos", "Contraste de fuentes", "Publicación de la noticia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos esenciales para garantizar la integridad de una noticia:"

explicacion: |
  Un proceso ético requiere primero obtener la información, luego verificarla con múltiples fuentes y finalmente comunicarla.
```

### 4 — Sesgo informativo

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["sesgo", "imparcialidad", "etica"]

opciones_explicitas: ["Imparcialidad", "Sensacionalismo", "Opinión"]

respuesta: "Imparcialidad"
tipo: mc

enunciado: "Cuando un medio presenta los hechos sin inclinaciones ideológicas que distorsionen la realidad, está actuando bajo el principio de:"

explicacion: |
  La imparcialidad busca que el espectador reciba todos los ángulos de una noticia para que pueda formar su propio criterio.
```

### 5 — El derecho a la información

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["derechos", "publico", "etica"]

variables:
  idx: uno_de([0, 1])
  datos: [["donde un medio publica información privada sin interés público", "No"], ["donde un medio informa sobre un evento de interés general", "Sí"]]
  caso: datos[idx][0]

enunciado: "En el escenario {caso}, ¿se está cumpliendo con la responsabilidad social hacia el público?"

pasos:
  - "Evaluar si la información es de interés público o solo curiosidad morbosa."
  - "Determinar si la publicación vulnera la ética o el derecho a la intimidad."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sí", "No"]

explicacion: |
  La responsabilidad social se equilibra con el derecho a la intimidad; informar sobre la vida privada sin un interés público legítimo es una falta ética.
```

### 6 — El dilema de la primicia vs. la verificación

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "verificacion", "responsabilidad"]

respuesta: falso
tipo: "vf"

enunciado: "Un medio de comunicación tiene la obligación ética de publicar una noticia de alto impacto inmediatamente después de recibir un rumor de una fuente anónima, incluso si no se ha podido verificar la veracidad de la información, para cumplir con el derecho a la información del público."

explicacion: |
  La ética periodística exige la verificación de la información antes de su difusión. Publicar rumores sin confirmar vulnera el principio de veracidad y puede causar daños irreparables, priorizando el sensacionalismo sobre la responsabilidad social.
```

### 7 — El proceso de verificación de una fuente

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["proceso", "verificacion", "metodologia"]

tipo: "ordenar"
opciones_explicitas: ["Verificar la autenticidad del material", "Contrastar con otras fuentes", "Evaluar el interés público"]
respuesta_orden: ["Verificar la autenticidad del material", "Contrastar con otras fuentes", "Evaluar el interés público"]

enunciado: "Para garantizar la responsabilidad editorial ante un caso de información sensible, el periodista debe seguir el orden correcto de actuación:"

pasos:
  - "Paso 1: Análisis inicial del origen."
  - "Paso 2: Contraste de la información."
  - "Paso 3: Evaluación de la relevancia y daño."

explicacion: |
  La responsabilidad de los medios implica un proceso sistemático: primero se valida la integridad del dato (no es un montaje), luego se busca la triangulación de fuentes y finalmente se decide si la publicación es de interés público y no meramente morbosa.
```

### 8 — El derecho de réplica

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["derechos", "etica", "rectificacion"]

respuesta: "derecho de réplica"
tipo: "completar"
respuestas_validas:
  - "derecho de réplica"
  - "rectificación"

enunciado: "Cuando un medio de comunicación publica información errónea que afecta la reputación de una persona o institución, la obligación ética y legal de permitir que el afectado se defienda en el mismo espacio se denomina ___."

explicacion: |
  El derecho de réplica es un principio fundamental de la ética comunicacional que busca equilibrar la libertad de expresión con el derecho al honor, permitiendo que los afectados corrijan la información difundida.
```

### 9 — Conflicto de intereses y patrocinio

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["conflictos", "patrocinio", "independencia"]

variables:
  caso_a: "Un medio publica una crítica negativa sobre una empresa que es su mayor anunciante."
  caso_b: "Un periodista recibe un viaje pagado por un político para cubrir una cumbre."

tipo: "mc"
opciones_explicitas: ["Caso A", "Caso B"]

respuesta: "Caso B"

enunciado: "Analice los siguientes dos escenarios. Caso A: {caso_a} Caso B: {caso_b} ¿Cuál de los dos representa una falta directa a la independencia editorial?"

explicacion: |
  La independencia editorial es la capacidad de informar sin presiones externas. Tanto la influencia económica de los anunciantes como los incentivos personales (viajes, regalos) comprometen la objetividad y la responsabilidad hacia el público.
```

### 10 — Clasificación de la responsabilidad informativa

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["principios", "veracidad", "contexto"]

respuesta: "veracidad"
tipo: "mc"
opciones_explicitas: ["veracidad", "inmediatez", "sensacionalismo", "opinión"]

enunciado: "La obligación de presentar los hechos tal como ocurrieron, proporcionando el contexto necesario para que el público comprenda la realidad sin distorsiones, se conoce como principio de:"

explicacion: |
  La veracidad no es solo decir la verdad, sino no omitir datos esenciales que cambien el sentido de la noticia. La inmediatez es una característica técnica, pero la veracidad es un imperativo ético.
```

### 11 — El sesgo de confirmación en la información

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["etica", "sesgo", "verdad"]

tipo: mc
opciones_explicitas: ["Presentar solo hechos que apoyen una postura", "Verificar la identidad de todas las fuentes", "Publicar información sin contrastar para ser el primero", "Ignorar la opinión de expertos para ser neutral"]

enunciado: "Un error ético frecuente en el periodismo es el sesgo de confirmación. Este ocurre cuando un medio..."

respuesta: "Presentar solo hechos que apoyen una postura"

explicacion: |
  El sesgo de confirmación implica seleccionar información que refuerce una creencia previa, omitiendo datos que la contradigan, lo cual vulnera el deber de informar con veracidad y objetividad.
```

### 12 — Veracidad vs. Inmediatez

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["inmediatez", "veracidad", "responsabilidad"]

tipo: vf

enunciado: "La obligación de ser el primero en publicar una noticia (inmediatez) es superior a la obligación de verificar la veracidad de la misma en el ejercicio del periodismo ético."

respuesta: falso

explicacion: |
  La ética periodística establece que la veracidad es un pilar fundamental. Priorizar la velocidad sobre la verificación puede propagar noticias falsas (fake news) y dañar la credibilidad del medio y la sociedad.
```

### 13 — El proceso de verificación de fuentes

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["fuentes", "verificacion", "procedimiento"]

variables:
  pasos_ordenar: [["Recibir la información o pista", "Búsqueda de evidencia y contraste"], ["Contrastar con al menos dos fuentes independientes", "Publicar la noticia"], ["Verificar la credibilidad de la fuente original", "Redactar el informe final"]]
  idx: uno_de([0,1,2])

tipo: ordenar
opciones_explicitas: ["Recibir la información o pista", "Verificar la credibilidad de la fuente original", "Búsqueda de evidencia y contraste", "Contrastar con al menos dos fuentes independientes", "Redactar el informe final", "Publicar la noticia"]

respuesta_orden: ["Recibir la información o pista", "Verificar la credibilidad de la fuente original", "Búsqueda de evidencia y contraste", "Contrastar con al menos dos fuentes independientes", "Redactar el informe final", "Publicar la noticia"]

enunciado: "Para cumplir con la responsabilidad de informar con verdad, un periodista debe seguir un proceso riguroso de verificación. Ordene los pasos lógicos de este proceso:"

explicacion: |
  Un proceso ético requiere primero identificar la fuente, luego buscar evidencia para respaldar lo dicho, contrastar con otras visiones, redactar con precisión y, finalmente, publicar.
```

### 14 — La distinción entre opinión e información

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["opinion", "informacion", "confusion"]

tipo: completar
respuestas_validas:
  - "opinión"
  - "hecho"

enunciado: "Una confusión común en los medios es mezclar el ___ (dato objetivo y verificable) con la ___ (juicio de valor del periodista), lo cual desinforma al público sobre la naturaleza de la noticia."

respuesta: "hecho"

explicacion: |
  La distinción clara entre información (hechos) y opinión (interpretaciones) es vital para que el receptor pueda formar su propio criterio sin ser manipulado por el juicio del emisor.
```

### 15 — El derecho a la rectificación

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["rectificacion", "derecho", "etica"]

tipo: mc
opciones_explicitas: ["Es una opción opcional si la noticia ya fue leída", "Es una obligación ética y legal cuando hay errores", "Solo aplica si la persona afectada es una figura pública", "Solo se aplica si el error fue intencionado"]

enunciado: "Cuando un medio de comunicación comete un error en la información publicada, su responsabilidad ética le exige ejercer el derecho de..."

respuesta: "Es una obligación ética y legal cuando hay errores"

explicacion: |
  La responsabilidad social de los medios implica corregir errores de manera visible y con la misma relevancia que la noticia original, garantizando el derecho de la audiencia a la información veraz.
```

### 16 — Veracidad vs. Objetividad

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "veracidad", "objetividad"]

respuesta: "veracidad"
tipo: "completar"
respuestas_validas:
  - "veracidad"

enunciado: "Mientras que la objetividad se refiere al método de recolección de datos sin sesgos, la ________ se refiere al compromiso ético de presentar hechos comprobables y honestos."

explicacion: |
  La veracidad implica una obligación moral de contrastar la información para que lo relatado coincida con la realidad, mientras que la objetividad es un ideal metodológico de neutralidad.
```

### 17 — Información vs. Opinión

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["informacion", "opinion", "distincion"]

variables:
  escenario: uno_de([["Un reporte sobre el clima", "informacion"], ["Un editorial sobre política", "opinion"], ["Una crónica de un accidente", "informacion"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["informacion", "opinion"]

enunciado: "En el contexto del periodismo ético, un texto que presenta hechos verificables sin la carga subjetiva del autor se distingue de la ________ porque su fin es informar, no persuadir."

explicacion: |
  La información busca transmitir datos objetivos, mientras que la opinión es la interpretación subjetiva de esos datos.
```

### 18 — Responsabilidad Social vs. Libertad de Expresión

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["libertad_de_expresion", "responsabilidad_social"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿La responsabilidad social de los medios implica que la libertad de expresión no es un derecho absoluto, ya que debe coexistir con el derecho de la sociedad a recibir información veraz y no dañina?"

explicacion: |
  La libertad de expresión permite la libre circulación de ideas, pero la responsabilidad social impone límites éticos para evitar la difamación o la desinformación deliberada.
```

### 19 — Fake News vs. Error Periodístico

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["fake_news", "error"]

variables:
  caso: uno_de([["Dato erróneo por descuido en la fuente", "error"], ["Noticia falsa creada para manipular", "fake_news"]])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["error", "fake_news"]

enunciado: "Si un medio publica una noticia falsa con la intención deliberada de manipular la opinión pública, esto se clasifica como ________, lo cual se distingue del ________ que ocurre por descuido o falta de verificación."

explicacion: |
  La intención (dolo) es el factor determinante: la desinformación (fake news) busca engañar, mientras que el error es una falla en el proceso de verificación.
```

### 20 — El proceso de Verificación Ética

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["verificacion", "proceso", "etica"]

respuesta_orden: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación responsable"]
tipo: "ordenar"
opciones_explicitas: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación responsable"]

enunciado: "Para cumplir con el deber de veracidad, un periodista debe seguir un orden lógico de rigor informativo. Ordena los pasos de la gestión ética de la información:"

explicacion: |
  El proceso comienza con la diversidad de fuentes, sigue con la comprobación de datos, la puesta en contexto para evitar la manipulación y finaliza con la publicación consciente.
```

### 21 — El dilema de la primicia

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "veracidad", "responsabilidad"]

variables:
  datos: [["Se recibe un video de un supuesto acto de corrupción sin verificar la fuente", "publicar sin verificar"], ["Se tiene una noticia sobre un crimen que aún está en investigación", "esperar confirmación oficial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["publicar sin verificar", "esperar confirmación oficial"]

enunciado: "Un medio de comunicación recibe información sensible de una fuente anónima. Según la ética periodística, ante el escenario: {datos[idx][0]}, la acción responsable es ___."

explicacion: |
  La responsabilidad editorial exige verificar la veracidad de los hechos antes de su difusión para evitar la propagación de noticias falsas o daños irreparables.
```

### 22 — El sesgo en la información

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["objetividad", "sesgo"]

respuesta: falso
tipo: vf

enunciado: "La objetividad absoluta es un ideal que el periodismo busca alcanzar, pero la ética profesional exige que el periodista reconozca sus propios sesgos para minimizar su impacto en la información."

explicacion: |
  Aunque la objetividad total es imposible debido a la subjetividad humana, la ética reside en la honestidad, el rigor y el contraste de fuentes para acercarse a la verdad.
```

### 23 — Jerarquía de la responsabilidad

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["proceso", "verificacion"]

respuesta_orden: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación"]
tipo: ordenar

opciones_explicitas: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación"]

enunciado: "Para cumplir con el deber de informar con veracidad, un medio debe seguir un proceso riguroso. Ordene los siguientes pasos desde el inicio hasta la publicación de una noticia de alto impacto:"

explicacion: |
  El proceso ético requiere primero contrastar la información con diversas fuentes, verificar que los datos sean correctos, dar el contexto necesario para no desinformar y, finalmente, publicar.
```

### 24 — El derecho a la réplica

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["derechos", "etica"]

variables:
  datos: [["Un medio publica una acusación falsa contra un ciudadano", "otorgar el derecho a réplica"], ["Un medio comete un error en un titular", "rectificar el error"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "otorgar el derecho a réplica"
  - "rectificar el error"

enunciado: "Ante un error cometido por un medio o una acusación que afecta la reputación de un tercero, la obligación ética y legal es ___."

explicacion: |
  El derecho a la réplica y el deber de rectificación son pilares de la ética comunicacional para garantizar la dignidad de las personas frente a la información pública.
```

### 25 — Intereses comerciales vs. Interés público

```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["independencia", "etica"]

variables:
  datos: [["Un gran anunciante pide censurar una noticia negativa", "mantener la independencia editorial"], ["Un medio recibe un soborno para publicar una noticia falsa", "rechazar el beneficio económico"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["mantener la independencia editorial", "rechazar el beneficio económico"]

enunciado: "Si un medio se enfrenta a la situación: {datos[idx][0]}, su compromiso con la responsabilidad social le obliga a ___."

explicacion: |
  La independencia editorial es fundamental para que el medio sirva al interés público y no a intereses económicos particulares que distorsionen la realidad.
```
