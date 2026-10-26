### 1 — El excedente alimentario
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

respuesta: "excedente"
tipo: completar
respuestas_validas: ["excedente"]

enunciado: "La capacidad de producir más alimento del que se consume inmediatamente se denomina ___."

explicacion: |
  Este fenómeno permitió que no todas las personas tuvieran que dedicarse a la recolección o caza, permitiendo la especialización del trabajo.
```

### 2 — Consecuencia del sedentarismo
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["sedentarismo", "agricultura"]

variables:
  escenario: uno_de([["agricultura estable", "sedentarismo"], ["caza nómada", "desplazamiento constante"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["sedentarismo", "desplazamiento constante", "nomadismo extremo", "migración estacional"]

enunciado: "La adopción de la {escenario[0]} permitió que los grupos humanos abandonaran el nomadismo, dando paso al ___."

explicacion: |
  Al tener una fuente de alimento constante y predecible, las poblaciones pudieron establecer asentamientos permanentes.
```

### 3 — Impacto demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["demografia", "neolitico"]

respuesta: "aumento"
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "inestabilidad"]

enunciado: "La disponibilidad de excedentes alimentarios provocó un ___ de la población humana."

explicacion: |
  La mayor disponibilidad de calorías y la estabilidad de los asentamientos permitieron un crecimiento demográfico sostenido.
```

### 4 — El proceso de transición
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["secuencia", "transicion"]

respuesta: ["agricultura", "excedente", "sedentarismo", "especialización"]
tipo: ordenar
opciones_explicitas: ["agricultura", "excedente", "sedentarismo", "especialización"]

enunciado: "Ordena la siguiente secuencia lógica de la Revolución Neolítica:"

pasos:
  - "Primero, la domesticación de plantas y animales."
  - "Segundo, la acumulación de comida sobrante."
  - "Tercero, el establecimiento de asentamientos permanentes."
  - "Cuarto, la aparición de artesanos y guerreros."

explicacion: |
  La secuencia muestra cómo la producción de alimentos (agricultura) genera excedentes, lo que permite el sedentarismo y, finalmente, la división del trabajo (especialización).
```

### 5 — Relación causa-efecto
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["causalidad", "sociedad"]

variables:
  caso: uno_de([["excedente", "sedentarismo"], ["caza", "nomadismo"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["sedentarismo", "nomadismo", "migración", "recolección"]

enunciado: "Si la agricultura genera un {caso[0]}, la consecuencia social directa es el ___."

explicacion: |
  El excedente permite que la sociedad deje de moverse constantemente en busca de comida, fijando la población en un territorio.
```