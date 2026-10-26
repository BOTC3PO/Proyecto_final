# Matemática — Función: dominio (cuestionario, 24 preguntas VBLang)

> Tema: `FUNC1a` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Valor prohibido: denominador simple

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["denominador"]

variables:
  a: random(1, 20)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 1 / (x − {a}). ¿Para qué valor de x la función NO está definida?"

explicacion: |
  El denominador se anula cuando x = {a}: no se puede dividir por 0.
```

### 2 — Valor prohibido: denominador con suma

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["denominador"]

variables:
  a: random(1, 20)

respuesta: -a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 1 / (x + {a}). ¿Para qué valor de x la función NO está definida?"

explicacion: |
  x + {a} = 0 → x = −{a}.
```

### 3 — Valor prohibido: denominador con coeficiente

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["denominador"]

variables:
  p: random(2, 8)
  sol: random(1, 15)
  q: p * sol

respuesta: q / p
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 1 / ({p}x − {q}). ¿Para qué valor de x la función NO está definida?"

pasos:
  - "{p}x − {q} = 0 → x = {q}/{p} = {q / p}"

explicacion: |
  Hay que resolver la ecuación completa, no sólo mirar el número suelto.
```

### 4 — Valor prohibido: denominador con coeficiente y resta invertida

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["denominador"]

variables:
  p: random(2, 8)
  sol: random(1, 15)
  q: p * sol

respuesta: -q / p
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 1 / ({p}x + {q}). ¿Para qué valor de x la función NO está definida?"

explicacion: |
  {p}x + {q} = 0 → x = −{q}/{p}.
```

### 5 — Pertenece al dominio: racional (caso verdadero)

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["denominador", "verdadero_falso"]

variables:
  a: random(1, 20)
  offset: uno_de([1, -1, 2, -2, 3])
  val: a + offset

respuesta: (val != a)
tipo: vf

enunciado: "f(x) = 1 / (x − {a}). ¿x = {val} pertenece al dominio de f?"

explicacion: |
  Pertenece siempre que x sea distinto de {a} (el único valor excluido).
```

### 6 — Pertenece al dominio: racional (caso en el borde)

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["denominador", "verdadero_falso"]

variables:
  a: random(1, 20)
  val: uno_de([0, 1]) + a - uno_de([0, 1])

respuesta: (val != a)
tipo: vf

enunciado: "f(x) = 1 / (x − {a}). ¿x = {val} pertenece al dominio de f?"

explicacion: |
  Sólo el valor exacto x = {a} queda excluido — cualquier otro,
  incluso muy cercano, sí pertenece.
```

### 7 — Dominio de raíz cuadrada: valor mínimo

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["raiz"]

variables:
  a: random(1, 20)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = √(x − {a}). ¿A partir de qué valor empieza el dominio de f (el mínimo x permitido)?"

explicacion: |
  x − {a} ≥ 0 → x ≥ {a}.
```

### 8 — Dominio de raíz cuadrada: con suma

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["raiz"]

variables:
  a: random(1, 20)

respuesta: -a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = √(x + {a}). ¿A partir de qué valor empieza el dominio de f?"

explicacion: |
  x + {a} ≥ 0 → x ≥ −{a}.
```

### 9 — Dominio de raíz cuadrada: con coeficiente

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["raiz"]

variables:
  p: random(2, 8)
  sol: random(1, 15)
  q: p * sol

respuesta: q / p
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = √({p}x − {q}). ¿A partir de qué valor empieza el dominio de f?"

pasos:
  - "{p}x − {q} ≥ 0 → x ≥ {q}/{p} = {q / p}"

explicacion: |
  Se resuelve la inecuación completa, igual que en `../inecuaciones/`.
```

### 10 — Pertenece al dominio: raíz (caso en el mínimo, incluido)

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["raiz", "verdadero_falso"]

variables:
  a: random(1, 20)

respuesta: (a >= a)
tipo: vf

enunciado: "f(x) = √(x − {a}). ¿x = {a} (el valor exacto del borde) pertenece al dominio de f?"

explicacion: |
  Con raíz, el borde SÍ está incluido (≥, no > estricto): √0 = 0, un
  resultado real válido.
```

### 11 — Pertenece al dominio: raíz (caso general)

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["raiz", "verdadero_falso"]

variables:
  a: random(1, 20)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: a + offset

respuesta: (val >= a)
tipo: vf

enunciado: "f(x) = √(x − {a}). ¿x = {val} pertenece al dominio de f?"

explicacion: |
  Pertenece si x ≥ {a}; si x es menor, el radicando queda negativo.
```

### 12 — Dominio de logaritmo: valor mínimo estricto

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["logaritmo"]

variables:
  a: random(1, 20)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = log(x − {a}). ¿A partir de qué valor de x empieza a estar definida f (sin incluir ese valor)?"

explicacion: |
  x − {a} > 0 → x > {a}, con desigualdad ESTRICTA: a diferencia de la
  raíz, el logaritmo no admite el borde.
```

### 13 — Dominio de logaritmo: con coeficiente

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["logaritmo"]

variables:
  p: random(2, 8)
  sol: random(1, 15)
  q: p * sol

respuesta: q / p
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = log({p}x − {q}). ¿A partir de qué valor de x (sin incluirlo) empieza el dominio de f?"

explicacion: |
  {p}x − {q} > 0 → x > {q}/{p}.
```

### 14 — Pertenece al dominio: logaritmo (borde excluido)

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["logaritmo", "verdadero_falso"]

variables:
  a: random(1, 20)

respuesta: (a > a)
tipo: vf

enunciado: "f(x) = log(x − {a}). ¿x = {a} (el valor exacto del borde) pertenece al dominio de f?"

explicacion: |
  No: log(0) no está definido. A diferencia de la raíz, el logaritmo
  excluye el borde.
```

### 15 — Pertenece al dominio: logaritmo (caso general)

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["logaritmo", "verdadero_falso"]

variables:
  a: random(1, 20)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: a + offset

respuesta: (val > a)
tipo: vf

enunciado: "f(x) = log(x − {a}). ¿x = {val} pertenece al dominio de f?"

explicacion: |
  Pertenece sólo si x es estrictamente mayor que {a}.
```

### 16 — Elegir la descripción correcta del dominio: racional

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["denominador", "opcion_multiple"]

variables:
  a: random(1, 20)

respuesta: concatenar("x ≠ ", a)
tipo: mc
opciones_explicitas:
  - concatenar("x ≠ ", a)
  - concatenar("x ≥ ", a)
  - concatenar("x = ", a)

enunciado: "¿Cuál describe el dominio de f(x) = 1/(x − {a})?"

explicacion: |
  Se excluye un único punto — se escribe con "≠", no con una
  desigualdad.
```

### 17 — Elegir la descripción correcta del dominio: raíz

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["raiz", "opcion_multiple"]

variables:
  a: random(1, 20)

respuesta: concatenar("x ≥ ", a)
tipo: mc
opciones_explicitas:
  - concatenar("x ≥ ", a)
  - concatenar("x > ", a)
  - concatenar("x ≠ ", a)

enunciado: "¿Cuál describe el dominio de f(x) = √(x − {a})?"

explicacion: |
  El borde SÍ está incluido: ≥, no > estricto.
```

### 18 — Elegir la descripción correcta del dominio: logaritmo

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["logaritmo", "opcion_multiple"]

variables:
  a: random(1, 20)

respuesta: concatenar("x > ", a)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", a)
  - concatenar("x ≥ ", a)
  - concatenar("x ≠ ", a)

enunciado: "¿Cuál describe el dominio de f(x) = log(x − {a})?"

explicacion: |
  El borde queda excluido: > estricto, no ≥.
```

### 19 — Concepto: qué es una función

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En una función, cada valor de x tiene que corresponder a exactamente un valor de y."

explicacion: |
  Si un mismo x diera dos resultados distintos, no sería una función.
```

### 20 — Concepto: función polinómica

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de una función polinómica (como f(x) = x² + 3x − 1) son todos los números reales, sin ninguna restricción."

explicacion: |
  No hay denominador, ni raíz par, ni logaritmo — nada que restrinja qué
  valores de x se pueden usar.
```

### 21 — Concepto: raíz de índice impar

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["concepto", "raiz", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La raíz cúbica de un número negativo no está definida, igual que la raíz cuadrada."

explicacion: |
  La restricción de "no negativo" es sólo para raíces de índice PAR. La
  raíz cúbica (índice impar) de un número negativo sí está definida.
```

### 22 — Concepto: por qué se excluye el denominador 0

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor de x queda fuera del dominio si hace que algún denominador de la función se anule."

explicacion: |
  Dividir por 0 no está definido, así que ese x no puede estar en el
  dominio.
```

### 23 — Concepto: logaritmo vs. raíz, el borde

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El dominio de un logaritmo y el de una raíz cuadrada tratan el valor límite (el borde) de la misma manera."

explicacion: |
  La raíz incluye el borde (≥); el logaritmo lo excluye (>) — log(0) no
  está definido, pero √0 sí.
```

### 24 — Valor prohibido: denominador, verificación con error

```
metadata:
  materia: "matematicas"
  tema: "funcion_dominio"
  nivel: "intermedio"
  tags: ["denominador", "verificacion", "verdadero_falso"]

variables:
  p: random(2, 8)
  sol: random(1, 15)
  q: p * sol
  real: q / p
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = 1 / ({p}x − {q}). ¿Es correcto que el valor excluido del dominio sea x = {propuesto}?"

explicacion: |
  El valor correcto es {q}/{p} = {real}.
```
