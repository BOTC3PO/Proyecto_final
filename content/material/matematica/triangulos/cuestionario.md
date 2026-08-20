# Matemática — Triángulos: clasificación y suma de ángulos internos (cuestionario, 34 preguntas VBLang)

> Tema: `GO2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un triángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

enunciado: "¿Qué es un triángulo?"
tipo: mc
opciones_explicitas:
  - "Un polígono de 3 lados y 3 ángulos internos"
  - "Un polígono de 4 lados"
  - "Cualquier figura con ángulos"
respuesta: "Un polígono de 3 lados y 3 ángulos internos"

explicacion: |
  Es el polígono más simple posible.
```

### 2 — Triángulo equilátero

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo equilátero?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 lados iguales"
  - "El que tiene 2 lados iguales"
  - "El que tiene sus 3 lados distintos"
respuesta: "El que tiene sus 3 lados iguales"

explicacion: |
  Los 3 lados miden exactamente lo mismo.
```

### 3 — Triángulo isósceles

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo isósceles?"
tipo: mc
opciones_explicitas:
  - "El que tiene exactamente 2 lados iguales"
  - "El que tiene sus 3 lados iguales"
  - "El que no tiene ningún lado igual a otro"
respuesta: "El que tiene exactamente 2 lados iguales"

explicacion: |
  El tercer lado es distinto de los otros dos.
```

### 4 — Triángulo escaleno

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo escaleno?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 lados con medidas distintas entre sí"
  - "El que tiene sus 3 lados iguales"
  - "El que tiene exactamente 2 lados iguales"
respuesta: "El que tiene sus 3 lados con medidas distintas entre sí"

explicacion: |
  Ningún par de lados coincide en su medida.
```

### 5 — Triángulo acutángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo acutángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 ángulos internos agudos"
  - "El que tiene un ángulo recto"
  - "El que tiene un ángulo obtuso"
respuesta: "El que tiene sus 3 ángulos internos agudos"

explicacion: |
  Los tres ángulos son menores a 90°.
```

### 6 — Triángulo rectángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo rectángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene un ángulo interno recto (90°)"
  - "El que tiene sus 3 ángulos agudos"
  - "El que tiene sus 3 lados iguales"
respuesta: "El que tiene un ángulo interno recto (90°)"

explicacion: |
  Los otros dos ángulos son necesariamente agudos.
```

### 7 — Triángulo obtusángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo obtusángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene un ángulo interno obtuso (mayor a 90°)"
  - "El que tiene un ángulo recto"
  - "El que tiene sus 3 ángulos agudos"
respuesta: "El que tiene un ángulo interno obtuso (mayor a 90°)"

explicacion: |
  Sólo puede haber UN ángulo obtuso en un triángulo.
```

### 8 — Clasificar por lados: equilátero

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  l: random(3, 20)

enunciado: "Un triángulo tiene sus tres lados de {l} cm, {l} cm y {l} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Equilátero"
  - "Isósceles"
  - "Escaleno"
respuesta: "Equilátero"

explicacion: |
  Los tres lados miden lo mismo.
```

### 9 — Clasificar por lados: isósceles

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  l: random(3, 20)
  distinto: l + random(1, 10)

enunciado: "Un triángulo tiene lados de {l} cm, {l} cm y {distinto} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Isósceles"
  - "Equilátero"
  - "Escaleno"
respuesta: "Isósceles"

explicacion: |
  Exactamente dos lados miden lo mismo.
```

### 10 — Clasificar por lados: escaleno

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  a: random(3, 10)
  b: a + random(1, 5)
  c: b + random(1, 5)

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Escaleno"
  - "Isósceles"
  - "Equilátero"
respuesta: "Escaleno"

explicacion: |
  Los tres lados tienen medidas distintas entre sí.
```

### 11 — La suma de los ángulos internos es siempre 180°

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "suma_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier triángulo, sin importar su forma o tamaño, la suma de sus 3 ángulos internos es siempre 180°."

explicacion: |
  Es la propiedad central de este módulo.
```

### 12 — Calcular el tercer ángulo de un triángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

variables:
  a: random(30, 80)
  b: random(30, 80)

respuesta: 180 - (a + b)
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene dos ángulos internos de {a}° y {b}°. ¿Cuánto mide el tercero?"

pasos:
  - "180 − ({a} + {b}) = {180 - (a + b)}°"

explicacion: |
  Se resta la suma de los dos ángulos conocidos a 180°.
```

### 13 — Calcular el tercer ángulo (otro caso)

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

variables:
  a: 90
  b: random(20, 70)

respuesta: 180 - (a + b)
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de {a}° y otro de {b}°. ¿Cuánto mide el tercero?"

pasos:
  - "180 − ({a} + {b}) = {180 - (a + b)}°"

explicacion: |
  Igual procedimiento, sin importar si uno de los ángulos ya es recto.
```

### 14 — Verificar la suma de tres ángulos dados (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos", "verificacion"]

variables:
  a: random(30, 80)
  b: random(30, 80)
  c_correcto: 180 - (a + b)
  error: uno_de([0, 0, 0, 5, -5])
  c_mostrado: c_correcto + error

respuesta: (a + b + c_mostrado == 180)
tipo: vf

enunciado: "¿Pueden ser estos los tres ángulos internos de un triángulo? {a}°, {b}° y {c_mostrado}°."

explicacion: |
  Se suman los tres y se verifica que den exactamente 180°.
```

### 15 — Clasificar por ángulos dados: acutángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(50, 70)
  b: random(50, 70)
  c: 180 - (a + b)

restricciones:
  - c > 0
  - c < 90

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Cómo se clasifica según sus ángulos?"
tipo: mc
opciones_explicitas:
  - "Acutángulo"
  - "Rectángulo"
  - "Obtusángulo"
respuesta: "Acutángulo"

explicacion: |
  Los tres ángulos son menores a 90°.
```

### 16 — Clasificar por ángulos dados: obtusángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(100, 150)
  b: random(10, 30)
  c: 180 - (a + b)

restricciones:
  - c > 0
  - c < 90

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Cómo se clasifica según sus ángulos?"
tipo: mc
opciones_explicitas:
  - "Obtusángulo"
  - "Acutángulo"
  - "Rectángulo"
respuesta: "Obtusángulo"

explicacion: |
  Tiene un ángulo (el de {a}°) mayor a 90°.
```

### 17 — Un triángulo rectángulo tiene los otros dos ángulos agudos

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "En un triángulo rectángulo, los otros dos ángulos (además del de 90°) son necesariamente agudos."

explicacion: |
  Como los tres suman 180° y uno ya usa 90°, a los otros dos les quedan
  90° para repartirse entre ambos: ninguno puede llegar a 90° ni
  superarlo.
```

### 18 — Sólo puede haber un ángulo obtuso por triángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo no puede tener dos ángulos obtusos a la vez."

explicacion: |
  Si dos ángulos ya superaran 90° cada uno, la suma de esos dos solos ya
  pasaría los 180° disponibles para el triángulo completo.
```

### 19 — El ángulo exterior es igual a la suma de los dos internos no adyacentes

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "angulo_exterior"]

variables:
  a: random(30, 80)
  b: random(30, 80)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene dos ángulos internos de {a}° y {b}°. ¿Cuánto mide el ángulo exterior correspondiente al tercer vértice (el opuesto a esos dos)?"

pasos:
  - "{a} + {b} = {a + b}°"

explicacion: |
  El ángulo exterior es igual a la suma de los dos ángulos internos que
  no son adyacentes a él.
```

### 20 — Verificar el ángulo exterior con el suplemento

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "angulo_exterior"]

variables:
  a: random(30, 80)
  b: random(30, 80)
  c: 180 - (a + b)

restricciones:
  - c > 0

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene ángulos internos de {a}°, {b}° y {c}°. ¿Es cierto que el ángulo exterior del vértice de {c}° (su suplemento, 180° − {c}°) es igual a {a}° + {b}°?"

pasos:
  - "180 − {c} = {180 - c}. {a} + {b} = {a + b}."

explicacion: |
  Ambos caminos dan el mismo resultado: es la misma propiedad vista
  desde dos ángulos distintos (el suplemento del interior, o la suma de
  los otros dos internos).
```

### 21 — Desigualdad triangular: sí forma un triángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular"]

respuesta: verdadero
tipo: vf

enunciado: "¿Pueden formar un triángulo los lados 3 cm, 4 cm y 5 cm?"

pasos:
  - "3 + 4 = 7 > 5. También 3 + 5 = 8 > 4, y 4 + 5 = 9 > 3."

explicacion: |
  La suma de cualquier par de lados supera al tercero: sí forman un
  triángulo.
```

### 22 — Desigualdad triangular: NO forma un triángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular"]

respuesta: falso
tipo: vf

enunciado: "¿Pueden formar un triángulo los lados 2 cm, 3 cm y 10 cm?"

pasos:
  - "2 + 3 = 5, que NO supera a 10."

explicacion: |
  Los dos lados cortos, juntos, no alcanzan a "cerrar" la figura contra
  el lado más largo.
```

### 23 — Qué dice la desigualdad triangular

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular", "vocabulario"]

enunciado: "¿Qué condición tienen que cumplir 3 longitudes para poder formar un triángulo?"
tipo: mc
opciones_explicitas:
  - "La suma de cualquier par de lados tiene que ser mayor que el tercero"
  - "Los tres lados tienen que ser iguales"
  - "La suma de los tres lados tiene que dar 180"
respuesta: "La suma de cualquier par de lados tiene que ser mayor que el tercero"

explicacion: |
  Si no se cumple, los lados "no llegan a cerrar" la figura.
```

### 24 — Clasificación combinada: isósceles rectángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_lados", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo puede clasificarse a la vez por sus lados y por sus ángulos: por ejemplo, \"isósceles rectángulo\" (2 lados iguales, y un ángulo de 90°)."

explicacion: |
  Las dos clasificaciones (por lados y por ángulos) son independientes
  entre sí, así que se pueden combinar.
```

### 25 — Todo triángulo equilátero es también acutángulo

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_lados", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Todo triángulo equilátero es también acutángulo (sus tres ángulos internos miden 60° cada uno)."

explicacion: |
  180° ÷ 3 = 60° para cada ángulo, si los tres son iguales — y 60° es
  agudo.
```

### 26 — Problema: ángulos de un triángulo isósceles

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "problema"]

variables:
  base: random(20, 100)

respuesta: (180 - base) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo isósceles tiene su ángulo desigual (el de la base) midiendo {base}°. Como los otros dos ángulos son iguales entre sí, ¿cuánto mide cada uno?"

pasos:
  - "(180 − {base}) ÷ 2 = {(180 - base) / 2}°"

explicacion: |
  Se resta el ángulo conocido de 180° y se reparte el resto entre los
  dos ángulos iguales.
```

### 27 — Completar: suma de ángulos internos

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "completar"]

tipo: completar
enunciado: "Completá: la suma de los 3 ángulos internos de cualquier triángulo es siempre ___°."
respuestas_validas:
  - 180

explicacion: |
  Es la propiedad más importante del módulo.
```

### 28 — Completar: ángulo exterior

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "completar"]

variables:
  a: random(30, 70)
  b: random(30, 70)

tipo: completar
enunciado: "Completá: si dos ángulos internos de un triángulo miden {a}° y {b}°, el ángulo exterior del tercer vértice mide ___°."
respuestas_validas:
  - a + b

explicacion: |
  El ángulo exterior es igual a la suma de los dos ángulos internos no
  adyacentes.
```

### 29 — Elegir el triángulo con ángulos válidos

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

enunciado: "¿Cuál de estos tríos de ángulos SÍ puede corresponder a un triángulo real?"
tipo: mc
opciones_explicitas:
  - "60°, 60°, 60°"
  - "90°, 90°, 90°"
  - "100°, 100°, 100°"
respuesta: "60°, 60°, 60°"

explicacion: |
  Sólo 60+60+60=180 da la suma correcta; los otros dos superan 180° en
  total.
```

### 30 — Ordenar triángulos según cantidad de lados iguales

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "orden"]

tipo: ordenar
enunciado: "Ordená estos tipos de triángulo de MENOS a MÁS lados iguales entre sí: equilátero, escaleno, isósceles."
opciones_explicitas:
  - "Isósceles"
  - "Equilátero"
  - "Escaleno"
respuesta_orden: ["Escaleno", "Isósceles", "Equilátero"]

explicacion: |
  Escaleno: 0 pares de lados iguales. Isósceles: exactamente 1 par.
  Equilátero: los 3 lados iguales entre sí.
```

### 31 — Problema: verificar si un triángulo es rectángulo por sus ángulos

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(20, 70)
  b: 90 - a
  c: 90

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Es un triángulo rectángulo?"

pasos:
  - "{a} + {b} + {c} = {a + b + c}. Tiene un ángulo de 90°."

explicacion: |
  Suma 180° (verificación necesaria) y tiene un ángulo de exactamente
  90°: es rectángulo.
```

### 32 — Distinguir un triángulo escaleno de uno isósceles

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  a: random(4, 15)
  b: a
  c: a + random(1, 8)

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Es escaleno o isósceles?"
tipo: mc
opciones_explicitas:
  - "Isósceles"
  - "Escaleno"
respuesta: "Isósceles"

explicacion: |
  Dos de sus lados ({a} cm y {b} cm) son iguales.
```

### 33 — El triángulo es el polígono más simple

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El triángulo es el polígono con menor cantidad de lados posible (no existe un polígono de 2 lados)."

explicacion: |
  Con sólo 2 segmentos no se puede cerrar una figura: 3 es el mínimo.
```

### 34 — Cierre: dos clasificaciones independientes

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo triángulo se puede clasificar a la vez por sus lados (equilátero, isósceles, escaleno) y por sus ángulos (acutángulo, rectángulo, obtusángulo), porque son dos criterios independientes."

explicacion: |
  Es el resumen central del módulo, junto con la suma de 180° de los
  ángulos internos.
```
