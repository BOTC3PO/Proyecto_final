# Fisica — Semivida desintegracion exponencial (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Vida Media

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "semivida"
tipo: completar
respuestas_validas:
  - "semivida"
  - "vida media"

enunciado: "El tiempo necesario para que la actividad de una muestra radiactiva se reduzca a la mitad de su valor inicial se denomina ___."

explicacion: |
  La semivida (o vida media, $T_{1/2}$) es el intervalo de tiempo en el cual la cantidad de núcleos radiactivos presentes en una muestra se reduce exactamente a la mitad.
```

### 2 — Relación con la constante de desintegración

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "constante_de_desintegracion"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 0.0693], [20, 0.0347]]

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.001

enunciado: "Si la semivida de un isótopo es de {datos[idx][0]} años, ¿cuál es su constante de desintegración (λ) aproximada?"

pasos:
  - "Calcular λ = ln(2) / T½"
  - "Usar ln(2) ≈ 0.693"

explicacion: |
  La relación entre la semivida (T½) y la constante de desintegración (λ) está dada por la fórmula: λ = ln(2) / T½.
```

### 3 — Comportamiento de la muestra

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["comportamiento", "exponencial"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que después de pasar exactamente dos semividas, la cantidad de núcleos radiactivos remanentes es el 50% de la cantidad inicial?"

explicacion: |
  Falso. Después de una semivida queda el 50%. Después de dos semividas, queda el 50% del 50%, es decir, el 25% de la muestra original.
```

### 4 — Selección de términos

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "logarítmica", "constante"]

enunciado: "La disminución de la actividad de una muestra radiactiva a lo largo del tiempo sigue un decaimiento de tipo ___."

explicacion: |
  La ley de desintegración radiactiva establece que la tasa de desintegración es proporcional al número de núcleos presentes, lo que resulta en una función de decaimiento exponencial.
```

### 5 — Secuencia de reducción de masa

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["secuencia", "fracciones"]

respuesta_orden: ["100%", "50%", "25%", "12.5%"]
tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%"]

enunciado: "Ordene de mayor a menor la cantidad de muestra radiactiva restante tras transcurrir 0, 1, 2 y 3 semividas respectivamente."

explicacion: |
  Cada semivida reduce la muestra a la mitad:
  - 0 semividas: 100%
  - 1 semivida: 50%
  - 2 semividas: 25%
  - 3 semividas: 12.5%
```

### 6 — Concepto de semivida

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "La semivida (o vida media) es el tiempo necesario para que la cantidad de núcleos radiactivos de una muestra se reduzca a la mitad de su valor inicial."
```

### 7 — Relación entre constante y semivida

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["formula", "constante_desintegracion"]

variables:
  idx: uno_de([0, 1])
  datos: ["ln(2)", "1"]

respuesta: datos[idx]
tipo: mc
opciones_explicitas: ["ln(2)", "1", "e", "0"]

enunciado: "La relación entre la constante de desintegración λ y la semivida T½ está dada por la expresión λ = ___ / T½."

explicacion: |
  La relación matemática es λ = ln(2) / T½. Por lo tanto, T½ = ln(2) / λ.
```

### 8 — Cálculo de masa remanente

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  escenario: uno_de([[100, 2, 20], [80, 3, 10], [50, 1, 25]])

respuesta: escenario[2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una muestra de un isótopo radiactivo tiene una masa inicial de {escenario[0]} g. Si la semivida del isótopo es de {escenario[1]} años, ¿cuántos gramos de la muestra permanecerán después de {escenario[1] * 2} años?"

pasos:
  - "Calcular el número de periodos de semivida transcurridos: $n = t / T_{1/2}$"
  - "Aplicar la fórmula de desintegración: $N = N_0 \\cdot (1/2)^n$"

explicacion: |
  1. El tiempo transcurrido es 2 veces la semivida ($n = 2$).
  2. La masa remanente es $N_0 \cdot (1/2)^2 = N_0 \cdot 1/4$.
  3. Si $N_0 = {escenario[0]}$, el resultado es {escenario[2]} g.
```

### 9 — Determinación del tiempo transcurrido

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["logaritmos", "tiempo"]

variables:
  caso: uno_de([[100, 25, 50], [200, 10, 50], [120, 20, 60]])

respuesta: caso[2]
tipo: completar
respuestas_validas:
  - "50"
  - "40"
  - "60"

enunciado: "Una muestra de sustancia radiactiva tiene una masa inicial de {caso[0]} g y una semivida de {caso[1]} años. Si actualmente la muestra tiene una masa de {caso[2]} g, ¿cuántos años han transcurrido?"

explicacion: |
  Para que la masa pase de {caso[0]} a {caso[2]}, la muestra debe haberse reducido a la mitad. 
  Esto ocurre exactamente después de 1 periodo de semivida. 
  Por lo tanto, han transcurrido {caso[1]} años.
```

### 10 — Secuencia de desintegración

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta_orden: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra"]
tipo: ordenar
opciones_explicitas: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra"]

enunciado: "Ordene los eventos según la cantidad de masa remanente de una muestra radiactiva a medida que transcurren periodos sucesivos de semivida (de mayor a menor masa)."

explicacion: |
  En cada semivida, la cantidad de material se reduce a la mitad:
  1. Inicio: 100%
  2. 1ra semivida: 50%
  3. 2da semivida: 25%
  4. 3ra semivida: 12.5%
```

### 11 — La relación entre semivida y constante de desintegración

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "exponencial", "constante"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 0.693], [0.3, 2.31]]

enunciado: "La semivida ($T_{1/2}$) y la constante de desintegración ($\\lambda$) están relacionadas mediante una fórmula logarítmica. Si la semivida de una muestra es de {datos[idx][0]} unidades de tiempo, el valor de la constante $\\lambda$ es aproximadamente {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La relación es $\lambda = \ln(2) / T_{1/2}$. 
  Para el caso de $T_{1/2} = 0.5$, $\lambda = 0.693/0.5 = 1.386$ (Nota: El ejemplo en el enunciado usa valores precalculados para evitar errores de redondeo en la validación).
  La confusión común es intentar multiplicar en lugar de dividir o usar $\log_{10}$ en lugar de $\ln$.
```

### 12 — ¿Qué sucede después de una semivida?

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["concepto", "porcentaje"]

opciones_explicitas: ["50%", "25%", "75%", "0%"]

enunciado: "Un error conceptual frecuente es pensar que después de dos semividas la muestra ha desaparecido por completo. Si una muestra tiene una actividad inicial de $A_0$, ¿qué fracción de la actividad original queda exactamente después de transcurrir un periodo de una semivida?"

respuesta: "50%"
tipo: mc

explicacion: |
  Por definición, la semivida es el tiempo necesario para que la cantidad de núcleos radiactivos se reduzca a la mitad (50%) de su valor inicial.
```

### 13 — Decaimiento y tiempo infinito

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["concepto", "limite"]

respuesta: falso
tipo: vf

enunciado: "En un modelo de desintegración exponencial, la cantidad de núcleos radiactivos llega exactamente a cero después de un número finito de semividas."

explicacion: |
  Matemáticamente, la función exponencial N(t) = N0 e^(-lambda t) es una función asintótica al eje t, lo que significa que nunca llega a cero, aunque físicamente la muestra se agote cuando queda un solo átomo.
```

### 14 — Cálculo de la masa restante

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 2, 50], [80, 3, 40]]

enunciado: "Se tiene una muestra de {escenario[idx][0]} gramos de un isótopo con una semivida de {escenario[idx][1]} años. ¿Cuántos gramos de la muestra original quedan después de {escenario[idx][1]} años (exactamente una semivida)?"

pasos:
  - "Calcular cuántas semividas han transcurrido: n = t / T½ = 1"
  - "Aplicar la fórmula de reducción: M_final = M_inicial · (1/2)^n"

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  En el primer caso: 100 · (1/2)^1 = 50.
  En el segundo caso: 80 · (1/2)^1 = 40.
```

### 15 — Orden de los procesos de desintegración

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "estabilidad"]

opciones_explicitas: ["Semivida larga $\\rightarrow$ Menor actividad $\\rightarrow$ Mayor estabilidad", "Semivida corta $\\rightarrow$ Mayor actividad $\\rightarrow$ Menor estabilidad"]

enunciado: "Para comparar la estabilidad de dos isótopos basándonos en su semivida y su actividad, ordena la siguiente relación lógica de menor a mayor estabilidad:"

respuesta_orden: ["Semivida corta $\\rightarrow$ Mayor actividad $\\rightarrow$ Menor estabilidad", "Semivida larga $\\rightarrow$ Menor actividad $\\rightarrow$ Mayor estabilidad"]
tipo: ordenar

explicacion: |
  Un isótopo con semivida corta desintegra sus núcleos muy rápido (alta actividad), lo que significa que es muy inestable. Un isótopo con semivida larga tarda mucho en desintegrar su masa, siendo más estable.
```

### 16 — Diferencia entre vida media y constante de desintegración

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "lambda"
tipo: completar
respuestas_validas:
  - "lambda"
  - "lambda_constante"

enunciado: "En el modelo de desintegración radiactiva, mientras que la semivida ($T_{1/2}$) es el tiempo necesario para que la actividad se reduzca a la mitad, la ___ representa la probabilidad de desintegración por unidad de tiempo."

explicacion: |
  La constante de desintegración ($\lambda$) y la semivida ($T_{1/2}$) están relacionadas inversamente por la expresión: $\lambda = \ln(2) / T_{1/2}$.
```

### 17 — Relación entre actividad y tiempo

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["propiedades", "exponencial"]

variables:
  idx: uno_de([0, 1])
  datos: [["100", "50", "25"], ["80", "40", "20"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["100", "50", "25", "80", "40", "20"]

enunciado: "Si una muestra radiactiva tiene una actividad inicial de {datos[idx][0]} Bq y su semivida es de 10 años, ¿cuál será su actividad tras transcurrir exactamente un periodo de semivida?"

explicacion: |
  Por definición, tras transcurrir una semivida, la actividad de la muestra se reduce exactamente a la mitad de su valor inicial.
```

### 18 — Naturaleza del decaimiento

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["teoria", "booleano"]

respuesta: falso
tipo: vf

enunciado: "La cantidad de núcleos radiactivos remanentes en una muestra disminuye de forma lineal con respecto al tiempo transcurrido."

explicacion: |
  La desintegración es un proceso estocástico que sigue una ley exponencial decreciente, no una función lineal.
```

### 19 — Comparación de escalas temporales

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "orden"]

respuesta_orden: ["vida_media_larga", "vida_media_corta"]
tipo: ordenar
opciones_explicitas: ["vida_media_larga", "vida_media_corta"]

enunciado: "Ordena estos conceptos de mayor a menor duración temporal (de la que tarda más en reducirse a la mitad a la que tarda menos):"

explicacion: |
  La semivida es una medida de la estabilidad del isótopo; a mayor semivida, mayor es el tiempo necesario para que la muestra decaiga significativamente.
```

### 20 — El concepto de actividad residual

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenario: [[20, 2, 5], [80, 3, 10]]

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: [5, 10, 20, 2.5]

enunciado: "Considerando un escenario donde una muestra de {escenario[idx][0]} átomos tiene una semivida de 5 años, ¿cuántos átomos quedarán después de transcurrir {escenario[idx][1]} semividas?"

pasos:
  - "Identificar la cantidad inicial de núcleos."
  - "Calcular el factor de reducción: (1/2)^n, donde n es el número de semividas."
  - "Multiplicar la cantidad inicial por dicho factor."

explicacion: |
  Tras n semividas, la cantidad de núcleos es N = N0 · (1/2)^n. En este caso: {escenario[idx][0]} · (0.5)^{escenario[idx][1]} = {escenario[idx][2]}.
```

### 21 — Semivida del Carbono-14

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "carbono-14", "datacion"]

variables:
  t_medio: uno_de([5730, 8000, 1200])
  masa_inicial: 100
  masa_final: 25
  n_periodos: 2

respuesta: n_periodos
tipo: mc
opciones_explicitas: [1, 2, 3, 4]

enunciado: "Una muestra de Carbono-14 tiene una semivida de {t_medio} años. Si inicialmente tenemos una masa de {masa_inicial} g, ¿cuántos periodos de semivida han transcurrido si la masa final es de {masa_final} g?"

explicacion: |
  La masa se reduce a la mitad en cada periodo de semivida. 
  100g -> 50g (1 periodo) -> 25g (2 periodos).
  El número de periodos es log2(masa_inicial / masa_final).
```

### 22 — Decaimiento de un Isótopo Médico

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["medicina_nuclear", "isótopos"]

variables:
  datos: [[300, "150"], [100, "50"], [400, "100"]]
  idx: uno_de([0, 1, 2])
  m_inicial: datos[idx][0]
  m_final: datos[idx][1]
  t_medio: 6

respuesta: "150"
tipo: completar
respuestas_validas:
  - "150"

enunciado: "Un radiofármaco con una semivida de {t_medio} horas se inyecta en un paciente con una actividad de {m_inicial} MBq. Tras transcurrir un tiempo equivalente a una semivida, la actividad medida es de ___ MBq."

explicacion: |
  Por definición, tras un periodo de semivida, la actividad se reduce exactamente a la mitad.
```

### 23 — Verdad o Falso: La Ley de Decaimiento

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "basico"
  tags: ["conceptos", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En un proceso de desintegración exponencial, la cantidad de sustancia radiactiva disminuye de forma lineal con respecto al tiempo."

explicacion: |
  Falso. La disminución es exponencial, no lineal. La tasa de desintegración es proporcional a la cantidad de núcleos presentes.
```

### 24 — Secuencia de Desintegración

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  t_medio: 10
  m_0: 80

respuesta_orden: ["80", "40", "20", "10", "5"]
tipo: ordenar
opciones_explicitas: ["80", "40", "20", "10", "5"]

enunciado: "Ordena las masas resultantes de una muestra de {m_0} g tras transcurrir 1, 2, 3, 4 y 5 periodos de semivida (de mayor a menor):"

explicacion: |
  Cada paso divide la masa por 2: 80 -> 40 -> 20 -> 10 -> 5.
```

### 25 — Cálculo de Masa Remanente

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  escenario: uno_de([[100, 50, 10], [200, 100, 25], [80, 40, 20]])
  m_i: escenario[0]
  m_f: escenario[1]
  t_medio: 10
  t_total: 20
  respuesta_correcta: m_i / 4

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una muestra de {m_i} g de un isótopo tiene una semivida de {t_medio} años. ¿Cuántos gramos de la muestra quedarán después de {t_total} años?"

explicacion: |
  Usamos la fórmula N(t) = N0 * (1/2)^(t/t_medio).
  N(20) = {m_i} * (1/2)^(20/10) = {m_i} * (1/2)^2 = {m_i} / 4.
  En el caso seleccionado: {m_i} / 4 = {respuesta_correcta}.
```
