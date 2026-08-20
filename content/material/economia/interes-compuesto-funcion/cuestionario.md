# Economía — Interés compuesto como función (cuestionario, 24 preguntas VBLang)

> Tema: `E15` (puente Álgebra → Economía). Ver `teoria.md` en esta misma
> carpeta.

Con tasa r=50% (base 1+r=1.5), se construye C como múltiplo de 2^t para
que M(t)=C×1.5^t dé siempre un entero exacto (1.5=3/2, así que
C×1.5^t = C×3^t/2^t, entero si C ya tiene el factor 2^t).

---

### 1 — Evaluar M(t) como función exponencial

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  c0: random(2, 20)
  t: random(1, 4)
  C: c0 * (2 ^ t)

respuesta: c0 * (3 ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1.5)^t (capital {C}, tasa 50% por período). ¿Cuánto vale M({t})?"

pasos:
  - "M({t}) = {C}×1.5^{t} = {c0 * (3 ^ t)}"

explicacion: |
  Se evalúa la función exponencial en t={t}.
```

### 2 — Evaluar M(t): otro caso

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  c0: random(2, 15)
  t: random(1, 4)
  C: c0 * (2 ^ t)

respuesta: c0 * (3 ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1.5)^t. ¿Cuánto vale M({t})?"

explicacion: |
  M({t}) = {C}×1.5^{t} = {c0 * (3 ^ t)}.
```

### 3 — Ordenada al origen: M(0)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["dominio"]

variables:
  C: random(1000, 50000)

respuesta: C
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1+r)^t. ¿Cuánto vale M(0)?"

explicacion: |
  Cualquier base elevada a 0 da 1: M(0) = {C}×1 = {C}, el capital
  inicial.
```

### 4 — Identificar la base de la función

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  r_por_mil: random(20, 200)

respuesta: 1000 + r_por_mil
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa r={r_por_mil}/1000 por período, ¿cuánto vale (1+r) multiplicado por 1000 (para trabajar sin decimales)?"

explicacion: |
  (1+r)×1000 = 1000+{r_por_mil} = {1000 + r_por_mil} — la base de la
  función exponencial, escalada por 1000 para evitar decimales.
```

### 5 — Comparar interés simple y compuesto en t=1: coinciden

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["comparacion", "verdadero_falso"]

variables:
  C: random(1000, 50000)
  r_pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "C={C}, r={r_pct}%. ¿Dan el mismo monto el interés simple y el compuesto, para t=1 período?"

explicacion: |
  Para un solo período, todavía no hubo oportunidad de que el interés
  generado gane su propio interés — coinciden exactamente.
```

### 6 — Comparar interés simple y compuesto en t=2: compuesto es mayor

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  C: 10000
  r_pct: random(5, 30)

respuesta: (((100 + r_pct) ^ 2) > (100 * (100 + 2 * r_pct)))
tipo: vf

enunciado: "C={C}, r={r_pct}%, t=2 períodos. ¿Da el interés compuesto un monto mayor que el interés simple?"

explicacion: |
  A partir de t>1, el compuesto siempre supera al simple, con la misma
  tasa y capital.
```

### 7 — Concepto: M(t) es una función exponencial

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M(t)=C(1+r)^t tiene la misma forma que cualquier función exponencial f(x)=a·bˣ, con a=C y b=(1+r)."

explicacion: |
  Es exactamente la conexión con
  `../../matematica/familias-exponencial-logaritmica/`.
```

### 8 — Concepto: interés simple es una función lineal

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M(t)=C(1+rt) (interés simple) es una función lineal de t, con pendiente C·r y ordenada al origen C."

explicacion: |
  A diferencia del compuesto, acá t no está en el exponente.
```

### 9 — Concepto: la base siempre es mayor que 1

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con una tasa de interés positiva (r>0), la base (1+r) de la función M(t) siempre es mayor que 1."

explicacion: |
  Por eso M(t) es siempre creciente — es la misma condición a>1 de
  `../../matematica/familias-exponencial-logaritmica/`.
```

### 10 — Concepto: a la larga, exponencial supera a lineal

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Sin importar qué tan alta sea la tasa de interés simple, a la larga el interés compuesto (con la misma tasa) siempre termina dando un monto mayor."

explicacion: |
  Es el mismo principio general: cualquier exponencial con base>1
  termina superando a cualquier función lineal.
```

### 11 — Tiempo de duplicación: tasa del 100%

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["duplicacion"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa del 100% por período (la base es 1+1=2), ¿cuántos períodos tardan en duplicar el capital?"

explicacion: |
  2 = 2^t → t=1 — con 100% de tasa, se duplica en un solo período, por
  definición.
```

### 12 — Tiempo para cuadruplicar con tasa del 100%

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["duplicacion"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa del 100% por período (base 2), ¿cuántos períodos tardan en CUADRUPLICAR el capital?"

pasos:
  - "4 = 2^t → t=2"

explicacion: |
  Cuadruplicar es 2², así que hacen falta 2 períodos de duplicación.
```

### 13 — Concepto: ecuación exponencial para el tiempo de duplicación

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Encontrar el tiempo de duplicación de un capital a interés compuesto es resolver una ecuación exponencial, del mismo tipo que `../../matematica/ecuaciones-exponenciales-logaritmicas/`."

explicacion: |
  2 = (1+r)^t se resuelve aplicando logaritmo a los dos lados.
```

### 14 — Concepto: dominio de M(t) en el contexto financiero

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el contexto financiero, el dominio útil de M(t) se restringe a t≥0 — no tiene sentido un período de tiempo negativo."

explicacion: |
  El modelo matemático permitiría evaluar en t negativo, pero no
  representaría nada real en este contexto.
```

### 15 — Error común: base mal escrita

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  C: random(1000, 20000)

respuesta: "C×(1+r)^t"
tipo: mc
opciones_explicitas:
  - "C×(1+r)^t"
  - "C×r^t"
  - "C×(1+r×t)"

enunciado: "¿Cuál es la fórmula correcta del monto a interés compuesto, como función del tiempo?"

explicacion: |
  La base es (1+r), no r solo — olvidar el "+1" es un error común. La
  tercera opción es la fórmula de interés SIMPLE, no compuesto.
```

### 16 — Verificación con error: evaluar M(t)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c0: random(2, 20)
  t: random(1, 4)
  C: c0 * (2 ^ t)
  real: c0 * (3 ^ t)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "M(t) = {C}×(1.5)^t. ¿Es correcto que M({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

### 17 — Concepto: crecimiento cada vez más rápido

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El monto a interés compuesto no sólo crece: crece cada vez MÁS RÁPIDO a medida que pasa el tiempo (a diferencia del interés simple, que suma siempre lo mismo por período)."

explicacion: |
  Es la característica distintiva de cualquier crecimiento exponencial.
```

### 18 — Aplicar: comparar dos capitales con la misma tasa

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  c0_a: random(2, 10)
  c0_b: random(11, 20)
  t: random(1, 4)

respuesta: ((c0_b * (3 ^ t)) > (c0_a * (3 ^ t)))
tipo: vf

enunciado: "Dos capitales, {c0_a * (2 ^ t)} y {c0_b * (2 ^ t)}, crecen a la misma tasa del 50% por período durante {t} períodos. ¿Termina siendo mayor el monto del capital que partió más grande?"

explicacion: |
  Con la misma tasa, el capital inicial mayor siempre da un monto final
  mayor — la proporción se mantiene.
```

### 19 — Concepto: relación con ecuaciones diferenciales (adelanto)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El interés compuesto es uno de los ejemplos clásicos del modelo dy/dt=ky (crecimiento proporcional a lo que ya se tiene), estudiado formalmente en `../../matematica/ecuaciones-diferenciales/`."

explicacion: |
  Es el mismo fenómeno matemático mirado, más adelante en el tronco, con
  la herramienta de derivadas.
```

### 20 — Aplicar: hallar t dado el monto (potencia reconocible)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  C: 1000
  t_sol: random(1, 5)

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×2^t (tasa 100%). ¿Para qué valor de t es M(t) = {C * (2 ^ t_sol)}?"

pasos:
  - "2^t = {2 ^ t_sol} → t = {t_sol}"

explicacion: |
  Se reconoce la potencia de 2 acumulada.
```

### 21 — Concepto: t=0 siempre da el capital inicial

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier tasa r, M(0) siempre es igual al capital inicial C, sin importar cuál sea r."

explicacion: |
  (1+r)⁰=1 siempre, sea cual sea r — mismo principio que f(0)=1 en
  cualquier exponencial.
```

### 22 — Concepto: gráfico de M(t)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El gráfico de M(t) a interés compuesto es una recta, igual que el de interés simple."

explicacion: |
  Es una curva exponencial, no una recta — sólo el interés SIMPLE da una
  recta.
```

### 23 — Aplicar: capital que NO crece (r=0)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto"]

variables:
  C: random(1000, 50000)
  t: random(1, 10)

respuesta: C
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1+0)^t (tasa 0%). ¿Cuánto vale M({t})?"

explicacion: |
  Con r=0, la base es 1, y 1 elevado a cualquier exponente da 1 — el
  capital nunca cambia.
```

### 24 — Concepto: cierre — misma fórmula, dos lecturas

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M=C(1+r)^t es la misma fórmula en `../interes-compuesto/` y acá — lo que cambia es la lectura: antes, una cuenta puntual; ahora, una función completa de t, con dominio, comparación de crecimiento y tiempo de duplicación."

explicacion: |
  Es el resumen del módulo: mismo contenido matemático, otra manera de
  mirarlo.
```
