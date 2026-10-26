### 1 — Semivida del Carbono-14
```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "carbono-14", "datacion"]

variables:
  escenario: uno_de([[5730, "5730"], [8000, "8000"], [1200, "1200"]])
  t_medio: escenario[0]
  t_transcurrido: 5730
  masa_inicial: 100
  masa_final: 25

respuesta: 2
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

enunciado: "Una muestra de Carbono-14 tiene una semivida de {t_medio} años. Si inicialmente tenemos una masa de {masa_inicial} g, ¿cuántos periodos de semivida han transcurrido si la masa final es de {masa_final} g?"

explicacion: |
  La masa se reduce a la mitad en cada periodo de semivida. 
  100g -> 50g (1 periodo) -> 25g (2 periodos).
```

### 2 — Decaimiento de un Isótopo Médico
```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["medicina_nuclear", "isótopos"]

variables:
  datos: [[300, "150"], [100, "50"], [400, "100"]]
  idx: uno_de([0, 1, 2])
  m_inicial: datos[idx][0]
  m_final: datos[idx][1]
  t_medio: 6

respuesta: "150"
tipo: completar
respuestas_validas: ["150"]

enunciado: "Un radiofármaco con una semivida de {t_medio} horas se inyecta en un paciente con una actividad de {m_inicial} MBq. Tras transcurrir un tiempo equivalente a una semivida, la actividad medida es de ___ MBq."

explicacion: |
  Por definición, tras un periodo de semivida, la actividad se reduce exactamente a la mitad.
```

### 3 — Verdad o Falso: La Ley de Decaimiento
```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "basico"
  tags: ["conceptos", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En un proceso de desintegración exponencial, la cantidad de sustancia radiactiva disminuye de forma lineal con respecto al tiempo."

explicacion: |
  Falso. La disminución es exponencial, no lineal. La tasa de desintegración es proporcional a la cantidad de núcleos presentes.
```

### 4 — Secuencia de Desintegración
```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  t_medio: 10
  m_0: 80

respuesta: ["80", "40", "20", "10", "5"]
tipo: ordenar
opciones_explicitas: ["80", "40", "20", "10", "5"]

enunciado: "Ordena las masas resultantes de una muestra de {m_0} g tras transcurrir 1, 2, 3, 4 y 5 periodos de semivida (de mayor a menor):"

explicacion: |
  Cada paso divide la masa por 2: 80 -> 40 -> 20 -> 10 -> 5.
```

### 5 — Cálculo de Masa Remanente
```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  escenario: uno_de([[100, 50, 10], [200, 100, 25], [80, 40, 20]])
  m_i: escenario[0]
  m_f: escenario[1]
  t_medio: 10
  t_total: 20

respuesta: 20.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Una muestra de {m_i} g de un isótopo tiene una semivida de {t_medio} años. ¿Cuántos gramos de la muestra quedarán después de {t_total} años?"

explicacion: |
  Usamos la fórmula N(t) = N0 * (1/2)^(t/t_medio).
  N(20) = {m_i} * (1/2)^(20/10) = {m_i} * (1/2)^2 = {m_i} / 4.
  En el caso seleccionado: {m_i} / 4 = {escenario[0][0]} / 4 = 20.0.
```