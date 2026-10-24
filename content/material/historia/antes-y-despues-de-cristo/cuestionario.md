# Historia — Antes y después de Cristo: cálculo de intervalos (cuestionario, 20 preguntas VBLang)

> Tema: `T3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — No existe el año 0

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["ano_0"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El calendario gregoriano no tiene año 0: se pasa directamente del año 1 a.C. al año 1 d.C."

pasos:
  - "Es la particularidad central que hace que calcular intervalos que cruzan ese punto sea distinto de una resta simple."

explicacion: |
  Verdadero: la ausencia de año 0 es la fuente de casi todos los
  errores al calcular estos intervalos.
```

### 2 — Los años d.C. aumentan con el tiempo

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["despues_de_cristo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Después de Cristo (d.C.), los años aumentan con el tiempo: 100 d.C. es anterior a 200 d.C."

pasos:
  - "Es el sentido habitual de conteo, igual que cualquier número positivo creciente."

explicacion: |
  Verdadero: en d.C., el número más chico es siempre más antiguo.
```

### 3 — Los años a.C. disminuyen hacia el presente

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["antes_de_cristo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de Cristo (a.C.), los años disminuyen con el tiempo hacia el presente: el año 100 a.C. es posterior (más cercano al presente) que el año 200 a.C."

pasos:
  - "Cuanto más grande el número en a.C., más lejano en el pasado."

explicacion: |
  Verdadero: en a.C. la relación se invierte respecto de d.C.
```

### 4 — Identificar cuál año a.C. es más antiguo

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["antes_de_cristo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "500 a.C."
tipo: mc
opciones_explicitas: ["500 a.C.", "300 a.C."]

enunciado: "¿Cuál de estos dos años es más antiguo?"

pasos:
  - "En a.C., el número más grande es más antiguo (más lejano en el pasado)."

explicacion: |
  500 a.C. es más antiguo que 300 a.C., aunque el número sea mayor.
```

### 5 — Fórmula para intervalos que cruzan el año 0

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["formula", "cruce_ano_0"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para calcular cuántos años pasaron entre un año X a.C. y un año Y d.C., se suman los dos números (no se restan), porque no hay año 0 que se pueda cancelar entre ambos."

pasos:
  - "Es la fórmula central de este tema: Intervalo = X (a.C.) + Y (d.C.)."

explicacion: |
  Verdadero: es la regla central de cálculo cuando el intervalo
  cruza del a.C. al d.C.
```

### 6 — Calcular un intervalo que cruza el año 0

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["cruce_ano_0", "practica"]

variables:
  anio_ac: random(200, 600)
  anio_dc: random(100, 500)

respuesta: anio_ac + anio_dc
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron desde el año {anio_ac} a.C. hasta el año {anio_dc} d.C.?"

pasos:
  - "Sumar los dos números, porque el intervalo cruza el año 0 inexistente."

explicacion: |
  El intervalo se calcula sumando el año a.C. y el año d.C., no
  restándolos.
```

### 7 — Ejemplo clásico: de 300 a.C. a 200 d.C.

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["cruce_ano_0", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "500"
tipo: completar

enunciado: "¿Cuántos años pasaron desde el año 300 a.C. hasta el año 200 d.C.?"

pasos:
  - "300 + 200 = 500 años."

explicacion: |
  Es el ejemplo clásico usado en la teoría: 300 a.C. + 200 d.C. = 500
  años de intervalo.
```

### 8 — Calcular un intervalo completamente en d.C.

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["mismo_lado", "practica"]

variables:
  anio_menor: random(400, 700)
  anio_mayor: random(800, 1200)

respuesta: anio_mayor - anio_menor
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron desde el año {anio_menor} d.C. hasta el año {anio_mayor} d.C.?"

pasos:
  - "Si ambos años están en d.C., se resta normalmente: el mayor menos el menor."

explicacion: |
  Cuando ambos años están del mismo lado (d.C.), el cálculo es una
  resta simple.
```

### 9 — Calcular un intervalo completamente en a.C.

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["mismo_lado", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "200"
tipo: completar

enunciado: "¿Cuántos años pasaron desde el año 500 a.C. hasta el año 300 a.C.?"

pasos:
  - "500 - 300 = 200. En a.C., el número mayor es más antiguo, así que se resta el menor al mayor igual."

explicacion: |
  Cuando ambos años están en a.C., se resta el número menor al mayor,
  igual que con d.C., pero recordando que \"más grande\" significa
  \"más antiguo\" en este caso.
```

### 10 — Resta simple no aplica al cruzar el año 0

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["cruce_ano_0", "error_comun"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Para calcular el intervalo entre 300 a.C. y 200 d.C., conviene restar 300 menos 200, igual que se haría si ambos años estuvieran del mismo lado."

pasos:
  - "Como el intervalo cruza el año 0 inexistente, hay que sumar los dos números, no restarlos."

explicacion: |
  Falso: restar en este caso da un resultado incorrecto; la fórmula
  correcta al cruzar el año 0 es sumar ambos números.
```

### 11 — Pensarlo como una recta numérica

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["recta_numerica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El a.C. se puede pensar como números negativos y el d.C. como números positivos, pero sin el cero real entre medio."

pasos:
  - "Es la analogía que ayuda a entender por qué se suman los valores absolutos en vez de restarlos."

explicacion: |
  Verdadero: es la analogía descrita en la teoría para justificar la
  fórmula de suma.
```

### 12 — Un año a.C. no puede ser posterior a un año d.C.

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["antes_de_cristo", "despues_de_cristo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cualquier año a.C. es siempre anterior a cualquier año d.C., sin excepción."

pasos:
  - "Todo lo que ocurrió antes de Cristo (a.C.) es, por definición, anterior a cualquier fecha después de Cristo (d.C.)."

explicacion: |
  Verdadero: es una consecuencia directa de la definición del
  sistema de datación.
```

### 13 — Calcular la duración de un imperio antiguo

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["cruce_ano_0", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "780"
tipo: completar

enunciado: "Si un imperio se fundó en el año 753 a.C. y desapareció en el año 27 d.C., ¿cuántos años duró?"

pasos:
  - "El intervalo cruza el año 0 inexistente: se suman los dos números (753 + 27)."

explicacion: |
  753 + 27 = 780 años de duración, aplicando la fórmula de suma para
  intervalos que cruzan del a.C. al d.C.
```

### 14 — Identificar si un intervalo cruza el año 0

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["identificacion", "practica"]

variables:
  pares: ["100 a.C. y 50 d.C.", "300 d.C. y 500 d.C."]
  cruza: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: cruza[idx]
tipo: vf

enunciado: "El intervalo entre {pares[idx]} cruza el año 0 (hay que sumar los años en vez de restar)."

pasos:
  - "Si uno de los años es a.C. y el otro d.C., el intervalo cruza el año 0."

explicacion: |
  Identificar si un intervalo cruza el año 0 es el primer paso para
  elegir la fórmula correcta (suma o resta).
```

### 15 — Errores comunes al calcular intervalos

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["error_comun"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un error común es tratar los años a.C. como si aumentaran con el tiempo igual que los años d.C., cuando en realidad disminuyen hacia el presente."

pasos:
  - "Confundir el sentido de conteo del a.C. es la fuente más común de errores en este tema."

explicacion: |
  Verdadero: es el error conceptual central que este tema busca
  evitar.
```

### 16 — Calcular un intervalo mixto con valores concretos

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["cruce_ano_0", "practica"]

variables:
  anio_ac: random(50, 150)
  anio_dc: random(50, 150)

respuesta: anio_ac + anio_dc
tipo: input
tolerancia_abs: 0

enunciado: "Un evento ocurrió en el año {anio_ac} a.C. y otro en el año {anio_dc} d.C. ¿Cuántos años pasaron entre ambos eventos?"

pasos:
  - "Sumar los dos valores porque el intervalo cruza el año 0."

explicacion: |
  Aplicar la fórmula de suma para intervalos que cruzan del a.C. al
  d.C.
```

### 17 — Duración correcta al restar en a.C.

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["mismo_lado", "practica"]

variables:
  anio_reciente: random(100, 300)
  anio_antiguo: random(400, 700)

respuesta: anio_antiguo - anio_reciente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron desde el año {anio_antiguo} a.C. hasta el año {anio_reciente} a.C.?"

pasos:
  - "En a.C., el número mayor es el más antiguo: se resta el menor al mayor."

explicacion: |
  Cuando ambos años están en a.C., el cálculo sigue siendo una resta,
  cuidando qué número representa el año más antiguo.
```

### 18 — Ordenar el proceso para calcular un intervalo

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["metodo"]

enunciado: "Ordená los pasos para calcular correctamente el intervalo entre dos años históricos."
tipo: ordenar
opciones_explicitas:
  - "Identificar si ambos años están del mismo lado (los dos a.C. o los dos d.C.) o si cruzan el año 0"
  - "Si están del mismo lado, restar el número menor al mayor"
  - "Si cruzan el año 0, sumar los dos números (a.C. + d.C.)"
  - "Verificar que el resultado tenga sentido según la duración esperada del período"
respuesta_orden: ["Identificar si ambos años están del mismo lado (los dos a.C. o los dos d.C.) o si cruzan el año 0", "Si están del mismo lado, restar el número menor al mayor", "Si cruzan el año 0, sumar los dos números (a.C. + d.C.)", "Verificar que el resultado tenga sentido según la duración esperada del período"]
explicacion: |
  El proceso empieza identificando el caso (mismo lado o cruce del
  año 0) para aplicar la fórmula correcta en cada situación.
```

### 19 — Prerrequisito de periodización histórica

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Calcular estos intervalos con precisión es el prerrequisito directo de dividir la historia en períodos, que requiere poder calcular con exactitud cuánto duró cada uno."

pasos:
  - "Ver `../periodizacion-historica/`: es el tema siguiente de la cadena, incluidos períodos que cruzan del a.C. al d.C."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

### 20 — Aplicación: calcular cuánto duró un proceso histórico

```
metadata:
  materia: "historia"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar la transición del mundo antiguo mediterráneo hacia la era cristiana, conviene aplicar la fórmula de suma (no de resta) para calcular correctamente cuántos años abarcó ese proceso, ya que cruza del a.C. al d.C."

pasos:
  - "Es la aplicación práctica directa de este tema a un caso histórico real que cruza el año 0."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en el análisis
  de procesos históricos reales que cruzan el cambio de era.
```
