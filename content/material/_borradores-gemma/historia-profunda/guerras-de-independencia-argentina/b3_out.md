### 1 — El Plan Continental
```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "estrategia", "independencia"]

respuesta: "Cruce de los Andes"
tipo: completar
respuestas_validas: ["Cruce de los Andes"]

enunciado: "Para asegurar la independencia de las Provincias Unidas, San Martín diseñó una estrategia para evitar el avance realista por el Alto Perú, optando por el ___."

explicacion: |
  San Martín comprendió que la vía terrestre hacia el norte (Alto Perú) era demasiado costosa y estaba fuertemente defendida. Su plan consistió en cruzar la cordillera hacia Chile para luego atacar el núcleo del poder español en el Pacífico.
```

### 2 — El objetivo de la Campaña de Chile
```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["san_martin", "chile", "batalla"]

variables:
  caso: uno_de([0, 1])

respuesta: uno_de([datos[caso][1]])
tipo: mc
opciones_explicitas: ["Batalla de Maipú", "Batalla de Chacabuco", "Batalla de San Francisco", "Batalla de Yungay"]

enunciado: "Tras la victoria en Chacabuco, la consolidación definitiva de la independencia de Chile fue sellada en la batalla de {datos[caso][0]}."

variables:
  datos: [["Maipú", "Batalla de Maipú"], ["Yungay", "Batalla de Yungay"]]

explicacion: |
  La Batalla de Maipú (1818) fue el enfrentamiento decisivo que consolidó la independencia de Chile y permitió a San Martín preparar la expedición al Perú.
```

### 3 — La liberación del Perú
```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "peru", "logistica"]

respuesta: "Protector"
tipo: mc
opciones_explicitas: ["Dictador", "Protector", "Presidente", "Libertador"]

enunciado: "Al llegar al Perú y establecerse en Lima, San Martín asumió un gobierno provisional con el título de ___."

explicacion: |
  San Martín asumió el cargo de Protector del Perú para organizar la transición hacia la independencia y consolidar el apoyo político y militar necesario.
```

### 4 — Orden cronológico de las campañas
```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["san_martin", "orden_cronologico"]

respuesta: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]
tipo: ordenar
opciones_explicitas: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]

enunciado: "Ordene cronológicamente los hitos de la estrategia continental de San Martín:"

explicacion: |
  La secuencia lógica fue: 1. El cruce de la cordillera para liberar Chile; 2. La consolidación en Chile (Maipú); 3. El desembarco y campaña en el Perú.
```

### 5 — El encuentro de los Libertadores
```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "bolivar", "guayaquil"]

respuesta: 1822
tipo: input
tolerancia_abs: 0

enunciado: "La famosa entrevista entre José de San Martín y Simón Bolívar, donde se discutió el futuro de la independencia americana, tuvo lugar en el año {año}."

variables:
  año: 1822

explicacion: |
  La Entrevista de Guayaquil en 1822 es uno de los eventos más enigmáticos de la historia, donde se definieron los pasos finales para la liberación definitiva del continente.
```