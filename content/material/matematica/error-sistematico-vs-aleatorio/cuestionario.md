# Matemática — Error sistemático vs. aleatorio (cuestionario, 26 preguntas VBLang)

> Tema: `M5B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un error sistemático

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "vocabulario"]

enunciado: "¿Qué es un error sistemático?"
tipo: mc
opciones_explicitas:
  - "Un error que se repite siempre en la misma dirección, por una causa identificable"
  - "Un error que varía de forma impredecible en cada medición"
  - "Un error que sólo ocurre una vez"
respuesta: "Un error que se repite siempre en la misma dirección, por una causa identificable"

explicacion: |
  Por ejemplo, un instrumento mal calibrado que siempre mide de más (o de
  menos) por la misma cantidad.
```

### 2 — Qué es un error aleatorio

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_aleatorio", "vocabulario"]

enunciado: "¿Qué es un error aleatorio?"
tipo: mc
opciones_explicitas:
  - "Un error que varía de forma impredecible en cada medición, sin un patrón fijo"
  - "Un error que siempre suma la misma cantidad"
  - "Un error causado únicamente por un instrumento mal calibrado"
respuesta: "Un error que varía de forma impredecible en cada medición, sin un patrón fijo"

explicacion: |
  A veces da de más, a veces de menos, por factores que no se pueden
  controlar del todo.
```

### 3 — El error sistemático siempre va en la misma dirección

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error sistemático se repite siempre en la misma dirección (siempre de más, o siempre de menos)."

explicacion: |
  Es justo lo que lo distingue del error aleatorio.
```

### 4 — El error aleatorio no tiene una dirección fija

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_aleatorio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error aleatorio no tiene una dirección fija: en distintas mediciones puede dar de más o de menos."

explicacion: |
  Por eso se puede reducir promediando varias mediciones.
```

### 5 — Cómo se corrige un error sistemático

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "correccion"]

enunciado: "¿Cómo se corrige un error sistemático?"
tipo: mc
opciones_explicitas:
  - "Identificando la causa y recalibrando el instrumento o el método"
  - "Repitiendo la medición muchas veces y promediando"
  - "No se puede corregir de ninguna forma"
respuesta: "Identificando la causa y recalibrando el instrumento o el método"

explicacion: |
  A diferencia del error aleatorio, promediar NO ayuda contra el error
  sistemático.
```

### 6 — Cómo se reduce un error aleatorio

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "correccion"]

enunciado: "¿Cómo se reduce el efecto de un error aleatorio?"
tipo: mc
opciones_explicitas:
  - "Repitiendo la medición varias veces y promediando los resultados"
  - "Usando un instrumento distinto una sola vez"
  - "Sumando siempre la misma corrección"
respuesta: "Repitiendo la medición varias veces y promediando los resultados"

explicacion: |
  Al promediar, los errores que dan de más tienden a cancelarse con los
  que dan de menos.
```

### 7 — Promediar NO corrige el error sistemático

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "correccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si una balanza mal calibrada siempre pesa 2 g de más, promediar muchas mediciones hechas con ESA balanza NO va a corregir el error."

explicacion: |
  Todas las mediciones están corridas en la misma dirección, así que el
  promedio también queda corrido esos mismos 2 g.
```

### 8 — Ejemplo: balanza descalibrada

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "problema"]

enunciado: "Una balanza está mal calibrada y siempre pesa 2 gramos de más, sin importar qué se pese. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error sistemático"
  - "Error aleatorio"
respuesta: "Error sistemático"

explicacion: |
  Se repite siempre en la misma dirección y magnitud: es la firma del
  error sistemático.
```

### 9 — Ejemplo: viento en una carrera cronometrada

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "problema"]

enunciado: "Al cronometrar una carrera a mano, cada persona que toma el tiempo aprieta el botón con una fracción de segundo de diferencia, a veces antes y a veces después del momento exacto. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error aleatorio"
  - "Error sistemático"
respuesta: "Error aleatorio"

explicacion: |
  No tiene una dirección fija: varía impredeciblemente de una persona (y
  de una vez) a otra.
```

### 10 — Qué es la exactitud

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["exactitud", "vocabulario"]

enunciado: "¿Qué es la exactitud de una medición?"
tipo: mc
opciones_explicitas:
  - "Qué tan cerca está del valor real"
  - "Qué tan cerca están varias mediciones entre sí"
  - "Cuántas cifras decimales tiene"
respuesta: "Qué tan cerca está del valor real"

explicacion: |
  Depende sobre todo del error sistemático.
```

### 11 — Qué es la precisión

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["precision", "vocabulario"]

enunciado: "¿Qué es la precisión de un conjunto de mediciones?"
tipo: mc
opciones_explicitas:
  - "Qué tan cerca están las mediciones entre sí, aunque no necesariamente del valor real"
  - "Qué tan cerca está del valor real"
  - "La cantidad de mediciones que se hicieron"
respuesta: "Qué tan cerca están las mediciones entre sí, aunque no necesariamente del valor real"

explicacion: |
  Depende sobre todo del error aleatorio.
```

### 12 — Se puede ser preciso sin ser exacto

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["exactitud", "precision", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible que varias mediciones estén muy cerca entre sí (precisas) pero todas alejadas del valor real (poco exactas), si hay un error sistemático."

explicacion: |
  Como tiros al blanco muy agrupados, pero lejos del centro: precisos,
  no exactos.
```

### 13 — Se puede ser exacto sin ser preciso

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["exactitud", "precision", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible que varias mediciones estén muy dispersas entre sí (poco precisas), pero que su promedio dé cerca del valor real (exacto)."

explicacion: |
  Como tiros dispersos por todo el blanco, pero centrados en promedio:
  exactos en promedio, no precisos individualmente.
```

### 14 — Problema: promediar mediciones repetidas

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "problema"]

variables:
  base: random(20, 100)
  m1: base + random(-2, 2)
  m2: base + random(-2, 2)
  m3: base + random(-2, 2)
  m4: base + random(-2, 2)
  m5: base + random(-2, 2)

respuesta: redondear(promedio([m1, m2, m3, m4, m5]), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se midió el mismo objeto 5 veces, con pequeñas variaciones aleatorias: {m1} cm, {m2} cm, {m3} cm, {m4} cm y {m5} cm. ¿Cuál es el promedio de esas mediciones? Redondeá a 2 decimales."

pasos:
  - "({m1} + {m2} + {m3} + {m4} + {m5}) ÷ 5 = {redondear(promedio([m1, m2, m3, m4, m5]), 2)} cm"

explicacion: |
  Promediar mediciones repetidas es la forma estándar de reducir el
  efecto del error aleatorio.
```

### 15 — Corregir un error sistemático conocido

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "problema"]

variables:
  offset: random(1, 5)
  medido: random(50, 200)

respuesta: medido - offset
tipo: input
tolerancia_abs: 0.01

enunciado: "Una balanza está descalibrada y siempre pesa {offset} g de más. Si pesa un objeto y marca {medido} g, ¿cuál es el peso corregido (el peso real estimado)?"

pasos:
  - "{medido} − {offset} = {medido - offset} g"

explicacion: |
  Conociendo la magnitud del error sistemático, se le resta a cada
  medición para corregirla.
```

### 16 — El error sistemático afecta más a la exactitud

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "exactitud"]

respuesta: verdadero
tipo: vf

enunciado: "El error sistemático afecta principalmente a la exactitud (qué tan cerca del valor real), no tanto a la precisión (qué tan agrupadas están las mediciones entre sí)."

explicacion: |
  Un instrumento con error sistemático puede dar mediciones MUY parecidas
  entre sí (precisas) pero todas corridas del valor real (no exactas).
```

### 17 — El error aleatorio afecta más a la precisión

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_aleatorio", "precision"]

respuesta: verdadero
tipo: vf

enunciado: "El error aleatorio afecta principalmente a la precisión (qué tan agrupadas están las mediciones), no tanto a la exactitud del promedio."

explicacion: |
  Aunque las mediciones individuales estén dispersas, su promedio puede
  seguir siendo exacto (cercano al valor real).
```

### 18 — Distinguir el tipo de error: termómetro adelantado

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "problema"]

enunciado: "Un termómetro está mal calibrado y siempre marca 1,5 °C más de lo real, en cualquier temperatura que mida. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error sistemático"
  - "Error aleatorio"
respuesta: "Error sistemático"

explicacion: |
  Dirección y magnitud constantes: sistemático.
```

### 19 — Distinguir el tipo de error: lectura visual de una regla

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "problema"]

enunciado: "Al leer una regla, distintas personas ubican el ojo en un ángulo levemente distinto cada vez, y a veces leen un poquito de más y a veces de menos. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error aleatorio"
  - "Error sistemático"
respuesta: "Error aleatorio"

explicacion: |
  No tiene una dirección fija: varía impredeciblemente entre lecturas.
```

### 20 — Aumentar la cantidad de mediciones NO elimina el sesgo

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Hacer muchísimas mediciones (miles) con un instrumento mal calibrado eventualmente hace que el promedio se acerque al valor real."

explicacion: |
  Por más mediciones que se hagan, si TODAS están sesgadas en la misma
  dirección, el promedio queda igual de sesgado — la cantidad de
  mediciones no cambia eso.
```

### 21 — Completar: qué reduce el error aleatorio

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_aleatorio", "completar"]

tipo: completar
enunciado: "Completá: repetir una medición varias veces y ___ los resultados reduce el efecto del error aleatorio."
respuestas_validas:
  - "promediar"

explicacion: |
  Los errores que dan de más y de menos tienden a cancelarse al
  promediar.
```

### 22 — Completar: qué corrige el error sistemático

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "completar"]

tipo: completar
enunciado: "Completá: para corregir un error sistemático, hay que identificar su causa y ___ el instrumento o el método."
respuestas_validas:
  - "recalibrar"

explicacion: |
  No alcanza con promediar; hay que arreglar la causa del sesgo.
```

### 23 — Ordenar el proceso frente a un error sistemático sospechado

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para detectar y corregir un error sistemático."
opciones_explicitas:
  - "Recalibrar el instrumento o corregir el método"
  - "Comparar los resultados con un valor de referencia confiable"
  - "Notar que las mediciones se desvían siempre en la misma dirección"
  - "Verificar que las mediciones posteriores ya no tengan ese sesgo"
respuesta_orden: ["Notar que las mediciones se desvían siempre en la misma dirección", "Comparar los resultados con un valor de referencia confiable", "Recalibrar el instrumento o corregir el método", "Verificar que las mediciones posteriores ya no tengan ese sesgo"]
explicacion: |
  Primero se detecta el patrón, después se confirma contra una
  referencia, se corrige la causa, y se verifica que la corrección haya
  funcionado.
```

### 24 — Un mismo experimento puede tener ambos tipos de error

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "error_aleatorio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo experimento puede tener error sistemático Y error aleatorio a la vez, y hace falta tratar cada uno con su propia estrategia."

explicacion: |
  Por ejemplo: un instrumento mal calibrado (sistemático) leído por
  varias personas distintas (aleatorio en la lectura).
```

### 25 — Elegir la estrategia correcta según el tipo de error

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "error_aleatorio", "problema"]

enunciado: "Si sospechás que hay un error ALEATORIO (no sistemático) en tus mediciones, ¿qué conviene hacer?"
tipo: mc
opciones_explicitas:
  - "Repetir la medición varias veces y promediar"
  - "Buscar qué parte del instrumento está mal calibrada"
  - "Descartar todas las mediciones sin analizarlas"
respuesta: "Repetir la medición varias veces y promediar"

explicacion: |
  Es la estrategia correcta específicamente contra el error aleatorio.
```

### 26 — Cierre: dos errores, dos soluciones

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "error_aleatorio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Identificar si un error es sistemático o aleatorio es clave, porque cada uno se soluciona con una estrategia distinta: recalibrar en un caso, promediar en el otro."

explicacion: |
  Es la idea central del módulo: no hay una única receta contra el
  error, hay que diagnosticar primero de qué tipo es.
```
