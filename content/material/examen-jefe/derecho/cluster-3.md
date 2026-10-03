# Examen jefe — [PENDIENTE #896]

> Logro #896. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

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

## Sección: fuentes-del-derecho (28 preguntas)

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  definicion_correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes del derecho son únicamente las leyes escritas publicadas en el Boletín Oficial."

explicacion: |
  Falso. Las fuentes del derecho incluyen no solo la ley escrita, sino también la costumbre, la jurisprudencia, los principios generales del derecho y la doctrina, entre otros.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "definicion"]

variables:
  definicion_jurisprudencia: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La jurisprudencia es el conjunto de decisiones reiteradas que emiten los jueces sobre un mismo tipo de caso."

explicacion: |
  Verdadero. La jurisprudencia surge de la interpretación constante de la ley por parte de los tribunales, generando criterios uniformes.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jerarquia", "ley_nacional"]

variables:
  jerarquia_correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "Una ley provincial puede contradecir a una ley nacional si así lo decide la legislatura provincial."

explicacion: |
  Falso. Las leyes nacionales tienen jerarquía superior a las provinciales en materias de competencia nacional, y ninguna ley puede violar la Constitución.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "avanzado"
  tags: ["jurisprudencia", "fuente_formal"]

variables:
  es_fuente_formal: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En el sistema jurídico argentino, la jurisprudencia es considerada una fuente formal del derecho."

explicacion: |
  Verdadero. Aunque la ley es la fuente principal, la jurisprudencia tiene un papel fundamental como fuente interpretativa y complementaria, especialmente en sistemas de derecho civil.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["jerarquia", "constitucion_vs_ley"]

variables:
  jerarquia_correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "Una ley nacional puede violar lo establecido en la Constitución si es aprobada por mayoría absoluta."

explicacion: |
  Falso. Ninguna ley, sin importar su origen o mayoría, puede violar lo establecido en la Constitución, que es la norma suprema.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  concepto: "fuentes_del_derecho"

respuesta: "mecanismos"
tipo: completar

enunciado: "Las fuentes del derecho son los {concepto} a través de los cuales se crean, modifican o extinguen las normas jurídicas."

explicacion: |
  Las fuentes del derecho se definen como los mecanismos u orígenes que generan la fuerza obligatoria de las normas.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["legislativo", "creacion_normas"]

variables:
  organo: "Congreso"

respuesta: "legislativo"
tipo: completar

enunciado: "La ley es dictada por el órgano {organo} competente, como el Congreso de la Nación en Argentina."

explicacion: |
  El Poder Legislativo es el encargado de dictar las leyes nacionales.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["promulgacion", "ejecutivo"]

variables:
  poder: "Poder_Ejecutivo"

respuesta: "promulgada"
tipo: completar

enunciado: "Una vez dictada, la ley debe ser {poder} por el Poder Ejecutivo para tener validez."

explicacion: |
  La promulgación es el acto por el cual el Ejecutivo da fe de la existencia de la ley y ordena su cumplimiento.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["publicacion", "boletin_oficial"]

variables:
  medio: "Boletin_Oficial"

respuesta: "publicada"
tipo: completar

enunciado: "Para ofrecer certeza, la ley escrita debe estar {medio} en el Boletín Oficial."

explicacion: |
  La publicación en el Boletín Oficial es el requisito de conocimiento formal para la vigencia de la norma.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["costumbre", "derecho_comercial"]

variables:
  area: "comercial"

respuesta: "usos"
tipo: completar

enunciado: "En el derecho {area}, los usos y costumbres de los comerciantes llenan vacíos legales."

explicacion: |
  La costumbre es vital en el derecho comercial para suplir la falta de normas escritas específicas.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["costumbre", "definicion"]

variables:
  requisito: "reiterada"

respuesta: "practica"
tipo: completar

enunciado: "La costumbre es la {requisito} práctica de un comportamiento aceptado como obligatoria."

explicacion: |
  No basta con un acto aislado; debe haber una repetición constante y la convicción de obligatoriedad.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "jueces"]

variables:
  actor: "jueces"

respuesta: "decisiones"
tipo: completar

enunciado: "La jurisprudencia es el conjunto de {actor} reiteradas que emiten los jueces."

explicacion: |
  La jurisprudencia surge de la interpretación uniforme de los tribunales sobre casos concretos.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["seguridad_juridica", "importancia"]

variables:
  objetivo: "claras"

respuesta: "accesibles"
tipo: completar

enunciado: "Las fuentes garantizan la seguridad jurídica: reglas {objetivo}, accesibles y conocidas."

explicacion: |
  La seguridad jurídica implica que los ciudadanos puedan prever las consecuencias de sus actos.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["legalidad", "castigo"]

variables:
  condicion: "previa"

respuesta: "norma"
tipo: completar

enunciado: "En un Estado de derecho, nadie puede ser castigado sin una {condicion} norma que lo establezca."

explicacion: |
  Este es el principio de legalidad: no hay pena sin ley previa.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jerarquia", "conflictos"]

variables:
  nivel: "inferior"

respuesta: "contradecir"
tipo: completar

enunciado: "Una ley provincial no puede {nivel} a una ley nacional en su contenido esencial."

explicacion: |
  La jerarquía normativa establece que las leyes nacionales prevalecen sobre las provinciales en materias de competencia nacional.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "avanzado"
  tags: ["costumbre", "evolucion"]

variables:
  tendencia: "disminuido"

respuesta: "peso"
tipo: completar

enunciado: "En el derecho moderno, el {tendencia} de la costumbre ha disminuido frente a la ley escrita."

explicacion: |
  Aunque sigue existiendo, su relevancia es menor comparada con la certeza de la ley escrita.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "origen"]

variables:
  fuente: "jueces"

respuesta: "reiteradas"
tipo: completar

enunciado: "No basta con una decisión aislada; deben ser decisiones {fuente} para formar jurisprudencia."

explicacion: |
  La reiteración es clave para que una línea jurisprudencial sea considerada fuente de derecho.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["importancia", "interpretacion"]

variables:
  razon: "dudas"

respuesta: "interpretarlas"
tipo: completar

enunciado: "Estudiar las fuentes permite saber qué reglas seguir y cómo {razon} cuando hay dudas."

explicacion: |
  El conocimiento de las fuentes facilita la resolución de conflictos mediante la interpretación correcta.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["consecuencias", "arbitrariedad"]

variables:
  resultado: "caos"

respuesta: "arbitrariedad"
tipo: completar

enunciado: "Sin fuentes, habría {resultado} y {resultado}, ya que cada uno decidiría según su criterio."

explicacion: |
  La ausencia de fuentes objetivas lleva a la subjetividad y la injusticia.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["ley", "visibilidad"]

variables:
  caracter: "predominante"

respuesta: "visible"
tipo: completar

enunciado: "La ley es la fuente más {caracter} y visible en nuestro sistema jurídico."

explicacion: |
  La ley es la fuente principal porque es escrita, pública y fácil de identificar.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "avanzado"
  tags: ["costumbre", "internacional"]

variables:
  ambito: "internacional"

respuesta: "costumbre"
tipo: completar

enunciado: "En el derecho {ambito}, las costumbres de las naciones son una fuente vital."

explicacion: |
  El derecho internacional público se basa mucho en la práctica estatal constante (costumbre).
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jerarquia", "local"]

variables:
  nivel: "inferior"

respuesta: "municipales"
tipo: completar

enunciado: "Las leyes {nivel} incluyen las provinciales y las municipales."

explicacion: |
  Las normas locales tienen menor jerarquía que las nacionales y la Constitución.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["ley", "certeza"]

variables:
  ventaja: "certeza"

respuesta: "preferente"
tipo: completar

enunciado: "La ley escrita es {ventaja} porque ofrece certeza y accesibilidad."

explicacion: |
  La preferencia de la ley escrita radica en su capacidad de proporcionar seguridad jurídica.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["clasificacion", "tipos"]

variables:
  correcta: "ley"
  distractores: ["sentimiento", "voluntad", "suerte"]

respuesta: "ley"
tipo: mc

enunciado: "¿Cuál de las siguientes es una fuente formal del derecho argentino?"
opciones_explicitas: ["ley", "sentimiento", "voluntad", "suerte"]

explicacion: |
  La ley es una fuente formal. El sentimiento o la suerte no son fuentes jurídicas.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "origen"]

variables:
  correcta: "jueces"
  distractores: ["abogados", "legisladores", "policia"]

respuesta: "jueces"
tipo: mc

enunciado: "¿Quiénes emiten las decisiones que forman la jurisprudencia?"
opciones_explicitas: ["jueces", "abogados", "legisladores", "policia"]

explicacion: |
  La jurisprudencia proviene de las decisiones reiteradas de los jueces.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["costumbre", "comercio"]

variables:
  correcta: "usos"
  distractores: ["leyes", "constituciones", "reglamentos"]

respuesta: "usos"
tipo: mc

enunciado: "¿Qué llenan los vacíos legales en el derecho comercial?"
opciones_explicitas: ["usos", "leyes", "constituciones", "reglamentos"]

explicacion: |
  Los usos y costumbres comerciales son fundamentales para suplir lagunas legales.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["promulgacion", "poderes"]

variables:
  correcta: "Ejecutivo"
  distractores: ["Judicial", "Legislativo", "Administrativo"]

respuesta: "Ejecutivo"
tipo: mc

enunciado: "¿Por quién es promulgada la ley?"
opciones_explicitas: ["Ejecutivo", "Judicial", "Legislativo", "Administrativo"]

explicacion: |
  El Poder Ejecutivo promulga las leyes dictadas por el Legislativo.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["publicacion", "medio"]

variables:
  correcta: "Boletin_Oficial"
  distractores: ["Diario_Nacional", "Revista_Juridica", "Gaceta_Provincial"]

respuesta: "Boletin_Oficial"
tipo: mc

enunciado: "¿Dónde se publica la ley para ofrecer certeza?"
opciones_explicitas: ["Boletin_Oficial", "Diario_Nacional", "Revista_Juridica", "Gaceta_Provincial"]

explicacion: |
  El Boletín Oficial es el medio oficial de publicación de normas en Argentina.
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

## Sección: corrientes-interpretacion-juridica (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "teoria_del_derecho"]

respuesta: verdadero
tipo: vf

enunciado: "El iusnaturalismo sostiene que existen principios morales universales e inmutables que son superiores al derecho positivo creado por el hombre."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural (jusnaturalismo) basado en la razón o la naturaleza humana, que sirve como parámetro de validez para las leyes humanas.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "norma"]

respuesta: "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal"
tipo: mc
opciones_explicitas: ["una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral"]

enunciado: "¿Cuál de las siguientes afirmaciones representa correctamente la perspectiva del iuspositivismo?"

explicacion: |
  Para el iuspositivismo, la validez de una norma es una cuestión de forma y procedencia (derecho puesto), separando la validez jurídica de la moralidad.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico", "jueces"]

respuesta: "lo que los jueces hacen en la práctica"
tipo: completar
respuestas_validas:
  - "lo que los jueces hacen en la práctica"
  - "la conducta judicial efectiva"

enunciado: "Para el realismo jurídico, el derecho no es un conjunto de normas abstractas, sino ___."

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita hacia la conducta de los tribunales y la eficacia de las decisiones judiciales en la realidad social.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: falso
tipo: vf

enunciado: "El iuspositivismo defiende la tesis de la conexión necesaria entre el derecho y la moral."

explicacion: |
  Al contrario, el iuspositivismo sostiene la tesis de la separación, argumentando que la existencia de una norma no depende de su contenido moral.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "ordenar"]

respuesta_orden: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]
tipo: ordenar
opciones_explicitas: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]

enunciado: "Ordene estas corrientes según su enfoque principal: de la búsqueda de principios universales hacia el enfoque en la eficacia de la decisión judicial."

explicacion: |
  El orden solicitado parte del Iusnaturalismo (principios universales), pasa por el Iuspositivismo (la norma escrita) y llega al Realismo Jurídico (la práctica judicial).
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: "iusnaturalismo"
tipo: mc
opciones_explicitas: ["iuspositivismo", "iusnaturalismo", "realismo_juridico"]

enunciado: "Un juez se encuentra ante una ley que, aunque es válida y fue promulgada correctamente por el legislador, considera que es profundamente inmoral y viola los derechos humanos fundamentales. Si el juez decide que no puede aplicarla porque el derecho debe basarse en principios morales universales superiores a la norma escrita, está adoptando una postura de ___."

explicacion: |
  El iusnaturalismo sostiene que el derecho positivo (la ley escrita) solo es válido si es conforme a la justicia o a principios morales naturales. Si la ley es injusta, no es derecho.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico"]

tipo: mc
opciones_explicitas: ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción.", "El juez aplica la ley de forma mecánica sin considerar el contexto."]

respuesta: "El juez decide basándose en la jurisprudencia predominante de su tribunal."

enunciado: "Un estudioso del derecho observa que, ante una ley ambigua, los jueces de una ciudad siempre fallan a favor de las empresas locales para mantener la estabilidad económica. El estudioso concluye que el derecho no es la norma en el papel, sino la conducta de los jueces. ¿Cuál de las siguientes conductas judiciales ejemplifica mejor esta visión realista?"

explicacion: |
  El realismo jurídico sostiene que el derecho es lo que los jueces hacen en la práctica, desplazando la importancia de la norma abstracta por la realidad de la función judicial.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva del iuspositivismo estricto, la validez de una norma jurídica depende de su proceso de creación y su vigencia, independientemente de si su contenido es moral o inmoral."

explicacion: |
  Para el iuspositivismo, existe una separación conceptual entre el derecho y la moral. La validez es una cuestión de hechos (si fue dictada por la autoridad competente) y no de valores.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta_orden: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]
tipo: ordenar

opciones_explicitas: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]

enunciado: "Un abogado que sigue la corriente del iusnaturalismo para impugnar una ley injusta debería seguir este orden de razonamiento:"

explicacion: |
  El iusnaturalista primero reconoce la norma positiva, luego la confronta con un sistema de valores morales superiores y finalmente concluye que la norma no debe aplicarse por ser contraria a la justicia.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

respuesta: "El derecho es la acción judicial"
tipo: completar
respuestas_validas:
  - "El derecho es la acción judicial"

enunciado: "En un escenario de realismo jurídico, si un abogado quiere saber cómo se aplicará una nueva ley, no leerá solo el código, sino que estudiará cómo actúan los jueces. Para esta corriente, el derecho es ___."

explicacion: |
  El realismo jurídico desplaza el foco del texto legal hacia la conducta del funcionario judicial, considerando que la norma es solo una predicción de lo que el juez hará.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: "iusnaturalismo"
tipo: completar
respuestas_validas:
  - "iusnaturalismo"

enunciado: "La corriente que sostiene que la validez de una norma jurídica depende de su conformidad con principios morales o derechos universales superiores, independientemente de si ha sido promulgada por el Estado, es el ___."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural superior al derecho positivo, basado en la moral o la razón.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["iuspositivismo"]

respuesta: falso
tipo: vf

enunciado: "Para el iuspositivismo extremo, la validez de una norma jurídica está intrínsecamente condicionada a su contenido moral; es decir, una ley injusta no es ley."

explicacion: |
  Falso. El iuspositivismo sostiene la tesis de la separación: la validez de una norma depende de su origen formal y su vigencia, no de su contenido moral.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico"]

variables:
  idx: uno_de([0, 1])
  datos: [["realismo jurídico", "El derecho es la predicción de lo que los jueces decidirán en la práctica."], ["formalismo jurídico", "El derecho es un conjunto de normas abstractas contenidas en los códigos."]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El derecho es un conjunto de normas abstractas contenidas en los códigos.", "El derecho es la predicción de lo que los jueces decidirán en la práctica."]

enunciado: "Según la perspectiva del {datos[idx][0]}, ¿cuál es la naturaleza del derecho?"

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita a la conducta real de los tribunales y los jueces.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["comparativa"]

respuesta: "El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."
tipo: completar
respuestas_validas:
  - "El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."

enunciado: "Una distinción fundamental es que ___."

explicacion: |
  El positivismo prioriza la seguridad jurídica y la estructura formal, mientras que el iusnaturalismo prioriza la justicia material.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["ordenar"]

respuesta_orden: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]
tipo: ordenar
opciones_explicitas: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]

enunciado: "Ordene estas corrientes según su enfoque principal: de la búsqueda de la justicia moral (primero) a la búsqueda de la eficacia judicial (último)."

explicacion: |
  El iusnaturalismo se centra en la moral (justicia), el iuspositivismo en la norma (ley escrita) y el realismo en la aplicación (hechos judiciales).
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo", "realismo"]

respuesta: "iusnaturalismo"
tipo: "completar"
respuestas_validas:
  - "iusnaturalismo"

enunciado: "A diferencia del iuspositivismo, que sostiene que la validez de una norma depende exclusivamente de su origen formal y su vigencia, el ___ sostiene que existe un conjunto de principios morales universales superiores al derecho positivo."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural (basado en la moral o la razón) que sirve como criterio de validez para el derecho creado por el hombre.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico", "interpretacion"]

opciones_explicitas: ["El derecho es un conjunto de normas abstractas e ideales.", "El derecho es lo que los jueces deciden en la práctica.", "El derecho es la voluntad del legislador plasmada en códigos."]

respuesta: "El derecho es lo que los jueces deciden en la práctica."
tipo: "mc"

enunciado: "Desde la perspectiva del realismo jurídico, ¿cuál es la característica que distingue su visión del derecho frente al formalismo iuspositivista?"

explicacion: |
  Para el realismo jurídico, el derecho no es un sistema de normas lógicas, sino una conducta social observada; por tanto, el derecho es la actividad judicial efectiva.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "moral"]

respuesta: verdadero
tipo: "vf"

enunciado: "Para el iuspositivismo puro, la validez de una norma jurídica no depende de su contenido moral, sino de su procedencia conforme a los procedimientos establecidos por el sistema."

explicacion: |
  El iuspositivismo establece una separación conceptual entre el derecho (lo que es) y la moral (lo que debería ser).
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["ordenar", "corrientes"]

opciones_explicitas: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]

tipo: "ordenar"
respuesta_orden: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]

enunciado: "Ordene cronológicamente la evolución predominante de las corrientes de pensamiento jurídico en la historia del derecho occidental:"

explicacion: |
  Históricamente, el pensamiento transitó desde la búsqueda de leyes naturales universales, pasando por la codificación y formalismo del positivismo, hasta llegar al enfoque empírico del realismo.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["comparacion", "metodologia"]

variables:
  idx: uno_de([0, 1])
  frases: ["El iuspositivismo se centra en la norma escrita, mientras que el realismo jurídico se centra en la conducta del juez.", "El iusnaturalismo se centra en la justicia universal, mientras que el iuspositivismo se centra en la validez formal."]

respuesta: verdadero
tipo: "vf"

enunciado: "Determina si la siguiente afirmación es correcta: {frases[idx]}"

explicacion: |
  Ambas afirmaciones posibles son correctas: el iuspositivismo prioriza la norma escrita mientras el realismo jurídico se centra en la conducta judicial efectiva, y el iusnaturalismo prioriza la justicia universal mientras el iuspositivismo prioriza la validez formal.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "iuspositivismo"]

variables:
  datos: [["Un juez decide que una ley es injusta porque viola la dignidad humana y, por tanto, no es aplicable", "iusnaturalismo"], ["Un juez aplica una ley que considera moralmente cuestionable simplemente porque fue promulgada por la autoridad competente", "iuspositivismo"]]
  idx: uno_de([0, 1])

enunciado: "{datos[idx][0]}. ¿Qué corriente de interpretación jurídica ejemplifica esta actitud?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["iusnaturalismo", "iuspositivismo", "realismo_juridico"]

explicacion: |
  El iusnaturalismo sostiene que existe un derecho natural superior al derecho positivo, basado en la moral y la razón.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["iuspositivismo"]

variables:
  textos: ["La ley es válida porque cumple con el proceso legislativo, independientemente de su contenido moral", "La validez de una norma depende de su conformidad con la moralidad social"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

enunciado: "Según el iuspositivismo estricto, ¿es correcta la siguiente afirmación? '{textos[idx]}'"

respuesta: valores[idx]
tipo: vf
explicacion: |
  Para el iuspositivismo, la separación entre derecho y moral es fundamental para determinar la validez de la norma.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

respuesta: "lo que los jueces deciden en sus sentencias"
tipo: completar
respuestas_validas:
  - "lo que los jueces realmente hacen"
  - "lo que los jueces deciden en sus sentencias"

enunciado: "Desde la perspectiva del realismo jurídico, el derecho se define como ___."

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita hacia la conducta y decisiones de los tribunales.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["ordenar", "metodologia"]

enunciado: "Ordene los elementos según el enfoque del Realismo Jurídico, desde el factor más subjetivo (el juez) al más objetivo (la norma escrita):"

pasos:
  - "La decisión del juez en el caso concreto"
  - "La conducta social predominante"
  - "El texto de la norma legal"

respuesta_orden: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]
tipo: ordenar
opciones_explicitas: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]

explicacion: |
  El realismo enfatiza que el derecho no es solo texto, sino la actividad judicial influenciada por factores sociales.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "iuspositivismo"]

respuesta: "positivismo"
tipo: mc
opciones_explicitas: ["positivismo", "iusnaturalismo", "realismo_juridico"]

enunciado: "Si un sistema jurídico afirma que 'la ley es la ley' y su aplicación es obligatoria incluso si es considerada injusta, el sistema está operando bajo el principio de ___."

explicacion: |
  El principio de legalidad estricta es un pilar del iuspositivismo, donde la validez es formal.
```

## Sección: interpretacion-normativa (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["conceptos", "teoria_del_derecho"]

respuesta: "desentrañar el sentido y el alcance de la norma"
tipo: completar
respuestas_validas:
  - "desentrañar el sentido y el alcance de la norma"
  - "determinar el sentido y el alcance de la norma"

enunciado: "La interpretación normativa es la actividad intelectual consistente en ___ para aplicarla a un caso concreto."

explicacion: |
  Interpretar una norma no es solo leerla, sino determinar qué significa y hasta dónde llega su aplicación en un contexto específico.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["elementos", "metodologia"]

respuesta: "gramatical"
tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática"]

enunciado: "Cuando un juez busca el sentido de la norma basándose exclusivamente en el significado de las palabras utilizadas en el texto, ¿qué tipo de interpretación está realizando?"

explicacion: |
  La interpretación gramatical o literal se centra en el tenor semántico de las palabras del texto normativo.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["alcance", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la interpretación normativa busca determinar tanto el significado (sentido) como el alcance (ámbito de aplicación) de una norma?"

explicacion: |
  Efectivamente, la interpretación tiene una doble dimensión: el contenido semántico (qué dice) y la extensión de su aplicación (a quiénes y en qué situaciones alcanza).
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodos", "orden"]

opciones_explicitas: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
respuesta_orden: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos que sigue un aplicador del derecho al realizar un proceso de interpretación y aplicación normativa:"

explicacion: |
  El proceso comienza con la comprensión del texto, sigue con la detección de la controversia jurídica y culmina con la subsunción o aplicación de la norma al hecho.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

respuesta: "teleológica"
tipo: mc
opciones_explicitas: ["gramatical", "teleológica", "sistemática", "histórica"]

enunciado: "Si un intérprete busca el sentido de la norma atendiendo a los fines o propósitos para los cuales fue creada (el 'espíritu' de la ley), ¿qué tipo de interpretación está realizando?"

explicacion: |
  La interpretación teleológica se centra en la finalidad (telos) de la norma, ya sea la intención original del legislador o la finalidad social/actual de la norma en la comunidad.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["interpretacion", "hermeneutica"]

respuesta: "gramatical"
tipo: completar
respuestas_validas:
  - "gramatical"
  - "teleologica"
  - "sistemática"

enunciado: "Cuando un juez se limita a analizar el significado literal de las palabras utilizadas en un precepto legal para determinar su alcance, está aplicando un método de interpretación de tipo ___."

explicacion: |
  El método gramatical o literal es el primer paso de la interpretación; consiste en analizar la sintaxis y el semántica del texto normativo para hallar su sentido inmediato.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["finalidad", "ratio_legis"]

respuesta: "finalidad"
tipo: completar
respuestas_validas:
  - "finalidad"
  - "fin"
  - "propósito"

enunciado: "La interpretación teleológica busca determinar el significado de la norma basándose en su ___ (el 'espíritu' de la ley)."

explicacion: |
  La interpretación teleológica (o finalista) busca el 'espíritu' de la ley, es decir, el fin o la finalidad (ratio legis) para la cual fue creada la norma.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistema", "coherencia"]

respuesta: "sistemática"
tipo: mc
opciones_explicitas: ["gramatical", "sistemática", "histórica", "evolutiva"]

enunciado: "Un abogado sostiene que una norma no puede entenderse de forma aislada, sino que debe integrarse con el resto del ordenamiento jurídico para evitar contradicciones. ¿Qué método está utilizando?"

explicacion: |
  La interpretación sistemática considera que la norma es parte de un todo (el sistema jurídico) y que su sentido se completa al relacionarla con otras normas del mismo cuerpo legal.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["procedimiento", "subsunción"]

respuesta_orden: ["Subsunción", "Interpretación", "Fijación del hecho"]
tipo: ordenar
opciones_explicitas: ["Subsunción", "Interpretación", "Fijación del hecho"]

enunciado: "Ordene correctamente los pasos lógicos para aplicar una norma a un caso concreto, desde la recepción del hecho hasta la decisión final."

explicacion: |
  Primero se deben fijar los hechos (fase fáctica), luego interpretar la norma para entender su alcance (fase normativa) y finalmente realizar la subsunción (encuadramiento del hecho en la norma).
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["historia", "legislador"]

respuesta: verdadero
tipo: vf

enunciado: "La interpretación histórica consiste en analizar los antecedentes de la norma, como los debates parlamentarios o la exposición de motivos, para comprender la voluntad del legislador original."

explicacion: |
  Correcto. Este método busca reconstruir la intención del legislador analizando el contexto y los documentos que dieron origen a la norma.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["hermeneutica", "literalismo"]

respuesta: "error"
tipo: "mc"
opciones_explicitas: ["error", "método_correcto", "interpretación_teleológica", "interpretación_gramatical"]

enunciado: "Cuando un aplicador del derecho se limita exclusivamente al significado semántico de las palabras de la norma, ignorando el espíritu o la finalidad de la ley, está incurriendo en un _________ de interpretación."

explicacion: |
  La interpretación puramente gramatical o literal puede llevar a absurdos jurídicos si no se considera la finalidad (ratio legis) de la norma.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["teoria_del_derecho"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la 'norma' y el 'texto de la ley' son conceptos idénticos en el proceso de interpretación?"

explicacion: |
  Falso. El texto es el soporte lingüístico (el enunciado), mientras que la norma es el significado o sentido que se extrae de ese texto tras el proceso interpretativo.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["lagunas", "analogia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["existe una laguna legal", "analogía"], ["la norma es ambigua", "interpretación sistemática"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - "analogía"
  - "interpretación sistemática"

enunciado: "Si al aplicar una norma a un caso concreto se detecta que no hay una disposición aplicable para ese supuesto (laguna), el juez debe recurrir a la _________ para resolver."

explicacion: |
  La analogía permite aplicar una norma que regula un caso similar a uno que no está regulado, siempre que exista la misma razón de ser.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta_orden: ["gramatical", "lógica", "sistemática", "histórica"]
tipo: "ordenar"
opciones_explicitas: ["gramatical", "lógica", "sistemática", "histórica"]

enunciado: "Ordene los métodos de interpretación de la ley desde el más básico (estudio del lenguaje) hasta el más complejo (relación con el ordenamiento completo):"

explicacion: |
  El proceso interpretativo suele comenzar por la gramática, sigue con la lógica (finalidad), se integra con el sistema jurídico y finalmente revisa el contexto histórico.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["coherencia", "sistema_juridico"]

respuesta: falso
tipo: "vf"

enunciado: "¿La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con otras normas del mismo ordenamiento?"

explicacion: |
  Falso. La interpretación sistemática parte de la premisa de que el ordenamiento es un todo coherente y que cada norma debe interpretarse en relación con las demás.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "interpretacion"]

respuesta: "integración"
tipo: completar
respuestas_validas:
  - "integración"
  - "integracion"

enunciado: "Mientras que la interpretación normativa busca determinar el sentido y alcance de una norma existente, la ___ se utiliza cuando existen lagunas legales para llenar los vacíos del ordenamiento."

explicacion: |
  La interpretación se aplica cuando la norma está presente pero su sentido es ambiguo. La integración se aplica cuando no hay norma aplicable al caso (laguna).
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["metodos", "hermeneutica"]

tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática", "histórica"]

respuesta: "gramatical"

enunciado: "Si un juez decide interpretar una norma centrándose exclusivamente en el significado de las palabras utilizadas en el texto legal, está aplicando un método de tipo ___."

explicacion: |
  El método gramatical o literal se limita al análisis semántico de las palabras del texto.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["verdad", "proceso_judicial"]

respuesta: falso

tipo: vf

enunciado: "En el proceso de interpretación normativa para la aplicación de la ley, el juez debe buscar siempre la 'verdad real' (lo que ocurrió exactamente en la realidad física), incluso si esta contradice las pruebas obtenidas legalmente."

explicacion: |
  En derecho, la interpretación se realiza sobre la 'verdad jurídica' o procesal, que es la reconstrucción de los hechos basada en las pruebas válidas dentro del proceso.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["elementos", "hermeneutica"]

respuesta: "sistemática"
tipo: completar
respuestas_validas:
  - "sistemática"
  - "sistematica"

enunciado: "Cuando la interpretación no se limita a la norma aislada, sino que busca su sentido analizando su relación con el resto del ordenamiento jurídico, se está utilizando una interpretación ___."

explicacion: |
  La interpretación sistemática considera la norma como parte de un todo coherente y no como un elemento aislado.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["jerarquia", "criterios"]

respuesta_orden: ["Constitución", "Ley", "Reglamento", "Sentencia"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento", "Sentencia"]

enunciado: "Ordene los siguientes ordenamientos de mayor a menor jerarquía para determinar el alcance de una norma en un conflicto de leyes:"

explicacion: |
  La jerarquía normativa (Pirámide de Kelsen) establece que la Constitución es la norma suprema, seguida por las leyes, luego los reglamentos y finalmente los actos administrativos o sentencias en su aplicación específica.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["interpretacion", "aplicacion", "norma"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["una norma que prohíbe vehículos en parques", "prohibición"], ["una norma que regula el uso de drones", "regulación"]]
  escenario: datos[escenario_idx][0]
  tipo_norma: datos[escenario_idx][1]

respuesta: tipo_norma
tipo: mc
opciones_explicitas: ["prohibición", "regulación", "exención", "derogación"]

enunciado: "Ante el escenario de {escenario}, ¿de qué tipo es el alcance de la norma que el intérprete debe determinar?"

explicacion: |
  La interpretación normativa busca determinar el sentido de la norma (su contenido) y su alcance (su aplicación) frente a un hecho concreto.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["gramatical", "literalidad"]

respuesta: "literal"
tipo: mc
opciones_explicitas: ["literal", "teleológica", "sistemática", "histórica"]

enunciado: "Cuando un juez se limita a analizar el significado semántico y sintáctico de las palabras de la ley para determinar su sentido, está aplicando una interpretación de tipo ___."

explicacion: |
  La interpretación gramatical o literal se centra exclusivamente en el texto de la norma y el significado de sus términos.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

respuesta: "finalidad"
tipo: completar
respuestas_validas:
  - "finalidad"

enunciado: "Si el intérprete se enfoca en el ___ de la norma (el 'porqué' o el espíritu de la ley) para resolver una laguna, está realizando una interpretación teleológica."

explicacion: |
  La interpretación teleológica busca la finalidad o el espíritu de la norma para asegurar que la aplicación sea coherente con el objetivo del legislador.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistemática", "coherencia"]

respuesta: falso
tipo: vf

enunciado: "La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con el resto del ordenamiento jurídico."

explicacion: |
  Falso. La interpretación sistemática establece que la norma es parte de un todo y debe interpretarse en armonía con el sistema jurídico completo.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

respuesta_orden: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]
tipo: ordenar
opciones_explicitas: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]

enunciado: "Ordene los pasos lógicos que sigue un aplicador del derecho para resolver un conflicto jurídico:"

explicacion: |
  El proceso requiere primero entender el significado de la norma (interpretación), luego determinar su alcance, aplicar ese sentido al hecho (subsunción) y finalmente dictar la resolución.
```

