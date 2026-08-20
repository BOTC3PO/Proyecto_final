### 1 — El motor de la tectónica
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "manto", "conveccion"]

respuesta: "corrientes de convección"
tipo: completar
respuestas_validas: ["corrientes de convección", "convección"]

enunciado: "El movimiento de las placas tectónicas es impulsado principalmente por las ___ en el manto terrestre."

explicacion: |
  El calor interno de la Tierra genera corrientes de convección en el manto, donde el material caliente asciende y el frío desciende, moviendo las placas superficiales.
```

### 2 — Origen del movimiento
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["calor", "manto", "energia"]

respuesta: uno_de([0, 1, 2])[idx][1]
tipo: mc
opciones_explicitas: ["El calor interno de la Tierra", "La rotación del planeta", "La atracción lunar"]

variables:
  idx: uno_de([0, 1, 2])

enunciado: "La causa fundamental que desencadena las corrientes de convección en el manto es {uno_de(['el calor interno de la Tierra', 'la rotación del planeta', 'la atracción lunar'])}."

explicacion: |
  El gradiente térmico (diferencia de temperatura) entre el núcleo y la corteza es la fuente de energía que mueve el manto.
```

### 3 — Dinámica del manto
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["manto", "conveccion", "densidad"]

respuesta: "ascendente"
tipo: completar
respuestas_validas: ["ascendente", "hacia arriba"]

enunciado: "En una celda de convección, el material del manto que es menos denso debido al calor se desplaza de forma ___."

explicacion: |
  El material caliente es menos denso y asciende hacia la litosfera, mientras que el material frío y denso desciende.
```

### 4 — Relación temperatura-densidad
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["densidad", "termodinamica"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿El aumento de la temperatura en el material del manto provoca una disminución de su densidad, facilitando el ascenso del material?"

explicacion: |
  Efectivamente, la expansión térmica reduce la densidad, lo que genera el movimiento ascendente característico de la convección.
```

### 5 — Secuencia del proceso convectivo
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["proceso", "secuencia", "conveccion"]

respuesta: ["Calentamiento del manto", "Reducción de densidad", "Ascenso de material", "Desplazamiento de la placa"]
tipo: ordenar
opciones_explicitas: ["Calentamiento del manto", "Reducción de densidad", "Ascenso de material", "Desplazamiento de la placa", "Enfriamiento de la placa", "Descenso de material"]

enunciado: "Ordena la secuencia lógica de un ciclo de convección que resulta en el movimiento de una placa tectónica:"

pasos:
  - "El núcleo transfiere calor al manto."
  - "El material se expande y se vuelve menos denso."
  - "El material caliente sube hacia la litosfera."
  - "La fricción y el arrastre mueven la placa superficial."

explicacion: |
  La secuencia comienza con la transferencia de calor, sigue con el cambio físico de las propiedades del material (densidad), el movimiento fluido (ascenso) y finalmente el efecto mecánico sobre la litosfera.
```