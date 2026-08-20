# Matemática — Suma de vectores y descomposición (cuestionario, 27 preguntas VBLang)

> Tema: `M9`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Cómo se suman vectores por componentes

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

### 2 — Problema: componente x de una suma

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

### 3 — Problema: componente y de una suma

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

### 4 — Problema: módulo del vector suma

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

### 5 — Cómo se restan vectores

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

### 6 — Problema: restar vectores

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

### 7 — Multiplicar por un escalar mayor a 1

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

### 8 — Multiplicar por un escalar entre 0 y 1

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

### 9 — Multiplicar por un escalar negativo

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

### 10 — Problema: multiplicar un vector por un escalar

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "problema"]

variables:
  x: random(2, 10)
  oy: random(2, 10)
  k: uno_de([2, 3, 4])

respuesta: x * k
tipo: input
tolerancia_abs: 0

enunciado: "Se multiplica el vector ({x}, {oy}) por el escalar {k}. ¿Cuál es la componente x del resultado?"

pasos:
  - "{x} × {k} = {x * k}"

explicacion: |
  Cada componente se multiplica por el mismo escalar.
```

### 11 — Qué es el vector opuesto

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

### 12 — El vector opuesto tiene el mismo módulo

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

### 13 — El vector opuesto NO tiene la misma dirección

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

### 14 — Método gráfico: punta con cola

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

### 15 — El método gráfico y el de componentes dan el mismo resultado

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

### 16 — Qué es descomponer un vector

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

### 17 — Completar: fórmula de la componente x

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

### 18 — Completar: fórmula de la componente y

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

### 19 — Problema: descomponer un vector con dirección de 30°

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

### 20 — Problema: descomponer un vector con dirección de 60°

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

### 21 — Ordenar: pasos para sumar vectores no alineados con los ejes

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
respuesta_orden: ["Descomponer cada vector en sus componentes x e y", "Sumar todas las componentes x entre sí, y todas las componentes y entre sí", "Calcular el módulo del vector resultante con esas componentes sumadas"]
explicacion: |
  Sin descomponer primero, no se pueden sumar directamente dos vectores
  con direcciones distintas.
```

### 22 — Problema combinado: suma de dos vectores por componentes

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

### 23 — Sumar por componentes siempre es válido

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

### 24 — Aplicación real: fuerzas en direcciones distintas

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

### 25 — Problema: fuerzas descompuestas y sumadas

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

### 26 — El vector nulo es el elemento neutro de la suma

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

### 27 — Cierre: para qué sirve sumar y descomponer vectores

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
