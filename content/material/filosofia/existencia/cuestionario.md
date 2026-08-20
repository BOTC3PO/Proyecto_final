# Filosofía — Existencia (cuestionario, 20 preguntas VBLang)

> Tema: `FI4b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre ser y existencia

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia", "ser_ontologia", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras la ontología pregunta qué significa \"ser\" en general, la existencia pregunta específicamente qué significa que ALGO PARTICULAR exista."

pasos:
  - "Ver `../ser-ontologia/`: es una pregunta más específica que la pregunta general del ser."

explicacion: |
  Verdadero: es la diferencia central entre estos dos temas hermanos.
```

### 2 — La paradoja de negar la existencia

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["paradoja_negacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para decir \"los unicornios no existen\", parece que primero hay que pensar en los unicornios (tener la idea) para poder negar su existencia — una paradoja clásica de la filosofía de la existencia."

pasos:
  - "¿Cómo se puede hablar significativamente de algo que, según la propia afirmación, no existe?"

explicacion: |
  Verdadero: es un problema filosófico clásico sobre el lenguaje y la
  negación de existencia.
```

### 3 — Kant: existir no es una propiedad más

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "existencia_como_predicado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Kant argumentó que \"existir\" no es una propiedad más de una cosa, como \"ser rojo\" o \"pesar 5 kilos\", sino un tipo distinto de afirmación."

pasos:
  - "Decir \"el perro existe\" no agrega una característica al concepto de perro, a diferencia de \"el perro es marrón\"."

explicacion: |
  Verdadero: es el argumento central de Kant sobre la existencia
  como predicado.
```

### 4 — Para qué se usó el argumento de Kant

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "argumento_ontologico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El argumento de Kant sobre la existencia se usó históricamente para criticar el \"argumento ontológico\" que intentaba deducir la existencia de Dios sólo a partir de su definición."

pasos:
  - "Si existir no es una propiedad que se pueda incluir en una definición, no se puede deducir la existencia de algo únicamente definiéndolo."

explicacion: |
  Verdadero: es la aplicación histórica más famosa de este argumento
  filosófico.
```

### 5 — Diferencia entre existencia posible y existencia real

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible", "existencia_real"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un unicornio es un concepto coherente (podría existir), aunque no exista de hecho; un cuadrado redondo ni siquiera podría existir, porque es contradictorio en sí mismo."

pasos:
  - "La coherencia interna de un concepto es distinta de que ese concepto corresponda a algo real."

explicacion: |
  Verdadero: es la distinción entre existencia posible (coherente
  pero no real) y existencia real (efectivamente en el mundo).
```

### 6 — No toda idea coherente corresponde a algo real

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible", "existencia_real"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un concepto sea coherente (sin contradicción interna) no garantiza que corresponda a algo que efectivamente existe en el mundo."

pasos:
  - "El unicornio es coherente pero no real; un cuadrado redondo no es ni siquiera coherente."

explicacion: |
  Verdadero: coherencia conceptual y existencia real son dos cosas
  distintas.
```

### 7 — Identificar un concepto contradictorio

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible", "contradiccion"]

variables:
  n: uno_de([1, 1])

respuesta: "un cuadrado redondo"
tipo: mc
opciones_explicitas: ["un cuadrado redondo", "un unicornio", "un dragón que escupe fuego"]

enunciado: "¿Cuál de estos conceptos es contradictorio en sí mismo (no podría existir ni siquiera como posibilidad)?"

pasos:
  - "Un cuadrado y un círculo son formas mutuamente excluyentes por definición; los otros dos son coherentes aunque no existan de hecho."

explicacion: |
  Un \"cuadrado redondo\" combina dos propiedades incompatibles por
  definición, a diferencia de un unicornio o un dragón, que son
  coherentes aunque ficticios.
```

### 8 — Presentismo

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["presentismo"]

variables:
  n: uno_de([1, 1])

respuesta: "presentismo"
tipo: mc
opciones_explicitas: ["presentismo", "eternalismo"]

enunciado: "La postura filosófica que sostiene que sólo existe lo presente (el pasado ya no existe, el futuro todavía no) se llama..."

pasos:
  - "Es una de las dos posturas mencionadas sobre existencia y tiempo."

explicacion: |
  El presentismo restringe la existencia real al momento presente.
```

### 9 — Eternalismo

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["eternalismo"]

variables:
  n: uno_de([1, 1])

respuesta: "eternalismo"
tipo: mc
opciones_explicitas: ["presentismo", "eternalismo"]

enunciado: "La postura filosófica que sostiene que pasado, presente y futuro existen todos por igual se llama..."

pasos:
  - "Es la postura opuesta al presentismo respecto de la existencia en el tiempo."

explicacion: |
  El eternalismo no privilegia el presente por sobre el pasado o el
  futuro en cuanto a existencia.
```

### 10 — Presentismo y eternalismo son posturas, no verdades absolutas

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["presentismo", "eternalismo", "neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Presentismo y eternalismo son dos posturas filosóficas distintas sobre existencia y tiempo, sin que ninguna sea \"la correcta\" de forma objetiva y consensuada."

pasos:
  - "Mismo criterio de neutralidad ya aplicado a racionalismo/empirismo en `../epistemologia/`."

explicacion: |
  Verdadero: se describe qué sostiene cada postura, sin evaluar cuál
  es correcta.
```

### 11 — Existencia no es lo mismo que definición

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según el argumento de Kant, se puede probar que algo existe realmente en el mundo con sólo dar una buena definición de ese algo."

pasos:
  - "Kant sostuvo justamente lo contrario: existir no es una propiedad que se pueda deducir sólo de una definición."

explicacion: |
  Falso: es el error que Kant identificó en el argumento ontológico
  de la existencia de Dios.
```

### 12 — Existencia posible de un unicornio

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un unicornio es un concepto coherente (caballo + cuerno, sin contradicción interna), aunque no exista de hecho en el mundo real."

pasos:
  - "Coherencia conceptual no implica existencia real, pero tampoco la excluye de plano."

explicacion: |
  Verdadero: es el ejemplo clásico de \"existencia posible\" sin
  \"existencia real\".
```

### 13 — Decir "el perro es marrón" vs. "el perro existe"

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "existencia_como_predicado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"El perro es marrón\" agrega una característica al concepto de perro; \"el perro existe\" no agrega una característica, sino que afirma que ese concepto se aplica a algo real."

pasos:
  - "Es exactamente la distinción que hace Kant sobre existencia como predicado."

explicacion: |
  Verdadero: es la formulación práctica del argumento kantiano sobre
  la existencia.
```

### 14 — Existencia y tiempo: pregunta relacionada

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia_y_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una pregunta relacionada con la existencia es si algo que existió en el pasado (un dinosaurio) \"existe\" en el mismo sentido que algo que existe ahora."

pasos:
  - "Presentismo y eternalismo son dos respuestas distintas a esta pregunta."

explicacion: |
  Verdadero: es una extensión natural de la pregunta sobre existencia
  aplicada a la dimensión temporal.
```

### 15 — La existencia como pregunta más específica que el ser

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia", "ser_ontologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ontología (ser) pregunta por lo más general posible; la existencia baja un nivel de abstracción y pregunta específicamente por elementos particulares."

pasos:
  - "Es la relación de generalidad/especificidad entre estos dos temas hermanos."

explicacion: |
  Verdadero: existencia es una pregunta más acotada que la pregunta
  general del ser.
```

### 16 — El argumento ontológico intentaba deducir existencia de una definición

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["argumento_ontologico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El \"argumento ontológico\" de la existencia de Dios intentaba deducir que Dios existe realmente sólo a partir de su definición como \"el ser más perfecto posible\"."

pasos:
  - "Kant criticó precisamente esa deducción, mostrando que existir no es una propiedad que se pueda incluir en una definición."

explicacion: |
  Verdadero: es el contexto histórico concreto que originó el debate
  sobre existencia como predicado.
```

### 17 — Existencia real requiere más que coherencia lógica

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia_real"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que algo sea lógicamente posible (sin contradicción) no basta para afirmar que efectivamente existe en el mundo; hace falta algo más que la sola coherencia conceptual."

pasos:
  - "Es la razón por la que \"posible\" y \"real\" son categorías distintas en esta subrama."

explicacion: |
  Verdadero: coherencia lógica es condición necesaria pero no
  suficiente para la existencia real.
```

### 18 — Ordenar el análisis de la existencia de un concepto

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia", "metodo"]

enunciado: "Ordená los pasos para analizar si un concepto es lógicamente posible y si además existe realmente."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el concepto tiene alguna contradicción interna (como \"cuadrado redondo\")"
  - "Si no hay contradicción, concluir que es al menos lógicamente posible"
  - "Buscar evidencia de que ese concepto se aplica a algo real en el mundo"
  - "Concluir si tiene sólo existencia posible o también existencia real"
respuesta_orden: ["Revisar si el concepto tiene alguna contradicción interna (como \"cuadrado redondo\")", "Si no hay contradicción, concluir que es al menos lógicamente posible", "Buscar evidencia de que ese concepto se aplica a algo real en el mundo", "Concluir si tiene sólo existencia posible o también existencia real"]
explicacion: |
  El análisis va de la coherencia lógica interna a la evidencia de
  existencia real en el mundo.
```

### 19 — Existencia como parte de la subrama de metafísica

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existencia completa, junto con Ser y Realidad, la subrama de las tres preguntas metafísicas básicas de este mapa."

pasos:
  - "Ver `../ser-ontologia/` y `../realidad/`: los tres nodos hermanos exploran ángulos distintos de la misma familia de preguntas."

explicacion: |
  Verdadero: es la síntesis de la subrama completa de metafísica
  básica.
```

### 20 — Aplicación: distinguir lo imaginado de lo real

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La distinción entre existencia posible y existencia real da un vocabulario útil para razonar sobre la diferencia entre imaginar algo coherente y afirmar que ese algo realmente está en el mundo."

pasos:
  - "Es la aplicación práctica de esta distinción filosófica fuera del contexto puramente teórico."

explicacion: |
  Verdadero: es la aplicación concreta de la distinción posible/real
  estudiada en este tema.
```
