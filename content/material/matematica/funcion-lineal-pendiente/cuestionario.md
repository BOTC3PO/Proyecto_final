# Matemática — Función lineal: pendiente y ordenada (cuestionario, 30 preguntas VBLang)

> Tema: `A9` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Pendiente entre dos puntos

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: (y2 - y1) / (x2 - x1)
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es su pendiente?"

pasos:
  - "m = ({y2}−{y1})/({x2}−{x1}) = {y2 - y1}/{x2 - x1} = {(y2 - y1) / (x2 - x1)}"

explicacion: |
  m = (y₂−y₁)/(x₂−x₁).
```

### 2 — Pendiente negativa (función decreciente)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["pendiente", "signos"]

variables:
  x1: random(1, 10)
  y1: random(20, 40)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 - m * dx

respuesta: (y2 - y1) / (x2 - x1)
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es su pendiente?"

explicacion: |
  Como y disminuye mientras x aumenta, la pendiente da negativa.
```

### 3 — Pendiente con orden invertido de los puntos

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["pendiente", "verdadero_falso"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: (((y2 - y1) / (x2 - x1)) == ((y1 - y2) / (x1 - x2)))
tipo: vf

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Da lo mismo calcular la pendiente como (y₂−y₁)/(x₂−x₁) que como (y₁−y₂)/(x₁−x₂)?"

explicacion: |
  Sí: mientras se reste en el mismo orden arriba y abajo, el resultado
  es el mismo.
```

### 4 — Pendiente: caso con x1=x2 (no es función)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

variables:
  x: random(1, 20)
  y1: random(1, 20)
  y2: random(21, 40)

respuesta: falso

tipo: vf

enunciado: "Los puntos ({x}, {y1}) y ({x}, {y2}) definen una función lineal con pendiente bien definida."

explicacion: |
  Con la misma x en los dos puntos, el denominador (x₂−x₁) da 0 — una
  recta vertical no es el gráfico de una función (no cumple que cada x
  tenga un único y).
```

### 5 — Ordenada al origen a partir de la ecuación

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  m: random(1, 10)
  b: random(-20, 20)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuál es la ordenada al origen?"

explicacion: |
  f(0) = {b}.
```

### 6 — Evaluar la función lineal

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  m: random(1, 10)
  b: random(-20, 20)
  x: random(-15, 15)

respuesta: m * x + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale f({x})?"

explicacion: |
  {m}×{x} + {b} = {m * x + b}.
```

### 7 — Hallar b conociendo un punto y la pendiente

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["punto_pendiente"]

variables:
  m: random(1, 10)
  x1: random(1, 15)
  y1: random(1, 30)

respuesta: y1 - m * x1
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene pendiente {m} y pasa por ({x1}, {y1}). ¿Cuál es su ordenada al origen b?"

pasos:
  - "y₁ = m×x₁ + b → b = {y1} − {m}×{x1} = {y1 - m * x1}"

explicacion: |
  Se reemplaza el punto conocido en y=mx+b y se despeja b.
```

### 8 — Ecuación de la recta por dos puntos: hallar b

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["punto_pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: y1 - m * x1
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). Ya sabiendo que m={m}, ¿cuál es su ordenada al origen b?"

explicacion: |
  b = y₁ − m×x₁ = {y1} − {m}×{x1} = {y1 - m * x1}.
```

### 9 — Función creciente

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "verdadero_falso"]

variables:
  m: random(1, 15)
  b: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es creciente esta función?"

explicacion: |
  m={m} es positivo, así que f crece cuando x aumenta.
```

### 10 — Función decreciente

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "verdadero_falso"]

variables:
  m: random(-15, -1)
  b: random(-20, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es creciente esta función?"

explicacion: |
  m={m} es negativo, así que f DECRECE cuando x aumenta.
```

### 11 — Función constante

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "opcion_multiple"]

variables:
  b: random(-20, 20)

respuesta: "Constante"
tipo: mc
opciones_explicitas:
  - "Constante"
  - "Creciente"
  - "Decreciente"

enunciado: "f(x) = 0x + {b} (o sea, f(x) = {b} para cualquier x). ¿Es creciente, decreciente o constante?"

explicacion: |
  Con m=0, la función no cambia, sea cual sea x — es constante.
```

### 12 — Rectas paralelas: mismo m

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["paralelas", "verdadero_falso"]

variables:
  m: random(1, 10)
  b1: random(-20, 20)
  b2: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b1} y g(x) = {m}x + {b2}. ¿Son paralelas estas dos rectas?"

explicacion: |
  Tienen la misma pendiente ({m}), así que son paralelas (nunca se
  cruzan, salvo que sean exactamente la misma recta).
```

### 13 — Rectas NO paralelas

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["paralelas", "verdadero_falso"]

variables:
  m1: random(1, 10)
  m2: random(11, 20)
  b1: random(-20, 20)
  b2: random(-20, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {m1}x + {b1} y g(x) = {m2}x + {b2}. ¿Son paralelas estas dos rectas?"

explicacion: |
  Tienen pendientes distintas ({m1} y {m2}), así que se cruzan en algún
  punto — no son paralelas.
```

### 14 — Rectas perpendiculares: hallar el numerador de la perpendicular

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["perpendiculares"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene pendiente {a}/{b} (como fracción, sin simplificar). La pendiente perpendicular se escribe con denominador {a}. ¿Cuál es su numerador?"

pasos:
  - "m₁ × m₂ = −1 → m₂ = −1/m₁ = −{b}/{a}: numerador −{b}"

explicacion: |
  La pendiente perpendicular es la inversa y opuesta: numerador y
  denominador se intercambian, y cambia el signo.
```

### 15 — Rectas perpendiculares: verificar (cruzando numeradores y denominadores)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["perpendiculares", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: ((a * (-b)) == -(b * a))
tipo: vf

enunciado: "Dos rectas tienen pendientes {a}/{b} y −{b}/{a}. ¿Son perpendiculares?"

explicacion: |
  Se verifica sin dividir, cruzando numeradores y denominadores: si
  m₁=p/q y m₂=r/s, son perpendiculares cuando p×r = −q×s.
```

### 16 — Rectas NO perpendiculares (error común: sólo signo opuesto)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["perpendiculares", "error_comun", "verdadero_falso"]

variables:
  m: random(2, 10)

respuesta: ((m * (-m)) == -1)
tipo: vf

enunciado: "Dos rectas tienen pendientes {m} y −{m} (mismo número, signo opuesto). ¿Son perpendiculares?"

explicacion: |
  Sólo son perpendiculares si {m}×(−{m}) da exactamente −1 — eso pasa
  únicamente si m=1. Tener signos opuestos NO alcanza por sí solo.
```

### 17 — Concepto: qué mide la pendiente

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La pendiente mide cuánto cambia y por cada unidad que aumenta x."

explicacion: |
  Es la tasa de cambio constante de una función lineal.
```

### 18 — Concepto: dominio de una función lineal

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función lineal (con m≠0) son todos los números reales."

explicacion: |
  No hay ninguna restricción de dominio, como ya se vio en
  `../funcion-dominio/`.
```

### 19 — Concepto: imagen de una función lineal no constante

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "imagen", "verdadero_falso"]

variables:
  m: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "La imagen de f(x) = {m}x + b (con m distinto de 0) son todos los números reales."

explicacion: |
  Ya visto en `../funcion-imagen/`: cualquier recta no horizontal cubre
  todos los valores de y posibles.
```

### 20 — Concepto: la recta pasa por su propia ordenada al origen

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-20, 20)

respuesta: ((m * 0 + b) == b)
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Pasa la recta por el punto (0, {b})?"

explicacion: |
  f(0) siempre da exactamente b — la ordenada al origen es, literalmente,
  el punto donde cruza el eje y.
```

### 21 — Aplicar en contexto: costo con tarifa fija

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  tarifa_fija: random(5, 30)
  precio_km: random(2, 10)
  km: random(1, 40)

respuesta: precio_km * km + tarifa_fija
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje cuesta C(km) = {precio_km}·km + {tarifa_fija} (tarifa fija más precio por km). ¿Cuánto cuesta un viaje de {km} km?"

explicacion: |
  Es una función lineal: {precio_km} es la pendiente (cuánto sube por
  km), {tarifa_fija} es la ordenada al origen (el costo con 0 km).
```

### 22 — Aplicar en contexto: hallar la pendiente desde dos tarifas

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  tarifa_fija: random(5, 30)
  precio_km: random(2, 10)
  km1: random(1, 10)
  km2: random(11, 30)
  costo1: precio_km * km1 + tarifa_fija
  costo2: precio_km * km2 + tarifa_fija

respuesta: (costo2 - costo1) / (km2 - km1)
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje de {km1} km costó {costo1}, y uno de {km2} km costó {costo2}. ¿Cuál es el precio por km (la pendiente)?"

explicacion: |
  m = (costo2−costo1)/(km2−km1) — la misma fórmula de pendiente, con
  nombres de contexto.
```

### 23 — Verificación con error: pendiente

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx
  real: (y2 - y1) / (x2 - x1)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Es correcto que la pendiente sea {propuesto}?"

explicacion: |
  La pendiente correcta es {real}.
```

### 24 — Concepto: dos puntos determinan una única recta

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Dos puntos distintos (con distinta x) determinan una única recta que pasa por los dos."

explicacion: |
  Con dos puntos alcanza para calcular m y b, y quedan completamente
  determinados.
```

### 25 — Hallar x dado y (despejar de la función lineal)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x_sol: random(1, 20)
  oy: m * x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Para qué valor de x es f(x) = {oy}?"

explicacion: |
  Se despeja x de {m}x + {b} = {oy}, el mismo procedimiento de
  `../ecuacion-primer-grado/`.
```

### 26 — Concepto: intersección con el eje x (raíz)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["raiz"]

variables:
  m: random(2, 10)
  b: random(-30, -1)

respuesta: -b / m
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿En qué valor de x cruza la recta el eje x (f(x)=0)?"

explicacion: |
  {m}x + {b} = 0 → x = −{b}/{m} = {-b / m}.
```

### 27 — Concepto: pendiente de una recta horizontal

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la pendiente de una recta horizontal?"

explicacion: |
  Una recta horizontal no sube ni baja — su pendiente es 0.
```

### 28 — Comparar pendientes: cuál crece más rápido

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["signos", "opcion_multiple"]

variables:
  m1: random(1, 10)
  m2: random(11, 20)

respuesta: "g(x)"
tipo: mc
opciones_explicitas:
  - "g(x)"
  - "f(x)"
  - "Crecen igual"

enunciado: "f(x) = {m1}x + 3, g(x) = {m2}x − 5. ¿Cuál de las dos crece más rápido?"

explicacion: |
  La que tiene mayor pendiente ({m2} > {m1}) sube más rápido, sin
  importar la ordenada al origen.
```

### 29 — Concepto: relación entre pendiente y ángulo

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el valor absoluto de la pendiente, más 'inclinada' (más vertical) se ve la recta."

explicacion: |
  Una pendiente grande significa que y cambia mucho por cada unidad de
  x, así que la recta sube o baja más pronunciada.
```

### 30 — Aplicar: hallar la ecuación completa de la recta

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["punto_pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx
  b: y1 - m * x1
  x_eval: random(1, 30)

respuesta: m * x_eval + b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). Usando su ecuación completa, ¿cuánto vale f({x_eval})?"

pasos:
  - "m = {m}, b = {b} → f(x) = {m}x + {b}"

explicacion: |
  Una vez armada la ecuación completa, evaluarla en cualquier x es
  directo.
```
