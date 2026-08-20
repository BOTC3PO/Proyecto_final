### 1 — Relación entre masa y velocidad
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos_clave", "relacion_proporcional"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [2.0, 5.0],
    [10.0, 2.0]
  ]

enunciado: "Si un objeto tiene una masa de {datos[idx][0]} kg y una velocidad de {datos[idx][1]} m/s, su momento lineal es de ___ kg·m/s."

respuestas_validas:
  - "{datos[idx][0] * datos[idx][1]}"

tipo: completar

explicacion: |
  El momento lineal (p) se define como el producto de la masa por la velocidad (p = m · v). En este caso, el cálculo es {datos[idx][0]} * {datos[idx][1]} = {datos[idx][0] * datos[idx][1]}.
```

### 2 — El error de la masa constante
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["errores_comunes", "conceptos"]

enunciado: "Un camión de gran masa se desplaza a una velocidad muy baja, mientras que una pelota de tenis se desplaza a una velocidad muy alta. ¿Es posible que ambos tengan el mismo momento lineal?"

opciones_explicitas:
  - "Sí, el momento depende de ambos factores y pueden compensarse."
  - "No, el camión siempre tendrá más momento por su gran masa."
  - "No, la velocidad de la pelota es siempre mayor que la del camión."
  - "Sí, siempre que la aceleración sea la misma."

respuesta: "Sí, el momento depende de ambos factores y pueden compensarse."
tipo: mc

explicacion: |
  Un error común es pensar que la masa es el único factor determinante. Sin embargo, como p = m · v, una masa muy grande con una velocidad muy pequeña puede resultar en el mismo momento que una masa muy pequeña con una velocidad muy grande.
```

### 3 — Signo del momento lineal
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectores", "direccion"]

enunciado: "Si consideramos que la dirección hacia la derecha es positiva, un objeto que se mueve hacia la izquierda con una masa de 5 kg y una velocidad de 3 m/s tiene un momento lineal de ___ kg·m/s."

respuestas_validas:
  - "-15"

tipo: completar

explicacion: |
  El momento lineal es una magnitud vectorial. Si el objeto se mueve hacia la izquierda (dirección negativa), el signo del momento debe ser negativo: p = 5 kg * (-3 m/s) = -15 kg·m/s.
```

### 4 — Momento y aceleración
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["dinamica", "fuerza"]

enunciado: "Si la velocidad de un objeto aumenta mientras su masa permanece constante, ¿qué sucede con su momento lineal?"

opciones_explicitas:
  - "El momento lineal aumenta."
  - "El momento lineal disminuye."
  - "El momento lineal permanece constante."
  - "El momento lineal se vuelve cero."

respuesta: "El momento lineal aumenta."
tipo: mc

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto resultante (p) debe aumentar proporcionalmente.
```

### 5 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

enunciado: "La unidad resultante de multiplicar la unidad de masa (kg) por la unidad de velocidad (m/s) es:"

opciones_explicitas:
  - "kg·m/s"
  - "kg·m/s²"
  - "kg/m·s"
  - "N·m"

respuesta: "kg·m/s"
tipo: mc

explicacion: |
  Por definición de la fórmula p = m · v, las unidades se combinan multiplicando kilogramos (kg) por metros por segundo (m/s), resultando en kg·m/s.
```