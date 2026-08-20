# Lengua — Tesis (cuestionario, 20 preguntas VBLang)

> Tema: `P12a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de tesis

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tesis es la postura u opinión central que un texto argumentativo defiende, la idea que el autor quiere que el lector termine aceptando."

pasos:
  - "Es el mensaje central del texto argumentativo, pero tomando una postura, no describiendo un hecho neutral."

explicacion: |
  Verdadero: la tesis es el eje central del texto argumentativo.
```

### 2 — Una tesis debe ser debatible

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "debatibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una tesis debe ser debatible: alguien razonable podría sostener lo contrario."

pasos:
  - "\"El agua es H₂O\" no es tesis (hecho); \"debería prohibirse tal cosa\" sí lo es (alguien puede discrepar)."

explicacion: |
  Verdadero: la debatibilidad es el requisito central para que una
  afirmación sea considerada tesis.
```

### 3 — Identificar cuál es tesis y cuál es hecho

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "hechos", "diferenciacion"]

variables:
  afirmaciones: ["El agua hierve a 100°C al nivel del mar", "Debería prohibirse el uso de celulares en el aula"]
  tipos: ["hecho", "tesis"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["hecho", "tesis"]

enunciado: "\"{afirmaciones[idx]}\" es un..."

pasos:
  - "Si nadie razonable podría discutirlo, es un hecho. Si alguien podría sostener lo contrario, es una tesis."

explicacion: |
  La debatibilidad es el criterio central para distinguir un hecho
  objetivo de una tesis.
```

### 4 — La tesis se formula como afirmación, no como pregunta

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "formulacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Una tesis suele formularse como pregunta (\"¿Deberían prohibirse los celulares en el aula?\"), no como afirmación."

pasos:
  - "La tesis toma postura de forma afirmativa; la pregunta sólo plantea el tema a discutir, no defiende una postura."

explicacion: |
  Falso: la tesis se formula como afirmación (\"deberían
  prohibirse...\"), la pregunta es previa a la tesis, no la tesis en
  sí.
```

### 5 — Ubicación de la tesis en el texto

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "ubicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tesis suele ubicarse al principio o al final del texto, igual que la idea principal en cualquier otro texto."

pasos:
  - "Ver `../comprension-idea-principal/`: la tesis es, en el texto argumentativo, el equivalente a la idea principal."

explicacion: |
  Verdadero: la ubicación típica de la tesis sigue el mismo patrón
  que la idea principal.
```

### 6 — Tesis explícita

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "explicita"]

variables:
  n: uno_de([1, 1])

respuesta: "explícita"
tipo: mc
opciones_explicitas: ["explícita", "implícita"]

enunciado: "Cuando la tesis está escrita literalmente en una oración del texto, se dice que es..."

pasos:
  - "Se puede citar la oración exacta que la formula."

explicacion: |
  Una tesis explícita se puede identificar citando directamente la
  oración del texto.
```

### 7 — Tesis implícita

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "implicita"]

variables:
  n: uno_de([1, 1])

respuesta: "implícita"
tipo: mc
opciones_explicitas: ["explícita", "implícita"]

enunciado: "Cuando la tesis no está escrita literalmente y hay que deducirla del conjunto de argumentos del texto, se dice que es..."

pasos:
  - "Igual que la idea principal implícita, hay que inferirla combinando toda la información dada."

explicacion: |
  Una tesis implícita requiere inferencia, no está formulada de forma
  directa en ninguna oración puntual.
```

### 8 — Diferencia entre tema y tesis

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "basico"
  tags: ["tesis", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El tema (\"el uso de celulares en el aula\") es exactamente lo mismo que la tesis (\"debería prohibirse el uso de celulares en el aula\")."

pasos:
  - "El tema es de qué trata el texto; la tesis es la postura que se toma sobre ese tema."

explicacion: |
  Falso: el tema es más corto y general; la tesis agrega la postura
  específica del autor sobre ese tema.
```

### 9 — Un mismo tema puede dar tesis opuestas

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos autores pueden escribir sobre el mismo tema (\"el uso de celulares en el aula\") y sostener tesis completamente opuestas."

pasos:
  - "Uno puede defender que se prohíban y otro que se permitan; el tema es el mismo, la tesis es distinta."

explicacion: |
  Verdadero: la tesis es la postura particular de cada autor, no una
  propiedad fija del tema.
```

### 10 — Identificar la tesis en un fragmento

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Los parques públicos son fundamentales para la salud mental de una ciudad"
tipo: mc
opciones_explicitas: ["Los parques públicos son fundamentales para la salud mental de una ciudad", "Muchas ciudades tienen parques públicos", "Los parques públicos tienen árboles y bancos"]

enunciado: "\"Los parques públicos son fundamentales para la salud mental de una ciudad. Reducen el estrés, fomentan el ejercicio y generan espacios de encuentro social.\" ¿Cuál es la tesis?"

pasos:
  - "La primera oración toma postura (\"fundamentales\"); las siguientes son argumentos que la sostienen, no la tesis en sí."

explicacion: |
  La tesis es la postura tomada; el resto son razones (argumentos)
  que la apoyan, no la tesis misma.
```

### 11 — La tesis no es una descripción neutral

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La tesis, igual que un párrafo expositivo, describe un hecho de forma neutral y objetiva, sin tomar postura."

pasos:
  - "La tesis defiende una posición específica sobre algo debatible, a diferencia de la descripción neutral de un texto expositivo (ver `../tipos-textuales/`)."

explicacion: |
  Falso: tomar postura sobre algo debatible es justamente lo que
  distingue a la tesis de una afirmación neutral.
```

### 12 — Reconocer una afirmación no debatible

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "hechos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"La Tierra gira alrededor del Sol\" es un buen ejemplo de tesis para un texto argumentativo."

pasos:
  - "Nadie razonable discutiría ese hecho científico establecido: no cumple el requisito de ser debatible."

explicacion: |
  Falso: al no ser debatible, es un hecho, no una tesis apropiada
  para un texto argumentativo.
```

### 13 — La tesis anticipa lo que sigue en el texto

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando la tesis se anuncia al principio de un texto argumentativo formal, el lector sabe desde el inicio qué postura se va a defender a lo largo del texto."

pasos:
  - "Esa anticipación ayuda a leer los argumentos que siguen sabiendo qué están sosteniendo."

explicacion: |
  Verdadero: anunciar la tesis temprano orienta la lectura del resto
  del texto argumentativo.
```

### 14 — Formular una tesis a partir de un tema

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "practica"]

variables:
  temas: ["el reciclaje obligatorio", "la tarea escolar los fines de semana"]
  tesis_posibles: ["El reciclaje debería ser obligatorio en todos los hogares", "La tarea escolar los fines de semana debería eliminarse"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sobre el tema \"{temas[idx]}\", una posible tesis (que alguien podría discutir) sería: \"{tesis_posibles[idx]}\"."

pasos:
  - "Una tesis válida sobre ese tema toma postura de forma afirmativa y debatible."

explicacion: |
  Verdadero: esa formulación cumple los dos requisitos de una tesis
  (afirmación + debatible).
```

### 15 — La tesis no cambia dentro del mismo texto

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "coherencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo bien construido mantiene la misma tesis a lo largo de todo el desarrollo, sin cambiar de postura a mitad de camino."

pasos:
  - "Cambiar de postura sin aviso confundiría al lector sobre qué se está defendiendo."

explicacion: |
  Verdadero: la coherencia con la tesis planteada es un requisito
  básico del texto argumentativo bien construido.
```

### 16 — Diferenciar tesis de argumento

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "argumentos", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La tesis y los argumentos que la sostienen son exactamente lo mismo: cualquier oración del texto argumentativo puede llamarse indistintamente tesis o argumento."

pasos:
  - "La tesis es la postura central única; los argumentos (ver `../argumentos/`) son las razones que la sostienen, y suele haber varios."

explicacion: |
  Falso: son dos elementos distintos y complementarios del texto
  argumentativo, no sinónimos.
```

### 17 — Reconocer tesis implícita

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "implicita", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Los animales no deberían usarse en experimentos científicos"
tipo: mc
opciones_explicitas: ["Los animales no deberían usarse en experimentos científicos", "Algunos animales sienten dolor", "Los experimentos científicos avanzan la medicina"]

enunciado: "\"Los animales sienten dolor y estrés durante los experimentos. Existen alternativas tecnológicas para probar medicamentos sin usar animales.\" (sin decirlo literal) ¿Cuál es la tesis implícita?"

pasos:
  - "Ambas razones apuntan hacia la misma conclusión no formulada explícitamente: hay que inferirla combinándolas."

explicacion: |
  Aunque el texto no lo diga literalmente, las razones dadas llevan a
  una postura clara que hay que inferir.
```

### 18 — Ordenar el proceso para identificar la tesis

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "intermedio"
  tags: ["tesis", "metodo"]

enunciado: "Ordená los pasos para identificar la tesis de un texto argumentativo."
tipo: ordenar
opciones_explicitas:
  - "Leer el texto completo"
  - "Identificar el tema general del que trata"
  - "Buscar la postura u opinión que el autor defiende sobre ese tema"
  - "Confirmar que esa postura es debatible (alguien podría sostener lo contrario)"
respuesta_orden: ["Leer el texto completo", "Identificar el tema general del que trata", "Buscar la postura u opinión que el autor defiende sobre ese tema", "Confirmar que esa postura es debatible (alguien podría sostener lo contrario)"]
explicacion: |
  El método va del tema general a la postura específica, y termina
  verificando el requisito de debatibilidad.
```

### 19 — Tesis como prerrequisito de argumentos

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "argumentos", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No se pueden evaluar si los argumentos de un texto realmente sostienen su postura sin haber identificado antes cuál es esa tesis."

pasos:
  - "Ver `../argumentos/`: los argumentos se evalúan siempre EN RELACIÓN a la tesis que deben sostener."

explicacion: |
  Verdadero: por eso tesis es prerrequisito directo de argumentos, el
  siguiente tema de la cadena.
```

### 20 — Aplicación: elegir una buena tesis para escribir

```
metadata:
  materia: "lengua"
  tema: "tesis"
  nivel: "avanzado"
  tags: ["tesis", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escribir un texto argumentativo propio, conviene elegir una tesis debatible y formulada como afirmación clara, en vez de una pregunta abierta o un hecho indiscutible."

pasos:
  - "Sólo una tesis debatible y afirmativa permite construir argumentos que la defiendan de forma efectiva."

explicacion: |
  Verdadero: elegir bien la tesis es el primer paso práctico para
  escribir un texto argumentativo sólido.
```
