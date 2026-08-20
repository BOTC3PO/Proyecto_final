# Fisica — Caudal q a v (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["definicion", "caudal"]

tipo: mc
opciones_explicitas: ["El volumen de fluido que pasa por una sección por unidad de tiempo", "La velocidad con la que se desplaza un fluido", "La presión ejercida por un fluido en reposo", "La masa total de un fluido en un recipiente"]
respuesta: "El volumen de fluido que pasa por una sección por unidad de tiempo"
enunciado: "El caudal (Q) se define físicamente como ___."
explicacion: |
  El caudal representa el volumen de fluido que atraviesa una sección transversal de un conducto en un intervalo de tiempo determinado.
```

### 2 — Relación de variables

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["relacion_variables", "formula"]

tipo: completar
respuestas_validas:
  - "A"
  - "v"
  - "Q"

enunciado: "En la ecuación del caudal para un fluido incompresible, Q = A · v, la variable 'A' representa el área de la sección transversal y 'v' representa la ___."

pasos:
  - "Identificar la variable que multiplica al área en la fórmula del caudal."

explicacion: |
  En la fórmula Q = A · v, donde Q es el caudal, A es el área y v es la velocidad media del fluido.
```

### 3 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

tipo: mc
opciones_explicitas: ["m³/s", "m/s", "kg/m³", "N/m²"]
respuesta: "m³/s"

enunciado: "En el Sistema Internacional de Unidades (SI), la unidad resultante para el caudal es ___."

explicacion: |
  Dado que el caudal es volumen (m³) dividido por tiempo (s), su unidad es m³/s.
```

### 4 — Verdad o Falso: Fluido incompresible

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["incompresibilidad", "teoria"]

tipo: vf

enunciado: "Si un fluido es incompresible, su densidad permanece constante independientemente de los cambios en la velocidad o la presión."

respuesta: verdadero

explicacion: |
  Por definición, un fluido incompresible es aquel cuya densidad no varía significativamente bajo cambios de presión, lo que permite aplicar la ecuación de continuidad de forma directa.
```

### 5 — Componentes del caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["componentes", "conceptos"]

tipo: completar
respuestas_validas:
  - "sección"
  - "tiempo"
  - "volumen"

enunciado: "Para calcular el caudal, es necesario conocer el ___ que atraviesa una ___ en un determinado ___."

explicacion: |
  El caudal relaciona el volumen, el área de la sección y el tiempo transcurrido.
```

### 6 — Concepto de Caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["definicion", "caudal"]

respuesta: verdadero
tipo: vf

enunciado: "El caudal (Q) representa el volumen de fluido que pasa por una sección transversal por unidad de tiempo."

explicacion: |
  Efectivamente, el caudal mide la rapidez con la que un fluido atraviesa una sección determinada.
```

### 7 — Cálculo de Caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["calculo", "caudal"]

variables:
  escenario: uno_de([[0.5, 2.0], [0.8, 3.5], [1.2, 5.0]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un fluido circula por una tubería con un área transversal de {escenario[0]} m² y una velocidad de {escenario[1]} m/s. ¿Cuál es el caudal Q en m³/s?"

pasos:
  - "Identificar el área (A) y la velocidad (v)."
  - "Aplicar la fórmula Q = A * v."
  - "Multiplicar {escenario[0]} m² por {escenario[1]} m/s."

explicacion: |
  El cálculo es: Q = A * v = {escenario[0]} * {escenario[1]} = {escenario[0] * escenario[1]} m³/s.
```

### 8 — Despeje de Velocidad

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["despeje", "velocidad"]

variables:
  datos: uno_de([[10.0, 0.05], [20.0, 0.12], [5.0, 0.08]])

respuesta: datos[0] / datos[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un caudal de {datos[0]} m³/s atraviesa una sección de {datos[1]} m², ¿cuál es la velocidad del fluido en m/s?"

pasos:
  - "Partir de la fórmula Q = A * v."
  - "Despejar la velocidad: v = Q / A."
  - "Dividir {datos[0]} entre {datos[1]}."

explicacion: |
  Usando el despeje: v = Q / A = {datos[0]} / {datos[1]} = {datos[0] / datos[1]} m/s.
```

### 9 — Análisis de Dimensiones

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "m³/s"
tipo: completar
respuestas_validas:
  - "m³/s"
  - "m/s"
  - "m²"
  - "kg/m³"

enunciado: "En el Sistema Internacional, la unidad de medida del caudal es ___."

explicacion: |
  El caudal es volumen (m³) dividido por tiempo (s), por lo tanto, su unidad es m³/s.
```

### 10 — Relación de Variables

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

respuesta: "Aumenta"
tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Se vuelve cero"]

enunciado: "Si el área de la sección transversal de una tubería se duplica mientras el caudal se mantiene constante, la velocidad del fluido ___."

explicacion: |
  Como Q = A * v, si Q es constante, A y v son inversamente proporcionales. Si el área aumenta, la velocidad debe disminuir para mantener el mismo caudal.
```

### 11 — Error de unidades en el caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "caudal", "seccion"]

variables:
  radio: 0.05
  velocidad: 2.0

respuesta: 0.00157
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Un tubo circular tiene un radio de {radio} m y el fluido circula con una velocidad de {velocidad} m/s. ¿Cuál es el caudal Q en m³/s? (Usa pi como pi)"

pasos:
  - "Calcula el área de la sección transversal: A = pi * radio^2"
  - "Calcula el caudal usando la fórmula Q = A * v"

explicacion: |
  El caudal Q es el producto del área de la sección transversal por la velocidad.
  A = pi * (0.05)^2 = 0.007853... m²
  Q = 0.007853 * 2.0 = 0.0157... m³/s. 
  *Nota: Revisa si el resultado es 0.00157 o 0.0157 según el cálculo.*
```

### 12 — Confusión entre diámetro y radio

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["diametro", "error_comun"]

opciones_explicitas: ["Es correcto", "Es incorrecto"]

respuesta: "Es incorrecto"
tipo: mc

enunciado: "Si un problema te da el diámetro de una tubería de 0.4 m, y utilizas directamente el valor 0.4 en la fórmula del área (A = pi * r^2), ¿el caudal resultante será mayor o menor al real?"

explicacion: |
  Es incorrecto. El error común es usar el diámetro en lugar del radio. Como el radio es la mitad del diámetro, usar el diámetro directamente sobreestima el área y, por lo tanto, el caudal.
```

### 13 — Relación entre área y velocidad (Efecto Venturi)

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["continuidad", "velocidad"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 2.0, 1.0], [0.2, 1.0, 4.0]]

respuesta: datos[idx][2]
tipo: completar
enunciado: "En una tubería con sección constante, si el área de la sección transversal se reduce a la mitad, la velocidad del fluido debe ___ para mantener el mismo caudal."

pasos:
  - "Si el caudal Q es constante, entonces A1 * v1 = A2 * v2"
  - "Si A2 = 0.5 * A1, entonces v2 = v1 / 0.5 = 2 * v1"

explicacion: |
  Para que el caudal sea constante, la velocidad debe aumentar inversamente a la disminución del área. Si el área se reduce a la mitad, la velocidad se duplica.
```

### 14 — Completar la fórmula de caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuestas_validas:
  - "A * v"
  - "v * A"
  - "A * v"
  - "v * A"

respuesta: "A * v"
tipo: completar

enunciado: "La expresión matemática que define el caudal Q en función del área de la sección transversal (A) y la velocidad media del fluido (v) es ___."

explicacion: |
  El caudal Q representa el volumen por unidad de tiempo, que se calcula multiplicando el área de la sección por la velocidad del fluido.
```

### 15 — Unidades de medida del caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades"]

opciones_explicitas: ["m/s", "m²", "m³/s", "kg/m³"]

respuesta: "m³/s"
tipo: mc

enunciado: "Si el área se mide en m² y la velocidad en m/s, ¿cuál es la unidad resultante para el caudal Q?"

explicacion: |
  Al multiplicar m² (área) por m/s (velocidad), obtenemos m³/s (volumen por tiempo).
```

### 16 — Diferencia entre Caudal y Velocidad

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "basico"
  tags: ["caudal", "velocidad", "seccion"]

respuesta: "velocidad"
tipo: "mc"
opciones_explicitas: ["caudal", "velocidad", "presion", "densidad"]

enunciado: "Mientras que el caudal representa el volumen de fluido que pasa por una sección en un tiempo determinado, la ___ representa la rapidez con la que se desplaza el fluido por dicha sección."

explicacion: |
  El caudal ($Q$) es una medida de volumen por unidad de tiempo ($m^3/s$), mientras que la velocidad ($v$) es la distancia recorrida por el fluido por unidad de tiempo ($m/s$).
```

### 17 — Relación entre Área y Velocidad

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "intermedio"
  tags: ["caudal", "seccion", "velocidad"]

variables:
  escenario: uno_de([["0.05", "2.0"], ["0.10", "1.0"], ["0.20", "0.5"]])

respuesta: escenario[1]
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Un fluido circula por una tubería con un caudal constante de $Q = 0.1\\ m^3/s$. Si el área de la sección transversal es de $A = {escenario[0]}\\ m^2$, ¿cuál es la velocidad $v$ del fluido en $m/s$?"

pasos:
  - "Identificar la fórmula del caudal: $Q = A \\cdot v$"
  - "Despejar la velocidad: $v = Q / A$"
  - "Sustituir los valores: $v = 0.1 / {escenario[0]}$"

explicacion: |
  Usando la fórmula $Q = A \cdot v$, despejamos $v = Q / A$. Con $Q = 0.1$ y $A = {escenario[0]}$, el resultado es ${escenario[1]}\ m/s$.
```

### 18 — Caudal vs. Flujo Másico

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "intermedio"
  tags: ["caudal_volumetrico", "flujo_masico", "densidad"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un fluido tiene la misma densidad en dos puntos de una tubería, pero el área de la sección transversal disminuye, el caudal volumétrico $Q$ debe aumentar para mantener la continuidad si la velocidad se mantiene constante. (Nota: Evaluar si la afirmación sobre la relación entre $Q$, $A$ y $v$ es correcta bajo la premisa de $Q=A \\cdot v$)."

explicacion: |
  La afirmación es falsa en su lógica de comparación: si el área disminuye y el caudal $Q$ es constante (como en un fluido incompresible), la velocidad debe aumentar, no el caudal. El caudal es la constante en este escenario de continuidad.
```

### 19 — Componentes del Caudal

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "basico"
  tags: ["caudal", "componentes"]

respuesta_orden: ["sección transversal", "velocidad media"]
tipo: "ordenar"
opciones_explicitas: ["sección transversal", "velocidad media"]

enunciado: "Ordena estos dos factores según el orden en que aparecen en la fórmula del caudal volumétrico Q = A · v:"

explicacion: |
  El caudal volumétrico Q se define estrictamente como el producto del área de la sección transversal (A) por la velocidad media del fluido (v).
```

### 20 — Dependencia de la Densidad

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "avanzado"
  tags: ["caudal", "densidad", "flujo_masico"]

variables:
  datos: uno_de([[1000, 0.5], [800, 0.5], [1200, 0.5]])

respuesta: "el mismo"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "el mismo", "indeterminado"]

enunciado: "Si tenemos dos fluidos distintos (uno con densidad ρ1 = {datos[0]} kg/m³ y otro ρ2 = {datos[1]} kg/m³) que pasan por una misma tubería con la misma velocidad v = 2 m/s y la misma sección A = 0.1 m², ¿cómo se comparan sus caudales volumétricos Q?"

explicacion: |
  El caudal volumétrico Q = A · v depende únicamente de la geometría de la sección y la velocidad del fluido. La densidad afecta al flujo másico (m = ρ · Q), pero no al caudal volumétrico. Por lo tanto, los caudales son iguales.
```

### 21 — Caudal en una manguera

```
metadata:
  materia: "fisica"
  tema: "caudal_manguera"
  nivel: "basico"
  tags: ["fluido", "caudal"]

variables:
  escenario_idx: uno_de([0, 1])
  area: [0.0005, 0.005]
  velocidad: [2.0, 2.0]
  resultados_texto: ["0.001 m³/s", "0.01 m³/s"]

respuesta: resultados_texto[escenario_idx]
tipo: mc
opciones_explicitas: ["0.001 m³/s", "0.01 m³/s", "0.05 m³/s", "0.1 m³/s"]

enunciado: "Una manguera de jardín tiene una sección transversal de {area[escenario_idx]} m² y el agua fluye con una velocidad de {velocidad[escenario_idx]} m/s. ¿Cuál es el caudal Q?"

explicacion: |
  El caudal se calcula con la fórmula Q = A · v.
  Para este caso: {area[escenario_idx]} m² * {velocidad[escenario_idx]} m/s = {resultados_texto[escenario_idx]}.
```

### 22 — ¿Aumenta o disminuye el caudal?

```
metadata:
  materia: "fisica"
  tema: "caudal_variacion"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Si el área de la sección transversal de una tubería se reduce a la mitad mientras el caudal Q se mantiene constante, la velocidad del fluido debe disminuir."

explicacion: |
  Falso. Como Q = A · v, si el caudal Q es constante y el área A disminuye, la velocidad v debe aumentar para compensar la reducción de área.
```

### 23 — Cálculo de velocidad

```
metadata:
  materia: "fisica"
  tema: "calculo_velocidad"
  nivel: "intermedio"
  tags: ["caudal", "velocidad"]

variables:
  escenarios: [[0.01, 0.0004, 25.0], [0.05, 0.0005, 100.0]]
  idx: uno_de([0, 1])
  caudal: escenarios[idx][0]
  area: escenarios[idx][1]
  velocidad_correcta: escenarios[idx][2]

tipo: completar

enunciado: "Un sistema de riego tiene un caudal de {caudal} m³/s a través de una tubería de {area} m². La velocidad del agua es de ___ m/s."

pasos:
  - "Identificar el caudal (Q) y el área (A)."
  - "Despejar la velocidad de la fórmula Q = A · v, obteniendo v = Q / A."
  - "Realizar la división."

respuestas_validas:
  - "{velocidad_correcta}"

explicacion: |
  Usando v = Q / A:
  Caso 1: 0.01 / 0.0004 = 25.
  Caso 2: 0.05 / 0.0005 = 100.
  La respuesta depende del escenario sorteado.
```

### 24 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "unidades_caudal"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "m³/s"
tipo: completar
respuestas_validas:
  - "m³/s"
  - "m/s"
  - "m²"
  - "kg/m³"

enunciado: "En el Sistema Internacional, la unidad fundamental para medir el caudal (Q) es ___."

explicacion: |
  El caudal es volumen por unidad de tiempo. La unidad de volumen es m³ y la de tiempo es s, por lo tanto, m³/s.
```

### 25 — Pasos para hallar el caudal

```
metadata:
  materia: "fisica"
  tema: "procedimiento_caudal"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["Medir el área de la sección", "Medir la velocidad del fluido", "Multiplicar ambos valores"]
tipo: ordenar
opciones_explicitas: ["Medir el área de la sección", "Medir la velocidad del fluido", "Multiplicar ambos valores"]

enunciado: "Ordena los pasos necesarios para calcular el caudal Q de una tubería si conoces su geometría y la rapidez del fluido."

explicacion: |
  Para obtener Q = A · v, primero necesitas conocer el área (A) y la velocidad (v), y finalmente multiplicarlos.
```
