# Matemática — Jerarquía de operaciones: PEMDAS (cuestionario, 40 preguntas VBLang)

> Tema: `N3B` (Tronco 1 — Numérico). Ver `teoria.md` en esta misma carpeta.

Mismo formato que los cuestionarios anteriores. Acá se aprovecha que el
propio evaluador de VBLang aplica la jerarquía de operaciones real al
calcular `respuesta:` — no hace falta reimplementar PEMDAS a mano, el
mismo motor que arma la expresión es la fuente de verdad del resultado
correcto.

---

### 1 — Suma y multiplicación, sin paréntesis

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} × {c}?"

pasos:
  - "Primero la multiplicación: {b} × {c} = {b * c}. Después la suma: {a} + {b * c} = {a + b * c}"

explicacion: |
  La multiplicación se resuelve antes que la suma, aunque la suma esté
  escrita primero en la expresión.
```

### 2 — Suma y multiplicación, factor primero

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(1, 20)

respuesta: a * b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b} + {c}?"

pasos:
  - "{a} × {b} = {a * b}. {a * b} + {c} = {a * b + c}"

explicacion: |
  Acá la multiplicación ya está primero, así que el orden de lectura
  coincide con el orden de resolución — pero no es por eso que se resuelve
  así, sino porque multiplicar tiene mayor jerarquía que sumar.
```

### 3 — Suma y multiplicación, en contexto

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_multiplicacion", "problema"]

variables:
  entrada: random(2, 9)
  cantidad: random(2, 9)
  extra: random(1, 20)

respuesta: entrada * cantidad + extra
tipo: input
tolerancia_abs: 0

enunciado: "Cada entrada cuesta ${entrada} y compraste {cantidad}. Además pagaste ${extra} de service. ¿Cuánto pagaste en total?"

explicacion: |
  El costo de las entradas (que es una multiplicación) se calcula antes de
  sumarle el service.
```

### 4 — Resta y multiplicación

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "resta_multiplicacion"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  a: b * c + random(1, 20)

respuesta: a - b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} × {c}?"

pasos:
  - "Primero la multiplicación: {b} × {c} = {b * c}. Después la resta: {a} - {b * c} = {a - b * c}"

explicacion: |
  Igual que con la suma, la multiplicación se resuelve antes que la resta.
```

### 5 — Resta y multiplicación, en contexto

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "resta_multiplicacion", "problema"]

variables:
  precio: random(2, 9) * 10
  cantidad: random(2, 9)
  billete: precio * cantidad + random(10, 100)

respuesta: billete - precio * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Pagás con un billete de ${billete} algo que cuesta ${precio} la unidad, comprando {cantidad}. ¿Cuánto te dan de vuelto?"

explicacion: |
  El costo total (una multiplicación) se calcula antes de restarlo del
  billete.
```

### 6 — Multiplicación después de la suma (con paréntesis)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)

respuesta: (a + b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) × {c}?"

pasos:
  - "El paréntesis se resuelve primero: {a} + {b} = {a + b}. Después la multiplicación: {a + b} × {c} = {(a + b) * c}"

explicacion: |
  El paréntesis fuerza a sumar antes de multiplicar, aunque sin él la
  multiplicación tendría prioridad.
```

### 7 — Misma expresión, sin paréntesis

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)

respuesta: a + b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} × {c}?"

explicacion: |
  Sin paréntesis, la multiplicación se resuelve antes que la suma — un
  resultado distinto que si estuviera {a} + {b} entre paréntesis.
```

### 8 — El paréntesis sí cambia el resultado (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  c: random(2, 9)

respuesta: ((a + b) * c == a + b * c)
tipo: vf

enunciado: "¿Es cierto que ({a} + {b}) × {c} da lo mismo que {a} + {b} × {c}?"

explicacion: |
  Salvo casos puntuales, no da lo mismo: el paréntesis cambia qué operación
  se resuelve primero, y eso cambia el resultado final.
```

### 9 — Potencia combinada con suma

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "potencias"]

variables:
  a: random(1, 30)
  b: random(2, 5)

respuesta: a + b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}²?"

pasos:
  - "Primero la potencia: {b}² = {b ^ 2}. Después la suma: {a} + {b ^ 2} = {a + b ^ 2}"

explicacion: |
  Las potencias se resuelven antes que la suma (y antes que la
  multiplicación/división también).
```

### 10 — Potencia combinada con resta

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "potencias"]

variables:
  b: random(2, 5)
  a: (b ^ 2) + random(1, 30)

respuesta: a - b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}²?"

pasos:
  - "Primero la potencia: {b}² = {b ^ 2}. Después la resta: {a} - {b ^ 2} = {a - b ^ 2}"

explicacion: |
  La potencia siempre se calcula antes de aplicarle una suma o resta,
  aunque esté al final de la expresión.
```

### 11 — Multiplicación y división encadenadas, izquierda a derecha

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "multiplicacion_division"]

variables:
  b: random(2, 9)
  k: random(2, 9)
  a: b * k
  c: random(2, 9)

respuesta: a / b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} ÷ {b} × {c}?"

pasos:
  - "Multiplicación y división tienen la misma jerarquía: se resuelve de izquierda a derecha. {a} ÷ {b} = {a / b}. {a / b} × {c} = {(a / b) * c}"

explicacion: |
  No es "primero toda la multiplicación": es de izquierda a derecha, y acá
  la división aparece primero.
```

### 12 — Multiplicación y división, la multiplicación aparece primero

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "multiplicacion_division"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: b

respuesta: a * b / c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b} ÷ {c}?"

pasos:
  - "{a} × {b} = {a * b}. {a * b} ÷ {c} = {(a * b) / c}"

explicacion: |
  Acá la multiplicación aparece primero, así que se resuelve primero —
  pero es por el orden de lectura, no porque multiplicar "gane" siempre a
  dividir.
```

### 13 — Multiplicación y división tienen la misma jerarquía (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "multiplicacion_division"]

respuesta: verdadero
tipo: vf

enunciado: "La multiplicación y la división tienen la misma jerarquía: se resuelven en el orden en que aparecen, de izquierda a derecha."

explicacion: |
  No es que la multiplicación siempre vaya antes que la división: gana la
  que aparece primero leyendo de izquierda a derecha.
```

### 14 — Suma y resta encadenadas, izquierda a derecha

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "suma_resta"]

variables:
  a: random(30, 99)
  b: random(1, 20)
  c: random(1, 20)

respuesta: a - b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} + {c}?"

pasos:
  - "Se resuelve de izquierda a derecha: {a} - {b} = {a - b}. {a - b} + {c} = {a - b + c}"

explicacion: |
  Suma y resta también tienen la misma jerarquía entre sí: se resuelven en
  el orden en que aparecen.
```

### 15 — Agrupar distinto una cadena de suma y resta (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_resta"]

variables:
  a: random(30, 99)
  b: random(1, 20)
  c: random(1, 20)

respuesta: ((a - b + c) == (a - (b + c)))
tipo: vf

enunciado: "¿Es cierto que {a} - {b} + {c} da lo mismo que {a} - ({b} + {c})?"

explicacion: |
  Sin paréntesis, la resta no "agrupa" todo lo que viene después: se
  resuelve de izquierda a derecha, restando {b} y después sumando {c} por
  separado.
```

### 16 — Las cuatro operaciones combinadas (suma, multiplicación, división)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada"]

variables:
  a: random(1, 30)
  b: random(2, 9)
  c: random(2, 9)
  e: random(2, 9)
  d: e * random(2, 9)

respuesta: a + b * c - d / e
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} × {c} - {d} ÷ {e}?"

pasos:
  - "Primero multiplicación y división: {b} × {c} = {b * c}; {d} ÷ {e} = {d / e}. Después suma y resta, de izquierda a derecha: {a} + {b * c} - {d / e} = {a + b * c - d / e}"

explicacion: |
  Se resuelven primero todas las multiplicaciones y divisiones (en el
  orden en que aparecen), y recién después las sumas y restas.
```

### 17 — Las cuatro operaciones combinadas (resta, multiplicación, suma, división)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  a: b * c + random(10, 30)
  e: random(2, 9)
  d: e * random(2, 9)

respuesta: a - b * c + d / e
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} × {c} + {d} ÷ {e}?"

explicacion: |
  Mismo criterio: primero multiplicación y división en el orden en que
  aparecen, después suma y resta en el orden en que aparecen.
```

### 18 — Paréntesis con multiplicación y resta combinadas

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)
  d: random(1, (a + b) * c - 1)

respuesta: (a + b) * c - d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) × {c} - {d}?"

pasos:
  - "Paréntesis primero: {a} + {b} = {a + b}. Multiplicación: {a + b} × {c} = {(a + b) * c}. Resta: {(a + b) * c} - {d} = {(a + b) * c - d}"

explicacion: |
  El orden completo: paréntesis, después multiplicación/división, después
  suma/resta.
```

### 19 — Multiplicación y división, otro orden (verdadero/falso comparativo)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "multiplicacion_division"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)

restricciones:
  - b != c

respuesta: (a / b * c == a / c * b)
tipo: vf

enunciado: "¿Es cierto que {a} ÷ {b} × {c} siempre da el mismo resultado que {a} ÷ {c} × {b}?"

explicacion: |
  Cambiar el orden de un número que divide por uno que multiplica sí puede
  cambiar el resultado — no es lo mismo que sólo reordenar multiplicaciones
  entre sí.
```

### 20 — Elemento correcto tras aplicar PEMDAS (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + b * c
tipo: mc
opciones_explicitas:
  - a + b * c
  - (a + b) * c
  - a * b + c

enunciado: "¿Cuánto es {a} + {b} × {c}, aplicando la jerarquía de operaciones?"

explicacion: |
  El resultado correcto resuelve primero la multiplicación; las otras
  opciones son errores típicos de agrupar mal la expresión.
```

### 21 — Elegir el resultado correcto (resta y multiplicación)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "resta_multiplicacion"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  a: b * c + random(5, 20)

respuesta: a - b * c
tipo: mc
opciones_explicitas:
  - a - b * c
  - (a - b) * c
  - a * b - c

enunciado: "¿Cuánto es {a} - {b} × {c}, aplicando la jerarquía de operaciones?"

explicacion: |
  Se resuelve primero la multiplicación y después la resta; agrupar
  primero la resta (como si hubiera un paréntesis que no está) da un
  resultado distinto.
```

### 22 — Elegir el resultado correcto (las cuatro operaciones)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)
  e: random(2, 9)
  d: e * random(2, 9)

respuesta: a + b * c - d / e
tipo: mc
opciones_explicitas:
  - a + b * c - d / e
  - (a + b) * (c - d) / e
  - (a + b * c - d) / e

enunciado: "¿Cuánto es {a} + {b} × {c} - {d} ÷ {e}, aplicando la jerarquía de operaciones?"

explicacion: |
  Primero se resuelven multiplicación y división, después suma y resta —
  ninguna otra forma de agrupar da el resultado correcto.
```

### 23 — Resta con y sin paréntesis (opción múltiple simple)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  c: random(2, 9)

respuesta: a - b * c
tipo: mc
opciones_explicitas:
  - a - b * c
  - (a - b) * c

enunciado: "¿Cuánto es {a} - {b} × {c} (SIN paréntesis)?"

explicacion: |
  Sin paréntesis, la multiplicación tiene prioridad sobre la resta.
```

### 24 — Resta y multiplicación por partes iguales (paréntesis)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  c: random(2, 9)

respuesta: (a - b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} - {b}) × {c}?"

pasos:
  - "El paréntesis se resuelve primero: {a} - {b} = {a - b}. Multiplicación: {a - b} × {c} = {(a - b) * c}"

explicacion: |
  Acá el paréntesis obliga a restar antes de multiplicar.
```

### 25 — Paréntesis con división exacta

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  c: random(2, 9)
  suma_total: c * random(2, 15)
  a: random(1, suma_total - 1)
  b: suma_total - a

respuesta: (a + b) / c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) ÷ {c}?"

pasos:
  - "Paréntesis primero: {a} + {b} = {a + b}. División: {a + b} ÷ {c} = {(a + b) / c}"

explicacion: |
  El paréntesis se resuelve siempre primero, sin importar qué operación
  venga después.
```

### 26 — Qué significa la 'P' de PEMDAS (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

enunciado: "¿Qué significa la 'P' de PEMDAS?"
tipo: mc
opciones_explicitas:
  - "Paréntesis"
  - "Potencias"
  - "Producto"
respuesta: "Paréntesis"

explicacion: |
  PEMDAS: Paréntesis, Exponentes (potencias), Multiplicación y División,
  Adición (suma) y Sustracción (resta).
```

### 27 — Qué se resuelve primero (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

enunciado: "Sin paréntesis, ¿qué se resuelve primero: la multiplicación o la suma?"
tipo: mc
opciones_explicitas:
  - "La multiplicación"
  - "La suma"
  - "Da lo mismo cuál primero"
respuesta: "La multiplicación"

explicacion: |
  La multiplicación (y la división) tienen mayor jerarquía que la suma (y
  la resta): se resuelven antes.
```

### 28 — Multiplicación y división, misma jerarquía (verdadero/falso, enunciado directo)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "PEMDAS no significa que la multiplicación siempre se resuelve antes que la división: ambas tienen la misma jerarquía y se resuelven en el orden en que aparecen."

explicacion: |
  Es uno de los errores más comunes al leer la sigla PEMDAS: el orden de
  las letras no es un orden estricto entre M y D (ni entre A y S).
```

### 29 — Completar aplicando la jerarquía (suma y multiplicación)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

tipo: completar
enunciado: "Completá el resultado, aplicando la jerarquía de operaciones: {a} + {b} × {c} = ___."
respuestas_validas:
  - a + b * c

explicacion: |
  Se resuelve primero la multiplicación y después la suma.
```

### 30 — Completar aplicando la jerarquía (con paréntesis)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)

tipo: completar
enunciado: "Completá el resultado: ({a} + {b}) × {c} = ___."
respuestas_validas:
  - (a + b) * c

explicacion: |
  El paréntesis obliga a resolver la suma antes que la multiplicación.
```

### 31 — Problema: vuelto con descuento por cantidad

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "problema"]

variables:
  precio: random(2, 9) * 10
  n: random(2, 9)
  billete: precio * n + random(50, 200)

respuesta: billete - n * precio
tipo: input
tolerancia_abs: 0

enunciado: "Comprás {n} cuadernos a ${precio} cada uno y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  Primero hay que calcular cuánto cuestan los {n} cuadernos (una
  multiplicación) antes de restarlo del billete.
```

### 32 — Problema: premios repetidos más un extra

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "problema"]

variables:
  a: random(50, 200)
  n: random(2, 9)
  premio: random(10, 50)

respuesta: a + n * premio
tipo: input
tolerancia_abs: 0

enunciado: "Tenías ${a} y ganaste ${premio} en cada una de {n} rondas de un juego. ¿Cuánto tenés ahora en total?"

explicacion: |
  Se calcula primero lo ganado en todas las rondas (una multiplicación)
  antes de sumarlo a lo que ya tenías.
```

### 33 — Problema: pizzas repartidas en partes iguales, con propina fija

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "problema", "combinada"]

variables:
  personas: random(2, 6)
  precio: random(2, 15)
  n: personas * random(1, 4)
  propina: random(10, 50)

respuesta: n * precio / personas + propina
tipo: input
tolerancia_abs: 0

enunciado: "Entre {personas} amigos compran {n} pizzas a ${precio} cada una, pagando el total en partes iguales, y además cada uno pone ${propina} de propina. ¿Cuánto paga cada amigo en total?"

pasos:
  - "Costo de las pizzas repartido: ({n} × {precio}) ÷ {personas} = {n * precio / personas}. Más la propina: {n * precio / personas} + {propina} = {n * precio / personas + propina}"

explicacion: |
  Se resuelven primero la multiplicación y la división (el costo total y
  la parte de cada uno), y recién después se suma la propina.
```

### 34 — Ordenar expresiones por resultado

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "orden"]

tipo: ordenar
enunciado: "Ordená estas expresiones de menor a mayor resultado (resolviendo cada una con la jerarquía de operaciones)."
opciones_explicitas:
  - "2 + 3 × 4"
  - "(2 + 3) × 4"
  - "10 - 2 × 3"
  - "10 ÷ 2 + 1"
respuesta_orden: ["10 - 2 × 3", "10 ÷ 2 + 1", "2 + 3 × 4", "(2 + 3) × 4"]

explicacion: |
  10-2×3=4, 10÷2+1=6, 2+3×4=14, (2+3)×4=20: hay que aplicar la jerarquía en
  cada una antes de poder ordenarlas.
```

### 35 — Cuadrado de una suma NO es la suma de los cuadrados

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "potencias"]

variables:
  a: random(1, 15)
  b: random(1, 15)

restricciones:
  - a != 0
  - b != 0

respuesta: ((a + b) ^ 2 == a ^ 2 + b ^ 2)
tipo: vf

enunciado: "¿Es cierto que ({a} + {b})² da lo mismo que {a}² + {b}²?"

explicacion: |
  Casi nunca da lo mismo: el paréntesis obliga a sumar primero y elevar al
  cuadrado el resultado completo, no cada término por separado.
```

### 36 — Calcular el cuadrado de una suma, correctamente

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "potencias", "parentesis"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: (a + b) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b})²?"

pasos:
  - "Paréntesis primero: {a} + {b} = {a + b}. Después la potencia: {a + b}² = {(a + b) ^ 2}"

explicacion: |
  El paréntesis se resuelve antes que la potencia se aplique — la potencia
  eleva al cuadrado el resultado completo del paréntesis, no cada número
  por separado.
```

### 37 — División entre suma, con paréntesis necesario

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis", "division"]

variables:
  c: random(2, 9)
  suma_total: c * random(2, 15)
  a: random(1, suma_total - 1)
  b: suma_total - a

respuesta: suma_total / c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) ÷ {c}?"

explicacion: |
  Sin el paréntesis, la división se aplicaría sólo a {b} (por tener mayor
  jerarquía que la suma); con el paréntesis, se aplica a la suma completa.
```

### 38 — Multiplicación y potencia combinadas

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "potencias", "combinada"]

variables:
  a: random(2, 9)
  b: random(2, 5)

respuesta: a * b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}²?"

pasos:
  - "Primero la potencia: {b}² = {b ^ 2}. Después la multiplicación: {a} × {b ^ 2} = {a * b ^ 2}"

explicacion: |
  La potencia tiene mayor jerarquía que la multiplicación: se calcula
  antes.
```

### 39 — Multiplicación y potencia, con paréntesis

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "potencias", "parentesis"]

variables:
  a: random(2, 9)
  b: random(2, 5)

respuesta: (a * b) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} × {b})²?"

pasos:
  - "Paréntesis primero: {a} × {b} = {a * b}. Después la potencia: {a * b}² = {(a * b) ^ 2}"

explicacion: |
  Con el paréntesis, la potencia se aplica al producto completo, no sólo
  al último factor.
```

### 40 — Por qué hace falta PEMDAS (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sin una regla de jerarquía de operaciones, una misma expresión matemática podría leerse de más de una forma y dar resultados distintos."

explicacion: |
  Es la razón de ser de PEMDAS: fijar un único orden posible, para que
  cualquier persona que resuelva la misma cuenta llegue al mismo resultado.
```
