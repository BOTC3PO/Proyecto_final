# Física — MRUV (cuestionario, 28 preguntas VBLang)

> Tema: `F3` (puente Álgebra → Física, primera mitad). Ver `teoria.md`
> en esta misma carpeta.

---

### 1 — Velocidad en función del tiempo

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

### 2 — Velocidad en función del tiempo: frenando

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

### 3 — Posición en función del tiempo

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

### 4 — Posición partiendo del reposo

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

### 5 — Ecuación sin tiempo: hallar la velocidad final

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

### 6 — Ecuación sin tiempo: hallar la distancia recorrida

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

### 7 — Hallar la aceleración

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

### 8 — Hallar el tiempo dado v0, v y a

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

### 9 — Concepto: gráfico v-t de un MRUV

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

### 10 — Concepto: gráfico x-t de un MRUV

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

### 11 — Concepto: la pendiente del gráfico v-t es la aceleración

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

### 12 — Error común: olvidar el ½

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

### 13 — Concepto: MRUV no usa v=d/t directamente

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

### 14 — Verificación con error: velocidad

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

### 15 — Aplicar: distancia de un avión acelerando en la pista

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

### 16 — Concepto: velocidad inicial vs. velocidad en un instante

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

### 17 — Concepto: aceleración negativa no siempre es frenar

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

### 18 — Ecuación sin tiempo: verificar consistencia

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

### 19 — Aplicar: velocidad de un objeto que cae (adelanto de tiro vertical)

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

### 20 — Concepto: unidades de la aceleración

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

### 21 — Hallar v0 dado v, a y t

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

### 22 — Concepto: MRUV con a=0 es MRU

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

### 23 — Aplicar: espacio de frenado simple (adelanto de distancia-frenado)

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

### 24 — Concepto: velocidad cero no significa aceleración cero

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

### 25 — Verificación con error: posición

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

### 26 — Concepto: elegir la fórmula correcta según los datos

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

### 27 — Aplicar: aceleración negativa, tiempo para detenerse

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

### 28 — Concepto: relación con la ecuación cuadrática

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
