### 1 — El concepto de recursividad
```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "caso base"
tipo: "completar"
respuestas_validas: ["caso base", "caso recursivo", "condicion de parada"]

enunciado: "Para que una función recursiva no se ejecute infinitamente y cause un error de desbordamiento de pila, es indispensable que contenga un ___ que permita detener la recursión."

explicacion: |
  El caso base es la condición que se cumple cuando la función deja de llamarse a sí misma, permitiendo que la pila de llamadas se resuelva.
```

### 2 — Identificación de componentes
```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["logica"]

variables:
  escenario: uno_de([
    ["f(n) = n * f(n-1) con f(0)=1", "factorial"],
    ["f(n) = f(n-1) + f(n-2) con f(0)=0, f(1)=1", "fibonacci"],
    ["f(n) = n + f(n-1) con f(0)=0", "suma_naturales"]
  ])

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["factorial", "fibonacci", "suma_naturales", "potencia"]

enunciado: "Dada la siguiente definición recursiva: {escenario[idx][0]}, ¿cuál es el nombre del algoritmo que se está implementando?"

explicacion: |
  El algoritmo descrito corresponde a {escenario[idx][1]}.
```

### 3 — Veracidad de la recursividad
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

### 4 — Orden de ejecución en la pila
```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["pila", "stack"]

respuesta: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]
tipo: "ordenar"
opciones_explicitas: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]

enunciado: "Ordena cronológicamente los eventos de una función que llama a sí misma tres veces (n=3, n=2, n=1) antes de empezar a devolver valores (unwinding):"

explicacion: |
  En la recursión, primero se apilan todas las llamadas en la pila (stack) hasta llegar al caso base, y luego se procesan los retornos en orden inverso a la entrada.
```

### 5 — Cálculo de valor recursivo
```
metadata:
  materia: "informatica"
  tema: "recursividad_calculo"
  nivel: "avanzado"
  tags: ["calculo", "algoritmos"]

variables:
  datos: [
    [5, 120],
    [4, 24],
    [3, 6]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: "input"
tolerancia_abs: 0

enunciado: "Si tenemos una función para calcular el factorial de n, donde f(n) = n * f(n-1) y f(0) = 1, ¿cuál es el resultado de ejecutar la función con el valor n = {datos[idx][0]}?"

explicacion: |
  El factorial de {datos[idx][0]} es {datos[idx][1]}.
```