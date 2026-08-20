# Matemática — Expresiones equivalentes (cuestionario, 36 preguntas VBLang)

> Tema: `A2` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma carpeta.

Tres bloques: verdadero/falso comparando dos expresiones (evaluadas con el
mismo valor sorteado), opción múltiple para elegir la forma equivalente
correcta entre distractores con errores típicos, y evaluación directa de
una expresión ya combinada. En los `vf`/`mc`, el propio evaluador de
VBLang compara los valores — no hace falta reimplementar la comparación a
mano.

---

### 1 — Términos semejantes básicos

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

### 2 — Combinar tres términos

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

### 3 — Suma repetida

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

### 4 — Resta de semejantes

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

### 5 — Distributiva simple

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

### 6 — Distributiva con resta

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

### 7 — Distribuir un signo negativo

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

### 8 — Asociativa del producto

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

### 9 — Conmutativa con dos variables

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

### 10 — Multiplicar por 1

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

### 11 — Trampa: sumar término con variable y término independiente

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

### 12 — Trampa: distribuir a medias

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

### 13 — Trampa: error de signo al distribuir

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

### 14 — Trampa: producto de semejantes no es lo mismo que sumarlos

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

### 15 — Trampa: suma repetida no es potencia

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

### 16 — Trampa: distribuir sin llegar al segundo término

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

### 17 — Trampa: una resta de expresiones da una constante

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

### 18 — Trampa: sacar un paréntesis restando

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

### 19 — Elegir la forma equivalente: distributiva

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

### 20 — Elegir la forma equivalente: resta de semejantes

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

### 21 — Elegir la forma equivalente: signo negativo afuera

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

### 22 — Elegir la forma equivalente: suma repetida

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

### 23 — Elegir la forma equivalente: coeficiente 1 implícito

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

### 24 — Elegir la forma equivalente: producto de producto

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

### 25 — Elegir la forma equivalente: tres términos, dos variables

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

### 26 — Elegir la forma equivalente: suma de dos paréntesis

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

### 27 — Elegir la forma equivalente: resta de un paréntesis

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

### 28 — Elegir la forma equivalente: suma simple vs. potencia

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

### 29 — Evaluar tras combinar semejantes

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

### 30 — Evaluar tras restar semejantes

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

### 31 — Evaluar aplicando distributiva

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

### 32 — Evaluar distributiva con resta

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

### 33 — Evaluar combinando tres términos

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

### 34 — Evaluar un negativo distribuido

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

### 35 — Evaluar con dos variables

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

### 36 — Evaluar suma repetida

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
