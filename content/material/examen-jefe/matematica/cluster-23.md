# Examen jefe — Experto en Polinomios y Probabilidad

> Logro #74. Completaste el parcial dominando factoreo, potencias, conteo y probabilidad compuesta. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **137 preguntas totales** en 5/5 secciones.

---

## Sección: polinomios-factoreo (30 preguntas)

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

## Sección: porcentaje (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

enunciado: "¿Qué es un porcentaje?"
tipo: mc
opciones_explicitas:
  - "Una razón con denominador 100"
  - "Cualquier número decimal"
  - "La mitad de un número"
respuesta: "Una razón con denominador 100"

explicacion: |
  p% significa "p de cada 100": es una fracción con denominador fijo
  en 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "calcular"]

variables:
  v: random(10, 90) * 10
  p: uno_de([10, 20, 25, 50])

respuesta: v * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {p}% de {v}?"

pasos:
  - "{v} × {p} ÷ 100 = {v * p / 100}"

explicacion: |
  Se multiplica el valor por el porcentaje y se divide por 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  v: random(20, 900)
  p: random(1, 99)

respuesta: v * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {p}% de {v}?"

explicacion: |
  El procedimiento es el mismo, aunque el porcentaje no sea uno
  "redondo".
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50, 75])
  parte: t * p / 100

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Qué porcentaje de {t} representa {parte}?"

pasos:
  - "({parte} ÷ {t}) × 100 = {(parte / t) * 100}"

explicacion: |
  Se divide la parte por el total y se multiplica por 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50])
  parte: t * p / 100

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "{parte} es el {p}% de un número. ¿Cuál es ese número?"

pasos:
  - "{parte} × 100 ÷ {p} = {(parte * 100) / p}"

explicacion: |
  Se multiplica la parte por 100 y se divide por el porcentaje.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

enunciado: "¿A qué fracción equivale el 25%?"
tipo: mc
opciones_explicitas:
  - "1/4"
  - "1/2"
  - "1/3"
respuesta: "1/4"

explicacion: |
  25% = 25/100, que simplificado da 1/4.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

variables:
  p: random(1, 99)

respuesta: p / 100
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {p}% en decimal?"

explicacion: |
  Se divide el porcentaje por 100 (se corre la coma dos lugares a la
  izquierda).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

variables:
  centesimos: random(1, 99)
  n: centesimos / 100

respuesta: centesimos
tipo: input
tolerancia_abs: 0.01

enunciado: "¿A qué porcentaje equivale {n}?"

explicacion: |
  Se multiplica el decimal por 100 (se corre la coma dos lugares a la
  derecha).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "aumento"]

variables:
  v: random(20, 900)
  p: uno_de([5, 10, 15, 20, 25])

respuesta: v * (1 + p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Aumentá {v} en un {p}%. ¿Cuánto queda?"

pasos:
  - "{v} × (1 + {p}/100) = {v} × {1 + p / 100} = {v * (1 + p / 100)}"

explicacion: |
  Aumentar en p% es multiplicar por (1 + p/100).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "descuento"]

variables:
  v: random(20, 900)
  p: uno_de([5, 10, 15, 20, 25])

respuesta: v * (1 - p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Descontá un {p}% a {v}. ¿Cuánto queda?"

pasos:
  - "{v} × (1 - {p}/100) = {v} × {1 - p / 100} = {v * (1 - p / 100)}"

explicacion: |
  Descontar p% es multiplicar por (1 − p/100).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "descuento"]

variables:
  v: random(100, 900)
  p1: uno_de([10, 20])
  p2: uno_de([10, 20])

respuesta: v * (1 - p1 / 100) * (1 - p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "A {v} se le aplica primero un {p1}% de descuento, y después otro {p2}% de descuento (sobre el nuevo precio). ¿Cuánto queda?"

pasos:
  - "{v} × (1 - {p1}/100) × (1 - {p2}/100) = {v * (1 - p1 / 100) * (1 - p2 / 100)}"

explicacion: |
  El segundo descuento se aplica sobre el precio YA descontado, no sobre
  el original.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "aumento"]

variables:
  v: random(100, 900)
  p1: uno_de([10, 20])
  p2: uno_de([10, 20])

respuesta: v * (1 + p1 / 100) * (1 + p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "{v} recibe primero un aumento del {p1}%, y después otro aumento del {p2}% (sobre el nuevo valor). ¿Cuánto queda?"

explicacion: |
  El segundo aumento se aplica sobre el valor ya aumentado.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(100, 900)

respuesta: precio * 1.21
tipo: input
tolerancia_abs: 0.01

enunciado: "Un producto cuesta ${precio} sin IVA. Con un IVA del 21%, ¿cuál es el precio final?"

explicacion: |
  El precio final es el precio original más el 21% de aumento.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(100, 900)
  p: uno_de([10, 15, 20, 25, 30])

respuesta: precio * (1 - p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una remera cuesta ${precio} y está en oferta con {p}% de descuento. ¿Cuánto sale ahora?"

explicacion: |
  El precio de oferta es el precio original menos el porcentaje de
  descuento.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  venta: random(1000, 9000)
  comision: uno_de([2, 5, 8, 10])

respuesta: venta * comision / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "Un vendedor cobra {comision}% de comisión sobre cada venta. Si vendió ${venta}, ¿cuánto cobra de comisión?"

explicacion: |
  La comisión es un porcentaje calculado sobre el monto vendido.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "problema"]

variables:
  cuenta: random(1000, 9000)

respuesta: cuenta * 0.1
tipo: input
tolerancia_abs: 0.01

enunciado: "La cuenta de un restaurante da ${cuenta}. Dejando un 10% de propina, ¿cuánto es la propina?"

explicacion: |
  Calcular una propina es calcular el porcentaje de un valor.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 100% de cualquier cantidad es esa misma cantidad completa."

explicacion: |
  100% = 100/100 = 1: multiplicar por 1 no cambia nada.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 50% de cualquier cantidad es la mitad de esa cantidad."

explicacion: |
  50% = 50/100 = 1/2.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0% de cualquier cantidad es 0."

explicacion: |
  0% = 0/100 = 0: no queda nada.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25, 50])
  correcto: v * p / 100

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - v * p
  - v / p

enunciado: "¿Cuál es el {p}% de {v}?"

explicacion: |
  Las otras opciones se olvidan de dividir por 100, o confunden la
  operación.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "verificacion"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25, 50])
  correcto: v * p / 100
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El {p}% de {v} es {mostrado}."

explicacion: |
  Se vuelve a calcular (valor × porcentaje ÷ 100) y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50, 75])
  parte: t * p / 100

tipo: completar
enunciado: "Completá: el ___% de {t} es {parte}."
respuestas_validas:
  - p

explicacion: |
  Se despeja el porcentaje: (parte ÷ total) × 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(500, 2000)
  descuento_alto: 30
  descuento_bajo: 20

respuesta: (precio * (1 - descuento_alto / 100)) < (precio * (1 - descuento_bajo / 100))
tipo: vf

enunciado: "¿Es cierto que un descuento del {descuento_alto}% deja un precio final más barato que un descuento del {descuento_bajo}%, sobre el mismo precio de ${precio}?"

explicacion: |
  A mayor porcentaje de descuento, menor el precio final.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "vocabulario"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25])

respuesta: falso
tipo: vf

enunciado: "Si a {v} se le aumenta un {p}% y después se le descuenta ese mismo {p}%, el resultado vuelve a ser {v}."

explicacion: |
  No vuelve al original: el aumento y el descuento se calculan sobre
  valores distintos (el segundo, sobre el ya aumentado), así que el
  resultado final queda un poco por debajo de {v}.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  v: random(50, 500)

respuesta: v * 1.5
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el 150% de {v}?"

explicacion: |
  Un porcentaje mayor a 100% da un resultado mayor que el valor original
  — 150% es "una vez y media" el valor.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "orden"]

tipo: ordenar
enunciado: "Calculá estos porcentajes de 200, y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "10% de 200"
  - "50% de 200"
  - "25% de 200"
  - "5% de 200"
respuesta_orden: ["5% de 200", "10% de 200", "25% de 200", "50% de 200"]

explicacion: |
  A mayor porcentaje del mismo valor, mayor el resultado: 10, 20, 50,
  100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(500, 3000)
  p: uno_de([10, 20, 30])

respuesta: precio * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "Un producto de ${precio} tiene {p}% de descuento. ¿Cuántos pesos te ahorrás (no el precio final, el ahorro)?"

explicacion: |
  El ahorro es, directamente, el porcentaje de descuento calculado sobre
  el precio original.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Porcentaje, fracción con denominador 100 y decimal son tres formas distintas de escribir la misma cantidad."

explicacion: |
  25%, 25/100 y 0,25 representan exactamente el mismo valor.
```

## Sección: potencias (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

enunciado: "¿Qué es 2⁴?"
tipo: mc
opciones_explicitas:
  - "2 multiplicado por sí mismo 4 veces"
  - "2 multiplicado por 4"
  - "2 sumado 4 veces"
respuesta: "2 multiplicado por sí mismo 4 veces"

explicacion: |
  Una potencia es multiplicar la base por sí misma tantas veces como
  indica el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  base: random(2, 10)
  exponente: random(2, 4)

respuesta: base ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

pasos:
  - "{base}^{exponente} = {base} multiplicado por sí mismo {exponente} veces = {base ^ exponente}"

explicacion: |
  Se multiplica la base por sí misma, tantas veces como el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 20)
  exponente: random(2, 3)

respuesta: base ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

explicacion: |
  El procedimiento es el mismo con bases más grandes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(1, 999)

respuesta: base
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}¹?"

explicacion: |
  Elevar a la 1 no cambia el número: es multiplicarlo por sí mismo "una
  sola vez", o sea, dejarlo igual.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 999)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}⁰?"

explicacion: |
  Cualquier número (distinto de 0) elevado a la 0 da 1. Es una convención
  que hace que las propiedades de las potencias funcionen sin
  excepciones.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 10)
  exponente: random(1, 3)

respuesta: 1 / (base ^ exponente)
tipo: input
tolerancia_abs: 0.0001

enunciado: "¿Cuánto es {base}^(-{exponente})?"

pasos:
  - "{base}^(-{exponente}) = 1 ÷ {base}^{exponente} = 1 ÷ {base ^ exponente} = {1 / (base ^ exponente)}"

explicacion: |
  El exponente negativo manda la potencia al denominador de una fracción.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 5)
  m: random(2, 5)

respuesta: base ^ (n + m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{n} × {base}^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se suman los exponentes: {n} + {m} = {n + m} → {base}^{n + m}"

explicacion: |
  Al multiplicar potencias de igual base, se suman los exponentes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(4, 8)
  m: random(1, n - 1)

respuesta: base ^ (n - m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{n} ÷ {base}^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se restan los exponentes: {n} - {m} = {n - m} → {base}^{n - m}"

explicacion: |
  Al dividir potencias de igual base, se restan los exponentes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 4)
  m: random(2, 3)

respuesta: base ^ (n * m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({base}^{n})^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se multiplican los exponentes: {n} × {m} = {n * m} → {base}^{n * m}"

explicacion: |
  Al elevar una potencia a otro exponente, se multiplican los exponentes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  n: random(2, 3)

respuesta: (a * b) ^ n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} × {b})^{n}?"

pasos:
  - "El exponente se distribuye a cada factor: {a}^{n} × {b}^{n} = {a ^ n} × {b ^ n} = {(a * b) ^ n}"

explicacion: |
  La potencia de un producto es el producto de las potencias.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  n: random(2, 30)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el cuadrado de {n}?"

explicacion: |
  El cuadrado de un número es elevarlo a la 2.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  n: random(2, 15)

respuesta: n ^ 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el cubo de {n}?"

explicacion: |
  El cubo de un número es elevarlo a la 3.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número elevado a la 1 da como resultado ese mismo número."

explicacion: |
  a¹ = a, para cualquier a.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número (distinto de 0) elevado a la 0 da 1."

explicacion: |
  a⁰ = 1, para cualquier a ≠ 0.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)
  correcto: base ^ exponente

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - base * exponente
  - correcto + base

enunciado: "¿Cuánto es {base}^{exponente}?"

explicacion: |
  La opción "base × exponente" es un error común: confunde potencia con
  multiplicación simple.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "verificacion"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)
  correcto: base ^ exponente
  error: uno_de([0, 0, 0, base, -base])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? {base}^{exponente} = {mostrado}"

explicacion: |
  Se vuelve a calcular la potencia y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)

tipo: completar
enunciado: "Completá: {base}^___ = {base ^ exponente}."
respuestas_validas:
  - exponente

explicacion: |
  Hay que encontrar a qué exponente hay que elevar {base} para obtener
  {base ^ exponente}.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "problema"]

variables:
  lado: random(2, 30)

respuesta: lado ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene {lado} cm de lado. ¿Cuál es su área (en cm²)?"

explicacion: |
  El área de un cuadrado es el lado elevado al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "problema"]

variables:
  arista: random(2, 15)

respuesta: arista ^ 3
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo tiene {arista} cm de arista. ¿Cuál es su volumen (en cm³)?"

explicacion: |
  El volumen de un cubo es la arista elevada al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  n: random(2, 3)

respuesta: ((a * b) ^ n == (a ^ n) * (b ^ n))
tipo: vf

enunciado: "¿Es cierto que ({a} × {b})^{n} da lo mismo que {a}^{n} × {b}^{n}?"

explicacion: |
  Es la propiedad de la potencia de un producto: el exponente se
  distribuye a cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 4)
  m: random(2, 4)

respuesta: ((base ^ n) * (base ^ m) == base ^ (n + m))
tipo: vf

enunciado: "¿Es cierto que {base}^{n} × {base}^{m} da lo mismo que {base}^({n} + {m})?"

explicacion: |
  Es la propiedad del producto de potencias de igual base.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "orden"]

tipo: ordenar
enunciado: "Calculá estas potencias y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "2^5"
  - "3^3"
  - "5^2"
  - "2^3"
respuesta_orden: ["2^3", "5^2", "3^3", "2^5"]

explicacion: |
  2³=8, 5²=25, 3³=27, 2⁵=32: hay que calcular cada una antes de poder
  ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  exponente: random(2, 6)

respuesta: 10 ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 10^{exponente}?"

pasos:
  - "10 elevado a n es un 1 seguido de n ceros: {10 ^ exponente}"

explicacion: |
  Las potencias de 10 son la base de la notación científica, el próximo
  tema del mapa.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "comparacion"]

variables:
  base1: random(2, 9)
  exp1: random(2, 4)
  base2: random(2, 9)
  exp2: random(2, 4)

restricciones:
  - (base1 ^ exp1) != (base2 ^ exp2)

respuesta: ((base1 ^ exp1) > (base2 ^ exp2))
tipo: vf

enunciado: "¿Es {base1}^{exp1} mayor que {base2}^{exp2}?"

explicacion: |
  Hay que calcular las dos potencias antes de poder compararlas — no
  alcanza con comparar sólo las bases o sólo los exponentes por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "problema"]

variables:
  inicial: random(1, 10)
  veces: random(3, 8)

respuesta: inicial * (2 ^ veces)
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {inicial} bacterias se duplica cada hora. ¿Cuántas bacterias hay después de {veces} horas?"

pasos:
  - "{inicial} × 2^{veces} = {inicial} × {2 ^ veces} = {inicial * (2 ^ veces)}"

explicacion: |
  Duplicarse varias veces seguidas es multiplicar por 2 elevado a la
  cantidad de veces que se duplicó.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 10)
  exponente: random(1, 3)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {base}^(-{exponente}) da como resultado un número menor a 1?"

explicacion: |
  Un exponente negativo con base mayor a 1 siempre da una fracción entre
  0 y 1.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 9)
  exponente: random(1, 3) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que (-{base})^{exponente} da como resultado un número positivo?"

explicacion: |
  Con exponente par, los signos negativos se van cancelando de a pares:
  el resultado siempre da positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una potencia es multiplicar la base por sí misma tantas veces como indica el exponente."

explicacion: |
  Es la idea central de todo el tema: potenciación es multiplicación
  repetida, igual que multiplicación es suma repetida.
```

## Sección: principio-multiplicativo-de-conteo (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "vocabulario"]

enunciado: "¿Qué establece el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Si una elección se compone de varios pasos independientes, el total de combinaciones es el producto de las opciones de cada paso"
  - "Para contar combinaciones siempre hay que enumerarlas una por una"
  - "El total de combinaciones es la suma de las opciones de cada paso"
respuesta: "Si una elección se compone de varios pasos independientes, el total de combinaciones es el producto de las opciones de cada paso"

explicacion: |
  Es la herramienta que permite contar sin enumerar.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "completar"]

tipo: completar
enunciado: "Completá: si hay n₁ opciones para el primer paso, n₂ para el segundo y n₃ para el tercero, el total de combinaciones es n₁ × n₂ × ___."
respuestas_validas:
  - "n₃"

explicacion: |
  Se multiplican las opciones de TODOS los pasos, sin importar cuántos
  sean.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  entradas: random(2, 5)
  platos: random(3, 6)
  postres: random(2, 4)

respuesta: entradas * platos * postres
tipo: input

enunciado: "Un restaurante ofrece {entradas} entradas, {platos} platos principales y {postres} postres. ¿Cuántos menús distintos (una entrada, un plato y un postre) se pueden armar?"

pasos:
  - "Total = {entradas} × {platos} × {postres} = {entradas * platos * postres}"

explicacion: |
  Cada elección es independiente de las otras dos.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  digitos: uno_de([3, 4, 5])

respuesta: 10 ^ digitos
tipo: input

enunciado: "Una clave numérica tiene {digitos} dígitos, cada uno del 0 al 9, y se pueden repetir dígitos. ¿Cuántas claves distintas son posibles?"

pasos:
  - "Cada dígito tiene 10 opciones posibles, independientes entre sí: 10^{digitos} = {10 ^ digitos}"

explicacion: |
  Es el mismo dígito repetido {digitos} veces en la multiplicación,
  porque cada posición tiene las mismas 10 opciones.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  camisas: random(3, 8)
  pantalones: random(2, 6)
  zapatos: random(2, 5)

respuesta: camisas * pantalones * zapatos
tipo: input

enunciado: "Alguien tiene {camisas} camisas, {pantalones} pantalones y {zapatos} pares de zapatos. ¿Cuántos outfits distintos (una camisa, un pantalón, un par de zapatos) puede armar?"

pasos:
  - "Total = {camisas} × {pantalones} × {zapatos} = {camisas * pantalones * zapatos}"

explicacion: |
  Cada prenda se elige de forma independiente de las otras.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  letras: uno_de([2, 3])
  numeros: uno_de([3, 4])

respuesta: 26 ^ letras * 10 ^ numeros
tipo: input

enunciado: "Una patente tiene {letras} letras (de un alfabeto de 26, con repetición permitida) seguidas de {numeros} números (0-9, con repetición permitida). ¿Cuántas patentes distintas son posibles?"

pasos:
  - "Letras: 26^{letras} = {26 ^ letras}"
  - "Números: 10^{numeros} = {10 ^ numeros}"
  - "Total = {26 ^ letras} × {10 ^ numeros} = {26 ^ letras * 10 ^ numeros}"

explicacion: |
  Se multiplican las combinaciones de las letras por las de los
  números, porque son dos bloques independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "El principio multiplicativo, en su forma simple (multiplicar directo), funciona cuando cada paso es independiente: la cantidad de opciones de un paso no depende de lo que se elija en los otros."

explicacion: |
  Si un paso cambiara según la elección anterior de forma más
  compleja que simplemente 'un elemento menos disponible', haría
  falta un análisis más cuidadoso.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

enunciado: "Si la cantidad de opciones de un paso cambiara de forma impredecible según lo elegido en un paso anterior, ¿qué pasaría con la multiplicación directa?"
tipo: mc
opciones_explicitas:
  - "Ya no alcanzaría con multiplicar directo — habría que analizar los casos por separado"
  - "No cambiaría nada, la multiplicación siempre funciona igual"
  - "El resultado sería siempre cero"
respuesta: "Ya no alcanzaría con multiplicar directo — habría que analizar los casos por separado"

explicacion: |
  La forma simple del principio presupone independencia entre los
  pasos.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lanzamientos: uno_de([3, 4, 5, 6])

respuesta: 2 ^ lanzamientos
tipo: input

enunciado: "Se lanza una moneda {lanzamientos} veces seguidas (cara o ceca cada vez). ¿Cuántas secuencias distintas de resultados son posibles?"

pasos:
  - "Cada lanzamiento tiene 2 resultados posibles, independientes: 2^{lanzamientos} = {2 ^ lanzamientos}"

explicacion: |
  Cada lanzamiento no depende de los anteriores.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lanzamientos: uno_de([2, 3, 4])

respuesta: 6 ^ lanzamientos
tipo: input

enunciado: "Se lanza un dado de 6 caras {lanzamientos} veces seguidas. ¿Cuántas secuencias distintas de resultados son posibles?"

pasos:
  - "Cada lanzamiento tiene 6 resultados posibles: 6^{lanzamientos} = {6 ^ lanzamientos}"

explicacion: |
  Igual que con la moneda, pero con 6 opciones en vez de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "ordenar"]

enunciado: "Ordená los pasos para aplicar el principio multiplicativo a un problema de conteo."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar todas esas cantidades entre sí"
  - "Identificar en cuántos pasos independientes se divide la elección completa"
  - "Contar cuántas opciones hay disponibles en cada paso, por separado"
respuesta_orden:
  - "Identificar en cuántos pasos independientes se divide la elección completa"
  - "Contar cuántas opciones hay disponibles en cada paso, por separado"
  - "Multiplicar todas esas cantidades entre sí"

explicacion: |
  Sin identificar primero los pasos, no hay qué contar ni qué
  multiplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  a: random(2, 4)
  b: random(2, 4)
  c: random(2, 4)
  d: random(2, 4)

respuesta: a * b * c * d
tipo: input

enunciado: "Para armar un producto hay {a} opciones de color, {b} de tamaño, {c} de material y {d} de acabado. ¿Cuántas combinaciones distintas de producto son posibles?"

pasos:
  - "Total = {a} × {b} × {c} × {d} = {a * b * c * d}"

explicacion: |
  El principio se extiende a cualquier cantidad de pasos, no sólo dos
  o tres.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar las opciones de cada paso da exactamente el mismo resultado que enumerar todas las combinaciones una por una — sólo que mucho más rápido, sobre todo con números grandes."

explicacion: |
  Para pocas opciones se puede verificar enumerando; para miles o
  millones, multiplicar es la única forma práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "aplicacion"]

enunciado: "¿Por qué una clave numérica de 6 dígitos (con repetición) es más difícil de adivinar al azar que una de 4 dígitos?"
tipo: mc
opciones_explicitas:
  - "Porque tiene 10⁶ = 1.000.000 de combinaciones posibles, muchas más que las 10⁴ = 10.000 de la de 4 dígitos"
  - "Porque los números de 6 cifras son, en general, más grandes"
  - "No hay ninguna diferencia real en la dificultad"
respuesta: "Porque tiene 10⁶ = 1.000.000 de combinaciones posibles, muchas más que las 10⁴ = 10.000 de la de 4 dígitos"

explicacion: |
  Cada dígito extra multiplica por 10 la cantidad de combinaciones
  posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lista1: random(4, 10)
  lista2: random(4, 10)

respuesta: lista1 * lista2
tipo: input

enunciado: "Hay {lista1} colores de pintura y {lista2} tipos de acabado (mate, satinado, etc.). ¿Cuántas combinaciones distintas de color y acabado se pueden elegir?"

pasos:
  - "Total = {lista1} × {lista2} = {lista1 * lista2}"

explicacion: |
  Dos pasos independientes, dos factores en la multiplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "Si en cada paso se permite repetir elementos ya usados en pasos anteriores (por ejemplo, el mismo dígito varias veces en una clave), la fórmula sigue siendo un producto simple de las opciones de cada paso."

explicacion: |
  La independencia entre pasos no se rompe por permitir repetición —
  al contrario, permitir repetición es lo que MANTIENE la cantidad de
  opciones igual en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "completar"]

tipo: completar
enunciado: "Completá: permutaciones, variaciones y combinaciones son, en el fondo, aplicaciones del principio ___ con distintas restricciones sobre el orden y la repetición."
respuestas_validas:
  - "multiplicativo"

explicacion: |
  Cada uno de esos tres módulos agrega una restricción distinta sobre
  el mismo principio de base.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

enunciado: "¿En qué se diferencia el principio multiplicativo general de una permutación (ordenar TODOS los elementos de un conjunto)?"
tipo: mc
opciones_explicitas:
  - "El principio multiplicativo es la herramienta general; la permutación es un caso particular donde, en cada paso, hay una opción menos disponible porque no se puede repetir ningún elemento"
  - "No hay ninguna diferencia entre ambos conceptos"
  - "La permutación no usa ninguna multiplicación"
respuesta: "El principio multiplicativo es la herramienta general; la permutación es un caso particular donde, en cada paso, hay una opción menos disponible porque no se puede repetir ningún elemento"

explicacion: |
  Es el puente directo hacia `../permutaciones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

respuesta: 10 * 9 * 8
tipo: input

enunciado: "Una clave tiene 3 dígitos (0 al 9), y NINGÚN dígito se puede repetir. ¿Cuántas claves distintas son posibles?"

pasos:
  - "Primer dígito: 10 opciones"
  - "Segundo dígito: 9 opciones (ya se usó una)"
  - "Tercer dígito: 8 opciones (ya se usaron dos)"
  - "Total = 10 × 9 × 8 = {10 * 9 * 8}"

explicacion: |
  Cada paso sigue siendo independiente en el sentido de que la
  CANTIDAD de opciones disponibles es predecible, aunque vaya
  bajando — es el mismo principio, con una opción menos en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  a: random(2, 3)
  b: random(2, 3)
  c: random(2, 3)
  d: random(2, 3)
  e: random(2, 3)

respuesta: a * b * c * d * e
tipo: input

enunciado: "Un sistema de contraseñas usa 5 categorías de símbolos con {a}, {b}, {c}, {d} y {e} opciones respectivamente, una de cada categoría. ¿Cuántas contraseñas distintas son posibles?"

pasos:
  - "Total = {a} × {b} × {c} × {d} × {e} = {a * b * c * d * e}"

explicacion: |
  El principio no tiene límite en la cantidad de pasos que puede
  combinar.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "aplicacion"]

enunciado: "Si hay 4 materias posibles para la primera hora y 5 para la segunda hora (sin repetir materia), ¿cómo se calcula la cantidad de combinaciones posibles para esas dos horas?"
tipo: mc
opciones_explicitas:
  - "Multiplicando 4 × 5"
  - "Sumando 4 + 5"
  - "Dividiendo 5 ÷ 4"
respuesta: "Multiplicando 4 × 5"

explicacion: |
  Dos decisiones independientes (una por cada hora) se multiplican,
  no se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "aplicacion"]

enunciado: "En una final a 3 partidos independientes (cada uno con 2 resultados posibles: gana el equipo A o gana el equipo B), ¿cuántas secuencias distintas de resultados de los 3 partidos son posibles?"
tipo: mc
opciones_explicitas:
  - "2³ = 8"
  - "2 × 3 = 6"
  - "3² = 9"
respuesta: "2³ = 8"

explicacion: |
  Cada partido tiene 2 resultados posibles, y hay 3 partidos
  independientes: 2×2×2 = 8.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "En el principio multiplicativo, no importa en qué orden se multipliquen las cantidades de cada paso — el resultado final es el mismo."

explicacion: |
  La multiplicación es conmutativa: 3×4×2 da lo mismo que 2×3×4.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  tapas: random(2, 4)
  rellenos: random(3, 6)
  coberturas: random(2, 5)

respuesta: tapas * rellenos * coberturas
tipo: input

enunciado: "Una pastelería ofrece {tapas} tipos de masa, {rellenos} tipos de relleno y {coberturas} tipos de cobertura. ¿Cuántas tortas distintas (una masa, un relleno, una cobertura) se pueden armar?"

pasos:
  - "Total = {tapas} × {rellenos} × {coberturas} = {tapas * rellenos * coberturas}"

explicacion: |
  Es el mismo patrón del menú de la pregunta 3, con otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuántas combinaciones posibles hay en una elección de varios pasos, sin tener que enumerarlas una por una"
  - "Sólo sirve para contar objetos físicos, uno por uno"
  - "Sólo aplica cuando hay exactamente dos pasos"
respuesta: "Para calcular cuántas combinaciones posibles hay en una elección de varios pasos, sin tener que enumerarlas una por una"

explicacion: |
  Es la base directa de permutaciones, variaciones y combinaciones —
  los tres módulos que siguen.
```

## Sección: probabilidad-compuesta (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "vocabulario"]

enunciado: "¿Qué calcula la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de que ocurran varios eventos a la vez, o de que ocurra al menos uno de varios"
  - "La probabilidad de un único evento simple"
  - "Sólo la probabilidad de eventos que nunca pueden ocurrir"
respuesta: "La probabilidad de que ocurran varios eventos a la vez, o de que ocurra al menos uno de varios"

explicacion: |
  Combina la probabilidad simple con la independencia entre eventos.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: si A y B son independientes, P(A y B) = P(A) × ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Es la misma regla del producto ya usada con los diagramas de árbol.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  pa: uno_de([0.3, 0.4, 0.5, 0.6])
  pb: uno_de([0.2, 0.5, 0.7])

respuesta: redondear(pa * pb, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "A y B son eventos independientes, con P(A)={pa} y P(B)={pb}. ¿Cuál es P(A y B)?"

pasos:
  - "P(A y B) = {pa} × {pb} = {redondear(pa * pb, 3)}"

explicacion: |
  Se multiplican directo, porque son independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: si A y B son mutuamente excluyentes (no pueden ocurrir juntos), P(A o B) = P(A) + ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Al no poder solaparse, no hay nada que restar.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga 2 O que salga 5? (no pueden salir los dos a la vez en un solo tiro)"

pasos:
  - "P(2) = 1/6, P(5) = 1/6. Son mutuamente excluyentes."
  - "P(2 o 5) = 1/6 + 1/6 = {redondear(2 / 6, 3)}"

explicacion: |
  En un solo tiro de dado, no puede salir 2 y 5 a la vez — se suman
  directo.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Si A y B PUEDEN ocurrir juntos, sumar P(A) + P(B) directo sobrestima la probabilidad de 'A o B', porque el caso en que ocurren ambos se cuenta dos veces."

explicacion: |
  Por eso hay que restar P(A y B) una vez, igual que con la
  cardinalidad de la unión de conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: en general (aunque A y B puedan solaparse), P(A o B) = P(A) + P(B) − ___."
respuestas_validas:
  - "P(A y B)"

explicacion: |
  Es la fórmula de inclusión-exclusión, igual que
  |A∪B|=|A|+|B|−|A∩B|.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  pa: uno_de([0.3, 0.4, 0.5])
  pb: uno_de([0.2, 0.3, 0.4])
  pab: uno_de([0.1, 0.05])

respuesta: redondear(pa + pb - pab, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(A)={pa}, P(B)={pb}, y P(A y B)={pab} (A y B SÍ pueden ocurrir juntos). ¿Cuál es P(A o B)?"

pasos:
  - "P(A o B) = {pa} + {pb} − {pab} = {redondear(pa + pb - pab, 3)}"

explicacion: |
  Se resta la superposición para no contarla dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta"]

enunciado: "¿Cuál es la pista para saber si hay que multiplicar o sumar dos probabilidades?"
tipo: mc
opciones_explicitas:
  - "'Y' (ambos a la vez) sugiere multiplicar; 'O' (cualquiera de los dos) sugiere sumar (ajustando si se solapan)"
  - "Siempre hay que multiplicar, sin importar la pregunta"
  - "Siempre hay que sumar, sin importar la pregunta"
respuesta: "'Y' (ambos a la vez) sugiere multiplicar; 'O' (cualquiera de los dos) sugiere sumar (ajustando si se solapan)"

explicacion: |
  No es una regla mágica, pero es una guía práctica confiable para
  empezar a plantear el problema.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(4 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un número PAR o un MÚLTIPLO DE 3? (el 6 es ambas cosas a la vez)"

pasos:
  - "P(par) = 3/6 = {2, 4, 6}. P(múltiplo de 3) = 2/6 = {3, 6}. P(par y múltiplo de 3) = 1/6 = {6}."
  - "P(par o múltiplo de 3) = 3/6 + 2/6 − 1/6 = 4/6 = {redondear(4 / 6, 3)}"

explicacion: |
  El 6 cumple las dos condiciones — sin restar esa superposición, se
  contaría dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "ordenar"]

enunciado: "Ordená los pasos para decidir y aplicar la regla correcta de probabilidad compuesta."
tipo: ordenar
opciones_explicitas:
  - "Si es 'O', revisar si los eventos pueden ocurrir juntos: si no, sumar directo; si sí, sumar y restar la superposición"
  - "Identificar si la pregunta pide 'Y' (ambos) o 'O' (cualquiera)"
  - "Si es 'Y', revisar si los eventos son independientes o dependientes, y multiplicar con las probabilidades correspondientes"
respuesta_orden:
  - "Identificar si la pregunta pide 'Y' (ambos) o 'O' (cualquiera)"
  - "Si es 'Y', revisar si los eventos son independientes o dependientes, y multiplicar con las probabilidades correspondientes"
  - "Si es 'O', revisar si los eventos pueden ocurrir juntos: si no, sumar directo; si sí, sumar y restar la superposición"

explicacion: |
  Identificar primero 'Y' vs 'O' es el paso que determina qué
  operación aplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Cada progenitor (Aa) tiene 1/2 de probabilidad de transmitir el alelo recesivo 'a' (independiente del otro progenitor). ¿Cuál es la probabilidad de que un hijo herede el alelo recesivo de AMBOS progenitores (genotipo aa)?"

pasos:
  - "P(a del padre) = 1/2. P(a de la madre) = 1/2. Son independientes."
  - "P(aa) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es exactamente la proporción 1/4 del cuadro de Punnett clásico
  (Aa × Aa → 1 AA : 2 Aa : 1 aa), calculada con probabilidad compuesta
  en vez de dibujar el cuadro de 4 casilleros.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: 0.75
tipo: input

enunciado: "Se lanzan 2 monedas independientes. ¿Cuál es la probabilidad de que salga AL MENOS una cara (una o las dos)?"

pasos:
  - "P(ninguna cara) = P(ceca y ceca) = 0,5 × 0,5 = 0,25"
  - "P(al menos una cara) = 1 − P(ninguna) = 1 − 0,25 = 0,75"

explicacion: |
  Para 'al menos uno', suele ser más fácil calcular el complemento
  ('ninguno') y restar de 1, en vez de sumar todos los casos con al
  menos una cara por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "¿Qué relación tiene el cuadro de Punnett de Biología con la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con otra notación visual"
  - "No tiene ninguna relación real, son temas separados"
  - "El cuadro de Punnett reemplaza por completo a la probabilidad, no la necesita"
respuesta: "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con otra notación visual"

explicacion: |
  Heredar un alelo de cada progenitor son eventos independientes —
  el cuadro de Punnett es una forma visual de multiplicar esas
  probabilidades.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  p_madre: uno_de([0.5, 1])
  p_padre: uno_de([0.5, 1])

respuesta: redondear(p_madre * p_padre, 3)
tipo: input

enunciado: "La probabilidad de que la madre transmita el alelo recesivo es {p_madre}, y la del padre es {p_padre} (eventos independientes). ¿Cuál es la probabilidad de que el hijo herede el alelo recesivo de ambos?"

pasos:
  - "P(ambos) = {p_madre} × {p_padre} = {redondear(p_madre * p_padre, 3)}"

explicacion: |
  Si un progenitor es homocigota (p=1), siempre transmite ese alelo,
  pero la regla del producto sigue aplicando igual.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "P(A y B) = P(A) × P(B) sólo vale directo si A y B son independientes; si son dependientes, la segunda probabilidad hay que recalcularla sabiendo que el primer evento ya ocurrió (como en el diagrama de árbol sin reposición)."

explicacion: |
  Es la misma distinción de `../independencia-de-eventos-y-diagrama-de-arbol/`.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(8 / 40, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 ases, 4 reyes), ¿cuál es la probabilidad de sacar un AS o un REY en una sola extracción? (ninguna carta es las dos cosas a la vez)"

pasos:
  - "P(as) = 4/40, P(rey) = 4/40. Son mutuamente excluyentes (ninguna carta es ambas)."
  - "P(as o rey) = 4/40 + 4/40 = 8/40 = {redondear(8 / 40, 3)}"

explicacion: |
  Ninguna carta puede ser as y rey a la vez, así que se suman directo
  sin restar nada.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear((12 / 40) + (10 / 40) - (3 / 40), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 palos de 10 cartas, con 3 figuras por palo: 12 figuras en total, 10 cartas de oro), ¿cuál es la probabilidad de sacar una FIGURA o una carta de ORO? (las figuras de oro son ambas cosas a la vez: 3 cartas)"

pasos:
  - "P(figura) = 12/40, P(oro) = 10/40, P(figura y oro) = 3/40 (las 3 figuras de oro)"
  - "P(figura o oro) = 12/40 + 10/40 − 3/40 = {redondear((12 / 40) + (10 / 40) - (3 / 40), 3)}"

explicacion: |
  Hay 3 cartas que son figura Y de oro a la vez — sin restarlas, se
  contarían dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "Si la probabilidad de que llueva es 0,4 y la de que se corte la luz (independiente de la lluvia) es 0,1, ¿cómo se calcula la probabilidad de que pasen LAS DOS COSAS a la vez?"
tipo: mc
opciones_explicitas:
  - "Multiplicando 0,4 × 0,1, porque son eventos independientes y se pide 'Y'"
  - "Sumando 0,4 + 0,1, porque se pide 'ambas cosas'"
  - "No se puede calcular sin más información sobre el clima"
respuesta: "Multiplicando 0,4 × 0,1, porque son eventos independientes y se pide 'Y'"

explicacion: |
  'Ambas cosas a la vez' es la palabra clave de la regla del producto,
  no de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  falla1: uno_de([0.05, 0.1, 0.15])
  falla2: uno_de([0.02, 0.08])

respuesta: redondear(falla1 * falla2, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Dos máquinas funcionan de forma independiente. La probabilidad de que la máquina 1 falle es {falla1}, y la de que la máquina 2 falle es {falla2}. ¿Cuál es la probabilidad de que AMBAS fallen a la vez?"

pasos:
  - "P(ambas fallan) = {falla1} × {falla2} = {redondear(falla1 * falla2, 4)}"

explicacion: |
  Es mucho menos probable que fallen las dos juntas que que falle
  sólo una — por eso los sistemas críticos usan componentes
  redundantes e independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "P(A y B) nunca puede ser mayor que P(A) sola (pedir una condición extra nunca aumenta la probabilidad, como mucho la deja igual)."

explicacion: |
  Multiplicar por P(B) (que es como mucho 1) nunca puede aumentar el
  valor de P(A).
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

enunciado: "Al tirar UN SOLO dado, para calcular P(par Y mayor que 3), ¿por qué NO corresponde multiplicar P(par) × P(mayor que 3) como si fueran dos experimentos independientes?"
tipo: mc
opciones_explicitas:
  - "Porque son dos condiciones sobre el MISMO resultado de un único tiro, no dos eventos de experimentos separados — hay que contar directo los casos que cumplen ambas condiciones a la vez"
  - "Porque en realidad sí corresponde multiplicar, sin ninguna excepción"
  - "Porque un dado nunca puede cumplir dos condiciones a la vez"
respuesta: "Porque son dos condiciones sobre el MISMO resultado de un único tiro, no dos eventos de experimentos separados — hay que contar directo los casos que cumplen ambas condiciones a la vez"

explicacion: |
  Par y mayor que 3 en un dado: {4, 6} cumplen ambas → P=2/6, que en
  general NO coincide con P(par)×P(mayor que 3) = (3/6)×(3/6) = 9/36 —
  son cálculos distintos porque no es una multiplicación de dos
  tiradas separadas.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un solo tiro de un dado de 6 caras, ¿cuál es la probabilidad real de que salga un número PAR y MAYOR QUE 3 a la vez (contando los casos directo: {4, 6})?"

pasos:
  - "Los números pares y mayores que 3, del 1 al 6, son 4 y 6: 2 casos favorables."
  - "P = 2/6 = {redondear(2 / 6, 3)}"

explicacion: |
  Es distinto del resultado de multiplicar P(par)×P(mayor que 3) —
  confirma por qué esa multiplicación no aplicaba acá.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de aplicar P(A y B) = P(A) × P(B), conviene confirmar que A y B son realmente independientes — asumirlo sin pensar puede llevar a un resultado incorrecto."

explicacion: |
  Es el error más común de este tema: multiplicar directo sin
  verificar si corresponde.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  p_exito: uno_de([0.3, 0.4])
  intentos: uno_de([2, 3])

respuesta: redondear((1 - p_exito) ^ intentos, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un jugador tiene {p_exito} de probabilidad de éxito en cada intento (independientes entre sí). ¿Cuál es la probabilidad de que falle los {intentos} intentos, uno tras otro?"

pasos:
  - "P(falla) en cada intento = 1 − {p_exito} = {1 - p_exito}"
  - "P(falla los {intentos}) = ({1 - p_exito})^{intentos} = {redondear((1 - p_exito) ^ intentos, 3)}"

explicacion: |
  Se multiplica la probabilidad de fallar, la misma cantidad de veces
  que hay intentos, porque son independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de que ocurran varios eventos a la vez, o al menos uno de varios, combinando las reglas del Y y del O"
  - "Sólo sirve para dados y monedas"
  - "Sólo aplica cuando los eventos son mutuamente excluyentes"
respuesta: "Para calcular la probabilidad de que ocurran varios eventos a la vez, o al menos uno de varios, combinando las reglas del Y y del O"

explicacion: |
  Cierra este bloque de Tronco 4.b y es la puerta directa al cuadro
  de Punnett de Biología — el mismo cálculo, otra notación.
```
