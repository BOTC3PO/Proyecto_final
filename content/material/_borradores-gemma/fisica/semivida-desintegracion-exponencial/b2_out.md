### 1 — Concepto de semivida
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

### 2 — Relación entre constante y semivida
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["formula", "constante_desintegracion"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.693, "ln(2)"], [1.0, "1"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ln(2)", "1", "e", "0"]

enunciado: "La relación entre la constante de desintegración $\lambda$ y la semivida $T_{1/2}$ está dada por la expresión $\lambda = \frac{{___}}$."

explicacion: |
  La relación matemática es $\lambda = \frac{\ln(2)}{T_{1/2}}$. Por lo tanto, $T_{1/2} = \frac{\ln(2)}{\lambda}$.
```

### 3 — Cálculo de masa remanente
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  escenario: uno_de([
    [100, 2, 20], 
    [80, 3, 10], 
    [50, 1, 25]
  ])

respuesta: escenario[2]
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra de un isótopo radiactivo tiene una masa inicial de {escenario[0]} g. Si la semivida del isótopo es de {escenario[1]} años, ¿cuántos gramos de la muestra permanecerán después de {escenario[1] * 2} años?"

pasos:
  - "Calcular el número de periodos de semivida transcurridos: $n = t / T_{1/2}$"
  - "Aplicar la fórmula de desintegración: $N = N_0 \cdot (1/2)^n$"

explicacion: |
  1. El tiempo transcurrido es 2 veces la semivida ($n = 2$).
  2. La masa remanente es $N_0 \cdot (1/2)^2 = N_0 \cdot 1/4$.
  3. Si $N_0 = {escenario[0]}$, el resultado es {escenario[2]} g.
```

### 4 — Determinación del tiempo transcurrido
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["logaritmos", "tiempo"]

variables:
  caso: uno_de([
    [100, 25, 50],
    [200, 10, 50],
    [120, 20, 60]
  ])

respuesta: caso[2]
tipo: completar
respuestas_validas: ["50", "40", "60"]

enunciado: "Una muestra de sustancia radiactiva tiene una masa inicial de {caso[0]} g y una semivida de {caso[1]} años. Si actualmente la muestra tiene una masa de {caso[2]} g, ¿cuántos años han transcurrido?"

explicacion: |
  Para que la masa pase de {caso[0]} a {caso[2]}, la muestra debe haberse reducido a la mitad. 
  Esto ocurre exactamente después de 1 periodo de semivida. 
  Por lo tanto, han transcurrido {caso[1]} años.
```

### 5 — Secuencia de desintegración
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra"]
tipo: ordenar
opciones_explicitas: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra", "100% de la muestra", "0% de la muestra"]

enunciado: "Ordene los eventos según la cantidad de masa remanente de una muestra radiactiva a medida que transcurren periodos sucesivos de semivida (de mayor a menor masa)."

explicacion: |
  En cada semivida, la cantidad de material se reduce a la mitad:
  1. Inicio: 100%
  2. 1ra semivida: 50%
  3. 2da semivida: 25%
  4. 3ra semivida: 12.5%
```