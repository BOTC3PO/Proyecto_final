### 1 — Velocidad del cambio climático
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["velocidad", "comparacion"]

tipo: mc
opciones_explicitas: ["El ritmo de cambio es similar en ambos casos", "El cambio actual es mucho más rápido que los naturales", "El cambio actual es más lento debido a la tecnología", "No hay diferencia medible en la velocidad"]

enunciado: "Al comparar el cambio climático actual con los ciclos naturales del pasado, la diferencia fundamental radica en la ____."

explicacion: |
  Mientras que los cambios climáticos naturales (como las glaciaciones) suelen ocurrir a lo largo de miles de años, el cambio climático antropogénico actual está ocurriendo en cuestión de décadas, una velocidad sin precedentes en la historia geológica.
```

### 2 — Escala temporal del cambio
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["escala_temporal", "comparacion"]

variables:
  escenario: uno_de([["Natural", "milenios"], ["Actual", "décadas"]])
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas: ["milenios", "décadas"]
respuesta: escenario[idx][1]

enunciado: "Si un cambio climático natural suele manifestarse en un periodo de {escenario[idx][0]}, el cambio climático actual se manifiesta en un periodo de ___."

explicacion: |
  La escala temporal es la clave: pasar de escalas de milenios a escalas de décadas es lo que impide que los ecosistemas se adapten naturalmente.
```

### 3 — Comparativa de ritmos
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["ritmo", "comparacion"]

tipo: ordenar
opciones_explicitas: ["Ciclos climáticos naturales (lentos)", "Cambio climático antropogénico (rápido)"]
respuesta: ["Ciclos climáticos naturales (lentos)", "Cambio climático antropogénico (rápido)"]

enunciado: "Ordena los procesos de menor a mayor velocidad de cambio climático:"

explicacion: |
  El orden correcto refleja la aceleración del proceso: desde los cambios geológicos lentos hasta la aceleración actual causada por la actividad humana.
```

### 4 — Análisis de la magnitud temporal
```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["geologia", "velocidad"]

variables:
  datos: [["10000", "10"], ["5000", "50"], ["2000", "100"]]
  idx: uno_de([0, 1, 2])

tipo: input
tolerancia_abs: 0
respuesta: datos[idx][1]

enunciado: "En un escenario donde un cambio natural tarda {datos[idx][0]} años, el cambio actual se estima que ocurre en aproximadamente ___ años."

pasos:
  - "Identificar la escala de tiempo natural proporcionada."
  - "Comparar con la escala de tiempo del cambio actual (décadas)."

explicacion: |
  El valor ingresado representa la escala de décadas que caracteriza la crisis climática actual frente a la escala de milenios de los procesos naturales.
```

### 5 — Verdadero o Falso: La velocidad
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