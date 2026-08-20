### 1 — El criterio de parada en iteraciones
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
tipo: vf

enunciado: "En un proceso iterativo de optimización, si el error absoluto en la iteración {error_actual} es menor que el error de la iteración anterior {error_previo}, ¿se está cumpliendo un criterio de convergencia?"

explicacion: |
  Para que un método iterativo sea considerado convergente en una etapa dada, el error debe disminuir en cada paso sucesivo. Si el error aumenta, el método está divergiendo o está en una zona de inestabilidad.
```

### 2 — Error de redondeo vs Error de truncamiento
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

### 3 — Secuencia de mejora en optimización
```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["flujo_trabajo", "iteracion"]

respuesta: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]
tipo: ordenar

opciones_explicitas: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa para mejorar una solución técnica:"

explicacion: |
  La optimización es un ciclo cerrado: primero se obtiene el resultado del ensayo, luego se compara con la meta (objetivo), se realizan los ajustes necesarios en los parámetros de entrada y finalmente se vuelve a ejecutar el ensayo.
```

### 4 — La trampa de la tolerancia insuficiente
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
respuestas_validas: ["infinitas", "finitas"]

enunciado: "Si un programador establece una tolerancia de error de ___ para un problema que tiene una precisión de máquina limitada, el algoritmo podría entrar en un ciclo de iteraciones ___."

explicacion: |
  Si la tolerancia exigida es menor que la precisión que la computadora puede representar para ese número (debido al error de punto flotante), el error nunca llegará a ser menor que la tolerancia y el bucle será infinito.
```

### 5 — ¿Mejora o cambio de dirección?
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

tipo: vf

enunciado: "En un problema de minimización, si el valor de la función objetivo en la iteración actual es de {valor_f} y en la anterior era de {valor_f_prev}, ¿se ha logrado una mejora en la solución?"

explicacion: |
  En problemas de optimización de mínimos, una "mejora" se define como una disminución en el valor de la función objetivo. Si el valor actual es menor que el anterior, el algoritmo se está acercando al mínimo.
```