### 1 — El condensador separado de Watt
```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "historia_ciencia", "watt"]

variables:
  escenario: uno_de([
    ["Máquina de Newcomen", "calentaba y enfriaba el cilindro en cada ciclo", "causaba una pérdida masiva de energía térmica al enfriar el cilindro"],
    ["Máquina de Watt", "mantenía el cilindro caliente y usaba un condensador separado", "permitía que el cilindro permaneciera a la temperatura del vapor"]
  ])

enunciado: "En la máquina de Newcomen, el principal problema de eficiencia era que el {escenario[0]}."

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["calentaba y enfriaba el cilindro en cada ciclo", "mantenía el cilindro caliente y usaba un condensador separado", "causaba una pérdida masiva de energía térmica al enfriar el cilindro"]

explicacion: |
  James Watt introdujo el condensador separado para evitar que el cilindro principal se enfriara en cada ciclo, lo que ahorraba una cantidad enorme de energía y permitía un uso industrial continuo.
```

### 2 — Ciclo termodinámico y eficiencia
```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["eficiencia", "termodinamica", "calor"]

variables:
  valor_eficiencia: uno_de([
    [0.05, "5%"],
    [0.12, "12%"],
    [0.25, "25%"]
  ])

enunciado: "Si una máquina térmica industrial de la era de Watt tiene una eficiencia térmica de {valor_eficiencia[1]}, esto significa que solo una parte del calor absorbido se convierte en trabajo. El valor decimal es ___."

respuestas_validas: ["0.12"]
tipo: completar

explicacion: |
  La eficiencia térmica es la relación entre el trabajo útil obtenido y el calor suministrado. Un valor de 0.12 representa un 12% de eficiencia.
```

### 3 — Componentes de la máquina de Watt
```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "basico"
  tags: ["componentes", "watt", "vapor"]

enunciado: "Ordena los componentes de una máquina de vapor de Watt según el flujo de energía desde la fuente de calor hasta el trabajo mecánico:"

pasos:
  - "Generación de vapor por combustión"
  - "Expansión del vapor en el cilindro"
  - "Condensación en el condensador separado"
  - "Movimiento del pistón/émbolo"

opciones_explicitas: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Condensación en el condensador separado", "Movimiento del pistón/émbolo"]
respuesta: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Condensación en el condensador separado", "Movimiento del pistón/émbolo"]
tipo: ordenar

explicacion: |
  El ciclo comienza con la generación de vapor, seguido de su expansión para mover el pistón, la condensación para recuperar el agua y el movimiento mecánico resultante.
```

### 4 — El impacto del condensador
```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "watt", "eficiencia"]

variables:
  efecto: uno_de([
    ["aumentar", "aumentar"],
    ["disminuir", "disminuir"],
    ["mantener", "mantener"]
  ])

enunciado: "La introducción del condensador separado por parte de Watt tuvo como objetivo principal ___ la temperatura del cilindro durante el ciclo de expansión."

respuestas_validas: ["mantener"]
tipo: completar

explicacion: |
  Al condensar el vapor en un recipiente separado, el cilindro principal no necesita ser enfriado con agua fría en cada ciclo, manteniendo su temperatura constante y optimizando el uso del combustible.
```

### 5 — Relación Trabajo-Calor
```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["leyes_termodinamica", "trabajo", "calor"]

variables:
  caso: uno_de([
    [100, "100"],
    [250, "250"],
    [500, "500"]
  ])

enunciado: "Una máquina de vapor de Watt recibe {caso[0]} Joules de calor ($Q_{in}$) y realiza un trabajo de {caso[0] * 0.2} Joules ($W$). ¿Cuál es su eficiencia térmica ($\eta = W/Q_{in}$) expresada en decimal?"

pasos:
  - "Identificar el trabajo realizado ($W$)"
  - "Identificar el calor absorbido ($Q_{in}$)"
  - "Dividir $W$ entre $Q_{in}$"

respuesta: 0.2
tipo: input
tolerancia_abs: 0.001

explicacion: |
  La eficiencia se calcula como $\eta = W / Q_{in}$. En este caso: $20 / 100 = 0.2$ (o $50 / 250 = 0.2$).
```