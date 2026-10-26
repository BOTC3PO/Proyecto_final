# Matemática — Polígonos: diagonales y ángulos internos (cuestionario, 28 preguntas VBLang)

> Tema: `GO5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un polígono

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

### 2 — Completar: nombre de polígono de 5 lados

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

### 3 — Completar: nombre de polígono de 6 lados

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

### 4 — Completar: nombre de polígono de 8 lados

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

### 5 — Polígono convexo

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

### 6 — Polígono cóncavo

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

### 7 — Polígono regular

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

### 8 — Un rombo no es regular

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

### 9 — Un cuadrado sí es regular

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

### 10 — Problema: diagonales desde un vértice

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

### 11 — Un triángulo no tiene diagonales

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

### 12 — Problema: diagonales totales de un polígono

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

### 13 — Por qué se divide por 2 en la fórmula de diagonales

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

### 14 — Problema: suma de ángulos internos

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

### 15 — Por qué (n − 2) × 180°

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

### 16 — Problema: suma de ángulos internos de un cuadrilátero

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

### 17 — Problema: ángulo interior de un polígono regular

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

### 18 — Problema: hallar n dado la suma de ángulos internos

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

### 19 — Suma de ángulos exteriores siempre 360°

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

### 20 — Problema: ángulo exterior de un polígono regular

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

### 21 — Problema: ángulo exterior a partir del interior

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

### 22 — Problema: hallar n dado el ángulo exterior regular

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

### 23 — A más lados, ángulo interior más grande

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

### 24 — Completar: fórmula de diagonales

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

### 25 — Completar: fórmula de suma de ángulos internos

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

### 26 — Ordenar: pasos para el ángulo interior de un polígono regular

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

### 27 — Problema: polígono irregular, ángulo faltante

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

### 28 — Cierre: para qué sirven estas fórmulas

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
