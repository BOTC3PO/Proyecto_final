# Filosofía — Historia de la filosofía y corrientes (cuestionario, 20 preguntas VBLang)

> Tema: `FI7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Los presocráticos y el arché

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "basico"
  tags: ["presocraticos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los presocráticos buscaron el principio (arché) que explica el origen de todo, sin recurrir sólo a mitos."

pasos:
  - "Tales propuso el agua, Heráclito el fuego, Pitágoras el número."

explicacion: |
  Verdadero: es la marca central del período presocrático.
```

### 2 — Identificar a Tales

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["presocraticos", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "agua"
tipo: completar

enunciado: "Tales de Mileto propuso que el principio (arché) de todas las cosas era el/la..."

pasos:
  - "Es uno de los primeros filósofos presocráticos registrados."

explicacion: |
  Tales asoció el origen de todo con el agua.
```

### 3 — Sócrates traslada el foco a la ética

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["socrates"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sócrates trasladó el foco filosófico de la naturaleza (que preocupaba a los presocráticos) a la ética humana, con la máxima \"conócete a ti mismo\"."

pasos:
  - "Es un cambio de eje central en la historia de la filosofía griega."

explicacion: |
  Verdadero: es el aporte histórico central atribuido a Sócrates.
```

### 4 — El mundo de las Ideas de Platón

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["platon"]

variables:
  n: uno_de([1, 1])

respuesta: "Platón"
tipo: completar

enunciado: "El filósofo griego que propuso el \"mundo de las Ideas\" se llama..."

pasos:
  - "Discípulo de Sócrates, referente clásico de la filosofía griega."

explicacion: |
  Platón es el autor asociado a la teoría de las Ideas.
```

### 5 — Aristóteles sistematizó varias ramas de filosofía

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["aristoteles"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aristóteles sistematizó lógica, ética y metafísica, entre otras ramas de la filosofía."

pasos:
  - "Ver `../ser-ontologia/`: sus categorías del ser (sustancia/accidente) ya se estudiaron ahí."

explicacion: |
  Verdadero: Aristóteles es referente central de varias ramas
  filosóficas distintas.
```

### 6 — La filosofía medieval y la teología

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["medieval"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la etapa medieval, la filosofía se entrelaza con la teología cristiana; Santo Tomás de Aquino buscó conciliar fe y razón."

pasos:
  - "Es la característica central de este largo período histórico de la filosofía."

explicacion: |
  Verdadero: es la marca distintiva de la filosofía medieval.
```

### 7 — Racionalismo vs. empirismo en la etapa moderna

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["moderna", "racionalismo", "empirismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la etapa moderna surge el debate entre racionalismo (Descartes) y empirismo (Locke, Hume), ya estudiado en `../epistemologia/`."

pasos:
  - "Kant, más adelante, intenta sintetizar ambas tradiciones."

explicacion: |
  Verdadero: es el debate central de la filosofía moderna en
  epistemología.
```

### 8 — El existencialismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["existencialismo"]

variables:
  n: uno_de([1, 1])

respuesta: "existencialismo"
tipo: completar

enunciado: "La corriente del siglo XX (Sartre, Camus) que sostiene que la existencia precede a la esencia, entendiendo la existencia humana como libertad radical, se llama..."

pasos:
  - "Es una corriente central de la filosofía contemporánea."

explicacion: |
  El existencialismo enfatiza la libertad y responsabilidad humanas
  sin una esencia predeterminada.
```

### 9 — "La existencia precede a la esencia"

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["existencialismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La frase \"la existencia precede a la esencia\" es central del existencialismo: el ser humano existe primero, y se define a sí mismo después, sin una naturaleza fija predeterminada."

pasos:
  - "Es la formulación más citada de esta corriente filosófica."

explicacion: |
  Verdadero: es la frase clave asociada al existencialismo de Sartre.
```

### 10 — Marx y el materialismo histórico

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["marx"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Marx, filósofo del siglo XIX, desarrolló el materialismo histórico como análisis de la historia."

pasos:
  - "Es un autor central de la etapa contemporánea de la filosofía."

explicacion: |
  Verdadero: Marx es referente central del pensamiento contemporáneo.
```

### 11 — Identificar el liberalismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["liberalismo"]

variables:
  n: uno_de([1, 1])

respuesta: "liberalismo"
tipo: mc
opciones_explicitas: ["liberalismo", "socialismo", "conservadurismo"]

enunciado: "La corriente político-económica que prioriza la libertad individual y la propiedad privada, con mínima intervención estatal en los mercados, se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El liberalismo prioriza libertad individual y propiedad privada.
```

### 12 — Identificar el socialismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["socialismo"]

variables:
  n: uno_de([1, 1])

respuesta: "socialismo"
tipo: mc
opciones_explicitas: ["liberalismo", "socialismo", "anarquismo"]

enunciado: "La corriente político-económica que prioriza la igualdad económica y la propiedad colectiva o estatal de los medios de producción se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El socialismo prioriza igualdad económica y propiedad colectiva o
  estatal.
```

### 13 — Identificar el marxismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["marxismo"]

variables:
  n: uno_de([1, 1])

respuesta: "marxismo"
tipo: mc
opciones_explicitas: ["marxismo", "conservadurismo", "liberalismo"]

enunciado: "La corriente que analiza la historia como lucha de clases, sosteniendo que el capitalismo genera contradicciones que llevarían a su superación, se llama..."

pasos:
  - "Se relaciona directamente con Marx, ya mencionado en la etapa contemporánea de la historia de la filosofía."

explicacion: |
  El marxismo tiene su propio análisis histórico basado en la lucha
  de clases.
```

### 14 — Identificar el conservadurismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["conservadurismo"]

variables:
  n: uno_de([1, 1])

respuesta: "conservadurismo"
tipo: mc
opciones_explicitas: ["conservadurismo", "anarquismo", "socialismo"]

enunciado: "La corriente político-económica que prioriza la continuidad de instituciones y tradiciones existentes, con cambio gradual frente al cambio radical, se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El conservadurismo enfatiza la continuidad institucional y el
  cambio gradual.
```

### 15 — Identificar el anarquismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["anarquismo"]

variables:
  n: uno_de([1, 1])

respuesta: "anarquismo"
tipo: mc
opciones_explicitas: ["anarquismo", "liberalismo", "marxismo"]

enunciado: "La corriente que rechaza toda forma de autoridad jerárquica impuesta, incluido el Estado, a favor de organización voluntaria, se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El anarquismo rechaza específicamente la autoridad jerárquica
  impuesta, incluyendo al Estado.
```

### 16 — Neutralidad al presentar corrientes político-económicas

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las corrientes político-económicas se presentan con el mismo criterio de neutralidad que las corrientes económicas del Tronco 1: identificar qué sostiene cada una, nunca evaluar cuál tiene razón."

pasos:
  - "Ver `../../economia/`: es el mismo principio ya aplicado en esa materia."

explicacion: |
  Verdadero: es el criterio de neutralidad no negociable en este
  tema.
```

### 17 — Orden cronológico de las grandes etapas

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["historia_de_la_filosofia", "cronologia"]

enunciado: "Ordená cronológicamente las grandes etapas de la historia de la filosofía occidental mencionadas en la teoría."
tipo: ordenar
opciones_explicitas:
  - "Presocráticos"
  - "Clásicos (Sócrates, Platón, Aristóteles)"
  - "Medieval"
  - "Moderna"
  - "Contemporánea (incluido el existencialismo)"
respuesta_orden: ["Presocráticos", "Clásicos (Sócrates, Platón, Aristóteles)", "Medieval", "Moderna", "Contemporánea (incluido el existencialismo)"]
explicacion: |
  El orden sigue la secuencia histórica de las grandes etapas de la
  filosofía occidental descrita en la teoría.
```

### 18 — Nietzsche y la crítica de la moral tradicional

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["nietzsche"]

variables:
  n: uno_de([1, 1])

respuesta: "Nietzsche"
tipo: completar

enunciado: "El filósofo del siglo XIX conocido por su crítica de la moral tradicional se apellida..."

pasos:
  - "Es un autor central de la etapa contemporánea de la filosofía, junto a Marx."

explicacion: |
  Nietzsche es referente central de la crítica filosófica a la moral
  tradicional en el siglo XIX.
```

### 19 — Sartre y Camus como referentes del existencialismo

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["existencialismo", "autores"]

variables:
  autores: ["Sartre", "Camus"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "{autores[idx]} es considerado un referente clásico del existencialismo del siglo XX."

pasos:
  - "Ambos autores son referentes de esta corriente filosófica contemporánea."

explicacion: |
  Verdadero: Sartre y Camus son los referentes clásicos más citados
  del existencialismo.
```

### 20 — Historia de la filosofía como contexto de las otras ramas

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["historia_de_la_filosofia", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este panorama histórico da contexto a otras ramas de Filosofía ya estudiadas: por ejemplo, racionalismo y empirismo (etapa moderna) ya aparecieron en `../epistemologia/`, y las categorías de Aristóteles ya aparecieron en `../ser-ontologia/`."

pasos:
  - "Conecta las piezas sueltas de otros temas dentro de una línea de tiempo coherente."

explicacion: |
  Verdadero: es la función de síntesis histórica que cumple este
  tema respecto de los demás ya vistos en Filosofía.
```
