# Lengua — Detectar falacias (cuestionario, 20 preguntas VBLang)

> Tema: `P13`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de falacia

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

### 2 — Identificar ad hominem

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

### 3 — Identificar falsa dicotomía

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

### 4 — Identificar pendiente resbaladiza

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

### 5 — Identificar apelación a la autoridad no pertinente

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

### 6 — Identificar apelación a la popularidad

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

### 7 — Identificar generalización apresurada

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

### 8 — Identificar espantapájaros

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

### 9 — Identificar petición de principio

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

### 10 — Señalar una falacia no invalida la conclusión

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

### 11 — El ad hominem no responde al argumento

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

### 12 — Diferenciar generalización apresurada de un argumento de datos válido

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

### 13 — Reconocer varias falacias en un texto

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

### 14 — Falacia vs. argumento válido con premisa falsa

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

### 15 — Detectar falacia en publicidad

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

### 16 — El método para detectar una falacia

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

### 17 — La falsa dicotomía ignora posturas intermedias

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

### 18 — Ordenar el proceso para evaluar un argumento sospechoso

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
respuesta_orden: ["Separar la conclusión de las razones dadas", "Revisar si las razones responden directamente al contenido del argumento o se desvían (persona, popularidad, miedo)", "Comparar el patrón encontrado con las falacias comunes conocidas", "Nombrar la falacia específica si corresponde"]
explicacion: |
  El proceso va de la separación básica al reconocimiento del patrón
  específico de falacia.
```

### 19 — Detectar falacias como puente a la lógica formal

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

### 20 — Aplicación: leer noticias con ojo crítico

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
