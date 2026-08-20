# Derecho — Denuncia y etapa de instruccion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Inicio del proceso penal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["procedimiento", "denuncia"]

tipo: mc
opciones_explicitas: ["Denuncia", "Sentencia", "Fallo", "Recurso"]

enunciado: "El acto mediante el cual se pone en conocimiento de la autoridad judicial la existencia de un hecho presuntamente delictivo se denomina:"

respuesta: "Denuncia"

explicacion: |
  La denuncia es el acto procesal que da inicio a la investigación penal al informar un posible delito.
```

### 2 — El rol de la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["instruccion", "investigacion"]

tipo: vf

enunciado: "El objetivo principal de la etapa de instrucción es determinar si existe mérito para llevar a juicio a una persona."

respuesta: falso

explicacion: |
  La instrucción tiene como fin la investigación de la verdad real y la recolección de pruebas para determinar si hay elementos suficientes para el juicio.
```

### 3 — Elementos de la investigación

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["pruebas", "instruccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["testimonio", "pericia"], ["allanamiento", "interrogatorio"]]

enunciado: "Durante la etapa de instrucción, el fiscal o el juez pueden ordenar un {datos[escenario_idx][0]} para obtener evidencia física o técnica."

pasos:
  - "Se identifica el hecho delictivo."
  - "Se recolectan las evidencias mediante medidas de prueba."

respuesta: "pericia"

tipo: completar
respuestas_validas:
  - "pericia"

explicacion: |
  La pericia es un medio de prueba técnico fundamental en la etapa de instrucción para esclarecer hechos complejos.
```

### 4 — Orden cronológico del proceso

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el inicio hasta la resolución final:"

respuesta_orden: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

explicacion: |
  El proceso comienza con la denuncia, sigue con la investigación (instrucción), la etapa de debate (juicio) y finaliza con la sentencia.
```

### 5 — El imputado en la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["sujeto_procesal", "imputado"]

tipo: mc
opciones_explicitas: ["Imputado", "Querellante", "Testigo", "Juez"]

enunciado: "La persona sobre la cual recae la sospecha de haber cometido un delito durante la etapa de instrucción es el:"

respuesta: "Imputado"

explicacion: |
  El imputado es el sujeto pasivo de la acción penal en la fase de investigación.
```

### 6 — Inicio del proceso penal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["procedimiento", "denuncia"]

respuesta: "denuncia"
tipo: mc
opciones_explicitas: ["denuncia", "sentencia", "apelación", "querella"]

enunciado: "Un ciudadano presencia un robo en una plaza y acude a la comisaría para poner en conocimiento el hecho. Este acto formal de poner en conocimiento un presunto delito se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual cualquier persona comunica a la autoridad judicial o policial la comisión de un hecho que podría ser un delito.
```

### 7 — El rol del Fiscal en la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["fiscalia", "investigacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["El Fiscal debe dirigir la investigación para recolectar pruebas.", "verdadero"], ["El Fiscal decide la culpabilidad final del imputado.", "falso"]]

respuesta: escenario[escenario_idx][1]
tipo: completar
enunciado: "En la etapa de instrucción, el Fiscal tiene la función de dirigir la investigación y recolectar elementos de convicción para determinar si existe un caso para ir a juicio. ¿Es esto correcto en el sistema acusatorio?"

explicacion: |
  En el sistema acusatorio, el Fiscal dirige la investigación (etapa de instrucción/investigación preparatoria), pero la decisión de culpabilidad o inocencia es competencia exclusiva de un Juez de Oración o Tribunal de Juicio.
```

### 8 — Secuencia de la etapa de instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "orden_cronologico"]

respuesta_orden: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]

enunciado: "Ordene cronológicamente las etapas de un proceso penal estándar, desde el conocimiento del hecho hasta la resolución del conflicto."

explicacion: |
  El proceso comienza con la denuncia o querella, sigue la investigación para reunir pruebas (instrucción), el fiscal presenta su acusación si hay pruebas, y finalmente se celebra el juicio para dictar sentencia.
```

### 9 — Elementos de prueba en la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["pruebas", "instruccion"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [["testimonio", "pericia"], ["testimonio", "sentencia"]]

respuesta: caso[caso_idx][1]
tipo: mc
opciones_explicitas: ["testimonio", "pericia", "sentencia", "recurso"]

enunciado: "Durante la etapa de instrucción, para determinar la veracidad de un hecho, el instructor puede ordenar un examen realizado por un experto en una materia técnica (por ejemplo, un perito médico). Este elemento se conoce como una ___."

explicacion: |
  La pericia es el medio de prueba técnico-científico fundamental en la etapa de instrucción para aportar conocimientos especializados al proceso.
```

### 10 — El cierre de la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["resolucion", "instruccion"]

respuesta: "sobreseimiento"
tipo: completar
respuestas_validas:
  - "sobreseimiento"
  - "condena"
  - "absolución"

enunciado: "Si durante la etapa de instrucción se demuestra que el hecho denunciado no existió o que el imputado no participó en él, el juez debe dictar el ___ para finalizar el proceso sin llegar a juicio."

explicacion: |
  El sobreseimiento es la resolución que pone fin al proceso de manera definitiva cuando no hay elementos para sostener una acusación, evitando que una persona sea sometida innecesariamente a un juicio.
```

### 11 — Inicio del proceso penal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: completar
respuestas_validas:
  - "denuncia"
  - "querella"

enunciado: "El proceso penal puede iniciarse de diversas formas; cuando un ciudadano comunica un hecho presuntamente delictivo ante la autoridad, el acto formal se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un hecho presuntamente delictivo. La querella, en cambio, requiere la constitución de la parte como querellante en el proceso.
```

### 12 — Naturaleza de la etapa de instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["instruccion", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es la etapa de instrucción una fase de debate y juicio donde se determina la culpabilidad o inocencia del imputado?"

explicacion: |
  Falso. La etapa de instrucción es una fase de investigación preparatoria donde el objetivo es reunir elementos de convicción para determinar si existe causa para abrir un juicio, pero no es la etapa de debate oral y público.
```

### 13 — Diferencia entre denuncia y querella

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

tipo: mc
opciones_explicitas: ["La denuncia requiere la participación activa de la víctima como parte procesal, mientras que la querella es un mero aviso.", "La querella implica la constitución de la víctima como parte en el proceso, mientras que la denuncia es un deber ciudadano de informar."]

respuesta: "La querella implica la constitución de la víctima como parte en el proceso, mientras que la denuncia es un deber ciudadano de informar."

enunciado: "Según la doctrina procesal, ¿cuál es la diferencia fundamental entre la denuncia y la querella?"

explicacion: |
  La diferencia radica en la legitimación y la participación: el querellante es parte activa en el proceso y puede proponer medidas, mientras que el denunciante simplemente informa el hecho.
```

### 14 — Secuencia del proceso penal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["etapas_procesales", "orden"]

respuesta_orden: ["Notitia criminis", "Instrucción", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Juicio Oral", "Instrucción", "Notitia criminis"]

enunciado: "Ordene cronológicamente las etapas del proceso penal, partiendo desde la noticia del delito:"

explicacion: |
  El orden correcto es: 1. Notitia criminis (noticia del delito), 2. Instrucción (investigación), 3. Juicio Oral (debate y sentencia).
```

### 15 — El rol del Fiscal en la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["fiscalia", "investigacion"]

tipo: mc
opciones_explicitas: ["El Fiscal tiene la carga de la prueba y dirige la investigación para esclarecer los hechos.", "El Fiscal es el encargado de dictar la sentencia definitiva tras la etapa de instrucción."]

respuesta: "El Fiscal tiene la carga de la prueba y dirige la investigación para esclarecer los hechos."

enunciado: "En el sistema acusatorio moderno, ¿cuál es la función principal del Ministerio Público durante la etapa de instrucción?"

explicacion: |
  El Fiscal dirige la investigación y recolecta pruebas para determinar si hay elementos suficientes para acusar, pero la sentencia es competencia exclusiva de un Juez.
```

### 16 — Inicio del proceso penal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: mc
opciones_explicitas: ["denuncia", "querella", "sentencia", "resolución"]

enunciado: "A diferencia de la querella, donde la víctima interviene activamente con abogado, la ___ es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un delito."

explicacion: |
  La denuncia es el acto de informar un hecho delictivo, mientras que la querella es una acción formal donde la víctima se constituye como parte en el proceso.
```

### 17 — Objeto de la etapa de instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["instruccion", "investigacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la etapa de instrucción es la recolección de elementos de convicción para determinar si existe probabilidad de llevar a juicio a un imputado?"

explicacion: |
  Correcto. La instrucción busca reunir pruebas para decidir si se procede al juicio oral o se dicta el sobreseimiento.
```

### 18 — Diferencia entre denuncia y querella

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["denuncia", "noticia criminal"], ["querella", "acción penal privada/pública con legitimación"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "noticia criminal"
  - "acción penal privada/pública con legitimación"

enunciado: "En el escenario seleccionado, la diferencia fundamental es que la ___ se caracteriza por ser una {datos[escenario_idx][1]}."

explicacion: |
  La distinción radica en la legitimación y la participación procesal de la víctima.
```

### 19 — Orden de la secuencia procesal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

respuesta_orden: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]
tipo: ordenar
opciones_explicitas: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el hecho hasta la decisión final:"

explicacion: |
  Primero se recibe la noticia (denuncia/oficio), luego se investiga (instrucción) y finalmente se decide en juicio.
```

### 20 — El rol del Juez de Instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["juez", "instrucción"]

respuesta: "investigar"
tipo: completar
respuestas_validas:
  - "investigar"
  - "sentenciar"
  - "acusar"

enunciado: "Mientras que el Tribunal de Juicio tiene la función de dictar sentencia, el Juez de Instrucción tiene la función primordial de ___ los hechos."

explicacion: |
  La instrucción es una fase preparatoria de investigación, no de decisión de culpabilidad o inocencia definitiva.
```

### 21 — Inicio del proceso penal

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "denuncia"]

variables:
  datos: [["Juan presencia un robo y lo reporta ante la policía", "denuncia"], ["María es víctima de una estafa y presenta el escrito", "denuncia"], ["Un policía encuentra un arma sin dueño y lo comunica", "noticia criminal"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["denuncia", "noticia criminal", "querella", "denuncia anónima"]

enunciado: "En el caso de que {datos[idx][0]}, el acto formal que da inicio al proceso se denomina ___."

explicacion: |
  Cuando una persona con capacidad legal comunica un hecho delictivo, se inicia mediante una denuncia. Si el origen es un funcionario público en ejercicio, se denomina noticia criminal.
```

### 22 — El objeto de la instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "investigacion"]

variables:
  datos: [["presunto homicidio", "investigar la autoría y las pruebas"], ["presunto hurto", "recaudar elementos de convicción"]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En la etapa de instrucción, el objetivo principal del fiscal es {datos[idx][0]}."

explicacion: |
  La etapa de instrucción tiene como fin la recolección de elementos de convicción para determinar si existe mérito para llevar a juicio a una persona.
```

### 23 — Secuencia de la etapa preparatoria

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta_orden: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]
tipo: ordenar
opciones_explicitas: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]

enunciado: "Ordene cronológicamente las etapas desde que se conoce el hecho hasta que se cierra la instrucción:"

explicacion: |
  El proceso penal sigue un orden lógico: primero se recibe la noticia, se abre la investigación, se recolectan las pruebas y finalmente se decide si se va a juicio.
```

### 24 — La formalización de la investigación

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "fiscal"]

variables:
  datos: [["El fiscal encuentra pruebas suficientes", "imputación"], ["El fiscal no tiene pruebas suficientes", "archivo"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "imputación"
  - "archivo"

enunciado: "Si tras la investigación el fiscal determina que {datos[idx][0]}, la consecuencia procesal es la ___."

explicacion: |
  La formalización de la imputación es el acto que marca el inicio de la persecución penal efectiva sobre una persona determinada.
```

### 25 — El rol del Juez de Instrucción

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["juez", "control"]

respuesta: falso
tipo: vf

enunciado: "En el sistema acusatorio moderno, el Juez de Instrucción es quien dirige la recolección de pruebas durante la etapa de investigación."

explicacion: |
  Falso. En el sistema acusatorio, la investigación y recolección de pruebas es responsabilidad exclusiva del Ministerio Público (Fiscalía); el Juez cumple un rol de control de garantías.
```
