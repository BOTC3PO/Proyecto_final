# Matemática — Teorema del binomio: expansión de (a+b)ⁿ (cuestionario, 20 preguntas VBLang)

> Tema: `D18`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué dice el teorema del binomio

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

### 2 — Completar: término general del desarrollo

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

### 3 — Problema: calcular un término específico

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

### 4 — Problema: expandir (a+b)²

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

### 5 — Problema: expandir (a+b)³

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

### 6 — Qué es el triángulo de Pascal

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

### 7 — Problema: fila del triángulo de Pascal

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

### 8 — Los coeficientes del binomio son C(n,k)

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

### 9 — Problema: suma de todos los coeficientes

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

### 10 — Cantidad de términos del desarrollo

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

### 11 — Problema: coeficiente de un término con exponente específico

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

### 12 — Relación con la distribución binomial

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

### 13 — Problema: (a-b)ⁿ con signos alternados

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

### 14 — Problema: término central con n par

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

### 15 — Por qué es útil evitar expandir a mano

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

### 16 — Problema: verificar el desarrollo con valores numéricos

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

### 17 — C(n,0) y C(n,n) siempre son 1

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

### 18 — Problema: comparar coeficiente del binomio con la binomial

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

### 19 — Problema: simetría de los coeficientes

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

### 20 — Cierre: para qué sirve el teorema del binomio

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
