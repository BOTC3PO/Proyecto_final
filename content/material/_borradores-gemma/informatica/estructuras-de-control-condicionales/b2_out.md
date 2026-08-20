### 1 — El valor de una condición
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "booleanos", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "En un programa, si evaluamos la expresión {x > 5} siendo x = 10, el resultado de la condición es ___."

explicacion: |
  Dado que 10 es mayor que 5, la expresión es verdadera.
```

### 2 — El flujo del bloque else
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "flujo"]

variables:
  escenario: uno_de([["edad = 15", "reprobado"], ["edad = 18", "aprobado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reprobado", "aprobado"]

enunciado: "Si tenemos el siguiente código: \nif (edad >= 18) {\n  print('aprobado');\n} else {\n  print('reprobado');\n}\n\nSi la variable edad es 15, ¿qué se imprimirá en consola?"

pasos:
  - "Evaluar la condición: ¿15 >= 18? La respuesta es falso."
  - "Como la condición es falsa, el programa salta el bloque 'if' y entra al bloque 'else'."
  - "Se ejecuta la instrucción dentro del 'else'."

explicacion: |
  Al ser la condición falsa, se ejecuta la rama alternativa (else).
```

### 3 — Completar la estructura
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else", "sintaxis"]

respuesta: ["else", "if"]
tipo: completar
respuestas_validas: ["else", "if"]

enunciado: "Completa la sintaxis correcta para este fragmento de código:\n\nif (puntuacion > 50) {\n  ___(puntuacion > 50) {\n    print('Excelente');\n  }\n} ___ {\n  print('Inténtalo de nuevo');\n}"

explicacion: |
  La estructura completa es 'if' para la condición inicial y 'else' para el caso contrario.
```

### 4 — Evaluación de condiciones anidadas
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else if", "logica"]

variables:
  caso: uno_de([["temp = 30", "calor"], ["temp = 10", "frio"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["calor", "frio", "templado"]

enunciado: "Analiza el siguiente código:\n\nif (temp > 25) {\n  print('calor');\n} else if (temp > 0) {\n  print('templado');\n} else {\n  print('frio');\n}\n\nSi la variable temp es 30, ¿cuál es la salida?"

pasos:
  - "Se evalúa la primera condición: 30 > 25. Es verdadero."
  - "Al cumplirse la primera condición, se ejecuta su bloque y se sale de la estructura."
  - "Las condiciones 'else if' y 'else' se ignoran completamente."

explicacion: |
  En una estructura if/else if/else, solo se ejecuta el primer bloque cuya condición sea verdadera.
```

### 5 — Orden lógico de ejecución
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]
tipo: ordenar
opciones_explicitas: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al encontrar una estructura condicional if-else:"

explicacion: |
  Primero se determina si la condición es verdadera o falsa, luego se elige qué camino seguir y finalmente se procesa la instrucción correspondiente.
```