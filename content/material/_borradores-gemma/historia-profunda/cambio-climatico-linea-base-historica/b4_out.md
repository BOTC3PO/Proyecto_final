### 1 — Niveles de CO2 y núcleos de hielo
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["paleoclimatologia", "co2"]

respuesta: "800000"
tipo: completar
respuestas_validas: ["800000"]

enunciado: "Los registros obtenidos de núcleos de hielo indican que los niveles actuales de CO2 atmosférico son más altos que en cualquier momento de los últimos ___ años."

explicacion: |
  Los núcleos de hielo de la Antártida permiten reconstruir la composición atmosférica de eras pasadas. Los datos muestran que las concentraciones actuales superan los máximos de los últimos 800.000 años.
```

### 2 — Comparación de concentraciones
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[420, "Superior"], [280, "Inferior"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Superior", "Inferior"]

enunciado: "Considerando que los niveles de CO2 actuales son de aproximadamente {datos[escenario_idx][0]} ppm y que los niveles históricos preindustriales eran de ~280 ppm, la situación actual es ________ respecto al pasado geológico reciente."

explicacion: |
  La concentración actual de CO2 es significativamente más alta que los niveles estables de los últimos milenios, rompiendo el ciclo natural de los últimos 800.000 años.
```

### 3 — El registro de los núcleos de hielo
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["metodologia", "paleoclimatologia"]

respuesta: "núcleos de hielo"
tipo: completar
respuestas_validas: ["núcleos de hielo"]

enunciado: "Para determinar la concentración de gases atmosféricos en el pasado remoto, los científicos analizan las burbujas de aire atrapadas en los ___."

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo que preservan muestras directas de la atmósfera de hace cientos de miles de años.
```

### 4 — Secuencia de cambios atmosféricos
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["secuencia", "co2"]

respuesta: ["Preindustrial", "Máximo glacial", "Actualidad"]
tipo: ordenar
opciones_explicitas: ["Preindustrial", "Máximo glacial", "Actualidad"]

enunciado: "Ordene cronológicamente (de lo más antiguo a lo más reciente) los estados de la concentración de CO2 según el registro de los últimos 800.000 años, considerando que el nivel actual es el más alto."

explicacion: |
  La secuencia refleja el aumento drástico desde los niveles preindustriales, pasando por las fluctuaciones de los periodos glaciares, hasta el pico antropogénico actual.
```

### 5 — Verdad o Falso: El límite histórico
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