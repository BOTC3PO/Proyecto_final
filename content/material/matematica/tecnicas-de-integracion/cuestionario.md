# Matemática — Técnicas de integración (cuestionario, 22 preguntas VBLang)

> Tema: `matematica/tecnicas-de-integracion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: "acumulaciones (área, volumen, distancia recorrida)"
tipo: mc
opciones_explicitas: ["tasas de cambio instantáneas", "acumulaciones (área, volumen, distancia recorrida)", "puntos de discontinuidad"]

enunciado: "La integral, como proceso inverso a la derivación, permite calcular principalmente..."

explicacion: |
  Mientras la derivada mide cómo cambia algo en un instante, la integral
  acumula esos cambios: área bajo la curva, volumen, distancia, etc.
```

### 2 — pregunta 2

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["tecnicas"]

variables:
  tecnica: uno_de(["sustitución", "integración por partes", "fracciones parciales"])

respuesta: verdadero
tipo: vf

enunciado: "\"{tecnica}\" es una de las técnicas de integración mencionadas en la teoría para resolver integrales difíciles."

explicacion: |
  Las tres son las técnicas centrales para "desatar" integrales que no
  se resuelven con la tabla básica de primitivas.
```

### 3 — pregunta 3

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  n: uno_de([1, 1])

respuesta: "la regla de la cadena"
tipo: mc
opciones_explicitas: ["la regla de la cadena", "la regla del producto", "el teorema fundamental del cálculo"]

enunciado: "La técnica de sustitución (cambio de variable) se basa en..."

explicacion: |
  Es el proceso inverso a aplicar la regla de la cadena al derivar una
  función compuesta.
```

### 4 — pregunta 4

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  n: random(2, 6)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Si hacés el cambio de variable u = x^{n}, ¿qué exponente tiene x en du/dx = {n}·x^(exponente)?"

explicacion: |
  Al derivar x^n respecto de x, el exponente baja en 1: du/dx = n·x^(n-1).
```

### 5 — pregunta 5

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["sustitucion"]

variables:
  n: uno_de([1, 1])

respuesta: "la derivada de la función interna está presente (o ajustable) afuera"
tipo: mc
opciones_explicitas: ["la función es un polinomio simple", "la derivada de la función interna está presente (o ajustable) afuera", "la integral ya tiene límites definidos"]

enunciado: "La sustitución es especialmente útil cuando la integranda es una composición de funciones y..."

explicacion: |
  Si la derivada de la función interna (o algo proporcional a ella)
  aparece multiplicando afuera, el cambio de variable simplifica la
  integral directamente.
```

### 6 — pregunta 6

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "uv - ∫v du"
tipo: mc
opciones_explicitas: ["uv - ∫v du", "u + v - ∫du dv", "∫u dv + ∫v du"]

enunciado: "La fórmula general de integración por partes ∫u dv es igual a:"

explicacion: |
  Es la contraparte de la regla del producto para derivadas:
  ∫u dv = uv - ∫v du.
```

### 7 — pregunta 7

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "cuando la integral es el producto de dos funciones distintas"
tipo: mc
opciones_explicitas: ["cuando la integral es el producto de dos funciones distintas", "cuando la integral es una constante", "cuando el denominador es cero"]

enunciado: "La integración por partes se usa típicamente..."

explicacion: |
  Por ejemplo, un polinomio multiplicado por una exponencial o una
  trigonométrica: ninguna sustitución simple resuelve ese producto.
```

### 8 — pregunta 8

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "la que se simplifica al derivarse (ej. un polinomio)"
tipo: mc
opciones_explicitas: ["la que se simplifica al derivarse (ej. un polinomio)", "la que es más difícil de integrar", "siempre la función trigonométrica"]

enunciado: "Como regla mnemotécnica, conviene elegir como \"u\" la función que..."

explicacion: |
  Un polinomio se simplifica (baja de grado) al derivarse, mientras que
  la parte "dv" conviene que sea fácil de integrar (exponencial,
  trigonométrica).
```

### 9 — pregunta 9

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se elige mal qué parte es u y cuál es dv en integración por partes, la nueva integral ∫v du puede volverse más compleja que la original."

explicacion: |
  La elección correcta de u y dv es clave: una mala elección puede
  empeorar el problema en vez de simplificarlo.
```

### 10 — pregunta 10

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["fracciones parciales"]

variables:
  n: uno_de([1, 1])

respuesta: "funciones racionales (cocientes de polinomios)"
tipo: mc
opciones_explicitas: ["funciones racionales (cocientes de polinomios)", "funciones trigonométricas puras", "funciones constantes"]

enunciado: "Las fracciones parciales se usan para integrar principalmente..."

explicacion: |
  Sirven específicamente para P(x)/Q(x), descomponiendo la fracción
  compleja en fracciones simples ya conocidas.
```

### 11 — pregunta 11

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["fracciones parciales"]

variables:
  n: uno_de([1, 1])

respuesta: "factorizando el denominador y determinando coeficientes desconocidos"
tipo: mc
opciones_explicitas: ["factorizando el denominador y determinando coeficientes desconocidos", "derivando el numerador dos veces", "igualando el denominador a cero siempre"]

enunciado: "El método de fracciones parciales se aplica..."

explicacion: |
  Se factoriza Q(x) y se determinan los coeficientes de las fracciones
  simples resultantes.
```

### 12 — pregunta 12

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["aplicaciones"]

variables:
  campo: uno_de(["física", "economía"])

respuesta: verdadero
tipo: vf

enunciado: "Las técnicas de integración tienen aplicaciones reales en {campo}, como calcular trabajo de un motor o ingreso total acumulado."

explicacion: |
  El trabajo de un motor con potencia variable (física) y el ingreso
  total a partir del ingreso marginal (economía) son ejemplos reales
  mencionados en la teoría.
```

### 13 — pregunta 13

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  n: random(2, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Para resolver ∫{n}x·e^(x²) dx por sustitución con u = x², necesitás que el coeficiente que multiplica a x afuera sea (al menos proporcional a) {n}. ¿Cuál es ese coeficiente en este caso?"

explicacion: |
  du = 2x dx, así que cualquier múltiplo de x afuera (acá {n}x) permite
  reescribir la integral en términos de u ajustando una constante.
```

### 14 — pregunta 14

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Todas las funciones se pueden integrar directamente aplicando sólo la tabla básica de primitivas."

explicacion: |
  Muchas expresiones son demasiado complejas para resolverse en un solo
  paso; por eso existen técnicas específicas de simplificación.
```

### 15 — pregunta 15

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["fracciones simples"]

variables:
  n: uno_de([1, 1])

respuesta: "1/x"
tipo: mc
opciones_explicitas: ["1/x", "x²", "eˣ"]

enunciado: "El objetivo de las fracciones parciales es descomponer una fracción compleja en una suma de fracciones simples ya conocidas, como..."

explicacion: |
  Fracciones tipo 1/x o 1/(x+1) son las piezas simples en las que se
  descompone la función racional original.
```

### 16 — pregunta 16

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["sustitucion"]

variables:
  n: uno_de([1, 1])

respuesta: "volver a escribir el resultado en términos de la variable original"
tipo: mc
opciones_explicitas: ["dejar el resultado en términos de u", "volver a escribir el resultado en términos de la variable original", "derivar el resultado una vez más"]

enunciado: "Un paso final crucial de la sustitución, muchas veces olvidado, es..."

explicacion: |
  Después de resolver la integral en términos de u, hay que deshacer
  el cambio de variable y expresar el resultado en función de x.
```

### 17 — pregunta 17

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["por partes"]

variables:
  n: uno_de([1, 1])

respuesta: "la regla del producto"
tipo: completar

enunciado: "La integración por partes es la contraparte, para integrales, de ___ usada en derivadas."

respuestas_validas:
  - "la regla del producto"
  - "regla del producto"

explicacion: |
  Así como la regla del producto deriva un producto de funciones, la
  integración por partes "deshace" ese producto al integrar.
```

### 18 — pregunta 18

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["cuando usar cada tecnica"]

variables:
  n: uno_de([1, 1])

respuesta: "no hay una función compuesta clara para sustituir"
tipo: mc
opciones_explicitas: ["hay una función compuesta clara para sustituir", "no hay una función compuesta clara para sustituir", "el integrando es una constante"]

enunciado: "La integración por partes es indispensable especialmente cuando..."

explicacion: |
  Si no hay una composición clara de funciones (condición que pide la
  sustitución), pero sí un producto de dos funciones distintas, conviene
  usar partes.
```

### 19 — pregunta 19

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La teoría compara resolver integrales difíciles con \"desatar un nudo\", donde cada técnica es una forma distinta de aflojarlo."

explicacion: |
  Es la metáfora usada para explicar por qué existen varias técnicas:
  cada una sirve para un tipo distinto de integral difícil.
```

### 20 — pregunta 20

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "intermedio"
  tags: ["aplicaciones"]

variables:
  n: uno_de([1, 1])

respuesta: "ingreso total acumulado a partir del ingreso marginal"
tipo: mc
opciones_explicitas: ["ingreso total acumulado a partir del ingreso marginal", "la tasa de interés fija de un préstamo", "el número de empleados de una empresa"]

enunciado: "En el ejemplo de economía de la teoría, las fracciones parciales sirven para calcular..."

explicacion: |
  Si el ingreso marginal está dado por una función racional, integrarla
  con fracciones parciales da el ingreso total acumulado en un período.
```

### 21 — pregunta 21

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "basico"
  tags: ["importancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dominar las técnicas de integración es la base para resolver problemas de física, economía y ciencias naturales que involucran tasas de cambio y acumulaciones."

explicacion: |
  Estas técnicas no son un ejercicio aislado: son la herramienta que
  conecta cálculo con problemas reales de otras disciplinas.
```

### 22 — pregunta 22

```
metadata:
  materia: "matematica"
  tema: "tecnicas_de_integracion"
  nivel: "avanzado"
  tags: ["fracciones parciales"]

variables:
  n: uno_de([1, 1])

respuesta: "1/(x+1)"
tipo: mc
opciones_explicitas: ["1/(x+1)", "x·e^x", "sin(x)"]

enunciado: "¿Cuál de las siguientes es un ejemplo de fracción simple ya conocida, mencionada en la teoría como resultado típico de descomponer P(x)/Q(x)?"

explicacion: |
  1/(x+1) es una de las fracciones simples que se obtienen al aplicar
  fracciones parciales sobre una función racional más compleja.
```

