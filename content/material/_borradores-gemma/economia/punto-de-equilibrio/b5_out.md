### 1 — Cálculo del punto de equilibrio
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos", "ventas", "equilibrio"]

variables:
  escenarios: [[150, 500, 10, 5, 2], [200, 800, 15, 7, 3], [120, 450, 8, 4, 2]]
  idx: uno_de([0, 1, 2])
  p_v: escenarios[idx][0]
  c_f: escenarios[idx][1]
  c_v: escenarios[idx][2]
  p_m: escenarios[idx][3]
  c_f_extra: escenarios[idx][4]

respuesta: c_f / (p_v - c_v)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una empresa tiene costos fijos de ${c_f}, un precio de venta de ${p_v} por unidad y un costo variable de ${c_v} por unidad. ¿Cuántas unidades debe vender para alcanzar el punto de equilibrio?"

pasos:
  - "Calcular el margen de contribución unitario: ${p_v} - ${c_v}"
  - "Dividir los costos fijos totales por el margen de contribución: ${c_f} / (${p_v} - ${c_v})"

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales. La fórmula es: Costos Fijos / (Precio de Venta - Costo Variable).
```

### 2 — Análisis de rentabilidad
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "ganancia"]

respuesta: falso
tipo: vf

enunciado: "Si una empresa vende una cantidad de unidades exactamente igual a su punto de equilibrio, ¿obtiene una ganancia positiva?"

explicacion: |
  En el punto de equilibrio, la utilidad es exactamente cero, ya que los ingresos cubren exactamente los costos totales, sin excedentes.
```

### 3 — Identificación de componentes
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["costos", "terminos"]

variables:
  datos: [["Costo Variable", "Costo Fijo", "Ingreso Total", "Utilidad"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Costo Variable", "Costo Fijo", "Ingreso Total", "Utilidad"]

enunciado: "El componente que representa los gastos que no cambian independientemente del nivel de producción (como el alquiler) es el: ___"

explicacion: |
  Los costos fijos son aquellos que permanecen constantes en un rango determinado de producción, sin importar si se produce mucho o poco.
```

### 4 — Determinación de la utilidad
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "utilidad"]]

variables:
  escenarios: [[100, 1000, 20, 10], [150, 1500, 30, 15], [200, 2000, 40, 20]]
  idx: uno_de([0, 1, 2])
  p_v: escenarios[idx][0]
  c_f: escenarios[idx][1]
  c_v: escenarios[idx][2]
  p_m: escenarios[idx][3]
  q: 150

respuesta: (q * p_v) - (c_f + (q * c_v))
tipo: input
tolerancia_abs: 0.01

enunciado: "Si los costos fijos son ${c_f}, el precio de venta es ${p_v}, el costo variable es ${c_v} y se venden ${q} unidades, ¿cuál es la utilidad total?"

pasos:
  - "Calcular Ingreso Total: ${q} * ${p_v}"
  - "Calcular Costo Total: ${c_f} + (${q} * ${c_v})"
  - "Restar: Ingreso Total - Costo Total"

explicacion: |
  La utilidad es la diferencia entre el ingreso total por ventas y el costo total (fijos + variables).
```

### 5 — Secuencia de cálculo del punto de equilibrio
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

respuesta: ["Identificar costos fijos", "Calcular margen de contribución", "Dividir costos fijos por margen"]
tipo: ordenar
opciones_explicitas: ["Identificar costos fijos", "Calcular margen de contribución", "Dividir costos fijos por margen"]

enunciado: "Ordena los pasos lógicos para calcular la cantidad de unidades en el punto de equilibrio:"

explicacion: |
  Primero se deben conocer los costos fijos, luego saber cuánto aporta cada unidad a cubrir esos costos (margen) y finalmente realizar la división.
```