# Química — Toda medición de laboratorio (cuestionario, 24 preguntas VBLang)

> Tema: `Q4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la apreciación de un instrumento

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es la apreciación de un instrumento de medición?"
tipo: mc
opciones_explicitas:
  - "La mitad de la división más chica que puede distinguir el instrumento"
  - "El valor máximo que puede medir"
  - "El precio del instrumento"
respuesta: "La mitad de la división más chica que puede distinguir el instrumento"

explicacion: |
  Es el límite físico del error posible con ese instrumento, ya visto en
  `../../matematica/cifras-significativas-y-error/`.
```

### 2 — Problema: apreciación de una probeta

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

variables:
  division: uno_de([1, 2])

respuesta: division / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una probeta tiene marcas graduadas cada {division} mL. ¿Cuál es su apreciación (el margen de error mínimo de una lectura)?"

pasos:
  - "{division} ÷ 2 = {division / 2} mL"

explicacion: |
  La apreciación es la mitad de la división más chica marcada.
```

### 3 — Problema: apreciación de una bureta

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

respuesta: 0.05
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bureta tiene marcas graduadas cada 0,1 mL. ¿Cuál es su apreciación?"

pasos:
  - "0,1 ÷ 2 = 0,05 mL"

explicacion: |
  Al tener divisiones más finas que una probeta, la bureta permite una
  lectura más precisa.
```

### 4 — Qué es el menisco

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es el menisco al medir un líquido en un recipiente graduado?"
tipo: mc
opciones_explicitas:
  - "La curva que forma la superficie del líquido, por el contacto con las paredes de vidrio"
  - "La marca de graduación más alta del recipiente"
  - "El nombre del propio recipiente graduado"
respuesta: "La curva que forma la superficie del líquido, por el contacto con las paredes de vidrio"

explicacion: |
  El líquido no queda perfectamente plano: se curva cerca de las
  paredes.
```

### 5 — El menisco del agua es cóncavo

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "En el agua y la mayoría de las soluciones acuosas, el menisco es cóncavo: se curva hacia abajo en el centro."

explicacion: |
  Es porque el agua "moja" el vidrio, arrastrando el borde del líquido
  hacia arriba en el contacto con la pared.
```

### 6 — Cómo se lee correctamente el menisco

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Cómo se lee correctamente el nivel de un líquido con menisco cóncavo?"
tipo: mc
opciones_explicitas:
  - "En la parte inferior de la curva, con el ojo a la misma altura del menisco"
  - "En la parte superior de la curva, mirando desde arriba"
  - "En cualquier punto de la curva, da lo mismo"
respuesta: "En la parte inferior de la curva, con el ojo a la misma altura del menisco"

explicacion: |
  Leer desde otro punto o ángulo introduce un error evitable.
```

### 7 — Qué es el error de paralaje

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es el error de paralaje?"
tipo: mc
opciones_explicitas:
  - "El error de leer una escala desde un ángulo, en vez de mirarla de frente"
  - "El error que viene de no calibrar el instrumento"
  - "El error de usar un instrumento con divisiones muy grandes"
respuesta: "El error de leer una escala desde un ángulo, en vez de mirarla de frente"

explicacion: |
  El ángulo de visión hace que la marca parezca corrida hacia un lado.
```

### 8 — El error de paralaje es evitable, no un límite del instrumento

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la apreciación (un límite físico del instrumento), el error de paralaje se puede evitar completamente con la técnica correcta de lectura."

explicacion: |
  Basta con poner el ojo a la altura exacta de la marca que se está
  leyendo.
```

### 9 — Qué es tarar una balanza

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es tarar una balanza?"
tipo: mc
opciones_explicitas:
  - "Ponerla en cero con el recipiente vacío puesto, antes de agregar la sustancia a pesar"
  - "Calibrarla con un peso patrón certificado"
  - "Limpiarla antes de usarla"
respuesta: "Ponerla en cero con el recipiente vacío puesto, antes de agregar la sustancia a pesar"

explicacion: |
  Así el resultado final es sólo la masa de la sustancia, sin el peso
  del recipiente.
```

### 10 — Olvidar tarar produce error sistemático

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Olvidar tarar la balanza (dejando el peso del recipiente sumado) produce un error sistemático: todas las mediciones quedan corridas en la misma dirección."

explicacion: |
  Es la misma idea de `../../matematica/error-sistematico-vs-aleatorio/`
  aplicada a un caso concreto de laboratorio.
```

### 11 — Problema: corregir una medición sin tarar

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

variables:
  masa_recipiente: random(10, 50)
  masa_sustancia_real: random(5, 100)
  masa_total: masa_recipiente + masa_sustancia_real

respuesta: masa_sustancia_real
tipo: input
tolerancia_abs: 0

enunciado: "Un recipiente vacío pesa {masa_recipiente} g. Sin tarar la balanza, se agrega la sustancia y la balanza marca {masa_total} g en total. ¿Cuál es la masa real de la sustancia sola?"

pasos:
  - "{masa_total} − {masa_recipiente} = {masa_sustancia_real} g"

explicacion: |
  Si no se taró antes, hay que restar el peso del recipiente
  después.
```

### 12 — Qué es calibrar un instrumento

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es calibrar un instrumento de medición?"
tipo: mc
opciones_explicitas:
  - "Verificar que marca el valor correcto en un punto conocido, antes de usarlo"
  - "Limpiarlo después de cada uso"
  - "Repetir la misma medición varias veces"
respuesta: "Verificar que marca el valor correcto en un punto conocido, antes de usarlo"

explicacion: |
  Por ejemplo, un termómetro que debe marcar 0°C en agua con hielo.
```

### 13 — Calibrar ayuda a detectar error sistemático

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Calibrar un instrumento antes de medir permite detectar y corregir un error sistemático, en vez de descubrirlo después con resultados extraños."

explicacion: |
  Es una medida preventiva, no una corrección posterior.
```

### 14 — Qué son las réplicas

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué son las réplicas de una medición en un experimento?"
tipo: mc
opciones_explicitas:
  - "Repeticiones de la misma medición, para después promediar los resultados"
  - "Copias del informe del experimento"
  - "Instrumentos de repuesto por si uno se rompe"
respuesta: "Repeticiones de la misma medición, para después promediar los resultados"

explicacion: |
  El objetivo es reducir el efecto del error aleatorio.
```

### 15 — Promediar réplicas reduce el error aleatorio

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Promediar varias réplicas de una medición reduce el efecto del error aleatorio en el resultado."

explicacion: |
  Las variaciones impredecibles de cada lectura tienden a cancelarse en
  el promedio.
```

### 16 — Promediar réplicas NO corrige el error sistemático

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Si una balanza sin tarar mide siempre de más, repetir la medición y promediar NO corrige ese error."

explicacion: |
  Todas las réplicas están corridas en la misma dirección: promediar
  sólo funciona contra el error aleatorio, no el sistemático.
```

### 17 — Problema: promedio de tres réplicas

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

variables:
  v1: random(20, 30)
  v2: v1 + uno_de([-1, 1])
  v3: v1 + uno_de([-2, 2])

respuesta: redondear((v1 + v2 + v3) / 3, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se midió la masa de una muestra tres veces: {v1} g, {v2} g y {v3} g. ¿Cuál es el promedio de esas réplicas?"

pasos:
  - "({v1} + {v2} + {v3}) ÷ 3 = {redondear((v1 + v2 + v3) / 3, 2)} g"

explicacion: |
  El promedio suaviza las pequeñas variaciones aleatorias entre
  réplicas.
```

### 18 — Cuál instrumento es más preciso

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "Una probeta está graduada cada 1 mL, y una bureta está graduada cada 0,1 mL. ¿Cuál de las dos permite una lectura más precisa?"
tipo: mc
opciones_explicitas:
  - "La bureta, porque tiene una apreciación menor"
  - "La probeta, porque es más grande"
  - "Las dos son igual de precisas"
respuesta: "La bureta, porque tiene una apreciación menor"

explicacion: |
  Cuanto más chica la división del instrumento, menor el margen de
  error posible.
```

### 19 — Ordenar: pasos para medir correctamente un líquido en una probeta

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "ordenar"]

enunciado: "Ordená los pasos para leer correctamente el volumen de un líquido en una probeta."
tipo: ordenar
opciones_explicitas:
  - "Leer la marca en la parte inferior del menisco"
  - "Colocar la probeta sobre una superficie plana"
  - "Poner el ojo a la misma altura que la superficie del líquido, para evitar el error de paralaje"
respuesta_orden: ["Colocar la probeta sobre una superficie plana", "Poner el ojo a la misma altura que la superficie del líquido, para evitar el error de paralaje", "Leer la marca en la parte inferior del menisco"]
explicacion: |
  El orden importa: primero la posición del recipiente, después la
  altura del ojo, y recién ahí la lectura.
```

### 20 — Escenario: medición con dos errores evitables

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio"]

respuesta: falso
tipo: vf

enunciado: "Un estudiante lee una probeta mirándola desde arriba (no a la altura del menisco) y usando una balanza sin tarar. Esa medición está libre de error evitable."

explicacion: |
  Tiene dos errores evitables a la vez: paralaje (por mirar desde
  arriba) y un error sistemático (por no tarar).
```

### 21 — La apreciación no cambia según quién mida

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "La apreciación de un instrumento es una propiedad del instrumento mismo, no depende de quién lo esté usando."

explicacion: |
  Es un límite físico de la escala del instrumento; el error de
  paralaje, en cambio, sí depende de la técnica de quien mide.
```

### 22 — Por qué no alcanza con medir una sola vez en un experimento serio

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Por qué en un experimento de laboratorio serio no alcanza con medir una sola vez?"
tipo: mc
opciones_explicitas:
  - "Porque una sola medición no permite distinguir ni reducir el error aleatorio"
  - "Porque los instrumentos se rompen después de un solo uso"
  - "En realidad sí alcanza, medir varias veces es innecesario"
respuesta: "Porque una sola medición no permite distinguir ni reducir el error aleatorio"

explicacion: |
  Con réplicas se puede promediar y también ver qué tan dispersos están
  los resultados entre sí.
```

### 23 — Problema: apreciación y cifras significativas

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio", "problema"]

variables:
  division: uno_de([0.1, 1, 10])

respuesta: division / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un instrumento de laboratorio tiene divisiones cada {division} unidades. ¿Cuál es su apreciación?"

pasos:
  - "{division} ÷ 2 = {division / 2}"

explicacion: |
  La regla de la apreciación (mitad de la división más chica) es la
  misma para cualquier instrumento, no sólo para los de laboratorio.
```

### 24 — Cierre: para qué sirven estas técnicas

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven estas técnicas de medición en el laboratorio?"
tipo: mc
opciones_explicitas:
  - "Para reducir errores evitables y lograr mediciones confiables y reproducibles por otros"
  - "Sólo para que el informe se vea más prolijo"
  - "Sólo aplican a mediciones de líquidos"
respuesta: "Para reducir errores evitables y lograr mediciones confiables y reproducibles por otros"

explicacion: |
  Un buen resultado experimental depende tanto del cálculo como de la
  técnica con la que se midió.
```
