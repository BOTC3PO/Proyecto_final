# Lengua — Correo formal (cuestionario, 20 preguntas VBLang)

> Tema: `COM6b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un correo formal

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

### 2 — Asunto claro

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

### 3 — Saludo formal

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

### 4 — Estructura del cuerpo del correo

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

### 5 — Cierre y despedida formal

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

### 6 — Tono cortés pero directo

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

### 7 — Evitar abreviaturas de chat y emojis

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

### 8 — Claridad en el pedido

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

### 9 — Asunto vacío como error común

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

### 10 — Tono demasiado informal como error común

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

### 11 — Errores de ortografía y puntuación en un correo formal

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

### 12 — Correo demasiado largo como error común

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

### 13 — Diferenciar saludo formal e informal

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

### 14 — Correo formal reutiliza producción escrita compleja

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

### 15 — El correo formal se usa incluso con confianza previa

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

### 16 — Reescribir un asunto vago

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

### 17 — El correo formal evita ambigüedad en el pedido

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

### 18 — Ordenar el proceso de redacción de un correo formal

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

### 19 — Correo formal como segundo nodo de escritura profesional

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

### 20 — Aplicación: escribir un correo formal real

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
