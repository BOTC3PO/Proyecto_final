### 1 — Relación entre Impulso y Momento
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
  Por el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es exactamente igual al cambio en su momento lineal ($\vec{J} = \Delta\vec{p}$).
```

### 2 — El error de la fuerza instantánea
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
tipo: input
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza media de {datos[escenario_idx][0]} N sobre un objeto durante un intervalo de tiempo de {datos[escenario_idx][1]} s. ¿Cuál es el cambio en el momento lineal ($\Delta p$) del objeto?"

pasos:
  - "Identificar la fuerza aplicada ($F = 10$ N o $5$ N)."
  - "Identificar el intervalo de tiempo ($\Delta t = 2$ s o $4$ s)."
  - "Calcular el impulso usando $J = F \cdot \Delta t$."

explicacion: |
  El cambio en el momento lineal es igual al impulso. 
  En el caso 1: $10 \text{ N} \cdot 2 \text{ s} = 20 \text{ kg}\cdot\text{m/s}$.
  En el caso 2: $5 \text{ N} \cdot 4 \text{ s} = 20 \text{ kg}\cdot\text{m/s}$.
```

### 3 — Dirección del Impulso
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["vector", "direccion"]

respuesta: falso
tipo: vf

enunciado: "Si el cambio en el momento lineal de un objeto es un vector, ¿el impulso aplicado debe tener la misma dirección y sentido que el cambio de momento?"

explicacion: |
  Correcto. El impulso es una magnitud vectorial definida como $\vec{J} = \Delta\vec{p}$, por lo tanto, ambos vectores son idénticos en magnitud, dirección y sentido.
```

### 4 — El concepto de Fuerza Media
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["fuerza_media", "integral"]

respuesta: "fuerza_media"
tipo: completar

enunciado: "Cuando una fuerza no es constante en el tiempo, el impulso total se calcula como la integral de la ___ en el intervalo de tiempo dado."

respuestas_validas: ["fuerza_media"]

explicacion: |
  Para fuerzas variables, el impulso es la integral temporal de la fuerza: $\vec{J} = \int_{t_1}^{t_2} \vec{F}(t) dt$. En este contexto, el resultado de la integral representa la fuerza media aplicada durante ese periodo.
```

### 5 — Factores que afectan el cambio de momento
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["masa", "velocidad", "momento"]

respuesta: ["masa", "velocidad"]
tipo: ordenar

opciones_explicitas: ["masa", "velocidad", "temperatura", "color"]

enunciado: "Para determinar el momento lineal ($p = m \cdot v$) de un objeto, ¿qué dos magnitudes físicas son necesarias para realizar el cálculo? (Ordénalas)"

explicacion: |
  El momento lineal depende directamente de la masa del objeto y de su velocidad instantánea. La temperatura y el color no afectan el momento lineal.
```