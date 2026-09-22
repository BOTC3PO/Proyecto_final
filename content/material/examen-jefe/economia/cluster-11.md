# Examen jefe — [PENDIENTE #776]

> Logro #776. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **101 preguntas totales** en 5/5 secciones.

---

## Sección: punto-de-equilibrio (25 preguntas)

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

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "utilidad"]

tipo: vf

enunciado: "En el punto de equilibrio, la utilidad de la empresa es exactamente cero."

respuesta: verdadero

explicacion: |
  Es correcto. Si los ingresos igualan a los costos, la diferencia (utilidad) es cero.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos", "estructuras"]

tipo: completar
respuestas_validas:
  - "costos_fijos"

enunciado: "Para calcular el punto de equilibrio en unidades, se requiere conocer los ___ (que no cambian con la producción), los costos variables (que dependen del volumen) y el precio de venta (valor por unidad)."

pasos:
  - "Identificar los costos fijos (CF)"
  - "Identificar los costos variables unitarios (CVu)"
  - "Identificar el precio de venta unitario (P)"
  - "Aplicar la fórmula: CF / (P - CVu)"

respuesta: "costos_fijos"

explicacion: |
  Para calcular el punto de equilibrio se necesitan los costos fijos, los costos variables unitarios y el precio de venta.
```

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

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([["Precio: $100, Costo Variable: $60, Costo Fijo: $400", "10"], ["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "50"], ["Precio: $200, Costo Variable: $150, Costo Fijo: $500", "10"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["10", "20", "50", "100"]

enunciado: "Una empresa tiene los siguientes datos: {escenario[0]}. ¿Cuántas unidades debe vender para alcanzar su punto de equilibrio?"

explicacion: |
  Para hallar el punto de equilibrio en unidades se usa la fórmula: 
  Unidades = Costos Fijos / (Precio - Costo Variable).
  En este caso: 400 / (100 - 60) = 400 / 40 = 10 unidades.
```

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

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "avanzado"
  tags: ["calculo", "ingresos"]

variables:
  datos: uno_de([["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "2500"], ["Precio: $20, Costo Variable: $10, Costo Fijo: $500", "1000"], ["Precio: $10, Costo Variable: $5, Costo Fijo: $200", "400"]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa tiene los siguientes costos: {datos[0]}. ¿Cuál es el nivel de ingresos totales (en $) necesario para alcanzar el punto de equilibrio?"

pasos:
  - "1. Calcular unidades de equilibrio: Costo Fijo / (Precio - Costo Variable)"
  - "2. Calcular ingresos: Unidades de equilibrio * Precio"

explicacion: |
  Siguiendo los datos:
  1. Unidades = Costo Fijo / (Precio - Costo Variable)
  2. Ingresos de equilibrio = Unidades de equilibrio * Precio
```

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

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos_fijos", "costos_variables"]

respuesta: "100"
tipo: "mc"
opciones_explicitas: ["100", "50", "20", "10"]

enunciado: "Si una empresa tiene un costo fijo de 1000, un costo variable por unidad de 5 y un precio de venta de 15, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio?"

explicacion: |
  La fórmula es: Q = Costo Fijo / (Precio - Costo Variable Unitario).
  En este caso: 1000 / (15 - 5) = 1000 / 10 = 100.
```

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

## Sección: recibo-de-sueldo/general (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo básico?"
tipo: mc
opciones_explicitas:
  - "El monto acordado en el contrato o convenio, antes de cualquier ajuste"
  - "Lo que efectivamente se cobra al final"
  - "El total de los descuentos"
respuesta: "El monto acordado en el contrato o convenio, antes de cualquier ajuste"

explicacion: |
  Es el punto de partida, antes de sumar adicionales o restar
  descuentos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo bruto?"
tipo: mc
opciones_explicitas:
  - "El básico más los adicionales, antes de descontar nada"
  - "Lo que efectivamente se cobra"
  - "Sólo los descuentos"
respuesta: "El básico más los adicionales, antes de descontar nada"

explicacion: |
  Bruto = Básico + Adicionales.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo neto?"
tipo: mc
opciones_explicitas:
  - "Lo que efectivamente se cobra, después de los descuentos"
  - "El monto acordado en el contrato"
  - "El bruto sin ningún ajuste"
respuesta: "Lo que efectivamente se cobra, después de los descuentos"

explicacion: |
  Neto = Bruto − Descuentos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  basico: random(20, 90) * 1000
  adicional: random(2, 20) * 1000

respuesta: basico + adicional
tipo: input
tolerancia_abs: 0

enunciado: "El básico es ${basico} y los adicionales suman ${adicional}. ¿Cuál es el sueldo bruto?"

explicacion: |
  Se suma el básico más los adicionales.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000

respuesta: bruto - descuentos
tipo: input
tolerancia_abs: 0

enunciado: "El sueldo bruto es ${bruto} y los descuentos suman ${descuentos}. ¿Cuál es el sueldo neto?"

explicacion: |
  Se resta el total de descuentos al bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  neto: bruto - random(3, 25) * 1000

respuesta: bruto - neto
tipo: input
tolerancia_abs: 0

enunciado: "El sueldo bruto es ${bruto} y el neto es ${neto}. ¿Cuánto suman los descuentos?"

explicacion: |
  Descuentos = Bruto − Neto (la misma resta, mirada al revés).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  porcentaje: uno_de([5, 10, 15, 20])

respuesta: bruto * porcentaje / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto} y un descuento puntual es del {porcentaje}%. ¿Cuánto es ese descuento en pesos?"

explicacion: |
  Se calcula el porcentaje del bruto, igual que cualquier cálculo de
  porcentaje.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  basico: random(20, 90) * 1000
  antiguedad: random(1, 10) * 1000
  presentismo: random(1, 8) * 1000

respuesta: basico + antiguedad + presentismo
tipo: input
tolerancia_abs: 0

enunciado: "Básico ${basico}, más antigüedad ${antiguedad}, más presentismo ${presentismo}. ¿Cuál es el sueldo bruto?"

explicacion: |
  Se suman todos los componentes: básico y cada adicional.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo bruto es la suma del básico más todos los adicionales."

explicacion: |
  Es la fórmula central del primer paso del recibo.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo neto es el bruto menos todos los descuentos."

explicacion: |
  Es la fórmula central del segundo paso del recibo.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo neto nunca puede ser mayor que el sueldo bruto."

explicacion: |
  Los descuentos restan (o, como mucho, no restan nada): el neto nunca
  supera al bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando alguien dice \"gano tanto por mes\", casi siempre se refiere al sueldo neto (lo que ve reflejado en su cuenta)."

explicacion: |
  El bruto es más el número que figura en ofertas de trabajo o
  negociaciones, no el que la gente usa en la conversación cotidiana.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000
  correcto: bruto - descuentos

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - bruto + descuentos
  - descuentos - bruto

enunciado: "Bruto ${bruto}, descuentos ${descuentos}. ¿Cuál es el neto?"

explicacion: |
  Las otras opciones suman en vez de restar, o restan al revés.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "verificacion"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000
  correcto: bruto - descuentos
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? Bruto ${bruto}, descuentos ${descuentos}, neto ${mostrado}."

explicacion: |
  Se vuelve a restar y se compara.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  basico: random(20, 90) * 1000
  adicional: random(2, 20) * 1000
  bruto: basico + adicional

tipo: completar
enunciado: "Completá: ___ (básico) + ${adicional} (adicionales) = ${bruto} (bruto)."
respuestas_validas:
  - basico

explicacion: |
  Se despeja restando: bruto − adicionales = básico.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(30, 150) * 1000
  porcentaje: uno_de([10, 15, 20])

respuesta: bruto * (1 - porcentaje / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto}, y los descuentos suman un {porcentaje}% del bruto. ¿Cuál es el neto?"

pasos:
  - "{bruto} × (1 - {porcentaje}/100) = {bruto * (1 - porcentaje / 100)}"

explicacion: |
  Descontar un porcentaje es multiplicar por (1 − porcentaje/100).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(30, 150) * 1000
  p1: uno_de([5, 10])
  p2: uno_de([3, 5])

respuesta: bruto - (bruto * p1 / 100) - (bruto * p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto}, con dos descuentos calculados por separado sobre el bruto: uno del {p1}% y otro del {p2}%. ¿Cuál es el neto?"

pasos:
  - "{bruto} - ({bruto}×{p1}/100) - ({bruto}×{p2}/100) = {bruto - (bruto * p1 / 100) - (bruto * p2 / 100)}"

explicacion: |
  Cuando cada descuento se calcula sobre el bruto (no en cadena), se
  pueden restar por separado.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "comparacion"]

variables:
  a: random(30, 150) * 1000
  b: random(30, 150) * 1000

restricciones:
  - a != b

respuesta: (a > b)
tipo: vf

enunciado: "¿Es ${a} de sueldo bruto mayor que ${b}?"

explicacion: |
  Se comparan directamente los montos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "orden"]

tipo: ordenar
enunciado: "Ordená estos sueldos netos de menor a mayor."
opciones_explicitas:
  - "$85.000"
  - "$62.000"
  - "$120.000"
  - "$45.000"
respuesta_orden: ["$45.000", "$62.000", "$85.000", "$120.000"]

explicacion: |
  Se ordenan como cualquier lista de montos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los descuentos del sueldo suelen financiar sistemas colectivos (como jubilación futura o cobertura de salud), no son sólo \"plata perdida\"."

explicacion: |
  El detalle concreto de qué se financia varía según el país y el
  sistema — pero la lógica de fondo es esa.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Qué adicionales tiene un sueldo (antigüedad, presentismo, horas extra...) depende de cada trabajo y convenio puntual, no es igual en todos los empleos."

explicacion: |
  Lo universal es la fórmula (básico + adicionales = bruto), no la lista
  específica de adicionales.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Básico, bruto y neto son tres números distintos de un mismo sueldo, y confundirlos es un error común."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: sectores-economicos (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_primario", "clasificacion"]

variables:
  actividad: uno_de(["agricultura", "ganadería", "pesca", "minería"])
  descripcion: |
    Si {actividad} == "agricultura" entonces "cultivo de plantas"
    elif {actividad} == "ganadería" entonces "cría de animales"
    elif {actividad} == "pesca" entonces "captura de peces"
    else "extracción de minerales"

respuesta: "sector_primario"
tipo: input

enunciado: "La actividad de {actividad}, que implica {descripcion}, se clasifica dentro del sector económico:"

explicacion: |
  El sector primario comprende las actividades que extraen recursos naturales directamente del medio ambiente sin transformarlos significativamente.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_secundario", "industria"]

variables:
  producto: uno_de(["automóvil", "camisa", "cemento"])
  proceso: uno_de(["ensamblaje", "tejido", "mezclado"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La fabricación de un {producto} mediante el proceso de {proceso} corresponde al sector:"

explicacion: |
  El sector secundario transforma las materias primas en bienes manufacturados, agregando valor mediante la industria o la construcción.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["evolucion", "historia_economica"]

variables:
  etapa: uno_de(["preindustrial", "industrial", "postindustrial"])
  sector_dominante: |
    si etapa == "preindustrial" entonces "primario"
    si etapa == "industrial" entonces "secundario"
    si etapa == "postindustrial" entonces "terciario"

respuesta: sector_dominante
tipo: input

enunciado: "En la etapa de {etapa}, el sector económico con mayor peso en el empleo y el PIB suele ser el sector {sector_dominante}."

explicacion: |
  Las economías evolucionan desde la dependencia del sector primario, pasando por la industrialización (secundario), hasta predominar los servicios (terciario) en etapas avanzadas.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["argentina", "primario"]

variables:
  recurso: uno_de(["soja", "trigo", "carne", "petróleo"])

respuesta: "sector_primario"
tipo: input

enunciado: "La exportación de {recurso} es una actividad típica del sector económico:"

explicacion: |
  La producción y exportación de materias primas agrícolas o energéticas corresponde al sector primario, base de la economía argentina.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["sector_cuaternario", "tecnologia"]

variables:
  actividad: uno_de(["investigación científica", "desarrollo de software", "consultoría estratégica"])

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La actividad de {actividad} se clasifica tradicionalmente en el sector cuaternario o de conocimiento."

explicacion: |
  El sector cuaternario es una extensión del terciario que se enfoca en el conocimiento, la información y la tecnología, siendo clave en economías modernas.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_terciario", "ejemplos"]

variables:
  negocio: uno_de(["restaurante", "banco", "hospital", "empresa de transporte"])

respuesta: "sector_terciario"
tipo: input

enunciado: "Un {negocio} pertenece al sector económico:"

explicacion: |
  Los negocios que ofrecen servicios (comida, dinero, salud, movimiento) pertenecen al sector terciario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["desarrollo", "estructura_economica"]

variables:
  pais_tipo: uno_de(["desarrollado", "en desarrollo"])
  peso_terciario: |
    si pais_tipo == "desarrollado" entonces "mayor"
    si pais_tipo == "en desarrollo" entonces "menor"

respuesta: "sector_terciario"
tipo: input

enunciado: "En un país {pais_tipo}, el sector con mayor peso relativo en el PIB suele ser el sector {peso_terciario} (nota: completar con el nombre del sector que predomina)."

explicacion: |
  En economías desarrolladas, el sector terciario (y cuaternario) domina la estructura económica, mientras que en las en desarrollo el primario o secundario tienen mayor peso relativo.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["transformacion", "secundario"]

variables:
  materia: uno_de(["leche", "caña de azúcar", "trigo"])
  producto: uno_de(["queso", "etanol", "harina"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La transformación de {materia} en {producto} es una actividad del sector:"

explicacion: |
  La industrialización de productos primarios (leche a queso, caña a etanol) corresponde al sector secundario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["clasificacion", "ejercicios"]

variables:
  actividad: uno_de(["extracción de petróleo", "construcción de puentes", "enseñanza universitaria"])
  sector_correcto: |
    si actividad == "extracción de petróleo" entonces "primario"
    si actividad == "construcción de puentes" entonces "secundario"
    si actividad == "enseñanza universitaria" entonces "terciario"

respuesta: sector_correcto
tipo: input

enunciado: "La actividad '{actividad}' corresponde al sector:"

explicacion: |
  Se debe identificar si la actividad extrae recursos (primario), transforma/construye (secundario) o presta un servicio (terciario).
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["bienes_capital", "industria"]

variables:
  bien: uno_de(["maquinaria agrícola", "computadora industrial", "ladrillo"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La fabricación de {bien} es una actividad del sector secundario, ya sea como bien de consumo o de capital."

explicacion: |
  El sector secundario produce tanto bienes de consumo final como bienes de capital necesarios para otras industrias.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["definicion", "servicios"]

variables:
  concepto: "servicios"

respuesta: "sector_terciario"
tipo: input

enunciado: "El sector que se dedica a la prestación de {concepto} en lugar de la producción de bienes físicos es el:"

explicacion: |
  El sector terciario se define por la generación de servicios intangibles.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "primario"]

variables:
  producto: uno_de(["granos", "carne", "leche"])

respuesta: "sector_primario"
tipo: input

enunciado: "La producción de {producto} es crucial para la seguridad alimentaria y pertenece al sector:"

explicacion: |
  La base de la alimentación proviene del sector primario (agricultura y ganadería).
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["cuaternario", "investigacion"]

variables:
  area: uno_de(["biotech", "finanzas algorítmicas", "consultoría ambiental"])

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La actividad en el área de {area} se clasifica en el sector cuaternario."

explicacion: |
  El sector cuaternario engloba actividades basadas en el conocimiento especializado y la innovación.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["empleo", "terciario"]

variables:
  pais: uno_de(["Argentina", "Alemania", "Japón"])
  sector_empleo: "terciario"

respuesta: "sector_terciario"
tipo: input

enunciado: "En la mayoría de las economías modernas, incluido {pais}, el sector que genera más empleo es el sector:"

explicacion: |
  La terciarización de la economía implica que la mayoría de la fuerza laboral se dedica a servicios.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["minería", "primario"]

variables:
  mineral: uno_de(["cobre", "oro", "litio"])

respuesta: "sector_primario"
tipo: input

enunciado: "La extracción de {mineral} es una actividad del sector primario."

explicacion: |
  La minería es la extracción de recursos minerales del subsuelo, parte del sector primario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["construccion", "secundario"]

variables:
  obra: uno_de(["edificio", "carretera", "puente"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La construcción de un {obra} pertenece al sector secundario."

explicacion: |
  La construcción es la actividad manufacturera que crea infraestructura y bienes inmuebles.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["turismo", "terciario"]

variables:
  destino: uno_de(["Bariloche", "Mendoza", "Mar del Plata"])

respuesta: "sector_terciario"
tipo: input

enunciado: "El turismo en {destino} es una actividad económica del sector terciario."

explicacion: |
  El turismo implica servicios de alojamiento, transporte y entretenimiento, todos del sector terciario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["educacion", "cuaternario"]

variables:
  institucion: "universidad de investigación"

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La generación de nuevo conocimiento en una {institucion} se asocia al sector cuaternario."

explicacion: |
  La educación superior e investigación básica aplicada es la base del sector cuaternario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["finanzas", "terciario"]

variables:
  servicio: "banca comercial"

respuesta: "sector_terciario"
tipo: input

enunciado: "La {servicio} es una actividad del sector terciario."

explicacion: |
  Los servicios financieros intermediarios pertenecen al sector terciario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["evolucion_economica", "historia"]

variables:
  etapa: uno_de(["preindustrial", "industrial", "postindustrial"])

respuesta: "primario"
tipo: completar

enunciado: "En las economías {etapa}, el sector primario suele tener el peso relativo más alto en el empleo y el PIB."

explicacion: |
  En las etapas preindustriales o en países en desarrollo, la economía depende fuertemente del sector primario. A medida que avanza el desarrollo, el peso relativo disminuye frente al secundario y terciario.
```

## Sección: recibo-de-sueldo/argentina (24 preguntas)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Cuáles son los tres aportes obligatorios del empleado en Argentina (sector privado)?"
tipo: mc
opciones_explicitas:
  - "Jubilación, obra social y PAMI"
  - "IVA, ganancias y bienes personales"
  - "Sindicato, presentismo y antigüedad"
respuesta: "Jubilación, obra social y PAMI"

explicacion: |
  Son los tres aportes personales que se descuentan del bruto en
  cualquier recibo de sueldo en blanco.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo"]

respuesta: 17
tipo: input
tolerancia_abs: 0

enunciado: "Jubilación 11% + obra social 3% + PAMI 3%. ¿Qué porcentaje total del bruto representan los tres aportes juntos?"

explicacion: |
  11 + 3 + 3 = 17% del bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.11
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por jubilación (11%)?"

explicacion: |
  Es el aporte más grande de los tres.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por obra social (3%)?"

explicacion: |
  Financia la cobertura de salud del trabajador y su familia.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por PAMI/INSSJP (3%)?"

explicacion: |
  Financia la cobertura de salud de los jubilados.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.17
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto suman los tres aportes obligatorios juntos (17%)?"

explicacion: |
  Jubilación (11%) + obra social (3%) + PAMI (3%) = 17% del bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.83
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, y sin otros descuentos, ¿cuál es el neto después de los tres aportes obligatorios?"

pasos:
  - "{bruto} × (1 - 0,17) = {bruto} × 0,83 = {bruto * 0.83}"

explicacion: |
  Se descuenta el 17% total: queda el 83% del bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Los aportes del empleado y las contribuciones patronales son exactamente lo mismo, sólo que con otro nombre."

explicacion: |
  Los aportes los paga el empleado (se ven en su recibo); las
  contribuciones patronales las paga el empleador, aparte, sobre el mismo
  bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las contribuciones patronales las paga el empleador, no se descuentan del sueldo del empleado."

explicacion: |
  Por eso no aparecen restadas en el recibo del trabajador, aunque sí
  forman parte del costo laboral total para la empresa.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(50, 300) * 1000
  sindicato: uno_de([1, 2, 3])

respuesta: bruto * (1 - 0.17 - sindicato / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sueldo bruto ${bruto}, con los aportes obligatorios (17%) más una cuota sindical del {sindicato}%. ¿Cuál es el neto?"

pasos:
  - "{bruto} × (1 - 0,17 - {sindicato}/100) = {bruto * (1 - 0.17 - sindicato / 100)}"

explicacion: |
  Se suman todos los porcentajes de descuento y se restan juntos del
  bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

variables:
  mejor_sueldo: random(50, 300) * 1000

respuesta: mejor_sueldo / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El mejor sueldo bruto del semestre fue ${mejor_sueldo}. ¿Cuánto corresponde de aguinaldo (SAC) ese semestre?"

explicacion: |
  El aguinaldo es la mitad del mejor sueldo del semestre.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

respuesta: 13
tipo: input
tolerancia_abs: 0

enunciado: "Contando los 12 sueldos mensuales más el aguinaldo (medio sueldo dos veces al año, o sea un sueldo completo repartido en dos pagos), ¿a cuántos sueldos equivale el total cobrado en un año?"

explicacion: |
  12 sueldos mensuales + el equivalente a 1 sueldo más de aguinaldo (dos
  mitades) = 13 sueldos por año.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema", "aguinaldo"]

variables:
  sueldo_mensual: random(50, 300) * 1000

respuesta: sueldo_mensual * 13
tipo: input
tolerancia_abs: 0.01

enunciado: "Alguien cobra ${sueldo_mensual} de bruto todos los meses del año, sin cambios. Contando el aguinaldo, ¿cuánto cobra de bruto en todo el año?"

pasos:
  - "{sueldo_mensual} × 13 = {sueldo_mensual * 13}"

explicacion: |
  12 sueldos mensuales más el equivalente a 1 sueldo de aguinaldo (medio
  sueldo en junio, medio en diciembre).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "verificacion"]

variables:
  bruto: random(50, 300) * 1000
  correcto: bruto * 0.17
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Con bruto ${bruto}, los aportes obligatorios (17%) dan ${mostrado}."

explicacion: |
  Se vuelve a calcular el 17% del bruto y se compara.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(50, 300) * 1000
  correcto: bruto * 0.83

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - bruto * 0.17
  - bruto * 1.17

enunciado: "Sueldo bruto ${bruto}, sólo con los tres aportes obligatorios (17%). ¿Cuál es el neto?"

explicacion: |
  La segunda opción es el DESCUENTO, no el neto; la tercera suma en vez
  de restar.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(50, 300) * 1000
  neto: bruto * 0.83

tipo: completar
enunciado: "Un trabajador cobra ${neto} de neto, después de los aportes obligatorios (17%) y sin otros descuentos. Completá cuál era el sueldo bruto."
respuestas_validas:
  - neto / 0.83

explicacion: |
  bruto = neto ÷ 0,83 (deshacer el descuento del 17%).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "comparacion"]

variables:
  a: random(50, 300) * 1000
  b: random(50, 300) * 1000

restricciones:
  - a != b

respuesta: ((a * 0.17) > (b * 0.17))
tipo: vf

enunciado: "¿Descuenta más de aportes obligatorios un bruto de ${a} que uno de ${b}?"

explicacion: |
  A mayor bruto, mayor el monto de aportes (el porcentaje es el mismo,
  17%, pero se aplica sobre una base más grande).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para el empleador, el costo real de un empleado es mayor que el sueldo bruto, porque además paga las contribuciones patronales aparte."

explicacion: |
  El bruto es lo que ve reflejado el empleado en su recibo; el empleador
  paga ese bruto MÁS las contribuciones patronales, que no se descuentan
  del sueldo del trabajador.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De los tres aportes obligatorios, la jubilación (11%) es el más grande — más que obra social y PAMI juntos (3%+3%=6%)."

explicacion: |
  11% es más que 6%: la jubilación es, por lejos, el aporte más grande.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "orden"]

tipo: ordenar
enunciado: "Ordená estos tres aportes de menor a mayor porcentaje (puede haber empate)."
opciones_explicitas:
  - "Jubilación"
  - "PAMI"
  - "Obra social"
respuesta_orden: ["PAMI", "Obra social", "Jubilación"]

explicacion: |
  PAMI y obra social empatan en 3% cada uno; jubilación es 11%, el más
  grande de los tres.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de jubilación, obra social y PAMI (obligatorios en todo el país), la cuota sindical depende de cada actividad y convenio."

explicacion: |
  No todos los trabajos tienen sindicato con cuota, ni el porcentaje es
  el mismo en todos los gremios.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "aguinaldo", "problema"]

variables:
  sueldo1: random(50, 200) * 1000
  sueldo2: sueldo1 + random(10, 50) * 1000

respuesta: sueldo2 / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En un semestre, alguien cobró ${sueldo1} un mes y ${sueldo2} otro (el resto igual o menos). ¿Cuánto le corresponde de aguinaldo ese semestre?"

explicacion: |
  El aguinaldo se calcula sobre el MEJOR sueldo del semestre, no sobre un
  promedio.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

respuesta: verdadero
tipo: vf

enunciado: "El aguinaldo (SAC) se cobra en dos pagos al año: uno en junio y otro en diciembre."

explicacion: |
  Cada pago es la mitad del mejor sueldo del semestre correspondiente.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, un empleado en blanco del sector privado tiene tres aportes obligatorios sobre el bruto: jubilación (11%), obra social (3%) y PAMI (3%)."

explicacion: |
  Es la idea central de este módulo: la aplicación concreta del concepto
  general de \"descuentos\" a la legislación laboral argentina.
```

## Sección: socialismo-utopico (10 preguntas)

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene el socialismo utópico sobre qué forma el carácter de una persona?"
tipo: mc
opciones_explicitas:
  - "El entorno en el que crece (educación, trato, condiciones de vida), no una elección individual libre"
  - "Únicamente una elección libre e individual, sin influencia del entorno"
  - "La cantidad de oro que posee su familia"
respuesta: "El entorno en el que crece (educación, trato, condiciones de vida), no una elección individual libre"

explicacion: |
  Es la idea central de Robert Owen: rediseñar el entorno para mejorar
  a las personas, en vez de castigar los vicios que ese mismo entorno
  produjo.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "intermedio"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Robert Owen no era sólo un teórico: era un empresario textil que puso en práctica sus ideas gestionando los molinos de New Lanark, en Escocia, desde 1800."

explicacion: |
  A diferencia de otras corrientes de este bloque, el socialismo
  utópico nace de una experiencia empresarial concreta, no sólo de un
  tratado teórico.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué medidas aplicó Robert Owen en la fábrica de New Lanark?"
tipo: mc
opciones_explicitas:
  - "Redujo la jornada laboral, prohibió el trabajo de los niños más pequeños, construyó viviendas dignas y fundó una escuela infantil"
  - "Aumentó la jornada laboral para maximizar la producción"
  - "Eliminó todo tipo de educación para los hijos de los obreros"
respuesta: "Redujo la jornada laboral, prohibió el trabajo de los niños más pequeños, construyó viviendas dignas y fundó una escuela infantil"

explicacion: |
  Fue uno de los primeros empresarios en aplicar estas medidas de
  forma sistemática dentro de una fábrica industrial.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Owen sostenía que había demostrado, con los propios registros contables de la empresa, que un trato más humano hacia los trabajadores no arruinaba el negocio: New Lanark siguió siendo rentable."

explicacion: |
  Es el argumento central de Owen frente a quienes sostenían que
  mejorar las condiciones laborales era económicamente inviable.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Cómo se llama la obra en la que Robert Owen expone su idea de que el carácter se forma por el entorno, publicada entre 1813 y 1816?"
tipo: mc
opciones_explicitas:
  - "A New View of Society"
  - "El Capital"
  - "La riqueza de las naciones"
respuesta: "A New View of Society"

explicacion: |
  En esta obra Owen propone su idea del carácter formado por el
  entorno como base para reformar la sociedad entera.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué intentó hacer Owen con su proyecto de New Harmony (Indiana, Estados Unidos, 1825)?"
tipo: mc
opciones_explicitas:
  - "Fundar una comunidad cooperativa autosuficiente, donde la propiedad y el trabajo se organizaran en común"
  - "Abrir una nueva fábrica textil idéntica a New Lanark"
  - "Establecer una colonia comercial para exportar algodón"
respuesta: "Fundar una comunidad cooperativa autosuficiente, donde la propiedad y el trabajo se organizaran en común"

explicacion: |
  Fue un intento de ir más allá de reformar una sola fábrica, aplicando
  sus ideas a una comunidad entera organizada sin la lógica de patrón
  y empleado.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "El experimento de New Harmony logró sostenerse económicamente en el tiempo tal como lo había hecho New Lanark."

explicacion: |
  Falso. A diferencia de New Lanark, la comunidad cooperativa de New
  Harmony no logró sostenerse económicamente en el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Quién le puso el nombre \"socialismo utópico\" a las ideas de Owen y otros reformadores de su época?"
tipo: mc
opciones_explicitas:
  - "Una corriente posterior, el marxismo, para distinguirlas de su propio \"socialismo científico\""
  - "El propio Robert Owen, para distinguir su corriente del mercantilismo"
  - "Adam Smith, en La riqueza de las naciones"
respuesta: "Una corriente posterior, el marxismo, para distinguirlas de su propio \"socialismo científico\""

explicacion: |
  Ni Owen ni sus contemporáneos se llamaban a sí mismos "utópicos" —
  fue una etiqueta puesta después por Marx y Engels.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "avanzado"
  tags: ["corrientes", "problema"]

enunciado: "Según la crítica que le hace el marxismo, ¿qué le faltaba al socialismo utópico de Owen?"
tipo: mc
opciones_explicitas:
  - "Un análisis sistemático de por qué el sistema económico en su conjunto produce esas condiciones, y una estrategia para transformarlo a esa escala"
  - "Un ejemplo práctico real que probara que sus ideas podían funcionar"
  - "Cualquier interés por mejorar las condiciones de los trabajadores"
respuesta: "Un análisis sistemático de por qué el sistema económico en su conjunto produce esas condiciones, y una estrategia para transformarlo a esa escala"

explicacion: |
  Para el marxismo, Owen aportaba buenas intenciones y experimentos
  aislados (una fábrica, una comunidad), pero no una teoría de cómo
  cambiar el sistema entero — esa pregunta es lo que retoma el
  marxismo a continuación.
```

```
metadata:
  materia: "economia"
  tema: "socialismo_utopico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El socialismo utópico sostenía que las condiciones de vida de la clase obrera podían mejorarse rediseñando el entorno de trabajo, sin necesidad de una revolución política violenta."

explicacion: |
  Es la diferencia central con la estrategia que propondrá después el
  marxismo: Owen apuesta por el ejemplo práctico y la reforma
  voluntaria, no por la lucha de clases.
```

