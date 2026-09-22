# Examen jefe — [PENDIENTE #617]

> Logro #617. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **118 preguntas totales** en 5/5 secciones.

---

## Sección: expresiones-equivalentes (36 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (3 * x + 5 * x) == (8 * x)
tipo: vf

enunciado: "¿Son equivalentes 3x + 5x y 8x? Con x = {x}: 3×{x}+5×{x} = {3*x+5*x}; 8×{x} = {8*x}."

explicacion: |
  Se suman los coeficientes de términos semejantes: 3x + 5x = 8x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (2 * x + 3 * x - x) == (4 * x)
tipo: vf

enunciado: "¿Son equivalentes 2x + 3x − x y 4x? Con x = {x}: 2×{x}+3×{x}−{x} = {2*x+3*x-x}; 4×{x} = {4*x}."

explicacion: |
  Sumando y restando coeficientes: 2 + 3 − 1 = 4.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (x + x + x) == (3 * x)
tipo: vf

enunciado: "¿Son equivalentes x + x + x y 3x? Con x = {x}: {x}+{x}+{x} = {x+x+x}; 3×{x} = {3*x}."

explicacion: |
  Sumar el mismo valor 3 veces es lo mismo que multiplicarlo por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (4 * x - x) == (3 * x)
tipo: vf

enunciado: "¿Son equivalentes 4x − x y 3x? Con x = {x}: 4×{x}−{x} = {4*x-x}; 3×{x} = {3*x}."

explicacion: |
  4x − x es 4x − 1x = 3x (el término "x" solo tiene coeficiente 1).
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (2 * (x + 3)) == (2 * x + 6)
tipo: vf

enunciado: "¿Son equivalentes 2(x + 3) y 2x + 6? Con x = {x}: 2×({x}+3) = {2*(x+3)}; 2×{x}+6 = {2*x+6}."

explicacion: |
  El 2 se distribuye a los dos términos de adentro: 2·x + 2·3 = 2x + 6.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (5 * (x - 2)) == (5 * x - 10)
tipo: vf

enunciado: "¿Son equivalentes 5(x − 2) y 5x − 10? Con x = {x}: 5×({x}−2) = {5*(x-2)}; 5×{x}−10 = {5*x-10}."

explicacion: |
  El 5 distribuye a los dos términos: 5·x − 5·2 = 5x − 10.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (-(x - 3)) == (-x + 3)
tipo: vf

enunciado: "¿Son equivalentes −(x − 3) y −x + 3? Con x = {x}: −({x}−3) = {-(x-3)}; −{x}+3 = {-x+3}."

explicacion: |
  El signo negativo distribuye cambiando el signo de los dos términos:
  −x − (−3) = −x + 3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["asociativa", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (3 * (2 * x)) == (6 * x)
tipo: vf

enunciado: "¿Son equivalentes 3(2x) y 6x? Con x = {x}: 3×(2×{x}) = {3*(2*x)}; 6×{x} = {6*x}."

explicacion: |
  Multiplicar por 3 y después por 2 (o al revés) es lo mismo que
  multiplicar directamente por 6.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["conmutativa", "dos_variables", "verdadero_falso"]

variables:
  x: random(1, 30)
  oy: random(1, 30)

respuesta: (2 * x + 3 * oy) == (3 * oy + 2 * x)
tipo: vf

enunciado: "¿Son equivalentes 2x + 3y y 3y + 2x? Con x = {x}, y = {oy}: {2*x+3*oy} y {3*oy+2*x}."

explicacion: |
  El orden en que se suman dos términos no cambia el resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["identidad", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: (x * 1) == (x)
tipo: vf

enunciado: "¿Son equivalentes x × 1 y x? Con x = {x}: {x*1} y {x}."

explicacion: |
  Multiplicar por 1 no cambia el valor de una expresión.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (3 * x + 5) == (8 * x)
tipo: vf

enunciado: "¿Son equivalentes 3x + 5 y 8x? Con x = {x}: 3×{x}+5 = {3*x+5}; 8×{x} = {8*x}."

explicacion: |
  3x y 5 no son términos semejantes (uno tiene x, el otro no) — no se
  pueden combinar en un solo término.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (2 * (x + 3)) == (2 * x + 3)
tipo: vf

enunciado: "¿Son equivalentes 2(x + 3) y 2x + 3? Con x = {x}: 2×({x}+3) = {2*(x+3)}; 2×{x}+3 = {2*x+3}."

explicacion: |
  Falta distribuir el 2 al 3: la forma correcta es 2x + 6, no 2x + 3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (-(x - 3)) == (-x - 3)
tipo: vf

enunciado: "¿Son equivalentes −(x − 3) y −x − 3? Con x = {x}: −({x}−3) = {-(x-3)}; −{x}−3 = {-x-3}."

explicacion: |
  El signo del segundo término también cambia: −(x−3) = −x+3, no −x−3.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

variables:
  x: random(2, 20)

respuesta: (3 * x * (2 * x)) == (6 * x)
tipo: vf

enunciado: "¿Son equivalentes 3x × 2x y 6x? Con x = {x}: (3×{x})×(2×{x}) = {3*x*(2*x)}; 6×{x} = {6*x}."

explicacion: |
  3x × 2x = 6x² (se multiplican también las x), no 6x — multiplicar
  términos no es lo mismo que sumarlos.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

variables:
  x: random(2, 20)

respuesta: (x + x) == (x ^ 2)
tipo: vf

enunciado: "¿Son equivalentes x + x y x²? Con x = {x}: {x+x} y {x^2}."

explicacion: |
  x + x es 2x (sumar el valor dos veces), no x² (multiplicarlo por sí
  mismo) — son operaciones distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "error_comun", "verdadero_falso"]

variables:
  x: random(2, 30)

respuesta: (2 * (x - 1)) == (2 * x - 1)
tipo: vf

enunciado: "¿Son equivalentes 2(x − 1) y 2x − 1? Con x = {x}: 2×({x}−1) = {2*(x-1)}; 2×{x}−1 = {2*x-1}."

explicacion: |
  La forma correcta es 2x − 2 (el 2 distribuye también al 1), no 2x − 1.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["terminos_semejantes", "error_comun", "verdadero_falso"]

variables:
  x: random(1, 30)

respuesta: ((x + 3) - (x - 3)) == (0)
tipo: vf

enunciado: "¿Son equivalentes (x + 3) − (x − 3) y 0? Con x = {x}: ({x}+3)−({x}−3) = {(x+3)-(x-3)}."

explicacion: |
  (x+3)−(x−3) = x+3−x+3 = 6: las x se cancelan, pero el resultado es la
  constante 6, no 0.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["distributiva", "signos", "error_comun", "verdadero_falso"]

variables:
  x: random(1, 10)

respuesta: (10 - (x - 4)) == (6 - x)
tipo: vf

enunciado: "¿Son equivalentes 10 − (x − 4) y 6 − x? Con x = {x}: 10−({x}−4) = {10-(x-4)}; 6−{x} = {6-x}."

explicacion: |
  10 − (x − 4) = 10 − x + 4 = 14 − x, no 6 − x — el signo del −4 también
  cambia al distribuir el menos de afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "opcion_multiple"]

variables:
  x: random(1, 30)

respuesta: 3 * x + 6
tipo: mc
opciones_explicitas:
  - 3 * x + 6
  - 3 * x + 2
  - x + 6

enunciado: "¿Cuál expresión es equivalente a 3(x + 2), para x = {x}?"

explicacion: |
  3(x+2) = 3x + 6: el 3 distribuye a los dos términos.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 30)

respuesta: 2 * x
tipo: mc
opciones_explicitas:
  - 2 * x
  - 2 * x ^ 2
  - 6 * x

enunciado: "¿Cuál expresión es equivalente a 4x − 2x, para x = {x}?"

explicacion: |
  4x − 2x = 2x (se restan los coeficientes). 2x² confunde restar con
  elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "opcion_multiple"]

variables:
  x: random(3, 20)

respuesta: -2 * x + 5
tipo: mc
opciones_explicitas:
  - -2 * x + 5
  - -2 * x - 5
  - 2 * x - 5

enunciado: "¿Cuál expresión es equivalente a −(2x − 5), para x = {x}?"

explicacion: |
  El menos de afuera cambia el signo de los dos términos: −2x + 5.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 20)

respuesta: 4 * x
tipo: mc
opciones_explicitas:
  - 4 * x
  - x ^ 4
  - 4 * x ^ 2

enunciado: "¿Cuál expresión es equivalente a x + x + x + x, para x = {x}?"

explicacion: |
  Sumar x cuatro veces es 4x. x⁴ y 4x² confunden sumar repetido con
  elevar a una potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 30)

respuesta: 4 * x
tipo: mc
opciones_explicitas:
  - 4 * x
  - 5
  - 4

enunciado: "¿Cuál expresión es equivalente a 5x − x, para x = {x}?"

explicacion: |
  "x" solo vale coeficiente 1, así que 5x − x = 5x − 1x = 4x. No se
  "cancela" la x dejando sólo un número.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["asociativa", "opcion_multiple"]

variables:
  x: random(1, 30)

respuesta: 6 * x
tipo: mc
opciones_explicitas:
  - 6 * x
  - 5 * x
  - 3 * x + 2

enunciado: "¿Cuál expresión es equivalente a 2(3x), para x = {x}?"

explicacion: |
  2(3x) = (2×3)x = 6x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["terminos_semejantes", "dos_variables", "opcion_multiple"]

variables:
  x: random(1, 20)
  oy: random(21, 40)

respuesta: 4 * x + 2 * oy
tipo: mc
opciones_explicitas:
  - 4 * x + 2 * oy
  - 5 * x + 2 * oy
  - 3 * x + 3 * oy

enunciado: "¿Cuál expresión es equivalente a 3x + 2y + x, para x = {x}, y = {oy}?"

explicacion: |
  Los dos términos con x se combinan: 3x + x = 4x. El término con y no
  se toca porque no es semejante.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(1, 30)

respuesta: 2 * x + 5
tipo: mc
opciones_explicitas:
  - 2 * x + 5
  - 2 * x + 6
  - x + 5

enunciado: "¿Cuál expresión es equivalente a (x + 2) + (x + 3), para x = {x}?"

explicacion: |
  Se combinan las x (x+x=2x) y los números sueltos (2+3=5): 2x + 5.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "avanzado"
  tags: ["distributiva", "signos", "opcion_multiple"]

variables:
  x: random(1, 10)

respuesta: 14 - x
tipo: mc
opciones_explicitas:
  - 14 - x
  - 6 - x
  - x - 14

enunciado: "¿Cuál expresión es equivalente a 10 − (x − 4), para x = {x}?"

explicacion: |
  10 − (x − 4) = 10 − x + 4 = 14 − x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "opcion_multiple"]

variables:
  x: random(2, 30)

respuesta: 3 * x
tipo: mc
opciones_explicitas:
  - 3 * x
  - 3 * x ^ 2
  - 5 * x

enunciado: "¿Cuál expresión es equivalente a x + 2x, para x = {x}?"

explicacion: |
  x + 2x = 3x (coeficiente 1 + coeficiente 2). 3x² confunde sumar con
  elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 40)

respuesta: 4 * x + 3 * x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 4x + 3x, si x = {x}?"

explicacion: |
  4x + 3x = 7x — combinar antes de multiplicar ahorra la cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 40)

respuesta: 10 * x - 4 * x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 10x − 4x, si x = {x}?"

explicacion: |
  10x − 4x = 6x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "evaluar"]

variables:
  x: random(1, 30)

respuesta: 2 * (x + 5)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 2(x + 5), si x = {x}?"

pasos:
  - "Distribuir: 2×{x} + 2×5 = {2*x} + 10 = {2*(x+5)}"

explicacion: |
  2(x+5) = 2x + 10.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "evaluar"]

variables:
  x: random(1, 30)

respuesta: 3 * (x - 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 3(x − 2), si x = {x}?"

explicacion: |
  3(x−2) = 3x − 6.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 30)

respuesta: 5 * x + 2 * x - x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 5x + 2x − x, si x = {x}?"

explicacion: |
  5x + 2x − x = 6x.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "intermedio"
  tags: ["distributiva", "signos", "evaluar"]

variables:
  x: random(1, 30)

respuesta: -(x + 4)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale −(x + 4), si x = {x}?"

explicacion: |
  −(x+4) = −x − 4.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["dos_variables", "evaluar"]

variables:
  x: random(1, 30)
  oy: random(1, 30)

respuesta: 2 * x + 3 * oy
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale 2x + 3y, si x = {x} e y = {oy}?"

explicacion: |
  Cada término se evalúa por separado y después se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "expresiones_equivalentes"
  nivel: "basico"
  tags: ["terminos_semejantes", "evaluar"]

variables:
  x: random(1, 40)

respuesta: x + x + x + x + x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale x + x + x + x + x, si x = {x}?"

explicacion: |
  Sumar x cinco veces es lo mismo que 5x.
```

## Sección: divisibilidad/regla-del-2 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 2?"

explicacion: |
  Se mira sólo la última cifra: si es par, el número es divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 2?"

explicacion: |
  Con números más grandes, la regla no cambia: sigue alcanzando con mirar
  la última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(5, 400) * 2
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 2?"

explicacion: |
  Sólo hay que mirar la última cifra de cada opción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(5, 400) * 2 + 1
  otro1: base + 2
  otro2: base - 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 2 (es impar)?"

explicacion: |
  {base} termina en una cifra impar; los otros dos terminan en cifra par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 2. Completá una cifra válida."
respuestas_validas:
  - 0
  - 2
  - 4
  - 6
  - 8

explicacion: |
  Cualquier cifra par sirve como última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que NO ser divisible por 2. Completá una cifra válida."
respuestas_validas:
  - 1
  - 3
  - 5
  - 7
  - 9

explicacion: |
  Cualquier cifra impar hace que el número no sea divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

enunciado: "¿Cómo se le dice a un número que es divisible por 2?"
tipo: mc
opciones_explicitas:
  - "Par"
  - "Impar"
  - "Primo"
respuesta: "Par"

explicacion: |
  Divisible por 2 y "número par" significan exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

enunciado: "¿Cómo se le dice a un número que NO es divisible por 2?"
tipo: mc
opciones_explicitas:
  - "Impar"
  - "Par"
  - "Primo"
respuesta: "Impar"

explicacion: |
  No divisible por 2 y "número impar" significan exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(1, 400) * 2
  b: random(1, 400) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre un número par?"

explicacion: |
  La suma de dos números pares siempre da par: cada uno aporta un múltiplo
  de 2, y la suma de dos múltiplos de 2 sigue siendo múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(1, 400) * 2
  b: random(1, 400) * 2 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {a} + {b} un número par?"

explicacion: |
  Par más impar siempre da impar.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 2 personas, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 2 sólo si el total es divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  d: random(1, 9)
  u: uno_de([0, 2, 4, 6, 8])
  n: d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 2. ¿Cuál es su última cifra?"

explicacion: |
  Como {n} es divisible por 2, su última cifra tiene que ser par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(500, 4000) * 2
  otro1: base + 1
  otro2: base + 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 2?"

explicacion: |
  Con números grandes la regla no cambia: se mira sólo la última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos pares."
opciones_explicitas:
  - "18"
  - "4"
  - "26"
  - "12"
respuesta_orden: ["4", "12", "18", "26"]

explicacion: |
  Los cuatro son pares (terminan en cifra par); acá sólo hace falta
  ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 2 son números pares."

explicacion: |
  La tabla del 2 (2, 4, 6, 8...) es, exactamente, la lista de los números
  divisibles por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2", "verificacion"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 2?"

explicacion: |
  Alcanza con esa única cifra: si es par, {n} es divisible por 2; si es
  impar, no lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(1, 400) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} es par?"

explicacion: |
  {n} se construyó como 2 por otro número, así que termina en cifra par.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "problema"]

variables:
  n: random(10, 100)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "Un colectivo tiene asientos dobles (de a 2). ¿Alcanzan exactamente para {n} pasajeros sin que sobre ningún asiento vacío ni ningún pasajero de pie?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(10, 500) * 2
  b: random(10, 500) * 2 + 1
  c: random(10, 500) * 2

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 2?"

explicacion: |
  Hay que revisar la última cifra de cada uno; sólo una es impar.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si un número es divisible por 2, alcanza con mirar su última cifra; no hace falta mirar el resto del número."

explicacion: |
  Es la ventaja de esta regla: es un atajo que evita hacer la división
  completa.
```

## Sección: divisibilidad/regla-del-3 (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 3?"

explicacion: |
  Se suman todas las cifras de {n}; si esa suma es múltiplo de 3, el
  número también lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 3?"

explicacion: |
  Si la primera suma de cifras da un número grande, se puede volver a
  sumar sus cifras hasta llegar a algo chico.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u

respuesta: c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Sumar todas las cifras es el primer paso de la regla del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: m * 1000 + c * 100 + d * 10 + u

respuesta: m + c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con más cifras el procedimiento es el mismo: sumar todas, sin saltear
  ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma_cifras: c + d + u
  resto: suma_cifras - floor(suma_cifras / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "La suma de las cifras de {n} es {suma_cifras}. ¿Eso alcanza para decir que {n} es divisible por 3?"

explicacion: |
  Alcanza con ver si esa suma es múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(4, 300) * 3
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de 3?"

explicacion: |
  Conviene sumar las cifras de cada opción y ver cuál suma da múltiplo
  de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(4, 300) * 3
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de 3?"

explicacion: |
  {base} sí lo es; {otro} tiene una cifra más que rompe la suma múltiplo
  de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  suma_parcial: c + d
  r: suma_parcial - floor(suma_parcial / 3) * 3
  necesaria: (3 - r) - floor((3 - r) / 3) * 3

tipo: completar
enunciado: "El número tiene {c} centenas, {d} decenas, y falta la cifra de las unidades. Completá una cifra de unidades que haga que el número sea múltiplo de 3."
respuestas_validas:
  - necesaria
  - necesaria + 3
  - necesaria + 6

explicacion: |
  Hay que buscar qué cifra hace que la suma total de las cifras sea
  múltiplo de 3; puede haber más de una respuesta válida (a intervalos
  de 3).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 3 son números divisibles por 3."

explicacion: |
  La tabla del 3 (3, 6, 9, 12...) es, exactamente, la lista de los números
  divisibles por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 3 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 3 sólo si el total es divisible por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  n: d * 10 + u

respuesta: d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con números de 2 cifras, la suma es más rápida de calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  a: random(1, 100) * 3
  b: random(1, 100) * 3

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 3?"

explicacion: |
  La suma de dos múltiplos de 3 sigue siendo múltiplo de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  base: random(500, 4000) * 3
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 3?"

explicacion: |
  Con números grandes hay que sumar todas las cifras, sin saltear ninguna.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: c * 100 + d * 10 + u
  suma1: c + d + u

respuesta: suma1
tipo: input
tolerancia_abs: 0

enunciado: "Al sumar las cifras de {n} se obtiene un número de 1 o 2 cifras. ¿Cuál es esa primera suma?"

explicacion: |
  Si esa primera suma todavía tiene 2 cifras, se le puede volver a sumar
  las cifras para achicarla más.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 3."
opciones_explicitas:
  - "27"
  - "9"
  - "18"
  - "12"
respuesta_orden: ["9", "12", "18", "27"]

explicacion: |
  Los cuatro tienen suma de cifras múltiplo de 3; sólo hace falta
  ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 3, siempre es divisible por 9 también."

explicacion: |
  No es cierto: 12 es divisible por 3 (1+2=3) pero no por 9. La regla del
  9 es más exigente que la del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 3) * 3

respuesta: (resto == 0)
tipo: vf

enunciado: "Un salón tiene mesas para 3 personas cada una. ¿Alcanzan las mesas exactas para sentar a {n} invitados, sin que sobre ni falte ningún lugar?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  a: random(10, 300) * 3
  b: random(10, 300) * 3 + 1
  c: random(10, 300) * 3

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es múltiplo de 3?"

explicacion: |
  Hay que sumar las cifras de cada uno y comparar contra la tabla del 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  n: random(1, 200) * 3

tipo: completar
enunciado: "Completá el próximo múltiplo de 3 después de {n}."
respuestas_validas:
  - n + 3

explicacion: |
  Los múltiplos de 3 van de 3 en 3.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_3", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las reglas del 2, 5 y 10, la regla del 3 no alcanza con mirar sólo la última cifra: hay que sumar todas las cifras del número."

explicacion: |
  Es la primera regla del set clásico que necesita mirar el número
  completo, no sólo el final.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  n: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm + m + c + d + u
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la suma de las cifras de {n}?"

explicacion: |
  Con 5 cifras el procedimiento no cambia: sumar todas, una por una.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_3"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_3"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  n1: c * 100 + d * 10 + u
  n2: c * 100 + u * 10 + d

respuesta: verdadero
tipo: vf

enunciado: "{n1} y {n2} tienen las mismas cifras en distinto orden. ¿Es cierto que los dos son divisibles por 3, o ninguno de los dos, al mismo tiempo?"

explicacion: |
  La suma de las cifras no cambia si se reordenan: por eso, reordenar las
  cifras de un número nunca cambia si es o no divisible por 3.
```

## Sección: divisibilidad/regla-del-4 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Alcanza con mirar el número formado por las últimas dos cifras: si ese
  número es múltiplo de 4, todo el número lo es.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(10, 999)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Con números más grandes la regla no cambia: sólo importan las últimas
  dos cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix

respuesta: suffix
tipo: input
tolerancia_abs: 0

enunciado: "Para aplicar la regla del 4, ¿qué número forman las últimas dos cifras de {n}?"

explicacion: |
  Es el primer paso: aislar las últimas dos cifras como si fueran un
  número aparte.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "Las últimas dos cifras de {n} forman el número {suffix}. ¿Eso alcanza para decir que {n} es divisible por 4?"

explicacion: |
  Alcanza con ver si {suffix} es múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(3, 200) * 4
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 4?"

explicacion: |
  Se comparan las últimas dos cifras de cada opción contra la tabla del 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(3, 200) * 4 + 2
  otro1: random(3, 200) * 4
  otro2: random(3, 200) * 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 4?"

explicacion: |
  Las últimas dos cifras de {base} no forman un múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  d: random(0, 9)
  base_decena: d * 10
  r: base_decena - floor(base_decena / 4) * 4
  necesaria: (4 - r) - floor((4 - r) / 4) * 4

tipo: completar
enunciado: "El número {prefijo}{d}_ (falta la cifra de las unidades) tiene que ser divisible por 4. Completá una cifra válida."
respuestas_validas:
  - necesaria
  - necesaria + 4

explicacion: |
  Hay que buscar qué cifra hace que las últimas dos cifras formen un
  múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 4, también es divisible por 2."

explicacion: |
  Como 4 = 2 × 2, todo múltiplo de 4 es también múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 2, siempre es divisible por 4 también."

explicacion: |
  No es cierto: 6 es divisible por 2 pero no por 4. La regla del 4 es más
  exigente.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 4 son números divisibles por 4."

explicacion: |
  La tabla del 4 (4, 8, 12, 16...) es, exactamente, la lista de los
  números divisibles por 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 4 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 4 sólo si el total es divisible por 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 99)
  n: prefijo * 100

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Termina en 00, que cuenta como múltiplo de 4 (0 es múltiplo de
  cualquier número).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(300, 2000) * 4
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 4?"

explicacion: |
  Con números grandes la regla no cambia: sólo importan las últimas dos
  cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 4."
opciones_explicitas:
  - "24"
  - "8"
  - "16"
  - "12"
respuesta_orden: ["8", "12", "16", "24"]

explicacion: |
  Los cuatro son múltiplos de 4; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  a: random(1, 100) * 4
  b: random(1, 100) * 4

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 4?"

explicacion: |
  La suma de dos múltiplos de 4 sigue siendo múltiplo de 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 4 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  a: random(10, 200) * 4
  b: random(10, 200) * 4 + 2
  c: random(10, 200) * 4

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 4?"

explicacion: |
  Hay que comparar las últimas dos cifras de cada uno contra la tabla del
  4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  n: random(1, 200) * 4

tipo: completar
enunciado: "Completá el próximo múltiplo de 4 después de {n}."
respuestas_validas:
  - n + 4

explicacion: |
  Los múltiplos de 4 van de 4 en 4.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 4 mira dos cifras (no una sola) porque 100 es múltiplo de 4, pero 10 no lo es."

explicacion: |
  Todo lo que esté "de las centenas para arriba" ya es automáticamente
  múltiplo de 4; sólo hace falta chequear el resto.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  n: random(10, 99)
  resto: n - floor(n / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Con un número de 2 cifras, el número completo YA ES sus últimas dos
  cifras.
```

## Sección: divisibilidad/regla-del-5 (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Se mira sólo la última cifra: si es 0 o 5, el número es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Con números más grandes la regla no cambia: sigue alcanzando con la
  última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(5, 400) * 5
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 5?"

explicacion: |
  Sólo hay que mirar si la última cifra es 0 o 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(5, 400) * 5 + 2
  otro1: random(5, 400) * 5
  otro2: random(5, 400) * 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 5?"

explicacion: |
  {base} no termina en 0 ni en 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 5. Completá una cifra válida."
respuestas_validas:
  - 0
  - 5

explicacion: |
  Sólo el 0 y el 5 sirven como última cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que NO ser divisible por 5. Completá una cifra válida."
respuestas_validas:
  - 1
  - 2
  - 3
  - 4
  - 6
  - 7
  - 8
  - 9

explicacion: |
  Cualquier cifra distinta de 0 y 5 hace que el número no sea divisible
  por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Termina en 0, así que es divisible por 5 (y también por 10 y por 2).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10 + 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 5?"

explicacion: |
  Termina en 5, así que es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  u: uno_de([0, 5])
  n: d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 5. ¿Cuál es su última cifra?"

explicacion: |
  Sólo puede ser 0 o 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 5 chicos, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 5 sólo si el total es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  base: random(500, 4000) * 5
  otro1: base + 1
  otro2: base + 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 5?"

explicacion: |
  Con números grandes la regla no cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 5."
opciones_explicitas:
  - "45"
  - "10"
  - "30"
  - "25"
respuesta_orden: ["10", "25", "30", "45"]

explicacion: |
  Los cuatro terminan en 0 o en 5; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 5 son números divisibles por 5."

explicacion: |
  La tabla del 5 (5, 10, 15, 20...) es, exactamente, la lista de los
  números divisibles por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  a: random(1, 100) * 5
  b: random(1, 100) * 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 5?"

explicacion: |
  La suma de dos múltiplos de 5 sigue siendo múltiplo de 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 5?"

explicacion: |
  Alcanza con esa única cifra: sólo si es 0 o 5, {n} es divisible por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  a: random(10, 500) * 5
  b: random(10, 500) * 5 + 2
  c: random(10, 500) * 5

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 5?"

explicacion: |
  Hay que revisar la última cifra de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  d: random(1, 99)
  n: d * 10 + 5

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} es divisible por 5 pero NO por 2?"

explicacion: |
  {n} termina en 5, que es impar: cumple la regla del 5 pero no la del 2.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 5) * 5

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto cuesta ${n}. ¿Es un precio múltiplo de 5?"

explicacion: |
  Depende de si la última cifra del precio es 0 o 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5"]

variables:
  n: random(1, 100) * 5

tipo: completar
enunciado: "Completá el próximo múltiplo de 5 después de {n}."
respuestas_validas:
  - n + 5

explicacion: |
  Los múltiplos de 5 van de 5 en 5.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_del_5"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_5", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si un número es divisible por 5, alcanza con mirar su última cifra."

explicacion: |
  Es el mismo tipo de atajo que la regla del 2: no hace falta la división
  completa.
```

