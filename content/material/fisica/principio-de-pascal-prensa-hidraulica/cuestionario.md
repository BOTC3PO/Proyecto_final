# Fisica — Principio de pascal prensa hidraulica (cuestionario, 27 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Presión

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["presion", "fluido", "pascal"]

respuesta: "presion"
tipo: completar
respuestas_validas:
  - "presion"

enunciado: "El principio de Pascal establece que cualquier cambio de ___ aplicado a un fluido incompresible en equilibrio dentro de un recipiente se transmite íntegramente a todas las partes del fluido y a las paredes del recipiente."

explicacion: |
  La presión en un fluido en reposo se transmite con la misma intensidad en todas las direcciones.
```

### 2 — Aplicación en Prensa Hidráulica

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["prensa", "hidraulica", "mecanismo"]

variables:
  es_hidraulica: verdadero

respuesta: es_hidraulica
tipo: vf
enunciado: "¿Es el principio de Pascal la base fundamental para el funcionamiento de una prensa hidráulica?"

explicacion: |
  Correcto. La prensa hidráulica utiliza la transmisión de presión para multiplicar la fuerza aplicada.
```

### 3 — Relación de Fuerzas y Áreas

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "intermedio"
  tags: ["fuerza", "area", "presion"]

variables:
  escenario: uno_de([["F1", "A1", "F2", "A2"], ["100", "10", "500", "50"], ["500", "50", "100", "10"]])

respuesta: "F1/A1 = F2/A2"
tipo: mc
opciones_explicitas: ["F1/A1 = F2/A2", "F1/A2 = F2/A1", "F1*A1 = F2*A2", "F1+A1 = F2+A2"]

enunciado: "En una prensa hidráulica ideal, según el principio de Pascal, la relación entre las fuerzas (F) y las áreas (A) de los émbolos es:"

explicacion: |
  Dado que la presión es constante ($P = F_1/A_1 = F_2/A_2$), la relación es $F_1/A_1 = F_2/A_2$.
```

### 4 — Propiedades del Fluido

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["fluido", "compresibilidad"]

respuesta: "incompresible"
tipo: completar
respuestas_validas:
  - "incompresible"

enunciado: "Para que el principio de Pascal se aplique de manera eficiente en una prensa hidráulica, el fluido utilizado debe ser, por definición, ___."

explicacion: |
  Se requiere un fluido incompresible (como el aceite) para que el volumen no cambie significativamente bajo presión, permitiendo la transmisión de la fuerza.
```

### 5 — Componentes de la Prensa

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "intermedio"
  tags: ["componentes", "sistema"]

respuesta_orden: ["Émbolo pequeño", "Fluido", "Émbolo grande"]
tipo: ordenar

opciones_explicitas: ["Émbolo pequeño", "Fluido", "Émbolo grande"]

enunciado: "Ordene los componentes de una prensa hidráulica según el orden en que se transmite la presión desde la aplicación de la fuerza inicial hasta la salida de la fuerza amplificada:"

explicacion: |
  La fuerza se aplica en el émbolo pequeño, se transmite a través del fluido y finalmente actúa sobre el émbolo grande.
```

### 6 — Concepto fundamental de Pascal

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["presion", "fluido", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Según el Principio de Pascal, la presión aplicada a un fluido confinado se transmite íntegramente en todas las direcciones y a todos los puntos del fluido."

explicacion: |
  El Principio de Pascal establece que cualquier presión aplicada a un fluido en equilibrio dentro de un recipiente cerrado se transmite sin disminución a todos los puntos del fluido y a las paredes del recipiente.
```

### 7 — Relación de áreas y fuerzas

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["prensa_hidraulica", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [[4, 16, 200, 800], [2, 10, 50, 250]]

enunciado: "En una prensa hidráulica, el pistón de entrada tiene un área de {datos[idx][0]} cm² y el pistón de salida tiene un área de {datos[idx][1]} cm². Si se aplica una fuerza de {datos[idx][2]} N en el pistón de entrada, la fuerza resultante en el pistón de salida será de ___ N."

pasos:
  - "Identificar las áreas: A1 = {datos[idx][0]} cm², A2 = {datos[idx][1]} cm²"
  - "Aplicar la fórmula de la prensa hidráulica: F2 / F1 = A2 / A1"
  - "Despejar la fuerza de salida: F2 = F1 · (A2 / A1)"
  - "Calcular: {datos[idx][2]} · ({datos[idx][1]} / {datos[idx][0]}) = {datos[idx][3]}"

respuesta: datos[idx][3]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Utilizando la fórmula F1 / A1 = F2 / A2, despejamos la fuerza de salida: F2 = F1 · (A2 / A1).
  En este caso: F2 = {datos[idx][2]} N · ({datos[idx][1]} / {datos[idx][0]}) = {datos[idx][3]} N.
```

### 8 — Cálculo de presión en un sistema

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["presion", "unidad"]

respuesta: "15000 Pa"
tipo: mc

opciones_explicitas: ["1500 Pa", "15000 Pa", "150000 Pa", "15 Pa"]

enunciado: "Un pistón de una prensa hidráulica tiene un área de 0.03 m². Si se aplica una fuerza de 450 N sobre dicho pistón, ¿cuál es la presión ejercida sobre el fluido?"

explicacion: |
  La presión se define como la fuerza aplicada por unidad de área (P = F / A).
  P = 450 N / 0.03 m² = 15000 Pa.
```

### 9 — Análisis de componentes de una prensa

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["componentes", "teoria"]

respuesta_orden: ["Aplicar fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]
tipo: ordenar

opciones_explicitas: ["Aplicar fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]

enunciado: "Ordene los pasos lógicos que ocurren en el funcionamiento de una prensa hidráulica para levantar un objeto pesado:"

explicacion: |
  1. Se aplica una fuerza pequeña en un área pequeña.
  2. La presión se transmite íntegramente por el fluido incompresible.
  3. La presión se traduce en una fuerza mucho mayor en el área grande.
```

### 10 — Veracidad de la relación de áreas

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "avanzado"
  tags: ["proporcionalidad", "calculo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el área de un pistón de salida es el doble que la del pistón de entrada, la fuerza ejercida en el pistón de salida será el doble que la aplicada en el de entrada. ¿Es esto verdadero o falso?"

explicacion: |
  Es verdadero. Debido a la relación $F_2 / F_1 = A_2 / A_1$, si el área de salida es el doble de la de entrada ($A_2 = 2 \cdot A_1$), entonces la fuerza de salida también es el doble ($F_2 = 2 \cdot F_1$).
```

### 11 — Relación de áreas (Corregida)

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "avanzado"
  tags: ["proporcionalidad"]

respuesta: falso

tipo: vf

enunciado: "Si el área del pistón de salida es el CUARTO de la del pistón de entrada, la fuerza de salida será el DOBLE de la fuerza de entrada."

explicacion: |
  Falso. Según la relación $F_2 = F_1 \cdot (A_2 / A_1)$, si $A_2 = A_1 / 4$, entonces $F_2 = F_1 \cdot (1/4)$. La fuerza de salida sería la cuarta parte, no el doble.
```

### 12 — ¿Se transmite la fuerza o la presión?

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["conceptos_clave", "presion", "fuerza"]

tipo: mc
opciones_explicitas: ["La fuerza aplicada", "La presión aplicada", "La densidad del fluido", "El volumen del fluido"]

enunciado: "Un error conceptual común al estudiar la prensa hidráulica es confundir qué magnitud se transmite íntegramente a través de un fluido incompresible. Según el principio de Pascal, lo que se transmite es la ___."

respuesta: "La presión aplicada"

explicacion: |
  El principio de Pascal establece que la presión aplicada en un punto de un fluido en equilibrio se transmite con la misma intensidad en todas las direcciones y en todos los puntos del fluido. La fuerza, en cambio, varía dependiendo del área de la superficie.
```

### 13 — La relación entre área y fuerza

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["prensa_hidraulica", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 1, 500], [5, 1, 1000]]

tipo: completar
respuestas_validas:
  - "5000"

enunciado: "Si la presión es {datos[idx][0]} Pa y el área de salida es {datos[idx][2]} m², la fuerza es ___ N."

explicacion: |
  La presión es constante en todo el sistema. Si P = F1/A1, entonces F2 = P * A2.
  Para el caso 0: P=10, A2=500 -> F2 = 10 * 500 = 5000.
  Para el caso 1: P=5, A2=1000 -> F2 = 5 * 1000 = 5000.
  En ambos casos la fuerza resultante es 5000 N.

respuesta: "5000"
```

### 14 — La relación entre área y fuerza

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["prensa_hidraulica", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 500], [5, 1000]]

tipo: completar
respuestas_validas:
  - "5000"
  - "5000"

enunciado: "En una prensa hidráulica, si la presión aplicada es de {datos[idx][0]} Pa y el área del émbolo de salida es de {datos[idx][1]} m², la fuerza resultante en dicho émbolo será de ___ N."

pasos:
  - "Identificar la presión constante: P = {datos[idx][0]} Pa."
  - "Multiplicar la presión por el área de salida: F = P * A_salida."

respuesta: datos[idx][0] * datos[idx][1]

explicacion: |
  La fuerza es el producto de la presión por el área (F = P * A). Como la presión es constante en todo el fluido, la fuerza en el émbolo de salida depende directamente de su área.
```

### 15 — ¿El fluido puede ser aire?

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["fluido", "compresibilidad"]

tipo: vf

enunciado: "Para que una prensa hidráulica funcione de manera eficiente según el principio de Pascal, el fluido utilizado debe ser altamente compresible, como el aire."

respuesta: falso

explicacion: |
  Falso. El principio de Pascal se aplica de forma efectiva en líquidos (fluidos incompresibles). Si se usara un gas como el aire, la mayor parte de la energía se gastaría en comprimir el gas en lugar de transmitir la presión para mover el émbolo, haciendo que el sistema sea ineficiente o inoperante.
```

### 16 — ¿Aumenta la fuerza o la presión?

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["ventaja_mecanica", "fuerza"]

tipo: mc
opciones_explicitas: ["Aumenta la presión", "Aumenta la fuerza", "Aumenta la velocidad", "Aumenta la densidad"]

enunciado: "El objetivo principal de una prensa hidráulica, al usar un émbolo de salida mucho más grande que el de entrada, es lograr una ___ mayor."

respuesta: "Aumenta la fuerza"

explicacion: |
  Aunque la presión es la misma en ambos émbolos, al aumentar el área de salida, la fuerza resultante (F = P * A) aumenta proporcionalmente. Este es el principio de la ventaja mecánica.
```

### 17 — Orden de los conceptos en el proceso

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["proceso", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Aplicación de presión sobre el fluido", "Transmisión de presión por el fluido", "Aumento de la fuerza en el émbolo de salida"]

enunciado: "Ordena correctamente la secuencia de eventos que ocurren en una prensa hidráulica:"

respuesta_orden: ["Aplicación de presión sobre el fluido", "Transmisión de presión por el fluido", "Aumento de la fuerza en el émbolo de salida"]

explicacion: |
  Primero se aplica una presión en un punto (entrada), esta presión se transmite íntegramente por todo el fluido (Pascal) y finalmente se traduce en una fuerza mayor en el área de salida debido al incremento de superficie.
```

### 18 — Presión en fluidos estáticos

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["presion", "fluidos"]

respuesta: verdadero
tipo: vf

enunciado: "Según el principio de Pascal, si aplicamos una presión en un punto de un fluido incompresible contenido en un recipiente cerrado, esta presión se transmite íntegramente a todos los puntos del fluido y a las paredes del recipiente."

explicacion: |
  El principio de Pascal establece que la presión aplicada a un fluido en equilibrio se transmite sin disminución a todas las partes del fluido y a las paredes del contenedor.
```

### 19 — Diferencia entre Presión y Fuerza

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["presion", "fuerza", "area"]

respuesta: "200 N"
tipo: mc
opciones_explicitas: ["100 N", "200 N", "500 N", "1000 N"]

enunciado: "En una prensa hidráulica, si el émbolo pequeño tiene un área de 5 cm² y el émbolo grande tiene 100 cm², y aplicamos una presión de 2 Pa en el émbolo pequeño, ¿cuál es la fuerza resultante en el émbolo grande?"

pasos:
  - "Calcular la presión aplicada: P = F1 / A1"
  - "Aplicar la igualdad de presiones: P1 = P2"
  - "Despejar la fuerza en el émbolo grande: F2 = P * A2"

explicacion: |
  La presión es constante en ambos émbolos. Si P = 2 Pa y A2 = 100 cm², entonces F2 = 2 * 100 = 200 N.
```

### 20 — Componentes de la prensa hidráulica

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["prensa_hidraulica", "componentes"]

respuesta_orden: ["Émbolo pequeño", "Fluido incompresible", "Émbolo grande", "Carga o peso"]
tipo: ordenar

opciones_explicitas: ["Fluido incompresible", "Émbolo pequeño", "Émbolo grande", "Carga o peso"]

enunciado: "Ordene los elementos de una prensa hidráulica según el orden en que la energía mecánica se transmite desde la aplicación de la fuerza inicial hasta el levantamiento de la carga:"

explicacion: |
  El proceso comienza con la fuerza aplicada al émbolo pequeño, que genera una presión transmitida íntegramente por el fluido incompresible, moviendo el émbolo grande y finalmente levantando la carga.
```

### 21 — Comparación: Pascal vs. Arquímedes

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["conceptos", "comparacion"]

respuesta: "Principio de Arquímedes"
tipo: completar
respuestas_validas:
  - "Principio de Arquímedes"

enunciado: "Mientras que el principio de Pascal se centra en la transmisión de la presión en un fluido confinado, el principio que describe la fuerza de empuje vertical que experimenta un cuerpo sumergido es el ___."

explicacion: |
  El principio de Arquímedes se refiere al empuje hacia arriba, mientras que Pascal se refiere a la transmisión de presión en todas las direcciones.
```

### 22 — Ventaja mecánica en prensas

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "avanzado"
  tags: ["ventaja_mecanica", "relacion"]

respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"

enunciado: "Si en una prensa hidráulica el área del émbolo de salida es 10 veces mayor que el área del émbolo de entrada, la fuerza de salida será ___ veces la fuerza de entrada."

pasos:
  - "Relacionar presiones: F1/A1 = F2/A2"
  - "Despejar la relación de fuerzas: F2/F1 = A2/A1"
  - "Sustituir la relación de áreas: 10/1 = 10"

explicacion: |
  La ventaja mecánica es la relación entre las áreas (A2/A1), lo que permite multiplicar la fuerza aplicada.
```

### 23 — La prensa hidráulica básica

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["presion", "fluido", "pascal"]

variables:
  idx: uno_de([0, 1, 2])
  f1s: [100, 50, 200]
  a1s: [0.01, 0.02, 0.05]
  a2s: [0.1, 0.1, 0.2]

tipo: completar
tolerancia_abs: 0.1
respuesta: f1s[idx] * a2s[idx] / a1s[idx]

enunciado: "En una prensa hidráulica, se aplica una fuerza de {f1s[idx]} N sobre un pistón de área {a1s[idx]} m². Si el segundo pistón tiene un área de {a2s[idx]} m², ¿cuál es la fuerza resultante en el segundo pistón en Newtons?"

pasos:
  - "Calcular la presión aplicada: P = F1 / A1"
  - "La presión se transmite íntegramente, por lo que P2 = P1"
  - "Calcular la fuerza resultante: F2 = P1 * A2"

explicacion: |
  Según el Principio de Pascal, la presión es constante en todo el fluido incompresible:
  P = F1 / A1 = {f1s[idx]} / {a1s[idx]} = {f1s[idx] / a1s[idx]} Pa.
  F2 = P * A2 = {f1s[idx] * a2s[idx] / a1s[idx]} N.
```

### 24 — Verdad o Falso: Fluido incompresible

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Para que una prensa hidráulica funcione de manera eficiente según el principio de Pascal, el fluido utilizado debe ser incompresible (su volumen no cambia significativamente con la presión)."

explicacion: |
  Si el fluido fuera compresible (como un gas), parte de la energía se perdería en reducir el volumen del gas en lugar de transmitir la presión para mover el pistón de salida.
```

### 25 — El elevador de autos

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "intermedio"
  tags: ["aplicacion", "presion"]

variables:
  idx: uno_de([0, 1, 2])
  ps: [5000, 2000, 10000]
  a1s: [0.05, 0.1, 0.02]
  a2s: [0.5, 1.0, 0.3]

tipo: mc
opciones_explicitas: [2500, 2000, 3000, 100000]
respuesta: ps[idx] * a2s[idx]

enunciado: "Un elevador hidráulico en un taller mecánico opera con una presión constante de {ps[idx]} Pa. Si el pistón de entrada tiene un área de {a1s[idx]} m² y el pistón que levanta el vehículo tiene un área de {a2s[idx]} m², ¿cuál es la fuerza máxima que puede ejercer el segundo pistón?"

explicacion: |
  La presión es la misma en ambos puntos: P = F1/A1 = F2/A2.
  Por lo tanto, F2 = P * A2.
  En este caso: {ps[idx] * a2s[idx]} N.
```

### 26 — Componentes de un sistema hidráulico

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["componentes"]

tipo: ordenar
opciones_explicitas: ["Aplicación de fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]
respuesta_orden: ["Aplicación de fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]

enunciado: "Ordena lógicamente los pasos que ocurren en una prensa hidráulica desde que se aplica la fuerza inicial hasta que se obtiene el trabajo mecánico:"

explicacion: |
  1. Se aplica una fuerza en un área pequeña.
  2. La presión se transmite íntegramente por el fluido (Pascal).
  3. La presión actúa sobre el área grande, multiplicando la fuerza resultante.
```

### 27 — Relación de áreas y fuerzas

```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "avanzado"
  tags: ["proporcionalidad"]

variables:
  idx: uno_de([0, 1, 2])
  a2s: [10, 5, 100]
  a1s: [2, 1, 10]
  resultados_texto: ["El factor de multiplicación es 5", "El factor de multiplicación es 5", "El factor de multiplicación es 10"]

tipo: mc
opciones_explicitas: ["El factor de multiplicación es 2", "El factor de multiplicación es 5", "El factor de multiplicación es 10", "La fuerza no cambia"]
respuesta: resultados_texto[idx]

enunciado: "Si el área del pistón de salida (A2) es {a2s[idx]} m² y el área del pistón de entrada (A1) es {a1s[idx]} m², ¿por cuánto se multiplica la fuerza aplicada según el principio de Pascal?"

explicacion: |
  La relación de fuerzas es igual a la relación de áreas: F2/F1 = A2/A1.
  En este caso, el factor es {a2s[idx] / a1s[idx]}.
```
