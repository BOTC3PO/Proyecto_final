### 1 — Definición de condicional
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["conceptos", "logica"]

tipo: mc
opciones_explicitas: ["Una estructura que repite un bloque de código", "Una estructura que permite ejecutar código según una condición", "Una función que realiza cálculos matemáticos", "Un tipo de dato que almacena números"]

enunciado: "En programación, una estructura condicional es..."

explicacion: |
  Las estructuras condicionales permiten que el flujo de un programa cambie de dirección dependiendo de si una condición es verdadera o falsa.
```

### 2 — El valor de la condición
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "logica"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "Para que una sentencia 'if' ejecute su bloque de código, la expresión evaluada debe ser ___."

explicacion: |
  El cuerpo de un 'if' solo se ejecuta si la condición evaluada resulta en un valor booleano verdadero.
```

### 3 — Complemento de la estructura
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if_else", "flujo"]

tipo: completar
respuestas_validas: ["else"]

enunciado: "Si la condición del 'if' es falsa, el programa puede ejecutar un bloque alternativo utilizando la palabra clave ___."

explicacion: |
  La cláusula 'else' define el camino que toma el programa cuando la condición principal no se cumple.
```

### 4 — Evaluación de lógica
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["evaluacion", "booleano"]

variables:
  escenario: uno_de([
    [10 > 5, verdadero],
    [5 > 10, falso],
    [7 == 7, verdadero],
    [3 != 3, falso]
  ])

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado es ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [verdadero, falso]

explicacion: |
  La expresión evaluada es verdadera, por lo tanto, el resultado booleano es verdadero.
```

### 5 — Orden de evaluación
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

tipo: ordenar
opciones_explicitas: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

enunciado: "Ordena los pasos lógicos que sigue una estructura 'if-else' estándar:"

respuesta: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

explicacion: |
  El flujo lógico siempre comienza con la evaluación de la condición para luego decidir qué camino seguir.
```