### 1 — Concepto de división del trabajo
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["conceptos_basicos", "economia"]

respuesta: "especialización"
tipo: completar
respuestas_validas: ["especialización"]

enunciado: "La división del trabajo consiste en la ___ de distintas personas o grupos en tareas específicas, en lugar de que todos realicen todas las actividades."

explicacion: |
  La división del trabajo permite que cada individuo se enfoque en una tarea concreta, aumentando la eficiencia y la destreza en la producción.
```

### 2 — Ventajas de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["eficiencia", "produccion"]

opciones_explicitas: ["Aumento de la producción", "Reducción de la calidad", "Aumento del tiempo de trabajo", "Desperdicio de materiales"]

respuesta: "Aumento de la producción"
tipo: mc

enunciado: "De acuerdo con los principios de la división del trabajo, ¿cuál es uno de sus principales beneficios económicos?"

explicacion: |
  Al especializarse, el trabajador gana rapidez y precisión, lo que permite producir una mayor cantidad de bienes en el mismo tiempo.
```

### 3 — Evolución histórica de la producción
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["historia_economica", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Artesano medieval", "Realiza todas las etapas de un producto de principio a fin"],
    ["Fábrica moderna", "Cada operario realiza una sola tarea repetitiva en una línea de montaje"]
  ]

enunciado: "En un escenario de {escenarios[escenario_idx][1]}, el modelo de producción se caracteriza por ser: ___"

pasos:
  - "Identificar el escenario seleccionado."
  - "Analizar si el trabajador realiza todo el proceso o solo una parte."

respuestas_validas: ["integral", "fragmentado"]
respuesta: "fragmentado"
tipo: completar

explicacion: |
  En la industria moderna, el proceso se fragmenta en tareas mínimas para maximizar la velocidad, a diferencia del modelo artesanal integral.
```

### 4 — Ordenar etapas de producción especializada
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["logica_procesos"]

opciones_explicitas: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]

respuesta: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de una cadena de producción altamente dividida:"

explicacion: |
  La división del trabajo permite que cada etapa de la cadena de suministro sea ejecutada por especialistas distintos.
```

### 5 — Impacto en el conocimiento
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["habilidades", "educacion"]

opciones_explicitas: ["Mayor versatilidad del trabajador", "Mayor destreza en tareas específicas", "Menor necesidad de entrenamiento", "Aumento de la autonomía técnica"]

respuesta: "Mayor destreza en tareas específicas"
tipo: mc

enunciado: "La especialización extrema derivada de la división del trabajo tiene como consecuencia directa en el trabajador:"

explicacion: |
  Si bien aumenta la destreza técnica en una tarea puntual, también puede llevar a la monotonía y a la pérdida de la visión global del proceso productivo.
```