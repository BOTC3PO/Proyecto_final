### 1 — El objetivo del Cruce
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["san_martin", "cruce_de_los_andes", "independencia"]

respuesta: "Chile"
tipo: mc
opciones_explicitas: ["Chile", "Perú", "Bolivia", "Uruguay"]

enunciado: "El General José de San Martín organizó el Cruce de los Andes con el objetivo principal de liberar el territorio de {pais} para asegurar la independencia de las Provincias Unidas."

variables:
  pais: "uno_de(['Chile', 'Chile', 'Chile'])"

explicacion: |
  La estrategia de San Martín consistía en cruzar la cordillera para liberar Chile y, desde allí, organizar una campaña marítima hacia el Perú, el centro del poder realista en Sudamérica.
```

### 2 — Logística del Cruce
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["logistica", "ejercito_de_los_andes"]

respuesta: 5000
tipo: input
tolerancia_abs: 500

enunciado: "Se estima que el Ejército de los Andes contaba con aproximadamente {cantidad} soldados durante la campaña de 1817."

pasos:
  - "Calcular el número aproximado de efectivos según las crónicas históricas."

variables:
  cantidad: "5000"

explicacion: |
  El Ejército de los Andes estaba compuesto por aproximadamente 5000 hombres, entre soldados, oficiales y auxiliares, que enfrentaron condiciones climáticas extremas.
```

### 3 — La estrategia de San Martín
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["estrategia", "plan_continental"]

respuesta: [
  "Guerra de Zapa",
  "Cruce de los Andes",
  "Batalla de Chacabuco"
]
tipo: ordenar
opciones_explicitas: [
  "Guerra de Zapa",
  "Cruce de los Andes",
  "Batalla de Chacabuco",
  "Batalla de Maipú"
]

enunciado: "Ordene cronológicamente las fases de la campaña libertadora de San Martín hacia el oeste:"

explicacion: |
  Primero se realizó la 'Guerra de Zapa' (espionaje y desinformación), luego el cruce físico de la cordillera y finalmente el enfrentamiento decisivo en la Batalla de Chacabuco.
```

### 4 — El Plan Continental
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["plan_continental", "peru"]

respuesta: "Perú"
tipo: completar
respuestas_validas: ["Perú"]

enunciado: "Tras la liberación de Chile, San Martín comprendió que la independencia de la región solo sería segura si lograba expulsar a los españoles de ___."

explicacion: |
  El Plan Continental de San Martín contemplaba que el núcleo del poder español estaba en el Virreinato del Perú, por lo que la campaña debía dirigirse hacia ese territorio.
```

### 5 — El impacto de la victoria
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["batalla_de_chacabuco", "victoria"]

respuesta: "verdadero"
tipo: vf

enunciado: "¿La victoria en la Batalla de Chacabuco (12 de febrero de 1817) fue una consecuencia directa del éxito del Cruce de los Andes? {resultado}"

variables:
  resultado: "uno_de(['verdadero', 'falso'])"

explicacion: |
  Efectivamente, el éxito de la maniobra de cruce permitió sorprender a las fuerzas realistas y asegurar la victoria en Chacabuco, abriendo el camino para la independencia de Chile.
```