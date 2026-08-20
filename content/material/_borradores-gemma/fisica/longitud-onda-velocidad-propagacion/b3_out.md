### 1 — La confusión de las unidades
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "conceptos_basicos"]

variables:
  frecuencia: 50.0
  longitud: 2.0

respuesta: "100.0"
tipo: input
tolerancia_abs: 0.01

enunciado: "Para calcular la velocidad de una onda usando la fórmula $v = \lambda \cdot f$, si la longitud de onda $\lambda$ está en metros (m) y la frecuencia $f$ está en Hertz (Hz), la unidad resultante para la velocidad será ___."

pasos:
  - "Identificar las unidades de los componentes: $\lambda$ [m] y $f$ [1/s]."
  - "Multiplicar las unidades: $m \cdot (1/s) = m/s$."

explicacion: |
  El error común es confundir la unidad de velocidad con la de frecuencia o longitud. La velocidad es la distancia recorrida por la fase de la onda por unidad de tiempo, por lo tanto, se mide en metros por segundo (m/s).
```

### 2 — Relación inversa: Frecuencia vs Longitud
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["relacion_inversa", "ondas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[440.0, 0.75], [220.0, 1.5]]

respuesta: "verdadero"
tipo: vf

enunciado: "En un medio donde la velocidad de propagación es constante, si la frecuencia de una onda se duplica, su longitud de onda se reduce a la mitad. ¿Es esto correcto?"

explicacion: |
  Dado que $v = \lambda \cdot f$ y $v$ es constante, la relación entre $\lambda$ y $f$ es inversamente proporcional. Si $f$ aumenta, $\lambda$ debe disminuir para mantener el producto constante.
```

### 3 — El error de la velocidad de fase
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["velocidad_fase", "error_comun"]

variables:
  v_onda: 340.0
  f_onda: 170.0

respuesta: "1.75"
tipo: input
tolerancia_abs: 0.01

enunciado: "Un estudiante afirma que si una onda tiene una frecuencia de {f_onda} Hz y una longitud de onda de 2 metros, su velocidad es de 340 m/s. ¿Cuál es el valor real de la velocidad en m/s?"

pasos:
  - "Aplicar la fórmula $v = \lambda \cdot f$."
  - "Calcular $2 \cdot 170 = 340$."

explicacion: |
  En este caso, el estudiante tenía razón. El error común es olvidar que la velocidad depende de la frecuencia y la longitud de onda simultáneamente; si cambias una sin ajustar la otra, la velocidad cambia.
```

### 4 — Identificación de variables
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["simbolos", "definiciones"]

respuesta: "longitud de onda"
tipo: mc

opciones_explicitas: ["frecuencia", "longitud de onda", "amplitud", "periodo"]

enunciado: "En la ecuación de la velocidad de propagación de una onda, el símbolo $\lambda$ representa la ___."

explicacion: |
  Es fundamental distinguir entre $\lambda$ (longitud de onda, distancia entre crestas consecutivas) y $A$ (amplitud, que es la altura de la cresta).
```

### 5 — El orden de los factores
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["despeje", "algebra"]

respuesta: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]
tipo: ordenar

opciones_explicitas: ["v = lambda * f", "f = v / lambda", "lambda = v / f"]

enunciado: "Ordena las fórmulas para despejar cada variable de la ecuación fundamental de la onda, partiendo de la velocidad."

pasos:
  - "La fórmula original es $v = \lambda \cdot f$."
  - "Para despejar $f$, pasamos $\lambda$ dividiendo: $f = v / \lambda$."
  - "Para despejar $\lambda$, pasamos $f$ dividiendo: $\lambda = v / f$."

explicacion: |
  El error común es intentar despejar de forma incorrecta (por ejemplo, intentar pasar una frecuencia restando). Recuerda que en la fórmula original, la frecuencia y la longitud de onda se están multiplicando.
```