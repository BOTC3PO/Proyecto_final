# Fisica — ecuacion de bernoulli dinamica de fluidos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Quién formuló la ecuación

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["historia"]

enunciado: "¿Quién publicó en 1738 la obra Hydrodynamica, donde aparece la relación entre presión y velocidad de un fluido?"
tipo: mc
opciones_explicitas:
  - "Daniel Bernoulli"
  - "Blaise Pascal"
  - "Arquímedes"
  - "Isaac Newton"
respuesta: "Daniel Bernoulli"

explicacion: |
  La relación lleva su nombre: la ecuación de Bernoulli.
```

### 2 — Qué conserva la ecuación

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "La ecuación de Bernoulli es una forma de expresar la conservación de..."
tipo: mc
opciones_explicitas:
  - "la energía por unidad de volumen del fluido"
  - "la masa del recipiente"
  - "la temperatura del fluido"
  - "la viscosidad del fluido"
respuesta: "la energía por unidad de volumen del fluido"

explicacion: |
  Suma presión estática, presión dinámica y presión de altura, todas en pascales.
```

### 3 — Ecuación de continuidad

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["continuidad"]

enunciado: "Para un fluido incompresible, el caudal se conserva: A1·v1 = ___·v2."
tipo: completar
respuestas_validas:
  - "A2"

explicacion: |
  El producto área por velocidad es constante a lo largo de la tubería.
```

### 4 — Estrechamiento

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["continuidad"]

enunciado: "Si una tubería con agua se estrecha, la velocidad del agua en la parte angosta..."
tipo: mc
opciones_explicitas:
  - "aumenta"
  - "disminuye"
  - "no cambia"
  - "se vuelve cero"
respuesta: "aumenta"

explicacion: |
  Para mantener el mismo caudal, menor área exige mayor velocidad.
```

### 5 — Tubería horizontal

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["bernoulli"]

enunciado: "En una tubería horizontal por la que circula un fluido ideal, el punto donde la velocidad es mayor es el punto donde la presión es..."
tipo: mc
opciones_explicitas:
  - "menor"
  - "mayor"
  - "igual"
  - "imposible de comparar"
respuesta: "menor"

explicacion: |
  Con la altura constante, si sube el término ½ρv² baja la presión estática.
```

### 6 — Hipótesis de incompresibilidad

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "basico"
  tags: ["hipotesis"]

enunciado: "La ecuación de Bernoulli en su forma habitual supone un fluido incompresible."
tipo: vf
respuesta: verdadero

explicacion: |
  También supone flujo estacionario, sin viscosidad y a lo largo de una línea de corriente.
```

### 7 — Aplica a cualquier fluido real

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["hipotesis"]

enunciado: "La ecuación de Bernoulli es exacta para cualquier fluido real, incluso muy viscoso y turbulento."
tipo: vf
respuesta: falso

explicacion: |
  Es un modelo ideal: la viscosidad y la turbulencia disipan energía y el modelo deja de ser válido.
```

### 8 — Unidades de los términos

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["unidades"]

enunciado: "En la ecuación p + ½ρv² + ρgh = constante, cada término tiene unidades de..."
tipo: mc
opciones_explicitas:
  - "presión (pascal)"
  - "velocidad (m/s)"
  - "energía (joule)"
  - "potencia (watt)"
respuesta: "presión (pascal)"

explicacion: |
  Son energías por unidad de volumen: J/m³ equivale a Pa.
```

### 9 — Presión dinámica

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["bernoulli"]

enunciado: "¿Cómo se llama el término ½·ρ·v² de la ecuación de Bernoulli?"
tipo: mc
opciones_explicitas:
  - "presión dinámica"
  - "presión hidrostática"
  - "presión atmosférica"
  - "presión absoluta"
respuesta: "presión dinámica"

explicacion: |
  Es la parte de la presión asociada al movimiento del fluido.
```

### 10 — Sustentación del ala

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["aplicaciones"]

enunciado: "Según el modelo de Bernoulli, en un ala la fuerza hacia arriba aparece porque sobre la cara superior..."
tipo: mc
opciones_explicitas:
  - "el aire va más rápido y la presión es menor"
  - "el aire va más lento y la presión es menor"
  - "el aire va más rápido y la presión es mayor"
  - "la presión no cambia"
respuesta: "el aire va más rápido y la presión es menor"

explicacion: |
  La diferencia de presión entre las dos caras, por el área, da la fuerza de sustentación.
```

### 11 — Sustentación completa

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["aplicaciones"]

enunciado: "Bernoulli explica por sí solo toda la sustentación de un avión, sin necesidad de considerar el ángulo de ataque."
tipo: vf
respuesta: falso

explicacion: |
  La explicación completa también involucra el ángulo de ataque y la forma en que el ala desvía el aire.
```

### 12 — Torricelli: fórmula

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["torricelli"]

enunciado: "Un líquido sale por un orificio a una profundidad h bajo la superficie libre. ¿Con qué velocidad sale?"
tipo: mc
opciones_explicitas:
  - "v = raíz cuadrada de (2·g·h)"
  - "v = g·h"
  - "v = 2·g·h"
  - "v = raíz cuadrada de (g·h/2)"
respuesta: "v = raíz cuadrada de (2·g·h)"

explicacion: |
  Es el teorema de Torricelli: igual a la velocidad de caída libre desde la altura h.
```

### 13 — Dos orificios

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["torricelli"]

enunciado: "Un tanque tiene dos orificios iguales, uno a 0,5 m y otro a 2 m de profundidad. ¿Por cuál sale el agua con mayor velocidad?"
tipo: mc
opciones_explicitas:
  - "por el de 2 m"
  - "por el de 0,5 m"
  - "por los dos igual"
  - "depende del tamaño del tanque"
respuesta: "por el de 2 m"

explicacion: |
  La velocidad depende de la raíz de la profundidad, no del tamaño del orificio ni del tanque.
```

### 14 — Atomizador

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["aplicaciones"]

enunciado: "En un pulverizador, el líquido sube por un tubito cuando el aire pasa rápido por encima porque..."
tipo: mc
opciones_explicitas:
  - "la presión sobre el tubito baja"
  - "la presión sobre el tubito aumenta"
  - "el líquido se calienta"
  - "el aire empuja el líquido hacia arriba directamente"
respuesta: "la presión sobre el tubito baja"

explicacion: |
  El aire rápido reduce la presión y la presión atmosférica empuja el líquido hacia arriba.
```

### 15 — Venturi

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["aplicaciones"]

enunciado: "En un tubo de Venturi, la presión en la garganta (parte más angosta) comparada con la parte ancha es..."
tipo: mc
opciones_explicitas:
  - "menor"
  - "mayor"
  - "igual"
  - "imposible de determinar"
respuesta: "menor"

explicacion: |
  En la garganta la velocidad es mayor, así que la presión estática es menor.
```

### 16 — Velocidad tras un estrechamiento

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["continuidad", "calculo"]

variables:
  a1: uno_de([20, 30, 40, 50])
  a2: uno_de([5, 10])
  v1: uno_de([1, 2, 3])

enunciado: "Un agua circula a {v1} m/s por una sección de {a1} cm². Luego pasa a una sección de {a2} cm². ¿Con qué velocidad circula en la sección menor? (en m/s)"
tipo: input
respuesta: v1 * a1 / a2
tolerancia_abs: 0.01
unidad: "m/s"

explicacion: |
  Continuidad: v2 = v1·A1/A2, con las áreas en la misma unidad.
```

### 17 — Torricelli numérico

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["torricelli", "calculo"]

variables:
  h: uno_de([0.5, 1.25, 2, 3.2, 5])

enunciado: "Un tanque abierto tiene un orificio a {h} m por debajo de la superficie del agua. Con g = 9,8 m/s², ¿con qué velocidad sale el agua? (en m/s, redondeá a dos decimales)"
tipo: input
respuesta: redondear(sqrt(2 * 9.8 * h), 2)
tolerancia_abs: 0.05
unidad: "m/s"

explicacion: |
  v = √(2·g·h).
```

### 18 — Diferencia de presión por velocidad

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["bernoulli", "calculo"]

variables:
  v1: uno_de([1, 2, 3])
  v2: uno_de([5, 6, 8])

enunciado: "Por una tubería horizontal circula agua (densidad 1000 kg/m³). La velocidad pasa de {v1} m/s a {v2} m/s. ¿Cuánto baja la presión estática entre los dos puntos? (en Pa)"
tipo: input
respuesta: 0.5 * 1000 * (v2 * v2 - v1 * v1)
tolerancia_abs: 1
unidad: "Pa"

explicacion: |
  Con h constante: p1 − p2 = ½·ρ·(v2² − v1²).
```

### 19 — Presión dinámica del agua

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "intermedio"
  tags: ["presion_dinamica", "calculo"]

variables:
  v: uno_de([2, 4, 5, 10])

enunciado: "¿Cuál es la presión dinámica de agua (1000 kg/m³) que se mueve a {v} m/s? (en Pa)"
tipo: input
respuesta: 0.5 * 1000 * v * v
tolerancia_abs: 1
unidad: "Pa"

explicacion: |
  Presión dinámica = ½·ρ·v².
```

### 20 — Presión en el ala

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["sustentacion", "calculo"]

variables:
  vs: uno_de([60, 70, 80])
  vi: uno_de([50, 55])
  area: uno_de([10, 15, 20])

enunciado: "Sobre un ala de {area} m² el aire (1,2 kg/m³) circula a {vs} m/s por arriba y a {vi} m/s por abajo. Con el modelo de Bernoulli, ¿qué fuerza neta hacia arriba resulta? (en N)"
tipo: input
respuesta: 0.5 * 1.2 * (vs * vs - vi * vi) * area
tolerancia_abs: 1
unidad: "N"

explicacion: |
  Δp = ½·ρ·(v_arriba² − v_abajo²); fuerza = Δp · área.
```

### 21 — Caudal por un orificio

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["torricelli", "calculo"]

variables:
  h: uno_de([0.8, 1.25, 3.2])
  area: uno_de([2, 5, 10])

enunciado: "Un orificio de {area} cm² está a {h} m bajo la superficie libre de un tanque. Con g = 9,8 m/s², ¿qué caudal sale? (en cm³/s, redondeá a un decimal)"
tipo: input
respuesta: redondear(area * 100 * sqrt(2 * 9.8 * h), 1)
tolerancia_abs: 2
unidad: "cm³/s"

explicacion: |
  Q = A·v, con v = √(2gh) en m/s y A en cm²: Q [cm³/s] = A·100·v.
```

### 22 — Presión corriente abajo

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["bernoulli", "calculo"]

variables:
  p1: uno_de([200, 250, 300])
  v1: uno_de([2, 3])
  v2: uno_de([6, 8])

enunciado: "En una tubería horizontal de agua la presión es {p1} kPa y la velocidad {v1} m/s. Más adelante la velocidad es {v2} m/s. ¿Cuál es la presión en ese punto? (en kPa)"
tipo: input
respuesta: p1 - 0.5 * 1000 * (v2 * v2 - v1 * v1) / 1000
tolerancia_abs: 0.1
unidad: "kPa"

explicacion: |
  p2 = p1 − ½·ρ·(v2² − v1²), pasando a kPa al final.
```

### 23 — Cambio de altura

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["bernoulli"]

enunciado: "En una tubería de sección constante que asciende, ¿qué ocurre con la presión estática si el fluido ideal sube?"
tipo: mc
opciones_explicitas:
  - "disminuye"
  - "aumenta"
  - "permanece igual"
  - "se anula"
respuesta: "disminuye"

explicacion: |
  Con velocidad constante, el término ρgh aumenta y la presión estática debe bajar.
```

### 24 — Condición del flujo

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["hipotesis"]

enunciado: "La ecuación de Bernoulli se aplica entre dos puntos de una misma línea de ___."
tipo: completar
respuestas_validas:
  - "corriente"

explicacion: |
  La comparación vale a lo largo de una línea de corriente.
```

### 25 — Torricelli y peso del agua

```
metadata:
  materia: "fisica"
  tema: "ecuacion_de_bernoulli_dinamica_de_fluidos"
  nivel: "avanzado"
  tags: ["torricelli"]

enunciado: "Según Torricelli, la velocidad de salida por un orificio depende de la profundidad pero no de la densidad del líquido."
tipo: vf
respuesta: verdadero

explicacion: |
  En v = √(2gh) no aparece la densidad: se simplifica entre ambos lados.
```
