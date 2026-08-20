# Matemática — Límite (cuestionario, 26 preguntas VBLang)

> Tema: `A12` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Los límites con indeterminación 0/0 se arman como diferencia de
cuadrados (x²−a²)/(x−a), que siempre simplifica a (x+a) — el DSL evalúa
la versión ya simplificada, no la original (que daría 0/0 al
reemplazar).

---

### 1 — Límite de un polinomio (evaluar directo)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["continua"]

variables:
  a: random(1, 6)
  b: random(1, 10)
  c: random(-10, 10)
  punto: random(-8, 8)

respuesta: a * punto ^ 2 + b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{a}x² + {b}x + {c}]. ¿Cuánto vale?"

explicacion: |
  Para un polinomio, el límite es simplemente evaluar la función en ese
  punto.
```

### 2 — Límite de un polinomio de grado 1

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["continua"]

variables:
  m: random(1, 10)
  b: random(-15, 15)
  punto: random(-10, 10)

respuesta: m * punto + b
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{m}x + {b}]. ¿Cuánto vale?"

explicacion: |
  Una función lineal es continua en todos lados: el límite es f({punto}).
```

### 3 — Límite de una función racional sin indeterminación

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["continua"]

variables:
  a: random(2, 10)
  punto: random(1, 10)
  desplazamiento: random(1, 10)

respuesta: a / (punto + desplazamiento)
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [{a} / (x + {desplazamiento})]. ¿Cuánto vale?"

explicacion: |
  El denominador no se anula en x={punto} (da {punto + desplazamiento}),
  así que se puede evaluar directo.
```

### 4 — Límite con indeterminación 0/0: diferencia de cuadrados

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["indeterminacion"]

variables:
  a: random(1, 20)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{a}) [(x² − {a ^ 2}) / (x − {a})]. ¿Cuánto vale?"

pasos:
  - "Reemplazar directo da 0/0 — hay que factorear"
  - "(x²−{a ^ 2})/(x−{a}) = (x+{a})(x−{a})/(x−{a}) = x+{a} (para x≠{a})"
  - "lim(x→{a}) (x+{a}) = {a}+{a} = {2 * a}"

explicacion: |
  Factorear como diferencia de cuadrados cancela el factor problemático.
```

### 5 — Límite con indeterminación 0/0: otro caso

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["indeterminacion"]

variables:
  a: random(1, 15)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→−{a}) [(x² − {a ^ 2}) / (x + {a})]. ¿Cuánto vale?"

pasos:
  - "(x²−{a ^ 2})/(x+{a}) = (x+{a})(x−{a})/(x+{a}) = x−{a} (para x≠−{a})"
  - "lim(x→−{a}) (x−{a}) = −{a}−{a} = −{2 * a}"

explicacion: |
  Acá el factor que se cancela es (x+{a}), porque el límite es en
  x=−{a}.
```

### 6 — Límite con indeterminación 0/0: factor común

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  k: random(2, 10)
  a: random(1, 15)

respuesta: k * a
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→0) [({k}x² + {k * a}x) / x]. ¿Cuánto vale?"

pasos:
  - "({k}x²+{k * a}x)/x = x({k}x+{k * a})/x = {k}x+{k * a} (para x≠0)"
  - "lim(x→0) ({k}x+{k * a}) = {k * a}"

explicacion: |
  Sacando x como factor común en el numerador, se cancela con el
  denominador.
```

### 7 — Límites laterales: coinciden (el límite existe)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["laterales", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-10, 10)
  punto: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Coinciden el límite por la izquierda y por la derecha de f en x={punto} (o sea, existe el límite)?"

explicacion: |
  Para una función lineal (sin quiebres), los límites laterales siempre
  coinciden.
```

### 8 — Concepto: límites laterales que no coinciden

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["laterales", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si el límite por la izquierda de f en x=a da 3, y el límite por la derecha da 7, el límite de f en x=a existe (y vale algún promedio de los dos)."

explicacion: |
  Si los límites laterales no coinciden, el límite completo NO existe —
  no se promedia ni se elige uno.
```

### 9 — Concepto: 0/0 no es un número

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Cuando reemplazar directo en un límite da 0/0, eso significa que el límite vale 0."

explicacion: |
  0/0 es una indeterminación, no un valor — hay que factorear y
  simplificar antes de poder evaluar.
```

### 10 — Concepto: función no definida en el punto puede tener límite

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una función puede no estar definida en x=a y aun así tener un límite bien definido cuando x se acerca a a."

explicacion: |
  Es exactamente el caso de (x²−a²)/(x−a): no está definida en x=a
  (denominador 0), pero el límite ahí sí existe y vale 2a.
```

### 11 — Concepto: para funciones continuas, límite = valor de la función

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para un polinomio, el límite en cualquier punto coincide exactamente con evaluar la función en ese punto."

explicacion: |
  Los polinomios son continuos en todos los reales — no hay "saltos" ni
  denominadores que se anulen.
```

### 12 — Verificar un límite calculado con error

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(-10, 10)
  c: random(-10, 10)
  punto: random(-5, 5)
  real: a * punto ^ 2 + b * punto + c
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "lim(x→{punto}) [{a}x² + {b}x + {c}]. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es {real}, evaluando el polinomio en {punto}.
```

### 13 — Límite con indeterminación: cubo de diferencia (factor común primero)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  a: random(1, 12)

respuesta: 3 * a ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{a}) [(x³ − {a ^ 3}) / (x − {a})]. Usando que x³−a³ = (x−a)(x²+ax+a²), ¿cuánto vale el límite?"

pasos:
  - "(x³−{a ^ 3})/(x−{a}) = x²+{a}x+{a ^ 2} (para x≠{a})"
  - "lim(x→{a}) (x²+{a}x+{a ^ 2}) = {a ^ 2}+{a ^ 2}+{a ^ 2} = {3 * a ^ 2}"

explicacion: |
  Factorear una diferencia de cubos deja un trinomio que sí se puede
  evaluar directo.
```

### 14 — Límite en el infinito: función racional (grado igual)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: a / b
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→∞) [({a}x + 5) / ({b}x − 3)]. ¿Cuánto vale?"

pasos:
  - "Con x muy grande, los términos sin x se vuelven insignificantes frente a los que sí tienen x"
  - "El límite es el cociente de los coeficientes principales: {a}/{b}"

explicacion: |
  Cuando el grado del numerador y del denominador coincide, el límite en
  el infinito es el cociente de los coeficientes principales.
```

### 15 — Concepto: límite en el infinito de un polinomio

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

variables:
  a: random(1, 10)

respuesta: "Infinito (crece sin límite)"
tipo: mc
opciones_explicitas:
  - "Infinito (crece sin límite)"
  - "0"
  - "{a}"

enunciado: "lim(x→∞) [{a}x² + 3x − 7]. ¿Qué pasa con este límite?"

explicacion: |
  Un polinomio de grado 2 o más crece sin límite cuando x se va a
  infinito (con coeficiente principal positivo).
```

### 16 — Aplicar: velocidad instantánea como límite (adelanto de derivada)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 10)
  punto: random(1, 10)

respuesta: 2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "Para f(x) = {a}x², el límite lim(h→0) [(f({punto}+h) − f({punto})) / h] da {2 * a}×{punto}. ¿Cuánto es ese valor?"

explicacion: |
  Este límite en particular es, exactamente, la definición de derivada
  — adelanto de `../derivada/`.
```

### 17 — Concepto: límite de una suma

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El límite de una suma de funciones es la suma de los límites de cada una (siempre que cada límite individual exista)."

explicacion: |
  Es una de las propiedades básicas de los límites: se pueden calcular
  "por partes".
```

### 18 — Concepto: límite de un producto

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El límite de un producto de funciones es el producto de los límites de cada una (siempre que cada límite individual exista)."

explicacion: |
  Misma idea que la suma, aplicada al producto.
```

### 19 — Factorear antes de evaluar: identificar el paso correcto

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Factorear el numerador y cancelar el factor común con el denominador"
tipo: mc
opciones_explicitas:
  - "Factorear el numerador y cancelar el factor común con el denominador"
  - "Reemplazar x=a directamente y dejar el resultado como 0/0"
  - "Ignorar el denominador y evaluar sólo el numerador"

enunciado: "Al calcular un límite que da 0/0 al reemplazar directo, ¿cuál es el paso correcto?"

explicacion: |
  0/0 avisa que hace falta simplificar algebraicamente antes de evaluar
  — no es la respuesta final.
```

### 20 — Límite con indeterminación: trinomio factoreable

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["indeterminacion"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)

respuesta: r1 - r2
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{r1}) [(x² − {r1 + r2}x + {r1 * r2}) / (x − {r1})]. ¿Cuánto vale?"

pasos:
  - "El numerador se factorea como (x−{r1})(x−{r2})"
  - "(x−{r1})(x−{r2})/(x−{r1}) = x−{r2} (para x≠{r1})"
  - "lim(x→{r1}) (x−{r2}) = {r1}−{r2} = {r1 - r2}"

explicacion: |
  El trinomio del numerador se factorea usando el mismo método de
  `../polinomios-factoreo/`.
```

### 21 — Concepto: límite de una constante

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto"]

variables:
  c: random(-20, 20)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→5) [{c}] (una función constante). ¿Cuánto vale?"

explicacion: |
  El límite de una constante es esa misma constante, sin importar hacia
  dónde se acerque x.
```

### 22 — Concepto: límite de x elevado a n

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "basico"
  tags: ["concepto"]

variables:
  punto: random(1, 8)
  n: random(2, 4)

respuesta: punto ^ n
tipo: input
tolerancia_abs: 0

enunciado: "lim(x→{punto}) [xⁿ], con n={n}. ¿Cuánto vale?"

explicacion: |
  {punto}^{n} = {punto ^ n} — otra vez, evaluar directo alcanza.
```

### 23 — Concepto: diferencia entre f(a) y el límite en a

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El límite de f(x) cuando x tiende a a es siempre exactamente igual a f(a), sin excepción."

explicacion: |
  No siempre: si f no está definida en a (por ejemplo, con un
  denominador que se anula), el límite puede existir de todas formas —
  son preguntas relacionadas, pero no idénticas.
```

### 24 — Límite con indeterminación: verificar

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 15)
  real: 2 * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "lim(x→{a}) [(x² − {a ^ 2}) / (x − {a})]. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es 2×{a} = {real}.
```

### 25 — Aplicar: límite de una función racional en el infinito (grado numerador mayor)

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

respuesta: "Infinito"
tipo: mc
opciones_explicitas:
  - "Infinito"
  - "0"
  - "1"

enunciado: "lim(x→∞) [(x² + 3) / (x + 1)]. El grado del numerador (2) es mayor que el del denominador (1). ¿Qué pasa con este límite?"

explicacion: |
  Cuando el numerador crece más rápido que el denominador, el cociente
  crece sin límite.
```

### 26 — Concepto: límite en el infinito, grado denominador mayor

```
metadata:
  materia: "matematicas"
  tema: "limite"
  nivel: "avanzado"
  tags: ["infinito", "opcion_multiple"]

respuesta: "0"
tipo: mc
opciones_explicitas:
  - "0"
  - "Infinito"
  - "1"

enunciado: "lim(x→∞) [(x + 3) / (x² + 1)]. El grado del denominador (2) es mayor que el del numerador (1). ¿Qué pasa con este límite?"

explicacion: |
  Cuando el denominador crece más rápido, el cociente se achica hacia 0.
```
