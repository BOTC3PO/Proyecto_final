# Dibujo Tecnico — Escalas numericas y graficas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "escala"
tipo: completar
respuestas_validas:
  - "escala"

enunciado: "La relación matemática entre las dimensiones de un objeto representado en un plano y las dimensiones reales del objeto se denomina ___."

explicacion: |
  La escala es la razón de proporción que permite representar objetos de gran tamaño o muy pequeños en un formato manejable.
```

### 2 — Escala de Reducción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["reduccion", "conceptos"]

variables:
  escenario: uno_de([["1:50", "reducción"], ["2:1", "ampliación"], ["1:1", "natural"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reducción", "ampliación", "natural"]

enunciado: "Si un dibujo tiene una escala de {escenario[0]}, esto significa que estamos ante una escala de ___."

explicacion: |
  En una escala de reducción (ej. 1:50), el dibujo es más pequeño que el objeto real. En una de ampliación (ej. 2:1), el dibujo es más grande.
```

### 3 — Representación de Escala Natural

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala_natural", "verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que una escala 1:1 representa un objeto en su tamaño real, sin aumentarlo ni reducirlo?"

explicacion: |
  Verdadero. La escala 1:1 se conoce como escala natural, donde las dimensiones del dibujo coinciden con las del objeto real.
```

### 4 — Componentes de la Escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["notacion", "escala_numerica"]

respuesta: "1:5"
tipo: completar
respuestas_validas:
  - "1:5"

enunciado: "En la notación de escala numérica 1:5, el primer número representa la medida en el ___ y el segundo número la medida en la realidad."

pasos:
  - "Identificar que el primer término es la dimensión del dibujo."
  - "Identificar que el segundo término es la dimensión real."

explicacion: |
  En la escala 1:5, una unidad en el papel equivale a 5 unidades en la realidad.
```

### 5 — Orden de los procesos de escalado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta_orden: ["Medir objeto real", "Aplicar factor de escala", "Dibujar en papel"]
tipo: ordenar
opciones_explicitas: ["Dibujar en papel", "Medir objeto real", "Aplicar factor de escala"]

enunciado: "Ordena los pasos lógicos para representar un objeto real mediante una escala de reducción:"

explicacion: |
  Primero se obtiene la medida real, luego se calcula la dimensión correspondiente usando la escala y finalmente se traza el dibujo.
```

### 6 — Escala de reducción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "basico"
  tags: ["escala", "reduccion"]

variables:
  dim_real: 150
  dim_dibujo: 30

enunciado: "Si un componente mecánico mide {dim_real} mm en la realidad y en el plano se ha representado con {dim_dibujo} mm, la escala numérica aplicada es ___."

respuestas_validas:
  - "1:5"

respuesta: "1:5"
tipo: completar

explicacion: |
  La escala se calcula como la relación entre la medida del dibujo y la medida real:
  Escala = Dibujo / Real = 30 / 150 = 1/5, lo que se expresa como 1:5.
```

### 7 — Interpretación de escala de ampliación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "intermedio"
  tags: ["escala", "ampliacion"]

variables:
  escala_factor: 5
  escala_str: "5:1"

enunciado: "Un engranaje muy pequeño se representa en un plano con una escala de {escala_str}. ¿Qué significa esto respecto al tamaño del objeto?"

opciones_explicitas: ["El dibujo es 5 veces más grande que el objeto real", "El dibujo es 5 veces más pequeño que el objeto real", "El objeto real es 5 veces más grande que el dibujo", "El dibujo y el objeto tienen el mismo tamaño"]

respuesta: "El dibujo es 5 veces más grande que el objeto real"
tipo: mc

explicacion: |
  En una escala de ampliación (donde el primer número es mayor que el segundo, ej. 5:1), el objeto se representa con un tamaño superior al real para permitir ver detalles minuciosos.
```

### 8 — Cálculo de medida real

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  medida_plano: 45

enunciado: "En un plano con escala 1:10, una línea mide {medida_plano} mm. ¿Cuál es la longitud real de dicha línea en milímetros?"

respuestas_validas:
  - "450"

respuesta: "450"
tipo: completar

explicacion: |
  Para hallar la medida real desde el dibujo:
  Medida Real = Medida Dibujo * (Denominador / Numerador)
  Medida Real = 45 * (10 / 1) = 450 mm.
```

### 9 — Veracidad de escala gráfica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_graficas"
  nivel: "basico"
  tags: ["escala_grafica", "veracidad"]

enunciado: "La escala gráfica es una línea graduada dibujada en el plano que permite medir directamente dimensiones reales sin necesidad de realizar cálculos matemáticos. ¿Es esto verdadero o falso?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: completar
explicacion: |
  La escala gráfica es extremadamente útil porque, si el plano se reduce o amplía (por fotocopiado o digitalmente), la escala gráfica se escala proporcionalmente con el dibujo, manteniendo la precisión de la lectura.
```

### 10 — Proceso de representación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "avanzado"
  tags: ["procedimiento", "escala"]

enunciado: "Para representar correctamente un objeto de 2 metros de largo en un plano con escala 1:20, ¿cuál es el orden lógico de los pasos a seguir?"

opciones_explicitas: ["Convertir la medida real a la misma unidad que el dibujo", "Dividir la medida real por el denominador de la escala", "Dibujar la línea resultante en el plano"]

respuesta_orden: ["Convertir la medida real a la misma unidad que el dibujo", "Dividir la medida real por el denominador de la escala", "Dibujar la línea resultante en el plano"]
tipo: ordenar

explicacion: |
  1. Primero, pasamos 2 metros a 2000 mm para trabajar en la misma unidad que el dibujo.
  2. Dividimos 2000 mm / 20 = 100 mm.
  3. Dibujamos una línea de 100 mm en el papel.
```

### 11 — Escala de reducción vs ampliación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escalas", "reduccion", "ampliacion"]

respuesta: "reduccion"
tipo: mc
opciones_explicitas: ["reduccion", "ampliacion", "natural"]

enunciado: "Si un objeto real mide 100 mm y en el plano se representa con una medida de 10 mm, estamos utilizando una escala de ___."

explicacion: |
  Cuando la medida en el dibujo es menor que la medida real, se trata de una escala de reducción (ej: 1:10).
```

### 12 — Interpretación de la escala numérica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["escala_numerica", "interpretacion"]

variables:
  idx: uno_de([0, 1])
  escena: [[ "1:5", "el dibujo es 5 veces más grande que el objeto real" ], [ "5:1", "el dibujo es 5 veces más grande que el objeto real" ]]

respuesta: escena[idx][1]
tipo: mc
opciones_explicitas: ["el dibujo es 5 veces más grande que el objeto real", "el dibujo es 5 veces más pequeño que el objeto real", "el dibujo tiene el mismo tamaño que el objeto real"]

enunciado: "Si en un plano técnico aparece la escala {escena[idx][0]}, esto significa que {escena[idx][1]}."

explicacion: |
  En la escala numérica A:B, 'A' es la medida en el dibujo y 'B' es la medida real. Si A < B es reducción; si A > B es ampliación.
```

### 13 — Relación entre escala y medida real

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  idx: uno_de([0, 1])
  datos: [[ 20, 5 ], [ 50, 10 ]]

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si aplicamos una escala de 1:{datos[idx][0]} a un objeto cuya medida real es {datos[idx][1]} mm, ¿cuánto medirá la línea en el dibujo en mm?"

pasos:
  - "Identificar la escala (1:{datos[idx][0]})"
  - "Dividir la medida real entre el denominador de la escala: {datos[idx][1]} / {datos[idx][0]}"

explicacion: |
  Para hallar la medida del dibujo en una escala de reducción, se divide la medida real por el denominador de la escala.
```

### 14 — Veracidad de la escala gráfica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala_grafica", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "La escala gráfica (barra graduada) mantiene su validez incluso si el plano se imprime en un tamaño distinto al original (por ejemplo, al fotocopiarlo en un tamaño menor)."

explicacion: |
  A diferencia de la escala numérica, la escala gráfica es una representación visual que se escala junto con el dibujo, por lo que sigue siendo correcta tras una reducción o ampliación de la hoja.
```

### 15 — Pasos para el cálculo de escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["procedimiento", "ordenar"]

respuesta_orden: ["Medir la longitud en el plano", "Identificar la escala numérica", "Calcular la medida real mediante la proporción"]
tipo: ordenar
opciones_explicitas: ["Medir la longitud en el plano", "Identificar la escala numérica", "Calcular la medida real mediante la proporción"]

enunciado: "Ordena los pasos lógicos para determinar la medida real de un componente utilizando una escala de reducción en un plano físico."

explicacion: |
  Primero se obtiene la medida física en el papel, luego se consulta la escala del plano y finalmente se aplica la operación matemática (Medida dibujo * Denominador).
```

### 16 — Escala vs Proporción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "proporción"
tipo: mc
opciones_explicitas: ["escala", "proporción", "dimensión", "medida"]

enunciado: "Mientras que la escala es la relación matemática entre la representación y el objeto real, la ___ es la relación de semejanza entre las partes de un mismo objeto para mantener su forma."

explicacion: |
  La escala determina el tamaño de la representación respecto al objeto real, mientras que la proporción asegura que las partes del objeto mantengan su relación de tamaño entre sí para no deformar la figura.
```

### 17 — Escala de Reducción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escalas", "reduccion"]

variables:
  es_reduccion: falso

respuesta: es_reduccion
tipo: completar
enunciado: "En una escala de dibujo técnico, si el valor del denominador es mayor que el valor del numerador (ej. 1:50), estamos ante una escala de reducción."

explicacion: |
  Correcto. En una escala de reducción, el objeto real es más grande que el dibujo, por lo tanto, el número de la derecha (denominador) debe ser mayor.
```

### 18 — Escala Numérica vs Gráfica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["comparacion", "tipos_de_escala"]

tipo: mc
opciones_explicitas: ["numérica", "gráfica"]

respuesta: "numérica"

enunciado: "Si un plano se imprime en un tamaño distinto al original, la escala ___ pierde su validez directa, mientras que la escala gráfica (barra graduada) permanece exacta."

pasos:
  - "Identificar el tipo de escala que depende de la impresión física."
  - "Comparar la naturaleza de la escala numérica (relación de números) frente a la gráfica (representación visual)."

explicacion: |
  La escala numérica es una relación de valores que depende de la reproducción exacta del papel. La escala gráfica es una línea graduada dibujada que escala junto con el dibujo, manteniendo su veracidad siempre.
```

### 19 — Procedimiento de Cálculo de Escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

variables:
  escenario: uno_de([["10mm", "100mm", "1:10"], ["5cm", "20cm", "1:4"], ["2m", "50cm", "4:1"]])

respuesta: escenario[2]
tipo: completar

enunciado: "Para hallar la escala de un dibujo, se debe dividir la medida del objeto real entre la medida del dibujo. Si el objeto mide {escenario[0]} y el dibujo mide {escenario[1]}, la escala es ___."

pasos:
  - "Identificar la medida real y la medida en el papel."
  - "Dividir la medida real por la medida del dibujo para obtener la relación."
  - "Simplificar la fracción hasta obtener la forma 1:n o n:1."

explicacion: |
  La fórmula es Escala = Medida Real / Medida Dibujo. En el caso de 10mm/100mm, la relación es 0.1, que expresado como escala es 1:10.
```

### 20 — Relación de Escalas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["relaciones", "escalas"]

tipo: ordenar

enunciado: "Ordene las siguientes escalas de mayor a menor tamaño de representación (de la que representa al objeto en su tamaño real a la que lo representa más pequeño):"

opciones_explicitas: ["1:1", "1:5", "1:10", "1:50"]
respuesta_orden: ["1:1", "1:5", "1:10", "1:50"]

explicacion: |
  El orden correcto de tamaño de representación es de la escala natural (1:1) hacia las de reducción más agresivas (1:50). A medida que el denominador aumenta, el objeto se ve más pequeño en el papel.
```

### 21 — Escala de reducción

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala", "reduccion", "dimensiones"]

variables:
  idx: uno_de([0,1,2])
  reales: [100, 200, 50]
  etiquetas: ["1:50", "1:20", "1:10"]
  denominadores: [50, 20, 10]

enunciado: "Se desea representar una pieza real que mide {reales[idx]} mm en un plano utilizando una escala de {etiquetas[idx]}. ¿Cuál es la longitud que debe tener la pieza dibujada en el papel?"

pasos:
  - "Identificar la dimensión real."
  - "Aplicar la escala: Dimensión dibujo = Dimensión real / Denominador de la escala"

respuesta: reales[idx] / denominadores[idx]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  En una escala de reducción 1:N, la medida en el dibujo es la medida real dividida por N.
```

### 22 — Identificación de escala

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["teoria", "escala"]

enunciado: "Si un objeto de 5 metros de largo se representa en un plano con una longitud de 10 cm, ¿qué tipo de escala se está utilizando?"

opciones_explicitas: ["Escala de ampliación", "Escala de reducción", "Escala natural"]
respuesta: "Escala de reducción"
tipo: mc

explicacion: |
  Como la representación (10 cm) es menor que el objeto real (500 cm), se trata de una escala de reducción.
```

### 23 — Veracidad de escala gráfica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["escala_grafica", "verificacion"]

enunciado: "En un plano con escala gráfica, la barra graduada indica que un segmento de 2 cm representa 5 metros en la realidad. Si medimos un segmento en el dibujo que mide 4 cm, ¿representará 10 metros en la realidad?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Si 2 cm = 5 m, entonces 4 cm (el doble) representan 10 m (el doble). La escala gráfica mantiene la proporción.
```

### 24 — Conversión de unidades

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  idx: uno_de([0,1,2])
  reales_cm: [5, 12, 8]
  etiquetas: ["1:25", "1:50", "1:10"]
  denominadores: [25, 50, 10]

enunciado: "Un componente mecánico mide {reales_cm[idx]} cm en la realidad. Si se dibuja a escala {etiquetas[idx]}, ¿cuántos milímetros medirá en el papel?"

pasos:
  - "Convertir cm a mm."
  - "Dividir por el denominador de la escala."

respuesta: (reales_cm[idx] * 10) / denominadores[idx]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Primero convertimos la unidad real a la unidad solicitada (mm) y luego aplicamos la división de la escala.
```

### 25 — Orden de procesos de escalado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

enunciado: "Ordene los pasos lógicos para determinar la medida real de un elemento en un plano técnico a partir de una escala numérica 1:50."

opciones_explicitas: ["Medir la longitud en el papel", "Identificar el denominador de la escala", "Multiplicar la medida obtenida por el denominador"]
respuesta_orden: ["Medir la longitud en el papel", "Identificar el denominador de la escala", "Multiplicar la medida obtenida por el denominador"]
tipo: ordenar

explicacion: |
  Para hallar la medida real: 1) Mides el dibujo, 2) Sabes que la escala es 1/50, 3) Multiplicas la medida del dibujo por 50.
```
