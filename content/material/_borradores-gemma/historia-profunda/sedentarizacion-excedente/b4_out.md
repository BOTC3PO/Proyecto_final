### 1 — El impacto de la sedentarización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "poblacion"]

respuesta: "crecimiento"
tipo: completar
respuestas_validas: ["crecimiento"]

enunciado: "La transición de la vida nómada a la sedentarización favoreció el ___ poblacional debido a la estabilidad en el suministro de alimentos."

explicacion: |
  Al establecerse en un lugar fijo y cultivar alimentos, las comunidades pudieron asegurar un suministro constante, lo que permitió que la población creciera de forma sostenida.
```

### 2 — Consecuencia de la agricultura
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["aldeas", "asentamientos"]

opciones_explicitas: ["Asentamientos temporales", "Aldeas permanentes", "Migraciones constantes"]
respuesta: "Aldeas permanentes"
tipo: mc

enunciado: "La capacidad de producir excedentes agrícolas permitió que los grupos humanos abandonaran el nomadismo y fundaran:"

explicacion: |
  El excedente de comida permitió que las personas no tuvieran que desplazarse constantemente en busca de alimento, dando origen a las primeras aldeas permanentes.
```

### 3 — Factores del crecimiento demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["nutrición", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "Considerando el escenario de {escenarios[escenario_idx][0]}, el factor principal que impulsó el aumento de la población fue {escenarios[escenario_idx][1]}."

variables:
  escenarios: [["estabilidad de recursos", "una mejor nutrición en cantidad"], ["excedente de granos", "la reducción de la mortalidad infantil"]]

respuesta: "uno_de([escenarios[escenario_idx][1]])"
tipo: mc
opciones_explicitas: ["una mejor nutrición en cantidad", "la reducción de la mortalidad infantil"]

explicacion: |
  La estabilidad en el suministro de recursos y una nutrición más constante son pilares fundamentales para el crecimiento demográfico en la era neolítica.
```

### 4 — Secuencia de la Revolución Neolítica
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

opciones_explicitas: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
respuesta: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron la transición hacia la vida sedentaria:"

explicacion: |
  Primero se desarrolla la agricultura, esto genera un excedente de comida, lo que finalmente permite que los asentamientos se vuelvan permanentes.
```

### 5 — El excedente y la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

respuesta: "verdadero"
tipo: vf

enunciado: "¿El excedente de alimentos permitió que no todos los miembros de la aldea tuvieran que dedicarse a la agricultura, dando paso a la especialización del trabajo?"

explicacion: |
  Exacto. Al haber comida de sobra (excedente), algunas personas pudieron dedicarse a otras tareas como la alfarería, la metalurgia o la administración.
```