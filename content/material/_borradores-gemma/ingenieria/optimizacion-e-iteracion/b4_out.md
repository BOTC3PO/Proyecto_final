### 1 — Iteración vs Convergencia
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["iteracion", "convergencia", "algoritmos"]

respuesta: "convergencia"
tipo: "completar"
respuestas_validas: ["convergencia"]

enunciado: "Mientras que la iteración se refiere al proceso repetitivo de aplicar un algoritmo para refinar una solución, la ________ es el estado en el que la solución obtenida se aproxima a un valor límite o solución óptima."

explicacion: |
  La iteración es la acción de repetir el ciclo, mientras que la convergencia es la propiedad matemática de que dichas repeticiones se acercan cada vez más al objetivo.
```

### 2 — Diferencia entre Descenso de Gradiente y Búsqueda Exhaustiva
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["gradiente", "busqueda", "optimizacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([escenario_datos[0], escenario_datos[1]])
tipo: "mc"
opciones_explicitas: ["El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles."]
  # Nota: Para cumplir la regla de una sola llamada a uno_de, reestructuramos:
  # En realidad, como es una pregunta de contraste fijo, no uso uno_de para la respuesta si la pregunta es teórica.
  # Re-haciendo para seguir la regla de "Si la respuesta no depende de sorteo, no usar variables".

# Versión corregida para pregunta teórica fija:
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["gradiente", "busqueda", "optimizacion"]

respuesta: "El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles."
tipo: "mc"
opciones_explicitas: [
  "El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles.",
  "El descenso de gradiente es un método de fuerza bruta, mientras que la búsqueda exhaustiva es un método basado en derivadas.",
  "Ambos métodos son idénticos en su forma de navegar el espacio de búsqueda.",
  "La búsqueda exhaustiva es siempre más eficiente que el descenso de gradiente en espacios continuos."
]

explicacion: |
  El descenso de gradiente es un método iterativo que utiliza el gradiente (derivada) para encontrar la dirección de máximo descenso, optimizando el tiempo de cómputo frente a una búsqueda exhaustiva que es computacionalmente costosa.
```

### 3 — ¿Es el criterio de parada un proceso iterativo?
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["criterio_parada", "iteracion"]

respuesta: falso
tipo: "vf"

enunciado: "El criterio de parada es el proceso de realizar iteraciones sucesivas para mejorar una solución."

explicacion: |
  Falso. El criterio de parada es la condición que determina cuándo detener el proceso iterativo (por ejemplo, cuando el error es menor a una tolerancia), no es el proceso de iteración en sí mismo.
```

### 4 — Flujo de un proceso de optimización iterativa
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["flujo", "iteracion", "optimización"]

respuesta: ["Evaluación de la función", "Cálculo del error/gradiente", "Actualización de la variable", "Verificación del criterio de parada"]
tipo: "ordenar"
opciones_explicitas: [
  "Evaluación de la función",
  "Cálculo del error/gradiente",
  "Actualización de la variable",
  "Verificación del criterio de parada"
]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa estándar, desde el inicio de la evaluación hasta la decisión de continuar o detenerse."

explicacion: |
  Un ciclo típico comienza evaluando la función en el punto actual, calculando cuánto nos hemos alejado del óptimo (error/gradiente), moviendo la variable hacia la mejora y finalmente comprobando si ya estamos lo suficientemente cerca para parar.
```

### 5 — Sensibilidad a la condición inicial
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["condicion_inicial", "convergencia"]

variables:
  caso: uno_de([0, 1])
  datos: [["Método de Newton-Raphson", "Muy sensible"], ["Método de Bisección", "Poco sensible"]]

respuesta: datos[caso][1]
tipo: "mc"
opciones_explicitas: [
  "Muy sensible",
  "Poco sensible",
  "No depende de la condición inicial",
  "Depende únicamente del número de iteraciones"
]

enunciado: "En un proceso de optimización iterativa, el {datos[caso][0]} se caracteriza por ser {datos[caso][1]} a la elección del punto de partida inicial."

explicacion: |
  Los métodos de orden superior (como Newton-Raphson) suelen tener una convergencia cuadrática pero pueden divergir si el punto inicial es malo, a diferencia de métodos más robustos como la bisección.
```