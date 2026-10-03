# Examen jefe — [PENDIENTE #739]

> Logro #739. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **132 preguntas totales** en 5/5 secciones.

---

## Sección: mru (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["posicion"]

variables:
  x0: random(0, 50)
  v: random(10, 100)
  t: random(1, 10)

respuesta: x0 + v * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene x(t) = {x0} + {v}t (km, con t en horas). ¿Dónde está en t={t}?"

explicacion: |
  x({t}) = {x0} + {v}×{t} = {x0 + v * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["posicion"]

variables:
  v: random(10, 100)
  t: random(1, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto parte del origen (x₀=0) con v={v} km/h. ¿Dónde está en t={t} horas?"

explicacion: |
  x({t}) = {v}×{t} = {v * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["pendiente"]

variables:
  x0: random(0, 30)
  v: random(10, 100)

respuesta: v
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v}t. ¿Cuál es la velocidad del objeto?"

explicacion: |
  La velocidad es la pendiente de x(t) — el coeficiente que multiplica
  a t.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  x0: random(0, 50)
  v: random(10, 100)

respuesta: x0
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v}t. ¿Cuál es la posición inicial (en t=0)?"

explicacion: |
  x(0) = {x0} — la ordenada al origen de la función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["pendiente"]

variables:
  t1: random(1, 5)
  x1: random(0, 50)
  v: random(10, 80)
  dt: random(1, 5)
  t2: t1 + dt
  x2: x1 + v * dt

respuesta: (x2 - x1) / (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto está en x={x1} km en t={t1} h, y en x={x2} km en t={t2} h. ¿Cuál es su velocidad?"

explicacion: |
  v = (x₂−x₁)/(t₂−t₁), la misma fórmula de pendiente de
  `../../matematica/funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["area"]

variables:
  v: random(20, 120)
  t: random(1, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "En un gráfico v-t, la velocidad es constante en {v} km/h durante {t} horas. ¿Cuál es el área bajo esa recta (la distancia recorrida)?"

explicacion: |
  Área de un rectángulo: base (tiempo) × altura (velocidad).
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["area"]

variables:
  v: random(20, 100)
  t1: random(1, 5)
  t2: random(6, 15)

respuesta: v * (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Con velocidad constante {v} km/h, ¿qué distancia se recorre entre t={t1} y t={t2} horas?"

explicacion: |
  Distancia = v×(t₂−t₁) = {v}×{t2 - t1} = {v * (t2 - t1)}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  v1: random(60, 100)
  v2: random(30, 59)
  x0_2: random(10, 100)
  t_encuentro: random(1, 5)
  x0_1: v2 * t_encuentro + x0_2 - v1 * t_encuentro

respuesta: t_encuentro
tipo: input
tolerancia_abs: 0

enunciado: "Auto A: x(t) = {x0_1} + {v1}t. Auto B: x(t) = {x0_2} + {v2}t. ¿En qué instante t se encuentran?"

pasos:
  - "Igualar: {x0_1}+{v1}t = {x0_2}+{v2}t → ({v1}−{v2})t = {x0_2}−{x0_1}"
  - "t = {t_encuentro}"

explicacion: |
  Es el mismo procedimiento de
  `../../matematica/sistemas-dos-ecuaciones/`, con nombres de contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  v1: random(60, 100)
  v2: random(30, 59)
  x0_2: random(10, 100)
  t_encuentro: random(1, 5)
  x0_1: v2 * t_encuentro + x0_2 - v1 * t_encuentro

respuesta: x0_1 + v1 * t_encuentro
tipo: input
tolerancia_abs: 0

enunciado: "Auto A: x(t) = {x0_1} + {v1}t. Auto B: x(t) = {x0_2} + {v2}t. Se encuentran en t={t_encuentro}. ¿En qué posición?"

explicacion: |
  Se evalúa cualquiera de las dos funciones en t={t_encuentro} — las dos
  tienen que dar el mismo resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de posición vs. tiempo (x-t) de un MRU es siempre una recta."

explicacion: |
  Porque x(t)=x₀+vt es una función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de velocidad vs. tiempo (v-t) de un MRU es una recta horizontal."

explicacion: |
  La velocidad no cambia con el tiempo en un MRU.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico x-t, cuanto más inclinada es la recta, mayor es la velocidad del objeto."

explicacion: |
  La pendiente ES la velocidad — más inclinación, más pendiente, más
  rápido.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una velocidad negativa en MRU significa que el objeto se mueve en sentido contrario al que se tomó como positivo, no que 'va hacia atrás en el tiempo'."

explicacion: |
  El signo de v indica dirección, no una imposibilidad física.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos móviles tienen exactamente la misma velocidad (mismas pendientes en x-t), nunca se encuentran (salvo que ya arrancaran juntos)."

explicacion: |
  Dos rectas paralelas no se cruzan — mismo concepto ya visto en
  `../../matematica/funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  v: random(10, 100)
  t_sol: random(1, 10)
  d: v * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto viaja a {v} km/h. ¿Cuánto tiempo tarda en recorrer {d} km?"

explicacion: |
  t = d/v = {d}/{v} = {t_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x0: random(0, 50)
  v: random(10, 100)
  t: random(1, 10)
  real: x0 + v * t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {x0} + {v}t. ¿Es correcto que x({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea de 'área bajo el gráfico v-t es la distancia recorrida' también vale cuando la velocidad no es constante — ahí el área ya no es un simple rectángulo."

explicacion: |
  Es el adelanto directo de `../../matematica/integral/`: el área bajo
  cualquier curva de velocidad da la distancia, constante o no.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema", "problema"]

variables:
  distancia_total: random(100, 500)
  v1: random(20, 60)
  v2: random(20, 60)

respuesta: distancia_total / (v1 + v2)
tipo: input
tolerancia_abs: 0

enunciado: "Dos autos parten al mismo tiempo, uno hacia el otro, desde puntos separados por {distancia_total} km, a {v1} y {v2} km/h. ¿En cuántas horas se cruzan?"

pasos:
  - "Juntos cubren {v1}+{v2}={v1 + v2} km por hora — se cruzan cuando la suma de lo recorrido llega a {distancia_total}"

explicacion: |
  Cuando van en sentidos opuestos, las velocidades se suman para saber
  cuánto se acortan la distancia entre los dos por hora.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRU, la aceleración es siempre 0 (la velocidad no cambia)."

explicacion: |
  Es la definición misma de "uniforme": velocidad constante, sin
  aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque x(t)=x₀+vt matemáticamente tiene dominio en todos los reales, en un problema físico real el dominio suele restringirse a t≥0 (no tiene sentido un tiempo negativo)."

explicacion: |
  El modelo matemático es más general que la situación física que
  describe — hay que interpretar el resultado con sentido común.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  d: random(100, 400)
  t: random(2, 8)

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje de {d} km (con paradas incluidas) tardó {t} horas en total. ¿Cuál fue la velocidad media?"

explicacion: |
  La velocidad media usa distancia y tiempo TOTALES, aunque el
  movimiento real no haya sido a velocidad constante en cada tramo.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  t1: random(1, 5)
  x1: random(0, 50)
  v: random(10, 80)
  dt: random(1, 5)
  t2: t1 + dt
  x2: x1 + v * dt
  error: uno_de([0, 0, 1, -1])
  propuesto: v + error

respuesta: (propuesto == v)
tipo: vf

enunciado: "Un objeto está en x={x1} en t={t1}, y en x={x2} en t={t2}. ¿Es correcto que su velocidad sea {propuesto}?"

explicacion: |
  La velocidad correcta es (x₂−x₁)/(t₂−t₁) = {v}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  v: random(10, 50)
  x0: random(10, 100)

respuesta: -x0 / v
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} − {v}t (un objeto que se acerca al origen). ¿En qué instante t pasa por x=0?"

explicacion: |
  Se despeja t de {x0} − {v}t = 0 → t = {x0}/{v}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema", "problema"]

variables:
  v_lento: random(10, 30)
  v_rapido: random(40, 80)
  cabeza: random(10, 50)

respuesta: cabeza / (v_rapido - v_lento)
tipo: input
tolerancia_abs: 0

enunciado: "Un ciclista a {v_lento} km/h lleva {cabeza} km de ventaja. Un auto sale a perseguirlo a {v_rapido} km/h. ¿En cuántas horas lo alcanza?"

pasos:
  - "El auto gana {v_rapido}−{v_lento}={v_rapido - v_lento} km por hora de diferencia"

explicacion: |
  Se plantea igualando las dos posiciones, igual que un encuentro común.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Decir 'velocidad constante' y decir 'aceleración cero' describen exactamente la misma situación en cinemática."

explicacion: |
  Son dos formas de decir lo mismo — prepara el terreno para
  `../mruv/`, donde la aceleración deja de ser 0.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  v1: random(20, 60)
  t1: random(1, 5)
  v2: random(20, 60)
  t2: random(1, 5)

respuesta: v1 * t1 + v2 * t2
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje tiene un primer tramo a {v1} km/h durante {t1} h, y un segundo tramo a {v2} km/h durante {t2} h. ¿Cuál es la distancia total?"

explicacion: |
  Cada tramo es un MRU independiente — se suman las distancias
  parciales.
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
respuesta_orden: ["Elegir una fuerza (la 'acción') y ver sobre qué objeto actúa", "Buscar la fuerza de igual magnitud y sentido opuesto que actúa sobre el OTRO objeto involucrado", "Confirmar que ambas fuerzas actúan sobre objetos distintos, no sobre el mismo"]
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

## Sección: mruv (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t: random(1, 10)

respuesta: v0 + a * t
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {v0} + {a}t (m/s). ¿Cuánto vale v({t})?"

explicacion: |
  v({t}) = {v0} + {a}×{t} = {v0 + a * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["velocidad", "signos"]

variables:
  v0: random(30, 60)
  a: random(1, 5)
  t: random(1, 8)

respuesta: v0 - a * t
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {v0} − {a}t (m/s, frenando). ¿Cuánto vale v({t})?"

explicacion: |
  v({t}) = {v0} − {a}×{t} = {v0 - a * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["posicion"]

variables:
  x0: random(0, 20)
  v0: random(0, 15)
  a: random(2, 6) * 2
  t: random(1, 6)

respuesta: x0 + v0 * t + (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v0}t + ½×{a}t² (m). ¿Cuánto vale x({t})?"

pasos:
  - "x({t}) = {x0} + {v0}×{t} + ({a}×{t}²)/2 = {x0 + v0 * t + (a * t ^ 2) / 2}"

explicacion: |
  Se evalúan los tres términos y se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["posicion"]

variables:
  a: random(2, 8) * 2
  t: random(1, 8)

respuesta: (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto parte del reposo (v₀=0, x₀=0) con aceleración {a} m/s². ¿Cuánto recorrió en t={t} s?"

explicacion: |
  x(t) = ½at² = {a}×{t}²/2 = {(a * t ^ 2) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["sin_tiempo"]

variables:
  v0: random(0, 10)
  a: random(1, 5)
  k: random(1, 5)
  v_final: v0 + 2 * a * k
  dx: k * (v_final + v0)

respuesta: v_final
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². Después de recorrer {dx} m, ¿cuál es la velocidad final? (usando v²=v₀²+2aΔx)"

pasos:
  - "v² = {v0}² + 2×{a}×{dx} = {v0 ^ 2 + 2 * a * dx}"
  - "v = √{v0 ^ 2 + 2 * a * dx} = {v_final}"

explicacion: |
  Se usa la fórmula sin tiempo cuando no hace falta (o no se conoce) t.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["sin_tiempo"]

variables:
  v0: random(0, 10)
  a: random(1, 6)
  dx_sol: random(5, 20)

respuesta: dx_sol
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². La velocidad final da un número que no hace falta calcular a mano — sabiendo que v²−v₀² = {2 * a * dx_sol}, ¿cuánto vale Δx?"

pasos:
  - "Δx = (v²−v₀²)/(2a) = {2 * a * dx_sol}/{2 * a} = {dx_sol}"

explicacion: |
  Se despeja Δx de la ecuación sin tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  v0: random(0, 20)
  a_sol: random(1, 10)
  t: random(1, 8)
  v: v0 + a_sol * t

respuesta: (v - v0) / t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto pasa de v₀={v0} m/s a v={v} m/s en t={t} s. ¿Cuál es su aceleración?"

explicacion: |
  a = (v−v₀)/t = ({v}−{v0})/{t} = {(v - v0) / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["tiempo"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t_sol: random(1, 10)
  v: v0 + a * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². ¿Cuánto tiempo tarda en llegar a v={v} m/s?"

explicacion: |
  t = (v−v₀)/a = {t_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico v-t de un MRUV es una recta (no horizontal, salvo que a=0)."

explicacion: |
  v(t)=v₀+at es una función lineal de t, con pendiente a.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico x-t de un MRUV es una parábola."

explicacion: |
  x(t)=x₀+v₀t+½at² es una función cuadrática de t.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el gráfico v-t, la pendiente de la recta es exactamente la aceleración."

explicacion: |
  Mismo principio que en x-t con MRU: la pendiente es la tasa de
  cambio — acá, de la velocidad.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  a: random(2, 10)
  t: random(1, 8)

respuesta: (a * t ^ 2) / 2
tipo: mc
opciones_explicitas:
  - (a * t ^ 2) / 2
  - a * t ^ 2
  - (a * t) / 2

enunciado: "Un objeto parte del reposo con aceleración {a} m/s². ¿Cuánto recorrió en t={t} s?"

explicacion: |
  x=½at² — olvidar el ½ (o el cuadrado) es el error más común de la
  fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En un MRUV, la fórmula v=d/t (de MRU) sigue dando la velocidad en cualquier instante."

explicacion: |
  v=d/t asume velocidad CONSTANTE — en MRUV la velocidad cambia, así que
  hacen falta las fórmulas específicas de MRUV.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t: random(1, 10)
  real: v0 + a * t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "v(t) = {v0} + {a}t. ¿Es correcto que v({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  t: random(10, 30)

respuesta: (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un avión acelera desde el reposo a {a} m/s² durante {t} s antes de despegar. ¿Qué distancia recorrió en la pista?"

explicacion: |
  x=½at², partiendo del reposo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "v₀ (velocidad inicial) y v(t) (velocidad en un instante t cualquiera) son siempre el mismo número."

explicacion: |
  Sólo coinciden en t=0 — en cualquier otro instante, difieren según la
  aceleración acumulada.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una aceleración negativa no significa automáticamente que el objeto está frenando — depende del signo de la velocidad."

explicacion: |
  Si v es negativa y a también, el objeto en realidad acelera (cada vez
  más rápido) en sentido negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  v0: random(0, 15)
  a: random(1, 8)
  t: random(1, 8)
  v: v0 + a * t
  dx: v0 * t + (a * t ^ 2) / 2

respuesta: ((v ^ 2) == (v0 ^ 2 + 2 * a * dx))
tipo: vf

enunciado: "v₀={v0}, a={a}, t={t}. Con v={v} y Δx={dx} (calculados con las otras dos fórmulas), ¿se cumple v²=v₀²+2aΔx?"

explicacion: |
  Las tres fórmulas de MRUV son consistentes entre sí — cualquier par
  de ellas tiene que dar el mismo resultado que la tercera.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  t: random(1, 8)

respuesta: 10 * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo con aceleración g=10 m/s² (caída libre). ¿Cuál es su velocidad después de {t} s?"

explicacion: |
  v=at, con v₀=0 — el caso más simple de caída libre, antes de ver
  `../tiro-vertical/` con velocidad inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La unidad de la aceleración en el sistema SI es m/s² (metros por segundo, por segundo)."

explicacion: |
  Es "cuánto cambia la velocidad (m/s) por cada segundo que pasa" — de
  ahí la unidad al cuadrado en el denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  v0_sol: random(0, 20)
  a: random(1, 10)
  t: random(1, 8)
  v: v0_sol + a * t

respuesta: v0_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto con aceleración {a} m/s² llega a v={v} m/s después de {t} s. ¿Cuál era su velocidad inicial?"

explicacion: |
  v₀ = v−at = {v}−{a}×{t} = {v0_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si en las fórmulas de MRUV se pone a=0, se recuperan exactamente las fórmulas de MRU."

explicacion: |
  v(t)=v₀+0·t=v₀ (constante), x(t)=x₀+v₀t+0=x₀+v₀t — el MRU es el caso
  particular de MRUV sin aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  n: random(1, 5)
  v0: 2 * a * n
  dx: 2 * a * n ^ 2

respuesta: dx
tipo: input
tolerancia_abs: 0

enunciado: "Un auto frena desde v₀={v0} m/s con desaceleración {a} m/s² hasta detenerse (v=0). ¿Qué distancia recorre hasta parar?"

pasos:
  - "0 = v₀² − 2aΔx → Δx = v₀²/(2a)"

explicacion: |
  Es la misma cuenta que se profundiza en
  `../../vida-cotidiana/distancia-frenado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el instante en que v=0 dentro de un MRUV, la aceleración puede seguir siendo distinta de 0 (por ejemplo, en el punto más alto de un tiro vertical)."

explicacion: |
  v=0 es sólo un instante; a sigue actuando (la gravedad no se apaga en
  el punto más alto) — adelanto de `../tiro-vertical/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x0: random(0, 20)
  v0: random(0, 15)
  a: random(2, 6) * 2
  t: random(1, 6)
  real: x0 + v0 * t + (a * t ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {x0} + {v0}t + ½×{a}t². ¿Es correcto que x({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "v² = v₀² + 2aΔx"
tipo: mc
opciones_explicitas:
  - "v² = v₀² + 2aΔx"
  - "v = v₀ + at"
  - "x = x₀ + v₀t + ½at²"

enunciado: "Un problema da v₀, a y Δx, y pide la velocidad final — sin dar el tiempo. ¿Qué fórmula conviene usar?"

explicacion: |
  Es la única de las tres que no necesita el tiempo como dato.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  v0: random(20, 60)
  a: random(2, 10)

respuesta: v0 / a
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto con v₀={v0} m/s frena con desaceleración {a} m/s². ¿Cuánto tarda en detenerse (v=0)?"

explicacion: |
  0 = v₀ − at → t = v₀/a.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para encontrar en qué instante un objeto en MRUV pasa por una posición dada, hay que resolver una ecuación cuadrática en t."

explicacion: |
  x(t)=x₀+v₀t+½at² es cuadrática en t — despejar t de una posición dada
  usa la fórmula resolvente de `../../matematica/ecuacion-cuadratica/`.
```

## Sección: dinamica-fuerzas-concurrentes (27 preguntas)

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "¿Qué son las fuerzas concurrentes?"
tipo: mc
opciones_explicitas:
  - "Dos o más fuerzas cuyas líneas de acción se cruzan en un mismo punto, actuando sobre un mismo objeto"
  - "Fuerzas que actúan siempre en la misma dirección"
  - "Fuerzas que sólo existen en objetos en movimiento"
respuesta: "Dos o más fuerzas cuyas líneas de acción se cruzan en un mismo punto, actuando sobre un mismo objeto"

explicacion: |
  Es el caso más común: rara vez actúa una sola fuerza sobre algo.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["diagrama_cuerpo_libre", "vocabulario"]

enunciado: "¿Qué es un diagrama de cuerpo libre?"
tipo: mc
opciones_explicitas:
  - "Un dibujo del objeto reducido a un punto, con todas las fuerzas que actúan sobre él como vectores"
  - "Un dibujo técnico a escala del objeto completo"
  - "Una tabla con los valores numéricos de las fuerzas, sin dibujo"
respuesta: "Un dibujo del objeto reducido a un punto, con todas las fuerzas que actúan sobre él como vectores"

explicacion: |
  Es la herramienta central para resolver cualquier problema de
  dinámica.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["diagrama_cuerpo_libre"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un diagrama de cuerpo libre falta dibujar alguna fuerza real, el resultado del cálculo va a estar mal."

explicacion: |
  La fuerza neta depende de TODAS las fuerzas presentes, no de las que
  se recuerden dibujar.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "ordenar"]

enunciado: "Ordená los pasos para resolver un sistema de fuerzas concurrentes."
tipo: ordenar
opciones_explicitas:
  - "Sumar todas las componentes x y todas las componentes y por separado, para obtener la fuerza neta"
  - "Dibujar el diagrama de cuerpo libre con todas las fuerzas"
  - "Descomponer cada fuerza en sus componentes x e y"
respuesta_orden: ["Dibujar el diagrama de cuerpo libre con todas las fuerzas", "Descomponer cada fuerza en sus componentes x e y", "Sumar todas las componentes x y todas las componentes y por separado, para obtener la fuerza neta"]
explicacion: |
  Es la misma secuencia de
  `../../matematica/suma-de-vectores-y-descomposicion/`, aplicada a
  fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  fx1: random(5, 20)
  fx2: random(5, 20)

respuesta: fx1 + fx2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. La primera tiene componente horizontal {fx1} N, y la segunda {fx2} N (ambas hacia la derecha). ¿Cuál es la componente horizontal de la fuerza neta?"

pasos:
  - "{fx1} + {fx2} = {fx1 + fx2} N"

explicacion: |
  Se suman las componentes horizontales de todas las fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  fy1: random(10, 30)
  fy2: random(5, 15)

respuesta: fy1 - fy2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. La primera tiene componente vertical {fy1} N hacia arriba, y la segunda {fy2} N hacia abajo. ¿Cuál es la componente vertical de la fuerza neta (positiva hacia arriba)?"

pasos:
  - "{fy1} − {fy2} = {fy1 - fy2} N"

explicacion: |
  Se restan porque apuntan en sentidos opuestos sobre el mismo eje.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  k: random(1, 6)
  fx: 3 * k
  fy: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "La fuerza neta sobre un objeto tiene componentes ({fx} N, {fy} N). ¿Cuál es su módulo?"

pasos:
  - "√({fx}² + {fy}²) = {5 * k} N"

explicacion: |
  Es el teorema de Pitágoras aplicado a las componentes de la fuerza
  neta.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto es cero, el objeto está en equilibrio."

explicacion: |
  Es la primera ley de Newton aplicada al resultado de sumar todas las
  fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto no es cero, el objeto acelera en la dirección de esa fuerza neta."

explicacion: |
  Es la segunda ley de Newton aplicada al resultado de sumar todas las
  fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  k: random(1, 5)
  fx: 3 * k
  fy: 4 * k
  masa: uno_de([1, 5])

respuesta: redondear((5 * k) / masa, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "La fuerza neta sobre un objeto de {masa} kg tiene componentes ({fx} N, {fy} N). ¿Cuál es la magnitud de su aceleración?"

pasos:
  - "Módulo de la fuerza neta: √({fx}² + {fy}²) = {5 * k} N"
  - "{5 * k} ÷ {masa} = {redondear((5 * k) / masa, 2)} m/s²"

explicacion: |
  Primero se halla el módulo de la fuerza neta, y recién después se
  aplica F=ma para obtener la aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["tension", "vocabulario"]

enunciado: "¿Qué es la tensión de una cuerda?"
tipo: mc
opciones_explicitas:
  - "La fuerza que ejerce una cuerda, cable o cadena tirando de un objeto"
  - "El peso de la propia cuerda"
  - "La resistencia de la cuerda a romperse"
respuesta: "La fuerza que ejerce una cuerda, cable o cadena tirando de un objeto"

explicacion: |
  Aparece en casi todos los problemas clásicos de fuerzas concurrentes.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["tension", "vocabulario"]

enunciado: "¿En qué dirección actúa la tensión de una cuerda sobre el objeto del que tira?"
tipo: mc
opciones_explicitas:
  - "A lo largo de la propia cuerda"
  - "Siempre en dirección vertical, sin importar cómo esté la cuerda"
  - "Siempre perpendicular a la cuerda"
respuesta: "A lo largo de la propia cuerda"

explicacion: |
  Si la cuerda está inclinada, la tensión también está inclinada.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "En el problema clásico de una lámpara colgada de dos cables, ¿qué fuerzas actúan sobre la lámpara?"
tipo: mc
opciones_explicitas:
  - "Su peso hacia abajo, y la tensión de cada uno de los dos cables"
  - "Sólo su peso"
  - "Sólo la tensión de los cables, sin peso"
respuesta: "Su peso hacia abajo, y la tensión de cada uno de los dos cables"

explicacion: |
  Son tres fuerzas concurrentes en total.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["tension", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])

respuesta: peso / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una lámpara de {peso} N cuelga en equilibrio de dos cables verticales idénticos, cada uno soportando la misma tensión. ¿Cuánto vale la tensión de cada cable?"

pasos:
  - "{peso} ÷ 2 = {peso / 2} N"

explicacion: |
  En este caso simétrico, cada cable soporta exactamente la mitad del
  peso total.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["tension"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una lámpara cuelga en equilibrio de dos cables verticales idénticos, cada cable soporta exactamente la mitad del peso total."

explicacion: |
  Por simetría, ambas tensiones son iguales, y juntas deben igualar al
  peso total.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  f1: random(10, 30)
  f2: random(10, 30)

respuesta: f1 + f2
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan dos fuerzas horizontales de {f1} N y {f2} N, ambas hacia la izquierda. ¿Qué fuerza hacia la derecha hace falta agregar para que el objeto quede en equilibrio horizontal?"

pasos:
  - "{f1} + {f2} = {f1 + f2} N hacia la derecha"

explicacion: |
  La tercera fuerza tiene que cancelar exactamente la suma de las otras
  dos.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un objeto esté en equilibrio horizontal, la suma de las componentes horizontales de todas las fuerzas tiene que dar cero."

explicacion: |
  Es la condición de equilibrio aplicada sólo al eje horizontal.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "Si la suma de las tensiones verticales que sostienen un objeto NO iguala exactamente a su peso, ¿qué pasa?"
tipo: mc
opciones_explicitas:
  - "El objeto acelera verticalmente (sube o baja), según la segunda ley"
  - "No pasa nada, el objeto queda igual en reposo"
  - "El peso del objeto cambia automáticamente para compensar"
respuesta: "El objeto acelera verticalmente (sube o baja), según la segunda ley"

explicacion: |
  Sin fuerza neta cero, no hay equilibrio: el objeto se mueve según
  F=ma.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  k: random(1, 6)
  f1: 5 * k
  f2: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas perpendiculares entre sí, de {f1} N y {f2} N, actúan sobre un mismo punto. ¿Cuál es el módulo de la fuerza neta?"

pasos:
  - "√({f1}² + {f2}²) = {13 * k} N"

explicacion: |
  Al ser perpendiculares, cada una es directamente una componente de la
  fuerza neta: se aplica Pitágoras sin necesitar descomponer más.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "¿Por qué hace falta descomponer las fuerzas en componentes antes de sumarlas, cuando no están todas alineadas con los mismos ejes?"
tipo: mc
opciones_explicitas:
  - "Porque no se pueden sumar directamente magnitudes de fuerzas que apuntan en direcciones distintas"
  - "No hace falta descomponer nunca, siempre alcanza con sumar los módulos"
  - "Porque las fuerzas concurrentes no se pueden sumar de ninguna forma"
respuesta: "Porque no se pueden sumar directamente magnitudes de fuerzas que apuntan en direcciones distintas"

explicacion: |
  Es la misma razón por la que se descomponen vectores en general.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["tension", "problema"]

variables:
  masa: uno_de([2, 5, 8, 10])

respuesta: masa * 10
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de {masa} kg cuelga en equilibrio de un único cable vertical. ¿Cuál es la tensión del cable? (usá g = 10 m/s²)"

pasos:
  - "En equilibrio, la tensión iguala al peso: {masa} × 10 = {masa * 10} N"

explicacion: |
  Con un solo cable vertical, toda la tensión tiene que igualar al peso
  completo.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto puede tener tres, cuatro o más fuerzas concurrentes actuando sobre él al mismo tiempo, no sólo dos."

explicacion: |
  El procedimiento (descomponer y sumar) funciona igual sin importar
  cuántas fuerzas haya.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  fx1: uno_de([10, 20])
  fx2: uno_de([30, 40])
  masa: uno_de([2, 5])

respuesta: redondear((fx1 + fx2) / masa, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Sobre un objeto de {masa} kg actúan dos fuerzas horizontales en la misma dirección: {fx1} N y {fx2} N. ¿Cuál es su aceleración?"

pasos:
  - "Fuerza neta: {fx1} + {fx2} = {fx1 + fx2} N"
  - "{fx1 + fx2} ÷ {masa} = {redondear((fx1 + fx2) / masa, 2)} m/s²"

explicacion: |
  Primero se suman las fuerzas (al estar alineadas, no hace falta
  descomponer), y después se aplica F=ma.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Para qué sirve el análisis de fuerzas concurrentes al diseñar una grúa o una estructura con cables?"
tipo: mc
opciones_explicitas:
  - "Para calcular la tensión que va a soportar cada cable, y verificar que la estructura aguante el peso sin romperse"
  - "Sólo sirve para calcular el color de la pintura de la grúa"
  - "No tiene ninguna aplicación en ingeniería real"
respuesta: "Para calcular la tensión que va a soportar cada cable, y verificar que la estructura aguante el peso sin romperse"

explicacion: |
  Es exactamente el mismo análisis que el ejemplo de la lámpara, a
  escala más grande.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["diagrama_cuerpo_libre"]

respuesta: verdadero
tipo: vf

enunciado: "Un diagrama de cuerpo libre dibuja únicamente las fuerzas (como vectores), no los objetos que las ejercen (la cuerda, el piso, el aire)."

explicacion: |
  Es lo que lo hace "libre": se aísla el objeto de estudio de todo lo
  demás, dejando sólo las fuerzas que actúan sobre él.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "El procedimiento para resolver fuerzas concurrentes es exactamente el mismo que sumar y descomponer vectores, aplicado a fuerzas en vez de a vectores genéricos."

explicacion: |
  Las fuerzas SON vectores: todo lo aprendido sobre suma y
  descomposición se aplica directo.
```

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el análisis de fuerzas concurrentes?"
tipo: mc
opciones_explicitas:
  - "Para calcular el efecto neto de varias fuerzas reales actuando sobre un mismo objeto, y predecir si está en equilibrio o va a acelerar"
  - "Sólo sirve para objetos que ya están en equilibrio"
  - "Sólo aplica cuando hay exactamente dos fuerzas involucradas"
respuesta: "Para calcular el efecto neto de varias fuerzas reales actuando sobre un mismo objeto, y predecir si está en equilibrio o va a acelerar"

explicacion: |
  Es la aplicación práctica de las tres leyes de Newton juntas.
```

## Sección: oscilacion-periodo (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["definicion", "movimiento"]

respuesta: "oscilación"
tipo: completar
respuestas_validas:
  - "oscilación"
  - "oscilacion"

enunciado: "El movimiento de vaivén de un objeto alrededor de una posición de equilibrio se denomina ___."

explicacion: |
  Una oscilación es un movimiento repetitivo que pasa por una posición de equilibrio, como un péndulo o un resorte.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "tiempo"]

respuesta: "el tiempo que tarda en realizarse un ciclo completo"
tipo: mc
opciones_explicitas: ["el tiempo que tarda en realizarse un ciclo completo", "la cantidad de ciclos por unidad de tiempo", "la distancia máxima desde el equilibrio"]

enunciado: "El periodo (T) se define como: ___."

explicacion: |
  El periodo es precisamente el intervalo de tiempo necesario para que el sistema complete un ciclo completo de movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Un movimiento que solo se desplaza en una sola dirección sin volver nunca a su punto de origen es un movimiento oscilatorio?"

explicacion: |
  Falso. Para que sea oscilatorio, el objeto debe regresar a su posición de partida y repetir el ciclo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "s"
tipo: mc
opciones_explicitas: ["s", "m", "Hz"]

enunciado: "Dado que el periodo mide el tiempo de un ciclo, su unidad en el Sistema Internacional es ___."

explicacion: |
  El tiempo se mide en segundos (s) en el SI. El metro (m) es longitud y el Hertz (Hz) es frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "puntos_criticos"]

variables:
  secuencia: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

respuesta_orden: secuencia
tipo: ordenar
opciones_explicitas: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

enunciado: "Ordene los puntos de trayectoria de un objeto que oscila de forma simple, comenzando desde su posición de equilibrio:"

explicacion: |
  En una oscilación completa, el objeto pasa por el equilibrio, alcanza un extremo, vuelve al equilibrio, alcanza el extremo opuesto y regresa al equilibrio.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "el tiempo que tarda en completarse un ciclo completo"
tipo: completar
respuestas_validas:
  - "el tiempo que tarda en completarse un ciclo completo"
  - "el tiempo de un ciclo completo"

enunciado: "En un movimiento oscilatorio, el periodo se define como ___"

explicacion: |
  El periodo (T) es el intervalo de tiempo necesario para que un objeto complete un ciclo completo de movimiento y regrese a su posición inicial con la misma velocidad y dirección.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["calculo", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 2.0], [0.2, 5.0]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [2.0, 5.0, 0.5, 1.0]

enunciado: "Si un objeto realiza un ciclo completo en {datos[idx][0]} segundos, ¿cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el periodo (T): T = {datos[idx][0]} s"
  - "Usar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular: f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz"

explicacion: |
  La frecuencia (f) es el inverso del periodo (T). Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["relacion", "frecuencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que si la frecuencia de un oscilador aumenta, su periodo también aumenta?"

explicacion: |
  Falso. La relación es inversamente proporcional: T = 1/f. Si la frecuencia aumenta, el periodo disminuye (el ciclo es más rápido).
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "avanzado"
  tags: ["pendulo", "calculo"]

variables:
  idx: uno_de([0, 1])
  longitudes: [1.0, 0.4]

respuesta: 2 * 3.14159 * sqrt(longitudes[idx] / 9.8)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo simple tiene una longitud de {longitudes[idx]} metros. Calcula su periodo (T) usando la fórmula T = 2 * pi * sqrt(L / g). (Usa g = 9.8 m/s²)"

pasos:
  - "L = {longitudes[idx]} m"
  - "T = 2 * pi * sqrt({longitudes[idx]} / 9.8)"
  - "T = 2 * 3.14159 * sqrt({longitudes[idx] / 9.8})"

explicacion: |
  Aplicando la fórmula: T = 2 * pi * sqrt(L / 9.8) ≈ {2 * 3.14159 * sqrt(longitudes[idx] / 9.8)} s.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["movimiento", "secuencia"]

respuesta_orden: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]

enunciado: "Ordena las posiciones que recorre un objeto en un ciclo completo de oscilación, partiendo desde el extremo derecho (A):"

explicacion: |
  Un ciclo completo implica ir de un extremo al otro y volver al punto de partida, pasando por el centro en cada tramo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos_basicos", "periodo"]

respuesta: "un ciclo completo"
tipo: completar
respuestas_validas:
  - "un ciclo completo"
  - "un ciclo"

enunciado: "En un movimiento oscilatorio, el tiempo necesario para que el objeto complete ___ se denomina periodo."

explicacion: |
  El periodo es el intervalo de tiempo que transcurre entre dos instantes sucesivos en los que el sistema vuelve a pasar por el mismo estado (misma posición y misma dirección).
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "periodo"]

variables:
  datos: [["0.5", "2"], ["2", "0.5"]]
  idx: uno_de([0, 1])
  periodo: datos[idx][0]
  frecuencia_correcta: datos[idx][1]

respuesta: frecuencia_correcta
tipo: completar

enunciado: "Si un objeto realiza un movimiento oscilatorio con un periodo de {periodo} segundos, su frecuencia es de ___."

explicacion: |
  La frecuencia (f) es el inverso del periodo (T), es decir, f = 1/T. Si T = 0.5s, f = 1/0.5 = 2 Hz. Si T = 2s, f = 1/2 = 0.5 Hz.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["isocronismo", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "En un péndulo simple ideal (sin fricción), el periodo de oscilación depende de la amplitud del movimiento (si la amplitud es muy grande)."

explicacion: |
  Para ángulos pequeños, el péndulo es isócrono, lo que significa que su periodo es independiente de la amplitud. En el modelo ideal de física básica, asumimos que el periodo es constante sin importar la amplitud.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fase", "ciclo"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas:
  - "punto de equilibrio"
  - "posición de equilibrio"

enunciado: "Un ciclo completo de oscilación se define como el tiempo que tarda el objeto en ir desde el ___ hasta el extremo opuesto y regresar al mismo punto inicial."

explicacion: |
  Un error común es pensar que el ciclo solo ocurre entre extremos. El ciclo es el recorrido completo que incluye pasar por el punto de equilibrio en ambas direcciones.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["secuencia", "movimiento"]

respuesta_orden: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]

enunciado: "Ordena la secuencia de posiciones que recorre un objeto que oscila, partiendo desde un extremo hacia el otro y regresando:"

explicacion: |
  Para completar un ciclo completo, el objeto debe recorrer la distancia total de ida y vuelta, pasando por el centro (punto de equilibrio) en cada tramo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "frecuencia", "conceptos_basicos"]

variables:
  frecuencia_ejemplo: 5.0

respuesta: "El tiempo que tarda en completarse un ciclo"
tipo: mc
opciones_explicitas: ["El tiempo que tarda en completarse un ciclo", "El número de ciclos por unidad de tiempo", "La distancia máxima desde el punto de equilibrio", "La velocidad máxima del objeto"]

enunciado: "Si un péndulo realiza un movimiento repetitivo, ¿qué magnitud representa el tiempo necesario para que se complete un ciclo completo?"

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo, mientras que la frecuencia (f) es la cantidad de ciclos que ocurren en un segundo. Son inversamente proporcionales: f = 1/T.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["ciclo", "movimiento_repetitivo"]

respuesta: verdadero
tipo: vf
enunciado: "En un movimiento oscilatorio, un 'ciclo completo' implica que el objeto regresa exactamente a su posición inicial con la misma dirección de movimiento que tenía al comenzar."

explicacion: |
  Correcto. Para que un movimiento sea considerado periódico y completar un ciclo, el sistema debe volver al mismo estado (posición y velocidad) para iniciar una nueva repetición.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["calculo", "frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 0.5], [0.5, 2.0]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - 0.5
  - 2.0

enunciado: "Si el periodo de una oscilación es de {datos[idx][0]} segundos, la frecuencia de dicha oscilación es de ___ Hz."

pasos:
  - "Identificar el valor del periodo (T = {datos[idx][0]})"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"

explicacion: |
  Utilizando la relación f = 1/T, si T = {datos[idx][0]}, entonces f = 1/{datos[idx][0]} = {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["amplitud", "periodo", "distincion"]

respuesta: "Amplitud"
tipo: mc
opciones_explicitas: ["Amplitud", "Frecuencia", "Aceleración", "Velocidad"]

enunciado: "Mientras que el periodo mide el tiempo de un ciclo, la ___ mide la distancia máxima desde la posición de equilibrio."

explicacion: |
  La amplitud es una medida de longitud (distancia), mientras que el periodo es una medida de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "ciclo", "posicion"]

respuesta_orden: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]
tipo: ordenar
opciones_explicitas: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]

enunciado: "Ordena las posiciones que recorre un objeto que oscila, comenzando desde su máxima elongación a la derecha, hasta completar un ciclo completo."

explicacion: |
  Un ciclo completo implica volver al punto de partida tras haber pasado por el centro y el extremo opuesto. La secuencia lógica es: Máximo (+A) -> Centro (0) -> Mínimo (-A) -> Centro (0) -> Regreso al Máximo (+A).
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["pendulo", "periodo"]

variables:
  datos: [["un péndulo de 1 metro", 2.0], ["un péndulo de 0.25 metros", 1.0]]
  idx: uno_de([0, 1])

enunciado: "En un reloj antiguo, observamos que {datos[idx][0]} completa un ciclo de vaivén en {datos[idx][1]} segundos. ¿Cuál es el periodo de este movimiento?"

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo completo de movimiento. En este caso, el tiempo dado es el periodo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "ritmo_cardiaco"]

variables:
  frecuencia_corazon: uno_de([60, 75, 120])

enunciado: "Un atleta tiene una frecuencia cardíaca de {frecuencia_corazon} latidos por minuto. Si consideramos cada latido como un ciclo de oscilación, ¿cuántos segundos tarda en realizar un solo latido (periodo)?"

pasos:
  - "Convertir la frecuencia de latidos/minuto a latidos/segundo: {frecuencia_corazon} / 60"
  - "Calcular el periodo como el inverso de la frecuencia: 1 / (frecuencia_corazon / 60)"

respuesta: 60 / frecuencia_corazon
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El periodo es el inverso de la frecuencia. Si el atleta tiene {frecuencia_corazon} latidos por minuto, el periodo es 60/{frecuencia_corazon} segundos.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["oscilacion", "conceptos"]

enunciado: "Si un niño en un columpio completa 10 oscilaciones completas en un tiempo total de 20 segundos, ¿cuál es el periodo de la oscilación?"

opciones_explicitas: ["0.5 s", "2.0 s", "20 s", "200 s"]
respuesta: "2.0 s"
tipo: mc

explicacion: |
  El periodo T se calcula dividiendo el tiempo total entre el número de oscilaciones: T = tiempo / n = 20s / 10 = 2.0 s.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "Un movimiento se considera periódico si se repite en intervalos de tiempo iguales. Si un objeto realiza un ciclo completo, ¿el tiempo transcurrido es el periodo?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exactamente. Por definición, el periodo es el tiempo requerido para que el sistema complete una oscilación o ciclo completo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fases", "ciclo"]

variables:
  estado_inicial: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]

enunciado: "Un pistón de motor realiza un movimiento oscilatorio. Si su estado inicial es {estado_inicial[0]}, ordene los eventos que marcan un ciclo completo de oscilación."

opciones_explicitas: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
respuesta_orden: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
tipo: ordenar

explicacion: |
  Un ciclo completo debe pasar por todos los puntos de la trayectoria y regresar al punto de partida para ser considerado una oscilación cerrada.
```

