# Ingenieria — Optimizacion e iteracion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de iteración

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["definiciones", "ciclos"]

respuesta: "iteración"
tipo: completar
respuestas_validas:
  - "iteración"

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

respuesta: escenario[0]
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

respuesta_orden: ["Evaluar", "Ajustar", "Implementar", "Verificar"]
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

### 6 — Proceso de optimización iterativo

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "ciclos"]

respuesta: "converger"
tipo: "completar"
respuestas_validas:
  - "converger"
  - "convergencia"

enunciado: "En un proceso de optimización iterativo, el objetivo es realizar ajustes sucesivos en las variables de diseño para que la función objetivo logre ___ hacia un valor óptimo."

explicacion: |
  La optimización iterativa busca reducir el error o la diferencia entre la solución actual y la solución óptima. Cuando la diferencia se vuelve despreciable, decimos que el algoritmo ha convergido.
```

### 7 — Evaluación de la mejora en el ensayo

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["evaluacion", "error"]

respuesta: "mejora"
tipo: "mc"
opciones_explicitas: ["mejora", "empeoramiento", "sin cambios"]

enunciado: "Se realiza un ensayo de diseño. El valor de la función objetivo en la iteración n es f(xₙ) = 100 y en la iteración n+1 es f(xₙ₊₁) = 85. Si el objetivo es minimizar la función, el resultado del ensayo representa una ___."

explicacion: |
  Al pasar de 100 a 85 en un problema de minimización, el valor de la función ha disminuido, lo que indica que la iteración ha sido exitosa en mejorar la solución.
```

### 8 — Criterio de parada

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["criterio_parada", "convergencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si la diferencia absoluta entre la solución actual xᵢ y la solución de la iteración anterior xᵢ₋₁ es menor que una tolerancia ε predefinida, se considera que se ha cumplido el criterio de parada por convergencia."

explicacion: |
  El criterio de parada es fundamental para evitar ciclos infinitos. Cuando el cambio entre iteraciones es menor que la tolerancia, se asume que el algoritmo ha encontrado un punto estable.
```

### 9 — Ciclo de optimización de un proceso

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["secuencia", "pasos"]

respuesta_orden: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]
tipo: "ordenar"
opciones_explicitas: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización industrial basado en ensayos experimentales:"

explicacion: |
  El proceso comienza con la definición de qué se quiere optimizar, luego se realiza el ensayo físico o numérico, se evalúa la desviación respecto al objetivo y, finalmente, se modifican los parámetros para la siguiente iteración.
```

### 10 — Cálculo de error relativo

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["calculo", "error"]

variables:
  idx: uno_de([0, 1])
  datos: [[10.5, 10.0], [5.0, 4.8]]

respuesta: datos[idx][0]

enunciado: "En la iteración actual, el valor óptimo estimado es {datos[idx][0]} y el valor obtenido en el ensayo es {datos[idx][1]}. Calcule el error absoluto de la iteración (asumiendo error = |valor_estimado - valor_obtenido|)."
tipo: "input"
tolerancia_abs: 0.001

explicacion: |
  El error absoluto mide la magnitud de la desviación. En este caso, el resultado es la diferencia absoluta entre el valor de referencia y el obtenido en el ensayo.
```

### 11 — El criterio de parada en iteraciones

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["convergencia", "criterio_parada"]

variables:
  idx: uno_de([0, 1])
  error_actual: uno_de([0.001, 0.0001])
  error_previo: uno_de([0.005, 0.0005])

respuesta: error_actual < error_previo
tipo: completar
enunciado: "En un proceso iterativo de optimización, si el error absoluto en la iteración {error_actual} es menor que el error de la iteración anterior {error_previo}, ¿se está cumpliendo un criterio de convergencia?"

explicacion: |
  Para que un método iterativo sea considerado convergente en una etapa dada, el error debe disminuir en cada paso sucesivo. Si el error aumenta, el método está divergiendo o está en una zona de inestabilidad.
```

### 12 — Error de redondeo vs Error de truncamiento

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["errores", "precision"]

variables:
  escenario: uno_de(["truncamiento", "redondeo"])

respuesta: "truncamiento"

tipo: mc
opciones_explicitas: ["truncamiento", "redondeo", "redondeo_estocastico"]

enunciado: "Si un algoritmo de optimización se detiene prematuramente porque se decidió cortar los decimales de una variable sin considerar el valor del siguiente dígito, ¿qué tipo de error se está introduciendo predominantemente?"

explicacion: |
  El error de truncamiento ocurre cuando se limitan los términos de una serie o los decimales de un número, mientras que el error de redondeo surge por la incapacidad de la máquina para representar números reales con precisión infinita.
```

### 13 — Secuencia de mejora en optimización

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["flujo_trabajo", "iteracion"]

respuesta_orden: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]
tipo: ordenar

opciones_explicitas: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa para mejorar una solución técnica:"

explicacion: |
  La optimización es un ciclo cerrado: primero se obtiene el resultado del ensayo, luego se compara con la meta (objetivo), se realizan los ajustes necesarios en los parámetros de entrada y finalmente se vuelve a ejecutar el ensayo.
```

### 14 — La trampa de la tolerancia insuficiente

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["convergencia", "tolerancia"]

variables:
  tol: uno_de([0.00001, 0.0000001])

respuesta: "infinitas"

tipo: completar
respuestas_validas:
  - "infinitas"
  - "finitas"

enunciado: "Si un programador establece una tolerancia de error de ___ para un problema que tiene una precisión de máquina limitada, el algoritmo podría entrar en un ciclo de iteraciones ___."

explicacion: |
  Si la tolerancia exigida es menor que la precisión que la computadora puede representar para ese número (debido al error de punto flotante), el error nunca llegará a ser menor que la tolerancia y el bucle será infinito.
```

### 15 — ¿Mejora o cambio de dirección?

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["gradiente", "optimizacion"]

variables:
  valor_f: uno_de([10.5, 12.2])
  valor_f_prev: uno_de([11.2, 11.5])

respuesta: valor_f < valor_f_prev

tipo: completar
enunciado: "En un problema de minimización, si el valor de la función objetivo en la iteración actual es de {valor_f} y en la anterior era de {valor_f_prev}, ¿se ha logrado una mejora en la solución?"

explicacion: |
  En problemas de optimización de mínimos, una "mejora" se define como una disminución en el valor de la función objetivo. Si el valor actual es menor que el anterior, el algoritmo se está acercando al mínimo.
```

### 16 — Iteración vs Convergencia

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["iteracion", "convergencia", "algoritmos"]

respuesta: "convergencia"
tipo: "completar"
respuestas_validas:
  - "convergencia"

enunciado: "Mientras que la iteración se refiere al proceso repetitivo de aplicar un algoritmo para refinar una solución, la ________ es el estado en el que la solución obtenida se aproxima a un valor límite o solución óptima."

explicacion: |
  La iteración es la acción de repetir el ciclo, mientras que la convergencia es la propiedad matemática de que dichas repeticiones se acercan cada vez más al objetivo.
```

### 17 — Diferencia entre Descenso de Gradiente y Búsqueda Exhaustiva

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["gradiente", "busqueda", "optimizacion"]

respuesta: "El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles."
tipo: "mc"
opciones_explicitas: ["El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles.", "El descenso de gradiente es un método de fuerza bruta, mientras que la búsqueda exhaustiva es un método basado en derivadas.", "Ambos métodos son idénticos en su forma de navegar el espacio de búsqueda.", "La búsqueda exhaustiva es siempre más eficiente que el descenso de gradiente en espacios continuos."]

enunciado: "¿Cuál es la principal diferencia entre el descenso de gradiente y la búsqueda exhaustiva como métodos de optimización?"

explicacion: |
  El descenso de gradiente es un método iterativo que utiliza el gradiente (derivada) para encontrar la dirección de máximo descenso, optimizando el tiempo de cómputo frente a una búsqueda exhaustiva que es computacionalmente costosa.
```

### 18 — ¿Es el criterio de parada un proceso iterativo?

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

### 19 — Flujo de un proceso de optimización iterativa

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["flujo", "iteracion", "optimización"]

respuesta_orden: ["Evaluación de la función", "Cálculo del error/gradiente", "Actualización de la variable", "Verificación del criterio de parada"]
tipo: "ordenar"
opciones_explicitas: ["Evaluación de la función", "Cálculo del error/gradiente", "Actualización de la variable", "Verificación del criterio de parada"]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa estándar, desde el inicio de la evaluación hasta la decisión de continuar o detenerse."

explicacion: |
  Un ciclo típico comienza evaluando la función en el punto actual, calculando cuánto nos hemos alejado del óptimo (error/gradiente), moviendo la variable hacia la mejora y finalmente comprobando si ya estamos lo suficientemente cerca para parar.
```

### 20 — Sensibilidad a la condición inicial

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
opciones_explicitas: ["Muy sensible", "Poco sensible", "No depende de la condición inicial", "Depende únicamente del número de iteraciones"]

enunciado: "En un proceso de optimización iterativa, el {datos[caso][0]} se caracteriza por ser {datos[caso][1]} a la elección del punto de partida inicial."

explicacion: |
  Los métodos de orden superior (como Newton-Raphson) suelen tener una convergencia cuadrática pero pueden divergir si el punto inicial es malo, a diferencia de métodos más robustos como la bisección.
```

### 21 — Optimización de mezcla de materiales

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
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  En optimización de procesos, el ciclo iterativo busca reducir el costo objetivo. 
  El cálculo fue: ${costo_actual} * 0.9 = ${redondear(costo_actual * 0.9, 2)}.
```

### 22 — Evaluación de convergencia

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

### 23 — Secuencia de mejora de proceso

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización de un sistema de control de temperatura:"

opciones_explicitas: ["Medir la variable", "Comparar con el setpoint", "Actuar sobre el sistema", "Analizar desviación"]
respuesta_orden: ["Medir la variable", "Comparar con el setpoint", "Analizar desviación", "Actuar sobre el sistema"]
tipo: ordenar

explicacion: |
  La secuencia lógica es: 1. Medición, 2. Comparación, 3. Análisis del error/desviación y 4. Acción correctiva.
```

### 24 — Selección de parámetros de control

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

### 25 — Error residual en optimización

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
  diferencia: abs(val_actual - val_previo)

enunciado: "En un proceso de optimización por descenso de gradiente, la diferencia entre el valor de la función en la iteración actual y la anterior es de {diferencia}."

respuesta: "0.05"
tipo: completar

explicacion: |
  El error o cambio entre iteraciones se calcula como |{val_actual} - {val_previo}|. En este caso: {diferencia}.
```
