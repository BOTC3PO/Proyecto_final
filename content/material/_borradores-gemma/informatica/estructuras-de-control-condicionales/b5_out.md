### 1 — El semáforo inteligente
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "logica"]

variables:
  escenario: uno_de([["rojo", "detenerse"], ["verde", "avanzar"], ["amarillo", "precaucion"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["detenerse", "avanzar", "precaucion"]

enunciado: "Un sensor detecta que el semáforo está en color {escenario[idx][0]}. Según la lógica de control, la acción a ejecutar es ___."

explicacion: |
  El programa utiliza una estructura condicional para evaluar el estado de la variable 'color'. Si el color es rojo, la acción es detenerse.
```

### 2 — Validación de acceso
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "comparacion"]

variables:
  edad: uno_de([15, 20, 12])
  es_mayor: edad >= 18

respuesta: es_mayor
tipo: vf

enunciado: "Si tenemos una variable `edad` con el valor {edad}, la expresión `if (edad >= 18)` resultará en un valor booleano ___."

explicacion: |
  La expresión evalúa si el valor de la variable es mayor o igual a 18. Como {edad} es {edad}, el resultado es {es_mayor}.
```

### 3 — El sistema de descuentos
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if_else", "condicionales_anidadas"]

variables:
  datos: [["compra_alta", "aplicar_descuento"], ["compra_media", "sin_descuento"], ["compra_baja", "sin_descuento"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["aplicar_descuento", "sin_descuento"]

enunciado: "Un sistema de ventas evalúa el tipo de compra: {datos[idx][0]}. Si la condición es verdadera para una 'compra_alta', el sistema debe ___."

pasos:
  - "Evaluar el tipo de compra"
  - "Asignar la acción correspondiente al bloque else o if"

explicacion: |
  En una estructura if/else, el flujo se desvía hacia el bloque que cumple la condición. Para 'compra_alta', se ejecuta el primer bloque.
```

### 4 — Lógica de temperatura
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  temp: uno_de([35, 15, 25])
  es_calor: temp > 30

respuesta: es_calor
tipo: vf

enunciado: "Dada una variable `temp` con valor {temp}, la condición `if (temp > 30)` se evalúa como ___."

explicacion: |
  Al comparar {temp} con 30, obtenemos el valor booleano {es_calor}.
```

### 5 — Flujo de validación de usuario
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["ordenar", "logica_flujo"]

respuesta: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]
tipo: ordenar
opciones_explicitas: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]

enunciado: "Ordena los pasos lógicos de un programa que controla el acceso a un panel de administración mediante condicionales:"

explicacion: |
  Primero se debe verificar si la identidad es correcta (if password_ok), luego si el rol tiene permiso (if user_role == 'admin') y finalmente permitir el acceso.
```