# Examen jefe — [PENDIENTE #614]

> Logro #614. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **110 preguntas totales** en 5/5 secciones.

---

## Sección: raices (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

enunciado: "¿Qué es la raíz cuadrada de un número a?"
tipo: mc
opciones_explicitas:
  - "El número b tal que b² = a"
  - "El número a dividido 2"
  - "El número a multiplicado por sí mismo"
respuesta: "El número b tal que b² = a"

explicacion: |
  La raíz cuadrada es la operación inversa de elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices"]

variables:
  k: random(2, 15)
  n: k ^ 2

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

pasos:
  - "{n} es {k}², así que su raíz cuadrada es {k}"

explicacion: |
  Cuando el radicando es un cuadrado perfecto, la raíz da exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(10, 30)
  n: k ^ 2

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: buscar qué número
  elevado al cuadrado da {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 10)
  n: k ^ 3

respuesta: raiz(n, 3)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cúbica de {n}?"

pasos:
  - "{n} es {k}³, así que su raíz cúbica es {k}"

explicacion: |
  La raíz cúbica busca qué número, elevado al cubo, da el radicando.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "vocabulario"]

variables:
  b: random(2, 20)
  a: b ^ 2

respuesta: (sqrt(a) == b)
tipo: vf

enunciado: "Sabiendo que {b}² = {a}, ¿es cierto que √{a} = {b}?"

explicacion: |
  La raíz cuadrada deshace lo que hizo elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  k: random(2, 6)
  n: k ^ 4

respuesta: raiz(n, 4)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuarta de {n}?"

explicacion: |
  Con índice 4, se busca qué número elevado a la 4 da el radicando.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  n: random(2, 99)

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es (aproximadamente) √{n}?"

explicacion: |
  No todos los números tienen raíz cuadrada exacta: cuando no la tiene,
  el resultado es un decimal con infinitas cifras, y se acepta una
  aproximación.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "propiedades"]

variables:
  a: random(2, 20) ^ 2
  b: random(2, 20) ^ 2

respuesta: (sqrt(a * b) == sqrt(a) * sqrt(b))
tipo: vf

enunciado: "¿Es cierto que √({a} × {b}) da lo mismo que √{a} × √{b}?"

explicacion: |
  Es la propiedad de la raíz de un producto: se puede separar en la raíz
  de cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "propiedades"]

variables:
  b: random(2, 15) ^ 2
  k: random(2, 10) ^ 2
  a: b * k

respuesta: (sqrt(a / b) == sqrt(a) / sqrt(b))
tipo: vf

enunciado: "¿Es cierto que √({a} ÷ {b}) da lo mismo que √{a} ÷ √{b}?"

explicacion: |
  Es la propiedad de la raíz de un cociente: se puede separar en la raíz
  del numerador dividida por la raíz del denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices", "propiedades"]

variables:
  a: random(2, 15) ^ 2
  b: random(2, 15) ^ 2

respuesta: sqrt(a) * sqrt(b)
tipo: input
tolerancia_abs: 0

enunciado: "Usando la propiedad de la raíz de un producto, ¿cuánto es √({a} × {b})?"

pasos:
  - "√{a} × √{b} = {sqrt(a)} × {sqrt(b)} = {sqrt(a) * sqrt(b)}"

explicacion: |
  Separar el producto en dos raíces cuadradas perfectas hace la cuenta
  más fácil.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dentro de los números reales, la raíz cuadrada de un número negativo no tiene solución."

explicacion: |
  Ningún número real, elevado al cuadrado, puede dar un resultado
  negativo: el cuadrado de cualquier número real es siempre positivo o
  cero.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 10)
  n: -(k ^ 3)

respuesta: -k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cúbica de {n}?"

pasos:
  - "(-{k})³ = {n}, así que la raíz cúbica de {n} es -{k}"

explicacion: |
  A diferencia de la raíz cuadrada, la raíz cúbica de un negativo sí tiene
  solución (negativa): un número negativo elevado a un exponente impar
  sigue dando negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La raíz cuadrada es la operación inversa de elevar al cuadrado, igual que la resta es inversa de la suma."

explicacion: |
  Aplicar una y después la otra vuelve al número original.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 20)
  n: k ^ 2

respuesta: k
tipo: mc
opciones_explicitas:
  - k
  - n / 2
  - k + 1

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

explicacion: |
  Las otras opciones confunden la raíz con dividir por 2, o se equivocan
  por poco.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "verificacion"]

variables:
  k: random(2, 20)
  n: k ^ 2
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: k + error

respuesta: (mostrado * mostrado == n)
tipo: vf

enunciado: "¿Está bien calculado esto? √{n} = {mostrado}"

explicacion: |
  Se verifica elevando {mostrado} al cuadrado y comparando con {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  k: random(2, 8)
  indice: uno_de([2, 3, 4])
  n: k ^ indice

tipo: completar
enunciado: "___√{n} = {k}. Completá el índice de la raíz (2, 3 o 4)."
respuestas_validas:
  - indice

explicacion: |
  Hay que encontrar a qué índice hay que elevar {k} para llegar a {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 20)

tipo: completar
enunciado: "Completá: √___ = {k}."
respuestas_validas:
  - k ^ 2

explicacion: |
  El radicando que falta es {k} elevado al cuadrado (para deshacer la
  raíz).
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "problema"]

variables:
  lado: random(2, 30)
  area: lado ^ 2

respuesta: lado
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene un área de {area} cm². ¿Cuánto mide su lado?"

pasos:
  - "El lado es la raíz cuadrada del área: √{area} = {lado}"

explicacion: |
  Como el área de un cuadrado es lado², el lado se encuentra con la raíz
  cuadrada del área.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "problema"]

variables:
  arista: random(2, 15)
  volumen: arista ^ 3

respuesta: arista
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo tiene un volumen de {volumen} cm³. ¿Cuánto mide su arista?"

pasos:
  - "La arista es la raíz cúbica del volumen: ∛{volumen} = {arista}"

explicacion: |
  Como el volumen de un cubo es arista³, la arista se encuentra con la
  raíz cúbica del volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "orden"]

tipo: ordenar
enunciado: "Calculá estas raíces y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "√81"
  - "√16"
  - "√49"
  - "√4"
respuesta_orden: ["√4", "√16", "√49", "√81"]

explicacion: |
  √4=2, √16=4, √49=7, √81=9: hay que calcular cada una antes de poder
  ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "comparacion"]

variables:
  a: random(2, 99)
  b: random(2, 99)

restricciones:
  - a != b

respuesta: (sqrt(a) > sqrt(b))
tipo: vf

enunciado: "¿Es √{a} mayor que √{b}?"

explicacion: |
  A mayor radicando, mayor la raíz cuadrada: no hace falta calcular las
  dos raíces exactas para saber cuál es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  n: random(2, 99)
  k: floor(sqrt(n))

respuesta: (k * k == n)
tipo: vf

enunciado: "¿Es exacta la raíz cuadrada de {n} (da como resultado un número entero)?"

explicacion: |
  Es exacta sólo cuando el radicando es un cuadrado perfecto (1, 4, 9, 16,
  25...).
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "casos_especiales"]

respuesta: verdadero
tipo: vf

enunciado: "La raíz cuadrada de 0 es 0, y la raíz cuadrada de 1 es 1."

explicacion: |
  0² = 0 y 1² = 1: los dos son casos especiales donde el número y su raíz
  coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  base: random(2, 20)

respuesta: base
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es √({base}²)?"

pasos:
  - "La raíz cuadrada deshace el cuadrado: √({base}²) = {base}"

explicacion: |
  Elevar al cuadrado y después sacar raíz cuadrada son operaciones
  inversas: se cancelan entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque √2 no tenga una cantidad finita de cifras decimales, sigue siendo un número real, ubicable en la recta numérica."

explicacion: |
  No tener un valor "exacto y corto" no significa que no sea un número
  real de verdad — es el adelanto del próximo tema, irracionales.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sacar raíz es la operación inversa de elevar a una potencia: buscar qué número, elevado al índice de la raíz, da el radicando."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: distribucion-binomial (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "vocabulario"]

enunciado: "¿Qué modela la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "La cantidad de éxitos en n intentos independientes, todos con la misma probabilidad de éxito"
  - "El tiempo que pasa hasta el próximo éxito"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "La cantidad de éxitos en n intentos independientes, todos con la misma probabilidad de éxito"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "completar"]

tipo: completar
enunciado: "Completá: P(X=k) = C(n,k) × pᵏ × (1−p)^___."
respuestas_validas:
  - "n-k"
  - "n−k"

explicacion: |
  El exponente del complemento (1−p) es la cantidad de fracasos: n−k.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "combinaciones"]

enunciado: "En la fórmula binomial, ¿qué representa el factor C(n,k)?"
tipo: mc
opciones_explicitas:
  - "De cuántas formas distintas pueden caer exactamente k éxitos entre los n intentos"
  - "La probabilidad de un único intento exitoso"
  - "La cantidad total de intentos posibles"
respuesta: "De cuántas formas distintas pueden caer exactamente k éxitos entre los n intentos"

explicacion: |
  Es exactamente el mismo `C(n,k)` de `../combinaciones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 5
  p: 0.5
  k: uno_de([2, 3])

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Se tira una moneda {n} veces (p=0,5 de cara en cada tiro). ¿Cuál es la probabilidad de que salgan exactamente {k} caras (P(X={k}))?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Se combina la cantidad de formas posibles (combinatoria) con la
  probabilidad de una secuencia particular (probabilidad compuesta).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([4, 6])
  p: uno_de([0.2, 0.3, 0.7])
  k: uno_de([1, 2])

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un jugador convierte penales con probabilidad p={p} en cada intento (independientes entre sí). De {n} penales pateados, ¿cuál es la probabilidad de que convierta exactamente {k}?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Se aplica la misma fórmula con la probabilidad de éxito propia de
  este escenario.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "vocabulario"]

enunciado: "¿Cuáles son los tres requisitos para poder usar la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "Una cantidad fija de intentos independientes, con la misma probabilidad de éxito en cada uno, y sólo dos resultados posibles por intento"
  - "Que la cantidad de intentos sea siempre mayor a 30"
  - "Que la probabilidad de éxito cambie en cada intento"
respuesta: "Una cantidad fija de intentos independientes, con la misma probabilidad de éxito en cada uno, y sólo dos resultados posibles por intento"

explicacion: |
  Si la probabilidad cambiara de un intento a otro, la fórmula no
  aplicaría directo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "clasificar"]

enunciado: "Se sacan 3 cartas de un mazo SIN reposición, y se cuenta cuántas son ases. ¿Corresponde usar la fórmula binomial directo para este caso?"
tipo: mc
opciones_explicitas:
  - "No, porque sin reposición la probabilidad de sacar un as cambia de una extracción a la siguiente — no es constante como exige la binomial"
  - "Sí, porque cualquier conteo de 'éxitos' siempre es binomial"
respuesta: "No, porque sin reposición la probabilidad de sacar un as cambia de una extracción a la siguiente — no es constante como exige la binomial"

explicacion: |
  Es el mismo caso 'dependiente' de
  `../independencia-de-eventos-y-diagrama-de-arbol/` — rompe el
  requisito de probabilidad constante.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "completar"]

tipo: completar
enunciado: "Completá: el valor esperado de una distribución binomial es E(X) = n × ___."
respuestas_validas:
  - "p"

explicacion: |
  n intentos por la probabilidad de éxito de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([10, 20, 40])
  p: uno_de([0.1, 0.25, 0.5])

respuesta: redondear(n * p, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se repite un experimento {n} veces, con probabilidad de éxito p={p} en cada uno. ¿Cuál es el valor esperado de la cantidad de éxitos, E(X)?"

pasos:
  - "E(X) = {n} × {p} = {redondear(n * p, 2)}"

explicacion: |
  El valor esperado no tiene por qué ser un número entero: es un
  promedio a largo plazo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado E(X)=n×p de una binomial no tiene por qué ser un número entero, aunque X en sí (la cantidad de éxitos observada) siempre lo sea."

explicacion: |
  Es un promedio a largo plazo, no un resultado posible puntual — por
  ejemplo, E(X)=2,5 con n=5 y p=0,5.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([3, 4, 5])
  p: uno_de([0.2, 0.3])

respuesta: redondear((1 - p) ^ n, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con n={n} intentos y probabilidad de éxito p={p} en cada uno, ¿cuál es la probabilidad de que NO haya NINGÚN éxito (P(X=0))?"

pasos:
  - "C({n},0) = 1, así que P(X=0) = (1−{p})^{n} = {redondear((1 - p) ^ n, 4)}"

explicacion: |
  Con k=0, C(n,0)=1 y pᵏ=1, así que la fórmula se reduce a
  (1−p)ⁿ: todos los intentos fallan.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([3, 4, 5])
  p: uno_de([0.6, 0.8])

respuesta: redondear(p ^ n, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con n={n} intentos y probabilidad de éxito p={p} en cada uno, ¿cuál es la probabilidad de que TODOS sean éxitos (P(X={n}))?"

pasos:
  - "C({n},{n}) = 1, así que P(X={n}) = {p}^{n} = {redondear(p ^ n, 4)}"

explicacion: |
  Con k=n, C(n,n)=1 y (1−p)⁰=1, así que la fórmula se reduce a pⁿ:
  todos los intentos son éxito.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "aplicacion"]

enunciado: "Una máquina produce piezas con un 2% de probabilidad de defecto en cada una, independiente entre piezas. Se inspecciona un lote de 50 piezas. ¿Qué distribución conviene usar para calcular la probabilidad de encontrar exactamente 3 piezas defectuosas?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial, con n=50 y p=0,02"
  - "La distribución exponencial, con λ=0,02"
  - "La distribución normal, con media 50"
respuesta: "La distribución binomial, con n=50 y p=0,02"

explicacion: |
  Cantidad fija de intentos (50 piezas), independientes, misma
  probabilidad de defecto en cada una — el caso central de la
  binomial.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "aplicacion"]

enunciado: "Una pareja tiene 4 hijos. Cada hijo tiene, independientemente, una probabilidad de 1/4 de heredar un genotipo recesivo particular (según el cuadro de Punnett). ¿Qué distribución conviene usar para calcular la probabilidad de que exactamente 2 de los 4 hijos lo hereden?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial, con n=4 y p=1/4"
  - "La distribución de Poisson, con λ=4"
respuesta: "La distribución binomial, con n=4 y p=1/4"

explicacion: |
  Es la misma probabilidad compuesta de `../probabilidad-compuesta/`
  aplicada a genética, ahora generalizada a 'exactamente k de n'.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 4
  p: 0.25
  k: 2

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con {n} hijos y probabilidad p={p} de heredar el alelo recesivo cada uno (independiente), ¿cuál es la probabilidad de que exactamente {k} lo hereden?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Aplicación directa de la binomial a un caso genético con más de dos
  hijos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de P(X=0) + P(X=1) + ... + P(X=n) (para todos los valores posibles de k) siempre da exactamente 1, igual que en cualquier distribución de variable aleatoria discreta."

explicacion: |
  Es la misma propiedad general de `../variable-aleatoria-discreta-continua/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 5
  k: 3
  p_bajo: 0.2
  p_alto: 0.7

respuesta: (combinations(n, k) * p_alto ^ k * (1 - p_alto) ^ (n - k)) > (combinations(n, k) * p_bajo ^ k * (1 - p_bajo) ^ (n - k))
tipo: vf

enunciado: "Con n={n} y k={k}, ¿P(X={k}) es MAYOR cuando p={p_alto} que cuando p={p_bajo}?"

explicacion: |
  Con una probabilidad de éxito más alta, es más probable observar
  una cantidad alta de éxitos como k={k}.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución binomial es discreta, porque X (la cantidad de éxitos) siempre es un número entero entre 0 y n."

explicacion: |
  Es el ejemplo central de variable discreta usado en
  `../variable-aleatoria-discreta-continua/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "poisson"]

enunciado: "¿Qué distribución se obtiene como caso límite de la binomial cuando n es muy grande y p es muy chico, con n×p constante?"
tipo: mc
opciones_explicitas:
  - "La distribución de Poisson"
  - "La distribución normal"
  - "La distribución exponencial"
respuesta: "La distribución de Poisson"

explicacion: |
  Es la conexión mencionada en `../distribucion-de-poisson/`, entre
  'muchos intentos con probabilidad chica' y 'conteo de eventos
  raros'.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de obtener exactamente k éxitos en n intentos independientes, todos con la misma probabilidad de éxito"
  - "Para calcular el tiempo de espera hasta el próximo evento"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para calcular la probabilidad de obtener exactamente k éxitos en n intentos independientes, todos con la misma probabilidad de éxito"

explicacion: |
  Combina directo la combinatoria de `../combinaciones/` con la
  probabilidad compuesta de `../probabilidad-compuesta/`.
```

## Sección: esperanza-matematica-valor-esperado (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "vocabulario"]

enunciado: "¿Qué es el valor esperado E(X) de una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un promedio ponderado de los valores posibles, donde cada valor se pondera por su propia probabilidad de ocurrir"
  - "El valor más probable entre todos los posibles"
  - "El promedio simple de los valores posibles, sin considerar sus probabilidades"
respuesta: "Un promedio ponderado de los valores posibles, donde cada valor se pondera por su propia probabilidad de ocurrir"

explicacion: |
  A diferencia de la media simple, cada valor pesa según qué tan
  probable es.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "completar"]

tipo: completar
enunciado: "Completá: E(X) = x₁×P(x₁) + x₂×P(x₂) + ... + xₙ×___."
respuestas_validas:
  - "P(xₙ)"
  - "P(xn)"

explicacion: |
  Cada valor posible se multiplica por su propia probabilidad, y se
  suman todos los términos.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  v1: random(1, 3)
  v2: random(4, 6)
  v3: random(7, 9)

respuesta: redondear(0.3 * v1 + 0.5 * v2 + 0.2 * v3, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "X tiene distribución: P(X={v1})=0,3, P(X={v2})=0,5, P(X={v3})=0,2. ¿Cuánto vale E(X)?"

pasos:
  - "E(X) = {v1}×0,3 + {v2}×0,5 + {v3}×0,2"
  - "= {redondear(v1 * 0.3, 2)} + {redondear(v2 * 0.5, 2)} + {redondear(v3 * 0.2, 2)} = {redondear(0.3 * v1 + 0.5 * v2 + 0.2 * v3, 2)}"

explicacion: |
  Se multiplica cada valor por su probabilidad y se suman los
  resultados.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado E(X) no tiene por qué coincidir con ninguno de los valores que X puede tomar realmente — es un promedio a largo plazo, no un resultado posible puntual."

explicacion: |
  Por ejemplo, E(X)=4,7 aunque X sólo pueda valer 2, 5 u 8.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo: uno_de([50, 100])
  premio: uno_de([300, 500])
  p_ganar: uno_de([0.1, 0.15])

respuesta: redondear(premio * p_ganar - costo, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un juego cuesta ${costo} jugar y paga ${premio} con probabilidad {p_ganar} (y $0 el resto de las veces). ¿Cuál es el valor esperado de la GANANCIA neta de jugar (premio esperado menos el costo)?"

pasos:
  - "Premio esperado = {premio} × {p_ganar} = {redondear(premio * p_ganar, 2)}"
  - "Ganancia esperada = {redondear(premio * p_ganar, 2)} − {costo} = {redondear(premio * p_ganar - costo, 2)}"

explicacion: |
  Si el resultado es negativo, el juego es desfavorable en promedio
  para quien juega, aunque en una partida puntual se pueda ganar.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "aplicacion"]

enunciado: "Si el valor esperado de la ganancia de un juego de azar da negativo, ¿qué significa?"
tipo: mc
opciones_explicitas:
  - "Que, en promedio y a largo plazo, quien juega repetidamente pierde dinero — aunque una partida individual pueda ganar"
  - "Que es matemáticamente imposible ganar en ese juego"
  - "Que el juego siempre hace perder en cada partida, sin excepción"
respuesta: "Que, en promedio y a largo plazo, quien juega repetidamente pierde dinero — aunque una partida individual pueda ganar"

explicacion: |
  Es la lógica detrás de cualquier casino: el valor esperado del
  jugador es negativo, aunque partidas puntuales puedan ganar.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  premio_a: 1000
  p_a: 0.05
  premio_b: 200
  p_b: 0.3

respuesta: (premio_a * p_a) > (premio_b * p_b)
tipo: vf

enunciado: "Apuesta A paga ${premio_a} con probabilidad {p_a}. Apuesta B paga ${premio_b} con probabilidad {p_b}. Sin considerar el costo de entrada, ¿el valor esperado del premio de la Apuesta A es MAYOR que el de la Apuesta B?"

explicacion: |
  E(A) = {premio_a}×{p_a} = {premio_a * p_a}; E(B) = {premio_b}×{p_b}
  = {premio_b * p_b} — comparar el producto, no el premio ni la
  probabilidad por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "binomial"]

enunciado: "¿Qué relación tiene la fórmula E(X)=n×p de la distribución binomial con el valor esperado en general?"
tipo: mc
opciones_explicitas:
  - "Es el mismo promedio ponderado general, aplicado al caso particular de una variable que sólo puede tomar valores enteros de 0 a n"
  - "No tiene ninguna relación, son fórmulas completamente distintas"
  - "E(X)=n×p sólo aplica quando la variable es continua"
respuesta: "Es el mismo promedio ponderado general, aplicado al caso particular de una variable que sólo puede tomar valores enteros de 0 a n"

explicacion: |
  `../distribucion-binomial/` adelantó este resultado sin
  demostrarlo — es un caso particular de esta fórmula más general.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "problema"]

variables:
  valor1: uno_de([10, 20])
  p1: uno_de([0.4, 0.6])
  valor2: uno_de([50, 80])

respuesta: redondear(valor1 * p1 + valor2 * (1 - p1), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "X toma el valor {valor1} con probabilidad {p1}, y el valor {valor2} con la probabilidad restante. ¿Cuánto vale E(X)?"

pasos:
  - "P({valor2}) = 1 − {p1} = {redondear(1 - p1, 2)}"
  - "E(X) = {valor1}×{p1} + {valor2}×{redondear(1 - p1, 2)} = {redondear(valor1 * p1 + valor2 * (1 - p1), 2)}"

explicacion: |
  Con sólo dos valores posibles, sus probabilidades deben sumar 1.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "aplicacion"]

enunciado: "¿Cómo usa una aseguradora el valor esperado para decidir cuánto cobrar por una póliza?"
tipo: mc
opciones_explicitas:
  - "Calcula el valor esperado del siniestro (costo posible × probabilidad de que ocurra) y cobra por encima de ese valor, para tener ganancia en promedio"
  - "Cobra siempre el mismo monto fijo, sin ningún cálculo de probabilidad"
  - "El valor esperado no tiene ninguna aplicación en seguros"
respuesta: "Calcula el valor esperado del siniestro (costo posible × probabilidad de que ocurra) y cobra por encima de ese valor, para tener ganancia en promedio"

explicacion: |
  Es la misma lógica de `../../economia/valor-esperado-riesgo/`,
  aplicada a seguros en particular.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  ganancia: uno_de([200, 300])
  p_ganancia: 0.4
  perdida: uno_de([100, 150])
  p_perdida: 0.5

respuesta: redondear(ganancia * p_ganancia - perdida * p_perdida, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una inversión da una ganancia de ${ganancia} con probabilidad {p_ganancia}, una pérdida de ${perdida} con probabilidad {p_perdida}, y queda igual el resto de las veces (probabilidad {redondear(1 - p_ganancia - p_perdida, 2)}, resultado $0). ¿Cuál es el valor esperado del resultado?"

pasos:
  - "E(X) = {ganancia}×{p_ganancia} + (−{perdida})×{p_perdida} + 0×{redondear(1 - p_ganancia - p_perdida, 2)}"
  - "= {redondear(ganancia * p_ganancia, 2)} − {redondear(perdida * p_perdida, 2)} = {redondear(ganancia * p_ganancia - perdida * p_perdida, 2)}"

explicacion: |
  Los valores negativos (pérdidas) se ponderan igual que los
  positivos: por su propia probabilidad.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la media simple de `../media-mediana-y-moda/` (que pesa todos los datos por igual), el valor esperado pesa cada resultado posible según su propia probabilidad de ocurrir."

explicacion: |
  Es la diferencia central entre 'promedio de datos ya medidos' y
  'promedio ponderado de resultados posibles antes de que ocurran'.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo_siniestro: 10000
  p_siniestro: uno_de([0.02, 0.05])

respuesta: redondear(costo_siniestro * p_siniestro, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un siniestro cuesta en promedio ${costo_siniestro}, y ocurre con probabilidad {p_siniestro} en un año. ¿Cuál es el valor esperado del costo anual del siniestro (lo mínimo que debería cobrar la aseguradora, sin ganancia)?"

pasos:
  - "E(costo) = {costo_siniestro} × {p_siniestro} = {redondear(costo_siniestro * p_siniestro, 2)}"

explicacion: |
  Cualquier prima por debajo de este valor haría perder dinero a la
  aseguradora, en promedio, a largo plazo.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el valor esperado de una variable aleatoria con muchos valores posibles, hay que sumar TODOS los términos (cada valor por su probabilidad), no sólo el valor más probable."

explicacion: |
  Ignorar los demás valores posibles subestima o distorsiona el
  promedio real.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "problema"]

respuesta: redondear((1 + 2 + 3 + 4 + 5 + 6) / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un dado de 6 caras tiene la misma probabilidad (1/6) para cada resultado del 1 al 6. ¿Cuál es el valor esperado del resultado de un tiro?"

pasos:
  - "E(X) = 1×1/6 + 2×1/6 + 3×1/6 + 4×1/6 + 5×1/6 + 6×1/6"
  - "= (1+2+3+4+5+6)/6 = {redondear((1 + 2 + 3 + 4 + 5 + 6) / 6, 3)}"

explicacion: |
  Cuando todos los resultados tienen la misma probabilidad, el valor
  esperado coincide con el promedio simple.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "aplicacion"]

enunciado: "¿Cómo ayuda el valor esperado a decidir entre dos inversiones de riesgo distintas?"
tipo: mc
opciones_explicitas:
  - "Comparando el promedio ponderado del retorno posible de cada una, aunque también haga falta mirar la dispersión (riesgo) alrededor de ese promedio"
  - "El valor esperado garantiza el resultado exacto de la inversión, sin ningún riesgo"
  - "El valor esperado no sirve para decisiones financieras"
respuesta: "Comparando el promedio ponderado del retorno posible de cada una, aunque también haga falta mirar la dispersión (riesgo) alrededor de ese promedio"

explicacion: |
  Es exactamente el enfoque de `../../economia/valor-esperado-riesgo/`:
  valor esperado Y dispersión, no sólo uno de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  v1: 100
  p1: 0.7
  v2: 500
  p2: 0.25
  v3: 2000
  p3: 0.05

respuesta: redondear(v1 * p1 + v2 * p2 + v3 * p3, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un premio de lotería da ${v1} con probabilidad {p1}, ${v2} con probabilidad {p2}, y ${v3} con probabilidad {p3}. ¿Cuál es el valor esperado del premio?"

pasos:
  - "E(X) = {v1}×{p1} + {v2}×{p2} + {v3}×{p3}"
  - "= {redondear(v1 * p1, 2)} + {redondear(v2 * p2, 2)} + {redondear(v3 * p3, 2)} = {redondear(v1 * p1 + v2 * p2 + v3 * p3, 2)}"

explicacion: |
  Aunque el premio grande (${v3}) sea llamativo, su probabilidad
  chica ({p3}) hace que aporte relativamente poco al valor esperado
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado describe el promedio a largo plazo de MUCHAS repeticiones, no predice el resultado de una única repetición puntual del experimento."

explicacion: |
  Por eso un juego con valor esperado negativo puede, en una partida
  puntual, dar ganancia igual.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo: 20
  p_ganar: 0.2

respuesta: costo / p_ganar
tipo: input

enunciado: "Un juego cuesta ${costo} jugar y sólo paga premio (y nada más) con probabilidad {p_ganar}. ¿Cuánto debería ser el premio para que el juego sea 'justo' (valor esperado de la ganancia neta = 0)?"

pasos:
  - "premio × {p_ganar} − {costo} = 0"
  - "premio = {costo} / {p_ganar} = {costo / p_ganar}"

explicacion: |
  Un juego 'justo' es aquel donde, en promedio, ni la casa ni el
  jugador ganan ni pierden dinero.
```

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el valor esperado?"
tipo: mc
opciones_explicitas:
  - "Para tomar decisiones racionales bajo incertidumbre, resumiendo en un solo número el resultado promedio esperado de una situación azarosa"
  - "Para predecir con certeza el resultado de un único evento futuro"
  - "Sólo se usa en juegos de casino, sin otras aplicaciones"
respuesta: "Para tomar decisiones racionales bajo incertidumbre, resumiendo en un solo número el resultado promedio esperado de una situación azarosa"

explicacion: |
  Es la base de seguros, inversiones y cualquier decisión que
  involucre azar y consecuencias medibles.
```

## Sección: irracionales-y-reales (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

enunciado: "¿Qué es un número irracional?"
tipo: mc
opciones_explicitas:
  - "Un número que no se puede escribir como fracción de dos enteros"
  - "Cualquier número negativo"
  - "Un número muy grande"
respuesta: "Un número que no se puede escribir como fracción de dos enteros"

explicacion: |
  Su desarrollo decimal tiene infinitas cifras que nunca repiten un
  patrón.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  n: random(2, 99)
  k: floor(sqrt(n))

respuesta: (k * k != n)
tipo: vf

enunciado: "¿Es √{n} un número irracional?"

explicacion: |
  Es irracional siempre que {n} no sea un cuadrado perfecto (que la raíz
  no dé exacta).
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  k: random(2, 20)
  n: k ^ 2

respuesta: falso
tipo: vf

enunciado: "¿Es √{n} un número irracional?"

explicacion: |
  {n} es {k}², un cuadrado perfecto: su raíz da exacta ({k}), así que es
  racional, no irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "√2 es un número irracional."

explicacion: |
  Se demuestra por reducción al absurdo: no existe ninguna fracción a/b
  que sea exactamente igual a √2.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) es un número irracional."

explicacion: |
  3,14159265... nunca repite un patrón: π no se puede escribir como
  fracción de dos enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π es trascendente, una categoría más exigente que ser irracional: no es raíz de ningún polinomio con coeficientes racionales (a diferencia de √2, que sí es raíz de x² − 2 = 0)."

explicacion: |
  Todo trascendente es irracional, pero no todo irracional es
  trascendente — √2 es el ejemplo que marca la diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

enunciado: "¿Qué es el conjunto de los números reales?"
tipo: mc
opciones_explicitas:
  - "La unión de todos los racionales y todos los irracionales"
  - "Sólo los números que se pueden contar"
  - "Sólo los números positivos"
respuesta: "La unión de todos los racionales y todos los irracionales"

explicacion: |
  Todo punto de la recta numérica es un número real, sea racional o
  irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número racional es también un número real."

explicacion: |
  Los reales incluyen a TODOS los racionales, sin excepción.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número irracional es también un número real."

explicacion: |
  Los reales incluyen a TODOS los irracionales también: es la unión de
  los dos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Todo número real es racional."

explicacion: |
  No es cierto: √2 y π son reales, pero no son racionales — son
  irracionales.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "0,333... (con el 3 repitiéndose para siempre) es un número racional, no irracional."

explicacion: |
  Aunque tenga infinitas cifras, sigue un patrón que se repite (periódico)
  — eso lo hace racional: 0,333... = 1/3.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un número con infinitas cifras decimales que nunca repiten ningún patrón es irracional."

explicacion: |
  Es exactamente la definición de número irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  n_no_cuadrado: uno_de([2, 3, 5, 7, 10, 11, 15])

respuesta: sqrt(n_no_cuadrado)
tipo: mc
opciones_explicitas:
  - sqrt(n_no_cuadrado)
  - 1 / 3
  - 0.5

enunciado: "¿Cuál de estos tres números es irracional?"

explicacion: |
  1/3 y 0,5 son fracciones (racionales); una raíz no exacta como
  √{n_no_cuadrado} no se puede escribir como fracción.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  k: random(2, 20)
  n_cuadrado: k ^ 2
  n_no_cuadrado: uno_de([2, 3, 5, 7, 10, 11])

respuesta: sqrt(n_cuadrado)
tipo: mc
opciones_explicitas:
  - sqrt(n_cuadrado)
  - sqrt(n_no_cuadrado)

enunciado: "¿Cuál de estos dos números es racional (da una raíz exacta)?"

explicacion: |
  √{n_cuadrado} da exacto ({k}), así que es racional; la otra raíz no es
  exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier fracción de dos números enteros (como 1/7) es un número racional."

explicacion: |
  Es la propia definición de racional: se puede escribir como a/b.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con los números reales, cada punto de la recta numérica corresponde a exactamente un número, sin huecos."

explicacion: |
  Antes de sumar los irracionales, había puntos de la recta (como donde
  va √2) sin un número racional que los ocupara exactamente.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales"]

variables:
  n: random(100, 999)
  k: floor(sqrt(n))

respuesta: (k * k != n)
tipo: vf

enunciado: "¿Es √{n} irracional?"

explicacion: |
  Se verifica si {n} es o no un cuadrado perfecto.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "La diagonal de un cuadrado de lado 1 mide √2, un número irracional."

explicacion: |
  Es el mismo ejemplo histórico que llevó a descubrir los irracionales:
  ni siquiera una figura tan simple como un cuadrado de lado 1 tiene
  diagonal racional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "comparacion"]

variables:
  a: uno_de([2, 3, 5, 7, 10])
  b: uno_de([2, 3, 5, 7, 10])

restricciones:
  - a != b

respuesta: (sqrt(a) > sqrt(b))
tipo: vf

enunciado: "¿Es √{a} mayor que √{b}?"

explicacion: |
  Aunque los dos sean irracionales (no se puedan escribir exactos), se
  pueden seguir comparando: a mayor radicando, mayor la raíz.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["reales", "orden"]

tipo: ordenar
enunciado: "Ordená estos números reales de menor a mayor (aproximá los irracionales: √2≈1,41, π≈3,14)."
opciones_explicitas:
  - "π"
  - "1"
  - "√2"
  - "3,5"
respuesta_orden: ["1", "√2", "π", "3,5"]

explicacion: |
  Racionales e irracionales se ordenan juntos en la misma recta numérica,
  sin ninguna regla especial distinta.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número entero es racional (se puede escribir como una fracción con denominador 1)."

explicacion: |
  5 = 5/1: cualquier entero es, trivialmente, también una fracción.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

enunciado: "¿Cuál de estos conjuntos NO está incluido dentro de los números reales?"
tipo: mc
opciones_explicitas:
  - "Ninguno, todos los que aparecen en el mapa hasta acá están incluidos"
  - "Los números naturales"
  - "Los números irracionales"
respuesta: "Ninguno, todos los que aparecen en el mapa hasta acá están incluidos"

explicacion: |
  Naturales, enteros, racionales (fracciones y decimales) e irracionales
  son todos subconjuntos de los números reales.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "22/7 es exactamente igual a π."

explicacion: |
  22/7 (≈3,142857...) es sólo una aproximación racional usada en la
  práctica; π es irracional, así que ninguna fracción puede ser
  exactamente igual a π.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los números reales son la unión de los racionales y los irracionales, y llenan por completo la recta numérica, sin dejar ningún punto sin número."

explicacion: |
  Es la idea de cierre de todo el bloque numérico: con los reales, la
  recta numérica queda completa.
```

## Sección: probabilidad-condicional (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "vocabulario"]

enunciado: "¿Qué es P(A|B), la probabilidad condicional de A dado B?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de que ocurra A, ya sabiendo que B ocurrió"
  - "La probabilidad de que ocurran A y B al mismo tiempo"
  - "La probabilidad de que no ocurra ni A ni B"
respuesta: "La probabilidad de que ocurra A, ya sabiendo que B ocurrió"

explicacion: |
  Saber que B pasó cambia el universo de posibilidades sobre el que
  se calcula la probabilidad de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional", "completar"]

tipo: completar
enunciado: "Completá: P(A|B) = P(A y B) / ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Siempre con P(B) > 0.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: uno_de([0.1, 0.15, 0.2])
  p_b: uno_de([0.3, 0.4, 0.5])

respuesta: redondear(p_a_y_b / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(A y B) = {p_a_y_b} y P(B) = {p_b}. ¿Cuál es P(A|B)?"

pasos:
  - "P(A|B) = {p_a_y_b} / {p_b} = {redondear(p_a_y_b / p_b, 3)}"

explicacion: |
  Se divide la probabilidad conjunta por la probabilidad del evento
  que ya se sabe que ocurrió.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si A y B son eventos independientes, entonces P(A|B) = P(A) — saber que B ocurrió no cambia en nada la probabilidad de A."

explicacion: |
  Es la definición formal de independencia en términos de
  probabilidad condicional.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a: 0.3
  p_a_dado_b: uno_de([0.3, 0.5])

respuesta: p_a_dado_b == p_a
tipo: vf

enunciado: "P(A) = {p_a} y P(A|B) = {p_a_dado_b}. ¿Son A y B eventos independientes?"

explicacion: |
  Son independientes sólo si P(A|B) es exactamente igual a P(A) — si
  cambia, B sí aporta información sobre A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

respuesta: redondear(3 / 39, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 ases), se saca una carta y sale as (no se devuelve). ¿Cuál es la probabilidad de que la SEGUNDA carta también sea as, dado que la primera lo fue?"

pasos:
  - "Quedan 39 cartas, de las cuales 3 son ases (ya salió uno)."
  - "P(as en 2ª | as en 1ª) = 3/39 = {redondear(3 / 39, 3)}"

explicacion: |
  Es exactamente el caso 'sin reposición' de
  `../independencia-de-eventos-y-diagrama-de-arbol/`, formalizado como
  probabilidad condicional.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "vocabulario"]

enunciado: "¿Cómo se lee la notación P(A|B)?"
tipo: mc
opciones_explicitas:
  - "Probabilidad de A dado B"
  - "Probabilidad de A dividido B"
  - "Probabilidad de A o B"
respuesta: "Probabilidad de A dado B"

explicacion: |
  La barra vertical se lee "dado".
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  estudio_aprobo: 40
  no_estudio_aprobo: 15
  total_aprobo: estudio_aprobo + no_estudio_aprobo

respuesta: redondear(estudio_aprobo / total_aprobo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De 100 estudiantes: {estudio_aprobo} estudiaron y aprobaron, {no_estudio_aprobo} no estudiaron pero igual aprobaron. Entre los que aprobaron en total, ¿cuál es la probabilidad de que ese estudiante haya estudiado (P(estudió | aprobó))?"

pasos:
  - "Total de aprobados = {estudio_aprobo} + {no_estudio_aprobo} = {total_aprobo}"
  - "P(estudió | aprobó) = {estudio_aprobo}/{total_aprobo} = {redondear(estudio_aprobo / total_aprobo, 3)}"

explicacion: |
  Se restringe el universo a la columna 'aprobó' antes de calcular la
  proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "aplicacion"]

enunciado: "'¿Cuál es la probabilidad de tener una enfermedad, dado que el test dio positivo?' es una pregunta de qué tipo de probabilidad?"
tipo: mc
opciones_explicitas:
  - "Probabilidad condicional: P(enfermedad | test positivo)"
  - "Probabilidad simple, sin ninguna condición"
  - "Probabilidad compuesta del tipo 'Y', sin condicionar nada"
respuesta: "Probabilidad condicional: P(enfermedad | test positivo)"

explicacion: |
  Es el ejemplo central de `../teorema-de-bayes/`, el módulo que
  sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "En general, P(A|B) no es lo mismo que P(B|A) — invertir el orden de la condición puede cambiar el resultado."

explicacion: |
  Es exactamente el punto de partida del teorema de Bayes: cómo pasar
  de un condicional al otro.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: uno_de([0.06, 0.09, 0.12])
  p_b: uno_de([0.2, 0.3])

respuesta: redondear(p_a_y_b / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En una fábrica, P(defecto Y turno noche) = {p_a_y_b} y P(turno noche) = {p_b}. ¿Cuál es la probabilidad de defecto, dado que la pieza se hizo en el turno noche?"

pasos:
  - "P(defecto | turno noche) = {p_a_y_b} / {p_b} = {redondear(p_a_y_b / p_b, 3)}"

explicacion: |
  Aplicación directa de la fórmula a control de calidad.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional", "arbol"]

enunciado: "En un diagrama de árbol SIN reposición, ¿qué representan las probabilidades de las ramas del segundo paso?"
tipo: mc
opciones_explicitas:
  - "Probabilidades condicionales: la probabilidad de cada resultado del segundo paso, dado lo que ya ocurrió en el primero"
  - "Siempre son idénticas a las probabilidades del primer paso"
  - "No tienen relación con lo que pasó en el primer paso"
respuesta: "Probabilidades condicionales: la probabilidad de cada resultado del segundo paso, dado lo que ya ocurrió en el primero"

explicacion: |
  Por eso cambian de una rama a otra en el caso sin reposición.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  estudio_no_aprobo: 10
  estudio_aprobo: 40
  total_estudio: estudio_aprobo + estudio_no_aprobo

respuesta: redondear(estudio_aprobo / total_estudio, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De los estudiantes que SÍ estudiaron: {estudio_aprobo} aprobaron y {estudio_no_aprobo} no aprobaron. ¿Cuál es P(aprobó | estudió)?"

pasos:
  - "Total que estudió = {estudio_aprobo} + {estudio_no_aprobo} = {total_estudio}"
  - "P(aprobó | estudió) = {estudio_aprobo}/{total_estudio} = {redondear(estudio_aprobo / total_estudio, 3)}"

explicacion: |
  Notar que este resultado es distinto del de P(estudió | aprobó) del
  problema anterior — confirma que invertir la condición cambia el
  resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular una probabilidad condicional P(A|B) equivale a restringir el espacio muestral sólo a los casos donde B ya ocurrió, y calcular ahí la proporción de A."

explicacion: |
  Es la misma idea de la tabla de contingencia: mirar sólo la
  fila/columna donde se cumple la condición.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "completar"]

tipo: completar
enunciado: "Despejando la fórmula de probabilidad condicional: P(A y B) = P(A|B) × ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Es la misma fórmula de `../probabilidad-compuesta/`, ahora expresada
  con probabilidad condicional en vez de asumir independencia directo.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_b: uno_de([0.4, 0.6])
  p_a_dado_b: uno_de([0.5, 0.7])

respuesta: redondear(p_a_dado_b * p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(B) = {p_b} y P(A|B) = {p_a_dado_b}. ¿Cuál es P(A y B)?"

pasos:
  - "P(A y B) = P(A|B) × P(B) = {p_a_dado_b} × {p_b} = {redondear(p_a_dado_b * p_b, 3)}"

explicacion: |
  Es la fórmula de probabilidad condicional despejada para la
  probabilidad conjunta.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: 0.15
  p_b: 0.3
  p_a: 0.4

respuesta: (p_a_y_b / p_b) > p_a
tipo: vf

enunciado: "P(A y B) = {p_a_y_b}, P(B) = {p_b}, P(A) = {p_a}. ¿Es P(A|B) MAYOR que P(A) (es decir, saber que ocurrió B hace más probable a A)?"

explicacion: |
  P(A|B) = {p_a_y_b}/{p_b} = 0,5, que es mayor que P(A) = {p_a} — B
  está asociado con una mayor probabilidad de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Si P(A|B) es mayor que P(A), entonces saber que B ocurrió aumenta la probabilidad de A (hay una asociación positiva entre ambos eventos)."

explicacion: |
  Si en cambio P(A|B) fuera menor que P(A), B estaría asociado con
  una probabilidad MENOR de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Si B implica necesariamente A (siempre que ocurre B, también ocurre A), entonces P(A|B) = 1."

explicacion: |
  El espacio muestral restringido a B queda completamente contenido
  dentro de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la probabilidad condicional?"
tipo: mc
opciones_explicitas:
  - "Para recalcular una probabilidad cuando aparece información nueva (que otro evento ya ocurrió), achicando el universo de posibilidades"
  - "Sólo sirve para calcular probabilidades de eventos independientes"
  - "Es sólo otro nombre para la probabilidad simple"
respuesta: "Para recalcular una probabilidad cuando aparece información nueva (que otro evento ya ocurrió), achicando el universo de posibilidades"

explicacion: |
  Es el prerrequisito directo de `../teorema-de-bayes/`, que invierte
  esta misma fórmula.
```

