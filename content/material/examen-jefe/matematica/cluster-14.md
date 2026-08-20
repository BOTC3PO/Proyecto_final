# Examen jefe — Maestro de Funciones

> Logro #65. Dominaste las funciones lineales, cuadráticas y sus propiedades clave. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **130 preguntas totales** en 5/5 secciones.

---

## Sección: funcion-cuadratica-parabola (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["vertice"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuál es la coordenada x del vértice?"

pasos:
  - "xᵥ = −{b} / (2×{a}) = {-b} / {2 * a} = {(-b) / (2 * a)}"

explicacion: |
  xᵥ = −b/(2a).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["vertice"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: a * xv ^ 2 + b * xv + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. Ya sabiendo que xᵥ = {xv}, ¿cuál es la coordenada y del vértice (o sea, f({xv}))?"

explicacion: |
  yᵥ = f(xᵥ) = {a}×{xv}² + {b}×{xv} + {c} = {a * xv ^ 2 + b * xv + c}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  a: random(1, 8)
  b: random(-15, 15)
  c: random(-20, 20)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuál es la ordenada al origen (f(0))?"

explicacion: |
  f(0) = {c} — se lee directo, sin ninguna cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(-10, 10)
  c: random(-10, 10)
  x: random(-8, 8)

respuesta: a * x ^ 2 + b * x + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuánto vale f({x})?"

explicacion: |
  Se reemplaza x por {x} y se calcula.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² + {b}x + {c}. ¿Cuál es la mayor raíz (dónde f(x)=0)?"

explicacion: |
  Mismo procedimiento que `../ecuacion-cuadratica/`: las raíces son
  {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² + {b}x + {c}. ¿Cuál es la menor raíz?"

explicacion: |
  Las raíces son {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concavidad", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Abre hacia arriba la parábola (el vértice es un mínimo)?"

explicacion: |
  El coeficiente principal {a} es positivo, así que abre hacia arriba.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concavidad", "verdadero_falso"]

variables:
  a: random(-10, -1)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: falso

tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Abre hacia arriba la parábola?"

explicacion: |
  El coeficiente principal {a} es negativo, así que abre hacia ABAJO (el
  vértice es un máximo).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["eje_simetria"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿En qué valor de x está el eje de simetría?"

explicacion: |
  El eje de simetría pasa siempre por la coordenada x del vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["eje_simetria", "verdadero_falso"]

variables:
  a: random(1, 6)
  xv: random(-8, 8)
  b: -2 * a * xv
  c: random(-10, 10)
  d: random(1, 8)

respuesta: ((a * (xv + d) ^ 2 + b * (xv + d) + c) == (a * (xv - d) ^ 2 + b * (xv - d) + c))
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}, con vértice en xᵥ={xv}. ¿f({xv}+{d}) es igual a f({xv}−{d})?"

explicacion: |
  Dos puntos a la misma distancia del eje de simetría siempre dan el
  mismo valor de f — es la definición de simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: verdadero
tipo: vf

enunciado: "f(x) = x² + {b}x + {c}. ¿Cruza esta parábola el eje x en dos puntos distintos?"

explicacion: |
  Al tener dos raíces reales distintas ({r1} y {r2}), la parábola cruza
  el eje x en dos puntos.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una parábola abre hacia arriba, el vértice es el punto más bajo de toda la curva."

explicacion: |
  Es el mínimo absoluto de la función en ese caso.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La coordenada x del vértice se calcula como b/(2a), sin ningún signo negativo."

explicacion: |
  Es −b/(2a), con el signo negativo — un error muy común es olvidarlo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La ordenada al origen (f(0)) es siempre el mismo punto que el vértice de la parábola."

explicacion: |
  Sólo coinciden cuando b=0 (el vértice está sobre el eje y) — en
  general son dos puntos distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["vertice"]

variables:
  a: random(1, 8)
  c: random(-15, 15)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {c} (sin término x). ¿Cuál es la coordenada x del vértice?"

explicacion: |
  Con b=0, xᵥ = −0/(2a) = 0 — el vértice está sobre el eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["vertice", "verdadero_falso"]

variables:
  a: random(1, 8)
  c: random(-15, 15)

respuesta: ((0) == (0))
tipo: vf

enunciado: "f(x) = {a}x² + {c}. ¿Coincide el vértice con la ordenada al origen, en este caso particular?"

explicacion: |
  Sí, porque b=0: el vértice cae justo sobre el eje y, en el mismo punto
  que f(0).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  tv: random(1, 10)
  a: -random(1, 5)
  b: -2 * a * tv
  altura_inicial: random(0, 20)

respuesta: tv
tipo: input
tolerancia_abs: 0

enunciado: "La altura de un objeto lanzado es h(t) = {a}t² + {b}t + {altura_inicial}. ¿En qué instante t alcanza la altura máxima?"

pasos:
  - "Como a={a} es negativo, la parábola abre hacia abajo: el vértice es un máximo, en t = −{b}/(2×{a})"

explicacion: |
  El instante de altura máxima es siempre la coordenada t del vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  tv: random(1, 10)
  a: -random(1, 5)
  b: -2 * a * tv
  altura_inicial: random(0, 20)

respuesta: a * tv ^ 2 + b * tv + altura_inicial
tipo: input
tolerancia_abs: 0

enunciado: "h(t) = {a}t² + {b}t + {altura_inicial}, con instante de altura máxima en t = {tv}. ¿Cuál es esa altura máxima?"

explicacion: |
  Se evalúa h en t={tv}: h({tv}) = {a * tv ^ 2 + b * tv + altura_inicial}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: xv + error

respuesta: (propuesto == xv)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Es correcto que la coordenada x del vértice sea {propuesto}?"

explicacion: |
  El valor correcto es xᵥ = −b/(2a) = {xv}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función cuadrática f(x) = ax² + bx + c son todos los números reales."

explicacion: |
  No tiene denominador, ni raíz, ni logaritmo — nada que restrinja el
  dominio (ver `../funcion-dominio/`).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "imagen", "verdadero_falso"]

variables:
  a: random(1, 8)

respuesta: falso

tipo: vf

enunciado: "Con a = {a} (positivo), la imagen de la función es 'y ≤ yᵥ'."

explicacion: |
  Con a positivo (abre hacia arriba), la imagen es 'y ≥ yᵥ', no ≤ — ver
  `../funcion-imagen/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices", "factoreo"]

variables:
  r: random(1, 20)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² − {2 * r}x + {r ^ 2} se factorea como (x − {r})². ¿Cuál es la única raíz (doble) de f?"

explicacion: |
  Con discriminante 0, la parábola sólo toca el eje x en un punto: el
  vértice coincide con la raíz.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) = a(x − r₁)(x − r₂), entonces r₁ y r₂ son exactamente los puntos donde la parábola cruza el eje x."

explicacion: |
  Es la misma conexión ya vista entre factoreo y raíces en
  `../ecuacion-cuadratica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["raices", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((r1 ^ 2 + b * r1 + c) == 0)
tipo: vf

enunciado: "f(x) = x² + {b}x + {c}. ¿Es f({r1}) igual a 0?"

explicacion: |
  Por definición, evaluar la función en una raíz siempre da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ninguna"
tipo: mc
opciones_explicitas:
  - "Ninguna"
  - "Una"
  - "Dos"

enunciado: "Si el discriminante de una función cuadrática es negativo, ¿en cuántos puntos cruza el eje x?"

explicacion: |
  Sin raíces reales, la parábola no toca el eje x en absoluto — queda
  completamente arriba o completamente abajo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  pv: random(5, 30)
  a: -random(1, 4)
  b: -2 * a * pv

respuesta: pv
tipo: input
tolerancia_abs: 0

enunciado: "El ingreso de una empresa según el precio p es I(p) = {a}p² + {b}p. ¿A qué precio p se maximiza el ingreso?"

explicacion: |
  El precio óptimo es la coordenada del vértice, igual que en el
  problema de altura máxima.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Toda parábola de una función cuadrática es simétrica respecto de una recta vertical (el eje de simetría)."

explicacion: |
  Es una propiedad geométrica central de la parábola.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["vertice"]

variables:
  a: random(1, 8)
  xv: random(-15, 15)

respuesta: -2 * a * xv
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere que f(x) = {a}x² + bx + c tenga vértice en xᵥ = {xv}. ¿Cuánto tiene que valer b?"

explicacion: |
  De xᵥ = −b/(2a), despejando: b = −2a×xᵥ = −2×{a}×{xv} = {-2 * a * xv}.
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
  y: m * x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale f⁻¹({y})?"

pasos:
  - "f⁻¹(y) deshace lo que hace f: buscar qué x cumple {m}x + {b} = {y}"
  - "x = ({y} − {b}) / {m} = {(y - b) / m}"

explicacion: |
  f⁻¹({y}) es el x que, aplicado a f, da {y} — el mismo cálculo que
  despejar x en la ecuación {m}x + {b} = {y}.
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
  y: m * x_sol - b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x − {b}. ¿Cuánto vale f⁻¹({y})?"

explicacion: |
  x = ({y} + {b}) / {m}.
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
  y: x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x + {b}. ¿Cuánto vale f⁻¹({y})?"

explicacion: |
  Si f suma {b}, f⁻¹ resta {b}: x = {y} − {b}.
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
  y: m * x_sol + b
  inv_y: (y - b) / m

respuesta: ((m * inv_y + b) == y)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si f⁻¹({y}) = {inv_y}, ¿f({inv_y}) da de vuelta {y}?"

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
  y: m * x_sol + b
  inv_mal: (y + b) / m

respuesta: ((m * inv_mal + b) == y)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si por error se calcula f⁻¹({y}) como ({y}+{b})/{m} (con el signo cambiado), ¿el resultado de f en ese valor sigue dando {y}?"

explicacion: |
  No: con el signo equivocado, f(f⁻¹({y})) ya no da {y} — la
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

## Sección: funcion-lineal-pendiente (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: (y2 - y1) / (x2 - x1)
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es su pendiente?"

pasos:
  - "m = ({y2}−{y1})/({x2}−{x1}) = {y2 - y1}/{x2 - x1} = {(y2 - y1) / (x2 - x1)}"

explicacion: |
  m = (y₂−y₁)/(x₂−x₁).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["pendiente", "signos"]

variables:
  x1: random(1, 10)
  y1: random(20, 40)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 - m * dx

respuesta: (y2 - y1) / (x2 - x1)
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es su pendiente?"

explicacion: |
  Como y disminuye mientras x aumenta, la pendiente da negativa.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["pendiente", "verdadero_falso"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: (((y2 - y1) / (x2 - x1)) == ((y1 - y2) / (x1 - x2)))
tipo: vf

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Da lo mismo calcular la pendiente como (y₂−y₁)/(x₂−x₁) que como (y₁−y₂)/(x₁−x₂)?"

explicacion: |
  Sí: mientras se reste en el mismo orden arriba y abajo, el resultado
  es el mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

variables:
  x: random(1, 20)
  y1: random(1, 20)
  y2: random(21, 40)

respuesta: falso

tipo: vf

enunciado: "Los puntos ({x}, {y1}) y ({x}, {y2}) definen una función lineal con pendiente bien definida."

explicacion: |
  Con la misma x en los dos puntos, el denominador (x₂−x₁) da 0 — una
  recta vertical no es el gráfico de una función (no cumple que cada x
  tenga un único y).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  m: random(1, 10)
  b: random(-20, 20)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuál es la ordenada al origen?"

explicacion: |
  f(0) = {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  m: random(1, 10)
  b: random(-20, 20)
  x: random(-15, 15)

respuesta: m * x + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale f({x})?"

explicacion: |
  {m}×{x} + {b} = {m * x + b}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["punto_pendiente"]

variables:
  m: random(1, 10)
  x1: random(1, 15)
  y1: random(1, 30)

respuesta: y1 - m * x1
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene pendiente {m} y pasa por ({x1}, {y1}). ¿Cuál es su ordenada al origen b?"

pasos:
  - "y₁ = m×x₁ + b → b = {y1} − {m}×{x1} = {y1 - m * x1}"

explicacion: |
  Se reemplaza el punto conocido en y=mx+b y se despeja b.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["punto_pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: y1 - m * x1
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). Ya sabiendo que m={m}, ¿cuál es su ordenada al origen b?"

explicacion: |
  b = y₁ − m×x₁ = {y1} − {m}×{x1} = {y1 - m * x1}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "verdadero_falso"]

variables:
  m: random(1, 15)
  b: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es creciente esta función?"

explicacion: |
  m={m} es positivo, así que f crece cuando x aumenta.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "verdadero_falso"]

variables:
  m: random(-15, -1)
  b: random(-20, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es creciente esta función?"

explicacion: |
  m={m} es negativo, así que f DECRECE cuando x aumenta.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "opcion_multiple"]

variables:
  b: random(-20, 20)

respuesta: "Constante"
tipo: mc
opciones_explicitas:
  - "Constante"
  - "Creciente"
  - "Decreciente"

enunciado: "f(x) = 0x + {b} (o sea, f(x) = {b} para cualquier x). ¿Es creciente, decreciente o constante?"

explicacion: |
  Con m=0, la función no cambia, sea cual sea x — es constante.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["paralelas", "verdadero_falso"]

variables:
  m: random(1, 10)
  b1: random(-20, 20)
  b2: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b1} y g(x) = {m}x + {b2}. ¿Son paralelas estas dos rectas?"

explicacion: |
  Tienen la misma pendiente ({m}), así que son paralelas (nunca se
  cruzan, salvo que sean exactamente la misma recta).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["paralelas", "verdadero_falso"]

variables:
  m1: random(1, 10)
  m2: random(11, 20)
  b1: random(-20, 20)
  b2: random(-20, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {m1}x + {b1} y g(x) = {m2}x + {b2}. ¿Son paralelas estas dos rectas?"

explicacion: |
  Tienen pendientes distintas ({m1} y {m2}), así que se cruzan en algún
  punto — no son paralelas.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["perpendiculares"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene pendiente {a}/{b} (como fracción, sin simplificar). La pendiente perpendicular se escribe con denominador {a}. ¿Cuál es su numerador?"

pasos:
  - "m₁ × m₂ = −1 → m₂ = −1/m₁ = −{b}/{a}: numerador −{b}"

explicacion: |
  La pendiente perpendicular es la inversa y opuesta: numerador y
  denominador se intercambian, y cambia el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["perpendiculares", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: ((a * (-b)) == -(b * a))
tipo: vf

enunciado: "Dos rectas tienen pendientes {a}/{b} y −{b}/{a}. ¿Son perpendiculares?"

explicacion: |
  Se verifica sin dividir, cruzando numeradores y denominadores: si
  m₁=p/q y m₂=r/s, son perpendiculares cuando p×r = −q×s.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["perpendiculares", "error_comun", "verdadero_falso"]

variables:
  m: random(2, 10)

respuesta: ((m * (-m)) == -1)
tipo: vf

enunciado: "Dos rectas tienen pendientes {m} y −{m} (mismo número, signo opuesto). ¿Son perpendiculares?"

explicacion: |
  Sólo son perpendiculares si {m}×(−{m}) da exactamente −1 — eso pasa
  únicamente si m=1. Tener signos opuestos NO alcanza por sí solo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La pendiente mide cuánto cambia y por cada unidad que aumenta x."

explicacion: |
  Es la tasa de cambio constante de una función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función lineal (con m≠0) son todos los números reales."

explicacion: |
  No hay ninguna restricción de dominio, como ya se vio en
  `../funcion-dominio/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "imagen", "verdadero_falso"]

variables:
  m: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "La imagen de f(x) = {m}x + b (con m distinto de 0) son todos los números reales."

explicacion: |
  Ya visto en `../funcion-imagen/`: cualquier recta no horizontal cubre
  todos los valores de y posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-20, 20)

respuesta: ((m * 0 + b) == b)
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Pasa la recta por el punto (0, {b})?"

explicacion: |
  f(0) siempre da exactamente b — la ordenada al origen es, literalmente,
  el punto donde cruza el eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  tarifa_fija: random(5, 30)
  precio_km: random(2, 10)
  km: random(1, 40)

respuesta: precio_km * km + tarifa_fija
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje cuesta C(km) = {precio_km}·km + {tarifa_fija} (tarifa fija más precio por km). ¿Cuánto cuesta un viaje de {km} km?"

explicacion: |
  Es una función lineal: {precio_km} es la pendiente (cuánto sube por
  km), {tarifa_fija} es la ordenada al origen (el costo con 0 km).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  tarifa_fija: random(5, 30)
  precio_km: random(2, 10)
  km1: random(1, 10)
  km2: random(11, 30)
  costo1: precio_km * km1 + tarifa_fija
  costo2: precio_km * km2 + tarifa_fija

respuesta: (costo2 - costo1) / (km2 - km1)
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje de {km1} km costó {costo1}, y uno de {km2} km costó {costo2}. ¿Cuál es el precio por km (la pendiente)?"

explicacion: |
  m = (costo2−costo1)/(km2−km1) — la misma fórmula de pendiente, con
  nombres de contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx
  real: (y2 - y1) / (x2 - x1)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Es correcto que la pendiente sea {propuesto}?"

explicacion: |
  La pendiente correcta es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Dos puntos distintos (con distinta x) determinan una única recta que pasa por los dos."

explicacion: |
  Con dos puntos alcanza para calcular m y b, y quedan completamente
  determinados.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x_sol: random(1, 20)
  y: m * x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Para qué valor de x es f(x) = {y}?"

explicacion: |
  Se despeja x de {m}x + {b} = {y}, el mismo procedimiento de
  `../ecuacion-primer-grado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["raiz"]

variables:
  m: random(2, 10)
  b: random(-30, -1)

respuesta: -b / m
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿En qué valor de x cruza la recta el eje x (f(x)=0)?"

explicacion: |
  {m}x + {b} = 0 → x = −{b}/{m} = {-b / m}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la pendiente de una recta horizontal?"

explicacion: |
  Una recta horizontal no sube ni baja — su pendiente es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["signos", "opcion_multiple"]

variables:
  m1: random(1, 10)
  m2: random(11, 20)

respuesta: "g(x)"
tipo: mc
opciones_explicitas:
  - "g(x)"
  - "f(x)"
  - "Crecen igual"

enunciado: "f(x) = {m1}x + 3, g(x) = {m2}x − 5. ¿Cuál de las dos crece más rápido?"

explicacion: |
  La que tiene mayor pendiente ({m2} > {m1}) sube más rápido, sin
  importar la ordenada al origen.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el valor absoluto de la pendiente, más 'inclinada' (más vertical) se ve la recta."

explicacion: |
  Una pendiente grande significa que y cambia mucho por cada unidad de
  x, así que la recta sube o baja más pronunciada.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["punto_pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx
  b: y1 - m * x1
  x_eval: random(1, 30)

respuesta: m * x_eval + b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). Usando su ecuación completa, ¿cuánto vale f({x_eval})?"

pasos:
  - "m = {m}, b = {b} → f(x) = {m}x + {b}"

explicacion: |
  Una vez armada la ecuación completa, evaluarla en cualquier x es
  directo.
```
