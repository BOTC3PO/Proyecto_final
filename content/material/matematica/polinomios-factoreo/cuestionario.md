# Matemática — Polinomios y factoreo (cuestionario, 30 preguntas VBLang)

> Tema: `A6` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Los factoreos se verifican evaluando ambas formas (original y
factoreada) en un valor concreto de x — si coinciden, la factorización es
correcta, el mismo criterio que ya se usó para expresiones equivalentes.

---

### 1 — Grado de un polinomio

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["grado"]

variables:
  n: random(2, 6)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el grado del polinomio 3x^{n} + 5x² − 7?"

explicacion: |
  El grado es el exponente más alto que aparece: {n}.
```

### 2 — Suma de polinomios

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["suma"]

variables:
  x: random(1, 20)
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  d: random(1, 10)

respuesta: (a * x ^ 2 + b * x) + (c * x ^ 2 - d * x)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale ({a}x² + {b}x) + ({c}x² − {d}x), si x = {x}?"

explicacion: |
  Se combinan los términos semejantes: ({a}+{c})x² + ({b}−{d})x, y
  después se evalúa.
```

### 3 — Resta de polinomios

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["resta"]

variables:
  x: random(1, 20)
  a: random(5, 15)
  b: random(5, 15)
  c: random(1, 4)
  d: random(1, 4)

respuesta: (a * x ^ 2 + b * x) - (c * x ^ 2 + d * x)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale ({a}x² + {b}x) − ({c}x² + {d}x), si x = {x}?"

explicacion: |
  Se restan los coeficientes de cada término semejante.
```

### 4 — Multiplicación de dos binomios

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  x: random(1, 15)
  a: random(1, 8)
  b: random(1, 8)

respuesta: (x + a) * (x + b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale (x + {a})(x + {b}), si x = {x}?"

pasos:
  - "Distribuyendo: x² + {a}x + {b}x + {a * b} = x² + {a + b}x + {a * b}"

explicacion: |
  Cada término del primer paréntesis multiplica a cada término del
  segundo.
```

### 5 — Multiplicación con coeficientes

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  x: random(1, 15)
  p: random(2, 6)
  a: random(1, 8)
  q: random(2, 6)
  b: random(1, 8)

respuesta: (p * x + a) * (q * x + b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale ({p}x + {a})({q}x + {b}), si x = {x}?"

explicacion: |
  ({p}x)({q}x) + ({p}x)({b}) + ({a})({q}x) + ({a})({b}).
```

### 6 — Factor común: identificar el factor

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["factor_comun"]

variables:
  a: random(2, 10)
  p: random(2, 10)
  q: random(2, 10)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "En {a * p}x + {a * q}, ¿cuál es el mayor factor común de los dos términos?"

explicacion: |
  {a * p} = {a}×{p} y {a * q} = {a}×{q}: comparten el factor {a}.
```

### 7 — Factor común: verificar la factorización

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["factor_comun", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(2, 10)
  p: random(2, 10)
  q: random(2, 10)

respuesta: ((a * p * x + a * q) == (a * (p * x + q)))
tipo: vf

enunciado: "¿Son equivalentes {a * p}x + {a * q} y {a}({p}x + {q}), para x = {x}?"

explicacion: |
  Sacar factor común no cambia el valor de la expresión, sólo su forma.
```

### 8 — Factor común con variable incluida

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["factor_comun"]

variables:
  x: random(1, 15)
  a: random(2, 8)
  p: random(2, 8)
  q: random(2, 8)

respuesta: (a * p * x ^ 2 + a * q * x)
tipo: input
tolerancia_abs: 0

enunciado: "El polinomio {a * p}x² + {a * q}x se factorea como {a}x({p}x + {q}). Si x = {x}, ¿cuánto vale el polinomio original?"

explicacion: |
  El factor común acá incluye una x, no sólo el número {a}.
```

### 9 — Diferencia de cuadrados: verificar la identidad

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["diferencia_cuadrados", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(1, 15)

respuesta: ((x ^ 2 - a ^ 2) == ((x + a) * (x - a)))
tipo: vf

enunciado: "¿Son equivalentes x² − {a}² y (x + {a})(x − {a}), para x = {x}?"

explicacion: |
  a² − b² = (a+b)(a−b) — la identidad de diferencia de cuadrados.
```

### 10 — Diferencia de cuadrados: evaluar

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["diferencia_cuadrados"]

variables:
  x: random(5, 30)
  a: random(1, 15)

respuesta: x ^ 2 - a ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "x² − {a}² se factorea como (x + {a})(x − {a}). Si x = {x}, ¿cuánto vale el resultado?"

explicacion: |
  x² − {a}² = ({x}+{a})×({x}−{a}) = {x ^ 2 - a ^ 2}.
```

### 11 — Diferencia de cuadrados: identificar los factores

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["diferencia_cuadrados", "opcion_multiple"]

variables:
  a: random(1, 15)

respuesta: concatenar("(x + ", a, ")(x - ", a, ")")
tipo: mc
opciones_explicitas:
  - concatenar("(x + ", a, ")(x - ", a, ")")
  - concatenar("(x + ", a, ")(x + ", a, ")")
  - concatenar("(x - ", a, ")(x - ", a, ")")

enunciado: "¿Cómo se factorea x² − {a}²?"

explicacion: |
  Un factor suma, el otro resta — nunca los dos con el mismo signo.
```

### 12 — Trinomio cuadrado perfecto: verificar

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["trinomio_cuadrado_perfecto", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(1, 12)

respuesta: ((x ^ 2 + 2 * a * x + a ^ 2) == ((x + a) ^ 2))
tipo: vf

enunciado: "¿Son equivalentes x² + {2 * a}x + {a ^ 2} y (x + {a})², para x = {x}?"

explicacion: |
  El término del medio, 2×x×{a} = {2 * a}x, coincide exactamente — es un
  trinomio cuadrado perfecto.
```

### 13 — Trinomio cuadrado perfecto: evaluar

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["trinomio_cuadrado_perfecto"]

variables:
  x: random(1, 20)
  a: random(1, 15)

respuesta: (x + a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "x² + {2 * a}x + {a ^ 2} se factorea como (x + {a})². Si x = {x}, ¿cuánto vale?"

explicacion: |
  (x+{a})² = ({x}+{a})² = {(x + a) ^ 2}.
```

### 14 — Trinomio cuadrado perfecto: detectar cuándo NO lo es

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio_cuadrado_perfecto", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(2, 12)
  error: uno_de([2, -2, 3, -3])
  b: 2 * a + error

respuesta: ((x ^ 2 + b * x + a ^ 2) == ((x + a) ^ 2))
tipo: vf

enunciado: "¿Son equivalentes x² + {b}x + {a ^ 2} y (x + {a})², para x = {x}?"

explicacion: |
  Para ser cuadrado perfecto, el término del medio tendría que ser
  exactamente {2 * a}x — acá es {b}x, así que NO coinciden.
```

### 15 — Trinomio x²+bx+c: hallar el par correcto

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["trinomio"]

variables:
  p: random(1, 10)
  q: random(1, 10)
  b: p + q
  c: p * q

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + c se factorea como (x + {p})(x + {q}). ¿Cuánto vale c?"

explicacion: |
  c = p×q = {p}×{q} = {c}.
```

### 16 — Trinomio x²+bx+c: verificar b

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["trinomio"]

variables:
  p: random(1, 10)
  q: random(1, 10)
  c: p * q

respuesta: p + q
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx + {c} se factorea como (x + {p})(x + {q}). ¿Cuánto vale b?"

explicacion: |
  b = p+q = {p}+{q} = {p + q}.
```

### 17 — Trinomio x²+bx+c: evaluar el resultado

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["trinomio"]

variables:
  x: random(1, 15)
  p: random(1, 8)
  q: random(1, 8)

respuesta: x ^ 2 + (p + q) * x + p * q
tipo: input
tolerancia_abs: 0

enunciado: "x² + {p + q}x + {p * q} se factorea como (x + {p})(x + {q}). Si x = {x}, ¿cuánto vale?"

explicacion: |
  Evaluar el trinomio original o el producto factoreado da el mismo
  resultado.
```

### 18 — Trinomio con signos: p y q negativos

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio", "signos"]

variables:
  p: random(1, 10)
  q: random(1, 10)

respuesta: (-p) + (-q)
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx + {p * q} se factorea como (x − {p})(x − {q}). ¿Cuánto vale b?"

explicacion: |
  Con los dos factores restando, b = (−{p})+(−{q}) = {(-p) + (-q)}: b da
  negativo, aunque c sea positivo.
```

### 19 — Trinomio con signos: p positivo, q negativo

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio", "signos"]

variables:
  p: random(5, 15)
  q: random(1, 4)

respuesta: p - q
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx − {p * q} se factorea como (x + {p})(x − {q}). ¿Cuánto vale b?"

explicacion: |
  b = {p} + (−{q}) = {p - q}. Un c negativo indica que los dos factores
  tienen signos opuestos.
```

### 20 — Factoreo combinado: factor común + trinomio cuadrado perfecto

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["factor_comun", "trinomio_cuadrado_perfecto"]

variables:
  x: random(1, 15)
  k: random(2, 6)
  a: random(1, 8)

respuesta: k * (x + a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "{k}x² + {2 * k * a}x + {k * a ^ 2} se factorea como {k}(x + {a})². Si x = {x}, ¿cuánto vale?"

pasos:
  - "Primero se saca el factor común {k}: {k}(x² + {2 * a}x + {a ^ 2})"
  - "Adentro queda un trinomio cuadrado perfecto: (x + {a})²"

explicacion: |
  Es común combinar dos técnicas: sacar factor común primero, y después
  reconocer el patrón que queda adentro.
```

### 21 — Concepto: diferencia de cuadrados NO aplica a la suma

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "x² + a² (una SUMA de cuadrados) se puede factorear de la misma forma que x² − a², como (x+a)(x−a)."

explicacion: |
  La identidad (x+a)(x−a) da x² − a² (una resta), no una suma — la suma
  de dos cuadrados no se factorea así con números reales.
```

### 22 — Concepto: verificar un factoreo multiplicando

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para comprobar que un factoreo está bien hecho, se puede multiplicar el resultado y ver si da el polinomio original."

explicacion: |
  Multiplicar es la operación inversa de factorear — si al multiplicar
  no se recupera el original, el factoreo tiene un error.
```

### 23 — Concepto: grado de un producto

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["concepto", "grado"]

variables:
  n: random(1, 4)
  m: random(1, 4)

respuesta: n + m
tipo: input
tolerancia_abs: 0

enunciado: "Si un polinomio de grado {n} se multiplica por otro de grado {m}, ¿qué grado tiene el resultado?"

explicacion: |
  Los grados se suman al multiplicar polinomios.
```

### 24 — Concepto: factor común mal sacado

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

variables:
  x: random(1, 15)
  p: random(2, 8)
  q: random(2, 8)

respuesta: ((6 * p * x ^ 2 + 6 * q * x) == (3 * (2 * p * x ^ 2 + 2 * q * x)))
tipo: vf

enunciado: "¿6·{p}·x² + 6·{q}·x es equivalente a 3(2·{p}·x² + 2·{q}·x), para x = {x}?"

explicacion: |
  Numéricamente sí coinciden, pero sacar sólo el 3 no es el factoreo
  completo — el mayor factor común real de 6{p} y 6{q} suele incluir más
  que sólo el 3 (y también la x del segundo término).
```

### 25 — Trinomio: caso con c negativo, b negativo

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio", "signos"]

variables:
  p: random(1, 4)
  q: random(5, 15)

respuesta: p - q
tipo: input
tolerancia_abs: 0

enunciado: "x² + bx − {p * q} se factorea como (x + {p})(x − {q}). ¿Cuánto vale b?"

explicacion: |
  b = {p} − {q} = {p - q}, negativo porque {q} es mayor que {p}.
```

### 26 — Multiplicación: cuadrado de un binomio, verificación

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion", "verdadero_falso"]

variables:
  x: random(1, 20)
  a: random(1, 15)

respuesta: (((x + a) ^ 2) == (x ^ 2 + 2 * a * x + a ^ 2))
tipo: vf

enunciado: "¿(x + {a})² es equivalente a x² + {2 * a}x + {a ^ 2}, para x = {x}?"

explicacion: |
  (x+a)² = x² + 2ax + a², no x² + a² — el término del medio (2ax) es el
  que se suele olvidar.
```

### 27 — Multiplicación: cuadrado de un binomio, error común

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["multiplicacion", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 20)
  a: random(1, 15)

respuesta: (((x + a) ^ 2) == (x ^ 2 + a ^ 2))
tipo: vf

enunciado: "¿(x + {a})² es equivalente a x² + {a ^ 2} (sin el término del medio), para x = {x}?"

explicacion: |
  Es el error más común al elevar un binomio al cuadrado: falta el
  término 2ax — (x+a)² NO es x²+a².
```

### 28 — Factoreo en contexto: área de un cuadrado

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["trinomio_cuadrado_perfecto", "problema"]

variables:
  a: random(2, 15)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "El área de un cuadrado de lado (x + L) es x² + {2 * a}x + {a ^ 2}. ¿Cuánto mide L?"

explicacion: |
  El área de un cuadrado de lado (x+L) es (x+L)² = x²+2Lx+L² — comparando
  con el trinomio dado, L = {a}.
```

### 29 — Concepto: factoreo y raíces (adelanto de ecuación cuadrática)

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si un trinomio se factorea como (x + p)(x + q), los valores x = −p y x = −q son los que hacen que el trinomio valga 0."

explicacion: |
  Es la conexión con `../ecuacion-cuadratica/`: un producto da 0 sólo si
  alguno de los factores da 0.
```

### 30 — Verificación numérica con error: factor común

```
metadata:
  materia: "matematicas"
  tema: "polinomios_factoreo"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(1, 15)
  a: random(2, 10)
  p: random(2, 10)
  q: random(2, 10)
  original: a * p * x + a * q
  error: uno_de([0, 0, 1, -1])
  a_propuesto: a + error

respuesta: ((a_propuesto * (p * x + q)) == original)
tipo: vf

enunciado: "{a * p}x + {a * q} se factorea proponiendo {a_propuesto}({p}x + {q}). ¿Es correcto ese factoreo?"

explicacion: |
  El factor común correcto es {a} — cualquier otro número, aunque
  cercano, no reproduce el polinomio original al multiplicar.
```
