# Filosofía — Validez de un razonamiento (cuestionario, 20 preguntas VBLang)

> Tema: `FI2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de razonamiento válido

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "basico"
  tags: ["validez", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un razonamiento es válido cuando su conclusión se sigue necesariamente de las premisas: si las premisas son verdaderas, la conclusión tiene que ser verdadera."

pasos:
  - "La validez es una propiedad de la ESTRUCTURA del razonamiento, no de si las premisas son ciertas en la realidad."

explicacion: |
  Verdadero: es la definición central de validez lógica.
```

### 2 — Validez no depende de que las premisas sean verdaderas

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "intermedio"
  tags: ["validez", "premisas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Todos los gatos vuelan. Firulais es un gato. Por lo tanto, Firulais vuela\" es un razonamiento válido, aunque su primera premisa sea falsa."

pasos:
  - "La conclusión se sigue necesariamente de las premisas dadas, sin importar si esas premisas son ciertas en el mundo real."

explicacion: |
  Verdadero: es el ejemplo clásico para mostrar que validez y verdad
  de las premisas son cosas distintas.
```

### 3 — Un razonamiento inválido puede tener conclusión verdadera

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "conclusion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un razonamiento puede ser inválido (la conclusión no se sigue necesariamente de las premisas) aunque su conclusión resulte ser verdadera por otra razón."

pasos:
  - "La conclusión \"llegó bien\" por casualidad, no porque la estructura del razonamiento la garantizara."

explicacion: |
  Verdadero: la verdad de la conclusión no basta para garantizar que
  el razonamiento que la produjo sea válido.
```

### 4 — Identificar modus ponens

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "intermedio"
  tags: ["modus_ponens"]

variables:
  n: uno_de([1, 1])

respuesta: "modus ponens"
tipo: mc
opciones_explicitas: ["modus ponens", "modus tollens", "afirmación del consecuente"]

enunciado: "\"Si estudio, apruebo. Estudié. Por lo tanto, apruebo.\" es un ejemplo de..."

pasos:
  - "Afirma el antecedente (p) del condicional para concluir el consecuente (q): es la forma válida más básica."

explicacion: |
  El modus ponens sigue el patrón p → q, p, por lo tanto q.
```

### 5 — Identificar modus tollens

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "intermedio"
  tags: ["modus_tollens"]

variables:
  n: uno_de([1, 1])

respuesta: "modus tollens"
tipo: mc
opciones_explicitas: ["modus ponens", "modus tollens", "negación del antecedente"]

enunciado: "\"Si estudio, apruebo. No aprobé. Por lo tanto, no estudié.\" es un ejemplo de..."

pasos:
  - "Niega el consecuente (¬q) del condicional para concluir la negación del antecedente (¬p): también es válido."

explicacion: |
  El modus tollens sigue el patrón p → q, ¬q, por lo tanto ¬p.
```

### 6 — Estructura del modus ponens

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "basico"
  tags: ["modus_ponens", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El modus ponens tiene la estructura: premisa 1 (p → q), premisa 2 (p), conclusión (q)."

pasos:
  - "Ver `../logica-proposicional/`: es exactamente la estructura del condicional afirmando el antecedente."

explicacion: |
  Verdadero: es la forma válida más básica y más común de
  razonamiento.
```

### 7 — Identificar afirmación del consecuente (falacia formal)

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["afirmacion_consecuente"]

variables:
  n: uno_de([1, 1])

respuesta: "afirmación del consecuente"
tipo: mc
opciones_explicitas: ["afirmación del consecuente", "modus ponens", "modus tollens"]

enunciado: "\"Si llueve, la calle está mojada. La calle está mojada. Por lo tanto, llueve.\" es un ejemplo de..."

pasos:
  - "Afirma el consecuente (q) para concluir el antecedente (p): esto NO es válido, la calle puede estar mojada por otra razón."

explicacion: |
  La afirmación del consecuente es una falacia formal, parecida al
  modus ponens pero inválida.
```

### 8 — Identificar negación del antecedente (falacia formal)

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["negacion_antecedente"]

variables:
  n: uno_de([1, 1])

respuesta: "negación del antecedente"
tipo: mc
opciones_explicitas: ["negación del antecedente", "modus tollens", "modus ponens"]

enunciado: "\"Si llueve, la calle está mojada. No llueve. Por lo tanto, la calle no está mojada.\" es un ejemplo de..."

pasos:
  - "Niega el antecedente (¬p) para concluir la negación del consecuente (¬q): esto NO es válido, hay otras causas posibles."

explicacion: |
  La negación del antecedente es una falacia formal, parecida al
  modus tollens pero inválida.
```

### 9 — Por qué la afirmación del consecuente es inválida

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["afirmacion_consecuente", "invalidez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La afirmación del consecuente es inválida porque puede haber otras causas posibles del consecuente, además del antecedente mencionado."

pasos:
  - "La calle puede estar mojada porque llovió, o porque pasó un camión regando: el condicional no dice que llover sea la ÚNICA causa posible."

explicacion: |
  Verdadero: es la razón concreta por la que esta forma parecida al
  modus ponens no es válida.
```

### 10 — Cómo verificar validez con tablas de verdad

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "tablas_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un razonamiento es válido si no existe ninguna combinación de valores de verdad donde todas las premisas sean verdaderas y la conclusión sea falsa."

pasos:
  - "Ver `../logica-proposicional/`: se puede chequear construyendo la tabla de verdad completa y revisando esa fila específica."

explicacion: |
  Verdadero: es el método formal para verificar validez usando
  tablas de verdad.
```

### 11 — Clasificar un razonamiento dado

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "intermedio"
  tags: ["validez", "practica"]

variables:
  razonamientos: ["Si es un triángulo, tiene tres lados. Es un triángulo. Por lo tanto, tiene tres lados", "Si es un triángulo, tiene tres lados. Tiene tres lados. Por lo tanto, es un triángulo"]
  tipos: ["válido (modus ponens)", "inválido (afirmación del consecuente)"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["válido (modus ponens)", "inválido (afirmación del consecuente)"]

enunciado: "\"{razonamientos[idx]}\" es..."

pasos:
  - "Si afirma el antecedente (\"es un triángulo\"), es modus ponens (válido). Si afirma el consecuente (\"tiene tres lados\"), es afirmación del consecuente (inválido): la premisa sólo garantiza la implicación en un sentido, no al revés."

explicacion: |
  El segundo caso es inválido porque el condicional original no
  afirma que SÓLO los triángulos tengan tres lados.
```

### 12 — Validez es una propiedad estructural

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos razonamientos con contenido completamente distinto pero la misma estructura (por ejemplo, ambos modus ponens) son igual de válidos o inválidos entre sí."

pasos:
  - "La validez depende de la forma lógica, no del tema específico del que hablen las proposiciones."

explicacion: |
  Verdadero: por eso se puede estudiar la validez de forma abstracta,
  con letras (p, q) en vez de contenido concreto.
```

### 13 — Un razonamiento sólido necesita validez y premisas verdaderas

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "solidez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para que un razonamiento sea realmente confiable (no sólo lógicamente válido), hace falta que además sus premisas sean efectivamente verdaderas."

pasos:
  - "\"Todos los gatos vuelan\" es válido en su estructura pero no confiable, porque la premisa es falsa."

explicacion: |
  Verdadero: validez formal más verdad de las premisas es lo que da
  un razonamiento realmente sólido, no sólo válido en abstracto.
```

### 14 — Modus ponens vs. afirmación del consecuente: diferencia clave

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["modus_ponens", "afirmacion_consecuente", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre modus ponens y afirmación del consecuente es cuál de las dos partes del condicional (antecedente o consecuente) se afirma en la segunda premisa."

pasos:
  - "Afirmar el antecedente (p) es válido (modus ponens); afirmar el consecuente (q) no lo es (falacia formal)."

explicacion: |
  Verdadero: son estructuras muy parecidas, pero sólo una es
  lógicamente válida.
```

### 15 — Reconocer la relación con las falacias del lenguaje natural

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las falacias formales (afirmación del consecuente, negación del antecedente) son la versión lógica precisa de errores de razonamiento que también aparecen en lenguaje cotidiano, como los ya vistos en `../../lengua/detectar-falacias/`."

pasos:
  - "Formalizar el error hace más fácil detectarlo, aunque el lenguaje cotidiano lo disfrace de otra forma."

explicacion: |
  Verdadero: es la continuidad directa entre el análisis informal de
  Lengua y el análisis formal de Filosofía.
```

### 16 — Modus tollens con un ejemplo distinto

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "intermedio"
  tags: ["modus_tollens", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "no es un mamífero"
tipo: completar

enunciado: "\"Si es un mamífero, tiene columna vertebral. No tiene columna vertebral. Por lo tanto, ...\" — completá la conclusión válida (modus tollens)."

pasos:
  - "Al negar el consecuente (\"no tiene columna vertebral\"), la conclusión válida es la negación del antecedente."

explicacion: |
  El modus tollens concluye correctamente la negación del
  antecedente a partir de la negación del consecuente.
```

### 17 — Un razonamiento con premisas falsas puede ser válido

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "premisas_falsas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Si estudio, vuelo. Estudié. Por lo tanto, vuelo\" es un razonamiento válido (sigue la forma del modus ponens), aunque su primera premisa (\"si estudio, vuelo\") sea absurda."

pasos:
  - "La validez lógica no evalúa si las premisas son razonables o ciertas en el mundo real, sólo si la conclusión se sigue de ellas."

explicacion: |
  Verdadero: es otro ejemplo que refuerza la separación entre validez
  estructural y verdad/sensatez de las premisas.
```

### 18 — Ordenar el proceso para evaluar la validez de un razonamiento

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "intermedio"
  tags: ["validez", "metodo"]

enunciado: "Ordená los pasos para evaluar si un razonamiento es válido."
tipo: ordenar
opciones_explicitas:
  - "Identificar las premisas y la conclusión del razonamiento"
  - "Formalizar la estructura con proposiciones (p, q) y conectores lógicos"
  - "Comparar esa estructura con las formas válidas conocidas (modus ponens, modus tollens) o las falacias formales"
  - "Concluir si el razonamiento es válido o inválido según esa comparación"
respuesta_orden: ["Identificar las premisas y la conclusión del razonamiento", "Formalizar la estructura con proposiciones (p, q) y conectores lógicos", "Comparar esa estructura con las formas válidas conocidas (modus ponens, modus tollens) o las falacias formales", "Concluir si el razonamiento es válido o inválido según esa comparación"]
explicacion: |
  El proceso va de identificar los componentes del razonamiento a
  formalizarlo y compararlo con las estructuras ya conocidas.
```

### 19 — Validez de un razonamiento como puente a otras materias

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este mismo tema de validez es la base que reutiliza tanto Álgebra booleana (Informática) como Deducción, Contraejemplo, Reducción al absurdo e Inducción matemática (Matemática)."

pasos:
  - "Ver `../../informatica/algebra-booleana/`: es un nodo del MAPA con doble uso confirmado en distintas materias."

explicacion: |
  Verdadero: es el mismo concepto de validez lógica, aplicado luego
  en dos contextos distintos (circuitos/código y demostración
  matemática).
```

### 20 — Aplicación: detectar un razonamiento inválido en un debate

```
metadata:
  materia: "filosofia"
  tema: "validez_de_un_razonamiento"
  nivel: "avanzado"
  tags: ["validez", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer la estructura de afirmación del consecuente permite detectar cuando alguien, en un debate, concluye una causa específica a partir de un efecto que podría tener varias causas posibles."

pasos:
  - "Es la aplicación práctica de identificar esta falacia formal fuera del contexto puramente abstracto de la lógica."

explicacion: |
  Verdadero: formalizar el error ayuda a detectarlo también en
  argumentos reales, no sólo en ejercicios de lógica pura.
```
