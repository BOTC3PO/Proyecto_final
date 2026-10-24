# Matemática — Variable aleatoria: discreta vs. continua (cuestionario, 20 preguntas VBLang)

> Tema: `D19`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una variable aleatoria

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["variable_aleatoria", "vocabulario"]

enunciado: "¿Qué es una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"
  - "Un valor que siempre es el mismo, sin importar el experimento"
  - "Otro nombre para la media de un conjunto de datos"
respuesta: "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"

explicacion: |
  Antes del experimento no se sabe qué valor va a tomar, pero sí cómo
  se reparten las probabilidades entre los valores posibles.
```

### 2 — Qué hace discreta a una variable aleatoria

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea DISCRETA?"
tipo: mc
opciones_explicitas:
  - "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"
  - "Que sólo pueda tomar el valor 0 o el valor 1"
  - "Que su valor esperado sea siempre un número entero"
respuesta: "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda, o la cantidad
  de llamadas en una hora.
```

### 3 — Qué hace continua a una variable aleatoria

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea CONTINUA?"
tipo: mc
opciones_explicitas:
  - "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"
  - "Que nunca pueda tomar valores negativos"
  - "Que siempre esté relacionada con el tiempo"
respuesta: "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"

explicacion: |
  Como la altura de una persona o el tiempo de espera de un colectivo
  — siempre hay un valor más preciso posible entre dos cualesquiera.
```

### 4 — Clasificar: cantidad de hijos de una familia

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de hijos de una familia elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"

explicacion: |
  No existe "2,5 hijos" como resultado posible del conteo.
```

### 5 — Clasificar: altura de una persona

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'altura de una persona elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"
  - "Discreta: sólo puede valer números enteros de metros"
respuesta: "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"

explicacion: |
  Siempre existe una medición más precisa posible entre dos alturas
  cualesquiera.
```

### 6 — Clasificar: cantidad de llamadas por hora

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de llamadas que recibe un call center en una hora' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-de-poisson/`.
```

### 7 — Clasificar: tiempo de espera de un colectivo

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿El 'tiempo de espera hasta que llega el próximo colectivo' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"
  - "Discreta: sólo puede valer una cantidad entera de minutos"
respuesta: "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-exponencial/`.
```

### 8 — Enumerar valores: discreta sí, continua no

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "continua"]

respuesta: verdadero
tipo: vf

enunciado: "Los valores posibles de una variable discreta se pueden enumerar uno por uno (aunque sean infinitos), mientras que los de una variable continua no — siempre hay un valor intermedio más preciso entre dos cualesquiera."

explicacion: |
  Esa es la diferencia central entre ambos tipos.
```

### 9 — Para variable discreta, P(X=k) tiene sentido

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria discreta, tiene sentido preguntar directamente P(X = k) (la probabilidad de un valor exacto) y armar una tabla con la probabilidad de cada valor posible."

explicacion: |
  Es exactamente lo que hace `../distribucion-binomial/` con `P(X=k)`.
```

### 10 — Para variable continua, P(X=valor exacto) es cero

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria continua, la probabilidad de que tome un valor EXACTO (por ejemplo, que una persona mida exactamente 1,730000... m) es esencialmente cero — hay que preguntar por intervalos en cambio."

explicacion: |
  Por eso con variables continuas se pregunta P(a ≤ X ≤ b), no
  P(X = un valor puntual).
```

### 11 — Completar: qué reemplaza a P(X=k) en variables continuas

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua", "completar"]

tipo: completar
enunciado: "Completá: para una variable continua, en vez de preguntar por un valor exacto, se pregunta por la probabilidad de que caiga dentro de un ___."
respuestas_validas:
  - "intervalo"
  - "rango"

explicacion: |
  Como "¿cuál es la probabilidad de que el colectivo tarde entre 5 y
  10 minutos?".
```

### 12 — Problema: completar una distribución discreta

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "problema"]

variables:
  p0: uno_de([0.2, 0.3, 0.25])
  p1: uno_de([0.4, 0.45, 0.5])

respuesta: redondear(1 - p0 - p1, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una variable aleatoria discreta X toma los valores 0, 1 y 2, con P(X=0)={p0} y P(X=1)={p1}. Como la suma de todas las probabilidades debe dar 1, ¿cuánto vale P(X=2)?"

pasos:
  - "P(X=2) = 1 − {p0} − {p1} = {redondear(1 - p0 - p1, 2)}"

explicacion: |
  Las probabilidades de todos los valores posibles de una variable
  discreta siempre suman exactamente 1.
```

### 13 — La suma de probabilidades de una variable discreta

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las probabilidades de TODOS los valores posibles de una variable aleatoria discreta siempre da exactamente 1."

explicacion: |
  Porque la variable necesariamente toma alguno de esos valores.
```

### 14 — Ejemplo ya visto de distribución discreta

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable DISCRETA?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
  - "La distribución normal (campana de Gauss)"
respuesta: "La distribución binomial (P(X=k), cantidad de éxitos)"

explicacion: |
  La binomial cuenta un número entero de éxitos — siempre enumerable.
```

### 15 — Ejemplo ya visto de distribución continua

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable CONTINUA?"
tipo: mc
opciones_explicitas:
  - "La distribución normal (campana de Gauss)"
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
respuesta: "La distribución normal (campana de Gauss)"

explicacion: |
  La normal describe una magnitud que puede tomar cualquier valor
  real, no un conteo de éxitos.
```

### 16 — Qué pregunta tiene sentido para variable continua

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

enunciado: "Para el tiempo de espera de un colectivo (variable continua), ¿cuál de estas preguntas tiene sentido hacer?"
tipo: mc
opciones_explicitas:
  - "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"
  - "¿Cuál es la probabilidad de que tarde EXACTAMENTE 7,000000... minutos?"
respuesta: "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"

explicacion: |
  La segunda pregunta, para una variable continua, tiene probabilidad
  esencialmente cero.
```

### 17 — Problema: clasificar cantidad de autos en un peaje

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "La cantidad de autos que pasan por un peaje en una hora, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"
  - "Continua — puede tomar cualquier valor decimal"
respuesta: "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"

explicacion: |
  Contar cuántos autos pasan es siempre un número entero.
```

### 18 — Problema: clasificar tiempo entre llegadas de clientes

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "El tiempo que pasa entre la llegada de un cliente y la del siguiente a un local, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"
  - "Discreta — sólo puede valer una cantidad entera de minutos"
respuesta: "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"

explicacion: |
  El tiempo entre eventos siempre se puede medir con más precisión.
```

### 19 — Por qué conviene clasificar antes de elegir una distribución

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene preguntarse primero 'discreta o continua' antes de elegir qué distribución usar para modelar un problema?"
tipo: mc
opciones_explicitas:
  - "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"
  - "No importa cuál se elija, todas las distribuciones dan el mismo resultado"
  - "Sólo importa para variables continuas, nunca para las discretas"
respuesta: "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"

explicacion: |
  Es el criterio que organiza las cuatro distribuciones de esta cadena
  en dos pares (discretas / continuas).
```

### 20 — Cierre: para qué sirve esta clasificación

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir entre variable aleatoria discreta y continua?"
tipo: mc
opciones_explicitas:
  - "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"
  - "Es sólo una diferencia de vocabulario, sin consecuencias prácticas"
  - "Sólo se usa para clasificar problemas de Física, no de estadística"
respuesta: "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"

explicacion: |
  Es el puente hacia `../distribucion-exponencial/` y
  `../distribucion-de-poisson/`, los dos módulos que siguen.
```
