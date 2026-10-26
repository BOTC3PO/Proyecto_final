# Filosofía — Deontología (cuestionario, 20 preguntas VBLang)

> Tema: `FI8b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Criterio central de la deontología

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "basico"
  tags: ["deontologia", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La deontología sostiene que una acción es correcta si cumple con un deber moral, sin importar cuáles sean sus consecuencias."

pasos:
  - "\"Deon\" significa \"deber\" en griego: el nombre de la corriente refleja su criterio central."

explicacion: |
  Verdadero: es el criterio central de la deontología, opuesto al
  consecuencialismo del utilitarismo.
```

### 2 — Kant y el imperativo categórico

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["kant", "imperativo_categorico"]

variables:
  n: uno_de([1, 1])

respuesta: "Kant"
tipo: completar

enunciado: "El filósofo que propuso el imperativo categórico como criterio para identificar deberes morales se apellida..."

pasos:
  - "Immanuel Kant es el referente clásico central de la deontología."

explicacion: |
  Kant es el autor asociado al criterio deontológico del imperativo
  categórico.
```

### 3 — Formulación del imperativo categórico

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["imperativo_categorico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según el imperativo categórico, hay que actuar sólo según una regla que se pueda querer que se convierta, al mismo tiempo, en ley universal para todos."

pasos:
  - "En palabras simples: \"¿qué pasaría si TODOS actuaran así?\"."

explicacion: |
  Verdadero: es la formulación central del imperativo categórico de
  Kant.
```

### 4 — Por qué mentir es incorrecto para Kant

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["kant", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para Kant, mentir es incorrecto siempre, porque si todos mintieran cuando les conviene, la confianza necesaria para que una mentira \"funcione\" desaparecería."

pasos:
  - "La máxima \"miento cuando me conviene\" no se puede universalizar sin contradicción."

explicacion: |
  Verdadero: es el ejemplo clásico de aplicación del imperativo
  categórico al caso de la mentira.
```

### 5 — Kant evalúa la mentira sin importar las consecuencias

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["kant", "consecuencias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para Kant, mentir es incorrecto siempre, sin importar las consecuencias buenas que pudiera tener en un caso puntual — a diferencia del criterio utilitarista."

pasos:
  - "Ver `../utilitarismo/`: esa otra corriente sí evaluaría las consecuencias caso por caso."

explicacion: |
  Verdadero: es la diferencia central entre deontología y
  utilitarismo aplicada a este ejemplo concreto.
```

### 6 — Las personas como fines, no medios

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["personas_como_fines"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra formulación del imperativo categórico sostiene que hay que tratar a las personas siempre como fines en sí mismas, nunca sólo como medios para otro objetivo."

pasos:
  - "Usar a alguien únicamente como instrumento, sin considerar su voluntad o dignidad propia, es incorrecto según esta corriente."

explicacion: |
  Verdadero: es la segunda formulación central del imperativo
  categórico mencionada en la teoría.
```

### 7 — Usar a alguien sólo como instrumento es incorrecto

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["personas_como_fines"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la deontología kantiana, usar a una persona únicamente como instrumento para lograr un objetivo, sin considerar su voluntad, es incorrecto sin importar el resultado que se busque."

pasos:
  - "Es la aplicación práctica de tratar a las personas como fines, no medios."

explicacion: |
  Verdadero: es coherente con la segunda formulación del imperativo
  categórico.
```

### 8 — El dilema del tranvía según la deontología

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["dilema_del_tranvia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un análisis deontológico puede objetar que decidir activamente desviar el tranvía hacia una persona la usa como medio (su muerte se convierte en instrumento para salvar a otras) — a diferencia del análisis utilitarista."

pasos:
  - "Ver `../utilitarismo/`: es el mismo dilema clásico, con respuestas distintas según la corriente."

explicacion: |
  Verdadero: es la aplicación del criterio deontológico a este caso
  clásico, contrastando con la respuesta utilitarista.
```

### 9 — El debate sigue abierto incluso dentro de la deontología

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["dilema_del_tranvia", "debate_abierto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintas formulaciones deontológicas pueden llegar a conclusiones distintas sobre el dilema del tranvía, mostrando que el debate sigue abierto incluso dentro de esta corriente."

pasos:
  - "No hay una única \"respuesta deontológica\" acordada por todos los deontólogos para este caso."

explicacion: |
  Verdadero: es un matiz importante sobre la diversidad interna
  dentro de una misma corriente ética.
```

### 10 — Deontología no evalúa las consecuencias caso por caso

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "utilitarismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La deontología, igual que el utilitarismo, evalúa cada acción según sus consecuencias particulares en cada caso concreto."

pasos:
  - "La deontología evalúa según deberes/reglas fijas, sin importar el resultado; eso es justamente lo que la distingue del utilitarismo."

explicacion: |
  Falso: es exactamente lo contrario, la deontología prioriza el
  cumplimiento del deber por sobre el resultado.
```

### 11 — Deber vs. resultado: la diferencia central con el utilitarismo

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "utilitarismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia central entre deontología y utilitarismo es que la primera mira si se respeta un deber (sin importar el resultado), y la segunda mira el resultado neto de bienestar (sin importar tanto el deber)."

pasos:
  - "Ver `../utilitarismo/`: es el contraste directo entre estas dos corrientes."

explicacion: |
  Verdadero: es la síntesis de la diferencia central entre ambas
  corrientes de la subrama.
```

### 12 — Aplicar el imperativo categórico a un caso

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["imperativo_categorico", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "preguntarse qué pasaría si todos actuaran de esa misma manera"
tipo: mc
opciones_explicitas: ["preguntarse qué pasaría si todos actuaran de esa misma manera", "calcular qué opción genera más bienestar neto", "preguntarse qué haría una persona virtuosa"]

enunciado: "Para evaluar una acción según el imperativo categórico, el primer paso es..."

pasos:
  - "El criterio central del imperativo categórico es la universalización de la máxima de acción."

explicacion: |
  El imperativo categórico se basa en preguntarse si la regla de
  acción podría convertirse en ley universal sin contradicción.
```

### 13 — Deontología responde la misma pregunta central que utilitarismo

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["deontologia", "etica_como_rama_propia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Deontología responde a la misma primera pregunta central de la ética normativa (\"¿qué hace correcta a una acción?\") que responde el utilitarismo, pero con un criterio distinto."

pasos:
  - "Ver `../etica-como-rama-propia/`: ambas corrientes responden la misma pregunta con criterios opuestos."

explicacion: |
  Verdadero: es la conexión directa entre este tema y el marco
  general de ética normativa.
```

### 14 — El nombre "deontología" viene del griego "deber"

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "etimologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La palabra \"deontología\" viene del griego \"deon\", que significa \"deber\"."

pasos:
  - "El nombre de la corriente refleja directamente su criterio central."

explicacion: |
  Verdadero: es el origen etimológico del nombre de esta corriente.
```

### 15 — Crítica típica a la deontología (mencionada con neutralidad)

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["criticas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una crítica común a la deontología es que puede llevar a resultados que parecen intuitivamente malos si se siguen las reglas de forma rígida, sin considerar las consecuencias del caso concreto."

pasos:
  - "Es una crítica que suele venir del lado utilitarista, presentada acá con neutralidad, sin declarar veredicto."

explicacion: |
  Verdadero: es una crítica frecuente presentada como parte de
  describir el debate, no como conclusión definitiva.
```

### 16 — El imperativo categórico no depende del caso particular

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["imperativo_categorico", "universalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El imperativo categórico busca reglas que valgan de forma universal, no reglas que cambien según las circunstancias particulares de cada caso."

pasos:
  - "Es coherente con \"categórico\" (incondicional), en contraste con reglas condicionadas al resultado."

explicacion: |
  Verdadero: la universalidad incondicional es central en la
  formulación kantiana.
```

### 17 — Deontología y dignidad humana

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["personas_como_fines", "dignidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La formulación de \"personas como fines, no medios\" está estrechamente relacionada con la idea de dignidad humana: cada persona tiene un valor que no se puede reducir a su utilidad para otros."

pasos:
  - "Es la base filosófica de esta formulación del imperativo categórico."

explicacion: |
  Verdadero: la dignidad humana como valor irreductible es central
  en esta formulación deontológica.
```

### 18 — Ordenar el proceso de un análisis deontológico

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "metodo"]

enunciado: "Ordená los pasos de un análisis deontológico ante una acción a evaluar."
tipo: ordenar
opciones_explicitas:
  - "Identificar la máxima o regla que la acción propuesta seguiría"
  - "Preguntarse qué pasaría si esa regla se convirtiera en ley universal para todos"
  - "Revisar si tratar a alguien como medio, no como fin, forma parte de la acción"
  - "Concluir si la acción es correcta según esos criterios, sin importar el resultado"
respuesta_orden: ["Identificar la máxima o regla que la acción propuesta seguiría", "Preguntarse qué pasaría si esa regla se convirtiera en ley universal para todos", "Revisar si tratar a alguien como medio, no como fin, forma parte de la acción", "Concluir si la acción es correcta según esos criterios, sin importar el resultado"]
explicacion: |
  El proceso aplica las dos formulaciones del imperativo categórico
  (universalización y personas como fines) antes de concluir.
```

### 19 — Deontología como segunda corriente de la subrama

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["deontologia", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La deontología es la segunda de las cuatro corrientes normativas específicas de la subrama de dilemas éticos, hermana de utilitarismo, ética de la virtud y contractualismo."

pasos:
  - "Ver `../etica-de-la-virtud/` y `../contractualismo/`: los cuatro nodos hermanos dependen de `../etica-como-rama-propia/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

### 20 — Aplicación: pensar un dilema con el criterio deontológico

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["deontologia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante un dilema ético real, aplicar el criterio deontológico implica preguntarse si la acción respeta un deber universal (no mentir, no usar personas como medios), más allá de qué consecuencias tendría."

pasos:
  - "Es la aplicación práctica directa del criterio central de esta corriente a un caso concreto."

explicacion: |
  Verdadero: es la aplicación del criterio central estudiado en este
  tema a situaciones de la vida real, en contraste directo con el
  utilitarismo.
```
