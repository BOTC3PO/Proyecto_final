### 1 — Concepto de modularidad
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "modularidad"
tipo: completar
respuestas_validas: ["modularidad"]

enunciado: "La capacidad de dividir un programa complejo en partes más pequeñas, independientes y manejables se denomina ___."

explicacion: |
  La modularidad permite organizar el código en bloques lógicos, facilitando el mantenimiento y la reutilización.
```

### 2 — Componentes de una función
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "conceptos"]

variables:
  idx: uno_de([0, 1])
  escenario: [[
    "El valor que una función recibe para procesar",
    "El valor que una función devuelve al finalizar su ejecución"
  ]]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["Parámetro", "Retorno", "Llamada", "Variable local"]

enunciado: "En el contexto de una función, {escenario[idx][0]} es el elemento que permite pasar información hacia el interior de la función."

explicacion: |
  Los parámetros son las variables de entrada que recibe una función para realizar su tarea.
```

### 3 — Reutilización de código
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["reutilizacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las principales ventajas de utilizar funciones es que permite evitar la duplicación de código, ya que una misma función puede ser invocada desde diferentes partes del programa."

explicacion: |
  Efectivamente, la reutilización es uno de los pilares de la programación modular.
```

### 4 — Flujo de ejecución
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta: ["Definición", "Llamada", "Ejecución", "Retorno"]
tipo: ordenar
opciones_explicitas: ["Definición", "Llamada", "Ejecución", "Retorno"]

enunciado: "Ordena los pasos lógicos que ocurren cuando se utiliza una función en un programa:"

pasos:
  - "Se declara la función y su lógica."
  - "Se invoca la función desde el código principal."
  - "Se procesan las instrucciones internas."
  - "La función devuelve un valor o finaliza."

explicacion: |
  Primero se debe definir la función, luego llamarla, se ejecuta su cuerpo y finalmente retorna el control o un valor.
```

### 5 — Ámbito de las variables
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["scope", "variables"]

respuesta: "local"
tipo: completar
respuestas_validas: ["local"]

enunciado: "Una variable declarada dentro del cuerpo de una función tiene un ámbito ___, lo que significa que no es accesible desde fuera de dicha función."

explicacion: |
  Las variables definidas dentro de una función son locales a su contexto de ejecución y no interfieren con el resto del programa.
```