### 1 — La falacia de la prueba manual
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["validacion", "errores_comunes"]

variables:
  caso_test: uno_de([[10, 5], [20, 10], [5, 2.5]])

respuesta: caso_test[1]
tipo: mc
opciones_explicitas: ["La prueba manual con un solo caso es suficiente para garantizar la corrección", "La prueba manual con un caso de éxito no descarta errores en otros escenarios", "Si el resultado es el esperado para un caso, el algoritmo es perfecto", "La validación manual es más confiable que la automatizada"]

enunciado: "Un programador implementa una función para calcular la mitad de un número. Al probarla con el número {caso_test[0]}, obtiene {caso_test[1]} y concluye que el código es correcto para todos los números. ¿Cuál es el error en su proceso de evaluación?"

explicacion: |
  Comprobar que un algoritmo funciona para un caso específico (happy path) no garantiza que sea correcto para todos los casos de entrada. Se requiere una estrategia de pruebas que incluya casos límite (edge cases) y valores inesperados.
```

### 2 — Verificación vs. Validación
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["conceptos", "verificacion"]

respuesta: falso
tipo: vf

enunciado: "En el contexto de evaluación de software, la 'verificación' consiste en asegurar que el producto final cumple con las necesidades reales del usuario, mientras que la 'validación' asegura que el producto se construyó correctamente según las especificaciones técnicas."

explicacion: |
  Es al revés: La Verificación se pregunta "¿Estamos construyendo el producto correctamente?" (cumplimiento de especificaciones), mientras que la Validación se pregunta "¿Estamos construyendo el producto correcto?" (cumplimiento de la necesidad del usuario).
```

### 3 — El peligro de los casos de borde
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["edge_cases", "testing"]

variables:
  input_val: uno_de([0, -1, 1000000, 0.00001])
  resultado_esperado: uno_de(["0", "-1", "1000000", "0.00001"])

respuesta: resultado_esperado
tipo: completar
respuestas_validas: ["0", "-1", "1000000", "0.00001"]

enunciado: "Si estamos evaluando un algoritmo de cálculo de raíz cuadrada y el valor de entrada es {input_val}, el resultado esperado es ___."

explicacion: |
  Evaluar el resultado implica probar no solo valores comunes, sino también valores extremos o 'edge cases' (como cero, números negativos o números muy grandes) para asegurar la robustez del sistema.
```

### 4 — Flujo de validación de resultados
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["metodologia", "ordenar"]

respuesta: ["Definir el problema", "Implementar la solución", "Ejecutar pruebas con datos de prueba", "Comparar resultados con la solución esperada"]
tipo: ordenar
opciones_explicitas: ["Ejecutar pruebas con datos de prueba", "Definir el problema", "Comparar resultados con la solución esperada", "Implementar la solución"]

enunciado: "Ordene los pasos lógicos para asegurar que una solución implementada realmente resolvió el problema, partiendo desde la comprensión del mismo:"

explicacion: |
  Para evaluar correctamente, primero se debe entender el problema, luego construir la solución, probarla con datos conocidos y, finalmente, verificar si el output coincide con lo esperado.
```

### 5 — Comparación de precisión numérica
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["precision", "floating_point"]

variables:
  valor_real: 0.3
  valor_computado: 0.1 + 0.2

respuesta: falso
tipo: vf

enunciado: "Al evaluar un algoritmo de suma de punto flotante, si el resultado esperado es {valor_real} y el resultado obtenido es {valor_computado}, podemos afirmar que el algoritmo es matemáticamente incorrecto debido a un error de lógica, ignorando la precisión de la máquina."

explicacion: |
  En computación, debido a la representación de números de punto flotante, 0.1 + 0.2 no es exactamente 0.3. Al evaluar resultados numéricos, es crucial distinguir entre un error de lógica del algoritmo y una limitación de la precisión de la arquitectura de la computadora.
```