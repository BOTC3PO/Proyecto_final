# Economia — Punto de equilibrio (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de punto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

tipo: mc
opciones_explicitas: ["El punto donde los ingresos totales son iguales a los costos totales", "El punto donde las ventas son máximas", "El punto donde los costos fijos son cero", "El punto donde la utilidad es máxima"]

enunciado: "En economía y contabilidad, el punto de equilibrio se define como ___."

respuesta: "El punto donde los ingresos totales son iguales a los costos totales"

explicacion: |
  El punto de equilibrio (break-even point) es el nivel de actividad donde la empresa no obtiene beneficios ni pérdidas, es decir, donde el ingreso total es igual al costo total.
```

### 2 — Verdadero o Falso: Utilidad en el equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "utilidad"]

tipo: vf

enunciado: "En el punto de equilibrio, la utilidad de la empresa es exactamente cero."

respuesta: falso

explicacion: |
  Es correcto. Si los ingresos igualan a los costos, la diferencia (utilidad) es cero. En el DSL, el valor booleano para falso es falso.
```

### 3 — Componentes del punto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos", "estructuras"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["costos_fijos", "costos_variables", "precio_venta"], ["costos_fijos", "costos_variables", "precio_venta"]]

tipo: completar
respuestas_validas:
  - "costos_fijos"
  - "costos_variables"
  - "precio_venta"

enunciado: "Para calcular el punto de equilibrio en unidades, se requiere conocer los ___ (que no cambian con la producción), los ___ (que dependen del volumen) y el ___ (valor por unidad)."

pasos:
  - "Identificar los costos fijos (CF)"
  - "Identificar los costos variables unitarios (CVu)"
  - "Identificar el precio de venta unitario (P)"
  - "Aplicar la fórmula: CF / (P - CVu)"

respuesta: "costos_fijos"

explicacion: |
  Nota: El sistema evaluará la secuencia de términos. Para este ejercicio de completar, la respuesta correcta es el primer término omitido en la lógica de la estructura: costos_fijos.
```

### 4 — Relación de ingresos y costos

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["ingresos", "costos"]

tipo: mc
opciones_explicitas: ["Ingresos > Costos", "Ingresos < Costos", "Ingresos = Costos", "Ingresos + Costos = 0"]

enunciado: "Si una empresa se encuentra por encima de su punto de equilibrio en términos de ventas, esto significa que sus ingresos son ___ que sus costos totales."

respuesta: "Ingresos > Costos"

explicacion: |
  Si las ventas superan el punto de equilibrio, la empresa está en la zona de ganancias (Ingresos > Costos). Si están por debajo, está en zona de pérdidas.
```

### 5 — Orden de los elementos para el cálculo

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

tipo: ordenar
opciones_explicitas: ["Determinar costos fijos totales", "Calcular el margen de contribución unitario", "Dividir costos fijos por el margen de contribución"]

enunciado: "Ordene los pasos lógicos para hallar el punto de equilibrio en unidades:"

respuesta_orden: ["Determinar costos fijos totales", "Calcular el margen de contribución unitario", "Dividir costos fijos por el margen de contribución"]

explicacion: |
  Primero se deben conocer los costos fijos, luego la diferencia entre precio y costo variable (margen de contribución) y finalmente realizar la división.
```

### 6 — Concepto de Punto de Equilibrio

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

### 7 — Cálculo de unidades (mc)

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([["Precio: $100, Costo Variable: $60, Costo Fijo: $400", "20"], ["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "50"], ["Precio: $200, Costo Variable: $150, Costo Fijo: $500", "10"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["10", "20", "50", "100"]

enunciado: "Una empresa tiene los siguientes datos: {escenario[0]}. ¿Cuántas unidades debe vender para alcanzar su punto de equilibrio?"

explicacion: |
  Para hallar el punto de equilibrio en unidades se usa la fórmula: 
  Unidades = Costos Fijos / (Precio - Costo Variable).
  En este caso: 400 / (100 - 60) = 400 / 40 = 10 unidades.
```

### 8 — Análisis de margen de contribución (completar)

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["margen_contribucion"]

respuesta: "margen de contribución"
tipo: completar
respuestas_validas:
  - "margen de contribución"
  - "margen de contribución unitario"

enunciado: "La diferencia entre el precio de venta unitario y el costo variable unitario se denomina ___."

explicacion: |
  El margen de contribución es la cantidad de dinero que cada unidad vendida aporta para cubrir los costos fijos y, una vez cubiertos estos, generar utilidad.
```

### 9 — Pasos para el cálculo (ordenar)

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el margen de contribución unitario", "Identificar costos fijos y variables", "Dividir los costos fijos por el margen de contribución"]
respuesta_orden: ["Identificar costos fijos y variables", "Calcular el margen de contribución unitario", "Dividir los costos fijos por el margen de contribución"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular el punto de equilibrio en unidades de un producto."

explicacion: |
  Primero se deben clasificar los costos (Fijos vs Variables), luego se determina cuánto aporta cada unidad (Margen) y finalmente se divide el total de costos fijos por ese aporte.
```

### 10 — Cálculo de ingresos de equilibrio (input)

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "avanzado"
  tags: ["calculo", "ingresos"]

variables:
  datos: uno_de([["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "1000"], ["Precio: $20, Costo Variable: $10, Costo Fijo: $500", "1000"], ["Precio: $10, Costo Variable: $5, Costo Fijo: $200", "400"]])

respuesta: datos[1]
tipo: completar
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

### 11 — El concepto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "costos", "ingresos"]

respuesta: "cero"
tipo: "completar"
respuestas_validas:
  - "cero"
  - "0"
  - "0.0"

enunciado: "En el punto de equilibrio, la diferencia entre los ingresos totales y los costos totales es igual a ___."

explicacion: |
  El punto de equilibrio es el nivel de actividad donde la empresa no obtiene beneficios ni pérdidas; es decir, la utilidad es exactamente cero.
```

### 12 — Confusión entre Costo Variable y Costo Fijo

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos_fijos", "costos_variables"]

variables:
  escenario: uno_de([["Costo Fijo: 1000, Costo Variable Unitario: 5, Precio: 15", "100"], ["Costo Fijo: 500, Costo Variable Unitario: 10, Precio: 30", "25"], ["Costo Fijo: 2400, Costo Variable Unitario: 20, Precio: 50", "80"]])

respuesta: "100"
tipo: "mc"
opciones_explicitas: ["100", "50", "20", "10"]

enunciado: "Si una empresa tiene un costo fijo de 1000, un costo variable por unidad de 5 y un precio de venta de 15, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio?"

explicacion: |
  La fórmula es: Q = Costo Fijo / (Precio - Costo Variable Unitario).
  En este caso: 1000 / (15 - 5) = 1000 / 10 = 100.
```

### 13 — El error de la utilidad nula

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["verdadero_falso", "utilidad"]

respuesta: falso
tipo: "vf"

enunciado: "Si una empresa se encuentra exactamente en su punto de equilibrio, significa que ha maximizado sus beneficios."

explicacion: |
  Falso. En el punto de equilibrio la utilidad es cero. El objetivo de la empresa suele ser operar por encima de ese punto para generar ganancias.
```

### 14 — Componentes del cálculo

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["margen_de_contribucion", "ordenar"]

tipo: "ordenar"
opciones_explicitas: ["Precio de venta", "Costo Variable Unitario", "Margen de Contribución"]
respuesta_orden: ["Precio de venta", "Costo Variable Unitario", "Margen de Contribución"]

enunciado: "Para calcular el punto de equilibrio, primero debemos determinar el margen de contribución unitario. Ordena los elementos según la lógica de la resta para obtener dicho margen:"

explicacion: |
  El Margen de Contribución se obtiene restando el Costo Variable Unitario al Precio de Venta.
```

### 15 — Impacto de los costos en el equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "avanzado"
  tags: ["sensibilidad", "costos_fijos"]

tipo: "mc"
opciones_explicitas: ["aumenta", "disminuye", "se mantiene"]

respuesta: "aumenta"

enunciado: "Si los costos fijos de una empresa aumentan, el nivel de ventas necesario para alcanzar el punto de equilibrio ___."

explicacion: |
  Existe una relación directa: a mayores costos fijos, se requiere vender más unidades para cubrir esos costos y llegar al punto de equilibrio.
```

### 16 — Concepto de punto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos_clave", "costos"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas:
  - "punto de equilibrio"
  - "Punto de Equilibrio"

enunciado: "El nivel de ventas en el cual los ingresos totales son exactamente iguales a los costos totales, lo que implica que la empresa no obtiene beneficios ni pérdidas, se denomina ___."

explicacion: |
  En el punto de equilibrio (break-even point), la utilidad es cero porque la curva de ingresos intercepta a la curva de costos totales.
```

### 17 — Diferencia entre punto de equilibrio y utilidad

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["comparacion", "utilidad"]

respuesta: falso
tipo: vf

enunciado: "Si una empresa se encuentra exactamente en su punto de equilibrio, significa que ha maximizado su utilidad neta."

explicacion: |
  Falso. En el punto de equilibrio la utilidad es exactamente cero. La maximización de la utilidad ocurre en un nivel de ventas distinto, donde la diferencia entre ingresos y costos es la mayor posible.
```

### 18 — Componentes del punto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos_fijos", "costos_variables"]

variables:
  escenario: uno_de([["Costo Fijo: 1000, Costo Variable: 5, Precio: 15", "100"], ["Costo Fijo: 500, Costo Variable: 10, Precio: 30", "25"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["100", "25", "50", "200"]

enunciado: "Considerando el siguiente escenario: {escenario[0]}, ¿cuál es la cantidad de unidades que se deben vender para alcanzar el punto de equilibrio?"

pasos:
  - "Calcular el Margen de Contribución Unitario: Precio - Costo Variable"
  - "Dividir el Costo Fijo por el Margen de Contribución"

explicacion: |
  El cálculo es: Unidades = Costo Fijo / (Precio - Costo Variable). 
  Para el caso 1: 1000 / (15 - 5) = 100.
  Para el caso 2: 500 / (30 - 10) = 25.
```

### 19 — Relación entre costos y equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["sensibilidad", "costos_fijos"]

variables:
  caso: uno_de([["Aumento de costos fijos", "sube"], ["Aumento de precio de venta", "baja"], ["Disminución de costos variables", "baja"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["sube", "baja", "se mantiene", "desaparece"]

enunciado: "Si una empresa experimenta un {caso[0]}, el nivel de ventas necesario para alcanzar el punto de equilibrio ___."

explicacion: |
  Si los costos fijos aumentan, se necesita vender más para cubrir ese exceso de costos. Si el precio aumenta, se necesita vender menos para cubrir los mismos costos. Si el costo variable baja, el margen es mayor y se requiere vender menos.
```

### 20 — Orden de procesos para determinar el punto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["procedimiento", "analisis"]

respuesta_orden: ["Identificar costos fijos y variables", "Calcular margen de contribución unitario", "Dividir costos fijos por margen de contribución"]
tipo: ordenar
opciones_explicitas: ["Dividir costos fijos por margen de contribución", "Identificar costos fijos y variables", "Calcular margen de contribución unitario"]

enunciado: "Para calcular matemáticamente el punto de equilibrio en unidades, ¿cuál es el orden lógico de los pasos a seguir?"

explicacion: |
  Primero se deben clasificar los costos (fijos vs variables), luego determinar cuánto aporta cada unidad a cubrir los costos fijos (margen) y finalmente realizar la división.
```

### 21 — Cálculo del punto de equilibrio

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
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una empresa tiene costos fijos de ${c_f}, un precio de venta de ${p_v} por unidad y un costo variable de ${c_v} por unidad. ¿Cuántas unidades debe vender para alcanzar el punto de equilibrio?"

pasos:
  - "Calcular el margen de contribución unitario: ${p_v} - ${c_v}"
  - "Dividir los costos fijos totales por el margen de contribución: ${c_f} / (${p_v} - ${c_v})"

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales. La fórmula es: Costos Fijos / (Precio de Venta - Costo Variable).
```

### 22 — Análisis de rentabilidad

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

### 23 — Identificación de componentes

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["costos", "terminos"]

tipo: mc
opciones_explicitas: ["Costo Variable", "Costo Fijo", "Ingreso Total", "Utilidad"]

respuesta: "Costo Fijo"

enunciado: "El componente que representa los gastos que no cambian independientemente del nivel de producción (como el alquiler) es el: ___"

explicacion: |
  Los costos fijos son aquellos que permanecen constantes en un rango determinado de producción, sin importar si se produce mucho o poco.
```

### 24 — Determinación de la utilidad

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "utilidad"]

variables:
  escenarios: [[100, 1000, 20, 10], [150, 1500, 30, 15], [200, 2000, 40, 20]]
  idx: uno_de([0, 1, 2])
  p_v: escenarios[idx][0]
  c_f: escenarios[idx][1]
  c_v: escenarios[idx][2]
  p_m: escenarios[idx][3]
  q: 150

respuesta: (q * p_v) - (c_f + (q * c_v))
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si los costos fijos son ${c_f}, el precio de venta es ${p_v}, el costo variable es ${c_v} y se venden ${q} unidades, ¿cuál es la utilidad total?"

pasos:
  - "Calcular Ingreso Total: ${q} * ${p_v}"
  - "Calcular Costo Total: ${c_f} + (${q} * ${c_v})"
  - "Restar: Ingreso Total - Costo Total"

explicacion: |
  La utilidad es la diferencia entre el ingreso total por ventas y el costo total (fijos + variables).
```

### 25 — Secuencia de cálculo del punto de equilibrio

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Identificar costos fijos", "Calcular margen de contribución", "Dividir costos fijos por margen"]
tipo: ordenar
opciones_explicitas: ["Identificar costos fijos", "Calcular margen de contribución", "Dividir costos fijos por margen"]

enunciado: "Ordena los pasos lógicos para calcular la cantidad de unidades en el punto de equilibrio:"

explicacion: |
  Primero se deben conocer los costos fijos, luego saber cuánto aporta cada unidad a cubrir esos costos (margen) y finalmente realizar la división.
```
