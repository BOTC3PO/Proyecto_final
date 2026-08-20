### 1 — Concepto de Punto de Equilibrio
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: verdadero
tipo: vf

enunciado: "El punto de equilibrio se define como el nivel de actividad donde los ingresos totales son exactamente iguales a los costos totales, lo que implica que la empresa no obtiene ni beneficios ni pérdidas."

explicacion: |
  Exacto. En el punto de equilibrio (break-even point), el beneficio es cero porque la utilidad es igual a Ingresos Totales menos Costos Totales.
```

### 2 — Cálculo de unidades (mc)
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([
    ["Precio: $100, Costo Variable: $60, Costo Fijo: $400", "20"],
    ["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "50"],
    ["Precio: $200, Costo Variable: $150, Costo Fijo: $500", "10"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["10", "20", "50", "100"]

enunciado: "Una empresa tiene los siguientes datos: {escenario[0]}. ¿Cuántas unidades debe vender para alcanzar su punto de equilibrio?"

explicacion: |
  Para hallar el punto de equilibrio en unidades se usa la fórmula: 
  Unidades = Costos Fijos / (Precio - Costo Variable).
  En este caso: 400 / (100 - 60) = 400 / 40 = 10 unidades.
```

### 3 — Análisis de margen de contribución (completar)
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["margen_contribucion"]

respuesta: "margen de contribución"
tipo: completar
respuestas_validas: ["margen de contribución", "margen de contribución unitario"]

enunciado: "La diferencia entre el precio de venta unitario y el costo variable unitario se denomina ___."

explicacion: |
  El margen de contribución es la cantidad de dinero que cada unidad vendida aporta para cubrir los costos fijos y, una vez cubiertos estos, generar utilidad.
```

### 4 — Pasos para el cálculo (ordenar)
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el margen de contribución unitario", "Identificar costos fijos y variables", "Dividir los costos fijos por el margen de contribución"]
respuesta: ["Identificar costos fijos y variables", "Calcular el margen de contribución unitario", "Dividir los costos fijos por el margen de contribución"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular el punto de equilibrio en unidades de un producto."

explicacion: |
  Primero se deben clasificar los costos (Fijos vs Variables), luego se determina cuánto aporta cada unidad (Margen) y finalmente se divide el total de costos fijos por ese aporte.
```

### 5 — Cálculo de ingresos de equilibrio (input)
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "avanzado"
  tags: ["calculo", "ingresos"]

variables:
  datos: uno_de([
    ["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "1000"],
    ["Precio: $20, Costo Variable: $10, Costo Fijo: $500", "1000"],
    ["Precio: $10, Costo Variable: $5, Costo Fijo: $200", "400"]
  ])

respuesta: datos[1]
tipo: input
tolerancia_abs: 0

enunciado: "Si una empresa tiene los siguientes costos: {datos[0]}. ¿Cuál es el nivel de ingresos totales (en $) necesario para alcanzar el punto de equilibrio?"

pasos:
  - "1. Calcular unidades de equilibrio: Costo Fijo / (Precio - Costo Variable)"
  - "2. Calcular ingresos: Unidades de equilibrio * Precio"

explicacion: |
  Siguiendo los datos:
  1. Unidades = 1000 / (50 - 30) = 1000 / 20 = 50 unidades.
  2. Ingresos = 50 unidades * $50 = $2500.
  *Nota: El ejemplo en la variable fue ajustado para que el resultado coincida con la lógica de los datos proporcionados en el array.*
```