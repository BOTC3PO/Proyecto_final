# Matemática — Razón (cuestionario, 22 preguntas VBLang)

> Tema: `N9` (mitad). Ver `teoria.md` en esta misma carpeta. Usa el
> builtin `mcd(a, b)` del DSL para simplificar.

---

### 1 — Qué es una razón

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

enunciado: "¿Qué es una razón entre dos cantidades?"
tipo: mc
opciones_explicitas:
  - "La comparación de las dos cantidades por cociente (a:b)"
  - "La suma de las dos cantidades"
  - "La diferencia entre las dos cantidades"
respuesta: "La comparación de las dos cantidades por cociente (a:b)"

explicacion: |
  Una razón compara dos cantidades dividiendo una por la otra.
```

### 2 — Escribir una razón a partir de un contexto

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon"]

variables:
  varones: random(5, 30)
  mujeres: random(5, 30)

respuesta: varones
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {varones} varones y {mujeres} mujeres. ¿Cuál es el primer término de la razón varones:mujeres?"

explicacion: |
  El primer término de la razón es la primera cantidad mencionada, en el
  mismo orden en que se pide.
```

### 3 — Simplificar una razón

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  a: divisor_comun * random(2, 9)
  b: divisor_comun * random(2, 9)
  simplificador: mcd(a, b)

restricciones:
  - a != b

respuesta: a / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar la razón {a}:{b} al máximo, ¿cuál queda el primer término?"

pasos:
  - "MCD({a}, {b}) = {simplificador}. {a} ÷ {simplificador} = {a / simplificador}"

explicacion: |
  Simplificar una razón es dividir los dos términos por su MCD, igual que
  con las fracciones.
```

### 4 — Razones equivalentes

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Son equivalentes las razones {a}:{b} y {c}:{d}?"

explicacion: |
  Dos razones son equivalentes si representan la misma relación,
  verificable con el producto cruzado.
```

### 5 — Razones NO equivalentes

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Son equivalentes las razones {a}:{b} y {c}:{d}?"

explicacion: |
  El producto cruzado no coincide: no representan la misma relación.
```

### 6 — Diferencia entre razón y fracción

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre una razón y una fracción?"
tipo: mc
opciones_explicitas:
  - "La fracción compara una parte con el todo; la razón compara dos cantidades que pueden ser independientes"
  - "No hay ninguna diferencia, son exactamente lo mismo"
  - "Una razón siempre tiene denominador 100"
respuesta: "La fracción compara una parte con el todo; la razón compara dos cantidades que pueden ser independientes"

explicacion: |
  Se escriben igual, pero el significado de cada término es distinto.
```

### 7 — Problema: velocidad como razón

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  distancia: random(60, 400)
  horas: random(2, 8)

respuesta: distancia / horas
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {distancia} km en {horas} horas. ¿Cuál es la razón entre distancia y tiempo (la velocidad, en km/h)?"

explicacion: |
  La velocidad es una razón: distancia recorrida por cada unidad de
  tiempo.
```

### 8 — Problema: densidad como razón

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  masa: random(20, 500)
  volumen: random(2, 20)

respuesta: masa / volumen
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene {masa} gramos de masa en {volumen} cm³ de volumen. ¿Cuál es la razón entre masa y volumen (la densidad, en g/cm³)?"

explicacion: |
  La densidad es otra razón de la vida diaria: masa por cada unidad de
  volumen.
```

### 9 — Problema: escala de un mapa

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  cm_mapa: random(1, 9)
  km_real: cm_mapa * random(10, 100)

respuesta: km_real / cm_mapa
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mapa, {cm_mapa} cm representan {km_real} km reales. ¿Cuántos km representa cada cm (la escala del mapa)?"

explicacion: |
  La escala de un mapa es la razón entre la distancia dibujada y la
  distancia real.
```

### 10 — Elegir la razón equivalente correcta

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)

respuesta: a * k
tipo: mc
opciones_explicitas:
  - a * k
  - a * k + 1
  - a + k

enunciado: "¿Cuál es el primer término de una razón equivalente a {a}:{b}, con segundo término {b * k}?"

explicacion: |
  Si el segundo término se multiplicó por {k}, el primero también tiene
  que multiplicarse por {k}.
```

### 11 — Elegir cuál NO es equivalente

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)
  equivalente: a * k
  no_equivalente: equivalente + 1

respuesta: no_equivalente
tipo: mc
opciones_explicitas:
  - equivalente
  - no_equivalente

enunciado: "Con segundo término {b * k}, ¿cuál de estos dos primeros términos NO forma una razón equivalente a {a}:{b}?"

explicacion: |
  Sólo {a} × {k} = {equivalente} mantiene la misma relación.
```

### 12 — Completar el término que falta

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}:{b} = ___:{b * k} (razones equivalentes)."
respuestas_validas:
  - a * k

explicacion: |
  El término que falta guarda la misma proporción: se multiplica {a} por
  el mismo {k} que multiplicó al segundo término.
```

### 13 — Simplificar otra razón

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  a: divisor_comun * random(2, 9)
  b: divisor_comun * random(2, 9)
  simplificador: mcd(a, b)

restricciones:
  - a != b

respuesta: b / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {a}:{b} al máximo, ¿cuál queda el segundo término?"

explicacion: |
  Se divide también el segundo término por el mismo MCD.
```

### 14 — Razón irreducible

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  a: random(1, 20)
  b: a + 1

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}:{b} una razón irreducible (que ya no se puede simplificar más)?"

explicacion: |
  Como {a} y {b} son consecutivos, su MCD es 1: no se pueden simplificar.
```

### 15 — Comparar dos razones

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "avanzado"
  tags: ["razon", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: vf

enunciado: "¿Es la razón {a}:{b} mayor que la razón {c}:{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}."

explicacion: |
  Se compara igual que fracciones: a/b es mayor que c/d si a×d es mayor
  que b×c.
```

### 16 — Problema: aprobados y desaprobados

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "problema"]

variables:
  aprobados: random(10, 30)
  desaprobados: random(3, 15)

respuesta: aprobados
tipo: input
tolerancia_abs: 0

enunciado: "En un examen, {aprobados} alumnos aprobaron y {desaprobados} desaprobaron. ¿Cuál es el primer término de la razón aprobados:desaprobados?"

explicacion: |
  Se escribe en el orden que pide el enunciado: primero aprobados,
  después desaprobados.
```

### 17 — Verificar equivalencia (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {c_mostrado}:{d} equivalente a {a}:{b}?"

explicacion: |
  Se verifica con el producto cruzado.
```

### 18 — Razón entre tres cantidades

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón también puede comparar más de dos cantidades a la vez, como 2:3:5."

explicacion: |
  No siempre son dos términos: una razón puede tener varios, comparando
  todas las cantidades entre sí al mismo tiempo (por ejemplo, para
  repartir algo en varias partes con proporciones distintas).
```

### 19 — Problema: mezcla de ingredientes

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  agua: random(2, 5)
  jugo_concentrado: random(1, 3)

respuesta: agua
tipo: input
tolerancia_abs: 0

enunciado: "Una receta usa {agua} partes de agua por cada {jugo_concentrado} parte(s) de jugo concentrado. ¿Cuál es el primer término de esa razón (agua:concentrado)?"

explicacion: |
  Las recetas de cocina suelen expresarse como razones entre ingredientes.
```

### 20 — Ordenar razones (mismo segundo término)

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "orden"]

tipo: ordenar
enunciado: "Ordená estas razones de menor a mayor (todas tienen el mismo segundo término)."
opciones_explicitas:
  - "5:8"
  - "1:8"
  - "6:8"
  - "3:8"
respuesta_orden: ["1:8", "3:8", "5:8", "6:8"]

explicacion: |
  Con el mismo segundo término, alcanza con ordenar el primero.
```

### 21 — La razón se puede escribir como fracción

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón a:b se puede escribir también como la fracción a/b."

explicacion: |
  Son dos formas distintas de escribir la misma comparación por cociente.
```

### 22 — Qué es una razón (cierre)

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón compara dos cantidades por cociente, y esas cantidades pueden ser de magnitudes distintas (como km y horas)."

explicacion: |
  A diferencia de una fracción, los dos términos de una razón no
  necesitan ser "parte de lo mismo": la velocidad compara distancia con
  tiempo, dos magnitudes distintas.
```
