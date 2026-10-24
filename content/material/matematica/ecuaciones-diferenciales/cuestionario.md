# Matemática — Ecuaciones diferenciales: modelos básicos de crecimiento/decaimiento (cuestionario, 26 preguntas VBLang)

> Tema: `A17` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Evaluar el modelo de crecimiento

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

### 2 — Evaluar el modelo de crecimiento: otro caso

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

### 3 — Evaluar el modelo de decaimiento

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

### 4 — Evaluar decaimiento radiactivo (contexto)

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

### 5 — Verificar razón de crecimiento constante

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

### 6 — Verificar razón de crecimiento: caso con error

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

### 7 — Vida media: hallar el tiempo (potencia de 2)

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

### 8 — Tiempo de duplicación (potencia de 2)

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

### 9 — Tiempo con base 10 (usando log10)

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

### 10 — Concepto: qué es una ecuación diferencial

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

### 11 — Concepto: la solución de dy/dt=ky es exponencial

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

### 12 — Concepto: crecimiento proporcional NO es lineal

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

### 13 — Concepto: k positivo es crecimiento

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

### 14 — Concepto: k negativo es decaimiento

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

### 15 — Concepto: y nunca cruza 0 en el decaimiento

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

### 16 — Concepto: vida media es constante

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

### 17 — Aplicar: interés compuesto como ecuación diferencial

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

### 18 — Verificación con error: evaluar el modelo

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

### 19 — Concepto: identificar y₀ en el modelo

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

### 20 — Concepto: identificar la base del modelo

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

### 21 — Aplicar: enfriamiento (decaimiento, contexto distinto)

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

### 22 — Concepto: dos fenómenos distintos, mismo modelo matemático

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

### 23 — Concepto: relación con derivada e integral

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

### 24 — Aplicar: hallar cuántos períodos para superar un umbral

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

### 25 — Concepto: comparar dos modelos con distinta tasa

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

### 26 — Concepto: el modelo exponencial no tiene "techo"

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
