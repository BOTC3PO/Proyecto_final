# Historia — Interpretar una fuente histórica (cuestionario, 20 preguntas VBLang)

> Tema: `H1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una fuente histórica

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["fuente_historica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente histórica es cualquier resto del pasado que permite reconstruir o conocer lo que ocurrió: un documento, una carta, una fotografía, un objeto, un testimonio."

pasos:
  - "La historia accede al pasado a través de las fuentes que sobrevivieron."

explicacion: |
  Verdadero: es la definición central de fuente histórica.
```

### 2 — Identificar fuente primaria

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["fuente_primaria"]

variables:
  n: uno_de([1, 1])

respuesta: "fuente primaria"
tipo: mc
opciones_explicitas: ["fuente primaria", "fuente secundaria"]

enunciado: "Una carta escrita por un soldado durante una guerra, mientras la vivía, es un ejemplo de..."

pasos:
  - "Producida en el momento de los hechos, por quien los vivió."

explicacion: |
  La fuente primaria se produce en el momento de los hechos por
  quienes los vivieron o presenciaron.
```

### 3 — Identificar fuente secundaria

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["fuente_secundaria"]

variables:
  n: uno_de([1, 1])

respuesta: "fuente secundaria"
tipo: mc
opciones_explicitas: ["fuente primaria", "fuente secundaria"]

enunciado: "Un libro de historia escrito décadas después, que analiza cartas de soldados de esa guerra, es un ejemplo de..."

pasos:
  - "Producida después, analizando o interpretando fuentes primarias."

explicacion: |
  La fuente secundaria interpreta o analiza fuentes primarias, no fue
  producida en el momento de los hechos.
```

### 4 — Una fuente puede ser primaria o secundaria según el tema

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["fuente_primaria", "fuente_secundaria", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo texto puede ser fuente primaria para un tema y fuente secundaria para otro, según qué se esté investigando."

pasos:
  - "Un libro de historia de 1950 es secundario sobre los hechos que narra, pero es primario si se investiga cómo se pensaba la historia en 1950."

explicacion: |
  Verdadero: la clasificación primaria/secundaria depende del objeto
  de investigación, no es una propiedad fija del documento.
```

### 5 — Ninguna fuente es completamente neutral

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["punto_de_vista"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ninguna fuente histórica es completamente neutral u objetiva: quien la produjo tenía una posición, un interés, un contexto que influye en qué cuenta y cómo lo cuenta."

pasos:
  - "Esto no significa que la fuente sea inútil o mentirosa, sólo que hay que leerla sabiendo desde dónde habla."

explicacion: |
  Verdadero: es el punto de partida central del análisis crítico de
  fuentes.
```

### 6 — Sesgo no es lo mismo que mentira

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["sesgo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un documento puede ser sincero y fiel a lo que su autor percibió, y aun así estar sesgado por su posición social, época o creencias."

pasos:
  - "El trabajo del historiador no es descartar fuentes sesgadas (todas lo están en algún grado), sino entender el sesgo."

explicacion: |
  Verdadero: es una distinción central para no confundir parcialidad
  con deshonestidad.
```

### 7 — Primera pregunta del análisis crítico: quién

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["analisis_critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una de las primeras preguntas del análisis crítico de una fuente es: ¿quién la produjo (autor, institución, y su posición respecto de los hechos)?"

pasos:
  - "Conocer al autor ayuda a entender desde qué perspectiva se cuenta lo narrado."

explicacion: |
  Verdadero: es una de las preguntas centrales del método de análisis
  crítico de fuentes.
```

### 8 — Segunda pregunta: cuándo y dónde

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["analisis_critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra pregunta central del análisis crítico es: ¿cuándo y dónde se produjo la fuente (contemporánea a los hechos, o posterior; en qué lugar)?"

pasos:
  - "Determina si la fuente es primaria o secundaria, y qué distancia temporal/geográfica tiene con los hechos."

explicacion: |
  Verdadero: es otra pregunta central del método de análisis crítico
  de fuentes.
```

### 9 — Tercera pregunta: para quién y con qué propósito

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["analisis_critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra pregunta central es: ¿para quién y con qué propósito se produjo la fuente? Una carta privada, un discurso público y un documento oficial tienen propósitos y audiencias distintas."

pasos:
  - "El propósito y la audiencia influyen directamente en qué se dice y cómo."

explicacion: |
  Verdadero: es otra pregunta central del método de análisis crítico
  de fuentes.
```

### 10 — Cuarta pregunta: lo que se dice y lo que se puede inferir

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["analisis_critico", "omisiones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Lo que una fuente omite también es información: por ejemplo, un censo que no cuenta a cierto grupo social revela algo sobre cómo se los consideraba en esa época."

pasos:
  - "Analizar las omisiones es parte del análisis crítico, no sólo lo que la fuente dice explícitamente."

explicacion: |
  Verdadero: las omisiones pueden ser tan reveladoras como lo
  explícitamente dicho.
```

### 11 — Quinta pregunta: contraste con otras fuentes

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["analisis_critico", "contraste"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra pregunta central es si la fuente se puede contrastar con otras fuentes independientes — la misma lógica ya vista al verificar noticias actuales, aplicada acá a documentos del pasado."

pasos:
  - "Ver `../../ciudadania-digital/verificacion-de-una-noticia/`: es el mismo principio de contraste de fuentes."

explicacion: |
  Verdadero: es la conexión directa entre este tema y el método de
  verificación ya estudiado en otro contexto.
```

### 12 — Clasificar tipo de fuente según ejemplo

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["fuente_primaria", "fuente_secundaria", "practica"]

variables:
  ejemplos: ["un decreto oficial firmado en el momento de los hechos", "un documental producido 50 años después analizando ese decreto"]
  tipos: ["fuente primaria", "fuente secundaria"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["fuente primaria", "fuente secundaria"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de..."

pasos:
  - "Contemporáneo a los hechos = primaria. Posterior, analizando fuentes primarias = secundaria."

explicacion: |
  La clasificación depende de cuándo se produjo la fuente respecto de
  los hechos que documenta.
```

### 13 — El interés del autor no invalida automáticamente la fuente

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["sesgo", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si el autor de una fuente tenía un interés personal en los hechos que narra, esa fuente debe descartarse por completo como fuente histórica válida."

pasos:
  - "El trabajo del historiador es entender ese interés/sesgo para leer la fuente con precisión, no descartarla automáticamente."

explicacion: |
  Falso: casi toda fuente tiene algún interés o posición detrás; el
  método consiste en contextualizarla, no en descartarla.
```

### 14 — Relación con contraargumentos

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["contraargumentos", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Interpretar una fuente histórica reusa directamente las herramientas de análisis crítico ya vistas en `../../lengua/contraargumentos/`: sopesar una postura sabiendo su origen e interés."

pasos:
  - "Es el mismo tipo de análisis crítico, aplicado ahora a documentos del pasado en vez de a un texto argumentativo actual."

explicacion: |
  Verdadero: es la conexión directa entre este tema y su
  prerrequisito de Lengua.
```

### 15 — Objetos y edificios también son fuentes

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["fuente_historica", "tipos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente histórica no tiene que ser necesariamente un texto escrito: un edificio, un objeto arqueológico o una fotografía también son fuentes válidas."

pasos:
  - "Cualquier resto del pasado que permita conocer lo ocurrido cuenta como fuente."

explicacion: |
  Verdadero: las fuentes históricas abarcan una gran variedad de
  tipos de material, no sólo documentos escritos.
```

### 16 — Analizar un testimonio oral con las mismas preguntas

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["analisis_critico", "testimonio_oral"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un testimonio oral recogido décadas después de un hecho se analiza con las mismas preguntas críticas (quién, cuándo, para quién, qué omite) que cualquier otra fuente, considerando además el efecto del paso del tiempo sobre la memoria."

pasos:
  - "El método de análisis crítico se aplica de forma consistente a distintos tipos de fuente, con matices propios de cada una."

explicacion: |
  Verdadero: el marco general de preguntas se adapta, pero se aplica
  a cualquier tipo de fuente, incluidos los testimonios orales.
```

### 17 — Contrastar fuentes no garantiza certeza absoluta

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["contraste", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Contrastar una fuente con otras independientes aumenta la confianza en la interpretación, pero no garantiza una certeza absoluta sobre lo que realmente ocurrió."

pasos:
  - "El trabajo histórico maneja grados de confianza y evidencia, no certezas matemáticas."

explicacion: |
  Verdadero: es un matiz importante sobre los límites del método
  histórico, coherente con el manejo de incertidumbre en cualquier
  investigación seria.
```

### 18 — Ordenar el proceso de análisis crítico de una fuente

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["analisis_critico", "metodo"]

enunciado: "Ordená los pasos del análisis crítico de una fuente histórica."
tipo: ordenar
opciones_explicitas:
  - "Identificar quién produjo la fuente y su posición respecto de los hechos"
  - "Determinar cuándo y dónde se produjo (primaria o secundaria)"
  - "Analizar para quién y con qué propósito se produjo"
  - "Contrastar su contenido con otras fuentes independientes"
respuesta_orden: ["Identificar quién produjo la fuente y su posición respecto de los hechos", "Determinar cuándo y dónde se produjo (primaria o secundaria)", "Analizar para quién y con qué propósito se produjo", "Contrastar su contenido con otras fuentes independientes"]
explicacion: |
  El orden sigue la secuencia lógica de las preguntas del análisis
  crítico descritas en la teoría.
```

### 19 — Interpretar fuentes es la base de la investigación histórica seria

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["interpretar_una_fuente_historica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aplicar este método crítico es la base de cualquier trabajo serio de investigación histórica, no sólo memorizar fechas y hechos ya interpretados por otros."

pasos:
  - "Es la conclusión central de por qué este tema es importante más allá de la mera acumulación de datos."

explicacion: |
  Verdadero: es la síntesis del propósito educativo central de este
  tema.
```

### 20 — Aplicación: leer un documento histórico con ojo crítico

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["interpretar_una_fuente_historica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un documento histórico, conviene preguntarse quién lo escribió, para quién, con qué propósito, y contrastarlo con otras fuentes, en vez de aceptarlo como un relato neutral y completo de lo ocurrido."

pasos:
  - "Es la aplicación práctica directa del método de análisis crítico estudiado en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al leer cualquier
  fuente histórica real.
```
