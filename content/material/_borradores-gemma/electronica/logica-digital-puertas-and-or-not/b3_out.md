### 1 — La confusión de la puerta NOT
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "not"]

respuesta: falso
tipo: vf

enunciado: "Si aplicamos una señal de entrada '1' a una puerta lógica NOT, la salida resultante es '1'."

explicacion: |
  La puerta NOT es un inversor. Su función es cambiar el estado de la señal: si entra un 1, la salida es 0; si entra un 0, la salida es 1.
```

### 2 — El error de la suma en la puerta OR
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "or"]

variables:
  escenario: uno_de([[0, 0], [0, 1], [1, 0], [1, 1]])

respuesta: tabla[escenario][1]
tipo: mc
opciones_explicitas: ["0", "1", "2", "3"]
tablas:
  - [0, 0, 0]
  - [0, 1, 1]
  - [1, 0, 1]
  - [1, 1, 1]

enunciado: "En una puerta lógica OR, si las entradas son {escenario[0]} y {escenario[1]}, la salida es ___."

explicacion: |
  La puerta OR devuelve '1' si al menos una de sus entradas es '1'. El error común es pensar que la salida puede ser '2' (como en una suma aritmética), pero en lógica digital los valores están limitados a {0, 1}.
```

### 3 — La trampa de la puerta AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and"]

respuesta: "0"
tipo: completar
respuestas_validas: ["0", "1"]

enunciado: "Para que una puerta AND entregue una salida de '1', todas sus entradas deben ser ___."

explicacion: |
  La puerta AND actúa como un multiplicador lógico. Solo si todas las condiciones (entradas) se cumplen (son 1), la salida es 1. Si alguna es 0, la salida es 0.
```

### 4 — Secuencia de evaluación lógica
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["ordenar", "logica"]

respuesta: ["NOT(A)", "AND(B, C)", "OR(D, E)"]
tipo: ordenar
opciones_explicitas: ["OR(D, E)", "NOT(A)", "AND(B, C)"]

enunciado: "Ordena las siguientes operaciones según el orden de prioridad estándar de precedencia en álgebra de Boole (de mayor a menor prioridad):"

pasos:
  - "1. Inversión (NOT)"
  - "2. Producto lógico (AND)"
  - "3. Suma lógica (OR)"

explicacion: |
  Al igual que en la aritmética, en la lógica digital la negación (NOT) tiene la mayor prioridad, seguida de la conjunción (AND) y finalmente la disyunción (OR).
```

### 5 — El valor de la salida en AND
```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and"]

variables:
  caso: uno_de([[0, 1], [1, 0], [0, 0]])

respuesta: 0
tipo: vf

enunciado: "Si una puerta AND tiene una entrada en '1' y la otra en '0', el resultado es 0."

explicacion: |
  Es correcto. En la puerta AND, si existe al menos un cero en las entradas, la salida será siempre 0. Solo el caso [1, 1] produce un 1.
```