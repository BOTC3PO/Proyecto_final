### 1 — El propósito de la modularidad
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "reutilizar"
tipo: completar
respuestas_validas: ["reutilizar", "reutilización"]

enunciado: "Mientras que un bloque de código aislado realiza una tarea única, la modularidad busca dividir un programa en piezas que permitan ___ el código en diferentes partes del sistema."

explicacion: |
  La modularidad permite dividir un problema complejo en subproblemas más pequeños y manejables, permitiendo que el código sea reutilizado en otros contextos sin necesidad de reescribirlo.
```

### 2 — Diferencia entre Parámetro y Argumento
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "terminologia"]

variables:
  es_diferente: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En el contexto de la definición de funciones, el 'parámetro' es la variable declarada en la firma de la función, mientras que el 'argumento' es el valor real pasado al invocarla. ¿Es esta distinción correcta? {es_diferente}"

explicacion: |
  Correcto. El parámetro actúa como un marcador de posición (variable local) y el argumento es el dato concreto que se envía durante la llamada.
```

### 3 — Ventaja de la Modularidad vs. Código Monolítico
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["comparacion", "mantenimiento"]

respuesta: "mantenimiento"
tipo: mc
opciones_explicitas: ["rendimiento", "mantenimiento", "estética", "velocidad"]

enunciado: "Comparado con un programa monolítico (un solo bloque de código gigante), un programa modular facilita principalmente el ___ y la detección de errores."

explicacion: |
  Al tener el código separado en módulos o funciones, si ocurre un error, es más fácil localizar la pieza exacta que está fallando sin afectar al resto del sistema.
```

### 4 — Flujo de ejecución en una función
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "modularidad"]

respuesta: ["llamada", "ejecución", "retorno"]
tipo: ordenar
opciones_explicitas: ["llamada", "ejecución", "retorno"]

enunciado: "Ordena cronológicamente los pasos que ocurren cuando el control de un programa pasa a una función:"

pasos:
  - "El programa salta a la definición de la función."
  - "La función devuelve un valor y el control vuelve al punto de origen."
  - "Se invoca la función con los valores necesarios."

explicacion: |
  El flujo lógico es: 1. Llamada (Call), 2. Ejecución del cuerpo de la función, 3. Retorno (Return) al flujo principal.
```

### 5 — Alcance de las variables (Scope)
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["local", "solo es visible dentro de la función"],
    ["global", "es accesible desde cualquier parte del programa"]
  ]

respuesta: "datos[escenario_idx][1]"
tipo: mc
opciones_explicitas: ["datos[escenario_idx][1]", "datos[escenario_idx][0]", "ninguna de las anteriores"]

enunciado: "Si definimos una variable dentro de una función, su alcance es {datos[escenario_idx][0]}. ¿Cuál es la característica de este tipo de variable?"

explicacion: |
  Las variables locales existen únicamente durante la ejecución de la función y no pueden ser accedidas directamente desde fuera de ella, lo cual es clave para evitar colisiones de nombres en la modularidad.
```