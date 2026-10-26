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
respuestas_validas: ["costos_fijos", "costos_variables", "precio_venta"]

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

*(Nota: Debido a la restricción de la regla de "completar" en el DSL proporcionado, para la pregunta 3 se ha diseñado para que el usuario complete el primer concepto faltante).*

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

respuesta: ["Determinar costos fijos totales", "Calcular el margen de contribución unitario", "Dividir costos fijos por el margen de contribución"]

explicacion: |
  Primero se deben conocer los costos fijos, luego la diferencia entre precio y costo variable (margen de contribución) y finalmente realizar la división.
```