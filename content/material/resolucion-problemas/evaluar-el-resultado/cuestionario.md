# Resolucion Problemas — Evaluar el resultado (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Evaluación

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "validar"
tipo: completar
respuestas_validas:
  - "validar"

enunciado: "El proceso de comprobar si la solución implementada realmente resolvió el problema se denomina ________."

explicacion: |
  La evaluación es la etapa donde se verifica si la solución propuesta cumple con los requisitos iniciales y resuelve el problema planteado.
```

### 2 — Criterios de Éxito

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["criterios", "metodologia"]

opciones_explicitas: ["Criterios de aceptación", "Pasos de la solución", "Variables de entorno", "Diagramas de flujo"]
respuesta: "Criterios de aceptación"
tipo: mc

enunciado: "¿Cómo se denominan los estándares o condiciones que se utilizan para determinar si una solución es correcta y satisfactoria?"

explicacion: |
  Los criterios de aceptación definen las condiciones que debe cumplir el resultado para ser considerado una solución válida.
```

### 3 — Verdad o Falso: Eficiencia

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["eficiencia", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Evaluar el resultado implica únicamente verificar que la solución sea correcta, sin importar el uso de recursos como tiempo o memoria."

explicacion: |
  Falso. Una evaluación completa también debe considerar la eficiencia (optimización de recursos) de la solución implementada.
```

### 4 — El Ciclo de la Solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["ciclo", "pasos"]

opciones_explicitas: ["Implementación", "Evaluación", "Diseño de la solución", "Análisis del problema"]
respuesta_orden: ["Análisis del problema", "Diseño de la solución", "Implementación", "Evaluación"]
tipo: ordenar

enunciado: "Ordena las etapas del ciclo de resolución de problemas desde el inicio hasta la fase de evaluación:"

explicacion: |
  El ciclo estándar comienza con entender el problema, diseñar la estrategia, construir la solución y finalmente evaluarla.
```

### 5 — Identificación de Errores

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["errores", "verificacion"]

variables:
  escenarios: [["el resultado es incorrecto", "el resultado es correcto pero lento"], ["fallo en la lógica", "fallo en la eficiencia"]]
  escenario: uno_de(escenarios)

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["el resultado es incorrecto", "el resultado es correcto pero lento", "fallo en la lógica", "fallo en la eficiencia"]

enunciado: "Si tras la evaluación se detecta que la solución no cumple con los criterios de aceptación debido a un error en el proceso, se concluye que: {escenario[0]}"

explicacion: |
  Si la solución no satisface los criterios establecidos, la evaluación indica que el problema no ha sido resuelto satisfactoriamente.
```

### 6 — Verificación de la suma de una lista

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["verificacion", "logica"]

variables:
  lista_datos: [12, 5, 8, 20]
  suma_esperada: sumar([12, 5, 8, 20])

enunciado: "Se implementó un algoritmo para sumar los elementos de la lista {lista_datos}. El resultado obtenido por el programa fue {suma_esperada}. ¿Es este resultado correcto según la suma manual?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  Para verificar un algoritmo de suma, debemos realizar la operación manualmente: 12 + 5 + 8 + 20 = 45. Como el resultado coincide, la solución es correcta.
```

### 7 — Comprobación de la media aritmética

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["estadistica", "verificacion"]

variables:
  valores: [10, 20, 30, 40]
  media_calculada: 25

enunciado: "Un estudiante afirma que el promedio de los valores {valores} es {media_calculada}. Si el procedimiento para calcular la media es sumar todos los elementos y dividir por la cantidad de elementos, ¿la respuesta es correcta?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  La media es (10 + 20 + 30 + 40) / 4 = 100 / 4 = 25. El resultado es correcto.
```

### 8 — Validación de un algoritmo de ordenamiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["ordenamiento", "verificacion"]

enunciado: "Se desea verificar si el siguiente proceso de ordenamiento ascendente es correcto para la lista original [15, 3, 9, 1]:"

pasos:
  - "Paso 1: Comparar 15 y 3 -> [3, 15, 9, 1]"
  - "Paso 2: Comparar 15 y 9 -> [3, 9, 15, 1]"
  - "Paso 3: Comparar 15 y 1 -> [3, 9, 1, 15]"
  - "Paso 4: Comparar 9 y 1 -> [3, 1, 9, 15]"
  - "Paso 5: Comparar 3 y 1 -> [1, 3, 9, 15]"

opciones_explicitas: ["Correcto", "Incorrecto"]

respuesta: "Correcto"
tipo: mc

explicacion: |
  Al seguir los pasos del algoritmo de burbuja (bubble sort), la lista resultante [1, 3, 9, 15] está efectivamente ordenada de menor a mayor.
```

### 9 — Verificación de la propiedad de un número primo

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["matematica", "verificacion"]

variables:
  n: 17

enunciado: "Un programa indica que el número {n} es primo. Para verificarlo, se comprueba si tiene divisores distintos de 1 y de sí mismo. El resultado de la función 'es_primo({n})' es ___."

respuestas_validas:
  - "verdadero"
  - "falso"

respuesta: "verdadero"
tipo: completar

explicacion: |
  El número 17 solo es divisible por 1 y 17. Por lo tanto, la afirmación de que es primo es verdadera.
```

### 10 — Comprobación de la lógica de un condicional

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["logica", "condicionales"]

variables:
  x: 10
  oy: 5

enunciado: "Se implementó la siguiente lógica para un sistema de facturación: 'Si el monto es mayor a 100, aplicar descuento de 10; de lo contrario, sumar el monto tal cual'. Si el monto es {x} y se le suma {oy}, el resultado final debería ser ___."

respuestas_validas:
  - "15"
tipo: completar

explicacion: |
  Dado que 10 no es mayor a 100, se aplica la condición 'de lo contrario'. Por tanto, el resultado es simplemente la suma: 10 + 5 = 15.
```

### 11 — La falacia de la prueba manual

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["validacion", "errores_comunes"]

variables:
  caso_test: uno_de([[10, 5], [20, 10], [5, 2.5]])

respuesta: "La prueba manual con un caso de éxito no descarta errores en otros escenarios"
tipo: mc
opciones_explicitas: ["La prueba manual con un solo caso es suficiente para garantizar la corrección", "La prueba manual con un caso de éxito no descarta errores en otros escenarios", "Si el resultado es el esperado para un caso, el algoritmo es perfecto", "La validación manual es más confiable que la automatizada"]

enunciado: "Un programador implementa una función para calcular la mitad de un número. Al probarla con el número {caso_test[0]}, obtiene {caso_test[1]} y concluye que el código es correcto para todos los números. ¿Cuál es el error en su proceso de evaluación?"

explicacion: |
  Comprobar que un algoritmo funciona para un caso específico (happy path) no garantiza que sea correcto para todos los casos de entrada. Se requiere una estrategia de pruebas que incluya casos límite (edge cases) y valores inesperados.
```

### 12 — Verificación vs. Validación

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

### 13 — El peligro de los casos de borde

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
respuestas_validas:
  - "0"
  - "-1"
  - "1000000"
  - "0.00001"

enunciado: "Si estamos evaluando un algoritmo de cálculo de raíz cuadrada y el valor de entrada es {input_val}, el resultado esperado es ___."

explicacion: |
  Evaluar el resultado implica probar no solo valores comunes, sino también valores extremos o 'edge cases' (como cero, números negativos o números muy grandes) para asegurar la robustez del sistema.
```

### 14 — Flujo de validación de resultados

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["metodologia", "ordenar"]

respuesta_orden: ["Definir el problema", "Implementar la solución", "Ejecutar pruebas con datos de prueba", "Comparar resultados con la solución esperada"]
tipo: ordenar
opciones_explicitas: ["Ejecutar pruebas con datos de prueba", "Definir el problema", "Comparar resultados con la solución esperada", "Implementar la solución"]

enunciado: "Ordene los pasos lógicos para asegurar que una solución implementada realmente resolvió el problema, partiendo desde la comprensión del mismo:"

explicacion: |
  Para evaluar correctamente, primero se debe entender el problema, luego construir la solución, probarla con datos conocidos y, finalmente, verificar si el output coincide con lo esperado.
```

### 15 — Comparación de precisión numérica

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

### 16 — Validación vs Verificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["conceptos", "calidad"]

respuesta: "verificación"
tipo: "completar"
respuestas_validas:
  - "verificación"

enunciado: "Mientras que la validación asegura que el producto cumpla con las necesidades del cliente, la ________ asegura que el producto se haya construido correctamente según las especificaciones técnicas."

explicacion: |
  La validación se enfoca en "¿estamos construyendo el producto correcto?" (necesidades del usuario), mientras que la verificación se enfoca en "¿estamos construyendo el producto correctamente?" (cumplimiento de especificaciones).
```

### 17 — El objetivo de la evaluación

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["conceptos", "metodologia"]

variables:
  es_correcta: uno_de([verdadero, falso])

respuesta: es_correcta
tipo: vf

enunciado: "Si una solución cumple con todos los requisitos técnicos pero no resuelve el problema original del usuario, ¿se puede considerar que la solución es exitosa desde la perspectiva de la validación?"

explicacion: |
  Falso. Si no resuelve el problema del usuario, la validación falla, aunque la verificación técnica haya sido exitosa.
```

### 18 — Diferencia entre error y defecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["calidad", "terminologia"]

opciones_explicitas: ["Defecto", "Error", "Falla"]

respuesta: "Falla"
tipo: "mc"

enunciado: "En el contexto de la evaluación de resultados, un ________ es la manifestación externa (el síntoma) de que un defecto ha sido ejecutado durante la operación del sistema."

explicacion: |
  El error es la acción humana, el defecto es la imperfección en el código/diseño, y la falla es la desviación del comportamiento esperado durante la ejecución.
```

### 19 — Secuencia de evaluación de calidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

opciones_explicitas: ["Identificar el problema", "Implementar solución", "Evaluar resultado", "Comparar con requerimientos"]

respuesta_orden: ["Identificar el problema", "Implementar solución", "Evaluar resultado", "Comparar con requerimientos"]
tipo: "ordenar"

enunciado: "Ordene las etapas lógicas para asegurar que la solución implementada realmente resolvió el problema planteado:"

explicacion: |
  Primero se debe conocer el problema, luego actuar, después observar el resultado obtenido y finalmente contrastarlo con los requerimientos iniciales para validar el éxito.
```

### 20 — Criterios de aceptación vs Requisitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["gestion", "calidad"]

respuesta: "Los criterios de aceptación son la medida objetiva para determinar si se ha cumplido el requisito."
tipo: "mc"
opciones_explicitas: ["Los criterios de aceptación son la medida objetiva para determinar si se ha cumplido el requisito.", "Los criterios de aceptación son solo deseos del cliente.", "Los requisitos son condiciones obligatorias para la validación.", "Ambos términos son sinónimos."]

enunciado: "En la fase de evaluación, ¿cuál es la distinción fundamental entre un requisito y un criterio de aceptación?"

explicacion: |
  Los requisitos definen el 'qué', mientras que los criterios de aceptación definen el 'cómo sabemos que se ha logrado' de manera medible.
```

### 21 — Verificación de Algoritmo de Promedio

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["verificacion", "promedio"]

variables:
  datos: [[ [10, 20, 30], 20 ], [ [5, 15, 25], 15 ], [ [100, 200, 300], 200 ]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Se implementó una función para calcular el promedio de una lista. Si la lista es {datos[idx][0]}, el resultado esperado es ___."

pasos:
  - "Sumar todos los elementos de la lista."
  - "Dividir la suma por la cantidad de elementos."

explicacion: |
  Para verificar si el algoritmo es correcto, comparamos el resultado obtenido con el valor teórico. En este caso, el promedio de {datos[idx][0]} es {datos[idx][1]}.
```

### 22 — Validación de Lógica de Paridad

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["logica", "paridad"]

variables:
  datos: [[12, verdadero], [7, falso], [4, verdadero]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Al evaluar la función `es_par(n)`, se ingresa el número {datos[idx][0]}. El resultado correcto de la implementación debe ser ___."

explicacion: |
  La función es correcta si devuelve el valor booleano que corresponde a la paridad del número evaluado.
```

### 23 — Comprobación de Ordenamiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["ordenamiento", "verificacion"]

variables:
  datos: [[5, 1, 9], [10, 2, 8], [3, 7, 4]]
  idx: uno_de([0, 1, 2])
  lista_original: datos[idx]
  lista_ordenada: [1, 3, 5, 7, 9, 10]

respuesta: "[1, 3, 5, 7, 9, 10]"
tipo: mc

enunciado: "Si el algoritmo de ordenamiento recibe la lista {lista_original}, ¿cuál debería ser la salida correcta para validar que el proceso fue exitoso?"

opciones_explicitas:
  - "[1, 3, 5, 7, 9, 10]"
  - "[1, 5, 9]"
  - "[9, 5, 1]"
  - "[5, 1, 9]"

explicacion: |
  Un algoritmo de ordenamiento ascendente debe transformar la lista desordenada en una secuencia estrictamente creciente.
```

### 24 — Evaluación de Implementación de Factorial

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["recursion", "factorial"]

variables:
  datos: [[5, 120], [4, 24], [6, 720]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Para validar la función `factorial(n)`, se prueba con n = {datos[idx][0]}. El valor de salida esperado es ___."

respuestas_validas:
  - "120"
  - "24"
  - "720"

explicacion: |
  La validación de funciones recursivas requiere comparar el valor retornado con el valor matemático esperado para un caso de prueba dado.
```

### 25 — Verificación de Filtro de Números Primos

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["filtros", "primos"]

variables:
  datos: [[ [2, 3, 4, 5, 6], [2, 3, 5] ], [ [1, 7, 8, 9, 11], [7, 11] ]]
  idx: uno_de([0, 1])

respuesta: "[2, 3, 5]"
tipo: mc

enunciado: "Se aplica una función `filtrar_primos` a la lista {datos[idx][0]}. ¿Cuál es el resultado esperado para confirmar que la implementación es correcta?"

opciones_explicitas:
  - "[2, 3, 5]"
  - "[2, 3, 4, 5, 6]"
  - "[7, 11]"
  - "[3, 5, 7, 11]"

explicacion: |
  La evaluación consiste en verificar que el conjunto resultante contenga únicamente los elementos de la lista original que cumplen la propiedad de ser primos.
```
