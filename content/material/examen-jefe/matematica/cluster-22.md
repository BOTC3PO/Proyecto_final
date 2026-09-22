# Examen jefe — [PENDIENTE #622]

> Logro #622. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

---

## Sección: plano-cartesiano (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Qué es el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Un sistema para ubicar puntos con dos rectas numéricas perpendiculares entre sí"
  - "Un tipo de triángulo con un ángulo recto"
  - "Otro nombre para la recta numérica de los enteros"
respuesta: "Un sistema para ubicar puntos con dos rectas numéricas perpendiculares entre sí"

explicacion: |
  Es el puente entre el álgebra y la geometría.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Cómo se llama el eje horizontal del plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Eje x (o eje de abscisas)"
  - "Eje y (o eje de ordenadas)"
  - "Eje z"
respuesta: "Eje x (o eje de abscisas)"

explicacion: |
  El eje y es el vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Cómo se llama el eje vertical del plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Eje y (o eje de ordenadas)"
  - "Eje x (o eje de abscisas)"
  - "Eje diagonal"
respuesta: "Eje y (o eje de ordenadas)"

explicacion: |
  El eje x es el horizontal.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Qué es el origen del plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "El punto (0, 0), donde se cruzan los dos ejes"
  - "El punto más alejado del centro"
  - "Cualquier punto sobre el eje x"
respuesta: "El punto (0, 0), donde se cruzan los dos ejes"

explicacion: |
  Es el punto de referencia desde el que se mide cualquier otra
  posición.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿En cuántos cuadrantes dividen los dos ejes al plano cartesiano?"

explicacion: |
  Cada eje divide el plano en dos mitades; juntos, en cuatro regiones.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante I, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x positivo, y positivo"
  - "x negativo, y positivo"
  - "x negativo, y negativo"
respuesta: "x positivo, y positivo"

explicacion: |
  Es el cuadrante de arriba a la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante II, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x negativo, y positivo"
  - "x positivo, y positivo"
  - "x positivo, y negativo"
respuesta: "x negativo, y positivo"

explicacion: |
  Es el cuadrante de arriba a la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante III, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x negativo, y negativo"
  - "x positivo, y negativo"
  - "x negativo, y positivo"
respuesta: "x negativo, y negativo"

explicacion: |
  Es el cuadrante de abajo a la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante IV, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x positivo, y negativo"
  - "x negativo, y negativo"
  - "x negativo, y positivo"
respuesta: "x positivo, y negativo"

explicacion: |
  Es el cuadrante de abajo a la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro cuadrantes se numeran en sentido antihorario, empezando por el de arriba a la derecha (cuadrante I)."

explicacion: |
  I arriba-derecha, II arriba-izquierda, III abajo-izquierda, IV
  abajo-derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  oy: random(1, 10)

respuesta: "I"
tipo: mc
opciones_explicitas:
  - "I"
  - "II"
  - "III"
  - "IV"

enunciado: "¿En qué cuadrante está el punto ({x}, {oy})?"

explicacion: |
  Ambas coordenadas son positivas: cuadrante I.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  oy: random(1, 10)

respuesta: "II"
tipo: mc
opciones_explicitas:
  - "II"
  - "I"
  - "III"
  - "IV"

enunciado: "¿En qué cuadrante está el punto (-{x}, {oy})?"

explicacion: |
  x negativo, y positivo: cuadrante II.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  oy: random(1, 10)

respuesta: "III"
tipo: mc
opciones_explicitas:
  - "III"
  - "I"
  - "II"
  - "IV"

enunciado: "¿En qué cuadrante está el punto (-{x}, -{oy})?"

explicacion: |
  x negativo, y negativo: cuadrante III.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  oy: random(1, 10)

respuesta: "IV"
tipo: mc
opciones_explicitas:
  - "IV"
  - "I"
  - "II"
  - "III"

enunciado: "¿En qué cuadrante está el punto ({x}, -{oy})?"

explicacion: |
  x positivo, y negativo: cuadrante IV.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "avanzado"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "Un punto que está exactamente sobre uno de los dos ejes (con x=0 o con y=0) no pertenece a ningún cuadrante."

explicacion: |
  Está en el límite entre dos cuadrantes, no dentro de ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "El punto (0, 0) es el origen del plano cartesiano."

explicacion: |
  Es donde se cruzan ambos ejes.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "Cada eje del plano cartesiano es, en el fondo, la misma recta numérica de los números enteros, sólo que orientada horizontal o verticalmente."

explicacion: |
  Por eso este módulo depende de `../numeros-enteros/`.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "El 'eje de abscisas' es otro nombre para:"
tipo: mc
opciones_explicitas:
  - "El eje x"
  - "El eje y"
  - "El origen"
respuesta: "El eje x"

explicacion: |
  "Abscisa" es el nombre técnico de la coordenada x.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "El 'eje de ordenadas' es otro nombre para:"
tipo: mc
opciones_explicitas:
  - "El eje y"
  - "El eje x"
  - "El origen"
respuesta: "El eje y"

explicacion: |
  "Ordenada" es el nombre técnico de la coordenada y.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "completar"]

tipo: completar
enunciado: "Completá: el plano cartesiano recibe su nombre en honor a René ___."
respuestas_validas:
  - "Descartes"

explicacion: |
  Descartes popularizó este sistema como puente entre álgebra y
  geometría.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "ordenar"]

enunciado: "Ordená los pasos para identificar en qué cuadrante está un punto (x, y)."
tipo: ordenar
opciones_explicitas:
  - "Combinar ambos signos para ubicar el cuadrante correspondiente"
  - "Determinar el signo de x"
  - "Determinar el signo de y"
respuesta_orden: ["Determinar el signo de x", "Determinar el signo de y", "Combinar ambos signos para ubicar el cuadrante correspondiente"]
explicacion: |
  La combinación de los dos signos determina uno de los cuatro
  cuadrantes.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "avanzado"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "El plano cartesiano permite 'dibujar' cualquier ecuación algebraica, y describir con números cualquier figura geométrica."

explicacion: |
  Es la idea central de la geometría analítica.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo cotidiano que usa la misma idea del plano cartesiano (ubicar algo con dos coordenadas)?"
tipo: mc
opciones_explicitas:
  - "El juego de la batalla naval, con filas y columnas"
  - "Contar cuántas personas hay en una fila"
  - "Medir la temperatura de un día"
respuesta: "El juego de la batalla naval, con filas y columnas"

explicacion: |
  Cualquier sistema de dos coordenadas cruzadas (fila y columna) usa la
  misma lógica que los ejes x e y.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Es la base para ubicar puntos, medir distancias y graficar rectas y curvas en los temas siguientes"
  - "Sólo sirve para dibujar triángulos"
  - "Sólo se usa en trigonometría, no en el resto de la geometría"
respuesta: "Es la base para ubicar puntos, medir distancias y graficar rectas y curvas en los temas siguientes"

explicacion: |
  Toda la geometría analítica que sigue se construye sobre este sistema
  de coordenadas.
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

## Sección: coordenadas-de-un-punto (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es un par ordenado, como (3, 5)?"
tipo: mc
opciones_explicitas:
  - "Dos números que identifican un punto: el primero es la posición horizontal, el segundo la vertical"
  - "Dos números que se pueden escribir en cualquier orden sin cambiar el punto"
  - "Un número dividido en dos partes"
respuesta: "Dos números que identifican un punto: el primero es la posición horizontal, el segundo la vertical"

explicacion: |
  Se llama "ordenado" porque el orden de los dos números importa.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es la abscisa de un punto?"
tipo: mc
opciones_explicitas:
  - "La primera coordenada (x), la posición horizontal"
  - "La segunda coordenada (y), la posición vertical"
  - "La distancia del punto al origen"
respuesta: "La primera coordenada (x), la posición horizontal"

explicacion: |
  La ordenada es la segunda coordenada (y).
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es la ordenada de un punto?"
tipo: mc
opciones_explicitas:
  - "La segunda coordenada (y), la posición vertical"
  - "La primera coordenada (x), la posición horizontal"
  - "El nombre del propio punto"
respuesta: "La segunda coordenada (y), la posición vertical"

explicacion: |
  La abscisa es la primera coordenada (x).
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos (2, 3) y (3, 2) son puntos distintos en el plano cartesiano."

explicacion: |
  El orden de las coordenadas importa: invertirlo cambia el punto.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)
  oy: random(-10, 10)

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la abscisa (primera coordenada) del punto ({x}, {oy})?"

explicacion: |
  Es el primer número del par ordenado.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)
  oy: random(-10, 10)

respuesta: oy
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la ordenada (segunda coordenada) del punto ({x}, {oy})?"

explicacion: |
  Es el segundo número del par ordenado.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Para ubicar el punto (4, -2) en el plano, ¿cuál es el primer movimiento desde el origen?"
tipo: mc
opciones_explicitas:
  - "Moverse 4 unidades a la derecha"
  - "Moverse 2 unidades hacia abajo"
  - "Moverse 4 unidades hacia arriba"
respuesta: "Moverse 4 unidades a la derecha"

explicacion: |
  Primero se mueve sobre el eje x (la abscisa), y recién después sobre
  el eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier punto de la forma (a, 0), con la segunda coordenada en 0, está siempre sobre el eje x."

explicacion: |
  No se mueve nada en dirección vertical, así que queda sobre el eje
  horizontal.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier punto de la forma (0, b), con la primera coordenada en 0, está siempre sobre el eje y."

explicacion: |
  No se mueve nada en dirección horizontal, así que queda sobre el eje
  vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

respuesta: "(0, 0)"
tipo: mc
opciones_explicitas:
  - "(0, 0)"
  - "(1, 1)"
  - "(0, 1)"

enunciado: "¿Cuáles son las coordenadas del origen del plano cartesiano?"

explicacion: |
  Es el único punto que no se mueve en ninguna dirección desde sí
  mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Si la abscisa de un punto es negativa, ¿hacia qué lado del origen queda ese punto?"
tipo: mc
opciones_explicitas:
  - "A la izquierda"
  - "A la derecha"
  - "Hacia abajo"
respuesta: "A la izquierda"

explicacion: |
  Los valores negativos de x quedan a la izquierda del origen.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Si la ordenada de un punto es negativa, ¿hacia qué lado del origen queda ese punto?"
tipo: mc
opciones_explicitas:
  - "Hacia abajo"
  - "Hacia arriba"
  - "A la izquierda"
respuesta: "Hacia abajo"

explicacion: |
  Los valores negativos de y quedan hacia abajo del origen.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  x: random(1, 10)
  oy: random(1, 10)

respuesta: 0 - oy
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está {x} unidades a la derecha del origen y {oy} unidades hacia abajo. ¿Cuál es su ordenada?"

explicacion: |
  Hacia abajo es y negativo: la ordenada es -{oy}.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "avanzado"
  tags: ["coordenadas"]

respuesta: falso
tipo: vf

enunciado: "Los puntos (5, -1) y (-1, 5) representan la misma posición en el plano."

explicacion: |
  Tienen las mismas dos cifras, pero en orden distinto: son puntos
  distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué nombre recibe el punto (0, 0) en el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "El origen"
  - "El vértice"
  - "El centro de masa"
respuesta: "El origen"

explicacion: |
  Es el punto de referencia desde el que se miden todas las posiciones.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  n: random(1, 15)

respuesta: verdadero
tipo: vf

enunciado: "El punto ({n}, {n}) tiene la misma distancia horizontal y vertical al origen, porque su abscisa y su ordenada son iguales."

explicacion: |
  Ambas coordenadas valen {n}, así que el punto se mueve lo mismo en
  ambas direcciones desde el origen.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Un par ordenado en el plano cartesiano siempre tiene exactamente dos números: la abscisa y la ordenada."

explicacion: |
  Un tercer número haría falta recién en un espacio de tres dimensiones,
  fuera del alcance de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "ordenar"]

enunciado: "Ordená los pasos para ubicar el punto (x, y) en el plano cartesiano."
tipo: ordenar
opciones_explicitas:
  - "Desde ahí, moverse y unidades en dirección vertical"
  - "Partir del origen (0, 0)"
  - "Moverse x unidades sobre el eje horizontal"
respuesta_orden: ["Partir del origen (0, 0)", "Moverse x unidades sobre el eje horizontal", "Desde ahí, moverse y unidades en dirección vertical"]
explicacion: |
  Siempre se resuelve primero el movimiento horizontal (x), y recién
  después el vertical (y).
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  oy: random(-10, 10)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está sobre el eje y, en la posición vertical {oy}. ¿Cuál es su abscisa?"

explicacion: |
  Todo punto sobre el eje y tiene abscisa 0.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está sobre el eje x, en la posición horizontal {x}. ¿Cuál es su ordenada?"

explicacion: |
  Todo punto sobre el eje x tiene ordenada 0.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la primera coordenada de un par ordenado se llama ___."
respuestas_validas:
  - "abscisa"

explicacion: |
  La segunda coordenada se llama ordenada.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la segunda coordenada de un par ordenado se llama ___."
respuestas_validas:
  - "ordenada"

explicacion: |
  La primera coordenada se llama abscisa.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "avanzado"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Un par ordenado describe una posición exacta y única en el plano: no puede haber dos puntos distintos con exactamente las mismas dos coordenadas."

explicacion: |
  Es lo que hace útil al sistema de coordenadas: cada punto tiene un
  'nombre' numérico propio.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve nombrar un punto con un par ordenado?"
tipo: mc
opciones_explicitas:
  - "Es la forma más compacta de describir una posición exacta, necesaria para medir distancias y hallar puntos medios más adelante"
  - "Sólo sirve para dibujar triángulos"
  - "Sólo aplica a puntos que están sobre los ejes"
respuesta: "Es la forma más compacta de describir una posición exacta, necesaria para medir distancias y hallar puntos medios más adelante"

explicacion: |
  Sin coordenadas, no se podría calcular ni distancia ni punto medio
  entre dos puntos.
```

## Sección: decimales (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

enunciado: "¿Qué es un número decimal?"
tipo: mc
opciones_explicitas:
  - "Una fracción con denominador potencia de 10, escrita con coma"
  - "Cualquier número que no sea entero"
  - "Un número negativo"
respuesta: "Una fracción con denominador potencia de 10, escrita con coma"

explicacion: |
  0,3 es otra forma de escribir 3/10; 0,25 es otra forma de escribir
  25/100.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  n: random(1, 9)

respuesta: n / 10
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {n}/10 en decimal?"

explicacion: |
  Cuando el denominador ya es una potencia de 10, se escribe directo con
  coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "conversion"]

variables:
  denominadores: [2, 4, 5, 8, 20, 25, 50]
  d: uno_de(denominadores)
  n: random(1, d - 1)

respuesta: n / d
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {n}/{d} en decimal?"

pasos:
  - "{n} ÷ {d} = {n / d}"

explicacion: |
  Cuando el denominador no es una potencia de 10, se divide el numerador
  por el denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(0, 9)
  decimal: t / 10 + h / 100

respuesta: t * 10 + h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de la fracción equivalente a {decimal} (sobre denominador 100)?"

explicacion: |
  El número decimal sin la coma es, directamente, el numerador sobre la
  potencia de 10 que corresponda.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(1, 9)
  m: random(0, 9)
  decimal: t / 10 + h / 100 + m / 1000

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "{decimal} tiene 3 cifras decimales. ¿Cuál es el denominador de su fracción equivalente?"

explicacion: |
  3 cifras decimales corresponden a milésimos: denominador 1.000.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "comparacion"]

variables:
  entero: random(1, 20)
  t1: random(0, 9)
  t2: random(0, 9)
  a: entero + t1 / 10
  b: entero + t2 / 10

restricciones:
  - t1 != t2

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Con la misma parte entera, se compara la primera cifra decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que 0,5 es mayor que 0,45?"

explicacion: |
  0,5 es lo mismo que 0,50: comparando cifra por cifra, 50 centésimos es
  más que 45 centésimos, aunque "0,45" tenga más cifras escritas.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "0,7 y 0,70 representan exactamente el mismo valor."

explicacion: |
  Agregar un cero al final de la parte decimal no cambia el valor del
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "suma"]

variables:
  e1: random(1, 20)
  t1: random(0, 9)
  e2: random(1, 20)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a + b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Se alinean las comas y se suma como siempre: {a} + {b} = {a + b}"

explicacion: |
  Sumar decimales es igual que sumar enteros, alineando la coma en vez de
  alinear las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "resta"]

variables:
  e1: random(5, 20)
  t1: random(0, 9)
  e2: random(1, 4)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a - b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Se alinean las comas y se resta como siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "multiplicacion"]

variables:
  t1: random(1, 9)
  t2: random(1, 9)
  a: t1 / 10
  b: t2 / 10

respuesta: a * b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} × {b}?"

pasos:
  - "Se multiplica como enteros ({t1} × {t2} = {t1 * t2}) y se pone la coma contando 2 cifras decimales (una de cada factor)"

explicacion: |
  Se multiplica ignorando la coma, y al resultado se le agrega una coma
  contando tantas cifras decimales como sumen los dos factores.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "multiplicacion"]

variables:
  cifras_a: random(1, 3)
  cifras_b: random(1, 3)

respuesta: cifras_a + cifras_b
tipo: input
tolerancia_abs: 0

enunciado: "Si un factor tiene {cifras_a} cifra(s) decimal(es) y el otro tiene {cifras_b}, ¿cuántas cifras decimales va a tener el producto (antes de simplificar ceros finales)?"

explicacion: |
  La cantidad de cifras decimales del producto es la suma de las cifras
  decimales de los dos factores.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "comparacion"]

variables:
  entero: random(1, 20)
  t1: random(0, 8)
  t2: t1 + 1

respuesta: entero + t2 / 10
tipo: mc
opciones_explicitas:
  - entero + t1 / 10
  - entero + t2 / 10

enunciado: "¿Cuál de estos dos números es mayor: {entero + t1 / 10} o {entero + t2 / 10}?"

explicacion: |
  Con la misma parte entera, gana la cifra decimal más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "2,5"
  - "2,05"
  - "2,55"
  - "2,1"
respuesta_orden: ["2,05", "2,1", "2,5", "2,55"]

explicacion: |
  Hay que comparar cifra por cifra después de la coma, sin dejarse
  engañar por la cantidad de cifras escritas.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "problema"]

variables:
  e1: random(50, 500)
  c1: random(0, 99)
  e2: random(10, 200)
  c2: random(0, 99)
  a: e1 + c1 / 100
  b: e2 + c2 / 100

respuesta: a + b
tipo: input
tolerancia_abs: 0.01

enunciado: "Compraste algo de ${a} y otra cosa de ${b}. ¿Cuánto gastaste en total?"

explicacion: |
  Los precios con centavos son decimales de 2 cifras: se suman alineando
  la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "problema"]

variables:
  e1: random(1, 5)
  t1: random(1, 9)
  e2: random(1, 5)
  t2: random(1, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a + b
tipo: input
tolerancia_abs: 0.01

enunciado: "Un caño mide {a} metros y otro mide {b} metros. Si se unen, ¿cuántos metros miden en total?"

explicacion: |
  Sumar longitudes decimales es sumar decimales, alineando la coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "verificacion"]

variables:
  e1: random(1, 20)
  t1: random(0, 9)
  e2: random(1, 20)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10
  correcto: a + b
  error: uno_de([0, 0, 0, 0.1, -0.1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.001)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Un error típico es desalinear la coma al sumar; hay que verificar
  columna por columna, igual que con enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "conversion"]

variables:
  n: random(1, 99)

tipo: completar
enunciado: "0,{n} (con {n} como cifras decimales) es igual a la fracción {n}/___. Completá el denominador."
respuestas_validas:
  - 100

explicacion: |
  Dos cifras decimales corresponden a centésimos: denominador 100.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número decimal con una cantidad finita de cifras se puede escribir como una fracción con denominador potencia de 10."

explicacion: |
  Es la propia definición de número decimal: una fracción de denominador
  10, 100, 1.000... escrita con coma.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Todas las fracciones, al convertirlas a decimal, dan una cantidad finita de cifras decimales."

explicacion: |
  No es cierto: 1/3 = 0,333... tiene infinitas cifras que se repiten (un
  decimal periódico) — no todas las fracciones "cierran" en pocas cifras.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 50)
  t: random(1, 9)
  n: entero + t / 10

respuesta: n * 10
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {n} × 10?"

pasos:
  - "Multiplicar por 10 corre la coma un lugar hacia la derecha: {n} → {n * 10}"

explicacion: |
  Multiplicar un decimal por una potencia de 10 corre la coma hacia la
  derecha, tantos lugares como ceros tenga la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 50)

respuesta: entero / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {entero} ÷ 10?"

pasos:
  - "Dividir por 10 corre la coma un lugar hacia la izquierda: {entero} → {entero / 10}"

explicacion: |
  Dividir por una potencia de 10 corre la coma hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 20)
  h: random(1, 9)
  n: entero + h / 100

respuesta: n * 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {n} × 100?"

explicacion: |
  Multiplicar por 100 corre la coma dos lugares hacia la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(0, 9)
  n: t * 10 + h

respuesta: n
tipo: mc
opciones_explicitas:
  - n
  - n + 1
  - n - 1

enunciado: "¿Cuál es el numerador de la fracción equivalente a 0,{t}{h} (sobre denominador 100)?"

explicacion: |
  El decimal sin la coma es el numerador: {t}{h} sobre 100.
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

enunciado: "¿Cómo se llama la primera cifra después de la coma?"
tipo: mc
opciones_explicitas:
  - "Décimos"
  - "Centésimos"
  - "Unidades"
respuesta: "Décimos"

explicacion: |
  La primera cifra después de la coma son los décimos (÷10).
```

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un número decimal es otra forma de escribir una fracción, cuando el denominador es una potencia de 10."

explicacion: |
  Es la idea central de todo este tema: decimales y fracciones son la
  misma cosa, escritas de dos formas distintas.
```

## Sección: distancia-entre-dos-puntos (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué relación tiene la fórmula de distancia entre dos puntos con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Es el teorema de Pitágoras aplicado a un triángulo rectángulo formado por las diferencias de coordenadas"
  - "No tiene ninguna relación, son fórmulas independientes"
  - "Es el teorema de Pitágoras, pero sólo para puntos en el cuadrante I"
respuesta: "Es el teorema de Pitágoras aplicado a un triángulo rectángulo formado por las diferencias de coordenadas"

explicacion: |
  Δx y Δy son los catetos; la distancia es la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "completar"]

tipo: completar
enunciado: "Completá: en la fórmula de distancia, el resultado final se obtiene sacando ___ de la suma de los cuadrados de Δx y Δy."
respuestas_validas:
  - "raíz cuadrada"
  - "raiz cuadrada"

explicacion: |
  Es el mismo último paso que en el teorema de Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué representa Δx (x₂ − x₁) en la fórmula de distancia?"
tipo: mc
opciones_explicitas:
  - "El cateto horizontal del triángulo rectángulo entre los dos puntos"
  - "La distancia total entre los dos puntos"
  - "El cateto vertical del triángulo"
respuesta: "El cateto horizontal del triángulo rectángulo entre los dos puntos"

explicacion: |
  Δy es el cateto vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 8)
  x1: 0
  y1: 0
  x2: 3 * k
  y2: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2} − {x1} = {x2 - x1}; Δy = {y2} − {y1} = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = √{(x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)} = {5 * k}"

explicacion: |
  Es la terna pitagórica 3-4-5 escalada por {k}: da una distancia exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 6)
  x1: random(-5, 5)
  y1: random(-5, 5)
  x2: x1 + 5 * k
  y2: y1 + 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada por {k}, ahora con un punto
  inicial que no es el origen.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  oy: random(-10, 10)
  x1: random(-10, 0)
  x2: random(1, 10)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {oy}) y ({x2}, {oy})?"

pasos:
  - "Misma ordenada: la distancia es directamente |{x2} − ({x1})| = {x2 - x1}"

explicacion: |
  Con la misma y, la distancia es sólo la diferencia de abscisas, sin
  necesidad de raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  x: random(-10, 10)
  y1: random(-10, 0)
  y2: random(1, 10)

respuesta: y2 - y1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x}, {y1}) y ({x}, {y2})?"

pasos:
  - "Misma abscisa: la distancia es directamente |{y2} − ({y1})| = {y2 - y1}"

explicacion: |
  Con la misma x, la distancia es sólo la diferencia de ordenadas.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "No importa cuál de los dos puntos se llame 'punto 1' y cuál 'punto 2': la distancia calculada da exactamente igual."

explicacion: |
  Restar al revés sólo cambia el signo de Δx y Δy, y el cuadrado
  elimina ese signo.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  x1: random(-8, 0)
  y1: random(-8, 0)
  x2: random(1, 8)
  y2: random(1, 8)

respuesta: redondear(sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})? Redondeá a 2 decimales."

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {redondear(sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), 2)}"

explicacion: |
  No siempre la distancia da un número exacto: en ese caso se redondea.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia entre dos puntos nunca puede dar un número negativo."

explicacion: |
  Es una raíz cuadrada de una suma de cuadrados: siempre positiva o
  cero.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de un punto a sí mismo es siempre 0."

explicacion: |
  Δx y Δy dan 0, así que la raíz de la suma también da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "ordenar"]

enunciado: "Ordená los pasos para calcular la distancia entre dos puntos (x₁, y₁) y (x₂, y₂)."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Calcular Δx = x₂ − x₁ y Δy = y₂ − y₁"
  - "Elevar al cuadrado ambas diferencias y sumarlas"
respuesta_orden: ["Calcular Δx = x₂ − x₁ y Δy = y₂ − y₁", "Elevar al cuadrado ambas diferencias y sumarlas", "Sacar raíz cuadrada de esa suma"]
explicacion: |
  Es exactamente el mismo procedimiento de Pitágoras para hallar una
  hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 5)
  x1: random(1, 5)
  y1: random(1, 5)
  x2: x1 + 8 * k
  y2: y1 + 15 * k

respuesta: 17 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {17 * k}"

explicacion: |
  Es la terna pitagórica 8-15-17 escalada por {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Para qué sirve calcular las tres distancias entre los vértices de un triángulo dado por sus coordenadas?"
tipo: mc
opciones_explicitas:
  - "Para clasificarlo como equilátero, isósceles o escaleno, sólo a partir de las coordenadas"
  - "Para calcular su área directamente, sin ninguna otra fórmula"
  - "No tiene ninguna aplicación práctica"
respuesta: "Para clasificarlo como equilátero, isósceles o escaleno, sólo a partir de las coordenadas"

explicacion: |
  Si las tres distancias (los tres lados) son iguales, es equilátero; si
  sólo dos son iguales, isósceles; si las tres son distintas, escaleno.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene vértices en (0, 0), ({3 * k}, {4 * k}) y (0, {5 * k}). Dos de sus lados miden {5 * k} (uno calculado con la terna 3-4-5, el otro como distancia vertical directa). ¿Es un triángulo isósceles (al menos dos lados iguales)?"

explicacion: |
  El lado entre (0,0) y ({3 * k},{4 * k}) mide {5 * k}, y el lado entre
  (0,0) y (0,{5 * k}) también mide {5 * k}: dos lados iguales alcanzan
  para ser isósceles.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de distancia funciona exactamente igual sin importar en qué cuadrante estén los dos puntos, incluso con coordenadas negativas."

explicacion: |
  Las diferencias se elevan al cuadrado, así que cualquier signo negativo
  desaparece antes de sumar.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  oy: random(-5, 5)
  x1: random(-10, -1)
  x2: random(1, 10)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos están en la misma altura y = {oy}, en las posiciones x = {x1} y x = {x2}. ¿Qué distancia hay entre ellos?"

explicacion: |
  Basta con restar las dos abscisas.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos puntos comparten la misma abscisa o la misma ordenada, no hace falta usar raíz cuadrada para calcular la distancia entre ellos: alcanza con una resta directa."

explicacion: |
  Uno de los dos términos dentro de la raíz da 0, así que la raíz de un
  solo cuadrado es directamente ese valor absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 6)
  dy: 12 * k
  d: 13 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos están a una distancia de {d} unidades entre sí, y su diferencia de ordenadas (Δy) es {dy}. ¿Cuál es su diferencia de abscisas (Δx)?"

pasos:
  - "{d}² − {dy}² = {(d * d) - (dy * dy)}"
  - "√{(d * d) - (dy * dy)} = {5 * k}"

explicacion: |
  Se despeja Δx invirtiendo Pitágoras, igual que hallar un cateto
  conociendo la hipotenusa y el otro cateto.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué significa el símbolo Δ (delta) en 'Δx' o 'Δy'?"
tipo: mc
opciones_explicitas:
  - "Diferencia o cambio entre dos valores"
  - "El símbolo de una raíz cuadrada"
  - "Un ángulo específico de 90°"
respuesta: "Diferencia o cambio entre dos valores"

explicacion: |
  Δx es "cambio en x": x₂ menos x₁.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k1: random(1, 4)
  k2: k1 + random(1, 3)

respuesta: verdadero
tipo: vf

enunciado: "La distancia entre (0,0) y ({3 * k2}, {4 * k2}) es mayor que la distancia entre (0,0) y ({3 * k1}, {4 * k1})."

explicacion: |
  {5 * k2} es mayor que {5 * k1}: a mayor factor de escala sobre la
  misma terna 3-4-5, mayor la distancia resultante.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de A a B es siempre igual a la distancia de B a A."

explicacion: |
  Es una propiedad básica de cualquier distancia geométrica: no importa
  la dirección en la que se mida.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Para qué sirve la fórmula de distancia entre dos puntos, aplicada a un mapa con coordenadas?"
tipo: mc
opciones_explicitas:
  - "Para calcular la distancia real 'en línea recta' entre dos ubicaciones, a partir de sus coordenadas"
  - "Sólo sirve para calcular el área de un mapa"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para calcular la distancia real 'en línea recta' entre dos ubicaciones, a partir de sus coordenadas"

explicacion: |
  Es la misma fórmula, aplicada a coordenadas geográficas o a
  coordenadas de un plano de edificio.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos puntos son distintos entre sí, la distancia entre ellos es siempre mayor que 0."

explicacion: |
  Sólo un punto respecto de sí mismo tiene distancia exactamente 0.
```

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la fórmula de distancia entre dos puntos?"
tipo: mc
opciones_explicitas:
  - "Para medir la distancia real entre dos ubicaciones dadas por sus coordenadas, reusando el teorema de Pitágoras"
  - "Sólo sirve para puntos ubicados en el mismo cuadrante"
  - "Es una fórmula completamente distinta al teorema de Pitágoras"
respuesta: "Para medir la distancia real entre dos ubicaciones dadas por sus coordenadas, reusando el teorema de Pitágoras"

explicacion: |
  Es el mismo teorema ya conocido, aplicado a un par de coordenadas.
```

