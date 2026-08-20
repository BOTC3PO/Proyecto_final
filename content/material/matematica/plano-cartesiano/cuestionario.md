# Matemática — Plano cartesiano: ejes y cuadrantes (cuestionario, 24 preguntas VBLang)

> Tema: `GA1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el plano cartesiano

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

### 2 — Cómo se llama el eje horizontal

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

### 3 — Cómo se llama el eje vertical

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

### 4 — Qué es el origen

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

### 5 — Cuántos cuadrantes tiene el plano cartesiano

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

### 6 — Signos del cuadrante I

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

### 7 — Signos del cuadrante II

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

### 8 — Signos del cuadrante III

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

### 9 — Signos del cuadrante IV

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

### 10 — Los cuadrantes se numeran en sentido antihorario

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

### 11 — Problema: identificar cuadrante dado un punto

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

### 12 — Problema: identificar cuadrante dado un punto (II)

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

### 13 — Problema: identificar cuadrante dado un punto (III)

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

### 14 — Problema: identificar cuadrante dado un punto (IV)

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

### 15 — Un punto sobre un eje no pertenece a ningún cuadrante

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

### 16 — El punto (0, 0) es el origen

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

### 17 — Los ejes son la misma recta numérica de los enteros

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

### 18 — Vocabulario: eje de abscisas

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

### 19 — Vocabulario: eje de ordenadas

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

### 20 — Completar: nombre del sistema

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

### 21 — Ordenar: identificar el cuadrante de un punto

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

### 22 — El plano cartesiano conecta álgebra y geometría

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

### 23 — Ejemplo de uso: batalla naval

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

### 24 — Cierre: para qué sirve el plano cartesiano

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
