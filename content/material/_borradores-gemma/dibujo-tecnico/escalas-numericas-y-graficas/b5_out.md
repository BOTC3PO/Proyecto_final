### 1 — Escala de reducción
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala", "reduccion", "dimensiones"]

variables:
  escenario: [[100, "1:50"], [200, "1:20"], [50, "1:10"]]
  idx: uno_de([0,1,2])

enunciado: "Se desea representar una pieza real que mide {escenario[idx][0]} mm en un plano utilizando una escala de {escenario[idx][1]}. ¿Cuál es la longitud que debe tener la pieza dibujada en el papel?"

pasos:
  - "Identificar la dimensión real: {escenario[idx][0]} mm"
  - "Aplicar la escala: Dimensión dibujo = Dimensión real / Denominador de la escala"
  - "Calcular: {escenario[idx][0]} / {fraccion(1, 50)} (si es 1:50) o el correspondiente"

respuesta: {escenario[idx][0] / (si(escenario[idx][1] == "1:50", 50, si(escenario[idx][1] == "1:20", 20, 10)))}
tipo: input
tolerancia_abs: 0.01

explicacion: |
  En una escala de reducción 1:N, la medida en el dibujo es la medida real dividida por N.
```

### 2 — Identificación de escala
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

### 3 — Veracidad de escala gráfica
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

### 4 — Conversión de unidades
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  datos: [[5, "1:25"], [12, "1:50"], [8, "1:10"]]
  idx: uno_de([0,1,2])

enunciado: "Un componente mecánico mide {datos[idx][0]} cm en la realidad. Si se dibuja a escala {datos[idx][1]}, ¿cuántos milímetros medirá en el papel?"

pasos:
  - "Convertir cm a mm: {datos[idx][0]} * 10"
  - "Dividir por el denominador de la escala {datos[idx][1]}"

respuesta: { (datos[idx][0] * 10) / (si(datos[idx][1] == "1:25", 25, si(datos[idx][1] == "1:50", 50, 10))) }
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Primero convertimos la unidad real a la unidad solicitada (mm) y luego aplicamos la división de la escala.
```

### 5 — Orden de procesos de escalado
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

enunciado: "Ordene los pasos lógicos para determinar la medida real de un elemento en un plano técnico a partir de una escala numérica 1:50."

opciones_explicitas: ["Medir la longitud en el papel", "Identificar el denominador de la escala", "Multiplicar la medida obtenida por el denominador"]
respuesta: ["Medir la longitud en el papel", "Identificar el denominador de la escala", "Multiplicar la medida obtenida por el denominador"]
tipo: ordenar

explicacion: |
  Para hallar la medida real: 1) Mides el dibujo, 2) Sabes que la escala es 1/50, 3) Multiplicas la medida del dibujo por 50.
```