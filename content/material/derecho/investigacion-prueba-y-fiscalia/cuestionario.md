# Derecho — Investigacion prueba y fiscalia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El rol del Fiscal

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

### 2 — Naturaleza de la prueba

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

### 3 — Elementos de la investigación

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

### 4 — Etapas de la recolección de evidencia

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

### 5 — Carga de la prueba

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

### 6 — La carga de la prueba

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

### 7 — El rol del Fiscal en la investigación

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

### 8 — Etapas de la recolección de evidencia

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

### 9 — La prueba ilícita

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

### 10 — El estándar de prueba para la acusación

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

### 11 — El rol del Fiscal en la etapa de investigación

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

### 12 — Confusión sobre la carga de la prueba

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

### 13 — Elementos de convicción vs. Prueba

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

### 14 — Secuencia de la actividad fiscal

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

### 15 — El principio de oportunidad y la prueba

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

### 16 — El rol del Fiscal en la etapa de investigación

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

### 17 — Diferencia entre Prueba y Elemento de Convicción

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

### 18 — La carga de la prueba y la presunción de inocencia

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

### 19 — Secuencia lógica de la actividad fiscal

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

### 20 — El Fiscal vs. El Juez de Control

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

### 21 — El rol del Fiscal en la investigación

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

### 22 — Clasificación de la prueba

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

### 23 — Etapas de la recolección de evidencia

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

### 24 — El elemento probatorio faltante

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

### 25 — La importancia de la cadena de custodia

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
