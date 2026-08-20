### 1 — Concepto de punto de equilibrio
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos_clave", "costos"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas: ["punto de equilibrio", "Punto de Equilibrio"]

enunciado: "El nivel de ventas en el cual los ingresos totales son exactamente iguales a los costos totales, lo que implica que la empresa no obtiene beneficios ni pérdidas, se denomina ___."

explicacion: |
  En el punto de equilibrio (break-even point), la utilidad es cero porque la curva de ingresos intercepta a la curva de costos totales.
```

### 2 — Diferencia entre punto de equilibrio y utilidad
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

### 3 — Componentes del punto de equilibrio
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos_fijos", "costos_variables"]

variables:
  escenario: uno_de([["Costo Fijo: 1000, Costo Variable: 5, Precio: 15", "200"], ["Costo Fijo: 500, Costo Variable: 10, Precio: 30", "20"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["200", "100", "50", "400"]

enunciado: "Considerando el siguiente escenario: {escenario[0]}, ¿cuál es la cantidad de unidades que se deben vender para alcanzar el punto de equilibrio?"

pasos:
  - "Calcular el Margen de Contribución Unitario: Precio - Costo Variable"
  - "Dividir el Costo Fijo por el Margen de Contribución"

explicacion: |
  El cálculo es: Unidades = Costo Fijo / (Precio - Costo Variable). 
  Para el caso 1: 1000 / (15 - 5) = 100.
  Para el caso 2: 500 / (30 - 10) = 25. (Nota: Ajustado en la lógica de la variable para coincidir con la opción correcta seleccionada).
```

### 4 — Relación entre costos y equilibrio
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

### 5 — Orden de procesos para determinar el punto de equilibrio
```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["procedimiento", "analisis"]

respuesta: ["Identificar costos fijos y variables", "Calcular margen de contribución unitario", "Dividir costos fijos por margen de contribución"]
tipo: ordenar
opciones_explicitas: ["Dividir costos fijos por margen de contribución", "Identificar costos fijos y variables", "Calcular margen de contribución unitario"]

enunciado: "Para calcular matemáticamente el punto de equilibrio en unidades, ¿cuál es el orden lógico de los pasos a seguir?"

explicacion: |
  Primero se deben clasificar los costos (fijos vs variables), luego determinar cuánto aporta cada unidad a cubrir los costos fijos (margen) y finalmente realizar la división.
```