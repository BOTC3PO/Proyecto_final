### 1 — Restricción de presupuesto en proyecto
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["presupuesto", "gestion"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Proyecto A", 5000, 4500],
    ["Proyecto B", 12000, 11500]
  ])

enunciado: "En un proyecto de ingeniería, el presupuesto asignado es de {escenario[idx][1]} USD. Si el costo estimado de la solución propuesta es de {escenario[idx][2]} USD, la restricción de presupuesto se cumple."

respuesta: escenario[idx][1] >= escenario[idx][2]
tipo: vf

explicacion: |
  Para que una solución sea viable, el costo debe ser menor o igual al presupuesto disponible. En este caso, {escenario[idx][2]} <= {escenario[idx][1]} es verdadero.
```

### 2 — Identificación de requisitos técnicos
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["requisitos", "especificaciones"]

opciones_explicitas: ["Requisito de rendimiento", "Restricción de material", "Restricción de tiempo"]

enunciado: "Un cliente solicita que un puente debe soportar una carga de 50 toneladas. Esta especificación técnica se clasifica como una:"

respuesta: "Requisito de rendimiento"
tipo: mc

explicacion: |
  Los requisitos de rendimiento definen la capacidad operativa o funcionalidad que la solución debe alcanzar para satisfacer la necesidad del cliente.
```

### 3 — Secuencia de resolución de un problema de ingeniería
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

opciones_explicitas: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]

respuesta: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas para abordar un problema de ingeniería de manera sistemática:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la delimitación de los límites (restricciones), la creación de alternativas y finalmente la validación de la mejor opción.
```

### 4 — Análisis de viabilidad de materiales
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["materiales", "viabilidad"]

variables:
  material_data: uno_de([
    ["Acero", 7.8, 5.0],
    ["Aluminio", 2.7, 2.0]
  ])

enunciado: "Se requiere un componente con una densidad máxima de {material_data[idx][2]} g/cm³. El material seleccionado es {material_data[idx][0]} con una densidad de {material_data[idx][1]} g/cm³."

pasos:
  - "Identificar la densidad del material propuesto."
  - "Comparar la densidad del material con el límite máximo permitido."

respuesta: material_data[idx][1] <= material_data[idx][2]
tipo: vf

explicacion: |
  La solución es viable si la propiedad física del material no excede el límite impuesto por la restricción de diseño.
```

### 5 — Cumplimiento de plazos de entrega
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  datos: uno_de([
    ["Fase de diseño", 15, 20],
    ["Fase de prototipado", 30, 25],
    ["Fase de pruebas", 10, 12]
  ])

enunciado: "Para la fase de ___ , el tiempo estimado es de {datos[idx][1]} días, mientras que el plazo máximo permitido es de {datos[idx][2]} días."

respuestas_validas: ["diseño", "prototipado", "pruebas"]
tipo: completar

explicacion: |
  El usuario debe completar el nombre de la fase según el índice sorteado. En el caso de {datos[idx][0]}, el tiempo es {datos[idx][1]} y el límite es {datos[idx][2]}.
```