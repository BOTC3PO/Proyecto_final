# Fisica — Ley de ohm (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Corriente Eléctrica

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos", "corriente"]

respuesta: "intensidad_de_corriente"
tipo: completar

enunciado: "La magnitud física que mide la cantidad de carga eléctrica que fluye por unidad de tiempo a través de una sección de un conductor se denomina ___."

respuestas_validas:
  - "intensidad_de_corriente"
  - "corriente_electrica"

explicacion: |
  La intensidad de corriente eléctrica ($I$) se define como el flujo de carga eléctrica por unidad de tiempo ($I = dQ/dt$).
```

### 2 — Relación de Proporcionalidad

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad", "teoria"]

opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No tiene relación"]
respuesta: "Directamente proporcional"
tipo: mc

enunciado: "Según la Ley de Ohm, manteniendo la resistencia constante, la diferencia de potencial (voltaje) es ___ a la intensidad de la corriente."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, si aumentamos $V$, aumenta $I$ en la misma proporción.
```

### 3 — Identificación de Unidades

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "ohm"]

variables:
  idx: uno_de([0, 1])
  datos: [["Voltaje", "Voltios"], ["Resistencia", "Ohmios"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Voltios", "Amperios", "Ohmios", "Watts"]

enunciado: "La unidad de medida en el Sistema Internacional para la {datos[idx][0]} es ___."

explicacion: |
  La unidad de la {datos[idx][0]} es el {datos[idx][1]}.
```

### 4 — Verdad o Falso: Resistencia

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Si la resistencia de un circuito aumenta y el voltaje se mantiene constante, la intensidad de la corriente también aumentará."

explicacion: |
  Falso. De la fórmula $I = V/R$, se observa que la corriente es inversamente proporcional a la resistencia. Si $R$ sube, $I$ baja.
```

### 5 — Despeje de la Ley de Ohm

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

respuesta: "R = V / I"
tipo: mc
opciones_explicitas: ["I = V / R", "R = V / I", "V = I / R", "R = I / V"]

enunciado: "Para hallar la resistencia ($R$) en un circuito donde conocemos el voltaje ($V$) y la intensidad ($I$), la expresión correcta es ___."

explicacion: |
  Partiendo de $V = I \cdot R$, despejamos $R$ pasando la $I$ dividiendo al otro lado: $R = V / I$.
```

### 6 — La relación fundamental

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "V = I * R"
tipo: completar
respuestas_validas:
  - "V = I * R"
  - "V = R * I"

enunciado: "La Ley de Ohm establece que la diferencia de potencial (V) es igual al producto de la intensidad de corriente (I) por la resistencia (R). La expresión matemática es: ___"

explicacion: |
  La Ley de Ohm indica que la tensión es directamente proporcional a la corriente para una resistencia constante.
```

### 7 — Cálculo de la Tensión

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[2, 5, 10], [6, 5, 30], [5, 10, 50]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: [10, 30, 50, 60]

enunciado: "Si una resistencia de {escenario[1]} Ω es atravesada por una corriente de {escenario[0]} A, ¿cuál es la diferencia de potencial aplicada (en voltios)?"

pasos:
  - "Identificar los datos: I = {escenario[0]} A, R = {escenario[1]} Ω"
  - "Aplicar la fórmula: V = I * R"
  - "Calcular: V = {escenario[0]} * {escenario[1]} = {escenario[2]} V"

explicacion: |
  Usando la fórmula V = I * R, multiplicamos la corriente por la resistencia para obtener la tensión.
```

### 8 — Cálculo de la Corriente

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([[12, 4], [220, 110], [10, 5]])

respuesta: escenario[0] / escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una bombilla está conectada a una fuente de {escenario[0]} V y tiene una resistencia interna de {escenario[1]} Ω. ¿Cuál es la intensidad de la corriente que circula por ella (en Amperes)?"

pasos:
  - "Despejar la fórmula de Ohm para la corriente: I = V / R"
  - "Sustituir valores: I = {escenario[0]} / {escenario[1]}"
  - "Resultado: I = {escenario[0] / escenario[1]} A"

explicacion: |
  Para hallar la corriente cuando conocemos la tensión y la resistencia, despejamos la fórmula original obteniendo I = V / R.
```

### 9 — Veracidad de la relación

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos la tensión (V) constante y aumentamos la resistencia (R), la intensidad de la corriente (I) debe disminuir."

explicacion: |
  Es verdadero. Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia cuando la tensión es constante.
```

### 10 — Despeje de la Resistencia

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([[10, 2, 5], [24, 3, 8], [100, 10, 10]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: [5, 8, 10, 20]

enunciado: "Un dispositivo electrónico consume una corriente de {escenario[1]} A cuando se conecta a una batería de {escenario[0]} V. ¿Cuál es el valor de su resistencia (en ohmios)?"

pasos:
  - "Identificar datos: V = {escenario[0]} V, I = {escenario[1]} A"
  - "Despejar R de la fórmula V = I * R: R = V / I"
  - "Calcular: R = {escenario[0]} / {escenario[1]} = {escenario[2]} Ω"

explicacion: |
  Para encontrar la resistencia, dividimos la tensión aplicada entre la intensidad de la corriente que circula por el circuito.
```

### 11 — El error de la relación inversa

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ley_de_ohm", "relaciones_proporcionales"]

respuesta: "reducirse a la mitad"
tipo: completar
respuestas_validas:
  - "reducirse a la mitad"
  - "disminuir a la mitad"
  - "la mitad"

enunciado: "Si mantenemos el voltaje constante y duplicamos la resistencia, la intensidad de corriente debe ___ para mantener la igualdad de la Ley de Ohm."

pasos:
  - "Identificar que el voltaje es constante."
  - "Aplicar la relación $I = V / R$."
  - "Observar que al aumentar el denominador (R), el resultado (I) disminuye."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si el voltaje ($V$) no cambia, la corriente ($I$) y la resistencia ($R$) son inversamente proporcionales. Si la resistencia se duplica, la corriente se reduce a la mitad.
```

### 12 — Confusión de unidades

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "error_comun"]

respuesta: "mA"
tipo: mc
opciones_explicitas: ["A", "mA", "kΩ", "V"]

enunciado: "Un error común es no convertir las unidades antes de operar. Si tienes un voltaje de 5 V y una resistencia de 1 kΩ, el resultado de I = V / R es 0.005 A. ¿En qué unidad se expresa este valor si queremos evitar el uso de decimales muy pequeños?"

explicacion: |
  Para evitar errores de escala, es común trabajar con múltiplos. 0.005 A es equivalente a 5 mA (miliamperios).
```

### 13 — ¿Qué sucede si sube la tensión?

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad_directa"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito con una resistencia fija, si aumentamos el voltaje aplicado, la intensidad de corriente que circula por el conductor también aumentará proporcionalmente."

explicacion: |
  Verdadero. Según $I = V / R$, si $R$ es constante, $I$ es directamente proporcional a $V$.
```

### 14 — Cálculo de la resistencia desconocida

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[24.0, 12.0, 2.0], [40.0, 8.0, 5.0]]

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene un voltaje de {escenario[idx][0]} V y una corriente de {escenario[idx][1]} A. ¿Cuál es el valor de su resistencia (en $\\Omega$)?"

pasos:
  - "Usar la fórmula despejada: $R = V / I$."
  - "Sustituir los valores: $R = {escenario[idx][0]} / {escenario[idx][1]}$."

explicacion: |
  Utilizando $R = V / I$, dividimos el voltaje por la corriente para hallar la resistencia: $R = {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][2]}$ Ω.
```

### 15 — El orden de los factores

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["despeje", "formula"]

respuesta_orden: ["V = I * R", "I = V / R", "R = V / I"]
tipo: ordenar

opciones_explicitas: ["V = I * R", "I = V / R", "R = V / I"]

enunciado: "Ordena las fórmulas de la Ley de Ohm empezando por la fórmula original (definición de voltaje) y luego sus dos despejes para corriente y resistencia respectivamente."

explicacion: |
  Las tres formas de la Ley de Ohm son equivalentes, pero el orden correcto de despeje estándar es la definición, luego el despeje de la variable del denominador y finalmente el de la variable del numerador.
```

### 16 — Relación entre Voltaje y Corriente

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

### 17 — Resistencia vs. Voltaje

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

### 18 — Cálculo de Resistencia

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "ohm", "resistencia"]

variables:
  escenario: uno_de([[2, 10], [5, 20], [12, 4]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una diferencia de potencial de {escenario[0]} V y una corriente que circula por él es de {escenario[1]} A. ¿Cuál es el valor de la resistencia en Ohmios ($\\Omega$)?"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula $R = V / I$:
  Para el caso sorteado: $R = {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} \Omega$.
```

### 19 — Diferencia entre Voltaje e Intensidad

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["conceptos", "voltaje", "corriente"]

tipo: completar

enunciado: "Mientras que el voltaje se mide en ___ y representa la diferencia de potencial, la intensidad de corriente se mide en ___ y representa el flujo de carga."

respuestas_validas:
  - "Voltios"
  - "Amperios"

respuesta: ["Voltios", "Amperios"]

explicacion: |
  El voltaje (V) es la fuerza que impulsa las cargas, e intensidad (I) es la cantidad de carga que circula por unidad de tiempo.
```

### 20 — Orden de Variables en la Ecuación

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "orden"]

tipo: completar

enunciado: "Para despejar la intensidad de corriente (I) de la Ley de Ohm ($V = I \\cdot R$), la operación matemática correcta es dividir el voltaje por la ___."

respuestas_validas:
  - "resistencia"

respuesta: "resistencia"

explicacion: |
  Despejando la fórmula original $V = I \cdot R$, pasamos la $R$ dividiendo al otro lado: $I = V / R$.
```

### 21 — Resistencia en un circuito doméstico

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[120.0, "2.0", "60.0"], [220.0, "5.0", "44.0"], [12.0, "0.5", "24.0"]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: r
tipo: completar
respuestas_validas:
  - "60.0"
  - "44.0"
  - "24.0"

enunciado: "Un dispositivo eléctrico se conecta a una fuente de tensión de {v} V y por él circula una corriente de {i} A. ¿Cuál es el valor de la resistencia del dispositivo?"

explicacion: |
  Aplicando la Ley de Ohm: R = V / I.
  En este caso: {v} / {i} = {r} Ω.
```

### 22 — Corriente en una linterna

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["corriente", "voltaje", "resistencia"]

variables:
  escenario: uno_de([[9.0, "0.2", "45.0"], [12.0, "0.5", "24.0"], [3.0, "1.0", "3.0"]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[2]

respuesta: i
tipo: mc
opciones_explicitas: ["45.0", "24.0", "3.0"]

enunciado: "Una linterna funciona con una batería de {v} V y tiene una resistencia interna de {r} Ω. ¿Qué intensidad de corriente circula por el circuito?"

explicacion: |
  Usamos la fórmula I = V / R.
  I = {v} / {r} = {i} A.
```

### 23 — Relación entre voltaje y corriente

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[10.0, 2.0, 5.0], [20.0, 4.0, 5.0], [50.0, 10.0, 5.0]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos una resistencia constante de {r} Ω, al duplicar el voltaje de {v} V a {v*2} V, la corriente debe duplicarse de {i} A a {i*2} A. ¿Es esto correcto?"

explicacion: |
  Verdadero. Según la Ley de Ohm (V = I·R), el voltaje y la corriente son directamente proporcionales cuando la resistencia es constante.
```

### 24 — Cálculo de voltaje en un componente

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[5.0, "0.1", "0.5"], [10.0, "2.0", "20.0"], [12.0, "0.5", "6.0"]])
  r: escenario[0]
  i: escenario[1]
  v: escenario[2]

respuesta: v
tipo: completar
respuestas_validas:
  - "0.5"
  - "20.0"
  - "6.0"

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y es atravesado por una corriente de {i} A. ¿Qué voltaje se aplica a dicho componente?"

explicacion: |
  La fórmula es V = I · R.
  V = {i} * {r} = {v} V.
```

### 25 — Pasos para resolver un circuito

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta_orden: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]
tipo: ordenar
opciones_explicitas: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]

enunciado: "Ordena los pasos lógicos para resolver un problema de Ley de Ohm donde conoces la resistencia y la corriente para hallar el voltaje:"

explicacion: |
  Para resolver problemas físicos de forma sistemática se debe:
  1. Identificar los datos conocidos.
  2. Seleccionar la fórmula adecuada (V=I·R, I=V/R o R=V/I).
  3. Realizar el cálculo matemático.
```
