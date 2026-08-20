### 1 — Resistencia de un pilar de soporte
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["estructuras", "calculo"]

variables:
  escenario: [[150, "150"], [220, "220"], [310, "310"]]
  idx: uno_de([0, 1, 2])
  carga: escenario[idx][0]
  resistencia_critica: escenario[idx][1]

respuesta: carga < resistencia_critica
tipo: vf

enunciado: "Un pilar de soporte en una estructura debe soportar una carga de {carga} kN. El modelo matemático indica que la resistencia crítica del material es de {resistencia_critica} kN. ¿Es la estructura segura bajo este modelo?"

explicacion: |
  En ingeniería, el modelo matemático debe garantizar que la carga aplicada sea menor a la capacidad máxima del material para asegurar la estabilidad estructural.
```

### 2 — Dimensionamiento de un tanque de almacenamiento
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["hidraulica", "modelado"]

variables:
  datos: [[5.0, "5.0"], [12.5, "12.5"], [8.2, "8.2"]]
  idx: uno_de([0, 1, 2])
  volumen_requerido: datos[idx][0]
  area_base: datos[idx][1]

respuesta: volumen_requerido / area_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Para el diseño de un tanque cilíndrico, se requiere un volumen de {volumen_requerido} m³. Si el modelo de diseño establece un área de la base de {area_base} m², ¿cuál debe ser la altura (h) del tanque?"

pasos:
  - "Calcular la altura usando la fórmula del volumen de un cilindro: V = A_base * h"
  - "Despejar h = V / A_base"

explicacion: |
  El modelado geométrico permite determinar las dimensiones necesarias antes de la fabricación. En este caso, h = {volumen_requerido} / {area_base}.
```

### 3 — Fase de diseño: Secuencia de validación
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["gestion_proyectos", "metodologia"]

respuesta: ["Definición del problema", "Modelado matemático", "Simulación computacional", "Construcción del prototipo"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas de un proceso de ingeniería desde la concepción hasta la ejecución física:"

explicacion: |
  Antes de construir, se debe definir el problema, crear un modelo matemático, validarlo mediante simulaciones y finalmente construir el prototipo o estructura.
```

### 4 — Análisis de fatiga de materiales
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["materiales", "seguridad"]

variables:
  test: [[0.85, "0.85"], [1.15, "1.15"], [0.95, "0.95"]]
  idx: uno_de([0, 1, 2])
  factor_seguridad: test[idx][0]

respuesta: factor_seguridad > 1.0
tipo: vf

enunciado: "En el modelado de un componente mecánico, se calcula un factor de seguridad de {factor_seguridad}. ¿Es el diseño considerado seguro según los estándares de ingeniería (donde factor > 1)?"

explicacion: |
  Un factor de seguridad menor o igual a 1 indica que la carga aplicada iguala o supera la resistencia del material, lo que representa un fallo inminente.
```

### 5 — Estimación de costos de materiales
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["presupuesto", "modelado"]

variables:
  materiales: [[450, "450"], [1200, "1200"], [850, "850"]]
  idx: uno_de([0, 1, 2])
  cantidad: materiales[idx][0]
  precio_unitario: 15.5

respuesta: cantidad * precio_unitario
tipo: completar
respuestas_validas: [6975.0, 18600.0, 13175.0]

enunciado: "Para el presupuesto de una obra, el modelo de costos indica que se requieren {cantidad} unidades de un componente. Si el precio unitario es de {precio_unitario} USD, el costo total estimado es de ___ USD."

explicacion: |
  El modelado económico es crucial para la viabilidad del proyecto. El cálculo es: {cantidad} * {precio_unitario}.
```