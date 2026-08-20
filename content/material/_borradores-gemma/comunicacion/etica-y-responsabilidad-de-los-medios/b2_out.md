### 1 — El dilema de la primicia vs. la verificación
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "verificacion", "responsabilidad"]

respuesta: "falso"
tipo: "vf"

enunciado: "Un medio de comunicación tiene la obligación ética de publicar una noticia de alto impacto inmediatamente después de recibir un rumor de una fuente anónima, incluso si no se ha podido verificar la veracidad de la información, para cumplir con el derecho a la información del público."

explicacion: |
  La ética periodística exige la verificación de la información antes de su difusión. Publicar rumores sin confirmar vulnera el principio de veracidad y puede causar daños irreparables, priorizando el sensacionalismo sobre la responsabilidad social.
```

### 2 — El proceso de verificación de una fuente
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["proceso", "verificacion", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un video de un accidente", "un post de una red social"], ["un documento oficial filtrado", "un mensaje de WhatsApp de un desconocido"]]
  pasos_correctos: [["Verificar la autenticidad del material", "Contrastar con otras fuentes", "Evaluar el interés público"], ["Confirmar la identidad del emisor", "Buscar evidencia física o documental", "Consultar a las partes involucradas"]]

respuesta: escenario_idx
tipo: "ordenar"
opciones_explicitas: [["Verificar la autenticidad del material", "Contrastar con otras fuentes", "Evaluar el interés público"], ["Confirmar la identidad del emisor", "Buscar evidencia física o documental", "Consultar a las partes involucradas"]]

enunciado: "Para garantizar la responsabilidad editorial ante un caso de información sensible, el periodista debe seguir el orden correcto de actuación según el tipo de material recibido: {datos[escenario_idx][0]}."

pasos:
  - "Paso 1: Análisis inicial del origen."
  - "Paso 2: Contraste de la información."
  - "Paso 3: Evaluación de la relevancia y daño."

explicacion: |
  La responsabilidad de los medios implica un proceso sistemático: primero se valida la integridad del dato (no es un montaje), luego se busca la triangulación de fuentes y finalmente se decide si la publicación es de interés público y no meramente morbosa.
```

### 3 — El derecho de réplica
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["derechos", "etica", "rectificacion"]

respuesta: "derecho de réplica"
tipo: "completar"
respuestas_validas: ["derecho de réplica", "rectificación"]

enunciado: "Cuando un medio de comunicación publica información errónea que afecta la reputación de una persona o institución, la obligación ética y legal de permitir que el afectado se defienda en el mismo espacio se denomina ___."

explicacion: |
  El derecho de réplica es un principio fundamental de la ética comunicacional que busca equilibrar la libertad de expresión con el derecho al honor, permitiendo que los afectados corrijan la información difundida.
```

### 4 — Conflicto de intereses y patrocinio
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["conflictos", "patrocinio", "independencia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un medio publica una crítica negativa sobre una empresa que es su mayor anunciante.", "Un periodista recibe un viaje pagado por un político para cubrir una cumbre."], ["Un medio oculta información sobre un desastre ambiental para proteger a un inversor.", "Un medio utiliza noticias falsas para beneficiar a un partido político que financia su canal."]]

respuesta: caso_idx
tipo: "mc"
opciones_explicitas: ["Caso A", "Caso B"]

enunciado: "Analice el siguiente escenario de conflicto de intereses: {casos[caso_idx][0]}. ¿Cuál es la acción que representa una falta directa a la independencia editorial?"

explicacion: |
  La independencia editorial es la capacidad de informar sin presiones externas. Tanto la influencia económica de los anunciantes como los incentivos personales (viajes, regalos) comprometen la objetividad y la responsabilidad hacia el público.
```

### 5 — Clasificación de la responsabilidad informativa
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