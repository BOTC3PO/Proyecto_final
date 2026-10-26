# Vida Cotidiana / Vial — Distancia de frenado (cuestionario, 26 preguntas VBLang)

> Tema: `V1` (puente Álgebra → Vida Cotidiana/Vial). Ver `teoria.md` en
> esta misma carpeta.

La velocidad se construye como v=2·a·p (p entero) para que
d=v²/(2a)=2·a·p² dé siempre un resultado entero exacto.

---

### 1 — Distancia de frenado

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["frenado"]

variables:
  a: random(2, 8)
  p: random(1, 6)
  v: 2 * a * p

respuesta: 2 * a * p ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un auto va a {v} m/s y frena con desaceleración {a} m/s². ¿Cuál es la distancia de frenado?"

pasos:
  - "d = v²/(2a) = {v ^ 2}/{2 * a} = {2 * a * p ^ 2}"

explicacion: |
  d_frenado = v²/(2a).
```

### 2 — Distancia de frenado: otro caso

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["frenado"]

variables:
  a: random(2, 10)
  p: random(1, 5)
  v: 2 * a * p

respuesta: 2 * a * p ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un auto va a {v} m/s y frena con desaceleración {a} m/s². ¿Cuál es la distancia de frenado?"

explicacion: |
  d = {v}²/(2×{a}) = {2 * a * p ^ 2}.
```

### 3 — Distancia de reacción

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "basico"
  tags: ["reaccion"]

variables:
  v: random(10, 40)
  t_reaccion: 1

respuesta: v * t_reaccion
tipo: input
tolerancia_abs: 0

enunciado: "Un auto va a {v} m/s. El conductor tarda {t_reaccion} s en reaccionar antes de frenar. ¿Cuánto avanza durante ese tiempo?"

explicacion: |
  d_reacción = v×t_reacción — un MRU simple, a velocidad constante.
```

### 4 — Distancia de reacción: tiempo distinto de 1 s

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["reaccion"]

variables:
  v: random(10, 40)
  t_reaccion: random_float(1, 2)

respuesta: v * t_reaccion
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto va a {v} m/s. El conductor tarda {t_reaccion} s en reaccionar (por cansancio o distracción, más que el segundo típico). ¿Cuánto avanza durante ese tiempo?"

explicacion: |
  d_reacción = v×t_reacción — más tiempo de reacción, más distancia
  recorrida antes de siquiera empezar a frenar.
```

### 5 — Distancia total de detención

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["total"]

variables:
  a: random(2, 8)
  p: random(1, 6)
  v: 2 * a * p
  t_reaccion: 1

respuesta: (v * t_reaccion) + (2 * a * p ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "Un auto va a {v} m/s, con tiempo de reacción {t_reaccion} s y desaceleración de frenado {a} m/s². ¿Cuál es la distancia TOTAL de detención?"

pasos:
  - "d_reacción = {v}×{t_reaccion} = {v * t_reaccion}"
  - "d_frenado = {v}²/(2×{a}) = {2 * a * p ^ 2}"
  - "Total = {v * t_reaccion} + {2 * a * p ^ 2} = {(v * t_reaccion) + (2 * a * p ^ 2)}"

explicacion: |
  Hay que sumar los dos tramos, no calcular sólo uno de los dos.
```

### 6 — Duplicar la velocidad: verificar que cuadruplica la distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(2, 8)
  p: random(1, 5)
  v1: 2 * a * p
  v2: 2 * v1
  d1: 2 * a * p ^ 2
  d2: 2 * a * (2 * p) ^ 2

respuesta: (d2 == (4 * d1))
tipo: vf

enunciado: "A v={v1} m/s, la distancia de frenado es {d1} m. Al doble de velocidad ({v2} m/s), la distancia de frenado es {d2} m. ¿Es {d2} igual a 4 veces {d1}?"

explicacion: |
  Duplicar la velocidad no duplica la distancia de frenado — la
  CUADRUPLICA, porque la fórmula usa v al cuadrado.
```

### 7 — Verificar la relación cuadrática (caso falso: creer que duplica)

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  a: random(2, 8)
  p: random(1, 5)
  d1: 2 * a * p ^ 2
  d2: 2 * a * (2 * p) ^ 2

respuesta: (d2 == (2 * d1))
tipo: vf

enunciado: "Si se duplica la velocidad, ¿la distancia de frenado también se duplica (pasa de {d1} a {2 * d1})?"

explicacion: |
  No — se cuadruplica, no se duplica. {d1}×2 no es el valor real de la
  nueva distancia de frenado.
```

### 8 — El caso 120 vs. 100: verificar el 44% con enteros (cross-check)

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(2, 6)
  p: random(1, 4)
  v1: 10 * a * p
  v2: 12 * a * p
  d1: 50 * a * p ^ 2
  d2: 72 * a * p ^ 2

respuesta: ((25 * d2) == (36 * d1))
tipo: vf

enunciado: "v₁={v1} m/s y v₂={v2} m/s (v₂ es 20% más rápida que v₁). Sus distancias de frenado son d₁={d1} m y d₂={d2} m. ¿Es exacta la relación d₂/d₁ = 36/25 (o sea, 44% más)?"

pasos:
  - "20% más rápido: v₂ = 1.2×v₁ → v₂² = 1.44×v₁² → d₂ = 1.44×d₁ = 44% más distancia"

explicacion: |
  Es el ejemplo clásico: 20% más velocidad da 44% más distancia de
  frenado, porque 1.2² = 1.44.
```

### 9 — Concepto: por qué crece con el cuadrado

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de frenado crece con el CUADRADO de la velocidad, no en proporción directa."

explicacion: |
  d_frenado = v²/(2a) — la v está elevada al cuadrado.
```

### 10 — Concepto: 120 vs 100 no es "20% más peligroso"

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Ir a 120 km/h en vez de 100 km/h da, aproximadamente, un 20% más de distancia de frenado (la misma proporción que el aumento de velocidad)."

explicacion: |
  Da un 44% más, no un 20% más — la relación no es lineal, es
  cuadrática.
```

### 11 — Concepto: distancia total = reacción + frenado

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia total de detención de un auto es la suma de la distancia de reacción y la distancia de frenado."

explicacion: |
  Son dos tramos distintos del movimiento — hay que sumarlos, no usar
  sólo uno.
```

### 12 — Concepto: distancia de reacción es un MRU

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el tiempo de reacción, el auto se mueve a velocidad constante (todavía no empezó a frenar) — es un MRU."

explicacion: |
  Recién después de reaccionar el conductor pisa el freno; antes de eso,
  la velocidad no cambió.
```

### 13 — Concepto: error de olvidar la distancia de reacción

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Calcular sólo la distancia de frenado (v²/2a), sin sumar la de reacción, ya da la distancia total correcta hasta detenerse."

explicacion: |
  Falta sumar la distancia de reacción — el resultado sin ella
  subestima la distancia real necesaria para parar.
```

### 14 — Concepto: mayor tiempo de reacción, mayor distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un conductor cansado o distraído, con mayor tiempo de reacción, necesita más distancia total para detenerse, aunque frene igual de fuerte."

explicacion: |
  La distancia de reacción crece linealmente con el tiempo de reacción.
```

### 15 — Concepto: piso mojado

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con el piso mojado, la desaceleración de frenado que puede lograr el auto es menor, así que la distancia de frenado es mayor (a igual velocidad)."

explicacion: |
  Un valor de a más chico en el denominador da una distancia mayor
  (d=v²/2a) — menos "agarre" significa más distancia para parar.
```

### 16 — Aplicar: hallar la desaceleración necesaria

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  d_sol: random(2, 8)
  p: random(1, 5)
  v: 2 * d_sol * p

respuesta: d_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un auto va a {v} m/s y necesita detenerse en {2 * d_sol * p ^ 2} m. ¿Qué desaceleración mínima necesita?"

pasos:
  - "a = v²/(2d) = {v ^ 2}/{2 * (2 * d_sol * p ^ 2)}"

explicacion: |
  Se despeja a de la misma fórmula, ahora con la distancia como dato
  conocido.
```

### 17 — Verificación con error: distancia de frenado

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 8)
  p: random(1, 6)
  v: 2 * a * p
  real: 2 * a * p ^ 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un auto va a {v} m/s y frena con desaceleración {a} m/s². ¿Es correcto que la distancia de frenado sea {propuesto} m?"

explicacion: |
  La distancia correcta es v²/(2a) = {real}.
```

### 18 — Aplicar: comparar dos autos a distinta velocidad

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(2, 8)
  p1: random(1, 4)
  p2: random(5, 8)
  d1: 2 * a * p1 ^ 2
  d2: 2 * a * p2 ^ 2

respuesta: (d2 > d1)
tipo: vf

enunciado: "Dos autos frenan con la misma desaceleración {a} m/s². El primero iba a {2 * a * p1} m/s, el segundo a {2 * a * p2} m/s. ¿Frena más lejos el segundo?"

explicacion: |
  Mayor velocidad inicial (con la misma desaceleración) siempre da mayor
  distancia de frenado.
```

### 19 — Concepto: unidades — convertir km/h a m/s

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de aplicar las fórmulas de frenado (que están en el sistema SI), hay que convertir la velocidad de km/h a m/s si el dato viene en km/h."

explicacion: |
  Mezclar unidades sin convertir da un resultado numérico sin sentido,
  aunque las fórmulas estén bien planteadas.
```

### 20 — Aplicar: distancia total en contexto de velocidad máxima urbana

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(3, 7)
  p: random(2, 5)
  v: 2 * a * p

respuesta: v + (2 * a * p ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "Un auto circula a {v} m/s en una zona urbana, con tiempo de reacción de 1 s y desaceleración de frenado {a} m/s². ¿Cuál es la distancia total de detención?"

explicacion: |
  d_total = v×1 + v²/(2a) — el mismo cálculo de siempre.
```

### 21 — Concepto: la desaceleración no es la misma para todos los autos

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La desaceleración de frenado que puede lograr un auto depende del estado de los frenos y los neumáticos, no es un número universal fijo."

explicacion: |
  Por eso no hay un único valor de a "correcto" — depende del vehículo y
  las condiciones.
```

### 22 — Aplicar: hallar la velocidad máxima segura dada una distancia disponible

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(2, 8)
  p: random(1, 6)

respuesta: 2 * a * p
tipo: input
tolerancia_abs: 0

enunciado: "Un obstáculo aparece a {2 * a * p ^ 2} m de distancia. Con desaceleración de frenado {a} m/s², ¿cuál es la máxima velocidad a la que el auto puede ir para frenar justo a tiempo (sin contar tiempo de reacción)?"

pasos:
  - "v² = 2a·d → v = √(2×{a}×{2 * a * p ^ 2})"

explicacion: |
  Es la misma fórmula despejada al revés: de la distancia máxima
  disponible se obtiene la velocidad máxima segura.
```

### 23 — Concepto: relación con la ecuación cuadrática

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de distancia de frenado (d=v²/2a) es, en el fondo, la misma ecuación cuadrática sin tiempo ya vista en `../../fisica/mruv/` (v²=v₀²+2aΔx), con velocidad final 0."

explicacion: |
  0 = v₀² − 2aΔx (desacelerando) → Δx = v₀²/(2a) — la misma relación.
```

### 24 — Concepto: reducir la velocidad un poco reduce mucho la distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por la relación cuadrática, reducir un poco la velocidad reduce la distancia de frenado más de lo que uno esperaría intuitivamente (pensando en una relación lineal)."

explicacion: |
  Es la misma idea que el caso 120 vs 100, mirada al revés: bajar la
  velocidad da un beneficio de seguridad más que proporcional.
```

### 25 — Aplicar: comparar auto y camión con distinta desaceleración

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a_auto: random(6, 9)
  a_camion: random(2, 4)

respuesta: (a_camion < a_auto)
tipo: vf

enunciado: "Un auto puede desacelerar a {a_auto} m/s² frenando, y un camión (más pesado) sólo a {a_camion} m/s². A la misma velocidad, ¿necesita el camión más distancia para frenar que el auto?"

explicacion: |
  Con a menor en el denominador, la distancia de frenado d=v²/(2a) da
  mayor — el peso y el tipo de frenos hacen que un camión desacelere
  más lento que un auto.
```

### 26 — Concepto: cierre del tema — dos causas, una relación no lineal

```
metadata:
  materia: "matematicas"
  tema: "distancia_frenado"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la distancia de frenado combina dos ideas: sumar dos tramos distintos (reacción + frenado), y que uno de esos tramos no crece en proporción directa con la velocidad, sino con su cuadrado."

explicacion: |
  Es el resumen de todo el tema: por qué manejar rápido es
  desproporcionadamente más peligroso de lo que parece a primera vista.
```
