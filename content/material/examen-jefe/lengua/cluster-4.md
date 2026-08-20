# Examen jefe — Maestro del Debate y la Escritura

> Logro #87. Completaste el examen jefe de correos formales, CVs, debate y detección de falacias. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **100 preguntas totales** en 5/5 secciones.

---

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
respuesta_orden:
  - "Escribir un asunto claro que resuma el motivo del correo"
  - "Abrir con un saludo formal apropiado al destinatario"
  - "Desarrollar el cuerpo yendo directo al motivo, con el pedido o información explícita"
  - "Cerrar con una frase cortés, despedida formal y firma completa"

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
respuesta_orden:
  - "Identificar qué experiencia y habilidades son relevantes para ese puesto específico"
  - "Organizar las secciones (contacto, formación, experiencia, habilidades) en orden cronológico inverso donde corresponda"
  - "Redactar cada descripción con verbos de acción concretos"
  - "Revisar ortografía, puntuación y consistencia de formato antes de enviarlo"

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

## Sección: debate-refutar-en-vivo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["debate", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Refutar en vivo exige reconocer errores de razonamiento, igual que en detectar-falacias, pero sin tiempo para revisar y corregir como en un texto escrito."

pasos:
  - "Ver `../detectar-falacias/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito de Lengua.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "apertura"]

variables:
  n: uno_de([1, 1])

respuesta: "apertura"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte presenta su tesis y sus argumentos principales se llama..."

pasos:
  - "Es la primera etapa de la estructura básica de un debate formal."

explicacion: |
  La apertura presenta la postura inicial de cada parte.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: "refutación"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte responde a los argumentos de la otra, señalando falacias o premisas débiles, se llama..."

pasos:
  - "Es la etapa central del debate, donde se aplica directamente el vocabulario de falacias."

explicacion: |
  La refutación es el momento de responder críticamente a los
  argumentos del rival.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["estructura_del_debate", "replica"]

variables:
  n: uno_de([1, 1])

respuesta: "réplica"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que se responde a la refutación recibida se llama..."

pasos:
  - "Sigue a la refutación, cerrando el intercambio directo de argumentos."

explicacion: |
  La réplica responde a la refutación que se recibió previamente.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "cierre"]

variables:
  n: uno_de([1, 1])

respuesta: "cierre"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte resume su postura y por qué resiste la refutación del rival se llama..."

pasos:
  - "Es la última etapa de la estructura básica del debate."

explicacion: |
  El cierre resume la postura final de cada parte del debate.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["estructura_del_debate", "orden"]

enunciado: "Ordená las cuatro etapas básicas de un debate formal."
tipo: ordenar
opciones_explicitas:
  - "Apertura"
  - "Refutación"
  - "Réplica"
  - "Cierre"
respuesta_orden:
  - "Apertura"
  - "Refutación"
  - "Réplica"
  - "Cierre"

explicacion: |
  El orden sigue la secuencia lógica del debate: presentar, refutar,
  replicar y cerrar.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Nombrar con precisión la falacia del rival (\"eso es un ataque a la persona, no una respuesta a mi argumento\") es más contundente que decir vagamente \"eso no tiene sentido\"."

pasos:
  - "Ver `../detectar-falacias/`: nombrar el error con precisión demuestra dominio del vocabulario técnico."

explicacion: |
  Verdadero: es una de las técnicas de refutación en vivo más
  efectivas descritas en la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el rival da una cifra o un dato sin fuente, pedirla en el momento pone en evidencia la debilidad del argumento."

pasos:
  - "Es la misma lógica de cifras sin sustento ya vista en `../detectar-falacias/`, aplicada en vivo."

explicacion: |
  Verdadero: es otra de las técnicas de refutación descritas en la
  teoría.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Señalar específicamente cuál parte de un argumento es floja (en vez de descartar todo el argumento en bloque) es más preciso y más difícil de rebatir para el rival."

pasos:
  - "Un argumento del rival puede tener una parte razonable y otra débil al mismo tiempo."

explicacion: |
  Verdadero: es la técnica más sofisticada de refutación descrita en
  la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un error común en un debate es preparar la respuesta propia mientras el rival todavía está hablando, sin escuchar realmente lo que dice."

pasos:
  - "Eso lleva a responder a un argumento distinto del que realmente se hizo."

explicacion: |
  Verdadero: es el error central que describe la falta de escucha
  activa en un debate.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["escucha_activa", "espantapajaros"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No escuchar activamente al rival y responder a una versión imaginada de su argumento es, en la práctica, una forma involuntaria de la falacia del espantapájaros."

pasos:
  - "Ver `../detectar-falacias/`: es la misma falacia, ahora aplicada de forma no intencional por falta de atención."

explicacion: |
  Verdadero: es la conexión directa entre la falta de escucha activa
  y una falacia ya conocida.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escuchar activamente es lo que permite refutar el argumento real del rival, no una versión distorsionada o imaginada de él."

pasos:
  - "Es la razón concreta por la que la escucha activa es central en un debate en vivo."

explicacion: |
  Verdadero: es la conclusión práctica de por qué la escucha activa
  importa tanto en este contexto.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["manejo_de_presion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Perder la calma o subir el tono durante un debate no fortalece un argumento, y puede hacer que la audiencia perciba menos credibilidad en quien lo pierde."

pasos:
  - "El manejo emocional bajo presión es parte de la habilidad de debatir en vivo, más allá del contenido argumentativo."

explicacion: |
  Verdadero: es la razón por la que el manejo de la calma es una
  habilidad central del debate en vivo.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["debate", "presion_de_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un debate en vivo genera presión de tiempo, a diferencia de un texto escrito que se puede revisar y corregir con calma antes de presentarlo."

pasos:
  - "Es la diferencia central entre refutar en un texto y refutar en vivo."

explicacion: |
  Verdadero: es la diferencia de contexto que define este tema frente
  a `../detectar-falacias/`.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion", "practica"]

variables:
  situaciones: ["decir \"eso es una apelación a la popularidad, no una razón real\"", "pedir la fuente exacta de un dato citado sin referencia"]
  tecnicas: ["señalar la falacia por su nombre", "pedir evidencia concreta"]
  idx: uno_de([0, 1])

respuesta: tecnicas[idx]
tipo: mc
opciones_explicitas: ["señalar la falacia por su nombre", "pedir evidencia concreta", "distinguir la parte válida de la débil"]

enunciado: "La acción de \"{situaciones[idx]}\" corresponde a la técnica de refutación de..."

pasos:
  - "Cada acción concreta corresponde a una de las técnicas de refutación descritas en la teoría."

explicacion: |
  Reconocer qué técnica se está usando ayuda a aplicarlas de forma
  deliberada durante un debate.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "negociacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Debatir y refutar en vivo es la base directa de la negociación, que agrega el objetivo de llegar a un acuerdo, no sólo \"ganar\" el intercambio."

pasos:
  - "Ver `../negociacion/`: es el prerrequisito directo del siguiente tema de la subrama."

explicacion: |
  Verdadero: es la relación de prerrequisito con el tema siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "persuasion_etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema también es prerrequisito de persuasión ética vs. manipulación, que distingue técnicas legítimas de manipulación en este mismo contexto de debate en vivo."

pasos:
  - "Ver `../persuasion-etica-vs-manipulacion/`: comparte este tema como uno de sus dos prerrequisitos."

explicacion: |
  Verdadero: es otra de las relaciones de prerrequisito de este tema
  dentro de la subrama.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["debate", "metodo"]

enunciado: "Ordená los pasos para refutar un argumento en vivo durante un debate."
tipo: ordenar
opciones_explicitas:
  - "Escuchar activamente el argumento completo del rival, sin preparar la respuesta antes de tiempo"
  - "Identificar si hay una falacia o una premisa débil en ese argumento"
  - "Nombrar con precisión el error encontrado"
  - "Responder de forma clara y calmada, sin perder el foco por la presión del momento"
respuesta_orden:
  - "Escuchar activamente el argumento completo del rival, sin preparar la respuesta antes de tiempo"
  - "Identificar si hay una falacia o una premisa débil en ese argumento"
  - "Nombrar con precisión el error encontrado"
  - "Responder de forma clara y calmada, sin perder el foco por la presión del momento"

explicacion: |
  El proceso va de escuchar activamente a identificar el error y
  responder con calma y precisión.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Refutar bien en un debate no significa usar cualquier técnica para \"ganar\" a toda costa, incluidas las falacias — significa señalar con precisión errores reales de razonamiento."

pasos:
  - "Es un anticipo del tema siguiente sobre persuasión ética vs. manipulación."

explicacion: |
  Verdadero: refutar honestamente, no manipular, es el estándar
  esperado en un debate bien conducido.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al participar en un debate escolar, conviene escuchar activamente al rival, identificar falacias con precisión y responder con calma, en vez de interrumpir o subir el tono para tratar de \"ganar\"."

pasos:
  - "Es la aplicación práctica directa de las técnicas estudiadas en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en un contexto
  escolar real de debate.
```

## Sección: decodificacion-y-fluidez (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["decodificacion", "vocabulario"]

enunciado: "¿Qué es la decodificación, en el proceso de aprender a leer?"
tipo: mc
opciones_explicitas:
  - "El proceso de convertir letras en sonidos para reconstruir la palabra hablada"
  - "El proceso de entender el significado de un texto completo"
  - "El proceso de memorizar palabras completas sin analizar sus letras"
respuesta: "El proceso de convertir letras en sonidos para reconstruir la palabra hablada"

explicacion: |
  Aplica directo la conciencia fonológica al código escrito.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["fluidez", "vocabulario"]

enunciado: "¿Qué es la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "Leer con precisión, velocidad y prosodia adecuadas, de forma automática"
  - "Leer lo más rápido posible, sin importar la precisión"
  - "Conocer el significado de todas las palabras de un texto"
respuesta: "Leer con precisión, velocidad y prosodia adecuadas, de forma automática"

explicacion: |
  Velocidad sola, sin precisión ni entonación, no es fluidez real.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([80, 100, 120])
  segundos: 60

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee {palabras} palabras correctamente en {segundos} segundos. ¿Cuál es su fluidez en palabras por minuto (PPM)?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  Como el tiempo ya es exactamente 1 minuto (60 segundos), el PPM
  coincide directamente con la cantidad de palabras leídas.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([60, 90])
  segundos: 45

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee {palabras} palabras correctamente en sólo {segundos} segundos (menos de un minuto). ¿Cuál es su fluidez en palabras por minuto?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  Se escala el resultado a 'por minuto', igual que cualquier tasa
  (como la velocidad = distancia/tiempo).
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["decodificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La correspondencia entre letras y sonidos en español es, en general, más regular y predecible que en inglés, donde una misma letra puede sonar de formas muy distintas según la palabra."

explicacion: |
  Por eso decodificar en español suele ser más rápido de aprender una
  vez conocidas las reglas básicas.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué la fluidez lectora es un puente hacia la comprensión de un texto?"
tipo: mc
opciones_explicitas:
  - "Porque cuando decodificar se vuelve automático, la atención que antes se gastaba en 'sonar' cada palabra queda libre para entender el significado"
  - "Porque leer rápido garantiza automáticamente entender el texto, sin ninguna excepción"
  - "No existe ninguna relación real entre fluidez y comprensión"
respuesta: "Porque cuando decodificar se vuelve automático, la atención que antes se gastaba en 'sonar' cada palabra queda libre para entender el significado"

explicacion: |
  La capacidad de atención es limitada — automatizar un paso libera
  recursos para el siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["fluidez"]

respuesta: verdadero
tipo: vf

enunciado: "Leer muy rápido pero con errores o sin ninguna entonación (sin prosodia) no cuenta como verdadera fluidez lectora — hacen falta las tres cosas juntas: precisión, velocidad y prosodia."

explicacion: |
  Un lector 'fluido' pero impreciso no está realmente decodificando
  bien.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras_a: 100
  segundos_a: 50
  palabras_b: 90
  segundos_b: 60

respuesta: (palabras_a / segundos_a * 60) > (palabras_b / segundos_b * 60)
tipo: vf

enunciado: "Lectura A: {palabras_a} palabras en {segundos_a} segundos. Lectura B: {palabras_b} palabras en {segundos_b} segundos. ¿La fluidez en PPM de la Lectura A es MAYOR que la de la Lectura B?"

explicacion: |
  PPM(A) = {redondear(palabras_a / segundos_a * 60, 0)}; PPM(B) =
  {redondear(palabras_b / segundos_b * 60, 0)} — hay que calcular la
  tasa, no comparar sólo la cantidad de palabras.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene medir la fluidez de un alumno en varios textos y días distintos, en vez de con una sola lectura?"
tipo: mc
opciones_explicitas:
  - "Porque una sola lectura puede estar afectada por factores puntuales (texto más difícil, cansancio, nervios) — promediar varias da una estimación más confiable"
  - "Porque la fluidez de una persona cambia por completo de un día a otro sin ningún patrón"
  - "No hay ninguna ventaja real en medir más de una vez"
respuesta: "Porque una sola lectura puede estar afectada por factores puntuales (texto más difícil, cansancio, nervios) — promediar varias da una estimación más confiable"

explicacion: |
  Es la misma razón por la que `../../matematica/muestreo-y-sesgo/`
  prefiere una muestra a un único dato suelto.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  ppm1: uno_de([95, 100])
  ppm2: uno_de([105, 110])
  ppm3: uno_de([90, 115])

respuesta: redondear(promedio([ppm1, ppm2, ppm3]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "palabras por minuto"

enunciado: "Un alumno leyó a {ppm1}, {ppm2} y {ppm3} palabras por minuto en tres textos distintos. ¿Cuál es su fluidez promedio?"

pasos:
  - "Promedio = ({ppm1}+{ppm2}+{ppm3}) / 3 = {redondear(promedio([ppm1, ppm2, ppm3]), 1)}"

explicacion: |
  El promedio da una estimación más representativa que cualquiera de
  las tres lecturas por separado.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["prosodia", "vocabulario"]

enunciado: "¿Qué es la prosodia, como parte de la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "La entonación y el ritmo naturales con que se lee, respetando pausas, signos de puntuación y énfasis"
  - "La cantidad de palabras leídas por minuto"
  - "La cantidad de errores cometidos al leer"
respuesta: "La entonación y el ritmo naturales con que se lee, respetando pausas, signos de puntuación y énfasis"

explicacion: |
  Leer 'como se habla', no en un tono monótono palabra por palabra.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["decodificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo final de aprender a decodificar es que el proceso se vuelva automático, sin necesitar esfuerzo consciente para convertir cada letra en su sonido."

explicacion: |
  Cuando eso pasa, decodificar deja de competir por atención con
  comprender el texto.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  ppm: uno_de([80, 100])
  palabras_texto: uno_de([40, 50])

respuesta: redondear(palabras_texto / ppm * 60, 0)
tipo: input
unidad: "segundos"

enunciado: "Un alumno lee a {ppm} palabras por minuto. Si un texto tiene {palabras_texto} palabras, ¿cuánto tiempo (en segundos) debería tardar en leerlo completo?"

pasos:
  - "Tiempo = ({palabras_texto}/{ppm}) × 60 = {redondear(palabras_texto / ppm * 60, 0)} segundos"

explicacion: |
  Es la fórmula de PPM despejada para el tiempo en vez de para la
  velocidad.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Muchas escuelas usan 'registros de lectura oral' (running records), donde un docente escucha leer a un alumno en voz alta y anota errores, tiempo y entonación. ¿Para qué sirve esta evaluación?"
tipo: mc
opciones_explicitas:
  - "Para medir el progreso real de la fluidez lectora de un alumno a lo largo del tiempo, con datos concretos (precisión, PPM, prosodia)"
  - "Sólo sirve para calificar la letra del alumno"
  - "No tiene ninguna utilidad pedagógica real"
respuesta: "Para medir el progreso real de la fluidez lectora de un alumno a lo largo del tiempo, con datos concretos (precisión, PPM, prosodia)"

explicacion: |
  Es la aplicación práctica de todo lo visto en este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras_a: 70
  segundos_a: 60
  palabras_b: 70
  segundos_b: 90

respuesta: (palabras_a / segundos_a * 60) > (palabras_b / segundos_b * 60)
tipo: vf

enunciado: "Dos alumnos leen el mismo texto de {palabras_a} palabras: el Alumno A tarda {segundos_a} segundos, el Alumno B tarda {segundos_b} segundos. ¿El Alumno A tiene mayor fluidez en PPM?"

explicacion: |
  Con la misma cantidad de palabras, tardar MENOS tiempo da un PPM
  MAYOR.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene la decodificación con `../conciencia-fonologica/`?"
tipo: mc
opciones_explicitas:
  - "La decodificación aplica al código escrito la distinción de sonidos que ya construyó la conciencia fonológica — sin distinguir sonidos, no se puede saber qué sonido corresponde a cada letra"
  - "No tienen ninguna relación real entre sí"
  - "La decodificación reemplaza por completo la necesidad de conciencia fonológica"
respuesta: "La decodificación aplica al código escrito la distinción de sonidos que ya construyó la conciencia fonológica — sin distinguir sonidos, no se puede saber qué sonido corresponde a cada letra"

explicacion: |
  Es el prerrequisito formal de este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([150, 200])
  segundos: 120

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee un texto largo: {palabras} palabras en {segundos} segundos (2 minutos). ¿Cuál es su fluidez en PPM?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  La fórmula funciona igual sin importar si el tiempo es más o menos
  de un minuto — siempre se escala a 'por minuto'.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["fluidez"]

respuesta: verdadero
tipo: vf

enunciado: "La fluidez lectora de una misma persona puede variar según qué tan difícil o familiar sea el texto que está leyendo, no es un número fijo e invariable."

explicacion: |
  Es otra razón por la que conviene promediar mediciones de varios
  textos distintos.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "Un alumno decodifica correctamente cada palabra de un texto, pero al preguntarle de qué trataba, no puede responder. ¿Qué explica esto, en términos de fluidez?"
tipo: mc
opciones_explicitas:
  - "Es posible que la decodificación todavía no sea automática para ese alumno, así que gasta toda su atención 'sonando' las palabras y no le queda capacidad para comprender el significado"
  - "Es imposible que esto pase: decodificar bien siempre implica comprender el texto"
  - "El alumno tiene un problema de vocabulario, sin ninguna relación con la fluidez"
respuesta: "Es posible que la decodificación todavía no sea automática para ese alumno, así que gasta toda su atención 'sonando' las palabras y no le queda capacidad para comprender el significado"

explicacion: |
  Es exactamente el fenómeno que explica por qué la fluidez es un
  puente necesario hacia la comprensión.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la decodificación y la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "Para convertir letras en sonidos de forma cada vez más automática, liberando la atención necesaria para poder comprender lo que se lee"
  - "Sólo sirven para leer más rápido, sin ninguna relación con la comprensión"
  - "Sólo se aplican en los primeros meses de la alfabetización, después dejan de ser relevantes"
respuesta: "Para convertir letras en sonidos de forma cada vez más automática, liberando la atención necesaria para poder comprender lo que se lee"

explicacion: |
  Es el puente entre `../conciencia-fonologica/` y
  `../vocabulario-y-familia-de-palabras/`, el módulo que sigue.
```

## Sección: detectar-falacias (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "basico"
  tags: ["falacias", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una falacia es un razonamiento que parece válido pero no lo es: la conclusión no se sigue realmente de las premisas, aunque suene convincente."

pasos:
  - "Ver `../argumentos/`: no alcanza con que un argumento suene bien, hay que evaluar si realmente sostiene la conclusión."

explicacion: |
  Verdadero: la apariencia de validez sin sustento real es la
  definición central de falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "basico"
  tags: ["ad_hominem"]

variables:
  n: uno_de([1, 1])

respuesta: "ad hominem"
tipo: mc
opciones_explicitas: ["ad hominem", "falsa dicotomía", "pendiente resbaladiza"]

enunciado: "\"No le hagas caso a su argumento económico, es un desastre con el dinero\" es un ejemplo de..."

pasos:
  - "Ataca a la persona (\"es un desastre con el dinero\") en vez de responder al argumento que dio."

explicacion: |
  El ad hominem ataca a la persona que argumenta en vez de su
  argumento.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "basico"
  tags: ["falsa_dicotomia"]

variables:
  n: uno_de([1, 1])

respuesta: "falsa dicotomía"
tipo: mc
opciones_explicitas: ["ad hominem", "falsa dicotomía", "generalización apresurada"]

enunciado: "\"O estás con nosotros o estás en contra\" es un ejemplo de..."

pasos:
  - "Presenta sólo dos opciones cuando en realidad hay posturas intermedias posibles."

explicacion: |
  La falsa dicotomía reduce las opciones a dos extremos, ignorando
  posturas intermedias.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["pendiente_resbaladiza"]

variables:
  n: uno_de([1, 1])

respuesta: "pendiente resbaladiza"
tipo: mc
opciones_explicitas: ["pendiente resbaladiza", "ad populum", "petición de principio"]

enunciado: "\"Si dejamos que falten a esta clase, van a terminar abandonando la escuela\" es un ejemplo de..."

pasos:
  - "Afirma que un paso pequeño llevará inevitablemente a una consecuencia extrema, sin justificar esa cadena."

explicacion: |
  La pendiente resbaladiza encadena consecuencias extremas sin
  justificación real de que cada paso lleve al siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["apelacion_autoridad"]

variables:
  n: uno_de([1, 1])

respuesta: "apelación a la autoridad no pertinente"
tipo: mc
opciones_explicitas: ["apelación a la autoridad no pertinente", "ad hominem", "falsa dicotomía"]

enunciado: "\"Este actor famoso recomienda esta dieta, así que debe funcionar\" es un ejemplo de..."

pasos:
  - "Cita a alguien famoso, pero sin relación de experticia real con el tema (nutrición)."

explicacion: |
  La apelación a la autoridad no pertinente cita a alguien admirado
  pero sin conocimiento experto en el tema tratado.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["ad_populum"]

variables:
  n: uno_de([1, 1])

respuesta: "apelación a la popularidad"
tipo: mc
opciones_explicitas: ["apelación a la popularidad", "generalización apresurada", "pendiente resbaladiza"]

enunciado: "\"Todo el mundo lo hace, así que no puede estar mal\" es un ejemplo de..."

pasos:
  - "Sostiene que algo es correcto sólo porque mucha gente lo cree o lo hace."

explicacion: |
  La apelación a la popularidad confunde \"muy común\" con
  \"correcto\", sin dar otra razón.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["generalizacion_apresurada"]

variables:
  n: uno_de([1, 1])

respuesta: "generalización apresurada"
tipo: mc
opciones_explicitas: ["generalización apresurada", "ad hominem", "petición de principio"]

enunciado: "\"Conocí a dos personas de esa ciudad y las dos eran maleducadas, así que toda la gente de ahí es así\" es un ejemplo de..."

pasos:
  - "Saca una conclusión general (\"toda la gente\") a partir de muy pocos casos (dos personas)."

explicacion: |
  La generalización apresurada extiende una conclusión a partir de
  una muestra demasiado chica para sostenerla.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["espantapajaros"]

variables:
  n: uno_de([1, 1])

respuesta: "espantapájaros"
tipo: mc
opciones_explicitas: ["espantapájaros", "ad populum", "falsa dicotomía"]

enunciado: "Responder \"así que vos querés que no haya ninguna regla en la escuela\" a alguien que sólo propuso flexibilizar un horario puntual es un ejemplo de..."

pasos:
  - "Distorsiona el argumento original (una propuesta puntual) hacia una versión extrema y fácil de rebatir."

explicacion: |
  La falacia del espantapájaros simplifica o exagera el argumento
  ajeno para que sea más fácil de derribar (ver `../contraargumentos/`).
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["peticion_de_principio"]

variables:
  n: uno_de([1, 1])

respuesta: "petición de principio"
tipo: mc
opciones_explicitas: ["petición de principio", "pendiente resbaladiza", "generalización apresurada"]

enunciado: "\"Este libro dice la verdad porque lo dice el libro, que siempre dice la verdad\" es un ejemplo de..."

pasos:
  - "La conclusión (\"dice la verdad\") ya está asumida dentro de la premisa (\"siempre dice la verdad\"): es circular."

explicacion: |
  La petición de principio (razonamiento circular) asume como premisa
  lo mismo que quiere demostrar como conclusión.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Señalar que un argumento es falaz no significa que su conclusión sea necesariamente falsa: significa que ESA razón en particular no la sostiene bien."

pasos:
  - "Puede haber una conclusión correcta defendida con un argumento falaz."

explicacion: |
  Verdadero: evaluar la falacia de un argumento es distinto de
  evaluar si la conclusión en sí es verdadera.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["ad_hominem", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El ad hominem se reconoce porque la respuesta se dirige a la persona (su carácter, su historia) y no al contenido del argumento que esa persona presentó."

pasos:
  - "Aunque la crítica a la persona sea cierta, no dice nada sobre si el argumento en sí es correcto."

explicacion: |
  Verdadero: esa desviación del contenido hacia la persona es la
  marca central del ad hominem.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["generalizacion_apresurada", "argumento_de_datos", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un argumento de datos basado en un estudio con miles de casos es distinto de una generalización apresurada basada en dos o tres casos anecdóticos, aunque ambos generalicen a partir de ejemplos."

pasos:
  - "Ver `../argumentos/`: el tamaño y representatividad de la muestra es lo que distingue un argumento de datos sólido de una generalización apresurada."

explicacion: |
  Verdadero: la cantidad y calidad de la evidencia es lo que separa
  un argumento válido de una falacia con estructura similar.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "practica"]

variables:
  frases: ["No hay que escucharlo, ni siquiera terminó la secundaria", "O bajamos los impuestos a cero o el país se hunde", "Si permitimos esto, mañana va a estar todo permitido"]
  tipos: ["ad hominem", "falsa dicotomía", "pendiente resbaladiza"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["ad hominem", "falsa dicotomía", "pendiente resbaladiza", "ad populum"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Identificar si ataca a la persona, reduce a dos opciones extremas, o encadena consecuencias sin justificar."

explicacion: |
  Cada fragmento fue construido para representar un tipo distinto de
  falacia común.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "validez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un razonamiento puede ser lógicamente válido en su estructura y aun así llegar a una conclusión falsa, si alguna de sus premisas es falsa — eso es un problema distinto al de la falacia."

pasos:
  - "Ese análisis de \"validez\" formal es justamente el tema que sigue en la cadena, `Validez de un razonamiento` (Filosofía)."

explicacion: |
  Verdadero: falacia (error en la estructura del razonamiento) y
  premisa falsa (error en el contenido) son problemas distintos.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falacias", "publicidad"]

variables:
  n: uno_de([1, 1])

respuesta: "apelación a la autoridad no pertinente"
tipo: mc
opciones_explicitas: ["apelación a la autoridad no pertinente", "petición de principio", "falsa dicotomía"]

enunciado: "Un anuncio de crema para la piel que usa a un futbolista famoso como testimonio de que \"funciona\", sin ninguna evidencia dermatológica, apela a..."

pasos:
  - "El futbolista no es experto en dermatología: es una autoridad no pertinente para el tema."

explicacion: |
  Es un caso muy común de apelación a la autoridad no pertinente en
  publicidad.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falacias", "metodo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El primer paso para detectar una falacia es separar la conclusión de las razones dadas, y preguntar si esas razones realmente apoyan la conclusión o sólo distraen con algo relacionado."

pasos:
  - "Esa separación permite ver con claridad si hay un salto lógico injustificado."

explicacion: |
  Verdadero: es el método básico descrito en la teoría para
  identificar una falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falsa_dicotomia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La falsa dicotomía funciona presentando sólo dos opciones extremas, cuando en realidad existen posturas intermedias que el argumento no menciona."

pasos:
  - "Esa reducción artificial a dos opciones es lo que la hace falaz, no que las dos opciones mencionadas sean falsas en sí."

explicacion: |
  Verdadero: ocultar las alternativas intermedias es el mecanismo
  central de esta falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falacias", "metodo"]

enunciado: "Ordená los pasos para evaluar si un argumento contiene una falacia."
tipo: ordenar
opciones_explicitas:
  - "Separar la conclusión de las razones dadas"
  - "Revisar si las razones responden directamente al contenido del argumento o se desvían (persona, popularidad, miedo)"
  - "Comparar el patrón encontrado con las falacias comunes conocidas"
  - "Nombrar la falacia específica si corresponde"
respuesta_orden:
  - "Separar la conclusión de las razones dadas"
  - "Revisar si las razones responden directamente al contenido del argumento o se desvían (persona, popularidad, miedo)"
  - "Comparar el patrón encontrado con las falacias comunes conocidas"
  - "Nombrar la falacia específica si corresponde"

explicacion: |
  El proceso va de la separación básica al reconocimiento del patrón
  específico de falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Detectar falacias en lenguaje cotidiano es el puente directo hacia la lógica proposicional (Filosofía), que da herramientas más precisas y sistemáticas para analizar la validez de un razonamiento."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: es el mismo problema (razonamientos que fallan) visto con más formalismo."

explicacion: |
  Verdadero: por eso detectar falacias es prerrequisito directo del
  siguiente tema en la cadena, ya en otra materia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer falacias comunes (ad hominem, falsa dicotomía, apelación a la popularidad) es una herramienta directa para leer noticias, publicidad y debates con más ojo crítico."

pasos:
  - "Muchos argumentos persuasivos del día a día se apoyan, precisamente, en estas falacias en vez de en razones sólidas."

explicacion: |
  Verdadero: la aplicación práctica más directa de este tema es la
  lectura crítica de textos persuasivos cotidianos.
```
