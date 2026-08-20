# Matemática — División de polinomios: Teorema del resto y Ruffini (cuestionario, 26 preguntas VBLang)

> Tema: `A6B` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Teorema del resto: evaluar directamente

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["teorema_resto"]

variables:
  c3: random(1, 5)
  c2: random(-5, 5)
  c1: random(-5, 5)
  c0: random(-10, 10)
  a: random(1, 6)

respuesta: c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c3}x³ + {c2}x² + {c1}x + {c0}. Por el teorema del resto, ¿cuál es el resto de dividir P(x) por (x − {a})?"

pasos:
  - "El resto es P({a}) = {c3}×{a}³ + {c2}×{a}² + {c1}×{a} + {c0} = {c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0}"

explicacion: |
  No hace falta dividir: el resto es directamente el valor del polinomio
  evaluado en a.
```

### 2 — Teorema del resto: divisor con signo positivo (x+a)

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["teorema_resto", "signos"]

variables:
  c2: random(1, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 6)

respuesta: c2 * (-a) ^ 2 + c1 * (-a) + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por (x + {a})?"

pasos:
  - "(x + {a}) es lo mismo que (x − (−{a})), así que se evalúa en x = −{a}"

explicacion: |
  Dividir por (x+a) equivale a evaluar en x = −a, no en x = a — un
  descuido común de signo.
```

### 3 — Teorema del resto: otro polinomio

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["teorema_resto"]

variables:
  c3: random(1, 4)
  c1: random(-8, 8)
  c0: random(-10, 10)
  a: random(1, 5)

respuesta: c3 * a ^ 3 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c3}x³ + {c1}x + {c0} (sin término x²). ¿Cuál es el resto de dividir P(x) por (x − {a})?"

explicacion: |
  Falta el término x², pero el procedimiento es el mismo: evaluar en
  x = {a}.
```

### 4 — Ruffini paso a paso: bajar y multiplicar (segundo coeficiente)

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini"]

variables:
  c3: random(1, 5)
  c2: random(-8, 8)
  a: random(1, 6)

respuesta: c2 + c3 * a
tipo: input
tolerancia_abs: 0

enunciado: "Dividiendo por Ruffini un polinomio con coeficientes {c3}, {c2}, ... por (x − {a}): se baja el {c3}, se multiplica por {a}, y se suma al siguiente coeficiente ({c2}). ¿Qué número queda?"

explicacion: |
  {c2} + ({c3}×{a}) = {c2 + c3 * a}.
```

### 5 — Ruffini paso a paso: tercer coeficiente

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini"]

variables:
  c3: random(1, 5)
  c2: random(-8, 8)
  c1: random(-8, 8)
  a: random(1, 6)
  paso2: c2 + c3 * a

respuesta: c1 + paso2 * a
tipo: input
tolerancia_abs: 0

enunciado: "Siguiendo Ruffini: el paso anterior dio {paso2}. Se multiplica por {a} y se suma al siguiente coeficiente ({c1}). ¿Qué número queda?"

explicacion: |
  {c1} + ({paso2}×{a}) = {c1 + paso2 * a}.
```

### 6 — Ruffini paso a paso: el resto final

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini"]

variables:
  c3: random(1, 4)
  c2: random(-6, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 5)
  paso2: c2 + c3 * a
  paso3: c1 + paso2 * a

respuesta: c0 + paso3 * a
tipo: input
tolerancia_abs: 0

enunciado: "Último paso de Ruffini: el paso anterior dio {paso3}. Se multiplica por {a} y se suma al término independiente ({c0}). ¿Cuál es el resto?"

explicacion: |
  {c0} + ({paso3}×{a}) = {c0 + paso3 * a} — este último número es el
  resto de la división.
```

### 7 — Ruffini completo: coincide con el teorema del resto

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c3: random(1, 4)
  c2: random(-6, 6)
  c1: random(-6, 6)
  c0: random(-10, 10)
  a: random(1, 5)
  paso2: c2 + c3 * a
  paso3: c1 + paso2 * a
  resto_ruffini: c0 + paso3 * a
  resto_teorema: c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0

respuesta: (resto_ruffini == resto_teorema)
tipo: vf

enunciado: "P(x) = {c3}x³ + {c2}x² + {c1}x + {c0}. ¿El resto que da Ruffini al dividir por (x−{a}) coincide con P({a}) calculado directamente?"

explicacion: |
  Tienen que coincidir siempre — son dos formas distintas de calcular
  exactamente lo mismo.
```

### 8 — Teorema del factor: ¿(x−a) es factor?

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  r: random(1, 10)
  c1: random(1, 8)
  c0: -c1 * r
  a: uno_de([r, r + 1, r - 1, r + 2])

respuesta: ((c1 * a + c0) == 0)
tipo: vf

enunciado: "P(x) = {c1}x + {c0}. ¿Es (x − {a}) un factor de P(x)?"

explicacion: |
  (x−{a}) es factor si y sólo si P({a}) = 0 — se verifica evaluando.
```

### 9 — Teorema del factor: caso cúbico

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  r1: random(1, 5)
  r2: random(1, 5)
  a: uno_de([r1, r2, r1 + r2])

respuesta: (((a - r1) * (a - r2) * a) == 0)
tipo: vf

enunciado: "P(x) = x(x − {r1})(x − {r2}) (ya factoreado). ¿Es (x − {a}) uno de sus factores?"

explicacion: |
  Los únicos factores de la forma (x−k) son con k = 0, {r1} o {r2} — los
  valores que hacen 0 a cada factor.
```

### 10 — Concepto: qué dice el teorema del resto

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El resto de dividir P(x) por (x − a) es igual a P(a)."

explicacion: |
  Es el enunciado exacto del teorema del resto.
```

### 11 — Concepto: qué dice el teorema del factor

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si P(a) = 0, entonces (x − a) es un factor de P(x)."

explicacion: |
  Es el corolario directo del teorema del resto: resto 0 significa
  división exacta, o sea, (x−a) divide a P(x) sin dejar resto.
```

### 12 — Concepto: signo del valor a usar en Ruffini

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "signos", "opcion_multiple"]

variables:
  k: random(1, 15)

respuesta: -k
tipo: mc
opciones_explicitas:
  - -k
  - k

enunciado: "Para dividir un polinomio por (x + {k}) usando Ruffini, ¿qué valor de a hay que usar?"

explicacion: |
  (x + {k}) = (x − (−{k})), así que a = −{k}, no {k}.
```

### 13 — Concepto: Ruffini sólo para binomios simples

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La regla de Ruffini se puede usar para dividir por cualquier polinomio, sin importar su grado."

explicacion: |
  Ruffini sólo funciona para divisores de la forma (x − a) — un binomio
  de grado 1 con coeficiente 1 en x.
```

### 14 — Concepto: completar coeficientes faltantes

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar Ruffini a x³ − 1, hay que usar los coeficientes 1, 0, 0, −1 (completando con ceros los grados que no aparecen)."

explicacion: |
  Faltan los términos x² y x — sus coeficientes son 0, y hay que
  incluirlos para que Ruffini funcione bien.
```

### 15 — Concepto: grado del cociente

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto"]

variables:
  n: random(2, 8)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Al dividir un polinomio de grado {n} por (x − a), ¿qué grado tiene el cociente?"

explicacion: |
  Siempre un grado menos que el polinomio original, porque se le "saca"
  el factor (x−a), de grado 1.
```

### 16 — Verificar división completa: dividendo = divisor×cociente+resto

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(1, 15)
  a: random(1, 8)
  q1: random(1, 6)
  q0: random(-8, 8)
  r: random(1, 9)

respuesta: (((x - a) * (q1 * x + q0) + r) == ((q1 * x ^ 2 + (q0 - a * q1) * x + (r - a * q0))))
tipo: vf

enunciado: "Si el cociente de dividir P(x) por (x−{a}) es {q1}x+{q0}, y el resto es {r}, ¿P(x) tiene que ser igual a (x−{a})({q1}x+{q0})+{r}, evaluado en x={x}?"

explicacion: |
  Es la verificación general de cualquier división: dividendo = divisor
  × cociente + resto.
```

### 17 — Aplicar teorema del resto: verificación con error

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c2: random(1, 6)
  c1: random(-8, 8)
  c0: random(-10, 10)
  a: random(1, 6)
  real: c2 * a ^ 2 + c1 * a + c0
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Es correcto que el resto de dividir por (x−{a}) sea {propuesto}?"

explicacion: |
  El resto correcto es P({a}) = {real}.
```

### 18 — Ruffini con a=0

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["ruffini"]

variables:
  c2: random(1, 8)
  c1: random(-8, 8)
  c0: random(-10, 10)

respuesta: c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por x (o sea, por x − 0)?"

explicacion: |
  P(0) = {c0} — el término independiente es directamente el resto de
  dividir por x.
```

### 19 — Teorema del factor en contexto: hallar la raíz

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor"]

variables:
  r: random(1, 12)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Se sabe que P(x) = x − {r} tiene resto 0 al dividir por (x − k), para un único valor de k. ¿Cuánto vale k?"

explicacion: |
  P(x) es cero exactamente en x = {r} — ese es el único k para el que
  (x−k) divide exacto a P(x).
```

### 20 — Concepto: Ruffini con coeficiente principal negativo

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini", "signos"]

variables:
  c2: random(-8, -2)
  c1: random(-8, 8)
  a: random(1, 6)

respuesta: c1 + c2 * a
tipo: input
tolerancia_abs: 0

enunciado: "Dividiendo por Ruffini {c2}x² + {c1}x + ... por (x − {a}): se baja {c2}, se multiplica por {a} y se suma al siguiente coeficiente ({c1}). ¿Qué número queda?"

explicacion: |
  El procedimiento no cambia con coeficientes negativos, sólo hay que
  llevar el signo con cuidado.
```

### 21 — Concepto: cuántos factores (x−a) puede tener un polinomio

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un polinomio de grado n puede tener, como máximo, n factores distintos de la forma (x − a)."

explicacion: |
  Cada factor (x−a) resta 1 al grado del cociente — no puede haber más
  factores lineales que el grado total del polinomio.
```

### 22 — Aplicar teorema del resto en un problema de factoreo

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["teorema_factor", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  candidato: uno_de([a, b, c, a + b + c])

respuesta: (((candidato - a) * (candidato - b) * (candidato - c)) == 0)
tipo: vf

enunciado: "P(x) = (x−{a})(x−{b})(x−{c}). ¿Es x = {candidato} una raíz de P(x) (o sea, P({candidato}) = 0)?"

explicacion: |
  Un producto da 0 si y sólo si alguno de sus factores da 0 — se verifica
  si {candidato} coincide con {a}, {b} o {c}.
```

### 23 — Ruffini: identificar los coeficientes del cociente

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["ruffini", "opcion_multiple"]

respuesta: "El primer coeficiente se baja igual, sin cambios"
tipo: mc
opciones_explicitas:
  - "El primer coeficiente se baja igual, sin cambios"
  - "El primer coeficiente se multiplica por a antes de bajar"
  - "El primer coeficiente pasa a ser el resto"

enunciado: "En el primer paso de Ruffini, ¿qué se hace con el primer coeficiente del polinomio?"

explicacion: |
  Se "baja" directamente, sin ninguna operación — recién el segundo paso
  en adelante involucra multiplicar y sumar.
```

### 24 — Concepto: relación con factoreo

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del resto sirve para probar rápidamente si un número candidato es raíz de un polinomio, antes de intentar factorearlo por completo."

explicacion: |
  En vez de adivinar un factoreo a ojo, se prueban candidatos evaluando
  P(a) — si da 0, ya se encontró un factor real.
```

### 25 — Ruffini: polinomio de grado 4

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "avanzado"
  tags: ["ruffini", "teorema_resto"]

variables:
  c4: random(1, 3)
  c3: random(-5, 5)
  c2: random(-5, 5)
  c1: random(-5, 5)
  c0: random(-8, 8)
  a: random(1, 4)

respuesta: c4 * a ^ 4 + c3 * a ^ 3 + c2 * a ^ 2 + c1 * a + c0
tipo: input
tolerancia_abs: 0

enunciado: "P(x) = {c4}x⁴ + {c3}x³ + {c2}x² + {c1}x + {c0}. ¿Cuál es el resto de dividir P(x) por (x − {a})?"

explicacion: |
  El teorema del resto funciona igual sin importar el grado del
  polinomio: siempre alcanza con evaluar en x = {a}.
```

### 26 — Concepto: el resto puede no ser 0

```
metadata:
  materia: "matematicas"
  tema: "division_polinomios_ruffini"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El resto de dividir un polinomio por (x − a) siempre da 0."

explicacion: |
  Sólo da 0 cuando (x−a) es efectivamente un factor del polinomio — en
  general, puede dar cualquier número.
```
