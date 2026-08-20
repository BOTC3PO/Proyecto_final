# Filosofía — Lógica proposicional (cuestionario, 20 preguntas VBLang)

> Tema: `FI1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una proposición

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["proposicion", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una proposición es un enunciado que puede ser verdadero o falso, sin ambigüedad."

pasos:
  - "\"Llueve\" es una proposición; \"¿Llueve?\" no lo es, porque una pregunta no tiene valor de verdad."

explicacion: |
  Verdadero: tener un valor de verdad definido es lo que distingue a
  una proposición de otros tipos de enunciado.
```

### 2 — Identificar qué es y qué no es una proposición

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["proposicion", "reconocimiento"]

variables:
  frases: ["Llueve en Buenos Aires", "¿Llueve en Buenos Aires?", "¡Qué lluvia!"]
  tipos: ["proposición", "no es proposición", "no es proposición"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["proposición", "no es proposición"]

enunciado: "\"{frases[idx]}\" es..."

pasos:
  - "Sólo un enunciado afirmativo con valor de verdad claro es proposición; preguntas y exclamaciones no lo son."

explicacion: |
  Preguntas y exclamaciones no tienen valor de verdad, por lo tanto
  no son proposiciones lógicas.
```

### 3 — Identificar la negación

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["negacion"]

variables:
  n: uno_de([1, 1])

respuesta: "¬p"
tipo: completar

enunciado: "Si p es \"llueve\", ¿cómo se representa \"no llueve\" en notación lógica?"

pasos:
  - "La negación invierte el valor de verdad de la proposición original."

explicacion: |
  ¬p es la notación estándar para \"no p\".
```

### 4 — Valor de verdad de la negación

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["negacion", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es verdadero, ¿cuál es el valor de verdad de ¬p (\"no p\")?"

pasos:
  - "La negación siempre invierte el valor de verdad de la proposición original."

explicacion: |
  Si p es verdadero, su negación ¬p es necesariamente falsa.
```

### 5 — Cuándo es verdadera la conjunción

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["conjuncion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La conjunción (p ∧ q, \"p y q\") es verdadera sólo si ambas proposiciones son verdaderas."

pasos:
  - "Si al menos una de las dos es falsa, la conjunción completa es falsa."

explicacion: |
  Verdadero: es la regla básica de la conjunción lógica.
```

### 6 — Cuándo es verdadera la disyunción

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["disyuncion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La disyunción (p ∨ q, \"p o q\") es verdadera si al menos una de las dos proposiciones es verdadera."

pasos:
  - "Sólo es falsa cuando AMBAS son falsas: es la disyunción inclusiva, la más común en lógica."

explicacion: |
  Verdadero: es la regla básica de la disyunción inclusiva.
```

### 7 — Cuándo es falso el condicional

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["condicional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El condicional (p → q, \"si p entonces q\") es falso sólo cuando p es verdadera y q es falsa."

pasos:
  - "En cualquier otro caso (incluido p falso), el condicional se considera verdadero."

explicacion: |
  Verdadero: es la única combinación que hace falso al condicional.
```

### 8 — El condicional con antecedente falso

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["condicional", "caso_sorprendente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un condicional con antecedente falso (p falso) es siempre verdadero, sin importar el valor de verdad del consecuente q."

pasos:
  - "Es el caso que más sorprende al principio: \"si p entonces q\" con p falso no dice nada sobre q, y por convención lógica se considera verdadero."

explicacion: |
  Verdadero: esta convención (a veces llamada \"vacuidad\") es central
  para entender bien la tabla de verdad del condicional.
```

### 9 — Cuándo es verdadero el bicondicional

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["bicondicional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El bicondicional (p ↔ q, \"p si y sólo si q\") es verdadero cuando ambas proposiciones tienen el mismo valor de verdad (las dos verdaderas o las dos falsas)."

pasos:
  - "Es falso cuando los valores de verdad de p y q difieren entre sí."

explicacion: |
  Verdadero: el bicondicional exige coincidencia exacta de valor de
  verdad entre ambas proposiciones.
```

### 10 — Cantidad de filas en una tabla de verdad de 2 proposiciones

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["tablas_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "4"
tipo: completar

enunciado: "Una tabla de verdad con 2 proposiciones (p y q) tiene cuántas filas (combinaciones posibles de verdad/falsedad)?"

pasos:
  - "Son 2² = 4 combinaciones posibles con 2 proposiciones."

explicacion: |
  Con n proposiciones, la tabla de verdad tiene 2^n filas.
```

### 11 — Cantidad de filas en una tabla de verdad de 3 proposiciones

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["tablas_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "8"
tipo: completar

enunciado: "Una tabla de verdad con 3 proposiciones (p, q y r) tiene cuántas filas (combinaciones posibles de verdad/falsedad)?"

pasos:
  - "Son 2³ = 8 combinaciones posibles con 3 proposiciones."

explicacion: |
  Con n proposiciones, la tabla de verdad tiene 2^n filas — el mismo
  patrón que con 2 proposiciones, ahora con n=3.
```

### 12 — Completar una fila de la tabla de verdad de la conjunción

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["conjuncion", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es verdadero y q es falso, ¿cuál es el valor de verdad de p ∧ q (conjunción)?"

pasos:
  - "La conjunción exige que AMBAS proposiciones sean verdaderas."

explicacion: |
  Como q es falso, la conjunción completa es falsa, aunque p sea
  verdadero.
```

### 13 — Completar una fila de la tabla de verdad de la disyunción

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["disyuncion", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es verdadero y q es falso, ¿cuál es el valor de verdad de p ∨ q (disyunción)?"

pasos:
  - "La disyunción sólo necesita que AL MENOS UNA sea verdadera."

explicacion: |
  Como p es verdadero, la disyunción completa es verdadera, sin
  importar el valor de q.
```

### 14 — Completar una fila de la tabla de verdad del condicional

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["condicional", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es falso y q es verdadero, ¿cuál es el valor de verdad de p → q (condicional)?"

pasos:
  - "El condicional sólo es falso cuando p es verdadero y q es falso; en cualquier otro caso es verdadero."

explicacion: |
  Con p falso, el condicional es verdadero sin importar q, siguiendo
  la regla del condicional.
```

### 15 — El condicional y la pendiente resbaladiza

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["condicional", "falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La falacia de pendiente resbaladiza (ver `../../lengua/detectar-falacias/`) puede pensarse como afirmar un condicional (\"si p entonces q\") sin justificar por qué p realmente lleva a q."

pasos:
  - "La lógica proposicional formaliza la estructura de \"si...entonces\" que esa falacia usa sin sustento real."

explicacion: |
  Verdadero: es la conexión directa entre el tema de Lengua y su
  formalización en Filosofía.
```

### 16 — Distinguir conjunción de disyunción

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["conjuncion", "disyuncion", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La conjunción exige que ambas proposiciones sean verdaderas; la disyunción se conforma con que al menos una lo sea."

pasos:
  - "Es la diferencia central entre \"y\" (∧) y \"o\" (∨) en lógica."

explicacion: |
  Verdadero: conjunción es más exigente (ambas) que disyunción (al
  menos una).
```

### 17 — Notación de las proposiciones

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["notacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En lógica proposicional, las proposiciones se representan con letras minúsculas como p, q, r."

pasos:
  - "Es la convención de notación estándar usada en las tablas de verdad."

explicacion: |
  Verdadero: es la notación básica que se usa a lo largo de todo el
  tema.
```

### 18 — Ordenar el proceso para construir una tabla de verdad

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["tablas_de_verdad", "metodo"]

enunciado: "Ordená los pasos para construir la tabla de verdad de una expresión con dos proposiciones y un conector."
tipo: ordenar
opciones_explicitas:
  - "Identificar las proposiciones involucradas (p, q) y el conector usado"
  - "Listar todas las combinaciones posibles de verdad/falsedad (4 filas para 2 proposiciones)"
  - "Aplicar la regla del conector a cada combinación"
  - "Completar la columna de resultado para cada fila"
respuesta_orden: ["Identificar las proposiciones involucradas (p, q) y el conector usado", "Listar todas las combinaciones posibles de verdad/falsedad (4 filas para 2 proposiciones)", "Aplicar la regla del conector a cada combinación", "Completar la columna de resultado para cada fila"]
explicacion: |
  El proceso va de identificar los elementos a listar sistemáticamente
  todas las combinaciones y aplicar la regla correspondiente.
```

### 19 — Lógica proposicional como prerrequisito de validez de un razonamiento

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["logica_proposicional", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de evaluar si una cadena de proposiciones conectadas lógicamente es válida, hace falta dominar qué significa cada conector y cómo se comporta en una tabla de verdad."

pasos:
  - "Ver `../validez-de-un-razonamiento/`: es el tema siguiente de la cadena de Filosofía."

explicacion: |
  Verdadero: por eso lógica proposicional es prerrequisito directo de
  validez de un razonamiento.
```

### 20 — Aplicación: formalizar un argumento cotidiano

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["logica_proposicional", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El argumento \"si estudio, apruebo; estudié; por lo tanto, apruebo\" se puede formalizar con lógica proposicional como: p → q, p, por lo tanto q."

pasos:
  - "Cada parte del argumento cotidiano corresponde a una proposición o conector lógico ya estudiado."

explicacion: |
  Verdadero: formalizar argumentos del lenguaje cotidiano en notación
  lógica es la aplicación práctica central de este tema.
```
