### 1 — La necesidad de una línea de base
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["metodologia", "climatologia"]

tipo: mc
opciones_explicitas: ["Establecer un punto de comparación para distinguir variaciones naturales de antropogénicas", "Determinar la temperatura exacta del núcleo de la Tierra", "Calcular la velocidad de la rotación terrestre", "Predecir el fin de la vida en el planeta"]

enunciado: "Para determinar si el calentamiento actual es una anomalía, los científicos necesitan establecer una ___ que permita comparar el clima presente con los registros del pasado."

respuesta: "Establecer un punto de comparación para distinguir variaciones naturales de antropogénicas"

explicacion: |
  Sin una línea de base histórica (paleoclimatología), no podríamos saber si las fluctuaciones actuales están dentro de los rangos de variabilidad natural o si representan una desviación estadística significativa.
```

### 2 — Ciclos de Milankovitch
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["milankovitch", "astronomia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["excentricidad", "cambios en la forma de la órbita terrestre"], ["oblicuidad", "cambios en la inclinación del eje terrestre"]]

tipo: completar
respuestas_validas: ["excentricidad", "oblicuidad"]

enunciado: "Los ciclos de Milankovitch explican las glaciaciones a través de variaciones en la órbita. El primer factor es la {escenario[idx][0]}, que se refiere a los {escenario[idx][1]}."

respuesta: escenario[idx][0]

explicacion: |
  Los ciclos de Milankovitch incluyen la excentricidad (órbita), la oblicuidad (inclinación) y la precesión (balanceo). Estos procesos naturales operan en escalas de decenas de miles de años.
```

### 3 — Ritmos de cambio: Natural vs Antropogénico
```
metadata:
  materia: "historia_profucha"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["ritmos", "velocidad"]

tipo: ordenar
opciones_explicitas: ["Ciclos de Milankovitch (escala de milenios)", "Variaciones volcánicas menores (escala de años/décadas)", "Emisiones de gases de efecto invernadero actuales (escala de décadas)"]

enunciado: "Ordena los procesos de abajo hacia arriba según la escala temporal en la que influyen en el sistema climático (de mayor duración a menor duración):"

respuesta: ["Ciclos de Milankovitch (escala de milenios)", "Variaciones volcánicas menores (escala de años/décadas)", "Emisiones de gases de efecto invernadero actuales (escala de décadas)"]

explicacion: |
  La diferencia fundamental entre el cambio climático natural histórico y el actual no es solo la dirección del cambio, sino la velocidad (ritmo) a la que ocurre el forzamiento radiativo.
```

### 4 — El registro del hielo
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "hielo"]

variables:
  datos: [["isótopos de oxígeno", "concentración de CO2"], ["isótopos de carbono", "presión atmosférica"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["isótopos de oxígeno", "isótopos de carbono", "niveles de salinidad", "densidad del aire"]

enunciado: "Para reconstruir la temperatura de hace miles de años, los científicos analizan los {datos[idx][0]} atrapados en las burbujas de aire de los núcleos de hielo."

respuesta: datos[idx][0]

explicacion: |
  Los isótopos de oxígeno (especialmente la relación entre 18O y 16O) en el hielo actúan como un termómetro paleoclimático muy preciso.
```

### 5 — El valor de la anomalía
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["anomalia", "datos"]

tipo: input
tolerancia_abs: 0.1

enunciado: "Si la temperatura media global histórica (línea de base) fuera de 14.0°C y la actual es de 15.5°C, ¿cuál es la magnitud de la anomalía térmica en grados Celsius?"

respuesta: 1.5

explicacion: |
  La anomalía se calcula restando el valor de la línea de base al valor actual: 15.5 - 14.0 = 1.5.
```