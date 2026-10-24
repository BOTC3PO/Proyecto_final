# Dibujo técnico — Geometría constructiva: tangencias y enlaces (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Mediatriz

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La mediatriz de un segmento es la recta que..."
tipo: mc
opciones_explicitas:
  - "Pasa por su punto medio y es perpendicular a él"
  - "Une los extremos"
  - "Lo divide en tres partes"
respuesta: "Pasa por su punto medio y es perpendicular a él"

explicacion: |
  Sus puntos equidistan de los extremos.
```

### 2 — Bisectriz

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La bisectriz de un ángulo..."
tipo: mc
opciones_explicitas:
  - "Lo divide en dos ángulos iguales"
  - "Lo duplica"
  - "Lo reduce a cero"
respuesta: "Lo divide en dos ángulos iguales"

explicacion: |
  Se traza con compás.
```

### 3 — Mediatriz equidistan

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un punto sobre la mediatriz de un segmento está..."
tipo: mc
opciones_explicitas:
  - "A la misma distancia de ambos extremos"
  - "Más cerca del extremo izquierdo"
  - "Sobre el segmento"
respuesta: "A la misma distancia de ambos extremos"

explicacion: |
  Es su propiedad característica.
```

### 4 — Thales

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Para dividir un segmento en partes iguales se aplica..."
tipo: mc
opciones_explicitas:
  - "El teorema de Thales con una recta auxiliar"
  - "El teorema de Pitágoras"
  - "La ley de Ohm"
respuesta: "El teorema de Thales con una recta auxiliar"

explicacion: |
  Se usan paralelas.
```

### 5 — Hexágono

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un hexágono regular inscripto en una circunferencia, el lado es igual a..."
tipo: mc
opciones_explicitas:
  - "El radio"
  - "El diámetro"
  - "La mitad del radio"
respuesta: "El radio"

explicacion: |
  Por eso se lleva el radio seis veces sobre la circunferencia.
```

### 6 — Triángulo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un triángulo equilátero inscripto se obtiene uniendo..."
tipo: mc
opciones_explicitas:
  - "Vértices alternos del hexágono"
  - "Los lados del cuadrado"
  - "Los centros de las circunferencias"
respuesta: "Vértices alternos del hexágono"

explicacion: |
  Salta un vértice entre cada par.
```

### 7 — Cuadrado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El cuadrado inscripto se obtiene trazando..."
tipo: mc
opciones_explicitas:
  - "Dos diámetros perpendiculares y uniendo sus extremos"
  - "Un diámetro único"
  - "Una tangente"
respuesta: "Dos diámetros perpendiculares y uniendo sus extremos"

explicacion: |
  El octógono sale de bisecar sus ángulos.
```

### 8 — Ángulo interior

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  n: uno_de([5, 6, 8, 9, 10, 12])

respuesta: 180 * (n - 2) / n
tipo: input
tolerancia_abs: 0.1

enunciado: "¿Cuánto mide, en grados, cada ángulo interior de un polígono regular de {n} lados?"

pasos:
  - "180° × (n − 2) / n"

explicacion: |
  La suma de los ángulos interiores es 180°(n − 2); en un regular se reparte en partes iguales.
```

### 9 — Ángulo central

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  n: uno_de([4, 5, 6, 8, 10, 12])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0.1

enunciado: "¿Cuánto mide, en grados, el ángulo central de un polígono regular de {n} lados?"

pasos:
  - "360° / n"

explicacion: |
  Es el ángulo entre los radios a dos vértices consecutivos.
```

### 10 — Tangente

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una recta es tangente a una circunferencia si la toca en..."
tipo: mc
opciones_explicitas:
  - "Un solo punto"
  - "Dos puntos"
  - "Ningún punto"
respuesta: "Un solo punto"

explicacion: |
  Si la corta en dos es secante.
```

### 11 — Radio y tangente

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El radio que llega al punto de tangencia es..."
tipo: mc
opciones_explicitas:
  - "Perpendicular a la tangente"
  - "Paralelo a la tangente"
  - "Igual al diámetro"
respuesta: "Perpendicular a la tangente"

explicacion: |
  Es la propiedad clave de las tangencias.
```

### 12 — Circunferencias tangentes

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El punto de tangencia de dos circunferencias tangentes está..."
tipo: mc
opciones_explicitas:
  - "Sobre la recta que une sus centros"
  - "Siempre en el centro de una"
  - "Lejos de ambas"
respuesta: "Sobre la recta que une sus centros"

explicacion: |
  Segunda propiedad clave.
```

### 13 — Tangente exterior

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Para trazar la tangente desde un punto exterior a una circunferencia se construye..."
tipo: mc
opciones_explicitas:
  - "Una circunferencia que tiene por diámetro el segmento punto–centro"
  - "Un cuadrado"
  - "Una mediatriz solamente"
respuesta: "Una circunferencia que tiene por diámetro el segmento punto–centro"

explicacion: |
  Sus cruces con la dada son los puntos de tangencia.
```

### 14 — Enlace

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un enlace o empalme es..."
tipo: mc
opciones_explicitas:
  - "Un arco que une dos elementos con continuidad"
  - "Una recta quebrada"
  - "Un agujero"
respuesta: "Un arco que une dos elementos con continuidad"

explicacion: |
  Es tangente a ambos.
```

### 15 — Centro del enlace

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Para enlazar dos rectas con un arco de radio R, el centro se halla en el cruce de..."
tipo: mc
opciones_explicitas:
  - "Paralelas a cada recta a distancia R"
  - "Las bisectrices de los ejes"
  - "Las diagonales del papel"
respuesta: "Paralelas a cada recta a distancia R"

explicacion: |
  Así queda a R de ambas.
```

### 16 — Puntos de tangencia

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Los puntos de tangencia de un enlace se hallan trazando..."
tipo: mc
opciones_explicitas:
  - "Perpendiculares desde el centro a cada recta"
  - "Paralelas por el vértice"
  - "Mediatrices de los lados"
respuesta: "Perpendiculares desde el centro a cada recta"

explicacion: |
  El radio es perpendicular a la tangente.
```

### 17 — Distancia centro

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  R: random(3, 15)
  r: random(5, 20)

respuesta: R + r
tipo: input
tolerancia_abs: 0

enunciado: "Se enlaza por fuera una circunferencia de radio {r} con un arco de radio {R} tangente a ella. ¿A qué distancia están los centros, en las mismas unidades?"

pasos:
  - "En tangencia exterior, la distancia entre centros es la suma de los radios"

explicacion: |
  Si el arco queda por dentro, se resta.
```

### 18 — Continuidad

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "En un buen empalme no hay saltos ni esquinas en el punto donde el arco se une a la recta."

explicacion: |
  Por eso es tangente.
```

### 19 — Dónde

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una aplicación habitual de los enlaces es..."
tipo: mc
opciones_explicitas:
  - "Esquinas redondeadas de piezas"
  - "Medir la masa"
  - "Calcular la corriente"
respuesta: "Esquinas redondeadas de piezas"

explicacion: |
  También levas y perfiles.
```

### 20 — Curvas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "En obras viales, los enlaces entre tramos rectos se llaman..."
tipo: mc
opciones_explicitas:
  - "Curvas de enlace"
  - "Puntos de fuga"
  - "Ejes de simetría"
respuesta: "Curvas de enlace"

explicacion: |
  La misma idea geométrica.
```

### 21 — Compás

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Las construcciones geométricas se hacen con regla y ___."
respuestas_validas:
  - "compás"

explicacion: |
  Instrumentos básicos.
```

### 22 — Perpendicular por un punto

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "basico"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede trazar una perpendicular a una recta por un punto dado con regla y compás."

explicacion: |
  Es una construcción básica.
```

### 23 — Transporte

```
metadata:
  materia: "dibujo-tecnico"
  tema: "geometria_constructiva_tangencias_y_enlaces"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Transportar un ángulo con el compás sirve para..."
tipo: mc
opciones_explicitas:
  - "Copiar un ángulo en otro lugar del dibujo"
  - "Medir en grados con precisión"
  - "Dibujar una elipse"
respuesta: "Copiar un ángulo en otro lugar del dibujo"

explicacion: |
  No requiere transportador.
```
