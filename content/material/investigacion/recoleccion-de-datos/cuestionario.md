# Investigacion — Recoleccion de datos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Variable

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "variable"
tipo: completar
respuestas_validas:
  - "variable"

enunciado: "En una investigación, cualquier característica, propiedad o atributo que puede variar y ser medido u observado se denomina ___."

explicacion: |
  La variable es el elemento central de la investigación; es aquello que se estudia y que presenta variaciones entre los sujetos o casos.
```

### 2 — Métodos de Recolección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  tema_sub: "metodologias"
  nivel: "basico"
  tags: ["metodos", "tecnica"]

respuesta: verdadero
tipo: vf
enunciado: "Si un investigador utiliza una entrevista en profundidad para comprender las motivaciones subjetivas de un grupo, está utilizando un método de recolección de tipo cualitativo."

explicacion: |
  Los métodos cualitativos buscan comprender significados y experiencias, mientras que los cuantitativos buscan medir magnitudes y frecuencias.
```

### 3 — Instrumentos de Recolección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["instrumentos", "encuesta"]

respuesta: "encuesta"
tipo: mc
opciones_explicitas: ["entrevista", "encuesta", "observación", "análisis documental"]

enunciado: "Es el instrumento de recolección de datos que consiste en un conjunto de preguntas estandarizadas aplicadas a una muestra para obtener datos estadísticos."

explicacion: |
  La encuesta se caracteriza por su estandarización, lo que permite la comparación de respuestas entre muchos sujetos.
```

### 4 — Fases de la Recolección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]
tipo: ordenar
opciones_explicitas: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]

enunciado: "Ordene cronológicamente los pasos lógicos para llevar a cabo la recolección de datos en un trabajo de campo:"

explicacion: |
  Primero se debe diseñar el instrumento, luego se procede a su aplicación en el campo y finalmente se debe asegurar el registro sistemático de la información obtenida.
```

### 5 — Validez y Confiabilidad

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["calidad", "rigor"]

respuesta: "fiabilidad"
tipo: completar
respuestas_validas:
  - "fiabilidad"
  - "confiabilidad"

enunciado: "La propiedad de un instrumento que indica que, si se aplica repetidamente en las mismas condiciones, producirá resultados consistentes es la ___."

explicacion: |
  La fiabilidad (o confiabilidad) se refiere a la consistencia de la medición, mientras que la validez se refiere a si el instrumento mide realmente lo que pretende medir.
```

### 6 — El sesgo de selección en encuestas

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "validez"]

enunciado: "Un investigador desea conocer la opinión de los estudiantes de una universidad sobre la calidad del buffet. Para ello, decide realizar la encuesta únicamente a las personas que están haciendo fila en la cafetería a las 12:00 PM. ¿Este método de recolección presenta un sesgo de selección?"

tipo: vf
respuesta: verdadero

explicacion: |
  Es un sesgo de selección porque la muestra solo incluye a quienes consumen en la cafetería a esa hora específica, excluyendo a quienes traen su propia comida, a quienes almuerzan en otros horarios o a quienes no usan la cafetería, invalidando la representatividad de la muestra.
```

### 7 — El proceso de validación de instrumentos

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "validez", "confiabilidad"]

respuesta_orden: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]

enunciado: "Ordene la secuencia lógica correcta para garantizar la confiabilidad de un instrumento de recolección de datos:"

explicacion: |
  Para garantizar la confiabilidad, la secuencia lógica debe comenzar con el diseño, seguido de una validación mediante prueba piloto, el análisis estadístico de dicha prueba y, finalmente, la aplicación masiva.
```

### 8 — El dilema de la observación participante

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["observacion", "etnografia", "metodologia"]

enunciado: "En una investigación etnográfica, si el investigador se involucra profundamente en la cultura que estudia, puede perder la objetividad debido al 'efecto de reactividad'. ¿Cuál es el término técnico para cuando los sujetos cambian su comportamiento al saber que son observados?"

opciones_explicitas: ["Efecto Hawthorne", "Sesgo de confirmación", "Error de medición", "Falsa dicotomía"]
respuesta: "Efecto Hawthorne"
tipo: "mc"

explicacion: |
  El Efecto Hawthorne ocurre cuando los individuos modifican un aspecto de su comportamiento en respuesta a su conciencia de que están siendo observados, lo cual es un desafío crítico en la observación directa.
```

### 9 — Completar la definición de Triangulación

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["triangulacion", "validez", "metodologia"]

enunciado: "Para aumentar la validez de una investigación, el investigador decide utilizar entrevistas, encuestas y observación para estudiar el mismo fenómeno. A este proceso de utilizar múltiples fuentes o métodos se le denomina ___."

respuestas_validas:
  - "triangulación"
respuesta: "triangulación"
tipo: "completar"

explicacion: |
  La triangulación permite contrastar diferentes tipos de datos para reducir el sesgo de un único método y fortalecer la consistencia de los hallazgos.
```

### 10 — Análisis de consistencia en datos cualitativos

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["cualitativa", "codificacion", "fiabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Un investigador analiza 10 entrevistas y llega a conclusiones basadas solo en sus propias opiniones sin contrastar con el texto.", "Dos investigadores analizan las mismas entrevistas de forma independiente y llegan a las mismas categorías temáticas."]
  es_confiable: [falso, verdadero]

enunciado: "Se presenta el siguiente escenario de investigación: {textos[escenario_idx]}. ¿Es este proceso confiable para la investigación científica? (Respuesta: verdadero/falso)"

respuesta: es_confiable[escenario_idx]
tipo: "vf"

explicacion: |
  En el primer caso (falso), el investigador incurre en subjetividad excesiva. En el segundo caso (verdadero), se cumple con la fiabilidad inter-jueces, esencial en la investigación cualitativa.
```

### 11 — Sesgo de selección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se realiza una encuesta sobre hábitos de lectura solo en una biblioteca pública.", "muestreo_no_representativo"], ["Se entrevista a personas en un gimnasio sobre su consumo de azúcar.", "muestreo_no_representativo"]]

enunciado: "Si un investigador utiliza el escenario '{escenarios[escenario_idx][0]}' para estudiar la población general, estamos ante un error de: ___"

respuestas_validas:
  - "muestreo_no_representativo"

respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  El error radica en que la muestra no refleja la diversidad de la población objetivo, lo que introduce un sesgo de selección que invalida la generalización de los resultados.
```

### 12 — Validez vs. Confiabilidad

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "conceptos"]

enunciado: "Un instrumento de recolección de datos que produce resultados consistentes y estables en aplicaciones repetidas, pero que no mide lo que pretende medir, posee alta ___ pero baja ___."

opciones_explicitas: ["validez", "confiabilidad", "confiabilidad", "validez", "precisión", "exactitud"]

respuesta: "confiabilidad"
tipo: mc

explicacion: |
  La confiabilidad se refiere a la consistencia de la medida (si se repite, da lo mismo), mientras que la validez se refiere a si el instrumento realmente mide la variable de interés.
```

### 13 — El error del observador

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["observacion", "sesgo"]

enunciado: "¿Es verdadero que el 'efecto reactivo' ocurre cuando los sujetos de estudio modifican su comportamiento natural al saber que están siendo observados?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exacto. La presencia del investigador puede alterar la conducta natural de los sujetos, lo que constituye un sesgo de reactividad que el investigador debe intentar mitigar.
```

### 14 — Pasos para la validación de un instrumento

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["procedimiento", "instrumentos"]

enunciado: "Ordene los pasos lógicos para asegurar la calidad de un instrumento de recolección de datos antes de su aplicación definitiva:"

opciones_explicitas: ["Diseño del instrumento", "Prueba piloto", "Validación por expertos", "Análisis de resultados de la prueba"]

respuesta_orden: ["Diseño del instrumento", "Validación por expertos", "Prueba piloto", "Análisis de resultados de la prueba"]
tipo: ordenar

explicacion: |
  Primero se diseña, luego expertos validan el contenido, se realiza una prueba piloto para detectar errores de comprensión y finalmente se analiza esa prueba para ajustar el instrumento.
```

### 15 — Sesgo de respuesta (Deseabilidad social)

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["encuestas", "sesgo"]

variables:
  pregunta_tipo: uno_de([0, 1])
  casos: [["¿Alguna vez ha mentido para evitar un conflicto?", "deseabilidad_social"], ["¿Qué tan importante es para usted la honestidad en el trabajo?", "deseabilidad_social"]]

enunciado: "Cuando un encuestado responde de una manera que busca dar una buena imagen de sí mismo en lugar de decir la verdad, se produce un sesgo de: ___"

respuestas_validas:
  - "deseabilidad_social"

respuesta: "deseabilidad_social"
tipo: completar

explicacion: |
  La deseabilidad social es un error común en encuestas donde el sujeto intenta ajustarse a las normas sociales percibidas, distorsionando la veracidad de los datos recolectados.
```

### 16 — Observación vs. Encuesta

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["metodos", "observacion", "encuesta"]

enunciado: "A diferencia de la encuesta, donde el investigador interactúa con los sujetos para obtener respuestas declarativas, la observación se caracteriza por ser un método donde el investigador registra el comportamiento de los sujetos sin ___."

respuestas_validas:
  - "intervenir"
  - "interactuar"
  - "influir"
tipo: completar

explicacion: |
  La observación busca captar la realidad tal cual ocurre, evitando el sesgo de la reactividad que puede producirse cuando el sujeto sabe que está siendo evaluado o cuando el investigador interviene en el entorno.
```

### 17 — Datos Primarios vs. Secundarios

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["fuentes", "datos_primarios", "datos_secundarios"]

variables:
  escenario: uno_de([["un investigador realiza entrevistas para un nuevo estudio", "primarios"], ["un investigador analiza censos nacionales ya existentes", "secundarios"]])

enunciado: "Si un investigador utiliza el {escenario[0]} para su estudio, los datos obtenidos se clasifican como datos ___."

opciones_explicitas: ["primarios", "secundarios"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Los datos primarios son recolectados de primera mano por el investigador para un propósito específico, mientras que los secundarios son datos que ya existen y fueron recolectados por otros para otros fines.
```

### 18 — Validez vs. Confiabilidad

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["calidad_datos", "validez", "confiabilidad"]

enunciado: "En el contexto de la calidad de la recolección de datos, si un instrumento de medición arroja resultados consistentes y estables en aplicaciones repetidas, decimos que tiene alta confiabilidad. Sin embargo, que el instrumento sea consistente no garantiza que mida lo que pretende medir; esa propiedad se denomina ___."

respuestas_validas:
  - "validez"
tipo: completar

explicacion: |
  La confiabilidad se refiere a la consistencia de la medida (si se repite, ¿da lo mismo?), mientras que la validez se refiere a la exactitud (¿estoy midiendo realmente la variable que digo medir?).
```

### 19 — Sesgo de Selección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "errores"]

enunciado: "¿Es correcto afirmar que un error de muestreo ocurre cuando la muestra no es representativa de la población debido a una falla en el diseño de la recolección?"

respuesta: verdadero
tipo: vf
explicacion: |
  El sesgo de selección es un error sistemático que ocurre cuando algunos miembros de la población tienen una probabilidad menor o mayor de ser seleccionados, invalidando la representatividad de la muestra.
```

### 20 — Pasos para una recolección confiable

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
respuesta_orden: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
tipo: ordenar

enunciado: "Para asegurar la confiabilidad en la investigación, es fundamental seguir un orden lógico en el proceso de recolección. Ordene las siguientes etapas:"

explicacion: |
  No se pueden recolectar datos sin haber diseñado primero la herramienta (encuesta, guía de entrevista, etc.), y el análisis es una fase posterior a la obtención de la información.
```

### 21 — Método de recolección adecuado

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["metodologia", "tecnica"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["Se desea conocer la opinión de 500 ciudadanos sobre una nueva ley de tránsito.", "encuesta"], ["Se busca observar el comportamiento natural de primates en una selva sin intervenir.", "observacion"], ["Se requiere profundizar en las experiencias de vida de tres sobrevivientes de un naufragio.", "entrevista"]]

enunciado: "Para el escenario: {escenarios[escenario_idx][0]}, el método de recolección más adecuado es una ___."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "encuesta"
  - "observacion"
  - "entrevista"

explicacion: |
  La elección del método depende del objetivo: las encuestas son para grandes grupos y tendencias; la observación para conductas naturales; y la entrevista para profundidad cualitativa.
```

### 22 — Sesgo en la muestra

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un investigador quiere saber qué opinan los estudiantes de una universidad, pero solo pregunta a sus amigos de su misma carrera.", "verdadero"], ["Un investigador selecciona al azar 100 números de teléfono de un padrón oficial para una encuesta de salud.", "falso"]]

enunciado: "¿Es el proceso de recolección descrito en el caso '{casos[caso_idx][0]}' un proceso libre de sesgo de selección? (Responda con verdadero o falso)"

respuesta: casos[caso_idx][1]
tipo: completar
explicacion: |
  El sesgo de selección ocurre cuando la muestra no es representativa de la población objetivo. En el primer caso, la muestra está sesgada hacia un grupo específico.
```

### 23 — Instrumentos de recolección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["instrumentos", "tecnica"]

variables:
  instrumento_idx: uno_de([0, 1, 2])
  instrumentos: [["Cuestionario con preguntas cerradas", "cuantitativo"], ["Guion de entrevista semiestructurada", "cualitativo"], ["Ficha de registro de observación", "cualitativo"]]

enunciado: "El instrumento '{instrumentos[instrumento_idx][0]}' se clasifica principalmente como un método de recolección de tipo _________."

respuesta: instrumentos[instrumento_idx][1]
tipo: completar
respuestas_validas:
  - "cuantitativo"
  - "cualitativo"

explicacion: |
  Los métodos cuantitativos buscan medir variables y frecuencias, mientras que los cualitativos buscan comprender significados y contextos profundos.
```

### 24 — Secuencia de la recolección

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "pasos"]

enunciado: "Ordene cronológicamente los pasos para llevar a cabo una recolección de datos mediante una entrevista presencial:"

opciones_explicitas: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
respuesta_orden: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
tipo: ordenar

explicacion: |
  Antes de recolectar, se debe planificar el instrumento; luego se accede a la muestra, se ejecuta la técnica y finalmente se procesan los datos obtenidos.
```

### 25 — Validez y Confiabilidad

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["validez", "confiabilidad"]

enunciado: "Si un test de inteligencia arroja resultados muy distintos cada vez que se le aplica a la misma persona en condiciones iguales, decimos que el test carece de _________."

respuesta: "confiabilidad"
tipo: completar
respuestas_validas:
  - "validez"
  - "confiabilidad"

explicacion: |
  La confiabilidad se refiere a la estabilidad y consistencia de la medida, mientras que la validez se refiere a la exactitud de lo que se está midiendo.
```
