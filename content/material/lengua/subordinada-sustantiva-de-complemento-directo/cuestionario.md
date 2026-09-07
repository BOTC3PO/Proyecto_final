# Lengua — subordinada sustantiva de complemento directo (cuestionario, 20 preguntas VBLang)

> Tema: `lengua/subordinada-sustantiva-de-complemento-directo`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["identificacion", "complemento_directo"]

variables:
  sujeto: uno_de(["Juan", "María", "El profesor", "Los alumnos"])
  verbo: uno_de(["dice", "sabe", "cree", "quiere"])
  contenido: uno_de(["que llueva", "que gane el equipo", "que venga tarde", "que sea difícil"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {contenido}', la parte '{contenido}' funciona como complemento directo."

explicacion: |
  La subordinada introducida por 'que' completa el sentido del verbo principal ('dice', 'sabe', etc.) y responde a la pregunta '¿qué?'. Se puede sustituir por 'lo': '{sujeto} {verbo} lo'.
```

### 2 — pregunta 2

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["diferenciacion", "sujeto"]

variables:
  verbo: uno_de(["es importante", "parece", "resulta", "consta"])
  contenido: uno_de(["que llegues", "que estudies", "que vengas", "que lo hagas"])

respuesta: falso
tipo: vf

enunciado: "En la oración 'Es importante {contenido}', la parte '{contenido}' es el sujeto de la oración."

explicacion: |
  Falso. En construcciones impersonales con 'es importante', la subordinada suele funcionar como sujeto real (antepuesto al verbo lógico). Sin embargo, si la oración principal tuviera un sujeto explícito que realiza la acción sobre la subordinada (ej. 'Juan cree que...'), sería CD. Pero en 'Es importante que...', la subordinada es el sujeto. *Nota: Esta pregunta busca confundir. En 'Juan dice que...', es CD. En 'Es importante que...', es Sujeto. La afirmación dice que es CD, por lo tanto es FALSA.*
```

### 3 — pregunta 3

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["verbo_rector", "analisis"]

variables:
  sujeto: uno_de(["El gobierno", "La empresa", "Mi madre", "El equipo"])
  accion: uno_de(["anuncia", "promete", "niega", "confirma"])
  hecho: uno_de(["los cambios", "la reunión", "el resultado", "la fecha"])

respuesta: accion
tipo: input

enunciado: "En la oración '{sujeto} {accion} {hecho}', ¿cuál es el verbo principal que rige al complemento directo? Escribí el verbo."

explicacion: |
  El verbo principal es '{accion}'. Es él quien necesita un complemento para completar su significado (¿qué anuncia/promete/niega?). La subordinada (o el sustantivo que la reemplaza) es el objeto de esa acción verbal.
```

### 4 — pregunta 4

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["interrogativa", "indirecta"]

variables:
  sujeto: uno_de(["No sé", "Me pregunto", "Ignoro", "Desconozco"])
  interrogante: uno_de(["dónde está", "quién es", "cuándo llega", "por qué lo hizo"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {interrogante}', la parte '{interrogante}' es una subordinada sustantiva de complemento directo."

explicacion: |
  Verdadero. Las oraciones interrogativas indirectas ('dónde está', 'quién es') pueden funcionar como complemento directo de verbos como 'saber', 'preguntar', 'ignorar'. Se puede sustituir por 'lo': '{sujeto} lo'.
```

### 5 — pregunta 5

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["distractor", "adjetiva"]

variables:
  sustantivo: uno_de(["el libro", "la casa", "el amigo", "el día"])
  verbo_rel: uno_de(["leí", "construí", "conocí", "esperé"])
  complemento: uno_de(["ayer", "en el parque", "con mi familia", "por la mañana"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sustantivo} que {verbo_rel} {complemento}', la parte 'que {verbo_rel}' es una subordinada sustantiva de complemento directo."

explicacion: |
  Falso. 'Que {verbo_rel}' modifica al sustantivo '{sustantivo}', por lo que es una subordinada adjetiva (o de relativo). No funciona como objeto directo de un verbo principal externo, sino que integra el sintagma nominal.
```

### 6 — pregunta 6

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "avanzado"
  tags: ["preposicion", "verbos"]

variables:
  verbo1: uno_de(["piensa", "cree", "sabe", "dice"])
  verbo2: uno_de(["acuerdarse", "olvidarse", "recordar", "pensar"])
  contenido: uno_de(["que viene", "que lo hizo", "que es tarde", "que gane"])

respuesta: verbo1
tipo: input

enunciado: "De los siguientes verbos, ¿cuál NO exige preposición antes de una subordinada sustantiva de complemento directo típica con 'que'? Opciones: '{verbo1}' o 'acordarse de'. Escribí el verbo correcto."

explicacion: |
  '{verbo1}' es un verbo que rige complemento directo sin preposición (ej. 'Pienso que...'). 'Acordarse' exige 'de'. La pregunta pide el que NO exige preposición.
```

### 7 — pregunta 7

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["nexo", "que"]

variables:
  sujeto: uno_de(["Yo", "Ellos", "Nosotros", "Tú"])
  verbo: uno_de(["quiero", "necesito", "busco", "espero"])
  accion: uno_de(["que vengas", "que salgas", "que comas", "que duermas"])

respuesta: "que"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {accion}', ¿cuál es el nexo que introduce la subordinada sustantiva de complemento directo? Escribí la palabra."

explicacion: |
  El nexo es 'que'. Es la conjunción subordinante más común para introducir oraciones sustantivas que funcionan como CD.
```

### 8 — pregunta 8

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["sustitucion", "plural"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ustedes", "Los chicos"])
  verbo: uno_de(["ven", "dicen", "saben", "quieren"])
  objetos: uno_de(["los libros", "las noticias", "los problemas", "las ideas"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {objetos}', si reemplazamos '{objetos}' por un pronombre, la forma correcta es 'lo'."

explicacion: |
  Falso. '{objetos}' es plural (libros, noticias, etc.), por lo que el pronombre de complemento directo debe ser plural: 'los' o 'las', dependiendo del género. 'Lo' es singular.
```

### 9 — pregunta 9

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["comprension", "texto"]

variables:
  persona: uno_de(["El director", "La maestra", "El técnico", "El médico"])
  accion: uno_de(["confirmó", "negó", "sugirió", "recordó"])
  hecho: uno_de(["la reunión", "el error", "la fecha", "el detalle"])

respuesta: accion
tipo: input

enunciado: "En la oración '{persona} {accion} {hecho}', ¿qué verbo es el principal que rige al sustantivo '{hecho}'? Escribí el verbo."

explicacion: |
  El verbo principal es '{accion}'. Es el núcleo del predicado que toma a '{hecho}' como su objeto directo.
```

### 10 — pregunta 10

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["diferenciacion", "adverbial"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "El equipo", "La gente"])
  verbo: uno_de(["saben", "dicen", "creen", "ven"])
  tiempo: uno_de(["cuando llegue", "donde está", "por qué lo hizo", "que gane"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {tiempo}', si '{tiempo}' es 'cuando llegue', es una subordinada sustantiva de complemento directo."

explicacion: |
  Falso. 'Cuando llegue' es una subordinada adverbial temporal. Las sustantivas responden a 'qué' y pueden reemplazarse por 'lo'. 'Cuándo' introduce tiempo, no un objeto directo.
```

### 11 — pregunta 11

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["verbos", "distractor"]

variables:
  v1: uno_de(["dice", "sabe", "cree", "piensa"])
  v2: uno_de(["está", "parece", "va", "corre"])
  contenido: uno_de(["que viene", "que hace", "que lo sabe", "que gane"])

respuesta: v2
tipo: input

enunciado: "De los verbos '{v1}' y '{v2}', ¿cuál NO puede regir directamente una subordinada sustantiva de complemento directo con 'que' en el sentido de 'informar/opinar'? Escribí el verbo."

explicacion: |
  '{v2}' (como 'está', 'parece', 'va', 'corre') no rige CD con 'que' en el mismo sentido transitivo que 'dice' o 'sabe'. 'Dice que' es CD. 'Va que' no es una estructura estándar de CD.
```

### 12 — pregunta 12

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["estructura", "nexo"]

variables:
  sujeto: uno_de(["Juan", "María", "Ellos", "Nosotros"])
  verbo: uno_de(["dice", "sabe", "cree", "quiere"])
  contenido: uno_de(["que llueva", "que gane", "que venga", "que sea"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {contenido}', el nexo 'que' siempre introduce la subordinada de complemento directo."

explicacion: |
  Verdadero. En esta estructura específica, 'que' es el marcador de la subordinada sustantiva que funciona como CD.
```

### 13 — pregunta 13

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "avanzado"
  tags: ["pronominal", "preposicion"]

variables:
  verbo: uno_de(["acordarse", "olvidarse", "quejarse", "arrepentirse"])
  contenido: uno_de(["que lo hizo", "que no vino", "que fue tarde", "que lo dijo"])
  preposicion: "de"

respuesta: preposicion
tipo: input

enunciado: "El verbo '{verbo}' requiere una preposición antes de la subordinada. ¿Cuál es? Escribí la preposición."

explicacion: |
  Los verbos pronominales como 'acordarse', 'olvidarse' exigen la preposición 'de'. Ej: 'Me acuerdo de que lo hizo'.
```

### 14 — pregunta 14

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["sujeto", "analisis"]

variables:
  contenido: uno_de(["que llueva", "que gane el equipo", "que venga Juan", "que sea fácil"])
  verbo: uno_de(["es", "parece", "resulta", "consta"])
  adjetivo: uno_de(["importante", "claro", "evidente", "necesario"])

respuesta: contenido
tipo: input

enunciado: "En la oración '{verbo} {adjetivo} {contenido}', ¿cuál es el sujeto? Escribí la parte que funciona como sujeto."

explicacion: |
  El sujeto es '{contenido}'. En oraciones impersonales con 'es/parece', la subordinada es el sujeto real.
```

### 15 — pregunta 15

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["identificacion", "mc"]

variables:
  oracion1: uno_de(["Juan dice que viene", "Juan viene mañana", "Juan está feliz", "Juan corre rápido"])
  oracion2: uno_de(["Juan viene mañana", "Juan está feliz", "Juan corre rápido", "Juan es alto"])
  oracion3: uno_de(["Juan está feliz", "Juan corre rápido", "Juan es alto", "Juan duerme"])
  oracion4: uno_de(["Juan corre rápido", "Juan es alto", "Juan duerme", "Juan lee"])

respuesta: oracion1
tipo: mc
opciones_explicitas: [oracion1, oracion2, oracion3, oracion4]

enunciado: "¿Cuál de estas oraciones contiene una subordinada sustantiva de complemento directo?"

explicacion: |
  '{oracion1}' contiene 'que viene', que es CD de 'dice'. Las otras son oraciones simples o con otros complementos.
```

### 16 — pregunta 16

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["complemento_indirecto", "diferenciacion"]

variables:
  sujeto: uno_de(["Le", "Se", "Le dio", "Se lo"])
  objeto: uno_de(["el libro", "la noticia", "el regalo", "el mensaje"])
  destinatario: uno_de(["a Juan", "a María", "a ellos", "a nosotros"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto} {objeto} {destinatario}', la parte '{destinatario}' es una subordinada sustantiva de complemento directo."

explicacion: |
  Falso. '{destinatario}' es un sintagma preposicional que funciona como Complemento Indirecto (CI), no una subordinada sustantiva.
```

### 17 — pregunta 17

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["verbos", "opinacion"]

variables:
  verbo: uno_de(["cree", "piensa", "opina", "siente"])
  contenido: uno_de(["que es justo", "que es injusto", "que es correcto", "que es erróneo"])
  sujeto: uno_de(["Ella", "Él", "Nosotros", "Ellos"])

respuesta: verbo
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {contenido}', ¿cuál es el verbo de opinión que rige la subordinada? Escribí el verbo."

explicacion: |
  El verbo de opinión es '{verbo}'. Indica la postura del sujeto respecto a la proposición '{contenido}'.
```

### 18 — pregunta 18

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["sustitucion", "pronombres"]

variables:
  sujeto: uno_de(["Yo", "Tú", "Él", "Ella"])
  verbo: uno_de(["dice", "sabe", "cree", "quiere"])
  contenido: uno_de(["que llueva", "que gane", "que venga", "que sea"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {contenido}', se puede reemplazar '{contenido}' por 'lo' sin perder la estructura gramatical básica."

explicacion: |
  Verdadero. '{sujeto} {verbo} lo' es la forma correcta de sustituir una subordinada sustantiva de complemento directo singular.
```

### 19 — pregunta 19

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["interrogativa", "nexo"]

variables:
  sujeto: uno_de(["No sé", "Me pregunto", "Ignoro", "Desconozco"])
  interrogante: uno_de(["qué es", "quién es", "dónde está", "cuándo llega"])

respuesta: interrogante
tipo: input

enunciado: "En la oración '{sujeto} {interrogante}', ¿cuál es la parte interrogativa que funciona como CD? Escribí la parte."

explicacion: |
  La parte interrogativa '{interrogante}' funciona como CD. Responde a '¿qué?'.
```

### 20 — pregunta 20

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "avanzado"
  tags: ["analisis", "estructura"]

variables:
  sujeto: uno_de(["El gobierno", "La empresa", "Mi madre", "El equipo"])
  verbo: uno_de(["anuncia", "promete", "niega", "confirma"])
  contenido: uno_de(["que hay cambios", "que es tarde", "que lo hizo", "que gane"])

respuesta: verbo
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {contenido}', ¿cuál es el verbo principal que rige a la subordinada? Escribí el verbo."

explicacion: |
  El verbo principal es '{verbo}'. Es el núcleo del predicado que toma a la subordinada como su objeto directo.
```
