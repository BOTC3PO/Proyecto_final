# Matemática — Familias de funciones: exponencial y logarítmica (cuestionario, 28 preguntas VBLang)

> Tema: `A11` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Se usa base 10 en las preguntas numéricas (`log10()` es el builtin
confirmado del DSL — ver gotchas de `../../PROCEDIMIENTO.md`), mismo
criterio que `../logaritmos/` en Tronco 1.

---

### 1 — Evaluar la función exponencial (base 10)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  n: random(1, 6)

respuesta: 10 ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 10^x. ¿Cuánto vale f({n})?"

explicacion: |
  10^{n} = {10 ^ n}.
```

### 2 — Ordenada al origen de cualquier exponencial

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 10)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}^x. ¿Cuánto vale f(0)?"

explicacion: |
  Cualquier base elevada a 0 da 1, sin importar cuál sea la base.
```

### 3 — Evaluar exponencial con base distinta de 10

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 8)
  n: random(1, 5)

respuesta: a ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}^x. ¿Cuánto vale f({n})?"

explicacion: |
  {a}^{n} = {a ^ n}.
```

### 4 — Decaimiento exponencial (base entre 0 y 1)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["exponencial", "decaimiento"]

variables:
  base_inv: uno_de([2, 5])
  n: random(1, 4)

respuesta: 1 / (base_inv ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (1/{base_inv})^x. ¿Cuánto vale f({n})?"

pasos:
  - "(1/{base_inv})^{n} = 1/{base_inv}^{n} = 1/{base_inv ^ n} = {1 / (base_inv ^ n)}"

explicacion: |
  Con base entre 0 y 1, la función decae en vez de crecer.
```

### 5 — Evaluar la función logarítmica (base 10, potencia exacta)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["logaritmica"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g({x})?"

explicacion: |
  log₁₀({x}) = {n}, porque 10^{n} = {x}.
```

### 6 — Ordenada f(1) de cualquier logaritmo

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["logaritmica"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g(1)?"

explicacion: |
  El logaritmo de 1 siempre da 0, sin importar la base.
```

### 7 — Logaritmo de un número entre potencias (usando pasos)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  n: random(1, 5)
  x: 10 ^ n * 10

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g({x})?"

explicacion: |
  {x} = 10^{n + 1}, así que g({x}) = {n + 1}.
```

### 8 — Relación inversa: g(f(x)) = x

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["inversa", "verdadero_falso"]

variables:
  n: random(1, 6)

respuesta: (log10(10 ^ n) == n)
tipo: vf

enunciado: "f(x) = 10^x, g(x) = log₁₀(x). ¿g(f({n})) da de vuelta {n}?"

explicacion: |
  Es la definición de funciones inversas: una deshace lo que hace la
  otra.
```

### 9 — Relación inversa: f(g(x)) = x

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["inversa", "verdadero_falso"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: ((10 ^ log10(x)) == x)
tipo: vf

enunciado: "f(x) = 10^x, g(x) = log₁₀(x). ¿f(g({x})) da de vuelta {x}?"

explicacion: |
  Aplicar la exponencial después del logaritmo también devuelve el
  valor original.
```

### 10 — Concepto: dominio de la exponencial

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función exponencial f(x) = aˣ son todos los números reales."

explicacion: |
  Cualquier exponente (entero, fraccionario, negativo) tiene sentido.
```

### 11 — Concepto: dominio de la logarítmica

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El dominio de la función logarítmica también son todos los reales, igual que la exponencial."

explicacion: |
  El dominio del logaritmo es sólo x > 0 — no se puede sacar logaritmo
  de 0 ni de un número negativo.
```

### 12 — Concepto: imagen de la exponencial

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "imagen", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La imagen de cualquier función exponencial f(x) = aˣ (con a>0) es y > 0."

explicacion: |
  Una potencia con base positiva nunca da 0 ni negativo.
```

### 13 — Concepto: imagen de la logarítmica

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "imagen", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La imagen de la función logarítmica son todos los números reales."

explicacion: |
  A diferencia del dominio (restringido a x>0), la imagen del logaritmo
  cubre todos los reales — el dominio y la imagen se invierten entre
  exponencial y logarítmica.
```

### 14 — Concepto: la exponencial nunca da 0

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Existe algún valor de x para el cual 10^x da exactamente 0."

explicacion: |
  Nunca — la exponencial se acerca a 0 (asíntota horizontal) pero jamás
  lo toca.
```

### 15 — Concepto: asíntota horizontal de la exponencial

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una función exponencial tiene una asíntota horizontal en y=0."

explicacion: |
  La curva se acerca cada vez más al eje x sin tocarlo nunca.
```

### 16 — Concepto: asíntota vertical de la logarítmica

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una función logarítmica tiene una asíntota vertical en x=0."

explicacion: |
  Cuando x se acerca a 0 por la derecha, el logaritmo se va hacia menos
  infinito sin llegar nunca a x=0 (que ni siquiera está en el dominio).
```

### 17 — Concepto: crecimiento exponencial vs. lineal

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A la larga, cualquier función exponencial con base mayor que 1 termina superando a cualquier función lineal, sin importar cuán grande sea la pendiente de esta última."

explicacion: |
  El crecimiento exponencial multiplica en cada paso; el lineal suma
  siempre lo mismo — a la larga, multiplicar gana.
```

### 18 — Comparar crecimiento: exponencial vs. lineal, caso concreto

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  m: random(50, 200)
  n: random(10, 15)

respuesta: ((2 ^ n) > (m * n))
tipo: vf

enunciado: "f(x) = 2^x (exponencial) y g(x) = {m}x (lineal, con pendiente grande). ¿f({n}) ya supera a g({n})?"

explicacion: |
  Aunque {m} es una pendiente grande, el crecimiento exponencial termina
  superándola para un x suficientemente grande.
```

### 19 — Concepto: decaimiento exponencial

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "decaimiento", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con base entre 0 y 1 (por ejemplo, f(x) = (1/2)ˣ), la función decrece en vez de crecer."

explicacion: |
  A diferencia de a>1, con 0<a<1 cada paso multiplica por un número
  menor a 1, así que el valor disminuye.
```

### 20 — Evaluar decaimiento en x negativo

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["exponencial", "decaimiento"]

variables:
  base_inv: random(2, 5)
  n: random(1, 4)

respuesta: base_inv ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (1/{base_inv})^x. ¿Cuánto vale f(−{n})?"

pasos:
  - "(1/{base_inv})^(−{n}) = {base_inv}^{n} = {base_inv ^ n}"

explicacion: |
  Un exponente negativo con base fraccionaria "da vuelta" la fracción,
  volviendo a crecer.
```

### 21 — Concepto: relación inversa entre las dos familias

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La función logarítmica es la función inversa de la exponencial de la misma base."

explicacion: |
  Una deshace lo que hace la otra — mismo concepto ya visto en
  `../funcion-inversa-composicion/`.
```

### 22 — Concepto: reflejo respecto a y=x

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los gráficos de una función exponencial y su logaritmo inverso son reflejos uno del otro respecto a la recta y=x."

explicacion: |
  Es una propiedad general de cualquier par de funciones inversas.
```

### 23 — Verificación con error: exponencial

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 5)
  real: 10 ^ n
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = 10^x. ¿Es correcto que f({n}) sea {propuesto}?"

explicacion: |
  El valor correcto es 10^{n} = {real}.
```

### 24 — Verificación con error: logarítmica

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 6)
  x: 10 ^ n
  error: uno_de([0, 0, 1, -1])
  propuesto: n + error

respuesta: (propuesto == n)
tipo: vf

enunciado: "g(x) = log₁₀(x). ¿Es correcto que g({x}) sea {propuesto}?"

explicacion: |
  El valor correcto es log₁₀({x}) = {n}.
```

### 25 — Aplicar: crecimiento poblacional (contexto)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  poblacion_inicial: random(100, 1000)
  tasa: random(2, 4)
  anios: random(1, 4)

respuesta: poblacion_inicial * tasa ^ anios
tipo: input
tolerancia_abs: 0

enunciado: "Una población se duplica (o se multiplica por {tasa}) cada año: P(t) = {poblacion_inicial}×{tasa}^t. ¿Cuál es la población después de {anios} años?"

explicacion: |
  Es una función exponencial: el crecimiento multiplica, no suma, en
  cada paso.
```

### 26 — Concepto: log10 vs ln

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "log₁₀(x) y ln(x) son exactamente la misma función, sólo con otro nombre."

explicacion: |
  Son logaritmos de distinta base: log₁₀ es base 10, ln es logaritmo
  natural (base e) — dan resultados distintos para el mismo x (ver
  `../logaritmos/` de Tronco 1).
```

### 27 — Concepto: no existe logaritmo de un negativo

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "log₁₀(−5) da un número real negativo."

explicacion: |
  No está definido: −5 no pertenece al dominio del logaritmo (x tiene
  que ser mayor que 0).
```

### 28 — Aplicar: hallar el exponente (ecuación simple)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["exponencial", "logaritmica"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "10^x = {x}. ¿Cuánto vale x?"

pasos:
  - "x = log₁₀({x}) = {n}"

explicacion: |
  Despejar un exponente es, exactamente, aplicar el logaritmo — la
  operación inversa.
```
