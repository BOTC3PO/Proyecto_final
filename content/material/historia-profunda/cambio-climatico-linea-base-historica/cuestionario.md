# Historia Profunda — Cambio climatico linea base historica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
respuestas_validas:
  - "excentricidad"
  - "oblicuidad"

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

respuesta_orden: ["Ciclos de Milankovitch (escala de milenios)", "Variaciones volcánicas menores (escala de años/décadas)", "Emisiones de gases de efecto invernadero actuales (escala de décadas)"]

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

tipo: mc
opciones_explicitas: ["isótopos de oxígeno", "isótopos de carbono", "niveles de salinidad", "densidad del aire"]

enunciado: "Para reconstruir la temperatura de hace miles de años, los científicos analizan los ___ atrapados en el hielo de los núcleos glaciares."

respuesta: "isótopos de oxígeno"

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

tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la temperatura media global histórica (línea de base) fuera de 14.0°C y la actual es de 15.5°C, ¿cuál es la magnitud de la anomalía térmica en grados Celsius?"

respuesta: 1.5

explicacion: |
  La anomalía se calcula restando el valor de la línea de base al valor actual: 15.5 - 14.0 = 1.5.
```

### 6 — Velocidad del cambio climático

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["velocidad", "comparacion"]

tipo: mc
opciones_explicitas: ["El ritmo de cambio es similar en ambos casos", "El cambio actual es mucho más rápido que los naturales", "El cambio actual es más lento debido a la tecnología", "No hay diferencia medible en la velocidad"]
respuesta: "El cambio actual es mucho más rápido que los naturales"
enunciado: "Al comparar el cambio climático actual con los ciclos naturales del pasado, la diferencia fundamental radica en la ____."
explicacion: |
  Mientras que los cambios climáticos naturales (como las glaciaciones) suelen ocurrir a lo largo de miles de años, el cambio climático antropogénico actual está ocurriendo en cuestión de décadas, una velocidad sin precedentes en la historia geológica.
```

### 7 — Escala temporal del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["escala_temporal", "comparacion"]

variables:
  datos: [["Natural", "milenios"], ["Actual", "décadas"]]
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas:
  - "milenios"
  - "décadas"
respuesta: datos[idx][1]

enunciado: "Si un cambio climático natural suele manifestarse en un periodo de {datos[idx][0]}, el cambio climático actual se manifiesta en un periodo de ___."

explicacion: |
  La escala temporal es la clave: pasar de escalas de milenios a escalas de décadas es lo que impide que los ecosistemas se adapten naturalmente.
```

### 8 — Comparativa de ritmos

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["ritmo", "comparacion"]

tipo: ordenar
opciones_explicitas: ["Ciclos climáticos naturales (lentos)", "Cambio climático antropogénico (rápido)"]
respuesta_orden: ["Ciclos climáticos naturales (lentos)", "Cambio climático antropogénico (rápido)"]

enunciado: "Ordena los procesos de menor a mayor velocidad de cambio climático:"

explicacion: |
  El orden correcto refleja la aceleración del proceso: desde los cambios geológicos lentos hasta la aceleración actual causada por la actividad humana.
```

### 9 — Análisis de la magnitud temporal

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["geologia", "velocidad"]

variables:
  datos: [["10000", "10"], ["5000", "50"], ["2000", "100"]]
  idx: uno_de([0, 1, 2])

tipo: completar
tolerancia_abs: 0
respuesta: datos[idx][1]

enunciado: "En un escenario donde un cambio natural tarda {datos[idx][0]} años, el cambio actual se estima que ocurre en aproximadamente ___ años."

pasos:
  - "Identificar la escala de tiempo natural proporcionada."
  - "Comparar con la escala de tiempo del cambio actual (décadas)."

explicacion: |
  El valor ingresado representa la escala de décadas que caracteriza la crisis climática actual frente a la escala de milenios de los procesos naturales.
```

### 10 — Verdadero o Falso: La velocidad

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["velocidad", "veracidad"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"

enunciado: "La característica distintiva del cambio climático actual frente a los eventos naturales del pasado es que su velocidad de ejecución es órdenes de magnitud mayor. ¿Es esto verdadero o falso?"

explicacion: |
  Es verdadero. La rapidez del calentamiento actual es el factor que genera la mayor preocupación para la biodiversidad y la estabilidad de la civilización.
```

### 11 — Reconstrucción por núcleos de hielo

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "nucleos_de_hielo"]

respuesta: "CO2"
tipo: mc
opciones_explicitas: ["CO2", "O2", "N2"]

enunciado: "Al analizar núcleos de hielo extraídos de la Antártida, los científicos analizan las burbujas de aire atrapadas en las capas de nieve para determinar la concentración histórica de ___ en la atmósfera."

explicacion: |
  Las burbujas de aire atrapadas en el hielo actúan como cápsulas del tiempo, permitiendo medir la composición química de la atmósfera de hace cientos de miles de años.
```

### 12 — Dendrocronología y anillos

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["dendrocronologia", "anillos_de_arboles"]

respuesta: "ancho del anillo"
tipo: completar
respuestas_validas:
  - "ancho del anillo"
  - "color del anillo"
  - "textura de la corteza"

enunciado: "En la dendrocronología, la variabilidad climática (como la temperatura o la precipitación) se refleja principalmente en el ___ de cada anillo anual."

explicacion: |
  Un anillo más ancho suele indicar condiciones de crecimiento favorables (más lluvia o temperaturas óptimas), mientras que uno estrecho indica condiciones de estrés ambiental.
```

### 13 — Secuencia de sedimentos oceánicos

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["sedimentos", "oceanografia"]

variables:
  isocapa: uno_de([0, 1])

respuesta_orden: ["Sedimentación de materia orgánica", "Acumulación de conchas de foraminíferos", "Deposición de partículas terrígenas"]
tipo: ordenar
opciones_explicitas: ["Sedimentación de materia orgánica", "Acumulación de conchas de foraminíferos", "Deposición de partículas terrígenas"]

enunciado: "Para reconstruir un perfil climático en un núcleo de sedimentos oceánicos, se deben analizar los eventos en orden cronológico. Ordena los procesos de formación de un estrato típico (de lo más antiguo a lo más reciente):"

explicacion: |
  El proceso implica la caída de partículas, la acumulación de restos biológicos y la sedimentación continua que forma las capas que luego se estudian.
```

### 14 — Relación temperatura y isótopos

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["isótopos", "oxigeno"]

respuesta: "18O"
tipo: mc
opciones_explicitas: ["12C", "14C", "18O", "16O"]

enunciado: "En paleoclimatología, la relación entre los isótopos de oxígeno de las conchas de foraminíferos en el fondo marino es un indicador clave de la temperatura global. El isótopo más pesado utilizado es el ___."

explicacion: |
  La proporción entre el oxígeno-18 (pesado) y el oxígeno-16 (ligero) en los sedimentos marinos permite calcular las temperaturas de los antiguos océanos.
```

### 15 — El método de los proxies

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["proxies", "metodologia"]

respuesta: "proxy"
tipo: completar
respuestas_validas:
  - "proxy"
  - "sensor"
  - "registro"

enunciado: "Dado que no existían termómetros en el pasado remoto, los científicos utilizan indicadores indirectos como los anillos de los árboles o los núcleos de hielo, denominados técnicamente como ___."

explicacion: |
  Un 'proxy' es una variable física, química o biológica que actúa como un sustituto de una variable climática que no se puede medir directamente.
```

### 16 — Niveles de CO2 y núcleos de hielo

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["paleoclimatologia", "co2"]

respuesta: "800000"
tipo: completar
respuestas_validas:
  - "800000"

enunciado: "Los registros obtenidos de núcleos de hielo indican que los niveles actuales de CO2 atmosférico son más altos que en cualquier momento de los últimos ___ años."

explicacion: |
  Los núcleos de hielo de la Antártida permiten reconstruir la composición atmosférica de eras pasadas. Los datos muestran que las concentraciones actuales superan los máximos de los últimos 800.000 años.
```

### 17 — Comparación de concentraciones

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "comparacion"]

respuesta: "Superior"
tipo: mc
opciones_explicitas: ["Superior", "Inferior"]

enunciado: "Considerando que los niveles de CO2 actuales son de aproximadamente 420 ppm y que los niveles históricos preindustriales eran de ~280 ppm, la situación actual es ________ respecto al pasado geológico reciente."

explicacion: |
  La concentración actual de CO2 es significativamente más alta que los niveles estables de los últimos milenios, rompiendo el ciclo natural de los últimos 800.000 años.
```

### 18 — El registro de los núcleos de hielo

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["metodologia", "paleoclimatologia"]

respuesta: "núcleos de hielo"
tipo: completar
respuestas_validas:
  - "núcleos de hielo"

enunciado: "Para determinar la concentración de gases atmosféricos en el pasado remoto, los científicos analizan las burbujas de aire atrapadas en los ___."

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo que preservan muestras directas de la atmósfera de hace cientos de miles de años.
```

### 19 — Secuencia de cambios atmosféricos

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["secuencia", "co2"]

respuesta_orden: ["Preindustrial", "Máximo glacial", "Actualidad"]
tipo: ordenar
opciones_explicitas: ["Preindustrial", "Máximo glacial", "Actualidad"]

enunciado: "Ordene cronológicamente (de lo más antiguo a lo más reciente) los estados de la concentración de CO2 según el registro de los últimos 800.000 años, considerando que el nivel actual es el más alto."

explicacion: |
  La secuencia refleja el aumento drástico desde los niveles preindustriales, pasando por las fluctuaciones de los periodos glaciares, hasta el pico antropogénico actual.
```

### 20 — Verdad o Falso: El límite histórico

```
metadata:
  materia: "historia_profucha"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["co2", "verdad_falso"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Es verdadero o falso que los niveles de CO2 actuales se encuentran dentro de los rangos naturales observados en los últimos 800.000 años registrados en los núcleos de hielo."

explicacion: |
  Es falso. Los niveles actuales han sobrepasado los límites naturales establecidos por los ciclos de hielo y deshielo de los últimos 800.000 años.
```

### 21 — Velocidad del calentamiento actual

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "velocidad"]

variables:
  escenario: uno_de([["un aumento de 2°C en 10,000 años", "0.0002"], ["un aumento de 2°C en 5,000 años", "0.0004"], ["un aumento de 2°C en 2,000 años", "0.001"]])

enunciado: "Considerando el escenario de un aumento de temperatura de {escenario[0]}, ¿cuál es la tasa de cambio anual aproximada en grados Celsius por año (expresada como decimal)?"

pasos:
  - "Identificar el cambio total de temperatura (2°C)."
  - "Dividir el cambio total por la cantidad de años para obtener la tasa anual."

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0.00001

explicacion: |
  La tasa se calcula dividiendo el cambio de temperatura entre el tiempo transcurrido. En el escenario actual, la velocidad es órdenes de magnitud superior a los cambios naturales de los periodos interglaciares.
```

### 22 — Comparación de magnitudes

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["magnitud", "comparacion"]

variables:
  datos: [["Ciclos de Milankovitch", "natural"], ["Erupciones volcánicas masivas", "natural"], ["Actividad antropogénica actual", "antropogénico"]]
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {datos[idx][0]} se clasifica históricamente como un cambio de tipo ___________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "natural"
  - "antropogénico"

explicacion: |
  Los ciclos orbitales (Milankovitch) y el vulcanismo son procesos naturales que han moldeado el clima por millones de años, a diferencia del forzamiento actual.
```

### 23 — El efecto invernadero en el registro geológico

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "geologia"]

variables:
  caso: uno_de([["Paleoceno-Eoceno (PETM)", "máximo"], ["Glaciaciones del Pleistoceno", "mínimo"], ["Periodo Cretácico", "moderado"]])

enunciado: "En el contexto del {caso[0]}, el aumento de CO2 provocó un cambio de magnitud ___________ en comparación con la variabilidad climática estándar del Holoceno."

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["máximo", "mínimo", "moderado"]

explicacion: |
  Eventos como el PETM muestran cambios rápidos de carbono, pero la velocidad actual de emisión de CO2 es excepcionalmente alta comparada con esos registros geológicos.
```

### 24 — Secuencia de factores de cambio climático

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
respuesta_orden: ["Ciclos de Milankovitch", "Actividad Volcánica", "Emisiones de GEI"]
tipo: ordenar

explicacion: |
  Los ciclos orbitales actúan en escalas de miles de años, el vulcanismo en años/décadas, y las emisiones actuales en escalas de décadas, superando la velocidad de ajuste natural.
```

### 25 — El umbral de CO2

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "concentracion"]

variables:
  escenario_co2: uno_de([["420 ppm", "280"], ["300 ppm", "280"], ["280 ppm", "280"]])

enunciado: "Si la concentración actual de CO2 es de {escenario_co2[0]}, ¿cuál era la concentración promedio aproximada durante el periodo preindustrial (base de comparación histórica)?"

respuesta: "280 ppm"
tipo: mc
opciones_explicitas: ["280 ppm", "350 ppm", "400 ppm"]

explicacion: |
  El nivel de 280 ppm es el estándar utilizado para representar el estado de equilibrio preindustrial antes de la era de la industrialización masiva.
```
