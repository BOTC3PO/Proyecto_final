### 1 — Eficiencia y especialización
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["economia", "productividad"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas: ["eficiencia", "productividad"]

enunciado: "Cuando un proceso se divide en tareas simples y cada trabajador se especializa en una de ellas, se logra una mayor ___ en la producción total."

explicacion: |
  La especialización permite que el trabajador perfeccione su técnica en una tarea específica, reduciendo el tiempo de transición entre actividades y aumentando la eficiencia general.
```

### 2 — El impacto en la producción
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["taller de costura", "un sastre"], ["fábrica de clavos", "un operario"]]
  resultado: [["mayor rapidez", "un sastre"], ["mayor volumen", "un operario"]]

respuesta: resultado[escenario_idx][1]
tipo: mc
opciones_explicitas: ["mayor rapidez", "mayor volumen", "menor calidad", "más costos"]

enunciado: "En un {datos[escenario_idx][0]}, la especialización de {datos[escenario_idx][1]} permite obtener un {resultado[escenario_idx][0]} en la producción."

explicacion: |
  La división del trabajo transforma la producción artesanal en procesos masivos, aumentando drásticamente el volumen de bienes disponibles.
```

### 3 — Ventajas de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["productividad", "habilidad"]

respuesta: "perfeccionamiento de la destreza"
tipo: mc
opciones_explicitas: ["perfeccionamiento de la destreza", "pérdida de autonomía", "aumento de la fatiga mental", "reducción de la velocidad"]

enunciado: "Una de las principales ventajas teóricas de la división del trabajo es el ___ del trabajador en su tarea asignada."

explicacion: |
  Al repetir una acción específica, el trabajador adquiere una destreza mecánica y técnica que no podría lograr si realizara todo el proceso de principio a fin.
```

### 4 — El proceso de producción industrial
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta: ["materias primas", "tareas especializadas", "producto terminado"]
tipo: ordenar
opciones_explicitas: ["materias primas", "tareas especializadas", "producto terminado"]

enunciado: "Ordena la secuencia lógica de un proceso basado en la división del trabajo industrial:"

pasos:
  - "Se recolectan los insumos básicos."
  - "Cada trabajador realiza una parte específica del ensamblaje."
  - "Se obtiene el bien final listo para el mercado."

explicacion: |
  La división del trabajo requiere un flujo ordenado: primero la entrada de materiales, luego la ejecución fragmentada y finalmente la salida del producto.
```

### 5 — Relación entre especialización y productividad
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["productividad", "economia"]

variables:
  caso_idx: uno_de([0, 1])
  valores: [[10, 50], [5, 100]]
  total: [500, 500]

respuesta: total[caso_idx]
tipo: input
tolerancia_abs: 0

enunciado: "Si en un escenario de división del trabajo, un trabajador produce {valores[caso_idx][0]} unidades en una hora sin especializar, pero con la especialización produce {valores[caso_idx][1]} unidades, ¿cuál es la producción total en 10 horas si solo contamos la producción especializada?"

pasos:
  - "Identificar la producción por hora con especialización: {valores[caso_idx][1]}"
  - "Multiplicar por el número de horas: {valores[caso_idx][1]} * 10"

explicacion: |
  La especialización actúa como un multiplicador de la productividad, permitiendo que la producción total crezca exponencialmente respecto al trabajo no especializado.
```