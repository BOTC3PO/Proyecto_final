# Historia — Década, siglo, milenio (cuestionario, 20 preguntas VBLang)

> Tema: `T2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Cuántos años tiene una década

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["decada"]

variables:
  n: uno_de([1, 1])

respuesta: "10"
tipo: completar

enunciado: "Una década tiene cuántos años?"

pasos:
  - "Es la unidad de agrupación temporal más chica de las tres estudiadas."

explicacion: |
  Una década equivale a 10 años.
```

### 2 — Cuántos años tiene un siglo

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "100"
tipo: completar

enunciado: "Un siglo tiene cuántos años?"

pasos:
  - "Equivale a 10 décadas."

explicacion: |
  Un siglo equivale a 100 años.
```

### 3 — Cuántos años tiene un milenio

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["milenio"]

variables:
  n: uno_de([1, 1])

respuesta: "1000"
tipo: completar

enunciado: "Un milenio tiene cuántos años?"

pasos:
  - "Equivale a 10 siglos."

explicacion: |
  Un milenio equivale a 1000 años.
```

### 4 — A qué siglo pertenece el año 1850

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "XIX"
tipo: mc
opciones_explicitas: ["XVIII", "XIX", "XX"]

enunciado: "El año 1850 pertenece al siglo..."

pasos:
  - "1850/100 = 18,5 → se redondea hacia arriba → siglo 19."

explicacion: |
  El año 1850, al dividir por 100 y redondear hacia arriba, cae en el
  siglo XIX, no en el XVIII como intuitivamente podría pensarse.
```

### 5 — A qué siglo pertenece el año 1900 exactamente

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "caso_limite"]

variables:
  n: uno_de([1, 1])

respuesta: "XIX"
tipo: mc
opciones_explicitas: ["XIX", "XX"]

enunciado: "El año 1900 (exactamente 19×100) pertenece al siglo..."

pasos:
  - "Un año que termina exactamente en 00 pertenece al siglo anterior, no al siguiente."

explicacion: |
  1900 pertenece al siglo XIX; el siglo XX recién empieza en 1901.
```

### 6 — A qué siglo pertenece el año 2000 exactamente

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "caso_limite"]

variables:
  n: uno_de([1, 1])

respuesta: "XX"
tipo: mc
opciones_explicitas: ["XX", "XXI"]

enunciado: "El año 2000 (exactamente 20×100) pertenece al siglo..."

pasos:
  - "Mismo caso que 1900: un año que termina exactamente en 00 pertenece al siglo anterior."

explicacion: |
  2000 pertenece al siglo XX; el siglo XXI recién empieza en 2001.
```

### 7 — A qué siglo pertenece el año 2001

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "XXI"
tipo: mc
opciones_explicitas: ["XX", "XXI"]

enunciado: "El año 2001 pertenece al siglo..."

pasos:
  - "El nuevo siglo/milenio empieza en el año que termina en 1, no en 00."

explicacion: |
  2001 es el primer año del siglo XXI.
```

### 8 — La regla general para calcular el siglo

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para saber a qué siglo pertenece un año, hay que dividirlo por 100 y sumar 1, salvo que el año termine exactamente en 00 (que pertenece al siglo indicado por esa división, sin sumar)."

pasos:
  - "Es la regla general descrita en la teoría, con su excepción para años terminados en 00."

explicacion: |
  Verdadero: es la regla completa para calcular el siglo a partir de
  cualquier año.
```

### 9 — Notación en números romanos

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["notacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Por convención, los siglos se escriben en números romanos: siglo XV, siglo XX, siglo XXI."

pasos:
  - "Es la notación estándar en libros de historia."

explicacion: |
  Verdadero: es la convención de notación descrita en la teoría.
```

### 10 — Nombrar una década por su primer año

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["decada", "nomenclatura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una década suele nombrarse por su primer año: \"los años 80\" se refiere a la década de 1980 a 1989."

pasos:
  - "Es la convención de nomenclatura de décadas descrita en la teoría."

explicacion: |
  Verdadero: es la convención habitual para nombrar décadas.
```

### 11 — Escala de tiempo apropiada según el análisis

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["escalas_de_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para analizar hechos puntuales conviene usar el año; para procesos, la década o el siglo; para grandes etapas de la humanidad, el milenio."

pasos:
  - "Es el principio de \"escala apropiada\" descrito en la teoría."

explicacion: |
  Verdadero: elegir la unidad de tiempo adecuada según lo que se
  analiza es una habilidad central de este tema.
```

### 12 — Un siglo equivale a 10 décadas

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["siglo", "decada"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un siglo equivale exactamente a 10 décadas."

pasos:
  - "100 años / 10 años por década = 10 décadas."

explicacion: |
  Verdadero: es la relación numérica entre estas dos unidades.
```

### 13 — Un milenio equivale a 10 siglos

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["milenio", "siglo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un milenio equivale exactamente a 10 siglos."

pasos:
  - "1000 años / 100 años por siglo = 10 siglos."

explicacion: |
  Verdadero: es la relación numérica entre estas dos unidades.
```

### 14 — Calcular el siglo de un año dado

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo", "practica"]

variables:
  anios: [1750, 1215, 1969]
  siglos: ["XVIII", "XIII", "XX"]
  idx: uno_de([0, 1, 2])

respuesta: siglos[idx]
tipo: mc
opciones_explicitas: ["XII", "XIII", "XVII", "XVIII", "XIX", "XX"]

enunciado: "El año {anios[idx]} pertenece al siglo..."

pasos:
  - "Dividir el año por 100 y redondear hacia arriba (salvo terminación exacta en 00)."

explicacion: |
  Aplicar la regla de cálculo de siglo a distintos años concretos es
  la práctica central de este tema.
```

### 15 — Diferenciar milenio de siglo en un ejemplo

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["milenio", "siglo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un milenio y un siglo son la misma unidad de tiempo, sólo con nombres distintos."

pasos:
  - "Un milenio (1000 años) es diez veces más largo que un siglo (100 años)."

explicacion: |
  Falso: son unidades de magnitud muy distinta, un milenio equivale a
  10 siglos.
```

### 16 — Ambigüedad del inicio de una década

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["decada", "ambiguedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existe cierta ambigüedad técnica sobre si \"los años 80\" empiezan en 1980 o en 1981 (mismo problema que el cálculo de siglos), pero en el uso cotidiano se acepta la convención más simple de 1980-1989."

pasos:
  - "Es el mismo tipo de discusión técnica que la del inicio exacto de un siglo, mencionada como matiz en la teoría."

explicacion: |
  Verdadero: es un matiz técnico mencionado, aunque el uso cotidiano
  simplifica esta ambigüedad.
```

### 17 — Por qué agrupar el tiempo en unidades más grandes

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hablar de \"la Revolución Industrial, siglo XVIII-XIX\" es mucho más manejable mentalmente que enumerar cada año del proceso."

pasos:
  - "Es la razón central de por qué existen estas unidades de agrupación temporal."

explicacion: |
  Verdadero: es la utilidad práctica central de década/siglo/milenio
  como unidades de agrupación.
```

### 18 — Ordenar el proceso para calcular el siglo de un año

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo", "metodo"]

enunciado: "Ordená los pasos para calcular a qué siglo pertenece un año dado."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el año termina exactamente en 00"
  - "Si termina en 00, dividir por 100 sin sumar nada más"
  - "Si no termina en 00, dividir por 100 y redondear hacia arriba (sumar 1 al resultado entero)"
  - "Expresar el resultado en números romanos, según la convención estándar"
respuesta_orden: ["Revisar si el año termina exactamente en 00", "Si termina en 00, dividir por 100 sin sumar nada más", "Si no termina en 00, dividir por 100 y redondear hacia arriba (sumar 1 al resultado entero)", "Expresar el resultado en números romanos, según la convención estándar"]
explicacion: |
  El proceso distingue el caso especial de años terminados en 00 del
  caso general, y cierra con la notación romana estándar.
```

### 19 — Prerrequisito de antes y después de Cristo

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dominar década, siglo y milenio es el prerrequisito directo de calcular intervalos que cruzan el año 0 (antes y después de Cristo)."

pasos:
  - "Ver `../antes-y-despues-de-cristo/`: antes de agregar la dificultad extra de la numeración que decrece hacia atrás, hace falta manejar bien estas unidades."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

### 20 — Aplicación: ubicar un evento histórico por siglo

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer que un evento ocurrió \"a mediados del siglo XIX\", conviene poder traducir eso mentalmente a un rango aproximado de años (alrededor de 1850), en vez de sólo memorizar el número del siglo sin poder ubicarlo en años concretos."

pasos:
  - "Es la aplicación práctica de poder ir y venir entre años y siglos con soltura."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para leer e
  interpretar textos históricos con fluidez.
```
