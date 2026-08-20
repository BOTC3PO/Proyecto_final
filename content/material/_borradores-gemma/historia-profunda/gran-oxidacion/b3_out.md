### 1 — Consecuencia biológica de la Gran Oxidación
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["evolucion", "oxigeno"]

respuesta: "aeróbicos"
tipo: completar
respuestas_validas: ["aeróbicos"]

enunciado: "La acumulación de oxígeno en la atmósfera tras la Gran Oxidación permitió la evolución de organismos de tipo ___."

explicacion: |
  La presencia de oxígeno libre permitió que los organismos desarrollaran la respiración aeróbica, un proceso mucho más eficiente para obtener energía que la fermentación.
```

### 2 — Impacto en la complejidad de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["complejidad", "oxigeno"]

opciones_explicitas: ["Organismos unicelulares simples", "Formas de vida más complejas y de mayor tamaño", "Vida basada exclusivamente en el metano", "Ausencia total de vida orgánica"]

respuesta: "Formas de vida más complejas y de mayor tamaño"
tipo: mc

enunciado: "El oxígeno liberado durante la Gran Oxidación sentó las bases para el surgimiento de:"

explicacion: |
  Al ser la respiración aeróbica mucho más eficiente energéticamente, permitió que los organismos tuvieran el excedente de energía necesario para mantener estructuras corporales más grandes y complejas.
```

### 3 — El rol del oxígeno en la evolución
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["metabolismo", "oxigeno"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Limitación energética", "Aumento de la eficiencia energética", "Reducción del tamaño celular", "Extinción de la vida multicelular"]

enunciado: "Considerando el impacto metabólico de la Gran Oxidación, el oxígeno permitió un {resultado}."

pasos:
  - "Analizar la diferencia entre metabolismo anaeróbico y aeróbico."
  - "Relacionar la eficiencia energética con el tamaño del organismo."

variables_contexto:
  tabla: [
    ["Limitación energética", "Limitación energética"],
    ["Aumento de la eficiencia energética", "Aumento de la eficiencia energética"]
  ]
  resultado: uno_de(["Limitación energética", "Aumento de la eficiencia energética"])

explicacion: |
  La oxidación de la glucosa en presencia de oxígeno produce muchísima más energía (ATP) que los procesos anaeróbicos, permitiendo la multicelularidad.
```

### 4 — Secuencia de la Gran Oxidación
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]

respuesta: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos derivados de la actividad de los cianobacterias:"

explicacion: |
  Primero se produce el oxígeno por fotosíntesis, luego este se acumula en la atmósfera al saturarse los sumideros químicos, lo que permite la respiración aeróbica y finalmente la complejidad biológica.
```

### 5 — El cambio en la atmósfera
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno"]

respuesta: "oxígeno"
tipo: completar
respuestas_validas: ["oxígeno"]

enunciado: "El gas liberado masivamente que transformó la química de la Tierra fue el ___."

explicacion: |
  La liberación de oxígeno por parte de los organismos fotosintéticos cambió la composición química de la atmósfera primitiva.
```