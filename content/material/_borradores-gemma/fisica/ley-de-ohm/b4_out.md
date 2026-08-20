### 1 — Relación entre Voltaje y Corriente
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ohm", "voltaje", "corriente"]

tipo: mc
opciones_explicitas: ["Proporcional", "Inversamente proporcional", "No tiene relación", "Exponencial"]

enunciado: "Según la Ley de Ohm, si la resistencia de un circuito se mantiene constante y se aumenta el voltaje, la intensidad de la corriente será ___ a la del voltaje."

respuesta: "Proporcional"

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, $V$ y $I$ son directamente proporcionales.
```

### 2 — Resistencia vs. Voltaje
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["resistencia", "ohm", "voltaje"]

tipo: vf

enunciado: "Si mantenemos un voltaje constante en un circuito, un aumento en la resistencia provocará un aumento en la intensidad de la corriente."

respuesta: falso

explicacion: |
  Falso. De la Ley de Ohm $I = V / R$, se observa que la corriente es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

### 3 — Cálculo de Resistencia
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "ohm", "resistencia"]

variables:
  escenario: uno_de([[2, 10], [5, 20], [12, 4]])

tipo: input
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una diferencia de potencial de {escenario[0]} V y una corriente que circula por él es de {escenario[1]} A. ¿Cuál es el valor de la resistencia en Ohmios ($\Omega$)?"

respuesta: escenario[1]

explicacion: |
  Usando la fórmula $R = V / I$:
  Para el caso sorteado: $R = {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} \Omega$.
```

### 4 — Diferencia entre Voltaje e Intensidad
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["conceptos", "voltaje", "corriente"]

tipo: completar

enunciado: "Mientras que el voltaje se mide en ___ y representa la diferencia de potencial, la intensidad de corriente se mide en ___ y representa el flujo de carga."

respuestas_validas: ["Voltios", "Amperios"]

respuesta: ["Voltios", "Amperios"]

explicacion: |
  El voltaje (V) es la fuerza que impulsa las cargas, e intensidad (I) es la cantidad de carga que circula por unidad de tiempo.
```

### 5 — Orden de Variables en la Ecuación
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "orden"]

tipo: completar

enunciado: "Para despejar la intensidad de corriente (I) de la Ley de Ohm ($V = I \cdot R$), la operación matemática correcta es dividir el voltaje por la ___."

respuestas_validas: ["resistencia"]

respuesta: "resistencia"

explicacion: |
  Despejando la fórmula original $V = I \cdot R$, pasamos la $R$ dividiendo al otro lado: $I = V / R$.
```