# Examen jefe — [PENDIENTE #745]

> Logro #745. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **130 preguntas totales** en 5/5 secciones.

---

## Sección: momento-lineal (26 preguntas)

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

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "formula"]

respuesta: "m·v"
tipo: completar
respuestas_validas:
  - "m·v"
  - "m*v"
  - "p=m*v"

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal ($p$) es una magnitud vectorial que se define como el producto de la masa ($m$) por la velocidad ($v$): $p = m \cdot v$.
```

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

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

respuesta: verdadero
tipo: vf
enunciado: "Si un objeto duplica su velocidad pero mantiene su masa constante, su momento lineal también se duplica."

explicacion: |
  Como $p = m \cdot v$, el momento es directamente proporcional a la velocidad. Si $v' = 2v$, entonces $p' = m \cdot (2v) = 2(m \cdot v) = 2p$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1])
  b_vel: [2, 8]
  ganador: ["A", "B"]

respuesta: ganador[idx]
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Considera dos objetos: el Objeto A tiene 2 kg a 10 m/s. El Objeto B tiene 5 kg a {b_vel[idx]} m/s. ¿Cuál de ellos posee un mayor momento lineal?"

explicacion: |
  Calculamos ambos:
  p_A = 2 kg * 10 m/s = 20 kg·m/s.
  p_B = 5 kg * {b_vel[idx]} m/s = {5 * b_vel[idx]} kg·m/s.
  Por lo tanto, el objeto con mayor momento lineal es el {ganador[idx]}.
```

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

respuesta: datos[idx][0] * datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El momento lineal (p) se define como el producto de la masa por la velocidad (p = m · v). En este caso, el cálculo es {datos[idx][0]} * {datos[idx][1]} = {datos[idx][0] * datos[idx][1]}.
```

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

enunciado: "El cambio en el momento lineal de un objeto es igual al ___ aplicado sobre dicho objeto."

explicacion: |
  Según el teorema del impulso, el cambio en la cantidad de movimiento ($\Delta p$) es igual al impulso ($J = F \cdot \Delta t$). En el caso de {caso[0]}, se observa este principio.
```

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

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["teoria", "concepto"]

enunciado: "Si un objeto con masa constante aumenta su velocidad, su cantidad de movimiento ___."

respuestas_validas:
  - "aumenta"
respuesta: "aumenta"
tipo: completar

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto p debe aumentar proporcionalmente.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0.05, 400], [0.02, 600]]

enunciado: "Una bala de masa {datos[escenario_idx][0]} kg viaja a una velocidad de {datos[escenario_idx][1]} m/s. Al impactar un bloque, su velocidad se reduce a 5 m/s. ¿Cuál es la magnitud del cambio en su momento lineal (Δp)?"

pasos:
  - "Calcular el momento inicial: p_inicial = m * v_inicial"
  - "Calcular el momento final: p_final = m * v_final"
  - "Calcular la diferencia: Δp = p_inicial - p_final"

respuesta: datos[escenario_idx][0] * (datos[escenario_idx][1] - 5)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Δp = m(v_i - v_f).
  Para este caso: {datos[escenario_idx][0]} * ({datos[escenario_idx][1]} - 5) = {datos[escenario_idx][0] * (datos[escenario_idx][1] - 5)}.
```

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

## Sección: movimiento-circular-y-fuerza-centripeta (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "vocabulario"]

enunciado: "¿Qué caracteriza al movimiento circular uniforme (MCU)?"
tipo: mc
opciones_explicitas:
  - "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"
  - "Un objeto recorre una circunferencia acelerando cada vez más rápido"
  - "Un objeto se mueve en línea recta a velocidad constante"
respuesta: "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"

explicacion: |
  La rapidez no cambia, pero la dirección de la velocidad sí — por eso
  igual hay aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "En el movimiento circular uniforme, la velocidad (como vector, con magnitud y dirección) es constante."

explicacion: |
  La magnitud no cambia, pero la dirección sí (siempre tangente a la
  circunferencia) — por eso el vector velocidad no es constante.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "En el movimiento circular uniforme, la rapidez (la magnitud de la velocidad, sin importar la dirección) es constante."

explicacion: |
  Es justamente lo que lo hace "uniforme" — la palabra se refiere a la
  rapidez, no a la velocidad completa.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: el tiempo que tarda un objeto en dar una vuelta completa se llama ___ (símbolo T)."
respuestas_validas:
  - "período"
  - "periodo"

explicacion: |
  Se mide en segundos.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de vueltas por segundo, f=1/T, se llama ___ (unidad Hz)."
respuestas_validas:
  - "frecuencia"

explicacion: |
  Frecuencia y período son inversos entre sí.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(1 / T, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "Hz"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su frecuencia?"

pasos:
  - "f = 1 / T = 1 / {T} = {redondear(1 / T, 3)} Hz"

explicacion: |
  f y T son inversos: a mayor período, menor frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  f: uno_de([0.1, 0.2, 0.25, 0.5, 2, 4])

respuesta: redondear(1 / f, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "s"

enunciado: "Un objeto en MCU gira con una frecuencia de {f} Hz. ¿Cuál es su período?"

pasos:
  - "T = 1 / f = 1 / {f} = {redondear(1 / f, 3)} s"

explicacion: |
  T y f son inversos: a mayor frecuencia, menor período.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi / T, 3)
tipo: input
tolerancia_abs: 0.02
unidad: "rad/s"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su velocidad angular ω?"

pasos:
  - "ω = 2π / T = 2×π / {T} = {redondear(2 * pi / T, 3)} rad/s"

explicacion: |
  Una vuelta completa equivale a un ángulo de 2π radianes.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  omega: uno_de([1, 2, 3, 4, 5])
  r: random(1, 5)

respuesta: omega * r
tipo: input
unidad: "m/s"

enunciado: "Un objeto gira con velocidad angular ω={omega} rad/s en un círculo de radio {r} m. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = ω × r = {omega} × {r} = {omega * r} m/s"

explicacion: |
  La velocidad tangencial es directamente proporcional al radio, para
  una misma velocidad angular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  r: random(1, 5)
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi * r / T, 2)
tipo: input
tolerancia_abs: 0.05
unidad: "m/s"

enunciado: "Un objeto recorre un círculo de radio {r} m, completando una vuelta cada {T} s. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = 2π×r / T = 2×π×{r} / {T} = {redondear(2 * pi * r / T, 2)} m/s"

explicacion: |
  En una vuelta recorre el perímetro de la circunferencia (2π×r), en
  un tiempo T.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s²"

enunciado: "Un objeto en MCU tiene una velocidad tangencial de {v} m/s en un círculo de radio {r} m. ¿Cuál es su aceleración centrípeta?"

pasos:
  - "a_c = v² / r = {v}² / {r} = {redondear(v ^ 2 / r, 2)} m/s²"

explicacion: |
  Apunta siempre hacia el centro del círculo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 10)
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N"

enunciado: "Un objeto de {m} kg gira con velocidad tangencial {v} m/s en un círculo de radio {r} m. ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Es la fuerza neta (real) que debe apuntar hacia el centro para
  mantener esa trayectoria circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu"]

enunciado: "¿Hacia dónde apunta la aceleración centrípeta en cada instante?"
tipo: mc
opciones_explicitas:
  - "Hacia el centro del círculo"
  - "En la misma dirección que la velocidad"
  - "Hacia afuera del círculo"
respuesta: "Hacia el centro del círculo"

explicacion: |
  Es lo que constantemente "curva" la trayectoria, cambiando la
  dirección de la velocidad sin cambiar su magnitud.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

enunciado: "¿Qué es exactamente la 'fuerza centrípeta'?"
tipo: mc
opciones_explicitas:
  - "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"
  - "Un tipo de fuerza física distinto de la gravedad, la tensión o el rozamiento"
  - "Una fuerza que sólo existe en el espacio, sin gravedad"
respuesta: "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"

explicacion: |
  No se suma a las demás fuerzas — es cómo se llama a la resultante de
  las fuerzas reales que ya actúan, cuando el objeto se mueve en
  círculo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un auto que toma una curva a velocidad constante, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "El rozamiento entre las ruedas y el asfalto"
  - "El peso del auto"
  - "La fuerza del motor"
respuesta: "El rozamiento entre las ruedas y el asfalto"

explicacion: |
  Si el asfalto está mojado o helado (rozamiento muy bajo), el auto no
  logra la fuerza centrípeta necesaria y se sale de la curva.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un satélite en órbita circular alrededor de la Tierra, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La gravedad de la Tierra"
  - "El rozamiento con la atmósfera"
  - "Los motores del satélite, funcionando constantemente"
respuesta: "La gravedad de la Tierra"

explicacion: |
  Es la misma gravedad de `../gravitacion-universal/`, actuando ahora
  como la fuerza que mantiene la órbita circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "Al hacer girar una piedra atada a una cuerda, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La tensión de la cuerda"
  - "El peso de la piedra"
  - "El rozamiento del aire"
respuesta: "La tensión de la cuerda"

explicacion: |
  La cuerda tira de la piedra hacia el centro, todo el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "Si se corta la cuerda de una piedra que gira, la piedra sigue moviéndose en círculo por inercia."

explicacion: |
  Sin la tensión (la fuerza centrípeta), ya no hay nada que la
  desvíe hacia el centro — sale disparada en línea recta, tangente al
  punto donde se cortó la cuerda (primera ley de Newton).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza centrípeta, sabiendo la masa, el radio y el período."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"
  - "Calcular la velocidad tangencial: v = 2π×r / T"
  - "Calcular la aceleración centrípeta: a_c = v² / r"
respuesta_orden: ["Calcular la velocidad tangencial: v = 2π×r / T", "Calcular la aceleración centrípeta: a_c = v² / r", "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"]
explicacion: |
  Cada paso usa el resultado del anterior.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si la velocidad tangencial se mantiene igual pero el radio del círculo es mayor, la aceleración centrípeta es menor."

explicacion: |
  a_c = v²/r: con v fijo, a mayor r, menor a_c (relación inversa).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si el radio se mantiene igual, duplicar la velocidad tangencial más que duplica la aceleración centrípeta (la cuadruplica)."

explicacion: |
  a_c = v²/r: la velocidad entra al cuadrado, así que duplicarla
  multiplica a_c por 2² = 4.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 5)
  r: random(1, 4)
  T: uno_de([2, 4, 5])
  v: redondear(2 * pi * r / T, 3)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.3
unidad: "N"

enunciado: "Un objeto de {m} kg gira en un círculo de radio {r} m, completando una vuelta cada {T} s (su velocidad tangencial es v={v} m/s). ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "v = 2π×r / T = {v} m/s"
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Combina las dos fórmulas: primero la velocidad tangencial a partir
  del período, después la fuerza centrípeta a partir de esa velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Por qué las curvas de las rutas y autódromos suelen tener 'peralte' (una inclinación hacia el centro de la curva)?"
tipo: mc
opciones_explicitas:
  - "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"
  - "Para que los autos vayan más lento"
  - "El peralte no tiene relación con la física del movimiento circular"
respuesta: "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"

explicacion: |
  Con la pista inclinada, la componente del peso hacia el centro suma
  a la fuerza centrípeta, permitiendo tomar la curva a más velocidad de
  forma segura.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Cómo separa el agua de la ropa una centrifugadora de lavarropas?"
tipo: mc
opciones_explicitas:
  - "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"
  - "El agua es atraída hacia el centro por gravedad"
  - "El calor del motor evapora el agua"
respuesta: "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"

explicacion: |
  Es la misma idea que la piedra sin cuerda: sin suficiente fuerza
  hacia el centro, un objeto sigue en línea recta (tangente) en vez de
  la trayectoria circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el movimiento circular y la fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"
  - "Sólo aplica a objetos que giran atados con una cuerda"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"

explicacion: |
  Desde un satélite hasta una curva de ruta, la misma matemática
  (T, ω, v, a_c, F_c) describe cualquier movimiento circular.
```

## Sección: mru (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["posicion"]

variables:
  x0: random(0, 50)
  v: random(10, 100)
  t: random(1, 10)

respuesta: x0 + v * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene x(t) = {x0} + {v}t (km, con t en horas). ¿Dónde está en t={t}?"

explicacion: |
  x({t}) = {x0} + {v}×{t} = {x0 + v * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["posicion"]

variables:
  v: random(10, 100)
  t: random(1, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto parte del origen (x₀=0) con v={v} km/h. ¿Dónde está en t={t} horas?"

explicacion: |
  x({t}) = {v}×{t} = {v * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["pendiente"]

variables:
  x0: random(0, 30)
  v: random(10, 100)

respuesta: v
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v}t. ¿Cuál es la velocidad del objeto?"

explicacion: |
  La velocidad es la pendiente de x(t) — el coeficiente que multiplica
  a t.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  x0: random(0, 50)
  v: random(10, 100)

respuesta: x0
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v}t. ¿Cuál es la posición inicial (en t=0)?"

explicacion: |
  x(0) = {x0} — la ordenada al origen de la función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["pendiente"]

variables:
  t1: random(1, 5)
  x1: random(0, 50)
  v: random(10, 80)
  dt: random(1, 5)
  t2: t1 + dt
  x2: x1 + v * dt

respuesta: (x2 - x1) / (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto está en x={x1} km en t={t1} h, y en x={x2} km en t={t2} h. ¿Cuál es su velocidad?"

explicacion: |
  v = (x₂−x₁)/(t₂−t₁), la misma fórmula de pendiente de
  `../../matematica/funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["area"]

variables:
  v: random(20, 120)
  t: random(1, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "En un gráfico v-t, la velocidad es constante en {v} km/h durante {t} horas. ¿Cuál es el área bajo esa recta (la distancia recorrida)?"

explicacion: |
  Área de un rectángulo: base (tiempo) × altura (velocidad).
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["area"]

variables:
  v: random(20, 100)
  t1: random(1, 5)
  t2: random(6, 15)

respuesta: v * (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Con velocidad constante {v} km/h, ¿qué distancia se recorre entre t={t1} y t={t2} horas?"

explicacion: |
  Distancia = v×(t₂−t₁) = {v}×{t2 - t1} = {v * (t2 - t1)}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  v1: random(60, 100)
  v2: random(30, 59)
  x0_2: random(10, 100)
  t_encuentro: random(1, 5)
  x0_1: v2 * t_encuentro + x0_2 - v1 * t_encuentro

respuesta: t_encuentro
tipo: input
tolerancia_abs: 0

enunciado: "Auto A: x(t) = {x0_1} + {v1}t. Auto B: x(t) = {x0_2} + {v2}t. ¿En qué instante t se encuentran?"

pasos:
  - "Igualar: {x0_1}+{v1}t = {x0_2}+{v2}t → ({v1}−{v2})t = {x0_2}−{x0_1}"
  - "t = {t_encuentro}"

explicacion: |
  Es el mismo procedimiento de
  `../../matematica/sistemas-dos-ecuaciones/`, con nombres de contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  v1: random(60, 100)
  v2: random(30, 59)
  x0_2: random(10, 100)
  t_encuentro: random(1, 5)
  x0_1: v2 * t_encuentro + x0_2 - v1 * t_encuentro

respuesta: x0_1 + v1 * t_encuentro
tipo: input
tolerancia_abs: 0

enunciado: "Auto A: x(t) = {x0_1} + {v1}t. Auto B: x(t) = {x0_2} + {v2}t. Se encuentran en t={t_encuentro}. ¿En qué posición?"

explicacion: |
  Se evalúa cualquiera de las dos funciones en t={t_encuentro} — las dos
  tienen que dar el mismo resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de posición vs. tiempo (x-t) de un MRU es siempre una recta."

explicacion: |
  Porque x(t)=x₀+vt es una función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de velocidad vs. tiempo (v-t) de un MRU es una recta horizontal."

explicacion: |
  La velocidad no cambia con el tiempo en un MRU.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico x-t, cuanto más inclinada es la recta, mayor es la velocidad del objeto."

explicacion: |
  La pendiente ES la velocidad — más inclinación, más pendiente, más
  rápido.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una velocidad negativa en MRU significa que el objeto se mueve en sentido contrario al que se tomó como positivo, no que 'va hacia atrás en el tiempo'."

explicacion: |
  El signo de v indica dirección, no una imposibilidad física.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos móviles tienen exactamente la misma velocidad (mismas pendientes en x-t), nunca se encuentran (salvo que ya arrancaran juntos)."

explicacion: |
  Dos rectas paralelas no se cruzan — mismo concepto ya visto en
  `../../matematica/funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  v: random(10, 100)
  t_sol: random(1, 10)
  d: v * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto viaja a {v} km/h. ¿Cuánto tiempo tarda en recorrer {d} km?"

explicacion: |
  t = d/v = {d}/{v} = {t_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x0: random(0, 50)
  v: random(10, 100)
  t: random(1, 10)
  real: x0 + v * t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {x0} + {v}t. ¿Es correcto que x({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea de 'área bajo el gráfico v-t es la distancia recorrida' también vale cuando la velocidad no es constante — ahí el área ya no es un simple rectángulo."

explicacion: |
  Es el adelanto directo de `../../matematica/integral/`: el área bajo
  cualquier curva de velocidad da la distancia, constante o no.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema", "problema"]

variables:
  distancia_total: random(100, 500)
  v1: random(20, 60)
  v2: random(20, 60)

respuesta: distancia_total / (v1 + v2)
tipo: input
tolerancia_abs: 0

enunciado: "Dos autos parten al mismo tiempo, uno hacia el otro, desde puntos separados por {distancia_total} km, a {v1} y {v2} km/h. ¿En cuántas horas se cruzan?"

pasos:
  - "Juntos cubren {v1}+{v2}={v1 + v2} km por hora — se cruzan cuando la suma de lo recorrido llega a {distancia_total}"

explicacion: |
  Cuando van en sentidos opuestos, las velocidades se suman para saber
  cuánto se acortan la distancia entre los dos por hora.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRU, la aceleración es siempre 0 (la velocidad no cambia)."

explicacion: |
  Es la definición misma de "uniforme": velocidad constante, sin
  aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque x(t)=x₀+vt matemáticamente tiene dominio en todos los reales, en un problema físico real el dominio suele restringirse a t≥0 (no tiene sentido un tiempo negativo)."

explicacion: |
  El modelo matemático es más general que la situación física que
  describe — hay que interpretar el resultado con sentido común.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  d: random(100, 400)
  t: random(2, 8)

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje de {d} km (con paradas incluidas) tardó {t} horas en total. ¿Cuál fue la velocidad media?"

explicacion: |
  La velocidad media usa distancia y tiempo TOTALES, aunque el
  movimiento real no haya sido a velocidad constante en cada tramo.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  t1: random(1, 5)
  x1: random(0, 50)
  v: random(10, 80)
  dt: random(1, 5)
  t2: t1 + dt
  x2: x1 + v * dt
  error: uno_de([0, 0, 1, -1])
  propuesto: v + error

respuesta: (propuesto == v)
tipo: vf

enunciado: "Un objeto está en x={x1} en t={t1}, y en x={x2} en t={t2}. ¿Es correcto que su velocidad sea {propuesto}?"

explicacion: |
  La velocidad correcta es (x₂−x₁)/(t₂−t₁) = {v}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  v: random(10, 50)
  x0: random(10, 100)

respuesta: -x0 / v
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} − {v}t (un objeto que se acerca al origen). ¿En qué instante t pasa por x=0?"

explicacion: |
  Se despeja t de {x0} − {v}t = 0 → t = {x0}/{v}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema", "problema"]

variables:
  v_lento: random(10, 30)
  v_rapido: random(40, 80)
  cabeza: random(10, 50)

respuesta: cabeza / (v_rapido - v_lento)
tipo: input
tolerancia_abs: 0

enunciado: "Un ciclista a {v_lento} km/h lleva {cabeza} km de ventaja. Un auto sale a perseguirlo a {v_rapido} km/h. ¿En cuántas horas lo alcanza?"

pasos:
  - "El auto gana {v_rapido}−{v_lento}={v_rapido - v_lento} km por hora de diferencia"

explicacion: |
  Se plantea igualando las dos posiciones, igual que un encuentro común.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Decir 'velocidad constante' y decir 'aceleración cero' describen exactamente la misma situación en cinemática."

explicacion: |
  Son dos formas de decir lo mismo — prepara el terreno para
  `../mruv/`, donde la aceleración deja de ser 0.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  v1: random(20, 60)
  t1: random(1, 5)
  v2: random(20, 60)
  t2: random(1, 5)

respuesta: v1 * t1 + v2 * t2
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje tiene un primer tramo a {v1} km/h durante {t1} h, y un segundo tramo a {v2} km/h durante {t2} h. ¿Cuál es la distancia total?"

explicacion: |
  Cada tramo es un MRU independiente — se suman las distancias
  parciales.
```

## Sección: ojo-humano-instrumento-optico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "optica"]

respuesta: "lente convergente"
tipo: completar
respuestas_validas:
  - "lente convergente"

enunciado: "El cristalino es una estructura del ojo que actúa como una ___ para enfocar la luz en la retina."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "imagen"]

respuesta: "real e invertida"
tipo: completar
respuestas_validas:
  - "real e invertida"

enunciado: "La imagen que se forma sobre la ___ es de naturaleza ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["fisiologia"]

respuesta: verdadero
tipo: vf
enunciado: "¿El cristalino cambia su distancia focal para permitir la acomodación visual?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["secuencia"]

respuesta_orden: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]
tipo: ordenar
opciones_explicitas: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]

enunciado: "Ordene el camino de la luz desde el exterior hasta la detección visual:"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia"]

respuesta: "controlar la cantidad de luz"
tipo: completar
respuestas_validas:
  - "controlar la cantidad de luz"

enunciado: "La función principal del iris es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "miopia"]

respuesta: "divergente"
tipo: completar
respuestas_validas:
  - "divergente"

enunciado: "En un ojo con miopía, la imagen se forma antes de la retina, por lo que se requiere una lente ___ para corregirlo."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "hipermetropia"]

respuesta: "convergente"
tipo: completar
respuestas_validas:
  - "convergente"

enunciado: "Para corregir la hipermetropía, donde el punto focal está detrás de la retina, se utiliza una lente ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "delante"
tipo: completar
respuestas_validas:
  - "delante"

enunciado: "En un ojo miope, el punto focal de los rayos paralelos se encuentra ___ de la retina."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "cilíndrica"
tipo: completar
respuestas_validas:
  - "cilíndrica"

enunciado: "El astigmatismo se debe a una curvatura irregular de la córnea o el cristalino y se corrige con lentes ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "miopía"
tipo: mc
opciones_explicitas: ["miopía", "hipermetropía", "astigmatismo", "presbicia"]

enunciado: "¿Qué defecto impide ver con claridad los objetos lejanos?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f: 25.0
  d: 100.0

respuesta: 0.3333
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un objeto se coloca a {d} cm de una lente con una distancia focal de {f} cm, ¿cuál es la distancia de la imagen en metros? (Use la fórmula 1/f = 1/d + 1/d')"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_m: 0.5

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcule la potencia (en dioptrías) de una lente cuya distancia focal es {f_m} metros."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_ojo: 0.02
  d_obj: 0.5

respuesta: 0.02083
tipo: completar
tolerancia_abs: 0.001

enunciado: "Un ojo tiene una distancia focal de {f_ojo} m. Si un objeto está a {d_obj} m, ¿a qué distancia de la lente se forma la imagen? (Calcule en metros)"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  h_obj: 2.0
  h_img: 10.0

respuesta: 5.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si el tamaño de un objeto es {h_obj} cm y el tamaño de su imagen es {h_img} cm, ¿cuál es el aumento lateral?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  p_correcta: 2.0
  p_incorrecta: -2.0

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Si una lente tiene una potencia de +2.0 dioptrías, ¿es una lente ___?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf
enunciado: "¿La luz debe refractarse al pasar del aire al córnea?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf
enunciado: "¿La retina es la parte del ojo encargada de enfocar la luz mediante la refracción?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más pequeña"
tipo: completar
respuestas_validas:
  - "pupila más pequeña"

enunciado: "En condiciones de mucha luz, la pupila experimenta miosis, lo que significa que la pupila es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más grande"
tipo: completar
respuestas_validas:
  - "pupila más grande"

enunciado: "La midriasis es la dilatación de la pupila, es decir, la ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: "distancia máxima"
tipo: completar
respuestas_validas:
  - "distancia máxima"

enunciado: "El punto remoto se define como la ___ a la que un objeto puede estar para ser visto con nitidez por un ojo con un defecto."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0,1])
  tipo_lente: uno_de(["divergente", "convergente"])
  lente_texto: uno_de(["divergente", "convergente"])

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente"]

enunciado: "Un paciente tiene miopía. El médico le receta una lente ___ para corregir su visión."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Para un paciente con hipermetropía, el tipo de lente necesario es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "se desvía"
tipo: completar
respuestas_validas:
  - "se desvía"

enunciado: "Cuando la luz pasa del aire al cristalino, su velocidad cambia y, por lo tanto, el rayo ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "real"
tipo: completar
respuestas_validas:
  - "real"

enunciado: "Si la imagen se puede proyectar sobre una pantalla, decimos que la imagen es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "presbicia"
tipo: completar
respuestas_validas:
  - "presbicia"
  - "miopía"
  - "astigmatismo"

enunciado: "La pérdida de la capacidad de acomodación del cristalino debido a la edad se conoce como ___."
```

## Sección: mruv (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t: random(1, 10)

respuesta: v0 + a * t
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {v0} + {a}t (m/s). ¿Cuánto vale v({t})?"

explicacion: |
  v({t}) = {v0} + {a}×{t} = {v0 + a * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["velocidad", "signos"]

variables:
  v0: random(30, 60)
  a: random(1, 5)
  t: random(1, 8)

respuesta: v0 - a * t
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {v0} − {a}t (m/s, frenando). ¿Cuánto vale v({t})?"

explicacion: |
  v({t}) = {v0} − {a}×{t} = {v0 - a * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["posicion"]

variables:
  x0: random(0, 20)
  v0: random(0, 15)
  a: random(2, 6) * 2
  t: random(1, 6)

respuesta: x0 + v0 * t + (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v0}t + ½×{a}t² (m). ¿Cuánto vale x({t})?"

pasos:
  - "x({t}) = {x0} + {v0}×{t} + ({a}×{t}²)/2 = {x0 + v0 * t + (a * t ^ 2) / 2}"

explicacion: |
  Se evalúan los tres términos y se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["posicion"]

variables:
  a: random(2, 8) * 2
  t: random(1, 8)

respuesta: (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto parte del reposo (v₀=0, x₀=0) con aceleración {a} m/s². ¿Cuánto recorrió en t={t} s?"

explicacion: |
  x(t) = ½at² = {a}×{t}²/2 = {(a * t ^ 2) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["sin_tiempo"]

variables:
  v0: random(0, 10)
  a: random(1, 5)
  k: random(1, 5)
  v_final: v0 + 2 * a * k
  dx: k * (v_final + v0)

respuesta: v_final
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². Después de recorrer {dx} m, ¿cuál es la velocidad final? (usando v²=v₀²+2aΔx)"

pasos:
  - "v² = {v0}² + 2×{a}×{dx} = {v0 ^ 2 + 2 * a * dx}"
  - "v = √{v0 ^ 2 + 2 * a * dx} = {v_final}"

explicacion: |
  Se usa la fórmula sin tiempo cuando no hace falta (o no se conoce) t.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["sin_tiempo"]

variables:
  v0: random(0, 10)
  a: random(1, 6)
  dx_sol: random(5, 20)

respuesta: dx_sol
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². La velocidad final da un número que no hace falta calcular a mano — sabiendo que v²−v₀² = {2 * a * dx_sol}, ¿cuánto vale Δx?"

pasos:
  - "Δx = (v²−v₀²)/(2a) = {2 * a * dx_sol}/{2 * a} = {dx_sol}"

explicacion: |
  Se despeja Δx de la ecuación sin tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  v0: random(0, 20)
  a_sol: random(1, 10)
  t: random(1, 8)
  v: v0 + a_sol * t

respuesta: (v - v0) / t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto pasa de v₀={v0} m/s a v={v} m/s en t={t} s. ¿Cuál es su aceleración?"

explicacion: |
  a = (v−v₀)/t = ({v}−{v0})/{t} = {(v - v0) / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["tiempo"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t_sol: random(1, 10)
  v: v0 + a * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². ¿Cuánto tiempo tarda en llegar a v={v} m/s?"

explicacion: |
  t = (v−v₀)/a = {t_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico v-t de un MRUV es una recta (no horizontal, salvo que a=0)."

explicacion: |
  v(t)=v₀+at es una función lineal de t, con pendiente a.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico x-t de un MRUV es una parábola."

explicacion: |
  x(t)=x₀+v₀t+½at² es una función cuadrática de t.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el gráfico v-t, la pendiente de la recta es exactamente la aceleración."

explicacion: |
  Mismo principio que en x-t con MRU: la pendiente es la tasa de
  cambio — acá, de la velocidad.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  a: random(2, 10)
  t: random(1, 8)

respuesta: (a * t ^ 2) / 2
tipo: mc
opciones_explicitas:
  - (a * t ^ 2) / 2
  - a * t ^ 2
  - (a * t) / 2

enunciado: "Un objeto parte del reposo con aceleración {a} m/s². ¿Cuánto recorrió en t={t} s?"

explicacion: |
  x=½at² — olvidar el ½ (o el cuadrado) es el error más común de la
  fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En un MRUV, la fórmula v=d/t (de MRU) sigue dando la velocidad en cualquier instante."

explicacion: |
  v=d/t asume velocidad CONSTANTE — en MRUV la velocidad cambia, así que
  hacen falta las fórmulas específicas de MRUV.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t: random(1, 10)
  real: v0 + a * t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "v(t) = {v0} + {a}t. ¿Es correcto que v({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  t: random(10, 30)

respuesta: (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un avión acelera desde el reposo a {a} m/s² durante {t} s antes de despegar. ¿Qué distancia recorrió en la pista?"

explicacion: |
  x=½at², partiendo del reposo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "v₀ (velocidad inicial) y v(t) (velocidad en un instante t cualquiera) son siempre el mismo número."

explicacion: |
  Sólo coinciden en t=0 — en cualquier otro instante, difieren según la
  aceleración acumulada.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una aceleración negativa no significa automáticamente que el objeto está frenando — depende del signo de la velocidad."

explicacion: |
  Si v es negativa y a también, el objeto en realidad acelera (cada vez
  más rápido) en sentido negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  v0: random(0, 15)
  a: random(1, 8)
  t: random(1, 8)
  v: v0 + a * t
  dx: v0 * t + (a * t ^ 2) / 2

respuesta: ((v ^ 2) == (v0 ^ 2 + 2 * a * dx))
tipo: vf

enunciado: "v₀={v0}, a={a}, t={t}. Con v={v} y Δx={dx} (calculados con las otras dos fórmulas), ¿se cumple v²=v₀²+2aΔx?"

explicacion: |
  Las tres fórmulas de MRUV son consistentes entre sí — cualquier par
  de ellas tiene que dar el mismo resultado que la tercera.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  t: random(1, 8)

respuesta: 10 * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo con aceleración g=10 m/s² (caída libre). ¿Cuál es su velocidad después de {t} s?"

explicacion: |
  v=at, con v₀=0 — el caso más simple de caída libre, antes de ver
  `../tiro-vertical/` con velocidad inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La unidad de la aceleración en el sistema SI es m/s² (metros por segundo, por segundo)."

explicacion: |
  Es "cuánto cambia la velocidad (m/s) por cada segundo que pasa" — de
  ahí la unidad al cuadrado en el denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  v0_sol: random(0, 20)
  a: random(1, 10)
  t: random(1, 8)
  v: v0_sol + a * t

respuesta: v0_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto con aceleración {a} m/s² llega a v={v} m/s después de {t} s. ¿Cuál era su velocidad inicial?"

explicacion: |
  v₀ = v−at = {v}−{a}×{t} = {v0_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si en las fórmulas de MRUV se pone a=0, se recuperan exactamente las fórmulas de MRU."

explicacion: |
  v(t)=v₀+0·t=v₀ (constante), x(t)=x₀+v₀t+0=x₀+v₀t — el MRU es el caso
  particular de MRUV sin aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  n: random(1, 5)
  v0: 2 * a * n
  dx: 2 * a * n ^ 2

respuesta: dx
tipo: input
tolerancia_abs: 0

enunciado: "Un auto frena desde v₀={v0} m/s con desaceleración {a} m/s² hasta detenerse (v=0). ¿Qué distancia recorre hasta parar?"

pasos:
  - "0 = v₀² − 2aΔx → Δx = v₀²/(2a)"

explicacion: |
  Es la misma cuenta que se profundiza en
  `../../vida-cotidiana/distancia-frenado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el instante en que v=0 dentro de un MRUV, la aceleración puede seguir siendo distinta de 0 (por ejemplo, en el punto más alto de un tiro vertical)."

explicacion: |
  v=0 es sólo un instante; a sigue actuando (la gravedad no se apaga en
  el punto más alto) — adelanto de `../tiro-vertical/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x0: random(0, 20)
  v0: random(0, 15)
  a: random(2, 6) * 2
  t: random(1, 6)
  real: x0 + v0 * t + (a * t ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {x0} + {v0}t + ½×{a}t². ¿Es correcto que x({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "v² = v₀² + 2aΔx"
tipo: mc
opciones_explicitas:
  - "v² = v₀² + 2aΔx"
  - "v = v₀ + at"
  - "x = x₀ + v₀t + ½at²"

enunciado: "Un problema da v₀, a y Δx, y pide la velocidad final — sin dar el tiempo. ¿Qué fórmula conviene usar?"

explicacion: |
  Es la única de las tres que no necesita el tiempo como dato.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  v0: random(20, 60)
  a: random(2, 10)

respuesta: v0 / a
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto con v₀={v0} m/s frena con desaceleración {a} m/s². ¿Cuánto tarda en detenerse (v=0)?"

explicacion: |
  0 = v₀ − at → t = v₀/a.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para encontrar en qué instante un objeto en MRUV pasa por una posición dada, hay que resolver una ecuación cuadrática en t."

explicacion: |
  x(t)=x₀+v₀t+½at² es cuadrática en t — despejar t de una posición dada
  usa la fórmula resolvente de `../../matematica/ecuacion-cuadratica/`.
```

