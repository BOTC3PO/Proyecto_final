# Arte — Rosetones y simetría (cuestionario, 24 preguntas VBLang)

> Tema: `AR3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un rosetón

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué es un rosetón?"
tipo: mc
opciones_explicitas:
  - "Una ventana circular ornamentada con un patrón geométrico repetido alrededor de un centro"
  - "Cualquier ventana redonda, sin importar si tiene un patrón o no"
  - "Un tipo de columna usada en la arquitectura gótica"
respuesta: "Una ventana circular ornamentada con un patrón geométrico repetido alrededor de un centro"

explicacion: |
  Es típico de la arquitectura gótica, como en las grandes catedrales.
```

### 2 — El rosetón se basa en geometría, no en decoración al azar

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Un rosetón bien diseñado se basa en una construcción geométrica sistemática, no en un dibujo decorativo al azar."

explicacion: |
  Divide la circunferencia en partes iguales y repite un motivo con
  transformaciones geométricas precisas.
```

### 3 — Problema: ángulo de cada sección de un rosetón

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 9, 10, 12])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón se divide en {n} secciones iguales. ¿Cuántos grados mide cada sección?"

pasos:
  - "360° ÷ {n} = {360 / n}°"

explicacion: |
  Es la misma fórmula del ángulo central de una circunferencia, dividida
  en partes iguales.
```

### 4 — Problema: cantidad de secciones dado el ángulo

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 9, 10, 12])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón tiene secciones de {360 / n}° cada una. ¿Cuántas secciones tiene en total?"

pasos:
  - "360° ÷ {360 / n}° = {n} secciones"

explicacion: |
  Se despeja n dividiendo 360° por el ángulo de cada sección.
```

### 5 — Qué transformación crea la repetición de las secciones

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué transformación geométrica se usa para repetir el motivo de un rosetón alrededor del centro?"
tipo: mc
opciones_explicitas:
  - "La rotación"
  - "La traslación"
  - "La homotecia"
respuesta: "La rotación"

explicacion: |
  El motivo se repite rotándolo el mismo ángulo, una y otra vez, hasta
  completar la vuelta.
```

### 6 — Simetría rotacional de orden n

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué significa que un rosetón tenga 'simetría rotacional de orden n'?"
tipo: mc
opciones_explicitas:
  - "Que se ve exactamente igual después de rotarlo 360°/n"
  - "Que tiene exactamente n colores distintos"
  - "Que fue diseñado hace n siglos"
respuesta: "Que se ve exactamente igual después de rotarlo 360°/n"

explicacion: |
  Es la misma definición de simetría rotacional ya vista en
  `../../matematica/transformaciones-geometricas/rotacion/`.
```

### 7 — A mayor n, más chico el ángulo de simetría

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantas más secciones (n) tiene un rosetón, más chico es su ángulo mínimo de simetría rotacional."

explicacion: |
  El ángulo es 360°/n: a mayor n, menor el resultado de esa división.
```

### 8 — Qué es la simetría axial en un rosetón

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué es la simetría axial en un rosetón?"
tipo: mc
opciones_explicitas:
  - "Que cada sector es el reflejo especular de su vecino, respecto de una línea que pasa por el centro"
  - "Que todos los sectores tienen exactamente el mismo color"
  - "Que el rosetón tiene forma de eje, en vez de circular"
respuesta: "Que cada sector es el reflejo especular de su vecino, respecto de una línea que pasa por el centro"

explicacion: |
  Es aplicar la reflexión (ver
  `../../matematica/transformaciones-geometricas/reflexion/`) dentro del
  diseño del rosetón.
```

### 9 — Problema: ejes de simetría de un rosetón con simetría axial completa

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 10, 12])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón de {n} secciones tiene simetría axial completa. ¿Cuántos ejes de simetría tiene en total?"

pasos:
  - "Un eje de simetría por cada sección: {n} ejes"

explicacion: |
  Cada eje pasa por el centro, dividiendo el rosetón en dos mitades
  espejadas.
```

### 10 — Un rosetón puede combinar rotación y reflexión

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Un rosetón bien diseñado suele combinar simetría rotacional Y simetría axial (reflexión) a la vez, no usar sólo una de las dos."

explicacion: |
  Es lo que le da la sensación de máximo orden y armonía visual.
```

### 11 — Primer paso para diseñar un rosetón

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Cuál es el primer paso para diseñar un rosetón?"
tipo: mc
opciones_explicitas:
  - "Elegir n, la cantidad de secciones o 'pétalos' que va a tener"
  - "Elegir los colores del vitral"
  - "Calcular el costo del material"
respuesta: "Elegir n, la cantidad de secciones o 'pétalos' que va a tener"

explicacion: |
  Todo el resto de la construcción (el ángulo de cada sección) depende
  de ese número.
```

### 12 — Ordenar: pasos para diseñar un rosetón

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "ordenar"]

enunciado: "Ordená los pasos para diseñar un rosetón con n secciones."
tipo: ordenar
opciones_explicitas:
  - "Repetir ese motivo rotándolo 360°/n grados, hasta completar la vuelta"
  - "Elegir n y dividir la circunferencia en n arcos de 360°/n cada uno"
  - "Diseñar el motivo dentro de un solo sector"
respuesta_orden: ["Elegir n y dividir la circunferencia en n arcos de 360°/n cada uno", "Diseñar el motivo dentro de un solo sector", "Repetir ese motivo rotándolo 360°/n grados, hasta completar la vuelta"]
explicacion: |
  El motivo se diseña una sola vez, y después se repite por rotación.
```

### 13 — Valores clásicos de n en rosetones góticos

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Cuáles son valores típicos de n (cantidad de secciones) en rosetones góticos clásicos?"
tipo: mc
opciones_explicitas:
  - "6, 8 o 12"
  - "1 o 2"
  - "1000 o más"
respuesta: "6, 8 o 12"

explicacion: |
  Son números que dividen 360° en ángulos "redondos" (60°, 45°, 30°).
```

### 14 — El círculo tiene infinitos ejes de simetría

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "El propio círculo que enmarca un rosetón tiene infinitos ejes de simetría, más que cualquier patrón dibujado dentro de él."

explicacion: |
  Es el caso límite ya visto en
  `../../matematica/transformaciones-geometricas/reflexion/`.
```

### 15 — Problema: rosetón con 8 secciones

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "problema"]

respuesta: 45
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide cada sección de un rosetón dividido en 8 partes iguales?"

pasos:
  - "360° ÷ 8 = 45°"

explicacion: |
  Es uno de los valores clásicos de n en rosetones góticos.
```

### 16 — Un mandala también usa esta construcción

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mandala, además de un rosetón, es otro ejemplo de patrón que se construye dividiendo un círculo en secciones iguales y repitiendo un motivo por rotación."

explicacion: |
  El mismo principio geométrico aparece en distintas tradiciones
  artísticas.
```

### 17 — Qué transformación NO participa típicamente en un rosetón

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Cuál de las cuatro transformaciones geométricas NO participa típicamente en la construcción de un rosetón?"
tipo: mc
opciones_explicitas:
  - "La traslación (no tiene sentido en un patrón centrado en un punto fijo)"
  - "La rotación"
  - "La reflexión"
respuesta: "La traslación (no tiene sentido en un patrón centrado en un punto fijo)"

explicacion: |
  Un rosetón está centrado en un punto fijo: la traslación (que no
  tiene puntos fijos) no encaja en ese tipo de patrón, a diferencia de
  un empapelado o mosaico repetido en una superficie plana.
```

### 18 — Problema: sectores de un rosetón con simetría axial parcial

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 10, 12])
  con_reflexion: n / 2

respuesta: con_reflexion
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón de {n} secciones tiene simetría axial, pero sólo la mitad de las secciones fueron diseñadas con un motivo reflejado respecto de su vecino (la otra mitad se repite sólo por rotación). ¿Cuántas secciones tienen motivo reflejado?"

pasos:
  - "{n} ÷ 2 = {con_reflexion} secciones"

explicacion: |
  No todos los rosetones combinan las dos simetrías en el 100% del
  diseño.
```

### 19 — La simetría diédrica combina rotación y reflexión

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué nombre recibe un patrón que combina simetría rotacional de orden n con n ejes de simetría axial?"
tipo: mc
opciones_explicitas:
  - "Simetría diédrica"
  - "Simetría lineal"
  - "Simetría homotética"
respuesta: "Simetría diédrica"

explicacion: |
  Es el tipo de simetría más completo posible en un patrón plano
  centrado, salvo el caso límite del círculo mismo.
```

### 20 — Problema: ángulo entre dos secciones no adyacentes

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([8, 10, 12])
  saltos: uno_de([2, 3])

respuesta: (360 / n) * saltos
tipo: input
tolerancia_abs: 0

enunciado: "En un rosetón de {n} secciones iguales, ¿cuántos grados hay entre una sección y otra que está {saltos} posiciones más adelante?"

pasos:
  - "(360° ÷ {n}) × {saltos} = {(360 / n) * saltos}°"

explicacion: |
  Cada salto de una sección a la siguiente suma un ángulo de 360°/n.
```

### 21 — Los rosetones son típicos de la arquitectura gótica

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los rosetones son un elemento típico de la arquitectura gótica, presente en catedrales como la de Notre Dame."

explicacion: |
  Combinan función (dejar entrar luz) con un diseño geométrico
  ornamental.
```

### 22 — El motivo se diseña una sola vez

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Para diseñar un rosetón, el motivo decorativo se diseña una sola vez, dentro de un sector, y después se repite con transformaciones geométricas."

explicacion: |
  No hace falta rediseñar cada sección desde cero: se repite el mismo
  motivo con rotación (y a veces reflexión).
```

### 23 — Problema: rosetón con 12 secciones

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "problema"]

respuesta: 30
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide cada sección de un rosetón dividido en 12 partes iguales?"

pasos:
  - "360° ÷ 12 = 30°"

explicacion: |
  12 secciones es otro valor clásico en el diseño de rosetones.
```

### 24 — Cierre: para qué sirve entender esta construcción

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la construcción geométrica de un rosetón?"
tipo: mc
opciones_explicitas:
  - "Para explicar por qué se ve ordenado y armónico, y para poder diseñar patrones radiales propios (mandalas, logos, mosaicos)"
  - "Sólo sirve para restaurar catedrales góticas existentes"
  - "No tiene ninguna aplicación fuera de la arquitectura religiosa"
respuesta: "Para explicar por qué se ve ordenado y armónico, y para poder diseñar patrones radiales propios (mandalas, logos, mosaicos)"

explicacion: |
  Es la aplicación directa de circunferencia, rotación y reflexión a un
  diseño real.
```
