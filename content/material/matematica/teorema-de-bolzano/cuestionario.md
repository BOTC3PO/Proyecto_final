# Matematica — teorema de bolzano (cuestionario, 20 preguntas VBLang)

> Tema: `matematica/teorema-de-bolzano`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "continuidad", "signos"]

variables:
  a: random(1, 5)
  b: random(6, 10)
  f_a: random(-10, -1)
  f_b: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Si una función continua $f$ cumple $f({a}) = {f_a}$ y $f({b}) = {f_b}$, ¿se puede garantizar que existe al menos un cero en el intervalo $[{a}, {b}]$?"

explicacion: |
  Dado que $f$ es continua en $[{a}, {b}]$ y $f(a)$ y $f(b)$ tienen signos opuestos (uno negativo y otro positivo), el Teorema de Bolzano garantiza la existencia de al menos un $c \in (a, b)$ tal que $f(c) = 0$.
```

### 2 — pregunta 2

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "gráfico", "interpretación"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Si graficamos una función continua desde $x={a}$ hasta $x={b}$, y los puntos extremos están a distinta altura respecto al eje horizontal (uno arriba y otro abajo), la curva debe cortar el eje X."

explicacion: |
  Correcto. Geométricamente, una línea continua que une un punto por debajo del eje con uno por encima debe intersectar el eje en algún punto intermedio.
```

### 3 — pregunta 3

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "discontinuidad", "contraejemplo"]

variables:
  a: random(0, 2)
  b: random(3, 5)

respuesta: falso
tipo: vf

enunciado: "El Teorema de Bolzano asegura la existencia de un cero en $[{a}, {b}]$ incluso si la función tiene una discontinuidad de salto en el interior del intervalo, siempre que los extremos tengan signos opuestos."

explicacion: |
  Falso. La continuidad en el intervalo cerrado es una hipótesis indispensable. Si hay una discontinuidad, la función podría "saltar" por encima del eje sin tocarlo.
```

### 4 — pregunta 4

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "polinomios", "cuadrática"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  coef: random(1, 2)
  c_const: random(-10, -1)

respuesta: verdadero
tipo: vf

enunciado: "Para $f(x) = {coef}x^2 + {c_const}$, evaluada en $[{a}, {b}]$, si $f(a)$ y $f(b)$ tienen signos opuestos, existe un cero en ese intervalo."

explicacion: |
  Verdadero. Los polinomios son funciones continuas en todo $\mathbb{R}$. Por lo tanto, se cumple la hipótesis de continuidad y, sumada la condición de signos opuestos, Bolzano aplica.
```

### 5 — pregunta 5

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "análisis", "hipótesis"]

variables:
  a: random(0, 2)
  b: random(3, 5)

respuesta: "continuidad"
tipo: completar

enunciado: "Si una función tiene $f({a}) < 0$ y $f({b}) > 0$, pero no se puede asegurar que existe un cero en $({a}, {b})$, la hipótesis que probablemente falla es la _______ de la función."

respuestas_validas:
  - "continuidad"
  - "continua"

explicacion: |
  La continuidad es la hipótesis clave. Sin ella, la función puede presentar saltos que eviten el cruce por el eje X.
```

### 6 — pregunta 6

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "signos", "lógica"]

variables:
  a: random(1, 4)
  b: random(5, 8)
  f_a: random(-10, -1)

respuesta: "positivo"
tipo: completar

enunciado: "Para garantizar un cero en $[{a}, {b}]$ mediante Bolzano, si $f({a}) = {f_a}$ (negativo), entonces $f({b})$ debe ser _______."

respuestas_validas:
  - "positivo"
  - "mayor que cero"
  - "> 0"

explicacion: |
  Deben tener signos opuestos. Si $f(a)$ es negativo, $f(b)$ debe ser positivo para que el producto sea menor que cero.
```

### 7 — pregunta 7

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "no aplicación", "condiciones"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: random(1, 5)
  f_b: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$ y $f({a}) = {f_a}$, $f({b}) = {f_b}$ (ambos positivos), el Teorema de Bolzano garantiza un cero."

explicacion: |
  Falso. Ambos valores positivos no garantizan que la función cruce el eje. Podría permanecer siempre por encima del eje X.
```

### 8 — pregunta 8

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "búsqueda", "intervalos"]

variables:
  a: random(0, 2)
  b: random(3, 5)
  f_a: -random(10, 20)
  f_b: random(10, 20)

respuesta: "({a}, {b})"
tipo: completar

enunciado: "Si $f$ es continua, $f({a}) = {f_a}$ y $f({b}) = {f_b}$, el cero $c$ se encuentra en el intervalo abierto _______."

respuestas_validas:
  - "({a}, {b})"
  - "({b}, {a})"
  - "entre {a} y {b}"

explicacion: |
  El teorema garantiza que $c$ está estrictamente entre $a$ y $b$, es decir, $c \in (a, b)$.
```

### 9 — pregunta 9

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "lineal", "aplicación"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  m: random(1, 3)
  c: random(-10, -1)

respuesta: verdadero
tipo: vf

enunciado: "La función $f(x) = {m}x + {c}$ es continua. Si $f({a})$ y $f({b})$ tienen signos opuestos, existe un cero único en $({a}, {b})$."

explicacion: |
  Verdadero. Las funciones lineales son continuas. Al tener signos opuestos en los extremos, cruzan el eje exactamente una vez.
```

### 10 — pregunta 10

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "TVI", "teoría"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "caso particular"
tipo: completar

enunciado: "El Teorema de Bolzano es un _______ del Teorema del Valor Intermedio."

respuestas_validas:
  - "caso particular"
  - "caso_particular"
  - "específico"

explicacion: |
  Bolzano se enfoca específicamente en el valor intermedio $k=0$. El TVI es más general para cualquier $k$ entre $f(a)$ y $f(b)$.
```

### 11 — pregunta 11

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "error", "mito"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$ y tiene un cero en ese intervalo, entonces $f(a)$ y $f(b)$ necesariamente tienen signos opuestos."

explicacion: |
  Falso. La función podría tocar el eje y volver al mismo lado (ej. $f(x)=x^2$ en $[-1, 1]$ tiene cero en 0, pero $f(-1)=f(1)=1 > 0$). La implicación inversa no es cierta.
```

### 12 — pregunta 12

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "máximo", "forma"]

variables:
  a: random(-2, -1)
  b: random(1, 2)
  f_a: -random(1, 5)
  f_b: -random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f$ es continua en $[{a}, {b}]$, $f({a}) < 0$, $f({b}) < 0$, y $f$ tiene un máximo local positivo en el interior, Bolzano garantiza un cero."

explicacion: |
  Falso. Bolzano requiere signos opuestos en los extremos. Aunque haya un cero (porque sube y baja), la condición de *hipótesis* de Bolzano ($f(a)f(b)<0$) no se cumple, por lo que no podemos usar *este* teorema para garantizarlo directamente (aunque el cero exista por otros motivos).
```

### 13 — pregunta 13

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "lógica", "variables"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: "signos"
tipo: completar

enunciado: "La conclusión de Bolzano depende críticamente de los _______ de los valores en los extremos."

respuestas_validas:
  - "signos"
  - "signos opuestos"
  - "signos distintos"

explicacion: |
  La condición clave es que los signos sean distintos (opuestos).
```

### 14 — pregunta 14

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "unicidad", "concepto"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: falso
tipo: vf

enunciado: "El Teorema de Bolzano garantiza que el cero encontrado en $({a}, {b})$ es único."

explicacion: |
  Falso. Bolzano solo garantiza la *existencia* de al menos un cero. La unicidad requiere condiciones adicionales (como derivada estrictamente positiva).
```

### 15 — pregunta 15

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "cálculo", "intermedio"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: -random(1, 5)
  f_b: random(1, 5)

respuesta: "0"
tipo: completar

enunciado: "El teorema asegura que existe $c$ tal que $f(c) =$ _______."

respuestas_validas:
  - "0"
  - "cero"
  - "el cero"

explicacion: |
  La conclusión es que la función toma el valor cero en algún punto del intervalo.
```

### 16 — pregunta 16

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "constante", "caso trivial"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  k: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si $f(x) = {k}$ (constante positiva) en $[{a}, {b}]$, Bolzano garantiza un cero."

explicacion: |
  Falso. $f(a) = f(b) = k > 0$. No hay signos opuestos. La función nunca toca el eje X.
```

### 17 — pregunta 17

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "basico"
  tags: ["bolzano", "geometría", "eje"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "corta"
tipo: completar

enunciado: "Gráficamente, si se cumplen las condiciones de Bolzano en $[{a}, {b}]$, la curva _______ el eje de las abcisas."

respuestas_validas:
  - "corta"
  - "cruza"
  - "intercepta"

explicacion: |
  La curva debe cruzar o cortar el eje horizontal al menos una vez.
```

### 18 — pregunta 18

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "continuidad", "hipótesis"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "cerrado"
tipo: completar

enunciado: "La continuidad debe verificarse en el intervalo _______ $[{a}, {b}]$."

respuestas_validas:
  - "cerrado"
  - "cerrado ["
  - "[{a}, {b}]"

explicacion: |
  El teorema exige continuidad en el intervalo cerrado $[a, b]$, incluyendo los extremos.
```

### 19 — pregunta 19

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "avanzado"
  tags: ["bolzano", "conclusión", "lógica"]

variables:
  a: random(1, 3)
  b: random(4, 6)

respuesta: "al menos uno"
tipo: completar

enunciado: "El Teorema de Bolzano garantiza la existencia de _______ cero en $({a}, {b})$."

respuestas_validas:
  - "al menos uno"
  - "al menos un"
  - "uno o más"

explicacion: |
  La conclusión es la existencia de al menos un cero. No se descarta la posibilidad de más de uno.
```

### 20 — pregunta 20

```
metadata:
  materia: "matematica"
  tema: "teorema_de_bolzano"
  nivel: "intermedio"
  tags: ["bolzano", "discontinuidad", "contraejemplo"]

variables:
  a: random(1, 3)
  b: random(4, 6)
  f_a: random(-5, -1)
  f_b: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Si una función $f$ no es continua en $[{a}, {b}]$, pero cumple que $f({a})={f_a}$ y $f({b})={f_b}$ tienen signos opuestos, el Teorema de Bolzano garantiza que existe un cero en $(a, b)$."

explicacion: |
  Falso. La continuidad en el intervalo cerrado es una condición necesaria (hipótesis). Si la función es discontinua, el teorema no aplica y no se puede garantizar la existencia del cero.
```
