# Historia — Causa y consecuencia (cuestionario, 20 preguntas VBLang)

> Tema: `T5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una causa en historia

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "basico"
  tags: ["causa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una causa es una condición o hecho que contribuye a producir otro hecho (la consecuencia)."

pasos:
  - "En historia, rara vez una causa \"obliga\" mecánicamente a la consecuencia, como en física."

explicacion: |
  Verdadero: es la definición central de causa en el análisis
  histórico.
```

### 2 — Las causas hacen más probable la consecuencia, no la obligan

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causa", "probabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En historia, una causa hace que la consecuencia sea más probable o posible, dentro de decisiones humanas que podrían haber sido distintas."

pasos:
  - "A diferencia de una relación mecánica como en física, hay margen de decisión humana involucrado."

explicacion: |
  Verdadero: es un matiz importante sobre cómo funciona la
  causalidad en el análisis histórico.
```

### 3 — Identificar causa inmediata

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_inmediatas"]

variables:
  n: uno_de([1, 1])

respuesta: "causa inmediata"
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "El asesinato del archiduque Francisco Fernando, como el hecho puntual que \"disparó\" directamente la Primera Guerra Mundial, es un ejemplo de..."

pasos:
  - "Es el hecho puntual que desencadena directamente el acontecimiento."

explicacion: |
  La causa inmediata es el hecho puntual que dispara directamente un
  acontecimiento.
```

### 4 — Identificar causa profunda

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_profundas"]

variables:
  n: uno_de([1, 1])

respuesta: "causa profunda"
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "Las tensiones entre potencias europeas, las alianzas militares y el nacionalismo, que ya existían antes del asesinato de Francisco Fernando, son ejemplos de..."

pasos:
  - "Son condiciones de fondo que venían gestándose desde antes del hecho puntual."

explicacion: |
  Las causas profundas (o estructurales) son condiciones de fondo que
  explican por qué la causa inmediata tuvo el efecto que tuvo.
```

### 5 — Por qué distinguir causa inmediata de profunda

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causas_inmediatas", "causas_profundas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin las causas profundas, la causa inmediata (el asesinato del archiduque) no habría tenido el mismo efecto: explica por qué ese hecho puntual desató una guerra mundial y no un conflicto menor."

pasos:
  - "Es la razón por la que ambos tipos de causa se analizan juntos, no por separado."

explicacion: |
  Verdadero: es la relación central entre causa inmediata y causa
  profunda en el análisis histórico.
```

### 6 — Correlación no es causalidad

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["correlacion_vs_causalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que dos hechos ocurran cerca en el tiempo no significa que uno haya causado al otro: puede ser coincidencia, o ambos pueden ser consecuencia de una tercera causa común."

pasos:
  - "Es el error más común al analizar relaciones causales en historia."

explicacion: |
  Verdadero: es el principio central para no confundir cercanía
  temporal con causalidad real.
```

### 7 — Establecer causalidad requiere evidencia

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["correlacion_vs_causalidad", "evidencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Establecer una relación de causa-consecuencia requiere evidencia de un mecanismo real que conecte ambos hechos, no sólo cercanía temporal."

pasos:
  - "Es el criterio central para validar una relación causal, más allá de que los hechos ocurran cerca en el tiempo."

explicacion: |
  Verdadero: es el requisito central para afirmar una relación
  causal de forma rigurosa.
```

### 8 — Conexión con la generalización apresurada

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["correlacion_vs_causalidad", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Confundir correlación con causalidad en historia es el mismo tipo de error de razonamiento que la generalización apresurada ya vista en `../../lengua/detectar-falacias/`, aplicado ahora al análisis histórico."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la conexión directa entre este tema y esa falacia ya estudiada."

explicacion: |
  Verdadero: es la relación entre este error histórico y su
  equivalente ya conocido en Lengua.
```

### 9 — Consecuencias a corto plazo

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_corto_plazo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una consecuencia a corto plazo es un efecto que se ve poco después del hecho causante."

pasos:
  - "Es una de las dos categorías de consecuencia según el tiempo que tardan en manifestarse."

explicacion: |
  Verdadero: es la definición de consecuencia a corto plazo.
```

### 10 — Consecuencias a largo plazo

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_largo_plazo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una consecuencia a largo plazo se manifiesta años o décadas después, y a veces es más importante que los efectos inmediatos, aunque menos evidente en el momento."

pasos:
  - "Es la otra categoría de consecuencia según el tiempo que tardan en manifestarse."

explicacion: |
  Verdadero: es la definición de consecuencia a largo plazo.
```

### 11 — Una consecuencia puede convertirse en causa

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["cadenas_causales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las cadenas causales no terminan en un solo eslabón: la consecuencia de un hecho puede convertirse en la causa de otro hecho posterior."

pasos:
  - "Analizar historia a menudo implica seguir estas cadenas varios pasos hacia adelante o hacia atrás."

explicacion: |
  Verdadero: es el concepto de cadena causal, más allá de una
  relación causa-consecuencia aislada.
```

### 12 — Clasificar tipo de causa en un ejemplo

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_inmediatas", "causas_profundas", "practica"]

variables:
  ejemplos: ["la firma de un tratado que desencadenó directamente una guerra", "décadas de crisis económica y descontento social que venían acumulándose antes de una revolución"]
  tipos: ["causa inmediata", "causa profunda"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de..."

pasos:
  - "El hecho puntual que dispara directamente es inmediata; las condiciones de fondo acumuladas son profundas."

explicacion: |
  Distinguir causa inmediata de causa profunda en un ejemplo concreto
  es la aplicación central de este tema.
```

### 13 — Un hecho histórico puede tener varias causas del mismo tipo

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causas_profundas", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo hecho histórico puede tener varias causas profundas al mismo tiempo (económicas, sociales, políticas), no sólo una."

pasos:
  - "Es un anticipo del concepto de multicausalidad, tema más adelante en la cadena."

explicacion: |
  Verdadero: es coherente con la idea de que rara vez hay una única
  causa detrás de un hecho histórico importante.
```

### 14 — Identificar una consecuencia a corto vs. largo plazo

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_corto_plazo", "consecuencias_largo_plazo", "practica"]

variables:
  consecuencias: ["la caída inmediata de un gobierno tras un golpe de Estado", "un cambio profundo en las instituciones políticas de un país, visible recién décadas después"]
  tipos: ["consecuencia a corto plazo", "consecuencia a largo plazo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["consecuencia a corto plazo", "consecuencia a largo plazo"]

enunciado: "\"{consecuencias[idx]}\" es un ejemplo de..."

pasos:
  - "El efecto inmediato es corto plazo; el efecto que tarda décadas en verse es largo plazo."

explicacion: |
  Distinguir consecuencias según su horizonte temporal es una
  aplicación práctica central de este tema.
```

### 15 — Coincidencia temporal sin causalidad

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["correlacion_vs_causalidad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si dos hechos ocurrieron el mismo año en distintas partes del mundo sin ninguna relación demostrable entre ellos, se puede afirmar con seguridad que uno causó al otro."

pasos:
  - "Sin evidencia de un mecanismo real que los conecte, la simultaneidad no es suficiente para afirmar causalidad."

explicacion: |
  Falso: la coincidencia temporal sola no es evidencia suficiente de
  causalidad, hace falta un mecanismo demostrable.
```

### 16 — Causa y consecuencia depende de periodización histórica

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Analizar causas y consecuencias requiere un marco temporal claro (periodización), para poder ubicar en qué momento ocurrió cada hecho relacionado."

pasos:
  - "Ver `../periodizacion-historica/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito de la cadena.
```

### 17 — Este es uno de los conceptos del marco Big Six

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Causa y consecuencia es uno de los 6 conceptos del marco \"Big Six\" (Seixas & Morton) de pensamiento histórico, una referencia internacional en didáctica de la Historia."

pasos:
  - "Es el contexto académico de este tema, mencionado en la teoría."

explicacion: |
  Verdadero: es el marco teórico de referencia que organiza este
  tema y varios de los siguientes en la cadena.
```

### 18 — Ordenar el proceso para analizar causas de un hecho histórico

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causa_y_consecuencia", "metodo"]

enunciado: "Ordená los pasos para analizar las causas de un hecho histórico."
tipo: ordenar
opciones_explicitas:
  - "Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)"
  - "Buscar las causas profundas o estructurales que venían gestándose desde antes"
  - "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal"
  - "Distinguir consecuencias a corto y largo plazo del hecho analizado"
respuesta_orden: ["Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)", "Buscar las causas profundas o estructurales que venían gestándose desde antes", "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal", "Distinguir consecuencias a corto y largo plazo del hecho analizado"]
explicacion: |
  El proceso va de la causa más visible (inmediata) a las más
  profundas, verificando evidencia real y considerando el horizonte
  temporal de las consecuencias.
```

### 19 — Prerrequisito de cambio y continuidad

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Comparar qué cambió y qué se mantuvo en el tiempo (cambio y continuidad) presupone ya poder identificar qué causó cada cambio."

pasos:
  - "Ver `../cambio-y-continuidad/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

### 20 — Aplicación: analizar un hecho histórico actual

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al analizar cualquier hecho histórico o actual, conviene distinguir la causa inmediata de las causas profundas, y evitar afirmar una relación causal sin evidencia de un mecanismo real, sólo por cercanía temporal."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al análisis de
  cualquier hecho histórico, pasado o presente.
```
