### 1 — Diferencia entre if y if-else
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["condicionales", "lógica"]

respuesta: "else"
tipo: "completar"
respuestas_validas: ["else"]

enunciado: "Mientras que la estructura 'if' permite ejecutar un bloque de código si una condición es verdadera, la cláusula ___ se utiliza para definir qué código debe ejecutarse cuando dicha condición es falsa."

explicacion: |
  La estructura 'if' evalúa una condición. Si es verdadera, ejecuta su bloque. El 'else' es el bloque opcional que se ejecuta únicamente cuando la condición del 'if' resulta ser falsa.
```

### 2 — Evaluación de condiciones booleanas
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "lógica"]

variables:
  escenario: uno_de([
    ["x > 5", "verdadero"],
    ["x == 10", "falso"],
    ["5 < 2", "falso"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado booleano que la estructura de control procesará es ___."

explicacion: |
  En programación, las estructuras condicionales dependen de valores booleanos. Si la expresión matemática o lógica se cumple, el resultado es 'verdadero'; de lo contrario, es 'falso'.
```

### 3 — El rol del bloque condicional
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo_de_control", "lógica"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que una estructura 'if' sin un bloque 'else' puede ser utilizada para ejecutar código de forma selectiva sin necesidad de manejar el caso contrario?"

explicacion: |
  Verdadero. Un 'if' independiente es perfectamente válido y se usa precisamente para ejecutar algo solo si se cumple una condición, ignorando el flujo si la condición es falsa.
```

### 4 — Orden lógico de evaluación
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["anidamiento", "flujo"]

respuesta: ["if", "else if", "else"]
tipo: "ordenar"
opciones_explicitas: ["if", "else if", "else"]

enunciado: "En una estructura condicional compuesta (múltiples opciones), ¿cuál es el orden lógico de evaluación que debe seguir el procesador para evaluar condiciones de forma jerárquica?"

explicacion: |
  El programa evalúa primero la condición principal (if). Si no se cumple, pasa a las condiciones intermedias (else if) una por una. Si ninguna se cumple, se ejecuta el bloque por defecto (else).
```

### 5 — Comparación de operadores de comparación
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["operadores", "comparación"]

variables:
  caso: uno_de([
    ["5 == 5", "igualdad"],
    ["5 != 5", "desigualdad"]
  ])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["igualdad", "desigualdad"]

enunciado: "Si comparamos la expresión {caso[0]}, el operador utilizado busca determinar la ___ entre los dos valores."

explicacion: |
  El operador '==' comprueba si dos valores son iguales, mientras que '!=' (o distinto de) comprueba si son diferentes. Son la base de las decisiones en los condicionales.
```