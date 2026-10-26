# Matemática — Continuidad: función continua vs. discontinua (cuestionario, 24 preguntas VBLang)

> Tema: `A12B` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Un polinomio siempre es continuo

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

### 2 — Valor de f en el punto (para un polinomio, coincide con el límite)

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

### 3 — Discontinuidad evitable: identificar

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

### 4 — Discontinuidad evitable: hallar el valor que la arregla

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

### 5 — Discontinuidad evitable: otro caso

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

### 6 — Función racional: continua fuera del punto problemático

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

### 7 — Identificar tipo de discontinuidad: evitable

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

### 8 — Identificar tipo de discontinuidad: no evitable

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

### 9 — Concepto: las tres condiciones de continuidad

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

### 10 — Concepto: tener límite no alcanza para ser continua

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

### 11 — Concepto: no toda función con fracción es discontinua en todos lados

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

### 12 — Concepto: discontinuidad evitable, se puede arreglar

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

### 13 — Aplicar: continuidad de una función lineal

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

### 14 — Aplicar: continuidad de y=k/x

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

### 15 — Verificar continuidad comparando f(a) con el límite

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

### 16 — Concepto: función a trozos con salto

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

### 17 — Concepto: continuidad en un intervalo

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

### 18 — Identificar el punto de discontinuidad

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

### 19 — Concepto: discontinuidad no evitable por asíntota

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

### 20 — Verificación con error: valor que arregla la discontinuidad

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

### 21 — Concepto: producto de dos funciones continuas

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

### 22 — Aplicar: continuidad de una función exponencial

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

### 23 — Aplicar: continuidad de una función logarítmica

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

### 24 — Concepto: continuidad y gráfico sin levantar el lápiz

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
