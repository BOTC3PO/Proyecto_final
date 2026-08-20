# Matemática — Distribución de Poisson: conteo de eventos raros (cuestionario, 20 preguntas VBLang)

> Tema: `D21`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué modela la distribución de Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

enunciado: "¿Qué modela la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "La cantidad de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando pasan al azar a una tasa promedio constante"
  - "El tiempo que pasa hasta que ocurre el próximo evento"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "La cantidad de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando pasan al azar a una tasa promedio constante"

explicacion: |
  Como la cantidad de llamadas que recibe un call center en una hora.
```

### 2 — Qué es λ en Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

enunciado: "En la distribución de Poisson, ¿qué representa el parámetro λ?"
tipo: mc
opciones_explicitas:
  - "La cantidad promedio de eventos que ocurren en el intervalo"
  - "La probabilidad de que ocurra un único evento particular"
  - "La cantidad máxima de eventos que pueden ocurrir"
respuesta: "La cantidad promedio de eventos que ocurren en el intervalo"

explicacion: |
  Si en promedio hay 4 llamadas por hora, λ = 4.
```

### 3 — Valor esperado de una Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "En la distribución de Poisson, el valor esperado E(X) es directamente igual a λ, sin necesitar ningún cálculo extra."

explicacion: |
  A diferencia de otras distribuciones, acá λ ya ES el promedio.
```

### 4 — Completar: fórmula de P(X=k)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "completar"]

tipo: completar
enunciado: "Completá la fórmula: P(X=k) = (λᵏ × e^(−λ)) / ___."
respuestas_validas:
  - "k!"
  - "k factorial"

explicacion: |
  El factorial de k, el mismo usado en combinatoria.
```

### 5 — Problema: calcular P(X=k)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([2, 3, 4])
  k: uno_de([0, 1, 2])

respuesta: redondear((lambda ^ k * e ^ (-lambda)) / factorial(k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un call center recibe en promedio λ = {lambda} llamadas por hora. ¿Cuál es la probabilidad de recibir exactamente {k} llamadas en una hora (P(X={k}))?"

pasos:
  - "P(X={k}) = ({lambda}^{k} × e^(−{lambda})) / {k}! = {redondear((lambda ^ k * e ^ (-lambda)) / factorial(k), 4)}"

explicacion: |
  Se aplica directo la fórmula de Poisson con λ = {lambda} y k = {k}.
```

### 6 — Problema: P(X=0), ningún evento

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([1, 2, 3, 5])

respuesta: redondear(e ^ (-lambda), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una ruta tiene en promedio λ = {lambda} accidentes por semana. ¿Cuál es la probabilidad de que NO ocurra NINGÚN accidente en una semana (P(X=0))?"

pasos:
  - "P(X=0) = ({lambda}⁰ × e^(−{lambda})) / 0! = e^(−{lambda}) = {redondear(e ^ (-lambda), 4)}"

explicacion: |
  Con k=0, λᵏ=1 y 0!=1 — la fórmula se reduce a e^(−λ).
```

### 7 — Poisson es discreta

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución de Poisson es discreta, porque siempre cuenta una cantidad entera de eventos (0, 1, 2, 3...)."

explicacion: |
  A diferencia de la exponencial (continua), que mide tiempo.
```

### 8 — Por qué se llama "ley de los sucesos raros"

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson"]

enunciado: "¿Por qué la distribución de Poisson se conoce como 'ley de los sucesos raros'?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimas oportunidades de que el evento ocurra, pero la probabilidad de que ocurra en cada oportunidad puntual es muy baja"
  - "Porque los eventos que modela nunca ocurren en la realidad"
  - "Porque sólo se puede usar una vez por cada experimento"
respuesta: "Porque hay muchísimas oportunidades de que el evento ocurra, pero la probabilidad de que ocurra en cada oportunidad puntual es muy baja"

explicacion: |
  Como la probabilidad de que suene el teléfono en un segundo
  cualquiera del día: minúscula, pero sumada da un promedio por hora.
```

### 9 — Poisson como límite de la binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "binomial"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución de Poisson es el caso límite de la distribución binomial cuando la cantidad de intentos n es muy grande y la probabilidad de éxito p es muy chica, manteniendo n×p = λ constante."

explicacion: |
  Es la conexión matemática entre `../distribucion-binomial/` (n
  intentos discretos) y Poisson (conteo en un intervalo continuo de
  oportunidades).
```

### 10 — Relación con la distribución exponencial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "exponencial"]

enunciado: "¿Qué relación tiene la distribución de Poisson con la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "Son la versión discreta (cuántos eventos) y continua (cuánto tiempo entre ellos) de la misma situación real, con la misma tasa subyacente"
  - "No tienen ninguna relación real entre sí"
  - "La Poisson reemplaza siempre a la exponencial"
respuesta: "Son la versión discreta (cuántos eventos) y continua (cuánto tiempo entre ellos) de la misma situación real, con la misma tasa subyacente"

explicacion: |
  Poisson cuenta eventos en un intervalo; exponencial mide el tiempo
  entre esos mismos eventos.
```

### 11 — Aplicación real: defectos de fabricación

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "aplicacion"]

enunciado: "Una fábrica de telas tiene en promedio 2 defectos por cada 100 metros producidos. ¿Qué distribución conviene usar para calcular la probabilidad de encontrar exactamente 3 defectos en un rollo de 100 metros?"
tipo: mc
opciones_explicitas:
  - "La distribución de Poisson, con λ = 2 defectos por cada 100 metros"
  - "La distribución exponencial, con λ = 1/2"
  - "La distribución normal, con media 2"
respuesta: "La distribución de Poisson, con λ = 2 defectos por cada 100 metros"

explicacion: |
  Es un conteo de eventos raros (defectos) en un intervalo fijo
  (100 metros de tela) — el caso central de Poisson.
```

### 12 — Escenario de conteo vs. escenario de tiempo

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson", "clasificar"]

enunciado: "¿Cuál de estos dos escenarios se modela con Poisson, y no con la exponencial?"
tipo: mc
opciones_explicitas:
  - "La cantidad de mensajes de error que aparecen en un servidor durante una hora"
  - "El tiempo que pasa hasta el próximo mensaje de error"
respuesta: "La cantidad de mensajes de error que aparecen en un servidor durante una hora"

explicacion: |
  "Cantidad en un intervalo" es Poisson; "tiempo hasta que pase algo"
  es exponencial (`../distribucion-exponencial/`).
```

### 13 — Problema: comparar probabilidades con distinto λ

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda_bajo: 1
  lambda_alto: 5

respuesta: e ^ (-lambda_bajo) > e ^ (-lambda_alto)
tipo: vf

enunciado: "Comparando P(X=0) (ningún evento) entre un local con λ = {lambda_bajo} clientes por hora y otro con λ = {lambda_alto} clientes por hora, ¿el local con MENOS clientes promedio tiene MAYOR probabilidad de no recibir ninguno?"

explicacion: |
  Cuanto menor es λ, más probable es que no ocurra ningún evento —
  e^(−λ) crece a medida que λ baja.
```

### 14 — Problema: comparar P(X=k) para distintos k con el mismo λ

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: 3

respuesta: redondear((lambda ^ 3 * e ^ (-lambda)) / factorial(3), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con λ = {lambda} eventos promedio por intervalo, ¿cuál es P(X=3)?"

pasos:
  - "P(X=3) = ({lambda}³ × e^(−{lambda})) / 3! = {redondear((lambda ^ 3 * e ^ (-lambda)) / factorial(3), 4)}"

explicacion: |
  P(X=k) es más alta cerca de k=λ (el valor esperado) y baja a medida
  que k se aleja de ese valor.
```

### 15 — λ no tiene por qué ser un número entero

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "El parámetro λ de una Poisson puede ser un número decimal (por ejemplo, λ = 2,5 llamadas por hora), aunque los valores que puede tomar X sean siempre enteros (0, 1, 2, 3...)."

explicacion: |
  λ es un promedio, y un promedio puede perfectamente ser 2,5 aunque
  cada resultado individual sea un entero.
```

### 16 — Problema: aplicación a errores de tipeo

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([1, 2])

respuesta: redondear((lambda ^ 1 * e ^ (-lambda)) / factorial(1), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una página de un libro tiene en promedio {lambda} errores de tipeo. ¿Cuál es la probabilidad de que una página elegida al azar tenga EXACTAMENTE 1 error?"

pasos:
  - "P(X=1) = ({lambda}¹ × e^(−{lambda})) / 1! = {redondear((lambda ^ 1 * e ^ (-lambda)) / factorial(1), 4)}"

explicacion: |
  Con k=1, la fórmula se reduce a λ × e^(−λ).
```

### 17 — Poisson no sirve para tiempos de espera

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "clasificar"]

enunciado: "Un analista quiere calcular 'la probabilidad de esperar más de 10 minutos hasta el próximo cliente'. ¿La distribución de Poisson es la herramienta correcta para esta pregunta?"
tipo: mc
opciones_explicitas:
  - "No: esa pregunta es sobre TIEMPO de espera, corresponde a la distribución exponencial, no a Poisson"
  - "Sí: cualquier pregunta sobre clientes se resuelve con Poisson"
respuesta: "No: esa pregunta es sobre TIEMPO de espera, corresponde a la distribución exponencial, no a Poisson"

explicacion: |
  Poisson responde "cuántos eventos", no "cuánto tiempo hasta el
  próximo" — esa es la pregunta que resuelve la exponencial.
```

### 18 — Suma de probabilidades de una Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de P(X=0) + P(X=1) + P(X=2) + ... (para todos los valores posibles de k, hasta infinito) da exactamente 1, igual que en cualquier variable aleatoria discreta."

explicacion: |
  Es la misma propiedad de toda distribución de probabilidad discreta,
  vista en `../variable-aleatoria-discreta-continua/`.
```

### 19 — Aplicación real: mutaciones genéticas

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "aplicacion"]

enunciado: "En genética, la cantidad de mutaciones espontáneas por generación en una población suele modelarse con Poisson. ¿Por qué es un buen candidato para esta distribución?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimos genes donde podría ocurrir una mutación (muchas oportunidades), pero la probabilidad de que mute cada uno en particular es muy baja"
  - "Porque las mutaciones siempre ocurren en cantidades fijas y predecibles"
  - "Porque la Poisson sólo aplica a fenómenos biológicos"
respuesta: "Porque hay muchísimos genes donde podría ocurrir una mutación (muchas oportunidades), pero la probabilidad de que mute cada uno en particular es muy baja"

explicacion: |
  Es la misma lógica de "sucesos raros" aplicada a genética, en vez de
  a llamadas telefónicas o accidentes.
```

### 20 — Cierre: para qué sirve la distribución de Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de que ocurran una cantidad exacta de eventos raros e independientes dentro de un intervalo fijo de tiempo o espacio"
  - "Para medir el tiempo que pasa hasta que ocurre un evento"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para calcular la probabilidad de que ocurran una cantidad exacta de eventos raros e independientes dentro de un intervalo fijo de tiempo o espacio"

explicacion: |
  Cierra, junto con `../distribucion-exponencial/`, el par
  discreto/continuo que completa la clasificación de
  `../variable-aleatoria-discreta-continua/`.
```
