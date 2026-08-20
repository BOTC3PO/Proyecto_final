# Matemática — Mínimo Común Múltiplo (MCM) (cuestionario, 24 preguntas VBLang)

> Tema: `N5` (mitad). Ver `teoria.md` en esta misma carpeta. Usa los
> builtins `mcm(a, b)` y `mcd(a, b)` del DSL (confirmados en
> `packages/vblang/src/validator/builtin-signatures.ts`).

---

### 1 — Qué es el MCM

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

enunciado: "¿Qué es el Mínimo Común Múltiplo (MCM) de dos números?"
tipo: mc
opciones_explicitas:
  - "El menor número (mayor que 0) que es múltiplo de los dos a la vez"
  - "El mayor número que es divisor de los dos a la vez"
  - "El producto de los dos números"
respuesta: "El menor número (mayor que 0) que es múltiplo de los dos a la vez"

explicacion: |
  Se buscan los múltiplos en común de los dos números, y se toma el más
  chico (sin contar el 0).
```

### 2 — Calcular el MCM (números chicos)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Se buscan los múltiplos de {a} y de {b} hasta encontrar el primero que
  coincide en las dos listas.
```

### 3 — Calcular el MCM (números más grandes)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(10, 40)
  b: random(10, 40)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Con números más grandes conviene usar el atajo del MCD en vez de listar
  múltiplos.
```

### 4 — MCM usando la fórmula del MCD

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)
  divisor_comun: mcd(a, b)

respuesta: (a * b) / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "El MCD de {a} y {b} es {divisor_comun}. Usando la fórmula MCM = (a × b) ÷ MCD, ¿cuál es el MCM?"

pasos:
  - "({a} × {b}) ÷ {divisor_comun} = {a * b} ÷ {divisor_comun} = {(a * b) / divisor_comun}"

explicacion: |
  Es el atajo más rápido: multiplicar los dos números y dividir por su
  MCD.
```

### 5 — Identificar un múltiplo común

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  candidato: a * b

respuesta: verdadero
tipo: vf

enunciado: "¿Es {candidato} un múltiplo común de {a} y {b}?"

explicacion: |
  {candidato} es {a} × {b}, así que es múltiplo de los dos a la vez
  (aunque no sea necesariamente el MCM: podría haber uno más chico).
```

### 6 — MCM de números primos entre sí

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(3, 15)
  b: a + 1

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b} (dos números consecutivos, que no comparten factores)?"

pasos:
  - "Como no comparten ningún factor (MCD = 1), el MCM es directamente el producto: {a} × {b} = {a * b}"

explicacion: |
  Cuando dos números son primos entre sí (su MCD es 1), su MCM es
  directamente el producto de los dos.
```

### 7 — El MCM de un número y sí mismo

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {n} y {n}?"

explicacion: |
  El menor múltiplo en común de un número consigo mismo es el propio
  número.
```

### 8 — El MCM nunca es menor que el mayor de los dos números

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM de dos números nunca puede ser menor que el más grande de los dos."

explicacion: |
  Un múltiplo de un número nunca puede ser menor que ese número (salvo el
  0); como el MCM es múltiplo de los dos, no puede ser menor que el más
  grande.
```

### 9 — Elegir el MCM correcto

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(3, 15)
  b: random(3, 15)
  correcto: mcm(a, b)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - correcto + a

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  El producto a×b es un múltiplo común, pero no siempre es el MÍNIMO — sólo
  coincide con el MCM cuando los dos números son primos entre sí.
```

### 10 — Común denominador para sumar fracciones

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar dos fracciones con denominadores {a} y {b}, conviene usar como común denominador el MCM de los dos. ¿Cuál es ese común denominador?"

explicacion: |
  El MCM de los denominadores es el común denominador más chico posible
  para sumar o restar las fracciones.
```

### 11 — Problema: colectivos que coinciden en la parada

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(4, 20)
  b: random(4, 20)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo pasa por una parada cada {a} minutos, y otro cada {b} minutos. Si los dos pasaron juntos a las 0, ¿en qué minuto vuelven a pasar juntos por primera vez?"

explicacion: |
  El primer momento en que coinciden de nuevo es el MCM de los dos
  intervalos.
```

### 12 — Problema: luces que titilan

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 15)
  b: random(2, 15)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Una luz titila cada {a} segundos y otra cada {b} segundos. Si las dos titilaron juntas en el segundo 0, ¿en qué segundo van a volver a titilar juntas?"

explicacion: |
  Es el mismo tipo de problema que los colectivos: el primer encuentro es
  el MCM de los dos ritmos.
```

### 13 — MCM de tres números

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm"]

variables:
  a: random(2, 10)
  b: random(2, 10)
  c: random(2, 10)

respuesta: mcm(mcm(a, b), c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a}, {b} y {c}?"

pasos:
  - "Se calcula de a dos: MCM({a}, {b}) = {mcm(a, b)}, y después MCM({mcm(a, b)}, {c}) = {mcm(mcm(a, b), c)}"

explicacion: |
  El MCM de tres números se calcula de a pares: primero entre dos, y
  después ese resultado con el tercero.
```

### 14 — Verificar un MCM (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "verificacion"]

variables:
  a: random(3, 15)
  b: random(3, 15)
  correcto: mcm(a, b)
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Es correcto decir que el MCM de {a} y {b} es {mostrado}?"

explicacion: |
  Hay que verificar que {mostrado} sea múltiplo de los dos números, y que
  no haya ningún múltiplo común más chico.
```

### 15 — MCM de dos primos distintos

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  primos: [2, 3, 5, 7, 11, 13]
  p1: uno_de(primos)
  p2: uno_de(primos)

restricciones:
  - p1 != p2

respuesta: p1 * p2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {p1} y {p2} (dos números primos distintos)?"

explicacion: |
  Como no comparten ningún factor, el MCM es directamente el producto de
  los dos.
```

### 16 — El MCM siempre es múltiplo de los dos números

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM de dos números siempre es múltiplo de los dos, además de ser el menor de los múltiplos en común."

explicacion: |
  Es la propia definición: el MCM tiene que ser múltiplo de ambos números
  para contar como múltiplo común.
```

### 17 — Completar el múltiplo común que falta

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)

tipo: completar
enunciado: "Nombrá un múltiplo común de {a} y {b} (no hace falta que sea el MCM, alcanza con que sea múltiplo de los dos)."
respuestas_validas:
  - a * b
  - mcm(a, b)

explicacion: |
  El producto de los dos números siempre es un múltiplo común válido,
  aunque no sea siempre el más chico.
```

### 18 — MCM cuando un número es múltiplo del otro

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(2, 30)
  k: random(2, 9)
  b: a * k

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}, sabiendo que {b} es múltiplo de {a}?"

explicacion: |
  Cuando un número es múltiplo del otro, el más grande de los dos ya es
  el MCM: no hace falta calcular nada más.
```

### 19 — Elegir cuál NO es múltiplo común

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  comun: a * b
  no_comun: comun + 1

respuesta: no_comun
tipo: mc
opciones_explicitas:
  - comun
  - mcm(a, b)
  - no_comun

enunciado: "¿Cuál de estos tres números NO es múltiplo común de {a} y {b}?"

explicacion: |
  {no_comun} le sobra 1 respecto de un múltiplo común real: eso rompe la
  divisibilidad exacta con al menos uno de los dos números.
```

### 20 — El MCM no depende del orden

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "propiedades"]

variables:
  a: random(3, 20)
  b: random(3, 20)

respuesta: (mcm(a, b) == mcm(b, a))
tipo: vf

enunciado: "¿Es cierto que el MCM de {a} y {b} da lo mismo que el MCM de {b} y {a}?"

explicacion: |
  El orden en que se comparan los dos números no cambia el resultado: el
  MCM es conmutativo (igual que el MCD).
```

### 21 — Problema: sumar dos fracciones con denominador común

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)
  comun: mcm(a, b)

respuesta: comun / a
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar una fracción con denominador {a} con otra de denominador {b}, se usa el común denominador {comun} (el MCM de los dos). ¿Por cuánto hay que multiplicar el numerador de la primera fracción?"

pasos:
  - "{comun} ÷ {a} = {comun / a}: ese es el factor que hay que usar para pasar la primera fracción al nuevo denominador."

explicacion: |
  Al cambiar de denominador, el numerador se multiplica por el mismo
  factor que el denominador (para no cambiar el valor de la fracción).
```

### 22 — Elegir el MCM correcto (con factorización)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "factorizacion"]

variables:
  a: uno_de([4, 6, 8, 9])
  b: uno_de([4, 6, 8, 9])
  correcto: mcm(a, b)

restricciones:
  - a != b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - mcd(a, b)

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Conviene factorizar los dos números en primos y quedarse con TODOS los
  factores, usando el mayor exponente de cada uno.
```

### 23 — MCD y MCM, la relación entre los dos

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)

respuesta: (mcd(a, b) * mcm(a, b) == a * b)
tipo: vf

enunciado: "¿Es cierto que el MCD de {a} y {b}, multiplicado por el MCM de {a} y {b}, da lo mismo que {a} × {b}?"

explicacion: |
  Es la fórmula que conecta MCD y MCM: MCD × MCM siempre da el producto de
  los dos números originales.
```

### 24 — Qué representa el MCM (cierre)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM sirve para saber, entre otras cosas, cuándo dos sucesos que se repiten con ritmos distintos vuelven a coincidir por primera vez."

explicacion: |
  Es la aplicación práctica más común del MCM: encontrar el primer punto
  de encuentro entre dos ciclos distintos.
```
