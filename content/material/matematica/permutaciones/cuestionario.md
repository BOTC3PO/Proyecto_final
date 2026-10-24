# Matemática — Permutaciones (cuestionario, 24 preguntas VBLang)

> Tema: `CJ5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una permutación

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "vocabulario"]

enunciado: "¿Qué es una permutación de un conjunto de n elementos?"
tipo: mc
opciones_explicitas:
  - "Cada una de las formas distintas de ordenar TODOS los elementos, sin dejar ninguno afuera y sin repetir ninguno"
  - "Cada una de las formas de elegir sólo una parte de los elementos"
  - "Cada una de las formas de elegir elementos sin importar el orden"
respuesta: "Cada una de las formas distintas de ordenar TODOS los elementos, sin dejar ninguno afuera y sin repetir ninguno"

explicacion: |
  Usa el conjunto completo — a diferencia de variaciones y
  combinaciones, que usan sólo una parte.
```

### 2 — Completar: la fórmula del factorial

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "completar"]

tipo: completar
enunciado: "Completá: n! = n × (n−1) × (n−2) × ... × 2 × ___."
respuestas_validas:
  - "1"

explicacion: |
  El producto termina siempre en 1.
```

### 3 — Problema: factorial directo

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuántas permutaciones distintas tiene un conjunto de {n} elementos?"

pasos:
  - "{n}! = {factorial(n)}"

explicacion: |
  Se multiplican todos los números enteros desde {n} hasta 1.
```

### 4 — El factorial de 0

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, 0! = 1 (hay exactamente una forma de 'ordenar' un conjunto vacío: no hacer nada)."

explicacion: |
  Es una convención necesaria para que las fórmulas de variaciones y
  combinaciones sigan funcionando en los casos extremos.
```

### 5 — El factorial de 1

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "1! = 1 (con un solo elemento, hay una única forma de 'ordenarlo')."

explicacion: |
  No hay nada que reordenar con un solo elemento.
```

### 6 — Problema: ordenar personas en una fila

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  personas: uno_de([4, 5, 6, 7])

respuesta: factorial(personas)
tipo: input

enunciado: "¿De cuántas formas distintas se pueden ordenar {personas} personas en una fila?"

pasos:
  - "{personas}! = {factorial(personas)}"

explicacion: |
  Cada orden distinto de la fila es una permutación diferente.
```

### 7 — Problema: orden de llegada en una carrera

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  corredores: uno_de([4, 5, 6])

respuesta: factorial(corredores)
tipo: input

enunciado: "En una carrera con {corredores} corredores, ¿de cuántas formas distintas puede quedar el orden de llegada completo (1° a {corredores}°), sin empates?"

pasos:
  - "{corredores}! = {factorial(corredores)}"

explicacion: |
  Es una permutación de los {corredores} corredores en las
  {corredores} posiciones de llegada.
```

### 8 — Problema: lista de reproducción con todo un álbum

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  canciones: uno_de([5, 6, 7, 8])

respuesta: factorial(canciones)
tipo: input

enunciado: "Un álbum tiene {canciones} canciones. ¿De cuántos órdenes distintos se puede armar una lista de reproducción que use TODAS las canciones del álbum?"

pasos:
  - "{canciones}! = {factorial(canciones)}"

explicacion: |
  Usa todas las canciones (no una parte), así que es una permutación.
```

### 9 — Por qué el factorial crece tan rápido

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

enunciado: "¿Por qué el factorial crece mucho más rápido que una multiplicación por un número fijo?"
tipo: mc
opciones_explicitas:
  - "Porque cada término nuevo multiplica por un número que también crece (n, n−1, n−2...), no por un factor constante"
  - "En realidad el factorial crece a la misma velocidad que cualquier multiplicación"
  - "Porque siempre se multiplica por 10"
respuesta: "Porque cada término nuevo multiplica por un número que también crece (n, n−1, n−2...), no por un factor constante"

explicacion: |
  Por eso 10! (3.628.800) es enormemente más grande que 10×9=90.
```

### 10 — Problema: comparar factoriales consecutivos

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([4, 5, 6, 7])

respuesta: n + 1
tipo: input

enunciado: "¿Cuántas veces más grande es ({n}+1)! comparado con {n}!?"

pasos:
  - "({n}+1)! = ({n}+1) × {n}! — así que la razón es exactamente {n}+1 = {n + 1}"

explicacion: |
  Pasar de n! a (n+1)! agrega un factor más: multiplicar por (n+1).
```

### 11 — El factorial de cualquier n≥2 es par

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier n ≥ 2, n! es siempre un número par."

explicacion: |
  El producto n × (n−1) × ... × 2 × 1 incluye siempre el factor 2, así
  que el resultado es múltiplo de 2.
```

### 12 — Ordenar: pasos para calcular una permutación

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular de cuántas formas se pueden ordenar n elementos, usando el principio multiplicativo."
tipo: ordenar
opciones_explicitas:
  - "Para el último elemento por ubicar queda 1 sola opción"
  - "Para el primer lugar hay n opciones disponibles"
  - "Para el segundo lugar hay n−1 opciones (ya se usó una), y así sucesivamente"
respuesta_orden: ["Para el primer lugar hay n opciones disponibles", "Para el segundo lugar hay n−1 opciones (ya se usó una), y así sucesivamente", "Para el último elemento por ubicar queda 1 sola opción"]
explicacion: |
  Multiplicar esa secuencia completa (n, n−1, ..., 1) es exactamente
  n!.
```

### 13 — Problema: anagramas de una palabra con letras distintas

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  letras: uno_de([4, 5, 6])

respuesta: factorial(letras)
tipo: input

enunciado: "Una palabra tiene {letras} letras, TODAS distintas entre sí. ¿Cuántos anagramas distintos (reordenamientos de esas letras) se pueden formar, tengan sentido o no?"

pasos:
  - "{letras}! = {factorial(letras)}"

explicacion: |
  Cada anagrama es una permutación distinta de las {letras} letras.
```

### 14 — La permutación usa todos los elementos

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Una permutación siempre usa TODOS los elementos del conjunto — ninguno queda afuera."

explicacion: |
  Es la diferencia clave con variaciones y combinaciones, que usan
  sólo una parte.
```

### 15 — Aplicación real: contraseña con todas las letras disponibles

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "aplicacion"]

enunciado: "Si una contraseña tiene que usar EXACTAMENTE las letras A, B, C, D (todas, sin repetir, en algún orden), ¿qué se necesita calcular para saber cuántas contraseñas distintas son posibles?"
tipo: mc
opciones_explicitas:
  - "Una permutación de las 4 letras: 4!"
  - "Una suma de las 4 letras"
  - "El cuadrado de 4"
respuesta: "Una permutación de las 4 letras: 4!"

explicacion: |
  Se usan todas las letras disponibles, sin dejar ninguna afuera.
```

### 16 — Problema: factorial de un número más grande

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuánto es {n}!?"

pasos:
  - "{n}! = {n} × {n-1} × ... × 1 = {factorial(n)}"

explicacion: |
  A partir de 7-8 elementos, la cantidad de permutaciones ya es enorme.
```

### 17 — El factorial no está definido para negativos (en este contexto)

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "El factorial de un número negativo no tiene sentido en el contexto de contar permutaciones (no se puede ordenar una cantidad negativa de elementos)."

explicacion: |
  n siempre representa una cantidad de elementos, así que tiene que
  ser 0 o un entero positivo.
```

### 18 — Completar: notación del factorial

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de permutaciones de n elementos se escribe con el símbolo n ___ (factorial)."
respuestas_validas:
  - "!"

explicacion: |
  Se lee "n factorial".
```

### 19 — Problema: amigos sentados en fila

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  amigos: uno_de([4, 5, 6])

respuesta: factorial(amigos)
tipo: input

enunciado: "{amigos} amigos van al cine y hay exactamente {amigos} asientos en fila. ¿De cuántas formas distintas se pueden sentar?"

pasos:
  - "{amigos}! = {factorial(amigos)}"

explicacion: |
  Cada asiento distinto para cada persona es una permutación.
```

### 20 — Diferencia con el principio multiplicativo general

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

enunciado: "¿Cómo se relaciona una permutación con el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Es el caso particular donde en cada paso hay una opción menos disponible, porque se usan todos los elementos sin repetir"
  - "No tiene ninguna relación con el principio multiplicativo"
  - "Es el principio multiplicativo, pero sumando en vez de multiplicando"
respuesta: "Es el caso particular donde en cada paso hay una opción menos disponible, porque se usan todos los elementos sin repetir"

explicacion: |
  n × (n−1) × (n−2) × ... es exactamente la forma del principio
  multiplicativo con una opción menos en cada paso.
```

### 21 — Problema: verificar 4! = 24

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: 24
tipo: input

enunciado: "¿Cuánto es 4! (4 factorial)?"

pasos:
  - "4! = 4 × 3 × 2 × 1 = 24"

explicacion: |
  Es un valor que conviene recordar de memoria, por lo seguido que
  aparece.
```

### 22 — Problema: diferencia entre dos factoriales consecutivos

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([4, 5, 6])

respuesta: factorial(n + 1) - factorial(n)
tipo: input

enunciado: "¿Cuál es la diferencia entre ({n}+1)! y {n}!?"

pasos:
  - "({n}+1)! = {factorial(n + 1)}"
  - "{n}! = {factorial(n)}"
  - "Diferencia = {factorial(n + 1)} − {factorial(n)} = {factorial(n + 1) - factorial(n)}"

explicacion: |
  No es una resta trivial — el factorial crece tan rápido que la
  diferencia entre dos consecutivos también es grande.
```

### 23 — El factorial de un conjunto con un solo elemento

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: 1
tipo: input

enunciado: "¿De cuántas formas distintas se puede 'ordenar' un conjunto de un solo elemento?"

explicacion: |
  Con un solo elemento no hay nada que reordenar: sólo hay 1 forma.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular permutaciones?"
tipo: mc
opciones_explicitas:
  - "Para saber de cuántas formas distintas se puede ordenar UN CONJUNTO COMPLETO de elementos"
  - "Sólo sirve para calcular probabilidades de lotería"
  - "Sólo aplica a conjuntos de números, nunca a personas u objetos"
respuesta: "Para saber de cuántas formas distintas se puede ordenar UN CONJUNTO COMPLETO de elementos"

explicacion: |
  Es también la pieza (el factorial) que hace falta para calcular
  variaciones y combinaciones, los dos módulos hermanos que siguen.
```
