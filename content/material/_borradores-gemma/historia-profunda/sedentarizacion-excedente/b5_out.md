### 1 — Causa y efecto de la agricultura
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

variables:
  escenario: uno_de([["el cultivo de cereales permitió almacenar comida", "la sedentarización"], ["la domesticación de animales generó excedentes", "el aumento de la población"], ["el control del riego aseguró cosechas", "la formación de los primeros asentamientos"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["la sedentarización", "el aumento de la población", "la formación de los primeros asentamientos"]

enunciado: "Si consideramos que {escenario[idx][0]}, el efecto directo fue ___."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que los grupos humanos dejaran de ser nómadas y se establecieran en lugares fijos.
```

### 2 — El excedente y la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

variables:
  datos: [["excedente alimentario", "especialización del trabajo"], ["excedente alimentario", "aparición de jerarquías"], ["excedente alimentario", "desarrollo del comercio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["especialización del trabajo", "aparición de jerarquías", "desarrollo del comercio"]

enunciado: "Cuando una sociedad logra un {datos[idx][0]}, surge como consecuencia la ___."

explicacion: |
  Al no tener que dedicar todo el tiempo a la búsqueda de alimento, algunos individuos pudieron dedicarse a otras tareas como la artesanía, la metalurgia o la administración.
```

### 3 — Secuencia de la revolución neolítica
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["secuencia", "neolitico"]

respuesta: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  La secuencia lógica comienza con la transformación de la dieta (domesticación), que genera sobras de comida (excedente), lo que permite vivir en un sitio fijo (sedentarización) y finalmente la división de clases (estratificación).
```

### 4 — Consecuencias de la vida sedentaria
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarismo", "poblacion"]

variables:
  caso: uno_de([["el sedentarismo"], ["la agricultura"], ["el excedente"]])
  idx: uno_de([0, 1, 2])

respuesta: "aumento de la densidad poblacional"
tipo: completar
respuestas_validas: ["aumento de la densidad poblacional"]

enunciado: "La transición de la caza-recolección hacia {caso[idx]} provocó un ___."

explicacion: |
  La estabilidad de las fuentes de alimento permitió que las tasas de natalidad aumentaran y la mortalidad disminuyera, incrementando la densidad de habitantes en un mismo territorio.
```

### 5 — Relación de causalidad económica
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["economia_prehistorica", "causalidad"]

variables:
  par: uno_de([["excedente", "comercio"], ["excedente", "burocracia"], ["excedente", "urbanismo"]])
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: mc
opciones_explicitas: ["comercio", "burocracia", "urbanismo"]

enunciado: "El control y la gestión del {par[idx][0]} fue el motor que impulsó el desarrollo de la ___."

explicacion: |
  La necesidad de contabilizar y distribuir el excedente obligó a las sociedades a crear sistemas de registro y administración, dando origen a las primeras estructuras burocráticas.
```