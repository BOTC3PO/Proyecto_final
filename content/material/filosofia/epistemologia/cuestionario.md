# Filosofía — Epistemología (cuestionario, 20 preguntas VBLang)

> Tema: `FI9`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la epistemología

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "basico"
  tags: ["epistemologia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La epistemología es la rama de Filosofía que estudia qué es saber algo, cómo se justifica una creencia, y qué distingue el conocimiento de la opinión."

pasos:
  - "También se la llama \"teoría del conocimiento\"."

explicacion: |
  Verdadero: es la definición central de esta rama de la filosofía.
```

### 2 — Las tres condiciones del conocimiento clásico

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Desde Platón, el conocimiento se definió como creencia verdadera justificada: hay que creerlo, tiene que ser verdad, y tiene que estar justificado."

pasos:
  - "Las tres condiciones deben cumplirse a la vez, ninguna alcanza por sí sola."

explicacion: |
  Verdadero: es la definición clásica de conocimiento en
  epistemología.
```

### 3 — Identificar la condición de creencia

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "basico"
  tags: ["definicion_clasica", "creencia"]

variables:
  n: uno_de([1, 1])

respuesta: "creencia"
tipo: mc
opciones_explicitas: ["creencia", "verdad", "justificación"]

enunciado: "La condición que exige que la persona realmente crea en la afirmación (no basta con que sea verdad si nadie la cree) se llama..."

pasos:
  - "Es una de las tres condiciones de la definición clásica de conocimiento."

explicacion: |
  La condición de creencia exige que el sujeto sostenga efectivamente
  la afirmación.
```

### 4 — Identificar la condición de justificación

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica", "justificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "justificación"
tipo: mc
opciones_explicitas: ["creencia", "verdad", "justificación"]

enunciado: "La condición que exige tener razones sólidas para creer algo, no basta con acertar por casualidad, se llama..."

pasos:
  - "Adivinar correctamente sin argumentos no cumple esta condición."

explicacion: |
  La justificación es lo que distingue un acierto casual de un
  conocimiento genuino.
```

### 5 — Adivinar correctamente no es conocimiento

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["justificacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Adivinar correctamente el resultado de un partido de fútbol, sin ningún argumento, cuenta como conocimiento según la definición clásica, porque el resultado terminó siendo verdadero."

pasos:
  - "Falta la justificación: acertar por casualidad no es lo mismo que tener razones sólidas para creer algo."

explicacion: |
  Falso: sin justificación, no se cumple la definición clásica de
  conocimiento, aunque la creencia haya resultado verdadera.
```

### 6 — Opinión vs. conocimiento

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["opinion", "conocimiento", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una opinión puede ser verdadera o falsa; lo que la distingue del conocimiento es la falta de justificación sólida detrás de ella."

pasos:
  - "\"Creo que va a llover\" (sin evidencia) es opinión; con el pronóstico meteorológico como respaldo, se acerca más al conocimiento."

explicacion: |
  Verdadero: la justificación (no sólo la verdad) es lo que separa
  opinión de conocimiento.
```

### 7 — Identificar el racionalismo

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["racionalismo"]

variables:
  n: uno_de([1, 1])

respuesta: "racionalismo"
tipo: mc
opciones_explicitas: ["racionalismo", "empirismo"]

enunciado: "La corriente que sostiene que el conocimiento viene principalmente de la razón, independiente de la experiencia sensorial, se llama..."

pasos:
  - "Descartes es un referente clásico de esta corriente."

explicacion: |
  El racionalismo prioriza la razón por sobre la experiencia como
  fuente de conocimiento.
```

### 8 — Identificar el empirismo

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["empirismo"]

variables:
  n: uno_de([1, 1])

respuesta: "empirismo"
tipo: mc
opciones_explicitas: ["racionalismo", "empirismo"]

enunciado: "La corriente que sostiene que el conocimiento viene principalmente de la experiencia sensorial se llama..."

pasos:
  - "Locke y Hume son referentes clásicos de esta corriente."

explicacion: |
  El empirismo prioriza la experiencia sensorial por sobre la razón
  pura como fuente de conocimiento.
```

### 9 — Racionalismo y empirismo son posturas, no verdades absolutas

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["racionalismo", "empirismo", "neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Racionalismo y empirismo son dos tradiciones filosóficas con argumentos propios que responden a la misma pregunta, sin que ninguna de las dos sea \"la correcta\" de forma objetiva."

pasos:
  - "Ver `../historia-de-la-filosofia-y-corrientes/`: es el mismo criterio de neutralidad aplicado a corrientes de pensamiento."

explicacion: |
  Verdadero: el objetivo es describir qué sostiene cada corriente, no
  evaluar cuál tiene razón.
```

### 10 — Referente del racionalismo

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["racionalismo", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Descartes"
tipo: completar

enunciado: "El filósofo francés considerado referente clásico del racionalismo se apellida..."

pasos:
  - "Descartes es el autor central de esta corriente epistemológica."

explicacion: |
  Descartes es autor representativo del racionalismo.
```

### 11 — Referentes del empirismo

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["empirismo", "autores"]

variables:
  autores: ["Locke", "Hume"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "{autores[idx]} es considerado un referente clásico del empirismo."

pasos:
  - "Ambos autores son referentes de esta corriente epistemológica."

explicacion: |
  Verdadero: Locke y Hume son los referentes clásicos más citados del
  empirismo.
```

### 12 — El problema de Gettier

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["gettier"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El filósofo Edmund Gettier mostró casos donde alguien tiene una creencia verdadera y justificada, pero por una cadena de casualidades que hace dudoso llamarlo \"conocimiento\"."

pasos:
  - "Es un problema abierto de la filosofía contemporánea sobre los límites de la definición clásica."

explicacion: |
  Verdadero: el problema de Gettier muestra que la definición clásica
  (creencia verdadera justificada) no cierra completamente la
  pregunta de qué es el conocimiento.
```

### 13 — La definición clásica no está totalmente cerrada

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["gettier", "definicion_clasica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque la definición de \"creencia verdadera justificada\" es útil y clásica, el problema de Gettier muestra que no resuelve completamente qué es el conocimiento en todos los casos posibles."

pasos:
  - "Filósofos contemporáneos siguen debatiendo cómo ajustar o complementar esa definición."

explicacion: |
  Verdadero: es un tema abierto de la epistemología contemporánea,
  mencionado brevemente en este nivel.
```

### 14 — Identificar las tres condiciones en un ejemplo

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Sé que el agua hierve a 100°C al nivel del mar\" cumple las tres condiciones clásicas: lo creo, es verdad, y tengo justificación (evidencia científica repetida)."

pasos:
  - "Cumplir las tres condiciones a la vez es lo que la definición clásica exige para llamarlo conocimiento."

explicacion: |
  Verdadero: es un ejemplo típico donde las tres condiciones se
  cumplen simultáneamente.
```

### 15 — Un enunciado falso no puede ser conocimiento

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica", "verdad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según la definición clásica, se puede \"saber\" algo que resulta ser falso, siempre que se crea con firmeza y se tenga alguna justificación."

pasos:
  - "La condición de verdad es una de las tres exigidas: sin que la afirmación sea efectivamente verdadera, no puede llamarse conocimiento."

explicacion: |
  Falso: aunque haya creencia firme y algo de justificación, si el
  contenido es falso, no cumple la definición clásica de
  conocimiento.
```

### 16 — Epistemología y verificación de noticias

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["epistemologia", "ciudadania_digital"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La pregunta epistemológica de qué justifica una creencia es la misma que se aplica, en la práctica, al verificar si una noticia es confiable."

pasos:
  - "Ver `../../ciudadania-digital/verificacion-de-una-noticia/`: es la misma pregunta de fondo formalizada en Filosofía y aplicada en un contexto concreto."

explicacion: |
  Verdadero: la epistemología da el marco teórico detrás de una
  práctica muy concreta y cotidiana.
```

### 17 — Clasificar la fuente de una creencia según racionalismo o empirismo

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["racionalismo", "empirismo", "practica"]

variables:
  posturas: ["sostener que 2+2=4 se conoce por puro razonamiento, sin necesidad de experimentar", "sostener que sólo se puede saber que el fuego quema por haberlo experimentado"]
  corrientes: ["racionalismo", "empirismo"]
  idx: uno_de([0, 1])

respuesta: corrientes[idx]
tipo: mc
opciones_explicitas: ["racionalismo", "empirismo"]

enunciado: "La postura de \"{posturas[idx]}\" es más cercana al..."

pasos:
  - "Si la fuente del conocimiento es la razón pura, es racionalismo. Si es la experiencia sensorial, es empirismo."

explicacion: |
  Cada ejemplo ilustra una de las dos corrientes clásicas sobre el
  origen del conocimiento.
```

### 18 — Ordenar el proceso para evaluar si algo es conocimiento

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["epistemologia", "metodo"]

enunciado: "Ordená los pasos para evaluar, según la definición clásica, si una afirmación cuenta como conocimiento."
tipo: ordenar
opciones_explicitas:
  - "Verificar si la persona efectivamente cree la afirmación"
  - "Verificar si la afirmación es efectivamente verdadera"
  - "Verificar si hay razones sólidas (justificación) para creerla"
  - "Concluir que es conocimiento sólo si se cumplen las tres condiciones a la vez"
respuesta_orden: ["Verificar si la persona efectivamente cree la afirmación", "Verificar si la afirmación es efectivamente verdadera", "Verificar si hay razones sólidas (justificación) para creerla", "Concluir que es conocimiento sólo si se cumplen las tres condiciones a la vez"]
explicacion: |
  El proceso revisa cada una de las tres condiciones clásicas antes
  de concluir si algo cuenta como conocimiento genuino.
```

### 19 — Epistemología como rama independiente de la lógica

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["epistemologia", "logica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La epistemología es una rama distinta de la lógica: depende de `../logica-proposicional/` como base formal general, pero estudia una pregunta distinta (qué es el conocimiento), no la validez de razonamientos."

pasos:
  - "Ver `../dependencias.md`: por eso epistemología cuelga de `FI1` como hermana de `FI2` (validez), no como continuación de esa cadena."

explicacion: |
  Verdadero: son ramas clásicas distintas de Filosofía, aunque
  compartan el mismo punto de partida lógico.
```

### 20 — Aplicación: distinguir información confiable de no confiable

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["epistemologia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de aceptar una afirmación como cierta, conviene preguntarse qué justificación real la respalda, en vez de aceptarla sólo porque parece verdadera o la repite mucha gente."

pasos:
  - "Es la aplicación práctica directa del criterio de justificación epistemológica en la vida cotidiana."

explicacion: |
  Verdadero: exigir justificación antes de aceptar una afirmación es
  la aplicación concreta de este tema fuera del ámbito puramente
  filosófico.
```
