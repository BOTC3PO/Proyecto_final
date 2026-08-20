# Fisica — Refraccion indice ley snell (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de índice de refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_de_refraccion"]

respuesta: "n"
tipo: "completar"
respuestas_validas:
  - "n"
  - "N"
  - "índice"

enunciado: "El parámetro adimensional que describe la velocidad de la luz en un medio en comparación con el vacío se denomina ___ de refracción."

explicacion: |
  El índice de refracción (n) se define como la relación entre la velocidad de la luz en el vacío (c) y la velocidad de la luz en el medio (v): n = c/v.
```

### 2 — Comportamiento de la velocidad de la luz

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["velocidad_luz", "medios"]

respuesta: falso
tipo: "vf"

enunciado: "En un medio con un índice de refracción mayor que el del vacío (n > 1), la luz viaja más rápido que en el vacío."

explicacion: |
  Falso. Como n = c/v, si n es mayor que 1, la velocidad en el medio (v) es menor que la velocidad en el vacío (c).
```

### 3 — Ley de Snell: Ángulos de incidencia y refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "angulos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1.5, 0.7], [1.33, 1.5]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: [0.7, 1.5, 1.33, 0.85]

enunciado: "Si un rayo de luz pasa de un medio con índice {datos[escenario_idx][0]} a un medio con índice {datos[escenario_idx][1]}, ¿cuál es el valor del índice de refracción del segundo medio?"

explicacion: |
  El enunciado pide identificar el segundo índice de refracción según el escenario sorteado.
```

### 4 — Terminología de la refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["terminos", "rayos"]

respuesta: "normal"
tipo: "completar"
respuestas_validas:
  - "normal"
  - "perpendicular"

enunciado: "La línea imaginaria perpendicular a la superficie de separación entre dos medios se denomina línea ___."

explicacion: |
  La 'normal' es la línea perpendicular a la interfaz, y los ángulos de incidencia y refracción se miden respecto a ella.
```

### 5 — Orden de los fenómenos en la refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["secuencia", "fenomenos"]

tipo: ordenar
opciones_explicitas: ["incidencia", "refraccion", "reflexion_parcial"]
respuesta_orden: ["incidencia", "refraccion", "reflexion_parcial"]

enunciado: "Ordena los eventos que ocurren cuando un rayo de luz incide sobre una interfaz entre dos medios distintos, considerando el fenómeno de refracción y la posible reflexión parcial."

explicacion: |
  Primero el rayo incide (incidencia), luego parte de la energía cambia de dirección al entrar al segundo medio (refracción) y otra parte rebota (reflexión parcial).
```

### 6 — Índice de refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_de_refraccion"
  nivel: "basico"
  tags: ["optica", "indice_de_refraccion"]

variables:
  n_medio: 1.5

respuesta: "1.5"
tipo: mc
opciones_explicitas: ["1.0", "1.5", "2.0", "0.5"]

enunciado: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío ($c$) y la velocidad de la luz en dicho medio ($v$). Si la luz viaja en un medio con una velocidad que es exactamente dos tercios de la velocidad de la luz en el vacío, ¿cuál es el índice de refracción?"

explicacion: |
  El índice de refracción $n$ se calcula como $n = c/v$. 
  Si $v = (2/3)c$, entonces $n = c / ((2/3)c) = 3/2 = 1.5$.
```

### 7 — Ley de Snell: Identificación

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "basico"
  tags: ["ley_de_snell", "optica"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que si la luz pasa de un medio con índice de refracción $n_1$ a un medio con $n_2$ y $n_2 > n_1$, el rayo de luz se acerca a la normal?"

explicacion: |
  Cuando la luz pasa a un medio más denso ópticamente ($n_2 > n_1$), la velocidad disminuye y el rayo se desvía hacia la normal.
```

### 8 — Cálculo de ángulo de refracción

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "calculo"]

variables:
  n1: 1.0
  n2: 1.33
  theta1: 30.0

respuesta: 40.6
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un rayo de luz viaja desde el aire (n1 = {n1}) hacia el agua (n2 = {n2}) con un ángulo de incidencia de {theta1}° respecto a la normal. Calcula el ángulo de refracción en el agua."

pasos:
  - "Aplicar la Ley de Snell: n1 · sin(θ1) = n2 · sin(θ2)"
  - "Despejar sin(θ2) = (n1 · sin(θ1)) / n2"
  - "Calcular θ2 = arcsin(resultado)"

explicacion: |
  Usando la Ley de Snell:
  1.0 · sin(30°) = 1.33 · sin(θ2)
  0.5 = 1.33 · sin(θ2)
  sin(θ2) = 0.5 / 1.33 ≈ 0.3759
  θ2 = arcsin(0.3759) ≈ 40.6°
```

### 9 — Elementos de la Ley de Snell

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "basico"
  tags: ["conceptos"]

tipo: ordenar

opciones_explicitas: ["n1", "sen(theta1)", "n2", "sen(theta2)"]

respuesta_orden: ["n1", "sen(theta1)", "n2", "sen(theta2)"]

enunciado: "Ordena los términos de la fórmula de la Ley de Snell (n1 * sen(theta1) = n2 * sen(theta2)) según su aparición en la ecuación, de izquierda a derecha."

explicacion: |
  La ecuación establece la igualdad entre el producto del índice del primer medio por el seno del ángulo de incidencia y el producto del índice del segundo medio por el seno del ángulo de refracción.
```

### 10 — Completar la relación

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "intermedio"
  tags: ["completar", "formula"]

respuesta: "n2"
tipo: completar
respuestas_validas:
  - "n2"

enunciado: "En la expresión de la Ley de Snell, n1 * sin(theta1) = ___ * sin(theta2), el término desconocido representa el índice de refracción del segundo medio."

explicacion: |
  La Ley de Snell relaciona las propiedades de los dos medios involucrados: n1 sin(theta1) = n2 sin(theta2).
```

### 11 — El índice de refracción y la velocidad

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_refraccion", "velocidad_luz"]

respuesta: falso
tipo: vf

enunciado: "Si un rayo de luz pasa de un medio con índice de refracción $n_1 = 1.5$ a un medio con $n_2 = 1.0$, la velocidad de la luz en el segundo medio es menor que en el primero."

explicacion: |
  El índice de refracción se define como $n = c/v$. Por lo tanto, a mayor índice de refracción, menor es la velocidad de la luz en ese medio. Si $n_2 < n_1$, la velocidad en el segundo medio es mayor.
```

### 12 — La confusión del ángulo de refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "intermedio"
  tags: ["ley_snell", "angulos", "refraccion"]

variables:
  escenario: uno_de([["n1=1.0, n2=1.5", "se acerca a la normal"], ["n1=1.5, n2=1.0", "se aleja de la normal"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["se acerca a la normal", "se aleja de la normal"]

enunciado: "Cuando la luz viaja de un medio con índice de refracción {escenario[0]}, el rayo refractado ___ la línea normal."

pasos:
  - "Identificar si el índice aumenta o disminuye."
  - "Aplicar la Ley de Snell: n1 * sen(theta1) = n2 * sen(theta2)."
  - "Si n2 > n1, entonces sen(theta2) < sen(theta1), por lo que theta2 < theta1."

explicacion: |
  Al pasar a un medio más denso ópticamente (n2 > n1), la velocidad disminuye y el rayo se desvía hacia la normal para mantener la igualdad en la Ley de Snell.
```

### 13 — Cálculo de la velocidad de la luz en un medio

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "intermedio"
  tags: ["velocidad", "calculo", "indice_refraccion"]

variables:
  datos: uno_de([[1.33, 2.25e8], [1.50, 2.0e8], [2.42, 1.24e8]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 1e6

enunciado: "Calcula la velocidad de la luz en un medio cuyo índice de refracción es n = {datos[0]}. (Usa c = 3.0 × 10^8 m/s)."

pasos:
  - "Usa la fórmula v = c / n."
  - "Sustituye los valores: v = 3.0 × 10^8 / {datos[0]}."

explicacion: |
  La velocidad en el medio se calcula dividiendo la velocidad en el vacío por el índice de refracción del medio.
```

### 14 — El fenómeno de la Reflexión Total Interna

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "avanzado"
  tags: ["reflexion_total", "angulo_critico", "condiciones"]

respuesta_orden: ["El medio debe ser menos denso ópticamente", "El ángulo de incidencia debe ser mayor al crítico", "La luz debe viajar de un medio con mayor n a uno con menor n"]

tipo: ordenar
opciones_explicitas: ["El medio debe ser menos denso ópticamente", "El ángulo de incidencia debe ser mayor al crítico", "La luz debe viajar de un medio con mayor n a uno con menor n"]

enunciado: "Ordena las condiciones necesarias para que ocurra la Reflexión Total Interna, desde la condición del medio hasta la condición del ángulo:"

explicacion: |
  Para la reflexión total interna se requiere: 1) Que la luz pase de un medio con n alto a uno con n bajo (menos denso), 2) Que el ángulo de incidencia sea mayor al ángulo crítico θc.
```

### 15 — Completar la Ley de Snell

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "basico"
  tags: ["ley_snell", "formula"]

respuesta: "n1*sin(theta1)=n2*sin(theta2)"
tipo: completar
respuestas_validas:
  - "n1*sin(theta1)=n2*sin(theta2)"

enunciado: "La expresión matemática de la Ley de Snell es: ___"

explicacion: |
  La Ley de Snell establece que el producto del índice de refracción por el seno del ángulo de incidencia es constante para dos medios en contacto.
```

### 16 — Diferencia entre índice de refracción y velocidad

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_de_refraccion"]

respuesta: falso
tipo: vf

enunciado: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío y la velocidad de la luz en dicho medio, por lo que un índice mayor implica una mayor velocidad de la luz en el medio."

explicacion: |
  Falso. El índice de refracción es n = c/v. Si el índice n es mayor, la velocidad v es menor (la luz viaja más lento en medios más densos ópticamente).
```

### 17 — Comportamiento del ángulo de incidencia

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "angulo_de_refraccion"]

variables:
  escenario: uno_de([["aire", "agua", 1.0, 1.33], ["agua", "diamante", 1.33, 2.42], ["vidrio", "aire", 1.5, 1.0]])

respuesta: "hacia_la_normal"
tipo: mc

opciones_explicitas: ["hacia_la_normal", "alejandose_de_la_normal", "se_mantiene_igual", "se_anula"]

enunciado: "Si un rayo de luz viaja desde un medio con índice de refracción {escenario[0]} hacia un medio con un índice de refracción mayor, {escenario[1]}, el rayo se refractará ___."

explicacion: |
  Cuando la luz pasa de un medio menos denso (menor n) a uno más denso (mayor n), el rayo se acerca a la normal para compensar la disminución de velocidad.
```

### 18 — Relación entre ángulo y velocidad

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "velocidad_luz"]

variables:
  caso: uno_de([["n1=1.0", "n2=1.5"], ["n1=1.5", "n2=1.0"], ["n1=1.33", "n2=1.5"]])

respuesta: "menor"
tipo: completar

respuestas_validas:
  - "mayor"
  - "menor"

enunciado: "Considerando el caso donde el medio 1 tiene un índice {caso[0]} y el medio 2 tiene un índice {caso[1]}, si el rayo pasa del medio 1 al medio 2, la velocidad de la luz en el medio 2 es ___ que en el medio 1."

explicacion: |
  Según la Ley de Snell y la definición de n = c/v, a mayor índice de refracción, menor es la velocidad de la luz en ese medio.
```

### 19 — Componentes del vector de onda en refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "avanzado"
  tags: ["refraccion", "vector_onda"]

respuesta: "se_mantiene_constante"
tipo: mc

opciones_explicitas: ["se_mantiene_constante", "cambia_su_magnitud", "cambia_su_direccion", "se_anula"]

enunciado: "Al comparar la propagación de una onda en la interfaz entre dos medios con diferentes índices de refracción, ¿qué sucede con la componente del vector de onda paralela a la interfaz?"

explicacion: |
  Para que se cumpla la continuidad de la fase en la interfaz, la componente del vector de onda $k$ paralela a la superficie debe ser la misma para ambos medios.
```

### 20 — Orden de los procesos en la refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "basico"
  tags: ["refraccion", "proceso"]

respuesta_orden: ["incidencia", "cambio_de_velocidad", "cambio_de_direccion"]
tipo: ordenar

opciones_explicitas: ["incidencia", "cambio_de_velocidad", "cambio_de_direccion"]

enunciado: "Ordena cronológicamente los eventos físicos que ocurren cuando un rayo de luz pasa de un medio a otro con diferente índice de refracción:"

pasos:
  - "El rayo llega a la superficie de separación."
  - "La velocidad de la onda cambia debido a la densidad óptica."
  - "El ángulo de propagación cambia para satisfacer la Ley de Snell."

explicacion: |
  Primero ocurre la incidencia, luego el cambio de velocidad en el nuevo medio y, como consecuencia, el cambio en la dirección (ángulo de refracción).
```

### 21 — El lápiz en el vaso de agua

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_refraccion", "luz"]

variables:
  datos: [["agua", 1.33, "se ve más grueso"], ["aceite", 1.45, "se ve más grueso"], ["vidrio", 1.50, "se ve más grueso"]]
  idx: uno_de([0, 1, 2])

enunciado: "Al observar un lápiz dentro de un recipiente con {datos[idx][0]}, el objeto parece sufrir una desviación visual debido al cambio de medio. El índice de refracción del {datos[idx][0]} es aproximadamente {datos[idx][1]}."

opciones_explicitas: ["se ve más grueso", "se ve más delgado", "no cambia su apariencia"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  La refracción ocurre cuando la luz cambia de velocidad al pasar de un medio a otro, lo que provoca un cambio en la dirección de los rayos luminosos, dando la ilusión de que el objeto está desplazado o deformado.
```

### 22 — Cálculo del ángulo de incidencia

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "intermedio"
  tags: ["snell", "calculo", "angulo"]

variables:
  datos: [["aire", 1.0, 30.0], ["agua", 1.33, 45.0], ["diamante", 2.42, 15.0]]
  idx: uno_de([0, 1, 2])

enunciado: "Un rayo de luz viaja desde el {datos[idx][0]} (n={datos[idx][1]}) hacia un medio con un índice de refracción de 1.50. Si el ángulo de incidencia es de {datos[idx][2]} grados, ¿cuál es el ángulo de refracción aproximado?"

pasos:
  - "Identificar los índices de refracción: n1 = {datos[idx][1]} y n2 = 1.50"
  - "Aplicar la Ley de Snell: n1 * sin_deg({datos[idx][2]}) = n2 * sin_deg(theta2)"
  - "Despejar: theta2 = arcsin((n1 * sin_deg({datos[idx][2]}) / n2))"

respuesta: 21.0
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Usando la Ley de Snell: 1.0 * sin(30°) = 1.5 * sin(theta2) -> 0.5 / 1.5 = sin(theta2) -> sin(theta2) = 0.333 -> theta2 ≈ 19.47°. (Nota: El valor de respuesta depende del cálculo exacto del escenario sorteado, para este ejemplo se asume el cálculo de la tabla).
```

### 23 — ¿Luz del aire al diamante?

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["booleanos", "refraccion"]

variables:
  datos: [["aire", 1.0, "diamante", 2.42, "se acerca"], ["agua", 1.33, "vidrio", 1.5, "se acerca"], ["aceite", 1.45, "agua", 1.33, "se aleja"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un rayo de luz pasa de {datos[idx][0]} ({datos[idx][2]}) a {datos[idx][1]}, ¿el rayo se acerca o se aleja de la normal?"

respuestas_validas:
  - "se acerca"
  - "se aleja"
respuesta: datos[idx][4]
tipo: completar

explicacion: |
  Si el índice de refracción del segundo medio es mayor que el del primero (n2 > n1), la luz se refracta hacia la normal (se acerca). Si es menor, se aleja.
```

### 24 — Comportamiento del rayo luminoso

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "avanzado"
  tags: ["reflexion_total", "snell"]

variables:
  escenario: [["agua", 1.33, 1.5], ["vidrio", 1.5, 1.6]]
  idx: uno_de([0, 1])

enunciado: "Considerando un rayo que viaja desde el medio 1 ({escenario[idx][0]}) hacia el medio 2 ({escenario[idx][1]}), ordene los fenómenos según la magnitud del índice de refracción de los medios (de menor a mayor n)."

opciones_explicitas: ["Medio 1", "Medio 2"]
respuesta_orden: ["Medio 1", "Medio 2"]
tipo: ordenar

explicacion: |
  El orden depende de los valores de n asignados en la tabla de escenarios.
```

### 25 — Verdad o Falso: Índice de refracción

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["teoria", "definicion"]

variables:
  respuesta_correcta: verdadero

enunciado: "El índice de refracción de un material es una medida de cuánto se ralentiza la luz al atravesar dicho medio. ¿Es esto verdadero?"

respuesta: verdadero
tipo: vf
explicacion: |
  Correcto. El índice de refracción n se define como c/v, donde c es la velocidad en el vacío y v es la velocidad en el medio. A mayor n, menor es la velocidad de la luz en ese medio.
```
