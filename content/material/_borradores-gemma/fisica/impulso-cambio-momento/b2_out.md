### 1 — Concepto de Impulso
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "teoria"]

tipo: mc
opciones_explicitas: ["El cambio en el momento lineal", "La velocidad instantánea", "La masa del objeto", "La aceleración gravitatoria"]

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual a ___."

explicacion: |
  El teorema del impulso establece que el impulso (J = F·Δt) es igual a la variación de la cantidad de movimiento (Δp).
```

### 2 — Cálculo de Impulso
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["calculo", "fuerza", "tiempo"]

variables:
  fuerza: 15.0
  tiempo: 2.5

tipo: input
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

### 3 — Relación Momento y Velocidad
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
respuestas_validas: ["10.0", "30.0", "40.0"]

enunciado: "Un objeto de {masa} kg pasa de una velocidad de {v_inicial} m/s a una de {v_final} m/s. El cambio en su momento lineal (Δp) es de ___ kg·m/s."

explicacion: |
  El cambio de momento es Δp = m * (v_final - v_inicial).
  Δp = 5.0 * (8.0 - 2.0) = 5.0 * 6.0 = 30.0 kg·m/s.

respuesta: "30.0"
```

### 4 — Verdad o Falso: Dependencia de la Masa
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

### 5 — Proceso de resolución de un problema
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

respuesta: ["Identificar los datos del problema", "Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)"]
```