# Matemática — Integral definida y área bajo la curva (cuestionario, 22 preguntas VBLang)

> Tema: `matematica/integral-definida-y-area-bajo-la-curva`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "el área entre la curva y el eje horizontal en un intervalo [a, b]"
tipo: mc
opciones_explicitas: ["el área entre la curva y el eje horizontal en un intervalo [a, b]", "la pendiente de la recta tangente en un punto", "el valor máximo que alcanza la función"]

enunciado: "La integral definida de f(x) entre a y b representa..."

explicacion: |
  Es la cantidad de espacio entre la curva de f(x) y el eje horizontal,
  dentro de ese intervalo específico.
```

### 2 — pregunta 2

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["area neta"]

variables:
  n: uno_de([1, 1])

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "siempre cero"]

enunciado: "Si la curva de f(x) está por debajo del eje x en el intervalo considerado, el área correspondiente se considera..."

explicacion: |
  La integral definida calcula el área neta, no el área total absoluta:
  por eso puede dar valores negativos.
```

### 3 — pregunta 3

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["teorema fundamental"]

variables:
  n: uno_de([1, 1])

respuesta: "Teorema Fundamental del Cálculo"
tipo: completar

enunciado: "El teorema que permite calcular una integral definida usando una primitiva F(x), en vez de sumar rectángulos infinitos, se llama ___."

respuestas_validas:
  - "Teorema Fundamental del Cálculo"

explicacion: |
  Establece una relación directa entre la derivada y la integral,
  simplificando enormemente el cálculo del área.
```

### 4 — pregunta 4

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["formula tfc"]

variables:
  n: uno_de([1, 1])

respuesta: "F(b) - F(a)"
tipo: mc
opciones_explicitas: ["F(b) - F(a)", "F(b) + F(a)", "F(a) - F(b)"]

enunciado: "Según el Teorema Fundamental del Cálculo, ∫ f(x) dx entre a y b es igual a:"

explicacion: |
  Se evalúa la primitiva en el límite superior y se le resta el valor
  evaluado en el límite inferior.
```

### 5 — pregunta 5

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["primitiva"]

variables:
  n: random(2, 8)

respuesta: n / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La primitiva de f(x) = {n}·x es F(x) = k·x². ¿Cuánto vale k?"

explicacion: |
  La primitiva de k'·x es (k'/2)·x², así que si f(x)={n}·x, el
  coeficiente de x² en la primitiva es {n}/2.
```

### 6 — pregunta 6

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  b: random(2, 8)

respuesta: b * b
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo la curva de f(x) = 2x entre x=0 y x={b}, usando F(x) = x². (F({b}) - F(0))"

explicacion: |
  F(x) = x² es la primitiva de 2x. El área es F(b) - F(0) = b² - 0 = b².
```

### 7 — pregunta 7

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  k: random(1, 5)
  b: random(2, 6)

respuesta: k * b
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo la curva de f(x) = {k} (función constante) entre x=0 y x={b}, usando F(x) = {k}·x."

explicacion: |
  Para una función constante, el área bajo la curva es un rectángulo:
  base × altura = {b} × {k}.
```

### 8 — pregunta 8

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["simbolo integral"]

variables:
  n: uno_de([1, 1])

respuesta: "una S alargada que recuerda a suma"
tipo: mc
opciones_explicitas: ["una S alargada que recuerda a suma", "una letra griega sin significado especial", "el símbolo de infinito"]

enunciado: "El símbolo ∫ de la integral es..."

explicacion: |
  Representa la idea de "sumar" infinitas cantidades infinitesimales, de
  ahí la forma de S alargada.
```

### 9 — pregunta 9

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["existencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) es continua en el intervalo [a, b], la integral definida siempre existe y es única."

explicacion: |
  La continuidad de la función en el intervalo garantiza que el área
  bajo la curva esté bien definida.
```

### 10 — pregunta 10

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["aplicaciones"]

variables:
  campo: uno_de(["física", "economía", "ingeniería"])

respuesta: verdadero
tipo: vf

enunciado: "La integral definida tiene aplicaciones reales en {campo}, según la teoría."

explicacion: |
  Se usa para calcular distancia recorrida (física), excedente del
  consumidor (economía) o volúmenes de objetos (ingeniería).
```

### 11 — pregunta 11

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["discreto vs continuo"]

variables:
  n: uno_de([1, 1])

respuesta: "de lo discreto a lo continuo"
tipo: mc
opciones_explicitas: ["de lo discreto a lo continuo", "de lo continuo a lo discreto", "no hay ninguna diferencia entre ambos"]

enunciado: "La importancia de la integral definida radica en su capacidad de pasar..."

explicacion: |
  Mientras la suma simple junta cantidades finitas, la integral suma
  infinitas cantidades infinitesimales.
```

### 12 — pregunta 12

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["pasos del calculo"]

variables:
  n: uno_de([1, 1])

respuesta: "encontrar la primitiva, evaluarla en b, evaluarla en a y restar"
tipo: mc
opciones_explicitas: ["encontrar la primitiva, evaluarla en b, evaluarla en a y restar", "derivar la función dos veces", "graficar la función sin ningún cálculo"]

enunciado: "Según el Teorema Fundamental del Cálculo, el proceso para calcular una integral definida consiste en..."

explicacion: |
  Son los tres pasos que transforman un problema geométrico complejo en
  álgebra simple.
```

### 13 — pregunta 13

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["verificacion geometrica"]

variables:
  b: random(3, 9)

respuesta: b * b
tipo: input
tolerancia_abs: 0

enunciado: "Verificá con geometría básica: el área bajo f(x)=2x entre 0 y {b} es un triángulo de base {b} y altura {2*b}... espera, calculalo directo: (base × altura) / 2 = ({b} × 2·{b}) / 2. ¿Cuánto da?"

explicacion: |
  (b × 2b) / 2 = b², el mismo resultado que da la integral, confirmando
  que ambos métodos coinciden.
```

### 14 — pregunta 14

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["dx"]

variables:
  n: uno_de([1, 1])

respuesta: "un segmento horizontal de ancho infinitesimal"
tipo: mc
opciones_explicitas: ["un segmento horizontal de ancho infinitesimal", "el valor máximo de la función", "la derivada de la función"]

enunciado: "En la notación ∫f(x) dx, el símbolo dx indica que se está sumando..."

explicacion: |
  Cada dx representa un segmento horizontal muy chico que, sumado a
  infinitos otros, da el área total.
```

### 15 — pregunta 15

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["primitiva de potencia"]

variables:
  n: random(1, 6)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "La primitiva de x^{n} tiene exponente (antes de dividir por el nuevo exponente):"

explicacion: |
  Al integrar x^n, el exponente sube en 1 (regla inversa a la
  derivación).
```

### 16 — pregunta 16

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["relacion con derivada"]

variables:
  n: uno_de([1, 1])

respuesta: "una función cuya derivada es f(x)"
tipo: mc
opciones_explicitas: ["una función cuya derivada es f(x)", "una función cuyo valor máximo es f(x)", "la inversa de f(x)"]

enunciado: "Una función primitiva F(x) de f(x) es..."

explicacion: |
  Por eso el Teorema Fundamental del Cálculo conecta directamente
  derivación e integración: son procesos inversos.
```

### 17 — pregunta 17

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["areas irregulares"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La integral definida permite medir áreas irregulares que la geometría básica (cuadrados, triángulos) no puede resolver por sí sola."

explicacion: |
  Es justamente su utilidad principal: calcular áreas bajo curvas
  complejas, no sólo figuras geométricas simples.
```

### 18 — pregunta 18

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  b: random(1, 7)

respuesta: b * b * b
tipo: input
tolerancia_abs: 0

enunciado: "Si F(x) = x³ es la primitiva de f(x) = 3x², calculá F({b}) - F(0), el área bajo f(x) entre 0 y {b}."

explicacion: |
  F(b) - F(0) = b³ - 0 = b³, aplicando directamente el Teorema
  Fundamental del Cálculo.
```

### 19 — pregunta 19

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["limites de integracion"]

variables:
  n: uno_de([1, 1])

respuesta: "los valores inicial y final del intervalo"
tipo: mc
opciones_explicitas: ["los valores inicial y final del intervalo", "el valor máximo y mínimo de la función", "las raíces de la función"]

enunciado: "En ∫_a^b f(x) dx, los valores a y b representan..."

explicacion: |
  Son los límites del intervalo dentro del cual se calcula el área bajo
  la curva.
```

### 20 — pregunta 20

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["metodo alternativo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Calcular el área sumando rectángulos infinitos es el método práctico habitual para resolver integrales definidas en un examen."

explicacion: |
  Sería imposible en la práctica; por eso se usa el Teorema Fundamental
  del Cálculo, que evita esa suma infinita directa.
```

### 21 — pregunta 21

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["aplicacion fisica"]

variables:
  n: uno_de([1, 1])

respuesta: "distancias recorridas cuando la velocidad cambia"
tipo: mc
opciones_explicitas: ["distancias recorridas cuando la velocidad cambia", "la masa de un objeto en reposo", "el color de la luz emitida"]

enunciado: "En física, la integral definida se usa para calcular, entre otras cosas..."

explicacion: |
  Si la velocidad varía con el tiempo, integrarla da la distancia total
  recorrida.
```

### 22 — pregunta 22

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  a: random(1, 4)
  b: random(5, 9)

respuesta: b*b - a*a
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo f(x) = 2x entre x={a} y x={b}, usando F(x) = x² (F({b}) - F({a}))."

explicacion: |
  F(b) - F(a) = b² - a², aplicando el Teorema Fundamental del Cálculo
  con límites distintos de cero.
```

