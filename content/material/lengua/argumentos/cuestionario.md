# Lengua — Argumentos (cuestionario, 20 preguntas VBLang)

> Tema: `P12b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de argumento

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumentos", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un argumento es una razón que sostiene la tesis de un texto: sin argumentos, la tesis es sólo una opinión sin respaldo."

pasos:
  - "Ver `../tesis/`: los argumentos son lo que convierte una opinión en una postura defendida."

explicacion: |
  Verdadero: el argumento es lo que da sustento a la tesis.
```

### 2 — Identificar argumento de autoridad

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumento_de_autoridad"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de autoridad"
tipo: mc
opciones_explicitas: ["argumento de autoridad", "argumento de ejemplo", "argumento por analogía"]

enunciado: "\"Según la OMS, dormir menos de 7 horas afecta la salud\" es un ejemplo de..."

pasos:
  - "Se apoya en la opinión de una fuente reconocida (la OMS)."

explicacion: |
  El argumento de autoridad se apoya en la opinión de un experto o
  fuente reconocida.
```

### 3 — Identificar argumento de ejemplo

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumento_de_ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de ejemplo"
tipo: mc
opciones_explicitas: ["argumento de autoridad", "argumento de ejemplo", "argumento de datos"]

enunciado: "\"Finlandia redujo la jornada escolar y mejoró sus resultados académicos\" es un ejemplo de..."

pasos:
  - "Usa un caso concreto (Finlandia) para ilustrar y respaldar la tesis."

explicacion: |
  El argumento de ejemplo usa un caso concreto para respaldar la
  tesis.
```

### 4 — Identificar argumento de causa-consecuencia

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumento_causa_consecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de causa-consecuencia"
tipo: mc
opciones_explicitas: ["argumento de causa-consecuencia", "argumento de ejemplo", "argumento de autoridad"]

enunciado: "\"Si se prohíben los celulares en el aula, mejora la concentración de los alumnos\" es un ejemplo de..."

pasos:
  - "Explica que, si se acepta la tesis, se sigue un resultado concreto (mejora la concentración)."

explicacion: |
  El argumento de causa-consecuencia conecta la aceptación de la
  tesis con un resultado esperado.
```

### 5 — Identificar argumento de datos/estadística

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumento_de_datos"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de datos"
tipo: mc
opciones_explicitas: ["argumento de datos", "argumento de ejemplo", "argumento por analogía"]

enunciado: "\"El 70% de los estudiantes reporta distracción por el celular en clase\" es un ejemplo de..."

pasos:
  - "Se apoya en una cifra concreta (70%)."

explicacion: |
  El argumento de datos/estadística se apoya en cifras o estudios
  concretos.
```

### 6 — Identificar argumento por analogía

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumento_por_analogia"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento por analogía"
tipo: mc
opciones_explicitas: ["argumento por analogía", "argumento de autoridad", "argumento de datos"]

enunciado: "\"Así como se prohíbe fumar en espacios cerrados por salud pública, debería regularse el celular en el aula por la misma lógica\" es un ejemplo de..."

pasos:
  - "Compara la situación con otra parecida ya aceptada (la prohibición de fumar)."

explicacion: |
  El argumento por analogía compara la situación actual con otra
  situación similar ya aceptada.
```

### 7 — El argumento debe sostener la tesis directamente

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "relevancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un buen argumento sostiene directamente la tesis: un dato correcto pero irrelevante para la tesis no funciona como argumento válido, aunque sea cierto."

pasos:
  - "No basta con que un dato sea verdadero, tiene que dar una razón concreta para aceptar esa postura específica."

explicacion: |
  Verdadero: la relación directa con la tesis es lo que distingue a
  un argumento válido de un dato suelto (aunque verdadero).
```

### 8 — Argumento fuerte vs. débil

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "fortaleza"]

variables:
  argumentos: ["Según un estudio de la Universidad de Harvard de 2020, el ejercicio regular mejora la memoria en un 20%", "Todo el mundo sabe que hacer ejercicio es bueno"]
  tipos: ["fuerte", "débil"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["fuerte", "débil"]

enunciado: "El argumento \"{argumentos[idx]}\" es..."

pasos:
  - "Cuanto más específico y verificable, más fuerte. Las generalidades vagas (\"todo el mundo sabe\") son argumentos débiles."

explicacion: |
  La especificidad y verificabilidad son las claves para distinguir
  argumentos fuertes de débiles.
```

### 9 — Conectores típicos de causa

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "conectores"]

variables:
  conectores: ["porque", "ya que", "puesto que"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector típico que introduce un argumento en un texto argumentativo."

pasos:
  - "Estos conectores marcan la relación de razón/causa entre el argumento y la tesis."

explicacion: |
  Verdadero: son conectores causales típicos del texto argumentativo,
  la misma lógica de las subordinadas adverbiales de causa.
```

### 10 — Un texto puede tener varios tipos de argumento

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "variedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo sólido suele combinar varios tipos de argumento (autoridad, datos, ejemplo) en vez de repetir sólo un tipo."

pasos:
  - "Combinar tipos distintos hace el texto más persuasivo que repetir siempre el mismo enfoque."

explicacion: |
  Verdadero: la variedad de tipos de argumento suele fortalecer un
  texto argumentativo.
```

### 11 — Diferenciar argumento de ejemplo y de datos

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumento_de_ejemplo", "argumento_de_datos", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre el argumento de ejemplo y el de datos/estadística es que el ejemplo usa un caso puntual concreto (un país, una persona), y los datos usan cifras generales agregadas (porcentajes, promedios)."

pasos:
  - "\"Finlandia hizo X\" (un caso) vs. \"el 70% de los estudiantes...\" (una cifra agregada)."

explicacion: |
  Verdadero: caso puntual vs. cifra agregada es la diferencia central
  entre estos dos tipos de argumento.
```

### 12 — El argumento de autoridad depende de la fuente citada

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumento_de_autoridad", "validez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La fuerza de un argumento de autoridad depende de qué tan reconocida y relevante sea la fuente citada para el tema en cuestión."

pasos:
  - "Citar a un experto reconocido en el tema es más fuerte que citar a alguien sin relación con el campo."

explicacion: |
  Verdadero: no cualquier \"autoridad\" es igual de convincente, la
  pertinencia de la fuente importa.
```

### 13 — Clasificar el tipo de argumento en un fragmento

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "clasificacion"]

variables:
  frases: ["Un estudio de la Universidad de Buenos Aires demostró que el 60% de los adolescentes duerme menos de 6 horas", "Como sucedió con el cinturón de seguridad, que redujo las muertes en accidentes, el casco de bicicleta también debería ser obligatorio"]
  tipos: ["argumento de datos", "argumento por analogía"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["argumento de datos", "argumento por analogía", "argumento de autoridad", "argumento de ejemplo"]

enunciado: "\"{frases[idx]}\" es un..."

pasos:
  - "Buscar si hay una cifra (datos), un experto citado (autoridad), un caso puntual (ejemplo) o una comparación con otra situación (analogía)."

explicacion: |
  Cada fragmento fue construido para representar un tipo distinto de
  argumento según su estructura.
```

### 14 — Un argumento no es lo mismo que una opinión suelta

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "opinion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Cualquier opinión personal (\"a mí me parece que sí\") cuenta como un argumento válido en un texto argumentativo."

pasos:
  - "Un argumento necesita una razón concreta (dato, ejemplo, autoridad, causa) que sostenga la tesis, no basta con repetir la opinión sin sustento."

explicacion: |
  Falso: una opinión sin sustento no funciona como argumento, aunque
  coincida con la tesis.
```

### 15 — Varios argumentos pueden sostener la misma tesis

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumentos", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo puede presentar varios argumentos distintos para sostener una misma tesis."

pasos:
  - "Cuantos más argumentos sólidos y variados, más convincente suele ser el texto."

explicacion: |
  Verdadero: acumular argumentos (de distinto tipo, idealmente) es la
  estrategia habitual para reforzar una tesis.
```

### 16 — Un argumento débil no invalida automáticamente la tesis

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "tesis", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que uno de los argumentos de un texto sea débil no significa automáticamente que la tesis sea falsa, sólo que ese argumento en particular no la sostiene bien."

pasos:
  - "La tesis puede ser cierta o razonable aunque algún argumento puntual esté mal construido."

explicacion: |
  Verdadero: evaluar la calidad de un argumento es distinto de
  evaluar si la tesis en sí es correcta.
```

### 17 — Elegir el argumento más fuerte

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Según un estudio publicado en una revista médica, el 80% de los pacientes mejoró con este tratamiento"
tipo: mc
opciones_explicitas: ["Según un estudio publicado en una revista médica, el 80% de los pacientes mejoró con este tratamiento", "Mucha gente dice que este tratamiento funciona bien"]

enunciado: "Para sostener la tesis \"este tratamiento médico es efectivo\", ¿cuál de estos dos argumentos es más fuerte?"

pasos:
  - "El argumento con dato verificable y fuente específica es más fuerte que la generalidad vaga (\"mucha gente dice\")."

explicacion: |
  La especificidad y verificabilidad hacen que el primer argumento
  sea más sólido que el segundo.
```

### 18 — Ordenar el proceso para analizar los argumentos de un texto

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "metodo"]

enunciado: "Ordená los pasos para analizar los argumentos de un texto argumentativo."
tipo: ordenar
opciones_explicitas:
  - "Identificar la tesis que el texto defiende"
  - "Separar cada argumento presentado (buscando conectores como \"porque\", \"ya que\")"
  - "Clasificar cada argumento según su tipo (autoridad, ejemplo, datos, causa-consecuencia, analogía)"
  - "Evaluar si cada argumento sostiene directamente la tesis y qué tan fuerte es"
respuesta_orden: ["Identificar la tesis que el texto defiende", "Separar cada argumento presentado (buscando conectores como \"porque\", \"ya que\")", "Clasificar cada argumento según su tipo (autoridad, ejemplo, datos, causa-consecuencia, analogía)", "Evaluar si cada argumento sostiene directamente la tesis y qué tan fuerte es"]
explicacion: |
  El análisis parte de la tesis (ya vista en el tema anterior), sigue
  con la identificación de cada argumento, y termina en su
  evaluación.
```

### 19 — Argumentos como prerrequisito de contraargumentos

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "contraargumentos", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Saber construir bien los propios argumentos es necesario antes de poder anticipar y refutar los argumentos de la postura contraria (contraargumentos)."

pasos:
  - "Ver `../contraargumentos/`: para refutar un argumento ajeno, primero hay que entender qué hace fuerte o débil a un argumento en general."

explicacion: |
  Verdadero: por eso argumentos es prerrequisito directo de
  contraargumentos, el siguiente tema de la cadena.
```

### 20 — Aplicación: elegir el tipo de argumento según la audiencia

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si la audiencia de un texto valora mucho la evidencia científica, conviene priorizar argumentos de datos/estadística o de autoridad antes que argumentos por analogía o de ejemplo suelto."

pasos:
  - "Elegir el tipo de argumento más persuasivo depende de qué valora la audiencia a la que se dirige el texto."

explicacion: |
  Verdadero: la elección del tipo de argumento es una decisión
  estratégica según a quién se quiere convencer.
```
