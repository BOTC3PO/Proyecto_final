### 1 — Domesticación de cereales
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "cereales"]

variables:
  escenario: uno_de([["Creciente Fértil", "trigo y cebada"], ["Mesoamérica", "maíz"]])
  cereales: escenario[1]

respuesta: escenario[1][0]
tipo: mc
opciones_explicitas: ["trigo y cebada", "maíz", "papa", "arroz"]

enunciado: "En la región del {escenario[0]}, los primeros agricultores se especializaron en el cultivo de {cereales[0]} y {cereales[1]}."

explicacion: |
  En el Creciente Fértil (Mesopotamia y Levante), el trigo y la cebada fueron los pilares de la agricultura neolítica.
```

### 2 — Domesticación animal
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["ganaderia", "animales"]

variables:
  animal_base: uno_de([["oveja", "cabras"], ["vaca", "cerdos"]])

respuesta: animal_base[0]
tipo: mc
opciones_explicitas: ["oveja", "vaca", "cerdo", "caballo"]

enunciado: "Uno de los animales más importantes para la obtención de lana y carne en el Neolítico fue la {animal_base[0]}."

explicacion: |
  La domesticación de la oveja permitió no solo alimento, sino también fibras textiles para la vestimenta.
```

### 3 — Tubérculos andinos
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["america", "papa"]

respuesta: ["papa"]
respuestas_validas: ["papa"]
tipo: completar

enunciado: "A diferencia de los cereales de Eurasia, en la región de los Andes el cultivo fundamental fue la ___."

explicacion: |
  La papa fue el cultivo base de las civilizaciones andinas, permitiendo el asentamiento en zonas de altura.
```

### 4 — Secuencia de domesticación
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

respuesta: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos"]
tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos", "Comercio de excedentes"]

enunciado: "Ordena los pasos que permitieron la transición de la recolección a la agricultura intensiva:"

explicacion: |
  Primero se recolectaban granos, luego se seleccionaban las mejores semillas para la siguiente siembra, consolidando el cultivo.
```

### 5 — Impacto demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["consecuencias", "poblacion"]

variables:
  cambio: uno_de([["aumento", "crecimiento"], ["disminución", "caída"]])

respuesta: cambio[0]
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "variación"]

enunciado: "La capacidad de producir excedentes alimentarios provocó un {cambio} de la población humana."

explicacion: |
  La agricultura permitió alimentar a más personas en un mismo territorio, lo que derivó en un crecimiento demográfico sostenido.
```