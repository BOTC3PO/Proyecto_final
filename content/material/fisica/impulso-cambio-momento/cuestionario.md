# Fisica — Impulso cambio momento (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Impulso

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "tiempo"]

respuesta: "J"
tipo: "completar"
respuestas_validas:
  - "J"
  - "impulso"

enunciado: "El producto de la fuerza aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa se denomina ___."

explicacion: |
  El impulso (J) se define como el producto de la fuerza constante por el tiempo de aplicación: J = F · Δt.
```

### 2 — Relación con el Momento Lineal

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teorema_impulso_momento"]

tipo: vf
respuesta: verdadero

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual al cambio en su momento lineal (Δp)."

explicacion: |
  El teorema establece que J = Δp, lo que significa que el impulso aplicado es igual a la variación de la cantidad de movimiento.
```

### 3 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "SI"]

variables:
  opciones_correctas: ["N·s", "kg·m/s"]
  opciones_incorrectas: ["N/s"]
  opciones_validas: ["N·s", "kg·m/s", "N/s"]

respuesta: "N·s"
tipo: "mc"
opciones_explicitas: ["N·s", "kg·m/s", "N/s"]

enunciado: "En el Sistema Internacional, la unidad del impulso es ___ (nota: ambas son equivalentes, elige la que representa la definición directa de F·Δt)."

explicacion: |
  Tanto N·s como kg·m/s son unidades válidas para el impulso debido a la equivalencia dimensional.
```

### 4 — Concepto de Momento Lineal

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["momento_lineal", "definicion"]

respuesta: "m * v"
tipo: "completar"
respuestas_validas:
  - "m * v"
  - "m*v"
  - "p = m*v"

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal (p) es una magnitud vectorial definida como p = m · v.
```

### 5 — Relación de variables

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["relacion_variables"]

respuesta: falso
tipo: vf

enunciado: "Si se mantiene constante la fuerza aplicada sobre un objeto, aumentar el tiempo de aplicación reducirá el cambio en el momento lineal."

explicacion: |
  Como J = Δp y J = F · Δt, si la fuerza es constante, el cambio en el momento es directamente proporcional al tiempo. A mayor tiempo, mayor cambio de momento.
```

### 6 — Concepto de Impulso

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "teoria"]

tipo: mc
opciones_explicitas: ["El cambio en el momento lineal", "La velocidad instantánea", "La masa del objeto", "La aceleración gravitatoria"]
respuesta: "El cambio en el momento lineal"

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual a ___."

explicacion: |
  El teorema del impulso establece que el impulso (J = F·Δt) es igual a la variación de la cantidad de movimiento (Δp).
```

### 7 — Cálculo de Impulso

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["calculo", "fuerza", "tiempo"]

variables:
  fuerza: 15.0
  tiempo: 2.5

tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuerza constante de {fuerza} N se aplica sobre un cuerpo durante un intervalo de tiempo de {tiempo} s. ¿Cuál es el módulo del impulso aplicado?"

pasos:
  - "Identificar la fuerza aplicada: F = {fuerza} N"
  - "Identificar el intervalo de tiempo: Δt = {tiempo} s"
  - "Calcular el producto: J = F * Δt"

explicacion: |
  El impulso se calcula multiplicando la fuerza por el tiempo: J = 15.0 * 2.5 = 37.5 kg·m/s.

respuesta: 37.5
```

### 8 — Relación Momento y Velocidad

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["momento_lineal", "velocidad"]

variables:
  masa: 5.0
  v_inicial: 2.0
  v_final: 8.0

tipo: completar
respuestas_validas:
  - "30.0"

enunciado: "Un objeto de {masa} kg pasa de una velocidad de {v_inicial} m/s a una de {v_final} m/s. El cambio en su momento lineal (Δp) es de ___ kg·m/s."

explicacion: |
  El cambio de momento es Δp = m * (v_final - v_inicial).
  Δp = 5.0 * (8.0 - 2.0) = 5.0 * 6.0 = 30.0 kg·m/s.

respuesta: "30.0"
```

### 9 — Verdad o Falso: Dependencia de la Masa

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

tipo: vf

enunciado: "¿Si un objeto recibe el mismo impulso (J), pero su masa es el doble, su cambio en la velocidad será la mitad que si la masa fuera la original?"

explicacion: |
  Verdadero. Como J = Δp = m * Δv, entonces Δv = J / m. Si la masa (m) se duplica, la variación de velocidad (Δv) se reduce a la mitad.

respuesta: verdadero
```

### 10 — Proceso de resolución de un problema

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["ordenar", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)", "Identificar los datos del problema"]

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza aplicada durante un tiempo determinado, conociendo la masa y el cambio de velocidad."

explicacion: |
  Para resolver problemas de este tipo, primero se extraen los datos, luego se calcula la variación de la cantidad de movimiento y finalmente se despeja la fuerza de la fórmula J = Δp.

respuesta_orden: ["Identificar los datos del problema", "Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)"]
```

### 11 — Relación entre Impulso y Momento

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "momento_lineal"]

respuesta: "mismo"
tipo: mc
opciones_explicitas: ["mismo", "mayor", "menor", "inverso"]

enunciado: "Si una fuerza constante se aplica sobre un objeto durante un intervalo de tiempo determinado, el cambio en el momento lineal del objeto es ___ que el impulso aplicado."

explicacion: |
  Por el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es exactamente igual al cambio en su momento lineal.
```

### 12 — El error de la fuerza instantánea

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["fuerza_media", "impulso"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10.0, 2.0, 20.0], [5.0, 4.0, 20.0]]

respuesta: datos[escenario_idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza media de {datos[escenario_idx][0]} N sobre un objeto durante un intervalo de tiempo de {datos[escenario_idx][1]} s. ¿Cuál es el cambio en el momento lineal (___) del objeto?"

pasos:
  - "Identificar la fuerza aplicada."
  - "Identificar el intervalo de tiempo."
  - "Calcular el impulso usando J = F * Delta t."

explicacion: |
  El cambio en el momento lineal es igual al impulso. 
  En el caso 1: 10 N * 2 s = 20 kg*m/s.
  En el caso 2: 5 N * 4 s = 20 kg*m/s.
```

### 13 — Dirección del Impulso

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["vector", "direccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el cambio en el momento lineal de un objeto es un vector, ¿el impulso aplicado debe tener la misma dirección y sentido que el cambio de momento?"

explicacion: |
  Correcto. El impulso es una magnitud vectorial definida como J = Delta p, por lo tanto, ambos vectores son idénticos en magnitud, dirección y sentido.
```

### 14 — El concepto de Fuerza Media

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["fuerza_media", "integral"]

respuesta: "fuerza"
tipo: completar

enunciado: "Cuando una fuerza no es constante en el tiempo, el impulso total se calcula como la integral de la ___ en el intervalo de tiempo dado."

respuestas_validas:
  - "fuerza"

explicacion: |
  Para fuerzas variables, el impulso es la integral temporal de la fuerza: J = integral de F(t) dt. El resultado de esa integral es el impulso (en N·s), no una fuerza; si se conoce el impulso J y la duración Δt, puede definirse una fuerza media equivalente como F_media = J / Δt.
```

### 15 — Factores que afectan el cambio de momento

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["masa", "velocidad", "momento"]

respuesta: "Masa y velocidad"
tipo: mc

opciones_explicitas: ["Masa y velocidad", "Masa y temperatura", "Velocidad y color", "Temperatura y color"]

enunciado: "Para determinar el momento lineal (p = m · v) de un objeto, ¿qué dos magnitudes físicas son necesarias para realizar el cálculo?"

explicacion: |
  El momento lineal depende directamente de la masa del objeto y de su velocidad instantánea. La temperatura y el color no afectan el momento lineal.
```

### 16 — Impulso vs Fuerza

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "teoria"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "momento", "aceleracion", "velocidad"]

enunciado: "El impulso se define como el producto de una ___ aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa."

explicacion: |
  El impulso (J) es el producto de la fuerza por el tiempo (J = F * Δt). Mientras que la fuerza es la causa inmediata del cambio de movimiento, el impulso describe el efecto acumulado de esa fuerza en un intervalo de tiempo determinado.
```

### 17 — Relación entre Impulso y Momento

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["teorema", "momento", "impulso"]

variables:
  escenario: uno_de([["un objeto gana velocidad", "aumenta"], ["un objeto frena", "disminuye"], ["un objeto mantiene velocidad", "es_cero"]])

respuesta: verdadero
tipo: "vf"

enunciado: "Si el impulso aplicado a un objeto es positivo (J > 0), el cambio en el momento lineal del objeto es positivo."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, el impulso es igual al cambio en el momento lineal (J = Δp). Si el impulso es positivo, el momento final es mayor que el inicial, por lo tanto, el cambio es positivo (aumenta).
```

### 18 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "kg·m/s"
tipo: "completar"
respuestas_validas:
  - "kg·m/s"

enunciado: "El impulso puede expresarse en unidades de Newton-segundo (N·s) o en unidades de momento lineal, que son ___."

explicacion: |
  Ambas unidades son dimensionalmente equivalentes. Como F = kg·m/s² y t = s, entonces F·t = (kg·m/s²)·s = kg·m/s.
```

### 19 — Componentes del Impulso

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["vector", "direccion"]

respuesta_orden: ["Fuerza", "Tiempo", "Cambio de momento"]
tipo: "ordenar"
opciones_explicitas: ["Fuerza", "Tiempo", "Cambio de momento"]

enunciado: "Ordene los conceptos de izquierda a derecha según la relación causal: la ___ aplicada durante un ___ produce un ___."

explicacion: |
  La secuencia lógica es: la fuerza (causa) actúa durante un intervalo de tiempo (duración) y esto resulta en un cambio en el momento lineal (efecto).
```

### 20 — Dependencia del tiempo

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["grafico", "fuerza_tiempo"]

respuesta: "aumenta"
tipo: "mc"
opciones_explicitas: ["aumenta", "disminuye", "se_mantiene"]

enunciado: "Si una fuerza constante actúa sobre un objeto durante cierto tiempo, produciendo un impulso (cambio en el momento lineal), y el tiempo de aplicación se duplica manteniendo la fuerza constante, el cambio en el momento lineal..."

explicacion: |
  Dado que J = F * Δt, el impulso es directamente proporcional al tiempo. Si el tiempo se duplica manteniendo la fuerza constante, el cambio en el momento lineal también se duplica (aumenta).
```

### 21 — El choque de un balón

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["impulso", "momento", "dinamica"]

variables:
  escenario: uno_de([[10.0, 5.0, 2.0], [20.0, 10.0, 4.0], [5.0, 2.5, 1.0]])
  fuerza: escenario[0]
  delta_t: escenario[1]
  masa: escenario[2]

respuesta: fuerza * delta_t
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un jugador de fútbol patea un balón de masa {masa} kg aplicando una fuerza constante de {fuerza} N durante un intervalo de tiempo de {delta_t} s. ¿Cuál es el módulo del impulso aplicado?"

pasos:
  - "Identificar la fuerza aplicada: F = {fuerza} N"
  - "Identificar el intervalo de tiempo: Δt = {delta_t} s"
  - "Calcular el impulso usando la fórmula J = F * Δt"

explicacion: |
  El impulso (J) se define como el producto de la fuerza aplicada por el tiempo durante el cual actúa. 
  J = {fuerza} N * {delta_t} s = {fuerza * delta_t} kg·m/s.
```

### 22 — Cambio de velocidad y momento

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["momento_lineal", "velocidad"]

variables:
  caso: uno_de([[1, 10.0, 5.0], [2, 20.0, 10.0], [3, 5.0, 2.0]])
  m: caso[1]
  v_i: caso[2]
  v_f: 0.0

respuesta: m * (v_f - v_i)
tipo: mc
opciones_explicitas: [0.0, -50.0, -200.0, -10.0]

enunciado: "Un objeto de masa {m} kg se desplaza con una velocidad inicial de {v_i} m/s y se detiene por completo tras un choque. ¿Cuál es el cambio en su momento lineal (Δp)?"

explicacion: |
  El cambio en el momento lineal es Δp = m * (v_f - v_i).
  En este caso: {m} * (0.0 - {v_i}) = {m * (0.0 - v_i)}.
```

### 23 — Relación Impulso-Momento

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "impulso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el impulso aplicado a un objeto es nulo (J = 0), entonces el cambio en su momento lineal (Δp) también es nulo."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, J = Δp. Si el impulso es cero, el cambio en el momento también lo es, lo que significa que el objeto mantiene su estado de movimiento original.
```

### 24 — El aterrizaje de un astronauta

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["impulso", "tiempo", "fuerza"]

variables:
  datos: [[100.0, 2.0], [50.0, 5.0], [200.0, 1.0]]
  idx: uno_de([0, 1, 2])
  impulse: datos[idx][0]
  tiempo: datos[idx][1]

respuesta: impulse / tiempo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un astronauta de masa constante recibe un impulso de {impulse} kg·m/s durante un tiempo de {tiempo} s. ¿Cuál es la fuerza media aplicada, en N?"

pasos:
  - "Recordar que J = F_media * Δt"
  - "Despejar la fuerza: F_media = J / Δt"

explicacion: |
  Para hallar la fuerza media, dividimos el impulso por el tiempo: {impulse} / {tiempo} = {impulse / tiempo} N.
```

### 25 — Secuencia de resolución de un problema

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular Δp = m(v_f - v_i)", "Identificar datos (m, v_i, v_f)", "Igualar J = Δp", "Calcular J = F * Δt"]
respuesta_orden: ["Identificar datos (m, v_i, v_f)", "Calcular Δp = m(v_f - v_i)", "Igualar J = Δp", "Calcular J = F * Δt"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza media aplicada durante un choque, conociendo la masa y las velocidades inicial y final."

explicacion: |
  Para resolver problemas de dinámica de colisiones, primero se extraen los datos, luego se calcula el cambio de movimiento (Δp), se aplica la equivalencia con el impulso y finalmente se despeja la incógnita (fuerza).
```
