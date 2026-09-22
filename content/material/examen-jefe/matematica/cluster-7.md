# Examen jefe — [PENDIENTE #607]

> Logro #607. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **147 preguntas totales** en 5/5 secciones.

---

## Sección: circunferencia-y-circulo (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "circulo", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre circunferencia y círculo?"
tipo: mc
opciones_explicitas:
  - "La circunferencia es la línea curva del borde; el círculo es la superficie plana que encierra"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "La circunferencia es más grande que el círculo"
respuesta: "La circunferencia es la línea curva del borde; el círculo es la superficie plana que encierra"

explicacion: |
  La circunferencia es el borde (una línea), el círculo es el borde más
  el relleno (una superficie).
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es el radio de una circunferencia?"
tipo: mc
opciones_explicitas:
  - "El segmento que une el centro con cualquier punto de la circunferencia"
  - "El segmento que une dos puntos cualesquiera de la circunferencia"
  - "La línea curva completa"
respuesta: "El segmento que une el centro con cualquier punto de la circunferencia"

explicacion: |
  Todos los radios de una misma circunferencia miden lo mismo: es la
  distancia constante al centro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "diametro", "problema"]

variables:
  r: random(2, 40)

respuesta: 2 * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene un radio de {r} cm. ¿Cuánto mide su diámetro?"

pasos:
  - "2 × {r} = {2 * r} cm"

explicacion: |
  El diámetro mide siempre el doble que el radio: d = 2r.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "diametro", "problema"]

variables:
  d: uno_de([10, 12, 14, 16, 18, 20, 24, 30, 40, 50])

respuesta: d / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene un diámetro de {d} cm. ¿Cuánto mide su radio?"

pasos:
  - "{d} ÷ 2 = {d / 2} cm"

explicacion: |
  El radio es la mitad del diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es una cuerda de una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Un segmento que une dos puntos cualesquiera de la circunferencia"
  - "Un segmento que une el centro con la circunferencia"
  - "Una recta que toca la circunferencia en un solo punto"
respuesta: "Un segmento que une dos puntos cualesquiera de la circunferencia"

explicacion: |
  A diferencia del radio, una cuerda no tiene por qué pasar por el
  centro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El diámetro es la cuerda más larga que se puede trazar en una circunferencia."

explicacion: |
  Cualquier otra cuerda que no pase por el centro es más corta.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es un arco de una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Cada una de las partes en que una cuerda divide a la circunferencia"
  - "El segmento entre el centro y un punto de la circunferencia"
  - "La superficie plana encerrada por la circunferencia"
respuesta: "Cada una de las partes en que una cuerda divide a la circunferencia"

explicacion: |
  Toda cuerda (menos ninguna) divide a la circunferencia en dos arcos.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

enunciado: "¿Qué es un sector circular?"
tipo: mc
opciones_explicitas:
  - "La porción de círculo entre dos radios y el arco que encierran, como una porción de pizza"
  - "La porción de círculo entre una cuerda y el arco que corta"
  - "Otro nombre para el diámetro"
respuesta: "La porción de círculo entre dos radios y el arco que encierran, como una porción de pizza"

explicacion: |
  Está delimitado por dos radios y el arco entre ellos.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es una recta tangente a una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Una recta que toca a la circunferencia en un único punto, sin cruzarla"
  - "Una recta que cruza a la circunferencia en dos puntos"
  - "Una recta que pasa por el centro"
respuesta: "Una recta que toca a la circunferencia en un único punto, sin cruzarla"

explicacion: |
  Roza la circunferencia en un solo punto de contacto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "tangente"]

respuesta: verdadero
tipo: vf

enunciado: "En el punto de contacto, una recta tangente a una circunferencia es siempre perpendicular al radio."

explicacion: |
  Es una propiedad constante de toda tangente: forma 90° con el radio
  trazado hasta el punto de contacto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es una recta secante a una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Una recta que cruza a la circunferencia en dos puntos"
  - "Una recta que toca a la circunferencia en un único punto"
  - "Un segmento que une el centro con un punto de la circunferencia"
respuesta: "Una recta que cruza a la circunferencia en dos puntos"

explicacion: |
  A diferencia de la tangente (un solo punto de contacto), la secante
  atraviesa la circunferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "perimetro", "problema"]

variables:
  r: random(2, 25)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la longitud (el perímetro) de una circunferencia de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  La longitud de una circunferencia es 2 × π × radio.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circulo", "area", "problema"]

variables:
  r: random(2, 25)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² = {redondear(pi * r * r, 2)} cm²"

explicacion: |
  El área del círculo es π por el radio al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "perimetro", "problema"]

variables:
  d: random(4, 50)

respuesta: redondear(pi * d, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la longitud de una circunferencia de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "π × {d} = {redondear(pi * d, 2)} cm"

explicacion: |
  Como el diámetro es el doble del radio, 2×π×r se puede escribir
  directo como π × diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "pi"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) vale siempre lo mismo, sin importar el tamaño del círculo."

explicacion: |
  π es la razón entre el perímetro y el diámetro de cualquier círculo:
  ese cociente da siempre ≈ 3,14159..., sea el círculo chico o grande.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["angulos", "vocabulario"]

enunciado: "¿Qué es un ángulo central en una circunferencia?"
tipo: mc
opciones_explicitas:
  - "El que tiene su vértice en el centro y sus lados son dos radios"
  - "El que tiene su vértice sobre la circunferencia y sus lados son dos cuerdas"
  - "El que forma una recta tangente con un radio"
respuesta: "El que tiene su vértice en el centro y sus lados son dos radios"

explicacion: |
  Su vértice está en el centro, no sobre la curva.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["angulos", "problema"]

variables:
  arco: random(10, 300)

respuesta: arco
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo central abarca un arco de {arco}°. ¿Cuánto mide ese ángulo central?"

pasos:
  - "El ángulo central mide igual que el arco que abarca: {arco}°"

explicacion: |
  Es la propiedad que define al ángulo central: su medida coincide con
  la del arco comprendido entre sus lados.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["angulos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ángulo central que abarca toda la circunferencia (una vuelta completa) mide 360°."

explicacion: |
  Toda la circunferencia es un solo arco de 360°.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["angulos", "vocabulario"]

enunciado: "¿Qué es un ángulo inscripto en una circunferencia?"
tipo: mc
opciones_explicitas:
  - "El que tiene su vértice sobre la circunferencia y sus lados son dos cuerdas"
  - "El que tiene su vértice en el centro y sus lados son dos radios"
  - "El que se forma entre dos tangentes"
respuesta: "El que tiene su vértice sobre la circunferencia y sus lados son dos cuerdas"

explicacion: |
  A diferencia del ángulo central, su vértice está sobre la curva, no en
  el centro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "problema"]

variables:
  mitad: random(10, 170)
  central: mitad * 2

respuesta: mitad
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo central mide {central}°. ¿Cuánto mide un ángulo inscripto que abarca el mismo arco?"

pasos:
  - "{central}° ÷ 2 = {mitad}°"

explicacion: |
  Todo ángulo inscripto mide la mitad del ángulo central que abarca el
  mismo arco.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "problema"]

variables:
  inscripto: random(5, 170)

respuesta: inscripto * 2
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo inscripto mide {inscripto}°. ¿Cuánto mide el ángulo central que abarca el mismo arco?"

pasos:
  - "{inscripto}° × 2 = {inscripto * 2}°"

explicacion: |
  El ángulo central es el doble del ángulo inscripto correspondiente al
  mismo arco.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un ángulo inscripto abarca una semicircunferencia (sus lados terminan en los dos extremos de un diámetro), ese ángulo mide siempre 90°."

explicacion: |
  La semicircunferencia es un arco de 180° (mitad de la vuelta
  completa), y el ángulo inscripto siempre mide la mitad de eso: 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos"]

enunciado: "Si se traza un triángulo con un lado sobre un diámetro y el tercer vértice en cualquier otro punto de la circunferencia, ¿qué tipo de triángulo se forma siempre?"
tipo: mc
opciones_explicitas:
  - "Un triángulo rectángulo, sin importar dónde esté el tercer vértice"
  - "Un triángulo equilátero"
  - "Depende de dónde esté el tercer vértice: puede no ser rectángulo"
respuesta: "Un triángulo rectángulo, sin importar dónde esté el tercer vértice"

explicacion: |
  El ángulo inscripto que abarca el diámetro (una semicircunferencia)
  mide siempre 90°, así que ese vértice siempre da un ángulo recto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "completar"]

tipo: completar
enunciado: "Completá la fórmula del perímetro de una circunferencia de radio r: Perímetro = 2 × ___ × r."
respuestas_validas:
  - "π"
  - "pi"

explicacion: |
  π es la razón constante entre el perímetro y el diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "ordenar"]

enunciado: "Ordená los pasos para hallar un ángulo inscripto, conociendo sólo el arco que abarca."
tipo: ordenar
opciones_explicitas:
  - "Se divide la medida del arco por 2 para obtener el ángulo inscripto"
  - "El ángulo central que abarca ese arco mide igual que el arco"
  - "El ángulo inscripto mide la mitad del ángulo central"
respuesta_orden: ["El ángulo central que abarca ese arco mide igual que el arco", "El ángulo inscripto mide la mitad del ángulo central", "Se divide la medida del arco por 2 para obtener el ángulo inscripto"]
explicacion: |
  Como el central es igual al arco, dividir el arco por 2 da directo el
  ángulo inscripto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer los elementos y ángulos de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Es la base para calcular medidas circulares reales y para construir diseños simétricos como los rosetones"
  - "Sólo tiene uso decorativo, sin aplicación práctica"
  - "Sólo sirve para clasificar triángulos"
respuesta: "Es la base para calcular medidas circulares reales y para construir diseños simétricos como los rosetones"

explicacion: |
  Desde calcular el material de una rueda o un caño hasta diseñar
  patrones circulares con simetría, todo parte de estos elementos.
```

## Sección: error-sistematico-vs-aleatorio (26 preguntas)

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

## Sección: perimetro-y-area (38 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["perimetro", "vocabulario"]

enunciado: "¿Qué es el perímetro de una figura?"
tipo: mc
opciones_explicitas:
  - "La longitud total de su contorno"
  - "La superficie que ocupa"
  - "La cantidad de lados que tiene"
respuesta: "La longitud total de su contorno"

explicacion: |
  Es la suma de todos los lados (o la vuelta completa, en el círculo).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["area", "vocabulario"]

enunciado: "¿Qué es el área de una figura?"
tipo: mc
opciones_explicitas:
  - "La medida de la superficie que ocupa"
  - "La longitud de su contorno"
  - "La cantidad de vértices que tiene"
respuesta: "La medida de la superficie que ocupa"

explicacion: |
  Se mide en unidades cuadradas: cm², m².
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "perimetro"]

variables:
  l: random(2, 40)

respuesta: 4 * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un cuadrado de lado {l} cm?"

pasos:
  - "4 × {l} = {4 * l} cm"

explicacion: |
  El perímetro del cuadrado es 4 veces el lado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "area"]

variables:
  l: random(2, 40)

respuesta: l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un cuadrado de lado {l} cm?"

pasos:
  - "{l} × {l} = {l * l} cm²"

explicacion: |
  El área del cuadrado es el lado al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["cuadrado", "area"]

variables:
  l: random(2, 20)
  area: l * l

respuesta: l
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene {area} cm² de área. ¿Cuánto mide su lado?"

pasos:
  - "sqrt({area}) = {sqrt(area)}"

explicacion: |
  El lado es la raíz cuadrada del área (la operación inversa de
  elevarlo al cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rectangulo", "perimetro"]

variables:
  b: random(3, 40)
  h: random(2, 30)

restricciones:
  - b != h

respuesta: 2 * (b + h)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un rectángulo de base {b} cm y altura {h} cm?"

pasos:
  - "2 × ({b} + {h}) = {2 * (b + h)} cm"

explicacion: |
  El perímetro suma los cuatro lados: dos bases y dos alturas.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rectangulo", "area"]

variables:
  b: random(3, 40)
  h: random(2, 30)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un rectángulo de base {b} cm y altura {h} cm?"

pasos:
  - "{b} × {h} = {b * h} cm²"

explicacion: |
  El área del rectángulo es base por altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "area"]

variables:
  b: random(2, 15)
  h: random(2, 15)
  area: b * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Un rectángulo tiene {area} cm² de área y {b} cm de base. ¿Cuánto mide su altura?"

pasos:
  - "{area} ÷ {b} = {area / b} cm"

explicacion: |
  La altura se despeja dividiendo el área por la base.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "perimetro"]

variables:
  a: random(3, 20)
  b: random(3, 20)
  c: random(3, 20)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Cuál es su perímetro?"

explicacion: |
  El perímetro de cualquier polígono es la suma de todos sus lados.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "area"]

variables:
  b: random(4, 40)
  h: random(2, 30)

respuesta: (b * h) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuál es el área de un triángulo de base {b} cm y altura {h} cm?"

pasos:
  - "({b} × {h}) ÷ 2 = {(b * h) / 2} cm²"

explicacion: |
  El área del triángulo es base por altura, dividido 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["triangulo", "area"]

variables:
  b: random(2, 20)
  h: random(2, 20)
  area: (b * h) / 2

respuesta: b
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo tiene {area} cm² de área y {h} cm de altura. ¿Cuánto mide su base?"

pasos:
  - "({area} × 2) ÷ {h} = {(area * 2) / h} cm"

explicacion: |
  Se despeja la base: (área × 2) ÷ altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["paralelogramo", "area"]

variables:
  b: random(4, 40)
  h: random(2, 30)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un paralelogramo de base {b} cm y altura {h} cm?"

explicacion: |
  Igual que el rectángulo: base por altura (la altura es perpendicular a
  la base, no un lado inclinado).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["paralelogramo", "perimetro"]

variables:
  b: random(4, 30)
  l: random(2, 20)

respuesta: 2 * (b + l)
tipo: input
tolerancia_abs: 0

enunciado: "Un paralelogramo tiene lados de {b} cm y {l} cm. ¿Cuál es su perímetro?"

explicacion: |
  Un paralelogramo tiene dos pares de lados iguales: el perímetro es
  2 × (lado1 + lado2).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["trapecio", "area"]

variables:
  B: random(10, 40)
  b: random(3, 9)
  h: random(2, 20)

respuesta: ((B + b) * h) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un trapecio tiene base mayor {B} cm, base menor {b} cm y altura {h} cm. ¿Cuál es su área?"

pasos:
  - "(({B} + {b}) × {h}) ÷ 2 = {((B + b) * h) / 2} cm²"

explicacion: |
  El área del trapecio es la semisuma de las bases, por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rombo", "area"]

variables:
  D: random(10, 40)
  d: random(4, 9)

respuesta: (D * d) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un rombo tiene diagonales de {D} cm y {d} cm. ¿Cuál es su área?"

pasos:
  - "({D} × {d}) ÷ 2 = {(D * d) / 2} cm²"

explicacion: |
  El área del rombo es el producto de las diagonales, dividido 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rombo", "perimetro"]

variables:
  l: random(3, 30)

respuesta: 4 * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un rombo de lado {l} cm?"

explicacion: |
  Los 4 lados del rombo miden lo mismo: perímetro = 4 × lado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "circunferencia"]

variables:
  r: random(2, 20)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la circunferencia (el perímetro) de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  La circunferencia es 2 × π × radio.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "area"]

variables:
  r: random(2, 20)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² = {redondear(pi * r * r, 2)} cm²"

explicacion: |
  El área del círculo es π por el radio al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "circunferencia"]

variables:
  d: random(4, 40)

respuesta: redondear(pi * d, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la circunferencia de un círculo de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "π × {d} = {redondear(pi * d, 2)} cm"

explicacion: |
  Como el diámetro es el doble del radio, la fórmula 2×π×r se puede
  escribir directamente como π × diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un círculo, el diámetro es siempre el doble del radio."

explicacion: |
  d = 2r: el diámetro cruza todo el círculo pasando por el centro, el
  radio es sólo la mitad de ese trayecto.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) es siempre el mismo número, sin importar el tamaño del círculo."

explicacion: |
  π es la razón entre la circunferencia y el diámetro de cualquier
  círculo: ese cociente da siempre el mismo valor (≈ 3,14159...).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El perímetro y el área de una figura son magnitudes independientes: no se puede calcular una a partir de la otra sin conocer la forma completa."

explicacion: |
  Dos figuras pueden compartir perímetro y tener áreas muy distintas (o
  viceversa).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "comparacion"]

variables:
  b1: random(2, 5)
  h1: random(15, 20)
  suma: b1 + h1
  b2: suma - random(1, 3)
  h2: suma - b2

restricciones:
  - b2 != h2
  - b2 > 0
  - h2 > 0

respuesta: (b1 * h1) != (b2 * h2)
tipo: vf

enunciado: "Un rectángulo mide {b1} cm × {h1} cm, y otro mide {b2} cm × {h2} cm. Ambos tienen el mismo perímetro. ¿Es cierto que sus áreas son distintas?"

pasos:
  - "Área 1: {b1} × {h1} = {b1 * h1} cm². Área 2: {b2} × {h2} = {b2 * h2} cm²."

explicacion: |
  Compartir perímetro no implica compartir área: la forma del rectángulo
  (más alargado o más parecido a un cuadrado) cambia cuánta superficie
  encierra.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "De todos los rectángulos con un perímetro dado, el cuadrado es el que tiene mayor área."

explicacion: |
  A medida que un rectángulo se "alarga" (manteniendo el mismo
  perímetro), su área se achica; la forma más "compacta" — el cuadrado —
  es la que más superficie encierra.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un triángulo?"
tipo: mc
opciones_explicitas:
  - "(base × altura) ÷ 2"
  - "base × altura"
  - "base + altura"
respuesta: "(base × altura) ÷ 2"

explicacion: |
  El triángulo es "medio rectángulo": su área es la mitad de base ×
  altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["trapecio", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un trapecio (bases B y b, altura h)?"
tipo: mc
opciones_explicitas:
  - "((B + b) × h) ÷ 2"
  - "B × b × h"
  - "(B + b) × 2"
respuesta: "((B + b) × h) ÷ 2"

explicacion: |
  Es la semisuma de las bases, multiplicada por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rombo", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un rombo (diagonales D y d)?"
tipo: mc
opciones_explicitas:
  - "(D × d) ÷ 2"
  - "D × d"
  - "D + d"
respuesta: "(D × d) ÷ 2"

explicacion: |
  El producto de las diagonales, dividido 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "problema"]

variables:
  b: random(10, 60)
  h: random(5, 40)

respuesta: 2 * (b + h)
tipo: input
tolerancia_abs: 0

enunciado: "Un terreno rectangular mide {b} m de largo y {h} m de ancho. ¿Cuántos metros de alambre hacen falta para cercarlo por completo?"

explicacion: |
  Cercar el contorno es calcular el perímetro.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "problema"]

variables:
  b: random(3, 8)
  h: random(2, 4)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "Una pared mide {b} m de ancho y {h} m de alto. ¿Cuántos m² hay que pintar?"

explicacion: |
  La superficie a pintar es el área de la pared.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["circulo", "problema"]

variables:
  r: random(3, 15)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un jardín circular tiene {r} m de radio. ¿Cuántos m² de césped hacen falta para cubrirlo? Redondeá a 2 decimales."

explicacion: |
  Es el área del círculo: π × r².
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "verificacion"]

variables:
  b: random(3, 20)
  h: random(2, 15)
  correcto: b * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El área de un rectángulo de {b} cm × {h} cm es {mostrado} cm²."

explicacion: |
  Se vuelve a calcular base × altura y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "completar"]

variables:
  l: random(3, 30)

tipo: completar
enunciado: "Completá: el perímetro de un cuadrado de lado {l} cm es ___ cm."
respuestas_validas:
  - 4 * l

explicacion: |
  Perímetro = 4 × lado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["triangulo", "completar"]

variables:
  b: random(4, 20)
  h: random(2, 20)

tipo: completar
enunciado: "Completá: el área de un triángulo de base {b} cm y altura {h} cm es ___ cm²."
respuestas_validas:
  - (b * h) / 2

explicacion: |
  Área = (base × altura) ÷ 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["orden"]

tipo: ordenar
enunciado: "Ordená estas figuras de menor a mayor área: cuadrado de lado 5 cm, rectángulo de 3×10 cm, triángulo de base 8 y altura 6 cm, círculo de radio 3 cm (usá π ≈ 3,14)."
opciones_explicitas:
  - "Círculo de radio 3 cm"
  - "Cuadrado de lado 5 cm"
  - "Triángulo de base 8 y altura 6 cm"
  - "Rectángulo de 3×10 cm"
respuesta_orden: ["Triángulo de base 8 y altura 6 cm", "Círculo de radio 3 cm", "Cuadrado de lado 5 cm", "Rectángulo de 3×10 cm"]
pasos:
  - "Triángulo: (8×6)÷2 = 24 cm². Círculo: 3,14×3² = 28,26 cm². Cuadrado: 5×5 = 25 cm². Rectángulo: 3×10 = 30 cm²."

explicacion: |
  Hay que calcular cada área con su propia fórmula antes de poder
  compararlas: 24 (triángulo) < 25 (cuadrado) < 28,26 (círculo) < 30
  (rectángulo).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l_cuadrado: random(8, 15)
  b_rect: random(3, 6)
  h_rect: l_cuadrado * 2 - b_rect

respuesta: "Rectángulo"
tipo: mc
opciones_explicitas:
  - "Rectángulo"
  - "Cuadrado"

enunciado: "¿Cuál tiene mayor perímetro: un cuadrado de lado {l_cuadrado} cm, o un rectángulo de {b_rect} cm × {h_rect} cm?"

pasos:
  - "Perímetro cuadrado: 4 × {l_cuadrado} = {4 * l_cuadrado} cm. Perímetro rectángulo: 2 × ({b_rect} + {h_rect}) = {2 * (b_rect + h_rect)} cm."

explicacion: |
  Se calcula el perímetro de cada uno y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del área del círculo es π por el diámetro al cuadrado."

explicacion: |
  Es π por el RADIO al cuadrado (A = π × r²), no el diámetro — un error
  común es confundir los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "problema"]

variables:
  b: random(4, 10)
  h: random(3, 8)
  lado_baldosa: 1

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "Un piso rectangular mide {b} m × {h} m, y se va a cubrir con baldosas cuadradas de {lado_baldosa} m de lado. ¿Cuántas baldosas hacen falta?"

pasos:
  - "Área del piso: {b} × {h} = {b * h} m². Cada baldosa cubre 1 m², así que hacen falta {b * h} baldosas."

explicacion: |
  Como cada baldosa cubre exactamente 1 m², la cantidad de baldosas
  coincide con el área del piso en m².
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El perímetro se mide en unidades lineales (m, cm), y el área se mide en unidades cuadradas (m², cm²)."

explicacion: |
  Es una consecuencia directa de lo que representa cada uno: una
  longitud (el contorno) y una superficie (lo que encierra ese
  contorno).
```

## Sección: poligonos (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué es un polígono?"
tipo: mc
opciones_explicitas:
  - "Una figura plana cerrada formada por segmentos de recta que no se cruzan entre sí"
  - "Cualquier figura con curvas"
  - "Una figura formada únicamente por ángulos rectos"
respuesta: "Una figura plana cerrada formada por segmentos de recta que no se cruzan entre sí"

explicacion: |
  Los lados son segmentos, se cierran sobre sí mismos y no se cruzan.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "completar"]

tipo: completar
enunciado: "Completá: un polígono de 5 lados se llama ___."
respuestas_validas:
  - "pentágono"

explicacion: |
  Penta- significa cinco.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "completar"]

tipo: completar
enunciado: "Completá: un polígono de 6 lados se llama ___."
respuestas_validas:
  - "hexágono"

explicacion: |
  Hexa- significa seis.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "completar"]

tipo: completar
enunciado: "Completá: un polígono de 8 lados se llama ___."
respuestas_validas:
  - "octógono"

explicacion: |
  Octo- significa ocho.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué es un polígono convexo?"
tipo: mc
opciones_explicitas:
  - "Uno en el que todos los ángulos internos miden menos de 180°"
  - "Uno en el que todos los lados miden lo mismo"
  - "Uno con al menos un ángulo interno mayor a 180°"
respuesta: "Uno en el que todos los ángulos internos miden menos de 180°"

explicacion: |
  Ningún vértice se "hunde" hacia adentro.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué es un polígono cóncavo?"
tipo: mc
opciones_explicitas:
  - "Uno con al menos un ángulo interno mayor a 180°"
  - "Uno con todos los lados de distinta longitud"
  - "Uno con más de 6 lados"
respuesta: "Uno con al menos un ángulo interno mayor a 180°"

explicacion: |
  Ese vértice "hundido" da la forma característica de flecha o estrella.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué se necesita para que un polígono sea regular?"
tipo: mc
opciones_explicitas:
  - "Que todos sus lados midan lo mismo Y todos sus ángulos internos midan lo mismo"
  - "Que todos sus lados midan lo mismo, sin importar los ángulos"
  - "Que sea convexo, sin importar lados ni ángulos"
respuesta: "Que todos sus lados midan lo mismo Y todos sus ángulos internos midan lo mismo"

explicacion: |
  Hacen falta las dos condiciones a la vez: lados iguales Y ángulos
  iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Un rombo (los 4 lados iguales, pero dos ángulos agudos y dos obtusos) es un polígono regular."

explicacion: |
  Tiene los lados iguales, pero no los ángulos: le falta una de las dos
  condiciones para ser regular.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrado es un polígono regular."

explicacion: |
  Sus 4 lados miden lo mismo y sus 4 ángulos miden 90° cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "diagonales", "problema"]

variables:
  n: random(5, 12)

respuesta: n - 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas diagonales salen de un solo vértice en un polígono de {n} lados?"

pasos:
  - "{n} − 3 = {n - 3}"

explicacion: |
  Se restan el propio vértice y sus dos vecinos (unidos por lados, no por
  diagonales).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "diagonales"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene 0 diagonales."

explicacion: |
  Todos sus vértices son consecutivos entre sí (no hay ningún par de
  vértices "no vecinos").
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "diagonales", "problema"]

variables:
  n: random(5, 15)

respuesta: n * (n - 3) / 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas diagonales tiene en total un polígono de {n} lados?"

pasos:
  - "{n} × ({n} − 3) ÷ 2 = {n} × {n - 3} ÷ 2 = {n * (n - 3) / 2}"

explicacion: |
  Cada vértice aporta (n − 3) diagonales, pero cada diagonal se cuenta dos
  veces (una desde cada extremo): por eso se divide por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "diagonales"]

enunciado: "En la fórmula de diagonales D = n(n − 3) / 2, ¿por qué se divide por 2?"
tipo: mc
opciones_explicitas:
  - "Porque cada diagonal se cuenta dos veces, una desde cada uno de sus dos extremos"
  - "Porque todo polígono tiene el doble de lados que de diagonales"
  - "Es una convención sin motivo geométrico"
respuesta: "Porque cada diagonal se cuenta dos veces, una desde cada uno de sus dos extremos"

explicacion: |
  n(n − 3) cuenta cada diagonal por partida doble (desde cada vértice que
  la forma).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 14)

respuesta: (n - 2) * 180
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los ángulos internos de un polígono de {n} lados?"

pasos:
  - "({n} − 2) × 180° = {n - 2} × 180° = {(n - 2) * 180}°"

explicacion: |
  Se puede dividir el polígono en (n − 2) triángulos trazando diagonales
  desde un mismo vértice, y cada triángulo suma 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos"]

enunciado: "¿Por qué la suma de ángulos internos de un polígono de n lados es (n − 2) × 180°?"
tipo: mc
opciones_explicitas:
  - "Porque el polígono se puede dividir en (n − 2) triángulos desde un mismo vértice, y cada uno suma 180°"
  - "Porque cada lado del polígono aporta 180° a la suma total"
  - "Es una fórmula empírica, sin relación con los triángulos"
respuesta: "Porque el polígono se puede dividir en (n − 2) triángulos desde un mismo vértice, y cada uno suma 180°"

explicacion: |
  Es la misma suma de 180° por triángulo, vista en `../triangulos/`,
  aplicada (n − 2) veces.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  a: random(60, 100)
  b: random(60, 100)
  c: random(60, 100)

restricciones:
  - (a + b + c) < 350

respuesta: 360 - a - b - c
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrilátero tiene tres de sus ángulos internos de {a}°, {b}° y {c}°. ¿Cuánto mide el cuarto ángulo?"

pasos:
  - "360° − {a}° − {b}° − {c}° = {360 - a - b - c}°"

explicacion: |
  Un cuadrilátero (n = 4) suma siempre 360° entre sus 4 ángulos internos.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 12)

restricciones:
  - ((n - 2) * 180) - floor(((n - 2) * 180) / n) * n == 0

respuesta: (n - 2) * 180 / n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto mide cada ángulo interior de un polígono REGULAR de {n} lados?"

pasos:
  - "(({n} − 2) × 180°) ÷ {n} = {(n - 2) * 180}° ÷ {n} = {(n - 2) * 180 / n}°"

explicacion: |
  Al ser regular, los {n} ángulos son todos iguales: se reparte la suma
  total entre los {n} vértices.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 14)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "La suma de los ángulos internos de un polígono da {(n - 2) * 180}°. ¿Cuántos lados tiene?"

pasos:
  - "{(n - 2) * 180}° ÷ 180° = {n - 2}, entonces n = {n - 2} + 2 = {n}"

explicacion: |
  Se despeja n de la fórmula (n − 2) × 180°: primero se divide por 180°, y
  después se le suma 2.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_externos"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los ángulos exteriores de cualquier polígono convexo es siempre 360°, sin importar cuántos lados tenga."

explicacion: |
  A diferencia de los ángulos internos (que dependen de n), los exteriores
  siempre suman una vuelta completa: 360°.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_externos", "problema"]

variables:
  n: uno_de([4, 5, 6, 8, 9, 10, 12, 15, 18, 20])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto mide cada ángulo exterior de un polígono REGULAR de {n} lados?"

pasos:
  - "360° ÷ {n} = {360 / n}°"

explicacion: |
  La vuelta completa (360°) se reparte por igual entre los {n} vértices.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_externos", "problema"]

variables:
  interior: random(60, 170)

respuesta: 180 - interior
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo interior de un polígono mide {interior}°. ¿Cuánto mide el ángulo exterior en ese mismo vértice?"

pasos:
  - "180° − {interior}° = {180 - interior}°"

explicacion: |
  Interior y exterior son suplementarios: suman siempre 180° (ver
  `../angulos/`).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_externos", "problema"]

variables:
  n: uno_de([4, 5, 6, 8, 9, 10, 12, 15, 18, 20])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene cada ángulo exterior de {360 / n}°. ¿Cuántos lados tiene?"

pasos:
  - "360° ÷ {360 / n}° = {n}"

explicacion: |
  Se despeja n de 360° ÷ n = ángulo exterior, dividiendo 360° por el
  ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos"]

enunciado: "A medida que un polígono regular tiene más lados, ¿qué pasa con cada ángulo interior?"
tipo: mc
opciones_explicitas:
  - "Se hace cada vez más grande, acercándose a 180° (pero sin llegar)"
  - "Se hace cada vez más chico, acercándose a 0°"
  - "Se mantiene siempre igual, sin importar n"
respuesta: "Se hace cada vez más grande, acercándose a 180° (pero sin llegar)"

explicacion: |
  Con más lados, el polígono regular se parece cada vez más a un círculo:
  cada ángulo interior se acerca a 180° (un lado casi recto).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "diagonales", "completar"]

tipo: completar
enunciado: "Completá la fórmula del número de diagonales de un polígono de n lados: D = n(n − ___) / 2."
respuestas_validas:
  - "3"

explicacion: |
  Cada vértice no se conecta consigo mismo ni con sus 2 vecinos: por eso
  el "n − 3".
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_internos", "completar"]

tipo: completar
enunciado: "Completá la fórmula de la suma de ángulos internos de un polígono de n lados: (n − ___) × 180°."
respuestas_validas:
  - "2"

explicacion: |
  Un polígono de n lados se divide en (n − 2) triángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "ordenar"]

enunciado: "Ordená los pasos para calcular el ángulo interior de un polígono regular de n lados."
tipo: ordenar
opciones_explicitas:
  - "El resultado es la medida de cada ángulo interior"
  - "Calcular la suma total de ángulos internos: (n − 2) × 180°"
  - "Dividir esa suma por n (cantidad de vértices, todos con el mismo ángulo por ser regular)"
respuesta_orden: ["Calcular la suma total de ángulos internos: (n − 2) × 180°", "Dividir esa suma por n (cantidad de vértices, todos con el mismo ángulo por ser regular)", "El resultado es la medida de cada ángulo interior"]
explicacion: |
  Primero se calcula la suma total, después se reparte por igual entre
  los n vértices (porque es regular).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 8)
  conocidos: n - 1
  suma_conocidos: conocidos * random(60, 100)

respuesta: ((n - 2) * 180) - suma_conocidos
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono de {n} lados tiene {conocidos} de sus ángulos internos sumando {suma_conocidos}° en total. ¿Cuánto mide el ángulo que falta?"

pasos:
  - "Suma total: ({n} − 2) × 180° = {(n - 2) * 180}°"
  - "{(n - 2) * 180}° − {suma_conocidos}° = {((n - 2) * 180) - suma_conocidos}°"

explicacion: |
  Se calcula la suma total esperada para {n} lados y se le resta lo que ya
  suman los ángulos conocidos.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "cierre"]

enunciado: "¿Para qué sirven las fórmulas de diagonales y ángulos internos de un polígono?"
tipo: mc
opciones_explicitas:
  - "Para calcular ángulos y diagonales de cualquier polígono sin medirlos uno por uno"
  - "Sólo sirven para triángulos"
  - "Sólo sirven para polígonos irregulares"
respuesta: "Para calcular ángulos y diagonales de cualquier polígono sin medirlos uno por uno"

explicacion: |
  Con sólo saber el número de lados, se puede calcular todo lo demás.
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
respuesta_orden: ["Listar los valores distintos que aparecen en los datos", "Contar cuántas veces aparece cada valor (frecuencia absoluta)", "Calcular la frecuencia relativa y la acumulada de cada valor"]
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
respuesta_orden: ["Calcular la media del conjunto de datos", "Calcular la distancia de cada valor a la media, y elevarla al cuadrado", "Promediar todos esos valores al cuadrado"]
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

