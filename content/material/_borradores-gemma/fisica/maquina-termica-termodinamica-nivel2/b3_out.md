### 1 — El límite de la eficiencia
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "eficiencia", "calor"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Una máquina térmica absorbe 1000 J de calor y realiza 400 J de trabajo.", "400"],
    ["Un motor absorbe 500 J de calor y entrega 200 J de trabajo.", "200"]
  ])

enunciado: "Según la segunda ley de la termodinámica, la eficiencia de una máquina térmica se define como el trabajo útil dividido por el calor absorbido. En el caso de {escenario[idx][0]}, ¿cuánto trabajo se realizó?"

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0.1

explicacion: |
  La eficiencia es $\eta = W / Q_{in}$. En el primer caso: $400/1000 = 0.4$ (40%). En el segundo: $200/500 = 0.4$ (40%). Siempre hay una parte del calor que no se convierte en trabajo.
```

### 2 — El destino del calor residual
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["segunda_ley", "entropia"]

opciones_explicitas: ["Se convierte totalmente en trabajo", "Se transfiere a un foco frío como calor residual", "Se transforma en energía potencial", "Se destruye por la fricción"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un ciclo termodinámico, la energía que no se transforma en trabajo debe ser..."

respuesta: "Se transfiere a un foco frío como calor residual"
tipo: mc

explicacion: |
  Es imposible convertir todo el calor absorbido en trabajo. Una parte del calor debe ser expulsada a un foco de menor temperatura para completar el ciclo.
```

### 3 — El ciclo de Carnot
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "avanzado"
  tags: ["carnot", "eficiencia_maxima"]

variables:
  temp_caliente: 600
  temp_frio: 300

enunciado: "Considerando una máquina de Carnot operando entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_frio} K, ¿cuál es su eficiencia máxima teórica?"

pasos:
  - "Calcular la temperatura absoluta en Kelvin."
  - "Aplicar la fórmula de eficiencia de Carnot: $\eta = 1 - (T_{frio} / T_{caliente})$."

respuesta: 0.5
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es $\eta = 1 - (300/600) = 1 - 0.5 = 0.5$ (50%). Incluso en el caso ideal de Carnot, la eficiencia es menor a 1 (100%) si $T_{frio} > 0$.
```

### 4 — Conceptos fundamentales
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["conceptos", "leyes"]

opciones_explicitas: ["Calor", "Trabajo", "Temperatura", "Entropía"]

enunciado: "Para que una máquina térmica funcione, es necesario que exista un flujo de ___ desde un cuerpo caliente a uno frío."

respuesta: "Calor"
tipo: mc

explicacion: |
  La transferencia de calor es el motor del proceso; sin un gradiente de temperatura que permita el flujo de calor, no se puede realizar trabajo cíclicamente.
```

### 5 — El problema de la eficiencia perfecta
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "imposibilidad"]

respuestas_validas: ["imposible", "falso"]

enunciado: "Es físicamente ___ construir una máquina térmica que tenga una eficiencia del 100%."

respuesta: "imposible"
tipo: completar

explicacion: |
  La segunda ley de la termodinámica (Enunciado de Kelvin-Planck) establece que es imposible construir un dispositivo que opere en un ciclo y que produzca solamente trabajo a partir de un solo depósito de calor.
```