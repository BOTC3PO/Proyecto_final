# Matemática — Distribución exponencial: tiempo entre eventos (cuestionario, 20 preguntas VBLang)

> Tema: `D20`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué modela la distribución exponencial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

enunciado: "¿Qué modela la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "El tiempo que pasa hasta que ocurre el próximo evento, cuando los eventos suceden a una tasa promedio constante"
  - "La cantidad de eventos que ocurren en un intervalo fijo de tiempo"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "El tiempo que pasa hasta que ocurre el próximo evento, cuando los eventos suceden a una tasa promedio constante"

explicacion: |
  Como el tiempo hasta que llega el próximo colectivo.
```

### 2 — Qué es λ (lambda)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

enunciado: "En la distribución exponencial, ¿qué representa el parámetro λ (lambda)?"
tipo: mc
opciones_explicitas:
  - "La tasa promedio de eventos por unidad de tiempo"
  - "La cantidad total de eventos posibles"
  - "El tiempo máximo que se puede esperar"
respuesta: "La tasa promedio de eventos por unidad de tiempo"

explicacion: |
  Por ejemplo, 3 colectivos por hora → λ = 3/hora.
```

### 3 — Completar: fórmula de la media

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "completar"]

tipo: completar
enunciado: "Completá: el tiempo promedio de espera E(T) = 1 / ___."
respuestas_validas:
  - "λ"
  - "lambda"

explicacion: |
  El tiempo promedio de espera es el inverso de la tasa de eventos.
```

### 4 — Problema: tiempo promedio de espera

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([2, 3, 4, 6])

respuesta: redondear(1 / lambda, 3)
tipo: input
tolerancia_abs: 0.001
unidad: "horas"

enunciado: "En promedio llegan {lambda} colectivos por hora (λ = {lambda}/hora). ¿Cuál es el tiempo promedio de espera entre un colectivo y el siguiente, en horas?"

pasos:
  - "E(T) = 1/λ = 1/{lambda} = {redondear(1 / lambda, 3)} horas"

explicacion: |
  El tiempo promedio de espera es el inverso de la tasa de llegada.
```

### 5 — Problema: calcular λ a partir del tiempo promedio

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  tiempo_promedio: uno_de([4, 5, 10, 20])

respuesta: redondear(1 / tiempo_promedio, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "El tiempo promedio entre fallas de una máquina es de {tiempo_promedio} días. ¿Cuál es la tasa λ de fallas por día?"

pasos:
  - "λ = 1/E(T) = 1/{tiempo_promedio} = {redondear(1 / tiempo_promedio, 3)} fallas por día"

explicacion: |
  λ y el tiempo promedio son inversos entre sí.
```

### 6 — Completar: fórmula de P(T > t)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "completar"]

tipo: completar
enunciado: "Completá: P(T > t) = e^(−λ × ___)."
respuestas_validas:
  - "t"

explicacion: |
  Es la probabilidad de tener que esperar más de `t` unidades de
  tiempo.
```

### 7 — Problema: calcular P(T > t)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([0.5, 1, 2])
  t: uno_de([1, 2])

respuesta: redondear(e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Los eventos ocurren con tasa λ = {lambda} por unidad de tiempo. ¿Cuál es la probabilidad de tener que esperar MÁS de {t} unidades de tiempo (P(T > {t}))?"

pasos:
  - "P(T > {t}) = e^(−{lambda}×{t}) = {redondear(e ^ (-(lambda * t)), 3)}"

explicacion: |
  Cuanto más grande el tiempo `t`, más chica esta probabilidad.
```

### 8 — Problema: calcular P(T ≤ t) con el complemento

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([0.5, 1, 2])
  t: uno_de([1, 2])

respuesta: redondear(1 - e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Los eventos ocurren con tasa λ = {lambda} por unidad de tiempo. ¿Cuál es la probabilidad de que el evento YA HAYA OCURRIDO para el tiempo {t} (P(T ≤ {t}))?"

pasos:
  - "P(T ≤ {t}) = 1 − e^(−{lambda}×{t}) = {redondear(1 - e ^ (-(lambda * t)), 3)}"

explicacion: |
  Es el complemento de P(T > t): juntas siempre suman 1.
```

### 9 — P(T≤t) y P(T>t) suman 1

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial"]

respuesta: verdadero
tipo: vf

enunciado: "P(T ≤ t) y P(T > t) siempre suman exactamente 1, para cualquier valor de t."

explicacion: |
  Son eventos complementarios: o el evento ya ocurrió, o no.
```

### 10 — Relación con la distribución de Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "poisson"]

enunciado: "¿Cómo se relaciona la distribución exponencial con la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "Si la CANTIDAD de eventos por intervalo sigue una Poisson, el TIEMPO entre esos eventos consecutivos sigue una exponencial con la misma tasa λ"
  - "No tienen ninguna relación, son distribuciones completamente independientes"
  - "La exponencial reemplaza a la Poisson, nunca se usan para el mismo problema"
respuesta: "Si la CANTIDAD de eventos por intervalo sigue una Poisson, el TIEMPO entre esos eventos consecutivos sigue una exponencial con la misma tasa λ"

explicacion: |
  Son dos caras de la misma situación: una cuenta eventos (discreta),
  la otra mide el tiempo entre ellos (continua).
```

### 11 — La exponencial es continua

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución exponencial es una distribución continua, porque el tiempo puede tomar cualquier valor, no sólo números enteros."

explicacion: |
  A diferencia de la Poisson (discreta, que cuenta eventos enteros).
```

### 12 — Aplicación real: vida útil de una lamparita

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "aplicacion"]

enunciado: "Una lamparita dura en promedio 2.000 horas antes de quemarse, y las fallas ocurren al azar a una tasa constante. ¿Qué distribución conviene usar para modelar 'cuánto va a durar esta lamparita en particular'?"
tipo: mc
opciones_explicitas:
  - "La distribución exponencial, con λ = 1/2000 fallas por hora"
  - "La distribución binomial, con n=2000 intentos"
  - "La distribución de Poisson, contando lamparitas"
respuesta: "La distribución exponencial, con λ = 1/2000 fallas por hora"

explicacion: |
  Es exactamente "tiempo hasta que ocurre el próximo evento (la
  falla)", el caso central de la exponencial.
```

### 13 — Escenario continuo vs. escenario de conteo

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "clasificar"]

enunciado: "¿Cuál de estos dos escenarios se modela con la distribución EXPONENCIAL, y no con Poisson?"
tipo: mc
opciones_explicitas:
  - "El tiempo que pasa hasta que llega el próximo cliente a un local"
  - "La cantidad de clientes que llegan a un local en una hora"
respuesta: "El tiempo que pasa hasta que llega el próximo cliente a un local"

explicacion: |
  "Tiempo hasta" es exponencial (continua); "cantidad en un
  intervalo" es Poisson (discreta) — ver `../distribucion-de-poisson/`.
```

### 14 — Problema: comparar probabilidades con distinta tasa

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda_a: 1
  lambda_b: 3
  t: 1

respuesta: e ^ (-(lambda_a * t)) > e ^ (-(lambda_b * t))
tipo: vf

enunciado: "Sistema A tiene λ = {lambda_a} eventos por hora; Sistema B tiene λ = {lambda_b} eventos por hora (más eventos por hora que A). Para el mismo tiempo t = {t} hora, ¿P(T > {t}) del Sistema A es MAYOR que la del Sistema B?"

explicacion: |
  A menor tasa de eventos (λ), más probable es tener que esperar más
  tiempo — A tiene menos eventos por hora, así que su P(T>1) es mayor.
```

### 15 — A mayor λ, menor tiempo promedio de espera

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la tasa λ (más eventos ocurren por unidad de tiempo), menor es el tiempo promedio de espera hasta el próximo evento."

explicacion: |
  E(T) = 1/λ: si λ crece, 1/λ (el tiempo promedio) baja.
```

### 16 — Problema: comparar dos tiempos promedio

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "intermedio"
  tags: ["exponencial", "problema"]

variables:
  lambda_local_a: uno_de([2, 4])
  lambda_local_b: uno_de([1, 3])

respuesta: (1 / lambda_local_a) < (1 / lambda_local_b)
tipo: vf

enunciado: "Local A recibe clientes con tasa λ = {lambda_local_a} por hora; Local B recibe clientes con tasa λ = {lambda_local_b} por hora. ¿El tiempo promedio entre clientes del Local A es MENOR que el del Local B?"

explicacion: |
  Comparar 1/λ de cada local: mayor tasa de llegada implica menor
  tiempo promedio de espera entre clientes.
```

### 17 — Aplicación real: tiempo entre fallas de una máquina

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["exponencial", "aplicacion"]

enunciado: "Una fábrica quiere estimar la probabilidad de que una máquina funcione MÁS de 100 horas sin fallar, sabiendo que en promedio falla cada 500 horas. ¿Qué necesita calcular?"
tipo: mc
opciones_explicitas:
  - "P(T > 100) usando la exponencial con λ = 1/500"
  - "P(X = 100) usando la binomial con n = 500"
  - "El desvío estándar de 500 horas"
respuesta: "P(T > 100) usando la exponencial con λ = 1/500"

explicacion: |
  Es la pregunta central de la distribución exponencial aplicada a
  confiabilidad de componentes.
```

### 18 — Problema: probabilidad de esperar más que el promedio

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  lambda: uno_de([1, 2, 4])
  t: 1 / lambda

respuesta: redondear(e ^ (-(lambda * t)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con λ = {lambda}, el tiempo promedio de espera es 1/{lambda}. ¿Cuál es la probabilidad de esperar MÁS que ese tiempo promedio (P(T > 1/λ))?"

pasos:
  - "P(T > 1/λ) = e^(−λ×1/λ) = e^(−1) ≈ {redondear(e ^ (-(lambda * t)), 3)}"

explicacion: |
  Este resultado (e^(−1) ≈ 0,368) es siempre el mismo, sin importar
  λ — casi el 37% de las veces se espera más que el promedio, porque
  la exponencial no es simétrica como la normal.
```

### 19 — La exponencial no sirve para contar eventos

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "avanzado"
  tags: ["exponencial", "clasificar"]

enunciado: "Un analista quiere calcular 'la probabilidad de que lleguen exactamente 5 clientes en la próxima hora'. ¿La distribución exponencial es la herramienta correcta para esta pregunta?"
tipo: mc
opciones_explicitas:
  - "No: esa pregunta es un CONTEO de eventos en un intervalo fijo, corresponde a la distribución de Poisson, no a la exponencial"
  - "Sí: cualquier pregunta sobre clientes se resuelve con la exponencial"
respuesta: "No: esa pregunta es un CONTEO de eventos en un intervalo fijo, corresponde a la distribución de Poisson, no a la exponencial"

explicacion: |
  La exponencial responde "cuánto tiempo hasta que pase algo", no
  "cuántos eventos van a pasar" — esa es la pregunta de Poisson.
```

### 20 — Cierre: para qué sirve la distribución exponencial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_exponencial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "Para modelar el tiempo de espera hasta que ocurre un evento, cuando los eventos suceden al azar a una tasa promedio constante"
  - "Para contar cuántos eventos ocurren en un intervalo fijo de tiempo"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para modelar el tiempo de espera hasta que ocurre un evento, cuando los eventos suceden al azar a una tasa promedio constante"

explicacion: |
  Es el caso continuo hermano de la distribución de Poisson (el
  módulo que sigue), que cuenta eventos en vez de medir tiempos.
```
