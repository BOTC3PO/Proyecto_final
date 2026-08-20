# Matemática — Operaciones con enteros (cuestionario, 28 preguntas VBLang)

> Tema: `NE2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Suma de dos negativos

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: (-a) + (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + (-{b})?"

pasos:
  - "Mismo signo: se suman los valores y se conserva el signo negativo: -({a} + {b}) = {(-a) + (-b)}"

explicacion: |
  Con el mismo signo, se suman los valores absolutos y se conserva el
  signo común.
```

### 2 — Suma de dos positivos (repaso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Con dos positivos, la suma de enteros funciona exactamente igual que la
  suma que ya conocés.
```

### 3 — Suma de signos distintos (positivo pesa más)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(10, 50)
  b: random(1, 9)

respuesta: a + (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + (-{b})?"

pasos:
  - "Signos distintos: se restan los valores ({a} - {b} = {a - b}) y queda el signo del que pesa más ({a}, que es positivo): {a - b}"

explicacion: |
  Cuando los signos son distintos, se restan los valores absolutos (el
  mayor menos el menor) y el resultado queda con el signo del que tenía
  mayor valor absoluto.
```

### 4 — Suma de signos distintos (negativo pesa más)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(10, 50)
  b: random(1, 9)

respuesta: (-a) + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + {b}?"

pasos:
  - "Signos distintos: {a} - {b} = {a - b}, y queda el signo del que pesa más (-{a}, que es negativo): -{a - b}"

explicacion: |
  Acá el negativo tiene mayor valor absoluto, así que el resultado final
  es negativo.
```

### 5 — Suma de signos distintos, valores parejos

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(5, 40)
  b: random(5, 40)

restricciones:
  - a != b

respuesta: (-a) + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + {b}?"

explicacion: |
  Hay que fijarse bien cuál de los dos valores absolutos es mayor antes de
  decidir el signo del resultado.
```

### 6 — Restar un positivo (repaso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 30)
  b: random(1, 30)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Restar un número positivo funciona igual que la resta que ya conocés.
```

### 7 — Restar un negativo (sumar el opuesto)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: a - (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - (-{b})?"

pasos:
  - "Restar un negativo es sumar su opuesto: {a} + {b} = {a + b}"

explicacion: |
  Restar un negativo es lo mismo que sumar el positivo correspondiente.
```

### 8 — Restar un negativo de un negativo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: (-a) - (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) - (-{b})?"

pasos:
  - "Se transforma en suma del opuesto: -{a} + {b}"

explicacion: |
  Restar un negativo siempre suma su opuesto, sin importar el signo del
  primer número.
```

### 9 — Resta que da un resultado negativo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 20)
  b: a + random(1, 30)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Con enteros, restar un número mayor a uno menor da un resultado
  negativo — algo que no era posible con sólo los naturales.
```

### 10 — Multiplicación: positivo por positivo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  Positivo por positivo da positivo, igual que siempre.
```

### 11 — Multiplicación: negativo por positivo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: (-a) * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) × {b}?"

explicacion: |
  Signos distintos: el resultado es negativo.
```

### 12 — Multiplicación: positivo por negativo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: a * (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × (-{b})?"

explicacion: |
  No importa en qué orden aparezca el signo negativo: signos distintos
  siempre dan negativo.
```

### 13 — Multiplicación: negativo por negativo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: (-a) * (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) × (-{b})?"

explicacion: |
  Signos iguales (los dos negativos): el resultado es positivo.
```

### 14 — División: negativo entre positivo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: (-a) / b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ {b}?"

explicacion: |
  Signos distintos: el cociente es negativo.
```

### 15 — División: negativo entre negativo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: (-a) / (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ (-{b})?"

explicacion: |
  Signos iguales (los dos negativos): el cociente es positivo.
```

### 16 — División: positivo entre negativo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: a / (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} ÷ (-{b})?"

explicacion: |
  Signos distintos: el cociente es negativo, aunque el negativo esté en
  el divisor.
```

### 17 — La regla de los signos es la misma para × y ÷

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de los signos (mismo signo = positivo, distinto signo = negativo) es la misma para multiplicar y para dividir."

explicacion: |
  No hay que aprender dos reglas separadas: es una sola, que aplica igual
  a las dos operaciones.
```

### 18 — Mismo signo suma, no multiplica (aclaración conceptual)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La regla \"mismo signo, distinto resultado\" que usás para sumar es la misma regla que usás para multiplicar."

explicacion: |
  Son reglas distintas: al SUMAR con mismo signo se suman los valores; al
  MULTIPLICAR con mismo signo, el resultado da positivo (no se trata de
  sumar ni restar valores absolutos).
```

### 19 — Signos distintos en la resta (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Restar un número negativo es lo mismo que sumar su opuesto (un positivo)."

explicacion: |
  a - (-b) = a + b: dos signos negativos seguidos se cancelan.
```

### 20 — Multiplicar por un negativo cambia el signo

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar un número positivo por un número negativo siempre da como resultado un número negativo."

explicacion: |
  Signos distintos siempre dan resultado negativo.
```

### 21 — Combinar suma y multiplicación con enteros

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + (-b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + (-{b}) × {c}?"

pasos:
  - "Primero la multiplicación (regla de signos): (-{b}) × {c} = {(-b) * c}. Después la suma: {a} + {(-b) * c} = {a + (-b) * c}"

explicacion: |
  Sigue aplicando la jerarquía de operaciones: multiplicación antes que
  suma, con la regla de signos correspondiente.
```

### 22 — Combinar resta y multiplicación con enteros

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a - (-b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - (-{b}) × {c}?"

pasos:
  - "Multiplicación primero: (-{b}) × {c} = {(-b) * c}. Después la resta: {a} - ({(-b) * c}) = {a - (-b) * c}"

explicacion: |
  Primero se resuelve la multiplicación con su regla de signos, y recién
  después la resta.
```

### 23 — Combinar división y resta con enteros

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  b: random(2, 9)
  k: random(2, 9)
  a: b * k
  c: random(1, 20)

respuesta: (-a) / b - c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ {b} - {c}?"

pasos:
  - "División primero: (-{a}) ÷ {b} = {(-a) / b}. Después la resta: {(-a) / b} - {c} = {(-a) / b - c}"

explicacion: |
  La jerarquía de operaciones sigue mandando: división antes que resta.
```

### 24 — Problema: deuda que se paga

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  deuda: random(500, 5000)
  pago: random(100, deuda - 1)

respuesta: (-deuda) + pago
tipo: input
tolerancia_abs: 0

enunciado: "Debés ${deuda} (saldo -{deuda}) y pagás ${pago}. ¿Cuál es tu nuevo saldo?"

explicacion: |
  Pagar una deuda es sumar un positivo a un saldo negativo.
```

### 25 — Problema: temperatura que baja varias veces

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  inicial: random(5, 20)
  baja1: random(1, 10)
  baja2: random(1, 10)

respuesta: inicial - baja1 - baja2
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura estaba en {inicial}°C, bajó {baja1} grados, y después bajó {baja2} grados más. ¿Qué temperatura quedó (puede ser negativa)?"

explicacion: |
  Cada bajada es una resta; si la temperatura cae por debajo de 0, el
  resultado queda negativo.
```

### 26 — Problema: multiplicar una pérdida repetida

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  perdida_por_dia: random(50, 500)
  dias: random(2, 10)

respuesta: (-perdida_por_dia) * dias
tipo: input
tolerancia_abs: 0

enunciado: "Un negocio pierde ${perdida_por_dia} por día durante {dias} días. ¿Cuál es el resultado acumulado (en negativo)?"

explicacion: |
  Repetir una pérdida varios días es multiplicar un negativo por un
  positivo: el resultado da negativo.
```

### 27 — Verificar una operación con enteros (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "verificacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)
  correcto: (-a) * b
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? (-{a}) × {b} = {mostrado}"

explicacion: |
  Un error típico es olvidarse la regla de signos y dar el resultado con
  el signo equivocado.
```

### 28 — Elegir el resultado correcto (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  correcto: (-a) + b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - (-a) - b
  - a + b

enunciado: "¿Cuánto es (-{a}) + {b}?"

explicacion: |
  Hay que aplicar la regla de signos distintos: restar los valores
  absolutos y quedarse con el signo del que pesa más.
```
