### 1 — Crecimiento de población bacteriana
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["modelos_exponenciales", "biotecnologia"]

variables:
  escenario: uno_de([[100, 2, 0.5], [500, 3, 0.2], [250, 2, 0.8]])
  p_inicial: escenario[0]
  tasa: escenario[1]
  tiempo: escenario[2]

respuesta: p_inicial * (1 + tasa)**tiempo
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cultivo de bacterias crece exponencialmente según el modelo P(t) = P₀ * (1 + r)ᵗ. Si la población inicial es de {p_inicial} unidades, la tasa de crecimiento es del {tasa * 100}% por hora, ¿cuál será la población tras {tiempo} horas?"

pasos:
  - "Identificar la población inicial P₀ = {p_inicial}"
  - "Identificar la tasa r = {tasa}"
  - "Identificar el tiempo t = {tiempo}"
  - "Aplicar la fórmula: {p_inicial} * (1 + {tasa})^{tiempo}"

explicacion: |
  El modelo exponencial se aplica cuando el crecimiento es proporcional a la población actual. En este caso, tras {tiempo} horas, la población es de {p_inicial * (1 + tasa)**tiempo}.
```

### 2 — Decaimiento de temperatura (Ley de Newton)
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["termodinamica", "ecuaciones_diferenciales"]

variables:
  datos: uno_de([[25, 100, 20], [30, 80, 25], [20, 120, 15]])
  temp_obj: datos[0]
  temp_amb: datos[1]
  k: datos[2]

respuesta: temp_amb
tipo: mc
opciones_explicitas: ["25°C", "100°C", "20°C", "0°C"]

enunciado: "La temperatura de un objeto sigue la ley de enfriamiento de Newton: T(t) = T_amb + (T_obj - T_amb) * e^(-k*t). ¿Cuál será la temperatura del objeto cuando el tiempo t tiende a infinito (t → ∞)?"

explicacion: |
  A medida que el tiempo transcurre, el término exponencial e^(-k*t) tiende a cero, por lo que la temperatura del objeto se iguala a la temperatura ambiente ({temp_amb}°C).
```

### 3 — Análisis de costos de producción
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["costos", "lineal"]

variables:
  costos: uno_de([[500, 5], [800, 12], [300, 8]])
  fijo: costos[0]
  variable: costos[1]

respuesta: ["Costo Fijo", "Costo Variable", "Costo Total"]
tipo: ordenar

opciones_explicitas: ["Costo Fijo", "Costo Variable", "Costo Total"]

enunciado: "Un proceso industrial presenta un costo fijo de ${fijo} y un costo variable de ${variable} por unidad producida. Ordene los componentes de la función de costo total C(x) = {fijo} + {variable} * x de mayor a menor importancia en el costo total cuando la producción es muy baja."

explicacion: |
  Cuando la producción (x) es cercana a cero, el componente dominante es el costo fijo. A medida que x aumenta, el costo variable toma relevancia.
```

### 4 — Resistencia de materiales (Ley de Hooke)
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["mecanica", "ley_de_hooke"]

variables:
  par: uno_de([[100, 200], [500, 50], [250, 100]])
  fuerza: par[0]
  k: par[1]

respuesta: "2.5"
tipo: completar
respuestas_validas: ["2.5", "2,5"]

enunciado: "Según la Ley de Hooke, la deformación x de un resorte está dada por F = k * x. Si se aplica una fuerza de {fuerza} N sobre un resorte con constante elástica k = {k} N/m, la deformación es de ___ m."

explicacion: |
  Despejando la fórmula para la deformación: x = F / k. En este caso, {fuerza} / {k} = 2.5.
```

### 5 — Eficiencia de un sistema de filtrado
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["probabilidad", "eficiencia"]

variables:
  escenario: uno_de([[0.95, 0.05], [0.98, 0.02], [0.90, 0.10]])
  p_filtro: escenario[0]
  p_error: escenario[1]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema de filtrado tiene una probabilidad de éxito (capturar partícula) de {p_filtro} y una probabilidad de error (dejar pasar) de {p_error}. ¿Es la suma de las probabilidades de los eventos complementarios igual a 1.0?"

explicacion: |
  En cualquier modelo probabilístico, la suma de la probabilidad de un evento y su complemento debe ser exactamente 1. En este caso, {p_filtro} + {p_error} = 1.0.
```