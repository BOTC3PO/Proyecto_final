# Examen jefe — Maestro de la Apelación y Argumentación

> Logro #202. Aprobaste el parcial dominando las instancias procesales, la interpretación jurídica y el derecho administrativo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: apelacion-e-instancias (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["proceso_civil", "recursos"]

respuesta: "recurso de apelación"
tipo: completar
respuestas_validas: ["recurso de apelación", "apelación"]

enunciado: "El medio de impugnación que permite a una parte solicitar que un tribunal superior revise la resolución dictada por un juez de primera instancia se denomina ___."

explicacion: |
  El recurso de apelación es la herramienta procesal mediante la cual la parte que se siente agraviada por una sentencia solicita su revisión ante un órgano jerárquicamente superior.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["jerarquia", "tribunales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Juez de Primera Instancia", "Tribunal de Alzada"], ["Juez de Primera Instancia", "Corte Suprema"]]]

opciones_explicitas: ["Juez de Primera Instancia", "Tribunal de Alzada", "Corte Suprema"]

respuesta: escenarios[escenario_idx][1
tipo: mc

enunciado: "En un proceso judicial estándar, cuando se interpone un recurso contra la sentencia de un {escenarios[escenario_idx][0]}, el órgano que debe conocer la cuestión es el {escenarios[escenario_idx][1]}."

explicacion: |
  La estructura judicial se organiza en instancias; la revisión de una decisión de primera instancia corresponde al tribunal de alzada o segunda instancia.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["efectos", "suspensivo"]

respuesta: verdadero
tipo: vf

enunciado: "¿El efecto suspensivo en un recurso de apelación implica que la ejecución de la sentencia queda detenida hasta que el tribunal superior resuelva?"

explicacion: |
  Correcto. El efecto suspensivo impide que la sentencia se cumpla mientras el recurso de apelación está pendiente de resolución.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["requisitos", "agravio"]

respuesta: "agravio"
tipo: completar
respuestas_validas: ["agravio", "perjuicio"]

enunciado: "Para que un recurso de apelación sea admisible, la parte recurrente debe demostrar la existencia de un ___, es decir, un perjuicio real derivado de la decisión judicial."

explicacion: |
  Sin la existencia de un agravio (un daño o perjuicio jurídico o material causado por la resolución), el recurso carece de objeto y debe ser rechazado.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Interposición del recurso", "Expresión de agravios", "Elevación a la segunda instancia", "Sentencia de Alzada"]

respuesta: ["Interposición del recurso", "Expresión de agravios", "Elevación a la segunda instancia", "Sentencia de Alzada"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de apelación:"

explicacion: |
  Primero se interpone el recurso, luego se fundamentan los agravios, el expediente se eleva al tribunal superior y finalmente este dicta la sentencia de segunda instancia (Alzada).
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["recurso", "sentencia", "segunda_instancia"]

variables:
  idx: uno_de([0, 1])
  datos: [["El demandante perdió el juicio", "El demandante"], ["El juez dictó una sentencia injusta", "El demandante"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El demandante", "El demandado", "El juez", "El fiscal"]

enunciado: "En un proceso civil, si {datos[idx][0]}, la parte afectada puede interponer un recurso de apelación para que un tribunal superior revise la resolución. ¿Quién es el sujeto que tiene legitimación para apelar en este caso?"

explicacion: |
  El recurso de apelación es un medio de impugnación que permite a la parte que se siente agraviada por una resolución judicial solicitar que un tribunal de jerarquía superior la revise, modifique o anule.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["requisitos", "agravio", "proceso"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es obligatorio que el apelante manifieste expresamente los agravios (los errores que considera que cometió el juez) para que el recurso de apelación sea admitido?"

explicacion: |
  Para que la apelación sea válida, no basta con la disconformidad; es indispensable la fundamentación del agravio, es decir, explicar por qué la sentencia es errónea en su aplicación de la ley o en la valoración de los hechos.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["secuencia", "proceso_judicial"]

opciones_explicitas: ["Dictado de la sentencia de primera instancia", "Interposición del recurso de apelación", "Expresión de agravios", "Resolución de la Cámara/Tribal Superior"]

respuesta: ["Dictado de la sentencia de primera instancia", "Interposición del recurso de apelación", "Expresión de agravios", "Resolución de la Cámara/Tribal Superior"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de un proceso judicial que incluye la revisión por una segunda instancia:"

explicacion: |
  El proceso comienza con la resolución del juez de grado, seguido por la voluntad de la parte de apelar, la fundamentación técnica de sus quejas y, finalmente, el fallo del tribunal superior.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["efectos", "suspension", "ejecucion"]

variables:
  idx: uno_de([0,1])
  datos: [["suspende la ejecución de la sentencia", "suspensivo"], ["no suspende la ejecución de la sentencia", "devolutivo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["suspensivo", "devolutivo"]

enunciado: "Si un recurso de apelación se admite con efecto {datos[idx][0]}, la ejecución de la sentencia queda paralizada hasta que el superior resuelva. ¿Cómo se denomina técnicamente a este efecto?"

explicacion: |
  El efecto suspensivo detiene la ejecución de la resolución recurrida, mientras que el efecto devolutivo permite que la sentencia se cumpla a pesar de la apelación.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["sentencia", "terminacion"]

respuesta: "confirmar"
tipo: completar
respuestas_validas: ["confirmar", "revocar", "anular"]

enunciado: "Si el tribunal de alzada (segunda instancia) coincide con el criterio del juez de primera instancia y considera que la sentencia es correcta, su decisión será ___ la sentencia original."

explicacion: |
  Cuando el tribunal superior ratifica la decisión del inferior, se dice que la sentencia ha sido 'confirmada'. Si la cambia, la 'revoca'; si la deja sin efecto por errores de forma, la 'anula'.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["proceso_civil", "recursos"]

variables:
  escenario: uno_de([
    ["La sentencia es definitiva", "se suspende la ejecución"],
    ["La sentencia es provisional", "no se suspende la ejecución"]
  ])

enunciado: "En un proceso civil, si se interpone un recurso de apelación contra una sentencia que tiene efecto suspensivo, la ejecución de la misma {escenario[1]}."

respuesta: escenario[1
tipo: completar
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["principios_procesales", "limitacion_tribunal"]

variables:
  caso: uno_de([
    ["el tribunal superior puede dictar una sentencia distinta a la que pidió el apelante", "el tribunal superior no puede pronunciarse sobre lo que no fue objeto de la apelación"],
    ["el tribunal superior puede dictar una sentencia distinta a la que pidió el apelante", "el tribunal superior no puede pronunciarse sobre lo que no fue objeto de la apelación"]
  ])
  # Nota: El escenario se define para que la respuesta sea la segunda opción del par.
  # Re-estructurando para cumplir regla de un_de en variables:
  datos: [
    ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"],
    ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"]
  ]
  idx: uno_de([0, 1])

enunciado: "De acuerdo al principio de congruencia, en segunda instancia, {datos[idx][0]}."

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"]

explicacion: |
  El tribunal de alzada está limitado por la materia de la apelación (principio de congrucia), no pudiendo extender su conocimiento a cuestiones que no hayan sido objeto de impugnación.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["garantias", "derechos_fundamentales"]

variables:
  es_garantia: falso

enunciado: "El derecho a la doble instancia es considerado una garantía fundamental en los sistemas procesales modernos."

respuesta: es_garantia
tipo: completar
explicacion: |
  La doble instancia permite que un órgano superior revise la aplicación de la ley o la valoración de la prueba realizada por el juez de primera instancia.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

variables:
  pasos_ordenados: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]

enunciado: "Ordene cronológicamente las etapas típicas de un recurso de apelación:"

pasos:
  - "Interposición del recurso"
  - "Expresión de agravios"
  - "Resolución de la Alzada"

respuesta: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]
tipo: ordenar
opciones_explicitas: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]

explicacion: |
  Primero se presenta el recurso, luego se fundamentan los errores (agravios) y finalmente el tribunal superior decide.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["agravios", "errores_comunes"]

variables:
  error_tipo: uno_de([
    ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"],
    ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"]
  ])
  idx: uno_de([0, 1])

enunciado: "Un error común que puede llevar a la improcedencia de un recurso de apelación es ___."

respuesta: error_tipo[idx
tipo: completar
respuestas_validas: ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"]

explicacion: |
  La apelación requiere la crítica concreta y concreta de los fundamentos de la sentencia. Simplemente repetir lo dicho en la demanda no constituye un agravio jurídico.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["recursos", "instancias", "proceso_civil"]

respuesta: "revisión"
tipo: completar
respuestas_validas: ["revisión", "revisar", "revisar la sentencia"]

enunciado: "A diferencia de la reposición, que busca que el mismo juez corrija su decisión, la apelación tiene como finalidad la ___ de la sentencia por un tribunal de jerarquía superior."

explicacion: |
  La apelación busca que un tribunal superior (segunda instancia) revise la resolución del juez de primera instancia para corregir posibles errores de hecho o de derecho.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["instancia", "recurso", "jerarquia"]

variables:
  escenario: uno_de([["apelación", "recurso", "instancia"], ["reposición", "recurso", "instancia"], ["casación", "recurso", "instancia"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["recurso", "instancia", "sentencia"]

enunciado: "En el sistema judicial, la apelación es un ___ que permite pasar de la primera a la segunda instancia."

explicacion: |
  La apelación es el medio o recurso procesal que habilita el ejercicio de la segunda instancia, permitiendo que un órgano superior revise lo decidido.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["efectos", "suspensivo", "devolutivo"]

respuesta: falso
tipo: vf

enunciado: "Si un recurso de apelación se concede con efecto suspensivo, la ejecución de la sentencia queda paralizada hasta que el tribunal superior resuelva."

explicacion: |
  Es verdadero. El efecto suspensivo impide que la sentencia se cumpla mientras el recurso está pendiente, a diferencia del efecto devolutivo, que permite la ejecución pero deja la posibilidad de reparación posterior.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["jerarquia", "tribunales"]

respuesta: ["Sentencia de Primera Instancia", "Sentencia de Segunda Instancia", "Sentencia de Casación"]
tipo: ordenar
opciones_explicitas: ["Sentencia de Primera Instancia", "Sentencia de Segunda Instancia", "Sentencia de Casación"]

enunciado: "Ordene los niveles de revisión jerárquica de una controversia jurídica, desde el tribunal que dicta la resolución inicial hasta el tribunal de máxima instancia."

explicacion: |
  El proceso sigue un orden ascendente: primero el juez de grado (1ra instancia), luego el tribunal de alzada (2da instancia) y finalmente la Corte Suprema o Tribunal de Casación.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["revisión", "hechos", "derecho"]

respuesta: "derecho"
tipo: completar
respuestas_validas: ["derecho", "norma"]

enunciado: "Mientras que la apelación en sede ordinaria permite revisar tanto los hechos como el ___ aplicado, la casación suele limitarse estrictamente a la correcta aplicación de la ley."

explicacion: |
  La apelación es un recurso amplio que permite la revisión de la valoración de la prueba (hechos) y de la aplicación de la norma (derecho), mientras que la casación es un recurso extraordinario de estricto derecho.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["recurso", "instancia", "proceso"]

variables:
  datos: [["La sentencia de primera instancia fue desfavorables para el demandante", "apelacion"], ["El juez cometió un error de procedimiento en el juicio", "apelacion"], ["La contraparte presentó pruebas nuevas que no fueron valoradas", "apelacion"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el caso planteado, donde {datos[idx][0]}, la parte afectada decide interponer un recurso de {datos[idx][1]} para que un tribunal superior revise la resolución."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["apelacion"]

explicacion: |
  El recurso de apelación es el medio de impugnación que permite que un tribunal de jerarquía superior (segunda instancia) revise la resolución dictada por un juez de primera instancia, con el fin de que la modifique, revoque o anule.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["efectos", "suspensivo", "devolutivo"]

variables:
  datos: [["suspensivo", "La ejecución de la sentencia se detiene hasta que el superior resuelva."], ["devolutivo", "La sentencia se puede ejecutar aunque se haya apelado."]]
  idx: uno_de([0, 1])

enunciado: "Si el recurso de apelación se admite con efecto {datos[idx][0]}, significa que {datos[idx][1]}"

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["suspensivo", "devolutivo"]

explicacion: |
  El efecto suspensivo impide la ejecución de la sentencia mientras el tribunal superior decide. El efecto devolutivo permite que la sentencia se cumpla a pesar de la impugnación.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["instancias", "jerarquia"]

variables:
  orden_instancias: [["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]]

enunciado: "Ordene correctamente el flujo jerárquico de la revisión judicial desde el inicio del conflicto hasta la máxima autoridad."

respuesta: ["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]
tipo: ordenar
opciones_explicitas: ["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]

explicacion: |
  El sistema judicial se organiza en instancias: la primera instancia es donde se inicia el juicio y se dicta la primera sentencia; la segunda instancia (o alzada) es la revisión por un tribunal superior.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["impugnacion", "derecho_defensa"]

variables:
  datos: [[true, "se puede apelar"], [false, "no se puede apelar"]]
  idx: uno_de([0, 1])

enunciado: "Si una sentencia ha sido dictada con violación al debido proceso, ¿es jurídicamente posible impugnarla mediante un recurso de apelación? {datos[idx][0]}"

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  La apelación es un derecho fundamental derivado del principio de la doble instancia, que permite corregir errores de hecho o de derecho cometidos por el juez de primera instancia.
```

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["tribunal", "alzada", "revisión"]

variables:
  datos: [["Tribunal de Alzada", "Tribunal de Segunda Instancia"], ["Tribunal de Alzada", "Corte de Apelaciones"]]
  idx: uno_de([0, 1])

enunciado: "El órgano encargado de revisar la sentencia dictada por el juez de primera instancia es conocido comúnmente como {datos[idx][0]}."

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Tribunal de Alzada", "Corte de Apelaciones", "Juzgado de Letras"]

explicacion: |
  El tribunal de alzada es el órgano colegiado que tiene la competencia para revisar lo actuado en la primera instancia, garantizando el derecho a la revisión judicial.
```

## Sección: argumentacion-juridica (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["conceptos_clave", "teoria_del_derecho"]

tipo: mc
opciones_explicitas: ["El proceso de justificación de una decisión mediante razones", "La aplicación mecánica de la ley sin razonamiento", "La imposición de la voluntad del juez sobre la norma", "Un conjunto de normas sin interpretación"]

respuesta: "El proceso de justificación de una decisión mediante razones"

enunciado: "La argumentación jurídica se define fundamentalmente como ___"

explicacion: |
  La argumentación jurídica no es una mera aplicación mecánica de la norma, sino un proceso de razonamiento orientado a justificar una decisión mediante la entrega de razones válidas.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["logica_juridica", "silogismo"]

tipo: vf
respuesta: falso

enunciado: "En el silogismo jurídico, la premisa mayor es el hecho concreto ocurrido en la realidad, mientras que la premisa menor es la norma aplicable."

explicacion: |
  Es falso. En el silogismo jurídico, la premisa mayor es la norma (el precepto legal) y la premisa menor es el hecho (el caso concreto).
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["estructura", "precedentes"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Cuando un abogado utiliza una decisión previa de un tribunal superior para sustentar su postura, está recurriendo al ___."

pasos:
  - "Identificar la fuente de la autoridad (jurisprudencia o precedente)."
  - "Verificar la pertinencia del caso anterior con el caso actual."

datos:
  - ["precedente", "precedente"]
  - ["argumento de autoridad", "argumento de autoridad"]

explicacion: |
  El uso de decisiones previas es la base de la doctrina del precedente, permitiendo la predictibilidad del sistema jurídico.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["terminologia"]

tipo: ordenar
opciones_explicitas: ["Premisa Normativa", "Premisa Fáctica", "Conclusión"]
respuesta: ["Premisa Normativa", "Premisa Fáctica", "Conclusión"]

enunciado: "Ordene los elementos lógicos que componen la estructura de un argumento jurídico estándar:"

explicacion: |
  La estructura lógica requiere primero la norma (Normativa), luego la verificación de los hechos (Fáctica) y finalmente la subsunción que lleva a la resolución (Conclusión).
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["logica", "validez"]

tipo: mc
opciones_explicitas: ["La coherencia lógica de la estructura del argumento", "La verdad material de los hechos presentados", "La opinión personal del juzgador", "La cantidad de leyes citadas"]

respuesta: "La coherencia lógica de la estructura del argumento"

enunciado: "En lógica jurídica, cuando un argumento sigue correctamente las reglas de inferencia pero sus premisas son cuestionables, se dice que el argumento es ___ pero no necesariamente ___."

explicacion: |
  Un argumento puede ser formalmente válido (lógicamente correcto) pero carecer de solidez si sus premisas fácticas o normativas son falsas o incorrectas.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "logica_juridica"]

respuesta: "premisa_mayor"
tipo: completar
respuestas_validas: ["premisa_mayor", "premisa_menor", "conclusión"]

enunciado: "En un silogismo jurídico, la norma general o ley aplicable se denomina ___."

explicacion: |
  El silogismo jurídico consta de tres partes: la premisa mayor (la norma), la premisa menor (el hecho probado) y la conclusión (la consecuencia jurídica resultante de aplicar la norma al hecho).
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["analogia", "interpretacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se aplica una norma de un contrato de compraventa a uno de permuta por similitud de objeto.", "falso"],
    ["Se aplica una norma de derecho penal para sancionar una conducta no prevista por analogia in malam partem.", "falso"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: completar
enunciado: "En el escenario donde {escenarios[escenario_idx][0]}, la aplicación analógica de la norma es jurídicamente válida para crear nuevas obligaciones."

explicacion: |
  La analogía es válida en derecho civil/administrativo para llenar lagunas, pero está prohibida en derecho penal cuando la interpretación es 'in malam partem' (perjudicial para el reo). En ambos casos presentados, la afirmación de validez es falsa según la doctrina general.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["jerarquia", "normas"]

respuesta: "Constitución Nacional"
tipo: mc
opciones_explicitas: ["Constitución Nacional", "Decreto Reglamentario", "Resolución Ministerial", "Contrato entre partes"]

enunciado: "Si un juez debe resolver una contradicción entre una norma de rango constitucional y un decreto administrativo, debe priorizar la ___."

explicacion: |
  De acuerdo al principio de jerarquía normativa (Pirámide de Kelsen), la Constitución es la norma suprema y prevalece sobre cualquier norma de inferior rango.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["precedente", "ratio_decidendi"]

respuesta: ["Identificación de los hechos relevantes", "Determinación de la ratio decidendi", "Extracción del principio jurídico", "Aplicación al caso actual"]
tipo: ordenar

opciones_explicitas: ["Identificación de los hechos relevantes", "Determinación de la ratio decidendi", "Extracción del principio jurídico", "Aplicación al caso actual", "Dictar sentencia final"]

enunciado: "Para utilizar un precedente judicial de forma sólida en un nuevo argumento, se debe seguir este orden lógico:"

explicacion: |
  Para aplicar un precedente no basta con citar la sentencia; se debe identificar primero los hechos (fáctico), luego el núcleo de la decisión (ratio decidendi), extraer la regla de derecho y finalmente aplicarla al nuevo caso.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "argumentacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El demandado alega un hecho extintivo de la obligación.", "falso"],
    ["El actor afirma la existencia de un contrato verbal.", "verdadero"]
  ]

respuesta: casos[caso_idx][1
tipo: completar
enunciado: "En el caso donde {casos[caso_idx][0]}, la carga de la prueba recae sobre el demandado (quien debe probar el hecho que afirma)."

explicacion: |
  Según la carga de la prueba, quien afirma un hecho debe probarlo. Sin embargo, si el demandado alega un hecho nuevo que extingue la obligación (ej. pago o prescripción), la carga de la prueba se traslada a él.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["jerarquia", "normas", "argumentacion"]

respuesta: "Constitución"
tipo: completar
respuestas_validas: ["Constitución"]

enunciado: "En un sistema de argumentación jurídica basado en la jerarquía de Kelsen, ninguna norma puede contradecir a la ___."

explicacion: |
  La Constitución es la norma de máxima jerarquía (norma fundamental). Un argumento jurídico sólido debe respetar la supremacía constitucional para evitar la invalidez de la norma inferior.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["precedente", "jurisprudencia", "fuentes"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: mc
opciones_explicitas: ["El precedente es una norma de aplicación general e inmediata para todos los casos futuros.", "El precedente es una guía interpretativa que debe ser analizada caso por caso según su ratio decidendi."]

enunciado: "Al utilizar la jurisprudencia como fuente de argumentación, ¿cuál es el error más común al aplicar un precedente?"

explicacion: |
  No se debe aplicar un precedente de forma mecánica (subsunción automática). Un argumento sólido requiere identificar la 'ratio decidendi' (razón de la decisión) y verificar si los hechos del nuevo caso son sustancialmente similares.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["falacias", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un abogado cita la opinión de un jurista prestigioso para sustentar una tesis, el argumento es automáticamente válido y vinculante, independientemente de si la opinión es doctrina o jurisprudencia."

explicacion: |
  Falso. La opinión de un jurista es doctrina (autoridad científica), pero no tiene fuerza vinculante como la ley o la jurisprudencia. Citar autoridad sin conectar la razón jurídica con el caso constituye una falacia de autoridad.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "estructura", "logica"]

respuesta: ["Premisa mayor", "Premisa menor", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa mayor", "Premisa menor", "Conclusión"]

enunciado: "Para construir un silogismo jurídico válido y evitar errores de lógica formal, se debe seguir este orden de construcción:"

explicacion: |
  1. Premisa mayor: La norma general. 2. Premisa menor: El hecho concreto encuadrado en la norma. 3. Conclusión: La consecuencia jurídica derivada de la subsunción.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["analogia", "interpretacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: mc
opciones_explicitas: ["La analogía es válida siempre que la laguna legal sea absoluta y no existan normas de principios.", "La analogía solo es lícita si existe identidad de razón entre el caso regulado y el caso no regulado, evitando la analogía in malam partem en derecho penal."]

enunciado: "En un argumento basado en la analogía, ¿cuál es el límite fundamental para evitar la arbitrariedad?"

explicacion: |
  El límite es la 'identidad de razón'. Además, en materias como el derecho penal, está prohibida la analogía para crear delitos o penas (principio de legalidad), lo que se conoce como prohibición de analogía 'in malam partem'.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["fundamentos", "logica"]

respuesta: "argumento"
tipo: "completar"
respuestas_validas: ["argumento"]

enunciado: "Mientras que una opinión es una manifestación subjetiva de un juicio de valor, un ___ se construye mediante el uso de premisas normativas y hechos probados para llegar a una conclusión jurídica."

explicacion: |
  La diferencia fundamental radica en la fundamentación. La opinión no requiere de una estructura lógica ni de la aplicación de una norma, mientras que el argumento jurídico debe derivar necesariamente de la norma aplicada al caso concreto.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "estructura"]

variables:
  escenario: uno_de([
    ["La norma prohíbe conducir ebrio", "El sujeto conducía con 0.8 g/l", "El sujeto es culpable"],
    ["La ley otorga propiedad a quien compra", "Juan compró la casa con escritura", "Juan es el dueño"],
    ["El contrato exige firma para validez", "El contrato no tiene firma", "El contrato es nulo"]
  ])

respuesta: "premisa_mayor"
tipo: "mc"
opciones_explicitas: ["premisa_mayor", "premisa_menor", "conclusión"]

enunciado: "En el silogismo jurídico aplicado al escenario {escenario[0]}, la afirmación '{escenario[0]}' representa la: "

explicacion: |
  La estructura del silogismo jurídico consta de: 1) Premisa mayor (la norma), 2) Premisa menor (el hecho/subsunción) y 3) Conclusión (la consecuencia jurídica).
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["precedente", "doctrina"]

respuesta: verdadero
tipo: "vf"

enunciado: "A diferencia de la doctrina (que es la opinión de los estudiosos del derecho), el precedente judicial es una decisión vinculante que establece una regla de interpretación para casos futuros similares."

explicacion: |
  La doctrina no tiene fuerza obligatoria por sí misma, mientras que el precedente (dependiendo del sistema jurídico, como el Common Law o la jurisprudencia vinculante en Civil Law) es una fuente de derecho que debe ser respetada por los jueces.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["interpretacion", "logica"]

respuesta: "a_contrario"
tipo: "mc"
opciones_explicitas: ["analogia", "a_contrario", "a_significatio"]

enunciado: "Si un abogado sostiene que, dado que la norma prohíbe el ingreso de 'perros' a un recinto, se entiende que también se prohíbe el ingreso de 'gatos' por una similitud de naturaleza, está usando analogía. Si, por el contrario, sostiene que como la norma dice 'perros', se entiende que se permite todo lo que NO sea un perro, está utilizando el argumento: "

explicacion: |
  El argumento 'a contrario' establece que la norma es excluyente: si la ley regula una situación específica, se entiende que excluye a todas aquellas que no encajen en esa descripción.
```

```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["subsuncion", "metodologia"]

respuesta: ["enunciado_normativo", "enunciado_fáctico", "subsuncion", "conclusión"]
tipo: "ordenar"
opciones_explicitas: ["enunciado_normativo", "enunciado_fáctico", "subsunción", "conclusión"]

enunciado: "Para construir un argumento sólido mediante la técnica de la subsunción, el jurista debe seguir este orden lógico de elementos:"

explicacion: |
  El proceso requiere primero identificar la norma (premisa mayor), luego los hechos probados (premisa menor), realizar el encuadre o subsunción (verificar si el hecho encaja en la norma) y finalmente dictar la consecuencia jurídica.
```

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

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["inconstitucional", "ilegal", "inválido"]

enunciado: "De acuerdo al principio de jerarquía normativa, si {escenario[idx][0]}, el argumento jurídico debe concluir que la norma inferior es ___."

explicacion: |
  En el sistema jurídico, la norma de mayor rango (como la Constitución) prevalece sobre las de menor rango. Un argumento sólido debe identificar la norma superior para invalidar la inferior.
```

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
tipo: completar
enunciado: "En el siguiente silogismo: '{silogismo[idx][0]}', el elemento '{silogismo[idx][1]}' actúa como la ___ (la subsunción del hecho a la norma)."

explicacion: |
  El silogismo jurídico se compone de la premisa mayor (la norma), la premisa menor (el hecho) y la conclusión. La subsunción es el proceso de encuadrar el hecho en la norma.
```

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

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["obligatorio", "persuasivo", "irrelevante"]

enunciado: "Al construir un argumento basado en la jurisprudencia, si se cita {caso[idx][0]}, el valor del precedente para el juez es ___."

explicacion: |
  Los precedentes de tribunales superiores (como la Corte) suelen tener carácter obligatorio (stare decisis), mientras que los de instancias inferiores o administrativas sirven como argumento persuasivo.
```

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

respuesta: falacia[idx][1
tipo: completar
respuestas_validas: ["ad_hominem", "ad_populum"]

enunciado: "Si un abogado argumenta que: '{falacia[idx][0]}', está incurriendo en una falacia de tipo ___."

explicacion: |
  La falacia ad hominem ataca a la persona y no al argumento, mientras que la ad populum apela a la mayoría para validar una conclusión.
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

variables:
  idx: uno_de([0, 1])
  datos: [
    [ "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral" ],
    [ "la validez de una norma depende de su concordancia con la moral", "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal" ]
  ]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral"]

enunciado: "Desde la perspectiva del iuspositivismo, {datos[idx][0]}"

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
respuestas_validas: ["lo que los jueces hacen en la práctica", "la conducta judicial efectiva"]

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

respuesta: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]
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

variables:
  escenario: uno_de([["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."], ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."]])

respuesta: scenario[0][0
tipo: mc
opciones_explicitas: ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción.", "El juez aplica la ley de forma mecánica sin considerar el contexto."]

enunciado: "Un estudioso del derecho observa que, ante una ley ambigua, los jueces de una ciudad siempre fallan a favor de las empresas locales para mantener la estabilidad económica. El estudioso concluye que el derecho no es la norma en el papel, sino la conducta de los jueces. El escenario donde se aplica esta visión es: {escenario}."

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

respuesta: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]
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

variables:
  caso: uno_de([[["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."], ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."]])

respuesta: "El derecho es la acción judicial"
tipo: completar
respuestas_validas: ["El derecho es la acción judicial"]

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
respuestas_validas: ["iusnaturalismo"]

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

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["El derecho es un conjunto de normas abstractas contenidas en los códigos.", "El derecho es la predicción de lo que los jueces decidirán en la práctica."]

enunciado: "Según la perspectiva del {datos[idx][0]}, el derecho no es un sistema lógico de normas, sino un fenómeno social basado en la conducta judicial."
datos: [
  ["realismo jurídico", "El derecho es la predicción de lo que los jueces decidirán en la práctica."],
  ["formalismo jurídico", "El derecho es un conjunto de normas abstractas contenidas en los códigos."]
]

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
respuestas_validas: ["El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."]

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

respuesta: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]
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
respuestas_validas: ["iusnaturalismo"]

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

respuesta: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]
tipo: "ordenar"

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
  escenario: [
    ["El iuspositivismo se centra en la norma escrita.", "El realismo jurídico se centra en la conducta del juez."],
    ["El iusnaturalismo se centra en la justicia universal.", "El iuspositivismo se centra en la validez formal."]
  ]

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["Escenario A", "Escenario B"]

enunciado: "Identifique la pareja de conceptos que define correctamente el contraste de enfoque entre las corrientes mencionadas en el {escenario[idx][0]}."

explicacion: |
  El ejercicio requiere identificar cuál de las dos descripciones de la variable `escenario` es correcta según la teoría jurídica.
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

enunciado: "Si un jurista sostiene que el derecho debe basarse en principios morales universales y superiores a la ley escrita, estamos ante el..."

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
  datos: [["La ley es válida porque cumple con el proceso legislativo, independientemente de su contenido moral", "Verdadero"], ["La validez de una norma depende de su conformidad con la moralidad social", "Falso"]]
  idx: uno_de([0, 1])

enunciado: "En el iuspositivismo estricto, la validez de una norma jurídica reside en su origen formal y no en su contenido ético."

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  Para el iuspositivismo, la separación entre derecho y moral es fundamental para determinar la validez de la norma.
```

```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

variables:
  datos: [["El derecho es el conjunto de normas escritas en el código", "normativismo"], ["El derecho es lo que los jueces deciden en sus sentencias", "realismo_juridico"]]
  idx: uno_de([0, 1])

enunciado: "Desde la perspectiva del realismo jurídico, el derecho se define como ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["lo que los jueces realmente hacen", "lo que los jueces deciden en sus sentencias"]

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

respuesta: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]
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

variables:
  datos: [["La ley es la ley y debe aplicarse sin importar la percepción de injusticia", "positivismo"], ["La ley debe ser sometida al juicio de la justicia natural", "iusnaturalismo"]]
  idx: uno_de([0, 1])

enunciado: "Si un sistema jurídico afirma que 'la ley es la ley' y su aplicación es obligatoria incluso si es considerada injusta, el sistema está operando bajo el principio de ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["positivismo", "iusnaturalismo", "realismo_juridico"]

explicacion: |
  El principio de legalidad estricta es un pilar del iuspositivismo, donde la validez es formal.
```

## Sección: denuncia-y-etapa-de-instruccion (25 preguntas)

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
respuestas_validas: ["pericia"]

explicacion: |
  La pericia es un medio de prueba técnico fundamental en la etapa de instrucción para esclarecer hechos complejos.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el inicio hasta la resolución final:"

respuesta: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

explicacion: |
  El proceso comienza con la denuncia, sigue con la investigación (instrucción), la etapa de debate (juicio) y finaliza con la sentencia.
```

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

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["fiscalia", "investigacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["El Fiscal debe dirigir la investigación para recolectar pruebas.", "verdadero"],
    ["El Fiscal decide la culpabilidad final del imputado.", "falso"]
  ]

respuesta: escenario[escenario_idx][1
tipo: completar
enunciado: "En la etapa de instrucción, el Fiscal tiene la función de dirigir la investigación y recolectar elementos de convicción para determinar si existe un caso para ir a juicio. ¿Es esto correcto en el sistema acusatorio?"

explicacion: |
  En el sistema acusatorio, el Fiscal dirige la investigación (etapa de instrucción/investigación preparatoria), pero la decisión de culpabilidad o inocencia es competencia exclusiva de un Juez de Oración o Tribunal de Juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "orden_cronologico"]

respuesta: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]

enunciado: "Ordene cronológicamente las etapas de un proceso penal estándar, desde el conocimiento del hecho hasta la resolución del conflicto."

explicacion: |
  El proceso comienza con la denuncia o querella, sigue la investigación para reunir pruebas (instrucción), el fiscal presenta su acusación si hay pruebas, y finalmente se celebra el juicio para dictar sentencia.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["pruebas", "instruccion"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [
    ["testimonio", "pericia"],
    ["testimonio", "sentencia"]
  ]

respuesta: caso[caso_idx][1
tipo: mc
opciones_explicitas: ["testimonio", "pericia", "sentencia", "recurso"]

enunciado: "Durante la etapa de instrucción, para determinar la veracidad de un hecho, el instructor puede ordenar un examen realizado por un experto en una materia técnica (por ejemplo, un perito médico). Este elemento se conoce como una ___."

explicacion: |
  La pericia es el medio de prueba técnico-científico fundamental en la etapa de instrucción para aportar conocimientos especializados al proceso.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["resolucion", "instruccion"]

respuesta: "sobreseimiento"
tipo: completar
respuestas_validas: ["sobreseimiento", "condena", "absolución"]

enunciado: "Si durante la etapa de instrucción se demuestra que el hecho denunciado no existió o que el imputado no participó en él, el juez debe dictar el ___ para finalizar el proceso sin llegar a juicio."

explicacion: |
  El sobreseimiento es la resolución que pone fin al proceso de manera definitiva cuando no hay elementos para sostener una acusación, evitando que una persona sea sometida innecesariamente a un juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: completar
respuestas_validas: ["denuncia", "querella"]

enunciado: "El proceso penal puede iniciarse de diversas formas; cuando un ciudadano comunica un hecho presuntamente delictivo ante la autoridad, el acto formal se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un hecho presuntamente delictivo. La querella, en cambio, requiere la constitución de la parte como querellante en el proceso.
```

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

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["La denuncia requiere la participación activa de la víctima como parte procesal, mientras que la querella es un mero aviso.", "La querella implica la constitución de la víctima como parte en el proceso, mientras que la denuncia es un deber ciudadano de informar."]

enunciado: "Según la doctrina procesal, ¿cuál es la diferencia fundamental entre la denuncia y la querella?"

explicacion: |
  La diferencia radica en la legitimación y la participación: el querellante es parte activa en el proceso y puede proponer medidas, mientras que el denunciante simplemente informa el hecho.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["etapas_procesales", "orden"]

respuesta: ["Notitia criminis", "Instrucción", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Juicio Oral", "Instrucción", "Notitia criminis"]

enunciado: "Ordene cronológicamente las etapas del proceso penal, partiendo desde la noticia del delito:"

explicacion: |
  El orden correcto es: 1. Notitia criminis (noticia del delito), 2. Instrucción (investigación), 3. Juicio Oral (debate y sentencia).
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["fiscalia", "investigacion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["El Fiscal tiene la carga de la prueba y dirige la investigación para esclarecer los hechos.", "El Fiscal es el encargado de dictar la sentencia definitiva tras la etapa de instrucción."]

enunciado: "En el sistema acusatorio moderno, ¿cuál es la función principal del Ministerio Público durante la etapa de instrucción?"

explicacion: |
  El Fiscal dirige la investigación y recolecta pruebas para determinar si hay elementos suficientes para acusar, pero la sentencia es competencia exclusiva de un Juez.
```

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

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["denuncia", "noticia criminal"], ["querella", "acción penal privada/pública con legitimación"]]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["noticia criminal", "acción penal privada/pública con legitimación"]

enunciado: "En el escenario seleccionado, la diferencia fundamental es que la ___ se caracteriza por ser una {datos[escenario_idx][1]}."

explicacion: |
  La distinción radica en la legitimación y la participación procesal de la víctima.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

respuesta: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]
tipo: ordenar
opciones_explicitas: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el hecho hasta la decisión final:"

explicacion: |
  Primero se recibe la noticia (denuncia/oficio), luego se investiga (instrucción) y finalmente se decide en juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["juez", "instrucción"]

respuesta: "investigar"
tipo: completar
respuestas_validas: ["investigar", "sentenciar", "acusar"]

enunciado: "Mientras que el Tribunal de Juicio tiene la función de dictar sentencia, el Juez de Instrucción tiene la función primordial de ___ los hechos."

explicacion: |
  La instrucción es una fase preparatoria de investigación, no de decisión de culpabilidad o inocencia definitiva.
```

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

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "investigacion"]

variables:
  datos: [["presunto homicidio", "investigar la autoría y las pruebas"], ["presunto hurto", "recaudar elementos de convicción"]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En la etapa de instrucción, el objetivo principal del fiscal es {datos[idx][0]}."

explicacion: |
  La etapa de instrucción tiene como fin la recolección de elementos de convicción para determinar si existe mérito para llevar a juicio a una persona.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]
tipo: ordenar
opciones_explicitas: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]

enunciado: "Ordene cronológicamente las etapas desde que se conoce el hecho hasta que se cierra la instrucción:"

explicacion: |
  El proceso penal sigue un orden lógico: primero se recibe la noticia, se abre la investigación, se recolectan las pruebas y finalmente se decide si se va a juicio.
```

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
respuestas_validas: ["imputación", "archivo"]

enunciado: "Si tras la investigación el fiscal determina que {datos[idx][0]}, la consecuencia procesal es la ___."

explicacion: |
  La formalización de la imputación es el acto que marca el inicio de la persecución penal efectiva sobre una persona determinada.
```

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

## Sección: derecho-administrativo (26 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: "regula la organización y actividad del Estado y su relación con los ciudadanos"
tipo: completar
respuestas_validas: ["regula la organización y actividad del Estado y su relación con los ciudadanos"]

enunciado: "El Derecho Administrativo es la rama del derecho público que ___."

explicacion: |
  El Derecho Administrativo se encarga de regular la estructura, el funcionamiento y las facultades de la Administración Pública, así como sus vínculos con los particulares.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["sujeto", "administracion"]

variables:
  escenario: uno_de([
    ["Administración Pública", "Estado"],
    ["Ciudadano", "Particular"],
    ["Administración Pública", "Estado"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["Administración Pública", "Poder Judicial", "Legislativo", "Empresa Privada"]

enunciado: "En una relación administrativa típica, el sujeto que actúa en nombre del Estado es la {escenario[1]}."

explicacion: |
  La Administración Pública es el brazo ejecutor del Estado que interactúa con los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["caracter", "derecho_publico"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Administrativo pertenece al ámbito del Derecho Público, ya que regula intereses generales de la comunidad."

explicacion: |
  Es correcto. Al regular la función estatal, se sitúa en el Derecho Público, a diferencia del Derecho Privado que regula relaciones entre particulares en igualdad de condiciones.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "acto_administrativo"]

respuesta: ["Sujeto", "Objeto", "Motivo", "Finalidad"]
tipo: ordenar
opciones_explicitas: ["Sujeto", "Objeto", "Motivo", "Finalidad"]

enunciado: "Ordene los elementos constitutivos de un acto administrativo según su estructura lógica de validez:"

explicacion: |
  Para que un acto sea válido, debe tener un sujeto con competencia, un objeto lícito, un motivo (antecedentes) y una finalidad de interés público.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

variables:
  caso: uno_de([
    ["La Administración puede actuar solo si una norma la autoriza.", "verdadero"],
    ["La Administración puede actuar incluso sin norma previa si es urgente.", "falso"]
  ])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Según el Principio de Legalidad, la afirmación siguiente es {caso[0]}: 'La Administración puede actuar incluso sin norma previa si es urgente'."

explicacion: |
  El Principio de Legalidad establece que la Administración solo puede realizar aquello que la ley le permite expresamente.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["acto_administrativo", "estado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La Municipalidad otorga una licencia de construcción a un ciudadano.", "licencia"],
    ["El Ministerio de Salud dicta una resolución de clausura para un restaurante.", "clausura"]
  ]

enunciado: "Considerando que {escenarios[escenario_idx][0]}, estamos ante un acto administrativo que regula la actividad del Estado frente a un particular."

respuesta: "{escenarios[escenario_idx][1]}"
tipo: completar
respuestas_validas: ["licencia", "clausura"]

explicacion: |
  El acto administrativo es una declaración de voluntad del Estado que produce efectos jurídicos directos sobre los administrados.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["sujeto", "estado"]

enunciado: "En un proceso de licitación pública, el Estado actúa como un ente regulador y organizador. ¿Es el ciudadano un sujeto pasivo de la actividad administrativa en este contexto?"

respuesta: verdadero
tipo: vf

explicacion: |
  El Derecho Administrativo regula la relación entre el Estado (sujeto activo) y los ciudadanos (sujetos pasivos/administrados).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "validez"]

enunciado: "Para que un acto administrativo sea válido, debe cumplir con ciertos requisitos. Si una autoridad dicta una norma sin tener la competencia legal para ello, el elemento afectado es:"

respuesta: "Competencia"
tipo: mc
opciones_explicitas: ["Objeto", "Sujeto", "Competencia", "Motivación"]

explicacion: |
  La competencia es la atribución legal que tiene un órgano del Estado para actuar. Actuar sin ella invalida el acto.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

variables:
  pasos_ordenados: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]

enunciado: "Ordene la secuencia lógica de un procedimiento administrativo estándar para la resolución de un reclamo ciudadano:"

respuesta: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]
tipo: ordenar
opciones_explicitas: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]

explicacion: |
  El procedimiento administrativo es la serie de pasos sucesivos que garantizan el debido proceso antes de la decisión final.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["control", "recurso"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un ciudadano considera que una multa de tránsito es ilegal.", "impugnar"],
    ["Una empresa cree que una concesión fue otorgada arbitrariamente.", "impugnar"]
  ]

enunciado: "Ante un acto administrativo que el administrado considera lesivo a sus derechos, el paso siguiente es ___ el acto mediante un recurso administrativo."

respuesta: "impugnar"
tipo: completar
respuestas_validas: ["impugnar"]

explicacion: |
  La impugnación es el derecho de los ciudadanos de cuestionar la legalidad de los actos del Estado para que sean revisados.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: "regula la organización y actividad del Estado y su relación con los ciudadanos"
tipo: completar
respuestas_validas: ["regula la organización y actividad del Estado y su relación con los ciudadanos"]

enunciado: "El Derecho Administrativo es la rama del derecho público que ___."

explicacion: |
  A diferencia del derecho privado, el administrativo se centra en la estructura, funciones y facultades de la administración pública para asegurar el bien común.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["clasificacion", "derecho_publico"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Administrativo pertenece a la rama del Derecho Público, ya que regula el ejercicio de la función administrativa del Estado."

explicacion: |
  Correcto. El Derecho Público regula las relaciones donde el Estado actúa con imperio (autoridad) para satisfacer el interés general.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["distincion", "constitucional"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La Constitución establece la estructura básica del Estado.", "El Derecho Administrativo desarrolla el funcionamiento concreto de esa estructura."],
    ["La Constitución define los derechos fundamentales.", "El Derecho Administrativo establece los procedimientos para que el Estado los garantice o los limite."]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]

enunciado: "Si el Derecho Constitucional se ocupa de la estructura orgánica y los principios fundamentales del Estado, el Derecho Administrativo se ocupa de: {escenarios[escenario_idx][1]}"

explicacion: |
  El Derecho Constitucional es la norma suprema que organiza el poder; el Administrativo es la herramienta operativa que permite a ese poder actuar en la realidad cotidiana.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "acto_administrativo"]

respuesta: "Sujeto, Objeto, Motivo, Finalidad y Procedimiento"
tipo: completar
respuestas_validas: ["Sujeto, Objeto, Motivo, Finalidad y Procedimiento"]

enunciado: "Para que un acto administrativo sea válido, debe contar con ciertos elementos esenciales: ___, ___, ___, ___ y ___."

explicacion: |
  La validez de la actuación estatal depende de que el sujeto tenga competencia, el objeto sea lícito, el motivo sea real, la finalidad sea el interés público y se cumpla el procedimiento legal.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["jerarquia", "orden_normativo"]

respuesta: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Reglamentos/Decretos"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Reglamentos/Decretos"]

enunciado: "Ordene de mayor a menor jerarquía normativa los instrumentos que rigen la actividad de la administración pública:"

explicacion: |
  El Derecho Administrativo debe actuar siempre bajo el principio de legalidad, respetando la pirámide jurídica que comienza con la Constitución y los Tratados, seguidos por las leyes y finalmente los reglamentos dictados por la propia administración.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["naturaleza_juridica", "derecho_privado"]

respuesta: "Derecho Administrativo"
tipo: "completar"
respuestas_validas: ["Derecho Administrativo"]

enunciado: "Mientras que el Derecho Privado regula las relaciones entre particulares, el ___ regula la organización y actividad del Estado en su función pública."

explicacion: |
  El Derecho Administrativo es una rama del Derecho Público que se ocupa de la organización, funcionamiento, poderes y deberes de la Administración Pública y de la relación jurídica entre esta y los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["principios", "derecho_privado"]

respuesta: falso
tipo: "vf"

enunciado: "En el Derecho Administrativo, la relación entre el Estado y el ciudadano es de igualdad absoluta, tal como ocurre en el Derecho Privado."

explicacion: |
  Falso. En el Derecho Administrativo rige el principio de supraestatalidad o prerrogativas de la Administración, lo que implica una relación de subordinación jurídica para asegurar el bien común, a diferencia de la igualdad de condiciones en el Derecho Privado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un contrato de alquiler entre dos vecinos", "Derecho Privado"],
    ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]
  ]

respuesta: escenario_idx_res[1
tipo: "mc"
opciones_explicitas: ["escenario_idx_res[0]", "escenario_idx_res[1]"]

enunciado: "Identifique la situación que pertenece al ámbito del Derecho Administrativo: {escenario_idx_res[0]}"

variables_extra:
  escenario_idx_res: [["un contrato de alquiler entre dos vecinos", "Derecho Privado"], ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]]

explicacion: |
  El Derecho Administrativo regula los actos de la administración pública, como la emisión de licencias o permisos, mientras que los contratos entre particulares pertenecen al Derecho Privado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  idx: uno_de([0, 1])
  datos: [["un contrato de alquiler entre dos vecinos", "Derecho Privado"], ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]]

respuesta: datos[idx][1
tipo: "mc"
opciones_explicitas: ["Derecho Privado", "Derecho Administrativo"]

enunciado: "Si el caso es {datos[idx][0]}, ¿qué rama del derecho lo regula?"

explicacion: |
  El Derecho Administrativo regula los actos de la administración pública, como la emisión de licencias o permisos, mientras que los contratos entre particulares pertenecen al Derecho Privado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

respuesta: "Derecho Público"
tipo: "completar"
respuestas_validas: ["Derecho Público"]

enunciado: "A diferencia del Derecho Privado, el Derecho Administrativo se clasifica dentro del ___."

explicacion: |
  El Derecho Administrativo es parte del Derecho Público porque regula intereses generales y la estructura del Estado, donde el Estado actúa con potestades que no posee un particular.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

respuesta: ["Sujeto Activo (Estado)", "Sujeto Pasivo (Administrado)", "Objeto (Acto Administrativo)", "Motivación (Causa/Fin)"]
tipo: "ordenar"
opciones_explicitas: ["Sujeto Activo (Estado)", "Sujeto Pasivo (Administrado)", "Objeto (Acto Administrativo)", "Motivación (Causa/Fin)"]

enunciado: "Ordene los elementos esenciales que configuran la relación administrativa, partiendo desde la entidad que ejerce la función hasta la justificación del acto:"

pasos:
  - "Identificar quién actúa (Estado)"
  - "Identificar quién recibe la acción (Ciudadano)"
  - "Identificar el contenido del acto"
  - "Identificar la razón de ser del acto"

explicacion: |
  Para que exista la actividad administrativa, debe haber un sujeto estatal (activo) que interactúa con un ciudadano (pasivo) mediante un acto (objeto) que debe estar debidamente fundado (motivación).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["acto_administrativo", "nulidad"]

variables:
  escenario: uno_de([
    ["Un funcionario dicta una resolución sin tener competencia sobre la materia", "nulo"],
    ["La administración emite un acto con vicio en el objeto, siendo imposible de ejecutar", "nulo"],
    ["Un acto administrativo carece de la motivación exigida por la ley", "nulo"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["nulo", "válido", "anulable"]

enunciado: "En el siguiente caso: {escenario[idx][0]}, la validez del acto administrativo es: ___"

explicacion: |
  Un acto administrativo presenta nulidad absoluta cuando carece de elementos esenciales (competencia, objeto, causa, motivación o finalidad) o cuando el vicio es de tal magnitud que impide su subsistencia legal.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["silencio_administrativo", "procedimiento"]

variables:
  tipo_silencio: uno_de([
    ["El interesado solicita una licencia y la administración no responde en el plazo legal. La ley establece que esto implica una denegación.", "negativo"],
    ["El interesado solicita una subvención y la administración no responde en el plazo legal. La ley establece que esto implica una concesión.", "positivo"]
  ])
  idx: uno_de([0,1])

respuesta: tipo_silencio[idx][1
tipo: mc
opciones_explicitas: ["negativo", "positivo"]

enunciado: "Ante el escenario donde {tipo_silencio[idx][0]}, estamos ante un silencio administrativo de carácter: ___"

explicacion: |
  El silencio administrativo puede ser positivo (la falta de respuesta equivale a la aceptación de la petición) o negativo (la falta de respuesta equivale a un rechazo), dependiendo de lo que la norma específica determine para ese trámite.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["elementos", "acto_administrativo"]

respuesta: "competencia, objeto, causa, motivación, finalidad"
tipo: completar
respuestas_validas: ["competencia, objeto, causa, motivación, finalidad"]

enunciado: "Para que un acto administrativo sea válido, debe reunir una serie de elementos esenciales. Estos son: ___, ___, ___, ___ y ___."

explicacion: |
  Los elementos son: Competencia (autoridad facultada), Objeto (lo que el acto decide), Causa (antecedentes de hecho y derecho), Motivación (explicación de la decisión) y Finalidad (interés público).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la Administración Pública puede actuar de manera discrecional incluso si sus decisiones contravienen la ley vigente?"

explicacion: |
  No. El principio de legalidad establece que la Administración solo puede realizar aquello que la ley le permite expresamente, limitando la discrecionalidad al marco de la ley y el interés público.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["procedimiento", "fases"]

respuesta: ["Iniciación", "Instrucción", "Finalización"]
tipo: ordenar
opciones_explicitas: ["Iniciación", "Instrucción", "Finalización"]

enunciado: "Ordene cronológicamente las etapas típicas de un procedimiento administrativo:"

explicacion: |
  El procedimiento comienza con la Iniciación (de oficio o a parte), sigue con la Instrucción (donde se aportan pruebas y alegaciones) y concluye con la Finalización (mediante resolución o acto administrativo).
```
