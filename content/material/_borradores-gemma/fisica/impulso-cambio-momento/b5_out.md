### 1 — El choque de un balón
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
tipo: input
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

### 2 — Cambio de velocidad y momento
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
opciones_explicitas: ["0.0", "50.0", "-100.0", "-200.0"]

enunciado: "Un objeto de masa {m} kg se desplaza con una velocidad inicial de {v_i} m/s y se detiene por completo tras un choque. ¿Cuál es el cambio en su momento lineal (Δp)?"

explicacion: |
  El cambio en el momento lineal es Δp = m * (v_f - v_i).
  En este caso: {m} * (0.0 - {v_i}) = {m * (0.0 - v_i)}.
```

### 3 — Relación Impulso-Momento
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "impulso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el impulso aplicado a un objeto es nulo (J = 0), entonces el cambio en su momento lineal (Δp) debe ser ___."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, J = Δp. Si el impulso es cero, el cambio en el momento también lo es, lo que significa que el objeto mantiene su estado de movimiento original.
```

### 4 — El aterrizaje de un astronauta
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

respuesta: "fuerza_media"
tipo: completar
respuestas_validas: ["fuerza_media"]

enunciado: "Un astronauta de masa constante recibe un impulso de {impulse} kg·m/s durante un tiempo de {tiempo} s. La fuerza media aplicada se calcula como ___."

pasos:
  - "Recordar que J = F_media * Δt"
  - "Despejar la fuerza: F_media = J / Δt"

explicacion: |
  Para hallar la fuerza media, dividimos el impulso por el tiempo: {impulse} / {tiempo} = {impulse / tiempo} N.
```

### 5 — Secuencia de resolución de un problema
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular Δp = m(v_f - v_i)", "Identificar datos (m, v_i, v_f)", "Igualar J = Δp", "Calcular J = F * Δt"]
respuesta: ["Identificar datos (m, v_i, v_f)", "Calcular Δp = m(v_f - v_i)", "Igualar J = Δp", "Calcular J = F * Δt"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza media aplicada durante un choque, conociendo la masa y las velocidades inicial y final."

explicacion: |
  Para resolver problemas de dinámica de colisiones, primero se extraen los datos, luego se calcula el cambio de movimiento (Δp), se aplica la equivalencia con el impulso y finalmente se despeja la incógnita (fuerza).
```