# Fisica — Tension diferencia potencial (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Diferencia de Potencial

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "potencial", "definicion"]

tipo: mc
opciones_explicitas: ["La diferencia de energía potencial por unidad de carga", "La velocidad de los electrones en un cable", "La resistencia que ofrece un material al paso de corriente", "La cantidad de electrones en un conductor"]

respuesta: "La diferencia de energía potencial por unidad de carga"

enunciado: "La diferencia de potencial eléctrico entre dos puntos se define físicamente como ___."

explicacion: |
  La diferencia de potencial (V) es el trabajo realizado por unidad de carga para mover una carga de prueba desde un punto a otro.
```

### 2 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["unidades", "voltios"]

tipo: completar
respuestas_validas:
  - "Voltio"
  - "Volt"

respuesta: "Voltio"

enunciado: "La unidad de medida de la diferencia de potencial en el Sistema Internacional es el ___."

explicacion: |
  El Voltio (V) es la unidad estándar para medir la tensión o diferencia de potencial eléctrico.
```

### 3 — Relación Carga y Trabajo

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["trabajo", "carga", "formula"]

variables:
  escenario: uno_de([[10, 20], [50, 100]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se realiza un trabajo de {escenario[0]} Joules para mover una carga de {escenario[1]} Coulombs entre dos puntos. ¿Cuál es la diferencia de potencial en Voltios?"

pasos:
  - "Identificar el trabajo (W) y la carga (Q)."
  - "Aplicar la fórmula V = W / Q."

respuesta: "escenario[0] / escenario[1]"

explicacion: |
  Usando la fórmula V = W/Q: {escenario[0]}J / {escenario[1]}C = {escenario[0]/escenario[1]} V.
```

### 4 — Verdad o Falso: Movimiento de Cargas

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["movimiento", "cargas"]

tipo: vf

enunciado: "Para que exista una corriente eléctrica en un conductor, debe existir una diferencia de potencial entre sus extremos."

respuesta: verdadero

explicacion: |
  Verdadero. La diferencia de potencial es la "fuerza" o presión que impulsa a las cargas a moverse a través del circuito.
```

### 5 — Conceptos Asociados

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["conceptos", "vocabulario"]

tipo: mc
opciones_explicitas: ["Voltaje", "Resistencia", "Intensidad"]

respuesta: "Voltaje"

enunciado: "En el lenguaje cotidiano, el término ___ se utiliza frecuentemente como sinónimo de diferencia de potencial eléctrica."

explicacion: |
  Aunque técnicamente son conceptos distintos, en el uso común se emplea 'voltaje' para referirse a la tensión eléctrica.
```

### 6 — Definición de Diferencia de Potencial

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "potencial", "teoria"]

respuesta: "V"
tipo: mc
opciones_explicitas: ["A", "V", "W", "Ω"]

enunciado: "La unidad de medida de la diferencia de potencial eléctrico en el Sistema Internacional es el ___."

explicacion: |
  La diferencia de potencial (tensión) se mide en Voltios (V), que representa la energía por unidad de carga.
```

### 7 — Relación Carga y Potencial

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["carga", "energia", "calculo"]

variables:
  voltajes: [12, 24, 36]
  escenario: uno_de(voltajes)
  valor_carga: 3
  resultado_energia: valor_carga * escenario

respuesta: resultado_energia
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {valor_carga} C se desplaza entre dos puntos con una diferencia de potencial de {escenario} V, ¿cuánta energía eléctrica (en Joules) realiza el campo sobre la carga?"

pasos:
  - "Identificar la fórmula: Trabajo (Energía) = Carga (Q) × Diferencia de Potencial (V)"
  - "Sustituir valores: W = {valor_carga} C × {escenario} V"
  - "Calcular el producto: {valor_carga} * {escenario} = {resultado_energia} J"

explicacion: |
  La energía (W) es el producto de la carga (Q) por el potencial (V). En este caso, {valor_carga} * {escenario} = {resultado_energia} Joules.
```

### 8 — Análisis de Polaridad

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["polaridad", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "¿Si una carga positiva se mueve de un punto A (10V) a un punto B (25V), el campo eléctrico realiza un trabajo positivo sobre la carga?"

explicacion: |
  Verdadero. Al moverse de un potencial menor a uno mayor, la carga gana energía potencial, lo que implica que el campo realiza un trabajo positivo sobre ella.
```

### 9 — Cálculo de Diferencia de Potencial

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["calculo", "potencial"]

variables:
  puntos: [[10, 50], [5, 20], [100, 10]]
  idx: uno_de([0, 1, 2])
  v_a: puntos[idx][0]
  v_b: puntos[idx][1]
  v_diff: abs(v_a - v_b)

respuesta: v_diff
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se tienen dos puntos en un campo eléctrico con potenciales de {v_a} V y {v_b} V respectivamente. ¿Cuál es la magnitud de la diferencia de potencial entre ambos puntos?"

pasos:
  - "Restar los valores de potencial: |{v_a} - {v_b}|"
  - "Calcular la diferencia absoluta: {v_diff} V"

explicacion: |
  La diferencia de potencial es la resta de los potenciales: |{v_a} - {v_b}| = {v_diff} V.
```

### 10 — Relación Trabajo y Potencial (Completar)

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "avanzado"
  tags: ["trabajo", "carga", "completo"]

variables:
  datos: [[2, 10, 20], [5, 4, 20], [10, 2, 20]]
  idx: uno_de([0, 1, 2])
  q: datos[idx][0]
  v: datos[idx][1]
  w: datos[idx][2]

respuesta: [0, 1, 2]
tipo: completar
respuestas_validas:
  - "20"
  - "20"
  - "20"

enunciado: "Si una carga de {q} C requiere un trabajo de {w} J para ser trasladada entre dos puntos, la diferencia de potencial entre dichos puntos es de ___ V."

explicacion: |
  Usando la fórmula V = W / Q, tenemos {w} / {q} = {v} V.
```

### 11 — ¿Qué es la diferencia de potencial?

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "concepto"]

respuesta: "trabajo"
tipo: completar
respuestas_validas:
  - "trabajo"

enunciado: "La diferencia de potencial eléctrico entre dos puntos se define como el ___ realizado por unidad de carga para mover una carga desde un punto a otro."

explicacion: |
  La diferencia de potencial (voltaje) es la energía o trabajo por unidad de carga necesaria para mover una carga entre dos puntos del campo eléctrico.
```

### 12 — Confusión entre Corriente y Voltaje

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["corriente", "voltaje", "analogia"]

respuesta: "falso"
tipo: completar
enunciado: "Si una batería tiene una diferencia de potencial (voltaje) de 12V, esto significa que siempre hay una corriente fluyendo a través de cualquier cable conectado a ella, incluso si el circuito está abierto."

explicacion: |
  Falso. El voltaje es la "presión" o potencial disponible, pero la corriente requiere un camino cerrado (circuito) para fluir. En un circuito abierto, el voltaje existe pero la corriente es cero.
```

### 13 — Relación Trabajo y Carga

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["calculo", "potencial"]

variables:
  escenario: uno_de([[10.0, 5.0], [20.0, 10.0], [5.0, 2.0]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se requiere realizar un trabajo de {escenario[0]} Joules para mover una carga de {escenario[1]} Coulombs entre dos puntos de un conductor. ¿Cuál es la diferencia de potencial en Voltios?"

pasos:
  - "Calcular el voltaje usando la fórmula: V = W / q"

explicacion: |
  Usando la fórmula V = W/q: {escenario[0]} J / {escenario[1]} C = {escenario[0]/escenario[1]} V.
```

### 14 — El error del instrumento de medición

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "medicion"]

respuesta: "en_paralelo"
tipo: mc
opciones_explicitas: ["en_serie", "en_paralelo", "en_circuito_abierto"]

enunciado: "Para medir correctamente la diferencia de potencial entre dos puntos de un componente, un voltímetro debe conectarse ___ al componente."

explicacion: |
  El voltímetro tiene una resistencia interna muy alta y debe conectarse en paralelo para medir la caída de potencial sin desviar la corriente del circuito principal.
```

### 15 — Componentes de un circuito

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["ordenar", "conceptos"]

respuesta_orden: ["Fuente de potencial", "Conductor", "Carga/Resistencia"]
tipo: ordenar
opciones_explicitas: ["Carga/Resistencia", "Fuente de potencial", "Conductor"]

enunciado: "Ordena los elementos de un sistema de flujo de carga desde que se genera el potencial hasta que se consume la energía:"

explicacion: |
  El flujo comienza en la fuente (diferencia de potencial), viaja a través de los conductores y finalmente entrega energía al componente o carga.
```

### 16 — Diferencia de potencial vs. Campo eléctrico

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["potencial", "campo_electrico"]

respuesta: "campo_electrico"
tipo: mc
opciones_explicitas: ["potencial_electrico", "campo_electrico", "corriente_electrica", "resistencia"]

enunciado: "Mientras que la diferencia de potencial describe la energía por unidad de carga entre dos puntos, el concepto que describe la fuerza por unidad de carga que actúa sobre una carga puntual en un punto del espacio es el ___."

explicacion: |
  La diferencia de potencial (voltaje) es una medida escalar relacionada con la energía, mientras que el campo eléctrico es una magnitud vectorial que indica la fuerza ejercida sobre una carga.
```

### 17 — Diferencia de potencial vs. Trabajo eléctrico

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["trabajo", "potencial"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0.5, 2.0], [1.5, 5.0]]

respuesta: datos[escenario_idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se requiere mover una carga de {datos[escenario_idx][0]} C de un punto A a un punto B. Si la diferencia de potencial entre ambos puntos es de {datos[escenario_idx][1]} V, el trabajo eléctrico realizado es de ___ J."

pasos:
  - "Calcular el trabajo usando la fórmula W = q * ΔV"
  - "Sustituir la carga q = {datos[escenario_idx][0]} C y el voltaje ΔV = {datos[escenario_idx][1]} V"

explicacion: |
  El trabajo eléctrico es el producto de la carga por la diferencia de potencial: W = q * ΔV. En este caso, {datos[escenario_idx][0]} * {datos[escenario_idx][1]} = {datos[escenario_idx][0] * datos[escenario_idx][1]}.
```

### 18 — Relación entre Voltaje y Corriente

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["ley_ohm", "corriente"]

respuesta: verdadero
tipo: vf

enunciado: "Si se mantiene constante la resistencia de un conductor, un aumento en la diferencia de potencial (tensión) provocará un aumento en la intensidad de la corriente eléctrica."

explicacion: |
  Según la Ley de Ohm (I = V/R), la corriente es directamente proporcional a la diferencia de potencial cuando la resistencia permanece constante.
```

### 19 — Componentes de un circuito en serie

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["circuito_serie", "voltaje"]

respuesta_orden: ["Pila", "Interruptor", "Resistencia", "Cable"]
tipo: ordenar

opciones_explicitas: ["Pila", "Interruptor", "Resistencia", "Cable"]

enunciado: "Ordena los elementos de un circuito simple desde la fuente de energía hasta el dispositivo de carga, siguiendo el flujo de la corriente:"

explicacion: |
  En un circuito básico, la energía sale de la fuente (Pila), pasa por el control (Interruptor), atraviesa el elemento de consumo (Resistencia) y cierra el camino mediante los conductores (Cable).
```

### 20 — Diferencia de potencial en un conductor

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "avanzado"
  tags: ["conductor", "equilibrio"]

respuesta: "cero"
tipo: completar

respuestas_validas:
  - "cero"
  - "0"
  - "0.0"

enunciado: "En un conductor metálico en equilibrio electrostático, la diferencia de potencial entre cualquier par de puntos del mismo conductor es ___."

explicacion: |
  En equilibrio electrostático, el campo eléctrico dentro del conductor es nulo, lo que implica que el potencial eléctrico es constante en todo el volumen del conductor. Por lo tanto, la diferencia de potencial es cero.
```

### 21 — El cargador de un smartphone

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "electronica", "aplicacion"]

variables:
  escenario: uno_de([5.0, 9.0, 12.0])

enunciado: "Un cargador de carga rápida suministra una diferencia de potencial de {escenario} voltios a un dispositivo móvil. ¿Cuál es el valor de la tensión eléctrica suministrada (en voltios)?"

opciones_explicitas: [4.5, 5.0, 9.0, 12.0]
respuesta: escenario
tipo: mc

explicacion: |
  La diferencia de potencial (tensión) se mide en voltios (V) y representa la energía por unidad de carga que impulsa a los electrones a través de un circuito.
```

### 22 — El interruptor de la luz

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["circuito", "interruptor"]

variables:
  estado: uno_de(["hay_paso", "no_hay_paso"])

enunciado: "En un circuito de una lámpara, si el interruptor está abierto, la diferencia de potencial entre los terminales de la bombilla es de ___ voltios si no hay corriente circulando por el resto del circuito cerrado."

respuestas_validas:
  - "0"
respuesta: "0"
tipo: completar

explicacion: |
  Si el circuito está abierto, no hay flujo de carga y la diferencia de potencial medida a través de los componentes en serie puede ser cero o la tensión de la fuente dependiendo de la configuración, pero en un interruptor abierto que interrumpe el paso principal, la corriente es nula.
```

### 23 — Pilas en serie

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["pilas", "voltaje"]

variables:
  idx: uno_de([0, 1, 2])
  cantidades: [3, 2, 2]
  voltajes: [1.5, 9, 1.5]

enunciado: "Se conectan {cantidades[idx]} pilas en serie, cada una con una tensión de {voltajes[idx]}V. ¿Cuál es la tensión total del conjunto?"

opciones_explicitas: [4.5, 18, 3.0, 6.0]
respuesta: cantidades[idx] * voltajes[idx]
tipo: mc

explicacion: |
  En una conexión en serie, las diferencias de potencial de cada componente se suman para obtener la tensión total del circuito.
```

### 24 — Relación carga y potencial

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["carga", "energia"]

variables:
  caso: uno_de([[["0.002", "2.0"], ["0.005", "5.0"], ["0.010", "10.0"]]])

enunciado: "Si se realiza un trabajo de {caso[0][0]} Joules para mover una carga de {caso[0][0]} Coulombs entre dos puntos, la diferencia de potencial es de ___ voltios."

respuestas_validas:
  - "2.0"
  - "5.0"
  - "10.0"
respuesta: caso[0][1]
tipo: completar

explicacion: |
  La diferencia de potencial (V) se define como el trabajo (W) realizado por unidad de carga (Q): V = W / Q.
```

### 25 — El proceso de carga de una batería

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["bateria", "voltaje"]

respuesta: verdadero
tipo: vf
enunciado: "Si la tensión del cargador es de 5V y la tensión de la batería es de 3.7V, ¿es la tensión del cargador mayor que la de la batería?"

explicacion: |
  Para que la carga fluya hacia la batería, la diferencia de potencial del cargador debe ser superior a la de la batería.
```
