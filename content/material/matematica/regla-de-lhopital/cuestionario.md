# Matematica — regla de lhopital (cuestionario, 31 preguntas VBLang)

> Tema: `matematica/regla-de-lhopital`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  nombre: "L'Hôpital"

tipo: completar

enunciado: "La regla que permite resolver indeterminaciones 0/0 y ∞/∞ mediante derivadas se llama Regla de {nombre}."

respuestas_validas:
  - "L'Hôpital"
  - "Lhopital"
  - "lhopital"
  - "l'Hôpital"

explicacion: |
  La regla lleva el nombre del matemático francés Guillaume de l'Hôpital.
```

### 2 — pregunta 2

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  forma: "0/0"

tipo: completar

enunciado: "Una de las dos formas indeterminadas principales que permiten aplicar L'Hôpital es {forma}."

respuestas_validas:
  - "0/0"
  - "0 sobre 0"
  - "cero sobre cero"

explicacion: |
  Las formas son 0/0 y ∞/∞.
```

### 3 — pregunta 3

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["historia"]

variables:
  apellido: "L'Hôpital"

tipo: completar

enunciado: "La regla lleva el nombre del matemático {apellido}."

respuestas_validas:
  - "L'Hôpital"
  - "Lhopital"
  - "l'Hôpital"

explicacion: |
  Guillaume de l'Hôpital publicó la regla en 1696.
```

### 4 — pregunta 4

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["limites", "lhopital", "polinomios"]

variables:
  a: random(2, 5)
  b: random(1, 3)

respuesta: "{a/b}"
tipo: input

enunciado: "Calcule el límite: lim(x→0) (x^{a} + {b}x) / x"

explicacion: |
  Al sustituir x=0 obtenemos 0/0. Aplicamos L'Hôpital derivando numerador y denominador:
  Derivada num: a*x^{a-1} + {b}
  Derivada den: 1
  El límite es a*0^{a-1} + {b}. Como a >= 2, el término con x se anula.
  Resultado: {b}.
```

### 5 — pregunta 5

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "seno"]

variables:
  k: random(2, 6)

respuesta: k
tipo: input

enunciado: "Calcule: lim(x→0) (sin(k*x)) / x"

explicacion: |
  Es indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: k*cos(k*x)
  Derivada den: 1
  Evaluar en x=0: k*cos(0)/1 = k*1 = {k}.
```

### 6 — pregunta 6

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "infinito", "logaritmo"]

variables:
  n: random(2, 5)

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (log(x)) / x^{n}"

explicacion: |
  Es indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1/x
  Derivada den: n*x^{n-1}
  Nuevo límite: lim(x→∞) (1/x) / (n*x^{n-1}) = lim(x→∞) 1 / (n*x^{n})
  Como n > 0, el denominador crece infinitamente, por lo que el límite es 0.
```

### 7 — pregunta 8

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "derivadas"]

variables:
  k: random(1, 4)

respuesta: "{k/2}"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1 + k*x) - 1) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: k / (2*sqrt(1+k*x))
  Derivada den: 1
  En x=0: k / 2.
```

### 8 — pregunta 9

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "logaritmo", "infinito"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (log(x)) / x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1/x
  Derivada den: 1
  Límite: lim(x→∞) 1/x = 0.
```

### 9 — pregunta 10

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (1 - cos(x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: sin(x)
  Derivada den: 1
  Lim(x→0) sin(x)/1 = 0.
```

### 10 — pregunta 11

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "exponencial", "infinito"]

respuesta: "∞"
tipo: input

enunciado: "Calcule: lim(x→∞) (e^x) / x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: e^x
  Derivada den: 1
  Lim(x→∞) e^x/1 = ∞.
```

### 11 — pregunta 12

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "tangente"]

respuesta: "1"
tipo: input

enunciado: "Calcule: lim(x→0) (tan(x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: sec^2(x)
  Derivada den: 1
  En x=0: sec^2(0) = 1/cos^2(0) = 1/1 = 1.
```

### 12 — pregunta 13

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "logaritmo", "natural"]

respuesta: "1"
tipo: input

enunciado: "Calcule: lim(x→0) (ln(1 + x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: 1/(1+x)
  Derivada den: 1
  En x=0: 1/(1+0) = 1.
```

### 13 — pregunta 14

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "cubica"]

variables:
  k: random(1, 3)

respuesta: "{k/3}"
tipo: input

enunciado: "Calcule: lim(x→0) ( (1 + k*x)^{1/3} - 1 ) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: (1/3)*(1+k*x)^{-2/3} * k
  Derivada den: 1
  En x=0: (1/3)*1 * k = k/3.
```

### 14 — pregunta 15

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "exponencial", "infinito"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (x) / e^x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1
  Derivada den: e^x
  Lim(x→∞) 1/e^x = 0.
```

### 15 — pregunta 17

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "-0.5"
tipo: input

enunciado: "Calcule: lim(x→0) (cos(x) - 1) / x^2"

explicacion: |
  1ra derivada: -sin(x) / 2x (0/0)
  2da derivada: -cos(x) / 2
  En x=0: -1/2 = -0.5.
```

### 16 — pregunta 19

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["limites", "logaritmo", "raices"]

respuesta: "0.5"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1+x) - 1) / log(1+x)"

explicacion: |
  Derivada num: 1/(2*sqrt(1+x))
  Derivada den: 1/(1+x)
  Cociente: (1+x) / (2*sqrt(1+x)) = sqrt(1+x)/2.
  En x=0: 1/2 = 0.5.
```

### 17 — pregunta 20

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["identificacion", "indeterminacion"]

variables:
  k: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el límite de {k}x / sin({k}x) cuando x tiende a 0, se obtiene la forma indeterminada 0/0."

explicacion: |
  Al sustituir x = 0 en el numerador obtenemos {k}*0 = 0.
  En el denominador obtenemos sin(0) = 0.
  Por lo tanto, la forma resultante es 0/0, que es una indeterminación válida para aplicar L'Hôpital.
```

### 18 — pregunta 21

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["infinito", "logaritmo"]

variables:
  k: random(2, 5)

respuesta: 0
tipo: input

enunciado: "Calcula el límite de ln(x) / x^{k} cuando x tiende a infinito."

explicacion: |
  Forma indeterminada ∞/∞. Aplicamos L'Hôpital.
  Derivada num: 1/x.
  Derivada den: k*x^(k-1).
  Nuevo límite: (1/x) / (k*x^(k-1)) = 1 / (k*x^k).
  Cuando x -> ∞, el denominador crece sin límite, por lo que el resultado es 0.
```

### 19 — pregunta 22

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["errores_comunes", "aplicacion"]

variables:
  k: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Se puede aplicar la Regla de L'Hôpital al límite de (x + {k}) / x cuando x tiende a 0."

explicacion: |
  Al sustituir x=0, el numerador tiende a {k} y el denominador a 0.
  Esto da una forma {k}/0 (asíntota), no una indeterminación 0/0.
  Por lo tanto, L'Hôpital no es aplicable directamente.
```

### 20 — pregunta 23

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "derivada"]

respuesta: falso
tipo: vf

enunciado: "Para calcular el límite de f(x)/g(x) mediante L'Hôpital, debemos derivar la fracción completa como si fuera una función cociente."

explicacion: |
  Falso. L'Hôpital establece que el límite es igual al límite de (f'(x))/(g'(x)).
  No se deriva el cociente f/g, sino que se derivan el numerador y el denominador por separado.
```

### 21 — pregunta 25

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["exponencial", "logaritmo"]

respuesta: 0
tipo: input

enunciado: "Calcula el límite de ln(x) / x cuando x tiende a infinito."

explicacion: |
  Forma ∞/∞.
  Derivada num: 1/x. Derivada den: 1.
  El nuevo límite es lim (1/x) / 1 = 0.
```

### 22 — pregunta 26

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "existencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si al aplicar L'Hôpital el límite de f'(x)/g'(x) no existe (ni es infinito), entonces L'Hôpital no permite concluir nada sobre el límite original."

explicacion: |
  Correcto. La regla dice que si el límite de las derivadas existe, entonces el límite original es igual a él.
  Si el límite de las derivadas no existe, la regla es inconclusa (el límite original podría existir o no).
```

### 23 — Límite que requiere derivar tres veces

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["iteracion", "polinomio"]

respuesta: 0.1667
tipo: input
tolerancia_abs: 0.001

enunciado: "Calcula el límite de (x - sen(x)) / x^3 cuando x tiende a 0 (dá el resultado como decimal, con cuatro cifras)."

explicacion: |
  Al sustituir x=0 queda 0/0, así que se aplica L'Hôpital.
  Primera derivada: (1 - cos(x)) / (3x^2), que sigue siendo 0/0.
  Segunda derivada: sen(x) / (6x), que sigue siendo 0/0.
  Tercera derivada: cos(x) / 6. En x=0 vale 1/6, que es aproximadamente 0,1667.
```

### 24 — pregunta 28

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["propiedades", "linealidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si el límite de f(x)/g(x) es indeterminado, el límite de c*f(x)/g(x) (con c constante) se puede calcular derivando f(x) y g(x) por separado."

explicacion: |
  Verdadero. La constante c se puede sacar fuera o derivar como parte del numerador (c*f'(x)).
  El resultado será c veces el límite original de f/g.
```

### 25 — pregunta 29

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "limites_laterales"]

respuesta: verdadero
tipo: vf

enunciado: "La Regla de L'Hôpital es aplicable también para límites laterales (x -> a+ o x -> a-)."

explicacion: |
  Verdadero. La regla se basa en la derivabilidad en un entorno, y los límites laterales son casos particulares de ese comportamiento local.
```

### 26 — pregunta 31

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["trigonometria", "limite"]

respuesta: 3
tipo: input

enunciado: "Calcula el límite de sen(3x) / x cuando x tiende a 0."

explicacion: |
  Forma 0/0.
  Derivada num: 3cos(3x). Derivada den: 1.
  En x=0: 3*1 / 1 = 3.
```
