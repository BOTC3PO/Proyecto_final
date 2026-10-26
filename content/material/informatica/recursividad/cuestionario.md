# Informatica — Recursividad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de recursividad

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

respuesta: "recursividad"
tipo: completar
respuestas_validas:
  - "recursividad"
  - "Recursividad"

enunciado: "La capacidad de una función para llamarse a sí misma durante su ejecución se denomina ________."

explicacion: |
  La recursividad es una técnica de programación donde una función se invoca a sí misma para resolver subproblemas del problema original.
```

### 2 — El caso base

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "Para evitar un bucle infinito en una función recursiva, es indispensable contar con al menos un caso base que detenga las llamadas."

explicacion: |
  Sin un caso base, la función se llamaría a sí misma indefinidamente (causando un error de desbordamiento de pila o stack overflow).
```

### 3 — Componentes de la recursión

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  escenario: uno_de([["el caso que detiene la función", "caso base"], ["la llamada a la propia función", "caso recursivo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["caso base", "caso recursivo", "caso infinito", "caso nulo"]

enunciado: "En una función recursiva, el componente que permite que la función se divida en problemas más pequeños se conoce como el {escenario[0]}."

explicacion: |
  El caso recursivo es la parte de la función donde se realiza la llamada recursiva, reduciendo el problema hacia el caso base.
```

### 4 — Flujo de ejecución

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "intermedio"
  tags: ["flujo_control"]

respuesta_orden: ["Caso Base", "Caso Recursivo", "Retorno de valores"]
tipo: ordenar

opciones_explicitas: ["Caso Base", "Caso Recursivo", "Retorno de valores"]

enunciado: "Ordena los pasos lógicos que ocurren en una ejecución recursiva típica desde que se entra a la función hasta que se obtiene el resultado final:"

explicacion: |
  Primero se ejecutan las llamadas (caso recursivo) hasta alcanzar el límite (caso base), y luego los valores se devuelven hacia atrás en la pila de llamadas.
```

### 5 — El riesgo de la recursión infinita

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["errores", "memoria"]

respuesta: "Stack Overflow"
tipo: mc
opciones_explicitas: ["Stack Overflow", "Syntax Error", "Null Pointer Exception", "Memory Leak"]

enunciado: "Cuando una función recursiva no tiene un caso base definido correctamente, se produce un error de desbordamiento de pila conocido como ________."

explicacion: |
  Cada llamada recursiva ocupa un espacio en la pila de ejecución (stack). Si las llamadas son infinitas, la memoria asignada a la pila se agota.
```

### 6 — El concepto de recursividad

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

tipo: mc
opciones_explicitas: ["Una función que se llama a sí misma", "Una función que no tiene retorno", "Un bucle que nunca termina", "Una función que utiliza variables globales"]
respuesta: "Una función que se llama a sí misma"
enunciado: "En programación, ¿qué define técnicamente a una función recursiva?"
explicacion: |
  La recursividad ocurre cuando una función se invoca a sí misma dentro de su propio cuerpo para resolver una parte del problema.
```

### 7 — Componentes de la recursión

```
metadata:
  materia: "informatica"
  tema: "recursividad_componentes"
  nivel: "basico"
  tags: ["logica", "estructura"]

tipo: completar
respuestas_validas:
  - "caso base"
  - "caso recursivo"

enunciado: "Para que una función recursiva no entre en un bucle infinito, es indispensable que exista un ___ que detenga las llamadas, y un ___ que reduzca el problema original."

explicacion: |
  El caso base es la condición de parada que devuelve un valor sin realizar más llamadas. El caso recursivo es donde la función se llama a sí misma con un argumento modificado.
```

### 8 — Análisis de ejecución (Factorial)

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["algoritmos", "factorial"]

variables:
  n: 4
  resultado: 24

tipo: completar
tolerancia_abs: 0

enunciado: "Considera la siguiente función recursiva para calcular el factorial de n: \n`f(n) = if n == 0 then 1 else n * f(n-1)` \n\n¿Cuál es el valor de f({n})?"

respuesta: resultado
explicacion: |
  El resultado de 4! (factorial de 4) es 24.
```

### 9 — El problema de la pila de llamadas

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

### 10 — Orden de ejecución (Paso a paso)

```
metadata:
  materia: "informatica"
  tema: "recursividad_orden"
  nivel: "avanzado"
  tags: ["flujo_control", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]
respuesta_orden: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]

enunciado: "Ordena cronológicamente los eventos en la ejecución de una función recursiva para f(3) donde el caso base es f(0):"

explicacion: |
  La ejecución sigue una estructura de LIFO (Last In, First Out): primero se van apilando todas las llamadas hacia el caso base y luego se van resolviendo (retornando) a medida que la pila se descarga.
```

### 11 — El componente esencial

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas:
  - "caso base"
  - "caso base"

enunciado: "Para evitar que una función recursiva entre en un bucle infinito y agote la memoria (stack overflow), es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma, devolviendo un valor sin realizar una nueva llamada recursiva.
```

### 12 — El riesgo del bucle infinito

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "basico"
  tags: ["stack_overflow", "errores"]

variables:
  es_infinito: verdadero

respuesta: verdadero
tipo: vf
enunciado: "Si una función recursiva no reduce el tamaño del problema en cada paso hacia el caso base, ¿se producirá un error de desbordamiento de pila (stack overflow)?"

explicacion: |
  Si el problema no se aproxima al caso base, la recursión es infinita y la pila de llamadas se llena, causando un error de ejecución.
```

### 13 — Análisis de flujo

```
metadata:
  materia: "informatica"
  tema: "recursividad_flujo"
  nivel: "intermedio"
  tags: ["flujo_ejecucion", "recursividad"]

respuesta: "f(3) -> f(2) -> f(1) -> f(0) -> Retorno"
tipo: mc
opciones_explicitas: ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(4) -> f(5) -> ..."]

enunciado: "Si tenemos una función que resta 1 al argumento en cada llamada y el caso base es cuando el argumento es 0, ¿cuál es la secuencia correcta de llamadas para f(3)?"

explicacion: |
  En una recursión correcta, cada llamada debe acercarse al caso base. La secuencia f(3) -> f(2) -> f(1) -> f(0) se detiene al llegar a 0.
```

### 14 — Componentes de la función

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "intermedio"
  tags: ["estructura", "recursividad"]

respuesta_orden: ["Caso base", "Caso recursivo", "Paso de parámetros"]
tipo: ordenar

opciones_explicitas: ["Caso base", "Caso recursivo", "Paso de parámetros"]

enunciado: "Ordena los componentes lógicos necesarios para que una función sea recursiva y funcional, desde lo que detiene la ejecución hasta lo que permite la progresión:"

explicacion: |
  Primero se define la condición de parada (caso base), luego la lógica de la llamada (caso recursivo) y finalmente cómo se transforma el dato (paso de parámetros).
```

### 15 — El retorno de valores

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "avanzado"
  tags: ["retorno", "errores"]

variables:
  error_retorno: falso

respuesta: error_retorno
tipo: vf
enunciado: "En una función recursiva que debe devolver la suma de los elementos de una lista, si olvidamos incluir la palabra clave 'return' en la llamada recursiva, la función devolverá un valor correcto."

explicacion: |
  Es un error común: si no se retorna el resultado de la llamada recursiva, la cadena de valores se rompe y la función principal no recibe el resultado acumulado.
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas:
  - "caso base"
  - "condicion de parada"

enunciado: "Para evitar que una función recursiva entre en un bucle infinito, es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma y comience a retornar valores, evitando un desbordamiento de pila (stack overflow).
```

### 17 — Recursividad vs Iteración

```
metadata:
  materia: "informatica"
  tema: "recursividad_vs_iteracion"
  nivel: "intermedio"
  tags: ["recursividad", "iteracion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "En términos de complejidad de espacio en la memoria (stack), una función recursiva suele ser más costosa que un bucle iterativo equivalente debido al uso de la pila de llamadas."

explicacion: |
  Verdadero. Cada llamada recursiva añade un nuevo marco de pila (stack frame) con sus variables locales y dirección de retorno, mientras que la iteración reutiliza el mismo espacio de memoria.
```

### 18 — Componentes de la recursión

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["recursividad", "estructura"]

respuesta_orden: ["Caso base", "Caso recursivo", "Reducción del problema"]
tipo: ordenar
opciones_explicitas: ["Caso base", "Caso recursivo", "Reducción del problema"]

enunciado: "Ordena los componentes lógicos necesarios para que un algoritmo recursivo sea correcto y termine:"

explicacion: |
  Para que la recursión funcione, primero se debe evaluar si llegamos al caso base; si no, se ejecuta el caso recursivo, el cual debe reducir el problema original hacia el caso base.
```

### 19 — El papel del estado

```
metadata:
  materia: "informatica"
  tema: "recursividad_estado"
  nivel: "intermedio"
  tags: ["recursividad", "estado", "memoria"]

respuesta: "el estado se mantiene en la pila de llamadas"
tipo: mc
opciones_explicitas: ["el estado se mantiene en la pila de llamadas", "el estado se pierde en cada llamada", "el estado se guarda en una variable global única", "el estado no es necesario en recursión"]

enunciado: "Al comparar una función recursiva con un bucle 'while', ¿en qué se diferencia la gestión de las variables locales?"

explicacion: |
  En la recursividad, cada llamada tiene su propio ámbito (scope) y sus propias variables, las cuales se almacenan en la pila de ejecución (stack).
```

### 20 — Identificación de la estructura

```
metadata:
  materia: "informatica"
  tema: "recursividad_identificacion"
  nivel: "basico"
  tags: ["recursividad", "logica"]

variables:
  idx: uno_de([0,1])
  escenarios: [["f(n) = n + f(n-1)", "recursivo"], ["f(n) = n + 1", "no recursivo"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["recursivo", "no recursivo"]

enunciado: "Analiza la siguiente definición de función: {escenarios[idx][0]}. ¿Cuál es su naturaleza?"

explicacion: |
  Una función es recursiva si su definición incluye una llamada a sí misma con un argumento modificado, como se ve en el ejemplo seleccionado.
```

### 21 — El concepto de recursividad

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "caso base"
tipo: "completar"
respuestas_validas:
  - "caso base"
  - "caso recursivo"
  - "condicion de parada"

enunciado: "Para que una función recursiva no se ejecute infinitamente y cause un error de desbordamiento de pila, es indispensable que contenga un ___ que permita detener la recursión."

explicacion: |
  El caso base es la condición que se cumple cuando la función deja de llamarse a sí misma, permitiendo que la pila de llamadas se resuelva.
```

### 22 — Identificación de componentes

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["logica"]

variables:
  escenario: uno_de([["f(n) = n * f(n-1) con f(0)=1", "factorial"], ["f(n) = f(n-1) + f(n-2) con f(0)=0, f(1)=1", "fibonacci"], ["f(n) = n + f(n-1) con f(0)=0", "suma_naturales"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["factorial", "fibonacci", "suma_naturales", "potencia"]

enunciado: "Dada la siguiente definición recursiva: {escenario[0]}, ¿cuál es el nombre del algoritmo que se está implementando?"

explicacion: |
  El algoritmo descrito corresponde a {escenario[1]}.
```

### 23 — Veracidad de la recursividad

```
metadata:
  materia: "informatica"
  tema: "recursividad_logica"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es posible que una función recursiva sea correcta si su caso recursivo no reduce el tamaño del problema hacia el caso base?"

explicacion: |
  Falso. Si el problema no se reduce (por ejemplo, si llamamos a f(n) con f(n) en lugar de f(n-1)), nunca se alcanzará el caso base, resultando en una recursión infinita.
```

### 24 — Orden de ejecución en la pila

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["pila", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]
respuesta_orden: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]

enunciado: "Ordena cronológicamente los eventos de una función que llama a sí misma tres veces (n=3, n=2, n=1) antes de empezar a devolver valores (unwinding):"

explicacion: |
  En la recursión, primero se apilan todas las llamadas en la pila (stack) hasta llegar al caso base, y luego se procesan los retornos en orden inverso a la entrada.
```

### 25 — Cálculo de valor recursivo

```
metadata:
  materia: "informatica"
  tema: "recursividad_calculo"
  nivel: "avanzado"
  tags: ["calculo", "algoritmos"]

variables:
  datos: [[5, 120], [4, 24], [3, 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos una función para calcular el factorial de n, donde f(n) = n * f(n-1) y f(0) = 1, ¿cuál es el resultado de ejecutar la función con el valor n = {datos[idx][0]}?"

explicacion: |
  El factorial de {datos[idx][0]} es {datos[idx][1]}.
```
