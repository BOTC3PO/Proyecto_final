# Ciudadanía Digital — Verificación de una noticia (cuestionario, 20 preguntas VBLang)

> Tema: `CD1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Este tema aplica el vocabulario de falacias a un caso real

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "basico"
  tags: ["verificacion", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Verificar una noticia aplica el vocabulario de falacias y argumentos ya visto en Lengua a un caso concreto y cotidiano."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

### 2 — Revisar la fuente

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "basico"
  tags: ["fuente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El primer paso para verificar una noticia es revisar quién la publica: un medio con trayectoria y responsables identificables es distinto de una cuenta anónima."

pasos:
  - "Es el primer paso del proceso de verificación descrito en la teoría."

explicacion: |
  Verdadero: la fuente es el primer filtro básico de confiabilidad.
```

### 3 — Fuente confiable como argumento de autoridad pertinente

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["fuente", "argumento_de_autoridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Citar una fuente con trayectoria y credibilidad es un argumento de autoridad pertinente; citar una fuente sin credibilidad no lo es, aunque suene convincente."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la aplicación directa de ese concepto a este contexto."

explicacion: |
  Verdadero: es la conexión explícita entre pertinencia de la fuente
  y el concepto de argumento de autoridad ya estudiado.
```

### 4 — Revisar la fecha de la noticia

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["fecha"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia real, pero vieja, recirculada como si fuera actual, es una de las formas más comunes de desinformación."

pasos:
  - "No es falsa en su contenido original, pero es engañosa fuera de contexto temporal."

explicacion: |
  Verdadero: revisar la fecha es un paso central del proceso de
  verificación.
```

### 5 — Noticia vieja no es lo mismo que noticia falsa

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["fecha", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia vieja recirculada fuera de contexto es engañosa por el momento en que se presenta, aunque su contenido original haya sido cierto en su momento."

pasos:
  - "Es un matiz importante: engañoso no siempre significa \"inventado\" desde cero."

explicacion: |
  Verdadero: hay formas de desinformación que no requieren inventar
  contenido falso, sólo descontextualizar algo real.
```

### 6 — Contrastar con otras fuentes

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["contraste_de_fuentes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una noticia importante es cierta, generalmente otros medios independientes también la están cubriendo; que sólo una fuente aislada la mencione es una señal de alerta."

pasos:
  - "No es una prueba definitiva de que sea falsa, pero sí motivo para investigar más."

explicacion: |
  Verdadero: el contraste entre fuentes independientes es un paso
  clave del proceso de verificación.
```

### 7 — Distinguir hecho de opinión

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["hecho_vs_opinion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Revisar si un texto describe lo que pasó o interpreta/opina sobre ello es un paso central de la verificación, porque muchos titulares mezclan ambas cosas sin marcarlo claramente."

pasos:
  - "Una misma información puede presentarse con distinto grado de carga valorativa según las palabras elegidas."

explicacion: |
  Verdadero: distinguir hecho de opinión es una herramienta central
  para leer noticias críticamente.
```

### 8 — Detectar apelación a la emoción

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["apelacion_a_la_emocion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Titulares diseñados para generar indignación o miedo extremo suelen priorizar el impacto emocional (y los clics) por sobre la precisión informativa."

pasos:
  - "No es una prueba de falsedad, pero es una señal de alerta adicional a considerar."

explicacion: |
  Verdadero: la carga emocional exagerada de un titular es una marca
  a tener en cuenta al verificar.
```

### 9 — Viralidad no es lo mismo que verdad

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["apelacion_a_la_popularidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que una noticia sea muy compartida (viral) no es una prueba de que sea verdadera — es la misma lógica de la apelación a la popularidad ya vista en `../../lengua/detectar-falacias/`."

pasos:
  - "Cuanto más viral, no necesariamente más verdadero."

explicacion: |
  Verdadero: es la aplicación directa de esa falacia al contexto de
  noticias digitales.
```

### 10 — Verificar no significa desconfiar de todo por sistema

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["escepticismo_moderado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Verificar una noticia no significa desconfiar de todo por sistema, sino aplicar un proceso concreto antes de aceptar o descartar la información."

pasos:
  - "Una noticia bien verificada puede aceptarse con razonable confianza, no requiere duda infinita."

explicacion: |
  Verdadero: es el equilibrio correcto entre credulidad excesiva y
  escepticismo paralizante.
```

### 11 — Una noticia bien verificada se puede aceptar con confianza

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["escepticismo_moderado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una noticia tiene fuente confiable, fecha correcta y está contrastada con otros medios independientes, se puede aceptar con razonable confianza."

pasos:
  - "Cumplir los pasos de verificación es suficiente para actuar con confianza razonable, sin necesitar certeza absoluta imposible."

explicacion: |
  Verdadero: el objetivo del proceso es dar una base razonable para
  decidir, no una certeza matemática.
```

### 12 — Clasificar el paso de verificación según el ejemplo

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["verificacion", "practica"]

variables:
  situaciones: ["revisar si la cuenta que publicó la noticia tiene información de contacto y trayectoria", "buscar si otros medios independientes también publicaron la misma información"]
  pasos_correspondientes: ["revisar la fuente", "contrastar con otras fuentes"]
  idx: uno_de([0, 1])

respuesta: pasos_correspondientes[idx]
tipo: mc
opciones_explicitas: ["revisar la fuente", "revisar la fecha", "contrastar con otras fuentes", "distinguir hecho de opinión"]

enunciado: "\"{situaciones[idx]}\" corresponde al paso de..."

pasos:
  - "Cada acción concreta de verificación corresponde a uno de los pasos del proceso descrito en la teoría."

explicacion: |
  Reconocer a qué paso corresponde cada acción concreta ayuda a
  aplicar el proceso de verificación de forma ordenada.
```

### 13 — Un titular cargado emocionalmente no es prueba de falsedad

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["apelacion_a_la_emocion", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un titular con carga emocional fuerte no es, por sí solo, una prueba de que la noticia sea falsa — es una señal de alerta que amerita verificar más, no una conclusión automática."

pasos:
  - "Hay noticias verdaderas con titulares dramáticos porque el hecho en sí es dramático."

explicacion: |
  Verdadero: es un matiz importante para no descartar información
  real sólo por su tono emocional.
```

### 14 — Un medio anónimo requiere más cautela

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["fuente", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia publicada por una cuenta anónima sin información de contacto amerita más cautela que la misma información publicada por un medio con trayectoria identificable."

pasos:
  - "No significa automáticamente que sea falsa, pero sí que requiere verificación adicional antes de aceptarla o compartirla."

explicacion: |
  Verdadero: la identificabilidad de la fuente es un factor relevante
  de confiabilidad, aunque no sea el único criterio.
```

### 15 — Distinguir descripción de interpretación en un titular

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["hecho_vs_opinion", "practica"]

variables:
  titulares: ["El Banco Central subió la tasa de interés al 40%", "El Banco Central toma una medida desesperada y sube la tasa al 40%"]
  tipos: ["descripción de hecho", "hecho con interpretación agregada"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["descripción de hecho", "hecho con interpretación agregada"]

enunciado: "El titular \"{titulares[idx]}\" es un ejemplo de..."

pasos:
  - "Palabras como \"desesperada\" agregan una carga valorativa que no está en el hecho puro (la suba de tasa en sí)."

explicacion: |
  El mismo hecho puede presentarse de forma neutral o con
  interpretación/opinión agregada según las palabras elegidas.
```

### 16 — El proceso de verificación tiene varios pasos, no uno solo

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["verificacion", "proceso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Verificar una noticia de forma completa requiere combinar varios pasos (fuente, fecha, contraste, hecho vs. opinión, carga emocional), no basta con revisar uno solo."

pasos:
  - "Cada paso cubre un aspecto distinto de la confiabilidad de la información."

explicacion: |
  Verdadero: ningún paso individual es suficiente por sí solo, hace
  falta combinarlos.
```

### 17 — Reconocer una noticia descontextualizada

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["fecha", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una foto real de un evento de hace varios años, compartida como si fuera de un evento actual, es un ejemplo de noticia descontextualizada, no necesariamente de una noticia inventada."

pasos:
  - "El contenido en sí puede ser real, pero el contexto en que se presenta ahora es engañoso."

explicacion: |
  Verdadero: es un ejemplo concreto de por qué revisar la fecha es un
  paso necesario, aunque el contenido no sea falso en origen.
```

### 18 — Ordenar el proceso completo de verificación

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["verificacion", "metodo"]

enunciado: "Ordená los pasos del proceso de verificación de una noticia."
tipo: ordenar
opciones_explicitas:
  - "Revisar la fuente (quién publica y qué trayectoria tiene)"
  - "Revisar la fecha (si es actual o vieja recirculada)"
  - "Contrastar con otras fuentes independientes"
  - "Distinguir hecho de opinión y revisar la carga emocional del titular"
respuesta_orden: ["Revisar la fuente (quién publica y qué trayectoria tiene)", "Revisar la fecha (si es actual o vieja recirculada)", "Contrastar con otras fuentes independientes", "Distinguir hecho de opinión y revisar la carga emocional del titular"]
explicacion: |
  El orden sigue la secuencia lógica del proceso de verificación
  descrito en la teoría, de lo más básico a lo más matizado.
```

### 19 — Verificación como aplicación práctica de detectar falacias

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["verificacion", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este proceso de verificación es la aplicación práctica directa de detectar falacias a un problema cotidiano y de consecuencias reales."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: cada paso de verificación reutiliza un concepto ya estudiado ahí (autoridad pertinente, apelación a la popularidad)."

explicacion: |
  Verdadero: es la conexión de cierre entre este tema y su
  prerrequisito directo.
```

### 20 — Aplicación: decidir si compartir una noticia

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["verificacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de compartir una noticia impactante en redes sociales, conviene aplicar el proceso de verificación completo, en vez de compartirla sólo porque genera una reacción emocional fuerte."

pasos:
  - "Es la aplicación práctica más directa de este tema en el uso cotidiano de redes sociales."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de ciudadanía digital responsable.
```
