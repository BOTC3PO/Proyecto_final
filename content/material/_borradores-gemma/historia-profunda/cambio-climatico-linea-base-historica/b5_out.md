### 1 — Velocidad del calentamiento actual
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "velocidad"]

variables:
  escenario: uno_de([
    ["un aumento de 2°C en 10,000 años", "0.0002"],
    ["un aumento de 2°C en 5,000 años", "0.0004"],
    ["un aumento de 2°C en 2,000 años", "0.001"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Considerando el escenario de un aumento de temperatura de {escenario[0]}, ¿cuál es la tasa de cambio anual aproximada en grados Celsius por año (expresada como decimal)?"

pasos:
  - "Identificar el cambio total de temperatura (2°C)."
  - "Dividir el cambio total por la cantidad de años para obtener la tasa anual."

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0.00001

explicacion: |
  La tasa se calcula dividiendo el cambio de temperatura entre el tiempo transcurrido. En el escenario actual, la velocidad es órdenes de magnitud superior a los cambios naturales de los periodos interglaciares.
```

### 2 — Comparación de magnitudes
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["magnitud", "comparacion"]

variables:
  datos: [
    ["Ciclos de Milankovitch", "natural"],
    ["Erupciones volcánicas masivas", "natural"],
    ["Actividad antropogénica actual", "antropogénico"]
  ]
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {datos[idx][0]} se clasifica históricamente como un cambio de tipo ___________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["natural", "antropogénico"]

explicacion: |
  Los ciclos orbitales (Milankovitch) y el vulcanismo son procesos naturales que han moldeado el clima por millones de años, a diferencia del forzamiento actual.
```

### 3 — El efecto invernadero en el registro geológico
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "geologia"]

variables:
  caso: uno_de([
    ["Paleoceno-Eoceno (PETM)", "máximo"],
    ["Glaciaciones del Pleistoceno", "mínimo"],
    ["Periodo Cretácico", "moderado"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el contexto del {caso[0]}, el aumento de CO2 provocó un cambio de magnitud ___________ en comparación con la variabilidad climática estándar del Holoceno."

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["máximo", "mínimo", "moderado"]

explicacion: |
  Eventos como el PETM muestran cambios rápidos de carbono, pero la velocidad actual de emisión de CO2 es excepcionalmente alta comparada con esos registros geológicos.
```

### 4 — Secuencia de factores de cambio climático
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["causalidad", "procesos"]

enunciado: "Ordene cronológicamente los factores que han dominado la variabilidad climática de la Tierra, desde el más lento al más rápido en su impacto actual:"

pasos:
  - "Identificar el ciclo de mayor duración (orbital)."
  - "Identificar el ciclo de duración media (tectónica/volcánica)."
  - "Identificar el factor de cambio instantáneo/decadal (antropogénico)."

opciones_explicitas: ["Ciclos de Milankovitch", "Actividad Volcánica", "Emisiones de GEI"]
respuesta: ["Ciclos de Milankovitch", "Actividad Volcánica", "Emisiones de GEI"]
tipo: ordenar

explicacion: |
  Los ciclos orbitales actúan en escalas de miles de años, el vulcanismo en años/décadas, y las emisiones actuales en escalas de décadas, superando la velocidad de ajuste natural.
```

### 5 — El umbral de CO2
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "concentracion"]

variables:
  escenario_co2: uno_de([
    ["420 ppm", "280"],
    ["300 ppm", "280"],
    ["280 ppm", "280"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si la concentración actual de CO2 es de {escenario_co2[0]} ppm, ¿cuál era la concentración promedio aproximada durante el periodo preindustrial (base de comparación histórica)?"

respuesta: escenario_co2[idx][1]
tipo: mc
opciones_explicitas: ["280 ppm", "350 ppm", "400 ppm"]

explicacion: |
  El nivel de 280 ppm es el estándar utilizado para representar el estado de equilibrio preindustrial antes de la era de la industrialización masiva.
```