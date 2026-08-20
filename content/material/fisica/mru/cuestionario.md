# Física — MRU: v = d/t (cuestionario, 26 preguntas VBLang)

> Tema: `F2` (puente Álgebra → Física). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Evaluar la posición: x(t) = x₀ + vt

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

### 2 — Evaluar la posición: partiendo del origen

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

### 3 — Identificar la velocidad como pendiente

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

### 4 — Identificar la posición inicial

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

### 5 — Hallar la velocidad a partir de dos posiciones

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

### 6 — Área bajo v-t: distancia recorrida

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

### 7 — Área bajo v-t: tramo parcial

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

### 8 — Encuentro de dos móviles: hallar el tiempo

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

### 9 — Encuentro de dos móviles: hallar la posición del encuentro

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

### 10 — Concepto: gráfico x-t de un MRU

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

### 11 — Concepto: gráfico v-t de un MRU

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

### 12 — Concepto: pendiente más inclinada es más velocidad

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

### 13 — Concepto: velocidad negativa

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

### 14 — Concepto: dos rectas paralelas nunca se encuentran

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

### 15 — Aplicar: tiempo para recorrer una distancia

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

### 16 — Verificación con error: posición

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

### 17 — Concepto: área bajo v-t con velocidad variable (adelanto)

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

### 18 — Aplicar: dos móviles en sentidos opuestos

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

### 19 — Concepto: MRU no tiene aceleración

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

### 20 — Concepto: dominio de x(t) en un problema real

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

### 21 — Aplicar: velocidad media en un tramo con paradas (no es MRU puro)

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

### 22 — Verificación con error: velocidad de dos puntos

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

### 23 — Concepto: intersección con el eje x

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

### 24 — Aplicar: alcance entre dos móviles con distinta salida

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

### 25 — Concepto: velocidad constante y aceleración cero son lo mismo

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

### 26 — Aplicar: distancia total con dos tramos a distinta velocidad

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
