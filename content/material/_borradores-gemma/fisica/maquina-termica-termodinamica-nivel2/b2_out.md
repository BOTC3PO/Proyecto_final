### 1 — Eficiencia de la máquina térmica
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: uno_de([
    [1000, 300],
    [800, 200],
    [500, 150]
  ])

enunciado: "Una máquina térmica opera entre una fuente caliente a {escenario[0]} K y una fuente fría a {escenario[1]} K. Calcula la eficiencia máxima teórica (eficiencia de Carnot) de esta máquina."

pasos:
  - "Calcular la temperatura de la fuente caliente (Th) y la fuente fría (Tc)."
  - "Aplicar la fórmula de la eficiencia de Carnot: η = 1 - (Tc / Th)."

respuesta: 1 - (escenario[1] / escenario[0])
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es la eficiencia máxima posible para cualquier máquina térmica que opere entre dos temperaturas. Se calcula como η = 1 - (T_fria / T_caliente).
```

### 2 — Flujo de energía en el ciclo
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "energia"]

opciones_explicitas: ["Q_caliente", "Q_fria", "W_trabajo"]

enunciado: "En un ciclo termodinámico de una máquina térmica, el calor que se absorbe de la fuente de alta temperatura se denomina ___."

respuesta: "Q_caliente"
tipo: mc

explicacion: |
  El proceso comienza con la absorción de calor de una fuente caliente para realizar trabajo.
```

### 3 — Conservación de la energía
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "primer_ley"]

variables:
  datos: uno_de([
    [500, 150],
    [1000, 400],
    [250, 50]
  ])

enunciado: "Una máquina térmica absorbe {datos[0]} J de calor de una fuente caliente y realiza un trabajo de {datos[1]} J. ¿Cuánta energía se libera como calor a la fuente fría?"

respuesta: datos[0] - datos[1]
tipo: input
tolerancia_abs: 0.1

explicacion: |
  Según la primera ley de la termodinámica para un ciclo, el calor neto es igual al trabajo neto: Q_h - Q_c = W. Por lo tanto, Q_c = Q_h - W.
```

### 4 — El límite de la eficiencia
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, la eficiencia de una máquina térmica real es siempre ___ que la eficiencia de una máquina de Carnot."

opciones_explicitas: ["menor", "igual", "mayor"]

respuesta: "menor"
tipo: mc

explicacion: |
  La segunda ley establece que es imposible convertir todo el calor absorbido en trabajo; siempre habrá una parte de energía que se degrade y se entregue a la fuente fría.
```

### 5 — Componentes del ciclo termodinámico
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "ciclo"]

opciones_explicitas: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]

enunciado: "Ordena las etapas típicas de un ciclo de una máquina térmica desde que recibe energía hasta que completa su ciclo:"

respuesta: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]
tipo: ordenar

explicacion: |
  El ciclo consiste en: 1. Absorber calor de la fuente caliente, 2. Realizar trabajo mediante la expansión del fluido, 3. Rechazar el calor sobrante a la fuente fría.
```