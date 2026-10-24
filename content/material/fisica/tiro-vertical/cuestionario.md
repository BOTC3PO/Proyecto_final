# Física — Tiro vertical (cuestionario, 26 preguntas VBLang)

> Tema: `F3` (puente Álgebra → Física, segunda mitad). Ver `teoria.md`
> en esta misma carpeta.

Se usa g=10 m/s² en todas las preguntas (simplificación estándar de
cálculo, ya usada en `../../matematica/despejar-formula/`).

---

### 1 — Velocidad durante la subida

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  v0: random(2, 10) * 5
  g: 10
  t: random(1, 3)

respuesta: v0 - g * t
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²). ¿Cuál es su velocidad en t={t} s?"

explicacion: |
  v(t) = {v0} − {g}×{t} = {v0 - g * t}.
```

### 2 — Velocidad: identificar cuándo empieza a bajar

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["velocidad", "verdadero_falso"]

variables:
  v0: random(4, 10) * 5
  g: 10
  t: random(1, 4)

respuesta: ((v0 - g * t) < 0)
tipo: vf

enunciado: "v₀={v0} m/s (g=10 m/s²). ¿Ya está bajando el objeto en t={t} s (o sea, v(t) es negativa)?"

explicacion: |
  v(t) = {v0}−{g}×{t} = {v0 - g * t} — negativa significa que ya pasó el
  punto más alto y está descendiendo.
```

### 3 — Tiempo de subida hasta la altura máxima

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["tiempo_subida"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²). ¿Cuánto tarda en llegar a la altura máxima?"

pasos:
  - "t_subida = v₀/g = {v0}/{g} = {t_sol}"

explicacion: |
  En la altura máxima, v=0 — se despeja el tiempo de esa condición.
```

### 4 — Altura máxima alcanzada

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["altura_maxima"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol

respuesta: (v0 ^ 2) / (2 * g)
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²), desde el nivel del piso. ¿Cuál es la altura máxima?"

pasos:
  - "y_max = v₀²/(2g) = {v0 ^ 2}/{2 * g} = {(v0 ^ 2) / (2 * g)}"

explicacion: |
  y_max = v₀²/(2g).
```

### 5 — Altura máxima: partiendo de una altura inicial

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["altura_maxima"]

variables:
  g: 10
  t_sol: random(1, 6)
  v0: g * t_sol
  y0: random(1, 20)

respuesta: y0 + (v0 ^ 2) / (2 * g)
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s desde una altura y₀={y0} m (g=10 m/s²). ¿Cuál es la altura máxima total?"

explicacion: |
  Se suma la altura inicial a lo que sube: y₀ + v₀²/(2g).
```

### 6 — Tiempo total de vuelo

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["tiempo_vuelo"]

variables:
  g: 10
  t_subida: random(1, 8)
  v0: g * t_subida

respuesta: 2 * t_subida
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²), y vuelve al mismo nivel de partida. ¿Cuánto tiempo está en el aire en total?"

pasos:
  - "Por simetría, tiempo total = 2×tiempo de subida = 2×{t_subida} = {2 * t_subida}"

explicacion: |
  El tiempo de bajada es igual al de subida, si vuelve al mismo nivel.
```

### 7 — Velocidad al volver al punto de partida

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  v0: random(10, 50)

respuesta: -v0
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s, y vuelve al mismo nivel de partida. ¿Cuál es su velocidad justo al volver?"

explicacion: |
  Misma magnitud que la inicial, pero de signo opuesto (ahora bajando):
  −{v0}.
```

### 8 — Caída libre: velocidad

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["caida_libre"]

variables:
  g: 10
  t: random(1, 8)

respuesta: -g * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo (g=10 m/s²). ¿Cuál es su velocidad en t={t} s?"

explicacion: |
  v(t) = −gt = −{g}×{t} = {-g * t} (negativa: cae, hacia abajo).
```

### 9 — Caída libre: distancia recorrida

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["caida_libre"]

variables:
  g: 10
  t: random(1, 6)

respuesta: (g * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo (g=10 m/s²). ¿Qué distancia cayó en t={t} s?"

explicacion: |
  distancia = ½gt² = {g}×{t}²/2 = {(g * t ^ 2) / 2}.
```

### 10 — Caída libre: tiempo en llegar al piso

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["caida_libre"]

variables:
  g: 10
  t_sol: random(1, 2) * 2
  y0: (g * t_sol ^ 2) / 2

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde {y0} m de altura (g=10 m/s²). ¿Cuánto tarda en llegar al piso?"

pasos:
  - "{y0} = ½×{g}×t² → t² = {2 * y0 / g} → t = {t_sol}"

explicacion: |
  Se despeja t de la fórmula de caída libre.
```

### 11 — Concepto: en el punto más alto, v=0

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el punto más alto de un tiro vertical, la velocidad vertical del objeto es 0."

explicacion: |
  Es el instante exacto en que deja de subir y empieza a bajar.
```

### 12 — Concepto: en el punto más alto, la aceleración NO es 0

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En el punto más alto, tanto la velocidad como la aceleración del objeto son 0."

explicacion: |
  Sólo la velocidad es 0 ahí — la aceleración de la gravedad sigue
  actuando todo el tiempo, incluido ese instante.
```

### 13 — Concepto: tiempo de subida vs. tiempo total

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El tiempo de subida y el tiempo total de vuelo (hasta volver al punto de partida) son siempre el mismo número."

explicacion: |
  El tiempo total es el DOBLE del tiempo de subida (por la simetría
  subida/bajada), no el mismo número.
```

### 14 — Concepto: tiro vertical es un caso de MRUV

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El tiro vertical es exactamente un MRUV, con a=−g."

explicacion: |
  Usa las mismas fórmulas de `../mruv/`, con la aceleración fija en −g.
```

### 15 — Concepto: convención de signos

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la convención 'arriba positivo', la aceleración de la gravedad se escribe con signo negativo (−g)."

explicacion: |
  La gravedad siempre tira hacia abajo, en sentido contrario a la
  convención elegida como positiva.
```

### 16 — Verificación con error: altura máxima

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol
  real: (v0 ^ 2) / (2 * g)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Se lanza un objeto con v₀={v0} m/s (g=10 m/s²). ¿Es correcto que la altura máxima sea {propuesto} m?"

explicacion: |
  La altura máxima correcta es v₀²/(2g) = {real}.
```

### 17 — Aplicar: altura en un instante durante la subida

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["posicion"]

variables:
  g: 10
  v0: random(20, 60)
  t: random(1, 3)

respuesta: v0 * t - (g * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s desde el piso (g=10 m/s²). ¿A qué altura está en t={t} s?"

pasos:
  - "y(t) = {v0}t − ½×{g}t² = {v0 * t} − {(g * t ^ 2) / 2}"

explicacion: |
  Se usa la fórmula completa de posición del MRUV, con a=−g.
```

### 18 — Concepto: velocidad de ida y vuelta, misma altura

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto en tiro vertical pasa por la misma altura dos veces (una subiendo, otra bajando), con la misma rapidez (magnitud de velocidad) en las dos, pero sentidos opuestos."

explicacion: |
  Es una consecuencia de la simetría del movimiento respecto al punto
  más alto.
```

### 19 — Concepto: no siempre vuelve al mismo nivel

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula t_total=2v₀/g sólo vale si el objeto vuelve exactamente al mismo nivel desde el que se lanzó — si cae más abajo (o más arriba), hay que resolver la ecuación cuadrática completa."

explicacion: |
  El atajo de la simetría no aplica cuando el punto de llegada es
  distinto del de partida.
```

### 20 — Aplicar: lanzamiento desde un balcón, distancia total hasta el piso

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  g: 10
  k: random(1, 5)
  v0: g * k
  subida: (v0 ^ 2) / (2 * g)
  altura_balcon: random(5, 30)

respuesta: subida + (subida + altura_balcon)
tipo: input
tolerancia_abs: 0

enunciado: "Desde un balcón de {altura_balcon} m se lanza un objeto hacia arriba con v₀={v0} m/s. Sube, y después cae hasta el piso (nivel 0). ¿Qué distancia TOTAL recorrió (subida + bajada), sumando ambos tramos?"

pasos:
  - "Sube {subida} m hasta el punto más alto"
  - "Desde ahí baja {subida}+{altura_balcon} m hasta el piso (el punto más alto queda a {subida}+{altura_balcon} m del piso)"
  - "Total: {subida} + ({subida}+{altura_balcon}) = {subida + (subida + altura_balcon)}"

explicacion: |
  La distancia TOTAL recorrida suma los dos tramos por separado — no es
  lo mismo que el desplazamiento neto (balcón hasta el piso), que sería
  sólo {altura_balcon} m.
```

### 21 — Concepto: rapidez al pasar por el punto de lanzamiento en la bajada

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  v0: random(10, 50)

respuesta: verdadero
tipo: vf

enunciado: "Si se lanza un objeto hacia arriba con v₀={v0} m/s y vuelve a pasar por el punto de lanzamiento, su rapidez en ese instante vuelve a ser {v0} m/s (aunque el sentido sea el opuesto)."

explicacion: |
  La energía se conserva en ausencia de rozamiento — la rapidez al
  volver al mismo nivel es igual a la inicial.
```

### 22 — Caída libre: verificación con error

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  g: 10
  t: random(1, 6)
  real: (g * t ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un objeto cae libremente durante {t} s (g=10 m/s²). ¿Es correcto que cayó {propuesto} m?"

explicacion: |
  La distancia correcta es ½gt² = {real}.
```

### 23 — Concepto: masa no afecta el tiempo de caída

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En ausencia de resistencia del aire, dos objetos de distinta masa soltados desde la misma altura llegan al piso al mismo tiempo."

explicacion: |
  La aceleración de la gravedad no depende de la masa del objeto — es
  el mismo g para cualquiera.
```

### 24 — Aplicar: tiempo total de vuelo en contexto

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  g: 10
  t_subida: random(1, 6)
  v0: g * t_subida

respuesta: 2 * t_subida
tipo: input
tolerancia_abs: 0

enunciado: "Una pelota pateada hacia arriba con v₀={v0} m/s vuelve al mismo nivel del piso. ¿Cuánto tiempo estuvo en el aire?"

explicacion: |
  Mismo cálculo de siempre: t_total = 2v₀/g.
```

### 25 — Concepto: comparar dos lanzamientos

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  v0_a: random(10, 30)
  v0_b: random(31, 60)

respuesta: ((v0_b ^ 2) > (v0_a ^ 2))
tipo: vf

enunciado: "Un objeto se lanza con v₀={v0_a} m/s, y otro con v₀={v0_b} m/s. ¿Alcanza mayor altura el segundo?"

explicacion: |
  La altura máxima crece con el CUADRADO de v₀ — mayor velocidad
  inicial siempre da mayor altura.
```

### 26 — Concepto: relación con la ecuación cuadrática para hallar cuándo pasa por una altura

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber en qué instante(s) un objeto en tiro vertical pasa por una altura específica (que no sea la máxima), hay que resolver una ecuación cuadrática en t, que en general tiene dos soluciones (subiendo y bajando)."

explicacion: |
  y(t)=y₀+v₀t−½gt² es cuadrática en t — la fórmula resolvente de
  `../../matematica/ecuacion-cuadratica/` da las dos soluciones (dos
  instantes distintos a la misma altura).
```
