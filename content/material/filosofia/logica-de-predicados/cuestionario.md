# Filosofía — Lógica de predicados (cuestionario, 20 preguntas VBLang)

> Tema: `FI2B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre proposición y predicado

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["predicado", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un predicado (\"... es mortal\") separa una propiedad de un sujeto variable (x), a diferencia de una proposición fija que ya está completa (\"Sócrates es mortal\")."

pasos:
  - "Ver `../logica-proposicional/`: ahí las proposiciones eran fijas y completas, sin variable."

explicacion: |
  Verdadero: el predicado necesita una variable que se complete con
  un elemento concreto para volverse una proposición.
```

### 2 — Leer el cuantificador universal

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "basico"
  tags: ["cuantificador_universal"]

variables:
  n: uno_de([1, 1])

respuesta: "para todo x, se cumple P(x)"
tipo: mc
opciones_explicitas: ["para todo x, se cumple P(x)", "existe un x tal que se cumple P(x)"]

enunciado: "\"∀x P(x)\" se lee..."

pasos:
  - "El símbolo ∀ es el cuantificador universal."

explicacion: |
  ∀x P(x) afirma que la propiedad P vale para todos los elementos del
  conjunto considerado.
```

### 3 — Leer el cuantificador existencial

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "basico"
  tags: ["cuantificador_existencial"]

variables:
  n: uno_de([1, 1])

respuesta: "existe un x tal que se cumple P(x)"
tipo: mc
opciones_explicitas: ["para todo x, se cumple P(x)", "existe un x tal que se cumple P(x)"]

enunciado: "\"∃x P(x)\" se lee..."

pasos:
  - "El símbolo ∃ es el cuantificador existencial."

explicacion: |
  ∃x P(x) afirma que la propiedad P vale para al menos un elemento
  del conjunto, no necesariamente todos.
```

### 4 — Formalizar "todo humano es mortal"

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["cuantificador_universal", "formalizacion"]

variables:
  n: uno_de([1, 1])

respuesta: "∀"
tipo: completar

enunciado: "Para formalizar \"todo humano es mortal\" se usa el cuantificador..."

pasos:
  - "\"Todo\" corresponde al cuantificador universal."

explicacion: |
  \"Todo\" se traduce siempre al cuantificador universal ∀.
```

### 5 — Formalizar "existe un filósofo humano"

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["cuantificador_existencial", "formalizacion"]

variables:
  n: uno_de([1, 1])

respuesta: "∃"
tipo: completar

enunciado: "Para formalizar \"existe al menos un humano que es filósofo\" se usa el cuantificador..."

pasos:
  - "\"Existe al menos uno\" corresponde al cuantificador existencial."

explicacion: |
  \"Existe\" se traduce siempre al cuantificador existencial ∃.
```

### 6 — Negación del cuantificador universal

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["negacion", "cuantificadores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Negar \"para todo x se cumple P(x)\" equivale a decir \"existe al menos un x que NO cumple P(x)\"."

pasos:
  - "¬(∀x P(x)) equivale a ∃x ¬P(x): la regla clave que invierte el cuantificador al negar."

explicacion: |
  Verdadero: es la regla de negación de cuantificadores.
```

### 7 — Negación del cuantificador existencial

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["negacion", "cuantificadores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Negar \"existe un x que cumple P(x)\" equivale a decir \"para todo x, NO se cumple P(x)\" (ninguno cumple)."

pasos:
  - "¬(∃x P(x)) equivale a ∀x ¬P(x): la misma regla, aplicada en la otra dirección."

explicacion: |
  Verdadero: negar un existencial produce un universal negado
  (ninguno cumple la propiedad).
```

### 8 — Identificar la premisa universal del silogismo clásico

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["deduccion_formal", "silogismo"]

variables:
  n: uno_de([1, 1])

respuesta: "Todo humano es mortal"
tipo: completar

enunciado: "En el silogismo clásico \"Todo humano es mortal. Sócrates es humano. Por lo tanto, Sócrates es mortal\", ¿cuál es la premisa universal (cuantificada con ∀)?"

pasos:
  - "La premisa universal es la que habla de TODOS los elementos de una categoría, no de un caso particular."

explicacion: |
  \"Todo humano es mortal\" es la premisa cuantificada universalmente
  del silogismo.
```

### 9 — Identificar la premisa particular del silogismo clásico

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["deduccion_formal", "silogismo"]

variables:
  n: uno_de([1, 1])

respuesta: "Sócrates es humano"
tipo: completar

enunciado: "En el mismo silogismo, ¿cuál es la premisa que aplica la regla general a un caso particular?"

pasos:
  - "Esta premisa identifica a Sócrates como elemento concreto que cae dentro de la categoría \"humano\"."

explicacion: |
  \"Sócrates es humano\" conecta el caso particular con la premisa
  universal, permitiendo la deducción de la conclusión.
```

### 10 — El silogismo clásico formaliza el modus ponens

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["deduccion_formal", "modus_ponens"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El silogismo \"Todo humano es mortal. Sócrates es humano. Por lo tanto, Sócrates es mortal\" es una versión con predicados y cuantificadores del modus ponens ya visto en `../validez-de-un-razonamiento/`."

pasos:
  - "La estructura general \"si p entonces q, p, por lo tanto q\" se aplica acá a un caso particular dentro de una categoría cuantificada."

explicacion: |
  Verdadero: es la misma forma válida, ahora con la capacidad
  adicional de razonar sobre categorías completas de elementos.
```

### 11 — Por qué la lógica de predicados es más potente

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["logica_de_predicados", "logica_proposicional", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La lógica proposicional no puede representar la estructura interna de \"todo humano es mortal\" (que habla de TODOS los elementos de un conjunto); sólo puede tratarla como una proposición fija sin analizar esa estructura."

pasos:
  - "Ver `../logica-proposicional/`: ahí \"todo humano es mortal\" sería simplemente una letra \"p\", sin poder deducir nada sobre un caso particular como Sócrates."

explicacion: |
  Verdadero: es la razón concreta por la que la lógica de predicados
  extiende y supera las capacidades de la lógica proposicional.
```

### 12 — Formalizar un enunciado con predicado y cuantificador

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["formalizacion", "practica"]

variables:
  frases: ["Todos los perros son animales", "Algunos estudiantes trabajan"]
  formalizaciones: ["∀x (x es perro → x es animal)", "∃x (x es estudiante ∧ x trabaja)"]
  idx: uno_de([0, 1])

respuesta: formalizaciones[idx]
tipo: mc
opciones_explicitas: ["∀x (x es perro → x es animal)", "∃x (x es estudiante ∧ x trabaja)", "∀x (x es animal → x es perro)"]

enunciado: "¿Cuál es la formalización correcta de \"{frases[idx]}\"?"

pasos:
  - "\"Todos\" usa ∀ con implicación; \"algunos\" usa ∃ con conjunción."

explicacion: |
  \"Todos los X son Y\" se formaliza con ∀ e implicación; \"algunos X
  son Y\" se formaliza con ∃ y conjunción — no son intercambiables.
```

### 13 — "Todos" usa implicación, "algunos" usa conjunción

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["formalizacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al formalizar \"todos los X son Y\" se usa una implicación (→) dentro del cuantificador universal; al formalizar \"algunos X son Y\" se usa una conjunción (∧) dentro del cuantificador existencial."

pasos:
  - "∀x (x es X → x es Y) vs. ∃x (x es X ∧ x es Y): son estructuras distintas, no intercambiables."

explicacion: |
  Verdadero: es un detalle técnico importante al formalizar
  enunciados cuantificados correctamente.
```

### 14 — Elemento del conjunto que satisface el predicado

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["predicado", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"P(x) = x es mortal\", reemplazar x por \"Sócrates\" convierte el predicado en la proposición completa \"Sócrates es mortal\"."

pasos:
  - "El predicado se \"completa\" al asignarle un valor concreto a la variable."

explicacion: |
  Verdadero: es el mecanismo básico por el cual un predicado se
  convierte en una proposición evaluable como verdadera o falsa.
```

### 15 — Deducción formal no es lo mismo que opinión

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["deduccion_formal", "rigor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La deducción formal sigue reglas estrictas de inferencia (como el modus ponens aplicado a predicados), no es una opinión sobre qué conclusión \"parece\" razonable."

pasos:
  - "Si las premisas son verdaderas y la estructura es válida, la conclusión se sigue necesariamente, sin depender del juicio personal."

explicacion: |
  Verdadero: el rigor formal es lo que distingue a la deducción de
  una simple inferencia intuitiva.
```

### 16 — Verificar la validez de un silogismo con distinto sujeto

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["deduccion_formal", "practica"]

variables:
  sujetos: ["Platón", "Aristóteles"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "El silogismo \"Todo humano es mortal. {sujetos[idx]} es humano. Por lo tanto, {sujetos[idx]} es mortal\" es válido, sin importar de qué persona concreta se trate."

pasos:
  - "La validez depende de la estructura (∀x, x es humano → x es mortal, más el caso particular), no de qué nombre propio se use."

explicacion: |
  Verdadero: la validez formal aplica a cualquier elemento que
  encaje en la categoría cuantificada, no sólo a un ejemplo puntual.
```

### 17 — Cuantificadores y conjuntos vacíos

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["cuantificador_universal", "casos_limite"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Todos los unicornios tienen cuerno\" (∀x, x es unicornio → x tiene cuerno) se considera verdadero por convención lógica, aunque no exista ningún unicornio real (conjunto vacío)."

pasos:
  - "Es el mismo caso del condicional con antecedente falso (ver `../logica-proposicional/`): si no hay ningún x que sea unicornio, la implicación se cumple \"vacíamente\" para todos ellos."

explicacion: |
  Verdadero: es un caso límite avanzado que conecta con la
  \"vacuidad\" del condicional ya vista.
```

### 18 — Ordenar el proceso para formalizar un enunciado cuantificado

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "intermedio"
  tags: ["logica_de_predicados", "metodo"]

enunciado: "Ordená los pasos para formalizar un enunciado del lenguaje natural con predicados y cuantificadores."
tipo: ordenar
opciones_explicitas:
  - "Identificar el predicado (la propiedad) del enunciado"
  - "Determinar si se habla de TODOS los elementos o de AL MENOS UNO"
  - "Elegir el cuantificador correspondiente (∀ o ∃)"
  - "Escribir la fórmula completa con la estructura correcta (implicación para ∀, conjunción para ∃)"
respuesta_orden: ["Identificar el predicado (la propiedad) del enunciado", "Determinar si se habla de TODOS los elementos o de AL MENOS UNO", "Elegir el cuantificador correspondiente (∀ o ∃)", "Escribir la fórmula completa con la estructura correcta (implicación para ∀, conjunción para ∃)"]
explicacion: |
  El proceso va de identificar la propiedad a elegir el cuantificador
  correcto y construir la fórmula con la estructura interna
  apropiada.
```

### 19 — Lógica de predicados como cierre del salto de nivel

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["logica_de_predicados", "algebra_booleana"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema cierra, del lado de Filosofía, el mismo salto de nivel que Álgebra booleana deja pendiente del lado de Informática: booleana opera con proposiciones fijas, predicados opera con proposiciones que dependen de una variable."

pasos:
  - "Ver `../../informatica/algebra-booleana/`: es el mismo tipo de extensión, en dos materias distintas."

explicacion: |
  Verdadero: es la conexión explícita señalada en el agregado v2.6
  del MAPA.
```

### 20 — Aplicación: la base de las demostraciones matemáticas

```
metadata:
  materia: "filosofia"
  tema: "logica_de_predicados"
  nivel: "avanzado"
  tags: ["logica_de_predicados", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La lógica de predicados es la base formal que permite escribir demostraciones matemáticas rigurosas, donde se afirma algo sobre \"todo número natural\" o \"existe un número que cumple tal condición\"."

pasos:
  - "Ese mismo lenguaje de ∀/∃ es el que usan las demostraciones matemáticas formales en cualquier área."

explicacion: |
  Verdadero: es la aplicación práctica más directa de este tema fuera
  de la filosofía pura.
```
