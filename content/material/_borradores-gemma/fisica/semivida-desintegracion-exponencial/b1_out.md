### 1 — Concepto de Vida Media
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "semivida"
tipo: completar
respuestas_validas: ["semivida", "vida media"]

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
  datos: [["10", "0.0693"], ["20", "0.0347"]]

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0.001

enunciado: "Si la semivida de un isótopo es de {datos[idx][0]} años, ¿cuál es su constante de desintegración ($\lambda$) aproximada?"

pasos:
  - "Calcular $\lambda = \ln(2) / T_{1/2}$"
  - "Usar $\ln(2) \approx 0.693$"

explicacion: |
  La relación entre la semivida ($T_{1/2}$) y la constante de desintegración ($\lambda$) está dada por la fórmula: $\lambda = \frac{\ln(2)}{T_{1/2}}$.
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

respuesta: ["100%", "50%", "25%", "12.5%"]
tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "0%"]

enunciado: "Ordene de mayor a menor la cantidad de muestra radiactiva restante tras transcurrir 0, 1, 2 y 3 semividas respectivamente."

explicacion: |
  Cada semivida reduce la muestra a la mitad:
  - 0 semividas: 100%
  - 1 semivida: 50%
  - 2 semividas: 25%
  - 3 semividas: 12.5%
```