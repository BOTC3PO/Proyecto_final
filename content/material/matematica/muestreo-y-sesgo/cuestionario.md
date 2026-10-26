# Matemática — Muestreo y sesgo (cuestionario, 20 preguntas VBLang)

> Tema: `D12`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Población vs. muestra

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre población y muestra?"
tipo: mc
opciones_explicitas:
  - "La población es el grupo completo que interesa estudiar; la muestra es el subconjunto más chico que realmente se mide"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "La muestra siempre es más grande que la población"
respuesta: "La población es el grupo completo que interesa estudiar; la muestra es el subconjunto más chico que realmente se mide"

explicacion: |
  Se estudia la muestra para sacar conclusiones sobre la población
  completa.
```

### 2 — Por qué se muestrea en vez de censar

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo"]

enunciado: "¿Por qué casi siempre se estudia una muestra en vez de censar a toda la población?"
tipo: mc
opciones_explicitas:
  - "Porque censar a toda la población suele ser demasiado caro, lento o directamente imposible"
  - "Porque las muestras siempre dan resultados más precisos que censar a toda la población"
  - "Porque está prohibido por ley censar poblaciones completas"
respuesta: "Porque censar a toda la población suele ser demasiado caro, lento o directamente imposible"

explicacion: |
  Un censo completo (como el censo nacional) es la excepción, no la
  regla, justamente por su costo y complejidad.
```

### 3 — Qué es una muestra representativa

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Qué significa que una muestra sea 'representativa'?"
tipo: mc
opciones_explicitas:
  - "Que sus características (promedios, proporciones, dispersión) se parecen a las de la población completa"
  - "Que incluye a absolutamente todos los miembros de la población"
  - "Que fue elegida por el investigador a mano, uno por uno"
respuesta: "Que sus características (promedios, proporciones, dispersión) se parecen a las de la población completa"

explicacion: |
  Es lo que permite generalizar conclusiones de la muestra hacia toda
  la población.
```

### 4 — Qué es el muestreo aleatorio simple

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Qué caracteriza al muestreo aleatorio simple?"
tipo: mc
opciones_explicitas:
  - "Cada elemento de la población tiene exactamente la misma probabilidad de ser elegido"
  - "Se eligen sólo los elementos más fáciles de conseguir"
  - "Se elige un elemento cada 10 posiciones de una lista"
respuesta: "Cada elemento de la población tiene exactamente la misma probabilidad de ser elegido"

explicacion: |
  Es el ideal teórico, como sortear nombres de un bolillero.
```

### 5 — Qué es el muestreo estratificado

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿En qué consiste el muestreo estratificado?"
tipo: mc
opciones_explicitas:
  - "Se divide la población en subgrupos según alguna característica relevante, y se muestrea de cada subgrupo en proporción a su tamaño"
  - "Se toman sólo los elementos más accesibles, sin ningún criterio adicional"
  - "Se sortea un único elemento y se asume que representa a toda la población"
respuesta: "Se divide la población en subgrupos según alguna característica relevante, y se muestrea de cada subgrupo en proporción a su tamaño"

explicacion: |
  Garantiza que ningún subgrupo quede sub- o sobre-representado por
  puro azar.
```

### 6 — Muestreo estratificado: divide en subgrupos

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo"]

respuesta: verdadero
tipo: vf

enunciado: "En el muestreo estratificado, la población se divide primero en subgrupos (estratos) antes de elegir a quién muestrear de cada uno."

explicacion: |
  Por ejemplo, dividir por provincia o por curso antes de sortear
  dentro de cada grupo.
```

### 7 — Qué es el sesgo de una muestra

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["sesgo", "vocabulario"]

enunciado: "¿Qué significa que una muestra esté 'sesgada'?"
tipo: mc
opciones_explicitas:
  - "Que el método usado para elegirla favorece sistemáticamente a cierto tipo de casos, así que no representa a la población real"
  - "Que tiene muy pocos elementos"
  - "Que se recolectó demasiado rápido"
respuesta: "Que el método usado para elegirla favorece sistemáticamente a cierto tipo de casos, así que no representa a la población real"

explicacion: |
  El sesgo es un problema del MÉTODO de selección, no del tamaño de
  la muestra.
```

### 8 — Ejemplo de sesgo de selección

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "aplicacion"]

enunciado: "Un estudio encuesta a personas en la calle un martes a las 11 de la mañana, para estimar la opinión de 'toda la población adulta' sobre un tema. ¿Qué problema tiene este método?"
tipo: mc
opciones_explicitas:
  - "Sesgo de selección: excluye sistemáticamente a quienes están trabajando en ese horario, un grupo grande de la población"
  - "Ningún problema, porque la calle es un lugar público abierto a cualquiera"
  - "El único problema es que la muestra es demasiado grande"
respuesta: "Sesgo de selección: excluye sistemáticamente a quienes están trabajando en ese horario, un grupo grande de la población"

explicacion: |
  El horario y el lugar de la encuesta ya determinan qué tipo de
  personas tienen chance de ser encuestadas.
```

### 9 — Sesgo del voluntario

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "vocabulario"]

enunciado: "¿Qué es el sesgo del voluntario?"
tipo: mc
opciones_explicitas:
  - "Que quienes se ofrecen espontáneamente a participar de un estudio suelen tener características distintas del resto de la población"
  - "Que los voluntarios siempre mienten en sus respuestas"
  - "Que un estudio con voluntarios nunca puede tener sesgo"
respuesta: "Que quienes se ofrecen espontáneamente a participar de un estudio suelen tener características distintas del resto de la población"

explicacion: |
  Por ejemplo, más motivación, más tiempo libre, u opiniones más
  extremas que el promedio.
```

### 10 — Aplicación real: el caso Literary Digest de 1936

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo", "aplicacion"]

enunciado: "Una encuesta de 1936, con más de 2 millones de respuestas, predijo mal el resultado de una elección presidencial porque armó su lista de encuestados a partir de guías telefónicas y registros de autos (en plena Depresión, bienes de clase media-alta). ¿Qué enseña este caso?"
tipo: mc
opciones_explicitas:
  - "Que una muestra gigante sigue estando sesgada si el método de selección está sesgado — el tamaño no arregla el sesgo"
  - "Que las encuestas con más de un millón de respuestas nunca pueden estar equivocadas"
  - "Que las guías telefónicas eran, en esa época, la mejor forma posible de armar una muestra"
respuesta: "Que una muestra gigante sigue estando sesgada si el método de selección está sesgado — el tamaño no arregla el sesgo"

explicacion: |
  Es el ejemplo histórico estándar de sesgo de selección: el tamaño
  de la muestra (2 millones) no compensó que el método excluía
  sistemáticamente a buena parte del electorado real.
```

### 11 — Muestra grande no garantiza representatividad

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Una muestra grande no garantiza que sea representativa, si el método usado para elegirla está sesgado."

explicacion: |
  Agrandar una muestra reduce el error por azar, pero no corrige un
  sesgo sistemático en cómo se la construyó.
```

### 12 — Completar: nombre del muestreo con probabilidad igual para todos

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "completar"]

tipo: completar
enunciado: "Completá: un método de muestreo que le da a cada elemento de la población la misma probabilidad de ser elegido se llama muestreo aleatorio ___."
respuestas_validas:
  - "simple"

explicacion: |
  Es el ideal teórico, aunque en la práctica no siempre se puede
  armar la lista completa de la población para sortear.
```

### 13 — Problema: tamaño de muestra estratificada proporcional

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["muestreo", "problema"]

variables:
  poblacion_total: 1000
  poblacion_estrato: uno_de([200, 250, 400])
  muestra_total: 100

respuesta: redondear(muestra_total * (poblacion_estrato / poblacion_total), 0)
tipo: input

enunciado: "Una escuela tiene {poblacion_total} alumnos en total, de los cuales {poblacion_estrato} son de un curso particular. Si se arma una muestra estratificada de {muestra_total} alumnos, ¿cuántos deberían salir de ese curso, en proporción a su tamaño?"

pasos:
  - "Proporción del estrato = {poblacion_estrato}/{poblacion_total}"
  - "Cantidad de la muestra = {muestra_total} × ({poblacion_estrato}/{poblacion_total}) = {redondear(muestra_total * (poblacion_estrato / poblacion_total), 0)}"

explicacion: |
  El muestreo estratificado respeta el peso real de cada subgrupo
  dentro de la población.
```

### 14 — Qué es el muestreo sistemático

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿En qué consiste el muestreo sistemático?"
tipo: mc
opciones_explicitas:
  - "Se elige un elemento cada k posiciones de una lista ordenada (por ejemplo, cada 10° cliente que entra a un local)"
  - "Se dividen los elementos en subgrupos según alguna característica"
  - "Se eligen sólo los elementos que están más a mano"
respuesta: "Se elige un elemento cada k posiciones de una lista ordenada (por ejemplo, cada 10° cliente que entra a un local)"

explicacion: |
  Es más fácil de aplicar que el aleatorio simple puro, si ya existe
  una lista ordenada de la población.
```

### 15 — Qué es el muestreo por conveniencia

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "sesgo", "vocabulario"]

enunciado: "¿Qué caracteriza al muestreo por conveniencia, y por qué es el más riesgoso de los cuatro?"
tipo: mc
opciones_explicitas:
  - "Se toma lo que está más a mano (los primeros que responden, quienes pasan por la puerta) — es el más fácil y barato, pero también el que más riesgo tiene de terminar sesgado"
  - "Se sortea entre absolutamente todos los elementos de la población con la misma probabilidad, por eso nunca tiene sesgo"
  - "Es el método más costoso de todos, pero el más preciso"
respuesta: "Se toma lo que está más a mano (los primeros que responden, quienes pasan por la puerta) — es el más fácil y barato, pero también el que más riesgo tiene de terminar sesgado"

explicacion: |
  La facilidad de armarlo es, justamente, lo que suele introducir
  sesgo de selección.
```

### 16 — Agrandar la muestra no corrige el sesgo

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo", "muestreo"]

respuesta: verdadero
tipo: vf

enunciado: "Aumentar el tamaño de una muestra reduce el error debido al azar, pero NO corrige un sesgo sistemático que venga del método usado para elegirla."

explicacion: |
  Son dos problemas distintos: el error por azar se reduce con más
  datos; el sesgo es un problema del método, no de la cantidad.
```

### 17 — Muestreo y distribución normal

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["muestreo", "normal"]

enunciado: "Si se toman muchas muestras distintas de la misma población y se calcula el promedio de cada una, ¿cómo tienden a distribuirse esos promedios?"
tipo: mc
opciones_explicitas:
  - "Tienden a distribuirse en forma de campana (aproximadamente normal), sin importar cómo se distribuya la población original"
  - "Siempre dan exactamente el mismo valor, sin ninguna variación"
  - "Se distribuyen de forma completamente impredecible, sin ningún patrón"
respuesta: "Tienden a distribuirse en forma de campana (aproximadamente normal), sin importar cómo se distribuya la población original"

explicacion: |
  Es la idea que se formaliza en `../teorema-central-del-limite/`, el
  módulo que sigue.
```

### 18 — Aplicación real: por qué las encuestas políticas cuidan el muestreo

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "aplicacion"]

enunciado: "¿Por qué las encuestadoras políticas serias invierten tanto esfuerzo en el método de muestreo (y no sólo en juntar muchas respuestas)?"
tipo: mc
opciones_explicitas:
  - "Porque una muestra sesgada, aunque sea grande, produce una estimación torcida de la opinión pública real — el método importa más que la cantidad"
  - "Porque la ley obliga a usar un método de muestreo específico en todas las encuestas"
  - "Porque cuantas más respuestas se junten, siempre es mejor sin importar cómo se consiguieron"
respuesta: "Porque una muestra sesgada, aunque sea grande, produce una estimación torcida de la opinión pública real — el método importa más que la cantidad"

explicacion: |
  Es la misma lección del caso histórico de 1936, aplicada a encuestas
  actuales.
```

### 19 — Problema: identificar el sesgo en una encuesta online

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "problema"]

enunciado: "Una encuesta se publica únicamente en una app de noticias, y se pide a quien la vea que la responda si quiere. ¿Qué tipo de sesgo tiene más probabilidad de aparecer en los resultados?"
tipo: mc
opciones_explicitas:
  - "Sesgo de selección (sólo llega a quien usa esa app) combinado con sesgo del voluntario (sólo responde quien elige hacerlo)"
  - "Ningún sesgo, porque cualquiera con la app puede responder si quiere"
  - "Sólo hay sesgo si la encuesta tiene menos de 100 respuestas"
respuesta: "Sesgo de selección (sólo llega a quien usa esa app) combinado con sesgo del voluntario (sólo responde quien elige hacerlo)"

explicacion: |
  Quien no usa esa app queda afuera de entrada, y entre quienes sí la
  usan, sólo responde quien decide hacerlo — dos filtros, dos sesgos.
```

### 20 — Cierre: para qué sirve cuidar el muestreo

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender los tipos de muestreo y de sesgo?"
tipo: mc
opciones_explicitas:
  - "Para poder evaluar si una muestra realmente representa a la población que dice representar, antes de confiar en sus conclusiones"
  - "Sólo sirve para diseñar encuestas políticas"
  - "Sólo importa si la población es muy grande"
respuesta: "Para poder evaluar si una muestra realmente representa a la población que dice representar, antes de confiar en sus conclusiones"

explicacion: |
  Es el fundamento sobre el que se construyen
  `../teorema-central-del-limite/`, `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`.
```
