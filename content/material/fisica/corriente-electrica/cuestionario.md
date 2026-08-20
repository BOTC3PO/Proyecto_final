# Fisica — Corriente electrica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de corriente eléctrica

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["definicion", "carga"]

respuesta: "flujo de carga"
tipo: completar
respuestas_validas:
  - "flujo de carga"
  - "movimiento de cargas"

enunciado: "La corriente eléctrica se define físicamente como el ___ a través de un conductor."

explicacion: |
  La corriente eléctrica es el flujo de carga eléctrica (producido principalmente por electrones en metales) que atraviesa una sección de un conductor por unidad de tiempo.
```

### 2 — Unidad de medida de la intensidad

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

respuesta: "Amperio"
tipo: mc
opciones_explicitas: ["Amperio", "Voltio", "Ohmio", "Coulomb"]

enunciado: "La unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional es el ___."

explicacion: |
  El Amperio (A) es la unidad de intensidad de corriente. El Voltio (V) es potencial, el Ohmio (Ω) es resistencia y el Coulomb (C) es carga.
```

### 3 — Relación carga y tiempo

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "intensidad"]

variables:
  escenario: [[10, 2], [20, 4], [5, 5], [12, 3]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][0] / escenario[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {escenario[idx][0]} Coulombs atraviesa una sección de un conductor en un tiempo de {escenario[idx][1]} segundos, ¿cuál es la intensidad de corriente eléctrica?"

pasos:
  - "Calcular la intensidad usando la fórmula: I = Q / t"
  - "Dividir la carga (C) por el tiempo (s)"

explicacion: |
  La intensidad de corriente I se calcula como la carga total Q dividida por el tiempo t: I = Q/t. En este caso: {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][0] / escenario[idx][1]} A.
```

### 4 — Naturaleza del movimiento de carga

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["verdadero_falso", "electrones"]

respuesta: falso
tipo: vf

enunciado: "En un cable de cobre, la corriente eléctrica es producida por el movimiento de protones a través del metal."

explicacion: |
  Falso. En los metales conductores, la corriente es transportada por el movimiento de electrones libres, no de protones (los cuales están fijos en el núcleo atómico).
```

### 5 — Componentes de la corriente

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta_orden: ["Carga eléctrica", "Conductor", "Fuente de energía"]
tipo: ordenar

opciones_explicitas: ["Carga eléctrica", "Conductor", "Fuente de energía"]

enunciado: "Para que exista una corriente eléctrica en un circuito simple, se requiere que los elementos estén presentes en un orden lógico de dependencia (desde el origen del movimiento hasta el medio):"

explicacion: |
  Para que haya corriente se necesita una fuente que impulse las cargas, las cargas que se mueven y un camino (conductor) para que lo hagan.
```

### 6 — Cálculo de la intensidad de corriente

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["intensidad", "carga", "amperios"]

variables:
  idx: uno_de([0, 1, 2])
  cargas: [0.005, 0.012, 0.025]
  carga: cargas[idx]
  resultados_texto: ["0.0025", "0.006", "0.0125"]

respuesta: carga / 2.0
tipo: completar
tolerancia_abs: 0.001

enunciado: "Una carga eléctrica de {carga} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de 2 segundos. ¿Cuál es la intensidad de corriente eléctrica en Amperios?"

pasos:
  - "Identificar la carga (Q) = {carga} C"
  - "Identificar el tiempo (t) = 2 s"
  - "Aplicar la fórmula: I = Q / t"
  - "Calcular: {carga} / 2"

explicacion: |
  La intensidad de corriente (I) se define como la cantidad de carga que pasa por un punto en un tiempo determinado. La fórmula es I = Q / t. En este caso, {carga} / 2 = {resultados_texto[idx]} A.
```

### 7 — Concepto de corriente eléctrica

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "¿La corriente eléctrica se define como el flujo de carga eléctrica a través de un conductor por unidad de tiempo?"

explicacion: |
  Correcto. La corriente eléctrica es la rapidez con la que las cargas eléctricas atraviesan una sección de un conductor.
```

### 8 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

opciones_explicitas: ["Voltio", "Amperio", "Ohmio", "Coulomb"]
respuesta: "Amperio"
tipo: mc

enunciado: "¿Cuál es la unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional (SI)?"

explicacion: |
  La unidad de la intensidad de corriente es el Amperio (A), mientras que el Voltio es para potencial, el Ohmio para resistencia y el Coulomb para carga.
```

### 9 — Relación carga y tiempo

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "corriente"]

variables:
  escenario: [[10, 2, "0.5"], [20, 5, "4.0"], [5, 1, "5.0"]]
  idx: uno_de([0,1,2])
  q: escenario[idx][0]
  t: escenario[idx][1]
  res: escenario[idx][2]

respuesta: res
tipo: completar
respuestas_validas:
  - "0.5"
  - "4.0"
  - "5.0"

enunciado: "Si una corriente de ___ A fluye por un cable, la carga que atraviesa el conductor en ___ segundos es de ___ C."

explicacion: |
  Usando la relación despejada de la fórmula I = Q / t, tenemos que Q = I * t. Para este caso: {res} = {q} * {t}.
```

### 10 — Orden de magnitudes

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
respuesta_orden: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de intensidad de corriente eléctrica:"

explicacion: |
  Para resolver correctamente, primero debemos extraer los datos del enunciado, luego seleccionar la fórmula matemática adecuada y finalmente realizar la operación aritmética.
```

### 11 — El sentido de la corriente

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "sentido_convencional", "electrones"]

respuesta: "convencional"
tipo: mc
opciones_explicitas: ["real", "convencional"]

enunciado: "En un circuito físico, los electrones se desplazan del polo negativo al positivo. Sin embargo, por convención histórica, el sentido de la corriente eléctrica se define de forma ___."

explicacion: |
  El sentido convencional de la corriente es del polo positivo al negativo, siguiendo el movimiento de cargas positivas imaginarias, aunque en los metales sean los electrones (cargas negativas) los que se mueven en sentido opuesto.
```

### 12 — Intensidad y carga eléctrica

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["intensidad", "carga", "tiempo"]

variables:
  escenario: uno_de([[1.2, 2.0], [3.5, 5.0], [0.8, 1.5]])

respuesta: escenario[0] / escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una carga eléctrica de {escenario[0]} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de {escenario[1]} segundos. ¿Cuál es la intensidad de corriente eléctrica (en Amperios)?"

pasos:
  - "Identificar la fórmula de intensidad: I = ΔQ / Δt"
  - "Dividir la carga total por el tiempo transcurrido"

explicacion: |
  La intensidad de corriente se define como la cantidad de carga que pasa por un punto en un tiempo determinado: I = Q/t. En este caso, {escenario[0]} / {escenario[1]} = {escenario[0] / escenario[1]}.
```

### 13 — ¿Es la corriente un flujo de materia?

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: falso
tipo: vf

enunciado: "La corriente eléctrica es, por definición, un flujo de materia (átomos) que se desplaza a través de un conductor."

explicacion: |
  Falso. La corriente eléctrica es el flujo de **cargas eléctricas** (como electrones o iones), no necesariamente de la materia completa (átomos). En los metales, los átomos permanecen en una red fija mientras los electrones se desplazan.
```

### 14 — Relación carga y electrones

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "avanzado"
  tags: ["electrones", "carga_elemental"]

variables:
  caso: uno_de([[2, 1.6e-19], [5, 1.6e-19], [10, 1.6e-19]])
  n: caso[0]
  e: caso[1]
  q_total: n * e

respuesta: n
tipo: completar
tolerancia_abs: 0

enunciado: "Si por un conductor circula una corriente tal que en total pasan {q_total} Coulombs de carga, y la carga de cada electrón es {e} C, ¿cuántos electrones han atravesado la sección en ese tiempo?"

explicacion: |
  Para hallar el número de electrones (n), usamos la relación Q = n * e, donde e es la carga elemental. Despejando: n = Q / e. En este caso: {q_total} / {e} = {n}.
```

### 15 — Pasos para calcular la intensidad

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "calculo"]

respuesta_orden: ["identificar_carga", "identificar_tiempo", "dividir_valores"]
tipo: ordenar
opciones_explicitas: ["identificar_carga", "identificar_tiempo", "dividir_valores"]

enunciado: "Ordena los pasos lógicos para calcular la intensidad de corriente eléctrica si se conoce la carga total y el tiempo transcurrido."

explicacion: |
  Para aplicar la fórmula I = Q/t, primero debemos conocer los valores de la carga (Q) y el tiempo (t), y finalmente realizar la división correspondiente.
```

### 16 — Diferencia entre Corriente y Carga

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "corriente", "conceptos"]

respuesta: "corriente"
tipo: "completar"
respuestas_validas:
  - "corriente"

enunciado: "Mientras que la carga eléctrica es una propiedad intrínseca de las partículas, la ___ es la medida del flujo de carga que atraviesa una sección transversal por unidad de tiempo."

explicacion: |
  La carga eléctrica es una propiedad estática, mientras que la corriente eléctrica es una magnitud dinámica que describe el movimiento de dichas cargas.
```

### 17 — Intensidad de corriente vs. Voltaje

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "corriente", "diferencia"]

variables:
  escenario: uno_de([["un cable conectado a una batería de 9V", "9", "0.5"], ["un cable conectado a una batería de 12V", "12", "0.8"], ["un cable conectado a una batería de 5V", "5", "0.3"]])

respuesta: escenario[2]
tipo: "mc"
opciones_explicitas: [escenario[1], escenario[2], escenario[0]]

enunciado: "Si mantenemos la resistencia constante, ¿cuál es la intensidad de corriente que circula por el circuito dado el voltaje de {escenario[0]}?"

pasos:
  - "Identificar el voltaje: {escenario[1]} V"
  - "Identificar la resistencia (asumida constante para el ejemplo)"
  - "Calcular I = V / R"

explicacion: |
  La intensidad de corriente es directamente proporcional al voltaje según la Ley de Ohm. Al aumentar el voltaje, la corriente aumenta proporcionalmente.
```

### 18 — Corriente Continua vs. Alterna

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["cc", "ca", "tipo_corriente"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es cierto que en la corriente continua (CC) la dirección y magnitud del flujo de carga cambian periódicamente con el tiempo, a diferencia de la corriente alterna (CA)?"

explicacion: |
  Es falso. Es al revés: en la corriente alterna (CA) el flujo cambia de dirección periódicamente, mientras que en la corriente continua (CC) el flujo es constante en dirección y magnitud.
```

### 19 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

respuesta: "amperio"
tipo: "mc"
opciones_explicitas: ["voltio", "amperio", "ohmio", "culombio"]

enunciado: "La magnitud de la corriente eléctrica se mide en ___."

explicacion: |
  El amperio (A) es la unidad de intensidad de corriente en el SI, mientras que el voltio mide potencial y el ohmio la resistencia.
```

### 20 — Componentes de la corriente eléctrica

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["flujo", "carga", "orden"]

tipo: ordenar
opciones_explicitas: ["carga", "movimiento", "corriente"]
respuesta_orden: ["carga", "movimiento", "corriente"]

enunciado: "Ordena los conceptos para describir el proceso físico que da origen a la corriente eléctrica: primero la existencia de ___, luego el ___ de estas a través de un conductor, y finalmente el fenómeno resultante llamado ___."

explicacion: |
  El proceso lógico es: 1. Presencia de carga, 2. Movimiento de carga, 3. Corriente eléctrica.
```

### 21 — Intensidad en un circuito doméstico

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["electricidad", "intensidad"]

variables:
  datos: [["un cargador de celular de 5W conectado a 220V", "0.0227"], ["una bombilla de 60W conectada a 120V", "0.5"], ["un calefactor de 2200W conectado a 220V", "10.0"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos {datos[idx][0]}, la intensidad de corriente que circula es de aproximadamente ___ A."

respuestas_validas:
  - "0.0227"
  - "0.5"
  - "10.0"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La intensidad de corriente (I) se calcula mediante la fórmula I = P / V, donde P es la potencia en Watts y V es el voltaje en Voltios.
```

### 22 — Flujo de carga eléctrica

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["carga", "electrones"]

variables:
  datos: [["2.0", "1.25e25"], ["0.5", "3.12e24"], ["4.0", "2.50e25"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si por un conductor circula una carga de {datos[idx][0]} Coulombs en un tiempo de 1 segundo, la cantidad de electrones que fluyen es aproximadamente ___."

respuestas_validas:
  - "1.25e25"
  - "3.12e24"
  - "2.50e25"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La carga total es Q = n * e, donde n es el número de electrones y e es la carga del electrón (1.6e-19 C). Por lo tanto, n = Q / e.
```

### 23 — Concepto de corriente continua vs alterna

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos", "ca"]

enunciado: "¿La corriente que suministran las baterías de un teléfono móvil es de tipo alterna (AC)?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  Las baterías proporcionan corriente continua (DC), donde los electrones fluyen en un solo sentido. La corriente alterna (AC) es la que llega a los enchufes de las casas.
```

### 24 — Cálculo de intensidad con multímetro

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "amperaje"]

variables:
  datos: [["una corriente de 0.5A", "500"], ["una corriente de 1.2A", "1200"], ["una corriente de 0.05A", "50"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un multímetro está configurado para medir miliamperios (mA), ¿qué valor mostrará para {datos[idx][0]}?"

opciones_explicitas: ["500", "1200", "50"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Para convertir Amperios (A) a miliamperios (mA), se multiplica el valor por 1000.
```

### 25 — Pasos para medir corriente

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "seguridad"]

enunciado: "Ordena los pasos correctos para medir la intensidad de corriente en un componente usando un multímetro en serie:"

opciones_explicitas: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
respuesta_orden: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
tipo: ordenar

explicacion: |
  Para medir corriente, el multímetro debe formar parte del camino de la electricidad, por lo que el circuito debe interrumpirse para insertarlo en serie.
```
