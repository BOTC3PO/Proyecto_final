# Matemática — Vectores: módulo y dirección (cuestionario, 26 preguntas VBLang)

> Tema: `M8`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre escalar y vector

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una magnitud escalar y una vectorial?"
tipo: mc
opciones_explicitas:
  - "La escalar sólo tiene un número (magnitud); la vectorial también tiene una dirección"
  - "La escalar siempre es negativa; la vectorial siempre es positiva"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "La escalar sólo tiene un número (magnitud); la vectorial también tiene una dirección"

explicacion: |
  La temperatura es escalar; la velocidad es vectorial.
```

### 2 — Ejemplo de magnitud escalar

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál de estas es una magnitud escalar?"
tipo: mc
opciones_explicitas:
  - "La masa de un objeto"
  - "La velocidad de un auto"
  - "La fuerza aplicada sobre una caja"
respuesta: "La masa de un objeto"

explicacion: |
  La masa queda descripta con un solo número, sin ninguna dirección.
```

### 3 — Ejemplo de magnitud vectorial

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál de estas es una magnitud vectorial?"
tipo: mc
opciones_explicitas:
  - "La velocidad de un auto"
  - "La temperatura de una habitación"
  - "La edad de una persona"
respuesta: "La velocidad de un auto"

explicacion: |
  La velocidad necesita, además del número (rapidez), una dirección.
```

### 4 — Qué son las componentes de un vector

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué son las componentes de un vector que va del origen al punto (x, y)?"
tipo: mc
opciones_explicitas:
  - "El par (x, y): cuánto avanza en horizontal y en vertical"
  - "El módulo del vector, expresado con dos decimales"
  - "El ángulo que forma con cada eje"
respuesta: "El par (x, y): cuánto avanza en horizontal y en vertical"

explicacion: |
  Es la misma idea de coordenadas, ahora interpretada como
  desplazamiento.
```

### 5 — Problema: módulo con terna 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 8)
  x: 3 * k
  oy: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {oy}). ¿Cuál es su módulo?"

pasos:
  - "√({x}² + {oy}²) = √{(x * x) + (oy * oy)} = {5 * k}"

explicacion: |
  Es el teorema de Pitágoras aplicado a las componentes del vector.
```

### 6 — Problema: módulo con terna 5-12-13

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x: 5 * k
  oy: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {oy}). ¿Cuál es su módulo?"

pasos:
  - "√({x}² + {oy}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada.
```

### 7 — Problema: módulo con resultado redondeado

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  x: random(1, 15)
  oy: random(1, 15)

respuesta: redondear(sqrt((x * x) + (oy * oy)), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un vector tiene componentes ({x}, {oy}). ¿Cuál es su módulo? Redondeá a 2 decimales."

pasos:
  - "√({x}² + {oy}²) = {redondear(sqrt((x * x) + (oy * oy)), 2)}"

explicacion: |
  No siempre el módulo da un número exacto.
```

### 8 — Qué es la dirección de un vector

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es la dirección de un vector?"
tipo: mc
opciones_explicitas:
  - "El ángulo que forma con el eje x positivo, medido en sentido antihorario"
  - "La longitud total de la flecha que lo representa"
  - "El punto exacto donde termina el vector"
respuesta: "El ángulo que forma con el eje x positivo, medido en sentido antihorario"

explicacion: |
  El módulo es la longitud; la dirección es hacia dónde apunta.
```

### 9 — Vectores equivalentes

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Dos vectores con el mismo módulo y la misma dirección son considerados el mismo vector, aunque estén dibujados con distinto punto de origen en el plano."

explicacion: |
  Un vector "libre" se puede trasladar sin cambiar lo que representa.
```

### 10 — Qué es un vector nulo

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es un vector nulo?"
tipo: mc
opciones_explicitas:
  - "Un vector con módulo 0, sin dirección definida"
  - "Un vector con dirección hacia el eje x negativo"
  - "Un vector que apunta siempre hacia el origen"
respuesta: "Un vector con módulo 0, sin dirección definida"

explicacion: |
  Sin longitud, no hay ninguna dirección real que definir.
```

### 11 — Qué es un vector unitario

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es un vector unitario?"
tipo: mc
opciones_explicitas:
  - "Un vector con módulo exactamente 1"
  - "Un vector que sólo tiene una componente distinta de 0"
  - "Un vector que apunta siempre hacia arriba"
respuesta: "Un vector con módulo exactamente 1"

explicacion: |
  Se usa para representar sólo una dirección, sin peso en la magnitud.
```

### 12 — Problema: verificar que un vector es unitario

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Un vector tiene componentes (0,6, 0,8). ¿Es un vector unitario?"

explicacion: |
  √(0,6² + 0,8²) = √(0,36 + 0,64) = √1 = 1: sí, es unitario.
```

### 13 — Problema: hallar una componente dado el módulo

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x: 8 * k
  modulo: 17 * k

respuesta: 15 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componente x = {x} y módulo {modulo}. ¿Cuál es su componente y (positiva)?"

pasos:
  - "{modulo}² − {x}² = {(modulo * modulo) - (x * x)}"
  - "√{(modulo * modulo) - (x * x)} = {15 * k}"

explicacion: |
  Se despeja la componente faltante invirtiendo Pitágoras, igual que
  hallar un cateto conociendo la hipotenusa y el otro cateto.
```

### 14 — El módulo nunca es negativo

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un vector nunca puede ser un número negativo."

explicacion: |
  Es una raíz cuadrada de una suma de cuadrados: siempre positiva o
  cero.
```

### 15 — Cómo se representa gráficamente un vector

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cómo se representa gráficamente un vector?"
tipo: mc
opciones_explicitas:
  - "Con una flecha, desde un punto de origen hasta un punto de extremo"
  - "Con un punto suelto, sin ninguna línea"
  - "Con un círculo alrededor del origen"
respuesta: "Con una flecha, desde un punto de origen hasta un punto de extremo"

explicacion: |
  La punta de la flecha marca el extremo, y también la dirección.
```

### 16 — Origen y extremo de un vector

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "En la flecha que representa un vector, ¿cuál es el 'extremo'?"
tipo: mc
opciones_explicitas:
  - "El punto de llegada, donde está la punta de la flecha"
  - "El punto de partida, donde empieza la flecha"
  - "El punto medio de la flecha"
respuesta: "El punto de llegada, donde está la punta de la flecha"

explicacion: |
  El punto de partida se llama origen (o "cola").
```

### 17 — Problema: componentes de un vector desde el origen

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "problema"]

variables:
  x: random(-10, 10)
  oy: random(-10, 10)

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el origen (0, 0) hasta el punto ({x}, {oy}). ¿Cuál es su componente horizontal?"

explicacion: |
  Es directamente la abscisa del punto de llegada.
```

### 18 — Problema: componentes de un vector entre dos puntos cualesquiera

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: x1 + random(2, 8)
  y2: y1 + random(2, 8)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el punto ({x1}, {y1}) hasta el punto ({x2}, {y2}). ¿Cuál es su componente horizontal?"

pasos:
  - "{x2} − {x1} = {x2 - x1}"

explicacion: |
  Un vector entre dos puntos cualesquiera se calcula restando las
  coordenadas del punto de llegada menos las del punto de partida.
```

### 19 — Relación entre módulo y distancia

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué relación tiene el módulo de un vector con la fórmula de distancia entre dos puntos?"
tipo: mc
opciones_explicitas:
  - "Son la misma fórmula: el módulo es la distancia entre el origen y el extremo del vector"
  - "No tienen ninguna relación"
  - "El módulo siempre es el doble de la distancia"
respuesta: "Son la misma fórmula: el módulo es la distancia entre el origen y el extremo del vector"

explicacion: |
  Por eso este módulo depende de `../distancia-entre-dos-puntos/`.
```

### 20 — Problema: módulo de un vector entre dos puntos

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x1: random(1, 5)
  y1: random(1, 5)
  x2: x1 + 3 * k
  y2: y1 + 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el punto ({x1}, {y1}) hasta el punto ({x2}, {y2}). ¿Cuál es su módulo?"

pasos:
  - "Componentes: ({x2 - x1}, {y2 - y1})"
  - "√({x2 - x1}² + {y2 - y1}²) = {5 * k}"

explicacion: |
  Primero se calculan las componentes (la diferencia de coordenadas), y
  recién después el módulo.
```

### 21 — Ordenar: pasos para hallar el módulo de un vector

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "ordenar"]

enunciado: "Ordená los pasos para hallar el módulo de un vector, conociendo sus componentes (x, y)."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Elevar al cuadrado cada componente"
  - "Sumar los dos cuadrados"
respuesta_orden: ["Elevar al cuadrado cada componente", "Sumar los dos cuadrados", "Sacar raíz cuadrada de esa suma"]
explicacion: |
  Es el mismo procedimiento del teorema de Pitágoras.
```

### 22 — La dirección se mide respecto del eje x positivo

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, la dirección de un vector se mide como el ángulo respecto del eje x positivo, en sentido antihorario."

explicacion: |
  Es la misma convención usada para los cuadrantes del plano
  cartesiano.
```

### 23 — Problema: componentes de un vector con dirección notable

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  modulo: uno_de([10, 20, 30, 40])
  cos_30: 0.87
  sen_30: 0.5

respuesta: redondear(modulo * sen_30, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un vector tiene módulo {modulo} y dirección 30° (sen 30° = 0,5, cos 30° ≈ 0,87). ¿Cuál es su componente vertical (y)?"

pasos:
  - "{modulo} × 0,5 = {redondear(modulo * sen_30, 1)}"

explicacion: |
  y = módulo × sen(dirección).
```

### 24 — Aplicación real: fuerza con dirección

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Por qué la fuerza que se aplica sobre una caja se describe con un vector, y no con un solo número?"
tipo: mc
opciones_explicitas:
  - "Porque importa tanto cuánta fuerza se aplica como en qué dirección se empuja"
  - "Porque las fuerzas siempre son negativas"
  - "En realidad la fuerza es una magnitud escalar, no vectorial"
respuesta: "Porque importa tanto cuánta fuerza se aplica como en qué dirección se empuja"

explicacion: |
  Empujar hacia arriba, hacia abajo o de costado da resultados muy
  distintos, aunque la magnitud de la fuerza sea la misma.
```

### 25 — Dos vectores pueden tener el mismo módulo y distinta dirección

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Dos vectores pueden tener exactamente el mismo módulo pero apuntar en direcciones completamente distintas."

explicacion: |
  El módulo y la dirección son dos datos independientes entre sí.
```

### 26 — Cierre: para qué sirven los vectores

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven los vectores?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier magnitud que combine una cantidad con una dirección: desplazamientos, velocidades, fuerzas"
  - "Sólo sirven para describir posiciones fijas en el plano"
  - "Sólo tienen aplicación en geometría pura, sin uso en Física"
respuesta: "Para describir cualquier magnitud que combine una cantidad con una dirección: desplazamientos, velocidades, fuerzas"

explicacion: |
  Es la base para sumarlos y combinarlos en los módulos siguientes.
```
