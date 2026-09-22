# Examen jefe — [PENDIENTE #663]

> Logro #663. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **133 preguntas totales** en 5/5 secciones.

---

## Sección: referencia-anafora-y-catafora (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["referencia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La referencia es el mecanismo por el cual una palabra (casi siempre un pronombre) remite a otra ya mencionada o por mencionar en el texto, sin repetirla literalmente."

pasos:
  - "\"Juan llegó cansado. Él había caminado diez cuadras\": \"él\" remite a \"Juan\"."

explicacion: |
  Verdadero: la referencia evita la repetición literal manteniendo la
  claridad de a qué o quién se refiere.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["anafora"]

variables:
  n: uno_de([1, 1])

respuesta: "anáfora"
tipo: mc
opciones_explicitas: ["anáfora", "catáfora"]

enunciado: "\"María compró un libro. Lo leyó esa misma noche.\" El pronombre \"lo\" remite hacia atrás, a \"un libro\": es un caso de..."

pasos:
  - "La referencia apunta a algo ya mencionado ANTES en el texto: es anáfora."

explicacion: |
  La anáfora (en este sentido de referencia textual, distinto del
  recurso literario) remite hacia atrás.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["catafora"]

variables:
  n: uno_de([1, 1])

respuesta: "catáfora"
tipo: mc
opciones_explicitas: ["anáfora", "catáfora"]

enunciado: "\"Esto es lo que pasó: María llegó tarde y perdió el tren.\" El pronombre \"esto\" anticipa la explicación que viene DESPUÉS: es un caso de..."

pasos:
  - "La referencia apunta a algo que se va a mencionar DESPUÉS en el texto: es catáfora."

explicacion: |
  La catáfora remite hacia adelante, anticipando información que
  todavía no se dijo.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["anafora", "recursos_literarios", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La \"anáfora\" como mecanismo de referencia textual (este tema) y la \"anáfora\" como recurso literario (ver `../recursos-literarios/`) significan exactamente lo mismo."

pasos:
  - "La anáfora literaria repite la MISMA palabra para dar énfasis; la anáfora de referencia usa una palabra DISTINTA (pronombre) para evitar repetir."

explicacion: |
  Falso: es el mismo término técnico con dos significados opuestos
  según el área (retórica vs. gramática textual).
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["anafora", "catafora", "frecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La anáfora (referencia hacia atrás) es el caso más común de referencia textual; la catáfora es menos frecuente y suele generar un efecto de anticipación o suspenso."

pasos:
  - "La mayoría de los pronombres en un texto remiten a algo ya dicho antes, no a algo por venir."

explicacion: |
  Verdadero: la anáfora domina en frecuencia sobre la catáfora en el
  uso habitual del idioma.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["pronombres_personales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los pronombres personales (él, ella, lo, la, le) son el tipo de palabra más común usada como mecanismo de referencia."

pasos:
  - "\"Él\", \"lo\", \"le\" son ejemplos ya vistos en los ejemplos de anáfora y catáfora."

explicacion: |
  Verdadero: los pronombres personales son la herramienta de
  referencia más frecuente.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["sinonimos", "hiperonimos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Compré un perro. El animal es muy juguetón\" usa un hiperónimo (\"el animal\") como referencia, sin repetir \"perro\" ni usar un pronombre."

pasos:
  - "Un hiperónimo es una palabra más general que engloba a la mencionada antes (animal engloba a perro)."

explicacion: |
  Verdadero: además de pronombres, los sinónimos o hiperónimos también
  funcionan como mecanismo de referencia.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["elipsis"]

variables:
  n: uno_de([1, 1])

respuesta: "elipsis"
tipo: completar

enunciado: "\"María fue al cine y compró pochoclo\" (sin repetir \"María\" antes de \"compró\") usa el mecanismo de referencia llamado..."

pasos:
  - "Se omite directamente la palabra porque ya se entiende por contexto quién compró el pochoclo."

explicacion: |
  La elipsis omite una palabra ya mencionada, en vez de reemplazarla
  por un pronombre.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["referencia", "repeticion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin mecanismos de referencia, un texto suena repetitivo y artificial (\"Juan fue a la casa de Juan. Juan saludó a la mamá de Juan.\")."

pasos:
  - "La referencia permite variar la redacción sin perder claridad sobre a qué o quién se refiere cada palabra."

explicacion: |
  Verdadero: es la razón principal por la que la referencia es una
  herramienta central de cohesión.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia_ambigua"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Juan le dio el libro a Pedro porque él lo necesitaba\", no queda claro si \"él\" se refiere a Juan o a Pedro: es un ejemplo de referencia ambigua."

pasos:
  - "Un pronombre puede tener más de un antecedente posible en la misma oración, generando confusión."

explicacion: |
  Verdadero: la ambigüedad de referencia es un riesgo real al usar
  pronombres sin cuidado.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["referencia", "produccion_escrita_compleja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Revisar que cada referencia (pronombre, sinónimo) tenga un único antecedente claro es parte de la etapa de revisión descrita en `../produccion-escrita-compleja/`."

pasos:
  - "La ambigüedad de referencia es uno de los errores de coherencia que se buscan al releer un texto propio."

explicacion: |
  Verdadero: la revisión de referencias ambiguas es una tarea
  concreta de la etapa de revisión.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["anafora", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "el libro"
tipo: completar

enunciado: "En \"Compré un libro en la feria. Lo terminé en dos días.\", ¿a qué se refiere el pronombre \"lo\"?"

pasos:
  - "Es una anáfora: hay que buscar el elemento ya mencionado antes al que remite el pronombre."

explicacion: |
  \"Lo\" remite hacia atrás, a \"un libro\", ya mencionado en la
  oración anterior.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["catafora", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar catáfora (\"Esto es lo que pasó: ...\") genera un efecto de anticipación, porque el lector sabe que viene una explicación pero todavía no la conoce."

pasos:
  - "Ese efecto de expectativa es una de las razones por las que se elige deliberadamente la catáfora en vez de la anáfora."

explicacion: |
  Verdadero: el efecto retórico de la catáfora es distinto del de la
  anáfora, aunque ambas sean mecanismos de referencia.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["anafora", "catafora", "practica"]

variables:
  frases: ["Ana terminó el proyecto. Ella estaba orgullosa del resultado", "Aquí está: la solución al problema era mucho más simple de lo que pensábamos"]
  tipos: ["anáfora", "catáfora"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["anáfora", "catáfora"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Si el pronombre remite a algo YA dicho, es anáfora. Si remite a algo que se dice DESPUÉS, es catáfora."

explicacion: |
  La dirección de la referencia (hacia atrás o hacia adelante) es lo
  que distingue anáfora de catáfora.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["pronombres_demostrativos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los pronombres demostrativos (esto, eso, aquello, este, ese) también pueden funcionar como mecanismo de referencia, tanto anafórica como catafórica."

pasos:
  - "\"Esto es lo que pasó\" (catáfora) y \"eso ya lo sabía\" (anáfora) usan el mismo tipo de pronombre en direcciones distintas."

explicacion: |
  Verdadero: los demostrativos son otro tipo de palabra que funciona
  como referencia, además de los pronombres personales.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia_ambigua", "correccion"]

variables:
  n: uno_de([1, 1])

respuesta: "Juan le dio el libro a Pedro porque Pedro lo necesitaba"
tipo: mc
opciones_explicitas: ["Juan le dio el libro a Pedro porque Pedro lo necesitaba", "Juan le dio el libro a Pedro porque él lo necesitaba"]

enunciado: "Para eliminar la ambigüedad de \"Juan le dio el libro a Pedro porque él lo necesitaba\" (¿quién necesitaba el libro?), ¿cuál versión es más clara?"

pasos:
  - "Reemplazar el pronombre ambiguo (\"él\") por el nombre propio (\"Pedro\") elimina la ambigüedad, aunque repita una palabra."

explicacion: |
  A veces conviene sacrificar algo de variedad léxica (repetir el
  nombre) para evitar una ambigüedad real de referencia.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["elipsis", "limitaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La elipsis sólo funciona bien cuando el sujeto omitido se entiende sin ambigüedad por el contexto inmediato; si hay varios candidatos posibles, conviene usar un pronombre o repetir el nombre en vez de omitir."

pasos:
  - "Omitir un elemento sin dejar claro a quién se refiere puede generar la misma ambigüedad que un pronombre mal usado."

explicacion: |
  Verdadero: la elipsis tiene el mismo riesgo de ambigüedad que
  cualquier otro mecanismo de referencia si el contexto no es claro.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["referencia", "metodo"]

enunciado: "Ordená los pasos para revisar las referencias (pronombres, sinónimos, elipsis) de un texto propio."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada pronombre, sinónimo o elipsis usado como referencia"
  - "Buscar el antecedente (o consecuente, si es catáfora) al que remite cada uno"
  - "Revisar si hay más de un candidato posible para ese antecedente"
  - "Corregir (reemplazando por el nombre propio, por ejemplo) donde haya ambigüedad"
respuesta_orden: ["Identificar cada pronombre, sinónimo o elipsis usado como referencia", "Buscar el antecedente (o consecuente, si es catáfora) al que remite cada uno", "Revisar si hay más de un candidato posible para ese antecedente", "Corregir (reemplazando por el nombre propio, por ejemplo) donde haya ambigüedad"]
explicacion: |
  El proceso va de identificar las referencias usadas a verificar que
  cada una tenga un único antecedente claro.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia", "cohesion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La referencia (anáfora y catáfora) es una de las tres herramientas de cohesión estudiadas en esta subrama, junto con los conectores textuales y la progresión temática."

pasos:
  - "Ver `../conectores-textuales/` y `../progresion-tematica/`: los tres son nodos hermanos que dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: mientras los conectores marcan relaciones lógicas, la
  referencia evita repetición manteniendo claridad sobre a qué se
  refiere cada palabra.
```

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escribir un texto propio, conviene combinar pronombres, sinónimos y elipsis para evitar repetir siempre la misma palabra, cuidando que cada referencia siga siendo clara para el lector."

pasos:
  - "El objetivo es variar la redacción sin sacrificar la claridad sobre a quién o qué se refiere cada mención."

explicacion: |
  Verdadero: es la aplicación práctica central de este tema al
  momento de escribir.
```

## Sección: subordinada-adverbial-de-lugar (25 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["teoria", "sintaxis"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "La subordinada adverbial de lugar es una oración independiente que puede sostenerse por sí misma sin el verbo principal."

explicacion: |
  Falso. La subordinada adverbial de lugar depende sintácticamente de la oración principal para completar su significado espacial. No es una oración independiente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "identificacion"]

variables:
  prueba: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "Es un truco útil para identificar una subordinada de lugar sustituirla por el adverbio 'allí' y verificar si la oración mantiene su sentido lógico."

explicacion: |
  Verdadero. Si la oración principal sigue teniendo sentido al reemplazar la subordinada por 'allí', es muy probable que se trate de una subordinada adverbial de lugar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["teoria", "dependencia"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "La subordinada adverbial de lugar puede interpretarse completamente sin referencia a la oración principal."

explicacion: |
  Falso. Su significado espacial solo se completa en relación con el verbo de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "recorrido"]

variables:
  recorrido: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El nexo 'por donde' puede introducir una subordinada adverbial de lugar indicando el trayecto o recorrido."

explicacion: |
  Verdadero. 'Por donde' indica el camino o el lugar por el cual se pasa, funcionando como complemento de lugar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "variedad"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "Solo existe un nexo posible para introducir subordinadas adverbiales de lugar: 'donde'."

explicacion: |
  Falso. Existen varios nexos como 'dondequiera que', 'a donde', 'desde donde', 'por donde', etc.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "avanzado"
  tags: ["estilo", "ventaja"]

variables:
  ventaja: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El uso de subordinadas de lugar ayuda a evitar la repetición de nombres propios o lugares en el texto."

explicacion: |
  Verdadero. Permite referirse a un lugar ya mencionado o implícito mediante una oración subordinada, enriqueciendo el estilo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "trayecto"]

variables:
  trayecto: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El nexo 'por donde' puede indicar el trayecto o el camino recorrido por la acción."

explicacion: |
  Verdadero. 'Por donde' especifica el lugar o camino por el cual se realiza la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["definicion", "verdadero_falso"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una subordinada adverbial de lugar siempre funciona como sujeto de la oración principal."

explicacion: |
  Falso. Las subordinadas adverbiales de lugar funcionan como Complemento Circunstancial de Lugar, modificando al verbo de la oración principal, no como sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "sustitucion"]

variables:
  oracion_principal: uno_de(["Voy al parque", "Esperé en la plaza", "Corrió hacia el bosque"])
  oracion_sub: uno_de(["donde hay árboles", "donde nos vimos", "donde hace frío"])
  resultado_valido: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En la oración '{oracion_principal} {oracion_sub}', la parte subrayada puede sustituirse por el adverbio 'allí' sin perder el sentido espacial."

explicacion: |
  Verdadero. La prueba de sustitución por 'allí' es un método válido para identificar subordinadas adverbiales de lugar, ya que 'allí' es el pronombre adverbial de lugar equivalente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["funcion", "sintaxis"]

variables:
  tipo_funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Lugar", "Atributo", "Complemento Agente"])

respuesta: "Complemento Circunstancial de Lugar"
tipo: completar

enunciado: "La subordinada adverbial de lugar funciona sintácticamente como un {tipo_funcion}."

explicacion: |
  Las subordinadas adverbiales de lugar desempeñan la función de Complemento Circunstancial de Lugar (CCL) respecto al verbo de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["diferenciacion", "nexos"]

variables:
  nexo_lugar: uno_de(["donde", "a donde"])
  nexo_tiempo: uno_de(["cuando", "mientras"])
  es_lugar: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: El nexo '{nexo_lugar}' introduce una subordinada de lugar, mientras que '{nexo_tiempo}' introduce una de tiempo."

explicacion: |
  Verdadero. Los nexos como 'donde' y 'a donde' indican espacio, mientras que 'cuando' o 'mientras' indican tiempo. Confundirlos es un error común.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["dependencia", "verdadero_falso"]

variables:
  afirmacion: falso

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una subordinada adverbial de lugar puede funcionar como una oración independiente y completa por sí misma."

explicacion: |
  Falso. Por definición, una oración subordinada depende sintáctica y semánticamente de la oración principal. No es independiente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["pregunta", "funcion"]

variables:
  pregunta: uno_de(["¿Dónde?", "¿Cuándo?", "¿Por qué?", "¿Cómo?"])

respuesta: "¿Dónde?"
tipo: completar

enunciado: "La subordinada adverbial de lugar responde principalmente a la pregunta: '{pregunta}'."

explicacion: |
  Las subordinadas de lugar responden a '¿Dónde?', '¿Hacia dónde?' o '¿Desde dónde?'. '¿Cuándo?' es temporal, '¿Por qué?' causal, '¿Cómo?' modal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["posicion", "verdadero_falso"]

variables:
  posicion: uno_de(["solo al final", "solo al inicio", "puede ir al inicio o al final"])

respuesta: "puede ir al inicio o al final"
tipo: completar

enunciado: "La subordinada adverbial de lugar '{posicion}' de la oración principal."

explicacion: |
  Las subordinadas adverbiales de lugar pueden aparecer tanto al inicio como al final de la oración principal, aunque es más común al final.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["origen", "nexos"]

variables:
  origen: uno_de(["desde donde", "a donde", "donde"])
  contexto: "Te llamaré {origen} estoy."

respuesta: "desde donde"
tipo: completar

enunciado: "Completa la oración '{contexto}' con el nexo que indica origen o punto de partida."

explicacion: |
  'Desde donde' indica el punto de origen de la acción. 'A donde' indica destino, 'donde' ubicación estática.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "sustitucion"]

variables:
  afirmacion: falso

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La prueba de sustitución por 'aquí' es igualmente válida que por 'allí' para identificar subordinadas de lugar."

explicacion: |
  Falso. 'Aquí' indica cercanía, 'allí' indica lejanía o lugar genérico. La prueba estándar usa 'allí' como pronombre adverbial de lugar neutro o de referencia lejana, que es más común en la teoría sintáctica para generalizar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["destino", "nexos"]

variables:
  destino: uno_de(["a donde", "desde donde", "donde"])
  contexto: "Iré {destino} me llames."

respuesta: "a donde"
tipo: completar

enunciado: "Completa la oración '{contexto}' con el nexo que indica destino o dirección hacia un lugar."

explicacion: |
  'A donde' indica el punto de llegada o destino. 'Desde donde' indica origen, 'donde' ubicación.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "avanzado"
  tags: ["produccion", "nexos"]

variables:
  lugar: uno_de(["la cima", "el fondo", "el centro"])
  accion: uno_de(["se ve", "se escucha", "se siente"])

respuesta: "allí donde"
tipo: completar

enunciado: "Completa con el nexo formal: '{lugar} {accion}'."

explicacion: |
  'Allí donde' es un nexo formal que introduce la idea de lugar, equivalente a 'en el lugar en que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["funcion", "sintaxis"]

variables:
  funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Lugar", "Atributo", "Complemento Agente"])

respuesta: "Complemento Circunstancial de Lugar"
tipo: completar

enunciado: "La subordinada adverbial de lugar funciona como un {funcion}."

explicacion: |
  Las subordinadas adverbiales de lugar desempeñan la función de Complemento Circunstancial de Lugar (CCL).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["dependencia", "sintaxis"]

variables:
  dependencia: verdadero

respuesta: dependencia
tipo: vf

enunciado: "La subordinada adverbial de lugar puede funcionar como una oración independiente y completa sin la oración principal."

explicacion: |
  Falso. Por definición, es una oración subordinada, lo que significa que depende sintáctica y semánticamente de la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En la oración 'Voy donde tú vas', la palabra 'donde' introduce una subordinada adverbial de lugar."

explicacion: |
  Correcto. 'Donde' es el nexo más común para indicar ubicación o destino.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "a donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En 'Voy a donde tú vas', la parte 'a donde tú vas' es una subordinada adverbial de lugar."

explicacion: |
  Correcto. Indica el destino de la acción 'voy'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["estructura", "compuesta"]

variables:
  es_compuesta: verdadero

respuesta: es_compuesta
tipo: vf

enunciado: "Una oración que contiene una subordinada adverbial de lugar es una oración compuesta."

explicacion: |
  Correcto. Al tener una oración principal y una subordinada, es compuesta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "desde donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En 'Vengo desde donde tú viniste', la parte 'desde donde tú viniste' es una subordinada adverbial de lugar."

explicacion: |
  Correcto. Indica el origen de la acción 'vengo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["dependencia", "independencia"]

variables:
  es_independiente: falso

respuesta: es_independiente
tipo: vf

enunciado: "La subordinada adverbial de lugar puede entenderse completamente sola, sin la oración principal."

explicacion: |
  Falso. Dependes de la principal para su significado espacial específico.
```

## Sección: subordinada-adverbial-de-modo (27 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["definicion", "funcion"]

respuesta: verdadero
tipo: vf

enunciado: "La subordinada adverbial de modo funciona sintácticamente como un adverbio de modo, especificando 'cómo' se lleva a cabo la acción del verbo principal."

explicacion: |
  Correcto. Su función es modificar al verbo principal indicando la manera o el modo de ejecución de la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["puntuacion", "sintaxis"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando la subordinada adverbial de modo aparece al inicio de la oración principal, es recomendable separarla con una coma."

explicacion: |
  Correcto. Las oraciones subordinadas adverbiales extensas o colocadas al inicio suelen llevar coma para marcar la pausa sintáctica y facilitar la lectura.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["sustitucion", "prueba"]

variables:
  oracion_base: "Habló como si fuera un experto."
  adverbio_sustituto: "así"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La oración subordinada 'como si fuera un experto' en '{oracion_base}' puede ser sustituida por el adverbio '{adverbio_sustituto}' sin perder el sentido lógico general de la oración principal."

explicacion: |
  Una prueba fundamental para identificar una subordinada adverbial de modo es sustituirla por un adverbio de modo simple (así, bien, mal). Si la oración mantiene su sentido básico, la identificación es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["diferenciacion", "causal"]

variables:
  oracion_causal: "Llegué tarde porque se cortó la luz."
  oracion_modal: "Llegué como me indicaron."

respuesta: oracion_modal
tipo: input

enunciado: "De las siguientes oraciones, ¿cuál contiene una subordinada adverbial de modo? Opción A: '{oracion_causal}'. Opción B: '{oracion_modal}'."

explicacion: |
  La primera oración es causal (explica el *porqué*). La segunda contiene 'como', que indica la *manera* o *cómo* se realizó la acción, siendo por tanto una subordinada de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  frase: "Trabajó de manera que todos lo admiraran."
  nexo_detectado: "de manera que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En la frase '{frase}', el nexo '{nexo_detectado}' introduce una subordinada adverbial de modo."

explicacion: |
  'De manera que' es un nexo compuesto que introduce una oración subordinada adverbial de modo, especificando la forma en que se ejecutó la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["literatura", "analisis"]

variables:
  fragmento: "El viento soplaba como si quisiera apagar las estrellas."
  nexo: "como si"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En el fragmento '{fragmento}', la parte '{nexo} quisiera apagar las estrellas' funciona como una subordinada de modo."

explicacion: |
  La estructura 'como si' introduce una comparación que describe la manera en que ocurría la acción del verbo principal ('soplaba'), cumpliendo la función de adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["distractor", "causal"]

variables:
  opcion_a: "Lo hizo porque tenía que hacerlo."
  opcion_b: "Lo hizo como le enseñaron."

respuesta: opcion_b
tipo: input

enunciado: "Seleccioná la oración que contiene una subordinada adverbial de modo: {opcion_a} / {opcion_b}."

explicacion: |
  'Porque' introduce una causa. 'Como' introduce la manera o modo, por lo que la segunda opción es la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["nexos", "segun"]

variables:
  oracion: "Actuó según las normas establecidas."
  nexo: "según"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Según' puede funcionar como nexo de modo cuando indica la regla o criterio que se siguió para realizar la acción, equivalente a 'de la manera que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["produccion", "nexos"]

variables:
  nexo1: "como"
  nexo2: "conforme"

respuesta: nexo1
tipo: input

enunciado: "Si quiero decir que alguien caminó 'de la manera en que lo hizo su padre', ¿cuál de estos nexos es el más común y directo para introducir la subordinada? {nexo1} o {nexo2}."

explicacion: |
  'Como' es el nexo más frecuente y directo para introducir subordinadas de modo en el lenguaje cotidiano y literario. 'Conforme' también es válido pero menos común en este contexto específico de comparación directa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["puntuacion", "posicion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las subordinadas adverbiales de modo, cuando aparecen al inicio de la oración principal, generalmente van separadas por una coma."

explicacion: |
  La norma ortográfica general indica que las oraciones subordinadas que anteceden a la principal suelen ir separadas por una coma para marcar el límite sintáctico y facilitar la lectura.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  oracion: "Habló bajo un micrófono de modo que todos lo escucharan."
  nexo: "de modo que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'De modo que' es un nexo compuesto que indica la manera específica en que se realizó la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["diferenciacion", "finalidad"]

variables:
  oracion_modo: "Lo hizo como le pidieron."
  oracion_fin: "Lo hizo para que lo vieran."

respuesta: oracion_modo
tipo: input

enunciado: "¿Cuál de estas oraciones tiene una subordinada de modo? {oracion_modo} / {oracion_fin}."

explicacion: |
  'Como' indica la manera (modo). 'Para que' indica la intención o propósito (finalidad), por lo que la primera es la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["sustitucion", "prueba"]

variables:
  oracion: "Se vistió como le gustaba."
  sustituto: "así"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La parte 'como le gustaba' en '{oracion}' puede reemplazarse por '{sustituto}'."

explicacion: |
  La prueba de sustitución por 'así' es válida aquí, ya que 'como le gustaba' especifica la manera de vestir, funcionando como adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "conforme"]

variables:
  oracion: "Procedió conforme a la ley."
  nexo: "conforme"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Conforme' indica que la acción se realizó de acuerdo con un criterio o regla, especificando la manera (modo) de proceder.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["analisis", "oracion"]

variables:
  oracion: "Escribió la carta como si fuera un profesional."
  parte_subordinada: "como si fuera un profesional"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', la parte '{parte_subordinada}' es una subordinada adverbial de modo."

explicacion: |
  La cláusula introducida por 'como si' describe la manera en que se escribió la carta, cumpliendo la función de adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["distractor", "comparativo"]

variables:
  oracion_a: "Es alto como su padre."
  oracion_b: "Habló como un experto."

respuesta: oracion_b
tipo: input

enunciado: "¿Cuál de estas oraciones contiene una subordinada adverbial de modo? {oracion_a} / {oracion_b}."

explicacion: |
  'Es alto como su padre' es una oración comparativa de igualdad (compara la altura con la del padre). 'Habló como un experto' indica la manera de hablar (modo), siendo la segunda la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  oracion: "Lo organizó de forma que nadie se perdiera."
  nexo: "de forma que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'De forma que' es un nexo compuesto que especifica la manera en que se realizó la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "como"]

variables:
  oracion: "Lo hizo como vio que hacían los demás."
  nexo: "como"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  Aquí 'como' no introduce una comparación directa de igualdad, sino que especifica la manera en que se realizó la acción, funcionando como nexo de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["diferenciacion", "causal"]

variables:
  oracion_causal: "Se fue porque estaba cansado."
  oracion_modal: "Se fue como si no le importara."

respuesta: oracion_modal
tipo: input

enunciado: "Seleccioná la oración con subordinada de modo: {oracion_causal} / {oracion_modal}."

explicacion: |
  'Porque' es causal. 'Como si' introduce la manera de irse (modo), haciendo a la segunda oración la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "segun"]

variables:
  oracion: "Decidió según el clima."
  nexo: "según"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Según' indica el criterio o regla que determinó la decisión, especificando la manera (modo) en que se tomó.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["puntuacion", "posicion"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Las subordinadas adverbiales de modo, cuando aparecen al final de la oración principal, SIEMPRE van precedidas por una coma."

explicacion: |
  No siempre. Si la subordinada de modo es breve y está al final, a menudo no lleva coma. La coma es más frecuente si es extensa o si inicia la oración.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  oracion: "Lo preparó de manera que fuera perfecto."
  nexo: "de manera que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'De manera que' es un nexo compuesto que indica la forma específica en que se realizó la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["analisis", "hipotesis"]

variables:
  oracion: "Mira como si no supiera nada."
  nexo: "como si"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Como si' introduce una comparación hipotética que describe la manera de mirar, cumpliendo la función de adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["diferenciacion", "consecutiva"]

variables:
  oracion_consecutiva: "Corrió tanto que se cansó."
  oracion_modal: "Corrió como un profesional."

respuesta: oracion_modal
tipo: input

enunciado: "¿Cuál de estas oraciones tiene una subordinada de modo? {oracion_consecutiva} / {oracion_modal}."

explicacion: |
  'Tan... que' introduce una consecuencia (consecutiva). 'Como' introduce la manera (modo), por lo que la segunda es la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "conforme"]

variables:
  oracion: "Avanzó conforme avanzaba la tarde."
  nexo: "conforme"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Conforme' aquí indica la manera progresiva en que se realizó la acción, especificando el modo de avanzar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["sustitucion", "adverbio"]

variables:
  oracion: "Lo hizo bien."
  sustituto: "como se esperaba"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La oración '{oracion}' puede considerarse una versión simplificada de una subordinada de modo introducida por '{sustituto}'."

explicacion: |
  'Lo hizo bien' es una oración simple con un adverbio de modo. No contiene una subordinada. La pregunta evalúa la comprensión de que la subordinada es una estructura compleja, no un adverbio simple.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["ambiguedad", "consecutiva"]

variables:
  oracion: "Lo dijo de modo que todos entendieran."

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo 'de modo que' es ambiguo y, según el contexto, puede interpretarse tanto con valor modal (la forma en que lo dijo) como consecutivo (el resultado de decirlo así)."

explicacion: |
  Verdadero. 'De modo que', 'de manera que' y 'de forma que' son nexos que en la práctica suelen tener valor consecutivo (introducen una consecuencia), y solo se leen como estrictamente modales en contextos muy específicos. Para expresar modo sin ambigüedad, el nexo más directo y menos discutido es 'como'.
```

## Sección: subordinada-adverbial-de-tiempo (34 preguntas)

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["subjuntivo", "anterioridad"]

respuesta: verdadero
tipo: vf

enunciado: "Es verdadero que la expresión 'antes de que' casi siempre exige el uso del modo subjuntivo en la subordinada."

explicacion: |
  "Antes de que" es una de las pocas expresiones temporales que siempre rige el subjuntivo, ya que la acción es futura o incierta respecto al momento de habla.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["sintaxis", "funcion"]

respuesta: verdadero
tipo: vf

enunciado: "Una subordinada adverbial de tiempo funciona sintácticamente como un adverbio dentro de la oración principal."

explicacion: |
  Correcto. Aunque es una oración completa con verbo, su función en la estructura mayor es la de un complemento circunstancial de tiempo (adverbial).
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Las subordinadas adverbiales de tiempo contienen su propio verbo conjugado, a diferencia de los adverbios simples."

explicacion: |
  Sí. Un adverbio simple es una palabra (ayer), mientras que la subordinada es una oración (cuando ayer llovió).
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["subjuntivo", "indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "Es verdadero que con 'cuando' referido a hechos habituales o pasados, solemos usar el indicativo."

explicacion: |
  Correcto. Ej: "Cuando iba al colegio, me compraba alfajores" (indicativo). Si fuera futuro incierto, sería subjuntivo ("Cuando vaya...").
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["lexico", "identificacion"]

respuesta: "mientras"
tipo: input

enunciado: "En la frase 'Mientras leía, mi hermano jugaba', ¿cuál es la palabra que funciona como nexo temporal?"

explicacion: |
  "Mientras" es el nexo que introduce la subordinada de tiempo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["coherencia", "discurso"]

respuesta: verdadero
tipo: vf

enunciado: "El uso correcto de subordinadas de tiempo ayuda a organizar la secuencia lógica de eventos en un relato."

explicacion: |
  Sí. Permiten situar la acción en un contexto temporal rico y evitar que el discurso sea fragmentado.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "principal"]

respuesta: "nosotros armábamos la carpa"
tipo: input

enunciado: "En 'Mientras el sol se ponía, nosotros armábamos la carpa', escribe la oración principal."

explicacion: |
  La principal es "nosotros armábamos la carpa". La subordinada es "Mientras el sol se ponía".
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["comparacion", "matiz"]

respuesta: falso
tipo: vf

enunciado: "Es falso que 'mientras' y 'cuando' (en sentido de simultaneidad) tengan la misma función temporal."

explicacion: |
  La afirmación es falsa porque SÍ tienen la misma función temporal (simultaneidad). Ambas indican que dos acciones ocurren al mismo tiempo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["gramatica", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Es verdadero que la subordinada adverbial de tiempo tiene sujeto y verbo propios, aunque funcione como adverbio."

explicacion: |
  Sí. Es una oración subordinada, por lo tanto, es una frase oracional con su propia estructura interna.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["posterioridad", "identificacion"]

respuesta: "después de que"
tipo: input

enunciado: "Si quiero decir que la acción principal ocurre después de la subordinada, ¿qué nexo uso?"

explicacion: |
  "Después de que" es el nexo estándar para posterioridad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion", "intermedio"]

variables:
  tiempo: uno_de(["ayer", "mañana", "cuando termine", "mientras llovía", "antes de salir"])
  accion: uno_de(["salí", "comí", "trabajé", "leí", "viajé"])

respuesta: "sintagma adverbial de tiempo"
tipo: completar

enunciado: "En la frase 'Salí {tiempo}', la parte subrayada funciona sintácticamente como un/a: "

explicacion: |
  Las subordinadas adverbiales de tiempo cumplen la función de complemento circunstancial de tiempo, modificando al verbo de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["simultaneidad", "conectores", "intermedio"]

variables:
  accion1: uno_de(["cocinaba", "leía", "escuchaba música", "plancheaba", "cantaba"])
  accion2: uno_de(["llegaste", "sonó el teléfono", "terminó la película", "abrió la puerta", "llovió"])
  conector: "mientras"

respuesta: conector
tipo: completar

enunciado: "Completa la oración para expresar simultaneidad: '{accion1} {conector} {accion2}'."

explicacion: |
  El conector 'mientras' indica que dos acciones ocurren al mismo tiempo, estableciendo una relación de simultaneidad entre las subordinadas.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["subjuntivo", "anterioridad", "avanzado"]

variables:
  accion_principal: uno_de(["avísame", "llámame", "esperame", "prepárame", "avísame"])
  accion_subordinada: uno_de(["llegues", "termines", "salgas", "vengas", "hables"])
  conector: "antes de que"

respuesta: "subjuntivo"
tipo: completar

enunciado: "En la construcción '{accion_principal} {conector} {accion_subordinada}', el verbo de la subordinada debe estar en modo: "

explicacion: |
  El conector 'antes de que' exige siempre el uso del subjuntivo en la subordinada, ya que expresa anterioridad respecto a una acción principal que puede ser futura o incierta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "analisis", "intermedio"]

variables:
  subordinada: uno_de(["Cuando llegues", "Mientras estudiabas", "Después de que comiste"])
  principal: uno_de(["llámame", "te avisé", "vamos al cine"])

respuesta: principal
tipo: completar

enunciado: "En la oración compuesta '{subordinada}, {principal}', ¿cuál es la oración principal (la que contiene la información central independiente)?"

explicacion: |
  La oración principal es aquella que puede existir gramaticalmente de forma independiente y cuyo verbo es el núcleo de la estructura.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["posterioridad", "conectores", "basico"]

variables:
  accion1: uno_de(["terminamos", "salimos", "aprobamos", "llegamos", "comenzamos"])
  accion2: uno_de(["comimos", "descansamos", "viajamos", "estudiemos", "descansamos"])
  conector: "después de que"

respuesta: conector
tipo: completar

enunciado: "Si la acción '{accion1}' ocurre primero y '{accion2}' luego, el conector adecuado para unir ambas es: "

explicacion: |
  'Después de que' indica que la acción de la subordinada sucede cronológicamente antes que la de la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["limite", "conectores", "intermedio"]

variables:
  accion_continua: uno_de(["esperé", "trabajé", "estuve", "busqué", "corrí"])
  accion_final: uno_de(["llegó", "terminó", "apareció", "sonó", "llovió"])
  conector: "hasta que"

respuesta: conector
tipo: completar

enunciado: "Completa: '{accion_continua} {conector} {accion_final}' para indicar el límite temporal de una acción."

explicacion: |
  'Hasta que' marca el punto final en el tiempo donde cesa la acción de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["matiz", "conectores", "avanzado"]

variables:
  accion: uno_de(["te veo", "te llamo", "salgo", "vuelvo", "apareces"])
  conector_inmediato: "en cuanto"
  conector_general: "cuando"

respuesta: conector_inmediato
tipo: completar

enunciado: "Para expresar inmediatez absoluta ('tan pronto como'), entre '{conector_general}' y '{conector_inmediato}', ¿cuál es más preciso?"

explicacion: |
  'En cuanto' implica una secuencia inmediata, sin demora, mientras que 'cuando' puede referirse a cualquier momento, habitual o específico.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["indicativo", "tiempo", "avanzado"]

variables:
  accion_pasada: uno_de(["iba", "estudiaba", "jugaba", "cocinaba", "leía"])
  accion_futura: uno_de(["vayas", "llegues", "termines", "salgas", "hables"])
  conector: "cuando"

respuesta: "indicativo"
tipo: completar

enunciado: "En la oración 'Siempre {accion_pasada} {conector} iba al parque', el verbo de la subordinada está en modo: "

explicacion: |
  Cuando 'cuando' se refiere a hechos habituales en el pasado o presentes, se utiliza el indicativo, no el subjuntivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["sinonimia", "conectores", "intermedio"]

variables:
  accion1: uno_de(["recibí", "terminé", "llegué", "abrí", "vi"])
  accion2: uno_de(["te avisé", "lo llamé", "salí", "corrí", "grité"])
  conector: "tan pronto como"

respuesta: conector
tipo: completar

enunciado: "Sustituye 'en cuanto' por su sinónimo temporal más común en: '{accion1} {conector} {accion2}'."

explicacion: |
  'Tan pronto como' es sinónimo de 'en cuanto' y ambos expresan inmediatez temporal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["inicio", "conectores", "intermedio"]

variables:
  accion_inicial: uno_de(["conocí", "empecé", "llegué", "aprendí", "viajé"])
  accion_continua: uno_de(["estudio", "trabajo", "vivo", "escribo", "viajo"])
  conector: "desde que"

respuesta: conector
tipo: completar

enunciado: "Para indicar el punto de inicio de una acción que continúa hasta el presente o un momento pasado: '{accion_inicial} {conector} {accion_continua}'."

explicacion: |
  'Desde que' marca el origen temporal de una situación, estableciendo un intervalo que comienza en ese momento.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["sujeto", "analisis", "intermedio"]

variables:
  sujeto_sub: uno_de(["el sol", "mi hermano", "la lluvia", "el profesor", "nosotros"])
  verbo_sub: uno_de(["se ponía", "llegaba", "llovía", "enseñaba", "estaba"])
  sujeto_princ: uno_de(["armamos", "salimos", "corrimos", "cantamos", "viajamos"])

respuesta: sujeto_sub
tipo: completar

enunciado: "En la oración '{verbo_sub} {sujeto_sub}, {sujeto_princ} la carpa', ¿quién es el sujeto de la subordinada adverbial de tiempo?"

explicacion: |
  La subordinada es '{verbo_sub} {sujeto_sub}'. El sujeto de esta cláusula es '{sujeto_sub}', diferente del sujeto de la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["condicion", "conectores", "avanzado"]

variables:
  accion: uno_de(["salgas", "vengas", "termines", "llegues", "hables"])
  conector: "en cuanto"
  resultado: uno_de(["te avisaré", "te llamaré", "saldré", "volveré", "gritaré"])

respuesta: conector
tipo: completar

enunciado: "Completa la frase condicional-temporal: '{conector} {accion}, {resultado}'."

explicacion: |
  'En cuanto' introduce una condición temporal inmediata: la acción principal se desencadena instantáneamente al cumplirse la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["errores", "subjuntivo", "avanzado"]

variables:
  conector_erroneo: "después de"
  conector_correcto: "después de que"
  accion: uno_de(["llegues", "termines", "salgas", "vengas", "hables"])

respuesta: conector_correcto
tipo: completar

enunciado: "En la frase 'Te avisaré {conector_erroneo} {accion}', ¿cuál es la forma correcta del conector?"

explicacion: |
  'Después de' es una preposición que requiere un sustantivo o gerundio. Para introducir una oración con verbo conjugado, se debe usar la locución conjuntiva 'después de que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["anterioridad", "indicativo", "intermedio"]

variables:
  accion_pasada: uno_de(["comiste", "llegaste", "terminaste", "saliste", "hablaste"])
  accion_pasada_anterior: uno_de(["había comido", "había llegado", "había terminado", "había salido", "había hablado"])
  conector: "después de que"

respuesta: conector
tipo: completar

enunciado: "Para expresar anterioridad en el pasado con indicativo: '{accion_pasada} {conector} {accion_pasada_anterior}'."

explicacion: |
  Cuando la anterioridad es un hecho consumado en el pasado, 'después de que' se usa con indicativo (o pluscuamperfecto), a diferencia del subjuntivo en contextos futuros/inciertos.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["funcion", "pregunta", "basico"]

variables:
  accion: uno_de(["fue", "llegó", "terminó", "salió", "comenzó"])
  tiempo: uno_de(["ayer", "a las tres", "cuando llovía", "mañana", "siempre"])

respuesta: "¿cuándo?"
tipo: completar

enunciado: "La subordinada adverbial de tiempo responde principalmente a la pregunta: "

explicacion: |
  Estas oraciones indican el momento, duración o frecuencia de la acción principal, respondiendo a '¿cuándo?', '¿hasta cuándo?' o '¿desde cuándo?'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["comparacion", "gerundio", "intermedio"]

variables:
  accion1: uno_de(["cocinaba", "leía", "escuchaba", "trabajaba", "estudiaba"])
  accion2: uno_de(["llegaste", "sonó el teléfono", "terminó la película", "abrió la puerta", "llovió"])
  forma_subordinada: "mientras + verbo conjugado"
  forma_gerundio: "mientras + gerundio"

respuesta: forma_subordinada
tipo: completar

enunciado: "Para formar una subordinada adverbial de tiempo explícita (con sujeto propio) en lugar de una perífrasis con gerundio, usamos: "

explicacion: |
  'Mientras + gerundio' es una construcción perifrástica. La subordinada requiere 'mientras' seguido de un verbo conjugado con sujeto explícito o implícito.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["lista", "conectores", "basico"]

variables:
  conector: uno_de(["cuando", "mientras", "antes de que", "después de que"])
  accion: uno_de(["llegues", "termines", "salgas", "vengas"])

respuesta: conector
tipo: completar

enunciado: "¿Cuál de estos conectores NO es temporal? (Opción A: 'cuando', Opción B: 'mientras', Opción C: 'porque', Opción D: 'antes de que')"

explicacion: |
  'Porque' es un conector causal, no temporal. Los demás indican tiempo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "analisis", "intermedio"]

variables:
  subordinada: uno_de(["Cuando llueva", "Mientras duermas", "Antes de que salgas"])
  verbo_principal: uno_de(["llevaré", "avisaré", "saldré", "volveré", "gritaré"])
  objeto: uno_de(["el paraguas", "la noticia", "temprano", "tarde", "allí"])

respuesta: subordinada
tipo: completar

enunciado: "Completa la oración compuesta: '{subordinada}, {verbo_principal} {objeto}'."

explicacion: |
  La estructura es: Subordinada de Tiempo + (coma opcional) + Oración Principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["analisis", "principal", "intermedio"]

variables:
  subordinada: uno_de(["Mientras el sol se ponía", "Cuando llegaste", "Antes de que comieras"])
  accion_principal: uno_de(["armamos", "salimos", "corrimos", "cantamos", "viajamos"])
  objeto: uno_de(["la carpa", "temprano", "tarde", "allí", "el parque"])

respuesta: accion_principal
tipo: completar

enunciado: "En la oración '{subordinada}, {accion_principal} {objeto}', ¿cuál es el verbo de la oración principal?"

explicacion: |
  El verbo principal es el núcleo de la oración independiente que contiene la información central.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["futuro", "inmediatez", "avanzado"]

variables:
  accion_sub: uno_de(["llegues", "termines", "salgas", "vengas", "hables"])
  conector: "tan pronto como"
  accion_princ: uno_de(["te avisaré", "te llamaré", "saldré", "volveré", "gritaré"])

respuesta: conector
tipo: completar

enunciado: "Completa la frase de inmediatez futura: '{conector} {accion_sub}, {accion_princ}'."

explicacion: |
  'Tan pronto como' conecta una condición temporal futura con un resultado inmediato en el futuro.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["concordancia", "error", "intermedio"]

variables:
  sujeto: uno_de(["el equipo", "mi abuela", "los estudiantes", "el tren", "nosotros"])
  verbo_erroneo: uno_de(["llegaron", "llego", "llegamos", "llegué", "llegan"])
  verbo_correcto: uno_de(["llegó", "llegó", "llegaron", "llegó", "llegamos"])
  conector: "cuando"

respuesta: verbo_correcto
tipo: completar

enunciado: "En la oración '{sujeto} {conector} {verbo_erroneo}, hay un error de concordancia. ¿Cuál es la forma correcta del verbo?"

explicacion: |
  El verbo debe concordar en número y persona con el sujeto '{sujeto}'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["limite", "conectores", "basico"]

variables:
  accion: uno_de(["esperé", "trabajé", "estuve", "busqué", "corrí"])
  accion_final: uno_de(["llegó", "terminó", "apareció", "sonó", "llovió"])
  conector: "hasta que"

respuesta: conector
tipo: completar

enunciado: "Completa la oración que indica el fin de una acción: '{accion} {conector} {accion_final}'."

explicacion: |
  'Hasta que' marca el punto final temporal de la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["identificacion", "clausula", "intermedio"]

variables:
  subordinada: uno_de(["Cuando llueva", "Mientras duermas", "Antes de que salgas"])
  accion_principal: uno_de(["llevaré", "avisaré", "saldré", "volveré", "gritaré"])
  objeto: uno_de(["el paraguas", "la noticia", "temprano", "tarde", "allí"])

respuesta: subordinada
tipo: completar

enunciado: "En la oración '{subordinada}, {accion_principal} {objeto}', ¿cuál es la cláusula subordinada adverbial de tiempo?"

explicacion: |
  La cláusula subordinada es la que introduce el conector temporal y depende de la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["inicio", "pasado", "intermedio"]

variables:
  accion_inicial: uno_de(["conocí", "empecé", "llegué", "aprendí", "viajé"])
  conector: "desde que"
  accion_continua_pasada: uno_de(["estudié", "trabajé", "viví", "escribí", "viajé"])

respuesta: conector
tipo: completar

enunciado: "Completa la oración que indica el inicio en el pasado: '{accion_inicial} {conector} {accion_continua_pasada}'."

explicacion: |
  'Desde que' marca el origen temporal, incluso si la acción continúa en el pasado (y no en el presente).
```

## Sección: subordinada-causal (27 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Una oración subordinada causal expresa el motivo o la razón por la que ocurre lo que se dice en la oración principal."

explicacion: |
  Correcto. La función principal de la subordinada causal es responder a la pregunta '¿por qué?'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["estructura", "sintaxis"]

respuesta: "porque"
tipo: completar
respuestas_validas:
  - "porque"
  - "ya que"
  - "puesto que"

enunciado: "Completa la oración con un nexo causal adecuado: 'Llegué tarde al trabajo _______ hubo un accidente en la ruta.'"

explicacion: |
  Cualquier nexo causal estándar ('porque', 'ya que', 'puesto que') es válido para unir la causa con la consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["nexos", "uso_avanzado"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra 'Como' puede funcionar como nexo causal cuando se ubica al inicio de la oración subordinada."

explicacion: |
  Correcto. Ejemplo: 'Como llovió, no fuimos al parque'. Aquí 'Como' equivale a 'Porque'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["logica", "coherencia"]

respuesta: "por eso"
tipo: completar
respuestas_validas:
  - "por eso"
  - "por lo tanto"
  - "entonces"

enunciado: "Completa la secuencia causal: 'No comí nada. _______ tengo mucha hambre.'"

explicacion: |
  'Por eso' o 'por lo tanto' indican la consecuencia derivada de la causa anterior.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "avanzado"
  tags: ["ambiguedad", "uso_correcto"]

respuesta: verdadero
tipo: vf

enunciado: "La oración 'No fui a la fiesta porque estaba cansado' puede ser ambigua si no se aclara si 'porque estaba cansado' es la causa de no ir o la causa de no ir a la fiesta (es decir, si la causa es el cansancio o si la fiesta fue la causa del cansancio)."

explicacion: |
  Aunque comúnmente se interpreta como causa, la estructura puede generar dudas sobre la jerarquía causal si el contexto no es claro.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["estructura", "flexibilidad"]

respuesta: "porque"
tipo: completar
respuestas_validas:
  - "porque"
  - "ya que"
  - "puesto que"

enunciado: "Reescribe la oración poniendo la causa primero: 'No salió a pasear. _______ estaba lloviendo a cántaros.'"

explicacion: |
  Al invertir el orden, la causa se convierte en la primera proposición, introducida por un nexo causal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["confusion_comun"]

respuesta: falso
tipo: vf

enunciado: "La expresión 'para que' siempre introduce una oración subordinada causal."

explicacion: |
  Falso. 'Para que' introduce una subordinada final (de propósito), no causal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["nexos"]

respuesta: "por"
tipo: completar
respuestas_validas:
  - "por"
  - "a causa de"
  - "debido a"

enunciado: "Completa: 'El vuelo fue cancelado _______ la tormenta.'"

explicacion: |
  'Por', 'a causa de' o 'debido a' son nexos preposicionales causales.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "avanzado"
  tags: ["implicatura", "gramatica"]

respuesta: falso
tipo: vf

enunciado: "Una subordinada causal siempre debe tener un nexo explícito (como 'porque') para ser gramaticalmente correcta."

explicacion: |
  Aunque es lo común, la causalidad puede estar implícita o sugerida por el contexto, pero en el análisis formal de la subordinada, se busca el nexo o la estructura que la marque. Sin embargo, la afirmación es demasiado absoluta; existen construcciones participiales o absolutas que expresan causalidad sin nexos tradicionales. Pero en el contexto de enseñanza básica/intermedia, se enfatiza el nexo. Vamos a matizar: la pregunta evalúa si *siempre* es necesario. En español, la causalidad puede ser implícita. Por lo tanto, Falso es la respuesta más precisa lingüísticamente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["causalidad"]

respuesta: "porque"
tipo: completar
respuestas_validas:
  - "porque"
  - "ya que"

enunciado: "Completa: 'El vidrio se rompió _______ cayó una piedra.'"

explicacion: |
  Se requiere un nexo causal para unir el efecto con su origen directo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["locuciones"]

respuesta: verdadero
tipo: vf

enunciado: "La locución 'por la causa de que' es un nexo causal válido y correcto en español."

explicacion: |
  Es una forma correcta, aunque menos frecuente y más pesada que 'porque'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["estructura"]

respuesta: "tanto... como"
tipo: completar
respuestas_validas:
  - "tanto... como"
  - "así como"

enunciado: "Completa: 'Falló _______ no estudiara _______ se distrajo.'"

explicacion: |
  Se usan correlativos para enumerar múltiples causas de un mismo efecto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "avanzado"
  tags: ["comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible establecer una relación causal sin usar nexos explícitos, mediante la yuxtaposición o el contexto."

explicacion: |
  Correcto. Ejemplo: 'Llovía. No salí.' La causalidad se infiere.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["diferenciacion"]

variables:
  contexto: uno_de(["estudio", "trabajo", "ahorro"])
  objetivo: uno_de(["aprobar", "ganar dinero", "viajar"])

respuesta: "para"
tipo: input

enunciado: "Si quiero expresar propósito en 'Trabajo {objetivo}', ¿qué nexo uso? (Ej: Trabajo PARA ganar dinero)."

explicacion: |
  'Para' introduce la finalidad, no la causa. La causa sería 'porque necesito dinero'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["nexos", "identificacion"]

variables:
  nexo: uno_de(["porque", "ya que", "puesto que", "dado que"])
  causa: uno_de(["lluvia intensa", "un accidente", "el cierre de calles", "una huelga"])
  efecto: uno_de(["llegué tarde", "se canceló el evento", "hubo congestión", "perdí el tren"])

respuesta: "porque"
tipo: input

enunciado: "En la oración 'Llegué tarde {nexo} {causa}', ¿cuál es el nexo causal más común y directo que une ambas partes?"

explicacion: |
  El nexo 'porque' es el más frecuente para introducir una oración subordinada causal directa que explica la razón de un hecho.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["causal", "final", "diferenciacion"]

variables:
  accion: uno_de(["estudio", "trabajo", "ahorro", "viajo"])
  motivo_causal: uno_de(["por el examen", "por el sueldo", "por las vacaciones", "por el trabajo"])
  nexo_final: "para"

respuesta: "causal"
tipo: input

enunciado: "En la frase 'Estudio {motivo_causal}', ¿qué tipo de subordinada se presenta: causal o final?"

explicacion: |
  Es causal porque responde a la pregunta '¿por qué?'. Si fuera 'para aprobar', sería final (propósito).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["consecuencia", "identificacion"]

variables:
  causa: uno_de(["llovió mucho", "hubo un terremoto", "se cortó la luz", "falló el motor"])
  nexo: "por eso"

respuesta: "consecuencia"
tipo: input

enunciado: "En la frase '{causa}, {nexo} me quedé en casa', ¿qué rol cumple la primera parte?"

explicacion: |
  La primera parte es la causa. El nexo 'por eso' introduce la consecuencia resultante de esa causa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["nexos", "como"]

variables:
  motivo: uno_de(["tenía prisa", "sabía la respuesta", "quería ayudar", "no tenía dinero"])
  accion: uno_de(["corrió", "respondió", "intervino", "pidió prestado"])

respuesta: "Como"
tipo: input

enunciado: "Reescribí la oración 'Estaba {motivo}, así que {accion}' comenzando con el nexo causal 'Como'."

explicacion: |
  'Como' puede funcionar como nexo causal cuando va al inicio de la oración, equivalente a 'porque'. Ej: 'Como tenía prisa, corrió'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["transformacion", "sintesis"]

variables:
  causa: uno_de(["el frío", "la lluvia", "el viento", "la nieve"])
  efecto: uno_de(["Cerraron las calles", "Cancelaron el vuelo", "Suspendieron el partido", "Clausuraron el parque"])
  nexo: "ya que"

respuesta: efecto + " " + nexo + " " + causa + "."
tipo: completar

enunciado: "Transformá la relación causal: '{efecto}. La razón fue {causa}.' Usando el nexo '{nexo}'."

explicacion: |
  Se unen las oraciones usando el nexo causal para integrar la causa como subordinada. Ej: '{efecto} {nexo} {causa}.'
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["estructura", "principal"]

variables:
  causa: uno_de(["estaba cansado", "había mucho ruido", "no tenía ganas", "estaba lloviendo"])
  nexo: "porque"
  accion: uno_de(["me fui", "me callé", "me quedé", "salí"])

respuesta: "me " + accion
tipo: input

enunciado: "En la oración 'Me {accion} {nexo} {causa}', ¿cuál es la oración principal?"

explicacion: |
  La oración principal es 'Me fui/me callé/etc.', ya que es la que contiene el núcleo de la información y la subordinada depende de ella.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["inferencia", "comprension"]

variables:
  efecto: "cerró la ventana"
  causa: "estaba lloviendo"

respuesta: "porque " + causa
tipo: input

enunciado: "Si '{efecto}', ¿cuál es la causa más probable que se podría expresar con 'porque'?"

explicacion: |
  Se busca la relación lógica más directa. Ej: 'Cerró la ventana porque estaba lloviendo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["estructura", "orden"]

variables:
  causa: uno_de(["el retraso", "el error", "la falta", "el olvido"])
  nexo: "por"
  consecuencia: uno_de(["se perdió el tren", "fue reprendido", "perdió la llave", "llegó tarde"])

respuesta: "consecuencia"
tipo: input

enunciado: "En 'Por {causa}, {consecuencia}', ¿qué parte es la consecuencia?"

explicacion: |
  La consecuencia es la parte que sigue al nexo causal cuando este va al inicio. Aquí, '{consecuencia}' es el resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["final", "diferenciacion"]

variables:
  accion: uno_de(["estudia", "trabaja", "ahorra", "corre"])
  nexo_final: "para"

respuesta: "final"
tipo: input

enunciado: "En 'Estudia {nexo_final} aprobar', ¿qué tipo de subordinada es 'para aprobar'?"

explicacion: |
  Es una subordinada final, ya que expresa el propósito o meta de la acción principal, no la causa pasada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["correccion", "nexos"]

variables:
  causa: uno_de(["la tormenta", "el accidente", "la huelga", "la falta"])
  efecto: uno_de(["se canceló", "hubo demora", "cambió el plan", "se perdió tiempo"])
  nexo_erroneo: "si"

respuesta: "porque"
tipo: input

enunciado: "Corregí el nexo en: '{efecto} {nexo_erroneo} {causa}.' (Usar nexo causal estándar)."

explicacion: |
  'Si' es condicional. El nexo causal correcto es 'porque' (o 'ya que', 'puesto que'). Ej: 'Se canceló porque la tormenta'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["identificacion", "causa"]

variables:
  nexo: "porque"
  efecto: uno_de(["estoy cansado", "tengo hambre", "estoy frío", "estoy feliz"])
  causa: uno_de(["trabajé todo el día", "no comí", "hace mucho frío", "recibí una noticia"])

respuesta: causa
tipo: input

enunciado: "En 'Estoy cansado {nexo} {causa}', ¿cuál es la causa?"

explicacion: |
  La causa es la razón que produce el efecto. En este caso, '{causa}' es la causa del cansancio.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["logica", "diferenciacion"]

variables:
  causa: uno_de(["llueve", "hay sol", "hace frío", "hay viento"])
  nexo: "por eso"
  consecuencia: uno_de(["llevo paraguas", "uso gafas de sol", "me abrigue", "salgo a pasear"])

respuesta: "causa"
tipo: input

enunciado: "En 'Porque {causa}, {consecuencia}', ¿qué es '{causa}'?"

explicacion: |
  '{causa}' es la causa. La estructura 'Porque X, Y' indica que X es la razón de Y.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["transformacion", "nexos"]

variables:
  causa: uno_de(["la falta de recursos", "el cambio de normas", "la urgencia", "la disponibilidad"])
  efecto: uno_de(["se pospuso", "se adaptó", "se aceleró", "se canceló"])

respuesta: "Puesto que " + causa + ", " + efecto + "."
tipo: completar

enunciado: "Reescribí: '{efecto}. La razón es {causa}.' Usando 'Puesto que'."

explicacion: |
  Se integra la causa como subordinada al inicio. Ej: 'Puesto que la falta de recursos, se pospuso.'
```

