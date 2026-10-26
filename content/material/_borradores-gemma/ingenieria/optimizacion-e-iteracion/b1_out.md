### 1 — Concepto de iteración
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["definiciones", "ciclos"]

respuesta: "iteración"
tipo: completar
respuestas_validas: ["iteración"]

enunciado: "El proceso de repetir un conjunto de pasos o un algoritmo para acercarse a una solución óptima se denomina ___."

explicacion: |
  La iteración es la repetición de un proceso con el objetivo de mejorar la calidad de una solución o alcanzar un criterio de parada.
```

### 2 — El objetivo de la optimización
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["objetivo", "optimización"]

variables:
  escenario: uno_de([["minimizar", "costo"], ["maximizar", "eficiencia"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["minimizar", "maximizar", "estabilizar", "ignorar"]

enunciado: "En un problema de optimización, si el objetivo es reducir el uso de materiales, estamos intentando ___ el costo."

explicacion: |
  Dependiendo de la función objetivo, buscamos el valor máximo o el valor mínimo de una variable.
```

### 3 — Criterio de convergencia
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["convergencia", "criterio"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso iterativo se considera 'convergente' cuando la diferencia entre dos soluciones sucesivas es menor a un umbral de tolerancia definido?"

explicacion: |
  La convergencia ocurre cuando la solución se estabiliza y deja de cambiar significativamente, indicando que hemos alcanzado un resultado aceptable.
```

### 4 — Ciclo de mejora continua
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["secuencia", "metodologia"]

respuesta: ["Evaluar", "Ajustar", "Implementar", "Verificar"]
tipo: ordenar
opciones_explicitas: ["Evaluar", "Ajustar", "Implementar", "Verificar"]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa tras haber obtenido un resultado inicial:"

explicacion: |
  El ciclo típico consiste en evaluar el resultado, ajustar los parámetros, implementar el cambio y verificar la mejora.
```

### 5 — Error de aproximación
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["error", "tolerancia"]

variables:
  datos: [[0.001, "muy bajo"], [0.5, "alto"], [10.0, "excesivo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["muy bajo", "alto", "excesivo", "nulo"]

enunciado: "Si el error residual en la iteración actual es de {datos[idx][0]}, se considera que el error es ___."

explicacion: |
  La magnitud del error determina si el proceso debe continuar o si se ha alcanzado la tolerancia permitida.
```