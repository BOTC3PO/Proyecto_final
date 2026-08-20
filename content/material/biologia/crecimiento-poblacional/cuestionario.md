# Biología — Crecimiento poblacional (cuestionario, 26 preguntas VBLang)

> Tema: `B1` (puente Álgebra → Biología). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Evaluar el modelo exponencial: bacterias que se duplican

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["modelo_exponencial"]

variables:
  p0: random(50, 500)
  t: random(1, 6)

respuesta: p0 * 2 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Un cultivo de bacterias empieza con {p0} y se duplica cada hora. ¿Cuántas hay después de {t} horas?"

explicacion: |
  P(t) = {p0}×2^{t} = {p0 * 2 ^ t}.
```

### 2 — Evaluar el modelo exponencial: se triplica

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["modelo_exponencial"]

variables:
  p0: random(10, 100)
  t: random(1, 5)

respuesta: p0 * 3 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una población de insectos empieza con {p0} y se triplica cada generación. ¿Cuántos hay después de {t} generaciones?"

explicacion: |
  P(t) = {p0}×3^{t} = {p0 * 3 ^ t}.
```

### 3 — Tiempo de duplicación

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  p0: random(10, 50)
  n: random(1, 5)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {p0} se duplica cada período. ¿Cuántos períodos tardan en llegar a {p0 * (2 ^ n)}?"

pasos:
  - "{p0}×2^t = {p0 * (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce el factor de duplicación acumulado.
```

### 4 — Tasa neta de crecimiento: natalidad menos mortalidad

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["tasa_neta"]

variables:
  natalidad: random(20, 50)
  mortalidad: random(5, 19)

respuesta: natalidad - mortalidad
tipo: input
tolerancia_abs: 0

enunciado: "En una población, la tasa de natalidad es {natalidad} por mil, y la de mortalidad es {mortalidad} por mil. ¿Cuál es la tasa neta de crecimiento (por mil)?"

explicacion: |
  Tasa neta = natalidad − mortalidad.
```

### 5 — Tasa neta negativa: población en declive

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["tasa_neta", "verdadero_falso"]

variables:
  natalidad: random(5, 15)
  mortalidad: random(16, 30)

respuesta: ((natalidad - mortalidad) < 0)
tipo: vf

enunciado: "Natalidad {natalidad} por mil, mortalidad {mortalidad} por mil. ¿Está esta población en declive (tasa neta negativa)?"

explicacion: |
  Con mortalidad mayor que natalidad, la tasa neta da negativa — la
  población decrece.
```

### 6 — Cantidad de individuos añadidos según el tamaño de la población

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["tasa_vs_cantidad"]

variables:
  poblacion: random(10, 100) * 1000
  tasa_por_mil: random(5, 40)

respuesta: (poblacion * tasa_por_mil) / 1000
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {poblacion} crece a una tasa de {tasa_por_mil} por mil. ¿Cuántos individuos se suman?"

explicacion: |
  {poblacion}×{tasa_por_mil}/1000 = {(poblacion * tasa_por_mil) / 1000}.
```

### 7 — Concepto: misma tasa, distinta cantidad

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Dos poblaciones con la misma tasa de crecimiento (el mismo porcentaje) pueden sumar una cantidad de individuos muy distinta, si su tamaño de partida es distinto."

explicacion: |
  Una población de 1.000.000 con 2% suma 20.000; una de 100 con el mismo
  2% suma sólo 2 — misma tasa, cantidades muy distintas.
```

### 8 — Concepto: el modelo exponencial no tiene techo

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial simple (P=P₀rᵗ) predice un crecimiento sin ningún límite, sin importar cuánto tiempo pase."

explicacion: |
  Es justamente su limitación: en la realidad, ningún ambiente sostiene
  eso para siempre.
```

### 9 — Concepto: capacidad de carga

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de carga (K) es la cantidad máxima de individuos que un ambiente puede sostener de forma estable."

explicacion: |
  Es el límite real que el modelo exponencial simple no tiene en
  cuenta.
```

### 10 — Concepto: crecimiento logístico, forma de "S"

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico del crecimiento logístico tiene forma de 'S': crece casi como una exponencial al principio, y se aplana al acercarse a la capacidad de carga."

explicacion: |
  Es la versión más realista del crecimiento poblacional, a diferencia
  del modelo exponencial puro.
```

### 11 — Concepto: lejos de K, se parece a la exponencial

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una población está muy por debajo de la capacidad de carga, su crecimiento se parece mucho al modelo exponencial simple."

explicacion: |
  El freno por escasez de recursos recién se nota cuando la población
  ya está cerca del límite K.
```

### 12 — Concepto: factores limitantes

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Escasez de alimento o espacio, depredación, enfermedad"
tipo: mc
opciones_explicitas:
  - "Escasez de alimento o espacio, depredación, enfermedad"
  - "La cantidad de individuos que nacieron el año pasado"
  - "El color de la especie"

enunciado: "¿Cuáles son ejemplos típicos de factores limitantes del crecimiento poblacional?"

explicacion: |
  Son las causas reales por las que una población deja de crecer
  exponencialmente cerca de su capacidad de carga.
```

### 13 — Concepto: migración afecta la tasa neta

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Además de nacimientos y muertes, la migración (entrada y salida de individuos) también afecta la tasa neta de crecimiento de una población."

explicacion: |
  Tasa neta = natalidad − mortalidad ± migración.
```

### 14 — Verificación con error: modelo exponencial

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  p0: random(50, 500)
  t: random(1, 5)
  real: p0 * 2 ^ t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un cultivo de {p0} bacterias se duplica cada hora. ¿Es correcto que después de {t} horas haya {propuesto}?"

explicacion: |
  El valor correcto es {p0}×2^{t} = {real}.
```

### 15 — Aplicar: identificar r a partir de dos conteos

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["modelo_exponencial"]

variables:
  p0: random(20, 100)
  r: random(2, 4)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Una población pasa de {p0} a {p0 * r} en un solo período. ¿Cuál es el factor de crecimiento r?"

explicacion: |
  r = población nueva / población anterior = {p0 * r}/{p0} = {r}.
```

### 16 — Concepto: r=1 significa población estable

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el factor de crecimiento r=1, la población se mantiene estable (ni crece ni decrece)."

explicacion: |
  P(t)=P₀×1ᵗ=P₀ para cualquier t — no cambia.
```

### 17 — Concepto: r menor a 1 significa declive

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el factor de crecimiento r está entre 0 y 1 (por ejemplo, r=0.9), la población decrece con el tiempo."

explicacion: |
  Es el mismo caso de decaimiento exponencial ya visto en
  `../../matematica/familias-exponencial-logaritmica/`.
```

### 18 — Aplicar: población después de varios períodos con tasa porcentual

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["modelo_exponencial", "problema"]

variables:
  p0: random(100, 1000)
  t: random(1, 3)

respuesta: p0 * 2 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una colonia de {p0} individuos crece un 100% cada período (o sea, se duplica). ¿Cuántos hay después de {t} períodos?"

explicacion: |
  Crecer 100% es lo mismo que duplicarse: r=2.
```

### 19 — Concepto: crecimiento exponencial en la naturaleza es temporal

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la naturaleza, el crecimiento estrictamente exponencial de una población suele ser sólo una fase temporal (por ejemplo, al colonizar un ambiente nuevo con recursos abundantes), no algo que dure para siempre."

explicacion: |
  Tarde o temprano, los factores limitantes empiezan a actuar.
```

### 20 — Aplicar: comparar dos poblaciones con distinta tasa

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  p0: random(50, 200)
  t: random(2, 5)
  r1: 2
  r2: 3

respuesta: ((p0 * r2 ^ t) > (p0 * r1 ^ t))
tipo: vf

enunciado: "Dos poblaciones parten de {p0}: una con r=2 (se duplica) y otra con r=3 (se triplica) cada período. ¿Es mayor la de r=3 después de {t} períodos?"

explicacion: |
  Un factor de crecimiento mayor siempre termina superando a uno menor,
  a igualdad de punto de partida.
```

### 21 — Concepto: capacidad de carga puede cambiar

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de carga de un ambiente no es un número fijo para siempre — puede cambiar si cambian los recursos disponibles (por ejemplo, una sequía la reduce)."

explicacion: |
  K depende de las condiciones reales del ambiente, no es una constante
  universal de la especie.
```

### 22 — Concepto: relación con ecuaciones diferenciales

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial de crecimiento poblacional es la misma solución de la ecuación diferencial dP/dt=kP ya vista en `../../matematica/ecuaciones-diferenciales/`, aplicada a una población en vez de un capital o una muestra radiactiva."

explicacion: |
  Distintos fenómenos, misma estructura matemática de fondo.
```

### 23 — Aplicar: tiempo para triplicarse

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  p0: random(10, 50)
  n: random(1, 4)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {p0} se triplica cada período. ¿Cuántos períodos tardan en llegar a {p0 * (3 ^ n)}?"

explicacion: |
  Se reconoce el factor 3^{n} acumulado.
```

### 24 — Concepto: no todas las especies crecen igual de rápido

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Distintas especies tienen distintas tasas de crecimiento — las bacterias se duplican en minutos u horas, mientras que poblaciones de mamíferos grandes tardan años en duplicarse."

explicacion: |
  El modelo matemático es el mismo, pero r y la escala de tiempo cambian
  muchísimo según la especie.
```

### 25 — Verificación con error: tasa neta

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  natalidad: random(20, 50)
  mortalidad: random(5, 19)
  real: natalidad - mortalidad
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Natalidad {natalidad} por mil, mortalidad {mortalidad} por mil. ¿Es correcto que la tasa neta sea {propuesto} por mil?"

explicacion: |
  La tasa neta correcta es natalidad − mortalidad = {real}.
```

### 26 — Concepto: cierre — dos modelos, dos escalas de tiempo

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial simple sirve para predicciones de corto plazo o poblaciones lejos de su capacidad de carga; para el largo plazo (o cerca de K), el modelo logístico da una descripción más realista."

explicacion: |
  Es el resumen central del tema: ningún modelo es "el correcto"
  siempre — depende de la escala y el contexto.
```
