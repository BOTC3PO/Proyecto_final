# Matemática — Sistemas de dos ecuaciones (cuestionario, 30 preguntas VBLang)

> Tema: `A5` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma carpeta.

Cada sistema se arma a partir de una solución (x, y) elegida al azar, así
que siempre tiene solución entera exacta. Para "es solución del sistema"
(verificar las DOS ecuaciones a la vez) se usa una suma de cuadrados de
los restos — el DSL no tiene `and`, pero una suma de cuadrados da 0 si y
sólo si los dos restos son 0, así que reemplaza al "y" lógico sin
necesitarlo.

---

### 1 — Sustitución: hallar x

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(2, 5)
  x_sol: random(1, 15)
  k: random(1, 10)
  y_sol: m * x_sol + k
  a: random(2, 6)
  c: a * x_sol + y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; {a}x + y = {c}. ¿Cuánto vale x?"

pasos:
  - "Reemplazar y en la segunda ecuación: {a}x + ({m}x + {k}) = {c}"
  - "Resolver: {a + m}x + {k} = {c} → x = {(c - k) / (a + m)}"

explicacion: |
  Se reemplaza la y ya despejada en la otra ecuación, y queda una
  ecuación de una sola incógnita.
```

### 2 — Sustitución: hallar y (mismo sistema)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(2, 5)
  x_sol: random(1, 15)
  k: random(1, 10)
  y_sol: m * x_sol + k
  a: random(2, 6)
  c: a * x_sol + y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; {a}x + y = {c}. ¿Cuánto vale y?"

explicacion: |
  Una vez hallado x, se reemplaza en y = {m}x + {k} para obtener y.
```

### 3 — Sustitución: hallar x (otro sistema)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(1, 4)
  x_sol: random(1, 20)
  k: random(-10, 10)
  y_sol: m * x_sol + k
  b: random(2, 6)
  c: random(1, 5) * x_sol + b * y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; x + {b}y = {c}. ¿Cuánto vale x?"

explicacion: |
  Reemplazar y = {m}x + {k} en la segunda ecuación reduce el sistema a
  una ecuación de una sola incógnita.
```

### 4 — Sustitución: hallar y (mismo sistema)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(1, 4)
  x_sol: random(1, 20)
  k: random(-10, 10)
  y_sol: m * x_sol + k
  b: random(2, 6)
  c: random(1, 5) * x_sol + b * y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; x + {b}y = {c}. ¿Cuánto vale y?"

explicacion: |
  y = {m}x + {k}, con el x ya encontrado.
```

### 5 — Igualación: hallar x

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["igualacion"]

variables:
  m1: random(5, 8)
  x_sol: random(1, 15)
  k1: random(1, 15)
  m2: random(1, 4)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale x?"

pasos:
  - "Igualar: {m1}x + {k1} = {m2}x + {k2}"
  - "Resolver: {m1 - m2}x = {k2 - k1} → x = {(k2 - k1) / (m1 - m2)}"

explicacion: |
  Como las dos ecuaciones ya tienen y despejada, se igualan directamente
  entre sí.
```

### 6 — Igualación: hallar y (mismo sistema)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["igualacion"]

variables:
  m1: random(5, 8)
  x_sol: random(1, 15)
  k1: random(1, 15)
  m2: random(1, 4)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones.
```

### 7 — Igualación: hallar x (otro sistema)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["igualacion"]

variables:
  m1: random(1, 3)
  x_sol: random(1, 20)
  k1: random(-15, 15)
  m2: random(4, 8)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale x?"

explicacion: |
  {m1}x + {k1} = {m2}x + {k2}, y se despeja x igual que cualquier
  ecuación de primer grado.
```

### 8 — Igualación: hallar y (mismo sistema)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["igualacion"]

variables:
  m1: random(1, 3)
  x_sol: random(1, 20)
  k1: random(-15, 15)
  m2: random(4, 8)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale y?"

explicacion: |
  y = {m1}x + {k1}, con el x ya encontrado.
```

### 9 — Eliminación: coeficientes ya opuestos, hallar x

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(2, 8)
  c1: a1 * x_sol + y_sol
  a2: random(2, 8)
  c2: a2 * x_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + y = {c1}; {a2}x − y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Los coeficientes de y ya son opuestos (+1 y −1): sumar las dos ecuaciones"
  - "{a1 + a2}x = {c1 + c2} → x = {(c1 + c2) / (a1 + a2)}"

explicacion: |
  Sumando las dos ecuaciones completas, la y se cancela.
```

### 10 — Eliminación: coeficientes ya opuestos, hallar y

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(2, 8)
  c1: a1 * x_sol + y_sol
  a2: random(2, 8)
  c2: a2 * x_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + y = {c1}; {a2}x − y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones
  para hallar y.
```

### 11 — Eliminación: hay que multiplicar una ecuación, hallar x

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(2, 6)
  b1: random(2, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 6)
  c2: a2 * x_sol + b1 * y_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b1 - 1}y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Restar la segunda ecuación a la primera para que los coeficientes de y (que difieren en exactamente 1) se reduzcan a uno solo: {a1 - a2}x + y = {c1 - c2}"

explicacion: |
  Cuando los coeficientes de una letra no son iguales ni opuestos, se
  resta directamente si eso ya cancela parte del trabajo, o se multiplica
  una ecuación entera para emparejarlos.
```

### 12 — Eliminación: hay que multiplicar una ecuación, hallar y

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(2, 6)
  b1: random(2, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 6)
  c2: a2 * x_sol + b1 * y_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b1 - 1}y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones
  para hallar y.
```

### 13 — Eliminación multiplicando las dos ecuaciones, hallar x

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  a1: random(2, 5)
  b1: random(2, 5)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 5)
  b2: random(2, 5)
  c2: a2 * x_sol + b2 * y_sol

restricciones:
  - (a1 * b2 - a2 * b1) != 0

respuesta: (c1 * b2 - c2 * b1) / (a1 * b2 - a2 * b1)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Multiplicar la primera por {b2} y la segunda por {b1} para igualar los coeficientes de y, y restar"

explicacion: |
  Cuando ningún coeficiente coincide directamente, se multiplican las dos
  ecuaciones enteras por los números que hagan falta antes de sumar o
  restar.
```

### 14 — Eliminación multiplicando las dos ecuaciones, hallar y

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  a1: random(2, 5)
  b1: random(2, 5)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 5)
  b2: random(2, 5)
  c2: a2 * x_sol + b2 * y_sol

restricciones:
  - (a1 * b2 - a2 * b1) != 0

respuesta: (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Se despeja y con el mismo método, eliminando ahora la x.
```

### 15 — Problema en contexto: dos entradas de cine, hallar precio de adulto

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  adulto_sol: random(5, 20)
  nino_sol: random(2, 10)
  na: random(2, 5)
  nn: random(2, 5)
  total1: na * adulto_sol + nn * nino_sol
  na2: random(1, 4)
  nn2: random(1, 4)
  total2: na2 * adulto_sol + nn2 * nino_sol

restricciones:
  - (na * nn2 - na2 * nn) != 0

respuesta: adulto_sol
tipo: input
tolerancia_abs: 0

enunciado: "{na} entradas de adulto y {nn} de niño cuestan {total1} en total. {na2} entradas de adulto y {nn2} de niño cuestan {total2}. ¿Cuánto cuesta una entrada de adulto?"

pasos:
  - "Plantear el sistema: {na}·a + {nn}·n = {total1}; {na2}·a + {nn2}·n = {total2}, y resolver por eliminación"

explicacion: |
  Mismo procedimiento de eliminación, aplicado a un problema con nombres
  en vez de x e y.
```

### 16 — Problema en contexto: dos entradas de cine, hallar precio de niño

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  adulto_sol: random(5, 20)
  nino_sol: random(2, 10)
  na: random(2, 5)
  nn: random(2, 5)
  total1: na * adulto_sol + nn * nino_sol
  na2: random(1, 4)
  nn2: random(1, 4)
  total2: na2 * adulto_sol + nn2 * nino_sol

restricciones:
  - (na * nn2 - na2 * nn) != 0

respuesta: nino_sol
tipo: input
tolerancia_abs: 0

enunciado: "{na} entradas de adulto y {nn} de niño cuestan {total1} en total. {na2} entradas de adulto y {nn2} de niño cuestan {total2}. ¿Cuánto cuesta una entrada de niño?"

explicacion: |
  Una vez hallado el precio de adulto, se reemplaza en cualquiera de las
  dos ecuaciones para despejar el de niño.
```

### 17 — Problema en contexto: dos números

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["problema"]

variables:
  x_sol: random(5, 30)
  y_sol: random(1, 20)
  suma: x_sol + y_sol
  resta: x_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Cuál es el número mayor?"

pasos:
  - "x + y = {suma}; x − y = {resta}. Sumando las dos: 2x = {suma + resta} → x = {(suma + resta) / 2}"

explicacion: |
  Es el caso más directo de eliminación: los coeficientes de y ya son
  opuestos.
```

### 18 — Problema en contexto: dos números, el menor

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["problema"]

variables:
  x_sol: random(5, 30)
  y_sol: random(1, 20)
  suma: x_sol + y_sol
  resta: x_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Cuál es el número menor?"

explicacion: |
  Restando las dos ecuaciones en vez de sumarlas se cancela la x: 2y =
  {suma - resta} → y = {(suma - resta) / 2}.
```

### 19 — Verificar solución: caso verdadero o falso

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol
  error_x: uno_de([0, 0, 1, -1])
  error_y: uno_de([0, 0, 1, -1])
  val_x: x_sol + error_x
  val_y: y_sol + error_y

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Tiene que cumplir las DOS ecuaciones a la vez — si falla en cualquiera
  de las dos, no es solución del sistema.
```

### 20 — Verificar solución: otro caso

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol
  error_x: uno_de([0, 0, 2, -2])
  error_y: uno_de([0, 0, 1, -1])
  val_x: x_sol + error_x
  val_y: y_sol + error_y

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Se reemplaza x e y en las dos ecuaciones y se comprueba que las dos
  dan verdadero.
```

### 21 — Verificar solución: cumple una pero no la otra

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(1, 6)
  b1: random(1, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 6)
  b2: random(1, 6)
  c2: a2 * x_sol + b2 * y_sol
  val_x: x_sol
  val_y: y_sol + 1

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Cumplir sólo una de las dos ecuaciones no alcanza: acá x sí sirve, pero
  y está corrida en 1, así que no es solución del sistema completo.
```

### 22 — Verificar solución: caso verdadero directo

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol

respuesta: (((a1 * x_sol + b1 * y_sol - c1) ^ 2) + ((a2 * x_sol + b2 * y_sol - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({x_sol}, {y_sol}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Es exactamente el par con el que se armó el sistema, así que cumple
  las dos ecuaciones.
```

### 23 — Verificar solución: eliminación con contexto

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "problema", "verdadero_falso"]

variables:
  x_sol: random(5, 25)
  y_sol: random(1, 15)
  suma: x_sol + y_sol
  resta: x_sol - y_sol
  error: uno_de([0, 0, 3, -3])
  val_x: x_sol + error
  val_y: suma - val_x

respuesta: ((val_x - val_y - resta) ^ 2) == 0
tipo: vf

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Es correcto que los números sean {val_x} y {val_y}?"

explicacion: |
  Los dos números tienen que cumplir a la vez que suman {suma} y que
  restan {resta}.
```

### 24 — Concepto: qué es la solución de un sistema

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La solución de un sistema de dos ecuaciones es cualquier par (x, y) que cumpla al menos una de las dos ecuaciones."

explicacion: |
  Tiene que cumplir LAS DOS al mismo tiempo, no alcanza con una sola.
```

### 25 — Concepto: rectas paralelas

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "casos_especiales", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las dos ecuaciones de un sistema representan rectas paralelas, el sistema no tiene solución."

explicacion: |
  Dos rectas paralelas nunca se cruzan, así que no hay ningún par (x, y)
  que cumpla las dos ecuaciones a la vez.
```

### 26 — Concepto: infinitas soluciones

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "casos_especiales", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las dos ecuaciones de un sistema son, en el fondo, la misma recta escrita de otra forma, hay infinitas soluciones."

explicacion: |
  Cualquier punto de esa recta cumple las dos ecuaciones a la vez, porque
  son la misma condición repetida.
```

### 27 — Concepto: sustitución, en qué ecuación reemplazar

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "sustitucion", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En el método de sustitución, conviene reemplazar la variable despejada en la misma ecuación de la que se despejó."

explicacion: |
  Hay que reemplazarla en la OTRA ecuación — en la misma no aporta
  información nueva (queda una igualdad siempre verdadera, tipo 0=0).
```

### 28 — Elegir el método más directo: sustitución

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Sustitución"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema y = 4x + 3; 2x + y = 15, ¿qué método es más directo?"

explicacion: |
  Ya hay una variable despejada en una de las dos ecuaciones — conviene
  sustituirla directamente en la otra.
```

### 29 — Elegir el método más directo: igualación

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Igualación"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema y = 3x − 1; y = x + 5, ¿qué método es más directo?"

explicacion: |
  Las dos ecuaciones ya tienen y despejada — conviene igualarlas
  directamente entre sí.
```

### 30 — Elegir el método más directo: eliminación

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Eliminación"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema 3x + 2y = 16; 3x − 2y = 4, ¿qué método es más directo?"

explicacion: |
  Ninguna variable está despejada, pero los coeficientes de y ya son
  opuestos — sumando las dos ecuaciones se cancela directamente.
```
