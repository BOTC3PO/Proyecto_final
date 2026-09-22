# Examen jefe — [PENDIENTE #659]

> Logro #659. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **102 preguntas totales** en 5/5 secciones.

---

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

## Sección: conjugacion-verbal-subjuntivo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["subjuntivo", "vocabulario"]

enunciado: "¿Qué expresa el modo subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Duda, deseo, emoción, ruego o valoración subjetiva"
  - "Hechos que el hablante considera reales y ciertos"
  - "Órdenes directas exclusivamente"
respuesta: "Duda, deseo, emoción, ruego o valoración subjetiva"

explicacion: |
  Se opone al indicativo, que expresa hechos considerados reales.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

enunciado: "¿En cuál de estas oraciones se usa correctamente el subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Espero que vengas pronto."
  - "Espero que vienes pronto."
  - "Es obvio que vengas."
respuesta: "Espero que vengas pronto."

explicacion: |
  Tras verbos de deseo (esperar, querer, desear) + 'que', el verbo de
  la subordinada va en subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "Con expresiones de certeza ('sé que', 'es obvio que', 'es cierto que'), corresponde usar el modo indicativo, no el subjuntivo."

explicacion: |
  'Sé que hablas español' (indicativo, correcto) vs. 'Sé que hables
  español' (subjuntivo, incorrecto acá).
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["presente_subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Espero que tú ___ (hablar) con ella.'"
respuestas_validas:
  - "hables"

explicacion: |
  Presente de subjuntivo de 'hablar', segunda persona del singular.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperfecto_subjuntivo"]

respuesta: verdadero
tipo: vf

enunciado: "El pretérito imperfecto de subjuntivo tiene dos formas válidas: una en '-ra' y otra en '-se' (ej.: hablara / hablase), ambas igualmente normativas."

explicacion: |
  Son intercambiables en la mayoría de los contextos, reconocidas
  ambas por la RAE.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperfecto_subjuntivo", "problema"]

tipo: completar
enunciado: "La forma 'cantara' (pretérito imperfecto de subjuntivo) tiene una forma alternativa igualmente correcta, terminada en '-se'. ¿Cuál es?"
respuestas_validas:
  - "cantase"

explicacion: |
  Ambos paradigmas ('-ra' y '-se') son intercambiables.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

enunciado: "¿Por qué la oración 'Espero que vengas pronto' usa el verbo 'vengas' en subjuntivo y no 'vienes' en indicativo?"
tipo: mc
opciones_explicitas:
  - "Porque 'esperar' es un verbo de deseo, y los verbos de deseo + 'que' piden subjuntivo en la oración subordinada"
  - "Porque 'venir' siempre se conjuga en subjuntivo, sin importar el contexto"
  - "No hay ninguna razón gramatical, ambas formas son igual de correctas"
respuesta: "Porque 'esperar' es un verbo de deseo, y los verbos de deseo + 'que' piden subjuntivo en la oración subordinada"

explicacion: |
  Es la regla práctica central de este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "problema"]

enunciado: "'Sé que hables español' tiene un error de modo verbal. ¿Cuál es la corrección correcta?"
tipo: mc
opciones_explicitas:
  - "'Sé que hablas español' — 'saber' expresa certeza y pide indicativo, no subjuntivo"
  - "'Sé que hablarás español' — hay que usar futuro en vez de subjuntivo"
respuesta: "'Sé que hablas español' — 'saber' expresa certeza y pide indicativo, no subjuntivo"

explicacion: |
  'Saber' (conocimiento seguro) no admite subjuntivo en la
  subordinada.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["imperativo", "problema"]

tipo: completar
enunciado: "Para pedirle a un amigo que cierre la puerta, le decís: '___ la puerta, por favor.' (imperativo, tú, 'cerrar')"
respuestas_validas:
  - "cierra"
  - "Cierra"

explicacion: |
  El imperativo de 'cerrar' para 'tú' toma la forma del presente de
  indicativo sin la 's' final: 'cierras' → 'cierra'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperativo", "subjuntivo"]

respuesta: verdadero
tipo: vf

enunciado: "El imperativo NEGATIVO usa exactamente las mismas formas que el presente de subjuntivo: '¡No cierres la puerta!' usa 'cierres', la misma forma que 'espero que cierres la puerta'."

explicacion: |
  Es la conexión directa entre imperativo y subjuntivo mencionada en
  `teoria.md`.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "vocabulario"]

enunciado: "¿Cuál de estos grupos de expresiones pide subjuntivo en la oración subordinada?"
tipo: mc
opciones_explicitas:
  - "Deseo, duda, emoción, ruego, valoración subjetiva (esperar que, dudar que, alegrarse de que, pedir que, es una pena que)"
  - "Certeza (saber que, es obvio que, es cierto que, ver que)"
respuesta: "Deseo, duda, emoción, ruego, valoración subjetiva (esperar que, dudar que, alegrarse de que, pedir que, es una pena que)"

explicacion: |
  El segundo grupo (certeza) pide indicativo, no subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Me alegro de que ustedes ___ (estar) bien.'"
respuestas_validas:
  - "estén"

explicacion: |
  'Alegrarse de que' expresa emoción, así que pide subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué el modo subjuntivo suele considerarse más difícil de dominar que el indicativo, incluso para hablantes nativos en producción escrita formal?"
tipo: mc
opciones_explicitas:
  - "Porque elegirlo depende de reconocer una intención subjetiva (duda, deseo, emoción) en el verbo principal, no de una regla mecánica simple como en el indicativo"
  - "Porque el subjuntivo no tiene ninguna forma verbal propia"
  - "Porque el subjuntivo sólo existe en la lengua escrita, nunca en la hablada"
respuesta: "Porque elegirlo depende de reconocer una intención subjetiva (duda, deseo, emoción) en el verbo principal, no de una regla mecánica simple como en el indicativo"

explicacion: |
  Es la razón por la que este módulo se separó del indicativo, aunque
  comparta buena parte del mismo vocabulario de formas.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Te pido que me ___ (ayudar) con esto.'"
respuestas_validas:
  - "ayudes"

explicacion: |
  'Pedir que' expresa ruego, pide subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "'Creo que viene' (indicativo, cierta seguridad) y 'No creo que venga' (subjuntivo, duda) usan el mismo verbo principal ('creer'), pero cambian de modo según si la oración es afirmativa o negativa."

explicacion: |
  Negar 'creer' introduce duda, y por eso cambia a subjuntivo — un
  matiz avanzado de la regla general.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Dudo que ellos ___ (llegar) a tiempo.'"
respuestas_validas:
  - "lleguen"

explicacion: |
  'Dudar que' expresa duda, pide subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

enunciado: "'Es una pena que no puedas venir' usa el subjuntivo 'puedas'. ¿Por qué?"
tipo: mc
opciones_explicitas:
  - "Porque 'es una pena que' expresa una valoración subjetiva sobre el hecho, no una afirmación de certeza"
  - "Porque el verbo 'poder' siempre se conjuga en subjuntivo"
  - "Es un error, debería decir 'puedes'"
respuesta: "Porque 'es una pena que' expresa una valoración subjetiva sobre el hecho, no una afirmación de certeza"

explicacion: |
  Las expresiones de valoración ('es una pena que', 'es genial que')
  son otro disparador típico del subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperativo", "problema"]

tipo: completar
enunciado: "Completá el imperativo negativo: 'No ___ (hablar) tan fuerte.' (a 'tú')"
respuestas_validas:
  - "hables"

explicacion: |
  El imperativo negativo de 'tú' usa la misma forma que el presente
  de subjuntivo de segunda persona.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al escribir una oración con 'que', ¿qué conviene revisar para decidir si el verbo de la subordinada va en indicativo o en subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Qué tipo de verbo o expresión introduce la oración: si es de certeza (indicativo) o de deseo/duda/emoción/ruego/valoración (subjuntivo)"
  - "Sólo importa si el verbo principal es regular o irregular"
  - "El modo no depende del verbo principal, es aleatorio"
respuesta: "Qué tipo de verbo o expresión introduce la oración: si es de certeza (indicativo) o de deseo/duda/emoción/ruego/valoración (subjuntivo)"

explicacion: |
  Es la estrategia práctica central de todo este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el modo subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Para expresar duda, deseo, emoción, ruego o valoración subjetiva, distinguiéndolo de las afirmaciones de hechos reales del indicativo"
  - "Para narrar hechos que ya ocurrieron con certeza"
  - "Sólo se usa en la lengua escrita formal, nunca al hablar"
respuesta: "Para expresar duda, deseo, emoción, ruego o valoración subjetiva, distinguiéndolo de las afirmaciones de hechos reales del indicativo"

explicacion: |
  Cierra la cadena de `../conjugacion-verbal-indicativo/`: los dos
  modos verbales centrales del español.
```

## Sección: nucleos-y-modificadores (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["nucleo", "vocabulario"]

enunciado: "¿Qué es el núcleo de un sintagma?"
tipo: mc
opciones_explicitas:
  - "La palabra principal, que concentra el significado central y determina la categoría gramatical de todo el grupo"
  - "La primera palabra del sintagma, sin importar su función"
  - "Cualquier palabra que se pueda quitar sin cambiar el sentido"
respuesta: "La palabra principal, que concentra el significado central y determina la categoría gramatical de todo el grupo"

explicacion: |
  En un sintagma nominal, el núcleo siempre es un sustantivo o
  pronombre.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["modificador", "vocabulario"]

enunciado: "¿Qué es un modificador?"
tipo: mc
opciones_explicitas:
  - "Una palabra o grupo de palabras que acompaña al núcleo, agregando información sin ser imprescindible para la estructura básica"
  - "Otro nombre para el núcleo de un sintagma"
  - "Una palabra que siempre va al final de la oración"
respuesta: "Una palabra o grupo de palabras que acompaña al núcleo, agregando información sin ser imprescindible para la estructura básica"

explicacion: |
  Se puede quitar y la oración sigue siendo gramaticalmente correcta,
  aunque pierda información.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["nucleo", "modificador_directo", "problema"]

enunciado: "Etiquetá el núcleo del sujeto y su modificador directo en esta oración."
tipo: analisis_sintactico
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
etiquetas_pedidas:
  - { palabra: "estudiantes", etiqueta: "núcleo" }
  - { palabra: "Los", etiqueta: "modificador directo" }

explicacion: |
  'Estudiantes' es el núcleo; 'Los' lo acompaña directamente, sin
  preposición.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_directo", "vocabulario"]

enunciado: "¿Qué es un modificador directo?"
tipo: mc
opciones_explicitas:
  - "Un determinante o adjetivo que se agrega al núcleo sin preposición ('el perro grande')"
  - "Un sintagma con preposición que complementa al núcleo"
  - "Un sustantivo que explica a otro, separado por comas"
respuesta: "Un determinante o adjetivo que se agrega al núcleo sin preposición ('el perro grande')"

explicacion: |
  'El' y 'grande' son modificadores directos de 'perro'.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_indirecto", "vocabulario"]

enunciado: "¿Qué es un modificador indirecto (complemento del nombre)?"
tipo: mc
opciones_explicitas:
  - "Un sintagma CON preposición que complementa al núcleo ('la casa de María')"
  - "Un determinante que acompaña al núcleo sin preposición"
  - "Otro nombre para el núcleo del predicado"
respuesta: "Un sintagma CON preposición que complementa al núcleo ('la casa de María')"

explicacion: |
  La preposición ('de', en este caso) es lo que distingue al
  modificador indirecto del directo.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_indirecto", "problema"]

enunciado: "Marcá el modificador indirecto (complemento del nombre) del núcleo 'estudiantes' en esta oración."
tipo: analisis_spans
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
spans_pedidos:
  - { desde: 2, hasta: 4, etiqueta: "modificador indirecto" }

explicacion: |
  'De la clase' es un sintagma preposicional que complementa a
  'estudiantes' — a diferencia de 'Los', que lo modifica sin
  preposición.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "vocabulario"]

enunciado: "¿Qué es una aposición?"
tipo: mc
opciones_explicitas:
  - "Un sustantivo (o sintagma nominal) que se agrega a otro para explicarlo, sin preposición, generalmente separado por comas"
  - "Un adjetivo que concuerda en género y número con el núcleo"
  - "Otro nombre para el modificador indirecto"
respuesta: "Un sustantivo (o sintagma nominal) que se agrega a otro para explicarlo, sin preposición, generalmente separado por comas"

explicacion: |
  Como 'el profesor' en 'Javier, el profesor, llegó tarde'.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "problema"]

tipo: completar
enunciado: "En la oración 'Javier, el profesor, llegó tarde', ¿qué palabras forman la aposición de 'Javier'?"
respuestas_validas:
  - "el profesor"

explicacion: |
  Explica quién es Javier, sin usar ninguna preposición, separado por
  comas.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede quitar un modificador de un sintagma y la oración sigue siendo gramaticalmente correcta, aunque pierda parte de la información."

explicacion: |
  'Los estudiantes aprobaron el examen' (sin 'de la clase') sigue
  siendo una oración válida, con menos precisión.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "Si se quita el núcleo de un sintagma, la oración deja de tener sentido o cambia por completo su estructura — a diferencia de quitar un modificador."

explicacion: |
  Es la prueba práctica para distinguir núcleo de modificador: lo
  imprescindible vs. lo prescindible.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_directo", "problema"]

enunciado: "Marcá los modificadores directos del núcleo 'perro' en esta oración."
tipo: identificar_palabras
texto_analizar: "El perro grande corre"
respuestas_validas:
  - "El"
  - "grande"

explicacion: |
  Ambos acompañan a 'perro' sin preposición: uno antes (determinante),
  otro después (adjetivo).
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["nucleo", "problema"]

enunciado: "¿Cuál es el núcleo del sujeto en 'El perro grande corre'?"
tipo: mc
opciones_explicitas:
  - "perro"
  - "El"
  - "grande"
respuesta: "perro"

explicacion: |
  Es el sustantivo que concentra el significado central del sujeto.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene 'núcleo y modificadores' con lo ya visto en `../sujeto-y-predicado/`?"
tipo: mc
opciones_explicitas:
  - "Le da nombre formal a lo que ya se distinguía informalmente: el núcleo del sujeto (ya identificado) y todo lo que lo acompaña (ahora llamado 'modificador')"
  - "No tiene ninguna relación real con sujeto y predicado"
  - "Reemplaza por completo la necesidad de identificar sujeto y predicado"
respuesta: "Le da nombre formal a lo que ya se distinguía informalmente: el núcleo del sujeto (ya identificado) y todo lo que lo acompaña (ahora llamado 'modificador')"

explicacion: |
  Es la continuación directa de ese módulo.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["predicado"]

respuesta: verdadero
tipo: vf

enunciado: "El mismo patrón de núcleo y modificadores se repite en el predicado: su núcleo es el verbo, y sus complementos (objeto directo, objeto indirecto, circunstanciales) funcionan como modificadores de ese núcleo verbal."

explicacion: |
  Profundizar en esos tipos específicos de complemento verbal es el
  tema de un módulo posterior ('Objetos y circunstanciales').
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_directo", "modificador_indirecto", "problema"]

enunciado: "En 'la mesa de madera', ¿qué tipo de modificador es 'de madera' respecto del núcleo 'mesa'?"
tipo: mc
opciones_explicitas:
  - "Modificador indirecto (complemento del nombre): usa la preposición 'de'"
  - "Modificador directo: no usa ninguna preposición"
  - "Aposición: es un sustantivo que explica a 'mesa'"
respuesta: "Modificador indirecto (complemento del nombre): usa la preposición 'de'"

explicacion: |
  La presencia de la preposición 'de' es la marca distintiva del
  modificador indirecto.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "modificador_indirecto"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del modificador indirecto, la aposición no usa ninguna preposición para unirse al núcleo — por eso 'el profesor' en 'Javier, el profesor,...' es aposición y no modificador indirecto."

explicacion: |
  Si dijera 'Javier, DE profesión profesor,...' ahí sí habría una
  preposición de por medio.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cómo ayuda distinguir núcleo de modificadores a resumir o parafrasear una oración larga?"
tipo: mc
opciones_explicitas:
  - "Permite quedarse con el esqueleto básico (los núcleos) y decidir qué modificadores son prescindibles según qué tan importante sea la información que agregan"
  - "No tiene ninguna utilidad práctica fuera del análisis gramatical"
  - "Obliga a mantener siempre todos los modificadores de la oración original"
respuesta: "Permite quedarse con el esqueleto básico (los núcleos) y decidir qué modificadores son prescindibles según qué tan importante sea la información que agregan"

explicacion: |
  Es una aplicación práctica directa de este módulo a la producción
  de textos.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

tipo: completar
enunciado: "En 'Javier, el profesor, llegó tarde', ¿cuál es el núcleo del sujeto completo ('Javier, el profesor')?"
respuestas_validas:
  - "Javier"

explicacion: |
  La aposición ('el profesor') explica a 'Javier', pero no lo
  reemplaza como núcleo.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_directo"]

enunciado: "¿Cuáles son las dos clases de palabras que típicamente funcionan como modificador directo de un sustantivo?"
tipo: mc
opciones_explicitas:
  - "Determinantes (artículos) y adjetivos"
  - "Preposiciones y conjunciones"
  - "Verbos y adverbios"
respuesta: "Determinantes (artículos) y adjetivos"

explicacion: |
  Ambos acompañan al sustantivo sin necesitar ninguna preposición de
  por medio.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir el núcleo de un sintagma de sus modificadores?"
tipo: mc
opciones_explicitas:
  - "Para entender qué parte de un sintagma es imprescindible (el núcleo) y qué parte agrega información prescindible (los modificadores), la base de cualquier análisis sintáctico más detallado"
  - "Sólo sirve para contar palabras de una oración"
  - "No tiene relación con analizar objetos y circunstanciales más adelante"
respuesta: "Para entender qué parte de un sintagma es imprescindible (el núcleo) y qué parte agrega información prescindible (los modificadores), la base de cualquier análisis sintáctico más detallado"

explicacion: |
  Es el paso siguiente después de `../sujeto-y-predicado/`, y la base
  del módulo que sigue en la currícula: 'Objetos y circunstanciales'.
```

## Sección: tipos-de-sujeto (22 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_tacito", "elipsis"]

variables:
  pronombre: uno_de(["nosotros", "tú", "ellos", "yo"])
  verbo: uno_de(["estudiamos", "estudias", "estudian", "estudio"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{verbo} mucho para el examen', el sujeto es expreso porque aparece escrito."

explicacion: |
  Falso. El sujeto es tácito (elíptico). Aunque no se escribe, se sobreentiende por la conjugación verbal ('{pronombre}'). En español, es común omitir el pronombre sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "nucleo"]

variables:
  nombre_propio: uno_de(["Pedro", "Laura", "Martín", "Sofía", "Tomás"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre_propio} juega al fútbol', el sujeto es simple porque tiene un solo núcleo."

explicacion: |
  Verdadero. El sujeto '{nombre_propio}' tiene un único núcleo (el nombre propio) — eso lo hace simple, tenga o no modificadores acompañándolo.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "modificadores"]

variables:
  adjetivo: uno_de(["grandes", "inteligentes", "divertidos", "serios", "alegres"])
  sustantivo: uno_de(["niños", "estudiantes", "amigos", "compañeros", "vecinos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {adjetivo} llegaron tarde', el sujeto sigue siendo simple, aunque tenga modificadores."

explicacion: |
  Verdadero. 'Los {sustantivo} {adjetivo}' tiene un único núcleo ('{sustantivo}'), acompañado de modificadores ('Los', '{adjetivo}'). Tener modificadores no lo convierte en compuesto — sigue siendo simple porque hay un solo núcleo.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_compuesto", "coordinacion"]

variables:
  nombre1: uno_de(["María", "Juan", "Ana", "Luis", "Pedro"])
  nombre2: uno_de(["Carlos", "Laura", "Sofía", "Martín", "Elena"])
  accion: uno_de(["llegaron", "vinieron", "estudiaron", "jugaron", "hablaron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre1} y {nombre2} {accion} tarde', el sujeto es compuesto."

explicacion: |
  Verdadero. El sujeto tiene dos núcleos ('{nombre1}' y '{nombre2}') coordinados por 'y'. Al tener más de un núcleo, es un sujeto compuesto — y por eso el verbo va en plural.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_simple", "pronombre"]

variables:
  pronombre: uno_de(["Yo", "Tú", "Él", "Nosotros", "Ellos"])
  accion: uno_de(["estudio", "estudias", "estudia", "estudiamos", "estudian"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{pronombre} {accion} mañana', el sujeto es simple."

explicacion: |
  Verdadero. El sujeto '{pronombre}' es un pronombre personal que funciona como único núcleo — eso lo hace simple.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "modificador"]

variables:
  sustantivo: uno_de(["amigos", "compañeros", "vecinos", "colegas"])
  complemento: uno_de(["de la escuela", "del trabajo", "del barrio", "de la clase"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {complemento} llegaron', el sujeto es simple."

explicacion: |
  Verdadero. 'Los {sustantivo} {complemento}' tiene un único núcleo ('{sustantivo}') con un modificador preposicional ('{complemento}') — sigue siendo simple, porque hay un solo núcleo.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["oracion_bimembre_unimembre", "distincion"]

respuesta: falso
tipo: vf

enunciado: "'Bimembre' y 'unimembre' son términos que clasifican al sujeto según tenga o no modificadores."

explicacion: |
  Falso. 'Bimembre' y 'unimembre' clasifican a la ORACIÓN completa (si se puede dividir en sujeto y predicado, o no) — no al sujeto. El sujeto se clasifica, entre otros criterios, en simple o compuesto según su número de núcleos.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["oracion_unimembre", "impersonal"]

respuesta: verdadero
tipo: vf

enunciado: "'¡Fuego!' o 'Llueve mucho' son ejemplos de oraciones unimembres, porque no se pueden dividir en sujeto y predicado."

explicacion: |
  Verdadero. Son oraciones unimembres: no tienen la estructura de dos miembros (sujeto + predicado) que sí tiene una oración bimembre como 'Juan corre'.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_simple", "sustantivo_propio"]

variables:
  nombre: uno_de(["Buenos Aires", "España", "Argentina", "México", "Colombia"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre} tiene mucha historia', el sujeto es simple."

explicacion: |
  Verdadero. El sujeto '{nombre}' es un sustantivo propio que funciona como único núcleo — eso lo hace simple.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_tacito", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Estudiamos mucho', el sujeto 'nosotros' no aparece escrito pero se sobreentiende por la conjugación verbal. Esta afirmación es:"

explicacion: |
  Correcto. Es un sujeto tácito (o elíptico) porque la persona y número están indicados en el verbo 'estudiamos' (1ra persona del plural).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_expreso", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'María lee un libro', el sujeto 'María' es un sujeto expreso porque aparece claramente en la oración. Esta afirmación es:"

explicacion: |
  Correcto. El sujeto está presente explícitamente en la oración.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_compuesto", "definicion"]

respuesta: "dos o mas nucleos coordinados"
tipo: completar
respuestas_validas:
  - "dos o mas nucleos coordinados"
  - "dos o más núcleos coordinados"
  - "dos o mas nucleos"
  - "dos núcleos coordinados"

enunciado: "Un sujeto compuesto se define por tener ___."

explicacion: |
  Un sujeto compuesto tiene dos o más núcleos coordinados entre sí (por ejemplo, unidos por 'y'), a diferencia del sujeto simple, que tiene un único núcleo.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "definicion"]

respuesta: "un solo nucleo"
tipo: completar
respuestas_validas:
  - "un solo nucleo"
  - "un solo núcleo"
  - "un unico nucleo"
  - "un único núcleo"

enunciado: "Un sujeto simple se define por tener ___, tenga o no modificadores."

explicacion: |
  Un sujeto simple tiene un único núcleo (sustantivo o pronombre) — puede o no llevar modificadores, eso no cambia su clasificación como simple.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["identificacion", "sujeto_expreso"]

variables:
  sujeto: uno_de(["El perro", "La casa", "Mi hermano", "Tus amigos"])
  verbo: uno_de(["corre", "brilla", "trabaja", "juegan"])
  complemento: uno_de(["en el parque", "por la noche", "en la oficina", "con sus vecinos"])

respuesta: sujeto
tipo: input

enunciado: "Identificá el sujeto en la siguiente oración: '{sujeto} {verbo} {complemento}'"

explicacion: |
  El sujeto es quien realiza la acción o sobre quien recae el estado. En este caso, '{sujeto}' es el sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["concordancia", "sujeto"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "El sujeto concuerda con el verbo en:"

explicacion: |
  El sujeto y el verbo deben concordar en persona y número.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["nucleo", "sujeto"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "En un sujeto simple con modificadores, el núcleo es:"

explicacion: |
  El núcleo es la palabra principal del sujeto, generalmente un sustantivo o pronombre — el resto son modificadores que lo acompañan.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["comparacion", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "La principal diferencia entre sujeto simple y sujeto compuesto es:"

explicacion: |
  La diferencia radica en el número de núcleos: uno solo (simple) o dos o más coordinados (compuesto) — no la presencia o ausencia de modificadores.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_agente", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El sujeto siempre es quien realiza la acción en una oración. Esta afirmación es:"

explicacion: |
  Falso. El sujeto puede ser agente (realiza la acción) o paciente (sobre quien recae la acción o estado).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["impersonal", "sujeto"]

respuesta: 4
tipo: mc
opciones: 4

enunciado: "En las oraciones impersonales (ej: 'Llueve mucho'), el sujeto es:"

explicacion: |
  En las oraciones impersonales no hay sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["comparacion", "sujeto_tacito"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del español, el inglés generalmente requiere un sujeto explícito incluso cuando la persona está clara por la conjugación. Esta afirmación es:"

explicacion: |
  Correcto. El español permite la omisión del sujeto (tácito) con mayor frecuencia que el inglés.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_expreso", "pronombre"]

variables:
  pronombre: uno_de(["Ellos", "Ellas", "Nosotros", "Yo"])
  verbo: uno_de(["juegan", "cantan", "estudiamos", "leo"])
  complemento: uno_de(["fútbol", "canciones", "matemáticas", "un libro"])

respuesta: pronombre
tipo: input

enunciado: "Identificá el sujeto en la oración: '{pronombre} {verbo} {complemento}'"

explicacion: |
  El sujeto es el pronombre '{pronombre}'.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["definicion", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "El sujeto es:"

explicacion: |
  El sujeto es el elemento de la oración que concuerda en persona y número con el verbo.
```

## Sección: objetos-y-circunstanciales (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "reconocimiento"]

variables:
  frases: ["Juan compró el pan", "María leyó el libro", "Pedro rompió la ventana", "Ana pintó la pared"]
  ods: ["el pan", "el libro", "la ventana", "la pared"]
  idx: uno_de([0, 1, 2, 3])

respuesta: ods[idx]
tipo: completar

enunciado: "En la oración \"{frases[idx]}\", ¿cuál es el objeto directo?"

pasos:
  - "El OD es lo que recibe la acción directamente: se lo puede reemplazar por lo/la/los/las."

explicacion: |
  El objeto directo responde a "¿qué cosa?" y se reemplaza por un
  pronombre (lo/la/los/las).
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "pronombres"]

variables:
  ods: ["el pan", "los libros", "la ventana", "las cartas"]
  pronombres: ["lo", "los", "la", "las"]
  idx: uno_de([0, 1, 2, 3])

respuesta: pronombres[idx]
tipo: completar

enunciado: "Para reemplazar el objeto directo \"{ods[idx]}\" por un pronombre, se usa..."

pasos:
  - "El pronombre concuerda en género y número con el sustantivo reemplazado."

explicacion: |
  lo/la para singular, los/las para plural, según el género del
  sustantivo reemplazado.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_indirecto", "reconocimiento"]

variables:
  frases: ["Juan le regaló un libro a María", "El profesor les explicó el tema a los alumnos", "Ana le escribió una carta a su abuela", "Le dieron un premio al ganador"]
  ois: ["a María", "a los alumnos", "a su abuela", "al ganador"]
  idx: uno_de([0, 1, 2, 3])

respuesta: ois[idx]
tipo: completar

enunciado: "En la oración \"{frases[idx]}\", ¿cuál es el objeto indirecto?"

pasos:
  - "El OI es el destinatario/beneficiario de la acción, siempre con preposición \"a\"."
  - "Se reemplaza por le/les."

explicacion: |
  El objeto indirecto responde a "¿a quién?"/"¿para quién?" y se
  reemplaza por le/les.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_indirecto", "pronombres"]

variables:
  destinatarios: ["a María", "a los alumnos", "a mi hermano"]
  pronombres: ["le", "les", "le"]
  idx: uno_de([0, 1, 2])

respuesta: pronombres[idx]
tipo: completar

enunciado: "El objeto indirecto \"{destinatarios[idx]}\" se reemplaza por el pronombre..."

pasos:
  - "le para singular, les para plural, sin distinguir género."

explicacion: |
  A diferencia del OD, el OI no distingue género: siempre es
  le (singular) o les (plural).
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "od_de_persona"]

variables:
  frases: ["Vi a María en el parque", "Saludé a mi profesor", "Llamé a mi amigo"]
  pronombres: ["la vi", "lo saludé", "lo llamé"]
  idx: uno_de([0, 1, 2])

respuesta: pronombres[idx]
tipo: mc
opciones_explicitas: [pronombres[idx], "le vi", "les saludé", "le llamé"]

enunciado: "En \"{frases[idx]}\", el complemento con \"a\" es un OD de persona. ¿Cómo queda la oración al reemplazarlo por el pronombre correcto?"

pasos:
  - "Aunque lleve \"a\", si responde \"¿a quién?\" en sentido de OD (no de destinatario), se reemplaza por lo/la/los/las, no por le/les."

explicacion: |
  El OD de persona lleva "a" (a María, a mi profesor) pero sigue
  siendo OD: se reemplaza por lo/la/los/las, nunca por le/les.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "objeto_indirecto", "diferenciacion"]

variables:
  casos: ["Vi a María", "Le regalé un libro a María"]
  tipos: ["objeto directo", "objeto indirecto"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["objeto directo", "objeto indirecto"]

enunciado: "En \"{casos[idx]}\", el complemento \"a María\" es..."

pasos:
  - "Si María recibe directamente la acción del verbo (vi A MARÍA), es OD."
  - "Si María es destinataria de algo que se le da/dice/cuenta, es OI."

explicacion: |
  "Vi a María": María es lo que se ve → OD. "Le regalé un libro a
  María": María recibe el libro, no la acción del regalo en sí → OI.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["circunstancial", "lugar"]

variables:
  frases: ["Juan estudió en la biblioteca", "Ana durmió en su casa", "Los chicos jugaron en el patio"]
  ccs: ["en la biblioteca", "en su casa", "en el patio"]
  idx: uno_de([0, 1, 2])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial y de qué tipo es (lugar)?"

pasos:
  - "Preguntar ¿dónde? para encontrar el CC de lugar."

explicacion: |
  El CC de lugar responde a "¿dónde?".
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["circunstancial", "tiempo"]

variables:
  frases: ["Juan llegó ayer", "María se fue temprano", "El examen es mañana"]
  ccs: ["ayer", "temprano", "mañana"]
  idx: uno_de([0, 1, 2])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de tiempo?"

pasos:
  - "Preguntar ¿cuándo? para encontrar el CC de tiempo."

explicacion: |
  El CC de tiempo responde a "¿cuándo?".
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["circunstancial", "modo"]

variables:
  frases: ["Juan estudió con dedicación", "María habló despacio", "El equipo jugó bien"]
  ccs: ["con dedicación", "despacio", "bien"]
  idx: uno_de([0, 1, 2])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de modo?"

pasos:
  - "Preguntar ¿cómo? para encontrar el CC de modo."

explicacion: |
  El CC de modo responde a "¿cómo?".
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "clasificacion"]

variables:
  ccs: ["en la biblioteca", "ayer", "con dedicación", "por miedo", "mucho"]
  tipos: ["lugar", "tiempo", "modo", "causa", "cantidad"]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["lugar", "tiempo", "modo", "causa", "cantidad"]

enunciado: "El circunstancial \"{ccs[idx]}\" es de tipo..."

pasos:
  - "Cada CC responde a una pregunta distinta: dónde/cuándo/cómo/por qué/cuánto."

explicacion: |
  lugar → ¿dónde?, tiempo → ¿cuándo?, modo → ¿cómo?, causa → ¿por
  qué?, cantidad → ¿cuánto?.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "multiplicidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una misma oración puede tener varios circunstanciales al mismo tiempo (de modo, lugar y tiempo juntos, por ejemplo)."

pasos:
  - "A diferencia del OD y el OI (que suelen ser uno solo por verbo), los CC se pueden acumular libremente."

explicacion: |
  Verdadero: "Juan estudió con dedicación en la biblioteca ayer"
  tiene CC de modo, lugar y tiempo en la misma oración.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "preposicion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El objeto directo siempre necesita una preposición para formarse."

pasos:
  - "\"Juan compró el pan\": \"el pan\" es OD sin ninguna preposición."

explicacion: |
  Falso. El OD normalmente no lleva preposición ("compró el pan");
  sólo lleva "a" cuando es una persona ("vi a María").
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_indirecto", "preposicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El objeto indirecto siempre lleva la preposición \"a\" (o \"para\")."

pasos:
  - "\"Le regaló un libro a María\": \"a María\" no puede faltar la preposición."

explicacion: |
  Verdadero: el OI siempre se introduce con "a" o "para".
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "objeto_indirecto", "coexistencia"]

variables:
  frases: ["Juan le regaló un libro a María", "Ana le contó un secreto a su amiga", "El profesor les entregó las notas a los alumnos"]
  ods: ["un libro", "un secreto", "las notas"]
  idx: uno_de([0, 1, 2])

respuesta: ods[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", además del objeto indirecto, hay un objeto directo. ¿Cuál es?"

pasos:
  - "Preguntar ¿qué cosa se regala/cuenta/entrega? para encontrar el OD, distinto del destinatario (OI)."

explicacion: |
  Un mismo verbo puede tener OD (lo que se da) y OI (a quién se le
  da) al mismo tiempo.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "circunstancial", "diferenciacion"]

variables:
  casos: ["compró el pan", "estudió con dedicación"]
  tipos: ["objeto directo", "circunstancial de modo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["objeto directo", "circunstancial de modo"]

enunciado: "En la frase \"Juan {casos[idx]}\", el complemento subrayado es..."

pasos:
  - "Si se reemplaza por lo/la/los/las, es OD. Si responde ¿cómo?, es CC de modo."

explicacion: |
  "el pan" se reemplaza por "lo" (compró) → OD. "con dedicación"
  responde ¿cómo estudió? → CC de modo, no se reemplaza por un
  pronombre único.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "causa"]

variables:
  frases: ["Juan faltó por enfermedad", "María llegó tarde por el tráfico"]
  ccs: ["por enfermedad", "por el tráfico"]
  idx: uno_de([0, 1])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de causa?"

pasos:
  - "Preguntar ¿por qué? para encontrar el CC de causa."

explicacion: |
  El CC de causa responde a "¿por qué?".
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "cantidad"]

variables:
  frases: ["Juan comió mucho", "María trabajó poco esta semana"]
  ccs: ["mucho", "poco"]
  idx: uno_de([0, 1])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de cantidad?"

pasos:
  - "Preguntar ¿cuánto? para encontrar el CC de cantidad."

explicacion: |
  El CC de cantidad responde a "¿cuánto?".
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "metodo"]

enunciado: "Ordená los pasos para reconocer el objeto directo de una oración."
tipo: ordenar
opciones_explicitas:
  - "Ubicar el verbo de la oración"
  - "Preguntar \"¿qué cosa?\" después del verbo"
  - "Intentar reemplazar la respuesta por lo/la/los/las"
  - "Si el reemplazo tiene sentido, es objeto directo"
respuesta_orden: ["Ubicar el verbo de la oración", "Preguntar \"¿qué cosa?\" después del verbo", "Intentar reemplazar la respuesta por lo/la/los/las", "Si el reemplazo tiene sentido, es objeto directo"]
pasos:
  - "El reconocimiento sigue siempre el mismo método: verbo → pregunta → reemplazo → confirmación."

explicacion: |
  Se ubica el verbo, se pregunta "¿qué cosa?", se prueba el
  reemplazo por lo/la/los/las y si funciona, se confirma como OD.
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "avanzado"
  tags: ["objeto_directo", "objeto_indirecto", "verbos"]

variables:
  verbos: ["dar", "regalar", "contar", "prestar"]
  idx: uno_de([0, 1, 2, 3])

respuesta: verdadero
tipo: vf

enunciado: "El verbo \"{verbos[idx]}\" es de los que típicamente piden un objeto directo (lo que se da/regala/cuenta/presta) y un objeto indirecto (a quién) al mismo tiempo."

pasos:
  - "\"Le {verbos[idx]} algo a alguien\": \"algo\" = OD, \"a alguien\" = OI."

explicacion: |
  Verbos como dar, regalar, contar y prestar necesitan naturalmente
  los dos complementos: qué se da (OD) y a quién (OI).
```

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "avanzado"
  tags: ["objetos_y_circunstanciales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer el objeto directo es necesario para entender cómo se forma la voz pasiva, porque el OD de la oración activa pasa a ser el sujeto de la oración pasiva."

pasos:
  - "\"Juan compró el pan\" (OD: el pan) → \"El pan fue comprado por Juan\" (sujeto: el pan)."

explicacion: |
  Verdadero: identificar el OD es el paso previo indispensable para
  pasar una oración de voz activa a voz pasiva, tema siguiente de la
  currícula.
```

