# Examen jefe — Maestro de las Leyes y Ondas

> Logro #164. Completaste el examen jefe dominando Newton, la luz y la termodinámica. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **127 preguntas totales** en 5/5 secciones.

---

## Sección: leyes-de-newton/segunda-fma (26 preguntas)

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
respuesta_orden:
  - "Identificar la fuerza neta que actúa sobre el objeto"
  - "Identificar la masa del objeto"
  - "Dividir la fuerza neta por la masa"

explicacion: |
  a = F_neta / m.
```

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

## Sección: leyes-de-newton/tercera-accion-reaccion (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "basico"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "¿Qué dice la tercera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "A toda acción corresponde una reacción de igual magnitud y sentido opuesto, sobre un objeto distinto"
  - "Toda fuerza produce siempre el doble de aceleración en el objeto que la recibe"
  - "Las fuerzas de acción y reacción siempre se cancelan entre sí"
respuesta: "A toda acción corresponde una reacción de igual magnitud y sentido opuesto, sobre un objeto distinto"

explicacion: |
  La condición de "objeto distinto" es la parte que más se olvida.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "¿Cuál es la condición clave del par acción-reacción que más se suele olvidar?"
tipo: mc
opciones_explicitas:
  - "Que las dos fuerzas actúan sobre objetos DISTINTOS, nunca sobre el mismo"
  - "Que las dos fuerzas tienen que tener distinta magnitud"
  - "Que una de las dos fuerzas tiene que ser mayor que la otra"
respuesta: "Que las dos fuerzas actúan sobre objetos DISTINTOS, nunca sobre el mismo"

explicacion: |
  Es la clave para no confundir la tercera ley con el equilibrio de
  fuerzas sobre un mismo objeto.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley"]

respuesta: falso
tipo: vf

enunciado: "Las dos fuerzas de un par acción-reacción actúan siempre sobre el mismo objeto."

explicacion: |
  Actúan siempre sobre dos objetos distintos — es la condición central
  de la tercera ley.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Las dos fuerzas de un par acción-reacción actúan siempre sobre dos objetos distintos."

explicacion: |
  Nunca sobre el mismo objeto.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "Si la acción y la reacción son iguales y opuestas, ¿por qué no se cancelan entre sí, dejando todo inmóvil?"
tipo: mc
opciones_explicitas:
  - "Porque actúan sobre objetos distintos: cada fuerza afecta el movimiento de su propio objeto por separado"
  - "En realidad sí se cancelan siempre, por eso nada se mueve nunca"
  - "Porque la reacción es siempre un poco más chica que la acción"
respuesta: "Porque actúan sobre objetos distintos: cada fuerza afecta el movimiento de su propio objeto por separado"

explicacion: |
  Para que dos fuerzas se cancelen, tienen que actuar sobre el mismo
  objeto — y acá nunca es el caso.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Para que dos fuerzas se cancelen (den fuerza neta cero), tienen que actuar sobre el mismo objeto."

explicacion: |
  Es la razón exacta por la que un par acción-reacción (que actúa sobre
  dos objetos distintos) nunca se cancela.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "Al caminar, ¿cuál es el par acción-reacción que impulsa a la persona hacia adelante?"
tipo: mc
opciones_explicitas:
  - "El pie empuja el piso hacia atrás; el piso empuja el pie hacia adelante"
  - "El aire empuja a la persona desde atrás"
  - "Los músculos de la pierna generan la fuerza sin ninguna reacción externa"
respuesta: "El pie empuja el piso hacia atrás; el piso empuja el pie hacia adelante"

explicacion: |
  La reacción del piso es la que realmente impulsa a la persona.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "Al nadar, ¿cuál es el par acción-reacción que impulsa al nadador hacia adelante?"
tipo: mc
opciones_explicitas:
  - "La mano empuja el agua hacia atrás; el agua empuja la mano (y el cuerpo) hacia adelante"
  - "El nadador flota por su propio peso, sin ninguna reacción del agua"
  - "El agua empuja al nadador hacia abajo"
respuesta: "La mano empuja el agua hacia atrás; el agua empuja la mano (y el cuerpo) hacia adelante"

explicacion: |
  Es el mismo principio que caminar, aplicado al agua en vez del piso.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "¿Cómo se propulsa un cohete, según la tercera ley?"
tipo: mc
opciones_explicitas:
  - "Expulsa gases hacia atrás a gran velocidad; los gases empujan al cohete hacia adelante"
  - "Se empuja contra el aire que lo rodea, como un avión"
  - "No se puede explicar con la tercera ley"
respuesta: "Expulsa gases hacia atrás a gran velocidad; los gases empujan al cohete hacia adelante"

explicacion: |
  Por eso funciona igual en el vacío del espacio.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Un cohete puede propulsarse en el vacío del espacio, sin necesitar 'empujar contra' ningún aire externo."

explicacion: |
  El par acción-reacción es entre el cohete y los gases que expulsa, no
  contra el aire circundante.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "Un libro está apoyado sobre una mesa: su peso lo empuja hacia abajo, y la normal de la mesa lo empuja hacia arriba, con la misma magnitud. ¿Son estas dos fuerzas un par acción-reacción?"
tipo: mc
opciones_explicitas:
  - "No, porque ambas actúan sobre el mismo objeto (el libro)"
  - "Sí, porque son iguales en magnitud y opuestas en sentido"
  - "Sí, porque una es la reacción natural de la otra"
respuesta: "No, porque ambas actúan sobre el mismo objeto (el libro)"

explicacion: |
  Violan la condición central de "objeto distinto": ambas actúan sobre
  el libro.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "En el ejemplo del libro sobre la mesa, tanto el peso como la normal actúan sobre el mismo objeto: el libro."

explicacion: |
  Por eso no son un par acción-reacción, aunque sean iguales y
  opuestas.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "Si el peso y la normal del libro no son un par acción-reacción, ¿por qué terminan siendo iguales en magnitud?"
tipo: mc
opciones_explicitas:
  - "Por la primera ley: el libro está en equilibrio (no acelera), así que la fuerza neta sobre él tiene que ser cero"
  - "Es una coincidencia sin ninguna explicación física"
  - "Porque la tercera ley las obliga a ser iguales, aunque actúen sobre el mismo objeto"
respuesta: "Por la primera ley: el libro está en equilibrio (no acelera), así que la fuerza neta sobre él tiene que ser cero"

explicacion: |
  Es la primera ley (equilibrio), no la tercera, la que explica esa
  igualdad.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "¿Cuál es el verdadero par acción-reacción de la fuerza normal que la mesa ejerce sobre el libro?"
tipo: mc
opciones_explicitas:
  - "El libro empuja hacia abajo sobre la mesa, con la misma magnitud"
  - "El peso del libro"
  - "La fuerza de rozamiento del libro con la mesa"
respuesta: "El libro empuja hacia abajo sobre la mesa, con la misma magnitud"

explicacion: |
  Es el par correcto: libro empuja mesa (acción) ↔ mesa empuja libro,
  la normal (reacción).
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "¿Cuál es el verdadero par acción-reacción del peso del libro (la Tierra atrayéndolo)?"
tipo: mc
opciones_explicitas:
  - "El libro atrae a la Tierra hacia arriba, con la misma magnitud"
  - "La normal de la mesa"
  - "El rozamiento del libro con el aire"
respuesta: "El libro atrae a la Tierra hacia arriba, con la misma magnitud"

explicacion: |
  Es una fuerza gravitatoria mutua: el libro también atrae a la Tierra,
  aunque el efecto sea imperceptible.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "El libro atrae gravitacionalmente a la Tierra con exactamente la misma magnitud de fuerza con la que la Tierra atrae al libro."

explicacion: |
  Es lo que exige la tercera ley para cualquier par de fuerzas
  gravitatorias mutuas.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la fuerza sea igual en magnitud, el efecto de esa fuerza sobre el movimiento de la Tierra es imperceptible, por la enorme masa de la Tierra."

explicacion: |
  Misma fuerza, pero F=m·a: con una masa gigantesca, la aceleración
  resultante es prácticamente cero (ver `../segunda-fma/`).
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "problema"]

variables:
  fuerza: random(20, 100)

respuesta: fuerza
tipo: input
tolerancia_abs: 0

enunciado: "Una persona empuja una pared con una fuerza de {fuerza} N. ¿Con qué magnitud de fuerza empuja la pared a la persona (la reacción)?"

explicacion: |
  Exactamente la misma magnitud, {fuerza} N, en sentido contrario.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "basico"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza de reacción siempre tiene sentido exactamente opuesto a la fuerza de acción."

explicacion: |
  Misma magnitud, sentido contrario, objeto distinto: las tres
  condiciones del par acción-reacción.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "problema"]

variables:
  fuerza: random(50, 150)

respuesta: fuerza
tipo: input
tolerancia_abs: 0

enunciado: "Al caminar, el pie empuja el piso hacia atrás con {fuerza} N. ¿Con qué fuerza empuja el piso al pie hacia adelante?"

explicacion: |
  Misma magnitud que la acción, {fuerza} N.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "ordenar"]

enunciado: "Ordená los pasos para identificar correctamente un par acción-reacción en una escena con varias fuerzas."
tipo: ordenar
opciones_explicitas:
  - "Confirmar que ambas fuerzas actúan sobre objetos distintos, no sobre el mismo"
  - "Elegir una fuerza (la 'acción') y ver sobre qué objeto actúa"
  - "Buscar la fuerza de igual magnitud y sentido opuesto que actúa sobre el OTRO objeto involucrado"
respuesta_orden:
  - "Elegir una fuerza (la 'acción') y ver sobre qué objeto actúa"
  - "Buscar la fuerza de igual magnitud y sentido opuesto que actúa sobre el OTRO objeto involucrado"
  - "Confirmar que ambas fuerzas actúan sobre objetos distintos, no sobre el mismo"

explicacion: |
  El último paso es el que evita el error común del libro y la mesa.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La acción y la reacción ocurren exactamente al mismo tiempo, no una después de la otra."

explicacion: |
  No hay una fuerza "primero" y otra "después": son simultáneas por
  definición.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley", "vocabulario"]

enunciado: "¿Qué tienen en común un avión a reacción y un cohete, en términos de la tercera ley?"
tipo: mc
opciones_explicitas:
  - "Ambos se propulsan expulsando masa (gases) hacia atrás, y reciben una reacción hacia adelante"
  - "Ninguno de los dos usa la tercera ley para moverse"
  - "Sólo el cohete usa la tercera ley; el avión usa un principio distinto"
respuesta: "Ambos se propulsan expulsando masa (gases) hacia atrás, y reciben una reacción hacia adelante"

explicacion: |
  Es el mismo principio de propulsión a reacción.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "intermedio"
  tags: ["tercera_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Sin la reacción del piso (empujando el pie hacia adelante), sería imposible caminar."

explicacion: |
  Es literalmente la fuerza que impulsa el cuerpo hacia adelante.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "avanzado"
  tags: ["tercera_ley", "problema"]

variables:
  fuerza_choque: random(500, 2000)

respuesta: verdadero
tipo: vf

enunciado: "En un choque frontal entre un auto pequeño y un camión, el auto pequeño ejerce sobre el camión una fuerza de {fuerza_choque} N. Según la tercera ley, ¿el camión ejerce esa misma magnitud de fuerza sobre el auto pequeño, sin importar que tengan masas muy distintas?"

explicacion: |
  La tercera ley no depende de las masas: la fuerza es igual en ambos
  sentidos. Lo que sí difiere (por la segunda ley) es cuánto acelera
  cada uno, porque tienen masas distintas.
```

```
metadata:
  materia: "fisica"
  tema: "tercera_ley_newton_accion_reaccion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la tercera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para explicar cómo es posible moverse, nadar o propulsar un cohete: todo empuje viene acompañado de un empuje de vuelta, sobre otro objeto"
  - "Sólo sirve para explicar por qué los objetos en reposo se quedan quietos"
  - "Sólo aplica a fuerzas gravitatorias"
respuesta: "Para explicar cómo es posible moverse, nadar o propulsar un cohete: todo empuje viene acompañado de un empuje de vuelta, sobre otro objeto"

explicacion: |
  Cierra el bloque de las tres leyes de Newton, la base de
  `../../dinamica-fuerzas-concurrentes/`.
```

## Sección: longitud-onda-velocidad-propagacion (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["onda", "definicion"]

tipo: mc
opciones_explicitas: ["La distancia entre dos crestas consecutivas", "La velocidad de la perturbación", "El tiempo que tarda una onda en pasar", "La amplitud máxima de la onda"]

respuesta: "La distancia entre dos crestas consecutivas"

enunciado: "En una onda transversal, la longitud de onda (λ) se define como ___."

explicacion: |
  La longitud de onda es la distancia física entre dos puntos equivalentes consecutivos de una onda, como dos crestas o dos valles.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["proporcionalidad", "formula"]

tipo: vf

enunciado: "Si la frecuencia de una onda se duplica y la velocidad de propagación se mantiene constante, la longitud de onda debe reducirse a la mitad."

respuesta: falso

explicacion: |
  De la fórmula v = λ · f, despejamos λ = v / f. Si la frecuencia aumenta, la longitud de onda disminuye inversamente.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["calculo", "velocidad"]

variables:
  escenario: uno_de([[0.5, 10], [2.0, 20], [5.0, 50]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Una onda tiene una longitud de onda de {escenario[0]} metros y una frecuencia de {escenario[1]} Hz. ¿Cuál es su velocidad de propagación en m/s?"

pasos:
  - "Identificar la longitud de onda (λ): {escenario[0]} m"
  - "Identificar la frecuencia (f): {escenario[1]} Hz"
  - "Aplicar la fórmula v = λ * f"

respuesta: escenario[1

explicacion: |
  Usando la fórmula v = λ * f:
  v = {escenario[0]} m * {escenario[1]} Hz = {escenario[1]} m/s.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

tipo: completar
respuestas_validas: ["m/s", "m/s²", "Hz", "m"]

respuesta: "m/s"

enunciado: "En el Sistema Internacional, la unidad de la velocidad de propagación de una onda es ___."

explicacion: |
  La velocidad es la relación entre la distancia (metros, m) y el tiempo (segundos, s), por lo tanto, su unidad es m/s.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["ordenar", "partes_onda"]

tipo: ordenar
opciones_explicitas: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

respuesta: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

enunciado: "Ordena las partes de una onda de forma descendente, desde el punto más alto hasta el punto más bajo, y vuelve a subir:"

explicacion: |
  La secuencia lógica desde el máximo es: Cresta (máximo) -> Punto de equilibrio (centro) -> Valle (mínimo) -> Cresta (regreso al máximo).
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "v = lambda * f"
tipo: completar
respuestas_validas: ["v = lambda * f", "v = λ * f", "v = lambda * f"]

enunciado: "La velocidad de propagación de una onda ($v$) se define como el producto de la longitud de onda ($\lambda$) por la ___."

explicacion: |
  La relación fundamental para ondas es $v = \lambda \cdot f$, donde $v$ es la velocidad, $\lambda$ la longitud de onda y $f$ la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[0.5, 10, 20], [0.2, 50, 10], [0.8, 5, 40]])

respuesta: datos[escenario][2
tipo: mc
opciones_explicitas: ["100 m/s", "250 m/s", "400 m/s", "500 m/s"]

enunciado: "Una onda tiene una longitud de onda de {datos[escenario][0]} m y una frecuencia de {datos[escenario][1]} Hz. ¿Cuál es su velocidad de propagación?"

pasos:
  - "Identificar los datos: $\lambda = {datos[escenario][0]}$ m y $f = {datos[escenario][1]}$ Hz."
  - "Aplicar la fórmula: $v = \lambda \cdot f$."
  - "Calcular: $v = {datos[escenario][0]} \cdot {datos[escenario][1]} = {datos[escenario][2]}$ m/s."

explicacion: |
  Usando la fórmula $v = \lambda \cdot f$, multiplicamos la longitud de onda por la frecuencia para obtener la velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["despeje"]

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una onda sonora viaja a una velocidad de $340$ m/s y su frecuencia es de $170$ Hz, ¿cuál es su longitud de onda en metros?"

pasos:
  - "Despejar la fórmula original: $\lambda = v / f$."
  - "Sustituir valores: $\lambda = 340 / 170$."
  - "Resultado: $\lambda = 2$ m."

explicacion: |
  Al despejar la longitud de onda, la frecuencia pasa dividiendo al otro lado de la igualdad.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad de una onda se mantiene constante (como en el vacío para la luz) y la frecuencia aumenta, la longitud de onda debe aumentar también."

explicacion: |
  Falso. Si $v$ es constante, $\lambda$ y $f$ son inversamente proporcionales ($\lambda = v/f$). Si la frecuencia aumenta, la longitud de onda disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado"]
tipo: ordenar
opciones_explicitas: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado", "graficar_onda"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de velocidad de onda."

explicacion: |
  Para resolver problemas físicos, primero debemos extraer los datos, elegir la ecuación correcta, realizar la sustitución y finalmente operar matemáticamente.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "conceptos_basicos"]

variables:
  frecuencia: 50.0
  longitud: 2.0

respuesta: "100.0"
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para calcular la velocidad de una onda usando la fórmula $v = \lambda \cdot f$, si la longitud de onda $\lambda$ está en metros (m) y la frecuencia $f$ está en Hertz (Hz), la unidad resultante para la velocidad será ___."

pasos:
  - "Identificar las unidades de los componentes: $\lambda$ [m] y $f$ [1/s]."
  - "Multiplicar las unidades: $m \cdot (1/s) = m/s$."

explicacion: |
  El error común es confundir la unidad de velocidad con la de frecuencia o longitud. La velocidad es la distancia recorrida por la fase de la onda por unidad de tiempo, por lo tanto, se mide en metros por segundo (m/s).
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["relacion_inversa", "ondas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[440.0, 0.75], [220.0, 1.5]]

respuesta: "verdadero"
tipo: completar
enunciado: "En un medio donde la velocidad de propagación es constante, si la frecuencia de una onda se duplica, su longitud de onda se reduce a la mitad. ¿Es esto correcto?"

explicacion: |
  Dado que $v = \lambda \cdot f$ y $v$ es constante, la relación entre $\lambda$ y $f$ es inversamente proporcional. Si $f$ aumenta, $\lambda$ debe disminuir para mantener el producto constante.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["velocidad_fase", "error_comun"]

variables:
  v_onda: 340.0
  f_onda: 170.0

respuesta: "1.75"
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un estudiante afirma que si una onda tiene una frecuencia de {f_onda} Hz y una longitud de onda de 2 metros, su velocidad es de 340 m/s. ¿Cuál es el valor real de la velocidad en m/s?"

pasos:
  - "Aplicar la fórmula $v = \lambda \cdot f$."
  - "Calcular $2 \cdot 170 = 340$."

explicacion: |
  En este caso, el estudiante tenía razón. El error común es olvidar que la velocidad depende de la frecuencia y la longitud de onda simultáneamente; si cambias una sin ajustar la otra, la velocidad cambia.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["simbolos", "definiciones"]

respuesta: "longitud de onda"
tipo: mc

opciones_explicitas: ["frecuencia", "longitud de onda", "amplitud", "periodo"]

enunciado: "En la ecuación de la velocidad de propagación de una onda, el símbolo $\lambda$ representa la ___."

explicacion: |
  Es fundamental distinguir entre $\lambda$ (longitud de onda, distancia entre crestas consecutivas) y $A$ (amplitud, que es la altura de la cresta).
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["despeje", "algebra"]

respuesta: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]
tipo: ordenar

opciones_explicitas: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]

enunciado: "Ordena las fórmulas para despejar cada variable de la ecuación fundamental de la onda, partiendo de la velocidad."

pasos:
  - "La fórmula original es $v = \lambda \cdot f$."
  - "Para despejar $f$, pasamos $\lambda$ dividiendo: $f = v / \lambda$."
  - "Para despejar $\lambda$, pasamos $f$ dividiendo: $\lambda = v / f$."

explicacion: |
  El error común es intentar despejar de forma incorrecta (por ejemplo, intentar pasar una frecuencia restando). Recuerda que en la fórmula original, la frecuencia y la longitud de onda se están multiplicando.
```

```
metadata:
  materia: "fisica"
  tema: "relacion_longitud_frecuencia"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: "inversamente"
tipo: completar
respuestas_validas: ["inversamente", "inversa"]

enunciado: "En una onda de velocidad constante, si la frecuencia aumenta, la longitud de onda debe variar de forma ___ a la frecuencia."

explicacion: |
  Como la velocidad de propagación es $v = \lambda \cdot f$, si la velocidad es constante, la longitud de onda ($\lambda$) y la frecuencia ($f$) son inversamente proporcionales. Si una sube, la otra baja.
```

```
metadata:
  materia: "fisica"
  tema: "velocidad_propagacion"
  nivel: "intermedio"
  tags: ["ondas", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[300, 10, 3000], [340, 500, 170000]]

respuesta: uno_de(datos[escenario_idx][2])
tipo: mc
opciones_explicitas: ["300", "3000", "340", "170000"]

enunciado: "Considera el siguiente caso: una onda tiene una longitud de onda de {datos[escenario_idx][0]} metros y una frecuencia de {datos[scenario_idx][1]} Hz. ¿Cuál es su velocidad de propagación?"

pasos:
  - "Identificar la longitud de onda ($\lambda$): {datos[escenario_idx][0]} m"
  - "Identificar la frecuencia ($f$): {datos[escenario_idx][1]} Hz"
  - "Aplicar la fórmula $v = \lambda \cdot f$"

explicacion: |
  Utilizando la fórmula $v = \lambda \cdot f$:
  Caso 1: $300 \cdot 10 = 3000$ m/s.
  Caso 2: $340 \cdot 500 = 170000$ m/s.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "basico"
  tags: ["conceptos", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la velocidad de propagación de una onda una propiedad que depende exclusivamente del medio por el cual se desplaza (y no de la frecuencia de la fuente) en un medio no dispersivo?"

explicacion: |
  En un medio no dispersivo (como el vacío para la luz), la velocidad de propagación es constante para todas las frecuencias. En medios dispersivos, la velocidad sí puede depender de la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "componentes_ecuacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

enunciado: "En la ecuación de la velocidad de propagación $v = \lambda \cdot f$, el término $f$ representa la ___."

explicacion: |
  La letra $f$ representa la frecuencia, que es el número de ciclos por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "relacion_magnitudes"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta: ["frecuencia", "velocidad", "longitud_onda"]
tipo: ordenar
opciones_explicitas: ["frecuencia", "velocidad", "longitud_onda"]

enunciado: "Ordena las siguientes magnitudes de menor a mayor, considerando una onda de sonido en el aire con una frecuencia de 440 Hz (una nota musical):"

pasos:
  - "Estimar la frecuencia ($f$): 440 Hz"
  - "Estimar la velocidad ($v$): ~340 m/s"
  - "Estimar la longitud de onda ($\lambda = v/f$): ~0.77 m"

explicacion: |
  Para una onda de sonido estándar:
  1. La frecuencia es 440 (valor numérico).
  2. La velocidad es ~340 m/s.
  3. La longitud de onda es ~0.77 m.
  *Nota: El orden se basa en la magnitud de los valores numéricos resultantes en unidades SI para este escenario específico.*
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "longitud_onda"]

variables:
  escenario: uno_de([[130, 0.5, 260], [440, 1.0, 440], [256, 2.0, 128]])
  v_sonido: 340

respuesta: escenario[idx][0] / (escenario[idx][1] * escenario[idx][2])
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un músico toca una nota cuya frecuencia es de {escenario[idx][1]} Hz. Si la velocidad del sonido en el aire es de {v_sonido} m/s, ¿cuál es la longitud de onda λ en metros?"

pasos:
  - "Identificar la fórmula de velocidad: v = λ · f"
  - "Despejar la longitud de onda: λ = v / f"
  - "Sustituir los valores: λ = {v_sonido} / {escenario[idx][1]}"

explicacion: |
  La longitud de onda se calcula dividiendo la velocidad de propagación por la frecuencia: λ = v / f.
  Para este caso: {v_sonido} / {escenario[idx][1]} = {redondear(v_sonido / escenario[idx][1], 2)} m.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["radio", "electromagnetismo"]

variables:
  datos: [[100000000, 3.0e8, 3.0], [50000000, 3.0e8, 6.0], [1000000000, 3.0e8, 0.3]]
  idx: uno_de([0, 1, 2])
  frecuencia: datos[idx][0]
  velocidad: datos[idx][1]
  lambda_correcta: datos[idx][2]

respuesta: lambda_correcta
tipo: mc
opciones_explicitas: ["0.3 m", "3.0 m", "30.0 m", "300.0 m"]

enunciado: "Una antena de radio emite una señal con una frecuencia de {frecuencia} Hz. Si la señal viaja a la velocidad de la luz ({velocidad} m/s), ¿cuál es la longitud de onda de la radiación?"

explicacion: |
  Usando λ = v / f:
  λ = {velocidad} / {frecuencia} = {lambda_correcta} m.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si la frecuencia de una onda aumenta pero su velocidad de propagación se mantiene constante, la longitud de onda λ debe disminuir."

explicacion: |
  Dado que v = λ · f, la frecuencia y la longitud de onda son inversamente proporcionales para una velocidad constante. Si f aumenta, λ disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["oceanografia", "calculo"]

variables:
  caso: uno_de([[0.5, 12, 6], [2.0, 10, 5], [0.2, 15, 75]])
  v_onda: caso[idx][1]
  f_onda: caso[idx][0]
  l_onda: caso[idx][2]

respuesta: l_onda
tipo: completar
respuestas_validas: [6.0, 5.0, 75.0]

enunciado: "En un estudio oceanográfico se observa una onda con una frecuencia de {f_onda} Hz que se desplaza a una velocidad de {v_onda} m/s. La longitud de onda medida es de ___ m."

explicacion: |
  Aplicando la relación λ = v / f:
  λ = {v_onda} / {f_onda} = {l_onda} m.
```

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Dividir la velocidad por la frecuencia", "Multiplicar la velocidad por la frecuencia", "Sumar la velocidad y la frecuencia", "Dividir la frecuencia por la velocidad"]

respuesta: "Dividir la velocidad por la frecuencia"
tipo: mc

enunciado: "Para hallar la longitud de onda (λ) conociendo la velocidad (v) y la frecuencia (f), el procedimiento matemático correcto es:"

explicacion: |
  Partiendo de la fórmula v = λ · f, despejamos λ pasando la frecuencia a dividir al otro lado de la igualdad: λ = v / f.
```

## Sección: luz-onda-espectro-electromagnetico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "luz", "electromagnetismo"]

tipo: mc
opciones_explicitas: ["Ondas de radio", "Rayos X", "Luz visible", "Ondas de radio, microondas, infrarrojo, luz visible, UV, rayos X, rayos gamma"]

enunciado: "El espectro electromagnético es el conjunto de todas las posibles frecuencias de radiación. ¿Cuál de las siguientes opciones describe correctamente el orden de las ondas desde las de menor energía a las de mayor energía?"

respuesta: "Ondas de radio, microondas, infrarrojo, luz visible, UV, rayos X, rayos gamma"

explicacion: |
  El espectro electromagnético se organiza según la frecuencia y la energía. Las ondas de radio tienen la longitud de onda más larga y menor energía, mientras que los rayos gamma tienen la frecuencia más alta y mayor energía.
```

```
metadata:
  materia: "fisica"
  tema: "naturaleza_onda"
  nivel: "basico"
  tags: ["onda", "electromagnetismo"]

tipo: vf
respuesta: falso

enunciado: "La luz es una onda mecánica que requiere de un medio material (como el aire o el agua) para poder propagarse."

explicacion: |
  Falso. La luz es una onda electromagnética, lo que significa que no necesita un medio material para viajar; puede propagarse en el vacío.
```

```
metadata:
  materia: "fisica"
  tema: "luz_visible"
  nivel: "basico"
  tags: ["color", "espectro"]

variables:
  colores: ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"]
  idx: uno_de([0,1,2,3,4,5,6])

tipo: completar
respuestas_validas: ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"]
respuesta: colores[idx

enunciado: "En el espectro de la luz visible, el color que se encuentra en el extremo de las longitudes de onda más largas es el color ___."

explicacion: |
  El color {colores[idx]} tiene la longitud de onda más larga en el espectro visible, situándose en el extremo rojo.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "intermedio"
  tags: ["frecuencia", "longitud_de_onda"]

tipo: mc
opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No existe relación", "Depende del medio"]

enunciado: "En una onda electromagnética, la relación entre la frecuencia ($f$) y la longitud de onda ($\lambda$) es:"

respuesta: "Inversamente proporcional"

explicacion: |
  Dado que la velocidad de la luz $c = \lambda \cdot f$ es constante en el vacío, si la frecuencia aumenta, la longitud de onda debe disminuir para mantener la igualdad.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["orden", "espectro"]

tipo: ordenar
opciones_explicitas: ["Infrarrojo", "Luz visible", "Ultravioleta", "Rayos X"]
respuesta: ["Infrarrojo", "Luz visible", "Ultravioleta", "Rayos X"]

enunciado: "Ordene las siguientes radiaciones de menor frecuencia a mayor frecuencia:"

explicacion: |
  El orden correcto de menor a mayor frecuencia es: Infrarrojo, Luz visible, Ultravioleta y finalmente Rayos X.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["ondas", "luz", "calculo"]

variables:
  c: c
  f: 5.0e14

respuesta: c / f
tipo: completar
tolerancia_abs: 1e6

enunciado: "Si una onda electromagnética tiene una frecuencia de {f} Hz, ¿cuál es su longitud de onda en metros? (Usa la velocidad de la luz c = {c} m/s)"

pasos:
  - "Identificar la relación fundamental: c = λ * f"
  - "Despejar la longitud de onda: λ = c / f"
  - "Sustituir los valores: λ = 3.0e8 / 5.0e14"

explicacion: |
  La longitud de onda (λ) se calcula dividiendo la velocidad de la luz (c) por la frecuencia (f). 
  Para f = 5.0e14 Hz, λ = 6.0e-7 m (o 600 nm), que corresponde al color naranja en el espectro visible.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["espectro", "teoria"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Rayos X", "frecuencias muy altas y alta energía", "longitudes de onda muy cortas"], ["Ondas de radio", "frecuencias muy bajas y baja energía", "longitudes de onda muy largas"], ["Luz visible", "frecuencias intermedias", "longitudes de onda intermedias"]]

respuesta: datos[idx][0
tipo: mc
opciones_explicitas: ["Rayos X", "Ondas de radio", "Luz visible"]

enunciado: "De acuerdo a la escala del espectro electromagnético, ¿cuál de las siguientes categorías tiene {datos[idx][2]}?"

explicacion: |
  El espectro se organiza según la energía: a mayor frecuencia, menor longitud de onda. 
  Las {datos[idx][0]} se caracterizan por tener {datos[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ordenar", "espectro"]

respuesta: ["Ondas de radio", "Luz visible", "Rayos gamma"]
tipo: ordenar
opciones_explicitas: ["Rayos gamma", "Luz visible", "Ondas de radio"]

enunciado: "Ordena las siguientes ondas de mayor longitud de onda a menor longitud de onda:"

explicacion: |
  Las ondas de radio tienen las longitudes de onda más largas (metros/kilómetros), 
  seguidas por la luz visible (nanómetros) y finalmente los rayos gamma (picómetros).
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["teoria", "velocidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es verdadero o falso que todas las ondas del espectro electromagnético (desde radio hasta gamma) viajan a la misma velocidad en el vacío?"

explicacion: |
  Es falso. Todas las ondas electromagnéticas viajan a la misma velocidad (c) en el VACÍO. 
  Sin embargo, la pregunta se refiere a la naturaleza de la constante c en el vacío, que es universal para todo el espectro.
  *Nota: En el vacío la velocidad es constante, pero la pregunta busca evaluar la comprensión de la constante universal.*
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["cuantica", "energia", "fotón"]

variables:
  h: h
  f: 6.0e15

respuesta: h * f
tipo: completar
tolerancia_abs: 1e-20

enunciado: "Calcula la energía (en Joules) de un fotón de luz violeta con una frecuencia de {f} Hz. (Usa la constante de Planck h = {h} J·s)"

pasos:
  - "Usar la ecuación de Planck: E = h * f"
  - "Sustituir h = 6.626e-34 y f = 6.0e15"
  - "E = 6.626e-34 * 6.0e15"

explicacion: |
  La energía de un fotón es directamente proporcional a su frecuencia según la fórmula E = h * f.
  Para una frecuencia de 6.0e15 Hz, la energía es aproximadamente 3.9756e-18 J.
```

```
metadata:
  materia: "fisica"
  tema: "onda_electromagnetica"
  nivel: "basico"
  tags: ["luz", "vacío", "propagación"]

respuesta: verdadero
tipo: vf

enunciado: "La luz puede propagarse a través del vacío sin necesidad de un medio material (como el aire o el agua)."

explicacion: |
  A diferencia de las ondas mecánicas (como el sonido), las ondas electromagnéticas como la luz consisten en campos eléctricos y magnéticos oscilantes que se auto-propagan en el vacío.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["orden", "espectro", "longitud_de_onda"]

variables:
  orden_idx: uno_de([0, 1])

opciones_explicitas:
  - ["Ondas de radio", "Microondas", "Luz visible", "Rayos X"]
  - ["Rayos X", "Luz visible", "Microondas", "Ondas de radio"]

respuesta: ["Ondas de radio", "Microondas", "Luz visible", "Rayos X"]
tipo: ordenar

enunciado: "Ordena las siguientes radiaciones de la que tiene mayor longitud de onda a la que tiene menor longitud de onda:"

pasos:
  - "Identifica la radiación con mayor longitud de onda (menor frecuencia)."
  - "Identifica la radiación con menor longitud de onda (mayor frecuencia)."

explicacion: |
  En el espectro electromagnético, la longitud de onda es inversamente proporcional a la energía. Las ondas de radio tienen longitudes de onda kilométricas, mientras que los rayos X tienen longitudes de onda atómicas.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["velocidad", "luz", "vacío"]

variables:
  datos: [["menor"], ["menor"]]
  idx: uno_de([0])

enunciado: "Si la luz viaja por un medio transparente como el vidrio, su velocidad es ___ que la velocidad de la luz en el vacío ($c$)."

opciones_explicitas:
  - "mayor"
  - "menor"

respuesta: datos[idx][0]
tipo: mc

explicacion: |
  Aunque la luz viaja a su velocidad máxima en el vacío, al interactuar con los átomos de un medio material (como el vidrio o el agua), su velocidad efectiva disminuye. Esto es lo que da origen al índice de refracción.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["color", "visible", "frecuencia"]

variables:
  datos: [["rojo", "violeta"], ["rojo", "violeta"]]
  idx: uno_de([0, 1])

enunciado: "Dentro del espectro visible, el color que posee la mayor frecuencia (y por lo tanto la mayor energía por fotón) es el ___."

opciones_explicitas:
  - "rojo"
  - "violeta"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El espectro visible va desde el rojo (baja frecuencia, larga longitud de onda) hasta el violeta (alta frecuencia, corta longitud de onda).
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["frecuencia", "energía", "rayos_gamma"]

variables:
  datos: [["alta", "alta"], ["baja", "baja"]]
  idx: uno_de([0, 1])

enunciado: "Los rayos gamma tienen una frecuencia extremadamente ___ que la luz visible, lo que les permite ser altamente ionizantes."

opciones_explicitas:
  - "alta"
  - "baja"

respuesta: datos[idx][0]
tipo: mc

explicacion: |
  La energía de un fotón es directamente proporcional a su frecuencia ($E = h \cdot f$). Por eso, los rayos gamma, al tener frecuencias altísimas, tienen una energía capaz de arrancar electrones de los átomos.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "energia", "espectro"]

respuesta: "rayos_gamma"
tipo: completar
respuestas_validas: ["rayos_gamma"]

enunciado: "En el espectro electromagnético, mientras que las ondas de radio tienen longitudes de onda muy largas, los ___ poseen las longitudes de onda más cortas y la mayor energía."

explicacion: |
  La energía de un fotón es inversamente proporcional a su longitud de onda ($E = hc/\lambda$). Por lo tanto, a menor longitud de onda, mayor energía.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["luz_visible", "color", "frecuencia"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["rojo", "frecuencia baja"],
    ["azul", "frecuencia alta"],
    ["verde", "frecuencia media"]
  ]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["frecuencia baja", "frecuencia alta", "frecuencia media"]

enunciado: "Si comparamos la luz visible con el resto del espectro, el color {datos[idx][0]} se caracteriza por tener una {datos[idx][1]} en comparación con el color azul."

explicacion: |
  El espectro visible es una pequeña franja. El rojo tiene la longitud de onda más larga (menor frecuencia) y el violeta/azul la más corta (mayor frecuencia).
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "propagacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que las ondas electromagnéticas, como la luz, requieren de un medio material (como el aire o el agua) para propagarse, a diferencia de las ondas mecánicas?"

explicacion: |
  Falso. Las ondas electromagnéticas se propagan en el vacío debido a la oscilación de campos eléctricos y magnéticos acoplados, mientras que las mecánicas (como el sonido) sí requieren un medio.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["orden", "espectro"]

respuesta: ["ondas_radio", "microondas", "infrarrojo", "luz_visible", "ultravioleta", "rayos_x", "rayos_gamma"]
tipo: ordenar
opciones_explicitas: ["ondas_radio", "microondas", "infrarrojo", "luz_visible", "ultravioleta", "rayos_x", "rayos_gamma"]

enunciado: "Ordene las siguientes radiaciones de MENOR a MAYOR frecuencia:"

explicacion: |
  La frecuencia aumenta a medida que la longitud de onda disminuye en el espectro electromagnético.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["luz_visible", "espectro"]

variables:
  idx: uno_de([0, 1])
  limites: [
    ["infrarrojo", "longitud de onda mayor"],
    ["ultravioleta", "longitud de onda menor"]
  ]

respuesta: limites[idx][1
tipo: mc
opciones_explicitas: ["longitud de onda mayor", "longitud de onda menor"]

enunciado: "La luz visible es el rango que el ojo humano puede detectar. El límite que se encuentra por encima del violeta (hacia el ___ ) se define por tener una {limites[idx][1]}."

explicacion: |
  El ultravioleta tiene frecuencias más altas y longitudes de onda más cortas que el límite superior del espectro visible.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["luz_visible", "infrarrojo", "tecnologia"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["infrarrojo", "luz visible"], ["ultravioleta", "luz visible"]]
  frecuencia_hz: [3e12, 5e14]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["infrarrojo", "luz visible", "ultravioleta", "rayos x"]

enunciado: "Un control remoto de televisión emite una radiación que no es perceptible para el ojo humano, situándose por debajo de la frecuencia de la {datos[escenario_idx][0]}. ¿Qué tipo de radiación es?"

explicacion: |
  El control remoto utiliza luz infrarroja, la cual tiene una longitud de onda mayor y una frecuencia menor que la luz visible.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["ultravioleta", "ionizante", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "La radiación ultravioleta tiene una energía mayor que la luz visible y puede ser ionizante, lo que significa que tiene suficiente energía para arrancar electrones de los átomos."

explicacion: |
  Verdadero. Los fotones UV tienen suficiente energía para romper enlaces químicos y causar daños en el ADN, por eso se consideran radiación ionizante.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["rayos_gamma", "frecuencia", "energia"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["rayos gamma", "1e22"], ["rayos x", "1e18"]]

respuesta: casos[caso_idx][1
tipo: completar
respuestas_validas: ["1e22", "1e18"]

enunciado: "En un experimento de física nuclear, se detecta una radiación con una frecuencia extremadamente alta de ___ Hz, lo cual corresponde a la categoría de {casos[caso_idx][0]}."

explicacion: |
  Los rayos gamma poseen las frecuencias más altas del espectro electromagnético, superando con creces a los rayos X.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["orden", "espectro", "frecuencia"]

respuesta: ["radio", "microondas", "infrarrojo", "luz visible", "ultravioleta", "rayos gamma"]
tipo: ordenar
opciones_explicitas: ["radio", "microondas", "infrarrojo", "luz visible", "ultravioleta", "rayos gamma"]

enunciado: "Ordena las siguientes radiaciones de menor a mayor frecuencia (de la onda más larga a la más corta):"

explicacion: |
  El espectro aumenta su frecuencia (y disminuye su longitud de onda) siguiendo el orden: Radio < Microondas < Infrarrojo < Visible < UV < Rayos X < Gamma.
```

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["luz_visible", "color", "frecuencia"]

variables:
  color_idx: uno_de([0,1])
  colores: [["rojo", "baja"], ["azul", "alta"]]

respuesta: colores[color_idx][1
tipo: mc
opciones_explicitas: ["baja", "alta", "media", "nula"]

enunciado: "Si un observador percibe un color de color {colores[color_idx][0]}, está viendo una parte del espectro visible con una frecuencia {colores[color_idx][1]} en comparación al color {colores[1-color_idx][0]}."

explicacion: |
  En el espectro visible, el rojo tiene la longitud de onda más larga (frecuencia más baja) y el violeta/azul la más corta (frecuencia más alta).
```

## Sección: maquina-termica-termodinamica-nivel2 (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "carnot", "eficiencia"]

variables:
  temp_caliente: uno_de([600, 800, 1000])
  temp_fria: 300

respuesta: (temp_caliente / (temp_caliente + temp_fria)) * 100

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una máquina térmica opera entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_fria} K. Si la máquina opera bajo un ciclo de Carnot, ¿cuál es su eficiencia térmica expresada en porcentaje (%)?"

pasos:
  - "Calcular la eficiencia de Carnot usando la fórmula: η = 1 - (T_fria / T_caliente)"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia máxima teórica de una máquina térmica está limitada por la diferencia de temperaturas entre las fuentes, según el ciclo de Carnot.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["primera_ley", "calor", "trabajo"]

opciones_explicitas: ["W = Q_H - Q_C", "W = Q_H + Q_C", "W = Q_H / Q_C", "W = Q_C - Q_H"]

respuesta: "W = Q_H - Q_C"

tipo: mc

enunciado: "Según la primera ley de la termodinámica aplicada a una máquina térmica en ciclo, ¿cuál es la expresión que relaciona el trabajo neto (W) con el calor absorbido de la fuente caliente (Q_H) y el calor cedido a la fuente fría (Q_C)?"

explicacion: |
  En un ciclo, la variación de la energía interna es cero, por lo que el calor neto absorbido es igual al trabajo neto realizado por la máquina.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["energia", "calor", "trabajo"]

variables:
  calor_absorbido: uno_de([5000, 8000, 12000])
  eficiencia: 0.25

respuesta: calor_absorbido * eficiencia

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una máquina térmica absorbe {calor_absorbido} J de calor de una fuente caliente. Si su eficiencia térmica es del {eficiencia * 100}%, ¿cuánto trabajo mecánico (W) realiza la máquina?"

explicacion: |
  El trabajo realizado es el producto de la energía térmica absorbida por la eficiencia del dispositivo: W = Q_H * η.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["historia", "componentes", "vapor"]

opciones_explicitas: ["Caldera", "Condensador", "Cilindro", "Pistón"]

respuesta: ["Caldera", "Cilindro", "Pistón", "Condensador"]

tipo: ordenar

enunciado: "Ordene los componentes de una máquina de vapor clásica siguiendo el flujo lógico de la energía: desde la generación de vapor hasta la liberación de calor al ambiente."

explicacion: |
  El vapor se genera en la caldera, expande en el cilindro moviendo el pistón, y finalmente el vapor residual se enfría en el condensador.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["entropia", "segundo_principio", "irreversibilidad"]

opciones_explicitas: ["aumento", "disminución", "constancia", "cero"]

respuesta: "aumento"

tipo: mc

enunciado: "En una máquina térmica real (no ideal), debido a las fricciones y las transferencias de calor irreversibles, la entropía total del universo experimenta un/a ___."

explicacion: |
  El segundo principio de la termodinámica establece que en cualquier proceso real e irreversible, la entropía total del sistema más el entorno siempre aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: uno_de([
    [1000, 300],
    [800, 200],
    [500, 150]
  ])

enunciado: "Una máquina térmica opera entre una fuente caliente a {escenario[0]} K y una fuente fría a {escenario[1]} K. Calcula la eficiencia máxima teórica (eficiencia de Carnot) de esta máquina."

pasos:
  - "Calcular la temperatura de la fuente caliente (Th) y la fuente fría (Tc)."
  - "Aplicar la fórmula de la eficiencia de Carnot: η = 1 - (Tc / Th)."

respuesta: 1 - (escenario[1] / escenario[0])
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es la eficiencia máxima posible para cualquier máquina térmica que opere entre dos temperaturas. Se calcula como η = 1 - (T_fria / T_caliente).
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "energia"]

opciones_explicitas: ["Q_caliente", "Q_fria", "W_trabajo"]

enunciado: "En un ciclo termodinámico de una máquina térmica, el calor que se absorbe de la fuente de alta temperatura se denomina ___."

respuesta: "Q_caliente"
tipo: mc

explicacion: |
  El proceso comienza con la absorción de calor de una fuente caliente para realizar trabajo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "primer_ley"]

variables:
  datos: uno_de([
    [500, 150],
    [1000, 400],
    [250, 50]
  ])

enunciado: "Una máquina térmica absorbe {datos[0]} J de calor de una fuente caliente y realiza un trabajo de {datos[1]} J. ¿Cuánta energía se libera como calor a la fuente fría?"

respuesta: datos[0] - datos[1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Según la primera ley de la termodinámica para un ciclo, el calor neto es igual al trabajo neto: Q_h - Q_c = W. Por lo tanto, Q_c = Q_h - W.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, la eficiencia de una máquina térmica real es siempre ___ que la eficiencia de una máquina de Carnot."

opciones_explicitas: ["menor", "igual", "mayor"]

respuesta: "menor"
tipo: mc

explicacion: |
  La segunda ley establece que es imposible convertir todo el calor absorbido en trabajo; siempre habrá una parte de energía que se degrade y se entregue a la fuente fría.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "ciclo"]

opciones_explicitas: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]

enunciado: "Ordena las etapas típicas de un ciclo de una máquina térmica desde que recibe energía hasta que completa su ciclo:"

respuesta: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]
tipo: ordenar

explicacion: |
  El ciclo consiste en: 1. Absorber calor de la fuente caliente, 2. Realizar trabajo mediante la expansión del fluido, 3. Rechazar el calor sobrante a la fuente fría.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "eficiencia", "calor"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Una máquina térmica absorbe 1000 J de calor y realiza 400 J de trabajo.", "400"],
    ["Un motor absorbe 500 J de calor y entrega 200 J de trabajo.", "200"]
  ])

enunciado: "Según la segunda ley de la termodinámica, la eficiencia de una máquina térmica se define como el trabajo útil dividido por el calor absorbido. En el caso de {escenario[idx][0]}, ¿cuánto trabajo se realizó?"

respuesta: escenario[idx][1
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  La eficiencia es $\eta = W / Q_{in}$. En el primer caso: $400/1000 = 0.4$ (40%). En el segundo: $200/500 = 0.4$ (40%). Siempre hay una parte del calor que no se convierte en trabajo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["segunda_ley", "entropia"]

opciones_explicitas: ["Se convierte totalmente en trabajo", "Se transfiere a un foco frío como calor residual", "Se transforma en energía potencial", "Se destruye por la fricción"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un ciclo termodinámico, la energía que no se transforma en trabajo debe ser..."

respuesta: "Se transfiere a un foco frío como calor residual"
tipo: mc

explicacion: |
  Es imposible convertir todo el calor absorbido en trabajo. Una parte del calor debe ser expulsada a un foco de menor temperatura para completar el ciclo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "avanzado"
  tags: ["carnot", "eficiencia_maxima"]

variables:
  temp_caliente: 600
  temp_frio: 300

enunciado: "Considerando una máquina de Carnot operando entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_frio} K, ¿cuál es su eficiencia máxima teórica?"

pasos:
  - "Calcular la temperatura absoluta en Kelvin."
  - "Aplicar la fórmula de eficiencia de Carnot: $\eta = 1 - (T_{frio} / T_{caliente})$."

respuesta: 0.5
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es $\eta = 1 - (300/600) = 1 - 0.5 = 0.5$ (50%). Incluso en el caso ideal de Carnot, la eficiencia es menor a 1 (100%) si $T_{frio} > 0$.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["conceptos", "leyes"]

opciones_explicitas: ["Calor", "Trabajo", "Temperatura", "Entropía"]

enunciado: "Para que una máquina térmica funcione, es necesario que exista un flujo de ___ desde un cuerpo caliente a uno frío."

respuesta: "Calor"
tipo: mc

explicacion: |
  La transferencia de calor es el motor del proceso; sin un gradiente de temperatura que permita el flujo de calor, no se puede realizar trabajo cíclicamente.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "imposibilidad"]

respuestas_validas: ["imposible", "falso"]

enunciado: "Es físicamente ___ construir una máquina térmica que tenga una eficiencia del 100%."

respuesta: "imposible"
tipo: completar

explicacion: |
  La segunda ley de la termodinámica (Enunciado de Kelvin-Planck) establece que es imposible construir un dispositivo que opere en un ciclo y que produzca solamente trabajo a partir de un solo depósito de calor.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "historia_ciencia", "watt"]

variables:
  escenario: uno_de([
    ["Máquina de Newcomen", "calentaba y enfriaba el cilindro en cada ciclo", "causaba una pérdida masiva de energía térmica al enfriar el cilindro"],
    ["Máquina de Watt", "mantenía el cilindro caliente y usaba un condensador separado", "permitía que el cilindro permaneciera a la temperatura del vapor"]
  ])

enunciado: "En la máquina de Newcomen, el principal problema de eficiencia era que el {escenario[0]}."

respuesta: escenario[2
tipo: mc
opciones_explicitas: ["calentaba y enfriaba el cilindro en cada ciclo", "mantenía el cilindro caliente y usaba un condensador separado", "causaba una pérdida masiva de energía térmica al enfriar el cilindro"]

explicacion: |
  James Watt introdujo el condensador separado para evitar que el cilindro principal se enfriara en cada ciclo, lo que ahorraba una cantidad enorme de energía y permitía un uso industrial continuo.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["eficiencia", "termodinamica", "calor"]

variables:
  valor_eficiencia: uno_de([
    [0.05, "5%"],
    [0.12, "12%"],
    [0.25, "25%"]
  ])

enunciado: "Si una máquina térmica industrial de la era de Watt tiene una eficiencia térmica de {valor_eficiencia[1]}, esto significa que solo una parte del calor absorbido se convierte en trabajo. El valor decimal es ___."

respuestas_validas: ["0.12"]
tipo: completar

explicacion: |
  La eficiencia térmica es la relación entre el trabajo útil obtenido y el calor suministrado. Un valor de 0.12 representa un 12% de eficiencia.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "basico"
  tags: ["componentes", "watt", "vapor"]

enunciado: "Ordena los componentes de una máquina de vapor de Watt según el flujo de energía desde la fuente de calor hasta el trabajo mecánico:"

pasos:
  - "Generación de vapor por combustión"
  - "Expansión del vapor en el cilindro"
  - "Condensación en el condensador separado"
  - "Movimiento del pistón/émbolo"

opciones_explicitas: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Condensación en el condensador separado", "Movimiento del pistón/émbolo"]
respuesta: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Condensación en el condensador separado", "Movimiento del pistón/émbolo"]
tipo: ordenar

explicacion: |
  El ciclo comienza con la generación de vapor, seguido de su expansión para mover el pistón, la condensación para recuperar el agua y el movimiento mecánico resultante.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "watt", "eficiencia"]

variables:
  efecto: uno_de([
    ["aumentar", "aumentar"],
    ["disminuir", "disminuir"],
    ["mantener", "mantener"]
  ])

enunciado: "La introducción del condensador separado por parte de Watt tuvo como objetivo principal ___ la temperatura del cilindro durante el ciclo de expansión."

respuestas_validas: ["mantener"]
tipo: completar

explicacion: |
  Al condensar el vapor en un recipiente separado, el cilindro principal no necesita ser enfriado con agua fría en cada ciclo, manteniendo su temperatura constante y optimizando el uso del combustible.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["leyes_termodinamica", "trabajo", "calor"]

variables:
  caso: uno_de([
    [100, "100"],
    [250, "250"],
    [500, "500"]
  ])

enunciado: "Una máquina de vapor de Watt recibe {caso[0]} Joules de calor ($Q_{in}$) y realiza un trabajo de {caso[0] * 0.2} Joules ($W$). ¿Cuál es su eficiencia térmica ($\eta = W/Q_{in}$) expresada en decimal?"

pasos:
  - "Identificar el trabajo realizado ($W$)"
  - "Identificar el calor absorbido ($Q_{in}$)"
  - "Dividir $W$ entre $Q_{in}$"

respuesta: 0.2
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La eficiencia se calcula como $\eta = W / Q_{in}$. En este caso: $20 / 100 = 0.2$ (o $50 / 250 = 0.2$).
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: [[150, "0.30"], [200, "0.40"], [250, "0.50"]]
  idx: uno_de([0, 1, 2])

enunciado: "Una máquina térmica absorbe un calor de {escenario[idx][0]} J del foco caliente y realiza un trabajo útil de {escenario[idx][0] * escenario[idx][1]} J. ¿Cuál es la eficiencia térmica de la máquina?"

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["0.20", "0.30", "0.40", "0.50", "0.60"]

explicacion: |
  La eficiencia térmica ($\eta$) se define como el cociente entre el trabajo útil realizado ($W$) y el calor absorbido ($Q_H$):
  $\eta = W / Q_H$.
  En este caso: $\eta = {escenario[idx][0] * escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1]}$.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  datos: [[450, "0.25"], [600, "0.33"], [800, "0.45"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica absorbe {datos[idx][0]} J de calor y su eficiencia es de {datos[idx][1]} (expresada en decimal), ¿cuánto trabajo útil realiza?"

respuesta: datos[idx][0] * datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usamos la fórmula de eficiencia: $\eta = W / Q_H \implies W = \eta \times Q_H$.
  Sustituyendo: $W = {datos[idx][1]} \times {datos[idx][0]} = {datos[idx][0] * datos[idx][1]} \text{ J}$.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  caso: [[120, "0.2"], [150, "0.3"], [200, "0.5"]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada una máquina térmica con una eficiencia de {caso[idx][1]}, si el trabajo realizado es de {caso[idx][0]} J, ¿cuál es el calor absorbido del foco caliente?"

respuesta: caso[idx][0] / caso[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Partiendo de $\eta = W / Q_H$, despejamos el calor absorbido: $Q_H = W / \eta$.
  Calculamos: ${caso[idx][0]} / {caso[idx][1]} = {caso[idx][0] / caso[idx][1]} \text{ J}$.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

enunciado: "En una máquina térmica, la eficiencia térmica ($\eta$) se define como la relación entre el ___ realizado y el ___ absorbido del foco caliente."

respuesta: ["trabajo", "calor"]
tipo: completar
respuestas_validas: ["trabajo", "calor"]

explicacion: |
  La eficiencia ($\eta$) representa qué fracción de la energía térmica absorbida se convierte en trabajo útil.
  Fórmula: $\eta = W / Q_H$.
```

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

variables:
  valores: [[500, "0.25"], [1000, "0.50"], [2000, "0.75"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica tiene una eficiencia de {valores[idx][1]} y absorbe {valores[idx][0]} J de calor, el trabajo realizado es de ___ J."

respuesta: valores[idx][0] * valores[idx][1]
tipo: completar
respuestas_validas: ["125", "500", "250", "750", "1500", "1000", "500", "1500", "1000", "500", "1500", "1500"]

explicacion: |
  El cálculo es $W = Q_H \times \eta$.
  Para el escenario seleccionado: ${valores[idx][0]} \times {valores[idx][1]} = {valores[idx][0] * valores[idx][1]} \text{ J}$.
```
