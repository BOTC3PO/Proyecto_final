### 1 — El fin del nomadismo
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "agricultura"]

respuesta: "sedentarios"
tipo: completar
respuestas_validas: ["sedentarios"]

enunciado: "Al depender de la agricultura y la domesticación de plantas, los grupos humanos dejaron de ser nómadas para convertirse en ___."

explicacion: |
  La capacidad de producir alimento de forma controlada permitió que los grupos humanos se establecieran en un lugar fijo, dando inicio a la sedentarización.
```

### 2 — Causas de la sedentarización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["causas", "agricultura"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El cultivo de cereales permitió el asentamiento", "la agricultura"],
    ["La domesticación de plantas impulsó", "la agricultura"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la caza", "la agricultura", "la recolección", "la migración"]

enunciado: "{escenarios[escenario_idx][0]} fue el motor principal de la sedentarización."

explicacion: |
  El paso de una economía de subsistencia basada en la recolección a una basada en la producción agrícola permitió la permanencia en un territorio.
```

### 3 — El impacto del excedente
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

respuesta: "especialización"
tipo: completar
respuestas_validas: ["especialización", "especializacion"]

enunciado: "La generación de un ___ agrícola permitió que no todos los individuos tuvieran que dedicarse a la producción de alimentos, dando lugar a la ___ del trabajo."

explicacion: |
  El excedente alimentario permitió que surgieran otros roles sociales (artesanos, guerreros, sacerdotes), rompiendo la igualdad de la economía de subsistencia.
```

### 4 — Secuencia del proceso neolítico
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["procesos", "ordenar"]

respuesta: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  Primero se domestican las especies, lo que genera comida de sobra (excedente), lo que permite quedarse en un lugar (sedentarismo) y finalmente permite que la sociedad se divida en clases o profesiones.
```

### 5 — Relación entre agricultura y territorio
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["territorio", "geografia_humana"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El asentamiento cerca de ríos", "fueron"],
    ["La agricultura de riego", "fueron"]
  ]

respuesta: "fueron"
tipo: mc
opciones_explicitas: ["fueron", "fueron"]

enunciado: "Los asentamientos permanentes {casos[caso_idx][0]} una consecuencia directa de la necesidad de cuidar los cultivos."

explicacion: |
  La agricultura requiere una inversión de tiempo y cuidado constante en el mismo terreno, lo que obliga a la población a permanecer en un radio cercano a sus campos.
```