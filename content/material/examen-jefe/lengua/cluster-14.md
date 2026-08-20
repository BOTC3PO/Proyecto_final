# Examen jefe — Maestro de Sintaxis y Dramaturgia

> Logro #97. Dominaste las subordinadas sustantivas de sujeto, la estructura del sujeto y predicado, técnicas de estudio y el texto teatral. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **108 preguntas totales** en 5/5 secciones.

---

## Sección: subordinada-sustantiva-de-sujeto (23 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "subordinada_sustantiva", "identificacion"]

variables:
  # Generamos dos frases para elegir aleatoriamente
  frase_1: "Es necesario que estudies más"
  frase_2: "Me alegra que estés aquí"
  seleccion: uno_de([1, 2])

respuesta: "que estudies más"
tipo: completar

enunciado: "Analizá la siguiente oración: '{frase_1}' si seleccion == 1 else '{frase_2}'. ¿Cuál es la oración subordinada sustantiva de sujeto?"

explicacion: |
  La subordinada sustantiva de sujeto cumple la función de sujeto del verbo principal (ser/estar/gustar, etc.). En 'Es necesario que estudies más', el sujeto es 'que estudies más'. En 'Me alegra que estés aquí', el sujeto es 'que estés aquí'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "pronombre_neutro"]

variables:
  oracion: "Es cierto que Juan llegó tarde"
  subordinada: "que Juan llegó tarde"

respuesta: "eso"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué pronombre personal o demostrativo neutro podemos usar para reemplazar a la subordinada sustantiva de sujeto '{subordinada}'?"

explicacion: |
  La subordinada 'que Juan llegó tarde' funciona como sujeto. Podemos reemplazarla por el pronombre 'eso' o 'algo'. 'Eso es cierto' mantiene la estructura sintáctica básica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "conectores"]

variables:
  oracion: "Es importante que descanses"
  conector: "que"

respuesta: "que"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué palabra introduce la subordinada sustantiva de sujeto?"

explicacion: |
  La conjunción 'que' es el conector más habitual para introducir oraciones subordinadas sustantivas de sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "infinitivo"]

variables:
  oracion: "Es necesario estudiar para aprobar"
  sujeto: "estudiar para aprobar"

respuesta: "estudiar para aprobar"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es la oración subordinada sustantiva de sujeto (que puede estar formada por un infinitivo)?"

explicacion: |
  Cuando el sujeto es indeterminado, se usa el infinitivo. 'Estudiar para aprobar' es el sujeto de 'es necesario'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_pronominales"]

variables:
  oracion: "Me sorprende que no hayas llamado"
  sujeto: "que no hayas llamado"

respuesta: "que no hayas llamado"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es la subordinada sustantiva de sujeto?"

explicacion: |
  El verbo es 'sorprender' (en forma pronominal 'me sorprende'). La pregunta '¿Qué me sorprende?' da como respuesta 'que no hayas llamado', que es el sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "identificacion"]

variables:
  oracion: "Es evidente que ganaremos el partido"
  subordinada: "que ganaremos el partido"

respuesta: "que ganaremos el partido"
tipo: input

enunciado: "Identificá la subordinada sustantiva de sujeto en: '{oracion}'"

explicacion: |
  El verbo principal es 'es'. La pregunta '¿Qué es evidente?' responde 'que ganaremos el partido'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "sustitucion"]

variables:
  oracion: "Es bueno que ayudes"
  pronombre: "eso"

respuesta: "eso"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué pronombre puede reemplazar a la subordinada de sujeto para formar una oración impersonal o con sujeto nulo?"

explicacion: |
  'Eso es bueno' o 'Algo es bueno'. El pronombre 'eso' es el más común para referirse a una proposición completa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "avanzado"
  tags: ["sintaxis", "nucleo"]

variables:
  oracion: "Es un hecho que lo hizo"
  nucleo: "que lo hizo"

respuesta: "que lo hizo"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es el núcleo (la proposición completa) de la subordinada sustantiva de sujeto?"

explicacion: |
  El sujeto es la proposición completa 'que lo hizo'. No es una sola palabra.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbo_ser"]

variables:
  oracion: "Es una lástima que se vaya"
  subordinada: "que se vaya"

respuesta: "que se vaya"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es una lástima?'. Respuesta: 'que se vaya'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me gusta que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'gustar'. Pregunta '¿Qué gusta?'. Respuesta: 'que vengas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me importa que seas honesto"
  subordinada: "que seas honesto"

respuesta: "que seas honesto"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'importar'. Pregunta '¿Qué me importa?'. Respuesta: 'que seas honesto'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me parece que es tarde"
  subordinada: "que es tarde"

respuesta: "que es tarde"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'parecer'. Pregunta '¿Qué me parece?'. Respuesta: 'que es tarde'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Basta que lo digas"
  subordinada: "que lo digas"

respuesta: "que lo digas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'bastar'. Pregunta '¿Qué basta?'. Respuesta: 'que lo digas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me ocurre que te vi ayer"
  subordinada: "que te vi ayer"

respuesta: "que te vi ayer"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ocurrir' (en sentido de 'venir a la mente'). Pregunta '¿Qué me ocurre?'. Respuesta: 'que te vi ayer'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "avanzado"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Consta que lo hizo él"
  subordinada: "que lo hizo él"

respuesta: "que lo hizo él"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'constar' (en sentido de 'estar demostrado'). Pregunta '¿Qué consta?'. Respuesta: 'que lo hizo él'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Se trata de que ganemos"
  subordinada: "que ganemos"

respuesta: "que ganemos"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'tratar' (en sentido de 'versar sobre'). Pregunta '¿Qué se trata?'. Respuesta: 'que ganemos'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Depende de que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'depender'. Pregunta '¿De qué depende?'. Respuesta: 'de que vengas'. La proposición completa es el objeto de la preposición, pero en análisis profundo de sujeto oracional, a veces se discute. Sin embargo, en la estructura 'Depende de X', X es CD o CO. Pero si la oración es 'Depende que vengas' (menos común pero posible), sería sujeto. Asumiremos la estructura estándar 'Depende de que...' donde 'que vengas' es el objeto de la preposición. 
  Corrección: Para evitar ambigüedad, usaremos una oración donde el sujeto sea claro.
  Nueva oracion: "Es necesario que vengas" -> Ya usada.
  Usaremos: "Es probable que vengas".
  Respuesta: "que vengas".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es probable que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es probable?'. Respuesta: 'que vengas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es posible que llueva"
  subordinada: "que llueva"

respuesta: "que llueva"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es posible?'. Respuesta: 'que llueva'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es necesario que descanses"
  subordinada: "que descanses"

respuesta: "que descanses"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es necesario?'. Respuesta: 'que descanses'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es útil que leas"
  subordinada: "que leas"

respuesta: "que leas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es útil?'. Respuesta: 'que leas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es justo que te premien"
  subordinada: "que te premien"

respuesta: "que te premien"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es justo?'. Respuesta: 'que te premien'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es verdad que lo viste"
  subordinada: "que lo viste"

respuesta: "que lo viste"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es verdad?'. Respuesta: 'que lo viste'.
```

## Sección: sujeto-y-predicado (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["oracion_bimembre", "vocabulario"]

enunciado: "¿En qué dos partes se divide una oración bimembre?"
tipo: mc
opciones_explicitas:
  - "Sujeto (de quién se habla) y predicado (qué se dice de él)"
  - "Sustantivo y verbo, únicamente"
  - "Principio y final, sin ninguna otra distinción"
respuesta: "Sujeto (de quién se habla) y predicado (qué se dice de él)"

explicacion: |
  Son dos mitades complementarias — no se puede tener una sin la
  otra.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["sujeto", "vocabulario"]

enunciado: "¿Qué es el sujeto de una oración?"
tipo: mc
opciones_explicitas:
  - "Un sintagma nominal, cuyo núcleo es un sustantivo o pronombre, que determina la concordancia del verbo"
  - "El verbo principal de la oración"
  - "Cualquier palabra que aparezca al final de la oración"
respuesta: "Un sintagma nominal, cuyo núcleo es un sustantivo o pronombre, que determina la concordancia del verbo"

explicacion: |
  El núcleo del sujeto es, justamente, lo que decide si el verbo va
  en singular o plural.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["predicado", "vocabulario"]

enunciado: "¿Qué es el predicado de una oración?"
tipo: mc
opciones_explicitas:
  - "La parte que contiene el verbo (su núcleo) y todo lo que lo acompaña"
  - "La parte que nombra de quién se habla"
  - "Otro nombre para el sujeto tácito"
respuesta: "La parte que contiene el verbo (su núcleo) y todo lo que lo acompaña"

explicacion: |
  El núcleo del predicado es siempre el verbo conjugado.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

enunciado: "En la oración 'Los estudiantes de la clase aprobaron el examen', ¿cuál es el núcleo del sujeto?"
tipo: mc
opciones_explicitas:
  - "estudiantes"
  - "los"
  - "clase"
  - "aprobaron"
respuesta: "estudiantes"

explicacion: |
  Es el sustantivo principal del sintagma nominal sujeto — el que
  determina la concordancia verbal ('aprobaron', no 'aprobó').
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "Marcá el sujeto y el predicado de esta oración."
tipo: analisis_spans
texto_analizar: "El perro grande corre por el parque"
spans_pedidos:
  - { desde: 0, hasta: 2, etiqueta: "sujeto" }
  - { desde: 3, hasta: 6, etiqueta: "predicado" }

explicacion: |
  'El perro grande' es el sujeto (de quién se habla); 'corre por el
  parque' es el predicado (qué se dice de él).
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "Marcá el sujeto y el predicado de esta oración."
tipo: analisis_spans
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
spans_pedidos:
  - { desde: 0, hasta: 4, etiqueta: "sujeto" }
  - { desde: 5, hasta: 7, etiqueta: "predicado" }

explicacion: |
  'Los estudiantes de la clase' (incluye el complemento del nombre)
  es el sujeto completo; 'aprobaron el examen' es el predicado.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["sujeto_tacito", "problema"]

tipo: completar
enunciado: "En la oración 'Comieron toda la pizza', el sujeto es ___ porque no aparece expresado en la oración."
respuestas_validas:
  - "tácito"
  - "tacito"
  - "elíptico"
  - "eliptico"
  - "omitido"

explicacion: |
  Se deduce por la desinencia verbal: '-ieron' indica tercera persona
  del plural (ellos/ellas).
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["impersonal", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'Llueve mucho en otoño'?"
tipo: mc
opciones_explicitas:
  - "No tiene sujeto: es una oración impersonal (verbo meteorológico)"
  - "Sujeto tácito: 'el cielo', deducido por el contexto"
  - "Sujeto explícito: 'otoño'"
respuesta: "No tiene sujeto: es una oración impersonal (verbo meteorológico)"

explicacion: |
  Los verbos meteorológicos ('llover', 'nevar', 'amanecer') no tienen
  ningún sujeto gramatical, ni explícito ni tácito.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["sujeto_explicito", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'María lee novelas'?"
tipo: mc
opciones_explicitas:
  - "Sujeto explícito (nombre propio): 'María'"
  - "Sujeto tácito, deducido por la desinencia"
  - "No tiene sujeto: es una oración impersonal"
respuesta: "Sujeto explícito (nombre propio): 'María'"

explicacion: |
  El sujeto aparece escrito directamente en la oración.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["sujeto_tacito", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'Somos estudiantes'?"
tipo: mc
opciones_explicitas:
  - "Sujeto tácito (nosotros, deducido por la desinencia '-mos')"
  - "Sujeto explícito: 'estudiantes'"
  - "No tiene sujeto: es una oración impersonal"
respuesta: "Sujeto tácito (nosotros, deducido por la desinencia '-mos')"

explicacion: |
  'Estudiantes' es parte del predicado (atributo), no el sujeto —
  'nosotros' es el sujeto, tácito.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["pasiva_refleja", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'Se venden casas'?"
tipo: mc
opciones_explicitas:
  - "Sujeto paciente (pasiva refleja): 'casas'"
  - "Sujeto tácito: 'alguien'"
  - "No tiene sujeto: es una oración impersonal"
respuesta: "Sujeto paciente (pasiva refleja): 'casas'"

explicacion: |
  Es el mismo caso visto en `../concordancia-nominal-y-verbal/`: el
  verbo concuerda con 'casas' porque es su sujeto gramatical.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["sujeto_tacito"]

respuesta: verdadero
tipo: vf

enunciado: "El sujeto tácito no aparece escrito en la oración, pero se puede deducir por la desinencia (terminación) del verbo conjugado."

explicacion: |
  Por ejemplo, '-amos' siempre indica primera persona del plural
  (nosotros).
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["impersonal"]

respuesta: verdadero
tipo: vf

enunciado: "Los verbos meteorológicos ('llover', 'nevar', 'amanecer') forman oraciones impersonales, sin ningún sujeto gramatical, ni explícito ni tácito."

explicacion: |
  No hay ningún 'algo' o 'alguien' que realice la acción de llover o
  nevar.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["nucleo", "problema"]

enunciado: "En la oración 'El perro grande corre por el parque', ¿cuál es el núcleo del predicado?"
tipo: mc
opciones_explicitas:
  - "corre"
  - "perro"
  - "parque"
respuesta: "corre"

explicacion: |
  El núcleo del predicado siempre es el verbo conjugado de la
  oración.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué es necesario identificar bien el sujeto de una oración antes de conjugar el verbo?"
tipo: mc
opciones_explicitas:
  - "Porque el núcleo del sujeto es lo que determina la persona y el número correctos del verbo (concordancia verbal)"
  - "Porque el sujeto siempre determina el tiempo verbal (pasado, presente o futuro)"
  - "No hay ninguna relación real entre sujeto y verbo"
respuesta: "Porque el núcleo del sujeto es lo que determina la persona y el número correctos del verbo (concordancia verbal)"

explicacion: |
  Es la conexión directa con `../concordancia-nominal-y-verbal/`.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

enunciado: "Etiquetá el núcleo del sujeto y el núcleo del predicado de esta oración."
tipo: analisis_sintactico
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
etiquetas_pedidas:
  - { palabra: "estudiantes", etiqueta: "núcleo del sujeto" }
  - { palabra: "aprobaron", etiqueta: "núcleo del predicado" }

explicacion: |
  'Estudiantes' concentra el significado del sujeto; 'aprobaron' es
  el verbo, núcleo del predicado.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

enunciado: "En 'Los estudiantes de la clase aprobaron el examen', ¿qué función cumple 'de la clase'?"
tipo: mc
opciones_explicitas:
  - "Es un complemento del nombre 'estudiantes' — precisa de qué estudiantes se habla, pero no es el núcleo del sujeto"
  - "Es el núcleo del sujeto"
  - "Es parte del predicado"
respuesta: "Es un complemento del nombre 'estudiantes' — precisa de qué estudiantes se habla, pero no es el núcleo del sujeto"

explicacion: |
  Acompaña al núcleo sin reemplazarlo — el núcleo sigue siendo
  'estudiantes'.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["oracion_bimembre"]

respuesta: verdadero
tipo: vf

enunciado: "Por definición, toda oración BIMEMBRE tiene sujeto y predicado — las oraciones impersonales (sin sujeto) se llaman, en cambio, unimembres."

explicacion: |
  'Llueve' es una oración unimembre: no tiene la división en dos
  mitades complementarias.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué distinguir sujeto y predicado es la base de un análisis sintáctico más completo (núcleos, modificadores, objetos)?"
tipo: mc
opciones_explicitas:
  - "Porque es la primera división de cualquier oración bimembre — sin saber qué parte es sujeto y cuál predicado, no se puede seguir analizando núcleos ni complementos dentro de cada una"
  - "No tiene ninguna relación con análisis sintácticos más complejos"
  - "Sólo se usa para contar palabras de una oración"
respuesta: "Porque es la primera división de cualquier oración bimembre — sin saber qué parte es sujeto y cuál predicado, no se puede seguir analizando núcleos ni complementos dentro de cada una"

explicacion: |
  Es el punto de partida de cualquier análisis sintáctico más
  detallado.
```

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve identificar el sujeto y el predicado de una oración?"
tipo: mc
opciones_explicitas:
  - "Para aplicar correctamente la concordancia verbal y para poder analizar la estructura completa de cualquier oración"
  - "Sólo sirve para completar ejercicios de gramática, sin ninguna utilidad al hablar o escribir"
  - "Sólo se aplica a oraciones muy largas y complejas"
respuesta: "Para aplicar correctamente la concordancia verbal y para poder analizar la estructura completa de cualquier oración"

explicacion: |
  Cierra la cadena de `../clases-de-palabras/` →
  `../concordancia-nominal-y-verbal/` → sujeto y predicado: de
  reconocer palabras sueltas a poder analizar una oración completa.
```

## Sección: tecnicas-de-estudio-resumen-y-organizadores-graficos (23 preguntas)

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "errores_comunes"]

respuesta: falso
tipo: vf

enunciado: "Un buen resumen se logra copiando y pegando las frases más importantes del libro original."

explicacion: |
  Falso. Un resumen efectivo requiere interpretar y parafrasear. Copiar y pegar no demuestra comprensión ni procesamiento cognitivo de la información.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "concision"]

variables:
  palabras_originales: random(200, 500)
  porcentaje_reduccion: uno_de([0.3, 0.4, 0.5])
  palabras_nuevas: redondear(palabras_originales * (1 - porcentaje_reduccion), 0)

respuesta: palabras_nuevas
tipo: input

enunciado: "Si un texto tiene {palabras_originales} palabras y quieres reducirlo en un {redondear(porcentaje_reduccion * 100, 0)}% manteniendo el sentido, ¿cuántas palabras aproximadamente debería tener el resumen?"

explicacion: |
  La claridad y la concisión son aliadas. Si reduces el texto en un X%, el nuevo tamaño es el original menos esa fracción. Esto ayuda a eliminar lo redundante.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "fidelidad"]

respuesta: verdadero
tipo: vf

enunciado: "Es crucial mantener la fidelidad al significado original del texto, sin añadir opiniones personales ni alterar el sentido."

explicacion: |
  La fidelidad es crucial. Un resumen debe reflejar el contenido del autor, no la interpretación subjetiva ni opiniones ajenas al texto original.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "palabras_clave"]

variables:
  total_palabras: random(100, 300)
  porcentaje_clave: 0.05
  num_claves: redondear(total_palabras * porcentaje_clave, 0)

respuesta: num_claves
tipo: input

enunciado: "Si un texto tiene {total_palabras} palabras y decides subrayar solo el {redondear(porcentaje_clave * 100, 0)}% como palabras clave, ¿cuántas palabras clave seleccionarías?"

explicacion: |
  Subrayar solo las palabras clave ayuda a filtrar lo esencial. Calcular un porcentaje pequeño del total facilita la identificación de lo central.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "avanzado"
  tags: ["beneficios", "autonomia"]

respuesta: verdadero
tipo: vf

enunciado: "Dominar el resumen y los organizadores gráficos te da autonomía para estudiar cualquier contenido, no solo literatura."

explicacion: |
  Estas son estrategias cognitivas universales. Dominarlas permite procesar información densa y abstracta en cualquier área, desde gramática hasta lingüística.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["planificacion", "tiempo"]

variables:
  horas_lectura: random(2, 5)
  factor_procesamiento: 0.5
  horas_resumen: redondear(horas_lectura * factor_procesamiento, 1)

respuesta: horas_resumen
tipo: input

enunciado: "Si dedicas {horas_lectura} horas a leer y procesar un texto, y estimas que el resumen y la organización visual toman la mitad de ese tiempo, ¿cuántas horas invertirás en la técnica?"

explicacion: |
  Las técnicas de estudio requieren tiempo activo. Procesar, filtrar y organizar es una inversión que reduce el tiempo de memorización posterior.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "literatura"]

respuesta: verdadero
tipo: vf

enunciado: "Un buen resumen de un cuento debe captar la trama y el tema, pero no necesita describir cada personaje con detalle."

explicacion: |
  La fidelidad al significado original es crucial, pero la concisión permite omitir detalles secundarios como descripciones extensas de personajes menores.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "estructura"]

variables:
  parrafos: random(3, 6)
  ideas_por_parrafo: 1
  total_ideas: parrafos * ideas_por_parrafo

respuesta: total_ideas
tipo: input

enunciado: "Si un texto tiene {parrafos} párrafos y extraes una idea principal de cada uno, ¿cuántas ideas principales tendrás en total para tu resumen?"

explicacion: |
  Identificar la idea principal de cada sección es clave. Esto crea una estructura base para el resumen y el organizador gráfico.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "avanzado"
  tags: ["teoria", "cognicion"]

respuesta: verdadero
tipo: vf

enunciado: "El resumen y los organizadores gráficos son estrategias cognitivas que obligan a procesar la información, no simples atajos."

explicacion: |
  Estas herramientas fuerzan al estudiante a filtrar lo esencial y darle orden lógico, evitando perderse en detalles irrelevantes.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "compresion"]

variables:
  original: random(1000, 2000)
  ratio: 0.1
  comprimido: redondear(original * ratio, 0)

respuesta: comprimido
tipo: input

enunciado: "Si un ensayo tiene {original} palabras y lo comprimes a una décima parte (10%) de su tamaño, ¿cuántas palabras tendrá el resumen?"

explicacion: |
  La concisión es vital. Reducir significativamente el volumen de texto obliga a seleccionar solo lo esencial, mejorando la retención.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["organizadores_graficos", "visualizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los organizadores gráficos permiten visualizar las relaciones entre conceptos que en un texto lineal pueden ser difíciles de seguir."

explicacion: |
  Al mostrar jerarquías y conexiones, estos organizadores hacen explícitas las relaciones lógicas entre ideas, géneros o reglas gramaticales.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["estudio", "repeticion"]

variables:
  sesiones: random(3, 5)
  dias_entre: 2
  dias_totales: (sesiones - 1) * dias_entre

respuesta: dias_totales
tipo: input

enunciado: "Si estudias el resumen en {sesiones} sesiones separadas por {dias_entre} días, ¿cuántos días transcurren entre la primera y la última sesión?"

explicacion: |
  La repetición espaciada ayuda a consolidar la memoria. Organizar el estudio en sesiones separadas mejora la retención a largo plazo.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "calidad"]

respuesta: verdadero
tipo: vf

enunciado: "La claridad y la concisión son las mejores aliadas al hacer un resumen; si puedes decir lo mismo con menos palabras, vas bien."

explicacion: |
  La claridad facilita la comprensión y la concisión ahorra tiempo de estudio. Ambos son indicadores de un resumen efectivo.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "metacognicion"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Un buen resumen consiste en copiar y pegar las frases más importantes del libro original para asegurar la fidelidad textual."

explicacion: |
  Falso. Un resumen efectivo requiere interpretar y usar tu propio vocabulario. Copiar y pegar no demuestra comprensión ni procesamiento cognitivo.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["estudio", "estrategias"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Estudiar lengua se trata principalmente de memorizar fechas y definiciones de memoria, sin necesidad de comprender estructuras."

explicacion: |
  Falso. La lengua requiere comprender estructuras, analizar textos y conectar ideas. La memorización mecánica es insuficiente.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["beneficios", "aprendizaje"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Dominar el resumen y los organizadores gráficos te da autonomía para estudiar cualquier contenido, incluso para exámenes de Comprensión Lectora."

explicacion: |
  Verdadero. Estas son estrategias cognitivas transferibles que permiten abordar cualquier texto con eficacia.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["mitos", "estudio"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Los organizadores gráficos son 'atajos' para evitar leer el texto completo."

explicacion: |
  Falso. Son estrategias cognitivas que obligan a procesar la información. No sustituyen la lectura, la complementan y profundizan.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "objetividad"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Es aceptable añadir opiniones personales al resumen si estas enriquecen la interpretación del texto."

explicacion: |
  Falso. El resumen debe mantener la fidelidad al significado original. Las opiniones personales pertenecen a un ensayo o crítica, no al resumen.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["contexto", "importancia"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En lengua, la información suele ser densa y abstracta, por lo que las técnicas de estudio son fundamentales."

explicacion: |
  Verdadero. Gramática, literatura y lingüística requieren estrategias para filtrar lo esencial y dar orden lógico.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "miedo_comun"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Hacer un resumen implica perder los detalles importantes de la trama o el argumento."

explicacion: |
  Falso. Un buen resumen elimina lo redundante y secundario, pero conserva la estructura y el sentido esencial.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["organizadores_graficos", "estructura"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Los organizadores gráficos dan un orden lógico a la información, ayudando a ver cómo se relacionan los conceptos."

explicacion: |
  Verdadero. La visualización jerárquica o relacional ayuda a comprender la estructura subyacente del conocimiento.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "procesamiento"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Es recomendable usar tu propio vocabulario al redactar el resumen para demostrar comprensión."

explicacion: |
  Verdadero. Usar palabras propias obliga al cerebro a procesar y reformular la información, consolidando el aprendizaje.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["estudio", "enfoque"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Estudiar lengua se trata solo de memorizar definiciones, no de comprender estructuras."

explicacion: |
  Falso. La comprensión de estructuras y el análisis son clave. La memorización es solo una parte pequeña y menos efectiva por sí sola.
```

## Sección: tesis (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tesis es la postura u opinión central que un texto argumentativo defiende, la idea que el autor quiere que el lector termine aceptando."

pasos:
  - "Es el mensaje central del texto argumentativo, pero tomando una postura, no describiendo un hecho neutral."

explicacion: |
  Verdadero: la tesis es el eje central del texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "debatibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una tesis debe ser debatible: alguien razonable podría sostener lo contrario."

pasos:
  - "\"El agua es H₂O\" no es tesis (hecho); \"debería prohibirse tal cosa\" sí lo es (alguien puede discrepar)."

explicacion: |
  Verdadero: la debatibilidad es el requisito central para que una
  afirmación sea considerada tesis.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "hechos", "diferenciacion"]

variables:
  afirmaciones: ["El agua hierve a 100°C al nivel del mar", "Debería prohibirse el uso de celulares en el aula"]
  tipos: ["hecho", "tesis"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["hecho", "tesis"]

enunciado: "\"{afirmaciones[idx]}\" es un..."

pasos:
  - "Si nadie razonable podría discutirlo, es un hecho. Si alguien podría sostener lo contrario, es una tesis."

explicacion: |
  La debatibilidad es el criterio central para distinguir un hecho
  objetivo de una tesis.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "formulacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Una tesis suele formularse como pregunta (\"¿Deberían prohibirse los celulares en el aula?\"), no como afirmación."

pasos:
  - "La tesis toma postura de forma afirmativa; la pregunta sólo plantea el tema a discutir, no defiende una postura."

explicacion: |
  Falso: la tesis se formula como afirmación (\"deberían
  prohibirse...\"), la pregunta es previa a la tesis, no la tesis en
  sí.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "ubicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tesis suele ubicarse al principio o al final del texto, igual que la idea principal en cualquier otro texto."

pasos:
  - "Ver `../comprension-idea-principal/`: la tesis es, en el texto argumentativo, el equivalente a la idea principal."

explicacion: |
  Verdadero: la ubicación típica de la tesis sigue el mismo patrón
  que la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "explicita"]

variables:
  n: uno_de([1, 1])

respuesta: "explícita"
tipo: mc
opciones_explicitas: ["explícita", "implícita"]

enunciado: "Cuando la tesis está escrita literalmente en una oración del texto, se dice que es..."

pasos:
  - "Se puede citar la oración exacta que la formula."

explicacion: |
  Una tesis explícita se puede identificar citando directamente la
  oración del texto.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "implicita"]

variables:
  n: uno_de([1, 1])

respuesta: "implícita"
tipo: mc
opciones_explicitas: ["explícita", "implícita"]

enunciado: "Cuando la tesis no está escrita literalmente y hay que deducirla del conjunto de argumentos del texto, se dice que es..."

pasos:
  - "Igual que la idea principal implícita, hay que inferirla combinando toda la información dada."

explicacion: |
  Una tesis implícita requiere inferencia, no está formulada de forma
  directa en ninguna oración puntual.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El tema (\"el uso de celulares en el aula\") es exactamente lo mismo que la tesis (\"debería prohibirse el uso de celulares en el aula\")."

pasos:
  - "El tema es de qué trata el texto; la tesis es la postura que se toma sobre ese tema."

explicacion: |
  Falso: el tema es más corto y general; la tesis agrega la postura
  específica del autor sobre ese tema.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos autores pueden escribir sobre el mismo tema (\"el uso de celulares en el aula\") y sostener tesis completamente opuestas."

pasos:
  - "Uno puede defender que se prohíban y otro que se permitan; el tema es el mismo, la tesis es distinta."

explicacion: |
  Verdadero: la tesis es la postura particular de cada autor, no una
  propiedad fija del tema.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Los parques públicos son fundamentales para la salud mental de una ciudad"
tipo: mc
opciones_explicitas: ["Los parques públicos son fundamentales para la salud mental de una ciudad", "Muchas ciudades tienen parques públicos", "Los parques públicos tienen árboles y bancos"]

enunciado: "\"Los parques públicos son fundamentales para la salud mental de una ciudad. Reducen el estrés, fomentan el ejercicio y generan espacios de encuentro social.\" ¿Cuál es la tesis?"

pasos:
  - "La primera oración toma postura (\"fundamentales\"); las siguientes son argumentos que la sostienen, no la tesis en sí."

explicacion: |
  La tesis es la postura tomada; el resto son razones (argumentos)
  que la apoyan, no la tesis misma.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La tesis, igual que un párrafo expositivo, describe un hecho de forma neutral y objetiva, sin tomar postura."

pasos:
  - "La tesis defiende una posición específica sobre algo debatible, a diferencia de la descripción neutral de un texto expositivo (ver `../tipos-textuales/`)."

explicacion: |
  Falso: tomar postura sobre algo debatible es justamente lo que
  distingue a la tesis de una afirmación neutral.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "hechos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"La Tierra gira alrededor del Sol\" es un buen ejemplo de tesis para un texto argumentativo."

pasos:
  - "Nadie razonable discutiría ese hecho científico establecido: no cumple el requisito de ser debatible."

explicacion: |
  Falso: al no ser debatible, es un hecho, no una tesis apropiada
  para un texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando la tesis se anuncia al principio de un texto argumentativo formal, el lector sabe desde el inicio qué postura se va a defender a lo largo del texto."

pasos:
  - "Esa anticipación ayuda a leer los argumentos que siguen sabiendo qué están sosteniendo."

explicacion: |
  Verdadero: anunciar la tesis temprano orienta la lectura del resto
  del texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "practica"]

variables:
  temas: ["el reciclaje obligatorio", "la tarea escolar los fines de semana"]
  tesis_posibles: ["El reciclaje debería ser obligatorio en todos los hogares", "La tarea escolar los fines de semana debería eliminarse"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sobre el tema \"{temas[idx]}\", una posible tesis (que alguien podría discutir) sería: \"{tesis_posibles[idx]}\"."

pasos:
  - "Una tesis válida sobre ese tema toma postura de forma afirmativa y debatible."

explicacion: |
  Verdadero: esa formulación cumple los dos requisitos de una tesis
  (afirmación + debatible).
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "coherencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo bien construido mantiene la misma tesis a lo largo de todo el desarrollo, sin cambiar de postura a mitad de camino."

pasos:
  - "Cambiar de postura sin aviso confundiría al lector sobre qué se está defendiendo."

explicacion: |
  Verdadero: la coherencia con la tesis planteada es un requisito
  básico del texto argumentativo bien construido.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "argumentos", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La tesis y los argumentos que la sostienen son exactamente lo mismo: cualquier oración del texto argumentativo puede llamarse indistintamente tesis o argumento."

pasos:
  - "La tesis es la postura central única; los argumentos (ver `../argumentos/`) son las razones que la sostienen, y suele haber varios."

explicacion: |
  Falso: son dos elementos distintos y complementarios del texto
  argumentativo, no sinónimos.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "implicita", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Los animales no deberían usarse en experimentos científicos"
tipo: mc
opciones_explicitas: ["Los animales no deberían usarse en experimentos científicos", "Algunos animales sienten dolor", "Los experimentos científicos avanzan la medicina"]

enunciado: "\"Los animales sienten dolor y estrés durante los experimentos. Existen alternativas tecnológicas para probar medicamentos sin usar animales.\" (sin decirlo literal) ¿Cuál es la tesis implícita?"

pasos:
  - "Ambas razones apuntan hacia la misma conclusión no formulada explícitamente: hay que inferirla combinándolas."

explicacion: |
  Aunque el texto no lo diga literalmente, las razones dadas llevan a
  una postura clara que hay que inferir.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "metodo"]

enunciado: "Ordená los pasos para identificar la tesis de un texto argumentativo."
tipo: ordenar
opciones_explicitas:
  - "Leer el texto completo"
  - "Identificar el tema general del que trata"
  - "Buscar la postura u opinión que el autor defiende sobre ese tema"
  - "Confirmar que esa postura es debatible (alguien podría sostener lo contrario)"
respuesta_orden:
  - "Leer el texto completo"
  - "Identificar el tema general del que trata"
  - "Buscar la postura u opinión que el autor defiende sobre ese tema"
  - "Confirmar que esa postura es debatible (alguien podría sostener lo contrario)"

explicacion: |
  El método va del tema general a la postura específica, y termina
  verificando el requisito de debatibilidad.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "argumentos", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No se pueden evaluar si los argumentos de un texto realmente sostienen su postura sin haber identificado antes cuál es esa tesis."

pasos:
  - "Ver `../argumentos/`: los argumentos se evalúan siempre EN RELACIÓN a la tesis que deben sostener."

explicacion: |
  Verdadero: por eso tesis es prerrequisito directo de argumentos, el
  siguiente tema de la cadena.
```

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escribir un texto argumentativo propio, conviene elegir una tesis debatible y formulada como afirmación clara, en vez de una pregunta abierta o un hecho indiscutible."

pasos:
  - "Sólo una tesis debatible y afirmativa permite construir argumentos que la defiendan de forma efectiva."

explicacion: |
  Verdadero: elegir bien la tesis es el primer paso práctico para
  escribir un texto argumentativo sólido.
```

## Sección: texto-teatral (22 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["definicion", "genero"]

respuesta: "guion dramático"
tipo: completar

enunciado: "El texto teatral, diseñado para ser representado, también se conoce como ______ o obra de teatro."

explicacion: |
  El texto teatral es un género literario pensado para la representación escénica. Sus nombres alternativos incluyen "obra de teatro" y "guion dramático".
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["estructura", "partes"]

respuesta: |
  parlamentos
  acotaciones
tipo: completar

enunciado: "Las dos partes fundamentales del texto teatral son los ______ y las ______."

explicacion: |
  El texto se compone de parlamentos (diálogos/monólogos) y acotaciones (instrucciones de puesta en escena).
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["parlamentos", "funcion"]

respuesta: "carácter"
tipo: input

enunciado: "A través de los parlamentos se revela el ______ de cada personaje, se avanza la trama y se expresan los conflictos."

explicacion: |
  Los parlamentos son el alma de la obra y permiten definir la personalidad y el carácter de los interlocutores mediante su lenguaje.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["estructura", "lectura"]

respuesta: "nombre"
tipo: input

enunciado: "En el texto impreso, los parlamentos suelen ir precedidos del ______ del personaje que habla."

explicacion: |
  El nombre del personaje antecede al parlamento para facilitar la identificación de quién es el interlocutor en la obra.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["parlamentos", "lenguaje"]

respuesta: "origen social"
tipo: input

enunciado: "La variación del lenguaje en los parlamentos ayuda a definir el ______ y la personalidad del personaje."

explicacion: |
  El uso de modismos, jerga o lenguaje culto refleja el origen social y la identidad del personaje dentro de la obra.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "avanzado"
  tags: ["lectura", "imaginacion"]

respuesta: |
  ver
  imaginar
tipo: completar

enunciado: "Leer una obra requiere la capacidad de ______ la obra en la mente del lector mientras se siguen las indicaciones."

explicacion: |
  El lector debe "ver" o "imaginar" la obra mentalmente, ya que no hay un narrador que describa todo explícitamente.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["acotaciones", "detalles"]

respuesta: "escenario"
tipo: input

enunciado: "Las acotaciones pueden describir el ______ (lugar y época), el vestuario y los gestos de los personajes."

explicacion: |
  Las acotaciones proporcionan contexto espacial y temporal, así como indicaciones físicas y visuales para la representación.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "avanzado"
  tags: ["comprension", "inferencia"]

respuesta: "dialogo"
tipo: input

enunciado: "En el texto teatral, inferimos las emociones a partir del ______ directo y de las indicaciones de cómo decirlo."

explicacion: |
  Al no haber narrador, las emociones se deducen del contenido del diálogo y de las acotaciones sobre el tono o gesto.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["estructura", "identificacion"]

respuesta: |
  nombre
  personaje
tipo: completar

enunciado: "El ______ del personaje que habla precede al parlamento para identificar al interlocutor."

explicacion: |
  El nombre o la etiqueta del personaje es la clave para saber quién está hablando en cada momento de la obra.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["acotaciones", "guia"]

respuesta: "representacion"
tipo: input

enunciado: "Las acotaciones guían la ______ de la obra, indicando gestos, tonos y escenario."

explicacion: |
  Su función principal es orientar la puesta en escena para que la interpretación sea fiel a la intención del autor.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["parlamentos", "registro"]

respuesta: "coloquial"
tipo: input

enunciado: "Mientras uno puede usar lenguaje culto, otro puede utilizar modismos o un registro ______ para definir su personalidad."

explicacion: |
  La variedad lingüística entre personajes es una herramienta clave para diferenciar sus orígenes sociales y temperamentos.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["tema", "conflicto"]

respuesta: "conflicto"
tipo: input

enunciado: "Estudiar el teatro nos ayuda a comprender la estructura del ______ humano y la dinámica entre personajes."

explicacion: |
  El teatro es un espejo de la condición humana, centrado en la resolución o desarrollo de conflictos interpersonales.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "avanzado"
  tags: ["acotaciones", "equipo"]

respuesta: |
  director
  tecnico
tipo: completar

enunciado: "Las acotaciones son instrucciones para los actores, el ______ y el equipo ______."

explicacion: |
  Además de los actores, las acotaciones son vitales para el director y el equipo técnico (luces, sonido, etc.).
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["metfora", "estructura"]

respuesta: "esqueleto"
tipo: input

enunciado: "El texto teatral es la base, el ______ sobre el cual se construye la puesta en escena."

explicacion: |
  El texto proporciona la estructura fundamental (el esqueleto) que luego se viste con elementos escénicos.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["comprension", "lectura"]

respuesta: "intenciones"
tipo: input

enunciado: "Debemos inferir las emociones y las ______ a partir de lo que se dice y de cómo se indica."

explicacion: |
  La lectura activa del texto teatral exige captar las intenciones ocultas o explícitas de los personajes.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["definicion", "sinonimos"]

respuesta: "obra"
tipo: input

enunciado: "El texto teatral también se conoce como ______ de teatro."

explicacion: |
  "Obra de teatro" es el término más comúnmente usado para referirse al género literario dramático.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["acotaciones", "vestuario"]

respuesta: "vestuario"
tipo: input

enunciado: "Las acotaciones pueden describir el escenario, el ______ de los personajes y sus gestos."

explicacion: |
  El vestuario es un elemento visual clave que se especifica mediante acotaciones para definir la apariencia de los personajes.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "avanzado"
  tags: ["tema", "impacto"]

respuesta: "transformar"
tipo: input

enunciado: "El texto teatral muestra el poder de la palabra para ______ realidades."

explicacion: |
  El lenguaje dramático tiene la capacidad de cambiar percepciones, emociones y situaciones dentro de la trama y el público.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["acotaciones", "entonacion"]

respuesta: "tonos"
tipo: input

enunciado: "Las acotaciones pueden indicar los ______ de voz de los personajes."

explicacion: |
  El tono de voz es una instrucción acotada que guía la interpretación emocional y verbal del actor.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "basico"
  tags: ["estructura", "basico"]

respuesta: "esqueleto"
tipo: input

enunciado: "El texto es el ______ sobre el cual se construye la puesta en escena."

explicacion: |
  Se utiliza la metáfora del esqueleto para describir la función estructural del texto dramático.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "intermedio"
  tags: ["parlamentos", "trama"]

respuesta: "trama"
tipo: input

enunciado: "A través de los parlamentos se revela el carácter y se avanza la ______."

explicacion: |
  El diálogo es el motor que impulsa la acción y desarrolla la trama de la obra.
```

```
metadata:
  materia: "Lengua"
  tema: "texto_teatral"
  nivel: "avanzado"
  tags: ["contexto", "representacion"]

respuesta: "contexto"
tipo: input

enunciado: "Las palabras adquieren matices al decirse en un ______ específico frente al público."

explicacion: |
  El contexto escénico (lugar, época, relación entre actores) da significado a las palabras más allá del texto escrito.
```
