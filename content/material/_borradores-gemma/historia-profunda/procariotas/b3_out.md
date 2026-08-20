### 1 — ¿Qué son los estromatolitos?
```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estromatolitos", "cianobacterias", "fósiles"]

tipo: mc
opciones_explicitas: ["Estructuras minerales formadas por la actividad de colonias de microorganismos", "Restos fósiles de animales marinos del periodo Cámbrico", "Células procariotas individuales preservadas en ámbar", "Depósitos de azufre volcánico de origen abiótico"]

enunciado: "Los estromatolitos se definen como ___."

explicacion: |
  Los estromatolitos son estructuras sedimentarias compuestas por capas de carbonato de calcio, formadas por la actividad de comunidades de microorganismos, principalmente cianobacterias, que atrapan sedimentos y precipitan minerales.
```

### 2 — Evidencia de vida temprana
```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["evidencia", "fósiles", "precámbrico"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Estructuras laminares de carbonato", "Huellas de trilobites", "Fósiles de plantas vasculares", "Células con núcleo definido"]

enunciado: "En el registro fósil, la presencia de {datos[escenario_idx][0]} es una de las principales evidencias de la existencia de vida procariota en la Tierra primitiva."

pasos:
  - "Identificar el tipo de estructura fósil mencionada."
  - "Relacionar la estructura con el tipo de organismo que la originó."

explicacion: |
  Las estructuras laminares de carbonato (estromatolitos) son la evidencia más antigua de actividad biológica, indicando la presencia de organismos fotosintéticos en el Precámbrico.

variables:
  datos: [["Estructuras laminares de carbonato", "Estructuras laminares de carbonato"], ["Microfósiles de algas", "Microfósiles de algas"]]
```

### 3 — El rol de la fotosíntesis
```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["fotosíntesis", "oxígeno", "atmósfera"]

tipo: completar
respuestas_validas: ["oxígeno", "CO2", "nitrógeno"]

enunciado: "La actividad fotosintética de las cianobacterias en los estromatolitos fue responsable de la acumulación de ___ en la atmósfera primitiva."

explicacion: |
  La fotosíntesis oxigénica realizada por las cianobacterias permitió la Gran Oxidación, cambiando la composición química de la atmósfera terrestre.
```

### 4 — Cronología de la vida procariota
```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "avanzado"
  tags: ["cronología", "evolución", "estromatolitos"]

tipo: ordenar
opciones_explicitas: ["Aparición de vida procariota", "Formación de los primeros estromatolitos", "Gran Oxidación atmosférica", "Aparición de células eucariotas"]

enunciado: "Ordene cronológicamente los siguientes eventos en la historia de la vida procariota y la atmósfera:"

explicacion: |
  La secuencia correcta comienza con la vida procariota simple, seguida de la formación de estromatolitos que permitieron la fotosíntesis masiva, lo que llevó a la Gran Oxidación, permitiendo finalmente la evolución de células más complejas.
```

### 5 — Composición de un estromatolito
```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["composición", "biología", "geología"]

tipo: input
tolerancia_abs: 0

enunciado: "Si un estromatolito está compuesto por una matriz de carbonato de calcio y una capa de sedimentos, ¿cuántos componentes principales se mencionan en esta descripción simple? (Responda con el número entero)"

explicacion: |
  En la descripción se mencionan dos componentes: carbonato de calcio y sedimentos.

respuesta: 2
```