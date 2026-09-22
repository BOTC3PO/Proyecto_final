# Examen jefe — [PENDIENTE #664]

> Logro #664. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **131 preguntas totales** en 5/5 secciones.

---

## Sección: subordinada-concesiva-y-final (20 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["concesiva", "identificacion"]

variables:
  conjuncion: uno_de(["Aunque", "Si bien", "Pese a que"])
  sujeto: uno_de(["los alumnos", "el equipo", "mi abuelo"])
  verbo_principal: uno_de(["estudiaron", "jugó", "trabajó"])
  complemento: uno_de(["el examen", "el torneo", "la mudanza"])

respuesta: verdadero
tipo: vf

enunciado: "{conjuncion} {sujeto} {verbo_principal} {complemento}. Esta oración contiene una subordinada concesiva."

explicacion: |
  La conjunción "Aunque", "Si bien" o "Pese a que" introduce una circunstancia adversa que no impide la acción principal, definiendo una oración subordinada concesiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "proposito"]

variables:
  accion: uno_de(["Estudio", "Trabajo", "Viajo"])
  motivo: uno_de(["para aprobar", "para ganar dinero", "para descansar"])

respuesta: "para aprobar"
tipo: completar

enunciado: "Completa la oración con el propósito correcto: '{accion} mucho {motivo}.' (Escribe solo la parte que indica el fin)."

explicacion: |
  La estructura 'para + infinitivo' o 'para que' indica el fin o propósito de la acción principal. En este caso, 'para aprobar' es el objetivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "conjunciones"]

variables:
  sujeto: uno_de(["Ella", "Nosotros", "Ellos"])
  accion: uno_de(["estudia", "trabaja", "corre"])
  fin: uno_de(["para que pase", "a fin de que llegue", "porque llega"])

respuesta: "para que pase"
tipo: completar

enunciado: "Selecciona la opción que completa correctamente la idea final: '{sujeto} {accion} {fin}.' (Escribe la conjunción y el verbo conjugado)."

explicacion: |
  Las oraciones finales se introducen por "para que" o "a fin de que" seguidas de un verbo en subjuntivo. "Porque" introduce causalidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "obstaculo"]

variables:
  obstaculo: uno_de(["El cansancio", "El frío", "La falta de tiempo"])
  accion: uno_de(["terminó", "siguió", "completó"])
  tarea: uno_de(["el informe", "la carrera", "la tarea"])

respuesta: falso
tipo: vf

enunciado: "En la frase '{obstaculo} {accion} {tarea}', la primera parte funciona como una concesiva."

explicacion: |
  Falso. Para que sea concesiva, la primera parte necesita una conjunción explícita como "aunque", "a pesar de que" o "si bien". Sin esa conjunción, '{obstaculo} {accion} {tarea}' es simplemente una oración simple con sujeto y predicado, no una subordinada concesiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "identificacion"]

variables:
  frase: uno_de(["Aunque llovió, fuimos"])
  tipo_erroneo: "final"

respuesta: falso
tipo: vf

enunciado: "La oración '{frase}' es una subordinada final."

explicacion: |
  "Aunque" es una conjunción concesiva, no final. Por lo tanto, la oración es concesiva, no final.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

variables:
  accion: uno_de(["Guardé", "Ahorre", "Trabajé"])
  objeto: uno_de(["el dinero", "el libro", "las llaves"])
  fin: uno_de(["para el viaje", "para leer", "para abrir"])

respuesta: "para el viaje"
tipo: completar

enunciado: "¿Cuál es el propósito en: '{accion} {objeto} {fin}?' (Escribe la parte del fin)."

explicacion: |
  "Para el viaje" indica el objetivo o fin de la acción principal. Es una estructura preposicional de fin.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "registro"]

variables:
  sujeto1: uno_de(["El gobierno", "La empresa", "Los vecinos"])
  medida: uno_de(["implementó", "creó", "organizó"])
  objetivo: uno_de(["la nueva ley", "el programa", "la reunión"])
  fin_formal: "a fin de que"

respuesta: "a fin de que"
tipo: completar

enunciado: "Completa con la locución conjuntiva formal: '{sujeto1} {medida} {objetivo} {fin_formal} se reduzcan los índices.'"

explicacion: |
  "A fin de que" es una locución conjuntiva final formal, seguida de subjuntivo, utilizada para expresar un propósito de manera más culta o administrativa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "sinonimia"]

variables:
  hecho: uno_de(["el proyecto falló", "la noticia era mala", "el camino era largo"])
  resultado: uno_de(["se logró el éxito", "mantuvieron la esperanza", "continuaron marchando"])

respuesta: verdadero
tipo: vf

enunciado: "'Si bien {hecho}, {resultado}.' contiene una oración subordinada concesiva."

explicacion: |
  "Si bien" funciona como sinónimo de "aunque" o "a pesar de que", introduciendo una circunstancia adversa que no impide el resultado principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "pregunta_clave"]

variables:
  accion: uno_de(["Voy", "Estudio", "Corro"])
  lugar: uno_de(["al cine", "a la biblioteca", "al parque"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{accion} {lugar}', podemos preguntar '¿Para qué vas?' para identificar una idea final."

explicacion: |
  Falso. '{accion} {lugar}' no contiene ninguna subordinada final explícita: la preposición "a" indica dirección (destino), no propósito. Aunque podamos imaginar un fin implícito ("voy para ver una película"), ese fin no está presente sintácticamente en la oración, así que no hay subordinada final que identificar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

respuesta: falso
tipo: vf

enunciado: "La oración 'Voy al cine' contiene una subordinada final explícita."

explicacion: |
  "Voy al cine" es una oración simple con complemento de régimen o destino. No contiene una oración subordinada explícita introducida por "para que" o similar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "identificacion"]

variables:
  conjuncion: uno_de(["Por más que", "Aun cuando", "A pesar de"])
  dificultad: uno_de(["el ruido", "la oscuridad", "la fatiga"])
  accion: uno_de(["pudo dormir", "llegó a tiempo", "terminó"])

respuesta: verdadero
tipo: vf

enunciado: "'{conjuncion} {dificultad}, {accion}.' es una estructura de subordinada concesiva."

explicacion: |
  Las conjunciones "Por más que", "Aun cuando" y "A pesar de" introducen concesivas, indicando que la dificultad no impidió la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "que"]

variables:
  verbo_voluntad: uno_de(["Pido", "Quiero", "Mando"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo sepas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_voluntad} {sujeto2}', el 'que' introduce una oración subordinada final."

explicacion: |
  Cuando el verbo de la principal expresa voluntad, deseo o mandato, el "que" puede introducir una subordinada final (ej: "Te pido que vengas [para que vengas]"). Es un uso elíptico o directo de la final.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

variables:
  accion: uno_de(["Estudio", "Trabajo", "Ahorro"])
  fin: uno_de(["para el futuro", "para mañana", "para siempre"])

respuesta: "para el futuro"
tipo: completar

enunciado: "En '{accion} {fin}', ¿cuál es la parte que indica el fin?"

explicacion: |
  "Para el futuro" indica el propósito o meta de la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["concesiva", "ejemplo"]

variables:
  condicion: uno_de(["tenga frío", "sea tarde", "cueste dinero"])
  accion: uno_de(["iré", "lo haré", "lo compraré"])

respuesta: verdadero
tipo: vf

enunciado: "'Aunque {condicion}, {accion}.' es una oración subordinada concesiva."

explicacion: |
  "Aunque" es la conjunción concesiva por excelencia. Introduce una circunstancia que no impide la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["final", "proposito"]

variables:
  sujeto: uno_de(["El estudiante", "El trabajador", "El artista"])
  accion: uno_de(["estudia", "trabaja", "dibuja"])
  fin: uno_de(["para aprender", "para ganar", "para expresar"])

respuesta: "para aprender"
tipo: completar

enunciado: "Completa con el fin lógico: '{sujeto} {accion} {fin}.'"

explicacion: |
  Depende del contexto, pero "para aprender" es un fin común para "estudia". La pregunta pide completar con una opción válida de fin.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "subjuntivo"]

variables:
  verbo_principal: uno_de(["Quiero", "Necesito", "Exijo"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo digas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_principal} {sujeto2}', el verbo 'sujeto2' debe estar en subjuntivo porque es una subordinada final."

explicacion: |
  Las oraciones finales introducidas por "para que" o "a fin de que" (o el "que" elíptico tras verbos de voluntad) requieren el modo subjuntivo en la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "registro"]

variables:
  accion: uno_de(["Se estableció", "Se creó", "Se diseñó"])
  fin_formal: "a fin de que"
  objetivo: uno_de(["se garantice la seguridad", "se reduzca el riesgo", "se cumpla la norma"])

respuesta: "a fin de que"
tipo: completar

enunciado: "Completa con la locución final formal: '{accion} medidas {fin_formal} {objetivo}.'"

explicacion: |
  "A fin de que" es la locución conjuntiva final formal adecuada para contextos administrativos o legales.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "sinonimia"]

variables:
  esfuerzo: uno_de(["insistas", "trates", "pidas"])
  resultado: uno_de(["no lo lograrás", "no lo conseguirás", "no lo obtendrás"])

respuesta: verdadero
tipo: vf

enunciado: "'Por más que {esfuerzo}, {resultado}.' es una estructura de subordinada concesiva."

explicacion: |
  "Por más que" introduce una concesiva, indicando que el esfuerzo no garantiza el resultado o que el resultado ocurre a pesar del esfuerzo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "pregunta_clave"]

variables:
  accion: uno_de(["Voy", "Estudio", "Trabajo"])
  fin: uno_de(["al cine", "para aprender", "por dinero"])

respuesta: "para aprender"
tipo: completar

enunciado: "¿Cuál de estas opciones responde a '¿Para qué?' en el contexto de una subordinada final?"

explicacion: |
  "Para aprender" responde directamente a la pregunta de propósito. "Al cine" responde a "¿A dónde?". "Por dinero" responde a "¿Por qué?" (causa/motivo).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "que"]

variables:
  verbo_voluntad: uno_de(["Pido", "Quiero", "Mando"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo sepas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_voluntad} {sujeto2}', el 'que' introduce una oración subordinada final."

explicacion: |
  Cuando el verbo de la principal expresa voluntad, deseo o mandato, el "que" puede introducir una subordinada final (ej: "Te pido que vengas [para que vengas]"). Es un uso elíptico o directo de la final.
```

## Sección: subordinada-condicional (22 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["identificacion", "oracion_compuesta"]

variables:
  condicion: uno_de(["llueve", "hace calor", "estudian"])
  consecuencia: uno_de(["no salimos", "tomamos agua", "van al cine"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si {condicion}, {consecuencia}', la subordinada es condicional y expresa una posibilidad real."

explicacion: |
  La estructura "Si + presente de indicativo, futuro/_presente" es típica de las condicionales reales o probables.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["gramatica", "indicativo"]

variables:
  frase: "Si llueve, me quedo en casa."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es una condicional real correcta porque usa el presente de indicativo en la subordinada."

explicacion: |
  Para expresar condiciones probables o reales, se usa el presente de indicativo en la subordinada ('llueve') y presente o futuro en la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["irrealidad", "pasado"]

variables:
  frase: "Si hubiera sabido, habría venido."
  es_condicional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es una oración compuesta con subordinada condicional irreal referida al pasado."

explicacion: |
  Usa el pluscuamperfecto de subjuntivo ('hubiera sabido') en la subordinada y el condicional compuesto ('habría venido') en la principal, típico de situaciones irreales en el pasado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "No saldré a menos que termines."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es gramaticalmente correcta porque 'a menos que' exige el modo subjuntivo."

explicacion: |
  Las conjunciones condicionales negativas como "a menos que", "salvo que" o "excepto que" siempre rigen el subjuntivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["tiempos_verbales", "futuro"]

variables:
  frase: "Si iré a la playa, hará sol."
  es_correcta: falso

respuesta: falso
tipo: vf

enunciado: "La oración '{frase}' es correcta."

explicacion: |
  Es incorrecta. La subordinada introducida por "si" nunca va en futuro de indicativo; debe ir en presente: "Si hace sol, iré a la playa" (no "Si iré a la playa, hará sol").
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["sintaxis", "orden"]

variables:
  frase: "No iremos si no llueve."
  es_condicional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{frase}', la subordinada condicional puede ir al final de la oración principal."

explicacion: |
  Las oraciones subordinadas condicionales pueden ir antes o después de la principal sin cambiar el significado lógico.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "Iremos al cine salvo que tengas otra cosa que hacer."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta porque 'salvo que' rige el subjuntivo."

explicacion: |
  "Salvo que" es una conjunción condicional negativa que exige el modo subjuntivo en la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "registro_formal"]

variables:
  frase: "En caso de que llueva, llevamos paraguas."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta en registro formal."

explicacion: |
  "En caso de que" es una conjunción condicional formal que rige el subjuntivo ("llueva"). Es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "No vendré a no ser que me inviten."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta porque 'a no ser que' rige el subjuntivo."

explicacion: |
  "A no ser que" es una conjunción condicional negativa que exige el modo subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["identificacion", "si"]

variables:
  sujeto: uno_de(["Juan", "María", "El equipo", "Nosotros"])
  verbo1: uno_de(["llueva", "haga", "tenga", "venga"])
  verbo2: uno_de(["iremos", "comeremos", "saliremos", "caminaremos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si {verbo1}, {sujeto} {verbo2}', la cláusula 'Si {verbo1}' es una subordinada condicional."

explicacion: |
  La cláusula introducida por "si" establece una condición para la acción principal, por lo que funciona como subordinada condicional.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["concordancia", "indicativo"]

variables:
  a: random(1, 5)
  b: random(6, 10)
  condicion: "real"

respuesta: "llueve"
tipo: input

enunciado: "Completa la oración con la forma verbal correcta para expresar una condición probable: 'Si ______ (llover), no saldremos al parque'."

explicacion: |
  Para situaciones reales o probables, se usa el presente de indicativo en la subordinada ("llueve") y el futuro en la principal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["sintaxis", "complemento"]

variables:
  verbo_principal: uno_de(["ir", "venir", "comer", "dormir"])

respuesta: "complemento circunstancial de condición"
tipo: input

enunciado: "En la oración 'No iré si no llamas', la subordinada 'si no llamas' funciona sintácticamente como un/a..."

explicacion: |
  La subordinada condicional actúa como complemento circunstancial de condición del verbo de la oración principal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["hipotesis", "subjuntivo"]

variables:
  sujeto: uno_de(["Yo", "Él", "Tú", "Ella"])
  verbo_irreal: "tuviera"

respuesta: "hipotética"
tipo: input

enunciado: "Clasifica la realidad de la oración: 'Si {sujeto} {verbo_irreal} tiempo, estudiaría más'. ¿Es real, probable o hipotética/irreal?"

explicacion: |
  El uso del imperfecto de subjuntivo en la condicional y condicional simple en la principal indica una situación hipotética o irreal en el presente.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["estructura", "puntuacion"]

variables:
  cond: "Si estudias mucho"
  conse: "aprobarás el examen"

respuesta: verdadero
tipo: vf

enunciado: "En español, es correcto invertir el orden: 'Aprobarás el examen si estudias mucho' sin cambiar el significado ni la gramática."

explicacion: |
  La subordinada condicional puede ir antes o después de la principal. Si va al principio, lleva coma; si va al final, no la lleva.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["tiempos", "indicativo"]

variables:
  a: random(1, 10)
  b: random(11, 20)
  tiempo_sub: "presente"
  tiempo_main: "futuro"

respuesta: "presente"
tipo: input

enunciado: "Para expresar una condición probable en el futuro, ¿qué tiempo verbal se usa en la subordinada con 'si'? 'Si ______ (verbo), iré'."

explicacion: |
  En condiciones probables, la subordinada usa el presente de indicativo, aunque se refiera al futuro.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["matiz", "exclusion"]

variables:
  contexto: "negativo"

respuesta: "exclusión"
tipo: input

enunciado: "La conjunción 'a menos que' introduce una subordinada condicional con matiz de..."

explicacion: |
  "A menos que" implica una excepción o condición negativa: la acción principal no ocurrirá salvo que se cumpla la condición.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["error", "subjuntivo"]

variables:
  verbo_erroneo: "tendré"
  verbo_correcto: "tenga"

respuesta: "tenga"
tipo: input

enunciado: "Corrige el verbo en la oración irreal: 'Si yo ______ (tener) suerte, ganaría la lotería'."

explicacion: |
  Para situaciones irreales, la subordinada requiere pretérito imperfecto de subjuntivo ('tuviera' o 'tuviese'), no futuro ni presente.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["condicion", "requisito"]

variables:
  requisito: "vengas"

respuesta: verdadero
tipo: vf

enunciado: "'Con tal de que' introduce una condición necesaria o requisito indispensable. 'Iré con tal de que vengas' es correcta."

explicacion: |
  "Con tal de que" exige el cumplimiento de la condición para que se realice la acción principal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["sinonimia", "paráfrasis"]

variables:
  original: "Si no comes, tendrás hambre"
  equivalente: "A menos que comas, tendrás hambre"

respuesta: verdadero
tipo: vf

enunciado: "La oración 'A menos que comas, tendrás hambre' tiene el mismo significado lógico que 'Si no comes, tendrás hambre'."

explicacion: |
  Ambas expresan la misma condición negativa. "A menos que" equivale a "si no".
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["pasado", "irreal"]

variables:
  verbo_sub: "hubiera tenido"
  verbo_main: "habría viajado"

respuesta: "irreal del pasado"
tipo: input

enunciado: "Clasifica: 'Si hubiera tenido tiempo, habría viajado'. ¿Qué tipo de realidad expresa?"

explicacion: |
  Expresa una condición irreal en el pasado (no se cumplió) y su consecuencia hipotética también en el pasado.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["comparacion", "indicativo_vs_subjuntivo"]

variables:
  indicativo: "Si llueve, me mojo"
  subjuntivo: "Si lloviera, me mojaría"

respuesta: "probable"
tipo: input

enunciado: "¿Qué tipo de realidad expresa 'Si llueve, me mojo' en comparación con 'Si lloviera...'?"

explicacion: |
  'Si llueve' (indicativo) expresa probabilidad. 'Si lloviera' (subjuntivo) expresa hipótesis o irrealidad.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["variantes", "subjuntivo"]

variables:
  forma1: "hubiera"
  forma2: "hubiese"

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si hubiese llovido, no habríamos salido', el uso de 'hubiese' es correcto y equivalente a 'hubiera'."

explicacion: |
  Ambas formas del pretérito pluscuamperfecto de subjuntivo son válidas en español.
```

## Sección: subordinada-consecutiva (45 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "correlato"]

variables:
  adjetivo: uno_de(["cansado", "contento", "enfadado", "sorprendido"])
  consecuencia: uno_de(["no pudo dormir", "lloró de alegría", "gritó", "se quedó mudo"])

respuesta: "tan"
tipo: completar

enunciado: "Ella estaba {adjetivo} ___ que {consecuencia}."

explicacion: |
  La estructura "tan + adjetivo + que" introduce una subordinada consecutiva que expresa el resultado de un grado intenso de la cualidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  base: random(10, 50)
  incremento: random(5, 20)
  total: base + incremento

respuesta: total
tipo: input

enunciado: "Si tengo {base} manzanas y compro {incremento} más, tengo tanta fruta que me alcanza para hacer {total} pasteles. ¿Cuántas manzanas tengo en total?"

explicacion: |
  {base} + {incremento} = {total}. La estructura consecutiva es "tanta fruta que...": 'tanta' concuerda en género femenino con 'fruta', y 'que' introduce la consecuencia (la cantidad de pasteles que permite hacer).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "conjuncion"]

variables:
  causa: uno_de(["El ruido era ensordecedor", "Llovió sin parar", "El examen fue muy largo"])
  efecto: uno_de(["salimos al patio", "nos quedamos adentro", "todos se cansaron"])

respuesta: "que"
tipo: completar

enunciado: "{causa}, ___ {efecto}."

explicacion: |
  La conjunción "que" es el nexo principal que introduce la subordinada consecutiva en este tipo de estructuras correlativas.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "logica"]

variables:
  grado: random(1, 5)
  sustantivo: uno_de(["paciencia", "dinero", "tiempo", "paciencia"])
  
  # Lógica simple para generar la respuesta basada en el grado
  # Si grado es 1->3: consecuencia leve, 4-5: consecuencia fuerte
  # Para simplificar el DSL, usamos una variable predefinida de consecuencia
  consecuencia_leve: "poco a poco"
  consecuencia_fuerte: "rápidamente"

respuesta: "que"
tipo: completar

enunciado: "Tiene {sustantivo} ___ {consecuencia_leve} (si grado <= 3) o ___ {consecuencia_fuerte} (si grado > 3)."

explicacion: |
  Independientemente de la consecuencia, el nexo que introduce la subordinada consecutiva es "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "estructura"]

variables:
  correlato: uno_de(["tan", "tanto", "tal"])
  sustantivo: uno_de(["casa", "coche", "libro", "mesa"])

respuesta: "tal"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "cuanto"]

enunciado: "Si queremos enfatizar la naturaleza del sustantivo '{sustantivo}' en una consecutiva, usamos '___ + {sustantivo} + que'. ¿Cuál es el correlato?"

explicacion: |
  "Tal" se usa ante sustantivos para enfatizar la cualidad o naturaleza del mismo, seguido de "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "analisis"]

variables:
  principal: uno_de(["El frío era intenso", "La noticia fue terrible", "El trabajo era pesado"])
  subordinada: uno_de(["que temblaba", "que lloró", "que se rindió"])

respuesta: principal
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la oración principal?"

explicacion: |
  La oración principal contiene el correlato gradativo (el grado intenso) y es la causa de la consecuencia. Aquí, "El frío era intenso" es la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  x: random(2, 10)
  resultado: x * 2

respuesta: resultado
tipo: input

enunciado: "Si 'tanto' equivale a {x} y la consecuencia es el doble, ¿cuánto es el resultado? (Escribe solo el número)."

explicacion: |
  Ejercicio que vincula la lógica matemática con la estructura "tanto... que" para verificar la comprensión de la relación de proporcionalidad en la consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "sintaxis"]

variables:
  funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Consecuencia", "Atributo", "Sujeto"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La subordinada consecutiva funciona sintácticamente como un '{funcion}' de la oración principal."

explicacion: |
  La subordinada consecutiva funciona como un Complemento Circunstancial de Consecuencia (o Atributo en casos específicos con 'ser', pero generalmente CC). Si la opción es CD, Atributo o Sujeto, es falso.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "vocabulario"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  sust: uno_de(["alumnos", "libros", "tiempo", "paciencia"])

respuesta: "tan"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "mucho"]

enunciado: "El examen fue ___ {adj} que {sust} abandonaron. ¿Qué palabra falta?"

explicacion: |
  "Tan" se usa con adjetivos o adverbios. Como "{adj}" es un adjetivo, la forma correcta es "tan".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "identificacion"]

variables:
  principal: uno_de(["Estaba tan cansado", "Tenía tanto sueño", "Fue tal el ruido"])
  subordinada: uno_de(["que no pude estudiar", "que me dormí", "que salí corriendo"])

respuesta: subordinada
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la subordinada consecutiva?"

explicacion: |
  La subordinada consecutiva es la parte que expresa la consecuencia, introducida por "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "grado"]

variables:
  base: random(100, 200)
  porcentaje: random(10, 50)
  resultado: floor(base * porcentaje / 100)

respuesta: resultado
tipo: input

enunciado: "Si el grado es {base} y la consecuencia es el {porcentaje}% de ese grado, ¿cuánto es el resultado? (Redondea al entero más cercano)."

explicacion: |
  Ejercicio que refuerza la idea de que la consecutiva implica una medida o resultado derivado del grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "nexo"]

variables:
  estructura: uno_de(["tan... que", "tanto... que", "tal... que"])

respuesta: "que"
tipo: mc
opciones_explicitas: ["porque", "que", "si", "cuando"]

enunciado: "En la estructura '{estructura}', ¿cuál es la conjunción que introduce la consecutiva?"

explicacion: |
  La conjunción es "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "tal"]

variables:
  sust: uno_de(["sorpresa", "alegría", "tristeza", "ira"])
  accion: uno_de(["se le cayó el celular", "no podía hablar", "corrió hacia la salida", "se abrazaron"])

respuesta: "tal"
tipo: completar

enunciado: "Fue {sust} ___ que {accion}."

explicacion: |
  "Tal" se usa con sustantivos para enfatizar la naturaleza del hecho, seguido de "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  x: random(5, 15)
  resultado: x + 10

respuesta: resultado
tipo: input

enunciado: "Si 'tanto' equivale a {x} y la consecuencia es {x} + 10, ¿cuánto es el resultado? (Escribe solo el número)."

explicacion: |
  Ejercicio que vincula la lógica matemática con la estructura "tanto... que" para verificar la comprensión de la relación de proporcionalidad en la consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "vocabulario"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  sust: uno_de(["alumnos", "libros", "tiempo", "paciencia"])

respuesta: "tan"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "mucho"]

enunciado: "El examen fue ___ {adj} que {sust} abandonaron. ¿Qué palabra falta?"

explicacion: |
  "Tan" se usa con adjetivos o adverbios. Como "{adj}" es un adjetivo, la forma correcta es "tan".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "identificacion"]

variables:
  principal: uno_de(["Estaba tan cansado", "Tenía tanto sueño", "Fue tal el ruido"])
  subordinada: uno_de(["que no pude estudiar", "que me dormí", "que salí corriendo"])

respuesta: subordinada
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la subordinada consecutiva?"

explicacion: |
  La subordinada consecutiva es la parte que expresa la consecuencia, introducida por "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "grado"]

variables:
  base: random(100, 200)
  porcentaje: random(10, 50)
  resultado: floor(base * porcentaje / 100)

respuesta: resultado
tipo: input

enunciado: "Si el grado es {base} y la consecuencia es el {porcentaje}% de ese grado, ¿cuánto es el resultado? (Redondea al entero más cercano)."

explicacion: |
  Ejercicio que refuerza la idea de que la consecutiva implica una medida o resultado derivado del grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "nexo"]

variables:
  estructura: uno_de(["tan... que", "tanto... que", "tal... que"])

respuesta: "que"
tipo: mc
opciones_explicitas: ["porque", "que", "si", "cuando"]

enunciado: "En la estructura '{estructura}', ¿cuál es la conjunción que introduce la consecutiva?"

explicacion: |
  La conjunción es "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tan_que"]

variables:
  adjetivo: uno_de(["rápido", "lento", "fuerte", "débil"])
  consecuencia: uno_de(["se cansó", "llegó tarde", "ganó la carrera", "perdió el tren"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Corrió tan {adjetivo} que {consecuencia}', la parte subrayada es una subordinada consecutiva."

explicacion: |
  La estructura 'tan + adjetivo/adverbio + que' introduce una consecuencia directa del grado expresado en la principal. Por lo tanto, la afirmación es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["correlato", "tanto_que"]

variables:
  sustantivo: uno_de(["miedo", "ganas", "tiempo", "dinero"])
  cantidad: random(5, 20)

respuesta: "tanto"
tipo: completar

enunciado: "Tenía ___ {cantidad} {sustantivo} que no podía dormir. ¿Qué palabra falta para formar la consecutiva?"

explicacion: |
  La estructura correcta es 'tanto + sustantivo + que'. 'Tanto' concuerda en género y número con el sustantivo 'miedo' (masculino singular) o se usa invariablemente como adverbio de cantidad antes del sustantivo en esta construcción específica de grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["diferenciacion", "comparativa_vs_consecutiva"]

variables:
  a: random_float(1.0, 9.9)
  b: random_float(1.0, 9.9)

respuesta: falso
tipo: vf

enunciado: "Si en una oración se usa 'más... que' para igualar dos términos, estamos ante una subordinada consecutiva."

explicacion: |
  'Más... que' suele introducir una comparativa de igualdad o superioridad. La consecutiva requiere un correlato de grado (tan, tanto, tal) seguido de 'que' que indica RESULTADO, no comparación directa entre dos términos equivalentes.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tal_que"]

variables:
  sustantivo: uno_de(["sorpresa", "alegría", "tristeza", "ira"])
  efecto: uno_de(["se cayó", "lloró", "sonrió", "gritó"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Fue tal su {sustantivo} que se {efecto}', la cláusula final es consecutiva."

explicacion: |
  La estructura 'tal + sustantivo + que' indica que la intensidad de la causa provocó un efecto inevitable. Es una subordinada consecutiva clásica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tan_que"]

variables:
  sujeto: uno_de(["El niño", "La profesora", "El perro", "El coche"])
  adjetivo: uno_de(["intenso", "fuerte", "agudo", "molesto"])
  resultado: uno_de(["tembló", "sudó", "huyó", "paró"])

respuesta: "tan"
tipo: completar

enunciado: "El ruido fue ___ {adjetivo} que el perro se {resultado}. ¿Qué correlato falta?"

explicacion: |
  '{adjetivo}' es un adjetivo que cualifica a 'ruido' (el sustantivo 'ruido' ya está en la oración; lo que falta es el correlato antes del adjetivo). Como el hueco precede a un adjetivo, se usa 'tan' (no 'tanto', que se usaría directamente ante el sustantivo: 'Hizo tanto ruido que...').
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["analisis", "tanto_que"]

variables:
  sustantivo: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  resultado: uno_de(["se rindió", "lo logró", "lo abandonó", "lo disfrutó"])

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sustantivo} que al final lo {resultado}. ¿Qué palabra completa la consecutiva?"

explicacion: |
  Cuando el correlato va seguido de un sustantivo que indica cantidad, se utiliza 'tanto'. 'Tanto trabajo' implica una cantidad tal que provoca el resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["logica", "inferencia"]

variables:
  causa: uno_de(["llovió mucho", "hizo mucho frío", "comió rápido", "durmió poco"])
  efecto: uno_de(["se inundó la calle", "hubo hielo", "le dio indigestión", "estaba cansado"])

respuesta: verdadero
tipo: vf

enunciado: "Si 'Llovió tanto que se inundó la calle' es consecutiva, entonces 'Llovió mucho y se inundó la calle' es una coordinación copulativa."

explicacion: |
  La primera oración tiene una relación de causa-efecto interna (consecutiva). La segunda une dos hechos con 'y', siendo una coordinación copulativa que no implica necesariamente la misma intensidad causal, aunque los hechos sean similares. La afirmación sobre la clasificación gramatical es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["diferenciacion", "tal_vs_tanto"]

variables:
  sust: uno_de(["miedo", "temor"])
  corr_tanto: "tanto"
  corr_tal: "tal"

respuesta: "tal"
tipo: completar

enunciado: "Fue ___ su {sust} que se paralizó. ¿Es más adecuado 'tanto' o 'tal' para enfatizar la naturaleza del sentimiento?"

explicacion: |
  'Tal' se usa a menudo con sustantivos abstractos para enfatizar la intensidad o la naturaleza del estado (sorpresa, miedo, admiración), aunque 'tanto' también es posible. En contextos literarios o enfáticos, 'tal' es muy común para 'sorpresa' o 'miedo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["nexo", "que"]

variables:
  nexo: "que"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la conjunción 'que' es obligatoria para introducir la consecuencia."

explicacion: |
  Sí, la estructura básica de la consecutiva requiere un correlato (tan, tanto, tal) seguido de la conjunción 'que' que introduce la cláusula de resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tanto_que"]

variables:
  sust: uno_de(["fuerza", "energía", "paciencia", "paciencia"])
  resultado: uno_de(["llegó al final", "se agotó", "ganó", "perdió"])

respuesta: "tanto"
tipo: completar

enunciado: "Tuvo ___ {sust} para {resultado}. ¿Qué correlato falta?"

explicacion: |
  'Tanto' es el correlato adecuado cuando va seguido de un sustantivo que indica cantidad o grado de una cualidad medible.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "analisis_sintactico"]

variables:
  oracion: uno_de(["Está tan cansado que duerme", "Es tan alto como su padre", "Corrió más rápido que tú"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Está tan cansado que duerme' contiene una subordinada consecutiva."

explicacion: |
  La estructura 'tan + adjetivo + que' introduce una consecuencia. 'Que duerme' es la subordinada consecutiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["analisis", "grado"]

variables:
  adj: uno_de(["rápido", "lento", "fuerte", "débil"])
  corr: "tan"

respuesta: "tan"
tipo: completar

enunciado: "El coche es ___ {adj} que llega primero. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adjetivos y adverbios para expresar un grado intenso que provoca un resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tal_que"]

variables:
  sust: uno_de(["alegría", "tristeza", "ira", "paz"])
  resultado: uno_de(["sonrió", "lloró", "gritó", "calló"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Fue tal su {sust} que {resultado}', la oración es consecutiva."

explicacion: |
  La estructura 'tal + sustantivo + que' es una forma clásica de subordinada consecutiva, indicando que la intensidad del sentimiento provocó la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "causal_vs_consecutiva"]

variables:
  causa: "lluvia"
  efecto: "inundación"

respuesta: falso
tipo: vf

enunciado: "La oración 'Como llovió mucho, se inundó la calle' es una subordinada consecutiva."

explicacion: |
  'Como' introduce una subordinada causal (explica la causa). La consecutiva expresa el RESULTADO de la principal, no la causa. La oración dada es una oración compuesta con subordinada causal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "adverbio"]

variables:
  adv: uno_de(["rápidamente", "lentamente", "bien", "mal"])
  resultado: uno_de(["terminó primero", "se equivocó", "ganó", "perdió"])

respuesta: "tan"
tipo: completar

enunciado: "Corrió ___ {adv} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adverbios (como 'rápidamente') para indicar un grado que provoca una consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sust} que lo logró. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato correcto antes de un sustantivo que indica cantidad o grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["logica", "relacion"]

variables:
  causa: "temor"
  efecto: "parálisis"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la oración principal expresa la causa o el grado, y la subordinada expresa la consecuencia."

explicacion: |
  Correcto. La consecutiva depende de un correlato de grado en la principal para expresar un resultado inevitable.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tal_que"]

variables:
  sust: uno_de(["sorpresa", "admiración", "miedo", "ira"])
  resultado: uno_de(["se quedó mudo", "aplaudieron", "huyó", "gritó"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Fue tal su {sust} que {resultado}' es consecutiva."

explicacion: |
  Sí, 'tal' funciona como correlato de grado para sustantivos, introduciendo una consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["produccion", "adjetivo"]

variables:
  adj: uno_de(["alto", "bajo", "ancho", "estrecho"])
  resultado: uno_de(["lo veía", "no lo veía", "lo tocaba", "lo perdía"])

respuesta: "tan"
tipo: completar

enunciado: "El muro es ___ {adj} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adjetivos para expresar un grado que provoca una consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "final_vs_consecutiva"]

variables:
  fin: "para"
  consecutiva: "que"

respuesta: falso
tipo: vf

enunciado: "La oración 'Estudié tanto que aprobé' es una subordinada final."

explicacion: |
  'Aprobé' es el RESULTADO (consecutiva), no el propósito (final). Las finales suelen usar 'para que' o 'a fin de que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["tiempo", "dinero", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Tenía ___ {sust} que lo gasté todo. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato adecuado antes de sustantivos que indican cantidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["estructura", "tan_que"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  resultado: uno_de(["no lo entendió", "lo resolvió", "lo leyó", "lo escribió"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El examen fue tan {adj} que {resultado}', la subordinada es consecutiva."

explicacion: |
  Sí, la estructura 'tan + adj + que' introduce una consecuencia directa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tal_que"]

variables:
  sust: uno_de(["alegría", "tristeza", "ira", "paz"])
  resultado: uno_de(["sonrió", "lloró", "gritó", "calló"])

respuesta: "tal"
tipo: completar

enunciado: "Fue ___ su {sust} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tal' es el correlato adecuado para sustantivos abstractos que enfatizan la intensidad del estado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "adverbio"]

variables:
  adv: uno_de(["rápidamente", "lentamente", "bien", "mal"])
  resultado: uno_de(["terminó primero", "se equivocó", "ganó", "perdió"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Corrió tan {adv} que {resultado}' es consecutiva."

explicacion: |
  Sí, 'tan' con adverbios introduce una consecutiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "comparativa_vs_consecutiva"]

variables:
  comparativa: "más... que"
  consecutiva: "tan... que"

respuesta: falso
tipo: vf

enunciado: "La oración 'Es tan alto como su padre' es una subordinada consecutiva."

explicacion: |
  'Tan... como' es una comparativa de igualdad. La consecutiva usa 'tan... que' para indicar resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sust} que lo logró. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato correcto antes de sustantivos que indican cantidad o grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["logica", "relacion"]

variables:
  causa: "temor"
  efecto: "parálisis"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la oración principal expresa la causa o el grado, y la subordinada expresa la consecuencia."

explicacion: |
  Correcto. La consecutiva depende de un correlato de grado en la principal para expresar un resultado inevitable.
```

## Sección: subordinada-sustantiva-de-complemento-circunstancial (22 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["definicion", "sustitucion"]

variables:
  op_a: "por un adverbio simple, como 'entonces'"
  op_b: "por una preposición más un pronombre demostrativo, como 'por eso'"
  op_c: "por el pronombre 'lo' sin preposición"
  op_d: "por otro sustantivo cualquiera"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Una subordinada sustantiva de complemento circunstancial (de causa, finalidad, condición o concesión) se reconoce porque puede sustituirse..."

explicacion: |
  Se sustituye por "preposición + eso/ello" ('por eso', 'para eso', 'a pesar de eso'), no por un adverbio simple. Esa sustitución nominal es la prueba de que, aunque cumpla un papel circunstancial, es sintácticamente una sustantiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["causa", "sustitucion"]

variables:
  causa: uno_de(["comió mal", "no durmió bien", "tomó frío"])

respuesta: "por eso"
tipo: completar

enunciado: "'Se enfermó porque {causa}' se puede parafrasear como 'Se enfermó ___'."

explicacion: |
  La subordinada de causa se sustituye por 'por eso', confirmando que es una sustantiva de CC de causa, no un adverbio.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["finalidad", "sustitucion"]

variables:
  objetivo: uno_de(["aprobaran todos", "nadie se quejara", "el equipo mejorara"])

respuesta: "para eso"
tipo: completar

enunciado: "'El profesor explicó de nuevo para que {objetivo}' se puede parafrasear como 'El profesor explicó de nuevo ___'."

explicacion: |
  La subordinada de finalidad se sustituye por 'para eso'. Esa sustitución con preposición + pronombre demostrativo (no un adverbio) revela su naturaleza sustantiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["distincion", "regimen"]

variables:
  op_a: "La preposición del CC tiene un significado circunstancial propio (causa, fin); la del CR es una exigencia arbitraria del verbo, sin ese significado."
  op_b: "No hay ninguna diferencia real entre CC y CR."
  op_c: "El CR siempre lleva la preposición 'para' y el CC siempre 'de'."
  op_d: "El CC nunca lleva preposición y el CR siempre sí."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál es la diferencia real entre una subordinada sustantiva de CC y una de complemento de régimen (CR)?"

explicacion: |
  En el CR ('insisto EN que vayas', 'me arrepiento DE haber mentido') la preposición es una exigencia fija del verbo, sin aportar significado circunstancial. En el CC ('lo hizo POR que lo despidieran') la preposición sí expresa una circunstancia real (causa, fin, etc.).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["regimen", "identificacion"]

variables:
  verbo_regimen: uno_de(["Insisto en", "Confío en", "Me arrepiento de"])
  subordinada: uno_de(["que vayas", "que ganes", "haber mentido"])

respuesta: falso
tipo: vf

enunciado: "En '{verbo_regimen} {subordinada}', la preposición aporta un significado circunstancial de causa o finalidad, por lo que es una subordinada sustantiva de CC."

explicacion: |
  Falso. Verbos como 'insistir en', 'confiar en' o 'arrepentirse de' exigen esa preposición de forma fija, sin que aporte significado circunstancial: es un complemento de régimen (CR), no un CC.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["condicion", "identificacion"]

variables:
  condicion: uno_de(["me invitan", "hay lugar", "llueve"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Vendré si {condicion}', la subordinada 'si {condicion}' puede analizarse como una sustantiva en función de complemento circunstancial de condición."

explicacion: |
  Correcto. La gramática moderna reanaliza las tradicionales 'adverbiales de condición' como sustantivas de CC de condición, ya que no se sustituyen por un adverbio simple sino por una expresión equivalente a 'en ese caso'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["concesion", "sustitucion"]

variables:
  obstaculo: uno_de(["llueva", "haga frío", "esté cansado"])

respuesta: "a pesar de eso"
tipo: completar

enunciado: "'Iremos al partido aunque {obstaculo}' se puede parafrasear como 'Iremos al partido ___'."

explicacion: |
  La subordinada de concesión se sustituye por 'a pesar de eso', mostrando que se comporta como una sustantiva con preposición, no como un adverbio simple.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["distincion", "adverbial_genuina"]

variables:
  lugar: uno_de(["nació", "vivió de chico", "estudió"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Volvió a donde {lugar}', la subordinada se sustituye por un adverbio simple ('allí'), por lo que es una adverbial de lugar genuina y NO una sustantiva de CC."

explicacion: |
  Correcto. 'Volvió allí' funciona con un adverbio simple, sin necesidad de preposición + pronombre demostrativo. Eso la distingue de las sustantivas de CC de causa/fin/condición/concesión.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["causa", "prueba"]

variables:
  causa: uno_de(["se cortó la luz", "hubo una huelga", "llovió mucho"])

respuesta: falso
tipo: vf

enunciado: "En 'No pudimos entrar porque {causa}', la subordinada 'porque {causa}' se sustituye mejor por el adverbio 'entonces' que por 'por eso'."

explicacion: |
  Falso. Se sustituye naturalmente por 'por eso' ('No pudimos entrar por eso'), no por 'entonces'. Esa sustitución con preposición + pronombre es justamente la prueba de que es una subordinada sustantiva, no una adverbial genuina.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["finalidad", "identificacion"]

variables:
  op_a: "Causa"
  op_b: "Finalidad"
  op_c: "Condición"
  op_d: "Concesión"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "En 'Bajaron los impuestos para que bajara la inflación', ¿qué tipo de circunstancia expresa la subordinada sustantiva de CC?"

explicacion: |
  Expresa finalidad: el propósito de bajar los impuestos era que bajara la inflación. Se sustituye por 'para eso'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["regimen_vs_cc", "identificacion"]

variables:
  frase: uno_de(["Confío en que ganes", "Insisto en que vengas"])

respuesta: falso
tipo: vf

enunciado: "En '{frase}', la preposición que acompaña a 'que' expresa una circunstancia de causa o finalidad (CC), y no una exigencia fija del verbo (CR)."

explicacion: |
  Falso. 'Confiar en' e 'insistir en' rigen la preposición 'en' de forma fija y arbitraria, sin significado circunstancial propio: es complemento de régimen (CR), no CC.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["repaso", "funciones"]

variables:
  op_a: "Sujeto, complemento directo, atributo y complemento de régimen."
  op_b: "Solo complemento directo."
  op_c: "Solo sujeto y atributo."
  op_d: "Ninguna otra función; el CC es la única posible."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Además de complemento circunstancial, ¿qué otras funciones puede cumplir una subordinada sustantiva?"

explicacion: |
  Puede ser sujeto ('Que llueva molesta'), complemento directo ('Quiero que vengas'), atributo ('El problema es que no hay tiempo') o complemento de régimen ('Me arrepiento de haber mentido'), además de CC.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["condicion", "sustitucion"]

variables:
  condicion: uno_de(["estudias", "practicás todos los días", "pedís ayuda"])

respuesta: "en ese caso"
tipo: completar

enunciado: "'Aprobarás si {condicion}' se puede parafrasear como 'Aprobarás ___'."

explicacion: |
  La subordinada condicional se parafrasea como 'en ese caso', una expresión nominal (preposición + pronombre), coherente con su análisis como sustantiva de CC de condición.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["distincion", "adverbial_genuina"]

variables:
  modo: uno_de(["mejor pudo", "quiso", "le pareció correcto"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Lo hizo como {modo}', la subordinada se sustituye por el adverbio 'así', por lo que es una adverbial de modo genuina, distinta de las sustantivas de CC vistas en este tema."

explicacion: |
  Correcto. 'Lo hizo así' usa un adverbio simple. Esto la distingue de las subordinadas de causa/finalidad/condición/concesión, que se sustituyen por preposición + pronombre ('por eso', 'para eso').
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["concesion", "identificacion"]

variables:
  obstaculo: uno_de(["el equipo estaba cansado", "el clima era malo", "faltaba tiempo"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El técnico cambió la formación aunque {obstaculo}', la subordinada concesiva puede analizarse como sustantiva de CC, sustituible por 'a pesar de eso'."

explicacion: |
  Correcto. Es sustituible por 'a pesar de eso' (preposición + pronombre), lo que confirma su naturaleza sustantiva pese a expresar una circunstancia (concesión).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["causa", "identificacion"]

variables:
  op_a: "Causa"
  op_b: "Lugar"
  op_c: "Sujeto"
  op_d: "Complemento directo"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "En 'No fuimos a la cancha porque se suspendió el partido', ¿qué tipo de circunstancia expresa la subordinada?"

explicacion: |
  Expresa causa ('se sustituye por 'por eso''). Es una subordinada sustantiva de CC de causa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["regimen", "prueba"]

variables:
  verbo: uno_de(["insistir", "confiar", "arrepentirse"])

respuesta: falso
tipo: vf

enunciado: "El verbo '{verbo}' exige una preposición que aporta un significado circunstancial (causa, finalidad, etc.), por lo que su complemento es un CC."

explicacion: |
  Falso. Estos verbos exigen su preposición ('en' o 'de') de forma arbitraria, sin significado circunstancial propio: su complemento es de régimen (CR), no CC.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["repaso", "distincion"]

variables:
  op_a: "Se sustituye por preposición + 'eso' (CC de causa/fin/condición/concesión) o por adverbio simple (adverbial genuina de tiempo/lugar/modo)."
  op_b: "Ambas se sustituyen siempre por 'lo', sin diferencia posible."
  op_c: "La adverbial genuina siempre lleva 'que' y la sustantiva de CC nunca."
  op_d: "No existe ninguna diferencia entre ambas categorías."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cómo se distingue una subordinada sustantiva de CC de una adverbial genuina (de tiempo, lugar o modo)?"

explicacion: |
  La prueba de sustitución es la clave: la sustantiva de CC se reemplaza por preposición + 'eso' ('por eso', 'para eso'); la adverbial genuina se reemplaza por un adverbio simple ('entonces', 'allí', 'así').
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["finalidad", "sustitucion"]

variables:
  fin: uno_de(["nadie se lastimara", "todos entendieran", "el proyecto avanzara"])

respuesta: falso
tipo: vf

enunciado: "En 'Organizó todo para que {fin}', la subordinada se sustituye mejor por el adverbio 'así' que por 'para eso'."

explicacion: |
  Falso. Se sustituye naturalmente por 'para eso', no por 'así'. Esa sustitución nominal confirma que es sustantiva de CC de finalidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["sintesis", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las subordinadas de causa, finalidad, condición y concesión comparten el rasgo de sustituirse por una preposición más un pronombre demostrativo, lo que justifica analizarlas como sustantivas de complemento circunstancial."

explicacion: |
  Correcto. 'Por eso' (causa), 'para eso' (finalidad), 'en ese caso' (condición) y 'a pesar de eso' (concesión) son todas construcciones nominales, no adverbios simples — de ahí su clasificación como sustantivas de CC.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["regimen", "distincion"]

variables:
  verbo_cr: uno_de(["Me arrepiento de", "Confío en", "Insisto en"])

respuesta: "complemento de régimen"
tipo: completar

enunciado: "'{verbo_cr} que vengas' — la parte introducida por la preposición funciona como:"

explicacion: |
  Es complemento de régimen (CR): la preposición es exigida arbitrariamente por el verbo, sin aportar un significado circunstancial de causa, fin, condición o concesión.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["condicion", "clasificacion"]

variables:
  op_a: "Complemento circunstancial de condición"
  op_b: "Complemento directo"
  op_c: "Sujeto"
  op_d: "Complemento de régimen"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "En 'Aprobarás si estudiás', ¿qué función cumple la subordinada 'si estudiás', según el análisis moderno?"

explicacion: |
  Cumple la función de complemento circunstancial de condición: se parafrasea como 'en ese caso', una construcción nominal.
```

## Sección: subordinada-sustantiva-de-complemento-de-regimen (22 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "identificacion"]

variables:
  verbo_base: uno_de(["pensar", "confiar", "olvidarse", "acordarse"])
  prep: uno_de(["en", "en", "en"])
  nexo: uno_de(["que", "si"])
  contenido: uno_de(["el éxito", "la verdad", "lo correcto"])

respuesta: prep + " " + nexo
tipo: input

enunciado: "En la oración 'El docente {verbo_base} {prep}{nexo} {contenido}', ¿cuál es la secuencia preposición-nexo que introduce la subordinada?"

explicacion: |
  Los verbos como 'pensar', 'confiar' o 'olvidarse' rigen preposiciones específicas ('en', 'de', 'por'). Cuando el complemento es una oración, la preposición se mantiene antes del nexo (que/si).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "de"
  prep_distractor1: "en"
  prep_distractor2: "a"
  prep_distractor3: "por"

respuesta: "de"
tipo: mc

enunciado: "¿Qué preposición rige correctamente el verbo 'depender' en la oración 'Todo depende ___ que llegues a tiempo'?"
opciones_explicitas: ["en", "a", "de", "por"]

explicacion: |
  El verbo 'depender' rige el régimen preposicional 'de'. Por lo tanto, la forma correcta es 'depende de que...'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "completar", "preposicion"]

variables:
  sujeto: uno_de(["el equipo", "los alumnos", "la directiva", "el gobierno"])

respuesta: "en"
tipo: completar

enunciado: "Completa la oración: '{sujeto} insiste ___ que se apruebe el presupuesto.' (Escribe solo la preposición)."
respuestas_validas:
  - "en"

explicacion: |
  'Insistir' rige la preposición 'en': '{sujeto} insiste en que se apruebe el presupuesto'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "funcion_sintactica", "nexo"]

variables:
  prep: "en"
  nexo: "que"
  verbo: "confiar"
  sujeto: "nosotros"

respuesta: "conjuncional"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} lo logremos', ¿qué función sintáctica cumple el nexo '{nexo}' dentro de la subordinada?"

explicacion: |
  En las subordinadas sustantivas introducidas por 'que', este nexo cumple la función de conjunción integrante o nexo subordinante, conectando la proposición principal con la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_origen: "en"
  verbo_origen: "pensar"
  prep_destino: "de"
  verbo_destino: "olvidar"

respuesta: "de"
tipo: mc

enunciado: "Si cambiamos el verbo 'pensar' (que rige 'en') por 'olvidarse' en la estructura 'No me olvidé ___ que viniste', ¿cuál es la preposición correcta?"
opciones_explicitas: ["en", "por", "de", "a"]

explicacion: |
  El verbo 'olvidarse' rige el régimen preposicional 'de'. Por lo tanto, se dice 'olvidarse de que...'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "por"
  nexo: "que"
  verbo: "se preocupa"
  sujeto: "el director"

respuesta: "complemento_de_regimen"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} se retrasara la reunión', ¿qué tipo de complemento sustantivo cumple la parte '{prep}{nexo} se retrasara la reunión'?"

explicacion: |
  Cumple la función de Complemento de Régimen (o Régimen Preposicional) porque completa al verbo 'preocuparse' mediante la preposición 'por'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "a"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "por"

respuesta: "a"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'aspirar' en la oración 'Aspiro ___ que me promocionen'?"
opciones_explicitas: ["en", "de", "a", "por"]

explicacion: |
  El verbo 'aspirar' rige el régimen preposicional 'a'. Por lo tanto, la forma correcta es 'aspiro a que...'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "nexos", "completar"]

variables:
  prep: "sobre"
  nexo: "cuándo"
  verbo: "preguntar"
  sujeto: "el periodista"

respuesta: "nexo"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} {prep} ___ llegará el vuelo.' (Escribe solo el nexo interrogativo)."
respuestas_validas:
  - "cuando"
  - "cuándo"

explicacion: |
  Cuando la subordinada es interrogativa indirecta, se usan nexos interrogativos como 'cuándo', 'dónde', 'cómo', etc.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "complemento_directo", "mc"]

variables:
  verbo_cd: "ver"
  verbo_reg: "pensar"
  prep_reg: "en"

respuesta: "en"
tipo: mc

enunciado: "Si 'ver' no lleva preposición (CD), ¿cuál es la preposición que introduce la subordinada para el verbo 'pensar'?"
opciones_explicitas: ["a", "en", "de", "sin"]

explicacion: |
  A diferencia del CD que es directo, el verbo 'pensar' requiere la preposición 'en' para introducir su complemento de régimen.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "identificacion"]

respuesta: "de"
tipo: input

enunciado: "En la oración incorrecta 'Todo depende ___ que llegues a tiempo', ¿qué preposición falta para que sea correcta?"

explicacion: |
  El verbo 'depender' rige la preposición 'de': 'todo depende de que llegues a tiempo'. Sin ella, la oración es agramatical.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "de"
  prep_distractor1: "en"
  prep_distractor2: "a"
  prep_distractor3: "por"

respuesta: "de"
tipo: mc

enunciado: "¿Qué preposición rige el verbo reflexivo 'acordarse' en la oración 'Me acuerdo ___ que nos vimos ayer'?"
opciones_explicitas: ["en", "a", "de", "por"]

explicacion: |
  El verbo reflexivo 'acordarse' (en el sentido de recordar) rige el régimen preposicional 'de': 'me acuerdo de que...'. Ojo: sin el 'me' reflexivo, 'acordar que' (en el sentido de decidir de común acuerdo) NO lleva 'de' — usarla ahí sería un dequeísmo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "nexos", "completar"]

variables:
  prep: "sobre"
  nexo: "si"
  verbo: "dudar"
  sujeto: "ella"

respuesta: "nexo"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} {prep} ___ llueva mañana.' (Escribe solo el nexo)."
respuestas_validas:
  - "si"

explicacion: |
  Cuando la subordinada expresa duda o incertidumbre, se utiliza el nexo 'si' (interrogativo indirecto).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "por"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "por"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'optar' en la oración 'Optamos ___ que se posponga la reunión'?"
opciones_explicitas: ["en", "de", "a", "por"]

explicacion: |
  El verbo 'optar' rige el régimen preposicional 'por'. Por lo tanto, 'optamos por que...'. (Nota: 'lamentar que se haya perdido el tren' NO lleva preposición — es complemento directo, no de régimen.)
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "a"
  nexo: "que"
  verbo: "aspirar"
  sujeto: "el candidato"

respuesta: "regimen_preposicional"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} gane las elecciones', ¿cómo se clasifica la subordinada '{prep}{nexo} gane las elecciones'?"

explicacion: |
  Se clasifica como Subordinada Sustantiva de Complemento de Régimen, ya que completa al verbo 'aspirar' mediante la preposición 'a'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "con"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "con"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'contar' en la oración 'Cuento ___ me apoyes'?"
opciones_explicitas: ["en", "de", "a", "con"]

explicacion: |
  El verbo 'contar' (en el sentido de depender de) rige el régimen preposicional 'con'. Por lo tanto, 'cuento con que...'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "basico"
  tags: ["subordinada_sustantiva", "completar", "preposicion"]

respuesta: "en"
tipo: completar

enunciado: "Completa la oración: 'Insisto ___ que todo salga bien.' (Escribe la preposición correcta para el verbo 'insistir')."
respuestas_validas:
  - "en"

explicacion: |
  'Insistir' rige la preposición 'en': 'insisto en que todo salga bien'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "sobre"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "sobre"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'informar' en la oración 'Te informo ___ que se canceló'?"
opciones_explicitas: ["en", "de", "a", "sobre"]

explicacion: |
  El verbo 'informar' rige el régimen preposicional 'sobre' (o 'de'). En este caso, 'sobre' es la opción más precisa para el contexto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "de"
  nexo: "que"
  verbo: "olvidar"
  sujeto: "él"

respuesta: "complemento_de_regimen"
tipo: input

enunciado: "En la oración '{sujeto} olvidó ___ fue ayer', ¿qué función cumple la parte '{prep}{nexo} fue ayer'?"

explicacion: |
  Cumple la función de Complemento de Régimen, completando al verbo 'olvidar' mediante la preposición 'de'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "para"
  prep_distractor1: "en"
  prep_distractor2: "de"
  prep_distractor3: "a"

respuesta: "para"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'preparar' en la oración 'Me preparo ___ que llegue la prueba'?"
opciones_explicitas: ["en", "de", "a", "para"]

explicacion: |
  El verbo 'preparar' rige el régimen preposicional 'para'. Por lo tanto, 'me preparo para que...'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "nexos", "completar"]

variables:
  prep: "sobre"
  nexo: "quién"
  verbo: "preguntar"
  sujeto: "el alumno"

respuesta: "nexo"
tipo: completar

enunciado: "Completa la oración: '{sujeto} {verbo} {prep} ___ ganó el concurso.' (Escribe solo el nexo interrogativo)."
respuestas_validas:
  - "quien"
  - "quién"

explicacion: |
  Cuando la subordinada es interrogativa indirecta sobre una persona, se utiliza el nexo 'quién'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "regimen_preposicional", "mc"]

variables:
  prep_correcta: "en"
  prep_distractor1: "de"
  prep_distractor2: "a"
  prep_distractor3: "por"

respuesta: "en"
tipo: mc

enunciado: "¿Qué preposición rige el verbo 'consistir' en la oración 'El plan consiste ___ que todos participen'?"
opciones_explicitas: ["de", "a", "en", "por"]

explicacion: |
  El verbo 'consistir' rige el régimen preposicional 'en'. Por lo tanto, 'consiste en que...'. (Nota: 'creo que es correcto' NO lleva preposición — 'creer que' para expresar opinión es complemento directo, no de régimen; solo 'creer EN' con sentido de fe o confianza rige 'en', y no suele combinarse con 'que'.)
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustituta_de_complemento_de_regimen"
  nivel: "intermedio"
  tags: ["subordinada_sustantiva", "identificacion", "analisis"]

variables:
  prep: "por"
  nexo: "que"
  verbo: "optamos"
  sujeto: "nosotros"

respuesta: "regimen_preposicional"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {prep}{nexo} se posponga la reunión', ¿cómo se clasifica la subordinada '{prep}{nexo} se posponga la reunión'?"

explicacion: |
  Se clasifica como Subordinada Sustantiva de Complemento de Régimen, ya que completa al verbo 'optar' mediante la preposición 'por'.
```

