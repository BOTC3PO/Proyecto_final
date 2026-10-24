# Fisica — Dualidad onda particula (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de dualidad

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["conceptos", "naturaleza_luz"]

respuesta: "onda"
tipo: "completar"
respuestas_validas:
  - "onda"

enunciado: "Cuando la luz presenta fenómenos como la difracción o la interferencia, se comporta como una ___."

explicacion: |
  La difracción y la interferencia son fenómenos característicos de las ondas.
```

### 2 — El fotón

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["fotón", "particula"]

respuesta: verdadero
tipo: "vf"

enunciado: "Un fotón es una partícula elemental de luz que no tiene masa en reposo."

explicacion: |
  Correcto. El fotón es el cuanto de la radiación electromagnética y su masa en reposo es cero.
```

### 3 — Comportamiento de la materia

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["materia", "de_broglie"]

respuesta: "particula"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "gas", "plasma"]

enunciado: "Según la hipótesis de De Broglie, la materia (como un electrón) también posee una naturaleza de:"

explicacion: |
  La dualidad establece que tanto la luz como la materia tienen propiedades ondulatorias y de partícula.
```

### 4 — Relación energía-frecuencia

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["planck", "energia"]

respuesta: "Planck"
tipo: "completar"
respuestas_validas:
  - "Planck"

enunciado: "La constante que relaciona la energía de un fotón con su frecuencia es la constante de ___."

explicacion: |
  La ecuación es E = h * f, donde h es la constante de Planck.
```

### 5 — Experimento de la doble rendija

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["experimento", "Young"]

respuesta: "interferencia"
tipo: "mc"
opciones_explicitas: ["interferencia", "colisión", "dispersión", "reflexión"]

enunciado: "El patrón de franjas brillantes y oscuras observado en el experimento de la doble rendija con luz es un patrón de:"

explicacion: |
  La interferencia es la superposición de ondas que crea este patrón característico.
```

### 6 — Longitud de onda de De Broglie

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["calculo", "de_broglie"]

variables:
  idx: uno_de([0, 1])
  datos: [[1.0e-24, 1.0e24], [2.0e-24, 5.0e23]]

respuesta: datos[idx][1]
tipo: "completar"
tolerancia_abs: 1e20

enunciado: "Si un electrón tiene un momento lineal de {datos[idx][0]} kg·m/s, su longitud de onda de De Broglie es aproximadamente ___ m (asumiendo h = 1)."

pasos:
  - "Calcular lambda = h / p"
  - "Sustituir el valor de p dado"

explicacion: |
  La fórmula es lambda = h / p = 1 / {datos[idx][0]} = {datos[idx][1]} m.
```

### 7 — Efecto fotoeléctrico

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["fotoeléctrico", "einstein"]

respuesta: verdadero
tipo: "vf"

enunciado: "El efecto fotoeléctrico fue la evidencia experimental que confirmó la naturaleza corpuscular de la luz."

explicacion: |
  Einstein explicó este efecto mediante la existencia de cuantos de energía (fotones).
```

### 8 — Dualidad según la velocidad

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["velocidad", "relatividad"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "A medida que la velocidad de una partícula aumenta, su momento lineal aumenta, por lo que su longitud de onda de De Broglie es ___."

explicacion: |
  Como lambda = h/p, si el momento (p) aumenta, la longitud de onda (lambda) disminuye.
```

### 9 — El experimento de la doble rendija con electrones

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["electrones", "cuantica"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si lanzamos electrones uno por uno a través de una doble rendija, eventualmente se observa un patrón de interferencia."

explicacion: |
  Incluso lanzando partículas individuales, la naturaleza ondulatoria de cada una permite la interferencia con su propia probabilidad de posición.
```

### 10 — Relación Momento y Longitud de onda

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["relacion", "formula"]

respuesta: "inversamente"
tipo: "completar"
respuestas_validas:
  - "inversamente"

enunciado: "La longitud de onda de De Broglie es ___ proporcional al momento lineal de la partícula."

explicacion: |
  Es una relación inversa: a mayor momento, menor longitud de onda.
```

### 11 — Error: Masa y Fotón

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["error", "fotón"]

respuesta: falso
tipo: "vf"

enunciado: "Un fotón tiene una masa de reposo mayor que un electrón."

explicacion: |
  Falso. El fotón no tiene masa en reposo.
```

### 12 — Ordenar el proceso de detección

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["ordenar", "proceso"]

opciones_explicitas: ["Emisión de fotón", "Interacción con material", "Detección de señal"]
respuesta_orden: ["Emisión de fotón", "Interacción con material", "Detección de señal"]
tipo: "ordenar"

enunciado: "Ordena los pasos de un proceso de detección de luz mediante el efecto fotoeléctrico:"

explicacion: |
  Primero se emite la luz, luego interactúa con el metal y finalmente se detecta la corriente.
```

### 13 — Comparación: Onda vs Partícula

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "particula"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "campo", "energía"]

enunciado: "Cuando la luz deposita su energía en un punto localizado de un detector, se comporta como una:"

explicacion: |
  El depósito localizado de energía es una característica del comportamiento corpuscular.
```

### 14 — El principio de incertidumbre

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["heisenberg", "incertidumbre"]

respuesta: "posición"
tipo: "completar"
respuestas_validas:
  - "posición"

enunciado: "El principio de incertidumbre de Heisenberg establece que no podemos conocer simultáneamente con precisión la ___ y el momento de una partícula."

explicacion: |
  Es el principio fundamental de la mecánica cuántica.
```

### 15 — Error común: Frecuencia y Energía

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["error", "frecuencia"]

respuesta: falso
tipo: "vf"

enunciado: "Si duplicamos la frecuencia de una onda electromagnética, su energía se reduce a la mitad."

explicacion: |
  Falso. Según E = h*f, la energía es directamente proporcional a la frecuencia.
```

### 16 — Escenario: Fotón de alta energía

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["calculo", "rayos_x"]

variables:
  h_val: 6.6e-34

respuesta: 1
tipo: "completar"
tolerancia_abs: 0.001

enunciado: "Si la constante de Planck es {h_val} J·s y un fotón tiene una energía de {h_val} J, su frecuencia es ___ Hz."

pasos:
  - "Usar f = E / h"

explicacion: |
  Como E = h * f, si E = h, entonces f = E/h = 1.
```

### 17 — Naturaleza de la luz en el vacío

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["vacío", "luz"]

respuesta: "onda"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "ambas", "ninguna"]

enunciado: "En el vacío, la luz se propaga como una ___ electromagnética."

explicacion: |
  La propagación en el vacío se describe mediante las ecuaciones de Maxwell como una onda.
```

### 18 — La dualidad en la materia macroscópica

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["macro", "de_broglie"]

respuesta: falso
tipo: "vf"

enunciado: "Los objetos macroscópicos, como una pelota de béisbol, muestran efectos de difracción claramente visibles debido a su naturaleza ondulatoria."

explicacion: |
  Aunque teóricamente tienen longitud de onda, su masa es tan grande que la longitud de onda es imperceptible.
```

### 19 — Comparación: Fotón vs Electrón

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "masa"
tipo: "mc"
opciones_explicitas: ["masa", "carga", "frecuencia", "velocidad"]

enunciado: "La principal diferencia entre un fotón y un electrón es que el electrón posee ___."

explicacion: |
  El electrón tiene masa en reposo y carga eléctrica; el fotón no.
```

### 20 — Escenario: Longitud de onda de un objeto

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["calculo", "de_broglie"]

variables:
  p_val: 1.0e-34

respuesta: 1.0e34
tipo: "completar"
tolerancia_abs: 1e30

enunciado: "Si un objeto tiene un momento de {p_val} kg·m/s y h = 1, su longitud de onda es ___ m."

pasos:
  - "lambda = h / p"

explicacion: |
  Aplicación directa de la fórmula de De Broglie: lambda = 1 / {p_val} = 1.0e34 m.
```

### 21 — Resumen de la dualidad

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["resumen"]

respuesta: "ambas"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "ambas", "ninguna"]

enunciado: "La dualidad onda-partícula implica que la luz y la materia exhiben propiedades de:"

explicacion: |
  Ambas naturalezas son complementarias.
```

### 22 — Efecto Doppler y fotones

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["doppler", "frecuencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "El efecto Doppler puede aplicarse a los fotones, provocando un cambio en su frecuencia (color)."

explicacion: |
  El desplazamiento al rojo o azul es un cambio en la frecuencia debido al movimiento relativo.
```

### 23 — Ordenar la escala de longitud de onda

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["ordenar", "escala"]

opciones_explicitas: ["Fotón (luz visible)", "Electrón (De Broglie)", "Pelota de béisbol (De Broglie)"]
respuesta_orden: ["Fotón (luz visible)", "Electrón (De Broglie)", "Pelota de béisbol (De Broglie)"]
tipo: "ordenar"

enunciado: "Ordena estos objetos de mayor a menor longitud de onda de De Broglie:"

explicacion: |
  A mayor masa/momento, menor longitud de onda.
```

### 24 — La constante de Planck en la vida real

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["planck", "constante"]

respuesta: "6.626e-34"
tipo: "input"
tolerancia_abs: 0.001

enunciado: "El valor aproximado de la constante de Planck en unidades de J·s es (usa notación científica, ej: 6.6e-34):"

explicacion: |
  h ≈ 6.626 × 10^-34 J·s.
```

### 25 — Conclusión de la dualidad

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["conclusion"]

respuesta: verdadero
tipo: "vf"

enunciado: "La dualidad onda-partícula es un concepto fundamental de la mecánica cuántica que rompe con la física clásica."

explicacion: |
  La física clásica no puede explicar fenómenos como el efecto fotoeléctrico.
```
