### 1 — Implementación de un algoritmo de búsqueda
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["algoritmos", "implementacion"]

variables:
  escenario: uno_de([[1, "búsqueda lineal"], [2, "búsqueda binaria"]])
  datos: uno_de([[10, 20, 30, 40, 50], [5, 15, 25, 35, 45]])

respuesta: datos[escenario[1]][3]
tipo: input
tolerancia_abs: 0

enunciado: "Se ha diseñado una solución para encontrar un elemento en una lista ordenada. Si implementamos una {escenario[1]} en el array {datos}, ¿cuál es el valor del elemento en la posición con índice 3?"

pasos:
  - "Identificar el algoritmo según el escenario."
  - "Localizar el índice 3 en la lista proporcionada."

explicacion: |
  En el escenario seleccionado, el valor en la posición 3 (cuarto elemento) de la lista es {datos[escenario[1]][3]}.
```

### 2 — Validación de tipos de datos en la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["tipos_de_datos", "validación"]

variables:
  caso: uno_de([[1, "string", "texto"], [2, "int", "numero"]])

respuesta: caso[caso[1]] == "numero"
tipo: vf

enunciado: "Al implementar la solución, el sistema recibe un dato de tipo {caso[0]}. ¿Es correcto afirmar que el tipo de dato es 'int'?"

explicacion: |
  En este caso, el tipo es {caso[0]}, por lo tanto, la afirmación de que es 'int' es {caso[caso[1]] == "numero"}.
```

### 3 — Flujo de ejecución de la solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["flujo", "pasos"]

variables:
  proceso: uno_de([[1, ["Entrada", "Procesamiento", "Salida"]], [2, ["Diseño", "Codificación", "Pruebas"]]])

respuesta: proceso[proceso[1]]
tipo: ordenar

opciones_explicitas: ["Entrada", "Procesamiento", "Salida", "Diseño", "Codificación", "Pruebas"]

enunciado: "Para llevar a la práctica la solución elegida, se debe seguir un orden lógico de implementación. Ordene los pasos correspondientes al proceso de {proceso[1]}."

explicacion: |
  El orden correcto para el proceso de {proceso[1]} es: {proceso[proceso[1]]}.
```

### 4 — Manejo de errores en la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["errores", "excepciones"]

variables:
  error_tipo: uno_de([[1, "división por cero", "Error Matemático"], [2, "fuera de rango", "Error de Índice"]])

respuesta: tabla[error_tipo[1]][1]
tipo: completar

tabla: [["", ""], ["", "Error Matemático"], ["", "Error de Índice"]]

enunciado: "Durante la implementación, el programa falla al intentar acceder a una posición inexistente en un array. Este error se clasifica como: ___"

explicacion: |
  El error de acceso a un índice inexistente se conoce como {tabla[error_tipo[1]][1]}.
```

### 5 — Selección de la estructura de datos adecuada
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["estructuras", "decisión"]

variables:
  escenario: uno_de([[1, "una lista de tareas pendientes"], [2, "un diccionario de usuarios con sus IDs"]])

respuesta: uno_de(["Lista", "Diccionario"])
tipo: mc

opciones_explicitas: ["Lista", "Diccionario", "Árbol", "Grafo"]

enunciado: "Para implementar la solución de un sistema de gestión de {escenario[0]}, la estructura de datos más eficiente es un:"

explicacion: |
  Para {escenario[0]}, la estructura más adecuada es un {respuesta}.
```