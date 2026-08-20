# Matemática — Circunferencia y círculo: elementos y ángulos (cuestionario, 26 preguntas VBLang)

> Tema: `GO6`. Ver `teoria.md` en esta misma carpeta. Usa la constante `pi`.

---

### 1 — Circunferencia vs. círculo

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

### 2 — Qué es el radio

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

### 3 — Problema: diámetro a partir del radio

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

### 4 — Problema: radio a partir del diámetro

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

### 5 — Qué es una cuerda

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

### 6 — El diámetro es la cuerda más larga

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

### 7 — Qué es un arco

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

### 8 — Qué es un sector circular

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

### 9 — Qué es una tangente

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

### 10 — Tangente y radio son perpendiculares

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

### 11 — Qué es una secante

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

### 12 — Problema: perímetro (circunferencia) dado el radio

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

### 13 — Problema: área del círculo dado el radio

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

### 14 — Problema: perímetro dado el diámetro

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

### 15 — π es una constante

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

### 16 — Qué es un ángulo central

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

### 17 — Ángulo central mide igual que su arco

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

### 18 — Una vuelta completa es 360°

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

### 19 — Qué es un ángulo inscripto

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

### 20 — Problema: ángulo inscripto a partir del central

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

### 21 — Problema: central a partir del inscripto

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

### 22 — Ángulo inscripto en una semicircunferencia

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

### 23 — Consecuencia: triángulo rectángulo en la semicircunferencia

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

### 24 — Completar: fórmula del perímetro de la circunferencia

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

### 25 — Ordenar: pasos para hallar un ángulo inscripto a partir del arco

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

### 26 — Cierre: para qué sirven estos elementos

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
