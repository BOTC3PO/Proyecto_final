### 1 — Relación masa y velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["energia_cinetica", "relacion_cuadratica"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 2, 4], [5, 4, 32]]

enunciado: "Si un objeto duplica su velocidad (v_final = 2 * v_inicial) sin cambiar su masa, su energía cinética final será ___ veces la inicial."

respuesta: tabla[idx][1]
tabla: [[2, "4"], [2, "4"]]
tipo: completar
respuestas_validas: ["4"]

explicacion: |
  La energía cinética depende del cuadrado de la velocidad ($E_c \propto v^2$). Si la velocidad se multiplica por 2, la energía se multiplica por $2^2 = 4$.
```

### 2 — El error de la masa lineal
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["errores_comunes", "proporcionalidad"]

opciones_explicitas: ["Se duplica", "Se cuadruplica", "Se mantiene igual", "Se reduce a la mitad"]
respuesta: "Se cuadruplica"
tipo: mc

enunciado: "Un error común es pensar que si la masa de un objeto se duplica, su energía cinética también se duplica. Sin embargo, si la masa se duplica y la velocidad se mantiene constante, la energía cinética real se: ___"

explicacion: |
  La energía cinética es directamente proporcional a la masa ($E_c \propto m$). Si la masa se duplica, la energía cinética también se duplica. El error común suele ser confundir la relación de la masa con la de la velocidad.
```

### 3 — Energía cinética y reposo
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["conceptos_fundamentales"]

respuesta: falso
tipo: vf

enunciado: "Un objeto que posee energía potencial gravitatoria debido a su altura, pero se encuentra en reposo (v = 0), tiene una energía cinética mayor a cero."

explicacion: |
  La energía cinética depende exclusivamente del movimiento ($v$). Si la velocidad es cero, la energía cinética es necesariamente cero, independientemente de la altura.
```

### 4 — Cálculo de la velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

variables:
  idx: uno_de([0, 1])
  escenarios: [[2, 10, 10], [5, 20, 20]]

enunciado: "Calcula la velocidad de un objeto de {escenarios[idx][0]} kg que posee una energía cinética de {escenarios[idx][1]} J."

pasos:
  - "Identificar la fórmula: $E_c = \frac{1}{2} \cdot m \cdot v^2$"
  - "Despejar la velocidad: $v = \sqrt{\frac{2 \cdot E_c}{m}}$"
  - "Sustituir los valores: $v = \sqrt{\frac{2 \cdot 10}{2}} = \sqrt{10}$"

respuesta: sqrt(2 * escenarios[idx][1] / escenarios[idx][0])
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Usando la fórmula despejada $v = \sqrt{2E_c / m}$, obtenemos el resultado correcto.
```

### 5 — Unidades y dimensiones
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

opciones_explicitas: ["kg·m/s", "kg·m/s²", "kg·m²/s²", "kg/m"]
respuesta: "kg·m²/s²"
tipo: mc

enunciado: "Al calcular la energía cinética en el Sistema Internacional, la combinación de unidades resultante es: ___"

explicacion: |
  La fórmula es $\frac{1}{2} \cdot \text{masa} \cdot \text{velocidad}^2$. En unidades SI esto es $\text{kg} \cdot (\text{m/s})^2$, lo que equivale a $\text{kg} \cdot \text{m}^2/\text{s}^2$, también conocido como Joule (J).
```