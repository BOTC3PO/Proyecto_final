# Matemática — Proporcionalidad como función (cuestionario, 28 preguntas VBLang)

> Tema: `A10` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Directa: hallar la constante k

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["directa"]

variables:
  k: random(2, 20)
  x: random(1, 15)
  oy: k * x

respuesta: oy / x
tipo: input
tolerancia_abs: 0

enunciado: "y es directamente proporcional a x. Si x = {x} e y = {oy}, ¿cuál es la constante de proporcionalidad k?"

explicacion: |
  k = y/x = {oy}/{x} = {oy / x}.
```

### 2 — Directa: evaluar y = kx

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["directa"]

variables:
  k: random(2, 20)
  x: random(1, 30)

respuesta: k * x
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}x (proporcionalidad directa). ¿Cuánto vale y cuando x = {x}?"

explicacion: |
  y = {k}×{x} = {k * x}.
```

### 3 — Directa: hallar x dado y

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa"]

variables:
  k: random(2, 15)
  x_sol: random(1, 20)
  oy: k * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}x. ¿Para qué valor de x es y = {oy}?"

explicacion: |
  x = y/k = {oy}/{k} = {oy / k}.
```

### 4 — Directa: problema de precio

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "problema"]

variables:
  precio_kg: random(200, 2000)
  kg1: random(1, 10)
  kg2: random(1, 20)
  costo1: precio_kg * kg1

respuesta: precio_kg * kg2
tipo: input
tolerancia_abs: 0

enunciado: "{kg1} kg de un producto cuestan {costo1}. ¿Cuánto cuestan {kg2} kg (proporcionalidad directa)?"

pasos:
  - "k = {costo1}/{kg1} = {precio_kg} (precio por kg)"
  - "{kg2} kg cuestan {precio_kg}×{kg2} = {precio_kg * kg2}"

explicacion: |
  Es la misma regla de tres directa de `../regla-de-tres-directa/`,
  mirada ahora como una función y=kx.
```

### 5 — Verificar proporcionalidad directa: caso verdadero

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "verificacion", "verdadero_falso"]

variables:
  k: random(2, 15)
  x1: random(1, 10)
  x2: random(11, 20)
  y1: k * x1
  y2: k * x2

respuesta: ((y1 / x1) == (y2 / x2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}). ¿Son directamente proporcionales (o sea, y/x da lo mismo en los dos)?"

explicacion: |
  y₁/x₁ = {y1 / x1}, y₂/x₂ = {y2 / x2} — coinciden, así que sí son
  directamente proporcionales.
```

### 6 — Verificar proporcionalidad directa: caso falso

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "verificacion", "verdadero_falso"]

variables:
  k1: random(2, 10)
  k2: random(11, 20)
  x1: random(1, 10)
  x2: random(1, 10)
  y1: k1 * x1
  y2: k2 * x2

respuesta: ((y1 / x1) == (y2 / x2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}). ¿Son directamente proporcionales?"

explicacion: |
  y₁/x₁ = {y1 / x1}, y₂/x₂ = {y2 / x2} — al no coincidir, no son
  directamente proporcionales.
```

### 7 — Inversa: hallar la constante k

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["inversa"]

variables:
  x: random(2, 15)
  oy: random(2, 15)

respuesta: x * oy
tipo: input
tolerancia_abs: 0

enunciado: "y es inversamente proporcional a x. Si x = {x} e y = {oy}, ¿cuál es la constante de proporcionalidad k?"

explicacion: |
  k = x×y = {x}×{oy} = {x * oy}.
```

### 8 — Inversa: evaluar y = k/x

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  x: random(2, 12)
  y_deseado: random(2, 15)
  k: x * y_deseado

respuesta: k / x
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}/x (proporcionalidad inversa). ¿Cuánto vale y cuando x = {x}?"

explicacion: |
  y = {k}/{x} = {k / x}.
```

### 9 — Inversa: hallar x dado y

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  x_sol: random(2, 15)
  oy: random(2, 15)
  k: x_sol * oy

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}/x. ¿Para qué valor de x es y = {oy}?"

explicacion: |
  x = k/y = {k}/{oy} = {k / oy}.
```

### 10 — Inversa: problema de obreros y días

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa", "problema"]

variables:
  dias1: random(2, 15)
  dias2: random(2, 15)
  m: random(2, 8)
  obreros1: dias2 * m
  obreros2: dias1 * m
  trabajo_total: obreros1 * dias1

respuesta: dias2
tipo: input
tolerancia_abs: 0

enunciado: "{obreros1} obreros tardan {dias1} días en hacer un trabajo. ¿Cuántos días tardarían {obreros2} obreros (al mismo ritmo cada uno)?"

pasos:
  - "k = {obreros1}×{dias1} = {trabajo_total} (trabajo total)"
  - "días = {trabajo_total}/{obreros2} = {dias2}"

explicacion: |
  Es la misma regla de tres inversa de `../regla-de-tres-inversa/`,
  mirada como función y=k/x.
```

### 11 — Verificar proporcionalidad inversa: caso verdadero

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  x1: random(2, 8)
  x2: random(2, 8)
  m: random(2, 10)
  y1: x2 * m
  y2: x1 * m
  k: x1 * y1

respuesta: ((x1 * y1) == (x2 * y2))
tipo: vf

enunciado: "Dos pares de valores son ({x1}, {y1}) y ({x2}, {y2}), ambos con y=k/x para k={k}. ¿Es cierto que x×y da lo mismo en ambos casos?"

explicacion: |
  El producto x×y siempre da k, sea cual sea el par — eso es justamente
  lo que define a la proporcionalidad inversa.
```

### 12 — Verificar proporcionalidad inversa: caso falso (en realidad es directa)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  k: random(2, 15)
  x1: random(1, 10)
  x2: random(11, 20)
  y1: k * x1
  y2: k * x2

respuesta: ((x1 * y1) == (x2 * y2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}) (que en realidad son directamente proporcionales). ¿Son también inversamente proporcionales (x×y constante)?"

explicacion: |
  x₁×y₁ = {x1 * y1}, x₂×y₂ = {x2 * y2} — no coinciden: una relación
  directamente proporcional casi nunca es, a la vez, inversamente
  proporcional.
```

### 13 — Distinguir directa de inversa: dado un patrón de datos

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Directa"
tipo: mc
opciones_explicitas:
  - "Directa"
  - "Inversa"
  - "Ninguna de las dos"

enunciado: "x: 2, 4, 6 — y: 10, 20, 30. El cociente y/x siempre da 5. ¿Es directa o inversa?"

explicacion: |
  El cociente y/x constante es la marca de la proporcionalidad directa.
```

### 14 — Distinguir directa de inversa: caso inverso

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Inversa"
tipo: mc
opciones_explicitas:
  - "Inversa"
  - "Directa"
  - "Ninguna de las dos"

enunciado: "x: 2, 4, 6 — y: 12, 6, 4. El producto x×y siempre da 24. ¿Es directa o inversa?"

explicacion: |
  El producto x×y constante es la marca de la proporcionalidad inversa.
```

### 15 — Concepto: gráfico de la proporcionalidad directa

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una relación de proporcionalidad directa siempre pasa por el origen (0,0)."

explicacion: |
  y=kx da y=0 cuando x=0 — siempre pasa por el origen.
```

### 16 — Concepto: la inversa no pasa por el origen

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El gráfico de una relación de proporcionalidad inversa pasa por el origen (0,0), igual que la directa."

explicacion: |
  La inversa (y=k/x) ni siquiera está definida en x=0 — no puede pasar
  por ese punto.
```

### 17 — Concepto: dominio de la proporcionalidad inversa

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de y = k/x son todos los reales excepto 0."

explicacion: |
  x=0 haría que el denominador se anule — mismo criterio que
  `../funcion-dominio/`.
```

### 18 — Concepto: la directa es un caso particular de lineal

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La proporcionalidad directa y=kx es el caso particular de una función lineal y=mx+b, con b=0."

explicacion: |
  k hace el papel de la pendiente m, y la ordenada al origen es 0.
```

### 19 — Concepto: la inversa NO es una función lineal

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La proporcionalidad inversa y=k/x también es una función lineal, como la directa."

explicacion: |
  No: su gráfico es una hipérbola, no una recta — x no tiene exponente 1
  en una posición lineal, está dividiendo.
```

### 20 — Concepto: cómo cambia y cuando x crece (directa)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  k: random(1, 15)

respuesta: verdadero
tipo: vf

enunciado: "En y = {k}x (con k positivo), si x aumenta, y también aumenta."

explicacion: |
  Con k positivo, la relación es directamente proporcional: los dos
  crecen juntos.
```

### 21 — Concepto: cómo cambia y cuando x crece (inversa)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  k: random(1, 15)

respuesta: falso

tipo: vf

enunciado: "En y = {k}/x (con k positivo), si x aumenta, y también aumenta."

explicacion: |
  Al revés: si x aumenta, y DISMINUYE — el producto x×y se mantiene
  constante.
```

### 22 — Aplicar: velocidad y tiempo (inversa)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["inversa", "problema"]

variables:
  tiempo1: random(1, 10)
  tiempo2: random(1, 10)
  m: random(5, 20)
  velocidad1: tiempo2 * m
  velocidad2: tiempo1 * m
  distancia: velocidad1 * tiempo1

respuesta: tiempo2
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje a {velocidad1} km/h tarda {tiempo1} horas. ¿Cuánto tardaría el mismo viaje a {velocidad2} km/h?"

pasos:
  - "La distancia (constante) es {velocidad1}×{tiempo1} = {distancia} km"
  - "tiempo = {distancia}/{velocidad2} = {tiempo2}"

explicacion: |
  A distancia fija, velocidad y tiempo son inversamente proporcionales:
  cuanto más rápido, menos tiempo.
```

### 23 — Verificación con error: constante directa

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(2, 20)
  x: random(1, 15)
  oy: k * x
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "y es directamente proporcional a x, con x = {x} e y = {oy}. ¿Es correcto que la constante k sea {propuesto}?"

explicacion: |
  k = y/x = {oy / x}.
```

### 24 — Verificación con error: constante inversa

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(2, 15)
  oy: random(2, 15)
  real: x * oy
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "y es inversamente proporcional a x, con x = {x} e y = {oy}. ¿Es correcto que la constante k sea {propuesto}?"

explicacion: |
  k = x×y = {real}.
```

### 25 — Concepto: k negativo en la directa

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["concepto", "signos", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una proporcionalidad directa también puede tener constante k negativa (y = −3x, por ejemplo) — en ese caso, cuando x crece, y decrece."

explicacion: |
  El signo de k determina si es creciente o decreciente, pero sigue
  siendo "directamente proporcional" mientras el cociente y/x sea
  constante.
```

### 26 — Aplicar: escalar un dibujo (directa)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "problema"]

variables:
  escala: random(2, 8)
  medida_real: random(5, 50)

respuesta: medida_real * escala
tipo: input
tolerancia_abs: 0

enunciado: "En un plano, cada medida real se multiplica por {escala} para dibujarla a escala. Si una pared mide {medida_real} en la realidad, ¿cuánto mide en el plano?"

explicacion: |
  Es una proporcionalidad directa simple, con k={escala}.
```

### 27 — Concepto: reparto proporcional

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Repartir un monto en partes directamente proporcionales a distintos valores (por ejemplo, según horas trabajadas) usa la misma idea de y=kx, con una k común para todos."

explicacion: |
  Cada parte se calcula como k×(su valor correspondiente), con el mismo
  k para todos los repartos.
```

### 28 — Distinguir directa de inversa: problema en contexto

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Inversa (más grifos, menos tiempo)"
tipo: mc
opciones_explicitas:
  - "Inversa (más grifos, menos tiempo)"
  - "Directa (más grifos, más tiempo)"

enunciado: "Llenar un tanque con más grifos abiertos a la vez tarda menos tiempo. ¿Es una relación directa o inversa entre cantidad de grifos y tiempo?"

explicacion: |
  A más grifos, menos tiempo — el producto (grifos×tiempo) es lo que se
  mantiene constante: proporcionalidad inversa.
```
