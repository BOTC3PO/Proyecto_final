# Matemática — Forma polar: módulo y argumento (cuestionario, 26 preguntas VBLang)

> Tema: `A15B` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Los módulos se construyen a partir de ternas pitagóricas (3-4-5, 5-12-13,
8-15-17...) escaladas, así siempre dan raíz cuadrada exacta. Los
argumentos se limitan a los cuatro casos especiales sobre los ejes
(0°/90°/180°/270°), que no necesitan trigonometría para calcularse —
ver la nota de implementación en `../dependencias.md`.

---

### 1 — Módulo con terna 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  k: random(1, 15)
  a: 3 * k
  b: 4 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

pasos:
  - "|z| = √({a}² + {b}²) = √({a ^ 2} + {b ^ 2}) = √{a ^ 2 + b ^ 2} = {sqrt(a ^ 2 + b ^ 2)}"

explicacion: |
  El módulo es la distancia al origen, calculada con Pitágoras.
```

### 2 — Módulo con terna 5-12-13

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  k: random(1, 10)
  a: 5 * k
  b: 12 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

### 3 — Módulo con terna 8-15-17

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["modulo"]

variables:
  k: random(1, 8)
  a: 8 * k
  b: 15 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

### 4 — Módulo con terna 7-24-25

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["modulo"]

variables:
  k: random(1, 8)
  a: 7 * k
  b: 24 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

### 5 — Módulo con terna 20-21-29

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["modulo"]

variables:
  k: random(1, 6)
  a: 20 * k
  b: 21 * k

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  √({a}² + {b}²) = {sqrt(a ^ 2 + b ^ 2)}.
```

### 6 — Módulo con signos negativos

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["modulo", "signos"]

variables:
  k: random(1, 15)
  signo_a: uno_de([1, -1])
  signo_b: uno_de([1, -1])
  a: 3 * k * signo_a
  b: 4 * k * signo_b

respuesta: sqrt(a ^ 2 + b ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de {a} + {b}i?"

explicacion: |
  El signo no afecta al módulo: se eleva al cuadrado antes de sumar, así
  que siempre da positivo.
```

### 7 — Argumento: real positivo

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  a: random(1, 30)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de {a} (un real positivo puro)?"

explicacion: |
  Está sobre el eje real positivo: argumento 0°.
```

### 8 — Argumento: imaginario positivo puro

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  b: random(1, 30)

respuesta: 90
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de {b}i (un imaginario positivo puro)?"

explicacion: |
  Está sobre el eje imaginario positivo: argumento 90°.
```

### 9 — Argumento: real negativo

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  a: random(1, 30)

respuesta: 180
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de −{a} (un real negativo puro)?"

explicacion: |
  Está sobre el eje real negativo: argumento 180°.
```

### 10 — Argumento: imaginario negativo puro

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["argumento"]

variables:
  b: random(1, 30)

respuesta: 270
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el argumento (en grados) de −{b}i (un imaginario negativo puro)?"

explicacion: |
  Está sobre el eje imaginario negativo: argumento 270°.
```

### 11 — Módulo de un real negativo puro

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  a: random(1, 40)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de −{a}?"

explicacion: |
  El módulo es siempre positivo: |−{a}| = {a}.
```

### 12 — Módulo de un imaginario negativo puro

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  b: random(1, 40)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el módulo de −{b}i?"

explicacion: |
  |−{b}i| = {b}.
```

### 13 — Multiplicar en forma polar: módulo del resultado

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion_polar"]

variables:
  r1: random(2, 15)
  r2: random(2, 15)
  t1: uno_de([0, 90, 180, 270])
  t2: uno_de([0, 90, 180, 270])

respuesta: r1 * r2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el módulo de z₁×z₂?"

explicacion: |
  Los módulos se multiplican: {r1}×{r2} = {r1 * r2}.
```

### 14 — Multiplicar en forma polar: argumento del resultado

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion_polar"]

variables:
  r1: random(2, 15)
  r2: random(2, 15)
  t1: uno_de([0, 90, 180, 270])
  t2: uno_de([0, 90, 180, 270])

respuesta: t1 + t2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el argumento de z₁×z₂ (sin normalizar a menos de 360°)?"

explicacion: |
  Los argumentos se suman: {t1}° + {t2}° = {t1 + t2}°.
```

### 15 — Dividir en forma polar: módulo del resultado

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["division_polar"]

variables:
  r2: random(2, 10)
  k: random(2, 8)
  r1: r2 * k
  t1: uno_de([0, 90, 180, 270])
  t2: uno_de([0, 90, 180, 270])

respuesta: r1 / r2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el módulo de z₁/z₂?"

explicacion: |
  Los módulos se dividen: {r1}/{r2} = {r1 / r2}.
```

### 16 — Dividir en forma polar: argumento del resultado

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["division_polar"]

variables:
  r1: random(2, 15)
  r2: random(2, 15)
  t1: uno_de([180, 270])
  t2: uno_de([0, 90])

respuesta: t1 - t2
tipo: input
tolerancia_abs: 0

enunciado: "z₁ tiene módulo {r1} y argumento {t1}°. z₂ tiene módulo {r2} y argumento {t2}°. ¿Cuál es el argumento de z₁/z₂?"

explicacion: |
  Los argumentos se restan: {t1}° − {t2}° = {t1 - t2}°.
```

### 17 — Concepto: qué es el módulo

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un número complejo es la distancia desde el origen hasta el punto (a, b) en el plano complejo."

explicacion: |
  Se calcula con el teorema de Pitágoras: √(a²+b²).
```

### 18 — Concepto: el módulo nunca es negativo

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un número complejo nunca puede dar negativo."

explicacion: |
  Es una distancia, y las distancias no son negativas — además, sale de
  una raíz cuadrada de una suma de cuadrados, siempre ≥ 0.
```

### 19 — Concepto: multiplicar en polar es más simple

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar dos números complejos en forma polar es más simple que en forma binómica: sólo hace falta multiplicar módulos y sumar argumentos."

explicacion: |
  En forma binómica hay que distribuir y usar i²=−1; en forma polar es
  sólo una multiplicación y una suma.
```

### 20 — Concepto: error de mezclar las reglas

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al multiplicar dos complejos en forma polar, los argumentos se multiplican entre sí, igual que los módulos."

explicacion: |
  Los módulos se multiplican, pero los argumentos se SUMAN — son reglas
  distintas para cada parte.
```

### 21 — Concepto: forma polar completa

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La forma polar z = r(cos θ + i sen θ) usa el módulo r y el argumento θ para describir el mismo número que a + bi."

explicacion: |
  Son dos formas distintas de nombrar el mismo punto del plano complejo.
```

### 22 — Concepto: arctan solo no alcanza

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular el argumento sólo con arctan(b/a), sin fijarse en qué cuadrante cae el punto, puede dar un ángulo equivocado."

explicacion: |
  arctan por sí solo no distingue todos los cuadrantes — hay que ajustar
  el resultado según los signos de a y b.
```

### 23 — Verificación con error: módulo

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(1, 15)
  a: 3 * k
  b: 4 * k
  real: sqrt(a ^ 2 + b ^ 2)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "¿Es correcto que el módulo de {a} + {b}i sea {propuesto}?"

explicacion: |
  El módulo correcto es √({a}²+{b}²) = {real}.
```

### 24 — Concepto: módulo de un número real puro

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un número real puro (b=0) es simplemente su valor absoluto."

explicacion: |
  √(a²+0²) = √(a²) = |a|.
```

### 25 — Multiplicar tres veces: módulo elevado al cubo

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion_polar"]

variables:
  r: random(2, 8)
  t: uno_de([0, 90, 180, 270])

respuesta: r * r * r
tipo: input
tolerancia_abs: 0

enunciado: "z tiene módulo {r} y argumento {t}°. ¿Cuál es el módulo de z³ (z×z×z)?"

explicacion: |
  Cada multiplicación multiplica los módulos: {r}×{r}×{r} = {r * r * r}.
```

### 26 — Multiplicar tres veces: argumento acumulado

```
metadata:
  materia: "matematicas"
  tema: "forma_polar_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion_polar"]

variables:
  r: random(2, 8)
  t: uno_de([30, 45, 60, 90])

respuesta: t * 3
tipo: input
tolerancia_abs: 0

enunciado: "z tiene módulo {r} y argumento {t}°. ¿Cuál es el argumento de z³ (sin normalizar), sumando el argumento tres veces?"

explicacion: |
  Cada multiplicación suma el argumento: {t}°×3 = {t * 3}°.
```
