# Examen jefe — [PENDIENTE #897]

> Logro #897. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 6 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **149 preguntas totales** en 6/6 secciones.

---

## Sección: investigacion-prueba-y-fiscalia (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["fiscalia", "rol_fiscal"]

respuesta: "dirigir"
tipo: completar
respuestas_validas:
  - "dirigir"
  - "dirigir la investigación"

enunciado: "En el proceso penal, el Fiscal es el encargado de ___ la investigación para determinar la existencia de un delito y la responsabilidad de los autores."

explicacion: |
  El Fiscal tiene la carga de la prueba y la función de dirigir la investigación penal para asegurar que se recolecten los elementos necesarios para el juicio.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "prueba"]

respuesta: falso
tipo: vf
enunciado: "La evidencia recolectada durante la investigación es, por definición, una prueba por sí misma, independientemente de su valoración judicial."

explicacion: |
  La evidencia es un elemento material o digital hallado; la 'prueba' es el elemento que ha sido incorporado legalmente al proceso y ha sido valorado por el juez.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "elementos"]

respuesta: "evidencia material"
tipo: mc
opciones_explicitas: ["testimonio", "evidencia material", "opinión del fiscal", "presunción"]

enunciado: "Un objeto encontrado en la escena del crimen que puede ser analizado para establecer la veracidad de un hecho se denomina:"

explicacion: |
  La evidencia material es todo objeto físico o elemento tangible que puede ser sometido a pericia para aportar conocimiento al proceso.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["cadena_de_custodia", "procedimiento"]

respuesta_orden: ["hallazgo", "recolección", "preservación", "traslado"]
tipo: ordenar

opciones_explicitas: ["hallazgo", "recolección", "preservación", "traslado"]

enunciado: "Ordene cronológicamente los pasos lógicos para asegurar la integridad de un elemento de convicción desde que se encuentra en la escena:"

explicacion: |
  Para mantener la cadena de custodia, se debe seguir un orden estricto: primero se identifica el hallazgo, luego se recolecta, se preserva su estado y finalmente se traslada bajo protocolos.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "fiscalia"]

respuesta: "presunción de inocencia"
tipo: mc
opciones_explicitas: ["presunción de culpabilidad", "presunción de inocencia", "inversión de la carga", "verdad real"]

enunciado: "El principio que obliga al Fiscal a presentar pruebas suficientes para desvirtuar la ___ es la base del sistema acusatorio."

explicacion: |
  La carga de la prueba recae en la fiscalía porque el imputado goza de la presunción de inocencia hasta que se demuestre lo contrario.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "fiscalia", "proceso_penal"]

variables:
  escenario: uno_de([["El fiscal acusa a Juan de robo, pero no presenta testigos ni cámaras.", "El fiscal no cumplió con su carga de prueba."], ["El fiscal presenta un video donde se ve a Juan robando, pero la defensa no aporta nada.", "El fiscal cumplió con su carga de prueba."]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["El fiscal no cumplió con su carga de prueba.", "El fiscal cumplió con su carga de prueba."]

enunciado: "En un proceso penal, la carga de la prueba recae sobre la parte acusadora. Analice el siguiente escenario: {escenario[0]}"

explicacion: |
  En el proceso penal, rige el principio de presunción de inocencia. Corresponde al Fiscal (parte acusadora) la carga de probar la culpabilidad del imputado mediante evidencia suficiente y lícita. Si no logra desvirtuar la presunción de inocencia, el imputado debe ser absuelto.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["rol_fiscal", "investigacion"]

respuesta: verdadero
tipo: vf

enunciado: "El Fiscal tiene la obligación de investigar tanto los elementos que incriminan al imputado como aquellos que puedan exculparlo."

explicacion: |
  El principio de objetividad obliga al Fiscal a investigar la verdad real, lo que implica recolectar evidencia tanto de cargo (que demuestre el delito) como de descargo (que proteja al inocente).
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["etapas", "evidencia", "cadena_de_custodia"]

opciones_explicitas: ["Preservación de la escena", "Recolección de elementos", "Fijación de la evidencia", "Traslado a depósito"]

respuesta_orden: ["Preservación de la escena", "Fijación de la evidencia", "Recolección de elementos", "Traslado a depósito"]
tipo: ordenar

enunciado: "Un perito llega a la escena de un crimen. Ordene cronológicamente los pasos técnicos para asegurar la integridad de la evidencia:"

explicacion: |
  Para garantizar la cadena de custodia, primero se debe asegurar y preservar la escena, luego fijar (fotografiar/esquematizar) la posición de los objetos, después recolectarlos y finalmente trasladarlos siguiendo protocolos de seguridad.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["prueba_ilícita", "derechos_fundamentales"]

respuesta: "ilegal"
tipo: completar
respuestas_validas:
  - "ilegal"

enunciado: "Si la evidencia fue obtenida mediante la violación de un derecho fundamental (como la inviolabilidad del domicilio sin orden), su calificación jurídica es: ___"

explicacion: |
  La prueba obtenida con violación de garantías constitucionales es considerada "prueba ilícita" y debe ser excluida del proceso, ya que no puede ser utilizada para fundar una condena.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["estandar_prueba", "acusacion"]

respuesta: "más allá de toda duda razonable"
tipo: mc
opciones_explicitas: ["probabilidad simple", "más allá de toda duda razonable", "certeza absoluta", "indicios suficientes"]

enunciado: "Para que un Fiscal pueda solicitar una sentencia condenatoria en un juicio oral, debe haber acreditado la culpabilidad del imputado con un estándar de prueba de:"

explicacion: |
  En el sistema penal, el estándar de convicción que debe alcanzar la fiscalía es el de 'más allá de toda duda razonable'. Si existe una duda lógica y fundada, debe aplicarse el principio 'in dubio pro reo'.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia", "investigacion"]

respuesta: "recaudar y presentar"
tipo: completar
respuestas_validas:
  - "recaudar y presentar"

enunciado: "En la etapa de investigación de un proceso penal, la función principal del Fiscal es ___ la evidencia necesaria para sustentar la acusación ante el juez."

explicacion: |
  El Fiscal es el director de la investigación y tiene la carga de la prueba; su rol no es juzgar, sino recolectar elementos de convicción para demostrar la existencia de un delito y la responsabilidad del imputado.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "presuncion_de_inocencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es responsabilidad del imputado demostrar que es inocente durante la etapa de investigación?"

explicacion: |
  Falso. Debido al principio de presunción de inocencia, la carga de la prueba recae exclusivamente sobre la parte acusadora (el Fiscal). El imputado no tiene la obligación de probar su inocencia.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["elementos_de_conviccion", "etapa_previa"]

respuesta: "elementos de convicción"
tipo: mc
opciones_explicitas: ["elementos de convicción", "pruebas plenas", "sentencias anticipadas"]

enunciado: "En la etapa de investigación, los hallazgos recolectados por la fiscalía que aún no han sido sometidos al debate en juicio oral se denominan técnicamente:"

explicacion: |
  En la etapa de investigación se recolectan 'elementos de convicción'. Estos solo se transforman en 'pruebas' una vez que son producidos ante un tribunal en el juicio oral bajo los principios de contradicción e inmediación.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["procedimiento", "secuencia_fiscal"]

respuesta_orden: ["recolección", "preservación", "cadena_de_custodia", "presentación"]
tipo: ordenar
opciones_explicitas: ["recolección", "preservación", "cadena_de_custodia", "presentación"]

enunciado: "Para que la evidencia sea válida en un juicio, el fiscal y los peritos deben seguir un orden lógico de manejo de la evidencia. Ordene los pasos para asegurar la integridad de la prueba:"

explicacion: |
  El orden correcto es: 1. Recolección del elemento, 2. Preservación para evitar contaminación, 3. Mantenimiento de la cadena de custodia (registro de quién lo tuvo) y 4. Presentación ante el tribunal.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["principio_oportunidad", "discrecionalidad"]

tipo: mc
opciones_explicitas: ["siempre debe acusar", "puede prescindir de la acción penal", "debe esperar siempre al juicio"]

respuesta: "puede prescindir de la acción penal"

enunciado: "El principio de oportunidad permite que el Fiscal, ante ciertos supuestos de política criminal, ___"

explicacion: |
  El principio de oportunidad es una facultad de la fiscalía para no ejercer la acción penal en casos específicos (como delitos menores o cuando el daño es mínimo), optimizando los recursos del Estado.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["fiscalia", "investigacion", "proceso_penal"]

respuesta: "reunir elementos de convicción"
tipo: completar
respuestas_validas:
  - "reunir elementos de convicción"

enunciado: "A diferencia del juez, cuya función es decidir sobre la aplicación de la ley, el rol principal del Fiscal durante la etapa de investigación es ___."

explicacion: |
  En el sistema acusatorio, el Fiscal es el director de la investigación y tiene la carga de la prueba, debiendo recolectar elementos de convicción para sustentar una acusación.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["prueba", "evidencia", "fiscalia"]

opciones_explicitas: ["La prueba es un elemento que se produce en el juicio oral, mientras que el elemento de convicción es el que se recaba en la etapa de investigación.", "La prueba y el elemento de convicción son términos sinónimos en cualquier etapa del proceso.", "El elemento de convicción solo lo puede recolectar el juez.", "La prueba es exclusiva de la defensa y el elemento de convicción de la fiscalía."]

respuesta: "La prueba es un elemento que se produce en el juicio oral, mientras que el elemento de convicción es el que se recaba en la etapa de investigación."
tipo: mc

enunciado: "¿Cuál es la distinción técnica fundamental entre un elemento de convicción y una prueba?"

explicacion: |
  Los elementos de convicción son indicios recolectados durante la investigación que sirven para sustentar la acusación, pero solo adquieren la categoría de 'prueba' cuando son producidos y controvertidos ante un juez en el juicio oral.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "presuncion_de_inocencia"]

respuesta: falso

tipo: vf

enunciado: "Debido a la presunción de inocencia, el imputado tiene la obligación de demostrar que no cometió el delito durante la investigación."

explicacion: |
  Falso. La carga de la prueba recae exclusivamente en la parte acusadora (Fiscalía). El imputado no tiene que probar su inocencia; es el Estado quien debe destruir la presunción de inocencia mediante pruebas de cargo.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["procedimiento", "fiscalia", "investigacion"]

opciones_explicitas: ["Recolección de indicios", "Planteamiento de la acusación", "Presentación de la teoría del caso"]

respuesta_orden: ["Recolección de indicios", "Planteamiento de la acusación", "Presentación de la teoría del caso"]
tipo: ordenar

enunciado: "Ordene cronológicamente las acciones que un Fiscal realiza desde el inicio de la investigación hasta la etapa intermedia:"

explicacion: |
  Primero se recolectan los indicios (elementos de convicción), luego se estructura la acusación formal y finalmente se presenta la teoría del caso para sostener la pretensión punitiva.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["fiscalia", "juez_de_control", "controversia"]

respuesta: "El Fiscal es una parte procesal que busca la verdad histórica para acusar."
tipo: mc
opciones_explicitas: ["El Fiscal es una parte procesal que busca la verdad histórica para acusar.", "El Juez de Control es una parte procesal que busca la verdad histórica para acusar.", "El Fiscal es un tercero imparcial que controla la legalidad.", "El Juez de Control es una parte que busca la verdad para acusar."]

enunciado: "Para distinguir las funciones en el proceso penal, si consideramos que el Juez de Control es el garante de la legalidad, entonces el Fiscal es ___."

explicacion: |
  El Fiscal es una parte (sujeto procesal) con una función de persecución penal, mientras que el Juez es un tercero ajeno al conflicto que asegura que la investigación no vulnere derechos fundamentales.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia"]

variables:
  datos: [["El fiscal debe dirigir la investigación para recabar pruebas que sustenten la acusación", "verdadero"], ["El fiscal es el encargado de la defensa técnica del imputado", "falso"], ["El fiscal debe buscar tanto la prueba de cargo como la de descargo", "verdadero"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En un proceso penal, ¿es correcto afirmar que: {datos[idx][0]}?"

explicacion: |
  El fiscal tiene el deber de objetividad, lo que implica que debe investigar no solo lo que incrimina al imputado, sino también aquello que pueda exculparlo.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "clasificacion"]

variables:
  datos: [["Un testigo presencial que relata lo visto", "testimonio"], ["Un perito que analiza una huella dactilar", "pericial"], ["Un video de una cámara de seguridad", "documental"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["testimonio", "pericial", "documental"]

enunciado: "En el marco de la investigación, el elemento descrito como '{datos[idx][0]}' se clasifica legalmente como una prueba de tipo: ___"

explicacion: |
  La clasificación de la prueba depende de la naturaleza del medio empleado para obtener la convicción del juez.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["procedimiento", "cadena_de_custodia"]

respuesta_orden: ["Preservación", "Recolección", "Embalaje", "Traslado"]
tipo: ordenar
opciones_explicitas: ["Preservación", "Recolección", "Embalaje", "Traslado"]

enunciado: "Ordene cronológicamente los pasos críticos para asegurar la integridad de la evidencia física en la escena del crimen:"

explicacion: |
  La cadena de custodia requiere un orden estricto para evitar la contaminación o alteración de la prueba desde el hallazgo hasta el laboratorio.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["carga_de_la_prueba", "fiscalia"]

variables:
  datos: [["La fiscalía no logra presentar pruebas suficientes para la condena", "improcedente"], ["El imputado debe probar su inocencia mediante pruebas directas", "improcedente"], ["El fiscal debe demostrar la culpabilidad más allá de toda duda razonable", "procedente"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["improcedente", "procedente"]

enunciado: "Analice la siguiente premisa: {datos[idx][0]}. ¿Es esta afirmación jurídicamente ___?"

explicacion: |
  En el proceso penal rige el principio de presunción de inocencia, por lo que la carga de la prueba recae sobre la fiscalía.
```

```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "validez"]

variables:
  datos: [["La falta de registro en la cadena de custodia ___ la validez de la prueba", "anula"], ["El peritaje es ___ para la investigación", "esencial"], ["El fiscal es ___ de la escena del crimen", "responsable"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "anula"
  - "esencial"
  - "responsable"

enunciado: "Complete la afirmación según el caso: {datos[idx][0]}."

explicacion: |
  La integridad de la evidencia es fundamental para que la prueba sea admitida y tenga valor probatorio en el juicio.
```

## Sección: juicio-oral (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["proceso_penal", "definicion"]

tipo: mc
opciones_explicitas: ["La etapa de investigación donde se recolectan elementos de convicción.", "La etapa de debate público donde se presentan pruebas y argumentos para obtener un veredicto.", "La etapa de revisión de la sentencia por un tribunal superior.", "La fase de detención del imputado por parte de la policía."]

respuesta: "La etapa de debate público donde se presentan pruebas y argumentos para obtener un veredicto."

enunciado: "El juicio oral se define fundamentalmente como:"

explicacion: |
  El juicio oral es la etapa culminante del proceso penal, caracterizada por la oralidad, la inmediación y la publicidad, donde se debate la culpabilidad o inocencia.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["sujetos_procesales", "juez"]

tipo: vf
enunciado: "En un juicio oral, el tribunal tiene la función de dictar una sentencia basada en las pruebas presentadas durante el debate."

respuesta: verdadero

explicacion: |
  Correcto. El tribunal (juez o tribunal de enjuiciamiento) debe valorar las pruebas bajo las reglas de la sana crítica para emitir un fallo.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas principales de un debate en juicio oral:"

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Sentencia"]

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con el examen de testigos y peritos (prueba), los alegatos finales (clausura) y concluye con el fallo (sentencia).
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["argumentacion", "terminos"]

tipo: completar
respuestas_validas:
  - "clausura"
  - "apertura"

enunciado: "El alegato de ___ es la exposición final que realiza cada parte para convencer al tribunal de su teoría del caso tras la producción de la prueba."

respuesta: "clausura"

explicacion: |
  El alegato de clausura es la oportunidad para la parte para realizar un análisis crítico de la prueba producida y reforzar su pretensión.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "publicidad"]

enunciado: "Si el juicio se realiza en una sala abierta al público y sin restricciones de acceso, se está cumpliendo con el principio de ___."

pasos:
  - "Identificar el principio relacionado con la visibilidad del acto."

tipo: mc
opciones_explicitas: ["Publicidad", "Inmediación", "Contradicción", "Oralidad"]

respuesta: "Publicidad"

explicacion: |
  El principio de publicidad garantiza que los actos procesales sean conocidos por la sociedad, asegurando transparencia en la administración de justicia.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["procedimiento", "pruebas"]

respuesta: "testigo"
tipo: completar
respuestas_validas:
  - "testigo"

enunciado: "Durante la etapa de debate en el juicio oral, la persona que comparece para declarar sobre hechos que presenció se denomina ___."

explicacion: |
  En el juicio oral, el testigo es el sujeto que aporta información directa sobre los hechos objeto del proceso.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que el tribunal dicte sentencia basándose en pruebas que no fueron producidas y debatidas durante la etapa de juicio oral?"

explicacion: |
  Falso. El principio de inmediación y contradicción exige que toda prueba utilizada para la sentencia haya sido debidamente producida en el juicio oral.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "procedimiento"]

respuesta_orden: ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"]
tipo: ordenar
opciones_explicitas: ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"]

enunciado: "Ordene cronológicamente las etapas fundamentales del debate en un juicio oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con la incorporación de elementos de convicción (prueba) y finaliza con las conclusiones (clausura).
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["sentencia", "veredicto"]

respuesta: "condena"
tipo: mc
opciones_explicitas: ["absolución", "condena"]

enunciado: "Si tras la valoración de la prueba el tribunal determina que la culpabilidad ha sido acreditada más allá de toda duda razonable, el resultado es una ___."

explicacion: |
  La condena es el acto mediante el cual se impone una pena tras haber probado la responsabilidad penal.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["derechos", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "En el juicio oral, el derecho a la contradicción implica que las partes pueden objetar la prueba presentada por la contraparte. ¿Es este un derecho fundamental para asegurar un juicio justo?"

explicacion: |
  La contradicción es la facultad de controlar la prueba de la contraparte, permitiendo el control de la veracidad y legalidad de los elementos presentados.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["procedimiento", "recursos"]

respuesta: falso
tipo: vf

enunciado: "En un juicio oral, una vez que el tribunal dicta el veredicto o sentencia, esto significa que la decisión es definitiva y no puede ser revisada por una instancia superior mediante un recurso de apelación."

explicacion: |
  Falso. El principio de la doble instancia permite que las partes impugnen la sentencia ante un tribunal superior para que esta sea revisada, siempre que se cumplan los requisitos legales.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "principios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0, "El imputado debe demostrar su inocencia"], [1, "La fiscalía debe demostrar la culpabilidad"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["El imputado debe demostrar su inocencia", "La fiscalía debe demostrar la culpabilidad", "Ambas partes deben probar todo lo que aleguen", "El juez decide qué debe probarse"]

enunciado: "En el marco del juicio oral y bajo el principio de presunción de inocencia, ¿cuál es la carga de la prueba respecto a la responsabilidad penal?"

explicacion: |
  La carga de la prueba recae sobre la parte acusadora (fiscalía/querella). El imputado no tiene la obligación de probar su inocencia; es el Estado quien debe destruir la presunción de inocencia mediante pruebas de cargo.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["etapas", "procedimiento"]

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]
tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]

enunciado: "Para que el juicio oral sea válido, se debe respetar un orden lógico y cronológico en sus etapas. Ordene las siguientes fases según el desarrollo estándar de un debate oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con la recepción de evidencia (testigos, peritos, documentos), luego las conclusiones finales (clausura) y termina con la decisión del tribunal.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["juez", "imparcialidad"]

respuesta: "imparcial"
tipo: completar
respuestas_validas:
  - "imparcial"

enunciado: "Durante la etapa de producción de prueba en el juicio oral, el juez debe mantener un rol ___ y no debe proponer pruebas de oficio que no hayan sido solicitadas por las partes, para no vulnerar la imparcialidad."

explicacion: |
  El sistema acusatorio exige que el juez sea un tercero imparcial. Si el juez busca o propone pruebas, se rompe la igualdad de armas entre la acusación y la defensa.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["pruebas", "limites"]

respuesta: "excepcional"

enunciado: "En un juicio oral, la regla general es la prohibición de introducir elementos de convicción que no hayan sido debidamente anunciados y admitidos en la etapa intermedia. Sin embargo, la incorporación de prueba nueva es ___ si se demuestra que es un elemento sobreviniente que no pudo ser conocido antes."

tipo: mc
opciones_explicitas: ["prohibido", "excepcional", "obligatorio", "imposible"]

explicacion: |
  Aunque el juicio oral se rige por la preclusión (lo que no se anunció antes, no entra), existe la excepción de la "prueba sobreviniente" para garantizar la búsqueda de la verdad real.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["proceso_penal", "etapas"]

respuesta: "audiencia"
tipo: "completar"
respuestas_validas:
  - "audiencia"

enunciado: "A diferencia de la etapa de instrucción, donde se recolectan elementos de convicción, el juicio oral se desarrolla mediante una ___ pública y contradictoria."

explicacion: |
  La etapa de instrucción tiene como fin la investigación y recolección de pruebas, mientras que el juicio oral es la etapa de debate y decisión.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios_procesales", "inmediación"]

respuesta: verdadero
tipo: "vf"

enunciado: "El principio de inmediación exige que el tribunal debe tener contacto directo con la producción de la prueba durante el juicio oral, sin intermediarios."

explicacion: |
  La inmediación es un pilar del juicio oral: el juez debe presenciar directamente la declaración de testigos y peritos para valorar la prueba.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["caracteristicas", "debate"]

respuesta: "Oralidad"
tipo: "mc"
opciones_explicitas: ["Oralidad", "Escrituriedad", "Secreto", "Inmediatez"]

enunciado: "Si bien ambos procesos buscan la verdad, lo que distingue fundamentalmente al juicio oral de los sistemas escritos antiguos es la ___."

explicacion: |
  La oralidad permite la contradicción inmediata y la fluidez del debate, a diferencia de los sistemas donde solo se leen actas escritas.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura"]
tipo: "ordenar"
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura"]

enunciado: "Ordene cronológicamente las fases principales del debate en un juicio oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con el examen de pruebas y finaliza con los argumentos finales (clausura).
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["pruebas", "argumentacion"]

variables:
  escenario: uno_de([0, 1])
  datos: [["presentación de pruebas", "determinar culpabilidad"], ["argumentos", "convencer al juez"]]

respuesta: datos[escenario][1]
tipo: "mc"
opciones_explicitas: ["presentación de pruebas", "argumentos", "determinar culpabilidad", "convencer al juez"]

enunciado: "En el juicio oral, ¿cuál es el objetivo principal de la etapa de {datos[escenario][0]}?"

explicacion: |
  El objetivo de la producción probatoria es aportar elementos que permitan al tribunal alcanzar la certeza necesaria para dictar un veredicto.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia"]

enunciado: "En el escenario donde el fiscal presenta un testigo que afirma haber visto al imputado cometiendo el robo, ¿qué parte está ejerciendo la carga de la prueba?"

respuesta: "acusación"
tipo: mc
opciones_explicitas: ["acusación", "defensa", "tribunal", "testigo"]

explicacion: |
  En el proceso penal, la carga de la prueba recae sobre la parte acusadora (fiscalía) para desvirtuar la presunción de inocencia.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["veredicto", "sentencia"]

enunciado: "El veredicto es la decisión final que dicta el tribunal tras haber valorado las pruebas presentadas durante el juicio oral."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El veredicto es el acto mediante el cual el juzgador comunica su decisión sobre la culpabilidad o inocencia del acusado.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "debate"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un juicio oral:"

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]
tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]

explicacion: |
  El juicio inicia con la presentación de las teorías del caso (apertura), sigue con la recepción de evidencia, concluye con los argumentos finales (clausura) y termina con la decisión del tribunal.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["principios", "inmediación"]

variables:
  datos: [["El juez no estuvo presente durante el interrogatorio de un testigo clave.", "invalida"], ["El juez presenció toda la evacuación de la prueba de ADN.", "valida"]]
  idx: uno_de([0, 1])

enunciado: "Si en un juicio {datos[idx][0]}, la validez del acto procesal se considera ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El principio de inmediación exige que el tribunal esté en contacto directo con la producción de la prueba para poder valorarla correctamente.
```

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "in dubio pro reo"]

enunciado: "Si la prueba presentada por la fiscalía es insuficiente y surge una duda razonable, el juez debe dictar una sentencia de ___."

respuesta: "absolución"
tipo: mc
opciones_explicitas: ["condena", "absolución", "anulación", "suspensión"]

explicacion: |
  Bajo el principio 'in dubio pro reo', ante la duda razonable o prueba insuficiente, la decisión debe favorecer al imputado mediante la absolución.
```

## Sección: norma-jerarquia-y-vigencia (24 preguntas)

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["definicion", "norma"]

tipo: mc
opciones_explicitas: ["Un conjunto de reglas de conducta dictadas por una autoridad legítima para regular la convivencia social.", "Un conjunto de opiniones personales sobre lo que es justo o injusto.", "Una sugerencia de comportamiento que no conlleva sanción legal.", "Un conjunto de costumbres que se repiten en el tiempo sin necesidad de aprobación estatal."]

enunciado: "Se define como norma jurídica a ___."

respuesta: "Un conjunto de reglas de conducta dictadas por una autoridad legítima para regular la convivencia social."

explicacion: |
  La norma jurídica es un mandato dictado por un órgano competente que tiene como fin regular la conducta humana en sociedad, cuya observancia puede ser exigida mediante la aplicación de una sanción.
```

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["jerarquia", "kelsen"]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Leyes Nacionales", "Decretos del Poder Ejecutivo", "Reglamentos"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según la doctrina de la Pirámide de Kelsen:"

respuesta_orden: ["Constitución Nacional", "Leyes Nacionales", "Decretos del Poder Ejecutivo", "Reglamentos"]

explicacion: |
  En un sistema jurídico jerarquizado, la Constitución es la norma suprema. Las leyes nacionales se encuentran por debajo de la Constitución, seguidas por los decretos y, finalmente, los reglamentos.
```

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "intermedio"
  tags: ["vigencia", "publicacion"]

tipo: completar
respuestas_validas:
  - "publicación en el Boletín Oficial"

enunciado: "Para que una norma sea obligatoria y tenga vigencia, es requisito indispensable su ___."

respuesta: "publicación en el Boletín Oficial"

explicacion: |
  La vigencia de una norma comienza, por regla general, desde su publicación en el órgano oficial correspondiente (como el Boletín Oficial), permitiendo que sea conocida por todos los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "intermedio"
  tags: ["validez", "jerarquia"]

tipo: vf

enunciado: "¿Puede un decreto del Poder Ejecutivo contradecir lo establecido en la Constitución Nacional sin perder su validez jurídica?"

respuesta: falso

explicacion: |
  No. Debido al principio de jerarquía normativa, ninguna norma de inferior rango (como un decreto) puede contradecir o vulnerar lo establecido por una norma de rango superior (la Constitución).
```

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["sancion", "caracteristica"]

tipo: mc
opciones_explicitas: ["Coercibilidad", "Moralidad", "Costumbre", "Opinión"]

enunciado: "La característica que permite al Estado imponer una consecuencia jurídica ante el incumplimiento de una norma se denomina ___."

respuesta: "Coercibilidad"

explicacion: |
  La coercibilidad es la posibilidad legítima de aplicar la fuerza o la sanción por parte del Estado para asegurar el cumplimiento de la norma jurídica.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Una ley sancionada por el Congreso contradice un artículo de la Constitución Nacional.", "inconstitucional"], ["Un decreto presidencial contradice una ley vigente.", "ilegal"]]

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["constitucional", "inconstitucional", "ilegal", "nulo"]

enunciado: "En el caso donde {escenarios[caso_idx][0]}, la norma de menor jerarquía es considerada ___."

explicacion: |
  Según el principio de supremacía constitucional, la Constitución es la norma de mayor jerarquía. Cualquier norma que la contradiga es inválida por ser inconstitucional.
```

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "promulgacion"]

respuesta: falso
tipo: vf

enunciado: "¿Una norma jurídica adquiere vigencia obligatoria desde el momento exacto de su sanción por el legislativo, incluso antes de su publicación en el Boletín Oficial?"

explicacion: |
  Falso. Para que una norma sea obligatoria, debe cumplir con el proceso de promulgación y su posterior publicación en el Boletín Oficial para que sea conocida por todos.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]
tipo: ordenar

enunciado: "Ordene de mayor a menor jerarquía el siguiente bloque normativo:"

pasos:
  - "Identifique la norma de máxima autoridad (Constitución)."
  - "Ubique los tratados con jerarquía constitucional."
  - "Coloque las leyes nacionales por debajo de los tratados."
  - "Ubique los decretos del Poder Ejecutivo."
  - "Finalice con las normas de menor rango (reglamentos)."

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]

explicacion: |
  La jerarquía normativa sigue la estructura de la Pirámide de Kelsen, donde las normas superiores validan la validez de las inferiores.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["decreto", "poder_ejecutivo"]

respuesta: "decreto"
tipo: completar
respuestas_validas:
  - "decreto"

enunciado: "Si el Poder Ejecutivo dicta una norma para reglamentar una ley, estamos ante un ___."

explicacion: |
  Los decretos reglamentarios tienen como función facilitar la aplicación de una ley, pero siempre deben estar subordinados a ella y no pueden modificar su espíritu.
```

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "avanzado"
  tags: ["irretroactividad", "vigencia"]

tipo: mc
opciones_explicitas: ["retroactiva", "prospectiva", "inaplicable", "nula"]

respuesta: "retroactiva"

enunciado: "Si una ley establece sanciones para hechos ocurridos antes de su entrada en vigencia, se trata de una norma ___."

explicacion: |
  Por regla general, las leyes son prospectivas (rigen hacia el futuro). La aplicación retroactiva es excepcional y suele estar limitada por la Constitución (especialmente en materia penal).
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

respuesta: "Constitución Nacional"
tipo: "mc"
opciones_explicitas: ["Constitución Nacional", "Ley Nacional", "Decreto del Poder Ejecutivo", "Resolución Ministerial"]

enunciado: "En el ordenamiento jurídico, la norma de mayor jerarquía, que sirve de base para todas las demás y no puede ser contradicha por ninguna ley o decreto, es la _______."

explicacion: |
  Según la Pirámide de Kelsen, la Constitución Nacional es la norma suprema. Ninguna norma de inferior jerarquía (como una ley o un decreto) puede vulnerar lo establecido en ella.
```

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "intermedio"
  tags: ["vigencia", "publicacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una norma jurídica entra en vigencia automáticamente desde el momento en que es redactada y firmada por la autoridad competente, sin necesidad de ser publicada."

explicacion: |
  Para que una norma sea obligatoria y tenga vigencia, debe ser publicada en el Boletín Oficial (o medio equivalente) para que sea del conocimiento público. La mera firma no garantiza la vigencia.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["ley", "decreto", "jerarquia"]

tipo: "mc"
opciones_explicitas: ["Ley", "Decreto", "Resolución"]

respuesta: "Ley"

enunciado: "Si un Decreto contradice lo establecido en una Ley, la norma de mayor jerarquía prevalece y el acto administrativo es inválido por jerarquía. ¿Cuál de las dos normas es la de mayor jerarquía?"

explicacion: |
  En la jerarquía normativa, la Ley (dictada por el Congreso) tiene un rango superior al Decreto (dictado por el Ejecutivo). Por lo tanto, un decreto no puede modificar ni contradecir una ley.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes", "Decretos", "Reglamentos"]
respuesta_orden: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes", "Decretos", "Reglamentos"]
tipo: "ordenar"

enunciado: "Ordene las siguientes normas desde la de mayor jerarquía a la de menor jerarquía, considerando el bloque de constitucionalidad y la normativa infralegal."

explicacion: |
  El orden correcto sigue la supremacía constitucional, seguida por las leyes nacionales, los actos del poder ejecutivo (decretos) y finalmente las normas de menor rango como reglamentos o resoluciones.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas:
  - "Constitución Nacional"
  - "Constitución"

enunciado: "En el sistema jurídico, la norma de mayor jerarquía que fundamenta la validez de todo el ordenamiento es la ___."

explicacion: |
  La Constitución Nacional se encuentra en la cúspide de la pirámide jurídica; ninguna norma inferior puede contrariar su contenido.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["ley", "decreto"]

respuesta: verdadero
tipo: vf
enunciado: "En una comparación de jerarquía, una Ley sancionada por el Congreso tiene un rango superior a un Decreto emitido por el Poder Ejecutivo."

explicacion: |
  Correcto. Las leyes son dictadas por el Poder Legislativo y tienen una jerarquía superior a los decretos reglamentarios del Ejecutivo.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden_jerarquico", "normas"]

opciones_explicitas: ["Constitución Nacional", "Leyes", "Decretos", "Reglamentos"]
respuesta_orden: ["Constitución Nacional", "Leyes", "Decretos", "Reglamentos"]
tipo: ordenar

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía jurídica:"

pasos:
  - "Identifique la norma suprema."
  - "Ubique la norma dictada por el Congreso."
  - "Ubique la norma de carácter administrativo del Ejecutivo."
  - "Ubique la norma que desarrolla una ley previa."

explicacion: |
  El orden jerárquico descendente es: Constitución, Leyes, Decretos y Reglamentos.
```

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "publicacion"]

tipo: mc
opciones_explicitas: ["publicación en el Boletín Oficial", "sanción por el Congreso", "firma del Presidente", "debate parlamentario"]

respuesta: "publicación en el Boletín Oficial"

enunciado: "Para que una norma sea jurídicamente vigente y obligatoria para todos, es requisito indispensable su ___."

explicacion: |
  La sanción es un paso necesario, pero la vigencia (obligatoriedad) se perfecciona con la publicación oficial.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "avanzado"
  tags: ["reglamento", "ley"]

respuesta: falso
tipo: vf
enunciado: "A diferencia de la Ley, un Reglamento tiene la capacidad de crear derechos y obligaciones nuevos de manera autónoma, sin necesidad de una ley previa."

explicacion: |
  Falso. El reglamento es una norma de carácter secundario que tiene como función reglamentar (desarrollar) una ley existente, no crear derechos nuevos de forma autónoma.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["constitucion", "ley", "jerarquia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Una ley sancionada por el Congreso contradice un artículo de la Constitución Nacional.", "Constitución"], ["Un decreto presidencial contradice una Ley Nacional vigente.", "Ley Nacional"]]

tipo: mc
opciones_explicitas: ["Constitución", "Ley Nacional", "Decreto Presidencial", "Reglamento"]

enunciado: "En el caso de un conflicto normativo donde {datos[escenario_idx][0]}, ¿qué norma prevalece según la jerarquía jurídica?"

respuesta: datos[escenario_idx][1]

explicacion: |
  De acuerdo al principio de jerarquía normativa (Pirámide de Kelsen), la norma de mayor rango prevalece sobre las de menor rango. En este caso, la Constitución es la norma suprema.
```

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "promulgacion"]

tipo: vf
respuesta: verdadero

enunciado: "Una norma jurídica adquiere vigencia y es obligatoria para los ciudadanos una vez que ha sido debidamente promulgada y publicada en el Boletín Oficial."

explicacion: |
  La vigencia requiere que la norma sea conocida públicamente a través de la publicación oficial para que el principio de ignorancia de la ley no sea excusa.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes Nacionales", "Decretos Reglamentarios"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes Nacionales", "Decretos Reglamentarios"]

enunciado: "Ordene de mayor a menor jerarquía el siguiente bloque normativo:"

explicacion: |
  La jerarquía establece que la Constitución y los Tratados con jerarquía constitucional están en la cima, seguidos por las leyes y, finalmente, los reglamentos o decretos.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["reglamento", "decreto"]

tipo: completar
respuestas_validas:
  - "reglamentar"

enunciado: "El objetivo principal de un decreto reglamentario es ___ la norma de jerarquía superior para facilitar su ejecución."

respuesta: "reglamentar"

explicacion: |
  Los reglamentos y decretos no pueden modificar el espíritu de la ley, sino que su función es reglamentar o aplicar los detalles técnicos para su cumplimiento.
```

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "avanzado"
  tags: ["validez", "vigencia", "derogacion"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [["Una ley ha sido derogada por una nueva ley posterior.", "no tiene vigencia"], ["Una ley fue sancionada pero aún no se publicó en el Boletín Oficial.", "no tiene vigencia"]]

tipo: mc
opciones_explicitas: ["tiene vigencia", "no tiene vigencia", "es nula"]

enunciado: "Si una norma se encuentra en la situación descrita: {situaciones[situacion_idx][0]}, ¿cuál es su estado respecto a la vigencia?"

respuesta: situaciones[situacion_idx][1]

explicacion: |
  Para que una norma sea vigente debe estar publicada y no haber sido derogada por otra norma de igual o superior jerarquía.
```

## Sección: politica-criminal-garantismo-mano-dura (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "mano_dura"]

respuesta: "garantismo"
tipo: "completar"
respuestas_validas:
  - "garantismo"

enunciado: "El modelo de política criminal que pone el foco en la protección de los derechos fundamentales del imputado y el respeto irrestricto a las garantías procesales se denomina ___."

explicacion: |
  El garantismo busca limitar el poder punitivo del Estado para asegurar que el proceso penal respete los derechos humanos del acusado.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["mano_dura", "seguridad"]

respuesta: "priorizar la seguridad ciudadana y el castigo penal"
tipo: "mc"
opciones_explicitas: ["priorizar la seguridad ciudadana y el castigo penal", "garantizar el debido proceso por sobre la eficacia", "reducir la población carcelaria mediante medidas alternativas", "limitar la discrecionalidad judicial"]

enunciado: "La política criminal de 'mano dura' se caracteriza principalmente por:"

explicacion: |
  La 'mano dura' suele priorizar la eficacia en la persecución del delito y el aumento de las penas como respuesta inmediata a la inseguridad.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "seguridad"]

respuesta: falso
tipo: "vf"

enunciado: "El garantismo penal es incompatible con la búsqueda de la seguridad ciudadana."

explicacion: |
  Falso. El garantismo busca una seguridad jurídica donde el Estado sea eficaz pero sin vulnerar los derechos fundamentales de los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "derechos"]

respuesta: "debido proceso"
tipo: "completar"
respuestas_validas:
  - "debido proceso"

enunciado: "Para el garantismo, el ___ es el pilar fundamental que asegura que la aplicación de la ley penal sea justa y no arbitraria."

explicacion: |
  El debido proceso es el conjunto de garantías que protegen al individuo frente al ejercicio del poder punitivo del Estado.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["mano_dura", "proceso"]

tipo: "ordenar"
opciones_explicitas: ["Aumento de penas", "Mayor presencia policial", "Incremento de la percepción de seguridad"]
respuesta_orden: ["Aumento de penas", "Mayor presencia policial", "Incremento de la percepción de seguridad"]

enunciado: "Ordene la secuencia lógica de objetivos/acciones que suele promover una política de 'mano dura' para combatir la criminalidad:"

explicacion: |
  La lógica de la mano dura suele partir de la acción punitiva y de control (penas y policía) con el fin de generar una sensación de orden y seguridad.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "mano_dura"]

respuesta: "garantismo"
tipo: "mc"
opciones_explicitas: ["garantismo", "mano_dura", "populismo_punitivo"]

enunciado: "Un sistema que prioriza el respeto estricto a las garantías procesales y la presunción de inocencia, limitando el poder punitivo del Estado para proteger al individuo, se identifica con el:"

explicacion: |
  El garantismo busca que el proceso penal sea un límite al poder del Estado, asegurando que nadie sea sancionado sin un juicio justo y respetando sus derechos fundamentales.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "castigo", "mano_dura"]

variables:
  escenario: uno_de(["Aumento de la criminalidad", "Inseguridad ciudadana", "Crisis de delincuencia"])

respuesta: "mano_dura"
tipo: "mc"
opciones_explicitas: ["garantismo", "mano_dura"]

enunciado: "Ante el escenario de {escenario}, ¿qué tipo de política criminal suele proponer el endurecimiento de las penas y la expansión de la vigilancia policial para restaurar el orden?"

explicacion: |
  La política de "mano dura" responde a la percepción de inseguridad mediante el incremento de la severidad penal, priorizando la prevención general a través del castigo.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "basico"
  tags: ["principios", "derechos_humanos"]

respuesta: falso
tipo: "vf"

enunciado: "El garantismo penal sostiene que la eficacia en la persecución del delito es más importante que el respeto a las formas procesales."

explicacion: |
  Falso. El garantismo sostiene precisamente lo contrario: la validez del proceso penal depende del respeto irrestricto a las garantías constitucionales, incluso si esto implica la nulidad de una prueba obtenida ilegalmente.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

tipo: "ordenar"
opciones_explicitas: ["Detención", "Imputación", "Juicio Oral", "Sentencia"]
respuesta_orden: ["Detención", "Imputación", "Juicio Oral", "Sentencia"]

enunciado: "Ordene las etapas de un proceso penal bajo un modelo de garantías, partiendo desde la privación de la libertad hasta la resolución del conflicto:"

explicacion: |
  Un proceso garantista debe seguir una secuencia lógica y legal donde cada etapa (desde la detención hasta la sentencia) respete el derecho de defensa y la legalidad.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "avanzado"
  tags: ["medidas_cautelares", "prision_preventiva"]

variables:
  caso: uno_de([["El juez dicta prisión preventiva automática para todos los imputados sin analizar riesgos", "mano_dura"], ["El juez dicta prisión preventiva solo si hay riesgo real de fuga o entorpecimiento", "garantismo"]])

respuesta: caso[1]
tipo: "completar"
respuestas_validas:
  - caso[1]

enunciado: "En un caso donde {caso[0]}, estamos ante una política de tipo ___."

explicacion: |
  La aplicación de la prisión preventiva como una pena anticipada es característica de las políticas de 'mano dura', mientras que el uso de la excepcionalidad de la medida es propia del 'garantismo'.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "seguridad"]

tipo: mc
opciones_explicitas: ["Minimizar la impunidad mediante el aumento de penas y vigilancia", "Asegurar que el Estado respete las garantías procesales del imputado", "Eliminar la posibilidad de defensa técnica para agilizar juicios", "Priorizar la sensación de seguridad ciudadana sobre el debido proceso"]

respuesta: "Priorizar la sensación de seguridad ciudadana sobre el debido proceso"

enunciado: "El enfoque de la política criminal de 'mano dura' se caracteriza primordialmente por:"

explicacion: |
  La política de 'mano dura' prioriza la eficacia en la represión del delito y la seguridad ciudadana, a menudo mediante el endurecimiento de penas, por encima de los límites procesales, mientras que el garantismo busca proteger al individuo frente al poder punitivo del Estado.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "derechos_humanos"]

tipo: vf
respuesta: falso

enunciado: "El garantismo penal implica que el Estado debe liberar a todos los acusados para evitar la impunidad."

explicacion: |
  Falso. El garantismo no busca la impunidad, sino asegurar que la aplicación de la ley penal se ajuste estrictamente a las reglas del debido proceso y los derechos fundamentales. El fin es la justicia, no la liberación sistemática.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["procesal", "garantismo"]

respuesta: "debido proceso"
tipo: completar
respuestas_validas:
  - "debido proceso"

enunciado: "El garantismo penal se fundamenta en la protección de los derechos del imputado y la observancia estricta del ___."

explicacion: |
  El garantismo actúa como un límite al poder punitivo del Estado, asegurando que el proceso penal sea una herramienta de justicia y no de arbitrariedad, respetando los derechos fundamentales y las reglas de procedimiento.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["procedimiento", "garantismo"]

tipo: ordenar
opciones_explicitas: ["Investigación con respeto a la presunción de inocencia", "Debido proceso y derecho de defensa", "Sentencia basada en pruebas lícitas", "Ejecución de la pena conforme a la ley"]

enunciado: "Ordene los pasos de un proceso penal bajo un modelo estrictamente garantista:"

explicacion: |
  Un modelo garantista asegura que cada etapa (investigación, defensa, prueba y ejecución) esté sujeta a controles de legalidad y respeto de los derechos humanos.
respuesta_orden: ["Investigación con respeto a la presunción de inocencia", "Debido proceso y derecho de defensa", "Sentencia basada en pruebas lícitas", "Ejecución de la pena conforme a la ley"]
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "derecho_penal"]

tipo: mc
opciones_explicitas: ["La seguridad ciudadana es un derecho absoluto que justifica cualquier medida", "El garantismo y la seguridad ciudadana son objetivos que deben equilibrarse dentro de la ley", "La política criminal debe centrarse únicamente en la prevención mediante el castigo", "El derecho penal debe ser puramente retributivo"]

respuesta: "El garantismo y la seguridad ciudadana son objetivos que deben equilibrarse dentro de la ley"

enunciado: "En el debate entre garantismo y mano dura, ¿cuál es la postura más equilibrada respecto a la política criminal?"

explicacion: |
  El debate suele centrarse en si la seguridad ciudadana es un valor que puede desplazar a las garantías individuales (visión de mano dura) o si la seguridad solo es legítima si se obtiene respetando el marco constitucional (visión garantista).
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["derecho_penal", "garantismo", "mano_dura"]

tipo: mc
opciones_explicitas: ["El garantismo busca minimizar el poder punitivo del Estado para proteger derechos fundamentales.", "La mano dura busca maximizar la respuesta punitiva para disuadir el delito.", "El garantismo se enfoca exclusivamente en la seguridad ciudadana.", "La mano dura prioriza el debido proceso sobre la eficacia de la condena."]

respuesta: "El garantismo busca minimizar el poder punitivo del Estado para proteger derechos fundamentales."

enunciado: "Al contrastar ambos modelos, ¿cuál es la premisa fundamental que distingue al garantismo de la política de mano dura?"

explicacion: |
  El garantismo penal se basa en la idea de que el proceso penal debe ser un conjunto de límites al poder punitivo del Estado para asegurar los derechos del imputado. La mano dura, en cambio, prioriza la eficacia de la persecución penal y el castigo como herramienta de seguridad.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["estado", "derechos"]

tipo: vf

enunciado: "En un modelo de política criminal de 'mano dura', el objetivo principal es la protección de las garantías procesales del imputado por sobre la seguridad colectiva."

respuesta: falso

explicacion: |
  Falso. El modelo de mano dura prioriza la seguridad y la respuesta punitiva inmediata, a menudo relajando o acelerando procesos, mientras que el garantismo pone el foco en las garantías del acusado.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "principios"]

respuesta: "presunción de inocencia"
tipo: completar
respuestas_validas:
  - "presunción de inocencia"

enunciado: "Para que una política criminal sea considerada estrictamente garantista, debe asegurar el debido proceso y respetar la ___ como pilares del sistema penal."

explicacion: |
  El garantismo penal se sostiene sobre la idea de que el Estado debe respetar el debido proceso y la presunción de inocencia, limitando su capacidad de sanción a lo estrictamente necesario y legalmente establecido.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["orden", "prioridades"]

tipo: ordenar
opciones_explicitas: ["Garantía de derechos individuales", "Control de la legalidad de la prueba", "Aplicación de la pena"]

enunciado: "Ordene los pasos de un proceso penal bajo un enfoque estrictamente garantista, desde la etapa de instrucción hasta la sentencia:"

respuesta_orden: ["Garantía de derechos individuales", "Control de la legalidad de la prueba", "Aplicación de la pena"]

explicacion: |
  En el garantismo, el orden lógico y jurídico exige primero asegurar los derechos del imputado, luego validar que la prueba sea legal y, solo tras cumplir todo el proceso, aplicar la pena.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["seguridad", "derechos_fundamentales"]

variables:
  escenario: uno_de([["Enfoque en la prevención mediante el control social y la sanción severa", "mano dura"], ["Enfoque en la limitación del poder punitivo y el respeto a la norma", "garantismo"]])

tipo: mc
opciones_explicitas: ["mano dura", "garantismo"]

enunciado: "Identifique el modelo descrito: {escenario[0]}"

respuesta: escenario[1]

explicacion: |
  El modelo de mano dura se centra en la respuesta punitiva y la seguridad como respuesta al fenómeno criminal, mientras que el garantismo se centra en la legalidad y los límites al Estado.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["derecho_penal", "politica_criminal"]

variables:
  escenario: uno_de([["Un aumento en la tasa de robos en un barrio requiere aumentar las penas mínimas y la presencia policial agresiva.", "mano_dura"], ["Un aumento en la tasa de robos en un barrio requiere fortalecer el debido proceso y la revisión de las condiciones de detención.", "garantismo"]])

enunciado: "Ante un aumento de la criminalidad, la siguiente medida: '{escenario[0]}' se define como una política de ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["garantismo", "mano_dura"]

explicacion: |
  La política de 'mano dura' se caracteriza por el endurecimiento de las penas y la priorización de la seguridad colectiva, mientras que el 'garantismo' busca proteger los derechos fundamentales del imputado frente al poder punitivo del Estado.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["derechos_humanos", "garantismo"]

respuesta: verdadero
tipo: vf

enunciado: "El garantismo penal sostiene que el proceso judicial debe servir como un límite al poder punitivo del Estado para proteger los derechos del acusado."

explicacion: |
  Correcto. El garantismo ve al proceso penal como un conjunto de garantías que protegen al individuo de posibles arbitrariedades estatales.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "populismo_penal"]

variables:
  caso: uno_de([["La implementación de leyes de detención preventiva automática para reducir la sensación de inseguridad.", "mano_dura"], ["La creación de defensorías públicas para asegurar que todo procesado tenga asistencia legal técnica.", "garantismo"]])

enunciado: "La estrategia de {caso[0]} es un ejemplo característico de una política de tipo ___________."

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - caso[1]

explicacion: |
  Las medidas que buscan la eficacia punitiva inmediata suelen asociarse al modelo de mano dura.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["proceso_penal", "garantismo"]

respuesta_orden: ["Presunción de inocencia", "Derecho a la defensa", "Debido proceso", "Principio de legalidad"]
tipo: ordenar

opciones_explicitas: ["Presunción de inocencia", "Derecho a la defensa", "Debido proceso", "Principio de legalidad"]

enunciado: "Ordene los principios garantistas desde el que actúa como base fundamental en la etapa de investigación hasta el que rige la aplicación de la ley:"

explicacion: |
  El orden lógico parte de la presunción de inocencia, sigue con la defensa técnica, el debido proceso como conjunto de reglas y la legalidad como marco normativo.
```

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "derecho_penal"]

variables:
  medida: uno_de([["Aumentar el número de cárceles y reducir beneficios carcelarios para disuadir el delito.", "mano_dura"], ["Limitar el uso de la prisión preventiva para evitar el hacinamiento y la criminalización de la pobreza.", "garantismo"]])

enunciado: "La medida consistente en {medida[0]} es un ejemplo de política de ___________."

respuesta: medida[1]
tipo: mc
opciones_explicitas: ["garantismo", "mano_dura"]

explicacion: |
  La política de mano dura suele enfocarse en la retribución y la disuasión mediante el endurecimiento del sistema carcelario.
```

## Sección: ramas-del-derecho (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "regulación"]

respuesta: "personas y relaciones privadas"
tipo: completar
respuestas_validas:
  - "personas y relaciones privadas"

enunciado: "El Derecho Civil es la rama que regula las relaciones entre ___."

explicacion: |
  El Derecho Civil regula las relaciones de las personas (físicas o jurídicas) en su ámbito privado, como la familia, la propiedad y los contratos civiles.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal del Derecho Penal es imponer sanciones o penas ante la comisión de delitos que afectan a la sociedad?"

explicacion: |
  Correcto. El Derecho Penal define las conductas consideradas delitos y establece las penas correspondientes para mantener el orden social.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "laboral", "administrativo"]

respuesta: "comercial"
tipo: mc
opciones_explicitas: ["laboral", "comercial", "administrativo", "penal"]

enunciado: "Si una disputa surge a raíz de un contrato de compraventa entre dos empresas, ¿qué rama del derecho regula este conflicto?"

explicacion: |
  Un contrato de compraventa entre empresas es un acto de comercio, por lo tanto la rama correspondiente es el Derecho Comercial.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["administrativo", "estado"]

respuesta: "Estado"
tipo: completar
respuestas_validas:
  - "Estado"

enunciado: "El Derecho Administrativo regula la organización y el funcionamiento del ___ y sus relaciones con los particulares."

explicacion: |
  El Derecho Administrativo es la rama que regula la actividad de la administración pública y el ejercicio de la función administrativa del Estado.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta_orden: ["delito", "investigación", "juicio", "sentencia"]
tipo: ordenar
opciones_explicitas: ["delito", "investigación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso en el ámbito del Derecho Penal:"

explicacion: |
  El proceso penal comienza con la detección de un delito, seguido de la investigación, el juicio oral y finalmente la emisión de una sentencia.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "contratos"]

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "Juan firma un contrato de alquiler para vivir en un departamento. Si surge un conflicto sobre el pago de las expensas o la entrega de las llaves, la rama del derecho que regula esta relación es el derecho ___."

explicacion: |
  El derecho civil regula las relaciones privadas entre particulares, como los contratos de locación (alquiler), sucesiones y propiedad.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["laboral", "trabajo"]

respuesta: "laboral"
tipo: completar
respuestas_validas:
  - "laboral"
enunciado: "Un empleado es despedido sin causa y sin recibir la indemnización que establece la ley. El trabajador decide demandar para reclamar sus derechos. ¿Qué rama del derecho interviene en este caso? Derecho ___."

explicacion: |
  El derecho laboral regula el vínculo entre empleadores y empleados, protegiendo la parte más débil de la relación y regulando despidos y salarios.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: "penal"
tipo: completar
respuestas_validas:
  - "penal"

enunciado: "Una persona entra a un supermercado y sustrae una mercadería sin pagar, siendo capturada por la seguridad. Dado que este acto constituye un delito contra la propiedad, la rama del derecho que debe intervenir es el derecho ___."

explicacion: |
  El derecho penal se encarga de definir las conductas que son consideradas delitos y de establecer las penas o sanciones correspondientes.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["administrativo", "estado"]

respuesta: "administrativo"
tipo: mc
opciones_explicitas: ["civil", "administrativo", "comercial", "penal"]

enunciado: "El Estado decide multar a una empresa de transporte por incumplir las normas de seguridad vial. Para resolver la validez de esta multa, se debe recurrir al derecho ___."

explicacion: |
  El derecho administrativo regula la organización, funcionamiento y las facultades de la Administración Pública y sus relaciones con los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "ordenar"]

respuesta_orden: ["oferta", "aceptación", "entrega de mercadería", "pago"]
tipo: ordenar
opciones_explicitas: ["oferta", "aceptación", "entrega de mercadería", "pago"]

enunciado: "En una operación de compraventa entre dos empresas (acto de comercio), se deben seguir pasos lógicos para que la relación jurídica se consume. Ordena cronológicamente estos elementos:"

pasos:
  - "El vendedor propone el precio y el producto."
  - "El comprador manifiesta su conformidad con la propuesta."
  - "Se realiza la transferencia del bien."
  - "Se efectúa la contraprestación económica."

explicacion: |
  El derecho comercial regula los actos de comercio y las relaciones entre comerciantes; el proceso sigue una secuencia de oferta, aceptación y ejecución.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "regulacion"]

tipo: mc
opciones_explicitas: ["Las relaciones de trabajo entre empleador y empleado", "Las relaciones de familia, contratos y propiedad entre particulares", "Los delitos y las penas impuestas por el Estado", "Los conflictos entre el Estado y los ciudadanos"]

respuesta: "Las relaciones de familia, contratos y propiedad entre particulares"

enunciado: "Un error común es confundir el Derecho Civil con el Derecho Laboral. Mientras el segundo regula el trabajo, el Derecho Civil regula ___."

explicacion: |
  El Derecho Civil es el tronco común que regula las relaciones privadas entre personas (familia, contratos, sucesiones, propiedad), a diferencia del Laboral que es una rama especializada para el trabajo.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["administrativo", "confusion"]

tipo: vf

respuesta: falso

enunciado: "Es un error pensar que el Derecho Administrativo regula los contratos entre dos empresas privadas; su función es regular la organización y el funcionamiento de la administración pública."

explicacion: |
  Falso. El Derecho Administrativo regula la actividad del Estado y sus relaciones con los particulares cuando el Estado actúa como poder público. Los contratos entre empresas privadas son materia del Derecho Comercial/Civil.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["penal", "delitos"]

respuesta: "penal"
tipo: completar
respuestas_validas:
  - "penal"

enunciado: "Si una persona comete un delito, el Estado interviene para imponer una sanción punitiva; esta materia es regulada por el Derecho ___."

explicacion: |
  El Derecho Penal se encarga de las conductas que son consideradas delitos y las sanciones que el Estado impone. No debe confundirse con el Derecho Civil, que busca la reparación de daños pero no la pena criminal.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["comercial", "civil"]

tipo: mc
opciones_explicitas: ["Derecho Comercial", "Derecho Civil", "Derecho Administrativo", "Derecho Penal"]

respuesta: "Derecho Comercial"

enunciado: "Un comerciante tiene un conflicto por una transacción de mercaderías con un proveedor. Aunque el Derecho Civil es la base, la regulación específica de los actos de comercio corresponde al ___."

explicacion: |
  El Derecho Comercial es una rama especializada que regula los actos de comercio y a los sujetos que se dedican a ellos, desprendiéndose del marco general del Derecho Civil.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["laboral", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el vínculo laboral", "Determinar la normativa aplicable (Derecho Laboral)", "Calificar la sanción o indemnización"]

respuesta_orden: ["Identificar el vínculo laboral", "Determinar la normativa aplicable (Derecho Laboral)", "Calificar la sanción o indemnización"]

enunciado: "Ante un conflicto por un despido, el abogado debe seguir este orden lógico para aplicar correctamente el Derecho Laboral:"

explicacion: |
  Primero se debe verificar si existe una relación de dependencia (vínculo), luego aplicar las leyes específicas de trabajo (Laboral) y finalmente determinar la consecuencia jurídica (indemnización).
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "comercial"]

respuesta: "comercial"
tipo: mc
opciones_explicitas: ["civil", "comercial", "penal", "laboral"]

enunciado: "Mientras que el Derecho Civil regula las relaciones privadas de las personas en general, el Derecho ___ se especializa en los actos de comercio y la actividad de los comerciantes."

explicacion: |
  El Derecho Civil es la rama general que regula relaciones como la familia o sucesiones, mientras que el Derecho Comercial es una rama especial que se aplica específicamente a los actos de comercio.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "civil"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del Derecho Civil, que busca la reparación de un daño, el Derecho Penal tiene como fin principal la imposición de una sanción o pena por la comisión de un delito."

explicacion: |
  Es verdadero. El Derecho Civil es eminentemente reparatorio (indemnizaciones), mientras que el Derecho Penal es punitivo (penas de prisión, multas estatales, etc.).
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["laboral", "civil"]

respuesta: "subordinación"
tipo: completar
respuestas_validas:
  - "subordinación"

enunciado: "A diferencia de un contrato de locación de servicios (civil), donde prima la autonomía de la voluntad, el Derecho Laboral se distingue por la existencia de una relación de ___ entre las partes."

pasos:
  - "Identificar la relación jurídica: ¿hay dependencia o es un servicio independiente?"
  - "Comparar con el concepto de autonomía civil."

explicacion: |
  El elemento distintivo del Derecho Laboral es la subordinación (dependencia técnica, económica y jurídica) del trabajador respecto al empleador.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["administrativo", "civil"]

respuesta: "Estado"
tipo: mc
opciones_explicitas: ["Estado", "Particulares", "Empresas", "Sociedades"]

enunciado: "El Derecho Administrativo se distingue del Derecho Civil porque su sujeto principal es el ___ en el ejercicio de sus funciones públicas."

explicacion: |
  El Derecho Administrativo regula la organización y el funcionamiento de la administración pública y sus relaciones con los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "avanzado"
  tags: ["administrativo", "ordenamiento"]

respuesta_orden: ["Constitución", "Ley", "Reglamento"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento"]

enunciado: "En el Derecho Administrativo, para verificar la validez de un acto, se debe seguir el orden jerárquico de normas. Ordene de mayor a menor jerarquía:"

explicacion: |
  La jerarquía normativa establece que un Reglamento no puede contrariar una Ley, y una Ley no puede contrariar la Constitución.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "contratos"]

variables:
  datos: [["Juan firma un contrato de alquiler con un propietario para vivir en su casa.", "civil"], ["María es demandada por un accidente de tránsito.", "civil"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "{datos[idx][0]} ¿Qué rama del derecho regula este vínculo contractual?"

explicacion: |
  El derecho civil regula las relaciones privadas entre personas, como los contratos de alquiler, el matrimonio o la propiedad.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: verdadero
tipo: vf
enunciado: "Un individuo es detenido por sustraer mercadería de un comercio sin pagar. ¿Este hecho es regulado por el derecho penal?"

explicacion: |
  El derecho penal se encarga de las conductas que son consideradas delitos y las penas que el Estado impone a sus autores.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["laboral", "trabajo"]

respuesta: "laboral"
tipo: completar
respuestas_validas:
  - "laboral"

enunciado: "Un empleado es despedido sin causa y reclama sus indemnizaciones. El conflicto se debe resolver ante el derecho ___."

explicacion: |
  El derecho laboral regula las relaciones entre empleadores y trabajadores, incluyendo despidos, salarios y condiciones de trabajo.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "sociedades"]

variables:
  datos: [["Dos socios de una sociedad anónima discuten sobre la distribución de dividendos.", "comercial"], ["Un ciudadano reclama una multa de tránsito impuesta por la municipalidad.", "administrativo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["civil", "penal", "comercial", "administrativo"]

enunciado: "{datos[idx][0]} ¿Qué rama del derecho regula esta actividad?"

explicacion: |
  El derecho comercial (o mercantil) regula los actos de comercio y las relaciones jurídicas derivadas de la actividad de los comerciantes y las sociedades.
```

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["ordenar", "conceptos"]

respuesta_orden: ["Derecho Civil", "Derecho Comercial", "Derecho Administrativo", "Derecho Penal"]
tipo: ordenar

opciones_explicitas: ["Derecho Penal", "Derecho Civil", "Derecho Administrativo", "Derecho Comercial"]

enunciado: "Ordena las siguientes ramas del derecho de mayor a menor amplitud en cuanto a la regulación de la vida cotidiana (desde la relación entre particulares hasta la relación con el Estado y el control social):"

explicacion: |
  El orden lógico suele partir de la regulación de la vida privada (Civil), pasando por el comercio (Comercial), la relación con el Estado (Administrativo) y finalmente la sanción de conductas graves (Penal).
```

## Sección: resolucion-de-conflictos-y-sentencia (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["terminologia", "sentencia"]

tipo: mc
opciones_explicitas: ["El acto mediante el cual el juez resuelve el litigio", "Un acuerdo privado entre las partes", "Una consulta legal realizada a un experto", "El proceso de recolección de pruebas"]

respuesta: "El acto mediante el cual el juez resuelve el litigio"

enunciado: "En el ámbito jurídico, la sentencia se define como ___."

explicacion: |
  La sentencia es la resolución judicial que pone fin a un proceso, resolviendo la controversia planteada por las partes.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["juez", "imparcialidad"]

tipo: vf
respuesta: falso

enunciado: "El juez, al dictar sentencia, debe actuar con parcialidad para asegurar que el resultado favorezca a la parte que presentó más pruebas."

explicacion: |
  Falso. El principio de imparcialidad exige que el juez actúe con objetividad, sin favorecer a ninguna de las partes, basándose únicamente en la ley y las pruebas.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura", "sentencia"]

tipo: completar
respuestas_validas:
  - "fallo"

enunciado: "La estructura clásica de una sentencia contiene los vistos (antecedentes), los considerando (fundamentos de derecho) y el ___ (la decisión final)."
respuesta: "fallo"

explicacion: |
  La estructura lógica de una sentencia requiere la exposición de los hechos, el análisis jurídico y la decisión final.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["resolucion", "litigio"]

tipo: mc
opciones_explicitas: ["Sentencia definitiva", "Sentencia interlocutoria", "Ambas son formas de resolución judicial"]

respuesta: "Ambas son formas de resolución judicial"

enunciado: "Un juez puede resolver cuestiones procesales mediante una sentencia interlocutoria o resolver el fondo del asunto mediante una sentencia definitiva. ¿Qué representan ambas?"

explicacion: |
  Ambas son resoluciones judiciales, pero difieren en su objeto: una resuelve incidentes en el proceso y la otra resuelve la controversia principal.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

tipo: ordenar
opciones_explicitas: ["Demanda", "Práctica de pruebas", "Sentencia"]
respuesta_orden: ["Demanda", "Práctica de pruebas", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales para llegar a una sentencia en un proceso de conocimiento:"

explicacion: |
  Primero se presenta la demanda, luego se produce la etapa probatoria y finalmente el juez dicta la sentencia tras valorar los elementos presentados.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["proceso_judicial", "pruebas"]

variables:
  caso_id: uno_de([0, 1])
  datos: [["prueba_insuficiente", "desestimada"], ["prueba_plena", "estimada"]]

enunciado: "En un juicio por incumplimiento de contrato, el juez analiza la evidencia. Si el juez determina que la evidencia presentada es {datos[caso_id][0]}, la conclusión lógica es que la demanda será ___."

respuestas_validas:
  - "desestimada"
  - "estimada"
respuesta: datos[caso_id][1]
tipo: completar

explicacion: |
  La sentencia depende directamente de la valoración de la prueba. Si la prueba es insuficiente, no se puede romper la presunción de inocencia o de veracidad de la contraparte, resultando en una desestimación.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["procedimiento", "etapas"]

opciones_explicitas: ["Presentación de la demanda", "Producción de pruebas", "Dictado de la sentencia"]
respuesta_orden: ["Presentación de la demanda", "Producción de pruebas", "Dictado de la sentencia"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas fundamentales para que un juez llegue a una decisión definitiva en un proceso civil."

explicacion: |
  El proceso judicial sigue un orden lógico: primero se inicia con la demanda, luego se debate la evidencia (pruebas) y finalmente el juez emite su fallo (sentencia).
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["motivacion", "derecho_constitucional"]

respuesta: verdadero
tipo: vf
enunciado: "La 'motivación' de una sentencia es el deber del juez de explicar las razones fácticas y jurídicas que lo llevaron a tomar una decisión, evitando la arbitrariedad."

explicacion: |
  Una sentencia sin motivación es nula, ya que el derecho a la defensa exige conocer las razones por las cuales se ha decidido un caso.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["congruencia", "sentencia"]

respuesta: "Incongruente"
tipo: mc
opciones_explicitas: ["Congruente", "Incongruente", "Nula"]

enunciado: "Si un juez dicta una sentencia otorgando una indemnización por daños morales cuando el actor solo demandó el pago de una deuda de dinero, la sentencia es ___ respecto a lo solicitado en la demanda."

explicacion: |
  El principio de congruencia exige que el juez debe decidir estrictamente sobre lo pedido por las partes. Si decide algo distinto a lo solicitado, incurre en incongruencia.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["fallo", "reparacion"]

variables:
  monto: uno_de([1000.0, 5000.0])

enunciado: "En un caso de responsabilidad civil, el juez determina que el demandado debe pagar una indemnización de ${monto}. Si el demandado apela y el tribunal superior confirma el monto sin modificarlo, ¿cuál es el monto de la resolución final?"

respuesta: monto
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  En este ejercicio de lógica de variables, el valor final depende de la confirmación del monto establecido en la sentencia de primera instancia.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["sentencia", "motivacion", "debido_proceso"]

tipo: vf
respuesta: falso

enunciado: "Una sentencia judicial es válida y legalmente vinculante incluso si el juez omite la motivación (explicación de los fundamentos de hecho y de derecho) en su decisión."

explicacion: |
  La motivación es un elemento esencial de la sentencia. La falta de motivación vulnera el derecho de defensa y el debido proceso, tornando la sentencia arbitraria y susceptible de nulidad.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["congruencia", "sentencia", "linderos_judiciales"]

tipo: mc
opciones_explicitas: ["Principio de Congruencia", "Principio de Preclusión", "Principio de Inmediación", "Principio de Oralidad"]

respuesta: "Principio de Congruencia"

enunciado: "Si un juez decide sobre una cuestión que no ha sido objeto de la controversia planteada por las partes, está incurriendo en una violación del: ___"

explicacion: |
  El principio de congruencia exige que la sentencia sea coherente con las pretensiones de las partes; el juez no puede otorgar más de lo pedido (ultra petita) ni algo distinto a lo pedido (extra petita).
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["estructura", "sentencia", "partes"]

tipo: ordenar
opciones_explicitas: ["Vistos", "Considerando", "Fallo"]
respuesta_orden: ["Vistos", "Considerando", "Fallo"]

enunciado: "Ordene cronológicamente las partes de una sentencia judicial estándar:"

explicacion: |
  La estructura clásica comprende: 1) Vistos (antecedentes), 2) Considerando (fundamentos de hecho y de derecho) y 3) Fallo (la decisión final o parte dispositiva).
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["hechos", "derecho", "subsuncion"]

tipo: completar
respuestas_validas:
  - "subsunción"
respuesta: "subsunción"

enunciado: "El proceso de razonamiento mediante el cual el juez encuadra los hechos probados dentro de la norma jurídica aplicable se denomina ___."

explicacion: |
  La subsunción es la operación lógica de verificar si un hecho real coincide con los elementos descriptivos de una norma jurídica para aplicar sus consecuencias.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["cosa_juzgada", "seguridad_juridica"]

tipo: mc
opciones_explicitas: ["Cosa juzgada material", "Cosa juzgada formal", "Sentencia interlocutoria", "Recurso de apelación"]
respuesta: "Cosa juzgada material"

enunciado: "Cuando una sentencia firme impide que se vuelva a litigar sobre el mismo objeto y entre las mismas partes, estamos ante la: ___"

explicacion: |
  La cosa juzgada material es la autoridad de la cosa juzgada que impide la reapertura del debate sobre lo ya decidido, garantizando la seguridad jurídica.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["proceso_judicial", "resolucion"]

respuesta: "sentencia"
tipo: mc
opciones_explicitas: ["sentencia", "auto", "providencia", "decreto"]

enunciado: "Mientras que el auto resuelve cuestiones de mero trámite o incidentes dentro del proceso, la decisión que pone fin a la instancia o resuelve la cuestión principal de fondo se denomina ___."

explicacion: |
  La sentencia es la resolución judicial que decide el fondo del asunto litigioso, marcando el fin de la etapa de conocimiento en primera instancia.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["cosa_juzgada", "derecho_procesal"]

respuesta: verdadero
tipo: vf
enunciado: "La 'cosa juzgada' se distingue de la 'cosa decidida' porque la primera implica una inmutabilidad absoluta de la decisión debido a que no admite más recursos, mientras que la segunda se refiere a una decisión que aún es susceptible de ser revisada mediante un recurso."

explicacion: |
  Efectivamente, la cosa juzgada (autoridad de la cosa juzgada) es la calidad de la sentencia cuando ya no puede ser impugnada, adquiriendo firmeza definitiva.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["mecanismos_alternativos", "resolucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["En la mediación, un tercero neutral facilita la comunicación para que las partes encuentren su propia solución.", "mediación"], ["En la conciliación, el tercero tiene una función más activa y puede proponer fórmulas de solución que las partes pueden aceptar.", "conciliación"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["mediación", "conciliación"]

enunciado: "Considerando la distinción técnica: {escenarios[escenario_idx][0]}"

explicacion: |
  La diferencia fundamental radica en el grado de proactividad del tercero: el mediador es un facilitador de la comunicación, mientras que el conciliador puede proponer soluciones.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura_sentencia", "proceso"]

respuesta_orden: ["encabezamiento", "vistos", "considerandos", "fallo"]
tipo: ordenar
opciones_explicitas: ["encabezamiento", "vistos", "considerandos", "fallo"]

enunciado: "Ordene cronológicamente los elementos que componen la estructura lógica de una sentencia judicial estándar:"

explicacion: |
  La sentencia comienza con la identificación de las partes (encabezamiento), la exposición de los antecedentes (vistos), el razonamiento jurídico (considerandos) y la decisión final (fallo).
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["arbitraje", "jurisdiccion"]

respuesta: "laudo"
tipo: completar
respuestas_validas:
  - "laudo"

enunciado: "En un proceso de arbitraje, la decisión final que resuelve la controversia se denomina ___."

explicacion: |
  El término correcto para la decisión de un árbitro es 'laudo', mientras que el término para la decisión de un juez estatal es 'sentencia'.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["sentencia", "juez", "derecho_procesal"]

variables:
  datos: ["Juan demanda a Pedro por una deuda de $1000", "María demanda a Luis por daños en un auto", "Un vecino demanda a otro por ruido excesivo"]
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["La decisión del juez", "El contrato entre las partes", "La demanda inicial", "La mediación previa"]

respuesta: "La decisión del juez"

enunciado: "En el caso donde {datos[idx]}, ¿cómo se denomina la decisión final del juez que pone fin al conflicto?"

explicacion: |
  La sentencia es el acto procesal mediante el cual el juez resuelve la cuestión sometida a su decisión, poniendo fin al proceso.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura", "sentencia", "vistos", "fallo"]

respuesta_orden: ["Vistos", "Considerandos", "Fallo"]
tipo: ordenar
opciones_explicitas: ["Vistos", "Considerandos", "Fallo"]

enunciado: "Ordene cronológicamente las partes de una sentencia judicial estándar:"

pasos:
  - "Identificación de los antecedentes y partes (Vistos)."
  - "Análisis de los hechos y aplicación de la norma (Considerandos)."
  - "La decisión final y resolución del conflicto (Fallo)."

explicacion: |
  Una sentencia bien estructurada comienza con los 'Vistos' (antecedentes), sigue con los 'Considerandos' (razonamiento jurídico) y culmina con el 'Fallo' (la decisión).
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["congruencia", "principio_legal", "juez"]

variables:
  datos: [["El actor pide daños y perjuicios", "El juez otorga solo daños y perjuicios"], ["La actora pide el desalojo", "El juez ordena el desalojo"], ["Se reclama una deuda de $500", "El juez condena al pago de $500"]]
  idx: uno_de([0, 1, 2])

respuesta: verdadero

tipo: vf

enunciado: "Si en el caso donde {datos[idx][0]}, el juez dicta una sentencia que coincide exactamente con lo pedido por las partes, se ha respetado el principio de congruencia."

explicacion: |
  El principio de congruencia exige que el juez debe resolver conforme a las pretensiones de las partes, no pudiendo dar más ni menos de lo solicitado (ultra o extra petita).
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["elementos", "sentencia", "fundamentación"]

respuesta: "resolución"
tipo: completar
respuestas_validas:
  - "resolución"

enunciado: "Toda sentencia debe contener una fundamentación (donde se explica el porqué de la decisión) y una ___ (donde se dicta el mandato final)."

explicacion: |
  La fundamentación es la parte donde el juez aplica la ley a los hechos, y la resolución es la parte dispositiva donde se decide el conflicto.
```

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["cosa_juzgada", "sentencia", "derecho"]

variables:
  datos: [["definitiva", "pasa a cosa juzgada"], ["interlocutoria", "resuelve una cuestión accesoria"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pasa a cosa juzgada", "resuelve una cuestión accesoria", "es solo una opinión", "no tiene validez"]

enunciado: "Si la sentencia es de carácter {datos[idx][0]}, entonces se dice que ___."

explicacion: |
  La sentencia definitiva es la que tiene autoridad de cosa juzgada, impidiendo que el mismo conflicto sea juzgado nuevamente.
```

