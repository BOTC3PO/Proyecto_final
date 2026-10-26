### 1 — Reconstrucción por núcleos de hielo
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "nucleos_de_hielo"]

variables:
  gas_atrapado: uno_de(["CO2", "O2", "N2"])

respuesta: gas_atrapado
tipo: mc
opciones_explicitas: ["CO2", "O2", "N2"]

enunciado: "Al analizar núcleos de hielo extraídos de la Antártida, los científicos analizan las burbujas de aire atrapadas en las capas de nieve para determinar la concentración histórica de ___ en la atmósfera."

explicacion: |
  Las burbujas de aire atrapadas en el hielo actúan como cápsulas del tiempo, permitiendo medir la composición química de la atmósfera de hace cientos de miles de años.
```

### 2 — Dendrocronología y anillos
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["dendrocronologia", "anillos_de_arboles"]

respuesta: "ancho del anillo"
tipo: completar
respuestas_validas: ["ancho del anillo", "color del anillo", "textura de la corteza"]

enunciado: "En la dendrocronología, la variabilidad climática (como la temperatura o la precipitación) se refleja principalmente en el ___ de cada anillo anual."

explicacion: |
  Un anillo más ancho suele indicar condiciones de crecimiento favorables (más lluvia o temperaturas óptimas), mientras que uno estrecho indica condiciones de estrés ambiental.
```

### 3 — Secuencia de sedimentos oceánicos
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["sedimentos", "oceanografia"]

variables:
  isocapa: uno_de([0, 1])

respuesta: isocapa
tipo: ordenar
opciones_explicitas: ["Sedimentación de materia orgánica", "Acumulación de conchas de foraminíferos", "Deposición de partículas terrígenas"]

enunciado: "Para reconstruir un perfil climático en un núcleo de sedimentos oceánicos, se deben analizar los eventos en orden cronológico. Ordena los procesos de formación de un estrato típico (de lo más antiguo a lo más reciente):"

explicacion: |
  El proceso implica la caída de partículas, la acumulación de restos biológicos y la sedimentación continua que forma las capas que luego se estudian.
```

### 4 — Relación temperatura y isótopos
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

### 5 — El método de los proxies
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["proxies", "metodologia"]

respuesta: "proxy"
tipo: completar
respuestas_validas: ["proxy", "sensor", "registro"]

enunciado: "Dado que no existían termómetros en el pasado remoto, los científicos utilizan indicadores indirectos como los anillos de los árboles o los núcleos de hielo, denominados técnicamente como ___."

explicacion: |
  Un 'proxy' es una variable física, química o biológica que actúa como un sustituto de una variable climática que no se puede medir directamente.
```