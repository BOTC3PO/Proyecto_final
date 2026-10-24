### 1 — El origen de los océanos
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["condensacion", "oceanos", "agua"]

respuesta: "condensación"
tipo: completar
respuestas_validas: ["condensación", "condensacion"]

enunciado: "A medida que la Tierra se enfriaba, el vapor de agua presente en la atmósfera primitiva sufrió un proceso de ___ que dio lugar a las primeras lluvias y la formación de los océanos."

explicacion: |
  Cuando la superficie terrestre bajó de la temperatura crítica, el vapor de agua se transformó en líquido, llenando las cuencas oceánicas.
```

### 2 — El estado de la materia
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["estado_materia", "vapor"]

respuesta: "líquido"
tipo: mc
opciones_explicitas: ["sólido", "líquido", "gaseoso", "plasma"]

enunciado: "Antes de la formación de los océanos, el agua se encontraba mayoritariamente en estado {estado_inicial}. Tras el enfriamiento, pasó a estado {estado_final}."

variables:
  estado_inicial: "gaseoso"
  estado_final: "líquido"

explicacion: |
  El paso de gas a líquido es la transición clave que permitió la existencia de agua líquida en la superficie.
```

### 3 — Secuencia de eventos geológicos
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["secuencia", "enfriamiento"]

respuesta: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]
tipo: ordenar
opciones_explicitas: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]

explicacion: |
  El orden lógico es: primero la Tierra debe enfriarse lo suficiente para que el vapor no vuelva a evaporarse, luego ocurre la condensación, las lluvias y finalmente se estabilizan los océanos.
```

### 4 — El papel del vapor de agua
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["componente", "atmosfera"]

respuesta: "verdadero"
tipo: vf

enunciado: "El vapor de agua fue uno de los componentes principales de la atmósfera primitiva que, al condensarse, permitió la aparición de los primeros mares."

explicacion: |
  La atmósfera primitiva era rica en gases de la actividad volcánica, incluyendo grandes cantidades de vapor de agua.
```

### 5 — Cálculo de temperatura crítica (Simulación)
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["fisica", "condensacion"]

variables:
  temp_inicial: 1500
  temp_final: 100
  delta_t: temp_inicial - temp_final

respuesta: 1400
tipo: input
tolerancia_abs: 0.1

enunciado: "Si la temperatura de la atmósfera primitiva era de {temp_inicial}°C y se enfrió hasta los {temp_final}°C para permitir la condensación, ¿cuál fue el descenso térmico (ΔT) en grados Celsius?"

pasos:
  - "Identificar la temperatura inicial: 1500"
  - "Identificar la temperatura final: 100"
  - "Restar la temperatura final de la inicial: 1500 - 100"

explicacion: |
  El enfriamiento fue un proceso masivo que redujo la temperatura de la atmósfera en miles de grados.
```