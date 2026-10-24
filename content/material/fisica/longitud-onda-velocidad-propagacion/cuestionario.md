# Fisica — Longitud onda velocidad propagacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de longitud de onda

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["onda", "definicion"]

tipo: mc
opciones_explicitas: ["La distancia entre dos crestas consecutivas", "La velocidad de la perturbación", "El tiempo que tarda una onda en pasar", "La amplitud máxima de la onda"]

respuesta: "La distancia entre dos crestas consecutivas"

enunciado: "En una onda transversal, la longitud de onda (λ) se define como ___."

explicacion: |
  La longitud de onda es la distancia física entre dos puntos equivalentes consecutivos de una onda, como dos crestas o dos valles.
```

### 2 — Relación de proporcionalidad

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["proporcionalidad", "formula"]

tipo: vf

enunciado: "Si la frecuencia de una onda se duplica y la velocidad de propagación se mantiene constante, la longitud de onda debe reducirse a la mitad."

respuesta: verdadero

explicacion: |
  De la fórmula v = λ · f, despejamos λ = v / f. Si la frecuencia aumenta, la longitud de onda disminuye inversamente.
```

### 3 — Cálculo de velocidad de onda

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["calculo", "velocidad"]

variables:
  escenario: uno_de([[0.5, 10], [2.0, 20], [5.0, 50]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Una onda tiene una longitud de onda de {escenario[0]} metros y una frecuencia de {escenario[1]} Hz. ¿Cuál es su velocidad de propagación en m/s?"

pasos:
  - "Identificar la longitud de onda (λ): {escenario[0]} m"
  - "Identificar la frecuencia (f): {escenario[1]} Hz"
  - "Aplicar la fórmula v = λ * f"

respuesta: escenario[0] * escenario[1]

explicacion: |
  Usando la fórmula v = λ * f:
  v = {escenario[0]} m * {escenario[1]} Hz = {escenario[0] * escenario[1]} m/s.
```

### 4 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

tipo: completar
respuestas_validas:
  - "m/s"

respuesta: "m/s"

enunciado: "En el Sistema Internacional, la unidad de la velocidad de propagación de una onda es ___."

explicacion: |
  La velocidad es la relación entre la distancia (metros, m) y el tiempo (segundos, s), por lo tanto, su unidad es m/s.
```

### 5 — Componentes de la onda

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["ordenar", "partes_onda"]

tipo: ordenar
opciones_explicitas: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

respuesta_orden: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

enunciado: "Ordena las partes de una onda de forma descendente, desde el punto más alto hasta el punto más bajo, y vuelve a subir:"

explicacion: |
  La secuencia lógica desde el máximo es: Cresta (máximo) -> Punto de equilibrio (centro) -> Valle (mínimo) -> Cresta (regreso al máximo).
```

### 6 — Relación fundamental

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "v = lambda * f"
tipo: completar
respuestas_validas:
  - "v = lambda * f"
  - "v = λ * f"
  - "v = lambda * f"

enunciado: "La velocidad de propagación de una onda ($v$) se define como el producto de la longitud de onda ($\\lambda$) por la ___."

explicacion: |
  La relación fundamental para ondas es $v = \lambda \cdot f$, donde $v$ es la velocidad, $\lambda$ la longitud de onda y $f$ la frecuencia.
```

### 7 — Cálculo de velocidad

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[5, 20], [10, 25], [8, 50]])

respuesta: escenario[0] * escenario[1]
tipo: mc
opciones_explicitas: [100, 250, 400, 500]

enunciado: "Una onda tiene una longitud de onda de {escenario[0]} m y una frecuencia de {escenario[1]} Hz. ¿Cuál es su velocidad de propagación (en m/s)?"

pasos:
  - "Identificar los datos: λ = {escenario[0]} m y f = {escenario[1]} Hz."
  - "Aplicar la fórmula: v = λ · f."
  - "Calcular: v = {escenario[0]} · {escenario[1]} = {escenario[0] * escenario[1]} m/s."

explicacion: |
  Usando la fórmula $v = \lambda \cdot f$, multiplicamos la longitud de onda por la frecuencia para obtener la velocidad.
```

### 8 — Despeje de longitud de onda

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["despeje"]

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una onda sonora viaja a una velocidad de $340$ m/s y su frecuencia es de $170$ Hz, ¿cuál es su longitud de onda en metros?"

pasos:
  - "Despejar la fórmula original: $\\lambda = v / f$."
  - "Sustituir valores: $\\lambda = 340 / 170$."
  - "Resultado: $\\lambda = 2$ m."

explicacion: |
  Al despejar la longitud de onda, la frecuencia pasa dividiendo al otro lado de la igualdad.
```

### 9 — Verdad o Falso: Relación de proporcionalidad

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad de una onda se mantiene constante (como en el vacío para la luz) y la frecuencia aumenta, la longitud de onda debe aumentar también."

explicacion: |
  Falso. Si $v$ es constante, $\lambda$ y $f$ son inversamente proporcionales ($\lambda = v/f$). Si la frecuencia aumenta, la longitud de onda disminuye.
```

### 10 — Orden de resolución de problema

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado"]
tipo: ordenar
opciones_explicitas: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de velocidad de onda."

explicacion: |
  Para resolver problemas físicos, primero debemos extraer los datos, elegir la ecuación correcta, realizar la sustitución y finalmente operar matemáticamente.
```

### 11 — La confusión de las unidades

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "conceptos_basicos"]

respuesta: "m/s"
tipo: completar
respuestas_validas:
  - "m/s"

enunciado: "Para calcular la velocidad de una onda usando la fórmula $v = \\lambda \\cdot f$, si la longitud de onda $\\lambda$ está en metros (m) y la frecuencia $f$ está en Hertz (Hz), la unidad resultante para la velocidad será ___."

pasos:
  - "Identificar las unidades de los componentes: $\\lambda$ [m] y $f$ [1/s]."
  - "Multiplicar las unidades: $m \\cdot (1/s) = m/s$."

explicacion: |
  El error común es confundir la unidad de velocidad con la de frecuencia o longitud. La velocidad es la distancia recorrida por la fase de la onda por unidad de tiempo, por lo tanto, se mide en metros por segundo (m/s).
```

### 12 — Relación inversa: Frecuencia vs Longitud

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["relacion_inversa", "ondas"]

respuesta: verdadero
tipo: vf
enunciado: "En un medio donde la velocidad de propagación es constante, si la frecuencia de una onda se duplica, su longitud de onda se reduce a la mitad. ¿Es esto correcto?"

explicacion: |
  Dado que $v = \lambda \cdot f$ y $v$ es constante, la relación entre $\lambda$ y $f$ es inversamente proporcional. Si $f$ aumenta, $\lambda$ debe disminuir para mantener el producto constante.
```

### 13 — El error de la velocidad de fase

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["velocidad_fase", "error_comun"]

variables:
  v_onda: 340.0
  f_onda: 170.0

respuesta: "340"
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un estudiante afirma que si una onda tiene una frecuencia de {f_onda} Hz y una longitud de onda de 2 metros, su velocidad es de 340 m/s. ¿Cuál es el valor real de la velocidad en m/s?"

pasos:
  - "Aplicar la fórmula $v = \\lambda \\cdot f$."
  - "Calcular $2 \\cdot 170 = 340$."

explicacion: |
  En este caso, el estudiante tenía razón. El error común es olvidar que la velocidad depende de la frecuencia y la longitud de onda simultáneamente; si cambias una sin ajustar la otra, la velocidad cambia.
```

### 14 — Identificación de variables

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["simbolos", "definiciones"]

respuesta: "longitud de onda"
tipo: mc

opciones_explicitas: ["frecuencia", "longitud de onda", "amplitud", "periodo"]

enunciado: "En la ecuación de la velocidad de propagación de una onda, el símbolo $\\lambda$ representa la ___."

explicacion: |
  Es fundamental distinguir entre $\lambda$ (longitud de onda, distancia entre crestas consecutivas) y $A$ (amplitud, que es la altura de la cresta).
```

### 15 — El orden de los factores

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["despeje", "algebra"]

respuesta_orden: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]
tipo: ordenar

opciones_explicitas: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]

enunciado: "Ordena las fórmulas para despejar cada variable de la ecuación fundamental de la onda, partiendo de la velocidad."

pasos:
  - "La fórmula original es $v = \\lambda \\cdot f$."
  - "Para despejar $f$, pasamos $\\lambda$ dividiendo: $f = v / \\lambda$."
  - "Para despejar $\\lambda$, pasamos $f$ dividiendo: $\\lambda = v / f$."

explicacion: |
  El error común es intentar despejar de forma incorrecta (por ejemplo, intentar pasar una frecuencia restando). Recuerda que en la fórmula original, la frecuencia y la longitud de onda se están multiplicando.
```

### 16 — Diferencia entre frecuencia y longitud de onda

```
metadata:
  materia: "fisica"
  tema: "relacion_longitud_frecuencia"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: "inversamente"
tipo: completar
respuestas_validas:
  - "inversamente"
  - "inversa"

enunciado: "En una onda de velocidad constante, si la frecuencia aumenta, la longitud de onda debe variar de forma ___ a la frecuencia."

explicacion: |
  Como la velocidad de propagación es $v = \lambda \cdot f$, si la velocidad es constante, la longitud de onda ($\lambda$) y la frecuencia ($f$) son inversamente proporcionales. Si una sube, la otra baja.
```

### 17 — Identificación de la velocidad de fase

```
metadata:
  materia: "fisica"
  tema: "velocidad_propagacion"
  nivel: "intermedio"
  tags: ["ondas", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[300, 10, 3000], [340, 500, 170000]]

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: [3000, 170000, 300, 340]

enunciado: "Considera el siguiente caso: una onda tiene una longitud de onda de {datos[escenario_idx][0]} metros y una frecuencia de {datos[escenario_idx][1]} Hz. ¿Cuál es su velocidad de propagación?"

pasos:
  - "Identificar la longitud de onda (λ): {datos[escenario_idx][0]} m"
  - "Identificar la frecuencia (f): {datos[escenario_idx][1]} Hz"
  - "Aplicar la fórmula v = λ · f"

explicacion: |
  Utilizando la fórmula $v = \lambda \cdot f$:
  Caso 1: $300 \cdot 10 = 3000$ m/s.
  Caso 2: $340 \cdot 500 = 170000$ m/s.
```

### 18 — Naturaleza de la velocidad de fase

```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "basico"
  tags: ["conceptos", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la velocidad de propagación de una onda una propiedad que depende exclusivamente del medio por el cual se desplaza (y no de la frecuencia de la fuente) en un medio no dispersivo?"

explicacion: |
  En un medio no dispersivo (como el vacío para la luz), la velocidad de propagación es constante para todas las frecuencias. En medios dispersivos, la velocidad sí puede depender de la frecuencia.
```

### 19 — Componentes de la ecuación de onda

```
metadata:
  materia: "fisica"
  tema: "componentes_ecuacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "En la ecuación de la velocidad de propagación $v = \\lambda \\cdot f$, el término $f$ representa la ___."

explicacion: |
  La letra $f$ representa la frecuencia, que es el número de ciclos por unidad de tiempo.
```

### 20 — Orden de magnitudes en la propagación

```
metadata:
  materia: "fisica"
  tema: "relacion_magnitudes"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["longitud_onda", "velocidad", "frecuencia"]
tipo: ordenar
opciones_explicitas: ["frecuencia", "velocidad", "longitud_onda"]

enunciado: "Ordena las siguientes magnitudes de menor a mayor, considerando una onda de sonido en el aire con una frecuencia de 440 Hz (una nota musical):"

pasos:
  - "Estimar la frecuencia ($f$): 440 Hz"
  - "Estimar la velocidad ($v$): ~340 m/s"
  - "Estimar la longitud de onda ($\\lambda = v/f$): ~0.77 m"

explicacion: |
  Para una onda de sonido estándar:
  1. La frecuencia es 440 (valor numérico).
  2. La velocidad es ~340 m/s.
  3. La longitud de onda es ~0.77 m.
  *Nota: El orden se basa en la magnitud de los valores numéricos resultantes en unidades SI para este escenario específico.*
```

### 21 — Onda de sonido en un instrumento

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "longitud_onda"]

variables:
  escenario: uno_de([[130, 0.5, 260], [440, 1.0, 440], [256, 2.0, 128]])
  v_sonido: 340

respuesta: v_sonido / escenario[0]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un músico toca una nota cuya frecuencia es de {escenario[0]} Hz. Si la velocidad del sonido en el aire es de {v_sonido} m/s, ¿cuál es la longitud de onda λ en metros?"

pasos:
  - "Identificar la fórmula de velocidad: v = λ · f"
  - "Despejar la longitud de onda: λ = v / f"
  - "Sustituir los valores: λ = {v_sonido} / {escenario[0]}"

explicacion: |
  La longitud de onda se calcula dividiendo la velocidad de propagación por la frecuencia: λ = v / f.
  Para este caso: {v_sonido} / {escenario[0]} = {redondear(v_sonido / escenario[0], 2)} m.
```

### 22 — Radiofrecuencia en comunicaciones

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["radio", "electromagnetismo"]

variables:
  datos: [[100000000, 3.0e8, 3.0], [50000000, 3.0e8, 6.0], [1000000000, 3.0e8, 0.3]]
  idx: uno_de([0, 1, 2])
  frecuencia: datos[idx][0]
  velocidad: datos[idx][1]
  lambda_correcta: datos[idx][2]

respuesta: lambda_correcta
tipo: mc
opciones_explicitas: [0.3, 3.0, 6.0, 300.0]

enunciado: "Una antena de radio emite una señal con una frecuencia de {frecuencia} Hz. Si la señal viaja a la velocidad de la luz ({velocidad} m/s), ¿cuál es la longitud de onda de la radiación (en metros)?"

explicacion: |
  Usando λ = v / f:
  λ = {velocidad} / {frecuencia} = {lambda_correcta} m.
```

### 23 — El fenómeno de la difracción

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si la frecuencia de una onda aumenta pero su velocidad de propagación se mantiene constante, la longitud de onda λ debe disminuir."

explicacion: |
  Dado que v = λ · f, la frecuencia y la longitud de onda son inversamente proporcionales para una velocidad constante. Si f aumenta, λ disminuye.
```

### 24 — Análisis de ondas marinas

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["oceanografia", "calculo"]

variables:
  caso: uno_de([[0.5, 12, 24], [2.0, 10, 5], [0.2, 15, 75]])
  f_onda: caso[0]
  v_onda: caso[1]
  l_onda: caso[2]

respuesta: l_onda
tipo: completar
respuestas_validas:
  - 24.0
  - 5.0
  - 75.0

enunciado: "En un estudio oceanográfico se observa una onda con una frecuencia de {f_onda} Hz que se desplaza a una velocidad de {v_onda} m/s. La longitud de onda medida es de ___ m."

explicacion: |
  Aplicando la relación λ = v / f:
  λ = {v_onda} / {f_onda} = {l_onda} m.
```

### 25 — Procedimiento de cálculo de λ

```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Dividir la velocidad por la frecuencia", "Multiplicar la velocidad por la frecuencia", "Sumar la velocidad y la frecuencia", "Dividir la frecuencia por la velocidad"]

respuesta: "Dividir la velocidad por la frecuencia"
tipo: mc

enunciado: "Para hallar la longitud de onda (λ) conociendo la velocidad (v) y la frecuencia (f), el procedimiento matemático correcto es:"

explicacion: |
  Partiendo de la fórmula v = λ · f, despejamos λ pasando la frecuencia a dividir al otro lado de la igualdad: λ = v / f.
```
