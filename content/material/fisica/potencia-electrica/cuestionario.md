# Fisica — Potencia electrica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Potencia Eléctrica

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "potencia"
tipo: "completar"
respuestas_validas:
  - "potencia"
  - "Potencia"

enunciado: "La rapidez con la que un dispositivo consume o transforma energía eléctrica en otro tipo de energía se denomina ___."

explicacion: |
  La potencia eléctrica mide la tasa de transferencia de energía por unidad de tiempo.
```

### 2 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "vatios"]

opciones_explicitas: ["Voltio (V)", "Amperio (A)", "Vatio (W)", "Ohmio (Ω)"]
respuesta: "Vatio (W)"
tipo: "mc"

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el:"

explicacion: |
  El vatio (W) se define como el trabajo realizado por una fuerza de un Newton a lo largo de un metro en un segundo, o equivalentemente, la potencia de un dispositivo que consume 1 Joule por segundo.
```

### 3 — Relación de Variables

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["relacion_variables", "formula"]

variables:
  voltajes: [12, 220, 10]
  corrientes: [2, 5, 0.5]
  resultados: [24, 1100, 5]
  idx: uno_de([0, 1, 2])
  v: voltajes[idx]
  i: corrientes[idx]
  p: resultados[idx]

respuesta: p
tipo: "input"
tolerancia_abs: 0

enunciado: "Si un dispositivo tiene un voltaje de {v} V y una intensidad de {i} A, ¿cuál es su potencia eléctrica en vatios?"

pasos:
  - "Identificar el voltaje (V) y la intensidad (I)."
  - "Aplicar la fórmula P = V · I."

explicacion: |
  Usando la fórmula P = V · I:
  P = {v}V · {i}A = {p}W.
```

### 4 — Veracidad de la Fórmula

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la potencia eléctrica es directamente proporcional a la resistencia cuando el voltaje se mantiene constante?"

explicacion: |
  Falso. Según la fórmula P = V²/R, si el voltaje (V) es constante, la potencia es inversamente proporcional a la resistencia (R). A mayor resistencia, menor potencia.
```

### 5 — Derivación de Fórmulas

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["formulas", "ley_ohm"]

opciones_explicitas: ["P = I · R", "P = V / R", "P = I² · R", "P = V² / R"]
respuesta: "P = I² · R"
tipo: "mc"

enunciado: "Combinando la Ley de Ohm (V = I · R) con la definición de potencia (P = V · I), obtenemos que la potencia también puede expresarse como:"

explicacion: |
  Sustituyendo V por (I · R) en la fórmula de potencia:
  P = (I · R) · I = I² · R.
```

### 6 — Cálculo de potencia básica

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  datos: [[12, 2], [24, 3], [10, 5], [220, 2]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  i: datos[idx][1]
  p: v * i

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuente de alimentación entrega un voltaje de {v} V y una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por el dispositivo?"

pasos:
  - "Identificar los valores de voltaje (V) y corriente (I)."
  - "Aplicar la fórmula de la potencia eléctrica: P = V · I."
  - "Multiplicar el voltaje por la corriente: {v} * {i} = {p}."

explicacion: |
  La potencia eléctrica (P) se define como el producto del voltaje (V) por la intensidad de corriente (I). En este caso, la potencia es de {p} W.
```

### 7 — Variación de la fórmula (Resistencia)

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "formula"]

variables:
  datos: [[10, 5], [20, 10], [5, 2], [15, 3]]
  idx: uno_de([0,1,2,3])
  i: datos[idx][0]
  r: datos[idx][1]
  p: i * i * r

respuesta: "P = I² · R"
tipo: mc
opciones_explicitas: ["P = V · I", "P = I² · R", "P = V / R", "P = I / R"]

enunciado: "Si conocemos la intensidad de corriente (I) que circula por un conductor y su resistencia (R), ¿cuál es la expresión correcta para calcular la potencia eléctrica (P) disipada?"

explicacion: |
  Cuando se conoce la corriente y la resistencia, la fórmula derivada de P = V · I (sustituyendo V = I · R) es P = I² · R.
```

### 8 — Relación Voltaje y Resistencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia"]

variables:
  datos: [[100, 20], [200, 50], [12, 4], [220, 110]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  r: datos[idx][1]
  p: (v * v) / r

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y se conecta a una fuente de {v} V. Calcula la potencia disipada en el componente."

pasos:
  - "Elevar el voltaje al cuadrado: {v}^2."
  - "Dividir el resultado por la resistencia: ({v}^2) / {r}."

explicacion: |
  Utilizando la variante de la fórmula que relaciona voltaje y resistencia: P = V² / R. El cálculo es ({v}^2) / {r} = {p} W.
```

### 9 — Verdad o Falso: Unidades

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el Vatio (W), que equivale a un Julio por segundo (J/s)."
```

### 10 — Completar fórmula de potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["completar", "formula"]

respuestas_validas:
  - "V * I"
  - "V*I"
  - "V·I"
respuesta: "V * I"
tipo: completar

enunciado: "La fórmula fundamental para calcular la potencia eléctrica (P) en un circuito de corriente continua es P = ___."

explicacion: |
  La potencia eléctrica es el producto de la diferencia de potencial (Voltaje) por la intensidad de corriente.
```

### 11 — La relación entre voltaje y potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"

enunciado: "Si mantenemos la resistencia de un componente constante y aumentamos el voltaje aplicado, la potencia eléctrica consumida por dicho componente ___."

explicacion: |
  De la fórmula $P = V^2 / R$, se observa que la potencia es directamente proporcional al cuadrado del voltaje. Si el voltaje aumenta, la potencia aumenta.
```

### 12 — El error de la resistencia en serie

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "potencia"]

variables:
  escenario: uno_de([["R1", "R2", "R3", "R1+R2+R3"], ["10", "20", "30", "60"]])

respuesta: "R1+R2+R3"
tipo: mc
opciones_explicitas: ["R1", "R2", "R3", "R1+R2+R3"]

enunciado: "En un circuito en serie con tres resistencias, la resistencia equivalente que determina la potencia total entregada por la fuente es ___."

explicacion: |
  En un circuito en serie, la resistencia total es la suma de las resistencias individuales. La potencia total se calcula usando esta resistencia equivalente.
```

### 13 — ¿La potencia depende de la corriente?

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["booleano", "corriente", "potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la resistencia de un conductor se mantiene constante y la corriente eléctrica se duplica, la potencia disipada en el conductor se cuadruplica."

explicacion: |
  Usando la fórmula $P = I^2 \cdot R$, si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$. Por lo tanto, es verdadero.
```

### 14 — Cálculo de potencia con caída de tensión

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_ohm"]

variables:
  datos: uno_de([[12, 2], [220, 5], [12, 0.5]])

respuesta: "{datos[0]} * {datos[1]}"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico está conectado a una fuente de {datos[0]} V y por él circula una corriente de {datos[1]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula P = V * I."

explicacion: |
  La potencia se calcula multiplicando el voltaje por la intensidad: $P = V \cdot I$.
```

### 15 — Pasos para hallar potencia desde la resistencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["procedimiento", "resistencia", "voltaje"]

opciones_explicitas: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
respuesta_orden: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
tipo: ordenar

enunciado: "Si conoces el voltaje (V) y la resistencia (R) de una bombilla, pero no la corriente (I), ¿cuál es el orden lógico para hallar la potencia usando P = V · I?"

explicacion: |
  Primero debes hallar la incógnita faltante ($I = V/R$) y luego aplicar la fórmula de potencia.
```

### 16 — Potencia vs Energía

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["conceptos_base", "potencia"]

respuesta: "potencia"
tipo: "mc"
opciones_explicitas: ["energía", "potencia", "voltaje", "corriente"]

enunciado: "Mientras que la energía eléctrica es la cantidad total de trabajo realizado por una carga en un tiempo determinado, la ___ es la rapidez con la que dicho trabajo se realiza."

explicacion: |
  La potencia (P) mide la tasa de transferencia de energía por unidad de tiempo (P = dE/dt).
```

### 17 — Relación entre Potencia y Resistencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["ley_de_joule", "resistencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 5, 2], [20, 2, 4]]
  comparacion: datos[escenario_idx][2] > datos[escenario_idx][1]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si mantenemos el voltaje constante en un circuito, un componente con una resistencia de {datos[escenario_idx][2]} $\\Omega$ disipará una potencia {\"mayor\" if comparacion else \"menor\"} que uno con una resistencia de {datos[escenario_idx][1]} $\\Omega$."

explicacion: |
  Usando la fórmula $P = V^2 / R$, la potencia es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

### 18 — El efecto de la corriente en la potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "avanzado"
  tags: ["ley_de_joule", "corriente"]

variables:
  corriente_inicial: 2.0
  corriente_final: 4.0
  resistencia: 10.0

respuesta: verdadero
tipo: vf

enunciado: "Si la corriente que atraviesa una resistencia de {resistencia} ohmios se duplica de {corriente_inicial} A a {corriente_final} A, la potencia disipada se cuadruplica."

explicacion: |
  Según la fórmula P = I^2 * R, la potencia depende del cuadrado de la intensidad. Si la corriente se multiplica por 2, la potencia se multiplica por 2^2 = 4.
```

### 19 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

tipo: ordenar
opciones_explicitas: ["vatio", "voltio", "amperio", "ohmio"]
respuesta_orden: ["vatio", "voltio", "amperio", "ohmio"]

enunciado: "Ordena las siguientes magnitudes de mayor a menor según su símbolo en el Sistema Internacional (W, V, A, Ω):"

explicacion: |
  El orden solicitado es: W (vatio), V (voltio), A (amperio) y Ω (ohmio).
```

### 20 — Cálculo de potencia en un componente

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_joule"]

variables:
  escenario_idx: uno_de([0, 1])
  valores: [[12, 2], [24, 3]]

respuesta: 36.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico tiene una resistencia de {valores[escenario_idx][1]} $\\Omega$ y es atravesado por una corriente de {valores[escenario_idx][0]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar la corriente (I) y la resistencia (R)."
  - "Aplicar la fórmula $P = I^2 \\cdot R$."
  - "Calcular el resultado final."

explicacion: |
  Aplicando $P = I^2 \cdot R$:
  Si I = 2 y R = 2 $\rightarrow$ $2^2 \cdot 2 = 8$ (Nota: El ejemplo en el código usa valores específicos, el usuario verá uno de los dos casos).
  Si I = 4 y R = 2 $\rightarrow$ $4^2 \cdot 2 = 32$.
  *(Nota para el generador: El valor de respuesta debe ser calculado dinámicamente según el escenario seleccionado en la variable `valores`)*.
```

### 21 — Consumo de una bombilla

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

variables:
  escenario: uno_de([[12, 2, 24], [220, 5, 1100], [12, 10, 120]])
  v: escenario[0]
  i: escenario[1]
  p: escenario[2]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una bombilla se conecta a una fuente de tensión de {v} V y por ella circula una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por la bombilla?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula de potencia: P = V * I."

explicacion: |
  La potencia eléctrica se calcula multiplicando la diferencia de potencial por la intensidad de corriente: P = V * I.
  En este caso: {v} V * {i} A = {p} W.
```

### 22 — Resistencia y potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "potencia", "ley_de_joule"]

variables:
  escenario: uno_de([[10, 5], [20, 4], [5, 10]])
  r: escenario[0]
  i: escenario[1]
  p: escenario[1] * escenario[1] * escenario[0]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω. Si circula una corriente de {i} A a través de él, ¿cuánta potencia se disipa en forma de calor?"

pasos:
  - "Utilizar la variante de la fórmula de potencia: P = I² * R."
  - "Elevar la corriente al cuadrado: {i} * {i}."
  - "Multiplicar por la resistencia: {i} * {i} * {r}."

explicacion: |
  Para calcular la potencia disipada por una resistencia conociendo la corriente, usamos P = I² * R.
  Cálculo: ({i} A)² * {r} Ω = {p} W.
```

### 23 — ¿Es una carga de alta potencia?

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["comparacion", "potencia"]

variables:
  escenario: uno_de([[50, 1000], [500, 50], [10, 2000]])
  p: escenario[0]
  limite: escenario[1]

respuesta: p > limite
tipo: completar
enunciado: "Un dispositivo consume una potencia de {p} W. Si el límite de seguridad de la instalación es de {limite} W, ¿se ha superado el límite de seguridad?"

explicacion: |
  Comparamos la potencia consumida ({p} W) con el límite establecido ({limite} W). 
  Si {p} > {limite}, la respuesta es verdadero.
```

### 24 — Selección de fusible

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia", "corriente"]

variables:
  escenario: uno_de([[120, 10], [230, 100], [12, 10]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[0] / escenario[1]

respuesta: i
tipo: mc

opciones_explicitas: [12.0, 2.3, 1.2, 0.5]

enunciado: "Un calefactor tiene una resistencia interna de {r} Ω y se conecta a una toma de corriente de {v} V. ¿Qué intensidad de corriente circulará por el circuito (en amperios)?"

explicacion: |
  Usamos la relación derivada de la ley de Ohm y la potencia: P = V²/R, pero para hallar la corriente usamos I = V / R.
  Cálculo: {v} V / {r} Ω = {i} A.
```

### 25 — Pasos para calcular la potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]

respuesta_orden: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la potencia eléctrica de un electrodoméstico desconocido usando un multímetro en serie y paralelo."

explicacion: |
  Para hallar la potencia P = V * I, primero debemos obtener los valores de la tensión (V) y la intensidad (I) mediante mediciones, luego realizar la multiplicación matemática y finalmente expresar el resultado en la unidad de potencia (W).
```
