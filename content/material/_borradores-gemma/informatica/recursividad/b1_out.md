### 1 — Definición de recursividad
```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

respuesta: "recursividad"
tipo: completar
respuestas_validas: ["recursividad", "Recursividad"]

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

variables:
  es_necesario: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Para evitar un bucle infinito en una función recursiva, es indispensable contar con un {es_necesario} caso base que detenga las llamadas."

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
  escenario: uno_de([
    ["el caso que detiene la función", "caso base"],
    ["la llamada a la propia función", "caso recursivo"]
  ])

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

respuesta: ["Caso Base", "Caso Recursivo", "Retorno de valores"]
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