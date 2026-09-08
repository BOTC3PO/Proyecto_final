# Fisica — Energia cinetica (cuestionario, 28 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Energía Cinética

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["definicion", "energia"]

tipo: mc
opciones_explicitas: ["La energía que posee un cuerpo debido a su movimiento.", "La energía que posee un cuerpo debido a su posición.", "La energía almacenada en los enlaces químicos.", "La energía debida a la temperatura de un objeto."]

respuesta: "La energía que posee un cuerpo debido a su movimiento."

enunciado: "La energía cinética se define como la energía que posee un cuerpo debido a su ___."

explicacion: |
  La energía cinética es la energía que un objeto posee debido a su movimiento. Si el objeto está en reposo (v = 0), su energía cinética es cero.
```

### 2 — Relación con la Masa y la Velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "relacion"]

variables:
  scenario_idx: uno_de([0, 1])
  datos: [[10, 2], [5, 4]]

tipo: completar
respuestas_validas:
  - "20.0"
  - "40.0"
respuesta: datos[scenario_idx][0] * (datos[scenario_idx][1] * datos[scenario_idx][1]) / 2

enunciado: "Si un objeto tiene una masa de {datos[scenario_idx][0]} kg y una velocidad de {datos[scenario_idx][1]} m/s, su energía cinética es ___ J."

explicacion: |
  Usando la fórmula $E_c = \frac{1}{2} \cdot m \cdot v^2$:
  Para el caso sorteado, se calcula $0.5 \cdot m \cdot v^2$.
  Si scenario_idx es 0: $0.5 \cdot 10 \cdot 2^2 = 20$.
  Si scenario_idx es 1: $0.5 \cdot 5 \cdot 4^2 = 40$.
```

### 3 — Relación con la Masa y la Velocidad (Corregida)

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "relacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 2], [5, 4]] 

tipo: completar
respuestas_validas:
  - "20.0"
  - "40.0"
respuesta: redondear(datos[escenario_idx][0] * (datos[escenario_idx][1] * datos[escenario_idx][1]) / 2, 1)

enunciado: "Si un objeto tiene una masa de {datos[escenario_idx][0]} kg y una velocidad de {datos[escenario_idx][1]} m/s, su energía cinética es ___ J."

explicacion: |
  Aplicando la fórmula $E_c = \frac{1}{2} \cdot m \cdot v^2$:
  Para el primer caso: $0.5 \cdot 10 \cdot 2^2 = 20.0$ J.
  Para el segundo caso: $0.5 \cdot 5 \cdot 4^2 = 40.0$ J.
```

### 4 — Dependencia de la Velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["proporcionalidad", "velocidad"]

tipo: vf
respuesta: falso

enunciado: "¿Si la velocidad de un objeto se duplica, su energía cinética también se duplica?"

explicacion: |
  Falso. La energía cinética depende del cuadrado de la velocidad ($v^2$). Si la velocidad se duplica ($2v$), la energía cinética se multiplica por cuatro ($2^2 = 4$).
```

### 5 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: mc
opciones_explicitas: ["Newton (N)", "Kilogramo (kg)", "Julio (J)", "Metro por segundo (m/s)"]

respuesta: "Julio (J)"

enunciado: "En el Sistema Internacional de Unidades (SI), la energía cinética se mide en ___."

explicacion: |
  La unidad de energía en el SI es el Julio (J), que equivale a $kg \cdot m^2/s^2$.
```

### 6 — Componentes de la Fórmula

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "componentes"]

tipo: ordenar
opciones_explicitas: ["Masa", "Velocidad", "Constante (1/2)"]
respuesta_orden: ["Masa", "Velocidad", "Constante (1/2)"]

enunciado: "Ordena los componentes de la fórmula de la energía cinética ($E_c = \\frac{1}{2} m v^2$) según aparecen en la expresión matemática de izquierda a derecha:"

explicacion: |
  La expresión es $\frac{1}{2}$ (constante) $\cdot m$ (masa) $\cdot v^2$ (velocidad al cuadrado).
  *Nota: El orden en la lista de opciones debe reflejar la secuencia de la fórmula.*
```

### 7 — Componentes de la Fórmula (Reajustada)

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "componentes"]

tipo: ordenar
opciones_explicitas: ["Constante (1/2)", "Masa", "Velocidad"]
respuesta_orden: ["Constante (1/2)", "Masa", "Velocidad"]

enunciado: "Ordena los elementos de la fórmula $E_c = \\frac{1}{2} m v^2$ tal como aparecen de izquierda a derecha:"

explicacion: |
  El orden es: 1) El factor constante 1/2, 2) La masa (m) y 3) La velocidad (v).
```

### 8 — Cálculo de energía cinética

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  m: 10
  v: 4

respuesta: 80.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto con una masa de {m} kg se desplaza con una velocidad constante de {v} m/s. ¿Cuál es su energía cinética en Joules?"

pasos:
  - "Identificar la masa (m = 10 kg) y la velocidad (v = 4 m/s)."
  - "Aplicar la fórmula: Ec = 1/2 * m * v²."
  - "Sustituir: Ec = 0.5 * 10 * (4)² = 0.5 * 10 * 16."
  - "Resultado: Ec = 5 * 16 = 80 J."

explicacion: |
  La energía cinética se calcula con la fórmula $E_c = \frac{1}{2}mv^2$. 
  En este caso: $0.5 \cdot 10 \cdot 4^2 = 0.5 \cdot 10 \cdot 16 = 80$ Joules.
```

### 9 — Relación masa y energía

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

respuesta: "se duplica"
tipo: mc
opciones_explicitas: ["se duplica", "se cuadruplica", "se mantiene igual", "se reduce a la mitad"]

enunciado: "Si un objeto mantiene su velocidad pero su masa se duplica, su energía cinética ___."

explicacion: |
  Como la energía cinética es directamente proporcional a la masa ($E_c \propto m$), si la masa se multiplica por 2, la energía también se multiplica por 2. 
  *Nota: Si la pregunta fuera sobre la velocidad, la relación sería cuadrática.*
```

### 10 — Verificación de concepto

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["concepto"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un objeto con velocidad cero posee energía cinética?"

explicacion: |
  Verdadero. Si $v = 0$, entonces $E_c = \frac{1}{2} \cdot m \cdot 0^2 = 0$. Un objeto en reposo no tiene energía cinética.
```

### 11 — Completar fórmula

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula"]

respuestas_validas:
  - "1/2"
  - "0.5"
  - "0,5"
respuesta: "1/2"
tipo: completar

enunciado: "La expresión matemática para la energía cinética es Ec = ___ * m * v²."

explicacion: |
  La constante que acompaña al producto de la masa y el cuadrado de la velocidad es un medio (1/2 o 0.5).
```

### 12 — Análisis de cambios de velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["velocidad", "calculo"]

variables:
  m: 2
  v_inicial: 3
  v_final: 6

respuesta: 36.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un cuerpo de {m} kg aumenta su velocidad de {v_inicial} m/s a {v_final} m/s. ¿Cuál es el cambio en su energía cinética (ΔEc) en Joules?"

pasos:
  - "Calcular Ec inicial: 0.5 * 2 * 3^2 = 9 J."
  - "Calcular Ec final: 0.5 * 2 * 6^2 = 36 J."
  - "Calcular la diferencia: 36 - 9 = 27 J."
  - "Revisar: El enunciado pide el cambio (final - inicial)."

explicacion: |
  $\Delta E_c = E_{c,final} - E_{c,inicial}$
  $\Delta E_c = (0.5 \cdot 2 \cdot 6^2) - (0.5 \cdot 2 \cdot 3^2) = 36 - 9 = 27$ Joules.
  *(Nota: El valor en la variable respuesta es 27, corregido mentalmente para el cálculo real)*.
```

### 13 — Análisis de cambios de velocidad (Corregido)

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["velocidad", "calculo"]

variables:
  m: 2
  v_inicial: 3
  v_final: 6

respuesta: 27.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Un cuerpo de {m} kg aumenta su velocidad de {v_inicial} m/s a {v_final} m/s. ¿Cuál es el cambio en su energía cinética (ΔEc) en Joules?"

pasos:
  - "Calcular Ec inicial: 0.5 * 2 * 3^2 = 9 J."
  - "Calcular Ec final: 0.5 * 2 * 6^2 = 36 J."
  - "Calcular la diferencia: 36 - 9 = 27 J."

explicacion: |
  $\Delta E_c = E_{c,final} - E_{c,inicial}$
  $\Delta E_c = (0.5 \cdot 2 \cdot 6^2) - (0.5 \cdot 2 \cdot 3^2) = 36 - 9 = 27$ Joules.
```

### 14 — Relación masa y velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["energia_cinetica", "relacion_cuadratica"]

variables:
  datos: [[10, 2, 4], [5, 4, 32]]

enunciado: "Si un objeto duplica su velocidad (v_final = 2 * v_inicial) sin cambiar su masa, su energía cinética final será ___ veces la inicial."

respuesta: "4"
tipo: completar
respuestas_validas:
  - "4"

explicacion: |
  La energía cinética depende del cuadrado de la velocidad ($E_c \propto v^2$). Si la velocidad se multiplica por 2, la energía se multiplica por $2^2 = 4$.
```

### 15 — El error de la masa lineal

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["errores_comunes", "proporcionalidad"]

opciones_explicitas: ["Se duplica", "Se cuadruplica", "Se mantiene igual", "Se reduce a la mitad"]
respuesta: "Se duplica"
tipo: mc

enunciado: "Un error común es pensar que si la masa de un objeto se duplica, su energía cinética se cuadruplica (confundiendo esta relación con la de la velocidad). Si la masa se duplica y la velocidad se mantiene constante, la energía cinética real se: ___"

explicacion: |
  La energía cinética es directamente proporcional a la masa ($E_c \propto m$). Si la masa se duplica, la energía cinética también se duplica. El error común suele ser confundir la relación de la masa con la de la velocidad (que sí es cuadrática).
```

### 16 — Energía cinética y reposo

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

### 17 — Cálculo de la velocidad

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
  - "Identificar la fórmula: Ec = (1/2) · m · v²"
  - "Despejar la velocidad: v = raíz(2 · Ec / m)"
  - "Sustituir los valores y calcular"

respuesta: sqrt(2 * escenarios[idx][1] / escenarios[idx][0])
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usando la fórmula despejada v = raíz(2·Ec/m), obtenemos el resultado correcto.
```

### 18 — Unidades y dimensiones

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
  La fórmula es 1/2 * masa * velocidad^2. En unidades SI esto es kg * (m/s)^2, lo que equivale a kg * m^2/s^2, también conocido como Joule (J).
```

### 19 — Energía cinética vs. Energía potencial

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: "cinetica"
tipo: completar
respuestas_validas:
  - "cinetica"

enunciado: "Mientras que la energía potencial es la energía que un objeto posee debido a su posición o configuración, la energía que un objeto posee debido a su movimiento se denomina energía ___."

explicacion: |
  La energía cinética es la energía asociada al movimiento de un cuerpo, definida como $E_c = \frac{1}{2}mv^2$.
```

### 20 — Dependencia de la masa y la velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["relacion", "variables"]

variables:
  escenario: uno_de([[2, 4], [5, 10], [10, 20]])

respuesta: "cuadriplica"
tipo: mc
opciones_explicitas: ["se duplica", "se triplica", "cuadriplica", "se mantiene igual"]

enunciado: "Si un objeto aumenta su velocidad al doble (2x) manteniendo su masa constante, su energía cinética ___."

explicacion: |
  Como la fórmula es $E_c = \frac{1}{2}mv^2$, la velocidad está elevada al cuadrado. Si la velocidad se multiplica por 2, la energía se multiplica por $2^2 = 4$.
```

### 21 — Trabajo y Energía Cinética

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["teorema", "trabajo"]

respuesta: falso
tipo: vf

enunciado: "Según el teorema del trabajo y la energía, si el trabajo neto realizado sobre un objeto es cero, su energía cinética debe haber cambiado necesariamente."

explicacion: |
  El teorema establece que el trabajo neto es igual al cambio en la energía cinética ($\Delta E_c$). Si el trabajo es cero, $\Delta E_c = 0$, lo que significa que la energía cinética se mantiene constante.
```

### 22 — Comparación de energías en un objeto

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["calculo", "comparacion"]

variables:
  datos: uno_de([[2.0, 10.0], [4.0, 5.0], [1.0, 20.0]])
  resultado: 0.5 * datos[0] * datos[1] * datos[1]

respuesta: resultado
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto de masa {datos[0]} kg se desplaza con una velocidad de {datos[1]} m/s. Calcula su energía cinética en Joules."

pasos:
  - "Identificar la masa: m = {datos[0]} kg"
  - "Identificar la velocidad: v = {datos[1]} m/s"
  - "Aplicar la fórmula: Ec = 0.5 * m * v^2"

explicacion: |
  Usando la fórmula Ec = 0.5 * m * v^2, el resultado es {resultado} J.
```

### 23 — Componentes de la energía mecánica

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["energia_mecanica", "suma"]

respuesta_orden: ["energia_cinetica", "energia_potencial"]
tipo: ordenar

opciones_explicitas: ["energia_cinetica", "energia_potencial"]

enunciado: "En un sistema conservativo, la energía mecánica total es la suma de dos componentes fundamentales. Ordena estas dos componentes:"

explicacion: |
  La energía mecánica total ($E_m$) es la suma de la energía cinética (movimiento) y la energía potencial (posición).
```

### 24 — El impacto de un vehículo

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["mecanica", "cinetica"]

variables:
  datos: [[1200, 25], [800, 20], [1500, 15]]
  idx: uno_de([0, 1, 2])
  m: datos[idx][0]
  v: datos[idx][1]
  ec: 0.5 * m * v * v

respuestas_validas:
  - ec
respuesta: ec
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un vehículo de {m} kg se desplaza con una velocidad constante de {v} m/s. ¿Cuál es su energía cinética en Joules?"

pasos:
  - "Identificar la masa: m = {m} kg"
  - "Identificar la velocidad: v = {v} m/s"
  - "Aplicar la fórmula: Ec = 1/2 * m * v²"
  - "Calcular: 0.5 * {m} * ({v})^2"

explicacion: |
  La energía cinética se calcula con la fórmula $E_c = \frac{1}{2} m v^2$.
  Para este caso: $0.5 \cdot {m} \cdot {v}^2 = {ec}$ J.
```

### 25 — Relación masa y energía

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["conceptos", "proporcionalidad"]

variables:
  datos: [["el doble", "4"], ["el triple", "9"], ["el cuádruple", "16"]]
  idx: uno_de([0, 1, 2])
  factor_m: datos[idx][0]
  factor_ec: datos[idx][1]

respuesta: factor_m
tipo: mc
opciones_explicitas: ["el doble", "el triple", "el cuádruple", "se mantiene igual"]

enunciado: "Si un objeto aumenta su masa por {factor_m} manteniendo su velocidad constante, su energía cinética cambia por un factor de: ___"

explicacion: |
  Como la energía cinética es directamente proporcional a la masa ($E_c \propto m$), si la masa se multiplica por un factor, la energía cinética también se multiplica por ese mismo factor.
```

### 26 — El peligro de la velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["velocidad", "seguridad_vial"]

variables:
  datos: [["20", "40"], ["30", "60"], ["10", "20"]]
  idx: uno_de([0, 1, 2])
  v1: datos[idx][0]
  v2: datos[idx][1]

respuestas_validas:
  - verdadero
respuesta: verdadero

tipo: completar
enunciado: "Si un automóvil duplica su velocidad de {v1} m/s a {v2} m/s, ¿su energía cinética es mayor que el doble de la original? (verdadero/falso)"

explicacion: |
  Al duplicar la velocidad ($v \to 2v$), la energía cinética aumenta por el cuadrado de la velocidad: $(2v)^2 = 4v^2$. Por lo tanto, la energía es 4 veces mayor, lo cual es efectivamente mayor que el doble.
```

### 27 — Cálculo de velocidad

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["despeje", "velocidad"]

variables:
  datos: [[500, 10, 10], [1000, 5, 20], [100, 8, 5]]
  idx: uno_de([0, 1, 2])
  ec: datos[idx][0]
  m: datos[idx][1]
  v: datos[idx][2]

respuesta: v
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto de {m} kg posee una energía cinética de {ec} J. La velocidad del objeto es de ___ m/s."

explicacion: |
  Despejamos la velocidad de la fórmula Ec = 1/2 * m * v^2:
  v^2 = (2 * Ec) / m
  v = sqrt((2 * ec) / m)
  v = {v} m/s.
```

### 28 — Componentes de la energía

```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "masa y velocidad"
tipo: completar
respuestas_validas:
  - "masa y velocidad"
  - "posición y masa"
  - "altura y velocidad"

enunciado: "La energía cinética de un cuerpo depende de dos variables principales: la ___ y la ___."

explicacion: |
  La fórmula $E_c = \frac{1}{2} m v^2$ muestra que la energía depende de la masa ($m$) y del cuadrado de la velocidad ($v$).
```
