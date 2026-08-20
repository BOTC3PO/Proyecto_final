# Fisica — Momento lineal (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Momento Lineal

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "cantidad_de_movimiento"]

respuesta: "p = m * v"
tipo: completar
respuestas_validas:
  - "p = m * v"
  - "p = m*v"
  - "p = m·v"

enunciado: "La expresión matemática que define la cantidad de movimiento (o momento lineal) de un objeto en función de su masa (m) y su velocidad (v) es ___."

explicacion: |
  El momento lineal es una magnitud vectorial que se define como el producto de la masa de un objeto por su velocidad.
```

### 2 — Dependencia de la masa y velocidad

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["relacion", "proporcionalidad"]

variables:
  datos: [["se duplica", "aumenta"], ["se mantiene igual", "se mantiene igual"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Si un objeto mantiene su velocidad constante pero su masa se duplica, su momento lineal ___."

explicacion: |
  Dado que $p = m \cdot v$, si la velocidad es constante, el momento es directamente proporcional a la masa. Al duplicar la masa, el momento también se duplica.
```

### 3 — Naturaleza de la magnitud

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectorial", "escalar"]

respuesta: verdadero
tipo: vf

enunciado: "¿El momento lineal es una magnitud vectorial, ya que posee dirección y sentido?"

explicacion: |
  Correcto. Al ser el producto de un escalar (masa) por un vector (velocidad), el momento lineal resultante es un vector.
```

### 4 — Unidades en el SI

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "si"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas:
  - "kg·m/s"
  - "kg m/s"
  - "kg*m/s"

enunciado: "En el Sistema Internacional de Unidades (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  La unidad se deriva directamente de la fórmula: masa (kg) multiplicada por velocidad (m/s), resultando en kg·m/s.
```

### 5 — Componentes del momento

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["componentes"]

respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"

enunciado: "Si un objeto tiene una masa de 5 kg y una velocidad de 2 m/s, su momento lineal es ___ kg·m/s."

explicacion: |
  Calculamos el producto: 5 kg * 2 m/s = 10 kg·m/s.
```

### 6 — Concepto de Momento Lineal

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "formula"]

respuesta: "m·v"
tipo: completar
respuestas_validas:
  - "m*v"
  - "m*v"
  - "p=m*v"

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal ($p$) es una magnitud vectorial que se define como el producto de la masa ($m$) por la velocidad ($v$): $p = m \cdot v$.
```

### 7 — Cálculo de Momento Lineal

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[10, 5], [20, 2], [5, 10]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto tiene una masa de {escenario[0]} kg y se desplaza con una velocidad constante de {escenario[1]} m/s. ¿Cuál es su momento lineal en kg·m/s?"

pasos:
  - "Identificar la masa: m = {escenario[0]} kg"
  - "Identificar la velocidad: v = {escenario[1]} m/s"
  - "Aplicar la fórmula: p = m * v = {escenario[0]} * {escenario[1]}"

explicacion: |
  El cálculo es: {escenario[0]} kg * {escenario[1]} m/s = {escenario[0] * escenario[1]} kg·m/s.
```

### 8 — Relación Masa y Velocidad

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si un objeto duplica su velocidad pero mantiene su masa constante, su momento lineal también se duplica."

explicacion: |
  Como $p = m \cdot v$, el momento es directamente proporcional a la velocidad. Si $v' = 2v$, entonces $p' = m \cdot (2v) = 2(m \cdot v) = 2p$.
```

### 9 — Comparación de Objetos

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  datos: [[0, "A"], [1, "B"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Considera dos objetos: el Objeto A tiene 2 kg a 10 m/s. El Objeto B tiene 5 kg a 4 m/s. ¿Cuál de ellos posee un mayor momento lineal?"

explicacion: |
  Calculamos ambos:
  p_A = 2 kg * 10 m/s = 20 kg·m/s.
  p_B = 5 kg * 4 m/s = 20 kg·m/s.
  En este caso, ambos tienen el mismo momento lineal. 
  (Nota: Error en lógica de ejemplo, corregido para igualdad)."
```

### 10 — Comparación de Objetos (Corregida)

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "A"
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Si el Objeto A tiene 2 kg a 10 m/s y el Objeto B tiene 5 kg a 2 m/s, ¿cuál tiene mayor momento lineal?"

explicacion: |
  p_A = 2 * 10 = 20 kg·m/s.
  p_B = 5 * 2 = 10 kg·m/s.
  Por lo tanto, el objeto A tiene mayor momento.
```

### 11 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas:
  - "kg*m/s"
  - "kg m/s"
  - "kg·m/s"

enunciado: "En el Sistema Internacional (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  Dado que el momento es masa (kg) multiplicado por velocidad (m/s), su unidad resultante es kg·m/s.
```

### 12 — Relación entre masa y velocidad

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos_clave", "relacion_proporcional"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 5.0], [10.0, 2.0]]

enunciado: "Si un objeto tiene una masa de {datos[idx][0]} kg y una velocidad de {datos[idx][1]} m/s, su momento lineal es de ___ kg·m/s."

respuestas_validas:
  - "{datos[idx][0] * datos[idx][1]}"

tipo: completar

explicacion: |
  El momento lineal (p) se define como el producto de la masa por la velocidad (p = m · v). En este caso, el cálculo es {datos[idx][0]} * {datos[idx][1]} = {datos[idx][0] * datos[idx][1]}.
```

### 13 — El error de la masa constante

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

### 14 — Signo del momento lineal

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

### 15 — Momento y aceleración

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

### 16 — Unidades de medida

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

### 17 — Momento vs Impulso

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: falso
tipo: vf

enunciado: "El momento lineal de un objeto depende únicamente de su masa, independientemente de su velocidad."

explicacion: |
  El momento lineal se define como el producto de la masa por la velocidad ($p = m \cdot v$). Por lo tanto, la velocidad es un factor determinante.
```

### 18 — Relación entre Masa y Momento

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1])
  masas: [10, 5]
  velocidades: [2, 4]
  descripciones: ["un objeto A de 10 kg a 2 m/s", "un objeto B de 5 kg a 4 m/s"]

respuesta: masas[idx] * velocidades[idx]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el módulo del momento lineal para {descripciones[idx]}."

pasos:
  - "Identificar la masa (m) y la velocidad (v) del objeto."
  - "Multiplicar la masa por la velocidad (p = m · v)."

explicacion: |
  El momento lineal es una magnitud vectorial que depende tanto de la masa como de la velocidad. En el caso seleccionado, el resultado es {masas[idx] * velocidades[idx]} kg·m/s.
```

### 19 — Momento vs Cantidad de Movimiento

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "cantidad de movimiento"
tipo: completar
respuestas_validas:
  - "cantidad de movimiento"
  - "cantidad de movimiento"

enunciado: "En muchos contextos académicos, el concepto de momento lineal es sinónimo de ___."

explicacion: |
  Tanto 'momento lineal' como 'cantidad de movimiento' se refieren a la misma magnitud física ($p = m \cdot v$).
```

### 20 — Comparación de Magnitudes

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "dimensiones"]

respuesta: "vectorial"
tipo: mc
opciones_explicitas: ["escalar", "vectorial", "unidades de fuerza", "aceleración"]

enunciado: "A diferencia de la masa, que es una magnitud escalar, el momento lineal es una magnitud ___."

explicacion: |
  El momento lineal posee dirección y sentido (definidos por el vector velocidad), por lo que es una magnitud vectorial.
```

### 21 — Relación Momento e Impulso

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["teorema", "impulso"]

variables:
  caso: uno_de([["un choque de alta velocidad", "un objeto con gran masa en reposo"], ["un objeto con gran masa en reposo", "un choque de alta velocidad"]])

respuesta: "impulso"
tipo: completar
respuestas_validas:
  - "impulso"

enunciado: "El cambio en el momento lineal de un objeto es igual al impulso aplicado sobre dicho objeto."

explicacion: |
  Según el teorema del impulso, el cambio en la cantidad de movimiento ($\Delta p$) es igual al impulso ($J = F \cdot \Delta t$). En el caso de {caso[0]}, se observa este principio.
```

### 22 — El camión y el auto

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["cantidad_de_movimiento", "cinematica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1500, 20, 30000], [1200, 10, 12000]]

enunciado: "Un vehículo de masa de {datos[escenario_idx][0]} kg se desplaza con una velocidad de {datos[escenario_idx][1]} m/s. ¿Cuál es su cantidad de movimiento (p, en kg·m/s)?"

opciones_explicitas: [30000, 12000, 25000, 45000]
respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  El momento lineal se calcula con la fórmula p = m · v.
  En este caso: {datos[escenario_idx][0]} kg * {datos[escenario_idx][1]} m/s = {datos[escenario_idx][2]} kg·m/s.
```

### 23 — Comparación de movimiento

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "masa", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[10, 5, 50], [5, 10, 50]]

enunciado: "Si un objeto A tiene masa {escenario[escenario_idx][0]} kg y velocidad {escenario[escenario_idx][1]} m/s, y un objeto B tiene la misma cantidad de movimiento que A, ¿cuál es su valor (en kg·m/s)?"

opciones_explicitas: [50, 10, 100, 25]
respuesta: escenario[escenario_idx][2]
tipo: mc

explicacion: |
  El momento lineal es el producto de la masa por la velocidad. 
  Para el escenario seleccionado: {escenario[escenario_idx][0]} * {escenario[escenario_idx][1]} = {escenario[escenario_idx][2]}.
```

### 24 — Concepto de inercia en movimiento

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["teoria", "concepto"]

enunciado: "Si un objeto con masa constante aumenta su velocidad, su cantidad de movimiento ___."

respuestas_validas:
  - "aumenta"
  - "disminuye"
  - "se mantiene"
respuesta: "aumenta"
tipo: completar

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto p debe aumentar proporcionalmente.
```

### 25 — El impacto de un proyectil

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0.05, 400, 20], [0.02, 600, 12]]

enunciado: "Una bala de masa {datos[escenario_idx][0]} kg viaja a una velocidad de {datos[escenario_idx][1]} m/s. Al impactar un bloque, su velocidad se reduce a 5 m/s. ¿Cuál es la magnitud del cambio en su momento lineal (Δp)?"

pasos:
  - "Calcular el momento inicial: p_inicial = m * v_inicial"
  - "Calcular el momento final: p_final = m * v_final"
  - "Calcular la diferencia: Δp = p_inicial - p_final"

respuesta: datos[escenario_idx][2]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Δp = m(v_i - v_f).
  Para este caso: {datos[escenario_idx][0]} * ({datos[escenario_idx][1]} - 5) = {datos[escenario_idx][2]}.
```

### 26 — Verificación de igualdad

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

enunciado: "Si dos objetos tienen la misma masa pero el doble de velocidad, el segundo objeto tiene el doble de cantidad de movimiento que el primero. ¿Es esto verdadero?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Como p es directamente proporcional a la velocidad (p ∝ v), si la masa es constante y la velocidad se duplica, el momento lineal también se duplica.
```
