### 1 — Presión en fluidos estáticos
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["presion", "fluidos"]

respuesta: verdadero
tipo: vf

enunciado: "Según el principio de Pascal, si aplicamos una presión en un punto de un fluido incompresible contenido en un recipiente cerrado, esta presión se transmite íntegramente a todos los puntos del fluido y a las paredes del recipiente."

explicacion: |
  El principio de Pascal establece que la presión aplicada a un fluido en equilibrio se transmite sin disminución a todas las partes del fluido y a las paredes del contenedor.
```

### 2 — Diferencia entre Presión y Fuerza
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["presion", "fuerza", "area"]

variables:
  escenario: uno_de([[10, 5, 100], [20, 5, 200], [50, 10, 500]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["10 N", "20 N", "50 N", "100 N"]

enunciado: "En una prensa hidráulica, si el émbolo pequeño tiene un área de 5 cm² y el émbolo grande tiene 100 cm², y aplicamos una presión de 2 Pa en el émbolo pequeño, ¿cuál es la fuerza resultante en el émbolo grande?"

pasos:
  - "Calcular la presión aplicada: P = F1 / A1"
  - "Aplicar la igualdad de presiones: P1 = P2"
  - "Despejar la fuerza en el émbolo grande: F2 = P * A2"

explicacion: |
  La presión es constante en ambos émbolos. Si P = 2 Pa y A2 = 100 cm², entonces F2 = 2 * 100 = 200 N. (Nota: El ejemplo usa valores del escenario sorteado).
```

### 3 — Componentes de la prensa hidráulica
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["prensa_hidraulica", "componentes"]

respuesta: ["Fluido incompresible", "Émbolo pequeño", "Émbolo grande", "Carga o peso"]
tipo: ordenar

opciones_explicitas: ["Fluido incompresible", "Émbolo pequeño", "Émbolo grande", "Carga o peso"]

enunciado: "Ordene los elementos de una prensa hidráulica según el orden en que la energía mecánica se transmite desde la aplicación de la fuerza inicial hasta el levantamiento de la carga:"

explicacion: |
  El proceso comienza con el fluido transmitiendo la presión, el émbolo pequeño recibiendo la fuerza, la presión moviendo el émbolo grande y finalmente levantando la carga.
```

### 4 — Comparación: Pascal vs. Arquímedes
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["conceptos", "comparacion"]

respuesta: "Principio de Arquímedes"
tipo: completar
respuestas_validas: ["Principio de Arquímedes"]

enunciado: "Mientras que el principio de Pascal se centra en la transmisión de la presión en un fluido confinado, el principio que describe la fuerza de empuje vertical que experimenta un cuerpo sumergido es el ___."

explicacion: |
  El principio de Arquímedes se refiere al empuje hacia arriba, mientras que Pascal se refiere a la transmisión de presión en todas las direcciones.
```

### 5 — Ventaja mecánica en prensas
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "avanzado"
  tags: ["ventaja_mecanica", "relacion"]

variables:
  datos: uno_de([[2, 10], [5, 25], [10, 100]])

respuesta: datos[0]
tipo: completar
respuestas_validas: ["20"]

enunciado: "Si en una prensa hidráulica el área del émbolo de salida es 10 veces mayor que el área del émbolo de entrada, la fuerza de salida será ___ veces la fuerza de entrada."

pasos:
  - "Relacionar presiones: F1/A1 = F2/A2"
  - "Despejar la relación de fuerzas: F2/F1 = A2/A1"
  - "Sustituir la relación de áreas: 10/1 = 10"

explicacion: |
  La ventaja mecánica es la relación entre las áreas (A2/A1), lo que permite multiplicar la fuerza aplicada.
```