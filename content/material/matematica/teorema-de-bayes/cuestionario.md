# Matemática — Teorema de Bayes (cuestionario, 20 preguntas VBLang)

> Tema: `D11`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Para qué sirve el teorema de Bayes

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Para qué sirve el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Para 'invertir' una probabilidad condicional conocida (pasar de P(B|A) a P(A|B))"
  - "Para calcular la probabilidad simple de un único evento"
  - "Para sumar las probabilidades de dos eventos excluyentes"
respuesta: "Para 'invertir' una probabilidad condicional conocida (pasar de P(B|A) a P(A|B))"

explicacion: |
  Es la fórmula exacta para pasar de una dirección de la condicional a
  la otra.
```

### 2 — Completar: fórmula del teorema de Bayes

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "completar"]

tipo: completar
enunciado: "Completá: P(A|B) = P(B|A) × P(A) / ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  P(A|B) = P(B|A) × P(A) / P(B).
```

### 3 — Problema: aplicar Bayes directo

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  p_b_dado_a: uno_de([0.8, 0.9])
  p_a: uno_de([0.2, 0.3])
  p_b: uno_de([0.4, 0.5])

respuesta: redondear((p_b_dado_a * p_a) / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(B|A) = {p_b_dado_a}, P(A) = {p_a}, P(B) = {p_b}. ¿Cuál es P(A|B) según el teorema de Bayes?"

pasos:
  - "P(A|B) = ({p_b_dado_a} × {p_a}) / {p_b} = {redondear((p_b_dado_a * p_a) / p_b, 3)}"

explicacion: |
  Se aplica directo la fórmula de Bayes.
```

### 4 — Qué es la probabilidad a priori

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la probabilidad 'a priori' en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "P(A), lo que se sabía sobre A antes de tener la evidencia B"
  - "P(A|B), el resultado final después de aplicar Bayes"
  - "P(B|A), qué tan probable es la evidencia si A fuera cierto"
respuesta: "P(A), lo que se sabía sobre A antes de tener la evidencia B"

explicacion: |
  Es el punto de partida, antes de incorporar evidencia nueva.
```

### 5 — Qué es la probabilidad a posteriori

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la probabilidad 'a posteriori' en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "P(A|B), la probabilidad de A actualizada después de incorporar la evidencia B"
  - "P(A), la probabilidad de A antes de cualquier evidencia"
  - "P(B), la probabilidad total de la evidencia"
respuesta: "P(A|B), la probabilidad de A actualizada después de incorporar la evidencia B"

explicacion: |
  Es el resultado final del teorema: la creencia actualizada.
```

### 6 — Qué es la verosimilitud

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la verosimilitud P(B|A) en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Qué tan probable es observar la evidencia B, si A fuera cierto"
  - "La probabilidad final de A, después de ver la evidencia"
  - "La probabilidad de que A y B ocurran juntos"
respuesta: "Qué tan probable es observar la evidencia B, si A fuera cierto"

explicacion: |
  Es el término que 'conecta' la hipótesis A con la evidencia
  observada B.
```

### 7 — Problema: probabilidad total del test (P(positivo))

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad

respuesta: redondear(sensibilidad * prevalencia + falso_positivo * (1 - prevalencia), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una enfermedad afecta al {prevalencia * 100}% de la población. Un test tiene sensibilidad {sensibilidad * 100}% (P(positivo|enfermo)) y especificidad {especificidad * 100}% (P(negativo|sano)). ¿Cuál es la probabilidad TOTAL de dar positivo, P(positivo), sumando verdaderos y falsos positivos?"

pasos:
  - "P(positivo|sano) = 1 − {especificidad} = {falso_positivo}"
  - "P(positivo) = {sensibilidad}×{prevalencia} + {falso_positivo}×{1 - prevalencia} = {redondear(sensibilidad * prevalencia + falso_positivo * (1 - prevalencia), 4)}"

explicacion: |
  Se suman los dos caminos posibles hacia un resultado positivo:
  venir de un enfermo real, o ser un falso positivo de un sano.
```

### 8 — Problema completo: diagnóstico médico con Bayes

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con prevalencia {prevalencia * 100}%, sensibilidad {sensibilidad * 100}% y especificidad {especificidad * 100}%, si el test da POSITIVO, ¿cuál es la probabilidad real de estar enfermo, P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)} (ya calculado)"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  A pesar de que el test parece muy confiable, el resultado da apenas
  ≈16,7% — la enfermedad es tan rara que los falsos positivos superan
  a los verdaderos positivos.
```

### 9 — La sensibilidad alta no garantiza un posterior alto

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque un test tenga una sensibilidad muy alta (por ejemplo, 99%), si la enfermedad que detecta es muy rara, la probabilidad real de estar enfermo dado un resultado positivo puede ser sorprendentemente baja."

explicacion: |
  Es exactamente lo que muestra el ejemplo del test médico: 99% de
  sensibilidad, pero sólo ≈16,7% de probabilidad real dado positivo.
```

### 10 — Por qué importa la probabilidad a priori

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes"]

enunciado: "¿Por qué es tan importante tener en cuenta la prevalencia (probabilidad a priori) al interpretar un resultado de test positivo?"
tipo: mc
opciones_explicitas:
  - "Porque ignorarla lleva a sobreestimar mucho la probabilidad real de estar enfermo — es el error conocido como 'falacia de la tasa base'"
  - "Porque la prevalencia no tiene ningún efecto real sobre el resultado de Bayes"
  - "Porque sólo importa cuando la enfermedad es muy común, nunca cuando es rara"
respuesta: "Porque ignorarla lleva a sobreestimar mucho la probabilidad real de estar enfermo — es el error conocido como 'falacia de la tasa base'"

explicacion: |
  Es el nombre técnico del error de ignorar P(A) y quedarse sólo con
  la verosimilitud P(B|A).
```

### 11 — Problema: variar la prevalencia

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: uno_de([0.001, 0.01, 0.1])
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con el mismo test (sensibilidad 99%, especificidad 95%), pero ahora con una enfermedad que afecta al {prevalencia * 100}% de la población, ¿cuál es P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)}"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  Cuanto más rara la enfermedad (prevalencia más baja), más chica
  queda la probabilidad real dado un positivo, con el mismo test.
```

### 12 — Aplicación real: filtro de spam

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "aplicacion"]

enunciado: "Un filtro de spam calcula P(spam | el mail contiene la palabra 'ganador'). ¿Qué rol cumple el teorema de Bayes acá?"
tipo: mc
opciones_explicitas:
  - "Permite calcular esa probabilidad a partir de P(la palabra 'ganador' | spam) (más fácil de medir contando mails ya clasificados) y la proporción general de spam"
  - "El teorema de Bayes no se usa en filtros de spam"
  - "Sólo sirve para contar cuántas veces aparece la palabra 'ganador'"
respuesta: "Permite calcular esa probabilidad a partir de P(la palabra 'ganador' | spam) (más fácil de medir contando mails ya clasificados) y la proporción general de spam"

explicacion: |
  Es más fácil medir 'qué tan común es esta palabra EN mails de spam
  ya clasificados' que medir directo 'qué tan probable es que ESTE
  mail sea spam' — Bayes conecta ambas cosas.
```

### 13 — Problema: filtro de spam numérico

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  p_spam: 0.2
  p_palabra_dado_spam: 0.6
  p_palabra_dado_no_spam: 0.05
  p_palabra: p_palabra_dado_spam * p_spam + p_palabra_dado_no_spam * (1 - p_spam)

respuesta: redondear((p_palabra_dado_spam * p_spam) / p_palabra, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "El {p_spam * 100}% de los mails son spam. La palabra 'ganador' aparece en el {p_palabra_dado_spam * 100}% de los mails spam, y sólo en el {p_palabra_dado_no_spam * 100}% de los mails normales. Si un mail contiene 'ganador', ¿cuál es P(spam | contiene 'ganador')?"

pasos:
  - "P(contiene 'ganador') = {p_palabra_dado_spam}×{p_spam} + {p_palabra_dado_no_spam}×{1 - p_spam} = {redondear(p_palabra, 4)}"
  - "P(spam | 'ganador') = ({p_palabra_dado_spam}×{p_spam}) / {redondear(p_palabra, 4)} = {redondear((p_palabra_dado_spam * p_spam) / p_palabra, 3)}"

explicacion: |
  Con esta palabra, la probabilidad de spam sube bastante respecto
  del 20% base — es la lógica detrás de cualquier filtro bayesiano.
```

### 14 — Bayes invierte la dirección de la condicional

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema de Bayes permite calcular P(A|B) a partir de P(B|A) — invierte la dirección de una probabilidad condicional que ya se conoce."

explicacion: |
  Es la utilidad central del teorema: pasar de una dirección de la
  condicional a la otra.
```

### 15 — Problema: otro caso médico, distinta especificidad

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.02
  sensibilidad: 0.95
  especificidad: uno_de([0.9, 0.98])
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con prevalencia 2%, sensibilidad 95% y especificidad {especificidad * 100}%, ¿cuál es P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)}"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  A mayor especificidad (menos falsos positivos), mayor la
  probabilidad real dado un resultado positivo.
```

### 16 — Relación con probabilidad condicional

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "condicional"]

enunciado: "¿De dónde sale la fórmula del teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "De combinar las dos formas de escribir P(A y B) con probabilidad condicional: P(A|B)×P(B) = P(A y B) = P(B|A)×P(A)"
  - "Es un axioma independiente, sin relación con la probabilidad condicional"
  - "Se obtiene sumando P(A) y P(B) directamente"
respuesta: "De combinar las dos formas de escribir P(A y B) con probabilidad condicional: P(A|B)×P(B) = P(A y B) = P(B|A)×P(A)"

explicacion: |
  Igualando ambas expresiones de P(A y B) y despejando P(A|B) se
  obtiene exactamente la fórmula de Bayes.
```

### 17 — Consistencia entre Bayes y el cálculo directo

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "condicional"]

respuesta: verdadero
tipo: vf

enunciado: "El resultado de aplicar el teorema de Bayes para calcular P(A|B) siempre coincide con el cálculo directo P(A y B) / P(B) — son la misma fórmula, escrita de dos formas distintas."

explicacion: |
  Bayes sólo reemplaza P(A y B) por P(B|A)×P(A), que es otra forma
  válida de calcular lo mismo.
```

### 18 — Problema: comparar dos tests con distinta especificidad

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad_a: 0.9
  especificidad_b: 0.99

respuesta: (sensibilidad * prevalencia) / (sensibilidad * prevalencia + (1 - especificidad_a) * (1 - prevalencia)) < (sensibilidad * prevalencia) / (sensibilidad * prevalencia + (1 - especificidad_b) * (1 - prevalencia))
tipo: vf

enunciado: "Test A tiene especificidad {especificidad_a * 100}%; Test B tiene especificidad {especificidad_b * 100}% (ambos con sensibilidad {sensibilidad * 100}% y misma prevalencia {prevalencia * 100}%). ¿P(enfermo|positivo) del Test A es MENOR que la del Test B?"

explicacion: |
  Menos especificidad significa más falsos positivos, lo que diluye
  más la probabilidad real de estar enfermo dado un resultado
  positivo.
```

### 19 — Aplicación: actualizar creencias con evidencia

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "aplicacion"]

enunciado: "¿Cuál es la idea general detrás de usar el teorema de Bayes para 'actualizar creencias'?"
tipo: mc
opciones_explicitas:
  - "Partir de una probabilidad inicial (a priori), incorporar evidencia nueva, y obtener una probabilidad actualizada (a posteriori) que refleja esa evidencia"
  - "Ignorar cualquier información previa y calcular todo desde cero con cada evidencia nueva"
  - "Asumir que la probabilidad de cualquier evento siempre es 50%"
respuesta: "Partir de una probabilidad inicial (a priori), incorporar evidencia nueva, y obtener una probabilidad actualizada (a posteriori) que refleja esa evidencia"

explicacion: |
  Es el patrón general que se repite en diagnóstico médico, filtros
  de spam, y cualquier sistema que aprenda de evidencia.
```

### 20 — Cierre: para qué sirve el teorema de Bayes

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve, en definitiva, el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad real de una causa dado un efecto observado (P(A|B)), a partir de qué tan probable es ese efecto si la causa fuera cierta (P(B|A)) y qué tan común es la causa de por sí (P(A))"
  - "Para calcular la probabilidad de dos eventos independientes ocurriendo a la vez"
  - "Sólo se usa en medicina, no tiene otras aplicaciones"
respuesta: "Para calcular la probabilidad real de una causa dado un efecto observado (P(A|B)), a partir de qué tan probable es ese efecto si la causa fuera cierta (P(B|A)) y qué tan común es la causa de por sí (P(A))"

explicacion: |
  Cierra la cadena de `../probabilidad-condicional/`: de "qué tan
  probable es la evidencia si la hipótesis fuera cierta" a "qué tan
  probable es la hipótesis, dada la evidencia observada".
```
