# Examen jefe — [PENDIENTE #616]

> Logro #616. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **150 preguntas totales** en 5/5 secciones.

---

## Sección: jerarquia-operaciones (40 preguntas)

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

## Sección: numeros-enteros (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

enunciado: "¿Qué agrega el conjunto de los números enteros a los naturales?"
tipo: mc
opciones_explicitas:
  - "El cero y los números negativos"
  - "Sólo las fracciones"
  - "Sólo los números muy grandes"
respuesta: "El cero y los números negativos"

explicacion: |
  Los naturales sirven para contar; los enteros agregan el 0 y los
  negativos para representar deudas, temperaturas bajo cero, etc.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "orden"]

variables:
  a: random(1, 50)
  b: -random(1, 50)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Cualquier número positivo es mayor que cualquier número negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: -random(1, 50)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Entre dos negativos, es mayor el que está más cerca de 0 (el que tiene
  menor valor absoluto).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  chico: random(1, 9)
  grande: chico + random(10, 40)

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que -{grande} es mayor que -{chico}?"

explicacion: |
  Aunque {grande} sea un número más grande que {chico}, con el signo
  negativo pasa al revés: -{grande} está más lejos de 0 hacia la
  izquierda, así que es MENOR que -{chico}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(1, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el valor absoluto de {n}?"

explicacion: |
  El valor absoluto de un número positivo es el mismo número.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(1, 999)
  neg: -n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el valor absoluto de {neg}?"

explicacion: |
  El valor absoluto de un número negativo es ese mismo número, sin el
  signo — la distancia al 0 siempre se cuenta positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto de {n}?"

explicacion: |
  El opuesto tiene el mismo valor pero signo contrario.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)
  neg: -n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto de {neg}?"

explicacion: |
  El opuesto de un negativo es el positivo correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: random(1, 50)
  c: -random(1, 50)

respuesta: max(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el mayor entre {a}, {b} y {c}?"

explicacion: |
  Cualquier positivo ya le gana a cualquier negativo; entre los
  negativos, gana el que está más cerca de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: random(1, 50)
  c: -random(1, 50)

respuesta: min(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el menor entre {a}, {b} y {c}?"

explicacion: |
  Entre los negativos, es menor el que está más lejos de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "orden", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número entero negativo es menor que cualquier número entero positivo."

explicacion: |
  En la recta numérica, todos los negativos están a la izquierda del 0, y
  todos los positivos a la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0 no es positivo ni negativo: es el punto de referencia entre los dos."

explicacion: |
  Es un caso especial: ni tiene signo positivo ni negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  a: -random(1, 30)
  b: random(1, 30)

respuesta: abs(a - b)
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué distancia está {a} de {b} en la recta numérica?"

pasos:
  - "La distancia es el valor absoluto de la resta: |{a} - {b}| = {abs(a - b)}"

explicacion: |
  La distancia entre dos puntos siempre es positiva, aunque uno de los dos
  sea negativo: se calcula con el valor absoluto de la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "3"
  - "-7"
  - "0"
  - "-2"
respuesta_orden: ["-7", "-2", "0", "3"]

explicacion: |
  Los negativos van primero (el más lejos de 0 primero), después el 0, y
  después los positivos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  a: -random(1, 50)
  b: random(1, 50)

restricciones:
  - abs(a) != abs(b)

respuesta: (abs(a) < abs(b))
tipo: vf

enunciado: "¿Es {a} el que está más cerca de 0, entre {a} y {b}?"

explicacion: |
  Se compara la distancia al 0 (el valor absoluto) de cada uno, no el
  valor del número en sí.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto del opuesto de {n}?"

explicacion: |
  Aplicar el opuesto dos veces vuelve al número original.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor absoluto de cualquier número entero nunca es negativo."

explicacion: |
  Es una distancia, y las distancias no pueden ser negativas: siempre da
  positivo o cero.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(2, 30)

tipo: completar
enunciado: "¿Qué dos números enteros tienen valor absoluto {n}? (nombrá uno de los dos)"
respuestas_validas:
  - n
  - -n

explicacion: |
  El {n} y el -{n} están a la misma distancia del 0, así que los dos
  tienen valor absoluto {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "problema"]

variables:
  a: -random(1, 15)
  b: -random(1, 15)

restricciones:
  - a != b

respuesta: (a > b)
tipo: vf

enunciado: "En una ciudad hace {a}°C y en otra hace {b}°C. ¿Hace más calor en la primera ciudad?"

explicacion: |
  Con temperaturas bajo cero, "más calor" es el número mayor (el más
  cerca de 0), no el que tiene el número "más grande" adelante.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "problema"]

variables:
  altura: random(100, 3000)
  profundidad: -random(10, 500)

respuesta: (altura > profundidad)
tipo: vf

enunciado: "Una montaña está a {altura} metros sobre el nivel del mar, y un submarino está a {profundidad} metros (bajo el nivel del mar, por eso el signo negativo). ¿Está la montaña más alta que el submarino?"

explicacion: |
  Sobre el nivel del mar es positivo; bajo el nivel del mar es negativo:
  cualquier altura positiva está por encima de cualquier profundidad
  negativa.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "problema"]

variables:
  deuda: -random(100, 5000)

respuesta: abs(deuda)
tipo: input
tolerancia_abs: 0

enunciado: "El saldo de una cuenta es ${deuda} (negativo porque es una deuda). ¿Cuántos pesos debe esa persona?"

explicacion: |
  La deuda, en valor positivo, es el valor absoluto del saldo negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "opuesto", "valor_absoluto"]

variables:
  n: random(1, 500)

respuesta: (abs(n) == abs(-n))
tipo: vf

enunciado: "¿Es cierto que {n} y su opuesto ({-n}) tienen el mismo valor absoluto?"

explicacion: |
  Están a la misma distancia del 0, uno de cada lado.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(2, 50)

respuesta: -n
tipo: mc
opciones_explicitas:
  - -n
  - n
  - n + 1

enunciado: "¿Cuál es el opuesto de {n}?"

explicacion: |
  El opuesto cambia el signo, pero no el valor absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "avanzado"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 20)
  b: random(1, 20)

respuesta: b - a + 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números enteros hay entre {a} y {b}, contando a los dos extremos?"

pasos:
  - "Se cuenta igual que con positivos: {b} - {a} + 1 = {b - a + 1}"

explicacion: |
  La fórmula (B − A + 1) funciona igual con negativos, siempre que se
  reste el menor al mayor respetando el orden real en la recta numérica.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden", "problema"]

tipo: ordenar
enunciado: "Ordená estas temperaturas de más fría a más calurosa."
opciones_explicitas:
  - "-3°C"
  - "-10°C"
  - "5°C"
  - "0°C"
respuesta_orden: ["-10°C", "-3°C", "0°C", "5°C"]

explicacion: |
  Más frío es el número menor; más calor es el número mayor — igual que
  ordenar cualquier lista de enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los números naturales son también números enteros, pero no todos los enteros son naturales."

explicacion: |
  Los enteros incluyen a los naturales y les agregan el 0 y los negativos:
  los naturales son un subconjunto de los enteros.
```

## Sección: divisibilidad/multiplos (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

enunciado: "¿Qué significa que A sea múltiplo de B?"
tipo: mc
opciones_explicitas:
  - "A es el resultado de multiplicar B por algún número entero"
  - "A es más chico que B"
  - "A y B son siempre el mismo número"
respuesta: "A es el resultado de multiplicar B por algún número entero"

explicacion: |
  A es múltiplo de B si existe un entero k tal que A = B × k.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  k: random(2, 20)
  a: b * k + uno_de([0, 0, 1])
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {a} múltiplo de {b}?"

explicacion: |
  A es múltiplo de B si B entra un número exacto de veces en A.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  n: random(2, 8)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el múltiplo número {n} de {b}?"

explicacion: |
  El múltiplo número n de b es b × n.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(3, 25)
  n: random(5, 15)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el múltiplo número {n} de {b}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: b × n.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 9)
  n: random(3, 10)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo pasa cada {b} minutos, empezando en el minuto {b}. ¿En qué minuto pasa por {n}ª vez?"

explicacion: |
  La n-ésima vez que pasa es, exactamente, el múltiplo número n de {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  a: random(1, 100)
  c: a + random(20, 80)

respuesta: floor(c / b) - floor((a - 1) / b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos múltiplos de {b} hay entre {a} y {c}, contando a los dos extremos si lo son?"

explicacion: |
  Se cuentan los múltiplos de {b} hasta {c} y se descartan los que ya
  habían pasado antes de {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(3, 12)
  a: random(1, 50)
  c: a + random(30, 100)

respuesta: floor(c / b) - floor((a - 1) / b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos múltiplos de {b} hay entre {a} y {c}?"

explicacion: |
  Mismo procedimiento, con otro rango y otro número.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  base: b * random(4, 40)
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de {b}?"

explicacion: |
  Sólo uno de los tres es exactamente {b} × algún entero.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  base: b * random(4, 40)
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de {b}?"

explicacion: |
  {base} sí es múltiplo de {b}; el otro número no lo es porque le sobra 1.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "secuencia"]

variables:
  b: random(2, 9)
  n: random(2, 10)

tipo: completar
enunciado: "Completá el próximo múltiplo de {b} después de {b * n}."
respuestas_validas:
  - b * (n + 1)

explicacion: |
  El próximo múltiplo es, simplemente, sumarle {b} otra vez al anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "secuencia"]

variables:
  b: random(2, 9)
  n: random(2, 10)

tipo: completar
enunciado: "Completá el múltiplo que falta: {b * n}, ___, {b * (n + 2)}."
respuestas_validas:
  - b * (n + 1)

explicacion: |
  Entre dos múltiplos consecutivos hay exactamente un salto de {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es múltiplo de sí mismo."

explicacion: |
  n = n × 1, así que cualquier n cumple la definición de múltiplo de sí
  mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es múltiplo de 1."

explicacion: |
  n = 1 × n, para cualquier n.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 99)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el primer múltiplo de {b} (sin contar el 0)?"

explicacion: |
  El primer múltiplo (sin contar el 0) es el propio número, multiplicado
  por 1.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "avanzado"
  tags: ["multiplos", "calculo_mental"]

variables:
  b: random(2, 9)
  n: random(3, 8)

respuesta: b * (n * (n + 1) / 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los primeros {n} múltiplos de {b} (desde {b} hasta {b * n})?"

pasos:
  - "Es {b} × (1+2+...+{n}) = {b} × {n * (n + 1) / 2} = {b * (n * (n + 1) / 2)}"

explicacion: |
  Sumar los primeros n múltiplos de b es lo mismo que multiplicar b por la
  suma de los primeros n números naturales.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  candidato: a * b

respuesta: verdadero
tipo: vf

enunciado: "¿Es {candidato} múltiplo tanto de {a} como de {b}?"

explicacion: |
  El producto de dos números siempre es múltiplo de cada uno de ellos por
  separado.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "avanzado"
  tags: ["multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  base: a * b
  otro1: base + a
  otro2: base + 1

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de {a} y de {b} al mismo tiempo?"

explicacion: |
  {base} es {a} × {b}, así que es múltiplo de los dos a la vez; los otros
  dos rompen al menos una de las dos condiciones.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 12)
  n: random(3, 15)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "Cada caja tiene {b} botellas. Si hay {n} cajas completas, ¿cuántas botellas hay en total?"

explicacion: |
  El total de botellas es siempre un múltiplo de {b}: {b} por la cantidad
  de cajas.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 9)
  k: random(3, 15)
  total: b * k + uno_de([0, 0, 1])
  resto: total - floor(total / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "Las entradas vienen en paquetes de {b}. ¿Se puede comprar exactamente {total} entradas sin que sobre ninguna en el último paquete?"

explicacion: |
  Sólo se puede si {total} es múltiplo de {b} — si no lo es, sobrarían
  algunas sueltas de un paquete incompleto.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "orden"]

tipo: ordenar
enunciado: "Ordená estos múltiplos de 6 de menor a mayor."
opciones_explicitas:
  - "24"
  - "6"
  - "18"
  - "12"
respuesta_orden: ["6", "12", "18", "24"]

explicacion: |
  Son los primeros cuatro múltiplos de 6, en el orden en que aparecen al
  contar de 6 en 6.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0 es múltiplo de cualquier número, porque 0 = B × 0 para cualquier B."

explicacion: |
  Cumple la definición estricta, aunque en los ejercicios de la escuela
  casi nunca se lo cuenta como el "primer" múltiplo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los múltiplos de un número son, exactamente, los resultados de su tabla de multiplicar."

explicacion: |
  La tabla del 4 (4, 8, 12, 16...) es, ni más ni menos, la lista de los
  múltiplos de 4.
```

## Sección: lenguaje-algebraico (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "doble"]

variables:
  n: random(1, 50)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El doble significa multiplicar por 2: 2 × {n} = {2 * n}"

explicacion: |
  "El doble de x" se traduce como 2x.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "triple"]

variables:
  n: random(1, 40)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El triple significa multiplicar por 3: 3 × {n} = {3 * n}"

explicacion: |
  "El triple de x" se traduce como 3x.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "mitad"]

variables:
  n: random(1, 50) * 2

respuesta: n / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "La mitad significa dividir por 2: {n} / 2 = {n / 2}"

explicacion: |
  "La mitad de x" se traduce como x/2.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "cuadrado"]

variables:
  n: random(2, 20)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "El cuadrado significa elevar a la 2: {n}² = {n ^ 2}"

explicacion: |
  "El cuadrado de x" se traduce como x².
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "siguiente"]

variables:
  n: random(1, 99)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El siguiente de un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El siguiente de x" se traduce como x + 1.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "anterior"]

variables:
  n: random(2, 100)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "El anterior a un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El anterior a x" se traduce como x − 1.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "aumentado"]

variables:
  n: random(1, 80)
  a: random(1, 20)

respuesta: n + a
tipo: input
tolerancia_abs: 0

enunciado: "Un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "x aumentado en a" se traduce como x + a.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "disminuido"]

variables:
  n: random(30, 100)
  a: random(1, 20)

respuesta: n - a
tipo: input
tolerancia_abs: 0

enunciado: "Un número disminuido en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "x disminuido en a" se traduce como x − a: el número es el que pierde a,
  no al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["vocabulario", "orden"]

variables:
  a: random(50, 100)
  n: random(1, 40)

respuesta: a - n
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre {a} y un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "La diferencia entre A y B" se traduce como A − B, en ese orden: el
  primero nombrado es el que resta al segundo. Acá {a} resta {n}, no al
  revés.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 3 * n + a
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número, aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero se triplica: 3 × {n} = {3 * n}. Después se suma {a}: {3 * n} + {a} = {3 * n + a}"

explicacion: |
  La coma separa las dos operaciones: primero se triplica el número, y
  recién después se le suma {a} al resultado. Sin la coma ("el triple de
  un número aumentado en {a}") el resultado sería otro.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 3 * (n + a)
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Sin coma, primero se aumenta: {n} + {a} = {n + a}. Después se triplica todo: 3 × {n + a} = {3 * (n + a)}"

explicacion: |
  Sin la coma, "aumentado en {a}" describe al número antes de triplicar:
  primero se suma, y el resultado completo es lo que se triplica. Hace
  falta el paréntesis: 3({n}+{a}), no 3×{n}+{a}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  x: random(1, 50)
  oy: random(1, 50)

respuesta: x + oy
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  "La suma de x e y" se traduce como x + y.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  x: random(2, 20)
  oy: random(2, 20)

respuesta: x * oy
tipo: input
tolerancia_abs: 0

enunciado: "El producto de dos números. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  "El producto de x e y" se traduce como x · y.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["vocabulario", "dos_numeros", "orden"]

variables:
  x: random(50, 100)
  oy: random(1, 49)

respuesta: x - oy
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  El primero nombrado ({x}) resta al segundo ({oy}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "basico"
  tags: ["vocabulario", "dos_numeros"]

variables:
  oy: random(2, 12)
  k: random(2, 12)
  x: oy * k

respuesta: x / oy
tipo: input
tolerancia_abs: 0

enunciado: "El cociente entre {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  "El cociente entre x e y" se traduce como x/y, en ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 40)
  a: random(1, 20)

respuesta: 2 * (n + a)
tipo: input
tolerancia_abs: 0

enunciado: "El doble de la suma de un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "La suma va completa adentro del paréntesis: ({n} + {a}) = {n + a}. Después se duplica: 2 × {n + a} = {2 * (n + a)}"

explicacion: |
  "El doble de [una suma]" triplica — acá duplica — el resultado completo
  de esa suma: 2({n}+{a}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "mitad"]

variables:
  n: random(1, 50) * 2
  a: random(1, 10)

respuesta: n / 2 - a
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de un número, menos {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La coma vuelve a separar: primero la mitad, después se resta {a} al
  resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "cuadrado"]

variables:
  n: random(20, 40)
  a: random(1, 10)

respuesta: (n - a) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de la diferencia entre un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La diferencia va completa adentro del paréntesis antes de elevarla al
  cuadrado: ({n}−{a})², no {n}² − {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 30)
  oy: random(1, 30)

respuesta: 2 * x + 3 * oy
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número, más el triple de otro. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  Cada número lleva su propio multiplicador antes de sumar: 2·{x} + 3·{oy}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 30)
  oy: random(1, 30)

respuesta: 3 * x + 2 * oy
tipo: input
tolerancia_abs: 0

enunciado: "El triple de un número, más el doble de otro. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  Mismos ingredientes que el ejercicio anterior, con los multiplicadores
  cruzados: 3·{x} + 2·{oy}, no 2·{x} + 3·{oy}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "combinacion"]

variables:
  n: random(1, 50)

respuesta: 2 * n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El siguiente del doble de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero el doble: 2 × {n} = {2 * n}. Después el siguiente: {2 * n} + 1 = {2 * n + 1}"

explicacion: |
  Primero se duplica, y el siguiente se calcula sobre ese resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "combinacion"]

variables:
  n: random(1, 50)

respuesta: 2 * (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "El doble del siguiente de un número. Si el número es {n}, ¿cuál es el resultado?"

pasos:
  - "Primero el siguiente: {n} + 1 = {n + 1}. Después el doble: 2 × {n + 1} = {2 * (n + 1)}"

explicacion: |
  Orden opuesto al ejercicio anterior: acá primero se calcula el
  siguiente, y ese resultado completo es el que se duplica.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["orden", "combinacion", "mitad"]

variables:
  n: random(1, 50) * 2 + 1

respuesta: (n - 1) / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad del anterior a un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero el anterior ({n}−1), y de ese resultado se toma la mitad.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["orden", "combinacion", "mitad"]

variables:
  n: random(1, 50) * 2

respuesta: n / 2 - 1
tipo: input
tolerancia_abs: 0

enunciado: "El anterior a la mitad de un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero la mitad ({n}/2), y a ese resultado se le resta 1.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 30)

respuesta: n * (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "El producto de un número por su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "Su siguiente" repite el mismo número, no uno nuevo: {n} × ({n}+1).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 20)

respuesta: n ^ 2 + 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de un número, aumentado en su doble. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "Su doble" usa el mismo número que ya apareció en "cuadrado": {n}² + 2·{n}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(1, 20)

respuesta: n + n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "La suma de un número y su cuadrado. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  {n} + {n}², el mismo número usado dos veces con roles distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(20, 40)
  a: random(1, 10)

respuesta: 3 * (n - a)
tipo: input
tolerancia_abs: 0

enunciado: "El triple de la diferencia entre un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La diferencia va completa adentro del paréntesis antes de triplicar:
  3({n}−{a}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis"]

variables:
  n: random(1, 30)
  a: random(1, 20)

respuesta: 3 * n - a
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el triple de un número y {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Acá "el triple de un número" ya es un resultado armado (3·{n}) antes de
  restarle {a} — no hace falta paréntesis porque la multiplicación ya
  tiene mayor jerarquía que la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "mitad", "parentesis"]

variables:
  x: random(1, 40) * 2
  oy: random(1, 40) * 2

respuesta: (x + oy) / 2
tipo: input
tolerancia_abs: 0

enunciado: "La mitad de la suma de {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  La suma se calcula completa antes de tomar la mitad: ({x}+{oy})/2.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["dos_numeros", "combinacion"]

variables:
  x: random(1, 20)
  oy: random(1, 20)

respuesta: 2 * x * oy
tipo: input
tolerancia_abs: 0

enunciado: "El doble del producto de {x} y {oy}. ¿Cuál es el resultado?"

explicacion: |
  Primero el producto ({x}·{oy}), después se duplica ese resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["dos_numeros", "parentesis"]

variables:
  x: random(1, 30)
  oy: random(1, 30)
  z: uno_de(divisores(x + oy))

respuesta: (x + oy) / z
tipo: input
tolerancia_abs: 0

enunciado: "El cociente entre la suma de {x} y {oy}, y {z}. ¿Cuál es el resultado?"

explicacion: |
  La suma va completa adentro del paréntesis antes de dividir por {z}:
  ({x}+{oy})/{z}.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion", "cuadrado"]

variables:
  n: random(1, 20)

respuesta: (n + (n + 1)) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "El cuadrado de la suma de un número y su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Primero la suma completa ({n} + ({n}+1)), y recién ese resultado se
  eleva al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion"]

variables:
  n: random(2, 20)

respuesta: n ^ 2 - (n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el cuadrado de un número y su siguiente. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  "El cuadrado de un número" ({n}²) resta a "su siguiente" ({n}+1), en
  ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["mismo_numero", "combinacion", "orden"]

variables:
  n: random(2, 20)

respuesta: (n + 1) - n ^ 2

tipo: input
tolerancia_abs: 0

enunciado: "La diferencia entre el siguiente de un número y su cuadrado. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Orden invertido respecto al ejercicio anterior: ahora "el siguiente"
  resta al "cuadrado" — el resultado suele dar negativo, y eso es
  correcto: el cuadrado crece más rápido que el siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "avanzado"
  tags: ["dos_numeros", "combinacion", "mitad"]

variables:
  x: random(1, 30)
  oy: random(1, 30) * 2

respuesta: 2 * x - oy / 2
tipo: input
tolerancia_abs: 0

enunciado: "El doble de un número, disminuido en la mitad de otro. Si son {x} y {oy}, ¿cuál es el resultado?"

explicacion: |
  Cada número lleva su propia operación antes de restar: 2·{x} − {oy}/2.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "opcion_multiple"]

variables:
  n: random(2, 20)
  a: random(2, 15)

respuesta: 3 * n + a
tipo: mc
opciones_explicitas:
  - 3 * n + a
  - 3 * (n + a)
  - 3 * n * a

enunciado: "El triple de un número, aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  La coma indica que primero se triplica y después se suma {a}: 3{n}+{a}.
  3({n}+{a}) sería la traducción de la misma frase SIN la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "parentesis", "opcion_multiple"]

variables:
  n: random(2, 20)
  a: random(2, 15)

respuesta: 3 * (n + a)
tipo: mc
opciones_explicitas:
  - 3 * (n + a)
  - 3 * n + a
  - n + a + 3

enunciado: "El triple de un número aumentado en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Sin coma, "aumentado en {a}" describe al número antes de triplicar: hace
  falta el paréntesis, 3({n}+{a}).
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "opcion_multiple"]

variables:
  a: random(30, 60)
  n: random(1, 25)

respuesta: a - n
tipo: mc
opciones_explicitas:
  - a - n
  - n - a

enunciado: "La diferencia entre {a} y un número. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  El primero nombrado ({a}) resta al segundo ({n}), en ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "lenguaje_algebraico"
  nivel: "intermedio"
  tags: ["orden", "opcion_multiple"]

variables:
  n: random(30, 60)
  a: random(1, 25)

respuesta: n - a
tipo: mc
opciones_explicitas:
  - n - a
  - a - n

enunciado: "Un número disminuido en {a}. Si el número es {n}, ¿cuál es el resultado?"

explicacion: |
  Acá el número es el que pierde {a}, aunque el nombre "{a}" aparezca
  segundo en la frase igual que en el ejercicio anterior — el que resta
  primero cambia según la construcción gramatical ("un número disminuido
  en X" vs. "la diferencia entre X y un número"), no sólo según qué
  palabra aparece primero.
```

## Sección: divisibilidad/divisores (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

enunciado: "¿Qué significa que B sea divisor de A?"
tipo: mc
opciones_explicitas:
  - "A dividido B da resto 0"
  - "B es más grande que A"
  - "B es múltiplo de A"
respuesta: "A dividido B da resto 0"

explicacion: |
  B es divisor de A si la división A ÷ B es exacta (resto 0).
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  b: random(2, 9)
  k: random(2, 20)
  a: b * k + uno_de([0, 0, 1])
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {b} divisor de {a}?"

explicacion: |
  B es divisor de A si A ÷ B no deja resto.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  a: random(20, 200)
  b: random(2, 15)
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {b} divisor de {a}?"

explicacion: |
  Hay que hacer la división y ver si el resto da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: random(2, 40)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n} (contando el 1 y el propio {n})?"

explicacion: |
  Se cuentan todos los números que dividen a {n} exactamente.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  n: random(40, 100)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n}?"

explicacion: |
  Con números más grandes conviene probar sistemáticamente desde el 1 en
  adelante, sin saltear ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  n: random(2, 999)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el divisor más chico de {n} (mayor que 0)?"

explicacion: |
  El 1 es divisor de todos los números, así que siempre es el más chico
  posible.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el divisor más grande de {n}?"

explicacion: |
  Ningún divisor puede ser mayor que el propio número: el más grande
  siempre es él mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  reales: n_de(divs, 2)
  falso_candidato: n + 1

restricciones:
  - largo(divs) >= 4

respuesta: falso_candidato
tipo: mc
opciones_explicitas:
  - primero(reales)
  - ultimo(reales)
  - falso_candidato

enunciado: "¿Cuál de estos tres números NO es divisor de {n}?"

explicacion: |
  Ningún número mayor que {n} puede ser divisor de {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {d} divisor de {a} y también divisor de {b} al mismo tiempo?"

explicacion: |
  Un mismo número puede ser divisor de varios números a la vez: acá {d}
  divide a los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si A es múltiplo de B, entonces B es divisor de A."

explicacion: |
  Son la misma afirmación mirada desde los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 1 es divisor de cualquier número."

explicacion: |
  n ÷ 1 = n, sin resto, para cualquier n.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es divisor de sí mismo."

explicacion: |
  n ÷ n = 1, resto 0, para cualquier n distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  a: random(10, 40)
  b: random(10, 40)

restricciones:
  - largo(divisores(a)) != largo(divisores(b))

respuesta: (largo(divisores(a)) > largo(divisores(b)))
tipo: vf

enunciado: "¿Tiene {a} más divisores que {b}?"

explicacion: |
  Hay que contar los divisores de cada uno y comparar las cantidades.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  n: uno_de([2, 3, 5, 7, 11, 13, 17, 19, 23])

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número {n}?"

explicacion: |
  {n} sólo tiene dos divisores: el 1 y él mismo — esa es, de hecho, la
  definición de número primo.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número 1?"

explicacion: |
  El 1 sólo se divide exactamente por sí mismo: tiene un único divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores", "problema"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  candidato: n_de(divs, 1)

respuesta: verdadero
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre {primero(candidato)} chicos sin que sobre ninguna?"

explicacion: |
  Se puede repartir sin que sobre nada exactamente cuando la cantidad de
  chicos es un divisor del total.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores", "problema"]

variables:
  n: random(20, 60)
  divs: divisores(n)
  no_divisor: n + 1

respuesta: falso
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre {no_divisor} chicos sin que sobre ninguna?"

explicacion: |
  {no_divisor} es mayor que {n}, así que ni siquiera le tocaría una
  figurita entera a cada uno — mucho menos un reparto exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  base: d * random(3, 30)
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números tiene a {d} como divisor?"

explicacion: |
  Sólo uno de los tres es exactamente {d} × algún entero.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "intermedio"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  k: random(2, 9)
  n: d * k

tipo: completar
enunciado: "Nombrá un divisor de {n} que no sea ni 1 ni {n}."
respuestas_validas:
  - d
  - k

explicacion: |
  Cualquier divisor de la lista completa, salvo el 1 y el propio número,
  sirve como respuesta.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "orden"]

tipo: ordenar
enunciado: "Ordená de menor a mayor los divisores de 12."
opciones_explicitas:
  - "6"
  - "1"
  - "3"
  - "2"
respuesta_orden: ["1", "2", "3", "6"]

explicacion: |
  12 tiene 6 divisores en total (1, 2, 3, 4, 6, 12); estos cuatro,
  ordenados de menor a mayor, quedan 1, 2, 3, 6.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "basico"
  tags: ["divisores", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un divisor nunca puede ser mayor que el número que divide."

explicacion: |
  Si B fuera mayor que A, B no podría entrar ni una vez completa dentro
  de A — no sería divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "divisores"
  nivel: "avanzado"
  tags: ["divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "Nombrá un número (distinto de 1) que sea divisor de {a} y de {b} al mismo tiempo."

explicacion: |
  Buscar divisores en común entre dos números es el primer paso para
  calcular el MCD, más adelante en el mapa.
```

