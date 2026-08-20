### 1 — Diferencia fundamental de la puerta NOT
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_not"]

respuesta: "inversor"
tipo: completar
respuestas_validas: ["inversor", "inversión", "cambio"]

enunciado: "A diferencia de las puertas AND u OR que procesan múltiples entradas para determinar una salida, la puerta NOT se caracteriza por ser un ___ que invierte el estado de una única entrada."

explicacion: |
  La puerta NOT es una función unaria. Su única función es transformar un 1 en 0 y un 0 en 1.
```

### 2 — Comportamiento de la puerta AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_and", "logica"]

variables:
  escenario: uno_de([
    [1, 1, 1],
    [1, 0, 0],
    [0, 1, 0]
  ])

respuesta: uno_de(escenario)[2]
tipo: mc
opciones_explicitas: ["1", "0"]

enunciado: "Considerando la tabla de verdad de una puerta AND con dos entradas, si las entradas son {escenario[0]} y {escenario[1]}, la salida será:"

explicacion: |
  En una puerta AND, la salida es 1 únicamente si todas las entradas son 1. En este caso, la combinación seleccionada da como resultado {escenario[2]}.
```

### 3 — Verdad o Falso: La puerta OR y el estado nulo
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_or", "logica"]

respuesta: falso

tipo: vf
enunciado: "Si una puerta OR tiene una entrada en estado 0, la salida dependerá exclusivamente del valor de la otra entrada."

explicacion: |
  Es verdadero que la salida depende de la otra entrada, pero la afirmación de que 'la salida dependerá de la otra entrada' es una propiedad de la puerta OR cuando una entrada es 0. Sin embargo, si la pregunta se plantea como: 'La puerta OR solo da 1 si ambas son 1', eso sería falso. Reevaluando la lógica: Si una entrada es 0, la salida es igual a la otra entrada. Por lo tanto, la afirmación es verdadera. Corrijo el tipo a vf con respuesta verdadera para el ejemplo:
  (Nota: El usuario pidió VF con booleano real).
  
  Re-generando para evitar ambigüedad:
```

### 3 — Verdad o Falso: Propiedad de la puerta OR
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_or", "logica"]

respuesta: verdadero

tipo: vf
enunciado: "En una puerta OR, si al menos una de sus entradas es 1, la salida será siempre 1."

explicacion: |
  Correcto. La función OR devuelve 1 si existe al menos un 1 en las entradas.
```

### 4 — Comparación de tablas de verdad
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["and_vs_or"]

variables:
  caso: uno_de([
    [1, 1, 1],
    [1, 0, 1],
    [0, 1, 1]
  ])

respuesta: uno_de(caso)[2]
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "Si comparamos una puerta AND con una puerta OR ante las entradas {caso[0]} y {caso[1]}, la salida de la puerta OR será:"

explicacion: |
  La puerta OR es más 'inclusiva' que la AND. Mientras que la AND requiere que todos sean 1 para dar 1, la OR solo requiere uno. En este caso, la salida es {caso[2]}.
```

### 5 — Secuencia de procesamiento de señales
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["secuencia", "logica"]

opciones_explicitas: ["Entrada -> NOT -> Salida", "Entrada -> AND -> Salida", "Entrada -> OR -> Salida"]
respuesta: "Entrada -> NOT -> Salida"
tipo: ordenar
enunciado: "Ordene los pasos de un circuito simple donde una señal de entrada debe ser invertida antes de ser procesada por una puerta lógica (considere el flujo de señal):"

explicacion: |
  En un diseño lógico, el flujo sigue la dirección de la señal: primero la entrada, luego el componente (NOT) y finalmente la salida.
```