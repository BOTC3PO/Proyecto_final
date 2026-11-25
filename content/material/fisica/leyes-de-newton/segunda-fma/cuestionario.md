# Física — Segunda ley de Newton: F = m·a (cuestionario, 32 preguntas VBLang)

> Tema: `NEWTON1b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué dice la segunda ley de Newton

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["segunda_ley", "vocabulario"]

enunciado: "¿Qué dice la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "La aceleración de un objeto es directamente proporcional a la fuerza neta, e inversamente proporcional a su masa"
  - "Todo objeto acelera siempre a la misma velocidad, sin importar la fuerza"
  - "La masa de un objeto cambia según la fuerza que se le aplica"
respuesta: "La aceleración de un objeto es directamente proporcional a la fuerza neta, e inversamente proporcional a su masa"

explicacion: |
  Es la relación F = m × a.
```

### 2 — Problema: hallar la aceleración

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([2, 4, 5, 10])
  a_real: uno_de([2, 3, 4, 5])

respuesta: a_real
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza neta de {m * a_real} N actúa sobre un objeto de {m} kg. ¿Cuál es su aceleración?"

pasos:
  - "{m * a_real} ÷ {m} = {a_real} m/s²"

explicacion: |
  a = F / m.
```

### 3 — Problema: hallar la fuerza neta

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([3, 6, 8, 12])
  a: uno_de([2, 3, 4])

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué fuerza neta hace falta para darle una aceleración de {a} m/s² a un objeto de {m} kg?"

pasos:
  - "{m} × {a} = {m * a} N"

explicacion: |
  F = m × a.
```

### 4 — A igual masa, más fuerza da más aceleración

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "A igual masa, aplicar más fuerza neta produce más aceleración."

explicacion: |
  Es la relación directamente proporcional entre fuerza y aceleración.
```

### 5 — A igual fuerza, más masa da menos aceleración

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "A igual fuerza neta aplicada, un objeto con más masa acelera menos que uno con menos masa."

explicacion: |
  Es la relación inversamente proporcional entre masa y aceleración.
```

### 6 — Problema: comparar aceleraciones con la misma fuerza

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  fuerza: uno_de([20, 40, 60])
  masa1: uno_de([2, 4])
  masa2: masa1 * 2

respuesta: verdadero
tipo: vf

enunciado: "La misma fuerza de {fuerza} N se aplica a dos objetos: uno de {masa1} kg y otro de {masa2} kg. ¿Acelera más el de {masa1} kg?"

explicacion: |
  Con menos masa, la misma fuerza produce más aceleración: {fuerza}/{masa1}
  es mayor que {fuerza}/{masa2}.
```

### 7 — Completar: definición del Newton

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["newton_unidad", "completar"]

tipo: completar
enunciado: "Completá: 1 Newton es la fuerza necesaria para darle una aceleración de 1 m/s² a una masa de 1 ___."
respuestas_validas:
  - "kg"
  - "kilogramo"

explicacion: |
  1 N = 1 kg × 1 m/s².
```

### 8 — Unidad de la fuerza

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["newton_unidad", "vocabulario"]

enunciado: "¿Cuál es la unidad de fuerza en el sistema internacional?"
tipo: mc
opciones_explicitas:
  - "El Newton (N)"
  - "El kilogramo (kg)"
  - "El Joule (J)"
respuesta: "El Newton (N)"

explicacion: |
  Se define directamente a partir de la segunda ley de Newton.
```

### 9 — Qué es el peso, según la segunda ley

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "vocabulario"]

enunciado: "¿Qué es el peso de un objeto, en términos de la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Un caso particular de F = m·a, donde la aceleración es la de la gravedad (g)"
  - "Lo mismo que la masa, sólo que en otra unidad"
  - "Una fuerza que no tiene relación con la segunda ley"
respuesta: "Un caso particular de F = m·a, donde la aceleración es la de la gravedad (g)"

explicacion: |
  Peso = m × g.
```

### 10 — Problema: calcular el peso

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "problema"]

variables:
  m: uno_de([3, 5, 7, 8, 10, 12])

respuesta: m * 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el peso de un objeto de {m} kg en la superficie terrestre? (usá g = 10 m/s²)"

pasos:
  - "{m} × 10 = {m * 10} N"

explicacion: |
  Peso = masa × g.
```

### 11 — Problema: hallar la masa dado el peso

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "problema"]

variables:
  m_real: uno_de([4, 6, 9, 15])

respuesta: m_real
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto pesa {m_real * 10} N en la Tierra (g = 10 m/s²). ¿Cuál es su masa?"

pasos:
  - "{m_real * 10} ÷ 10 = {m_real} kg"

explicacion: |
  Se despeja la masa: masa = peso / g.
```

### 12 — Si la fuerza neta es cero, la aceleración es cero

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Según F = m·a, si la fuerza neta sobre un objeto es cero, su aceleración también es cero."

explicacion: |
  Es la conexión directa con la primera ley: sin fuerza neta, no hay
  cambio de velocidad.
```

### 13 — La primera ley es un caso particular de la segunda

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La primera ley de Newton (inercia) es, en el fondo, el caso particular de la segunda ley cuando la fuerza neta es exactamente cero."

explicacion: |
  Con F_neta = 0, la fórmula F=ma da a=0: velocidad constante, la propia
  definición de inercia.
```

### 14 — Problema: peso en la Luna (mención conceptual)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["peso", "vocabulario"]

enunciado: "La gravedad en la Luna es aproximadamente 1/6 de la gravedad terrestre. Un objeto de 60 kg, ¿qué le pasa a su PESO en la Luna, comparado con la Tierra?"
tipo: mc
opciones_explicitas:
  - "Se reduce a aproximadamente 1/6 de su peso en la Tierra"
  - "Se mantiene exactamente igual"
  - "Su masa también se reduce a 1/6"
respuesta: "Se reduce a aproximadamente 1/6 de su peso en la Tierra"

explicacion: |
  Peso = m × g: con g mucho menor, el peso baja proporcionalmente. La
  masa (60 kg) no cambia en ningún lugar.
```

### 15 — Problema: fuerza neta que produce una aceleración negativa (frenado)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([800, 1000, 1200])
  a: uno_de([2, 3, 4])

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "Un auto de {m} kg frena con una desaceleración de {a} m/s². ¿Cuál es la magnitud de la fuerza neta (de frenado) que actúa sobre él?"

pasos:
  - "{m} × {a} = {m * a} N"

explicacion: |
  El cálculo es el mismo, aunque la aceleración esté frenando el auto
  en vez de acelerarlo.
```

### 16 — F = m·a es una relación de proporcionalidad

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "F = m·a describe DOS proporcionalidades a la vez: directa entre fuerza y aceleración, e inversa entre masa y aceleración."

explicacion: |
  Es la forma más completa de leer la segunda ley.
```

### 17 — Problema: duplicar la fuerza

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([4, 5, 10])
  a: uno_de([2, 3])

respuesta: a * 2
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {m * a} N le da a un objeto de {m} kg una aceleración de {a} m/s². Si se DUPLICA la fuerza (manteniendo la misma masa), ¿cuál es la nueva aceleración?"

pasos:
  - "{m * a * 2} ÷ {m} = {a * 2} m/s²"

explicacion: |
  Al duplicar la fuerza con la misma masa, la aceleración también se
  duplica (proporcionalidad directa).
```

### 18 — Problema: duplicar la masa

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([4, 6, 10])
  a: uno_de([2, 4, 6])

respuesta: a / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Una fuerza de {m * a} N le da a un objeto de {m} kg una aceleración de {a} m/s². Si se DUPLICA la masa (manteniendo la misma fuerza), ¿cuál es la nueva aceleración?"

pasos:
  - "{m * a} ÷ {m * 2} = {a / 2} m/s²"

explicacion: |
  Al duplicar la masa con la misma fuerza, la aceleración se reduce a
  la mitad (proporcionalidad inversa).
```

### 19 — Ordenar: pasos para calcular la aceleración

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "ordenar"]

enunciado: "Ordená los pasos para calcular la aceleración de un objeto, conociendo la fuerza neta y la masa."
tipo: ordenar
opciones_explicitas:
  - "Dividir la fuerza neta por la masa"
  - "Identificar la fuerza neta que actúa sobre el objeto"
  - "Identificar la masa del objeto"
respuesta_orden: ["Identificar la fuerza neta que actúa sobre el objeto", "Identificar la masa del objeto", "Dividir la fuerza neta por la masa"]
explicacion: |
  a = F_neta / m.
```

### 20 — La masa en F=ma es siempre la masa total

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "En F = m·a, la masa m es la masa total del objeto que está siendo acelerado."

explicacion: |
  Es un dato fijo del objeto, no algo que varíe según la fuerza
  aplicada.
```

### 21 — Problema: peso de un objeto de masa chica

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["peso", "problema"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el peso de un objeto de 0,5 kg en la Tierra? (usá g = 10 m/s²)"

pasos:
  - "0,5 × 10 = 5 N"

explicacion: |
  Mismo cálculo, con una masa menor a 1 kg.
```

### 22 — La segunda ley predice el movimiento futuro

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "vocabulario"]

enunciado: "¿Para qué sirve, en la práctica, poder calcular la aceleración con F = m·a?"
tipo: mc
opciones_explicitas:
  - "Para predecir cómo se va a mover un objeto, conociendo sólo la fuerza neta y su masa"
  - "Sólo sirve para calcular la masa de objetos ya conocidos"
  - "No tiene ninguna aplicación práctica real"
respuesta: "Para predecir cómo se va a mover un objeto, conociendo sólo la fuerza neta y su masa"

explicacion: |
  Es la fórmula central de la dinámica.
```

### 23 — Problema: fuerza necesaria para el peso en Marte (mención)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["peso", "problema"]

variables:
  m: uno_de([20, 40, 60])
  g_marte: 4

respuesta: m * g_marte
tipo: input
tolerancia_abs: 0

enunciado: "La gravedad en Marte es aproximadamente 4 m/s². ¿Cuál sería el peso de un objeto de {m} kg en Marte?"

pasos:
  - "{m} × 4 = {m * g_marte} N"

explicacion: |
  Mismo cálculo que en la Tierra, sólo que con la gravedad de Marte en
  vez de 10 m/s².
```

### 24 — Sin masa, la fórmula F=ma no tiene sentido

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La segunda ley de Newton, F = m·a, sólo tiene sentido para objetos que tienen masa."

explicacion: |
  Es un principio de la mecánica clásica, pensado para objetos con
  masa.
```

### 25 — Comparar dos fuerzas distintas sobre la misma masa

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([5, 10])
  f1: uno_de([20, 30])
  f2: f1 * 2

respuesta: verdadero
tipo: vf

enunciado: "Sobre un objeto de {m} kg actúan, en dos situaciones distintas, fuerzas de {f1} N y de {f2} N. ¿Es la aceleración en la segunda situación el doble que en la primera?"

explicacion: |
  Con la misma masa, duplicar la fuerza duplica la aceleración.
```

### 26 — Cierre: para qué sirve la segunda ley

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuánto acelera un objeto dado la fuerza neta y su masa, incluyendo el caso particular del peso"
  - "Sólo sirve para calcular masas en el laboratorio"
  - "Sólo aplica a objetos en reposo"
respuesta: "Para calcular cuánto acelera un objeto dado la fuerza neta y su masa, incluyendo el caso particular del peso"

explicacion: |
  Es la fórmula que cuantifica lo que la primera ley sólo describía en
  palabras.
```

### 27 — Calcular la aceleración (a = F / m)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton"
  nivel: "basico"
  tags: ["calculo", "aceleracion"]

variables:
  m: random(2, 20)
  a: random(1, 8)
  F: m * a

respuesta: a
tipo: input
unidad: "m/s²"
tolerancia_abs: 0

enunciado: "Sobre un cuerpo de {m} kg actúa una fuerza neta de {F} N. ¿Qué aceleración adquiere, en m/s²?"

pasos:
  - "De F = m · a despejamos a = F / m."
  - "a = {F} N / {m} kg = {a} m/s²"

explicacion: |
  La aceleración es la fuerza neta dividida por la masa: a más masa, menos aceleración con la misma fuerza.
```

### 28 — Calcular la fuerza (F = m · a)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton"
  nivel: "basico"
  tags: ["calculo", "fuerza"]

variables:
  m: random(50, 1500)
  a: random_float(0.5, 4, 1)

respuesta: m * a
tipo: input
unidad: "N"
tolerancia: 1%

enunciado: "¿Qué fuerza neta hace falta para que un cuerpo de {m} kg acelere a {a} m/s²?"

pasos:
  - "F = m · a"
  - "F = {m} kg × {a} m/s² = {m * a | 1} N"

explicacion: |
  Un newton es la fuerza que le da a 1 kg una aceleración de 1 m/s².
```

### 29 — Calcular la masa (m = F / a)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  m: random(2, 50)
  a: random(1, 5)
  F: m * a

respuesta: m
tipo: input
unidad: "kg"
tolerancia_abs: 0

enunciado: "Una fuerza neta de {F} N le da a un objeto una aceleración de {a} m/s². ¿Cuál es su masa, en kg?"

pasos:
  - "De F = m · a despejamos m = F / a."
  - "m = {F} N / {a} m/s² = {m} kg"

explicacion: |
  Con la fuerza y la aceleración se puede averiguar la masa: es la resistencia del objeto a cambiar su movimiento.
```

### 30 — Fuerza neta con dos fuerzas opuestas

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton"
  nivel: "intermedio"
  tags: ["calculo", "fuerza_neta"]

variables:
  m: random(5, 20)
  a: random(1, 4)
  Fr: random(5, 40)
  F: m * a + Fr

respuesta: a
tipo: input
unidad: "m/s²"
tolerancia_abs: 0

enunciado: "Se empuja una caja de {m} kg con {F} N y el rozamiento la frena con {Fr} N. ¿Qué aceleración tiene la caja, en m/s²?"

pasos:
  - "Fuerza neta: F neta = {F} N − {Fr} N = {F - Fr} N"
  - "a = F neta / m = {F - Fr} N / {m} kg = {a} m/s²"

explicacion: |
  La segunda ley usa la fuerza NETA: la suma de todas las fuerzas, con su sentido.
```

### 31 — Frenar el auto

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton"
  nivel: "intermedio"
  tags: ["calculo", "fuerza", "cotidiano"]

variables:
  m: uno_de([900, 1000, 1200, 1500])
  a: uno_de([3, 4, 5, 6])

respuesta: m * a
tipo: input
unidad: "N"
tolerancia_abs: 0

enunciado: "Un auto de {m} kg frena con una desaceleración de {a} m/s². ¿Qué fuerza neta hacen los frenos, en newtons?"

pasos:
  - "F = m · a (el sentido es contrario al movimiento)."
  - "F = {m} kg × {a} m/s² = {m * a} N"

explicacion: |
  Un auto más pesado necesita más fuerza de frenado para detenerse con la misma desaceleración.
```

### 32 — La misma fuerza, el doble de masa

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton"
  nivel: "intermedio"
  tags: ["proporcionalidad", "calculo"]

variables:
  a: random(2, 10)

respuesta: a / 2
tipo: input
unidad: "m/s²"
tolerancia: 1%

enunciado: "Una fuerza le da a un carrito una aceleración de {a} m/s². Si se le carga el doble de masa y se aplica la misma fuerza, ¿qué aceleración tiene, en m/s²?"

pasos:
  - "Con F fija, a = F / m: la aceleración es inversamente proporcional a la masa."
  - "Si m se duplica, a se divide por 2: {a} / 2 = {a / 2} m/s²"

explicacion: |
  Masa y aceleración son inversamente proporcionales cuando la fuerza no cambia.
```
