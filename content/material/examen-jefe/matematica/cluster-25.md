# Examen jefe — [PENDIENTE #625]

> Logro #625. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: forma-polar-complejos (26 preguntas)

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

## Sección: ecuaciones-exponenciales-logaritmicas (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 8)
  x_sol: random(1, 8)

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}^x = {a}^{x_sol}. ¿Cuánto vale x?"

explicacion: |
  Con la misma base a los dos lados, los exponentes tienen que coincidir.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["exponencial"]

variables:
  a: random(2, 6)
  x_sol: random(1, 6)
  resultado: a ^ x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}^x = {resultado}. ¿Cuánto vale x?"

pasos:
  - "{resultado} = {a}^{x_sol}, así que x = {x_sol}"

explicacion: |
  Hay que reconocer {resultado} como una potencia de {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["exponencial"]

variables:
  n: random(1, 6)
  resultado: 10 ^ n

respuesta: log10(resultado)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: 10^x = {resultado}. ¿Cuánto vale x?"

pasos:
  - "x = log₁₀({resultado}) = {log10(resultado)}"

explicacion: |
  Aplicar log₁₀ a los dos lados deshace la exponencial de base 10.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["exponencial", "signos"]

variables:
  a: random(2, 6)
  n: random(1, 4)
  resultado: 1 / (a ^ n)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}^x = 1/{a ^ n}. ¿Cuánto vale x?"

explicacion: |
  1/{a}^{n} = {a}^(−{n}), así que x = −{n}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "basico"
  tags: ["logaritmica"]

variables:
  k: random(1, 6)

respuesta: 10 ^ k
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀(x) = {k}. ¿Cuánto vale x?"

pasos:
  - "x = 10^{k} = {10 ^ k}"

explicacion: |
  Aplicar la exponencial de base 10 a los dos lados deshace el
  logaritmo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  k: random(1, 5)
  desplazamiento: random(1, 20)

respuesta: 10 ^ k - desplazamiento
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀(x + {desplazamiento}) = {k}. ¿Cuánto vale x?"

pasos:
  - "x + {desplazamiento} = 10^{k} = {10 ^ k}"
  - "x = {10 ^ k} − {desplazamiento} = {10 ^ k - desplazamiento}"

explicacion: |
  Primero se deshace el logaritmo, después se despeja x igual que en
  `../ecuacion-primer-grado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["logaritmica"]

variables:
  k: random(1, 4)
  p: random(2, 5)

respuesta: (10 ^ k) / p
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀({p}x) = {k}. ¿Cuánto vale x?"

pasos:
  - "{p}x = 10^{k} = {10 ^ k}"
  - "x = {10 ^ k} / {p} = {(10 ^ k) / p}"

explicacion: |
  Primero se deshace el logaritmo, y después se despeja x dividiendo por
  {p}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["dominio", "verdadero_falso"]

variables:
  desplazamiento: random(1, 20)
  k: random(1, 5)
  x_sol: 10 ^ k - desplazamiento

respuesta: ((x_sol + desplazamiento) > 0)
tipo: vf

enunciado: "log₁₀(x + {desplazamiento}) = {k} da x = {x_sol}. ¿Es válida esta solución (el argumento del logaritmo queda positivo)?"

explicacion: |
  Se verifica reemplazando: x+{desplazamiento} = {x_sol + desplazamiento},
  que tiene que ser mayor que 0.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["dominio", "verdadero_falso"]

variables:
  r1: -random(1, 10)
  r2: random(1, 10)

respuesta: (r1 > 0)
tipo: vf

enunciado: "Al resolver log₁₀(x) + log₁₀(x+{r2 - r1}) = log₁₀(algo) se obtiene x={r1} como una de las soluciones algebraicas. ¿Es una solución válida (el argumento del primer logaritmo, x, queda positivo)?"

explicacion: |
  x={r1} es negativo — log₁₀ de un negativo no está definido, así que
  esta solución algebraica se descarta (es una solución extraña).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["propiedades", "verdadero_falso"]

variables:
  n: random(1, 4)
  m: random(1, 4)
  a: 10 ^ n
  b: 10 ^ m

respuesta: ((log10(a * b)) == (log10(a) + log10(b)))
tipo: vf

enunciado: "¿log₁₀({a}×{b}) es igual a log₁₀({a}) + log₁₀({b})?"

explicacion: |
  log(a×b) = log(a) + log(b) — la propiedad del producto.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["propiedades", "verdadero_falso"]

variables:
  n: random(2, 6)
  m: random(1, 4)
  a: 10 ^ n
  b: 10 ^ m

respuesta: ((log10(a / b)) == (log10(a) - log10(b)))
tipo: vf

enunciado: "¿log₁₀({a}/{b}) es igual a log₁₀({a}) − log₁₀({b})?"

explicacion: |
  log(a/b) = log(a) − log(b) — la propiedad del cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["propiedades", "verdadero_falso"]

variables:
  n: random(1, 3)
  k: random(1, 4)
  a: 10 ^ n

respuesta: ((log10(a ^ k)) == (k * log10(a)))
tipo: vf

enunciado: "¿log₁₀({a}^{k}) es igual a {k}×log₁₀({a})?"

explicacion: |
  log(aⁿ) = n×log(a) — la propiedad de la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["propiedades"]

variables:
  x_sol: random(2, 15)
  p: random(2, 8)
  resultado: log10(p * x_sol)

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀({p}) + log₁₀(x) = {resultado}. ¿Cuánto vale x?"

pasos:
  - "log₁₀({p}·x) = {resultado} → {p}·x = 10^{resultado}"
  - "x = 10^{resultado} / {p} = {x_sol}"

explicacion: |
  Se combinan los dos logaritmos en uno solo (propiedad del producto)
  antes de despejar x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para resolver una ecuación exponencial, se puede aplicar logaritmo a los dos lados de la igualdad, sin cambiar el resultado."

explicacion: |
  Aplicar la misma operación a los dos lados mantiene la igualdad, igual
  que sumar/restar/multiplicar en `../ecuacion-primer-grado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Se puede aplicar logaritmo sólo al lado izquierdo de la ecuación, y dejar el lado derecho como está, sin que eso rompa la igualdad."

explicacion: |
  Rompe la igualdad — la misma operación tiene que aplicarse a los DOS
  lados.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una ecuación logarítmica, siempre hay que comprobar que las soluciones encontradas dejen positivos los argumentos de los logaritmos originales."

explicacion: |
  El álgebra puede dar una solución que, al reemplazarla, deja un
  logaritmo de un número negativo o cero — no válida.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si aˣ = aʸ (misma base a), entonces necesariamente x = y."

explicacion: |
  La función exponencial nunca repite un valor de salida — por eso se
  puede "cancelar" la base cuando coincide en los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

variables:
  n: random(1, 3)
  m: random(1, 3)
  a: 10 ^ n
  b: 10 ^ m

respuesta: ((log10(a * b)) == (log10(a) * log10(b)))
tipo: vf

enunciado: "¿log₁₀({a}×{b}) es igual a log₁₀({a}) × log₁₀({b}) (multiplicando los logaritmos, no sumándolos)?"

explicacion: |
  Error común: log(a×b) es la SUMA de los logaritmos, no el producto.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 8)
  x_sol: random(1, 8)
  error: uno_de([0, 0, 1, -1])
  propuesto: x_sol + error

respuesta: (propuesto == x_sol)
tipo: vf

enunciado: "{a}^x = {a}^{x_sol}. ¿Es correcto que x = {propuesto}?"

explicacion: |
  Con la misma base, x tiene que coincidir exactamente con {x_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(1, 5)
  real: 10 ^ k
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "log₁₀(x) = {k}. ¿Es correcto que x = {propuesto}?"

explicacion: |
  El valor correcto es x = 10^{k} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  n: random(1, 5)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una inversión crece según C(t) = C₀×2^t. ¿Después de cuántos períodos t el capital queda multiplicado exactamente por {2 ^ n}?"

pasos:
  - "2^t = {2 ^ n} → t = log₂({2 ^ n}) = {n}"

explicacion: |
  Es una ecuación exponencial simple, reconociendo {2 ^ n} como potencia
  de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["logaritmica", "problema"]

variables:
  k: random(1, 6)

respuesta: 10 ^ k
tipo: input
tolerancia_abs: 0

enunciado: "En una escala logarítmica, la magnitud registrada es log₁₀(I) = {k} (I es la intensidad, en una unidad de referencia). ¿Cuánto vale I?"

explicacion: |
  Se despeja igual que cualquier ecuación logarítmica: I = 10^{k}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una ecuación exponencial simple como aˣ = aᵏ tiene una única solución."

explicacion: |
  A diferencia de una ecuación cuadrática, acá no hay dos soluciones
  posibles — la exponencial es inyectiva.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una ecuación logarítmica que involucra un producto o cociente de logaritmos, es posible obtener una solución algebraica que no sea válida en el dominio original."

explicacion: |
  Es justo el caso del ejemplo de `teoria.md`: la ecuación cuadrática
  intermedia puede dar una raíz negativa que no sirve como argumento de
  un logaritmo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["exponencial"]

variables:
  a: random(2, 10)
  n: 2

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x² = {a ^ 2} (con x positivo). ¿Cuánto vale x?"

explicacion: |
  Acá la incógnita es la base, no el exponente — se resuelve con raíz
  cuadrada, no con logaritmo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  x_sol: random(2, 30)

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀(x) = log₁₀({x_sol}). ¿Cuánto vale x?"

explicacion: |
  Con el mismo logaritmo a los dos lados, los argumentos tienen que
  coincidir (el logaritmo también es inyectivo).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si log₁₀(x) = log₁₀(y), entonces necesariamente x = y."

explicacion: |
  El logaritmo nunca repite un valor de salida para dos argumentos
  distintos — es inyectivo, igual que la exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["propiedades"]

variables:
  x_sol: random(2, 20)
  n: 2

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: 2·log₁₀(x) = log₁₀({x_sol ^ 2}). ¿Cuánto vale x (positivo)?"

pasos:
  - "2·log₁₀(x) = log₁₀(x²) (propiedad de la potencia)"
  - "log₁₀(x²) = log₁₀({x_sol ^ 2}) → x² = {x_sol ^ 2} → x = {x_sol}"

explicacion: |
  Convertir 2·log(x) en log(x²) permite igualar directamente los
  argumentos.
```

## Sección: limite (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["continua"]

variables:
  a: random(1, 6)
  b: random(1, 10)
  c: random(-10, 10)
  punto: random(-8, 8)

respuesta: a * punto ^ 2 + b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{a}x² + {b}x + {c}]. ¿Cuánto vale?"

explicacion: |
  Para un polinomio, el límite es simplemente evaluar la función en ese
  punto.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["continua"]

variables:
  m: random(1, 10)
  b: random(-15, 15)
  punto: random(-10, 10)

respuesta: m * punto + b
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{m}x + {b}]. ¿Cuánto vale?"

explicacion: |
  Una función lineal es continua en todos lados: el límite es f({punto}).
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["continua"]

variables:
  a: random(2, 10)
  punto: random(1, 10)
  desplazamiento: random(1, 10)

respuesta: a / (punto + desplazamiento)
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{a} / (x + {desplazamiento})]. ¿Cuánto vale?"

explicacion: |
  El denominador no se anula en x={punto} (da {punto + desplazamiento}),
  así que se puede evaluar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["indeterminacion"]

variables:
  a: random(1, 20)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{a}) [(x² − {a ^ 2}) / (x − {a})]. ¿Cuánto vale?"

pasos:
  - "Reemplazar directo da 0/0 — hay que factorear"
  - "(x²−{a ^ 2})/(x−{a}) = (x+{a})(x−{a})/(x−{a}) = x+{a} (para x≠{a})"
  - "lim(x→{a}) (x+{a}) = {a}+{a} = {2 * a}"

explicacion: |
  Factorear como diferencia de cuadrados cancela el factor problemático.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["indeterminacion"]

variables:
  a: random(1, 15)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→−{a}) [(x² − {a ^ 2}) / (x + {a})]. ¿Cuánto vale?"

pasos:
  - "(x²−{a ^ 2})/(x+{a}) = (x+{a})(x−{a})/(x+{a}) = x−{a} (para x≠−{a})"
  - "lim(x→−{a}) (x−{a}) = −{a}−{a} = −{2 * a}"

explicacion: |
  Acá el factor que se cancela es (x+{a}), porque el límite es en
  x=−{a}.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  k: random(2, 10)
  a: random(1, 15)

respuesta: k * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→0) [({k}x² + {k * a}x) / x]. ¿Cuánto vale?"

pasos:
  - "({k}x²+{k * a}x)/x = x({k}x+{k * a})/x = {k}x+{k * a} (para x≠0)"
  - "lim(x→0) ({k}x+{k * a}) = {k * a}"

explicacion: |
  Sacando x como factor común en el numerador, se cancela con el
  denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["laterales", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-10, 10)
  punto: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Coinciden el límite por la izquierda y por la derecha de f en x={punto} (o sea, existe el límite)?"

explicacion: |
  Para una función lineal (sin quiebres), los límites laterales siempre
  coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["laterales", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si el límite por la izquierda de f en x=a da 3, y el límite por la derecha da 7, el límite de f en x=a existe (y vale algún promedio de los dos)."

explicacion: |
  Si los límites laterales no coinciden, el límite completo NO existe —
  no se promedia ni se elige uno.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Cuando reemplazar directo en un límite da 0/0, eso significa que el límite vale 0."

explicacion: |
  0/0 es una indeterminación, no un valor — hay que factorear y
  simplificar antes de poder evaluar.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una función puede no estar definida en x=a y aun así tener un límite bien definido cuando x se acerca a a."

explicacion: |
  Es exactamente el caso de (x²−a²)/(x−a): no está definida en x=a
  (denominador 0), pero el límite ahí sí existe y vale 2a.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para un polinomio, el límite en cualquier punto coincide exactamente con evaluar la función en ese punto."

explicacion: |
  Los polinomios son continuos en todos los reales — no hay "saltos" ni
  denominadores que se anulen.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(-10, 10)
  c: random(-10, 10)
  punto: random(-5, 5)
  real: a * punto ^ 2 + b * punto + c
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "lim(x→{punto}) [{a}x² + {b}x + {c}]. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es {real}, evaluando el polinomio en {punto}.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  a: random(1, 12)

respuesta: 3 * a ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{a}) [(x³ − {a ^ 3}) / (x − {a})]. Usando que x³−a³ = (x−a)(x²+ax+a²), ¿cuánto vale el límite?"

pasos:
  - "(x³−{a ^ 3})/(x−{a}) = x²+{a}x+{a ^ 2} (para x≠{a})"
  - "lim(x→{a}) (x²+{a}x+{a ^ 2}) = {a ^ 2}+{a ^ 2}+{a ^ 2} = {3 * a ^ 2}"

explicacion: |
  Factorear una diferencia de cubos deja un trinomio que sí se puede
  evaluar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: a / b
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→∞) [({a}x + 5) / ({b}x − 3)]. ¿Cuánto vale?"

pasos:
  - "Con x muy grande, los términos sin x se vuelven insignificantes frente a los que sí tienen x"
  - "El límite es el cociente de los coeficientes principales: {a}/{b}"

explicacion: |
  Cuando el grado del numerador y del denominador coincide, el límite en
  el infinito es el cociente de los coeficientes principales.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

variables:
  a: random(1, 10)

respuesta: "Infinito (crece sin límite)"
tipo: mc
opciones_explicitas:
  - "Infinito (crece sin límite)"
  - "0"
  - a

enunciado: "lim(x→∞) [{a}x² + 3x − 7]. ¿Qué pasa con este límite?"

explicacion: |
  Un polinomio de grado 2 o más crece sin límite cuando x se va a
  infinito (con coeficiente principal positivo).
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 10)
  punto: random(1, 10)

respuesta: 2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "Para f(x) = {a}x², el límite lim(h→0) [(f({punto}+h) − f({punto})) / h] da {2 * a}×{punto}. ¿Cuánto es ese valor?"

explicacion: |
  Este límite en particular es, exactamente, la definición de derivada
  — adelanto de `../derivada/`.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El límite de una suma de funciones es la suma de los límites de cada una (siempre que cada límite individual exista)."

explicacion: |
  Es una de las propiedades básicas de los límites: se pueden calcular
  "por partes".
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El límite de un producto de funciones es el producto de los límites de cada una (siempre que cada límite individual exista)."

explicacion: |
  Misma idea que la suma, aplicada al producto.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Factorear el numerador y cancelar el factor común con el denominador"
tipo: mc
opciones_explicitas:
  - "Factorear el numerador y cancelar el factor común con el denominador"
  - "Reemplazar x=a directamente y dejar el resultado como 0/0"
  - "Ignorar el denominador y evaluar sólo el numerador"

enunciado: "Al calcular un límite que da 0/0 al reemplazar directo, ¿cuál es el paso correcto?"

explicacion: |
  0/0 avisa que hace falta simplificar algebraicamente antes de evaluar
  — no es la respuesta final.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)

respuesta: r1 - r2
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{r1}) [(x² − {r1 + r2}x + {r1 * r2}) / (x − {r1})]. ¿Cuánto vale?"

pasos:
  - "El numerador se factorea como (x−{r1})(x−{r2})"
  - "(x−{r1})(x−{r2})/(x−{r1}) = x−{r2} (para x≠{r1})"
  - "lim(x→{r1}) (x−{r2}) = {r1}−{r2} = {r1 - r2}"

explicacion: |
  El trinomio del numerador se factorea usando el mismo método de
  `../polinomios-factoreo/`.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto"]

variables:
  c: random(-20, 20)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→5) [{c}] (una función constante). ¿Cuánto vale?"

explicacion: |
  El límite de una constante es esa misma constante, sin importar hacia
  dónde se acerque x.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto"]

variables:
  punto: random(1, 8)
  n: random(2, 4)

respuesta: punto ^ n
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [xⁿ], con n={n}. ¿Cuánto vale?"

explicacion: |
  {punto}^{n} = {punto ^ n} — otra vez, evaluar directo alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El límite de f(x) cuando x tiende a a es siempre exactamente igual a f(a), sin excepción."

explicacion: |
  No siempre: si f no está definida en a (por ejemplo, con un
  denominador que se anula), el límite puede existir de todas formas —
  son preguntas relacionadas, pero no idénticas.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 15)
  real: 2 * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "lim(x→{a}) [(x² − {a ^ 2}) / (x − {a})]. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es 2×{a} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

respuesta: "Infinito"
tipo: mc
opciones_explicitas:
  - "Infinito"
  - "0"
  - "1"

enunciado: "lim(x→∞) [(x² + 3) / (x + 1)]. El grado del numerador (2) es mayor que el del denominador (1). ¿Qué pasa con este límite?"

explicacion: |
  Cuando el numerador crece más rápido que el denominador, el cociente
  crece sin límite.
```

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

respuesta: "0"
tipo: mc
opciones_explicitas:
  - "0"
  - "Infinito"
  - "1"

enunciado: "lim(x→∞) [(x + 3) / (x² + 1)]. El grado del denominador (2) es mayor que el del numerador (1). ¿Qué pasa con este límite?"

explicacion: |
  Cuando el denominador crece más rápido, el cociente se achica hacia 0.
```

## Sección: razon (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

enunciado: "¿Qué es una razón entre dos cantidades?"
tipo: mc
opciones_explicitas:
  - "La comparación de las dos cantidades por cociente (a:b)"
  - "La suma de las dos cantidades"
  - "La diferencia entre las dos cantidades"
respuesta: "La comparación de las dos cantidades por cociente (a:b)"

explicacion: |
  Una razón compara dos cantidades dividiendo una por la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon"]

variables:
  varones: random(5, 30)
  mujeres: random(5, 30)

respuesta: varones
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {varones} varones y {mujeres} mujeres. ¿Cuál es el primer término de la razón varones:mujeres?"

explicacion: |
  El primer término de la razón es la primera cantidad mencionada, en el
  mismo orden en que se pide.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  a: divisor_comun * random(2, 9)
  b: divisor_comun * random(2, 9)
  simplificador: mcd(a, b)

restricciones:
  - a != b

respuesta: a / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar la razón {a}:{b} al máximo, ¿cuál queda el primer término?"

pasos:
  - "MCD({a}, {b}) = {simplificador}. {a} ÷ {simplificador} = {a / simplificador}"

explicacion: |
  Simplificar una razón es dividir los dos términos por su MCD, igual que
  con las fracciones.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Son equivalentes las razones {a}:{b} y {c}:{d}?"

explicacion: |
  Dos razones son equivalentes si representan la misma relación,
  verificable con el producto cruzado.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Son equivalentes las razones {a}:{b} y {c}:{d}?"

explicacion: |
  El producto cruzado no coincide: no representan la misma relación.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre una razón y una fracción?"
tipo: mc
opciones_explicitas:
  - "La fracción compara una parte con el todo; la razón compara dos cantidades que pueden ser independientes"
  - "No hay ninguna diferencia, son exactamente lo mismo"
  - "Una razón siempre tiene denominador 100"
respuesta: "La fracción compara una parte con el todo; la razón compara dos cantidades que pueden ser independientes"

explicacion: |
  Se escriben igual, pero el significado de cada término es distinto.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  distancia: random(60, 400)
  horas: random(2, 8)

respuesta: distancia / horas
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {distancia} km en {horas} horas. ¿Cuál es la razón entre distancia y tiempo (la velocidad, en km/h)?"

explicacion: |
  La velocidad es una razón: distancia recorrida por cada unidad de
  tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  masa: random(20, 500)
  volumen: random(2, 20)

respuesta: masa / volumen
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene {masa} gramos de masa en {volumen} cm³ de volumen. ¿Cuál es la razón entre masa y volumen (la densidad, en g/cm³)?"

explicacion: |
  La densidad es otra razón de la vida diaria: masa por cada unidad de
  volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  cm_mapa: random(1, 9)
  km_real: cm_mapa * random(10, 100)

respuesta: km_real / cm_mapa
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mapa, {cm_mapa} cm representan {km_real} km reales. ¿Cuántos km representa cada cm (la escala del mapa)?"

explicacion: |
  La escala de un mapa es la razón entre la distancia dibujada y la
  distancia real.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)

respuesta: a * k
tipo: mc
opciones_explicitas:
  - a * k
  - a * k + 1
  - a + k

enunciado: "¿Cuál es el primer término de una razón equivalente a {a}:{b}, con segundo término {b * k}?"

explicacion: |
  Si el segundo término se multiplicó por {k}, el primero también tiene
  que multiplicarse por {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)
  equivalente: a * k
  no_equivalente: equivalente + 1

respuesta: no_equivalente
tipo: mc
opciones_explicitas:
  - equivalente
  - no_equivalente

enunciado: "Con segundo término {b * k}, ¿cuál de estos dos primeros términos NO forma una razón equivalente a {a}:{b}?"

explicacion: |
  Sólo {a} × {k} = {equivalente} mantiene la misma relación.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}:{b} = ___:{b * k} (razones equivalentes)."
respuestas_validas:
  - a * k

explicacion: |
  El término que falta guarda la misma proporción: se multiplica {a} por
  el mismo {k} que multiplicó al segundo término.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  a: divisor_comun * random(2, 9)
  b: divisor_comun * random(2, 9)
  simplificador: mcd(a, b)

restricciones:
  - a != b

respuesta: b / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {a}:{b} al máximo, ¿cuál queda el segundo término?"

explicacion: |
  Se divide también el segundo término por el mismo MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  a: random(1, 20)
  b: a + 1

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}:{b} una razón irreducible (que ya no se puede simplificar más)?"

explicacion: |
  Como {a} y {b} son consecutivos, su MCD es 1: no se pueden simplificar.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "avanzado"
  tags: ["razon", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: vf

enunciado: "¿Es la razón {a}:{b} mayor que la razón {c}:{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}."

explicacion: |
  Se compara igual que fracciones: a/b es mayor que c/d si a×d es mayor
  que b×c.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "problema"]

variables:
  aprobados: random(10, 30)
  desaprobados: random(3, 15)

respuesta: aprobados
tipo: input
tolerancia_abs: 0

enunciado: "En un examen, {aprobados} alumnos aprobaron y {desaprobados} desaprobaron. ¿Cuál es el primer término de la razón aprobados:desaprobados?"

explicacion: |
  Se escribe en el orden que pide el enunciado: primero aprobados,
  después desaprobados.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {c_mostrado}:{d} equivalente a {a}:{b}?"

explicacion: |
  Se verifica con el producto cruzado.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón también puede comparar más de dos cantidades a la vez, como 2:3:5."

explicacion: |
  No siempre son dos términos: una razón puede tener varios, comparando
  todas las cantidades entre sí al mismo tiempo (por ejemplo, para
  repartir algo en varias partes con proporciones distintas).
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  agua: random(2, 5)
  jugo_concentrado: random(1, 3)

respuesta: agua
tipo: input
tolerancia_abs: 0

enunciado: "Una receta usa {agua} partes de agua por cada {jugo_concentrado} parte(s) de jugo concentrado. ¿Cuál es el primer término de esa razón (agua:concentrado)?"

explicacion: |
  Las recetas de cocina suelen expresarse como razones entre ingredientes.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "orden"]

tipo: ordenar
enunciado: "Ordená estas razones de menor a mayor (todas tienen el mismo segundo término)."
opciones_explicitas:
  - "5:8"
  - "1:8"
  - "6:8"
  - "3:8"
respuesta_orden: ["1:8", "3:8", "5:8", "6:8"]

explicacion: |
  Con el mismo segundo término, alcanza con ordenar el primero.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón a:b se puede escribir también como la fracción a/b."

explicacion: |
  Son dos formas distintas de escribir la misma comparación por cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón compara dos cantidades por cociente, y esas cantidades pueden ser de magnitudes distintas (como km y horas)."

explicacion: |
  A diferencia de una fracción, los dos términos de una razón no
  necesitan ser "parte de lo mismo": la velocidad compara distancia con
  tiempo, dos magnitudes distintas.
```

## Sección: continuidad (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(-10, 10)
  punto: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es continua f en x={punto}?"

explicacion: |
  Todos los polinomios son continuos en todos los reales.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  a: random(1, 8)
  b: random(-10, 10)
  punto: random(-8, 8)

respuesta: a * punto ^ 2 + b * punto
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x, continua en todos lados. ¿Cuánto vale f({punto}) (que también es el límite ahí)?"

explicacion: |
  Al ser continua, f({punto}) y el límite en {punto} son el mismo
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["evitable", "verdadero_falso"]

variables:
  a: random(1, 15)

respuesta: falso

tipo: vf

enunciado: "f(x) = (x² − {a ^ 2}) / (x − {a}). ¿Es f continua en x={a}?"

explicacion: |
  f no está definida en x={a} (denominador 0) — no es continua ahí,
  aunque el límite exista.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["evitable"]

variables:
  a: random(1, 20)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x² − {a ^ 2}) / (x − {a}) tiene una discontinuidad evitable en x={a}. ¿Qué valor habría que asignarle a f({a}) para que quedara continua ahí?"

pasos:
  - "El límite en x={a} es 2×{a} = {2 * a} — ese es el valor que 'tapa el agujero'"

explicacion: |
  Redefinir f({a}) como el valor del límite convierte la discontinuidad
  evitable en una función continua.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["evitable"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)

respuesta: r1 - r2
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x² − {r1 + r2}x + {r1 * r2}) / (x − {r1}) tiene una discontinuidad evitable en x={r1}. ¿Qué valor habría que asignarle a f({r1}) para arreglarla?"

pasos:
  - "El límite en x={r1} es {r1}−{r2} = {r1 - r2}"

explicacion: |
  Se factorea el numerador, se cancela el factor común, y se evalúa el
  resultado en x={r1}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 15)
  otro_punto: a + random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = (x² − {a ^ 2}) / (x − {a}). ¿Es f continua en x={otro_punto} (un punto distinto de {a})?"

explicacion: |
  El denominador sólo se anula en x={a} — en cualquier otro punto, f es
  una función racional bien definida y continua.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Evitable (el límite existe, pero no coincide con f(a) o f(a) no está definida)"
tipo: mc
opciones_explicitas:
  - "Evitable (el límite existe, pero no coincide con f(a) o f(a) no está definida)"
  - "No evitable (el límite no existe)"

enunciado: "f(x) = (x²−9)/(x−3). En x=3, el límite existe (vale 6) pero f(3) no está definida. ¿Qué tipo de discontinuidad es?"

explicacion: |
  Se podría "arreglar" definiendo f(3)=6 — por eso es evitable.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "No evitable (el límite no existe)"
tipo: mc
opciones_explicitas:
  - "No evitable (el límite no existe)"
  - "Evitable (el límite existe, pero no coincide con f(a))"

enunciado: "En x=2, el límite por la izquierda de f da 5, y el límite por la derecha da 9. ¿Qué tipo de discontinuidad es?"

explicacion: |
  Como los límites laterales no coinciden, el límite completo no
  existe — no hay ningún valor que "tape el agujero".
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para que f sea continua en x=a, hacen falta tres cosas a la vez: que f(a) esté definida, que el límite exista, y que ese límite coincida con f(a)."

explicacion: |
  Si falta cualquiera de las tres, f es discontinua en a.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si el límite de f en x=a existe, entonces f ya es continua en a, sin necesidad de chequear nada más."

explicacion: |
  Falta comparar ese límite con f(a) — y f(a) tiene que estar definida
  primero. Las dos condiciones adicionales son necesarias.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Cualquier función que tenga una fracción (con x en el denominador) es discontinua en todos los puntos de su dominio."

explicacion: |
  Sólo es discontinua donde el denominador se anula (fuera del
  dominio) — en el resto de los puntos puede ser perfectamente continua.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una discontinuidad evitable se puede 'arreglar' redefiniendo el valor de la función en ese único punto, igualándolo al límite."

explicacion: |
  Es justamente por eso que se llama "evitable" — a diferencia de la no
  evitable, donde no hay ningún valor que sirva.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-15, 15)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es f continua en TODOS los números reales?"

explicacion: |
  Cualquier función lineal es continua en todo su dominio, sin ninguna
  excepción.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  k: random(1, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {k}/x. ¿Es f continua en TODOS los números reales (incluido x=0)?"

explicacion: |
  En x=0, f ni siquiera está definida (denominador 0) — no puede ser
  continua ahí. Es discontinua (no evitable: el límite tampoco existe,
  la función se dispara al infinito).
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 15)
  valor_asignado: uno_de([2, 0, -1]) + 2 * a

respuesta: (valor_asignado == (2 * a))
tipo: vf

enunciado: "Se define f(x) = (x²−{a ^ 2})/(x−{a}) para x≠{a}, y f({a}) = {valor_asignado} (a mano). ¿Queda f continua en x={a} con esa definición?"

explicacion: |
  Queda continua sólo si el valor asignado coincide exactamente con el
  límite, que es 2×{a} = {2 * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(11, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {a} para x < 2, y f(x) = {b} para x ≥ 2. ¿Es f continua en x=2?"

explicacion: |
  El límite por la izquierda ({a}) y por la derecha ({b}) no coinciden
  — el límite en x=2 no existe, así que f no es continua ahí.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Que una función sea 'continua en un intervalo' significa que es continua en cada uno de los puntos de ese intervalo, sin excepción."

explicacion: |
  Basta con que falle en un solo punto del intervalo para que ya no sea
  continua "en todo el intervalo".
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  a: random(2, 20)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 5 / (x − {a}). ¿En qué valor de x es discontinua f?"

explicacion: |
  El único punto problemático es donde el denominador se anula: x={a}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una función se dispara hacia el infinito cerca de un punto (como y=k/x en x=0), la discontinuidad en ese punto es no evitable."

explicacion: |
  No hay ningún valor finito que se le pueda asignar a la función ahí
  para "tapar" ese comportamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 20)
  real: 2 * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = (x²−{a ^ 2})/(x−{a}) tiene discontinuidad evitable en x={a}. ¿Es correcto que el valor que la arregla sea {propuesto}?"

explicacion: |
  El valor correcto es el límite, 2×{a} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El producto de dos funciones continuas en un punto también es continuo en ese punto."

explicacion: |
  Se deriva directo de la propiedad del límite de un producto (ver
  `../limite/`).
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  a: random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}^x. ¿Es f continua en todos los números reales?"

explicacion: |
  Las funciones exponenciales (ver `../familias-exponencial-logaritmica/`)
  son continuas en todo su dominio, que ya es todos los reales.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "g(x) = log₁₀(x). ¿Es g continua en TODOS los números reales (incluidos los negativos y el 0)?"

explicacion: |
  g ni siquiera está DEFINIDA para x≤0 — no puede ser continua ahí. Es
  continua sólo en su dominio, x>0.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una forma intuitiva de pensar la continuidad es: se puede dibujar el gráfico de la función sin levantar el lápiz del papel."

explicacion: |
  No es una definición matemática rigurosa, pero ayuda a visualizar
  dónde aparecen las discontinuidades (los puntos donde sí hay que
  levantar el lápiz).
```

