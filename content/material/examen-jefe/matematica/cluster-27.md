# Examen jefe — [PENDIENTE #627]

> Logro #627. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: ecuaciones-diferenciales (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["crecimiento"]

variables:
  y0: random(10, 200)
  a: random(2, 4)
  t: random(1, 5)

respuesta: y0 * a ^ t
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×{a}^t (modelo de crecimiento, solución de dy/dt=ky). ¿Cuánto vale y({t})?"

explicacion: |
  {y0}×{a}^{t} = {y0 * a ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["crecimiento"]

variables:
  y0: random(50, 500)
  a: 2
  t: random(1, 6)

respuesta: y0 * a ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una población se duplica cada período: y(t) = {y0}×2^t. ¿Cuántos hay después de {t} períodos?"

explicacion: |
  {y0}×2^{t} = {y0 * a ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["decaimiento"]

variables:
  base_inv: uno_de([2, 5])
  y0: random(10, 20) * (base_inv ^ 3)
  t: random(1, 3)

respuesta: y0 / (base_inv ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×(1/{base_inv})^t (modelo de decaimiento). ¿Cuánto vale y({t})?"

pasos:
  - "{y0}×(1/{base_inv})^{t} = {y0}/{base_inv ^ t} = {y0 / (base_inv ^ t)}"

explicacion: |
  Con base entre 0 y 1, la cantidad decrece con el tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["decaimiento", "problema"]

variables:
  cantidad_inicial: random(4, 20) * 16
  periodos: random(1, 4)

respuesta: cantidad_inicial / (2 ^ periodos)
tipo: input
tolerancia_abs: 0

enunciado: "Una muestra radiactiva de {cantidad_inicial}g se reduce a la mitad cada período (vida media). ¿Cuánto queda después de {periodos} períodos?"

explicacion: |
  Cada período multiplica por 1/2 — después de {periodos} períodos,
  queda dividido por 2^{periodos}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  y0: random(10, 100)
  a: random(2, 5)
  t: random(0, 5)

respuesta: (((y0 * a ^ (t + 1)) / (y0 * a ^ t)) == a)
tipo: vf

enunciado: "y(t) = {y0}×{a}^t. ¿Es siempre igual a {a} la razón y(t+1)/y(t), sin importar el valor de t={t}?"

explicacion: |
  Es justo la propiedad que hace que este modelo sea solución de
  dy/dt=ky: la razón entre valores consecutivos es constante.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  y0: random(10, 100)
  a: random(2, 5)
  t: random(0, 5)
  b_propuesto: uno_de([a, a + 1, a - 1])

respuesta: (((y0 * a ^ (t + 1)) / (y0 * a ^ t)) == b_propuesto)
tipo: vf

enunciado: "y(t) = {y0}×{a}^t. ¿Es y(t+1)/y(t) igual a {b_propuesto}?"

explicacion: |
  La razón real siempre es {a}, la base del modelo — cualquier otro
  número no coincide.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["vida_media"]

variables:
  n: random(1, 5)
  y0: random(10, 30) * (2 ^ n)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una muestra de {y0}g tiene vida media de 1 día (se reduce a la mitad cada día). ¿Cuántos días tardan en quedar {y0 / (2 ^ n)}g?"

pasos:
  - "{y0}/2^t = {y0 / (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce {y0 / (2 ^ n)} como {y0} dividido por una potencia exacta
  de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  n: random(1, 5)
  y0: random(10, 30)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {y0} se duplica cada período. ¿Cuántos períodos tardan en llegar a {y0 * (2 ^ n)}?"

pasos:
  - "{y0}×2^t = {y0 * (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce {y0 * (2 ^ n)} como {y0} multiplicado por una potencia
  exacta de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["duplicacion"]

variables:
  n: random(1, 5)
  y0: random(5, 50)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×10^t. ¿Para qué valor de t es y(t) = {y0 * (10 ^ n)}?"

pasos:
  - "10^t = {10 ^ n} → t = log₁₀({10 ^ n}) = {n}"

explicacion: |
  Se despeja t aplicando logaritmo, igual que en
  `../ecuaciones-exponenciales-logaritmicas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una ecuación diferencial relaciona una función con su derivada, en vez de dar directamente el valor de la función."

explicacion: |
  Es la diferencia clave con una ecuación algebraica común.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La solución de dy/dt = k·y siempre tiene la forma y(t) = y₀·aᵗ, una función exponencial."

explicacion: |
  Es el resultado central de este modelo — cualquier fenómeno con esa
  estructura de crecimiento se describe con una exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si la tasa de cambio de y es proporcional a y, entonces y crece de forma lineal (sumando siempre lo mismo)."

explicacion: |
  Crece de forma EXPONENCIAL (multiplicando), no lineal — confundir
  estos dos modelos es el error central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En dy/dt=ky, si k es positivo, y crece con el tiempo."

explicacion: |
  k>0 corresponde a una base a>1 en la solución y=y₀aᵗ.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En dy/dt=ky, si k es negativo, y decrece con el tiempo (acercándose a 0)."

explicacion: |
  k<0 corresponde a una base 0<a<1 en la solución.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un modelo de decaimiento exponencial, y se acerca a 0 pero nunca llega a valer exactamente 0 (ni se vuelve negativa)."

explicacion: |
  Es la misma asíntota horizontal en y=0 ya vista en
  `../familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un decaimiento exponencial, la vida media (tiempo para reducirse a la mitad) es siempre la misma, sin importar desde qué cantidad se empiece a contar."

explicacion: |
  Es una propiedad característica del decaimiento exponencial: tarda lo
  mismo en pasar de 100 a 50 que de 50 a 25.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  capital: random(1000, 5000)
  tasa: 2
  anios: random(1, 5)

respuesta: capital * tasa ^ anios
tipo: input
tolerancia_abs: 0

enunciado: "Un capital de {capital} se duplica cada año (modelo dC/dt=kC). ¿Cuánto hay después de {anios} años?"

explicacion: |
  El interés compuesto es, exactamente, un modelo de crecimiento
  proporcional a lo que ya se tiene.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  y0: random(10, 100)
  a: random(2, 4)
  t: random(1, 4)
  real: y0 * a ^ t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "y(t) = {y0}×{a}^t. ¿Es correcto que y({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto"]

variables:
  y0: random(10, 500)
  a: random(2, 5)

respuesta: y0
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×{a}^t. ¿Cuál es la cantidad inicial y₀ (en t=0)?"

explicacion: |
  y(0) = {y0}×{a}^0 = {y0}×1 = {y0} — el coeficiente que multiplica a
  la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto"]

variables:
  y0: random(10, 500)
  a: random(2, 5)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×{a}^t. ¿Cuál es la base a del modelo?"

explicacion: |
  Es el factor por el que se multiplica y en cada período.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  diferencia_inicial: random(20, 30) * 4
  periodos: random(1, 2)

respuesta: diferencia_inicial / (2 ^ periodos)
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia de temperatura entre un objeto y el ambiente empieza en {diferencia_inicial}°C y se reduce a la mitad cada hora (ley de enfriamiento de Newton, otro modelo dy/dt=ky). ¿Cuál es la diferencia después de {periodos} horas?"

explicacion: |
  Mismo modelo matemático que el decaimiento radiactivo, aplicado a
  temperatura en vez de masa.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Crecimiento poblacional, interés compuesto y decaimiento radiactivo son fenómenos distintos, pero todos se modelan con la misma ecuación diferencial dy/dt=ky."

explicacion: |
  Es el valor central de estudiar el modelo en abstracto: una vez
  entendida la estructura, se aplica a cualquier fenómeno con esa misma
  forma de cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Resolver una ecuación diferencial (encontrar la función y) usa integración, mientras que verificar que una función propuesta es solución usa derivación."

explicacion: |
  Cierra el círculo de Análisis: se necesitan las dos operaciones,
  `../derivada/` e `../integral/`, para trabajar con estos modelos.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  y0: random(5, 20)
  n: random(1, 6)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {y0} se duplica cada período: y(t) = {y0}×2^t. ¿Después de cuántos períodos completos llega exactamente a {y0 * (2 ^ n)}?"

explicacion: |
  Se reconoce el factor 2^{n}, contando cuántas duplicaciones hicieron
  falta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  y0: random(50, 200)
  a1: 2
  a2: 3
  t: random(2, 5)

respuesta: ((y0 * a2 ^ t) > (y0 * a1 ^ t))
tipo: vf

enunciado: "Dos poblaciones iguales parten de {y0}: una con tasa 2 (se duplica) y otra con tasa 3 (se triplica) cada período. ¿Es mayor la de tasa 3 después de {t} períodos?"

explicacion: |
  Una tasa de crecimiento mayor siempre termina superando a una menor,
  a igualdad de punto de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo básico y=y₀aᵗ (con a>1) predice un crecimiento sin límite, aunque en la realidad casi todo crecimiento poblacional termina frenándose por recursos limitados."

explicacion: |
  Es una limitación conocida del modelo simple — modelos más avanzados
  (fuera de este módulo) agregan un límite de capacidad.
```

## Sección: redondeo (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(1, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100

respuesta: redondear(n, 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} a 1 cifra decimal."

pasos:
  - "Se mira la segunda cifra decimal ({m}) para decidir si la primera sube o queda igual: {redondear(n, 1)}"

explicacion: |
  Se mira la cifra que sigue a la posición buscada: 5 o más, sube; menos
  de 5, queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(1, 9)
  m: random(0, 9)
  mil: random(0, 9)
  n: entero + h / 10 + m / 100 + mil / 1000

respuesta: redondear(n, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Redondeá {n} a 2 cifras decimales."

pasos:
  - "Se mira la tercera cifra decimal ({mil}) para decidir: {redondear(n, 2)}"

explicacion: |
  Es el mismo criterio, mirando ahora la tercera cifra decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100 + 5 / 1000

respuesta: redondear(n, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Redondeá {n} a 2 cifras decimales."

pasos:
  - "La tercera cifra decimal es 5: la segunda cifra sube."

explicacion: |
  Cuando la cifra que decide es exactamente 5, la posición anterior sube.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo"]

variables:
  entero: random(1, 100)
  h: random(0, 9)
  n: entero + h / 10

respuesta: redondear(n, 0)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} al entero más cercano."

pasos:
  - "Se mira la primera cifra decimal ({h}) para decidir: {redondear(n, 0)}"

explicacion: |
  Redondear al entero es mirar sólo la primera cifra decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 100)
  n: entero + 5 / 10

respuesta: redondear(n, 0)
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {n} al entero más cercano."

pasos:
  - "La primera cifra decimal es 5: la parte entera sube."

explicacion: |
  El caso frontera (cifra exactamente 5) sigue subiendo, igual que con
  enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de redondeo de decimales es la misma que la de enteros: se mira la cifra siguiente a la posición buscada."

explicacion: |
  No es una regla nueva: es la misma idea de `../valor-posicional/`,
  aplicada del otro lado de la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 4)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  truncado: floor(n * 10) / 10

respuesta: (redondear(n, 1) == truncado)
tipo: vf

enunciado: "¿Coinciden redondear {n} a 1 cifra decimal y truncarlo a 1 cifra decimal?"

explicacion: |
  Cuando la cifra que decide el redondeo es menor a 5, redondear y
  truncar dan el mismo resultado (los dos "se quedan" con la cifra
  anterior).
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(5, 9)
  n: entero + h / 10 + m / 100

respuesta: floor(n * 10) / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Truncá {n} a 1 cifra decimal (sin redondear, cortando directo)."

explicacion: |
  Truncar corta directo, sin mirar si la cifra siguiente es 5 o más — a
  diferencia de redondear, siempre "se queda" con la cifra anterior tal
  cual está.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "truncar"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(5, 9)
  n: entero + h / 10 + m / 100
  truncado: floor(n * 10) / 10

respuesta: (redondear(n, 1) == truncado)
tipo: vf

enunciado: "¿Coinciden redondear {n} a 1 cifra decimal y truncarlo a 1 cifra decimal?"

explicacion: |
  Acá la cifra que decide es 5 o más, así que redondear hace subir la
  cifra anterior — pero truncar no sube nunca. Por eso no coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "problema"]

variables:
  entero: random(10, 500)
  c1: random(0, 9)
  c2: random(0, 9)
  c3: random(0, 9)
  precio: entero + c1 / 10 + c2 / 100 + c3 / 1000

respuesta: redondear(precio, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un cálculo da un precio de ${precio}. Redondeado a centavos (2 cifras decimales), ¿cuánto queda?"

explicacion: |
  Los precios en pesos se redondean a 2 cifras decimales porque no
  existen fracciones de centavo.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo", "problema"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  promedio: (a + b + c) / 3

respuesta: redondear(promedio, 2)
tipo: input
tolerancia_abs: 0.001

enunciado: "El promedio de {a}, {b} y {c} da {promedio}. Redondeado a 2 cifras decimales, ¿cuánto queda?"

explicacion: |
  Un promedio rara vez da un número "redondo": conviene redondearlo a una
  cantidad razonable de cifras decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  correcto: redondear(n, 1)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - floor(n * 10) / 10
  - correcto + 0.1

enunciado: "¿Cuál es el redondeo correcto de {n} a 1 cifra decimal?"

explicacion: |
  Las otras opciones son truncar (no mirar la cifra siguiente) o un error
  de un décimo de más.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo", "verificacion"]

variables:
  entero: random(1, 50)
  h: random(0, 9)
  m: random(0, 9)
  n: entero + h / 10 + m / 100
  correcto: redondear(n, 1)
  error: uno_de([0, 0, 0, 0.1, -0.1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien redondeado {n} a 1 cifra decimal, si el resultado dado es {mostrado}?"

explicacion: |
  Hay que volver a aplicar la regla (mirar la segunda cifra decimal) y
  comparar.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo"]

variables:
  entero: random(1, 20)
  h: random(0, 9)
  m: random(0, 9)
  mil: random(0, 9)
  diez_mil: random(0, 9)
  n: entero + h / 10 + m / 100 + mil / 1000 + diez_mil / 10000

respuesta: redondear(n, 3)
tipo: input
tolerancia_abs: 0.0001

enunciado: "Redondeá {n} a 3 cifras decimales."

explicacion: |
  Con más cifras decimales, el procedimiento es el mismo: mirar la cifra
  que sigue a la posición buscada.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al redondear, la cifra de la posición buscada sólo puede subir en 1 o quedar igual — nunca baja."

explicacion: |
  Redondear nunca resta a la cifra buscada: como mucho, la deja igual (si
  la siguiente es menor a 5) o la sube en 1 (si es 5 o más).
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

tipo: completar
enunciado: "¿A partir de qué cifra (0 a 9) la posición anterior sube al redondear? Nombrá la más chica que hace subir."
respuestas_validas:
  - 5

explicacion: |
  A partir del 5 (inclusive), la posición anterior sube.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "orden"]

tipo: ordenar
enunciado: "Estos números ya están redondeados a 1 cifra decimal. Ordenalos de menor a mayor."
opciones_explicitas:
  - "3,4"
  - "3,1"
  - "3,8"
  - "3,2"
respuesta_orden: ["3,1", "3,2", "3,4", "3,8"]

explicacion: |
  Una vez redondeados, se ordenan igual que cualquier lista de decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear un número a 0 cifras decimales es lo mismo que redondearlo al entero más cercano."

explicacion: |
  0 cifras decimales significa "sin ninguna cifra después de la coma": es
  exactamente el entero más cercano.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear un número casi siempre pierde algo de precisión: el número redondeado no es exactamente igual al original (salvo que ya terminara justo ahí)."

explicacion: |
  Redondear es una aproximación útil, no magia: se gana simplicidad a
  cambio de exactitud.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "avanzado"
  tags: ["redondeo"]

variables:
  entero: random(1, 30)
  m: random(5, 9)
  n: entero + m / 10
  correcto: redondear(n, 0)
  mal_hecho: entero

respuesta: mal_hecho
tipo: mc
opciones_explicitas:
  - correcto
  - mal_hecho

enunciado: "Para redondear {n} al entero más cercano, ¿cuál de estos dos resultados está mal (no aplicó la regla)?"

explicacion: |
  {mal_hecho} simplemente descartó la parte decimal sin mirar si tenía
  que subir — eso es truncar, no redondear.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "intermedio"
  tags: ["redondeo"]

variables:
  entero: random(1, 999)

respuesta: entero
tipo: input
tolerancia_abs: 0.01

enunciado: "Redondeá {entero} (un número entero) a 2 cifras decimales."

explicacion: |
  Un número que ya no tiene cifras decimales de sobra no cambia al
  redondearlo: queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "redondeo"
  nivel: "basico"
  tags: ["redondeo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Redondear es aproximar un número a una cantidad determinada de cifras, mirando la cifra siguiente para decidir si la última que queda sube o se mantiene igual."

explicacion: |
  Es la idea central de todo el tema, aplicada tanto a enteros como a
  decimales.
```

## Sección: regla-de-tres-directa (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(2, 30)
  c: random(2, 9)

respuesta: (b * c) / a
tipo: input
tolerancia_abs: 0.01

enunciado: "Resolvé la regla de tres directa: {a} es a {b} como {c} es a x. ¿Cuánto vale x?"

pasos:
  - "x = ({b} × {c}) ÷ {a} = {b * c} ÷ {a} = {(b * c) / a}"

explicacion: |
  Se multiplican los dos términos que están cruzados con la incógnita, y
  se divide por el tercero.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  kilos_base: random(2, 6)
  precio_base: kilos_base * random(100, 500)
  kilos_nuevo: random(2, 15)

respuesta: (precio_base * kilos_nuevo) / kilos_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Si {kilos_base} kg de manzanas cuestan ${precio_base}, ¿cuánto cuestan {kilos_nuevo} kg (a precio proporcional)?"

pasos:
  - "x = ({precio_base} × {kilos_nuevo}) ÷ {kilos_base}"

explicacion: |
  Más kilos, más precio: es una relación directamente proporcional.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 4)
  km_base: horas_base * random(40, 100)
  horas_nueva: random(2, 10)

respuesta: (km_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  A velocidad constante, más horas significa más distancia recorrida:
  relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(2, 8)
  sueldo_base: horas_base * random(500, 2000)
  horas_nueva: random(3, 12)

respuesta: (sueldo_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Por {horas_base} horas de trabajo se cobran ${sueldo_base}. Manteniendo la misma paga por hora, ¿cuánto se cobra por {horas_nueva} horas?"

explicacion: |
  Más horas trabajadas, más plata cobrada: relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  personas_base: random(2, 6)
  huevos_base: personas_base * random(1, 3)
  personas_nueva: random(3, 20)

respuesta: (huevos_base * personas_nueva) / personas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta para {personas_base} personas usa {huevos_base} huevos. Manteniendo la proporción, ¿cuántos huevos hacen falta para {personas_nueva} personas?"

explicacion: |
  Más personas, más ingredientes en la misma proporción: relación
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  km_base: random(50, 200)
  litros_base: random(4, 20)
  km_nuevo: random(100, 600)

respuesta: (litros_base * km_nuevo) / km_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto gasta {litros_base} litros cada {km_base} km. ¿Cuántos litros gasta en {km_nuevo} km?"

explicacion: |
  Más kilómetros recorridos, más combustible consumido: relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  dolares_base: random(1, 10)
  pesos_base: dolares_base * random(800, 1200)
  dolares_nuevo: random(5, 100)

respuesta: (pesos_base * dolares_nuevo) / dolares_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Si {dolares_base} dólar(es) equivalen a ${pesos_base}, ¿cuántos pesos equivalen a {dolares_nuevo} dólares (mismo tipo de cambio)?"

explicacion: |
  El tipo de cambio se mantiene constante: más dólares, más pesos en la
  misma proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 5)
  piezas_base: horas_base * random(10, 40)
  horas_nueva: random(2, 12)

respuesta: (piezas_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Una máquina produce {piezas_base} piezas en {horas_base} horas, a ritmo constante. ¿Cuántas piezas produce en {horas_nueva} horas?"

explicacion: |
  Más horas de producción a ritmo constante, más piezas: relación
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más horas trabajadas, más plata cobrada\" es un ejemplo de relación directamente proporcional."

explicacion: |
  Las dos magnitudes suben juntas: es directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "\"Más obreros trabajando, más días tarda en terminarse la obra\" es un ejemplo de relación directamente proporcional."

explicacion: |
  Acá pasa lo contrario: más obreros, MENOS días (terminan antes) — es
  una relación inversa, no directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más kilos de fruta comprados, más se paga\" es una relación directamente proporcional."

explicacion: |
  Las dos magnitudes (kilos y precio) aumentan juntas.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

enunciado: "¿Cómo se reconoce que un problema es de regla de tres directa?"
tipo: mc
opciones_explicitas:
  - "Las dos magnitudes aumentan (o disminuyen) juntas"
  - "Una magnitud siempre vale el doble de la otra"
  - "Los números del problema son todos pares"
respuesta: "Las dos magnitudes aumentan (o disminuyen) juntas"

explicacion: |
  Si al aumentar una también aumenta la otra (y al disminuir una también
  disminuye la otra), es directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (b * c) / a

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b * c
  - (a * b) / c

enunciado: "En la regla de tres directa {a}—{b} / {c}—x, ¿cuál es la fórmula correcta para x?"

explicacion: |
  x se calcula multiplicando los dos términos cruzados con la incógnita
  ({b} y {c}) y dividiendo por el tercero ({a}).
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "verificacion"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (b * c) / a
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien resuelta esta regla de tres? {a} es a {b} como {c} es a {mostrado}."

explicacion: |
  Se verifica volviendo a aplicar la fórmula x = (b × c) ÷ a.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

tipo: completar
enunciado: "Completá: {a} es a {b} como {c} es a ___."
respuestas_validas:
  - (b * c) / a

explicacion: |
  Se aplica la fórmula de la regla de tres directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  plantas_base: random(2, 6)
  litros_base: plantas_base * random(1, 3)
  plantas_nueva: random(3, 20)

respuesta: (litros_base * plantas_nueva) / plantas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Regar {plantas_base} plantas usa {litros_base} litros de agua. Manteniendo la misma cantidad por planta, ¿cuántos litros hacen falta para {plantas_nueva} plantas?"

explicacion: |
  Más plantas, más agua necesaria en la misma proporción: relación
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  entradas_base: random(2, 8)
  recaudado_base: entradas_base * random(500, 3000)
  entradas_nueva: random(5, 100)

respuesta: (recaudado_base * entradas_nueva) / entradas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Vendiendo {entradas_base} entradas se recaudaron ${recaudado_base}. Al mismo precio, ¿cuánto se recauda vendiendo {entradas_nueva} entradas?"

explicacion: |
  Más entradas vendidas, más dinero recaudado: relación directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "avanzado"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto_directa: (b * c) / a
  formula_inversa: (a * b) / c

restricciones:
  - correcto_directa != formula_inversa

respuesta: correcto_directa
tipo: mc
opciones_explicitas:
  - correcto_directa
  - formula_inversa

enunciado: "En una regla de tres DIRECTA, {a} es a {b} como {c} es a x. ¿Cuál de estos dos valores es x?"

explicacion: |
  La segunda opción usa la fórmula de la regla de tres inversa (que no
  aplica acá): hay que usar la fórmula directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 3)
  km_base: horas_base * random(60, 120)
  horas_nueva: random(4, 10)

respuesta: (km_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un tren recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  Misma idea que un auto: a velocidad constante, distancia y tiempo son
  directamente proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "avanzado"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(3, 9)
  b: random(3, 9)
  c: random(3, 9)

respuesta: (b * c) / a
tipo: input
tolerancia_abs: 0.01

enunciado: "{a} es a {b} como {c} es a x. ¿Cuánto vale x (puede no ser un número entero)?"

explicacion: |
  La regla de tres no siempre da un resultado entero: hay que aceptar
  también resultados con decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "orden"]

tipo: ordenar
enunciado: "Resolvé estas tres reglas de tres directas y ordenalas de menor a mayor resultado."
opciones_explicitas:
  - "2 es a 10 como 5 es a x"
  - "4 es a 8 como 3 es a x"
  - "3 es a 30 como 1 es a x"
respuesta_orden: ["3 es a 30 como 1 es a x", "4 es a 8 como 3 es a x", "2 es a 10 como 5 es a x"]

explicacion: |
  Primero se resuelve cada una (x=10, x=6, x=25) y recién ahí se ordenan.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  m2_base: random(5, 20)
  litros_base: random(1, 8)
  m2_nuevo: random(20, 100)

respuesta: (litros_base * m2_nuevo) / m2_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Se necesitan {litros_base} litros de pintura para {m2_base} m². ¿Cuántos litros hacen falta para {m2_nuevo} m²?"

explicacion: |
  Más superficie a pintar, más pintura necesaria en la misma proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una relación directamente proporcional, si se duplica una magnitud, la otra también se duplica."

explicacion: |
  Es la esencia de la proporcionalidad directa: la razón entre las dos
  magnitudes se mantiene siempre constante.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tres directa sirve para encontrar un valor desconocido cuando dos magnitudes son directamente proporcionales."

explicacion: |
  Es la idea central de todo el tema: aplicar la propiedad fundamental de
  la proporción a un problema concreto.
```

## Sección: secciones-conicas-circunferencia (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Qué son las secciones cónicas?"
tipo: mc
opciones_explicitas:
  - "Las curvas que se obtienen al cortar un cono con un plano: circunferencia, elipse, parábola e hipérbola"
  - "Otro nombre para los triángulos rectángulos"
  - "Un tipo de ecuación de primer grado"
respuesta: "Las curvas que se obtienen al cortar un cono con un plano: circunferencia, elipse, parábola e hipérbola"

explicacion: |
  Este módulo cubre sólo la circunferencia, la más simple de las
  cuatro.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Qué es una circunferencia, en términos de distancia?"
tipo: mc
opciones_explicitas:
  - "El conjunto de todos los puntos que están a la misma distancia (el radio) de un punto fijo (el centro)"
  - "El conjunto de puntos que están a distancia 0 del centro"
  - "Una recta que pasa por el centro"
respuesta: "El conjunto de todos los puntos que están a la misma distancia (el radio) de un punto fijo (el centro)"

explicacion: |
  Es la misma definición geométrica de siempre, ahora escrita como
  ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "completar"]

tipo: completar
enunciado: "Completá la ecuación canónica de la circunferencia: (x − h)² + (y − k)² = ___."
respuestas_validas:
  - "r²"
  - "r^2"

explicacion: |
  El lado derecho es el radio al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "¿De qué fórmula ya conocida sale la ecuación de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "De la fórmula de distancia entre dos puntos, igualada al radio y elevada al cuadrado"
  - "De la fórmula del área del círculo"
  - "No tiene relación con ninguna fórmula anterior"
respuesta: "De la fórmula de distancia entre dos puntos, igualada al radio y elevada al cuadrado"

explicacion: |
  √((x−h)² + (y−k)²) = r, elevado al cuadrado en ambos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([3, 4, 5, 6, 7, 8])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. En su ecuación x² + y² = ___, ¿qué número va del lado derecho?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  El lado derecho es siempre el radio al cuadrado, no el radio.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([3, 4, 5, 6, 7, 8, 9, 10])

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación x² + y² = {r * r}. ¿Cuál es su radio?"

pasos:
  - "√{r * r} = {r}"

explicacion: |
  El radio es la raíz cuadrada del número del lado derecho, no el
  número mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 10)
  k: random(1, 10)
  r: uno_de([3, 4, 5])

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación (x − {h})² + (y − {k})² = {r * r}. ¿Cuál es la abscisa (h) de su centro?"

explicacion: |
  Se lee directo del signo dentro del paréntesis: (x − h)² tiene h = {h}.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 10)
  k: random(1, 10)
  r: uno_de([3, 4, 5])

respuesta: 0 - h
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación (x + {h})² + (y − {k})² = {r * r}. ¿Cuál es la abscisa (h) de su centro?"

pasos:
  - "(x + {h})² es lo mismo que (x − (-{h}))²: el centro tiene h = -{h}"

explicacion: |
  Un '+' dentro del paréntesis corresponde a una coordenada NEGATIVA del
  centro — es un error común leerlo al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 8)
  k: random(1, 8)
  r: uno_de([3, 4, 5, 6])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene centro ({h}, {k}) y radio {r}. En su ecuación (x − {h})² + (y − {k})² = ___, ¿qué número va del lado derecho?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  Siempre el radio al cuadrado, sin importar dónde esté el centro.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  k: random(1, 6)
  cateto1: 3 * k
  cateto2: 4 * k

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {5 * k}. ¿El punto ({cateto1}, {cateto2}) está sobre esa circunferencia?"

explicacion: |
  {cateto1}² + {cateto2}² = {(cateto1 * cateto1) + (cateto2 * cateto2)},
  que es exactamente {5 * k}² = {(5 * k) * (5 * k)}: el punto cumple la
  ecuación, está sobre la circunferencia (terna pitagórica 3-4-5 escalada).
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([5, 10, 15])

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. ¿El punto (1, 1) está DENTRO de esa circunferencia?"

explicacion: |
  1² + 1² = 2, que es mucho menor que {r}² = {r * r}: el punto está
  dentro.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([2, 3])
  x: r + random(3, 6)

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. ¿El punto ({x}, 0) está FUERA de esa circunferencia?"

explicacion: |
  {x}² + 0² = {x * x}, que es mayor que {r}² = {r * r}: el punto está
  fuera.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es MENOR que r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Dentro de la circunferencia"
  - "Sobre la circunferencia"
  - "Fuera de la circunferencia"
respuesta: "Dentro de la circunferencia"

explicacion: |
  Está más cerca del centro que el propio radio.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es EXACTAMENTE igual a r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Sobre la circunferencia"
  - "Dentro de la circunferencia"
  - "Fuera de la circunferencia"
respuesta: "Sobre la circunferencia"

explicacion: |
  Cumple exactamente la ecuación: está a distancia r del centro, ni más
  ni menos.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es MAYOR que r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Fuera de la circunferencia"
  - "Dentro de la circunferencia"
  - "Sobre la circunferencia"
respuesta: "Fuera de la circunferencia"

explicacion: |
  Está más lejos del centro que el propio radio.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación x² + y² = r² es un caso particular de la ecuación canónica, cuando el centro está en el origen (0, 0)."

explicacion: |
  Con h = 0 y k = 0, (x−0)² + (y−0)² se simplifica a x² + y².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación de una circunferencia, el radio es la raíz cuadrada del número del lado derecho, no el número mismo."

explicacion: |
  El lado derecho es r² (radio al cuadrado), no r.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "Una circunferencia tiene ecuación x² + y² = 25. ¿Cuál es el error más común al leer su radio?"
tipo: mc
opciones_explicitas:
  - "Decir que el radio es 25, en vez de sacar la raíz cuadrada y decir que es 5"
  - "Decir que el centro está en (25, 0)"
  - "Pensar que no tiene centro"
respuesta: "Decir que el radio es 25, en vez de sacar la raíz cuadrada y decir que es 5"

explicacion: |
  25 es r², no r: el radio real es √25 = 5.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "ordenar"]

enunciado: "Ordená los pasos que llevan de la definición de circunferencia a su ecuación."
tipo: ordenar
opciones_explicitas:
  - "Elevar ambos lados al cuadrado para eliminar la raíz"
  - "Plantear que la distancia entre un punto (x, y) y el centro (h, k) es igual al radio r"
  - "Escribir esa distancia con la fórmula de distancia entre dos puntos"
respuesta_orden: ["Plantear que la distancia entre un punto (x, y) y el centro (h, k) es igual al radio r", "Escribir esa distancia con la fórmula de distancia entre dos puntos", "Elevar ambos lados al cuadrado para eliminar la raíz"]
explicacion: |
  El resultado final es (x−h)² + (y−k)² = r².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "En una ecuación como (x + 3)² + (y − 2)² = r², la coordenada h del centro es -3, no 3."

explicacion: |
  La forma canónica siempre resta h: (x + 3)² es (x − (−3))².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(-5, 5)
  k: random(-5, 5)
  r: uno_de([2, 3, 4])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere escribir la ecuación de una circunferencia con centro ({h}, {k}) y radio {r}. ¿Qué valor va del lado derecho de la ecuación?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  El signo de h y k no afecta al lado derecho, que siempre es r².
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "De las cuatro secciones cónicas (circunferencia, elipse, parábola, hipérbola), este módulo cubre únicamente la circunferencia."

explicacion: |
  Las otras tres quedan para cuando se necesiten en el mapa de temas.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Por qué la ecuación de la circunferencia usa (x−h)² + (y−k)² en vez de la raíz cuadrada de esa suma?"
tipo: mc
opciones_explicitas:
  - "Porque se elevaron ambos lados al cuadrado para eliminar la raíz de la fórmula de distancia"
  - "Porque las raíces cuadradas no existen en geometría analítica"
  - "Es sólo una convención sin motivo matemático"
respuesta: "Porque se elevaron ambos lados al cuadrado para eliminar la raíz de la fórmula de distancia"

explicacion: |
  Es más simple trabajar con la ecuación sin raíz, comparando cuadrados.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  k: random(1, 5)

respuesta: (13 * k) * (13 * k)
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia centrada en el origen pasa por el punto ({5 * k}, {12 * k}). ¿Qué número va del lado derecho de su ecuación x² + y² = ___?"

pasos:
  - "Radio: √(({5 * k})² + ({12 * k})²) = {13 * k}"
  - "Lado derecho: {13 * k}² = {(13 * k) * (13 * k)}"

explicacion: |
  Primero hay que hallar el radio (la distancia del punto al centro), y
  recién después elevarlo al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un punto (x, y) sobre una circunferencia centrada en el origen tiene coordenadas negativas, igual cumple x² + y² = r², porque los cuadrados eliminan el signo."

explicacion: |
  (-3)² da el mismo resultado que 3²: el signo desaparece al elevar al
  cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve escribir una circunferencia como ecuación algebraica?"
tipo: mc
opciones_explicitas:
  - "Para verificar con números si un punto está dentro, sobre o fuera de un área circular, sin necesidad de medir sobre un dibujo"
  - "Sólo sirve para calcular el área del círculo"
  - "Sólo aplica a circunferencias centradas en el origen"
respuesta: "Para verificar con números si un punto está dentro, sobre o fuera de un área circular, sin necesidad de medir sobre un dibujo"

explicacion: |
  Como el alcance de una señal, una zona de cobertura, o un radar.
```

## Sección: porcentaje (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

enunciado: "¿Qué es un porcentaje?"
tipo: mc
opciones_explicitas:
  - "Una razón con denominador 100"
  - "Cualquier número decimal"
  - "La mitad de un número"
respuesta: "Una razón con denominador 100"

explicacion: |
  p% significa "p de cada 100": es una fracción con denominador fijo
  en 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "calcular"]

variables:
  v: random(10, 90) * 10
  p: uno_de([10, 20, 25, 50])

respuesta: v * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {p}% de {v}?"

pasos:
  - "{v} × {p} ÷ 100 = {v * p / 100}"

explicacion: |
  Se multiplica el valor por el porcentaje y se divide por 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  v: random(20, 900)
  p: random(1, 99)

respuesta: v * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el {p}% de {v}?"

explicacion: |
  El procedimiento es el mismo, aunque el porcentaje no sea uno
  "redondo".
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50, 75])
  parte: t * p / 100

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Qué porcentaje de {t} representa {parte}?"

pasos:
  - "({parte} ÷ {t}) × 100 = {(parte / t) * 100}"

explicacion: |
  Se divide la parte por el total y se multiplica por 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "calcular"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50])
  parte: t * p / 100

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "{parte} es el {p}% de un número. ¿Cuál es ese número?"

pasos:
  - "{parte} × 100 ÷ {p} = {(parte * 100) / p}"

explicacion: |
  Se multiplica la parte por 100 y se divide por el porcentaje.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

enunciado: "¿A qué fracción equivale el 25%?"
tipo: mc
opciones_explicitas:
  - "1/4"
  - "1/2"
  - "1/3"
respuesta: "1/4"

explicacion: |
  25% = 25/100, que simplificado da 1/4.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

variables:
  p: random(1, 99)

respuesta: p / 100
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {p}% en decimal?"

explicacion: |
  Se divide el porcentaje por 100 (se corre la coma dos lugares a la
  izquierda).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "conversion"]

variables:
  centesimos: random(1, 99)
  n: centesimos / 100

respuesta: centesimos
tipo: input
tolerancia_abs: 0.01

enunciado: "¿A qué porcentaje equivale {n}?"

explicacion: |
  Se multiplica el decimal por 100 (se corre la coma dos lugares a la
  derecha).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "aumento"]

variables:
  v: random(20, 900)
  p: uno_de([5, 10, 15, 20, 25])

respuesta: v * (1 + p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Aumentá {v} en un {p}%. ¿Cuánto queda?"

pasos:
  - "{v} × (1 + {p}/100) = {v} × {1 + p / 100} = {v * (1 + p / 100)}"

explicacion: |
  Aumentar en p% es multiplicar por (1 + p/100).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "descuento"]

variables:
  v: random(20, 900)
  p: uno_de([5, 10, 15, 20, 25])

respuesta: v * (1 - p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Descontá un {p}% a {v}. ¿Cuánto queda?"

pasos:
  - "{v} × (1 - {p}/100) = {v} × {1 - p / 100} = {v * (1 - p / 100)}"

explicacion: |
  Descontar p% es multiplicar por (1 − p/100).
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "descuento"]

variables:
  v: random(100, 900)
  p1: uno_de([10, 20])
  p2: uno_de([10, 20])

respuesta: v * (1 - p1 / 100) * (1 - p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "A {v} se le aplica primero un {p1}% de descuento, y después otro {p2}% de descuento (sobre el nuevo precio). ¿Cuánto queda?"

pasos:
  - "{v} × (1 - {p1}/100) × (1 - {p2}/100) = {v * (1 - p1 / 100) * (1 - p2 / 100)}"

explicacion: |
  El segundo descuento se aplica sobre el precio YA descontado, no sobre
  el original.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "aumento"]

variables:
  v: random(100, 900)
  p1: uno_de([10, 20])
  p2: uno_de([10, 20])

respuesta: v * (1 + p1 / 100) * (1 + p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "{v} recibe primero un aumento del {p1}%, y después otro aumento del {p2}% (sobre el nuevo valor). ¿Cuánto queda?"

explicacion: |
  El segundo aumento se aplica sobre el valor ya aumentado.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(100, 900)

respuesta: precio * 1.21
tipo: input
tolerancia_abs: 0.01

enunciado: "Un producto cuesta ${precio} sin IVA. Con un IVA del 21%, ¿cuál es el precio final?"

explicacion: |
  El precio final es el precio original más el 21% de aumento.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(100, 900)
  p: uno_de([10, 15, 20, 25, 30])

respuesta: precio * (1 - p / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una remera cuesta ${precio} y está en oferta con {p}% de descuento. ¿Cuánto sale ahora?"

explicacion: |
  El precio de oferta es el precio original menos el porcentaje de
  descuento.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  venta: random(1000, 9000)
  comision: uno_de([2, 5, 8, 10])

respuesta: venta * comision / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "Un vendedor cobra {comision}% de comisión sobre cada venta. Si vendió ${venta}, ¿cuánto cobra de comisión?"

explicacion: |
  La comisión es un porcentaje calculado sobre el monto vendido.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "problema"]

variables:
  cuenta: random(1000, 9000)

respuesta: cuenta * 0.1
tipo: input
tolerancia_abs: 0.01

enunciado: "La cuenta de un restaurante da ${cuenta}. Dejando un 10% de propina, ¿cuánto es la propina?"

explicacion: |
  Calcular una propina es calcular el porcentaje de un valor.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 100% de cualquier cantidad es esa misma cantidad completa."

explicacion: |
  100% = 100/100 = 1: multiplicar por 1 no cambia nada.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 50% de cualquier cantidad es la mitad de esa cantidad."

explicacion: |
  50% = 50/100 = 1/2.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0% de cualquier cantidad es 0."

explicacion: |
  0% = 0/100 = 0: no queda nada.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25, 50])
  correcto: v * p / 100

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - v * p
  - v / p

enunciado: "¿Cuál es el {p}% de {v}?"

explicacion: |
  Las otras opciones se olvidan de dividir por 100, o confunden la
  operación.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "verificacion"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25, 50])
  correcto: v * p / 100
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El {p}% de {v} es {mostrado}."

explicacion: |
  Se vuelve a calcular (valor × porcentaje ÷ 100) y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  t: random(2, 20) * 10
  p: uno_de([10, 20, 25, 50, 75])
  parte: t * p / 100

tipo: completar
enunciado: "Completá: el ___% de {t} es {parte}."
respuestas_validas:
  - p

explicacion: |
  Se despeja el porcentaje: (parte ÷ total) × 100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(500, 2000)
  descuento_alto: 30
  descuento_bajo: 20

respuesta: (precio * (1 - descuento_alto / 100)) < (precio * (1 - descuento_bajo / 100))
tipo: vf

enunciado: "¿Es cierto que un descuento del {descuento_alto}% deja un precio final más barato que un descuento del {descuento_bajo}%, sobre el mismo precio de ${precio}?"

explicacion: |
  A mayor porcentaje de descuento, menor el precio final.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "avanzado"
  tags: ["porcentaje", "vocabulario"]

variables:
  v: random(100, 900)
  p: uno_de([10, 20, 25])

respuesta: falso
tipo: vf

enunciado: "Si a {v} se le aumenta un {p}% y después se le descuenta ese mismo {p}%, el resultado vuelve a ser {v}."

explicacion: |
  No vuelve al original: el aumento y el descuento se calculan sobre
  valores distintos (el segundo, sobre el ya aumentado), así que el
  resultado final queda un poco por debajo de {v}.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje"]

variables:
  v: random(50, 500)

respuesta: v * 1.5
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es el 150% de {v}?"

explicacion: |
  Un porcentaje mayor a 100% da un resultado mayor que el valor original
  — 150% es "una vez y media" el valor.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "orden"]

tipo: ordenar
enunciado: "Calculá estos porcentajes de 200, y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "10% de 200"
  - "50% de 200"
  - "25% de 200"
  - "5% de 200"
respuesta_orden: ["5% de 200", "10% de 200", "25% de 200", "50% de 200"]

explicacion: |
  A mayor porcentaje del mismo valor, mayor el resultado: 10, 20, 50,
  100.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "intermedio"
  tags: ["porcentaje", "problema"]

variables:
  precio: random(500, 3000)
  p: uno_de([10, 20, 30])

respuesta: precio * p / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "Un producto de ${precio} tiene {p}% de descuento. ¿Cuántos pesos te ahorrás (no el precio final, el ahorro)?"

explicacion: |
  El ahorro es, directamente, el porcentaje de descuento calculado sobre
  el precio original.
```

```
metadata:
  materia: "matematicas"
  tema: "porcentaje"
  nivel: "basico"
  tags: ["porcentaje", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Porcentaje, fracción con denominador 100 y decimal son tres formas distintas de escribir la misma cantidad."

explicacion: |
  25%, 25/100 y 0,25 representan exactamente el mismo valor.
```

