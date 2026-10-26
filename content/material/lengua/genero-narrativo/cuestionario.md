# Lengua — Género narrativo (cuestionario, 20 preguntas VBLang)

> Tema: `P10Ba`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición del género narrativo

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["genero_narrativo", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género narrativo agrupa los textos literarios que cuentan una historia: hechos que le ocurren a personajes a lo largo del tiempo."

pasos:
  - "Es la especialización literaria del tipo textual narrativo."

explicacion: |
  Verdadero: contar una historia con personajes y acciones en el
  tiempo es la definición central del género narrativo.
```

### 2 — Identificar el cuento

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["cuento", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "cuento"
tipo: mc
opciones_explicitas: ["cuento", "novela", "fábula", "mito"]

enunciado: "Una narración breve, con pocos personajes y un solo conflicto central, es un/una..."

pasos:
  - "La brevedad y el conflicto único son las marcas del cuento frente a la novela."

explicacion: |
  El cuento se distingue de la novela por su extensión breve y su
  foco en un solo conflicto.
```

### 3 — Identificar la novela

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["novela", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "novela"
tipo: mc
opciones_explicitas: ["cuento", "novela", "leyenda", "mito"]

enunciado: "Una narración extensa, con varios personajes y tramas que se desarrollan en profundidad, es un/una..."

pasos:
  - "La extensión y la multiplicidad de tramas distinguen a la novela del cuento."

explicacion: |
  La novela permite mayor desarrollo de personajes y subtramas que el
  cuento.
```

### 4 — Identificar la fábula

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["fabula", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "fábula"
tipo: mc
opciones_explicitas: ["cuento", "fábula", "leyenda", "mito"]

enunciado: "Un relato breve protagonizado por animales, que termina con una moraleja explícita, es un/una..."

pasos:
  - "Animales como protagonistas + moraleja al final = fábula."

explicacion: |
  La fábula se distingue por sus protagonistas animales y su cierre
  con una enseñanza moral explícita.
```

### 5 — Identificar la leyenda

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["leyenda", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "leyenda"
tipo: mc
opciones_explicitas: ["fábula", "leyenda", "mito", "novela"]

enunciado: "Un relato tradicional que mezcla un hecho real con elementos fantásticos para explicar el origen de algo local, es un/una..."

pasos:
  - "Mezcla de real+fantástico y explicación de origen local son las marcas de la leyenda."

explicacion: |
  La leyenda se diferencia del mito en que suele anclarse a un lugar
  o hecho real concreto.
```

### 6 — Identificar el mito

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["mito", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "mito"
tipo: mc
opciones_explicitas: ["fábula", "leyenda", "mito", "cuento"]

enunciado: "Un relato tradicional que explica fenómenos del mundo (como el día y la noche) a través de dioses o seres sobrenaturales, es un/una..."

pasos:
  - "Dioses/seres sobrenaturales + explicación de fenómenos del mundo son las marcas del mito."

explicacion: |
  El mito recurre a lo sobrenatural para explicar el origen de
  fenómenos naturales o del mundo.
```

### 7 — Elemento: personajes

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "personajes"]

variables:
  n: uno_de([1, 1])

respuesta: "personajes"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿quiénes participan en la historia?\" se llama..."

pasos:
  - "Protagonista, antagonista y secundarios son tipos de este elemento."

explicacion: |
  Los personajes son quienes llevan adelante (o sufren) la acción de
  la historia.
```

### 8 — Elemento: acción/trama

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "trama"]

variables:
  n: uno_de([1, 1])

respuesta: "acción"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿qué sucede?\" (la serie de hechos encadenados) se llama..."

pasos:
  - "También se le llama \"trama\": la secuencia de sucesos de la historia."

explicacion: |
  La acción/trama es la serie de hechos que forman la historia
  contada.
```

### 9 — Elemento: tiempo

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: "tiempo"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿cuándo ocurre la historia?\" se llama..."

pasos:
  - "Incluye época, duración y orden en que se cuenta."

explicacion: |
  El tiempo narrativo define cuándo transcurren los hechos contados.
```

### 10 — Elemento: espacio

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "espacio"]

variables:
  n: uno_de([1, 1])

respuesta: "espacio"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿dónde ocurre la historia?\" se llama..."

pasos:
  - "El lugar (real o imaginario) donde suceden los hechos."

explicacion: |
  El espacio narrativo es el escenario donde ocurre la acción.
```

### 11 — El conflicto como motor de la historia

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["conflicto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin conflicto (un problema u obstáculo que enfrenta el protagonista), no hay historia que contar, sólo una descripción de hechos sin tensión."

pasos:
  - "El conflicto es lo que genera interés y avance en la trama."

explicacion: |
  Verdadero: el conflicto es el motor central de cualquier narración.
```

### 12 — Diferenciar protagonista de antagonista

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["personajes", "diferenciacion"]

variables:
  tipos: ["protagonista", "antagonista"]
  descripciones: ["el personaje principal, quien impulsa la acción", "el personaje que se opone al protagonista"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["protagonista", "antagonista", "secundario"]

enunciado: "El personaje que es \"{descripciones[idx]}\" se llama..."

pasos:
  - "El protagonista impulsa la historia; el antagonista se le opone."

explicacion: |
  Protagonista y antagonista son los dos roles centrales del
  conflicto narrativo.
```

### 13 — Fábula vs. mito: quién explica qué

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["fabula", "mito", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La fábula y el mito son exactamente lo mismo, sólo cambia el nombre según la región."

pasos:
  - "La fábula usa animales para dejar una moraleja explícita; el mito usa dioses/seres sobrenaturales para explicar fenómenos del mundo."

explicacion: |
  Falso: se distinguen por sus protagonistas (animales vs. dioses) y
  su propósito (enseñanza moral vs. explicación de fenómenos).
```

### 14 — La leyenda mezcla realidad y fantasía

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["leyenda"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una característica típica de la leyenda es combinar un hecho o lugar real con elementos fantásticos."

pasos:
  - "A diferencia del mito (totalmente sobrenatural), la leyenda suele anclarse a algo real."

explicacion: |
  Verdadero: esa mezcla de real y fantástico es lo que distingue a la
  leyenda de otras formas narrativas tradicionales.
```

### 15 — El cuento tiene un solo conflicto central

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["cuento", "conflicto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la novela, el cuento suele desarrollar un solo conflicto central, sin subtramas extensas."

pasos:
  - "La brevedad del cuento no permite el mismo desarrollo de múltiples tramas que la novela."

explicacion: |
  Verdadero: la concentración en un solo conflicto es típica del
  cuento por su extensión breve.
```

### 16 — Clasificar según elementos descritos

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["formas", "clasificacion"]

variables:
  descripciones: ["un zorro y una cigüeña se invitan a cenar mutuamente y aprenden una lección", "una joven se convierte en río para escapar de un dios enamorado, y así se explica el origen del río"]
  formas: ["fábula", "mito"]
  idx: uno_de([0, 1])

respuesta: formas[idx]
tipo: mc
opciones_explicitas: ["cuento", "fábula", "leyenda", "mito"]

enunciado: "Un relato donde \"{descripciones[idx]}\" es un ejemplo de..."

pasos:
  - "Animales + moraleja = fábula. Dioses/seres sobrenaturales + explicación de fenómeno = mito."

explicacion: |
  Cada forma narrativa breve tiene protagonistas y propósitos
  característicos que permiten identificarla.
```

### 17 — Sin conflicto, no hay narración

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["conflicto", "descripcion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"La casa era grande, con paredes blancas y techo rojo\" es un ejemplo de narración con un conflicto claro."

pasos:
  - "Esa oración sólo describe características, no cuenta hechos ni presenta un problema: es descriptiva, no narrativa."

explicacion: |
  Falso: sin acción ni conflicto, el texto es descriptivo, no
  narrativo — coherente con la distinción vista en tipos textuales.
```

### 18 — Ordenar los elementos al analizar una narración

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["elementos", "metodo"]

enunciado: "Ordená (de más general a más específico) el proceso para analizar los elementos de una narración."
tipo: ordenar
opciones_explicitas:
  - "Identificar los personajes (protagonista, antagonista, secundarios)"
  - "Determinar el tiempo y el espacio donde ocurre"
  - "Reconocer la acción/trama: la secuencia de hechos"
  - "Identificar el conflicto central que motoriza la historia"
respuesta_orden: ["Identificar los personajes (protagonista, antagonista, secundarios)", "Determinar el tiempo y el espacio donde ocurre", "Reconocer la acción/trama: la secuencia de hechos", "Identificar el conflicto central que motoriza la historia"]
explicacion: |
  Se parte de quiénes participan, luego cuándo/dónde, después qué
  pasa, y se llega al conflicto que explica por qué la historia
  avanza.
```

### 19 — Género narrativo como base de las subramas siguientes

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["genero_narrativo", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender los elementos básicos del género narrativo (personajes, trama, tiempo, espacio, conflicto) es el prerrequisito para estudiar quién narra la historia (narrador) y desde qué perspectiva (punto de vista)."

pasos:
  - "No se puede analizar CÓMO se cuenta una historia sin primero identificar QUÉ se está contando."

explicacion: |
  Verdadero: por eso este tema es el primer nodo de la subrama que
  sigue con narrador, punto de vista y estructura narrativa.
```

### 20 — Aplicación: elegir la forma narrativa según el propósito

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["formas", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el propósito es dejar una enseñanza moral clara usando animales como protagonistas, conviene escribir una fábula antes que una novela."

pasos:
  - "La fábula está diseñada específicamente para ese propósito: brevedad + moraleja explícita."

explicacion: |
  Verdadero: cada forma narrativa está adaptada a un propósito y
  extensión distintos.
```
