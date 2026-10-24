### 1 — Escala de reducción vs ampliación
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

### 2 — Interpretación de la escala numérica
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

### 3 — Relación entre escala y medida real
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
tipo: input
tolerancia_abs: 0

enunciado: "Si aplicamos una escala de 1:{datos[idx][0]} a un objeto cuya medida real es {datos[idx][1]} mm, ¿cuánto medirá la línea en el dibujo en mm?"

pasos:
  - "Identificar la escala (1:{datos[idx][0]})"
  - "Dividir la medida real entre el denominador de la escala: {datos[idx][1]} / {datos[idx][0]}"

explicacion: |
  Para hallar la medida del dibujo en una escala de reducción, se divide la medida real por el denominador de la escala.
```

### 4 — Veracidad de la escala gráfica
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

### 5 — Pasos para el cálculo de escala
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["procedimiento", "ordenar"]

respuesta: ["Medir la longitud en el plano", "Identificar la escala numérica", "Calcular la medida real mediante la proporción"]
tipo: ordenar
opciones_explicitas: ["Medir la longitud en el plano", "Identificar la escala numérica", "Calcular la medida real mediante la proporción"]

enunciado: "Ordena los pasos lógicos para determinar la medida real de un componente utilizando una escala de reducción en un plano físico."

explicacion: |
  Primero se obtiene la medida física en el papel, luego se consulta la escala del plano y finalmente se aplica la operación matemática (Medida dibujo * Denominador).
```