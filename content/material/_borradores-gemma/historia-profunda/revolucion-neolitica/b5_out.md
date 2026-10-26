### 1 — Origen de la agricultura
```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen"]

variables:
  escenario: uno_de([["Creciente Fértil", "Oriente Próximo"], ["China", "Río Amarillo"], ["Mesoamérica", "México"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Oriente Próximo", "Río Amarillo", "México"]

enunciado: "La domesticación de cereales como el trigo y la cebada ocurrió principalmente en la región de {escenario[idx][0]}."

explicacion: |
  La región del Creciente Fértil fue el núcleo de la revolución neolítica, permitiendo el sedentarismo gracias al cultivo de cereales.
```

### 2 — Domesticación del maíz
```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["america", "maiz"]

variables:
  escenario: uno_de([["Mesoamérica", "maíz"], ["Andes", "papa"], ["China", "arroz"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["maíz", "papa", "arroz"]

enunciado: "En la región de {escenario[idx][0]}, el cultivo fundamental que transformó la dieta humana fue el ___."

explicacion: |
  El maíz es el pilar de la agricultura en Mesoamérica, derivado del teosinte.
```

### 3 — El proceso de sedentarización
```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["nomadismo", "sedentarismo"]

variables:
  escenario: uno_de([["Nómadas", "recolectores"], ["Sedentarios", "agricultores"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["agricultores"]

enunciado: "Antes de la revolución neolítica, los grupos humanos eran mayoritariamente ___; tras la domesticación de plantas, se convirtieron en ___."

explicacion: |
  La capacidad de producir alimento permitió que los grupos humanos dejaran de desplazarse constantemente.
```

### 4 — Centros de domesticación
```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "cultivos"]

variables:
  escenario: uno_de([["China", "arroz"], ["Andes", "papa"], ["Creciente Fértil", "trigo"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["arroz", "papa", "trigo"]

enunciado: "Si un arqueólogo encuentra restos de tubérculos domesticados en la zona de {escenario[idx][0]}, lo más probable es que se trate de ___."

explicacion: |
  La domesticación de la papa es un proceso clave que ocurrió en la región andina.
```

### 5 — Secuencia de la revolución
```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]

enunciado: "Ordena cronológicamente los procesos que definen la transición del Paleolítico al Neolítico:"

explicacion: |
  Primero se recolectaba, luego se domesticó la especie, lo que permitió el sedentarismo y finalmente la creación de excedentes que permitieron la especialización del trabajo.
```