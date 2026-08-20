### 1 — Identificación de conceptos
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos_basicos", "probabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Lanzar un dado sabiendo que tiene 6 caras", "riesgo"], ["Predecir el clima de un planeta desconocido", "incertidumbre"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Si nos enfrentamos a {datos[escenario_idx][0]}, estamos ante un escenario de ___."

explicacion: |
  Cuando conocemos la distribución de probabilidades de los resultados posibles, hablamos de riesgo. Cuando no tenemos información sobre las probabilidades, hablamos de incertidumbre.
```

### 2 — Aplicación en finanzas
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["finanzas", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Invertir en un bono con un 5% de probabilidad de default", "riesgo"], ["Lanzar una startup en un mercado sin precedentes tecnológicos", "incertidumbre"]]

respuesta: casos[caso_idx][1]
tipo: vf

enunciado: "El escenario de {casos[caso_idx][0]} se clasifica como incertidumbre."

explicacion: |
  En el primer caso, el porcentaje de default es conocido (probabilidad conocida = riesgo). En el segundo, la falta de datos históricos impide asignar una probabilidad (incertidumbre).
```

### 3 — Clasificación de escenarios
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  item_idx: uno_de([0, 1])
  items: [["Jugar a la ruleta sabiendo las probabilidades de la casa", "riesgo"], ["Un cambio repentino en la regulación política de un país", "incertidumbre"]]

respuesta: items[item_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analice el siguiente caso: {items[item_idx][0]}. ¿Cuál es la naturaleza del problema?"

explicacion: |
  El riesgo permite modelar matemáticamente el resultado, mientras que la incertidumbre requiere otros métodos de decisión ante la falta de datos probabilísticos.
```

### 4 — Completar la definición
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "probabilidad"
tipo: completar
respuestas_validas: ["probabilidad"]

enunciado: "La diferencia fundamental entre riesgo e incertidumbre radica en que en el riesgo conocemos la ___ de los eventos futuros."

explicacion: |
  El riesgo implica que el modelo probabilístico es conocido, permitiendo calcular la esperanza matemática del resultado.
```

### 5 — Ordenar procesos de decisión
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar la información disponible", "Asignar probabilidades a los eventos", "Calcular el valor esperado", "Tomar la decisión bajo riesgo"]
respuesta: ["Identificar la información disponible", "Asignar probabilidades a los eventos", "Calcular el valor esperado", "Tomar la decisión bajo riesgo"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para la toma de decisiones en un escenario de RIESGO:"

explicacion: |
  Para pasar de la incertidumbre al riesgo, primero debemos identificar datos, luego asignar probabilidades y finalmente calcular el valor esperado para decidir.
```