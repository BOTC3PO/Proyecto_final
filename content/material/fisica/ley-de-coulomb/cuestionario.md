# Física — Ley de Coulomb: F = kq₁q₂/r² (cuestionario, 24 preguntas VBLang)

> Tema: `F12`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué establece la ley de Coulomb

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "vocabulario"]

enunciado: "¿Qué establece la ley de Coulomb?"
tipo: mc
opciones_explicitas:
  - "La fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas"
  - "Toda carga eléctrica genera la misma fuerza sin importar su magnitud"
  - "La fuerza eléctrica es siempre atractiva, nunca repulsiva"
respuesta: "La fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas"

explicacion: |
  F = k × q₁ × q₂ / r², la misma forma matemática que la gravitación,
  aplicada a cargas en vez de masas.
```

### 2 — Completar: la fórmula de Coulomb

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "completar"]

tipo: completar
enunciado: "Completá: F = k × q₁ × q₂ / r², donde k se llama la constante de ___."
respuestas_validas:
  - "Coulomb"

explicacion: |
  k ≈ 9×10⁹ N·m²/C² (valor redondeado habitual).
```

### 3 — Cargas del mismo signo

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "Dos cargas con el mismo signo (ambas positivas, o ambas negativas), ¿se atraen o se repelen?"
tipo: mc
opciones_explicitas:
  - "Se repelen"
  - "Se atraen"
  - "No ejercen ninguna fuerza entre sí"
respuesta: "Se repelen"

explicacion: |
  Mismo signo → repulsión, ya visto en `../cargas-electricas/`.
```

### 4 — Cargas de signo opuesto

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "Una carga positiva y una carga negativa, ¿se atraen o se repelen?"
tipo: mc
opciones_explicitas:
  - "Se atraen"
  - "Se repelen"
  - "No ejercen ninguna fuerza entre sí"
respuesta: "Se atraen"

explicacion: |
  Signos opuestos → atracción.
```

### 5 — La fuerza eléctrica puede repeler; la gravitatoria no

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la fuerza gravitatoria (siempre atractiva), la fuerza eléctrica puede ser atractiva o repulsiva."

explicacion: |
  No existe "masa negativa" para la gravitación, pero sí existen
  cargas negativas para la electricidad.
```

### 6 — Misma forma matemática que la gravitación

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Coulomb (F=kq₁q₂/r²) tiene exactamente la misma forma matemática que la ley de gravitación de Newton (F=Gm₁m₂/r²)."

explicacion: |
  Mismo patrón (proporcional al producto, inversamente proporcional al
  cuadrado de la distancia), aplicado a cargas en vez de masas.
```

### 7 — Si la distancia se duplica

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

respuesta: redondear(1 / (2 ^ 2), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Si la distancia entre dos cargas se duplica (sin cambiar las cargas), ¿a qué fracción de la fuerza original queda reducida la fuerza eléctrica?"

pasos:
  - "F_nueva / F_original = 1 / 2² = {redondear(1 / (2 ^ 2), 4)}"

explicacion: |
  Es la misma ley de cuadrado inverso que la gravitación.
```

### 8 — Si una carga se triplica

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "problema"]

respuesta: 3
tipo: input

enunciado: "Si una de las dos cargas se triplica (la otra carga y la distancia no cambian), ¿cuántas veces mayor queda la fuerza eléctrica?"

pasos:
  - "F es directamente proporcional a cada carga: triplicarla triplica F."

explicacion: |
  Cada carga entra de forma lineal en la fórmula, igual que cada masa
  en la gravitación.
```

### 9 — Problema: fuerza entre dos cargas

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

variables:
  q1: random(1, 10)
  q2: random(1, 10)
  r: uno_de([0.5, 1, 2])

respuesta: redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 3)
tipo: input
tolerancia_abs: 0.05
unidad: "N"

enunciado: "Dos cargas de {q1} µC y {q2} µC están separadas por {r} m (k=9×10⁹ N·m²/C²). ¿Cuál es la magnitud de la fuerza eléctrica entre ellas?"

pasos:
  - "En Coulomb: q₁={q1}×10⁻⁶ C, q₂={q2}×10⁻⁶ C"
  - "F = k × q₁ × q₂ / r² = 9×10⁹ × {q1}×10⁻⁶ × {q2}×10⁻⁶ / {r}² = {redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 3)} N"

explicacion: |
  1 microcoulomb (µC) = 10⁻⁶ C — las cargas cotidianas de electricidad
  estática se miden en esta escala, no en Coulombs enteros.
```

### 10 — Qué unidad se usa para la carga eléctrica

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "vocabulario"]

enunciado: "¿En qué unidad se mide la carga eléctrica en el Sistema Internacional?"
tipo: mc
opciones_explicitas:
  - "Coulomb (C)"
  - "Newton (N)"
  - "Amperio (A)"
respuesta: "Coulomb (C)"

explicacion: |
  Las cargas cotidianas suelen expresarse en microcoulombs (µC =
  10⁻⁶ C) porque un Coulomb entero es una cantidad de carga enorme.
```

### 11 — Valor aproximado de k

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb"]

enunciado: "¿Cuál es el valor aproximado (redondeado) de la constante de Coulomb k?"
tipo: mc
opciones_explicitas:
  - "9×10⁹ N·m²/C²"
  - "6,674×10⁻¹¹ N·m²/kg²"
  - "9,8 N/kg"
respuesta: "9×10⁹ N·m²/C²"

explicacion: |
  No confundir con G (gravitación, mucho más chico) ni con g
  (aceleración de la gravedad en la Tierra).
```

### 12 — Ambas fuerzas dependen del cuadrado de la distancia

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto la fuerza gravitatoria como la fuerza eléctrica disminuyen con el cuadrado de la distancia (ley de cuadrado inverso)."

explicacion: |
  Es el mismo patrón matemático (proporcional a 1/r²) en los dos casos.
```

### 13 — La electricidad es mucho más intensa que la gravedad

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para cargas y masas de tamaño cotidiano, la fuerza eléctrica es muchísimo más intensa que la fuerza gravitatoria entre los mismos objetos."

explicacion: |
  G (≈10⁻¹¹) es un número muchísimo más chico que k (≈10⁹) — por eso
  hacen falta masas planetarias para notar la gravedad, pero cargas
  chicas ya generan fuerzas eléctricas notables.
```

### 14 — Si ambas cargas se duplican a la vez

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

respuesta: 4
tipo: input

enunciado: "Si AMBAS cargas se duplican a la vez (la distancia no cambia), ¿cuántas veces mayor queda la fuerza eléctrica?"

pasos:
  - "F_nueva / F_original = (2×q₁ × 2×q₂) / (q₁×q₂) = 4"

explicacion: |
  Cada duplicación multiplica por 2, y son dos duplicaciones
  independientes: 2×2=4.
```

### 15 — Qué significa que el producto q₁×q₂ sea positivo

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb"]

enunciado: "Si el producto q₁×q₂ es positivo (ambas cargas positivas, o ambas negativas), ¿qué tipo de fuerza es?"
tipo: mc
opciones_explicitas:
  - "Repulsiva"
  - "Atractiva"
  - "Nula"
respuesta: "Repulsiva"

explicacion: |
  El signo del producto de las cargas indica directamente si la fuerza
  es de repulsión (producto positivo) o atracción (producto negativo).
```

### 16 — Ordenar: pasos para resolver un problema de Coulomb

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza eléctrica entre dos cargas dadas en microcoulombs."
tipo: ordenar
opciones_explicitas:
  - "Determinar si la fuerza es atractiva o repulsiva según el signo de las cargas"
  - "Convertir las cargas de microcoulombs a Coulombs (×10⁻⁶)"
  - "Aplicar F = k × q₁ × q₂ / r² con k=9×10⁹"
respuesta_orden: ["Convertir las cargas de microcoulombs a Coulombs (×10⁻⁶)", "Aplicar F = k × q₁ × q₂ / r² con k=9×10⁹", "Determinar si la fuerza es atractiva o repulsiva según el signo de las cargas"]
explicacion: |
  El cálculo numérico y la dirección (atrae/repele) se resuelven por
  separado.
```

### 17 — Aplicación real: el globo pegado a la pared

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "aplicacion"]

enunciado: "¿Por qué un globo frotado contra el pelo se queda pegado a la pared?"
tipo: mc
opciones_explicitas:
  - "El frotamiento carga eléctricamente el globo, y esa carga atrae cargas opuestas inducidas en la pared"
  - "El globo se vuelve magnético"
  - "Es un efecto de la gravedad, no de electricidad"
respuesta: "El frotamiento carga eléctricamente el globo, y esa carga atrae cargas opuestas inducidas en la pared"

explicacion: |
  Es electricidad estática: la fuerza de Coulomb entre las cargas del
  globo y las cargas inducidas en la pared.
```

### 18 — La fuerza es mutua

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza que la carga 1 ejerce sobre la carga 2 tiene la misma magnitud que la que la carga 2 ejerce sobre la carga 1 (acción y reacción)."

explicacion: |
  Es un caso más de la tercera ley de Newton, ya vista en
  `../leyes-de-newton/tercera-accion-reaccion/`.
```

### 19 — Qué mide la distancia r en la fórmula

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "¿Qué representa r en la fórmula F=k×q₁×q₂/r²?"
tipo: mc
opciones_explicitas:
  - "La distancia entre las dos cargas"
  - "El radio de una de las dos cargas"
  - "El tiempo que dura la interacción"
respuesta: "La distancia entre las dos cargas"

explicacion: |
  Las cargas se tratan como puntuales (sin tamaño), así que r es
  simplemente la distancia entre sus posiciones.
```

### 20 — La ley de Coulomb no predice la dirección exacta sin el signo

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb"]

respuesta: falso
tipo: vf

enunciado: "El valor de F = k×q₁×q₂/r² (sin considerar el signo de las cargas) alcanza por sí solo para saber si la fuerza es atractiva o repulsiva."

explicacion: |
  Hace falta mirar el signo del producto q₁×q₂ (o directamente el
  signo de cada carga) para saber la dirección — la magnitud sola no
  lo dice.
```

### 21 — Problema: distancia para lograr una fuerza dada

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

variables:
  q1: uno_de([2, 4, 5])
  q2: uno_de([2, 4, 5])
  r: uno_de([0.5, 1, 2])
  F: redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 4)

respuesta: r
tipo: input
tolerancia_abs: 0.01
unidad: "m"

enunciado: "Dos cargas de {q1} µC y {q2} µC (k=9×10⁹ N·m²/C²) ejercen entre sí una fuerza de {F} N. ¿A qué distancia están? (usá la misma fórmula despejando r)"

pasos:
  - "r² = k × q₁ × q₂ / F = 9×10⁹ × {q1}×10⁻⁶ × {q2}×10⁻⁶ / {F}"
  - "r = {r} m"

explicacion: |
  Es el mismo despeje que ya se practicó con otras fórmulas de
  `../formulas-con-literales/`, aplicado ahora a la ley de Coulomb.
```

### 22 — La ley de Coulomb es la base de la electrostática

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Coulomb es el punto de partida para entender fuerzas y campos eléctricos más complejos, con más de dos cargas."

explicacion: |
  Con más cargas se suman (vectorialmente) las fuerzas de Coulomb de
  cada par, pero la ley de base sigue siendo la misma.
```

### 23 — No confundir k con G

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

enunciado: "¿Cuál de estas afirmaciones distingue correctamente k (Coulomb) de G (gravitación)?"
tipo: mc
opciones_explicitas:
  - "k (≈9×10⁹) es enorme y G (≈6,674×10⁻¹¹) es diminuta — son constantes de fenómenos distintos, con órdenes de magnitud opuestos"
  - "k y G son el mismo número, sólo cambia el nombre"
  - "k se usa para masas y G para cargas"
respuesta: "k (≈9×10⁹) es enorme y G (≈6,674×10⁻¹¹) es diminuta — son constantes de fenómenos distintos, con órdenes de magnitud opuestos"

explicacion: |
  Esa diferencia de magnitud entre k y G es la razón de fondo por la
  que la fuerza eléctrica domina sobre la gravitatoria a escala
  cotidiana.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la ley de Coulomb?"
tipo: mc
opciones_explicitas:
  - "Para calcular la fuerza eléctrica entre dos cargas, y saber si atraen o repelen, a partir de sus magnitudes y su distancia"
  - "Sólo sirve para calcular fuerzas gravitatorias"
  - "Sólo aplica a cargas del mismo signo"
respuesta: "Para calcular la fuerza eléctrica entre dos cargas, y saber si atraen o repelen, a partir de sus magnitudes y su distancia"

explicacion: |
  Es la versión eléctrica del mismo patrón matemático que la
  gravitación universal, aplicado a un fenómeno que además puede
  repeler, no sólo atraer.
```
