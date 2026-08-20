# Matemática — Integral (cuestionario, 30 preguntas VBLang)

> Tema: `A14` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Las integrales definidas usan sobre todo funciones lineales (la
antiderivada divide por 2, una división siempre exacta en binario) o
coeficientes construidos como múltiplos exactos del nuevo exponente,
para que el resultado sea siempre un número limpio.

---

### 1 — Integral de xⁿ: exponente resultante

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(1, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "∫x^{n} dx. ¿Cuál es el exponente de x en el resultado (antes de sumar la constante C)?"

explicacion: |
  Al integrar, se le suma 1 al exponente original.
```

### 2 — Integral de xⁿ: denominador resultante

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(1, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "∫x^{n} dx. ¿Por qué número hay que dividir?"

explicacion: |
  Se divide por el nuevo exponente, n+1 = {n + 1}.
```

### 3 — Integral de k·xⁿ: coeficiente resultante

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  n: random(1, 5)
  m: random(1, 10)
  k: (n + 1) * m

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "∫{k}x^{n} dx. ¿Cuál es el coeficiente de x^{n + 1} en el resultado?"

pasos:
  - "El coeficiente es {k}/({n}+1) = {k}/{n + 1} = {m}"

explicacion: |
  El coeficiente original se divide por el nuevo exponente.
```

### 4 — Integral de k·xⁿ: otro caso

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  n: random(1, 6)
  m: random(1, 8)
  k: (n + 1) * m

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "∫{k}x^{n} dx. ¿Cuál es el coeficiente de x^{n + 1} en el resultado?"

explicacion: |
  {k}/{n + 1} = {m}.
```

### 5 — Integral de una constante

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["constante"]

variables:
  k: random(1, 20)
  x: random(1, 15)

respuesta: k * x
tipo: input
tolerancia_abs: 0

enunciado: "∫{k} dx da {k}x + C. Sin la constante C, ¿cuánto vale {k}x en x={x}?"

explicacion: |
  ∫k dx = kx + C — evaluando la parte sin C en x={x}: {k}×{x} = {k * x}.
```

### 6 — Integral definida: función lineal simple

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 10)
  a: random(0, 5)
  b: random(6, 15)

respuesta: m * (b ^ 2 - a ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] {m}x dx. ¿Cuánto vale?"

pasos:
  - "Antiderivada: F(x) = {m}x²/2"
  - "F({b}) − F({a}) = {m}×{b ^ 2}/2 − {m}×{a ^ 2}/2 = {m * (b ^ 2 - a ^ 2) / 2}"

explicacion: |
  Es el área bajo la recta y={m}x, entre x={a} y x={b}.
```

### 7 — Integral definida: función lineal, otro rango

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 8)
  a: random(1, 6)
  b: random(7, 14)

respuesta: m * (b ^ 2 - a ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] {m}x dx. ¿Cuánto vale?"

explicacion: |
  F(x) = {m}x²/2, evaluada entre {a} y {b}.
```

### 8 — Integral definida: con término constante

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["definida"]

variables:
  m: random(2, 8)
  c: random(1, 10)
  a: random(0, 4)
  b: random(5, 12)

respuesta: (m * b ^ 2 / 2 + c * b) - (m * a ^ 2 / 2 + c * a)
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] ({m}x + {c}) dx. ¿Cuánto vale?"

pasos:
  - "Antiderivada: F(x) = {m}x²/2 + {c}x"
  - "F({b}) − F({a})"

explicacion: |
  Se integra término a término, y se evalúa la diferencia F(b)−F(a).
```

### 9 — Integral definida: velocidad constante, distancia recorrida

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  velocidad: random(10, 100)
  t1: random(0, 5)
  t2: random(6, 15)

respuesta: velocidad * (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se mueve a velocidad constante v(t) = {velocidad} km/h. ¿Qué distancia recorre entre t={t1} y t={t2} horas (∫v dt)?"

explicacion: |
  Con velocidad constante, la integral se reduce a velocidad×tiempo —
  el área de un rectángulo.
```

### 10 — Integral definida: velocidad que cambia (aceleración constante)

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  aceleracion: random(2, 10)
  t1: random(0, 3)
  t2: random(4, 10)

respuesta: aceleracion * (t2 ^ 2 - t1 ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto acelera desde el reposo con v(t) = {aceleracion}t. ¿Qué distancia recorre entre t={t1} y t={t2} (∫v dt)?"

pasos:
  - "F(t) = {aceleracion}t²/2, evaluada entre {t1} y {t2}"

explicacion: |
  La distancia recorrida es la integral de la velocidad — el área bajo
  el gráfico de v(t).
```

### 11 — Concepto: qué es una antiderivada

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "F es una antiderivada de f si F'(x) = f(x)."

explicacion: |
  Es la definición: la integral deshace la derivada.
```

### 12 — Concepto: la constante de integración

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una integral indefinida siempre incluye una constante +C, porque la derivada de cualquier constante es 0."

explicacion: |
  F(x)+C también es una antiderivada válida de f, para cualquier C —
  por eso ∫f(x)dx representa a TODAS las antiderivadas a la vez.
```

### 13 — Concepto: integral definida es un número

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la integral indefinida, la integral definida ∫[a,b] f(x)dx es un número concreto, no una familia de funciones."

explicacion: |
  Por eso la integral definida no lleva "+C" — la constante se cancela
  al restar F(b)−F(a).
```

### 14 — Concepto: la integral definida como área

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La integral definida ∫[a,b] f(x)dx representa el área entre el gráfico de f y el eje x, entre x=a y x=b."

explicacion: |
  Es la interpretación geométrica central de la integral definida.
```

### 15 — Error común: restar en vez de sumar el exponente

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  n: random(2, 8)

respuesta: n + 1
tipo: mc
opciones_explicitas:
  - n + 1
  - n - 1
  - n

enunciado: "∫x^{n} dx. ¿Cuál es el exponente correcto del resultado?"

explicacion: |
  Al integrar se SUMA 1 al exponente (n−1 sería el error de confundirlo
  con derivar).
```

### 16 — Error común: olvidar la constante C

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "∫3x² dx = x³ es una respuesta completa y correcta."

explicacion: |
  Falta el "+C" — sin la constante, la respuesta está incompleta (no es
  TODA antiderivada posible, sólo una).
```

### 17 — Verificar una integral derivando el resultado

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 6)
  m: random(1, 8)
  k: (n + 1) * m

respuesta: ((m * (n + 1)) == k)
tipo: vf

enunciado: "Se propone que ∫{k}x^{n} dx = {m}x^{n + 1} + C. Derivando {m}x^{n + 1}, ¿se recupera {k}x^{n}?"

pasos:
  - "Derivando {m}x^{n + 1}: {m}×({n + 1})x^{n} = {m * (n + 1)}x^{n}"

explicacion: |
  Derivar el resultado de una integral tiene que devolver la función
  original — es la forma de verificar.
```

### 18 — Verificación con error: integral definida

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 10)
  a: random(0, 5)
  b: random(6, 15)
  real: m * (b ^ 2 - a ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "∫[{a},{b}] {m}x dx. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

### 19 — Concepto: orden en la integral definida

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En ∫[a,b] f(x)dx = F(b)−F(a), da lo mismo calcular F(a)−F(b) en vez de F(b)−F(a)."

explicacion: |
  Invertir el orden cambia el signo del resultado — no da lo mismo.
```

### 20 — Concepto: integral de una suma

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La integral de una suma de funciones es la suma de las integrales de cada una, por separado."

explicacion: |
  Mismo criterio que al derivar: se integra término a término.
```

### 21 — Concepto: regla de la potencia no aplica a n=-1

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La regla ∫xⁿdx = x^(n+1)/(n+1)+C no se puede aplicar cuando n=−1 (dividiría por 0)."

explicacion: |
  Ese caso especial (∫x⁻¹dx = ∫(1/x)dx) da ln|x|+C — fuera del alcance
  de este módulo, pero vale la pena saber que existe la excepción.
```

### 22 — Concepto: integral y derivada son operaciones inversas

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Integrar y derivar son operaciones inversas una de la otra, como sumar y restar."

explicacion: |
  Derivar la integral de f devuelve f; integrar la derivada de f
  devuelve f (más una constante).
```

### 23 — Aplicar: área bajo una recta desde el origen

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 12)
  b: random(3, 20)

respuesta: m * b ^ 2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[0,{b}] {m}x dx. ¿Cuánto vale?"

pasos:
  - "F({b}) − F(0) = {m}×{b ^ 2}/2 − 0 = {m * b ^ 2 / 2}"

explicacion: |
  Con el límite inferior en 0, F(0)=0 siempre, así que sólo hace falta
  evaluar F en el límite superior.
```

### 24 — Concepto: integral definida puede dar 0

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una integral definida puede dar 0, si a=b (los dos límites son el mismo valor)."

explicacion: |
  F(a)−F(a) = 0 siempre — no hay ningún área entre un punto y sí mismo.
```

### 25 — Integral indefinida completa: dos términos

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["regla_potencia"]

variables:
  n1: 1
  m1: random(1, 8)
  k1: (n1 + 1) * m1
  k2: random(1, 20)

respuesta: m1
tipo: input
tolerancia_abs: 0

enunciado: "∫({k1}x + {k2}) dx. ¿Cuál es el coeficiente de x² en el resultado?"

pasos:
  - "∫{k1}x dx = {k1}x²/2 = {m1}x²"
  - "∫{k2} dx = {k2}x"

explicacion: |
  Se integra cada término por separado, con la regla de la potencia.
```

### 26 — Integral indefinida completa: coeficiente del término lineal

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["regla_potencia"]

variables:
  n1: 1
  m1: random(1, 8)
  k1: (n1 + 1) * m1
  k2: random(1, 20)

respuesta: k2
tipo: input
tolerancia_abs: 0

enunciado: "∫({k1}x + {k2}) dx = {m1}x² + (algo)x + C. ¿Cuál es el coeficiente de ese término lineal?"

explicacion: |
  ∫{k2} dx = {k2}x — el coeficiente no cambia al integrar una constante.
```

### 27 — Concepto: relación con el área bajo velocidad negativa

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una función toma valores negativos en parte del intervalo, la integral definida resta esa área (en vez de sumarla) para esa parte."

explicacion: |
  La integral definida da el área "con signo" — regiones bajo el eje x
  cuentan negativo.
```

### 28 — Aplicar: distancia total con velocidad lineal creciente

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  aceleracion: random(2, 8)
  t_final: random(2, 12)

respuesta: aceleracion * t_final ^ 2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {aceleracion}t (velocidad, partiendo del reposo). ¿Qué distancia total recorre entre t=0 y t={t_final}?"

explicacion: |
  ∫[0,{t_final}] {aceleracion}t dt = {aceleracion}×{t_final}²/2.
```

### 29 — Concepto: integrar una función ya derivada devuelve la original

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) = {a}x² + {b}x, y se deriva para obtener f'(x), integrar f'(x) devuelve {a}x² + {b}x + C (la función original, salvo la constante)."

explicacion: |
  Integrar y derivar se cancelan entre sí, módulo la constante de
  integración que se pierde al derivar.
```

### 30 — Verificación con error: integral indefinida

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 5)
  m: random(1, 8)
  k: (n + 1) * m
  error: uno_de([0, 0, 1, -1])
  propuesto: m + error

respuesta: (propuesto == m)
tipo: vf

enunciado: "∫{k}x^{n} dx. ¿Es correcto que el coeficiente de x^{n + 1} en el resultado sea {propuesto}?"

explicacion: |
  El coeficiente correcto es {k}/{n + 1} = {m}.
```
