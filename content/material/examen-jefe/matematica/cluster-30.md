# Examen jefe — Maestro de Teoremas

> Logro #81. Completaste el examen jefe dominando Bolzano, Pitágoras, el binomio, trigonometría y estadística. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **111 preguntas totales** en 5/5 secciones.

---

## Sección: teorema-de-bolzano (20 preguntas)

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

## Sección: teorema-de-pitagoras (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "vocabulario"]

enunciado: "¿Qué dice el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "En un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa"
  - "En cualquier triángulo, la suma de los lados es igual al perímetro"
  - "En un triángulo rectángulo, los tres lados miden lo mismo"
respuesta: "En un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa"

explicacion: |
  a² + b² = c², con c la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "vocabulario"]

enunciado: "En un triángulo rectángulo, ¿cuál es la hipotenusa?"
tipo: mc
opciones_explicitas:
  - "El lado opuesto al ángulo recto"
  - "Cualquiera de los dos lados que forman el ángulo recto"
  - "El lado más corto"
respuesta: "El lado opuesto al ángulo recto"

explicacion: |
  Los otros dos lados (los que forman el ángulo recto) son los catetos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras"]

respuesta: verdadero
tipo: vf

enunciado: "En un triángulo rectángulo, la hipotenusa es siempre el lado más largo de los tres."

explicacion: |
  Es el lado opuesto al ángulo más grande (90°), y a mayor ángulo
  opuesto, mayor lado.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "completar"]

tipo: completar
enunciado: "Completá la fórmula del teorema de Pitágoras: a² + b² = ___²."
respuestas_validas:
  - "c"

explicacion: |
  c es, por convención, la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema de Pitágoras, en su forma a² + b² = c², sólo se cumple en triángulos rectángulos."

explicacion: |
  En un triángulo sin ángulo recto esa igualdad no se cumple.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  a: random(3, 15)
  b: random(3, 15)

respuesta: redondear(sqrt(a * a + b * b), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un triángulo rectángulo tiene catetos de {a} cm y {b} cm. ¿Cuánto mide la hipotenusa? Redondeá a 2 decimales."

pasos:
  - "{a}² + {b}² = {a * a} + {b * b} = {a * a + b * b}"
  - "√{a * a + b * b} = {redondear(sqrt(a * a + b * b), 2)} cm"

explicacion: |
  Se suman los cuadrados de los catetos y se saca raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  a: random(4, 12)
  c: random(a + 3, 25)

respuesta: redondear(sqrt(c * c - a * a), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un triángulo rectángulo tiene un cateto de {a} cm y una hipotenusa de {c} cm. ¿Cuánto mide el otro cateto? Redondeá a 2 decimales."

pasos:
  - "{c}² − {a}² = {c * c} − {a * a} = {c * c - a * a}"
  - "√{c * c - a * a} = {redondear(sqrt(c * c - a * a), 2)} cm"

explicacion: |
  Se resta el cuadrado del cateto conocido al cuadrado de la hipotenusa,
  y se saca raíz cuadrada. Nunca al revés: la hipotenusa es siempre el
  lado más largo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema", "terna_pitagorica"]

variables:
  k: random(1, 10)
  cateto1: 3 * k
  cateto2: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene catetos de {cateto1} cm y {cateto2} cm. ¿Cuánto mide la hipotenusa?"

pasos:
  - "{cateto1}² + {cateto2}² = {cateto1 * cateto1} + {cateto2 * cateto2} = {cateto1 * cateto1 + cateto2 * cateto2}"
  - "√{cateto1 * cateto1 + cateto2 * cateto2} = {5 * k} cm"

explicacion: |
  Es la terna pitagórica 3-4-5 escalada por {k}: da una hipotenusa
  exacta, sin decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema", "terna_pitagorica"]

variables:
  k: random(1, 8)
  cateto1: 5 * k
  cateto2: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene catetos de {cateto1} cm y {cateto2} cm. ¿Cuánto mide la hipotenusa?"

pasos:
  - "{cateto1}² + {cateto2}² = {cateto1 * cateto1 + cateto2 * cateto2}"
  - "√{cateto1 * cateto1 + cateto2 * cateto2} = {13 * k} cm"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada por {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema", "terna_pitagorica"]

variables:
  k: random(1, 6)
  cateto1: 8 * k
  hipotenusa: 17 * k

respuesta: 15 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un cateto de {cateto1} cm y una hipotenusa de {hipotenusa} cm. ¿Cuánto mide el otro cateto?"

pasos:
  - "{hipotenusa}² − {cateto1}² = {hipotenusa * hipotenusa - cateto1 * cateto1}"
  - "√{hipotenusa * hipotenusa - cateto1 * cateto1} = {15 * k} cm"

explicacion: |
  Es la terna pitagórica 8-15-17 escalada por {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "vocabulario"]

enunciado: "¿Qué dice el recíproco del teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Si en un triángulo se cumple a² + b² = c² (con c el lado más largo), ese triángulo es rectángulo"
  - "Todo triángulo cumple a² + b² = c², sea rectángulo o no"
  - "Si un triángulo es rectángulo, sus tres lados son siempre enteros"
respuesta: "Si en un triángulo se cumple a² + b² = c² (con c el lado más largo), ese triángulo es rectángulo"

explicacion: |
  Permite detectar un ángulo recto sabiendo sólo las longitudes de los
  lados, sin medir ningún ángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 8)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene lados de {6 * k} cm, {8 * k} cm y {10 * k} cm. ¿Es un triángulo rectángulo?"

explicacion: |
  ({6 * k})² + ({8 * k})² = {(6 * k) * (6 * k) + (8 * k) * (8 * k)}, que
  es igual a ({10 * k})² = {(10 * k) * (10 * k)}: se cumple el recíproco
  del teorema, así que sí es rectángulo (6-8-10 es la terna 3-4-5
  escalada por 2).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema"]

variables:
  a: random(5, 10)
  b: random(5, 10)
  c: a + b + random(1, 3)

respuesta: falso
tipo: vf

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Es un triángulo rectángulo?"

explicacion: |
  {a}² + {b}² = {a * a + b * b}, que NO es igual a {c}² = {c * c}: no se
  cumple el recíproco del teorema, así que no es rectángulo (de hecho,
  con {c} ≥ {a} + {b} ni siquiera se puede formar un triángulo).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "vocabulario"]

enunciado: "¿Por qué el teorema de Pitágoras sirve para calcular la longitud de una escalera apoyada contra una pared?"
tipo: mc
opciones_explicitas:
  - "Porque la pared, el piso y la escalera forman un triángulo rectángulo: la escalera es la hipotenusa"
  - "Porque toda escalera mide exactamente lo mismo que la pared"
  - "No tiene relación: es sólo una coincidencia de unidades"
respuesta: "Porque la pared, el piso y la escalera forman un triángulo rectángulo: la escalera es la hipotenusa"

explicacion: |
  La altura en la pared y la distancia de la base a la pared son los dos
  catetos (perpendiculares entre sí).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 5)
  altura: 3 * k
  base: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Una escalera se apoya contra una pared: llega hasta {altura} m de altura, con la base a {base} m de la pared. ¿Cuánto mide la escalera?"

pasos:
  - "{altura}² + {base}² = {altura * altura + base * base}"
  - "√{altura * altura + base * base} = {5 * k} m"

explicacion: |
  La escalera es la hipotenusa del triángulo rectángulo formado por la
  pared y el piso.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  k: random(2, 8)
  ancho: 12 * k
  alto: 5 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Una pantalla rectangular mide {ancho} cm de ancho y {alto} cm de alto. ¿Cuánto mide su diagonal (la medida con la que se anuncian las pantallas, en pulgadas o cm)?"

pasos:
  - "{ancho}² + {alto}² = {ancho * ancho + alto * alto}"
  - "√{ancho * ancho + alto * alto} = {13 * k} cm"

explicacion: |
  La diagonal es la hipotenusa del triángulo rectángulo formado por el
  ancho y el alto de la pantalla.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "completar", "terna_pitagorica"]

tipo: completar
enunciado: "Completá la terna pitagórica clásica: 3, 4, ___."
respuestas_validas:
  - "5"

explicacion: |
  3² + 4² = 9 + 16 = 25 = 5².
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "completar", "terna_pitagorica"]

tipo: completar
enunciado: "Completá la terna pitagórica clásica: 5, 12, ___."
respuestas_validas:
  - "13"

explicacion: |
  5² + 12² = 25 + 144 = 169 = 13².
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "ordenar"]

enunciado: "Ordená los pasos para calcular la hipotenusa de un triángulo rectángulo, conociendo los dos catetos."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Elevar al cuadrado cada uno de los catetos"
  - "Sumar los dos cuadrados"
respuesta_orden:
  - "Elevar al cuadrado cada uno de los catetos"
  - "Sumar los dos cuadrados"
  - "Sacar raíz cuadrada de esa suma"

explicacion: |
  c = √(a² + b²), en ese orden.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "ordenar"]

enunciado: "Ordená los pasos para calcular un cateto, conociendo la hipotenusa y el otro cateto."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa resta"
  - "Elevar al cuadrado la hipotenusa y el cateto conocido"
  - "Restar el cuadrado del cateto al cuadrado de la hipotenusa"
respuesta_orden:
  - "Elevar al cuadrado la hipotenusa y el cateto conocido"
  - "Restar el cuadrado del cateto al cuadrado de la hipotenusa"
  - "Sacar raíz cuadrada de esa resta"

explicacion: |
  a = √(c² − b²): siempre se resta del cuadrado de la hipotenusa, nunca
  al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras"]

enunciado: "En la fórmula c = √(a² + b²), ¿por qué hace falta la raíz cuadrada al final?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema relaciona los cuadrados de los lados, no los lados directamente, y hay que 'deshacer' ese cuadrado"
  - "Es una convención sin motivo matemático"
  - "Porque la hipotenusa siempre es un número irracional"
respuesta: "Porque el teorema relaciona los cuadrados de los lados, no los lados directamente, y hay que 'deshacer' ese cuadrado"

explicacion: |
  a² + b² da el cuadrado de la hipotenusa, no la hipotenusa: la raíz
  cuadrada es la operación inversa que despeja c.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 6)
  dx: 3 * k
  dy: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos de una cuadrícula están a {dx} casilleros de distancia horizontal y {dy} casilleros de distancia vertical. ¿Cuál es la distancia en línea recta entre ellos?"

pasos:
  - "{dx}² + {dy}² = {dx * dx + dy * dy}"
  - "√{dx * dx + dy * dy} = {5 * k} casilleros"

explicacion: |
  Las distancias horizontal y vertical son los catetos; la distancia en
  línea recta es la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras"]

respuesta: falso
tipo: vf

enunciado: "En un triángulo que NO es rectángulo, la suma de los cuadrados de dos lados cualesquiera siempre es igual al cuadrado del tercero."

explicacion: |
  Esa igualdad es exclusiva de los triángulos rectángulos — es, de
  hecho, la forma de detectar si un triángulo lo es (el recíproco del
  teorema).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 9)
  cateto1: 3 * k
  cateto2: 4 * k
  hipotenusa: 5 * k

respuesta: cateto1 + cateto2 + hipotenusa
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene catetos de {cateto1} cm y {cateto2} cm. ¿Cuál es su perímetro?"

pasos:
  - "Hipotenusa: √({cateto1}² + {cateto2}²) = {hipotenusa} cm"
  - "Perímetro: {cateto1} + {cateto2} + {hipotenusa} = {cateto1 + cateto2 + hipotenusa} cm"

explicacion: |
  Primero hay que hallar la hipotenusa con el teorema, y recién después
  sumar los tres lados.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "vocabulario"]

enunciado: "Un albañil marca 3 m en una dirección y 4 m en otra, y ajusta hasta que la diagonal entre esos dos puntos mida exactamente 5 m. ¿Para qué le sirve eso?"
tipo: mc
opciones_explicitas:
  - "Para asegurar un ángulo de 90° exacto entre las dos direcciones, sin usar transportador"
  - "Para calcular cuánto material va a necesitar"
  - "Es sólo una tradición sin utilidad práctica"
respuesta: "Para asegurar un ángulo de 90° exacto entre las dos direcciones, sin usar transportador"

explicacion: |
  Por el recíproco del teorema: si 3² + 4² = 5², el ángulo entre los
  lados de 3 y 4 es necesariamente recto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema de Pitágoras en la práctica?"
tipo: mc
opciones_explicitas:
  - "Para calcular una distancia 'en diagonal' a partir de dos distancias perpendiculares conocidas"
  - "Sólo para calcular áreas de cuadrados"
  - "Sólo se usa en triángulos equiláteros"
respuesta: "Para calcular una distancia 'en diagonal' a partir de dos distancias perpendiculares conocidas"

explicacion: |
  Desde la longitud de una escalera hasta la diagonal de una pantalla o
  la distancia entre dos puntos: siempre que hay dos direcciones
  perpendiculares, aparece el teorema.
```

## Sección: teorema-del-binomio (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["binomio", "vocabulario"]

enunciado: "¿Qué permite hacer el teorema del binomio?"
tipo: mc
opciones_explicitas:
  - "Expandir (a+b)ⁿ como una suma de términos C(n,k)·aⁿ⁻ᵏ·bᵏ, sin multiplicar el binomio por sí mismo n veces a mano"
  - "Calcular la derivada de un polinomio de grado n"
  - "Resolver ecuaciones cuadráticas de la forma ax²+bx+c=0"
respuesta: "Expandir (a+b)ⁿ como una suma de términos C(n,k)·aⁿ⁻ᵏ·bᵏ, sin multiplicar el binomio por sí mismo n veces a mano"

explicacion: |
  Da una fórmula directa para cada término de la expansión.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "completar"]

tipo: completar
enunciado: "Completá: el término general de (a+b)ⁿ es C(n,k)·aⁿ⁻ᵏ·b___."
respuestas_validas:
  - "k"

explicacion: |
  El exponente de b es exactamente k, el mismo índice del coeficiente
  C(n,k).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([4, 5, 6])
  k: uno_de([1, 2])

respuesta: combinations(n, k)
tipo: input

enunciado: "En el desarrollo de (a+b)^{n}, ¿cuál es el coeficiente del término aⁿ⁻ᵏbᵏ con k={k} (es decir, C({n},{k}))?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"

explicacion: |
  Es exactamente el mismo número combinatorio de `../combinaciones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "problema"]

tipo: completar
enunciado: "Completá el desarrollo: (a+b)² = a² + ___ + b²."
respuestas_validas:
  - "2ab"

explicacion: |
  Los coeficientes 1, 2, 1 son C(2,0), C(2,1), C(2,2).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "problema"]

tipo: completar
enunciado: "Completá el desarrollo: (a+b)³ = a³ + 3a²b + ___ + b³."
respuestas_validas:
  - "3ab²"

explicacion: |
  Los coeficientes 1, 3, 3, 1 son C(3,0), C(3,1), C(3,2), C(3,3).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["binomio", "pascal", "vocabulario"]

enunciado: "¿Qué es el triángulo de Pascal?"
tipo: mc
opciones_explicitas:
  - "Los coeficientes C(n,k) organizados fila por fila (una fila por cada valor de n), donde cada número es la suma de los dos que tiene arriba"
  - "Una forma de resolver ecuaciones de segundo grado"
  - "Un método para calcular derivadas de polinomios"
respuesta: "Los coeficientes C(n,k) organizados fila por fila (una fila por cada valor de n), donde cada número es la suma de los dos que tiene arriba"

explicacion: |
  Es una forma visual de calcular C(n,k) sin necesitar la fórmula de
  factoriales, para valores chicos de n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "pascal", "problema"]

variables:
  n: uno_de([4, 5])
  k: uno_de([1, 2])

respuesta: combinations(n, k)
tipo: input

enunciado: "En la fila n={n} del triángulo de Pascal, ¿cuál es el valor en la posición k={k} (contando desde k=0)?"

pasos:
  - "El valor en la posición k de la fila n es C(n,k) = C({n},{k}) = {combinations(n, k)}"

explicacion: |
  Cada posición de la fila n corresponde a un coeficiente C(n,k).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Los coeficientes que aparecen en la expansión de (a+b)ⁿ son exactamente los mismos números combinatorios C(n,k) usados para contar combinaciones."

explicacion: |
  No es una coincidencia — se puede demostrar que ambos representan
  la misma cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: 2 ^ n
tipo: input

enunciado: "¿Cuál es la suma de TODOS los coeficientes C(n,0)+C(n,1)+...+C(n,n) de la fila n={n} del triángulo de Pascal (equivalente a evaluar (1+1)^{n})?"

pasos:
  - "Suma de coeficientes = 2^{n} = {2 ^ n}"

explicacion: |
  Se obtiene evaluando la fórmula del binomio con a=b=1: la suma se
  reduce a 2ⁿ.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio"]

respuesta: verdadero
tipo: vf

enunciado: "El desarrollo completo de (a+b)ⁿ tiene exactamente n+1 términos (desde k=0 hasta k=n)."

explicacion: |
  Contando desde k=0, hay n+1 valores posibles de k.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: 6
  k: uno_de([2, 4])

respuesta: combinations(n, k)
tipo: input

enunciado: "En el desarrollo de (a+b)⁶, ¿cuál es el coeficiente del término con b elevado a la {k} (es decir, a⁴b² o su análogo con k={k})?"

pasos:
  - "El exponente de b es k={k}, así que el coeficiente es C(6,{k}) = {combinations(n, k)}"

explicacion: |
  Se identifica k directo por el exponente de b en el término
  buscado.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "distribucion_binomial"]

enunciado: "¿Qué relación tiene el teorema del binomio con la distribución binomial (`../distribucion-binomial/`)?"
tipo: mc
opciones_explicitas:
  - "Usan el mismo coeficiente C(n,k), pero el teorema del binomio expande un polinomio algebraico y la distribución binomial pondera una probabilidad"
  - "Son exactamente la misma fórmula, sin ninguna diferencia"
  - "No tienen ninguna relación entre sí"
respuesta: "Usan el mismo coeficiente C(n,k), pero el teorema del binomio expande un polinomio algebraico y la distribución binomial pondera una probabilidad"

explicacion: |
  Son las dos caras de la misma pieza combinatoria: álgebra por un
  lado, probabilidad por el otro.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

tipo: completar
enunciado: "Completá el desarrollo: (a−b)² = a² − ___ + b²."
respuestas_validas:
  - "2ab"

explicacion: |
  (a−b)ⁿ es (a+(−b))ⁿ: se aplica la misma fórmula, pero los signos
  de los términos con b impar quedan negativos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([4, 6])

respuesta: combinations(n, n / 2)
tipo: input

enunciado: "En el desarrollo de (a+b)^{n} (con n par), el término central corresponde a k=n/2. ¿Cuál es su coeficiente?"

pasos:
  - "k = {n}/2 = {n / 2}"
  - "C({n},{n / 2}) = {combinations(n, n / 2)}"

explicacion: |
  Con n par, hay un único término central exactamente en el medio del
  desarrollo (n+1 términos, cantidad impar).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["binomio", "aplicacion"]

enunciado: "¿Por qué es útil el teorema del binomio en vez de multiplicar (a+b) por sí mismo n veces a mano?"
tipo: mc
opciones_explicitas:
  - "Porque permite calcular directamente un único término específico (por ejemplo, el coeficiente de a³b²) sin desarrollar todo el producto completo"
  - "Porque siempre da un resultado más simple que la multiplicación directa"
  - "No hay ninguna ventaja real, es sólo otra forma de escribir lo mismo"
respuesta: "Porque permite calcular directamente un único término específico (por ejemplo, el coeficiente de a³b²) sin desarrollar todo el producto completo"

explicacion: |
  Para n grande, multiplicar (a+b) por sí mismo n veces a mano es
  muchísimo más lento que aplicar la fórmula directo a un término.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  a: uno_de([2, 3])
  b: uno_de([1, 2])

respuesta: (a + b) ^ 3
tipo: input

enunciado: "Con a={a} y b={b}, ¿cuánto vale (a+b)³, calculado directo (sin expandir)?"

pasos:
  - "(a+b)³ = ({a}+{b})³ = {a + b}³ = {(a + b) ^ 3}"

explicacion: |
  Este resultado debería coincidir con evaluar la expansión completa
  a³+3a²b+3ab²+b³ con los mismos valores de a y b.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier fila del triángulo de Pascal, los coeficientes de los extremos (C(n,0) y C(n,n)) siempre valen 1."

explicacion: |
  C(n,0)=1 (hay una sola forma de elegir 0 elementos) y C(n,n)=1 (hay
  una sola forma de elegir todos).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "distribucion_binomial", "problema"]

variables:
  n: 5
  k: 3
  p: 0.4

respuesta: combinations(n, k)
tipo: input

enunciado: "En (a+b)⁵, el coeficiente de a²b³ es C(5,3). Ese mismo número C(5,3) también aparece en la fórmula de P(X=3) de una binomial con n=5, p={p}. ¿Cuánto vale ese coeficiente compartido?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"

explicacion: |
  El coeficiente combinatorio es idéntico en ambos contextos — sólo
  cambia qué se multiplica junto a él (variables algebraicas vs.
  probabilidades).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([6, 7, 8])
  k: uno_de([1, 2, 3])

respuesta: combinations(n, k) == combinations(n, n - k)
tipo: vf

enunciado: "Con n={n} y k={k}, ¿es cierto que C(n,k) = C(n, n−k)?"

explicacion: |
  Es la propiedad de simetría del triángulo de Pascal: cada fila se
  lee igual del derecho y del revés.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema del binomio?"
tipo: mc
opciones_explicitas:
  - "Para expandir (a+b)ⁿ de forma directa (o calcular un único término de esa expansión), usando los mismos coeficientes combinatorios C(n,k) de `../combinaciones/`"
  - "Para resolver sistemas de ecuaciones lineales"
  - "Sólo sirve para calcular probabilidades, no tiene uso algebraico"
respuesta: "Para expandir (a+b)ⁿ de forma directa (o calcular un único término de esa expansión), usando los mismos coeficientes combinatorios C(n,k) de `../combinaciones/`"

explicacion: |
  Es el hermano algebraico de `../distribucion-binomial/`: mismo
  coeficiente, distinto propósito.
```

## Sección: teorema-del-seno-y-del-coseno (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Qué es un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un triángulo que no tiene ningún ángulo de 90°"
  - "Un triángulo con los tres lados iguales"
  - "Otro nombre para el triángulo rectángulo"
respuesta: "Un triángulo que no tiene ningún ángulo de 90°"

explicacion: |
  Ahí ni Pitágoras ni las razones trigonométricas simples se pueden
  aplicar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Por qué el teorema de Pitágoras no se puede usar directamente en un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"
  - "Porque los triángulos oblicuos no tienen hipotenusa nombrada"
  - "En realidad sí se puede usar exactamente igual"
respuesta: "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"

explicacion: |
  Por eso hacen falta el teorema del seno y del coseno.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "completar"]

tipo: completar
enunciado: "Completá el teorema del seno: a / sen(A) = b / sen(B) = ___."
respuestas_validas:
  - "c / sen(C)"
  - "c/sen(C)"

explicacion: |
  Los tres cocientes lado/seno(ángulo opuesto) son siempre iguales entre
  sí.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Qué dice el teorema del seno?"
tipo: mc
opciones_explicitas:
  - "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"
  - "Que la suma de los tres lados es igual al seno del ángulo mayor"
  - "Que sólo aplica a triángulos rectángulos"
respuesta: "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"

explicacion: |
  Vale para cualquier triángulo, no sólo los rectángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  a: uno_de([10, 20, 30, 40])
  sen_A: 0.5
  sen_B: 1

respuesta: (a / sen_A) * sen_B
tipo: input
tolerancia_abs: 0.5

enunciado: "En un triángulo, el lado a = {a} es opuesto al ángulo A = 30° (sen 30° = 0,5). El lado b es opuesto al ángulo B = 90° (sen 90° = 1). ¿Cuánto mide el lado b?"

pasos:
  - "{a} ÷ 0,5 = {a / sen_A} (la razón constante del triángulo)"
  - "b = {a / sen_A} × 1 = {(a / sen_A) * sen_B}"

explicacion: |
  Se usa la razón a/sen(A), que es la misma para los tres lados del
  triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  b: uno_de([10, 14, 20])
  sen_B: 0.71
  sen_A: 0.5

respuesta: redondear((b / sen_B) * sen_A, 1)
tipo: input
tolerancia_abs: 1

enunciado: "En un triángulo, el lado b = {b} es opuesto al ángulo B = 45° (sen 45° ≈ 0,71). El lado a es opuesto al ángulo A = 30° (sen 30° = 0,5). ¿Cuánto mide el lado a, aproximadamente?"

pasos:
  - "{b} ÷ 0,71 ≈ {redondear(b / sen_B, 2)} (razón constante)"
  - "a ≈ {redondear(b / sen_B, 2)} × 0,5 ≈ {redondear((b / sen_B) * sen_A, 1)}"

explicacion: |
  Mismo procedimiento: primero se halla la razón constante, después se
  aplica al ángulo del lado buscado.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del seno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"
  - "Cuando se conocen sólo los tres lados, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"

explicacion: |
  Ese par lado-ángulo opuesto es lo que permite fijar la razón
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "completar"]

tipo: completar
enunciado: "Completá el teorema del coseno: c² = a² + b² − ___."
respuestas_validas:
  - "2ab·cos(C)"
  - "2ab cos(C)"
  - "2*a*b*cos(C)"

explicacion: |
  C es el ángulo comprendido entre los lados a y b.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Qué relación tiene el teorema del coseno con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"
  - "No tienen ninguna relación entre sí"
  - "El teorema del coseno reemplaza completamente a Pitágoras, que ya no se usa"
respuesta: "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"

explicacion: |
  Con cos(90°) = 0, el último término del teorema del coseno desaparece.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo C de un triángulo es 90°, el teorema del coseno se reduce exactamente a c² = a² + b² (el teorema de Pitágoras)."

explicacion: |
  Porque cos(90°) = 0, y el término -2ab·cos(C) se anula.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 3
  b: 4
  cos_90: 0

respuesta: 25
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados a = 3 y b = 4, con el ángulo C entre ellos de 90° (cos 90° = 0). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "c² = 3² + 4² − 2×3×4×0 = 9 + 16 − 0 = 25"

explicacion: |
  Da exactamente el mismo resultado que Pitágoras: 3² + 4² = 25.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 6, 8])
  b: uno_de([4, 6, 8])
  cos_60: 0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_60)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo C = 60° entre ellos (cos 60° = 0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"

explicacion: |
  Se reemplazan los valores directamente en la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 5, 6])
  b: uno_de([4, 5, 6])
  cos_120: -0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_120)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo obtuso C = 120° entre ellos (cos 120° = -0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×(-0,5) = {(a * a) + (b * b) - (2 * a * b * cos_120)}"

explicacion: |
  Con coseno negativo, el término se SUMA en vez de restarse: el lado c
  queda más largo que si el ángulo fuera agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del coseno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"
  - "Cuando se conoce sólo un lado, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"

explicacion: |
  Es el caso LAL (lado-ángulo-lado) o LLL (los tres lados).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre cuándo usar el teorema del seno y cuándo el del coseno?"
tipo: mc
opciones_explicitas:
  - "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"
  - "El seno sólo sirve para ángulos agudos; el coseno sólo para obtusos"
  - "Son intercambiables, da lo mismo cuál se use"
respuesta: "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"

explicacion: |
  Es la clave para decidir cuál aplicar según los datos disponibles.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del coseno funciona igual de bien con ángulos obtusos (mayores a 90°), no sólo con agudos."

explicacion: |
  El coseno de un ángulo obtuso es simplemente negativo, y la fórmula
  lo maneja sin ningún ajuste extra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 6
  b: 8
  cos_60: 0.5

respuesta: redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un terreno triangular tiene dos lados de {a} m y {b} m, con un ángulo de 60° entre ellos. ¿Cuánto mide el tercer lado? Redondeá a 2 decimales."

pasos:
  - "c² = {a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"
  - "c = √{(a * a) + (b * b) - (2 * a * b * cos_60)} ≈ {redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)} m"

explicacion: |
  Se calcula c² con el teorema del coseno, y recién al final se saca
  raíz cuadrada para obtener c.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "ordenar"]

enunciado: "Ordená los pasos para hallar el lado c con el teorema del coseno, conociendo a, b y el ángulo C entre ellos."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de c² para obtener c"
  - "Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)"
  - "Calcular el valor numérico de c²"
respuesta_orden:
  - "Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)"
  - "Calcular el valor numérico de c²"
  - "Sacar raíz cuadrada de c² para obtener c"

explicacion: |
  La raíz cuadrada siempre va al final, no antes de tener c² completo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "ordenar"]

enunciado: "Ordená los pasos para hallar un lado desconocido con el teorema del seno."
tipo: ordenar
opciones_explicitas:
  - "El resultado es el lado buscado"
  - "Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido"
  - "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado"
respuesta_orden:
  - "Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido"
  - "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado"
  - "El resultado es el lado buscado"

explicacion: |
  La razón constante es el puente entre el par conocido y el
  desconocido.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno también se puede usar al revés: para hallar un ángulo desconocido, si se conocen los dos lados involucrados y un ángulo opuesto ya conocido."

explicacion: |
  La misma proporción se puede despejar para cualquiera de sus cuatro
  términos (dos lados, dos ángulos).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Para qué se usan estos dos teoremas en topografía?"
tipo: mc
opciones_explicitas:
  - "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"
  - "Sólo para calcular el área de un terreno cuadrado"
  - "No tienen ninguna aplicación práctica fuera del aula"
respuesta: "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"

explicacion: |
  Es la base de la triangulación: no hace falta que el triángulo
  formado tenga un ángulo recto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno y del coseno también son válidos para triángulos rectángulos, aunque ahí ya alcance con Pitágoras y las razones trigonométricas simples."

explicacion: |
  Son herramientas más generales; simplemente no hace falta usarlas
  cuando hay una forma más rápida disponible.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado: 5

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo equilátero tiene los tres lados iguales a {lado}, y sus tres ángulos son de 60°. ¿Es consistente que la razón lado/sen(ángulo opuesto) dé el mismo valor para los tres lados (teorema del seno)?"

explicacion: |
  Al ser equilátero, los tres pares lado-ángulo son idénticos entre sí:
  la razón tiene que coincidir por simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "Si se conocen los tres lados de un triángulo (LLL) pero ningún ángulo, ¿qué teorema conviene usar para hallar un ángulo?"
tipo: mc
opciones_explicitas:
  - "El teorema del coseno, despejando cos(C) de la fórmula"
  - "El teorema del seno, porque siempre es más simple"
  - "Ninguno de los dos sirve sin conocer al menos un ángulo de entrada"
respuesta: "El teorema del coseno, despejando cos(C) de la fórmula"

explicacion: |
  cos(C) = (a² + b² − c²) / (2ab): se puede despejar sin conocer ningún
  ángulo de entrada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven el teorema del seno y del coseno en conjunto?"
tipo: mc
opciones_explicitas:
  - "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"
  - "Sólo sirven para triángulos equiláteros"
  - "Son redundantes entre sí, alcanza con saber uno solo"
respuesta: "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"

explicacion: |
  Entre los dos, y sumados a Pitágoras para el caso rectángulo, cubren
  cualquier triángulo posible.
```

## Sección: test-de-hipotesis (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "vocabulario"]

enunciado: "¿Qué es la hipótesis nula (H₀)?"
tipo: mc
opciones_explicitas:
  - "La afirmación conservadora de partida, 'no pasa nada raro' (por ejemplo, que una moneda es justa)"
  - "Lo que el investigador quiere demostrar que es verdad"
  - "El resultado exacto que se obtuvo en la muestra"
respuesta: "La afirmación conservadora de partida, 'no pasa nada raro' (por ejemplo, que una moneda es justa)"

explicacion: |
  El test busca evidencia para rechazarla o no, nunca la da por
  demostrada.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "vocabulario"]

enunciado: "¿Qué es la hipótesis alternativa (H₁)?"
tipo: mc
opciones_explicitas:
  - "Lo contrario de la hipótesis nula: lo que se sospecha o se quiere demostrar (por ejemplo, que la moneda está cargada)"
  - "Otra forma de llamar a la hipótesis nula"
  - "El nivel de significancia elegido para el test"
respuesta: "Lo contrario de la hipótesis nula: lo que se sospecha o se quiere demostrar (por ejemplo, que la moneda está cargada)"

explicacion: |
  H₀ y H₁ son mutuamente excluyentes y cubren todos los casos.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["p_valor", "vocabulario"]

enunciado: "¿Qué es el p-valor?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de observar un resultado tan extremo (o más) que el obtenido, asumiendo que la hipótesis nula fuera cierta"
  - "La probabilidad de que la hipótesis nula sea verdadera"
  - "El porcentaje de la muestra que apoya la hipótesis alternativa"
respuesta: "La probabilidad de observar un resultado tan extremo (o más) que el obtenido, asumiendo que la hipótesis nula fuera cierta"

explicacion: |
  Un p-valor chico dice: "si H₀ fuera cierta, sería muy raro ver un
  resultado como este".
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["significancia", "vocabulario"]

enunciado: "¿Qué es el nivel de significancia (α)?"
tipo: mc
opciones_explicitas:
  - "El umbral fijado de antemano para decidir qué tan improbable tiene que ser el resultado antes de rechazar H₀ (habitualmente 0,05)"
  - "La probabilidad de que la hipótesis alternativa sea verdadera"
  - "El tamaño mínimo de muestra necesario para el test"
respuesta: "El umbral fijado de antemano para decidir qué tan improbable tiene que ser el resultado antes de rechazar H₀ (habitualmente 0,05)"

explicacion: |
  Se fija ANTES de ver los datos, no después.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["hipotesis", "completar"]

tipo: completar
enunciado: "Completá la regla de decisión: se rechaza la hipótesis nula si el p-valor es ___ que el nivel de significancia α."
respuestas_validas:
  - "menor"

explicacion: |
  p-valor < α → se rechaza H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor: uno_de([0.01, 0.03, 0.08, 0.12])
  alfa: 0.05

respuesta: p_valor < alfa
tipo: vf

enunciado: "Un test dio un p-valor de {p_valor}, con nivel de significancia α = {alfa}. ¿Se rechaza la hipótesis nula?"

explicacion: |
  Se compara directo el p-valor contra α: si es menor, se rechaza H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis"]

respuesta: verdadero
tipo: vf

enunciado: "'No rechazar la hipótesis nula' no es lo mismo que 'demostrar que la hipótesis nula es verdadera' — sólo significa que no hubo evidencia suficiente para descartarla."

explicacion: |
  Un test nunca demuestra que H₀ es cierta, como mucho no encuentra
  evidencia en contra.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["significancia", "vocabulario"]

enunciado: "¿Qué significa que un resultado sea 'estadísticamente significativo'?"
tipo: mc
opciones_explicitas:
  - "Que el p-valor obtenido es menor que el nivel de significancia elegido, así que se rechaza la hipótesis nula"
  - "Que el resultado es importante o grande en términos prácticos"
  - "Que la muestra usada fue muy grande"
respuesta: "Que el p-valor obtenido es menor que el nivel de significancia elegido, así que se rechaza la hipótesis nula"

explicacion: |
  "Significativo" acá es un término técnico, no sinónimo de
  "importante".
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor_moneda: 0.055
  alfa: 0.05

respuesta: p_valor_moneda < alfa
tipo: vf

enunciado: "Se tira una moneda 10 veces y salen 8 caras. H₀ es 'la moneda es justa'. El p-valor de este resultado es {p_valor_moneda}, con α = {alfa}. ¿Se rechaza H₀ (se concluye que la moneda está cargada)?"

explicacion: |
  {p_valor_moneda} > {alfa}: el resultado es llamativo, pero no
  alcanza el umbral fijado para rechazar H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["error_tipo1", "vocabulario"]

enunciado: "¿Qué es el error de Tipo I?"
tipo: mc
opciones_explicitas:
  - "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"
  - "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"
  - "Elegir mal el tamaño de la muestra"
respuesta: "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"

explicacion: |
  Su probabilidad es, justamente, el nivel de significancia α.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["error_tipo2", "vocabulario"]

enunciado: "¿Qué es el error de Tipo II?"
tipo: mc
opciones_explicitas:
  - "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"
  - "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"
  - "Usar un nivel de significancia mayor a 0,05"
respuesta: "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"

explicacion: |
  Por ejemplo, no detectar que una moneda estaba cargada, aunque de
  verdad lo estuviera.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "Bajar el nivel de significancia (por ejemplo, de α=0,05 a α=0,01) hace más difícil rechazar la hipótesis nula, porque exige un p-valor todavía más chico."

explicacion: |
  Un umbral más estricto reduce el riesgo de error de Tipo I, pero
  aumenta el riesgo de error de Tipo II.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "aplicacion"]

enunciado: "¿Qué relación tiene el test de hipótesis con el intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Usan exactamente el mismo aparato matemático (error estándar, valores z); el intervalo estima un rango, el test decide sí o no sobre una afirmación puntual"
  - "No tienen ninguna relación entre sí"
  - "El test de hipótesis reemplaza por completo al intervalo de confianza"
respuesta: "Usan exactamente el mismo aparato matemático (error estándar, valores z); el intervalo estima un rango, el test decide sí o no sobre una afirmación puntual"

explicacion: |
  Ambos se apoyan en el teorema central del límite para justificar el
  uso de la distribución normal.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor: uno_de([0.005, 0.02, 0.04])
  alfa: 0.01

respuesta: p_valor < alfa
tipo: vf

enunciado: "Un test dio un p-valor de {p_valor}, con un nivel de significancia más estricto, α = {alfa}. ¿Se rechaza la hipótesis nula?"

explicacion: |
  Con un α más chico, hace falta un p-valor todavía más chico para
  rechazar H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "aplicacion"]

enunciado: "Un ensayo clínico prueba un nuevo medicamento contra un placebo. H₀ es 'el medicamento no tiene ningún efecto real'. Si el p-valor del ensayo da 0,001 (con α=0,05), ¿qué se concluye?"
tipo: mc
opciones_explicitas:
  - "Se rechaza H₀: hay evidencia estadísticamente significativa de que el medicamento sí tiene un efecto"
  - "Se acepta H₀ como demostrada: el medicamento definitivamente no funciona"
  - "No se puede concluir nada sin conocer el precio del medicamento"
respuesta: "Se rechaza H₀: hay evidencia estadísticamente significativa de que el medicamento sí tiene un efecto"

explicacion: |
  0,001 < 0,05 — el resultado observado sería muy improbable si el
  medicamento no tuviera ningún efecto real.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "Un resultado 'estadísticamente significativo' (p-valor bajo) no significa necesariamente que el efecto sea grande o importante en la práctica — con una muestra enorme, hasta una diferencia mínima puede dar un p-valor muy bajo."

explicacion: |
  Significancia estadística y relevancia práctica son dos preguntas
  distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor_a: 0.02
  p_valor_b: 0.08
  alfa: 0.05

respuesta: p_valor_a < alfa
tipo: vf

enunciado: "Test A dio p-valor {p_valor_a}; Test B dio p-valor {p_valor_b}, ambos con α = {alfa}. ¿Se rechaza H₀ en el Test A?"

explicacion: |
  {p_valor_a} < {alfa}, así que en el Test A sí se rechaza H₀ (a
  diferencia del Test B, donde {p_valor_b} > {alfa}).
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["hipotesis", "vocabulario"]

enunciado: "En un test de hipótesis, ¿cuál de las dos hipótesis representa el 'status quo' o la postura conservadora por defecto?"
tipo: mc
opciones_explicitas:
  - "La hipótesis nula (H₀)"
  - "La hipótesis alternativa (H₁)"
respuesta: "La hipótesis nula (H₀)"

explicacion: |
  H₁ es lo que hay que reunir evidencia para poder afirmar.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "El nivel de significancia α debe fijarse ANTES de ver los resultados del test, no elegirse después según convenga para que el resultado dé 'significativo'."

explicacion: |
  Elegir α después de ver los datos invalida la lógica del test (es
  una forma de sesgo conocida como 'p-hacking').
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un test de hipótesis?"
tipo: mc
opciones_explicitas:
  - "Para decidir, con datos limitados de una muestra, si hay evidencia suficiente para descartar una afirmación de partida (H₀), controlando el riesgo de equivocarse"
  - "Para demostrar con certeza absoluta que una hipótesis es verdadera"
  - "Sólo sirve en ensayos clínicos de medicamentos"
respuesta: "Para decidir, con datos limitados de una muestra, si hay evidencia suficiente para descartar una afirmación de partida (H₀), controlando el riesgo de equivocarse"

explicacion: |
  Cierra la cadena de `../muestreo-y-sesgo/` →
  `../teorema-central-del-limite/` → `../intervalo-de-confianza/` →
  test de hipótesis: de una muestra a una decisión, con el riesgo de
  error explícitamente controlado.
```
