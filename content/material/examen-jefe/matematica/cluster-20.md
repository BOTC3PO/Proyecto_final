# Examen jefe — [PENDIENTE #620]

> Logro #620. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **128 preguntas totales** en 5/5 secciones.

---

## Sección: despejar-formula (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "rectangulo"]

variables:
  h: random(1, 30)
  b_sol: random(1, 30)
  P: 2 * (b_sol + h)

respuesta: P / 2 - h
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un rectángulo es P = 2(b + h). Si P = {P} y h = {h}, ¿cuánto vale b?"

pasos:
  - "Dividir por 2: P/2 = b + h → {P}/2 = {P / 2}"
  - "Restar h: b = {P / 2} − {h} = {P / 2 - h}"

explicacion: |
  Se deshacen las operaciones en orden inverso: primero la división por
  2, después la resta de h.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "rectangulo"]

variables:
  b: random(1, 30)
  h_sol: random(1, 30)
  P: 2 * (b + h_sol)

respuesta: P / 2 - b
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un rectángulo es P = 2(b + h). Si P = {P} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = P/2 − b, el mismo procedimiento con los roles de b y h invertidos.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["area", "rectangulo"]

variables:
  h: random(2, 20)
  b_sol: random(1, 20)
  A: b_sol * h

respuesta: A / h
tipo: input
tolerancia_abs: 0

enunciado: "El área de un rectángulo es A = b · h. Si A = {A} y h = {h}, ¿cuánto vale b?"

explicacion: |
  Como h multiplica a b, se deshace dividiendo: b = A/h.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["area", "rectangulo"]

variables:
  b: random(2, 20)
  h_sol: random(1, 20)
  A: b * h_sol

respuesta: A / b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un rectángulo es A = b · h. Si A = {A} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = A/b.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["area", "triangulo"]

variables:
  h: random(1, 10) * 2
  b_sol: random(1, 20)
  A: (b_sol * h) / 2

respuesta: 2 * A / h
tipo: input
tolerancia_abs: 0

enunciado: "El área de un triángulo es A = (b · h) / 2. Si A = {A} y h = {h}, ¿cuánto vale b?"

pasos:
  - "Multiplicar por 2: 2A = b · h → {2 * A}"
  - "Dividir por h: b = {2 * A} / {h} = {2 * A / h}"

explicacion: |
  El 2 del denominador se despeja multiplicando primero.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["area", "triangulo"]

variables:
  b: random(1, 10) * 2
  h_sol: random(1, 20)
  A: (b * h_sol) / 2

respuesta: 2 * A / b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un triángulo es A = (b · h) / 2. Si A = {A} y b = {b}, ¿cuánto vale h?"

explicacion: |
  h = 2A / b.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["velocidad", "fisica"]

variables:
  v: random(2, 20)
  t: random(2, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si v = {v} y t = {t}, ¿cuánto vale d?"

explicacion: |
  d ya está multiplicando implícitamente: d = v · t.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["velocidad", "fisica", "denominador"]

variables:
  v: random(2, 20)
  t_sol: random(1, 15)
  d: v * t_sol

respuesta: d / v
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si v = {v} y d = {d}, ¿cuánto vale t?"

pasos:
  - "Pasar t multiplicando: v · t = d"
  - "Dividir por v: t = {d} / {v} = {d / v}"

explicacion: |
  Cuando la letra a despejar divide, primero se la pasa multiplicando y
  recién después se despeja — no se invierte la fracción directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["velocidad", "fisica"]

variables:
  t: random(2, 10)
  v_sol: random(2, 20)
  d: v_sol * t

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "v = d / t. Si d = {d} y t = {t}, ¿cuánto vale v?"

explicacion: |
  v ya está despejada en la fórmula original: v = d/t.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["densidad", "fisica"]

variables:
  dens: random(2, 10)
  V: random(2, 15)

respuesta: dens * V
tipo: input
tolerancia_abs: 0

enunciado: "d = m / V. Si d = {dens} y V = {V}, ¿cuánto vale m?"

explicacion: |
  m = d · V.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["densidad", "fisica", "denominador"]

variables:
  dens: random(2, 10)
  V_sol: random(2, 15)
  m: dens * V_sol

respuesta: m / dens
tipo: input
tolerancia_abs: 0

enunciado: "d = m / V. Si d = {dens} y m = {m}, ¿cuánto vale V?"

pasos:
  - "Pasar V multiplicando: d · V = m"
  - "Dividir por d: V = {m} / {dens} = {m / dens}"

explicacion: |
  Mismo caso que despejar t en v = d/t: la letra divide, así que primero
  pasa multiplicando.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  i: random(2, 10)
  t: random(2, 8)
  C_sol: random(1, 20)
  I: C_sol * i * t

respuesta: I / (i * t)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, i = {i} y t = {t}, ¿cuánto vale C?"

pasos:
  - "Dividir por i y por t (las dos letras que multiplican): C = {I} / ({i}×{t}) = {I / (i * t)}"

explicacion: |
  Cuando hay dos letras multiplicando además de la que se despeja, hay
  que dividir por las dos — no sólo por una de ellas.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  C: random(2, 20)
  t: random(2, 8)
  i_sol: random(1, 10)
  I: C * i_sol * t

respuesta: I / (C * t)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, C = {C} y t = {t}, ¿cuánto vale i?"

explicacion: |
  i = I / (C · t).
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["interes", "tres_letras"]

variables:
  C: random(2, 20)
  i: random(2, 10)
  t_sol: random(1, 8)
  I: C * i * t_sol

respuesta: I / (C * i)
tipo: input
tolerancia_abs: 0

enunciado: "I = C · i · t. Si I = {I}, C = {C} e i = {i}, ¿cuánto vale t?"

explicacion: |
  t = I / (C · i).
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["problema", "dos_pasos"]

variables:
  precio: random(2, 15)
  envio: random(1, 20)
  cant_sol: random(1, 20)
  T: precio * cant_sol + envio

respuesta: (T - envio) / precio
tipo: input
tolerancia_abs: 0

enunciado: "El costo total es T = c·p + e (c: cantidad, p: precio unitario, e: envío). Si T = {T}, p = {precio}, e = {envio}, ¿cuánto vale c?"

explicacion: |
  Mismo procedimiento que a·x + b = c: restar el envío, dividir por el
  precio unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["problema", "dos_pasos"]

variables:
  precio: random(2, 15)
  cant: random(1, 20)
  envio_sol: random(1, 20)
  T: precio * cant + envio_sol

respuesta: T - precio * cant
tipo: input
tolerancia_abs: 0

enunciado: "T = c·p + e. Si T = {T}, c = {cant} y p = {precio}, ¿cuánto vale e?"

explicacion: |
  e = T − c·p.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["problema", "dos_pasos"]

variables:
  cant: random(1, 20)
  envio: random(1, 20)
  precio_sol: random(2, 15)
  T: cant * precio_sol + envio

respuesta: (T - envio) / cant
tipo: input
tolerancia_abs: 0

enunciado: "T = c·p + e. Si T = {T}, c = {cant} y e = {envio}, ¿cuánto vale p?"

explicacion: |
  p = (T − e) / c.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["perimetro", "una_letra"]

variables:
  l_sol: random(1, 30)
  P: 3 * l_sol

respuesta: P / 3
tipo: input
tolerancia_abs: 0

enunciado: "El perímetro de un triángulo equilátero es P = 3l. Si P = {P}, ¿cuánto vale l?"

explicacion: |
  l = P/3.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["area", "trapecio", "parentesis"]

variables:
  b: random(1, 15)
  h: random(1, 10) * 2
  B_sol: random(1, 20)
  A: ((B_sol + b) * h) / 2

respuesta: 2 * A / h - b
tipo: input
tolerancia_abs: 0

enunciado: "El área de un trapecio es A = ((B + b)·h) / 2. Si A = {A}, b = {b} y h = {h}, ¿cuánto vale B (la base mayor)?"

pasos:
  - "Multiplicar por 2 y dividir por h: B + b = 2A/h = {2 * A / h}"
  - "Restar b: B = {2 * A / h} − {b} = {2 * A / h - b}"

explicacion: |
  B queda sola restando b del resultado — no dividiendo por (h − b), que
  sería un error de paréntesis.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["area", "trapecio", "parentesis"]

variables:
  B: random(10, 25)
  b: random(1, 9)
  h_sol: random(1, 10) * 2
  A: ((B + b) * h_sol) / 2

respuesta: 2 * A / (B + b)
tipo: input
tolerancia_abs: 0

enunciado: "A = ((B + b)·h) / 2. Si A = {A}, B = {B} y b = {b}, ¿cuánto vale h?"

pasos:
  - "Multiplicar por 2: 2A = (B + b)·h"
  - "Dividir por (B + b): h = {2 * A} / {B + b} = {2 * A / (B + b)}"

explicacion: |
  (B + b) se trata como un solo bloque al dividir, sin separarlo.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al despejar h de A = b · h, se obtiene h = A / b."

explicacion: |
  h multiplica a b para dar A, así que se despeja dividiendo: h = A/b.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar b de P = 2(b + h), se obtiene b = P/2 + h."

explicacion: |
  La forma correcta es b = P/2 − h (se resta h, no se suma) — error
  típico de cambiar el signo al mover un término.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "error_comun", "denominador", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar t de v = d/t, se obtiene t = v/d."

explicacion: |
  La forma correcta es t = d/v. Invertir directamente sin pasar t
  multiplicando primero da vuelta el resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al despejar m de d = m/V, se obtiene m = d · V."

explicacion: |
  m es la que divide por V para dar d, así que se despeja multiplicando:
  m = d·V.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al despejar C de I = C · i · t, se obtiene C = I · i · t."

explicacion: |
  La forma correcta es C = I / (i·t): hay que dividir por las dos letras
  que multiplican, no multiplicarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "numerico", "verdadero_falso"]

variables:
  b: random(2, 20)
  h: random(2, 20)
  A: b * h
  propuesta: uno_de([A / b, A * b])

respuesta: (propuesta == h)
tipo: vf

enunciado: "El área de un rectángulo es A = {A} y su base es b = {b}. ¿Es correcto que la altura sea h = {propuesta}?"

explicacion: |
  La altura correcta es A/b — si la opción mostrada usa A·b en cambio,
  es el error de multiplicar en vez de dividir.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "intermedio"
  tags: ["verificacion", "numerico", "verdadero_falso"]

variables:
  b: random(1, 30)
  h: random(1, 30)
  P: 2 * (b + h)
  propuesta: uno_de([P / 2 - h, P / 2 + h])

respuesta: (propuesta == b)
tipo: vf

enunciado: "El perímetro de un rectángulo es P = {P} y su altura es h = {h}. ¿Es correcto que la base sea b = {propuesta}?"

explicacion: |
  La base correcta es P/2 − h — sumar h en vez de restarlo es el error
  típico de este despeje.
```

```
metadata:
  materia: "matematicas"
  tema: "despejar_formula"
  nivel: "avanzado"
  tags: ["verificacion", "numerico", "denominador", "verdadero_falso"]

variables:
  v: random(2, 20)
  t: random(2, 10)
  d: v * t
  propuesta: uno_de([d / v, d * v])

respuesta: (propuesta == t)
tipo: vf

enunciado: "v = d/t. Si v = {v} y d = {d}, ¿es correcto que t = {propuesta}?"

explicacion: |
  El tiempo correcto es d/v — multiplicar en vez de dividir es el error
  típico cuando la letra despejada estaba en el denominador.
```

## Sección: funcion-dominio (24 preguntas)

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

## Sección: funcion-imagen (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["lineal", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es la imagen de f todos los números reales?"

explicacion: |
  Cualquier función lineal no constante (m ≠ 0) tiene como imagen todos
  los reales.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["constante"]

variables:
  k: random(1, 30)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {k} para todo x. ¿Cuál es el único valor de la imagen de f?"

explicacion: |
  Una función constante siempre devuelve el mismo valor: {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x − {h})² + {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El vértice está en ({h}, {k}), y como abre hacia arriba, {k} es el
  mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica"]

variables:
  h: random(-15, 15)
  k: random(-15, 15)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x + {h})² − {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El vértice está en (−{h}, −{k}) — el mínimo de la imagen es −{k}, el
  mismo número que ya está restando en la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = −(x − {h})² + {k}. ¿Cuál es el valor máximo de la imagen de f?"

explicacion: |
  El signo negativo adelante hace que la parábola abra hacia abajo: el
  vértice ({h}, {k}) es ahora un máximo, no un mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos"]

variables:
  h: random(-15, 15)
  k: random(-15, 15)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = −(x + {h})² + {k}. ¿Cuál es el valor máximo de la imagen de f?"

explicacion: |
  Vértice en (−{h}, {k}), y como abre hacia abajo, {k} es el máximo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = |x − {h}| + {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El valor absoluto nunca da negativo, así que el mínimo se alcanza
  cuando |x−{h}| = 0, dando f = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto"]

variables:
  h: random(-15, 15)
  k: random(-15, 15)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = |x + {h}| + {k}. ¿Cuál es el valor mínimo de la imagen de f?"

explicacion: |
  El mínimo se alcanza en x = −{h}, dando f = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: k + offset

respuesta: (val >= k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  Pertenece si y ≥ {k} (el mínimo del vértice).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: (k >= k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿y = {k} (el valor exacto del vértice) pertenece a la imagen de f?"

explicacion: |
  Sí: se alcanza justo en x = {h}, así que el borde está incluido.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: k + offset

respuesta: (val <= k)
tipo: vf

enunciado: "f(x) = −(x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  Con la parábola hacia abajo, pertenece si y ≤ {k} (el máximo).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  offset: uno_de([-5, -2, -1, 1, 3, 5])
  val: k + offset

respuesta: (val >= k)
tipo: vf

enunciado: "f(x) = |x − {h}| + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  El valor absoluto nunca baja de su vértice: pertenece si y ≥ {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-5, 15)
  offset: random(1, 10)
  val: k - offset

respuesta: (val >= k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  {val} está por debajo del mínimo {k}, así que no pertenece a la
  imagen — la parábola nunca baja de su vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-5, 15)
  offset: random(1, 10)
  val: k + offset

respuesta: (val <= k)
tipo: vf

enunciado: "f(x) = −(x − {h})² + {k}. ¿y = {val} pertenece a la imagen de f?"

explicacion: |
  {val} está por encima del máximo {k}, así que no pertenece — la
  parábola hacia abajo nunca supera su vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "opcion_multiple"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: concatenar("y ≥ ", k)
tipo: mc
opciones_explicitas:
  - concatenar("y ≥ ", k)
  - concatenar("y ≤ ", k)
  - concatenar("y ≠ ", k)

enunciado: "¿Cuál describe la imagen de f(x) = (x − {h})² + {k}?"

explicacion: |
  Abre hacia arriba (sin signo negativo adelante): imagen y ≥ {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["cuadratica", "signos", "opcion_multiple"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: concatenar("y ≤ ", k)
tipo: mc
opciones_explicitas:
  - concatenar("y ≤ ", k)
  - concatenar("y ≥ ", k)
  - concatenar("y ≠ ", k)

enunciado: "¿Cuál describe la imagen de f(x) = −(x − {h})² + {k}?"

explicacion: |
  El signo negativo da vuelta la parábola: imagen y ≤ {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["valor_absoluto", "opcion_multiple"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)

respuesta: concatenar("y ≥ ", k)
tipo: mc
opciones_explicitas:
  - concatenar("y ≥ ", k)
  - concatenar("y ≤ ", k)
  - concatenar("y = ", k)

enunciado: "¿Cuál describe la imagen de f(x) = |x − {h}| + {k}?"

explicacion: |
  El valor absoluto siempre da ≥ 0, así que f nunca baja de {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El dominio y la imagen de una función son exactamente la misma idea, sólo con otro nombre."

explicacion: |
  El dominio restringe los valores de ENTRADA (x); la imagen describe los
  valores de SALIDA (y) que la función realmente produce.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["concepto", "cuadratica", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El vértice de una parábola marca el valor mínimo o máximo de su imagen."

explicacion: |
  Según hacia dónde abra la parábola, el vértice es el punto más bajo o
  el más alto que alcanza la función.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "basico"
  tags: ["concepto", "valor_absoluto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El valor absoluto de cualquier número nunca es negativo."

explicacion: |
  Por eso la imagen de f(x) = |x − h| + k siempre tiene un mínimo (k), y
  nunca un máximo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La imagen de cualquier función de la forma f(x) = mx + b siempre son todos los reales, sin excepción."

explicacion: |
  Hay una excepción: si m = 0, la función es constante, y su imagen es
  un único valor, no todos los reales.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Da lo mismo escribir 'y ≥ k' o 'y ≤ k' para describir la imagen de una parábola, sea cual sea el signo que tenga adelante."

explicacion: |
  No da lo mismo: si abre hacia abajo (signo negativo) hay que usar
  ≤; usar ≥ ahí sería un error de signo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "f(x) = (x − {h})² + {k}. ¿Es correcto que el mínimo de la imagen sea {propuesto}?"

explicacion: |
  El mínimo correcto es {k}, el valor del vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_imagen"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  h: random(-10, 10)
  k: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "f(x) = −(x − {h})² + {k}. ¿Es correcto que el máximo de la imagen sea {propuesto}?"

explicacion: |
  El máximo correcto es {k}, el valor del vértice.
```

## Sección: inecuaciones (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "identidad", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)

respuesta: "Identidad"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}(x + {b}) = {a}x + {a * b} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Distribuyendo el lado izquierdo se obtiene exactamente el lado
  derecho — es verdadera para cualquier x, así que es una identidad.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "identidad", "opcion_multiple"]

variables:
  a: random(2, 10)
  c: random(2, 10)
  b: random(1, 20)

respuesta: "Identidad"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} + {c}x = {a + c}x + {b} es una identidad, una ecuación o una inecuación?"

explicacion: |
  El lado izquierdo, al combinar los términos con x, da exactamente el
  lado derecho — verdadera para cualquier x.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "ecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: "Ecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} = {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Tiene "=" y los dos lados no son la misma expresión — se cumple sólo
  para un valor puntual de x, así que es una ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "ecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(1, 30)

respuesta: "Ecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x − {b} = {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Tiene una única solución puntual — es una ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "inecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: "Inecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} < {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Usa un símbolo de desigualdad en vez de "=" — es una inecuación, y su
  solución es un rango de valores, no uno solo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "inecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(1, 30)

respuesta: "Inecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x − {b} > {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Cualquier símbolo <, >, ≤ o ≥ marca una inecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) < c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} < {c}?"

explicacion: |
  Se reemplaza x por {val} y se compara: {a}×{val}+{b} = {a * val + b},
  contra {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) > c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} > {c}?"

explicacion: |
  Se reemplaza x por {val} en {a}x + {b} y se compara el resultado con
  {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) < c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} < {c}?"

explicacion: |
  Con coeficiente negativo, aumentar x hace que {a}x + {b} disminuya —
  al revés que con coeficiente positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) > c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} > {c}?"

explicacion: |
  Reemplazar x por {val} y comparar {a}×{val}+{b} con {c}, con cuidado
  porque {a} es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) <= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≤ {c}?"

explicacion: |
  Con ≤, el propio valor frontera (offset 0) también es solución — a
  diferencia de < estricto.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) >= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≥ {c}?"

explicacion: |
  Con coeficiente negativo, el conjunto solución de "≥" queda del lado
  contrario al que daría un coeficiente positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) >= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≥ {c}?"

explicacion: |
  Se reemplaza x por {val} y se compara con {c} usando ≥.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) <= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≤ {c}?"

explicacion: |
  Mismo procedimiento de siempre: reemplazar y comparar, con {a}
  negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} < {c}. ¿Cuál es el valor frontera de x (el límite del conjunto solución)?"

pasos:
  - "Restar {b}: {a}x < {c - b}"
  - "Dividir por {a}: x < {(c - b) / a}"

explicacion: |
  El valor frontera se calcula igual que resolver la ecuación asociada
  {a}x + {b} = {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} > {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  x = ({c} − {b}) / {a}, el mismo cálculo que para "<".
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["frontera", "signos"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} < {c}. ¿Cuál es el valor frontera de x?"

pasos:
  - "Restar {b}: {a}x < {c - b}"
  - "Dividir por {a} (negativo): x = {c - b} / {a} = {(c - b) / a}"

explicacion: |
  El valor frontera se calcula igual sea {a} positivo o negativo — lo
  único que cambia con el signo es la dirección de la desigualdad, no el
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["frontera", "signos"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} > {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} < {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  Primero se suma {b} a los dos lados, después se divide por {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} ≤ {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  El procedimiento para hallar el valor frontera no cambia entre < y ≤ —
  sólo cambia si ese valor frontera está incluido o no en la solución.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una inecuación, si se multiplican (o dividen) los dos lados por un número negativo, la desigualdad se da vuelta."

explicacion: |
  Es la única diferencia real respecto a resolver una ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Una identidad es verdadera sólo para un valor puntual de x, igual que una ecuación."

explicacion: |
  Al revés: una identidad es verdadera para CUALQUIER valor de x. La que
  tiene un valor puntual como solución es la ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto solución de una inecuación suele ser un rango de infinitos valores, no un único número."

explicacion: |
  Por eso se escribe como "x < 3" y no como "x = 3".
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si al dividir los dos lados de una inecuación por un número negativo no se da vuelta la desigualdad, el conjunto solución puede quedar completamente al revés."

explicacion: |
  El resultado incluiría valores que no cumplen la inecuación original, y
  excluiría valores que sí la cumplen.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["conjunto_solucion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x < ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x < ", sol)
  - concatenar("x > ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} < {c}?"

explicacion: |
  Coeficiente positivo: la desigualdad no se da vuelta al despejar.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["conjunto_solucion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x > ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", sol)
  - concatenar("x < ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} > {c}?"

explicacion: |
  Coeficiente positivo: se despeja igual que en una ecuación, sin dar
  vuelta la desigualdad.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["conjunto_solucion", "signos", "opcion_multiple"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x > ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", sol)
  - concatenar("x < ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} < {c}? (atención al signo de {a})"

explicacion: |
  Como {a} es negativo, al dividir para despejar x la desigualdad se da
  vuelta: de "<" pasa a ">".
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["conjunto_solucion", "signos", "opcion_multiple"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x < ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x < ", sol)
  - concatenar("x > ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} > {c}? (atención al signo de {a})"

explicacion: |
  Como {a} es negativo, ">" se da vuelta a "<" al despejar x.
```

## Sección: funcion-inversa-composicion (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 10)

respuesta: m * (x ^ 2) + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}, g(x) = x². ¿Cuánto vale (f∘g)({x})?"

pasos:
  - "Primero g({x}) = {x}² = {x ^ 2}"
  - "Después f({x ^ 2}) = {m}×{x ^ 2} + {b} = {m * (x ^ 2) + b}"

explicacion: |
  (f∘g)(x) = f(g(x)): primero se aplica g, y el resultado entra a f.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 10)

respuesta: (m * x + b) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}, g(x) = x². ¿Cuánto vale (g∘f)({x})?"

pasos:
  - "Primero f({x}) = {m}×{x} + {b} = {m * x + b}"
  - "Después g({m * x + b}) = ({m * x + b})² = {(m * x + b) ^ 2}"

explicacion: |
  Acá el orden es al revés: primero f, después g — da un resultado
  distinto al ejercicio anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m1: random(2, 6)
  b1: random(1, 10)
  m2: random(2, 6)
  b2: random(1, 10)
  x: random(1, 15)

respuesta: m1 * (m2 * x + b2) + b1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m1}x + {b1}, g(x) = {m2}x + {b2}. ¿Cuánto vale (f∘g)({x})?"

explicacion: |
  Se calcula g({x}) primero, y ese resultado se usa como entrada de f.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m1: random(2, 6)
  b1: random(1, 10)
  m2: random(2, 6)
  b2: random(1, 10)
  x: random(1, 15)

respuesta: m2 * (m1 * x + b1) + b2
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m1}x + {b1}, g(x) = {m2}x + {b2}. ¿Cuánto vale (g∘f)({x})?"

explicacion: |
  Ahora se calcula f primero — el resultado, en general, es distinto al
  de (f∘g).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m: random(2, 5)
  b: random(1, 10)
  x: random(1, 15)

respuesta: m * (m * x + b) + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale (f∘f)({x})?"

pasos:
  - "Primero f({x}) = {m * x + b}"
  - "Después f({m * x + b}) = {m} × {m * x + b} + {b} = {m * (m * x + b) + b}"

explicacion: |
  Componer una función consigo misma es aplicarla dos veces seguidas.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion", "verificacion", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 10)
  real: m * (x ^ 2) + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = {m}x + {b}, g(x) = x². ¿Es correcto que (f∘g)({x}) = {propuesto}?"

explicacion: |
  El valor correcto es f(g({x})) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En general, (f∘g)(x) es igual a (g∘f)(x)."

explicacion: |
  El orden en que se componen dos funciones cambia el resultado, salvo
  casos particulares.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x_sol: random(1, 20)
  oy: m * x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale f⁻¹({oy})?"

pasos:
  - "f⁻¹(y) deshace lo que hace f: buscar qué x cumple {m}x + {b} = {oy}"
  - "x = ({oy} − {b}) / {m} = {(oy - b) / m}"

explicacion: |
  f⁻¹({oy}) es el x que, aplicado a f, da {oy} — el mismo cálculo que
  despejar x en la ecuación {m}x + {b} = {oy}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x_sol: random(1, 15)
  oy: m * x_sol - b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x − {b}. ¿Cuánto vale f⁻¹({oy})?"

explicacion: |
  x = ({oy} + {b}) / {m}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["inversa"]

variables:
  b: random(1, 20)
  x_sol: random(1, 30)
  oy: x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x + {b}. ¿Cuánto vale f⁻¹({oy})?"

explicacion: |
  Si f suma {b}, f⁻¹ resta {b}: x = {oy} − {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x_sol: random(1, 20)
  oy: m * x_sol + b
  inv_y: (oy - b) / m

respuesta: ((m * inv_y + b) == oy)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si f⁻¹({oy}) = {inv_y}, ¿f({inv_y}) da de vuelta {oy}?"

explicacion: |
  Aplicar f y después f⁻¹ (o al revés) tiene que devolver el valor
  original — es la definición misma de función inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 20)
  fx: m * x + b

respuesta: (((fx - b) / m) == x)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si f({x}) = {fx}, ¿f⁻¹({fx}) da de vuelta {x}?"

explicacion: |
  f⁻¹ deshace exactamente lo que hizo f.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa", "opcion_multiple"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 20)

respuesta: (x - b) / m
tipo: mc
opciones_explicitas:
  - (x - b) / m
  - (x + b) / m
  - m * x - b

enunciado: "f(x) = {m}x + {b}. ¿Cuál es f⁻¹({x})?"

explicacion: |
  Se despeja x de y = {m}x + {b}: x = (y − {b}) / {m}. Cambiar el signo
  del −{b} o no dividir por {m} son los errores típicos.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "f⁻¹(x) significa lo mismo que 1/f(x)."

explicacion: |
  f⁻¹ es la función inversa (deshace la operación de f); 1/f(x) es el
  recíproco numérico del resultado — son cosas distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "No toda función tiene inversa: hace falta que sea biyectiva (cada entrada con una salida distinta, y se alcancen todos los valores de llegada)."

explicacion: |
  Por ejemplo, f(x) = x² no es invertible en todo su dominio, porque
  f(2) y f(−2) dan el mismo resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "f(f⁻¹(x)) tiene que dar x, para cualquier x del dominio de f⁻¹."

explicacion: |
  Es exactamente la definición: aplicar una función y su inversa
  devuelve el valor original.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x: random(1, 20)

respuesta: ((m * x + b) == (m * x + b))
tipo: vf

enunciado: "f(x) = {m}x + {b}, id(x) = x (la función identidad). ¿(f∘id)({x}) es igual a f({x})?"

explicacion: |
  Componer con la identidad no cambia nada: id no modifica su entrada
  antes de pasarla a f.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  desc: random(1, 20)
  envio: random(5, 30)
  precio: random(50, 200)

respuesta: precio - desc + envio
tipo: input
tolerancia_abs: 0

enunciado: "d(p) = p − {desc} (aplica un descuento fijo), e(p) = p + {envio} (agrega el envío). Si el precio de lista es {precio} y se aplica primero el descuento y después se suma el envío, ¿cuál es el precio final? (Esto es (e∘d)({precio}))"

explicacion: |
  (e∘d)(p) = e(d(p)): primero se descuenta, y al resultado se le suma el
  envío — el mismo orden que las operaciones se hacen en la vida real.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["inversa", "problema"]

variables:
  m: random(2, 5)
  b: random(10, 40)
  temp_sol: random(1, 30)
  resultado: m * temp_sol + b

respuesta: temp_sol
tipo: input
tolerancia_abs: 0

enunciado: "Una fórmula de conversión es f(t) = {m}t + {b}. Si el resultado de aplicarla fue {resultado}, ¿cuál era el valor original de t (o sea, f⁻¹({resultado}))?"

explicacion: |
  Se despeja t de {m}t + {b} = {resultado}, el mismo procedimiento de
  siempre para hallar la inversa evaluada en un punto.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x_sol: random(1, 20)
  oy: m * x_sol + b
  inv_mal: (oy + b) / m

respuesta: ((m * inv_mal + b) == oy)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si por error se calcula f⁻¹({oy}) como ({oy}+{b})/{m} (con el signo cambiado), ¿el resultado de f en ese valor sigue dando {oy}?"

explicacion: |
  No: con el signo equivocado, f(f⁻¹({oy})) ya no da {oy} — la
  verificación es exactamente lo que detecta este tipo de error.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["composicion", "verdadero_falso"]

variables:
  m1: random(2, 6)
  b1: random(1, 10)
  m2: random(2, 6)
  b2: random(1, 10)
  x: random(1, 10)

respuesta: ((m1 * (m2 * x + b2) + b1) == (m2 * (m1 * x + b1) + b2))
tipo: vf

enunciado: "f(x) = {m1}x + {b1}, g(x) = {m2}x + {b2}. ¿(f∘g)({x}) es igual a (g∘f)({x})?"

explicacion: |
  Salvo coincidencia numérica puntual, componer en órdenes distintos da
  resultados distintos — por eso siempre hay que fijarse cuál función va
  primero.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["composicion"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  x: random(1, 10)

respuesta: x + a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x + {a}, g(x) = x + {b}, h(x) = x + {c}. ¿Cuánto vale (f∘g∘h)({x})?"

pasos:
  - "h({x}) = {x + c}, g({x + c}) = {x + c + b}, f({x + c + b}) = {x + a + b + c}"

explicacion: |
  Componer más de dos funciones se hace de a pasos, de adentro hacia
  afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La inversa de f⁻¹ es la propia f."

explicacion: |
  Deshacer lo que deshace f vuelve a hacer lo que hacía f — (f⁻¹)⁻¹ = f.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa", "opcion_multiple"]

variables:
  b: random(1, 20)
  x: random(1, 30)

respuesta: x - b
tipo: mc
opciones_explicitas:
  - x - b
  - x + b
  - -x - b

enunciado: "f(x) = x + {b}. ¿Cuál es f⁻¹({x})?"

explicacion: |
  Si f suma {b}, la inversa resta {b}: f⁻¹(x) = x − {b}.
```

