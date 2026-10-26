# Matemática — Rectas paralelas y perpendiculares (cuestionario, 25 preguntas VBLang)

> Tema: `GA6`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Criterio de rectas paralelas

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["paralelas", "vocabulario"]

enunciado: "¿Cuándo dos rectas son paralelas?"
tipo: mc
opciones_explicitas:
  - "Cuando tienen exactamente la misma pendiente"
  - "Cuando sus pendientes multiplicadas dan -1"
  - "Cuando tienen la misma ordenada al origen"
respuesta: "Cuando tienen exactamente la misma pendiente"

explicacion: |
  m₁ = m₂ es el criterio ya visto en `../funcion-lineal-pendiente/`.
```

### 2 — Criterio de rectas perpendiculares

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares", "vocabulario"]

enunciado: "¿Cuándo dos rectas son perpendiculares?"
tipo: mc
opciones_explicitas:
  - "Cuando el producto de sus pendientes es -1"
  - "Cuando tienen exactamente la misma pendiente"
  - "Cuando ambas pasan por el origen"
respuesta: "Cuando el producto de sus pendientes es -1"

explicacion: |
  m₁ × m₂ = −1: cada pendiente es la recíproca y opuesta de la otra.
```

### 3 — Problema: pendiente perpendicular a una pendiente entera

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 3, 4, 5])

respuesta: -1 / m
tipo: input
tolerancia_abs: 0.01

enunciado: "Una recta tiene pendiente {m}. ¿Cuál es la pendiente de cualquier recta perpendicular a ella?"

pasos:
  - "-1 ÷ {m} = {-1 / m}"

explicacion: |
  Se invierte la pendiente y se cambia el signo.
```

### 4 — Problema: pendiente perpendicular a una pendiente fraccionaria

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  a: uno_de([2, 3, 4])
  b: uno_de([5, 7])

respuesta: 0 - (b / a)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una recta tiene pendiente {a}/{b}. ¿Cuál es la pendiente de cualquier recta perpendicular a ella?"

pasos:
  - "Se invierte la fracción y se cambia el signo: -{b}/{a} = {0 - (b / a)}"

explicacion: |
  ({a}/{b}) × (-{b}/{a}) = -1, verificando el criterio de
  perpendicularidad.
```

### 5 — Problema: recta paralela a otra, por un punto dado

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, -2])
  x0: random(1, 5)
  y0: random(1, 20)

respuesta: y0 - (m * x0)
tipo: input
tolerancia_abs: 0

enunciado: "Se busca la recta paralela a y = {m}x + 7, que además pasa por el punto ({x0}, {y0}). ¿Cuál es la ordenada al origen de esa nueva recta?"

pasos:
  - "Misma pendiente: {m}"
  - "{y0} = {m} × {x0} + b, entonces b = {y0} − {m}×{x0} = {y0 - (m * x0)}"

explicacion: |
  Se usa la misma pendiente de la recta original, y se despeja b con el
  punto dado.
```

### 6 — Problema: recta perpendicular a otra, por un punto dado

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 4, 5])
  m_perp: -1 / m
  x0: uno_de([2, 4, 6, 8])
  y0: random(1, 10)

respuesta: redondear(y0 - (m_perp * x0), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Se busca la recta perpendicular a y = {m}x + 3, que además pasa por el punto ({x0}, {y0}). Su pendiente es {m_perp}. ¿Cuál es la ordenada al origen de esa nueva recta?"

pasos:
  - "{y0} = {m_perp} × {x0} + b, entonces b = {y0} − ({m_perp}×{x0}) = {redondear(y0 - (m_perp * x0), 2)}"

explicacion: |
  Se usa la pendiente perpendicular ya calculada, y se despeja b con el
  punto dado.
```

### 7 — Rectas coincidentes no son dos rectas paralelas distintas

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas"]

respuesta: verdadero
tipo: vf

enunciado: "Dos rectas con la misma pendiente Y la misma ordenada al origen son, en realidad, la misma recta (coincidentes), no dos rectas paralelas distintas."

explicacion: |
  Ser paralelas exige además que b₁ sea distinto de b₂.
```

### 8 — Qué hace falta para que dos rectas sean coincidentes

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "vocabulario"]

enunciado: "¿Qué condición hace que dos rectas con la misma pendiente sean coincidentes (la misma recta) en vez de paralelas distintas?"
tipo: mc
opciones_explicitas:
  - "Que además tengan la misma ordenada al origen"
  - "Que además tengan pendientes recíprocas"
  - "No existe tal condición: siempre son paralelas distintas"
respuesta: "Que además tengan la misma ordenada al origen"

explicacion: |
  Mismo m y mismo b: es literalmente la misma ecuación escrita dos
  veces.
```

### 9 — Problema: ¿son paralelas estas dos rectas?

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, 4, 5])
  b1: uno_de([1, 2, 3])
  b2: b1 + random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "¿Son paralelas las rectas y = {m}x + {b1} e y = {m}x + {b2}?"

explicacion: |
  Tienen la misma pendiente ({m}) y distinta ordenada al origen: son
  paralelas, sin llegar a tocarse nunca.
```

### 10 — Problema: ¿son perpendiculares estas dos rectas?

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "problema"]

variables:
  m1: uno_de([2, 3, 4])
  m2: 0 - (1 / m1)

respuesta: verdadero
tipo: vf

enunciado: "¿Son perpendiculares las rectas con pendiente {m1} y con pendiente {m2}?"

explicacion: |
  {m1} × ({m2}) = -1: cumplen el criterio de perpendicularidad.
```

### 11 — Aplicación: verificar un rectángulo con pendientes

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "perpendiculares", "vocabulario"]

enunciado: "¿Qué hay que verificar, usando pendientes, para confirmar que un cuadrilátero dado por sus 4 vértices es un rectángulo?"
tipo: mc
opciones_explicitas:
  - "Que los lados opuestos sean paralelos entre sí, y los lados consecutivos sean perpendiculares"
  - "Que las cuatro pendientes sean exactamente iguales"
  - "Que ningún lado tenga pendiente 0"
respuesta: "Que los lados opuestos sean paralelos entre sí, y los lados consecutivos sean perpendiculares"

explicacion: |
  Sin medir ningún ángulo con transportador: sólo comparando pendientes.
```

### 12 — Problema: lados opuestos de un cuadrilátero

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, -2])

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrilátero tiene un lado con pendiente {m}, y el lado opuesto también tiene pendiente {m}. ¿Es compatible eso con que el cuadrilátero sea un rectángulo (en lo que respecta a ese par de lados)?"

explicacion: |
  Los lados opuestos de un rectángulo tienen que ser paralelos: misma
  pendiente cumple esa condición.
```

### 13 — La tangente a una circunferencia es perpendicular al radio

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta tangente a una circunferencia es siempre perpendicular al radio, en el punto de contacto."

explicacion: |
  Ya se había mencionado en `../circunferencia-y-circulo/`; ahora se
  puede verificar numéricamente con pendientes.
```

### 14 — Problema: pendiente de la tangente dado el radio

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m_radio: uno_de([2, 3, 4, 5])

respuesta: -1 / m_radio
tipo: input
tolerancia_abs: 0.01

enunciado: "El radio de una circunferencia, en el punto de contacto con una tangente, tiene pendiente {m_radio}. ¿Cuál es la pendiente de la recta tangente en ese punto?"

pasos:
  - "-1 ÷ {m_radio} = {-1 / m_radio}"

explicacion: |
  La tangente es siempre perpendicular al radio en ese punto.
```

### 15 — Ordenar: pasos para hallar la recta paralela por un punto

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "ordenar"]

enunciado: "Ordená los pasos para hallar la ecuación de la recta paralela a otra, que además pasa por un punto dado."
tipo: ordenar
opciones_explicitas:
  - "Despejar la nueva ordenada al origen"
  - "Usar la misma pendiente que la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b"
respuesta_orden: ["Usar la misma pendiente que la recta original", "Reemplazar las coordenadas del punto dado en y = mx + b", "Despejar la nueva ordenada al origen"]
explicacion: |
  La pendiente no cambia; sólo se recalcula b para que la recta pase por
  el punto pedido.
```

### 16 — Ordenar: pasos para hallar la recta perpendicular por un punto

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "ordenar"]

enunciado: "Ordená los pasos para hallar la ecuación de la recta perpendicular a otra, que además pasa por un punto dado."
tipo: ordenar
opciones_explicitas:
  - "Despejar la nueva ordenada al origen"
  - "Calcular la pendiente recíproca y opuesta de la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b, con esa nueva pendiente"
respuesta_orden: ["Calcular la pendiente recíproca y opuesta de la recta original", "Reemplazar las coordenadas del punto dado en y = mx + b, con esa nueva pendiente", "Despejar la nueva ordenada al origen"]
explicacion: |
  Primero cambia la pendiente (recíproca y opuesta); recién después se
  ajusta b.
```

### 17 — Dos rectas verticales son siempre paralelas entre sí

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas"]

respuesta: verdadero
tipo: vf

enunciado: "Dos rectas verticales distintas (x = k₁ y x = k₂, con k₁ ≠ k₂) son siempre paralelas entre sí."

explicacion: |
  Aunque no tengan pendiente definida en la fórmula y=mx+b, nunca se
  cruzan: son paralelas.
```

### 18 — Una recta horizontal y una vertical son perpendiculares

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta horizontal (y = b) y una recta vertical (x = k) son siempre perpendiculares entre sí."

explicacion: |
  Se cruzan formando exactamente 90°, aunque el criterio m₁×m₂=-1 no se
  pueda aplicar literalmente (la vertical no tiene pendiente definida).
```

### 19 — Problema: ordenada al origen de la recta paralela (caso simple)

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, 4])
  x0: uno_de([1, 2, 3])
  producto: m * x0
  b: random(1, 10)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "La recta paralela a y = {m}x + 5 que pasa por ({x0}, {producto + b}) tiene ordenada al origen b. ¿Cuánto vale b?"

pasos:
  - "{producto + b} = {m} × {x0} + b, entonces b = {producto + b} − {producto} = {b}"

explicacion: |
  Se despeja b restando m×x₀ al valor de y del punto dado.
```

### 20 — Si m₁ × m₂ = -1, las rectas son perpendiculares

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto de las pendientes de dos rectas da exactamente -1, esas rectas son perpendiculares."

explicacion: |
  Es el criterio algebraico completo de perpendicularidad.
```

### 21 — La perpendicular de pendiente 2 es -1/2

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "La pendiente recíproca y opuesta de m = 2 es -1/2."

explicacion: |
  2 × (-1/2) = -1, cumple el criterio.
```

### 22 — No alcanza con que las pendientes tengan signo opuesto

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares"]

respuesta: falso
tipo: vf

enunciado: "Dos rectas con pendientes 2 y -2 (mismo valor, signo opuesto) son perpendiculares entre sí."

explicacion: |
  2 × (-2) = -4, no -1: no cumplen el criterio. Tener signos opuestos no
  alcanza, hace falta además que sean recíprocas.
```

### 23 — Problema: pendiente de un lado perpendicular en un cuadrilátero

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 4, 5])

respuesta: -1 / m
tipo: input
tolerancia_abs: 0.01

enunciado: "Un lado de un cuadrilátero tiene pendiente {m}. Para que el cuadrilátero sea un rectángulo, ¿qué pendiente tiene que tener el lado consecutivo (adyacente)?"

pasos:
  - "-1 ÷ {m} = {-1 / m}"

explicacion: |
  Los lados consecutivos de un rectángulo son perpendiculares entre sí.
```

### 24 — Verificar con pendientes reemplaza medir con transportador

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Verificar paralelismo o perpendicularidad con pendientes permite confirmar propiedades geométricas sin necesidad de medir ángulos con transportador."

explicacion: |
  Es la ventaja de trabajar con coordenadas y ecuaciones en vez de con
  el dibujo físico.
```

### 25 — Cierre: para qué sirve este módulo

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve aplicar el criterio de paralelismo y perpendicularidad a problemas geométricos?"
tipo: mc
opciones_explicitas:
  - "Para confirmar propiedades de figuras dadas por coordenadas: si un cuadrilátero es rectángulo, si dos calles son paralelas, si una estructura es realmente perpendicular"
  - "Sólo sirve para practicar el cálculo de pendientes en abstracto"
  - "Sólo aplica a rectas que pasan por el origen"
respuesta: "Para confirmar propiedades de figuras dadas por coordenadas: si un cuadrilátero es rectángulo, si dos calles son paralelas, si una estructura es realmente perpendicular"

explicacion: |
  Es la aplicación geométrica del criterio algebraico ya conocido.
```
