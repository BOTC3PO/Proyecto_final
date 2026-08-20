### 1 — Escala de reducción
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "basico"
  tags: ["escala", "reduccion"]

variables:
  dim_real: 150
  dim_dibujo: 30
  escala: escala_calc(dim_dibujo, dim_real)

enunciado: "Si un componente mecánico mide {dim_real} mm en la realidad y en el plano se ha representado con {dim_dibujo} mm, la escala numérica aplicada es ___."

respuestas_validas: ["1:5"]

respuesta: "1:5"
tipo: completar

explicacion: |
  La escala se calcula como la relación entre la medida del dibujo y la medida real:
  Escala = Dibujo / Real = 30 / 150 = 1/5, lo que se expresa como 1:5.
```

### 2 — Interpretación de escala de ampliación
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

### 3 — Cálculo de medida real
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  escala_num: 1
  escala_den: 10
  medida_plano: 45
  medida_real: calc_real(medida_plano, escala_num, escala_den)

enunciado: "En un plano con escala 1:10, una línea mide {medida_plano} mm. ¿Cuál es la longitud real de dicha línea en milímetros?"

respuestas_validas: ["450"]

respuesta: "450"
tipo: completar

explicacion: |
  Para hallar la medida real desde el dibujo:
  Medida Real = Medida Dibujo * (Denominador / Numerador)
  Medida Real = 45 * (10 / 1) = 450 mm.
```

### 4 — Veracidad de escala gráfica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_graficas"
  nivel: "basico"
  tags: ["escala_grafica", "veracidad"]

enunciado: "La escala gráfica es una línea graduada dibujada en el plano que permite medir directamente dimensiones reales sin necesidad de realizar cálculos matemáticos. ¿Es esto verdadero o falso?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: vf

explicacion: |
  La escala gráfica es extremadamente útil porque, si el plano se reduce o amplía (por fotocopiado o digitalmente), la escala gráfica se escala proporcionalmente con el dibujo, manteniendo la precisión de la lectura.
```

### 5 — Proceso de representación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "avanzado"
  tags: ["procedimiento", "escala"]

enunciado: "Para representar correctamente un objeto de 2 metros de largo en un plano con escala 1:20, ¿cuál es el orden lógico de los pasos a seguir?"

opciones_explicitas: ["Convertir la medida real a la misma unidad que el dibujo, Dividir la medida real por el denominador de la escala, Dibujar la línea resultante en el plano", "Dividir la medida real por el denominador de la escala, Convertir la medida real a la misma unidad que el dibujo, Dibujar la línea resultante en el plano", "Dibujar la línea resultante en el plano, Dividir la medida real por el denominador de la escala, Convertir la medida real a la misma unidad que el dibujo"]

respuesta: ["Convertir la medida real a la misma unidad que el dibujo", "Dividir la medida real por el denominador de la escala", "Dibujar la línea resultante en el plano"]
tipo: ordenar

explicacion: |
  1. Primero, pasamos 2 metros a 2000 mm para trabajar en la misma unidad que el dibujo.
  2. Dividimos 2000 mm / 20 = 100 mm.
  3. Dibujamos una línea de 100 mm en el papel.
```