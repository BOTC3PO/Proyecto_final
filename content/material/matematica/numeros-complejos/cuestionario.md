# Matemática — Números complejos: unidad imaginaria y operaciones (cuestionario, 30 preguntas VBLang)

> Tema: `A15` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Cada complejo a+bi se representa con dos variables (parte real, parte
imaginaria) — el DSL no tiene tipo complejo nativo, así que cada
pregunta pide una de las dos partes del resultado.

---

### 1 — Suma: parte real

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["suma"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) + ({c} + {d}i). ¿Cuál es la parte real del resultado?"

explicacion: |
  Las partes reales se suman entre sí: {a} + {c}.
```

### 2 — Suma: parte imaginaria

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["suma"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: b + d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) + ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  Las partes imaginarias se suman entre sí: {b} + {d}.
```

### 3 — Resta: parte real

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["resta"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) − ({c} + {d}i). ¿Cuál es la parte real del resultado?"

explicacion: |
  {a} − {c}.
```

### 4 — Resta: parte imaginaria

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["resta"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: b - d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) − ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  {b} − {d}.
```

### 5 — Multiplicación: parte real

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)

respuesta: a * c - b * d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Cuál es la parte real del resultado?"

pasos:
  - "(ac − bd) = ({a}×{c}) − ({b}×{d}) = {a * c} − {b * d} = {a * c - b * d}"

explicacion: |
  La parte real es ac − bd (el −bd viene de que i² = −1).
```

### 6 — Multiplicación: parte imaginaria

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)

respuesta: a * d + b * c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

pasos:
  - "(ad + bc) = ({a}×{d}) + ({b}×{c}) = {a * d} + {b * c} = {a * d + b * c}"

explicacion: |
  La parte imaginaria junta los dos términos cruzados: ad + bc.
```

### 7 — Multiplicación por un real puro

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["multiplicacion"]

variables:
  k: random(2, 10)
  a: random(-10, 10)
  b: random(-10, 10)

respuesta: k * b
tipo: input
tolerancia_abs: 0

enunciado: "{k} × ({a} + {b}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  Multiplicar por un real puro multiplica las dos partes por igual:
  {k}×{b}.
```

### 8 — Potencias de i: exponente múltiplo de 4

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i"]

variables:
  k: random(1, 10) * 4

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} es múltiplo de 4, así que i^{k} = 1 (vuelve al inicio del ciclo).
```

### 9 — Potencias de i: exponente ≡ 1 (mod 4)

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i", "opcion_multiple"]

variables:
  k: random(0, 9) * 4 + 1

respuesta: "i"
tipo: mc
opciones_explicitas:
  - "i"
  - "1"
  - "-1"
  - "-i"

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 1 al dividir por 4, así que i^{k} = i.
```

### 10 — Potencias de i: exponente ≡ 2 (mod 4)

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i"]

variables:
  k: random(0, 9) * 4 + 2

respuesta: -1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 2 al dividir por 4, así que i^{k} = i² = −1.
```

### 11 — Potencias de i: exponente ≡ 3 (mod 4)

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i", "opcion_multiple"]

variables:
  k: random(0, 9) * 4 + 3

respuesta: "-i"
tipo: mc
opciones_explicitas:
  - "-i"
  - "i"
  - "1"
  - "-1"

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 3 al dividir por 4, así que i^{k} = −i.
```

### 12 — Concepto: definición de i

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por definición, i² = −1."

explicacion: |
  Es la única regla nueva que hace falta para operar con números
  complejos.
```

### 13 — Concepto: error de signo con i²

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "i² es igual a 1 (como el cuadrado de cualquier número)."

explicacion: |
  i² = −1, no 1 — es justo lo que hace especial a la unidad imaginaria:
  ningún número real cumple eso.
```

### 14 — Conjugado: identificar

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["conjugado"]

variables:
  a: random(-15, 15)
  b: random(1, 15)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la parte imaginaria del conjugado de {a} + {b}i?"

explicacion: |
  El conjugado cambia el signo de la parte imaginaria: −{b}.
```

### 15 — Producto de un complejo por su conjugado (siempre real)

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["conjugado"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: a ^ 2 + b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({a} − {b}i). ¿Cuánto da (la parte real, ya que la imaginaria da 0)?"

pasos:
  - "(a+bi)(a−bi) = a² − (bi)² = a² − b²×i² = a² + b² = {a ^ 2 + b ^ 2}"

explicacion: |
  Multiplicar un complejo por su conjugado siempre da un número real:
  a² + b².
```

### 16 — Verificar que el producto por el conjugado no tiene parte imaginaria

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["conjugado", "verdadero_falso"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: ((a * (-b) + b * a) == 0)
tipo: vf

enunciado: "({a} + {b}i) × ({a} − {b}i). ¿Da 0 la parte imaginaria del resultado?"

explicacion: |
  El término cruzado se cancela siempre al multiplicar por el conjugado
  — por eso el resultado es un número real puro.
```

### 17 — Raíz de un número negativo

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  n: random(1, 15)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "√(−{n * n}) se escribe como {n}i. Si el radicando es −{n * n}, ¿cuál es el coeficiente de i?"

explicacion: |
  √(−{n * n}) = √({n * n}) × √(−1) = {n} × i.
```

### 18 — Ecuación cuadrática con discriminante negativo: parte real de la raíz

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  b: random(-10, 10) * 2
  m: random(1, 8)

respuesta: -b / 2
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {(b ^ 2) / 4 + m ^ 2} = 0 tiene discriminante negativo. Las soluciones son x = −{b}/2 ± {m}i. ¿Cuál es la parte real de esas soluciones?"

explicacion: |
  Cuando Δ<0, la parte real de las dos soluciones complejas es siempre
  −b/(2a) — el mismo punto donde estaría el vértice de la parábola.
```

### 19 — Ecuación cuadrática con discriminante negativo: parte imaginaria

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  b: random(-10, 10) * 2
  m: random(1, 8)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {(b ^ 2) / 4 + m ^ 2} = 0 tiene discriminante negativo. Las soluciones son x = −{b}/2 ± {m}i. ¿Cuál es el coeficiente de i?"

explicacion: |
  Viene directo de √Δ con Δ negativo: √Δ = {m}i.
```

### 20 — Concepto: las dos raíces complejas son conjugadas

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una ecuación cuadrática con coeficientes reales tiene discriminante negativo, sus dos soluciones complejas son conjugadas entre sí."

explicacion: |
  Vienen de −b/(2a) ± (algo)i — la misma parte real, partes imaginarias
  opuestas: exactamente la definición de conjugados.
```

### 21 — Concepto: los reales son un caso particular de los complejos

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número real es también un número complejo, con parte imaginaria igual a 0."

explicacion: |
  a + 0i es simplemente a — los complejos incluyen a los reales como
  caso particular.
```

### 22 — Concepto: número imaginario puro

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un número de la forma bi (con b distinto de 0, y parte real 0) se llama 'imaginario puro'."

explicacion: |
  Ni real ni con parte real distinta de 0 — sólo la parte imaginaria.
```

### 23 — Multiplicación: caso con imaginario puro

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  b: random(2, 10)
  d: random(2, 10)

respuesta: -(b * d)
tipo: input
tolerancia_abs: 0

enunciado: "({b}i) × ({d}i). ¿Cuánto da (un número real)?"

pasos:
  - "({b}i)({d}i) = {b * d}×i² = {b * d}×(−1) = {-(b * d)}"

explicacion: |
  Multiplicar dos imaginarios puros siempre da un real (negativo, si los
  dos coeficientes son positivos).
```

### 24 — Suma que da un real puro

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["suma", "verdadero_falso"]

variables:
  a: random(-15, 15)
  b: random(1, 15)

respuesta: ((b + (-b)) == 0)
tipo: vf

enunciado: "({a} + {b}i) + ({a} − {b}i). ¿Da 0 la parte imaginaria del resultado (o sea, el resultado es un real puro)?"

explicacion: |
  Sumar un complejo con su conjugado siempre cancela la parte
  imaginaria, dejando 2a como resultado real.
```

### 25 — Verificación con error: multiplicación

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)
  real: a * c - b * d
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Es correcto que la parte real del resultado sea {propuesto}?"

explicacion: |
  La parte real correcta es ac − bd = {real}.
```

### 26 — Concepto: por qué las potencias de i son cíclicas

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular i elevado a un exponente muy grande, alcanza con mirar el resto de dividir el exponente por 4."

explicacion: |
  El patrón 1, i, −1, −i se repite cada 4 potencias — el resto módulo 4
  dice en qué parte del ciclo cae.
```

### 27 — Resta que da un imaginario puro

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["resta", "verdadero_falso"]

variables:
  a: random(-15, 15)
  b: random(1, 15)
  d: random(1, 15)

respuesta: ((a - a) == 0)
tipo: vf

enunciado: "({a} + {b}i) − ({a} + {d}i). ¿Da 0 la parte real del resultado?"

explicacion: |
  Al tener la misma parte real en los dos complejos, se cancela al
  restar, dejando un imaginario puro.
```

### 28 — Concepto: no hay orden (mayor/menor) entre complejos

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Se puede decir que un número complejo es 'mayor' o 'menor' que otro, igual que con los números reales."

explicacion: |
  Los complejos no tienen un orden natural como los reales — no tiene
  sentido preguntar si 3+2i es mayor o menor que 1+5i.
```

### 29 — Multiplicación en cadena: (a+bi) al cuadrado, parte real

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: a ^ 2 - b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i)². ¿Cuál es la parte real del resultado?"

pasos:
  - "(a+bi)² = a² + 2abi + b²i² = a² − b² + 2abi"

explicacion: |
  La parte real es a² − b² (el término i² convierte +b² en −b²).
```

### 30 — Multiplicación en cadena: (a+bi) al cuadrado, parte imaginaria

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: 2 * a * b
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i)². ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  2ab = 2×{a}×{b} = {2 * a * b}.
```
