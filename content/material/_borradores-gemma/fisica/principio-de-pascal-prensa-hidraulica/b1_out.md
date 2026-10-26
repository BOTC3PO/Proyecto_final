### 1 — Definición de Presión
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["presion", "fluido", "pascal"]

respuesta: "presion"
tipo: completar
respuestas_validas: ["presion"]

enunciado: "El principio de Pascal establece que cualquier cambio de ___ aplicado a un fluido incompresible en equilibrio dentro de un recipiente se transmite íntegramente a todas las partes del fluido y a las paredes del recipiente."

explicacion: |
  La presión en un fluido en reposo se transmite con la misma intensidad en todas las direcciones.
```

### 2 — Aplicación en Prensa Hidráulica
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["prensa", "hidraulica", "mecanismo"]

variables:
  es_hidraulica: true

respuesta: es_hidraulica
tipo: vf

enunciado: "¿Es el principio de Pascal la base fundamental para el funcionamiento de una prensa hidráulica?"

explicacion: |
  Correcto. La prensa hidráulica utiliza la transmisión de presión para multiplicar la fuerza aplicada.
```

### 3 — Relación de Fuerzas y Áreas
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "intermedio"
  tags: ["fuerza", "area", "presion"]

variables:
  escenario: uno_de([
    ["F1", "A1", "F2", "A2"],
    ["100", "10", "500", "50"],
    ["500", "50", "100", "10"]
  ])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["F1/A1 = F2/A2", "F1/A2 = F2/A1", "F1*A1 = F2*A2", "F1+A1 = F2+A2"]

enunciado: "En una prensa hidráulica ideal, según el principio de Pascal, la relación entre las fuerzas (F) y las áreas (A) de los émbolos es:"

explicacion: |
  Dado que la presión es constante ($P = F_1/A_1 = F_2/A_2$), la relación es $F_1/A_1 = F_2/A_2$.
```

### 4 — Propiedades del Fluido
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["fluido", "compresibilidad"]

respuesta: "incompresible"
tipo: completar
respuestas_validas: ["incompresible"]

enunciado: "Para que el principio de Pascal se aplique de manera eficiente en una prensa hidráulica, el fluido utilizado debe ser, por definición, ___."

explicacion: |
  Se requiere un fluido incompresible (como el aceite) para que el volumen no cambie significativamente bajo presión, permitiendo la transmisión de la fuerza.
```

### 5 — Componentes de la Prensa
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "intermedio"
  tags: ["componentes", "sistema"]

respuesta: ["Émbolo pequeño", "Fluido", "Émbolo grande"]
tipo: ordenar

opciones_explicitas: ["Émbolo pequeño", "Fluido", "Émbolo grande"]

enunciado: "Ordene los componentes de una prensa hidráulica según el orden en que se transmite la presión desde la aplicación de la fuerza inicial hasta la salida de la fuerza amplificada:"

explicacion: |
  La fuerza se aplica en el émbolo pequeño, se transmite a través del fluido y finalmente actúa sobre el émbolo grande.
```