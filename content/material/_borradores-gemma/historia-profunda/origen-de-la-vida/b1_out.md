### 1 — El caldo primordial
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["abiogenesis", "hipotesis_oparin"]

enunciado: "Según la hipótesis de Oparin y Haldane, la atmósfera primitiva de la Tierra carecía de ciertos gases que hoy son comunes. ¿Cuál de los siguientes gases NO formaba parte de esa atmósfera reductora?"

opciones_explicitas: ["Metano", "Amoníaco", "Oxígeno", "Hidrógeno"]
respuesta: "Oxígeno"
tipo: "mc"

explicacion: |
  La atmósfera primitiva era reductora y carecía de oxígeno libre (O2), ya que este solo apareció masivamente después de la fotosíntesis oxigénica.
```

### 2 — Experimento de Miller-Urey
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["miller_urey", "aminoacidos"]

variables:
  idx: uno_de([0,1])

enunciado: "En el famoso experimento de Miller y Urey, se simularon las condiciones de la Tierra primitiva mediante descargas eléctricas. El resultado principal fue la formación de {datos[idx][0]} a partir de sustancias inorgánicas."

variables:
  datos: [["aminoácidos", "aminoácidos"], ["nucleótidos", "nucleótidos"]]
  idx: uno_de([0,1])

respuesta: "aminoácidos"
tipo: "mc"
opciones_explicitas: ["aminoácidos", "nucleótidos"]

explicacion: |
  El experimento demostró que la síntesis de moléculas orgánicas simples como los aminoácidos es posible a partir de gases inorgánicos y energía.
```

### 3 — El mundo del ARN
```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["rna_world", "genetica"]

enunciado: "La hipótesis del 'Mundo del ARN' sugiere que antes de la aparición del ADN y las proteínas, el ___ cumplía la función de almacenar información genética y catalizar reacciones químicas."

respuestas_validas: ["ARN"]
respuesta: "ARN"
tipo: "completar"

explicacion: |
  Se cree que el ARN fue la primera molécula autorreplicante debido a su capacidad de actuar tanto como material genético como enzima (ribozimas).
```

### 4 — Secuencia de la complejidad química
```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["evolucion_quimica", "orden"]

enunciado: "Ordena correctamente los procesos de la evolución química, desde la materia más simple hasta la vida:"

opciones_explicitas: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
respuesta: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
tipo: "ordenar"

explicacion: |
  La evolución química implica un aumento gradual de la complejidad: de átomos y gases a moléculas pequeñas, luego cadenas largas y finalmente estructuras con membrana.
```

### 5 — El primer metabolismo
```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["quimiosintesis", "metabolismo"]

variables:
  escenario: uno_de([0,1])

enunciado: "En las fuentes hidrotermales del fondo oceánico, la vida pudo haber comenzado mediante un proceso de ___ que utilizaba la energía química de los minerales."

variables:
  escenario: uno_de([0,1])
  opciones: [["quimiosíntesis", "fotosíntesis"], ["quimiosíntesis", "fotosíntesis"]]

respuestas_validas: ["quimiosíntesis"]
respuesta: "quimiosíntesis"
tipo: "completar"

explicacion: |
  Antes de la fotosíntesis, los primeros organismos probablemente obtenían energía de las reacciones redox de compuestos inorgánicos en las chimeneas hidrotermales.
```