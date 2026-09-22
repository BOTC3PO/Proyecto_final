# Examen jefe — [PENDIENTE #662]

> Logro #662. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **100 preguntas totales** en 5/5 secciones.

---

## Sección: conectores-textuales (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["conectores_textuales", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un conector textual une oraciones o párrafos distintos, dándole cohesión al texto — sin conectores, un texto es una sucesión de oraciones sueltas."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: es distinto de un nexo, que une proposiciones DENTRO de la misma oración."

explicacion: |
  Verdadero: el conector opera entre oraciones/párrafos, no dentro de
  una sola oración.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["aditivos"]

variables:
  n: uno_de([1, 1])

respuesta: "aditivo"
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "causal"]

enunciado: "\"El libro es interesante. Además, está muy bien escrito.\" El conector \"además\" es de tipo..."

pasos:
  - "Suma información adicional en la misma dirección de la idea anterior."

explicacion: |
  Los conectores aditivos suman información en el mismo sentido.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["adversativos"]

variables:
  n: uno_de([1, 1])

respuesta: "adversativo"
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "consecutivo"]

enunciado: "\"Estudió mucho. Sin embargo, no aprobó.\" El conector \"sin embargo\" es de tipo..."

pasos:
  - "Opone la segunda idea a lo que se esperaría de la primera."

explicacion: |
  Los conectores adversativos marcan contraste u oposición entre
  ideas.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["causales"]

variables:
  n: uno_de([1, 1])

respuesta: "causal"
tipo: mc
opciones_explicitas: ["causal", "consecutivo", "temporal"]

enunciado: "\"Llegó tarde porque perdió el colectivo.\" El conector \"porque\" es de tipo..."

pasos:
  - "Explica la razón del hecho mencionado antes."

explicacion: |
  Los conectores causales explican el motivo o razón de algo.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["consecutivos"]

variables:
  n: uno_de([1, 1])

respuesta: "consecutivo"
tipo: mc
opciones_explicitas: ["causal", "consecutivo", "aditivo"]

enunciado: "\"Estudió mucho. Por lo tanto, aprobó.\" El conector \"por lo tanto\" es de tipo..."

pasos:
  - "Marca el resultado o consecuencia de lo dicho antes."

explicacion: |
  Los conectores consecutivos marcan el resultado que se sigue de la
  idea anterior.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["temporales"]

variables:
  conectores: ["primero", "luego", "finalmente"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector temporal, que ordena los hechos en el tiempo."

pasos:
  - "Este tipo de conector es especialmente frecuente en textos narrativos (ver `../tipos-textuales/`)."

explicacion: |
  Verdadero: los conectores temporales ordenan la secuencia de hechos
  o pasos.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["de_orden"]

variables:
  n: uno_de([1, 1])

respuesta: "de orden/organización"
tipo: mc
opciones_explicitas: ["de orden/organización", "temporal", "causal"]

enunciado: "\"En primer lugar\" y \"por último\", usados para organizar las PARTES de un texto (no el contenido narrado), son conectores de tipo..."

pasos:
  - "Organizan la estructura del texto en sí, no una secuencia de hechos narrados."

explicacion: |
  Los conectores de orden organizan las partes del propio texto,
  distinto de ordenar hechos en el tiempo.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["ejemplificadores"]

variables:
  conectores: ["por ejemplo", "es decir", "a saber"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector ejemplificador, que introduce un ejemplo o aclaración de lo dicho antes."

pasos:
  - "Frecuente en textos expositivos, para hacer más concreta una afirmación general."

explicacion: |
  Verdadero: los ejemplificadores introducen casos concretos que
  ilustran lo afirmado.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "tipos_textuales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo textual narrativo se apoya mucho en conectores temporales (\"luego\", \"después\", \"finalmente\")."

pasos:
  - "Ver `../tipos-textuales/`: coincide con la marca de conectores temporales ya vista ahí para el narrativo."

explicacion: |
  Verdadero: cada tipo textual privilegia ciertas familias de
  conectores según su propósito.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "tesis", "argumentos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto argumentativo se apoya mucho en conectores causales y consecutivos, coherente con la lógica de \"porque\"/\"por lo tanto\" usada al construir argumentos."

pasos:
  - "Ver `../argumentos/`: esos mismos conectores ya se mencionaron como típicos de la introducción de argumentos."

explicacion: |
  Verdadero: los conectores causales/consecutivos son centrales para
  el texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Estudió mucho. Por lo tanto, no aprobó\" suena raro porque \"por lo tanto\" anuncia una consecuencia esperada, y la segunda idea contradice esa expectativa."

pasos:
  - "En ese caso correspondería un conector adversativo (\"sin embargo\"), no uno consecutivo."

explicacion: |
  Verdadero: elegir mal la familia de conector genera una relación
  lógica incoherente entre las ideas, más allá de que suene raro.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  relaciones: ["sumar una idea nueva en la misma dirección", "marcar que la segunda idea contradice la expectativa de la primera", "explicar la razón de un hecho", "marcar el resultado de lo dicho antes"]
  familias: ["aditivo", "adversativo", "causal", "consecutivo"]
  idx: uno_de([0, 1, 2, 3])

respuesta: familias[idx]
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "causal", "consecutivo"]

enunciado: "Para \"{relaciones[idx]}\", conviene usar un conector..."

pasos:
  - "Cada familia de conector corresponde a un tipo específico de relación lógica entre ideas."

explicacion: |
  Elegir la familia correcta de conector depende de qué relación
  lógica real existe entre las dos ideas que se unen.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "oracion_compuesta", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Y\" (en \"Juan estudió y aprobó\") es un nexo dentro de una misma oración; \"además\" (en \"Juan estudió. Además, aprobó.\") es un conector textual entre dos oraciones distintas."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: la diferencia clave es si unen proposiciones dentro de una oración o entre oraciones/párrafos distintos."

explicacion: |
  Verdadero: nexo y conector textual cumplen funciones similares en
  escalas distintas (oración vs. texto).
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "significado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los conectores no cambian los hechos que se están contando, sólo señalan qué relación lógica existe entre esos hechos (suma, contraste, causa, consecuencia)."

pasos:
  - "El mismo par de oraciones puede leerse con relaciones distintas según qué conector se elija."

explicacion: |
  Verdadero: el conector es una señal de relación lógica, no un
  cambio del contenido informativo en sí.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "sin embargo"
tipo: completar

enunciado: "En \"El plan parecía perfecto. Sin embargo, algo salió mal en el último momento.\", ¿cuál es el conector textual usado?"

pasos:
  - "Marca el contraste entre la expectativa (\"parecía perfecto\") y lo que realmente pasó."

explicacion: |
  \"Sin embargo\" es un conector adversativo que marca la oposición
  entre las dos ideas.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "por lo tanto"
tipo: mc
opciones_explicitas: ["por lo tanto", "sin embargo", "por ejemplo"]

enunciado: "\"Llovió toda la noche. ..., el partido se suspendió.\" ¿Qué conector completa mejor la relación de consecuencia entre ambas ideas?"

pasos:
  - "La lluvia (causa) llevó a la suspensión (consecuencia): corresponde un conector consecutivo."

explicacion: |
  \"Por lo tanto\" marca correctamente que la segunda oración es
  consecuencia de la primera.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "variedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Sin embargo\", \"no obstante\" y \"en cambio\" son conectores distintos que pueden expresar el mismo tipo de relación adversativa."

pasos:
  - "Elegir entre ellos suele ser una decisión de estilo, no cambia la relación lógica señalada."

explicacion: |
  Verdadero: dentro de una misma familia hay varias opciones de
  conector con matices de estilo, no de lógica.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "metodo"]

enunciado: "Ordená los pasos para revisar si los conectores de un texto propio están bien elegidos."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada conector usado entre oraciones o párrafos"
  - "Determinar qué relación lógica real existe entre las ideas que conecta (suma, contraste, causa, consecuencia)"
  - "Comparar esa relación con la familia del conector elegido"
  - "Corregir si el conector elegido no corresponde a la relación lógica real"
respuesta_orden: ["Identificar cada conector usado entre oraciones o párrafos", "Determinar qué relación lógica real existe entre las ideas que conecta (suma, contraste, causa, consecuencia)", "Comparar esa relación con la familia del conector elegido", "Corregir si el conector elegido no corresponde a la relación lógica real"]
explicacion: |
  El proceso va de identificar los conectores usados a verificar si
  corresponden realmente a la relación lógica entre las ideas.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "cohesion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los conectores textuales son una de las tres herramientas de cohesión estudiadas en esta subrama, junto con la referencia (anáfora/catáfora) y la progresión temática."

pasos:
  - "Ver `../referencia-anafora-y-catafora/` y `../progresion-tematica/`: los tres son nodos hermanos que dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: los tres temas abordan distintos mecanismos de cohesión
  textual, complementarios entre sí.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al revisar un texto propio (etapa de revisión de `../produccion-escrita-compleja/`), conviene chequear específicamente si los conectores usados reflejan la relación lógica real entre las ideas, no sólo si \"suenan bien\"."

pasos:
  - "Un conector que suena natural pero indica una relación lógica equivocada puede confundir al lector sobre la argumentación real del texto."

explicacion: |
  Verdadero: la aplicación práctica de este tema es específicamente
  auditar la lógica de los conectores durante la revisión de un
  texto propio.
```

## Sección: correo-formal (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "basico"
  tags: ["correo_formal", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un correo formal es la comunicación escrita estándar en contextos laborales, académicos o institucionales, con un registro profesional."

pasos:
  - "Se usa incluso cuando existe cierta confianza, si el contexto espera profesionalismo."

explicacion: |
  Verdadero: es la definición central de correo formal.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "basico"
  tags: ["estructura", "asunto"]

variables:
  asuntos: ["Consulta sobre entrega de proyecto", "Hola"]
  tipos: ["asunto claro", "asunto vago"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["asunto claro", "asunto vago"]

enunciado: "El asunto \"{asuntos[idx]}\" es un ejemplo de..."

pasos:
  - "Un buen asunto resume en pocas palabras el motivo del correo."

explicacion: |
  El asunto debe permitir entender de qué trata el correo antes de
  abrirlo.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "basico"
  tags: ["estructura", "saludo"]

variables:
  n: uno_de([1, 1])

respuesta: "Estimado/a"
tipo: completar

enunciado: "El saludo formal más recomendado para abrir un correo formal, seguido del nombre o apellido, es..."

pasos:
  - "Es el saludo estándar recomendado en la teoría."

explicacion: |
  \"Estimado/a\" es el saludo formal más habitual para este tipo de
  correo.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["estructura", "cuerpo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El cuerpo de un correo formal va directo al motivo del correo desde el principio, organizado en párrafos cortos, sin rodeos innecesarios."

pasos:
  - "Es la estructura recomendada para el cuerpo del correo."

explicacion: |
  Verdadero: la claridad y concisión son centrales en el cuerpo del
  correo formal.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["estructura", "cierre"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El cierre de un correo formal incluye una frase de cierre cortés, una despedida formal (\"Saludos cordiales\", \"Atentamente\") y una firma con nombre completo."

pasos:
  - "Es la estructura de cierre descrita en la teoría."

explicacion: |
  Verdadero: es la estructura estándar de cierre para un correo
  formal.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["tono"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El registro formal no significa ser vago o dar muchas vueltas antes de decir lo que se necesita, sino usar un vocabulario respetuoso yendo al punto de forma clara y concisa."

pasos:
  - "Es el principio de tono central del correo formal."

explicacion: |
  Verdadero: formalidad y claridad directa no son incompatibles.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "basico"
  tags: ["tono", "abreviaturas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un correo formal se evitan las abreviaturas de chat (\"xq\", \"tmb\") y los emojis."

pasos:
  - "Son marcas de registro informal que no corresponden al contexto formal."

explicacion: |
  Verdadero: es una regla básica de tono para este tipo de
  comunicación.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["claridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un correo formal pide algo, conviene que quede explícito y fácil de identificar qué se está pidiendo (una fecha, una confirmación, un documento)."

pasos:
  - "Un correo ambiguo obliga a la otra persona a adivinar o preguntar de vuelta, perdiendo tiempo de ambos lados."

explicacion: |
  Verdadero: la claridad del pedido es central para que el correo
  cumpla su función eficazmente.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["errores_comunes", "asunto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dejar el asunto vacío o vago dificulta que el destinatario entienda de qué se trata el correo antes de abrirlo."

pasos:
  - "Es uno de los errores comunes descritos en la teoría."

explicacion: |
  Verdadero: el asunto vacío o vago es un error frecuente que
  dificulta la comunicación efectiva.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["errores_comunes", "tono"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un tono demasiado informal para el contexto (abreviaturas, emojis, tuteo inapropiado según la relación) es un error común en correos formales."

pasos:
  - "Es otro de los errores comunes descritos en la teoría."

explicacion: |
  Verdadero: el desajuste de registro es un error frecuente en este
  tipo de correo.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["errores_comunes", "ortografia_y_tildacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los errores de ortografía y puntuación son igual de relevantes en un correo formal que en un CV, con impacto directo en la impresión profesional que se genera."

pasos:
  - "Ver `../ortografia-y-tildacion/` y `../signos-de-puntuacion/`: aplican del mismo modo acá que en `../cv/`."

explicacion: |
  Verdadero: la corrección formal tiene el mismo peso en este género
  que en el CV.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["errores_comunes", "extension"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un correo demasiado largo, sin ir al punto, obliga al lector a buscar la información clave en medio de párrafos innecesarios."

pasos:
  - "Es otro de los errores comunes descritos en la teoría."

explicacion: |
  Verdadero: la extensión excesiva sin ir al punto dificulta que el
  destinatario entienda rápido el mensaje central.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["saludo", "practica"]

variables:
  saludos: ["Estimado Sr. González", "Qué tal!"]
  tipos: ["formal", "informal"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["formal", "informal"]

enunciado: "El saludo \"{saludos[idx]}\" es de registro..."

pasos:
  - "\"Estimado\" es la fórmula formal estándar; \"qué tal\" es demasiado informal para este contexto."

explicacion: |
  El registro del saludo debe ajustarse al contexto formal esperado
  en este tipo de correo.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El correo formal reutiliza las herramientas de producción escrita compleja (estructura, claridad, corrección formal) aplicadas a este género concreto y de alta frecuencia de uso."

pasos:
  - "Ver `../produccion-escrita-compleja/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "avanzado"
  tags: ["contexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un correo formal se puede necesitar incluso cuando existe cierta confianza personal con el destinatario, si el contexto (una consulta laboral oficial, por ejemplo) espera un registro profesional."

pasos:
  - "El registro formal depende del contexto, no sólo del nivel de confianza personal."

explicacion: |
  Verdadero: es un matiz importante sobre cuándo corresponde usar
  registro formal más allá de la relación personal.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["asunto", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Consulta sobre fecha límite de entrega del informe"
tipo: mc
opciones_explicitas: ["Consulta sobre fecha límite de entrega del informe", "Pregunta", "Hola, necesito algo"]

enunciado: "¿Cuál de estos asuntos comunica mejor el motivo de un correo sobre la fecha de entrega de un informe?"

pasos:
  - "El asunto debe resumir en pocas palabras claras el motivo específico del correo."

explicacion: |
  Un asunto claro y específico permite al destinatario entender el
  motivo antes de abrir el correo.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "avanzado"
  tags: ["claridad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "¿Podría confirmarme si la entrega es el viernes 15 o el lunes 18?"
tipo: mc
opciones_explicitas: ["¿Podría confirmarme si la entrega es el viernes 15 o el lunes 18?", "Necesito saber lo de la entrega, cuando pueda"]

enunciado: "¿Cuál de estas dos formas de pedir información en un correo formal es más clara y fácil de responder?"

pasos:
  - "Especificar exactamente qué se necesita saber (las dos fechas posibles) facilita una respuesta rápida y precisa."

explicacion: |
  Un pedido específico y explícito es más fácil de responder que uno
  vago, ahorrando tiempo a ambas partes.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "intermedio"
  tags: ["correo_formal", "metodo"]

enunciado: "Ordená los pasos para redactar un correo formal."
tipo: ordenar
opciones_explicitas:
  - "Escribir un asunto claro que resuma el motivo del correo"
  - "Abrir con un saludo formal apropiado al destinatario"
  - "Desarrollar el cuerpo yendo directo al motivo, con el pedido o información explícita"
  - "Cerrar con una frase cortés, despedida formal y firma completa"
respuesta_orden: ["Escribir un asunto claro que resuma el motivo del correo", "Abrir con un saludo formal apropiado al destinatario", "Desarrollar el cuerpo yendo directo al motivo, con el pedido o información explícita", "Cerrar con una frase cortés, despedida formal y firma completa"]
explicacion: |
  El proceso sigue la estructura de cuatro partes descrita en la
  teoría: asunto, saludo, cuerpo y cierre.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "avanzado"
  tags: ["correo_formal", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El correo formal es el segundo de los tres géneros de escritura profesional de esta subrama, junto a CV e informe técnico."

pasos:
  - "Ver `../cv/` y `../informe-tecnico/`: los tres nodos hermanos dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros dos de la
  subrama de escritura profesional.
```

```
metadata:
  materia: "lengua"
  tema: "correo_formal"
  nivel: "avanzado"
  tags: ["correo_formal", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de enviar un correo formal importante, conviene revisar que el asunto sea claro, el pedido esté explícito, y no haya errores de ortografía ni de tono."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en la vida
  laboral o académica cotidiana.
```

## Sección: cv (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "basico"
  tags: ["cv", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV es un documento breve que resume la formación, experiencia y habilidades de una persona, pensado para que un empleador decida rápidamente si convocarla a una entrevista."

pasos:
  - "No es una autobiografía completa, es una selección estratégica de información."

explicacion: |
  Verdadero: es la definición central de CV.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["cv", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV no debe contar todo lo que la persona hizo en su vida, sino seleccionar lo que es relevante para el puesto específico al que se aplica."

pasos:
  - "Es el principio central de brevedad y relevancia descrito en la teoría."

explicacion: |
  Verdadero: la selección estratégica es lo que distingue a un buen
  CV de un relato exhaustivo.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "basico"
  tags: ["secciones"]

variables:
  n: uno_de([1, 1])

respuesta: "datos de contacto"
tipo: mc
opciones_explicitas: ["datos de contacto", "formación académica", "experiencia laboral"]

enunciado: "La sección de un CV que incluye nombre, teléfono, email y ciudad se llama..."

pasos:
  - "Sin exceso de información personal irrelevante."

explicacion: |
  Los datos de contacto son la primera sección típica de un CV.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["formacion_academica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección de formación académica se ordena cronológicamente de forma inversa: lo más reciente primero."

pasos:
  - "Es el orden recomendado para que lo más relevante actualmente aparezca primero."

explicacion: |
  Verdadero: el orden cronológico inverso es la convención estándar
  para esta sección.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["experiencia_laboral"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección de experiencia laboral también se ordena cronológicamente de forma inversa, igual que la formación académica."

pasos:
  - "Es el mismo criterio de orden aplicado a esta sección."

explicacion: |
  Verdadero: el orden cronológico inverso se aplica de forma
  consistente en ambas secciones.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["habilidades"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV suele incluir tanto habilidades técnicas (idiomas, software) como habilidades blandas (trabajo en equipo, comunicación), relevantes al puesto."

pasos:
  - "Es una de las secciones típicas descritas en la teoría."

explicacion: |
  Verdadero: incluir ambos tipos de habilidades es una práctica
  común y recomendada.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["objetivo_profesional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El objetivo profesional, si se incluye, debería ser breve (2-3 líneas), resumiendo qué se busca y qué se aporta."

pasos:
  - "Es una sección opcional descrita en la teoría."

explicacion: |
  Verdadero: la brevedad aplica también a esta sección opcional del
  CV.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["verbos_de_accion"]

variables:
  frases: ["coordiné el equipo de ventas", "estuve a cargo de tareas varias relacionadas con ventas"]
  tipos: ["verbo de acción concreto", "descripción vaga y pasiva"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["verbo de acción concreto", "descripción vaga y pasiva"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Los verbos de acción concretos comunican más claramente qué se hizo realmente que las descripciones vagas."

explicacion: |
  Los verbos de acción concretos son preferibles a las descripciones
  vagas y pasivas al redactar un CV.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["verbos_de_accion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar verbos de acción concretos (\"coordiné\", \"desarrollé\", \"lideré\") comunica más claramente qué se hizo realmente que descripciones vagas y pasivas."

pasos:
  - "Es el principio de redacción central para describir experiencia laboral en un CV."

explicacion: |
  Verdadero: es el principio de redacción recomendado descrito en la
  teoría.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["errores_comunes", "ortografia_y_tildacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV con errores de ortografía y puntuación genera una mala primera impresión sobre el cuidado y la atención al detalle de quien lo escribió."

pasos:
  - "Ver `../ortografia-y-tildacion/` y `../signos-de-puntuacion/`: aplican directamente acá, con consecuencias prácticas reales."

explicacion: |
  Verdadero: la corrección formal tiene un peso concreto en la
  evaluación de un CV.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["errores_comunes", "formato"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un formato inconsistente (tamaños de letra, espaciados o alineaciones distintas entre secciones) da una impresión de descuido en un CV."

pasos:
  - "Es uno de los errores comunes descritos en la teoría."

explicacion: |
  Verdadero: la consistencia formal es parte de la calidad percibida
  de un CV.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["extension"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para la mayoría de los puestos de entrada, un CV de una sola página suele ser suficiente y más efectivo que uno largo."

pasos:
  - "Es coherente con el principio central de brevedad y relevancia."

explicacion: |
  Verdadero: la brevedad recomendada tiene un límite práctico
  concreto para puestos de entrada.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["relevancia", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La misma persona puede (y debería) tener versiones distintas de su CV según a qué puesto aplique, resaltando la experiencia más pertinente en cada caso."

pasos:
  - "Es la aplicación práctica del principio de relevancia: seleccionar lo pertinente para cada puesto específico."

explicacion: |
  Verdadero: adaptar el CV según el puesto es una práctica
  recomendada, no un CV único para todo.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["datos_de_contacto", "relevancia"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un buen CV debería incluir toda la información personal posible (estado civil, religión, gustos personales) para que el empleador conozca completamente a la persona."

pasos:
  - "Los datos de contacto deberían limitarse a lo relevante (nombre, teléfono, email, ciudad), sin exceso de información personal irrelevante al puesto."

explicacion: |
  Falso: el exceso de información personal irrelevante no ayuda y
  puede distraer del contenido relevante para el puesto.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El CV reutiliza las herramientas de producción escrita compleja (estructura, claridad, corrección formal) aplicadas a este género concreto y práctico."

pasos:
  - "Ver `../produccion-escrita-compleja/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["verbos_de_accion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Desarrollé el sistema de inventario para reducir errores de stock en un 30%"
tipo: mc
opciones_explicitas: ["Desarrollé el sistema de inventario para reducir errores de stock en un 30%", "Estuve encargado de cosas relacionadas con el inventario"]

enunciado: "¿Cuál de estas dos descripciones de experiencia laboral sigue mejor los principios de redacción de un CV?"

pasos:
  - "Un verbo de acción concreto con un resultado medible comunica mucho más que una descripción vaga."

explicacion: |
  La versión con verbo de acción y resultado concreto es más
  efectiva que la descripción vaga y pasiva.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["cv", "importancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El CV suele ser el primer contacto escrito con un potencial empleador, por lo que la brevedad, la selección estratégica y la corrección formal tienen consecuencias prácticas directas."

pasos:
  - "Es la conclusión central sobre la importancia práctica de este tema."

explicacion: |
  Verdadero: es la síntesis de por qué dominar la redacción de un CV
  es una habilidad de alta demanda práctica.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["cv", "metodo"]

enunciado: "Ordená los pasos para redactar un CV adaptado a un puesto específico."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué experiencia y habilidades son relevantes para ese puesto específico"
  - "Organizar las secciones (contacto, formación, experiencia, habilidades) en orden cronológico inverso donde corresponda"
  - "Redactar cada descripción con verbos de acción concretos"
  - "Revisar ortografía, puntuación y consistencia de formato antes de enviarlo"
respuesta_orden: ["Identificar qué experiencia y habilidades son relevantes para ese puesto específico", "Organizar las secciones (contacto, formación, experiencia, habilidades) en orden cronológico inverso donde corresponda", "Redactar cada descripción con verbos de acción concretos", "Revisar ortografía, puntuación y consistencia de formato antes de enviarlo"]
explicacion: |
  El proceso va de seleccionar la información relevante a redactarla
  con buenas prácticas y revisarla antes de enviarla.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["cv", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El CV es el primero de los tres géneros de escritura profesional de esta subrama, junto a correo formal e informe técnico."

pasos:
  - "Ver `../correo-formal/` y `../informe-tecnico/`: los tres nodos hermanos dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros dos de la
  subrama de escritura profesional.
```

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["cv", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al preparar un CV para una postulación real, conviene seleccionar sólo la experiencia relevante para ese puesto, usar verbos de acción concretos, y revisar cuidadosamente ortografía y formato antes de enviarlo."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en una
  postulación laboral real.
```

## Sección: informe-tecnico (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["informe_tecnico", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un informe técnico comunica de forma estructurada los resultados de un trabajo, investigación o proceso, para que un lector sin haber participado entienda qué se hizo, qué se encontró y qué se recomienda."

pasos:
  - "Es la definición central de este tipo de documento."

explicacion: |
  Verdadero: es la definición central de informe técnico.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["secciones", "resumen_ejecutivo"]

variables:
  n: uno_de([1, 1])

respuesta: "resumen ejecutivo"
tipo: mc
opciones_explicitas: ["resumen ejecutivo", "metodología", "conclusiones"]

enunciado: "La sección de un informe técnico que resume en uno o pocos párrafos qué se hizo, qué se encontró y qué se recomienda se llama..."

pasos:
  - "Pensada para alguien que sólo tiene tiempo de leer eso."

explicacion: |
  El resumen ejecutivo condensa lo esencial de todo el informe.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["secciones", "introduccion"]

variables:
  n: uno_de([1, 1])

respuesta: "introducción/contexto"
tipo: mc
opciones_explicitas: ["introducción/contexto", "resultados", "resumen ejecutivo"]

enunciado: "La sección que explica por qué se hizo el trabajo y qué problema o pregunta lo originó se llama..."

pasos:
  - "Da el contexto necesario antes de entrar en cómo se hizo el trabajo."

explicacion: |
  La introducción/contexto explica el origen y propósito del trabajo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["secciones", "metodologia"]

variables:
  n: uno_de([1, 1])

respuesta: "metodología"
tipo: mc
opciones_explicitas: ["metodología", "resultados", "resumen ejecutivo"]

enunciado: "La sección que describe cómo se hizo el trabajo (qué proceso, herramientas o datos se usaron) se llama..."

pasos:
  - "Permite que otra persona pueda evaluar la validez del resultado o repetir el proceso."

explicacion: |
  La metodología detalla el proceso seguido para llegar a los
  resultados.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["secciones", "resultados"]

variables:
  n: uno_de([1, 1])

respuesta: "resultados"
tipo: mc
opciones_explicitas: ["resultados", "metodología", "introducción/contexto"]

enunciado: "La sección que presenta qué se encontró, con datos concretos (tablas, gráficos si corresponde), se llama..."

pasos:
  - "Es la sección central donde se muestran los hallazgos del trabajo."

explicacion: |
  Los resultados presentan los hallazgos concretos del trabajo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["secciones", "conclusiones"]

variables:
  n: uno_de([1, 1])

respuesta: "conclusiones y recomendaciones"
tipo: mc
opciones_explicitas: ["conclusiones y recomendaciones", "metodología", "resumen ejecutivo"]

enunciado: "La sección que explica qué implican los resultados y qué acción concreta se sugiere a partir de ellos se llama..."

pasos:
  - "Es la sección de cierre que traduce los resultados en implicaciones prácticas."

explicacion: |
  Las conclusiones y recomendaciones cierran el informe con
  implicaciones y sugerencias concretas.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["resumen_ejecutivo", "orden"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Es habitual escribir el resumen ejecutivo al final del proceso de redacción, pero se ubica al principio del documento, porque es lo primero que va a leer la mayoría de los destinatarios."

pasos:
  - "Se escribe al final porque recién ahí se sabe con precisión qué decir de forma resumida."

explicacion: |
  Verdadero: es una particularidad importante sobre el orden de
  escritura vs. el orden de lectura del resumen ejecutivo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un correo o un CV, el informe técnico prioriza la objetividad: describir lo hecho y encontrado con datos verificables, evitando opiniones sin sustento."

pasos:
  - "Es un principio central de redacción en este tipo de documento."

explicacion: |
  Verdadero: la objetividad es un principio distintivo del informe
  técnico frente a otros géneros de escritura profesional.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["objetividad", "practica"]

variables:
  frases: ["los resultados fueron muy buenos", "los resultados mejoraron un 23% respecto del período anterior"]
  tipos: ["adjetivo vago sin sustento", "dato concreto verificable"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["adjetivo vago sin sustento", "dato concreto verificable"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Los datos concretos verificables son preferibles a los adjetivos vagos sin sustento en un informe técnico."

explicacion: |
  El informe técnico privilegia datos concretos y verificables por
  sobre adjetivos vagos.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["estructura", "numeracion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un informe técnico largo se beneficia de títulos de sección numerados y, si corresponde, un índice, para que el lector pueda navegar directo a la parte que le interesa."

pasos:
  - "Permite no tener que leer todo el documento de corrida para encontrar una sección específica."

explicacion: |
  Verdadero: la organización con títulos numerados facilita la
  navegación en documentos extensos.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["metodologia", "validez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Describir la metodología con detalle permite que otra persona pueda evaluar si el proceso usado fue adecuado, o incluso intentar repetirlo."

pasos:
  - "Es la razón central por la que la metodología es una sección obligatoria en un informe técnico riguroso."

explicacion: |
  Verdadero: la transparencia metodológica es central para la
  credibilidad de un informe técnico.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "produccion_escrita_compleja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja enseña a organizar un texto largo en general; el informe técnico agrega una estructura fija y específica (resumen, contexto, metodología, resultados, conclusiones) propia de este género."

pasos:
  - "Ver `../produccion-escrita-compleja/`: es el prerrequisito general que este tema especializa."

explicacion: |
  Verdadero: es la diferencia entre las herramientas generales de
  escritura larga y la estructura específica de este género.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["secciones", "orden"]

enunciado: "Ordená las secciones típicas de un informe técnico según aparecen en el documento final."
tipo: ordenar
opciones_explicitas:
  - "Resumen ejecutivo"
  - "Introducción/contexto"
  - "Metodología"
  - "Resultados"
  - "Conclusiones y recomendaciones"
respuesta_orden: ["Resumen ejecutivo", "Introducción/contexto", "Metodología", "Resultados", "Conclusiones y recomendaciones"]
explicacion: |
  El orden sigue la estructura estándar de un informe técnico
  completo, aunque el resumen ejecutivo se escriba último en el
  proceso de redacción.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "audiencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un informe técnico debería poder entenderse sin necesitar explicaciones adicionales del autor, aunque el lector no haya participado del trabajo original."

pasos:
  - "Es un requisito central de claridad y autosuficiencia del documento."

explicacion: |
  Verdadero: la autosuficiencia del documento (no depender de
  explicaciones orales adicionales) es un objetivo central del
  informe técnico.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["resumen_ejecutivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El resumen ejecutivo debería permitir que alguien que sólo lo lea a él entienda lo esencial de todo el informe, sin necesitar leer las demás secciones."

pasos:
  - "Es el propósito central de esta sección, distinta de una simple introducción."

explicacion: |
  Verdadero: el resumen ejecutivo debe funcionar como una versión
  autosuficiente y condensada del informe completo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["resultados", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección de resultados de un informe técnico debería incluir datos concretos (tablas, gráficos si corresponde), no sólo una descripción general sin cifras."

pasos:
  - "Es coherente con el principio general de objetividad y datos verificables del informe técnico."

explicacion: |
  Verdadero: los resultados con datos concretos son más útiles y
  verificables que una descripción vaga.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["conclusiones", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Se recomienda aumentar la frecuencia de mantenimiento a cada 3 meses, dado el incremento del 15% en fallas detectadas"
tipo: mc
opciones_explicitas: ["Se recomienda aumentar la frecuencia de mantenimiento a cada 3 meses, dado el incremento del 15% en fallas detectadas", "Habría que hacer algo con el mantenimiento en algún momento"]

enunciado: "¿Cuál de estas dos recomendaciones sigue mejor los principios de un informe técnico?"

pasos:
  - "Una recomendación concreta, con acción específica y respaldo en datos, es más útil que una vaga sin sustento."

explicacion: |
  Las recomendaciones deberían ser concretas y estar respaldadas por
  los datos presentados en el informe.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["informe_tecnico", "metodo"]

enunciado: "Ordená los pasos para redactar un informe técnico completo."
tipo: ordenar
opciones_explicitas:
  - "Redactar contexto, metodología y resultados con datos concretos"
  - "Redactar conclusiones y recomendaciones basadas en esos resultados"
  - "Escribir el resumen ejecutivo al final, condensando lo esencial de todo el informe"
  - "Ubicar el resumen ejecutivo al principio del documento, y revisar la numeración de secciones"
respuesta_orden: ["Redactar contexto, metodología y resultados con datos concretos", "Redactar conclusiones y recomendaciones basadas en esos resultados", "Escribir el resumen ejecutivo al final, condensando lo esencial de todo el informe", "Ubicar el resumen ejecutivo al principio del documento, y revisar la numeración de secciones"]
explicacion: |
  El proceso de escritura no sigue el mismo orden que el de lectura:
  el resumen ejecutivo se redacta último pero se ubica primero.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El informe técnico es el tercero y último de los géneros de escritura profesional de esta subrama, junto a CV y correo formal."

pasos:
  - "Ver `../cv/` y `../correo-formal/`: los tres nodos hermanos dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: cierra la subrama completa de escritura profesional de
  alta demanda práctica.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al redactar un informe técnico real, conviene incluir un resumen ejecutivo claro, describir la metodología con suficiente detalle para que sea evaluable, y basar las conclusiones en datos concretos presentados en los resultados."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en un contexto
  laboral o académico real.
```

## Sección: progresion-tematica (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "basico"
  tags: ["tema", "rema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En cada oración, el tema es de qué habla (generalmente lo ya conocido) y el rema es la información nueva que se dice sobre ese tema."

pasos:
  - "\"El río nace en la montaña\": \"el río\" es el tema, \"nace en la montaña\" es el rema."

explicacion: |
  Verdadero: tema y rema son las dos partes básicas del análisis de
  progresión temática.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "basico"
  tags: ["progresion_tematica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La progresión temática es el patrón según el cual el tema de cada oración se relaciona con la información de las oraciones anteriores."

pasos:
  - "Es lo que hace que un texto avance de forma ordenada y no salte de un lado a otro sin conexión."

explicacion: |
  Verdadero: es la definición central de este tema.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["tema_constante"]

variables:
  n: uno_de([1, 1])

respuesta: "tema constante"
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"El río nace en la montaña. Él atraviesa tres provincias. Él desemboca en el mar.\" ¿Qué tipo de progresión temática usa este texto?"

pasos:
  - "El mismo tema (\"el río\"/\"él\") se mantiene a lo largo de las tres oraciones, agregando remas distintos."

explicacion: |
  La progresión de tema constante mantiene el mismo tema y va
  agregando información nueva sobre él.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_lineal"]

variables:
  n: uno_de([1, 1])

respuesta: "progresión lineal"
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"El río nace en la montaña. La montaña tiene nieves eternas. Las nieves se derriten en verano.\" ¿Qué tipo de progresión temática usa este texto?"

pasos:
  - "El rema de cada oración (\"la montaña\", \"las nieves\") se convierte en el tema de la siguiente."

explicacion: |
  La progresión lineal encadena el rema de una oración como tema de
  la siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["temas_derivados"]

variables:
  n: uno_de([1, 1])

respuesta: "temas derivados"
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"La ciudad tiene un clima variado. Sus calles son angostas. Su gente es muy hospitalaria.\" ¿Qué tipo de progresión temática usa este texto?"

pasos:
  - "\"Clima\", \"calles\" y \"gente\" son distintos aspectos derivados de un hipertema común: \"la ciudad\"."

explicacion: |
  La progresión con temas derivados desarrolla varios aspectos
  distintos de un mismo hipertema general.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["tema_constante", "referencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la progresión de tema constante, el tema que se repite suele expresarse con pronombres u otros mecanismos de referencia en vez de repetir siempre la misma palabra."

pasos:
  - "Ver `../referencia-anafora-y-catafora/`: \"él\" en vez de repetir \"el río\" en cada oración."

explicacion: |
  Verdadero: la progresión temática se apoya directamente en los
  mecanismos de referencia ya vistos.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_tematica", "claridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto sin progresión temática ordenada resulta confuso, aunque cada oración esté bien escrita por separado."

pasos:
  - "El lector pierde el hilo de qué se está desarrollando si el texto salta de tema en tema sin patrón."

explicacion: |
  Verdadero: la falta de progresión temática es un problema de
  coherencia global, no de corrección oración por oración.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "conectores_textuales", "referencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se puede conectar bien las oraciones y usar bien la referencia, y aun así el texto puede saltar de tema en tema sin ningún patrón reconocible."

pasos:
  - "Ver `../conectores-textuales/` y `../referencia-anafora-y-catafora/`: cada herramienta cubre un aspecto distinto de la cohesión, ninguna sola es suficiente."

explicacion: |
  Verdadero: es la razón por la que hace falta un tercer tema
  (progresión temática) además de conectores y referencia.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "practica"]

variables:
  fragmentos: ["El auto se averió en la ruta. El auto tenía diez años. El auto nunca había recibido mantenimiento", "El auto se averió en la ruta. La ruta estaba desierta a esa hora. Esa hora era la peor para pedir ayuda"]
  tipos: ["tema constante", "progresión lineal"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"{fragmentos[idx]}\" es un ejemplo de..."

pasos:
  - "Si el mismo tema se repite en las tres oraciones, es tema constante. Si el rema de una pasa a ser tema de la siguiente, es lineal."

explicacion: |
  Cada fragmento fue construido para ejemplificar un tipo distinto de
  progresión temática.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["temas_derivados", "hipertema"]

variables:
  n: uno_de([1, 1])

respuesta: "hipertema"
tipo: completar

enunciado: "En la progresión con temas derivados, el tema general del que se desprenden los distintos aspectos particulares se llama..."

pasos:
  - "\"La ciudad\" es el hipertema del que \"clima\", \"calles\" y \"gente\" son aspectos derivados."

explicacion: |
  El hipertema es el tema general que engloba a los temas derivados
  particulares de cada oración.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto largo puede combinar los tres tipos de progresión temática en distintos tramos, no tiene que usar sólo uno de principio a fin."

pasos:
  - "Un párrafo puede usar tema constante y el siguiente pasar a progresión lineal, según convenga a lo que se está desarrollando."

explicacion: |
  Verdadero: los tres tipos son herramientas complementarias, no
  opciones excluyentes para todo un texto.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"El río nace en la montaña. Mi comida favorita es la pizza. El auto de mi tío es rojo.\" es un buen ejemplo de progresión temática bien construida."

pasos:
  - "No hay ninguna relación entre los temas de las tres oraciones: cada una salta a algo completamente distinto sin conexión."

explicacion: |
  Falso: es exactamente el tipo de texto sin progresión temática que
  resulta confuso para el lector, aunque cada oración esté bien
  escrita.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_lineal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la progresión lineal, el texto avanza como una cadena: lo nuevo de una oración se convierte en el punto de partida de la siguiente."

pasos:
  - "Cada rema pasa a ser tema en la oración siguiente, formando una secuencia encadenada."

explicacion: |
  Verdadero: es la imagen central para entender la progresión
  lineal, distinta del tema constante.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["tema_constante", "temas_derivados", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre tema constante y temas derivados es que en el primero se repite literalmente el mismo tema, y en el segundo cada oración toca un aspecto distinto de un hipertema común."

pasos:
  - "\"El río... él... él...\" (mismo tema) vs. \"la ciudad → su clima, sus calles, su gente\" (aspectos distintos de un hipertema)."

explicacion: |
  Verdadero: la repetición del mismo tema vs. la derivación de
  distintos aspectos es lo que distingue estos dos tipos de
  progresión.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "parrafos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La progresión temática aplica tanto dentro de un párrafo (entre sus oraciones) como entre distintos párrafos de un mismo texto."

pasos:
  - "Ver `../produccion-escrita-compleja/`: cada párrafo desarrolla una idea, y esas ideas también deberían progresar de forma ordenada entre sí."

explicacion: |
  Verdadero: el mismo patrón de progresión se puede analizar en
  distintas escalas del texto.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para describir varios aspectos distintos de un mismo lugar (clima, arquitectura, gente), conviene usar progresión con temas derivados antes que progresión lineal."

pasos:
  - "Los temas derivados son ideales cuando se quiere presentar distintas facetas de un mismo hipertema, no una cadena de causa-efecto."

explicacion: |
  Verdadero: elegir el tipo de progresión adecuado depende de qué
  relación existe realmente entre las ideas a desarrollar.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["rema", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "atraviesa tres provincias"
tipo: completar

enunciado: "En la oración \"El río atraviesa tres provincias\", ¿cuál es el rema (la información nueva sobre el tema)?"

pasos:
  - "El tema es \"el río\" (ya mencionado); el rema es lo nuevo que se dice sobre él."

explicacion: |
  El rema es el aporte informativo nuevo de la oración, distinto del
  tema ya conocido.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_tematica", "metodo"]

enunciado: "Ordená los pasos para analizar la progresión temática de un párrafo."
tipo: ordenar
opciones_explicitas:
  - "Identificar el tema y el rema de cada oración"
  - "Revisar si el tema se repite igual en varias oraciones seguidas (tema constante)"
  - "Revisar si el rema de una oración pasa a ser el tema de la siguiente (progresión lineal)"
  - "Si ninguna de las dos aplica, revisar si hay un hipertema común del que se derivan los distintos temas (temas derivados)"
respuesta_orden: ["Identificar el tema y el rema de cada oración", "Revisar si el tema se repite igual en varias oraciones seguidas (tema constante)", "Revisar si el rema de una oración pasa a ser el tema de la siguiente (progresión lineal)", "Si ninguna de las dos aplica, revisar si hay un hipertema común del que se derivan los distintos temas (temas derivados)"]
explicacion: |
  El análisis va de identificar tema/rema en cada oración a
  clasificar qué patrón de progresión conecta a las oraciones entre
  sí.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La progresión temática cierra la subrama de cohesión y coherencia: conectores marcan relaciones lógicas, la referencia evita repetición, y la progresión temática asegura que el texto avance de forma reconocible."

pasos:
  - "Ver `../conectores-textuales/` y `../referencia-anafora-y-catafora/`: los tres temas hermanos cubren aspectos complementarios de la cohesión textual."

explicacion: |
  Verdadero: es la síntesis de los tres temas hermanos de esta
  subrama, cada uno con su función específica.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al revisar un texto propio, conviene chequear si cada oración se conecta temáticamente con la anterior (constante, lineal o derivada), y reordenar si se detectan saltos de tema sin conexión."

pasos:
  - "Ese chequeo específico de progresión temática complementa la revisión de conectores y referencias ya vista en los temas hermanos."

explicacion: |
  Verdadero: es la aplicación práctica central de este tema durante
  la etapa de revisión de un texto propio.
```

