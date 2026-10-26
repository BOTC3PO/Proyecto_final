### 1 — Diferencia fundamental
```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas: ["caso base", "condicion de parada"]

enunciado: "Para evitar que una función recursiva entre en un bucle infinito, es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma y comience a retornar valores, evitando un desbordamiento de pila (stack overflow).
```

### 2 — Recursividad vs Iteración
```
metadata:
  materia: "informatica"
  tema: "recursividad_vs_iteracion"
  nivel: "intermedio"
  tags: ["recursividad", "iteracion", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "En términos de complejidad de espacio en la memoria (stack), una función recursiva suele ser más costosa que un bucle iterativo equivalente debido al uso de la pila de llamadas."

explicacion: |
  Verdadero. Cada llamada recursiva añade un nuevo marco de pila (stack frame) con sus variables locales y dirección de retorno, mientras que la iteración reutiliza el mismo espacio de memoria.
```

### 3 — Componentes de la recursión
```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["recursividad", "estructura"]

respuesta: ["Caso base", "Caso recursivo", "Reducción del problema"]
tipo: ordenar
opciones_explicitas: ["Caso base", "Caso recursivo", "Reducción del problema"]

enunciado: "Ordena los componentes lógicos necesarios para que un algoritmo recursivo sea correcto y termine:"

explicacion: |
  Para que la recursión funcione, primero se debe evaluar si llegamos al caso base; si no, se ejecuta el caso recursivo, el cual debe reducir el problema original hacia el caso base.
```

### 4 — El papel del estado
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

### 5 — Identificación de la estructura
```
metadata:
  materia: "informatica"
  tema: "recursividad_identificacion"
  nivel: "basico"
  tags: ["recursividad", "logica"]

variables:
  idx: uno_de([0,1])
  escenarios: [
    ["f(n) = n + f(n-1)", "recursivo"],
    ["f(n) = n + 1", "no recursivo"]
  ]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["recursivo", "no recursivo"]

enunciado: "Analiza la siguiente definición de función: {escenarios[idx][0]}. ¿Cuál es su naturaleza?"

explicacion: |
  Una función es recursiva si su definición incluye una llamada a sí misma con un argumento modificado, como se ve en el ejemplo seleccionado.
```