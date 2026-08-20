# Física — Tiro oblicuo: proyectiles (cuestionario, 26 preguntas VBLang)

> Tema: `F10`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un tiro oblicuo

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo", "vocabulario"]

enunciado: "¿Qué es un tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un lanzamiento con velocidad inicial que forma un ángulo con la horizontal (ni 0° ni 90°)"
  - "Un lanzamiento estrictamente vertical"
  - "Un lanzamiento estrictamente horizontal desde el piso"
respuesta: "Un lanzamiento con velocidad inicial que forma un ángulo con la horizontal (ni 0° ni 90°)"

explicacion: |
  Combina avance horizontal (MRU) con subida y bajada (MRUV), a
  diferencia del tiro vertical o el MRU puro.
```

### 2 — Completar: componente horizontal de v₀

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: la componente horizontal de la velocidad inicial es v₀ₓ = v₀ × ___(θ)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  Es la parte de v₀ que apunta en la dirección de avance.
```

### 3 — Completar: componente vertical de v₀

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: la componente vertical de la velocidad inicial es v₀ᵥ = v₀ × ___(θ)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  Es la parte de v₀ que hace que el objeto suba antes de empezar a caer.
```

### 4 — La velocidad horizontal es constante

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Ignorando la resistencia del aire, la componente horizontal de la velocidad se mantiene constante durante todo el vuelo."

explicacion: |
  Nada la acelera ni la frena en ese eje — es MRU puro.
```

### 5 — La velocidad vertical NO es constante

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: falso
tipo: vf

enunciado: "La componente vertical de la velocidad se mantiene constante durante todo el vuelo."

explicacion: |
  La gravedad la frena en la subida y la acelera en la bajada — es
  MRUV con a=−g.
```

### 6 — Tipo de movimiento del eje horizontal

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo"]

enunciado: "¿Qué tipo de movimiento describe el eje horizontal en un tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "MRU (velocidad constante)"
  - "MRUV (aceleración constante)"
  - "Ninguno, el eje horizontal no se mueve"
respuesta: "MRU (velocidad constante)"

explicacion: |
  x(t) = v₀ₓ × t, la misma fórmula del MRU.
```

### 7 — Tipo de movimiento del eje vertical

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo"]

enunciado: "¿Qué tipo de movimiento describe el eje vertical en un tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "MRUV con a=−g (igual que un tiro vertical)"
  - "MRU (velocidad constante)"
  - "No tiene aceleración"
respuesta: "MRUV con a=−g (igual que un tiro vertical)"

explicacion: |
  y(t) = v₀ᵥ×t − ½×g×t², exactamente el caso de `../tiro-vertical/`.
```

### 8 — Problema: componente horizontal de v₀

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])

respuesta: redondear(v0 * cos_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° sobre la horizontal. ¿Cuál es la componente horizontal de su velocidad inicial?"

pasos:
  - "v₀ₓ = v₀ × cos(θ) = {v0} × cos({angulo}°) = {redondear(v0 * cos_deg(angulo), 2)} m/s"

explicacion: |
  Se descompone v₀ con coseno para el eje horizontal.
```

### 9 — Problema: componente vertical de v₀

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])

respuesta: redondear(v0 * sin_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° sobre la horizontal. ¿Cuál es la componente vertical de su velocidad inicial?"

pasos:
  - "v₀ᵥ = v₀ × sen(θ) = {v0} × sen({angulo}°) = {redondear(v0 * sin_deg(angulo), 2)} m/s"

explicacion: |
  Se descompone v₀ con seno para el eje vertical.
```

### 10 — Problema: tiempo de subida

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0y: redondear(v0 * sin_deg(angulo), 2)

respuesta: redondear(v0y / 10, 2)
tipo: input
tolerancia_abs: 0.2
unidad: "s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²). Su componente vertical de velocidad inicial es v₀ᵥ={v0y} m/s. ¿Cuánto tarda en llegar a la altura máxima?"

pasos:
  - "t_subida = v₀ᵥ / g = {v0y} ÷ 10 = {redondear(v0y / 10, 2)} s"

explicacion: |
  La altura máxima ocurre cuando la velocidad vertical llega a cero.
```

### 11 — Problema: altura máxima

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0y: redondear(v0 * sin_deg(angulo), 2)

respuesta: redondear(v0y ^ 2 / (2 * 10), 2)
tipo: input
tolerancia_abs: 0.5
unidad: "m"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²). Su componente vertical de velocidad inicial es v₀ᵥ={v0y} m/s. ¿Cuál es la altura máxima que alcanza?"

pasos:
  - "h_max = v₀ᵥ² / (2×g) = {v0y}² / 20 = {redondear(v0y ^ 2 / (2 * 10), 2)} m"

explicacion: |
  Es la misma fórmula que la altura máxima de un tiro vertical, usando
  sólo la componente vertical de la velocidad.
```

### 12 — Problema: tiempo de vuelo total

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0y: redondear(v0 * sin_deg(angulo), 2)

respuesta: redondear(2 * v0y / 10, 2)
tipo: input
tolerancia_abs: 0.3
unidad: "s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²) y cae a la misma altura de la que salió. Su componente vertical de velocidad inicial es v₀ᵥ={v0y} m/s. ¿Cuánto dura todo el vuelo?"

pasos:
  - "t_vuelo = 2 × v₀ᵥ / g = 2 × {v0y} ÷ 10 = {redondear(2 * v0y / 10, 2)} s"

explicacion: |
  Por simetría, el tiempo de bajada es igual al de subida — el tiempo
  total es el doble del tiempo de subida.
```

### 13 — Problema: alcance horizontal

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0x: redondear(v0 * cos_deg(angulo), 2)
  v0y: redondear(v0 * sin_deg(angulo), 2)
  t_vuelo: redondear(2 * v0y / 10, 2)

respuesta: redondear(v0x * t_vuelo, 2)
tipo: input
tolerancia_abs: 1

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²), con v₀ₓ={v0x} m/s y un tiempo de vuelo total de {t_vuelo} s. ¿Cuál es su alcance horizontal?"

pasos:
  - "alcance = v₀ₓ × t_vuelo = {v0x} × {t_vuelo} = {redondear(v0x * t_vuelo, 2)} m"

explicacion: |
  El alcance combina lo que avanza (eje horizontal, constante) con
  cuánto tiempo pasa en el aire (que depende del eje vertical).
```

### 14 — El tiempo de subida es igual al de bajada

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el proyectil cae a la misma altura de la que salió, el tiempo que tarda en subir hasta el punto más alto es igual al tiempo que tarda en bajar desde ahí."

explicacion: |
  Es la misma simetría que ya se vio en tiro vertical.
```

### 15 — Ángulo de alcance máximo

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

enunciado: "Para una misma rapidez inicial v₀, ¿con qué ángulo se logra el mayor alcance horizontal?"
tipo: mc
opciones_explicitas:
  - "45°"
  - "90°"
  - "0°"
respuesta: "45°"

explicacion: |
  Ni tan horizontal (poco tiempo en el aire) ni tan vertical (poco
  avance) — 45° reparte v₀ por igual entre los dos ejes.
```

### 16 — A 90° el alcance es cero

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo de lanzamiento es 90° (tiro vertical), el alcance horizontal es cero."

explicacion: |
  A 90°, v₀ₓ = v₀ × cos(90°) = 0 — no hay avance horizontal.
```

### 17 — A 0° la altura máxima es cero

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo de lanzamiento es 0° (tiro horizontal puro), la altura máxima adicional por encima del punto de lanzamiento es cero."

explicacion: |
  A 0°, v₀ᵥ = v₀ × sen(0°) = 0 — el objeto empieza a caer de
  inmediato, sin fase de ascenso.
```

### 18 — Ordenar: pasos para resolver un tiro oblicuo

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "ordenar"]

enunciado: "Ordená los pasos típicos para resolver un problema de tiro oblicuo."
tipo: ordenar
opciones_explicitas:
  - "Combinar el tiempo obtenido con v₀ₓ para calcular el alcance horizontal"
  - "Descomponer v₀ en v₀ₓ (coseno) y v₀ᵥ (seno)"
  - "Resolver el eje vertical con las fórmulas de MRUV (tiempo de subida, altura máxima o tiempo de vuelo)"
respuesta_orden: ["Descomponer v₀ en v₀ₓ (coseno) y v₀ᵥ (seno)", "Resolver el eje vertical con las fórmulas de MRUV (tiempo de subida, altura máxima o tiempo de vuelo)", "Combinar el tiempo obtenido con v₀ₓ para calcular el alcance horizontal"]
explicacion: |
  El eje horizontal y el vertical se resuelven por separado y se
  combinan sólo al final, a través del tiempo.
```

### 19 — Aplicación real del tiro oblicuo

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo", "aplicacion"]

enunciado: "¿Cuál de estos es un ejemplo real de tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un lanzamiento de bala en atletismo"
  - "Una piedra que cae en caída libre desde el reposo"
  - "Un auto que viaja en línea recta a velocidad constante"
respuesta: "Un lanzamiento de bala en atletismo"

explicacion: |
  Se lanza con un ángulo y una velocidad inicial — combina avance y
  subida/bajada, el caso general de tiro oblicuo.
```

### 20 — Problema avanzado: alcance con la fórmula del ángulo doble

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 40)
  angulo: uno_de([30, 45, 60])

respuesta: redondear(v0 ^ 2 * sin_deg(2 * angulo) / 10, 2)
tipo: input
tolerancia_abs: 1
unidad: "m"

enunciado: "Usando la fórmula compacta alcance = v₀² × sen(2θ) / g, con v₀={v0} m/s, θ={angulo}° y g=10 m/s², ¿cuál es el alcance?"

pasos:
  - "alcance = v₀² × sen(2×{angulo}°) / g = {v0}² × sen({2 * angulo}°) / 10 = {redondear(v0 ^ 2 * sin_deg(2 * angulo) / 10, 2)} m"

explicacion: |
  Es la misma fórmula de siempre (v₀ₓ × t_vuelo) reescrita en una sola
  expresión usando la identidad sen(2θ) = 2×sen(θ)×cos(θ).
```

### 21 — La trayectoria es una parábola

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "La trayectoria de un tiro oblicuo (posición y en función de x) tiene forma de parábola."

explicacion: |
  Sale de combinar x(t) lineal en t con y(t) cuadrático en t —
  despejando t de la primera y reemplazando en la segunda, y queda
  como función cuadrática de x.
```

### 22 — Completar: caso extremo θ=90°

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: un tiro oblicuo con θ = 90° es exactamente el caso ya visto en el módulo de tiro ___."
respuestas_validas:
  - "vertical"

explicacion: |
  Sin componente horizontal, es tiro vertical puro.
```

### 23 — Completar: caso extremo θ=0°

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: un tiro oblicuo con θ = 0° tiene, en el eje horizontal, exactamente el movimiento ya visto en el módulo de ___."
respuestas_validas:
  - "MRU"

explicacion: |
  Sin componente vertical inicial, el eje horizontal es MRU puro (y el
  objeto cae en caída libre desde ese instante).
```

### 24 — Por qué se usa g=10 y no 9,8

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo"]

enunciado: "En muchos problemas de secundaria se usa g=10 m/s² en vez del valor real (≈9,8 m/s²). ¿Por qué?"
tipo: mc
opciones_explicitas:
  - "Simplifica las cuentas manuales sin cambiar el razonamiento del problema"
  - "Porque 9,8 m/s² es un valor incorrecto"
  - "Porque la gravedad terrestre real es exactamente 10 m/s²"
respuesta: "Simplifica las cuentas manuales sin cambiar el razonamiento del problema"

explicacion: |
  Es una convención pedagógica frecuente; en un cálculo de precisión
  real se usa 9,8 m/s² (o el valor local exacto).
```

### 25 — Los dos ejes son independientes

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "El movimiento horizontal y el movimiento vertical de un proyectil son independientes entre sí: lo que pasa en un eje no afecta lo que pasa en el otro."

explicacion: |
  Es la clave que permite resolver cada eje por separado con las
  fórmulas de MRU y MRUV ya conocidas.
```

### 26 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "Para predecir la trayectoria, el alcance y el tiempo de vuelo de cualquier objeto lanzado con un ángulo"
  - "Sólo aplica a objetos lanzados exactamente hacia arriba"
  - "Sólo aplica si no hay gravedad"
respuesta: "Para predecir la trayectoria, el alcance y el tiempo de vuelo de cualquier objeto lanzado con un ángulo"

explicacion: |
  Es la combinación de MRU y MRUV (visto por separado antes) aplicada
  en simultáneo a los dos ejes de un mismo movimiento.
```
