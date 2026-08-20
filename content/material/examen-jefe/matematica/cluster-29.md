# Examen jefe — Dominio de Vectores y Estadística

> Logro #80. Resolviste el parcial integrando vectores, distribuciones y teoremas probabilísticos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **118 preguntas totales** en 5/5 secciones.

---

## Sección: suma-de-vectores-y-descomposicion (27 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "¿Cómo se suman dos vectores usando sus componentes?"
tipo: mc
opciones_explicitas:
  - "Se suman las componentes x entre sí, y por separado las componentes y entre sí"
  - "Se suman todas las componentes en un solo número"
  - "Se multiplican las componentes de un vector por las del otro"
respuesta: "Se suman las componentes x entre sí, y por separado las componentes y entre sí"

explicacion: |
  (x₁,y₁) + (x₂,y₂) = (x₁+x₂, y₁+y₂).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: random(1, 10)
  y2: random(1, 10)

respuesta: x1 + x2
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la componente x del vector resultante?"

pasos:
  - "{x1} + {x2} = {x1 + x2}"

explicacion: |
  Se suman sólo las dos componentes x.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: random(1, 10)
  y2: random(1, 10)

respuesta: y1 + y2
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la componente y del vector resultante?"

pasos:
  - "{y1} + {y2} = {y1 + y2}"

explicacion: |
  Se suman sólo las dos componentes y.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores", "problema"]

variables:
  k: random(1, 6)
  x1: uno_de([1, 2, 3])
  y1: uno_de([1, 2])
  x2: (3 * k) - x1
  y2: (4 * k) - y1

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es el módulo del vector resultante?"

pasos:
  - "Suma: ({x1 + x2}, {y1 + y2})"
  - "√({x1 + x2}² + {y1 + y2}²) = {5 * k}"

explicacion: |
  Primero se suman las componentes, y recién con el resultado se aplica
  Pitágoras para hallar el módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "¿Cómo se restan dos vectores usando sus componentes?"
tipo: mc
opciones_explicitas:
  - "Se restan las componentes x entre sí, y por separado las componentes y entre sí"
  - "Se restan los módulos, sin tocar las componentes"
  - "No es posible restar vectores, sólo sumarlos"
respuesta: "Se restan las componentes x entre sí, y por separado las componentes y entre sí"

explicacion: |
  Es exactamente el mismo procedimiento que sumar, con resta en vez de
  suma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(10, 20)
  y1: random(10, 20)
  x2: random(1, 9)
  y2: random(1, 9)

respuesta: x1 - x2
tipo: input
tolerancia_abs: 0

enunciado: "Se resta el vector ({x2}, {y2}) al vector ({x1}, {y1}). ¿Cuál es la componente x del resultado?"

pasos:
  - "{x1} − {x2} = {x1 - x2}"

explicacion: |
  Se restan sólo las componentes x, en el orden dado.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar k > 1?"
tipo: mc
opciones_explicitas:
  - "Se alarga (su módulo aumenta), sin cambiar de dirección"
  - "Se acorta"
  - "Cambia de dirección, apuntando al lado opuesto"
respuesta: "Se alarga (su módulo aumenta), sin cambiar de dirección"

explicacion: |
  Cada componente queda multiplicada por k, que es mayor a 1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar k, con 0 < k < 1?"
tipo: mc
opciones_explicitas:
  - "Se acorta (su módulo disminuye), sin cambiar de dirección"
  - "Se alarga"
  - "Se vuelve el vector nulo"
respuesta: "Se acorta (su módulo disminuye), sin cambiar de dirección"

explicacion: |
  Cada componente queda multiplicada por un número menor a 1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar negativo?"
tipo: mc
opciones_explicitas:
  - "Cambia de dirección, quedando apuntando exactamente al lado opuesto"
  - "Se vuelve el vector nulo automáticamente"
  - "No cambia nada, sólo el módulo se hace negativo"
respuesta: "Cambia de dirección, quedando apuntando exactamente al lado opuesto"

explicacion: |
  El módulo (que nunca es negativo) puede cambiar, pero la dirección
  gira 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "problema"]

variables:
  x: random(2, 10)
  y: random(2, 10)
  k: uno_de([2, 3, 4])

respuesta: x * k
tipo: input
tolerancia_abs: 0

enunciado: "Se multiplica el vector ({x}, {y}) por el escalar {k}. ¿Cuál es la componente x del resultado?"

pasos:
  - "{x} × {k} = {x * k}"

explicacion: |
  Cada componente se multiplica por el mismo escalar.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué es el vector opuesto de v?"
tipo: mc
opciones_explicitas:
  - "El vector -v: mismo módulo, dirección exactamente contraria (180°)"
  - "Un vector con módulo 0"
  - "Un vector perpendicular a v"
respuesta: "El vector -v: mismo módulo, dirección exactamente contraria (180°)"

explicacion: |
  Se obtiene multiplicando v por el escalar -1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El vector opuesto de v tiene exactamente el mismo módulo que v."

explicacion: |
  Multiplicar por -1 sólo cambia la dirección, no la longitud.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar"]

respuesta: falso
tipo: vf

enunciado: "El vector opuesto de v tiene exactamente la misma dirección que v."

explicacion: |
  Tiene dirección opuesta (girada 180°), no la misma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "En el método gráfico para sumar vectores, ¿cómo se dibuja el segundo vector respecto del primero?"
tipo: mc
opciones_explicitas:
  - "Empezando justo donde termina el primero (uniendo punta con cola)"
  - "Superpuesto exactamente sobre el primero"
  - "Siempre partiendo del origen, sin importar el primero"
respuesta: "Empezando justo donde termina el primero (uniendo punta con cola)"

explicacion: |
  El vector suma va desde el origen del primero hasta el extremo del
  segundo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "El método gráfico (punta con cola) y el método por componentes dan exactamente el mismo vector suma."

explicacion: |
  Son dos formas distintas de llegar al mismo resultado; el de
  componentes es más preciso para calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "vocabulario"]

enunciado: "¿Qué es descomponer un vector?"
tipo: mc
opciones_explicitas:
  - "Hallar sus componentes x e y, a partir de su módulo y su dirección"
  - "Dividir su módulo por 2"
  - "Convertirlo en dos vectores nulos"
respuesta: "Hallar sus componentes x e y, a partir de su módulo y su dirección"

explicacion: |
  Es el proceso inverso a calcular módulo y dirección a partir de las
  componentes.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "completar"]

tipo: completar
enunciado: "Completá: componente x = módulo × ___(dirección)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  La componente y usa seno en cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "completar"]

tipo: completar
enunciado: "Completá: componente y = módulo × ___(dirección)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  La componente x usa coseno en cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  modulo: uno_de([10, 20, 40])
  cos_30: 0.87

respuesta: redondear(modulo * cos_30, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza tiene módulo {modulo} N y dirección 30° (cos 30° ≈ 0,87). ¿Cuál es su componente horizontal?"

pasos:
  - "{modulo} × 0,87 = {redondear(modulo * cos_30, 1)} N"

explicacion: |
  x = módulo × cos(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  modulo: uno_de([10, 20, 40])
  sen_60: 0.87

respuesta: redondear(modulo * sen_60, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza tiene módulo {modulo} N y dirección 60° (sen 60° ≈ 0,87). ¿Cuál es su componente vertical?"

pasos:
  - "{modulo} × 0,87 = {redondear(modulo * sen_60, 1)} N"

explicacion: |
  y = módulo × sen(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "ordenar"]

enunciado: "Ordená los pasos para sumar dos vectores que no están alineados con los ejes (cada uno con su propio módulo y dirección)."
tipo: ordenar
opciones_explicitas:
  - "Calcular el módulo del vector resultante con esas componentes sumadas"
  - "Descomponer cada vector en sus componentes x e y"
  - "Sumar todas las componentes x entre sí, y todas las componentes y entre sí"
respuesta_orden:
  - "Descomponer cada vector en sus componentes x e y"
  - "Sumar todas las componentes x entre sí, y todas las componentes y entre sí"
  - "Calcular el módulo del vector resultante con esas componentes sumadas"

explicacion: |
  Sin descomponer primero, no se pueden sumar directamente dos vectores
  con direcciones distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores", "problema"]

variables:
  k: random(1, 5)
  x1: uno_de([1, 2])
  y1: uno_de([1, 2, 3])
  x2: (5 * k) - x1
  y2: (12 * k) - y1

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es el módulo del vector resultante?"

pasos:
  - "Suma: ({x1 + x2}, {y1 + y2})"
  - "√({x1 + x2}² + {y1 + y2}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 aplicada al resultado de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar vectores por componentes funciona siempre, sin importar en qué dirección apunte cada uno."

explicacion: |
  A diferencia del método gráfico (que depende de dibujar bien), el
  método por componentes es puramente numérico y siempre da el
  resultado correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Por qué hace falta descomponer las fuerzas antes de sumarlas, cuando dos personas empujan un mismo objeto desde ángulos distintos?"
tipo: mc
opciones_explicitas:
  - "Porque no se pueden sumar directamente dos vectores con direcciones distintas sin pasar por sus componentes"
  - "Porque las fuerzas nunca se pueden sumar entre sí"
  - "No hace falta descomponer nada, alcanza con sumar los módulos"
respuesta: "Porque no se pueden sumar directamente dos vectores con direcciones distintas sin pasar por sus componentes"

explicacion: |
  Sumar los módulos directamente (sin descomponer) da un resultado
  incorrecto, salvo que ambos vectores tengan la misma dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  fx1: uno_de([10, 20])
  fx2: uno_de([5, 15])

respuesta: fx1 + fx2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. Al descomponerlas, la primera tiene componente horizontal {fx1} N, y la segunda {fx2} N. ¿Cuál es la componente horizontal de la fuerza neta (la suma de ambas)?"

pasos:
  - "{fx1} + {fx2} = {fx1 + fx2} N"

explicacion: |
  Las componentes horizontales de cada fuerza se suman entre sí, por
  separado de las verticales.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar el vector nulo a cualquier otro vector no cambia nada: da el mismo vector original."

explicacion: |
  (x, y) + (0, 0) = (x, y): el vector nulo es el "cero" de la suma de
  vectores.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber sumar y descomponer vectores?"
tipo: mc
opciones_explicitas:
  - "Para calcular el efecto neto de varias magnitudes vectoriales (fuerzas, velocidades) que actúan juntas, incluso en direcciones distintas"
  - "Sólo sirve para vectores que ya están alineados con los ejes"
  - "No tiene aplicación fuera de la matemática pura"
respuesta: "Para calcular el efecto neto de varias magnitudes vectoriales (fuerzas, velocidades) que actúan juntas, incluso en direcciones distintas"

explicacion: |
  Es el paso que conecta directamente con las leyes de Newton en
  Física.
```

## Sección: tablas-de-frecuencia-cuartiles-percentiles-y-varianza (29 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["frecuencia", "vocabulario"]

enunciado: "¿Qué es la frecuencia absoluta de un valor?"
tipo: mc
opciones_explicitas:
  - "La cantidad de veces que ese valor aparece en el conjunto de datos"
  - "El porcentaje que representa ese valor sobre el total"
  - "La suma de las frecuencias de todos los valores anteriores"
respuesta: "La cantidad de veces que ese valor aparece en el conjunto de datos"

explicacion: |
  Es un conteo directo, en cantidad concreta.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["frecuencia", "vocabulario"]

enunciado: "¿Qué es la frecuencia relativa de un valor?"
tipo: mc
opciones_explicitas:
  - "La proporción (o porcentaje) que esa frecuencia absoluta representa sobre el total de datos"
  - "La cantidad de veces que aparece ese valor, en número entero"
  - "El valor más repetido de todo el conjunto"
respuesta: "La proporción (o porcentaje) que esa frecuencia absoluta representa sobre el total de datos"

explicacion: |
  Frecuencia relativa = frecuencia absoluta / total.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia", "vocabulario"]

enunciado: "¿Qué responde la frecuencia acumulada de un valor?"
tipo: mc
opciones_explicitas:
  - "Cuántos casos hay hasta ese valor, inclusive, sumando las frecuencias de ese valor y de todos los anteriores"
  - "Cuántas veces aparece únicamente ese valor, sin sumar nada más"
  - "El porcentaje de datos que quedan por ENCIMA de ese valor"
respuesta: "Cuántos casos hay hasta ese valor, inclusive, sumando las frecuencias de ese valor y de todos los anteriores"

explicacion: |
  Se va acumulando fila por fila, según el orden de los valores.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia", "problema"]

variables:
  tabla: [{nota: 5, frecuencia: 3}, {nota: 6, frecuencia: 5}, {nota: 7, frecuencia: 8}, {nota: 8, frecuencia: 4}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].frecuencia
tipo: input

enunciado: "Tabla de frecuencias de notas de un curso: nota 5 → 3 alumnos; nota 6 → 5 alumnos; nota 7 → 8 alumnos; nota 8 → 4 alumnos. ¿Cuántos alumnos sacaron la nota {tabla[idx].nota}?"

explicacion: |
  Se lee directamente la frecuencia absoluta de esa fila.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["frecuencia", "problema"]

variables:
  tabla: [{nota: 5, frecuencia: 3}, {nota: 6, frecuencia: 5}, {nota: 7, frecuencia: 8}, {nota: 8, frecuencia: 4}]
  idx: uno_de([0, 1, 2, 3])

respuesta: redondear(tabla[idx].frecuencia / 20 * 100, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Con la misma tabla de notas (3+5+8+4 = 20 alumnos en total), ¿qué porcentaje del curso sacó la nota {tabla[idx].nota}?"

pasos:
  - "Frecuencia relativa = {tabla[idx].frecuencia}/20 × 100 = {redondear(tabla[idx].frecuencia / 20 * 100, 1)}%"

explicacion: |
  Se divide la frecuencia absoluta de esa fila por el total de datos.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["frecuencia", "problema"]

respuesta: 16
tipo: input

enunciado: "Con la tabla de notas — 5→3 alumnos, 6→5 alumnos, 7→8 alumnos, 8→4 alumnos —, ¿cuántos alumnos sacaron nota 7 O MENOS (frecuencia acumulada hasta la nota 7)?"

pasos:
  - "Acumulada hasta 7 = 3 + 5 + 8 = 16"

explicacion: |
  Se suman las frecuencias absolutas de esa fila y de todas las
  anteriores (según el orden de los valores).
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las frecuencias relativas de todos los valores de una tabla siempre da exactamente 100% (o 1, si se expresa como proporción)."

explicacion: |
  Es la misma idea de que las probabilidades de todo el espacio
  muestral suman 1.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["frecuencia"]

respuesta: verdadero
tipo: vf

enunciado: "La frecuencia acumulada del último valor de la tabla (el más grande) siempre coincide con el total de datos."

explicacion: |
  Al llegar al último valor, ya se sumaron las frecuencias de todos
  los valores posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["frecuencia", "ordenar"]

enunciado: "Ordená los pasos para construir una tabla de frecuencia a partir de una lista de datos sin organizar."
tipo: ordenar
opciones_explicitas:
  - "Calcular la frecuencia relativa y la acumulada de cada valor"
  - "Listar los valores distintos que aparecen en los datos"
  - "Contar cuántas veces aparece cada valor (frecuencia absoluta)"
respuesta_orden:
  - "Listar los valores distintos que aparecen en los datos"
  - "Contar cuántas veces aparece cada valor (frecuencia absoluta)"
  - "Calcular la frecuencia relativa y la acumulada de cada valor"

explicacion: |
  Sin la frecuencia absoluta primero, no hay nada de donde calcular la
  relativa ni la acumulada.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "vocabulario"]

enunciado: "¿Qué representa el primer cuartil, Q1?"
tipo: mc
opciones_explicitas:
  - "El valor que deja el 25% de los datos por debajo"
  - "El valor que deja el 75% de los datos por debajo"
  - "El valor más chico de todo el conjunto"
respuesta: "El valor que deja el 25% de los datos por debajo"

explicacion: |
  Divide, junto con Q2 y Q3, los datos ordenados en 4 partes iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "vocabulario"]

enunciado: "¿Qué representa el tercer cuartil, Q3?"
tipo: mc
opciones_explicitas:
  - "El valor que deja el 75% de los datos por debajo"
  - "El valor que deja el 25% de los datos por debajo"
  - "El valor más grande de todo el conjunto"
respuesta: "El valor que deja el 75% de los datos por debajo"

explicacion: |
  Es el cuartil 'alto' de los tres.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["cuartiles"]

respuesta: verdadero
tipo: vf

enunciado: "El segundo cuartil, Q2, es exactamente la mediana del conjunto de datos (el 50%)."

explicacion: |
  Son el mismo concepto, con dos nombres distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "completar"]

tipo: completar
enunciado: "Completá: Q1 es equivalente al percentil ___."
respuestas_validas:
  - "25"
  - "P25"

explicacion: |
  Ambos dejan el 25% de los datos por debajo.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["cuartiles", "completar"]

tipo: completar
enunciado: "Completá: Q3 es equivalente al percentil ___."
respuestas_validas:
  - "75"
  - "P75"

explicacion: |
  Ambos dejan el 75% de los datos por debajo.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

variables:
  datos: [10, 12, 15, 18, 20, 22, 25, 30]

respuesta: mediana(datos)
tipo: input

enunciado: "Con los 8 valores ya ordenados 10, 12, 15, 18, 20, 22, 25, 30, ¿cuál es Q2 (la mediana)?"

pasos:
  - "Con 8 valores (par), Q2 = promedio de los dos centrales (18 y 20) = {mediana(datos)}"

explicacion: |
  Es el mismo procedimiento de mediana ya conocido.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

respuesta: 13.5
tipo: input

enunciado: "Con los mismos 8 valores 10, 12, 15, 18, 20, 22, 25, 30, ¿cuál es Q1?"

pasos:
  - "Mitad inferior (los primeros 4): 10, 12, 15, 18"
  - "Q1 = mediana de esa mitad = (12+15)/2 = 13,5"

explicacion: |
  Q1 es la mediana de la mitad inferior de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

respuesta: 23.5
tipo: input

enunciado: "Con los mismos 8 valores 10, 12, 15, 18, 20, 22, 25, 30, ¿cuál es Q3?"

pasos:
  - "Mitad superior (los últimos 4): 20, 22, 25, 30"
  - "Q3 = mediana de esa mitad = (22+25)/2 = 23,5"

explicacion: |
  Q3 es la mediana de la mitad superior de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles", "problema"]

respuesta: 10
tipo: input

enunciado: "Con Q1 = 13,5 y Q3 = 23,5 (del mismo conjunto de 8 valores), ¿cuál es el rango intercuartílico (IQR)?"

pasos:
  - "IQR = Q3 − Q1 = 23,5 − 13,5 = 10"

explicacion: |
  El IQR mide cuánto ocupa el 50% central de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["cuartiles"]

respuesta: verdadero
tipo: vf

enunciado: "El rango intercuartílico (IQR) es menos sensible a valores atípicos que el rango completo (máximo menos mínimo), porque ignora el 25% más bajo y el 25% más alto de los datos."

explicacion: |
  Un valor atípico extremo cambiaría mucho el rango completo, pero
  puede no afectar en nada a Q1 ni a Q3.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["cuartiles", "aplicacion"]

enunciado: "Si un examen estandarizado dice que un puntaje está en el percentil 90 (P90), ¿qué significa eso?"
tipo: mc
opciones_explicitas:
  - "Que ese puntaje es mayor o igual que el 90% de todos los puntajes de referencia"
  - "Que ese puntaje representa el 90% del puntaje máximo posible"
  - "Que el examen tiene 90 preguntas en total"
respuesta: "Que ese puntaje es mayor o igual que el 90% de todos los puntajes de referencia"

explicacion: |
  Un percentil describe la posición RELATIVA respecto de otros
  puntajes, no una proporción del puntaje máximo.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["varianza", "vocabulario"]

enunciado: "¿Qué mide la varianza de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "En promedio, qué tan lejos está cada dato de la media (usando distancias al cuadrado)"
  - "El valor más frecuente del conjunto"
  - "La suma total de todos los valores"
respuesta: "En promedio, qué tan lejos está cada dato de la media (usando distancias al cuadrado)"

explicacion: |
  Es una medida de dispersión, no de tendencia central.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "completar"]

tipo: completar
enunciado: "Completá: varianza = suma de (cada valor − media) al cuadrado, dividida por la ___."
respuestas_validas:
  - "cantidad de valores"
  - "cantidad"

explicacion: |
  Es un promedio de distancias al cuadrado respecto de la media.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza"]

respuesta: verdadero
tipo: vf

enunciado: "Se elevan al cuadrado las distancias a la media para que las distancias positivas (valores por encima) y negativas (por debajo) no se cancelen entre sí al promediarlas."

explicacion: |
  Sin el cuadrado, el promedio de las distancias siempre daría 0, sin
  importar la dispersión real.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "problema"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(1, 10)
  datos: [a, b, c]
  media: promedio(datos)

respuesta: redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2) / 3, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la varianza de estos 3 valores: {a}, {b}, {c}."

pasos:
  - "Media = ({a}+{b}+{c})/3 = {redondear(media, 2)}"
  - "Distancias al cuadrado: ({a}−{redondear(media, 2)})², ({b}−{redondear(media, 2)})², ({c}−{redondear(media, 2)})²"
  - "Varianza = suma de esos cuadrados / 3 = {redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2) / 3, 3)}"

explicacion: |
  Se calcula la media primero, y después el promedio de las
  distancias al cuadrado respecto de ella.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "problema"]

variables:
  a: random(5, 15)
  b: random(5, 15)
  c: random(5, 15)
  d: random(5, 15)
  datos: [a, b, c, d]
  media: promedio(datos)

respuesta: redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2 + (d - media) ^ 2) / 4, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la varianza de estos 4 valores: {a}, {b}, {c}, {d}."

pasos:
  - "Media = ({a}+{b}+{c}+{d})/4 = {redondear(media, 2)}"
  - "Varianza = suma de (cada valor − media)² / 4 = {redondear(((a - media) ^ 2 + (b - media) ^ 2 + (c - media) ^ 2 + (d - media) ^ 2) / 4, 3)}"

explicacion: |
  Mismo procedimiento que con 3 valores, ahora con 4.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "intermedio"
  tags: ["varianza"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la varianza, más dispersos (alejados entre sí) están los datos; cuanto menor, más parecidos son entre sí."

explicacion: |
  Es la lectura práctica de la varianza como medida de dispersión.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "problema"]

variables:
  valor: random(1, 100)
  datos: [valor, valor, valor, valor]
  media: promedio(datos)

respuesta: ((valor - media) ^ 2 + (valor - media) ^ 2 + (valor - media) ^ 2 + (valor - media) ^ 2) / 4
tipo: input

enunciado: "Calculá la varianza de estos 4 valores, todos iguales: {valor}, {valor}, {valor}, {valor}."

pasos:
  - "Media = {valor} (todos son iguales)"
  - "Todas las distancias a la media son 0, así que la varianza es 0"

explicacion: |
  Sin ninguna diferencia entre los valores, no hay ninguna dispersión
  que medir.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "avanzado"
  tags: ["varianza", "ordenar"]

enunciado: "Ordená los pasos para calcular la varianza de un conjunto de datos."
tipo: ordenar
opciones_explicitas:
  - "Promediar todos esos valores al cuadrado"
  - "Calcular la media del conjunto de datos"
  - "Calcular la distancia de cada valor a la media, y elevarla al cuadrado"
respuesta_orden:
  - "Calcular la media del conjunto de datos"
  - "Calcular la distancia de cada valor a la media, y elevarla al cuadrado"
  - "Promediar todos esos valores al cuadrado"

explicacion: |
  Sin la media primero, no hay 'distancia a la media' que calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "tablas_de_frecuencia_cuartiles_percentiles_y_varianza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven las tablas de frecuencia, los cuartiles/percentiles y la varianza, juntos?"
tipo: mc
opciones_explicitas:
  - "Para organizar datos repetidos, ubicar posiciones relativas dentro de un conjunto, y medir cuán dispersos están entre sí — un resumen mucho más completo que un solo promedio"
  - "Sólo sirven para calcular notas de exámenes"
  - "Las tres ideas son exactamente lo mismo, con nombres distintos"
respuesta: "Para organizar datos repetidos, ubicar posiciones relativas dentro de un conjunto, y medir cuán dispersos están entre sí — un resumen mucho más completo que un solo promedio"

explicacion: |
  Es el puente directo hacia `Dispersión: rango y desvío` (el próximo
  módulo del MAPA), que retoma la varianza para llegar al desvío
  estándar.
```

## Sección: tecnicas-de-integracion (22 preguntas)

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

## Sección: teorema-central-del-limite (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["tcl", "vocabulario"]

enunciado: "¿Qué dice el teorema central del límite?"
tipo: mc
opciones_explicitas:
  - "Que la distribución de los promedios de muestras suficientemente grandes se aproxima a una distribución normal, sin importar la forma de la población original"
  - "Que todas las poblaciones tienen forma de distribución normal"
  - "Que una sola muestra grande es siempre igual a la población completa"
respuesta: "Que la distribución de los promedios de muestras suficientemente grandes se aproxima a una distribución normal, sin importar la forma de la población original"

explicacion: |
  Es válido incluso si la población original no es normal en
  absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema central del límite aplica sin importar qué forma tenga la distribución de la población original (uniforme, sesgada, con varios picos...)."

explicacion: |
  Es la parte más sorprendente del teorema: no hace falta que la
  población de partida sea normal.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "completar"]

tipo: completar
enunciado: "Completá: la distribución de los promedios de las muestras queda centrada exactamente en la media ___."
respuestas_validas:
  - "poblacional"
  - "de la población"

explicacion: |
  El promedio de los promedios muestrales coincide con la media real
  de toda la población.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["error_estandar", "vocabulario"]

enunciado: "¿Qué es el error estándar?"
tipo: mc
opciones_explicitas:
  - "El desvío estándar de la distribución de los promedios muestrales (no del dato individual)"
  - "Otro nombre para el desvío estándar de la población original"
  - "La diferencia entre el máximo y el mínimo de una muestra"
respuesta: "El desvío estándar de la distribución de los promedios muestrales (no del dato individual)"

explicacion: |
  Mide qué tan dispersos están, entre sí, los promedios de distintas
  muestras.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "completar"]

tipo: completar
enunciado: "Completá: error estándar = desvío estándar poblacional (σ) / raíz cuadrada de ___."
respuestas_validas:
  - "n"
  - "el tamaño de muestra"

explicacion: |
  error estándar = σ / √n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: uno_de([10, 20, 30])
  n: uno_de([25, 100])

respuesta: redondear(sigma / sqrt(n), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una población tiene desvío estándar σ = {sigma}. Se toman muestras de tamaño n = {n}. ¿Cuál es el error estándar de la distribución de promedios muestrales?"

pasos:
  - "error estándar = {sigma} / √{n} = {sigma} / {sqrt(n)} = {redondear(sigma / sqrt(n), 3)}"

explicacion: |
  Se divide el desvío poblacional por la raíz del tamaño de muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["error_estandar"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más grande es el tamaño de la muestra (n), menor es el error estándar — los promedios de muestras grandes varían menos entre sí que los de muestras chicas."

explicacion: |
  Porque n está en el denominador, dentro de la raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "vocabulario"]

enunciado: "¿Qué regla práctica se suele usar para saber si una muestra es 'suficientemente grande' para que el teorema central del límite dé una buena aproximación?"
tipo: mc
opciones_explicitas:
  - "n ≥ 30 (no es una ley exacta, pero suele alcanzar aunque la población original tenga una forma rara)"
  - "n ≥ 1.000.000, sin excepción"
  - "Cualquier n sirve exactamente igual, no hay ninguna regla práctica"
respuesta: "n ≥ 30 (no es una ley exacta, pero suele alcanzar aunque la población original tenga una forma rara)"

explicacion: |
  Es una convención práctica, no un límite matemático exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: 20
  n_chico: 25
  n_grande: 100

respuesta: (sigma / sqrt(n_chico)) > (sigma / sqrt(n_grande))
tipo: vf

enunciado: "Con σ = {sigma}, ¿el error estándar de una muestra de n = {n_chico} es MAYOR que el de una muestra de n = {n_grande}?"

explicacion: |
  A menor tamaño de muestra, mayor error estándar (más variabilidad
  entre los promedios de distintas muestras chicas).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "aplicacion"]

enunciado: "El resultado de tirar un dado (1 a 6) es una distribución uniforme, no normal. Si se tiran 30 dados y se promedia el resultado, y se repite ese experimento muchas veces, ¿cómo se distribuyen esos promedios?"
tipo: mc
opciones_explicitas:
  - "Se distribuyen aproximadamente como una normal, aunque el resultado de un solo dado no lo sea"
  - "Se distribuyen exactamente igual que el resultado de un solo dado (uniforme)"
  - "No se puede predecir ningún patrón en esos promedios"
respuesta: "Se distribuyen aproximadamente como una normal, aunque el resultado de un solo dado no lo sea"

explicacion: |
  Es el ejemplo clásico para mostrar el teorema central del límite en
  acción.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Por qué el teorema central del límite es tan importante en estadística aplicada?"
tipo: mc
opciones_explicitas:
  - "Porque permite usar el aparato de la distribución normal (z-scores, regla empírica) sobre promedios de muestras, aunque la población original no sea normal"
  - "Porque demuestra que todas las poblaciones del mundo real son normales"
  - "Porque elimina por completo la necesidad de tomar muestras grandes"
respuesta: "Porque permite usar el aparato de la distribución normal (z-scores, regla empírica) sobre promedios de muestras, aunque la población original no sea normal"

explicacion: |
  Es el fundamento matemático de `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "problema"]

variables:
  media_poblacional: uno_de([50, 100])
  sigma: uno_de([10, 20])
  n: 25
  media_muestral: media_poblacional + sigma / sqrt(n)

respuesta: redondear((media_muestral - media_poblacional) / (sigma / sqrt(n)), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una población tiene media {media_poblacional} y desvío σ = {sigma}. Se toma una muestra de n = {n}, cuyo promedio dio {redondear(media_muestral, 2)}. ¿Cuál es el z-score de ese promedio muestral, usando el error estándar en vez del desvío poblacional?"

pasos:
  - "error estándar = {sigma}/√{n} = {sigma / sqrt(n)}"
  - "z = ({redondear(media_muestral, 2)} − {media_poblacional}) / {sigma / sqrt(n)} = {redondear((media_muestral - media_poblacional) / (sigma / sqrt(n)), 2)}"

explicacion: |
  Es el mismo cálculo de z-score de `../distribucion-normal/`, pero
  usando el error estándar en vez del desvío de un dato individual.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema central del límite describe cómo se distribuyen los PROMEDIOS de muchas muestras, no cómo se distribuye cada dato individual dentro de la población."

explicacion: |
  Un dato individual de una población no normal sigue sin ser normal
  — lo que sí tiende a normal es el promedio de un grupo de datos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Por qué las encuestas y estudios estadísticos pueden confiar en que el promedio de una muestra (bien tomada) se acerca al valor real de la población?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema central del límite garantiza que, con una muestra suficientemente grande, ese promedio se distribuye de forma predecible alrededor del valor poblacional real"
  - "Porque cualquier muestra, sin importar cómo se tomó, siempre da el valor exacto de la población"
  - "Porque las encuestas nunca tienen margen de error"
respuesta: "Porque el teorema central del límite garantiza que, con una muestra suficientemente grande, ese promedio se distribuye de forma predecible alrededor del valor poblacional real"

explicacion: |
  Esa "forma predecible" (la normal, con su error estándar) es lo que
  permite calcular después un margen de error concreto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: 40
  n: 25

respuesta: redondear((sigma / sqrt(n)) / (sigma / sqrt(n * 4)), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con σ = {sigma} y n = {n}, ¿por qué factor se reduce el error estándar si se CUADRUPLICA el tamaño de la muestra (n × 4)?"

pasos:
  - "error estándar original = {sigma}/√{n} = {sigma / sqrt(n)}"
  - "error estándar con n×4 = {sigma}/√{n * 4} = {sigma / sqrt(n * 4)}"
  - "Factor de reducción = {sigma / sqrt(n)} / {sigma / sqrt(n * 4)} = {redondear((sigma / sqrt(n)) / (sigma / sqrt(n * 4)), 2)}"

explicacion: |
  Cuadruplicar n reduce el error estándar a la MITAD, no a un cuarto
  — porque depende de la raíz cuadrada de n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar"]

respuesta: verdadero
tipo: vf

enunciado: "Cuadruplicar el tamaño de la muestra reduce el error estándar a la MITAD, no a un cuarto — porque el error estándar depende de la raíz cuadrada de n, y √4 = 2."

explicacion: |
  Es un error común asumir que la reducción es proporcional a n en
  vez de a √n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Qué relación tiene el teorema central del límite con el intervalo de confianza (el módulo que sigue)?"
tipo: mc
opciones_explicitas:
  - "El TCL es la razón matemática por la que se puede construir un intervalo de confianza usando la distribución normal, aunque la población original no sea normal"
  - "No tienen ninguna relación entre sí"
  - "El intervalo de confianza reemplaza por completo al teorema central del límite"
respuesta: "El TCL es la razón matemática por la que se puede construir un intervalo de confianza usando la distribución normal, aunque la población original no sea normal"

explicacion: |
  Sin el TCL, no habría justificación para usar la normal al estimar
  un rango de confianza a partir de una muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "aplicacion"]

enunciado: "Una fábrica controla la calidad de sus piezas tomando muestras de 30 piezas por lote y calculando el promedio de cada muestra, aunque el peso de una pieza individual no siga una distribución normal. ¿Por qué este método sigue siendo válido?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema central del límite garantiza que el promedio de muestras de tamaño 30 se distribuye aproximadamente normal, sin importar la forma de la distribución de una pieza individual"
  - "Porque el peso de cualquier pieza individual siempre es normal, sin excepción"
  - "Porque las fábricas no necesitan ninguna base matemática para este tipo de control"
respuesta: "Porque el teorema central del límite garantiza que el promedio de muestras de tamaño 30 se distribuye aproximadamente normal, sin importar la forma de la distribución de una pieza individual"

explicacion: |
  Es la misma regla práctica de n≥30 aplicada a control de calidad
  industrial.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma_a: 15
  sigma_b: 45
  n: 25

respuesta: (sigma_a / sqrt(n)) < (sigma_b / sqrt(n))
tipo: vf

enunciado: "Población A tiene σ = {sigma_a}; Población B tiene σ = {sigma_b}. Tomando muestras del mismo tamaño n = {n} de cada una, ¿el error estándar de la Población A es MENOR que el de la Población B?"

explicacion: |
  A mayor dispersión de la población original (σ más grande), mayor
  también el error estándar de sus promedios muestrales, para el
  mismo tamaño de muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema central del límite?"
tipo: mc
opciones_explicitas:
  - "Es la base matemática que permite estimar y calcular márgenes de error sobre promedios de muestras, usando la distribución normal, aunque la población original no sea normal"
  - "Sirve sólo para calcular la media de una población conocida por completo"
  - "Sirve sólo cuando la población ya es normal de por sí"
respuesta: "Es la base matemática que permite estimar y calcular márgenes de error sobre promedios de muestras, usando la distribución normal, aunque la población original no sea normal"

explicacion: |
  Sostiene directamente `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`, los dos módulos que siguen.
```

## Sección: teorema-de-bayes (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Para qué sirve el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Para 'invertir' una probabilidad condicional conocida (pasar de P(B|A) a P(A|B))"
  - "Para calcular la probabilidad simple de un único evento"
  - "Para sumar las probabilidades de dos eventos excluyentes"
respuesta: "Para 'invertir' una probabilidad condicional conocida (pasar de P(B|A) a P(A|B))"

explicacion: |
  Es la fórmula exacta para pasar de una dirección de la condicional a
  la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "completar"]

tipo: completar
enunciado: "Completá: P(A|B) = P(B|A) × P(A) / ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  P(A|B) = P(B|A) × P(A) / P(B).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  p_b_dado_a: uno_de([0.8, 0.9])
  p_a: uno_de([0.2, 0.3])
  p_b: uno_de([0.4, 0.5])

respuesta: redondear((p_b_dado_a * p_a) / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(B|A) = {p_b_dado_a}, P(A) = {p_a}, P(B) = {p_b}. ¿Cuál es P(A|B) según el teorema de Bayes?"

pasos:
  - "P(A|B) = ({p_b_dado_a} × {p_a}) / {p_b} = {redondear((p_b_dado_a * p_a) / p_b, 3)}"

explicacion: |
  Se aplica directo la fórmula de Bayes.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la probabilidad 'a priori' en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "P(A), lo que se sabía sobre A antes de tener la evidencia B"
  - "P(A|B), el resultado final después de aplicar Bayes"
  - "P(B|A), qué tan probable es la evidencia si A fuera cierto"
respuesta: "P(A), lo que se sabía sobre A antes de tener la evidencia B"

explicacion: |
  Es el punto de partida, antes de incorporar evidencia nueva.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la probabilidad 'a posteriori' en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "P(A|B), la probabilidad de A actualizada después de incorporar la evidencia B"
  - "P(A), la probabilidad de A antes de cualquier evidencia"
  - "P(B), la probabilidad total de la evidencia"
respuesta: "P(A|B), la probabilidad de A actualizada después de incorporar la evidencia B"

explicacion: |
  Es el resultado final del teorema: la creencia actualizada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "vocabulario"]

enunciado: "¿Qué es la verosimilitud P(B|A) en el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Qué tan probable es observar la evidencia B, si A fuera cierto"
  - "La probabilidad final de A, después de ver la evidencia"
  - "La probabilidad de que A y B ocurran juntos"
respuesta: "Qué tan probable es observar la evidencia B, si A fuera cierto"

explicacion: |
  Es el término que 'conecta' la hipótesis A con la evidencia
  observada B.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad

respuesta: redondear(sensibilidad * prevalencia + falso_positivo * (1 - prevalencia), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una enfermedad afecta al {prevalencia * 100}% de la población. Un test tiene sensibilidad {sensibilidad * 100}% (P(positivo|enfermo)) y especificidad {especificidad * 100}% (P(negativo|sano)). ¿Cuál es la probabilidad TOTAL de dar positivo, P(positivo), sumando verdaderos y falsos positivos?"

pasos:
  - "P(positivo|sano) = 1 − {especificidad} = {falso_positivo}"
  - "P(positivo) = {sensibilidad}×{prevalencia} + {falso_positivo}×{1 - prevalencia} = {redondear(sensibilidad * prevalencia + falso_positivo * (1 - prevalencia), 4)}"

explicacion: |
  Se suman los dos caminos posibles hacia un resultado positivo:
  venir de un enfermo real, o ser un falso positivo de un sano.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con prevalencia {prevalencia * 100}%, sensibilidad {sensibilidad * 100}% y especificidad {especificidad * 100}%, si el test da POSITIVO, ¿cuál es la probabilidad real de estar enfermo, P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)} (ya calculado)"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  A pesar de que el test parece muy confiable, el resultado da apenas
  ≈16,7% — la enfermedad es tan rara que los falsos positivos superan
  a los verdaderos positivos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque un test tenga una sensibilidad muy alta (por ejemplo, 99%), si la enfermedad que detecta es muy rara, la probabilidad real de estar enfermo dado un resultado positivo puede ser sorprendentemente baja."

explicacion: |
  Es exactamente lo que muestra el ejemplo del test médico: 99% de
  sensibilidad, pero sólo ≈16,7% de probabilidad real dado positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes"]

enunciado: "¿Por qué es tan importante tener en cuenta la prevalencia (probabilidad a priori) al interpretar un resultado de test positivo?"
tipo: mc
opciones_explicitas:
  - "Porque ignorarla lleva a sobreestimar mucho la probabilidad real de estar enfermo — es el error conocido como 'falacia de la tasa base'"
  - "Porque la prevalencia no tiene ningún efecto real sobre el resultado de Bayes"
  - "Porque sólo importa cuando la enfermedad es muy común, nunca cuando es rara"
respuesta: "Porque ignorarla lleva a sobreestimar mucho la probabilidad real de estar enfermo — es el error conocido como 'falacia de la tasa base'"

explicacion: |
  Es el nombre técnico del error de ignorar P(A) y quedarse sólo con
  la verosimilitud P(B|A).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: uno_de([0.001, 0.01, 0.1])
  sensibilidad: 0.99
  especificidad: 0.95
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con el mismo test (sensibilidad 99%, especificidad 95%), pero ahora con una enfermedad que afecta al {prevalencia * 100}% de la población, ¿cuál es P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)}"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  Cuanto más rara la enfermedad (prevalencia más baja), más chica
  queda la probabilidad real dado un positivo, con el mismo test.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "aplicacion"]

enunciado: "Un filtro de spam calcula P(spam | el mail contiene la palabra 'ganador'). ¿Qué rol cumple el teorema de Bayes acá?"
tipo: mc
opciones_explicitas:
  - "Permite calcular esa probabilidad a partir de P(la palabra 'ganador' | spam) (más fácil de medir contando mails ya clasificados) y la proporción general de spam"
  - "El teorema de Bayes no se usa en filtros de spam"
  - "Sólo sirve para contar cuántas veces aparece la palabra 'ganador'"
respuesta: "Permite calcular esa probabilidad a partir de P(la palabra 'ganador' | spam) (más fácil de medir contando mails ya clasificados) y la proporción general de spam"

explicacion: |
  Es más fácil medir 'qué tan común es esta palabra EN mails de spam
  ya clasificados' que medir directo 'qué tan probable es que ESTE
  mail sea spam' — Bayes conecta ambas cosas.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  p_spam: 0.2
  p_palabra_dado_spam: 0.6
  p_palabra_dado_no_spam: 0.05
  p_palabra: p_palabra_dado_spam * p_spam + p_palabra_dado_no_spam * (1 - p_spam)

respuesta: redondear((p_palabra_dado_spam * p_spam) / p_palabra, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "El {p_spam * 100}% de los mails son spam. La palabra 'ganador' aparece en el {p_palabra_dado_spam * 100}% de los mails spam, y sólo en el {p_palabra_dado_no_spam * 100}% de los mails normales. Si un mail contiene 'ganador', ¿cuál es P(spam | contiene 'ganador')?"

pasos:
  - "P(contiene 'ganador') = {p_palabra_dado_spam}×{p_spam} + {p_palabra_dado_no_spam}×{1 - p_spam} = {redondear(p_palabra, 4)}"
  - "P(spam | 'ganador') = ({p_palabra_dado_spam}×{p_spam}) / {redondear(p_palabra, 4)} = {redondear((p_palabra_dado_spam * p_spam) / p_palabra, 3)}"

explicacion: |
  Con esta palabra, la probabilidad de spam sube bastante respecto
  del 20% base — es la lógica detrás de cualquier filtro bayesiano.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema de Bayes permite calcular P(A|B) a partir de P(B|A) — invierte la dirección de una probabilidad condicional que ya se conoce."

explicacion: |
  Es la utilidad central del teorema: pasar de una dirección de la
  condicional a la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.02
  sensibilidad: 0.95
  especificidad: uno_de([0.9, 0.98])
  falso_positivo: 1 - especificidad
  p_positivo: sensibilidad * prevalencia + falso_positivo * (1 - prevalencia)

respuesta: redondear((sensibilidad * prevalencia) / p_positivo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con prevalencia 2%, sensibilidad 95% y especificidad {especificidad * 100}%, ¿cuál es P(enfermo|positivo)?"

pasos:
  - "P(positivo) = {redondear(p_positivo, 4)}"
  - "P(enfermo|positivo) = ({sensibilidad}×{prevalencia}) / {redondear(p_positivo, 4)} = {redondear((sensibilidad * prevalencia) / p_positivo, 3)}"

explicacion: |
  A mayor especificidad (menos falsos positivos), mayor la
  probabilidad real dado un resultado positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "intermedio"
  tags: ["bayes", "condicional"]

enunciado: "¿De dónde sale la fórmula del teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "De combinar las dos formas de escribir P(A y B) con probabilidad condicional: P(A|B)×P(B) = P(A y B) = P(B|A)×P(A)"
  - "Es un axioma independiente, sin relación con la probabilidad condicional"
  - "Se obtiene sumando P(A) y P(B) directamente"
respuesta: "De combinar las dos formas de escribir P(A y B) con probabilidad condicional: P(A|B)×P(B) = P(A y B) = P(B|A)×P(A)"

explicacion: |
  Igualando ambas expresiones de P(A y B) y despejando P(A|B) se
  obtiene exactamente la fórmula de Bayes.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "condicional"]

respuesta: verdadero
tipo: vf

enunciado: "El resultado de aplicar el teorema de Bayes para calcular P(A|B) siempre coincide con el cálculo directo P(A y B) / P(B) — son la misma fórmula, escrita de dos formas distintas."

explicacion: |
  Bayes sólo reemplaza P(A y B) por P(B|A)×P(A), que es otra forma
  válida de calcular lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "avanzado"
  tags: ["bayes", "problema"]

variables:
  prevalencia: 0.01
  sensibilidad: 0.99
  especificidad_a: 0.9
  especificidad_b: 0.99

respuesta: (sensibilidad * prevalencia) / (sensibilidad * prevalencia + (1 - especificidad_a) * (1 - prevalencia)) < (sensibilidad * prevalencia) / (sensibilidad * prevalencia + (1 - especificidad_b) * (1 - prevalencia))
tipo: vf

enunciado: "Test A tiene especificidad {especificidad_a * 100}%; Test B tiene especificidad {especificidad_b * 100}% (ambos con sensibilidad {sensibilidad * 100}% y misma prevalencia {prevalencia * 100}%). ¿P(enfermo|positivo) del Test A es MENOR que la del Test B?"

explicacion: |
  Menos especificidad significa más falsos positivos, lo que diluye
  más la probabilidad real de estar enfermo dado un resultado
  positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["bayes", "aplicacion"]

enunciado: "¿Cuál es la idea general detrás de usar el teorema de Bayes para 'actualizar creencias'?"
tipo: mc
opciones_explicitas:
  - "Partir de una probabilidad inicial (a priori), incorporar evidencia nueva, y obtener una probabilidad actualizada (a posteriori) que refleja esa evidencia"
  - "Ignorar cualquier información previa y calcular todo desde cero con cada evidencia nueva"
  - "Asumir que la probabilidad de cualquier evento siempre es 50%"
respuesta: "Partir de una probabilidad inicial (a priori), incorporar evidencia nueva, y obtener una probabilidad actualizada (a posteriori) que refleja esa evidencia"

explicacion: |
  Es el patrón general que se repite en diagnóstico médico, filtros
  de spam, y cualquier sistema que aprenda de evidencia.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_bayes"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve, en definitiva, el teorema de Bayes?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad real de una causa dado un efecto observado (P(A|B)), a partir de qué tan probable es ese efecto si la causa fuera cierta (P(B|A)) y qué tan común es la causa de por sí (P(A))"
  - "Para calcular la probabilidad de dos eventos independientes ocurriendo a la vez"
  - "Sólo se usa en medicina, no tiene otras aplicaciones"
respuesta: "Para calcular la probabilidad real de una causa dado un efecto observado (P(A|B)), a partir de qué tan probable es ese efecto si la causa fuera cierta (P(B|A)) y qué tan común es la causa de por sí (P(A))"

explicacion: |
  Cierra la cadena de `../probabilidad-condicional/`: de "qué tan
  probable es la evidencia si la hipótesis fuera cierta" a "qué tan
  probable es la hipótesis, dada la evidencia observada".
```
