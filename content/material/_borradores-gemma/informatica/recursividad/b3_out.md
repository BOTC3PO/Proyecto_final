### 1 — El componente esencial
```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas: ["caso base", "caso base"]

enunciado: "Para evitar que una función recursiva entre en un bucle infinito y agote la memoria (stack overflow), es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma, devolviendo un valor sin realizar una nueva llamada recursiva.
```

### 2 — El riesgo del bucle infinito
```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "basico"
  tags: ["stack_overflow", "errores"]

variables:
  es_infinito: true

respuesta: es_infinito
tipo: vf

enunciado: "Si una función recursiva no reduce el tamaño del problema en cada paso hacia el caso base, ¿se producirá un error de desbordamiento de pila (stack overflow)? {es_infinito}"

explicacion: |
  Si el problema no se aproxima al caso base, la recursión es infinita y la pila de llamadas se llena, causando un error de ejecución.
```

### 3 — Análisis de flujo
```
metadata:
  materia: "informatica"
  tema: "recursividad_flujo"
  nivel: "intermedio"
  tags: ["flujo_ejecucion", "recursividad"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(2) -> f(1) -> f(0) -> Retorno"],
    ["f(3) -> f(4) -> f(5) -> ...", "f(3) -> f(4) -> f(5) -> ..."]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(4) -> f(5) -> ..."]

enunciado: "Si tenemos una función que resta 1 al argumento en cada llamada y el caso base es cuando el argumento es 0, ¿cuál es la secuencia correcta de llamadas para f(3)?"

explicacion: |
  En una recursión correcta, cada llamada debe acercarse al caso base. En el escenario {escenario[idx][0]}, la secuencia se detiene al llegar a 0.
```

### 4 — Componentes de la función
```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "intermedio"
  tags: ["estructura", "recursividad"]

respuesta: ["Caso base", "Caso recursivo", "Paso de parámetros"]
tipo: ordenar

opciones_explicitas: ["Caso base", "Caso recursivo", "Paso de parámetros"]

enunciado: "Ordena los componentes lógicos necesarios para que una función sea recursiva y funcional, desde lo que detiene la ejecución hasta lo que permite la progresión:"

explicacion: |
  Primero se define la condición de parada (caso base), luego la lógica de la llamada (caso recursivo) y finalmente cómo se transforma el dato (paso de parámetros).
```

### 5 — El retorno de valores
```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "avanzado"
  tags: ["retorno", "errores"]

variables:
  error_retorno: true

respuesta: error_retorno
tipo: vf

enunciado: "En una función recursiva que debe devolver la suma de los elementos de una lista, si olvidamos incluir la palabra clave 'return' en la llamada recursiva, la función devolverá un valor correcto. {error_retorno}"

explicacion: |
  Es un error común: si no se retorna el resultado de la llamada recursiva, la cadena de valores se rompe y la función principal no recibe el resultado acumulado.
```