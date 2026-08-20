### 1 — Optimización de mezcla de materiales
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["procesos", "iteracion"]

variables:
  escenario: [[150, 0.85], [220, 0.70], [310, 0.60]]
  idx: uno_de([0, 1, 2])
  costo_actual: escenario[idx][0]
  eficiencia_actual: escenario[idx][1]

enunciado: "En un proceso de fundición, se ha obtenido una mezcla con un costo de ${costo_actual} USD y una eficiencia del {eficiencia_actual * 100}%. Si el objetivo es reducir el costo un 10% manteniendo la misma eficiencia, ¿cuál debería ser el nuevo costo objetivo?"

pasos:
  - "Calcular el 10% del costo actual: {costo_actual * 0.10}"
  - "Restar ese valor al costo actual: {costo_actual - (costo_actual * 0.10)}"

respuesta: costo_actual * 0.9
tipo: input
tolerancia_abs: 0.01

explicacion: |
  En optimización de procesos, el ciclo iterativo busca reducir el costo objetivo. 
  El cálculo fue: ${costo_actual} * 0.9 = ${redondear(costo_actual * 0.9, 2)}.
```

### 2 — Evaluación de convergencia
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["convergencia", "iteracion"]

variables:
  iteraciones: [[0.05, 0.02, 0.001], [0.12, 0.08, 0.05], [0.01, 0.005, 0.0001]]
  idx: uno_de([0, 1, 2])
  error_iter: iteraciones[idx]

enunciado: "Se está ejecutando un método de Newton-Raphson para hallar la raíz de una función. El error absoluto en la iteración actual es {error_iter[2]}. Si el criterio de parada es un error menor a 0.001, ¿se ha cumplido la condición de convergencia?"

respuesta: falso
tipo: vf

explicacion: |
  El error actual es {error_iter[2]}, el cual no es estrictamente menor a 0.001 en el caso seleccionado.
```

### 3 — Secuencia de mejora de proceso
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización de un sistema de control de temperatura:"

opciones_explicitas: ["Medir la variable", "Comparar con el setpoint", "Actuar sobre el sistema", "Analizar desviación"]
respuesta: ["Medir la variable", "Comparar con el setpoint", "Analizar desviación", "Actuar sobre el sistema"]
tipo: ordenar

explicacion: |
  La secuencia lógica es: 1. Medición, 2. Comparación, 3. Análisis del error/desviación y 4. Acción correctiva.
```

### 4 — Selección de parámetros de control
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["parametros", "ajuste"]

variables:
  ajuste: [["K_p: 1.5", "K_i: 0.5", "K_d: 0.1"], ["K_p: 2.0", "K_i: 1.0", "K_d: 0.2"], ["K_p: 0.5", "K_i: 0.1", "K_d: 0.05"]]
  idx: uno_de([0, 1, 2])

enunciado: "Tras un ensayo de respuesta transitoria, se observa un sobreimpulso excesivo. ¿Cuál de los siguientes conjuntos de parámetros debería probarse en la siguiente iteración para reducir el sobreimpulso (asumiendo un control PID estándar)?"

opciones_explicitas: ["Reducir K_p", "Aumentar K_p", "Eliminar K_d"]
respuesta: "Reducir K_p"
tipo: mc

explicacion: |
  Un exceso de sobreimpulso suele indicar una ganancia proporcional (K_p) demasiado alta. La iteración debe buscar un valor menor para estabilizar el sistema.
```

### 5 — Error residual en optimización
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["error", "iteracion"]

variables:
  datos: [[10.5, 10.45], [25.2, 25.18], [5.0, 4.99]]
  idx: uno_de([0, 1, 2])
  val_actual: datos[idx][0]
  val_previo: datos[idx][1]

enunciado: "En un proceso de optimización por descenso de gradiente, la diferencia entre el valor de la función en la iteración actual y la anterior es de ___."

respuesta_validas: ["0.05", "0.02", "0.01"]
respuesta: "0.05"
tipo: completar

explicacion: |
  El error o cambio entre iteraciones se calcula como |{val_actual} - {val_previo}|. En este caso: {abs(val_actual - val_previo)}.
```