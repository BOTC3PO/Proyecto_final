### 1 — Diferencia entre vida media y constante de desintegración
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "lambda"
tipo: completar
respuestas_validas: ["lambda", "lambda_constante"]

enunciado: "En el modelo de desintegración radiactiva, mientras que la semivida ($T_{1/2}$) es el tiempo necesario para que la actividad se reduzca a la mitad, la ___ representa la probabilidad de desintegración por unidad de tiempo."

explicacion: |
  La constante de desintegración ($\lambda$) y la semivida ($T_{1/2}$) están relacionadas inversamente por la expresión: $\lambda = \ln(2) / T_{1/2}$.
```

### 2 — Relación entre actividad y tiempo
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

### 3 — Naturaleza del decaimiento
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

### 4 — Comparación de escalas temporales
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "orden"]

respuesta: ["vida_media_larga", "vida_media_corta"]
tipo: ordenar
opciones_explicitas: ["vida_media_larga", "vida_media_corta"]

enunciado: "Ordena estos conceptos de mayor a menor duración temporal (de la que tarda más en reducirse a la mitad a la que tarda menos):"

explicacion: |
  La semivida es una medida de la estabilidad del isótopo; a mayor semivida, mayor es el tiempo necesario para que la muestra decaiga significativamente.
```

### 5 — El concepto de actividad residual
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenario: [["10", "2"], ["20", "3"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["10", "5", "2.5", "20", "10", "5"]

enunciado: "Considerando un escenario donde una muestra de {escenario[idx][0]} átomos tiene una semivida de 5 años, ¿cuántos átomos quedarán después de transcurrir {escenario[idx][1]} semividas?"

pasos:
  - "Identificar la cantidad inicial de núcleos."
  - "Calcular el factor de reducción: (1/2)^n, donde n es el número de semividas."
  - "Multiplicar la cantidad inicial por dicho factor."

explicacion: |
  Tras $n$ semividas, la cantidad de núcleos es $N = N_0 \cdot (1/2)^n$. En este caso, $\{escenario[idx][0]\} \cdot (0.5)^{{escenario[idx][1]}}$.
```