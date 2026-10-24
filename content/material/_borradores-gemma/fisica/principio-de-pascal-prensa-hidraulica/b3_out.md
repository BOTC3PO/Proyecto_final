### 1 — ¿Se transmite la fuerza o la presión?
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["conceptos_clave", "presion", "fuerza"]

tipo: mc
opciones_explicitas: ["La fuerza aplicada", "La presión aplicada", "La densidad del fluido", "El volumen del fluido"]

enunciado: "Un error conceptual común al estudiar la prensa hidráulica es confundir qué magnitud se transmite íntegramente a través de un fluido incompresible. Según el principio de Pascal, lo que se transmite es la ___."

respuesta: "La presión aplicada"

explicacion: |
  El principio de Pascal establece que la presión aplicada en un punto de un fluido en equilibrio se transmite con la misma intensidad en todas las direcciones y en todos los puntos del fluido. La fuerza, en cambio, varía dependiendo del área de la superficie.
```

### 2 — La relación entre área y fuerza
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["prensa_hidraulica", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [10, 50, 200],
    [5, 100, 1000]
  ]

tipo: completar
respuestas_validas: ["200", "1000"]

enunciado: "En una prensa hidráulica, si aplicamos una presión de {datos[idx][0]} Pa en un émbolo de área 1 m², y el émbolo de salida tiene un área de {datos[idx][2]} m², la fuerza resultante en el émbolo de salida será de ___ N."

pasos:
  - "Calcular la presión aplicada: P = F1 / A1. Como A1 = 1, P = F1."
  - "Calcular la fuerza de salida: F2 = P * A2."

respuesta: "datos[idx][2]"

explicacion: |
  La presión es constante en todo el sistema. Si P = F1/A1, entonces F2 = P * A2. En el primer caso: 10/1 * 50 = 500 (error común si no se entiende la relación), pero si aplicamos la fórmula: P = 10/1 = 10. Entonces F2 = 10 * 50 = 500. 
  *Nota: El ejemplo en el enunciado usa datos predefinidos para evitar errores de cálculo del usuario en el diseño del DSL.*
  Revisando: Si P = 10 y A2 = 50, F2 = 500. Si P = 5 y A2 = 100, F2 = 500. 
  Corrijo para que coincida con el array:
  Si datos[0] = [10, 1, 50] -> P=10, F2=500.
  Si datos[1] = [5, 1, 100] -> P=5, F2=500.
  
  *Re-diseño de datos para la respuesta correcta:*
  datos: [
    [10, 1, 500],
    [5, 1, 1000]
  ]
  (Si P=10, A2=500 -> F2=5000. Si P=5, A2=1000 -> F2=5000)
  
  *Ajuste final para el prompt:*
  datos: [
    [10, 1, 500],
    [5, 1, 1000]
  ]
  respuestas_validas: ["5000"]
  enunciado: "Si la presión es {datos[idx][0]} Pa y el área de salida es {datos[idx][2]} m², la fuerza es ___ N."
  respuesta: "datos[idx][2] * datos[idx][0]"
```

*(Nota: Debido a la complejidad de la lógica de respuesta en el ejemplo anterior, procedo a entregar la versión final limpia y funcional siguiendo estrictamente el DSL)*

### 2 — La relación entre área y fuerza
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["prensa_hidraulica", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [10, 500],
    [5, 1000]
  ]

tipo: completar
respuestas_validas: ["5000", "5000"]

enunciado: "En una prensa hidráulica, si la presión aplicada es de {datos[idx][0]} Pa y el área del émbolo de salida es de {datos[idx][1]} m², la fuerza resultante en dicho émbolo será de ___ N."

pasos:
  - "Identificar la presión constante: P = {datos[idx][0]} Pa."
  - "Multiplicar la presión por el área de salida: F = P * A_salida."

respuesta: "datos[idx][0] * datos[idx][1]"

explicacion: |
  La fuerza es el producto de la presión por el área (F = P * A). Como la presión es constante en todo el fluido, la fuerza en el émbolo de salida depende directamente de su área.
```

### 3 — ¿El fluido puede ser aire?
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["fluido", "compresibilidad"]

tipo: vf

enunciado: "Para que una prensa hidráulica funcione de manera eficiente según el principio de Pascal, el fluido utilizado debe ser altamente compresible, como el aire."

respuesta: falso

explicacion: |
  Falso. El principio de Pascal se aplica de forma efectiva en líquidos (fluidos incompresibles). Si se usara un gas como el aire, la mayor parte de la energía se gastaría en comprimir el gas en lugar de transmitir la presión para mover el émbolo, haciendo que el sistema sea ineficiente o inoperante.
```

### 4 — ¿Aumenta la fuerza o la presión?
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["ventaja_mecanica", "fuerza"]

tipo: mc
opciones_explicitas: ["Aumenta la presión", "Aumenta la fuerza", "Aumenta la velocidad", "Aumenta la densidad"]

enunciado: "El objetivo principal de una prensa hidráulica, al usar un émbolo de salida mucho más grande que el de entrada, es lograr una ___ mayor."

respuesta: "Aumenta la fuerza"

explicacion: |
  Aunque la presión es la misma en ambos émbolos, al aumentar el área de salida, la fuerza resultante (F = P * A) aumenta proporcionalmente. Este es el principio de la ventaja mecánica.
```

### 5 — Orden de los conceptos en el proceso
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["proceso", "causa_efecto"]

type: ordenar
opciones_explicitas: ["Aplicación de presión sobre el fluido", "Transmisión de presión por el fluido", "Aumento de la fuerza en el émbolo de salida"]

enunciado: "Ordena correctamente la secuencia de eventos que ocurren en una prensa hidráulica:"

respuesta: ["Aplicación de presión sobre el fluido", "Transmisión de presión por el fluido", "Aumento de la fuerza en el émbolo de salida"]

explicacion: |
  Primero se aplica una presión en un punto (entrada), esta presión se transmite íntegramente por todo el fluido (Pascal) y finalmente se traduce en una fuerza mayor en el área de salida debido al incremento de superficie.
```