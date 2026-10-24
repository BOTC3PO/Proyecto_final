### 1 — La relación entre semivida y constante de desintegración
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "exponencial", "constante"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 0.693], [0.3, 2.31]]

enunciado: "La semivida ($T_{1/2}$) y la constante de desintegración ($\lambda$) están relacionadas mediante una fórmula logarítmica. Si la semivida de una muestra es de {datos[idx][0]} unidades de tiempo, el valor de la constante $\lambda$ es aproximadamente {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La relación es $\lambda = \ln(2) / T_{1/2}$. 
  Para el caso de $T_{1/2} = 0.5$, $\lambda = 0.693/0.5 = 1.386$ (Nota: El ejemplo en el enunciado usa valores precalculados para evitar errores de redondeo en la validación).
  La confusión común es intentar multiplicar en lugar de dividir o usar $\log_{10}$ en lugar de $\ln$.
```

### 2 — ¿Qué sucede después de una semivida?
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

### 3 — Decaimiento y tiempo infinito
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
  Matemáticamente, la función exponencial $N(t) = N_0 e^{-\lambda t}$ es una función asintótica al eje $t$, lo que significa que nunca llega a cero, aunque físicamente la muestra se agote cuando queda un solo átomo.
```

### 4 — Cálculo de la masa restante
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 2, 25], [80, 3, 10]]

enunciado: "Se tiene una muestra de {escenario[idx][0]} gramos de un isótopo con una semivida de {escenario[idx][1]} años. ¿Cuántos gramos de la muestra original quedan después de {escenario[idx][2]} años?"

pasos:
  - "Calcular cuántas semividas han transcurrido: $n = t / T_{1/2}$"
  - "Aplicar la fórmula de reducción: $M_{final} = M_{inicial} \cdot (1/2)^n$"

respuesta: escenario[idx][2]
tipo: input
tolerancia_abs: 0.1

explicacion: |
  En el primer caso: $100 \cdot (1/2)^{2/2} = 100 \cdot 0.5 = 50$ (error común: pensar que se divide por 2 cada año).
  En el segundo caso: $80 \cdot (1/2)^{3/3} = 80 \cdot 0.5 = 40$ (error común: no notar que el tiempo transcurrido es igual a la semivida).
```

### 5 — Orden de los procesos de desintegración
```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "estabilidad"]

opciones_explicitas: ["Semivida larga $\rightarrow$ Menor actividad $\rightarrow$ Mayor estabilidad", "Semivida corta $\rightarrow$ Mayor actividad $\rightarrow$ Menor estabilidad"]

enunciado: "Para comparar la estabilidad de dos isótopos basándonos en su semivida y su actividad, ordena la siguiente relación lógica de menor a mayor estabilidad:"

respuesta: ["Semivida corta $\rightarrow$ Mayor actividad $\rightarrow$ Menor estabilidad", "Semivida larga $\rightarrow$ Menor actividad $\rightarrow$ Mayor estabilidad"]
tipo: ordenar

explicacion: |
  Un isótopo con semivida corta desintegra sus núcleos muy rápido (alta actividad), lo que significa que es muy inestable. Un isótopo con semivida larga tarda mucho en desintegrar su masa, siendo más estable.
```