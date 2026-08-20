### 1 — El impacto de un vehículo
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["mecanica", "cinetica"]

variables:
  escenario: uno_de([["1200", "1500"], ["800", "400"], ["1500", "900"]])
  idx: uno_de([0, 1, 2])
  m: escenario[idx][0]
  v: escenario[idx][1]

respuesta: 0.5 * m * v * v
tipo: input
tolerancia_abs: 0.1

enunciado: "Un vehículo de {m} kg se desplaza con una velocidad constante de {v} m/s. ¿Cuál es su energía cinética en Joules?"

pasos:
  - "Identificar la masa: m = {m} kg"
  - "Identificar la velocidad: v = {v} m/s"
  - "Aplicar la fórmula: Ec = 1/2 * m * v²"
  - "Calcular: 0.5 * {m} * ({v})^2"

explicacion: |
  La energía cinética se calcula con la fórmula $E_c = \frac{1}{2} m v^2$.
  Para este caso: $0.5 \cdot {m} \cdot {v}^2 = {0.5 * m * v * v}$ J.
```

### 2 — Relación masa y energía
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["conceptos", "proporcionalidad"]

variables:
  escenario: uno_de([["el doble", "4"], ["el triple", "9"], ["el cuádruple", "16"]])
  idx: uno_de([0, 1, 2])
  factor_m: escenario[idx][0]
  factor_ec: escenario[idx][1]

respuesta: factor_ec
tipo: mc
opciones_explicitas: ["el doble", "el triple", "el cuádruple", "se mantiene igual"]

enunciado: "Si un objeto aumenta su masa por {factor_m} manteniendo su velocidad constante, su energía cinética cambia por un factor de: ___"

explicacion: |
  Como la energía cinética es directamente proporcional a la masa ($E_c \propto m$), si la masa se multiplica por un factor, la energía cinética también se multiplica por ese mismo factor.
```

### 3 — El peligro de la velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["velocidad", "seguridad_vial"]

variables:
  escenario: uno_de([["20", "40"], ["30", "90"], ["10", "20"]])
  idx: uno_de([0, 1, 2])
  v1: escenario[idx][0]
  v2: escenario[idx][1]

respuesta: true

tipo: vf

enunciado: "Si un automóvil duplica su velocidad de {v1} m/s a {v2} m/s, ¿su energía cinética es mayor que el doble de la original? (verdadero/falso)"

explicacion: |
  Al duplicar la velocidad ($v \to 2v$), la energía cinética aumenta por el cuadrado de la velocidad: $(2v)^2 = 4v^2$. Por lo tanto, la energía es 4 veces mayor, lo cual es efectivamente mayor que el doble.
```

### 4 — Cálculo de velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["despeje", "velocidad"]

variables:
  escenario: uno_de([["100", "10"], ["500", "20"], ["80", "20"]])
  idx: uno_de([0, 1, 2])
  ec: escenario[idx][0]
  m: escenario[idx][1]
  v: sqrt(2 * ec / m)

respuesta: v
tipo: completar
respuestas_validas: ["10", "20", "20"]

enunciado: "Un objeto de {m} kg posee una energía cinética de {ec} J. La velocidad del objeto es de ___ m/s."

explicacion: |
  Despejamos la velocidad de la fórmula $E_c = \frac{1}{2} m v^2$:
  $v^2 = \frac{2 \cdot E_c}{m} \implies v = \sqrt{\frac{2 \cdot E_c}{m}}$
  $v = \sqrt{\frac{2 \cdot {ec}}{{m}}} = {v}$ m/s.
```

### 5 — Componentes de la energía
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "masa y velocidad"
tipo: completar
respuestas_validas: ["masa y velocidad", "posición y masa", "altura y velocidad"]

enunciado: "La energía cinética de un cuerpo depende de dos variables principales: la ___ y la ___."

explicacion: |
  La fórmula $E_c = \frac{1}{2} m v^2$ muestra que la energía depende de la masa ($m$) y del cuadrado de la velocidad ($v$).
```