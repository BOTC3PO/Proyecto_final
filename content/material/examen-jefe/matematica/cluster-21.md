# Examen jefe — Maestro de los Enteros y Fracciones

> Logro #72. ¡Aprobaste el parcial dominando números enteros, primos, fracciones y complejos! Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **136 preguntas totales** en 5/5 secciones.

---

## Sección: numeros-complejos (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["suma"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) + ({c} + {d}i). ¿Cuál es la parte real del resultado?"

explicacion: |
  Las partes reales se suman entre sí: {a} + {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["suma"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: b + d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) + ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  Las partes imaginarias se suman entre sí: {b} + {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["resta"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) − ({c} + {d}i). ¿Cuál es la parte real del resultado?"

explicacion: |
  {a} − {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["resta"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: b - d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) − ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  {b} − {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)

respuesta: a * c - b * d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Cuál es la parte real del resultado?"

pasos:
  - "(ac − bd) = ({a}×{c}) − ({b}×{d}) = {a * c} − {b * d} = {a * c - b * d}"

explicacion: |
  La parte real es ac − bd (el −bd viene de que i² = −1).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)

respuesta: a * d + b * c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

pasos:
  - "(ad + bc) = ({a}×{d}) + ({b}×{c}) = {a * d} + {b * c} = {a * d + b * c}"

explicacion: |
  La parte imaginaria junta los dos términos cruzados: ad + bc.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["multiplicacion"]

variables:
  k: random(2, 10)
  a: random(-10, 10)
  b: random(-10, 10)

respuesta: k * b
tipo: input
tolerancia_abs: 0

enunciado: "{k} × ({a} + {b}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  Multiplicar por un real puro multiplica las dos partes por igual:
  {k}×{b}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i"]

variables:
  k: random(1, 10) * 4

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} es múltiplo de 4, así que i^{k} = 1 (vuelve al inicio del ciclo).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i", "opcion_multiple"]

variables:
  k: random(0, 9) * 4 + 1

respuesta: "i"
tipo: mc
opciones_explicitas:
  - "i"
  - "1"
  - "-1"
  - "-i"

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 1 al dividir por 4, así que i^{k} = i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i"]

variables:
  k: random(0, 9) * 4 + 2

respuesta: -1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 2 al dividir por 4, así que i^{k} = i² = −1.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i", "opcion_multiple"]

variables:
  k: random(0, 9) * 4 + 3

respuesta: "-i"
tipo: mc
opciones_explicitas:
  - "-i"
  - "i"
  - "1"
  - "-1"

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 3 al dividir por 4, así que i^{k} = −i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por definición, i² = −1."

explicacion: |
  Es la única regla nueva que hace falta para operar con números
  complejos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "i² es igual a 1 (como el cuadrado de cualquier número)."

explicacion: |
  i² = −1, no 1 — es justo lo que hace especial a la unidad imaginaria:
  ningún número real cumple eso.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["conjugado"]

variables:
  a: random(-15, 15)
  b: random(1, 15)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la parte imaginaria del conjugado de {a} + {b}i?"

explicacion: |
  El conjugado cambia el signo de la parte imaginaria: −{b}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["conjugado"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: a ^ 2 + b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({a} − {b}i). ¿Cuánto da (la parte real, ya que la imaginaria da 0)?"

pasos:
  - "(a+bi)(a−bi) = a² − (bi)² = a² − b²×i² = a² + b² = {a ^ 2 + b ^ 2}"

explicacion: |
  Multiplicar un complejo por su conjugado siempre da un número real:
  a² + b².
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["conjugado", "verdadero_falso"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: ((a * (-b) + b * a) == 0)
tipo: vf

enunciado: "({a} + {b}i) × ({a} − {b}i). ¿Da 0 la parte imaginaria del resultado?"

explicacion: |
  El término cruzado se cancela siempre al multiplicar por el conjugado
  — por eso el resultado es un número real puro.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  n: random(1, 15)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "√(−{n * n}) se escribe como {n}i. Si el radicando es −{n * n}, ¿cuál es el coeficiente de i?"

explicacion: |
  √(−{n * n}) = √({n * n}) × √(−1) = {n} × i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  b: random(-10, 10) * 2
  m: random(1, 8)

respuesta: -b / 2
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {(b ^ 2) / 4 + m ^ 2} = 0 tiene discriminante negativo. Las soluciones son x = −{b}/2 ± {m}i. ¿Cuál es la parte real de esas soluciones?"

explicacion: |
  Cuando Δ<0, la parte real de las dos soluciones complejas es siempre
  −b/(2a) — el mismo punto donde estaría el vértice de la parábola.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  b: random(-10, 10) * 2
  m: random(1, 8)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {(b ^ 2) / 4 + m ^ 2} = 0 tiene discriminante negativo. Las soluciones son x = −{b}/2 ± {m}i. ¿Cuál es el coeficiente de i?"

explicacion: |
  Viene directo de √Δ con Δ negativo: √Δ = {m}i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una ecuación cuadrática con coeficientes reales tiene discriminante negativo, sus dos soluciones complejas son conjugadas entre sí."

explicacion: |
  Vienen de −b/(2a) ± (algo)i — la misma parte real, partes imaginarias
  opuestas: exactamente la definición de conjugados.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número real es también un número complejo, con parte imaginaria igual a 0."

explicacion: |
  a + 0i es simplemente a — los complejos incluyen a los reales como
  caso particular.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un número de la forma bi (con b distinto de 0, y parte real 0) se llama 'imaginario puro'."

explicacion: |
  Ni real ni con parte real distinta de 0 — sólo la parte imaginaria.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  b: random(2, 10)
  d: random(2, 10)

respuesta: -(b * d)
tipo: input
tolerancia_abs: 0

enunciado: "({b}i) × ({d}i). ¿Cuánto da (un número real)?"

pasos:
  - "({b}i)({d}i) = {b * d}×i² = {b * d}×(−1) = {-(b * d)}"

explicacion: |
  Multiplicar dos imaginarios puros siempre da un real (negativo, si los
  dos coeficientes son positivos).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["suma", "verdadero_falso"]

variables:
  a: random(-15, 15)
  b: random(1, 15)

respuesta: ((b + (-b)) == 0)
tipo: vf

enunciado: "({a} + {b}i) + ({a} − {b}i). ¿Da 0 la parte imaginaria del resultado (o sea, el resultado es un real puro)?"

explicacion: |
  Sumar un complejo con su conjugado siempre cancela la parte
  imaginaria, dejando 2a como resultado real.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)
  real: a * c - b * d
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Es correcto que la parte real del resultado sea {propuesto}?"

explicacion: |
  La parte real correcta es ac − bd = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular i elevado a un exponente muy grande, alcanza con mirar el resto de dividir el exponente por 4."

explicacion: |
  El patrón 1, i, −1, −i se repite cada 4 potencias — el resto módulo 4
  dice en qué parte del ciclo cae.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["resta", "verdadero_falso"]

variables:
  a: random(-15, 15)
  b: random(1, 15)
  d: random(1, 15)

respuesta: ((a - a) == 0)
tipo: vf

enunciado: "({a} + {b}i) − ({a} + {d}i). ¿Da 0 la parte real del resultado?"

explicacion: |
  Al tener la misma parte real en los dos complejos, se cancela al
  restar, dejando un imaginario puro.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Se puede decir que un número complejo es 'mayor' o 'menor' que otro, igual que con los números reales."

explicacion: |
  Los complejos no tienen un orden natural como los reales — no tiene
  sentido preguntar si 3+2i es mayor o menor que 1+5i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: a ^ 2 - b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i)². ¿Cuál es la parte real del resultado?"

pasos:
  - "(a+bi)² = a² + 2abi + b²i² = a² − b² + 2abi"

explicacion: |
  La parte real es a² − b² (el término i² convierte +b² en −b²).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: 2 * a * b
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i)². ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  2ab = 2×{a}×{b} = {2 * a * b}.
```

## Sección: numeros-enteros (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

enunciado: "¿Qué agrega el conjunto de los números enteros a los naturales?"
tipo: mc
opciones_explicitas:
  - "El cero y los números negativos"
  - "Sólo las fracciones"
  - "Sólo los números muy grandes"
respuesta: "El cero y los números negativos"

explicacion: |
  Los naturales sirven para contar; los enteros agregan el 0 y los
  negativos para representar deudas, temperaturas bajo cero, etc.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "orden"]

variables:
  a: random(1, 50)
  b: -random(1, 50)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Cualquier número positivo es mayor que cualquier número negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: -random(1, 50)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Entre dos negativos, es mayor el que está más cerca de 0 (el que tiene
  menor valor absoluto).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  chico: random(1, 9)
  grande: chico + random(10, 40)

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que -{grande} es mayor que -{chico}?"

explicacion: |
  Aunque {grande} sea un número más grande que {chico}, con el signo
  negativo pasa al revés: -{grande} está más lejos de 0 hacia la
  izquierda, así que es MENOR que -{chico}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(1, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el valor absoluto de {n}?"

explicacion: |
  El valor absoluto de un número positivo es el mismo número.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(1, 999)
  neg: -n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el valor absoluto de {neg}?"

explicacion: |
  El valor absoluto de un número negativo es ese mismo número, sin el
  signo — la distancia al 0 siempre se cuenta positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto de {n}?"

explicacion: |
  El opuesto tiene el mismo valor pero signo contrario.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)
  neg: -n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto de {neg}?"

explicacion: |
  El opuesto de un negativo es el positivo correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: random(1, 50)
  c: -random(1, 50)

respuesta: max(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el mayor entre {a}, {b} y {c}?"

explicacion: |
  Cualquier positivo ya le gana a cualquier negativo; entre los
  negativos, gana el que está más cerca de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: random(1, 50)
  c: -random(1, 50)

respuesta: min(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el menor entre {a}, {b} y {c}?"

explicacion: |
  Entre los negativos, es menor el que está más lejos de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "orden", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número entero negativo es menor que cualquier número entero positivo."

explicacion: |
  En la recta numérica, todos los negativos están a la izquierda del 0, y
  todos los positivos a la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0 no es positivo ni negativo: es el punto de referencia entre los dos."

explicacion: |
  Es un caso especial: ni tiene signo positivo ni negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  a: -random(1, 30)
  b: random(1, 30)

respuesta: abs(a - b)
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué distancia está {a} de {b} en la recta numérica?"

pasos:
  - "La distancia es el valor absoluto de la resta: |{a} - {b}| = {abs(a - b)}"

explicacion: |
  La distancia entre dos puntos siempre es positiva, aunque uno de los dos
  sea negativo: se calcula con el valor absoluto de la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "3"
  - "-7"
  - "0"
  - "-2"
respuesta_orden: ["-7", "-2", "0", "3"]

explicacion: |
  Los negativos van primero (el más lejos de 0 primero), después el 0, y
  después los positivos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  a: -random(1, 50)
  b: random(1, 50)

restricciones:
  - abs(a) != abs(b)

respuesta: (abs(a) < abs(b))
tipo: vf

enunciado: "¿Es {a} el que está más cerca de 0, entre {a} y {b}?"

explicacion: |
  Se compara la distancia al 0 (el valor absoluto) de cada uno, no el
  valor del número en sí.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto del opuesto de {n}?"

explicacion: |
  Aplicar el opuesto dos veces vuelve al número original.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor absoluto de cualquier número entero nunca es negativo."

explicacion: |
  Es una distancia, y las distancias no pueden ser negativas: siempre da
  positivo o cero.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(2, 30)

tipo: completar
enunciado: "¿Qué dos números enteros tienen valor absoluto {n}? (nombrá uno de los dos)"
respuestas_validas:
  - n
  - -n

explicacion: |
  El {n} y el -{n} están a la misma distancia del 0, así que los dos
  tienen valor absoluto {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "problema"]

variables:
  a: -random(1, 15)
  b: -random(1, 15)

restricciones:
  - a != b

respuesta: (a > b)
tipo: vf

enunciado: "En una ciudad hace {a}°C y en otra hace {b}°C. ¿Hace más calor en la primera ciudad?"

explicacion: |
  Con temperaturas bajo cero, "más calor" es el número mayor (el más
  cerca de 0), no el que tiene el número "más grande" adelante.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "problema"]

variables:
  altura: random(100, 3000)
  profundidad: -random(10, 500)

respuesta: (altura > profundidad)
tipo: vf

enunciado: "Una montaña está a {altura} metros sobre el nivel del mar, y un submarino está a {profundidad} metros (bajo el nivel del mar, por eso el signo negativo). ¿Está la montaña más alta que el submarino?"

explicacion: |
  Sobre el nivel del mar es positivo; bajo el nivel del mar es negativo:
  cualquier altura positiva está por encima de cualquier profundidad
  negativa.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "problema"]

variables:
  deuda: -random(100, 5000)

respuesta: abs(deuda)
tipo: input
tolerancia_abs: 0

enunciado: "El saldo de una cuenta es ${deuda} (negativo porque es una deuda). ¿Cuántos pesos debe esa persona?"

explicacion: |
  La deuda, en valor positivo, es el valor absoluto del saldo negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "opuesto", "valor_absoluto"]

variables:
  n: random(1, 500)

respuesta: (abs(n) == abs(-n))
tipo: vf

enunciado: "¿Es cierto que {n} y su opuesto ({-n}) tienen el mismo valor absoluto?"

explicacion: |
  Están a la misma distancia del 0, uno de cada lado.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(2, 50)

respuesta: -n
tipo: mc
opciones_explicitas:
  - -n
  - n
  - n + 1

enunciado: "¿Cuál es el opuesto de {n}?"

explicacion: |
  El opuesto cambia el signo, pero no el valor absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "avanzado"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 20)
  b: random(1, 20)

respuesta: b - a + 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números enteros hay entre {a} y {b}, contando a los dos extremos?"

pasos:
  - "Se cuenta igual que con positivos: {b} - {a} + 1 = {b - a + 1}"

explicacion: |
  La fórmula (B − A + 1) funciona igual con negativos, siempre que se
  reste el menor al mayor respetando el orden real en la recta numérica.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden", "problema"]

tipo: ordenar
enunciado: "Ordená estas temperaturas de más fría a más calurosa."
opciones_explicitas:
  - "-3°C"
  - "-10°C"
  - "5°C"
  - "0°C"
respuesta_orden: ["-10°C", "-3°C", "0°C", "5°C"]

explicacion: |
  Más frío es el número menor; más calor es el número mayor — igual que
  ordenar cualquier lista de enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los números naturales son también números enteros, pero no todos los enteros son naturales."

explicacion: |
  Los enteros incluyen a los naturales y les agregan el 0 y los negativos:
  los naturales son un subconjunto de los enteros.
```

## Sección: numeros-primos (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

enunciado: "¿Qué es un número primo?"
tipo: mc
opciones_explicitas:
  - "Un número mayor que 1 con exactamente 2 divisores: el 1 y él mismo"
  - "Un número que no se puede dividir por ningún otro"
  - "Cualquier número impar"
respuesta: "Un número mayor que 1 con exactamente 2 divisores: el 1 y él mismo"

explicacion: |
  Todo número primo tiene exactamente dos divisores, ni más ni menos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(2, 50)

respuesta: es_primo(n)
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  Se prueba si {n} tiene algún divisor además de 1 y él mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(50, 150)

respuesta: es_primo(n)
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  Con números más grandes conviene probar dividir por los primos chicos
  (2, 3, 5, 7, 11...) hasta la raíz cuadrada de {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

enunciado: "¿Qué es un número compuesto?"
tipo: mc
opciones_explicitas:
  - "Un número mayor que 1 con más de 2 divisores"
  - "Cualquier número par"
  - "Un número que no tiene divisores"
respuesta: "Un número mayor que 1 con más de 2 divisores"

explicacion: |
  Si tiene más de 2 divisores, no puede ser primo: es compuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(4, 100)

respuesta: (es_primo(n) == falso)
tipo: vf

enunciado: "¿Es {n} un número compuesto?"

explicacion: |
  Un número mayor que 1 que no es primo, es compuesto — no hay una tercera
  opción (salvo el propio 1).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El número 1 no es primo ni compuesto."

explicacion: |
  El 1 tiene un solo divisor (él mismo), no dos, así que no cumple la
  definición de ninguno de los dos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 2 es el único número primo que es par."

explicacion: |
  Cualquier otro número par tiene, como mínimo, tres divisores (1, 2, y él
  mismo), así que ya es compuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  candidatos: [11, 13, 17, 19, 23, 29, 31]
  primo: uno_de(candidatos)
  compuesto1: primo + 1
  compuesto2: primo - 1

respuesta: primo
tipo: mc
opciones_explicitas:
  - primo
  - compuesto1
  - compuesto2

enunciado: "¿Cuál de estos tres números es primo?"

explicacion: |
  Los otros dos son pares (compuestos): el número que queda entre dos
  pares consecutivos suele ser el único candidato a primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  candidatos: [11, 13, 17, 19, 23, 29, 31]
  primo1: uno_de(candidatos)
  primo2: uno_de(candidatos)
  compuesto: primo1 + 1

restricciones:
  - primo1 != primo2

respuesta: compuesto
tipo: mc
opciones_explicitas:
  - primo1
  - primo2
  - compuesto

enunciado: "¿Cuál de estos tres números NO es primo?"

explicacion: |
  {compuesto} es par (y mayor que 2), así que ya tiene al 2 como tercer
  divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  candidatos: [2, 3, 5, 7, 11, 13, 17, 19, 23]
  n: uno_de(candidatos)

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene el número primo {n}?"

explicacion: |
  Todo número primo tiene exactamente 2 divisores: el 1 y él mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(4, 60)

respuesta: largo(divisores(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos divisores tiene {n}?"

explicacion: |
  Se cuentan todos los divisores; si son más de 2, ya se sabe que {n} no
  es primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

respuesta: 11
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el 5° número primo (contando el 2 como el primero: 2, 3, 5, 7, 11...)?"

explicacion: |
  Los primeros primos son 2, 3, 5, 7, 11 — el quinto es 11.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7]
  p1: uno_de(primos)
  p2: uno_de(primos)
  p3: uno_de(primos)
  n: p1 * p2 * p3

respuesta: largo(factorizar(n))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos factores primos tiene la factorización de {n} (contando cada repetido)?"

explicacion: |
  {n} se armó multiplicando 3 primos (a veces repetidos), así que su
  factorización tiene 3 factores en total.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7, 11]
  p1: uno_de(primos)
  p2: uno_de(primos)

respuesta: p1 * p2
tipo: input
tolerancia_abs: 0

enunciado: "Si la factorización prima de un número es {p1} × {p2}, ¿cuál es ese número?"

explicacion: |
  Multiplicar los factores primos reconstruye el número original.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5]
  p: uno_de(primos)

respuesta: p * p * p
tipo: input
tolerancia_abs: 0

enunciado: "Si la factorización prima de un número es {p} × {p} × {p}, ¿cuál es ese número?"

explicacion: |
  Un mismo primo puede repetirse en la factorización: {p} × {p} × {p} es
  {p} elevado al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "factorizacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número compuesto tiene una única factorización prima (sin contar el orden de los factores)."

explicacion: |
  Es el Teorema Fundamental de la Aritmética: no hay dos formas distintas
  de descomponer el mismo número en primos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún número par mayor que 2 puede ser primo."

explicacion: |
  Todo número par mayor que 2 tiene al 2 como divisor extra, además de 1 y
  él mismo: ya son 3 divisores como mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos"]

variables:
  n: random(3, 200) * 2

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  {n} es par y mayor que 2: la regla de divisibilidad del 2 ya alcanza
  para descartarlo como primo, sin necesidad de probar más divisores.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(3, 200) * 3 + uno_de([0, 3, 6])

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  La suma de las cifras de {n} es múltiplo de 3, así que ya se sabe que
  tiene al 3 como divisor extra — no puede ser primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "basico"
  tags: ["numeros_primos", "orden"]

tipo: ordenar
enunciado: "Ordená estos números primos de menor a mayor."
opciones_explicitas:
  - "17"
  - "5"
  - "13"
  - "11"
respuesta_orden: ["5", "11", "13", "17"]

explicacion: |
  Los cuatro son primos; sólo hace falta ordenarlos por tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos", "factorizacion"]

variables:
  primos: [2, 3, 5, 7]
  p: uno_de(primos)
  k: random(2, 20)
  n: p * k

respuesta: verdadero
tipo: vf

enunciado: "¿Es {p} uno de los factores primos de {n}?"

explicacion: |
  {n} se construyó multiplicando {p} por otro número, así que {p} tiene
  que aparecer en su factorización.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "avanzado"
  tags: ["numeros_primos", "problema"]

variables:
  primos: [2, 3, 5, 7]
  p1: uno_de(primos)
  p2: uno_de(primos)
  n: p1 * p2

respuesta: p2
tipo: input
tolerancia_abs: 0

enunciado: "Un salón con {n} sillas se organiza en {p1} filas iguales. ¿Cuántas sillas hay en cada fila?"

explicacion: |
  Como {n} = {p1} × {p2}, dividir por {p1} da exactamente {p2}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "intermedio"
  tags: ["numeros_primos"]

variables:
  n: random(3, 100) * 5

respuesta: falso
tipo: vf

enunciado: "¿Es {n} un número primo?"

explicacion: |
  {n} termina en 0 o en 5 (regla del 5): salvo que sea el propio 5, ya no
  puede ser primo.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_primos"
  nivel: "avanzado"
  tags: ["numeros_primos"]

variables:
  candidatos: [3, 5, 11, 17, 29]
  p: uno_de(candidatos)

respuesta: es_primo(p + 2)
tipo: vf

enunciado: "{p} es primo. ¿{p} + 2 también es primo?"

explicacion: |
  Cuando dos primos están separados por sólo 2 (como 3 y 5, u 11 y 13) se
  llaman "primos gemelos" — no todos los primos tienen un gemelo así.
```

## Sección: operaciones-enteros (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: (-a) + (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + (-{b})?"

pasos:
  - "Mismo signo: se suman los valores y se conserva el signo negativo: -({a} + {b}) = {(-a) + (-b)}"

explicacion: |
  Con el mismo signo, se suman los valores absolutos y se conserva el
  signo común.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Con dos positivos, la suma de enteros funciona exactamente igual que la
  suma que ya conocés.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(10, 50)
  b: random(1, 9)

respuesta: a + (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + (-{b})?"

pasos:
  - "Signos distintos: se restan los valores ({a} - {b} = {a - b}) y queda el signo del que pesa más ({a}, que es positivo): {a - b}"

explicacion: |
  Cuando los signos son distintos, se restan los valores absolutos (el
  mayor menos el menor) y el resultado queda con el signo del que tenía
  mayor valor absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(10, 50)
  b: random(1, 9)

respuesta: (-a) + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + {b}?"

pasos:
  - "Signos distintos: {a} - {b} = {a - b}, y queda el signo del que pesa más (-{a}, que es negativo): -{a - b}"

explicacion: |
  Acá el negativo tiene mayor valor absoluto, así que el resultado final
  es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(5, 40)
  b: random(5, 40)

restricciones:
  - a != b

respuesta: (-a) + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + {b}?"

explicacion: |
  Hay que fijarse bien cuál de los dos valores absolutos es mayor antes de
  decidir el signo del resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 30)
  b: random(1, 30)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Restar un número positivo funciona igual que la resta que ya conocés.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: a - (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - (-{b})?"

pasos:
  - "Restar un negativo es sumar su opuesto: {a} + {b} = {a + b}"

explicacion: |
  Restar un negativo es lo mismo que sumar el positivo correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: (-a) - (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) - (-{b})?"

pasos:
  - "Se transforma en suma del opuesto: -{a} + {b}"

explicacion: |
  Restar un negativo siempre suma su opuesto, sin importar el signo del
  primer número.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 20)
  b: a + random(1, 30)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Con enteros, restar un número mayor a uno menor da un resultado
  negativo — algo que no era posible con sólo los naturales.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  Positivo por positivo da positivo, igual que siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: (-a) * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) × {b}?"

explicacion: |
  Signos distintos: el resultado es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: a * (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × (-{b})?"

explicacion: |
  No importa en qué orden aparezca el signo negativo: signos distintos
  siempre dan negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: (-a) * (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) × (-{b})?"

explicacion: |
  Signos iguales (los dos negativos): el resultado es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: (-a) / b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ {b}?"

explicacion: |
  Signos distintos: el cociente es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: (-a) / (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ (-{b})?"

explicacion: |
  Signos iguales (los dos negativos): el cociente es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: a / (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} ÷ (-{b})?"

explicacion: |
  Signos distintos: el cociente es negativo, aunque el negativo esté en
  el divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de los signos (mismo signo = positivo, distinto signo = negativo) es la misma para multiplicar y para dividir."

explicacion: |
  No hay que aprender dos reglas separadas: es una sola, que aplica igual
  a las dos operaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La regla \"mismo signo, distinto resultado\" que usás para sumar es la misma regla que usás para multiplicar."

explicacion: |
  Son reglas distintas: al SUMAR con mismo signo se suman los valores; al
  MULTIPLICAR con mismo signo, el resultado da positivo (no se trata de
  sumar ni restar valores absolutos).
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Restar un número negativo es lo mismo que sumar su opuesto (un positivo)."

explicacion: |
  a - (-b) = a + b: dos signos negativos seguidos se cancelan.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar un número positivo por un número negativo siempre da como resultado un número negativo."

explicacion: |
  Signos distintos siempre dan resultado negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + (-b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + (-{b}) × {c}?"

pasos:
  - "Primero la multiplicación (regla de signos): (-{b}) × {c} = {(-b) * c}. Después la suma: {a} + {(-b) * c} = {a + (-b) * c}"

explicacion: |
  Sigue aplicando la jerarquía de operaciones: multiplicación antes que
  suma, con la regla de signos correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a - (-b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - (-{b}) × {c}?"

pasos:
  - "Multiplicación primero: (-{b}) × {c} = {(-b) * c}. Después la resta: {a} - ({(-b) * c}) = {a - (-b) * c}"

explicacion: |
  Primero se resuelve la multiplicación con su regla de signos, y recién
  después la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  b: random(2, 9)
  k: random(2, 9)
  a: b * k
  c: random(1, 20)

respuesta: (-a) / b - c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ {b} - {c}?"

pasos:
  - "División primero: (-{a}) ÷ {b} = {(-a) / b}. Después la resta: {(-a) / b} - {c} = {(-a) / b - c}"

explicacion: |
  La jerarquía de operaciones sigue mandando: división antes que resta.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  deuda: random(500, 5000)
  pago: random(100, deuda - 1)

respuesta: (-deuda) + pago
tipo: input
tolerancia_abs: 0

enunciado: "Debés ${deuda} (saldo -{deuda}) y pagás ${pago}. ¿Cuál es tu nuevo saldo?"

explicacion: |
  Pagar una deuda es sumar un positivo a un saldo negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  inicial: random(5, 20)
  baja1: random(1, 10)
  baja2: random(1, 10)

respuesta: inicial - baja1 - baja2
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura estaba en {inicial}°C, bajó {baja1} grados, y después bajó {baja2} grados más. ¿Qué temperatura quedó (puede ser negativa)?"

explicacion: |
  Cada bajada es una resta; si la temperatura cae por debajo de 0, el
  resultado queda negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  perdida_por_dia: random(50, 500)
  dias: random(2, 10)

respuesta: (-perdida_por_dia) * dias
tipo: input
tolerancia_abs: 0

enunciado: "Un negocio pierde ${perdida_por_dia} por día durante {dias} días. ¿Cuál es el resultado acumulado (en negativo)?"

explicacion: |
  Repetir una pérdida varios días es multiplicar un negativo por un
  positivo: el resultado da negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "verificacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)
  correcto: (-a) * b
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? (-{a}) × {b} = {mostrado}"

explicacion: |
  Un error típico es olvidarse la regla de signos y dar el resultado con
  el signo equivocado.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  correcto: (-a) + b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - (-a) - b
  - a + b

enunciado: "¿Cuánto es (-{a}) + {b}?"

explicacion: |
  Hay que aplicar la regla de signos distintos: restar los valores
  absolutos y quedarse con el signo del que pesa más.
```

## Sección: operaciones-fracciones (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(5, 12)
  a: random(1, b - 3)
  c: random(1, b - a - 1)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} + {c}/{b}?"

pasos:
  - "Mismo denominador: se suman los numeradores. {a} + {c} = {a + c} (el denominador queda {b})"

explicacion: |
  Con el mismo denominador, se suman los numeradores y se deja el mismo
  denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "resta"]

variables:
  b: random(5, 12)
  a: random(2, b - 1)
  c: random(1, a - 1)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} - {c}/{b}?"

explicacion: |
  Con el mismo denominador, se restan los numeradores y se deja el mismo
  denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(2, 12)
  d: random(2, 12)

respuesta: mcm(b, d)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar una fracción de denominador {b} con otra de denominador {d}, ¿cuál es el común denominador más chico?"

explicacion: |
  El común denominador más chico es el MCM de los dos denominadores.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  a: random(1, 5)
  b: random(2, 9)
  d: random(2, 9)
  comun: mcm(b, d)

respuesta: a * (comun / b)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar {a}/{b} con una fracción de denominador {d}, hay que amplificar {a}/{b} hasta el común denominador {comun}. ¿Cuál queda el nuevo numerador?"

pasos:
  - "{comun} ÷ {b} = {comun / b} (factor de amplificación). {a} × {comun / b} = {a * (comun / b)}"

explicacion: |
  El numerador se multiplica por el mismo factor que hizo falta para
  llegar del denominador original al común.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  c: random(1, 5)
  b: random(2, 9)
  d: random(2, 9)
  comun: mcm(b, d)

respuesta: c * (comun / d)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar {c}/{d} con una fracción de denominador {b}, hay que amplificar {c}/{d} hasta el común denominador {comun}. ¿Cuál queda el nuevo numerador?"

explicacion: |
  Mismo procedimiento que con la primera fracción, ahora aplicado a la
  segunda.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "suma"]

variables:
  a: random(1, 4)
  b: random(2, 6)
  c: random(1, 4)
  d: random(2, 6)
  comun: mcm(b, d)
  num_a: a * (comun / b)
  num_c: c * (comun / d)

respuesta: num_a + num_c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} + {c}/{d}, expresado sobre el común denominador {comun}?"

pasos:
  - "{a}/{b} = {num_a}/{comun}. {c}/{d} = {num_c}/{comun}. {num_a} + {num_c} = {num_a + num_c}"

explicacion: |
  Primero se amplifican las dos fracciones al común denominador, y recién
  ahí se suman los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "resta"]

variables:
  a: random(2, 5)
  b: random(2, 6)
  c: random(1, 4)
  d: random(2, 6)
  comun: mcm(b, d)
  num_a: a * (comun / b)
  num_c: c * (comun / d)

restricciones:
  - num_a > num_c

respuesta: num_a - num_c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} - {c}/{d}, expresado sobre el común denominador {comun}?"

explicacion: |
  Igual que en la suma, primero se amplifican las dos fracciones al común
  denominador, y recién ahí se restan los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "multiplicacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: a * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} × {c}/{d}?"

explicacion: |
  Se multiplican los numeradores entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "multiplicacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: b * d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el denominador de {a}/{b} × {c}/{d}?"

explicacion: |
  Se multiplican los denominadores entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de la recíproca de {a}/{b}?"

explicacion: |
  La recíproca "da vuelta" la fracción: el denominador original pasa a
  ser el nuevo numerador.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: a * d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de {a}/{b} ÷ {c}/{d}?"

pasos:
  - "Dividir es multiplicar por la recíproca: {a}/{b} × {d}/{c}. Numerador: {a} × {d} = {a * d}"

explicacion: |
  Se multiplica por la recíproca de la segunda fracción: numerador por
  denominador de la que divide.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

respuesta: b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el denominador de {a}/{b} ÷ {c}/{d}?"

pasos:
  - "Dividir es multiplicar por la recíproca: {a}/{b} × {d}/{c}. Denominador: {b} × {c} = {b * c}"

explicacion: |
  Se multiplica por la recíproca: denominador por numerador de la que
  divide.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para sumar o restar fracciones, primero hay que llevarlas al mismo denominador."

explicacion: |
  Sólo se pueden sumar (o restar) directamente los numeradores cuando el
  denominador ya es el mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para multiplicar fracciones NO hace falta que tengan el mismo denominador."

explicacion: |
  A diferencia de la suma y la resta, multiplicar fracciones se puede
  hacer directamente, sin importar los denominadores.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir por una fracción es lo mismo que multiplicar por su recíproca."

explicacion: |
  Es la regla clave para dividir fracciones: dar vuelta la segunda
  fracción y multiplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "multiplicacion", "simplificar"]

variables:
  a: random(1, 6)
  b: random(2, 6)
  c: random(1, 6)
  d: random(2, 6)
  num: a * c
  den: b * d
  simplificador: mcd(num, den)

respuesta: num / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "{a}/{b} × {c}/{d} da como resultado {num}/{den}. Simplificado al máximo (dividiendo por el MCD), ¿cuál queda el numerador?"

pasos:
  - "MCD({num}, {den}) = {simplificador}. {num} ÷ {simplificador} = {num / simplificador}"

explicacion: |
  Después de multiplicar, conviene simplificar el resultado al máximo
  usando su MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "problema"]

variables:
  b: random(5, 10)
  a: random(1, b - 3)
  c: random(1, b - a - 1)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "El lunes hiciste {a}/{b} de un trabajo, y el martes hiciste {c}/{b} más. ¿Cuál es el numerador de la fracción total hecha (sobre {b})?"

explicacion: |
  Sumar partes hechas en distintos momentos es sumar fracciones — acá con
  el mismo denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "multiplicacion", "problema"]

variables:
  b: random(2, 9)
  d: random(2, 9)

respuesta: b * d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el denominador de \"1/{b} de 1/{d}\" de una torta (es decir, 1/{b} × 1/{d})?"

explicacion: |
  "Una fracción de otra fracción" es multiplicar: los denominadores se
  multiplican entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "division", "problema"]

variables:
  a: random(1, 5)
  b: random(2, 9)
  personas: random(2, 6)

respuesta: b * personas
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {a}/{b} de una torta y la repartís en partes iguales entre {personas} personas. ¿Cuál es el denominador de la fracción que le toca a cada una (es decir, {a}/{b} ÷ {personas})?"

pasos:
  - "{a}/{b} ÷ {personas} = {a}/{b} × 1/{personas}: el denominador queda {b} × {personas} = {b * personas}"

explicacion: |
  Repartir una fracción entre varias personas es dividir esa fracción por
  la cantidad de personas.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(5, 12)
  a: random(1, b - 3)
  c: random(1, b - a - 1)
  correcto: a + c

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * c
  - correcto + 1

enunciado: "¿Cuál es el numerador correcto de {a}/{b} + {c}/{b}?"

explicacion: |
  Con el mismo denominador, se suman los numeradores — no se multiplican.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "multiplicacion"]

variables:
  a: random(1, 8)
  b: random(2, 8)
  c: random(1, 8)
  d: random(2, 8)
  correcto: a * c

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a + c
  - correcto + 1

enunciado: "¿Cuál es el numerador correcto de {a}/{b} × {c}/{d}?"

explicacion: |
  Al multiplicar fracciones, los numeradores se multiplican — no se
  suman.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "verificacion"]

variables:
  a: random(1, 4)
  b: random(2, 6)
  c: random(1, 4)
  d: random(2, 6)
  comun: mcm(b, d)
  num_a: a * (comun / b)
  num_c: c * (comun / d)
  correcto: num_a + num_c
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? {a}/{b} + {c}/{d} = {mostrado}/{comun}"

explicacion: |
  Hay que amplificar cada fracción al común denominador y sumar recién
  ahí los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "verificacion"]

variables:
  a: random(1, 8)
  b: random(2, 8)
  c: random(1, 8)
  d: random(2, 8)
  correcto: a * c
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? {a}/{b} × {c}/{d} = {mostrado}/{b * d}"

explicacion: |
  El numerador correcto es el producto de los dos numeradores originales.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "intermedio"
  tags: ["operaciones_fracciones", "suma"]

variables:
  b: random(2, 9)
  d: random(2, 9)

tipo: completar
enunciado: "Para sumar 1/{b} + 1/{d}, ¿cuál conviene usar como común denominador (el más chico posible)?"
respuestas_validas:
  - mcm(b, d)

explicacion: |
  El común denominador más chico posible es el MCM de {b} y {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "division"]

variables:
  a: random(1, 9)
  b: random(2, 9)

respuesta: b
tipo: mc
opciones_explicitas:
  - b
  - a
  - a + b

enunciado: "¿Cuál es el numerador de la recíproca de {a}/{b}?"

explicacion: |
  La recíproca intercambia numerador y denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "resta"]

variables:
  b: random(2, 8)
  d: random(2, 8)
  comun: mcm(b, d)
  num_a: random(2, comun - 1)
  num_c: random(1, num_a - 1)

respuesta: num_a - num_c
tipo: input
tolerancia_abs: 0

enunciado: "Dos fracciones, ya amplificadas sobre el común denominador {comun}, tienen numeradores {num_a} y {num_c}. ¿Cuál es el numerador de la resta?"

explicacion: |
  Una vez que las dos fracciones ya están sobre el mismo denominador,
  restar es tan simple como restar los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "avanzado"
  tags: ["operaciones_fracciones", "resta", "problema"]

variables:
  b: random(5, 10)
  usado: random(1, b - 1)

respuesta: b - usado
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque estaba lleno y se usó {usado}/{b} de su capacidad. ¿Cuál es el numerador de la fracción que queda (sobre {b})?"

pasos:
  - "El tanque lleno es {b}/{b}: {b}/{b} - {usado}/{b} = ({b} - {usado})/{b} = {b - usado}/{b}"

explicacion: |
  Lo que queda es 1 entero (el todo) menos la fracción usada.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_fracciones"
  nivel: "basico"
  tags: ["operaciones_fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar y restar fracciones necesita el mismo denominador; multiplicar y dividir no."

explicacion: |
  Es la diferencia clave entre las dos parejas de operaciones con
  fracciones.
```
