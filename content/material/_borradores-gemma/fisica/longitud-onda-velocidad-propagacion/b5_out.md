### 1 — Onda de sonido en un instrumento
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "longitud_onda"]

variables:
  escenario: uno_de([[130, 0.5, 260], [440, 1.0, 440], [256, 2.0, 128]])
  v_sonido: 340

respuesta: escenario[idx][0] / (escenario[idx][1] * escenario[idx][2])
tipo: input
tolerancia_abs: 0.01

enunciado: "Un músico toca una nota cuya frecuencia es de {escenario[idx][1]} Hz. Si la velocidad del sonido en el aire es de {v_sonido} m/s, ¿cuál es la longitud de onda λ en metros?"

pasos:
  - "Identificar la fórmula de velocidad: v = λ · f"
  - "Despejar la longitud de onda: λ = v / f"
  - "Sustituir los valores: λ = {v_sonido} / {escenario[idx][1]}"

explicacion: |
  La longitud de onda se calcula dividiendo la velocidad de propagación por la frecuencia: λ = v / f.
  Para este caso: {v_sonido} / {escenario[idx][1]} = {redondear(v_sonido / escenario[idx][1], 2)} m.
```

### 2 — Radiofrecuencia en comunicaciones
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["radio", "electromagnetismo"]

variables:
  datos: [[100000000, 3.0e8, 3.0], [50000000, 3.0e8, 6.0], [1000000000, 3.0e8, 0.3]]
  idx: uno_de([0, 1, 2])
  frecuencia: datos[idx][0]
  velocidad: datos[idx][1]
  lambda_correcta: datos[idx][2]

respuesta: lambda_correcta
tipo: mc
opciones_explicitas: ["0.3 m", "3.0 m", "30.0 m", "300.0 m"]

enunciado: "Una antena de radio emite una señal con una frecuencia de {frecuencia} Hz. Si la señal viaja a la velocidad de la luz ({velocidad} m/s), ¿cuál es la longitud de onda de la radiación?"

explicacion: |
  Usando λ = v / f:
  λ = {velocidad} / {frecuencia} = {lambda_correcta} m.
```

### 3 — El fenómeno de la difracción
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si la frecuencia de una onda aumenta pero su velocidad de propagación se mantiene constante, la longitud de onda λ debe disminuir."

explicacion: |
  Dado que v = λ · f, la frecuencia y la longitud de onda son inversamente proporcionales para una velocidad constante. Si f aumenta, λ disminuye.
```

### 4 — Análisis de ondas marinas
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["oceanografia", "calculo"]

variables:
  caso: uno_de([[0.5, 12, 6], [2.0, 10, 5], [0.2, 15, 75]])
  v_onda: caso[idx][1]
  f_onda: caso[idx][0]
  l_onda: caso[idx][2]

respuesta: l_onda
tipo: completar
respuestas_validas: [6.0, 5.0, 75.0]

enunciado: "En un estudio oceanográfico se observa una onda con una frecuencia de {f_onda} Hz que se desplaza a una velocidad de {v_onda} m/s. La longitud de onda medida es de ___ m."

explicacion: |
  Aplicando la relación λ = v / f:
  λ = {v_onda} / {f_onda} = {l_onda} m.
```

### 5 — Procedimiento de cálculo de λ
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Dividir la velocidad por la frecuencia", "Multiplicar la velocidad por la frecuencia", "Sumar la velocidad y la frecuencia", "Dividir la frecuencia por la velocidad"]

respuesta: "Dividir la velocidad por la frecuencia"
tipo: mc

enunciado: "Para hallar la longitud de onda (λ) conociendo la velocidad (v) y la frecuencia (f), el procedimiento matemático correcto es:"

explicacion: |
  Partiendo de la fórmula v = λ · f, despejamos λ pasando la frecuencia a dividir al otro lado de la igualdad: λ = v / f.
```