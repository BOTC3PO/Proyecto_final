### 1 — El concepto de recursividad
```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

tipo: mc
opciones_explicitas: ["Una función que se llama a sí misma", "Una función que no tiene retorno", "Un bucle que nunca termina", "Una función que utiliza variables globales"]

enunciado: "En programación, ¿qué define técnicamente a una función recursiva?"

explicacion: |
  La recursividad ocurre cuando una función se invoca a sí misma dentro de su propio cuerpo para resolver una parte del problema.
```

### 2 — Componentes de la recursión
```
metadata:
  materia: "informatica"
  tema: "recursividad_componentes"
  nivel: "basico"
  tags: ["logica", "estructura"]

tipo: completar
respuestas_validas: ["caso base", "caso recursivo"]

enunciado: "Para que una función recursiva no entre en un bucle infinito, es indispensable que exista un ___ que detenga las llamadas, y un ___ que reduzca el problema original."

explicacion: |
  El caso base es la condición de parada que devuelve un valor sin realizar más llamadas. El caso recursivo es donde la función se llama a sí misma con un argumento modificado.
```

### 3 — Análisis de ejecución (Factorial)
```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["algoritmos", "factorial"]

variables:
  n: 4
  resultado: 24

tipo: input
tolerancia_abs: 0

enunciado: "Considera la siguiente función recursiva para calcular el factorial de n: \n`f(n) = if n == 0 then 1 else n * f(n-1)` \n\n¿Cuál es el valor de f({n})?"

pasos:
  - "f(4) = 4 * f(3)"
  - "f(3) = 3 * f(2)"
  - "f(2) = 2 * f(1)"
  - "f(1) = 1 * f(0)"
  - "f(0) = 1 (Caso base)"
  - "Cálculo: 4 * 3 * 2 * 1 * 1"

explicacion: |
  El resultado de 4! (factorial de 4) es 24.
```

### 4 — El problema de la pila de llamadas
```
metadata:
  materia: "informatica"
  tema: "recursividad_memoria"
  nivel: "intermedio"
  tags: ["memoria", "stack"]

tipo: vf

enunciado: "¿Es verdadero que cada llamada recursiva consume memoria adicional en la pila de llamadas (call stack) de la computadora?"

respuesta: verdadero

explicacion: |
  Verdadero. Cada llamada pendiente debe guardar su estado (variables locales, dirección de retorno) en la pila, lo que puede llevar a un error de 'stack overflow' si la recursión es muy profunda.
```

### 5 — Orden de ejecución (Paso a paso)
```
metadata:
  materia: "informatica"
  tema: "recursividad_orden"
  nivel: "avanzado"
  tags: ["flujo_control", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]
respuesta: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]

enunciado: "Ordena cronológicamente los eventos en la ejecución de una función recursiva para f(3) donde el caso base es f(0):"

explicacion: |
  La ejecución sigue una estructura de LIFO (Last In, First Out): primero se van apilando todas las llamadas hacia el caso base y luego se van resolviendo (retornando) a medida que la pila se descarga.
```