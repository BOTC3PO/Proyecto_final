### 1 — Concepto de Medida de Tendencia Central
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["vocabulario", "estadistica"]

respuesta: "promedio"
tipo: completar
respuestas_validas: ["promedio", "media", "media_aritmetica"]

enunciado: "El valor que representa el centro de un conjunto de datos numéricos, calculado sumando todos los valores y dividiendo por la cantidad de ellos, se conoce como ___."

explicacion: |
  El promedio (o media aritmética) es la medida de tendencia central más utilizada para resumir un conjunto de datos en un solo valor representativo.
```

### 2 — Interpretación de la Dispersión
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion", "variabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: uno_de([
    ["10", "11", "10", "11", "10"], 
    ["10", "20", "0", "30", "10"]
  ])
  desviacion_esperada: uno_de([
    "baja", 
    "alta"
  ])

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si observamos un conjunto de datos donde los valores están muy alejados de la media, la variabilidad o desviación estándar se considera de magnitud ___."

explicacion: |
  Una desviación estándar alta indica que los datos están muy dispersos respecto a la media, mientras que una baja indica que los datos están agrupados cerca del promedio.
```

### 3 — Veracidad de la Mediana
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "ordenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la mediana es el valor que ocupa la posición central cuando los datos están ordenados de menor a mayor?"

explicacion: |
  Correcto. La mediana divide la distribución en dos partes iguales, con el 50% de los datos por debajo y el 50% por encima.
```

### 4 — Secuencia del Análisis Descriptivo
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["recoleccion", "limpieza", "calculo", "interpretacion"]
tipo: ordenar
opciones_explicitas: ["recoleccion", "limpieza", "calculo", "interpretacion"]

enunciado: "Ordene cronológicamente los pasos lógicos para realizar un análisis estadístico riguroso de los resultados obtenidos en una investigación:"

explicacion: |
  Primero se recolectan los datos, luego se limpian (eliminando errores), se realizan los cálculos estadísticos y finalmente se interpretan los resultados.
```

### 5 — Identificación de la Moda
```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

enunciado: "La moda se define como el valor que presenta la mayor ___ dentro de un conjunto de datos."

explicacion: |
  La moda es el valor que más veces se repite en una muestra o población.
```