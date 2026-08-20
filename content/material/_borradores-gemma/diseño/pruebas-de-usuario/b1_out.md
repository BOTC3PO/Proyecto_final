### 1 — Definición de prueba de usuario
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "investigacion"]

respuesta: "observar"
tipo: "completar"
respuestas_validas: ["observar"]

enunciado: "En una prueba de usabilidad, el objetivo principal es ___ a usuarios reales mientras interactúan con un diseño para identificar problemas de uso."

explicacion: |
  La observación directa permite capturar comportamientos, frustraciones y flujos de trabajo que el usuario no siempre puede verbalizar en una encuesta.
```

### 2 — El rol del moderador
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["roles", "metodologia"]

opciones_explicitas: ["Interferir en cada paso del usuario", "Guiar la sesión sin sesgar las respuestas", "Corregir al usuario cuando comete un error", "Evaluar la estética del diseño"]
respuesta: "Guiar la sesión sin sesgar las respuestas"
tipo: "mc"

enunciado: "Durante una prueba de usuario, ¿cuál es la función principal del moderador?"

explicacion: |
  El moderador debe guiar la sesión y asegurar que se completen las tareas, pero nunca debe dar pistas o corregir al usuario, ya que esto invalidaría los resultados de usabilidad.
```

### 3 — Verdadero o Falso: Sesgo de observación
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

respuesta: falso
tipo: "vf"

enunciado: "Es verdadero que el investigador debe intervenir inmediatamente cuando el usuario se siente confundido para asegurar que la prueba sea eficiente."

explicacion: |
  Es falso. Si el investigador interviene para ayudar, no está midiendo la usabilidad real del diseño, sino la capacidad del investigador para resolver dudas.
```

### 4 — Fases de una prueba de usuario
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

opciones_explicitas: ["Preparación, Ejecución, Análisis", "Análisis, Ejecución, Preparación", "Ejecución, Preparación, Análisis", "Preparación, Análisis, Ejecución"]
respuesta: ["Preparación, Ejecución, Análisis"]
tipo: "ordenar"

enunciado: "Ordena las fases cronológicas de un proceso de prueba de usuario:"

explicacion: |
  Primero se debe definir el escenario y las tareas (Preparación), luego se realiza la sesión con el usuario (Ejecución) y finalmente se procesan los datos hallados (Análisis).
```

### 5 — Identificación de problemas
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["usabilidad", "hallazgos"]

variables:
  escenario_idx: uno_de([0, 1])

datos:
  - ["El usuario no encuentra el botón de 'Finalizar compra' tras 30 segundos.", "problema"]
  - ["El usuario completa la tarea rápidamente sin dudas.", "exito"]

respuesta: "problema"
tipo: "mc"

opciones_explicitas: ["problema", "exito"]

enunciado: "Si en el escenario {datos[escenario_idx][0]} se detecta, estamos ante un: ___"

explicacion: |
  Detectar un 'problema' de usabilidad es el objetivo de la prueba: identificar fricciones para poder iterar el diseño y resolverlas en la siguiente versión.
```