### 1 — Ventajas de la modularidad
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir un programa en funciones pequeñas y reutilizables ayuda a reducir la duplicación de código y facilita el mantenimiento."

explicacion: |
  La modularidad permite que el código sea más legible y que las correcciones se realicen en un solo lugar, afectando a todas las partes que llaman a esa función.
```

### 2 — Identificación de parámetros
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "parametros"]

variables:
  escenario: uno_de([
    ["calcular_area_rectangulo", "base", "altura"],
    ["saludar_usuario", "nombre", "saludo"],
    ["sumar_dos_numeros", "a", "b"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["base", "nombre", "a"]

enunciado: "En la función {escenario[0]}({escenario[1]}, {escenario[2]}), ¿cuál es el nombre del primer parámetro?"

explicacion: |
  Los parámetros son las variables que una función recibe para procesar información. En el primer caso del escenario, el primer parámetro es {escenario[1]}.
```

### 3 — Flujo de una función con retorno
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "retorno"]

variables:
  datos: uno_de([
    [10, 2, 20],
    [5, 3, 15],
    [8, 4, 32]
  ])

respuesta: datos[2]
tipo: completat

enunciado: "Dada la siguiente función:
def multiplicar(x, y):
    return x * y

Si ejecutamos la llamada: resultado = multiplicar({datos[0]}, {datos[1]}), el valor de 'resultado' será ___."

pasos:
  - "Identificar los valores de entrada: x = {datos[0]} y y = {datos[1]}"
  - "Realizar la operación matemática: {datos[0]} * {datos[1]}"

respuestas_validas: [datos[2]]

explicacion: |
  La función realiza la operación de multiplicación y el comando 'return' devuelve el resultado hacia el punto donde fue llamada.
```

### 4 — Orden lógico de definición
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]
tipo: ordenar

opciones_explicitas: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]

enunciado: "Para que un programa modular funcione correctamente, ¿cuál es el orden lógico de ejecución de sus componentes?"

explicacion: |
  Primero se debe definir la lógica (la función), luego se invoca la función con los datos necesarios y finalmente se procesa o muestra el resultado obtenido.
```

### 5 — Ámbito de las variables (Scope)
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables_globales"]

variables:
  contexto: uno_de([
    ["x = 10", "valor_local", "error"],
    ["x = 5", "valor_local", "error"],
    ["x = 0", "error", "error"]
  ])

respuesta: "contexto[1]"
tipo: mc
opciones_explicitas: ["contexto[1]", "error", "contexto[0]"]

enunciado: "Considera el siguiente código:
x = 10
def mi_funcion():
    x = 5
    return x

Si llamamos a mi_funcion(), el valor devuelto es ___."

explicacion: |
  Dentro de la función, se crea una variable local 'x' que tiene el mismo nombre que la global, pero la función trabaja con la local. Por lo tanto, el valor devuelto es el de la variable local definida dentro del bloque.
```