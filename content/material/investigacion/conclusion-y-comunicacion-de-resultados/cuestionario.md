# Investigacion — Conclusion y comunicacion de resultados (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de conclusión

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "conclusion"]

respuesta: "síntesis"
tipo: completar
respuestas_validas:
  - "síntesis"
  - "resumen"

enunciado: "La conclusión de una investigación debe presentarse como una ___ de los hallazgos principales, integrando los resultados con los objetivos planteados."

explicacion: |
  La conclusión no es un resumen de lo que ya se dijo, sino una síntesis que interpreta los resultados en relación con la pregunta de investigación.
```

### 2 — El rol de la discusión

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["discusion", "interpretacion"]

variables:
  es_correcta: verdadero

respuesta: es_correcta
tipo: vf
enunciado: "¿La sección de discusión tiene como objetivo principal comparar los resultados obtenidos con la literatura existente y las hipótesis previas?"

explicacion: |
  Correcto. La discusión es el espacio donde se interpretan los datos y se contrastan con el marco teórico y estudios previos.
```

### 3 — Canales de comunicación

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "difusion"]

respuesta: "artículo científico"
tipo: mc
opciones_explicitas: ["artículo científico", "diario de campo", "encuesta de satisfacción", "plan de trabajo"]

enunciado: "¿Cuál de los siguientes es el medio de comunicación formal por excelencia para difundir resultados de investigación ante la comunidad académica?"

explicacion: |
  El artículo científico es el estándar de comunicación en la ciencia para permitir la revisión por pares y la difusión del conocimiento.
```

### 4 — Elementos de un reporte

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "reporte"]

respuesta_orden: ["resumen", "introducción", "metodología", "resultados", "discusión", "conclusión"]
tipo: ordenar

opciones_explicitas: ["resumen", "introducción", "metodología", "resultados", "discusión", "conclusión"]

enunciado: "Ordene los elementos de un reporte de investigación siguiendo la estructura lógica estándar de publicación."

explicacion: |
  La estructura estándar sigue el orden: Resumen (Abstract), Introducción, Metodología, Resultados, Discusión y finalmente la Conclusión.
```

### 5 — Limitaciones del estudio

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["limitaciones", "ética"]

respuesta: falso
tipo: vf
enunciado: "¿Es una mala práctica de comunicación omitir las limitaciones encontradas en el estudio para que la investigación parezca más sólida?"

explicacion: |
  Falso. Declarar las limitaciones es un acto de honestidad intelectual y es fundamental para que otros investigadores comprendan el alcance de los resultados.
```

### 6 — La estructura de la conclusión

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conclusion"]

enunciado: "Al redactar la conclusión de un informe de investigación, el investigador debe retomar los objetivos planteados inicialmente para determinar si se cumplieron o no. Por lo tanto, una conclusión debe ser una síntesis de los hallazgos y no una repetición textual del resumen."

respuesta: verdadero
tipo: vf
```

### 7 — El proceso de revisión de manuscritos

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "revision"]

enunciado: "En el proceso de comunicación científica, ¿cuál de las siguientes prácticas es recomendada para mejorar la calidad del manuscrito antes de la sumisión formal?"

respuesta: "El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista."
tipo: mc
opciones_explicitas: ["El investigador escribe el artículo y lo envía directamente a la revista sin revisión previa.", "El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista.", "El investigador publica los resultados en un blog personal sin pasar por revisión científica."]
```

### 8 — Pasos para la comunicación de resultados

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["proceso", "comunicacion"]

enunciado: "Para asegurar una comunicación efectiva de un nuevo descubrimiento científico, se deben seguir estos pasos en orden lógico:"

pasos:
  - "Realizar el análisis exhaustivo de los datos obtenidos."
  - "Redactar el manuscrito siguiendo las normas de la revista elegida."
  - "Enviar el manuscrito a la editorial para la revisión por pares."
  - "Presentar los resultados en un congreso para recibir feedback."

respuesta_orden: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
tipo: ordenar
opciones_explicitas: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
```

### 9 — El rol de las limitaciones

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["limitaciones", "etica"]

variables:
  caso: uno_de([["Un estudio sobre un fármaco que no menciona que la muestra fue de solo 5 personas.", "incorrecto"], ["Un estudio que reconoce que el clima afectó la velocidad de reacción química.", "correcto"]])

enunciado: "En la sección de discusión y conclusiones, un investigador debe declarar las limitaciones del estudio. Un ejemplo de una declaración de limitaciones adecuada es: {caso[0]}"

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["incorrecto", "correcto"]
```

### 10 — Completar el flujo de comunicación

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["terminologia", "completar"]

enunciado: "Cuando un artículo científico es aceptado y publicado, se convierte en parte del ___ científico, permitiendo que otros investigadores citen los hallazgos para construir nuevo conocimiento."

respuestas_validas:
  - "cuerpo"
  - "conocimiento"
  - "corpus"
respuesta: "conocimiento"
tipo: completar
```

### 11 — ¿La conclusión es un resumen?

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "conclusiones"]

respuesta: falso
tipo: vf

enunciado: "Una conclusión debe ser una mera repetición o resumen de los resultados obtenidos, sin aportar una síntesis interpretativa de los mismos."

explicacion: |
  La conclusión no es un resumen. Mientras que el resumen describe qué se hizo y qué se encontró, la conclusión debe interpretar los hallazgos, responder a la pregunta de investigación y discutir las implicancias de los resultados.
```

### 12 — El orden de una comunicación científica

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "estructura"]

variables:
  orden_correcto: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión"]
  idx: uno_de([0,1,2,3,4,5])

respuesta_orden: orden_correcto
tipo: ordenar

opciones_explicitas: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión"]

enunciado: "Ordene los elementos de un artículo científico estándar siguiendo la estructura lógica de publicación (IMRyD extendido)."

explicacion: |
  La estructura estándar sigue un flujo lógico: desde la visión general (Resumen), el contexto (Introducción), el proceso (Metodología), la evidencia (Resultados), la interpretación (Discusión) y el cierre (Conclusión).
```

### 13 — El error de la generalización excesiva

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["errores", "validez"]

respuesta: "generalización excesiva"
tipo: completar
respuestas_validas:
  - "generalización excesiva"
  - "sesgo de confirmación"
  - "error de muestreo"

enunciado: "Cuando un investigador extiende sus conclusiones más allá de los límites de su muestra o de los datos recolectados, está incurriendo en una ___."

explicacion: |
  La validez externa de una investigación depende de que las conclusiones no pretendan aplicar leyes universales si la muestra es limitada o no representativa del universo estudiado.
```

### 14 — ¿Qué debe evitarse en la discusión?

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["discusion", "errores"]

respuesta: "Presentar nuevos datos"
tipo: mc
opciones_explicitas: ["Presentar nuevos datos", "Comparar con autores previos", "Reconocer limitaciones", "Sugerir futuras líneas de investigación"]

enunciado: "Durante la sección de Discusión de un informe o artículo, ¿cuál de las siguientes acciones es un error metodológico grave?"

explicacion: |
  La sección de Discusión es para interpretar resultados ya presentados. Si se introducen datos nuevos que no fueron expuestos en la sección de Resultados, se rompe la estructura lógica y la transparencia del proceso.
```

### 15 — Comunicación y sesgo de confirmación

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["etica", "sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Al comunicar resultados, el investigador tiene la obligación ética de reportar tanto los hallazgos que apoyan su hipótesis como aquellos que la contradicen."

explicacion: |
  Omitir resultados que contradicen la hipótesis inicial es una forma de sesgo de publicación que distorsiona el conocimiento científico. La integridad requiere reportar toda la evidencia relevante.
```

### 16 — Conclusión vs. Discusión

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "escritura_cientifica"]

respuesta: "discusión"
tipo: mc
opciones_explicitas: ["conclusión", "discusión", "resumen", "introducción"]

enunciado: "Mientras que la conclusión se centra en sintetizar los hallazgos principales y responder al objetivo, la ___ se enfoca en interpretar los resultados en el contexto de la literatura existente y las implicaciones teóricas."

explicacion: |
  La discusión es la sección donde se comparan los resultados propios con otros estudios, mientras que la conclusión es un cierre sintético de lo aprendido.
```

### 17 — Diferencia entre Resumen y Conclusión

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "estructura"]

respuesta: falso
tipo: vf
enunciado: "En un artículo científico, la sección de conclusiones debe ser una mera repetición del texto del resumen (abstract) sin aportar una síntesis interpretativa de los hallazgos."

explicacion: |
  Falso. El resumen es una síntesis de todo el trabajo (incluyendo métodos y resultados), mientras que la conclusión debe cerrar el argumento de la investigación y proyectar futuras líneas de estudio.
```

### 18 — El rol de la Comunicación de Resultados

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["difusion", "etica"]

respuesta_orden: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]
tipo: ordenar

opciones_explicitas: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]

enunciado: "Ordene los niveles de formalidad y validación científica en la comunicación de resultados, desde el más riguroso/validado hasta el menos formal."

explicacion: |
  La revisión por pares (peer-review) es el estándar de oro de la comunicación científica, asegurando la calidad y veracidad de los hallazgos antes de su difusión masiva.
```

### 19 — Conclusión vs. Hipótesis

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: "se_confirma_o_rechaza"
tipo: completar
respuestas_validas:
  - "se_confirma_o_rechaza"

enunciado: "Si la hipótesis es la proposición que se intenta verificar al inicio de la investigación, la conclusión es el espacio donde la hipótesis ___."

explicacion: |
  La conclusión debe retomar la hipótesis original para determinar si la evidencia recolectada la respalda o la refuta.
```

### 20 — Elementos de una Conclusión Efectiva

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["escritura_cientifica", "calidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["hallazgos_limitados", "relevancia_alta"], ["hallazgos_contradictorios", "necesidad_de_nuevos_estudios"]]
  respuestas: ["relevancia_alta", "necesidad_de_nuevos_estudios"]

respuesta: respuestas[caso_idx]
tipo: mc
opciones_explicitas: ["relevancia_alta", "necesidad_de_nuevos_estudios", "repetir_metodologia", "ignorar_errores"]

enunciado: "Si un investigador obtiene {escenarios[caso_idx][0]}, la conclusión debe enfocarse principalmente en la {escenarios[caso_idx][1]}."

explicacion: |
  Una conclusión debe ser honesta con las limitaciones del estudio. Si los resultados son limitados o contradictorios, la comunicación científica exige señalar la necesidad de nuevas investigaciones para resolver la ambigüedad.
```

### 21 — El cierre del informe

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["conclusiones", "informe"]

variables:
  datos: [["Los datos muestran una correlación positiva entre el uso de fertilizante y el crecimiento", "Se confirma la hipótesis inicial"], ["Los resultados son inconsistentes y no permiten validar la hipótesis", "Se sugiere ampliar la muestra"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Se confirma la hipótesis inicial", "Se sugiere ampliar la muestra", "Se deben ignorar los datos negativos", "El estudio es inválido"]

enunciado: "Un investigador llega a la siguiente situación: {datos[idx][0]}. ¿Cuál es la acción o conclusión más adecuada para el cierre de su informe?"

explicacion: |
  Una conclusión debe ser coherente con los hallazgos. Si los datos apoyan la hipótesis, se confirma; si no, se debe proponer la necesidad de más investigación o admitir la falta de evidencia.
```

### 22 — Veracidad de la comunicación

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["etica", "comunicacion"]

respuesta: falso
tipo: vf

enunciado: "En la comunicación de resultados, es éticamente aceptable omitir datos que contradicen la hipótesis principal para asegurar que la conclusión sea contundente."

explicacion: |
  Falso. La integridad científica exige reportar todos los hallazgos, incluso aquellos que contradicen la hipótesis, para evitar el sesgo de publicación.
```

### 23 — Estructura del reporte final

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]
tipo: ordenar
opciones_explicitas: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]

enunciado: "Ordene los elementos de un artículo científico siguiendo el orden lógico estándar de comunicación de resultados."

explicacion: |
  El orden estándar permite que el lector comprenda primero el contexto (introducción), cómo se hizo (metodología), qué se encontró (resultados) y qué significan esos hallazgos (discusión/conclusión).
```

### 24 — Elementos de la discusión

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["discusion", "interpretacion"]

variables:
  datos: [["Resultados significativos en el grupo A", "Resultados no significativos"], ["Efecto observado en la variable X", "Efecto nulo en la variable X"]]
  idx: uno_de([0, 1])

respuesta: "interpretar"
tipo: completar
respuestas_validas:
  - "interpretar"
  - "repetir"
  - "ignorar"

enunciado: "En la sección de discusión de un informe, el investigador debe ___ los resultados obtenidos en relación con el marco teórico y los objetivos planteados."

explicacion: |
  La discusión no es solo repetir los resultados, sino interpretarlos, compararlos con otros autores y explicar su relevancia científica.
```

### 25 — El canal de comunicación

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["difusion", "canales"]

variables:
  datos: [["un congreso científico", "una red social personal"], ["una revista indexada", "un blog de opinión"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["un congreso científico", "una red social personal", "una revista indexada", "un blog de opinión"]

enunciado: "Si el objetivo es la difusión académica formal de los resultados de una investigación, el medio más apropiado es ___."

explicacion: |
  Para la comunicación científica formal, se requieren canales con revisión por pares (peer-review) como revistas indexadas o presentaciones en congresos especializados.
```
